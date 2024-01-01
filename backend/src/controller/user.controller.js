const { comparePasswords } = require("../helper-function/bcrypt.helper");
const userService = require("../service/user.service");

class userController {
  async getItems(req, res) {
    try {
      const data = await userService.getItems();
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
      const userExist = await userService.getItemByEmailOrUserName(payload);
      if (userExist.length > 0) {
        return res.status(200).json({
          success: false,
          message: "Either email or user name already exists",
          data: null,
        });
      }
      const data = await userService.insertItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User created",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to create user",
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

  async login(req, res) {
    const payload = req.body;
    console.log("payload", payload);
    const { password } = payload;
    try {
      const data = await userService.getItemByEmail(payload);
      if (data) {
        if (comparePasswords(password, data.password)) {
          return res.status(200).json({
            success: true,
            message: "User logged in",
            data,
          });
        }
        return res.status(200).json({
          success: false,
          message: "Incorrect password",
          data: null,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Email does not exist",
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
      const data = await userService.updateItem(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User updated",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to update user",
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
      const data = await userService.deleteItemById(payload);
      if (data) {
        return res.status(200).json({
          success: true,
          message: "User deleted",
          data,
        });
      }
      return res.status(200).json({
        success: false,
        message: "Failed to delete user",
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

module.exports = new userController();
