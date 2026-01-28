// Terminal emulator for personal website
(function() {
    'use strict';

    // DOM elements
    const output = document.getElementById('output');
    const input = document.getElementById('command-input');
    const cursor = document.querySelector('.cursor');
    const terminal = document.getElementById('terminal');

    // State
    let commandHistory = [];
    let historyIndex = -1;

    // Initialize terminal
    function init() {
        showWelcome();
        input.focus();
        updateCursorPosition();

        // Event listeners
        input.addEventListener('input', updateCursorPosition);
        input.addEventListener('keydown', handleKeyDown);
        terminal.addEventListener('click', () => input.focus());
        document.addEventListener('keydown', () => input.focus());

        // Run tests in development (check console)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            runTests();
        }
    }

    // Show welcome message
    function showWelcome() {
        const welcome = `
  <span class="white">██████╗  ██████╗ ██████╗ ██╗███████╗███████╗</span>
  <span class="white">██╔══██╗██╔═══██╗██╔══██╗██║██╔════╝██╔════╝</span>
  <span class="white">██████╔╝██║   ██║██████╔╝██║███████╗███████╗</span>
  <span class="white">██╔══██╗██║   ██║██╔══██╗██║╚════██║╚════██║</span>
  <span class="white">██████╔╝╚██████╔╝██║  ██║██║███████║███████║</span>
  <span class="white">╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝</span>  <span class="dim">NOVICKOVS</span>

  <span class="yellow">Sr. Technical DevOps Engineer</span> <span class="dim">|</span> <span class="cyan">Kubernetes & Cloud-Native Architect</span>
  <span class="dim">Emirates, Dubai</span>

<span class="dim">──────────────────────────────────────────────────────────────────────</span>

<span class="white">About:</span>
  ${DATA.experience_years}+ years designing & delivering large-scale, secure, resilient
  Microservices Platforms across Multi-Cloud (AWS, Azure, GCP).

  Specialized in shaping modern <span class="yellow">cloud-native AI ecosystems</span>, GPU-accelerated
  infrastructure, and driving <span class="cyan">DevOps & GitOps culture</span>.

<span class="white">Key Milestones:</span>
  <span class="cyan">⎈</span> SME in Kubernetes (EKS, AKS, GKE), GitOps (FluxCD, ArgoCD), Service Mesh
  <span class="cyan">⎈</span> GPU/AI Infrastructure: NVIDIA technologies, Kubeflow, ML orchestration
  <span class="cyan">⎈</span> Led Cloud Migrations & Digital Transformation projects end-to-end
  <span class="cyan">⎈</span> DevSecOps: security in CI/CD, compliance & vulnerability mitigation
  <span class="cyan">⎈</span> SRE practices: improved MTTD/MTTR, 24x7 ops, robust monitoring
  <span class="cyan">⎈</span> Team leadership & mentoring on K8s, GitOps, GPU Scheduling, SRE

<span class="dim">──────────────────────────────────────────────────────────────────────</span>
<span class="dim">Distroless container | SecurityContext: restricted | ReadOnlyFS: true</span>
<span class="dim">──────────────────────────────────────────────────────────────────────</span>

<span class="white">Quick Start:</span>
  <span class="cyan">help</span>          List all commands
  <span class="cyan">neofetch</span>      System-style profile
  <span class="cyan">nvidia-smi</span>    GPU/AI experience
  <span class="cyan">contact</span>       Get in touch
  <span class="cyan">k get</span>         skills | experience | projects | certs | education

<span class="dim">Tip: 'k' = 'kubectl' | Tab = autocomplete | Up/Down = history</span>

`;
        appendOutput(welcome);
    }

    // Update cursor position based on input
    function updateCursorPosition() {
        const pos = input.value.length;
        cursor.style.setProperty('--cursor-pos', pos);
    }

    // Handle keyboard input
    function handleKeyDown(e) {
        switch(e.key) {
            case 'Enter':
                e.preventDefault();
                processCommand();
                break;
            case 'ArrowUp':
                e.preventDefault();
                navigateHistory(-1);
                break;
            case 'ArrowDown':
                e.preventDefault();
                navigateHistory(1);
                break;
            case 'Tab':
                e.preventDefault();
                tabComplete();
                break;
            case 'c':
                if (e.ctrlKey) {
                    e.preventDefault();
                    cancelCommand();
                }
                break;
            case 'l':
                if (e.ctrlKey) {
                    e.preventDefault();
                    clearTerminal();
                }
                break;
        }
    }

    // Navigate command history
    function navigateHistory(direction) {
        if (commandHistory.length === 0) return;

        historyIndex += direction;

        if (historyIndex < 0) {
            historyIndex = 0;
        } else if (historyIndex >= commandHistory.length) {
            historyIndex = commandHistory.length;
            input.value = '';
        } else {
            input.value = commandHistory[historyIndex];
        }

        updateCursorPosition();
    }

    // Tab completion
    function tabComplete() {
        const current = input.value.toLowerCase().trim();
        if (!current) return;

        // Build list of completable commands
        const completions = COMMANDS.map(c => c.cmd);

        // Add project names for describe project command
        DATA.projects.forEach(proj => {
            completions.push(`k describe project ${proj.name}`);
            completions.push(`kubectl describe project ${proj.name}`);
        });

        // Find matches
        const matches = completions.filter(cmd =>
            cmd.toLowerCase().startsWith(current)
        );

        if (matches.length === 1) {
            input.value = matches[0];
            updateCursorPosition();
        } else if (matches.length > 1) {
            // Show possible completions
            appendOutput(`\n<span class="prompt">boriss@k8s-cluster:~$</span> <span class="command">${escapeHtml(current)}</span>\n`);
            appendOutput(`<span class="dim">${matches.join('  ')}</span>\n\n`);
        }
    }

    // Cancel current input
    function cancelCommand() {
        appendOutput(`<span class="prompt">boriss@k8s-cluster:~$</span> <span class="command">${escapeHtml(input.value)}</span>^C\n`);
        input.value = '';
        updateCursorPosition();
    }

    // Process entered command
    function processCommand() {
        const cmd = input.value.trim();

        // Show command in output
        appendOutput(`<span class="prompt">boriss@k8s-cluster:~$</span> <span class="command">${escapeHtml(cmd)}</span>\n`);

        // Add to history if not empty and not duplicate
        if (cmd && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== cmd)) {
            commandHistory.push(cmd);
        }
        historyIndex = commandHistory.length;

        // Clear input
        input.value = '';
        updateCursorPosition();

        // Execute command
        if (cmd) {
            const result = executeCommand(cmd);
            if (result) {
                appendOutput(`<span class="response">${result}</span>\n`);
            }
        }

        // Scroll to bottom
        scrollToBottom();
    }

    // Execute command and return result
    function executeCommand(cmd) {
        const cmdLower = cmd.toLowerCase().trim();

        // Check easter eggs first
        if (EASTER_EGGS[cmdLower]) {
            return `<span class="yellow">${EASTER_EGGS[cmdLower]}</span>`;
        }

        // Parse command
        const parts = cmdLower.split(/\s+/);
        let mainCmd = parts[0];

        // Handle kubectl/k alias
        if (mainCmd === 'kubectl' || mainCmd === 'k') {
            return cmdKubectl(parts.slice(1), cmd);
        }

        // Route to appropriate handler
        switch(mainCmd) {
            case 'help':
                return cmdHelp();
            case 'whoami':
                return cmdWhoami();
            case 'contact':
                return cmdContact();
            case 'neofetch':
                return cmdNeofetch();
            case 'nvidia-smi':
                return cmdNvidiaSmi();
            case 'ssh':
                return cmdSsh(parts[1]);
            case 'history':
                return cmdHistory();
            case 'clear':
                clearTerminal();
                return '';
            case '':
                return '';
            default:
                return `<span class="error">Command not found: ${escapeHtml(mainCmd)}</span>\nType <span class="white">'help'</span> to see available commands.`;
        }
    }

    // Command: help
    function cmdHelp() {
        let result = `\n<span class="white">Available Commands:</span>\n<span class="dim">══════════════════════════════════════════════════════════════════</span>\n\n`;

        // Find the longest command to set column width
        const maxLen = Math.max(...COMMANDS.map(c => c.cmd.length));
        const COL_WIDTH = maxLen + 2;

        COMMANDS.forEach(c => {
            const paddedCmd = c.cmd.padEnd(COL_WIDTH);
            result += `  <span class="cyan">${escapeHtml(paddedCmd)}</span><span class="dim">${c.desc}</span>\n`;
        });

        result += `\n<span class="dim">Tips: 'k' = 'kubectl' | Tab = autocomplete | Up/Down = history | Ctrl+L = clear</span>\n`;
        return result;
    }

    // Command: whoami
    function cmdWhoami() {
        return `
<span class="white">${DATA.name}</span>
<span class="cyan">${DATA.title}</span> @ <span class="yellow">${DATA.company}</span>
<span class="dim">${DATA.location}</span>

${DATA.summary}
`;
    }

    // Command: kubectl (also aliased as 'k')
    function cmdKubectl(args, originalCmd) {
        if (args.length === 0) {
            return `<span class="error">error: missing command</span>\nUsage: k [get|describe] [resource]\n\nAvailable resources: skills, experience, projects, certs, education`;
        }

        const action = args[0];
        const resource = args[1];

        if (action === 'get') {
            switch(resource) {
                case 'skills':
                    return kubectlGetSkills();
                case 'experience':
                case 'exp':
                    return kubectlGetExperience();
                case 'projects':
                case 'project':
                    return kubectlGetProjects();
                case 'certs':
                case 'certificates':
                    return kubectlGetCerts();
                case 'education':
                case 'edu':
                    return kubectlGetEducation();
                default:
                    return `<span class="error">error: the server doesn't have a resource type "${escapeHtml(resource || '')}"</span>\nAvailable resources: skills, experience, projects, certs, education`;
            }
        } else if (action === 'describe') {
            if (args[1] === 'project' && args[2]) {
                return kubectlDescribeProject(args[2]);
            }
            return `<span class="error">error: missing resource name</span>\nUsage: k describe project <name>\n\nAvailable projects: ${DATA.projects.map(p => p.name).join(', ')}`;
        } else {
            return `<span class="error">error: unknown command "${escapeHtml(action)}"</span>\nAvailable commands: get, describe`;
        }
    }

    // kubectl get skills - List format for full text
    function kubectlGetSkills() {
        let result = `\n<span class="white">SKILLS</span>\n`;
        result += `<span class="dim">════════════════════════════════════════════════════════════════════════════</span>\n`;

        for (const [category, skills] of Object.entries(DATA.skills)) {
            result += `\n<span class="cyan">${category}:</span>\n`;
            result += `  ${skills.join(', ')}\n`;
        }

        return result;
    }

    // kubectl get experience - List format for full text
    function kubectlGetExperience() {
        let result = `\n<span class="white">EXPERIENCE</span>\n`;
        result += `<span class="dim">════════════════════════════════════════════════════════════════════════════</span>\n`;

        DATA.experience.forEach(exp => {
            const status = exp.status === 'Running'
                ? `<span class="cyan">${exp.status}</span>`
                : `<span class="dim">${exp.status}</span>`;
            result += `\n<span class="cyan">${exp.company}</span>  [${status}]  <span class="dim">${exp.age}</span>\n`;
            result += `  ${exp.role}\n`;
            result += `  <span class="dim">${exp.period} | ${exp.location}</span>\n`;
        });

        result += `\n<span class="dim">Use 'k get projects' for project details</span>\n`;
        return result;
    }

    // kubectl get projects - List format for full text
    function kubectlGetProjects() {
        let result = `\n<span class="white">PROJECTS</span>\n`;
        result += `<span class="dim">════════════════════════════════════════════════════════════════════════════</span>\n`;

        DATA.projects.forEach(proj => {
            const status = proj.status === 'Running'
                ? `<span class="cyan">${proj.status}</span>`
                : `<span class="dim">${proj.status}</span>`;
            result += `\n<span class="cyan">${proj.name}</span>  [${status}]\n`;
            result += `  ${proj.description}\n`;
            result += `  <span class="dim">Company: ${proj.company}</span>\n`;
        });

        result += `\n<span class="dim">Use 'k describe project <name>' for details</span>\n`;
        return result;
    }

    // kubectl describe project
    function kubectlDescribeProject(projectName) {
        const project = DATA.projects.find(p =>
            p.name.toLowerCase() === projectName.toLowerCase()
        );

        if (!project) {
            return `<span class="error">Error from server (NotFound): project "${escapeHtml(projectName)}" not found</span>\n\nAvailable projects: ${DATA.projects.map(p => p.name).join(', ')}`;
        }

        return `
<span class="white">Name:</span>         ${project.name}
<span class="white">Namespace:</span>    ${project.company.toLowerCase()}
<span class="white">Status:</span>       ${project.status === 'Running' ? `<span class="cyan">${project.status}</span>` : project.status}
<span class="white">Company:</span>      ${project.company}

<span class="white">Description:</span>
${project.description}

<span class="white">Highlights:</span>
${project.highlights.map(h => `  <span class="cyan">⎈</span> ${h}`).join('\n')}
`;
    }

    // kubectl get certs - List format for full text
    function kubectlGetCerts() {
        let result = `\n<span class="white">CERTIFICATIONS</span>\n`;
        result += `<span class="dim">════════════════════════════════════════════════════════════════════════════</span>\n\n`;

        DATA.certifications.forEach(cert => {
            result += `<span class="cyan">⎈</span> <span class="white">${cert.name}</span>\n`;
            result += `  <span class="dim">${cert.issuer} | ${cert.year}</span>\n\n`;
        });

        return result;
    }

    // kubectl get education - List format for full text
    function kubectlGetEducation() {
        let result = `\n<span class="white">EDUCATION</span>\n`;
        result += `<span class="dim">════════════════════════════════════════════════════════════════════════════</span>\n`;

        DATA.education.forEach(edu => {
            result += `\n<span class="cyan">${edu.degree}</span> - ${edu.field}\n`;
            result += `  <span class="dim">${edu.institution}</span>\n`;
            result += `  <span class="dim">${edu.year} | Grade: ${edu.grade}</span>\n`;
        });

        return result;
    }

    // Command: nvidia-smi - Full text display
    function cmdNvidiaSmi() {
        const timestamp = new Date().toLocaleString('en-US', {
            weekday: 'short', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric'
        });

        return `
<span class="cyan">${timestamp}</span>
<span class="white">+==============================================================================+</span>
<span class="white">| NVIDIA-SMI</span>          <span class="cyan">GPU & AI/ML Infrastructure Experience</span>                  <span class="white">|</span>
<span class="white">|------------------------------------------------------------------------------|</span>
<span class="white">| Driver Version: Career    CUDA Version: Kubernetes    GPU Mode: Passthrough |</span>
<span class="white">+==============================================================================+</span>

<span class="white">GPU Experience:</span>
${DATA.gpu.experience.map(exp => `  <span class="cyan">⎈</span> ${exp}`).join('\n')}

<span class="white">Key Achievements:</span>
${DATA.gpu.achievements.map(ach => `  <span class="yellow">★</span> ${ach}`).join('\n')}

<span class="white">Tools & Technologies:</span>
  <span class="cyan">${DATA.gpu.tools.join(' | ')}</span>

<span class="white">+==============================================================================+</span>
<span class="white">| GPU/AI Projects                                                              |</span>
<span class="white">+==============================================================================+</span>
  <span class="cyan">Emirates:</span>   GPU-aware Kubernetes Platform
              Virtualization, Passthrough, Scheduling for AI/ML workloads

  <span class="cyan">GFT:</span>        AI/ML-ready GKE clusters with Anthos Service Mesh
              GPU-accelerated inference pipelines for financial services

  <span class="cyan">Experian:</span>   Global OpenShift Platform supporting ML-driven workloads
              Cilium SDN for enhanced GPU-backed application networking

<span class="dim">Use 'k get skills' to see AI/ML & GPU category</span>
<span class="dim">Use 'k describe project gpu-k8s-platform' for detailed GPU project info</span>
`;
    }

    // Command: contact - Phone removed
    function cmdContact() {
        return `
<span class="white">Contact Information</span>
<span class="dim">════════════════════════════════════════════</span>

  <span class="cyan">Email:</span>     <span class="link" onclick="openLink('mailto:${DATA.links.email}')">${DATA.links.email}</span>
  <span class="cyan">Location:</span>  ${DATA.location}

  <span class="cyan">LinkedIn:</span>  <span class="link" onclick="openLink('${DATA.links.linkedin}')">${DATA.links.linkedin}</span>
  <span class="cyan">GitHub:</span>    <span class="link" onclick="openLink('${DATA.links.github}')">${DATA.links.github}</span>
  <span class="cyan">Blog:</span>      <span class="link" onclick="openLink('${DATA.links.blog}')">${DATA.links.blog}</span>

<span class="dim">Quick links: ssh linkedin | ssh github | ssh blog</span>
`;
    }

    // Command: neofetch - K8s symbol separator
    function cmdNeofetch() {
        const logo = DATA.neofetch.logo;
        const info = DATA.neofetch.info;

        let result = '\n';

        // Header line with K8s themed separator
        const headerLine = `<span class="white">${DATA.name}</span>@<span class="cyan">k8s-cluster</span>`;
        const separator = `<span class="cyan">⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈─⎈</span>`;

        // Find max label length for alignment
        const maxLabelLen = Math.max(...info.map(i => i.label.length));

        // Combine logo and info side by side
        const maxLines = Math.max(logo.length, info.length + 2);

        for (let i = 0; i < maxLines; i++) {
            const logoLine = logo[i] || '                   ';
            result += `<span class="cyan">${logoLine}</span>   `;

            if (i === 0) {
                result += headerLine;
            } else if (i === 1) {
                result += separator;
            } else if (i - 2 < info.length) {
                const item = info[i - 2];
                const paddedLabel = item.label.padEnd(maxLabelLen);
                result += `<span class="cyan">${paddedLabel}:</span> ${item.value}`;
            }

            result += '\n';
        }

        return result;
    }

    // Command: ssh
    function cmdSsh(target) {
        const links = {
            'linkedin': DATA.links.linkedin,
            'github': DATA.links.github,
            'blog': DATA.links.blog
        };

        if (!target) {
            return `<span class="error">ssh: missing destination</span>\nUsage: ssh [linkedin|github|blog]`;
        }

        const url = links[target.toLowerCase()];
        if (url) {
            openLink(url);
            return `<span class="cyan">Connecting to ${target}...</span>\n<span class="dim">Opening in new tab...</span>`;
        }

        return `<span class="error">ssh: Could not resolve hostname ${escapeHtml(target)}</span>\nAvailable hosts: linkedin, github, blog`;
    }

    // Command: history
    function cmdHistory() {
        if (commandHistory.length === 0) {
            return `<span class="dim">No commands in history</span>`;
        }

        let result = '\n';
        commandHistory.forEach((cmd, i) => {
            result += `  <span class="dim">${(i + 1).toString().padStart(4)}</span>  ${escapeHtml(cmd)}\n`;
        });
        return result;
    }

    // Clear terminal
    function clearTerminal() {
        output.innerHTML = '';
    }

    // Helper: append to output
    function appendOutput(html) {
        output.innerHTML += html;
    }

    // Helper: scroll to bottom
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Helper: escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Helper: open link in new tab
    window.openLink = function(url) {
        window.open(url, '_blank', 'noopener');
    };

    // ============================================
    // TESTS - Run on localhost only
    // ============================================
    function runTests() {
        console.log('%c🧪 Running Terminal Tests...', 'color: #00ff00; font-weight: bold;');

        let passed = 0;
        let failed = 0;

        function test(name, fn) {
            try {
                fn();
                console.log(`%c✓ ${name}`, 'color: #00ff00;');
                passed++;
            } catch (e) {
                console.log(`%c✗ ${name}: ${e.message}`, 'color: #ff3333;');
                failed++;
            }
        }

        function assert(condition, msg) {
            if (!condition) throw new Error(msg);
        }

        // Test: All commands return non-empty results
        test('All commands return output', () => {
            const commands = ['help', 'whoami', 'contact', 'neofetch', 'nvidia-smi'];
            commands.forEach(cmd => {
                const result = executeCommand(cmd);
                assert(result && result.length > 0, `Command '${cmd}' returned empty`);
            });
        });

        // Test: kubectl/k alias works
        test('kubectl and k alias work identically', () => {
            const kubectlResult = executeCommand('kubectl get skills');
            const kResult = executeCommand('k get skills');
            assert(kubectlResult === kResult, 'kubectl and k should return same output');
        });

        // Test: All k get commands work
        test('All k get resources work', () => {
            const resources = ['skills', 'experience', 'projects', 'certs', 'education'];
            resources.forEach(res => {
                const result = executeCommand(`k get ${res}`);
                assert(result && !result.includes('error'), `'k get ${res}' failed`);
            });
        });

        // Test: k describe project works
        test('k describe project works for all projects', () => {
            DATA.projects.forEach(proj => {
                const result = executeCommand(`k describe project ${proj.name}`);
                assert(result && !result.includes('NotFound'), `Describe failed for ${proj.name}`);
            });
        });

        // Test: Easter eggs return yellow spans
        test('Easter eggs return proper response', () => {
            const result = executeCommand('docker');
            assert(result.includes('yellow'), 'Easter egg should have yellow styling');
            assert(result.includes('Kubernetes'), 'Docker easter egg should mention Kubernetes');
        });

        // Test: Invalid command returns error
        test('Invalid command returns error message', () => {
            const result = executeCommand('invalidcmd');
            assert(result.includes('Command not found'), 'Should show command not found');
        });

        // Test: nvidia-smi shows all GPU experience items
        test('nvidia-smi shows all GPU experience', () => {
            const result = executeCommand('nvidia-smi');
            DATA.gpu.experience.forEach(exp => {
                assert(result.includes(exp), `nvidia-smi should show: ${exp}`);
            });
            DATA.gpu.achievements.forEach(ach => {
                assert(result.includes(ach), `nvidia-smi should show achievement: ${ach}`);
            });
        });

        // Test: Help columns are aligned
        test('Help command has consistent formatting', () => {
            const result = executeCommand('help');
            assert(result.includes('Available Commands'), 'Help should have header');
            assert(result.includes('k get skills'), 'Help should list k commands');
        });

        // Test: Contact does not contain phone
        test('Contact does not show phone number', () => {
            const result = executeCommand('contact');
            assert(!result.includes('+971'), 'Contact should not contain phone number');
            assert(!result.includes('Phone'), 'Contact should not have Phone label');
        });

        // Test: Neofetch uses K8s separator
        test('Neofetch uses K8s themed separator', () => {
            const result = executeCommand('neofetch');
            assert(result.includes('⎈'), 'Neofetch should use K8s helm symbol');
        });

        // Test: Data integrity
        test('DATA has all required fields', () => {
            assert(DATA.name, 'Missing name');
            assert(DATA.title, 'Missing title');
            assert(DATA.skills && Object.keys(DATA.skills).length > 0, 'Missing skills');
            assert(DATA.experience && DATA.experience.length > 0, 'Missing experience');
            assert(DATA.projects && DATA.projects.length > 0, 'Missing projects');
            assert(DATA.certifications && DATA.certifications.length > 0, 'Missing certifications');
            assert(DATA.education && DATA.education.length > 0, 'Missing education');
            assert(DATA.gpu && DATA.gpu.experience, 'Missing GPU data');
        });

        // Test: All links are valid URLs
        test('All links are valid URLs', () => {
            const links = DATA.links;
            Object.entries(links).forEach(([key, url]) => {
                assert(url.startsWith('http') || url.includes('@'), `Invalid URL for ${key}: ${url}`);
            });
        });

        // Summary
        console.log('%c────────────────────────────────', 'color: #666;');
        console.log(`%c Tests: ${passed} passed, ${failed} failed`,
            failed > 0 ? 'color: #ff3333; font-weight: bold;' : 'color: #00ff00; font-weight: bold;');

        if (failed === 0) {
            console.log('%c All tests passed! ✓', 'color: #00ff00; font-weight: bold; font-size: 14px;');
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
