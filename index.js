let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

addBtn.addEventListener("click", addItem);

inp.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    if (inp.value.trim() !== "") {
        let item = document.createElement("li");
        let delBtn = document.createElement("button");
        let textContent = document.createElement("span"); 

        delBtn.innerText = "delete";
        delBtn.classList.add("delete");

        textContent.innerText = inp.value;  

        item.appendChild(delBtn);  
        item.appendChild(textContent); 

        ul.appendChild(item);
        inp.value = "";
    }
}



ul.addEventListener("click", (event) => {
    if (event.target.localName === "button") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});



// let delBtns = document.querySelectorAll(".delete");
// for(del of delBtns){

//     del.addEventListener("click", ()=>{
    
//         let par = del.parentElement;
//         par.remove();
    
// })}