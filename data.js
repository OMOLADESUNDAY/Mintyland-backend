const bcrypt=require('bcryptjs')
const data={
    TrendingData:[
        {
        name:"Ashland",
        image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445990/minty_2_ndsdiy.png', 
        no_of_review:13,
        countInStock:1,
        category:'plain',
        price:20,
        description:'Ashland is a virtual plain land ',
        rating:4.3},
        {name:"Cleveland",
        image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445985/minty_5_rag5o6.png',
        no_of_review:23,
        countInStock:1,
        category:'plain', 
        price:20,
        description:'Cleveland is a virtual plain land located in Cleve',
        rating:4.0},
        {name:"Cherryland",
        image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445983/minty_7_twoizj.png',
        no_of_review:53,
        countInStock:10,
        category:'shoe',
        price:20,
        description:'Cherryland is a virtual plain land located in Cherry',
        rating:4.0},
        {name:"Cloverland",
        image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445983/minty_4_zfgtm2.png',
        no_of_review:53,
        countInStock:1,
        category:'plain',
        price:5,
        description:'Cloverland is a virtual plain land located in Clover',
        rating:4.0},
        {name:"Cortland",
        image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445979/minty_6_kosjns.png',
        no_of_review:21,
        countInStock:1,
        category:'valley',
        price:5,
        description:'Cortland is a virtual valley land located in Cort',
        rating:5.0},
        {name:"Dairyland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445972/Ashland_j3xgpu.png',no_of_review:53,
        countInStock:1,
        category:'sloapy',
        price:5,
        description:'Dairyland is a virtual sloapy land located in Dairy',
        rating:3.7},
        {
            name:"Forkland",
            image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445962/minty_3_c4hisj.png', 
            no_of_review:13,
            countInStock:1,
            category:'island',
            price:10,
            description:'Forkland is a virtual plain land ',
            rating:4.3},
            {name:"Kirtland",
            image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445962/deliver_mimxyt.png',
            no_of_review:23,
            countInStock:1,
            category:'plain', 
            price:5,
            description:'Kirtland is a virtual plain land located in Kirt',
            rating:4.0},
            {name:"Oakland",
            image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680445957/minty_1_kdcoze.png',
            no_of_review:3,
            countInStock:10,
            category:'shoe',
            price:5,
            description:'Oakland is a virtual plain land located in Oak',
            rating:4.4},
            {name:"Ragland",
            image:'.https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098986/r4_ynhyoa.png',
            no_of_review:53,
            countInStock:1,
            category:'sloap',
            price:5,
            description:'Ragland is a virtual plain land located in Rag',
            rating:4.0},
            {name:"Woodland",
            image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098971/fi1_kuvusr.png',
            no_of_review:21,
            countInStock:1,
            category:'valley',
            price:5,
            description:'Woodland is a virtual valley land located in Wood',
            rating:5.0},
            {name:"Dixieland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',no_of_review:53,
            countInStock:1,
            category:'sloapy',
            price:5,
            description:'Dixieland is a virtual sloapy land located in Dixieland',
            rating:3.7},
            // {
            //     name:"Ashland",
            //     image:'./image/c1.png', 
            //     no_of_review:13,
            //     countInStock:1,
            //     category:'plain',
            //     price:20,
            //     description:'Ashland is a virtual plain land ',
            //     rating:4.3},
            //     {name:"Cleveland",
            //     image:'./image/c2.png',
            //     no_of_review:23,
            //     countInStock:1,
            //     category:'plain', 
            //     price:20,
            //     description:'Cleveland is a virtual plain land located in Cleve',
            //     rating:4.0},
            //     {name:"Cherryland",
            //     image:'./image/c3.png',
            //     no_of_review:53,
            //     countInStock:10,
            //     category:'shoe',
            //     price:20,
            //     description:'Cherryland is a virtual plain land located in Cherry',
            //     rating:4.0},
            //     {name:"Cloverland",
            //     image:'./image/c4.png',
            //     no_of_review:53,
            //     countInStock:1,
            //     category:'plain',
            //     price:5,
            //     description:'Cloverland is a virtual plain land located in Clover',
            //     rating:4.0},
            //     {name:"Cortland",
            //     image:'./image/c5.png',
            //     no_of_review:21,
            //     countInStock:1,
            //     category:'valley',
            //     price:5,
            //     description:'Cortland is a virtual valley land located in Cort',
            //     rating:5.0},
            //     {name:"Dairyland",image:'./image/c6.png',no_of_review:53,
            //     countInStock:1,
            //     category:'sloapy',
            //     price:5,
            //     description:'Dairyland is a virtual sloapy land located in Dairy',
            //     rating:3.7},
            //     {
            //         name:"Ashland",
            //         image:'./image/c1.png', 
            //         no_of_review:13,
            //         countInStock:1,
            //         category:'plain',
            //         price:20,
            //         description:'Ashland is a virtual plain land ',
            //         rating:4.3},
            //         {name:"Cleveland",
            //         image:'./image/c2.png',
            //         no_of_review:23,
            //         countInStock:1,
            //         category:'plain', 
            //         price:20,
            //         description:'Cleveland is a virtual plain land located in Cleve',
            //         rating:4.0},
            //         {name:"Cherryland",
            //         image:'./image/c3.png',
            //         no_of_review:53,
            //         countInStock:10,
            //         category:'shoe',
            //         price:20,
            //         description:'Cherryland is a virtual plain land located in Cherry',
            //         rating:4.0},
            //         {name:"Cloverland",
            //         image:'./image/c4.png',
            //         no_of_review:53,
            //         countInStock:1,
            //         category:'plain',
            //         price:5,
            //         description:'Cloverland is a virtual plain land located in Clover',
            //         rating:4.0},
            //         {name:"Cortland",
            //         image:'./image/c5.png',
            //         no_of_review:21,
            //         countInStock:1,
            //         category:'valley',
            //         price:5,
            //         description:'Cortland is a virtual valley land located in Cort',
            //         rating:5.0},
            //         {name:"Dairyland",image:'./image/c6.png',no_of_review:53,
            //         countInStock:1,
            //         category:'sloapy',
            //         price:5,
            //         description:'Dairyland is a virtual sloapy land located in Dairy',
            //         rating:3.7},
            //         {
            //             name:"Ashland",
            //             image:'./image/c1.png', 
            //             no_of_review:13,
            //             countInStock:1,
            //             category:'plain',
            //             price:20,
            //             description:'Ashland is a virtual plain land ',
            //             rating:4.3},
            //             {name:"Cleveland",
            //             image:'./image/c2.png',
            //             no_of_review:23,
            //             countInStock:1,
            //             category:'plain', 
            //             price:20,
            //             description:'Cleveland is a virtual plain land located in Cleve',
            //             rating:4.0},
            //             {name:"Cherryland",
            //             image:'./image/c3.png',
            //             no_of_review:53,
            //             countInStock:10,
            //             category:'shoe',
            //             price:20,
            //             description:'Cherryland is a virtual plain land located in Cherry',
            //             rating:4.0},
            //             {name:"Cloverland",
            //             image:'./image/c4.png',
            //             no_of_review:53,
            //             countInStock:1,
            //             category:'plain',
            //             price:5,
            //             description:'Cloverland is a virtual plain land located in Clover',
            //             rating:4.0},
            //             {name:"Cortland",
            //             image:'./image/c5.png',
            //             no_of_review:21,
            //             countInStock:1,
            //             category:'valley',
            //             price:5,
            //             description:'Cortland is a virtual valley land located in Cort',
            //             rating:5.0},
            //             {name:"Dairyland",image:'./image/c6.png',no_of_review:53,
            //             countInStock:1,
            //             category:'sloapy',
            //             price:5,
            //             description:'Dairyland is a virtual sloapy land located in Dairy',
            //             rating:3.7},
            //             {
            //                 name:"Ashland",
            //                 image:'./image/c1.png', 
            //                 no_of_review:13,
            //                 countInStock:1,
            //                 category:'plain',
            //                 price:20,
            //                 description:'Ashland is a virtual plain land ',
            //                 rating:4.3},
            //                 {name:"Cleveland",
            //                 image:'./image/c2.png',
            //                 no_of_review:23,
            //                 countInStock:1,
            //                 category:'plain', 
            //                 price:20,
            //                 description:'Cleveland is a virtual plain land located in Cleve',
            //                 rating:4.0},
            //                 {name:"Cherryland",
            //                 image:'./image/c3.png',
            //                 no_of_review:53,
            //                 countInStock:10,
            //                 category:'shoe',
            //                 price:20,
            //                 description:'Cherryland is a virtual plain land located in Cherry',
            //                 rating:4.0},
            //                 {name:"Cloverland",
            //                 image:'./image/c4.png',
            //                 no_of_review:53,
            //                 countInStock:1,
            //                 category:'plain',
            //                 price:5,
            //                 description:'Cloverland is a virtual plain land located in Clover',
            //                 rating:4.0},
            //                 {name:"Cortland",
            //                 image:'./image/c5.png',
            //                 no_of_review:21,
            //                 countInStock:1,
            //                 category:'valley',
            //                 price:5,
            //                 description:'Cortland is a virtual valley land located in Cort',
            //                 rating:5.0},
            //                 {name:"Dairyland",image:'./image/c6.png',no_of_review:53,
            //                 countInStock:1,
            //                 category:'sloapy',
            //                 price:5,
            //                 description:'Dairyland is a virtual sloapy land located in Dairy',
            //                 rating:3.7},
        
    ],
    RealTrendingData:[
        {_id:1,name:"olorioko kafata",image:'./image/c1.png',no_of_review:53,
        countInStock:10,
       
        category:'shoe',
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {_id:2,name:"olorioko kafata",image:'./image/c2.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {_id:3,name:"olorioko kafata",image:'./image/c3.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {_id:4,name:"olorioko kafata",image:'./image/c4.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        // {_id:5,name:"olorioko kafata",image:'./image/c5.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:6,name:"olorioko kafata",image:'./image/c6.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:7,name:"olorioko kafata",image:'./image/cu1.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:8,name:"olorioko kafata",image:'./image/cu2.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:9,name:"olorioko kafata",image:'./image/cu3.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:10,name:"olorioko kafata",image:'./image/cu5.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:11,name:"olorioko kafata",image:'./image/c1.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:12,name:"olorioko kafata",image:'./image/c2.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:13,name:"olorioko kafata",image:'./image/c3.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:14,name:"olorioko kafata",image:'./image/c4.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:15,name:"olorioko kafata",image:'./image/c5.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:16,name:"olorioko kafata",image:'./image/c6.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:17,name:"olorioko kafata",image:'./image/cu1.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:18,name:"olorioko kafata",image:'./image/cu2.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:19,name:"olorioko kafata",image:'./image/cu3.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        // {_id:20,name:"olorioko kafata",image:'./image/cu5.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0},
        
    ],
    LandAndEstateData:[
        {name:"olorioko kafata",image:'./image/c1.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c2.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c3.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c4.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c5.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c6.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/cu1.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/cu2.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/cu3.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/cu4.png',no_of_review:53,
        countInStock:10,
        
        category:'shoe',
        
        price:20,
        description:'Shoe for men',
        rating:4.0}
        ],
        RealLandAndEstateData:[
            {_id:1,name:"olorioko kafata",image:'./image/c1.png'},
        {_id:2,name:"olorioko kafata",image:'./image/c2.png'},
        {_id:3,name:"olorioko kafata",image:'./image/c3.png'},
        {_id:4,name:"olorioko kafata",image:'./image/c4.png'},
        {_id:5,name:"olorioko kafata",image:'./image/c5.png'},
        {_id:6,name:"olorioko kafata",image:'./image/c6.png'},
        {_id:7,name:"olorioko kafata",image:'./image/cu1.png'},
        {_id:8,name:"olorioko kafata",image:'./image/cu2.png'},
        {_id:9,name:"olorioko kafata",image:'./image/cu3.png'},
        {_id:10,name:"olorioko kafata",image:'./image/cu5.png'},
        {_id:11,name:"olorioko kafata",image:'./image/c1.png'},
        {_id:12,name:"olorioko kafata",image:'./image/c2.png'},
        {_id:13,name:"olorioko kafata",image:'./image/c3.png'},
        {_id:14,name:"olorioko kafata",image:'./image/c4.png'},
        {_id:15,name:"olorioko kafata",image:'./image/c5.png'},
        {_id:16,name:"olorioko kafata",image:'./image/c6.png'},
        {_id:17,name:"olorioko kafata",image:'./image/cu1.png'},
        {_id:18,name:"olorioko kafata",image:'./image/cu2.png'},
        {_id:19,name:"olorioko kafata",image:'./image/cu3.png'},
        {_id:20,name:"olorioko kafata",image:'./image/cu5.png'},
            ],
        RecentSold:[
            {name:"Everland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',rarity:"common",volume:900,landSize:"https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png"},
            {name:"Gardaland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',rarity:"common",volume:900,landSize:"https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png"},
            {name:"Kings Island",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',rarity:"common",volume:900,landSize:"https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png"},
            {name:"Legoland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',rarity:"common",volume:900,landSize:"https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png"},
            {name:"Wonderland",image:'https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png',rarity:"common",volume:900,landSize:"https://res.cloudinary.com/dkzuuda7n/image/upload/v1680098975/f6_o8lq83.png"},
            ],
    product:[
        {
            _id:1,
            slug:'clothformen',
            name:"shirt",
            price:20,
            description:'Shirt for men',
            image:'/image/c1.png',
            rating:5.0,
            no_of_review:23,
            countInStock:55,
            brand:'Gucci',
            category:'shirts'
        },
        {
            _id:2,
            name:"shoe",
            price:20,
            slug:'shoeforwomen',
            description:'Shoe for women',
            image:'/image/c2.png',
            rating:4.8,
            no_of_review:53,
            countInStock:10,
            
            category:'shoe'
        },
        {
            _id:3,
            name:"shoe",
            
            price:20,
            description:'Shoe for men',
            image:'/image/c3.png',
            rating:4.0,
            no_of_review:29,
            countInStock:55,
            brand:'Add_idas',
            category:'shoe'
        },
        {
            _id:4,
            name:"skirt",
            price:10,
            slug:'skirtforwomen',
            description:'Skirt for women',
            image:'/image/c4.png',
            rating:3.8,
            no_of_review:12,
            countInStock:55,
            brand:'Louis vuiton',
            category:'skirt'
        }
    ],
    user:[
        {name:"Admin",isAdmin:true,password:bcrypt.hashSync('1234'),email:"sundayomoladee11@gmail.com"},
        {name:"Sunday",isAdmin:false,password:bcrypt.hashSync('1234'),email:"sunday11@gmail.com"},
        {name:"Ayo",isAdmin:false,password:bcrypt.hashSync('1234'),email:"ayo11@gmail.com"},
        {name:"Peter",isAdmin:false,password:bcrypt.hashSync('1234'),email:"peter11@gmail.com"},
        {name:"John",isAdmin:false,password:bcrypt.hashSync('1234'),email:"john11@gmail.com"},
    ]

}
module.exports={data}