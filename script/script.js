function getInnerTextById(id) {
    let x = document.getElementById(id).innerText;
    const value = parseInt(x);
    return value;
}

function getValueById(id) {
    let value = document.getElementById(id);
    return value;
}



function setInnerTextById(id,value) {
    document.getElementById(id).innerText=value;

}


let taskAssigned = getInnerTextById('taskAssigned');
let headerValue = getInnerTextById('headerValue');

let colorsArray=[
    "#f2d1c8", "#c8e4f5", "#d9f2c8", "#e5c8f2", "#c8f2e0",
    "#f2ecc8", "#d1f2c8", "#c8dff2", "#e6f2c8", "#f2c8d1",
    "#c8f2f0", "#f2d8c8", "#c8f2d8", "#e0c8f2", "#c8f2c8"
  ]

// const text=document.getElementById('button-1').parentNode.parentNode.children[1].innerText;



// console.log(hour, minute, second);



// console.log(headerValue);




function clickComplete(id) {
    if (taskAssigned !== 0) {
        // increase decrease 
        taskAssigned -= 1;
        headerValue += 1;

        setInnerTextById("taskAssigned",taskAssigned);
        setInnerTextById("headerValue",headerValue);

        // create a task
        // get hour minute and second

        // parent div of completed task

        let activityLog=document.getElementById('content'); 

        let now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        const amPm = hour >= 12 ? "PM" : "AM";


        let taskDiv = document.createElement('div');
        taskDiv.innerText = `You have completed the task ${document.getElementById(id).parentNode.parentNode.children[1].innerText} at ${hour}:${minute}:${second} ${amPm}`;

        taskDiv.classList.add("bg-light-blue","p-4","rounded-xl");
        activityLog.appendChild(taskDiv);

        // make button disable 
        let button = getValueById(id);
        button.disabled = true;
        button.style.opacity = 0.2;
        alert("Board Updated Successfully.");
    }else{
        alert("All task done.");
    }





};


// remove activity

function clearActivity(id,classes){
    let activityDiv=document.getElementById(id);
    activityDiv.innerHTML='';

    let allClasses=document.querySelectorAll(classes);
    allClasses.forEach((cls)=>{
        const disabledBtn=document.querySelector(cls);
        disabledBtn.style.disabled=false;
    });

} 


// change color of bg

const backgroundColorChanger=document.getElementById("bgc-changer");
const mainBody=document.getElementById('main-body');

backgroundColorChanger.addEventListener('click',()=>{
    console.log("hello");

    const randomIndex=Math.floor((Math.random() * colorsArray.length)+1);
    console.log(randomIndex);
    console.log(colorsArray[randomIndex],colorsArray.length);
    mainBody.style.backgroundColor=colorsArray[randomIndex];


}) 




