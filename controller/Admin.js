const Product=require('../model/productSchema.js')
const cloudinary = require('cloudinary').v2;
const path = require('path');
const multer = require('multer')


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});


// Configure Cloudinary


// Configure Multer
const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000 // 1MB
  },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image');

function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images only!');
  }

}

const createNewProduct=(req, res) => {
    upload(req, res, async (err) => {
      const {name,countInStock,no_of_review,category,price,description,rating}=req.body
      
      if (err) {
        console.log(err);
        res.status(400).json({ message: err });
      } else {
        try {
          
          const result = await cloudinary.uploader.upload(req.file.path);
          const image = result.secure_url
            
        res.send('kk')        
            const product = await Product.create({name,no_of_review,countInStock,category,price,description,rating,image}) 
          res.status(200).send(product);
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    });
  }

const deleteProduct= async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Product.findByIdAndDelete(id);
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }
      res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

const updateProduct= async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Product.findByIdAndUpdate(id, req.body, { new: true });
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
// // Delete a data item by ID
// app.delete('/api/data/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data = await Data.findByIdAndDelete(id);
//     if (!data) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.status(200).json({ message: 'Data deleted successfully' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Update a data item by ID using PATCH
// app.patch('/api/data/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const data = await Data.findByIdAndUpdate(id, req.body, { new: true });
//     if (!data) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
module.exports={createNewProduct,deleteProduct,updateProduct}
