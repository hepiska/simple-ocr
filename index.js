const jimp = require('jimp');


module.exports = {
    preproccessing: (imageBuffer, projectId, keyFilename) => {
        //google Outh
        var vision = require('@google-cloud/vision')({projectId: projectId, keyFilename: keyFilename});
        return new Promise((res, rej) => {
            //image preproccessing
            jimp.read(imageBuffer, (err, image) => {
                if (err) {
                    rej(err);
                } else {
                    image.greyscale().contrast(+ 1).invert().getBuffer(jimp.MIME_JPEG, (err, image) => {
                        //google vision
                        vision.detectText(image, function(err, text, apiResponse) {
                            if (err) {
                                console.log(err);
                            } else {
                                //console.log(text[0]);
                                res(text)
                            }
                        });
                    })
                }
            })
        })
    },

    direct: (imageBuffer, projectId, keyFilename) => {
        //google Outh
        var vision = require('@google-cloud/vision')({projectId: projectId, keyFilename: keyFilename});
        //google vision
        return new Promise((res,rej) => {
          vision.detectText(imageBuffer, function(err, text, apiResponse) {
              if (err) {
                rej(err)
                  console.log(err);
              } else {
                  res(text)
              }
          });
        })

    }

}
