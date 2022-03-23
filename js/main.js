//scrolling plugin start
let mainColorScroll='#4caf50';
$(document).ready(function() {
    $("body").niceScroll({
        cursorcolor: mainColorScroll,
        cursorwidth:"16px"
    });
});
//scrolling plugin end
// typing plugin typed.js start
var typed = new Typed('.momo', {
    strings: ["",` Created With Love ^1000By Mohammed Mofreh ^1000 2022`],
    typeSpeed: 30,
    startDelay: 1000,
    loop:true,
    backSpeed: 10,
    
});
// typing plugin typed.js end
//funny text start
$(document).ready(function(){
    $('.funny-text').funnyText({
        speed: 300,

    });
});
//funny text end
let landingSection = document.querySelector('.landing-section');

// setting the background changing 
let landingInterval ;
// background channging function 
var counter = 0;
function intervalBKFunc(){
    counter++
    let backgroundImgArr = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.png']
    landingSection.style.cssText =  `background-image: url('../images/${backgroundImgArr[Math.floor( Math.random()* backgroundImgArr.length)]}'); 
    transition: 2000ms linear;`;
}

/////////menu bar style start
let menuMobile = document.querySelector('.menu ul');
let menuBar = document.querySelector('.menu-bar');

menuBar.onclick = function(e){
    e.stopPropagation();

    menuMobile.classList.toggle('open')
}
document.addEventListener('click', function(e){
    if(e.target !== menuMobile){
        if(!menuMobile.classList.contains('open')){
            menuMobile.classList.toggle('open')
        console.log(menuMobile)
        }
    }
});
/////////menu bar style end
//dots section start
// let dotsList = document.getElementsByClassName('.list-dots li');
// // console.log()
// // dotsList.onclick = function(e){
// // }

let dotsList = document.querySelectorAll('.list-dots li');
function scrollToItem(dotsList){
    dotsList.forEach(element => {
        element.addEventListener('click',function(e){
            if(e.target.dataset.dot== null)
            {
                
                document.getElementById(this.dataset.dot).scrollIntoView({
                    behavior:"smooth",
                })
            }
            else{
                document.getElementById(e.target.dataset.dot).scrollIntoView({
                    behavior:"smooth",
                })
            }
        })
    });
}
scrollToItem(dotsList)
//dots section end

//left control section start
let gearBoxCtrl = document.querySelector('.gear-box');
let leftsideCtrl = document.querySelector('.leftside-control');

    gearBoxCtrl.addEventListener('click', function(e){
    if(!leftsideCtrl.classList.contains('full-width'))
    {
        leftsideCtrl.classList.add('full-width');
        gearBoxCtrl.classList.add('gear-animation');
    }
    else
    {
        leftsideCtrl.classList.remove('full-width');
        gearBoxCtrl.classList.remove('gear-animation');
    }
})
//color selection start
let colorsList = document.querySelectorAll('.colors-list span')
var colorsListArray = Array.from(colorsList)
// getting the color form the localStorage
let mainColorCockei = window.localStorage.getItem('--mainColor')
// setting active class for selected color from localStorage
if(mainColorCockei != null)
{   mainColorScroll = mainColorCockei;
    document.documentElement.style.setProperty('--mainColor',mainColorCockei);
    colorsListArray.forEach(item=>{
        if(item.dataset.color == mainColorCockei)
        {
    
            item.classList.add('active')
        }
    });
}else {
    colorsList[colorsList.length-1].classList.add('active')

}

//setting the color from the user
colorsListArray.forEach(element => {
    element.addEventListener('click',function(e){
        //removing active style for all items
        colorsListArray.forEach(el => {
            el.classList.remove('active')
        });
        //adding active style for clikced item
        element.classList.add('active');
        //setting the background color to selected one
        document.documentElement.style.setProperty('--mainColor',e.target.dataset.color)
        // adding the selected color to the cockeis
        window.localStorage.setItem('--mainColor',e.target.dataset.color);
    });
});
//color selection end
//Radndom background start
let btnBackG = document.querySelectorAll('.btn-bk');
// checking if the randombackground is stored in localStorage
let randoBackCocke = window.localStorage.getItem('randomBackground')
let BtnsBkArr = Array.from(btnBackG)
if(randoBackCocke == 'true'){
        landingInterval = setInterval(intervalBKFunc,4000)
            BtnsBkArr[0].classList.add('active');

    }
    else {
        BtnsBkArr[1].classList.add('active');
        clearInterval(landingInterval);
    }




// looping throught the element in the button list
btnBackG.forEach(el=>{
    el.addEventListener('click',function(e){
        // remove the active class form all element
        btnBackG.forEach(el=>{
            el.classList.remove('active');
        })

        // add active class to the clicked element
        el.classList.add('active');

        if(e.target.dataset.bkbtn == 'yes')
        {
            landingInterval = setInterval(intervalBKFunc,4000)
            window.localStorage.setItem('randomBackground',true)
            console.log(e.target.dataset.bkbtn)
        }
        else {
            clearInterval(landingInterval)
            window.localStorage.setItem('randomBackground',false)
            console.log(e.target.dataset.bkbtn)
            
        }

    })
});

//Radndom background end
// show bullets section start
let bulletbtnlist = document.querySelectorAll('.btn-bullet');
let hideBulltCocke = window.localStorage.getItem('bulletHide');
let navDots = document.querySelector('.nav-dots')
if(hideBulltCocke == 'true'){
    bulletbtnlist[0].classList.add('active');
    navDots.style.display = 'none';
    }
    else {
        bulletbtnlist[1].classList.add('active');
        
    }


bulletbtnlist.forEach(element=>{

    element.addEventListener('click',function(e){
        bulletbtnlist[0].classList.remove('active')
        bulletbtnlist[1].classList.remove('active')
        
        if(e.target.dataset.bulletbtn == 'yes'){      
            navDots.style.display = 'none'
            bulletbtnlist[0].classList.add('active')
            window.localStorage.setItem('bulletHide',true)
        }        
        else
        {       
            navDots.style.display = 'flex';
            bulletbtnlist[1].classList.add('active')
            window.localStorage.setItem('bulletHide',false)
        }
    });
});
// show bullets section end
// reset option start
let resetBtn = document.querySelector('.reset-control')

resetBtn.addEventListener('click', function(e){

    let colorsListArr = document.querySelectorAll('.colors-list span')
    // color control resetting start
    colorsListArr.forEach(el => {
        el.classList.remove('active')
    });
    //adding active style for clikced item
    colorsListArr[colorsListArr.length-1].classList.add('active');
    //setting the background color to selected one
    document.documentElement.style.setProperty('--mainColor',colorsListArr[colorsListArr.length-1].dataset.color)
    // adding the selected color to the cockeis
    if(window.localStorage.getItem('--mainColor') != null)
    window.localStorage.setItem('--mainColor',colorsListArr[colorsListArr.length-1].dataset.color);
    // color control resetting end

    // Random background start
    let btnbkRandom = document.querySelectorAll('.btn-bk');
        btnbkRandom[0].classList.remove('active')
        if(!btnbkRandom[1].classList.contains('active'))
        btnbkRandom[1].classList.add('active')
        if(window.localStorage.getItem('randomBackground') != null)
        window.localStorage.setItem('randomBackground', false);
        if(landingInterval){
            clearInterval(landingInterval);
        }
    // Random background end

    //bullet hide start
    let navDots = document.querySelector('.nav-dots')

    let btnHideBullet = document.querySelectorAll('.btn-bullet');
    btnHideBullet[0].classList.remove('active')
    if(!btnHideBullet[1].classList.contains('active'))
    btnHideBullet[1].classList.add('active')
    navDots.style.display = 'block'
    if(window.localStorage.getItem('bulletHide') != null)
    window.localStorage.setItem('bulletHide', false);
    //bullet hide end
});
// reset option end
//left control section end
//skill scroll increaseing start
let skillsSection  = document.querySelector('#skills');
let skillItem  = document.querySelectorAll('.skill')
window.onscroll = function(e){

    if(window.scrollY >= (skillsSection.offsetTop + skillsSection.offsetHeight - window.innerHeight))
{
    skillItem.forEach(el=>{
        if(el.dataset.skillval =='100%')
        {
            el.style.cssText = `width:${el.dataset.skillval};transition: 800ms linear;
                                border-top-right-radius:5px;border-bottom-right-radius:5px`;
        }else
        el.style.cssText = `width:${el.dataset.skillval};transition: 800ms linear;`;
    });
}
}
//skill scroll increaseing end
// gallery section start
let galleryImg = document.querySelectorAll('.gallery-img img');
let newImgElement = document.createElement('img');
let backgroundOverly = document.querySelector('.background-overly');
let overlyContent = document.querySelector('.content-overly');
let closeOverly = document.querySelector('.close-overly')
let overlyPara = document.querySelector('.overly-p')
galleryImg.forEach(element=>{
    element.addEventListener('click',function(e){
        // console.log(element.dataset.gallery);
        backgroundOverly.style.display = 'block';
        newImgElement=element.cloneNode();
        newImgElement.style.cssText ='width: 100%;'
        overlyContent.append(newImgElement);
        overlyPara.textContent = element.dataset.gallery;
    })
    closeOverly.onclick = function(e){
        backgroundOverly.style.display = 'none';
        overlyContent.removeChild(overlyContent.lastChild);
        
    }
});
// gallery section end
// contact start
let form = document.querySelector('.contact-form');
let  validateItem = document.querySelector('.user-phone');
form.addEventListener('submit',function(e){
    var pattern = /[0-9]/g;
    if(!pattern.test(validateItem.value))
    e.preventDefault();

})

// contact end

