import connectMongoDB from "../../libs/mongodb";
import Cd from "../../models/cdSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const bcrypt = require('bcrypt');

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const cds = await Cd.find()
    return NextResponse.json({cds});
}

export async function POST(request: NextRequest) {
    const {user_id, name, artist, imgUrl, dateAdded, tracklist} = await request.json();
    await connectMongoDB();
    const newCd = await Cd.create({user_id, name, artist, imgUrl, dateAdded, tracklist}, {new:true});
    if(!newCd){
        return NextResponse.json({message:"cd not created"}, {status: 500});
    } else{
        return NextResponse.json({message:"Cd created sucessfully", cd: newCd}, {status: 201});
    }
}


