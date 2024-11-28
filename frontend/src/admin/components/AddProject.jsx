import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { createProjectThunk } from "../../redux/thunks/projectThunk";
import { useForm } from 'react-hook-form';

const AddProject = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null); // Store the selected image
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    // Debugging: Log data to confirm image is being appended
    console.log("Form Data before submission:", data);
    console.log("Image before submission:", image);

    // Create FormData
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("github_link", data.github_link);
    formData.append("live_link", data.live_link);
    formData.append("type", data.type);
    formData.append("description", data.description);
    formData.append("stack", data.stack);

    // Only append image if it's selected
    if (image) {
      formData.append('image', image);
    } else {
      console.log("No image selected");
    }

    // Dispatch action to create the project
    dispatch(createProjectThunk(formData));

    // Debugging: Log FormData contents
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  };

  const handleImageChange = (e) => {
    // Check if the file is selected correctly
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      console.log("Image selected:", selectedImage); // Log selected image
      setImage(selectedImage); // Store the selected image in state
    } else {
      console.log("No image selected");
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Project Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Project Name
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type project name"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="github_link" className="block mb-2 text-sm font-medium text-gray-900">
                Github Link
              </label>
              <input
                type="text"
                {...register('github_link', { required: true })}
                name="github_link"
                id="github_link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Project github link"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="live_link" className="block mb-2 text-sm font-medium text-gray-900">
                Live Link
              </label>
              <input
                type="text"
                {...register('live_link', { required: true })}
                name="live_link"
                id="live_link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Project live link"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
                Type
              </label>
              <select
                {...register('type', { required: true })}
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="">Select type</option>
                <option value="WebApp">WebApp</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Game">Game</option>
                <option value="UI Design">UI Design</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="stack" className="block mb-2 text-sm font-medium text-gray-900">
                Stack
              </label>
              <input
                type="text"
                {...register('stack', { required: true })}
                name="stack"
                id="stack"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Project stack"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                {...register('description', { required: true })}
                id="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
          >
            Add Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
