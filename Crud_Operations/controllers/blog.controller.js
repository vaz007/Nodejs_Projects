import Blog from "../model/blog";

async function creeateBlog(req, res) {
  const blog = new Blog.blogSchema(req.body);
  await blog.save((err, result) => {
    if (err) {
      return res.status(400).json({
        status: "fail",
        error: err
      });
    } else {
      return res.status(200).json({
        status: "success",
        body: result
      });
    }
  });
}

async function getBlog(req, res) {
  await Blog.blogSchema.find((err, result) => {
    if (err) {
      return res.status(400).json({
        status: "fail",
        error: err
      });
    } else {
      return res.status(200).json({
        status: "success",
        body: [result]
      });
    }
  });
}
async function updateBlog(req, res) {
  console.log(req.params.id);
  await Blog.blogSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, result) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          error: err
        });
      } else {
        return res.status(200).json({
          status: "success",
          body: result
        });
      }
    }
  );
}
async function deleteBlog(req, res) {
  console.log(req.params.id);
  await Blog.blogSchema.findByIdAndRemove(req.params.id, (err, result)=> {
    if (err) {
      return res.status(400).json({
        status: "fail",
        error: err
      });
    } else {
      return res.status(200).json({
        status: "success",
        body: result
      });
    }

  })
 
}
module.exports = {
  creeateBlog,
  getBlog,
  updateBlog,
  deleteBlog
};
