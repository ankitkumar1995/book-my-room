const Room = require("../models/room");
const mongoose = require("mongoose");
const room = require("../data/room");
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.jlttbja.mongodb.net/rooms?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then((res) => console.log("database connect", res));
const seedRoom = async () => {
  try {
    await Room.deleteMany();
    await Room.insertMany(room);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRoom();
