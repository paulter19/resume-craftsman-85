import { ResumeData } from "@/types/resume";

export const exampleResumeData: ResumeData = {
  personalInfo: {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary: "Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative software solutions. Proven track record of launching successful products that drive revenue growth and enhance user engagement."
  },
  experience: [
    {
      id: "1",
      company: "TechCorp Inc.",
      position: "Senior Product Manager",
      startDate: "Jan 2020",
      endDate: "Present",
      bulletPoints: [
        "Led development of flagship product serving 2M+ users, resulting in 45% increase in user engagement",
        "Managed cross-functional team of 15 engineers, designers, and data analysts",
        "Implemented agile methodologies reducing time-to-market by 30%",
        "Drove $5M in annual recurring revenue through strategic product initiatives"
      ]
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Product Manager",
      startDate: "Jun 2017",
      endDate: "Dec 2019",
      bulletPoints: [
        "Launched 3 major product features increasing customer retention by 25%",
        "Conducted user research with 500+ customers to inform product roadmap",
        "Collaborated with sales team to achieve 150% of revenue targets"
      ]
    },
    {
      id: "3",
      company: "Digital Solutions Co.",
      position: "Associate Product Manager",
      startDate: "Aug 2015",
      endDate: "May 2017",
      bulletPoints: [
        "Assisted in product strategy and roadmap planning for B2B SaaS platform",
        "Analyzed product metrics and user feedback to drive continuous improvement",
        "Supported launch of mobile app with 100K+ downloads in first quarter"
      ]
    }
  ],
  education: [
    {
      id: "1",
      school: "Stanford University",
      degree: "Master of Business Administration",
      field: "Technology Management",
      graduationDate: "2015"
    },
    {
      id: "2",
      school: "UC Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationDate: "2013"
    }
  ],
  skills: [
    "Product Strategy",
    "Agile/Scrum",
    "User Research",
    "Data Analysis",
    "Roadmap Planning",
    "A/B Testing",
    "SQL",
    "Figma",
    "JIRA",
    "Leadership",
    "Stakeholder Management",
    "Go-to-Market Strategy"
  ]
};