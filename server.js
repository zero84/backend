import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jamaahRoutes from "./routes/jamaah.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Terhubung ke MongoDB"))
  .catch((err) => console.error("❌ Gagal konek MongoDB:", err));

app.use("/", jamaahRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});
