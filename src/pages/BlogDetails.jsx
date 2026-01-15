import React, { useEffect, useState } from 'react'
import SubHero from '../components/SubHero'
import axios from 'axios'
import { useAsyncError, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaRegComment } from "react-icons/fa";

function BlogDetails() {
    const params = useParams();
    const slug = params.slug;
    // console.log(slug);
    const {currentUser} = useSelector(state => state.user);
    const [blog, setBlog] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const isDisabled = !currentUser || !comment;
    const fetch_blog = async() => {
        try {
            const res = await axios.post(`https://wahab-me-backend.vercel.app/api/blog/slug`, {slug});
            setBlog(res.data.blog);
        } catch (error) {
            console.log(error)
        }
    }

    const fetch_all_blogs = async() => {
        try {
            const response = await axios.get('https://wahab-me-backend.vercel.app/api/blog');
            // console.log(response.data.blogs)
            setBlogs(response.data.blogs);
        } catch (error) {
            console.log(error);
        }
    }

    const fetch_all_comments = async() => {
        try {
            const {data} = await axios.post('https://wahab-me-backend.vercel.app/api/comment/blog', {id: blog._id});
            if(data.success){
                setComments(data.comments);
            }
        } catch (error) {
           console.log(error); 
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {data} = await axios.post('https://wahab-me-backend.vercel.app/api/comment/create', {
            content:comment,
            author: currentUser._id,
            blog: blog._id
        });
        
        alert(data.message);
        setComment('');
        fetch_all_comments()

    }
    useEffect(() => {
        fetch_blog();
        fetch_all_blogs();
    }, []);

    useEffect(() => {
        if(blog._id){
        fetch_all_comments();
        }
    }, [blog._id]);
  return (
    <div>
        <SubHero title={blog.title}/>
        <section className='flex md:flex-row bg-black gap-6 text-white md:p-10'>
            <div className='md:w-[70%]'>
                <h3 className='text-4xl font-bold'>{blog.title}</h3>
                <p className='py-2'>{blog?.author?.name} | Date: {new Date(blog.date).toLocaleDateString()} | <span><FaRegComment className='inline'/> {comments.length} Comments</span></p>
                <img className='rounded-xl' src={blog.image} alt={blog.title} />
                <p className='pt-4'>{blog.description}</p>

                <div className='mt-3'>
                    <h4 className='text-xl font-semibold'>Comments</h4>
                    {
                        comments.map((comment, index) => (
                            <div key={index} className='p-4 rounded mb-2' style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
                                <p>{comment?.author?.name || "Unknown"} | {comment.content} | {new Date(comment.date).toLocaleDateString()}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-8'>
                    <form method='POST' onSubmit={handleSubmit}>
                        <textarea onChange={(e) => setComment(e.target.value)} value={comment} rows={4} className='block w-[70%] p-2 rounded-xl bg-black border-2 border-white' name="" id="" placeholder='Enter Comment'></textarea>
                        <button type='submit' className={`mt-4 text-black px-4 py-2 rounded-md ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200'}`} disabled={isDisabled}>Submit</button>
                    </form>
                </div>
            </div>
            {/* <div>
                <h4>Others Posts</h4>
               {
// blogs.map((blogItem, index) => {
//  return (
//  <div key={index} className="py-2 border-b border-gray-700">
//  <h5 className="text-lg font-semibold">{blogItem.title}</h5>
//  </div>
//  )
//  })
}

            </div> */}
        </section>
    </div>
  )
}

export default BlogDetails