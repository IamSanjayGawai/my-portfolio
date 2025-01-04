const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-10 w-full flex justify-center items-center">
        <div className="py-8 lg:py-16 px-[50px] lg:px-[100px]  bg-black w-[80%] rounded-[50px]">
          
          <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact Us
          </h2>
        
          <p className="mb-8 font-light text-center text-red-400 sm:text-lg">
            Note: The contact form is currently not working. You can reach out to me directly via email as provided in the footer.
          </p>
          
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                className="block p-3 w-full text-sm  text-gray-900 bg-gray-800 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-800 rounded-lg shadow-sm border border-gray-300 focus:outline-none"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
