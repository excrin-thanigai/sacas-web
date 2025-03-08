import Icons from "../../icons";
import Director from "../../assets/images/director.png";
import Correspondent from "../../assets/images/correspondent.png";
import Principal from "../../assets/images/principal.png";

export default function AdministrationDesk() {
  const details = [
    {
      image: Correspondent,
      name: "Thiru. P.Venkatesh Raja",
      title: "Correspondent's Desk",
      message: [
        "To transform our institution into quality education centre imparting updated knowledge with character building. To create an excellent teaching and learning environment for our staff and students to realize their full potential thus enabling them to contribute positively to the community. To significantly enhance the self-confidence level for developing creative skills of staff and students.",
      ],
    },
    {
      image: Director,
      name: "Dr. V. Sayi Sathyavathi",
      title: "Director's Desk",
      message: [
        "SACAS strives to provide benchmarked affordable education to the deserving youth residing in the rural and semi-urban areas. We believe in ensuring development of the students through academics entwined with value education, sports, moral responsibility and ethical standards. With committed efforts we work towards realizing our motto, “You Predict, Together We Create.”",
      ],
    },
    {
      image: Principal,
      name: "Dr. Malathi Selvakkumar",
      title: "Principal's Desk",
      message: [
        "At SACAS, we empower students to be lifelong learners, critical thinkers, and change-makers with strong ethical values. Our student-centric approach nurtures skills, encourages excellence, and unlocks untapped potential through diverse platforms.",
        "Education, to us, is a shared commitment between teachers, students, and parents. We shape future leaders—whether high-performing employees or innovative entrepreneurs—through holistic learning in academics, personality development, sports, and social responsibility.",
        "With a blend of traditional, gamified, and activity-based teaching, SACAS fosters balanced, mature individuals ready to make a difference. Step into SACAS and embrace a world of growth and positivity!",
      ],
    },
  ];

  return (
    <>
      {details.map((detail, i) => {
        const isEven = i % 2 === 0; // Check if the index is even

        return (
          <section
            id="board-of-trustees"
            key={i}
            className={`max-w-[110rem] w-full m-auto py-16 px-4 lg:py-20 lg:px-16  flex flex-row max-62rem:flex-col items-center gap-10 p-6 ${
              isEven ? "bg-white" : "bg-neutral-50"
            }`}>
            {isEven ? (
              <>
                <div className="rounded-br-[4.8rem] max-w-[24rem] overflow-hidden">
                  <img
                    src={detail.image}
                    alt={`${detail.name}-image`}
                    loading="lazy"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-center text-off_black">
                    <Icons name="D_vector" width={12} height={12} />
                    <h3 className="text-h3 font-medium">{detail.title}</h3>
                  </div>
                  {detail.message.map((paragraph, i, arr) => (
                    <div key={i}>
                      <p className="text-body_l font-normal">{paragraph}</p>
                    </div>
                  ))}
                  <p className="text-body_l font-medium">{detail.name}</p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="flex gap-3 items-center text-off_black">
                    <Icons name="D_vector" width={12} height={12} />
                    <h3 className="text-h3 font-medium">{detail.title}</h3>
                  </div>
                  {detail.message.map((paragraph, i, arr) => (
                    <div key={i}>
                      <p className="text-body_l font-normal">{paragraph}</p>
                    </div>
                  ))}
                  <p className="text-body_l font-medium">{detail.name}</p>
                </div>
                <div className="rounded-br-[4.8rem] max-w-[24rem] overflow-hidden">
                  <img
                    src={detail.image}
                    alt={`${detail.name}-image`}
                    loading="lazy"
                  />
                </div>
              </>
            )}
          </section>
        );
      })}
    </>
  );
}
