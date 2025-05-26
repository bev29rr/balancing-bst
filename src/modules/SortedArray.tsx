import React from "react";
import { cleanupInput } from "../App";

type Props = {
    inputs: string[];
};

const SortedArray: React.FC<Props> = ({ inputs }) => {
    return(
        <>
            <div className="array-container">
                {cleanupInput(inputs).sort().map((value, index) => (
                    <input
                    key={index}
                    type="text"
                    className="array disabled"
                    placeholder={`Item ${index + 1}`}
                    value={value}
                    style={{
                        width: `${Math.max(value.length * 7.5, 100)}px`,
                        margin: '5px',
                        padding: '5px',
                    }}
                    readOnly
                    />
                ))}
            </div>
        </>
    );
};

export default SortedArray