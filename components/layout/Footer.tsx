import React from "react";
import { FooterData, PolicyData } from "@/constants";
import LOGO from "@/public/assets/images/svgs/alx.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="bg-[#34967C] h-[20px]"></div>
      <div className="w-full grid grid-cols-1 px-5">
        <div className="md:flex md:gap-6">
          <div className="w-full md:basis-[30%]">
            <Image src={LOGO} alt="company logo" className="my-4" />
            <p className="text-[14px] mb-4">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-5 md:basis-[70%] md:my-6">
            {FooterData.map((footer, index) => (
              <>
                <div key={footer.title} className="mb-4">
                  <h3 className="font-extrabold mb-2">{footer.title}</h3>
                  <p className="text-[14px] mb-4">{footer.description}</p>
                  <ul className="text-[14px]">
                    {footer.links.map(link => (
                      <li key={link.name} className="mb-2">
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center py-4 border-t-[.25px] border-gray-100 md:flex-row md:justify-between">
          <div>{PolicyData.description}</div>
          <ul className="flex flex-wrap justify-center gap-4 mt-2 text-[14px]">
            {PolicyData.links.map(link => (
              <>
                <li>{link.name}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
