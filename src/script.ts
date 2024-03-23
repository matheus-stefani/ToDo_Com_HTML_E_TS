const pegarInputNome = document.getElementById("nomeID") as HTMLInputElement;
const pegarInputEmail = document.getElementById("emailID") as HTMLInputElement;
const pegarInputIdade = document.getElementById("idadeID") as HTMLInputElement;

const pegarDivTextos = document.getElementById("Colocar_textos") as HTMLDivElement;

const pegarBotao = document.getElementById("botao") as HTMLButtonElement;

enum NomeClasses{
    btnDeletar = "_botaoDeletar",
    btnEditar = "_botaoEditar",
    btnSalvar = "_botaoSalvar",
}

pegarDivTextos.addEventListener('click',(e)=>{
    if(!e.target) return; 
    const pegarElemento = e.target as HTMLElement;
    
    if(!pegarElemento.parentNode) return;

    if(pegarElemento.className == NomeClasses.btnDeletar) {
        pegarDivTextos.removeChild(pegarElemento.parentNode); 
        return;
    }

    if(pegarElemento.className == NomeClasses.btnEditar){

        const nome = pegarElemento.parentNode.childNodes[2];
        const email = pegarElemento.parentNode.childNodes[5];
        const idade = pegarElemento.parentNode.childNodes[8];

        const nomeInput = document.createElement("input") as HTMLInputElement;
        const emailInput = document.createElement("input") as HTMLInputElement;
        const idadeInput = document.createElement("input") as HTMLInputElement;

        if(!nome.textContent || !email.textContent || !idade.textContent)return;

        nomeInput.value = nome.textContent;
        emailInput.value = email.textContent;
        idadeInput.value = idade.textContent;



        pegarElemento.parentNode.replaceChild(nomeInput,nome);
        pegarElemento.parentNode.replaceChild(emailInput,email);
        pegarElemento.parentNode.replaceChild(idadeInput,idade);

        const pegarBotao = pegarElemento.parentNode.childNodes[10] as HTMLButtonElement;

        pegarBotao.textContent = "Salvar";
        pegarBotao.classList.remove(NomeClasses.btnEditar);
        pegarBotao.classList.add(NomeClasses.btnSalvar);


        return;
        
        
    }
    if(pegarElemento.className == NomeClasses.btnSalvar){
        
        const criarPNomeSalvar = document.createElement("label") as HTMLLabelElement;
        const criarPEmailSalvar = document.createElement("label") as HTMLLabelElement;
        const criarPIdadeSalvar = document.createElement("label") as HTMLLabelElement;

        const nomeSalvar = pegarElemento.parentNode.childNodes[2] as HTMLInputElement;
        const emailSalvar = pegarElemento.parentNode.childNodes[5] as HTMLInputElement;
        const idadeSalvar = pegarElemento.parentNode.childNodes[8] as HTMLInputElement;

        criarPNomeSalvar.textContent = nomeSalvar.value;
        criarPEmailSalvar.textContent = emailSalvar.value;
        criarPIdadeSalvar.textContent = idadeSalvar.value;

        pegarElemento.parentNode.replaceChild(criarPNomeSalvar,nomeSalvar);
        pegarElemento.parentNode.replaceChild(criarPEmailSalvar,emailSalvar);
        pegarElemento.parentNode.replaceChild(criarPIdadeSalvar,idadeSalvar);

        const pegarBotao = pegarElemento.parentNode.childNodes[10] as HTMLButtonElement;

        pegarBotao.textContent = "Editar";
        pegarBotao.classList.remove(NomeClasses.btnSalvar);
        pegarBotao.classList.add(NomeClasses.btnEditar);

        return;
    }

})


pegarBotao.addEventListener('click', ()=>{

    pegarDivTextos.appendChild(criarObjeto());

});

function criarObjeto(): HTMLDivElement{

    let criarDiv = document.createElement("div")  as HTMLDivElement;

    const criarPNome = document.createElement("label") as HTMLLabelElement;
    const criarPEmail = document.createElement("label") as HTMLLabelElement;
    const criarPIdade = document.createElement("label") as HTMLLabelElement;
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

function adicionarFilhos(criarDiv: HTMLDivElement, criarId:HTMLParagraphElement,criarPNome:HTMLLabelElement
    ,criarPEmail:HTMLLabelElement,criarPIdade:HTMLLabelElement,
    botaoEditar:HTMLButtonElement,botaoDeletar:HTMLButtonElement): HTMLDivElement {

    const labelNome =  document.createElement("label") as HTMLLabelElement;
    const labelEmail =  document.createElement("label") as HTMLLabelElement;
    const labelIdade =  document.createElement("label") as HTMLLabelElement;
    const pularLinha1 = document.createElement("br") as HTMLBRElement; 
    const pularLinha2 = document.createElement("br") as HTMLBRElement; 
    const pularLinha3 = document.createElement("br") as HTMLBRElement; 

    labelNome.textContent = "Nome:";
    labelEmail.textContent = "Email:";
    labelIdade.textContent = "Idade:";


    criarPNome.textContent = pegarInputNome.value;
    criarPEmail.textContent = pegarInputEmail.value;
    criarPIdade.textContent = pegarInputIdade.value; 

    botaoEditar.textContent = "Editar";
    botaoDeletar.textContent = "Deletar";
    

    botaoDeletar.classList.add("_botaoDeletar");
    botaoEditar.classList.add("_botaoEditar");

    criarDiv.appendChild(criarId);
    criarDiv.appendChild(labelNome);
    criarDiv.appendChild(criarPNome);
    criarDiv.appendChild(pularLinha1);
    criarDiv.appendChild(labelEmail);
    criarDiv.appendChild(criarPEmail);
    criarDiv.appendChild(pularLinha2);
    criarDiv.appendChild(labelIdade);
    criarDiv.appendChild(criarPIdade);
    criarDiv.appendChild(pularLinha3);
    criarDiv.appendChild(botaoEditar);
    criarDiv.appendChild(botaoDeletar);

    return criarDiv;
}

function limparInput():void {
    pegarInputNome.value ="";
    pegarInputEmail.value="";
    pegarInputIdade.value="";
}



