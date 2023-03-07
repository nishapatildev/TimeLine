import { configure, getLogger } from "log4js";
import { TransXpedia } from "../interfaces/Common.interfaces";

export class LoggerService {
  private logger: any;
  private supportedAppender: string[] = ["file", "mq"];

  constructor(public type: string) {
    if (this.supportedAppender.includes(type)) {
      configure({
        appenders: {
          file: {
            type: "dateFile",
            filename: "./logs/tab.log",
            layout: {
              type: "pattern",
              pattern: "[%d] [%p] [%X{method}] [%X{url}]:%n %m %n",
            },
          },
          mq: {
            type: "@log4js-node/rabbitmq",
            host: "127.0.0.1",
            port: 5672,
            username: "guest",
            password: "guest",
            vhost: "/",
            routing_key: "server_log",
            exchange: "SERVERLOGX",
            mq_type: "direct",
            durable: true,
            layout: {
              type: "pattern",
              pattern: "[%d] [%p] [%X{method}] [%X{url}]:%n %m %n",
            },
          },
        },
        categories: {
          default: { appenders: [this.type], level: "all" },
        },
      });
      this.logger = getLogger("default");
    } else {
      throw "Logger Type Not Supported";
    }
  }

  info(TransXpedia: TransXpedia, context: string, message: any) {
    this.logger.level = "info";
    this.logger.addContext("method", TransXpedia.req.method || 'exception');
    this.logger.addContext("url", TransXpedia.req.url || 'exception');

    this.logger.info(
      this.createTemplate(context, message, TransXpedia.req.headers,TransXpedia)
    );
  }

  error(TransXpedia: TransXpedia, context: string, message: any) {
    this.logger.level = "error";
    this.logger.addContext("method", TransXpedia.req.method || 'exception');
    this.logger.addContext("url", TransXpedia.req.url || 'exception');

    this.logger.error(
      this.createTemplate(context, message, TransXpedia.req.headers,TransXpedia)
    );
  }

  private createTemplate(context: string, message: any, headers: any, TransXpedia: any) {
    const requestHeaders =
      context?.toUpperCase() === "FROM CLIENT" ? headers : null;
    if (typeof message === "object") {
      message = JSON.stringify(message); // if not work then we will so stringify here
    }
    return {
      CONTEXT: context?.toUpperCase() || "",
      CLIENT_HEADERS: requestHeaders || "",
      DATA: message || "",
      UUID : TransXpedia.uuid || ""
    };
  }
}
