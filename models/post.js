'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          msg: "Title cannot be empty"
        },
        len: {
          args: [10,200],
          msg: "Minimum char is 10 and maximum is 200 for title"
        }
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty : {
          msg: "Description cannot be empty"
        },
        len: {
          args: [20,500],
          msg: "Minimum char is 20 and maximum is 500 for content"
        }
      },
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Post',
  });
  return Post;
};