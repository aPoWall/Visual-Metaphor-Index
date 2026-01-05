import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  // --- SLIDE 0: COVER ---
  {
    id: 'slide-0-cover',
    type: 'cover',
    title: 'THE CONTEXT GAP',
    subtitle: 'AI MINDSET + COMMUNITY',
    body: 'ai is accelerating. humans are buffering.\n\na yearly reset artifact by AI Mindset + community.\na sovereignty reset for people running their own life.',
    visual: 'gap'
  },

  // --- SLIDE 1: A NOTE FROM THE TEAM ---
  {
    id: 'slide-1-note',
    type: 'text-density',
    title: 'A NOTE FROM THE TEAM',
    subtitle: 'RESEARCH + LABS TEAM',
    body: `we made this because 2025 didn’t feel like a year.

it felt like the year context became expensive.

machines got faster at producing outputs.
humans got slower at holding meaning, attention, and coherent direction.

this isn’t a “trends” deck.
it’s closer to a navigation tool.

we’re not trying to predict the future with confidence theater.
we’re trying to show what changed, why it matters, and what the human layer can do — so you can make better calls in 2026.

— ai mindset (research + labs team)`,
    bodyRight: `"If you only share one thing: share the slide that named your friction."`,
    points: ['Context is expensive', 'Navigation tool', 'No confidence theater'],
    visual: 'none'
  },

  // --- SLIDE 2: WHAT THIS IS ---
  {
    id: 'slide-2-what-this-is',
    type: 'blueprint',
    title: 'WHAT THIS IS (AND ISN’T)',
    subtitle: 'PAIRED MAP',
    points: [
      'THIS IS: A PAIRED MAP. YOU’LL GO THROUGH 10 PAIRED LOOPS.',
      'MACHINE SIGNAL: Capability / Deployment / Economics',
      'HUMAN SIGNAL: Cognition / Identity / Culture',
      'THE CONTEXT GAP: Where coordination breaks',
      'THIS ISN’T: A HYPE DECK.',
      'THIS ISN’T: A MORAL PANIC.',
      'THIS ISN’T: A CONSULTING PDF THAT SAYS NOTHING NEW.'
    ],
    visual: 'network'
  },

  // --- SLIDE 3: WHAT WE MEAN BY CONTEXT GAP ---
  {
    id: 'slide-3-definition',
    type: 'statement',
    title: 'THE CONTEXT GAP',
    body: `context gap = the distance between:

1. the context a system needs to act well
and
2. the context a human can actually hold without degrading decisions.

and the real losses:
time (the non‑renewable one)
money (busy ≠ effective)
reputation (sloppy decisions, missed nuance)`,
    visual: 'divergence'
  },

  // --- SLIDE 4: THE THINKERS ---
  {
    id: 'slide-4-thinkers',
    type: 'comparative',
    title: "THE FRAMEWORK",
    body: "this is the backbone behind the 150+ papers, benchmarks, policy docs, and infra reports we reviewed.",
    visual: 'stack',
    comparative: [
        {
            header: "ATTENTION",
            sub: "Herbert Simon",
            points: ["attention becomes the bottleneck."],
            footer: "Scarcity"
        },
        {
            header: "COGNITION",
            sub: "Kahneman / HCI",
            points: ["more inputs → worse judgment", "“fast guess” vs “slow verify.”"],
            footer: "Load"
        },
        {
            header: "SOVEREIGNTY",
            sub: "Hirschman / Balaji",
            points: ["“exit” becomes everyday language for autonomy"],
            footer: "Cultural Tech"
        }
    ]
  },

  // --- SLIDE 5: SIGNAL BASE ---
  {
    id: 'slide-5-signals',
    type: 'grid-stats',
    title: 'OUR SIGNAL BASE',
    body: 'we trust signals — especially signals with a feedback loop.',
    visual: 'signal',
    gridStats: [
        { value: "6", label: "Labs", desc: "Cohorts" },
        { value: "200+", label: "Graduates", desc: "23+ Countries" },
        { value: "100+", label: "Live Hours", desc: "Direct observation" },
        { value: "67%", label: "Completion", desc: "High engagement" }
    ],
    source: "ai mindset labs (overview)"
  },

  // --- LOOP 1 ---
  {
    id: 'loop-1-meta',
    type: 'metaphor',
    title: 'SYSTEM-2 REASONING',
    subtitle: 'LOOP 01',
    body: '“chat” is turning into delegation.',
    visual: 'audit'
  },
  {
    id: 'loop-1-deep',
    type: 'loop',
    title: 'REASONING vs TRUST',
    visual: 'audit',
    loopData: {
        machine: `“chat” is turning into delegation.
agents don’t just answer — they do (plan, act, call tools, ship).
“slow thinking” moves from research concept to product feature: fewer obvious failures, more consistent multi‑step output.`,
        human: `people don’t trust “magic.” they trust auditable work.
the moment an agent touches money, customers, or reputation, humans demand: show me your steps.`,
        gap: `AGENTS OPERATE AT MACHINE SPEED, BUT ACCOUNTABILITY REMAINS HUMAN SPEED. VERIFICATION BECOMES ETHICS — “CAN YOU JUST APPROVE THIS?” BECOMES THE MOST EXPENSIVE SENTENCE IN A COMPANY.`,
        sources: [
            { text: "Li et al. — Reasoning LLMs Survey", url: "https://arxiv.org/abs/2502.17419" },
            { text: "OpenAI — Introducing SWE-bench Verified", url: "https://openai.com/index/introducing-swe-bench-verified/" },
            { text: "x402 — Internet-native payments for AI agents", url: "https://www.x402.org/" }
        ]
    }
  },

  // --- LOOP 2 ---
  {
    id: 'loop-2-meta',
    type: 'metaphor',
    title: 'ORCHESTRATION LAYERS',
    subtitle: 'LOOP 02',
    body: 'context leaks across apps.',
    visual: 'tangle'
  },
  {
    id: 'loop-2-deep',
    type: 'loop',
    title: 'WORKFLOWS vs OVERLOAD',
    visual: 'tangle',
    loopData: {
        machine: `the center of gravity moves from chat to agentic workflows: systems that call tools, execute steps across software, and coordinate across services.`,
        human: `overload becomes baseline: too many threads, tools, notifications, pseudo‑tasks.
every new layer adds fear: “who owns the workflow?” “where does my data go?” “can i exit? ◡̈”`,
        gap: `WHEN SYSTEMS CONNECT, CONTEXT LEAKS ACROSS APPS — HUMANS CAN’T SEE THE FULL GRAPH, BUT REMAIN RESPONSIBLE FOR OUTCOMES. THE QUESTION BECOMES: WHO IS THE AUTHOR OF OUTCOMES?`,
        sources: [
            { text: "Anthropic — Model Context Protocol (MCP)", url: "https://www.anthropic.com/news/model-context-protocol" },
            { text: "Gartner — Top 10 Strategic Tech Trends 2025", url: "https://www.gartner.com/en/newsroom/press-releases/2024-10-21-gartner-identifies-the-top-10-strategic-technology-trends-for-2025" },
            { text: "AI Mindset — You’re not burned out, you’ve got context obesity", url: "https://hackernoon.com/youre-not-burned-out-youve-got-context-obesity" }
        ]
    }
  },

  // --- LOOP 3 ---
  {
    id: 'loop-3-meta',
    type: 'metaphor',
    title: 'SOVEREIGN AI',
    subtitle: 'LOOP 03',
    body: '“where data lives” becomes as important as “what the model can do.”',
    visual: 'shield'
  },
  {
    id: 'loop-3-deep',
    type: 'loop',
    title: 'SOVEREIGNTY vs NEO-SOVEREIGNTY',
    visual: 'shield',
    loopData: {
        machine: `regulation matures. institutions define “unacceptable risk.”
sovereign ai becomes strategy: data residency, regulated stacks, local inference, compliant clouds.
“where data lives” becomes as important as “what the model can do.”`,
        human: `a personal version emerges: neo‑sovereignty.
people build their own spaces (private notes, smaller circles, local tools) because public feeds feel noisy, extractive, increasingly synthetic.`,
        gap: `TRUST SPLITS: PEOPLE WANT INNOVATION AND GUARANTEES. FOR ORGS IT’S COMPLIANCE AND RISK; FOR INDIVIDUALS IT’S PRIVACY, BOUNDARIES, AND CONTROL OVER THE CONTEXT THAT SHAPES THINKING.`,
        sources: [
            { text: "EUR-Lex — Regulation (EU) 2024/1689 (AI Act)", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng" },
            { text: "McKinsey — Accelerating Europe’s AI Adoption", url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/accelerating-europes-ai-adoption-the-role-of-sovereign-ai" }
        ]
    }
  },

  // --- LOOP 4 ---
  {
    id: 'loop-4-meta',
    type: 'metaphor',
    title: 'DATA WALL',
    subtitle: 'LOOP 04',
    body: 'evidence becomes a formatting problem.',
    visual: 'factory'
  },
  {
    id: 'loop-4-deep',
    type: 'loop',
    title: 'SYNTHETIC vs PROVENANCE',
    visual: 'factory',
    loopData: {
        machine: `high‑quality human data is finite; marginal gains get expensive.
training leans harder on synthetic data and distillation.
as synthetic output floods the environment, “evidence” becomes a formatting problem: it can look right before it is right.`,
        human: `trust becomes scarce.
people shift from “is it true?” to “is it traceable?”
the new literacy is provenance.`,
        gap: `MACHINES CAN MANUFACTURE INFINITE TEXT AND IMAGES. HUMANS CAN’T MANUFACTURE INFINITE MEANING. THE RATIO COLLAPSES.`,
        sources: [
            { text: "Epoch AI — Limits of LLM Scaling", url: "https://epoch.ai/blog/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data" },
            { text: "Shumailov et al. — The Curse of Recursion", url: "https://arxiv.org/abs/2305.17493" },
            { text: "AI Mindset — Team Knowledge System", url: "https://aimindsetspace.substack.com/p/ai-ark-knowledge-system" }
        ]
    }
  },

  // --- LOOP 5 ---
  {
    id: 'loop-5-meta',
    type: 'metaphor',
    title: 'PRIVACY AS STATUS',
    subtitle: 'LOOP 05',
    body: 'on‑device models & ambient ai.',
    visual: 'whisper'
  },
  {
    id: 'loop-5-deep',
    type: 'loop',
    title: 'AMBIENT AI vs PRIVACY',
    visual: 'whisper',
    loopData: {
        machine: `smaller models get good enough and spread everywhere (on devices, at the edge, inside apps).
ai becomes ambient — less a destination, more a layer.`,
        human: `privacy becomes status. not secrecy — control.
more private drafting, smaller circles, local storage, intentional friction against performative posting.`,
        gap: `WHEN AI IS EVERYWHERE, BOUNDARIES BECOME THE DIFFERENTIATOR. IF EVERYTHING CAN BE PROCESSED, THE PREMIUM SHIFTS TO WHAT YOU KEEP.`,
        sources: [
            { text: "Android Developers — Gemini Nano with ML Kit", url: "https://android-developers.googleblog.com/2025/08/the-latest-gemini-nano-with-on-device-ml-kit-genai-apis.html" },
            { text: "Wired — Meta asking people in Europe to pay for privacy", url: "https://www.wired.com/story/meta-facebook-pay-for-privacy-europe/" },
            { text: "ICO — Data Lives: Year 2 Report", url: "https://ico.org.uk/media2/m2maphry/ico-data-lives-year-2-report.pdf" }
        ]
    }
  },

  // --- LOOP 6 ---
  {
    id: 'loop-6-meta',
    type: 'metaphor',
    title: 'RETURN OF PHYSICS',
    subtitle: 'LOOP 06',
    body: 'even digital gods need electricity.',
    visual: 'battery'
  },
  {
    id: 'loop-6-deep',
    type: 'loop',
    title: 'INFRASTRUCTURE vs BIOLOGY',
    visual: 'battery',
    loopData: {
        machine: `ai isn’t just software. it’s infrastructure: chips, energy, cooling, geopolitics.
even digital gods need electricity.
energy and compute become the regulator of progress.`,
        human: `energy economics turns personal: burnout realism, fatigue, “time hangover,” sharper awareness of biological limits.
people begin optimizing for sustainability, not maximum output.`,
        gap: `DATA CENTRES BECOME LOCAL POLITICAL ISSUES; YOUR “CLOUD” STARTS TO FEEL LIKE A LAND DISPUTE. THERMODYNAMICS RETURNS AS A HIDDEN GOVERNOR — YOU CAN’T OUT‑OPTIMIZE SCARCITY FOREVER.`,
        sources: [
            { text: "IEA — Energy supply for AI", url: "https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai" },
            { text: "Reuters — AI data centers & peaker power plants", url: "https://www.reuters.com/business/energy/ai-data-centers-are-forcing-obsolete-peaker-power-plants-back-into-service-2025-12-23/" }
        ]
    }
  },

  // --- LOOP 7 ---
  {
    id: 'loop-7-meta',
    type: 'metaphor',
    title: 'AUTHORSHIP ANXIETY',
    subtitle: 'LOOP 07',
    body: 'what is mine if the machine did it?',
    visual: 'pen'
  },
  {
    id: 'loop-7-deep',
    type: 'loop',
    title: 'CODING AGENTS vs IDENTITY',
    visual: 'pen',
    loopData: {
        machine: `coding becomes the first broadly proven agent category: systems write, refactor, test, ship.
the value is measurable; adoption is fast.`,
        human: `authorship anxiety rises: “what’s mine if the machine did it?”
fear of skill atrophy, status loss, erosion of craft.`,
        gap: `WHEN LABOR GETS CHEAPER, IDENTITY GETS MORE EXPENSIVE. IN A WORLD WHERE OUTPUT IS ABUNDANT, AUTHORSHIP BECOMES LESS ABOUT TYPING AND MORE ABOUT OWNING DECISIONS.`,
        sources: [
            { text: "OpenAI — Introducing SWE-bench Verified", url: "https://openai.com/index/introducing-swe-bench-verified/" },
            { text: "Anthropic — SWE-bench Sonnet", url: "https://www.anthropic.com/research/swe-bench-sonnet" },
            { text: "AI Mindset — Coding with Claude 3.5", url: "https://t.me/ai_mind_set/282" }
        ]
    }
  },

  // --- LOOP 8 ---
  {
    id: 'loop-8-meta',
    type: 'metaphor',
    title: 'REGIONAL FRAMES',
    subtitle: 'LOOP 08',
    body: 'a global story can’t be one voice.',
    visual: 'globe'
  },
  {
    id: 'loop-8-deep',
    type: 'loop',
    title: 'GLOBAL vs FRAMES',
    visual: 'globe',
    loopData: {
        machine: `ai progress is global, but governance and deployment realities differ by region — policy, procurement, infrastructure, and institutional trust.`,
        human: `moral frames diverge:
- us: frontier / market
- eu: rights / compliance
- others: utility / stability / state capacity (varies)`,
        gap: `A GLOBAL STORY CAN’T BE ONE VOICE. THE SAME CAPABILITY READS AS LIBERATION, RISK, OR STABILITY TOOL DEPENDING ON THE FRAME. PLURALISM IS NOT OPTIONAL — IF YOU IGNORE FRAMES, YOU MISUNDERSTAND PEOPLE (OR GET MISUNDERSTOOD).`,
        sources: [
            { text: "Pew Research — Trust in EU, US, China to regulate AI", url: "https://www.pewresearch.org/2025/10/15/trust-in-the-eu-u-s-and-china-to-regulate-use-of-ai/" },
            { text: "Stanford HAI — AI Index 2025: Public Opinion", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report/public-opinion" },
            { text: "Digital Plurality Project", url: "https://github.com/pluralitybook/plurality" }
        ]
    }
  },

  // --- LOOP 9 ---
  {
    id: 'loop-9-meta',
    type: 'metaphor',
    title: 'DEFAULT VALUES',
    subtitle: 'LOOP 09',
    body: 'every default embeds a worldview.',
    visual: 'scale'
  },
  {
    id: 'loop-9-deep',
    type: 'loop',
    title: 'POST-TRAINING vs FRAGMENTATION',
    visual: 'scale',
    loopData: {
        machine: `post‑training defines behavior: refusals, style, safety posture, what a model tends to amplify.
defaults become the product.`,
        human: `values fragment.
people cluster into micro‑realities and micro‑truths.
the cost of disagreement rises; the temptation to outsource judgment rises too.`,
        gap: `EVERY MODEL HAS DEFAULTS. EVERY DEFAULT EMBEDS A WORLDVIEW. THE HUMAN QUESTION BECOMES: WHOSE VALUES ARE EMBEDDED IN THE TOOL YOU USE DAILY — AND WHAT DO THEY QUIETLY OPTIMIZE FOR?`,
        sources: [
            { text: "InstructGPT (Ouyang et al.)", url: "https://arxiv.org/abs/2203.02155" },
            { text: "Constitutional AI (Bai et al.)", url: "https://arxiv.org/abs/2212.08073" },
            { text: "Investigating Local Censorship (arXiv)", url: "https://arxiv.org/pdf/2505.12625" }
        ]
    }
  },

  // --- LOOP 10 ---
  {
    id: 'loop-10-meta',
    type: 'metaphor',
    title: 'PROGRAMMABLE IDENTITY',
    subtitle: 'LOOP 10',
    body: 'we confuse “attention” with “care.”',
    visual: 'mask'
  },
  {
    id: 'loop-10-deep',
    type: 'loop',
    title: 'INTIMACY vs FATIGUE',
    visual: 'mask',
    loopData: {
        machine: `ai moves from tool to relationship surface: companions, therapists, griefbots, parasocial loops.
in parallel, ai makes it easy to produce a “professional self” at scale — identity becomes programmable.`,
        human: `loneliness isn’t solved by information.
people accept synthetic intimacy (even while knowing it’s synthetic).
meanwhile, people tire of performing the self; they retreat to private spaces and smaller audiences.`,
        gap: `HUMANS OUTSOURCE EMOTIONAL REGULATION TO SYSTEMS OPTIMIZED FOR ENGAGEMENT. WE CONFUSE “ATTENTION” WITH “CARE.”`,
        sources: [
            { text: "AI + Mental Health Boundaries (Founder OS)", url: "https://aimindsetspace.substack.com/p/founder-os-mental-health" },
            { text: "Friends for Sale: AI Companions", url: "https://www.adalovelaceinstitute.org/blog/ai-companions/" },
            { text: "Context Collapse (Microsoft Research)", url: "https://www.microsoft.com/en-us/research/publication/i-tweet-honestly-i-tweet-passionately-twitter-users-context-collapse-and-the-imagined-audience/" }
        ]
    }
  },

  // --- SUMMARIES ---
  {
    id: 'summary-machine',
    type: 'checklist',
    title: 'MACHINES, SUMMARIZED',
    subtitle: '2025 → 2026',
    checklist: [
        { label: "DELEGATION", text: "from chat to delegation (agents + orchestration)", checked: true },
        { label: "REASONING", text: "from “more scale” to better reasoning (system‑2 behavior)", checked: true },
        { label: "CONSTRAINTS", text: "from capability focus to constraints (trust, governance, energy)", checked: true },
        { label: "PROTOCOL", text: "from one platform to protocol layers (connective tissue)", checked: true },
        { label: "AMBIENT", text: "from cloud-only to ambient ai (on‑device + edge)", checked: true }
    ],
    visual: 'grid'
  },

  {
    id: 'summary-human',
    type: 'checklist',
    title: 'HUMANS, SUMMARIZED',
    subtitle: '2025 → 2026',
    checklist: [
        { label: "CURATION", text: "from consumption to curation (feeds → gardens)", checked: true },
        { label: "TRUST", text: "from optimism to trust management (provenance, receipts, auditability)", checked: true },
        { label: "COHERENCE", text: "from public posting to private coherence (smaller circles, intentional friction)", checked: true },
        { label: "FATIGUE", text: "from “more tools” to more fatigue (capacity gap)", checked: true },
        { label: "CONSTRAINT", text: "from “identity as output” to identity as constraint", checked: true }
    ],
    visual: 'grid'
  },

  // --- OUTRO ---
  {
    id: 'call-to-agency',
    type: 'statement',
    title: 'CALL TO AGENCY',
    body: 'the wrong question is: “what is this doing to us?” the better question is: “what are we letting it do to us?”',
    visual: 'bridge',
    dark: true
  },
  
  {
    id: 'survival-kit',
    type: 'manifesto',
    title: 'SURVIVAL KIT',
    subtitle: 'CONSTITUTION‑AS‑CODE',
    body: 'in 2026, most people won’t lose to ai. they’ll lose to their own defaults.',
    points: [
        'what you say yes to without thinking',
        'what interrupts you without permission',
        'what you outsource because you’re tired',
        'what you believe because it was repeated'
    ],
    visual: 'grid'
  },

  {
    id: 'community-signals',
    type: 'text-density',
    title: 'COMMUNITY SIGNALS',
    subtitle: 'FIELD NOTES',
    body: `“i became a builder: i shipped in 30 minutes what stalled for 1.5 months.” — Alexander Stashenko

“two weeks of content in 30 minutes; transcripts in zero; apps deploy on prompts.” — Nikolay Senin

“ai moved from smart tool to full participant; i design pipelines, humans decide now.” — Yakov Vasiliev

“cursor and claude code turned me into a product automator; i vibe-coded real prototypes.” — Natalya Savenkova

“the product shift: hold the user’s hand, solve their task—don’t sell a universal tool.” — Evgeniy`,
    visual: 'network'
  },

  {
    id: 'stay-in-loop',
    type: 'checklist',
    title: 'STAY IN THE LOOP',
    subtitle: 'AI MINDSET',
    checklist: [
        { label: "SUBSTACK", text: "subscribe on substack → get next resets, field notes, templates", checked: true },
        { label: "ECOSYSTEM", text: "explore the ecosystem → labs, tools, community, artifacts", checked: true },
        { label: "CONTACT", text: "talk to us → partnerships / speaking / labs for teams", checked: true }
    ],
    visual: 'gap'
  },

  {
    id: 'gallery',
    type: 'gallery',
    title: 'VISUAL INDEX',
    subtitle: 'METAPHOR LIBRARY',
    visual: 'none'
  },

  {
    id: 'end',
    type: 'cover',
    title: 'CLOSE THE GAP',
    subtitle: 'AI MINDSET 2025',
    body: 'thank you for reading.',
    visual: 'gap'
  }
];
