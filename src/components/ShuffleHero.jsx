import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShuffleHero = () => {
  return (
    <div className="bg-gray-800">
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto bg-gray-800 ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
        >
          <span className="block mb-4 text-xs md:text-sm text-slate-400 font-medium">
            BUILDING HAPPINESS,DELIVERING EXCELLENCE: Anmut breath new life to
            spaces,develops exceptionally
          </span>
          <h1 className="text-4xl md:text-5xl text-white font-semibold">
            Anmut Estate And Property Development
          </h1>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            We specialize in developing properties that meet the needs of modern
            society.
          </p>
          <div className="flex gap-3 md:gap-6">
            <Link
              to="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-800 rounded-lg bg-amber-300 hover:bg-yellow-500"
            >
              Learn More
              <GoChevronRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 gap-3"
            >
              Contact Us
              <IoChevronDownOutline />
            </Link>
          </div>
        </motion.div>
        <ShuffleGrid />
      </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://media.licdn.com/dms/image/D4D22AQG8PlFVxJtSRw/feedshare-shrink_800/0/1689948997077?e=1708560000&v=beta&t=Ncjm3cbCf3MF0NDZuFsEZ38z84IeGvXDcK7Ja0cUQWs",
  },
  {
    id: 2,
    src: "https://media.licdn.com/dms/image/D4D22AQGMk7UPC6m3Bw/feedshare-shrink_800/0/1694973986998?e=1708560000&v=beta&t=CvBA1KuJdJNpI5_Kx8-UrCjIVussVoFPRyR7_1659Lk",
  },
  {
    id: 3,
    src: "https://media.licdn.com/dms/image/D4D22AQE8WiVIPEnJLw/feedshare-shrink_800/0/1689347283779?e=1708560000&v=beta&t=ab27WQukCW2KNJ0sF1zUFCNQcOGqvX7oOPk_Dib1z7I",
  },
  {
    id: 4,
    src: "https://media.licdn.com/dms/image/D4D0BAQHIT4EzNCCjWA/company-logo_200_200/0/1687533863590?e=1714003200&v=beta&t=xRobOnKe9yTJCPX1wfHLMC_z22Cf9P6j9s3_ViQvoN8",
  },
  {
    id: 5,
    src: "https://media.licdn.com/dms/image/D4D22AQFCmXRlEyfR6Q/feedshare-shrink_800/0/1705069500043?e=1708560000&v=beta&t=ApbCOlYTLxKDH9flBDQEPDdoHWqgT8-Ol7kbS1ieUys",
  },
  {
    id: 6,
    src: "https://media.licdn.com/dms/image/D4D22AQFL0QTMimegSw/feedshare-shrink_800/0/1700814436825?e=1708560000&v=beta&t=BaMHUUU2DJYOxOcTPpUlMmw5TMgr5p7Qv9WQhlfBRY8",
  },
  {
    id: 7,
    src: "https://media.licdn.com/dms/image/D4D22AQFxwWyu9WG3dQ/feedshare-shrink_800/0/1698861517401?e=1708560000&v=beta&t=bV3lGU8JH7D7roBvwqU5tzY8BmOH_ozWFvJ52t8_mao",
  },
  {
    id: 8,
    src: "https://media.licdn.com/dms/image/D4D22AQFq4zlzXnp0lw/feedshare-shrink_800/0/1688999729670?e=1708560000&v=beta&t=zAb3-_PhiikbvbS-Ep2mUZO5Pl5JSxggCiTFNDwDewg",
  },
  {
    id: 9,
    src: "https://media.licdn.com/dms/image/D4D22AQHsebMYHJxyRQ/feedshare-shrink_800/0/1690205446429?e=1708560000&v=beta&t=x1UCEMYcu4b0GfzyiDVZbWht6aRXufpjohhite1nYKQ",
  },
  {
    id: 10,
    src: "https://media.licdn.com/dms/image/D4D22AQGV6dP1BCo_Xg/feedshare-shrink_800/0/1694620440102?e=1708560000&v=beta&t=inmd9CqSxVtiE3d19C3iwF8uQMB6CNMQpHMSbGpz1n8",
  },
  {
    id: 11,
    src: "https://media.licdn.com/dms/image/D4D22AQHyVXPT0O8LqQ/feedshare-shrink_800/0/1694974039419?e=1708560000&v=beta&t=F8CYLw5_mJYCVQHHvRq6hHT1FKpgr98LF3oYOPEu0IM",
  },
  {
    id: 12,
    src: "https://media.licdn.com/dms/image/D4D22AQE2zEO71bD0dA/feedshare-shrink_800/0/1701106337374?e=1708560000&v=beta&t=Fus44jXUjdkbWu-osEK1R1qqzs9hUXRUDahfVUR-oh0",
  },
  {
    id: 13,
    src: "https://media.licdn.com/dms/image/D4D22AQGdHkbb2cVf8A/feedshare-shrink_800/0/1702380351142?e=1708560000&v=beta&t=e7vF0vK_pVnUbrjw3x0kwVP8ex5_753DwwfP8lQKZW8",
  },
  {
    id: 14,
    src: "https://media.licdn.com/dms/image/D4D22AQFe05lJ7lCg3g/feedshare-shrink_800/0/1701420736900?e=1708560000&v=beta&t=18vsA6eFam3Fr8tzxzc0hQF5HmCDa99zNK3AVR-2ykI",
  },
  {
    id: 15,
    src: "https://media.licdn.com/dms/image/D4D22AQHLhAYnNGEFpA/feedshare-shrink_800/0/1687265683189?e=1707350400&v=beta&t=zGmniSf0gUHAdMgWL-oiK_5Q2PIjvqmHdGvOooRMu_s",
  },
  {
    id: 16,
    src: "https://media.licdn.com/dms/image/D5622AQFAd2-ZIfPKIA/feedshare-shrink_800/0/1700234253392?e=1707350400&v=beta&t=_KE3yBBzs5mc4va3kLiXGnD9xDdFYCfSVBjHrlbSpek",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
