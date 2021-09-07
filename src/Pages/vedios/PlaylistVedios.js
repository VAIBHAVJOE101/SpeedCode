import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import Typography from '../../components/Typography';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import font from '../../utilities/font';
import '../../assets/css/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CheckPlaylist, GetPlaylistVedio, UncheckPlaylist } from '../../redux/actions/playlist';
import PlaylistVedioCard from '../../pageComponents/Video/playlistVedioCard';



function PlaylistVedios() {
    const {id} = useParams();
    const Token = useSelector((state) => state.auth?.token);
    const User = useSelector((state) => state.auth?.user?.data);
    const [playlistdata, setplaylistdata] = useState([]);
    const dispatch = useDispatch();

    
    useEffect(() => {
        if(id){
            const data = dispatch(GetPlaylistVedio(id, Token));
            data.then((result) => {
                if(result.success === true){
                if(result.data?.data?.success === true) {
                    const vediodone = User?.user?.vediodone;
                    const vedios = [];
                    result.data?.data?.vedios?.forEach((vedio, index) => {
                        vedios[index] = {...vedio, done : false};
                        vediodone?.forEach((v, i) => {
                            if(vedio._id === v){
                                vedios[index].done = true
                            }
                        })
                    })
                    setplaylistdata(vedios)
                }
                }
            });
        }
    }, [User, id, Token])

    const checkuncheck = (index) =>{
        if(playlistdata[index].done){
            dispatch(UncheckPlaylist({userId : User?.user?._id, vedioId: playlistdata[index]._id}, Token));
        }else{
            dispatch(CheckPlaylist({userId : User?.user?._id, vedioId: playlistdata[index]._id}, Token));
        }
    }




    return (
        <div>
            <div className="codeforcesContent">
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">DSA VEDIOS</Typography>
            {playlistdata === undefined || playlistdata?.length <= 0? 
                <Skeleton />
            :
            <div> 
            {
                playlistdata.map((item, index) =>(
                            <PlaylistVedioCard key={index} 
                                id = {item?._id}
                                title = {item?.title}
                                checked={item?.done}
                                handlecheck= {() => checkuncheck(index)}
                            />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default PlaylistVedios
