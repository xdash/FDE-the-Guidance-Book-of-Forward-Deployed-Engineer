# Chapter 6 Expanding Revenue

> "The mark that the FDE model has succeeded is that the amount of customization needed shrinks with each subsequent customer."
> — Bob McGrew

## 6.1 The World of Free Validation

The internet economy turned "free" from a gimmick into a strategy. The FDE line of work cannot avoid this same hurdle, though it takes a different shape here: **the most expensive kind of "free" in the era of enterprise AI is the free proof of concept.**

Consider the scale of this free economy. Palantir's AIP bootcamps are essentially a proof-of-concept pipeline made free by design: customers bring real data, and in one to five days a deployable prototype is built, at zero or nominal cost. Starting from fewer than a hundred sessions in 2022, the volume has doubled year over year, reaching nearly six sessions a day at the 2025 peak — with several top engineers committing multiple days to each session, this amounts to tens of millions of dollars of free investment per year. A former Palantir engineer, Barry, recalled the earlier days even more bluntly: "We burned millions of dollars on customer pilots, and many projects had literally negative-infinity margins, because we did them for free."

Why does free validation make economic sense? Three separate calculations add up.

The first calculation concerns customer acquisition. Traditional enterprise software wins customers through a sales army: travel, dinners, RFPs, and drawn-out negotiations — expensive and hard to control. The bootcamp model plays a different game: instead of persuading the customer, you let the customer persuade themselves — an executive watching, with their own hands, a system run on their own data beats a hundred slides. Palantir's sales cycle compressed from nine to twelve months down to a few weeks, and U.S. commercial revenue grew 137% year over year in a single quarter, with the free bootcamps widely credited as the primary engine. **Free validation is not a cost — it converts sales expense into engineering expense, and engineering expense can accumulate into product, while sales expense cannot.**

The second calculation concerns the power to price risk. McGrew's advice is that early-stage startups should proactively take on risk: "Pay us once it works." The confidence behind this comes from belief in the product, but also from a cold calculation — an enterprise customer's biggest doubt about a new vendor is "can you actually do it," and free validation is the solvent for that doubt. Once doubt dissolves, pricing power flows back to you: the customer is no longer buying "a bet," but "a certainty that has already been personally verified" — and certainty commands a premium.

The third calculation: even failure should be made valuable. Free validation inevitably produces some failures — this is simply portfolio common sense. The difference lies in where the failure goes: a failed traditional sale leaves behind a pile of travel receipts; a failed FDE-style free validation leaves behind an understanding of an industry, a set of reusable components, and a body of evaluation data. As long as you've built the feedback mechanism described in Chapter 7, even a failed validation is making a deposit into the company's account.

But free validation carries one fatal precondition: it must be a "graduation system," not a "permanent residency system." That leads us to the next section.

## 6.2 The End of the Free Lunch

Free is the means; charging is the end; the transition design is a matter of life and death. In the FDE world, "converting validation to paid" is the single most critical final step — and it is also where the industry's failures cluster most heavily. The "proof-of-concept graveyard" mentioned repeatedly in earlier chapters is, in most cases, not a technical failure but **the absence of a designed mechanism for "ending."**

There are five switches that must be designed into the process before it begins, governing the transition from free to paid.

- **Switch One: Graduation criteria precede kickoff.** The principle emphasized in Chapter 2 lands concretely here: at the moment a validation project starts, write down in black and white — the cap on duration, the acceptance metrics, and the agreement that meeting those metrics moves the relationship into commercial negotiation. Palantir's bootcamps push this design to the extreme: on the day-4-to-5 agenda, the "decision" slot follows immediately after the "demo" slot. Conversion isn't an afterthought — it's a line item on the calendar.

- **Switch Two: Make the boundaries of "free" explicit.** The customer must know clearly: free through what date, covering what scope, and how anything beyond that is priced. A vague free-tier boundary breeds the expectation that "free is the norm," so that when the billing date arrives, the customer doesn't feel like they're "starting to pay" — they feel like they've "been taken." The same amount of money, framed differently, produces entirely different experiences.

- **Switch Three: Turn internal champions into your salespeople.** After a validation succeeds, the person who actually knocks on the budget door is not your salesperson — it's the internal champion at the customer who personally witnessed the value. Your job is to arm them: a one-page value report (numbers, comparisons, colleague testimonials), a Q&A kit for fielding finance's questions, and an opportunity-cost statement for "what if we don't continue." The internal trust an insider can leverage is something an outsider can never match.

- **Switch Four: Plant price anchors early.** Value conversations should begin during the free period — "this system freed up roughly 120 person-hours for you this month." When a value narrative runs through the entire free period, the quote, when it finally arrives, lands on an anchor already set in the customer's mind. If the free period discusses only features and never value, the quote arrives as an abrupt shock.

- **Switch Five: Design a dignified exit for "not converting."** Not every validation should convert, and a forced conversion is a poisoned contract. For customers who fall short of the bar or whose timing is off, offer a "paused but preserved" option: keep the data and configuration intact, agree on restart conditions, maintain a light touch of contact. The enterprise market is small, and today's "let's revisit next year" is often the origin of next year's or the year after's big deal — provided you make the goodbye a professional one.

Put together, the five switches boil down to one sentence: **turn "free to paid" from a single risky leap into a gentle slope.**

## 6.3 Outcome-Based Pricing: Charge the Customer for What They Actually Get

Digital advertising has a highly efficient playbook: track user behavior, target precisely. FDE's pricing principle is just as direct: **you charge the customer exactly as much as the value they receive.**

The dominant pricing model in the era of online software was per-seat — paying for the "right to use." That logic is being eroded in the age of AI: when one agent can do the work of ten people, per-seat billing becomes a joke — do you pay for 0.1 of a seat? Hence the rise of "outcome-based pricing," and Sierra's billing per "resolved conversation" is the most conspicuous example: the customer isn't paying for software, but for "problems that were resolved."

The evolutionary chain of outcome-based pricing has four tiers, each one closer to value — and each one harder to execute.

By usage: billed by the model's units of measurement, call volume, or throughput. The advantage is clarity and measurability; the drawback is that it tracks cost, not value — high usage might mean high value, or it might just mean an inefficient system. Per-token/per-call model API pricing is the industry-standard baseline, but application-layer companies rarely rely on it as their sole pricing basis.

By action: billed per "return processed" or "compliance report generated." A step further than usage — the billing unit begins to carry business meaning.

By outcome: billed per "successfully resolved conversation" or "bad debt recovered." Sierra's per-resolution billing and some risk-management firms' recovery-based revenue share fall into this tier. The execution challenge lies in attribution — determining what counts as "resolved" requires a standard both parties accept as valid (which is precisely the commercial application of the evaluation system described in Chapter 4: a technical evaluation system doubles as billing infrastructure).

By value share: taking a cut of the financial value created for the customer — costs saved, revenue recovered, capacity freed up. This is the closest form to true value, and also the hardest: it requires the customer to open up their financial data, requires trust that survives economic cycles, and requires very strong value-measurement capability. Today it appears only in a handful of deeply integrated, high-ticket scenarios.

Companies that charge by outcome must be willing to make outcomes public. The customer figures Sierra has published form an interesting scorecard: property management company Funnel Leasing, 94% self-resolution rate; fintech company Ramp, 90%; mattress brand Casper, 74%, with customer satisfaction up by more than 20 points; WeightWatchers, roughly 70% resolution with a satisfaction score of 4.6 (out of 5); even the lowest-performing customer still hit 64%.

Third-party estimates of pricing have surfaced alongside these figures: annual contract minimums starting around $150,000, first-year budgets including deployment fees commonly in the $200,000–$350,000 range, with large customers reaching seven figures annually; reportedly, the price per successful resolution ranges from $1 to $2. In other words, **every dollar the customer pays corresponds to one instance of "a problem that was actually solved"** — Sierra can dare to charge this way because its evaluation system can prove to the customer that the problem was, in fact, "solved." Pricing model and evaluation system are here two sides of the same coin. (see Appendix C for sources)

There's a simple rule of thumb for choosing a pricing tier: **the closer your billing unit sits to customer value, the higher your pricing ceiling — but the higher your cost of measurement and trust as well.**

For readers in the China market, a note of realism is warranted: domestic enterprise customers still have limited acceptance of the "subscription" model, and "buy-out plus implementation" or "pay-on-project-acceptance" remains the mainstream. Landing FDE pricing in China often requires a East-meets-West hybrid: milestone-based delivery and acceptance (respecting project-based habits) plus value metrics written into acceptance criteria (injecting the DNA of outcome-based pricing). Pure subscription is the ideal here; hybrid pricing is the way that actually works.

## 6.4 Deepening the Installed Base: From One Department to a Wide Net

There is an iron law in enterprise markets: **the largest revenue growth doesn't come from new customers — it comes from inside your existing ones.** The industry measures this with net revenue retention; excellent FDE-driven companies routinely sit at net revenue retention above 120% year after year — meaning existing revenue grows by 20% even without signing a single new deal. Palantir's business story is, at its core, a story of deepening within existing accounts: from one intelligence unit to an entire agency, from one factory to an entire conglomerate, from a government department to a commercial empire.

The industry has a vivid phrase for this playbook: "land and expand." Landing is what the first five chapters cover; expansion has three directions.

- **Horizontal | From one team to adjacent teams:** if you've built an intelligent ticketing system for the customer service department, the neighboring after-sales department or technical support department is your easiest next win. In horizontal expansion, the most persuasive evidence lives inside the customer's own organization: same company, same data environment, a colleague from the department next door vouching for it in person — this is expansion with the least sales resistance, requiring almost no rebuilding of trust. Harvey's expansion within law firms followed exactly this rhythm: entering through a single practice group, validating in live use over six months, then expanding horizontally across the entire firm.

- **Vertical | From the operating layer to the decision-making layer:** the initial project usually serves front-line practitioners; vertical expansion carries value up the chain — building analytics and early warnings for mid-level managers, building a decision-making cockpit for executives. Vertical expansion matters for more than just revenue — it matters for security as well. As Chapter 5 noted, a system loved only by frontline staff has no defender at budget season; a system that has entered executive view has entered the organization's "fixed asset" register.

- **Deep | From a supporting tool to the core process:** the deepest form of expansion turns a system from "a helpful tool" into "a process you can't do without" — from "giving advice" to "executing business actions," from "optional" to "part of the standard operating procedure." Every step of deep expansion comes with greater responsibility and a higher trust threshold, but it also builds the deepest moat: replacing a tool only means changing software, but replacing a system embedded in a process is like performing surgery.

Two "land and expand" scorecards are worth reading side by side. Harvey started at a single law firm, Allen & Overy, and by 2026 has grown to serve over 100,000 lawyers across 1,300 organizations, covering the majority of America's top 100 law firms, more than 500 corporate legal teams, and 50 asset management firms, spanning 60 countries; annual recurring revenue rose from roughly $100 million in August 2025 to roughly $190 million by January 2026 — nearly doubling in five months. Industry surveys show 68% of surveyed law firms are already using Harvey's agents in production, with deep users saving an average of 11 hours per week. Its valuation leapt four times in a single year as a result: $3 billion, $5 billion, $8 billion, $11 billion. (see Appendix C for sources) As for Palantir's 139% net revenue retention scorecard, that was already covered in Section 5.1 — the two scorecards together illustrate the ultimate form of deepening the installed base: **new logos come from marketing; growth comes from the installed base.**

All three directions share the same discipline: **expansion must be pulled by value, never pushed by sales targets.** The health-metrics system from Chapter 5 has an offensive use here too: a department with high usage depth and clear demonstrated value is your next expansion target; and the moment when someone inside the customer's organization says "I saw others using it well, and I want in" is your golden window for expansion — at that moment you're not selling, you're responding to demand.

## 6.5 How Anthropic and FIS Played the Financial Services Card

This chapter embeds one complete case study: the collaboration with the highest specimen value in the 2026 enterprise AI market — Anthropic and fintech giant FIS jointly building a financial crime agent. It's a near-perfect demonstration of everything this chapter has covered.

First, the hand being played. FIS is a giant in global financial technology infrastructure, serving the core systems of banks around the world. In May 2026, FIS launched a financial crime detection agent, with its first customers being Bank of Montreal and Amalgamated Bank. What the agent does: compresses anti-money-laundering investigation from hours to minutes — automatically assembling evidence across a bank's core systems, ranking it by risk, and presenting it to investigators, with full auditability and traceability throughout.

Now the playbook, four moves that interlock.

Move one: embedding, not delivering. Anthropic sent its applied AI team and forward-deployed engineers directly into FIS, co-designing alongside FIS's own experts. Note carefully: FIS is not the end customer — it's a channel-level partner. Anthropic's agent will ride along with FIS's own product into hundreds of banks downstream. This is one deal, and also the gateway to a hundred deals.

Move two: knowledge transfer as a selling point. The official statement explicitly notes that the embedding effort aims to "transfer knowledge so that FIS can independently build and extend more agents in the future." Writing "teach the customer" into the contract is both a pre-emptive response to concerns about "vendor lock-in" (echoing the "vendor withdrawal reaction" from Section 5.1) and a sophisticated form of binding: once a customer's technology stack grows rooted in your methodology, the cost of separation only ever climbs.

Move three: auditability as a product feature. In financial compliance scenarios, regulators require that every decision be replayable. Anthropic made "fully auditable, fully traceable" a core selling point of the agent, not a bolt-on feature — compliance isn't a constraint, it's a differentiator. This gives every regulated industry a template: **what looks like a compliance cost to others can be your reason to charge a premium.**

Move four: ecosystem amplification. On the same day the FIS case was announced, Anthropic also announced connectors and "ready-to-use" templates for financial services, along with over a dozen similar partnerships — a single case immediately abstracted into a replicable product asset. Around the same period, the market also carried word of Anthropic forming an enterprise AI services company with Blackstone, reportedly around $1.5 billion in scale, positioned in direct competition with OpenAI's deployment company. (sources above, see Appendix C)

Finally, the hidden thread in this hand — the wariness of CIOs. A tech publication aimed at enterprise IT leaders quoted a strategy officer at a consulting firm in its coverage: "The most structurally problematic question in this model is who's actually paying for the cost of the front-line deployment — that's the question CIOs should be asking, but mostly aren't." Gartner analysts, meanwhile, have predicted that by 2028, 70% of enterprises will be forced to abandon such solutions due to vendor costs and skill hollowing-out. This is a reminder: buried inside the FDE model's revenue design is a long-term balance — **the value you create must continue to outweigh the cost and dependency your presence introduces. Earning the spread on value is a durable business; earning rent on dependency eventually backfires.**

## 6.6 Turning Punishment into Reward: The Pricing Psychology of Usage and Expansion

Good mechanism design can turn a punishment into a reward. In FDE's business model, this wisdom applies to one subtle scenario: **what do you do when a customer's usage exceeds expectations?**

The crude approach is "punitive overage": once contracted usage is exhausted, anything beyond it is billed at a punishingly high rate, or the system simply throttles performance. This was common in the early days of cloud computing, and the result was disastrous — customers suppressed their own usage to avoid overage, usage rates fell, value shrank, and renewal became a lose-lose. **What you punish is exactly the thing you most wanted: deep usage.**

The "turn punishment into reward" design philosophy redefines "overage" as a "badge of growth." Three specific techniques.

Technique one: tiered pricing, the more you use, the cheaper it gets. The greater the usage volume, the lower the unit price — turning "overage anxiety" into "momentum to use more." This is the same logic as telecom's tiered data pricing, but it must be worded clearly in the contract: what the customer sees is not "you used more, so you owe more" but "you used more, so the unit price is now lower — you're getting a better deal." The same invoice, told differently, leads the relationship in a different direction.

Technique two: overage alerts plus proactive upsell. When the system detects a customer is about to exceed usage, don't bill them quietly — reach out proactively: "Your usage is growing fast; at this trend, upgrading a tier would save you 15%." This turns a billing event into a consultative sales opportunity — what the customer feels is being looked after, not being calculated against. This move carries an implicit benefit too: it forces your team to continuously monitor the health of customer usage, naturally merging with the health-metrics system from Chapter 5.

Technique three: hand the "savings" credit back to the customer. Usage optimization (model tiering, caching, batch processing) lowers costs, and you should proactively lay out that math for the customer: "This quarter, through architectural optimization, we saved you roughly X thousand dollars." In the eyes of a customer's finance lead, a vendor that proactively saves them money and a vendor that waits to profit from their overage are two different species — the former earns a trust premium at renewal time that far exceeds the money it saved.

At bottom, the psychology of pricing rests on a simple truth: **your billing structure tells the customer, every single day, what kind of relationship you have.** A punitive structure says "we're watching you"; a reward-based structure says "we're growing alongside you." Pricing answers a question the customer is quietly asking every day: whose side are you actually on? And that's an answer the customer re-reads every time renewal comes around.

## 6.7 Building a Value-Measurement System to Punch Above Your Weight

This chapter closes with a piece of infrastructure engineering: **building a value-measurement system that runs through every customer engagement** — turning "how much value we created for the customer" from an impression into data, and from data into an asset.

Everything mentioned repeatedly in the earlier chapters converges here: Chapter 2's "economic viability test" is its input (the value hypothesis at project kickoff), Chapter 4's evaluation system is its micro-foundation (quality data), Chapter 5's health metrics are its operational interface (customer relationship data), and this chapter's pricing and expansion are its commercial output (revenue data). Put together, this system does four things for you.

- **For the customer | An evidence library for renewals and upsells:** every quarterly review, every renewal negotiation, every upsell pitch relies on the value reports this system generates: hours saved, error rates reduced, throughput improved, all translated into corresponding financial figures. As Chapter 5 noted, value must be continuously re-proven — this system is the assembly line for that proof. **A renewal negotiation armed with data closes at a completely different rate than one built on gut feeling.**

- **For the company | A diagnostic instrument for delivery quality:** by aggregating value data across customers, you can answer questions that determine whether your model lives or dies — which scenarios have the highest value density (where should sales firepower be directed)? Which customer segments have the highest delivery cost (should pricing or approach be adjusted)? Which deployments are creating value, and which are spinning their wheels (should resources be reallocated)? Without this system, every answer to these questions is a guess.

- **For the product | An amplifier for feedback intelligence:** combining value data with usage data is the hardest evidence for product decisions — which feature produces the highest value output (invest more), which feature goes unused (cut it decisively), which scenario keeps getting customized (a signal it's ready to become a platform capability). This connects to the theme of Chapter 7 — the value-measurement system is, at its core, the instrument panel for the "field-to-product" feedback pipeline.

- **For the market | A materials library for trust-based marketing:** "chemical usage reduced 70%," "investigation time cut from hours to minutes" — the numbers the whole industry remembers all come from a value-measurement system's accumulated records. The highest form of case-study marketing isn't telling a story — it's showing the data; and data doesn't materialize at the negotiating table out of thin air. It has to start being collected on day one of delivery.

Building this system, three practical pieces of advice. First, capture the baseline from day one — without pre-transformation data, there's no way to prove post-transformation value, and the baseline only exists at the moment the project kicks off; miss it, and it's gone forever. Second, metrics must be co-built with the customer — a metric they don't accept has no negotiating force no matter how impressive the calculated number is; the moment agreement is reached in the kickoff meeting, that metric becomes your shared language. Third, restrain the number of metrics — three to five core metrics per customer is plenty; too many metrics is functionally the same as having no metrics.

The revenue chapter ends here. From the customer-acquisition economics of free validation, to the pricing revolution of outcome-based billing, to the rhythm of expansion through deepening the installed base, to the infrastructure of value measurement — every thread points to the same conclusion: **FDE revenue is not the spoils of selling — it is the shadow cast by value. The greater the value you create, the longer the shadow.**

The next chapter covers the book's "last mile": how to make all of this independent of individual heroics, and instead crystallize it into a replicable organizational capability — scaling through replication.

---

*This is an unofficial English translation, not authored or reviewed by the original author. For the authoritative text, see the Chinese original in this repository.*
