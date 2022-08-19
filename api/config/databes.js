import mongoose  from "mongoose";

const db = mongoose.connection;

db.on('connecting', () =>{
    console.log('Intentando a la base de datos 🟠 ');
}).on('connected', () =>{
    console.log('Se ha conectado a la base de datos 🟢');
}).on('error', () => {
    console.log('Error en la conexion de la base de datos 🔴');
})


export default () => {
    mongoose.connect('mongodb://localhost/library')
}
