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

var whsmc = {
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
      directions: "Choose assignment or purpose.",
      options: ["research", "independent-study", "homework-study", "nehs-writing-center", "work-study-volunteer", "check-out-book", "lunch-study", "other"]
    },
    {
      mode: 'signin',
      type: 'textBox',
      lastSlide: true,
      directions: "Enter name of subject teacher that signed your pass."
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