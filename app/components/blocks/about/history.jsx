import Icons from "../../icons";
import HistoryImg from "../../assets/images/about-history.png";

const timeline = [
  {
    year: "1996",
    desc: "Established S.A. Polytechnic College",
  },
  {
    year: "1998",
    desc: "Launched S.A. Engineering College",
  },
  {
    year: "2014",
    desc: "Started Sudharsanam Vidyaashram (CBSE School)",
  },
  {
    year: "2019",
    desc: "Founded S.A. College of Arts & Science",
  },
];

export default function History() {
  return (
    <section
      id="history"
      className=" max-w-[110rem] w-full m-auto py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-8">
        <div className="grid max-62rem:grid-cols-1 grid-cols-2 items-center ">
          <div className="space-y-6">
            <h2 className="uppercase max-62rem:text-h3 text-h2 font-medium flex gap-3">
              <span>
                <Icons name="heading-vector" width={19} height={20} />
              </span>
              History
            </h2>
            <div className="space-y-3 text-body_m">
              <p>
                S.A. College of Arts & Science (SACAS), named after Smt.
                Sakunthala Ammal, was established in 2019 under the Dharma Naidu
                Educational & Charitable Trust. The trust, founded under the
                leadership of (Late) Thiru. D. Sudharssanam, MLA, has been
                committed to providing quality education for decades.
              </p>
              <ul className="list-disc pl-5">
                <li>Sprawling 3.43-acre campus</li>
                <li>Fully digitalized library </li>
                <li>Qualified faculty</li>
                <li>Career-driven programs</li>
              </ul>
              <p>
                Affiliated with the University of Madras, SACAS currently offers
                13 undergraduate and 3 postgraduate programs, ensuring students
                are well-prepared for their future.
              </p>
            </div>
          </div>
          <div>
            <img src={HistoryImg} alt="history-right-image" />
          </div>
        </div>

        <div className="py-28 max-md:hidden">
          <div className=" relative z-20  h-[1px] flex justify-around items-center transform translate-y-1/2  bg-[linear-gradient(90deg,_rgba(126,19,29,0)_0%,_#7E131D_6%,_#7E131D_92%,_rgba(126,19,29,0)_100%)]">
            <div className="relative flex flex-col items-center flex-1">
              <div className="text-deep_red font-semibold absolute -top-10 text-body_l">
                1996
              </div>
              <div className="before:absolute before:top-1/2 before:left-1/2 before:w-6 before:h-6 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-2 before:border-deep_red after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:bg-deep_red after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2"></div>
              <div className="absolute top-5 w-0.5 h-12 bg-neutral_300"></div>
              <div className="absolute top-16 w-2 h-2 bg-neutral_300 rounded-full"></div>

              <p className="text-body_s text-off_black font-normal absolute top-24 text-center">
                Established S.A. Polytechnic College
              </p>
            </div>

            <div className="relative flex flex-col items-center z-0 flex-1">
              <p className="text-body_s text-off_black font-normal absolute bottom-20 text-center">
                Launched S.A.Engineering College
              </p>
              <div className="absolute bottom-5 w-0.5 h-12 bg-neutral_300"></div>
              <div className="absolute bottom-16 w-2 h-2 bg-neutral_300 rounded-full"></div>
              <div className="before:absolute before:top-1/2 before:left-1/2 before:w-6 before:h-6 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-2 before:border-deep_red after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:bg-deep_red after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2"></div>
              <div className="text-body_l text-deep_red font-semibold absolute top-5">
                1998
              </div>
            </div>

            <div className="relative flex flex-col items-center flex-1">
              <div className="text-body_l text-deep_red font-semibold absolute -top-10">
                2014
              </div>
              <div className="before:absolute before:top-1/2 before:left-1/2 before:w-6 before:h-6 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-2 before:border-deep_red before:z-20 after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:bg-deep_red after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:z-30"></div>
              <div className="absolute top-5 w-0.5 h-12 bg-neutral_300"></div>
              <div className="absolute top-16 w-2 h-2 bg-neutral_300 rounded-full"></div>
              <p className="text-body_s text-off_black font-normal absolute top-24 text-center">
                Started Sudharsanam Vidyaashram (CBSE School)
              </p>
            </div>

            <div className="relative flex flex-col items-center z-0 flex-1">
              <p className="text-body_s text-off_black font-normal absolute bottom-20 text-center">
                Founded S.A. College of Arts & Science
              </p>
              <div className="absolute bottom-5 w-0.5 h-12 bg-neutral_300"></div>
              <div className="absolute bottom-16 w-2 h-2 bg-neutral_300 rounded-full"></div>
              <div className="before:absolute before:top-1/2 before:left-1/2 before:w-6 before:h-6 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:border-2 before:border-deep_red after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:bg-deep_red after:rounded-full after:transform after:-translate-x-1/2 after:-translate-y-1/2"></div>
              <div className="text-body_l text-deep_red font-semibold absolute top-5">
                2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
