function Header(props){
    return <div className="header">
        <h2>{props.title}</h2>
        <input type="text" placeholder="Busca un colaborador" onChange={(e) => props.onSearch(e.target.value)} value={props.value}/>
    </div>
}
export default Header