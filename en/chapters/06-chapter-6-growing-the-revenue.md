# Chapter 6 — Growing the Revenue

> "The mark that the FDE model holds is: the amount of customization decreases with each subsequent customer."
> — Bob McGrew

## 6.1 A World of Free Validation

The internet economy turned "free" from a gimmick into a strategy. This line of work can't get around the "free" hurdle either, only the hurdle is shaped differently: **the most expensive free thing in the enterprise-AI era is the free proof of concept.**

First, the scale of this free economy. Palantir's AIP bootcamp essentially turns free validation into an assembly line: the customer brings real data, a deployable prototype is built in one to five days, and the fee is zero or nominal. From fewer than a hundred sessions in 2022, multiplying year over year, to nearly 6 a day at the 2025 peak — reckoned by several top engineers over several days per session, this is a free investment on the order of tens of millions of dollars a year. Former Palantir engineer Barry is even blunter about the earlier days: "We burned millions of dollars on customer pilots, and the margins on many projects were literally negative infinity, because we did them for free."

Why does free validation hold up? Three sets of books add up.

The first set of books: acquisition. Traditional enterprise software acquires customers with a sales army: travel, dinners, tenders, drawn-out negotiations — money spent lavishly and uncontrollably. The bootcamp switches the play: don't persuade the customer, let the customer persuade himself — an executive clicking through a system run on his own data beats a hundred-page slide deck. Palantir compressing the sales cycle from nine-to-twelve months to weeks, and US commercial revenue growing 137% year-over-year in a single quarter, are widely credited to the free bootcamp as the main engine. **Free validation isn't a cost; it swaps sales expense for engineer expense — and engineer expense can settle into product, while sales expense cannot.**

The second set of books: the power to price risk. McGrew's advice is that an early-stage startup should proactively bear the risk: "You pay us once we've made it work." The confidence comes from belief in the product, and from a cool calculation — an enterprise customer's biggest doubt about a new vendor is "are you any good," and free validation is the solvent for that doubt. When the doubt is dissolved, the pricing power comes back to you: the customer is no longer buying "a bet" but "a certainty they've verified with their own eyes," and certainty can command a premium.

The third set of books: make failure valuable too. Free validation inevitably has failures — that's common sense in portfolio investing. The difference is where the failure goes: a failed traditional sale leaves a pile of travel receipts; a failed FDE-style free validation leaves an understanding of an industry, a set of reusable components, a body of evaluation data. As long as you've built Chapter 7's feedback mechanism, even a failed validation is making a deposit for the company.

But free validation has one fatal prerequisite: it must be "graduation-based," not "indefinite-residency-based." Which leads to the next section.

## 6.2 The End of the Free Lunch

Free is the means, charging is the end, and designing the transition is life-and-death. In the FDE world, "validation to paid" is the most crucial final touch and the stage with the highest rate of industry accidents — the "proof-of-concept graveyard" mentioned repeatedly in earlier chapters mostly isn't due to technical failure but to **no mechanism designed for "ending."**

The transition from free to paid has five switches that must be designed in advance.

- **Switch one:** the graduation standard precedes the work. The principle Chapter 2 stressed lands here: at the launch of the validation project, spell it out in black and white — the maximum duration, the acceptance metrics, and the agreement to enter commercial negotiation once the bar is met. Palantir's bootcamp takes this design to the extreme: on the Day 4-to-5 schedule, "the decision" follows immediately after "the demo." Conversion isn't an afterthought event, it's a box on the schedule.

- **Switch two:** make the boundary of free explicit. The customer must clearly know: free until which day, covering what scope, how the overage is priced. A fuzzy free boundary cultivates an expectation that "free is the norm," and when the charging day comes, the other side feels not "starting to pay" but "getting fleeced" — the same amount of money, different expectations, a world of difference in experience.

- **Switch three:** make the internal champion the salesperson. After the validation succeeds, the one who actually goes to knock on the budget's door isn't your sales rep, but the champion inside the customer who witnessed the value with his own eyes. Your job is to arm him well: a one-page value report (numbers, comparisons, colleague testimonials), a Q&A set for handling finance's scrutiny, and a statement of the opportunity cost of "not continuing." The internal trust an insider commands, an outsider can never reach.

- **Switch four:** plant the price anchor in advance. Start talking about value during the free period — "this system freed about 120 person-hours for you this month." When the value narrative runs through the free period, the customer already has an anchor in mind when the quote appears; if the free period only talks features and never value, the quote is an abrupt shock.

- **Switch five:** design a graceful exit for "not converting." Not every validation should convert, and a forced conversion is a poison contract. For a customer who falls short or whose timing is wrong, offer a "pause but preserve" option: keep the data and configuration, agree on restart conditions, maintain a light-touch relationship. The enterprise market is small, and today's "let's revisit next year" is often the year-after's big deal — provided you make the farewell professional.

The five switches together are essentially one sentence: **turn "free to paid" from a perilous leap into a gentle slope.**

## 6.3 Outcome-Based Pricing: You Pay for What the Customer Gets

In advertising there's an efficient play: track user behavior, target precisely. The FDE's pricing principle is just as blunt: **you charge for however much value the customer gets.**

The mainstream pricing of the online-software era is per-seat — paying for "the right to use." This logic is being eroded in the AI era: when one agent can do the work of 10 people, per-seat pricing becomes a joke — do you pay for 0.1 of a seat? So "outcome-based pricing" rose, and Sierra charging by "resolved conversation" is the most conspicuous sample: the customer pays not for the software, but for "the problem solved."

The evolution chain of outcome-based pricing has four rungs; the higher you go, the closer to value, and the harder to execute.

By usage: bill by the model's metering unit, call volume, throughput. The advantage is clear and measurable; the drawback is that it tracks cost, not value — high usage may mean high value, or may mean an inefficient system. Metered model-API billing is the industry's common baseline, but application-layer companies rarely make it the sole basis.

By action: bill per "completing one return," "generating one compliance report." A step beyond usage — the pricing unit starts to carry business meaning.

By outcome: bill per "successfully resolved conversation," "one bad debt recovered." Sierra's per-resolution charging, and some risk-control firms' share of recovered losses, are on this rung. The execution difficulty is attribution — determining "resolved" requires an adjudication standard both sides accept (this is exactly the commercial use of Chapter 4's evaluation system: the technical evaluation system is simultaneously the billing infrastructure).

By value share: take a cut of the financial value created for the customer — cost saved, revenue recovered, capacity freed. This is the ultimate form closest to value, and the hardest: it needs the customer to open financial data, needs cycle-resistant trust, needs extremely strong value-measurement ability. For now it only appears in some deeply bound, high-ticket scenarios.

A company that charges by outcome must dare to make the outcomes public. The customer data Sierra published forms an interesting report card: the property-management company Funnel Leasing, 94% self-resolution rate; the fintech company Ramp, 90%; the mattress brand Casper, 74% with customer satisfaction up over twenty percent; WeightWatchers, about 70% with a satisfaction score of 4.6 (out of 5); even the worst-performing customer had 64%.

Third-party price estimates then surfaced: an annual contract threshold from about $150,000, a common first-year budget of $200,000 to $350,000 including deployment fees, and large customers up to the million-dollars-a-year level; the reported price per successful resolution is $1 to $2. In other words, **every cent the customer pays corresponds to one "problem actually solved"** — Sierra dares to charge this way because its evaluation system can prove "resolved" to the customer. Pricing method and evaluation system are two sides of the same coin here. (Source in Appendix C.)

When choosing a pricing rung, there's a plain judgment principle: **the closer the pricing unit is to customer value, the higher your pricing ceiling — but the higher your measurement and trust cost too.**

For readers in the Chinese market, one realist footnote: domestic enterprise customers' acceptance of "subscription" is still limited, and "perpetual license plus implementation" and "pay on project acceptance" remain mainstream. Landing FDE pricing in China often has to blend East and West: deliver and accept by phase (accommodating the project-based habit) + write value metrics into the acceptance criteria (injecting outcome-based genes). Pure subscription is the ideal here; the hybrid is the way to survive.

## 6.4 Cultivating the Base: From One Department to a Whole Network

The enterprise market has an iron law: **the biggest revenue growth isn't in new customers, it's inside existing customers.** The industry measures this with net revenue retention, and excellent FDE-driven companies stand above 120% year-round — without signing a single new deal, existing revenue grows twenty percent on its own. Palantir's commercial story is essentially a story of cultivating the base: from one intelligence unit to a whole agency, from one factory to a whole group, from a government department to a commercial empire.

The play of cultivating the base has a vivid name in the industry: "land and expand." Landing relies on the first five chapters; expanding has three directions.

- **Horizontal | from one team to an adjacent team:** you built intelligent ticketing for the customer-service department, and the next-door after-sales and technical-support departments are the easiest customers to win next. When expanding horizontally, the most persuasive evidence is inside the customer: same company, same data environment, next-door colleagues speaking from experience — this is the expansion with the least sales resistance, needing almost no rebuilding of trust. Harvey's expansion in law firms follows this rhythm: cut in through a single practice group, six months of live validation, expand horizontally to the whole firm.

- **Vertical | from the execution layer to the decision layer:** the initial project usually serves frontline doers; vertical expansion conducts value up the chain: analytics and early warning for middle managers, a decision cockpit for executives. The point of vertical expansion isn't just revenue, it's safety — as Chapter 5 said, a system loved only at the grassroots has no defender in budget season; only a system that enters executives' field of view enters the organization's "fixed assets."

- **Deep | from a helper tool to a core process:** the deepest expansion is turning the system from "a tool that helps" into "a process you can't do without" — from "giving advice" to "executing business actions," from "optional" to "part of standard operating procedure." Every step of deep expansion comes with greater responsibility and a higher trust threshold, but it also builds the deepest moat: replacing a tool just means swapping software, while replacing a system embedded in a process is like performing surgery.

Two "land and expand" report cards are worth reading side by side. Harvey started from a single firm, Linklaters, and by 2026, users exceeded 100,000 lawyers and 1,300 organizations, covering most of the US top-100 law firms, more than 500 corporate legal teams, and 50 asset managers, across 60 countries; annual recurring revenue rose from about $100 million in August 2025 to about $190 million in January 2026 — nearly doubling in five months. Industry surveys show 68% of surveyed firms already use Harvey's agents in production, and heavy users save an average of 11 hours a week. The valuation then jumped four times in a year: $3 billion, $5 billion, $8 billion, $11 billion. (Source in Appendix C.) And Palantir's report card of 139% net revenue retention was covered in Section 5.1 — the two tables together illustrate the ultimate form of cultivating the base: **new signings rely on marketing, growth relies on the base.**

The three directions share one rhythm discipline: **expansion must be pulled by value, not driven by sales quotas.** Chapter 5's health-score system has an offensive use here: a department with high usage depth and clear value is the next target for expansion; and the moment in the customer's organization of "seeing others use it well and proactively coming to ask" is the golden window for expansion — at that point you're not pitching, you're responding to demand.

## 6.5 How Anthropic and FIS Play the Financial-Services Card

This chapter embeds one complete case: the most specimen-worthy collaboration in the 2026 enterprise-AI market — Anthropic and fintech giant FIS co-building a financial-crime agent. It demonstrates almost perfectly the entire methodology of this chapter.

First, the board. FIS is a giant of global financial-technology infrastructure, serving the core systems of banks worldwide. In May 2026, FIS launched a financial-crime detection agent, its first customers being Bank of Montreal and Amalgamated Bank. What this agent does: compress anti-money-laundering investigations from hours to minutes — automatically compiling evidence across bank core systems, ranking by risk for presentation to the investigator, fully auditable and traceable.

Now the play, four moves interlocking.

Move one, embed rather than deliver. Anthropic sent its applied-AI team and Forward Deployed Engineers to embed directly in FIS, co-designing with FIS's experts. Note: FIS isn't the end customer, but a channel-level partner — Anthropic's agent will enter the hundreds of banks behind FIS along with FIS's product. This is one deal, and also the entry point to a hundred deals.

Move two, knowledge transfer as a selling point. The official statement specifically noted: the goal of the embedding includes "transferring knowledge so FIS can independently build and scale more agents in the future." Writing "teach the customer" into the contract is both a preemptive answer to the "vendor lock-in" worry (echoing Section 5.1's "vendor-withdrawal reflex") and a sophisticated form of binding: when the customer's tech stack grows on your methodology, the cost of separating only rises.

Move three, auditability as a product feature. In financial-compliance scenarios, regulators require every decision to be replayable. Anthropic makes "fully auditable, traceable" a core selling point of the agent, rather than an add-on — compliance isn't a constraint, it's differentiation. This gives every regulated industry a template: **the compliance cost in others' eyes can be your reason to charge.**

Move four, ecosystem amplification. On the same day the FIS case launched, Anthropic also announced connectors and "ready-to-use" templates for financial services, plus a dozen-odd similar collaborations — a single case immediately abstracted into a replicable product asset. Around the same time, word also emerged of it forming an enterprise-AI-services company with Blackstone, reportedly around $1.5 billion in scale, going head-to-head with OpenAI's deployment company. (Sources for the above in Appendix C.)

Finally, the hidden thread of this hand — the wariness of the CIOs. A tech outlet for enterprise information leaders quoted, in its report, a consulting-firm strategy officer's reminder: "The most structural problem in this model is who exactly pays the forward-deployment cost — a question CIOs should ask but mostly haven't." Gartner's analysts, meanwhile, predict that before 2028, 70% of enterprises will be forced to abandon such solutions due to vendor cost and skill hollowing-out. This reminds us: hidden in the revenue design of the FDE model is a long-term balance — **the value you create must persistently exceed the cost and dependency your presence brings. Earn the spread on value and the business lasts; earn the rent on dependency and it eventually backfires.**

## 6.6 Turning Penalty into Reward: The Pricing Psychology of Usage and Expansion

Good mechanism design can flip a penalty into a reward. In the FDE business model, this wisdom applies to a subtle scenario: **what to do when the customer's usage exceeds expectations.**

The crude approach is the "punitive overage": once the contracted usage is used up, the excess is billed at a punitive high rate, or the system directly throttles and slows down. This was common in the early days of cloud computing, and the result was catastrophic — to avoid overage, customers proactively suppress usage, the usage rate drops, the value shrinks, and renewal is lose-lose. **What you're punishing is exactly what you most want: deep usage.**

The design idea of "turning penalty into reward" is to redefine "overage" as "a medal of growth." Three concrete techniques.

Technique one: tiered pricing, cheaper the more you use. The bigger the usage, the lower the unit price — turning "overage anxiety" into "volume momentum." This is the same as telecom tiered-data pricing, but express it clearly in the contract: what the customer sees isn't "use more, pay more," but "use more, lower unit price, better deal for us." The same bill, different narrative, different direction for the relationship.

Technique two: overage warning + proactive upgrade. When the system detects the customer is about to go over, don't silently bill — proactively reach out: "Your usage is growing fast; at this trend, moving up a tier would save 15%." Turn the billing event into an opportunity for consultative selling — what the customer feels is being cared for, not being schemed against. This move has a hidden payoff too: it forces your team to keep watching the health of the customer's usage, naturally merging with Chapter 5's health-score system.

Technique three: give the credit for "savings" back to the customer. When usage optimization (model tiering, caching, batching) lowers cost, do the math proactively for the customer: "This quarter, through architecture optimization, we saved you about X." In the eyes of the customer's finance lead, a vendor who proactively helps the customer save money and a vendor who waits for the customer to go over are two different species — the trust premium the former reaps at renewal far exceeds the saved fee.

The bedrock of pricing psychology is a plain truth: **the pricing structure tells the customer every day "what kind of relationship we are."** A punitive structure says "we're watching you"; a reward structure says "we grow with you." The pricing method answers, every day, a question in the customer's mind: whose side are you actually on? The customer re-reads that answer every day before renewing.

## 6.7 Building a Value-Measurement System to Win Big with Little

This chapter closes with an infrastructure project: **building a value-measurement system that runs through all customer deliveries** — turning "how much value we created for the customer" from an impression into data, and from data into an asset.

The things mentioned repeatedly in earlier chapters converge in this system: Chapter 2's "economics test" is its input (the value hypothesis at chartering), Chapter 4's evaluation system is its micro-foundation (quality data), Chapter 5's health score is its operational interface (customer-relationship data), and this chapter's pricing and expansion are its commercial outlet (revenue data). Put together, it helps you do four things.

- **For the customer | an evidence base at renewal and expansion:** behind every quarterly review, every renewal negotiation, every upgrade proposal is a value report this system outputs: work-hours saved, error rate down, throughput up, and the corresponding financial figures. As Chapter 5 said, value needs to be re-proven continually — this system is the assembly line for "proof." **A data-armed renewal negotiation and a gut-feel renewal negotiation close deals at different orders of magnitude.**

- **For the company | a physical-exam machine for delivery quality:** aggregate value data across customers and you can answer questions that decide the model's survival: which kind of scenario has the highest value density (where to steer sales firepower)? which kind of customer has the highest delivery cost (should pricing or the playbook be adjusted)? which deployments are creating value and which are spinning idle (should resources be reallocated)? Without this system, your answers to these questions are all guesses.

- **For the product | an amplifier for feedback intelligence:** value data combined with usage data is the hardest basis for product decisions: which feature produces the most value (invest more), which feature no one uses (cut it decisively), which scenario is repeatedly customized (a signal to platformize). This connects to Chapter 7's theme — the value-measurement system is essentially the dashboard of the "field-to-product" feedback pipeline.

- **For the market | a material library for trust marketing:** "chemical use reduced by 70%," "investigation time from hours to minutes" — these numbers the whole industry remembers all come from the accumulation of the value-measurement system. The highest state of case marketing isn't telling a story, it's showing data; and data doesn't appear out of thin air at the negotiating table, it has to start being collected on the first day of delivery.

Three practical suggestions for building this system. First, collect the baseline from day one — without pre-transformation data, there's no proof of post-transformation value, and the baseline exists only at the moment the project launches; miss it and it's gone forever. Second, the metrics must be co-built with the customer — a metric he doesn't recognize has no negotiating power no matter how you compute it; the moment you agree on it at the kickoff meeting, the metric becomes your shared language. Third, restrain the number of metrics — three to five core metrics per customer is plenty; too many metrics is the same as no metrics.

The revenue chapter ends here. From the acquisition economics of free validation, to the pricing revolution of outcome-based charging, to the expansion rhythm of cultivating the base, to the infrastructure of value measurement — every thread points to the same conclusion: **the FDE model's revenue is not the spoils of sales but the shadow of value. The greater the value you create, the longer the shadow.**

The next chapter is the book's "last mile": how to make all of this not depend on heroic individuals but settle into a reproducible organizational capability — scaling by replication.
