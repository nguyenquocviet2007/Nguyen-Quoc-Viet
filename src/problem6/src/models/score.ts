import { Schema, model, Document } from "mongoose";

interface UserScore extends Document {
    userId: string;
    score: number;
}

const scoreSchema = new Schema<UserScore>({
    userId: {type: String, required: true},
    score: {type: Number, required: true, default: 0},
})

export default model<UserScore>('UserScore', scoreSchema);