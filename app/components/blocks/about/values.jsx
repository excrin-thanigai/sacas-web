import Icons from "../../icons";
import Chairman from "../../assets/images/chairman.png";
import Founder from "../../assets/images/chairman-founder.png";
import ViceChairman from "../../assets/images/vice-chairman.png";
import Treasurer from "../../assets/images/treasurer.png";
import Secretary from "../../assets/images/secretary.png";
import JoinSecretary from "../../assets/images/joint-secretary.png";

export default function Values() {
  const values = [
    {
      heading: "Vision",
      description:
        "To create a vibrant, inclusive learning community rooted in excellence and values, fostering responsible citizenship and driving social change for a better and more equitable society.",
    },
    {
      heading: "Mission",
      description:
        "To empower young men and women with courage and commitment to face challenges, build a just society, and foster a learning space that uplifts all, especially those from underprivileged backgrounds.",
    },
    {
      heading: "Motto",
      description: "You Predict, Together We Create…",
    },
  ];
  const trustees = [
    {
      name: "Mr. D.SUDHARSSANAM",
      role: "Chairman/Founder",
      image: Founder,
    },
    {
      name: "Mr. DURAISWAMY",
      role: "Chairman",
      image: Chairman,
    },
    {
      name: "Mr. D.PARANTHAMAN",
      role: "Vice Chairman",
      image: ViceChairman,
    },
    {
      name: "Mr. D.DASARATHAN",
      role: "Secretary",
      image: Secretary,
    },
    {
      name: "Mr. S.AMARNAATH",
      role: "Treasurer/Correspondent",
      image: Treasurer,
    },
    {
      name: "Mr. S.GOPINATH",
      role: "Joint Secretary",
      image: JoinSecretary,
    },
  ];

  return (
    <section
      id="vision-mission"
      className=" max-w-[110rem] w-full m-auto bg-deep_red text-white py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-10">
        <h2 className="max-62rem:text-h3 font-medium text-h2 uppercase text-center">
          The values that drive what we teach
        </h2>

        <div className="grid max-62rem:grid-cols-1 grid-cols-2 gap-6 ">
          {values.map((value, index) => (
            <div
              key={index}
              className={`border border-white p-6 max-62rem:p-3 flex flex-col gap-4  items-center justify-center ${
                index === values.length - 1
                  ? "col-span-2 mx-auto w-1/3 max-62rem:w-full "
                  : "w-full max-62rem:col-span-2 col-span-1  "
              }`}>
              <div className="text-heritage_gold font-semibold text-h4 flex gap-2 items-center justify-center">
                <Icons name="D_vector" width={12} height={12} />
                <h6>{value.heading}</h6>
              </div>

              <p className="text-body_m text-center">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 max-sm:p-3 space-y-6">
          <div className="flex gap-2 items-center">
            <Icons name="square_circle_vector" width={24} height={24} />
            <h3 className="text-h4  font-semibold text-deep_red">
              Board of Trustees
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-sm:hidden">
            {trustees.map((trusty, index) => (
              <div key={index} className="max-w-[11.5rem] ">
                <div className="text-off_black p-2 text-center text-body_s  border border-deep_red">
                  <h6 className="font-semibold">{trusty.name}</h6>
                  <p>{trusty.role}</p>
                </div>
                <img
                  src={trusty.image}
                  alt={`${trusty.name}-image`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="max-sm:grid grid-cols-2 hidden gap-5">
            {trustees.map((trusty, index) => (
              <div key={index} className="max-w-[9.6rem] w-full">
                <div className="text-off_black p-1 text-center text-body_xs border border-deep_red">
                  <h6 className="font-semibold">{trusty.name}</h6>
                  <p>{trusty.role}</p>
                </div>
                <img
                  src={trusty.image}
                  alt={`${trusty.name}-image`}
                  loading="lazy"
                  width={385}
                  height={540}
                  className="object-cover aspect-[385/540] w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
