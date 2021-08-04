function Giphy(props){
    //console.log(props.gif.data.map(d=>d.url))
    //img = props.gif.data.map(d=>d.url)
    //console.log(img)
    return(
        <div>
            {props.gif.data.map(img=>{
                return(
                    <div>
                        <img src={img.images.downsized.url} alt="Alt text"></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Giphy