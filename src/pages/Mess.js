
import React, { useRef, useState } from "react";
import { useEffect } from "react";
   
function Messaround () {
    const type = useRef();
    const [inc, setInc] = useState();

    useEffect(() => {
        // switch(inc){
        //     case "skills" : setInq()
        // }
    })

    const dropDown = (e) =>{
        const data = e.target.value;
        console.log(data)
        setInc(inc => data);
        console.log(inc);
    }

    const button = () => {
        console.log(inc)
    }

    console.log(inc);
    return (
        <div className="mess">
            <select name="inidents" className="incident" onChange={dropDown} ref={type} >
                <option value="none"   > Please make a selection </option>
                <option value="skills"> Does your agent need skills modified? </option>
                <option value="hoops"  > Do you need a change to your campaign hours? </option>
                <option value="DNC" >  number that needs to be removed from the DNC </option>
                <option value="other" >  Other </option>
            </select> 
            <div className={ inc === "skills" ? "show" : "hide"}>
                <label> Agent Name </label>
                <input type="text" /><br/>
                <label> Name of skill needed</label>
                <input type="text" />
            </div>
            <div className={inc == "hoops" ? "show" : "hide"}>
                <label> Campaign/Office number that needs Hours of Opertions updated</label>
                <input type="text" /> <br/>
                <label> When will this change go in effect </label>
                <input type="text" />
            </div>
            <div className={inc == "DNC" ? "show" : "hide"}>
                <label> Number that needs to be removed from DNC </label>
                <input type="text" />
            </div>
            <div className={inc == "other" ? "show" : "hide"}>
                <label> Name of Agent that is having issues. </label>
                <input type="text" name="agent1" />
            </div>
        </div>
    )
}

export default Messaround