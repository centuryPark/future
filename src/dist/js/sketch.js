var myCanvas;
var stars = [];

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    background(10,10,10);
    for(var i = 0; i < 3001;i++){
        stars[i] = new Star();
    }
    myCanvas.parent("canvas");
}

function draw() {
    background(0,0,0,30);

    /*if(options.Direction == 'Center'){
        translate(width/2,height/2);
    }else if (options.Direction == 'Right'){
        translate(0,height/2);
    }else if (options.Direction == 'Left'){
        translate(width,height/2);
    }else if (options.Direction == 'Down'){
        translate(width/2,0);
    }else if (options.Direction == 'Up'){
        translate(width/2,height);
    }*/
    translate(width/2,height/2);

    for (var i = 0; i < options.Points; i++){
        stars[i].display();
        stars[i].update();
    }
}

function Star(){
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width*2,width*4);
    this.pz = this.z;
    this.px = this.x;
    this.py = this.y;

    this.angle = 0;

    this.display = function(){

        var sx = map(this.x/this.z/2, -1, 1, -width, width);
        var sy = map(this.y/this.z/2, -1, 1, -height, height);

        var r = map(dist(sx,sy,this.px,this.py),0,width*3,options.minSize,options.maxSize);

        var percent = norm(dist(sx,sy,0,0), 0, options.Range);
        from = color(options.Color1);
        to = color(options.Color2);
        between = lerpColor(from, to, percent);
  
        stroke(between);
        strokeWeight(r);

        if(this.z >= 1 && sx <= width && sx > -width && sy > -height && sy < height ){
             line(this.px,this.py,sx,sy);   
             this.px = sx;     
             this.py = sy; 
        }          
    }

    this.update = function(){
        this.z -= options.Speed;    
        if(this.z < 1){
            this.z = random(width*1.5,width*2);
            this.x = random(-width,width);
            this.y = random(-height*2,height*2);
            this.px = map(this.x/this.z/2, -1, 1, -width, width);
            this.py = map(this.y/this.z/2, -1, 1, -height, height);
        }
    }

}


var options ={
    Background :[0,0,0],
    Color1 : '#e37b1e',
    Color2 : '#480638',
    Points : 1000,
    maxSize : 19,
    minSize: 7.5,
    Direction : 'Center',
    Range : 1200,
    Speed : 10,

    Random: function () {
        options.Color1 = [random(0,255),random(0,255),random(0,255)];
        options.Color2 = [random(0,255),random(0,255),random(0,255)];
        options.Speed = random(10,20);
        options.Range = random(400);
        options.Points = random(300,2000);
        options.maxSize = random(1,20);
        options.minSize = random(1,5);
        options.Direction = random( ['Center', 'Left','Right','Up','Down'] );
    },

}