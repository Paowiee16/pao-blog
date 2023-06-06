import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  
   const {data, isPending, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}

            {/* blogslist will output if blog contents is ready */}
            { data &&<BlogList blogs={data} title="All blogs !" /> }

            {/* Filter contents by authors name */}
            {/* <BlogList blogs={blog.filter((blog) => blog.author === 'Pao' ) } title="Pao's Blog" handleDelete   ={handleDelete}/>  */}
        </div>
     );
}
 
export default Home;
<>
</>