import mongoose from "mongoose";

const incubadoraSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    }, 
    alevinos_cant: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },    
    estado: {
        type: Boolean,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('Incubadora', incubadoraSchema);