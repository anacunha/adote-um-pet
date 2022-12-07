# Crie uma aplicação full-stack na nuvem em minutos

Crie um projeto React:

```shell
npx create-react-app@latest adote-um-pet
```

Instale as bibliotecas do AWS Amplify:

```shell
npm install aws-amplify @aws-amplify/ui-react
```

## Dados

### Modelo de Dados

- Pet
  - id
  - nome (String)
  - descricao (String)
  - foto (AWSURL)

```graphql
type Pet @model @auth(rules: [{allow: public}]) {
  id: ID!
  nome: String!
  descricao: String!
  foto: AWSURL
}
```

### Dados de Exemplo

| Nome | Descricao | Imagem |
| ---- | --------- | ------ |
| Tempestade | Adorável e indomável | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Tempestade.jpg | 
| Twinkle | Uma linda gatinha para alegrar seu lar | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Twinkle.jpg |
| Moka | AWS Community Builder e seu próximo melhor amigo | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Moka.jpg |
| Garfield | Gato laranja, gosta de lasanha 🍝 | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Garfield.jpg |
| Chips | Cachorro com cara de culpado, pode ocupar o seu sofá | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Chips.jpg |
| Boris | Schnauzer idoso e amoroso | https://raw.githubusercontent.com/anacunha/amplify-summit/main/pet-photos/Boris-dog.jpg |
