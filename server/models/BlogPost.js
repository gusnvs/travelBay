import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
    {
        image: {
            type: String, // tipo
            require: true // obrigatório?
        },
        title: {
            type: String,
            require: true
        },
        contentOne: {
            type: String,
            require: true
        },
        contentTwo: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        }
    },
    { timestamps: true } // toda vez que é criado, ele fará o registro e data e hora
)

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;