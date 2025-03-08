import { Link } from "@remix-run/react";
import LogoHs from "../../assets/images/logo-hs.png";
import Post1 from "../../assets/images/instapost-1.png";
import Post2 from "../../assets/images/instapost-2.png";
import Post3 from "../../assets/images/instapost-3.png";
import Post4 from "../../assets/images/instapost-4.png";

export default function NewonInsta() {
  const instaposts = [Post1, Post2, Post3, Post4];
  return (
    <div className="max-w-[110rem] w-full m-auto px-16 py-10  space-y-10 bg-neutral-50 max-62rem:px-4">
      <div className="flex gap-6 items-center max-62rem:flex-col max-62rem:items-start">
        <img
          src={LogoHs}
          alt="Logo - Dept of hs"
          className="w-24 h-24 max-62rem:w-16 max-62rem:h-16"
        />
        <div className="max-w-[1039] w-full flex flex-col gap-2">
          <h4 className="text-h4 font-semibold">Whats new on Instagram?</h4>
          <Link className="text-h4 font-semibold text-neutral-600 ">
            @_hssacas_
          </Link>
        </div>
        <button className="bg-btn_blue rounded-lg py-2 px-5 text-white h-fit">
          Follow
        </button>
      </div>
      <div className="flex gap-6 overflow-x-auto">
        {instaposts.map((post, i) => {
          return (
            <div
              key={i}
              className={`min-w-[19rem] w-full  flex items-center justify-center  px-4 max-62rem:px-0 ${
                i === 0
                  ? "border-r"
                  : i === instaposts.length - 1
                  ? "border-l"
                  : "border-l border-r"
              } border-off_black`}
            >
              <img src={post} alt="insta post" className="object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
