import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function Boxlist() {
    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
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
                    />

                )}
            </div>
        </div>
    );
}

export default Boxlist;