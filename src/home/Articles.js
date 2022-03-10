import React from 'react';
import foto1 from '../assets/home-startup-blog-img-01.jpg'
import foto2 from '../assets/home-startup-blog-img-02.jpg'
import foto3 from '../assets/home-startup-blog-img-03.jpg'
import './Articles.css'
import { BsHeart, BsChatLeftText } from 'react-icons/bs'


function Articles(props) {
    return (
        <section className='padded bg-color'>
            <div className='container' >
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 col-md-10 text-center">
                        <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Latest blogs</span>
                        <h4 className="alt-font font-weight-600 text-extra-dark-gray d-inline-block">Attractive articles updated daily basis</h4>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card card-a">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small className='icons'>24 February 2022</small>
                                    </div>
                                    <div>
                                        <BsHeart className='icons'/>
                                        <BsChatLeftText className='icons'/>
                                    </div>
                                </div>
                                <img src={foto1} class="" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title iz">Recognizing the need is the primary condition design</h5>
                                    <p class="card-text iz">Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been dummy...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-a">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small className='icons'>24 February 2022</small>
                                    </div>
                                    <div>
                                        <BsHeart className='icons'/>
                                        <BsChatLeftText className='icons'/>
                                    </div>
                                </div>
                                <img src={foto2} class="" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title iz">Computers are to design as microwaves are to cooking</h5>
                                    <p class="card-text iz">Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been dummy...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-a">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small className='icons'>24 February 2022</small>
                                    </div>
                                    <div>
                                        <BsHeart className='icons'/>
                                        <BsChatLeftText className='icons'/>
                                    </div>
                                </div>
                                <img src={foto3} class="" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title iz">Fashion and interior design are one and the same</h5>
                                    <p class="card-text iz">Lorem ipsum is simply dummy text of printing and typesetting industry lorem ipsum been dummy...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;