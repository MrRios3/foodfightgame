(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FoodFight_atlas_1", frames: [[0,0,1920,1080],[0,1082,315,554],[317,1082,193,214]]},
		{name:"FoodFight_atlas_2", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["FoodFight_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.DirtyKitchen = function() {
	this.initialize(ss["FoodFight_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FryingPan = function() {
	this.initialize(ss["FoodFight_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Static = function() {
	this.initialize(ss["FoodFight_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.playBounds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,215,164,0.369)").s().p("EhiKA21MAAAhtpMDEVAAAMAAABtpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playBounds, new cjs.Rectangle(-628.3,-350.9,1256.6,701.9), null);


(lib.paddleRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FryingPan();
	this.instance.setTransform(-157.5,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paddleRight, new cjs.Rectangle(-157.5,-277,315,554), null);


(lib.paddleLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FryingPan();
	this.instance.setTransform(-175,-277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paddleLeft, new cjs.Rectangle(-175,-277,315,554), null);


(lib.MeatballMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Static();
	this.instance.setTransform(-47.25,-52.4,0.4896,0.4896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MeatballMC, new cjs.Rectangle(-47.2,-52.4,94.5,104.8), null);


// stage content:
(lib.FoodFight2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// ====== FRAME 1: Actions Layer ======
		
		// Setup Ticker
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", tick);
		
		// References to symbols
		var paddleLeft = this.paddleLeft;
		var paddleRight = this.paddleRight;
		var ball = this.ball;
		var scoreLeft = this.scoreLeft;
		var scoreRight = this.scoreRight;
		
		// Key input tracking
		var keys = {};
		document.addEventListener("keydown", function(e) {
		  keys[e.key] = true;
		  if (e.key === " ") gameStarted = true;
		});
		document.addEventListener("keyup", function(e) {
		  keys[e.key] = false;
		});
		
		// Game state
		var gameStarted = false;
		var paddleSpeed = 8;
		var leftScore = 0;
		var rightScore = 0;
		scoreLeft.text = leftScore.toString();
		scoreRight.text = rightScore.toString();
		
		// Ball movement
		var ballSpeed = 8;
		var ballDirectionX = -1;
		var ballDirectionY = 0;
		
		// Initial position setup
		ball.x = stage.canvas.width / 2;
		ball.y = stage.canvas.height / 2;
		paddleLeft.x = 100;
		paddleRight.x = stage.canvas.width - 100;
		paddleLeft.y = ball.y;
		paddleRight.y = ball.y;
		
		// Tick function
		function tick() {
		  // Player control
		  if (keys["w"]) paddleLeft.y -= paddleSpeed;
		  if (keys["s"]) paddleLeft.y += paddleSpeed;
		
		  // CPU paddle tracks the center of the ball
		  if (gameStarted) {
		    var rightBounds = paddleRight.getTransformedBounds(stage);
		    var paddleCenter = rightBounds.y + rightBounds.height / 2;
		    var distance = ball.y - paddleCenter;
		    var maxFollowSpeed = paddleSpeed * 0.9;
		    var moveY = Math.max(-maxFollowSpeed, Math.min(maxFollowSpeed, distance));
		    paddleRight.y += moveY;
		  }
		
		  // Ball movement
		  if (gameStarted) {
		    ball.x += ballSpeed * ballDirectionX;
		    ball.y += ballSpeed * ballDirectionY;
		
		    // Bounce off top and bottom
		    if (ball.y <= 0 || ball.y >= stage.canvas.height - ball.getTransformedBounds(stage).height) {
		      ballDirectionY *= -1;
		    }
		
		    // Get current bounds
		    var ballBounds = ball.getTransformedBounds(stage);
		    var paddleLeftBounds = paddleLeft.getTransformedBounds(stage);
		    var paddleRightBounds = paddleRight.getTransformedBounds(stage);
		
		    // Left paddle bounce
		    if (
		      ballDirectionX < 0 &&
		      ballBounds.x < paddleLeftBounds.x + paddleLeftBounds.width &&
		      ballBounds.x + ballBounds.width > paddleLeftBounds.x &&
		      ballBounds.y < paddleLeftBounds.y + paddleLeftBounds.height &&
		      ballBounds.y + ballBounds.height > paddleLeftBounds.y
		    ) {
		      ballDirectionX = 1;
		      ballSpeed = Math.min(ballSpeed + 0.25, 14);
		      var hitPos = (ball.y + ballBounds.height / 2) - (paddleLeft.y + paddleLeft.getBounds().height / 2);
		      var norm = hitPos / (paddleLeft.getBounds().height / 2);
		      ballDirectionY = norm * 0.75;
		    }
		
		    // Right paddle bounce
		    if (
		      ballDirectionX > 0 &&
		      ballBounds.x + ballBounds.width > paddleRightBounds.x &&
		      ballBounds.x < paddleRightBounds.x + paddleRightBounds.width &&
		      ballBounds.y < paddleRightBounds.y + paddleRightBounds.height &&
		      ballBounds.y + ballBounds.height > paddleRightBounds.y
		    ) {
		      ballDirectionX = -1;
		      ballSpeed = Math.min(ballSpeed + 0.25, 14);
		      var hitPos = (ball.y + ballBounds.height / 2) - (paddleRight.y + paddleRight.getBounds().height / 2);
		      var norm = hitPos / (paddleRight.getBounds().height / 2);
		      ballDirectionY = norm * 0.75;
		    }
		
		    // Scoring check
		    if (ball.x <= -50) {
		      rightScore++;
		      scoreRight.text = rightScore.toString();
		      resetBall(-1);
		      gameStarted = false;
		    }
		    if (ball.x >= stage.canvas.width + 50) {
		      leftScore++;
		      scoreLeft.text = leftScore.toString();
		      resetBall(1);
		      gameStarted = false;
		    }
		  }
		
		  // Clamp paddles within the visible stage
		  let paddleLBounds = paddleLeft.getTransformedBounds(stage);
		  let paddleRBounds = paddleRight.getTransformedBounds(stage);
		
		  if (paddleLBounds) {
		    paddleLeft.y = Math.max(0, Math.min(stage.canvas.height - paddleLBounds.height, paddleLeft.y));
		  }
		  if (paddleRBounds) {
		    paddleRight.y = Math.max(0, Math.min(stage.canvas.height - paddleRBounds.height, paddleRight.y));
		  }
		
		  stage.update();
		}
		
		// Reset ball to center
		function resetBall(direction) {
		  var ballBounds = ball.getTransformedBounds(stage);
		  ball.x = stage.canvas.width / 2 - ballBounds.width / 2;
		  ball.y = stage.canvas.height / 2 - ballBounds.height / 2;
		  paddleLeft.y = ball.y;
		  paddleRight.y = ball.y;
		  ballDirectionX = direction;
		  ballDirectionY = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI2
	this.text = new cjs.Text("P2", "33px 'Vineta BT'", "#FFFFFF");
	this.text.lineHeight = 47;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(939.55,10.5);

	this.text_1 = new cjs.Text("P1", "33px 'Vineta BT'", "#FFFFFF");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 120;
	this.text_1.parent = this;
	this.text_1.setTransform(17.8,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// UI
	this.scoreLeft = new cjs.Text("Player 1:", "33px 'Vineta BT'", "#FFFFFF");
	this.scoreLeft.name = "scoreLeft";
	this.scoreLeft.lineHeight = 47;
	this.scoreLeft.lineWidth = 265;
	this.scoreLeft.parent = this;
	this.scoreLeft.setTransform(154.45,11.15);

	this.scoreRight = new cjs.Text("Player 2:", "33px 'Vineta BT'", "#FFFFFF");
	this.scoreRight.name = "scoreRight";
	this.scoreRight.lineHeight = 47;
	this.scoreRight.lineWidth = 265;
	this.scoreRight.parent = this;
	this.scoreRight.setTransform(1029.75,11.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreRight},{t:this.scoreLeft}]}).wait(1));

	// ball
	this.ball = new lib.MeatballMC();
	this.ball.name = "ball";
	this.ball.setTransform(592.3,365.65,0.5079,0.5079,0,0,0,0.1,0.1);
	this.ball.shadow = new cjs.Shadow("rgba(0,0,255,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// Paddle_Right
	this.paddleRight = new lib.paddleRight();
	this.paddleRight.name = "paddleRight";
	this.paddleRight.setTransform(912.25,348.3,0.4095,0.4095);
	this.paddleRight.shadow = new cjs.Shadow("rgba(51,255,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.paddleRight).wait(1));

	// Paddle_Left
	this.paddleLeft = new lib.paddleLeft();
	this.paddleLeft.name = "paddleLeft";
	this.paddleLeft.setTransform(270.1,360.05,0.4095,0.452,0,0,180,-17.4,0);
	this.paddleLeft.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.paddleLeft).wait(1));

	// Boundary
	this.instance = new lib.playBounds();
	this.instance.setTransform(628.3,369.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Background
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-239,-20,0.909,0.6985);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(401,340,1105.3,394.4);
// library properties:
lib.properties = {
	id: 'CEA883EED8FC06499C5335D4068207B4',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FoodFight_atlas_1.png", id:"FoodFight_atlas_1"},
		{src:"images/FoodFight_atlas_2.png", id:"FoodFight_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CEA883EED8FC06499C5335D4068207B4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;