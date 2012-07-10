# HTML2Jade Service
A web service that simply converts given HTML to Jade

## Usage
```
=> POST /convert 
html=<div class="span12"><div class="span6"></div></div>

<= HTTP 200 OK
{"jade": ".span12\n  .span6"}
```

`curl --data @test.html http://html2jade-service.herokuapp.com/convert`

This service is [CORS](http://www.w3.org/TR/cors/) enabled

## Running
If you want to run this yourself, just clone the project and then run `node web.js`
