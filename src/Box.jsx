function Box({ boxWidth, boxHeight, color, id }) {
    console.log(boxWidth);
    return (

        <div style={{
            width: Number(boxWidth),
            height: Number(boxHeight),
            backgroundColor: color
        }} id={id}></div >
    );
}

export default Box;