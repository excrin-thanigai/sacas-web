import Icons from "../../icons";
import { Link } from "@remix-run/react";

export default function Academics() {
  return (
    <section
      id="academics"
      className="tracking-normal scroll-mt-24 px-16 py-20 max-62rem:px-8 max-md:px-4 max-md:py-16 w-full bg-deep_red">
      <div className="text-center">
        <h2 className="text-h2 text-white font-medium max-md-text-h3">
          Academics
        </h2>
        <p className="font-normal text-heritage_gold text-body_m pt-4 pb-10">
          Training Provided / Undergone by The Students
        </p>
      </div>

      <div className="flex gap-10 max-62rem:flex-col">
        <ul
          className="space-y-6 flex-1 font-semibold text-h4 text-heritage_gold 
           gap-3 items-center  max-62rem:textbody_l ">
          <li className="py-4 pr-4  flex items-center gap-3 hover:bg-heritage_gold hover:text-deep_red active:bg-heritage_gold active:text-deep_red">
            <span className="hover:text-deep_red active:text-deep_red">
              <Icons name="D_vector" width={12} height={12} />
            </span>
            PROGRAMME EDUCATIONAL OBJECTIVES
          </li>

          <li className="py-4 pr-4 flex items-center gap-3 hover:bg-heritage_gold hover:text-deep_red active:bg-heritage_gold active:text-deep_red">
            <span className="hover:text-deep_red active:text-deep_red">
              <Icons name="D_vector" width={12} height={12} />
            </span>
            PROGRAMME SPECIFIC OUTCOMES
          </li>

          <li className="py-4 pr-4 flex items-center gap-3 hover:bg-heritage_gold hover:text-deep_red active:bg-heritage_gold active:text-deep_red">
            <span className="hover:text-deep_red active:text-deep_red">
              <Icons name="D_vector" width={12} height={12} />
            </span>
            VALUE ADDED COURSES
          </li>

          <li className="py-4 pr-4 flex items-center gap-3 hover:bg-heritage_gold hover:text-deep_red active:bg-heritage_gold active:text-deep_red">
            <span className="hover:text-deep_red active:text-deep_red">
              <Icons name="D_vector" width={12} height={12} />
            </span>
            IMPORTANT LINKS
          </li>
        </ul>

        <div className="h-[39rem] flex-1 bg-white p-6 space-y-8 rounded-br-[7rem] max-62rem:rounded-none max-md:py-3 max-md:space-y-3 ">
          <div className="border border-heritage_gold p-3 space-y-3">
            <div className=" flex justify-between items-center">
              <h4 className="flex gap-2 items-center font-semibold text-body_1 text-deep_red max-md:text-body_m">
                <span>
                  <Icons
                    name="square-circle-vector"
                    width={24}
                    height={24}></Icons>
                </span>
                PROGRAMME EDUCATIONAL OBJECTIVES 2
              </h4>

              <Link className="border border-off_black pt-1 pl-1.5 pr-2 rounded-full w-5 h-5">
                <Icons name="arrow-down" width={8} height={11} />
              </Link>
            </div>
            <p className="border-t border-off_black pt-3 text-body_l text-off_black font-normal max-md:text-body_m">
              Graduates shall have professional competency in the field of
              Computer Science and Engineering for pursuing higher education,
              research or as entrepreneurs.
            </p>
          </div>

          <div className="border border-heritage_gold p-3 space-y-3">
            <div className=" flex justify-between items-center">
              <h4 className="flex gap-2 items-center font-semibold text-body_1 text-deep_red max-md:text-body_m">
                <span>
                  <Icons
                    name="square-circle-vector"
                    width={24}
                    height={24}></Icons>
                </span>
                PROGRAMME EDUCATIONAL OBJECTIVES 2
              </h4>

              <Link className="border border-off_black pt-1 pl-1.5 pr-2 rounded-full w-5 h-5">
                <Icons name="arrow-down" width={8} height={11} />
              </Link>
            </div>
            <p className="hidden border-t border-off_black pt-3 text-body_l text-off_black font-normal max-md:text-body_m">
              Graduates shall have professional competency in the field of
              Computer Science and Engineering for pursuing higher education,
              research or as entrepreneurs.
            </p>
          </div>

          <div className="border border-heritage_gold p-3 space-y-3">
            <div className=" flex justify-between items-center">
              <h4 className="flex gap-2 items-center font-semibold text-body_1 text-deep_red max-md:text-body_m">
                <span>
                  <Icons
                    name="square-circle-vector"
                    width={24}
                    height={24}></Icons>
                </span>
                PROGRAMME EDUCATIONAL OBJECTIVES 2
              </h4>

              <Link className="border border-off_black pt-1 pl-1.5 pr-2 rounded-full w-5 h-5">
                <Icons name="arrow-down" width={8} height={11} />
              </Link>
            </div>
            <p className="hidden border-t border-off_black pt-3 text-body_l text-off_black font-normal max-md:text-body_m">
              Graduates shall have professional competency in the field of
              Computer Science and Engineering for pursuing higher education,
              research or as entrepreneurs.
            </p>
          </div>
        </div>
      </div>

      <Link>
        <button className="text-deep_red font-medium text-body_m p-3 bg-heritage_gold flex items-center flex-nowrap gap-2 max-62rem:mt-10">
          <Icons name="book" width={25} height={24}></Icons>
          SYLLABUS
          <Icons name="arrow_center_right" width={22} height={14}></Icons>
        </button>
      </Link>
    </section>
  );
}
