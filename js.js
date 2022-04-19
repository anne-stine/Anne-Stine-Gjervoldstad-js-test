// --------------------------------------------
// JS TEST FINAL
// --------------------------------------------

// A quick not before you start: When you see the {THIS_SYNTAX} syntax, you should use
// the value that the words describe.  For example: "I am a {PROFFESION}", should be 
// answered as "I am a student"

// 1) Start by linking this js file in your index.html file.  What is the correct
//    place to add your script element, where you link your JS file?

// The script element should be added at the bottom inside the body.

// 2) Declare 5 variables.  Each should have a value with a different type.

let fullName = "Anne-Stine Gjervoldstad" // String
let age = 30 // Number
let hobbies = ["piano", "music production", "drawing"] // Array
let isHappy = true // Boolean

let occupation = // Object
{
    title: "front-end developer student",
    location: "Kodehode (Tønsberg)"
}

// 3) Next we will write conditional statements. Write:

//    a) an if else statement that checks a true or false statement, Then 
//       it should console log 'Var was true!' if true and otherwise console logs 
//       'Var was false'.

if (isHappy === true) {console.log("Var was true!")} 
else {console.log("Var was false")}

//    b) a ternary statement to check if a number variable is greater 
//       than 5. Console log 'that is a big number' if it is and 'small num' if it isn't.

age > 5 ? console.log("That is a big number") : console.log("That is a small number")

//    c) a conditional of your choice that finds out if a 'string' variable is of 
//       type string and a 'number' variable is type 'number'. If both are true 
//       console.log('all types are correct')

if (typeof fullName === "string" && typeof age === "number") {console.log("All types are correct")}

// 4) Write a function that accepts 3 parameters: 2 numbers and a name.  The function
//    should add both numbers and return a string of "{NAME}'s number is {NUMBER}".

function getSummary(name, x, y) 
{
    number = x + y
    return `${name}'s number is ${number}`
}

// 5) Invoke the function and save it's result in a variable, then console log the
//    variable.

getSummary()
let result = getSummary("Neo", 30, 1)
console.log(result)

// 6) Are all functions hoisted?

// No, not all functions are hoisted. For instance arrow functions must be called after initialization. The function in task 4 is however hoisted and can be called before initialization.

// 7) In the html file there is an h1 element.  Save the node in a variable and then 
//    set its text to "{YOUR_NAME}'s exam"

let h1 = document.querySelector("h1")
h1.textContent = `${fullName}'s exam`

// 8) Use JS to set the id of the h1 to "heading-main"

h1.setAttribute("id", "heading-main")
// console.log(document.querySelector("#heading-main").textContent)

// 9) Create a node list that selects every p in our HTML file. Then use the forEach
//    method to remove the class 'p-empty' and add text that say 'text content here'

let p = document.querySelectorAll("p")
// console.log(p)

p.forEach(element => 
    {
    element.classList.remove("p-empty")
    element.textContent = "Text content here"
    }
)
// console.log(p)

// 10) Write a function that first, randomly generates a number between 1 & 100 and
//     saves it in a variable called r.  Second, the function should find the area
//     of a circle with radius r.  Third, round the result to 2 decimal spaces and
//     console log the result. 

const getCircleArea = () => 
{
    /* Generate random number / radius */
    let r = Math.floor(Math.random() * 100) + 1
    console.log(r)
    /* Find circle area */
    let a = Math.PI*Math.pow(r, 2)
    /* Return result with only 2 decimals */
    return a.toFixed(2)
}
console.log(getCircleArea())

// 11) Use addEventListener to listen for a click. The callback should turn the 
//     event target's text into a different color. 

document.querySelector("#hero").addEventListener("click", (e) => {e.target.style.color = "#ffcc99"})

// 12) Create a for loop that console logs all the even numbers up to 22 not 
//     including 0.

for (i = 2; i <= 22; i += 2) {console.log(i)}

// 13) Create an array with at least 4 values in it (use both at least 1 string
//     and 1 number).  Then use the push mehtod to add another value into the array.  

let arr = ["A", "B", 3, 4]
console.log(arr)

arr.push(5)
console.log(arr)

// 14) Replace the 2nd index position value with 44.

arr.splice(2, 1, 44)
console.log(arr)

// 15) Filter the array to only contain numbers.

let arrNumbers = arr.filter(Number)
console.log(arrNumbers)

// 16) Create an object. It should have property value pairs that describe 
//     something you like, a number, an array and an object value inside it.  
//     Lastly, create a method attached to the object.

const midi = 
{
    type: "Launchkey Mini",
    keys: 25,
    compatability: ["Ableton Live 10 or greater", "Logic script", "Reason script", "all other DAWs through HUI"],
    dimensions: 
    {
        length: 330,
        depth: 172,
        height: 31,
        summary: function() 
        {
            return `${this.length}mm length x ${this.depth}mm depth x ${this.height}mm height`
        }
    }
}

// 17) Create 2 input fields where the user can search for a song and an artist. Then
//     add a button.  When the button is clicked, an API fetch call should be made (use 
//     https://api.lyrics.ovh/v1/artist/title to achieve this. You can read more of
//     the documentation at https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search).

//     Lastly, make a function that renders a div containing: 
//          -an h2 with the song name
//          -a h3 with artist name
//          -a p with the lyrics of the song the user searched for

//     Now make the button call your render function with the data you fetched.  

/* Grab input fields */
let titleInput = document.querySelector("#title")
let artistInput = document.querySelector("#artist")

/* Focus input field on page load */
titleInput.focus()

const renderLyrics = async () =>
{
    /* Remove previous results if any */
    if (document.contains(document.querySelector(".results"))){document.querySelector(".results").remove()}

    /* Grab input values */
    let title = titleInput.value
    let artist = artistInput.value
    let lyrics = ""

    /* Fetch lyrics */
    let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title
    await fetch(url)
        .then(response => response.json())
        .then(body => lyrics = body.lyrics)
        .catch(() => lyrics = "No lyrics found")
    
    /* Create container */
    let div = document.createElement("div")
    div.setAttribute("class", "results container")
    /* Create heading 2 */
    let h2 = document.createElement("h2")
    h2.innerText = title
    /* Create heading 3 */
    let h3 = document.createElement("h3")
    h3.innerText = artist
    /* Create paragraph */
    let p = document.createElement("p")
    p.innerText = lyrics

    /* Combine elements */
    document.querySelector("#lyrics").append(div)
    div.append(h2, h3, p)

    /* Reset input fields */
    titleInput.value = ""
    artistInput.value = ""

    /* Refocus first input field */
    titleInput.focus()
}

/* Event listeners */
document.querySelectorAll("input").forEach(input => input.addEventListener("keydown", (e) => {if (e.key === "Enter"){renderLyrics()}}))
document.querySelector("button").addEventListener("click", () => renderLyrics())

// 18) Rename your root folder to '{YOUR_NAME} js-test'.  Compress it into a zip file 
//     and send it to me and you're done :)