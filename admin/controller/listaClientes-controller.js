import { clienteService } from "../service/cliente-service.js";
//cria a tr
const  criaNovaLinha = (nome, email, id) =>{
    const linhaNovoCliente = document.createElement('tr');
   const conteudo =`
     <td class="td" data-td>${nome}</td>
                     <td>${email}</td>
                     <td>
                         <ul class="tabela__botoes-controle">
                             <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                         </ul>
                     </td>
     `   
     /**
      * 
      *Fazer uma query string utilizando a propriedade searchParams.get() para encontrar um id. 
      * ../telas/edita_cliente.html?id=${id}
      */

     //troca o conteudo do html original pelo novo conteudo que eu quero
     linhaNovoCliente.innerHTML = conteudo;//colocando o conteudo dentro da tr esta percorrendo a arvore do dom pra buscar a data tabela
      linhaNovoCliente.dataset.id = id;//dataatributes chamado data id e passei  o id do cliente como prop pra identificar o cliente
//dataset colocar o id nas tr em cada uma das tr geradas pra isso criei um dataAtributes
      console.log(linhaNovoCliente);
      return linhaNovoCliente;
   }
   
   
     const tabela = document.querySelector('[data-tabela]');//elemento pai tbody


     //deletando cliente
     tabela.addEventListener('click', async(evento) =>{
      let ehBotaoDeletar =  evento.target.className == 'botao-simples botao-simples--excluir'; //target quem e o alvo do evento
      if(ehBotaoDeletar){
        try{
          const linhaCliente = evento.target.closest('[data-id]');//encontra o elemento pai mais proximo da td e a linha que agente criou a tr o closet pega o mais proximo da data-id que e o dateatribute da tr
          let id = linhaCliente.dataset.id;
          await clienteService.removeCliente(id)//deletando o cliente da api
              linhaCliente.remove();
        }
        catch(erro){
            console.log(erro);
            window.location.href = "../telas/erro.html";
        }
      }
    
    
    });

   //exibindo clientes
   const render = async () =>{
    try{
      const listaClientes = await clienteService.listaClientes()
      listaClientes.forEach(elemento => {
         tabela.appendChild(criaNovaLinha(elemento.nome,
         elemento.email, elemento.id));//pra cada cliente vou adicionar os cliente na linha e colocando o tr dentro do tbody
     //estamos gerando a visualização passamos o id para gerar o identificador
       });
    }catch(erro){
      console.log(erro);
      window.location.href = "../telas/erro.html";
    }
   }

   render();

    /**
     * Usar a método closest para encontrar o elemento do DOM mais próximo ao que queremos remover
     * 
     * 
     * async substitui o .then() 
     * as funções indico que e async
     * 
     * 
     * Utilizando async/await temos uma função assíncrona que conseguimos ler de forma estrutural, trazendo benefícios de manutenção e legibilidade para nosso código. Bem como o uso do try/catch ajuda a lidar com erros.
     */