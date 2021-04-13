require("dotenv").config();
const db = require("./config/database");
const express = require("express");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello HarperDB from Node JS server");
});

// Create Schema
app.post("/create/schema", (req, res) => {
  const { body } = req;

  db.createSchema(
    {
      operation: "create_schema",
      schema: body.schema,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Create Table
app.post("/create/table", (req, res) => {
  const { body } = req;

  db.createTable(
    {
      operation: "create_table",
      schema: body.schema,
      table: body.table,
      hashAttribute: "id",
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Create a Movie or Movies under action table
app.post("/movie/action/create", (req, res) => {
  const { body } = req;

  db.insert(
    {
      operation: "insert",
      schema: body.schema,
      table: body.table,
      records: body.records,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Get all Movies under action table
app.post("/movie/action/searchbyhash", (req, res) => {
  const { body } = req;

  db.searchByHash(
    {
      operation: "search_by_hash",
      schema: body.schema,
      table: body.table,
      hashValues: body.hash_values,
      attributes: body.get_attributes,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Get all Movies under action table
app.post("/movie/action/searchbyvalue", (req, res) => {
  const { body } = req;

  db.searchByValue(
    {
      operation: "search_by_value",
      schema: body.schema,
      table: body.table,
      searchAttribute: body.search_attribute,
      searchValue: body.search_value,
      attributes: body.get_attributes,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Update Movie or Movies under action table
app.post("/movie/action/update", (req, res) => {
  const { body } = req;

  db.update(
    {
      operation: "update",
      schema: body.schema,
      table: body.table,
      records: body.records,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Upsert a new row in a Movie or Movies under action table
app.post("/movie/action/upsert", (req, res) => {
  const { body } = req;

  db.upsert(
    {
      operation: "upsert",
      schema: body.schema,
      table: body.table,
      records: body.records,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

// Delete a new row in a Movie or Movies under action table
app.post("/movie/action/delete", (req, res) => {
  const { body } = req;

  db.delete(
    {
      operation: "delete",
      schema: body.schema,
      table: body.table,
      hashValues: body.hash_values,
    },
    (err, response) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(response.statusCode).json(response.data);
    }
  );
});

module.exports = app;
