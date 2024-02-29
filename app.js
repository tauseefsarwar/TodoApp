let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , ()=>{
    let li = document.createElement("li");
    li.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "delete";
    li.appendChild(delBtn);
    ul.appendChild(li);
    inp.value = "";

});

ul.addEventListener("click" , (event)=>{
    if(event.target.nodeName == "BUTTON"){
        let li = event.target.parentElement;
        li.remove();
    }
})