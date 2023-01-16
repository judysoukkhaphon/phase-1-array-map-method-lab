const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let words=[];
  
  for (let i = 0; i<tutorials.length; i++){
    words = tutorials[i].split(" ");
    let sentence = "";
  
    for (let j = 0; j < words.length; j++){
      let firstLetter = words[j].charAt(0).toUpperCase();
      let newWord = firstLetter + words[j].substring(1);
      sentence = sentence + newWord + " ";
    }
    
    console.log(sentence);
    tutorials[i] = sentence.trim();
  }
    
  return tutorials;
}
