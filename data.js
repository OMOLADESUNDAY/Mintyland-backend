const bcrypt=require('bcryptjs')
const data={
    TrendingData:[
        {
        name:"olorioko kafata",
        image:'./image/c1.png', 
        no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c2.png',no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c3.png',no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c4.png',no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c5.png',no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
        {name:"olorioko kafata",image:'./image/c6.png',no_of_review:53,
        countInStock:10,
        // 
        category:'shoe',
        // 
        price:20,
        description:'Shoe for men',
        rating:4.0},
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
        // {_id:10,name:"olorioko kafata",image:'./image/cu4.png',no_of_review:53,
        // countInStock:10,
        // 
        // category:'shoe',
        // 
        // price:20,
        // description:'Shoe for men',
        // rating:4.0}
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
            {name:"olorioko kafata",image:'./image/cu5.png',rarity:"common",volume:900,landSize:"./image/avatar.png"},
            {name:"olorioko kafata",image:'./image/cu5.png',rarity:"common",volume:900,landSize:"./image/avatar.png"},
            {name:"olorioko kafata",image:'./image/cu5.png',rarity:"common",volume:900,landSize:"./image/avatar.png"},
            {name:"olorioko kafata",image:'./image/cu5.png',rarity:"common",volume:900,landSize:"./image/avatar.png"},
            {name:"olorioko kafata",image:'./image/cu5.png',rarity:"common",volume:900,landSize:"./image/avatar.png"},
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