import Icons from "../../icons";
import Logo from "../../assets/images/course_section_logo.png";
import { useState } from "react";

export default function Courses() {
  const ugCourses = [
    {
      icons: "bcom_general",
      name: "B.Com. GENERAL",
    },
    {
      icons: "bcom_accounts",
      name: "B.Com. ACCOUNTING & FINANCE",
    },
    {
      icons: "bcom_bank",
      name: "B.Com. BANK MANAGEMENT",
    },
    {
      icons: "bcom_bank",
      name: "B.Com. BANK MANAGEMENT",
    },
    {
      icons: "bcom_corporate",
      name: "B.Com. CORPORATE SECRETARYSHIP",
    },
    {
      icons: "bcom_cs",
      name: "B.Sc. COMPUTER SCIENCE",
    },
    {
      icons: "bba",
      name: "BACHELOR OF BUSINESS ADMINISTRATION ",
    },
    {
      icons: "bsc_visual",
      name: "B.Sc. VISUAL COMMUNICATION",
    },
    { icons: "bca", name: "B.C.A. COMPUTER APPLICATION" },
    { icons: "ba_english", name: "B.A. ENGLISH" },
    { icons: "bsc_psyc", name: "B.Sc. PSYCHOLOGY" },
    { icons: "bsc_nutrition", name: "B.Sc. NUTRITION, FSM & DIETETICS" },
    {
      icons: "bsc_csai",
      name: "B.Sc. COMPUTER SCIENCE WITH ARTIFICIAL INTELLIGENCE",
    },
  ];
  const pgCourses = [
    {
      icons: "bcom_general",
      name: "B.Com. GENERAL",
    },
    {
      icons: "bba",
      name: "BACHELOR OF BUSINESS ADMINISTRATION ",
    },
    { icons: "bca", name: "B.C.A. COMPUTER APPLICATION" },

    {
      icons: "bcom_accounts",
      name: "B.Com. ACCOUNTING & FINANCE",
    },
    {
      icons: "bsc_csai",
      name: "B.Sc. COMPUTER SCIENCE WITH ARTIFICIAL INTELLIGENCE",
    },
  ];
  const [activeTab, setActiveTab] = useState("UG");
  return (
    <section className="max-w-[110rem] w-full m-auto bg-deep_red py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-8 lg:space-y-10">
        <h2 className="text-white text-h3 font-medium lg:text-center">
          COURSES OFFERED
        </h2>
        <div className="space-y-8 block lg:hidden">
          <div className="relative py-4 px-5 flex gap-3 items-center bg-heritage_gold">
            <h4 className="font-semibold text-h4 text-deep_red relative after:content-[''] after:w-14 after:h-[0.125rem] after:bg-deep_red after:absolute after:left-full after:top-1/2 after:ml-3 after:-translate-y-1/2">
              UG Courses
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {ugCourses.map((course, i) => {
              const isLastSingle =
                ugCourses.length % 2 !== 0 && i === ugCourses.length - 1;

              return (
                <div
                  key={i}
                  className={`p-4 border border-white flex flex-col gap-4 ${
                    isLastSingle ? "col-span-2" : ""
                  }`}>
                  <Icons width={24} height={24} name={course.icons} />
                  <h4 className="text-white text-body_s">{course.name}</h4>
                </div>
              );
            })}
          </div>
          <div className="bg-heritage_gold py-4 px-5 flex gap-3 items-center">
            <h4 className=" font-semibold text-h4 text-deep_red">PG Courses</h4>
            <div className="w-14 h-[0.125rem] bg-deep_red"></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {pgCourses.map((course, i) => {
              const isLastSingle =
                pgCourses.length % 2 !== 0 && i === pgCourses.length - 1;

              return (
                <div
                  key={i}
                  className={`p-4 border border-white flex flex-col gap-4 ${
                    isLastSingle ? "col-span-2" : ""
                  }`}>
                  <Icons width={24} height={24} name={course.icons} />
                  <h4 className="text-white text-body_s">{course.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex gap-16 justify-between">
          <div className="max-w-[16rem] w-full flex flex-col justify-between h-[40rem]">
            <div className="space-x-2">
              <h3
                className={`cursor-pointer py-4 pr-5 text-h4 font-semibold flex items-center gap-2 ${
                  activeTab === "UG"
                    ? "bg-heritage_gold text-deep_red"
                    : "bg-deep_red text-heritage_gold"
                }`}
                onClick={() => setActiveTab("UG")}>
                <span className="hover:text-deep_red active:text-deep_red">
                  <Icons name="course_heading_vector" width={12} height={12} />
                </span>
                UG Courses
              </h3>
              <h3
                className={`cursor-pointer py-4 pr-5 text-h4 font-semibold flex gap-2 items-center ${
                  activeTab === "PG"
                    ? "bg-heritage_gold text-deep_red"
                    : "bg-deep_red text-heritage_gold"
                }`}
                onClick={() => setActiveTab("PG")}>
                <span className="hover:text-deep_red active:text-deep_red">
                  <Icons name="course_heading_vector" width={12} height={12} />
                </span>
                PG Courses
              </h3>
            </div>
            {/* <Icons name="course_section_logo" /> */}
            <div>
              <img src={Logo} alt="SA logo" height={350} />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-10">
              {(activeTab === "UG" ? ugCourses : pgCourses).map(
                (course, i, arr) => {
                  const isLastSingle =
                    arr.length % 2 !== 0 && i === arr.length - 1;
                  return (
                    <div
                      key={i}
                      className={`p-4 border border-white flex h-24 items-center cursor-pointer gap-4 ${
                        isLastSingle ? "col-span-2" : ""
                      }`}>
                      <Icons width={24} height={24} name={course.icons} />
                      <h4 className="text-white text-body_s">{course.name}</h4>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
