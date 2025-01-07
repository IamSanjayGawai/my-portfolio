// import EmailModel from  "EmailModel.js"
import nodemailer from "nodemailer"


export const emailContoller = async (req, res) =>{
    const {email, subject, message} = req.body
    try{
       
     const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
     });

     // email option
     const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact Form: ${subject}`,
        text: `Message From: ${email}:\n\n${message}`,
     }

     transporter.verify((error, success) => {
        if (error) {
            console.error('Error verifying connection:', error);
        } else {
            console.log('Server is ready to send emails!');
        }
    });
    

     //send the email
     await transporter.sendMail(mailOptions)

     res.status(200).json({message: 'failed to send email'})
    }
    catch(error){
console.log(error)
    }
}