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
    await Cd.create({user_id, name, artist, imgUrl, dateAdded, tracklist});
    return NextResponse.json({message:"Cd created sucessfully"}, {status: 201});
}


