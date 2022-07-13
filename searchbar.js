//for search bar
let search = document.getElementById("form");
let inputValue = document.getElementById("input-value");
let searchEngine = "https://www.google.co.in/";

search.addEventListener('submit', (event) => {
  event.preventDefault();
  let url = searchEngine + "search?q=" + inputValue.value;
  let openWin = window.open(url, '_blank');
  win.focus();
})