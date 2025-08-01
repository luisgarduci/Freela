const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const server = express();

const port = 8081;

server.use(cors({
    origin: "*",
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}))

server.use(express.json());

server.listen(port, () => {
    console.log("Servidor Rodando");
})

server.post("/message", async (req, res) => {
    console.log(req.body);
    const {name, email, number, message} = req.body;

    const user = "luisfernandogmena@gmail.com";
    const pass = "nqcjzdwmaiauhheu";

     const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass // Use senha de app se for Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'luisfernandogmena@gmail.com',
      subject: `Nova mensagem de ${name}, Número: ${number}, Email: ${email}`,
      text: message
    });

    //celsof.junior@hotmail.com

    res.status(200).send('Mensagem enviada com sucesso');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao enviar e-mail, entre em contato pelo whatsapp');
  }
});


