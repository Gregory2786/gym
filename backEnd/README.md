## Author
[Everton Sousa, João Paulo Souza, Gregory Almeida]

## Descrição e Objetivo
Este sistema é uma interface de programação de aplicativos (API) desenvolvida para facilitar o controle de dados relacionados a exercícios e músculos. Com esta ferramenta, os usuários podem realizar operações como adicionar, modificar, remover e consultar informações sobre diferentes exercícios e músculos, tais como nome do músculo, nome, imagem e descrição do exercício.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB (com Mongoose)
- Render
- Nodemon

## Endpoints

### [POST] /muscle

Descrição: Cadastra um novo músculo.

Body:
```json
{
	"name": "costa",
}
```

Resposta:
```json
{
	"name": "costa",
	"_id": "65dccd069d5d84d240f54afd",
	"__v": 0
}
```

### [GET] /muscle

Descrição: Retorna todos os músculos cadastrados.

Resposta:
```json
[
	{
		"_id": "65d8f9530864f02990724802",
		"name": "peito",
		"__v": 0
	},
	{
		"_id": "65dcc7919d5d84d240f54ab8",
		"name": "ombro",
		"__v": 0
	},
	{
		"_id": "65dcc9859d5d84d240f54ad7",
		"name": "braco",
		"__v": 0
	},
	{
		"_id": "65dccae99d5d84d240f54ae6",
		"name": "abdomen",
		"__v": 0
	},
	{
		"_id": "65dccc3d9d5d84d240f54af1",
		"name": "perna",
		"__v": 0
	},
	{
		"_id": "65dccd069d5d84d240f54afd",
		"name": "costa",
		"__v": 0
	}
]
```

### [PUT] /muscle/{:id}

Nome: Atualiza dados de um músculo de acordo com ID especificado.

Body:
```json
{
	"name": "costas",

}
```

Resposta:
```json
{
	"_id": "65dccd069d5d84d240f54afd",
	"name": "costa",
	"__v": 0
}
```

### [DELETE] /muscle/{:id}

Descrição: Exclui um músculo de acordo com ID especificado.

Resposta:
```json
{
	"_id": "65dccd069d5d84d240f54afd",
	"name": "costa",
	"__v": 0
}
```
### [POST] /exercise

Descrição: Cadastra um novo exercício.

Body:
```json
{
	"name": "Remada curvada",
    "img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1481138348-istock-1408271911.jpg",
    "description": "A remada curvada é um exercício de treinamento de costas que visa principalmente os músculos do meio das costas e dos trapézios. Realizada com uma barra, o movimento envolve dobrar ligeiramente os joelhos, inclinar o tronco para a frente e puxar a barra em direção ao abdômen. Essa técnica eficaz fortalece a musculatura das costas, promovendo uma postura adequada e equilibrada.",
    "muscleId": "65dccd069d5d84d240f54afd"
}
```

Resposta:
```json
{
	"name": "Remada curvada",
	"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1481138348-istock-1408271911.jpg",
	"description": "A remada curvada é um exercício de treinamento de costas que visa principalmente os músculos do meio das costas e dos trapézios. Realizada com uma barra, o movimento envolve dobrar ligeiramente os joelhos, inclinar o tronco para a frente e puxar a barra em direção ao abdômen. Essa técnica eficaz fortalece a musculatura das costas, promovendo uma postura adequada e equilibrada.",
	"muscle": "65dccd069d5d84d240f54afd",
	"_id": "65dccdc89d5d84d240f54b06",
	"__v": 0
}
```

### [GET] /exercise/{:muscle}

Descrição: Retorna todos os exercícios de um determinado músculo já cadastrados. 

Como por exemplo: /muscle/costa

Resposta:
```json
[
	{
		"_id": "65dccd589d5d84d240f54b00",
		"name": "Puxada frente",
		"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1534871454-istock-1407548779.jpg",
		"description": "A puxada frontal é um exercício composto que visa fortalecer os músculos das costas, em especial os latíssimos do dorso. Realizada em uma barra fixa suspensa, o movimento consiste em puxar a barra em direção ao peito, mantendo os cotovelos voltados para baixo. Essa técnica eficaz é crucial para desenvolver força e definição na região das costas, contribuindo para uma postura melhor e uma aparência física mais equilibrada.",
		"muscle": {
			"_id": "65dccd069d5d84d240f54afd",
			"name": "costa",
			"__v": 0
		},
		"__v": 0
	},
	{
		"_id": "65dccd8f9d5d84d240f54b03",
		"name": "Remada baixa triângulo",
		"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/762443603-istock-1426469131.jpg",
		"description": "A remada baixa triângulo é um exercício que visa fortalecer os músculos das costas, com foco nos músculos do meio das costas e dos trapézios. Realizada com um triângulo de puxada fixado na parte inferior de uma máquina, o movimento consiste em puxar o peso em direção ao abdômen, mantendo os cotovelos próximos ao corpo. Essa técnica eficaz é essencial para desenvolver a força e a definição da região das costas, melhorando a postura e a estabilidade.",
		"muscle": {
			"_id": "65dccd069d5d84d240f54afd",
			"name": "costa",
			"__v": 0
		},
		"__v": 0
	},
	{
		"_id": "65dccdc89d5d84d240f54b06",
		"name": "Remada curvada",
		"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1481138348-istock-1408271911.jpg",
		"description": "A remada curvada é um exercício de treinamento de costas que visa principalmente os músculos do meio das costas e dos trapézios. Realizada com uma barra, o movimento envolve dobrar ligeiramente os joelhos, inclinar o tronco para a frente e puxar a barra em direção ao abdômen. Essa técnica eficaz fortalece a musculatura das costas, promovendo uma postura adequada e equilibrada.",
		"muscle": {
			"_id": "65dccd069d5d84d240f54afd",
			"name": "costa",
			"__v": 0
		},
		"__v": 0
	}
]
```

### [PUT] /exercise/{:id}

Nome: Atualiza dados de um exercício de acordo com ID especificado.

Body:
```json
{
	"name": "Remada cerrote",
	"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1481138348-istock-1408271911.jpg",
	"description": "A remada curvada é um exercício de treinamento de costas que visa principalmente os músculos do meio das costas e dos trapézios. Realizada com uma barra, o movimento envolve dobrar ligeiramente os joelhos, inclinar o tronco para a frente e puxar a barra em direção ao abdômen. Essa técnica eficaz fortalece a musculatura das costas, promovendo uma postura adequada e equilibrada.",
}
```

Resposta:
```json
{
	"_id": "65dccdc89d5d84d240f54b06",
	"name": "Remada cerrote",
	"img_url": "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/08/1481138348-istock-1408271911.jpg",
	"description": "A remada curvada é um exercício de treinamento de costas que visa principalmente os músculos do meio das costas e dos trapézios. Realizada com uma barra, o movimento envolve dobrar ligeiramente os joelhos, inclinar o tronco para a frente e puxar a barra em direção ao abdômen. Essa técnica eficaz fortalece a musculatura das costas, promovendo uma postura adequada e equilibrada.",
	"muscle": {
		"_id": "65dccd069d5d84d240f54afd",
		"name": "costa",
		"__v": 0
	},
	"__v": 0
}
```

### [DELETE] /exercise/{:id}

Descrição: Exclui um exercício de acordo com ID especificado.

Resposta:
```json
{
	"_id": "65d8faee0864f02990724811",
	"name": "Cable-crossover",
	"img_url": "https://static.wixstatic.com/media/2edbed_da275824b3a94040bd55cae961461f60~mv2.webp",
	"description": "O cable-crossover é um exercício de musculação que visa trabalhar o peito, ombros e braços. Realizado em uma máquina de cabo, envolve cruzar os braços na frente do corpo, trazendo as mãos em direção ao centro do peito. É eficaz para desenvolver força e definição muscular no peitoral.",
	"__v": 0
}
```

## Fonte
- [Documentação Mongoose](https://mongoosejs.com/docs/guide.html)
- [Video Aula](https://youtu.be/zaWFnHagbrM?si=l5rN66Lmo2yWmO7L)
- [Repositório Biblioteca API](https://github.com/Evertonsousa3/Biblioteca_API)
- [Documentação Node.js](https://nodejs.org/docs/latest/api/)
- [Documentação NPM](https://docs.npmjs.com/)
- [Documentação Express](https://expressjs.com/pt-br/)
- [Documentação Render](https://docs.render.com/deploy-node-express-app)
- [Documentação Nodemon](https://www.npmjs.com/package/nodemon)




