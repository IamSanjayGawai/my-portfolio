import { useParams } from "react-router-dom";
import { getBlogByIdThunk } from "../redux/thunks/blogThunk";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectSingleBlog } from "../redux/slices/slices";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  console.log("blogId", id);

  const blog = useAppSelector(selectSingleBlog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getBlogByIdThunk(id));
    }
  }, [dispatch, id]);

  console.log(blog, "blog data detail");

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            {/* Header Section */}
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1
                className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl"
                dangerouslySetInnerHTML={{ __html: blog?.title }}
              ></h1>
            </header>

            {/* Content Section */}
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            ></p>

            {/* Comments Section */}
            <section className="not-format mt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                  Discussion (20)
                </h2>
              </div>

              {/* Comment Form */}
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>

              {/* Comments */}
              <article className="p-6 mb-6 text-base rounded-lg">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </footer>
                <p className="text-gray-900">
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools is as important as
                  the creation of the design strategy.
                </p>
              </article>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
