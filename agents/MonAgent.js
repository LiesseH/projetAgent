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
	var marray = [];
	var map;
	var cellx;
	var celly;
	// fonction qui contient la logique de l'agent
	return function (sendMessage, messages) {
		//debut de l'action de l'agent

		//console.log(parseMessage(messages))
		marray = messages.map(parseMessage)[0].data


		//console.log(marray)
		for (var element in marray) {
			//console.log("elem1 " + element)
			for (var element2 in marray[element]) {
				console.log(marray[element][element2]);
				switch (element) {
					case 0 :
						celly = y - 1;
						break;
					case 1 :
						celly = y;
						break;
					case 2:
						celly = y + 1;
						break;
				}
				console.log("elemnent2: "+element2)
				switch (element2) {
					case 0:
						var cellx = x - 1;
						console.log("elelment 2 = 0 ",cellx);
						break;
					case 1:
						console.log("elelment 2 = 1 ", cellx);
						var cellx = x;
						break;
					case 2:
						console.log("elelment 2 = 2 ", cellx);
						var cellx = x + 1;
						break;
				}
				console.log("Coordoné x y cellule " + cellx + " " + celly)
			}
		}
		//for (var i = 0; i < marray.length; i++) {
		//	for (var y = 0; y < marray[i].length; y++) {
		//		console.log(i + " " + y +marray[i][y]);
  //          }

  //      }


		console.log("########################################")

		sendMessage("context");

		// fin de l'action l'agent
	};
});
