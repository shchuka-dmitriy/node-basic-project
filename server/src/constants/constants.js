module.exports = {
    PHONE: 'phone',
    TABLET: 'tablet',
    NOTEBOOK: 'notebook',
    ANONYMOUS_PHOTO: 'anon.png',
    SALT_ROUNDS: 6,
    ACCESS_TOKEN_TIME: 60 * 60 * 24,
    JWT_SECRET: process.env.JWT_SECRET || 'asdasdasd4as5d4as8d7a8sd4as65d4a8sd7asd4as56d4'
};
