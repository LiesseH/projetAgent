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

	var map = [];
	var x, y = 0;
	var marray = [];
	var maCase;
	// fonction qui contient la logique de l'agent
	return function (sendMessage, messages) {
		//debut de l'action de l'agent

		
		//marray = messages.map(parseMessage)[0].date


		//console.log(marray[0])
		for (var element in marray) {
			
			for (var element2 in marray) {
				//console.log(marray[element][element2])
				maCase.map 
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
