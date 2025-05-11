# Inicialização do projeto:

## Instalar dependências:

```bash
npm install
```

## Inicializar:

### Web:
```bash
npm run web
```

### Android:
```bash
npm run android
```

### iOS:
```bash
npm run ios
```

Utilizando Expo Go, é possível executar em um dispositivo físico escaneando o QR Code gerado.

# Build:

## Web:
Para gerar a versão web do aplicativo, use:

```bash
npx expo export:web
```

## Android:
Para criar uma build Android (APK ou AAB), execute:

```bash
npx expo build:android
```

Ou, se estiver usando o novo EAS Build:

```bash
npx eas build -p android
```

É necessário estar logado em uma conta expo

```bash
npx expo login
```

## iOS:
Para criar uma build iOS (necessita conta Apple):

```bash
npx eas build -p ios
```
