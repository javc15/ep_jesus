const mongoose=require('mongoose');
const dbConn = async() =>{

    try {
        await mongoose.connect(process.env.DB,{
            useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex:true
        });
        console.log('BASE DE DATOS EN LINEA');
    } catch (error) {
        console.log(error);
        throw new Error('ERROR EN LA BASE DE DATOS');
    }
}

module.exports={dbConn};