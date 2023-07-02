import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
	path: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	downloadContent: {
		type: Number,
		required: true,
        default:0
	},
});

export const file = mongoose.model("filedata", fileSchema);
