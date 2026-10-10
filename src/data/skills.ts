import { SkillCategory } from '../types/portfolio';

export const skills: SkillCategory[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure & Platforms",
    description: "Enterprise multi-region design, networking, storage architectures, and identity governance on Microsoft Azure.",
    iconName: "Cloud",
    skills: [
      { name: "Microsoft Azure", level: "production", highlight: true },
      { name: "Azure NetApp Files", level: "production", highlight: true },
      { name: "Azure Key Vault", level: "production", highlight: true },
      { name: "Azure Monitor", level: "production" },
      { name: "Log Analytics", level: "production" },
      { name: "Virtual Networks & Subnets", level: "production" },
      { name: "Private Endpoints & DNS", level: "production" },
      { name: "Azure Static Web Apps", level: "production" },
      { name: "Azure DNS", level: "production" },
    ]
  },
  {
    id: "iac-automation",
    title: "Infrastructure as Code & Scripting",
    description: "Declarative infrastructure management, automated configuration, and system orchestration tools.",
    iconName: "Terminal",
    skills: [
      { name: "Terraform", level: "production", highlight: true },
      { name: "PowerShell", level: "production", highlight: true },
      { name: "Python", level: "production", highlight: true },
      { name: "YAML", level: "production" },
      { name: "Bash / Shell", level: "applied" },
      { name: "SQLAlchemy", level: "applied" },
    ]
  },
  {
    id: "cicd-devops",
    title: "Continuous Delivery & DevSecOps",
    description: "Automated pipelines, artifact versioning, static analysis gates, and containerized deployment flows.",
    iconName: "GitMerge",
    skills: [
      { name: "Azure DevOps Pipelines", level: "production", highlight: true },
      { name: "GitLab CI/CD", level: "production", highlight: true },
      { name: "GitHub Actions", level: "production" },
      { name: "Docker", level: "production", highlight: true },
      { name: "SonarQube", level: "production" },
      { name: "pytest", level: "production" },
      { name: "Ruff", level: "applied" },
      { name: "JIRA", level: "production" },
    ]
  },
  {
    id: "virtualization-vdi",
    title: "Virtualization & Enterprise Workspaces",
    description: "Large-scale remote desktop virtualization, storage optimization, and user profile management.",
    iconName: "Monitor",
    skills: [
      { name: "Azure Virtual Desktop (AVD)", level: "production", highlight: true },
      { name: "FSLogix Profile Containers", level: "production", highlight: true },
      { name: "Host Pool Scaling & Policies", level: "production" },
      { name: "Golden Image Management", level: "production" },
    ]
  },
  {
    id: "ai-emerging",
    title: "Emerging Platforms & Applied AI",
    description: "Active engineering explorations in generative AI architectures, vector retrieval, and next-generation delivery tools.",
    iconName: "Sparkles",
    skills: [
      { name: "Large Language Models (LLMs)", level: "exploratory" },
      { name: "Retrieval-Augmented Gen (RAG)", level: "exploratory", highlight: true },
      { name: "Embeddings & Vector Databases", level: "exploratory" },
      { name: "Agentic AI Architectures", level: "exploratory" },
      { name: "FastAPI", level: "applied" },
      { name: "Argo CD", level: "exploratory", note: "Continuous exploration track" },
    ]
  }
];
