const createUsersTableSQL = requireSQL("sqls/create/create_users_table.sql");
const createUsersStatusesTableSQL = requireSQL("sqls/create/create_users_statuses_table.sql");
const createUsersPrivilegesTableSQL = requireSQL("sqls/create/create_users_privileges_table.sql");
const createUsersLanguagesTableSQL = requireSQL("sqls/create/create_users_languages_table.sql");
const createReserveUsersTableSQL = requireSQL("sqls/create/create_reserve_users_table.sql");
const createParkingScheduleTableSQL = requireSQL("sqls/create/create_parking_schedule_table.sql");
const createParkingInfoTableSQL = requireSQL("sqls/create/create_parking_info_table.sql");

const PRIVILEGES_TYPES = {
	USER: 1,
	MODERATOR: 2,
	ADMIN: 0
};

const USER_STATUSES = {
	ACTIVE: 1,
	VACATION: 2,
	SICK: 3,
	INDECISIVE: 4,
	BLOCKED: 9,
	DEACTIVATED: 0
};

const LANGUAGES = {
	RUSSIAN: 0,
	ENGLISH: 1
};

const DB_TABLES = {
	USERS: 'users',
	STATUSES: 'statuses',
	USERS_PRIVILEGES: 'users_privileges',
	LANGUAGES: 'languages',
	RESERVE_USERS: 'reserve_users',
	PARKING_SCHEDULE: 'parking_schedule',
	PARKING_INFO: 'parking_info'
};

const DB_TABLES_CREATE = {
	USERS: createUsersTableSQL,
	STATUSES: createUsersStatusesTableSQL,
	USERS_PRIVILEGES: createUsersPrivilegesTableSQL,
	LANGUAGES: createUsersLanguagesTableSQL,
	RESERVE_USERS: createReserveUsersTableSQL,
	PARKING_SCHEDULE: createParkingScheduleTableSQL,
	PARKING_INFO: createParkingInfoTableSQL
};

module.exports = {
	PRIVILEGES_TYPES,
	USER_STATUSES,
	LANGUAGES,
	DB_TABLES,
	DB_TABLES_CREATE
};