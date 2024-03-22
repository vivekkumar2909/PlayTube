import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    userName:{
        type : 'string',
        required : true,
        unique : true,
        lowercase : true,
        index : true,
        trim : true
    },
    email:{
        type : 'string',
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    email:{
        type : 'string',
        required : true,
        trim : true,
        index : true,
    },
    avatar:{
        type : 'string', // cloudinary url
        required : true,
        // trim : true
    },
    coverImage:{
        type :'string', // cloudinary url
        // required : true,
        // trim : true
    },
    watchHistory:[
        {
            type : Schema.Types.ObjectId,
            ref : 'Video'
        }
    ],
    password:{
        type :'string',
        required : [true,"Password Is Required"]
    },
    refreshToken:{
        type :'string',
        // required : [true,"Refresh Token Is Required"]
    }

},{timestamps:true});

export const User = mongoose.model('User',userSchema);