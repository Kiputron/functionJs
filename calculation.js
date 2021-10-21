const array = [
	{
		month: "January",
		data: [
			{
				name: "ayam",
				price: 1000,
			},
			{
				name: "sapi",
				price: 2000,
			},
			{
				name: "kuda",
				price: 3000,
			},
		],
	},
	{
		month: "February",
		data: [
			{
				name: "ayam",
				price: 1000,
			},
			{
				name: "sapi",
				price: 2000,
			},
			{
				name: "kuda",
				price: 3000,
			},
		],
	},
	{
		month: "March",
		data: [
			{
				name: "ayam",
				price: 3000,
			},
			{
				name: "sapi",
				price: 2000,
			},
			{
				name: "kuda",
				price: 3000,
			},
		],
	},
];
const vanilla = array.map((it) =>
	it.data.reduce((a, { price }) => a + price, 0)
);
const res = vanilla.reduce((a, b) => a + b, 0);
console.log("hasil ->", vanilla);

// const a = [{ total: 2000 }, { total: 2000 }, { total: 2000 }, { total: 2000 }];

// const b = a.reduce((x, { total }) => x + total, 0);

// console.log(b);
