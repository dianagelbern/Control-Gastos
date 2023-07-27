const Mensaje : React.FC<{
    mensaje?: string;
    tipo: string
  }> = (props) => {
    return (
        <div className={`alerta ${props.tipo}`}>
            {props.mensaje}
        </div>
    )
}

export default Mensaje;