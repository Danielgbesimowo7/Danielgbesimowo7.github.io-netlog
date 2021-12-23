let $=(id)=>{
   return document.getElementById(id);
}
let check=$("input-toggler");
let header=$("header");
let gray=$("gray");
let a=document.getElementsByTagName("a");

for(let k=0;k<a.length;k++){
   a[k].href="javascript:void(0)"
}

function overlay(){
   if (check.checked){
      header.style.height="17rem";
      gray.style.top="15rem";
      gray.style.height="100%"
   }
   
   else{
      header.style.height="5rem";
      gray.style.top="0"
      gray.style.height="0";
   }
}

check.addEventListener('click',overlay);

