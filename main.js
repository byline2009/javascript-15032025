function formatParagraph(){
  let value = document.getElementById("inputText").value.trim();

  //Check if empty input 
  if (value === "") {
    document.getElementById("error").innerText = "Input something!";
    return;
  }

  //Remove punctuation
  let newVal = value.replace(/\/\/\s*/g, '').replace(/[^\w\s.]/g, '');

  //Split paragraph
  let paragraph = newVal.split(".").map(sentence => sentence.trim());
  console.log(`Paragraph after split: ${paragraph}`);

  //Capitalize first letter
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i] = paragraph[i].substring(0, 1).toUpperCase() + paragraph[i].substring(1).toLowerCase();
  }
  console.log(`Paragraph after formatting: ${paragraph}`);

  //Join paragraph
  let formatParagraph = paragraph.join(". ").trim() + ".";

  //Show result
  document.getElementById("outputFormatText").innerText = formatParagraph;
}

// lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged

function countWords(paragraph, word){
/*
  let value;
  const inputText = document.getElementById("inputText");
  if (inputText && inputText.value === "") {
    value = "// lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem ipsum.";
  } else {
    value = inputText ? inputText.value.trim().toUpperCase() : "";
  }
*/

  let para = "// lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem ipsum.";
  //let value = document.getElementById("inputText").value.trim().toUpperCase();

  let value = para.trim().toUpperCase();
  let valueAfterRemovePunctuation = value.replace(/[^\w\s]/g, '');

  console.log(`Value after removing punctuation: "${valueAfterRemovePunctuation}"`);
  
  const array = valueAfterRemovePunctuation.split(/\s+/).filter(Boolean);
  const wordCount = {};

  console.log(`Here is array after split: ${array}`);
  console.log(`Length of array: ${array.length}`);
  console.log(`Does array include "lorem": ${array.includes("LOREM")}`);

  for (let val of array) {
    wordCount[val] = (wordCount[val] || 0) + 1;
  }
  console.log(`Word count: ${JSON.stringify(wordCount, null, 2)}`);

  //Show result
  document.getElementById("inputText").value = para;
  document.getElementById("count").innerText = `How many times "Lorem" appears: ${wordCount["LOREM"] || 0}`;
}

// lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, lorem ipsum.


