# copter-flyer

This flyer application demonstrated controlling an AR Parrot 2.0
drone, and moving it left/right based on instructions provided from
interpreting the camera sensor which was watching for a ball of a single
color.

### a Sails application

This was a simple application using Sails for a simple REST MVC (very
likely I could have just used node itself!), the ar-parrot drone API,
and some web services (see the only controller).

When the /flyer API is called with various endpoints such as /up,
/down/, etc, I send messages to the parrot drone on 192.168.1.1 with the
ar-drone API client.

My co-hort in crime on this project was RedHat Senior Engineer Ian Hands
- if I get his code repo I'll link to it in this readme. He sent
  /flyer/autopilot a floating point number that went between -1 and 1
(turn counter clockwise to turn clockwise) and the higher / lower the
number, the faster it turned.

See the video of this here:

http://youtu.be/Iox30jmP3dE
