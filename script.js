//DOM Manipulation
{
    //Selecting with Id
    // Syntax: document.getElementById("idName")
    let heading = document.getElementById("heading");
    console.dir(heading);
}
{
    //Selecting with Class
    //Syntax: document.getElementsByClassName("className")
    let headings = document.getElementsByClassName("heading");
    console.log(headings);
}
{
    //Selecting with Tag Name
    //Syntax: document.getElementsByTagName("tagName")
    let paragraphs = document.getElementsByTagName("p");
    console.dir(paragraphs);
}
{
    //Query Selector
    //Syntax: document.querySelector("selector")
    let elements = document.querySelector(".heading");
    console.dir(elements);

    //Syntax: document.querySelectorAll("selector")
    let allElements = document.querySelectorAll(".heading");
    console.dir(allElements);
}

{
    // Parent and Child Nodes

    console.dir(document.body.firstChild); //-->(text node) this will give you the first child node of the body, which could be a text node (like whitespace or newline) if there is any text before the first element.
    console.dir(document.body.firstElementChild); //--> (div) this will give you the first element child of the body, which is the first HTML element inside the body.

    console.dir(document.querySelector("div").firstElementChild);
    console.dir(document.querySelector("div").lastElementChild);
    console.dir(document.querySelector("div").children[3]); //--> (h4) this will give you the fourth child element of the div, which is the button element.
}

{
    //Properties of DOM Manipulation

    let div = document.querySelector("div");

    //TagName
    console.dir(div.tagName);

    //Innertext
    console.dir(div.innerText);

    //InnerHTML
    console.dir(div.innerHTML);

    //TextContent
    console.dir(div.textContent);
}