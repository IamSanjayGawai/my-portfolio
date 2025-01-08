
import career from "../assets/logos/career.jpg"
import vibencode from "../assets/logos/vibencode.webp"
const Services = () => {
  return (
    <>
      <section className="bg-gray-50  flex justify-center">
        <div className=" w-full lg:px-20 px-6 ">
          <div className="text-center mb-12">
            <h2 className="lg:text-5xl font-extrabold text-black text-4xl">
              My <span className="text-green-400">Experience</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg ">
              Discover the wide range of services we offer to help you achieve
              your goals. From development to design, we've got you covered.
            </p>
          </div>
          <div className=" grid grid-12 gap-5">
            {/* Service 1 */}
            <div className="bg-black rounded-2xl shadow-md px-4 hover:shadow-lg transition-shadow flex flex-col py-10">
              {/* logo */}
              <div className="flex justify-between flex-col lg:flex-row gap-2 mb-8">
                <div className="border flex lg:w-2/4 gap-3 items-center  rounded-full bg-green-400 py-2">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-blue-100 border ">
                <img  className="rounded-full" src={career} />
                  </div>
                  <div>
                    <p className="text-black text-sm lg:text-lg flex flex-col lg:flex-row font-extrabold">
                    株式会社キャリアサバイバル |
                    <span className="ml-2"> Career Survival</span>
                    
                    </p>
                    <p className="text-black">Remote</p>
                  </div>
                </div>

                <div className="border flex xs:w-[200px] lg:w-1/4 gap-3 items-center  rounded-full bg-white ">
                  <span className="text-black font-bold lg:text-xm flex justify-around w-full px-3">
                    <span>Jan 2024</span>-<span>Nov 2024</span>
                  </span>
                </div>
              </div>

              <h3 className="lg:text-3xl font-bold text-white mb-8">
                Associate Software Engineer - Frontend Developer
              </h3>
              <ul class="space-y-3 text-white list-disc pl-5 break-words text-sm md:text-base">
                <li>Designed and developed over 3 complete React full theme templates, showcasing proficiency in front-end design and development.</li>
                <li>Led the development of the Asnaro project, a full-stack React application.</li>
                <li>
                Successfully deployed the application on Vercel for optimal performance and accessibility.
                </li>

                <li>Collaborated in teams of developers, UI designers, and backend developers.</li>
                <li>Demonstrated expertise in designing and building reusable components and pages, ensuring responsiveness and adherence to design specifications.</li>
                <li>Proficiently handled API integrations</li>
                <li>Shared knowledge and expertise by conducting training sessions on JavaScript, Responsive Web Design, and ReactJS for trainees and junior developers, contributing to skill development within the company.</li>
              </ul>
            </div>
{/* service end */}
            {/* Service 1 */}
            <div className="bg-black rounded-2xl shadow-md px-4 hover:shadow-lg transition-shadow flex flex-col py-10">
              {/* logo */}
              <div className="flex justify-between flex-col lg:flex-row gap-2 mb-8">
                <div className="border flex lg:w-2/4 gap-3 items-center  rounded-full bg-green-400 py-2">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-blue-100 border ">
                <img  className="rounded-full" src={vibencode} />
                  </div>
                  <div>
                    <p className="text-black  text-lg flex flex-col lg:flex-row font-extrabold">
                   VibenCode Pvt. Ltd.
                    
                    </p>
                    <p className="text-black">Remote</p>
                  </div>
                </div>

                <div className="border flex xs:w-[200px] lg:w-1/4 gap-3 items-center  rounded-full bg-white ">
                  <span className="text-black font-bold lg:text-xm flex justify-around w-full px-3">
                    <span>Jun 2023</span>-<span>Dec 2023</span>
                  </span>
                </div>
              </div>

              <h3 className="lg:text-3xl font-bold text-white mb-8">
                Frontend Developer Intern
              </h3>
              <ul class=" space-y-3 text-white list-disc pl-5 break-words text-sm md:text-base">
                <li>Designed numerous responsive themes using ReactJS, ensuring user-friendly and visually appealing web interfaces.</li>
                <li>Successfully integrated REST APIs, enhancing website functionality and user experience.</li>
                <li>
                Successfully deployed the application on Vercel for optimal performance and accessibility.
                </li>
                <li>Created custom stepper functionality and design</li>
              </ul>
            </div>
{/* service end */}
            {/* Service 1 */}
        
{/* service end */}

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
