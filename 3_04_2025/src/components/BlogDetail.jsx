import React from 'react';
import Header from "./Header.jsx";
import {scrollToTop} from "./BlogList.jsx";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

const BlogDetail = ({blogs}) => {
    const navigate = useNavigate();

    //Url den id değerini yakalayıp kullanır.
    const {id} = useParams();
    //id Integer olduğu için parseInt kullandım.
    const blog = blogs.find(blog => blog.id === parseInt(id));
    //artık blog değişkeni url'de yazan id ile eş blog.
    const handleClick= ()=>{
        scrollToTop()
        //Bir önceki sayfaya döndürür.
        navigate(-1)
    }

    return(
        <div>
        <Header />
            <div className="blog-detail">
                <h2>{blog.title}</h2>
                <hr/>
                <p>{blog.content}</p>
                <button onClick={handleClick}>Geri Dön</button>
            </div>

        </div>)
}

export default BlogDetail;