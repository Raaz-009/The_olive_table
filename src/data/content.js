// Central content for The Olive Table. Edit copy, prices, and images here.

export const images = {
  heroInterior:
    "https://images.unsplash.com/photo-1762806883627-4bcbfad98a2c?auto=format&fit=crop&w=1800&q=80",
  fishPlate:
    "https://images.unsplash.com/photo-1726452842860-e7e8066f3341?auto=format&fit=crop&w=1200&q=80",
  grilledMeat:
    "https://images.unsplash.com/photo-1558199141-391d935676f0?auto=format&fit=crop&w=1200&q=80",
  platingHands:
    "https://images.unsplash.com/photo-1687369595840-e96a912586f1?auto=format&fit=crop&w=1200&q=80",
  winePour:
    "https://images.unsplash.com/photo-1653697739273-de3ffa3d9ffe?auto=format&fit=crop&w=1200&q=80",
  chocolateDessert:
    "https://images.unsplash.com/photo-1608108132933-741a71c144ef?auto=format&fit=crop&w=1200&q=80",
};

export const signatureDishes = [
  {
    name: "Charred Aubergine",
    desc: "Whipped feta, pomegranate molasses, toasted sesame, mint oil.",
    price: "₹1,450",
    img: images.fishPlate,
    tag: "Vegetarian",
  },
  {
    name: "Slow-Roast Lamb Shoulder",
    desc: "Eight-hour roast, preserved lemon, green olive jus, wild herbs.",
    price: "₹3,200",
    img: images.grilledMeat,
    tag: "Chef's pick",
  },
  {
    name: "Saffron Risotto",
    desc: "Wild mushroom, aged parmesan, crisped sage, brown butter.",
    price: "₹2,100",
    img: images.platingHands,
    tag: "Vegetarian",
  },
  {
    name: "Olive Oil Cake",
    desc: "Citrus glaze, mascarpone, candied orange, sea salt.",
    price: "₹950",
    img: images.chocolateDessert,
    tag: "Dessert",
  },
];

export const menu = {
  starters: [
    { name: "Marinated Olives & Nocellara", desc: "Orange zest, chilli, rosemary", price: "₹450" },
    { name: "Hummus, Brown Butter, Pine Nuts", desc: "Warm laffa bread", price: "₹650" },
    { name: "Charred Aubergine", desc: "Whipped feta, pomegranate", price: "₹1,450" },
    { name: "Burrata & Heirloom Tomato", desc: "Basil oil, sourdough", price: "₹1,650" },
    { name: "Grilled Octopus", desc: "White bean puree, chorizo oil", price: "₹2,400" },
    { name: "Beetroot Carpaccio", desc: "Whipped goat cheese, walnut", price: "₹1,150" },
  ],
  mains: [
    { name: "Saffron Risotto", desc: "Wild mushroom, parmesan", price: "₹2,100" },
    { name: "Pan-Seared Seabass", desc: "Fennel, olive tapenade, citrus", price: "₹2,950" },
    { name: "Wild Mushroom Orzo", desc: "Truffle, aged pecorino", price: "₹1,950" },
    { name: "Slow-Roast Lamb Shoulder", desc: "Preserved lemon, olive jus", price: "₹3,200" },
    { name: "Roast Chicken Supreme", desc: "Sumac, charred lemon, jus", price: "₹2,300" },
    { name: "Handmade Ricotta Ravioli", desc: "Brown butter, sage, hazelnut", price: "₹1,850" },
  ],
  grill: [
    { name: "Tomahawk for Two", desc: "Bone marrow, chimichurri", price: "₹6,800" },
    { name: "Charcoal Prawns", desc: "Garlic, chilli, lemon oil", price: "₹2,650" },
    { name: "Lamb Chops", desc: "Za'atar crust, yoghurt", price: "₹3,450" },
    { name: "Whole Grilled Pomfret", desc: "Coastal spice, curry leaf oil", price: "₹2,900" },
  ],
  desserts: [
    { name: "Olive Oil Cake", desc: "Citrus glaze, mascarpone", price: "₹950" },
    { name: "Dark Chocolate Fondant", desc: "Sea salt, vanilla bean gelato", price: "₹1,050" },
    { name: "Pistachio & Rosewater Baklava", desc: "Honey, cardamom", price: "₹850" },
    { name: "Basque Cheesecake", desc: "Fig compote", price: "₹950" },
  ],
  wine: [
    { name: "House Red — Nashik Valley", desc: "Glass / bottle", price: "₹950 / ₹3,800" },
    { name: "Sancerre, Loire Valley", desc: "Bottle only", price: "₹8,500" },
    { name: "Negroni, barrel-aged", desc: "House recipe", price: "₹1,100" },
    { name: "Single Malt, 12-year", desc: "30ml pour", price: "₹1,400" },
  ],
};

export const chef = {
  name: "Armaan Kapoor",
  role: "Executive Chef & Co-Founder",
  bio: [
    "Armaan trained across kitchens in Rome and Beirut before returning to Mumbai to open The Olive Table with his sister Meher. His food follows one rule: three or four ingredients, treated properly, always beat twelve treated carelessly.",
    "He sources olive oil directly from a single grove in Puglia, presses his own preserved lemons in-house, and still runs the pass every service — six nights a week.",
  ],
  timeline: [
    { year: "2009", desc: "Trained under a Michelin-starred kitchen, Rome" },
    { year: "2012", desc: "Sous chef, coastal Lebanese kitchen, Beirut" },
    { year: "2014", desc: "Co-founded The Olive Table, Mumbai" },
    { year: "2022", desc: "Featured, Condé Nast India's Top Tables" },
  ],
};

export const reviews = [
  {
    quote: "The lamb shoulder alone is worth the drive across town. Nothing on the plate is there by accident.",
    name: "Nandita R.",
    role: "Regular since 2016",
    stars: 5,
  },
  {
    quote: "Booked for an anniversary, ended up going back three times in a month. The service remembers your name.",
    name: "Aditya & Sara M.",
    role: "Anniversary dinner",
    stars: 5,
  },
  {
    quote: "Book the corner table by the cellar if you can. Wine list is short but every bottle earns its place.",
    name: "Farhan K.",
    role: "Food writer, Mumbai Mirror",
    stars: 4,
  },
  {
    quote: "Quiet, warm, unhurried — exactly what a Friday night in this city usually isn't.",
    name: "Priya D.",
    role: "First-time guest",
    stars: 5,
  },
];

export const hours = [
  { days: "Tuesday – Friday", time: "12:30 – 3:00pm, 7:00 – 11:30pm" },
  { days: "Saturday – Sunday", time: "12:30 – 3:30pm, 7:00 – 11:30pm" },
  { days: "Monday", time: "Closed" },
];

export const contact = {
  address: "24 Marigold Lane, Bandra West, Mumbai 400050",
  phone: "+91 98200 14477",
  email: "reservations@theolivetable.in",
};
