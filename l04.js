//DOM Inspection

node1 = document.getElementById("first")
node2 = document.querySelector(".second")

// An HTMCollection
nodes = document.getElementsByTagName("div")
// A NodeList
nodes = document.querySelectorAll("div")
// The first node in the list, equivalent to nodes[0]
node = document.querySelector("div")


//DOM Insertion

let newnode1 = document.createElement("p")
node.appendChild(newnode1)
// This doesn't work, instead it creates newnode1["innerHtml"]
newnode1.innerHtml = "hello, world"
// This works as intended
newnode1.innerHTML = "hello, world"


let newnode2 = document.createElement("p")
node.appendChild(newnode2)
let sometext = document.createTextNode("goodbye, world")
newnode2.appendChild(sometext)
// this does not evaluate HTML tags
let sometext2 = document.createTextNode("<strong>goodbye, world</strong>")
newnode2.appendChild(sometext2)
// this *does* evaluate HTML tags
newnode2.innerHTML = "<strong>goodbye, world</strong>"
// this line will delete the text 
// newnode1.innerHTML = ""
// this line will nuke the children entirely, could also use removeChild()
// node.innerHTML = ""


//DOM Attribute Manipulation

newnode1.setAttribute("style", "background-color: blue;")
newnode1.setAttribute("specialkey", "12356")  //storing non-HTML attributes


// Some programmatic tools
nodes = document.querySelectorAll("div")
nodes.forEach(x => x.style.backgroundColor = "green")


let array = [1,2,3,4,5]
let bodyNode = document.querySelector("body")

array.forEach(function(x) {
    let n = document.createElement("div")
    n.innerHTML = x
    bodyNode.appendChild(n)
})

array.forEach(function(x) {
    let n = document.createElement("div")
    n.innerHTML = x
    n.setAttribute("style", "font-size: "+x*10+"px")
    bodyNode.appendChild(node)
})

