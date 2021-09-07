import React, { useEffect, useState } from 'react';
import '../../assets/css/blog.css';
import font from '../../utilities/font';
import Typography from '../../components/Typography';
import BlogCard from '../../pageComponents/Blog/BlogCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import Button from '../../components/Button';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Blogs = () => {
   const [BlogData, setBlogdata] = useState([]);
   const User = useSelector((state) => state?.auth)
   const history = useHistory();
   const Blog = useSelector((state) => state?.blog?.blogs?.data?.blogs);

   useEffect(() => {
      if(Blog){
         setBlogdata(Blog);
      }
   }, [User, Blog])

   return (
      <div>
         <div className="blogContent">
         <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">Blogs </Typography>
            <Button m="10px 30px 10px 0px" bg="green"><Typography fs="20px" ff={font.ubuntu} onClick={() => history.push('/newblog')}> + New Blog </Typography></Button>
         </div>
            {BlogData === undefined || BlogData?.length <=0 ?
               <Skeleton />
               :
               <div>
                  {
                     BlogData?.map((item, index) => (
                        <BlogCard key={index}
                           id={item?._id}
                           title={item?.title}
                           date={item?.createdAt}
                           topic="React" 
                           image ="https://images.pexels.com/photos/5512688/pexels-photo-5512688.jpeg?cs=srgb&dl=pexels-miroslav-%C5%A1kopek-5512688.jpg&fm=jpg" 
                           />))
                  }
               </div>

            }
         </div>
      </div>
   );
}

export default Blogs;