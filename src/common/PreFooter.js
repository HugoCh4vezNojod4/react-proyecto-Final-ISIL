import React from 'react';
import './PreFooter.css';

function PreFooter(props) {
    return (
        <section className="padded">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 col-md-10 text-center">
                        <span className="alt-font font-weight-500 text-green text-extra-medium d-block margin-20px-bottom sm-margin-10px-bottom">Love to work together</span>
                        <h4 className="alt-font font-weight-600 text-extra-dark-gray d-inline-block">Are you ready to work with us? Let's grow your business.</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 col-md-9 text-center">
                        <div className="newsletter-style-04 position-relative d-inline-block w-80 alt-font margin-3-rem-top md-w-100 sm-margin-15px-top">
                            <form action="email-templates/subscribe-newsletter.php" method="post">
                                <input className="input main-font box-shadow border-radius-6px large-input border-all border-color-transparent no-margin required" name="email" placeholder="Enter your email address" type="email"/>
                                <input type="hidden" name="redirect" value=""/>
                                <button className="btn-sus" type="submit">Subscribe now</button>
                                <div className="form-results border-radius-6px position-absolute d-none lg-line-height-normal lg-margin-10px-top"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreFooter;