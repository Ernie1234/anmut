import { Link } from "react-router-dom";

function CarouselCard({ avatar, name, quote, job }) {
  return (
    <Link to="/team-member">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          src={avatar}
          alt={name}
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg text-slate-200 font-medium">{`"${quote}"`}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-amber-300">{name}</div>
            <div className="text-slate-400">{job}</div>
          </figcaption>
        </div>
      </figure>
    </Link>
  );
}

export default CarouselCard;
