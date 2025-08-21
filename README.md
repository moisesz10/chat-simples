📱 Chat Simples

Um aplicativo de chat simples desenvolvido com React Native (Expo), TypeScript e Firebase.
O projeto utiliza autenticação anônima, Firestore para salvar mensagens em tempo real e Firebase Storage para upload de imagens.

⸻

✨ Funcionalidades
	•	🔑 Autenticação anônima com Firebase Auth
	•	💬 Chat em tempo real com Firestore
	•	🖼️ Upload de imagens para o Firebase Storage
	•	📱 Desenvolvido com React Native + Expo
	•	🛡️ Código escrito em TypeScript
 🚀 Tecnologias usadas
	•	React Native (Expo)
	•	Firebase Auth
	•	Cloud Firestore
	•	Firebase Storage
	•	TypeScript
  •	Estruta do projeto 
 .
├── src
│   ├── screens
│   │   └── ChatScreen.tsx   # Tela principal do chat
│   ├── uploadImage.ts       # Função para upload de imagens
│   ├── firebase.ts          # Configuração do Firebase
│   └── types.ts             # Tipagens do projeto
├── App.tsx                  # Arquivo principal do Expo
├── firestore.rules          # Regras do Firestore
├── package.json
└── tsconfig.json
Como rodar!
1. Clone este repositório: git clone https://github.com/seu-usuario/chat-simples.git
2. Entre na pasta do projeto: cd chat-simples
3. Instale as dependências: npm install
4. Configure suas credenciais do Firebase no arquivo src/firebase.ts.
5. Inicie o projeto: npx expo start 
