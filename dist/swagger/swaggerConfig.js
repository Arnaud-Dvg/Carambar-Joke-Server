"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
