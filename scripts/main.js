// Select the elements
let area = document.getElementById("area");
let word = document.getElementById("word");
let char = document.getElementById("char");

// Add an event listener for input changes
area.addEventListener('input', function() {
    //count characters
    let content = this.value;
    char.textContent = content.length;

    //remove empty space from start and end
    content.trim();
    console.log(content);

    let wordlist = content.split(/\s/);

    //remove space from between words
    let words = wordlist.filter(function (element) {
        return element != "";
    })

    // Count words
    word.textContent = words.length;
});