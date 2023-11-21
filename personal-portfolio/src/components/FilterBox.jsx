
function FilterBox({handleButtonClick, buttonStates}) {

    return(
        <div className="flex justify-between px-24">
        {Object.keys(buttonStates).map((button) => (
            <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={`text-xl px-3 py-2 rounded transition ${
                buttonStates[button]
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-black'
              } hover:bg-blue-500 hover:text-white`}
            >
            {button}
            </button>
        ))}
        </div>
    );

}


export default FilterBox