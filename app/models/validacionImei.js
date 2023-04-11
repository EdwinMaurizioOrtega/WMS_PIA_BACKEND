import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    pedidoProveedor: {type: String, default: ''},
    procedencia: {type: String, default: ''},
    description: {type: String, default: ''},
    selectedFile: {type: [String], default: []},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('ImeiLogitech', postSchema);

export default PostMessage;