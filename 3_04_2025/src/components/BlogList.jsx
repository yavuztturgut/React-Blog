import React from 'react';
import Header from "./Header.jsx";
import {useNavigate} from "react-router-dom";

//Yeni bir sayfaya geçildiğinde sayfanın başına döndürmek için
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const BlogList = ({blogs}) => {
    const navigate = useNavigate();
    {/* Tıklama sonrası props geçilen blog id'sinin url sine gider. */}
    const handleClick= (blog) =>{
        scrollToTop()
        navigate(`/bloglarım/${blog.id}`);
    }
    return(
        <div>
            <Header/>
            <div className="blog-list">
                <h2>Bloglar</h2>
                <hr/>
                {blogs.map((blog) => (
                    <div className="blog-list-box" key={blog.id} onClick={()=> handleClick(blog)}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content.substring(0, 200)}...</p>
                    </div>
                ))}

            </div>

        </div>

    )
}

export default BlogList;