module.exports  = {
  userInput: '',
  progress: { width: 0 },
  wellFormedInput: true,
  showCongradulations: true,
  newUserPost: {
    name: '',
    author: 'ReginaldTheRegexDog',
    authorId: '57f5bb3033955d001122a971',
    difficulty: '1',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
    authenticatedInput: false,
  },
  userInfo: {
    "_id":"57f5bb3033955d001122a971",
    "accessToken":"74379ce703516d2530e682821600629f14ef8e8a",
    "gitHandle":"ReginaldTheRegexDog",
    "githubId":22650912,
    "name":"Reginald RegExpert",
    "created":"2016-10-06T02:47:12.560Z",
    "avatar_url":"https://avatars.githubusercontent.com/u/22650912?v=3",
    "__v":0,
    "tutorial_progress":{"tutorialUrl":"lets-get-meta","order":2},
    "completed_challenges":["57f3191f2bf2082f7a74cce5","57f319202bf2082f7a74cd31","57f3191f2bf2082f7a74ccd5"],
    "authored_challenges":["57f673aaf10807d8c48d6315"]
  },
  challenges: [{
    "_id": "57f3191f2bf2082f7a74ccd5",
    "name": "Is it a letter?",
    "author": "troygibb",
    "description": "If the string contains an ASCII letter, then match it!",
    "difficulty": 1,
    "nameurl": "is-it-a-letter",
    "authorId": "57f2c6e2bf64faa36bf925d1",
    "__v": 0,
    "answers": [
      {
        "userId": "57f3190b8db4bc7e4a6bf8cd",
        "user": "hellodanali",
        "answer": "/\\W/",
        "_id": "57f339a78db4bc7e4a6bf8ce"
      },
      {
        "userId": "57f3190b8db4bc7e4a6bf8cd",
        "user": "hellodanali",
        "answer": "/\\D/",
        "_id": "57f41c94ca6ba9826475cb99"
      },
      {
        "userId": "57f2c6e2bf64faa36bf925d1",
        "user": "troygibb",
        "answer": "/\\D/",
        "_id": "57f43cd85ea85dba3d8c34b6"
      },
      {
        "userId": "57f2ce9a600e3f0011605ef4",
        "user": "lwonsower",
        "answer": "/\\D/",
        "_id": "57f534695dfbc7001111afec"
      },
      {
        "userId": "57f316af033a052f48668d11",
        "user": "bbtran",
        "answer": "/\\D/",
        "_id": "57f5b317c4c6870011cce5ae"
      },
      {
        "userId": "57f5bb3033955d001122a971",
        "user": "ReginaldTheRegexDog",
        "answer": "/\\D/",
        "_id": "57f673f5f10807d8c48d631c"
      }
    ],
    "testCases": [
      {
        "case": "knock-knock?",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccdd"
      },
      {
        "case": "who's there?",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccdc"
      },
      {
        "case": "Annoying digits",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccdb"
      },
      {
        "case": "Annoying digits who?",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccda"
      },
      {
        "case": "123214124122",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccd9"
      },
      {
        "case": "23423423098423",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccd8"
      },
      {
        "case": "45983498534",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccd7"
      },
      {
        "case": "34544",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccd6"
      }
    ]
  },
  {
    "_id": "57f3191f2bf2082f7a74ccf3",
    "name": "Is it a number?",
    "author": "troygibb",
    "description": "Is a description really necessary?",
    "difficulty": 1,
    "nameurl": "is-it-a-number",
    "authorId": "57f2c6e2bf64faa36bf925d1",
    "__v": 0,
    "answers": [
      {
        "userId": "57f2ce9a600e3f0011605ef4",
        "user": "lwonsower",
        "answer": "/\\d/",
        "_id": "57f4140d7caaf306653a80a5"
      },
      {
        "userId": "57f3190b8db4bc7e4a6bf8cd",
        "user": "hellodanali",
        "answer": "/[0-9]/",
        "_id": "57f4185dca6ba9826475cb98"
      },
      {
        "userId": "57f2c6e2bf64faa36bf925d1",
        "user": "troygibb",
        "answer": "/\\d/",
        "_id": "57f43cee5ea85dba3d8c34b8"
      },
      {
        "userId": "57f2ce9a600e3f0011605ef4",
        "user": "lwonsower",
        "answer": "/\\d/",
        "_id": "57f447c55dfbc7001111afe7"
      }
    ],
    "testCases": [
      {
        "case": "123456789",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccf9"
      },
      {
        "case": "987543321",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccf8"
      },
      {
        "case": "1010000010101010",
        "expectation": true,
        "_id": "57f3191f2bf2082f7a74ccf7"
      },
      {
        "case": "NOT A NUMBER",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccf6"
      },
      {
        "case": "I'M A NUMBER!",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccf5"
      },
      {
        "case": "NOOOOOOOT",
        "expectation": false,
        "_id": "57f3191f2bf2082f7a74ccf4"
      }
    ]
  },
  {
    "_id": "57f581b04238bc3d5b086c7b",
    "name": "No Comments",
    "author": "bbtran",
    "description": "Math the valid javascript comments",
    "difficulty": 2,
    "nameurl": "no-comments",
    "__v": 0,
    "answers": [],
    "testCases": [
      {
        "case": "// San Francisco Makersquare!",
        "expectation": true,
        "_id": "57f581b04238bc3d5b086c81"
      },
      {
        "case": "/* San Francisco Makersquare! */",
        "expectation": true,
        "_id": "57f581b04238bc3d5b086c80"
      },
      {
        "case": "// Do it for the kitties!!",
        "expectation": true,
        "_id": "57f581b04238bc3d5b086c7f"
      },
      {
        "case": "/ / function getRegexcellence(cat) {return cat}",
        "expectation": false,
        "_id": "57f581b04238bc3d5b086c7e"
      },
      {
        "case": "/Hi*/Team*/Regexcellence*/",
        "expectation": false,
        "_id": "57f581b04238bc3d5b086c7d"
      },
      {
        "case": "supercalifragilisticexpialidocious",
        "expectation": false,
        "_id": "57f581b04238bc3d5b086c7c"
      }
    ]
  }],
  tutorials:  
  [{
    "_id": "57f2a93cdb8484a1291aeb35",
    "name": "Let’s get meta",
    "order": 3,
    "description": "Ok, we’ve gone from pattern literals to matching whatever indiscriminately, where’s the middle ground in regex? Luckily the DOT is not the only metacharacter on the block. Among the many metacharacters we’ll deal with here, ‘\\w’ is among the most important. The pattern ‘\\w’ will match any word character. Although ‘word character’ is a description from the regex authorities, not ours. In the regex sense, ‘word character’ here means a-z, A-Z, 0-9, and underscores, i.e. ‘_’. Try to use it in your next pattern!",
    "nameurl": "lets-get-meta",
    "__v": 0,
    "answers": {
      "explanation": "Looks like you can’t just use the DOT here! But you do need for that tricky match case with the underscore. As you can see from the syntax highlighting in green, the \\w will match the first character.",
      "answer": "/\\w/"
    },
    "testCases": [
      {
        "case": "hello world!",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb3d"
      },
      {
        "case": "fizzbuzz",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb3c"
      },
      {
        "case": "777",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb3b"
      },
      {
        "case": "_&^%#$@#",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb3a"
      },
      {
        "case": "@#$%^%&%()+",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb39"
      },
      {
        "case": "&*%^$()",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb38"
      },
      {
        "case": "///////",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb37"
      },
      {
        "case": "<<><><>>",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb36"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb22",
    "name": "Learn Your ABCs",
    "order": 0,
    "description": "Let’s start with the basics! You are writing patterns with the pure intent of matching certain characters in strings. Letter literals and digits easily match to themselves. The pattern /a/ will match to anything containing an ‘a'. A word, /meow/ for example, will match to the word ‘meow’ if it appears in that order. Try to see if you can do the below exercise with this new knowledge! Remember to start and end your expression with forward slashes!",
    "nameurl": "learn-your-abcs",
    "__v": 0,
    "answers": {
      "explanation": "As you can see, the common pattern that binds the match cases versus the skip cases is the string ‘abc’.",
      "answer": "/abc/"
    },
    "testCases": [
      {
        "case": "abcd",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb28"
      },
      {
        "case": "abc",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb27"
      },
      {
        "case": "acd",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb26"
      },
      {
        "case": "123",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb25"
      },
      {
        "case": "hello",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb24"
      },
      {
        "case": "abcde",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb23"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb29",
    "name": "Count to 1",
    "order": 1,
    "description": "Great job on the first exercise! Digits work pretty similar in regular expressions. You can match digit literals as well right into your pattern. See if you can complete the challenge below.",
    "nameurl": "count-to-1",
    "__v": 0,
    "answers": {
      "explanation": "Similar to the last exercise, the common pattern between all of the match cases is the digit ‘1’. So by putting that pattern in-between your forward slashes, you can successfully match the digit cases.",
      "answer": "/1/"
    },
    "testCases": [
      {
        "case": "1234",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb2f"
      },
      {
        "case": "1",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb2e"
      },
      {
        "case": "156",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb2d"
      },
      {
        "case": "abc",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb2c"
      },
      {
        "case": "digits",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb2b"
      },
      {
        "case": "character",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb2a"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb3e",
    "name": "Escape the DOT!",
    "order": 4,
    "description": "As you could see from the last exercise,  the backslash ‘\\’ gave the letter ‘w’ this whole new meaning of being any word character out there. In fact, the whole world of regex has a great dependency on this backslash character. If it were otherwise, we would be pretty limited in terms of the characters we could use to match patterns. So the sooner you get used to the function of the backslash the better! Typically the use of the backslash is either used to escape a metacharacter to represent it literally, or to escape an otherwise literal character to make it meta. You may have been wondering about how to match period characters if the DOT by itself matches anything on this green earth. So without giving too much away, let’s see if you can apply this know-how of backslashes in the below exercise!",
    "nameurl": "escape-the-dot",
    "__v": 0,
    "answers": {
      "explanation": "Instead of using the DOT by itself, we used a backslash to escape it, so now it can be read literally.",
      "answer": "/\\./"
    },
    "testCases": [
      {
        "case": "Is but a dream within a dream.",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb42"
      },
      {
        "case": "Whose woods these are I think I know.",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb41"
      },
      {
        "case": "And miles to go before I sleep.",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb40"
      },
      {
        "case": "I am not a sentence",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb3f"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb43",
    "name": "Baby Back Brackets",
    "order": 5,
    "description": "Now that we got backslashes out of the way, let’s go onto an incredibly powerful tool in regex, brackets (‘[ ]’). The word character \\w was cool, but it may have struck you as not that customizable to matching a subsection of characters you care about. Enter brackets. Brackets are a nice, short way of saying, match this, or this, or this, or this, or this... ok you get it. For example, /[meow]/ will match any one of the characters ‘m’, ‘e’, ‘o’, or ‘w’ at any point of the string you’re matching the pattern against. Try out this concept below! HINT: Try to only match the first letter of the match cases.",
    "nameurl": "baby-back-brackets",
    "__v": 0,
    "answers": {
      "explanation": "As you can see from the above cases, the three unique characters are ‘b’, ‘c’, and ‘m’. But you only want to match either of those characters, so the best way to achieve this result is to throw those three letters into a bracket expression, and ta-da! You’ve got matches.",
      "answer": "/[brm]/"
    },
    "testCases": [
      {
        "case": "bat",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb49"
      },
      {
        "case": "rat",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb48"
      },
      {
        "case": "mat",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb47"
      },
      {
        "case": "lack",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb46"
      },
      {
        "case": "pack",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb45"
      },
      {
        "case": "stack",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb44"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb4a",
    "name": "Characters NOT ALLOWED",
    "order": 6,
    "description": "Brackets by default have an inclusive OR function, but they also can exclude certain characters if you know the right trick. And that trick is the caret, ‘^’. If placed right after the opening bracket, the caret has the magical ability to kick characters out of club match. For instance, the pattern /[^xyz]/ will exclude ‘x’, ‘y’, or ‘z’ from the matching pattern. Also it’s worth mentioning that the caret has this special meaning of exclusion only within brackets. Later in this tutorial, we’ll go over how it functions outside of brackets. But enough of that, let’s see who can get into club match below. ",
    "nameurl": "characters-not-allowed",
    "__v": 0,
    "answers": {
      "explanation": "Yes, we’re sorry to say that the latest version of Internet Explorer did not make the cut. And yes, Monica from Silicon Valley, and yes, Fabio. There’s only one Fabio out there right?",
      "answer": "/[^IE1]/"
    },
    "testCases": [
      {
        "case": "Fabio",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb4e"
      },
      {
        "case": "Monica",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb4d"
      },
      {
        "case": "Tech Talent",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb4c"
      },
      {
        "case": "IE11",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb4b"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb4f",
    "name": "Blend it",
    "order": 7,
    "description": "Ok, less reading and more regexing. See if you can combine some of these concepts in the below exercise.",
    "nameurl": "blend-it",
    "__v": 0,
    "answers": {
      "explanation": "You had to combine a few interesting concepts here, both using exclusion and letter literals to complete the pattern.",
      "answer": "/[^fc]all/"
    },
    "testCases": [
      {
        "case": "mall",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb55"
      },
      {
        "case": "fat",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb54"
      },
      {
        "case": "tall",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb53"
      },
      {
        "case": "baller",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb52"
      },
      {
        "case": "cat",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb51"
      },
      {
        "case": "wall",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb50"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb56",
    "order": 8,
    "name": "Matching Zip Codes",
    "description": "Well done! Now that you’re getting used to the basics we can get a little fancier. The hyphen is a wonderful tool for creating a concise way of matching to many different characters. Instead of writing /[abcdefg]/, we can simply write /[a-g]/. This also works for digits, for example writing /[0-9]/ is a great way to match to any number. But wait! There’s an even better way to match numbers. You can use metacharacters to match specific classes of characters. The \\d metacharacter is used to match only numbers and is equivalent to /[0-9]/. Matching to a certain number of character repetitions is as easy as following the character with some curly braces. /a{1}/ will match to a string containing one ‘a’, while /a{1,}/ will match a string as long as it has at least one ‘a’, but could contain one hundred ‘a’s. If you would like to match various strings that range in 'a'-length, create a limit. /a{2,5}/ will match strings with two to five continuous ‘a’s. Try to use curly brackets and the metacharacter to validate and match the 5-digit zip codes!",
    "author": "Lucy",
    "difficulty": 1,
    "nameurl": "matching-zip-codes",
    "__v": 0,
    "answers": {
      "explanation": "We are looking for a pattern literal here. So it makes sense that we can just type in abc for the",
      "answer": ""
    },
    "testCases": [
      {
        "case": "94549",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb5a"
      },
      {
        "case": "94105",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb59"
      },
      {
        "case": "666",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb58"
      },
      {
        "case": "9999999",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb57"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb5b",
    "order": 9,
    "name": "Words that end with 'en'",
    "description": "Sweet! Now let’s increase the specificity of our matches. Sometimes we want to make sure a line starts or ends with a specific word. Using the caret character without square brackets will guarantee that the regular expression only matches to lines that begin with the given string. For example we want to validate that a url is on a secured protocol. To do so we want to make sure that the url starts with 'https://' by using the pattern /^https:\\/\\// Additionally it is also possible to match lines that end with specific characters or words. You can do that using the dollar sign ($). Give it a whirl! Try to match only the words that end with 'en'.",
    "author": "Dana",
    "difficulty": 2,
    "nameurl": "words-that-end-with-en",
    "__v": 0,
    "answers": {
      "explanation": "We are looking for a pattern literal here. So it makes sense that we can just type in abc for the",
      "answer": ""
    },
    "testCases": [
      {
        "case": "glenn",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb63"
      },
      {
        "case": "glen",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb62"
      },
      {
        "case": "turkmen",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb61"
      },
      {
        "case": "cayenne",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb60"
      },
      {
        "case": "big ben",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb5f"
      },
      {
        "case": "opium den",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb5e"
      },
      {
        "case": "wise men",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb5d"
      },
      {
        "case": "never again",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb5c"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb64",
    "order": 10,
    "name": "Removing Spaces",
    "description": "Great job! Let’s move on to yet another metacharacter! Often when you build a website, like Regexcellence.co, you may run into scenarios where you do not want to have any whitespaces in your URL. Good news! There’s a metacharacter for that! You can use \\s to match any whitespace in a given line. Write a pattern that matches each sentence and be sure to include the spaces!",
    "author": "Ben",
    "difficulty": 1,
    "nameurl": "removing-spaces",
    "__v": 0,
    "answers": {
      "explanation": "We are looking for a pattern literal here. So it makes sense that we can just type in abc for the ",
      "answer": ""
    },
    "testCases": [
      {
        "case": "Regexcellence is a great site!",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb69"
      },
      {
        "case": "Regex is the only source truth",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb68"
      },
      {
        "case": "Lucy and Dana are awesome!",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb67"
      },
      {
        "case": "Troy is a beast!",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb66"
      },
      {
        "case": "Remove all of the whitespaces.",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb65"
      }
    ]
  },
  {
    "_id": "57f2a93cdb8484a1291aeb6a",
    "order": 11,
    "name": "Matching Phone Numbers",
    "description": "Write a pattern that matches a variety of phone number formats",
    "author": "Ben",
    "difficulty": 3,
    "nameurl": "matching-phone-numbers",
    "__v": 0,
    "answers": {
      "explanation": "We are looking for a pattern literal here. So it makes sense that we can just type in abc for the",
      "answer": ""
    },
    "testCases": [
      {
        "case": "(925) 145-5555",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb71"
      },
      {
        "case": "(925) 1455555",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb70"
      },
      {
        "case": "925-145-5555",
        "expectation": true,
        "_id": "57f2a93cdb8484a1291aeb6f"
      },
      {
        "case": "(925) 145-55555",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb6e"
      },
      {
        "case": "925 145-5555",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb6d"
      },
      {
        "case": "925 145 5555",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb6c"
      },
      {
        "case": "(925)hello145-5555",
        "expectation": false,
        "_id": "57f2a93cdb8484a1291aeb6b"
      }
    ]
  }]
};


    