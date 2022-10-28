import { clienteService } from "../service/cliente-service.js";

//função autoExecutavel async
(async () => {
    const pegaURL = new URL(window.location);//passando onde a gente está na pagina

    const id = pegaURL.searchParams.get('id');
    
    //percorrer o dom pra pegar os campos nome e email pra quando entrar na pagina de edição o nome e o email ja vir preenchido
    
    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    
    try{
        //estamos esperando clienteservice
       const dados = await clienteService.detalhaCliente(id)//pegar o id que for que a gente for redirecionado da page
            inputNome.value = dados.nome
            inputEmail.value = dados.email      
    }catch(erro){
        console.log(erro);
        window.location.href = "../telas/erro.html";
    }

    
    const formulario = document.querySelector('[data-form]');
    
    formulario.addEventListener('submit', async(evento) =>{
        evento.preventDefault();
        try{
            await clienteService.atualizaCliente(id,inputNome.value,inputEmail.value)
                window.location.href = "../telas/edicao_concluida.html";
        }
        catch(erro){
            console.log(erro);
            window.location.href = "../telas/erro.html";
        }
        });
})();

 

    /**
     * não precisa mais do .then quando meu await resolver a promise ele vai me redirecionar diretamente pra location
     * 
     * 
     */

/**
 * Criamos um novo objeto URL que é capaz de nos dizer qual o endereço da página que estamos. Por meio da propriedade searchParams conseguimos acessar o método get e selecionar o id que vemos na url.
 * 
 * 
 */
/**
 * controller cria toda uma logica de ação 
 * 
 * 
 */
