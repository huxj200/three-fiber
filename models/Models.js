import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        attributes: { type: Object, required: true },
    },
    {
        timestamps: true,
    }
);

const Models = mongoose.models.Models || mongoose.model('Models', userSchema);
export default Models;