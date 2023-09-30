import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnnOff from "./components/OnOff/OnnOff";

function hello(){
    debugger
    alert('Hello IT-KAMASUTRA')
}

function App() {
    console.log('App')


    return (
        <div>

            <Accordion titleValue = {"Menu"} collapsed ={true}/>
            <Accordion titleValue = {"Users"} collapsed ={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>



            <OnnOff/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}
function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}



export default App;
