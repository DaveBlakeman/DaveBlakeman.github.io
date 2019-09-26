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
                }
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
                        "defaultValue": 1
                    }
                }
            }, {
                "opcode": "textif",
                "blockType": "reporter",
                "text": "if [bool] then [text1] else [text2]",
                "arguments": {
                    "bool": {
                        "type": "Boolean",
                        "defaultValue": ""
                    },
                    "text1": {
                        "type": "string",
                        "defaultValue": "hello"
                    },
                    "text2": {
                        "type": "string",
                        "defaultValue": "world"
                    }
                }
            }, {
                "opcode": "alertbox",
                "blockType": "command",
                "text": "alert [string]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": "hello world"
                    }
                }
            }, {
                "opcode": "whenThis",
                "blockType": "hat",
                "text": "when [bool]",
                "arguments": {
                    "bool": {
                        "type": "Boolean",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "mathy",
                "blockType": "reporter",
                "text": "[num1] [oper] [num2]",
                "arguments": {
                    "num1": {
                        "type": "number",
                        "defaultValue": ""
                    },
                    "oper": {
                        "type": "string",
                        "menu": "supermath",
                        "defaultValue": ""
                    },
                    "num2": {
                        "type": "number"
                    }
                }
            }, {
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "letters [num1] through [num2] of [string]",
                "arguments": {
                    "num1": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "num2": {
                        "type": "number",
                        "defaultValue": "5"
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "hello world"
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
        for (playerIndex = 0; playerIndex < players.length; playerIndex++) {
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
    power({
        num,
        power
    }) {
        return Math.pow(num, power);
    }
    textif({
        bool,
        text1,
        text2
    }) {
        if (bool) {
            return text1
        } else {
            return text2
        }

    }
    alertbox({
        string
    }) {
        window.alert(string);
    }
    whenThis({
        bool
    }) {
        return bool;
    }
    mathy({
        num1,
        oper,
        num2
    }) {
        if (oper === '+') {
            return (num1 + num2)
        }
        if (oper === '-') {
            return (num1 - num2)
        }
        if (oper === '*') {
            return (num1 * num2)
        }
        if (oper === '/') {
            return (num1 / num2)
        }
        if (oper === '^') {
            return Math.pow(num1, num2)
        }
        if (oper === 'sqrt') {
            return (num1 * (Math.sqrt(num2)))
        }
    }
    substringy({
        num1,
        num2,
        string
    }) {
        return string.substring(num1 - 1, num2);
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