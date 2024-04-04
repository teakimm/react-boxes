import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";




/**BoxList: manages add box form and boxes
 *
 * Props: none
 *
 * State: Array of boxes (like [ {id, width, height, color}])
 *
 * App => Boxlist
 */
function Boxlist() {
    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    function deleteBox(boxId) {
        setBoxes(boxes => boxes.filter(b => b.id !== boxId));
    }

    return (
        <div>
            <div className="BoxList-Form">
                <NewBoxForm addBox={addBox} />
                {boxes.map(b =>
                    <Box
                        key={b.id}
                        boxWidth={b.width}
                        boxHeight={b.height}
                        color={b.color}
                        id={b.id}
                        deleteBox={deleteBox}
                    />

                )}
            </div>
        </div>
    );
}

export default Boxlist;