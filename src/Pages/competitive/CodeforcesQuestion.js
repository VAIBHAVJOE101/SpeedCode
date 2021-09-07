import React, { useEffect, useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import CodeforcesQuestionCard from '../../pageComponents/Competitve/Codeforces/CodeforcesQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { GetcodeforcesQuestion, updateCodeForcesdata } from '../../redux/actions/codeforces';
import { useParams } from 'react-router-dom';

function CodeforcesQuestion() {
    const {id} = useParams();
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [CodeforcesData, setCodeforcesData] = useState([]);
    const [codeforcesid, setcodeforcesid] = useState(null);
    const dispatch = useDispatch();
    const CodeforcesContent = useSelector((state) => state?.codeforces?.codeforcesquestion?.data?.questions);

    useEffect(() => {
        if(User?.user?.codechefid)
        {   
            if(id !== undefined)
            {
                dispatch(GetcodeforcesQuestion(User?.user?._id, id, Token));
            }
        }
    }, [User, id, Token]);


    useEffect(() => {
        if(User?.user?.Codeforcesid)
        {
            setCodeforcesData(CodeforcesContent);
        }
    }, [CodeforcesContent, User])


    const updateCodeforces = () =>{
        dispatch(updateCodeForcesdata(User?.user?._id, {Codeforcesid : codeforcesid}, Token));
    }

    
    
    return (
        <div>
            <div>
                {!User?.user?.Codeforcesid && 
                
                <CompetetiveModal 
                open={true} 
                title = "CodeChef Handle Id is not Added" 
                para = "please add your handle Id"
                btncontent = "Add CodeChef handle"
                value ={codeforcesid}
                onChange= {(e) => setcodeforcesid(e.target.value)}
                onClick = {() => updateCodeforces()}
            /> }
            </div>

            <div className="codeforcesContent">
                <HeaderTypography logoid={1} HeaderContent="Codeforces - Page Name"/>
                {CodeforcesData?.length <= 0 || CodeforcesData === undefined ? 
                    <Skeleton />
                :
                <div> 
                { CodeforcesData.map((question, index) =>(
                                        <CodeforcesQuestionCard key={index} 
                                            id={question?.id}
                                            questionTitle = {question?.questionTitle}  
                                            questionDifficulty = {question?.questionDifficulty}
                                            questionLink = {question?.questionLink} 
                                            done = {question?.done} />
                                    ))
                }
            </div>
            
            }
        </div>
        </div>
    )
}

export default CodeforcesQuestion
