import Icons from "../../icons";
import LeafBg from "../../assets/images/background__leaf.png";
import student from "../../assets/images/scholarship_student-img.png";

export default function Scholarship() {
  return (
    <section
      id="publications"
      className="scroll-mt-24 px-16 py-20 max-62rem:px-8 max-md:px-4 max-md:py-16 space-y-10 max-md:space-y-6">
      <h2 className="uppercase text-h2 font-medium text-off_black flex  gap-3 max-md:text-h3">
        <span>
          <Icons name="heading-vector" width={19} height={20} />
        </span>
        Scholarship
      </h2>

      <div className="flex justify-between gap-8 max-md:flex-col">
        <div
          className="bg-neutral-50 flex-1  bg-center bg-cover px-12 py-10 max-md:px-4 max-md:py-6"
          style={{ backgroundImage: `url(${LeafBg})` }}>
          <div className="space-y-8 max-md:space-y-6">
            <h4 className="text-deep_red text-h4 font-semibold flex gap-2 justify-center items-center">
              <span>
                <Icons name="scholarship_merit" width={35} height={32} />
              </span>
              Merit Scholarship
            </h4>

            <div className="flex gap-8 justify-center flex-nowrap max-md:gap-4">
              <div className="">
                <h5 className="text-body_s font-semibold text-white bg-deep_red text-center py-2">
                  Kalaiselvi S<br></br>
                  <span className="font-normal">State Board</span>
                </h5>
                <img
                  src={student}
                  alt="Scholarship__student-img-1"
                  loading="lazy"
                  width={250}
                  height={301}
                  className="object-cover aspect-[250/301] w-full"
                />
              </div>

              <div>
                <h5 className="text-body_s font-semibold text-white bg-deep_red text-center py-2">
                  Kalaiselvi S<br></br>
                  <span className="font-normal">State Board</span>
                </h5>
                <img
                  src={student}
                  alt="Scholarship__student-img-1"
                  loading="lazy"
                  width={250}
                  height={301}
                  className="object-cover aspect-[250/301] w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-neutral-50 flex-1  bg-center bg-cover px-12 py-10 max-md:px-4 max-md:py-6"
          style={{ backgroundImage: `url(${LeafBg})` }}>
          <div className="space-y-8 max-md:space-y-6">
            <h4 className="text-deep_red text-h4 font-semibold flex gap-2 justify-center items-center">
              <span>
                <Icons name="bca" width={35} height={32} />
              </span>
              Sports Scholarship
            </h4>

            <div className="flex gap-8 justify-center flex-nowrap max-md:gap-4">
              <div className="">
                <h5 className="text-body_s font-semibold text-white bg-deep_red text-center py-2">
                  Oviya R V <br></br>
                  <span className="font-normal">Weight Lifter</span>
                </h5>
                <img
                  src={student}
                  alt="Scholarship__student-img-1"
                  loading="lazy"
                  width={250}
                  height={301}
                  className="object-cover aspect-[250/301] w-full"
                />
              </div>

              <div>
                <h5 className="text-body_s font-semibold text-white bg-deep_red text-center py-2">
                  Srilekha E<br></br>
                  <span className="font-normal">Kabbadi Player</span>
                </h5>
                <img
                  src={student}
                  alt="Scholarship__student-img-1"
                  loading="lazy"
                  width={250}
                  height={301}
                  className="object-cover aspect-[250/301] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="font-medium text-body_m text-white px-6 py-2 bg-deep_red">
          Apply Scholarship
        </button>
      </div>
    </section>
  );
}
