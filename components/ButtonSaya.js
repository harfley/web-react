import "../styles/ButtonSaya.css"

function ButtonSaya (props) {
    const classButton = "btn btn-saya btn-danger" + props.warna
    return (
        <a href={props.link} class={classButton}>{props.text}</a>
    )
}

export default ButtonSaya
