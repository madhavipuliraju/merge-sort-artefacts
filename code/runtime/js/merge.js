
  class Merge_sort{
    constructor(){
      this.list1 = [];
      this.list2 = [];
      this.temp = [];
      this.current1 = 0;
      this.current2 = 0;
      this.current3 = 0;
      this.merged = false;
    }
  }
  let merge_artefact = new Merge_sort();


 function handlers(){ 
  document.getElementById("next").onclick = function() { step(); };
  document.getElementById("reset").onclick = function() { reset(); };
 };
 

  function reset() {
    merge_artefact.current1 = 0;
    merge_artefact.current2 = 0;
    merge_artefact.current3 = 0;
    merge_artefact.merged = false;
    for (var i = 0; i < 5; i++) {
      merge_artefact.list1[i] = Math.floor(Math.random() * 90 + 10);
      merge_artefact.list2[i] = Math.floor(Math.random() * 90 + 10);
    }
    for (var i = 0; i < 10; i++) {
      merge_artefact.temp[i] = 0;
    }
    merge_artefact.list1.sort();
    merge_artefact.list2.sort();
    handlers();
    draw();
  }
      

  function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    canvas.width = 850;
    canvas.height = 300;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "14px sans-serif";
    context.strokeStyle = "black"; 
    drawList(context, merge_artefact.list1, 50, 20, "Subarray 1");
    drawList(context, merge_artefact.list2, 400, 20, "Subarray 2");
    drawList3(context, merge_artefact.temp, 85, 150, "Merged array");
    drawLine(context, 50, 15, merge_artefact.current1, "Pointer-1");
    drawLine(context, 400, 15, merge_artefact.current2, "Pointer-2");
    drawLine3(context, 85, 150, merge_artefact.current3, "Pointer-3");
    if (merge_artefact.merged) {
      context.fillText("The lists are now merged", canvas.width / 2 - 100, canvas.height - 20);
    }
    context.stroke();
  }


  function drawList(context, list, startX, startY, title) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText(title, 40 * (0 + 1) + startX - 20, 80 + startY);
    for (var i = 0; i < list.length; i++) {
      context.fillStyle = "#288ec8";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < list.length; i++) {
      if (list[i] != 0) {
        context.fillStyle = "white";
        context.font = "17px Arial";
        context.fillText(list[i] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
        context.font = "15px Arial";
      }
    }
  }

  function drawList3(context, list, startX, startY, title) {
    context.fillStyle = "black";
    context.font = "15px Arial";
    context.fillText(title, 40 * (0 + 1) + startX - 35, 80 + startY);
    for (var i = 0; i < list.length; i++) {
      context.fillStyle = "#a4c652";
      context.fillRect(50 * (i + 2) + startX, 50 + startY, 48, 50);
    }
    for (var i = 0; i < list.length; i++) {
      if (list[i] != 0) {
        context.fillStyle = "white";
        context.font = "17px Arial";
        context.fillText(list[i] + "", 50 * (i + 2) + 15 + startX, 80 + startY);
        context.font = "15px Arial";
      }
    }
  }
      

  function drawLine(context, startX, startY, index, title) {
    context.fillStyle = "black";
    context.fillText(title, 50 * (index + 1) + startX + 55, startY);
    var x = 50 * (index + 1) + startX + 75;
    var y = startY + 10;
    context.fillStyle = "black";
    drawArrowLine(context, x, y, x, y + 35);
  }

  function drawLine3(context, startX, startY, index, title) {
    context.fillStyle = "black";
    context.fillText(title, 50 * (index + 1) + startX + 5, startY);
    var x = 50 * (index + 1) + startX + 25;
    var y = startY + 10;
    context.fillStyle = "black";
    drawArrowLine(context, x, y, x, y + 35);
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
      

  function step() {
    if (takeAStep()) {
      merge_artefact.merged = true;
    }
    draw();
  }

  function takeAStep() {
    if (merge_artefact.current1 < merge_artefact.list1.length && merge_artefact.current2 < merge_artefact.list2.length) {
      if (merge_artefact.list1[merge_artefact.current1] <= merge_artefact.list2[merge_artefact.current2]){
        merge_artefact.temp[merge_artefact.current3++] = merge_artefact.list1[merge_artefact.current1++];
      }
      else
        merge_artefact.temp[merge_artefact.current3++] = merge_artefact.list2[merge_artefact.current2++];
    }
    else if (merge_artefact.current1 < merge_artefact.list1.length)
      merge_artefact.temp[merge_artefact.current3++] = merge_artefact.list1[merge_artefact.current1++];
    else if (merge_artefact.current2 < merge_artefact.list2.length)
      merge_artefact.temp[merge_artefact.current3++] = merge_artefact.list2[merge_artefact.current2++];
    else
      return true;
    return false;
  }
