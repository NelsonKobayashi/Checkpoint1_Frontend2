/* HEADER */
/* inserindo na variável header o código html para gerar o menu superior*/
let header = `
<nav>
    <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
    <div>
        <ul>
            <li><a id="index" href="./equipe.html">Equipe</a></li>
            <li><a href="./contato.html">Contato</a></li>
        </ul>
    </div>
</nav>
`;
/* inserindo condicional para chamar a página destinada a fofocas */
if(document.title.includes('Fofocas')) {
    header = `
    <nav>
        <a href="./index.html"><img src="./img/fofoca.jpg" alt=""></a>
        <div>
            <button id="addFofoca">Criar fofoca</button>
            <ul>
                <li><a id="index" href="./equipe.html">Equipe</a></li>
                <li><a href="./contato.html">Contato</a></li>
            </ul>
        </div>
    </nav>`
}
/* selecionando aravés do querySelector a tag header e inserindo os dados da variável header */
document.body.querySelector('header').innerHTML = header;
/* /HEADER */

/* FOOTER */
/* inserindo dentro da variável footer a frase abaixo */
let footer = `
<p>© <a href="https://www.digitalhouse.com/br/" target="_blank">Digital House</a> - Certified Tech Developers - Checkpoint I - Front End II </p>
`;
/* selecionando aravés do querySelector a tag footer e inserindo os dados da footer */
document.body.querySelector('footer').innerHTML = footer;

/* /FOOTER */

/* FIXED BUTTON */
/* inserindo botão fixo no canto inferior direito com serviço de SAF (serviço de atendimento ao fofoqueiro) */
let fixedButton = `
    <a id="fixedButton" href="https://www.facebook.com/Fofoqueiros-An%C3%B4nimos-578004255573249/" target="_blank" rel="noreferrer noopener".>
        <img src="./img/saf.png" alt="Serviço de Atendimento ao Fofoqueiro" title="SAF - Serviço de Atendimento ao Fofoqueiro">
    </a>
`
/* selecionando aravés do querySelector a tag section e inserindo oo botão de SAF dentro da section */
document.body.querySelector('section').innerHTML += fixedButton;

/* /FIXED BUTTON */