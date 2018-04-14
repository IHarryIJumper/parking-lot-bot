const { Client } = require("pg");

const {
    POSTGRESQL_USER,
    POSTGRESQL_PASSWORD,
    POSTGRESQL_DATABASE,
    POSTGRESQL_HOST,
    POSTGRESQL_PORT
} = rootRequire("config");

const checkTables = rootRequire("database/checkTables");

const psqlConnectionConfig = {
    user: POSTGRESQL_USER,
    password: POSTGRESQL_PASSWORD,
    database: POSTGRESQL_DATABASE,
    host: POSTGRESQL_HOST,
    port: POSTGRESQL_PORT
};

if (
    !POSTGRESQL_USER ||
    !POSTGRESQL_PASSWORD ||
    !POSTGRESQL_DATABASE ||
    !POSTGRESQL_HOST ||
    !POSTGRESQL_PORT
) {
    console.error("POSTGRESQL credentials error", psqlConnectionConfig);
    //eslint-disable-next-line
    process.exit();
}

let psqlClient = null;

const start = async () => {
    psqlClient = new Client(psqlConnectionConfig);

    try {
        const connection = await psqlClient.connect();
        console.info("Database CONNECTED");
        checkTables(psqlClient);
        return connection;
    } catch (e) {
        throw new Error(`Database connection failed \nSTACK: ${e.stack}`);
    }

    /* return await psqlClient.connect(err => {
        if (err) {
            console.error("connection error", err.stack);
        } else {
            console.info("Database CONNECTED");
            checkTables(psqlClient);
        }
    }); */
};

const getConnection = () => {
    return psqlClient;
};

// const res = await psqlClient.query('SELECT $1::text as message', ['Hello world!']);
// console.log(res.rows[0].message); // Hello world!
// await psqlClient.end();

module.exports = {
    start,
    getConnection
};
