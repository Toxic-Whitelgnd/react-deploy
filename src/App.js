import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {Routes,Route} from "react-router-dom";
import { About, Contact, Home } from './pages';
import Komalikhan from "./komali.js"

function Header(property){
    return(
        <header>
            <h1>{property.title}</h1>
        </header>
    )
}

function Body(yo){
    return(

        <body>
            "hello mic tesyting please come mother fucker you noob {yo.name} !!"
        </body>
    )
}
function Loggedin(props){
    return(
            <p>User Logged in , User name {props.name}</p>

    )
}

function Guest(){
    return(
        <p>Guest User is welcomed!!!</p>
    );
}



function App({authorized}) {

    // const [data,setdata] = useState(null);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/wycats')
    //     .then((respose)=> respose.json())
    //     .then(setdata);
    // },[]);


    // if(data){
    //     return (<div>

    //         <h1>{data.name}</h1>
    //         <h6>{data.location}</h6>
    //         <img alt={data.login} src = {data.avatar_url} />

        
    //     </div>)
    // }
     return (

        // <div classname = "App">
            
        //     <Header title="Testing yo MF!!"/>   
        //     <Body name="qwetr"/>
        //     <h3> Thank god it is working!!!</h3>
           
        // </div>    

        // <>
        // {props.authorized ? <Loggedin name="raja"/> : <Guest />}
        // </>

        //using object destruction
        // <>
        // {authorized ? <Loggedin name="raja"/> : <Guest />}
        // </>

        

        // <>
        // <h1>
        //     current emotion is {emo}.

        // </h1>

        // <button onClick={()=> setemo ("happy") }>
        //     click me
        // </button>
        // <button onClick={()=> setemo ("frustrate") }>
        //     click me to frustrate
        // </button>
        // </>

        // <div>No user data</div>

    // <div>
    //     <Routes>

    //         <Route path="/" element={<Home/>}/>
    //         <Route path="/about" element={<About/>}/>
    //         <Route path="/contact"  element={<Contact/>}/>

    //     </Routes>

    

    // </div>
    
    <div>
        <h1>
      Hello world!
      
        </h1>,
        <div>
        <Komalikhan />

        </div>

    

    </div>
    

     
    
        
        

    );
}



export default App;