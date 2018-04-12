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

module.exports = {
	PRIVILEGES_TYPES,
	USER_STATUSES,
	LANGUAGES
};