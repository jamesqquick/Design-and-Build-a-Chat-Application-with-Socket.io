# Design and Build a Chat App with Socket.io

> Watch on [YouTube](https://www.youtube.com/playlist?list=PLDlWc9AfQBfbyGwhSlxg16mQGpGnauCwq)

![](./images/preview.png)

## Introduction

This mini series is jam packed full of useful information for the beginner to intermediate Web Developer.

### What We'll Cover

HTML, CSS, JavaScript
ES6 - Template Strings, Map(), Arrow Functions
Flexbox and CSS Variables
NPM, Node, Express, Socket.IO
Web Design with Sketch

In this mini series we are going to Design and Build a chat application using Socket.io. We will first discuss basic design concepts while exploring the design for this application in Sketch. We will then move on to laying out our application in HTML and CSS, and lastly, will add Javascript to complete the functionality. Along the way, we are going to use modern Web Development technologies and features such as Flexbox, CSS Variables, ES6 Arrow Functions, ES6 Map, Let and Const variables, Node.js, Express.js, and Socket.io.

## [Part 1](/part-1) - App Design

In Part 1 of this series, we are going to explore basic design concepts in Web Development like typography, colors, white space, etc. We will explore the design for this demo application, "Quick Chat", in Sketch, one of the most popular design tools available. Additionally, we will look at a helpful resource for testing different color palettes.

Resources
https://www.sketchapp.com/
https://www.materialpalette.com/

## [Part 2](/part-2) - Creating HTML Structure and CSS Helper Classes

In Part 2 of this series, we will create the HTML structure for the application as well as stubbing out our CSS with resets, variables, and helper classes.

## [Parts 3 and 4](/parts-3-and-4) - Styling and Laying Out Our App

In Parts 3 and 4 of this series we will begin to style and organize our application. We will stub out dummy message data, create our login and message forms, and align everything using flexbox. Lastly, we will hide the chat window initially so that we can require the user to login to access the chat window.

## [Part 5 and 6](/parts-5-and-6) - Adding Functionality in Javascript

In Parts 5 and 6 of this series, we will dynamically create the HTML for each message in JavaScript by using ES6 template strings and the Map function. We will create the event handlers for our login and message buttons as well as simulating page navigation by hiding/showing login and chat windows appropriately.

## [Part 7](/part-7)- Create Node server and Socket.io Connection

In Part 7 of this series, we will initialize our code as a Node application by using NPM and install Express and Socket.io as dependencies. We will move the existing HTML, CSS, and JS files we have been working on to a public directory as well as set up the server to serve our application using Express. Lastly, we will add the necessary code to the server and front-end application to register the socket connection with Socket.io.

## [Part 8](/part-8) - Complete Socket.io Integration for Real-Time Messaging

In Part 8 of this series, we will update the event handler for the send message button to send the new message to the server using the Socket.io socket connection. The server will then broadcast the message to each client that has registered a connection. In other words, the new message will be broadcasted to each user logged into the application. Lastly, we will update the date property of each message to be more human readable.
