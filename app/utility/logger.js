import Bugsnag from '@bugsnag/expo';
const log = error => Bugsnag.notify(error);

const start = () => Bugsnag.start();

const logger = {
    log, start
}

export default logger;