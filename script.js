//Function for Replacing String

const replaceString = (word, search, replaceWith) => {
    const string = word;
    const length = string.length;
    let replacedWord = "";
    for (let x = 0; x < length; x++) {
        const eachString = string.charAt(x);
        (eachString === search.toLowerCase() || eachString === search.toUpperCase())
            ? replacedWord += eachString.replace(eachString, replaceWith)
            : replacedWord += eachString;
    }
    console.log(replacedWord);
}

replaceString("Ghidyeeeon is a good boy", "e", "y");


//Function for Changing Case
const changeCase = (sentence, caseType) => {
    const text = sentence;
    (caseType === "upper") ? console.log(text.toUpperCase()) :
        (caseType === "lower") ? console.log(text.toLowerCase()) : console.log(undefined);
}

changeCase("chris is a forex trader", "upper");



//function for triming edges
const trimEdges = sentence => console.log(sentence.trim());

trimEdges("     java script         ");



//function for extracting strings
const extractString = (sentence, start, end) => {
    (start >= end) ? console.log(sentence) :
        console.log(sentence.slice(start, end));
}

extractString("ghidyon is feeling good", 0, 0);



//function for getting initials
// const getInitials = name => 

let name = "Ghidyon Akunana"
console.log(name.split());