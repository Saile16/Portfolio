import { AiOutlineArrowRight } from "react-icons/ai";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Porfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <Swiper
          cssMode={true}
          loop={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {/* PORTFOLIO 1 */}
          <SwiperSlide>
            <div className="portfolio__content grid">
              <img src={portfolio1} className="portfolio__img" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Modern Website</h3>
                <p className="portfolio__description">
                  Website adaptable to all devies and animtade aisdashdkjas
                  dahsjda
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo <AiOutlineArrowRight className="button__icon" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* PORTFOLIO 2 */}
          <SwiperSlide>
            <div className="portfolio__content grid">
              <img src={portfolio2} className="portfolio__img" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Store Website</h3>
                <p className="portfolio__description">
                  Website adaptable to all devies and animtade aisdashdkjas
                  dahsjda
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo <AiOutlineArrowRight className="button__icon" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* PORTFOLIO 3 */}
          <SwiperSlide>
            <div className="portfolio__content grid">
              <img src={portfolio3} className="portfolio__img" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Brand Design</h3>
                <p className="portfolio__description">
                  Website adaptable to all devies and animtade aisdashdkjas
                  dahsjda
                </p>
                <a
                  href="#"
                  className="button button--flex button--small portfolio__button"
                >
                  Demo <AiOutlineArrowRight className="button__icon" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Porfolio;
