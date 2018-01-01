Hands-on: Google Assistant app with Actions on Google
=====================================================

# Objective

The objectif of this hands-on session is to create a conversational application 
for Google Assistant using [Actions on Google](https://developers.google.com/actions/).

Before start, let's clarify some concepts:

- **The Google Assistant**: A conversation between you and Google that helps you get more done in your world.
- **Google Home**: an assistant-enabled smart speaker. Android phones also have the assistant enabled.
- **Actions On Google**: The platform that enables developers to build apps for the Google Assistant. Currently you can use Dialogflow, Actions SDK & Converse.ai to create custom app.

Among different solutions provided by Actions on Google, we are going to use 
[DialogFlow](https://console.dialogflow.com/api-client/) and [Firebase](https://console.firebase.google.com/)
for today's example.

# Application context

A smart recipe assistant that helps you figure out what to cook for dinner. A 
simple conversation example could be:

```
User: OK Google, talk to Recipe Assistant
Google: Okay here is the Recipe Assistant
User: I have eggs and potatos in my fridge, what can I make?
Recipe Assistant: Tortilla! Do you want more information?
User: Good idea! Thank you.
```

# Steps

## 1. Create your application

Create the application in [Actions on Google console](https://console.actions.google.com/). 
This may takes a few seconds depending on your internet connection.

![step-1-1](screenshots/step-1-1.png)

Then choose DialogFlow to add actions. 

![step-1-2](screenshots/step-1-2.png)

You will then be redirected to the [DialogFlow Agent creation](https://console.dialogflow.com/api-client/#/newAgent) 
screen:

![step-1-3](screenshots/step-1-3.png)

Let's stay with DialogFlow V1 API because V2 is still in beta and not very stable.
Agents are best described as NLU (Natural Language Understanding) modules. If you
want to know about the concept, read the document [here](https://dialogflow.com/docs/agents).

## 2. Create your first `Entity`

First let's get an idea of [what does an `Entity` represent in DialogFlow](https://dialogflow.com/docs/entities).

Now that you are ready to create your own entity, go to the `Entities` tab from 
the left side menu. The entity in our recipe assistant example is apparently the ingredient! 
So start by creating this entity and adding some entries that you can think of.

## 3. Create your first `Intent`

An [intent](https://dialogflow.com/docs/intents) represents a mapping between what
a user says and what action should be taken by your software. In the agent that
you just created, there is already a `Default Welcome Intent` and a 
`Default Fallback Intent`. 

In the creation of Intent screen you will see following sections (from top to bottom):

### Contexts

Contexts are designed for passing on information from previous conversations 
or external sources (e.g., user profile, device information, etc). This is a
relatively advanced concept. You can discover it later when you have several 
working intents.

### User says

In order to obtain an optimized result, you should at least provide around 10-20 
sentences for the same intent. When you are entering the user expression, you 
will notice that you can annotate words as entities:

![intent-user-says](screenshots/intent-user-says.png)

You can check [here](https://dialogflow.com/docs/intents#example_annotation) to
understand better how to link a word (or phrase) to an entity.

### Action

Once you finish defining what user says, you have to name your action manually. 
It will be the trigger word for your app to perform a particular action. Parameters 
can be filled in automatically from the ‘Users says’ examples and templates, 
or added manually.

See detailed documentation[here](https://dialogflow.com/docs/actions-and-parameters).

### Response

In this section, you can define your agent’s responses which will be provided 
by your application when the intent is triggered. It can be simple text, or more
sophisticated text with references to parameter values.

You can also add supported [rich messages](https://dialogflow.com/docs/rich-messages),
such as integration with facebook or slack.

#### SSML (Speech Synthesis Markup language)

If you want to embed some audio file and structure your reponse in a more logic
way, you can have a look at [Speech Synthesis Markup Language](https://developers.google.com/actions/reference/ssml).

Here is a simple example:

```xml
<speak>
  Here are <say-as interpret-as="characters">SSML</say-as> samples.
  I can pause <break time="3s"/>.
  I can play a sound
  <audio src="https://www.example.com/MY_MP3_FILE.mp3">didn't get your MP3 audio file</audio>.
  I can speak in cardinals. Your number is <say-as interpret-as="cardinal">10</say-as>.
  Or I can speak in ordinals. You are <say-as interpret-as="ordinal">10</say-as> in line.
  Or I can even speak in digits. The digits for ten are <say-as interpret-as="characters">10</say-as>.
  I can also substitute phrases, like the <sub alias="World Wide Web Consortium">W3C</sub>.
  Finally, I can speak a paragraph with two sentences.
  <p><s>This is sentence one.</s><s>This is sentence two.</s></p>
</speak>
```

At the end you can save your Intent and try to test it out.

## 4. Fulfill user intentions using webhook

As you reach the end of the `Intent` creation, you will see the section **Fulfillment**.

![intent-fulfillment](screenshots/intent-fulfillment.png)

This is actually the entry to infinite possibilities, because you are able to
fulfill user intentions with your own backend logic!

Now check the case `Use Webhook` and start to work on your own fulfillment!

### 4.1 Set up your Webhook with Firebase functions

Make sure you have firebase tools installed 

```
$ npm install -g firebase-tools
```

Then login with your Goolge account which contains your assistant project:
```
$ firebase login
```

Deploy your functions with following line and retrieve your deploy link
```
$ firebase deploy
```

Go to Fulfillment and update your webhook link.

#### Test with localhost

To accelerate the test, you can serve your function locally:
```
$ firebase serve --only functions
```
and use [ngrok](https://ngrok.com/) to create a secure tunnel to your localhost

### 4.2 Implement a fulfillment

The example folder contains a simple skeleton with firebase functions & [DialogFlow](https://github.com/actions-on-google/actions-on-google-nodejs) Node.js SDK.

## 5. Test your fulfillment

// TODO

### 5.1 Complete your application's information

### 5.2 Test with Simulator

### 5.3 Test with physical device (Google Home / Android)

## 6. Context & Firebase database

// TODO

