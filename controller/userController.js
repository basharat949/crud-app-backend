import User from "../models/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();

    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "User does not exist" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "User does not exist" });
    }

    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ msg: "User does not exist" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({msg: "User is deleted sucessfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
