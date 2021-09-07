import React from 'react';
import Typography from '../../../components/Typography';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import font from '../../../utilities/font';

function GFGQuestionCard({id, questionTitle, questionDifficulty, questionLink, done, type}) {
    return (
        <Card m="20px 0px 0px 0px" minw="1100px" h="90px" p="20px" bg="rgba(109, 181, 181, 0.33)" display="flex" alignItems="center" justify="space-between">
                <div style={{width: '75%'}}>
                <Typography m="0px 0px 0px 20px"  fs="20px" color="white" ff={font.ubuntu} fw={500}>{questionTitle}</Typography>
                </div>
                <div>
                    { 
                        done ?
                        <a href={questionLink} target="_blank" rel="noreferrer">
                        <Button   m="0px 0px 0px 10px" fs="18px" color="white" ff={font.encode} bg="green" h="55px"  fw={600} >Solved Problem</Button>
                        </a>
                        : 
                        <a href={questionLink} target="_blank" rel="noreferrer">
                        {
                            type === "practice" ? <Button  m="0px 0px 0px 10px" fs="18px" color="white" ff={font.encode} bg="#187bcd" h="55px" fw={600}>Solve Problem</Button> :
                                                <Button  m="0px 0px 0px 10px" fs="18px" color="white" ff={font.encode} bg="#187bcd" h="55px" fw={600}>Read Article</Button>
                        }
                        </a>
                    }
                </div>
        </Card>
    )
}

export default GFGQuestionCard;
