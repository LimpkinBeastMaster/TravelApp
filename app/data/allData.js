var allData = [
	//Tokyo//
	{ title: "Ultimate Japan Hike", user: "adam", start: "Tokyo", end:"Kyoto", likes: 32918 }, 
	{ title: "Handgliding Through South Japan", user: "ben", start: "Tokyo", end:"Kyoto", likes: 28074 },
	{ title: "Swimming With The Sharks", user: "jesus", start: "Shizouka", end:"Tokyo", likes: 24414 },
	{ title: "How To Meet Friends In Tokyo", user: "tim", start: "Tokyo", end:"Akita", likes: 28074 },
	{ title: "The Holy Path To Japan's Best Temples", user: "bogart", start: "Tokyo", end:"Matsumoto", likes: 22214 },
	{ title: "How To Ramen Like A Pro", user: "albert", start: "Tokyo", end:"Fukoka", likes: 19087 },
	{ title: "Getting Lost In Upper Japan", user: "megan", start: "Tokyo", end:"Tokyo", likes: 17762 },
	{ title: "Best View of Mt Fuji", user: "fran", start: "Tokyo", end: "Shizouka", likes: 13304 },
	{ title: "Izakaa And Where To Go", user: "sarah", start: "Tokyo", end:"Kyoto", likes: 10098 },
	{ title: "Top Ten Parks", user: "robert", start: "Tokyo", end:"Akita", likes: 9003 },
	{ title: "Hiking Through Northern Japan", user: "tim", start: "Tokyo", end:"Fukoka", likes: 8331 },
	{ title: "What to Do In Kyoto", user: "bob", start: "Kyoto", end:"Kyoto", likes: 4042 },
	//Beijing//
	{ title: "Bus Across China", user: "chris", start: "Beijing", end:"Hong Kong", likes: 62918 }, 
	{ title: "Hike from Beijing To Xilin Gol", user: "ben", start: "Beijing", end:"Xilin Gol", likes: 12474 },
	{ title: "China To Korea", user: "fred", start: "Beijing", end:"Seoul", likes: 85710 },
	{ title: "Explore Japan And China", user: "lisa", start: "Beijing", end:"Akita", likes: 93720 },
	{ title: "Get Shanghai'd", user: "amanda", start: "Beijing", end:"Shanghai", likes: 11020 },
	{ title: "The Ultimate Baozai", user: "albert", start: "Beijing", end:"Taipei", likes: 57930 },
	{ title: "Lost In Eastern China", user: "megan", start: "Beijing", end:"Suzhou", likes: 47910 },
	{ title: "4 Days On A Boat", user: "fran", start: "Beijing", end: "Wuhan", likes: 58839 },
	{ title: "NoodleWorld", user: "sarah", start: "Beijing", end:"Kyoto", likes: 85930 },
	{ title: "Shenzen Like A Pro", user: "robert", start: "Beijing", end:"Shenzen", likes: 1920 },
	{ title: "What Do To With 4 Days in Beijing", user: "tim", start: "Beijing", end:"Taipei", likes: 9670 },
	{ title: "Two Countries in 7 Days", user: "carmel", start: "Beijing", end:"Tokyo", likes: 1119 },
	//Sydney//
	{ title: "Ultimate Australia", user: "adam", start: "Sydney", end:"Perth", likes: 28578 }, 
	{ title: "Best Surfing In Melbourne", user: "frank", start: "Sydney", end:"Melbourne", likes: 96849 },
	{ title: "To Wong Foo", user: "helen", start: "Sydney", end:"Perth", likes: 75672 },
	{ title: "Melbourne To Auckland", user: "tim", start: "Melbourne", end:"Auckland", likes: 63571 },
	{ title: "Great Barrier Reef", user: "bogart", start: "Sydney", end:"Brisbane", likes: 96749 },
	{ title: "Barbecue Like An Australian", user: "yoni", start: "Sydney", end:"Sydney", likes: 1637 },
	{ title: "Australia Via Desert", user: "megan", start: "Sydney", end:"Perth", likes: 8849 },
	{ title: "Tazmani", user: "fran", start: "Sydney", end: "Hobart", likes: 6472 },
	{ title: "Top Hikes Around Sydney", user: "sarah", start: "Sydney", end:"Newcastle", likes: 9658 },
	{ title: "Top Ten Parks", user: "robert", start: "Sydney", end:"Geelong", likes: 7674},
	{ title: "Surfing in SouthEast Australia", user: "tim", start: "Sydney", end:"Adelaide", likes: 4535 },
	{ title: "What to Do In Sydney", user: "deitrich", start: "Sydney", end:"Sydney", likes: 1197 },
	//Manilla//
	{ title: "Hike Through the Philippines", user: "fred", start: "Manila", end:"Vigan", likes: 57483 }, 
	{ title: "Handgliding Around Manila", user: "ben", start: "Manila", end:"Manila", likes: 58382 },
	{ title: "Best Beach Resorts", user: "john", start: "Manila", end:"Zamboanga", likes: 79796 },
	{ title: "Swimming With Dolphins", user: "timmy", start: "Manila", end:"Naga", likes: 35262 },
	{ title: "Historic Manila", user: "bogart", start: "Manila", end:"Manila", likes: 10872 },
	{ title: "How To Ramen Like A Pro", user: "albert", start: "Manila", end:"Fukoka", likes: 85830 },
	{ title: "Must-See Philippines", user: "megan", start: "Manila", end:"Davao", likes: 70785 },
	{ title: "Foodie Guide To The Philippines", user: "fran", start: "Manila", end: "Tacloban", likes: 56768 },
	{ title: "Hike From Manila To Batangas", user: "emily", start: "Manila", end:"Batangas", likes: 7846 },
	{ title: "Laguna Del Bay", user: "robert", start: "Manila", end:"Cardona", likes: 4746 },
	{ title: "Hiking Through Northern Philippines", user: "travis", start: "Manila", end:"Aparri", likes: 38737 },
	{ title: "What to Do In Malina", user: "bob", start: "Manila", end:"Manila", likes: 4257 },
	//Los Angeles//
	{ title: "Camping In Joshua Tree", user: "anita", start: "Los Angeles", end:"Joshua Tree", likes: 32918 }, 
	{ title: "Stagecoach Like A Pro", user: "ben", start: "Los Angeles", end:"Palm Springs", likes: 28074 },
	{ title: "Highway 1 Roadtrip", user: "michael", start: "Los Angeles", end:"San Francisco", likes: 24414 },
	{ title: "Surfing In SoCal", user: "tim", start: "Los Angeles", end:"Santa Barbara", likes: 28074 },
	{ title: "Best Parks In California", user: "bradley", start: "Los Angeles", end:"Bishop", likes: 22214 },
	{ title: "Best Seafood in Malibu", user: "albert", start: "Los Angeles", end:"Malibu", likes: 19087 },
	{ title: "West Coast Tour", user: "megan", start: "Los Angeles", end:"Seattle", likes: 17762 },
	{ title: "Beach Bums", user: "fran", start: "Santa Monica", end: "San Diego", likes: 13304 },
	{ title: "Izakaa And Where To Go", user: "sarah", start: "Los Angeles", end:"Kyoto", likes: 10098 },
	{ title: "Weekend Ski Trip", user: "robert", start: "Los Angeles", end:"Mammoth", likes: 9003 },
	{ title: "The Redwoods", user: "tim", start: "San Francisco", end:"Vancouver", likes: 8331 },
	{ title: "Napa Wine Tour", user: "bob", start: "San Francisco", end:"San Francisco", likes: 4042 },
	//Mexico City//
	{ title: "Deep Sea Fishing", user: "albert", start: "Mexico City", end:"Puerto Vallerta", likes: 32563 }, 
	{ title: "Surfing In Baja", user: "robert", start: "Mexico City", end:"La Paz", likes: 29278 },
	{ title: "Best Breweries In Mexico", user: "silvia", start: "Hermosillo", end:"Mexico City", likes: 58483 },
	{ title: "How To Meet Friends In Mexico City", user: "alexander", start: "Mexico City", end:"Mexico City", likes: 57473 },
	{ title: "Teotihuacan", user: "bob", start: "Mexico City", end:"Teotihuacan", likes: 79786 },
	{ title: "Bike, Lobster, Drink", user: "albert", start: "Cabo San", end:"Tijuana", likes: 56453 },
	{ title: "Best Fish Tacos In Ensanada", user: "amanda", start: "Tijuana", end:"Ensanada", likes: 97869 },
	{ title: "Yucatan In 10 Days", user: "fran", start: "Cancun", end: "Campeche", likes: 35342 },
	{ title: "Izakaa And Where To Go", user: "sarah", start: "Mexico City", end:"Puerto Vallerta", likes: 68697 },
	{ title: "Mezcal Mexico", user: "sandra", start: "Mexico City", end:"Xalpao", likes: 1194 },
	{ title: "Belize", user: "kathy", start: "Belize City", end:"Punta Gorda", likes: 6957 },
	{ title: "What to Do In Puerto Vallerta", user: "bob", start: "Puerto Vallerta", end:"Puerto Vallerta", likes: 1826 },
	//Toronto
	{ title: "Tornto Poutine", user: "amanda", start: "Toronto", end:"Toronto", likes: 78674 }, 
	{ title: "Alberta Century", user: "beth", start: "Calgary", end:"Edmonton", likes: 94848 },
	{ title: "2 Days In Vancouver", user: "julia", start: "Vancouver", end:"Vancouver", likes: 36352 },
	{ title: "Ten Things To Do In Toronto", user: "ted", start: "Toronto", end:"Tornto", likes: 28979 },
	{ title: "Hockey Madness", user: "bogart", start: "Toronto", end:"Buffalo", likes: 68572 },
	{ title: "Niagra Via Canda", user: "albert", start: "Toronto", end:"Niagra Falls", likes: 57731 },
	{ title: "French Canadians' Guide To French Canadians", user: "megan", start: "Toronto", end:"Montreal", likes: 25750 },
	{ title: "Best View of Niagra", user: "fran", start: "Toronto", end: "Niagra Falls", likes: 47561 },
	{ title: "Oh Canada", user: "sarah", start: "Dartmouth", end:"Vancouver", likes: 58380 },
	{ title: "East Coast Road Trip", user: "robert", start: "Boston", end:"Charleston", likes: 1118 },
	{ title: "New York, New York", user: "timothy", start: "New York", end:"New York", likes: 5858 },
	{ title: "Ultimate George Washington", user: "brad", start: "Philadelphia", end:"Pittsburg", likes: 4090 }
	//Nuuk

	//Dublin

	//Casablanca
	
	//Israel
	
	//Dubai
	
	//Istanbul
	
	//Mumbai
	
	];

export default allData;