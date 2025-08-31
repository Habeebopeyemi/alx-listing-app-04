import React, { useState } from "react";
import Image from "next/image";
import SUITECASEICON from "@/public/assets/images/svgs/case.svg";
import SEARCHICON from "@/public/assets/images/svgs/Magnifer.svg";
import PROFILE from "@/public/assets/images/svgs/profile.svg";
import LOGO from "@/public/assets/images/svgs/alx.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ACCOMMODATIONCATEGORIES } from "@/constants/index";
import { AccommodationTypes } from "@/interfaces";

const Header: React.FC = () => {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);

  return (
    <header>
      <div className="w-full flex justify-center gap-3 p-3 bg-[#34967C]">
        <span>
          <Image src={SUITECASEICON} alt="suite case" />
        </span>
        Overseas trips? get the latest information on travel guides
        <span className="bg-[#161117] px-2 border-0 rounded-full">
          More Info
        </span>
      </div>
      <div className="w-full flex justify-between items-center px-5 py-2 bg-white border-b-1 border-gray-300">
        <div className="hidden sm:block">
          <Image src={LOGO} alt="company logo" />
        </div>
        <div className="basis-[85%] gap-2 sm:basis-[60%] max-w-2xl flex items-center sm:gap-3 border-1 border-gray-200 rounded-full">
          <div className="w-full">
            <form className="w-full flex justify-between items-center gap-2 py-1 px-2">
              <div className="basis-[90%] grid grid-cols-4 gap-2">
                <div className="pl-2">
                  <label className="text-black text-[12px]">Location</label>
                  <input
                    type="text"
                    placeholder="Search for destination"
                    className="text-gray-400 text-[12px] focus:outline-none"
                  />
                </div>
                <div className="text-center before:content-['|'] before:text-gray-400 before:px-2">
                  <label className="text-black text-[12px]">Check in</label>
                  <DatePicker
                    selected={checkinDate}
                    onChange={(date: Date | null) => setCheckinDate(date)}
                    placeholderText="Add date"
                    dateFormat="yyyy-MM-dd"
                    className="text-[12px] text-center text-black bg-transparent border-gray-300 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <div className="text-center before:content-['|'] before:text-gray-400 before:px-2">
                  <label className="text-black text-[12px]">Check out</label>
                  <DatePicker
                    selected={checkoutDate}
                    onChange={(date: Date | null) => setCheckoutDate(date)}
                    placeholderText="Add date"
                    dateFormat="yyyy-MM-dd"
                    className="text-[12px] text-center text-black bg-transparent border-gray-300 rounded-md w-full placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <div className="text-center before:content-['|'] before:text-gray-400 before:px-2">
                  <label className="text-black text-[12px]">People</label>
                  <input
                    type="text"
                    placeholder="Add guest"
                    className="text-gray-400 text-center text-[12px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="bg-orange-300 rounded-[50%] p-2">
                <button type="submit" className="block">
                  <Image src={SEARCHICON} alt="search icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:hidden border-[0.5px] border-[#34967C] bg-[#34967C] rounded-[50%]">
          <button type="submit" className="block">
            <Image src={PROFILE} alt="search icon" />
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center sm:basis-[20%] gap-2">
          <button className="basis-[50%] p-3 bg-[#34967C] border-[0.5px] rounded-full">
            Sign in
          </button>
          <button className="basis-[50%] p-3 text-black border-gray-300 border-[0.5px] rounded-full">
            Sign up
          </button>
        </div>
      </div>
      <ul className="w-full flex justify-evenly bg-white gap-2 px-5 py-2 overflow-hidden">
        {ACCOMMODATIONCATEGORIES.map((type: AccommodationTypes, _: number) => {
          return (
            <li
              key={type.id}
              className="flex flex-col items-center text-gray-400">
              <Image src={type.image} alt={type.name} width={24} height={24} />
              <span className="text-[12px]">{type.name}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
