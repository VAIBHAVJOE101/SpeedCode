import React from 'react';
import Typography from '../../components/Typography';
import Card from '../../components/Card';
import font from '../../utilities/font';
import { useHistory } from 'react-router-dom';

function BlogCard({ id, title, description, date, image}) {

   const history = useHistory();

   function changeLink(id) {
      history.push(`/blog/${id}`)
   }

   return (
      <Card m="20px 0px 0px 0px" minw="1100px" p="20px" bg="rgba(109, 181, 181, 0.33)" alignItems="center" br="10px">
         <div style={{  display: 'flex', justifyContent: "space-between" }}>
            <div>
               <div onClick={() => changeLink(id)} style={{cursor: "pointer"}}>
                  <Typography m="0px 0px 0px 20px" fs="28px" color="white" ff={font.ubuntu} fw={800}>{title}</Typography>
               </div>

               <div style={{ display: 'flex' ,padding:"5px 0px"}}>
                  <div style={{flex: 1}}>
                     <Typography m="5px 0px 0px 20px" fs="15px" color="white" ff={font.ubuntu}fw={300}>{date}</Typography>
                  </div>
               </div>
            </div>
            <img src={image} width="200px" height="100px" alt="W3Schools.com" style={{borderRadius:"10px"}}/>

         </div>

      </Card>
   )
}

export default BlogCard;
