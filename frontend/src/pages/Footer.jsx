import profile_img from '../assets/images/profile-img.png';

const Footer = () => {
  return (
    <footer className="p-6 ">
      <div className="  bg-gray-900 text-gray-300 p-6 rounded-xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          {/* Profile Section */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={profile_img}
              className="h-12 w-12 rounded-full mr-4"
              alt="Sanjay Gawai"
            />
            <div>
              <span className="text-xl font-bold text-white">Sanjay Gawai</span>
              <p className="text-sm text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Follow Me Links */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <a
              href="https://github.com/IamSanjayGawai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-gawai-74a6b815b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline text-gray-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Me Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">
              Follow Me
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/IamSanjayGawai"
                  className="hover:underline text-gray-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanjay-gawai-74a6b815b/"
                  className="hover:underline text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-white">
              Contact
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="mailto:sanjay@example.com" className="hover:underline text-gray-400">
                  sanjaygawai2022@gmail.com
                </a>
              </li>
              <li>
                <p className="text-gray-400">Chh Sambhaji Nagar, Maharashtra</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-400">
            © 2024 Sanjay Gawai. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
