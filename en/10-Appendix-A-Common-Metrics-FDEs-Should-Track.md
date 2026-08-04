# Appendix A: Common Metrics FDEs Should Track

This appendix provides a metrics system for the entire lifecycle of Forward Deployed Engineer (FDE) work, organized into four levels: delivery, customer, business, and organization. When it comes to metrics, quality trumps quantity—focusing on 3 to 5 core metrics for each customer project is far more effective than an entire wall of dashboards.

## I. Delivery Level Metrics (Are we doing the project right?)

**TTV (Time to Value):** The time from entry to the customer obtaining their first measurable value. The lifeline metric of the FDE model. Reference standard: Minimum Viable Deployment verification should be measured in weeks (2 to 6 weeks), and full deployment in months (1 to 4 months). Continuously lengthening Time to Value is the first signal that there is a problem with the methodology or platform foundation.

**PoC (Proof of Concept) Conversion Rate:** The percentage of verification projects that convert into paid deployments. Palantir's bootcamps increased this number from an early 5% to 10% up to approximately 75% as disclosed by the company (other sources indicate even higher figures for some sessions)—it measures both "customer screening quality" and "delivery quality" simultaneously. If the conversion rate is too low, it indicates a failure in initial screening; if it's too high (approaching 100%), you need to check if you are only taking on unchallenging projects.

**Evaluation Pass Rate:** The percentage of AI outputs that pass the business evaluation set, as well as its time-series trend in the production environment. An alarm for quality drift.

**Deployment Frequency and Rollback Rate:** Hard metrics for iteration speed. A healthy deployment phase should maintain high-frequency, small steps (weekly or even daily), with a low and stable rollback rate.

**Defect Escape Rate:** The proportion of defects discovered only after going live. This measures the completeness of the testing and evaluation system, not the skill level of the engineers.

## II. Customer Level Metrics (How is the customer doing?)

**Activation Rate:** The proportion of the target user group that has formed stable usage habits. Note that the denominator is the "target user group," not the "number of system accounts." The industry warning line given in an MIT report: only about 40% of enterprises provide official AI tool subscriptions for their employees—if your activation rate remains depressed for a long time, the deployment is nominally alive but practically dead.

**Usage Depth:** The percentage of people using key features (how many scenarios are used), the distribution of usage frequency (check-in style usage vs. embedded in workflows), and the emergence of self-service exploration behaviors (users starting to discover new ways to use it themselves—this is the most precious signal).

**Health Score:** A synthesis of four categories of signals: usage, value, relationship, and business (see Section 5.6 for details). Key discipline: conduct a full review weekly, and automatically trigger an intervention process if it drops below the warning line.

**Champion Coverage:** The number and hierarchical distribution of active allies within the customer's organization. A single point of contact is high risk; three points form a network.

**Cautious Use of NPS (Net Promoter Score):** NPS (the metric asking "how likely are you to recommend us to others") has limited reference value in enterprise scenarios—the sample is small and politicized. A more reliable alternative is "early inquiry of renewal intention": two quarters before expiration, directly ask your champions, "If it were time to renew today, would you renew?"

## III. Business Level Metrics (Is the business worth it?)

**NRR (Net Revenue Retention):** The annual change in revenue from existing customers (including churn, downgrades, and expansions). The ultimate judge of the FDE business model. The passing line is 100%, and the excellent line is 120%. Companies with an NRR above 120% have an endogenous growth engine.

**Delivery Gross Margin:** Revenue per customer minus direct delivery costs (labor, travel, cloud resources). The passing line for the FDE model fluctuates with the degree of platformization: the pure manual delivery phase might only be 20% to 40%, but it should rise above 60% as platform reusability increases. Whether the gross margin rises quickly says more about the success of the model than its absolute value—an FDE team whose margin doesn't rise is just a consulting firm.

**Customization Decrease Rate:** McGrew's touchstone—the customization workload for the Nth customer should be significantly smaller than for the 1st. If the customization workload does not drop for three consecutive customers, immediately review the product feedback loop mechanism.

**Sales Cycle:** The time from initial contact to signing the contract. Palantir used bootcamps to compress it from 9 to 12 months down to a few weeks. It is a comprehensive reading of customer acquisition efficiency and the depth of trust assets.

**CAC Payback Period:** The time it takes to recover the Customer Acquisition Cost (CAC, including the investment in free verifications) through contract gross margin. This is generally ugly in the early stages of the FDE model; the key is to look for a shortening trend as cases accumulate.

**LTV/CAC:** The ratio of Customer Lifetime Value (LTV) to Customer Acquisition Cost (CAC). The healthy line for enterprise businesses is generally above 3; because the FDE model front-loads acquisition costs, it might be below 2 in the early stages and must be read in conjunction with NRR to be meaningful.

## IV. Organizational Level Metrics (Can the team go the distance?)

**Field-to-Product Feedback Rate:** The number of outputs (components added to the repository, manual updates, platformization proposals) distilled from the field into components or platform capabilities per unit of time. What this metric measures is whether the "soul organ" of the FDE model is still beating.

**Delivery Asset Reuse Rate:** The proportion of existing components, templates, and checklists reused in new projects. The reuse rate is the comprehensive reading of the Level 3 replication leverage (Chapter 7), and the target should rise quarter by quarter.

**FDE Revenue per Capita:** The annual revenue supported by each Forward Deployed Engineer. It is the general ledger of scaling: the ceiling of the pure manual model is obvious, and it should continuously rise after platformization.

**Team Endurance Metrics:** Travel intensity (days of travel per month), on-call workload, turnover rate, and burnout warning signals. The biggest complaint among FDE practitioners on Reddit is travel and endurance—if the team burns out, all the previous metrics are just fireworks.

## Usage Recommendations

1. Lock in a "core metric combination" of 3 to 5 metrics for each customer project: usually one value metric + one usage metric + one relationship metric.
2. Collect baseline data on the first day the project starts—if you miss it, it's gone forever.
3. Co-create and mutually agree upon metrics with the customer; otherwise, they carry no weight at the renewal negotiation table.
4. Overhaul the metrics system itself every six months: delete what no one looks at, and add what gets asked about repeatedly.
