export async function GET() {
    const jobsData = [
      {
        id: "software-engineer",
        title: "Software Engineer",
        location: "Remote",
        shortDescription: "Join our tech team to build scalable applications.",
        fullDescription: "We are looking for a Software Engineer with experience in Next.js and React. Responsibilities include developing front-end applications, API integrations, and optimizing performance.",
        applyLink: "/careers/software-engineer"
      },
      {
        id: "marketing-manager",
        title: "Marketing Manager",
        location: "New York, USA",
        shortDescription: "Lead digital marketing campaigns and branding strategies.",
        fullDescription: "We are hiring a Marketing Manager to lead our digital campaigns, SEO strategies, and content marketing. Must have experience in digital marketing tools and team leadership.",
        applyLink: "/careers/marketing-manager"
      },
      {
        id: "hr-specialist",
        title: "HR Specialist",
        location: "London, UK",
        shortDescription: "Manage recruitment, employee engagement, and HR policies.",
        fullDescription: "As an HR Specialist, you will handle talent acquisition, employee relations, and HR compliance. Looking for candidates with 3+ years of HR experience.",
        applyLink: "/careers/hr-specialist"
      }
    ];
  
    return Response.json(jobsData);
  }
  