    let workInputText =document.getElementById("inputWork");
    let butttonAdd= document.getElementById("btnAddwork");
    let divcontentWork= document.getElementById("contentWork");
    let x= document.getElementById("tbbody");
//============================================================
    let workWrite=[];                                                          //|
    if(localStorage.getItem("worklist")==null)                            //  |
    {                                                                     //  |
        workWrite=[];                                                     //  |          
    }                                                                     //  |
    else                                                                  //  |
    {                                                                     //  |
        workWrite= JSON.parse(localStorage.getItem("worklist"));          //  |          
        displaywork();                                                    //  |  
    }                                                                     //  |
                                                                          //  |              
//========================= add function ===================================
    function addWork()
    {
           
        workWrite.push(inputWork.value)
        localStorage.setItem("worklist",JSON.stringify(workWrite))
        displaywork();
        clearForm();
    }

//========================= display function ===================================
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
//  ===============clear======================

function clearForm()
{

    inputWork.value="";
       
}
//  ===============clear======================
    function Delete(index)
    {
        workWrite.splice(index,1)
        localStorage.setItem("worklist",JSON.stringify(workWrite))
        displaywork();
    }
//  ===================================|========| section 2 |=========|===================================================================================
                             
//                                 ____\/___
//================================|regex nam|=============================================
//                                |_________|
let alert =document.getElementById("alertName");
let nametexe=document.getElementById("inputName");
function valedationName(nametexe)
{

    let regex= /^[A-Z][a-z]{3,6}$/
    if(regex.test(nametexe)==true)
    {
        nametexe.classList.add("is-valid");
        nametexe.classList.remove("is-invalid");
        addWork.classList.add("d-flex");
        addWork.classList.remove("d-non");

    }
    else
    {
        
        nametexe.classList.add("is-invalid");
        nametexe.classList.add("is-valid"); 
        addWork.classList.add("d-non");
        addWork.classList.remove("d-flex");
    }


}
nametexe.addEventListener("keyup",function(){

// valedationName(nametexe.value);
console.log("hi");

})
//================================|regex phone|=============================================
//
document.getElementById("inputphone");
document.getElementById("alertPhone")

function valedationphone(inputphone)

{
let regex=/^(002)?01[0125][0-9]{8}/
    if( regex.test(inputphone)==true)

    {
        inputphone.classList.add("is-valid");
        inputphone.classList.remove("is-invalid");
        alertPhone.classList.add("d-flex");
        alertPhone.classList.remove("d-non");

    }
    else
    {
        
        inputphone.classList.add("is-invalid");
        inputphone.classList.add("is-valid"); 
        alertPhone.classList.add("d-non");
        alertPhone.classList.remove("d-flex");
    }


}
inputphone.addEventListener("keyup",function(){

    valedationName(inputphone.value);
    
    
    })

//================================|regex Email|=============================================



    

  //  ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$







//  ===================================|========| section 3 |=========|===================================================================================

const colorBox = $("#colorBox");
const hustlin = $("#hustlin");
const colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let interval= null;

function getRandom(){
   return Math.floor(Math.random()*16)
}
let audio = new Audio('audio/BabyLaugh.mp3'); // from stack overflow
colorBox.hover(function () {
   console.log("play Audi");
      audio.play();  // from stack overflow
//    interval = setInterval (()=>{
//        let selectColor ="#";
//        for (let i = 0; i < 6; i++) {
//            selectColor+=colors[getRandom()];   
//        }
//        hustlin.css("backgroundColor",selectColor);
//        },200)
}, 
function () {
       //clearInterval(interval);
      // hustlin.css("backgroundColor","#fff");
       audio.pause();
       console.log("Paus Audio")
      });
       /* ===== 3) =================  Third Section Coming Soon ================ */
    const remainingDays = $("#days h5");
    const remainingHours = $("#hours h5");
    const remainingMinutes = $("#minutes h5");
    const remainingSeconds = $("#seconds h5");
    const Finish = $(".finish");

    let dateFuture = new Date("jan 1,2021 00:01:00").getTime(); // get future Date in Miliseconds
    
    // get the days - hours - minutes - seconds every second
    let downFunc = setInterval(()=>{
    let dateNow = new Date(); // get current date
    let currentTime = dateFuture - dateNow; // get the diffrence between fututre date and current date
    let seconds = Math.floor((currentTime)/1000); // get round down seconds
    let minutes = Math.floor(seconds/60); // get round down minutes
    let hours = Math.floor(minutes/60); // get round down hours
    let days = Math.floor(hours/24); // get round down days
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        //Display results of Days - Hours - Minutes - Seconds //// 
        remainingDays.text(days);
        remainingHours.text(hours);
        remainingMinutes.text(minutes);
        remainingSeconds.text(seconds);
        if(currentTime<0){
            clearInterval(downFunc); // clear counter when reach Zero
            remainingDays.text("00");
            remainingHours.text("00");
            remainingMinutes.text("00");
            remainingSeconds.text("00");
            Finish.html("<h1>Opining Now</h1>")
        }
        
    },1000);
    