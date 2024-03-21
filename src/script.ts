const pegarInputNome = document.getElementById("nomeID") as HTMLInputElement;
const pegarInputEmail = document.getElementById("emailID") as HTMLInputElement;
const pegarInputIdade = document.getElementById("idadeID") as HTMLInputElement;

const pegarDivTextos = document.getElementById("Colocar_textos") as HTMLDivElement;

const pegarBotao = document.getElementById("botao") as HTMLButtonElement;

pegarDivTextos.addEventListener('click',(e)=>{
    console.log(e.target);
})


pegarBotao.addEventListener('click', ()=>{

    pegarDivTextos.appendChild(criarObjeto());

});

function criarObjeto(): HTMLDivElement{

    let criarDiv = document.createElement("div")  as HTMLDivElement;

    const criarPNome = document.createElement("p") as HTMLParagraphElement;
    const criarPEmail = document.createElement("p") as HTMLParagraphElement;
    const criarPIdade = document.createElement("p") as HTMLParagraphElement;
    const criarId = document.createElement("p") as HTMLParagraphElement;

    const botaoEditar = document.createElement("button") as HTMLButtonElement;
    const botaoDeletar = document.createElement("button") as HTMLButtonElement;
    

    
    criarId.textContent = pegarId();
       
 

    criarDiv = adicionarFilhos(criarDiv,criarId,criarPNome,criarPEmail,criarPIdade,botaoEditar,botaoDeletar);
    

    criarDiv.classList.add("divTextoComBorda");

    limparInput();

    return criarDiv;


}

function pegarId():string {
    const pegarUltimoFilho = pegarDivTextos.lastChild;
    if(pegarUltimoFilho != null && pegarUltimoFilho.firstChild != null){

        return String(Number(pegarUltimoFilho.firstChild.textContent)+1);

    }

    return  "1";
}

function adicionarFilhos(criarDiv: HTMLDivElement, criarId:HTMLParagraphElement,criarPNome:HTMLParagraphElement
    ,criarPEmail:HTMLParagraphElement,criarPIdade:HTMLParagraphElement,
    botaoEditar:HTMLButtonElement,botaoDeletar:HTMLButtonElement): HTMLDivElement {

    criarPNome.textContent = "Nome:"+pegarInputNome.value;
    criarPEmail.textContent = "Email:"+pegarInputEmail.value;
    criarPIdade.textContent = "Idade:"+pegarInputIdade.value; 
    botaoEditar.textContent = "Editar";
    botaoDeletar.textContent = "Deletar";
    

    botaoDeletar.classList.add(pegarId()+"_botaoDeletar");
    botaoEditar.classList.add(pegarId()+"_botaoEditar");

    criarDiv.appendChild(criarId);
    criarDiv.appendChild(criarPNome);
    criarDiv.appendChild(criarPEmail);
    criarDiv.appendChild(criarPIdade);
    criarDiv.appendChild(botaoEditar);
    criarDiv.appendChild(botaoDeletar);

    return criarDiv;
}

function limparInput():void {
    pegarInputNome.value ="";
    pegarInputEmail.value="";
    pegarInputIdade.value="";
}



