import { name, age } from './ian'
import { BaseData, Entity } from 'src/shared/shared'
import { PC_COMMANDS, COMMAND_TYPES } from 'src/shared/config'


export function init(): void {
	console.log('hi', { name, age })
}

function commander(arg: PC_COMMANDS): COMMAND_TYPES {
	switch (arg) {
		case PC_COMMANDS.SHOW_PITCHES:
		case PC_COMMANDS.ARSENAL:
		case PC_COMMANDS.CLEAR_RENDER_QUEUE:
		case PC_COMMANDS.CLEAR_PITCHES: {
			return 23;
		}
	}
}
