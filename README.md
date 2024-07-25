## DS152 - Desenvolvimento de Aplicações Corporativas (DAC)
### Projeto BANTADS
#### BANTADS - Banco do TADS

#### Trabalho da Disciplina de DAC do Curso Técnologo em Análise e Desenvolvimento de Sistemas (TADS - UFPR)

#### Equipe do Trabalho:
* Albano Roberto Drescher von Maywitz
* André Alex Jankoski
* João Vitor Araújo dos Santos
* Os outros nomes

### Instruções para executar o projeto:

1. Instalar o docker.
2. Instalar o JDK 17.
3. Instalar o Spring Boot 3.3.0 ou superior.
4. Instalar o Maven 3.9.8 ou superior.

#### Abra um terminal no Linux e execute:
```bash
git clone [ link do projeto ]
```
#### Primeiro deve-se executar o a configuração do PostgreSQL16 master
##### Altere para o diretório do projeto:
```bash
cd bantads
```
##### Digite o comando de criação do pg16master:
```bash
docker-compose -f ./master.yml up -n
```

