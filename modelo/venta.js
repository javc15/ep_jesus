const {Schema, model} = require('mongoose');

const VentaSchema = Schema({

    categoria:{
        type:String,
        require:true
    },
    decripcion:{
        type:String,
        require:true
    },
    modelo:{
        type:String,
        require:true
    },
    marca:{
        type:String,
        require:true
    },
     precio:{
        type:Number,
        require:true
     }
        
    });
    VentaSchema.method('toJSON', function(){
        const{__v, ...object}=this.toObject();
        return object
    });
    module.exports = model('venta',VentaSchema);