const output = document.getElementById("outputlist");
const button = document.getElementById("btn");
let currentitemlistindex = 0;
const button2 = document.getElementById("dlt");
const button3 = document.getElementById("clr");
const itemlist = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elephant",
  "frog",
  "grape",
  "hat",
  "igloo",
  "jacket",
  "kite",
  "lemon",
  "melon",
  "orange",
  "pear",
  "quilt",
  "rabbit",
  "strawberry",
  "turtle",
  "umbrella",
];


button.addEventListener("click", () => {
    if (currentitemlistindex < itemlist.length) {
        const newlist = document.createElement("li")
        newlist.textContent = itemlist[currentitemlistindex];
         output.appendChild(newlist);
       
        // newlist.appendChild(deleteButton);
       // output.appendChild(newlist)
        currentitemlistindex++
    } else {
        alert("all items are added")
    }
   

})

  button2.addEventListener("click", () => {
    
      output.removeChild(output.lastChild);
  });

button3.addEventListener("click", () => {
      output.style.display= "none"
  })









 
