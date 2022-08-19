import express from 'express';
import * as bookController from '../controllers/bookController.js'

const router = express.Router()



 /**
  * TODO: Aca van todas las rutas de los libros
  * 
  */

router.
route('/books')
.get(bookController.getAllBooks)
.post(bookController.createBook);

router
.route('/books/:id')
.get(bookController.getBookById)
.post(bookController.updateBookById)
.delete(bookController.deleteBookByid);



 export default router;