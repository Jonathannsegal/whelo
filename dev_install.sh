#! /bin/bash

echo "###INSTALLING DEPENDENCIES###"
npm install

echo "###RUNNING AUDIT###"
npm audit fix

echo "###STARTING THE DEV SERVER###"
npm start
