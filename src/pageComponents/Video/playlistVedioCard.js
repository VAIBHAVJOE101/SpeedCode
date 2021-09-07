import React from 'react';
import Typography from '../../components/Typography';
import Card from '../../components/Card';
import Button from '../../components/Button';
import font from '../../utilities/font';
import { useHistory } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';

function PlaylistVedioCard({id,title, checked, handlecheck}) {
    const history = useHistory();

    function changeLink(id){
        history.push(`/video/${id}`)
    }

    return (
        <Card m="20px 0px 0px 0px" minw="1100px" h="90px" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex">
                <Checkbox
                    checked={checked}
                    onChange={handlecheck}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%'}}>
                <div style={{width: '80%'}}>
                <Typography m="0px 0px 0px 20px"  fs="20px" color="white" ff={font.ubuntu} fw={500}>{title}</Typography>
                </div>
                
                <div>
                    <Button m="0px 0px 0px 10px" fs="18px" color="white" ff={font.encode} bg="green" h="55px" fw={600} onClick={() => changeLink(id)}>Go TO Vedio</Button>
                </div>
                </div>

        </Card>
    )
}

export default PlaylistVedioCard;
