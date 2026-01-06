# Product Definition: iTowns Framework Website

**Version:** 1.0  
**Date:** January 2026  
**Project:** iTowns Commons Framework Website

---

## Executive Summary

The iTowns website serves as the primary digital interface for a commons-oriented 3D framework. It must simultaneously support technical evaluation by developers and strategic assessment by organizational decision-makers. Success is measured by adoption quality (informed users building appropriate solutions) rather than adoption volume alone.

---

## Primary Audience Segments

### 1. Developers

**Profile:**
- Software engineers evaluating 3D web frameworks
- Technical leads assessing architectural fit
- Open-source contributors seeking collaboration opportunities
- Integration engineers implementing geospatial solutions

**Primary Goals:**
- Determine if iTowns solves their specific technical problem
- Evaluate framework capabilities, limitations, and maturity
- Understand integration requirements and learning curve
- Assess documentation quality and community support
- Find clear pathways to implementation and contribution

**Key Concerns:**
- **Vendor lock-in:** Will this framework trap us in proprietary patterns?
- **Maintenance risk:** Is this actively maintained? Who controls it?
- **Technical debt:** Will adopting this create future migration problems?
- **Learning investment:** How much time to productivity?
- **Integration complexity:** Does this fit our existing stack?
- **Performance guarantees:** Can it handle our scale and use cases?

**Success Looks Like:**
- Making a confident go/no-go decision within 30 minutes of site exploration
- Understanding the framework's architectural philosophy and trade-offs
- Finding working code examples relevant to their use case
- Identifying a clear next step (tutorial, demo, documentation, or community contact)
- Feeling confident explaining the choice to their team or manager

---

### 2. C-Suite / Decision-Makers

**Profile:**
- CTOs and VP Engineering assessing strategic technology choices
- Product leaders evaluating platform capabilities
- Directors concerned with vendor relationships and governance
- Budget holders evaluating total cost of ownership

**Primary Goals:**
- Understand strategic value and competitive differentiation
- Assess organizational and governance stability
- Evaluate long-term viability and ecosystem health
- Understand risk profile (technical, legal, operational)
- Determine alignment with organizational values (open-source, commons, sustainability)

**Key Concerns:**
- **Sustainability:** Will this exist in 3-5 years?
- **Governance:** Who controls the roadmap? How are decisions made?
- **Hidden costs:** What's the true TCO beyond implementation?
- **Strategic risk:** Are we betting on the right horse?
- **Reputation risk:** Will this choice reflect well on our organization?
- **Exit strategy:** What if we need to switch later?
- **Support options:** Can we get help when we need it?

**Success Looks Like:**
- Understanding the governance model and decision-making structure
- Identifying credible organizations already using iTowns
- Seeing clear evidence of active maintenance and forward momentum
- Feeling confident presenting iTowns in a strategic technology review
- Understanding how iTowns fits into the broader geospatial/3D web ecosystem
- Having sufficient information to commission a technical evaluation

---

## Website Top-Level Goals

### Goal 1: Enable Informed Adoption Decisions
**What:** Provide sufficient technical and strategic information for qualified prospects to make confident decisions.  
**Why:** Bad-fit adoptions create support burden and damage reputation.  
**Success Metric:** High correlation between site visit and appropriate framework selection.

### Goal 2: Communicate Governance Credibility
**What:** Make the commons governance model visible, understandable, and legitimate.  
**Why:** Decision-makers need governance clarity to manage organizational risk.  
**Success Metric:** Governance questions decrease; governance confidence increases (survey/community feedback).

### Goal 3: Lower Barrier to First Value
**What:** Clear path from "interested" to "running example code" to "production-ready".  
**Why:** Adoption requires momentum; early friction kills evaluation.  
**Success Metric:** Time-to-first-working-example and tutorial completion rates.

### Goal 4: Establish Long-Term Sustainability Signals
**What:** Demonstrate active maintenance, clear roadmap, and ecosystem health.  
**Why:** Both audiences need evidence that iTowns will be supported long-term.  
**Success Metric:** Reduced "is this maintained?" questions; increased contribution inquiries.

### Goal 5: Position iTowns in the Ecosystem
**What:** Clearly articulate when iTowns is the right choice versus alternatives.  
**Why:** Honest positioning builds trust and attracts appropriate users.  
**Success Metric:** Decrease in misaligned feature requests; increase in strategic partnerships.

---

## Homepage Messaging Hierarchy

The homepage must serve both audiences within a single scroll depth while maintaining credibility and avoiding marketing fluff.

### Above the Fold

**Primary Headline:**
> **iTowns: A Framework for 3D Geospatial Web Applications**

*Why this works:*
- Technically precise (framework, not library or platform)
- Clear domain (3D geospatial web)
- No hype, no vague promises

**Secondary Headline (Subhead):**
> Built as a commons, governed by its users. Open-source, standard-based, production-ready.

*Why this works:*
- Communicates governance model (commons)
- Signals credibility (standards-based, production-ready)
- Addresses C-suite concerns (governance) and developer concerns (open-source)

**Call-to-Action Pair:**
```
[Get Started →]  [Why iTowns? →]
```

*Why this works:*
- Developers → "Get Started" (action-oriented)
- Executives → "Why iTowns?" (strategic framing)
- No false urgency, no "Request Demo" marketing patterns

---

### Hero Section Supporting Elements

**Visual:**
- Live, interactive 3D demo (minimal JS, fast load)
- Real use case (not abstract/promotional)
- Performance counter visible (FPS, tile count) to signal technical seriousness

**Quick Facts (3-4 bullets, scannable):**
- "Built on open standards (OGC, WMS, WMTS, 3D Tiles)"
- "Used in production by [2-3 credible organizations]"
- "Maintained by a commons governance model"
- "Apache 2.0 licensed"

---

### Mid-Page: Value Propositions (Balanced)

#### For Developers
**Headline:** "Build Without Lock-In"

- Standards-first architecture
- Extensible plugin system
- Clear migration paths
- Active documentation and examples

**Linking:** → Documentation, API Reference, GitHub

---

#### For Decision-Makers
**Headline:** "Governed by Users, Built for Longevity"

- Commons governance structure explained
- Organizational members and contributors
- Transparent roadmap and decision-making
- Sustainability model

**Linking:** → Governance, Case Studies, Community

---

### Lower-Page: Social Proof & Ecosystem

**Headline:** "Trusted by Organizations Building Critical Systems"

- 3-5 case studies (varied industries: government, research, commercial)
- Each with: organization name, use case, one-sentence outcome
- No inflated metrics, no "10x improvement" claims

**Ecosystem Integration:**
- Compatible data sources
- Supported standards
- Related tools and frameworks

---

### Footer Navigation (Dual-Audience)

**For Developers:**
- Documentation
- API Reference
- Examples & Demos
- Contributing
- GitHub

**For Decision-Makers:**
- About & Governance
- Case Studies
- Roadmap
- Community
- Contact

**Meta:**
- Blog
- License
- Security Policy

---

## Content Strategy Principles

1. **No asymmetric information:** Don't hide limitations or trade-offs.
2. **Assume intelligence:** Readers can handle complexity; they cannot tolerate condescension.
3. **Technical depth with strategic framing:** Every technical feature should answer "so what?" for decision-makers.
4. **Strategic value with technical grounding:** Every strategic claim should be verifiable in the code or community.
5. **Prefer specificity over aspiration:** "Renders 50k+ 3D Tiles/sec" beats "blazing fast."
6. **Transparent governance:** Make decision-making processes, membership, and funding visible.

---

## Anti-Patterns to Avoid

- ❌ "The leading framework for..." (unverifiable, promotional)
- ❌ "Enterprise-grade" (vague, overused)
- ❌ "Request a demo" (implies vendor sales process)
- ❌ Hiding governance structure until deep pages
- ❌ Separate "enterprise" vs "community" sections
- ❌ Feature lists without use-case context
- ❌ Roadmap without governance decision context
- ❌ Testimonials without attributable sources

---

## Success Criteria (6-12 Months)

**Quantitative:**
- ↑ Average session duration on governance/about pages (strategic interest)
- ↑ Tutorial start rate from homepage
- ↓ "Is this maintained?" questions in community channels
- ↑ Contributor inquiries
- ↓ Support requests from misaligned use cases

**Qualitative:**
- Prospective users cite governance as a positive differentiator
- C-suite stakeholders reference iTowns in public talks/posts
- Competitor websites begin adopting similar transparency patterns
- Developers describe evaluation process as "refreshingly clear"

---

## Document Changelog

- **v1.0 (January 2026):** Initial product definition

