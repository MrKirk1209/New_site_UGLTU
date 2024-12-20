<template>
  <div class="baner-container">
    <div class="baner-img">
    <img src="/src/components/icons/baner.png" alt="baner" class="baner-main">
    <img src="/src/components/icons/arrow-left.svg" alt="arrow-left" class="arrow-left">
    <img src="/src/components/icons/arrow-right.svg" alt="arrow-right" class="arrow-right">
    <img src="/src/components/icons/line.svg" alt="line" class="line">
    </div>
  </div>
</template>

<style scoped>
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
  padding: 40px 20px;
  gap: 10px;
}
.baner-main {
  width: 100%; 
  max-width: 1110px;
  height: auto;
}
.arrow-left{
  position: absolute; 
  left: 30px;
  bottom: 50px;
  width: 30px;
  height: 30px;
 
}
.arrow-right{
  position: absolute; 
  left: 80px;
  bottom: 50px;
  width: 30px;
  height: 30px;
  
}
.line{
  position: absolute; 
  left: 450px;
  bottom: 50px;
  width: 200px;
  
}
@media (max-width: 1024px) {
  .arrow-left, .arrow-right {
    display: none;
  }

  .line {
  display: none;
  }
}

@media (max-width: 768px) {
  .baner-img {
    padding: 20px 10px;
  }

  .arrow-left, .arrow-right {
    display: none;
  }

  .line {
  display: none;
  }
}


@media (max-width: 480px) {
  .baner-img {
    flex-direction: column; 
    gap: 5px;
  }

  .arrow-left {
    display: none;
  }

  .arrow-right {
    display: none;
  }

  .line {
    display: none;  
  }
}
</style>
