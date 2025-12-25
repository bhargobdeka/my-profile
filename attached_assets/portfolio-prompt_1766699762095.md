# Professional Portfolio Website - Detailed Build Prompt

## Project Overview
Create a modern, production-ready personal portfolio website showcasing my technical expertise as a **Data Scientist / AI Engineer** and **Technical Writer**. The site should dynamically display my GitHub projects, Medium articles, client technical writing work, and professional experience. The website must be responsive, SEO-optimized, and deployable on Vercel/Netlify.

---

## 1. Core Purpose & Target Audience
- **Primary Goal**: Attract technical leads, startups, and clients interested in hiring for AI/ML engineering roles or technical writing/documentation services
- **Secondary Goal**: Establish thought leadership in RAG systems, LLM evaluation, and AI product development
- **Target Audience**: Tech hiring managers, startup CTOs, technical marketing teams, companies needing technical documentation
- **Call-to-Action**: "Hire me for AI engineering or technical writing" / "Read my latest articles on AI"

---

## 2. Website Structure & Pages

### 2.1 Navigation & Layout
- **Header**: Professional logo/name, navigation menu (Home, Projects, Articles, Experience, Contact)
- **Footer**: Social links (LinkedIn, GitHub, Medium, Email), copyright
- **Mobile-First Design**: Fully responsive for mobile, tablet, and desktop
- **Dark Mode Support**: Follow modern design trends with light/dark theme toggle

### 2.2 Home Page (Hero Section)
- **Hero Image/Background**: Professional, tech-focused (subtle gradient or abstract AI-themed visuals)
- **Headline**: "AI Engineer & Technical Writer | Building production-grade AI systems"
- **Subheading**: Brief 2-sentence description of expertise (RAG, LLMs, data engineering, technical documentation)
- **CTA Buttons**: 
  - "View My Projects" (links to Projects section)
  - "Read My Articles" (links to Articles section)
  - "Let's Connect" (links to Contact/LinkedIn)
- **Featured Section**: Highlight 3 recent projects or articles at a glance

### 2.3 Projects Page
- **Dynamic GitHub Integration**: Fetch and display GitHub projects using GitHub API
  - Display: Project title, description, tech stack (tags/badges), GitHub link, live demo link (if available)
  - Filter/Sort Options: By language (Python, JavaScript, etc.), by topic (ML, Web, Data), date added
  - Show: Repository stars, contributors, last updated date
  - Feature at least: Gradio/Streamlit AI projects, React/fullstack projects, data engineering projects
  
- **Project Card Layout**:
  - Thumbnail/Preview image (auto-generated or provided)
  - Project title and description
  - Technology stack (visible as colorful badges)
  - GitHub repo link and any deployed demo links
  - Brief stats (stars, forks, last updated)

- **Sample Projects to Include**:
  - AI/ML projects (RAG pipelines, LLM evaluation tools, Streamlit/Gradio demos)
  - Data engineering projects (SQL optimization, data pipelines, Azure DevOps integrations)
  - Web/Full-stack projects (React frontends, FastAPI backends)

---

## 3. Articles & Publications Page

### 3.1 Medium Articles Integration
- **Dynamic Medium API Integration**: Automatically fetch and display published Medium articles
  - Display: Article title, preview image, publication date, reading time, link
  - Show author platform (Medium or Custom Client Work)
  - Filter/Sort: By date (newest first), by topic tag (RAG, LLM, AI Product Dev, etc.)

### 3.2 Technical Writing for Clients
- **Client Work Section**: Display articles written for clients/companies
  - Format: Company name, article title, publication link, tech stack mentioned
  - Examples of clients: Kapa.ai, Unstract, early-stage AI startups
  - Show: Publication date, key topics covered
  - CTA: "Available for technical writing contracts" with email/contact link

### 3.3 Upcoming Content/Substack
- **Teaser Section**: "Technical Marketing Newsletter on Canadian AI Startups"
  - Brief description of Substack/independent technical publication focus
  - Subscribe button/signup form

---

## 4. Experience Section
- **Timeline View** (recommended) or **Chronological List**:
  - **Current Role** (highlighted): Data Scientist/AI Engineer role at current company
    - Company name, role title, dates
    - Key responsibilities and achievements
    - Technologies used (Python, SQL, AWS, Azure DevOps)
    - Impact metrics (e.g., "Led RAG pipeline development", "Optimized forecasting models")
  
  - **Previous Roles** (if applicable):
    - Company, position, dates
    - Key accomplishments and tech stack
  
  - **Side Hustle / Freelance Work**:
    - Technical Writing ($500/article Medium side gig)
    - Potential AI consulting/contracting availability
    - "Open to contract technical writing and AI engineering projects"

- **Skills Highlight**:
  - **Languages**: Python, SQL, YAML
  - **ML/AI**: RAG systems, LLM evaluation, vector embeddings, demand forecasting, ML model deployment
  - **Data Stack**: AWS (Athena, Batch, DMS), Google Cloud, SQL optimization, data pipelines
  - **Frontend**: React, Gradio, Streamlit
  - **Tools**: VSCode, GitHub, Azure DevOps, Wealthsimple
  - **Methodologies**: Agile, CI/CD pipelines, data quality assurance

---

## 5. Contact Section
- **Contact Form**:
  - Name, email, subject, message
  - Dropdown for inquiry type: "Hiring", "Technical Writing Contract", "Consultation", "Other"
  - Submit button with validation
  - Success message after submission

- **Direct Links**:
  - Email (mailto:)
  - LinkedIn profile link
  - GitHub profile link
  - Medium profile link
  - Download Resume/CV (optional, if available)

- **Availability Message**: 
  - "Currently open to AI Engineering roles and Technical Writing contracts"
  - "Based in Montreal, Quebec, Canada"

---

## 6. Design & UX Requirements

### 6.1 Visual Design
- **Color Scheme**: Modern tech aesthetic
  - Primary: Teal/Blue accent color (professional, tech-forward)
  - Neutral: Dark grays/charcoals (dark mode) or light grays (light mode)
  - Accent: Orange/Red for CTAs and highlights
  - Code syntax highlighting for any code snippets

- **Typography**:
  - Headings: Bold, modern sans-serif (e.g., Inter, Poppins, Geist)
  - Body: Clean sans-serif for readability
  - Code: Monospace font (Monaco, Consolas)

- **Spacing & Layout**:
  - Generous whitespace for modern feel
  - Card-based component design for projects and articles
  - Max content width: 1200px for desktop, full-width mobile

### 6.2 Interactive Elements
- **Smooth Scroll**: Anchor links to sections scroll smoothly
- **Hover Effects**: Project cards lift/shadow on hover, links have underline animation
- **Transitions**: 200-300ms CSS transitions for state changes
- **Loading States**: Show skeleton loaders while fetching GitHub/Medium data
- **Error Handling**: Graceful fallback if API calls fail

---

## 7. Technical Implementation Requirements

### 7.1 Data Sources & APIs
- **GitHub API**: Fetch user repositories, filter by language/topic, display stats
  - Auth: GitHub Personal Access Token (provided by user)
  - Endpoints: `/user/repos`, filter by public repos
  
- **Medium RSS Feed** or **Medium API**: Fetch published articles
  - Use Medium RSS feed for simplicity: `https://medium.com/feed/@{username}`
  - Parse to extract: title, link, published date, description, image
  
- **Static Data**: Store experience, skills, client work details in JSON/YAML config file
  - Easy to update without rebuilding entire site

### 7.2 Performance & SEO
- **SEO Optimization**:
  - Meta tags for each page (title, description, keywords)
  - Open Graph tags for social sharing (LinkedIn, Twitter)
  - Structured data (JSON-LD) for person/portfolio schema
  - Sitemap.xml for search engines
  
- **Performance**:
  - Lazy load images (especially project thumbnails)
  - Code splitting for faster initial load
  - Optimize images (WebP format where possible)
  - Target Lighthouse score: 90+ on desktop, 85+ on mobile

### 7.3 Deployment & Hosting
- **Static Site Generation (SSG)**: Use Next.js, Remix, or Astro for fast builds
- **Hosting**: Deploy on Vercel or Netlify
  - Auto-deploy from GitHub main branch
  - Environment variables for API keys (GitHub token, etc.)
  - Automatic HTTPS and custom domain support

---

## 8. Data & Configuration

### 8.1 User Info to Provide
- **GitHub Username**: (for API integration)
- **Medium Username**: (for RSS feed integration)
- **LinkedIn Profile URL**: (for link in footer)
- **Email Address**: (for contact form)
- **Location**: Montreal, Quebec, Canada
- **Current Job Title**: Data Scientist / AI Engineer
- **Company Name**: (optional, if wanting to display)

### 8.2 Content to Provide
- **Resume/CV**: PDF file or text content of work experience
- **Client Work Samples**: List of companies/publications and articles written
  - Format: Company name, article title, URL, publication date, key topics
  - Example: Kapa.ai - "Building Production RAG Pipelines" - $500 USD article on LLM evaluation
  
- **Project Highlights** (optional, if not auto-fetching all GitHub repos):
  - Which GitHub repos to feature prominently
  - Which projects have live demos or deployed versions
  - Project descriptions (if auto-generated descriptions are insufficient)

- **Skills List** (optional):
  - Can be auto-generated from README files or manually provided
  - Technologies to highlight: Python, SQL, React, AWS, RAG, LLMs, etc.

### 8.3 Visual Assets (Optional)
- **Logo/Avatar**: Professional headshot or logo (can be auto-generated or user-provided)
- **Hero Image**: Tech/AI-themed background (can use stock images or generated)
- **Project Thumbnails**: Screenshots of projects (auto-generated or user-provided)

---

## 9. Additional Features (Nice-to-Have / Phase 2)

- **Blog Section**: Embed latest Medium articles with custom styling
- **Portfolio Search**: Full-text search across projects and articles
- **Analytics**: Google Analytics integration to track visitor behavior
- **Newsletter Signup**: Email capture for Substack/Medium subscribers
- **Dark Mode Toggle**: Switch between light and dark themes
- **Comment Section**: Allow discussions on portfolio projects (Disqus or similar)
- **View Counter**: Track popular projects and articles
- **Video Demos**: Embed demo videos of Streamlit/Gradio apps
- **Testimonials**: Section for client/manager recommendations (if willing to collect)

---

## 10. Brand & Messaging

### 10.1 Elevator Pitch
"I'm a Data Scientist and AI Engineer based in Montreal, specializing in building production-grade RAG systems, LLM evaluation frameworks, and technical documentation for early-stage AI startups. I combine deep technical expertise with clear communication—proven through published articles and deployed AI products."

### 10.2 Key Messages
1. **Technical Depth**: Real experience with RAG, LLM evaluation, vector embeddings, SQL optimization
2. **Startup Expertise**: Understanding of building AI products from MVP to production
3. **Clear Communicator**: Medium articles ($500/article side gig), technical writing for clients
4. **Full-Stack Capability**: Can work across AI/ML pipelines, data engineering, and web frontends
5. **Canadian AI Ecosystem**: Active in Montreal's AI community, planning technical marketing initiative

### 10.3 Call-to-Action Hierarchy
1. **Primary CTA**: "Hire me for AI Engineering roles"
2. **Secondary CTA**: "Contract me for technical writing"
3. **Engagement CTA**: "Read my articles about AI"
4. **Community CTA**: "Connect on LinkedIn / Follow on Medium"

---

## 11. Success Metrics
- Website loads in < 2 seconds
- Mobile lighthouse score > 85
- GitHub/Medium data updates automatically (via API)
- Contact form submissions received
- Inbound inquiries from LinkedIn/GitHub profile visitors

---

## 12. Deployment Checklist

- [ ] Domain registered and configured (e.g., {firstname}{lastname}.dev)
- [ ] GitHub repository created and linked to Vercel/Netlify
- [ ] Environment variables set (GitHub API token, etc.)
- [ ] Custom favicon and metadata configured
- [ ] Form submission handling (email or service like Formspree)
- [ ] Analytics set up
- [ ] Social media links verified
- [ ] Resume/CV downloadable
- [ ] All links tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized and Lighthouse score reviewed
- [ ] Deployed and live

---

## 13. Suggested Tech Stack

**Recommended for Lovable/Replit:**
- **Framework**: Next.js (React) or Astro
- **Styling**: Tailwind CSS (with custom design tokens for your brand colors)
- **APIs**: GitHub API, Medium RSS
- **Deployment**: Vercel (native Next.js support)
- **Forms**: Formspree, Netlify Forms, or serverless function
- **Icons**: Lucide React or Feather Icons
- **Animations**: Framer Motion (optional, for advanced animations)

**Alternative (Lighter Weight):**
- **Framework**: Astro + React islands
- **Styling**: Pico CSS or Bootstrap
- **Deployment**: Netlify

---

## 14. Getting Started

1. **Provide Your Data**: Share GitHub username, Medium username, LinkedIn profile, and any client work details
2. **Design Review**: Agree on color scheme, layout, and feature priorities
3. **Development**: Builder creates site with API integrations
4. **Content Population**: GitHub projects and Medium articles auto-populate
5. **Customization**: Add resume, update experience details, refine messaging
6. **Testing & Optimization**: Lighthouse audit, mobile testing, form testing
7. **Deployment**: Push to Vercel/Netlify with custom domain
8. **Launch**: Go live and start attracting opportunities

---

## Notes

- This portfolio should be **updated automatically** for GitHub and Medium content
- Emphasis on **technical credibility**: Show real projects, real articles, real impact
- **Minimize friction** for hiring managers: Make it easy to contact, review work, and check social profiles
- **Mobile-first**: Most visitors will come from LinkedIn/Twitter on mobile
- **SEO matters**: Ensure articles, projects, and experience are indexable by Google
- **Personality**: Let your voice come through in the copy—you're a technologist who can also communicate clearly