var properties;
function setProperties(){
  properties = whsmc;
}

function generateFunctions() {
  var functs = [];
  functs.push(generateSubmit());
  functs.push(generateDisplayStudent());
  functs.push(generateRemoveStudent());
  Logger.log(functs);
  return functs;
}

function generateDisplayStudent(){
}

function generateRemoveStudent(){
}

function generateMap(){
  //depends if its name based or not.
}

function generateSlides() {
  setProperties();
  var slides = ["", ""];
  var slideInfo = properties['slideInfo'];
  for(var i in slideInfo){
    var s = slideInfo[i];
    var html = "<div id='slide-" + (i) + "' class='" + s.mode+"'>" + s.directions + " ";

    switch(s.type){
      case 'textBox':
        html += "\n<input class='field " + (s.mode) + "' id='" + (s.id) + "' type='text' />";
        break;
      case 'dropDown':
        html += "\n<select class='field " + (s.mode) + "' id='" + (s.id) + "'>\n";
        for(var o in s.options){
          html +="  <option value='" + s.options[o] + "'>" + s.options[o] + "</option>\n";
        }
        html +="</select>\n";
        break;
      default:
        break;
    }
    
    switch(s.lastSlide){
      case true: 
        html+= "<div class='goButton' onclick='submit()'>Go!</div>";
        break;
        case false:
        html += "<div class='nextButton'> > </div>";
        break;
      default:
        break;
    }

    html += "</div>\n";
    
    switch(s.mode){
      case 'signin':
        slides[0] += html;
        break;
      case 'signout':
        slides[1] += html;
        break;
      default:
        break;
    }
  }
  Logger.log(slides);
  return slides;
}
