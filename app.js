require("dotenv").config();
const { HARPERDB_URL, HARPERDB_TOKEN } = process.env;
const axios = require("axios");

const express = require("express");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello HarperDB");
});

// Create Schema
app.post("/", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });

    res.json(response.data.message);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Create Table
app.post("/", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });

    res.json(response.data.message);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Create Movies under action table
app.post("/movie/action/create", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });

    res.json(response.data.message);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Get all Movies under action table
app.post("/movie/action", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Update Movie or Movies under action table
app.post("/movie/action/update", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Upsert a new row in a Movie or Movies under action table
app.post("/movie/action/upsert", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

// Delete a new row in a Movie or Movies under action table
app.post("/movie/action/delete", async (req, res) => {
  const { body } = req;

  try {
    const response = await axios({
      method: "post",
      url: HARPERDB_URL,
      data: body,
      headers: {
        Authorization: `Basic ${HARPERDB_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    return res.json(error.response.data.error);
  }
});

module.exports = app;
