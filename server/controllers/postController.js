const Post = require("../models/PostModel")



// CREATEPOST 
exports.createPost = async (req, res) => {
  const { title, description, photo, category, postedBy } = req.body
  try {
    if (!title || !description || !photo || !category) {
      return res.status(400).json({ error: "all fields required" })
    }
    const data = await Post.create({
      title,
      description,
      photo,
      category,
      postedBy
    })
    return res.status(201).json({ post: data })
  } catch (error) {
    console.log("error :" + error)
  }
}



// GET ALL POST 
exports.getAllPost = async (req, res) => {
  const postedBy = req.query.userid
  const category = req.query.category
  console.log(postedBy)
  let data;
  try {
    if (postedBy) {
      data = await Post.find({ postedBy })
        .populate("postedBy", "_id username")
    }
    else if (category) {
      data = await Post.find({ category })
        .populate("postedBy", "_id username")
    } else {
      data = await Post.find()
        .populate("postedBy", "_id username")
    }
    return res.status(201).json({ posts: data })
  } catch (error) {
    console.log("error :" + error)
  }
}



// GET SINGLE POST
exports.singlePost = async (req, res) => {
  const _id = req.params.id
  try {
    const data = await Post.find({ _id })
      .populate("postedBy", "_id username")
    return res.status(201).json(data)
  } catch (error) {
    console.log("error :" + error)
  }
}


// UPDATE POST
exports.updatePost = async (req, res) => {
  const { title, description, id } = req.body
  try {
    const data = await Post.findByIdAndUpdate(id, {
      $set: {
        title,
        description
      }
    }, {
      new: true
    })
    return res.status(202).json(data)
  } catch (error) {
    console.log("error :" + error)
  }
}



// DELETE POST 
exports.deletePost = async (req, res) => {
  const { id } = req.body
  try {
    const data = await Post.findByIdAndDelete(id)
    return res.status(202).json(data)
  } catch (error) {
    console.log("error :" + error)
  }
}