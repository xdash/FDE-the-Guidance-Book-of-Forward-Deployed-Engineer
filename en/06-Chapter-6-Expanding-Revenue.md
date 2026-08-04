# Chapter 6 Expanding Revenue

> "The hallmark of a viable FDE model is that the amount of customization decreases for each subsequent customer."
> — Bob McGrew

## 6.1 The World of Free Proof of Concept

The Internet economy has turned "free" from a gimmick into a strategy. The FDE industry cannot bypass the hurdle of "free" either, but the hurdle looks different: **the most expensive "free" in the era of enterprise AI is the free proof of concept (PoC)**.

Let's first look at the scale of this free economy. Palantir's AIP Bootcamps essentially turned free PoCs into an assembly line: customers bring their real data, and a deployable prototype is built in one to five days, with zero or token charges. Starting from less than a hundred sessions in 2022, the number doubled year after year, reaching nearly 6 sessions per day at its peak in 2025. Considering that each session requires several top engineers working for days, this amounts to tens of millions of dollars of free investment annually. Former Palantir engineer Barry recalled the earlier days more bluntly: "We burned millions of dollars doing customer pilots, and the profit margin for many projects was literally negative infinity, because we did them for free."

Why does free verification make sense? There are three accounts that add up.

The first account calculates customer acquisition. Traditional enterprise software relies on armies of salespeople to acquire customers: travel, drinking parties, bidding documents, and lengthy negotiations, which cost a lot and are uncontrollable. The bootcamp changes the playbook: instead of persuading customers, it lets customers persuade themselves. An executive manually clicking on a system running their own data beats a hundred pages of slides. Palantir compressed its sales cycle from nine to twelve months down to a few weeks, and its US commercial revenue grew 137% year-over-year in a single quarter, with the free bootcamps widely recognized as the main engine. **Free verification is not a cost; it transforms sales expenses into engineering expenses—and engineering expenses can accumulate into products, whereas sales expenses cannot.**

The second account: the power of risk pricing. McGrew's advice is that early-stage startups should actively take on the risk: "Pay us only if it works." This confidence comes from product strength, as well as a sober calculation—the biggest doubt enterprise customers have about new vendors is "Are you capable?" Free PoC is the solvent for this doubt. When doubt is dissolved, the subsequent pricing power actually returns to your hands: what the customer buys is no longer "a gamble," but "a certainty that has been witnessed firsthand," and certainty commands a premium.

The third account: making failures valuable. Free PoCs inevitably have failures—this is common sense in portfolio investment. The difference lies in where the failure goes: traditional sales failures leave behind a pile of travel invoices; FDE-style free PoC failures leave behind an understanding of an industry, a batch of reusable components, and a set of evaluation data. As long as you have established the feedback mechanism discussed in Chapter 7, failed validations are also accumulating assets for the company.

However, free validation has a fatal prerequisite: it must be a "graduation system," not an "indefinite residency system." This leads to the next section.

## 6.2 The End of the Free Lunch

Free is the means, charging is the goal, and conversion design is life and death. In the FDE world, "converting PoC to paid" is the most critical final step and the stage with the highest rate of industry accidents. The "Proof of Concept graveyard" repeatedly mentioned in previous chapters is mostly not due to technical failures, but **the lack of a designed "exit" mechanism**.

There are five switches that must be designed upfront for the conversion from free to paid.

- **Switch 1:** Graduation criteria before starting work. The principle emphasized in Chapter 2 lands in this chapter: when a PoC project starts, it should clearly state in black and white—the maximum duration, acceptance metrics, and the agreement to enter commercial negotiations upon hitting the targets. Palantir's bootcamps pushed this design to the extreme: on the schedule for days 4 and 5, "demo" is immediately followed by "decision." Conversion is not an afterthought; it is a slot on the schedule.

- **Switch 2:** Make the boundaries of free explicit. Customers must know clearly: until what day is it free, what scope is covered, and how excesses will be priced. Vague free boundaries cultivate an expectation that "free is the norm." When charging day arrives, the other party won't feel like they are "starting to pay," but rather "getting ripped off"—for the exact same amount of money, different expectations lead to vastly different experiences.

- **Switch 3:** Turn internal champions into salespeople. After a successful PoC, the one who actually knocks on the budget door is not your salesperson, but the internal champion within the customer's organization who witnessed the value firsthand. Your job is to arm them: a one-page value report (numbers, comparisons, colleague testimonials), a Q&A sheet for handling financial inquiries, and a statement of the opportunity cost of "not continuing." The internal trust of insider selling is something outsiders can never reach.

- **Switch 4:** Plant price anchors early. Start talking about value during the free period—"This system freed up about 120 man-hours for you this month." When the value narrative runs through the free period, the customer already has an anchor in mind when the quote appears; if only features and not value are discussed during the free period, the quote will be an abrupt scare.

- **Switch 5:** Design a graceful exit for "non-conversions." Not all PoCs should convert; forced conversions are toxic contracts. For customers who don't meet targets or have bad timing, provide a "pause but retain" option: retain data and configurations, agree on restart conditions, and maintain light contact. The enterprise market is small; today's "let's talk next year" is often the year after's major deal—provided you handle the farewell professionally.

The five switches combined essentially amount to one sentence: **Design the transition from "free to paid" as a gentle slope rather than a perilous leap.**

## 6.3 Outcomes-Based Pricing: Customers Pay for What They Get

There is a highly efficient tactic in advertising: track user behavior for precise targeting. The pricing principle of FDE is just as straightforward: **charge customers based on how much value they receive.**

The mainstream pricing in the SaaS era was per-seat—paying for the "right to use." This logic is eroding in the AI era: when an agent can do the work of 10 people, charging per seat becomes a joke—do they pay for 0.1 of a seat? Thus, "outcomes-based pricing" is rising. Sierra charging per "resolved conversation" is the most striking example: customers don't pay for the software; they pay for "problems solved."

The evolutionary chain of outcomes-based pricing has four tiers; the higher it goes, the closer it is to value, and the harder it is to execute.

1. Usage-based: charging by model metrics, API calls, or processing volume. The advantage is clear measurability; the disadvantage is that it tracks cost rather than value—high usage could mean high value, or it could mean an inefficient system. While model API pay-as-you-go is the industry standard baseline, application-layer companies rarely use it as their sole pricing metric.

2. Action-based: charging per "completed return processing" or "generated compliance report." This is a step forward from usage, as the pricing unit begins to have business meaning.

3. Result-based: charging per "successfully resolved conversation" or "recovered bad debt." Sierra's pay-per-resolution and some risk control companies' profit-sharing on recovered losses fall into this tier. The execution difficulty lies in attribution—the determination of "resolved" requires mutually agreed-upon judgment criteria (this is exactly the commercial use of the evaluation system from Chapter 4: a technical evaluation system that doubles as billing infrastructure).

4. Value-sharing: taking a cut of the financial value created for the customer—costs saved, revenue recovered, capacity released. This is the ultimate form closest to value, and also the hardest: it requires customers to open up their financial data, anti-cyclical trust, and extremely strong value measurement capabilities. Currently, it only appears in some deeply integrated, high-ticket-size scenarios.

Companies that charge for results must dare to make the results public. The customer data Sierra published forms an interesting report card: property management company Funnel Leasing achieved a 94% self-service resolution rate; fintech company Ramp, 90%; mattress brand Casper, 74% with customer satisfaction rising over 20%; WeightWatchers, about 70% with a satisfaction score of 4.6 (out of 5); even their lowest-performing customer hit 64%.

Third-party estimated pricing points also surfaced along with this: the annual contract threshold starts around $150,000, and typical first-year budgets including deployment fees are $200,000 to $350,000, scaling up to the million-dollar level annually for large clients. Reports suggest the price per successful resolution is between $1 and $2. In other words, **every cent the customer spends corresponds to a "problem genuinely solved"**—Sierra dares to charge this way because its evaluation system can prove to the customer that it was "solved." Here, pricing models and evaluation systems are two sides of the same coin. (Source in Appendix C)

When choosing a pricing tier, there is a simple guiding principle: **the closer the pricing unit is to customer value, the higher your pricing ceiling, but the higher your measurement and trust costs.**

For readers in the Chinese market, a realistic footnote must be added: domestic enterprise customers still have limited acceptance of "subscriptions." "Buyout plus implementation" and "payment upon project acceptance" remain mainstream. Implementing FDE pricing in China often requires a hybrid approach: milestone delivery and acceptance (adapting to project-based habits) + embedding value metrics into acceptance criteria (injecting the DNA of outcomes-based pricing). Pure subscription is an ideal here; a hybrid model is the way to survive.

## 6.4 Deepening the Existing Base: From One Department to a Wide Network

The enterprise market has an iron law: **the biggest revenue growth lies not in new customers, but within existing ones.** The industry uses Net Revenue Retention (NRR) to measure this; excellent FDE-driven companies consistently maintain an NRR above 120%—meaning existing revenue organically grows by 20% without signing any new deals. Palantir's business story is essentially a story of deepening existing accounts: from a single intelligence unit to an entire agency, from one factory to a whole conglomerate, from government departments to commercial empires.

The industry has a vivid term for this deepening strategy: "Land and Expand." Landing relies on the previous five chapters; expanding goes in three directions:

- **Horizontal | From one team to adjacent teams:** If you successfully built an intelligent ticketing system for the customer service department, the neighboring after-sales or tech support departments are the easiest next targets. For horizontal expansion, the most persuasive evidence is inside the client's own organization: the same company, the same data environment, and colleagues next door testifying. This is the path of least sales resistance, requiring almost no rebuilding of trust. Harvey's expansion in law firms followed this exact rhythm: entering through a single practice group, validating in production for six months, and expanding horizontally firm-wide.

- **Vertical | From the execution layer to the decision-making layer:** Initial projects typically serve frontline operators. Vertical expansion transmits value upward along the chain: providing analysis and alerts for middle managers, and executive dashboards for C-levels. The significance of vertical expansion is not just revenue, but safety—as Chapter 5 mentioned, a system loved only by the grassroots has no defenders during budget season; only systems that enter the executives' purview become part of the organization's "fixed assets."

- **In-depth | From auxiliary tools to core workflows:** The deepest expansion is turning the system from a "helpful tool" into an "indispensable workflow"—shifting from "giving advice" to "executing business actions," from "optional" to "part of Standard Operating Procedures (SOP)." Every step of in-depth expansion brings greater responsibility and a higher trust threshold, but it also builds the deepest moat. Replacing a tool just requires changing software; replacing a system embedded in workflows is equivalent to performing surgery.

Two "Land and Expand" report cards are worth comparing. Harvey started with one law firm, Allen & Overy, and by 2026 had grown to over 100,000 lawyers and 1,300 organizations, covering the majority of the top 100 US law firms, over 500 corporate legal teams, and 50 asset management companies across 60 countries. Its Annual Recurring Revenue (ARR) grew from roughly $100 million in August 2025 to about $190 million in January 2026—nearly doubling in five months. Industry surveys show 68% of respondent law firms are using Harvey's agents in production, with heavy users saving an average of 11 hours per week. Its valuation quadrupled in a year: $3 billion, $5 billion, $8 billion, and $11 billion. (Source in Appendix C) And Palantir's 139% NRR report card was already discussed in Section 5.1. The two tables together illustrate the ultimate form of deep account expansion: **New signings rely on marketing, while growth relies on the existing base.**

The three directions share the same set of rhythmic disciplines: **expansion must be pulled by value, not by sales quotas.** The health score system from Chapter 5 has an offensive use here: departments with high usage depth and clear value are the next targets for expansion. Moreover, the moment when someone in the client's organization "sees others using it well and proactively asks about it" is the golden window for expansion—at that moment, you are not selling; you are responding to a need.

## 6.5 How Anthropic and FIS Played the Financial Services Card

Let's embed a complete case study in this chapter: one of the most prototypical partnerships in the 2026 enterprise AI market—Anthropic co-building a financial crime agent with fintech giant FIS. It almost perfectly demonstrates all the methodologies of this chapter.

First, look at the table. FIS is a giant in global financial technology infrastructure, serving the core systems of banks worldwide. In May 2026, FIS launched a financial crime detection agent, with Bank of Montreal and Amalgamated Bank as its initial clients. What this agent does: compresses anti-money laundering investigations from hours to minutes—automatically compiling evidence across core banking systems, presenting it to investigators ranked by risk, fully auditable and traceable throughout.

Then look at the playbook, featuring four interlocking moves.

Move 1: Embed, don't just deliver. Anthropic dispatched applied AI teams and Forward Deployed Engineers to embed directly within FIS and co-design alongside FIS experts. Note: FIS is not the end customer, but a channel partner—Anthropic's agent will enter hundreds of banks behind FIS alongside its products. This is one deal, and also the gateway to a hundred deals.

Move 2: Knowledge transfer as a selling point. The official statement explicitly stated: the goal of embedding includes "transferring knowledge so FIS can independently build and scale more agents in the future." Writing "teaching the customer" into the contract is both a preemptive response to fears of "vendor lock-in" (echoing the "vendor withdrawal symptom" in 5.1), and an advanced form of binding: when the customer's tech stack grows on your methodology, the cost of separation only gets higher and higher.

Move 3: Auditability as a product feature. In financial compliance scenarios, regulations require every decision to be replayable. Anthropic made "fully auditable and traceable" a core selling point of the agent, rather than an add-on feature—compliance is not a constraint; it is a differentiator. This offers a template for all regulated industries: **what others see as compliance costs can be your justification for pricing.**

Move 4: Ecosystem amplification. On the same day the FIS case was published, Anthropic also announced financial service connectors and "out-of-the-box" templates, alongside more than a dozen similar partnerships—a single case study was immediately abstracted into a replicable product asset. Around the same time, news circulated in the market about Anthropic forming an enterprise AI services joint venture with Blackstone, reportedly scaled at around $1.5 billion, going head-to-head with OpenAI's deployment arm. (Sources for the above in Appendix C)

Finally, look at the hidden subplot of this game: the vigilance of Chief Information Officers (CIOs). A tech media outlet aimed at enterprise CIOs quoted a consulting firm strategist's warning in its report: "The most structural problem in this model is who actually pays for the forward deployment costs—this is a question CIOs should ask, but mostly haven't." Gartner analysts predicted that by 2028, 70% of enterprises will be forced to abandon such solutions due to vendor costs and skills hollowing-out. This reminds us: hidden in the revenue design of the FDE model is a long-term balance—**the value you create must consistently outweigh the costs and dependencies brought by your presence. Earning the arbitrage on value makes for long-lasting business; earning rent on dependency will eventually backfire.**

## 6.6 Turning Punishment into Reward: The Pricing Psychology of Usage and Expansion

Good mechanism design can reverse punishments into rewards. In the FDE business model, this wisdom is applied to a delicate scenario: **what to do when a customer's usage exceeds expectations.**

The crude approach is "punitive overages": once contract usage is exhausted, excess usage is billed at punitively high rates, or the system directly throttles speeds. This was common in the early days of cloud computing, and the results were disastrous—customers actively suppressed their usage to avoid overages, leading to declining utilization, shrinking value, and a lose-lose situation at renewal time. **You end up punishing exactly what you want the most: deep usage.**

The design thinking of "turning punishment into reward" is to redefine "overages" as "badges of growth." Three specific tactics:

Tactic 1: Tiered pricing, cheaper the more you use. The higher the volume, the lower the unit price—turning "overage anxiety" into "momentum to scale." This operates on the same logic as telecom data tiered pricing, but it must be articulated clearly in the contract: what the customer sees is not "using more means paying more," but "using more lowers the unit price, making it a better deal for us." The same bill with a different narrative changes the trajectory of the relationship.

Tactic 2: Overage alerts + proactive upgrades. When the system detects a customer is about to exceed their limit, instead of quietly charging them, proactively reach out: "Your usage is growing fast; at this rate, upgrading to the next tier could save you 15%." This converts a billing event into a consultative sales opportunity—the customer feels taken care of, rather than nickeled-and-dimed. This move has a hidden benefit: it forces your team to continuously monitor the health of the customer's usage, naturally converging with the health score system in Chapter 5.

Tactic 3: Give the credit for "savings" back to the customer. When usage optimizations (model tiering, caching, batching) reduce costs, proactively spell out the math for the customer: "This quarter, we saved you approximately $X through architectural optimizations." In the eyes of a customer's finance leader, a vendor who proactively helps them save money and a vendor waiting to charge them for overages are two different species. The trust premium garnered at renewal time far exceeds the cost of those savings.

The foundation of pricing psychology is a simple truth: **your pricing structure tells the customer every day "what kind of relationship we have."** A punitive structure says, "We are watching you," while a rewarding structure says, "We are growing with you." The pricing model answers a question in the customer's mind every day: whose side are you on? The customer rereads this answer every day before renewing.

## 6.7 Building a Value Measurement System to Leverage the Small for the Big

The conclusion of this chapter is an infrastructure project: **building a value measurement system that runs through all customer deliveries**—turning "how much value we created for the customer" from impressions into data, and from data into assets.

The concepts repeatedly mentioned in previous chapters converge in this system: the "economic test" from Chapter 2 is its input (value hypotheses at project kickoff), the evaluation system from Chapter 4 is its micro-foundation (quality data), the health score from Chapter 5 is its operational interface (customer relationship data), and the pricing and expansion in this chapter are its commercial outputs (revenue data). Put together, it helps you do four things.

- **For Customers | The evidence vault for renewals and expansions:** Behind every Quarterly Business Review (QBR), every renewal negotiation, and every upgrade recommendation lies a value report output by this system: man-hours saved, error rates dropped, processing volume lifted, and the correspondingly converted financial figures. As Chapter 5 stated, value needs constant re-proving—and this system is the assembly line for "proof." **A data-armed renewal negotiation is on a completely different level of closing probability than a feeling-based one.**

- **For the Company | The health monitor for delivery quality:** By aggregating value data across customers, you can answer existential questions about the model: which types of scenarios have the highest value density (where should sales firepower be directed)? Which types of customers have the highest delivery costs (should pricing or tactics be adjusted)? Which deployments are creating value and which are idling (should resources be reallocated)? Without this system, your answers to these questions are mere guesses.

- **For the Product | The amplifier for feedback intelligence:** The combination of value data and usage data is the hardest evidence for product decisions: which features produce the highest value (increase investment), which features are unused (decisively deprecate), and which scenarios are repeatedly customized (signals for platformization). This connects to the theme of Chapter 7—the value measurement system is essentially the dashboard for the "field-to-product" feedback pipeline.

- **For the Market | The asset library for trust marketing:** "Chemical usage reduced by 70%" or "investigation time cut from hours to minutes"—these figures that make the entire industry remember you all come from the accumulation of the value measurement system. The highest realm of case study marketing is not telling stories, but flashing data; and data doesn't appear out of thin air at the negotiation table—it must be collected from day one of delivery.

Three practical tips for building this system: First, collect baselines from day one—without pre-transformation data, there is no proof of post-transformation value, and baselines only exist at the moment of project kickoff; miss them and they are gone forever. Second, metrics must be co-created with the customer—metrics they don't acknowledge hold no negotiating weight no matter how beautifully calculated; the moment you reach a consensus at the kickoff meeting, the metrics become your common language. Third, restrain the number of metrics—three to five core metrics per customer is enough; having too many metrics is equivalent to having none.

The revenue chapter ends here. From the acquisition economics of free PoCs to the pricing revolution of outcomes-based pricing, to the expansion rhythm of deepening existing accounts, and to the infrastructure of value measurement—all threads point to the same conclusion: **The revenue of the FDE model is not a trophy of sales, but the shadow of value. The greater the value you create, the longer the shadow.**

The next chapter is the "last mile" of the book: how to make all of this not rely on heroic individuals, but precipitate into replicable organizational capabilities—scaling and replicating.
