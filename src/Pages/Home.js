import React from 'react'
import Typography from '../components/Typography';
import Card from "../components/Card";
import gfg from '../assets/image/gfg.png';
import codeforces from '../assets/image/codeforces.png';
import spoj from '../assets/image/spoj.png';
import codechef from '../assets/image/codechef.png';
import '../assets/css/home.css';
import { useHistory } from 'react-router-dom';
import VedioSlider from '../pageComponents/VedioSlider';


function Home() {
    const history = useHistory();
    return (
        <div style={{ width: '100%', maxWidth: '1300px', margin: '50px auto', padding: '1em', color: ' white' }} >
            <div style={{ textAlign: 'center', padding: '10px', borderBottom: '1px solid lightgray'}}>
                <Typography fs="30px">Competitive Programming Practice</Typography>
                
                <div style={{ margin: '30px 0', minheight: "150px", height: "20vh", display: 'flex', justifyContent: 'space-between' }}>
                    <div className="cpcard" onClick={() =>history.push('/gfg') }>
                        <Card bg="#157a0c" minw="15vw" maxw="15vw" h="20vh"><img src={gfg} height="70%" alt="logoimage" />
                            <Typography fs="25px" fw="800" >GEEKS FOR GEEKS </Typography></Card>
                    </div>
                    <div className="cpcard" onClick={() =>history.push('/codeforces') }>
                    <Card bg="#b2bab1" minw="15vw" maxw="15vw"  h="20vh">
                        <img src={codeforces} height="70%" alt="logoimage" />
                        <Typography fs="25px" fw="800" >CODE<span style={{ color: '#2960b3' }}>FORCES</span></Typography>
                    </Card>
                    </div>
                    <div className="cpcard" onClick={() =>history.push('/spoj') }>
                    <Card bg="#193670" minw="15vw" maxw="15vw" h="20vh">
                        <img src={spoj} height="70%" alt="logoimage" />
                        <Typography fs="25px" fw="800" >SPOJ </Typography>
                    </Card>
                    </div>
                    <div className="cpcard" onClick={() =>history.push('/codechef') }>
                    <Card bg="#e4ede4" minw="15vw" maxw="15vw" h="20vh">
                        <img src={codechef} height="70%" alt="logoimage" />
                        <Typography fs="25px" fw="800" color="black">CODECHEF </Typography>
                    </Card>
                    </div>
                </div>
            </div>
            <VedioSlider />
        </div>
    )
}

export default Home
