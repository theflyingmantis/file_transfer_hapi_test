'use strict';
var Glue = require('glue');

var manifest = require('./manifest');

var options = {
  relativeTo: __dirname 
};
 
Glue.compose(manifest, options, (err, server) => {

    if (err) {
        throw err;
    }
    server.start(() => {

        console.log('hapi days!');
    });
    const io = require('socket.io')(server.listener);
    io.sockets.on('connection', function(socket){
  console.log('One more user Connected');

  //Disconnect
  socket.on('disconnect',function(data){
    console.log('One user is disconnected');
  });


  socket.on('Data', function(data){
    var x = data['s2_id'];
    var query = "select * from (select distinct(*) from supply_data) limit 12";
    console.log(query);
    influx.query(query)
    .then((data1)=>{
    socket.emit('Json', data1);
    console.log(data1);
    });
  });
});

});






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

