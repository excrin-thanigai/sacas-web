import AboutHero from "../../assets/images/hero_image4.png";
import Heromobile from "../../assets/images/bsc__nutrition--hero-mbl-img.png";
import { Link } from "@remix-run/react";

export default function Banner() {
  return (
    <div className="text-white tracking-normal font-medium">
      <section className="relative w-full h-screen">
        <div className="h-screen">
          <img
            src={Heromobile}
            alt="Hero1-image"
            loading="eager"
            width={390}
            height={705}
            className="hidden h-full w-full object-cover aspect[390/705] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem] max-sm:block"
          />
          <img
            src={AboutHero}
            alt="Hero1-image"
            loading="lazy"
            width={1440}
            height={735}
            className="h-full w-full object-cover aspect[1440/735] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem] max-sm:hidden"
          />
        </div>

        <div className="bottom-16 absolute px-16 space-y-4 max-62rem:px-8 max-md:bottom-6 max-md:px-6 max-md:space-y-3.5">
          <button className="bg-deep_red py-1 px-3 text-heritage_gold text-body_l">
            3 Years
          </button>
          <h2 className="text-h2 pr-3 max-md:text-h3">
            B.Sc. NUTRITION, FSM & DIETETICS
          </h2>
          <p className="text-body_m font-normal max-md:text-sm">
            The Department of Home Science at SACAS offers a comprehensive
            Nutrition, Food Service Management, and Dietetics program designed
            for students passionate about nutritional science, dietetics, and
            food service management.
          </p>
          <div className="flex gap-2 items-center flex-wrap">
            <Link>
              <button className="text-body_m text-center border border-white px-6 py-2">
                CONTACT
              </button>
            </Link>
            <Link>
              <button className="text-body_m text-deep_red text-center bg-white px-6 py-2">
                EXPLORE <span className="max-md:hidden">CURRICULUM</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <ul className="text-body_m px-8 flex py-10 bg-deep_red items-center gap-10 justify-center max-62rem:gap-6 max-md:flex-wrap max-sm:gap-12 max-md:py-4">
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#overview">OVERVIEW</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#academics">ACADEMICS</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-md:after:hidden">
          <a href="#publications">PUBLICATIONS</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
      </ul>
    </div>
  );
}
