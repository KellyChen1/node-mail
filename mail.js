const nodemailer = require('nodemailer')

async function main() {
    let account = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,
        secure: false,
        auth:{
            user:account.user,
            pass: account.pass
        }
    });

    let mailOptions ={
        from:"862740899@qq.com",
        to: "862740899@qq.com",
        subject:"hello",
        text:"hello, world",
        html:"<b>hello, kelly</b>"
    };

    let info =await transporter.sendMail(mailOptions)

    console.log("message sent: %s",info.messageId);

    console.log("preview Url:%s",nodemailer.getTestMessageUrl(info));

}

main().catch(console.error )