import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Codechefcard from '../../pageComponents/Competitve/CodeChef/CodeChefCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateCodeChefdata } from '../../redux/actions/codechef';

function CodeChef() {
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const [CodeChefData, setCodeChefData] = useState([]);
    const [codechefid, setcodechefid] = useState(null);
    const dispatch = useDispatch();
    
    const CodeforcesContent = useSelector((state) => state.codechef?.codechefcontent?.data?.content);

    useEffect(() => {
        if(User?.user?.codechefid)
        {
            setCodeChefData(CodeforcesContent);
        }
    }, [CodeforcesContent, User])

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
            <HeaderTypography logoid={3} HeaderContent="CodeChef - Content Page"/>
            {CodeChefData?.length <=0 ? 
                <Skeleton />
            :
            <div> 
            {
                CodeChefData?.map((contentName, index) =>(<Codechefcard key={index} contentName={contentName} />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default CodeChef
