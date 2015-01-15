var currentMap;
var currentMapX;
var currentMapY;

//default all maps
for (var x=0; x<16; x++){
	for (var y=0; y<8; y++) {
		window["m" + x + y] = [];
	}
}

var m03 =  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
];

var m04 =  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
];

var m05 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
];

var m06 =  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m07 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1],
    [0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m17 =  [
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m27 =  [
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m37 =  [
    [0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m47 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [1,1,1,1,0,1,0,0,2,0,0,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m56 =  [
    [0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0],
    [0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0],
    [1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
];

var m57 =  [
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1],
    [0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1],
    [0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1],
    [0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1],
    [0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1],
    [0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m66 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
    [1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
    [1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0]
];

//Left of Start Screen
var m67 = [
	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0],
	[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
	[1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
	[1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//North of Start Screen
var m76 = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0],
	[0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0],
	[0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0],
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

//Start Screen
var m77 = [
	[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,2,0,0,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m86 =  [
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0]
];

//Right of start screen
var m87 =  [
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1],
    [0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1],
    [0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m90 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0],
    [0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m91 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m92 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m93 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],
    [0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0],
    [0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],
    [0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m94 =  [
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m95 =  [
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m96 =  [
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m97 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
    [1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0],
    [1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m100 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
];

var m101 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m102 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
];

var m103 =  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m104 =  [
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,2,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m105 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0]
];

var m106 =  [
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m107 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m110 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0],
    [0,1,1,0,1,0,0,2,0,0,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
];

var m111 =  [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1],
    [0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0],
    [0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
];

var m112 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
];

var m113 =  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0]
];

var m114 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0],
    [0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0],
    [1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0],
    [0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0]
];

var m115 =  [
    [0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
    [1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
    [1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0]
];

var m116 =  [
    [0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0],
    [0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
    [1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0]
];

var m117 =  [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m120 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1],
    [0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
];

var m121 =  [
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m122 =  [
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m123 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0],
    [0,1,1,0,1,0,0,2,0,0,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
];

var m124 =  [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0],
    [0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m125 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]
];

var m126 =  [
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m127 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m130 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
];

var m131 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m132 =  [
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
];

var m133 =  [
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0],
    [0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0],
    [0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
    [0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0]
];

var m134 =  [
    [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0],
    [1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1],
    [1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1],
    [1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1],
    [0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]
];

var m135 =  [
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]
];

var m136 =  [
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m137 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m140 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
];

var m141 =  [
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m142 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0]
];

var m143 =  [
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m144 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m145 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0],
    [1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0],
    [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m146 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1],
    [0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m147 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m150 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0],
    [0,0,1,1,0,0,1,0,2,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
];

var m151 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0],
    [1,1,0,0,1,0,2,0,1,1,0,0,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0],
    [1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var m152 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0],
    [0,1,0,0,1,0,2,0,1,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
];

var m153 =  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0]
];

var m154 =  [
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0]
];

var m155 =  [
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0]
];

var m156 =  [
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,2,0,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0]
];

var m157 =  [
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var movementMap = [
	[m00,m10,m20,m30,m40,m50,m60,m70,m80,m90,m100,m110,m120,m130,m140,m150],
	[m01,m11,m21,m31,m41,m51,m61,m71,m81,m91,m101,m111,m121,m131,m141,m151],
	[m02,m12,m22,m32,m42,m52,m62,m72,m82,m92,m102,m112,m122,m132,m142,m152],
	[m03,m13,m23,m33,m43,m53,m63,m73,m83,m93,m103,m113,m123,m133,m143,m153],
	[m04,m14,m24,m34,m44,m54,m64,m74,m84,m94,m104,m114,m124,m134,m144,m154],
	[m05,m15,m25,m35,m45,m55,m65,m75,m85,m95,m105,m115,m125,m135,m145,m155],
	[m06,m16,m26,m36,m46,m56,m66,m76,m86,m96,m106,m116,m126,m136,m146,m156],
	[m07,m17,m27,m37,m47,m57,m67,m77,m87,m97,m107,m117,m127,m137,m147,m157]
];

var setCurrentMap = function(x, y){
    if (x != currentMapX || y != currentMapY) {
        //backwards because I'm treating the first index as down the screen/map to make it more readable
        console.log("map move");
        currentMapX = x;
        currentMapY = y;
        currentMap = movementMap[y][x];
        setCurrentEnemyMap(x, y);
        drawCurrentMapBuilder(x, y);
    }
};

setCurrentMap(7,7);