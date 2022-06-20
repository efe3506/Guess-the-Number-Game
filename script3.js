'use strict';

//Tahmin edilecek rastgele sayı (1-20 arasında)
//Değişken let ile oluşturulmalı -> again buttonuna basıldığında tekrar rastgele sayı üretmesi için

let gizliNumara = Math.trunc(Math.random()*20) + 1;

//Oyuncunun yanlış tahminiyle düşecek puanın tutulduğu değişken
let puan = 20;

//En yüksek skorun tutulması:
let yüksekPuan = 0;

//refactoring - 

const ekranMesajı = function(mesaj){
    document.querySelector('.message').textContent = mesaj;
};

//Dil Seçeneği

//if/else bloğu içindeki yazılar nasıl değişecek?
//puan ve yüksek puan dil değişikliği sonrası çalışmıyor?

//eng
document.querySelector('.lang1').addEventListener("click", function(){
  ekranMesajı('Guess...');
  document.querySelector('.h-1').textContent = "Guess My Number!";
  document.querySelector('.between').textContent = "Between 1 and 20";
  document.querySelector('.again').textContent = "Again!";
  document.querySelector('.check').textContent = "Check!";
  document.querySelector('.label-score').textContent = "💯 Score:";
  document.querySelector('.label-highscore').textContent = "🥇 High Score:";
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = '0'

})
//tr
document.querySelector('.lang2').addEventListener("click", function(){
  ekranMesajı('Tahmin Et...');
  document.querySelector('.h-1').textContent = "Sayımı Tahmin Et!";
  document.querySelector('.between').textContent = "1 ile 20 Arasında";
  document.querySelector('.again').textContent = "Tekrar!";
  document.querySelector('.check').textContent = "Kontrol Et!";
  document.querySelector('.label-score').textContent = "💯 Puan:";
  document.querySelector('.label-highscore').textContent = "🥇 En Yüksek Puan:";
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = '0'
  
})


//Tahmin edilecek sayı ve oluşacak eventler
//HTML'de class'lara ulaşılacak


document.querySelector(".check").addEventListener("click", function(){
    const tahmin = Number(document.querySelector(".guess").value)
    console.log(typeof tahmin, tahmin);

    //Sayının girilmesiyle oluşacak koşul bloğu
    //Hiçbir değer girilmez ise:
    if(!tahmin){
        //Değer girilmediği durumda !tahmin şeklinde boş değere cevap verecek koşul
        ekranMesajı("⛔️ Sayı Girmedin !")


    //Oyuncunun tahmininin doğru olup, kazandığı koşul
    }else if(tahmin === gizliNumara){
        ekranMesajı("🎉Doğru Tahmin !");
        //Kazandıktan sonra CSS'de gerçekleşecek olan değişiklikler
        document.querySelector("body").style.backgroundColor = '#60B347';
        document.querySelector(".number").style.width = '30rem'
        document.querySelector('.number').textContent = gizliNumara;

        //Yüksek skorun kazanılması ve tutulması koşulu
        if(puan > yüksekPuan){
            yüksekPuan = puan;
            document.querySelector('.highscore').textContent = yüksekPuan;
        }
    }
    //Girilen/tahmin edilen değer oluşturulan rastgele sayıdan küçük ise gerçekleşecek koşul
    else if(tahmin !== gizliNumara){
        if (puan > 1) {
          ekranMesajı( tahmin > gizliNumara ? "📈Çok yüksek" : "📉Çok düşük");
          // puan = puan - 1
          puan--;
          document.querySelector('.score').textContent = puan;
        }
        //Puan < 1 olduğunda kaybedilecek
        else {
         ekranMesajı('💥Kaybettin !');
          document.querySelector('.score').textContent = 0;
        }
      }
});


//Again button'u
document.querySelector('.again').addEventListener('click', function(){
    gizliNumara = Math.trunc(Math.random() * 20) + 1;
    puan = 20;
    
    ekranMesajı('Tahmin Et...');
    document.querySelector('.score').textContent = puan;
    document.querySelector('.guess').value = '0';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').textContent = ' '
  })



