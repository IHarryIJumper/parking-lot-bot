require("./helpers/consoleLogHelper.js");

const { IncomingWebhook, WebClient } = require("@slack/client");
const Config = require("../config.json");

const express = require("express");
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Requested-With"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
// const token = process.env.SLACK_TOKEN;
const token = Config.SLACK_TOKEN;
// const webhook = Config.SLACK_WEBHOOK_URL;

console.log("Slack bot token: ", token);

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = Config.CONVERSATION_ID;

app.get("/", (req, res) => {
    console.log("GET /", "from", req.connection.remoteAddress);
    res.send("car-bot");
});

app.post("/kek", (req, res) => {
    console.log("POST /kek", "from", req.connection.remoteAddress);
    console.info("request data", req.body.text);
    // console.info("response data", res);
    web.chat
    .postMessage({ channel: conversationId, text: `Message from: ${req.body.user_name}, message: ${req.body.text}` })
    .then(res => {
        // `res` contains information about the posted message
        console.log("Message sent: ", res.ts);
    })
    .catch(console.error);
    res.send(`You messaged: ${req.body.text}`);
});

// See: https://api.slack.com/methods/chat.postMessage
/* web.chat
    .postMessage({ channel: conversationId, text: "Hello there" })
    .then(res => {
        // `res` contains information about the posted message
        console.log("Message sent: ", res.ts);
    })
    .catch(console.error); */

/* web.channels
    .list()
    .then(res => {
        // `res` contains information about the posted message
        console.log("Message sent: ", res.ts, res);
    })
    .catch(console.error); */

/* const timeNotification = new IncomingWebhook(webhook);
const currentTime = new Date().toTimeString();
timeNotification.send(`The current time is ${currentTime}`, (error, resp) => {
    if (error) {
        return console.error(error);
    }
    console.log("Notification sent", resp);
    console.log("Waiting a few seconds for search indexes to update...");
    setTimeout(() => {
        console.log("Calling search.messages");
        web.search
            .messages({ query: 'The current time is' })
            .then(resp => {
                if (resp.messages.total > 0) {
                    console.log("First match:", resp.messages.matches[0]);
                } else {
                    console.log("No matches found");
                }
            })
            .catch(console.error);
    }, 12000);
}); */


app.listen(process.env.PORT || 8080);

console.info(
    `Listening on ${process.env.ROOT_URL || "http://localhost"}:${process.env
        .PORT || 8080}`
);