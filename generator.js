var properties;
function setProperties(){
properties = maclab;
}

function generateFunctions() {
  var functs = [];
  functs.push(generateSubmit());
  functs.push(generateDisplayStudent());
  functs.push(generateRemoveStudent());
  Logger.log(functs);
  return functs;
}

function generateSubmit() {
  var fields = {
    'signin':[],
    'signout':[]
  };
  var slideInfo = properties['slideInfo'];
  for(var i in slideInfo){
    switch(slideInfo[i].type){
      case 'textBox':
        fields.push('textBox-slide-' + i);
        break;
      case 'dropDown':
        fields.push('dropDown-slide-' + i);
        break;
      case 'chooseSeat':
        fields.push('chooseSeat');
        break;
      default:
        break;
    }
  }
  // push all id's of fields
  return fields;
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
        html += "\n<input id='textBox-slide-" + (i) + "' type='text' />";
        break;
      case 'dropDown':
        html += "\n<select name='dropDown-slide-" + (i) + "'>\n";
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
