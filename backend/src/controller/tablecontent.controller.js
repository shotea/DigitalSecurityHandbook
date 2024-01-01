const tableContentService = require("../service/tablecontent.service");

class tableContentController {
  async getItems(req, res) {
    try {
      const data = await tableContentService.getItems();
      if (data.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Data aquired",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "No data",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

  async insertItem(req, res) {
    const payload = req.body;
    console.log("payload", payload);
    try {
      const data = await tableContentService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Content created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create content",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

 
  async updateItem(req, res) {
    const payload = req.body;
    console.log("payload", payload);
    try {
      const data = await tableContentService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Content updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update content",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }

  async deleteItemById(req, res) {
    const payload = req.params;
    console.log("payload", payload);
    try {
      const data = await tableContentService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Content deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete content",
        data: null,
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Exception",
        error,
      });
    }
  }
}

module.exports = new tableContentController();
