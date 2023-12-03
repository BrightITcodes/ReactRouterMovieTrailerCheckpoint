import React from "react";

export const NavBar = () => {
  return (
    // simple navBAr
    <div className="w-full h-[20vh]">
      <nav className="shadow-xl p-2 flex justify-center gap-5 items-center bg-[#003f2062]">
        <img
          src="https://th.bing.com/th/id/R.a8060aa52d420712a3b499b55d4bac90?rik=IlcXfB5HfQ8XEQ&pid=ImgRaw&r=0"
          alt=""
          className="w-20"
        />
        <h1 className="text-4xl sm:text-6xl italic font-bold">Amazon Studio</h1>
      </nav>
    </div>
  );
};
