let form=document.getElementById('form');
let input=document.getElementById('inputvalues');
let display=document.getElementById('edit');
form.addEventListener("submit",e=>{
    e.preventDefault();
    displayValue();
})
let userdata={};
function displayValue()
{
    userdata["text"]=input.value;
    console.log(userdata);
    create();
    
}
function create(){
    display.innerHTML+=`<div>
    <p>${userdata.text}</p>
    <i class="fa fa-edit" onclick="updateValue()"></i>
    <i class="fa fa-trash" onclick="deleteValue(this)"></i>
    </div>`
    input.value="";
}
function deleteValue(e){
    e.parentNode.parentNode.remove();
}
function updateValue(){
    input.value=userdata["text"];
    display.innerHTML="";
}



