const { model } = require("mongoose");
const userModel = require("../models/user.model");
const { hashPassword } = require("../helper-function/bcrypt.helper");

class service {
  async getItems() {
    const data = await userModel.find().exec();
    return data;
  }

  async getItemByEmail(payload) {
    const { email } = payload;
    const data = await userModel.findOne({ email }).exec();
    console.log("data", data);
    return data;
  }

  async getItemByUserName(payload) {
    const { userName } = payload;
    const data = await userModel.findOne({ userName }).exec();
    console.log("data", data);
    return data;
  }
  async getItemByEmailOrUserName(payload) {
    const { email, userName } = payload;
    const data = await userModel
      .find({ $or: [{ email }, { userName }] })
      .exec();
    console.log("data", data);
    return data;
  }
  //this block to post data to our collection
  async insertItem(payload) {
    const hashed=await hashPassword(payload.password)
    const request = new userModel({...payload, password:hashed});
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await userModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await userModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
