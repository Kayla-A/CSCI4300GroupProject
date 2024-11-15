import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

const bcrypt = require('bcrypt');

interface RouteParams{
    params: {id:string}
}


export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    return NextResponse.json({ user }, { status: 200 });
}

//returns user object
export async function PUT(request: NextRequest, {params}: RouteParams) {
    const {id} =params;
    const {cdCollection} = await request.json();
    await connectMongoDB();
    const user = await User.findByIdAndUpdate(id,{cdCollection}, {new:true});
    if(!user){
        return NextResponse.json({message:"User not found"}, {status: 400});
    }
    return NextResponse.json({user}, {status: 200});
}
export async function DELETE(request:NextRequest, {params}: RouteParams) {
    const {id} =params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return NextResponse.json({message:"User id is invalid"}, {status: 400});
    }
    await connectMongoDB();
    const user =await User.findByIdAndDelete(id);
    if(!user){
        return NextResponse.json({message:"User not found"}, {status: 400});
    }
    return NextResponse.json({message:"User deleted"}, {status: 200});
}