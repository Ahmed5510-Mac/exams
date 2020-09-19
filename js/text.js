//  ===================================|========| section 1 |=========|===================================================================================

let workInputText = document.getElementById("inputWork");
let butttonAdd = document.getElementById("btnAddwork");
let divcontentWork = document.getElementById("contentWork");
let x = document.getElementById("tbbody");
//============================================
let workWrite = []; 
if (localStorage.getItem("worklist") == null) 
{ 
    workWrite = [];       
} 
else 
{ 
    workWrite = JSON.parse(localStorage.getItem("worklist"));        
    displaywork();
} 
             
//====================== add function ========
function addWork() {

    workWrite.push(inputWork.value)
    localStorage.setItem("worklist", JSON.stringify(workWrite))
    displaywork();
    clearForm();
}

//================== display function ==========
function displaywork()
{
    let boox="";

    for( i=0;i<workWrite.length;i++)
    {
        boox+=
        `<tr>
            <td>${i}</td>
            <td>${workWrite[i]}</td>
           <td><button onclick="Delete(${i})" class=" btn btn-danger">Delete</button></td>
        </tr>
        `
        
    }
    document.getElementById("tbbody").innerHTML=boox;
    x.innerHTML = boox;

}
//  ===============clear=========================

function clearForm() {

    inputWork.value = "";

}
//  ===============clear==========================
function Delete(index) {
    workWrite.splice(index, 1)
    localStorage.setItem("worklist", JSON.stringify(workWrite))
    displaywork();
}

//  ===================================|========| section 2 |=========|===================================================================================

const colorBox = $("#colorBox");
let hustlin = $("#hustlin");
const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let interval = null;

function getRandom() {
    return Math.floor(Math.random() * 16);
}
let mp3 = new Audio('js/BabyLaugh.mp3'); // from stack overflow
colorBox.hover(function () {

        mp3.play(); // from stack overflow
        interval = setInterval(() => {
            let selectColor = "#";
            for (let i = 0; i < 6; i++) {
                selectColor += colors[getRandom()];
            }

            hustlin.css('backgroundColor', selectColor);
        }, 200)
    },
    function () {
        clearInterval(interval);
        hustlin.css("backgroundColor", "#fff");
        mp3.pause();

    });
//  ===================================|========| section 3|=========|===================================================================================

const red = $(".red");
const green = $(".green");
const blue = $(".blue");
const RGB = $("#RGB");
red.hover(function () {
    RGB.css("backgroundColor", "red");

}, function () {
    RGB.css("backgroundColor", "transparent");
});

green.hover(function () {
    RGB.css("backgroundColor", "green");

}, function () {
    RGB.css("backgroundColor", "transparent");
});

blue.hover(function () {
    RGB.css("backgroundColor", "blue");

}, function () {
    RGB.css("backgroundColor", "transparent");
});