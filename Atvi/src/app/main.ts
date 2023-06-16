import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import AtualizacaoDeProduto from "../negocio/atualizacaoDeProduto";
import AtualizacaoDeServico from "../negocio/atualizacaoDeServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroDeProduto from "../negocio/cadastroDeProduto";
import CadastroDeServico from "../negocio/cadastroDeServico";
import CadastroDeVenda from "../negocio/cadastroDeVenda";
import Listagem10ClientesConsumoProdutosQuantidadeMais from "../negocio/listagem10ClientesConsumoProdutosQuantidadeMais";
import Listagem10ClientesConsumoProdutosQuantidadeMenos from "../negocio/listagem10ClientesConsumoProdutosQuantidadeMenos";
import Listagem5ClientesConsumoProdutosValorMais from "../negocio/listagem5ClientesConsumoProdutosValorMais";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemClientesPorGenero from "../negocio/listagemClientesPorGenero";
import ListagemProdutosServicos from "../negocio/listagemProdutosServicos";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagemProdutosServicosMaisConsumidos";
import ListagemProdutosServicosMaisConsumidosPorGenero from "../negocio/listagemProdutosServicosMaisConsumidosPorGenero";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);

    console.log(`Clientes`);
    console.log(`c1 - Cadastrar cliente`); //ok
    console.log(`c2 - Atualizar cliente`); //ok
    console.log(`c3 - Listar todos os clientes`); //ok
    console.log(`c4 - Listagem de todos os clientes por gênero`); //ok
    console.log(`c5 - Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade`); //ok
    console.log(`c6 - Listagem dos 10 clientes que menos consumiram produtos ou serviços em quantidade`); //ok
    console.log(`c7 - Listagem dos 5 clientes que mais consumiram produtos ou serviços em valor`); //ok
    console.log(``);

    console.log(`Serviços ou Produtos`);
    console.log(`ps1 - Cadastrar produto`); //ok
    console.log(`ps2 - Cadastrar serviço`); //ok
    console.log(`ps3 - Atualizar produto`); //ok
    console.log(`ps4 - Atualizar serviço`); //ok
    console.log(`ps5 - Listagem geral dos serviços ou produtos mais consumidos`); //ok
    console.log(`ps6 - Listagem geral dos serviços ou produtos mais consumidos por gênero`); //ok
    console.log(``);

    console.log(`Vendas`);
    console.log(`v1 - Cadastrar venda`); //ok
    console.log(``);

    console.log(`X - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberTexto(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case `c1`: //cadastrar cliente
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case `c2`: //atualizar cliente
            let atualizarCliente = new AtualizacaoCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;
        case `c3`: //listagem clientes
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case `c4`: //listagem de todos os clientes por genero
            let listagemPorGenero = new ListagemClientesPorGenero(empresa.getClientes)
            listagemPorGenero.listar()
            break;
        case `c5`: //Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade
            let listagem10MaisQuantidade = new 
            Listagem10ClientesConsumoProdutosQuantidadeMais(empresa.getClientes)
            listagem10MaisQuantidade.listar()
            break;
        case `c6`: //Listagem dos 10 clientes que menos consumiram produtos ou serviços em quantidade
            let listagem10MenosQuantidade = new 
            Listagem10ClientesConsumoProdutosQuantidadeMenos(empresa.getClientes)
            listagem10MenosQuantidade.listar()
            break;
        case `c7`: //Listagem dos 5 clientes que mais consumiram produtos ou serviços em valor
            let listagem5ClientesConsumoProdutosValorMais = new 
            Listagem5ClientesConsumoProdutosValorMais(empresa.getClientes)
            listagem5ClientesConsumoProdutosValorMais.listar()
            break;
        case `ps1`: //cadastrar produto
            let cadastroDeProduto = new CadastroDeProduto(empresa.getProdutos)
            cadastroDeProduto.cadastrar()
            break;
        case `ps2`: //cadastrar servico
            let cadastroDeServico = new CadastroDeServico(empresa.getServicos)
            cadastroDeServico.cadastrar()
            break;
        case `ps3`: //atualizar produto
            let atualizacaoDeProduto = new AtualizacaoDeProduto(empresa.getServicos)
            atualizacaoDeProduto.atualizar()
            break;
        case `ps4`: //atualizar servicos
            let atualizacaoDeServico = new AtualizacaoDeServico(empresa.getServicos)
            atualizacaoDeServico.atualizar()
            break;
        case `ps5`: //listagem produtos servicos
            let listagemDeProdutosServicos = new ListagemProdutosServicos(empresa.getProdutos, empresa.getServicos)
            listagemDeProdutosServicos.listar()
            break;
        case `ps6`: //listagem produtos servicos mais consumidos
            let listagemProdutosServicosMaisConsumidos = new 
            ListagemProdutosServicosMaisConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listagemProdutosServicosMaisConsumidos.listar()
            break;
        case `ps7`: //listagem produtos servicos mais consumidos por genero
            let listagemProdutosServicosMaisConsumidosPorGenero = new 
            ListagemProdutosServicosMaisConsumidosPorGenero(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listagemProdutosServicosMaisConsumidosPorGenero.listar()
            break;
        case `v1`: //cadastrar venda
            let cadastroDeVenda = new CadastroDeVenda(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastroDeVenda.cadastrar()
            break;
        case `X`: //bye
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }

    console.log(`\nPressione enter para continuar\n`)
    entrada.receberTexto(``)
}