document.body.onscroll = function(){
    let scrollY = window.scrollY
    let viewHeight = window.innerHeight
    document.querySelector("#yyy").innerText = scrollY+viewHeight
    document.body.style.setProperty("--scrollY", scrollY);
    document.body.style.setProperty("--h", scrollY/10);

    /*reward board*/ 
    let graphY = document.querySelector('#top-re').offsetTop;
    if ((scrollY+viewHeight)-200<=graphY){
        document.querySelector('#con1').dataset.active = 1;
    }else{
        document.querySelector('#con1').dataset.active = 0;
    }

    if ((scrollY+viewHeight)-400<=graphY){
        document.querySelector('#con2').dataset.active = 1;
    }else{
        document.querySelector('#con2').dataset.active = 0;
    }

    if ((scrollY+viewHeight)-600<=graphY){
        document.querySelector('#con3').dataset.active = 1;
    }else{
        document.querySelector('#con3').dataset.active = 0;
    }

    /*news board*/
    let graphYnews = document.querySelector('.newsboard').offsetTop;
    if ((scrollY+viewHeight)-300<=graphYnews){
        document.querySelector('.nb1').dataset.active = 1;
    }else{
        document.querySelector('.nb1').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-400<=graphYnews){
        document.querySelector('.nb2').dataset.active = 1;
    }else{
        document.querySelector('.nb2').dataset.active = 0;
    }

    /*three-card-container*/ 
    let graphYcard = document.querySelector('.th-grid-contain').offsetTop;
    if ((scrollY+viewHeight)-200<=graphYcard){
        document.querySelector('.cd1').dataset.active = 1;
    }else{
        document.querySelector('.cd1').dataset.active = 0;
    }

    if ((scrollY+viewHeight)-300<=graphYcard){
        document.querySelector('.cd2').dataset.active = 1;
    }else{
        document.querySelector('.cd2').dataset.active = 0;
    }

    if ((scrollY+viewHeight)-400<=graphYcard){
        document.querySelector('.cd3').dataset.active = 1;
    }else{
        document.querySelector('.cd3').dataset.active = 0;
    }
    
    /*course columns*/ 
    let graphYgrid = document.querySelector('.course-grid').offsetTop;
    if ((scrollY+viewHeight)-100<=graphYgrid){
        document.querySelector('.g1').dataset.active = 1;
    }else{
        document.querySelector('.g1').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-150<=graphYgrid){
        document.querySelector('.g2').dataset.active = 1;
    }else{
        document.querySelector('.g2').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-200<=graphYgrid){
        document.querySelector('.g3').dataset.active = 1;
    }else{
        document.querySelector('.g3').dataset.active = 0;
    } if ((scrollY+viewHeight)-250<=graphYgrid){
        document.querySelector('.g4').dataset.active = 1;
    }else{
        document.querySelector('.g4').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-300<=graphYgrid){
        document.querySelector('.g5').dataset.active = 1;
    }else{
        document.querySelector('.g5').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-350<=graphYgrid){
        document.querySelector('.g6').dataset.active = 1;
    }else{
        document.querySelector('.g6').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-400<=graphYgrid){
        document.querySelector('.g7').dataset.active = 1;
    }else{
        document.querySelector('.g7').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-450<=graphYgrid){
        document.querySelector('.g8').dataset.active = 1;
    }else{
        document.querySelector('.g8').dataset.active = 0;
    }
    if ((scrollY+viewHeight)-500<=graphYgrid){
        document.querySelector('.g9').dataset.active = 1;
    }else{
        document.querySelector('.g9').dataset.active = 0;
    }   
}

