import Button from "../util-components/button";
import React from "react"
import NavBar from "../util-components/navBar";


const HomePage = () => {
    return (
        <div className="App">
            <h1>Demoing some buttons</h1>
            <h1>Button Styling</h1>
            <br/>
            <Button>Primary Button</Button>
            <br/>
            <Button type={'secondary'}>Secondary Button</Button>
            <h1>Button Sizes</h1>
            <br/>
            <Button size={'lg'}>Large Button</Button>
            <br/>
            <Button size={'md'}>Medium Button</Button>
            <br/>
            <Button size={'sm'}>Small Button</Button>
        </div>
    )
}

export default HomePage
