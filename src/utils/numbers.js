export const formatNumber = (number) => {
	let newNumber = number;
	if (newNumber > 1000) {
		const suffixes = ['', 'k', 'm', 'b', 't'];
		const suffixNum = Math.floor(('' + newNumber).length / 3);
		let shortValue = '';
		for (let precision = 2; precision >= 1; precision--) {
			shortValue = parseFloat(
				(suffixNum !== 0
					? newNumber / Math.pow(1000, suffixNum)
					: newNumber
				).toPrecision(precision)
			);
			let dotLessShortValue = (shortValue + '').replace(
				/[^a-zA-Z 0-9]+/g,
				''
			);
			if (dotLessShortValue.length <= 2) {
				break;
			}
		}
		if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
		newNumber = shortValue + suffixes[suffixNum];
	}
	return newNumber;
};
