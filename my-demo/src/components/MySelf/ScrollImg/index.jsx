import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="carousel">
            <button onClick={prevSlide}>Prev</button>
            {images.map((image, index) => (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <img src={image} alt={`Slide ${index}`} />
                    )}
                </div>
            ))}
            <button onClick={nextSlide}>Next</button>
        </section>
    );
};

export default Carousel;
