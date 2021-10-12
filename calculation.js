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
console.log("hasil ->", res);
