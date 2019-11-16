var players = [];
function PlayerRec(player_name, player_costume, player_score) {
	this.name = (player_name != undefined) ? player_name : '';
	this.costume = (player_costume != undefined) ? player_costume : '';
	this.score = (player_score != undefined) ? player_score : 0;
}
class KillerIsland {
    getInfo() {
        return {
            "id": "KillerIsland",
            "name": "TurnerIsland",
            "blocks": [{
                "opcode": "clear_all_scores",
                "blockType": "command",
                "text": "clear all scores",
                "arguments": {}
            }, {
                "opcode": "clear_all_players",
                "blockType": "command",
                "text": "clear all players",
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
			}],
            "menus": {
                supermath: this._formatMenu(['+', '-', '/', '*', '^', 'sqrt']),
            }
        };
    }
	
	init_if_required() {
		console.log('init')
	}

	clear_all_scores({}) {
		init_if_required();
		for (let player_index = 0; player_index < players.length; player_index++) {
		  players[player_index].score = 0;
		}
	}
	clear_all_players({}) {
		init_if_required();
		players.length = 0;
	}
	get_player_count({}) {
		init_if_required();
		return players.length;
	}
	get_player_name({player_index}) {
		init_if_required();
		if ((player_index < 1) || (player_index > players.length))
		  return "";
		else  
		  return players[player_index-1].name;
	}
	get_player_costume({player_index}) {
		init_if_required();
		if ((player_index < 1) || (player_index > players.length))
		  return "<null>";
	    else { 
		  var costume = players[player_index-1].costume; 
		  return costume;
		}
	}
	get_player_score({player_index}) {
		init_if_required();
		if ((player_index < 1) || (player_index > players.length))
		  return 0;
	    else  
		  return players[player_index-1].score;
	}
	change_player_score({player_index, new_score}) {
		init_if_required();
		if ((player_index > 0) && (player_index <= players.length))
		  players[player_index-1].score = new_score;
	}
	change_player_name({player_index, new_name}) {
		init_if_required();
		if ((player_index > 0) && (player_index <= players.length))
		  players[player_index-1].name = new_name;
	}
	change_player_costume({player_index, new_costume}) {	
		init_if_required();
		if ((player_index > 0) && (player_index <= players.length))
		  players[player_index-1].costume = new_costume;
	}
	add_player({player_name}) {
		init_if_required();
		players.push(new PlayerRec (player_name, "", 0)); 
	}  
	remove_player({player_index}) {
		init_if_required();
		if ((player_index > 0) && (player_index <= players.length))
		   delete players[player_index-1];
	}   
	get_index_of_player({player_name}) {
		init_if_required();
		for (player_index = 0; player_index < players.length; player_index++) {
		  if (players[player_index].name == player_name)
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