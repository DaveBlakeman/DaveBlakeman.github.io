var players = [];

class KillerIsland {
    getInfo() {
        return {
            "id": "KillerIsland",
            "name": "KillerIsland",
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
                "text": "get player name [player_index]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "get_player_costume",
                "blockType": "reporter",
                "text": "get player costume [player_index]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "get_player_score",
                "blockType": "reporter",
                "text": "get player score [player_index]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "change_player_score",
                "blockType": "command",
                "text": "change player score [player_index] by [score_increment]",
                "arguments": {
                    "player_index": {
                        "type": "number",
                        "defaultValue": "1"
                    },
					"score_increment": {
                        "type": "number",
                        "defaultValue": "1"
                    }
                }
            }, {
                "opcode": "javablock",
                "blockType": "reporter",
                "text": "javascript [string]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": "window.alert(\"yay\")"
                    }
                }
            }, {
                "opcode": "blank",
                "blockType": "command",
                "text": "[string]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "itOfStr",
                "blockType": "reporter",
                "text": "word [num] of [string] separated by [seper]",
                "arguments": {
                    "num": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "hello world"
                    },
                    "seper": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "exclu",
                "blockType": "Boolean",
                "text": "[bool1] xor [bool2]",
                "arguments": {
                    "bool1": {
                        "type": "Boolean",
                        "defaultValue": false
                    },
                    "bool2": {
                        "type": "Boolean"
                    }
                }
            }, {
                "opcode": "strCont",
                "blockType": "Boolean",
                "text": "[string1] contains [string2]",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": "hello world"
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": "hello"
                    }
                }
            }, {
                "opcode": "dPrompt",
                "blockType": "reporter",
                "text": "prompt user with [prompty]",
                "arguments": {
                    "prompty": {
                        "type": "string",
                        "defaultValue": "how are you?"
                    }
                }
            }, {
                "opcode": "repAll",
                "blockType": "reporter",
                "text": "replace all of [finder] in [string] with [replacer]",
                "arguments": {
                    "finder": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "replacer": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "greaterOrEqual",
                "blockType": "Boolean",
                "text": "[string1] ≥ [string2]",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "lessOrEqual",
                "blockType": "Boolean",
                "text": "[string1] ≤ [string2]",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "jQuGet",
                "blockType": "reporter",
                "text": "get data from url: [myURL]",
                "arguments": {
                    "myURL": {
                        "type": "string",
                        "defaultValue": "http://google.com"
                    }
                }
            }],
            "menus": {
                supermath: this._formatMenu(['+', '-', '/', '*', '^', 'sqrt']),
            }
        };
    }
    clear_all_scores({}) {
        for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
		  players[playerIndex].score = 0;
		}
    }
	clear_all_players({}) {
		players.length = 0;
	}    
	get_player_count({}) {
        return players.length;
    }
    get_player_name({player_index}) {
        if ((player_index < 1) || (player_index > players.length))
		  return "";
	    else  
		  return players[player_index-1].name;
    }
	get_player_costume({player_index}) {
        if ((playerIndex < 1) || (playerIndex > players.length))
		  return 0;
	    else  
		  return players[playerIndex-1].costume; 
	}
	get_player_score({player_index}) {
		if ((playerIndex < 1) || (playerIndex > players.length))
		  return 0;
	    else  
		  return players[playerIndex-1].score;
	}
	change_player_score({player_index, scoreIncrement}) {
		if ((playerIndex > 0) && (playerIndex <= players.length))
		  players[playerIndex-1].score = players[playerIndex-1].score + scoreIncrement;
	}
    javablock({
        string
    }) {
        return eval(string);
    }
    blank({
        string
    }) {}
    itOfStr({
        num,
        string,
        seper
    }) {
        var str = string;
        var res = str.split(seper);
        return (res[num - 1]);
    }
    exclu({
        bool1,
        bool2
    }) {
        if (bool1 && bool2) {
            return false;
        } else {
            if (bool1) {
                return true;
            }
            if (bool2) {
                return true;
            }
        }
    }
    strCont({
        string1,
        string2
    }) {
        return string1.includes(string2);
    }
    dPrompt({
        prompty
    }) {
        return prompt(prompty);
    }
    repAll({
        finder,
        string,
        replacer
    }) {
        return string.replace(new RegExp(finder, 'gi'), replacer);
    }
    greaterOrEqual({
        string1,
        string2
    }) {
        return (string1 >= string2);
    }
    lessOrEqual({
        string1,
        string2
    }) {
        return (string1 <= string2);
    }
    jQuGet({
        myURL
    }) {

        $.ajaxSetup({
            async: false
        });
        $.get('https://cors-anywhere.herokuapp.com/' + myURL, function(data) {
            window.httpdata = data;
        });
        return window.httpdata;
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