import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Codeforcescard from '../../pageComponents/Competitve/Codeforces/CodeforcesCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCodeForcesdata } from '../../redux/actions/codeforces';


function Codeforces() {

    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [CodeforcesData, setCodeforcesData] = useState([]);
    const [codeforcesid, setcodeforcesid] = useState(null);
    const dispatch = useDispatch();
    const CodeforcesContent = useSelector((state) => state?.codeforces?.codeforcescontent?.data?.content);

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

            : 

            <div className="codeforcesContent">
            <HeaderTypography logoid={1} HeaderContent="Codeforces - Content Page"/>
            {CodeforcesData?.length <=0 || CodeforcesData === undefined ? 
                <Skeleton />
            :
            <div>
            {
                CodeforcesData.map((question, index) =>(
                                    <Codeforcescard key={index} 
                                        id={question?.id} 
                                        contentName={question?.contentName}
                                        contentProblemCount={question?.contentProblemCount} />))
            }
            </div>
            }
        </div>
        </div>
        
    )
}

export default Codeforces;
