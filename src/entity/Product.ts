

export type Product = {
  id: number;
  name: string;
  year: number;
  genre: string;
  rating: number;
  price: number;
  description: string;
  imageUrl: string;
};

export const allProducts: Product[] = [{
    id: 1,
    name: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    genre: "Action, Adventure, Sci-Fi",
    rating: 8.6,
    price: 139,
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/StarWarsMoviePoster1977.jpg/220px-StarWarsMoviePoster1977.jpg"  
},
{
    id: 2,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    genre: "Action, Adventure, Sci-Fi",
    rating: 8.7,
    price: 139,
    description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/SW_-_Empire_Strikes_Back.jpg/220px-SW_-_Empire_Strikes_Back.jpg"
},
{
    id: 3,
    name: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    genre: "Action, Adventure, Sci-Fi",
    rating: 8.3,
    price: 129,
    description: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg"
},
{
    id: 4,
    name: "Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    price: 149,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
},
{
    id: 5,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: "Action, Adventure, Drama",
    rating: 8.8,
    price: 139,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg"
},
{
    id: 6,
    name: "The Lord of the Rings: The Two Towers",
    year: 2002,
    genre: "Action, Adventure, Dram",
    rating: 8.7,
    price: 139,
    description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg"
},
{
    id: 7,
    name: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: "Action, Adventure, Drama",
    rating: 8.9,
    price: 139,
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg"
},
{
    id: 8,
    name: "Avatar",
    year: 2009,
    genre: "Action, Adventure, Fantasy",
    rating: 7.8,
    price: 129,
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg"
},
{
    id: 9,
    name: "The Hobbit: An Unexpected Journey",
    year: 2012,
    genre: "Adventure, Fantasy",
    rating: 7.8,
    price: 129,
    description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg"
},
{
    id: 10,
    name: "The Hobbit: The Desolation of Smaug",
    year: 2013,
    genre: "Adventure, Fantasy",
    rating: 7.8,
    price: 99,
    description: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Smaug_theatrical_poster.jpg"
},
{
    id: 11,
    name: "The Hobbit: The Battle of the Five Armies",
    year: 2014,
    genre: "Adventure, Fantasy",
    rating: 7.4,
    price: 99,
    description: "Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg"
},
{
    id: 12,
    name: "Star Wars: The Force Awakens",
    year: 2015,
    genre: "Action, Adventure, Fantasy",
    rating: 7.8,
    price: 129,
    description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
},
{
    id: 13,
    name: "Star Wars: The Last Jedi",
    year: 2017,
    genre: "Action, Adventure, Fantasy",
    rating: 7.0,
    price: 99,
    description: "The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
},
{
    id: 14,
    name: "Star Wars: Episode IX - The Rise of Skywalker",
    year: 2019,
    genre: "Action, Adventure, Fantasy",
    rating: 6.5,
    price: 89,
    description: "In the riveting conclusion of the landmark Skywalker saga, new legends will be born-and the final battle for freedom is yet to come.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg"

}];