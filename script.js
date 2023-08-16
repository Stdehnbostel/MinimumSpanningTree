const vInput = document.querySelector("#vertices");

function makeTable(e) {
    console.log(e.target.value);

}

vInput.addEventListener("input", makeTable);