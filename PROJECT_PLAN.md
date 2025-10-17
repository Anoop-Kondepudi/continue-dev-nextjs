# Continue.dev Rebuild - Project Plan

## 🎯 Goal
Rebuild www.continue.dev as a fully editable Next.js application with modern tech stack and clean architecture.

## 📊 Analysis Summary

### Original Site Audit
- **Framework**: Webflow (static HTML export)
- **Animations**: GSAP (ScrollTrigger)
- **3D**: ❌ None (small canvas for blob effect only)
- **Videos**: Feature demo embeds
- **Assets**: All copied to `/public`

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (COMPLETED)

**Setup**
- [x] Initialize Next.js 15 with TypeScript
- [x] Install dependencies (GSAP, Framer Motion, clsx)
- [x] Create project structure
- [x] Copy assets from original site

**Core Components**
- [x] Utility functions (`cn`, GSAP helpers)
- [x] Navbar component
  - [x] Logo and branding
  - [x] Desktop navigation
  - [x] Mobile menu
  - [x] GitHub/Discord links
- [x] Hero section
  - [x] Main headline with gradient
  - [x] Subtitle
  - [x] CTA buttons
  - [x] Fade-in animations

### 🔄 Phase 2: Main Sections (CURRENT)

**Plans Section** (from live site inspection)
- [ ] Create `Plans.tsx` component
- [ ] Three cards: Solo, Team, Enterprise
- [ ] Card hover animations
- [ ] Responsive grid layout
- [ ] Badge components (Purple, Blue, Green)

**Solo Section**
- [ ] Feature list
- [ ] "Any models" visualization
- [ ] "Any MCP tools" section
- [ ] "Any rules" display

**Team Section** 
- [ ] Collaboration features
- [ ] Allowed models/tools config
- [ ] Security highlights

**Enterprise Section**
- [ ] Scalability messaging
- [ ] Integration icons
- [ ] Contact/demo CTA

**How It Works**
- [ ] Recreate GSAP card stack animation
  - [ ] 6 cards with scale/position transitions
  - [ ] Auto-play timeline
  - [ ] Active card highlighting
  - [ ] Mobile responsive version

### 🎯 Phase 3: Features & Media

**Feature Showcases**
- [ ] Agent demo section
- [ ] Chat demo section  
- [ ] Edit demo section
- [ ] Autocomplete demo section
- [ ] CLI demo section

**Video Integration**
- [ ] Video player component
- [ ] Poster images
- [ ] Autoplay on scroll (optional)

### 🎨 Phase 4: Polish & Animations

**Scroll Animations**
- [ ] Section fade-ins
- [ ] Parallax effects (if desired)
- [ ] Smooth scroll behavior
- [ ] Mobile animation optimization

**Interactions**
- [ ] Button hover states
- [ ] Card interactions
- [ ] Dropdown menus (if needed)

### 🏗️ Phase 5: Footer & Pages

**Footer**
- [ ] Footer component
- [ ] Social links
- [ ] Navigation links
- [ ] Copyright/legal

**Additional Pages**
- [ ] `/solutions` page
- [ ] `/about-us` page
- [ ] 404 page

### ⚡ Phase 6: Performance & SEO

**Optimization**
- [ ] Image optimization
- [ ] Video lazy loading
- [ ] Code splitting
- [ ] Bundle size analysis

**SEO**
- [ ] Meta tags
- [ ] OpenGraph images
- [ ] Sitemap
- [ ] robots.txt

### 🚀 Phase 7: Deployment

**Final Steps**
- [ ] Environment variables
- [ ] Build for production
- [ ] Deploy to Vercel
- [ ] Domain setup (if applicable)
- [ ] Analytics (optional)

---

## 📝 Notes

### Design Decisions Made
1. **No Three.js/Spline** - Not present on live site, removed from plan
2. **GSAP Only** - Sufficient for all animations seen
3. **Tailwind CSS** - For rapid styling that matches Webflow output
4. **Component-First** - Each section is a standalone component

### Assets Inventory
✅ **Copied to /public:**
- 5 video files (.mp4 + .webm)
- 6 poster images (.jpg)
- All necessary for feature demos

### Known Complexity
🔴 **Card Stack Animation** - Most complex feature
- 6 cards with sequential scale/translate
- Loop timing
- Active card detection
- Mobile adaptation

---

## 📈 Progress Tracking

**Overall Progress: 20%**
- Foundation: ✅ 100%
- Main Sections: 🔄 0%
- Features: ⏳ 0%
- Polish: ⏳ 0%
- Footer: ⏳ 0%
- Performance: ⏳ 0%
- Deployment: ⏳ 0%

---

**Last Updated:** [Current timestamp]
**Next Steps:** Start Phase 2 - Build Plans section cards
