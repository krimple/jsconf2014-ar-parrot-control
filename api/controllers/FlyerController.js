'use strict';

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var autoPilotKillSwitch = false;
function isCallEnabled(req) {
  return (!req.params.autoPilot) ||
      (req.params.autoPilot &&
      !autoPilotKillSwitch);
}

module.exports = {

  toggleKillSwitch : function(req, res) {
    autoPilotKillSwitch = !autoPilotKillSwitch;
  },

  autopilot: function(req, res) {
    var dist = req.query.dist;
    var distNumber = parseFloat(dist);
//    console.log('dist is', distNumber);
    if (distNumber < 0) { 
      console.log('left');
      client.counterClockwise(Math.abs(distNumber));
    } else if (distNumber > 0) {
      console.log('right');
      client.clockwise(Math.abs(distNumber));
    } else {
      console.log('zero!');
      client.clockwise(0);
      client.counterClockwise(0);
    }
    return res.json({ status: 'ok' });
  },

   up: function (req, res) {
       client.takeoff();

    // Send a JSON response
    return res.json({
    });
   },

   down: function (req, res) {
    if(isCallEnabled(req)) {
      client.land();
    }

    // Send a JSON response
    return res.json({
    });
  },

  front: function (req, res) {
     client.front(0.1);

    // Send a JSON response
    return res.json({
      status: 'ok'
    });
  },

   back: function (req, res) {
     client.back(0.1);

    // Send a JSON response
    return res.json({
      status: 'ok'
    });
  },
  left: function (req, res) {
    client.left(0.1);

    // Send a JSON response
    return res.json({
      status: 'ok'
    });
  },

  right: function (req, res) {
    client.right(0.1);

    // Send a JSON response
    return res.json({
      status: 'ok'
    });
  },

  /**
   * Action blueprints:
   *    `/flyer/takeoff`
   */
   takeoff: function (req, res) {
    // Send a JSON response
    client.takeoff();
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/flyer/rotateleft`
   */
   rotateleft: function (req, res) {
    // Send a JSON response
    client.clockwise(0.1);
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/flyer/rotateright`
   */
   rotateright: function (req, res) {
    // Send a JSON response
    client.counterClockwise(0.1);
    return res.json({
      hello: 'world'
    });
  },

  animate: function(req, res) {
    client.animate('thetaDance');
    return res.json({
      hello: 'world'
    });
  },

  disableEmergency: function(req, res) {
    client.disableEmergency();
    return res.json({
      emergency: 'over!'
    });
  },

  center: function(req, res) {
    client.left(0);
    client.right(0);
    client.front(0);
    client.back(0);
    return res.json({
      answer: 'ok'
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to FlyerController)
   */
  _config: {}
};
