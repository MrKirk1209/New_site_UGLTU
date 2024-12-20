<template>
  <section class="helpful-section">
      <h2 class="helpful-title">Полезная информация</h2>
      <div class="helpful-container">
        <div class="helpful-card">
          <img src="/src/components/icons/avtoshkola.png" alt="Автошкола">
        </div>
        <div class="helpful-card">
          <img src="/src/components/icons/ido.png" alt="Институт дополнительного образования">
        </div>
        <div class="helpful-card">
          <img src="/src/components/icons/seedlings.png" alt="Купить саженцы">
        </div>
        <div class="helpful-card">
          <img src="/src/components/icons/peschanoe.png" alt="Отдохнуть на о. Песчаное">
        </div>
        <div class="helpful-card">
          <img src="/src/components/icons/tsso.png" alt="Центр сопровождения обучающихся">
        </div>
        <div class="helpful-card">
          <img src="/src/components/icons/tsentr.png" alt="Центр содействия трудоустройству студентов и выпускников">
        </div>
      </div>
    </section>
</template>

<style scoped>
.helpful-section {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.helpful-title {
    font-size: 32px;
    color: #00421D;
    font-weight: 500;
    text-decoration-color: #003300;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
}

.helpful-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
}

.helpful-card {
  width: calc(33.333% - 15px); /* Три карточки в ряд */
}

.helpful-card img {
  width: 350px;
  height: 117px;
}
@media (max-width: 1024px) {
  .helpful-section{
    display: none;
  }
}
@media (max-width: 768px) {
  .helpful-section{
    display: none;
  }
}

@media (max-width: 480px) {
  .helpful-section{
    display: none;
  }
}
</style>
