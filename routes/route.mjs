import express from "express";
import { UploadFile ,downloadImage} from "../upload/fileUploads.mjs";
import upload from "../utils/upload.mjs";

const router = express.Router();
router.post("/add", upload.single("file"),UploadFile);
router.get('/filedata/:fileid',downloadImage)
export { router };
 