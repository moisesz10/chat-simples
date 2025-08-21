📱 Chat Simples

Um aplicativo de chat em tempo real desenvolvido com React Native (Expo), TypeScript e Firebase.
Permite enviar mensagens e imagens de forma rápida, segura e simples.

✨ Funcionalidades

🔑 Autenticação anônima com Firebase Auth

💬 Chat em tempo real usando Firestore

🖼️ Upload de imagens para Firebase Storage

📱 Desenvolvido com React Native + Expo

🛡️ Código escrito em TypeScript

🚀 Tecnologias

React Native (Expo)

Firebase Auth

Cloud Firestore

Firebase Storage

TypeScript
🗂 Estrutura do Projeto
chat-simples/
├── src/
│   ├── screens/
│   │   └── ChatScreen.tsx      # Tela principal do chat
│   ├── uploadImage.ts          # Função de upload de imagens
│   ├── firebase.ts             # Configuração do Firebase
│   └── types.ts                # Tipagens do projeto
├── App.tsx                     # Arquivo principal do Expo
├── firestore.rules             # Regras de segurança do Firestore
├── package.json
└── tsconfig.json
🖥️ Como Rodar

Clone o repositório:
git clone https://github.com/seu-usuario/chat-simples.git

    Entre na pasta do projeto:

cd chat-simples

    Instale as dependências:

npm install

    Configure o Firebase:

    Abra src/firebase.ts e adicione suas credenciais do Firebase.

    Inicie o projeto:

npx expo start
📌 Próximos Passos

Autenticação com e-mail/senha

Criação de grupos de chat

Notificações push

Melhorias na interface e experiência do usuário

🤝 Contribuição

Contribuições são bem-vindas!

Faça um fork do projeto

Crie uma branch: git checkout -b feature/nova-funcionalidade

Faça suas alterações e commit: git commit -m "Descrição da mudança"

Envie para sua branch: git push origin feature/nova-funcionalidade

Abra um Pull Request
