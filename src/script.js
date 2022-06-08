// import './style.css'
// const GIFEncoder = require('gif-encoder-2')
// const { createCanvas } = require('canvas')
// const { Image } = require('canvas')
const fs = require('fs');
const http = require('http');
// const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
// const { Blob } = require('buffer')
// const Buffer = require('buffer').Buffer 
// const URL = require('url').URL;
// //const ffmpeg = require('fluent-ffmpeg')
// //const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
//  const ffmpeg = require('ffmpeg');
//  const { createWriteStream, readdir } = require('fs')
// const { promisify } = require('util')
// const path = require('path');
// const { type } = require('os');

// const readdirAsync = promisify(readdir)
// const imagesFolder = path.join(__dirname, 'inputs')
// const originalImgsFolder = path.join(__dirname,'filesFromBlobs')

//ffmpeg.setFfmpegPath(ffmpegPath);

// fetch("https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg", {
//   "headers": {},
//   "method": "GET"
// }).then(function(resp) {
//  // console.log('this is resp.blob()', resp.blob())
//     return resp.blob();
// }).then(async function(blob) {
//    // console.log('this is blob', blob)
//     var buffer = await blob.arrayBuffer();
//     console.log('this is buffer', buffer)
   //  buffer = Buffer.from(buffer)
//     fs.createWriteStream('file.jpg').write(buffer);
// })



const loopFiles = async (imagesFolder) => {
  try {
    const files = await readdirAsync(imagesFolder)
   // console.log('this is files', files)

    for (const file of files) {
      let originalImg = fs.readFileSync(`./inputs/${file}`);
      let blob = new Blob([originalImg], {type : 'image/png' });
       let buffer =  async function() {
        let bufferAux = await blob.arrayBuffer();
       return bufferAux;
      }

      buffer().then(data => {
        let aux = data;
        aux = Buffer.from(aux)
        fs.createWriteStream(`./filesFromBlobs/${file}`).write(aux);
      })
    }
  } catch (e) {
    console.error(e);
  }
}

 // loopFiles(imagesFolder)

// function FileFromBlob() {
//   return new Promise((resolve, reject) => {
//     let originalImg = fs.readFileSync("./inputs/my_frame_1654614521995_510x622_1.jpg");
//     let blob = new Blob([originalImg], {type : 'image/png' })
//           var buffer = await blob.arrayBuffer();
//           buffer = Buffer.from(buffer)
//           fs.createWriteStream('file.jpg').write(buffer);
//           resolve()
//   });
// }

// FileFromBlob()

// console.log('this is buffer', (async() => {
//   await buffer().then(data => console.log(data));
// })())

// buffer = Buffer.from(buffer().then(data => console.log(data)))
// fs.createWriteStream('file.jpg').write(buffer);

//  let buffer = fs.readFileSync("./inputs/my_frame_1654614521995_510x622_1.jpg");
//  let blob = new Blob([buffer], {type : 'image/png' });
//  var blobUrl = URL.createObjectURL(blob);

//  async function getUrl(blobUrl) {
//   const blobF = await fetch(blobUrl).then(res => res.blob())
//   return blobF;
// }

//  console.log('this is blobF', getUrl(blobUrl))

//  fs.writeFile('imgEx.jpg', blobUrl, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// //Remember, the first parameter of Blob must be an array
 // var blob = new Blob(["This is the sample data"],
 //                 {type : "text/plain"});

// const file = new File([blob], "https://bit.ly/3vsUaOe", {
//   type: blob.type,
// });
// console.log(file instanceof File); //returns true
// console.log(file instanceof Blob); //returns true
// console.log(file);


// const file = new File([blob], 'image.jpeg', {
//   type: blob.type,
// });

// const file = new File([blob], 'imagefromBlob.jpg',{type: blob.type});
//console.log(file instanceof File); //returns true
//console.log(file instanceof Blob); //returns true
 // console.log(file);

// ffmpeg('head_rotation.mp4')
//   .on('end', function() {
//     console.log('Screenshots taken');
//   })
//   .on('error', function(err) {
//     console.error(err);
//   })
//   .takeScreenshots({
//     // Will take screenshots at 20%, 40%, 60% and 80% of the video
//     count: 4,
//     folder: 'outputs/images/'
//   });

// ffmpeg({ source: 'head_rotation.mp4' })
//   .on('filenames', (filenames) => {
//     console.log('Created file names ', filenames);
//   })
//   .takeScreenshots({
//     count: 2,
//     timemarks: [ '0.1','0.2','0.3','0.4','0.5','0.6','0.7','0.9','1.0','1.1','1.2','1.3','1.4','1.5',
//                  '1.6','1.7','1.8','1.9','2.0','2.1','2.2','2.3','2.4','2.5','2.6','2.7','2.8','2.9','3.0'],
//     filename: 'outputs/images/example.jpg',
//   }, '.')

// ffmpeg('head_rotation.mp4')
//     .on('end', function() {
//       console.log('Screenshots taken');
//     })
//     .output('outputs/images/example.jpg')
//     .outputOptions(
//         '-q:v', '8',
//         '-vf', 'fps=1/10,scale=-1:120,tile=5x5',
//     )
//     .run()

// try {
// 	var process = new ffmpeg('head_rotation.mp4');
// 	process.then(function (video) {
// 		// Callback mode
// 		video.fnExtractFrameToJPG('inputs', {
// 			frame_rate : 5,
// 			// number : 500,
// 			file_name : 'my_frame_%t_%s'
// 		}, function (error, files) {
// 			if (!error)
// 				console.log('Frames: ' + files);
// 		});
// 	}, function (err) {
// 		console.log('Error: ' + err);
// 	});
// } catch (e) {
// 	console.log('this is catch e', e);
// 	console.log('this is catch e.code', e.code);
// 	console.log('this is catch e.msg', e.msg);
// }

// try {
//   var process = new ffmpeg('head_rotation.mp4');
//   process.then(function (video) {
//       video.fnExtractFrameToJPG('inputs', {
//           every_n_frames : 1
//       }, console.log('the screenshots have been taken'))
//   }, function (err) {
//       console.log('Error: ' + err);
//   });
// } catch (e) {
//   console.log(e.code);
//   console.log(e.msg);
// }


// ffmpeg({ source: 'head_rotation.mp4' })
//   .on('filenames', (filenames) => {
//     console.log('Created file names ', filenames);
//   })
//   .takeScreenshots({
//     filename: 'outputs/images/example.jpg',
//     timemarks: [1,2,3,4,5,6,7,8],
//   }, '.')


// ffmpeg('head_rotation.mp4')
//     .seekInput('15:00.000')
//     .output('outputs/images/example.jpg')
//     .outputOptions(
//         '-frames', '10'  // Capture just one frame of the video
//     )
//     .on('end', function() {
//       console.log('Screenshot taken');
//     })
//     .run()

// globalThis.Blob = Blob


// async function extractFramesFromVideo(videoUrl, fps=25) {
//     return new Promise(async (resolve) => {
  
//       // fully download it first (no buffering):
//       const videoBlob = await fetch(videoUrl).then(r =>new Blob([r], {type: 'image/bmp'}));
//        const videoObjectUrl = URL.createObjectURL(videoBlob);
//        const video = document.createElement("video");
  
//        let seekResolve;
//        video.addEventListener('seeked', async () => {
//          if(seekResolve) seekResolve();
//        });
  
//        video.src = videoObjectUrl;
  
//     //   // workaround chromium metadata bug (https://stackoverflow.com/q/38062864/993683)
//     //   // eslint-disable-next-line no-restricted-globals
//        while((video.duration === Infinity || isNaN(video.duration)) && video.readyState < 2) {
//     //     // eslint-disable-next-line no-await-in-loop
//          await new Promise(r => setTimeout(r, 1000));
//          video.currentTime = 10000000*Math.random();
//        }
//        const {duration} = video;
  
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       const [w, h] = [video.videoWidth, video.videoHeight]
//       canvas.width =  w;
//       canvas.height = h;
  
//       const frames = [];
//       const interval = 1 / fps;
//       let currentTime = 0;
  
//       while(currentTime < duration) {
//         video.currentTime = currentTime;
//         await new Promise(r => seekResolve=r);
  
//         context.drawImage(video, 0, 0, w, h);
//         const base64ImageData = canvas.toDataURL();
//         frames.push(base64ImageData);
  
//         currentTime += interval;
//       }
//       resolve(frames);
//     });
//   };
  
  // let frames =  extractFramesFromVideo("https://example.com/video.webm");
  
  // const fs = require('fs');
  // const GIFEncoder = require('gif-encoder-2')
  // const { createCanvas } = require('canvas')(

  // (async() => {
  //   const frames = await extractFramesFromVideo("head_rotation.mp4");
  //   console.log(frames)
  // })()

  // (async() => {
  //   const frames = await extractFramesFromVideo("https://example.com/video.webm");
  //    // eslint-disable-next-line array-callback-return
  //    frames.map((item, index) => {
  //       const li = document.createElement('li');
  //       const img = new Image();
  //       img.id = 'frame'
  //       img.src = item;
  //        li.innerHTML += `<b>Frame at second ${  index/25  }:</b><br />`;
  //        li.appendChild(img);
  //        document.getElementById('olFrames').appendChild(li);
  //   })
  // })()
  
// //   







// //   encoder.setDelay(500)
// //   encoder.start()
  
// //   drawBackground()
// //   ctx.fillStyle = '#ff0000'
// //   ctx.fillRect(0, 0, half, half)
// //   encoder.addFrame(ctx)
  
// //   drawBackground()
// //   ctx.fillStyle = '#00ff00'
// //   ctx.fillRect(half, 0, half, half)
// //   encoder.addFrame(ctx)
  
// //   drawBackground()
// //   ctx.fillStyle = '#0000ff'
// //   ctx.fillRect(half, half, half, half)
// //   encoder.addFrame(ctx)
  
// //   drawBackground()
// //   ctx.fillStyle = '#ffff00'
// //   ctx.fillRect(0, half, half, half)
// //   encoder.addFrame(ctx)
  
// //   encoder.finish()
  
// //   // console.log(encoder)
  
// //   const buffer = encoder.out.data
  
// //    console.log(typeof buffer)


  
// //   fs.writeFile('beginner.gif', buffer, error => {
// //   // gif drawn or error
// //   if (error)
// //   console.log(error);
// //   else {
// //   console.log("File written successfully\n");
// //   console.log("The written has the following contents:");
// //   console.log(fs.readFileSync("beginner.gif", "utf8"));
// //   }
// //   })


// const image = document.querySelector('img');

// const stage = new createjs.Stage('stage');

// const circle = new createjs.Shape();
// circle.graphics.beginFill('deepskyblue').drawCircle(0, 0, 100);
// circle.x = 250;
// circle.y = 250;
// stage.addChild(circle);

// const encoder = new GIFEncoder();
// encoder.setRepeat(0);
// encoder.setDelay(1000/20);

// function startRecording() {
//   if (encoder.hasFinished) return;
//   encoder.start();
// }

// function stopRecording() {
//   if (encoder.hasFinished) return;
//   encoder.finish();    //a
//   encoder.hasFinished = true;
//   const stream = encoder.stream();
//   const data = stream.getData();
//   image.src = 'data:image/gif;base64,' + encode64(data);
// }

// createjs.Tween.get(circle, { loop: true })
//   .call(startRecording)
//   .to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 5 * 1000)
//   .to({ scaleX: 1, scaleY: 1, alpha: 1 }, 5 * 1000)
//   // .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
//   // .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
//   // .to({ alpha: 0, y: 225 }, 100)
//   // .to({ alpha: 1, y: 250 }, 500, createjs.Ease.getPowInOut(2))
//   // .to({ x: 250 }, 800, createjs.Ease.getPowInOut(2))
//   .call(stopRecording);

// createjs.Ticker.setFPS(1);
// createjs.Ticker.addEventListener('tick', stage);
// createjs.Ticker.addEventListener('tick', function() {
//   if (!encoder.hasFinished) {
//       console.log(stage)
//   //  encoder.addFrame(stage.canvas.getContext('2d'));
//   }
// });

// const GIFEncoder = require('gif-encoder-2')


async function createGif(algorithm) {
  return new Promise(async (resolve1) => {
    const files = await readdirAsync(originalImgsFolder)
    files.sort(function(a, b){
      a = a.slice(14,-4)
      b = b.slice(14,-4)
      return a-b
    });

    const [width, height] = await new Promise((resolve2) => {
      const image = new Image()
      image.onload = () => resolve2([image.width, image.height])
      image.src = path.join(originalImgsFolder, files[0])
    })

    const dstPath = path.join(__dirname, 'outputs', `${algorithm}.gif`)

    const writeStream = createWriteStream(dstPath)

    writeStream.on('close', () => {
      resolve1()
    })

    const encoder = new GIFEncoder(width, height, algorithm)

    encoder.createReadStream().pipe(writeStream)
    encoder.start()
    encoder.setDelay(30)

    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    for (const file of files) {
      await new Promise((resolve3) => {
        const image = new Image()
        image.onload = () => {
          ctx.drawImage(image, 0, 0)
          encoder.addFrame(ctx)
          resolve3()
        }
        image.src = path.join(originalImgsFolder, file)
      })
    }
  })
}

//  createGif('neuquant')


 //  const fs = require('fs');     // to help serve a local video file
  const port = 3000

  const server = http.createServer(function(req,res) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fs.readFile('index.html', function(error,data) {
          if(error) {
              res.writeHead(404)
              res.write('Error: File Not Found')
          } else {
              res.write(data)
          }
          res.end()
      })
  })


  server.listen(port, function(error) {
      if(error) {
          console.log('Something went wrong', error)
      } else {
          console.log('Server is listening on port ', + port)
      }
  })


