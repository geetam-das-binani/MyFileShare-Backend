import { file } from "../schemas/fileschema.mjs";

export const UploadFile = async (req, res) => {
	const fileobj = {
		path: req.file.path,
		name: req.file.originalname,
	};

	try {
		const filedata = await file.create(fileobj);

		res
			.status(200)
			.json({ path: `http://localhost:8000/filedata/${filedata._id}` });
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const downloadImage = async (req, res) => {
	try {
		const filedata = await file.findById(req.params.fileid);

		filedata.downloadContent += 1;

		await filedata.save();
		res.download(filedata.path, filedata.name);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
 