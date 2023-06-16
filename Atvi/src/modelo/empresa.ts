import Cliente from "./cliente";
import Cpf from "./cpf";
import Produto from "./produto";
import Servico from "./servico";

export default class Empresa {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor() {
    this.produtos = geraProdutos();
    this.servicos = geraServicos();
    this.clientes = geraClientes(this.produtos, this.servicos);
  }

  public get getClientes() {
    return this.clientes;
  }

  public get getProdutos() {
    return this.produtos;
  }

  public get getServicos() {
    return this.servicos;
  }
}

function geraClientes(produtos: Array<Produto>, servicos: Array<Servico>): Array<Cliente> {
  const clientes: Array<Cliente> = [];

  for (let i = 1; i <= 30; i++) {
    const cpf = new Cpf(`1111111111${i}`, new Date());
    const cliente = new Cliente(`Cliente ${i}`, `Sobrenome ${i}`, cpf, "M");

    cliente.registrarProdutoConsumido(produtos[i % produtos.length]);
    cliente.registrarServicoConsumido(servicos[i % servicos.length]);

    clientes.push(cliente);
  }

  return clientes;
}

function geraProdutos(): Array<Produto> {
  const produtos: Array<Produto> = [];

  for (let i = 1; i <= 20; i++) {
    const produto = new Produto(`Produto ${i}`, i * 10);
    produtos.push(produto);
  }

  return produtos;
}

function geraServicos(): Array<Servico> {
  return [
    new Servico("Corte", 50),
    new Servico("Hidratação", 100),
    new Servico("Escova", 40),
  ];
}
