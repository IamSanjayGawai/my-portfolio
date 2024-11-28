import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addCertificateThunk } from "../../redux/thunks/certificateThunk";
import { useForm } from 'react-hook-form';

const AddCertificate = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    if (image) {
      formData.append('image', image);
    }
    formData.append('live_link', data.live_link);

    dispatch(addCertificateThunk(formData));
    console.log("Form Data Submitted:", formData);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      console.log("Image selected:", selectedImage);
      setImage(selectedImage);
    } else {
      console.log("No image selected");
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Add a new certificate
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Certificate Image
              </label>
              <input
                {...register('image', { required: true })}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                placeholder="Type certificate name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Certificate Name
              </label>
              <input
                {...register('name', { required: true })}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                placeholder="Type certificate name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="live_link"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Live Link
              </label>
              <input
                {...register('live_link', { required: true })}
                id="live_link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                placeholder="certificate live link"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                {...register('description', { required: true })}
                id="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add certificate
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCertificate;
