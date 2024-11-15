import connectMongoDB from "../../../libs/mongodb";
import Cd from "../../../models/cdSchema";
import User from "../../../models/userSchema"
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

const bcrypt = require('bcrypt');

interface RouteParams{
    params: {id:string}
}


export async function GET(request: NextRequest, {params}: RouteParams) {
    const {id} =params;
    await connectMongoDB();
    const cd = await Cd.findOne( {_id: id} );
    return NextResponse.json({cd}, {status: 200});
}

//returns cd object should update cd in user array
export async function PUT(request: NextRequest, {params}: RouteParams) {
    const {id} = params;
    const {user_id, name, artist, imgUrl, dateAdded, tracklist} = await request.json();
    await connectMongoDB();
    const cd = await Cd.findByIdAndUpdate(id,{user_id, name, artist, imgUrl, dateAdded, tracklist}, {new:true});
    if(!cd){
        return NextResponse.json({message:"CD not found: this should not logically happen"}, {status: 400});
    }
    const user = await User.findById(cd.user_id);
    if(!user){
        return NextResponse.json({message:"User not found: this should not logically happen"}, {status: 400});
    }
    if(!user.cdCollection){
        return NextResponse.json({message:"User cds not found: this should not logically happen"}, {status: 400});
    }
    const cdIndex = user.cdCollection.findIndex(cd => cd.id === id);
    if (cdIndex === -1) {
        return NextResponse.json({ message: "CD not found in user's collection" }, { status: 400 });
    }
    user.cdCollection[cdIndex] = {
        id,
        name,
        imgUrl,
    };
    await user.save();

    return NextResponse.json({cd}, {status: 200});
}
//this should also delete from the user's array
export async function DELETE(request:NextRequest, {params}: RouteParams) {
    const {id} = params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return NextResponse.json({message:"Cd id is invalid"}, {status: 400});
    }
    await connectMongoDB();
    const cd = await Cd.findByIdAndDelete(id);
    if(!cd){
        return NextResponse.json({message:"Cd not found"}, {status: 400});
    }
    const user_id = cd.user_id;
    const user = await User.findById(user_id);
    if(!user){
        return NextResponse.json({message:"User not found: this should not logically happen"}, {status: 400});
    }
    if(!user.cdCollection){
        return NextResponse.json({message:"User cds not found: this should not logically happen"}, {status: 400});
    }
    const cdIndex = user.cdCollection.findIndex(cd => cd.id === id);
    if (cdIndex === -1) {
        return NextResponse.json({ message: "CD not found in user's collection" }, { status: 400 });
    }
    user.cdCollection.splice(cdIndex, 1);
    await user.save();
    return NextResponse.json({message:"Cd deleted"}, {status: 200});
}