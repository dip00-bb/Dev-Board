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





// set current-date in calender

let now = new Date();

// week days
let weekDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let weekDay=`${weekDays[now.getDay()]} ,`;


// set week day
setInnerTextById('day',weekDay);



// months
let months=["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month=months[now.getMonth()];


// set month
setInnerTextById('month',month);




// set date
let date =now.getDate();
setInnerTextById('date',date);




// set year
let year =now.getFullYear();
setInnerTextById('year',year);











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

        if(taskAssigned===0){
            alert("Congrats!!!! You have completed all the current task");
        }
    }else{
        alert("All task done.");
    }





};


// remove activity

function clearActivity(id,classes){
    let activityDiv=document.getElementById(id);
    activityDiv.innerHTML='';

} 


// change color of bg

const backgroundColorChanger=document.getElementById("bgc-changer");
const mainBody=document.getElementById('main-body');

backgroundColorChanger.addEventListener('click',()=>{

    const randomIndex=Math.floor((Math.random() * colorsArray.length)+1);
    mainBody.style.backgroundColor=colorsArray[randomIndex];


}) 



// visit question page from index html


const pageChanger1=document.getElementById("change-page-1");


pageChanger1.addEventListener('click',()=>{
    window.location.href='../question-html/question.html'
});


