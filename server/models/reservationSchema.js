import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    // minlength: [3, "min 30 ch is required"],

    // maxLength: [30, "max 30 ch is allowed"],
  },
  lastName: {
    type: String,
    required: true,
    // minlength: [3, "min 30 ch is required"],

    // maxLength: [30, "max 30 ch is allowed"],
  },
  email: {
    type: String,
    required: true,
    // validator: [validator.isEmail, "provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    // minlength: [10, "min 30 ch is required"],
    // maxLength: [10, "max 30 ch is allowed"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;
