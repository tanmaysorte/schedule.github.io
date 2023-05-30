// const nodemailer = require('nodemailer');
// const moment = require('moment');

// configure nodemailer transporter using Gmail SMTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-gmail-username',
//     pass: 'your-gmail-password'
//   }
// });

// api url
const api_url =
      "https://codeforces.com/api/contest.list";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data.result);
}
// Calling that async function
getapi(api_url);




// Function to define innerHTML for HTML table
function show(data) {
  console.log(data[0]);
  let tab =
      `<tr class="table-dark">
        <th>Name</th>
        <th>Duration</th>
        <th>StartTime</th>
        <th>Type</th>
       </tr>`;
 
  // Loop to access all rows
  for (let i=0;i<10;i++) {
    let tmp = "https://codeforces.com/contestRegistrants/"+data[i].id;
      tab += `<tr>
  <td>${data[i].name} </td>
  <td>${data[i].durationSeconds/3600}hrs</td>
  <td>${new Date(data[i].startTimeSeconds * 1000).toLocaleString('en-US',{timeZone: 'Asia/Kolkata',timeZoneName: 'short',hour12: false,}).split("T").join(' ')}</td>
  <td><a href=${tmp}>${data[i].type}</a></td>         
  </tr>`;
  // <td>${new Date(data[i].startTimeSeconds * 1000).toISOString().split("T").join(' ')}</td>
  // <td>${data[i].startTimeSeconds}</td>
}
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}







  

// set the date of the coding contest
// const contestDate = moment('2023-06-01', 'YYYY-MM-DD');

// set the recipient email address
const recipientEmail = 'your-email-address';

// calculate the number of days until the contest
// const daysUntilContest = contestDate.diff(moment(), 'days');

// send an email reminder if the contest is 7 days away
// if (daysUntilContest === 7) {
//   const mailOptions = {
//     from: 'your-gmail-username',
//     to: recipientEmail,
//     subject: 'Coding Contest Reminder',
//     text: 'The coding contest is in 1 week!'
//   };

  // send the email using the transporter
  // transporter.sendMail(mailOptions, function(error, info) {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
// }
