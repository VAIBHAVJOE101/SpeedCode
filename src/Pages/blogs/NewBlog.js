import React, { useState } from "react";
import Dante from "Dante2";
import Button from '../../components/Button';
import { useDispatch, useSelector } from "react-redux";
import { AddBlog } from "../../redux/actions/blog";
import {ImageBlockConfig, EmbedBlockConfig, PlaceholderBlockConfig, VideoBlockConfig} from 'Dante2'
import Axios from 'axios';
import TextField from '../../components/TextField';
import { useHistory } from "react-router";



// User?.user?._id
function Blog() {
  const [state] = useState(null);
  const [description, setdescription] = useState(null);
  const Token = useSelector((state) => state.auth?.token);
  const User = useSelector((state) => state.auth?.user?.data);
  const [title, settitle] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const addbloghandler = () =>{
    if(title!==null && description!==null)
    {
      dispatch(AddBlog({userId: User?.user?._id, title: title, description: description}, Token));
      history.push('/blog');
    }
  }

  return (
    <div style={{height: '80vh', width: '100%',margin: '40px 0px'}}>
      <div style={{width:'70%',margin:'10px auto'}}> 

        <div  style={{textAlign:'right'}}>
          <Button id="BlogSave" m="0 20px" onClick={() => addbloghandler()}>Save</Button>
          </div>

          <div>
            <TextField bg="rgba(128, 208, 199,0.2)" m="15px 0 5px 0"  p="0 0px" bf="none" color="white" w="69.5vw" placeholder="Title" 
            value={title} 
            onChange={(e) => settitle(e.target.value)}
            /> 
          </div>
        </div>


      <Dante
        style={{minHeight: '70vh', width: '70%', backgroundColor: 'rgba(128, 208, 199,0.2)', margin: '10px auto', padding: '20px', color: 'white'}}
        content={state}
        body_placeholder={"Write Your New Blog"}
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
        
        read_only={false}
      />


    </div>
  );
}

export default Blog;