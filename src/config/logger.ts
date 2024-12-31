import {createLogger, format, transports} from "winston"
import path from "path";

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        format.printf(({level, message, timestamp}) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports:[
        new transports.Console(),
        new transports.File({})
    ]
}) 