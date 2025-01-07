import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectBlog } from '../redux/slices/slices';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getBlogThunk } from '../redux/thunks/blogThunk';

const Blog = () => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlog);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogThunk());
  }, [dispatch]);

  console.log(blog, 'blog data');

  // Determine how many articles to display
  const visibleArticles = Array.isArray(blog) ? (showAll ? blog : blog.slice(0, 4)) : [];

  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-5xl tracking-tight font-extrabold text-gray-900">
              Our Blog
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-900">
              We use an agile approach to test assumptions and connect with the needs of your audience early and often.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {visibleArticles.map((article) => (
              <article
                key={article.title}
                className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    {article.article_type}
                  </span>
                  <span className="text-sm">{article.published_date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{article.title}</a>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {article.description.replace(/<[^>]+>/g, '')}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full border"
                      src={article.image}
                      alt={`${article.author}'s avatar`}
                    />
                    <span className="font-medium dark:text-white">{article.author}</span>
                  </div>
                  <span
                    className="inline-flex items-center font-medium text-white hover:underline cursor-pointer"
                    onClick={() => navigate(`/blog-detail/${article._id}`)}
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Dynamic Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              {showAll ? 'View Less' : 'View All'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
