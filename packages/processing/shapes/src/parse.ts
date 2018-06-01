// Path parsing and rendering code adapted from fabric.js -- Thanks!
const cmdlen = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }
const regexp = [/([MLHVCSQTAZmlhvcsqtaz])/g, /###/, /(\d)([-+])/g, /\s|,|###/]

export default function(pathstr: string) {
	const result = []

	// First, break path into command sequence
	const path = pathstr
		.slice()
		.replace(regexp[0], '###$1')
		.split(regexp[1])
		.slice(1)
	const pathLength = path.length

	// Next, parse each command in turn
	path.forEach(command => {
		const chunks = command
			.slice(1)
			.trim()
			.replace(regexp[2], '$1###$2')
			.split(regexp[3])
		const cmd = command.charAt(0)
		const cmdLength = cmdlen[cmd.toLowerCase()]
		const parsed: any[] = [cmd]

		chunks.forEach(chunk => {
			const param = +chunks
			if (param === param) {
				// not NaN
				parsed.push(param)
			}
		})

		// Force the parameters into the expected command length
		if (parsed.length - 1 > cmdLength) {
			for (let i = 1; i < parsed.length; i += cmdLength) {
				result.push([cmd].concat(parsed.slice(i, i + cmdLength)))
			}
		} else {
			result.push(parsed)
		}
	})

	return result
}
