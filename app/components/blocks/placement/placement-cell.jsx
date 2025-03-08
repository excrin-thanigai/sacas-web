import PlacementCellImg from "../../assets/images/placement-cell.png";
import Icons from "../../icons";
import Recruiter1 from "../../assets/images/recruiter-1.png";
import Recruiter2 from "../../assets/images/recruiter-2.png";
import Recruiter3 from "../../assets/images/recruiter-3.png";
import Recruiter4 from "../../assets/images/recruiter-4.png";
import Recruiter5 from "../../assets/images/recruiter-5.png";
const placementDetails = [
  {
    value: "08 LPA",
    label: "Highest National Package",
  },
  {
    value: "15.5 LPA",
    label: " Highest Int. Package",
  },
  {
    value: "300+",
    label: "Companies Visited",
  },
  {
    value: "150+",
    label: "MNCs Recruited",
  },
];
const recruiters = [
  Recruiter1,
  Recruiter2,
  Recruiter3,
  Recruiter4,
  Recruiter5,
  Recruiter1,
];
export default function PlacementCell() {
  return (
    <section className="tracking-normal text-off_black  max-w-[110rem] w-full m-auto  py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-10">
        <div className="flex gap-10 max-62rem:flex-col">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="uppercase text-h2 max-62rem:text-h3 font-medium flex gap-3">
                <span>
                  <Icons name="heading-vector" width={19} height={20} />
                </span>
                Placement Cell
              </h2>

              <p className="text-body_m font-normal">
                At SACAS, the Placement Cell plays a pivotal role in bridging
                the gap between academia and industry. We ensure our students
                are well-equipped with the skills, knowledge, and confidence to
                excel in the competitive job market.
              </p>
              <button className="bg-deep_red text-white uppercase py-3 px-6 font-medium text-body_m">
                Contact
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {placementDetails.map((details) => {
                return (
                  <div className="space-y-2 p-3 border border-neutral-400">
                    <h6 className="text-deep_red text-h3 font-medium text-center">
                      {details.value}
                    </h6>
                    <p className="text-off_black text-body_l text-center">
                      {details.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-[49.5rem]">
            <img
              src={PlacementCellImg}
              className="object-cover w-full h-full"
              alt="placement-cell-image"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-center text-deep_red font-semibold text-body_l">
            Some of Our Recruiters
          </h5>
          <div className="flex gap-6 flex-wrap justify-center">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className=" w-[9rem] h-[72px] sm:w-[11.25rem] sm:h-[6.25rem] flex items-center justify-center">
                <img
                  src={recruiter}
                  alt="recruiter"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
