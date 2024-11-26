import connectMongoDB from "../../libs/mongodb";
import User from "../../models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const bcrypt = require('bcrypt');

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const users = await User.find()
    return NextResponse.json({users});
}

export async function POST(request: NextRequest) {
    const {username, password} = await request.json();
    let hashPass = bcrypt.hashSync(password, 5);
    await connectMongoDB();
    const user = await User.findOne({ username });
    if(user){
        return NextResponse.json({message:"Username taken"}, {status: 400});
    }
    const newUser = await User.create({username, password: hashPass});
    return NextResponse.json({message:"User created sucessfully", user: newUser}, {status: 200});
}


