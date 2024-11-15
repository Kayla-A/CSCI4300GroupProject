import mongoose, {Schema, Document, Model} from "mongoose";

interface Cd extends Document{
    user_id:string;
    name:string;
    artist:string;
    imgUrl:string;
    dateAdded:string;
    tracklist:[string]
}

const cdSchema = new Schema <Cd>({
    user_id: {
        type:String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: String,
        required: true,
    },
    tracklist: {
        type: [String],
        required: true,
    },
})

const CdItem: Model<Cd> = mongoose.models.Cd || mongoose.model<Cd>("Cd", cdSchema);
export default CdItem;