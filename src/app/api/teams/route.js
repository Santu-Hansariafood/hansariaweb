export async function GET() {
    const teamsData = {
      accounts: [
        {
          id: "uttam-das",
          name: "Uttam Das",
          role: "Accountants Head",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/1234567890",
          email: "mailto:alice.johnson@example.com",
          description: "Alice manages financial reports and tax filing.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "bishnu-sarkar",
          name: "Bishnu Sarkar",
          role: "Senior Accountant",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/2233445566",
          email: "mailto:robert.smith@example.com",
          description: "Robert assists with financial reports and audits.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "tandra-sarkar",
          name: "Tandra Sarkar",
          role: "Senior Accountant",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/3344556677",
          email: "mailto:emily.davis@example.com",
          description: "Emily ensures compliance with tax regulations.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "biswjit-kumar-shaw",
          name: "Biswjit Kumar Shaw",
          role: "Accountant",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/3344556677",
          email: "mailto:emily.davis@example.com",
          description: "Emily ensures compliance with tax regulations.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "kamal-pusti",
          name: "Kamal Pusti",
          role: "Accountant",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/3344556677",
          email: "mailto:emily.davis@example.com",
          description: "Emily ensures compliance with tax regulations.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        }
      ],
      marketing: [
        {
          id: "amit-kumar-sravastab",
          name: "Amit Kumar Srivastab",
          role: "Back office Manager",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/7788990011",
          email: "mailto:linda.green@example.com",
          description: "Linda helps with recruitment and employee engagement.",
          experience: "6+ experience",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "partha-mitra",
          name: "Partha Mitra",
          role: "Purchase Manager",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/9876543210",
          email: "mailto:michael.brown@example.com",
          description: "A Purchase Manager is responsible for overseeing the procurement of goods and services for a company. Their primary duties include sourcing suppliers, negotiating contracts, managing purchasing budgets, and ensuring timely delivery of materials. They play a crucial role in maintaining cost efficiency and quality standards while aligning purchases with the organization's needs.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "subir-roy",
          name: "Subir Roy",
          role: "Purchase",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/4455667788",
          email: "mailto:sophia.lee@example.com",
          description: "Sophia optimizes content for search engines.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "sudeep-das",
          name: "Sudeep Das",
          role: "Purchase",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/5566778899",
          email: "mailto:david.jones@example.com",
          description: "David creates engaging social media content.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        }
      ],
      backoffice: [
        {
          id: "rahul-mali",
          name: "Rahul Mali",
          role: "Back Office",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/1122334455",
          email: "mailto:susan.clark@example.com",
          description: "Susan manages administrative tasks.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "deepak-kumar-yadav",
          name: "Deepak Kumar Yadav",
          role: "Back Office",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/6677889900",
          email: "mailto:kevin.white@example.com",
          description: "Kevin ensures data accuracy and processing.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        
      ],
      leaders: [
        {
          id: "gopal-agarwal",
          name: "Gopal Agarwal",
          role: "CEO & Founder",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/9988776655",
          email: "mailto:john.doe@example.com",
          description: "John is the visionary leader.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "sunita-agarwalla",
          name: "Sunita Agarwalla",
          role: "CEO & Founder",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/8899776655",
          email: "mailto:olivia.wilson@example.com",
          description: "Olivia ensures smooth business operations.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        },
        {
          id: "prince-surana",
          name: "Prince Surana",
          role: "Znoal Head",
          image: "https://via.placeholder.com/150",
          whatsapp: "https://wa.me/7766554433",
          email: "mailto:william.taylor@example.com",
          description: "William manages the company's finances.",
          experience: "6+ years of experience in administrative operations.",
          social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" }
        }
      ]
    };
  
    return Response.json(teamsData);
  }
  