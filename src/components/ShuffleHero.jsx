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
          <h3 className="text-4xl md:text-6xl text-white font-semibold">
            Anmut Estate And Property Development
          </h3>
          <p className="text-base md:text-lg text-white my-4 md:my-6">
            We specialize in developing properties that meet the needs of modern
            society.
          </p>
          <div className="flex gap-3 md:gap-6">
            <Link
              to="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-600 hover:bg-yellow-500"
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
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/414953463_17890252727962693_2464735585776445375_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEmgTUmOZF6DytFADW-EX3iVn7EH6ETjYNWfsQfoRONg7PEt2lCWGBS1CbWmZMiYp4JEQE8Cinm2uEBw_ssqiSV&_nc_ohc=jfCWrtk9NRgAX-wNEvf&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfBdiHd46q2JdCIl3Z6j2ofHi_yV4MbYAgR9LonsVxjXaQ&oe=659E89F7",
  },
  {
    id: 2,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/347230969_1274609106826041_1689596625258781868_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGE3Qd6qjOZzCHBgNdkCx9Ju_NXsMLthbu781ewwu2FuyaeJuJjwoiUZNy6Dkw6FYxcSSTk9RdjmaFfvytsbdaT&_nc_ohc=mwRz_3IpYj8AX8LjUMU&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfCixgQFQE7YCipHhOTrTzwedNna__5IIF1H2JNMRVywRA&oe=659FB3F6",
  },
  {
    id: 3,
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/393151927_17886361295962693_1163339348917784647_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFPGRdGz3tBon5Pl2AeF4yZtmyxm0lcXjK2bLGbSVxeMmrEjPuC6VfED7Mt-5XiODt6JlGNfnU_N6wboySbJCWj&_nc_ohc=6yyrnAW_iU4AX8LkHy4&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfBy2TGS8SMhRbPYFbh2BFP7_O4erx4xcY6Y5Zzgw1L-mg&oe=659EDFAA",
  },
  {
    id: 4,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/361883713_178541838557129_4427801028342465664_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHZi9qKQjXsDnKny8PMmzJkcpV9hIHUTPBylX2EgdRM8L6L3eJOts7rjFZ92Os-t4u0g4Fz2D3ML9THR8QBhuJ-&_nc_ohc=hsiSf8OEFz4AX89Bg2w&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfDqdx_53J6KbX-62d36JhbxO8OOsQVv9lE2r3nksu2bBQ&oe=659F3899",
  },
  {
    id: 5,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/361883713_178541838557129_4427801028342465664_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHZi9qKQjXsDnKny8PMmzJkcpV9hIHUTPBylX2EgdRM8L6L3eJOts7rjFZ92Os-t4u0g4Fz2D3ML9THR8QBhuJ-&_nc_ohc=hsiSf8OEFz4AX89Bg2w&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfDqdx_53J6KbX-62d36JhbxO8OOsQVv9lE2r3nksu2bBQ&oe=659F3899",
  },
  {
    id: 6,
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/406397603_17885774756962693_4685436808840859991_n.jpg?stp=dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeE5VjTaqfRBRyzVGmEvvT5mBEPmP4nuWecEQ-Y_ie5Z5-eLaAcxLgtRFFnuvInMTlTRqCxWZo9SUvtxSkM6ReEc&_nc_ohc=LHGo2B68dAoAX-pboNi&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfBndOB6HOGVRaMGlc2kYmOzk_VJOmk3PIIhHVw33MRM_Q&oe=659EA9DA",
  },
  {
    id: 7,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/354442647_156304930780820_178178478523006463_n.jpg?stp=dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeHn3JxLnCaHhnaF9E5qWwB0xyFL9qt--u_HIUv2q3767_h6VozoI0hVJJf-ijMlGlBzKRdYxC3YbJ1culWR5l35&_nc_ohc=j-9a8DVj43EAX9ahMpd&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfD-FBP9nk20H0Km1Mrs_8zG3RnQYj9kBdK6eSv36EnhtA&oe=659F1FCA",
  },
  {
    id: 8,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/356672231_166425906435389_106434908284947993_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEI_hFGNLQzBNnOjGLbFmrIerdWBigjuMB6t1YGKCO4wF-ywNl2hWNTegYhYPQ-RtZOjzY-Ehc0PHtgHygqSShz&_nc_ohc=vqSkQTsFjvIAX_qDAKH&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAbfCg7c1WskwpZauNPTNRgZ6JBbKpaaQ1P7Pwmx50BFg&oe=659F0C45",
  },
  {
    id: 9,
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/395152280_241348975609748_5659926065375943705_n.jpg?stp=c448.0.1152.1152a_dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGX4dkvYp83tjixHxQXXajPrpQtEuCEJ5yulC0S4IQnnAkVyAOFTlWUFba-M5qsVIfsO6uoj8plETl4hNzQC1As&_nc_ohc=EYcxhTc5aOoAX-a627B&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfD3j1O6njAezZhJDgUM5TMV43M6VgA1gxBYxnN9yjGFiw&oe=659EBE85",
  },
  {
    id: 10,
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/364117146_188994674178512_2712323432960260570_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeGHGHdY-bOtPAMvTD-OURxDMD8dVxt9JHswPx1XG30ke6ecrEw28VsVdZDK6GsZgaW-4FwhGaQp0M8rili6JPPC&_nc_ohc=rC5O7B53MIgAX-DLrsN&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfBE89aFJCBf5Ap2XumaVM8DN4QXBx81NcfQDyqCx-YUSQ&oe=659F7320",
  },
  {
    id: 11,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/395246938_241349022276410_6796556399788437291_n.jpg?stp=c448.0.1152.1152a_dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeF0lshuSgYR2VCf4Ss7sQFUHd-s3eQ9_n8d36zd5D3-f5gJfI-nxYJn1F0sBJRRihJWcDE8AgXFXWJ_CSJrGKyc&_nc_ohc=W9PCZPjUIMMAX9lyLVK&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAYcIzmFEZGux5o49JK9CqxC8hbe8Jggc1aWPBBlblrHw&oe=659E9D3A",
  },
  {
    id: 12,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/396720131_17881011698962693_6604526637618514642_n.jpg?stp=c315.0.810.810a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEL7rceHNeoTzppB3nlEN81EJu7Z0uZWnIQm7tnS5lacjIw518zJHoiDegU5hqHAdGlG2hOhd-3g90bGWINcU7l&_nc_ohc=_atJjT94a-kAX_urxdl&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfBKkDglh7lJB6uGNgxt7lmqMwUpGHVVEBFxs7E-q1DqsA&oe=65A01EEF",
  },
  {
    id: 13,
    src: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/347418151_797043554997021_3844592464199637307_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeF9jgwRCZkf4oPePOs3mCmEDrZHdigvqwMOtkd2KC-rA0pLdUEvKAmr8_EKgUxVROvNN5zOIgA9IM77n2GHAVTs&_nc_ohc=-GPmEUwxkuwAX8gHR-x&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfAcr9-IjIFPWCbYcV8Mazey4PLZCUBdRSoCv9LGLPvMTA&oe=659F437A",
  },
  {
    id: 14,
    src: "https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/353427193_153066781104635_5806990655069973905_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEwowHngC2aXttR838G2G823daHlvEtVFLd1oeW8S1UUtVF0BdnZx9ZWdRZlBUDKJPaiGu7LLrGBcZ6c3AfBx4F&_nc_ohc=No-CzLFTeeUAX9QV6R7&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfC4LeMk2mwPGRL368cUy26zqiNl9g-OqHTcndFTMu75Ag&oe=65A07703",
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
