import Icons from "../../icons";
import { Link } from "@remix-run/react";
import Overview from "../../assets/images/depat__overview-img.png";

export default function DepartmentOverview() {
  return (
    <section
      id="overview"
      className="text-off_black tracking-normal font-normal scroll-mt-24 px-16 py-20 max-62rem:px-8 max-md:px-4 max-md:py-16 w-full">
      <div>
        <h2 className="uppercase text-h2 font-medium flex gap-3 max-md:text-h3">
          <span>
            <Icons name="heading-vector" width={19} height={20} />
          </span>
          Department Overview
        </h2>
        <p className="text-body_m pt-6 pb-10 max-md:py-6">
          The Nutrition, Food Service Management, and Dietetics Programme is
          intended for students who are interested in learning about Nutritional
          Science and Dietetics. Students should have studied Chemistry with
          Biology or Home Science in their higher secondary education.{" "}
        </p>
      </div>

      <div className="relative max-62rem:space-y-8">
        <img
          src={Overview}
          alt="Overview-image"
          loading="lazy"
          width={1312}
          height={602}
          className="h-full w-full aspect-[1312/602] rounded-br-[7rem] object-cover max-md:rounded-br-[3.5rem]"
        />

        <div className="p-8 bg-white absolute bottom-6 max-w-lg mx-8 max-62rem:relative max-62rem:bottom-0 max-62rem:max-w-full  max-62rem:mx-0  max-62rem:px-0  max-62rem:py-3">
          <div className="pb-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-body_l font-semibold  flex gap-2 items-center">
                <span className="text-heritage_gold">
                  <Icons name="D_vector" width={12} height={12} />
                </span>
                Vision
              </h4>
              <Link className="active:bg-deep_red active:text-white">
                <Icons name="right_arrow_circle" width={24} height={24} />
              </Link>
            </div>
            <p className="text-body_s ">
              To be a leading program in Nutrition, Food Service Management, and
              Dietetics that inspires and empowers professionals to transform
              lives through exceptional nutrition care, innovative food service
              solutions, and sustainable practices.
            </p>
          </div>
          <hr className="h-0.5 bg-off_black border-0 opacity-5" />
          <div className=" py-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-body_l font-semibold  flex gap-2 items-center">
                <span className="text-heritage_gold">
                  <Icons name="D_vector" width={12} height={12} />
                </span>
                Mission
              </h4>
              <Link className="active:bg-deep_red active:text-white">
                <Icons name="right_arrow_circle" width={24} height={24} />
              </Link>
            </div>
            <p className="hidden text-body_s">
              To be a leading program in Nutrition, Food Service Management, and
              Dietetics that inspires and empowers professionals to transform
              lives through exceptional nutrition care, innovative food service
              solutions, and sustainable practices.
            </p>
          </div>

          <hr className="h-0.5 bg-off_black border-0 opacity-5" />
          <div className="pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-body_l font-semibold  flex gap-2 items-center">
                <span className="text-heritage_gold">
                  <Icons name="D_vector" width={12} height={12} />
                </span>
                Objectives
              </h4>
              <Link className=" active:bg-deep_red active:text-white">
                <Icons name="right_arrow_circle" width={24} height={24} />
              </Link>
            </div>
            <p className="text-body_s hidden">
              To be a leading program in Nutrition, Food Service Management, and
              Dietetics that inspires and empowers professionals to transform
              lives through exceptional nutrition care, innovative food service
              solutions, and sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
