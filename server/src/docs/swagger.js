import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "NexaChain API",
      version: "1.0.0",
      description:
        "Investment & Referral Platform API",
    },

    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
            },
            fullName: {
              type: "string",
            },
            email: {
              type: "string",
            },
            mobile: {
              type: "string",
            },
            referralCode: {
              type: "string",
            },
            walletBalance: {
              type: "number",
            },
          },
        },

        Investment: {
          type: "object",
          properties: {
            amount: {
              type: "number",
            },
            planName: {
              type: "string",
            },
            dailyROIPercentage: {
              type: "number",
            },
            startDate: {
              type: "string",
            },
            endDate: {
              type: "string",
            },
          },
        },
      },
    },
  },

  apis: [
    "./src/docs/*.js",
  ],
};

const swaggerSpec =
  swaggerJsdoc(options);

export {
  swaggerSpec,
  swaggerUi,
};