const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.secret_user,
    pass: process.env.secret_password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/apply", (req, res) => {
  const email = req.body.email;
  const businessName = req.body.businessName;
  const streetAddress = req.body.streetAddress
  const streetAddress2 = req.body.streetAddress2
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const businessPhone = req.body.businessPhone;
  const website = req.body.website;
  const howLongInBusiness = req.body.howLongInBusiness
  const firstName = req.body.firstName;
  const secondName = req.body.secondName;
  const title = req.body.title;
  const mobilePhone = req.body.mobilePhone;
  const benefit = req.body.benefit;
  const typeOfBusiness = req.body.typeOfBusiness;
  const brands = req.body.brands;
  const dealerAt = req.body.dealerAt;
  const percentageViaEcom = req.body.percentageViaEcom;

  const mail = {
    from: businessName,
    to: "iluhaar@gmail.com",
    subject: `New Dealer Application`,
    html: `
          <h3>BUSINESS INFORMATION</h3>        
           <p>Business name: ${businessName}</p>
           <p>Street Address: ${streetAddress}</p>
           <p>Street Address 2: ${streetAddress2}</p>
           <p>City: ${city}</p>
           <p>State: ${state}</p>
           <p>Zip: ${zipCode}</p>
           <p>Business phone: ${businessPhone}</p>
           <p>Website: ${website}</p>
           <p>How long in business: ${howLongInBusiness}</p>
           <h3>CONTACT PERSON</h3>
           <p>First Name: ${firstName}</p>
           <p>Second Name: ${secondName}</p>
           <p>Title: ${title}</p>
           <p>Mobile phone ${mobilePhone}</p>
           <p>Email: ${email}</p>
           <h3>DEALERSHIP INFORMATION</h3>
           <p>Type of business: ${typeOfBusiness}</p>
           <p>What brands are you interested in: ${brands}</p>
           <p>Dealer at: ${dealerAt}</p>
            <p>Percentage of products gets sold via e-commerce: ${percentageViaEcom}</p>
           <p>Benefit: ${benefit}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});