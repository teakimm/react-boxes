import { useState } from "react";


/**NewBoxForm: Handles adding box
 *
 * Props: addBox function from BoxList
 *
 * State: formData
 *
 * App => Boxlist => NewBoxForm
 */
function NewBoxForm({ addBox }) {
    const initialState = { width: 0, height: 0, color: "" };
    const [formData, setFormData] = useState(initialState);


    /** Send {name, quantity} to parent
 *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="color">Color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add a new box</button>
        </form>
    );
}


export default NewBoxForm;