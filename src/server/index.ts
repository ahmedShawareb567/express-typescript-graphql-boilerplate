import express, { Request, Response, Express } from "express";
import path from "path";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import * as bodyParser from "body-parser";
import consola from "consola";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import i18next from "i18next";
import Backend from "i18next-http-backend";
import i18nextMiddleware from "i18next-express-middleware";

import { apiController } from "../controller";
import { buildSchema } from "type-graphql";
import { errorHandler } from "../_common/exception/error-handler";

dotenv.config();

const start = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.json());

  app.use(cors());

  app.use(express.static("public"));

  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );

  app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd() + "/client/index.html"));
  });

  const schema = await buildSchema({
    resolvers: [path.join(process.cwd(), "/**/*.resolver.{ts,js}")],
    validate: true,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
    context: ({ req, res }) => {
      return {
        req,
        res,
      };
    },
  } as any);

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
      backend: {
        loadPath: path.join(
          process.cwd(),
          "/src/_common/locales/{{lng}}/{{ns}}.json"
        ),
      },
      fallbackLng: "en",
      preload: ["en", "ar"],
    });

  app.use(i18nextMiddleware.handle(i18next));

  app.use("/api", apiController);
  app.use(errorHandler);

  const port = process.env.PORT || 6000;

  app.listen(port, () => {
    consola.success(`Server is running on port ${port} 🎃`);
  });
};

export { start };
