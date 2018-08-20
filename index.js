'use strict';
const nodemailer = require('nodemailer');

const auth = {
  user: '',
  pass: ''
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth
});

async function sendMail(to, point) {
  let mailOptions = {
    from: `"BeeMon" <${auth.user}>`,
    to: to,
    subject: `${point}`,
    text: `${point}`
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(to, error.message);
    }
  });
}

let contents =[
  ["user1@gmail.com", 990],
  ["user2@beesightsoft.com", 100],
  ["user3@icloud.com", 100],
]

contents.forEach(async v => {
  await sendMail(v[0], v[1]);
  console.log(`Send ${v[0]} with ${v[1]}`)
})