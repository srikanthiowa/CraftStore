(function(){
	var app = angular.module('store', []);

	app.controller("StoreController", function(){
		this.products = gems;
	});

	app.controller("TabController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checktab){
			return this.tab === checktab;
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.9,
		description: 'This is a beautiful gem!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full:"Pentakis_dodecahedron.png",
				thumb:"dodecahedron.JPG"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}
		]
	},
	{
		name: 'Pentagonel Gem',
		price: 5.95,
		description: 'This is a wonderful gem!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full:"Pentagonal_truncated_trapezohedron.png",
				thumb:"120px-Pentagonal_truncated_trapezohedron.png"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}
		]
	},
	{
		name: 'Octahedron Gem',
		price: 6.95,
		description: 'This is a stylish gem!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				full:"Truncated_octahedron.png",
				thumb:"images.jpg"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com"
			}
		]
	}
	];
})();
