const express  = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {handleUserProfile, getBlogById, handleUserProfileImage} = require('../app/controlllers/user-controller');
const guest = require('../app/midlewares/guest');
const edit = require('../app/midlewares/edit');

// set storage engine
const storage = multer.diskStorage({   
    destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

// add profile image
router.get('/profile', guest, handleUserProfile );
router.patch('/profile/:userId', edit, upload.single('image') ,handleUserProfileImage);

// get particular blogs by id
router.get('/blog/:blogId', getBlogById);

module.exports = router;