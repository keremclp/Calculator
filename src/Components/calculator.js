// import react(Mandotary step)
import React from 'react';
import CalculatorTitle from './calculatorTitle';
import OutputScreen from './outputScreen';
import Button from './button';
import { useState } from "react";


// Create a function
function Calculator() {
    let [question, setQuestion] = useState('');
    let [answer, setAnswer] = useState('');

    const handleclick = (e) => {
        console.log("clicked");
        const value = e.target.value;
        switch (value) {
            case '=': {
                if (question !== '') {

                    let ans = '';
                    // setAnswer(ans);
                    // setQuestion('');
                    try {

                        ans = eval(question);
                        console.log(ans);
                    }
                    catch (err) {
                        setAnswer("Math Error");
                    }
                    if (ans === undefined) {
                        setAnswer("Math Error");
                    }
                    else {
                        setAnswer(ans);

                        setQuestion('');
                    }
                    break;
                }

            }
            case 'Clear': {
                setQuestion('');
                setAnswer('');
                break;
            }
            case 'Delete': {
                var newstr = '';
                newstr = newstr.substring(0, newstr.length - 1);
                setQuestion(newstr);
                break;
            }
            default: {
                console.log("default");
                console.log(question);
                setQuestion(question += value);
                console.log(question);

                break;
            }
        }
    }


    return (
        <div className="frame">
            <CalculatorTitle value="Calculator" />
            <div className="mainCal">
                <OutputScreen question={question} answer={answer} />
                <div className="buttons">
                    <div className="button-row">
                        <Button onClick={handleclick} label={'Clear'} />
                        <Button onClick={handleclick} label={'Delete'} />
                        <Button onClick={handleclick} label={'.'} />
                        <Button onClick={handleclick} label={'/'} />
                    </div>
                    <div className="button-row">
                        <Button onClick={handleclick} label={'7'} />
                        <Button onClick={handleclick} label={'8'} />
                        <Button onClick={handleclick} label={'9'} />
                        <Button onClick={handleclick} label={'*'} />
                    </div>
                    <div className="button-row">
                        <Button onClick={handleclick} label={'4'} />
                        <Button onClick={handleclick} label={'5'} />
                        <Button onClick={handleclick} label={'6'} />
                        <Button onClick={handleclick} label={'-'} />
                    </div>
                    <div className="button-row">
                        <Button onClick={handleclick} label={'1'} />
                        <Button onClick={handleclick} label={'2'} />
                        <Button onClick={handleclick} label={'3'} />
                        <Button onClick={handleclick} label={'+'} />
                    </div>
                    <div className="button-row">
                        <Button onClick={handleclick} label={'0'} />
                        <Button onClick={handleclick} label={'='} />
                    </div>
                </div>
            </div>
        </div>
    );
}


// Export the component
export default Calculator;

