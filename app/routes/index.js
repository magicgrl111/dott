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
        encrypted_body: 'This message has been protected using Dott(d.tt). Message ID:51be046fab33617a23000001\n6817027b5733191f4f2df0502d49eccd6ef76a10371e90b2a233265d0e6e5d3f33a7cfdda65833ad7c2974c7b1cc3eab54e3253ad50d7755abe9ab8f20d7c8de26c72131094ac4c145fc4be01f5432a4f14264227fab6dbfe10b6ac9f9cd98107067bded3df14150dcad254f7923dec8ecd3417ab5168d95f6e814b4bc1a091dab0275250d3bc6e41d7e8429b1093d2cf72389b9b81fecd001dc07f0e501cd9a08f3ef8b7b91426ee47367a8431b01d0cdfe1a57f2441427ac90f23822fa8f18e9b3f04552da80c5fa782a6a0bd0ba4a8fc7dbaef00fcc3451298fa23272897149cc3e47ed1a4ac41d7632a3dfcb7b1c1b8737fa8c6cc666a1856e2276496ff53f3af869a5bed2f8e3e308872880cf58a38fa802a031b0232e95864f8e5abcbfbb52984e4a42bd24d7d27e673ff1fdbcae97cc2a4e1e16f530b774efb4b1d0fa348a19f90f4c10e0b979cadf220cf5c8927eb1ab5e6745b2657b9405f3b807dc8bd5229eec8e0489c4cc7b9a7465f2d47698e4041ae80a98055676b8bcb5f971b14371674229c16b9c6cb9f3f0890506dc370ddeb8be5e4ce90c1f1b467c2fbca43670d8bac66c04f95cd1a323cb0b8a7feba4e7711b3650e428153f950de890b036f3d3d547668c07bee4c7c949509a93f2a1172cf98fc192facdb1d27ff5dad76ce6b9e16f31fc56d9434e684df698836952e2e4603bc754f17e91006cfd9233cb66e8049cc427f24f057ece7d3d5222ae56e900633f1b76865bf8e4961a364a4948c81afe15b1e7f663fb8e9c04540a7b2994d59be74718a068270da3015fca148b74f64135bdc3bbd834267cac5c044ae82b661489fcbc3d94501f1e3d8fd4094c982cbf54bee660178d9a45e015ea1accdc13fcdc3cbfec2860f1dcd05ffee073e35dbdafd2e34c7dafa4d930f6be5df1816542c6ede0cd74ef18a8288642209a44926f2f8101fa42c5bd151d8a159f108fb6abe14d4ef5a2b90b69d7b20aa47ef2da6fe9ff0ef776ef49bd42391a377a71c5fc50749b337eab1de1d5a959d3ac97a09b2da5d285871de911dc27d7890048cd5cf2f022418268720f38760e72d522b6750c1d6285ff28da1493677f72ca8b171090deeccfc452fab3f28069b32a8e1abaebd5a1b0cdf68d40ee36bdac2c9465355da26ca0afd27a47afc7530b0bb5335ff4f0187d8e4c6e564b1e0f7b0579e95a7610b032b4c908c0064f520f5044e5cedb335d3877e17b6a862c6369fdf2d221a667b0a0f9713fdb990e55b090ae33715265df0d9a79c8e4a81d5e5936463da7475b22b8c52f9bd7df2365fe3c2c7d43be541c2be8577500d7b5d9dad5bddb9cc06adadd04138faf07a6bfcd95c205eb2283a5a1b577ceca5cf14b3fced1ed518c829448ea85d9d0f9c8ed58ca9a1eb1954dda6f73ce8bce74319eec3a97d55356b5b398957768f64ecd24e0b887365d4820849599815b45423dcc7402f282fa89d33d547261bfa0f4810f39fba07a4f25997b85d196398b256afb96ae24677ab82d122b697dfe6a23d46e46d00e27916f3cb14e92cf146f05a8d0a1c7e7cc484375b0f763534e481bee9961928e6a3c8da73103611e5118186ab89f8a93f72ac0754511a04a9c1e3f1320a835906408a97b1125871d3078c61f098a1f7ad885fd94cd40e76fd15ee0bf0f8bfae26e722644153432d801c382c0b7a68fbf39277af69587a6440bc63b0b28af23a6d72f3147f26838b46f626f7db5d3821869c81d982c7cc9d28f0d84025010008290c4bc1f8451a7e103e088d8d3a2e118736fc3e6ff870d67938bec055c64457b7e18fdb0acffa43a9d91ad0ca294fb82fa1d297deef376e9f19ffbeb10a024255e7e1d6f2f04a6b600c7886a8dd9e36327008d7f17cac5a6df8df4aff9efff4f4bbaa4a334548df0ce6af5dc56802d3dcd3da2356bfc2255f28559834ec402fa3f0b47ee2f9de1debe87300b342e2c43d07cdf6f68fd607db0274cd5a06375da76d8763dedc38139e9918718',
        body: '19th September 2006\n\nDear Sacia (beautiful name, I\u2019ve never heard it before),\n\nThank you for your incredible letter; incredible, because you do indeed sound phenomenally like Harry Potter, in your physical resemblance and in your life experience. I cannot tell you how moved I was by what you wrote, nor how sorry I am to hear about your parents. What a terrible loss.\n\nI know what it is like to be picked on, as it happened to me, too, throughout my adolescence. I can only wish that you have the same experience that I did, and become happier and more secure the older you get. Being a teenager can be completely horrible, and many of the most successful people I know felt the same way. I think the problem is that adolescence, though often misrepresented as a time of rebellion and unconventionality, actually requires everybody to conform if they aspire to popularity \u2013 or at least to \u2018rebel\u2019 while wearing the \u2018right\u2019 clothes! You\u2019re now standing on the threshold of a very different phase in your life, one where you are much more likely to find kindred spirits, and much less likely to be subject to the pressures of your teenage years.\n\nIt is an honour to me to know that somebody like you loves Harry as much as you do. Thank you very much for writing to me, I will treasure your letter (which entitles you to boast about this response as much as you like!)\n\nWith lots of love\n\nJKRowling\n\n(Jo to you!)\n\nx\n'
    },

    {
            // if uidvalidity changes, all uid values are void!
            UIDValidity: '664399135',

            // uid value of the message
            UID: 52,

            // message flags (Array)
            flags: [ '\\Flagged', '\\Seen' ],

            // date of the message (Date object)
            date: 'Sunday, June 16th, 11:23 AM',

            title: 'A Message For You',

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
            encrypted_body: 'This message has been protected using Dott(d.tt). Message ID:51be028504439b5f23000001\nc9b1578769bbd448f345d3f1ca566d8f232d65893c13d6e3d212f8abda44d2210aefe64a447ab91308eef6f0820d7c693a8df66685ed210e339e03f8f24c7767434b7a36b93f524093a3979473225128c397554f2d1d04f83c033de6b51fd7858f55ba1a528f3bdffbac804f1ccbfe82ff439da55a00d9d6370c4f23ccf73b9215e9e0b0b9e9e6bba32500f6cd0de9dcb2a42f6f14465df562ef4134e39737740042679b78ed38251b230c688151442b078b66742a0b3e0c6b40c2c75d8352f9083f4abe9a2350852b3df34ff9298d9c821c1c73775aeaf29cd0842092755516b413a78346b03dab892eb92b351fda14558451459832164279bc89146d1545b0a6cb5bf54c46e9470d0a78761101d8d627b1aff7652c4c3484be850cf9f1e9a2aa1ada13ac7aad95fe15983d1c3c54482953ecc9d456d23433199d0acb3540201545b3018db5de43ec167750825181997d0e077e3568543619a13b17bcc90ccdb05a083a859d8d4ea3d9dff1eb9766af43745b072f76a460232b21b93d9e7fa28b4892bd65a59b01d1530f98b4bca99b6f5a83673df75f1d1114c08499d888f37dd042a8ecfcc9afd14ce00d33071c825e0a33e96c85c6613baf68e7f30c1edb6ed139fbc4d1a3dc599556e604966e8eb12953ae391754d82d26a70ab279bde0bd880f9cb8f48a33141866d8f0e946e3e340e74f0596f288c1d1d868aaf61cddcca96b021255a74d4a7dd5d86545c5ffba93425abdc81a81061997a6e2a22d633d5ce9c206927d0f99deaddabd5a0edc5896e0af66689ed183edfc1b8a50d5e564f2be7a0e5bcc9397747d1c67f35ac0412ed6afd42e095af50ca0616a4c4cfe62e7ca7c840f15f6bc39201f49292717be37bd0247084052b2d880bb345dd1610c5cd68f4cfdd2159be88401c47e38c814317cb2c33f479c83c873deab04e15de62db70cb941dd3213b10c529eb04c287e81b14d9b4253e7a8e052a93b8c1c22e8bbb9d549a182244a00c2cd220fb31b4bd1c1f1695c4da8ae9588a3e032cf060876c3095f8b80dbb6ccb2c1b836cd20694f2519d04596051a03aead47ec127b65e56a2955e2b98adb9fb05d9323bc5c5ab1db51e055e14c5fe13b47143cd8b7077b6a8ea089f78fe553778c325afdb6f868cb9eba7038542b8bd70862b1319632275e3f489ae2cc7c275dc85b647a90f929a889db1ab8fbecb343b317d5c222632ae39873856365e52d34d20f0a7f3b1ab0e40a41e2bef45093480bd649491e5c3fb5e541c5407cb0d5494c81e87f781bbcfe8c4affba2ee9d98c11ec44c7e6a08422942e8e07afc19e02aa05cd1882b3d3974513184e53a5a3b873627f711a7776320556a28d2718c322e5779de87e497580415f8d8327b13e193339d76d0006d02ae8210a1d4d925fa90f79efe0e79006e33ede8de4614fe2a40418b7dd5ef49d464e290e9bc4ee4042676f865ee0950b54536316463672e36a474776262df74121bdce821cf0a708d446e745a87e57fc054aacef24e6296dad4c2ec0aee737ccb1eff5ac73dbf80892f8c526e36c16cd05b4c0c5616583f2eaf5c736d1bc9865f44911e33f79f6b8e2eb33e93d8a47d125750c52152fa0d7a14b60b599f4e23d3e43e2537dd1760427b74e32d078e735cfdb68c30422b3c47ad2a9291c3f2fa06b2e924a87d7a9de51f7f69b7eaeae8eca990216b0371144463ce34dcb0441c293f37295e80b2e186b46dfb7670c939cda81eefd0f015e55e806e861b788f3190b96aafac6668444324254e6077b379ce516aae7a298c004d9be2d598a5fca9aede68b4001b547308da85288e5c2e6df3624cb8eef7fa3d8b5dff91c8e3434a8b0c945ffd59c000ee0f3c0d2710b4d0905347871523f8727f67fb190b70bf03450ae3967424f57180e4e38eb63f1dd456c0c2868dad507b59998a6f1beba502cfa6ff93d388ae7cf4fc5547be0321f7332514da1a5cc368a1b99396d0ca083f964ad3c1d1a7e861a50ad5953a32afa930ba337f8f444e0a966db8493b57ec41a716ac90a4456fb89bb0ef990ef5ee357e50d70c8293e517c7f5d4f5719f7b4b6a4719c7f8260e72d4ed740eeca833eda1ab71916ff4aa28779e900ed757d80101fbb2a36a89e4ad74dc23e611ccd881b0d962fe7168dbd65f17a30312e3643dccc5d4a34e00582b74dc1908d8bb48bbae9374996d7d61d71f2e98e19a01b1767875016ad543529911156640f685aaad83639c35289838e23ee9397dc618382cbcd6f04147c3166d0b46f62f2f01dc52d6582b60208ababbfd6cb1b6f57b9a0915a659fba7b49d6245fa74d4436e8162eaf37f0c9c5310c9f679352d72c6721fb76fbc4105adec3a0b00f60e1e5be896bfc07ef316f08935fdbb3d8262c1ad7023df908c06ff79bc9aa7f8eb7553447117fc99a81675860f9277b81e4c901d613b808d37ed5c7593aea045e3a0ab0d43db60bb4b35797af028438bdaafc67657214917f3b2eb791d8be117fc6bb4df877ae16fba841c43562ae2e39c0ffe3b1a6e45a88d0675a9490a1dba6d8b89e4ca81f7488ab1d91220a27297be68e55c64ffda9190f5d0cfed7e49eadb9bb2dedb7387a175d5008b6d7d2df71918935819fd65028988c77cd5c37bc7408ff83429be5dd49050e6961582efc16bf1662b82c13635150a2abdfcc9b07aa4e533641cd54b97e1d212c29c689d14f9693d41a842c7519942d926133fba45e866beb7ad7b33114662eb66841e20a2468c54dd4d5390a892029880f125acee40bc0b328f576469a70e4d560f457f81038a0f9a58e0c735728d3adc7f6cc02e885cc3873ac6477ac92d664ee3789db9865b7b47fb46bd914a0d9e8156b598841c0cd6c95f373a4b6a0af89bfbd0805675e9aec3a91877d10321243187a298278a2aae45d50a93182bf38cbc4297cb2f289721ac2c797c794794ff7bc0ddd3ee18bc810b993dec89e181573446a7448d2fe736e36fa4f9e3f0ffe46aa0be66c7ce42b2cbdcc2683e350b7a9b83b171b090232645ccd6283be097e71f31afb25fe16f3bc8add4953ed6c35c2d65b85368eb552e2a23bed676b18b0613a3126ff4ac0038d6f6f75b03d6e7ec10c00147edfde9c932a029dc14fb1122bf1eadf80314ad9340d740b1c7a041e6707ba00702212328bd957534122e6fa2a909ed535c9a53a6ffaed7efdc90a973b435f2a23afdbffc891cbcdc761facb82c5f29b5b159440945897e92a820678d6546d3627f8c15dcfa636d0c0cd54db5d62327bd5fb282e227030bed95674e27c5af03419bf3d56c58009ca63095545b86812268f3e7cd16943ec7ea3ff549547dd58d3e0e3c54c360acb223a83aab33017e7ac9856e2aa1dff4520c0e16a5278c22b016e44573ed8a5e4b0e155973db1796023d1370102c1a6a59c47226ff002349f882f46ad40e37d46fbc808900c2b53cf5dd8b5951290ad77c0d220ae719e3228d2effdf7ed24053f510ba62e540e6a2c1508884dd47fc120b22320d75f88e48a7407858fab4c7823e4d1d5fddaa1af6534668ce939cc190945477d905d8d4556b142706b6c74bdcd687a5706d6d82fe49e1a45f630b3d39b9ddf9438fb028fe17f62f74913f1306b2efcc4822debdf0a908efb93ebeef0d588152f17becc6339e171fd7383bb903429c70312eaf427f38dd39e20869905947c4f2d555af4482c023b56d71600549c066ef031377a8bcd7020cb55464541b618a1b60259c6100011fc11a37e9261b3b86bfe93aae90b45121487bec26c0769158e5fba62e70e2e57d81e15ae997503105fdff85fe9cae22dd43b91a95324f21fefecd2b129fa7a379351305001aa59ea8337ef1b563aff928879e3d9e2',
            body: 'Writing advice from C.S. Lewis to a young American fan named Joan Lancaster:\n\nThe Kilns,\nHeadington Quarry,\nOxford\n26 June 1956\n\nDear Joan\u2013\n\nThanks for your letter of the 3rd. You describe your Wonderful Night v. well. That is, you describe the place and the people and the night and the feeling of it all, very well \u2014 but not the thing itself \u2014 the setting but not the jewel. And no wonder! Wordsworth often does just the same. His Prelude (you\u2019re bound to read it about 10 years hence. Don\u2019t try it now, or you\u2019ll only spoil it for later reading) is full of moments in which everything except the thing itself is described. If you become a writer you\u2019ll be trying to describe the thing all your life: and lucky if, out of dozens of books, one or two sentences, just for a moment, come near to getting it across.\n\nAbout amn\u2019t I, aren\u2019t I and am I not, of course there are no right or wrong answers about language in the sense in which there are right and wrong answers in Arithmetic. \u201cGood English\u201d is whatever educated people talk; so that what is good in one place or time would not be so in another. Amn\u2019t I was good 50 years ago in the North of Ireland where I was brought up, but bad in Southern England. Aren\u2019t I would have been hideously bad in Ireland but very good in England. And of course I just don\u2019t know which (if either) is good in modern Florida. Don\u2019t take any notice of teachers and textbooks in such matters. Nor of logic. It is good to say \u201cmore than one passenger was hurt,\u201d although more than one equals at least two and therefore logically the verb ought to be plural were not singular was!\n\nWhat really matters is:\u2013\n\n1. Always try to use the language so as to make quite clear what you mean and make sure your sentence couldn\u2019t mean anything else.\n\n2. Always prefer the plain direct word to the long, vague one. Don\u2019timplement promises, but keep them.\n\n3. Never use abstract nouns when concrete ones will do. If you mean \u201cMore people died\u201d don\u2019t say \u201cMortality rose.\u201d\n\n4. In writing. Don\u2019t use adjectives which merely tell us how you want us to feel about the thing you are describing. I mean, instead of telling us a thing was \u201cterrible,\u201d describe it so that we\u2019ll be terrified. Don\u2019t say it was \u201cdelightful\u201d; make us say \u201cdelightful\u201d when we\u2019ve read the description. You see, all those words (horrifying, wonderful, hideous, exquisite) are only like saying to your readers, \u201cPlease will you do my job for me.\u201d\n\n5. Don\u2019t use words too big for the subject. Don\u2019t say \u201cinfinitely\u201d when you mean \u201cvery\u201d; otherwise you\u2019ll have no word left when you want to talk about something really infinite.\n\nThanks for the photos. You and Aslan both look v. well. I hope you\u2019ll like your new home.\n\nWith love\nyours\nC.S. Lewis'
        },

                {
            // if uidvalidity changes, all uid values are void!
            UIDValidity: '664399135',

            // uid value of the message
            UID: 52,

            // message flags (Array)
            flags: [ '\\Flagged', '\\Seen' ],

            // date of the message (Date object)
            date: 'Sunday, June 16th, 11:19 AM',

            title: 'A Message From Selby',

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
            body: '10th February 1989\n\nDear Amy,\n\nI must write a special letter and thank you for the dream in the bottle. You are the first person in the world who has sent me one of these and it intrigued me very much. I also liked the dream. Tonight I shall go down to the village and blow it through the bedroom window of some sleeping child and see if it works.\n\nWith love from,\n\n(Signed)\n\nRoald Dahl'
        }
];


exports.index = function(req, res){
  res.render('home');
};

exports.mailbox = function(req, res){
  res.render('mailbox', { messages: inbox });
};

exports.auth_google_callback = function(req, res) {
  res.redirect('/mailbox');
};
