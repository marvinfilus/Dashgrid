import React, {useState , useEffect} from "react";
import '../calc.scss'

const Calculator = () =>{
    const [equation, setEQ] = useState([]);
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [operate , setOperator] = useState();
    const [click, setClick ] = useState(true);
    const [total, setTotal ]= useState(0);

    const array1 = (e) =>{ 
        const clicked = e.target.innerHTML;
        setEQ( equation => [...equation, clicked]);
        setArr1( arr1 => [...arr1, clicked]);
    }
    
    const array2 = (e) =>{ 
        const clicked = e.target.innerHTML;
        setEQ( equation => [...equation, clicked]);
        setArr2( arr2 => [...arr2, clicked]);
    }

    const clear = () => {
        setEQ(equation => []);
        setOperator();
        setClick(true);
        setTotal(0);
    }

    const operation = (e) => {
        const click = e.target.innerHTML;
        console.log(click)
        setEQ( equation => [...equation, click]);
        setOperator( click )
        setClick(false);
    }

    const equals = () => {
        setClick(true)
        const fvalue = +arr1.join("");
        const svalue = +arr2.join("");
        switch(operate){
            case "+" : 
                setEQ([]);
                return setTotal(fvalue + svalue) ;
            case "-" : 
                setEQ([]);
                return setTotal(fvalue - svalue);
            case "x" : 
                setEQ([]);
                return setTotal(fvalue * svalue);
            case "/" : 
                setEQ([]);
                return setTotal(fvalue / svalue);
        }
    }

    var clickable = click ? array1 : array2
    var allow = click ? operation : null
    return(
        <div className="calcu-body"> 
            <div className="calc-container">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-operation">{ equation } </div>
                        <div className="calc-typed">{total}</div>
                    </div>
                    <div className="calc-button-cal-row" >
                        <div className="button-cal c" onClick={clear}>C</div>
                        <div className="button-cal l" onClick={allow}>"≠"</div>
                        <div className="button-cal l" >%</div>
                        <div className="button-cal l" onClick={allow}>/</div>
                    </div>
                    <div className="calc-button-cal-row">
                        <div className="button-cal" onClick={clickable}>7</div>
                        <div className="button-cal" onClick={clickable}>8</div>
                        <div className="button-cal" onClick={clickable}>9</div>
                        <div className="button-cal l" onClick={allow}>x</div>
                    </div>
                    <div className="calc-button-cal-row" >
                        <div className="button-cal" onClick={clickable}>4</div>
                        <div className="button-cal" onClick={clickable}>5</div>
                        <div className="button-cal" onClick={clickable}>6</div>
                        <div className="button-cal l" onClick={allow}>−</div>
                    </div>
                    <div className="calc-button-cal-row">
                        <div className="button-cal" onClick={clickable}>1</div>
                        <div className="button-cal" onClick={clickable}>2</div>
                        <div className="button-cal" onClick={clickable}>3</div>
                        <div className="button-cal l" onClick={allow}>+</div>
                    </div>
                    <div className="calc-button-cal-row">
                        <div className="button-cal" onClick={clickable}>.</div>
                        <div className="button-cal" onClick={clickable}>0</div>
                        <div className="button-cal" >M</div>
                        <div className="button-cal l" onClick={equals} >=</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator