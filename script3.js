'use strict';

//Tahmin edilecek rastgele sayı (1-20 arasında)
const gizliNumara = Math.trunc(Math.random()*20) + 1;
document.querySelector(".number").textContent = gizliNumara;

//Oyuncunun yanlış tahminiyle düşecek puanın tutulduğu değişken
let puan = 20;


//Tahmin edilecek sayı ve oluşacak eventler
//HTML'de class'lara ulaşılacak
document.querySelector(".check").addEventListener("click", function(){
    const tahmin = Number(document.querySelector(".guess").value)
    console.log(typeof tahmin, tahmin);
    //Sayının girilmesiyle oluşacak koşul bloğu
    //Hiçbir değer girilmez ise:
    if(!tahmin){
        //Değer girilmediği durumda !tahmin şeklinde boş değere cevap verecek koşul
        document.querySelector(".message").textContent = "Değer giriniz !"
    //Oyuncunun tahmininin doğru olup, kazandığı koşul
    }else if(tahmin === gizliNumara){
        document.querySelector(".message").textContent = "Doğru Tahmin !";
        //Kazandıktan sonra CSS'de gerçekleşecek olan değişiklikler
        document.querySelector("body").style.backgroundColor = '#60B347';
        document.querySelector(".number").style.width = '30rem'
    //Girilen/tahmin edilen değer oluşturulan rastgele sayıdan küçük ise gerçekleşecek koşul
    }else if(tahmin < gizliNumara){
        //Oyuncu 0 puana gelip kaybettiğinde oluşacak koşullar
        if(puan > 1){
            document.querySelector(".message").textContent = "Daha Büyük Bir Sayı !"
        //Her yanlış tahminde tanımlanan puanın düşürülmesi
        puan--;
        document.querySelector(".score").textContent = puan;
        }else {
            document.querySelector(".message").textContent = "Üzgünüm, Kaybettin !";
            
            document.querySelector(".score").textContent = 0;
        }
    //Girilen/tahmin edilen değer oluşturulan rastgele sayıdan büyük ise gerçekleşecek koşul
    }else if(tahmin > gizliNumara){
        //Oyuncu 0 puana gelip kaybettiğinde oluşacak koşullar
        if(puan > 1){
            document.querySelector(".message").textContent = "Daha Küçük Bir Sayı !"
        //Her yanlış tahminde tanımlanan puanın düşürülmesi
        puan--;
        document.querySelector(".score").textContent = puan;
        }else {
            document.querySelector(".message").textContent = "Üzgünüm, Kaybettin !";
            puan--;
            document.querySelector(".score").textContent = puan;
        }
    }
});

