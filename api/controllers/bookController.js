const getAllBooks = (req,res) =>{
    return res.json({
        msg: 'Esta es la ruta GET de todos los libros'
    });
}
const createBook = (req,res) =>{}
const getBookById = (req,res) =>{}
const updateBookById = (req,res) =>{}
const deleteBookByid = (req,res) =>{}

export{getAllBooks,createBook,getBookById,updateBookById,deleteBookByid};