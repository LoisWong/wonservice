var Http = require('http');
var url = require("url");

function start(){ 
    server = Http.createServer( function(request, response){
        var body = '';

        //To get all data from client request
        request.on('data', function(data){
            body += data;
              //console.log("Partial body: " + body);//Test if the data is gotten correctly
        });
        
        //To deal with request JSON data
        var fs = require('fs');
        request.on('end', function(){
            //console.log("Body: " + body); //Test if the whole content is gotten.
            if (body.length == 0){
                var errorback = {"error": "Could not decode request: JSON parsing failed"};
                response.statusCode = 400;
                response.setHeader('Content-Type','application/json');
                response.end(JSON.stringify(errorback));
            }else{
                try{
                    var data = JSON.parse(body);
                    var image,slug,title;
                    var items = new Array();

                    for (var i = 0; i < data.payload.length; i++){
                        if (data.payload[i].drm && (data.payload[i].episodeCount > 0)){
                            image = data.payload[i].image.showImage;
                            slug = data.payload[i].slug;
                            title = data.payload[i]['title'];
                            //console.log(title);//For testing use
                            var item = {"image":image, "slug":slug, "title":title };
                            items.push(item);
                        }
                    }
                    var result = {"response":items};
                    //console.log(result);
                    //fs.writeFile('response1.json', JSON.stringify(result), 'utf8');//Check if the JSON file is correct
                    response.setHeader('Content-Type','application/json');
                    response.end(JSON.stringify(result));
                }catch(error){
                    var errorback = {"error": "Could not decode request: JSON parsing failed"};
                    response.statusCode = 400;
                    response.setHeader('Content-Type','application/json');
                    response.end(JSON.stringify(errorback));
                }
            }
            
        });

        request.on('error', function(e){
            console.log('problem with request:' + e.message);
        })

    });
    var port = process.env.PORT || 3000;
    server.listen(port, function(){
        console.log('Listening at:' + port);
    });
    
}  

exports.start = start;