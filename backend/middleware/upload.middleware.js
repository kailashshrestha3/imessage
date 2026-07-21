import multer from "multer";

const MAX_FILE_SIZE = 10 * 1024 * 1024; //26mb

export const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter: (req, file, cb) => {
        const isImage = file.mimetype.startsWith("image/");
        const isVideo = file.mimetype.startsWith("video/");
        if (isImage || isVideo) {
            cb(null, true)
        } else {
            cb(new Error("Invalid file type. Only images and video are allowed"))
        }
    }
})  
