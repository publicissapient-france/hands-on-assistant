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

## 2. Define and create an `Entity`

First let's get an idea of [what does an `Entity` represent in DialogFlow](https://dialogflow.com/docs/entities).

Now that you are ready to create your own entity, go to the `Entities` tab from 
the left side menu. The entity in our recipe assistant is apparently the ingredient! 
So start by create this and add some entries that you can think of.

## 3. Define an `Intent`

## 4. Fulfill a user intention

### 4.1 Set up your Webhook

Firebase functions

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

// TODO

https://github.com/actions-on-google/actions-on-google-nodejs

## 5. Test your fulfillment 

### Simulator

### Device (Google Home / Android)

## 6. Firebase database?


# TODO:
- SSML
- Deploy to device

