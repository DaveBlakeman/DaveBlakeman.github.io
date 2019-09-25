// Core, Team, and Official extensions can `require` VM code:
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');

// ...or VM dependencies:
const formatMessage = require('format-message');

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js

var players = [];

class IslandTest {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @return {object} This extension's metadata.
     */
    getInfo () {
        return {
            // Required: the machine-readable name of this extension.
            // Will be used as the extension's namespace.
            id: 'IslandTest',

            // Core extensions only: override the default extension block colors.
            color1: '#FF8C1A',
            color2: '#DB6E00',

            name: 'Island Test',

            blocks: [
                {
                    opcode: 'clear_all_scores', 
                    blockType: BlockType.COMMAND,
                    text: 'clear_all_scores',
                    arguments: {}
                }
            ]
        };
    };

    /**
     * Implement clear_all_scores.
     * @param {object} args - the block's arguments.
     * @property {string} MY_ARG - the string value of the argument.
     * @returns {string} a string which includes the block argument value.
     */
    clear_all_scores (args) {
		for (playerIndex = 0; playerIndex < players.length; playerIndex++) {
		  players[playerIndex].score = 0;
		}
    }
}

Scratch.extensions.register(new IslandTest());