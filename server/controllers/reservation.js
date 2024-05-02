import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return res.status(400).json({ msg: "please fill all detail" });
  }
  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });
    res.status(200).json({
      sucess: true,
      message: "Reservation sent sucessfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};
