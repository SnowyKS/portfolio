import React from 'react';
import photo from './shutterstock_1536573392-min.jpg'
import './Home.css'
const Home = () => {
    return (
       <>
       <div className='home'>
        <h1 className='home_title'> Вальков Артем</h1>
        <p className='home_descr'>Мне 17 лет, Вологда, WEB-разработчик</p>
        <img className='home_photo' src={photo} alt="photo" />
       </div>
       </>
    );
}

export default Home;
