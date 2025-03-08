import Icons from "../../icons";
import Correspondent from "../../assets/images/correspondent.png";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_Placements", content: "SACAS_Placements" },
  ];
};

export default function OurFaculty() {
  return (
    <section className="max-w-[110rem] w-full m-auto  py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-10">
        <h2 className="uppercase text-h2 max-62rem:text-h3 font-medium flex gap-3">
          <span>
            <Icons name="heading-vector" width={19} height={20} />
          </span>
          Our Faculty
        </h2>

        <div className="flex bg-neutral-50 max-62rem:flex-col">
          <div className="max-w-[24rem]">
            <img
              src={Correspondent}
              alt="faculty-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-neutral-50 p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 max-sm:flex-col">
                <h2 className="text-h2 text-off_black font-medium uppercase">
                  Mr. K.S. Prabakar
                </h2>
                <span className="bg-heritage_gold py-1 px-3 text-deep_red text-body_m font-semibold">
                  Head of Dept
                </span>
              </div>
              <h4 className="text-h4 font-semibold">
                Director - Training & Placement
              </h4>
            </div>

            <p className="text-body_m text-off_black">
              To foster a dynamic learning environment that empowers students
              with industry-relevant skills, ethical values, and a strong sense
              of purpose. Through continuous innovation in education and
              hands-on training, we aim to bridge the gap between academia and
              industry. Our focus is on enhancing students' confidence, critical
              thinking, and leadership qualities, ensuring they excel in their
              professional journeys and contribute meaningfully to society.
            </p>

            <div className="space-y-2">
              <h6 className="text-body_m font-semibold">Contact</h6>
              <div className="flex gap-3 max-sm:flex-col">
                <div className="bg-deep_red text-white py-3 px-4 flex gap-2 items-center">
                  <Icons name="book" width={24} height={24} />
                  <span>prabakarks@sacas.ac.in</span>
                </div>
                <div className="bg-deep_red text-white py-3 px-4 flex gap-2 items-center">
                  <Icons name="phone" width={24} height={24} />
                  <span>+91 72001 55332</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
