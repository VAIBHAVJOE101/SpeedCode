import React from 'react';
import Typography from '../../components/Typography';
import Card from '../../components/Card';
import Button from '../../components/Button';
import font from '../../utilities/font';
import { useHistory } from 'react-router-dom';

function PlaylistCard({id,title}) {
    const history = useHistory();

    function changeLink(id){
        history.push(`/playlist/${id}`)
    }

    return (
        <Card m="20px 0px 0px 0px" minw="1100px" h="90px" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex" alignItems="center" justify="space-between">

                <div>
                <Typography m="0px 0px 0px 20px"  fs="25px" color="white" ff={font.ubuntu} fw={500}>{title}</Typography>
                </div>

                <div>
                    <Button m="0px 0px 0px 10px" fs="18px" color="white" ff={font.encode} bg="green" h="55px" fw={600} onClick={() => changeLink(id)}>GO TO Playlist</Button>
                </div>

        </Card>
    )
}

export default PlaylistCard;
