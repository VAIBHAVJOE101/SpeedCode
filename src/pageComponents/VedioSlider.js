import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import Typography from '../components/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const sideScroll = (element,speed,distance,step,) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);

            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
    }, speed);
};



function VedioSlider() {
    const history = useHistory()
    const playlist = useSelector((state) => state?.playlist?.allPlaylist?.data?.playlists);
    const contentWrapper = React.useRef(null);

    return (
        <div style={{margin: '25px 0px 0px 0px',display: 'flex', flexDirection: 'column'}}>
            <Typography m="auto" fs="30px">DSA VEDIO PLAYLIST</Typography>
        <div style={{display: 'flex', alignItems: 'center'}}>
            
            <button style={{offsetDistance: '-40px'}} onClick={() => {sideScroll(contentWrapper.current, 25, 100, -10);}}>
                <ChevronLeftIcon/>
            </button>

            <div style={{margin: '25px 0px 0px 0px', display: 'flex', justifyContent: 'center', overflow: 'scroll', overflowY: 'hidden', overflowX: 'hidden'}} ref={contentWrapper}> 
                

                {playlist?.map((item, index) => (
                        <div style={{margin: '10px 10px 10px 10px', cursor: 'pointer'}}>
                            <Card   bg="rgba(128, 208, 199,0.2)" minw="15vw" maxw="15vw" h="20vh" display="flex" alignItems="center" justify="center" onClick={() =>history.push(`/playlist/${item?._id}`)} >
                            <Typography fs="25px" fw="800" m="auto" textalign="center" >{item?.title}</Typography>
                            </Card>
                        </div>
                ))}
                
            </div>

            <button onClick={() => {sideScroll(contentWrapper.current, 25, 100, 10);}}>
                <ChevronRightIcon />
            </button>
        </div>
        </div>
    ) 
}

export default VedioSlider
