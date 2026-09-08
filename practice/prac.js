//Create a H2 heading elment with text-"Hello JavaScript!". Append "from Apna college students" to this text using JS

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna college students";//--> This will update the inner text of the h2 element by appending " - Updated" to its existing text.
console.dir(h2.innerText);

{
    //Create 3 divs with commom class name -"box". Acces them & add some unnique text to each of them.
    let divs = document.querySelectorAll(".box");
    divs[0].innerText = "This is the first box";
    console.dir(divs[0].innerText);
    divs[1].innerText = "This is the second box";
    divs[2].innerText = "This is the third box";
}