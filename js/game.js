const image = ['url("../img/חדש 1.jpg")', 'url("../img/1.jpg")','url("../img/חדש 22.jpg")','url("../img/חדש 3.jpg")','url("../img/חדש 9.jpg")','url("../img/חדש 6.jpg")','url("../img/חדש 1.jpg")','url("../img/1.jpg")','url("../img/חדש 22.jpg")','url("../img/חדש 3.jpg")','url("../img/חדש 9.jpg")','url("../img/חדש 6.jpg")']
let start = image;
let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let flag = true;
let x;
let count=0;

function compereAudio() {
    let audio = new Audio('../img/s.wav');
    audio.play();
}
function compereAudio2() {
    let audio = new Audio('../img/b.wav');
    audio.play();
}
function miuzik() {
    let audio = new Audio('../img/רק.mp3')
    audio.play();
}


function comperdto() {
    let index
    let X;
    let Xindex
    let Y;
    let Yindex;
    
    for (index = 0; index < click.length; index++) {
        if (click[index] == 1)
        { X = start[index];
            Xindex = index;
            break;}
           


    }

    for (let i = index+1; i < click.length; i++) {
        if (click[i] == 1)
        {
            Y = start[i];
            Yindex = i;
            break;
        }
           


    }
    
    if (X == Y) {
        count++;
        setTimeout(() => {
            document.getElementById(String(Xindex)).style.visibility="hidden"
            document.getElementById(String(Yindex)).style.visibility="hidden"
                
             }, 1230)
             compereAudio2();
            


    }
    else
    {
        setTimeout(() => {
       document.getElementById(String(Xindex)).style.backgroundImage='url("../img/jh.jpg")'
       document.getElementById(String(Yindex)).style.backgroundImage='url("../img/jh.jpg")'
       compereAudio() ;
       
           
        }, 1230)
       
    }
    click[ Xindex]=0;
    click[Yindex]=0;
    if (count==6) {
        setTimeout(() => {
            self.location="finish.html"
           
            
             }, 1230)
            
      
           
        
    }


}



function createCard() {
    for (let index = 0; index < 12; index++) {

        let element = document.createElement("button");
        element.setAttribute("id", index);
        element.className = "c";
        document.getElementById("game").appendChild(element);
    
        element.addEventListener("click", function () {
           
            let d=document.getElementById(String(index));
            x=d.id;
            element.style.backgroundImage= start[x];
            click[x] = 1;
            flag = !flag;
              
            if (flag==true)
            {comperdto();}
                
               

        })

    }
}






function Start() {
   
    flag = true;
    let game = document.getElementById('game');
    game.innerHTML = "";
    game.style.display = 'block'
    document.getElementById("finish").style.backgroundImage.visibility="hidden";
    document.getElementById("finish").style.backgroundColor="black";


   

    createCard();
    let j = 0, randomNumber, m = 0;
    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//מערך שמסמל את מיקום התמונות שהוגרלו כדי שתמונה לא  תחזור על עצמה
    let k = [null, null, null, null, null, null, null, null, null, null, null, null]//מערך ששומר את התמונות שהוגרלו בצורה רנדומלית

    while (j < image.length) {//לולאה שמגרילה את התמונות
        let e = image[m];
        randomNumber = Math.floor(Math.random() * 12)
        while (d[randomNumber] == 1) {
            randomNumber = Math.floor(Math.random() * 12)
        }
        d[randomNumber] = 1;
        k[randomNumber] = e;
        m++;
        j++;




    }
    start = k;

}
function f(params) {
    self.location="game.html"
           

    
}
// (function () {
//     const second = 60,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24;
  
//     //I'm adding this section so I don't have to keep updating this pen every year :-)
//     //remove this if you don't need it
//     // let today = new Date(),
//     //     dd = String(today.getDate()).padStart(2, "0"),
//     //     mm = String(today.getMonth() + 1).padStart(2, "0"),
//     //     yyyy = today.getFullYear(),
//     //     nextYear = yyyy + 1,
//     //     dayMonth = "09/30/",
//     //     birthday = dayMonth + yyyy;
    
//     // today = mm + "/" + dd + "/" + yyyy;
//     // if (today > birthday) {
//     //   birthday = dayMonth + nextYear;
//     // }
//     // //end
    
//     // const countDown = new Date(birthday).getTime(),
//     //     x = setInterval(function() {    
  
//     //       const now = new Date().getTime(),
//     //             distance = countDown - now;
  
         
//     //         document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//     //         document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
//     //       //do something later when date is reached
//     //       if (distance < 0) {
//     //         document.getElementById("headline").innerText = "It's my birthday!";
//     //         document.getElementById("countdown").style.display = "none";
//     //         document.getElementById("content").style.display = "block";
//     //         clearInterval(x);
//     //       }
//     //       //seconds
//     //     }, 0)
//     // }());