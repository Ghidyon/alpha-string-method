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

replaceString("Ghidyeeeon wants a mentor", "e", "y");


const changeCase = (sentence, caseType) => {
    const text = sentence;
    (caseType === "upper") ? console.log(text.toUpperCase()) :
        (caseType === "lower") ? console.log(text.toLowerCase()) : console.log(undefined);
}

changeCase("ghidyon wants to be a better programmer", "upper");


const trimEdges = sentence => console.log(sentence.trim());

trimEdges("       java script         ");


const extractString = (sentence, start, end) => {
    (start >= end) ? console.log(sentence) :
        console.log(sentence.slice(start, end));
}

extractString("ghidyon is feeling good", 0, 0);


const getInitials = name => {
    const nameArray = name.split(" ");
    let initials = "";
    for (let i = 0; i < nameArray.length; i++) {
        initials += nameArray[i].charAt(0).toUpperCase();
    }
    console.log(initials);
}

getInitials("ghidyon son ");