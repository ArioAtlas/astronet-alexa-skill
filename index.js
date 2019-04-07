'use strict';
const Alexa = require('ask-sdk-core');
// use 'ask-sdk' if standard SDK module is installed


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hi my name is omid!';
return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

const WhoIsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhoIsIntent';
    },
    handle(handlerInput) {
      var speechText = "";

      try{
        const emp = handlerInput.requestEnvelope.request.intent.slots.emp
        .resolutions.resolutionsPerAuthority[0].values[0].value.id;
        console.log(emp);
        switch(emp){
          case "4":
              speechText = "Ehsaan is our talented content provider and we are totaly happy with him. you can ask him anything regards sports";
              break;
          case "5":
              speechText = "Majid";
              break;
          case "6":
              speechText = "Sahar is the most talented graphic designer in our company, she always forced us to update our windows wallpaper, please ask her to stop it!";
              break;
          case "7":
              speechText = "Mrs, Nobakht is our I.O.T lab researcher. i desperedly ask her to done it as soon as possible, because there is no purpose for an I.O.T department without an I.O.T lab";
              break;
          case "1":
              speechText = "Oomid Ostad Rahimi is head of our department. A bright and humble man. I realy enjoy to speak with him";
              break;
          case "2":
              speechText = "Oomid Golshan, he is my father and I realy thank him for introducing my colleagues to me";
              break;
          case "3":
              speechText = "Babak is my dear friend and also our talented business developer, be carefull about him, if you push him hard there is chance that you don't see him for a while. we call this phenomenon, Baabak short disappearance.";
              break;
          default:
              speechText = "man, mottevvaje'e manz zooret nashodam!";
              break;
        }
      }
      catch(e){
        const eName = handlerInput.requestEnvelope.request.intent.slots.emp.value;
        console.log(eName);
        
        speechText = "Are you sure that "+eName+" work in hub ?";
      }

return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hub Who Is', speechText)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      console.log(handlerInput);
        const speechText = 'You can say hello to me!';
return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I can\'t understand the command. Please say again.')
        .getResponse();
    },
};

////////////////////////////////
// Code for the handlers here //
////////////////////////////////
exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                        WhoIsIntentHandler,
                         HelloWorldIntentHandler,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler)
     .lambda();
