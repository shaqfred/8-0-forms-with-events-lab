console.log("Code your solution!")
let input = document.querySelector("input");
let form = document.querySelector("form");
let unorderList = document.querySelector("ul");
let list =document.querySelector("list")



form.addEventListener("submit", (e)=> {
    e.preventDefault();
   
   
})
// * find text * //
// * create new li * //
// * add text to li * //
// * add li to ul * //

 input = document.createElement("input")
input.addEventListener("click", (e) =>{
    e.preventDefault();
    
    input.style.textDecoration ="line-through"
    input.append ($li)
   

 
}
)







let text = input.value
let listItem = document.createElement("li");
listItem.innerText = text
unorderList.append(listItem)

listItem.addEventListener("click", (e) => {
    listItem.style.textDecoration = "line-through"

    listItem.append(input);
})
 
