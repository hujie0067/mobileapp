"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
                effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
                delayScale: 1.5, // 遅延時間の指数
                delay: 50, // 文字ごとの遅延時間
                sync: false, // trueはアニメーションをすべての文字に同時に適用
                shuffle: true // trueは文字を順番にではなく、ランダムに
            }
        });

        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });   
        });

        setTimeout(
            function(){
                let popMessage = "いらっしゃい！おみくじ引いてって";
                window.alert(popMessage);
                
            },"5000"
        );

    }, false
);

let soundEndflag = "0";
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");
btn1.addEventListener("click",
    function() {
         // sound countrol
        if(soundEndflag === "1") {
            soundControl("end","");
        }
      /*  let n =Math.floor(Math.random() * 3);
         switch(n){
             case 0:
                btn1.textContent = "Very Happy!";
                btn1.style.color = "#FF0000";
                ban1.style.fontSize = "40px";
                break;
             case 1:        
                 btn1.textContent = "Happy!";
                 btn1.style.color = "#fff001";
                 ban1.style.fontSize = "30px";
                break;
             case 2:
                btn1.textContent = "Unhappy...";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "20px";
                break;

         }*/
      let resultText = ["img/daikichi.png","img/chukichi.png","img/syokichi.png","img/suekichi.png","img/daikyo.png",];
      /*let resultText = ["大吉!!!!","吉!!!!","中吉!!","小吉!!","末吉!","凶。。"];
      let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
      let resultFontSize = ["90px","80px","70px","60px","50px","40px"];*/
       let resultMaxSpeed = [10,10,8,5,5];
       let restltMaxSize = [30,30,30,40,30];
       let resultImage = ["img/star.png","img/snowflakes.png","img/redLeaves4.png","img/leaf.png","img/butterfly2.png"];
       let resulSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound3.mp3",];
       
       let n = Math.floor(Math.random() * resultText.length);
      
       omikujiTextImage.src = resultText[n];
       omikujiTextImage.classList.add("omikujiPaper");
       omikujiTextImage.addEventListener("animationend",
              function() {
                   omikujiTextImage.classList.remove("omikujiPaper");
               }, false
              );
      //sound contro1
      w_sound = resulSound[n];
      soundControl("start", w_sound);//start
      soundEndflag = "1";
      //snowfall stop
         $(document).snowfall("clear");

          setTimeout(
              function () {
        // jQueryのsnowfall
            $(document).ready(function(){
             $(document).snowfall({
              maxSpeed : resultMaxSpeed[n],// 最大速度
              minSpeed : 1, // 最小速度
              maxSize : restltMaxSize[n], // 最大サイズ
              minSize : 1, // 最小サイズ
              image : resultImage[n]
          });
        });
      },
      "200"
    );

    },false
 );
//sound contro1
let w_sound
let music
function soundControl(status, w_sound){
    if(status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if(status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}