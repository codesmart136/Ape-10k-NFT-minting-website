import react from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react/cjs/react.development";

function Faq() {

    const mouseEnter = (e) => {
        if (e.target.classList.contains('faq-card')) {
            if (!e.target.classList.contains('show')) e.target.classList.add('show')
            if (!e.target.lastElementChild.style.height) e.target.lastElementChild.style.height = e.target.lastElementChild.scrollHeight + 'px';
        }
        else if (e.target.parentElement.classList.contains('faq-card')) {
            if (!e.target.parentElement.classList.contains('show')) e.target.classList.add('show')
            if (!e.target.parentElement.lastElementChild.style.height) e.target.lastElementChild.style.height = e.target.lastElementChild.scrollHeight + 'px';
        }
        else {
            if (!e.target.parentElement.parentElement.classList.contains('show')) e.target.classList.add('show')
            if (!e.target.parentElement.parentElement.lastElementChild.style.height) e.target.lastElementChild.style.height = e.target.lastElementChild.scrollHeight + 'px';
        }
    }

    const mouseLeave = (e) => {
        if (e.target.classList.contains('faq-card')) {
            if (e.target.classList.contains('show')) e.target.classList.remove('show')
            if (e.target.lastElementChild.style.height) e.target.lastElementChild.style.height = null;
        }
        else if (e.target.parentElement.classList.contains('faq-card')) {
            if (e.target.parentElement.classList.contains('show')) e.target.classList.remove('show')
            if (e.target.parentElement.lastElementChild.style.height) e.target.lastElementChild.style.height = null;
        }
        else {
            if (e.target.parentElement.parentElement.classList.contains('show')) e.target.classList.remove('show')
            if (e.target.parentElement.parentElement.lastElementChild.style.height) e.target.lastElementChild.style.height = null;
        }
    }

    return(
        <section id="faq" className="faq">
            <h3>FAQS</h3>
            <h2>Questions You<br /><span>Might Have</span></h2>
            <div className="container">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={3}
                    loop
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="faq-card" onMouseEnter={(e)=>mouseEnter(e)} onMouseLeave={(e)=>mouseLeave(e)}>
                            <h3>HOW MANY CAN WE MINT PER WALLET</h3>
                            <div><p>WCC stands for Wealth Cyborg Club, a group of enthusiasts who have acquired one or more NFTs among the 10'000 in the collection.</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="faq-card" onMouseEnter={(e)=>mouseEnter(e)} onMouseLeave={(e)=>mouseLeave(e)}>
                            <h3>HOW MANY CAN WE MINT PER WALLET</h3>
                            <div><p>WCC stands for Wealth Cyborg Club, a group of enthusiasts who have acquired one or more NFTs among the 10'000 in the collection.</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="faq-card" onMouseEnter={(e)=>mouseEnter(e)} onMouseLeave={(e)=>mouseLeave(e)}>
                            <h3>HOW MANY CAN WE MINT PER WALLET</h3>
                            <div><p>WCC stands for Wealth Cyborg Club, a group of enthusiasts who have acquired one or more NFTs among the 10'000 in the collection.</p></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="faq-card" onMouseEnter={(e)=>mouseEnter(e)} onMouseLeave={(e)=>mouseLeave(e)}>
                            <h3>HOW MANY CAN WE MINT PER WALLET</h3>
                            <div><p>WCC stands for Wealth Cyborg Club, a group of enthusiasts who have acquired one or more NFTs among the 10'000 in the collection.</p></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </section>
    )
}

export default Faq