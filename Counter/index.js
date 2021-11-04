// initialize count as zero
// listen for clicks
// increment the count variable when the button is clicked
// grab the count-el element, store it in a countEl variable
// change the count-el in the HTML to reflect the new count
// set countEl's innerText to the count

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const increment = () => {
  count += 1;
  countEl.textContent = count;
};

const save = () => {
  let countStr = `${count} - `;
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
};
