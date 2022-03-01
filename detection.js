//randomize script name + function name for full protection
//function will return true if adblocker is detected
function detect_adblock(){try{var e=new XMLHttpRequest;return e.open("GET","https://securepubads.g.doubleclick.net/pagead/ppub_config",!1),e.send(null),!1}catch{return!0}}

//other links you can use:
//  - https://ads.stickyadstv.com/user-registering
//  - https://static.criteo.net/images/pixel.gif?ch=2
