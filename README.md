### Social Networking Kata
----------------------

Implement a console-based social networking application (similar to Twitter) satisfying the scenarios below.
### Install

**Dependencies**: Install required dependencies

> \> Install node.js

> \> Install npm

> \> git clone the repo

> \> Move to root folder of the project

To install the needed modules
> \> npm install

> \> npm install -g social-cli

In a linux environemnt you can link and call the name of the project
> \> npm link

To start the application (this runs index.js)
> \> npm start 

To test with karma
> \> npm test

**Commands**: 

To send a message
> \> Type user then " -> " without brackets and then a message. Eg. Alice -> Hello world!

To follow a user
> \> Type user then " follows " without brackets and then another user. Eg. Alice follows Bob

To see wall
> \> Type user then " wall " without brackets. Eg. Alice wall

### Scenarios

**Posting**: Alice can publish messages to a personal timeline

> \> Alice -> I love the weather today    
> \> Bob -> Damn! We lost!     
> \> Bob -> Good game though.    

**Reading**: Bob can view Alice’s timeline

> \> Alice    
> \> I love the weather today (5 minutes ago)    
> \> Bob    
> \> Good game though. (1 minute ago)     
> \> Damn! We lost! (2 minutes ago)    

**Following**: Charlie can subscribe to Alice’s and Bob’s timelines, and view an aggregated list of all subscriptions

> \> Charlie -> I'm in New York today! Anyone wants to have a coffee?     
> \> Charlie follows Alice    
> \> Charlie wall    
> \> Charlie - I'm in New York today! Anyone wants to have a coffee? (2 seconds ago)    
> \> Alice - I love the weather today (5 minutes ago)    

> \> Charlie follows Bob    
> \> Charlie wall    
> \> Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)     
> \> Bob - Good game though. (1 minute ago)     
> \> Bob - Damn! We lost! (2 minutes ago)     
> \> Alice - I love the weather today (5 minutes ago)    

### General requirements 

- Application must use the console for input and output; 
- User submits commands to the application: 
    - posting: \<user name> -> \<message> 
    - reading: \<user name> 
    - following: \<user name> follows \<another user> 
    - wall: \<user name> wall 
- Don't worry about handling any exceptions or invalid commands. Assume that the user will always type the correct commands. Just focus on the sunny day scenarios.
- Use whatever language and frameworks you want. (provide instructions on how to run the application)
- **NOTE:** "posting:", "reading:", "following:" and "wall:" are not part of the command. All commands start with the user name.

**IMPORTANT:**  Implement the requirements focusing on **writing the best code** you can produce.

**CODE SUBMISSION:** Add the code to your own Github account and send us the link.