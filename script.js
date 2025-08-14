const inputBox = document.getElementById('input-box');
const List = document.getElementById('List');

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        List.appendChild(li);
    }
}