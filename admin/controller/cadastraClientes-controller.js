import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]'); //data atributes 
 
//cadastra o cliente pelo form envia os dados do usuario
formulario.addEventListener('submit', async(evento) => {
    evento.preventDefault();//previno o comportamento padrao do form
   const nome = evento.target.querySelector('[data-nome]').value;//percorro o form e pego data nome que e o campo do input do nome pego os valores buscar o valor dos campos
   const email =  evento.target.querySelector('[data-email]').value;

   //apos cadastrar envia pra tela de obrigado
   try{
     const criaCliente = await clienteService.criaCliente(nome,email)
           window.location.href = '../telas/cadastro_concluido.html'//window e minha tela inteiro location e onde eu to href e pra onde vou enviar
      }
      catch(erro){
        console.log(erro);
        window.location.href = "../telas/erro.html";
      }
   })
