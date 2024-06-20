import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sliders = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
                <div className=" h-[700px] w-full">
                    <img src="/web-slider.jpg" alt="pizza" className="h-full w-full " />
                </div>
                <div className=" h-[700px] w-full">
                    <img src="/web-slider.jpg" alt="pizza" className="h-full w-full " />
                </div>
            </Carousel>
        </div>
    );
};

export default Sliders;