import { CertificationItem, ContinuousLearningItem } from '../types/portfolio';

export const certifications: CertificationItem[] = [
  {
    id: "azure-devops-expert",
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft",
    year: "Certified Track",
    status: "Active",
    badgeLabel: "AZ-400 Track",
    verificationUrl: "" // Editable URL if public Microsoft Learn transcript link is added
  },
  {
    id: "azure-solutions-architect",
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    year: "Certified Track",
    status: "Active",
    badgeLabel: "AZ-305 Track",
    verificationUrl: "" // Editable URL
  },
  {
    id: "azure-administrator",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    year: "Certified Track",
    status: "Active",
    badgeLabel: "AZ-104 Track",
    verificationUrl: "" // Editable URL
  }
];

export const continuousLearning: ContinuousLearningItem[] = [
  {
    id: "ai-systems",
    domain: "Applied AI & Vector Architectures",
    topics: [
      "Large Language Models (LLMs)", 
      "Retrieval-Augmented Generation (RAG)", 
      "Vector Embeddings & Search", 
      "Agentic AI Patterns"
    ],
    status: "Active Exploration",
    note: "Exploring containerized agentic frameworks and hybrid search retrieval pipelines for engineering knowledge bases."
  },
  {
    id: "gitops-argocd",
    domain: "Modern Platform Engineering & GitOps",
    topics: [
      "Argo CD", 
      "Kubernetes Declarative Delivery", 
      "GitOps Drift Detection"
    ],
    status: "Active Exploration",
    note: "Expanding continuous delivery toolset with declarative GitOps patterns using Argo CD (learning & sandbox experimentation)."
  }
];
