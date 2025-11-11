import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TopNavigation({ view }) {
  const [arrow, setArrow] = useState("down");
  return (
    <div className="row-start-1 row-end-2 col-span-full bg-background border-b border-b-accent/20 flex flex-row items-center px-5 py-3 relative text-textPrimary ">
      <div className="m-0 text-lg">
        <b>Form </b>- {view}
      </div>
      <div className="ml-3 relative flex flex-row items-center justify-start w-[65%] ">
        <div
          className=" cursor-pointer"
          onClick={() => setArrow(arrow === "right" ? "down" : "right")}
        >
          {arrow === "right" ? <ChevronRight /> : <ChevronDown />}
        </div>
        {arrow === "right" ? (
          <div className="flex max-w-full h-full flex-row items-center ml-1 bg-blue-950/10 py-1 px-2  rounded-sm text-sm text-blue-900 overflow-y-auto">
            <div className="mx-1 bg-offwhite/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              dodo_Salesv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              IPrimus_Salesv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              DPG_Servicev5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              dodo_Servicev5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              iPrimus_Servicev5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              dodo_Techv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              iPrimus_Techv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              dodo_Activationsv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              iPrimus_Activationsv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              Credit_Solutionsv5_Test
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              Hardshipsv5
            </div>
            <div className="mx-1 bg-white/20 hover:bg-white/80 px-2 text-black rounded-md cursor-pointer w-[30] text-center">
              Back_of_Housev5
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center pr-4 ">
        <svg
          width="141"
          height="32"
          fill="#114b95"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M132.958 13.613l-3.973-.77c-1.903-.37-2.995-1.51-2.995-3.127 0-2.21 2.205-3.531 4.337-3.531 4.148 0 4.944 3.296 5.062 3.957l.032.178 5.196-1.658-.02-.105c-.351-1.773-2.131-7.558-10.31-7.558-5.531 0-10.03 4.092-10.03 9.122 0 4.255 2.825 7.376 7.559 8.35l3.973.81c2.102.425 3.357 1.655 3.357 3.29 0 2.071-1.765 3.41-4.497 3.41-4.17 0-5.887-2.73-6.103-5.285l-.028-.406-5.355 1.706.011.101c.246 2.29 1.351 4.517 3.031 6.112 2.065 1.962 4.971 2.998 8.403 2.998 3.116 0 5.779-.974 7.702-2.815 1.709-1.639 2.69-3.893 2.69-6.186 0-4.328-3.082-7.621-8.042-8.593zm-23.011 6.242c0 3.478-2.184 5.64-5.7 5.64-3.492 0-5.661-2.162-5.661-5.64V1.567h-5.774V20.26c0 3.358 1.185 6.176 3.426 8.15 2.048 1.804 4.892 2.797 8.009 2.797 3.134 0 5.991-.993 8.043-2.797 2.245-1.972 3.431-4.79 3.431-8.15V1.567h-5.774v18.288zM84.046 19.7c-.387 1.36-2.1 5.794-7.873 5.794-5.719 0-8.711-4.714-8.711-9.37 0-6.523 4.474-9.493 8.63-9.493 5.685 0 7.288 3.992 7.713 5.709l.03.123 5.442-1.735-.026-.108C88.13 5.97 84.085 1 76.093 1c-7.08 0-14.606 5.3-14.606 15.124 0 8.74 6.177 15.083 14.686 15.083 8.015 0 12.163-5.314 13.278-9.864l.027-.11-5.376-1.71-.056.177zM43.09 7.764c2.212 0 3.945-1.714 3.945-3.903C47.035 1.697 45.302 0 43.09 0c-2.19 0-3.904 1.697-3.904 3.861 0 2.189 1.715 3.903 3.904 3.903zm-8.529 3.604h.016a3.883 3.883 0 002.756-1.178c1.563-1.58 1.589-4.03.059-5.578a3.741 3.741 0 00-2.726-1.127c-1.023.016-2.005.448-2.765 1.216a3.995 3.995 0 00-1.18 2.77 3.822 3.822 0 001.12 2.75 3.802 3.802 0 002.72 1.147zm.349 4.653c0-2.236-1.695-3.986-3.861-3.986-2.143 0-3.821 1.75-3.821 3.986 0 2.212 1.678 3.945 3.821 3.945 2.166 0 3.862-1.733 3.862-3.945zm-3.069 5.758a3.806 3.806 0 00-1.115 2.755c.015 1.034.442 2.026 1.203 2.794.748.756 1.722 1.18 2.74 1.191h.046c1.004 0 1.954-.4 2.677-1.13a3.884 3.884 0 001.134-2.765 3.963 3.963 0 00-1.165-2.785c-1.563-1.58-3.987-1.605-5.52-.06zm11.29 2.457c-2.212 0-3.945 1.715-3.945 3.903 0 2.165 1.733 3.861 3.945 3.861 2.19 0 3.905-1.696 3.905-3.861 0-2.188-1.715-3.902-3.905-3.902zm8.529-3.603h-.015a3.882 3.882 0 00-2.756 1.177c-1.563 1.58-1.59 4.03-.06 5.579a3.729 3.729 0 002.667 1.128h.06c1.022-.017 2.004-.449 2.764-1.217 1.549-1.565 1.575-3.99.06-5.521a3.803 3.803 0 00-2.72-1.146zm3.414-8.599c-2.166 0-3.862 1.733-3.862 3.945 0 2.236 1.696 3.987 3.862 3.987 2.142 0 3.82-1.751 3.82-3.987 0-2.212-1.678-3.945-3.82-3.945zm-3.401-.67c.98 0 1.952-.38 2.707-1.142 1.515-1.531 1.477-3.969-.087-5.55-1.549-1.564-3.95-1.59-5.464-.06a3.887 3.887 0 00-1.134 2.765 3.965 3.965 0 001.165 2.785c.793.801 1.806 1.202 2.813 1.202zM13.654 22.739L6.341 1.687l-.028-.08H0L10.574 30.52l.028.079h5.863L27.108 1.607h-6.112l-7.342 21.132z"></path>
        </svg>
      </div>
    </div>
  );
}
