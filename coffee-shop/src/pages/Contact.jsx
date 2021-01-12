import React, { useState } from 'react';
import "../css/contact.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
const Contact = () => {
    const { handleSubmit } = UseForm();
    return (
        <div className="contact-page">
            <div className="contact-us">
                <div className="contact-text">تماس با ما</div>
            </div>
            <div className="contact-wayes">
                <h3>با ما در تماس باشید!</h3>
                <div className="container">
                    <div className="phones col-md-2">
                        <PhoneIphoneIcon className="contact-icon" />
                        <h3>شماره تماس</h3>
                        <p>012345678</p>
                        <p>012345678</p>
                    </div>
                    <div className="addresses col-md-2">
                        <LocationOnIcon className="contact-icon" />
                        <h3>آدرس</h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                    </div>
                    <div className="our-email col-md-2">
                        <EmailIcon className="contact-icon" />
                        <h3>ایمیل ها</h3>
                        <p>info@gmail.com</p>
                        <p>info@gmail.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h4>ما منتظر پیشنهادات شما هستیم</h4>


                    <form onSubmit={handleSubmit}  >
                        <div className="inputBox user">
                            <input type="text" id="name" required />
                            <span>نام</span>
                        </div>

                        <div className="inputBox user">
                            <input type="text" id="lastName" required />
                            <span>نام خانوادگی</span>
                        </div>

                        <div className="inputBox user">
                            <input type="email" id="email" required />
                            <span>ایمیل</span>
                        </div>

                        <div className="inputBox message">
                            <textarea required></textarea>
                            <span>پیام</span>
                        </div>
                        <div className="inputBox user submitted">
                            <input required type="submit" className=" submit-btn" value="ارسال "
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
const UseForm = () => {
    const handleSubmit = (e) => {

        console.log(e.target[3].value);
        alert(e.target[0].value + "عزیز پیام شما با موفقیت ارسال شد " + "از توجه شما ممنونیم");

    }
    return { handleSubmit };
}
export default Contact;