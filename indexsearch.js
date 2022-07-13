//to search index values of encyclopedia pages

let inputVal = document.getElementById("index-search");
inputVal.addEventListener('keyup', () => {
    let indexDiv = document.getElementById("index-list");
    let a = indexDiv.getElementsByTagName("a");
    let searchValue = inputVal.value.toLowerCase();
    console.log("search value: " + searchValue);

    for (let i = 0; i < a.length; i++) {
        let matchVal = a[i];
        console.log(matchVal);
        console.log("index of search value " + matchVal.innerHTML.toLowerCase().indexOf(searchValue));
        if (matchVal.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
            matchVal.style.display = "";
        } else {
            matchVal.style.display = "none";
        }
    }
})