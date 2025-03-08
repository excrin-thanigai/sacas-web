import BannerImage from "../../assets/images/hero_image5.png";
import Icons from "../../icons";

export default function Banner() {
  return (
    <>
      <section className="tracking-normal text-white relative w-full h-screen">
        <div className="h-screen">
          <img
            src={BannerImage}
            alt="Hero1-image"
            loading="eager"
            width={1710}
            height={613}
            className="h-full w-full object-cover aspect[1710/613] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem]"
          />
        </div>

        <div className="bottom-16 absolute px-16 space-y-4 max-62rem:px-8 max-md:bottom-6 max-md:px-6 max-md:space-y-3.5">
          <div className="max-md:hidden">
            <Icons name="banner_logo" width={56} height={64} />
          </div>
          <h2 className="text-h2 font-medium pr-3 max-md:text-h3">
            Placements
          </h2>
          <p className="text-body_m font-normal max-md:text-sm">
            Get all important updates, notices, and announcements in one place.
            Stay informed about events, academic schedules, deadlines, and other
            essential information to ensure you never miss out.
          </p>

          <button className="text-body_m font-medium text-deep_red  text-center bg-white px-6 py-2">
            CONTACT
          </button>
        </div>
      </section>

      <ul className="text-body_m font-medium tracking-normal text-white px-16 flex py-10 bg-deep_red items-center gap-16 justify-center  max-62rem:gap-6 max-md:flex-wrap max-sm:gap-12 max-md:py-4">
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#OVERVIEW">OVERVIEW</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#ACADEMICS">ACADEMICS</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#PUBLICATIONS">PUBLICATIONS</a>
        </li>

        <li>
          <a href="#GALLERY">GALLERY</a>
        </li>
      </ul>
    </>
  );
}
