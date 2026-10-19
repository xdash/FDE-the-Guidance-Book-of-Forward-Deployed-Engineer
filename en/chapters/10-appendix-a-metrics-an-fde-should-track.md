# Appendix A — Metrics an FDE Should Track

This appendix gives a metrics system for the full chain of an FDE's work, organized into four layers: the delivery layer, the customer layer, the commercial layer, and the organizational layer. Metrics are valued for quality, not quantity — watching 3 to 5 core metrics per customer project beats a dashboard covering a whole wall.

## I. Delivery-Layer Metrics (Is the project being done right)

**TTV (Time to Value):** the time from arrival to the customer obtaining the first measurable value. The lifeline metric of the FDE model. Reference standards: minimum-viable-deployment validation should be counted in weeks (2 to 6 weeks), and a full deployment in months (1 to 4 months). A continually lengthening time to value is the first signal that the methodology or platform base has a problem.

**Proof-of-concept conversion rate:** the proportion of validation projects that enter a paid deployment. Palantir's bootcamp raised this number from an early 5% to 10% to a company-disclosed figure of about 75% (some figures cite even higher for certain sessions) — it measures two things at once: "customer-screening quality" and "delivery quality." Too low a conversion rate means screening at arrival failed; too high (near 100%) means you should check whether you're only taking deals with no challenge.

**Evaluation-pass rate:** the proportion of AI outputs that pass the business evaluation set, and its time-series trend in production. The alarm for quality drift.

**Deployment frequency and rollback rate:** the hard metrics of iteration speed. A healthy deployment period should keep high-frequency small steps (weekly, even daily), with a low and stable rollback rate.

**Defect-escape rate:** the proportion of defects discovered only after go-live. It measures the completeness of the testing and evaluation system, not the engineers' skill.

## II. Customer-Layer Metrics (How well is the customer doing)

**Activation rate:** the proportion of the target user group that has formed a stable usage habit. Note the denominator is "the target user group," not "the number of system accounts." The industry warning line from the MIT report: only about forty percent of enterprises provide employees an official AI-tool subscription — if your activation rate is chronically sluggish, the deployment is nominally alive but actually dead.

**Usage depth:** what fraction of people use key features (how many scenarios are used), the distribution of usage frequency (clock-in use or workflow-embedded), and the appearance of self-serve exploration behavior (users starting to discover new uses themselves — the most precious signal).

**Health score:** synthesized from four kinds of signals — usage, value, relationship, commercial (see Section 5.6). The key discipline: full review every week, and automatically trigger the intervention process when it falls below the warning line.

**Champion coverage:** the number and seniority distribution of active allies inside the customer's organization. A single point is high-risk; three points make a network.

**Use NPS with caution:** NPS (Net Promoter Score, the metric asking "how likely are you to recommend us to others") has limited reference value in an enterprise setting — small samples, politicized. A more reliable substitute is "an early inquiry into renewal intent": two quarters before expiry, directly ask the champion "if you renewed today, would you renew?"

## III. Commercial-Layer Metrics (Is the business worth it)

**NRR (Net Revenue Retention):** the annual change in revenue from existing customers (including churn, downgrades, expansions). The head judge of the FDE business model. Passing line 100%, excellent line 120%. A company with net revenue retention above 120% already has a homegrown growth engine.

**Delivery gross margin:** a single customer's revenue minus the direct cost of delivery (labor, travel, cloud resources). The FDE model's passing line floats with the degree of platformization: a pure-labor delivery period may be only 20% to 40%, and once platform reuse rises, it should climb toward above 60%. Whether the gross margin rises fast says more about whether the model works than the absolute level — an FDE that doesn't rise is a consultancy.

**Customization-decline rate:** McGrew's touchstone — the customization workload for the Nth customer should be significantly less than for the 1st. Three customers in a row with no decline in customization, immediately review the product-feedback mechanism.

**Sales cycle:** the time from first contact to signing. Palantir used the bootcamp to compress it from 9-to-12 months to weeks. It's a combined reading of acquisition efficiency and the thickness of trust assets.

**CAC payback period:** the time to recover the customer-acquisition cost (CAC, including the investment in free validation) through contract gross margin. The FDE model is generally ugly early on; the key is to see it shorten as cases accumulate.

**LTV/CAC:** the ratio of customer lifetime value (LTV) to customer-acquisition cost. The healthy line for enterprise business is generally above 3; because the FDE model front-loads acquisition cost, it may be below 2 early on, and is only meaningful when read together with net revenue retention.

## IV. Organizational-Layer Metrics (Can the team go the distance)

**Field-to-product feedback rate:** the output per unit time settled from the field into components or platform capabilities (components added to the library, playbook updates, platformization proposals). What this metric measures is whether the FDE model's "soul organ" is still beating.

**Delivery-asset reuse rate:** the proportion of new projects that reuse existing components, templates, and checklists. Reuse rate is a combined reading of the three-tier replication lever (Chapter 7), and the target should rise quarter over quarter.

**FDE revenue per head:** the annual revenue supported by each Forward Deployed Engineer. It's the master ledger of scaling: the pure-labor model has an obvious ceiling, and after platformization it should keep rising.

**Team-endurance metrics:** travel intensity (travel days per month), on-call load, attrition rate, and burnout warning signals. The biggest gripe of FDE practitioners on Reddit is travel and endurance — burn the team dry, and every metric above is fireworks.

## Usage Suggestions

1. Lock 3 to 5 "core metric combinations" per customer project: usually one value metric + one usage metric + one relationship metric.
2. Collect baseline data on the first day of project launch — miss it and it's gone forever.
3. Co-build and jointly recognize metrics with the customer, or they have no force at the renewal negotiating table.
4. Overhaul the metrics system itself every six months: delete the ones no one looks at, add the ones repeatedly asked about.
