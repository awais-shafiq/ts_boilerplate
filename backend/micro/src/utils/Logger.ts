// const winston = require('winston');
import winston from 'winston';

console.log = (): void => {};
const logger = winston.createLogger({
	levels: {
		emerg: 0,
		alert: 1,
		crit: 2,
		error: 3,
		warn: 4,
		info: 5,
		http: 6,
		verbose: 7,
		debug: 8,
		trace: 9,
		silly: 10,
	},
	format: winston.format.combine(
		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		winston.format.prettyPrint({ colorize: true }),
		winston.format.colorize({ all: true }),
		winston.format.printf((info) => {
			const { timestamp, level, message, ...args } = info;

			return `${timestamp} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;

			// if (process.env.LOG_TIMESTAMP === 'true') {
			// 	return `${timestamp} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
			// } else {
			// 	return `[${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
			// }
		}),
	),
	// format: winston.format.simple(),
	// defaultMeta: {service: 'Sternguard'},
	transports: [new winston.transports.Console({ level: process.env.NODE_ENV === 'development' ? 'silly' : 'info' })],
});

export default logger;
