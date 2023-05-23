const nav=document.getElementsByClassName("ULL")[0];
const bar=document.getElementsByClassName("bar2")[0];
const bar1=document.getElementsByClassName("bar1")[0];
function navbar(){
nav.style.display="block";
bar.style.display="block";
bar1.style.display="none";
bar.style.zIndex="2";
}
function navbar2(){
nav.style.display="none";
bar.style.display="none";
bar1.style.display="block"
}
window.addEventListener('scroll',function(){
    let navbar=document.getElementsByClassName('header')[0];
    if(window.pageYOffset >= 60)
    {
        navbar.classList.add('sticky');
        navbar.style.zIndex="2";
    }
    else{
        navbar.classList.remove('sticky');
        navbar.style.zIndex="0";
    }
});
const one=document.getElementsByClassName("upper")[0];
const ONE=document.getElementsByClassName("one")[0];
const one1=document.getElementsByClassName("upper1")[0];
const one2=document.getElementsByClassName("upper2")[0];
const call=document.getElementsByClassName("call")[0];

function UP(){
    one.style.transition="all 3s";
    one.style.marginTop="-250px";


}
function UP1(){
   
    // one.style.trasitionDuration="2s";
    one1.style.transition="all 3s";
    one1.style.marginTop="-250px";
    

}
function UP2(){
   
    one2.style.transition="all 3s";
    one2.style.marginTop="-250px";

}
function Down(){
    
    one.style.marginTop="0";
}
function Down1(){
   

    one1.style.marginTop="0";
    
}
function Down2(){
    
    one2.style.marginTop="0";
}
function AAVA(){
    call.style.transition="all 2s";
    call.style.right=0;
    setInterval(JAVA,10000)   
}
function JAVA(){
 
    call.style.right="-105px";
}






