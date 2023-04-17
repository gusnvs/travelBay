import express from 'express';
import BlogPost from '../models/BlogPost.js';

const blogPostRoutes = express.Router();

const getBlogPostByCategory = async (req, res) => {
    const blogPost = await BlogPost.find({});
    res.json(blogPost);
};

blogPostRoutes.route('/').get(getBlogPostByCategory);

export default blogPostRoutes;