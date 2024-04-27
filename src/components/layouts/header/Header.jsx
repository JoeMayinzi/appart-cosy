import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-[#C29A5C]">
        <div className="container mx-auto">
          <div className=" flex items-center justify-between">
            <div>
              <img src="/assets/img/logo.png" alt="appart-cosy logo" />
            </div>
            <ul className=" flex items-center gap-5">
              <li className="font-bold text-sm text-white">HOME</li>
              <li className="font-bold text-sm text-white">
                <Link to="/logements">NOS LOGEMENTS</Link>
              </li>
              <li className="font-bold text-sm text-white">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
            <div>
              <button className="font-bold text-sm text-white border border-[#FFFFFF] py-3 px-10 transition ease-in-out delay-150 hover:bg-white hover:text-[#C29A5C] ">
                RESERVER MAINTENANT
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
