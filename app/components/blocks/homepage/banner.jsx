import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeHero1 from "../../assets/images/hero_image1.png";
import HomeHero2 from "../../assets/images/hero_image2.png";

export default function BannerHero() {
  return (
    <>
      <section className="text-white tracking-normal relative w-full h-screen">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper hero__silder h-screen rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[9rem]"
        >
          <SwiperSlide>
            <img
              src={HomeHero1}
              alt="Slide-1"
              loading="eager"
              width={2090}
              height={735}
              className="w-full h-full object-cover aspect-[2090/735]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={HomeHero2}
              alt="Slide-1"
              loading="lazy"
              width={2090}
              height={735}
              className="w-full h-full object-cover aspect-[2090/735]"
            />
          </SwiperSlide>

          <div className="silder-content__overlay space-y-4 bottom-16 z-10 absolute px-16  max-62rem:px-6 max-md:bottom-6">
            <h2 className="text-h1 font-medium  max-62rem:text-h3">
              SHAPING FUTURES, <br className="hidden sm:block" />
              INSPIRING EXCELLENCE.
            </h2>
            <p className="font-normal text-body_m  max-62rem:pb-4 max-md:text-body_s">
              SACAS provides a dynamic learning environment that nurtures
              talent, fosters innovation, and prepares students for a successful
              future.
            </p>
            <button className="cursor-pointer font-medium text-base text-center text-deep_red py-2.5 px-6 bg-white mb-6 max-md:mb-4 max-62rem:text-sm max-62rem:py-2 max-62rem:px-5">
              APPLY NOW
            </button>
            <div className="swiper-pagination unset-0 text-left z-20 cursor-pointer"></div>
          </div>
        </Swiper>
      </section>

      <ul className="text-body_m font-medium tracking-normal text-white px-8 flex py-10 bg-deep_red items-center gap-10 justify-center max-62rem:gap-6 max-md:flex-wrap max-sm:gap-12 max-md:py-4 max-md:hidden">
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#admission">ADMISSION</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#campus-life">CAMPUS LIFE</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#online-fee-payment">ONLINE FEE PAYMENT</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#contact">CONTACT US</a>
        </li>
        <li>
          <a href="#grievance">GRIEVANCE</a>
        </li>
      </ul>
    </>
  );
}
