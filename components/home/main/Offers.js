import styles from "./styles.module.scss";
import { offersArray } from "../../../data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Offers() {
  return (
    <div className={styles.offers}>
      <div className={styles.offers__text}>
        <p>
          use code <b>“MHAJJI”</b> for 30% off all products.
        </p>
        <Link href="/browse">Shop now</Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="offers_swiper"
      >
        {offersArray.map((offer) => (
          <SwiperSlide key={offer.id}>
            <Link href="">
              <img src={offer.image} alt="" />
            </Link>
            <span>{offer.price}$</span>
            <span>-{offer.discount}%</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
