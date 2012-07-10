# HTML2Jade Service
A web service that simply converts given HTML to Jade

## Usage
```
=> POST /convert 
html=<div class="span12"><div class="span6"></div></div>

<= HTTP 200 OK
{"jade": ".span12\n  .span6"}
```

## Running
`node web.js`
