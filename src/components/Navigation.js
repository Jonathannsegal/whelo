import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './routes';

/**
 * This is just used for devlopment to get around the site with ease DO NOT PUT IN FINAL RELEASE UNLESS CHANGED FROM 5/20/19
 */
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LOGIN}>Log In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.CHAT}>Chat</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account(not implemnted yet</Link>
      </li>
      <li>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot My Password (not implemented yet)</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;