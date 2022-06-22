'use strict';

//Tahmin edilecek rastgele sayı (1-20 arasında)
//Değişken let ile oluşturulmalı ki again buttonuna basıldığında tekrar rastgele sayı üretmesi için

let rastgeleSayı = Math.trunc(Math.random() * 20 + 1);

//Oyuncunun yanlış tahminiyle düşecek puanın tutulduğu değişken
let score = 20;

//En yüksek skorun tutulması:
let yüksekSkor = 0;

//refactoring -
const ekranMesajı = function (girdi) {
  document.querySelector('.message').textContent = girdi;
};


//Tahmin edilecek sayı ve oluşacak eventler
//HTML'de class'lara ulaşılacak

document.querySelector('.check').addEventListener('click', () => {
  //guess HTML'de bir input olduğu için girilen değer tipi önemli. Bu yüzden bu değeri Number fonksiyonu ile bir sayıya çevirip, bu sayıyı (dğer/value) seçmeliyiz.
  const guess = Number(document.querySelector('.guess').value);

  //Sayının girilmesiyle oluşacak koşul bloğu
  //Hiçbir değer girilmez ise:
  if (!guess) {
  //Değer girilmediği durumda !guess şeklinde boş değere cevap verecek koşul
   ekranMesajı('⛔️ Insert a number ⛔️');
  }

  //oyuncunun tahmini doğru olup, kazandığı zaman gerçekleşecek koşul:
  else if (guess === rastgeleSayı) {
    ekranMesajı('🎉 Congratulations you find it ! 🎉');
    document.querySelector('.number').textContent = rastgeleSayı;
    //Kazandıktan sonra CSS'de gerçekleşecek olan değişiklikler
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > yüksekSkor) {
      yüksekSkor = score;
      document.querySelector('.highscore').textContent = yüksekSkor;
    }
  }

  //oyuncunun yanlış tahmin yaptığı koşullar:

  else if (guess !== rastgeleSayı) {
    //oyunun kaybedilebilmesi ve - değerlere inmemesi için puanın 1'den büyük olması gerekli
    if(score > 1){
      guess < rastgeleSayı ? ekranMesajı('Too low 📉') : ekranMesajı('Too high 📈');
      //her yanlış tahminde tanımlanan başlangıç puanı olan 20'den bir puan düşmesi için
      score--;
      document.querySelector('.score').textContent = score;
    }
    //puan < 1 olduğunda kaybedilmesi
    else{
      ekranMesajı('👎 You Lost ! 👎')
      document.querySelector('body').style.backgroundColor = '#990000'
      document.querySelector('.main-heading').textContent = '🚬🚬 Başaramadık abi... 🚬🚬';
      document.querySelector('.number').textContent = rastgeleSayı;
      document.querySelector('.score').textContent = '0'
      document.querySelector('.guess').value = ''
    }
  }

});


//Again button'u
document.querySelector('.again').addEventListener('click', () => {
  //tekrar oynanacağı zaman puanın tekrar 20 olması ve rastgele sayının yenilenmesi gerekli:
  score = 20;
  document.querySelector('.score').textContent = score;
  rastgeleSayı = Math.trunc(Math.random() * 20 + 1);

  //css özelliklerinin ve yazıların ilk haline dönmesi
  document.querySelector('body').style.backgroundColor = '#555';
  document.querySelector('.number').style.width = '15rem';
  ekranMesajı('Start guessing...')
  document.querySelector('.number').textContent = '?';
  document.querySelector('.main-heading').textContent = 'Guess My Number!'
  document.querySelector('.guess').value = ''
});



//Dil seçeneği:
//Türkçe dil seçeneği

document.querySelector('.tr').addEventListener("click", () => {

  document.querySelector('.between').textContent = '1 ile 20 Arasında';
  document.querySelector('.again').textContent = 'Tekrar!';
  document.querySelector('.again').style.left = '1.25rem';
  document.querySelector('.main-heading').textContent = 'Sayımı Tahmin Et!';
  document.querySelector('.check').textContent = 'Kontrol et!';
  document.querySelector('.message').textContent = 'Tahmine başla...';
  document.querySelector('#label-score').textContent = '💯 Puan:';
  document.querySelector('#label-highscore').textContent = '🥇 En yüksek puan:';

  //Koşul bloğu zaten tanımlandığı için TR dil seçeneğinde gerçekleşecek olan koşullar şu şekildedir:
  document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
  
    //oyuncu hiçbir değer girmeden tahmin yaparsa:
    if (!guess) {
     ekranMesajı('⛔️ Sayı giriniz ! ⛔️');
    }
  
    //oyuncunun tahmini doğru olduğu zaman:
    else if (guess === rastgeleSayı) {
      ekranMesajı('🎉Tebrikler Buldun ! 🎉');
      document.querySelector('.number').textContent = rastgeleSayı;
  
      if (score > yüksekSkor) {
        yüksekSkor = score;
        document.querySelector('.highscore').textContent = yüksekSkor;
      }
    }
  
    //oyuncunun yanlış tahmin yaptığı koşullar
  
    else if (guess !== rastgeleSayı) {
      if(score > 1){
        guess < rastgeleSayı ? ekranMesajı('Çok düşük 📉') : ekranMesajı('Çok yüksek 📈');
        document.querySelector('.score').textContent = score;
      }
      else{
        ekranMesajı('👎 Kaybettin ! 👎')
      }
    }
  
  }
  


  );
  
  //Tr dil seçeneği aktifken oyunu tekrar etmek için:
  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    rastgeleSayı = Math.trunc(Math.random() * 20 + 1);
  
    document.querySelector('body').style.backgroundColor = '#555';
    document.querySelector('.number').style.width = '15rem';
    ekranMesajı('Tahmine başla...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.main-heading').textContent = 'Sayımı Tahmin Et!'
    document.querySelector('.guess').value = ''
  });
})

//Ingilizce dil seçeneği
//Sayfayı yenileyerek default değer olan ingilizceye dönmek için (ya da yukarıdaki bloğu tekrar yazabiliriz.):
document.querySelector('.en').addEventListener("click", () =>{
  location.reload();
})
