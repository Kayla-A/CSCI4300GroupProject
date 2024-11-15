import mongoose, {Schema, Document, Model} from "mongoose";

interface Cd {
    id:string;
    name:string;
    imgUrl:string;
}
interface User extends Document{
    username:string;
    password:string;
    cdCollection?:Cd[];
}

const cdSchema = new Schema<Cd> ({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type:String,
        required: true,
    },
})

const userSchema = new Schema<User>({
    username: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required: true,
    },
    cdCollection:{
        type: [cdSchema],
        required: false,
        default: [],
    }
})

const UserItem: Model<User> = mongoose.models.User || mongoose.model<User>("User", userSchema)
export default UserItem;