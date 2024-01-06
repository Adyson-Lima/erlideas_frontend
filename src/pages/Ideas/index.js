import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from '../../services/api';

export default function Ideas(){

  const[my_ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  // READ, carrega dados da api
  useEffect(() => {
    api.get('api/v1/ideas',{})
    .then(response => {setIdeas(response.data)})
  }, []);

  // UPDATE, atualiza dados na api
  async function updateIdea(id){
    try {
      navigate(`/newupdate/${id}`);      
    } catch (error) {
      alert("Erro ao atualizar!");      
    }
  }

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Ideas Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_ideas.map(idea => (
              <tr key={idea.id}>
                <th scope="row">{idea.id}</th>
                  <td>{idea.name}</td>
                  <td>{idea.description}</td>
                  <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateIdea(idea.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger">Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>
  );

}