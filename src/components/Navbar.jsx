import React, { useState } from "react";

const Navbar = () => {
  const reload = () => {
    window.location.reload();
  };

  const [menu, setmenu] = useState("-translate-y-full");

  return (
    <header className="w-full py-4 px-[20px] lg:px-[64px]">
      <div className="w-full flex justify-between">
        <img
          src="/logo-black.svg"
          alt="logo"
          height={20}
          width={99.12}
          onClick={reload}
          className="cursor-pointer"
        />

        {/* for mobile view */}
        <div className="w-fit h-fit block md:hidden">
          <button
            className="bg-text p-[12px] rounded-[42px] w-[60px] h-[45px] border border-[#1d1e1c] grid place-items-center"
            onClick={() => {
              setmenu("translate-y-0");
            }}
          >
            <img src="/menu.svg" alt="hamburger menu" height={18} width={24} />
          </button>
        </div>
        <div
          className={`bg-text absolute inset-0 h-screen w-screen px-[20px] py-4 ${menu} block md:hidden transition duration-500`}
        >
          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <img
                src="/logo-white.svg"
                alt="logo"
                height={20}
                width={99.12}
                onClick={reload}
                className="cursor-pointer"
              />
              <div className="w-fit h-fit">
                <button
                  className="w-[60px] h-[40px] bg-transparent rounded-[42px] grid place-items-center"
                  onClick={() => {
                    setmenu("-translate-y-full");
                  }}
                >
                  <img src="/cross.svg" alt="cross" height={20} width={20} />
                </button>
              </div>
            </div>
            <div className="py-[24px]">
              <div className="flex flex-col gap-y-[16px]">
                <h2 className="text-[48px] font-bold text-white">
                  <a href="#about" className="neue">
                    About
                  </a>
                </h2>
                <h2 className="text-[48px] font-bold text-white">
                  <a href="#pricing" className="neue">
                    Pricing
                  </a>
                </h2>
                <h2 className="text-[48px] font-bold text-white">
                  <a href="#blog" className="neue">
                    Blog
                  </a>
                </h2>
                <h2 className="text-[48px] font-bold text-white">
                  <a href="#events" className="neue">
                    Events
                  </a>
                </h2>
              </div>
              <div className="w-full flex gap-x-[24px] justify-end items-center fixed bottom-6 right-5">
                <button className="w-[88px] h-[45px] grid place-items-center text-white bg-text font-[600] text-sm border border-text rounded-[42px]">
                  <a href="#signup">Sign Up</a>
                </button>
                <button className="w-[88px] h-[45px] grid place-items-center text-text bg-white font-[600] text-sm border border-white rounded-[42px]">
                  <a href="#login">Log In</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile view */}

        {/* for desktop view */}
        <div className="w-fit md:flex gap-x-[48px] justify-between items-center hidden">
          <div className="w-fit flex gap-x-[48px] justify-between items-center">
            <a href="#about" className="text-sm">
              About
            </a>
            <a href="#pricing" className="text-sm">
              Pricing
            </a>
            <a href="#blog" className="text-sm">
              Blog
            </a>
            <a href="#events" className="text-sm">
              Events
            </a>
          </div>
          <div className="w-fit flex gap-x-[24px]">
            <button className="w-[88px] h-[45px] grid place-items-center font-[600] text-sm border border-text rounded-[42px]">
              <a href="#login">Log In</a>
            </button>
            <button className="w-[88px] h-[45px] grid place-items-center text-white bg-text font-[600] text-sm border border-text rounded-[42px]">
              <a href="#sign-up">Sign Up</a>
            </button>
          </div>
        </div>
        {/* for desktop view */}
      </div>
    </header>
  );
};

export default Navbar;
