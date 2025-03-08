import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Icons from "../../icons";
import Director from "../../assets/images/director-img.png";
import AssistantProfessorBg1 from "../../assets/images/Assistant-Professor_image1.png";
import AssistantProfessorBg2 from "../../assets/images/Assistant-Professor_image2.png";

export default function OurFacultyDepartment() {
  return (
    <section
      id="publications"
      className="tracking-normal text-white max-[90rem] w-full m-auto px-16 py-20 space-y-10 max-62rem:px-8 max-md:px-4 max-md:py-16  max-md:space-y-12 ">
      <h2 className="uppercase text-h2 font-medium text-off_black flex gap-3 max-md:text-h3">
        <span>
          <Icons name="heading-vector" width={19} height={20} />
        </span>
        OUR FACULTY
      </h2>

      <div className="flex max-62rem:flex-col">
        <img
          src={Director}
          alt="director-image"
          loading="lazy"
          width={383}
          height={478}
          className="object-cover aspect-[383/478] max-w-full"
        />

        <div className="bg-neutral_50 p-8 flex flex-col justify-between md:max-1280:p-4 62rem:max-1280rem:p-4 max-62rem:pt-4 max-62rem:p-0">
          <div className="text-off_black">
            <div className="flex gap-3 items-center max-md:flex-col max-md:items-start">
              <h3 className="text-h2 font-medium text-off-black max-md:text-h3 max-md:font-semibold">
                Sathyabama D
              </h3>
              <div className="text-base font-semibold  text-deep_red bg-heritage_gold py-1 px-3">
                Head of Dept
              </div>
            </div>
            <h4 className="pt-2 pb-6 font-semibold text-off-black text-h4 max-md:text-body_l max-md:font-medium max-62rem:pb-4">
              M. Sc., M. Phil., (Ph. D) NET, SET | Assistant Professor and Head 
            </h4>
            <h5 className="font-normal text-body_m max-h-24">
              Hod Deck/ Quote
            </h5>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-body_m text-off_black">
              Contact
            </h4>

            <div className="flex items-center flex-wrap gap-3 text-body_l font-normal max-md:flex-col max-md:items-start max-md:text-body_s">
              <button className="bg-deep_red flex gap-2 items-center py-3 px-4">
                <Icons name="book" width={24} height={24}></Icons>
                email.hod@sacas.in
              </button>
              <button className="bg-deep_red flex gap-2 items-center py-3 px-4">
                <Icons name="phone" width={24} height={24}></Icons>
                +91 99446 92857
              </button>
              <button className="bg-deep_red flex gap-2 items-center py-3 px-4 ">
                <Icons name="insta" width={24} height={24}></Icons>
                IG@_hssacas_
              </button>
            </div>
          </div>
        </div>
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
          1034: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className="department-page__swiper">
        <SwiperSlide className="relative">
          <img
            src={AssistantProfessorBg1}
            alt="AssistantProfessor-Bg"
            loading="lazy"
            width={421}
            height={380}
            className="relative object-contain aspect-[421/380] w-full"
          />
          <div className="px-5 space-y-3  max-62rem:pr-0 absolute bottom-3">
            <h5 className="font-semibold text-h4">Niranjanaa Vani B S</h5>
            <h6 className="text-body_1 font-medium">
              M. Sc., NET Assistant Professor
            </h6>
            <p className="text-body_m font-medium">
              Experience: 3 months Food Microbiology, Sports Nutrition
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src={AssistantProfessorBg2}
            alt="AssistantProfessor-Bg"
            loading="lazy"
            width={421}
            height={380}
            className="relative object-contain aspect-[421/380]  w-full"
          />
          <div className="px-5 space-y-2 absolute bottom-3 max-62rem:pr-0 ">
            <h5 className="font-semibold text-h4">Beryl Elizabeth S</h5>
            <h6 className="text-body_1 font-medium">
              M. Sc., NET Assistant Professor
            </h6>
            <p className="text-body_m font-medium">
              Experience: UG: 2 months Foods and Nutrition
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src={AssistantProfessorBg1}
            alt="AssistantProfessor-Bg"
            loading="lazy"
            width={421}
            height={380}
            className="relative object-contain aspect-[421/380]  w-full"
          />
          <div className="px-5 space-y-2 max-62rem:pr-0  absolute bottom-3 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
            <h5 className="font-semibold text-h4">Meenakumari M</h5>
            <h6 className="text-body_1 font-medium">
              M.Sc., (PhD), PGDSML (Data Science) Assistant Professor
            </h6>
            <p className="text-body_m font-medium">
              Experience: 1 Month Organic chemistry
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src={AssistantProfessorBg1}
            alt="AssistantProfessor-Bg"
            loading="lazy"
            width={421}
            height={380}
            className="relative object-contain aspect-[421/380]  w-full"
          />
          <div className="space-y-2 absolute bottom-3 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
            <h5 className="font-semibold text-h4">Meenakumari M</h5>
            <h6 className="text-body_1 font-medium">
              M.Sc., (PhD), PGDSML (Data Science) Assistant Professor
            </h6>
            <p className="text-body_m font-medium">
              Experience: 1 Month Organic chemistry
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
