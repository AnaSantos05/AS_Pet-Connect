# Pet-Connect

O Pet-Connect é um sistema desenvolvido no âmbito da disciplina de Análise de Sistemas que tem como objetivo facilitar a ligação entre a procura e a oferta de serviços no universo do PetCare. Esta solução digital promove o bem-estar animal através da criação de uma ponte entre prestadores de serviços especializados e proprietários de animais de estimação.

## Funcionalidades Principais

- **Gestão de Pets**: Registo e acompanhamento de animais de estimação
- **Serviços de Pet-sitting**: Conexão com cuidadores individuais certificados
- **Alojamento em Hotel**: Reservas em estabelecimentos especializados
- **Sistema de Pagamentos**: Processamento seguro de transações
- **Histórico de Serviços**: Acompanhamento completo dos serviços utilizados
- **Autenticação Segura**: Sistema de login com encriptação MD5

## Tecnologias Utilizadas

### Frontend
- **React.js** - Interface de utilizador
- **React Router** - Navegação entre páginas
- **CSS Modules** - Estilização de componentes

### Backend
- **Flask** - Framework web Python
- **JSON** - Base de dados em ficheiros
- **MD5** - Encriptação de passwords
- **CORS** - Comunicação cross-origin

## Como Executar

### Pré-requisitos

Para executar este projeto necessita de:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Python](https://python.org/) (versão 3.8 ou superior)
- [npm](https://npmjs.org/) (incluído com Node.js)

### Instalação e Execução

#### 1. Frontend (React)

```bash
# Navegar para a pasta frontend
cd frontend

# Instalar dependências
npm install

# Executar a aplicação
npm run dev