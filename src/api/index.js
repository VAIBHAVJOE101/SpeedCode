import axios from 'axios';

const API = axios.create({ baseURL: 'https://speedcodeserver.herokuapp.com'})

//Registration and Login
export const register = (requestbody) => API.post(`/auth/register`, requestbody);   
export const verifyregistration = (token) => API.get(`/auth/verify/${token}`);            
export const verificationresend = (requestbody) => API.post(`/auth/resend`, requestbody); 

export const login = (requestbody) => API.post(`/auth/login`, requestbody);         
export const recoverpassword = (requestbody) => API.post(`/auth/recover`, requestbody);  
export const passwordreset = (requestbody ,token) => API.post(`/auth/reset/${token}`, requestbody);

//user -> here token = authtoken id = user.id
export const makeadmin = (id, token) => API.post(`/user/admin/${id}`, {headers: { Authorization: `Bearer ${token}`}}) 
export const getallusers= (requestbody, token) => API.get(`/user/`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const getuserdetail = (id,token) => API.get(`/user/${id}`, {headers: { Authorization: `Bearer ${token}`}}) 
export const updateuser = (id, requestbody, token) => API.put(`/user/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const deleteuser = (id, token) => API.delete(`/user/${id}`, {headers: { Authorization: `Bearer ${token}`}});

//gfg    
export const addgfgTopic = (requestbody, token) => API.post(`/gfg/addTopic`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const addgfgquestion = (requestbody, token) => API.post(`/gfg/`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const getgfgquestion = (id, token) => API.get(`/gfg/${id}`, {headers: { Authorization: `Bearer ${token}`}});


//codeforces 
export const getcodeforcescontent = (token) => API.get(`/codeforces/`,{headers: { Authorization: `Bearer ${token}`}});
export const getcodeforcespagecontent = (id,requestbody ,token) => API.get(`/codeforces/${id}?pageid=${requestbody}`, {headers: { Authorization: `Bearer ${token}`}});


//spoj 
export const getspojcontent  = (token) => API.get(`/spoj/`,{headers: { Authorization: `Bearer ${token}`}});
export const getspojpagecontent = (id,requestbody ,token) => API.get(`/spoj/${id}?pageid=${requestbody}`, {headers: { Authorization: `Bearer ${token}`}});


//codechef 
export const getcodechefcontent  = (token) => API.get(`/codechef/`,{headers: { Authorization: `Bearer ${token}`}});
export const getcodechefpagecontent = (id, requestbody ,token) => API.get(`/codechef/${id}?pageid=${requestbody}`,{headers: { Authorization: `Bearer ${token}`}}
);


//vedios 
export const getallvedios = (requestbody, token) => API.get(`/vedio/`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const addvedio = (requestbody, token) => API.post(`/vedio/`, requestbody, {headers: { Authorization: `Bearer ${token}`}})
export const getuservedios = (id, token) => API.get(`/vedio/${id}`, {headers: { Authorization: `Bearer ${token}`}}); // id = user.id
export const updatevedio = (id, requestbody, token) => API.put(`/vedio/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}}); //id = vedio.id
export const deltevedio = (id, requestbody, token) => API.delete(`/vedio/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}}); //id = vedio.id
export const getvediobyid = (id, token) => API.get(`/vedio/getvedio/${id}`,{headers: { Authorization: `Bearer ${token}`}})

//playlist  -> id =playlist.id, token = authtoken
export const addPlaylist = (requestbody, token) => API.post(`/playlist/`, requestbody, {headers: { Authorization: `Bearer ${token}`}});
export const getallPlaylist = (token) => API.get(`/playlist/`,{headers: { Authorization: `Bearer ${token}`}});
export const getuserplaylist = (id, token) => API.get(`/playlist/${id}`,  {headers: { Authorization: `Bearer ${token}`}});
export const updateplaylist = (id, requestbody, token) => API.put(`/playlist/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}});
export const getplaylistvedios = (id, token) => API.get(`/playlist/vedios/${id}`, {headers: { Authorization: `Bearer ${token}`}});
export const deleteplaylist = (id, requestbody, token) => API.delete(`/playlist/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}});  

//vediosDone
export const vediomark = (requestbody, token) => API.post(`/user/vediomark`,requestbody,{headers: { Authorization: `Bearer ${token}`}});
export const vediounmark = (requestbody, token) => API.post(`/user/vediounmark`,requestbody,  {headers: { Authorization: `Bearer ${token}`}});


//blogs 
export const addBlog = (requestbody, token) => API.post(`/blog/`, requestbody, {headers: { Authorization: `Bearer ${token}`}});
export const getallBlog = (token) => API.get('/blog/', {headers: { Authorization: `Bearer ${token}`}});
export const getuserBlog = (id, token) => API.get(`/blog/user/${id}`,{headers: { Authorization: `Bearer ${token}`}});
export const updateblog = (id,requestbody, token) => API.put(`/blog/${id}`, requestbody, {headers: { Authorization: `Bearer ${token}`}});
export const deleteblog = (id, token) => API.delete(`/blog/${id}`,{headers: { Authorization: `Bearer ${token}`}});
export const getblogbyid = (id, token) => API.get(`/blog/${id}`,{headers: { Authorization: `Bearer ${token}`}});






