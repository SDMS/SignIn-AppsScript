var properties;
var maclab = {
  room_name: "SDMS Lab 021",
  type: "seatmap",
  slideInfo: [
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

function setProperties(){
properties = {
  room_name: "WHS Media Center",
  type: "namelist",
  slideInfo: [
    {
      mode: 'signin',
      type: 'textBox',
      lastSlide: false,
      directions: "Type your student ID."
    },
    {
      mode: 'signin',
      type: 'dropDown',
      lastSlide: false,
      directions: "Choose assignment or purpose."
      options: ["research", "independent-study", "homework-study", "nehs-writing-center", "work-study-volunteer", "check-out-book", "lunch-study", "other"]
    },
    {
      mode: 'signin',
      type: 'textBox',
      lastSlide: true,
      directions: "Enter name of subject teacher that signed your pass."
    }
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
    
    switch(s.lastSlide){
      case true: 
        html+= "<div class='goButton' onclick='submit()'>Go!</div>";
        break;
        case false:
        html += "<div class='nextButton' onclick='switchSlide()'> > </div>";
        break;
    }

    html += "</div>\n";
    slides.push(html);
  }
  Logger.log(slides);
  return slides;
}
