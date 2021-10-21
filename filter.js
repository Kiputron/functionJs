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
		name: "Salsa",
		harga: 300,
		perioode: "202021",
	},
	{
		name: "Nabila",
		id: 40000,
		perioode: "202021",
	},
	{
		name: "Nabila",
		id: 9999,
		perioode: "202022",
	},
];

/* filter array of object by another array of object  */
const res = array2.filter(
	(it) => array1.find((itx) => it.name === itx.name) && it.perioode === "202022"
);
console.log(res);
/* -------------------------------------------------- */
/* commit ketiga */
/* branch dev rifki */
