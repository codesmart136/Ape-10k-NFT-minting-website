import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
require('swiper/swiper.min.css');
require('swiper/modules/navigation/navigation.min.css');
require('swiper/modules/autoplay/autoplay.min.css');
import { Navigation, Autoplay } from "swiper";


function Mint() {
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        if(count <= 1) return;
        setCount(count - 1);
    }
    return(
        <section id="mint" className="mint">
            <div className="mint-slider">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay
                    loop
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src="/assets/img/slide.png" alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/img/slide.png" alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/img/slide.png" alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/img/slide.png" alt="slide" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="mint-main">
                <div className="mint-content">
                    <h1>PUBLIC MINT<br /><span>IS LIVE NOW<span><span></span></span></span></h1>
                    <div className="mint-content-sold">
                        <p style={{paddingBottom:"15px"}}>CYBORG WHITELIST: <span>SOLDOUT</span></p>
                     
                        <p style={{paddingBottom:"15px"}}>WHITELIST: <span>SOLDOUT</span></p>
                       
                    </div>
              
                    <h4  style={{marginBottom:"15px", fontSize:"10px"}}>Access to the WCC club with holder chat & roadmap benefits.</h4>
                    <div className="mint-content-main" style={{paddingTop:"15px", paddingBottom:"15px"}}>
                        <div>
                            <a onClick={decrease}>-</a>
                            <span>{count}</span>
                            <a onClick={increase}>+</a>
                        </div>
                        <button >MINT</button>
                        <p>0.1ETH</p>
                    </div>
                   
                    <div>
                        <h4>231 LEFT</h4>
                        <span className="connect"> Connect your wallet to start minting.</span>
                    </div>
                    
                    <hr></hr>
                   
                    <p className="connect-2">*Minting a minimum of 3 WCC's allow you one access to the WCC whales channel & mastermind with 8 figures crypto entrepreneurs.</p>
                </div>
            </div>
        </section>
    )
}

export default Mint