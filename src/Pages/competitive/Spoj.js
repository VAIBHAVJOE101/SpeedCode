import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Spojcard from '../../pageComponents/Competitve/Spoj/SpojCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpojdata } from '../../redux/actions/spoj';


function Spoj() {

    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [SpojData, setSpojData] = useState([]);
    const [spojid, setspojid] = useState(null);
    const dispatch = useDispatch();
    const SPOJContent = useSelector((state) => state?.spoj?.spojcontent?.data?.content);

    useEffect(() => {
        if(User?.user?.spojid)
        {
            setSpojData(SPOJContent);
        }
    }, [SPOJContent, User])


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
            <HeaderTypography logoid={2} HeaderContent="Spoj - Content Page"/>
            {SpojData?.length <=0 || SpojData === undefined ? 
                <Skeleton />
            :
            <div> 
            {
                SpojData.map((question, index) =>(
                            <Spojcard key={index} 
                                id = {index}
                                contentName={question?.contentName} 
                                contentLink = {question?.contentLink}
                                contentProblemCount={question?.contentProblemCount} />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default Spoj
