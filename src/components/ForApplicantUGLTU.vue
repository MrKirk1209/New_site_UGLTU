<template>
  <div class="container">
  <div class="text-header">Абитуриенту</div>
  <div class="container-for-applicant">
            <div class="container-lk-abiturient-img">
              <img src="/src/components/icons/lk_abiturient.png" alt="lk_abiturient">
            </div>
          <div class="container-email">
              <p>Если у вас возникли технические проблемы
                при подаче документов, свяжитесь с нами:</p>
              <ul>
                <li><img src="/src/components/icons/message.svg" alt="phone">2212200@m.usfeu.ru</li>
                <li><img src="/src/components/icons/message.svg" alt="phone">tppk@m.usfeu.ru</li>
              </ul>
          </div>

        <div class="container-phone">
              <h1>Контакты:</h1>
              <ul>
              <li><img src="/src/components/icons/phone.svg" alt="phone">8-800-350-61-10 (Телефон горячей линии)</li>
              </ul>
        </div>

  </div>
  </div> 
</template>

<style scoped>
.container {
  max-width: 1110px;
  margin: 0 auto; 
  
}
.container-for-applicant{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.text-header{
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  max-width: 1110px;
  margin: 0 auto;
  color: #00421D;
  padding: 20px;
}

.container-email{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
}
.container-email li{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.container-email ul{
  list-style-type: none;
  font-size: 20px;
}
.container-email p{
  font-family: 'Roboto', sans-serif;
  color: #00421D;
  font-size: 24px;
  text-align:justify;
}
.container-email img{
  width: 30px;
  height: 26px;
}

.container-phone{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  
}
.container-phone ul{
  list-style-type: none;
  font-size: 20px;
}
.container-phone h1{
  font-size: 24px;
  
}
.container-phone img{
  width: 30px;
  height: 26px;

}
.container-phone li{
  display: flex;
  gap: 10px;
  align-items: center; 
}
@media (max-width: 768px) {
  .text-header {
    font-size: 30px; 
    padding: 15px;
  }

  .container-for-applicant {
    flex-direction: column; 
    gap: 40px;
  }

  .container-email, .container-phone {
    font-size: 18px; 
  }

  .container-email img, .container-phone img {
    width: 25px;
    height: 22px;
  }

  .container-phone h1 {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .text-header {
    font-size: 20px; 
    padding: 10px;
  }
  .container {
    padding: 10px;
  }
  .container-for-applicant {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px 0;
  }
  .container-email{
    order: 1;
    color: #00421D;
  }
  .container-email p{
    font-size: 20px; 
    text-align: center;
  }
  .container-phone ul{
    font-size: 16px; 
  }
  .container-email img, .container-phone img {
    width: 20px; 
    height: 18px;
  }
  .container-phone {
    gap: 10px;
    align-items: center;
  }
  .container-phone h1 {
    font-size: 20px;
    color: #00421D;
  }    
  .container-phone li  {
    width: 200px;
    color: #00421D;
  }
  .container-lk-abiturient-img img {
    max-width: 100%; 
  }
  .container-lk-abiturient-img  {
    max-width: 100px; 
  }

}
</style>