import { PersonalInfo } from '../types/portfolio';

export const profile: PersonalInfo = {
  name: "Arindam Dutta",
  preferredName: "Arindam",
  title: "Senior Azure DevOps & Cloud Engineer",
  secondaryTitle: "Platform Automation & Cloud Infrastructure Architect",
  location: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    remoteAvailability: "Available for Remote & Hybrid",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
  },
  experienceYears: "6+", // Editable field
  currentEmployer: "Tata Consultancy Services (TCS)",
  statusBadge: {
    text: "Available for Cloud & Platform Engineering",
    isAvailable: true,
  },
  headline: "Architecting resilient cloud platforms, automated delivery pipelines, and scalable enterprise infrastructure.",
  subheadline: "Senior Cloud & DevOps Engineer with 6+ years of expertise designing secure Azure environments, immutable Terraform architectures, zero-trust CI/CD pipelines, and high-performance virtualization systems.",
  bio: {
    introduction: "I specialize in transforming complex cloud operations into automated, self-healing, and observable platforms. With over six years of engineering at Tata Consultancy Services (TCS), I lead the design and deployment of enterprise Azure infrastructure, multi-stage CI/CD pipelines, and mission-critical virtualization solutions.",
    paragraphs: [
      "My work bridges the gap between systems architecture and developer velocity. Whether provisioning multi-tier cloud foundations with Terraform, hardening Azure Virtual Desktop environments with FSLogix profile virtualization, or automating compliance checks through SonarQube and Key Vault, I prioritize immutability, security-by-design, and operational calm.",
      "Beyond core cloud infrastructure, I am deeply invested in modern software craftsmanship—from building backend microservices with FastAPI and Python to engineering applied AI pipelines involving retrieval-augmented generation (RAG), vector stores, and agentic workflows."
    ],
    corePillars: [
      {
        title: "Infrastructure as Code",
        description: "Declarative, repeatable, and version-controlled environments via Terraform and modular architecture patterns.",
        icon: "Terminal",
      },
      {
        title: "Zero-Trust CI/CD & DevSecOps",
        description: "Automated test suites, static analysis via SonarQube, secretless pipelines, and gated canary promotions.",
        icon: "GitBranch",
      },
      {
        title: "Enterprise Virtualization",
        description: "Production Azure Virtual Desktop (AVD) architectures with FSLogix profile storage on Azure NetApp Files.",
        icon: "Layers",
      },
      {
        title: "Observability & Resilience",
        description: "Centralized telemetry, Log Analytics workspaces, structured diagnostics, and proactive alert fabrics.",
        icon: "Activity",
      }
    ]
  },
  photoConfig: {
    showPhoto: false, // Set to true when an approved photograph is provided
    url: "", // e.g., "/images/arindam.jpg"
    altText: "Arindam Dutta — Senior Azure DevOps & Cloud Engineer",
  },
  contact: {
    email: "arindaminaction@gmail.com", // Editable email
    linkedin: "https://www.linkedin.com/in/arindam-dutta", // Editable LinkedIn URL
    github: "https://github.com/arindampersonal", // Editable GitHub URL
    locationText: "Kolkata, India (IST / UTC+5:30)",
  }
};
