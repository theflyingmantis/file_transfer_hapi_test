
module.exports = function () {
  const Influx = require('influx');
  const influx = new Influx.InfluxDB({
    host: 'localhost',
    database: 'test_supplydata',
    schema: [
      {
        measurement: 'supply_data',
        fields: {
          end_time: Influx.FieldType.INTEGER,
          unique_drivers: Influx.FieldType.INTEGER
        },
        tags: [
          's2_id','s2_id_level','vehicle_type','duration'
        ]
      }
    ]
  })
}