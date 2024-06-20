import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Multiarousal = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                responsive={responsive}
                swipeable={true}
            >
                {/* <div className="flex "> */}

                <div className=" h-[150px]  ">
                    <img src="/annapurna.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/chandragire.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/gangalal.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/sipradi.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/gokarna.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/raddition.jpg" alt="pizza" className="h-full  " />
                </div>
                <div className=" h-[150px] ">
                    <img src="/soltae.jpg" alt="pizza" className="h-full  " />
                </div>
                {/* </div> */}
            </Carousel>
        </div>
    );
};

export default Multiarousal;