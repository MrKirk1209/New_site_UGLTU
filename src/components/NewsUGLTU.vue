<template>
  <div class="news-container">
    <section class="news-section">
        <div class="news-header">
            <h2>Последние Новости</h2>
            <a href="#" class="all-news">Все Новости</a>
        </div>
        <div class="news-container">
            <div class="news-card">
                <h3>Поздравили КЛТ с 95-летием!</h3>
                <img src="/src/components/icons/img-1.png" alt="Поздравили КЛТ с 95-летием!" class="news-image">
                <p class="news-date">22.11.24</p>
            </div>
            <div class="news-card">
                <h3>Молодежное предпринимательство в УГЛТУ</h3>
                <img src="/src/components/icons/img-2.png" alt="Молодежное предпринимательство в УГЛТУ" class="news-image">
                <p class="news-date">22.11.24</p>
            </div>
            <div class="news-card">
                <h3>Дипломы выпускников ВШТТС попали в финал федерального конкурса</h3>
                <img src="/src/components/icons/img-3.png" alt="Дипломы выпускников ВШТТС" class="news-image">
                <p class="news-date">20.11.24</p>
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>
.news-container{
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
}

.news-section {
    width: 90%;
    max-width: 1100px;
    margin: 20px auto;
}

.news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.news-header h2 {
    font-size: 32px;
    color: #00421D;
    font-weight: 500;
}

.all-news {
    text-decoration: none;
    color: #00421D;
    font-weight: 500;
    transition: color 0.3s;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    font-size: 24px;
}

.all-news:hover {
    color: #1b5e20;
}

.news-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.news-card {
    background-color: #a3d5a9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
    height: 325px;
}

.news-card p {
  display: flex;
  justify-content: end;
  font-size: 20px;
  color:#00421D;
  padding: 0 10px;
}

.news-image {
    width: 280px;
    height: 200px;
    object-fit: cover;
}

.news-card h3 {
    font-size: 20px;
    height: 70px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    margin: 0;
    padding: 10px;
    color: #00421D;
    font-weight: 500; 
}

.news-date {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .news-container {
        justify-content: center;
    }
    .news-header{
        gap: 20px;
    }
    .news-card {
        width: 90%;
        height: auto;
    }

    .news-header {
        flex-direction: column;
        align-items: center;
    }

    .news-header h2 {
        font-size: 24px;
    }

    .all-news {
        font-size: 18px;
    }

    .news-card h3 {
        font-size: 16px;
    }

    .news-date {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .all-news   {
            order: -1;
            
    }
    .news-container {
        flex-direction: column;
    }

    .news-card {
        width: 100%;
        height: auto;
    }

    .news-header h2 {
        font-size: 20px;
        color: #00421D;
        font-weight: 500;
    }

    .all-news {
        font-size: 16px;
    }

    .news-card h3 {
        font-size: 14px;
        color: #00421D;
        font-weight: 600; 
    }
    .news-card p{
        font-size: 14px;
        color: #00421D;
        font-weight: 600; 
    }
}
</style>
