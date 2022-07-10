function detect_adblock(){
  try{
    var e = new XMLHttpRequest;
    e.open("GET","https://securepubads.g.doubleclick.net/pagead/ppub_config",0);
    e.send(null);
    return 0;
  } catch {
    return 1
  }
}
