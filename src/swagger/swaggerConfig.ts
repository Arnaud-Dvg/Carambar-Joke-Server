import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Carambar Blagues",
    version: "1.0.0",
    description: "Une API pour récupérer des blagues aléatoires Carambar",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Serveur local",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
