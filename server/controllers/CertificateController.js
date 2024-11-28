import Certificate from "../models/CertificateModel.js";

export const createCertificate = async (req, res) => {
    try{

         const {name, description, live_link} = req.body;

         let base64Image = null;
         if(req.file){
            base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
         }
         console.log("Base64 image certificate:", base64Image); 

         const certificate = new Certificate({
            name,
            description,
            live_link,
            image: base64Image,
         })
        const certificatedData = await certificate.save();
         res.status(201).json(certificatedData);


    }
    catch(error){

        res.status(400).json({message:error.message});
    }
}


export const getCertificate = async (req, res) => {

try{
    const certificate = await Certificate.find();
    res.status(200).json(certificate);

}
catch(error){
    res.status(400).json({message:error.message});
}

}