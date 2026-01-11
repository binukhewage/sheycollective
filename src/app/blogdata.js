export const blogPosts = [
  {
    id: "redefining-avant-garde",
    title: "Redefining Avant-Garde Fashion for Women",
    author: "Shehara Madurawala",
    date: "Aug 18, 2024",
    readTime: "5 min read",
    excerpt: "In the realm of avant-garde fashion for women, one name stands out for redefining luxury custom-made clothing with a bold and provocative twist - Shehara Madurawala. This unique brand has made a mark in the industry by exploring themes of beauty and unconventional aesthetics, appealing to women between 23 to 45 years old who appreciate fine tailoring and daring designs.",
    article: "Drawing inspiration from the legendary Alexander McQueen, Shey Collective pushes the boundaries of traditional fashion, offering statement pieces that exude confidence and individuality. The brand's goal is clear - to establish itself as the ultimate destination for avant-garde luxury clothing, capturing the attention of fashion-forward individuals across different regions.To achieve this goal, Shehara Madurawala is focusing on building a strong social media presence, forging collaborations with influencers and celebrities, and expanding its reach through partnerships with high-end boutiques or department stores. Additionally, the brand aims to provide personalized styling services to its discerning clientele, ensuring a seamless and exclusive shopping experience. With an eye on the future, Shehara Madurawala has plans to launch an e-commerce platform, making its exquisite creations accessible to a wider audience. By staying true to its vision of challenging the norm and celebrating individuality, this avant-garde fashion house is set to make a lasting impact in the world of luxury fashion.",
    // Ideally, ensure you have these 3 images for the collage effect
    images: [
      "/images/blog1.jpg", // Large Left Image
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