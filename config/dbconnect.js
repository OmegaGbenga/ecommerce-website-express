const {default: mongoose} = require ("mongoose");

const dbConnect = ()=>{
    try{ 
        const conn = mongoose.connect(process.env.DB_URI);
        console.log("Database connected succesfully"); 
    }catch(error){
        console.log("Database error");   
    }
};
module.exports= dbConnect;