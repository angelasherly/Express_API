// import Model
const { Post } = require("../models");

class PostController {
  static async storeData(req, res) {
    try {
      let title = req.body.title;
      let content = req.body.content;

      await Post.create({
        title: title,
        content: content
      });

      res.status(200).json({
        status: "Success",
        message: "Post added successfully",
      });
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Failed to save data",
        msg: err.errors.map((e) => e.message),
      });
    }
  }
  static async showData(req, res) {
    const allData = await Post.findAll();
    res.status(200).json({
      message: "Success",
      data: allData,
    });
  }
  static async showDataById(req, res) {
    try {
      let idPost = req.params.id;
      let dataPostDetail = await Post.findByPk(idPost);
      res.status(200).json({
        status: "Success",
        data: dataPostDetail,
      });
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Data failed to display, ID not found",
        msg: err.errors.map((e) => e.message),
      });
    }
  }

  static async editDataById(req, res) {
    try {
      let title = req.body.title;
      let content = req.body.content;

      await Post.update(
        {
          title: title,
          content: content
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        status: "Success",
        message: "Successfully updated data",
      });
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Failed to save data",
        msg: err.errors.map((e) => e.message),
      });
    }
  }
  
  static async deleteDataById(req, res) {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: "Success",
        message: "Successfully deleted data",
      });
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Failed to delete data",
        msg: err.errors.map((e) => e.message),
      });
    }
  } 
}

module.exports = PostController;