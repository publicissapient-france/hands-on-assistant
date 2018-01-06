// example XKE hands-on-asistant

'use strict';

const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const helloWorld = app => {
  // TODO your hello world logic
  const ingredient = app.getArgument(Parameters.INGREDIENT);
  app.tell("Hello you! Did you just say " + ingredient)
}

const Actions = {
  HELLO_WORLD: 'hello.world',
  // TODO: add your actions here
}

const Parameters = {
  INGREDIENT: 'ingredient'
  // TODO: add your ingredient
};

const actionMap = new Map();
actionMap.set(Actions.HELLO_WORLD, helloWorld);
// TODO map your action with your fulfillment logic


// HTTP Cloud Function for Firebase handler
exports.recipeassistant = functions.https.onRequest(
  (request, response) => new DialogflowApp({request, response}).handleRequest(actionMap)
);
