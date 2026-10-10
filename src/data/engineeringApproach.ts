export interface EngineeringPhase {
  id: string;
  stepNumber: string;
  name: string;
  principle: string;
  description: string;
  tooling: string[];
  deliverable: string;
}

export const engineeringPhases: EngineeringPhase[] = [
  {
    id: "iac-declaration",
    stepNumber: "01",
    name: "Declarative Source & IaC",
    principle: "Code as the Single Source of Truth",
    description: "Every cloud resource is declared in version-controlled Terraform modules. Drift is caught early, and no manual changes are permitted in production subscriptions.",
    tooling: ["Terraform", "Git", "YAML", "Azure Resource Manager"],
    deliverable: "Deterministic, plan-reviewed state snapshots"
  },
  {
    id: "automated-verification",
    stepNumber: "02",
    name: "Automated Quality & Security Gates",
    principle: "Shift-Left Verification",
    description: "Static code analysis runs on every pull request. SonarQube enforces quality gates, security vulnerabilities, and test coverage before artifact creation.",
    tooling: ["SonarQube", "pytest", "Ruff", "Secret Scanning"],
    deliverable: "Validated codebase with zero unvetted security hotspots"
  },
  {
    id: "zero-trust-packaging",
    stepNumber: "03",
    name: "Immutable Containerization & Secrets",
    principle: "Zero-Trust Artifact Hygiene",
    description: "Multi-stage Docker builds generate minimal, hardened images. Ephemeral tokens and secrets are injected strictly via Azure Key Vault and Managed Identities.",
    tooling: ["Docker", "Azure Key Vault", "Managed Identity", "Azure Container Registry"],
    deliverable: "Signed, immutable container and deployment packages"
  },
  {
    id: "orchestrated-delivery",
    stepNumber: "04",
    name: "Continuous Delivery Pipelines",
    principle: "Gated, Repeatable Promotions",
    description: "Multi-stage Azure DevOps and GitLab CI/CD pipelines automate canary and staged rollouts. Approvals are tied to environment gates with instant rollback capabilities.",
    tooling: ["Azure DevOps Pipelines", "GitLab CI/CD", "GitHub Actions", "Azure DNS"],
    deliverable: "Zero-downtime automated deployment to production"
  },
  {
    id: "observability-operations",
    stepNumber: "05",
    name: "Telemetry, Resilience & Virtualization",
    principle: "Proactive, Observable Operations",
    description: "Centralized Log Analytics workspaces and Azure Monitor dashboards stream live diagnostic events. AVD session hosts scale dynamically based on peak utilization.",
    tooling: ["Azure Monitor", "Log Analytics", "FSLogix", "PowerShell Automation"],
    deliverable: "High-availability, self-healing cloud infrastructure"
  }
];
