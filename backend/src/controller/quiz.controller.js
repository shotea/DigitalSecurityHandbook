const quizService = require("../service/quiz.service");

class quizController {
  async getItems(req, res) {
    try {
      const data = await quizService.getItems();
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

  async getItemById(req, res) {
    const payload = req.params;

    console.log("payload", payload);

    try {
      const data = await quizService.getItemById(payload);
      if (data) {
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
      const data = await quizService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "quiz created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create quiz",
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
      const data = await quizService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Quiz updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update quiz",
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
      const data = await quizService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "Quiz deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete quiz",
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

module.exports = new quizController();
