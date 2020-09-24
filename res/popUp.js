/*------------------------
Created by Rajnish Anand 
last updated :24 sept 2020
-------------------------------------------------
To use :
add 👇 in your HTML
<script src="http://rajnishanand.github.io/Minigram/res/popUp.js"></script>
and to use👉 popup('your text','color')
------------------------------------------------*/


function popup(txt, col='#ff5500'){
   
   let el =document.createElement('div');
   el.innerHTML=txt;
   el.className='popuptxt';
   el.style.color=col;
   
   popupC.innerHTML='';
   popupC.appendChild(el);
   setTimeout(()=>{try{
       el.style.bottom='-1em';
       el.style.opacity='0';
       setTimeout(()=>{try{
           popupC.removeChild(el);
       }catch(err){}},600);
   }catch(err){}},2000 )
}


let popupC = document.createElement('div');
popupC.id='popupC';
document.body.appendChild(popupC);
document.head.innerHTML+='<style>.popuptxt{position:fixed;bottom:0;left:0;width:100%;text-align:center;background:#ffffff;font-weight:900;line-height:1.5em;border-top:3px solid;transition:0.5s ease-in;opacity:1;}</style>'