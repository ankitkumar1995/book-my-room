/** @format */

import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getAllRooms, newRoom } from "../../../controllers/roomController";
import onError from "../../../middlewares/error";

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);
handler.post(newRoom);
export default handler;
