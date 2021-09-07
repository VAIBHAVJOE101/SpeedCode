import React, { useEffect, useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import SpojQuestionCard from '../../pageComponents/Competitve/Spoj/SpojQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetSpojQuestion, updateSpojdata } from '../../redux/actions/spoj';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';

function SpojQuestion() {
    const {id} = useParams();
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [SpojData, setSpojData] = useState([]);
    const [spojid, setspojid] = useState(null);
    const dispatch = useDispatch();
    const SPOJContent = useSelector((state) => state?.spoj?.spojcontent?.data?.content);
    const SPOJQuestion = useSelector((state) => state?.spoj?.spojquestion?.data?.questions);

    useEffect(() => {
        if(User?.user?.spojid)
        { 
            if(id !== undefined)
            {   
                if(SPOJContent){
                    const pageid = SPOJContent[parseInt(id)]?.contentLink
                    dispatch(GetSpojQuestion(User?.user?._id, pageid, Token));
                }
            }
        }
    }, [User, id, SPOJContent, Token]);


    useEffect(() => {
        if(User?.user?.spojid)
        {
            setSpojData(SPOJQuestion);
        }
    }, [SPOJQuestion, User])


    const updateCodeforces = () =>{
        dispatch(updateSpojdata(User?.user?._id, {spojid : spojid}, Token));
    }

    return (
        <div>
            <div>
                {!User?.user?.spojid && 
                
                <CompetetiveModal 
                open={true} 
                title = "SPOJ Handle Id is not Added" 
                para = "please add your handle Id"
                btncontent = "Add SPOJ handle"
                value ={spojid}
                onChange= {(e) => setspojid(e.target.value)}
                onClick = {() => updateCodeforces()}
            /> }
            </div>

            <div className="codeforcesContent">
                <HeaderTypography logoid={2} HeaderContent="SPOJ - Page Name"/>

                {SpojData?.length <=0 || SpojData === undefined ? 
                    <Skeleton />
                :
                <div> 

                { SpojData.map((question, index) =>(
                                    <SpojQuestionCard key={index} 
                                        questionTitle = {question?.questionTitle} 
                                        questionCode={question?.questionMainTitle}
                                        questionLink = {question?.questionLink}
                                        done = {question?.done} />))
                }

            </div>
            }
        </div>
        </div>
    )
}

export default SpojQuestion
