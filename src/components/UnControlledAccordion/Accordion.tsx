import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
export function UnControlledAccordion(props: AccordionPropsType){
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle title = {props.titleValue}/>
            <button onClick={()=> {setCollapsed(!collapsed)}}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </>
    )
}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle( props: AccordionTitlePropsType) {
    debugger
    console.log('AccordionTitle rendering')
    return <h3> {props.title} </h3>
}

function AccordionBody() {
    console.log('AccordionTitle rendering')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

