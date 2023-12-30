function Team() {
  return (
    <div className="py-10 md:py-16 lg:py-20 px-16 md:px20 lg:px-28 bg-slate-800 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold my-3 md:my-5 capitalize tracking-wider font-sans">
          {`"Meet the team"`}
        </h3>
        <p className="text-md font-semibold capitalize">
          Our skilled team of{" "}
          <span>architects, engineers, and construction professionals</span>{" "}
          bring innovative and creative ideas to every project, delivering
          <span>high-quality properties</span> that are designed to enhance the
          lives of our clients.
        </p>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-8 lg:mt-10">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/8960933/pexels-photo-8960933.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="team manager"
            />
            <div className="font-medium dark:text-white text-left">
              <div>Jese Alabi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Engr. Akinmukomi Christopher
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
