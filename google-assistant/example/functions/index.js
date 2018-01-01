// example XKE hands-on-asistant

'use strict';

const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

/** Dialogflow Actions {@link https://dialogflow.com/docs/actions-and-parameters#actions} */
const Actions = {
	// TODO: define your actions here
	HELLO_WORLD: 'hello.world'
};

/** Dialogflow Parameters {@link https://dialogflow.com/docs/actions-and-parameters#parameters} */
const Parameters = {
  // TODO: define your parameters here
};

class RecipeAssistant {
  /**
   * Create a new instance of the app handler
   * @param {AoG.ExpressRequest} req
   * @param {AoG.ExpressResponse} res
   */
  constructor (req, res) {
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
    /** @type {DialogflowApp} */
    this.app = new DialogflowApp({ request: req, response: res });
  }

  /**
   * Get the Dialogflow intent and handle it using the appropriate method
   */
  run () {
    const map = this;
    const action = this.app.getIntent();
    map[action]();
  }

  [Actions.HELLO_WORLD] () {
  	// Fulfillment example
  	this.app.tell("Hello World")
  }
}

// HTTP Cloud Function for Firebase handler
exports.recipeassistant = functions.https.onRequest(
  (request, response) => new RecipeAssistant(req, res).run()
);
