import React from "react";
import ImageProfile1 from "./../assets/dla.jpg";
import ImageProfile2 from "./../assets/kelas.jpg";
import ImageProfile3 from "./../assets/seminar1.jpg";
import ImageProfile4 from "./../assets/seminar2.jpg";
import ImageProfile5 from "./../assets/seminar3.jpg";
import "./../components/script";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            src: ImageProfile1,
            alt: "Slide 1",
            caption: "Darullughah",
        },
        {
            src: ImageProfile2,
            alt: "Slide 2",
            caption: "KBM",
        },
        {
            src: ImageProfile3,
            alt: "Slide 3",
            caption: "Seminar",
        },
        {
            src: ImageProfile4,
            alt: "Slide 3",
            caption: "Seminar",
        },
        {
            src: ImageProfile5,
            alt: "Slide 3",
            caption: "Seminar ",
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="profile-galeri py-5">
            <div className="text-center">
                <h1>Profile</h1>
                <p>PPQ Al Mahir</p>
            </div>
            <div className="d-flex gap-4 justify-content-center flex-wrap">
                <div className="carousel">
                    <button className="prev-button" onClick={handlePrev}>
                        &#8249;
                    </button>
                    <img
                        className="slide-image"
                        src={images[activeIndex].src}
                        alt={images[activeIndex].alt}
                    />
                    <div className="caption">{images[activeIndex].caption}</div>
                    <button className="next-button" onClick={handleNext}>
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
