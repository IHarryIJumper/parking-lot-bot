const existSQL = requireSQL("sqls/exist/exist_table.sql");

const createTable = rootRequire("database/createTables");

const CONSTS = rootRequire("helpers/const");

const isTableExist = (db, table) => {
    const replaceData = {
        "%TABLE_NAME%": table
    };

    const existSQLParsed = Object.keys(replaceData).reduce(
        (resultSQL, replaceDataKey) => {
            return resultSQL.replace(
                replaceDataKey,
                replaceData[replaceDataKey]
            );
        },
        existSQL
    );

    return db
        .query(existSQLParsed)
        .then(res => {
            return res;
        })
        .catch(e => console.error(e.stack));
};

const checkTables = async db => {
    const { DB_TABLES } = CONSTS;

    Object.keys(DB_TABLES).forEach(async dbTableKey => {
        const dbTable = DB_TABLES[dbTableKey];
        const result = await isTableExist(db, dbTable);
        const isExist = result.rows[0].exists;

        if (isExist) {
            console.step(`Table '${dbTable}' is exist`);
        } else {
            console.warn(`Table '${dbTable}' is missing\nCreating...`);
            try {
                await createTable(db, dbTableKey);
                console.step(`Table '${dbTable}' created`);
            } catch (e) {
                console.error(e.message);
            }
        }
    });
};

module.exports = checkTables;
