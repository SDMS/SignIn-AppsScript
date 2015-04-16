var properties;

function setProperties(){
properties = {
  room_name: "SDMS Lab 021",
  slideInfo: [
    {
      mode: 'signin',
      type: 'chooseSeat',
      lastSlide: false,
      directions: "Click on a computer to sign in"
    },
    {
      mode: 'signin',
      type: 'textBox',
      lastSlide: true,
      directions: "Type your student ID and click Go"
    },
    {
      mode: 'signout',
      type: 'chooseSeat',
      lastSlide: false,
      directions: "Click on your name to sign out"
    },
    {
      mode: 'signout',
      type: 'dropDown',
      lastSlide: true,
      directions: "Choose your destination, then click Go",
      options: ["cafeteria", "classroom", "mediacenter", "office", "nurse", "locker", "bathroom", "water"]
    }
  ]
};
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .getContent();
}

function generateSlides() {
  
  setProperties();
  var slides = [];
  var slideInfo = properties['slideInfo'];
  for(var i in slideInfo){
    var s = slideInfo[i];
    var html = "<div id='slide-" + (i) + "' class='" + s.mode+"'>" + s.directions + " ";

    switch(s.type){
      case 'textBox':
        html += "\n<input id='textBox-slide-" + (i) + "' type='text' />";
        break;
      case 'dropDown':
        html += "\n<select name='dropDown-slide-" + (i) + "'>\n";
        for(var o in s.options){
          html +="  <option value='" + s.options[o] + "'>" + s.options[o] + "</option>\n";
        }
        html +="</select>\n";
        break;   
    }
    
    if(s.lastSlide){
      html+= "<div class='goButton' onclick='submit()'>Go!</div>";
    }

    html += "</div>\n";
    slides.push(html);
  }
  Logger.log(slides);
  return slides;
}
