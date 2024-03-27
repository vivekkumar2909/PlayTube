import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    fullName:{
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

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken =  function(){
    const accessToken = jwt.sign({
        _id : this._id,
        email : this.email,
        userName : this.userName,
        fullName : this.fullName
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    });
    return accessToken;
}
userSchema.methods.generateRefreshToken = function(){
    const refreshToken = jwt.sign({
        _id : this._id,
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    });
    return refreshToken;
}

export const User = mongoose.model('User',userSchema);