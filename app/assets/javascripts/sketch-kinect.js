//       // var canvas = document.getElementById('defaultCanvas0');
//       // var c = document.getElementById("canvas");
//       //   var ctx = c.getContext("2d");
//       //   debugger;
//
// // https://github.com/processing/p5.js/wiki/p5.js-overview
//
// //
// // var img;
// // function preload() {
// //   img = loadImage('luke-head.png');
// // }
//
//
// var
//   box,
//   boxTopLeft,
//   boxBottomRight,
//   ox = 0,
//   oy = 0,
//   oz = 0,
//   oscy,
//   oscbut,
//   pinch,
//   capture,
//   pg,
//   head = false,
//   h = 0,
//   i = 0,
//   j = 0,
//
//   controller = null,
//
//   joints = {
//     l_shoulder : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     r_shoulder : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     l_elbow    : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     r_elbow    : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     l_hand     : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     r_hand     : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     l_hip      : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     r_hip      : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     l_knee     : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     r_knee     : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     neck       : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//     head       : {x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, ax: 0, ay: 0, az: 0 },
//   }
//   ;
//
// var updateJoint = function( jointObj, which, newData ){
//
//   var j = jointObj[ which ];
//
//   if( !j ) return;  // don't bother with joints we haven't initialized in our object
//
//   // velocity
//   var newvx = newData.x - j.x;
//   var newvy = newData.y - j.y;
//   var newvz = newData.z - j.z;
//
//   // acceleration
//   j.ax = newvx - j.vx;
//   j.ay = newvy - j.vy;
//   j.az = newvz - j.vz;
//
//   // velocity
//   j.vx = newvx;
//   j.vy = newvy;
//   j.vz = newvz;
//
//   // position
//   j.x = newData.x;
//   j.y = newData.y;
//   j.z = newData.z;
// };//updateJoint
//
// var oscPort = new osc.WebSocketPort({
//     url: "ws://localhost:8081" // URL to your Web Socket server.
// });
//
// oscPort.open();
// // .err(function(e){
// //   console.log('error', e);
// // });
//
// oscPort.on("message", function (oscMsg) {
//
//     if(oscMsg.address === '/joint') {
//
//       updateJoint(joints, oscMsg.args[0], {x: oscMsg.args[2], y: oscMsg.args[3], z: oscMsg.args[4]} );
//
//       // if(oscMsg.args[0] === 'l_hand') {
//       //   [ , , ox, oy, oz ] = oscMsg.args;
//       //   // [ , , joints.l_hand.x, joints.l_hand.y, joints.l_hand.z] = oscMsg.args;
//       //   // textarea.textContent = JSON.stringify( joints.l_hand, null, '\t' );
//       //   // console.log(ox, oy, oz);
//       // }
//
//       /**************
//       // } else if(joint === 'r_shoulder'){
//       //   [ , , r_shoulder.x, r_shoulder.y, r_shoulder.z] = oscMsg.args;
//       // } else if(joint === 'l_shoulder'){
//       //   [ , , l_shoulder.x, l_shoulder.y, l_shoulder.z] = oscMsg.args;
//       //   // l_shoulder.x = oscMsg.args[2]; // l_shoulder.y = oscMsg.args[3]; // l_shoulder.z = oscMsg.args[4];
//       // } else if(joint === 'l_elbow'){
//       //   [ , , l_elbow.x, l_elbow.y, l_elbow.z] = oscMsg.args;
//       // } else if(joint === 'r_elbow'){
//       //   [ , , r_elbow.x, r_elbow.y, r_elbow.z] = oscMsg.args;
//       // } else if(joint === 'r_hand'){
//       //   [ , , r_hand.x, r_hand.y, r_hand.z] = oscMsg.args;
//       // } else if(joint === 'neck'){
//       //   [ , , neck.x, neck.y, neck.z] = oscMsg.args;
//       // } else if(joint === 'head'){
//       //   [ , , head.x, head.y, head.z] = oscMsg.args;
//       // } else if(joint === 'l_hip'){
//       //   [ , , l_hip.x, l_hip.y, l_hip.z] = oscMsg.args;
//       // } else if(joint === 'r_hip'){
//       //   [ , , r_hip.x, r_hip.y, r_hip.z] = oscMsg.args;
//       // }
//       **************/
//
//     }
//
//   });//oscPort
//
// // //click start to see how cnavas works:
// //   function myFunction() {
// //
// //
//
//
// function setup(){
//
// //i've tried moving this aorund
// createCanvas(windowWidth, windowHeight);
//
// // document.getElementById('modalOpen').style.display = "none";
//
// // var canvas = document.getElementById('defaultCanvas0');
// // var c = document.getElementById("defaultCanvas0");
// //   var ctx = c.getContext("2d");
//   // debugger;
//
//
//
//
//   colorMode(HSB, 360, 100, 100);
//   // console.log(frameRate());
//
//   pg = createGraphics(100, 80);
//
//
//   // oscy = new p5.TriOsc(); // set frequency and type
//   // oscy.amp(.5);
//   // oscy.pan(-1);
//   // oscy.start();
//   //
//   // oscbut = new p5.TriOsc(); // set frequency and type
//   // oscbut.amp(0);
//   // oscbut.pan(1);
//   // oscbut.start();
//   // capture = createCapture(VIDEO);
//   // capture.size(320, 240);
//   // capture.hide();
//   //
//   // var myCanvas = createCanvas(600, 400);
//   //  myCanvas.parent('myContainer');
//   //  createCanvas(windowWidth, windowHeight, WEBGL);
//   //  ortho(-width, width, height, -height/2, 0.1, 100);
//   textSize(44);
// // }//setup
//
//   };
//
// // Draw a line between two joints
// var drawSkeletonLine = function( jData, a, b, xRange, yRange ){
//   line(
//     jData[a].x * xRange,
//     jData[a].y * yRange,
//     jData[b].x * xRange,
//     jData[b].y * yRange
//   );
// };
//
// function draw(){
//
//   background(0);
//
//   noStroke();
//   //
//   // if (mouseIsPressed) {
//   //   //clear();
//   //   fill(h++%360, 100, 100);
//   //
//   //   // image(capture, 0, 0, windowWidth, windowHeight);
//   //   // filter('INVERT');
//   //
//   //   //  fill(0, 0, 0);
//   //  } else {
//   //   //  clear();
//   //   //fill(h++%360, 100, 100);
//   //    fill(+(oz*360), 100, 100);
//   //  }
//
//   fill(frameCount%360, 100, 100);
//
//
//   //  y = windowHeight/2 + (Math.sin(i)) * ( windowHeight/2 - 40 );
//   //  x = windowWidth/2 + (Math.cos(j)) * ( windowWidth/2 - 40 );
//   //  pg.ellipse(x, y, 80, 80)
//   //  pg.loadPixels();
//   //  pg.pixels[ random(pg.width * pg.height) ] =
//   //  pg.updatePixels();
//
//     // pg.set(  50, 50, color(random(360), 100, 100) );
//     // image(pg, 0, 0, windowWidth, windowHeight);
//     // console.log(ox, oy, oz, pinch, ox*windowWidth, oy*windowHeight);
//     // console.log(pinch);
//
//     var depth = map(oz, 0.35, 2.0, 0, 0.5);
//
//
//
//     // scale by size?!   wiiano osceleton i guess
//     // windowWidth *= depth;
//     // windowHeight *= depth;
//
//     // kinect
//
//     if( joints.l_hand.x ){
//
//       var handBrowserX = joints.l_hand.x * windowWidth;
//       var handBrowserY = joints.l_hand.y * windowHeight;
//
//
// //if hand hits deer div element
//
//       for (var i = 0; i < boxes.length; i++) {
//         var box = boxes[i];
//
//         console.log('==========================');
//         console.log(handBrowserX, box.left, (box.left + box.width), box);
//         console.log(handBrowserY, box.top, (box.top + box.height));
//
//         if(
//           handBrowserX >= box.x && handBrowserX <= (box.x + box.width) &&
//           handBrowserY >= box.y  && handBrowserY <= (box.y + box.height)
//         ){
//           // console.log(handBrowserX, boxTopLeft.left, boxBottomRight.left);
//           // console.log(handBrowserY, boxTopLeft.top, boxBottomRight.top);
//
//           // check for joints.l_hand.az > 0.08 to count as 'grab'
//
//           // document.getElementById('deer').style.display= 'none';
//           // $box.css('background-color', 'red');
//           $('#box' + i).hide();
//         }
//
//       }
// // old hands touch box
// // console.log("testing. coords: " +"x: "+ handBrowserX + " y: " + handBrowserY );
//   // if (handBrowserX >= 883 && handBrowserX <= 884 && handBrowserY >= 89 && handBrowserY <= 90  ){
// //         if (handBrowserX >= .91 * windowWidth && handBrowserX <= .93* windowWidth && handBrowserY >= .49*windowHeight && handBrowserY <= .51*windowHeight  ){
// //           // console.log("bingo. coords: " );
// // console.log("testing. coords: " +"x: "+ handBrowserX + " y: " + handBrowserY );
// // // console.log("testing. coords: ");
// //       }//if joints i.e. hand co-ords
//
//
//       // var size = map(depth, 0, 1, 100, 10);
//       // var sizeR = map(joints.l_hand.az, 0, 0.01, 10, 200);
//       // var sizeL = map(joints.r_hand.vx, 0, 0.05, 10, 200);
//       // ellipse(joints.l_hand.x*windowWidth, joints.l_hand.y*windowHeight, sizeR, sizeR);
//       // ellipse(joints.r_hand.x*windowWidth, joints.r_hand.y*windowHeight, sizeL, sizeL);
//
//       fill(200, 100, 100);
//       // text(oz.toFixed(2),  ox*windowWidth + 20, oy*windowHeight);
//       text(`x: ${ joints.l_hand.x.toFixed(2) }`,  20, 40);
//       text(`y: ${ joints.l_hand.y.toFixed(2) }`,  20, 80);
//       text(`z: ${ joints.l_hand.z.toFixed(2) }`,  20, 120);
//       text(`vx: ${ joints.l_hand.vx.toFixed(2) }`, 20, 160);
//       text(`vy: ${ joints.l_hand.vy.toFixed(2) }`, 20, 200);
//       text(`vz: ${ joints.l_hand.vz.toFixed(2) }`, 20, 240);
//       if( controller && controller.xTouch) {
//         text(`xT: ${ controller.xTouch.toFixed(2) }`, 20, 300);
//       }
//
//       strokeWeight(2);
//       stroke(50, 100, 100);
//
//       // drawSkeletonLine(joints, 'neck', 'head', windowWidth, windowHeight);
//
//         var head_width = Math.abs(joints.r_shoulder.x - joints.l_shoulder.x) / 3.0  ;
//         var head_left  = joints.head.x - head_width;
//         var head_right  = joints.head.x + head_width;
//
//         line(
//           head_left*windowWidth, joints.head.y*windowHeight,
//           joints.neck.x*windowWidth, joints.neck.y*windowHeight,
//         );
//         line(
//           head_right*windowWidth, joints.head.y*windowHeight,
//           joints.neck.x*windowWidth, joints.neck.y*windowHeight,
//         );
//         line(
//           head_right*windowWidth, joints.head.y*windowHeight,
//           head_left*windowWidth, joints.head.y*windowHeight,
//         );
//
//       drawSkeletonLine(joints, 'r_shoulder', 'r_hip', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'r_shoulder', 'r_elbow', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'r_elbow', 'r_hand', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_shoulder', 'r_shoulder', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_shoulder', 'l_hip', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_shoulder', 'l_elbow', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_elbow', 'l_hand', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_hip', 'r_hip', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'l_hip', 'l_knee', windowWidth, windowHeight);
//       drawSkeletonLine(joints, 'r_hip', 'r_knee', windowWidth, windowHeight);
//       //
//
//      /************************************************ old lines
//       line(
//           joints.l_shoulder.x*windowWidth,
//           joints.l_shoulder.y*windowHeight,
//           joints.l_hip.x*windowWidth,
//           joints.l_hip.y*windowHeight
//         );
//
//         line(
//           joints.r_shoulder.x*windowWidth,
//           joints.r_shoulder.y*windowHeight,
//           joints.r_hip.x*windowWidth,
//           joints.r_hip.y*windowHeight
//         );
//
//         line(
//           joints.l_hip.x*windowWidth,
//           joints.l_hip.y*windowHeight,
//           joints.r_hip.x*windowWidth,
//           joints.r_hip.y*windowHeight
//         );
//
//       line(
//         joints.l_shoulder.x*windowWidth,
//         joints.l_shoulder.y*windowHeight,
//         joints.r_shoulder.x*windowWidth,
//         joints.r_shoulder.y*windowHeight
//       );
//
//       line(
//         joints.l_shoulder.x*windowWidth,
//         joints.l_shoulder.y*windowHeight,
//         joints.l_elbow.x*windowWidth,
//         joints.l_elbow.y*windowHeight
//       );
//
//       line(
//         joints.l_elbow.x*windowWidth,
//         joints.l_elbow.y*windowHeight,
//         joints.l_hand.x*windowWidth,
//         joints.l_hand.y*windowHeight
//       );
//
//       line(
//         joints.r_shoulder.x*windowWidth,
//         joints.r_shoulder.y*windowHeight,
//         joints.r_elbow.x*windowWidth,
//         joints.r_elbow.y*windowHeight
//       );
//
//       line(
//         joints.r_elbow.x*windowWidth,
//         joints.r_elbow.y*windowHeight,
//         joints.r_hand.x*windowWidth,
//         joints.r_hand.y*windowHeight
//       );
//
//       line(
//         joints.neck.x*windowWidth,
//         joints.neck.y*windowHeight,
//         joints.head.x*windowWidth,
//         joints.head.y*windowHeight
//       );
// ************************************************/
//
//     }//if joints hands
//
//
//
//   // var amp = map(mouseY, 0, height, 1, .01);
//   // var amp = map(pinch, 0, 1, 1, .01);
//   // amp = 0.6;
//   // console.log(oz);
//   // ellipse(random(windowWidth), random(windowHeight), 80, 80);
//   // ellipse(mouseX, mouseY, 80, 80);
//   // i+= 0.11;
//   // j+= 0.07;
//
//
// //
// // // A rectangle
// //
// //   rect( .92 * windowWidth, .5 * windowHeight, 120, 40);
//
// }//draw function
//
// //getting positiong of box div
// $(document).ready(function () {
//   // find div position
//
//   // { boxLeft: left, boxTop: top } = $('#deer').position().left;
//
//   boxes = [
//     {x: 200, y: 20, width: 300, height: 150},
//     {x: 600, y: 30, width: 300, height: 150},
//   ];
//
//   for (var i = 0; i < boxes.length; i++) {
//     var box = boxes[i];
//     var $boxDiv = $('<div class="exercise-box">').attr('id', 'box'+i).css({
//       width:  box.width  + 'px',
//       height: box.height + 'px',
//       top:  box.y + 'px',
//       left: box.x + 'px'
//     })
//     .appendTo('body');
//   }
//
//   // $box = $('#deer');
//   // boxTopLeft = $box.position();  //{left: 214, top: 243}
//   // boxBottomRight = {
//   //   left: boxTopLeft.left + $('#deer').width(),
//   //   top:  boxTopLeft.top  + $('#deer').height()
//   // };
// });//doc ready
