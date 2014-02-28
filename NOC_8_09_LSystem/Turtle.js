function Turtle(s, l, t) {
	this.todo = s;
  	this.len = l;
  	this.theta = t;
}

Turtle.prototype.render = function() {
	stroke(0,175);
    	for (var i = 0; i < this.todo.length; i++) {
      		var c = this.todo.charAt(i);
    		if (c == 'F' || c == 'G') {
        		line(0,0,this.len,0);
        		translate(this.len,0);
      		} 
      		else if (c == '+') {
        		rotate(this.theta);
      		} 
      		else if (c == '-') {
       			rotate(-this.theta);
      		} 
     		else if (c == '[') {
        		pushMatrix();
      		} 
      		else if (c == ']') {
       			popMatrix();
     		}
    	} 
}

Turtle.prototype.setLen = function(l) {
    	this.len = l; 
} 

Turtle.prototype.changeLen = function(percent) {
    	this.len *= percent; 
}

Turtle.prototype.setToDo = function(s) {
    	this.todo = s; 
}

