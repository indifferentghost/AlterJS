module.exports = (sources = {
	head: 	 null,
	styles:  null,
	body:	   null,
	scripts: null
}) => (
`\t\t<form id='edit' name='edit' method='post' action='https://localhost:3443/'>
\t\t\t<input type='submit' />
${ Object.entries(sources).map((entry) => ( entry[0] !== 'filepath' ?
	`\t\t\t<textarea cols='40' name='${entry[0]}'>${(entry[1]).trim()}</textarea>` : ''
)).join('\n')
}
\t\t</form>`
);
