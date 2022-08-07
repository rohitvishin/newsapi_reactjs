import React from "react";
export default function Updater(){
    const handleSubmit = (event) => {
        console.log("in")
        event.preventDefault();
        console.log(event.target[0].value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value="new"/>
            <input type="submit" value="submit"/>
        </form>
    );
}