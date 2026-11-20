
export type Career = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  qualification: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  technicalSkills: string[];
  preferredExperience: string[];
  benefits?: string[];
  status: "open" | "closed";
  featured: boolean;
  applicationEmail: string;
};

export const careers: Career[] = [
  {
    id: "career-001",
    slug: "control-room-manager",
    title: "Control Room Manager",
    department: "Operations",
    location: "Vipingo, Kilifi",
    employmentType: "Full-time",
    experience: "3–5 years",
    qualification: "Bachelor's Degree",
    summary:
      "An experienced Control Room Manager is required to lead centralised fleet monitoring, tracking, telematics and transport operations.",

    description:
      "Our client is seeking an experienced and results-oriented Control Room Manager to oversee its centralised fleet monitoring and control room operations. The successful candidate will combine technical expertise in GPS tracking and telematics with strong transport operations and people management skills. The role involves maintaining visibility of a large commercial fleet of more than 600 trucks, coordinating control room personnel and ensuring timely operational response.",

    responsibilities: [
      "Provide overall leadership and supervision of daily control room operations.",
      "Manage, supervise and coordinate Control Room Officers and shift supervisors.",
      "Develop and maintain Standard Operating Procedures (SOPs).",
      "Establish shift schedules, duty rosters and operational handover procedures.",
      "Monitor real-time vehicle locations, movements, routes and journey progress.",
      "Identify unauthorised stops, route deviations, excessive idling and suspicious movements.",
      "Oversee GPS tracking platforms, telematics systems, dashcams and speed governors.",
      "Monitor driver behaviour and identify speeding, harsh braking and other road safety risks.",
      "Coordinate incident response involving accidents, breakdowns, security threats and route deviations.",
      "Prepare daily, weekly and monthly operational reports.",
      "Monitor fleet utilisation, tracking compliance and control room performance.",
      "Coordinate with transport managers, workshop teams, security personnel and technology providers.",
      "Ensure compliance with company transport policies and applicable Kenyan transport regulations.",
      "Identify operational risks and recommend improvements in fleet efficiency and safety."
    ],

    requirements: [
      "Bachelor's Degree in Information Technology, Computer Science, Telecommunications, Transport and Logistics, Fleet Management, Operations Management or a related discipline.",
      "At least 3–5 years of relevant experience in fleet tracking, telematics, transport operations or control room management.",
      "At least 3 years of experience in a supervisory or managerial position.",
      "Demonstrable experience managing a busy control room or centralised monitoring operation.",
      "Experience managing large commercial fleets, preferably 600+ vehicles and 1,500 telematics devices.",
      "Practical experience working with multiple GPS tracking platforms.",
      "Experience managing dashcam and video telematics solutions.",
      "Knowledge of vehicle tracking devices, speed governors and associated telematics equipment.",
      "Experience handling operational incidents, investigations and escalations.",
      "Ability to prepare operational reports and analyse fleet performance data."
    ],

    technicalSkills: [
      "GPS tracking, geofencing and route monitoring.",
      "Telematics device configuration and troubleshooting.",
      "Dashcam systems, video monitoring and footage retrieval.",
      "Speed governor monitoring and compliance.",
      "Fleet management and vehicle utilisation analysis.",
      "Incident management, investigation and escalation.",
      "Microsoft Excel, dashboards and management reporting.",
      "Basic IP networking, GSM, SIM connectivity and internet troubleshooting.",
      "Data management and operational documentation."
    ],

    preferredExperience: [
      "Tracksolid / Tracksolid Pro",
      "Wialon",
      "LYTX DriveCam",
      "Surfsight",
      "Experience working with equivalent GPS tracking and fleet telematics platforms."
    ],

    status: "open",
    featured: true,
    applicationEmail: "serviceslinkage@gmail.com"
  }
];

export const getOpenCareers = () =>
  careers.filter((career) => career.status === "open");

export const getCareerBySlug = (slug: string) =>
  careers.find((career) => career.slug === slug);
