
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
      this.list15 = [];
      this.list16 = [];
      this.list17 = [];
      this.list18 = [];
      this.temp = [];
      this.temp2 = [];
      this.merged = false;
      this.count = 0;
    }
  }
  let merge_artefact = new Merge_sort();


 function handlers(){ 
  document.getElementById("next").onclick = function() { step(1); };
  document.getElementById("previous").onclick = function() { step(2); };
  document.getElementById("reset").onclick = function() { reset(); };
 };
 

  function reset() {
    merge_artefact.count = 0;
    merge_artefact.merged = false;
    for (var i = 0; i < 10; i++) {
      merge_artefact.temp2[i] = Math.floor(Math.random() * 90 + 10);
      merge_artefact.temp[i]=merge_artefact.temp2[i];
    }
    merge_artefact.temp2.sort()
    draw();
    handlers();
  }


  function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 560;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "14px sans-serif";
    context.strokeStyle = "black"; 
    if (merge_artefact.count >= 0){
      drawList(context, merge_artefact.temp, 85, 20, "Level 0",10,0);
      if (merge_artefact.count == 0){
        context.fillStyle = "black";
        context.fillText("Click on Next Step to start the demo", canvas.width / 2 -165 , 40);
      }
    }
    if (merge_artefact.count >= 1){
      drawLine(context,400,120,360,130);
      drawLine(context,470,120,510,130);
      drawList(context, merge_artefact.list1, 50, 120, "Level 1",5,0);
      drawList(context, merge_artefact.list2, 400, 120, "",5,5);
      if (merge_artefact.count <= 3){
        context.fillStyle = "black";
        context.fillText("Split the array", canvas.width / 2 -75 , 40);
      }
    }
    if (merge_artefact.count >= 2){
      drawLine(context,270,220,230,230);
      drawLine(context,320,220,360,230);
      drawLine(context,630,220,590,230);
      drawLine(context,670,220,710,230);
      drawList(context, merge_artefact.list3, 20, 220, "Level 2",3,0);
      drawList(context, merge_artefact.list4, 210, 220, "",2,3);
      drawList(context, merge_artefact.list5, 380, 220, "",3,5);
      drawList(context, merge_artefact.list6, 580, 220, "",2,8);
    }
    if (merge_artefact.count >= 3){
      drawLine(context,200,320,170,330);
      drawLine(context,230,320,260,330);
      drawLine(context,350,320,320,330);
      drawLine(context,380,320,410,330);
      drawLine(context,570,320,540,330);
      drawLine(context,590,320,620,330);
      drawLine(context,720,320,690,330);
      drawLine(context,750,320,780,330);
      drawList(context, merge_artefact.list7, 5, 320, "Level 3",2,0);
      drawList(context, merge_artefact.list11, 370, 320, "",2,5);
      drawList(context, merge_artefact.list8, 130, 320, "",1,2);
      drawList(context, merge_artefact.list9, 200, 320, "",1,3);
      drawList(context, merge_artefact.list10, 280, 320, "",1,4);
      drawList(context, merge_artefact.list12, 500, 320, "",1,7);
      drawList(context, merge_artefact.list13, 570, 320, "",1,8);
      drawList(context, merge_artefact.list14, 650, 320, "",1,9);
    }
    if (merge_artefact.count >= 4){
      drawLine(context,140,420,110,430);
      drawLine(context,175,420,205,430);
      drawLine(context,500,420,470,430);
      drawLine(context,535,420,565,430);
      drawList(context, merge_artefact.list15, 0, 420, "Level 4",1,0);
      drawList(context, merge_artefact.list16, 70, 420, "",1,1);
      drawList(context, merge_artefact.list17, 360, 420, "",1,5);
      drawList(context, merge_artefact.list18, 430, 420, "",1,6);
      if (merge_artefact.count == 4){
        context.fillStyle = "black";
        context.fillText("Array cannot be split further", canvas.width / 2 -120 , 40);
      }
    }
    if (merge_artefact.count >= 5){
      invertLine(context,140,420,110,430);
      invertLine(context,175,420,205,430);
      redrawList(context, merge_artefact.list7, 5, 320, "",2,0);
      sortdrawList(context, merge_artefact.list15, 0, 420, "Level 4",1,0);
      sortdrawList(context, merge_artefact.list16, 70, 420, "",1,1);
      if (merge_artefact.count <= 21){
        context.fillStyle = "black";
        context.fillText("Merge subarrays to get sorted array", canvas.width / 2 -140 , 40);
      }
    }
    if (merge_artefact.count >= 6){
      sortdrawList(context, merge_artefact.list7, 5, 320, "",2,0);
    }
    if (merge_artefact.count >= 7){
      invertLine(context,500,420,470,430);
      invertLine(context,535,420,565,430);
      redrawList(context, merge_artefact.list11, 370, 320, "",2,5);
      sortdrawList(context, merge_artefact.list17, 360, 420, "",1,5);
      sortdrawList(context, merge_artefact.list18, 430, 420, "",1,6);
    }
    if (merge_artefact.count >= 8){
      sortdrawList(context, merge_artefact.list11, 370, 320, "",2,5);
    }
    if (merge_artefact.count >= 9){
      invertLine(context,200,320,170,330);
      invertLine(context,230,320,260,330);
      redrawList(context, merge_artefact.list3, 20, 220, "",3,0);
      sortdrawList(context, merge_artefact.list8, 130, 320, "",1,2);
    }
    if (merge_artefact.count >= 10){
      sortdrawList(context, merge_artefact.list3, 20, 220, "",3,0);
    }
    if (merge_artefact.count >= 11)
    {
      invertLine(context,350,320,320,330);
      invertLine(context,380,320,410,330);
      redrawList(context, merge_artefact.list4, 210, 220, "",2,3);
      sortdrawList(context, merge_artefact.list9, 200, 320, "",1,3);
      sortdrawList(context, merge_artefact.list10, 280, 320, "",1,4);
    }
    if (merge_artefact.count >= 12){
      sortdrawList(context, merge_artefact.list4, 210, 220, "",2,3);
    }
    if (merge_artefact.count >= 13){
      invertLine(context,570,320,540,330);
      invertLine(context,590,320,620,330);
      redrawList(context, merge_artefact.list5, 380, 220, "",3,5);
      sortdrawList(context, merge_artefact.list12, 500, 320, "",1,7);
    }
    if (merge_artefact.count >= 14){
      sortdrawList(context, merge_artefact.list5, 380, 220, "",3,5);
    }
    if (merge_artefact.count >= 15){
      invertLine(context,720,320,690,330);
      invertLine(context,750,320,780,330);
      redrawList(context, merge_artefact.list6, 580, 220, "",2,8);
      sortdrawList(context, merge_artefact.list13, 570, 320, "",1,8);
      sortdrawList(context, merge_artefact.list14, 650, 320, "",1,9);
    }
    if (merge_artefact.count >= 16){
      sortdrawList(context, merge_artefact.list6, 580, 220, "",2,8);
    }
    if (merge_artefact.count >= 17){
      invertLine(context,270,220,230,230);
      invertLine(context,320,220,360,230);
      redrawList(context, merge_artefact.list1, 50, 120, "",5,0);
    }
    if (merge_artefact.count >= 18){
      sortdrawList(context, merge_artefact.list1, 50, 120, "",5,0);
    }
    if (merge_artefact.count >= 19){
      invertLine(context,630,220,590,230);
      invertLine(context,670,220,710,230);
      redrawList(context, merge_artefact.list2, 400, 120, "",5,5);
    }
    if (merge_artefact.count >= 20){
      sortdrawList(context, merge_artefact.list2, 400, 120, "",5,5);
    }
    if (merge_artefact.count >= 21){
      invertLine(context,400,120,360,130);
      invertLine(context,470,120,510,130);
      redrawList(context, merge_artefact.temp, 85, 20, "",10,0);
    }
    if (merge_artefact.count >= 22){
      sortdrawList(context, merge_artefact.temp, 85, 20, "",10,0);
      context.fillStyle = "black";
      context.fillText("Array is now sorted.", canvas.width / 2 -80 , 40);
    }
    context.stroke();
  }


  function drawList(context, list, startX, startY, title, size, begin) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
     for (var i = 0; i < size; i++) {
      context.fillStyle = "#288ec8" ;
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
        context.fillStyle = "white";
        context.font = "17px Arial";
        context.fillText(merge_artefact.temp[i+begin] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
        list[i] = merge_artefact.temp[i+begin]
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
      context.fillStyle = "#a4c652";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    list.sort()
    for (var i = 0; i < size; i++) {
      context.fillStyle = "white";
      context.font = "17px Arial";
      context.fillText(list[i] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
    }
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
      context.fillStyle = "#288ec8";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < size; i++) {
        context.fillStyle = "white";
        context.font = "17px Arial";
        context.fillText("", 50 * (i + 2) + 15 + startX, 80 + startY);
    }
  }


  function drawLine(context, startX, startY, endX, endY) {
    context.fillStyle = "black";
    drawArrowLine(context, startX, startY, endX, endY + 35);
  }
  function invertLine(context, startX, startY, endX, endY) {
    context.fillStyle = "black";
    drawArrowLine(context,endX+10, endY + 35, startX+10,startY);
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
    if (num == 1 && merge_artefact.count < 22){
      merge_artefact.count++;
      draw();
    }
    if (num == 2 && merge_artefact.count >= 1){
      merge_artefact.count--;
      draw();
    }
  }
