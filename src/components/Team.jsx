import { motion } from "framer-motion";

function Team() {
  return (
    <div className="py-10 md:py-16 lg:py-20 px-16 md:px20 lg:px-28 bg-slate-800 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h3
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold my-3 md:my-5 capitalize tracking-wider font-sans"
        >
          {`"Meet the team"`}
        </motion.h3>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="sm:text-sm md:text-md font-semibold capitalize text-gray-300"
        >
          Our skilled team of architects, engineers, and construction
          professionals bring innovative and creative ideas to every project,
          delivering high-quality properties that are designed to enhance the
          lives of our clients.
        </motion.p>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-8 lg:mt-10">
          <div className="flex items-center gap-4">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-10 h-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/8960933/pexels-photo-8960933.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team manager"
            />
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-medium text-white text-left"
            >
              <div>Jese Alabi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Engr. Akinmukomi Christopher
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
