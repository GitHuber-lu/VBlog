var log4js = require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'console' },
        default: { type: 'file', filename: 'VBlog.log', pattern: "_yyyy-MM-dd", maxLogSize: 1024 * 1024, backups: 1, alwaysIncludePattern: true }
    },
    categories: {
        default: { appenders: ['out', 'default'], level: 'info' }
    }
});

var consoleLog = log4js.getLogger('console');
exports.logger = consoleLog;

exports.use = function (app) {
    app.use(log4js.connectLogger(consoleLog, { level: 'INFO', format: ':method :url' }));
}