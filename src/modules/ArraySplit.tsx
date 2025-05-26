import React,  { useState } from "react";
import { cleanupInput } from "../App";
import '../css/Array.css';

type Props = {
    inputs: string[];
};

const ArraySplit: React.FC<Props> = ({ inputs }) => {
    const [animateState, setAnimateState] = useState<boolean>(false);

    const AnimateMiddleItem = () => {
        const middle = document.getElementById("middleItem");
        if (middle && !animateState) {
            middle.style.transition = "background 0.3s ease, transform 0.3s ease, margin 0.3s ease";
            middle.style.margin = "20px";

            setTimeout(() => {
                middle.style.backgroundColor = "var(--main)";
                middle.style.transform = "translateY(30px)";
                setAnimateState(true);
            }, 300);
        }
    };

    const resetAnimation = () => {
        const middle = document.getElementById("middleItem");
        if (middle && animateState) {
            
            setTimeout(() => {
                middle.style.backgroundColor = "white";
                middle.style.transform = "translateY(0px)";
                middle.style.margin = "6px";
                setAnimateState(false);
            }, 300);
        }
    };

    return (
        <>
            <div className='buttonContainer'>
                <button onClick={AnimateMiddleItem} className="add">Animate</button>
                <button onClick={resetAnimation} className="delete">Reset</button>
            </div>
            <div id="arrayAnimate" className="array-container" style={{ border: "none" }}>
                {cleanupInput(inputs).sort().map((value, index, array) => {
                    const middleIndex = Math.floor((array.length - 1) / 2);

                    return (
                        <input
                        key={index}
                        type="text"
                        className="array disabled"
                        placeholder={`Item ${index + 1}`}
                        value={value}
                        style={{
                            width: `${Math.max(value.length * 7.5, 100)}px`,
                            margin: '5px',
                            padding: '5px'
                        }}
                        id = {index == middleIndex ? "middleItem" : undefined}
                        readOnly
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ArraySplit;