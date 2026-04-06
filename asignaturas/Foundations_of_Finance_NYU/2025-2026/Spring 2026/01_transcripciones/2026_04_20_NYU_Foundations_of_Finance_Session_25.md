**Date:** April 20, 2026  
**Topic:** Futures and Forwards – Basic Pricing, Hedging Logic, FX Forwards, and Commodity Futures

---

## 1. General context of the class

This was a relatively small class, and the professor used it as a bridge between the more demanding material on options and the final review period.

He made two things clear from the beginning:

- **Today’s class is conceptually simpler** than the options sessions.
- The goal is not to introduce a mathematically difficult block, but to consolidate another major family of derivatives: **futures and forwards**.

He also reminded the class that what remains before the final is largely **review and consolidation**. The heavy conceptual material is already on the table:
- equity valuation
- fixed income
- options
- and now futures / forwards / swaps as the final derivatives block

---

## 2. The big idea of today’s class

The entire class can be summarized with one core idea:

> A futures or forward price is **not** a crystal ball about the future spot price.

This was probably the most important sentence of the session.

The professor insisted on this because in the media, especially with oil, commodities, or exchange rates, people often look at futures prices and interpret them as if they were simply predictions of future spot prices.

That is **not** the right way to think about them.

What a futures price gives us is not:
- “what the asset will surely cost in six months”

What it gives us is:
- the **no-arbitrage price today** for delivery in the future

That distinction is fundamental.

---

## 3. Time value of money again: the hidden engine behind futures pricing

At the start, the professor brought the class back to the most basic formula in the course:

\[
PV = \frac{FV}{(1+r)^T}
\]

and equivalently:

\[
FV = PV(1+r)^T
\]

He stressed that this is not a separate topic from derivatives.  
On the contrary:

> Futures pricing is just another application of time value of money.

That is why this session is not really “new” in spirit. It is another use of the same core machinery:
- present value
- future value
- interest rates
- arbitrage

---

## 4. Futures and forwards: same family, different structure

The professor clarified an important language issue.

We often speak broadly about **futures contracts**, but conceptually this family is divided into two related instruments:

- **forwards**
- **futures**

They are similar in economic logic, but not identical in market structure.

### Common core
Both are contracts that fix today the terms of a transaction that will happen in the future.

### Main difference
- **Futures** are traded in **organized / regulated markets**
- **Forwards** are traded **OTC** (over the counter)

This distinction matters a lot.

---

## 5. What does OTC actually mean?

The professor spent time explaining OTC in an intuitive way.

Historically, OTC products were associated with:
- custom contracts
- large institutions
- investment banks
- wealthy or sophisticated participants

Because these contracts were not standardized and not traded on a central exchange, they were less accessible and less liquid.

He then made a broader point:

### Before the internet
OTC markets felt much more exclusive and less democratic.

### Today
With digital finance, online trading, information access, and broader technological infrastructure, access has expanded dramatically.

Still, the conceptual distinction remains:

- **regulated market** = standardized, centralized, more transparent
- **OTC market** = customized, bilateral, more flexible

---

## 6. Futures vs forwards in practice

The professor emphasized several operational differences:

### Futures
- traded in organized exchanges
- standardized
- more liquid
- positions are typically **marked to market**
- there is usually a **clearing house**

### Forwards
- negotiated directly between counterparties
- more flexible/customized
- usually not marked to market in the same way
- settlement often happens mainly at maturity
- involve more counterparty-specific structure

So although both instruments reflect the same underlying economic idea, they are implemented differently.

---

## 7. The role of the clearing house

One of the practical concepts explained in class was the **clearing house**.

The professor described it in a very intuitive way:

Imagine many people want to buy and sell throughout the day.  
Instead of every buyer having to find the exact seller and every seller having to find the exact buyer, the market acts as intermediary.

The clearing house:
- stands between buyers and sellers
- becomes the effective counterparty to both sides
- simplifies trading
- provides liquidity and stability

So during the trading day:
- you can buy quickly
- you can sell quickly
- the market remains functional

At the end, positions are cleared and netted.

This is a big reason why futures markets are more liquid than many customized forward markets.

---

## 8. Market makers

The professor also explained **market makers** using a retail-store analogy.

A store holds inventory so customers can transact immediately.  
In financial markets, a market maker does something similar:

- stands ready to buy
- stands ready to sell
- helps ensure liquidity

This matters because not every market participant naturally wants to take the opposite side of your trade at the exact moment you want to trade.

Market makers smooth the process.

---

## 9. Marking to market

The professor noted that futures are usually **marked to market**.

This means gains and losses are recognized continuously, typically every day.

So with futures:
- your position is revalued daily
- money may flow in or out of your account each day

This is different from the simplified intuition students sometimes have of “nothing happens until maturity.”

That latter idea is closer to the logic of a basic forward contract.

---

## 10. Payoff of a forward / futures position

The next step in class was the basic payoff logic.

Suppose you are **long** a futures or forward contract.  
At maturity, your payoff is:

\[
S_T - K
\]

Where:
- \(S_T\) = spot price at maturity
- \(K\) = delivery price fixed today

### Interpretation
- If \(S_T > K\), you gain
- If \(S_T < K\), you lose

If you are **short**, the payoff is the opposite:

\[
K - S_T
\]

Again, zero-sum logic applies:

> What the long wins, the short loses.  
> What the short wins, the long loses.

This is the same spirit we already saw with derivatives more broadly.

---

## 11. Long and short: language clarification

The professor again emphasized one of the recurring difficulties in finance: **language**.

### Long
Being long means you benefit if the price goes **up**.

### Short
Being short means you benefit if the price goes **down**.

This sounds simple, but students often get tangled when the instrument is a derivative instead of the asset itself.

He reinforced the idea that in derivatives:
- being long a futures contract means wanting the underlying price to rise
- being short a futures contract means wanting the underlying price to fall

This same intuition will also connect to options and hedging.

---

## 12. Why do futures and forwards exist?

The professor stressed that these markets are not just casinos.  
They perform important economic functions.

There are three classic roles:

### 1. Hedgers
People who want to reduce risk.

Example:
- an airline wants to hedge against oil price increases
- a farmer wants to hedge against price changes in crops

### 2. Speculators
People who actively bet on price movements.

They are willing to assume risk in exchange for potential profit.

### 3. Arbitrageurs
People who exploit mispricing and in doing so help restore price consistency.

These three groups make the market work.

---

## 13. Historical intuition: why futures are so old

The professor used a historical example:

Some of the earliest futures-type agreements were linked to **rice in Japan** and agricultural products more generally.

This is intuitive:
- farmers face price uncertainty
- buyers face supply uncertainty
- both sides benefit from locking in terms in advance

This is why futures markets developed so naturally in commodities.

He also linked the importance of Chicago futures markets to the agricultural geography around them.

---

## 14. Futures price parity: the central pricing equation

Now came the key pricing result.

For a basic asset with no income during the life of the contract, the futures/forward price satisfies:

\[
F_0 = S_0(1+r)^T
\]

Where:
- \(F_0\) = futures/forward price today
- \(S_0\) = spot price today
- \(r\) = relevant financing rate
- \(T\) = time to maturity

This is just future value.

### Interpretation
If you can buy the asset today for \(S_0\), finance it at rate \(r\), and carry it until maturity, then the no-arbitrage delivery price must match that cost of carry.

This is **spot-futures parity**.

---

## 15. What this formula does and does not mean

This was one of the most important conceptual clarifications of the class.

The formula says:

\[
F_0 = S_0(1+r)^T
\]

It does **not** say:

\[
S_T = S_0(1+r)^T
\]

The futures price is not a guaranteed prediction of future spot.  
It is the arbitrage-consistent forward delivery price **today**.

That distinction is crucial.

The professor stressed this several times, especially because journalists and commentators often confuse these two ideas.

---

## 16. Futures on assets that pay income

If the underlying pays some known income before maturity, the pricing formula must be adjusted.

For example, if a stock pays a known dividend during the life of the contract, that dividend reduces the effective carrying cost.

So conceptually:

\[
F_0 = (S_0 - PV(\text{income})) (1+r)^T
\]

or in simplified classroom language:
- start from the spot price
- subtract the value of income you receive while holding the asset
- then carry forward

The professor did not make this the central focus of the session, but he clearly wanted students to see that the basic spot-futures relation must be adjusted when the asset generates cash flows.

---

## 17. FX forwards and the carry trade

A very interesting part of the class was the discussion of **currency forwards**.

Suppose:
- you have one currency
- interest rates differ across countries
- you can borrow in one currency and invest in another

Then the forward exchange rate emerges from no-arbitrage conditions.

### Basic intuition
If US interest rates are higher than euro rates:
- investors may want to borrow euros
- convert into dollars
- invest in dollars
- and later convert back

This is the logic behind a **carry trade**.

But this creates exchange-rate risk.

So if you want to eliminate that risk, you use a **forward exchange contract**.

That is why forward FX prices are linked to:
- spot exchange rates
- domestic interest rates
- foreign interest rates

---

## 18. What the carry trade really is

The professor described the carry trade in practical language:

1. borrow in the low-interest-rate currency  
2. convert into the high-interest-rate currency  
3. invest there  
4. later convert back  
5. repay the original borrowing

At first glance, it can look like “free money.”

But it is not free money because:
- exchange rates can move against you
- the higher interest differential can be overwhelmed by currency appreciation/depreciation

So again:

> apparent arbitrage is often really risk-taking

This is a theme that appeared in earlier classes too.

---

## 19. Example: yen-funded carry trades

The professor used the Japanese yen as a classic example.

For years, Japan had very low interest rates.  
That made yen borrowing attractive for carry trades.

So many investors:
- borrowed yen
- bought higher-yielding assets elsewhere

This worked for long periods.  
But when currencies moved sharply, those positions could suffer large losses.

This was the professor’s broader warning:

> A strategy can look stable for years and then blow up when the macro environment changes.

---

## 20. Commodity futures: where things get more complicated

The final and richest conceptual block of the class was about **commodity futures**.

Unlike a simple financial asset, a physical commodity has extra real-world complications:

- storage costs
- transportation
- insurance
- convenience yield / inventory value
- physical delivery constraints

So for commodities, pricing is not just:
\[
F_0 = S_0(1+r)^T
\]

We also need to think about **cost of carry** more broadly.

---

## 21. Storage costs

Suppose you buy the commodity today and want to hold it until maturity.

That may require:
- warehouse space
- transport
- insurance
- maintenance

These are real costs.

So for commodities, the forward/futures price often includes:
- financing cost
- storage cost
- possibly other carry adjustments

The professor stressed that this is why commodity futures can behave differently from simple stock futures.

---

## 22. Why commodity futures can become strange

The professor then gave a very powerful example: **oil during the pandemic**.

This is one of the best real-world illustrations of why commodity futures are not trivial.

### The situation
- demand collapsed
- transport collapsed
- storage capacity became a real constraint
- some traders or investors held futures contracts but had no intention or ability to receive physical oil

If you buy a futures contract on a physical commodity and hold it to delivery, in some cases you may need to receive the commodity.

But what if:
- no one wants it
- demand is collapsing
- and storage is full?

Then holding the contract becomes a problem.

---

## 23. Negative oil futures during 2020

This led to one of the most memorable moments in modern markets.

At one point in 2020, some oil futures traded at **negative prices**.

Why?

Because some holders of contracts were effectively desperate to get rid of them.  
They did not want physical delivery obligations in a world where:
- storage was scarce
- mobility was collapsing
- nobody needed immediate oil

So people were willing to pay others to take contracts off their hands.

This is an extraordinary case, but it teaches a deep lesson:

> In commodity futures, physical reality matters.

You cannot treat all futures as pure abstract finance.

---

## 24. Contango and backwardation

The professor introduced the language of commodity term structure:

- **Contango**
- **Backwardation**

These describe the relationship between spot and futures prices across maturities.

### Contango
Typically associated with futures prices above spot, often linked to positive carrying costs.

### Backwardation
Typically associated with futures prices below spot, often linked to supply tightness, convenience yield, or special market conditions.

The professor did not push heavily into formal definitions, but he wanted students to know that commodity futures are shaped by these forces.

---

## 25. Rolling contracts

Another practical concept introduced was the **rollover**.

Many participants in futures markets do not want physical delivery.  
So instead of waiting until expiration, they:
- close the contract they hold
- open a new one with a later maturity

This is called rolling the position.

This is extremely common in futures markets, especially in:
- commodities
- indices
- financial futures

---

## 26. Why futures markets are useful for oil but not predictive

The professor returned several times to the oil example because it helps students avoid a common mistake.

Seeing that oil futures for six months ahead are high does **not** mean that oil spot in six months will necessarily be high.

It means that, given today’s:
- spot price
- interest rate
- storage cost
- carry conditions
- market structure

the no-arbitrage futures price today is high.

Again, the distinction matters.

---

## 27. Hedging logic with futures

The class repeatedly came back to hedging.

### Example: airline and oil
An airline sells tickets today but faces uncertainty about future fuel costs.

To hedge that exposure, it can buy oil futures.

Why?
Because if fuel prices rise:
- the firm suffers in the real world
- but gains on the futures position

That is the logic of hedging:
- real-world loss offset by derivative gain

This is the same general structure students have already seen in other parts of derivatives.

---

## 28. Hedge ratio in futures

The professor also briefly discussed **hedge ratio**.

In the simple classroom logic of futures, the hedge ratio is often close to **1-for-1**, because the derivative payoff moves very directly with the underlying.

He contrasted this with options, where hedge ratio is more subtle and depends on Delta.

So the class implicitly reinforced a useful comparison:

- **options**: nonlinear exposure, Delta matters
- **futures**: much more direct linear exposure

---

## 29. What was intentionally not central today

The professor explicitly said that some of today’s material is more about:
- general culture
- market intuition
- practical financial understanding

than about something that will dominate the final exam.

In particular:
- currency carry trades
- commodity market oddities
- the oil pandemic episode
- and some swap-related context

were discussed to enrich understanding, not to burden students unnecessarily.

---

## 30. Key formulas from today

### Basic futures/forward pricing without income
\[
F_0 = S_0(1+r)^T
\]

### FX forward intuition
Spot exchange rates plus interest-rate differentials determine forward exchange rates through no-arbitrage logic.

### Commodity adjustment intuition
For commodities, futures prices also reflect carrying/storage costs and related physical constraints.

---

## 31. The deeper lesson of the session

There were really three major takeaways.

### 1. Futures prices are pricing relationships, not prophecies
This is the most important conceptual point.

### 2. Derivatives must always be connected to the underlying
You cannot price the derivative in isolation.

### 3. Real markets are not pure abstractions
In commodities especially, storage, delivery, logistics, and crisis conditions can completely reshape pricing.

---

## 32. What you should know for study purposes

After this class, you should be comfortable with the following:

### A. Conceptual differences
- forward vs futures
- regulated market vs OTC
- clearing house vs bilateral agreement

### B. Payoff logic
- long futures/forward: \(S_T - K\)
- short futures/forward: \(K - S_T\)

### C. Pricing logic
- futures/forward pricing as a time-value-of-money / no-arbitrage relation
- why \(F_0\) is not the same thing as expected future spot

### D. Practical applications
- hedging commodity exposure
- carry trade intuition in currencies
- why storage matters in commodities

### E. Vocabulary
- long
- short
- mark to market
- clearing house
- market maker
- cost of carry
- contango
- backwardation
- rollover

---

## 33. Final conceptual summary

This session connected the derivatives block back to the deepest foundation of the course:

> Finance is about pricing contracts under uncertainty using time value of money and no-arbitrage logic.

In that sense, futures are not a new universe.  
They are another application of the same framework students have already seen in:
- bonds
- equities
- options

The instrument changes, but the architecture remains the same.

---

## 34. Closing takeaway

If you remember one sentence from today, let it be this:

> A futures price tells you the fair contracted price today for future delivery. It does **not** tell you with certainty what the future spot price will be.

That is the core idea of the whole class.


---

# Transcription
20 de abril de 2026, 5:04p.m.
1 h 1 min 26 s
Gay, we are just four.  
Adam.  
I will.  
I will, I will wait for 5 minutes in order to take up a couple of minutes.  
And discuss, we are, we are all welcome.  
All things we are messing today.  
And we are going to see next day out, things that we have already seen.  
We will review.  
I.  
Who to be using, so?  
Yeah.  
So, let me just put this in silence.  
Luis.  
I don't know who is.  
Ohh, yes.  
The.  
I.  
I.  
Play.  
Okay.  
Yeah.  
Okay, before starting.  
Any questions regarding?  
Is there any question regarding options?  
Any questions regarding options or would be like a source formula?  
You have more information in order to accomplish.  
Ebay.  
We are in a world with features.  
And today's class is going to be really simple. Let me summarize today's class.  
Present value is equal to future value over 1 + r price to be, yes?  
If we know.  
Present value. Hi, Sophia. How can we calculate? Once we know present value, how are we going to calculate future value?  
By doing which a value is equal to the spot present value times 1 + r tries to be this.  
We are gonna go today.  
It's about you.  
With present value with the value money formula, yes?  
Have you ever had an official market?  
What kind of things are being created in future market?  
What kind of things?  
Is there something that normally we pray in? What? Stocks are great, but these do the thing that is we pray the most.  
Regarding futures market.  
Which types of products?  
I mean, I mean, futures is a very bad thing, but normally the most, I mean, I was looking for oil. Oil normally is been trading futures money.  
One.  
Be safe, normally people.  
Luis.  
Considering that, by look, it teachers price.  
You can't believe that.  
For example, with...  
I am Iran Iran's work, yes.  
I was being called television, television, and one of the questions the interviewer asked me is, ohh, teachers market.  
shows that the oil price has increased six months into the market. Does this mean that in six months oil price is going to be this? Do you understand what I'm saying?  
Insures market.  
Insurance markets, don't tell us anything regarding future.  
Once we know the stock price, once we know this price, we have to figure out.  
But today's future price will be, not the price in the future. You understand what I'm saying?  
So, first idea: Insurance market.  
It's not a crystal ball. We cannot predict what the oil price is going to do in six months. The question they were asking is, oh, we see in future market that the price is high, so in six months.  
The price is going to be high. Now, there is something that is called, have you understood what I have said?  
Yes, then when talking about teachers, there is something that is being called.  
Well, teachers.  
Price party.  
Spot pictures.  
Misunderstood features of price parity with calls put parity. Nothing to do. Except what is calls put parity about? But once I know the price of my cook, giving one strike, I can calculate the price of the.  
Or, or the opposite would say.  
Examples.  
What is pictures?  
Price party.  
And once I know this book, say I know this book, I know what the future of life will be. Why? Because we know our controls. Make sense?  
So in the spot price prices, features price will price.  
Make sense?  
Okay.  
This is the and also we will talk about currency features.  
And a.  
All formulas we are going to work with today are formulas that all of you already know. They won't see anything new. Yep.  
Okay, what are we going to see today? We will talk about...  
Futures and co-wars.  
But we'll talk about the payoff, and then we'll talk about food rents.  
We were and see.  
Futures and followers, yes.  
Okay.  
One of the most.  
One of the difficulties.  
One of the difficulties my course had has to do with language.  
Do you remember at the beginning with HPR, IRR, and HPR with you the beginning all these things?  
Tell me the same.  
And this is one of the big things. For example, I have already told you that you have on one hand.  
Call, and on the other hand, we have features of Scott, we use same word or talk about different things.  
Yep.  
With futures and overs.  
That which is again one of the difficulties. Let me take this level and let me explain something. That is simple to explain that it has what they do.  
Teachers.  
Each is divided into two different types of components.  
Did George?  
And forward.  
Do you see what he said if you want me?  
Did you put pizza?  
Over contracts, please, because anyone you do over contracts is a die of insurance contract.  
Future code.  
It's not my fault.  
Today, we are doing our futures. Our futures are being divided into futures and forwards.  
Make sense?  
Nobody.  
We call it futures contract to both futures and powers. What is a power? Futures contract. That carefully because we will distinguish between powers and futures.  
What is the difference? What's all this thing been said?  
What is the difference between a futures contract and a whole work contract?  
Futures contracts are being trade in regulated markets, while forward contracts are being trade ODC over the counter.  
Hold up, related, man.  
What does this mean, ODC? Over the counter, but what does this mean?  
But that's so to be cradled this evening.  
Everyone has access to it. Everyone has access to it. I think also everyone has. I love this idea because we are talking from the.  
Considering that crypto is so distant.  
I agree to show this, but think before later. Yes, let me go back.  
Let me go back to the pass, yes, before the internet.  
OTC products were limited to people that can contract with investment banking, for example, or with big, big traders. You trade OTC, what you cannot find in the market.  
Before the internet, you go out to see if you were looking.  
Gonna pay your main solution.  
Makes sense.  
All what I need, I don't understand something regarding this class before the internet.  
Oh, you will look for help. You will look for a planet, teacher, for example.  
before later. Now, now with the internet, if you don't understand something, what are you going to do?  
He said, if you don't ask me, what are you gonna do?  
You are going to Google it and look for a YouTube tutorial.  
So the internet has made all these people more democratic.  
CASAS.  
has transformed all these products into a more democratic product. Make sense?  
You understand what I'm saying?  
OTC, before the internet, were more wealthy people. Nowadays, OTC has become something that is for everyone.  
We don't know who's full of works.  
Forwards contract at speed.  
for wealthy people not everyone gonna fall over  
Yep, for example, thinking about oil.  
Who we back?  
Call our contract regarding all.  
For example, an airplane goes back.  
May that you sell?  
Tickets for what in one year time you sell a complete service in one year time.  
And you want to hedge against all in present sense.  
So, what you will do to get there with the tickets that you have told, yes?  
You will buy oil pictures.  
All, all, make sense.  
Yep.  
Another Carlos.  
Another paradox regarding pictures of home.  
Before the internet, all our contracts were less.  
Why there were less liquid? Because they were not trade in regulated markets. Why people trade things in markets? Because, thanks to markets, you get more liquidity.  
Makes sense.  
Well, do you see that thanks, Margaret?  
You get morning with me?  
What happens nowadays with grid?  
The crypto markets is being traded all over the world, 24 hours, 10 days a week.  
So crypto markets are more liquid than regulated markets. So you see, in the past, we were trading.  
I guess, in order to help you nowadays.  
We hope this matter to get more liquidity with that.  
Revelated minds.  
Okay.  
Let me talk about features.  
And forwards, yes, what is the main difference between futures and forwards?  
The independent is that futures are being traded into regulated markets, while forwards are being traded over PC.  
Ben.  
What is these things regarding a house? Anyone knows what is a house?  
Okay.  
A dealing house. Have you ever had a house office?  
How regulated markets are regulated markets are supposed to be equal, yes?  
Are supposed to be liquid. What does liquidity mean?  
What does liquidity mean?  
Well, I haven't seen that.  
A future market, what does liquidity mean?  
Is it good?  
The more liquid, the more easy to trade. I am buying what liquid would be that it would be easy for me to sell, to find a seller. I want to sell, but that's a liquid market means that I will sell it quickly. Yes.  
Home markets provide equity.  
All markets provide liquidity.  
There are two methods in order to provide me with one method.  
Is the cleaning house?  
Another method is...  
To have market makers, market makers, let me start with...  
What is a greenhouse?  
We are talking about only features, for example, yes?  
I am the market. I am the market.  
For example, I am in Chicago, Boto Republic. Yes, what is the market is a platform?  
That cake and that wants to buy on the market. What I will do, I will sell it.  
Then, Sofia came and wants to sell. What I will do, I will sell to Sofia. This money came and wants to buy.  
I will sell, then Sam wants to sell, so I will buy for her. Eva wants to buy, so I will sell you.  
And Vega wants to buy, so I will sell. Make sense?  
The boat, sell, boat, sell, and what I have done.  
Me, at the market, I have act as a counterpart.  
At the end of the day, please solve you. At the end of the day, what I will do? I will do that clear.  
What is it mean?  
closing or, oh, you are selling, you are buying, you are selling, you are buying. So I will clear all your positions and meet the market. I will just hold the difference among all.  
So, during the day, you have got instant liquidity.  
And at the end of the day, if you don't know anything back, I will clear all positions and I will just hold the difference. Make sense?  
De.  
Then.  
What is the market made?  
What is a maker? Have you ever heard of makers?  
What's another name?  
Like people that have sex movement, a lot of tradition back in like jail on market.  
This is a consequence, but this is not a marketing.  
Let me explain what is happening.  
Uhhuh.  
Manila Duty Shampoo.  
If you need shampoo, when you go and buy shampoo, the shampoo factory, there is no need to go to a shampoo factory. Where do you will buy shampoo?  
A restaurant that had shampoo. Why the store Nazis buy shampoo?  
But because the storage wants to sell shampoo to everyone.  
Restaurants buy shampoo in order to sell.  
What is this?  
Normally, it happens the same way. Very like this happens the same way. We will see what is a market maker is a person.  
is a person that is there in order to buy or sell gas in case you need to sell or buy. Make sense? A market maker saying that happens with goods.  
In real life, in real life, it happens with...  
Financial instruments in the bar.  
Are there always market makers? No, we are talking about fixed income that are market makers. We are talking about derivatives that are market makers. Why? Because derivatives normally are not so weak.  
And you need to...  
Create in order to buy yourself, make sense.  
What am I talking about?  
I'm talking about be with you.  
Yeah.  
OK, features normally are market to market.  
Market, to market, what does this mean? It means that each day I have a position and each day the position gets closed and depending on what the spot has done, I will need to pay or receive money for my futures contract. So each day a new price is being calculated and each day  
I should pay or I should receive money.  
Because futures are being traded into regulated market, futures are standardized problems.  
Ana.  
On the other hand, or worse?  
You contract a forward contract. Normally, no cash has been traded and been maturing. And normally, when talking about forwards, there are a lot of times that you sold, you close the forward contract by buying or by selling the thing.  
The boat or do you have soul? Yes?  
Play.  
What are the advantages of features? For liquid, you can buy them or sell them in an immediate way. And on the other hand, what is the advantage of buying a power that you are getting?  
I know B.C. Pro.  
You're ready, and how will we see if essence?  
Three questions.  
People.  
What are we talking about today?  
About how the market, how markets works.  
Then.  
What is the payoff?  
Of a forward contract.  
Four 5000 ounce of silver.  
Okay.  
The pictures contract.  
Is *****.  
If the strike is working.  
And what? And he's six months back.  
The underlying word 40, similar word 40, I won't pay or I will receive money.  
For how long, if I am buying three words, 50, I will get one in case I have go.  
Five 1000 contracts, instead of 1, I will get 5000, yes, which one is the payoff?  
This is the payoff for the loan, and which one is the payoff for the short?  
Yes.  
This is the payoff for the shop, yes?  
How much money is getting?  
The buyer, the exact amount of money that the seller is losing. How much money is getting? The seller, the exact amount of money that the buyer is losing. Again, we're talking about forwards.  
We are talking about zero sum gains. Zero sum gains. If you are buying and you get money is because the seller that is in this case is losing the exact amount of money. Make sense?  
Yes.  
One thing that I don't remember if I have told you, but I will repeat it. And this is another of the difficulties. Finance has.  
You are long.  
You are alone.  
But you will want the price.  
Go up or slow down?  
Did you are alone?  
Because you have both.  
You have both? You want the price to go?  
On the other hand, short.  
Short mean is is tiny.  
But also short is Ruiz.  
Sure, if you are sure, you will want the price to go.  
All of you understand that if you are low, you will want the price to go up. If you are short, you will want the price to go down. Yes?  
If you are long and cold.  
If you are long ago, you will want the price of the to go.  
Ah.  
If you are sure, if you sure at all, you will want the price of the underlying asset to go down. Make sense?  
So, to be long will mean waiting the price to go up.  
Be sure, we mean weighing the price to go out, make sense.  
How can you?  
Sure.  
With boots.  
And then for the question, who can you get a short position regarding a masset with boots?  
Five minutes.  
You will buy a book.  
You will buy a book?  
What does to buy a cook means?  
What does to buy a book means? To buy a book?  
You will want the price of the liner to go.  
No.  
So, if you buy a food, I'm going to say so, because I don't want to show you much this. You buy a food, you are love with the food, and I'm sure with everybody.  
Careful with buying goods, because when you buy a food.  
You are long with the book, but short with the light.  
So, how will you get a short position?  
We love Ruiz.  
And you are no more Russian.  
To buy goods, you are gone with the goods, but short food underlying, wearing a short position.  
So, if you are alone in Apple, you are not short of shoes.  
Makes sense.  
Once you understand these kind of things, you understand it, and before understanding it, so confusing.  
So, in this case, one is the payoff, this is the payoff, yes?  
Hey, nobody.  
Why people will buy?  
Just in order to get one of three.  
People will buy derivatives, the most important function.  
People will buy.  
Hits.  
No, you have this.  
Where futures, where futures contract start?  
But where, when, where was the first futures program closed?  
First Futures contract was closed in Japan.  
Regarding which company?  
Can you imagine?  
Rice.  
Regarding rice.  
What?  
Why the biggest futures contract is since Garvía?  
What can you find in Seattle? Anyone of you is from Seattle?  
What can you find in Seattle?  
Bing.  
What else can you find in Chicago?  
Nothing.  
We don't respect, we so we don't respect all Chicago.  
Diez.  
What can you find in Chicago?  
Plan.  
Oh.  
Diez.  
And in Chicago, you can find farmers.  
Why the biggest U.S. in Chicago? Why the biggest U.S. insurance market is in Chicago? Because it is so close to Atlanta.  
To farmers, to farmers, why future market stuff, because are we concerned?  
Wants 2 heads against the will.  
Nieta.  
I am on.  
Argon.  
A corn farmer. Yes, I like I have corn. But the problem that if it is raining, probably I will lose all my corn if it is sunny. I don't know and I want to hedge against weather. How can I hedge? By selling.  
Bye.  
Or, in the future.  
I am edgy. On the other hand, there are people that are speculating. Yep.  
And also there are arbitrators, people that, and scalpers, people that want to get a market, people that want to, oh, you are selling, you are buying and make markets more efficient.  
It says.  
I.  
What is that?  
We're talking about heads racing, we're talking about, yes, for futures heads racing is so simple. For futures, normally heads racing is around one.  
For features, the phrase is around one for buying features, and for selling features, is 9 for one.  
Its ratio is 4 max. Futures price would change, but the minus price change.  
And freeze your.  
Is there any of the underlying?  
Over or de code, make sense?  
This is one example, you can skip it, yes, and how can you press?  
How can you price?  
Teachers program.  
I've already done it. You got it, Nieta. You got it on the platform. What will you get?  
What we do that?  
by calculating the spot times 1 plus the which rate price to be yes.  
This is for stocks, in case no dividend is been paid.  
Absolutely important. Sport teachers study.  
Spot futures, but does this mean that you cannot play in the future by looking at future price?  
But you will see by looking at future price, the spot price.  
For price times, one plus the risk group.  
So, if the stock price goes up 1%, whole month's futures price will go up 1%.  
Agent.  
So if there is some attack in Iran and oil prices goes up, 30%, how much futures price will go up, 30%. Does this mean that in six months time, oil price is going to be hit now?  
It, it just tries to go down.  
I sense.  
Okay.  
Okay.  
Ohh, this is moving.  
Okay.  
I.  
Oh.  
Yeah?  
Next slide.  
If you know that the dividend is going to be paid.  
What are you going to do when calculating futures price?  
You will take off?  
The dividend that will be paid, except.  
Yes, you will split from the future price, you will pay the dividend. So if you know that the dividend is going to be paid,  
You apply.  
Same formula, but you subtract the dividend rate.  
Makes sense.  
Ana.  
Who is?  
Forens.  
So, so simple.  
I have dollars, yes? You try back.  
Groceries.  
In one year time, I will put my dollars.  
Times one plus the recent rate. Make sense?  
So...  
The spot.  
I have dollars, yes.  
Future, how much dollars I will have? What plus?  
The risk rate for dollars makes sense.  
Yes.  
On the other hand.  
I have.  
Luis.  
I have euros. How much euros would I have in the future?  
What class?  
that you don't reach your rate. Make sense? Please raise your feet. Please raise your feet.  
Holy!  
What is this number?  
This is today's exchange rate.  
What is this number?  
This is forward exchange rate.  
Once I know.  
Oh, it's in great, and I know.  
I know.  
European Central Bank. I'm on a federal reserve rates. I can calculate forward rates. Make sense?  
Yes.  
Let me explain something that song.  
Little bit confused, confused, yes?  
Are you gonna have a big night in three?  
Having drink?  
What is the current interest?  
Imagine that today there is a fixed exchange rate.  
Today, you will get one dollar.  
Fair euro, yes. They say great euro to dollar is of what makes sense.  
And, for example...  
For example.  
Federal reserve rates are higher.  
than European Central Bank rates. Make sense?  
Go with me?  
What is the curry rate? I want you just to understand what is the curry rate? Yes. Today I get $1.00 per Euro. Yes.  
USA is paying more return and because of because the interest rates in US are higher. I sense.  
What I will do in this case?  
If I can buy $1.00 per euro, what I will do.  
I am getting more return for US.  
For dollars? Yes, I am getting. If I have the dollars, I will get more return. Yes? What I will do today?  
Vidal.  
I will.  
Oral.  
You knows?  
Are you following me? Today I will borrow EUR. With these EUR, I will buy dollars.  
Then, with these dollars, I will borrow them.  
I will get the return and with the return I will pay back.  
The unit that I have received at that lower rate. Make sense?  
Do you understand that?  
If dollars are paying me more money than Euros?  
I will.  
Buy dollars with EUR.  
I will borrow money.  
I will receive my return, I will go back to EUR, and I will pay back about the money that I have.  
Makes sense.  
Please tell me.  
This is the capital trade. How would you profit from the interest rate difference, but I have already told you? Yes.  
What is the great given? It's a great one year from now.  
The break even exchange rate is calculating the whole rate.  
And what kind of risk do you think, exchange risk?  
What is the risk with what I'm saying? Yes, I start buying dollars, no? What can happen? What is the risk that I am taking?  
One year plan.  
Go now.  
No surprise.  
Can go up and Europe can go, so I am losing because...  
Dollar, as I say, we do know, and what I'm getting from the Gary trade, I am losing this from the forward.  
And how can I hence?  
By buying forwards, by buying forwards, I cannot take the current rate. Do you understand what I'm saying?  
There are a lot of people that think about how we pray as a freelance.  
During, during years, those people have been practicing carrying train with jets.  
Are you have audience? Which country is currency? Japan. Oh, Japan has been for years.  
Japan has been zero for years, so a lot of people were using yen in order to get a loan again, and with these yes, they were buying dollars, they were doing and they go back to yen and they paid back their gifts. What happened?  
These last three years, the game has grown down more than a 30%.  
A lot of people who are performing on Facebook games has los.  
Made sense.  
Do you understand this?  
You don't need to know this for the final.  
What is this? Well, I'm talking about this, because it has to do with general culture, we're going to.  
How would you hedge the exchange rate risk by buying forwards? But if you buy forwards, you will lose.  
The car we trade, if you had to say the same risk, what is your profit from the current trade?  
Make sense?  
Okay.  
Do you have any problem if today would be early?  
I think that we are at whatever. For me, how do you start with sample final one and sample final two?  
Please, the sooner you start, if you have questions regarding sample final one or sample final two next day, I don't have any problem in going through that. Yes, today's class and next day class.  
He says more here in order for you to start walking over the fire.  
Then we are not going to see really, really important things. Next day, we are not going to see really, really important things. Next day, we will talk about swaps.  
Worse.  
Around 400 trillions.  
What is in break? It's...  
Here in the markets, so swaps trading is absolutely me, but you are not gonna find anything regarding swaps in the finals. You understand what I'm saying?  
Okay.  
Hey.  
Commodities future.  
This question is...  
Is important normally.  
What I have told you before?  
Normally, there is a pictures spot party. Yes, normally there is a party.  
But...  
Dinner time, sir.  
There it can be.  
Issues regarding features and spot prices. Let me show you. Let me tell you one example where you can see this. Yes, normally features or features.  
Arbitrate in a three months basis. Make sense? In a three months basis. You buy a knowing futures, normally you don't close the contract in the future. You practice what is called a rollover. What is a rollover?  
You close your future contract, for example, you have both a future.  
By sending me over another feature, and this is a rollover.  
Normally, if you are buying pictures, yes, in order to speculate, you do a roll over, and you can buy, you can be in this contract forever, almost forever. Make sense?  
I...  
Let me tell you one story, quick story, yes?  
You have both?  
Annoying future.  
For 3 months.  
We are for example in Juan.  
January year 2020.  
I have both features contract.  
That has a term for ugly.  
Or, or, yes.  
Imagine that in March, in February, yes, there is a pandemic.  
I have both features.  
There is a pandemic in January.  
And the whole world stopped in February.  
What will happen with oil?  
Magdalena, anyone in the world, stop driving.  
So there is a lot of that. Do you understand what I'm talking about now?  
You have both a future program, yes?  
You should pay for doing.  
There is no problem in paying for the oil. But what is the problem with oil if you have bought a future contract? That you should take the oil.  
And the point is, you have both the oil, you should take the oil.  
Where are you gonna start this oil?  
In a world that has stopped two months ago, and all the places where you can store us is only our food.  
Is there somebody?  
I have bought this oil, but I don't have a place in order to store it.  
What can you do?  
That is on website.  
You have a water. You have body. You have faith for your oil.  
And you need to have a place in order to storage your oil.  
Who can you do this?  
You don't have my place.  
In every year, 2020.  
There were a lot of people, not one or two.  
Futures oil contracts were quoted with a negative price.  
People.  
That has both.  
Their contracts were paid in order to get rid of these contracts. Were paid. So there were people that asked, for example, a big banker.  
That you see body.  
in order to buy your  
You understand what I'm saying?  
This is crazy.  
This is absolutely crazy.  
In average 2020.  
Do you have a banker?  
You know what is a tanker? A seed that is there gas in order to take oil. Do you have an empty tanker?  
You were receiving money in order to buy.  
You were a bad.  
This is an incredible business.  
To receive money.  
Never Dubai.  
Got it from the point.  
What is the problem?  
Talking about commodities features.  
When talking about commodities features.  
You should start, I mean, imagine that there is the price of the of the sport.  
Mind at the price of the spot.  
There is a mismatch regarding spot and future. Yes, the spot is higher than future price. The spot is higher than future. What you will do?  
You will buy the spot, you will store it, and you will sell it in the future, so if the spot price is higher.  
You will sell features.  
Why buy stock? Make sense?  
If the spot is lower than future, we would do just the opposite.  
Doing.  
Seven, you buy.  
Make sense?  
So, when calculating futures price, not only you should consider the risk rate, but also you should consider the storage cost.  
Here, for example, we're talking about gold.  
So, that's all.  
This is expensive also, but because you can keep the ball in case you have, or this is something that had happened.  
BOCOS.  
Let me make a break, quick break, but there is some work.  
There is a water, what normally people buy?  
All, because all these are refugee, make sense.  
What had happened with the island war?  
Four times has gone down. Why? Because it was maximum.  
Why this have happened? Not only because it was so much, because there are a lot of people that is prepared in order to buy the D. Have you ever had to buy the D?  
What is buying the de? Oh, the price of one thing is going to go down. So once the price goes down, I will buy. And if you want to buy the de,  
You cannot buy with gold, but you will need in order to buy the beef.  
Do you need donuts?  
And because of that, dollar has gone up because there were a lot of people buying dollars. Trump wanted, what Trump wanted dollar to go down because he has a lot of public debt. But with Iron War, Trump what has gone is dollar going down.  
Going up, sorry, when, ohh, when, why gold is going down? Why? Because there were a lot of people trying to buy the vehicle.  
The other time I'm safe.  
By the need bees.  
Be prepared for a grass in order to bite sea.  
Once gold.  
Once there is a crisis, people prefer dollar than gold because they are prepared to buy when prices go down. And with gold, gold is listed.  
What can you do if you want to buy gold, but you don't want to bear students' cost? You can buy anything.  
Are you have all the gifts?  
Exchange trade call, but is an idea is a home that can be trade as if it were stock.  
Okay.  
So, regarding...  
Futures.  
At De.  
You can get the price of the future.  
With the present volume.  
And what is this thing regarding contact one backward laser?  
When talking about features of commodities, you should take into account the storage cost. And what I have told you regarding  
The pandemic, the pandemic and oil prices is one example of.  
Price patterns regarding pictures. Careful, because you can be trained, you can do arbitracks, but if there is a collapse.  
You can have future contracting ball.  
You can have a problem with demons that.  
Make sense?  
God bless you.  
Pictures.  
As with all derivatives, our prices are priced based on the underlying. In order to know the price of the derivative, you need to know the price of the underlying.  
And we're talking about commodity features.  
Considering that you should storage things and in three months time.  
Things can change.  
This can make life really complicated, just in case you are seculating.  
Is.  
Nobody.  
Normally, before the pandemic, understanding this was a little bit more difficult after the pandemic, understanding this is absolutely fear. Same happen with interest rate risk. Do you remember about immunization? Immunization? Do you remember about ratio?  
Before Silicon Valley Bank crisis, it was hard to explain what could happen if it did a rate change. After Silicon Valley Bank crisis, it's really simple to explain what had happened if it did a rate change.  
Any questions?  
We are done, let me guess.  
Great event name.  
Let me take attendance.  
Jessica.  
We went, and so I know.  
One, two, three, 4, 5, 6. We are nine people. Perfect. Enjoy.  
Monday, just two weeks left.  
We are almost, almost done.  
IN.  
Yeah.  
Yeah.  
Yes.  
Okay.  
Oh.