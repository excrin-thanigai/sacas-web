import HeroImage from "../../assets/images/hero_image3.png";
import Icons from "../../icons";

export default function Banner() {
  return (
    <div>
      <section className="tracking-normal text-white font-medium relative w-full h-screen">
        {/* banner-image  */}
        <div className="h-screen">
          <img
            src={HeroImage}
            alt="Hero1-image"
            width={1440}
            height={735}
            className="h-full w-full object-cover aspect[1440/735] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem]"
          />
        </div>

        <div className="bottom-16 absolute px-16 space-y-4 max-62rem:px-8 max-md:bottom-6 max-md:px-6 max-md:space-y-3.5">
          <div className="max-md:hidden">
            <Icons name="banner_logo" width={56} height={64} />
          </div>
          <h2 className="text-h2  pr-3 max-md:text-h3">Highlights of SACAS</h2>
          <p className="text-body_m font-normal max-md:text-sm">
            SACAS offers the students an advantageous atmosphere with
            state-of-the-art facilities, distinguished mentors, and a pleasant
            educational environment. The institution takes responsibility for
            the employability and communication skills of students. The focus is
            on shaping students to become self-disciplined, independent, and
            self-confident.
          </p>

          <button className="text-body_m text-deep_red text-center bg-white px-6 py-2">
            APPLY NOW
          </button>
        </div>
      </section>

      <ul className="text-body_m font-medium tracking-normal text-white px-16 flex py-10 bg-deep_red items-center gap-16 justify-center  max-62rem:gap-6 max-md:flex-wrap max-sm:gap-12 max-md:py-4">
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#history">HISTORY</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#vision-mission">VISION & MISSION</a>
        </li>
        <li className="">
          <a href="#board-of-trustees">BOARD OF TRUSTEES</a>
        </li>
      </ul>
    </div>
  );
}
