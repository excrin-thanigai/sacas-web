import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Icons from "../../icons";
import student from "../../assets/images/student_testimonial-img.png";

export default function StudentTestimonial() {
  return (
    <section className="tracking-normal space-y-10 py-20 px-16 max-62rem:px-8 max-md:px-4 max-md:py-16 max-md:space-y-6">
      <h2 className="uppercase text-h2 font-medium text-off_black flex  gap-3 max-md:text-h3">
        <span>
          <Icons name="heading-vector" width={19} height={20} />
        </span>
        Students Testimonial
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className="department-page__swiper student__swiper ">
        <SwiperSlide className=" swiper-slide space-y-5 p-6 border border-neutral-200 max-md:p-3">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={368}
            height={332}
            className="object-cover aspect-[368/332] w-full rounded-t-xl"
          />
          <button className="bg-deep_red p-3 ">
            <Icons name="bsc_nutrition" width={32} height={32}></Icons>
          </button>
          <h3 className=" text-body_m font-semibold text-off-black">
            <span>SAMEER RAI</span> <br />
            B.Sc. NUTRITION, FSM & DIETETICS
          </h3>
          <p className="font-normal  text-body_s text-neutral_600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud
          </p>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide space-y-5 p-6 border border-neutral-200 max-md:p-3">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={368}
            height={332}
            className="object-cover aspect-[368/332] w-full rounded-t-xl"
          />
          <button className="bg-deep_red p-3 ">
            <Icons name="bsc_nutrition" width={32} height={32}></Icons>
          </button>
          <h3 className=" text-body_m font-semibold text-off-black">
            <span>SAMEER RAI</span> <br />
            B.Sc. NUTRITION, FSM & DIETETICS
          </h3>
          <p className="font-normal  text-body_s text-neutral_600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud
          </p>
        </SwiperSlide>
        <SwiperSlide className=" swiper-slide space-y-5 p-6 border border-neutral-200 max-md:p-3">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={368}
            height={332}
            className="object-cover aspect-[368/332] w-full rounded-t-xl"
          />
          <button className="bg-deep_red p-3 ">
            <Icons name="bsc_nutrition" width={32} height={32}></Icons>
          </button>
          <h3 className="text-body_m font-semibold text-off-black">
            <span>SAMEER RAI</span> <br />
            B.Sc. NUTRITION, FSM & DIETETICS
          </h3>
          <p className="font-normal text-body_s text-neutral_600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud
          </p>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide space-y-5 p-6 border border-neutral-200 max-md:p-3">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={368}
            height={332}
            className="object-cover aspect-[368/332] w-full rounded-t-xl"
          />
          <button className="bg-deep_red p-3 ">
            <Icons name="bsc_nutrition" width={32} height={32}></Icons>
          </button>
          <h3 className=" text-body_m font-semibold text-off-black">
            <span>SAMEER RAI</span> <br />
            B.Sc. NUTRITION, FSM & DIETETICS
          </h3>
          <p className="font-normal  text-body_s text-neutral_600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud
          </p>
        </SwiperSlide>

        <SwiperSlide className=" swiper-slide space-y-5 p-6 border border-neutral-200 max-md:p-3">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={368}
            height={332}
            className="object-cover aspect-[368/332] w-full rounded-t-xl"
          />
          <button className="bg-deep_red p-3 ">
            <Icons name="bsc_nutrition" width={32} height={32}></Icons>
          </button>
          <h3 className=" text-body_m font-semibold text-off-black">
            <span>SAMEER RAI</span> <br />
            B.Sc. NUTRITION, FSM & DIETETICS
          </h3>
          <p className="font-normal  text-body_s text-neutral_600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud
          </p>
        </SwiperSlide>
        <div className="flex flex-row items-center pt-6 max-sm:pt-4">
          <div className="swiper-pagination"></div>
          <div className="flex gap-4  justify-end bg-white">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </Swiper>
      <Icons name="arrow-right" width={32} height={32}></Icons>
    </section>
  );
}
