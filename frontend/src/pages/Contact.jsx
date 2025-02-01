import { useState } from "react";
import axios from "axios"
import EmailSent from "../components/EmailSent";
import { makecontactThunk } from '../redux/thunks/contactThunk';
import { useDispatch } from "react-redux";

const Contact = () => {

const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  })
const [emailSent, setEmailSent] = useState(false)
const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      console.log("working")
      await dispatch(makecontactThunk(formData));
      setEmailSent(true)
      setLoading(false)

      setTimeout(()=>{
        setEmailSent(false)
      },4000)

    } catch (error) {
console.log("failed")
    }
  };
  
  return (


  

    <>
          {emailSent &&
        <EmailSent />
      }
      <section className="bg-white dark:bg-gray-900 mb-10 w-full flex justify-center items-center ">
        <div className="py-8 lg:py-16 px-[50px] lg:px-[100px]  bg-black w-[100%] lg:w-[80%] rounded-[50px]">
          
          <h2 className="mb-4 text-2xl lg:text-5xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact Me
          </h2>
        

          <form  className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name = "email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-800 border border-gray-300 text-white text-sm rounded-lg  block w-full p-2.5 focus:outline-none "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                className="block p-3 w-full text-sm  text-white bg-gray-800 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
                Your message
              </label>
              <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
                className="block p-2.5 w-full text-sm text-white bg-gray-800 rounded-lg shadow-sm border border-gray-300 focus:outline-none"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
{loading?  
    <button disabled type="button" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Sending...
    </button>
            
:
          <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
        }

          </form>
        </div>
      </section>

    </>
  );
};

export default Contact;
