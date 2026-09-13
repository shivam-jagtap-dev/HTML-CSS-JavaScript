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

{
    //Attributes of DOM Manipulation

    //getAttribute()
    let div = document.querySelector("div");
    console.log(div);

    let id = div.getAttribute("id"); //--> This will retrieve the value of the "id" attribute of the div element.
    console.log(id);

    let className = div.getAttribute("class"); //--> This will retrieve the value of the "class" attribute of the div element.
    console.log(className);

    let name = div.getAttribute("name"); //--> This will retrieve the value of the "name" attribute of the div element. If the attribute does not exist, it will return null.
    console.log(name);

    //setAttribute() --> change the value of an attribute or add a new attribute to an element.
    div.setAttribute("id", "newId");
    console.log(div.getAttribute("id")); //--> This will retrieve the updated value of the "id" attribute of the div element, which is now "newId".
}

{
    //node.style
    let div = document.querySelector("div");

    div.style.backgroundColor = "red";
    div.style.color = "black";
}

{
    //Insert Elements 
    let newBtn = document.createElement("button");
    newBtn.innerText = "Click Me!";
    console.log(newBtn);

    let div = document.querySelector("div");
    div.append(newBtn); //--> This will append the new button element as the last child of the div element.

    div.prepend(newBtn); //--> This will prepend the new button element as the first child of the div element.

    div.before(newBtn); //--> This will insert the new button element before the div element in the DOM.

    div.after(newBtn); //--> This will insert the new button element after the div element in the DOM.

    //Delete Elements
    let paragraph = document.querySelector("p");
    paragraph.remove(); //--> This will remove the paragraph element from the DOM.
}

{
    //Events
    //Event handle
    //Syntax: node.event = () => { code to be executed }
    let btn1 = document.querySelector("#btn1");

    btn1.onclick = () => {
        console.log("Button clicked!");
    }

    let div = document.querySelector("div");
    // div.onmouseover = () => {
    //     console.log("Mouse over the div!");
    // }

    //Event Object
    btn1.onclick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX, event.clientY);
    }

    //Event Listeners
    //syntax: node.addEventListener(event,callback)
    let btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", () => {
        console.log("Button was clicked using addEventListener! Handler 1");
    });

    btn2.addEventListener("click", () => {
        console.log("Button was clicked using addEventListener! Handler 2");
    });

    btn2.addEventListener("click", () => {
        console.log("Button was clicked using addEventListener! Handler 3");
    });


    const handler4 = () => {
        console.log("Button was clicked using addEventListener! Handler 4   ");
    };

    btn2.addEventListener("click", handler4);


    //syntax: node.removeEventListener(event,callback)
    btn2.removeEventListener("click", handler4);

}