import React, { useState, useEffect }  from 'react';
import Typography from '../components/Typography';
import Card from '../components/Card';
import Button from '../components/Button';
import font from '../utilities/font';
import '../assets/css/codeforces.css';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '../components/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CheckIcon from '@material-ui/icons/Check';
import { updateProfile } from '../redux/actions/profile';

function Profile() {
    const Token = useSelector((state) => state.auth?.token);
    const User = useSelector((state) => state?.auth?.user?.data?.user);
    const Blog = useSelector((state) => state?.blog)
    const [userblog, setuserblog] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const [profiledata, setProfiledata] = useState([]);
    const [staticdata, setstaticdata] = useState([]);

    useEffect(() =>{
        const gfgid = User?.GFGid;
        const Codeforcesid = User?.Codeforcesid ;
        const Spojid = User?.spojid;
        const CodeChefid = User?.codechefid;

        if(User){
            setuserblog([]);
            setProfiledata([
                    {cptype: 'GFGid',cpid: gfgid  ,edit: false},
                    {cptype: 'Codeforcesid',cpid: Codeforcesid  ,edit: false},
                    {cptype: 'Spojid',cpid: Spojid   ,edit: false},
                    {cptype: 'CodeChefid',cpid: CodeChefid  ,edit: false}
                ])

            setstaticdata([
                {cptype: 'GFGid',cpid: gfgid  ,edit: false},
                {cptype: 'Codeforcesid',cpid: Codeforcesid  ,edit: false},
                {cptype: 'Spojid',cpid: Spojid   ,edit: false},
                {cptype: 'CodeChefid',cpid: CodeChefid  ,edit: false}
            ])

            Blog?.blogs?.data?.blogs?.forEach((item, index) => {
                if(item?.userId === User?._id){
                    setuserblog((prev) => [...prev, item]);
                }
            })
        }
    }, [User, Blog])

    const inputchange = (e,index) => {
        const list = profiledata;
        list[index].cpid = e.target.value;
        setProfiledata(prev => [...list])
    }


    const setedit = (index,name) => {
        const list = profiledata;

        if(name === "clear")
            list[index].cpid = staticdata[index].cpid
        list[index].edit = !list[index].edit;
        setProfiledata(prev => [...list]);
    }

    const updateuserhandler = () =>{
        dispatch(updateProfile(User?._id,
                                {GFGid: profiledata[0]?.cpid, 
                                    Codeforcesid: profiledata[1]?.cpid,
                                    spojid: profiledata[2]?.cpid,  
                                    codechefid:profiledata[3]?.cpid} ,
                                Token));
    }


    return (
        <div className="codeforcesContent">
        <Card m="30px 0px 0px 0px" minw="1100px" maxw="1300px" h="80vh" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex" overflow="scroll"       overflowX="hidden" >
                <div>
                        <Typography m="20px 0px 20px 50px"  fs="35px" color="white" ff={font.ubuntu} fw={500}>Yashrdr11@gmail.com</Typography>
                        
                    {
                        profiledata.map((p,i) => (

                        <div  key={i}>
                            {p.edit ? (
                                <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                                    <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div style={{width: '250px'}}>
                                        <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600} w="200px">{p.cptype}</Typography>
                                    </div>

                                    <div style={{width: '600px'}}>
                                        <TextField placeholder={`Enter ${p.cptype}`} value={p?.cpid} onChange={(e) => inputchange(e, i)} color="white" bg="#394d6d" m="15px 0px 0px 50px"/>
                                    </div>
                                    <Button  m="25px 0px 0px 50px" fs="12px" color="white" ff={font.encode} bg="transparent" bd="1px solid white"  h="40px" fw={600} onClick = {() => setedit(i, "clear")}><ClearIcon /></Button>
                                    <Button  m="25px 0px 0px 50px" fs="12px" color="white" ff={font.encode} bg="transparent" bd="1px solid white"  h="40px" fw={600} onClick = {() => setedit(i, "saver")}><CheckIcon /></Button>
                                    </div>
                                </div>

                            ) : (

                            <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                                <div style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-between'}}>
                                <div style={{width: '250px'}}>
                                <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600} w="200px">{p.cptype}</Typography>
                                </div>

                                <div style={{width: '600px'}}>
                                <Typography m="15px 0px 0px 50px"  fs="22px" color="white" ff={font.encode} fw={600}>{p.cpid}</Typography>
                                </div>

                                </div >
                                <Button  m="25px 0px 0px 50px" fs="12px" color="white" ff={font.encode} bg="transparent" bd="1px solid white"  h="40px" fw={600} onClick = {() => setedit(i, "edit")}><EditIcon/></Button>

                            </div>
                            )}
                        </div>))
                    }
                <Button m="25px 0px 0px 50px" fs="18px" color="white" ff={font.encode} bg="green" h="55px" fw={600} 
                        onClick = {() => updateuserhandler()}
                >Update User</Button>

                <div>
                    <Typography m="20px 0px 20px 50px"  fs="25px" color="white" ff={font.ubuntu} fw={500}>Your Blogs</Typography>
                </div>

                { userblog?.length <=0 ? (<Typography m="20px 0px 20px 50px"  fs="20px" color="white" ff={font.ubuntu} fw={500}>No Blog is added yet</Typography>) 
                : (<div style={{margin: '10px 10px 10px 10px'}}>
                        {userblog?.map((item, index) => (
                            <div key={index}>
                            <Card m="30px 0px" minw="1100px" maxw="1300px" h="80px" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex" alignItems="center" onClick={() => history.push(`/blog/${item?._id}`)}>
                                <Typography m="20px 0px 20px 50px"  fs="20px" color="white" ff={font.ubuntu} fw={500}>{item?.title}</Typography>
                            </Card>
                        </div>
                        ))}
                    </div>)
                }
                </div>

        </Card>

        
        </div>
    )
}

export default Profile;
