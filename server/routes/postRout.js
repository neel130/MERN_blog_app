const express = require("express");
const { createPost, getAllPost, singlePost, updatePost, deletePost } = require("../controllers/postController");
const router = express.Router();



router.post("/create",createPost);
router.get("/get",getAllPost);
router.get("/get/:id",singlePost);
router.put("/update",updatePost);
router.delete("/delete",deletePost);




module.exports = router;