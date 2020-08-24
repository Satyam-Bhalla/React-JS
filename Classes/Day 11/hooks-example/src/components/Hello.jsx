import React,{useRef} from 'react';

export const  Hello= () => {
    // React.useEffect(()=>{
    //     console.log("render");
    //     localStorage.setItem('hello','world')
    //     return () => {
    //         console.log("unmounting hello");
    //         localStorage.clear();
    //     }
    // },[])
    const renders = useRef(0);
    console.log("Hello renders: ",renders.current++);
    return ( <h1>hello</h1> );
}
 
