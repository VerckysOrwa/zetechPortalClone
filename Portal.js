

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

}