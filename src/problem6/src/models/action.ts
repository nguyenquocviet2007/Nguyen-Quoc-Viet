import { Schema, model, Document, ObjectId } from "mongoose";

interface Action extends Document {
    actionName: string;
    userId: string;
}

const actionSchema = new Schema<Action>({
    actionName: {type: String, required: true},
    userId: {type: String, required: true}
})

export default model<Action>('Action', actionSchema);