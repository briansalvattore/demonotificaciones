'use strict';
const admin = require('firebase-admin');

module.exports = function (app) {

    var token = "f12NKQqxBhw:APA91bGoeVe0xmTr17jMGAr4BeUkSHFz5w3DaqlWzJpLLJnqLLvBr41mmAZQMGSXgY-9428vay994FzWE9XMOsQLmxyOej-SAVr1l2AUnXobqbSIvT3855FPPqC5JKRJ45v0I9WlQHxZ";

    app.get('/', (req, res) => {
        res.status(200).json({
            api: [
                "user"
            ]
        });
    });

    app.get('/notification', (req, res) => {
        
        admin.messaging().sendToDevice(token, {
            data: { 
                status: "1"
            },
            notification: {
                title: "Hola Pepito mira la nueva promoción",
                icon: "ic_notification",
                sound: "default",
                clickAction: "page"
            }
        })
        .then(function(response) {
            res.status(202).json({ "send": true, "response": response });
        })
        .catch(function(err) {
            res.status(404).json({ "send": false, "err" : err });
        })


    })


}