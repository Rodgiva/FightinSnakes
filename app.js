import express from "express";
import dotenv from "dotenv";
import user_router from "./routes/users.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.API_PORT;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.listen(PORT || 3030, () => {
  console.log(`running on port ${PORT || 3030}`);
});

app.use("/users", user_router);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
