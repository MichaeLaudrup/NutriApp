/* MIDDLE WARE ENCARGADO DE LA CAPTACION DE IMAGENES AL SUBIRSE DESDE FRONT */
const multer = require('multer'); 

const multerStorage = multer.diskStorage({
    destination: (req:any,file:any, cb:any) => {
        cb(null, `${__dirname}/../public/sections-images`)
    },
    filename: (req:any, file:any, cb:any) => {
        const ext = file.mimetype.split('/')[1]; 
        const pathName = `section-image-${req.params['id'] ?? req.body.user._id}.${ext}`;
        cb(null, pathName ); 
    }
}); 

const multerFilter = (req:any, file:any, cb:any) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true); 
    }else{
        cb(new Error('Tipo de archivo no soportado, introduzca una imagen'), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
}); 

/* Middle ware que se encarga de capturar la imagen y almacenarla en servidor */
export const uploadUserPhotoMiddleware = upload.single('photo')