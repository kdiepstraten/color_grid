function Hsl(getHue, saturation, percentage){
    return(
        <>
            <p>{`hsl(${getHue}, ${saturation}%, ${percentage}%)`}</p>
        </>
    )
}
export default Hsl;