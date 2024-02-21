import React from "react";
import Image from "../assets/avatar.svg";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="profil"
      className="min-h-[85vh] lg:min-h-[96vh] lg:pt-28 pt-20">
      <div className="container mx-auto mt-0">
        <div className="lg:flex lg:flex-row justify-between items-center">
          {/* text */}
          <div>
            {/* My Name */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold lg:text-[80px] lg:mb-4 mb-1 leading-[1]">
              STT Restu Rahayu
            </motion.h1>
            {/* My Role */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 text-[33px] lg:text-[60px] font-secondary font-semibold leading-[1]">
              <TypeAnimation
                sequence={[
                  "Harapan Banjar",
                  2000,
                  "Baleganjur Werdi Rahayu",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* My Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2">
              Selamat datang di{" "}
              <span className="font-semibold">Restu Rahayu</span>. Nyalakan api{" "}
              <span className="font-semibold">Kreativitas🔥</span>
              dan <span className="font-semibold">Pemimpin Muda</span> yang
              menjunjung tinggi Pancasila
            </motion.p>
            {/* My Sosial */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex text-[20px] mb-5 lg:mb-0 items-center">
              <a
                href="https://www.instagram.com/resturahayyyu/"
                target="_blank"
                className="mr-5">
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@restu.rahayupp"
                target="_blank"
                className="mr-5">
                <FaTiktok />
              </a>
            </motion.div>
          </div>
          {/* foto */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:max-w-[482px]">
            <img src={Image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
