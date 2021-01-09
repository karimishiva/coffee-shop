import React, { useEffect } from 'react';
import '../css/home.css';
import Aos from 'aos';
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="home">
            {/* landing */}
            <div className="landing">
                <div className="text">
                    <h2>به کافی شاپ خوش آمدید</h2>
                    <h3>زندگی کوتاه است ، به خاطرش بیدار بمانید.</h3>
                    <a href="#location" className="btn ">نزدیک ترین لوکیشن</a>
                </div>
            </div>

            {/* type of product */}
            <div className="products">


                <h3>دسته بندی محصولات</h3>
                <div className="row">
                    <div data-aos="fade-left" className="coffee col-md-4">
                        <div className="overlay">
                            <a href="#" className="btn">قهوه ها</a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="tea col-md-4">
                        <div className="overlay">
                            <a href="#" className="btn">چای ها</a>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="cake col-md-4">
                        <div className="overlay">
                            <a href="#" className="btn">کیک ها</a>
                        </div>
                    </div>

                </div>

            </div>
            {/* location */}
            <div className="location" id="location" >
                <div data-aos="fade-up" className="location" >

                    <div className="locations">
                        <div className="location-1 col-md-6"></div>
                        <div className="location-1-text col-md-6">
                            <h3>شعبه ونک</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
                        </div>
                        <div className="location-2-text col-md-6">
                            <h3>شعبه میدان ولیعصر</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>

                        </div>
                        <div className="location-2 col-md-6"></div>
                    </div>
                </div>
            </div>
            {/* blog */}
            <div className="container">

                <div className="blog">
                    <h3>آخرین پست ها</h3>
                    <div data-aos="fade-left" className="squere">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="content">
                            <h2>عنوان پست</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد </p>
                            <a href="#">بیشتر</a>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="squere">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="content">
                            <h2>عنوان پست</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد </p>
                            <a href="#">بیشتر</a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}
export default Home;