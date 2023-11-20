
function FilterBox({handleButtonClick, buttonStates}) {

    return(
        <div className="flex justify-between px-24">
        {Object.keys(buttonStates).map((button) => (
            <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="text-xl bg-white px-3 py-2 rounded"
            >
            {button}
            </button>
        ))}
        </div>
    );

}


export default FilterBox