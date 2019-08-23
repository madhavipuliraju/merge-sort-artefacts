
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
    this.merged = false;
    this.count = 0;
    this.mcount = 1;
  }
}
let merge_artefact = new Merge_sort();


 function handlers(){ 
  document.getElementById("split-button").onclick = function() { execute(document.getElementById('split-input1').value,document.getElementById('split-input2').value); };
  document.getElementById("merge-button").onclick = function() { execute2(document.getElementById('merge-input').value); };
  document.getElementById("split-undo").onclick = function() { step(2); };
  document.getElementById("split-reset").onclick = function() { reset(); };
  document.getElementById("merge-undo").onclick = function() { step(2); };
  document.getElementById("merge-reset").onclick = function() { reset(); };
 };
 

  function reset() {
    merge_artefact.count = 0;
    merge_artefact.merged = false;
    for (var i = 0; i < 8; i++) {
      merge_artefact.temp[i] = Math.floor(Math.random() * 90 + 10);
    }
    if (merge_artefact.count<7){
      document.getElementById("split").style.display="block";
      document.getElementById("merge").style.display="none";
    }
    draw();
    handlers();
  }


  function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    // Reset size will clear the canvas, but not for IE9
    canvas.width = 900;
    canvas.height = 560;
    context.clearRect(0, 0, canvas.width, canvas.height); // For IE 9
    context.font = "14px sans-serif";
    context.strokeStyle = "black"; // Set a pen color
    console.log("count:" + merge_artefact.count);
    console.log("mcount:" + merge_artefact.mcount);
    document.getElementById('split-input1').value="";
    document.getElementById('split-input2').value="";
    document.getElementById('merge-input').value="";
    if (merge_artefact.count<7){
      document.getElementById("split").style.display="block";
      document.getElementById("merge").style.display="none";
    }
    if (merge_artefact.count>=0){
      if (merge_artefact.count == 0){
        drawList3(context, merge_artefact.temp, 130, 20, "Level 0",8,0);
      }
      else{
        drawList(context, merge_artefact.temp, 130, 20, "Level 0",8,0);
      }
    }
    if (merge_artefact.count>=1){
      drawLine(context,400,120,360,130);
      drawLine(context,470,120,510,130);
      if (merge_artefact.count==1){
        drawList3(context, merge_artefact.list1, 90, 120, "Level 1",4,0);
      }
      else{
        drawList(context, merge_artefact.list1, 90, 120, "Level 1",4,0);
      }
      if (merge_artefact.count==2){
        drawList3(context, merge_artefact.list2, 400, 120, "",4,4);
      }
      else{
        drawList(context, merge_artefact.list2, 400, 120, "",4,4);
      }
    }
    if (merge_artefact.count>=2){
      drawLine(context,270,220,230,230);
      drawLine(context,320,220,360,230);
      if (merge_artefact.count==3){
        drawList3(context, merge_artefact.list3, 60, 220, "Level 2",2,0);
      }
      else{
        drawList(context, merge_artefact.list3, 60, 220, "Level 2",2,0);
      }
      if (merge_artefact.count==4){
        drawList3(context, merge_artefact.list4, 210, 220, "",2,2);
      }
      else{
        drawList(context, merge_artefact.list4, 210, 220, "",2,2);
       }
    }
    if (merge_artefact.count>=3){
      drawLine(context,590,220,550,230);
      drawLine(context,630,220,670,230);
      if (merge_artefact.count==5){
        drawList3(context, merge_artefact.list5, 380, 220, "",2,4);
      }
      else{
        drawList(context, merge_artefact.list5, 380, 220, "",2,4);
      }
      if (merge_artefact.count==6){
        drawList3(context, merge_artefact.list6, 530, 220, "",2,6);
      }
      else{
        drawList(context, merge_artefact.list6, 530, 220, "",2,6);
      }
    }
    if (merge_artefact.count>=4){
      drawLine(context,200,320,170,330);
      drawLine(context,230,320,260,330);
      drawList(context, merge_artefact.list7, 40, 320, "Level 3",1,0);
      drawList(context, merge_artefact.list8, 130, 320, "",1,1);
    }
    if (merge_artefact.count>=5){
      drawLine(context,350,320,320,330);
      drawLine(context,380,320,410,330);
      drawList(context, merge_artefact.list9, 200, 320, "",1,2);
      drawList(context, merge_artefact.list10, 280, 320, "",1,3);
    }
    if (merge_artefact.count>=6){
      drawLine(context,520,320,490,330);
      drawLine(context,550,320,580,330);
      drawList(context, merge_artefact.list11, 370, 320, "",1,4);
      drawList(context, merge_artefact.list12, 450, 320, "",1,5);
    }
    if (merge_artefact.count>=7){
      drawLine(context,670,320,640,330);
      drawLine(context,700,320,730,330);
      drawList(context, merge_artefact.list13, 530, 320, "",1,6);
      drawList(context, merge_artefact.list14, 610, 320, "",1,7);
      redrawList(context, merge_artefact.list3, 60, 220, "",2,0);
      invertLine(context,200,320,170,330);
      invertLine(context,230,320,260,330);
    }
    if (merge_artefact.count==7){
      context.fillStyle = "black";
      context.fillText("Array cannot be split further. Split step is complete!", canvas.width / 2 - 200 , canvas.height - 70);
      context.fillText("Let's begin with the Merge step now!", canvas.width / 2 - 150 , canvas.height - 40);
      context.fillText("Enter comma separated values that should appear in the merged array", canvas.width / 2 - 250 , canvas.height - 10);
      document.getElementById("merge").style.display="block";
      document.getElementById("split").style.display="none";
    }
    if (merge_artefact.count>=8){
      sortdrawList(context, merge_artefact.list3, 60, 220, "",2,0);
      redrawList(context, merge_artefact.list4, 210, 220, "",2,2);
      invertLine(context,350,320,320,330);
      invertLine(context,380,320,410,330);
    }
    if (merge_artefact.count>=9){
      sortdrawList(context, merge_artefact.list4, 210, 220, "",2,2);
      redrawList(context, merge_artefact.list5, 380, 220, "",2,4);
      invertLine(context,520,320,490,330);
      invertLine(context,550,320,580,330);
    }
    if (merge_artefact.count>=10){
      sortdrawList(context, merge_artefact.list5, 380, 220, "",2,4);
      redrawList(context, merge_artefact.list6, 530, 220, "",2,6);
      invertLine(context,670,320,640,330);
      invertLine(context,700,320,730,330);
    }
    if (merge_artefact.count>=11){
      sortdrawList(context, merge_artefact.list6, 530, 220, "",2,6);
      redrawList(context, merge_artefact.list1, 90, 120, "",4,0);
      invertLine(context,270,220,230,230);
      invertLine(context,320,220,360,230);
    }
    if (merge_artefact.count>=12){
      sortdrawList(context, merge_artefact.list1, 90, 120, "",4,0);
      redrawList(context, merge_artefact.list2, 400, 120, "",4,4);
      invertLine(context,590,220,550,230);
      invertLine(context,630,220,670,230);
    }
    if (merge_artefact.count>=13){
      sortdrawList(context, merge_artefact.list2, 400, 120, "",4,4);
      redrawList(context, merge_artefact.temp, 130, 20, "",8,0);
      invertLine(context,400,120,360,130);
      invertLine(context,470,120,510,130);
    }
    if (merge_artefact.count>=14){
      sortdrawList(context, merge_artefact.temp, 130, 20, "",8,0);
      context.fillStyle = "black";
      context.fillText("Array is now completely sorted!", canvas.width / 2 - 120 , canvas.height - 30);
    }
    context.stroke();
  }


  function drawList(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "15px Arial";
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
        list[i] = merge_artefact.temp[i+begin];
    }
  }

  function drawList3(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    for (var i = 0; i < size; i++) {
      context.fillStyle = "#a4c652";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
      context.fillStyle = "white";
      context.font = "17px Arial";
      context.fillText(merge_artefact.temp[i+begin] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
      list[i] = merge_artefact.temp[i+begin];
      context.fillStyle = "black";
      context.font = "14px Arial";
      context.fillText((i+begin+1) + "", 50 * (i + 2) + 33 + startX, 95 + startY);
    }
  }


  function sortdrawList(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    if (title == "Level 4"){
      context.fillText(title, 40 * (0 + 1) + startX - 250, 80 + startY);
    }
    else{
      context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    }
    for (var i = 0; i < size; i++) {
      context.fillStyle = "#288ec8";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    list.sort();
    for (var i = 0; i < size; i++) {
      context.fillStyle = "white";
      context.font = "17px Arial";
      context.fillText(list[i] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
      context.fillStyle = "black";
      context.font = "14px Arial";
      context.fillText((i+begin+1) + "", 50 * (i + 2) + 33 + startX, 95 + startY);
    }
  }

  function invertLine(context, startX, startY, endX, endY) {
    context.fillStyle = "black";
    drawArrowLine(context,endX+10, endY + 35, startX+10,startY);
  }

  function redrawList(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    if (title == "Level 4"){
      context.fillText(title, 40 * (0 + 1) + startX - 250, 80 + startY);
    }
    else{
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    }
    for (var i = 0; i < size; i++) {
      context.fillStyle = "#a4c652";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
      context.fillStyle = "white";
      context.font = "17px Arial";
      context.fillText("", 50 * (i + 2) + 15 + startX, 80 + startY);
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
    // find slope of this line
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
    // set length of arrows
    var arrlen = 7;
    // draw arrows on line
    context.moveTo(x2, y2);
    context.lineTo(x2 + Math.cos(arctan + set45) * arrlen,
            y2 + Math.sin(arctan + set45) * arrlen);
    context.moveTo(x2, y2);
    context.lineTo(x2 + Math.cos(arctan - set45) * arrlen,
            y2 + Math.sin(arctan - set45) * arrlen);
  }

  function step(num) {
    if (num==1 && merge_artefact.count<15)
      merge_artefact.count++;
    if (num==2 && merge_artefact.count>=1){
      merge_artefact.count--;
      if (merge_artefact.mcount>1){
        merge_artefact.mcount--;
      }
    }
    draw();
  }


  function execute2(st){
    var s = st.split(",");
    var l = s.length;
    var sort;
    var check=true;
    if (merge_artefact.mcount==1){
      sort = merge_artefact.list3.sort();
    }
    if (merge_artefact.mcount==2)
      sort = merge_artefact.list4.sort();
    if (merge_artefact.mcount==3)
      sort = merge_artefact.list5.sort();
    if (merge_artefact.mcount==4)
      sort = merge_artefact.list6.sort();
    if (merge_artefact.mcount==5)
      sort = merge_artefact.list1.sort();
    if (merge_artefact.mcount==6)
      sort = merge_artefact.list2.sort();
    if (merge_artefact.mcount==7)
      sort = merge_artefact.temp.sort();
    for(var i=0;i<l;i++){
      if (sort[i]!=s[i]){
        check=false;
        break;
      }
    }
    if (check==true && s.length==sort.length){
      merge_artefact.mcount++;
      merge_artefact.count++;
      draw();
    }
    else{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillText("Wrong step, Try again!", canvas.width / 2 - 150 , canvas.height - 5);
    }
  }

  function execute(a,b){
    if (a == 4 && b == 5 && merge_artefact.count == 0){
      step(1);
    }
    else if (a == 2 && b == 3 && merge_artefact.count == 1){
      step(1);
    }
    else if (a == 6 && b == 7 && merge_artefact.count == 2){
      step(1);
    }
    else if (a == 1 && b == 2 && merge_artefact.count == 3){
      step(1);
    }
    else if (a == 3 && b == 4 && merge_artefact.count == 4){
      step(1);
    }
    else if (a == 5 && b == 6 && merge_artefact.count == 5){
      step(1);
    }
    else if (a == 7 && b == 8 && merge_artefact.count == 6){
      step(1);
    }
    else{
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext("2d");
      context.fillStyle = "black";
      context.fillText("Wrong step, Try again!", canvas.width / 2 - 150 , canvas.height - 5);
    }
  }
