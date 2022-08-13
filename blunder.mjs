import {Test} from './tools/code_analyzer.mjs'

/** The main class of the Blunder toolkit. */
export class Blunder {

	// ---------------------------------------------------------- STATIC FIELDS
	
	/** The list of tools available. */
	static tools = [];

	parameters = [];

	static test () {
		console.log("Tools: " + Blunder.tools.join(", "));
	}

}
