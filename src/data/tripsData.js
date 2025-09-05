const tripsData = [
    {
        id: 1,
        title: "Romantic Getaway in Paris",
        location: "Paris, France",
        price: 1200,
        rating: 4.8,
        description:
            "Enjoy a romantic escape in the City of Light with guided tours, Seine river cruises, and gourmet dining.",
        images: [
            "/images/Romantic_Getaway_in_Paris.jpg",
            "/images/Romantic_Getaway_in_Paris_2.jpg",
            "/images/Romantic_Getaway_in_Paris_3.jpg",
        ],

        video: "https://www.youtube.com/embed/gBs-uvrYUfo?si=3HrFgCH-hKXXM5_m",
        accommodations: [
            { type: "Hotel", name: "Le Meurice", rating: 5 },
            { type: "Hostel", name: "Paris Youth Hostel", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Charles de Gaulle Airport", price: "$600", time: "7h" },
            { type: "Train", info: "Eurostar from London", price: "$120", time: "2h 30m" },
        ],
    },
    {
        id: 2,
        title: "Adventure in the Swiss Alps",
        location: "Zermatt, Switzerland",
        price: 1800,
        rating: 4.9,
        description:
            "Experience breathtaking hikes, skiing, and mountain climbing in the iconic Swiss Alps.",
        images: [
            "/images/Adventure_in_the_Swiss_Alps.jpg",
            "/images/Adventure_in_the_Swiss_Alps_2.jpg",
            "/images/Adventure_in_the_Swiss_Alps_3.jpg",
        ],
        video: "https://www.youtube.com/embed/linlz7-Pnvw?si=_ORqUNvcXSSnDtwH",
        accommodations: [
            { type: "Resort", name: "Matterhorn Resort", rating: 5 },
            { type: "Hotel", name: "Alpine Lodge", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Zurich International Airport", price: "$700", time: "9h" },
            { type: "Train", info: "Glacier Express", price: "$250", time: "3h" },
        ],
    },
    {
        id: 3,
        title: "Beach Paradise in Maldives",
        location: "Malé, Maldives",
        price: 2500,
        rating: 4.9,
        description:
            "Relax on crystal-clear beaches, enjoy luxury resorts, and go snorkeling in vibrant coral reefs.",
        images: [
            "/images/Beach_Paradise_in_Maldives.jpg",
            "/images/Beach_Paradise_in_Maldives_2.jpg",
            "/images/Beach_Paradise_in_Maldives_3.jpg",
        ],
        video: "https://www.youtube.com/embed/Dq1M7e94bSE?si=4eh6wQzEqvU7L1-D",
        accommodations: [
            { type: "Resort", name: "Sun Siyam Iru Fushi", rating: 5 },
            { type: "Hotel", name: "Malé Seaside Hotel", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Velana International Airport", price: "$1000", time: "12h" },
            { type: "Boat", info: "Speedboat transfers", price: "$50", time: "30m" },
        ],
    },
    {
        id: 4,
        title: "Safari Adventure in Kenya",
        location: "Masai Mara, Kenya",
        price: 2100,
        rating: 1.6,
        description:
            "Witness the Great Migration, explore wildlife safaris, and enjoy luxury tents in the wilderness.",
        images: [
            "/images/Safari_Adventure_in_Kenya.jpg",
            "/images/Safari_Adventure_in_Kenya_2.jpg",
            "/images/Safari_Adventure_in_Kenya_3.jpg",
        ],
        video: "https://www.youtube.com/embed/eQfiVE6NuNo?si=OZ7E39OPhuGmBfpj",
        accommodations: [
            { type: "Lodge", name: "Masai Safari Lodge", rating: 5 },
            { type: "Camp", name: "Savannah Tents", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Jomo Kenyatta Airport", price: "$850", time: "11h" },
            { type: "Car", info: "4x4 Jeep Safari", price: "$200", time: "5h" },
        ],
    },
    {
        id: 5,
        title: "Tokyo City Exploration",
        location: "Tokyo, Japan",
        price: 1600,
        rating: 4.8,
        description:
            "Discover Japan’s futuristic cityscapes, traditional temples, anime culture, and world-class sushi.",
        images: [
            "/images/Tokyo_City_Exploration.jpg",
            "/images/Tokyo_City_Exploration_2.jpg",
            "/images/Tokyo_City_Exploration_3.jpg",
        ],
        video: "https://www.youtube.com/embed/0MQKLUkAUf8?si=DeYv2mK1bw4Xorc6",
        accommodations: [
            { type: "Hotel", name: "Tokyo Grand Hotel", rating: 5 },
            { type: "Capsule", name: "Shinjuku Capsule Inn", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Narita International Airport", price: "$900", time: "10h" },
            { type: "Train", info: "Shinkansen Bullet Train", price: "$150", time: "2h" },
        ],
    },
    {
        id: 6,
        title: "Luxury Escape in Dubai",
        location: "Dubai, UAE",
        price: 2300,
        rating: 4.9,
        description:
            "Enjoy the opulence of Dubai with luxury shopping, desert safaris, and iconic skyscrapers.",
        images: [
            "/images/Luxury_Escape_in_Dubai_2.jpg",
            "/images/Luxury_Escape_in_Dubai.jpg",
            "/images/Luxury_Escape_in_Dubai_3.jpg",
        ],
        video: "https://www.youtube.com/embed/5zQrsE3uVu0?si=K5TMFXxVvfhEP4Wo",
        accommodations: [
            { type: "Hotel", name: "Burj Al Arab", rating: 5 },
            { type: "Hotel", name: "Atlantis The Palm", rating: 5 },
        ],
        transport: [
            { type: "Flight", info: "Dubai International Airport", price: "$750", time: "8h" },
            { type: "Car", info: "Luxury SUV rentals", price: "$100/day", time: "Flexible" },
        ],
    },
    {
        id: 7,
        title: "Historical Wonders of Rome",
        location: "Rome, Italy",
        price: 1400,
        rating: 2.3,
        description:
            "Step back in time with visits to the Colosseum, Roman Forum, and Vatican City.",
        images: [
            "/images/Historical_Wonders_of_Rome.jpg",
            "/images/Historical_Wonders_of_Rome_2.jpg",
            "/images/Historical_Wonders_of_Rome_3.jpg",
        ],
        video: "https://www.youtube.com/embed/73Wb2NxGi14?si=rZRS56krkbOMEhPt",
        accommodations: [
            { type: "Hotel", name: "Hotel Quirinale", rating: 4 },
            { type: "Hostel", name: "YellowSquare Rome", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Fiumicino Airport", price: "$700", time: "9h" },
            { type: "Bus", info: "Local bus service", price: "$5", time: "30m" },
        ],
    },
    {
        id: 8,
        title: "Sydney Coastal Adventure",
        location: "Sydney, Australia",
        price: 2200,
        rating: 4,
        description:
            "Enjoy the famous Opera House, Bondi Beach, and scenic coastal walks.",
        images: [
            "/images/Sydney_Coastal_Adventure.jpg",
            "/images/Sydney_Coastal_Adventure_2.jpg",
            "/images/Sydney_Coastal_Adventure_3.jpg",
        ],
        video: "https://www.youtube.com/embed/kbDoroR0UW4?si=LwtVLwCsMeT65USz",
        accommodations: [
            { type: "Hotel", name: "Sydney Harbour Marriott", rating: 5 },
            { type: "Hostel", name: "Wake Up! Sydney", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Sydney Kingsford Airport", price: "$1200", time: "15h" },
            { type: "Bus", info: "City sightseeing buses", price: "$30", time: "Day pass" },
        ],
    },
    {
        id: 9,
        title: "Cultural Journey in Istanbul",
        location: "Istanbul, Turkey",
        price: 1300,
        rating: 3,
        description:
            "Explore the Hagia Sophia, Blue Mosque, Grand Bazaar, and Bosphorus cruise.",
        images: [
            "/images/Cultural_Journey_in_Istanbul.jpg",
            "/images/Cultural_Journey_in_Istanbul_2.jpg",
            "/images/Cultural_Journey_in_Istanbul_3.jpg",
        ],
        video: "https://www.youtube.com/embed/y_xM39S_kA4?si=l7gj6rvC7pymz2sZ",
        accommodations: [
            { type: "Hotel", name: "Four Seasons Bosphorus", rating: 5 },
            { type: "Hotel", name: "Sultan Hostel", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Istanbul Airport", price: "$650", time: "8h" },
            { type: "Ferry", info: "Bosphorus tours", price: "$20", time: "2h" },
        ],
    },
    {
        id: 10,
        title: "Cape Town Coastal Retreat",
        location: "Cape Town, South Africa",
        price: 1700,
        rating: 4.7,
        description:
            "Hike Table Mountain, visit Robben Island, and explore stunning beaches.",
        images: [
            "/images/Cape_Town_Coastal_Retreat.jpg",
            "/images/Cape_Town_Coastal_Retreat_2.jpg",
            "/images/Cape_Town_Coastal_Retreat_3.jpg",
        ],
        video: "https://www.youtube.com/embed/MNR7Fi8OsBU?si=7x_mcntakex_3GQQ",
        accommodations: [
            { type: "Hotel", name: "One&Only Cape Town", rating: 5 },
            { type: "Guesthouse", name: "Cape Heritage Hotel", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Cape Town Intl Airport", price: "$950", time: "13h" },
            { type: "Car", info: "Car rentals for coastal drives", price: "$40/day", time: "Flexible" },
        ],
    },
    {
        id: 11,
        title: "New York City Lights",
        location: "New York, USA",
        price: 1500,
        rating: 4.5,
        description:
            "Explore Times Square, Broadway, Central Park, and the Statue of Liberty.",
        images: [
            "/images/New_York_City_Lights.jpg",
            "/images/New_York_City_Lights_2.jpg",
            "/images/New_York_City_Lights_3.jpg",
        ],
        video: "https://www.youtube.com/embed/h3fUgOKFMNU?si=-C7jeiBeRY559Rrs",
        accommodations: [
            { type: "Hotel", name: "The Plaza Hotel", rating: 5 },
            { type: "Hostel", name: "NY Budget Stay", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "JFK Airport", price: "$500", time: "7h" },
            { type: "Subway", info: "Unlimited metro card", price: "$30", time: "7 days" },
        ],
    },
    {
        id: 12,
        title: "Rio Carnival Experience",
        location: "Rio de Janeiro, Brazil",
        price: 1900,
        rating: 4.8,
        description:
            "Dance through the world-famous Carnival, visit Christ the Redeemer, and relax on Copacabana Beach.",
        images: [
            "/images/Rio_Carnival_Experience.jpg",
            "/images/Rio_Carnival_Experience_2.jpg",
            "/images/Rio_Carnival_Experience_3.jpg",
        ],
        video: "https://www.youtube.com/embed/03JPAdsEkso?si=f6Ayzjiky5IFAOuI",
        accommodations: [
            { type: "Hotel", name: "Copacabana Palace", rating: 5 },
            { type: "Hostel", name: "Rio Hostel", rating: 3 },
        ],
        transport: [
            { type: "Flight", info: "Galeão Intl Airport", price: "$850", time: "11h" },
            { type: "Bus", info: "City Carnival Shuttles", price: "$10", time: "Flexible" },
        ],
    },
    {
        id: 13,
        title: "Santorini Island Escape",
        location: "Santorini, Greece",
        price: 2000,
        rating: 2.9,
        description:
            "Experience blue-domed churches, whitewashed houses, and beautiful sunsets over the Aegean Sea.",
        images: [
            "/images/Santorini_Island_Escape.jpg",
            "/images/Santorini_Island_Escape_2.jpg",
            "/images/Santorini_Island_Escape_3.jpg",
        ],
        video: "https://www.youtube.com/embed/NE-GnTNpBl4?si=EcAm3GRUixh7QHKz",
        accommodations: [
            { type: "Hotel", name: "Canaves Oia Suites", rating: 5 },
            { type: "Villa", name: "Santorini Sunset Villa", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Santorini Airport", price: "$600", time: "8h" },
            { type: "Ferry", info: "Athens to Santorini", price: "$70", time: "5h" },
        ],
    },
    {
        id: 14,
        title: "Mystical Journey in Cairo",
        location: "Cairo, Egypt",
        price: 1500,
        rating: 3.7,
        description:
            "Explore the Great Pyramids of Giza, the Sphinx, and wander through bustling bazaars of Cairo.",
        images: [
            "/images/Mystical_Journey_in_Cairo.jpg",
            "/images/Mystical_Journey_in_Cairo_2.jpg",
            "/images/Mystical_Journey_in_Cairo_3.jpg",
        ],
        video: "https://www.youtube.com/embed/AD1NCagrcD0?si=9CtoxQ77Gco8f0bD",
        accommodations: [
            { type: "Hotel", name: "Marriott Mena House", rating: 5 },
            { type: "Guesthouse", name: "Pyramid View Inn", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Cairo International Airport", price: "$700", time: "9h" },
            { type: "Car", info: "Private taxi to Giza", price: "$20", time: "40m" },
        ],
    },
    {
        id: 15,
        title: "Tropical Escape in Bali",
        location: "Bali, Indonesia",
        price: 1700,
        rating: 3.5,
        description:
            "Relax on pristine beaches, explore lush rice terraces, and enjoy Balinese culture and yoga retreats.",
        images: [
            "/images/Tropical_Escape_in_Bali.jpg",
            "/images/Tropical_Escape_in_Bali_2.jpg",
            "/images/Tropical_Escape_in_Bali_3.jpg",
        ],
        video: "https://www.youtube.com/embed/kqhZvVxdUPU?si=CxH00u71MGdWRkX8",
        accommodations: [
            { type: "Resort", name: "Four Seasons Bali", rating: 5 },
            { type: "Villa", name: "Ubud Jungle Villas", rating: 4 },
        ],
        transport: [
            { type: "Flight", info: "Ngurah Rai Intl Airport", price: "$850", time: "12h" },
            { type: "Scooter", info: "Island rentals", price: "$10/day", time: "Flexible" },
        ],
    },
];

export default tripsData;

