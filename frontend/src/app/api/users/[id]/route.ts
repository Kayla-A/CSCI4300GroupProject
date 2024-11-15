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

//returns user object with new cd
export async function PUT(request: NextRequest, {params}: RouteParams) {
    const {id} =params;
    const {newCd} = await request.json();
    await connectMongoDB();
    const user = await User.findById(id);
    if(!user||!user.cdCollection){
        return NextResponse.json({message:"User and/or user cds not found"}, {status: 400});
    }
    user.cdCollection.push({
        id: newCd.id,
        name: newCd.name,
        imgUrl: newCd.imgUrl
    });
    await user.save();
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