const products = [
  {
    "title": "Fancy Feast Grilled Seafood Feast Variety Pack Canned Cat Food",
    "price": 190000,
    "description": "Variety pack of gourmet cat food keeps finicky eaters interested and eating with palatable flavors. Serve alone or mix with dry food for a delectable texture—it’s a great way to add moisture to your cat’s diet. Made in the USA with vitamins and minerals, delivering a 100% complete and balanced nutrition.",
    "image": "https://image.chewy.com/is/image/catalog/76096_MAIN._AC_SL1200_V1667518942_.jpg",
    "category": "Wet Food",
    "rating": {
      "rate": 5,
      "count": 100
    }
  },
  {
    "title": "Friskies Surfin' & Turfin' Favorites Variety Pack Canned Cat Food, 5.5-oz, case of 40",
    "price": 650000,
    "description": "40 mouth-watering meals for your mini mate. Convenient 5.5-ounce cans of high-protein wet cat food. Purr-pared to provide 100% complete and balanced nutrition. Features shredded chunks of poultry, meat or fish and savory gravy or juice.  Crafted with the tempting textures that cats love and flavors that are paw-sitively irresistible.",
    "image": "https://image.chewy.com/is/image/catalog/142563_MAIN._AC_SL1200_V1590595282_.jpg",
    "category": "Wet food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Friskies Shreds Variety Pack Canned Cat Food",
    "price": 350000,
    "description": "Variety pack features satisfying recipes with real meat for the high-protein nutrition and flavor your little carnivore craves. Enhanced with vitamins and minerals for overall well-being, and essential taurine for heart and vision health. Provides a 100% complete and balanced meal for cats and kittens, on its own or as a delicious kibble topper.",
    "image": "https://image.chewy.com/is/image/catalog/148074_MAIN._AC_SL1200_V1657655672_.jpg",
    "category": "wet food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Purina ONE",
    "price": 45000,
    "description": "Support your furry friend with this digestive dry cat food, which is formulated to help maintain microbiome balance and contains prebiotic fiber for gut health and immune support.",
    "image": "https://image.chewy.com/is/image/catalog/91682_PT1._AC_SL1200_V1666043876_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 10
    }
  },
  {
    "title": "GKitten Chow Nurture Muscle & Brain Development Dry Cat Food",
    "price": 30000,
    "description": "Real farm-raised chicken helps create a high protein dry kitten food that supports a kitten's development of lean muscles as she jumps and plays",
    "image": "https://image.chewy.com/is/image/catalog/100176_MAIN._AC_SL1200_V1630359071_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Cat Chow Indoor Hairball & Healthy Weight Dry Cat Food",
    "price": 55000,
    "description": "A natural fiber blend in every serving helps control hairballs and promotes your furry friend's healthy digestion.",
    "image": "https://image.chewy.com/is/image/catalog/173768_MAIN._AC_SL1200_V1669908466_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }

  },
  {
    "title": "Iams ProActive Health Indoor Weight & Hairball Care Dry Cat Food",
    "price": 25000,
    "description": "Dry kibble for adult cats designed to support healthy weight and reduce hairballs ",
    "image": "https://image.chewy.com/is/image/catalog/93653_MAIN._AC_SL1200_V1609975950_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rachael Ray Nutrish Indoor Complete Chicken with Lentils & Salmon Recipe Natural Dry Cat Food",
    "price": 60000,
    "description": "Real chicken is the #1 ingredient. This natural cat food helps support your kitty’s indoor lifestyle",
    "image": "https://image.chewy.com/is/image/catalog/108512_MAIN._AC_SL1200_V1657655131_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "American Journey Indoor Cat Total Health Formula Chicken & Brown Rice Recipe Dry Cat Food, 15lb bag",
    "price": 40000,
    "description": "Complete and balanced indoor formula is packed with nutrients to support your cat’s nose-to-tail health.",
    "image": "https://image.chewy.com/is/image/catalog/299537_MAIN._AC_SL1200_V1670015550_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Frisco Multi-Cat Unscented Clumping Clay Cat Litter",
    "price": 350000,
    "description": "Odor-busting, kitty-preferred litter from Frisco, by Chewy. Natural, unscented clay litter forms hard clumps for easy scooping and faster cleanup, ideal for sifting and mechanical boxes as well as multi-cat households.",
    "image": "https://image.chewy.com/is/image/catalog/103790_MAIN._AC_SL1200_V1657654934_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Sheba Perfect Portions Cuts in Gravy Multipack Poultry Entrees Wet Cat Food Trays, 2.6-oz, case of 12 twin-packs",
    "price": 40000,
    "description": "Lets you feed a fresh, perfectly cat-sized portion for every meal—great for cats who hate leftovers!",
    "image": "https://image.chewy.com/is/image/catalog/126366_MAIN._AC_SL1200_V1657655408_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Friskies Gravy Swirlers Chicken & Salmon Flavor Dry Cat Food",
    "price": 60000,
    "description": "With two cat-favorite flavors—chicken and salmon combine to create the taste cats instinctually crave.",
    "image": "https://image.chewy.com/is/image/catalog/148060_MAIN._AC_SL1200_V1577729895_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Meow Mix Tender Centers Basted Bites Beef & Salmon Flavors Dry Cat Food",
    "price": 30000,
    "description": "Cat kibble containing yummy flavors of beef and salmon that your cat naturally craves",
    "image": "https://image.chewy.com/is/image/catalog/225314_MAIN._AC_SL1200_V1661377311_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }, {
    "title": "Tiki Cat Aloha Friends Variety Pack Grain-Free Wet Cat Food",
    "price": 35000,
    "description": "Variety pack includes recipes with wild-caught flaked tuna, tilapia, and shrimp for the animal-sourced protein carnivores thrive on.",
    "image": "https://image.chewy.com/is/image/catalog/102931_MAIN._AC_SL1200_V1650698783_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Fancy Feast Gourmet Filet Mignon Flavor with Real Seafood & Shrimp Dry Cat Food",
    "price": 40000,
    "description": "Premium dry cat food delivers 100 percent complete and balanced nutrition and is 100 percent made to delight even the pickiest eaters.",
    "image": "https://image.chewy.com/is/image/catalog/76150_MAIN._AC_SL1200_V1664833103_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Meow Mix Tender Favorites with Real Tuna & Whole Shrimp in Sauce Cat Food Trays, 2.75-oz, case of 12",
    "price": 400000,
    "description": "Real tuna and whole shrimp in a savory sauce.",
    "image": "https://image.chewy.com/is/image/catalog/130523_MAIN._AC_SL1200_V1670940347_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "9 Lives Seafood & Poultry Favorites Variety Pack Canned Cat Food, 5.5-oz, case of 24",
    "price": 40000,
    "description": "Made with real chicken, tuna, and ocean whitefish.",
    "image": "https://image.chewy.com/is/catalog/102046_MAIN._AC_SL1200_V1466172055_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Cat Chow Naturals Indoor with Real Chicken & Turkey Dry Cat Food",
    "price": 50000,
    "description": "Natural Purina dry cat food nutrition with high-quality ingredients like real turkey and real chicken as the number 1 ingredient for a taste your cat will enjoy.",
    "image": "https://image.chewy.com/is/image/catalog/100152_MAIN._AC_SL1200_V1661831182_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Bundle: Fancy Feast Medleys Florentine Collection Pack Canned Food + Purely Natural Treats Variety Pack Cat Treats",
    "price": 60000,
    "description": "Bistro-inspired wet food recipes feature real meats and veggies in sauce for the high-protein nutrition your little carnivore craves",
    "image": "https://image.chewy.com/is/image/catalog/297940_MAIN._AC_SL1200_V1621297943_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Fancy Feast Gourmet Naturals Wild Alaskan Salmon & Shrimp Recipe in Gravy Canned Cat Food, 3-oz, case of 12",
    "price": 500000,
    "description": "Real fish broth and salmon are the first ingredients, delivering a protein-packed flavor she'll crave.",
    "image": "https://image.chewy.com/is/image/catalog/155541_MAIN._AC_SL1200_V1663019119_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Meow Mix Simple Servings Seafood Variety Pack Cat Food Trays",
    "price": 250000,
    "description": "Made with real fish including tuna, mackerel and more, as well as real vegetables, for 100% complete and balanced nutrition.",
    "image": "https://image.chewy.com/is/image/catalog/125221_MAIN._AC_SL1200_V1661377800_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Blue Buffalo Indoor Hairball & Weight Control Chicken & Brown Rice Recipe Adult Dry Cat Food",
    "price": 50000,
    "description": "Made with tasty, real chicken as the first ingredient for the high-quality protein your kitty deserves.",
    "image": "https://image.chewy.com/is/image/catalog/84167_MAIN._AC_SL1200_V1668762346_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Iams ProActive Health Healthy Adult Original with Chicken Dry Cat Food",
    "price": 30000,
    "description": "Dry kibble to support adult cats’ overall healthy and provide energy.",
    "image": "https://image.chewy.com/is/image/catalog/93642_MAIN._AC_SL1200_V1609975380_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Fancy Feast Gourmet Ocean Fish & Salmon & Accents of Garden Greens Dry Cat Food",
    "price": 20000,
    "description": "Premium dry cat food delivers 100 percent complete and balanced nutrition and is 100 percent made to delight even the pickiest eaters. ",
    "image": "https://image.chewy.com/is/image/catalog/76155_MAIN._AC_SL1200_V1664834508_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Fancy Feast Poultry & Beef Classic Pate Variety Pack Canned Cat Food, 3-oz, case of 24",
    "price": 50000,
    "description": "Provides a 100% complete and balanced meal with real meat as the very first ingredient",
    "image": "https://image.chewy.com/is/image/catalog/76049_MAIN._AC_SL1200_V1606678349_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Meow Mix Tender Favorites Poultry & Beef Cat Food Trays Variety Pack, 2.75-oz, case of 24",
    "price": 40000,
    "description": "A hearty flavor that even the fussiest kitties will love, Made with real chicken, beef and turkey ",
    "image": "https://image.chewy.com/is/image/catalog/100237_MAIN._AC_SL1200_V1670940413_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Friskies Chicken Lovers Variety Pack Canned Cat Food, 5.5-oz, case of 32",
    "price": 250000,
    "description": "32 mouth-watering meals for your mini mate.",
    "image": "https://image.chewy.com/is/image/catalog/76424_MAIN._AC_SL1200_V1657661022_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Meow Mix Seafood Medley Dry Cat Food",
    "price": 30000,
    "description": "Omega fatty acids for skin and coat health",
    "image": "https://image.chewy.com/is/image/catalog/99971_MAIN._AC_SL1200_V1670620269_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Hill's Science Diet Adult Indoor Chicken Recipe Dry Cat Food",
    "price": 40000,
    "description": "High-quality ingredients and healthy fiber supports digestive health for a cleaner litter box. ",
    "image": "https://image.chewy.com/is/image/catalog/48900_MAIN._AC_SL1200_V1658453100_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Friskies Lil' Gravies Variety Pack Cat Food Complement, 1.55-oz, case of 18",
    "price": 20000,
    "description": "Cat food complement variety pack in tasty roasted chicken, savory salmon, roasted turkey and roast beef flavors.",
    "image": "https://image.chewy.com/is/image/catalog/266196_MAIN._AC_SL1200_V1633990578_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Purina Fancy Feast With Savory Chicken & Turkey Dry Cat Food",
    "price": 100000,
    "description": "Premium dry cat food delivers 100 percent complete and balanced nutrition and is 100 percent made to delight even the pickiest eaters..",
    "image": "https://image.chewy.com/is/image/catalog/76145_MAIN._AC_SL1200_V1664834809_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "9 Lives Meaty Favorites Variety Pack Canned Cat Food, 5.5-oz, case of 36",
    "price": 40000,
    "description": "Made with real chicken, beef & seafood",
    "image": "https://image.chewy.com/is/catalog/100311_MAIN._AC_SL1200_V1463067145_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Purina Beyond Simply Indoor Wild-Caught Salmon, Egg & Sweet Potato Recipe Grain-Free Dry Cat Food",
    "price": 20000,
    "description": "High in protein and made with real wild-caught salmon as the #1 ingredient.",
    "image": "https://image.chewy.com/is/image/catalog/148008_MAIN._AC_SL1200_V1626906414_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Purina Friskies Farm Favorites With Chicken Dry Cat Food",
    "price": 150000,
    "description": "Dry food with natural, farm-raised chicken, carrots and spinach that gives your paw-tner a flavorful variety.",
    "image": "https://image.chewy.com/is/image/catalog/214335_MAIN._AC_SL1200_V1640893920_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "ORIJEN Original Grain-Free Dry Cat Food",
    "price": 30000,
    "description": "Crafted with 90% premium meat and fish ingredients to support healthy digestion, skin and coat health, and heart health.",
    "image": "https://image.chewy.com/is/image/catalog/101300_MAIN._AC_SL1200_V1628118380_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Rachael Ray Nutrish Natural Chicken & Brown Rice Recipe Dry Cat Food",
    "price": 30000,
    "description": "Real U.S. farm-raised chicken is the #1 ingredient in this natural cat food with added vitamins and minerals. This high quality protein helps in maintaining healthy organs and lean muscles. ",
    "image": "https://image.chewy.com/is/image/catalog/77993_MAIN._AC_SL1200_V1657661028_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  },
  {
    "title": "Inaba Twin Packs Tuna & Chicken with Scallop Recipe in Scallop Broth Grain-Free Cat Food Topper, 1.4-oz, pack of 2",
    "price": 30000,
    "description": "2-pack of cat food topper pouches with chicken, tuna and scallops. Crafted with 100% natural chicken breast flakes, shredded wild tuna and scrumptious scallops in a savory scallop broth gelée",
    "image": "https://image.chewy.com/is/image/catalog/235970_MAIN._AC_SL1200_V1591633718_.jpg",
    "category": "dry food",
    "rating": {
      "rate": 5,
      "count": 200
    }
  }
  
]

module.exports = products;



