const About = () => {
    return (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* About Text */}
            <div className="font-light sm:text-lg dark:text-white">
              <h2 className="mb-4 lg:text-5xl font-extrabold text-gray-900 text-4xl text-center">
                About Me
              </h2>
              <p className="mb-6">
                I am a professional web and app developer with experience in
                building dynamic and responsive applications. Skilled in React,
                Next.js, Node.js, and various other modern technologies, I focus
                on delivering high-quality, user-centric solutions.
              </p>
              <p className="mb-6">
                I hold a <span className="font-bold">B.Tech in Electronics and Telecommunication</span> from CSMSS
                Chh. Shahu College of Engineering, and continuously strive to
                enhance my skills through hands-on projects.
              </p>
              <p className="mb-4 font-medium text-gray-900 dark:text-white">
                My expertise includes:
              </p>
              {/* Technical Stack */}
              <ul className="space-y-2">
                <li>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    Frontend:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    React, Next.js, HTML5, CSS3, Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    Backend:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    Node.js, MongoDB, PostgreSQL, SQL
                  </span>
                </li>
                <li>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    Version Control:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    Git/GitHub, Trello, Slack
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                I’m committed to solving problems and creating seamless digital
                experiences.
              </p>
            </div>
  
            {/* Images */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {/* <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="Office content 1"
              /> */}
<div className="flex border bg-gray-200 grey-100 flex-col justify-center items-center py-10  rounded-[40px] shadow-2xl"> <span className="text-4xl lg:text-8xl font-bold mb-2 text-green-400">1.6+</span> <span className="xs:text-lg lg:text-2xl font-bold">Years</span> <span className="xs:text-lg lg:text-2xl font-bold">of Experience </span> </div>
<div className="flex border bg-gray-200 grey-100 flex-col justify-center items-center py-10  rounded-[40px] shadow-2xl"> <span className="text-4xl lg:text-8xl font-bold mb-2 text-green-400">10+</span> <span className="xs:text-lg lg:xs:text-lg lg:text-2xl font-bold">Projects</span> <span className="xs:text-lg lg:text-2xl font-bold">Completed </span> </div>
              {/* <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="Office content 2"
              /> */}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default About;
  