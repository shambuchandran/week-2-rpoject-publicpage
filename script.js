// for arrow rotation in button section 6
let turn2 = document.querySelector("#b-2");
let arrow2 = document.querySelector("#b22")
let flag2 = 0;
turn2.addEventListener("click", function () {
    if (flag2 == 0) {
        // Rotate the element 180 degrees
        arrow2.style.transform = "rotate(90deg)";
        flag2 = 1; // Set flag to 1 to indicate the rotation has been applied
    } else {
        // Reset the rotation to normal
        arrow2.style.transform = "rotate(0deg)";
        flag2 = 0; // Set flag back to 0
    }
});

let turn1 = document.querySelector("#b-1");
let arrow1 = document.querySelector("#b21");
let flag1 = 0;
turn1.addEventListener("click", function () {
    if (flag1 == 0) {
        // Rotate the element 180 degrees
        arrow1.style.transform = "rotate(90deg)";
        flag1 = 1; // Set flag to 1 to indicate the rotation has been applied
    } else {
        // Reset the rotation to normal
        arrow1.style.transform = "rotate(0deg)";
        flag1 = 0; // Set flag back to 0
    }
});

let turn3 = document.querySelector("#b-3");
let arrow3 = document.querySelector("#b23");
let flag3 = 0;
turn3.addEventListener("click", function () {
    if (flag3 == 0) {
        arrow3.style.transform = "rotate(90deg)";
        flag3 = 1;
    } else {
        arrow3.style.transform = "rotate(0deg)";
        flag3 = 0;
    }
})
let turn4 = document.querySelector("#b-4");
let arrow4 = document.querySelector("#b24");
let flag4 = 0;
turn4.addEventListener("click", function () {
    if (flag4 == 0) {
        arrow4.style.transform = "rotate(90deg)";
        flag4 = 1;
    } else {
        arrow4.style.transform = "rotate(0deg)";
        flag4 = 0;
    }
})
// for scroll cards
let scrollbox= document.querySelector(".card-group");
scrollbox.addEventListener("wheel",function(evt){
    evt.preventDefault();
    scrollbox.style.scrollBehavior ="auto";
    scrollbox.scrollLeft += evt.deltaY;

})