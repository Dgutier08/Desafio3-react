import Button from "react-bootstrap/Button";
import Header from "./header";
import ListaColaboradores from "./ListaColaboradores";
import dataColaboradores from "./dataColaboradores.json";
import {useState} from "react";


function TareasPage () {
  const [colaboradores, setColaboradores] = useState(dataColaboradores)
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [filtro, setFiltro] = useState("")

  const agregarColaborador = (e) =>{
    e.preventDefault()
    const newColaborador = {id: colaboradores.length + 1, nombre: name, correo: mail}
    const newList = []
    for(let colaborador of colaboradores){
      newList.push(colaborador)
    }
    newList.push(newColaborador)
    setColaboradores(newList)
    setName("")
    setMail("")
  }
  const filtrarColaborador = (text)=>{
    const listFiltrada = colaboradores.filter(colaborador => colaborador.nombre !== text.nombre)
    console.log(listFiltrada)
    setColaboradores(listFiltrada)
  }
  

  return (
    <div className="">
      <div className="">
      <Header title="Buscador de Colaboradores" onSearch={setFiltro} value={filtro}/>
      </div>

      <form onSubmit={agregarColaborador} className="mb-5">

      <label className="p-3 border-2 border-gray-200 rounded-lg">
        <input className=" mb-5 p-0 text-sm border-none focus:ring-0" 
          id="nombre" 
          type="text" 
          placeholder="Ingresa nombre"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>

         <label className=" p-3 border-2 border-gray-200 rounded-lg" >
        <input className="mb-5 p-0 text-sm border-none focus:ring-0" 
          id="correo" 
          type="email" 
          placeholder="Ingresa Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        </label> <br /> 

        <div className=" p-3 ml-6 float-center">
        <Button variant="primary" block onClick={agregarColaborador}>Agrega colaborador</Button>
        </div>
      </form>
  
      <div className=" p-6 border-2 border-gray-400 rounded-lg">
        <hr/>
        <h2>Listado de colaboradores</h2>
      </div>
      <ListaColaboradores colaboradores={colaboradores} filtro={filtro}/>

    </div>
  );
}

export default TareasPage;