<template>
  <section class="info-section">
      <h2 class="info-title">Наши партнеры</h2>
      <div class="info-container-1">
        <div class="info-card-1">
          <img src="/src/components/icons/sveza.png" alt="sveza">
        </div>
        <div class="info-card-1">
          <img src="/src/components/icons/ilim.png" alt="ilim">
        </div>
        <div class="info-card-1">
          <img src="/src/components/icons/minprom.png" alt="minprom">
        </div>
      </div>
      
      <div class="info-container-2">
        <div class="info-card">
          <img src="/src/components/icons/partner.png" alt="partner">
        </div>
        <div class="info-card">
          <img src="/src/components/icons/yralles.png" alt="yralles">
        </div>
        <div class="info-card">
          <img src="/src/components/icons/lesteh.png" alt="lesteh">
        </div>
      </div>
    </section>
</template>

<style scoped>
.info-section {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.info-title {
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

.info-container-1 {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
} 

.info-container-2 {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-around;
}
@media (max-width: 1024px) {
  .info-section{
    display: none;
  }
}
@media (max-width: 768px) {
  .info-section{
    display: none;
  }
}

@media (max-width: 480px) {
  .info-section{
    display: none;
  }
}

</style>
