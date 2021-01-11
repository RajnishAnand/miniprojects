$(()=>{
let sideBarBool=true;
$('.sidebar-icon').on('click',switchSideBar);


function switchSideBar(){
    sideBarBool=(sideBarBool)?false:true;
    if(!sideBarBool){
        $('#sidebar').css({
            'left':'0', 
            'opacity':'1', 
        });
        $('#sidebar-ico-part1, #sidebar-ico-part3').css({
            'top':'13.5px', 
            'width':'22px', 
            'margin-left':'-11px', 
            'transform':'rotate(315deg)'
        });
        $('#sidebar-ico-part1').css('transform','rotate(-225deg)')
        $('#sidebar-ico-part2').css({
            'transform':'rotate(45deg)', 
            'width':'22px', 
            'margin-left':'-11px'
        });
    }
    else{
        $('#sidebar').css({
            'left':'-10em', 
            'opacity':'0'
        });
        $('#sidebar-ico-part1').css({
            'top':'5px', 
            'width':'20px', 
            'margin-left':'-10px', 
            'transform':'rotate(0)'
        });
        $('#sidebar-ico-part2').css({
            'transform':'rotate(0)', 
            'width':'20px', 
            'margin-left':'-10px'
        });
        $('#sidebar-ico-part3').css({
            'top':'22px', 
            'transform':'rotate(0)', 
            'width':'20px', 
            'margin-left':'-10px'
        });
    }
}

$.getJSON('res/list.json?'+Math.random(),(data)=>{
    $('#disply').html('');
    data.forEach(addCode);
}).fail(_=>{
    $('#disply').html(_.responseText);
    console.log(_);
});
let lvlCol={
    'not good':'#cc0000', 
    'good':'#ffffff', 
    'better':'#ffff00', 
    'best':'#00ff00'
}
function addCode(code){
    code.path+='';
    let el=$(`
    <div class="code">
        <div class="code-image" style="background:#00bfff url(img/img-${code.index}.jpg) center/100% auto;"></div>
        <div class="code-name">
            ${code.name}
        </div>
        <div class="code-level" style="color:${lvlCol[code.level]};">
            Level : ${code.level}
        </div>
        <div class="code-last-updated">
            Last Updated : ${code.lastUpdated}
        </div>
        <div class="code-visit-button" onclick='location.href="${code.path}";'>
            Visit
        </div>
        <div class="code-detail">
            ${code.details}
        </div>
    </div>`);
    $(el).prependTo('#disply'); 
    $($(el)).on('click', ()=>{
        
        $('.code').css('height','10em');
        $('.code-visit-button').css('right','-4.5em');
        $('.code-detail').css('top','7px');
        $('.code-level').css('opacity','0');;
        
        requestAnimationFrame(_=>{
            $(el).css('height','14em');
            $(el).children('.code-visit-button').css('right','0');
            $(el).children('.code-detail').css('top', '48px');
            $(el).children('.code-level').css('opacity', '1');
        }); 
        //$(el).scroll(); */
  /*      let e=$(el)[0];
        let detl={
         elTop : e.getBoundingClientRect().top, 
         elHeight : e.clientHeight, 
         winScr : pageYOffset
        };
        console.log(detl);
        if(detl.elTop<detl.winScr){
            alert('✨ ')
        }*/
    });
};

/*$(window).scroll(()=>{
    console.log(window.pageYOffset+innerHeight);
})*/

});