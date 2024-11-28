import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill editor styles
import { useAppDispatch } from '../../redux/hooks';
import { addBlogThunk } from '../../redux/thunks/blogThunk';

const AddBlog = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', description);
      if (image) {
        formData.append('image', image);
      }
      dispatch(addBlogThunk(formData));

      // For debugging: log form data
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      // Reset the form after submission (optional)
      // reset();
      // setDescription('');
      // setImage(null);
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog. Please try again.');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            {...register('title', { required: true })}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            className="bg-white"
            placeholder="Write your blog content here..."
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['link', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }],
              ],
            }}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="block w-full text-sm text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
