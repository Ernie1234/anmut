function Contact() {
  return (
    <div className="bg-stone-900 min-h-[100vh] text-white p-8 md:p-12 ">
      <head>
        <h1 className="text-md md:text-lg lg:text-xl font-bold tracking-wider uppercase text-white ">
          Contact Us
        </h1>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tighter  text-white md:text-5xl lg:text-6xl">
          Leading way in bilding & Civil contruction
        </h3>
        <div>
          <h5>
            <p className="capitalize text-white text-base md:text-md lg:text-lg">
              Professional staff
            </p>
          </h5>
          <h5>
            <p>100% satisfaction</p>
          </h5>
          <h5>
            <p>accurate testing</p>
          </h5>
          <h5>
            <p>transparent price</p>
          </h5>
        </div>
      </head>
      <div className="bg-orange-500 w-full h-full grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"></div>
    </div>
  );
}

export default Contact;
