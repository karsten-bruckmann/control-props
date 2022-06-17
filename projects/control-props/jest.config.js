module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/projects/control-props'],
    testMatch: ['<rootDir>/projects/control-props/src/**/+(*.)+(spec).+(ts)'],
    collectCoverage: true,
    coverageReporters: ['html', 'lcov', 'json', 'text'],
    coverageDirectory: '<rootDir>/coverage/control-props',
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
};
