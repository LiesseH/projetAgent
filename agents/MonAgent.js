import SocketAgent from "./SocketAgent.js";


function parseMessage(msg) {
	var idx = msg.indexOf(" ");
	switch (idx != -1 ? msg.substr(0, idx) : msg) {
		case 'state': return { type: "state", data: JSON.parse(msg.substr(idx + 1)) };
		case 'context': return { type: "context", data: JSON.parse(msg.substr(idx + 1)) };
		default: return { type: "welcome" };
	}
}


export default SocketAgent(function () {

	// rajouter ici les variable qui dure au dela de chaque action
	// en, d'autres termes qui reste pendant toute la vie de l'agent.

	
	let x = 0;
	let	y = 0;
	let marray = [];
	let map=[];
	var celly;
	var cellx;
	// fonction qui contient la logique de l'agent
	return function (sendMessage, messages) {
		//debut de l'action de l'agent
		//console.log(parseMessage(messages))
		marray = messages.map(parseMessage)[0].data

		//console.log(marray)
		for (var element in marray) {
			//console.log("elem1 " + element)
			for (var element2 in marray[element]) {
				//console.log(marray[element][element2]);
				switch (parseInt(element)) {
					case 0 :
						var celly = y - 1;
						break;
					case 1 :
						var celly = y;
						break;
					case 2:
						var celly = y + 1;
						break;
					default:
						break;
				}
				//console.log("elemnent2: " + element2)
				switch (parseInt(element2)) {
					case 0:
						var cellx = x - 1;
						//console.log("elelment 2 = 0 ",cellx);
						break;
					case 1:
						var cellx = x;
						//console.log("elelment 2 = 1 ", cellx);
						break;
					case 2:
						var cellx = x + 1;
						//console.log("elelment 2 = 2 ", cellx);
						break;
					default:
						break;
				}

				var cell = {
					"Type": marray[element][element2].type,
					"x": cellx,
					"y": celly
				}
				//if (map.indexOf(cell) == -1) {
				//	map.push(cell)	
				//}
				if (map.length == 0) {
					map.push(cell);
				}
				var bool1 = false;
				for (var i = 0; i < map.length; i++) {
					if (map[i] == cell) {
						bool1 = true;
					}
				}
				if (bool1 == true) {
					map.push(cell);
                }


			}
		}
		console.log(map)
		console.log("########################################")
		sendMessage("context");

		// fin de l'action l'agent
	};
});
