export const siteConfig = {
  name: "Miracle Mind",
  fullName: "Miracle Mind Life Coaching Centre",
  phoneDisplay: "097105 80088",
  phoneHref: "+919710580088",
  address:
    "No - 10A, Thiruvalluvar Salai, Bhuvaneshwari Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=No%20-%2010A%2C%20Thiruvalluvar%20Salai%2C%20Bhuvaneshwari%20Nagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087",
  whatsappUrl:
    "https://wa.me/919710580088?text=Hello%20Miracle%20Mind%2C%20I%20would%20like%20to%20enquire%20about%20your%20programs.",
  description:
    "Guidance and personal development programs designed to help you gain clarity, confidence and direction.",
  // Demo copy: replace these paragraphs with the centre's verified story.
  about: [
    "Life coaching can offer a thoughtful space to pause, reflect and identify the direction you want to take. It is a collaborative process centred on awareness, choices and purposeful action.",
    "This demo introduces Miracle Mind as a welcoming place for personal development and guided growth. Replace this paragraph with the centre’s own story, approach and values before publishing.",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;