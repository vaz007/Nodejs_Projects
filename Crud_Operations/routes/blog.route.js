import express from "express";
import blogCtrl from "../controllers/blog.controller";

const router = express.Router();

router
  .route("/api/blog")
  .post(blogCtrl.creeateBlog)
  
  router
  .route("/api/blog/:id")
  .put(blogCtrl.updateBlog)
  .delete(blogCtrl.deleteBlog);

export default router;
