/* Criando formulário através do javascript para a página de CONTATO,
utilizando query selector e innerHTML */

/* selecionando a classe '.corpo' dentro do html e armazenando o 
caminho detro da variável corpo. */
const corpo = document.querySelector('.corpo'); 

/* criando uma função para ser chamada dentro do html assim que carregar 
a página de contato e inserindo o formulário dentro da DIV com a classe '.corpo' */
function criarFormContato() {
    corpo.innerHTML = ` 
    <div class="contato">
        <form action="#" method="POST">
            <h3>CONTATO</h3>
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="João Vitor" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="nome@domain.com" required>
            </div>
            <div>
                <label for="tituloassunto">Título do assunto:</label>
                <input type="text" id="tituloAssunto" placeholder="Quero fazer um projeto" required>
            </div>
            <div>
                <label for="assunto">Assunto:</label>
                <textarea name="assunto" id="assunto" cols="30" rows="10" placeholder="Coloque aqui o corpo do texto" required></textarea>
            </div>
            <button class="btn-contato" type="sumbit">Enviar</button>
        </form>
    </div>
    `;
}