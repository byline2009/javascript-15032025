function formatParagraph(){
  let value = document.getElementById("inputText").value.trim();

  //Check if empty input 
  if (value === "") {
    document.getElementById("error").innerText = "Input something!";
    return;
  }
  //Split paragraph
  let paragraph = value.split(".");
  console.log(`Paragraph after split: ${paragraph}`);

  //Capitalize first letter
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i] = paragraph[i].substring(0, 1).toUpperCase() + paragraph[i].substring(1).toLowerCase();
  }
  console.log(`Paragraph after formatting: ${paragraph}`);

  //
  let formatParagraph = paragraph.join(". ").trim() + ".";

  //Show result
  document.getElementById("outputFormatText").innerText = formatParagraph;
}

// lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged