import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		/* Helper */

		this.fieldValue = app.firestore.FieldValue;
		this.emailAuthProvider = app.auth.EmailAuthProvider;

		/* Firebase APIs */

		this.auth = app.auth();
		this.db = app.firestore();
	}

	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doSendEmailVerification = () =>
		this.auth.currentUser.sendEmailVerification({
			url: import.meta.env.VITE_CONFIRMATION_EMAIL_REDIRECT,
		});

	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);

	// *** Merge Auth and DB User API *** //

	onAuthUserListener = (next, fallback) =>
		this.auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.user(authUser.uid)
					.get()
					.then(snapshot => {
						const dbUser = snapshot.data();

						// default empty roles
						if (!dbUser.roles) {
							dbUser.roles = {};
						}

						// merge auth and db user
						authUser = {
							uid: authUser.uid,
							email: authUser.email,
							emailVerified: authUser.emailVerified,
							providerData: authUser.providerData,
							...dbUser,
						};

						next(authUser);
					});
			} else {
				fallback();
			}
		});

	// *** User API ***

	user = uid => this.db.doc(`users/${uid}`);

	users = () => this.db.collection('users');

	// *** Message API ***

	message = uid => this.db.doc(`messages/${uid}`);

	messages = () => this.db.collection('messages');
}

export default Firebase;
