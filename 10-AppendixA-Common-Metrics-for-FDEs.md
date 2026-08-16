# Appendix A: Common Metrics FDEs Should Track

This appendix presents a metrics framework covering the full chain of FDE work, organized across four layers: delivery, client, business, and organizational. Metrics are valuable for their precision, not their quantity—locking in on 3 to 5 core metrics per client project beats plastering an entire wall with dashboards.

## I. Delivery-Layer Metrics (Is the project being done right?)

**TTV (Time to Value):** The time from kickoff to the client's first measurable value. This is the lifeline metric of the FDE model. Reference benchmarks: a minimum-viable-deployment proof of value should be measured in weeks (2 to 6 weeks); a full deployment, in months (1 to 4 months). A steadily lengthening time to value is the first signal that something is wrong with the methodology or the platform foundation.

**Proof-of-concept conversion rate:** The proportion of pilot projects that convert into paid deployments. Palantir's bootcamps raised this number from an early 5% to 10% up to a company-disclosed figure of roughly 75% (with some sessions reportedly even higher)—this metric simultaneously measures two things: "client-screening quality" and "delivery quality." A conversion rate that is too low suggests failed intake screening; one that is too high (near 100%) should prompt a check for whether you're only taking on undemanding jobs.

**Evaluation pass rate:** The proportion of AI outputs that pass the business evaluation set, and its time-series trend in production. This is the alarm bell for quality drift.

**Deployment frequency and rollback rate:** A hard indicator of iteration speed. A healthy deployment period should maintain high-frequency, small-step releases (weekly or even daily), with a low and stable rollback rate.

**Defect escape rate:** The proportion of defects only discovered after launch. This measures the completeness of the testing and evaluation system, not the skill of the engineers.

## II. Client-Layer Metrics (How is the client actually doing?)

**Activation rate:** The proportion of the target user population that has formed a stable usage habit. Note that the denominator is "the target user population," not "the number of system accounts." An MIT report offers an industry warning line: only about 40% of enterprises provide employees with an official AI tool subscription—if your activation rate is persistently low, the deployment is alive in name only, but dead in practice.

**Depth of usage:** The share of key features actually being used (how many use cases), the distribution of usage frequency (check-the-box usage vs. embedded into workflow), and the emergence of self-directed exploration behavior (users beginning to discover new uses on their own—this is the most precious signal).

**Health score:** A composite of usage, value, relationship, and business signals (see Section 5.6 for details). A key discipline: conduct a full weekly review, and automatically trigger an intervention process when the score falls below the warning threshold.

**Champion coverage:** The number and level distribution of active allies within the client organization. A single point of contact is high-risk; three points form a network.

**Use Net Promoter Score sparingly:** Net Promoter Score (NPS, which asks "how likely are you to recommend us to others") has limited reference value in enterprise settings—small sample sizes, and politically charged responses. A more reliable substitute is an "early renewal-intent inquiry": two quarters before the contract is up, ask champions directly, "If you had to renew today, would you?"

## III. Business-Layer Metrics (Is the business worth it?)

**NRR (Net Revenue Retention):** The year-over-year change in revenue from existing customers (including churn, downgrades, and expansion). This is the ultimate referee of the FDE business model. A passing grade is 100%; excellent is 120%. Companies with net revenue retention above 120% have an organically self-sustaining growth engine.

**Delivery gross margin:** Revenue per client minus the direct costs of delivery (labor, travel, cloud resources). The passing bar for the FDE model floats with the degree of platformization: during a purely labor-intensive delivery phase it may be only 20% to 40%, but as platform reuse increases it should rise above 60%. How fast the margin is climbing matters more than its absolute level for judging whether the model is working—an FDE model whose margin isn't rising is just a consulting firm.

**Customization decay rate:** McGrew's litmus test—the amount of customization work for the Nth client should be significantly smaller than for the first. If three consecutive clients show no decline in customization volume, immediately examine the product feedback loop.

**Sales cycle:** The time from first contact to signed contract. Palantir used bootcamps to compress this from 9–12 months down to a matter of weeks. It is a composite reading of both customer-acquisition efficiency and the depth of accumulated trust.

**CAC payback period:** The time it takes to recoup customer acquisition cost (CAC, including investment in free pilots) through contract gross profit. This tends to look poor in the early stages of the FDE model; the key is to see the trend of it shortening as case studies accumulate.

**LTV/CAC:** The ratio of customer lifetime value (LTV) to customer acquisition cost. The healthy line for enterprise businesses is generally above 3; because the FDE model front-loads acquisition cost, it may be below 2 in the early stages, and must be read together with net revenue retention to be meaningful.

## IV. Organizational-Layer Metrics (Can the team go the distance?)

**Field-to-product feedback velocity:** The output, per unit of time, of field learnings converted into reusable components or platform capability (number of components added to the library, number of playbook updates, number of platformization proposals). This metric measures whether the "soul organ" of the FDE model is still beating.

**Delivery-asset reuse rate:** The proportion of new projects that reuse existing components, templates, and checklists. Reuse rate is a composite reading of the three-tier replication leverage (Chapter 7); the target should trend upward quarter over quarter.

**FDE per-capita productivity:** The annual revenue supported per front-line deployment engineer. This is the ultimate ledger of scalability: the ceiling of a purely labor-intensive model is obvious, and it should keep rising as platformization progresses.

**Team sustainability indicators:** Travel intensity (days on the road per month), on-call load, attrition rate, and burnout warning signs. The single biggest complaint among FDE practitioners on Reddit is travel and sustainability—if the team burns out, every metric above it is just fireworks.

## Recommendations for Use

1. Lock in 3 to 5 "core metric combinations" per client project: typically one value metric + one usage metric + one relationship metric.
2. Collect baseline data on day one of the project—miss it, and it's gone forever.
3. Metrics should be co-built and jointly agreed upon with the client, otherwise they carry no weight at the renewal negotiation table.
4. Overhaul the metric system itself every six months: delete anything no one looks at, and add anything that's repeatedly asked about.

---

*This is an unofficial English translation, not authored or reviewed by the original author. For the authoritative text, see the Chinese original in this repository.*
