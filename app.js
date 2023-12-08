console.log('ES2015');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                              ES2015

// ----------------------------------------------------------------------------------------------------------------

//      A BRIEF HISTORY

// --------------------------------------------------------------

// In ther early days of the internet, there was no standard programming language for webpages, 
//      resulting in the first Browser Wars between NetScape and Microsoft. Because NetScape used
//      JavaScript and Microsoft used JScript, this resulting in a fractured internet with developers
//      often resorting to telling the user which browser they should access their webpage on for
//      optimal browsing.

// Eventually, NetScape proposed a standardized, universal code to make things uniform for users.
//      This standard was called ECMAScript, named after the group ECMA. ECMAScript is not a language,
//      it's a text document outlining the standards that coding languages should have, making which
//      language developers use a matter of preference rather than an important decision that limits
//      what the webpage can do.

// This makes JavaScript unique as software, in that rather than having a version of JavaScript that
//      updates and works everywhere, ECMAScript will release a new version of what JavaScript 
//      *should* do, and it's up to each browser to ensure that their browswer code updates that 
//      functionality.

// ----------------------------------------------------------------------------------------------------------------

//      TC39

// --------------------------------------------------------------

// Technical Committee 29 (TC39) is the group at ECMA responsible for maintaining and updating the
//      ECMAScript standards. It's an important and complicated job to make sure that the language
//      updates enough to remain useful and relavent, while still ensuring that webpages created
//      decades ago with outdated code will still operate under the new standards. As a result, 
//      it takes a long time to implement updates that are future-proof and don't change core
//      functions.

// These changes used to be huge, sweeping updates that were seen as a new version of the code rather
//      than updates, and were released with version numbers (ES3, ES5, etc). These releases were
//      infrequent, often with years between them.

// Since individual changes were often ready to be implements very early in the process and sat
//      unused awaiting a new version release, the update schedule changed to be released yearly. At
//      this point, any changes that were ready to be implemented would be released every year, with
//      corresponding version names (ES2015, etc). This more frequent updating also led to more 
//      open sourcing and collabortion, which required a new, formalized proposal process.

// ----------------------------------------------------------------------------------------------------------------

//      TC39 PROPOSAL PROCESS

// --------------------------------------------------------------

// STAGE 0: STRAWMAN

//      At this point in the process, the change is only and idea. Nothing has been formally proposed,
//          and only members of TC39 can officially make them proposals.

// STAGE 1: PROPOSAL

//      At this point, the idea has become official. It's unlikely that it's actively being worked on
//          by implementers, but polyfills and plugins are being introduced.

// STAGE 2: DRAFT

//      Experimenters will begin to add the idea to browsers to test it.

// STAGE 3: CANDIDATE

//      At this point, the idea is being taken seriously and it's been implemented by at least one 
//          browser or supported by build-time transpilers. Changes are no longer being made outside
//          of bug fixes.

// STAGE 4: FINISHED

//      When it passes acceptance tests and is implemented in at least two browsers independently, it
//          considered a finished proposal.

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                        LET AND CONST 

// ----------------------------------------------------------------------------------------------------------------
// Inititally, the way to declare variables in JavaScript was with "var":

var array=[1,2,3,4,5];
var array=[2,3,4,5,6];
var array=[3,4,5,6,7];

//      but there were problems with this approach. If you click the "array =" button on the webpage,
//      it will return the value of 'array' as [3,4,5,6,7]. The issue here is that there are two
//      other variables also called array, and they're completely ignored. The variable "array" here
//      has been 'redeclared'.

// Redeclaring variables creates problems, especially when you're using similar information in longer
//      projects. The likelihood of using the same simple variable name for a different array is
//      very high, and doing so will completely overwrite the first array value, causing problems in
//      the earlier code.

// --------------------------------------------------------------

//      LET

// --------------------------------------------------------------

// To get around this issue, two new variable keywords were created. "Let" allows us to create a 
//      variable that cannot be redeclared, and reduces the scope of the variable as well.

// let letArray=[1,2,3,4,5];

//      If you un-comment 'letArray', you'll get an error message, because it's already been declared
//      on the vars.js file, and cannot be redeclared. However, if you look on the webpage, you have
//      a button to double each of the values on the array. Click it and see the values change. If 
//      you look at the function on the vars.js file to see how it works, the text under "Let" is 
//      being defined by the letArray value, and clicking the button changes the value of letArray.

// Even though 'let' variables cannot be redeclared, they can be 'reassigned'. This is what's
//      happening in the line "letArray=letArray.map(....)". The value of letArray is being changed
//      by assigning it to be something else, and you see that reflected on the webpage.

// As well as being reassigned, 'let' variables can be "mutated". A mutation is when you change the
//      internal value of a variable without changing the reference to the variable. On the webpage,
//      if you click on the 'Add Values' button, a new element will be added to letArray. This, while
//      technically changing the value of the variable, doesn't change any of the elements. The new
//      element being pushed into the array has the same doubled property as the other elements 
//      without impacting the elements.

// --------------------------------------------------------------

//      CONST

// --------------------------------------------------------------

// Similar to 'let' is 'const', which can also be mutated, but cannot be reassigned. The benefit of 
//      using const over let is when you have static values that will not change and could break the
//      code if it does.

// For instance, the array on the webpage is saved as a 'const' variable called numberArray. This 
//      array is constant, and won't be reassigned or changed. This is useful for important data that
//      you don't want to get manipulated. Because it's a constant, we can create as many functions
//      as we want that take in arrays, and numberArray will always give reliable outputs.

function add(arr,num){
    return arr.map(function(val){
        return val+num;
    })
}
function subtract(arr,num){
    return arr.map(function(val){
        return val-num;
    })
}
function multiply(arr,num){
    return arr.map(function(val){
        return val*num;
    })
}
function divide(arr,num){
    return arr.map(function(val){
        if(num!==0){
            return val/num;
        } else return undefined;
    })
}

//      On the webpage, you can see an array under "Const". This array is saved as a const variable,
//      and will not change. Because the variable doesn't change, you can run it through whatever
//      functions you want (shown on the webpage and above here), and you know that you'll always 
//      get results based on your initial constant.

// Const is scoped as well, for example:

const testArray=[5,10,15,20];

function multiplyThirdIndex(arr){
    if(arr.length>=3){
        const thirdIndex=arr[2];
        return thirdIndex*thirdIndex;
    } else return null;
}

const testArrayResult=multiplyThirdIndex(testArray);

//      In the function, you can see "const thirdIndex=arr[2]". However, if you enter thirdIndex 
//      directly into the console, you'll get an error because thirdIndex is not defined outside of
//      the scope of multiplyThirdIndex().

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//                                          ARROW FUNCTIONS

// --------------------------------------------------------------

// A convenient shorthand for functions is the "fat arrow" syntax. Take a simple doubling function
//      using the map() method. Usually, you would write is like this:

function doublingFunct(arr){
    return arr.map(function(val){
        return val*2;
    })
}

//      For the second line, after 'map', you have to specify which function you want to run for each
//      value by writing out "function(val)". But there's a shorter way to write it using the fat 
//      arrow syntax:

function doublingFatArrow(arr){
    return arr.map((val)=>{
        return val*2;
    })
}

//      These are both identical in their functions, despite the syntax difference. For the double
//      arrow, rather than stating "function" followed by the argument, you specify the argument 
//      followed by a fat arrow (=>).

// In addition to removing the need to type "function", you can also use the arrow to keep simple
//      code on one line.

const doubledNums=numberArray.map(val => val*2);

//      Here you take numberArray, use the map method, assign 'val' as the parameter, and multiply
//      each val by 2. Because it's all one one line, the 'return' is implied and does not need to
//      be typed out. Keep in mind that this only works for simple code that fits on one line, as if
//      you need to expand your code to multiple lines, you will still have to type 'return'.

// You can even fit conditionals on one line, so long as the function only has one parameter.

function isEvenOrOdd(arr){
    return arr.map((val)=>{
        if(val%2===0){
            return 'even';
        } return 'odd';
    })
}

//      While the fat arrow shortened this function a bit, you can shorten it even more to only take
//      up one line by using the ? and : methods.

const evenOrOddONeLine=numberArray.map((val)=>(val%2===0?'even':'odd'));

// --------------------------------------------------------------

// Keep in mind that fat arrow functions cannot be named, as they are just shorthand for anonymous
//      callback functions. In doublingFunct() and doublingFatArrow(), the second line is an anoymous
//      callback function, and doesn't need to be named, which is why the fat arrow syntax is usable
//      there.

// --------------------------------------------------------------

//      FAT ARROW OBJECTS

// --------------------------------------------------------------

// If you want to create objects with a fat arrow function, you need to be sure to add parentheses 
//      around the object you want to create:

const addPokemon=(species)=>({name:species});

//      Now if you enter "addPokemon('PokemonName')" to the console, it will return an object with
//      "name" and the species you entered.

// ----------------------------------------------------------------------------------------------------------------

//      THIS

// --------------------------------------------------------------

//  The keyword "this" used in functions is a reference to the object that called the function.

const nameObj={
    name:       'Mark',
    mood:       'well',
    sayHello:   function(){
        console.log('Hello, '+this.name);
    },
    askMood:    function(){
        console.log('Are you feeling '+this.mood+'?');
    }
}

//      For instance, in the console, if you enter "nameObj.sayHello()", it will return "Hello, Mark",
//      and if you enter "nameObj.askMood()", it will return "Are you feeling well?". The reason it
//      can log the specific values is because the "this" keyword will refer to the object it's 
//      attached to, in this case "nameObj".

// It's important to note that you shouldn't use arrow functions inside of an object, because arrow
//      functions don't have their own "this" context. Arrow functions will inherit the "this" of 
//      whatever it's attached to rather than generating their own.