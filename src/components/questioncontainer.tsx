import { useState } from "react";

function Option({ option , selected = false, selectedIndex, onClick } : {
    option: string , 
    selectedIndex: number | null,
    onClick: (index: number) => void,
    selected?: boolean
}) {

    return (
        <div>
            <button 
            className={"w-full h-12 bg-gray-200 rounded-lg outline-none" + (selected ? " border-2 border-blue-500" : "")}
            onClick={() => onClick(selectedIndex!)}
            >{option}</button>
        </div>
    );
}

function OptionsContainer({ options , selectedIndex , onClick } : {
    options: string[], 
    selectedIndex: number | null,
    onClick: (index: number) => void
}) {
    return (
        <div className="w-full grid grid-cols-2 gap-2">
            {options.map((option, index) => <Option 
            key={index} 
            option={option} selected={selectedIndex === index}
            onClick={() => onClick(index)}
            selectedIndex={selectedIndex}
             />)}
        </div>
    );
}

function Question({ selectedIndex , question , options , onClick } : {
    selectedIndex: number | null,
    question: string,
    options: string[],
    onClick: (index: number) => void
}) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-xl">{question}</h1>
            <OptionsContainer 
                options={options}
                selectedIndex={selectedIndex}
                onClick={onClick}
            />
        </div>
    );
}

function QuestionContainer({ question , options , onClick } : {
    question: string,
    options: string[],
    onClick: (index: number) => void
}) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
        onClick(index);
    }

    return (
        <div className="w-full">
            <Question
                selectedIndex={selectedIndex}
                question={question}
                options={options}
                onClick={handleClick}
            />
        </div>
    );
}

export {
    QuestionContainer,
    OptionsContainer
}