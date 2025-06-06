# Pet-Connect Backend

API REST desenvolvida em Flask para o sistema Pet-Connect, responsável pela gestão de utilizadores, pets e serviços de cuidados de animais de estimação.

## Tecnologias Utilizadas

- **Flask** - Framework web Python
- **Flask-CORS** - Suporte para Cross-Origin Resource Sharing
- **JSON** - Armazenamento de dados em ficheiros
- **Hashlib** - Encriptação MD5 para passwords

## Funcionalidades da API

### Autenticação e Utilizadores
- **POST /register** - Registo de novos utilizadores
- **POST /login** - Autenticação de utilizadores
- Encriptação automática de passwords com MD5
- Validação de tipos de utilizador (owner/sitter)

### Gestão de Pets
- **GET /api/pets** - Listar pets (com filtro por proprietário)
- **GET /api/pets/<name>** - Obter pet por nome
- **POST /add_pet** - Adicionar novo pet
- **PUT /api/pets/<id>/assign-caretaker** - Atribuir cuidador a pet

### Serviços
- **GET /api/services** - Listar serviços disponíveis
- **POST /api/services** - Adicionar novo serviço
- **GET /api/pets/<id>/services** - Histórico de serviços de um pet
- **POST /api/pet-services** - Criar registo de serviço

### Preçário
- **GET /api/service-pricing** - Obter tabela de preços
- **POST /api/calculate-price** - Calcular preço de serviço

## Instalação

### Pré-requisitos
- Python 3.8 ou superior
- pip (gestor de pacotes Python)

### Dependências

1 - Cria um Virtual Environment com python3 -m venv .venv
2 - Ativa o Virtual Environment com source .venv/bin/activate
3 - Instala as dependências no Virtual Environment com pip install -r requirements.txt

```bash
python3 -m venv .venv
.venv/bin/activate
pip install -r requirements.txt
```

### Execução
```bash
cd backend
flask run
```