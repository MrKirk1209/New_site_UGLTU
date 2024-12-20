<template>
  <div class="container">
    <button>Расписание занятий</button>
    <button>ЭИОС</button>
    <button>Олимпиады</button>
    <button>Техподдержка ЭИОС</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 1110px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 0 auto; 

}
button{
  width: 190px; 
  height: 70px;
  border-radius: 5px;
  color: #003300;
  font-family: 'Roboto', sans-serif;
  background-color: #a3d5a9; 
  font-size: 20px;
}
@media (max-width: 768px) {
  .container {
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 15px;
  }

  button {
    width: 160px;
    height: 60px;
    font-size: 18px;
  }
}


@media (max-width: 480px) {
  .container {

    align-items: center; 
    gap: 10px;
    flex-wrap: wrap;
  }

  button {
    width: 90%; 
    max-width: 130px; 
    height: 50px;
    font-size: 16px;
  }
}
</style>