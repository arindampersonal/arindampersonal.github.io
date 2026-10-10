import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: "lifeops",
    title: "LifeOps",
    tagline: "Personal life-management platform engineered for living with intent",
    category: "Production Flagship",
    isFlagship: true,
    status: "Live in Production",
    featuredOrder: 1,
    imageUrl: "./images/project-lifeops.jpg",
    links: {
      liveUrl: "https://lifeops.living",
      repoUrl: "", // Editable if public code link is added
    },
    summary: "LifeOps is an engineered personal operating system designed to elevate intentionality in everyday routines, metrics, and goals. Rather than presenting LifeOps merely as a consumer product, this case study breaks down its production-grade backend, continuous delivery pipelines, and cloud hosting architecture.",
    problemStatement: "Most personal productivity platforms suffer from vendor lock-in, heavy UI bloat, and fragmented data architectures. The engineering objective was to design a private, blazing-fast life-management platform with zero operational downtime, automated testing feedback loops, and immutable infrastructure provisioning.",
    personalImplementation: [
      "Architected and implemented the core REST API backend using Python and FastAPI paired with SQLAlchemy ORM.",
      "Engineered multi-stage production Docker packaging with strict dependency pinning and non-root execution.",
      "Configured continuous integration in GitLab CI/CD with automated code quality gates (Ruff) and unit testing (pytest).",
      "Codified and provisioned the entire cloud footprint with Terraform on Microsoft Azure.",
      "Deployed global edge distribution via Azure Static Web Apps and custom domain management on Azure DNS."
    ],
    deliveryAutomation: "GitLab CI/CD pipeline triggers on every commit: builds isolated Docker containers, executes Ruff linting and pytest suites with coverage gates, and automatically publishes immutable release packages to Azure Static Web Apps.",
    futureRoadmap: [
      "Integration of local vector embeddings for automated semantic journaling and weekly habit reflections.",
      "Automated database migration pipelines using Alembic in containerized pre-deploy hooks.",
      "Enhanced system metrics dashboard streaming backend latency to Azure Monitor."
    ],
    highlights: [
      "Engineered with a high-throughput Python and FastAPI backend paired with SQLAlchemy ORM.",
      "Containerized via Docker with strict multi-stage production builds and dependency pinning.",
      "Automated continuous integration pipeline in GitLab CI/CD featuring Ruff linting and pytest suites.",
      "Infrastructure declared in Terraform and provisioned on Microsoft Azure.",
      "Edge-deployed with Azure Static Web Apps and custom domain management on Azure DNS."
    ],
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Docker",
      "GitLab CI/CD",
      "Ruff",
      "pytest",
      "Terraform",
      "Azure",
      "Azure Static Web Apps",
      "Azure DNS"
    ],
    architecture: {
      challenge: "Designing a dependable, minimal-overhead cloud application with zero downtime, instant test feedback loops, and immutable infrastructure provisioning without inflating operational burden.",
      solution: "Established a unified GitLab CI/CD pipeline executing automated linting (Ruff) and unit testing (pytest) inside isolated Docker containers before deploying immutable application bundles to Azure Static Web Apps. The supporting DNS and cloud services are declared and codified with Terraform.",
      infrastructure: [
        "Azure Static Web Apps (Edge-distributed web tier)",
        "Azure DNS (Automated zone resolution & TLS handling)",
        "Terraform (State-managed resource provisioning)"
      ],
      pipeline: [
        "Stage 1: Lint & Format Check (Ruff in Docker)",
        "Stage 2: Automated Unit Testing (pytest with coverage)",
        "Stage 3: Multi-stage Docker Container Packaging",
        "Stage 4: Automated Deployment & Health Validation"
      ],
      verificationNote: "Verified live production deployment running at https://lifeops.living"
    }
  },
  {
    id: "avd-enterprise",
    title: "Enterprise Azure Virtual Desktop & FSLogix Platform",
    tagline: "High-density virtual desktop infrastructure with sub-second profile attach",
    category: "Virtualization & Cloud Infrastructure",
    status: "Enterprise Architecture",
    featuredOrder: 2,
    imageUrl: "./images/project-avd.jpg",
    links: {
      liveUrl: "",
      repoUrl: "",
    },
    summary: "Architected and maintained multi-session Azure Virtual Desktop environments supporting enterprise users at Tata Consultancy Services. Integrated FSLogix profile containers hosted on high-throughput Azure NetApp Files to ensure seamless session mobility, robust disaster recovery, and ultra-low logon latency.",
    problemStatement: "Enterprise remote workforce fleets faced erratic login peaks causing profile corruption, slow desktop logon times (>60s), and runaway cloud compute costs during off-peak hours.",
    personalImplementation: [
      "Configured high-throughput FSLogix user profile containers on Azure NetApp Files for sub-second profile attach.",
      "Implemented dynamic AVD host pools with automated scaling plans to balance user concurrency and compute expenditure.",
      "Hardened golden OS images with automated patching, Group Policies, and Azure Key Vault administrator secret retrieval.",
      "Established centralized Log Analytics diagnostic pipelines streaming session metrics and host health alerts."
    ],
    deliveryAutomation: "Automated PowerShell runbooks and Azure Automation schedules execute daily off-peak deallocations and dynamic spin-up during peak business hours based on concurrent session thresholds.",
    futureRoadmap: [
      "Transitioning golden image build automation to Azure Image Builder with automated Packer pipelines.",
      "Exploring Ephemeral OS disks for stateless session hosts to further reduce storage costs."
    ],
    highlights: [
      "Provisioned and scaled dynamic AVD host pools with automated scaling plans to balance performance and compute cost.",
      "Configured high-throughput FSLogix user profile containers on Azure NetApp Files for instant logon experiences.",
      "Hardened VM security with automated OS baseline patching and Azure Key Vault credential retrieval.",
      "Configured comprehensive diagnostic logs streaming to centralized Log Analytics workspaces."
    ],
    techStack: [
      "Azure Virtual Desktop",
      "FSLogix",
      "Azure NetApp Files",
      "PowerShell",
      "Azure Key Vault",
      "Log Analytics",
      "Host Pools"
    ],
    architecture: {
      challenge: "Managing large fleets of virtual desktops with erratic user logon peaks while preventing profile corruption and runaway compute costs.",
      solution: "Decoupled user profiles into FSLogix VHD containers hosted on Azure NetApp Files, decoupled image patching with scripted golden image builds, and automated off-peak deallocation using Azure Automation runbooks and PowerShell.",
      infrastructure: [
        "Azure NetApp Files (Ultra-low latency SMB profile storage)",
        "AVD Host Pools (Multi-session Windows 10/11 Enterprise)",
        "Azure Key Vault (Secure VM join & administrator secret management)"
      ],
      pipeline: [
        "Golden image provisioning and hardening script pipeline",
        "Automated host pool registration and session health checks",
        "Scheduled scaling automation based on concurrent active sessions"
      ],
      verificationNote: "Production enterprise architecture deployed for client infrastructure at TCS"
    }
  },
  {
    id: "devsecops-pipeline",
    title: "Zero-Trust Multi-Stage CI/CD Automation Engine",
    tagline: "Enterprise delivery pipelines with SonarQube quality gates and secretless authentication",
    category: "CI/CD & DevSecOps",
    status: "Enterprise Architecture",
    featuredOrder: 3,
    imageUrl: "./images/project-devsecops.jpg",
    links: {
      liveUrl: "",
      repoUrl: "",
    },
    summary: "Designed and standardized end-to-end continuous integration and delivery pipelines across Azure DevOps Pipelines and GitLab CI/CD. Incorporated automated static code quality gates and secret-injection safeguards.",
    problemStatement: "Multiple engineering teams used fragmented, snowflake deployment scripts resulting in deployment failures, security blindspots, and credentials accidentally exposed in YAML files.",
    personalImplementation: [
      "Designed standardized, modular YAML pipeline templates used across enterprise engineering squads.",
      "Integrated SonarQube automated quality gates enforcing zero critical vulnerabilities and mandatory code coverage.",
      "Eliminated stored credentials by implementing Managed Identities and Azure Key Vault ephemeral secret retrieval.",
      "Engineered blue/green artifact deployment stages with automated rollback triggers upon failure."
    ],
    deliveryAutomation: "Push-triggered multi-stage pipeline: Checkout → SonarQube Static Analysis → Unit Testing & Docker Packaging → Managed Identity Auth → Canary Staged Rollout.",
    futureRoadmap: [
      "Evaluating OpenID Connect (OIDC) federation between GitHub Actions/GitLab and Azure for 100% secretless workflows.",
      "Integrating automated software bill of materials (SBOM) generation into container build steps."
    ],
    highlights: [
      "Engineered reusable YAML pipeline templates utilized across multiple enterprise engineering squads.",
      "Integrated SonarQube static code analysis to enforce code quality, security hotspots, and minimum test coverage thresholds.",
      "Eliminated hardcoded credentials through Azure Key Vault task integration and Managed Identities.",
      "Automated deployment approvals, artifact versioning, and rollback verification hooks."
    ],
    techStack: [
      "Azure DevOps Pipelines",
      "GitLab CI/CD",
      "SonarQube",
      "Azure Key Vault",
      "Docker",
      "YAML",
      "PowerShell"
    ],
    architecture: {
      challenge: "Fragmented deployment scripts causing inconsistent environments, manual approval delays, and accidental secret exposures in build definitions.",
      solution: "Built a centralized repository of vetted YAML template steps with mandatory SonarQube quality gates, role-based pipeline approvals, and automated ephemeral token acquisition from Key Vault.",
      infrastructure: [
        "Azure DevOps Self-Hosted Agent Pools",
        "SonarQube Enterprise Server",
        "Azure Container Registry & Key Vault"
      ],
      pipeline: [
        "Stage 1: Code Checkout & Static Security Analysis (SonarQube)",
        "Stage 2: Unit Testing & Artifact Packaging (Docker)",
        "Stage 3: Ephemeral Credential Injection via Key Vault",
        "Stage 4: Blue/Green or Canary Deployment Execution"
      ],
      verificationNote: "Production enterprise pipeline template library"
    }
  },
  {
    id: "terraform-foundation",
    title: "Modular Azure Cloud Foundation with Terraform",
    tagline: "Production-ready Infrastructure as Code framework with hub-and-spoke networking",
    category: "Infrastructure as Code",
    status: "Modular Framework",
    featuredOrder: 4,
    imageUrl: "./images/project-terraform.jpg",
    links: {
      liveUrl: "",
      repoUrl: "",
    },
    summary: "Developed a comprehensive library of reusable Terraform modules for provisioning enterprise-grade Azure landing zones, secure network topologies, and centralized governance controls.",
    problemStatement: "Manual Azure Portal resource provisioning caused configuration drift, inconsistent networking topologies, security group discrepancies, and lack of audit trails across client environments.",
    personalImplementation: [
      "Authored modular Terraform code implementing hub-and-spoke VNet topologies, peering, and subnet isolation.",
      "Configured private endpoints and private DNS zones to ensure backend resources remain completely off the public internet.",
      "Automated remote state storage with Azure Blob Storage backend locking and customer-managed keys.",
      "Enforced pre-merge pipeline validation routines with `terraform fmt`, `terraform validate`, and speculative `plan`."
    ],
    deliveryAutomation: "Pull requests execute speculative Terraform plans as PR comments. Strict role-based approval is required before main branch merge triggers `terraform apply`.",
    futureRoadmap: [
      "Incorporating Trivy / tfsec automated security policy scanning directly into the pull request validation gate.",
      "Standardizing module releases using semantic versioning tags in a private Terraform registry."
    ],
    highlights: [
      "Implemented hub-and-spoke network topology with private endpoints and network security groups.",
      "Centralized Log Analytics workspace integration for automated compliance and resource auditing.",
      "State management configured with remote backend locking in Azure Blob Storage with customer-managed keys.",
      "Enforced strict linting, formatting, and plan validations before pull request merging."
    ],
    techStack: [
      "Terraform",
      "Microsoft Azure",
      "Azure Blob Storage",
      "Virtual Networks",
      "Log Analytics",
      "PowerShell"
    ],
    architecture: {
      challenge: "Ad-hoc manual resource creation in Azure portal causing configuration drift, lack of audit trails, and security gaps.",
      solution: "Established a declarative IaC repository with version-pinned Terraform modules, automated drift detection routines, and mandatory remote state locking.",
      infrastructure: [
        "Hub-and-Spoke Virtual Networks with Peering",
        "Private DNS Zones & Private Endpoints",
        "Diagnostic Settings connected to Log Analytics"
      ],
      pipeline: [
        "Automated terraform fmt & validate on pull request",
        "Speculative terraform plan execution with output artifact",
        "Gated terraform apply triggered strictly on main branch merge"
      ],
      verificationNote: "Modular IaC framework deployed across enterprise subscriptions"
    }
  },
  {
    id: "rag-ai-exploration",
    title: "Applied RAG & Cloud-Native AI Architecture",
    tagline: "Architectural sandbox for containerized LLM inference and vector search retrieval",
    category: "Applied AI Lab",
    status: "Engineering Lab",
    featuredOrder: 5,
    links: {
      liveUrl: "",
      repoUrl: "",
    },
    summary: "An active personal research and engineering lab evaluating retrieval-augmented generation (RAG) pipelines, embedding workflows, and vector store integration within containerized cloud environments.",
    problemStatement: "Evaluating practical operational challenges—context window token cost, chunking quality, latency tradeoffs, and vector retrieval accuracy—for enterprise engineering knowledge bases.",
    personalImplementation: [
      "Engineered Python ingestion pipelines evaluating recursive character vs. semantic document chunking.",
      "Prototyped hybrid search retrieval combining dense vector embeddings with BM25 keyword matching.",
      "Containerized lightweight FastAPI inference endpoints and deployed test workloads to Azure Container Apps.",
      "Benchmarked retrieval recall and latency across varying embedding dimensions."
    ],
    deliveryAutomation: "Local and cloud sandbox containers built via Docker and deployed to Azure Container Apps test environment.",
    futureRoadmap: [
      "Evaluating agentic tool-calling patterns using lightweight local LLM runtimes.",
      "Implementing reranking models (Cross-Encoder) to improve multi-document answer accuracy."
    ],
    highlights: [
      "Prototyping vector embedding ingestion pipelines using Python and modern embedding models.",
      "Evaluating chunking strategies, hybrid search (keyword + dense vector), and prompt templating.",
      "Exploring containerized model serving workflows on Azure Container Apps.",
      "Tracking emerging patterns in agentic workflows and tool-calling architectures."
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Vector Databases",
      "Embeddings / RAG",
      "Docker",
      "Azure Container Apps"
    ],
    architecture: {
      challenge: "Understanding operational considerations—latency, context window limits, vector indexing costs, and container orchestration—for enterprise generative AI workloads.",
      solution: "Built a sandboxed containerized FastAPI microservice with vector similarity search capabilities, simulating practical RAG document question-answering systems.",
      infrastructure: [
        "Containerized Python runtime",
        "Vector index store (in-memory / managed vector DB)",
        "Azure Container Apps (test deployment target)"
      ],
      pipeline: [
        "Document ingestion & semantic chunking script",
        "Vector embedding generation & index sync",
        "Context-augmented prompt querying endpoint"
      ],
      verificationNote: "Active personal research sandbox — exploratory engineering prototype"
    }
  }
];
