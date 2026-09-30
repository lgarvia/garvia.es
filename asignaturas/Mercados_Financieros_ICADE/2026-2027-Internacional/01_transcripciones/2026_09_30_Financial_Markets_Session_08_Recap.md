---
titulo: "Financial Markets – Session 8: Interest Rate Sensitivity, Forward Rates & Equity Valuation"
fecha: 2026-09-30
curso: "Mercados Financieros Internacionales (Fall 2026)"
sesion: 8
asignatura: Mercados Financieros Internacionales
institucion: ICADE
tipo: sesion
estado: preparado
---

# Financial Markets – Session 8: Interest Rate Sensitivity, Forward Rates & Equity Valuation

## 1. Session Overview

Session 8 closed the first major block of the course:

- introduction to financial markets;
- Time Value of Money;
- fixed-income valuation;
- bond pricing;
- interest-rate risk.

The session then introduced three additional ideas:

1. **APR versus Effective Annual Rate (EAR)**;
2. **spot rates and forward rates**;
3. a first approach to **equity valuation through the Gordon Growth Model**.

The underlying principle remained exactly the same as throughout the previous sessions:

> **Finance is fundamentally about moving cash flows through time using the appropriate rate.**

---

# PART I — INFORMATION, TECHNOLOGY & LEARNING

## 2. Automate What Matters

The class began with a general working principle:

> **If something important can be done in less than one minute, do it. If something important takes longer but is repeated frequently, try to automate it.**

Technology should remove unnecessary friction.

The objective is not automation for its own sake. It is to reduce the amount of time spent on repetitive tasks so that more attention can be dedicated to:

- thinking;
- learning;
- analysing;
- making decisions.

---

## 3. Organize the Data Before Choosing the Technology

A principle from previous sessions was repeated:

> **Forget about the technology for a moment. Think about how your data is organized.**

AI systems will change rapidly.

The important asset is the information itself:

- notes;
- documents;
- emails;
- transcripts;
- projects;
- personal knowledge.

If information is fragmented across many systems, using future AI tools becomes more difficult.

If information is organized and accessible, new technologies can be connected much more easily.

The general architecture is:

$$
Organized\ Information
+
AI
\rightarrow
Useful\ Work
$$

The model may change.

The information architecture remains.

---

## 4. AI Agents and Human Supervision

The class demonstrated different AI systems capable of accessing information and carrying out tasks.

The main distinction was between:

- external systems with access to personal data;
- locally controlled systems where the user maintains greater control over the information.

The class also emphasized that highly capable systems require careful supervision.

Automating preparation is different from automating final decisions.

For example, AI can help:

- organize emails;
- prepare responses;
- retrieve information;
- summarize previous classes.

But important outputs should still be reviewed before being sent or used.

---

## 5. Errors Are Part of the Process

The live demonstrations also produced mistakes.

The system initially retrieved the wrong course when asked to summarize the previous session.

It then corrected the mistake and located the correct Financial Markets session.

This provided an important practical lesson:

> **A useful information system should not hide errors. It should detect them, correct them and improve the process.**

The same principle applies to human learning.

Trying something once and failing does not mean the process is useless.

Complex workflows frequently require iteration:

$$
Attempt
\rightarrow
Error
\rightarrow
Correction
\rightarrow
Improved\ System
$$

---

# PART II — REVIEW OF FIXED INCOME

## 6. Bond Pricing: The Core Principle

The session returned to a familiar bond example.

Consider a bond with:

- Face value: €1,000
- Coupon rate: 4%
- Annual coupon: €40
- Maturity: 5 years
- Market yield: 4%

Its cash flows are:

| Year | Cash Flow |
|---|---:|
| 1 | €40 |
| 2 | €40 |
| 3 | €40 |
| 4 | €40 |
| 5 | €1,040 |

The bond price is:

$$
P=
\frac{40}{1.04}
+
\frac{40}{1.04^2}
+
\frac{40}{1.04^3}
+
\frac{40}{1.04^4}
+
\frac{1,040}{1.04^5}
$$

Because:

$$
\text{Coupon Rate} = \text{Market Yield} = 4\%
$$

the bond trades at par:

$$
\boxed{P = \text{€}1,000}
$$

This should increasingly be recognized without performing the complete calculation.

---

## 7. Premium, Par and Discount

The relationship remains:

### Coupon Rate = Market Yield

$$
\text{Price} = \text{Face Value}
$$

The bond trades **at par**.

### Coupon Rate > Market Yield

$$
\text{Price} > \text{Face Value}
$$

The bond trades at a **premium**.

### Coupon Rate < Market Yield

$$
\text{Price} < \text{Face Value}
$$

The bond trades at a **discount**.

This relationship follows directly from present-value mathematics.

---

# PART III — DURATION

## 8. Duration Is Not Simply Maturity

Duration was revisited because it is essential for understanding fixed-income risk.

A five-year bond has a maturity of five years.

But the investor receives some cash flows before the final year.

Duration therefore incorporates both:

- **when** the payments occur;
- **how important** each payment is to the bond's value.

The central intuition introduced in class was:

> **Duration measures interest-rate sensitivity.**

The higher the duration, the more sensitive the bond price is to changes in interest rates.

---

## 9. Calculating Duration

For each future cash flow:

1. calculate its present value;
2. calculate its weight in the total bond price;
3. multiply that weight by the time at which it is received;
4. add all the weighted maturities.

The general expression is:

$$
D=
\frac{
\sum_{t=1}^{n}
t\cdot PV(CF_t)
}
{P}
$$

For the five-year 4% coupon bond used in class:

$$
P = \text{€}1,000
$$

and duration is approximately:

$$
\boxed{D\approx4.6\text{ years}}
$$

The maturity is five years, but the duration is lower because some cash is received earlier through coupons.

The class concentrated on the **intuition and calculation of duration**. Modified duration was not formally developed at this stage.

---

## 10. Duration and Price Sensitivity

The important interpretation is:

$$
Higher\ Duration
\Rightarrow
Higher\ Interest\ Rate\ Sensitivity
$$

If two bonds experience the same change in interest rates, the bond with the greater duration will normally experience the larger percentage price movement.

Therefore, duration allows us to move beyond the basic rule:

$$
Rates\uparrow
\Rightarrow
Bond\ Prices\downarrow
$$

and ask the more interesting question:

> **By how much?**

---

## 11. Price and Interest Rates: A Non-Linear Relationship

The session again plotted bond prices against different market yields.

For the 4% coupon bond:

- at a 4% yield, price equals €1,000;
- if yield rises above 4%, price falls below €1,000;
- if yield falls below 4%, price rises above €1,000.

Thus:

$$
r\uparrow \Rightarrow P\downarrow
$$

$$
r\downarrow \Rightarrow P\uparrow
$$

However, the relationship is not linear.

The bond price–yield function is curved.

Over very small changes in rates, the curve can be approximated by a straight line.

This is precisely why duration becomes useful as an approximation of local interest-rate sensitivity.

---

# PART IV — APR AND EFFECTIVE ANNUAL RATE

## 12. Nominal Rates Can Be Misleading

The class then introduced the distinction between a quoted annual rate and the **effective annual rate**.

Suppose an investment quotes:

$$
APR=12\%
$$

If interest is compounded only once per year:

$$
EAR=12\%
$$

But if compounding occurs more frequently, the effective annual return is higher.

---

## 13. Effective Annual Rate

If:

- $APR$ is the nominal annual percentage rate;
- $m$ is the number of compounding periods per year;

then:

$$
\boxed{
EAR=
\left(
1+\frac{APR}{m}
\right)^m-1
}
$$

### Annual compounding

$$
EAR=(1.12)^1-1
$$

$$
EAR=12\%
$$

### Semiannual compounding

$$
EAR=
\left(
1+\frac{0.12}{2}
\right)^2-1
$$

$$
EAR\approx12.36\%
$$

### Quarterly compounding

$$
EAR=
\left(
1+\frac{0.12}{4}
\right)^4-1
$$

$$
EAR\approx12.55\%
$$

### Monthly compounding

$$
EAR=
\left(
1+\frac{0.12}{12}
\right)^{12}-1
$$

$$
EAR\approx12.68\%
$$

### Daily compounding

$$
EAR=
\left(
1+\frac{0.12}{365}
\right)^{365}-1
$$

$$
EAR\approx12.75\%
$$

---

## 14. The Important Idea Behind EAR

The formula is less important than understanding the mechanism.

More frequent compounding means that returns themselves begin generating returns sooner.

Therefore:

$$
Higher\ Compounding\ Frequency
\Rightarrow
Higher\ Effective\ Annual\ Rate
$$

when the quoted nominal rate remains unchanged.

Again:

> **Compounding is doing the work.**

---

# PART V — SPOT AND FORWARD RATES

## 15. What Is a Spot Rate?

A **spot rate** is the annualized rate applying from today until a specific future maturity.

Examples:

$$
s_1
$$

is the one-year spot rate.

$$
s_2
$$

is the two-year spot rate.

$$
s_4
$$

is the four-year spot rate.

Conceptually:

$$
Spot\ Rate:
Today\rightarrow Future\ Date
$$

---

## 16. What Is a Forward Rate?

A **forward rate** applies between two future dates.

For example:

$$
f_{1,2}
$$

represents the one-year rate applying between year 1 and year 2.

Similarly:

$$
f_{2,4}
$$

represents a rate applying between year 2 and year 4.

Conceptually:

$$
Forward\ Rate:
Future\ Date\rightarrow Later\ Future\ Date
$$

---

## 17. Spot Rates and Forward Rates Must Be Consistent

Suppose we invest for four years using the four-year spot rate.

Our final wealth is:

$$
(1+s_4)^4
$$

Alternatively, we could reproduce the same investment through consecutive shorter-term investments:

$$
(1+s_1)
(1+f_{1,2})
(1+f_{2,3})
(1+f_{3,4})
$$

Under the no-arbitrage logic developed throughout the course:

$$
\boxed{
(1+s_4)^4
=
(1+s_1)
(1+f_{1,2})
(1+f_{2,3})
(1+f_{3,4})
}
$$

Two strategies generating equivalent future cash flows must produce equivalent accumulated values.

---

## 18. Calculating a Forward Rate

Suppose:

$$
s_1=2\%
$$

and:

$$
s_2=3\%
$$

What one-year forward rate between years 1 and 2 is implied by the market?

The two-year investment must satisfy:

$$
(1.03)^2
=
(1.02)(1+f_{1,2})
$$

Therefore:

$$
1+f_{1,2}
=
\frac{(1.03)^2}{1.02}
$$

and:

$$
\boxed{
f_{1,2}
=
\frac{(1.03)^2}{1.02}-1
}
$$

which gives approximately:

$$
\boxed{f_{1,2}\approx4.01\%}
$$

The intuition is simple.

If the average annual return over two years is 3%, while the first year only offers 2%, the implied rate for the second year must be higher.

Because returns compound geometrically, the exact answer is slightly above 4%.

---

## 19. Calculating a Multi-Year Forward Rate

Suppose we know:

- the two-year spot rate $s_2$;
- the four-year spot rate $s_4$;

and we want the two-year forward rate covering years 2 to 4.

The relationship is:

$$
(1+s_4)^4
=
(1+s_2)^2
(1+f_{2,4})^2
$$

Therefore:

$$
\boxed{
f_{2,4}
=
\left[
\frac{(1+s_4)^4}
{(1+s_2)^2}
\right]^{1/2}-1
}
$$

This is simply another application of compounding and geometric returns.

The mathematics is not fundamentally new.

---

# PART VI — AN IMPORTANT CORRECTION: SILICON VALLEY BANK

## 20. Correcting the Previous Session

The professor explicitly corrected a statement made in the previous class.

During Session 7, the intervention following the Silicon Valley Bank crisis had been described as a Federal Reserve bailout of the bank.

The correction was:

> **Silicon Valley Bank itself was not bailed out by the Federal Reserve.**

The bank's shareholders were not protected from the failure.

The intervention focused on protecting depositors and preventing the crisis from spreading through the financial system.

This distinction is important.

### Bailout of shareholders

Would protect the owners of the failed institution.

### Protection of depositors / financial stability

Protects customers and attempts to prevent systemic contagion.

These are not the same thing.

The correction also illustrated the value of reviewing class transcripts and using tools to identify possible mistakes.

---

# PART VII — FROM FIXED INCOME TO EQUITY

## 21. Why Less Time on Equity Valuation?

The class briefly moved from fixed income toward equity valuation.

Fixed income received substantial attention because it provides an especially clear environment for applying:

- Time Value of Money;
- discounting;
- interest rates;
- cash-flow valuation.

Equity valuation can use the same principles, but future stock cash flows are significantly more uncertain.

Students may also have encountered many equity valuation techniques in previous finance courses.

The objective was therefore not to develop an extensive equity-valuation chapter, but to show how the same financial logic applies.

---

## 22. Constant Dividend Model

Imagine a stock that pays the same dividend forever.

That stream is a perpetuity.

Therefore:

$$
\boxed{
P_0=\frac{D}{k}
}
$$

Where:

- $P_0$: current stock price;
- $D$: perpetual dividend;
- $k$: required rate of return.

This is exactly the same perpetuity formula introduced earlier:

$$
PV=\frac{C}{r}
$$

The asset has changed.

The mathematics has not.

---

## 23. Gordon Growth Model

A more realistic version assumes that dividends grow forever at a constant rate $g$.

The Gordon Growth Model becomes:

$$
\boxed{
P_0=
\frac{D_1}{k-g}
}
$$

where:

- $D_1$: dividend expected next period;
- $k$: required rate of return;
- $g$: expected perpetual dividend growth rate.

If:

$$
D_1=D_0(1+g)
$$

then:

$$
\boxed{
P_0=
\frac{D_0(1+g)}{k-g}
}
$$

The Gordon model is therefore simply the present value of a **growing perpetuity**.

---

## 24. Required Return and CAPM

The required return $k$ can be estimated using frameworks such as the Capital Asset Pricing Model:

$$
\boxed{
k=r_f+\beta(R_M-r_f)
}
$$

Where:

- $r_f$: risk-free rate;
- $R_M-r_f$: market risk premium;
- $\beta$: sensitivity of the stock to market movements.

Beta can be expressed as:

$$
\boxed{
\beta=
\frac{\text{Cov}(R_i, R_M)}
{\text{Var}(R_M)}
}
$$

The purpose of the session was not to develop CAPM in depth, but to show where the discount rate used in equity valuation may come from.

---

## 25. Growth and Retained Earnings

Growth can also be connected to the proportion of earnings retained within the company.

If:

- $b$ is the retention ratio (plowback ratio);
- $\text{ROE}$ is Return on Equity;

then:

$$
\boxed{
g=b\times ROE
}
$$

The retention ratio represents the proportion of earnings not distributed as dividends.

Those retained earnings can be reinvested in the business.

This creates a connection between:

- profitability;
- dividend policy;
- reinvestment;
- growth;
- valuation.

---

## 26. The Same Logic Everywhere

The Gordon model reinforces one of the major conclusions from the first eight sessions.

A bond is valued through:

$$
\text{Price} = \text{PV}(\text{Future Bond Cash Flows})
$$

A stock can also be approached through:

$$
\text{Price} = \text{PV}(\text{Future Equity Cash Flows})
$$

Different assets involve different assumptions and levels of uncertainty.

But the fundamental financial logic remains:

$$
\boxed{
\text{Value} = \text{Present Value of Expected Future Cash Flows}
}
$$

---

# PART VIII — MIDTERM PREPARATION

## 27. What Students Should Master

The professor emphasized that the objective of the midterm is not to perform complicated Excel modelling.

Students should understand the financial logic and be able to solve the fundamental calculations.

Students should be comfortable with:

### Time Value of Money

$$
FV=PV(1+r)^t
$$

$$
PV=\frac{FV}{(1+r)^t}
$$

### Multiple Cash Flows

$$
PV=
\sum_{t=1}^{n}
\frac{CF_t}{(1+r)^t}
$$

### Bond Pricing

$$
P=
\sum_{t=1}^{n}
\frac{C}{(1+y)^t}
+
\frac{FV}{(1+y)^n}
$$

### Holding Period Return

$$
HPR=
\frac{P_1-P_0+Income}{P_0}
$$

### Arithmetic and Geometric Returns

$$
\bar r_A=
\frac{\sum r_t}{n}
$$

$$
\bar r_G=
\left[
\prod_{t=1}^{n}(1+r_t)
\right]^{1/n}-1
$$

### Effective Annual Rate

$$
EAR=
\left(
1+\frac{APR}{m}
\right)^m-1
$$

### Forward Rates

$$
(1+s_n)^n
=
(1+s_m)^m
(1+f_{m,n})^{n-m}
$$

### Duration

Understand the intuition:

$$
Higher\ Duration
\Rightarrow
Higher\ Interest\ Rate\ Sensitivity
$$

---

## 28. Important Dates

### Problem Set 2

Due:

**14 October 2026**

### Midterm

Scheduled for:

**26 October 2026**

The professor indicated that additional information about the structure of the midterm, including short and longer questions, will be provided in a later review session.

---

# 29. Five Ideas to Leave the Room With

### 1. Organize information before worrying about the AI model

Good information architecture survives changes in technology.

---

### 2. Duration tells us how sensitive a bond is to interest rates

$$
Higher\ Duration
\Rightarrow
Higher\ Price\ Sensitivity
$$

---

### 3. Compounding frequency matters

A 12% nominal annual rate is not necessarily a 12% effective annual rate.

---

### 4. Spot and forward rates are connected by no-arbitrage

Different investment strategies generating the same future payoff must be financially consistent.

---

### 5. Bonds and stocks use the same fundamental valuation principle

$$
\boxed{
\text{Value} = \text{PV}(\text{Expected Future Cash Flows})
}
$$

---

# 30. The Course So Far

After eight sessions, the conceptual structure of the course can be summarized as:

## Financial System

$$
Savings
\rightarrow
Financial\ Markets
\rightarrow
Investment
$$

## Fundamental Finance

$$
Risk
+
Return
+
Time
+
Uncertainty
$$

## Time Value of Money

$$
PV
\leftrightarrow
FV
$$

## Fixed Income

$$
Future\ Cash\ Flows
\rightarrow
Discounting
\rightarrow
Bond\ Price
$$

## Interest-Rate Risk

$$
Rates\uparrow
\Rightarrow
Bond\ Prices\downarrow
$$

## Term Structure

$$
Maturity
\rightarrow
Spot\ Rates
\rightarrow
Forward\ Rates
$$

## Equity Valuation

$$
Expected\ Dividends
\rightarrow
Discounting
\rightarrow
Stock\ Value
$$

The different chapters are therefore not isolated topics.

They are different applications of the same core financial principles.

---

# Final Takeaway

Session 8 effectively closed the first major mathematical block of the course.

We began several sessions ago with one formula:

$$
FV=PV(1+r)^t
$$

From that single relationship we have developed:

- present value;
- compounding;
- multiple cash flows;
- perpetuities;
- annuities;
- bond valuation;
- Holding Period Return;
- duration;
- effective annual rates;
- spot rates;
- forward rates;
- and finally a first equity valuation model.

The instruments change.

The language changes.

The uncertainty changes.

But the underlying logic remains remarkably stable:

> **Identify the future cash flows, understand their risk and timing, and bring them to the same point in time using the appropriate rate.**


# Transcripción
30 de septiembre de 2026, 10:33a.m.
1 h 28 min 21 s
Anything is recorded.  
I...  
You are the Finnish. Who is from Finland? No. Both of you. Last year, I used to have a Finnish student, but she was a woman. So the only thing I know is this. I did not practice Finland. One thing I want.  
Well, I have a lot of things in my head and I want to tell all. I think I will do it. A person and service.  
For me, the most important thing is one thing that I have already said: if you can do something in less than one minute.  
Lee.  
I have connect myself in less than one minute. Then other things all distrust.  
That length more than one minute, but I have connected in less than one minute. The second idea connected with this fair idea, if you can.  
If something is important for you, if something is important for you, and you do this important thing, throw off any life.  
Try to automatize it in order to do it in less than one minute.  
Technology help us. Yes, technology help us. And this is not, this is something.  
I'm not talking now; I need to turn on the computer.  
In case there is no computer, I don't care. I don't care, but I would like to work with, I would like to show you Google Notebook LM.  
Let me start on this, this is on the way.  
Second important thing.  
I.  
It's Wednesday or today?  
Next Wednesday is next Wednesday or before?  
Wednesday.  
I cannot come to class because I have...  
So, so there won't be glass. Yeah.  
Before I think, next Monday, not this Monday, next Monday are holidays.  
So, if you don't come...  
This.  
One day, we won't see each other till...  
Next weather.  
Nothing bad. I will share transcriptions. I will open one new way of communication. We will talk about a lot of things. Probably I will.  
There are a lot of things, and I will tell in case I can turn on the computer.  
Yes.  
Okay.  
If I cannot turn on, I don't have any problem in teaching always.  
With this, that I would like to connect with you and not look at it.  
Orphies.  
Yeah, it's going, and the third it goes.  
Thanks.  
Today's class?  
Today's class, we will close everything dedicated to introduction. Yes, introduction of the course and value of money.  
Exercises, fixed income valuation, and I will hear it is great.  
Sáez.  
Right.  
I.  
And.  
It's incredible that I have my system ready. No, no.  
This computer, this room.  
Yeah, here it goes.  
And.  
Like to connect also.  
I.  
For Google facilities.  
Okay.  
One, two, three, 4, 5.  
Are you?  
Here, if you want to access to the Google Notebook in the description of the group, you have the in the description of the group, you have the link, and also the CM7.  
Session 6, let me download session 6, save and download session 7, save. Then here I've got one, two, three, 4, 5. Let me add.  
Low files.  
You can do this by yourself. You don't need Google Notebook.  
Belén, in order to read.  
Old transcripts, and I'm gonna hear.  
Hey, I'm gonna grade, I'm in the map.  
I'm gonna tell him.  
We throw a no.  
Yes, finance. I want to review the whole.  
Day.  
And also, because I don't know if...  
Yeah, please, please.  
Okay, this goes on one hand. Then also, I want to share with you, there are a lot of things. Comida, here, I want to share with you, somebody has.  
Mm.  
Here, here, have you seen this webpage?  
Have you seen these web page?  
I don't want to talk about politics, and I am not gonna talk about politics.  
A new web, thanks.  
Have you seen this web page?  
Hi.  
What is this web page?  
Well, it's the first time I'm using this web page, yes?  
Good thing.  
Oh.  
I mean, I've got people in this WhatsApp group that they have talk with the with the webpage, yes.  
They have used the... Can you talk in Spanish? Yes, I can. Yes.  
Yeah.  
Hi.  
Are you there?  
It works.  
But you can do, OK. Hey, I thought I thought it was gonna work, yes.  
America golf.  
Why I'm saying this with you? Because I have just discovered.  
I have never used it because I want to share some thoughts with you. I don't want to talk and I won't talk about politics, but I am talking non-stopping about macroeconomics, about finance, about what is going on in the world. Yes? What happened last week?  
See, see, B6.  
The States.  
Before that, visit.  
Sam Alman, did I share with you the video with Transformers with the cars? Did I share that video with you? Yes. Yeah, before that visit, before that visit.  
Ask for a slowdown, yes?  
After that, visit.  
OpenAI released two models, Cloud released two more models, and there is one thing for sure. Nobody's going to slow down anything.  
This web page is fully.  
Operated by AI.  
Probably now I cannot access due to high demand. I don't know. I don't know. I have tried. Yes.  
What is my thought? What is the only thought?  
I want to share with you.  
Why?  
US government.  
Prepare one web page.  
Why, Europe?  
We don't know even what to do, but the government is preparing one web page.  
While this is happening, China is updating a whole country.  
China is updating a whole country. Yep.  
Can we compete? Probably compete is not the war.  
Because can I compete against 1.500,000 people?  
Absolutely not. But can I cooperate, work with them, understand what they are doing? Because why?  
Open AI or Cloud.  
Release one new system, close in China.  
A new system is released, but with open code.  
With open code.  
What I'm telling you to do?  
Don't slow down and continue thinking and continue working and continue doing whatever you are meant to do. Make sense?  
Okay, more things.  
More things. I will forget about America.co. I will try one more time.  
Is someone there?  
But.  
Okay.  
Thanks.  
Happy to be talking.  
Please, I am here, please.  
Students.  
Is go wearing this web.  
I'm not gonna tell him or her or she or whatever. I'm gonna, I'm not gonna tell you.  
That I am, I'm not going to tell the AI that I am in Spain yet, yes?  
I will look at how American works so I can explain it clearly to you and your students. How to try. Open, type a question, good classroom example. How do I renew a passport? How do I find a federal job? How do I take a benefit program requirement? Yes.  
Right. This is finance. Yes.  
I am upload, I am giving you context, yes.  
Finance. OK, last room. Oh.  
Oh, Felic Money Smart.  
Money skills curriculum, I like this one, sir.  
Oh, contact, whatever. Hey, how can I help? Whatever. Common class taxes, federal students. Yeah.  
Talking more about...  
Yo, please.  
About hope, why?  
The states are the.  
The globe.  
Amazing.  
Web page China is developing.  
At home.  
And Europe.  
And, you know?  
Knop.  
Ohh.  
Okay.  
He's fast. He's so fast. What does to be fast means? They have computer computer power, and also not only they have computer power, but also...  
All this computer power belongs to the government, belongs to them. There are no queues, yes? I don't provide political commentary or geopolitics analysis. I can help with official US government services and information benefits. What government program or service should we look at for the class?  
Yep.  
Yes, in order to finish.  
I am in.  
Hey.  
Yep.  
I have received first advice before. Probably the system, probably the system has given me, has been giving me the label. You are trying to hack, or not hack, you are a troll, yes?  
Okay, if you want, if you need US government services while in Spain, stand there. US mission in Spain, common service, passport renewal.  
And, in order to finish.  
Will happen?  
There, there, off.  
November.  
What will happen the 3rd of November?  
What is going to happen?  
Yeah.  
I cannot predict results and I'm not, I'm going to leave it. I would like to ask the AI, would you exist in case this election would not be happening?  
You understand the question?  
At whatever. OK, now the map finance the map.  
And before that, let me show you the Alejandro.  
I need to try to enter to get to Telegram.  
Logo.  
The.  
Please.  
Okay.  
I am.  
With my...  
Finance.  
You things from...  
You got it.  
Can you make an episode of Sumari?  
From last.  
Plus, also.  
I would like to.  
Give them a little demonstration of my system.  
Bing in.  
In this.  
The.  
I'm going to copy and paste this. Yes. Okay. This goes here. This is Telegram with my system, with my whole system through open, through open clock. And now I'm going to do the same thing.  
I'm gonna do the same thing, and I'm gonna...  
I cannot ask.  
Instinct, and around summer. Anyone of you have heard of the instinct?  
Do you think?  
Cortana, you feel about dancing?  
Instinct.  
Is Bing.  
I will never recommend you to install.  
Don't install it.  
Don't install it, yes?  
Why don't install it? Because it's so smooth. I installed it last Friday.  
I give permits to enter all my Google things. I have my bolt from Obsidian Google Drive, and once Instinct connect my connect my bolt, it was amazing, but amazing because of all the information it gave me. Yes, thanks to Instinct.  
I have been learning new features, and what I have done is introduce these new features into my system. Yesterday, yesterday I connected my system with all my mail. And once you have all second idea, at the beginning I have told you about automatized things, yes?  
Second idea, please, absolutely important.  
Please, absolutely important: forget about Petragnani.  
Forget about technology. Just think about how you organize your data. Probably I have to repeat this in more classes, but this is so important. Forget about technology. Focus on how do you have organized your data? What is it? How do you have your e-mail organized?  
And you have them in the lookout? I have Outlook. Outlook, an Outlook folder in your computer.  
He's just a computer. Yeah, sorry, he's just a folder.  
Externally, you can access from any model to this folder. And once you have access to this folder, you can tell the AI to organize to read. It's not as easy as its own. But once you know how to do it, it's as easy as its own. Yes?  
So if you have all your emails in three locations, in three different locations, your life will be harder than if you have everything in just one location. If you have your whole e-mail in just one location and you have everything in files,  
Once you get your an AI, I don't care about which technology I'm talking about, you have all your information all there, once you connect your whole system with the new technology that has arrived.  
Who will be done?  
In this case.  
I have asked instinct. Last class, Monday, September 28th, session 7th, it's income duration on the yearbook.  
I'm gonna start with you.  
I'm gonna serve this.  
Oh, I have asked him about also about the demo, yes?  
Here, this is the summary of last day class. Why bonds matter, bond price, maturity versus duration, fixed income, the deal. For next time, problem set to due on October the 14th. Midterm October 26th.  
Is it amazing?  
Is it incredible?  
I mean, this is instinct.  
Last Wednesday, I didn't know even that this exists.  
Last Wednesday, I didn't know that this existed.  
And the demo already happened. I found the right class. Now did your vote. Cross check the date against your calendar and read both the recap and the transcript in under a minute from a WhatsApp message. If you want a second act, pick one. A student asks me,  
any market question and I answer with sources like. I file a note into your system while they watch. I recap what actually moving markets in this week. Bank wars, finance, warning, defense and tariffs. Separately, while you are in that class, Wednesday series is still  
Has the Mexico location, your Monday? Ohh, yeah, there was a mistake with Mexico in my files, short for that.  
Make sense?  
Let me move into Telegram.  
Into Telegram, I have asked same thing to my sister, but...  
Oh.  
Did not work.  
This is the management of an uncertain future.  
Good morning, everyone.  
And watch, Luis can be the assistant.  
Here is a short recap of your previous class reconstructed from the. Oh, his English is worse than mine in Spanish. No, Luis.  
I have everything configured to show in Spanish from Spain.  
So, he's reading that in English, yep.  
Sorry for that. But trust me, the Spanish I hear when asking something, the Spanish is great. And it's not just the voice. It's the voice into an incredible detail. Yes?  
So, one idea. Not now. You don't need it. You don't need to do it now. I have to start with them. Emma. Emma.  
Her name was Hannah. I have to start with Hannah without any hurry. You can send me an e-mail saying, I'm Luis, I'm whatever from your from your.  
English from your financial markets class, if you have.  
Anything, any interest. I'm interested in, I want to go to work in the summer, interesting, seeing whatever. I want to work in investment banking. I want, I would like to, whatever.  
Send me an e-mail.  
I will manage that e-mail because I'm testing. I have just connected Thunderbird with my system yesterday. And I will manage all these emails in an automatic way. Also, I will record. I will record. I will put all these recordings into my board regarding the classes.  
It will not take too much time. It will not take, but thanks to this, depending what you ask me, I can give you small work or, oh, I know obsidian, I've been working. So if you know obsidian, I can answer you back, telling you a little exercise regarding obsidian or not. You understand what I mean?  
This will only give you extra points, yes?  
Imagine, anyone came just to the midterm and to the final. Anyone gets a 7 in the midterm and A7 in the final. Final grade will be a 7.  
Anyone came just to the middle and to the final and get a 10 and a 10. He or she will get a 10.  
But if anyone came to the midterm and to the final and gets two force and he has done all things and he has been working with me, he will get, he can get or she can get three extra points, at least. I mean, I won't give three extra points to everyone, but if someone is just...  
You understand the point?  
And please, everything will be automatized.  
I will read everything. I will read everything, but it's an experiment.  
It's an experiment, and you can take this experiment. I mean, you will be talking with me.  
but not just with me in an automatized way. Yep? Make sense? Okay, more things.  
I...  
This.  
English is a...  
Big Sester.  
Ferrer.  
Luis.  
And then...  
When?  
Talking in Spanish, I would like...  
You show me as.  
Well, yeah, what I'm doing, I am changing his programming. This is open close. This is not, this is not instinct. This is mine. Yeah. What is the difference between instinct and my own system?  
that this is operating. In my computer, I have a complete power over that. This is on the other hand, this is on the other hand in somewhere.  
And all the data of this in somewhere somewhere else.  
Big.  
Let me try to put this into silence.  
OK, and let me hear.  
This is excellent. We are going to go through several exercises. Hicare, Finance 4.  
These are you.  
He got a finance for.  
CVR.  
Okay, I have served now. I'm going to go through several exercises. Several exercises in order to do all of you have received problems at 2.  
Sorry again, I will need to open in Moodle. Sorry, but I hate once you have all these things automatize it. I have one new problem: I hate bureaucracy. I enjoy so much teaching, working, playing, and when...  
I need, when I have to open Moodle and enter into Moodle and do a new task in Moodle, when I need to log in into Moodle.  
I feel as if the whole world will came over me. I hate Google. My life is so...  
Funny, or at least in my way.  
That once I need to go.  
Those bureaucracy.  
It's hard, but I will do it, and it just take one minute to open the all of you have the problem set too, no?  
You can call it laziness.  
But you will see how fast I will answer all your emails.  
But not fasting, I have not.  
The answer will not be fast.  
Because I will answer at the end of the day, I will never do, I will never, I don't know, but probably I will not automatize sending max. Why? Because all mails before, I mean, for example, with the grades,  
All of you will receive an automatized mail with the grace.  
I have an Excel, I have all the emails, I just press a button and all these emails goes in an automatized way. Make sense?  
But I'm not talking about this. I will not automatize an e-mail to someone through AI. Why? Because you don't know what can be done, more even if I am talking with one student. But I will read the answer, probably the answer.  
You will receive this better than the answer I would have thought.  
You see the point?  
What I'm talking about, I'm talking about something that is absolutely unexpected.  
I'm trying to to teach to, I'm trying to teach.  
Over unexpected things.  
And then, probably, next class.  
I will come here, I will dedicate, no, I don't know how many times, but I will dedicate, for example, someone from Sweden has asked me about his wants to create a...  
I start up with P2P music and we will talk about Spotify.  
But we will came here with all the homework done. We will just summarize what...  
As we go, yes.  
Then we, yeah, check. Telegram.  
Hey.  
Good morning.  
This is the new English voice.  
Finance is not simply about money. It is about making decisions and trusting when the future is uncertain.  
This is still Spanish.  
This is still, this is still friends.  
Oops.  
Alright, cool.  
Hi.  
English.  
Luis.  
Or at least American.  
I will forget about it. Yeah.  
Another idea, another important idea regarding technology.  
I have never done anything.  
Just the first time.  
You understand what I mean? I have tried to connect Thunderbear with AI.  
First time, never work. First time, never work. And second, probably, neither, neither. So what I'm trying to transmit you.  
Do not stop. Let's continue. Try and okay. Hey.  
Exercises.  
Exercises.  
Excel sizes. What is Excel? I'm going to use Excel in the exam. You won't need, you cannot have Excel. You should master time value of money question. The exam will be easy regarding.  
To Excel, you will understand things, yeah.  
Hey.  
We did this exercise in class the other day. I'm going to repeat it. Yes, I'm going to repeat it. Two ideas.  
First, you have, for example, at all, any one coupon rate.  
Eh.  
Oh, 4% rate, face value.  
Rosen and Rachel.  
Four percent, you said 4%, 4% and about.  
In this 40 and maturity.  
Actually.  
OK, 40.  
Forty, 40, 40, 1004, yes. How do you calculate the price in case?  
Did you lease 4% price to the first?  
1.04 rise to the second. 1.04 rise to the third. 1.04 rise to the 4th.  
One.04 rice, yes, and in this case.  
Price will be? Who knows what the price is going to be? Who knows it?  
Who knows it? Don't answer. I'm not telling you to answer. I know I'm asking who knows what the price is going to be. Who knows it?  
Who knows it? Do you know what the place is going to be?  
No, do you know it? No, do you know it? No, do you know it? You know it?  
You know, you know it. I mean, you know it.  
You know it?  
Once you know it, you are getting it. You have coupons of 4%. You have coupons of 4% and the year at which you are discounting the price is 4%. So price will be pay value. In this particular case, price is going to be 1000.  
Yes. Now, interest rate sensitivity. We won't talk about this yet. We're going to talk about after the meeting about interest rate sensitivity. But I don't care. Why? Because I want you to finish this course of you knowing what duration is. Yes?  
It is right sensitivity.  
The price is a thousand.  
The price is 1000, and price is the sum of all future cash flows, yes.  
How much this will worth, more or less, 80%?  
Five, 4, 4, less. This is 5%, 4.9, you understand what I mean? How much each one of these worth over this price?  
And I'm going to calculate duration. What is duration? How sensitive is bond leads to interest rate changes. The higher the duration, the higher the sensitivity. Yeah.  
And, in order to calculate duration.  
Let me go.  
Let me go.  
To Excel, he has got Excel.  
One, two, three, 4, 5. That's close, 40, 40, 40, 40, 1,040. Yep.  
A list of 4%.  
Odio over.  
One plus 4%.  
Right, through the first, this is thirty-eight.  
815 and let me calculate the price.  
But I will be.  
Price is going to be? You don't know, price is going to be? You don't know, you know what the price is going to be? No? You know what the price is going to be? You know the price? No?  
You 1000. This is still 1000.  
Oh, some of these.  
Right, this is still 1000, yes?  
Make sense?  
Let me continue.  
Three 180.  
Sorry, 38.46 / 1000. I'm gonna fix this and.  
This is.  
These first coupon is a 3.88 percent of price.  
The second one.  
Is 3.7 and this worth eighty-five percent if I send this.  
I will get 100%, yes.  
And I'm gonna calculate how much this is over one.  
Two, three, 4, 5.  
And let me do this sum, this suma in Spanish.  
And this will be 4.62. This number.  
If you know how to calculate this number, and you know what can you do with that number.  
You have all the mats you need for my cost.  
For the midterm, I'm not going to ask you to calculate calculation. For the midterm, I will ask you to calculate how to price up all things regarding the value of money. Yes?  
But my objective is you to fully understand what is the relationship between price and return.  
In this sense, in this sense.  
Good morning, everyone. This is a Native American English voice. Finance is the discipline of making decisions across time when the future is uncertain. If interest rates rise, the market price of existing bonds falls. That is better, I hope, and significantly less like an English tourist ordering lunch in Madrid.  
Have you, have you heard?  
What is the only thing I have told you before listening to this recording? What is the only thing that I have told you I was going to ask?  
increases. I have the voice.  
This is.  
This is perfect.  
I want you to make my students have.  
Yes, hello.  
Data.  
Personal information and whatever you think.  
Yes.  
I want them to learn as.  
Not as they will.  
In Juan.  
I want to hear.  
You're lovely.  
English box.  
Okay, 4.33, 4.63. Make sense?  
Now, we send that up.  
Within that.  
It's saying that.  
Send that.  
I'm going to calculate.  
Here.  
Raid.  
Here, the press, yes.  
Here, if rate is 4%, I'm going to calculate price with net present value formula. In English, it will be net present value formula, but in Spanish is...  
In English, it will be net present value, yes? At which rate, 4%?  
Ohh, with data, this information, yes, what is the price if interest rates are zero?  
You think that is really 4%? Let me fix this.  
Let me complete fix this.  
Price would be 1000, yes?  
If break would be 0, if break would be 0.  
Great, good with you.  
I will be nice.  
No.  
Bring this 4%, this face value, you break this.  
Four percent is 1000. If rate is 0, I have not presented yet.  
I have not pressed enter yet. Once I press enter, what will be the price? We break it zero.  
Present value of 40 will be 40. Present value of 40 will be 40 and we will be just summing. Yes. How many coupons do we have? Five. 5.4.  
Two 100.  
One 1200. Make sense? Yeah.  
Okay.  
One 1200. Yes, let me copy this, paste this here, copy paste this.  
A percent.  
And.  
Copy-paste.  
And then you move to...  
Thank you. Yep.  
What does this graph show us?  
What does this graph show us?  
Relationship, relationship between.  
price and interest rates. If interest rates goes up, what will happen with pressure bonds? They will go down. And then, what is the relationship between price and interest rates? We will see this in advance.  
Race, and ratio has to do with the slow, yes, with the slow.  
The higher the slope, the more, the more the price will change when it is rated. The bigger the slope, the more the sensitivity. Makes sense?  
We will approach this is not by a line. We will approach this is not by a line, but I want you to see that.  
The relationship is complex.  
The relationship is not aligned. Let me show you also.  
Let me show you.  
Where are you? You're here.  
S is my web page resources. Sorry, oh, this is this is Spanish, but all these examples can be found in English also. He speaks income, yes.  
Fixing code. I'm going to open this one.  
This one.  
I will come back here later, yes?  
Let me serve this, would you? I'm just going to show you the first.  
Peaks.  
First.  
Steps, yes, I'm just gonna show you this one.  
Casa de coupon.  
Four percent.  
Maturity.  
Five years.  
You love 4%, price is 1000, yes?  
These are the same numbers.  
These are the same numbers that we have in. If I increase interest rate, if I increase interest rate, so here, if I increase interest rate, price will fall, yes? If interest rate is 5%, price will be 956. If interest rates are 5%, 956 points 71.  
Makes sense.  
Oh, and if you want English, you just plug here English. This is trading with this code. If the rate is higher, sorry, if lower than 4%, the price will be higher than the prime.  
This is trading at Premium, yep.  
And that's it. Oh, and this is the graph that I have just performed. Yep. Makes sense.  
I'm not gonna serve. I have already served this with you, but I this one.  
I don't want to say it yet.  
In a microwave, this is a phone.  
Let me just 1000, coupon 4%, five years of maturity, and a deal of 4%, yes?  
This is the graph that I have done with Excel.  
This is the graph that I have done with Excel, yes?  
And here, what I'm doing is a foom in this graph, yes, and if I do a foom.  
You can see that.  
If you make a zoom, you can see that this curve becomes a line. Make sense?  
All that, how did I do this all these graphs with Google Studio? It can be done. I did it. I did them before. I did them with a Google Studio, but they can be done without any problems with and it's just.  
As easy as asking, I want to do this graph, and this graph becomes, once you do the graph at the first, the first time will never be perfect. You should start making small changes. For example, let me show you.  
Let me show you here in this one.  
I don't remember the changes. This is in order to explain modify duration, but probably the changes has to do with this by change this in this way, this in that way. That thing, and once you have changed something, you came back to the beginning because something has been changed at the beginning. Make sense?  
This is called life coding.  
And personally, I don't like too much by coding. I prefer to go with the specs.  
Go with the space, but whatever. I have done all these pages in less than 5 minutes. Not all together. I mean, each one.  
Like, for example, in order for you to fully understand this.  
Good morning again, E2 Analytics. I am Watson, Luis's cognitive exoskeleton. From 1 Telegram message, I located your Activacate course, identified the previous session, reconstructed its concepts, and connected them with your projects. The system records 28 students and seven project teams.  
Team One is building a portfolio stress and systemic.  
Complete.  
Disaster.  
These students are not into a.  
These are.  
International.  
By Marcus Rome.  
You got it.  
And.  
Grace unique.  
Hey, Belén.  
The computer picked the wrong class, yes?  
OK, let me go here. It is nice. Make sense?  
All of you know how to calculate the price of a bond. And regarding interest rate, I'm not going to repeat this exercise. You have this exercise down in the description. It's easy to understand and it's just the price of a bond is 1000 is a for bond. And what I did is after one year, interest rates increase.  
Drop, and we saw how sensitive this bond price is to interest rates, yes?  
Who calls twice a year? Here you've got the solutions and I'm not going to go through this exercise because I don't want to APR an effective amount rate. You are not going to find difficulties. Anyone have heard about APR?  
APR.  
Have you heard about the PR? Take the final rate.  
If you are not from the States, probably have you have out a PR? I think if I already.  
You.  
You want, if we are not anything on the ring.  
Where?  
What did you hear about that?  
Yeah, no problem.  
Because API has to do is always explained in American financial classes, because...  
Has to do with public. We are not going to spend too much time with APR, but the ADA is.  
A PR could be.  
Twelve percent, yes. And if we work in a monthly way, oh, I am going to calculate effective annual rate. If periods of time, if this rate is paid one each year,  
When it's here, yes?  
If time is one year.  
Effective panel rate would be...  
What person? Yes, if time is 6 months.  
Yes.  
Effective final rate.  
Active time rate would be 1 plus.  
Twelve percent over.  
One payment each six months. So 2 payments within a year, yes?  
If you have a ring, right, you said one.  
1 / 2 - 1, this.  
In fact, is.  
Monthly, it's month.  
Name.  
Price to the 12th, 1 / 12, yes?  
And if this is paid in a daily basis, same with 365. Make sense?  
Yep.  
Let me do these numbers. We thank them quickly.  
All of you should know what is.  
A PR.  
Effective annual rate.  
APR could be of 12%.  
And, depending on...  
Number off.  
Your basis, always, always, we will work in a day. Your basis, one, two, three, no, one, two.  
And this is yearly.  
This is semester three. I don't know how to write semester. What semester? Probably go six months or beyond. No beyond one or two years semester semester quarters.  
There are four quarters within a year, a month, and...  
Baby.  
12, 300, 65. Yep.  
This is 1 12 over, let me 61, 12 / 1.  
Rise to.  
One over 1 - 1, yes.  
This is 12%.  
This is.  
This is what person?  
I do these kind of things in order to see if you are attending or not.  
This is rise to the second.  
Right to the bus. Yep.  
I mean...  
Six months, two times. Twelve months.  
12 times. Make sense?  
Yep. I strongly recommend you to don't do these kind of things automatically. You stop and think. Yep.  
Price to the tire, minus one, 12 percent, 12.36 percent.  
12.55%, 12.68 and 12.75. Yes.  
This is the effective algorithm. Make sense?  
Morphins effective annual deal. Yeah, see, we talked about the deal the other day. I'm just going to show you one exercise.  
or two or three that connects with this idea. I'm going to review.  
Yeah.  
Are you following me, Morales?  
Okay, what is the idea?  
A PR remind that a PR is 12% and time.  
is 12. I want to calculate this in a monthly base, yes?  
Personally, my recommendation is...  
Forget about APR, I think that.  
Rate in a monthly base, yes, is one person.  
Is one person, yes?  
What is?  
What is the idea?  
The idea is 1 plus the effective annual rate, yes? One plus the effective annual rate. This will happen in a year basis, yes? It's going to be equal to 1 plus.  
One percent.  
Each month.  
Rise to the.  
All of you understand that the question?  
If you fully understand that equation, you can work with a deep group without any problem. You can work with forward rates without any problem. I will tell you with more detail now. But what are we doing? Imagine that. I'm going to have you understood that? 12 months, 1%.  
Many that we have.  
One month, because there is, I am asking for a special loan, yes? And there is one, not a loan, sorry. I have asked for a deposit, yes?  
On first month.  
Month, instead of a 1% of return, I will receive that 3%, yes?  
How do you calculate the effective number rate?  
I will be receiving a one-person return for.  
Eleven months.  
And I will receive one plus, I say, a two percent.  
One plus 2% for one. Make sense?  
Or, imagine.  
Remind that it's month.  
I have.  
Each month I have a different rate, yes? In case each month I have, I will have a different rate, but I will be doing this.  
What I will be doing is this, yes?  
Makes sense.  
All of you are following me.  
The fool.  
Because these are.  
These are months, and this is one year.  
Are you following me?  
One year.  
Knop.  
I'm gonna go hiya.  
I'm gonna go high, and I'm gonna go to the gym, yes?  
One, two, three, 4, yes.  
I have the spot in year 4.  
I have, I have the spot in here for, yes?  
The rain from between today and year.  
All you are with me.  
Yep, I have the spoken here for.  
And then?  
I have.  
The forward between, sorry, the forward between zero and one is, I have the spoken year one.  
I have the full one.  
Between one and two, I have the forward. Between two and three, and I have the forward between three and four. Yes?  
Yeah, the spot is between today and year one, between today and year two, today and year three. Yes, the spot is between today and whatever. And the forward is between one year and another year. Yeah.  
Knowing this, I can say one plus the sporting year 4.  
Rise to the 4th, yes.  
One plus this year 4. Rise to the 4th.  
Because this happens in four years.  
It's gonna be one, too.  
One plus the spoke in year one.  
Times one plus forward between one and two. Times one plus forward between two and three. Times forward between three and four.  
You are never going to be asked something like this in this service. The only thing...  
Right, you will be asked is, for example, I'm gonna change this, yes?  
You know, this spot in year two, you know, this spot in year 4, during the year course, yes, you will be asked to calculate.  
The forward between two and four, yes?  
How will you calculate this?  
One plus the spot in year two, rise to the second times. One plus the forward between two and four, rise to the second item.  
Yep.  
What are we doing? And then if you want to calculate this, this rise to 1/4 -, 1.  
What is this? A geometric average.  
And we are doing this, your means, your metric, are you?  
OK, one thing.  
Once I transcript classes.  
The computer tells me if I have made mistakes, all mistakes that I have made.  
And there is one big mistake. I don't know. I mean, I know why I told you this way, because I didn't talk too much. I told you last day, I told you last day that Federal Reserve.  
Bail out Silicon Valley Bank.  
You remember I told you?  
It's not true.  
Sorry for that. There was not a bailout. I know that there weren't a bailout. I don't know why I say it. Probably because you go so fast.  
Lehman Brothers collapse and Lehman Brothers shareholders.  
Lehman Brothers.  
Lost all their money. Their holders, their holders lost all their money. Who bail out demands deposits? The Federal Deposits Insurance FIB is the name. Yes, Federal Reserve did not bail out.  
Silicon Valley, baby, rescue the deposits, yes?  
I knew that. I don't know why I didn't tell you this in this way. But thanks to AI, AI told me, Luis, careful, there you did a mistake.  
Mistakes have been done or made?  
Mistakes are done or made, made, made, I made a mistake, yeah.  
Make sense?  
Do you understand that exercise?  
Here, you have one exercise, you can solve it. This is much, much more simple than what I have done on the blog. Yes?  
I'm going to solve it. The one year deal is 2% and the two year deal is 3%.  
What does the market expect the one-year rate to be next year? Yes?  
One year is 2%.  
Let me come here and do the numbers. Quick.  
One year.  
Two percent, the two year is 3%. Yes, I'm told.  
What is it for work between year one and two, yes?  
One plus 3% price to the second is equal to 1 + 2%.  
times 1 plus the forward rate I'm looking for. The forward rate I'm looking for will be equal to 1 + 3%.  
One plus 3%, rise to the second over 1 + 2%, minus one.  
And if I get a 3% in three years.  
Three percent in three years, more or less would be a 6% in total. Yes, and first year I get two of six, four months I will get for year two in order to get six in total.  
I want you to have the information that this is like a normal average, yes? Like a like an average that in geometric terms. Then calculate this week.  
Let me calculate this week, and...  
One plus.  
One plus, we've got 1 + 3%, rest of the second.  
Three percent rise to the second over.  
Right, to the second over one plus.  
Two percent, minus 1. And this is a 4%. And careful, it's not just a 4% because of compounding. Yes, it's 4 point.  
Yeah.  
Here, you have these numbers.  
Ana.  
And now we have time.  
Let me go through this.  
Quickly, because...  
What is their Gordon Rodríguez model?  
Homi Frank.  
How many times do I have dedicated to talk about fixing goals?  
Hello, no?  
There are big single markets and...  
equity markets. And there is also, there are also the values. We will talk about the values. In terms of working with time value of money, how much time did I dedicate to fixing it?  
A lot compared to that. Do I have to talk a little bit about everything?  
I have talked about that with you.  
About 2 months.  
What about? I mean, I have talked about the media, I have talked about the, I have talked about the media, yes.  
And me.  
Let me continue.  
This is a summary of the course. Financial system, financial intermediation market structure, core principle of finance, yes? Time value of money, present value, compounding cash flow valuations, fixed income and bonus.  
It's in common boats.  
Thus, the teacher has said.  
Something.  
Regarding.  
Equity, value, or equity.  
Markets.  
But the chapter.  
Do the need the teacher, whatever. I don't know, I don't ask what.  
Do you see what I'm doing?  
I'm asking a question over my class.  
Yes, while the primary focus of the course so far has been fixed income and monetary policy, the professor has addressed equity markets and equity valuation in several contexts.  
valuation framework. I have talked about the work and capital asset pricing, stock return and dividends calculations, IPOs and corporate financing, central banks holding stocks. In session 5, he discussed how the Swiss national banks, how the Swiss national banks as acts similarly to a large institutional investor.  
Yes.  
But when talking about valuation, I have not talked too much about equity valuation.  
Because why? Talking about things in compilation, it's something serious.  
Talking about the equity evaluation, you have had finance courses before that have been done dedicated to equity evaluation.  
What is the Gordon model? Dividend discount model. Yeah. Is it so powerful? Absolutely. Is it important? Absolutely. But should I dedicate your time to it? I would prefer not. Why? Because with what are we doing? Let me show you dividend discount model. Yes.  
First idea, the price, remind that we have a stock.  
We have a stock that will pay a constant and perpetual dividend. Yes?  
Can you call this season D?  
Sorry, will you take out the thanks? It's because you understand the point, no? That if you want, if you want to, you can go out and I have not taken out the, it's a matter of respect. Imagine that you are going to receive.  
A constant and fixed dividend, yes? How will you calculate the price?  
Be over K in K the cost of capital. We will talk a little bit about cost of capital. What is K? A little bit risk rate plus beta time return on the market minus risk. This at the end. What is this array? For example.  
Eight percent. This is just a rate.  
Where do you get? Where do you get this?  
You get this from Carmen.  
What is better? The variance between the return on the stock and the return on the market over the variance of the market. Yes.  
We suspect the war will be the same than it has been during the past two, three years. The war will not be the same in one no time than compare, and we expect what is going to happen in... Do you understand the point?  
Whatever. What is this? This is Estepa.  
This is just a perfect calculating present value of a perfect. Does it make sense? Yes, as a realistic, as a rule of thumb.  
Will it make sense to dedicate your time in order to approximate the price of 1 stock?  
By calculating a perpetuity, come on from one of you can tell me. Oh, Ruiz, but there could be row. Yeah, there is row. Instead of being giving a zero, dividend P would be dividend 0 * 1 plus the row. Rise to P Yes, there is row. This is the BG.  
In gay, how do you call it there? Neo gay.  
Bingy ***** Red.  
What is it? The growth rate. How do you can rate the price if there is growth? Yes. And also you can say, oh, earnings.  
is what is being paid, but there are sorry, dividends is what is being paid, but there are earnings before. Dividend in GRT is earnings in GRT times the clawback ratio. What is the clawback ratio? The amount of money that is not being paid to the shareholders and that is kept in the company in order to get what?  
And you can say also, and you can say also, OK, be the science.  
Return on equity, B times what the managers are doing should equal to grow. And we can compare. Return on equity with what the market expect.  
We could spend hours doing exercises with these things. Yes? What I want you just to know that...  
This is called the Gordon dividend installed model. Yes, there was one person called Gordon.  
that calculate the price of stocks by calculating present value of future dividends.  
Make sense?  
With this, please read the slides. In the slides, you have exercises, so simple exercises and the exercises, so yes.  
No, you better.  
Here, you have access to this.  
You have access to...  
Ohh, sorry, you have access to this.  
In this link.  
In this link here, you've got...  
All things.  
Next Monday, I will give you short questions. I will give you more things regarding for the midterm, in order to prepare the midterm. Next Monday, I will tell you what the structure will be. I will share everything. There was a group and also I will share the transcript. Yes, you will have short questions, long questions. Next Monday, I will tell you. Yep.  
And we will go through Google Notebook LM in order to review it.  
Then, where is here? I want the link.  
Copy link.  
I want to say and share it again. You already have this link. You can create your own. And let me see.  
Rescue, fix it.  
Good morning, International Financial Markets.  
First, a correction. Luis asked me to demonstrate his system, and I retrieved the wrong UK course. The previous audio belonged to E2 Analytics, not to you.  
That was my error, not Luis. A useful intelligence system must not hide mistakes. It must identify them, correct them, and improve its retrieval process. I have now opened the correct course record, International Financial Markets, Fall 2026. Your previous class was session 7 on September 28th.  
covering fixed income, duration, and the yield curve. The central idea was that bonds do more than provide financing. Because government bonds are standardized and aggregately traded, their prices and yields become reference points for the entire financial system. Standardization creates tradability. Tradability creates liquidity.  
and liquidity creates observable market prices. You reviewed bond pricing as the present value of future cash flows. A four-year bond with a 1,000 euro face value, a 4% coupon, and a 5% market yield was worth approximately 964 EUR and 54. It traded below par because its coupon was lower than the return currently required by the market.  
You then separated maturity from duration. Maturity tells us when the final payment occurs. Duration measures the weighted timing of cash flows and, more importantly, the bond's sensitivity to interest rates. For that four-year bond, Macaulay duration was approximately 3.77 years.  
Modified duration then provided a first approximation of the percentage price change caused by a change in yield.  
The 10-year bond example made interest rate risk concrete. When rates remained at 2%, the holding... I didn't mention...  
I introduced the concepts, but I didn't mention my whole duration or modified duration. I didn't do it.  
Why I didn't do it? Because it's pedalogical. It has to do with pedalogy. I prefer to explain new concepts, you do understand concepts, and once you have understood the concepts, at the end I will tell you, and this is called modified dimension.  
And this is called my polling dress. And what I want you to see is that...  
How long did it take to correct? First time it was mistaken. It was a disaster off.  
English from Spanish. I asked him to correct it. Then he took them to incorrect a class. He made a summary for my students from that I will teach them tomorrow.  
And, at the end, did you see that what the computer was saying?  
With.  
Perfectly.  
I don't know if perfectly is the word, but accurate is. I'm not juicy. This is these are not frontier models. This is this every not everything runs in local. The transcription is being made. The transcription is being made with open model. Yes, transcription is being processed with an open model.  
And this is Chat G.P.T. 5.5, not Astra, not, not, yes.  
But I'm trying you to see that.  
Luis.  
Try to do all these kind of things by yourself. I'm giving you the materials in a transcription. How do materials with transcripts? You can play with them. You can send me an e-mail telling me, Ruiz, I'm playing with this. Do you want? You can send me an e-mail. Do you want me to write a book?  
I will. I mean, you are the one that are that is in this e-mail. I'm the one that will wrote this e-mail, this book based on your transcriptions. What I will tell you, I mean.  
I would like to whatever.  
Take the transcriptions, upload these transcriptions to your ChatGPT.  
And then, with all information you know for me, I want Luis head to slow.  
and see what will happen, yeah?  
Makes sense.  
See you on Monday. If you are not going to come here on Monday, see you next Wednesday, because this Wednesday we are not going to have class.  
Period return was 10%. The subtle lesson from Silicon Valley Bank was that...  
Move to Singh Singh.