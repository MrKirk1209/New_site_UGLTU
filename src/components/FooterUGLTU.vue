<template>
  <div class="container">
    <section class="contacts">
      <h2>Контакты</h2>
      <p>Федеральное государственное бюджетное образовательное учреждение высшего образования</p>
      <strong>«Уральский государственный лесотехнический университет»</strong>
      <ul>
        <li> <img src="/src/components/icons/union.svg" alt="town"> г. Екатеринбург, ул. Сибирский тракт 37</li>
        <li> <img src="/src/components/icons/phone.svg" alt="phone"> 8 (343) 221-21-00</li>
        <li> <img src="/src/components/icons/message.svg" alt="email"> <a href="mailto:general@m.usfeu.ru">general@m.usfeu.ru</a></li>
        <li> <img src="/src/components/icons/message.svg" alt="email"> <a href="mailto:rector@m.usfeu.ru">rector@m.usfeu.ru</a></li>
        <li> <img src="/src/components/icons/info.svg" alt="info"> <a href="#">Сведения об образовательной организации</a></li>
        <li> <img src="/src/components/icons/union.svg" alt="union"> <a href="#">Реквизиты и схема расположения</a> </li>
      </ul>
    </section>

    <section class="admission">
      <h2>Приемная комиссия</h2>
      <ul>
        <li> <img src="/src/components/icons/union.svg" alt="town"> г. Екатеринбург, ул. Сибирский тракт 37</li>
        <li> <img src="/src/components/icons/phone.svg" alt="phone"> 8-800-350-61-10 (звонок бесплатный)</li>
        <li> <img src="/src/components/icons/phone.svg" alt="phone"> 8 (343) 221-21-00</li>
      </ul>
      <h2>Связаться с нами</h2>
      <ul>
        <li><a href="#">Прием обращений граждан</a></li>
        <li><a href="#">Анкета получателя услуг</a></li>
        <li><a href="#">Консультации по оказываемым услугам</a></li>
        <li><a href="#">Часто задаваемые вопросы</a></li>
      </ul>
    </section>

    <section class="menu">
      <h2>Меню</h2>
      <ul>
        <li><a href="#">Университет</a></li>
        <li><a href="#">Абитуриентам</a></li>
        <li><a href="#">Студентам</a></li>
        <li><a href="#">Аспирантам и Докторам</a></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1110px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  color: #003300;
  margin: 0 auto;
  padding: 40px 20px; 
}
.contacts{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
li{
  display: flex;
  align-items: center;
  gap: 10px;
}
img{
  width: 30px;
  height: 26px;
}

section {
  flex: 1 1 45%;
  margin: 10px;
}

h2 {
  text-decoration: underline;
  text-decoration-color: #003300;
  text-decoration-thickness: 2px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

a {
  color: #006400;
  text-decoration: none;
}
strong{
font-weight: bolder;
}
a:hover {
  text-decoration: underline;
}
@media (max-width: 480px) {

  .container {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .menu{  
    align-items: flex-start;
  }
  .container{
    display: block;
  }
}
</style>