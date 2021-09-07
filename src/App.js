import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/ProtectedRoute';
import CustomRoute from './hoc/CustomRoute';
import routes from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import {GetGfgData } from './redux/actions/gfg';
import {Getcodechefcontent} from './redux/actions/codechef'
import { Getcodeforcescontent } from './redux/actions/codeforces';
import { GetSpojcontent } from './redux/actions/spoj';
import { Getallplaylist } from './redux/actions/playlist';
import { GetBlog } from './redux/actions/blog';

function App() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth?.user?.data);
  const Token = useSelector((state) => state.auth?.token);

  useEffect(() =>{
    dispatch({ type: 'GETUSER' });
  }, [])

  useEffect(() => {
    if(User?.user?.GFGid){
        dispatch(GetGfgData(User?.user?._id , Token))
    }

    if(User?.user?.codechefid)
    {
      dispatch(Getcodechefcontent(Token))
    }

    if(User?.user?.Codeforcesid)
    {
      dispatch(Getcodeforcescontent(Token))
    }

    if(User?.user?.spojid){
      dispatch(GetSpojcontent(Token))
    }

    if(User){
      dispatch(Getallplaylist(Token))
    }

    if(User){
      dispatch(GetBlog(Token))
    }

  }, [User, Token])


  return (
    <Router>
        <div className="App">
          <Switch>
              {routes?.map((route) => (
                route.protected === true ? (
                <PrivateRoute key={route} path={route.path} components={route.component}/>) 
                : 
                (
                  <CustomRoute key={route} path={route.path} components={route.component}/>
              )))
          }
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
