import React from 'react';
import '../css/Array.css';

type Props = {
    inputs: string[];
    setInputs: React.Dispatch<React.SetStateAction<string[]>>;
};

const ArrayCreate: React.FC<Props> = ({ inputs, setInputs })  => {
    const addInput = () => {
        setInputs([...inputs, '']);
    }

    const handleChange = (index: number, value: string) => {
        const updated = [...inputs];
        updated[index] = value;
        setInputs(updated);
    };

    const deleteInput = () => {
        if (inputs.length === 0) return;
        setInputs(inputs.slice(0, -1));
    };

    return(
        <>
            <div className='buttonContainer'>
                <button onClick={addInput} className="add">Add item</button>
                <button onClick={deleteInput} className="delete">Delete item</button>
            </div>
            <div className="array-container">
                {inputs.map((value, index) => (
                    <input
                    key={index}
                    type="text"
                    className="array enabled"
                    placeholder={`Item ${index + 1}`}
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    style={{
                        width: `${Math.max(value.length * 7.5, 100)}px`,
                        margin: '5px',
                        padding: '5px',
                    }}
                    />
                ))}
            </div>
        </>
    );
};

export default ArrayCreate;