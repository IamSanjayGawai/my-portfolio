import { skills } from "../data/skill_data.json";

const Skills = () => {
  return (
    <>
      <section className="bg-gray-50 py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="lg:text-5xl font-extrabold text-gray-900 text-4xl text-center w-full">
              My Skills
            </h2>
            {/* Uncomment this if you want to add a "See more categories" link */}
            {/* 
            <a
              href="#"
              title=""
              className="flex items-center text-base font-medium text-gray-900 dark:text-white hover:underline"
            >
              See more categories
              <svg
                className="ms-1 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
            */}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <a
                key={skill.id}
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.skill_name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
