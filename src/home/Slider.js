import React from 'react';
import foto1 from '../assets/home-startup-slider-bg-01.jpg'
import foto2 from '../assets/home-startup-slider-bg-02.jpg'
import foto3 from '../assets/home-startup-slider-bg-03.jpg'

function Slider(props) {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={foto1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={foto2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={foto3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;