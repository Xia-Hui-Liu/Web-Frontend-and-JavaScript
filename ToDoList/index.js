
document.addEventListener("DOMContentLoaded", () => {
    // Create a "close" button and append it to each list item
    let myNodeList = document.getElementsByTagName("LI");

    for(let i=0; i < myNodeList.length; i++) {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");

        span.className = "close";
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
    };

// Click on a close button to hide the current list item

const close = document.getElementsByClassName("close");

for(let i=0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
};

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector("ul");

    list.addEventListener('click', function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }, false);

// Create a new list item when clicking on the "Add" button
const addItem = () => {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
        inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
};

document.getElementById("submitButton")
    .addEventListener("click", addItem);

});
