// import BannerImage from "../assets/images/hero_image5.png";
// import Icons from "../icons/index";

// export default function Banner() {
//   return (
//     <>
//       <section className="relative w-full h-screen">
//         <div className="h-screen">
//           <img
//             src={BannerImage}
//             alt="Hero1-image"
//             width={1710}
//             height={613}
//             className="h-full w-full object-cover aspect[1710/613] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem]"
//           />
//         </div>

//         <div className="bottom-16 absolute px-16 space-y-4 max-62rem:px-8 max-md:bottom-6 max-md:px-6 max-md:space-y-3.5">
//           <div className="max-md:hidden">
//             <Icons name="about-logo" width={56} height={64} />
//           </div>
//           <h2 className="uppercase text-h2 font-medium tracking-normal  text-white pr-3 max-md:text-h3">
//             Placements
//           </h2>
//           <p className="text-body_m font-normal text-white tracking-normal max-md:text-sm">
//             Get all important updates, notices, and announcements in one place.
//             Stay informed about events, academic schedules, deadlines, and other
//             essential information to ensure you never miss out.
//           </p>

//           <button className="text-body_m font-medium text-deep_red tracking-normal text-center bg-white px-6 py-2">
//             CONTACT
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

import Icons from "../icons/index";

export default function Banner({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
  logoName = "about-logo",
}) {
  return (
    <section className="relative w-full h-screen">
      <div className="h-screen">
        <img
          src={imageSrc}
          alt="Banner Image"
          width={1710}
          height={613}
          className="h-full w-full object-cover aspect[1710/613] rounded-br-[12rem] border border-heritage_gold max-md:rounded-br-[7rem]"
        />
      </div>

      <div className="bottom-16 absolute px-16 space-y-4 max-62rem:px-8 max-md:bottom-6 max-md:px-6 max-md:space-y-3.5">
        <div className="max-md:hidden">
          <Icons name={logoName} width={56} height={64} />
        </div>
        <h2 className="uppercase text-h2 font-medium tracking-normal text-white pr-3 max-md:text-h3">
          {title}
        </h2>
        <p className="text-body_m font-normal text-white tracking-normal max-md:text-sm max-w-[47rem]">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="text-body_m font-medium text-deep_red tracking-normal text-center bg-white px-6 py-2"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
