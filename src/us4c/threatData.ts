// Illustrative sample dataset for the threat & trend panels on the command centre.
// These figures are not derived from case records and must stay labelled as illustrative.

export type HotspotLevel = "High" | "Moderate" | "Low";

export const threatSummary = {
  level: "Moderate",
  priority: "Data breaches",
  action: "Enhanced monitoring",
  period: "Jan – Dec 2025",
};

export const topThreats = [
  { name: "Ransomware", score: 92 },
  { name: "Phishing & social engineering", score: 81 },
  { name: "Malware & botnets", score: 68 },
  { name: "Insider threats", score: 47 },
  { name: "IoT vulnerabilities", score: 35 },
];

export const emergingTrends = [
  "AI-enhanced attacks",
  "Supply chain vulnerabilities",
  "Growth of multi-extortion tactics",
  "Cloud infrastructure compromises",
];

export const riskRegister: {
  threat: string;
  risk: "High" | "Medium" | "Low";
  mitigation: string;
}[] = [
  { threat: "Ransomware", risk: "High", mitigation: "Immutable backups" },
  { threat: "Phishing", risk: "Medium", mitigation: "User awareness training" },
  { threat: "Malware & botnets", risk: "High", mitigation: "Endpoint detection & patching" },
  { threat: "IoT vulnerabilities", risk: "Low", mitigation: "Network segmentation" },
];

// Complaints per lakh population.
export const cityHotspots = [
  { city: "Srinagar", rate: 57.3 },
  { city: "Jammu", rate: 45.5 },
  { city: "Anantnag", rate: 31.9 },
  { city: "Baramulla", rate: 30.9 },
  { city: "Kathua", rate: 28.4 },
];

// Share of registered complaints, %.
export const crimeTypes = [
  { type: "Online fraud", share: 34 },
  { type: "Phishing", share: 22 },
  { type: "Mule accounts", share: 16 },
  { type: "Data theft", share: 15 },
  { type: "Social media crimes", share: 13 },
];

export const caseTrend = [
  { year: "2021", cases: 3100 },
  { year: "2022", cases: 6000 },
  { year: "2023", cases: 8200 },
  { year: "2024", cases: 7900 },
  { year: "2025", cases: 11000 },
];

// Share of victims by age group, %.
export const victimAges = [
  { group: "18–25", share: 28 },
  { group: "26–35", share: 36 },
  { group: "36–45", share: 22 },
  { group: "46+", share: 14 },
];

// Registered complaints per district.
export const districtActivity: Record<string, number> = {
  Srinagar: 2140,
  Jammu: 1980,
  Anantnag: 760,
  Baramulla: 720,
  Kathua: 640,
  Budgam: 430,
  Udhampur: 410,
  Pulwama: 380,
  Rajouri: 340,
  Samba: 310,
  Kupwara: 290,
  Ganderbal: 250,
  Kulgam: 220,
  Poonch: 190,
  Bandipora: 170,
  Doda: 150,
  Reasi: 130,
  Shopian: 120,
  Ramban: 100,
  Kishtwar: 80,
};

export const hotspotLevel = (count: number): HotspotLevel =>
  count >= 600 ? "High" : count >= 230 ? "Moderate" : "Low";

export const keyFindings = [
  {
    title: "Increasing use of mule accounts",
    detail:
      "Mule-account referrals are the fastest-growing fraud category, mostly linked to UPI and wallet transfers.",
  },
  {
    title: "Regional gaps in digital literacy",
    detail:
      "Hill and border districts such as Kishtwar, Ramban and Poonch report fewer complaints despite comparable exposure to fraud.",
  },
  {
    title: "Young adults most targeted",
    detail: "Victims aged 18–35 account for roughly 64% of registered complaints.",
  },
];

export const focusAreas = [
  {
    title: "Strengthen grassroots triage",
    detail: "Train police-station staff to register and escalate cyber complaints within the golden hour.",
  },
  {
    title: "Faster fund-hold requests",
    detail: "Tighten bank and wallet coordination through the 1930 helpline workflow.",
  },
  {
    title: "Targeted awareness drives",
    detail: "Prioritise campaigns in high-activity districts and college campuses.",
  },
];
