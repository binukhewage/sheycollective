// data.js

export const collectionsData = [
    {
      id: "vailed-vitality",
      title: "VAILED VITALITY",
      year: "2025",
      description: "Introducing VAILED VITALITY Collection, which delves into the profound significance of blood and challenges conventional perceptions of it by exploring its aesthetic and symbolic dimensions. This collection aims to highlight the hidden beauty within this essential fluid, celebrating its role as a conduit of life energy and a symbol of deep-seated emotions.",
      outfits: [
        {
          id: "1",
          title: "LOOK 1",
          coverImage: "/images/outfit1.jpg", // Make sure these exist
          gallery: ["/images/outfit1.jpg", "/images/outfit1-detail.jpg"],
          projectType: "Fashion Collection",
          date: "July 2024",
          location: "Colombo, Sri Lanka",
          products: "Ripped jean, oxygen wire corset and puff sleeves.",
          materials: "Dyed cotton greige fabric, silicon, spray paint, oxygen wires, batteries, leather, barbie fabric, silicon oil, food coloring, motor pump.",
          technique: "Jeans distressing, bio mechanical garment engineering."
        },
        {
          id: "2",
          title: "LOOK 2",
          coverImage: "/images/outfit2.jpg",
          gallery: ["/images/outfit2.jpg"],
          projectType: "Fashion Collection",
          date: "July 2024",
          location: "Colombo, Sri Lanka",
          products: "Structured leather bodice, distressed denim skirt.",
          materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
          technique: "Laser cutting, hand-painting, structural draping."
        },
        {
            id: "3",
            title: "LOOK 3",
            coverImage: "/images/outfit3.jpg",
            gallery: ["/images/outfit2.jpg"],
            projectType: "Fashion Collection",
            date: "July 2024",
            location: "Colombo, Sri Lanka",
            products: "Structured leather bodice, distressed denim skirt.",
            materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
            technique: "Laser cutting, hand-painting, structural draping."
          },
          {
            id: "4",
            title: "LOOK 4",
            coverImage: "/images/outfit4.jpg",
            gallery: ["/images/outfit2.jpg"],
            projectType: "Fashion Collection",
            date: "July 2024",
            location: "Colombo, Sri Lanka",
            products: "Structured leather bodice, distressed denim skirt.",
            materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
            technique: "Laser cutting, hand-painting, structural draping."
          },
          {
            id: "5",
            title: "LOOK 5",
            coverImage: "/images/outfit05.jpg",
            gallery: ["/images/outfit2.jpg"],
            projectType: "Fashion Collection",
            date: "July 2024",
            location: "Colombo, Sri Lanka",
            products: "Structured leather bodice, distressed denim skirt.",
            materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
            technique: "Laser cutting, hand-painting, structural draping."
          },
          {
            id: "6",
            title: "LOOK 6",
            coverImage: "/images/outfit6.jpg",
            gallery: ["/images/outfit2.jpg"],
            projectType: "Fashion Collection",
            date: "July 2024",
            location: "Colombo, Sri Lanka",
            products: "Structured leather bodice, distressed denim skirt.",
            materials: "Recycled denim, chrome hardware, latex, acrylic paint.",
            technique: "Laser cutting, hand-painting, structural draping."
          },
        // Add 4 more outfits here...
      ]
    },
    //more collections will be added here...
  ];
  
  // Helper function to get a single outfit by ID
  export function getOutfit(slug) {
    for (const collection of collectionsData) {
      const found = collection.outfits.find((item) => item.id === slug);
      if (found) return found;
    }
    return null;
  }