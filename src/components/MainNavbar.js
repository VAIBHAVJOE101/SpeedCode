import Typography from './Typography';
import Logo from './Logo';
const font =  "'Ubuntu', sans-serif;";

const MainNavbar = () => {
      return (
            <div className="Nav" style={{display: 'flex' ,alignItems: 'center'}}>
                  <Logo imgs="60px" m="10px" />
                  <Typography fs="40px" gradient ff={font}>SpeedCode</Typography>
            </div>
      );
}

export default MainNavbar;