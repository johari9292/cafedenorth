import React from 'react';

  const App =()=>{
    return (
      <div>
      <header>
        <div className="container">
          <a className="logo" href="#"><img src="images/denorth.jpeg" alt="Logo" /></a>
          <div className="right-area">
            <h6><a className="plr-20 color-white btn-fill-primary" href="#">ORDER: +343 8160801</a></h6>
          </div>
          <a className="menu-nav-icon" data-menu="#main-menu" href="#"><i className="ion-navicon" /></a>
          <ul className="main-menu font-mountainsre" id="main-menu">
            <li><a href="index-2.html">HOME</a></li>
            <li><a href="02_about_us.html">ABOUT US</a></li>
            <li><a href="03_menu.html">SERVICES</a></li>
            
            <li><a href="05_contact.html">CONTACT</a></li>
          </ul>
          <div className="clearfix" />
        </div>
      </header>
      <section className="bg-1 h-900x main-slider pos-relative">
        <div className="triangle-up pos-bottom" />
        <div className="container h-100">
          <div className="dplay-tbl">
            <div className="dplay-tbl-cell center-text color-white">
              <h5><b>BEST IN TOWN</b></h5>
              <h1 className="mt-30 mb-15">CAFE DE NORTH</h1>
              <h5><a href="03_menu.html" className="btn-primaryc plr-25"><b>SEE MENU</b></a></h5>
            </div>
          </div>
        </div>
      </section>
      <section className="story-area left-text center-sm-text pos-relative">
        <div className="abs-tbl bg-2 w-20 z--1 dplay-md-none" />
        <div className="abs-tbr bg-3 w-20 z--1 dplay-md-none" />
        <div className="container">
          <div className="heading">
            <img className="heading-img" src="images/heading_logo.png" alt="" />
            <h2>Our Story</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="mb-30">Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                platea dictumst. Morbi maximus
                lobortis ipsum, ut blandit augue ullamcorper vitae.
                Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                massa. Morbi tellus
                tortor, luctus et lacinia non, tincidunt in lacus.
                Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id
                dapibus dolor, ac
                cursus nulla. </p>
            </div>
            <div className="col-md-6">
              <p className="mb-30">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea
                dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                pibus dolor, accursus nulla. </p>
            </div>
          </div>
        </div>
      </section>
      <section className="story-area bg-seller color-white pos-relative">
        <div className="pos-bottom triangle-up" />
        <div className="pos-top triangle-bottom" />
        <div className="container">
          <div className="heading">
            <img className="heading-img" src="images/heading_logo.png" alt="" />
            <h2>Best Sellers</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative">
                  <h6 className="ribbon-cont"><div className="ribbon primary" /><b>OFFER</b></h6>
                  <img src="images/seller-2-200x200.png" alt="" />
                </div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative">
                  <h6 className="ribbon-cont"><div className="ribbon secondary" /><b>SPECIALITY</b></h6>
                  <img src="images/seller-2-200x200.png" alt="" />
                </div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative">
                  <h6 className="ribbon-cont"><div className="ribbon primary" /><b>OFFER</b></h6>
                  <img src="images/seller-2-200x200.png" alt="" />
                </div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative">
                  <h6 className="ribbon-cont color-black"><div className="ribbon white" /><b>PLUS SIZE</b></h6>
                  <img src="images/seller-2-200x200.png" alt="" />
                </div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 ">
              <div className="center-text mb-30">
                <div className="ïmg-200x mlr-auto pos-relative"><img src="images/seller-2-200x200.png" alt="" /></div>
                <h5 className="mt-20">Pizza Margherita</h5>
                <h4 className="mt-5"><b>$11.90</b></h4>
                <h6 className="mt-20"><a href="#" className="btn-brdr-primary plr-25"><b>Order Now</b></a></h6>
              </div>
            </div>
          </div>
          <h6 className="center-text mt-40 mt-sm-20 mb-30"><a href="#" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="heading">
            <img className="heading-img" src="images/heading_logo.png" alt="" />
            <h2>Our Menu</h2>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="selecton brdr-b-primary mb-70">
                <li><a className="active" href="#" data-select="*"><b>ALL</b></a></li>
                <li><a href="#" data-select="pizza"><b>PIZZA</b></a></li>
                <li><a href="#" data-select="pasta"><b>PASTA</b></a></li>
                <li><a href="#" data-select="salads"><b>SALADS</b></a></li>
                <li><a href="#" data-select="deserts"><b>DESERTS</b></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 food-menu pizza">
              <div className="sided-90x mb-30 ">
                <div className="s-left"><img className="br-3" src="images/menu-1-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Pizza Margherita</b><b className="color-primary float-right">$12.00</b></h5>
                  <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu pizza pasta">
              <div className="sided-90x mb-30 ">
                <div className="s-left"><img className="br-3" src="images/menu-2-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Italian pasta</b><b className="color-primary float-right">$20.00</b></h5>
                  <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu pasta">
              <div className="sided-90x mb-30 ">
                <div className="s-left"><img className="br-3" src="images/menu-3-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Pizza Prosciuto</b><b className="color-primary float-right">$12.00</b></h5>
                  <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu salads">
              <div className="sided-90x mb-30">
                <div className="s-left"><img className="br-3" src="images/menu-4-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Broschettas</b><b className="color-primary float-right">$6.00</b></h5>
                  <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu deserts">
              <div className="sided-90x mb-30">
                <div className="s-left"><img className="br-3" src="images/menu-5-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Pizza Margherita</b><b className="color-primary float-right">$12.00</b></h5>
                  <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu pizza">
              <div className="sided-90x mb-30 ">
                <div className="s-left"><img className="br-3" src="images/menu-6-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Italian pasta</b><b className="color-primary float-right">$20.00</b></h5>
                  <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu deserts">
              <div className="sided-90x mb-30">
                <div className="s-left"><img className="br-3" src="images/menu-7-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Pizza Prosciuto</b><b className="color-primary float-right">$12.00</b></h5>
                  <p className="pr-70">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 food-menu pasta">
              <div className="sided-90x mb-30 ">
                <div className="s-left"><img className="br-3" src="images/menu-8-120x120.jpg" alt="Menu Image" /></div>
                <div className="s-right">
                  <h5 className="mb-10"><b>Broschettas</b><b className="color-primary float-right">$6.00</b></h5>
                  <p className="pr-70">Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis. </p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="center-text mt-40 mt-sm-20 mb-30"><a href="#" className="btn-primaryc plr-25"><b>SEE TODAYS MENU</b></a></h6>
        </div>
      </section>
      <footer className="pb-50  pt-70 pos-relative">
        <div className="pos-top triangle-bottom" />
        <div className="container-fluid">
          <a href="index-2.html"><img src="images/logo-white.png" alt="Logo" /></a>
          <div className="pt-30">
            <p className="underline-secondary"><b>Address:</b></p>
            <p>481 Creekside Lane Avila Beach, CA 93424 </p>
          </div>
          <div className="pt-30">
            <p className="underline-secondary mb-10"><b>Phone:</b></p>
            <a href="tel:+53 345 7953 32453 ">+53 345 7953 32453 </a>
          </div>
          <div className="pt-30">
            <p className="underline-secondary mb-10"><b>Email:</b></p>
            <a href="https://colorlib.com/cdn-cgi/l/email-protection#2d5442585f404c44416d4a404c4441034e4240"> <span className="__cf_email__" data-cfemail="91e8fee4e3fcf0f8fdd1f6fcf0f8fdbff2fefc">[email&nbsp;protected]</span></a>
          </div>
          <ul className="icon mt-30">
            <li><a href="#"><i className="ion-social-pinterest" /></a></li>
            <li><a href="#"><i className="ion-social-facebook" /></a></li>
            <li><a href="#"><i className="ion-social-twitter" /></a></li>
            <li><a href="#"><i className="ion-social-dribbble-outline" /></a></li>
            <li><a href="#"><i className="ion-social-linkedin" /></a></li>
            <li><a href="#"><i className="ion-social-vimeo" /></a></li>
          </ul>
          <p className="color-light font-9 mt-50 mt-sm-30">
            Copyright © All rights reserved | This template is made with <i className="ion-heart" aria-hidden="true" /> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
          </p>
        </div>
      </footer>
    </div>
    );
  }

export default App;
