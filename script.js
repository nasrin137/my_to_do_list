const addBtn = document.querySelector("#addBtn");
const textInput = document.querySelector('#textInput');
const taskList = document.querySelector('#taskList');

// add btn functionality
addBtn.addEventListener("click",addTask)

function addTask(){
    const textValue = textInput.value.trim();
    textInput.value = "";

    if(textValue === ""){
        alert("Please enter your task");
        return;
    }else{
        const li = document.createElement("li");
        li.className = "flex justify-between items-center p-2 bg-white rounded border text-lg";

        const span = document.createElement("span");
        span.textContent = textValue;
        span.className = "flex-grow";

        li.appendChild(span);

        // edit btn functionality

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "bg-teal-500 hover:bg-teal-700 transition-all duration-300 text-white px-2 py-2 ml-2 rounded-lg"

        li.appendChild(editBtn);

        editBtn.addEventListener("click",editButton)

        function editButton(){
            if(editBtn.textContent === "Edit"){
                span.contentEditable = true;
                span.classList.add('outline-none');
                span.focus();
                editBtn.textContent = "Save";
            }else{
                span.contentEditable = false;
                span.classList.remove('outline-none');
                editBtn.textContent = "Edit";

            }
        }
        // delete btn functionality
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = "bg-red-500 hover:bg-red-700 transition-all duration-300  text-white px-2 py-2 ml-2 rounded-lg";

        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click",function(){
            taskList.removeChild(li)
        })

        // task complete btn functionality

        const completeBtn = document.createElement('button');
        completeBtn.textContent = "Complete";
        completeBtn.className = 'bg-green-600 hover:bg-green-700 transition-all duration-300  text-white px-2 py-2 ml-2 rounded-lg';

        li.appendChild(completeBtn);

        completeBtn.addEventListener("click",completeButton)

        function completeButton(){
            span.classList.toggle("line-through");
            completeBtn.textContent = span.classList.contains("line-through") ? "Not Complete" : "Complete";
        }

        taskList.appendChild(li)

}
}































































   

 

  
