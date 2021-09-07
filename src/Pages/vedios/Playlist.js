import React from 'react';
import '../../assets/css/codeforces.css';
import Typography from '../../components/Typography';
import Playlistcard from '../../pageComponents/Video/Playlistcard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import font from '../../utilities/font';
import '../../assets/css/skeleton.css';
import { useSelector } from 'react-redux';

function Spoj() {
    const playlist = useSelector((state) => state?.playlist?.allPlaylist?.data?.playlists);
    
    return (
        <div>
            <div className="codeforcesContent">
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">DSA VEDIOS</Typography>
            {playlist === undefined || playlist === null? 
                <Skeleton />
            :
            <div> 
            {
                playlist.map((item, index) =>(
                            <Playlistcard key={index} 
                                id = {item?._id}
                                title = {item?.title}/>))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default Spoj
