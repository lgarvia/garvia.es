---
titulo: "Financial Markets – Session 13: Duration, Banking Risk & AI Financing"
fecha: 2026-11-11
curso: "Mercados Financieros Internacionales (Fall 2026)"
sesion: 13
asignatura: Mercados Financieros Internacionales
institucion: ICADE
tipo: sesion
estado: preparado
---
---

# Financial Markets – Session 13: Duration, Banking Risk & AI Financing

## 1. Session Overview

Session 13 returned to fixed income in order to consolidate one of the most important concepts for the final exam:

> **Duration**

The session then connected duration with banking risk and with the broader question of how financial institutions manage their balance sheets.

The second half moved from theory to a current-market case study around the AI ecosystem, NVIDIA, customer concentration, CapEx requirements and financing.

The session therefore followed this structure:

$$
Bond\ Pricing \rightarrow \text{Duration} \rightarrow Modified\ \text{Duration} \rightarrow Interest\ Rate\ Risk \rightarrow Banking\ Risk \rightarrow AI\ Financing
$$
The central idea was that financial concepts remain useful even when technology and industries change.

---

# PART I — FIXED INCOME REVIEW

## 2. Bond Pricing

The class began with a standard bond.

Example:

- Face value: €1,000
    
- Coupon rate: 5%
    
- Annual coupon: €50
    
- Maturity: 4 years
    
- Yield: 5%
    

The cash flows are:

|Year|Cash Flow|
|---|---|
|1|€50|
|2|€50|
|3|€50|
|4|€1,050|

The price is:

$$
P= \frac{50}{1.05} + \frac{50}{1.05^2} + \frac{50}{1.05^3} + \frac{1,050}{1.05^4}
$$
Because:

$$
\text{Coupon  Rate=Yield}
$$
the bond trades at par:

$$
\boxed{
P=€1,000
}
$$
This remains one of the most important rules in fixed income.

---

## 3. The Only Mathematics You Must Control

The professor repeated that students should be able to:

1. calculate present value;
    
2. calculate the price of a bond;
    
3. calculate duration.
    

The logic remains:

$$
\boxed{
\text{Price=PV(Future  Cash  Flows)}
}
$$
The fixed-income chapter is therefore built on the same Time Value of Money framework introduced earlier in the course.

---

# PART II — DURATION

## 4. What Is Duration?

A common mistake is to answer:

> Duration is time.

That is incomplete.

The main financial interpretation is:

> **Duration measures interest-rate sensitivity.**

If market interest rates change, the bond price changes.

Duration helps us estimate how sensitive the price is to that change.

Therefore:

$$
\boxed{
Higher\ \text{Duration} \Rightarrow Higher\ Interest\ Rate\ \text{Sensitivity}
}
$$
---

## 5. Why Bond Prices Move

The basic relationship remains:

$$
Rates\uparrow  
\Rightarrow  
Bond\ Prices\downarrow
$$
and:

$$
Rates\downarrow  
\Rightarrow  
Bond\ Prices\uparrow
$$
Duration allows us to move from:

> What direction will the price move?

to:

> Approximately how much will it move?

---

## 6. Calculating Macaulay Duration

Each future cash flow contributes differently to the bond price.

First calculate:

$$
PV(CF_t) = \frac{CF_t}{(1+y)^t}
$$

Then calculate the weight of each cash flow:

$$
w_t=  
\frac{PV(CF_t)}{P}
$$
The weights must sum to:

$$
\sum w_t=1
$$
Macaulay duration is:

$$
\boxed{
D_M= \sum_{t=1}^{n}t\cdot w_t
}
$$
or equivalently:

$$
\boxed{
D_M= \frac{ \sum_{t=1}^{n}t\cdot PV(CF_t) }{P}
}
$$
---

## 7. Economic Interpretation

Duration is the weighted average timing of the bond's cash flows.

But its importance is financial:

> It summarizes the bond's sensitivity to interest rates.

A coupon bond has a duration shorter than its maturity because part of the cash is received before the final payment.

Conceptually:

$$
\text{Maturity} = \text{Final Payment Date}
$$

while:

$$
\text{Duration} = \text{Weighted Timing} + \text{Interest Rate Sensitivity}
$$

---

# PART III — MODIFIED DURATION

## 8. From Macaulay to Modified Duration

The class then introduced **Modified Duration**.

For annual compounding:

$$
\boxed{
D^* = \frac{D_M}{1+y}
}
$$

Modified duration gives a direct approximation of the percentage price change associated with a small change in yield.

---

## 9. Price Sensitivity

The approximation is:

$$
\boxed{
\frac{\Delta P}{P}  
\approx  
-D_{mod}\Delta y
}
$$
Suppose:

$$
D_{mod}=3.54
$$
and interest rates increase by:

$$
\Delta y=1%=0.01
$$
Then:

$$
\frac{\Delta P}{P}  
\approx  
-3.54(0.01)
$$
$$
\boxed{
\frac{\Delta P}{P}  
\approx  
-3.54%
}
$$
So a one-percentage-point increase in yield would reduce the bond price by approximately 3.54%.

---

## 10. Final-Exam Intuition

Students should be able to explain:

$$
Rates\uparrow  
\Rightarrow  
Prices\downarrow
$$
and:

$$
Higher\ \text{Duration} \Rightarrow Greater\ Price\ Reaction
$$
Duration is not simply a formula.

It is a risk measure.

---

# PART IV — WHY DURATION MATTERS FOR BANKS

## 11. Banking Business Is Risk Management

The session returned to the banking block.

A bank:

1. receives deposits;
    
2. lends or invests the money;
    
3. assumes risk.
    

The class repeated:

> **Banking business is fundamentally about confidence and risk management.**

---

## 12. Deposits and Loans

The basic structure is:

$$
Depositors  
\rightarrow  
Bank  
\rightarrow  
Borrowers
$$
Banks take money from the public and transform it into credit and investments.

This creates two particularly important risks:

- credit risk;
    
- interest-rate risk.
    

---

## 13. Credit Risk

Credit risk is the risk that a borrower does not repay.

If a bank lends money:

$$
\text{Loan  
 rightarrow  
Expected  Repayment}
$$
but the borrower fails:

$$
Default  
\rightarrow  
Bank\ Loss
$$
Therefore, lending requires evaluating whether the borrower is likely to repay.

---

## 14. Interest-Rate Risk

Banks also face interest-rate risk because assets and liabilities can react differently to changes in market rates.

This reconnects directly with duration.

If a bank owns long-duration bonds:

$$
Rates\uparrow  
\Rightarrow  
Bond\ Prices\downarrow
$$
A bank that ignores this exposure may experience significant losses.

This was again connected with the Silicon Valley Bank example discussed in previous sessions.

---

## 15. Banking Has Not Fundamentally Changed

The class emphasized that technology changes rapidly:

- mobile banking;
    
- fintech;
    
- blockchain;
    
- AI.
    

But the underlying banking business remains recognizable.

Banks still:

$$
\text{Take  Funding}
$$
and:

$$
\text{Allocate  Capital}
$$
while managing:

$$
\text{Credit  Risk  
+  
Interest  Rate  Risk  
+  
Liquidity  Risk}
$$
The interfaces change.

The fundamental financial problems remain.

---

# PART V — A BANKING CASE STUDY

## 16. Confidence Comes First

The session briefly discussed a banking case related to Paraguay.

The purpose was not to memorize the institution.

The lesson was:

> **A bank can appear modern, technological or innovative and still fail if it does not manage basic banking risks.**

The class highlighted concerns related to:

- deposits;
    
- lending;
    
- related-party exposure;
    
- risk management;
    
- confidence.
    

The conceptual lesson is more important than the specific case.

---

## 17. Technology Does Not Eliminate Risk

A financial institution may use words such as:

- fintech;
    
- AI;
    
- blockchain;
    
- digital banking.
    

But none of these concepts removes the need to manage:

$$
\text{Credit  Risk}
$$
$$
\text{Interest  Rate  Risk}
$$
$$
\text{Liquidity  Risk}
$$
A modern interface does not change the balance-sheet logic underneath.

---

# PART VI — FINANCIAL HISTORY AND UNEXPECTED EVENTS

## 18. Why Look Back?

The class returned to financial history.

The purpose of studying previous crises is not to claim that history repeats perfectly.

It is to identify patterns.

The class revisited:

- dot-com crisis;
    
- September 11;
    
- the period before Lehman Brothers;
    
- financial stress before 2008.
    

The important point was:

> Serious financial problems often exist before the event that finally makes them visible to everyone.

---

## 19. Expected vs Unexpected Events

Markets can often incorporate expected events in advance.

A scheduled election, central-bank meeting or published data release is known beforehand.

The event may still matter, but it is not necessarily a surprise.

By contrast:

$$
\text{Unexpected  Shock}
$$
can suddenly change:

- confidence;
    
- liquidity;
    
- risk perception;
    
- asset prices.
    

The session therefore distinguished between:

$$
\text{Known  Event}
$$
and:

$$
\text{Unexpected  Trigger}
$$
---

# PART VII — FROM FIXED INCOME TO THE AI ECOSYSTEM

## 20. Why Analyse NVIDIA in a Finance Class?

The class then shifted to NVIDIA and the AI ecosystem.

The reason was not technology itself.

The question was financial:

> **How sustainable is the financing structure behind the current AI investment cycle?**

This brings together:

- revenue;
    
- CapEx;
    
- customer concentration;
    
- financing;
    
- risk;
    
- expectations.
    

---

## 21. Revenue Concentration

The class examined the idea that a significant share of NVIDIA's revenues may depend on a relatively small group of major customers.

The financial concept is:

$$
\boxed{
\text{Concentration  Risk}
}
$$
If a large percentage of revenue comes from a few customers, then problems affecting those customers can have disproportionate consequences for the supplier.

Conceptually:

$$
Few\ Customers  
+  
High\ Revenue\ Share  
\Rightarrow  
Higher\ Concentration\ Risk
$$
---

## 22. Why Customer Concentration Matters

A company can have:

- strong revenue;
    
- high profits;
    
- rapid growth;
    

and still have structural vulnerabilities.

The right question is not only:

> How much revenue does the company generate?

but also:

> Where does the revenue come from?

This is an example of moving from a headline number to the structure behind the number.

---

# PART VIII — CAPEX, REVENUE & EARNINGS

## 23. Revenue Is Not Earnings

A central distinction in the class was:

$$
\text{Revenue} \neq \text{Earnings}
$$
Revenue represents sales.

Earnings remain after expenses.

Conceptually:

$$
\text{Revenue} - \text{Expenses} = \text{Earnings}
$$

A business can report enormous revenues while still requiring enormous financing.

---

## 24. What Is CapEx?

CapEx means:

$$
\boxed{
\text{Capital  Expenditure}
}
$$
It is money invested in long-term assets.

Examples include:

- data centres;
    
- servers;
    
- buildings;
    
- infrastructure;
    
- equipment.
    

CapEx is not normally expensed entirely in the year in which the asset is purchased.

The asset is recorded on the balance sheet and its cost is recognized over time through depreciation or amortization.

---

## 25. CapEx and Cash Flow

This distinction is critical.

A company may show accounting profits while simultaneously spending enormous amounts of cash on new assets.

Therefore:

$$
Accounting\ Profit  
\neq  
Cash\ Generation
$$
and:

$$
High\ Revenue  
\neq  
Automatically\ Sustainable\ Investment
$$
The financing question remains:

> Who pays for the CapEx?

---

## 26. The AI Investment Cycle

The classroom discussion focused on the relationship between:

- NVIDIA;
    
- large technology customers;
    
- massive data-centre investment;
    
- AI-related revenues.
    

The simplified loop was:

$$
\text{AI  Companies  
 rightarrow  
Large  CapEx}
$$
$$
\text{CapEx  
 rightarrow  
Purchases  of  Chips  and  Infrastructure}
$$
$$
\text{Purchases  
 rightarrow  
Supplier  Revenue}
$$
The important question is whether the ecosystem ultimately generates enough cash to justify the investment.

---

# PART IX — VENDOR FINANCING & CIRCULARITY

## 27. Financing Customers

The class explored the possibility that suppliers can support customers through forms of financing.

Examples discussed conceptually included:

- equity investments;
    
- extended payment terms;
    
- guarantees;
    
- other forms of vendor financing.
    

The important concept is:

$$
Supplier  
\rightarrow  
Customer\ Financing  
\rightarrow  
Customer\ Purchases\ Supplier\ Products
$$
---

## 28. Why Circular Financing Matters

If part of customer demand is financed by suppliers or by the same ecosystem benefiting from the expenditure, analysts should ask:

> How independent is the demand?

This does not automatically imply that the business is unsustainable.

But it creates an additional financial question:

$$
Demand
$$
versus:

$$
\text{Financed  Demand}
$$
This was one of the risks explored in class.

---

## 29. The Sustainability Question

The class framed the issue as:

$$
\text{CapEx

Current  Direct  AI  Revenue}
$$
and asked whether the investment cycle can remain sustainable.

The correct approach is not to jump immediately to a conclusion.

Instead, analyse:

- future revenue growth;
    
- operating margins;
    
- financing costs;
    
- asset lives;
    
- depreciation;
    
- customer concentration;
    
- demand sustainability.
    

The session treated this as an open financial question rather than a certainty.

---

# PART X — ACCOUNTING VS CASH FLOW

## 30. Why High CapEx Does Not Immediately Destroy Earnings

CapEx purchases create assets.

Therefore, accounting does not normally recognize the full expenditure immediately in the income statement.

Instead:

$$
\text{CapEx  
 rightarrow  
Asset}
$$
and later:

$$
\text{Asset  
 rightarrow  
Depreciation/Amortization}
$$
over its useful life.

This helps explain why:

$$
\text{Large  CapEx}
$$
can coexist with:

$$
\text{Positive  Accounting  Earnings}
$$
The cash-flow statement and balance sheet therefore matter enormously when analysing capital-intensive businesses.

---

# PART XI — SYSTEMIC THINKING

## 31. From Company Risk to Ecosystem Risk

The discussion then moved beyond NVIDIA itself.

If a small number of companies dominate:

- chip demand;
    
- cloud infrastructure;
    
- data centres;
    
- AI investment;
    

then the financial system may develop concentration.

The question becomes:

$$
\text{Company  Risk}
$$
or:

$$
\text{Ecosystem  Risk?}
$$
This is the same systems perspective used earlier when analysing banks.

---

## 32. Interdependence

Suppose:

- supplier revenues depend on customers;
    
- customers depend on continued financing;
    
- financing depends on capital markets;
    
- capital markets depend on expectations of future AI profitability.
    

Then:

$$
Supplier  
\leftrightarrow  
Customers  
\leftrightarrow  
Capital\ Markets
$$
becomes an interconnected structure.

Interconnection can strengthen an ecosystem during growth.

It can also transmit stress if expectations change.

---

# PART XII — AI AS AN ANALYTICAL TOOL

## 33. AI Can Help Analyse Complex Systems

The class used AI to explore:

- customer concentration;
    
- CapEx;
    
- revenues;
    
- financing relationships;
    
- possible risks.
    

This illustrates one of the most useful roles of AI:

$$
\text{Large  Amount  of  Information  
 rightarrow  
AI  Analysis  
 rightarrow  
Human  Judgment}
$$
But this process creates a new problem.

---

## 34. AI Has Biases

The class explicitly raised the question:

> If everyone uses AI to analyse the same company, could AI biases affect financial decisions?

This is increasingly relevant.

AI outputs can depend on:

- training data;
    
- source selection;
    
- model design;
    
- user prompts;
    
- commercial context.
    

Therefore:

$$
AI\ Output  
\neq  
Objective\ Truth
$$
It is another source of information that must be evaluated.

---

## 35. Do Not Outsource Judgment

The session returned to a recurring principle:

> Use AI to analyse, not to surrender judgment.

A good workflow is:

$$
\text{Question  
 rightarrow  
Initial  Human  Hypothesis  
 rightarrow  
AI  Analysis  
 rightarrow  
Challenge  
 rightarrow  
Revision}
$$
rather than:

$$
\text{Ask  AI  
 rightarrow  
Accept  Answer}
$$
---

# PART XIII — FIVE IDEAS TO LEAVE THE ROOM WITH

## 36. Five Core Ideas

### 1. Bond prices are present values

$$
\boxed{
P=PV(Future\ Cash\ Flows)
}
$$
---

### 2. Duration means interest-rate sensitivity

$$
\boxed{
Higher\ \text{Duration} \Rightarrow Higher\ Price\ \text{Sensitivity}
}
$$
---

### 3. Banking business is risk management

Banks must control:

$$
\text{Credit  Risk  
+  
Interest  Rate  Risk  
+  
Liquidity  Risk}
$$
Technology does not remove these risks.

---

### 4. Revenue does not equal financial sustainability

You must also analyse:

- earnings;
    
- cash flow;
    
- CapEx;
    
- financing;
    
- customer concentration.
    

---

### 5. AI can help find patterns, but judgment remains human

$$
\text{AI} = \text{Tool}
$$

not:

$$
\text{AI} = \text{Final Decision}
$$

---

# 37. Conceptual Map

$$
\text{Fixed  Income}
$$
$$
\downarrow
$$
$$
\text{Bond  Price}
$$
$$
\downarrow
$$
$$
\text{Duration}
$$
$$
\downarrow
$$
$$
\text{Interest  Rate  Risk}
$$
$$
\downarrow
$$
$$
\text{Banking  Risk}
$$
and:

$$
\text{Current  Markets}
$$
$$
\downarrow
$$
$$
\text{AI  Investment}
$$
$$
\downarrow
$$
$$
CapEx  
+  
Revenue  
+  
Financing  
+  
Concentration
$$
$$
\downarrow
$$
$$
\text{Risk  Analysis}
$$
---

# 38. Final Exam Focus

Students should be able to:

1. calculate the price of a bond;
    
2. calculate Macaulay duration;
    
3. calculate Modified Duration;
    
4. explain interest-rate sensitivity;
    
5. connect duration with banking risk.
    

The essential formulas are:

$$
P= \sum_{t=1}^{n} \frac{CF_t}{(1+y)^t}
$$
$$
D_M= \frac{ \sum t\cdot PV(CF_t) }{P}
$$
$$
D_{\text{mod}} = \frac{D_M}{1+y}
$$

$$
\frac{\Delta P}{P}  
\approx  
-D_{mod}\Delta y
$$
The formulas are important.

The interpretation is more important.

---

# Final Takeaway

Session 13 began with a bond and ended with the financing of the AI ecosystem.

At first, these may appear to be completely different topics.

They are not.

A bond requires us to understand:

$$
\text{Cash  Flows  
+  
Time  
+  
Interest  Rates  
+  
Risk}
$$
A bank requires us to understand:

$$
\text{Assets  
+  
Liabilities  
+  
Interest  Rates  
+  
Risk}
$$
An AI company or ecosystem requires us to understand:

$$
Revenue  
+  
CapEx  
+  
Financing  
+  
Concentration  
+  
Risk
$$
The common language is finance.

Technology changes.

Companies change.

Markets change.

But the fundamental questions remain:

> Where does the money come from?

> Where does it go?

> What risk is being taken?

> And what happens if expectations change?

---

# Transcription
11 de noviembre de 2026, 10:38a.m.
1 h 14 min 17 s
Okay, this going four things.  
Today, we are gonna talk.  
About fixed income.  
Yeah, we are going to talk about fixing command. Let me start.  
Please set it out.  
Exercises.  
Fix income, OK, fix income.  
I think we got, and then...  
No, today's strike, so I'm...  
I'm not taking attendance; I'm just gonna draw.  
From.  
I'm just gonna go through all the people that are here.  
Yeah.  
Hey.  
Ugly.  
Great. Do you know that today there is a Friday?  
Let me take this.  
But I will not.  
Let me start by telling you. Let me start with Excel. I want to open an Excel.  
All of all of you know how to calculate the price of above?  
Do you know how to calculate my work?  
Okay.  
Yes.  
You know, do you know how to do that?  
Yeah.  
Give me, give me numbers in order to call to have a ball.  
But you.  
I want five years.  
You did a great.  
Hey, Google.  
Hey.  
Is it?  
Big value.  
I mean.  
Fifty 10 years, OK, 50, 50, 1050, yes.  
Let me start in order to make the existing with a paddle. Yes, if I say paddle, what should be the key?  
This is coupon rate, coupon rate, 5%, 5%. Yep. Let me calculate the price. 1.05, 1.05 rise to the second, 1.05 rise to the third, 1.05 rise to the 4th. Yes.  
I have a bond that pay off 4 different coupons, not different, 4 coupons with a 5% rate maturity for years nominal value 1000 and the yield currently is 5%. So I can calculate the price and the price will be a  
The price is gonna be a house, and it's a far more, why? Because people break match with you, yeah.  
Today we are going to talk about...  
fixed income markets. And today I'm going to introduce something that I have already introduced and something that we will be asked in the final. That is too basic.  
Ratio, what are the only maths I want you to know? I want you to know how to calculate the price of a boat. In order to know how to calculate the price of a boat, you should discount.  
Future cash flows. I'm not going to work with capital. I'm not going to work with corporate finance, but I want you to discount future cash flow.  
I want you to know how to calculate present value of things. And then, not only that, when talking about fixed income, I want you to know how to calculate duration. Anyone knows what is duration?  
Are you there about to meet you?  
What is duration?  
Thanks, thanks for my thanks, don't forget if you no, not you, if anyone if I ask you what is the ratio and you answer time.  
You are simplifying my life a lot, because...  
And we just proceed and say, you don't know what is duration. What is duration? Duration is.  
interest rate sensitive. Oh max, the price, we change when interest rate change, yes?  
In this example, you get a very top 5%.  
Vega break goes up.  
It's next Wednesday.  
No, if you do Wednesday style.  
Maybe it works.  
Right, is that a great?  
What is gonna happen with price of bonds?  
They will go down. How much, how much depends on what on its on its duration.  
The higher the duration, the higher the same thing. Make sense? What are we going to do now? We are going to calculate duration.  
We are going to calculate the ratio, yes?  
Gonna calculate the ratio.  
Business.  
A thousand.  
This first payment?  
This first payment will respond with cash flow one. This second payment will respond with cash flow 2, cash flow 3, and cash flow 4. Yes?  
If I sum these three prices, I will get 1000.  
If I sum these three.  
Prices, price of first, price of second, price of third, and price of face value, plus plus coupon, I will get 1000, yes?  
If I divide this...  
Over.  
The price, the price, the price, each one.  
Over the price, yes.  
What I would have, I would have the weight.  
Over the price, this cash flow represented. Same with cash flow two, same with the third, same with the 4th. Make sense?  
Yep.  
This has been made in year one.  
This has been paid in year two. This has been paid in year three. This has been paid in year 4.  
With these weights, I would like to see how much of this price corresponds to year one, how much of this price corresponds to year two, how much year 3, how much year 4, and so forth. How can I do this?  
As simple as by multiplying this percentage times one, this percentage times 2, that is year 2 is 1 * 3, this times 4, by sum.  
These 3 numbers.  
I will get the average time at which this cash flows would be paid. What is the name of this average time? Duration, but duration is not time. A few minutes. I have time and is not time. Is the rate sensitive. Let me calculate that.  
Let me calculate that number.  
Fifty, 50, 50, 1000, these are.  
Now, rate is 5%.  
This plus percent number.  
The first.  
So, and if I send this, yeah, two main spice, I send this.  
I will let 1000, and let me calculate first.  
The way.  
What is R is present value over 1000, yeah?  
K.  
Four, 4, 4, make it 6% if I sum, okay.  
Is always I will get 100% make sense.  
I need an order to play.  
Duration, I should say, is well, thanks one.  
It will extend through, and duration will be in green.  
Three, four, and four.  
Red.  
Done.  
Sáez.  
Alright, we're going.  
What is this? This is called duration or not probably. I don't know how to write my colleague. Sorry, it will be Garcia. I will not go.  
Is your?  
I'm not a robot, I'm not a robot.  
Hey, I know he's better than me.  
Oh, I wrote it for me.  
So happy. I call it duration. It is called.  
I call you later.  
Why is this my colligration? Is my colligration?  
Easy, yes.  
But again, careful, they should not, yes, makes sense.  
Mm.  
What does this mean?  
What does this mean? This means that if interest rate changes, if interest rates goes up, yes?  
The price of this phone will go down, same as a zero coupon bond with this maturity.  
This will behave as a zero compound with this maturity. Make sense? All of you are with me? What I'm talking about? I'm talking about the internet rate sensitivity. Interest rate sensitivity. Then let me move.  
Do what is called more the five?  
Two days, I'm just gonna calculate modified duration. Modified duration is this number over one plus the G.  
And modified relation is 3.54.  
three-point.  
In this case, if you want to operate this one, you should divide it by 100 in order to have the person.  
What is qualifibration?  
For the vibration, we just write this one, that is right.  
In this.  
My phone.  
Wait, thanks.  
They as a.  
Zero, wait.  
This.  
I'm talking about modified duration, if interest rate changes.  
My phone.  
Price.  
People are very intended.  
One percent increases in the rate increases.  
In a 1%, I won price.  
Will.  
Decrease approach.  
Three points before modify and modify.  
Thank you, yep.  
What I want you to do, what I want you to know, how to calculate duration. What is the ratio? I will come back. OK, the ratio later. Yes.  
Now, you know.  
All this work?  
And.  
Now, you know, all all this work.  
And now you are used to work with Ruiz.  
We will do more exercises, we will review it for the students in class, but because you are just one, two, three, 4, past six.  
For me, good.  
I want you to know how to tell me this properly. I want you to get used to this, and so make sense.  
Why modify why duration is important?  
Why duration is important.  
I want to explain you something that is important.  
We have talked about banks. Last day of class, we talked about insurance. Did you came, Alexis, last day?  
Test class.  
That once that you were here.  
Yeah, no, last Wednesday you were here. Previous one, I think you were, you were.  
Don't remember. Whatever. I talk about insurance. Insurance is important.  
Insurance is important, but...  
Banking is more important as banking business.  
It's a system.  
You can control, you can contract an insurance, you pay the premium and you are gone. When talking about banking business,  
Banking business.  
I have talked about banking business a lot. I'm not gonna repeat what I have talked, but there are two ideas I want you to take.  
Two ideas in order to create one base and construct over that base.  
These ideas are important. If I say Paraguay, Paraguay, Paraguay, I'm banking business, anyone knows what I'm talking about?  
Paraguay and banking business.  
No one.  
Google it.  
Yep.  
Yep, Google it and tell me what is collapsed.  
Why we need products?  
Why did it collapse?  
What is banking business about?  
Banking business is about confidence. Banking business is about taking deposits from the public.  
Hey.  
And banking business has to do with once you take deposits, you give credit to people. Yes?  
In this case, these guys have been receiving deposits.  
From public money, they have received deposits from the state, yes? From pension funds, they receive money from pension funds, yes?  
and to whom these guys give the money, the loans.  
It's written that to themselves.  
You understand what I mean?  
They give money to themselves. Then also they talk, if you read a little bit, it's what is called in Spanish, a neo bank. I don't know if in English, it's a fintech also. It's a fintech also, probably they said a lot of AI, a lot of ChatGPT, they say a lot of...  
blockchain, a lot of honey swap. We are, we do things with the internet, yes?  
At a Belén.  
They were doing banking business, they didn't take care of.  
Risk.  
And their bank has collapsed.  
Okay, yeah, both.  
Nine that Paraguay population were of 100.  
60 people, 60 people over 100.  
Please, good morning. The fact is absolutely big.  
Normally, what does to manage a bank properly means? What does to proper manage a bank properly means?  
What that mean? What does it mean?  
They care about the internet rate, please.  
They care about interest rate risk and they care about credit risk.  
Silicon Valley Bank didn't take care about credit risk. Sorry, about interest rate risk. Interest rates increases in less than one year, more than 500 basis points, and they lost a lot of their assets.  
What I want you to see and to understand.  
Please, all of you, Vega.  
Banking business has not changed within last 30 years.  
Banking business has not saved within last 30.  
Years, last 30 years, and probably it won't change.  
That is mobile phones, that are computers, that is AI.  
Banking business.  
is still same business. They take money in the short term.  
They, you can place deposits, yes, and they give this money in the medium and long term.  
What is the name of this game? Interest rate risk.  
Interest rate risk. And what is the name of this game in the short term?  
Credit risk. What is credit risk? If I lend you money is because I know that you are going to pay me back this money. And in case you don't pay me, it's my problem, not yours. And because I don't want to have problems, I will make things properly in order to be sure that you are going to pay me. Make sense?  
Banking business is a business that can make you a lot of money, but can you can make you make a lot of money.  
But you should know what is duration.  
You should know what is duration, you should know what is interest rate risk.  
And trust me, it has no taste.  
Within the last 30 years.  
And.  
What things are going to change for sure? Is education going to change?  
Has education already changed?  
But what things are not gonna change?  
What things are not gonna change?  
Start.  
That's probably won't take Mariette.  
I'm talking about traditions, I'm talking about power elections.  
I mean, it should change. It should change.  
But.  
Probably, there are other things that will change before.  
Banking business.  
Will change apparently.  
At duration is not gonna change. What is fix income? Fix income means the framework.  
Fixed income is how states finance themselves. Yep, OK, let me move to...  
I know, yep.  
Then we move to another step.  
What is the first thing I told you? First day of class? I don't remember if it was the first. I start first day with this.  
I told you that there was something important that was gonna happen during this, no?  
I told you that there was something important the first day of...  
There is something important that is going to happen within this term. I think I also gave you.  
I also gave you.  
I think I also gave you.  
Here at the beginning.  
Okay, I tell him that.  
In.  
Oh.  
Big one now.  
Whatever.  
Per day of class.  
Thursday of class, I told you that during this term, the world gonna happen.  
I I talked about one thing in particular, which one was?  
Yeah.  
I told you that there was going to be a before and after determination. Yes?  
Already have it.  
I had to control me after with the religion.  
Yeah, something else?  
I want to, I'm gonna do it.  
I'm gonna go play.  
Interest rates. This graph is absolutely important. This graph is absolutely important. Yes, what is this graph about?  
This is the fair integrate. Yes, I'm gonna go to...  
Ninety 90s when not when?  
Hey.  
You are too young.  
Have you ever had the dog?  
dot com prices.  
When is birth?  
Around the year 1999, yes.  
Dotcom crisis was around here, yes.  
Fed increase interest rates and then Fed drop interest rate because of the crisis they started year 2000. But this point, look this point, please. This point is year 2001. This point happened one year after the dot-com crisis.  
bubble floating. Yes? What is this point? The 11th of September attack. Yep, there were problems regarding the dot-com crisis and one year after...  
There happened something and expected.  
The base, the market goes out, yes?  
Are you babe?  
This may fail to drop interest rates. Make sense?  
Then we recover and when this is Lehman Brothers collapse, look this point, please follow you.  
Please, all of you, just one second.  
This is Lehman's collapse.  
Demands collapse, and this is when problems start happening in the financial.  
Sector in the financial system.  
There was one bailout. One, the bailout of AI, AIG. The bailout of AIG happened one year before. What I want you to understand, please, there were problems one year and a half before Lehman's collapse. There were big problems. Yeah. But  
And the Lehman's collapse, not everything burst.  
Why I have to go to the past?  
Because what made?  
These things, what made these things?  
Something absolutely unexpected, something absolutely unexpected, in terms, elections were expected.  
Midterm elections were expected, yes?  
And if something expected is about to happen, this is not going to make.  
These things in a bubble-bursting way.  
Well, that's not what I'm saying.  
What?  
Elections? What did Donald Trump?  
wanted before the elections.  
What did Donald Trump wanted before the election?  
Peace.  
Yes, imagine that you are a journalist of the New York Times.  
And you know, oh, I have a...  
Scoop. I have an incredible scoop. Yes. What is this piece of new about?  
About Jensen Juan, and he's in love, or he has a relationship with a Chinese Jensen Juan, yes?  
what New York Times probably will do.  
Wait till you have the mid-term selections.  
Has passed in order to give this piece of revenue. You understand what I'm saying?  
I'm not telling that Donald Trump has taken this piece of new in order to make Nvidia bars. Now, what I'm saying is that this piece of new has been taken, has been hiding before. Yes?  
You understand what I'm saying?  
Ana.  
Let me.  
Yeah.  
Oh, sorry, you are not New York Times.  
It was California.  
Is this important?  
Is this important?  
Both have one.  
Is this important?  
Find our way.  
But a way back. In one day, everyone used grass. But a way back.  
Banking business is based on company.  
There is one day where his confidence is broken.  
The day after, the confidence is broken, if you are talking about banking me.  
There is 7 grand.  
And once you start, you see that these people have been speaking for years. I'm talking about Paraguay, yes?  
What is the point with Amelia?  
Cabral idea. First idea.  
Five week.  
Five, three, yes.  
Did you go? Let me open.  
I am.  
concern about.  
And Vega.  
Bye.  
I'm concerned about the media financial situation, yes.  
Uhh...  
One, two, two.  
And for me, E.  
English.  
for business and balancing remain exceptionally strong, but the company faced acute governance, legal and geopolitical risks, while demand for its financial health, yes, revenue growth, profitability, balance sheet strength, yes.  
Wouldn't Greece the USA successfully zero China assumption now.  
Who?  
They have.  
Race you or?  
Hey.  
I want you to this first review tells you.  
Market sentiment somehow.  
Did you read this? What is being said? Oh, MBDA is strong because revenues are strong. Yes?  
I'm going to start asking the machine about public information that NVIDIA has provided to SEC.  
Do they have?  
Play in concentration or not?  
Sixty percent of Nvidia's revenues, 60% of Nvidia revenues came from just four back.  
And they don't say which four clients are; they don't say I mean.  
Yes, has significant in the first half of fiscal, just 3D customers account for 44% of total revenue. Three means 44 and four means 61. Yes.  
Who are look this question? Please look this question.  
Who are these guys?  
I'm talking about the biggest.  
Find the biggest technological combined in the history of humanity, yes?  
Is the biggest company in the history of human being, yes?  
NVIDIA does not officially name its top customers in its SCCP, instead listening them anonymously as customer A, B, and C.  
Yeah.  
Text Vega Company 3 of.  
I'm back.  
Vega.  
There you go.  
Who will be?  
Thank you, Doctor.  
And I don't know, probably.  
servers makers and a direct customers, they don't name this.  
The big four behind those servers, assemblies, nearly open media center revenue trace back to a small group of mega cap.  
Microsoft, Amazon, Alpha, Beta, Beta.  
Or, I go and stay safety, specialized, but.  
Could you imagine the name of this ring?  
Companies.  
What am I talking about?  
I'm talking about systematic.  
Why AI has told tell me that I can trust Claudia? Because he has told me that revenues are high.  
Revenues are high. Yes? I'm asking about the revenue. With how much of these revenues came from the same client?  
From four more than six, from four more than six, yes, one of the names of these clients? No, I'm not going to tell you.  
Why? They don't know. Because I don't know. I don't know. It's a personal hypothesis, yes?  
But I am sure that we get finance this guy.  
What I'm talking about, I'm talking about finance.  
Foxconn on High Technology as the world's largest contract electronic manufacturer, Dell Technology  
And Microsoft.  
The 3 most likely direct customers: Foxcon, Dell Technology, and Microsoft. Yes.  
Okay.  
Food and Vega Finance.  
These guys?  
The video being financing.  
These guys?  
Yes, and media has aggressively aggressively.  
Finance its broader customers ecosystem through equity stakes. Lease guarantees and extended payments terms, though it does need to finance cash reach mega caps like Microsoft.  
Wall Street refers to this practice as circular financing or vendor financing, but a supplier.  
Do you know the tale of the Fernando?  
Hello, hello.  
Fair of State.  
Ohh, he was looking for the richest or for the most expensive.  
For the most expensive dress, and there was one.  
Person that create one incredible expensive risk become invisible.  
Yes.  
The River and the Vero.  
was great with this incredible press, the most expensive one. You want, you know, all the better. Everyone realized that.  
Got this all ready?  
Do you see the numbers?  
Direct equity investment lease back stocks credit warranties over 230 billion.  
Two 130 billion, yes.  
Let me go deeper.  
Play.  
Bego.  
Vega.  
One, two.  
No relation.  
A twin.  
Graphics.  
Please.  
than you.  
Great.  
Capex needs and revenue, yeah.  
Where are you?  
What is revenue? What they get from their client, yes?  
What do they call cafe?  
What do they call cup and tea?  
The amount of money they invest.  
How do they finance these capitals?  
How do they kind of discuss it with it?  
Yeah.  
Do this.  
Revenue was 130 billion against 3.24 billion in CapEx.  
Nvidia only had 3.24 billion in CapEx.  
Where does these traffic spoke?  
These topics, if you don't know, compared with the webinar. Where does these topics close?  
Where does this capex go? Why capex is needed?  
Okay.  
This is Vega. Tell me about Capex from there.  
See you guys.  
Revenues were of 200, revenues, revenues are around.  
Please, revenues are around...  
Two 100 billions, yes, get this number.  
Revenues are around 200 billion, yes?  
Revenues are around 200 million.  
Cat pics.  
Nvidia 4 largest customers: Amazon, Alphabet, Microsoft, and Meta have already spelled 490.  
3.3 billion of CapEx the first nine months of 2026.  
Hey, yeah, thank you.  
Last year, more than 600 million.  
Better family.  
You understand what I mean? They spending cafes.  
What is suffix?  
NVDS ribbon.  
How are they going to finance this capex? With their revenues, but their revenues are lower than capex.  
Be careful because this CAPEX is not CAPEX, it's OPEX. This CAPEX is been paid each year. So next year we are going to pay more CAPEX than this year. You understand me what I mean?  
You understand me what I need?  
And video revenue is 200.  
They finance their clients.  
And their clients invest in CapEx.  
More than, more than 600.  
And with these CapEx, they should create revenue, yes?  
Let me look for their revenues.  
Of their plans now.  
I want to.  
See, go about.  
Of the.  
All ego system.  
Total revenues of the whole ecosystem. And in these total revenues, I am including my control licenses, I am including Alphabet revenue from marketing, yes.  
Or AI software model liar.  
Global revenue is between 460 billion and 620 billion, yes?  
Traffic is much higher than Groving.  
And careful. Revenue in one year, don't pay tax. I'm talking about revenue. I'm not talking about earnings. Yes.  
I'm talking about ready; I'm not talking about early. You should be that.  
From this number, earnings, yeah?  
The cloud layer, 440 billion.  
Well, I like, I like this one. Absolutely, I like it.  
I like the one I don't want to lose, but it was here.  
Play.  
Okay, these are...  
Right.  
That's.  
About.  
Let's talk about herbs.  
What is topic?  
Capex is, please give me.  
10,000.  
I give you the something too, yes?  
Ten 1000 EUR each year.  
Yep, what are you going to do with this 10,000 EUR? Don't worry, I'm gonna have earnings, sorry, I'm gonna have revenues.  
Each year of 8000 revenue.  
But with this revenue, you should pay your employees, you should pay electricity, you should pay...  
Apple Store, you should pay everything.  
Yeah. How much money are you going to be, are you going to have after you pay all these expenses? Because revenues are important.  
96 billion of revenue, sorry of earnings.  
Now, operating income, 59 billion net income.  
72 upcoming recording.  
Odio.  
Okay.  
Give me the de.  
Number of the four.  
Then go.  
Topics.  
Revenue.  
And earnings.  
Bear.  
Annual CapEx: 900 billion.  
Annual CapEx 900 billion, yes?  
while generating approximately between 460 billion to 620 billion in direct AI revenue.  
creating a roughly 350 billion annual cash outflow gap. So the difference between this and this is 350 billion.  
Yes, got it.  
It is the difference between complex and revenue.  
And what about earnings?  
Would you like to stress this: What happens when media earnings high for scholars?  
Include.  
Earnings.  
This.  
Earnings are no.  
OK.  
Yeah.  
In blue counties.  
Revenues and pink.  
Earnings.  
In what is Capex?  
What is Capex?  
CapEx is something that, in theory, you pay one in life.  
Not it, yeah.  
Ruiz, I want to buy a house.  
How much is this house worth?  
One million.  
Whatever.  
What is your weight? One million is how much the house cost? How much do you get each year?  
I get 800,000.  
But.  
After you pay all things, you should pay a whole month.  
Do you have?  
I have 300,000, yes?  
And next year, always I want to buy a new house of 1 million. And next year, I'm going to buy a new house of 1 million. You understand what I mean? CapEx is something you don't pay just a house in order to have one house, one more house, one more house. You pay a house in order to do things with this house.  
Is this sustainable?  
Is this sustainable?  
Is NVIDIA helping the sustainability of this sector or is NVIDIA making the situation worse?  
by hiding in their public reports who are their clients, all these clients are being financed.  
You see what I mean?  
How do they, how do they still have net earnings?  
Because CapEx goes into the assets, and CapEx should be amortisized.  
CapEx are assets. CapEx goes to the assets and these assets.  
To be.  
Amortize probably in five years' time, so you take part of this capex into...  
So, at the end, what does this mean?  
Little bit more than just.  
Something regarding one date.  
This is something deep, deeper.  
Bill.  
Till the second.  
Of November, till the 2nd of November, everyone who look at Juan San Juan used to see someone.  
has a family, respectful. Yeah, after the 3rd of January, once you look, yes, and Juan, what do you think about?  
Careful!  
Good lie.  
Careful, he's mortal.  
Careful, he could he could lie, not not just me, he could lie his wife.  
Do you see that?  
Something is changing.  
This make me feel a...  
Vidal.  
Here.  
I or name all.  
Amazing!  
Wait, yes.  
Again, then.  
I think.  
We.  
Could be looking at the feet of an ice.  
Than you?  
Let's see.  
If he tells me, if Gemini tells me, open am I? Or if he, Gemini defense, show me.  
I am the first person asking this question to AI.  
What AI will answer?  
But no, the answer is there, no?  
I don't know what this answer. This answer have two phases. One that has.  
Ruiz, you are out.  
Does not know that I'm Luis. I have not registered myself.  
But on one hand, I mean, I could tell me, oh, you are so clever. 90% of the cases.  
I mean, I will ask for me how clever you are. If we were talking about cars or if we were talking about something else, I mean, I would be answer with.  
The reality that best that best do with my profile, but Gemini now.  
And now is defending his own business.  
Alpavid is in this game.  
So, what I will bet, you mean I have written?  
You are right, but...  
Got you.  
You should track, you should track the ecosystem, yes.  
Your concern is served by many institutional analysts connecting the macro financial fragility with the sudden governance crisis. Great, a classic tip of the iceberg risk profile while it's too early. Sorry, or why it's too early to prove.  
A hidden accounting or operational collapse.  
The timing and mechanism of these overlapping pressures explains why Wall Street reacts so violently.  
Why these risks compound each other, a personally?  
The export control revenue.  
A counter argument: why might not collapse?  
To keep a balanced view, analysts point out two major differences between NVIDIA today and past corporate implosions like Enron or World.  
We have got some physical demand.  
Fort Ruiz balance.  
NVIDIA's tips are physically keeping to Microsoft, Amazon, Google, and Meta.  
I am telling you that the media is going to collapse.  
I am just spelling what I'm thinking. And I am using AI in order to analyze this. How much of you would use AI in order to analyze a media situation?  
Would all of us have a bias when analyzing the media situation through AI?  
Would this bias been affecting?  
Four decisions.  
Yeah?  
Then I'm I.  
In order to fix, yes.  
As.  
Everyone is using AI, and AI has a bias.  
Answer.  
Bing.  
You bet.  
This bias it would be bias would be, no?  
Sorry.  
B.  
Diana.  
Vega.  
Is Nvidia going?  
Labs.  
Give me for about 50.  
Yes.  
Less than two person.  
Last thing I'm going to do. I didn't expect that.  
I love AI.  
I love, yeah, let me share this with you. I'm gonna share you all this information.  
Let me share this on one hand, and yes, let me go into...  
Calling market, and we are done with today's.  
Yeah.  
But any questions?  
I think that the analysis we have done regarding NVIDIA is forward.  
I need something that not everyone is looking at.  
Personally, I feel as if I were in year 2007.  
Talking about...  
something that can happen after Lehman's collapse. I'm not saying that the media is Lehman. I'm not saying that the media is work. I'm not saying that the media is model, that there's anyone is model. No. What I'm saying is that the media now is spent.  
and that something can happen that makes all these things a yes.  
And I am feeling as if I were talking about financial system year 2006, or I feel as if I were talking about the internet year 1999.  
Do you enjoy the weekend?
