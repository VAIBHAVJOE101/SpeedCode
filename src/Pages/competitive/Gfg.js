import React, { useEffect, useState } from 'react';
import '../../assets/css/codeforces.css';
import HeaderTypography from '../../pageComponents/HeaderTypography';
import Gfgcard from '../../pageComponents/Competitve/Gfg/GfgCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import CompetetiveModal from '../../pageComponents/Competitve/CompetitveModal';
import { updateGFGdata } from '../../redux/actions/gfg';


function Gfg() {
    const [gfgid, setgfgid] = useState();
    const [gfgcontent, setgfgcontent] = useState([]);
    const User = useSelector((state) => state.auth?.user?.data);
    const Token = useSelector((state) => state.auth?.token);
    const dispatch = useDispatch();
    const Gfgdata = useSelector((state) => state.gfg?.gfgdata?.data?.questionsdone);

    useEffect(() => {
        if(Gfgdata?.length > 0 && User?.user?.GFGid){
            setgfgcontent(Gfgdata);
        }
    }, [Gfgdata, User])


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
            <HeaderTypography logoid={0} HeaderContent="Gfg - Content Page"/>
            {gfgcontent?.length <=0 ? 
                <Skeleton />
            :
            <div> 
            {
                gfgcontent?.map((gfg, index) =>(
                            <Gfgcard key={index} 
                                id = {index}
                                contentName={gfg?.topic}
                                count = {gfg?.count}
                                totalcount = {gfg?.totalcount} />))
            }
            </div>
            
            }
        </div>
        </div>
    )
}

export default Gfg
