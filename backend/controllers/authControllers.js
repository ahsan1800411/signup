const { PrismaClient } = require('@prisma/client');
const cloudinary = require('cloudinary');
const CustomApiErrorHandler = require('../utils/CustomApiErrorHandler');

const { user } = new PrismaClient();

exports.registerUser = async (req, res) => {
  const file = req.files.userImg;

  // upload to cloudinary
  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });

  const {
    firstName,
    lastName,
    title,
    company,
    telegram,
    twitter,
    email,
    password,
    userCategory,
    cardImg,

    orderCard,
  } = req.body;

  const userExists = await user.findMany({
    where: {
      OR: [{ email }, { telegram }, { twitter }],
    },
  });

  if (userExists) throw new CustomApiErrorHandler('User already Exists ', 400);

  const userCreated = await user.create({
    data: {
      firstName,
      lastName,
      title,
      company,
      telegram,
      twitter,
      email,
      password,
      userCategory,
      userImg: result.secure_url,
      orderCard,
      cardImg,
    },
  });
  res.status(200).json(userCreated);
};

exports.getAllUsers = async (req, res) => {
  const users = await user.findMany();
  res.status(200).json(users);
};

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  const userFind = await user.findUnique({ where: { id: parseInt(id) } });
  res.status(200).json(userFind);
};
exports.updloadUserCardImage = async (req, res) => {
  const { id } = req.params;

  const file = req.files.cardImg;
  const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
    folder: 'avatars',
    width: 150,
    crop: 'scale',
  });
  const updatedUser = await user.update({
    where: { id: parseInt(id) },
    data: {
      cardImg: result.secure_url,
    },
  });
  res.status(200).json(updatedUser);
};
