import connectMongoDB from "../../libs/mongodb";
import User from "../../models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const bcrypt = require('bcrypt');

export async function POST(request: NextRequest) {
    const {username, password} = await request.json();
    await connectMongoDB();
    //find user via username
    const user = await User.findOne({username:{username}});
    if(!user){
        return NextResponse.json({message:"Username incorrect"}, {status: 400});
    }
    const realPass = user.password;
    //compare hash
    if (!bcrypt.compareSync({password}, {realPass})) {
        return NextResponse.json({message:"Password incorrect"}, {status: 400});
    }//if pass wrong
    return NextResponse.json({user}, {status: 201});
}


