import Recruiter from "../../assets/images/Recruiters-image.png";
import Icons from "../../icons";
import Recruiter1 from "../../assets/images/recruiter-1.png";
import Recruiter2 from "../../assets/images/recruiter-2.png";
import Recruiter3 from "../../assets/images/recruiter-3.png";
import Recruiter4 from "../../assets/images/recruiter-4.png";
import Recruiter5 from "../../assets/images/recruiter-5.png";

export default function Recruiters() {
  const recruiters = [
    Recruiter1,
    Recruiter2,
    Recruiter3,
    Recruiter4,
    Recruiter5,
    Recruiter1,
    Recruiter4,
    Recruiter5,
    Recruiter1,
  ];
  return (
    <section className="tracking-normal px-16 py-20 max-w-[90rem] w-full m-auto max-1280:px-8 max-62rem:px-8 max-md:px-4 max-md:py-16">
      <div className="flex gap-10 justify-between  items-center">
        <div className="flex-1 flex flex-col justify-between gap-6 max-md:items-center">
          <div className="space-y-6 max-md:space-y-8">
            <h2 className="uppercase text-h2 font-medium text-off_black flex gap-3 max-md:text-h3">
              <span className="max-md:hidden">
                <Icons name="heading-vector" width={19} height={20} />
              </span>
              Recruiters at SACAS
            </h2>
            <p className="text-off_black  font-normal text-body_m max-md:hidden">
              At SACAS – Best Arts & Science College in Chennai, our Directorate
              of Training & Placements bridges the gap between academia and
              industry. We collaborate with leading companies to understand
              industry expectations and design Pre-Placement Training Programs
              that equip students with the skills needed for successful careers.
              Our commitment to career excellence ensures that SACAS graduates
              are highly sought after by top recruiters.
            </p>
            <button className="bg-deep_red py-2 px-6 text-white uppercase text-body_m font-normal max-md:hidden">
              APPLY NOW
            </button>
          </div>
          <div className="space-y-6">
            <h4 className="text-deep_red text-body_l font-semibold">
              Some of Our Recruiters
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {recruiters.map((recruiter, index) => (
                <div key={index} className=" flex items-center justify-center">
                  <img
                    src={recruiter}
                    alt="recruiter"
                    loading="lazy"
                    width={180}
                    height={100}
                    className="w-full h-full object-cover aspect-[180/100]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:hidden">
          <img
            src={Recruiter}
            alt="recruiter-image"
            loading="lazy"
            width={636}
            height={770}
            className="object-cover aspect-[636/770] rounded-br-[7rem] max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
