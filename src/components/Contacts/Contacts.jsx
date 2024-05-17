import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Contacts.css'
import emailjs from '@emailjs/browser';

const Contacts = () => {


    const [success, setSuccess] = useState(false);
    const[fail, setFail] = useState(false);

    function sendEmail(even){
        // отключить перезагрузку страницы
        even.preventDefault();
        //console.log(form.current);
        emailjs
      .sendForm('service_yqxfion', 'template_qdwb99z', form.current, {
        publicKey: 'XPwRfkh-rfcKQht15',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFail(true);
        },
      );
    }

    const form =  useRef();



    return (
        <>
        <div className="contacts">
            <h1 className='contacts_title'>Напиши мне</h1>

            <form ref = {form} onSubmit={sendEmail} action="#">
                <div className='email'>
                    <label className='email_txt' htmlFor="">Введите вашу почту</label>
                    <input name='email' className='email_inp form-control' type="email" placeholder='test@gmail.com' required />
                </div>

                <div className='massage'>
                    <label className='massage_txt' htmlFor="">Введите ваше сообщение</label>
                    <textarea name='massage' className='massage_inp form-control'></textarea>
                </div>

                <button className='btn btn btn-primary d-inline-flex align-items-center btn btn-secondary rounded-pill px-3' type='submit'>Отправить</button>
            </form>

            { success && (<p>Сообщение успешно отправлено</p>)}
            { fail && (<p>Произошла ошибка</p>)}
             
        </div>
        </>
    );
}

export default Contacts;
