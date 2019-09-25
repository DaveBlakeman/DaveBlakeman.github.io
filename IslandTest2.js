class IslandTest {

    getInfo () {
        return {
            "id": "IslandTest",
            "name": "IslandTest",
            "blocks": [
                {
                    "opcode": "clear_all_scores", 
                    "blockType": "command",
                    "text": "clear all scores",
                    "arguments": {}
                }
            ]
        };
    }

    clear_all_scores () {
		return true;
    }
}

Scratch.extensions.register(new IslandTest());