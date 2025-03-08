import { formatDate } from "../../../lib/utils";
import he from "he";
import { Link } from "@remix-run/react";

import "swiper/css";
import "swiper/css/pagination";
import Icons from "../../icons";

export default function Events({ events }) {
  if (!events.length) {
    return <p className="p-7">No events available.</p>;
  }

  return (
    <>
      <div className="space-y-8">
        <div className="relative max-md:flex gap-3 hidden">
          <h4 className="font-semibold text-h4 text-off_black uppercase relative after:content-[''] after:w-14 after:h-[0.125rem] after:bg-heritage_gold after:absolute after:left-full after:top-1/2 after:ml-3 after:-translate-y-1/2">
            Events
          </h4>
        </div>
        <div className="max-md:hidden flex justify-between items-center">
          <h2 className="uppercase text-h2 font-medium flex gap-3">
            <span className="max-md:hidden">
              <Icons name="heading-vector" width={19} height={20} />
            </span>
            Events
          </h2>
          <Link to="/events" className="h-fit ">
            <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
              All Events
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.slice(0, 3).map((item) => {
            const { day, rest } = formatDate(item.date);
            return (
              <Link
                to={`/events/${item.slug}`}
                key={item.id}
                className="min-h-[20rem]">
                <div
                  className="border border-opacity-50 scale-[0.98] border-off_black bg-cover bg-center bg-no-repeat h-full w-full flex flex-col justify-between"
                  style={{
                    backgroundImage: `linear-gradient(#00000080 50%, #00000080 0%), url(${item.imageUrl})`,
                  }}>
                  <div className="p-3  flex justify-between items-center">
                    <div>
                      <span className="text-heritage_gold text-h3 font-medium ">
                        {day}
                      </span>
                      <br />
                      <span className="text-white text-body_m">{rest}</span>
                    </div>
                  </div>

                  <div className="text-white bg-off_black p-3 ">
                    <h2 className="text-body_m font-normal line-clamp-2 ">
                      {he.decode(item.title.rendered)}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link to="/events" className="max-sm:flex justify-center hidden">
          <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
            View All
          </button>
        </Link>
      </div>
    </>
  );
}
