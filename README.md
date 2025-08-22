# Lista de Tarefas

Uma aplicação de lista de tarefas desenvolvida com React, utilizando conceitos avançados como Context API, Hooks customizados e memoização. A aplicação possui uma interface centralizada com fundo verde claro, texto em preto e um filtro em formato de select.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas da lista
- Filtrar tarefas através de um select (todas, concluídas, pendentes)
- Persistência de dados no localStorage

## Características Visuais

- Fundo verde claro para a página
- Texto em preto para melhor legibilidade
- Interface centralizada na tela
- Filtro em formato de select/dropdown
- Design responsivo

## Tecnologias Utilizadas

- React (Hooks, Context API)
- Tailwind CSS para estilização
- Vite como bundler
- LocalStorage para persistência de dados

## Conceitos Aplicados

- **Hooks**: useState, useEffect, useReducer, useContext
- **Context API**: Gerenciamento de estado global
- **Hooks Customizados**: useLocalStorage para persistência de dados
- **Memoização**: useMemo e React.memo para otimização de performance

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone https://(https://github.com/todo-react-avancado.)
   cd todo-react-avancado
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse a aplicação em seu navegador:
   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

- `src/components/`: Componentes da aplicação (TodoForm, TodoList, TodoItem, TodoFilters)
- `src/context/`: Context API para gerenciamento de estado (TodoContext)
- `src/hooks/`: Hooks customizados (useLocalStorage)
- `src/App.jsx`: Componente principal da aplicação
