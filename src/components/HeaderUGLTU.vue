<template>
  <div class="header-container">
    <div class="header">
      <div class="logo">
          <img src="/src/components/icons/logo_ugltu.png" alt="УГЛТУ Логотип" class="logo" v-on:click="this.$router.push('/')">
      </div>

      <div class="container-nav">
          <div class="extra-options">
        <div class="burger"><img src="/src/components/icons/burger.svg" alt="burger" class="burger"></div>
        <div class="citizen"><img src="/src/components/icons/info.svg" alt="info" class="info">For a foreign citizen</div>
        <div class="search"><img src="/src/components/icons/search.svg" alt="search" class="search"></div>
        <div class="eye"><img src="/src/components/icons/eye.svg" alt="eye" class="eye"></div>
        <div class="lang">EN</div>
        <div class="eios"><img src="/src/components/icons/eios.svg" alt="eios" class="eios-img">ЭИОС</div>
        <div class="login"><img src="/src/components/icons/login.svg" alt="login" class="login"></div>
          </div>
            <div class="nav-menu">
        <a href="#" v-on:click="this.$router.push('/University')">Университет</a>
        <a href="#" v-on:click="this.$router.push('/Аpplicant')">Абитуриентам</a>
        <a href="#">Студентам</a>
        <a href="#">Аспирантам и Докторантам</a>
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0; 
  width: 100%;
  background-color: #a3d5a9;
  color: #003300;
  z-index: 1000; 
  font-family: 'Roboto', sans-serif;


}

.header {
  display: flex;
  align-items: center;
  max-width: 1440px; 
  margin: 0 auto; 
  padding: 10px 20px;
  gap: 100px;

}
.burger{
  display: none;
}
.info{
  width: 30px;
  height: 26px;
}
.search{
  width: 30px;
  height: 26px;
}
.eye{
  width: 30px;
  height: 26px;
}
.eios-img{
  width: 30px;
  height: 26px;
}
.login{
  width: 30px;
  height: 26px;
}
.logo {
  display: flex;
  align-items: center;
}
.eios{
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.eye{
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.citizen {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.lang {
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
}
.extra-options {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.container-nav {  
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 30px;
  align-items: end;
}


.nav-menu a {
  margin: 0 10px;
  color: #003300;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-weight: bold;
}

.nav-menu a:hover {
  text-decoration: underline;
}

.extra-options{
  font-size: 20px;
}

@media (max-width: 768px) {
  .logo{
    display: none;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .extra-options {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .nav-menu {
    flex-direction: column;
    gap: 10px;
  }

  .nav-menu a {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .burger{
    display: block;
  }
  .logo {
    display: block;
    margin: auto;
    width: 240px;
    height: 60px;
  }
  .citizen{
    order: 2;
    margin: auto;
  }
  .extra-options img {
    width: 30px;
    height: 26px;
    gap: 10px;
    font-size: 16px;
  }    
  .extra-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-menu {
    display: none;
  }

}
</style>
