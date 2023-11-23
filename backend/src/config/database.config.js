import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { data_laptops, data_phones, data_users } from "../data.js";
import bcrypt from "bcryptjs";
import { ProductModel } from "../models/phone.model.js";

const PASSWORD_HASH_SALT_ROUNDS = 10;

set("strictQuery", true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedPhones();
    console.log("connect successfully---");
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log("Users seed is already done!");
    return;
  }

  for (let user of data_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log("Users seed is done!");
}

async function seedPhones() {
  const phones = await ProductModel.countDocuments();
  if (phones > 0) {
    console.log("Products seed is already done!");
    return;
  }

  for (let user of data_phones) {
    await ProductModel.create(user);
  }
  for (let user of data_laptops) {
    await ProductModel.create(user);
  }

  console.log("Products seed Is Done!");
}
