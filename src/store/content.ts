export interface IDish {
	dishTitle: string
	img: string
	price: string
	weight: string
}

export interface IDishesCategory {
	category: string
	categoryTitle: string
	dishes: IDish[]
}

export const dishes: IDishesCategory[] = [
	{
		category: 'businessLunch',
		categoryTitle: 'Business lunch',
		dishes: [
			{
				dishTitle: 'Greek',
				img: 'src/assets/img/dishes/salad.jpg',
				price: '30',
				weight: '200',
			},
			{
				dishTitle: 'Borch',
				img: 'src/assets/img/dishes/soup.jpg',
				price: '50',
				weight: '220',
			},
			{
				dishTitle: 'Chicken',
				img: 'src/assets/img/dishes/chicken.jpg',
				price: '70',
				weight: '200',
			},
		],
	},
	{
		category: 'salads',
		categoryTitle: 'Salads',
		dishes: [
			{
				dishTitle: 'Greek',
				img: 'src/assets/img/dishes/salad.jpg',
				price: '30',
				weight: '200',
			},
		],
	},
	{
		category: 'soups',
		categoryTitle: 'Soups',
		dishes: [
			{
				dishTitle: 'Borch',
				img: 'src/assets/img/dishes/soup.jpg',
				price: '50',
				weight: '220',
			},
		],
	},
	{
		category: 'warmMeals',
		categoryTitle: 'Warm meals',
		dishes: [
			{
				dishTitle: 'Kebab',
				img: 'src/assets/img/dishes/kebab.jpg',
				price: '80',
				weight: '200',
			},
			{
				dishTitle: 'Fish',
				img: 'src/assets/img/dishes/fish.jpg',
				price: '100',
				weight: '200',
			},
			{
				dishTitle: 'Chicken',
				img: 'src/assets/img/dishes/chicken.jpg',
				price: '70',
				weight: '200',
			},
		],
	},
	{
		category: 'desserts',
		categoryTitle: 'Desserts',
		dishes: [
			{
				dishTitle: 'Pancakes',
				img: 'src/assets/img/dishes/pancakes.jpg',
				price: '50',
				weight: '220',
			},
		],
	},
]
