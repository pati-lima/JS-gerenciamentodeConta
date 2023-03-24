import {Cliente} from './Cliente.js'
import {Gerente} from './Funcionarios/Gerente.js'
import {Diretor} from './Funcionarios/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js';


const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarsenha('123456')
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarsenha('123')

const cliente = new Cliente('Lais', 78945612379,'456');
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123");
console.log(gerenteestaLogado);
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(diretorestaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);
