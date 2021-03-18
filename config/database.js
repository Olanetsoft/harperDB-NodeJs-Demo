const harperive = require("harperive");
const { INSTANCE_URL, INSTANCE_USERNAME, INSTANCE_PASSWORD } = process.env;

const DB_CONFIG = {
  harperHost: INSTANCE_URL,
  username: INSTANCE_USERNAME,
  password: INSTANCE_PASSWORD,
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;
