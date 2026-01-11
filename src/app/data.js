// data.js

export const collectionsData = [
  {
    id: "vailed-vitality",
    title: "VAILED VITALITY",
    year: "2025",
    description:
      "Introducing VAILED VITALITY Collection, which delves into the profound significance of blood and challenges conventional perceptions of it by exploring its aesthetic and symbolic dimensions. This collection aims to highlight the hidden beauty within this essential fluid, celebrating its role as a conduit of life energy and a symbol of deep-seated emotions.",
    outfits: [
      {
        id: "1",
        title: "LOOK 1",
        coverImage: "/images/outfit1.jpg", 
        gallery: [
          "/images/outfit1.jpg",
          "/images/outfit1-1.jpg",
          "/images/outfit1-2.jpg",
          "/images/outfit1-3.jpg",
          "/images/outfit1-4.jpg",
        ], 
        videos: [
          {
            id: "runway",
            src: "/outfit1vid1.MP4",
            poster: "/images/outfit1.jpg",
            caption: "Fig. Motion — Runway",
          },
          {
            id: "detail",
            src: "/outfit1vid2.mp4",
            poster: "/images/outfit1-2.jpg",
            caption: "Fig. Motion — Detail Study",
          },
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products: "Ripped jean, oxygen wire corset and puff sleeves.",
        materials:
          "Dyed cotton greige fabric, silicon, spray paint, oxygen wires, batteries, leather, barbie fabric, silicon oil, food coloring, motor pump.",
        technique: "Jeans distressing, bio mechanical garment engineering.",
      },
      {
        id: "2",
        title: "LOOK 2",
        coverImage: "/images/outfit2.jpg",
        gallery: [
          "/images/outfit2.jpg",
          "/images/outfit2-1.jpg",
          "/images/outfit2-2.jpg",
          "/images/outfit2-3.jpg",
          "/images/outfit2-4.jpg",
          "/images/outfit2-5.jpg",
          "/images/outfit2-6.jpg",
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products:
          "Corset, Over the knee cargo leg pants, mini skirt with fabric cords and long puff sleeves.",
        materials:
          "vegetable tanned leather, organza, twill, dyed cotton greige.",
        technique:
          "Fabric manipulation using vegetable leather and organza fabric.",
      },
      {
        id: "3",
        title: "LOOK 3",
        coverImage: "/images/outfit3.jpg",
        gallery: ["/images/outfit3.jpg",
            "/images/outfit3-1.jpg",
            "/images/outfit3-2.jpg",
            "/images/outfit3-3.jpg",
            "/images/outfit3-4.jpg",
            "/images/outfit3-5.jpg",
            "/images/outfit3-6.jpg",
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products: "Structured leather bodice, distressed denim skirt.",
        materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
        technique: "Laser cutting, hand-painting, structural draping.",
      },
      {
        id: "4",
        title: "LOOK 4",
        coverImage: "/images/outfit4.jpg",
        gallery: [
          "/images/outfit4.jpg",
          "/images/outfit4-1.jpg",
          "/images/outfit4-2.jpg",
          "/images/outfit4-3.jpg",
          "/images/outfit4-4.jpg",
          "/images/outfit4-5.jpg",
          "/images/outfit4-6.jpg",
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products: "High waisted layered ripped jean, bead top and a jacket.",
        materials:
          "Dyed cotton greige, crystal beads, wool, twill, buttons, gold chains and hoops.",
        technique:
          "Beaded garment construction, jeans distressing. fabric manipulation.",
      },
      {
        id: "5",
        title: "LOOK 5",
        coverImage: "/images/outfit05.jpg",
        gallery: [
          "/images/outfit05.jpg",
          "/images/outfit5-1.jpg",
          "/images/outfit5-2.jpg",
          "/images/outfit5-3.jpg",
          "/images/outfit5-4.jpg",
          "/images/outfit5-5.jpg",
          "/images/outfit5-6.jpg",
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products: "Mini skirt, Corset, mini puff sleeves and a net skirt.",
        materials:
          "4 Way stretch fabric, cotton greige, organza, twill, spray paint, fabric paint and net fabric.",
        technique:
          "Fabric manipulation done using 4 way stretch fabric, rhinestone embellishment, bead embroidery",
      },
      {
        id: "6",
        title: "LOOK 6",
        coverImage: "/images/outfit6.jpg",
        gallery: [
          "/images/outfit6.jpg",
          "/images/outfit6-1.jpg",
          "/images/outfit6-2.jpg",
          "/images/outfit6-3.jpg",
          "/images/outfit6-4.jpg",
          "/images/outfit6-5.jpg",
          "/images/outfit6-6.jpg",
        ],
        projectType: "Fashion Collection",
        date: "July 2024",
        location: "Colombo, Sri Lanka",
        products: "Top, mini skirt, over the knee boots.",
        materials: "Twill, velvet, epoxy resin, dyed Cotten greige.",
        technique: "Fabric manipulation using epoxy resin and boot making.",
      }, // Add 4 more outfits here...
    ],
  }, //more collections will be added here...
]; // Helper function to get a single outfit by ID
export function getOutfit(slug) {
  for (const collection of collectionsData) {
    const found = collection.outfits.find((item) => item.id === slug);
    if (found) return found;
  }
  return null;
}
