import { name, age } from './ian'
import { BaseData, Entity } from '../shared/shared'


export function init(): void {
	console.log('hi', { name, age })
}
