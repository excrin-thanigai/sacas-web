import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "@remix-run/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Icons from "../../icons";
import student from "../../assets/images/student_img.png";
import LeafRightBg from "../../assets/images/background__single-leaf.png";

export default function StudentAchievements() {
  return (
    <section className="text-white tracking-normal scroll-mt-24 relative space-y-10 py-20 px-16 max-62rem:px-8 max-md:px-4 max-md:py-16 max-md:space-y-6">
      <img
        src={LeafRightBg}
        className="absolute w-[13rem] top-0 right-0 hidden md:block"
        alt="Leaf-background"
      />
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-h2 font-medium text-off_black flex gap-3 max-md:text-h3">
          <span>
            <Icons name="heading-vector" width={19} height={20} />
          </span>
          STUDENT ACHIEVEMENTS
        </h2>
        <Link to="" className="h-fit ">
          <button className="max-md:hidden uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
            ALL ACHIEVEMENTS
          </button>
        </Link>
      </div>

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
        className="bg-neutral-50 department-page__swiper student__swipe">
        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img
            src={student}
            alt="student_img"
            loading="lazy"
            width={408}
            height={326}
            className="object-cover aspect-[408/326] w-full"
          />
          <div className="bg-deep_red p-5 max-md:p-3 space-y-3 ">
            <h3 className="border-b border-orange-200 pb-3 font-semibold text-h4">
              Niranjanaa Vani B S <br />
              <span className="font-medium text-body_l">M. Sc.,</span>
            </h3>
            <h6 className="font-medium text-body_l">Basket Ball - Zonal 4</h6>
            <p className="font-normal text-body_m">
              SACAS Student Development Program Equips Commerce Students for
              Professional Growth
            </p>
          </div>
        </SwiperSlide>

        <div className="flex flex-row items-center pt-6 max-sm:pt-4">
          <div className="swiper-pagination"></div>
          <div className="flex gap-4  justify-end bg-white">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
