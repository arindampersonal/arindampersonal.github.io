import { ExperienceItem } from '../types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: "tcs-senior-devops",
    company: "Tata Consultancy Services (TCS)",
    role: "Senior Azure DevOps Engineer / Cloud DevOps Engineer",
    period: "2018 — Present (~6+ Years)", // Subject to updating exact duration
    location: "Kolkata, India",
    isCurrent: true,
    summary: "Leading cloud infrastructure operations, CI/CD pipeline automation, and enterprise Azure virtualization for mission-critical client environments.",
    responsibilities: [
      "Architect and maintain scalable Microsoft Azure environments with an emphasis on security, high availability, and operational resilience.",
      "Design and maintain multi-stage Azure DevOps and GitLab CI/CD pipelines incorporating SonarQube static code quality gates and Key Vault secret integration.",
      "Manage enterprise Azure Virtual Desktop (AVD) environments and FSLogix user profile storage systems powered by Azure NetApp Files.",
      "Author declarative Infrastructure as Code using Terraform and develop automation scripts in PowerShell and Python to eliminate manual operational friction.",
      "Oversee centralized monitoring, Log Analytics queries, and alert topologies to ensure fast incident detection and resolution."
    ],
    keyTechnologies: [
      "Microsoft Azure",
      "Azure DevOps Pipelines",
      "GitLab CI/CD",
      "Terraform",
      "PowerShell",
      "Python",
      "Azure Virtual Desktop",
      "FSLogix",
      "Azure NetApp Files",
      "SonarQube",
      "Azure Monitor",
      "Key Vault"
    ]
  }
];
