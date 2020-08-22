import React from 'react';

export const  Hello= () => {
    React.useEffect(()=>{
        console.log("render");
        localStorage.setItem('hello','world')
        return () => {
            console.log("unmounting hello");
            localStorage.clear();
        }
    },[])
    return ( <h1>hello</h1> );
}
 
