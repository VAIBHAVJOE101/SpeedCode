import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const socketconnection = () =>{
        return io.connect("http://localhost:3001");
}


function Socket({children , socketName, socketData}) {
const [response, setresponse] = useState("");

const [socket] = useState(socketconnection);

useEffect(() =>{
    socket.emit(socketName, socketData);
}, [])


useEffect(()=>{
    return ()=>{ 
            socket.disconnect();
    }
},[]);

useEffect(() => {
        socket.on(socketName, (data) => {
            setresponse(data);
        });
});

return (
    <div>
        {children}
    </div>
);
}

export default Socket;