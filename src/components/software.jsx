import { useEffect, useState, useRef } from "react";
import Line from "../../public/png/line.png";
import Soft from "../../public/png/soft.png";
import Onelog from "../../public/png/onelog.png";
import Twolog from "../../public/png/twolog.png";
import Threelog from "../../public/png/threelog.png";

function Software() {
    const [scrollValue, setScrollValue] = useState(0);
    const imageRefs = useRef([]);

    const handleScroll = () => {
        const currentScrollValue = window.scrollY || document.documentElement.scrollTop;
        setScrollValue(currentScrollValue);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollValue > 2400) {
            imageRefs.current.forEach((img) => {
                if (img) {
                    if (img.classList.contains('slide-in-left')) {
                        img.classList.add('slide-in-left-animate');
                    } else if (img.classList.contains('slide-in-right')) {
                        img.classList.add('slide-in-right-animate');
                    } else if (img.classList.contains('slide-in-up')) {
                        img.classList.add('slide-in-up-animate');
                    }
                }
            });
        }
    }, [scrollValue]);

    return (
        <>
            <div className="flex justify-center items-center gap-2 mt-8">
                <img src={Line} alt="" className="w-[50px]" />
                <img src={Soft} alt="" className="w-[25px] h-[25px]" />
                <img src={Line} alt="" className="w-[50px]" />
            </div>

            <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
                SOFTWARE'S <span className="text-customBlue-light font-medium"> WE USE</span>
            </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-6">
                <img
                    src={Onelog}
                    alt=""
                    className="mx-auto image-animatee slide-in-left"
                    ref={(el) => (imageRefs.current[0] = el)}
                />
                <img
                    src={Twolog}
                    alt=""
                    className="mx-auto image-animatee slide-in-up"
                    ref={(el) => (imageRefs.current[1] = el)}
                />
                <img
                    src={Threelog}
                    alt=""
                    className="mx-auto image-animatee slide-in-right"
                    ref={(el) => (imageRefs.current[2] = el)}
                />
            </div>
        </>
    );
}

export default Software;
