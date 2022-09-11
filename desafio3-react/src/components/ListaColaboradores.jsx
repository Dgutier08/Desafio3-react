const ListaColaboradores = (props) => {
    return (
        <ul>
            {props.colaboradores.filter(colaborador => colaborador.nombre === props.filtro || !props.filtro ).map(colaborador => 
            <li key={colaborador.id}> {colaborador.nombre} - {colaborador.correo} 
            </li>)}
        </ul>
    )
}
export default ListaColaboradores