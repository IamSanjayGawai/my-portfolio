import Blog from "../models/BlogModel.js";
export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    // Convert image buffer to Base64
    let base64Image = null;
    if (req.file) {
      base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }

    console.log("Base64 image:", base64Image);
    // Create a new blog entry
    const blog = new Blog({
      title,
      description,
      image: base64Image, // Save the Base64-encoded image
    });

    // Save the blog to the database
    const savedBlog = await blog.save();

    // Return the saved blog in the response
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error saving blog:", error.message);
    res.status(500).json({ message: "Server error." });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blogData = await Blog.find();
    res.status(200).json(blogData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getBlogById = async (req, res) => {
  const {id} = req.params;
  try{
    const blogData = await Blog.findById(id);
    res.status(200).json(blogData);
  }
  catch(error){
    res.status(400).json({ message: error.message }); 
  }
}