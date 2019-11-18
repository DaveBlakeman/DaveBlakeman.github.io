var KIinitialised = false;
var KIPlayers = [];

class KillerIsland {
    getInfo() {
        return {
            "id": "KillerIsland",
            "name": "TurnerIsland",
            "blocks": [
			/*{
                "opcode": "initialise_game",
                "blockType": "command",
                "text": "initialise game",
                "arguments": {}
            }, {
                "opcode": "game_initialised",
                "blockType": "Boolean",
                "text": "game initialised",
                "arguments": {}
            },*/ {
                "opcode": "clear_all_scores",
                "blockType": "command",
                "text": "clear all scores",
                "arguments": {}
            }, {
                "opcode": "clear_all_Players",
                "blockType": "command",
                "text": "clear all Players",
                "arguments": {}
            }, {
                "opcode": "get_player_count",
                "blockType": "reporter",
                "text": "get player count",
                "arguments": {}
            }, {
                "opcode": "get_player_name",
                "blockType": "reporter",
                "text": "get player [player_index] name",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "get_player_costume",
                "blockType": "reporter",
                "text": "get player [player_index] costume",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "get_player_score",
                "blockType": "reporter",
                "text": "get player [player_index] score",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "change_player_score",
                "blockType": "command",
                "text": "set player [player_index] score to [new_score]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    },
                    "new_score": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "change_player_name",
                "blockType": "command",
                "text": "change player [player_index] name to [new_name]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    },
                    "new_name": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "change_player_costume",
                "blockType": "command",
                "text": "change player [player_index] costume to [new_costume]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    },
                    "new_costume": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "add_player",
                "blockType": "command",
                "text": "add player with name [player_name]",
                "arguments": {
                    "player_name": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "remove_player",
                "blockType": "command",
                "text": "remove player [player_index]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "get_index_of_player",
                "blockType": "reporter",
                "text": "get index of player called [player_name]",
                "arguments": {
                    "player_name": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "get_users_from_api",
                "blockType": "reporter",
                "text": "get_users_from_api",
                "arguments": {}
                }
            ],
            "menus": {
                supermath: this._formatMenu(["+", "-", "/", "*", "^", "sqrt"])
            }
        };
    }
    initialise_game() {
		KIinitialised = false;
		var request = new XMLHttpRequest();

		// Open a new connection, using the GET request on the URL endpoint
		request.open('GET', 'https://killerisland.herokuapp.com/api/v2/users', true);

		request.onload = function() {
		  // Begin accessing JSON data here
		  KIinitialised = true;
		  console.log(this.response);
		  var data = JSON.parse(this.response);
		  console.log(data);
		  KIPlayers.length = 0;
		  if (request.status >= 200 && request.status < 400) {
			  data.response.forEach(user => {
				  console.log(user.UserName);
				  console.log(user.UserCostume);
				  console.log(user.UserScore);
				  KIPlayers.push({"name": user.UserName, "costume": user.UserCostume, "score": user.UserScore}); 
			  }
			 );
		  } else {
			console.log('error');
		  }
		};
		// Send request
		request.send();
    }
    game_initialised() {
        return KIinitialised;
	}
    clear_all_scores() {
        for (let player_index = 0; player_index < KIPlayers.length; player_index++) {
          KIPlayers[player_index].score = 0;
        }
    }
    clear_all_players() {
        KIPlayers.length = 0;
    }
    get_player_count() {
        return KIPlayers.length;
    }
    get_player_name(player_index) {
        if ((player_index < 1) || (player_index > KIPlayers.length))
          return "";
        else  
          return KIPlayers[player_index-1].name;
    }
    get_player_costume(player_index) {
        if ((player_index < 1) || (player_index > KIPlayers.length))
          return "<null>";
        else { 
          var costume = KIPlayers[player_index-1].costume; 
          return costume;
        }
    }
    get_player_score(player_index) {
        if ((player_index < 1) || (player_index > KIPlayers.length))
          return 0;
        else  
          return KIPlayers[player_index-1].score;
    }
    change_player_score(player_index, new_score) {
        if ((player_index > 0) && (player_index <= KIPlayers.length))
          KIPlayers[player_index-1].score = new_score;
    }
    change_player_name(player_index, new_name) {
        if ((player_index > 0) && (player_index <= KIPlayers.length))
          KIPlayers[player_index-1].name = new_name;
    }
    change_player_costume(player_index, new_costume) {    
        if ((player_index > 0) && (player_index <= KIPlayers.length))
          KIPlayers[player_index-1].costume = new_costume;
    }
    add_player(player_name) {
        KIPlayers.push({"name": player_name, "costume": "", "score": 0}); 
    }  
    remove_player(player_index) {
        if ((player_index > 0) && (player_index <= KIPlayers.length))
           delete KIPlayers[player_index-1];
    }   
    get_index_of_player(player_name) {
        for (let player_index = 0; player_index < KIPlayers.length; player_index++) {
          if (KIPlayers[player_index].name == player_name)
              return player_index+1; // one-based index
        }
        // not found => return 0
        return 0;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}

Scratch.extensions.register(new KillerIsland());

