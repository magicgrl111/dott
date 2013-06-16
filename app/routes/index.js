var mongoose = require('mongoose'),
  User     = mongoose.model('User'),
  Message  = mongoose.model('Message'),
  fs       = require('fs');


var inbox = [
    {
        // if uidvalidity changes, all uid values are void!
        UIDValidity: '664399135',

        // uid value of the message
        UID: 52,

        // message flags (Array)
        flags: [ '\\Flagged', '\\Seen' ],

        // date of the message (Date object)
        date: 'Sunday, June 16th',

        title: 'This is a special message',

        // single "from:" address
        from: {
            name: 'Selby Walker',
            address: 'selby.e.walker@gmail.com'
        },

        // an array of "to:" addresses
        to: [
            {
                name: 'test nodemailer',
                address: 'test.nodemailer@gmail.com'
            }
        ],

        // an array of "cc:" addresses
        cc: [
            {
                name: 'test nodemailer',
                address: 'test.nodemailer@gmail.com'
            }
        ],

        messageId: '<04541AB5-9FBD-4255-81AA-18FE67CB97E5@gmail.com>',
        inReplyTo: '<4FB16D5A.30808@gmail.com>',
        references: ['<4FB16D5A.30808@gmail.com>','<1299323903.19454@foo.bar>'],
        encrypted_body: 'This message has been protected using Dott(d.tt). Message ID:51bdea1a7092fdab21000001\n4005159065907373d9cdc44eea70a11e3c30189ca15f79500477961d7ad7e8ee',
        body: 'this is not a joke'
    },

    {
            // if uidvalidity changes, all uid values are void!
            UIDValidity: '664399135',

            // uid value of the message
            UID: 52,

            // message flags (Array)
            flags: [ '\\Flagged', '\\Seen' ],

            // date of the message (Date object)
            date: 'Sunday, June 16th',

            title: 'This is a special message',

            // single "from:" address
            from: {
                name: 'Selby Walker',
                address: 'selby.e.walker@gmail.com'
            },

            // an array of "to:" addresses
            to: [
                {
                    name: 'test nodemailer',
                    address: 'test.nodemailer@gmail.com'
                }
            ],

            // an array of "cc:" addresses
            cc: [
                {
                    name: 'test nodemailer',
                    address: 'test.nodemailer@gmail.com'
                }
            ],

            messageId: '<04541AB5-9FBD-4255-81AA-18FE67CB97E5@gmail.com>',
            inReplyTo: '<4FB16D5A.30808@gmail.com>',
            references: ['<4FB16D5A.30808@gmail.com>','<1299323903.19454@foo.bar>'],
            encrypted_body: 'This message has been protected using Dott(d.tt). Message ID:51bdf71f1c0f1b6322000001\n4005159065907373d9cdc44eea70a11e3c30189ca15f79500477961d7ad7e8ee',
            body: 'This message is super secret.  For your eyes only!'
        },

                {
            // if uidvalidity changes, all uid values are void!
            UIDValidity: '664399135',

            // uid value of the message
            UID: 52,

            // message flags (Array)
            flags: [ '\\Flagged', '\\Seen' ],

            // date of the message (Date object)
            date: 'Sunday, June 16th',

            title: 'This is a special message',

            // single "from:" address
            from: {
                name: 'Selby Walker',
                address: 'selby.e.walker@gmail.com'
            },

            // an array of "to:" addresses
            to: [
                {
                    name: 'test nodemailer',
                    address: 'test.nodemailer@gmail.com'
                }
            ],

            // an array of "cc:" addresses
            cc: [
                {
                    name: 'test nodemailer',
                    address: 'test.nodemailer@gmail.com'
                }
            ],

            messageId: '<04541AB5-9FBD-4255-81AA-18FE67CB97E5@gmail.com>',
            inReplyTo: '<4FB16D5A.30808@gmail.com>',
            references: ['<4FB16D5A.30808@gmail.com>','<1299323903.19454@foo.bar>'],
            encrypted_body: 'This message has been protected using Dott(d.tt). Message ID:51bdf6e05649055b22000001\n27c613ec418cb1d0b13bed6a97f47359b087e37d8a5fb19c3a972f5fb3d5bf0f7a188d6b38e772ead19315f9c015da54961ec26e130ad7a24df5a9c89a1ba594',
            body: 'This message is super secret.  For your eyes only!'
        }
];


exports.index = function(req, res){
  res.render('home');
};

exports.mailbox = function(req, res){
  res.render('mailbox', { messages: inbox});
};

exports.auth_google_callback = function(req, res) {
  res.redirect('/mailbox');
};
