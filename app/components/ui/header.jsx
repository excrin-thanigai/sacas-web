import { Link } from "@remix-run/react";
import Icons from "../icons";
import Bg_img from "../assets/images/navbar-course-bg.png";

const socialIcons = ["facebook", "insta", "linkedin", "twitter", "youtube"];
const navLeft = [
  { name: "About us", link: "#", hasDropdown: false },
  { name: "Academics", link: "#", hasDropdown: true, dropdownItems: [] },
  {
    name: "Departments",
    link: "#",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "School of Sciences",
        link: "#",
        hasCourses: true,
        courses: [
          {
            name: "B.Sc. NUTRITION, FSM & DIETETICS",
            link: "#",
            icon: "nutrition",
            image: "nutrition.jpg",
          },
          {
            name: "B.Sc. COMPUTER SCIENCE",
            link: "#",
            icon: "computer-science",
            image: "computer-science.jpg",
          },
          {
            name: "B.Sc. PSYCHOLOGY",
            link: "#",
            icon: "psychology",
            image: "psychology.jpg",
          },
          {
            name: "B.C.A. COMPUTER APPLICATION",
            link: "#",
            icon: "bc",
            image: "bca.jpg",
          },
          {
            name: "B.Sc. COMPUTER SCIENCE WITH ARTIFICIAL INTELLIGENCE",
            link: "#",
            icon: "ai",
            image: "ai.jpg",
          },
        ],
      },
      { name: "School of Commerce", link: "#", hasCourses: true, courses: [] },
      {
        name: "School of Management",
        link: "#",
        hasCourses: true,
        courses: [],
      },
      {
        name: "School of Media Studies",
        link: "#",
        hasCourses: true,
        courses: [],
      },
      {
        name: "School of Unified Languages",
        link: "#",
        hasCourses: true,
        courses: [],
      },
      { name: "School of Arts", link: "#", hasCourses: true, courses: [] },
      { name: "Department of Mathematics", link: "#", hasCourses: false },
      {
        name: "Department of Physical Education",
        link: "#",
        hasCourses: false,
      },
      {
        name: "Department of Library and Information Science",
        link: "#",
        hasCourses: false,
      },
    ],
  },
  { name: "Supportive Wings", link: "#", hasDropdown: true, dropdownItems: [] },
];
const navRight = [
  { name: "Bus Route", link: "#" },
  { name: "Placements", link: "#" },
  { name: "Brochure", link: "#" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-600">
      <div className="flex items-center justify-between px-6 py-2 bg-deep_red max-[62rem]:px-4">
        <div className=" max-62rem:hidden text-left font-semibold space-x-5 text-heritage_gold text-body_s max-xl:text-body_xs max-62rem::hidden">
          Registration Opens ✢ Registration Opens ✢ Registration Opens
        </div>
        <div className="hidden max-62rem:block">logo</div>

        <ul className="flex justify-end items-center space-x-5 max-[62rem]:space-x-3 text-white">
          {socialIcons.map((icon) => (
            <li key={icon}>
              <Link to="#">
                <Icons name={icon} width={14} height={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-[62rem]:py-7 max-[62rem]:px-2">
        <nav className="max-62rem:h-[100vh] max-62rem:overflow-y-auto bg-white border-b border-neutral-600 max-[62rem]:border-hidden relative ">
          <div className="max-62rem:gap-4  flex max-62rem:flex-col gap-4 justify-between  px-6 py-5 max-[62rem]:flex-col items-start w-full max-[62rem]:py-0 max-[62rem]:px-2">
            <ul className="flex flex-row max-62rem:flex-col gap-4 max-62rem:w-full">
              {navLeft.map((item, index) => (
                <li
                  key={index}
                  className="group pr-4 max-[62rem]:pb-4 max-[62rem]:pr-0 "
                >
                  <Link
                    to={item.link}
                    className="flex items-center justify-between text-neutral-600 group-hover:text-deep_red"
                  >
                    <span className="font-medium pr-2 text-body_s max-[1024px]:text-body_xs max-[62rem]:text-body_s">
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <>
                        <span className="group-hover:hidden">
                          <Icons name="arrow-down" height={7} width={11} />
                        </span>
                        <span className="hidden group-hover:inline">
                          <Icons name="arrow-up" height={7} width={11} />
                        </span>
                      </>
                    )}
                  </Link>
                  {/* Mobile */}
                  {item.hasDropdown && item.dropdownItems.length > 0 && (
                    <div className="hidden max-62rem:block">
                      <ul className="space-y-4 pt-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li
                            key={dropdownItem.name}

                            // className=" p-3 cursor-pointer hover:bg-deep_red hover:text-white group/submenu"
                          >
                            <Link
                              to={dropdownItem.link}
                              className="flex justify-between items-center"
                            >
                              <span className="font-medium text-body_s">
                                {dropdownItem.name}
                              </span>
                              {dropdownItem.hasCourses && (
                                <Icons
                                  name="arrow-right"
                                  height={12}
                                  width={7}
                                />
                              )}
                            </Link>

                            {dropdownItem.hasCourses &&
                              dropdownItem.courses.length > 0 && (
                                <div className="hidden max-62rem:block">
                                  <ul className="pt-4">
                                    <h1 className="font-medium text-3xl text-off_black after:content-[''] after:absolute after:bg-heritage_gold after:h-px after:w-16 after:mt-5 after:ml-1 max-md:text-lg max-md:after:mt-4">
                                      {dropdownItem.name}
                                    </h1>

                                    <div className="flex flex-wrap gap-6 pt-8 max-md:flex-nowrap max-md:flex-col max-[62rem]:pt-5">
                                      {dropdownItem.courses.map((course) => (
                                        <li
                                          key={course.name}
                                          className="group/course relative p-2"
                                        >
                                          <Link
                                            to={course.link}
                                            className="relative border p-8 max-md:p-2 flex items-center overflow-hidden group-hover/course:text-white transition-colors duration-200" // Added transition and hover text color
                                          >
                                            <div className="relative   z-10 flex items-center space-x-2">
                                              <Icons
                                                name={course.icon}
                                                width={16}
                                                height={16}
                                                className="text-off_black group-hover/course:text-white transition-colors duration-200"
                                              />
                                              <span className="pl-6 text-lg font-normal tracking-normal text-off_black group-hover/course:text-white max-md:text-sm transition-colors duration-200">
                                                {course.name}
                                              </span>
                                            </div>
                                            <div
                                              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/course:opacity-100 transition-opacity duration-300 z-0"
                                              style={{
                                                backgroundImage: `url(${Bg_img})`,
                                              }}
                                            ></div>
                                          </Link>
                                        </li>
                                      ))}
                                    </div>
                                  </ul>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.hasDropdown && item.dropdownItems.length > 0 && (
                    <div className="max-62rem:hidden h-[100vh] absolute left-0 top-[61px] bg-white border-neutral-400 p-6 border-r max-w-[27rem] w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                      <ul>
                        {item.dropdownItems.map((dropdownItem) => (
                          <li
                            key={dropdownItem.name}
                            className="relative p-3 cursor-pointer hover:bg-deep_red hover:text-white group/submenu"
                          >
                            <Link
                              to={dropdownItem.link}
                              className="flex justify-between items-center"
                            >
                              <span className="font-medium text-body_s">
                                {dropdownItem.name}
                              </span>
                              {dropdownItem.hasCourses && (
                                <Icons
                                  name="arrow-right"
                                  height={12}
                                  width={7}
                                />
                              )}
                            </Link>

                            {dropdownItem.hasCourses &&
                              dropdownItem.courses.length > 0 && (
                                <div className="h-[100vh] absolute left-full top-[-1.5rem] bg-neutral-50 border-l border-neutral-900 p-4 w-[calc(100vw-26.5rem)] opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 z-10">
                                  <ul>
                                    <h1 className="font-medium text-3xl text-off_black after:content-[''] after:absolute after:bg-heritage_gold after:h-px after:w-16 after:mt-5 after:ml-1 max-md:text-lg max-md:after:mt-4">
                                      {dropdownItem.name}
                                    </h1>

                                    <div className="flex flex-wrap gap-6 pt-8 max-md:flex-nowrap max-md:flex-col max-[62rem]:pt-5">
                                      {dropdownItem.courses.map((course) => (
                                        <li
                                          key={course.name}
                                          className="group/course relative p-2"
                                        >
                                          <Link
                                            to={course.link}
                                            className="relative border p-8 max-md:p-2 flex items-center overflow-hidden group-hover/course:text-white transition-colors duration-200" // Added transition and hover text color
                                          >
                                            <div className="relative   z-10 flex items-center space-x-2">
                                              <Icons
                                                name={course.icon}
                                                width={16}
                                                height={16}
                                                className="text-off_black group-hover/course:text-white transition-colors duration-200"
                                              />
                                              <span className="pl-6 text-lg font-normal tracking-normal text-off_black group-hover/course:text-white max-md:text-sm transition-colors duration-200">
                                                {course.name}
                                              </span>
                                            </div>
                                            <div
                                              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/course:opacity-100 transition-opacity duration-300 z-0"
                                              style={{
                                                backgroundImage: `url(${Bg_img})`,
                                              }}
                                            ></div>
                                          </Link>
                                        </li>
                                      ))}
                                    </div>
                                  </ul>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex max-62rem:flex-col gap-4 max-62rem:items-start justify-end ">
              {navRight.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="text-neutral-600 font-normal text-body_s hover:text-deep_red"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
