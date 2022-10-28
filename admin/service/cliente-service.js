const listaClientes = () =>{//conexao com api
      return fetch('http://localhost:3000/profile')
          .then(resposta =>{ 
            if(resposta.ok){
              return resposta.json();//transforma em objeto js
            }
            throw new Error('Não foi possivel listar os clientes');
          })
    
};

const criaCliente = (nome,email) =>{
  return fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         nome: nome, //dados que eu vou passar pro servidor
         email: email
      })
  })
  .then(resposta =>{
    if(resposta.ok){
      return resposta.body
    }
    throw new Error('Não foi possivel criar um cliente');
  })
} 

const removeCliente = (id) =>{
  return fetch(`http://localhost:3000/profile/${id}`,{ //remover cliente pelo id o id identifica qual e o cliente
  method: 'DELETE',
}).then(responsta  => {
  if(!responsta.ok){
    throw new Error('Não foi possivel remover um cliente');
  }
})

} 

const detalhaCliente = (id) => {
  //pegando os dados do cliente especifico pelo id
  return fetch(`http://localhost:3000/profile/${id}`)
  .then(resposta =>{ 
    if(resposta.ok){
      return resposta.json();//transforma em objeto js
    }
    throw new Error('Não foi possivel detalhar um cliente');
  })
}

//vamos abrir conexão de novo com o servidor pra editar os dados
//atualiza os dados
const atualizaCliente = (id,nome,email) => {//recebe o id pra identificar o cliente
  return fetch(`http://localhost:3000/profile/${id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({//body e o que vamos atualizar
          nome: nome,
          email: email
      })
  })
  .then(resposta =>{
    if(resposta.ok){
      return resposta.json()//me devolve a resposta o objeto js valido    
    }
    throw new Error('Não foi possivel atualizar um cliente');
  })

}


export const clienteService = {
  listaClientes, 
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}
//meio termo que tem relação com visualização e com api vou colocar no controller

/**
 * Alternativa correta! Isso mesmo, além de indicar a ação passando o verbo http DELETE, também precisamos passar um id que vai ser usado para identificar cada um dos clientes.
 * 
 * 
 */