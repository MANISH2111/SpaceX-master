// const searchTerm = "g"
// let result: any= []

// export function getEachItem(object: any[]) {
//   object.forEach((item: any) => {
//     searchItem(item)
//   })
//   let uniqueResults = [...new Set(result)]
//   return uniqueResults.length
// };

// function searchItem(item: { [x: string]: any }) {
//   Object.keys(item).forEach(key => {
//     if (typeof item[key] === "object") {
//       searchItem(item[key])
//     }
//     if (typeof item[key] === "string") {
//       let searchAsRegEx = new RegExp(searchTerm, "gi");
//       if (item[key].match(searchAsRegEx)) {
//         result.push({[key]:item[key]})
//         console.log(result)
//       }
//     }
//   })
// }

// const data = [
// 	{
// 		a: 'somestring',
// 		b: 'theing',
// 	},
// 	{
// 		a: 'somg',
// 		b: 4,
// 	},
// 	{
// 		a: 'string',
// 		b: 23,
// 	},
// 	{
// 		a: 'estri',
// 		b: 2,
// 	},
// ];

// const launchJson = [
// 	{ placeholder: 'Rocket Name', dataSource: ['sdde', 'dff', 'dgre'] },
// 	{ placeholder: 'mission_name', dataSource: ['ssdd', 'dff'] },
// 	{ placeholder: 'site', dataSource: ['ssdd', 'ddff', 'dfggd'] },
// ];

// export const filterByValue = (arr = [], query = '') => {
// 	const reg = new RegExp(query, 'i');
// 	let x: { [x: string]: never; }[]=[]
// 	 arr.filter((item) => {
// 		let flag = false;
// 		let y;

// 		for (let prop in item) {
// 			if (reg.test(item[prop])) {
// 				flag = true;
// 				y = { [prop]: item[prop] };
// 				console.log(y)
// 				x.push(y)
// 			}
// 		}

// 	});
// 	return x
// };

// const D = [
// 	{
// 		a: 'manish',
// 		b: 'avinash',
// 		c: {
// 			d: 'chhagan',
// 		},
// 		e: {
// 			f: {
// 				g: 'mota',
// 			},
// 		},
// 	},
// 	{
// 		a: 'mah',
// 		b: 'anash',
// 		c: {
// 			d: 'cgan',
// 		},
// 		e: {
// 			f: {
// 				g: 'mta',
// 			},
// 		},
// 	},
// ];
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

// const D = [
// 	{
// 		a: 'manish',
// 		b: 'avinash',
// 		c: {
// 			d: 'chhagan',
// 		},
// 		e: {
// 			f: {
// 				g: 'mota',
// 			},
// 		},
// 	},
// 	{
// 		a: 'mah',
// 		b: 'anash',
// 		c: {
// 			d: 'cgan',
// 		},
// 		e: {
// 			f: {
//       	h:'msha',
// 				g: 'msha',
// 			},
// 		},
// 	},
// ];

// const searchTerm = "sh"
// let result= []

//  function getEachItem(object) {
//   object.forEach((item) => {
//     searchItem(item)
//   })
//   console.log('kkk',result)
//   return result.length
// }

// function searchItem(item) {
//   Object.keys(item).forEach(key => {
//     if (typeof item[key] === "object") {
//       searchItem(item[key])
//     }
//     if (typeof item[key] === "string") {
//       if(item[key].toLowerCase().search(searchTerm.toLowerCase())!=-1){
//       result.push({[key]:item[key]})
//       console.log('tt',result)
//       }

//     }
//   })
// }

// const newData=getEachItem(D)

// console.log(newData)
