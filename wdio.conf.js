export const config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: []
            // Headless chalava hoy to uncomment karo:
            // args: ['--headless', '--disable-gpu']
        }
    }],

    logLevel: 'error',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./steps/*.js'],
        timeout: 60000
    }
};
