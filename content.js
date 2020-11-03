$(document).ready(function(){
  
  var excusesList = [
  "Thats weird",
  "Its never done that before",
  "It worked yesterday",
  "How is that possible?",
  "It must be a hardware problem",
  "It must be a remote config problem",
  "What did you type in wrong to get it to crash?",
  "There must be something wrong in your data",
  "I havent touched that module / feature in weeks",
  "You must have the wrong version",
  "Its just some unlucky coinsidence",
  "I cant test everything!",
  "THIS cant be the source of THAT",
  "It works, but it hasnt been tested",
  "Someone must have changed my code",
  "Did you check your system for a virus",
  "Even though it doesnt work, how does it feel?",
  "You cant use that version on your system",
  "Why do you want it to do that anyway?",
  "Where were you in the user journey when it crashed?",
  "Can you show me the exact steps you took which lead to the crash?",
  "It works on my machine",
  "Well it worked yesterday",
  "The code is fine, the users need a better knowledge base",
  "That should never have worked anyway"
];
  var randomItem = excusesList[Math.floor(Math.random()* excusesList.length)];
  $('#testVal').text(randomItem);
});




