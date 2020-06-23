import mongoose from "mongoose";

// An interface that describes the properies required to create a new user in the DB
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};

buildUser({
  email: "test@test.com",
  password: "password",
});

export { User, buildUser };
