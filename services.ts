export type Cluster = "legacy-and-documents" | "life-transitions" | "discovery-and-purpose";

export type ServiceFeature = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  description: string;
  heroLead: string;
  heroSub: string;
  icon: string;
  originalCategory: string;
  cluster: Cluster;
  features: ServiceFeature[];
};

export const clusters: { id: Cluster; icon: string; title: string; intro: string }[] = [
  {
    id: "legacy-and-documents",
    icon: "✓",
    title: "Legacy & Documents",
    intro: "Get your affairs organized — documents, estate plans, and the story you want to leave behind.",
  },
  {
    id: "life-transitions",
    icon: "◇",
    title: "Life Transitions",
    intro: "Support for moves, care decisions, home safety, and the major changes retirement can bring.",
  },
  {
    id: "discovery-and-purpose",
    icon: "↗",
    title: "Discovery & Purpose",
    intro: "Find new interests, connections, and a sense of purpose for the chapter ahead.",
  },
];

export const services: Service[] = [
  {
    "slug": "aging-in-place-home-assessments",
    "title": "Aging-in-Place Home Assessments",
    "description": "Guidance on home modifications, safety upgrades, and careful contractor vetting.",
    "heroLead": "Guidance on home modifications, safety upgrades, and careful contractor vetting.",
    "heroSub": "Built for retirees who want to stay in their current home safely for as long as possible.",
    "icon": "⌂",
    "originalCategory": "Home & Independence",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Room-by-room safety review",
        "description": "A structured checklist covering bathrooms, stairs, lighting, and entryways."
      },
      {
        "title": "Modification recommendations",
        "description": "Prioritized upgrades, from simple fixes to larger renovations."
      },
      {
        "title": "Vetted contractor guidance",
        "description": "Questions to ask and red flags to watch for when hiring help."
      }
    ]
  },
  {
    "slug": "ai-and-digital-tools-for-retirees",
    "title": "AI & Digital Tools for Retirees",
    "description": "Learn to use AI safely, manage passwords, protect privacy, and recognize scams.",
    "heroLead": "Learn to use AI safely, manage passwords, protect privacy, and recognize scams.",
    "heroSub": "Built for retirees who want to use new tools confidently while staying safe online.",
    "icon": "◫",
    "originalCategory": "Learning & Technology",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Safe AI basics",
        "description": "Understand what AI tools can and can't do, with simple, guided examples."
      },
      {
        "title": "Password & privacy guidance",
        "description": "Practical steps to protect accounts and personal information."
      },
      {
        "title": "Scam recognition training",
        "description": "Learn the patterns behind common scams targeting older adults."
      }
    ]
  },
  {
    "slug": "brain-health-and-cognitive-training",
    "title": "Brain Health & Cognitive Training",
    "description": "Memory exercises, learning modules, and practical habit-building routines.",
    "heroLead": "Memory exercises, learning modules, and practical habit-building routines.",
    "heroSub": "Built for retirees who want to keep their mind sharp with practical, everyday habits.",
    "icon": "✦",
    "originalCategory": "Growth & Legacy",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Structured exercises",
        "description": "Memory and attention activities designed to fit into a daily routine."
      },
      {
        "title": "Learning modules",
        "description": "Short, digestible lessons on brain health grounded in current research."
      },
      {
        "title": "Habit-building support",
        "description": "Simple routines that make consistency easier than willpower alone."
      }
    ]
  },
  {
    "slug": "care-navigation-tools",
    "title": "Care Navigation Tools",
    "description": "Practical education on long-term care options, insurance basics, and caregiver support—not medical advice.",
    "heroLead": "Practical education on long-term care options, insurance basics, and caregiver support—not medical advice.",
    "heroSub": "Built for retirees and families trying to understand long-term care options ahead of time.",
    "icon": "◇",
    "originalCategory": "Safety & Mobility",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Plain-language education",
        "description": "Understand the landscape of long-term care options before decisions are urgent."
      },
      {
        "title": "Insurance basics",
        "description": "Clear explanations of common terms and coverage questions."
      },
      {
        "title": "Caregiver support resources",
        "description": "Guidance and community for those supporting a spouse or family member."
      }
    ]
  },
  {
    "slug": "continuing-education-hub",
    "title": "Continuing Education Hub",
    "description": "Curated courses, lectures, and learning paths organized around your interests.",
    "heroLead": "Curated courses, lectures, and learning paths organized around your interests.",
    "heroSub": "Built for retirees who want to keep learning without committing to a full degree program.",
    "icon": "◫",
    "originalCategory": "Learning & Technology",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Curated course lists",
        "description": "Vetted options from universities, libraries, and online platforms."
      },
      {
        "title": "Organized by interest",
        "description": "Find learning paths in history, science, arts, languages, and more."
      },
      {
        "title": "No pressure, no exams",
        "description": "Learn for the sake of it, at whatever pace suits you."
      }
    ]
  },
  {
    "slug": "downsizing-and-relocation-guidance",
    "title": "Downsizing & Relocation Guidance",
    "description": "Compare retirement-friendly cities, estimate costs, and work through practical moving checklists.",
    "heroLead": "Compare retirement-friendly cities, estimate costs, and work through practical moving checklists.",
    "heroSub": "Built for retirees weighing whether—and where—to downsize or relocate.",
    "icon": "⌂",
    "originalCategory": "Home & Independence",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "City & cost comparisons",
        "description": "Compare climate, healthcare access, taxes, and cost of living across retirement-friendly areas."
      },
      {
        "title": "Downsizing checklists",
        "description": "Room-by-room guidance for sorting, donating, and deciding what comes with you."
      },
      {
        "title": "Moving-day planning",
        "description": "Practical timelines and vetted-mover guidance to keep the process manageable."
      }
    ]
  },
  {
    "slug": "emergency-preparedness",
    "title": "Emergency Preparedness",
    "description": "Personalized plans, checklists, and local resource mapping for older adults.",
    "heroLead": "Personalized plans, checklists, and local resource mapping for older adults.",
    "heroSub": "Built for retirees who want a clear, practical plan before an emergency happens.",
    "icon": "◇",
    "originalCategory": "Safety & Mobility",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Personalized emergency plans",
        "description": "Checklists tailored to your home, health needs, and location."
      },
      {
        "title": "Local resource mapping",
        "description": "Know which services and contacts to reach out to, and when."
      },
      {
        "title": "Easy-to-follow format",
        "description": "Plans built to be usable under stress, not just filed away."
      }
    ]
  },
  {
    "slug": "encore-career-and-volunteering-matchmaking",
    "title": "Encore Career & Volunteering Matchmaking",
    "description": "Curated opportunities for part-time work, mentoring, nonprofit service, and skill-based volunteering.",
    "heroLead": "Curated opportunities for part-time work, mentoring, nonprofit service, and skill-based volunteering.",
    "heroSub": "Built for retirees who want to keep using their skills and experience without the demands of a full-time career.",
    "icon": "↗",
    "originalCategory": "Purpose & Growth",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Personalized matching",
        "description": "Tell us about your background, interests, and the hours you want to give, and we surface roles and nonprofits that fit."
      },
      {
        "title": "Curated opportunity board",
        "description": "Part-time, consulting, mentoring, and board-service listings vetted for retiree-friendly organizations."
      },
      {
        "title": "Skills translation guidance",
        "description": "Practical help turning a career résumé into a compelling volunteer or encore-career profile."
      }
    ]
  },
  {
    "slug": "estate-organization-tools",
    "title": "Estate Organization Tools",
    "description": "Document checklists, digital-vault guidance, and practical legacy-planning frameworks.",
    "heroLead": "Document checklists, digital-vault guidance, and practical legacy-planning frameworks.",
    "heroSub": "Built for retirees who want their affairs organized and easy for family to find.",
    "icon": "✓",
    "originalCategory": "Life Organization",
    "cluster": "legacy-and-documents",
    "features": [
      {
        "title": "Document checklists",
        "description": "A clear list of what to gather, from wills to account information."
      },
      {
        "title": "Digital-vault guidance",
        "description": "Practical ways to securely store and share important documents."
      },
      {
        "title": "Legacy-planning frameworks",
        "description": "Structure your wishes clearly so family isn't left guessing."
      }
    ]
  },
  {
    "slug": "fitness-programs-for-55",
    "title": "Fitness Programs for 55+",
    "description": "Mobility routines, balance training, low-impact workouts, and walking groups.",
    "heroLead": "Mobility routines, balance training, low-impact workouts, and walking groups.",
    "heroSub": "Built for retirees who want to stay active safely, at a pace that fits their body.",
    "icon": "♡",
    "originalCategory": "Health & Confidence",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Low-impact routines",
        "description": "Mobility and strength workouts designed for joints and energy levels at 55+."
      },
      {
        "title": "Balance & fall-prevention training",
        "description": "Exercises built around independence and confidence in movement."
      },
      {
        "title": "Walking groups & classes",
        "description": "Find local, social options that make consistency easier."
      }
    ]
  },
  {
    "slug": "friendship-and-social-group-finder",
    "title": "Friendship & Social Group Finder",
    "description": "Local clubs, travel groups, hobby meetups, and online communities designed for retirees.",
    "heroLead": "Local clubs, travel groups, hobby meetups, and online communities designed for retirees.",
    "heroSub": "Built for retirees looking to build a wider circle of friends and regular social routines.",
    "icon": "◎",
    "originalCategory": "Community",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Curated local listings",
        "description": "Clubs, meetups, and interest groups in your area, filtered for retiree-friendly schedules."
      },
      {
        "title": "Travel & hobby communities",
        "description": "Connect with groups organized around shared interests, from hiking to bridge to book clubs."
      },
      {
        "title": "Low-pressure first steps",
        "description": "Drop-in events and one-time meetups so you can try a group before committing."
      }
    ]
  },
  {
    "slug": "grief-and-transition-support",
    "title": "Grief & Transition Support",
    "description": "Compassionate, non-clinical resources for loss and major life changes.",
    "heroLead": "Compassionate, non-clinical resources for loss and major life changes.",
    "heroSub": "Built for retirees navigating loss or major life change and looking for steady support.",
    "icon": "∞",
    "originalCategory": "Connection & Support",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Compassionate resources",
        "description": "Non-clinical guidance written with care for what this stage can bring."
      },
      {
        "title": "Community connection",
        "description": "Ways to connect with others who understand similar transitions."
      },
      {
        "title": "Clear next steps",
        "description": "Practical guidance alongside emotional support, not either-or."
      }
    ]
  },
  {
    "slug": "hobby-discovery-and-skill-building",
    "title": "Hobby Discovery & Skill Building",
    "description": "Guided pathways for photography, genealogy, gardening, writing, music, crafts, and more.",
    "heroLead": "Guided pathways for photography, genealogy, gardening, writing, music, crafts, and more.",
    "heroSub": "Built for retirees who want to pick up a new pursuit or finally go deeper on an old one.",
    "icon": "↗",
    "originalCategory": "Purpose & Growth",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Guided starter pathways",
        "description": "Step-by-step introductions to popular hobbies, from photography basics to genealogy research."
      },
      {
        "title": "Local classes & groups",
        "description": "Find in-person workshops, clubs, and studios near you, plus reputable online courses."
      },
      {
        "title": "Progress at your pace",
        "description": "No deadlines or grades—just a clear next step whenever you're ready for one."
      }
    ]
  },
  {
    "slug": "household-management-tools",
    "title": "Household Management Tools",
    "description": "One simple place for bills, warranties, subscriptions, and home-maintenance schedules.",
    "heroLead": "One simple place for bills, warranties, subscriptions, and home-maintenance schedules.",
    "heroSub": "Built for retirees who want less paperwork chaos and fewer missed deadlines.",
    "icon": "⌂",
    "originalCategory": "Home & Independence",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Centralized tracking",
        "description": "Bills, warranties, and subscriptions organized in one clear view."
      },
      {
        "title": "Maintenance reminders",
        "description": "Seasonal home-maintenance schedules so nothing gets forgotten."
      },
      {
        "title": "Simple, no-clutter setup",
        "description": "Designed to be easy to start and easy to keep up with."
      }
    ]
  },
  {
    "slug": "intergenerational-connection-programs",
    "title": "Intergenerational Connection Programs",
    "description": "Mentor students and young professionals or join a meaningful cultural exchange.",
    "heroLead": "Mentor students and young professionals or join a meaningful cultural exchange.",
    "heroSub": "Built for retirees who want to share experience with—and learn from—younger generations.",
    "icon": "◎",
    "originalCategory": "Community",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Mentoring placements",
        "description": "Structured programs pairing you with students or early-career professionals."
      },
      {
        "title": "Cultural exchange options",
        "description": "Conversation partnerships and community programs that connect generations."
      },
      {
        "title": "Flexible time commitment",
        "description": "From a single semester to an ongoing relationship, matched to your availability."
      }
    ]
  },
  {
    "slug": "life-story-and-legacy-projects",
    "title": "Life Story & Legacy Projects",
    "description": "Guided autobiography, family-history archiving, and digital memory books.",
    "heroLead": "Guided autobiography, family-history archiving, and digital memory books.",
    "heroSub": "Built for retirees who want to capture their story and family history for the next generation.",
    "icon": "✦",
    "originalCategory": "Growth & Legacy",
    "cluster": "legacy-and-documents",
    "features": [
      {
        "title": "Guided autobiography prompts",
        "description": "Structured questions that turn memories into a real, finished narrative."
      },
      {
        "title": "Family-history archiving",
        "description": "Organize photos, documents, and records into a lasting family record."
      },
      {
        "title": "Digital memory books",
        "description": "Shareable formats that make it easy for family to read and revisit."
      }
    ]
  },
  {
    "slug": "loneliness-and-connection-resources",
    "title": "Loneliness & Connection Resources",
    "description": "Guided programs, discussion groups, and manageable social challenges.",
    "heroLead": "Guided programs, discussion groups, and manageable social challenges.",
    "heroSub": "Built for retirees who want practical, low-pressure ways to feel more connected.",
    "icon": "∞",
    "originalCategory": "Connection & Support",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Guided programs",
        "description": "Structured, small-step approaches to building connection over time."
      },
      {
        "title": "Discussion groups",
        "description": "Facilitated conversations with others navigating similar transitions."
      },
      {
        "title": "Manageable social challenges",
        "description": "Simple weekly prompts that build momentum without overwhelm."
      }
    ]
  },
  {
    "slug": "medicare-navigation-guides",
    "title": "Medicare Navigation Guides",
    "description": "Clear educational content to help you understand options without personalized advice.",
    "heroLead": "Clear educational content to help you understand options without personalized advice.",
    "heroSub": "Built for retirees trying to make sense of Medicare options before enrollment deadlines.",
    "icon": "✓",
    "originalCategory": "Life Organization",
    "cluster": "legacy-and-documents",
    "features": [
      {
        "title": "Plain-language guides",
        "description": "Understand Parts A, B, C, and D without the jargon."
      },
      {
        "title": "Decision-support tools",
        "description": "Compare options and questions to bring to a licensed advisor."
      },
      {
        "title": "Deadline reminders",
        "description": "Know key enrollment windows so you don't miss them."
      }
    ]
  },
  {
    "slug": "nutrition-for-longevity",
    "title": "Nutrition for Longevity",
    "description": "Meal plans, grocery lists, and cooking classes tailored to older adults.",
    "heroLead": "Meal plans, grocery lists, and cooking classes tailored to older adults.",
    "heroSub": "Built for retirees who want simple, sustainable eating habits without fad diets.",
    "icon": "♡",
    "originalCategory": "Health & Confidence",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Practical meal plans",
        "description": "Straightforward menus built around nutrition needs common at this life stage."
      },
      {
        "title": "Ready-made grocery lists",
        "description": "Skip the guesswork with lists that match the meal plans."
      },
      {
        "title": "Cooking classes",
        "description": "Learn a handful of go-to recipes that make healthy eating easier."
      }
    ]
  },
  {
    "slug": "relationship-and-marriage-in-retirement",
    "title": "Relationship & Marriage in Retirement",
    "description": "Communication workshops, shared-activity planning, and conflict-navigation resources.",
    "heroLead": "Communication workshops, shared-activity planning, and conflict-navigation resources.",
    "heroSub": "Built for couples adjusting to more time together and a changing daily rhythm.",
    "icon": "∞",
    "originalCategory": "Connection & Support",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Communication workshops",
        "description": "Practical tools for navigating a major shared-life transition."
      },
      {
        "title": "Shared-activity planning",
        "description": "Ideas for building new routines and interests together."
      },
      {
        "title": "Conflict-navigation resources",
        "description": "Non-clinical guidance for working through friction constructively."
      }
    ]
  },
  {
    "slug": "retiree-events-calendar",
    "title": "Retiree Events Calendar",
    "description": "A curated calendar of local events, workshops, classes, and travel meetups.",
    "heroLead": "A curated calendar of local events, workshops, classes, and travel meetups.",
    "heroSub": "Built for retirees who want an easy way to see what's happening nearby, all in one place.",
    "icon": "◎",
    "originalCategory": "Community",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "One curated calendar",
        "description": "Local events, classes, and meetups organized so you're not hunting across a dozen sites."
      },
      {
        "title": "Filter by interest",
        "description": "Narrow the list to travel, fitness, arts, learning, or social categories."
      },
      {
        "title": "Weekly highlights",
        "description": "A short digest of upcoming events worth knowing about."
      }
    ]
  },
  {
    "slug": "retirement-bucket-list-builder",
    "title": "Retirement Bucket List Builder",
    "description": "Interactive planning for meaningful experiences—not simply another list of vacations.",
    "heroLead": "Interactive planning for meaningful experiences—not simply another list of vacations.",
    "heroSub": "Built for retirees who want a plan for meaningful experiences, not just a travel wish list.",
    "icon": "↗",
    "originalCategory": "Purpose & Growth",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Guided planning tool",
        "description": "Work through prompts about people, places, skills, and contributions—not just destinations."
      },
      {
        "title": "Realistic timelines",
        "description": "Turn big ideas into achievable steps with rough costs and time commitments."
      },
      {
        "title": "Shareable with family",
        "description": "Keep loved ones in the loop, or invite them to join specific experiences."
      }
    ]
  },
  {
    "slug": "retirement-identity-coaching",
    "title": "Retirement Identity Coaching",
    "description": "Support for navigating the psychological shift from career structure to personal freedom.",
    "heroLead": "Support for navigating the psychological shift from career structure to personal freedom.",
    "heroSub": "Built for retirees adjusting to life without the structure and identity a career once provided.",
    "icon": "✦",
    "originalCategory": "Growth & Legacy",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "One-on-one guidance",
        "description": "Work through the identity and purpose questions that retirement often raises."
      },
      {
        "title": "Practical structure tools",
        "description": "Build a new daily rhythm that replaces the routine of a career."
      },
      {
        "title": "Non-clinical, judgment-free support",
        "description": "Coaching focused on perspective and next steps, not therapy."
      }
    ]
  },
  {
    "slug": "sleep-optimization-for-retirees",
    "title": "Sleep Optimization for Retirees",
    "description": "Improve daily routines, sleep environments, and habits through simple tracking.",
    "heroLead": "Improve daily routines, sleep environments, and habits through simple tracking.",
    "heroSub": "Built for retirees whose sleep routines have shifted and want practical ways to improve them.",
    "icon": "♡",
    "originalCategory": "Health & Confidence",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Simple sleep tracking",
        "description": "Spot patterns in routine, environment, and rest quality over time."
      },
      {
        "title": "Environment guidance",
        "description": "Practical, low-cost adjustments to bedroom setup and evening routines."
      },
      {
        "title": "Habit-based improvements",
        "description": "Small, sustainable changes rather than one-size-fits-all rules."
      }
    ]
  },
  {
    "slug": "subscription-and-expense-optimization",
    "title": "Subscription & Expense Optimization",
    "description": "Simplify recurring costs, identify waste, and reduce unnecessary spending.",
    "heroLead": "Simplify recurring costs, identify waste, and reduce unnecessary spending.",
    "heroSub": "Built for retirees who want to see where their money goes and trim what they don't use.",
    "icon": "✓",
    "originalCategory": "Life Organization",
    "cluster": "legacy-and-documents",
    "features": [
      {
        "title": "Recurring-cost review",
        "description": "See every subscription and recurring charge in one place."
      },
      {
        "title": "Waste identification",
        "description": "Spot services you're paying for but no longer use."
      },
      {
        "title": "Practical savings steps",
        "description": "Simple actions to reduce spending without cutting what matters."
      }
    ]
  },
  {
    "slug": "tech-simplification-services",
    "title": "Tech Simplification Services",
    "description": "Friendly tutorials for smartphones, social media, streaming, online banking, and smart homes.",
    "heroLead": "Friendly tutorials for smartphones, social media, streaming, online banking, and smart homes.",
    "heroSub": "Built for retirees who want technology to feel useful instead of frustrating.",
    "icon": "◫",
    "originalCategory": "Learning & Technology",
    "cluster": "discovery-and-purpose",
    "features": [
      {
        "title": "Plain-language tutorials",
        "description": "Step-by-step guides for phones, streaming, banking apps, and smart-home devices."
      },
      {
        "title": "No jargon, no judgment",
        "description": "Written for people who want clear answers, not tech-speak."
      },
      {
        "title": "Troubleshooting help",
        "description": "Practical fixes for the everyday glitches that cause the most frustration."
      }
    ]
  },
  {
    "slug": "transportation-and-mobility-planning",
    "title": "Transportation & Mobility Planning",
    "description": "Ride-share guidance, senior transit options, and safe-driving resources.",
    "heroLead": "Ride-share guidance, senior transit options, and safe-driving resources.",
    "heroSub": "Built for retirees who want to plan ahead for reliable, safe transportation options.",
    "icon": "◇",
    "originalCategory": "Safety & Mobility",
    "cluster": "life-transitions",
    "features": [
      {
        "title": "Ride-share guidance",
        "description": "Simple instructions for using ride-share apps confidently and safely."
      },
      {
        "title": "Local transit options",
        "description": "Senior-focused transit and shuttle programs in your area."
      },
      {
        "title": "Safe-driving resources",
        "description": "Self-assessment tools and refresher-course information."
      }
    ]
  }
];

export function getServicesByCluster(cluster: Cluster): Service[] {
  return services.filter((s) => s.cluster === cluster);
}

export function getServiceBySlug(cluster: Cluster, slug: string): Service | undefined {
  return services.find((s) => s.cluster === cluster && s.slug === slug);
}
