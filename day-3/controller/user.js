import User from "../model/User.js";

export const users = async (req, res) => {
  const users = await User.find({});
  if (!users) throw new Error("Not found", 400);
  res.send({
    data: users,
  });
};

export const user = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) throw new Error("User not found", 400);
  res.send({
    data: user,
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw new Error("Input error", 400);
  res.send({
    data: user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate({ _id: id }, req.body);
  if (!user) throw new Error("Input error", 400);
  res.send({
    data: user,
  });
};

export const removeUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndRemove({ _id: id });
  if (!user) throw new Error("Input error", 400);
  res.send({
    data: user,
  });
};
