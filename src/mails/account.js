const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nelsiboni@gmail.com',
        subject: 'thanks for signing in!',
        text: `Welcome to the app, ${name}. Let me knowhow you get along with the app.`
    })
}

const sendCancelAcoountEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nelsiboni@gmail.com',
        subject: 'cancel account',
        text: `hi ${name}, you have just made a very bad choice to cancel your account!.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelAcoountEmail
}