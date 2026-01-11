# 📘 Session 27 – Final Review, Duration, PVGO & Forward Rates  
**Course:** Foundations of Finance – NYU in Madrid  
**Date:** December 1st, 2025  
**Duration:** 1h 19min  
**Instructor:** Prof. Luis Garvía Vega  

---

## 0. Context of the Session

- Goal of the class:
  - Clarify **key concepts for the final exam**.
  - Review **core exercises** (problem set 6 + sample finals).
  - Show how to use **AI tools (NotebookLM, Google AI Studio)** to study smarter.
- Strong recommendation from Prof. Garvía:
  - **Do not jump directly to the solutions.**
  - First **try the questions yourself**, then use solutions and tools to understand the logic.

---

## 1. Payoff Tables – Options & Bonds (Problem Set 6, Q1)

We revisited a **payoff table** with:

- **Underlying stock**
- **Long put**
- **Short call**
- **Bond (long or short)**

Key ideas:

- **Long put:**
  - Payoff = $$\max(K - S_T, 0)$$
  - Example:
    - If $$K = 50$$ and $$S_T = 40$$ → payoff = $$10$$
    - If $$S_T = 90$$ → payoff = $$0$$ (you would never exercise the put)
- **Long stock:**
  - Payoff = $$S_T$$
- **Short call:**
  - Payoff = $$-\max(S_T - K, 0)$$
  - If a **long call** would give +30,  
    then a **short call** gives −30.
- **Bond:**
  - **Long bond:** you receive a fixed amount at maturity.
  - **Short bond:** you must **pay** a fixed amount (e.g. −40) regardless of the stock price.

Once you understand each building block:
- Filling payoff tables becomes **mechanical**.
- But the important part is to **understand why** each payoff is what it is.

---

## 2. Replicating a “Square” Derivative (Binomial Replication Logic)

We considered a stock with:
- Current price \(S_0 = 25\)
- Next period: it will be either **20** or **30**

A new derivative, called **“Square”**, pays:
- If $$S_T = 20$$: payoff = $$20^2 = 400$$
- If $$S_T = 30$$: payoff = $$30^2 = 900$$

Intuition:

- The fair price today must be **between 400 and 900**, discounted appropriately.
- We **replicate** this derivative using:
  - \(S\) = number of shares of the stock
  - \(B\) = amount in the bond (risk-free)

We set up the system:

$$
\begin{cases}
20 S + B = 400 \\
30 S + B = 900
\end{cases}
$$

Subtracting the first from the second:

$$
(30 - 20)S = 900 - 400 \Rightarrow 10S = 500 \Rightarrow S = 50
$$

Plug back:

$$
20(50) + B = 400 \Rightarrow 1000 + B = 400 \Rightarrow B = -600
$$

So the **replicating portfolio** is:
- **Long 50 shares of stock**
- **Short 600 in the bond** (you borrow 600)

Price today of the “Square” derivative:

$$
V_0 = 25 \cdot 50 + (-600) = 1250 - 600 = 650
$$

Core message:

- “Same payoff → same price”.  
- If you can replicate a derivative with stock + bond, its **fair value today** is the cost of that replicating portfolio.

---

## 3. NotebookLM – Course-Wide Concept Map

Prof. Garvía showed how he:

1. Uploaded **all class transcripts** into **Google NotebookLM**.
2. Selected only the **second half of the course** (Equity, Fixed Income, Derivatives).
3. Asked the tool to:
   - Generate a **comprehensive summary**.
   - Build a **concept map**.

The resulting map included:

- **Equity valuation:**
  - Dividend Discount Model
  - Gordon Growth Model
  - Required return \(k\)
  - Growth \(g\)
  - P/E ratio & PVGO

- **Fixed income:**
  - Yields & returns (HPR, YTM)
  - Yield curve, expectations & liquidity premium
  - Duration & immunization

- **Derivatives:**
  - Options, futures, forwards, swaps
  - Arbitrage & no-arbitrage pricing logic

Use case for you:

> You can do something similar with your own notes:
> - Upload your materials and ask for **summaries, maps and study guides**  
> - Then **ask questions** to the notebook as if it were a personal tutor.

---

## 4. Macaulay Duration – Which Bond Has the Lowest Duration?

We analysed a **multiple choice** question:

> “Which of the following risk-free securities has the **lowest Macaulay duration**?”

Key principles:

1. **Longer maturity → higher duration** (all else equal).
2. **Higher coupons → lower duration** (more cash flows come earlier).

Therefore:

- Among **zero-coupon bonds**:
  - The one with the **shortest maturity** has the **lowest duration**.
- Between coupon bonds with same maturity:
  - The bond with the **highest coupon** has the **lowest duration**.

Prof. Garvía also:

- Used **Google AI Studio** to generate an **interactive app** that:
  - Lets you change maturity and coupon.
  - Shows how duration changes.
- This makes the intuition very visual: you can **see** duration fall when coupons rise or maturity shortens.

---

## 5. Convexity – Quick Reminder

Convexity = **second derivative** of the price–yield relationship.

- Price–yield curve is **downward sloping** and **curved**, not a straight line.
- With higher convexity:
  - When yields **fall**, prices go **up more** than duration alone would predict.
  - When yields **rise**, prices go **down less** than duration alone would predict.

For the exam:

- You do **not** need to compute convexity numerically.
- But you must understand:
  - Duration = **first-order** sensitivity.
  - Convexity = **second-order** correction that makes the approximation more accurate.

---

## 6. Equity Valuation – PVGO & Plowback vs. ROE

We reviewed a key conceptual question:

> If the **earnings retention (plowback) ratio is positive**, and  
> **Return on Equity (ROE) < required return \(k\)**,  
> then the **Present Value of Growth Opportunities (PVGO)** is…?

Definitions:

- **Plowback (b):** fraction of earnings **reinvested** in the firm.
  - \(b > 0\) means the firm is keeping part of earnings instead of paying them out.
- **PVGO:**  
  $$
  \text{PVGO} = P_0 - \frac{E_1}{k}
  $$
  It is the **extra value** coming from reinvested earnings and growth.

Cases:

1. If **ROE < k** and **b > 0**:
   - The firm is reinvesting at a rate of return **worse** than what investors require.
   - PVGO is **negative** → shareholders would be better off if the firm **paid out** all earnings instead of reinvesting.

2. If **ROE = k**:
   - PVGO = 0  
   - Growth neither creates nor destroys value.

3. If **ROE > k** and **b > 0**:
   - PVGO is **positive** → reinvesting is good and creates value.

This logic is **very important for the exam**.

---

## 7. Put Options – Slope (Delta) at the Money

Question discussed:

> For an **at-the-money put option**, if the stock price increases by 1, what happens to the put price?

Conceptual picture:

- For a put, the **intrinsic value** is $$K - S_T$$ (if positive, else 0).
- The **slope** (delta) of a put payoff:
  - Deep **in the money**: slope ≈ −1  
  - Deep **out of the money**: slope ≈ 0  
  - **At the money**: slope between −1 and 0

So:

- If the stock price **increases by 1**,
- The **put price decreases**, but by **less than 1**.

Correct statement:

> *For an at-the-money put, if the stock price increases by 1, the put price will decrease by **less than 1***.

Parallel for calls:

- For an at-the-money **call**, if the stock price increases by 1, the call price **increases by less than 1**.

---

## 8. Forward Rates & Bond Pricing – Two-Year Coupon Bond

We revisited a classic exercise:

- 1-year spot rate \(s_1 = 2\%\)
- 1-year **forward rate starting in year 1** $$f_{1,2} = 3\%$$
- A **2-year annual-pay 4% coupon bond** with face value 1,000
- Question: **What is the fair price today?**

Step 1 – Compute the 2-year spot:

$$
(1 + s_2)^2 = (1 + s_1)(1 + f_{1,2})
$$

$$
(1 + s_2)^2 = (1.02)(1.03) \Rightarrow s_2 \approx 2.5\%
$$

Step 2 – Discount cash flows:

- Year 1 coupon = 40
- Year 2 = 40 + 1,000 = 1,040

Price:

$$
P_0 = \frac{40}{1.02} + \frac{1,040}{(1 + 0.025)^2}
$$

This shows:

- How to **combine spot and forward rates**.
- How to compute a **bond price** using **non-constant discount rates**.

---

## 9. Second Forward-Rate Example – Zero-Coupon Bond + Coupon Bond

Another exercise structure (only concept here):

- A **1-year risk-free zero-coupon bond** with face 1,000 sells for 970.87  
  → from this, you obtain **\(s_1\)**.
- A **2-year 4% coupon bond** sells at par (1,000).  
  → from this, using the known \(s_1\), you back out **\(s_2\)**.
- Then you compute the **1-year forward rate starting in year 1**:

$$
(1 + s_2)^2 = (1 + s_1)(1 + f_{1,2}) \Rightarrow f_{1,2} = \frac{(1 + s_2)^2}{(1 + s_1)} - 1
$$

Exam takeaway:

- You must be able to:
  - Move between **prices ↔ yields ↔ forward rates**.
  - Understand that a coupon bond is just a **bundle of cash flows** discounted at appropriate rates.

---

## 10. CAPM + Dividend Discount Model (DDM) Example

Data:

- Risk-free rate: \(r_f = 4\%\)
- Market risk premium: \(E[R_m] - r_f = 4\%\)
- Beta: $$\beta = 1.5$$
- Constant growth \(g = 5\%\)
- Current dividend \(D_0 = 1\)

Step 1 – Required return (CAPM):

$$
k = r_f + \beta (E[R_m] - r_f) = 4\% + 1.5 \cdot 4\% = 10\%
$$

Step 2 – Next dividend:

$$
D_1 = D_0 (1 + g) = 1 \cdot 1.05 = 1.05
$$

Step 3 – Current price (Gordon model):

$$
P_0 = \frac{D_1}{k - g} = \frac{1.05}{0.10 - 0.05} = \frac{1.05}{0.05} = 21
$$

Step 4 – Price in one year:

$$
P_1 = P_0 (1 + g) = 21 \cdot 1.05 = 22.05
$$

Alternative:

- You can also compute \(D_2\) and use:

$$
P_1 = \frac{D_2}{k - g}
$$

Both methods give the same result if done correctly.

Core exam message:

- Understand how **CAPM** and **DDM** are linked:
  - CAPM → gives you **k** (discount rate).
  - DDM → uses **k** and **g** to value equity.

---

## 11. How to Study for the Final (Professor’s Advice)

- **Do the exercises yourself first.**
  - Problem Set 6
  - Sample Final 1
  - Sample Final 2
- Then:
  - Use the **solutions** to see where your reasoning was right or wrong.
  - Use AI tools (**NotebookLM, Gemini, Google AI Studio**) to:
    - Generate explanations and maps.
    - Create small **apps** that visualize concepts (duration, forward rates, option payoffs).
- Next Wednesday:
  - More short questions + 1–2 numerical exercises **done in class**.
  - Opportunity to resolve any remaining doubts.

> The goal is not to memorize formulas, but to understand the **mechanics**:
> - Time value of money  
> - Risk and return  
> - Pricing by **no-arbitrage**  
> - How all instruments (stocks, bonds, options, futures, swaps) are connected.




# Transcription
1 de diciembre de 2025, 5:04p.m.

1 h 19 min 7 s

OK.  
Let me share sample final. Let me share with you the solutions. Yeah, do you want me to share with you the solutions or no solutions regarding sample file?  
OK, see if I have.  
If I were you.  
I will not go directly to this. I will not go directly to the solutions. Why? Because there is a point in trying to think, understand how all these things work.  
Do you want me to go through problem set 6? Any questions? Any question in particular?  
What about question one regarding program set?  
Question one.  
Did you identify Silly? Let me let me go there.  
23, 22, 21st.  
19 promised 4 solutions.  
8.  
9.  
Hi, Nicholas.  
OK.  
Let me here.  
I thought I was.  
That space, yeah.  
Final regarding final information.  
Let me show you solutions.  
10.  
And then regarding lessons.  
Options one.  
OK.  
I set 6 solutions and.  
No. OK, regarding this first question, all of you know how to solve it.  
Quick long put.  
What should be this number, Nicholas?  
11.  
Yeah.  
Nicholas for 4050. No, this one. Yeah, this one. Zero. Yes, I'm here.  
This number here long put means that.  
Here is 10. Don't put this in. Why? Because I can sell 450 something whose price is 40, so +10 positive.  
20 Yes, here. These numbers. Oh, no, sorry, this number. No long stock. What should be this number? Yeah, long stock.  
Perfect case here, long put here.  
Yeah, a long booties. I can, I can sell at 50, something that can be sold at 90. Would I sell?  
I can sell at 90 something I can sell.  
At 50, sorry, that's something that could be sold at 90.  
Would it make sense to serve for 50?  
So I would not sell.  
So here my payoff would be 0 yes.  
Brea, short call.  
Short call.  
Yeah. Oh, sorry, we are, Rob.  
Negative 30 that I mean the long core.  
That if it would be alone, if it would be alone, I can buy.  
460 something whose price is 90, so I will get 30 because she's a short instead of positive negative. Perfect.  
Please doing these exercises once you understand what we are doing. It's simple to do.  
That if you can do this. Oh, and sort of on anyone sort of on.  
Long at home will be a pay, a fixed payment, no matter what the underlying asset would be.  
So short bond minus 40, I I should pay 40 no matter what the price is. Yep.  
OK now.  
Then let me move to this one. Yes, consider a stock with a current price of 25.  
Doing this exercise.  
You have gone through.  
Final sample one and final sample two. Yes, you have gone through them. You will find one or or two like this, yes.  
Is it possible to find some somewhat somewhat exercise like this in the final? Why? Because it's simple to do, simple to solve once you understand it. If you don't understand it, it's.  
Impossible.  
Here, what we should do without first, without reading?  
You have the underlying, you have the bone, and you have the stroke. You have the stroke, the bone and the the ribbon.  
So you have underlying the board data. Consider a stock with a current price of 25 that will be worth either 20 or 30. So first, Radia.  
2520 or 30, yes.  
Then.  
Reach the rate is 0, so it reach 3 rate is 0, the bond will work 100 and 100 no matter what will happen in the future. Yep.  
Now.  
You have invented a new delivery security called Square and the payout will be the square of underlying so.  
So.  
We are asked to know what is.  
What is? Let me call this B. Yes, we need to know what is the price of this today and we know that it will be square of this number, so.  
This number so in this scenario pay off would be square 400.  
I mean this one 900, yes.  
Before doing numbers, before doing numbers.  
If I can get 400 or 900, what would be the price of this today?  
A number between 400 and 800 makes sense.  
OK, what are we going to do in the future? We are going to create a portfolio that combines the stroke and the volume.  
I'm just gonna write the question without thinking in shortly.  
I would buy both the stroke and the bone.  
20 times the stock 400 plus.  
Let me write B instead of 100B. Well, yes.  
And here 900 = 2.  
Same times this talk plus me, yes.  
Once I know the weight on the stock and the weight on B, how will I calculate the price? I will calculate the price by doing D would be equal to.  
25 times S.  
Plus B. Make sense.  
So first thing I'm going to complete, I'm going to subtract.  
I'm gonna do.  
This. May I use this? Yes.  
I will please name of this.  
And let me see that this is.  
12.  
100 = 2.  
10 times, yes, yes.  
So S.  
It's equal to.  
13.  
And B.  
I'm going to go there is equal to 400 -, 20 * 50.  
And this is minus.  
This is 1000, yes, 400 -, 1000 -, 600 Yep.  
So price of tea would be 25 thanks.  
50 -, 600.  
Five times. Five times. Sorry, five times 25.  
Would be 1005 * 25 is 100 + 25.  
Yeah.  
600 is 650, Yep.  
Make sense?  
Calculating this is so mechanical, is so mechanical and we should understand what are we doing. We have created a portfolio that combines the stock and the gold.  
And as it happened with all derivatives, way off, the bond is short. We are long with the stock and short with the bond, yes.  
Carefully, if these were approved, the bond will be long and the store will be short, but this is not approved. We have future cash flows and having future cash flows we can calculate.  
The price today, same payouts, same price.  
Make sense?  
OK.  
Let me continue.  
Assume the annual risk rate is 2%. The annual dividend yield is is 3%. OK, this is so simple. This is just how great in terms of the formula.  
And then excel exercise.  
OK, consider a European call. OK, this is black and sos formula. You can forget about this exercise regarding the part of black and sos and the numerical part, yes.  
Knowing his ratios is important and we will talk next day about betas you want.  
Yes, right now. Why? Because.  
Uh.  
OK, I can talk about beta so good. What is the idea? We're already beta.  
What was better? Do you remember better? How much better is the?  
OK. The intuition of beta is beta is the risk, yes.  
What is riskier?  
The derivative or the on the or the stock?  
But anybody? No. So which one should have a higher beta?  
Whatever the derivatives, but I I don't want to talk about betas right now because I want to move into the.  
Yeah, game is.  
Kim and Jeffrey, both of them are in one with his side and the other one whatever.  
Hey.  
OK, I want to move into.  
Sample final one and before moving into sample final one.  
I know that. I know that for this course you don't need two maths.  
The transcriptions. This course has to do more with doing exercises.  
But because I have Sir trans all transcription with you, I have upload all transcriptions.  
Into a.  
Into a notebook LM, but I'm going to serve with you.  
A special but and everyone with the link.  
I'm gonna serve with you.  
The link here you've got all the transcriptions.  
And let me show you regarding.  
Oh oh, this is English. Perfect.  
Uh.  
Let me see if this is English. No, this is not English. Sorry.  
If you do it with yourself, with your with your with yourself, with your Google account, it will be yes, but the idea is foundation of finance.  
Methodology of the course.  
Exercises. This has to do with technical things. It's time I ask ChatGPT for for something or ChatGPT or Google. In this case Gemini, I will get a different result. It's time the result will be different.  
And no matter fundamental concerns.  
Finance is based time value of money, yes. Portfolio theory is here. Portfolio theory, valuation of financial instruments and risk management. What I'm going to do is I'm going to come here.  
And I'm going to select.  
Yes, they have.  
Says here. Let me please.  
Of this, of this.  
Yeah.  
I'm just deselecting.  
Yeah, I have just select second part of the course, yes, and in the second part.  
And the second part.  
Would you give me a?  
Resumary of all things that I should.  
Now from this part of the course.  
And here also with all these sources selected, I'm going to grade one map, another map, yes.  
The.  
OK, this comprehensive summary equity valuation, fundamental valuation model, dividend discount model, a Gordon growth model, required return and growth, sustainability growth, value creation and price earnings ratio, price over earnings ratio, present value of growing opportunity.  
Yes, this is absolutely. I mean, I have passed the whole course working with this, but personally I find this incredible. Why? Because I have just asked one tool to give me a summary of my whole course.  
There you've got it. Fix income, arbitrage and risk, arbitrage and pricing, arbitrage, law of one price, deals and return on HPR and interest rate structure and forwards, sorry.  
Here yields and return. It yields HPR and yield to maturity, then interest rates, structure and forwards yield curve.  
Year curve interpretation. The slope is determined by two factors, expectations and liquidity. A negative inverted deal curve strongly suggests expectations of future rate cuts as the positive liquidity premium is unable to overcome the negative expectations, yes.  
If the deal curve flow is positive, why can we know? We will see with detail, but we cannot see anything.  
Duration and risk management. Duration is absolutely important. Immunization and derivatives options.  
And swaps, yes. Also let me see the map regarding this part of the course.  
Valuation fixed income and derivatives.  
Equity, fixed income and arbitrage, interest rates and risk.  
Risk management with this has to do with interest rate risk, derivatives and a I and all these things I've been talking about a I valuation equity valuation again same thing dividend discount model.  
Return and growth and price over earnings, yeah.  
What do you think regarding this?  
I think it's incredible.  
I don't know about you. What do you think regarding all these tools, but personally I think that.  
It's something great. Also, Casia, you didn't came last last week. We we went through another tool that is. I don't want to take this out. We went through one tool that is.  
Google Studio AI.  
and regarding this tool  
Here, yes.  
I don't know what is this, but I'm not doing a press this. You just press here and what is this? This is a.  
Prompt where you can ask to design a complete app. You will get the complete app. I'm not going to use this right now. I'm going to go through problem once I see one case of use.  
Once I see one use case, I'm going to here. I'm going to start with this and if I see something interesting, I will tell you. I will tell.  
I will develop an app in order to explain what, yeah.  
OK, have you tried sample final one?  
No one? No.  
Do you have any questions?  
Finally is Monday next week. No Monday next week. No Wednesday next week, next week.  
Do you have any questions? Do you want me to go through something?  
What question?  
Or also I can I can start one by one, yes.  
OK, I have the end. First question is which of the following the lowest Macaulay duration?  
OK, I'm gonna use.  
Yeah.  
I want to the the low.  
And add in order to.  
Explain my students in a we are into it.  
Beef way.  
This question.  
14.  
I want the app to be in a week.  
Alright.  
Don't want the answer this question, but give me tools to X.  
Playing it. What else? What else? What else I want? I want a graph with a balance.  
And I want everything to be in the practice, yes.  
This is a prompt. I'm going to construct this on one hand, but.  
The the turkeys in the the the app start running, thinking, thinking about the yeah, yes.  
He's thinking, but before I want you to read.  
Which of the following risk free securities has the lowest Macaulay ratio? What is Macaulay ratio? What is ratio?  
No one.  
Racial. Yeah, whole match. The price will change when you can rate change. Yes, we can rate sensitivity.  
Among all, which one will have the highest ratio? The highest?  
Which one will have the highest ratio?  
What is duration? How much the price will change?  
Imagine that the bond will pay.  
The one with has a maturity of one day.  
No matter how much price will change that, if one day I will have my payment, price won't change too much. You understand it on the other hand.  
It maturity is 30 years.  
A small change in interest rates would mean a big change in price. Make sense?  
So first idea is that the if I'm talking about 0 compounds, the longer.  
The longer the maturity, the more the price will change when interest rate changes.  
Make sense?  
Second idea, there are couples.  
The bigger the coupons.  
The less the price will change because I'm going to have money closer in time, yes.  
So if I compare these four bonds, which one will be the one that will have?  
The lower, sorry, which is lowest will will have the highest duration.  
The city of Pomon. The city of Pomon will have the highest ratio then later.  
Is the help, yes.  
Then the second one, the highest.  
The bigger the coupons, the bigger the coupons.  
The lower the maturity, no. So the second one will be this one.  
And then between this one and this one, same coupon, but the sooner the coupons the lowest the maturity so.  
Which of the following risk-free securities has the lowest McCauley ratio? Correct answer will be C. Make sense.  
And let me see what do we have here.  
He's a full up.  
File.  
Look.  
Hey.  
On C.  
OK, what does this mean?  
Let me configuration, yes. Oh, one A.  
Is a maturity.  
Oh, this is one. Oh, I've got all all these ones here.  
OK.  
OK.  
Bon A is a zero Bon Bon, yes, Bon B.  
Of duration ranking, yes, the long the lowest is gone see, one B and one D.  
The duration is at the end. Don't you see?  
Bond B if I want to balance this duration is 4.48. These are coupons of 4%. Make sense.  
The bigger the coupons, the lower. And here here is the one with the lowest and here coupons are bigger. Make sense.  
Let me play with this. Just one second. Bonnie Conrade.  
Pune.  
I'm doing big. You see that the bigger annual quarter, yes, the bigger and the shorter, the lower the maturity. Make sense.  
Don't you feel or don't you think that this is incredible?  
I have asked, yes, I have just asked for next course. I will do this before the class.  
I will not do it live because.  
What do you think it would be better, to do it live or to do it before class?  
Before and having it properly and yes, don't focus, don't talk about AI and talk about.  
But.  
Yeah, it's important.  
AI probably, no. AI is much more important.  
Thinking about your development, learning these tools.  
Thanks everything.  
But before, yes.  
OK.  
Hey.  
Second one.  
If the earnings and I'm going to share with you.  
I'm gonna, so would you this?  
Who is your app copy?  
I don't know if I need to publish this way, but copy.  
Mhm.  
Where is your English?  
OK, if the earnings.  
Do you remember what the global back ratio was?  
Do you remember what equity evaluation was about?  
I'm going to let you 5 minutes or two minutes in order to read this and try to answer it by yourself. OK, I will fill this with water and I will come back.  
Because I can answer this question in Michael, but it's better you to think about it, yes.  
These tools that I have just showed you.  
Uh, Google Studio AI was released two weeks ago.  
Two weeks ago. What I mean is that it's not a lack of time in showing you. I'm showing you something that is absolutely brand new.  
I don't know how this will affect your academic life.  
And the only point that will stop this from being a reality is inertia, inertia, inertia.  
Inner says that university is so big that there are times that that change need that.  
OK, Nick, do you understand something regarding this?  
Can you give me an answer or an intuition at least?  
OK, before doing numbers.  
What was blowback ratio?  
Like how much the the company reinvests.  
Yeah, I mean, you have a company normally has earnings, yes. And what can we, what can the company do with these earnings?  
Or blow back. Racist. How much?  
Of these earnings will be getting.  
For example, if low up ratio is 100, dividends will be 0.  
The blowback ratio is 0. Earnings and dividends would be the same. Make sense.  
So the question we are asking ourselves is to the company we invest.  
The dividend in themselves or not?  
And now what is PVO present value of growing opportunities? Yes.  
Video is in case.  
The company will not reinvest money themselves.  
The price would be one. What is the difference between the price without reinvesting in them, Sir?  
What is the difference between the price of the company reinvesting in themselves compared with the actual price? Nowadays price, yes.  
So video.  
Peace price.  
Price is dividend over K -, G This is price today, yes.  
This is the price today.  
What is the price?  
Without growth.  
Is the price considering not dividend earnings equal to dividend because there is no growth. So is the price of doing earnings over?  
OK, yes.  
What is PVDO?  
The difference between present value of growing opportunities is the difference between.  
This price minus earnings over K Yes.  
This is PVO and PVO will be positive or negative, yes.  
Video would be positive or negative.  
If PBGO is positive, I will be happy or unhappy.  
I will be happy because with the money that I'm not receiving as a shareholder, the money is creating growth.  
On the other hand, if video is negative, I would be unhappy, yes.  
So in order to close fully understanding of this.  
There are three ideas.  
What is gay?  
Risk rate plus beta time return on the market minus risk rate. Make sense.  
What is K?  
But it's OK, but the market is safe for me.  
And then.  
I have. I know that earnings.  
Times 1 -, b is equal to dividend, yes.  
Yes.  
And what the company is doing with their earnings is getting growth, yes.  
Growth. How much growth over be I'm getting return on equity? Yes. What is return on equity? How much growth?  
Hungary or you need to be, but the idea is.  
What is return on equity?  
What the managers are doing with the money that they keep with themselves.  
The return they are getting, how much growth they are getting per unit of earnings that they keep. Make sense.  
So at the end, one thing is what the market expect and another thing is what the managers are doing, yes.  
After this explanation.  
After getting this intuition.  
Read again.  
OK.  
If the earnings rotation low back rate is positive.  
And the return on equity is less than the required return.  
On the equity, the present value of growth opportunity is.  
Global rate is positive, yes.  
And return on equity is less than K.  
So PVEO would be.  
Same question. Imagine that if the blowback rate is 0.  
If blowback rate is 0 and return on equity is less than required return if the blowback rate is 0.  
What would be the correct answer?  
See because if blowback rate is 0, earnings are equal to dividend and there shouldn't be growth.  
You do everything, yes.  
Another question, same question, but if return on equity is equal to return on, if return on equity is equal to the required return on the equity.  
Zero and if return on equity is higher, PBO will be positive.  
Make sense?  
Then.  
OK.  
Hold this question.  
This question, and this question is absolutely important to fully understand, to go deeper, to take the exercises, to understand exercises, yes.  
This question is not as important because it is talking about convexity. What is convexity? The second derivative. Why this question is here? Because I want you to once you are reviewing this, to review everything and to work with it.  
But this question is not as important. Let me go with holding duration constant. As the complexity of a bone increases, the percentage price change for a given decrease in yields.  
What is complexity?  
What is convexity?  
The dispense normally.  
This is the price. This is interest rate.  
Yes.  
The relationship between the price of the bond as interest rate increases is negative. We have negative relationship, yes.  
The ratio in this point is the slope and this is slope is not.  
A line is cool, yes.  
Ratio needs the first derivative, what is convexity? The 2nd derivative.  
The more the more the convexity.  
The more the more the complexity.  
The more the complexity, the more complex.  
Yes.  
The more good mix.  
As interest rate increases, the price will decrease less.  
It.  
But.  
I don't waste too much time in this question.  
Oh, OK. I have talked about duration, about fixed income. I have talked about equity and let me talk about derivatives, yes.  
Please try to answer by yourself this question.  
Or an at the money put option, yes.  
Add the money put option. The option could be.  
In the money, out of the money or at the money, yes.  
Yes, this is a book.  
This is that, yes, the intrinsic value. Sorry, the intrinsic value for a good. Yeah. What is this is low? Negative one. What is this is low? Zero. Yes.  
These kind of exercises are so, so simple to understand.  
Yes.  
If I am  
If I am in the money, this room would be negative one.  
If I am absolutely out of the money, it will be it will pay to zero. It will pay -1. It will pay to zero, yes.  
And if I am antimony, the flow will be between -1.  
And zero, yes. So the slope would be negative, higher than -1 and lower than 0.  
So.  
Then let me read for an at the money put option at the money put option if the stock price increases by 1.  
Then the put price will.  
If the stock price increases by one, the put price will decrease.  
By less than one, yes.  
Make sense?  
If it would be an at the money call.  
If the stock price increases by 1.  
The call will increase by less than one, yes.  
So this would be true in the case of a call. This is true for the case of a put.  
This one will never be true. It will never decrease by more or by less than by more than one or by less than -1.  
And careful with at the money, in the money or out of the money.  
Who have exercises like this later? Yeah.  
Make sense? What are these exercises about? These exercises are like a refresh. Refresh, yes.  
Next Wednesday we have class and I will go through more exercise, more of these short exercises.  
But I want you to do the exercises by you, by yourself, and I'm gonna take some of the I'm gonna look for.  
One of these numerical problems and I will take one, yes, and let me choose.  
OK, this one I will let you this exercise first one or I can do it next day. Yes, I don't have any problem you do it, but this is regarding equity valuation. Yep.  
OK, I'm going to do this one, the SEC, the 2220 second.  
Why? Because has to do with bond valuation and has to do with forward rates, yes.  
And it's something I want to work with you.  
And also 24 could be interesting because it's again another ball. I'm going to do this exercise 22, yes.  
Current one year, please free yield this to person.  
The spot in your one is 2%.  
The one year forward rate is 3%.  
What is the price today of a two-year annual pay or 4% coupon on with face amount of 1000? Yes.  
This one is absolutely important you to understand it.  
I'm asking 40 and 1040, yes.  
And I have the spot in year one, but I don't know the spot in year 2, but I know forward rate makes sense.  
How will I calculate this price by doing 40 / 1 2%? Yes.  
Plus 1040 / 1 plus the spot in year 2.  
But I don't know the spot in year two. I know for what year one makes sense.  
How can I calculate this spot? So so simple.  
How can I calculate that spot?  
One plus the spot. Let me call the same.  
E2 Yes.  
1 + 1 + 4 one it's equal to 1 plus this vote right to the second. Make sense.  
From here. From here.  
You know this one. You know this one.  
You know this is 2%, this is 3%.  
And you can calculate this new one that this new one would be.  
One plus let me 1 + 2 percent, 1 + 3 percent. It would be equal to 1 plus the zero I'm looking for, yes.  
That your mean will be around 4%, but you can do the numbers and you will get that this is the your mean.  
It would be around 4%. You got 4% and you can calculate it. Excels.  
This exercise is simple.  
Really quick, that last number you got, that's the.  
Here, let me let me do it with Excel.  
Let me do it with Excel.  
I mean, we didn't think so.  
OK.  
OK.  
Once a year, 41,000.  
40 Yes, and I know that the sport is.  
2%.  
This one is 3%, yes, and I need to calculate.  
The one is combined.  
To combine cells.  
OK, come back.  
Yeah, sorry.  
And this is how can I calculate this by doing?  
Of 1 + 2 percent.  
Thanks.  
1 + 3% this.  
And this is square root -1, yeah.  
OK. And this is 2.0, I said 4%, sorry.  
And vision was not correct, but you do the numbers and you will get 2.5%. That is the half, yes.  
I completely misunderstood that you do the numbers 2 percent, 3% and the spotting year 2 would be 2.5%.  
And it's logical. First year you think you are going to get a 2%. If in the second year you get a 3%, it's because if you wait till year two you will get 2.5.  
What is this present value 40 over?  
1 + 2% What is the 2nd present value?  
1 + 2.5 raise to the second, yes.  
And price should be.  
The sum of these numbers make sense.  
I've got this is the spot, this is the spot in year 2 and this is the forward.  
And 2.5 would be the geometric average between 2% and 3%.  
Around it, you may be, yeah.  
More questions?  
OK. Assume the risk free rate is 4%. Market premium is just a stop expected. Yes, this is also really, really important you to understand. OK, I'm going to do it risk free rate is for OK this first part.  
Let me see if I can.  
No, no.  
Rectangle, yes.  
OK.  
OK.  
OK, first idea. Assume the risk rate is 4% and market premium. Market risk premium is 4%.  
A stock with a beta of 1.5 and expect a return.  
An expected perpetual growth of 5% has a current dividend of one. OK, then first thing we should do, we need to calculate the discounting rate. OK, yes.  
Rate is 4%, so K is the SML 4%.  
4%.  
Minus sorry, plus beta time 1.5 times market premium.  
That is 4%, yeah.  
Yep.  
So is 10% that is going to rate is 10%.  
Assume the risk rate is 4% and the market risk premium is 4%. OK, a stock with a beta 1.5, we know it and expected growth. OK, expected growth rate.  
Of 5% expected growth rate is.  
5%, yes.  
Dividend 0 is 1.  
Dividend today is what? What is the price of the stock in one year?  
Why I'm doing this? Because I have already told you that it's important, but this exercise it would be better if you do it by yourself.  
OK, I'm going to calculate the price, but in order to calculate price dividend 1 / K -, G, I need to calculate first dividend in one year, dividend in one year, yes, and dividend in one year is going to be dividend today times.  
One plus pro, yes.  
And this is dividend. In one year I can calculate price.  
Today, price today's this dividend.  
Over is a perpetuity, so over K.  
This price today is 21 and price within a year.  
Price in one year is going to be 21 times.  
One plus the growth.  
Yes.  
This is price in one year. Another way in order to calculate this, I can calculate why what the dividend in two.  
Years will be and the dividend in two years is going to be dividend in one year or the dividend today dividend in one year times 1 + G.  
Or the dividend today times one plus.  
The price to the second, yes, same number. And once I've got the dividend in two years, I can calculate the price in one.  
Here by calculating this dividend over.  
KK minus E Yes.  
What I want you to go backward, forward, use formulas, understanding. Yes, look this kind of exercise. In this exercise if you try to look for the formula.  
You will be dead. Why? Because there is no, I mean there is no formula. There is just going, knowing what is a. I mean the dividend growth, the stock will grow. How to calculate the price given the dividend, the dividend in year one, the dividend in year 2 makes sense.  
Um.  
Let me do exercise 24 in order to finish.  
Do you want me to do any exercise in particular?  
Please for next Wednesday for the sorry for this Wednesday.  
Vocal, because there is no point in me answering or in me doing the exercises.  
A1 year risk free zero bond bond with face value 1000 sells for 970. A two year under expectation what is expected one year rate at that out. This is like that one.  
I have a zero poupon bon in year one. I have a zero poupon bon at risk 3.  
No, no, no, no. This is not like one. This is a little bit more complicated.  
Why? Because I have a two year annual pay 4% coupon that sells at the bar. Let me go. Yes, first I first idea a one year risk free 0 coupon.  
What can I calculate with the first with the one year with three of Pombo the spot in year one? Yes.  
I can calculate the spot in year one. How do I calculate the spot?  
Spot in year one. How can I calculate the spot in year one? Future value over present value 1000 / 970.87 -, 1 yes.  
And this is the spot.  
This is the spot rate in year one.  
And now what do I have?  
Yeah, for sure.  
I have these payments for a two year zero for a sorry for a two year bond with coupon this and while I'm while I'm while I'm talk.  
I'm told, I'm told that the price of this is 1000, yes.  
I am told this.  
And I am asked to calculate the forward.  
In year one, yes. Before calculating the forward flow in the spot, what can I do? I can calculate the spot in year 2. How can I calculate the spot in year 2? First thing I need to get rid of.  
Is this So what I'm going to do? I know that 1000 today is 1000, yes.  
And I'm going to calculate present value today.  
of this. I'm going to subtract from 1000.  
The impact of the first couple.  
Yes.  
So what I have done?  
I have create a.  
961 and careful, not a housing.  
The amount of money that I will receive in two years would be 1040. Make sense.  
Knowing this, what can I calculate?  
I can calculate the spot in year two. Yes, what is going to be the spot in year 2?  
Future value over present value price to 1 / T.  
-1 Yes. And what is this? The spot in here?  
True.  
The spot in year 4%, yes. Now I've got the spot in year one, the spot in year two. What can I calculate 4 war between year one and year 2?  
Yep. How would I calculate the forward? I'm going to do the numbers so quick. Yes, you can do it with that equation. What I'm going to do is from that equation.  
From that equation, the one that you got on the blackboard written, yes.  
What I'm gonna take is.  
One plus the spot in year 2 rise to the square over.  
One plus the spot -1. What is this? This is going to be the power I'm looking for that is going to be a 5%.  
Yep.  
If this instead of 4.02 you put 4%, you would get a 5%, yes, right here, yes, the 4% and you will get some something closer to 5%.  
Person.  
Please, for next day, do the exercise by yourself. Yes, because if not, me doing exercises means nothing.  
Any more questions? See you next week. Yes, I'm not going to send you these exercises and if you try it and you don't know how to do it, I don't have any problem in repeating next Wednesday.  
Thank you.  
One more question, please. Well, the forward rate, because the question can be by forward rate because.  
Normally regarding forward rates, you would be there that are forward rates or also.  
Forward rates. Nicolas. Forward rates. I might listen. Yeah, I might listen. OK, OK, perfect. It's of course. Forward rates.  
Normally something like what is the rate between year one and year two? You would be said regarding, for example, if you have a seed of coupon bond, it will always be spots, but if you are told that you will receive a seed of coupon bond or you will pay a.  
You put money in one year time waiting another way is this rate will be over. The only thing we will distinguish is between spots and forward. What is a spot rate from today into one year, from today to two years?  
So the rate of what is up forward rate?  
What is a forward rate?