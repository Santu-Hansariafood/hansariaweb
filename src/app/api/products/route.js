export async function GET() {
    const productsData = {
      maize: {
        title: "Premium Maize Seeds",
        shortDescription: "High-quality maize seeds for better yield and resistance.",
        image: "https://via.placeholder.com/500x300",
        description: "Our maize seeds are designed to provide maximum growth, pest resistance, and high yield in various climates.",
        additionalImages: [
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250"
        ],
        qualityParameters: ["High Germination Rate", "Drought Resistance", "Optimal Moisture Content"],
        ratio: "95% Purity, 96% Germination",
        cropPolicy: "Follows sustainable farming guidelines."
      },
      soya: {
        title: "Organic Soya Beans",
        shortDescription: "Premium soya beans, rich in protein and ideal for cultivation.",
        image: "https://via.placeholder.com/500x300",
        description: "Our soya bean seeds ensure a high protein yield, excellent soil adaptability, and disease resistance.",
        additionalImages: [
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250"
        ],
        qualityParameters: ["High Protein Content", "Disease Resistant", "Optimal Oil Percentage"],
        ratio: "98% Purity, 97% Germination",
        cropPolicy: "Grown using organic and non-GMO farming methods."
      },
      "broken-rice": {
        title: "Top-Quality Broken Rice",
        shortDescription: "Clean, processed broken rice suitable for various culinary uses.",
        image: "https://via.placeholder.com/500x300",
        description: "Our broken rice is sourced from high-quality paddy, ensuring clean and premium grains for consumption.",
        additionalImages: [
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250",
          "https://via.placeholder.com/400x250"
        ],
        qualityParameters: ["Low Moisture Content", "No Foreign Material", "Perfect Grain Texture"],
        ratio: "99% Purity, 100% Usability",
        cropPolicy: "Sourced from top paddy fields following strict quality control."
      }
    };
  
    return Response.json(productsData);
  }
  