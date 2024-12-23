const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Endpoint 1: Given three variables as query parameters, return total Return Value of the stocks.

app.get('/calculate-returns', (req, res) => {
  let purchaseValue = parseFloat(req.query.boughtAt);
  let marketValue = parseFloat(req.query.marketPrice);
  let stockUnitsBought = parseInt(req.query.quantity);

  let returnValue = (marketValue - purchaseValue) * stockUnitsBought;

  res.send(returnValue.toString());
});

// Endpoint 2: Given four variables as query parameters, return total return value of all the stocks.

app.get('/total-returns', (req, res) => {
  let stockVal1 = parseFloat(req.query.stock1);
  let stockVal2 = parseFloat(req.query.stock2);
  let stockVal3 = parseFloat(req.query.stock3);
  let stockVal4 = parseFloat(req.query.stock4);

  let totalReturn = stockVal1 + stockVal2 + stockVal3 + stockVal4;

  res.send(totalReturn.toString());
});

// Endpoint 3: Given two variables as query parameters, return total ReturnPercentage of the stocks.

app.get('/calculate-return-percentage', (req, res) => {
  let purchaseVal = parseFloat(req.query.boughtAt);
  let returnVal = parseFloat(req.query.returns);

  let returnPercentage = (returnVal / purchaseVal) * 100;

  res.send(returnPercentage.toString());
});

// Endpoint 4: Given two variables as query parameters, return total ReturnPercentage of the stocks.

app.get('/total-return-percentage', (req, res) => {
  let stockReturnPercent1 = parseFloat(req.query.stock1);
  let stockReturnPercent2 = parseFloat(req.query.stock2);
  let stockReturnPercent3 = parseFloat(req.query.stock3);
  let stockReturnPercent4 = parseFloat(req.query.stock4);

  let totalReturnPercentage =
    stockReturnPercent1 +
    stockReturnPercent2 +
    stockReturnPercent3 +
    stockReturnPercent4;

  res.send(totalReturnPercentage.toString());
});

// Endpoint 5:  Given returnPercentage as query parameter, return the stock status.

app.get('/status', (req, res) => {
  let returnPercent = parseFloat(req.query.returnPercentage);
  let returnStatus;

  if (returnPercent > 0) {
    returnStatus = 'profit';
  } else {
    returnStatus = 'loss';
  }

  res.send(returnStatus);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
