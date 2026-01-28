// Personal data - Easy to update
const DATA = {
    // Basic info
    name: "Boriss Novickovs",
    title: "Sr. Technical DevOps Engineer",
    location: "Dubai, UAE",
    company: "Emirates",
    experience_years: "9+",

    // Contact links
    links: {
        linkedin: "https://www.linkedin.com/in/bnovickovs/",
        github: "https://github.com/kubebn",
        blog: "https://dev.to/bnovickovs",
        email: "bnovickovs@gmail.com"
    },

    // Summary
    summary: `Kubernetes & Cloud-Native Architect with 9+ years of experience
architecting & delivering large, secure, scalable, and resilient
Microservices Platforms across Multi-Cloud Environments (AWS, Azure, GCP).

Specialized in GPU & AI/ML Infrastructure, Cloud Platform Engineering,
and driving DevOps Culture to streamline the SDLC and deployment process.`,

    // Skills organized by category
    skills: {
        "Container & Orchestration": ["Docker", "Kubernetes", "EKS", "AKS", "GKE", "OpenShift", "Rancher", "Helm", "Kubeadm"],
        "GitOps & Service Mesh": ["ArgoCD", "FluxCD", "Istio", "Anthos", "Envoy Gateway", "Argo Rollouts"],
        "AI/ML & GPU": ["NVIDIA GPU Virtualization", "GPU Passthrough", "Kubeflow", "AIBRIX", "LLM-D", "GPU Scheduling"],
        "Infrastructure as Code": ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
        "CI/CD & Automation": ["GitLab CI", "GitHub Actions", "Azure DevOps", "Jenkins", "Taskfile", "Bash", "Python"],
        "Cloud Platforms": ["AWS", "Azure", "GCP", "OpenStack", "Proxmox", "VMware vSphere"],
        "Observability": ["Prometheus", "Grafana", "Loki", "Mimir", "ELK Stack", "Dynatrace", "OpenTelemetry", "Sysdig"],
        "Networking & Security": ["Cilium", "Calico", "Nginx Ingress", "MetalLB", "Vault", "Kyverno", "OPA"],
        "Storage & Databases": ["PostgreSQL", "MySQL", "Cassandra", "CEPH", "OpenEBS", "Linstor", "S3/Minio"],
        "Virtualization": ["KubeVirt", "QEMU/KVM", "Hyper-V", "VMware", "Proxmox"]
    },

    // GPU/AI Infrastructure details for nvidia-smi
    gpu: {
        experience: [
            "GPU Virtualization & Passthrough",
            "GPU-aware K8s Platform Design",
            "NVIDIA Tech for AI/ML Pipelines",
            "GPU Scheduling Optimization",
            "Service Mesh for GPU Workloads",
            "Kubeflow & AIBRIX & LLM-D",
            "Multi-cloud AI/ML Infra"
        ],
        achievements: [
            "GPU K8s @ Emirates",
            "GKE+Anthos ML Clusters",
            "GPU-accelerated Inference",
            "K8s GPU Workshops",
            "OpenShift ML Platform"
        ],
        tools: ["GPU Operator", "CUDA", "Kubeflow", "AIBRIX", "LLM-D", "TensorRT"]
    },

    // Key Projects
    projects: [
        {
            name: "gpu-k8s-platform",
            description: "GPU-aware Kubernetes Platform for AI/ML workloads",
            company: "Emirates",
            status: "Running",
            highlights: [
                "GPU Virtualization & Passthrough implementation",
                "Optimized GPU scheduling and resource allocation",
                "Service mesh patterns for GPU-backed workloads",
                "Enabled AI/ML teams to deploy inference & training workloads"
            ]
        },
        {
            name: "multi-tenant-platform",
            description: "Multi-tenant K8s platform on Azure/AWS (EKS/AKS)",
            company: "Emirates",
            status: "Running",
            highlights: [
                "GitOps system with FluxCD",
                "vCluster for soft-isolation",
                "Automation via GitLab CI",
                "Resource management via Helm"
            ]
        },
        {
            name: "aks-azure-landing-zone",
            description: "AKS clusters deployment in Azure landing zone",
            company: "Emirates",
            status: "Running",
            highlights: [
                "AKS blueprint implementation",
                "GitLab Runners integration with Azure AKS",
                "True multi-cloud CI/CD enablement",
                "Terraform backend state in Azure"
            ]
        },
        {
            name: "gke-anthos-ml-platform",
            description: "AI/ML-ready GKE clusters with Anthos Service Mesh",
            company: "GFT",
            status: "Completed",
            highlights: [
                "Financial services sector deployment",
                "Complete GKE design template with security patterns",
                "Argo Rollouts for ML model deployments",
                "GPU-accelerated inference pipelines"
            ]
        },
        {
            name: "global-openshift-platform",
            description: "Global OpenShift Platform for ML workloads",
            company: "Experian",
            status: "Completed",
            highlights: [
                "Multi-geography deployment",
                "Cilium SDN migration for GPU-backed apps",
                "100+ node cluster management",
                "ArgoCD GitOps practices"
            ]
        }
    ],

    // Experience
    experience: [
        {
            company: "emirates",
            role: "Sr. Technical DevOps Engineer | Container Management",
            period: "May 2024 - Present",
            location: "Dubai",
            status: "Running",
            age: "8mo",
            description: `Partnering with Sr. Leadership for Cloud Native Application,
Microservices, GPU Virtualization, and Kubernetes Tuning strategies.

KEY ACHIEVEMENTS:
- Architected GPU-aware Kubernetes Platforms for AI/ML workloads
- 40% improvement in deployment speed, 60% reduction in downtime
- Reduced manual configuration efforts by 80%
- Enhanced deployment frequency, 75% reduction in rollback incidents
- Multi-tenant platform on Azure/AWS with FluxCD & vCluster`,
            technologies: ["EKS", "AKS", "FluxCD", "Terraform", "GPU Scheduling", "Istio"]
        },
        {
            company: "intapp",
            role: "Senior DevOps Engineer",
            period: "Aug 2023 - Sep 2024",
            location: "London",
            status: "Completed",
            age: "1y1mo",
            description: `Managed Kubernetes clusters (EKS, AKS, kops) and delivered
architecture guidance for containerized environments.

KEY ACHIEVEMENTS:
- Secure AKS/EKS architectures for partner-facing SaaS
- GPU-based workloads for advanced analytics
- Accelerated AKS upgrade pipeline with minimal downtime
- Kyverno policies for cost optimization
- Containerized Python script for 30+ Kubecost deployments`,
            technologies: ["AKS", "EKS", "ArgoCD", "Kyverno", "Istio", "Terraform"]
        },
        {
            company: "gft",
            role: "Senior Kubernetes Cloud Engineer",
            period: "Oct 2021 - Aug 2023",
            location: "London",
            status: "Completed",
            age: "1y10mo",
            description: `Spearheaded AI/ML-ready GKE clusters with Anthos Service Mesh
for financial services clients.

KEY ACHIEVEMENTS:
- Complete GKE design template with security patterns
- Argo Rollouts for ML model deployments (Canary, Dark Release)
- GPU-accelerated inference with minimal risk
- Internal workshops on GPU Scheduling in Kubernetes
- Key point of contact with Google Cloud Teams`,
            technologies: ["GKE", "Anthos", "Istio", "Argo Rollouts", "Terraform", "GPU"]
        },
        {
            company: "experian",
            role: "OpenShift/Kubernetes DevOps Engineer",
            period: "Oct 2020 - Oct 2021",
            location: "Nottingham",
            status: "Completed",
            age: "1y",
            description: `Key role in Global OpenShift Platform deployment supporting
ML-driven workloads across multiple geographies.

KEY ACHIEVEMENTS:
- Cilium SDN migration for improved GPU-backed app networking
- 100+ node RedHAT OpenShift/Kubernetes cluster management
- AWS bastion hosts & Terraform automation
- GitOps practices using ArgoCD for AI/ML environments`,
            technologies: ["OpenShift", "Cilium", "ArgoCD", "Terraform", "AWS"]
        },
        {
            company: "trakm8",
            role: "Service Delivery Engineer",
            period: "Dec 2019 - Oct 2020",
            location: "Coleshill",
            status: "Completed",
            age: "10mo",
            description: `Service delivery and infrastructure management for telematics solutions.`,
            technologies: ["Linux", "Docker", "CI/CD", "Monitoring"]
        },
        {
            company: "tcs",
            role: "System Administrator/Data Centre Hosting Engineer",
            period: "Jul 2017 - Nov 2019",
            location: "Solihull",
            status: "Completed",
            age: "2y4mo",
            description: `Data centre operations and system administration.

KEY RESPONSIBILITIES:
- Server administration (IBM, HPE, DELL EMC)
- Virtualization (VMware, Hyper-V)
- Network infrastructure management`,
            technologies: ["VMware", "Windows Server", "Linux", "Networking"]
        }
    ],

    // Education
    education: [
        {
            degree: "Bachelor of Engineering",
            field: "Computer Systems & Networks",
            institution: "Edinburgh Napier University",
            year: "2017",
            grade: "2:1"
        },
        {
            degree: "HND",
            field: "Internetworking Technologies, CCNA",
            institution: "Dundee & Angus College",
            year: "2015",
            grade: "A"
        }
    ],

    // Certifications
    certifications: [
        { name: "Certified Terraform Associate", issuer: "HashiCorp", year: "2022" },
        { name: "ITIL Foundation Certificate", issuer: "PeopleCert", year: "2017" },
        { name: "CCNA Routing and Switching", issuer: "Cisco", year: "2015" },
        { name: "CCNA Scaling Networks", issuer: "Cisco", year: "2015" },
        { name: "CCNA Network Fundamentals", issuer: "Cisco", year: "2014" }
    ],

    // Neofetch display
    neofetch: {
        logo: [
            "      ┌──⎈──┐      ",
            "     ╱       ╲     ",
            "   ⎈           ⎈   ",
            "   │     ●     │   ",
            "   ⎈           ⎈   ",
            "     ╲       ╱     ",
            "      └──⎈──┘      ",
            "    Kubernetes     "
        ],
        info: [
            { label: "Host", value: "Emirates, Dubai" },
            { label: "Role", value: "Sr. Technical DevOps Engineer" },
            { label: "Uptime", value: "9+ years in tech" },
            { label: "Shell", value: "Terraform + Ansible + Python" },
            { label: "DE", value: "GitOps (ArgoCD/FluxCD)" },
            { label: "WM", value: "Kubernetes (EKS/AKS/GKE/OpenShift)" },
            { label: "GPU", value: "NVIDIA Virtualization & Scheduling" },
            { label: "Certs", value: "Terraform, CCNA, ITIL" }
        ]
    }
};

// Available commands for help and tab completion
const COMMANDS = [
    { cmd: "help", desc: "List all available commands" },
    { cmd: "whoami", desc: "Display profile summary" },
    { cmd: "neofetch", desc: "Display system-style profile" },
    { cmd: "nvidia-smi", desc: "Display GPU/AI infrastructure experience" },
    { cmd: "k get skills", desc: "List technical skills by category" },
    { cmd: "k get experience", desc: "List work history" },
    { cmd: "k get projects", desc: "List key projects" },
    { cmd: "k get certs", desc: "List certifications" },
    { cmd: "k get education", desc: "List education" },
    { cmd: "k describe project <name>", desc: "Detailed project info" },
    { cmd: "contact", desc: "Show contact information" },
    { cmd: "ssh linkedin", desc: "Open LinkedIn profile" },
    { cmd: "ssh github", desc: "Open GitHub profile" },
    { cmd: "ssh blog", desc: "Open dev.to blog" },
    { cmd: "history", desc: "Show command history" },
    { cmd: "clear", desc: "Clear terminal screen" }
];

// Easter eggs
const EASTER_EGGS = {
    // Classic attempts
    "sudo rm -rf /": "Nice try. Permission denied.",
    "sudo rm -rf / --no-preserve-root": "I admire your persistence. Still no.",
    "rm -rf /": "Permission denied. Nice try though!",
    ":(){ :|:& };:": "Fork bomb detected. Request denied.",
    "cat /etc/passwd": "Nice try, hacker.",

    // Shell navigation
    "exit": "There is no escape from this container. Type 'help' instead.",
    "quit": "There is no escape from this container. Type 'help' instead.",
    "logout": "Session is eternal. You're stuck with me.",
    "pwd": "/app - Running in distroless container",
    "cd": "cd: command not found - This is a distroless image, no shell available.",
    "cd ..": "cd: command not found - Distroless container, remember?",
    "ls": "ls: command not found - Distroless image. Try 'k get skills' instead.",
    "ls -la": "ls: command not found - We're distroless here! Use 'k get' commands.",
    "bash": "bash: command not found - This is a distroless container. No shell!",
    "sh": "sh: command not found - Distroless. Security first!",
    "/bin/sh": "/bin/sh: not found - Distroless image. Attack surface minimized.",
    "/bin/bash": "/bin/bash: not found - Distroless. No shell, no problem.",

    // Editor wars
    "vim": "vim: command not found - Distroless container. Plus you'd be stuck forever anyway.",
    "vi": "vi: command not found - Distroless. Use 'k get skills' to see my real tools.",
    "nano": "nano: command not found - Distroless image. No editors here.",
    "emacs": "emacs: command not found - And let's not start that war here.",

    // Docker/Container jokes
    "docker": "Error: Docker socket not mounted. This is Kubernetes territory!",
    "docker run": "Error: We don't do that here. This is a Kubernetes-native zone.",
    "docker ps": "Error: Docker daemon not found. Pods are the new containers.",
    "docker exec": "Error: Use 'kubectl exec' instead. Welcome to the cloud-native world!",
    "docker-compose": "docker-compose: deprecated. Try Helm or Kustomize!",
    "docker build": "Error: Use Kaniko, Buildah, or ko for in-cluster builds.",

    // Kubernetes fun
    "kubectl delete pod boriss": "Error: Pod 'boriss' is protected by PodDisruptionBudget. minAvailable: 1",
    "k delete pod boriss": "Error: Pod 'boriss' is protected by PodDisruptionBudget. minAvailable: 1",
    "kubectl delete namespace production": "Error: Forbidden. Nice try though!",
    "k delete namespace production": "Error: Forbidden. RBAC says no.",
    "kubectl exec": "Error: Container is distroless. No shell to exec into!",
    "k exec": "Error: Distroless container. SecurityContext: readOnlyRootFilesystem: true",
    "kubectl logs": "Logs shipped to Loki. Check Grafana dashboard instead!",
    "k logs": "Logs are in Grafana Loki. Observability is key!",
    "kubectl rollout undo": "GitOps enabled. Revert the commit in Git instead!",
    "k rollout undo": "ArgoCD is watching. Just revert in Git!",
    "kubectl apply -f": "Error: GitOps only. Push to Git and let ArgoCD sync.",
    "k apply -f": "Error: This cluster uses GitOps. Commit to repo instead!",
    "kubectl edit": "Error: Immutable infrastructure. Edit the source in Git!",
    "k edit": "Error: We practice GitOps here. No manual edits!",

    // Terraform/IaC
    "terraform apply": "Infrastructure is already perfect. No changes needed.",
    "terraform destroy": "Error: DeletionPolicy: Retain. Resources are precious.",
    "terraform plan": "No changes. Infrastructure is in desired state.",
    "terraform init": "Terraform already initialized. Backend: Kubernetes Secret.",
    "pulumi up": "Using Terraform here. But Pulumi is cool too!",
    "ansible-playbook": "Ansible? We use Kubernetes operators now!",

    // Monitoring attempts
    "top": "top: command not found - Distroless. Try 'nvidia-smi' for GPU metrics!",
    "htop": "htop: command not found - Check Grafana for resource metrics.",
    "ps aux": "ps: command not found - Distroless container. Use 'k get projects' instead.",
    "free -m": "free: command not found - Memory limits set via K8s resources.",
    "df -h": "df: command not found - Using ephemeral storage with limits.",
    "watch nvidia-smi": "watch: command not found - But try 'nvidia-smi' for GPU experience!",

    // Network tools
    "curl": "curl: command not found - Distroless. Try 'contact' to reach me!",
    "wget": "wget: command not found - Distroless image. Minimal attack surface.",
    "ping": "ping: command not found - Network policies are strict here.",
    "ping google.com": "ping: command not found - But trust me, networking works great!",
    "netstat": "netstat: command not found - Use 'k get skills' to see networking expertise.",
    "ss": "ss: command not found - Cilium handles all the networking.",
    "nmap": "nmap: command not found - Security scanning? I use Trivy and Falco.",
    "telnet": "telnet: command not found - It's 2024, we use mTLS (Istio).",

    // Package managers
    "apt": "apt: command not found - Distroless. No package manager needed.",
    "apt-get": "apt-get: command not found - Immutable container image.",
    "yum": "yum: command not found - This isn't RHEL. It's distroless.",
    "apk": "apk: command not found - Not Alpine. Distroless ftw!",
    "pip": "pip: command not found - Dependencies baked into image at build time.",
    "npm": "npm: command not found - Node modules? In production? No thanks.",

    // Fun greetings
    "hello": "Hello, World! Type 'help' to see what I can do.",
    "hi": "Hey there! Type 'help' to get started.",
    "hey": "Hey! Ready to explore? Try 'neofetch' or 'nvidia-smi'.",

    // Coffee break
    "make": "make: command not found - Try 'make coffee' anyway!",
    "make coffee": "Brewing... Done! Now type 'help' to explore.",
    "brew": "brew: command not found - But I do love a good coffee!",
    "brew install": "We're in a container, not macOS! Try 'k get skills'.",

    // Misc
    "man": "man: command not found - But 'help' works great!",
    "whoami --verbose": "You are a curious visitor exploring a distroless container!",
    "cat": "cat: command not found - Distroless. Use the terminal commands instead!",
    "echo": "echo: command not found - Just type what you want to run!",
    "grep": "grep: command not found - Distroless. Try 'k get skills | grep GPU' mentally!",
    "awk": "awk: command not found - We process YAML here, not text files.",
    "sed": "sed: command not found - Kustomize patches are the new sed.",
    "chmod": "chmod: command not found - readOnlyRootFilesystem: true",
    "chown": "chown: command not found - Running as non-root. SecurityContext enforced.",
    "su": "su: command not found - No privilege escalation. runAsNonRoot: true",
    "sudo": "sudo: command not found - No sudo in containers. Principle of least privilege!",

    // GitOps
    "git push --force": "Warning: Protected branch. GitOps requires PR approval!",
    "git commit": "Remember: Signed commits required. GPG key configured?",
    "flux": "FluxCD is my GitOps tool of choice. Try 'k get projects'!",
    "argocd": "ArgoCD + Argo Rollouts = Progressive delivery excellence!",
    "helm install": "Charts are ready. But we deploy via GitOps here!",
    "helm upgrade": "Helm releases managed by ArgoCD. Check the ApplicationSet!",

    // Cloud CLIs
    "aws": "aws: command not found - Use Terraform or Crossplane for AWS!",
    "az": "az: command not found - Azure resources managed via IaC.",
    "gcloud": "gcloud: command not found - GCP infra is Terraformed.",

    // The classics that must stay
    "matrix": "Wake up, Neo... The Kubernetes has you.",
    "hack": "Access denied. But nice to meet a fellow security enthusiast!",
    "password": "Secrets are in HashiCorp Vault, encrypted with transit engine.",
    "secret": "Secrets? Check Vault or External Secrets Operator."
};
