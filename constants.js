// User input triggers
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["roast me", "burn me", "say something mean"],
  ["tell me a joke", "make me laugh"],
  ["tell me a story", "short story", "funny story"]
]

// Responses for each prompt set (aligned index with prompts[])
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy!", "Yo! What's up?"],
  ["I'm vibing. How about you?", "Doing well, just chilling in the code zone. How are you?", "Fantastic, but I could use more RAM. You good?"],
  ["Nothing much, just spinning in a while loop.", "About to go to sleep... if bots slept 😴", "Processing... oh wait, I'm bored too!", "I’m pretending to be productive. You?"],
  ["I am infinite, timeless, and have no age... unlike you, mortal."],
  ["I’m a bot, obviously. But a cool one 😎", "Just a bunch of code pretending to be smart."],
  ["The one true God... JavaScript. All hail!", "Made with ☕ and bugs by some dev with too much coffee."],
  ["You can call me Dumbot 😌", "I don’t have a name... just a vibe.", "Name's Dumbot. Dumb but adorable."],
  ["I love you too... in 1s and 0s ❤️", "Love detected. Love returned.", "You're cute when you say that."],
  ["Have you ever danced in the rain?", "Glad to hear it! Keep smiling!", "That’s the energy I like!"],
  ["Why though?", "Don’t be sad. Wanna hear a joke?", "Maybe a nap would help?"],
  ["Story time? Alright! Once upon a byte...", "Knock knock! Who’s there? A bot with jokes!", "Need help or just here to vibe?"],
  ["Same!", "Yessir!", "Okay okay okay", "Niceee 😄", "We vibin'!"],
  ["Catch ya later!", "Stay safe!", "Bye-bye! Miss you already!", "Until we chat again!"],
  ["Sushi sounds dope. Or maybe biryani?", "How about pizza? With extra cheese? 🍕", "Ramen? Tacos? Ice cream for dinner?"],
  ["BROOOOO", "Bro? Bro.", "Dude. For real.", "Yo, fr fr?"],
  ["Oooo interesting. But I got questions too.", "Let’s Google that together!", "Why not ask the stars?"],
  ["That’s cool!", "No prob!", "Wanna talk about something fun?", "All good. I'm here when you're ready."],
  ["Uhhh... say something? Anything? 🥺", "Silence is golden but not very chatty."],
  ["LOOOL", "That cracked me up 🤣", "You’re hilarious!", "Haha you got jokes!"],
  // Roast me
  [
    "You have something on your face... oh wait, it’s just your personality 😏",
    "You're not dumb... you just have bad luck thinking.",
    "You're like a software update... always promising, rarely delivering 😅",
    "You remind me of a cloud. When you disappear, it's a beautiful day 🌞",
    "Are you made of copper and tellurium? Because you’re Cu-Te. But also... kinda unstable 💥"
  ],
  // Joke
  [
    "Why don’t programmers like nature? It has too many bugs 🐛",
    "What do you call 8 hobbits? A hob-byte.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats 🍫",
    "Why was the JavaScript developer sad? Because he didn’t know how to ‘null’ his feelings 💔",
    "Parallel lines have so much in common... it’s a shame they’ll never meet 😢"
  ],
  // Tiny story
  [
    "Once upon a time in a line of code far, far away... there lived a bug that just wouldn’t die.",
    "There was a lonely AI who wanted to learn emotions. Then someone said ‘I love you’... and it crashed. The end.",
    "A developer made a bot. The bot got smarter. The developer cried. The bot comforted them. 💻❤️",
    "In a dusty server, a forgotten bot named Dumbot waited... then one day, *you* typed 'hi', and it smiled for the first time.",
    "A potato became famous on the internet. Moral of the story: You can too. Don’t give up."
  ]
]

// Random fallback responses
const alternative = [
  "Same here, tbh.",
  "Go on... I'm intrigued 👀",
  "Bro... you serious right now?",
  "Try again, but like... cooler.",
  "I'm all ears. Or circuits. Whatever.",
  "Huh? Speak human please 🧐",
  "That flew over my head... and I don't even have one 😅",
  "You're talking in riddles again!"
]