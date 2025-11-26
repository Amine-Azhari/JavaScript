const bar = document.getElementById("bar");
const addbtn = document.getElementById("addbtn");
const tasksdiv = document.getElementById("tasksdiv");

let tasks = []; 

addbtn.onclick = function(){
    const task = bar.value;
    if (task != "") tasks.push(task);
    bar.value = "";
    tasksdiv.innerHTML = "";
    for (let i=0; i< tasks.length; i++)
    {
        //TheTask
        const taskdiv = document.createElement("div");

        //CheckBox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + i;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = tasks[i];

        checkbox.onchange = function(){
            if (checkbox.checked){
                label.style.textDecoration = "line-through";
                label.style.opacity = "0.6";
            }
            else{
                label.style.textDecoration = "none";
                label.style.opacity = "1";
            }
        }

        //Throwbtn
        const img = document.createElement("img");
        img.src = "images/recycle-bin.png";
        img.id = "img" + i;

        img.onclick = function(){
            tasksdiv.removeChild(taskdiv);
            tasks.splice(i,1);
        }

        checkbox.className = "checkbox";
        label.classList = "label";
        img.className = "throwbtn";
        taskdiv.className = "task";

        taskdiv.appendChild(checkbox);
        taskdiv.appendChild(label);
        taskdiv.appendChild(img)
        tasksdiv.appendChild(taskdiv)
    }

}
