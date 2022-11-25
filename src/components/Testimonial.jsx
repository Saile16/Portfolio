import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AiOutlineStar } from "react-icons/ai";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <Swiper
        grabCursor={true}
        spaceBetween={48}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        breakpoints={{
          568: {
            slidesPerView: 2,
          },
        }}
        className="testimonial__container container mySwiper swiper-container"
      >
        <div>
          <SwiperSlide>
            {/* testimoial 1 */}
            <div className="testimonial__content">
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img
                    src={testimonial1}
                    alt="imagen de testimonial"
                    className="testimonial__img "
                  />
                  <div>
                    <h3 className="testimonial__name">Sara Smith</h3>
                    <span className="testimonial__client">Client</span>
                  </div>
                </div>

                <div>
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                </div>
              </div>
              <p className="testimonial__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* testimoial 2 */}
            <div className="testimonial__content">
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img
                    src={testimonial2}
                    alt="imagen de testimonial"
                    className="testimonial__img "
                  />
                  <div>
                    <h3 className="testimonial__name">Sara Smith2</h3>
                    <span className="testimonial__client">Client3</span>
                  </div>
                </div>

                <div>
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                </div>
              </div>
              <p className="testimonial__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* testimoial 3 */}
            <div className="testimonial__content">
              <div className="testimonial__data">
                <div className="testimonial__header">
                  <img
                    src={testimonial3}
                    alt="imagen de testimonial"
                    className="testimonial__img "
                  />
                  <div>
                    <h3 className="testimonial__name">Sara Smith3</h3>
                    <span className="testimonial__client">Client3</span>
                  </div>
                </div>

                <div>
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                  <AiOutlineStar className="testimonial__icon-star" />
                </div>
              </div>
              <p className="testimonial__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
