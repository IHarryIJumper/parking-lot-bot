const CONSTS = rootRequire("helpers/const");

const createTable = async (db, TABLE_ID) => {
	const { DB_TABLES_CREATE } = CONSTS;

	if (!DB_TABLES_CREATE[TABLE_ID]) {
		throw new Error(`${TABLE_ID} doesn't specified`);
	}

	try {
		const queryResult = await db
		.query(DB_TABLES_CREATE[TABLE_ID]).then(res => {
			return res;
		});
		return queryResult;
	} catch (e) {
		throw new Error(`Create table ${TABLE_ID} request failed\nSTACK: ${e.stack}`);
	}
};

module.exports = createTable;
