import express from 'express'
import controller from '../controllers/Book';
import { ValidateSchema,Schemas } from '../middleware/ValidateSchema';


const router = express.Router();


router.post('/create',ValidateSchema(Schemas.book.create) ,controller.createBook);
router.get('/get/:authorId', controller.readBook);
router.get('/get/',controller.readAllBook);
router.patch('/update/:authorId',ValidateSchema(Schemas.book.create) ,controller.updateBook);
router.delete('/delete/:authorId',controller.deleteBook);


export = router;