import { formatDate } from "../../../lib/utils";
import he from "he";
import { Link } from "@remix-run/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Icons from "../../icons";
import Events from "../homepage/events";

export default function AnnouncementsAndEvents({ events, announcements }) {
  if (!events.length) {
    return <p className="p-7">No events available.</p>;
  }

  return (
    <>
      <section className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16 space-y-8 ">
        <div className="space-y-8 announcements">
          <div className="relative max-md:flex gap-3 hidden">
            <h4 className="font-semibold text-h4 text-off_black uppercase relative after:content-[''] after:w-14 after:h-[0.125rem] after:bg-heritage_gold after:absolute after:left-full after:top-1/2 after:ml-3 after:-translate-y-1/2">
              Announcement
            </h4>
          </div>
          <div className="max-md:hidden flex justify-between items-center">
            <h2 className="uppercase text-h2 font-medium flex gap-3">
              <span>
                <Icons name="heading-vector" width={19} height={20} />
              </span>
              Announcement
            </h2>
            <Link to="/announcements" className="h-fit ">
              <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
                View All
              </button>
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            touchStartPreventDefault={false}
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
          >
            {announcements.map((item) => {
              const { day, rest } = formatDate(item.date);

              return (
                <SwiperSlide key={item.id}>
                  <div className="relative p-3 border border-opacity-50 scale-[0.98] border-off_black space-y-4 min-h-[12.5rem] bg-white group overflow-hidden transition-all duration-[2000ms] ease-in-out">
                    <div className="absolute top-0 left-1/2 w-[150%] h-[200%] bg-deep_red rounded-[50%] translate-x-[-50%] translate-y-[-100%] scale-0 group-hover:translate-y-[50%] group-hover:scale-[2.5] transition-transform duration-[2000ms] ease-in-out"></div>

                    <div className="relative flex justify-between items-center z-10">
                      <div>
                        <span className="text-deep_red text-h3 font-medium group-hover:text-heritage_gold transition-colors duration-[2000ms]">
                          {day}
                        </span>
                        <br />
                        <span className="text-off_black text-body_m group-hover:text-white transition-colors duration-[2000ms]">
                          {rest}
                        </span>
                      </div>
                      <Link
                        to={`/announcements/${item.slug}`}
                        className="block text-deep_red group-hover:bg-white p-2 transition-colors duration-[2000ms]"
                      >
                        <Icons name="arrow_top_right" width={14} height={14} />
                      </Link>
                    </div>

                    <hr className="relative h-[1px] bg-deep_red border-0 group-hover:bg-heritage_gold transition-all duration-[2000ms] z-10" />

                    <h2 className="relative text-off_black text-body_m font-normal line-clamp-3 group-hover:text-white transition-colors duration-[2000ms] z-10">
                      {he.decode(item.title.rendered)}
                    </h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Link
            to="/announcements"
            className="max-sm:flex justify-center hidden"
          >
            <button className="uppercase text-deep_red py-2 px-4 border border-deep_red text-body_m font-medium  w-fit">
              View All
            </button>
          </Link>
        </div>

        <Events events={events} />
      </section>
    </>
  );
}
