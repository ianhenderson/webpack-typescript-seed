interface Person {
	firstName: string
	lastName?: string
}

interface BaseData {
	eid: Number
	_keys: Array<string>
}


class Entity {
	eid: Number
	_keys: Array<string>
	type: String

	// constructor(attrs) {
	constructor(attrs: BaseData) {

		const {
			eid,
			_keys
		} = attrs

		for (let k in attrs) {
			this[k] = attrs[k]
		}

		this._keys = Object.keys(attrs)
		this.eid = eid
		this.type

	}

	toJSON(flags = []) {

		let output = {
			eid: this.eid,
			type: this.type
		}

		flags.forEach(f => {
			if (this._keys.indexOf(f) === 0) return;
			else {
				output[f] = this[f]
			}
		})

		return output

	}
}
