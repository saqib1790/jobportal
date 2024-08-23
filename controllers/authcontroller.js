import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return (
        res
          .status(400)
          // this is new folder and file so check it
          .send({ success: false, message: "Please Provide Name" })
      );
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Please Provide Email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "Please Provide Password" });
    }
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "Email Already Register Login",
      });
    }
    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in Register Controller",
      success: false,
      error,
    });
  }
};
