const {generateData, generateDetails} = require("./generate-data");

const stationQuantity = 900;
const data = generateData(stationQuantity);

exports.initBackendStub = function (app) {
  app.get("/api/stations", (req, res) => {
    res.json(data);
  });

  app.get("/api/stations/:id", (req, res) => {
    const id = req.params.id;
    const info = data[id];
    const cache = {};
    const details = cache[id] || (cache[id] = generateDetails(info));
    const result = Object.assign(info, details);

    res.json(result);
  });
};
