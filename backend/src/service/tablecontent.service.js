const { model } = require("mongoose");
const tableContentModel = require("../models/tablecontent.model");

class service {
  async getItems() {
    const data = await tableContentModel.find().exec();
    return data;
  }

  
  //this block to post data to our collection
  async insertItem(payload) {
    const request = new tableContentModel(payload);
    const data = await request.save();
    return data;
  }
  //here is the query to find user by id and update data
  async updateItem(payload) {
    const { id } = payload; //object destructuring
    const data = await tableContentModel.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
    return data;
  }
  //here we are deleting the user document by id
  async deleteItemById(payload) {
    const { id } = payload; //object destructuring
    const data = await tableContentModel.deleteOne({ _id: id }); //in mongodb our document is _id, but in front end it is id
    return data.deletedCount || null;
  }
}

module.exports = new service();
