let header=document.querySelector("body>ul");
let image=document.querySelector("a");
let flag=false;
image.onclick=function(){
    if(!flag){
        header.style.display="flex";
        flag=true;
    }
    else if(flag){
        header.style.display="none";
        flag=false;
    }
}