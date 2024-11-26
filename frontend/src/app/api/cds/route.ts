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
    try {
        // Parsing the JSON body of the request
        const { user_id, name, artist, imgUrl, dateAdded, tracklist } = await request.json();

        // Validate the incoming data
        if (!user_id || !name || !artist || !imgUrl || !dateAdded || !tracklist || tracklist.length === 0) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        // Connect to MongoDB
        await connectMongoDB();

        // Create a new CD record
        const newCd = await Cd.create({
            user_id,
            name,
            artist,
            imgUrl,
            dateAdded,
            tracklist,
        });

        // If CD creation fails, respond with a 400 error
        if (!newCd) {
            return NextResponse.json({ message: "CD not created" }, { status: 400 });
        }

        // Success response
        return NextResponse.json({
            message: "CD created successfully",
            cd: newCd,
        }, { status: 201 });

    } catch (error) {
        // Log the error for debugging
        console.error("Error creating CD:", error);

        // Respond with a 500 Internal Server Error if something goes wrong
        return NextResponse.json({
            message: "Failed to create CD"}, { status: 500 });
    }
}


