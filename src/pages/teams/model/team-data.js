// The supplied site contains department names and placeholder people, not a roster API.
export const departments = Object.freeze(
  [
    { name: "Academic Training", description: "Assignments and material" },
    { name: "Outreach", description: "Schools and clearance" },
    { name: "Finance", description: "Fees and verification" },
    { name: "Logistics", description: "Event operations" },
    { name: "Partnership", description: "Institutions and partners" },
    { name: "Media", description: "Content and PR" },
    { name: "IT", description: "Platform and security" },
  ].map(Object.freeze),
);
