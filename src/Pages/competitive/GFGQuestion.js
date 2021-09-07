import React, { useEffect, useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import GfgQuestionCard from '../../pageComponents/Competitve/Gfg/GfgQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { updateGFGdata } from '../../redux/actions/gfg';

function GfgQuestion() {
    const {id} = useParams();
    const [gfgid, setgfgid] = useState();
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const Gfgdata = useSelector((state) => state.gfg?.gfgdata?.data?.questionsdone);
    const [GFGquestion, setGFGquestion] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(Gfgdata?.length > 0)
        {
            setGFGquestion(Gfgdata[id]?.questionsets);
        }
    }, [Gfgdata, id])

    const updateGfg = () => {
        dispatch(updateGFGdata(User?.user?._id, {GFGid : gfgid}, Token));
    }

    return (
        <div>
            <div>
                {!User?.user?.GFGid && 
                
                <CompetetiveModal 
                open={true} 
                title = "GFG Handle Id is not Added" 
                para = "please add your handle Id"
                btncontent = "Add GFG handle"
                value ={gfgid}
                onChange= {(e) => setgfgid(e.target.value)}
                onClick = {() => updateGfg()}
            /> }
            </div>

            <div className="codeforcesContent">
                <HeaderTypography logoid={0} HeaderContent={`Gfg - ${Gfgdata ? Gfgdata[id]?.topic: 'Topic'}`}/>

                {GFGquestion?.length <=0 ? 
                    <Skeleton />
                :
                <div> 

                { GFGquestion?.map((gfg, index) =>(
                                    <GfgQuestionCard key={index} 
                                        questionTitle = {gfg?.maintitle}
                                        questionLink = {gfg?.link}
                                        type={gfg?.type}
                                        done = {gfg?.done} />))
                }

            </div>
            }
        </div>
        </div>
    )
}

export default GfgQuestion
