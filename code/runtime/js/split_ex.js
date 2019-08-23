
  class Merge_sort{
    constructor(){
      this.list1 = [];
      this.list2 = [];
      this.list3 = [];
      this.list4 = [];
      this.list5 = [];
      this.list6 = [];
      this.list7 = [];
      this.list8 = [];
      this.list9 = [];
      this.list10 = [];
      this.list11 = [];
      this.list12 = [];
      this.list13 = [];
      this.list14 = [];
      this.temp = [];
      this.count = 0
    }
  }
  let merge_artefact = new Merge_sort();


 function handlers(){ 
  document.getElementById("split").onclick = function() { execute(document.getElementById('input1').value,document.getElementById('input2').value); };
  document.getElementById("undo").onclick = function() { step(2); };
  document.getElementById("reset").onclick = function() { reset(); };
 };
 
      
  function reset() {
    merge_artefact.count = 0;
    for (var i = 0; i < 10; i++) {
      merge_artefact.temp[i] = Math.floor(Math.random() * 90 + 10);
    }
    draw();
    handlers();
  }


  function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 560;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "15px sans-serif";
    context.strokeStyle = "black";
    console.log(merge_artefact.count);
    document.getElementById('input1').value="";
    document.getElementById('input2').value="";
    if (merge_artefact.count>=0){
      if (merge_artefact.count == 0){
        drawList3(context, merge_artefact.temp, 85, 20, "Level 0",10,0);
      }
      else{
        drawList(context, merge_artefact.temp, 85, 20, "Level 0",10,0);
      }
    }
    if (merge_artefact.count>=1){  
      drawLine(context,400,120,360,130);
      drawLine(context,470,120,510,130);
      if (merge_artefact.count==1){
        drawList3(context, merge_artefact.list1, 50, 120, "Level 1",5,0);
      }
      else{
        drawList(context, merge_artefact.list1, 50, 120, "Level 1",5,0);
      }
      if (merge_artefact.count==2){
        drawList3(context, merge_artefact.list2, 400, 120, "",5,5);
      }
      else{
        drawList(context, merge_artefact.list2, 400, 120, "",5,5);
      }
    }
    if (merge_artefact.count>=2){
      drawLine(context,270,220,230,230);
      drawLine(context,320,220,360,230);
      if (merge_artefact.count==3){
        drawList3(context, merge_artefact.list3, 20, 220, "Level 2",3,0);
      }
      else{
        drawList(context, merge_artefact.list3, 20, 220, "Level 2",3,0);
      }
      if (merge_artefact.count==4){
        drawList3(context, merge_artefact.list4, 210, 220, "",2,3);
      }
      else{
        drawList(context, merge_artefact.list4, 210, 220, "",2,3);
      }
    }
    if (merge_artefact.count>=3){
      drawLine(context,630,220,590,230);
      drawLine(context,670,220,710,230);
      if (merge_artefact.count==5){
      drawList3(context, merge_artefact.list5, 380, 220, "",3,5);
      }
      else{
        drawList(context, merge_artefact.list5, 380, 220, "",3,5);
      }
      if (merge_artefact.count==6){
        drawList3(context, merge_artefact.list6, 580, 220, "",2,8);
      }
      else{
        drawList(context, merge_artefact.list6, 580, 220, "",2,8);
      }
    }
    if (merge_artefact.count>=4){
      drawLine(context,200,320,170,330);
      drawLine(context,230,320,260,330);
      if (merge_artefact.count==7){
        drawList3(context, merge_artefact.list7, 5, 320, "Level 3",2,0);
      }
      else{
        drawList(context, merge_artefact.list7, 5, 320, "Level 3",2,0);
      }
      drawList(context, merge_artefact.list8, 130, 320, "",1,2);
    }
    if (merge_artefact.count>=5){
      drawLine(context,350,320,320,330);
      drawLine(context,380,320,410,330);
      drawList(context, merge_artefact.list9, 200, 320, "",1,3);
      drawList(context, merge_artefact.list10, 280, 320, "",1,4);
    }
    if (merge_artefact.count>=6){
      drawLine(context,570,320,540,330);
      drawLine(context,590,320,620,330);
      if (merge_artefact.count==8){
        drawList3(context, merge_artefact.list11, 370, 320, "",2,5);
      }
      else{
        drawList(context, merge_artefact.list11, 370, 320, "",2,5);
      }
      drawList(context, merge_artefact.list12, 500, 320, "",1,7);
    }
    if (merge_artefact.count>=7){
      drawLine(context,720,320,690,330);
      drawLine(context,750,320,780,330);
      drawList(context, merge_artefact.list13, 570, 320, "",1,8);
      drawList(context, merge_artefact.list14, 650, 320, "",1,9);
    }
    if (merge_artefact.count>=8){
      drawLine(context,140,420,110,430);
      drawLine(context,175,420,205,430);
      drawList(context, merge_artefact.list7, 0, 420, "Level 4",1,0);
      drawList(context, merge_artefact.list8, 70, 420, "",1,1);
    }
    if (merge_artefact.count>=9){
      drawLine(context,500,420,470,430);
      drawLine(context,535,420,565,430);
      drawList(context, merge_artefact.list9, 360, 420, "",1,5);
      drawList(context, merge_artefact.list10, 430, 420, "",1,6);
    }
    if (merge_artefact.count>=9){
      context.fillStyle = "black";
      context.fillText("Array cannot be split further", canvas.width / 2 - 150 , canvas.height - 5);
    }
    context.stroke();
  }


  function drawList(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "17px Arial";
    if (title == "Level 4"){
      context.fillText(title, 40 * (0 + 1) + startX - 250, 80 + startY);
    }
    else{
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    }
    var green = "#a4c652";
    var blue = "#288ec8"
    for (var i = 0; i < size; i++) {
      context.fillStyle = "#288ec8";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
        context.fillStyle = "white";
        context.font = "17px Arial";
        context.fillText(merge_artefact.temp[i+begin] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
        context.fillStyle = "black";
        context.font = "14px Arial";
        context.fillText((i+begin+1) + "", 50 * (i + 2) + 33 + startX, 95 + startY);
    }
  }

  function drawList3(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "17px Arial";
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    for (var i = 0; i < size; i++) {
      context.fillStyle = "#a4c652";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
      context.fillStyle = "white";
      context.font = "17px Arial";
      context.fillText(merge_artefact.temp[i+begin] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
      context.fillStyle = "black";
      context.font = "14px Arial";
      context.fillText((i+begin+1) + "", 50 * (i + 2) + 33 + startX, 95 + startY);
    }
  }


  function drawLine(context, startX, startY, endX, endY) {
    context.fillStyle = "black";
    drawArrowLine(context, startX, startY, endX, endY + 35);
  }

  function drawArrowLine(context, x1, y1, x2, y2) {
    context.fillStyle = "black";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    var slope = (y1 - y2) / (x1 - x2);
    var arctan = Math.atan(slope);
    // This will flip the arrow 45 off of a
    // perpendicular line at pt x2
    var set45 = 1.57 / 2;
    // arrows should always point towards i, not i+1
    if (x1 < x2) {
      // add 90 degrees to arrow lines
      set45 = -1.57 * 1.5;
    }
    var arrlen = 7;
    context.moveTo(x2, y2);
    context.lineTo(x2 + Math.cos(arctan + set45) * arrlen,
            y2 + Math.sin(arctan + set45) * arrlen);
    context.moveTo(x2, y2);
    context.lineTo(x2 + Math.cos(arctan - set45) * arrlen,
            y2 + Math.sin(arctan - set45) * arrlen);
  }


  function step(num) {
    if (num==1 && merge_artefact.count<10)
      merge_artefact.count++;
    if (num==2 && merge_artefact.count>=1)
      merge_artefact.count--;
    draw();
  }

  function execute(a,b){
    if (a == 5 && b == 6 && merge_artefact.count == 0){
      step(1);
    }
    else if (a == 3 && b == 4 && merge_artefact.count == 1){
      step(1);
    }
    else if (a == 8 && b == 9 && merge_artefact.count == 2){
      step(1);
    }
    else if (a == 2 && b == 3 && merge_artefact.count == 3){
      step(1);
    }
    else if (a == 4 && b == 5 && merge_artefact.count == 4){
      step(1);
    }
    else if (a == 7 && b == 8 && merge_artefact.count == 5){
      step(1);
    }
    else if (a == 9 && b == 10 && merge_artefact.count == 6){
      step(1);
    }
    else if (a == 1 && b == 2 && merge_artefact.count == 7){
      step(1);
    }
    else if (a == 6 && b == 7 && merge_artefact.count == 8){
      step(1);
    }
    else{
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext("2d");
      context.fillStyle = "black";
      context.fillText("Wrong step, Try again!", canvas.width / 2 - 150 , canvas.height - 5);
    }
  }
