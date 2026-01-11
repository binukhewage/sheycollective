export const blogPosts = [
  {
    id: "redefining-avant-garde",
    title: "Shehara Madurawala: Redefining Avant-Garde Fashion for Women",
    author: "Shehara Madurawala",
    date: "Aug 18, 2024",
    readTime: "5 min read",
    excerpt: "In the realm of avant-garde fashion for women, one name stands out for redefining luxury custom-made clothing with a bold and provocative aesthetic. We explore the process behind the armor.",
    // Ideally, ensure you have these 3 images for the collage effect
    images: [
      "/images/.png", // Large Left Image
      "/images/.png", // Top Right Image
      "/images/.png"  // Bottom Right Image
    ],
    likes: 124,
    comments: 18
  },
];

// Helper function to find a specific post
export function getBlogPost(id) {
  return blogPosts.find((post) => post.id === id);
}