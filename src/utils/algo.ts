const data = [
	{
		a: 'somestring',
		b: 'theing',
	},
	{
		a: 'somg',
		b: 4,
	},
	{
		a: 'string',
		b: 23,
	},
	{
		a: 'estri',
		b: 2,
	},
];

const launchJson = [
	{ placeholder: 'Rocket Name', dataSource: ['sdde', 'dff', 'dgre'] },
	{ placeholder: 'mission_name', dataSource: ['ssdd', 'dff'] },
	{ placeholder: 'site', dataSource: ['ssdd', 'ddff', 'dfggd'] },
];

export const filterByValue = (arr = [], query = '') => {
	const reg = new RegExp(query, 'i');
	return arr.filter((item) => {
		let flag = false;
		let y;

		for (let prop in item) {
			if (reg.test(item[prop])) {
				flag = true;

				y = { [prop]: item[prop] };
				console.log(y);
			}
		}

		return flag;
	});
};



const D = [
	{
		a: 'manish',
		b: 'avinash',
		c: {
			d: 'chhagan',
		},
		e: {
			f: {
				g: 'mota',
			},
		},
	},
	{
		a: 'mah',
		b: 'anash',
		c: {
			d: 'cgan',
		},
		e: {
			f: {
				g: 'mta',
			},
		},
	},
];
// const data = D.map((item, index) => {
// 	return null;
// });

// console.log(data);

//loop the data Source Array with complexity O(N)
//

// const search(object,array,search text)

// {
// placeholder:'Rocket name',dataSource:['aaa','ss',]
// }
