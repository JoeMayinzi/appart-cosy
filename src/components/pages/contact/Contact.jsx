const Contact = () => {
  return (
    <>
      <section className="bg-[#C29A5C] py-20">
        <div className="container mx-auto">
          <h3 className=" font-bold text-white text-5xl text-center">
            CONTACT
          </h3>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-20 w-full md:w-[804px] ">
          <div className="mb-7">
            <span>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_7)">
                  <path
                    d="M14.7668 31.8544C5.68563 18.6894 4 17.3383 4 12.5C4 5.87256 9.37256 0.5 16 0.5C22.6274 0.5 28 5.87256 28 12.5C28 17.3383 26.3144 18.6894 17.2332 31.8544C16.6373 32.7153 15.3626 32.7152 14.7668 31.8544ZM16 17.5C18.7614 17.5 21 15.2614 21 12.5C21 9.73856 18.7614 7.5 16 7.5C13.2386 7.5 11 9.73856 11 12.5C11 15.2614 13.2386 17.5 16 17.5Z"
                    fill="#C29A5C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_7">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              LOCALISATION
            </span>
            <h2 className=" font-bold text-3xl mb-4">
              220 Bvd du 30 Juin, à Gombe Kinshasa République Démocratique Congo
            </h2>
            <p className=" mb-4">+243 999 998 767</p>
            <p>Contact@appart-cosy.com</p>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="font-2xl  font-semibold">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mail" className="font-2xl  font-semibold">
                Adresse mail
              </label>
              <input
                type="text"
                id="mail"
                className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="font-2xl  font-semibold">
                Object du message
              </label>
              <input
                type="text"
                id="subject"
                className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="font-2xl  font-semibold">
                Message
              </label>
              <textarea
                id="message"
                cols="30"
                rows="10"
                className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-4 text-center border bg-[#C29A5C] text-white font-semibold"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
