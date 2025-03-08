import Icons from "../../icons/index";
import Gallery1 from "../../assets/images/gallery-1.png";
import Gallery2 from "../../assets/images/gallery-2.png";
import Gallery3 from "../../assets/images/gallery-3.png";
import Gallery4 from "../../assets/images/gallery-4.png";
import Gallery5 from "../../assets/images/gallery-5.png";
import Gallery6 from "../../assets/images/gallery-6.png";
import Gallery7 from "../../assets/images/gallery-7.png";
import Gallery8 from "../../assets/images/gallery-8.png";
import Gallerylogo from "../../assets/images/gallery_logo.png";
import { Link } from "@remix-run/react";
import GalleryBg from "../../assets/images/gallery_bg.png";

export default function Gallery() {
  return (
    <section className="max-w-[110rem] w-full m-auto py-16 px-4 lg:py-20 lg:px-16 md:relative ">
      <div className="flex justify-center items-center ">
        <img
          src={GalleryBg}
          alt="gallery-background"
          loading="lazy"
          className="absolute top-10  w-[44rem] hidden md:block"
        />
      </div>
      <div className="space-y-8 md:hidden">
        <div className="relative flex gap-3">
          <h4 className="font-semibold text-h4 text-off_black uppercase relative after:content-[''] after:w-14 after:h-[0.125rem] after:bg-heritage_gold after:absolute after:left-full after:top-1/2 after:ml-3 after:-translate-y-1/2">
            Gallery
          </h4>
        </div>
        <div className="space-y-3 ">
          <div className="flex justify-center items-center gap-1 flex-col">
            <h3 className="text-deep_red uppercase text-h4 text-center font-medium">
              A Glimpse into Life at SACAS
            </h3>
            <p className="text-off_black text-body_s text-center">
              From academic excellence to cultural celebrations, SACAS is a hub
              of learning, creativity, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-between">
            <img
              src={Gallery1}
              alt="gallery-image"
              loading="lazy"
              width={307}
              height={364}
              className="object-cover aspect-[307/364] w-full"
            />
            <img
              src={Gallery2}
              alt="gallery-image"
              loading="lazy"
              width={307}
              height={364}
              className="object-cover aspect-[307/364] w-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img
              src={Gallery3}
              alt="gallery-image"
              loading="lazy"
              width={218}
              height={170}
              className="h-full w-full object-cover aspect-[218/170]"
            />
            <img
              src={Gallerylogo}
              alt="gallery-logo"
              width={154}
              height={170}
              className="h-full w-full object-cover aspect-[154/170]"
            />
            <img
              src={Gallery4}
              alt="gallery-image"
              loading="lazy"
              width={218}
              height={170}
              className="h-full w-full object-cover aspect-[218/170]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 justify-between">
            <img
              src={Gallery5}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={210}
              className="h-full w-full object-cover aspect-[311/210]"
            />
            <img
              src={Gallery6}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={439}
              className="w-full h-full object-cover aspect-[311/439]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 justify-between">
            <img
              src={Gallery7}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={439}
              className="w-full h-full object-cover aspect-[311/439]"
            />
            <img
              src={Gallery8}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={210}
              className="w-full h-full object-cover aspect-[311/210]"
            />
          </div>
        </div>

        <Link to="/announcements" className="flex justify-center h-fit ">
          <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
            View more
          </button>
        </Link>
      </div>

      <div className="space-y-10 relative z-[1]">
        <div className="max-sm:hidden flex justify-between items-center">
          <h2 className="uppercase text-h2 font-medium flex gap-3">
            <span>
              <Icons name="heading-vector" width={19} height={20} />
            </span>
            Gallery
          </h2>
          <Link to="/announcements" className="h-fit ">
            <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
              View more
            </button>
          </Link>
        </div>

        <div className=" flex gap-6 rounded-b-[7.5rem] overflow-hidden">
          <div className="flex flex-col gap-3 justify-between">
            <img
              src={Gallery5}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={210}
              className="h-full w-full object-cover aspect-[311/210]"
            />
            <img
              src={Gallery6}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={439}
              className="w-full h-full object-cover aspect-[311/439]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center gap-1 flex-col">
              <h3 className="text-deep_red uppercase text-h4 text-center font-medium">
                A Glimpse into Life at SACAS
              </h3>
              <p className="text-off_black text-body_s text-center">
                From academic excellence to cultural celebrations, SACAS is a
                hub of learning, creativity, and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 justify-between">
              <img
                src={Gallery1}
                alt="gallery-image"
                loading="lazy"
                width={307}
                height={364}
                className="object-cover aspect-[307/364] w-full"
              />
              <img
                src={Gallery2}
                alt="gallery-image"
                loading="lazy"
                width={307}
                height={364}
                className="object-cover aspect-[307/364] w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <img
                src={Gallery3}
                alt="gallery-image"
                loading="lazy"
                width={218}
                height={170}
                className="h-full w-full object-cover aspect-[218/170]"
              />
              <img
                src={Gallerylogo}
                alt="gallery-logo"
                width={154}
                height={170}
                className="h-full w-full object-cover aspect-[154/170]"
              />
              <img
                src={Gallery4}
                alt="gallery-image"
                loading="lazy"
                width={218}
                height={170}
                className="h-full w-full object-cover aspect-[218/170]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-between">
            <img
              src={Gallery7}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={439}
              className="w-full h-full object-cover aspect-[311/439]"
            />
            <img
              src={Gallery8}
              alt="gallery-image"
              loading="lazy"
              width={311}
              height={210}
              className="w-full h-full object-cover aspect-[311/210]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
