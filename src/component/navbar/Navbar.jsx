import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" fixed left-1/2 top-0 -translate-x-1/2 z-50">
      <ul className="flex gap-8 rounded-b px-10 py-2 bg-sky-800 text-white mx-auto">
        <li>
          <Link to={"/"} className="font-inter text-base ">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/pingloading"} className="font-inter text-base ">
            Ping loading
          </Link>
        </li>
        <li>
          <Link to={"/mixloading"} className="font-inter text-base ">
            Mix loading
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
