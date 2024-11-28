import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    live_link:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
)

const Certificate = mongoose.model("Certificate", CertificateSchema);
export default Certificate;
