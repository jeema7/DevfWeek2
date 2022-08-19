import Book from '../model/Book.js'


const getAllBooks = (req,res) =>{
    return res.json({
        msg: 'Esta es la ruta GET de todos los libros'
    });
}
const createBook = async(req,res) =>{
    try {
        const newBook = await Book.create(req.body)
        return res.json({
          msg: 'Libro creado',
          book: newBook,
        })
        
    } catch (error) {   
        return res.json({
            msg: 'Error al crear un libro',
        });
        
    }

};
const getBookById = (req,res) =>{}
const updateBookById = (req,res) =>{}
const deleteBookByid = (req,res) =>{}

export{getAllBooks,createBook,getBookById,updateBookById,deleteBookByid};