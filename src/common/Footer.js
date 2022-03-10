import React from 'react';
import foto1 from '../assets/logo-green-dark.png'

function Footer(props) {
    return (
    <footer class="container pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
          <h5>Company</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">About company</a></li>
              <li><a class="text-muted" href="#">Our services</a></li>
              <li><a class="text-muted" href="#">Job Opportunities</a></li>
              <li><a class="text-muted" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Customer</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Client support</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Services</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between">
            <div>
                <img className='' src={foto1} alt="" /> 
            </div>
            <div>
                <small className=''>© 2022 Litho is Proudly Powered by Mauricio Torres</small>
            </div>
        </div>
    </footer>
    );
}

export default Footer;