import React, { useEffect ,useState} from 'react';
export const TodoDate=()=>{
    // date and time
    const [dateTime,setDateTime] = useState("");
    useEffect(()=>{
        const interval=setInterval(() => {

            const now=new Date();
            const formattedDate=now.toLocaleDateString();
            const formattedTime=now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`);
        }, 1000);
        // console.log("output",interval);
        return () => clearInterval(interval);
    },[])
    return <h2 className="date-time">{dateTime}</h2>;
}