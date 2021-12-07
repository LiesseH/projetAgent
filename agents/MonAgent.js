import SocketAgent from "./SocketAgent.js";


function parseMessage(msg) {
	var idx = msg.indexOf(" ");
	switch (idx != -1 ? msg.substr(0, idx) : msg) {
		case 'state': return { type: "state", data: JSON.parse(msg.substr(idx + 1)) };
		case 'context': return { type: "context", data: JSON.parse(msg.substr(idx + 1)) };
		default: return { type: "welcome" };
	}
}


let tabx = 0;
let	taby = 0;
let marray = [];
let map=[[]];
var celly;
var cellx;
export default SocketAgent(function () {
	// rajouter ici les variable qui dure au dela de chaque action
	// en, d'autres termes qui reste pendant toute la vie de l'agent.
	// fonction qui contient la logique de l'agent
	return function (sendMessage, messages) {
		//debut de l'action de l'agent
		//console.log(messages.map(parseMessage))
		var typeSend = messages.map(parseMessage)[0].Type
		marray = messages.map(parseMessage)[0].data

		//console.log(marray)
		for (var element in marray) {
			//console.log("elem1 " + element)
			switch (parseInt(element)) {
				case 0:
					var cellx = tabx - 1;
					if (typeSend == 'state') {
						tabx+=1

                    }
					break;
				case 1:
					var cellx = tabx;
					break;
				case 2:
					var cellx = tabx + 1;
					break;
				default:
					break;
			}
			for (var element2 in marray[element]) {
				//console.log(marray[element][element2]);
				switch (parseInt(element2)) {
					case 0 :
						var celly = taby - 1;
						if (typeSend == 'state') {
							taby+=1
                        }
						break;
					case 1 :
						var celly = taby;
						break;
					case 2:
						var celly = taby + 1;
						break;
					default:
						break;
				}
				//console.log("elemnent2: " + element2)

				var cell = {
					"Type": marray[element][element2].type,
					"x": cellx,
					"y":celly
				}
				insetInMap(cellx, celly,cell);
			}
		}

		printMap();
		console.log("########################################")
		sendMessage("context");

		// fin de l'action l'agent
	};
});


function insetInMap(x, y, cell) {

    if (x<0) {
		x = 0;
		map.splice(x,0,[])
	}
    if (y<0) {
		y = 0;
		map[x].splice(y,0,undefined)
	}
	if (x > map.length) {
		map.push([]);
	}
	//console.log(map);
	if (y > map[x].length) {
		map[x].push(undefined);
	}
	if (map[x][y] == undefined) {
		map[x][y] = cell;
    }

}
function printMap() {
	var print;
    for (var i = 0; i < map.length; i++) {
        for (var y = 0; y < map[i].length; y++) {
			print += JSON.stringify( map[i][y]);
		}
		print += "\n";

	}
	console.log(print);
}