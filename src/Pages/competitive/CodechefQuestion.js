import React, { useEffect, useState } from 'react'
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import CodeChefQuestionCard from '../../pageComponents/Competitve/CodeChef/CodeChefQuestionCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import { useParams } from 'react-router-dom';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateCodeChefdata, GetcodechefQuestion } from '../../redux/actions/codechef';

function CodeChefQuestion() {
    const {id} = useParams();
    const [codechefquestion, setcodechefquestion] = useState([]);
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [codechefid, setcodechefid] = useState(null);
    const dispatch = useDispatch();
    
    const CodeChefQuestion = useSelector((state) => state?.codechef?.codechefquestion?.data?.questions);


    useEffect(() => {
        if(User?.user?.codechefid)
        {   
            if(id !== undefined)
            {
                dispatch(GetcodechefQuestion(User?.user?._id, id, Token));
            }
        }
    }, [User, id, Token]);

    useEffect(() => {
        if(User?.user?.codechefid){
            setcodechefquestion(CodeChefQuestion);
        }
    }, [CodeChefQuestion, User])



    const updateCodeChef = () =>{
        dispatch(updateCodeChefdata(User?.user?._id, {codechefid : codechefid}, Token));
    }

    return (
        <div>
            <div>
                {!User?.user?.codechefid && 
                
                <CompetetiveModal 
                open={true} 
                title = "CodeChef Handle Id is not Added" 
                para = "please add your handle Id"
                btncontent = "Add CodeChef handle"
                value ={codechefid}
                onChange= {(e) => setcodechefid(e.target.value)}
                onClick = {() => updateCodeChef()}
            /> }
            </div>

            <div className="codeforcesContent">
                <HeaderTypography logoid={3} HeaderContent="Codechef - Page Name"/>

                {codechefquestion?.length <= 0 || codechefquestion === undefined ? 
                    <Skeleton />
                :
                <div> 

                { codechefquestion?.map((question, index) =>(
                                    <CodeChefQuestionCard key={index} 
                                        questionTitle = {question?.questionTitle}  
                                        questionDifficulty = {id}
                                        questionLink = {question?.questionLink}
                                        done = {question?.done} />))
                }

            </div>
            }
        </div>
        </div>
    )
}

export default CodeChefQuestion
