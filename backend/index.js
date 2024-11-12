import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/api/live-streaming", (req, res) => {
  res.json({ url: "http://localhost:8080/hls/stream1.m3u8" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
