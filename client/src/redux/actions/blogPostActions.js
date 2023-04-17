import axios from 'axios'
import { 
    setBlogPostByCategory, 
    setLoading, 
    setError, 
    blogPostCreated, 
    blogPostRemoved, 
    blogPostUpdate 
} from '../slices/blogPost'