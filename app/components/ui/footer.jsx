import Icons from "../icons/index";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-off_black px-16 py-10 w-full max-62rem:px-4 space-y-10">
      <div className="flex justify-between max-62rem:flex-col gap-10">
        <div className="flex flex-col gap-4 lg:max-w-[432px] w-full ">
          <div className="flex max-62rem:hidden">
            <Icons name="footer_logo" width={411} height={64} />
          </div>
          <div className="hidden max-62rem:block">
            <Icons name="footer_logo" width={320} height={64} />
          </div>

          <p className="text-white text-body_m font-medium">
            SACAS offers 360-degree training to its students in sculpting their
            career and scale greater heights in their life.
          </p>
          <p className="text-neutral-400 font-normal text-body_s">
            © 2024 S.A. College of Arts & Science. All rights reserved. CRICOS
            Provider No.00355F S.A. Educational Institution.
          </p>
        </div>

        <div className="flex md:gap-20  md:flex-row md:justify-between flex-col gap-10 ">
          <div className="space-y-6">
            <h3 className="text-white font-medium text-body_l">Address</h3>
            <p className="text-neutral-400 font-medium text-body_s">
              S. A. College of Arts & Science <br />
              Poonamallee-Avadi Main Road, Veeraraghavapuram,
              <br />
              Thiruverkadu, Chennai - 600 077.
              <br />
              Phone: 75501 01114, 9600094064. <br />
              E-Mail: info@sacas.ac.in
              <br />
            </p>
          </div>

          <div className="flex gap-20 ">
            <div className="space-y-6 ">
              <h3 className="text-white font-medium text-body_l whitespace-nowrap">
                Quick Info
              </h3>
              <ul className="font-medium text-body_s text-neutral-400 space-y-4">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/academics">Academics</Link>
                </li>
                <li>
                  <Link to="/campus-life">Campus Life</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/grievance">Grievance</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-medium text-body_l whitespace-nowrap">
                Quick Info
              </h3>
              <ul className="font-medium text-body_s text-neutral-400 space-y-4">
                <li>
                  <Link to="/library">Library</Link>
                </li>
                <li>
                  <Link to="/placements">Placements</Link>
                </li>
                <li>
                  <Link to="/research">Research</Link>
                </li>
                <li>
                  <Link to="/supportive-wings">Supportive Wings</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-between border-t border-neutral-400 pt-10 items-center max-sm:flex-col max-sm:gap-6">
        <ul className="font-medium text-body_s text-neutral-400 flex gap-3 items-center">
          <li>
            <Link to="#">
              <Icons name="facebook" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icons name="insta" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icons name="linkedin" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icons name="twitter" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icons name="youtube" width={24} height={24} />
            </Link>
          </li>
        </ul>
        <div className="flex text-body_s font-medium text-neutral-400 gap-6">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
