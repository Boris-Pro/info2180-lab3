window.onload = function() {
    const parentDiv = document.getElementById("board");
    const childDivs = parentDiv.getElementsByTagName("div");

    for (let i = 0; i < childDivs.length; i++) {
        childDivs[i].classList.add("square");
    }
}

  