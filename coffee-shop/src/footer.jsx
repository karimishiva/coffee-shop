import React from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="navigation">
                    <h3>منوی اصلی</h3>
                    <ul>
                        <li><a href="#">خانه</a></li>
                        <li><a href="#">قهوه ها</a></li>
                        <li><a href="#">چای ها</a></li>
                        <li><a href="#">کیک ها</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                    </ul>
                </div>
                <div className="our_address">
                    <h3>آدرس شعب</h3>
                    <ul>
                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </li>
                        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </li>
                    </ul>
                </div>
                <div className="hours">
                    <h3>ساعات کاری</h3>
                    <ul>
                        <li>روز ها عادی 7:00 الی 23:00</li>
                        <li>روز تعطیل 8:00 الی 23:30</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faInstagram} /></a></li>

                        <li><a href="#">
                            <FontAwesomeIcon icon={faPinterest} /></a></li>
                        <li><a href="#">
                            <FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p> &copy;تمامی حقوق مادی و معنوی این سایت برای کافه ... محفوظ است.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;