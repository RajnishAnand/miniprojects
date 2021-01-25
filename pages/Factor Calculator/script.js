$('#inp').on('input',main);

function main(){
    let fctrs=[],txt='';
    let val=eval(this.value);
    for (let i=0;i<=val;i++){
        if(val%i==0){
            fctrs.push(i);
        };
    };
    switch(val){
        case undefined:
            txt='Enter a Number to Find it\'s Factor(s).';
            break;
        case 0:
            txt='ZERO is Non-Prime, Non-Composite number.<br>Although it has infinite factors.';
            break;
        case 1:
            txt='ONE is Non-Prime, Non-Composite number. <br>It has only and one Factor as itself.<br><br>';
            break;
        default :
            if(fctrs.length==2){
                txt='It is a Prime Number<br>as its factors are 1 and itself.<br><br>';
            }
            else if (fctrs.length>2){
                txt='It is a Composite Number and it has '+fctrs.length+' Factors as :<br><br> ';
            };
            break;
            
    };
    
    fctrs.forEach((n,i)=>{
            txt+='<span class="high-lyt">'+n+'</span> × '+val/n+' = '+val+'<br>';
    });
    
    $('#disp').html(txt);
};

$('#info-button').click(()=>{
    $('#info').css('display','block');
    let hi8=$('#info')[0].scrollHeight;
    hi8=(hi8>innerHeight)?innerHeight:hi8;
    
    setTimeout(()=>{
        $('#info').animate({
            "height":hi8
        },'slow');
    },300) ;
});

$('#info-close').click(()=>{
    $('#info').animate({
        'height':'0'
    },'700');
    setTimeout(()=>{
        $('#info').css('display', 'none');
    },700);
});