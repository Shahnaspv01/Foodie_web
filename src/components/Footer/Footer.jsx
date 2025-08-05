import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              FOODIE
            </h1>
            <p className="">
              © 2025 Foodie. All rights reserved.
Bringing delicious meals to your table with ease.
Follow us on Facebook, Instagram, and LinkedIn for the latest updates and offers.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>United Arab Emirates</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
                 <h1 className="sm:text-xl text-l sm:text-left text-justify mb-3 flex items-center px-4">
                Popular locations in UAE
                 </h1>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Dubai
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Karama</li>
                  <li className="cursor-pointer">Silicon Oasis</li>
                  <li className="cursor-pointer">Deira</li>
                  <li className="cursor-pointer">Business Bay</li>
                </ul>
              </div>
            </div>
            <div className="">
                <br/>
                 <br/>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Sharjah
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Musaffah</li>
                  <li className="cursor-pointer">Muweila</li>
                  <li className="cursor-pointer">Shabiya</li>
                  <li className="cursor-pointer">Al Qasimia</li>
                </ul>
              </div>
            </div>
            <div className="">
                 <br/> <br/>
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Abudhabi
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Musaffah</li>
                  <li className="cursor-pointer">Khalifa city</li>
                  <li className="cursor-pointer">Shabiya</li>
                  <li className="cursor-pointer">Abudhabi City</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;