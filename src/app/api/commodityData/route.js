export async function GET() {
  const data = {
    image: "/images/commodity-trading.jpg",
    mainTitle: "Commodity Trading",
    subTitles: [
      "Strategies To Select A Good Portfolio Management Service",
      "Market Intelligence",
      "Top Notch Broking"
    ],
    sections: [
      {
        category: "Strategies To Select A Good Portfolio Management Service",
        items: [
          { title: "Define Your Investment Goals", description: "Set clear investment objectives based on risk tolerance and expected returns." },
          { title: "Evaluate the Manager’s Expertise", description: "Look for experience, certifications, and past performance in managing portfolios." },
          { title: "Diversification Approach", description: "Ensure your portfolio manager provides a well-diversified investment strategy." },
          { title: "Check Performance History", description: "Analyze the consistency and adaptability of past performance." },
          { title: "Risk Management and Flexibility", description: "Review how the manager handles market volatility and adjusts investments accordingly." },
          { title: "Transparency in Fees", description: "Understand management fees, commissions, and hidden charges before investing." },
          { title: "Client Service and Reporting", description: "Ensure regular communication and detailed portfolio performance reports." }
        ]
      },
      {
        category: "Market Intelligence",
        items: [
          { title: "Assess Your Investment Objectives", description: "Determine your long-term financial goals before making investment decisions." },
          { title: "Analyze the Manager’s Track Record", description: "Study past investment successes and failures to gauge performance reliability." },
          { title: "Examine Diversification Strategy", description: "Ensure a mix of assets is used to reduce risk exposure." },
          { title: "Consider Past Performance", description: "Track previous returns and compare them with market trends." },
          { title: "Transparency in Fee Structure", description: "Opt for services with clear cost breakdowns to avoid hidden charges." },
          { title: "Focus on Risk Management", description: "Understand how risks are mitigated within the portfolio." },
          { title: "Flexibility and Customization", description: "Look for tailored investment solutions that suit individual needs." }
        ]
      },
      {
        category: "Top Notch Broking",
        items: [
          { title: "High-Frequency Trading Benefits", description: "Explore how technology-driven trading strategies enhance profits." },
          { title: "Institutional vs. Retail Broking", description: "Understand the differences in services provided for institutions and individuals." },
          { title: "Commission-Based vs. Fee-Based Models", description: "Compare different brokerage pricing structures." },
          { title: "Best Execution Practices", description: "Learn how top firms ensure the best buy/sell prices for clients." },
          { title: "Algorithmic Trading Strategies", description: "Discover how AI and automated systems influence modern trading." },
          { title: "Customer Support and Advisory Services", description: "Evaluate the level of service and personalized investment advice provided." }
        ]
      }
    ]
  };

  return Response.json(data);
}
