const IsRaining = (props) => {
    return (
        
        <div>
            <p className="text-container">
                Is it raining today? {props.isRain?"yes":"No"}
            </p>
        </div>
    )
}

export default IsRaining;