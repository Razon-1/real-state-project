import React from 'react';

const MobileMenu = () => {
  return (
    <section className="MenuItems">
      <div className="container">
        <div className="MenuItems__top">
          <div className="MenuItems__top__bg">
            <ul>
              <li className="modify-bg active" style={{backgroundImage: "url('/themes/cms/assets/images/static/menuBg.jpg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/about-us/1920x562/1614763810PrYbs_l.jpg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/projects/1920x562/17735702688qBNg_l.jpeg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/blog/1920x562/1684333424hC1kj_l.jpeg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/themes/cms/assets/images/static/menuBg.jpg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/career/1920x562/1614763063ucuJb_l.jpg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/contact-us/1920x562/1614763491y3nFE_l.jpg')"}}></li>
              <li className="modify-bg" style={{backgroundImage: "url('/admin/uploads/page/landowner/1920x562/1701934264EnkdB_l.jpg')"}}></li>
            </ul>
          </div>

          <div className="MenuItems__top__single">
            <a href="/">Home</a>
          </div>

          <div className="MenuItems__top__single">
            <a href="/about-us">About</a>
            <ul>
              <li><a href="/about-us/team">Our Team</a></li>
              <li><a href="/about-us/privacy-policy">Privacy Policy</a></li>
              <li><a href="https://edisonrealestatebd.com/royalclub/" target="_blank" rel="noreferrer">Edison Royal Club</a></li>
            </ul>
          </div>

          <div className="MenuItems__top__single">
            <a href="/projects">Projects</a>
            <ul>
              <li><a href="/projects/ongoing?&type=%23&location=%23">Ongoing</a></li>
              <li><a href="/projects/upcoming?&type=%23&location=%23">Upcoming</a></li>
              <li><a href="/projects/completed?&type=%23&location=%23">Handed Over</a></li>
              <li><a href="/projects/ready?&type=%23&location=%23">Ready</a></li>
            </ul>
          </div>

          <div className="MenuItems__top__single">
            <a href="/blog">Blog</a>
          </div>

          <div className="MenuItems__top__single">
            <button type="button">Gallery</button>
            <ul>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/image-gallery">Image Gallery</a></li>
              <li><a href="/video-gallery">Video Gallery</a></li>
            </ul>
          </div>

          <div className="MenuItems__top__single">
            <a href="/career">Career</a>
          </div>

          <div className="MenuItems__top__single">
            <a href="/contact-us">Contact</a>
            <ul>
              <li><button data-suggestion-trigger className="text-left w-full">Suggestion</button></li>
            </ul>
          </div>

          <div className="MenuItems__top__single">
            <a href="/landowner">Landowner</a>
          </div>
        </div>

        <div className="MenuItems__bottom">
          <div className="Footer__social col-md-12">
            <ul>
              <li><button type="button" aria-label="Social link" style={{backgroundImage: "url('assets/images/static/social.png')"}}></button></li>
              <li><button type="button" aria-label="Social link" style={{backgroundImage: "url('assets/images/static/social.png')"}}></button></li>
              <li><button type="button" aria-label="Social link" style={{backgroundImage: "url('assets/images/static/social.png')"}}></button></li>
              <li><button type="button" aria-label="Social link" style={{backgroundImage: "url('assets/images/static/social.png')"}}></button></li>
              <li><button type="button" aria-label="Social link" style={{backgroundImage: "url('assets/images/static/social.png')"}}></button></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
