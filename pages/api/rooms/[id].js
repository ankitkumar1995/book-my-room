/** @format */

import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getSingleRoom,
  removeRoom,
  updateRoom,
} from "../../../controllers/roomController";
import onError from "../../../middlewares/error";
const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(removeRoom);
export default handler;
