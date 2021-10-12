const array1 = [
	{
		id: 1,
		name: "Rifki",
	},
	{
		id: 2,
		name: "Puja",
	},
	{
		id: 3,
		name: "Salsa",
	},
	{
		id: 4,
		name: "Nabila",
	},
	{
		id: 5,
		name: "Putra",
	},
];

const array2 = [
	{
		id: 3,
		name: "Salsa",
	},
	{
		id: 4,
		name: "Nabila",
	},
];

/* filter array of object by another array of object  */
const res = array1.filter((it) => !array2.find((itx) => it.name === itx.name));
console.log(res);
/* -------------------------------------------------- */
/* commit kedua */
