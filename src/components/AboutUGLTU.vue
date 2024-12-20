<template>
  <div class="container">
  <div class="container-buttons">
    <button>Сведения об образовательной организации</button>
    <button>Разрешительные документы для осуществления уставной деятельности</button>
    <button>Программы развития университета</button>
    <button>УГЛТУ в рейтингах</button>

    <button>История университета</button>
    <button>Противодействие коррупции</button>
    <button>Персональные данные</button>
    <button>Противодействие терроризму и экстремизму</button>

    <button>Попечительский совет</button>
    <button>Фирменная символика</button>
    <button>Новости</button>
    <button>Контакты и реквизиты</button>

    <button>Календарь событий</button>
    <button>Ассоциация выпускников УЛТИ-УГЛТА-УГЛТУ</button>
    <button>Купить продукцию УГЛТУ</button>
    <button>Поиск по сайту</button>

    <button>Ассоциация выпускников УЛТИ-УГЛТА-УГЛТУ</button>
    <button>Купить продукцию УГЛТУ</button>
    <button>Поиск по сайту</button>
  </div>
  <div class="container-text-baner">
  <div class="baner-container">
    <div class="baner-img">
    <img src="/src/components/icons/baner-2.png" alt="baner" class="baner-main">
    <img src="/src/components/icons/arrow-left.svg" alt="arrow-left" class="arrow-left">
    <img src="/src/components/icons/arrow-right.svg" alt="arrow-right" class="arrow-right">
    <img src="/src/components/icons/line-2.svg" alt="line" class="line-2">
    </div>
  </div>
        <div class="container-text">
  <h1>Основными структурными подразделениями университета являются:</h1>
  <ul>
    <li>Институты, кафедры;</li>
    <li>Уральский Лесотехнический Колледж;</li>
    <li>Аспирантура и докторантура;</li>
    <li>Уральский учебно­-опытный лесхоз;</li>
    <li>Уральский сад лечебных культур им. Л.И. Вигорова;</li>
    <li>Научная библиотека и университетская информационно-образовательная сеть;</li>
    <li>Управление нового приема;</li>
  </ul>
        </div>
            <div class="container-phone-director-intelligence">
                  <div class="container-phone">
              <h1>КОНТАКТЫ</h1>
              <ul>
              <li><img src="/src/components/icons/phone.svg" alt="phone">+7 (343) 221-21-00,  (приемная ректора)</li>
              <li><img src="/src/components/icons/phone.svg" alt="phone">221-22-00  (приемная комиссия)</li>
              <li><img src="/src/components/icons/phone.svg" alt="phone">8-800-350-61-10(горячая линия для абитуриентов)</li>
              </ul>
                  </div>
                  <div class="container-director">
              <h1>РУКОВОДСТВО</h1>
              <p>Ректор университета - Платонов Евгений Петрович,кандидат сельскохозяйственных наук,доцент.</p>
                  </div>
                  <div class="container-intelligence">
              <h1>СВЕДЕНИЯ ОБ УЧРЕДИТЕЛЕ</h1>
              <p>Функции и полномочия учредителя Университета осуществляет Министерство науки и высшего образования Российской Федерации. </p>
                </div>
          </div>
          <div class="container-history">
            <div class="history">
              <h1>ИСТОРИЯ УГЛТУ</h1>
              Уральский государственный лесотехнический институт (ныне университет) был создан приказом ВСНХ СССР от 5 мая 1930 года.
              Эта дата считается днем рождения вуза. За заслуги в учебной, научной работе, в организации труда, быта и отдыха студентов в 1978 году вузу было присвоено почетное звание имени Ленинского комсомола, а в 1980 году его наградили орденом Трудового Красного Знамени.<br>
              В 1993 году в результате проведенной государственной аттестации вуз преобразовали в Уральскую государственную лесотехническую академию,а в 2001 году он получил высокий статус университета.
              Коллектив вуза большое внимание уделяет сохранению истории вуза. Здесь помнят всех тех, кто в годы Великой Отечественной войны защищал нашу страну, среди них Герой Советского Союза Антон Антонович Шевелёв.
              Студент УЛТИ Юрий Исламов – Герой Советского Союза, награжден посмертно, погиб при исполнении интернационального долга в Афганистане. Муранов Анатолий Николаевич – выпускник УЛТИ, смертельно ранен во время спецоперации по захвату здания МВД Афганистана (Царандоя), посмертно награжден орденом Красного Знамени.<br> 
              Университету везло на талантливых людей, про которых с уверенностью можно сказать - они изменили мир. Среди них министр лесной и целлюлозно-бумажной и деревообрабатывающей промышленности СССР Михаил Иванович Бусыгин, при котором лесная отрасль страны ставила экономические рекорды.
              Это основатель первого сада лечебных культур профессор Леонид Иванович Вигоров, который был советским основоположником учения о природных биодобавках.  Это и Виктор Михайлович Глушков, по сути, являющийся отцом русской кибернетики. И это далеко не весь список лестеховцев, которыми наш вуз гордится. 
            </div>
          </div>
  </div>
  </div> 
</template>

<style scoped>
.container {
  max-width: 1110px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto; 

}
.container-buttons{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.container-text-baner{
  display: flex;
  align-items: center;
  flex-direction: column;
}
button{
  width: 250px; 
  height: 65px;
  border-radius: 5px;
  color: #003300;
  font-family: 'Roboto', sans-serif;
  background-color: #a3d5a9; 
  font-size: 16px;

}

.baner-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
.baner-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}
.baner-main {
  width: 100%; 
  height: auto;
}

.arrow-left{
  position: absolute; 
  left: 30px;
  bottom: 10px;
  width: 30px;
  height: 30px;
 
}
.arrow-right{
  position: absolute; 
  left: 80px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  
}
.line-2{
  position: absolute; 
  left: 320px;
  bottom: 5px;
  width: 200px;
  
}
.container-text{
  max-width: 825px;
}
.container-text h1{
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  text-align: center;
  margin: 0 auto;
  color: #00421D;
  padding: 20px;
}
.container-text ul{
    display: flex;
    flex-direction: column; 
    align-self: start;
    padding: 0 20px;
}
.container-text li{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #00421D;
  font-weight: 500; 
  
}
.container-text ul li::marker {
  color: #00421D;
}
.container-phone-director-intelligence{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 825px;
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #00421D;
}
.container-phone{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 280px;
  max-height: 140px;
  gap: 20px;
  
}
.container-phone li{
  display: flex;
}
.container-phone ul{
  list-style-type: none;
}
.container-director{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 280px;
  max-height: 140px;
  gap: 20px;
}
.container-director p{
  padding: 0 40px;
}
.container-intelligence{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 280px;
  max-height: 140px;
  gap: 20px;
  
}
.container-phone-director-intelligence img{
  width: 30px;
  height: 26px;
}
.container-phone-director-intelligence p{
  text-align:justify;
}
.container-history{
  max-width: 825px;
}
.container-history h1{
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  text-align: center;
  margin: 0 auto;
  color: #00421D;
  padding: 20px;
}
.container-history div{
  display: flex;
  justify-content: center;
  text-align:justify;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #00421D;
}
@media (max-width: 1024px) {
  .arrow-left,
  .arrow-right {
    display: none;
  }

  .line-2 {
    display: none; 
  }
}
@media (max-width: 768px) {
  .container-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-text-baner {
    flex-direction: column;
  }

  button {
    width: 90%; 
    font-size: 14px; 
  }

  .container-phone-director-intelligence {
    flex-direction: column;
    gap: 20px;
  }

  .container-text ul {
    padding: 0;
    font-size: 14px;
  }

  .container-history h1,
  .container-text h1 {
    font-size: 24px;
  }

  .baner-main {
    width: 100%;
    height: auto;
  }

  .arrow-left,
  .arrow-right {
    display: none;
  }

  .line-2 {
    display: none; 
  }

}


@media (max-width: 480px) {
  .container {
    padding: 0 10px; 
    flex-direction: column;
    align-items: center;
  }

  .container-buttons {
    order: 1;
  }

  button {
    width: 100%; 
    font-size: 14px;
    padding: 10px;
  }

  .baner-main {
    width: 100%; 
    height: auto;
  }

  .arrow-left,
  .arrow-right {
    display: none;
  }

  .line-2 {
    display: none;
  }

  .container-text h1 {
    font-size: 18px; 
    text-align: center;
  }

  .container-text ul {

    padding: 0 20px; 
    font-size: 12px; 
  }

  .container-phone-director-intelligence {
    flex-direction: column;
    gap: 10px; 
  }

  .container-phone ul {
    font-size: 12px; 
  }

  .container-phone li img {
    width: 20px; 
    height: 20px;
  }
  .container-phone li {
    font-size: 16px;
  }


  .container-history h1 {
    font-size: 20px; 
    text-align: center;
  }

  .container-history div {
    display: none;
  }
  .container-intelligence{
    display: none;
  }
  .container-director{
    display: none;
  }
}
</style>