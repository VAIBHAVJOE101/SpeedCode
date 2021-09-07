import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import Card from '../../components/Card';
import Typography from '../../components/Typography';
import font from '../../utilities/font';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CheckPlaylist, GetPlaylistVedio, GetVedioDetail, UncheckPlaylist } from '../../redux/actions/playlist';
import '../../assets/css/vedio.css'
import ShowMoreText from "react-show-more-text";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Checkbox from '../../components/Checkbox'
import VedioSlider from '../../pageComponents/VedioSlider';

function VedioPlayer() {
    const [duration, setDuration] = useState(1);
    const [vediodata, setvediodata] = useState(null);
    const [anothervediodata, setanothervedata] = useState(null);
    const Token = useSelector((state) => state.auth?.token);
    const User = useSelector((state) => state.auth?.user?.data);
    const [playlistdata, setplaylistdata] = useState([]);
    const [checkedprogress, setcheckedprogress] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    useEffect(() =>{
        if(id){
            const data = dispatch(GetVedioDetail(id, Token));
            data.then((result) => {
                if(result?.success === true){
                    if(result?.data?.data?.success === true){
                        setvediodata(result?.data?.data?.vedio)
                    }
                }
            });
        }
    }, [id, Token])


    useEffect(() => {
        if(vediodata!==null && vediodata!==undefined){
            const vid = {...vediodata, done: false, index: 0};

            const data = dispatch(GetPlaylistVedio(vediodata.playlistId, Token));

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

                        if(vedio._id === vid._id)
                        {
                            vid.index = index
                            vid.done = vedios[index]?.done
                        }
                    })

                    setplaylistdata(vedios)
                    setanothervedata(vid);
                }
                }
            });
        }
    }, [vediodata,User, Token])

    const checkuncheck = (index) =>{
        if(playlistdata[index].done){
            dispatch(UncheckPlaylist({userId : User?.user?._id, vedioId: playlistdata[index]._id}, Token));
        }else{
            dispatch(CheckPlaylist({userId : User?.user?._id, vedioId: playlistdata[index]._id}, Token));
        }
    }

    function Progressfilter(progress){
        const p = (progress/duration)*100;
        if(p > 90) {
            if(anothervediodata.done === false && checkedprogress === false){
                dispatch(CheckPlaylist({userId : User?.user?._id, vedioId: vediodata._id}, Token));
                setcheckedprogress(true);
            }
        }
    }



    return (
        <div>
        <div  style={{margin: '10px', display: 'flex', justifyContent: 'space-around', color: 'white'}}>
            <div>
                <ReactPlayer
                    className='react-player'
                    url={vediodata?.link}
                    width='70vw'
                    height='75vh'
                    controls
                    onDuration={(duration) => setDuration(duration)}
                    onProgress={(progress) => {
                        Progressfilter(progress.playedSeconds);
                    }}
                />
                <div style={{borderBottom: '1px solid lightgray', paddingBottom: '20px', margin: '0px 0px 0px 20px'}}>
                <Typography   fs="22px" color="lightgreen" ff={font.ubuntu} fw={500}>Description</Typography>
                <ShowMoreText
                lines={3}
                more={
                <div style={{ color: "lightgreen", display: "flex" }}>
                    <ExpandMoreIcon />
                    Show More
                </div>}
                less={
                    <div style={{ color: "lightgreen", display: "flex" }}>
                        <ExpandLessIcon />
                        Show Less
                    </div>}
                className='desc'
                anchorClass="my-anchor-css-class"
                expanded={false}
                width={800}
                truncatedEndingComponent={"... "}
            >
                <div className='desc'>{vediodata?.description}</div>
            </ShowMoreText>
                </div>
                
            </div>

        <Card  minw="25vw" maxw="25vw" h="85vh" p="10px" bg="rgba(109, 181, 181, 0.33)" overflow="scroll" overflowX="hidden">
        <div style={{borderBottom: '1px solid white', paddingBottom: '10px'}}>
                <Typography m="0px 0px 0px 20px"  fs="25px" color="white" ff={font.ubuntu} fw={500}>Playlist</Typography>
        </div>
            {playlistdata?.map((play, index)=> 
            <div>
            

            <div style={{borderBottom: '1px solid white', paddingBottom: '10px', display:'flex', alignItems: 'center'}}>
                <Checkbox checked={play?.done} onChange={() => checkuncheck(index)} inputProps={{ 'aria-label': 'checkbox with default color' }} />
                <div style={{width: '90%', cursor: 'pointer'}} onClick={() => history.push(`/video/${play?._id}`)}>
                <Typography m="0px 0px 0px 20px"  fs="14px" color="white" ff={font.ubuntu} fw={500}>{play?.title}</Typography>
                </div>
            </div>
            </div>
            )}

        </Card>
        </div>

        <div style={{width:'90%', margin: 'auto', marginBottom: '70px', marginTop: '40px'}}>
        <Typography  fs="25px" color="white" ff={font.ubuntu} fw={500}>DSA Vedios Playlists</Typography>
        <VedioSlider />
        </div>
        </div>
    )
}

export default VedioPlayer;
