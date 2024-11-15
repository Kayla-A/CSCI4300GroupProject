import connectMongoDB from "../../../libs/mongodb";
import Cd from "../../../models/cdSchema";
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

//returns cd object
export async function PUT(request: NextRequest, {params}: RouteParams) {
    const {id} = params;
    const {user_id, name, artist, imgUrl, dateAdded, tracklist} = await request.json();
    await connectMongoDB();
    const cd = await Cd.findByIdAndUpdate(id,{user_id, name, artist, imgUrl, dateAdded, tracklist}, {new:true});
    if(!cd){
        return NextResponse.json({message:"CD not found"}, {status: 400});
    }
    return NextResponse.json({cd}, {status: 200});
}
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
    return NextResponse.json({message:"Cd deleted"}, {status: 200});
}