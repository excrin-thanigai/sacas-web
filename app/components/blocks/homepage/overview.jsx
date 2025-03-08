import Icons from "../../icons";
import OverviewImage from "../../assets/images/hero_image3.png";
import Video from "../../assets/video/SACS_hero-video.mp4";
import CircleImage1 from "../../assets/images/circle_image1.png";
import CircleImage2 from "../../assets/images/circle_image2.png";
import CircleImage3 from "../../assets/images/circle_image3.png";

export default function Overview() {
  return (
    <>
      <section className="tracking-normal max-w-[90rem] w-full m-auto bg-white px-20 py-16 max-1280:px-10 flex flex-row justify-between items-start gap-8 max-62rem:px-8 max-md:px-4 max-62rem:flex-col max-md:gap-6">
        <div className="space-y-10 w-[80%] max-62rem:w-full max-md:space-y-6">
          <h2 className="uppercase text-h2 font-medium text-off_black flex gap-3 max-md:text-h3">
            <span className="max-md:hidden">
              <Icons name="heading-vector" width={19} height={20} />
            </span>
            Empowering Education, <br></br>Enriching Lives.
          </h2>
          <div className="relative grid grid-cols-2 gap-10 w-full max-md:grid-cols-1">
            <div className="max-md:hidden">
              <img
                src={OverviewImage}
                alt="Overview-image"
                loading="lazy"
                width={553}
                height={610}
                className="rounded-b-[96rem] rounded-t-[1.5rem] aspect-[553/610] w-full h-full object-cover"
              />
            </div>
            <div className="text-center absolute inset-0 flex items-start justify-center z-10 mt-10 max-md:hidden">
              <div className="bg-white p-6 shadow-md  max-1280:p-3">
                <span className="font-medium  text-h2 text-deep_red pb-2 max-1280:text-h4">
                  1.5K+
                </span>
                <p className="text-h4 font-semibold text-off_black  pb-6 max-1024:text-body_l">
                  Students Enrolled
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src={CircleImage1}
                    alt="imCircle-Image1age"
                    loading="lazy"
                    width={53}
                    height={53}
                    className="aspect-[55/53] -ml-3"
                  />
                  <img
                    src={CircleImage2}
                    alt="Circle-Image2"
                    loading="lazy"
                    width={53}
                    height={53}
                    className="aspect-[55/53] -ml-3"
                  />
                  <img
                    src={CircleImage3}
                    alt="Circle-Image3"
                    loading="lazy"
                    width={53}
                    height={53}
                    className="aspect-[55/53] -ml-3"
                  />
                </div>
              </div>
            </div>

            <div>
              <video
                controls
                className="object-cover aspect-[523/343] w-full"
                width={523}
                height={363}>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <p className="text-base font-normal text-off_black py-8 max-md:py-6">
                With a modern campus spanning 3.43 acres, SACAS is home to
                state-of-the-art infrastructure, well-equipped labs, a digital
                library, and a dedicated team of experienced faculty. We go
                beyond textbooks, offering a dynamic learning environment that
                fosters innovation, leadership, and career readiness.
              </p>
              <button className="font-medium text-base text-white  py-2 px-6 bg-deep_red">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="text-center flex gap-8 flex-wrap w-[20%] max-62rem:gap-3 max-sm:gap-8 max-62rem:w-full">
          <div className="px-9 py-12 border border-deep_red w-[12rem] max-62rem:py-8 max-62rem:px-6 max-62rem:w-[10rem]">
            <h3 className=" font-medium text-h3 text-deep_red  pb-2">13+</h3>
            <p className="text-body_l font-normal text-off_black ">
              UGPrograms
            </p>
          </div>
          <div className="px-9 py-12 border border-deep_red w-[12rem] max-62rem:py-8 max-62rem:px-6 max-62rem:w-[10rem]">
            <h3 className=" font-medium text-h3 text-deep_red  pb-2">03+</h3>
            <p className="text-body_l font-normal text-off_black ">
              PG Programs
            </p>
          </div>
          <div className="px-9 py-12 border border-deep_red w-[12rem] max-62rem:py-8 max-62rem:px-6 max-62rem:w-[10rem]">
            <h3 className=" font-medium text-h3 text-deep_red  pb-2">100+</h3>
            <p className="text-body_l font-normal text-off_black ">
              Faculty Members
            </p>
          </div>
          <div className="px-9 py-12 border border-deep_red w-[12rem] max-62rem:py-8 max-62rem:px-6 max-62rem:w-[10rem]">
            <h3 className=" font-medium text-h3 text-deep_red  pb-2">50+</h3>
            <p className="text-body_l font-normal text-off_black ">
              Recruitment Partners
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
