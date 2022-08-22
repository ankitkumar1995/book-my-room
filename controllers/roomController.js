/** @format */
import catchAsyncError from "../middlewares/catchAsyncError";
import Room from "../models/room";
import APIFeatures from "../utils/apiFetures";
import ErrorHandler from "../utils/errorHandler";
const getAllRooms = catchAsyncError(async (req, res) => {
  const resPerPage = 4;
  const roomCount = await Room.countDocuments();
  const apiFeatures = new APIFeatures(Room.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  let rooms = await apiFeatures.query;
  // const rooms = await Room.find();
  let filteredRoomCount = rooms.length;
  res.status(200).json({
    sucess: true,
    roomCount,
    resPerPage,
    filteredRoomCount,
    roomTotal: rooms.length,
    rooms,
  });
});

// new room creat /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// get room by id           /api/rooms/:id
// const getSingleRoom = async (req, res) => {
//   try {
//     console.log(1, req.query, req.query.id);
//     const room = await Room.findById(req.query.id);
//     console.log(room);
//     if (!room) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Room not find by this id" });
//     }
//     res.status(200).json({
//       sucess: true,
//       room,
//     });
//   } catch (error) {
//     console.log(3);
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

const getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(ErrorHandler("Room not find by this id", 404));
  }
  res.status(200).json({
    sucess: true,
    room,
  });
});

// const updateRoom = async (req, res) => {
//   try {
//     let room = await Room.findById(req.query.id);
//     if (!room) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Room not find by this id" });
//     }
//     room = await Room.findOneAndUpdate(req.query.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       sucess: true,
//       room,
//     });
//   } catch (error) {
//     console.log(3);
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(ErrorHandler("Room not find by this id", 404));
  }
  room = await Room.findOneAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    sucess: true,
    room,
  });
});
// const removeRoom = async (req, res) => {
//   try {
//     let room = await Room.findById(req.query.id);
//     if (!room) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Room not find by this id" });
//     }
//     room.remove();
//     res.status(200).json({
//       sucess: true,
//       message: "room remove",
//     });
//   } catch (error) {
//     console.log(3);
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };
const removeRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(ErrorHandler("Room not find by this id", 404));
  }
  room.remove();
  res.status(200).json({
    sucess: true,
    message: "room remove",
  });
});
export { getAllRooms, newRoom, getSingleRoom, updateRoom, removeRoom };
