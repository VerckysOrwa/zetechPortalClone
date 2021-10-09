

const slideIn=()=>{
let sidebar=document.getElementsByClassName("sidebar");
for(i=0 ;i<sidebar.length;i++){
    sidebar[i].style.width="4.2%";
    sidebar[i].style.overflow="hidden";
    sidebar[i].style.transition="600ms"
}
let hamburger=document.getElementById("hamburgerIcon");
hamburger.style.marginLeft="-100%";   
hamburger.style.transition="600ms";   

let sidebarIcons=document.querySelectorAll(".sidebarIcons");
sidebarIcons.forEach((icon)=>{
icon.style.textAlign="center";
icon.style.color="red";
});
}

const slideOut=()=>{
    let sidebar=document.getElementsByClassName("sidebar");
    for(i=0 ;i<sidebar.length;i++){
        sidebar[i].style.width="17%";
        sidebar[i].style.overflow="scroll";
        sidebar[i].style.transition="500ms"
    } 
    let hamburger=document.getElementById("hamburgerIcon");
   hamburger.style.marginLeft="0em";   
   hamburger.style.transition="200ms";  

   let sidebarIcons=document.querySelectorAll(".sidebarIcons");
   sidebarIcons.forEach((icon)=>{
   icon.style.textAlign="center";
   icon.style.color="#373737";
   });
}


const unitsDropDown=()=>{   
    
let downAngle=document.getElementsByClassName("units");
for(i=0;i<downAngle.length;i++){
    downAngle[i].style.height="10%";
}
let events=document.getElementsByClassName("events");
for(e=0;e<events.length;e++){
    events[e].style.marginTop="-50%"
}
}

const unitsUp=()=>{
    let downAngle=document.getElementsByClassName("units");
    for(i=0;i<downAngle.length;i++){
        downAngle[i].style.height="27em";
    }
    let events=document.getElementsByClassName("events");
    for(e=0;e<events.length;e++){
        events[e].style.marginTop="+5%"
    } 
}