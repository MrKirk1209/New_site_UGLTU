<template>
  <div id="app" class="container">
    <div class="cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card">
      <h3 class="card-title">{{ card.title }}</h3>
        <div class="card-image"><img src="/src/components/icons/image_forest.png" alt="image_forest"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cards: [
        { title: "Уральский лесотехнический колледж" },
        { title: "Бакалавриат и Специалитет" },
        { title: "Магистратура" },
        { title: "Аспирантура" },
        { title: "Контакты и график работы" },
        { title: "План приема" },
        { title: "Нормативные документы" },
        { title: "Целевой прием" },
        { title: "Дополнительные баллы" },
        { title: "Сведения о зачислении" },
        { title: "Калькулятор абитуриента" },
        { title: "Подготовительные курсы" },
        { title: "Об университете" },
        { title: "Мы в соцсетях" },
        { title: "Как поступать, чтобы поступить" },
        { title: "Иностранным студентам" },
        { title: "Выпускникам колледжей" },
        { title: "Стоимость обучения по договору" },
        { title: "Часто задаваемые вопросы (FAQ)" },
      ],
    };
  },
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  max-width: 1110px;
  margin: 0 auto;
  padding: 20px;
}


.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.card {
  background-color: #99D5A8;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 255px;
  height: 260px;
  border-top-left-radius: 20px;    
  border-top-right-radius: 20px;   
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px;
}

.card:hover {
  transform: scale(1.05);
}

.card-image img {
  border-top-left-radius: 0px;    
  border-top-right-radius: 0px;   
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px; 
}
.card-title {
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  width: 250px;
  height: 100px;
  font-size: 24px;
  color: #00421D;
  margin: 0;
}



@media (max-width: 786px) {
  .cards-container {
    display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  }

  .card {
    width: 100%; 
    height: auto; 
  }

  .card-title {
    font-size: 20px; 
    height: auto; 
  }

  .card-image img {
    width: 100%;
    height: auto; 
  }
}

@media (max-width: 480px) {

  .cards-container {
    display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  }

  .card {
    width: 130px;
    height: 130px;
  }

  .card-title {
    font-size: 12px;
    width: 130px;
    height: 50px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    font-weight: bolder;
  }

  .card-image img {
    width: 100%;
    height: auto; 
  }

}
</style>