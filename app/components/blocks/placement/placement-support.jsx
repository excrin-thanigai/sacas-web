import Icons from "../../icons";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_Placements", content: "SACAS_Placements" },
  ];
};

const placements_support = [
  {
    heading: "TRAINING PATTERN",
    contents: ["1st Year", "2nd Year", "3rd Year"],
  },
  {
    heading: "INTERNSHIP",
    contents: [
      "Internship AY 2022-2023",
      "Internship AY 2023-2024",
      "Internship AY 2024-2025",
    ],
  },
  {
    heading: "PLACEMENT",
    contents: [
      "Placement AY 2022 - 2023",
      "Placement AY 2023 - 2024",
      "Placement AY 2024 - 2025",
    ],
  },
];
export default function Placementsupport() {
  return (
    <section className="max-w-[110rem] w-full m-auto bg-deep_red py-16 px-4 lg:py-20 lg:px-16">
      <div className="space-y-10">
        <h2 className="uppercase text-white max-62rem:text-h3 text-h2 font-medium text-center">
          Placement Support
        </h2>

        <div className="grid max-62rem:grid-cols-1 grid-cols-3 gap-8">
          {placements_support.map((support, i) => (
            <div key={i} className="space-y-2 h-full flex flex-col">
              <div className="bg-heritage_gold p-4">
                <h4 className="text-h4 font-semibold text-deep_red text-center">
                  {support.heading}
                </h4>
              </div>

              <div className="bg-white p-6 space-y-8 flex-grow flex flex-col">
                {support.contents.map((content, index) => (
                  <p
                    key={index}
                    className="flex-grow group border border-heritage_gold p-3 text-deep_red text-body_l font-semibold flex justify-between items-center hover:bg-deep_red hover:text-white">
                    <span>{content}</span>
                    <span className="text-off_black group-hover:text-white">
                      <Icons name="right_arrow_circle" width={24} height={24} />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
