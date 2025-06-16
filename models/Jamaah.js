import mongoose from "mongoose";

const JamaahSchema = new mongoose.Schema({
  nama: String,
  nik: String,
  jenisKelamin: String,
  tanggalLahir: String,
  status: { type: String, default: "Belum" }
});

export default mongoose.model("Jamaah", JamaahSchema);
