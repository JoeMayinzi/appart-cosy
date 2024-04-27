import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="bg-[#C29A5C] py-20">
        <div className="container mx-auto">
          <h3 className=" font-bold text-white text-5xl text-center">
            CONNECTEZ-VOUS
          </h3>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className=" mx-auto mt-10 w-[450px] bg-white rounded-lg custom-shadaw">
            <div className="bg-[#C29A5C] p-7 text-center rounded-t-lg ">
              <h4 className=" text-3xl font-bold text-white">Login</h4>
            </div>
            <div className=" p-7">
              <form action="#">
                <div>
                  <input
                    type="text"
                    placeholder="Entrez votre numero de télephone"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Entrez votre numero de télephone"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div className="mb-7">
                  <button
                    type="submit"
                    className="bg-[#C29A5C] text-white font-bold text-lg w-full outline-none py-3 px-3 mb-4 rounded-full border hover:bg-white hover:border hover:border-[#C29A5C] hover:text-[#C29A5C] transition ease-in-out delay-150 "
                  >
                    Login in
                  </button>
                </div>
                <div className="text-center">
                  <p className="font-bold text-sm text-gray-500 mb-2 ">
                    Dont't have an account ?
                  </p>
                  <Link
                    to="/signup"
                    className="text-2xl font-bold text-[#C29A5C]"
                  >
                    Signup
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
