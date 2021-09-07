import React, { useEffect, useState } from "react";
import Dante from "Dante2";
import Button from '../../components/Button';
import { useDispatch, useSelector } from "react-redux";
import { deleteblog, Updateblog } from "../../redux/actions/blog";
import {ImageBlockConfig, EmbedBlockConfig, PlaceholderBlockConfig, VideoBlockConfig} from 'Dante2'
import Axios from 'axios';
import TextField from '../../components/TextField';
import { useHistory, useParams } from "react-router";
import { getBlogbyid } from '../../redux/actions/blog'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '../../components/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';


// User?.user?._id
function Blog() {
  const {id} = useParams();
  const [description, setdescription] = useState();
  const Token = useSelector((state) => state.auth?.token);
  const User = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const [state, setstate] = useState({blocks: [], entityMap:{}});
  const [title, settitle] = useState(null);
  const [blog, setblog] = useState(null);
  const [isread, setisread] = useState(true);
  const [isuser, setisuser] = useState(false);
  const [isedit, setisedit] = useState(false);
  const [prevstate, setprevstate] = useState(null);
  const history = useHistory();


  useEffect(() => {
    if(id){
      const data = dispatch(getBlogbyid(id , Token));
      data.then((result)=> {
        if(result.sucess === true){
        if(result?.data?.data?.success === true){
          setblog(result?.data?.data?.blog)
          setstate({...result?.data?.data?.blog?.description, entityMap:{}})
          setdescription({...result?.data?.data?.blog?.description})
          setprevstate({title: result?.data?.data?.blog?.title, description:{...result?.data?.data?.blog?.description, entityMap:{}}})
          settitle(result?.data?.data?.blog?.title)
          if(result?.data?.data?.blog?.userId === User?.data?.user?._id){
            setisuser(true);
          }
          }
        }
      });
    } 
  }, [User, id, Token]);



  const addbloghandler = (event, name) =>{
    if(name === "edit"){
      setisedit(true)
      setisread(false);
    }
    else if(name === "delete")
    {
      dispatch(deleteblog(id , Token));
      history.push('/blog')
    }
    
    else if(name === "clear"){ 
      settitle(prevstate?.title);
      setstate(prevstate?.description);
      setisedit(false)
      setisread(true);
    } 

    else if( name === "save"){
          
          dispatch(Updateblog(id ,{title: title, description: description} , Token));
          setisedit(false)
          setisread(true);
    }
  }

  return (
    <div >
      {state === null ? (<div>Loading</div>) 
      :
      (
    <div style={{height: '80vh', width: '100%',margin: '40px 0px 40px 0px'}}>
    <div style={{width:'70%',margin:'10px auto'}}> 

  {isuser ? (
    <div>
    {
    isedit ? 
    (  <div  style={{textAlign:'right'}}>
          <Button id="BlogEdit"  m="0 20px" onClick={(event) => addbloghandler(event, "save")}><SaveIcon /></Button>
          <Button onClick={(event) => addbloghandler(event, "clear")}><ClearIcon /></Button>
      </div>) : 
    
    ( <div  style={{textAlign:'right'}}>
        <Button id="BlogEdit" name="edit"  m="0 20px" onClick={(event) => addbloghandler(event, "edit")}><EditIcon/></Button>
        <Button onClick={(event) => addbloghandler(event, "delete")} ><DeleteIcon /></Button>
      </div>)
    }
    </div>) : 
    (<div></div>)
  }


      <div>
        {!isedit ? (<Typography fs="30px" fw={900}>{blog?.title}</Typography>) 
        : 
        (
          <TextField bg="rgba(128, 208, 199,0.2)" m="15px 0 5px 0"  p="0 0px" bf="none" color="white" w="69.5vw" placeholder="Title" 
          value={title} 
          onChange={(e) => settitle(e.target.value)}
          /> 
        )}
      </div>

  </div>


    <Dante
      style={{minHeight: '70vh', width: '70%', backgroundColor: 'rgba(128, 208, 199,0.2)', margin: '10px auto', padding: '20px', color: 'white'}}
      content={state}
      body_placeholder={"Loading Blog ....."}
      onChange={editor => { setdescription(editor.emitSerializedOutput()) }}
      key_commands={{ 'alt-shift': [{ key: 65, cmd: 'add-new-block' }], 'alt-cmd': [ { key: 49, cmd: 'toggle_block:header-one' }, { key: 50, cmd: 'toggle_block:header-two' }, { key: 53, cmd: 'toggle_block:blockquote' }, ], cmd: [ { key: 66, cmd: 'toggle_inline:BOLD' }, { key: 73, cmd: 'toggle_inline:ITALIC' }, { key: 75, cmd: 'insert:link' }, ], }}
      
      widgets={[
        ImageBlockConfig({
            options: {
                upload_handler: async (file, imageBlock) => {

                  const data = new FormData()
                  data.append('file', file)
                  data.append('upload_preset', 'jnhagdge')

                  Axios.post("https://api.cloudinary.com/v1_1/dmuenqv60/image/upload", data)
                  .then(async res => {
                    const payload = await res.data
                    imageBlock.uploadCompleted(payload.secure_url)
                  })
                  .catch(err => {
                    imageBlock.uploadFailed()
                  })
            }
          }
      }),
        EmbedBlockConfig({ options: { placeholder: 'put an external link', endpoint: '//noembed.com/embed?url=', }, }),
        VideoBlockConfig({ options: { placeholder: 'put an external video link', endpoint: '//noembed.com/embed?url=', caption: 'optional caption', }, }),
        PlaceholderBlockConfig()
      ]}
      
      read_only={isread}
    />


  </div>
      )
      }
    <div>Hello</div>
    
  </div>
  );
}

export default Blog;