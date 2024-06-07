import { IconBrandEtsy, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import React from 'react';
function FollowUs() {
  return (
    <div className="col-md-12 bg-dark text-secondary">
      <div className="container-xl p-3">
        <div className="row ">
          <div className="col-md-11 d-flex align-items-center justify-content-end px-4 pt-4">
            <div className="logo">
              <h2 className="mb-3 text-light">Follow Us On</h2>
              <ul className="list-unstyled list-inline mb-0">
                <li className="mb-3 list-inline-item">
                  <a href="#" className="text-decoration none text-secondary undrlne ">
                  <IconBrandFacebook/></a>
                </li>
                <li className="mb-3 list-inline-item">
                  <a href="#" className="text-decoration none text-secondary undrlne ">
                  <IconBrandInstagram/></a>
                </li>
                <li className="mb-3 list-inline-item">
                  <a href="#" className="text-decoration none text-secondary undrlne">
                  <IconBrandLinkedin/></a>
                </li>
                <li className="mb-3 list-inline-item">
                  <a href="#" className="text-decoration none text-secondary undrlne">
                  <IconBrandYoutube/></a>
                </li>
                <li className="mb-3 list-inline-item">
                  <a href="#" className="text-decoration none text-secondary undrlne">
                  <IconBrandEtsy/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
            <img
              src= "/assets/img/strahlenstudios1.png"
              width={110}
              height={100}
              alt="AIC"
             className='mb-1'
            />
              <a href="#" className="text-decoration-none text-light">support@Strahlenstudios.com</a>
              <p>(+92) 300 0000000<br />
                (+92) 336 0000000</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="logo">
              <h2 className="mb-3 text-light">Menu</h2>
              <ul className="list-unstyled">
                <li className="mb-3"><a href="home.html" className="text-decoration-none text-secondary undrlne hover-underline-animation">Home</a></li>
                <li className="mb-3"><a href="./shop/shop.html" className="text-decoration-none text-secondary undrlne hover-underline-animation">Shop</a></li>
                <li className="mb-3"><a href="./our-story/our-story.html" className="text-decoration-none text-secondary undrlne hover-underline-animation">Our Story</a></li>
                <li className="mb-3"><a href="./appointment/appointment.html" className="text-decoration-none text-secondary undrlne hover-underline-animation">Appointment</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
              <div class="logo">
                <h2 class="mb-3 text-light">Important Links</h2>
                <ul class="list-unstyled">
                  <li class="mb-3"><a href="./whishlist/whishlist.html" class="text-decoration-none text-secondary undrlne hover-underline-animation">Wishlist</a></li>
                  <li class="mb-3"><a href="privacy-policy/privacy-policy.html" class="text-decoration-none text-secondary undrlne hover-underline-animation">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo">
                <h2 class="mb-3 text-light">Our Story</h2>
                <p>Innovative, consistent and challenging, Furnit is reinventing the furniture industry by infusing
                  luxury and opulence with passion driven masterpieces.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
