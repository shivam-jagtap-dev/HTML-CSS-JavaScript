//Create a H2 heading elment with text-"Hello JavaScript!". Append "from Apna college students" to this text using JS

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna college students";//--> This will update the inner text of the h2 element by appending " - Updated" to its existing text.
console.dir(h2.innerText);


//Create 3 divs with commom class name -"box". Acces them & add some unnique text to each of them.
let divs = document.querySelectorAll(".box");
divs[0].innerText = "This is the first box";
console.dir(divs[0].innerText);
divs[1].innerText = "This is the second box";
divs[2].innerText = "This is the third box";

//Create a new button elemeny. Give it a text "Click me", background color of red & text color of white. Append it to the body of the document.
//Insert the button as the first element inside the body tag.

let body = document.querySelector("body");
let button = document.createElement("button");
button.innerText = "Click me";

body.prepend(button);

//Create a <p> tag in html, give it a class & some styling.
//Now create a new class in css and try to append this class to the <p> element.
//Did you notce, how you overwrite the class name when you add a new one?
//Solve this problem using classList
let para = document.querySelector("p");
para.classList.add("newpara");


{
    let modebtn = document.querySelector("#mode");
    let body = document.querySelector("body");
    let currMode = "light";

    modebtn.addEventListener("click", () => {
        if (currMode === "light") {
            currMode = "dark";
            body.classList.add("dark");
        } else {
            currMode = "light";
            body.classList.add("light");
        }
        console.log(currMode);
    });

}