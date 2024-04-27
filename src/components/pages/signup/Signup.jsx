const Signup = () => {
  return (
    <>
      <section className="bg-[#C29A5C] py-20">
        <div className="container mx-auto">
          <h3 className=" font-bold text-white text-5xl text-center">
            INSCRIVEZ-VOUS
          </h3>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className=" mx-auto mt-10 w-[450px] bg-white rounded-lg custom-shadaw">
            <div className="bg-[#C29A5C] p-7 text-center rounded-t-lg ">
              <h4 className=" text-3xl font-bold text-white">Signup</h4>
            </div>
            <div className=" p-7">
              <form action="#">
                <div>
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ex : Joel Mayinzi"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div>
                  <label htmlFor="prenom">Prenom</label>
                  <input
                    type="text"
                    id="prenom"
                    placeholder="Ex: Joel"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div>
                  <label htmlFor="prenom">Télephone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Ex: 0819723232"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Ex: joemayinzi@gmail.com"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Enter password"
                    className="w-full outline-none py-3 px-3 mb-4 rounded-full border border-[#C29A5C] "
                  />
                </div>
                <div className="mb-7">
                  <button
                    type="submit"
                    className="bg-[#C29A5C] text-white font-bold text-lg w-full outline-none py-3 px-3 rounded-full border hover:bg-white hover:border hover:border-[#C29A5C] hover:text-[#C29A5C] transition ease-in-out delay-150 "
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam
        dicta eligendi quae consectetur in accusantium neque, perspiciatis hic
        deserunt labore esse! Accusantium blanditiis quidem id animi architecto
        rerum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iste quisquam dicta eligendi quae consectetur in accusantium
        neque, perspiciatis hic deserunt labore esse! Accusantium blanditiis
        quidem id animi architecto rerum voluptatem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste quisquam dicta eligendi quae
        consectetur in accusantium neque, perspiciatis hic deserunt labore esse!
        Accusantium blanditiis quidem id animi architecto rerum voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam
        dicta eligendi quae consectetur in accusantium neque, perspiciatis hic
        deserunt labore esse! Accusantium blanditiis quidem id animi architecto
        rerum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iste quisquam dicta eligendi quae consectetur in accusantium
        neque, perspiciatis hic deserunt labore esse! Accusantium blanditiis
        quidem id animi architecto rerum voluptatem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iste quisquam dicta eligendi quae
        consectetur in accusantium neque, perspiciatis hic deserunt labore esse!
        Accusantium blanditiis quidem id animi architecto rerum voluptatem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam
        dicta eligendi quae consectetur in accusantium neque, perspiciatis hic
        deserunt labore esse! Accusantium blanditiis quidem id animi architecto
        rerum voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iste quisquam dicta eligendi quae consectetur in accusantium
        neque, perspiciatis hic deserunt labore esse! Accusantium blanditiis
        quidem id animi architecto rerum voluptatem.
      </section>
    </>
  );
};

export default Signup;
