import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Brands from "../../Data/Brands";
import styles from "./BrandDisplay.module.css";

const BrandDisplay = () => {
  return (
    <section className={styles.brandSection}>
      <Container className="text-center">
        <h2 className={styles.title}>EMPRESAS QUE CONFÍAN EN NOSOTROS</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {Brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <img
                src={brand.logo}
                alt={`Logo de ${brand.nombre}`}
                className={styles.clientLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default BrandDisplay;
