
/**Box: renders box
 *
 * Props:  boxWidth, boxHeight, color, id, deleteBox
 *
 * State: none
 *
 * App => BoxList => Box
 */
function Box({ boxWidth, boxHeight, color, id, deleteBox }) {
    function deleteBoxId() { deleteBox(id); }
    return (
        <div>
            <div style={{
                width: `${boxWidth}px`,
                height: `${boxHeight}px`,
                backgroundColor: color
            }} id={id}>

            </div >
            <button onClick={deleteBoxId}>Remove The Box!</button>
        </div>

    );

}

export default Box;