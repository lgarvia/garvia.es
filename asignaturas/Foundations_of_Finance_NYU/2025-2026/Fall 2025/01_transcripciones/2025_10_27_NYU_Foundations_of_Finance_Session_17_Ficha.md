# 📘 **Teaching Log – Session 16 (27 Oct 2025)**

**Course:** Financial Markets (NYU Madrid)  
**Professor:** Luis Garvía  
**Topic:** Arbitrage, the Law of One Price, and Zero-Coupon Bonds

---

## 🧭 **Session Overview**

**Objective:**

- Understand the **concept of arbitrage** as the foundation of modern finance.
    
- Connect arbitrage with **market efficiency (EMH)** and the **law of one price**.
    
- Review **zero-coupon bonds** and introduce **yield curve (term structure)**.
    
- Anticipate the **transition to fixed income** (bond pricing, duration, convexity).
    

---

## 🧩 **Structure of the Session**

### 1️⃣ From Market Efficiency to Arbitrage

- Reviewed the **Efficient Market Hypothesis (EMH)**:  
    Saying a market is efficient = saying **no arbitrage** is possible.
    
- Arbitrage opportunities **drive markets toward efficiency**.
    
    > “Because there is arbitrage, markets tend to become efficient.”
    
- When inefficiency appears → traders exploit it → prices adjust → inefficiency disappears.
    
- Analogy used: detecting a professor’s mistake — improves class quality _and_ gives advantage to the one who spotted it.
    

---

### 2️⃣ Defining Arbitrage

**In theory:**  
A trading strategy with

- **No risk**,
    
- **No initial investment**,
    
- **Positive payoff** at some point.
    

**In practice:**

- Risk exists (execution, timing, funding, liquidity).
    
- Arbitrage can generate huge gains _or_ major losses.
    

---

### 3️⃣ The No-Arbitrage Condition

> “Saying that the market is efficient is the same as saying that no arbitrage is possible.”

- Using the **no-arbitrage condition**, we can determine **asset prices**.
    
- Same future cash flows → same current price.  
    Otherwise, there’s an arbitrage opportunity.
    

---

### 4️⃣ Example 1 — _Cats and Tigers_

Two zero-coupon Treasury securities:

- **CATS** (“Certificates of Accrual on Treasury Securities”)
    
- **TIGRS** (“Treasury Investment Growth Receipts”)  
    Both pay $100 in one year.
    

|Security|Price|Yield|
|---|---|---|
|CATS|94.36|≈ 6%|
|TIGRS|95.24|≈ 5%|

💡 **Observation:** Different prices for same cash flow → arbitrage.

**Strategy:**

- Buy CATS (cheaper) → pay 94.36 now → receive 100 later.
    
- Short TIGRS (more expensive) → receive 95.24 now → pay 100 later.
    

✅ **Net Result:**

- +0.88 today (risk-free profit)
    
- 0 future exposure → pure arbitrage.
    

**Lesson:**  
Arbitrage pressures equalize prices. If transaction costs exist → fewer arbitrage opportunities → market less efficient.

---

### 5️⃣ Transaction Costs and Taxes

- **With transaction costs:** arbitrage may disappear.  
    Example: shorting cost = $1 → not worth earning $0.90.
    
- **Policy insight:** taxing _profits_ is more efficient than taxing _transactions_ (keeps markets efficient).
    

---

### 6️⃣ Example 2 — Pricing a Coupon Bond via Zero-Coupon Bonds

Three zero-coupon bonds with face value 100:

|Maturity|Price|Yield|
|---|---|---|
|1 year|98|2.04%|
|2 years|96|2.06%|
|3 years|93|2.40%|

**Bond:** 3-year, 10% annual coupon, FV = 100.

#### (a) Replicating Portfolio

Construct a portfolio of zeros replicating the coupon bond cash flows:

|Year|Cash Flow|Strategy|
|---|---|---|
|1|10|Buy 10% of 1-year zero|
|2|10|Buy 10% of 2-year zero|
|3|110|Buy 110% of 3-year zero|

💰 **Price =**  
( 0.1·98 + 0.1·96 + 1.1·93 = 121.7 )

#### (b) Discounting Using Spot Rates

[  
P = \frac{10}{(1+0.0204)} + \frac{10}{(1+0.0206)^2} + \frac{110}{(1+0.024)^3} ≈ 121.7  
]

✅ **Same result:** Law of One Price holds.  
This exercise introduces the **spot rate** and **term structure of interest rates** (yield curve).

---

### 7️⃣ Example 3 — Dynamic Hedging (Forward and Zero)

- 1-year zero bond today: price = 98 → receive 100.
    
- Forward contract: agree today to buy 1-year zero _one year from now_ at price 98.
    
- Combine both → synthetic 2-year zero bond.
    
- No-arbitrage price = 96.04.
    

If market price < 96 → **buy the underpriced bond, short the components** → arbitrage.

---

### 8️⃣ Broader Context: Fed, Powell, and Monetary Policy

💬 Digression at end of class:

- Discussion of **Jerome Powell** (Fed) and expected **25 bps rate cut**.
    
- Connection between **fiscal policy (shutdown)** and **monetary policy (rates)**.
    
- Reference to **Polymarket** predictions (AI prediction markets).
    
- Analogy: the **yield curve** as a “thermometer” of the economy.
    
    > “When you feel it’s about to rain — the yield curve shows the storm coming.”
    
- Fed removing liquidity = **Quantitative Tightening (QT)**.  
    Previous money injections = **Quantitative Easing (QE)**.
    
- Parallel with 2007–2008 → risk of new bubbles (liquidity strain, repo markets).
    

---

## 🧠 **Key Concepts to Retain**

|Concept|Definition / Insight|
|---|---|
|**Arbitrage**|Riskless profit opportunity from price discrepancies.|
|**Law of One Price**|Same payoffs → same price.|
|**Zero-Coupon Bond**|Single payment in the future.|
|**Spot Rate**|Yield of a zero-coupon bond for a given maturity.|
|**Yield Curve**|Term structure of spot rates; “thermometer” of financial markets.|
|**No-Arbitrage Pricing**|Foundation of fixed income and derivatives pricing.|

---

## 💬 **Instructor Notes**

- Excellent conceptual bridge: from **market efficiency** to **arbitrage pricing**.
    
- Student engagement high; humor and examples helped (CATS, TIGRS).
    
- The “law of one price” clearly demonstrated numerically.
    
- Digression into macro (Fed, QE/QT, Polymarket) gave real-world connection.
    

---

## 🧩 **Next Steps**

- Next class → **Fixed Income I** (bond valuation & duration).
    
- Reinforce the **spot rate logic** and **yield curve interpretation**.
    
- Revisit **arbitrage** later in **Derivatives** (put–call parity).
    

---

¿Quieres ahora las _Students Notes_ (versión limpia en inglés con fórmulas, ejemplos y checklist para exámenes como hicimos con la Session 15)?




# **Financial Markets — Student Notes (Session 16)**

**Date:** October 27, 2025  
**Topic:** Arbitrage, Law of One Price & Zero-Coupon Bonds

---

## 🧭 1. Connecting Ideas

- Last class → **Market Efficiency Hypothesis**
    
- This class → **Arbitrage as the engine of efficiency**
    

> Saying “the market is efficient” = saying “no arbitrage is possible.”

When an inefficiency appears:

- Arbitrageurs exploit it → profit + prices adjust → efficiency restored.
    
- Arbitrage = the correction mechanism of financial markets.
    

---

## ⚖️ 2. Definition of Arbitrage (the theoretical ideal)

A trading strategy that:

1. Requires **no initial investment**
    
2. Has **no risk of loss**
    
3. Yields a **certain positive profit** at some time
    

In reality → there is always execution, liquidity, or funding risk.  
👉 True arbitrage is rare but serves as a benchmark for pricing.

---

## 💰 3. The No-Arbitrage Condition → Law of One Price

If two assets produce the **same future cash flows**,  
they **must sell for the same price today**.

Otherwise, arbitrage exists.

| Situation       | Arbitrage Action | Result  |
| --------------- | ---------------- | ------- |
| Cheaper asset   | Buy              | Price ↑ |
| Expensive asset | Short / Sell     | Price ↓ |

➡️ Market forces push both prices to equality.

---

## 🐱 4. Example 1 – “CATS & TIGRS”

Two zero-coupon Treasury securities maturing in 1 year:

| Security | Price | Face Value | Yield |
| -------- | ----- | ---------- | ----- |
| CATS     | 94.36 | 100        | ≈ 6 % |
| TIGRS    | 95.24 | 100        | ≈ 5 % |

**Arbitrage strategy:**

- Buy the cheaper (CATS) → pay 94.36 now → receive 100 later
    
- Short the expensive (TIGRS) → receive 95.24 now → pay 100 later
    

✅ Result = + 0.88 today with no risk → pure arbitrage  
⚠️ If transaction costs or shorting fees > 0.9 → arbitrage disappears

---

## 🧾 5. Transaction Costs & Market Efficiency

- Transaction costs create a **“no-arbitrage band.”**
    
- When costs exist → markets become **less efficient**.
    
- Policy note: taxing _profits_ is less distorting than taxing _transactions_.
    

---

## 🧮 6. Example 2 – Pricing a Coupon Bond via Zero-Coupons

Three zero-coupon bonds (FV = 100):

| Maturity (yrs) | Price | Spot Rate rᵢ |
| -------------- | ----- | ------------ |
| 1              | 98    | ≈ 2.04 %     |
| 2              | 96    | ≈ 2.06 %     |
| 3              | 93    | ≈ 2.40 %     |

**Bond:** 3-year 10 % coupon, FV = 100

**Cash flows:** 10, 10, 110

### (a) Replication method

Create same cash flows with zeros:

[  
P = 0.1(98) + 0.1(96) + 1.1(93) = 121.7  
]

### (b) Discounting with spot rates

[  
P = \frac{10}{(1+0.0204)} + \frac{10}{(1+0.0206)^2} + \frac{110}{(1+0.024)^3} = 121.7  
]

✅ Same result → **Law of One Price holds.**

---

## 📉 7. Yield Curve (Spot Rates Structure)

- Each zero-coupon rate = a **spot rate.**
    
- The set of spot rates over maturities = **yield curve** (“term structure”).
    
- Acts as a **thermometer** of financial markets:
    
    - Upward slope → growth expectations
        
    - Inverted curve → recession warning
        

---

## 🔁 8. Example 3 – Dynamic Strategy (Forward & Zero)

- Today’s 1-year zero: price = 98 → receive 100.
    
- Forward contract to buy 1-year zero one year from now at 98.
    
- Replicate a 2-year zero.
    
- No-arbitrage price ≈ 96.04.  
    If market price ≠ 96 → buy cheaper / short expensive → arbitrage.
    

---

## 🧠 9. Key Takeaways

| Concept              | Meaning                                    |
| -------------------- | ------------------------------------------ |
| Arbitrage            | Risk-free profit from price discrepancies  |
| Law of One Price     | Same payoffs → same price                  |
| Zero-Coupon Bond     | Single future payment                      |
| Spot Rate            | Yield of a zero for its maturity           |
| Yield Curve          | Set of spot rates → economic “thermometer” |
| No-Arbitrage Pricing | Base for bond and derivative valuation     |

---

## 📋 10. Exam Checklist

✅ Explain why “no arbitrage = market efficiency.”  
✅ Apply the law of one price to derive a bond price.  
✅ Compute a bond price using spot rates.  
✅ Interpret the yield curve (spot rates vs maturity).  
✅ Identify when arbitrage is possible with and without transaction costs.

---

## 🌍 11. Real-World Connections (End-of-Class Discussion)

- Jerome Powell & the Fed → expected 25 bps cut.
    
- Fiscal vs Monetary policy → shutdown vs rates.
    
- **Quantitative Easing (QE)** = printing money; **QT** = withdrawing liquidity.
    
- **Polymarket predictions** used as a live example of information markets.
    
- Yield curve = “financial thermometer.”
    
    > “When you feel it’s about to rain — the yield curve shows the storm coming.”
    

---

## 🔗 Next Class

**Topic:** Fixed Income I — Bond Valuation & Duration  
We will build on the spot-rate logic and prepare for derivatives (arbitrage pricing again via put–call parity).

---

¿Quieres que te prepare también el **Markdown descargable (.md)** o el **PDF** con estos apuntes (como con la Session 15)?


# Transcripción
27 de octubre de 2025, 5:08p.m.

  
No.  
OK, disco.  
OK, you look like another person. You look like another person. So same happened to me. Welcome. Take one.  
OK, today's class we're going to talk about having cars. You remember a little about the fishing market and policies.  
What?  
Do you remember something about the VC Marriott? What was it about?  
It was a lot of information and considering the market as efficient.  
Was the same as considering that everyone has same information, you remember and one of the questions that I did several times is.  
OK.  
No, the question is not is not if a market is efficient or not. Do you remember the question was what happens when there is under business?  
And I move the question to people. Are you perfect or are you a disaster? This is not the correct question. The correct question is what happens when I make a mistake and what happens when I make a mistake that if you detect it?  
For example, if J detective detective.  
You think that I'm making a mistake. You correct me, but at the same time you are getting two things done.  
One thing is that the class is better. Why the class is better? Because you have solved my my mistake and thanks to this everyone has learned. And the second one is that you are going to take a plot in. Why? Because how it has the the mistake.  
Do I see or yeah, Jake has the day, the mistake and.  
Because of that, I'm gonna need you extracted. Make sense.  
When talking about market efficiency, it's the same.  
What happens when there is an inefficiency that the one that detect the inefficiency can?  
Me.  
It's a business opportunity for him. He can make money, he can make money and at the same time.  
He made the market more easy.  
I told you we're talking about the VC market hypothesis. I told you that.  
Saying that the market is efficient is the same as saying that there is no arbitrage.  
Is there arbitrage? Always there is arbitrage and thanks to arbitrage markets tends to efficiency, a market hydro, a market tending to efficiency.  
So what's that?  
Arbitrage is not possible. So because there is arbitrage, because there is arbitrage markets then to efficiency and markets then to efficient, arbitrage is hard to have.  
Make sense?  
OK, Rob, I think that you are the only one that has not. Yeah, I just did. Great. Thanks a lot. Then I am in peace with Natalia. Natalia is the students person that is not prosecuting.  
Persecute. What does persecute means exactly?  
Perla or Leah prosecute. Me neither. Prosecute. Let me just so quick because prosecutors follow or I didn't. I didn't know how to do restaurants.  
Late Spanish I I don't. It's not English.  
Those are cute.  
Oof. Yeah, no prosecutors to put into a lawsuit.  
Yeah, no, no, sorry for my. OK, So what are we going to talk about today? We are going to talk about arbitrage as I was saying.  
Arbitrage class is a continuation.  
Of the Fisher market hypothesis class, yes.  
And also today.  
Next day we will talk about fix income, fix income one. Today I will review.  
Phone concert.  
Today all of you should know how to calculate the price of a bond. We are going to review today. We are not going to see anything new. Next day we won't see anything new. But please, I want everyone to know how to calculate the price of a bond.  
Because after next class we will start with derivatives with duration and we will start to saying what's going on. Hi everyone, what's going on with interface.  
Ambos, so arbitrats. What is arbitrats?  
We are going to see in this class what is a reverse and we will. I will give you 3 examples with numbers that will help us also to review it to review boards, OK.  
Also the Bing Google review.  
Women so.  
Let me here it is.  
Tim and Ethan, one more. Ethan, 123456, No one more.  
Nicholas Nicholas Nicholas I always forget about someone now in I will wait for because I don't want to take attendance till everyone's here and I know all the names so I don't care too much about attendance. I always take attendance because.  
Student life asked me about dependence wood. Oh, we can. Don't worry. I'm oh, this is new and you have the water is open.  
OK, Ethan and Jeffrey. Today we will talk about arbitrage. Arbitrage lesson is a continuation of efficient market hypothesis saying that a market is efficient is the same as saying that no arbitrage is possible.  
And a market, the current question is not if a market is efficient or not. The correct question is what happens when the design and efficiency and what happens arbitracks. Today we will talk about arbitracks. So in finance theory.  
In finance theory, arbitrage is defined as a serious and trading strategy that generates a short profit without assuming risk. No initial investment, no negative cash flows at all time, a positive cash flow at some point.  
Yes, in theory, no risk in practice. Careful because.  
Partial trading, yes, statistic in in practice, careful because you can lose a lot of money because of arbitrage and there has been people that has made money, yes, so.  
Arbitrage opportunities.  
This is no arbitrage condition is the same as saying that the market is efficient. Yes, and what is being said here something that I have told you several.  
Thanks. More than 5 or 10 times.  
If there is an arbitrage opportunity, arbitrage use will explode it and will will make market efficient again so.  
The arbitrage opportunity will disappear. OK and.  
By using the no arbitrage condition, we can calculate prices. We are going to dedicate this class to calculate prices.  
First part of the course before the meeting, it was dedicated to talk about.  
Oh.  
Time value of money and portfolio theory. Portfolio theory. Summarizing a lot. Portfolio theory is the estimate. The more risk, the more return once.  
The midterm is over. We are going to dedicate this part of the course to talk about equity. We are done with everything fixed income and the developers. How are we going to calculate price of everything?  
Thanks.  
To the no RV trans condition.  
We will treat almost everything as if it were a zero combo. Today you will see. So today's class is in order to say that I have a future cash flow, let me call it future value.  
How are we gonna calculate the price of that future cash flow?  
We get present value formula, yes, always same formula.  
Always same formula.  
At the end.  
Today we will see one example in order to talk about the law of one price. Then we will construct A replica portfolio and then we saw we will see this exercise regarding a dynamic hedging.  
Strategy. Yes. What is the idea? And with first exercise, we will see it clearly.  
If there are two securities, if there are two securities that we will receive in the future, same cash flows, what can we say regarding these two securities that we will receive same cash flows?  
That today both securities should have same price. Why? Because if the securities will not have same price, arbitrage will be possible.  
Make sense?  
If both securities will have different price, what people will start doing with the cheapest, what people will start buying the cheapest and what people will start doing with the more expensive?  
So people will start selling the more expensive. A lot of people start buying the cheapest. What will happen with the price of the cheapest will increase. If a lot of people start selling the more expensive one, what will happen? The price will go down.  
Are you following me?  
So at the end, two securities will have same payouts, price should be equal and if not, our returns.  
We are going to dedicate one exercise to this one, then we will construct a portfolio. This exercise, the second one is so, so, so important because these are our view of how to calculate the price of our home, yes.  
And then finally, the last one I don't heard the last. OK, let me start by the first exercise. Suppose there are two kind of risk free 0 coupon bottles.  
Skats and tigers.  
Cats and tigers. Let me see if I can.  
Oh, it should be 10, whatever.  
Yeah.  
Tomorrow.  
No.  
Accounting certificates.  
I think Chicago got some from Chicago.  
Yeah.  
Two weeks, sorry, for here or the hour.  
There are no bones. They look like bones. Yeah, I was looking for this one.  
This is just a little of a little bit of a story.  
There you are.  
You are.  
CAS stands for Certificates of Accurate on Treasury Securities and Tigers stands for Treasury Incomes, Growth, Growth receipts. They they are also known as the lines. They used to be trade long time ago, but at the end.  
They were an earlier version on of the stripper down securities. What is a strip security? Imagine that you have a bond with coupons. Yes, here I got one.  
I have a bond with coupons. Yes, a bond with two coupons, but it's the street is just taking this bond, this zero coupon bond as I'm selling as if this were a zero coupon bond.  
As three Punisias transforming this bond with coupons into three different 0 coupons, so with felines, with cats and tigers.  
People were previous to felines. Yep. OK, let me come here. There are cats and tigers at the end. What is a cat and what is a tiger? A zero coupon ball. If you buy one of these, how much are you going to get?  
E.  
How much are you going to get in one year? 100. Face value is 100. And what can you see? Let me open this.  
Is.  
Cats 94.36.  
Able Assemb World 9D.  
4.36 and Tiger 95.  
4.24 makes sense. What is the rate? I don't know how this is block, but I don't know how to.  
Oh yes, I know. Oh, can you calculate the rate?  
Simple, no future value 100 over present value -1 rate is almost 6% in order to have same numbers down there and the rate of this one is.  
5% so decimals this is.  
Almost 6%.  
And almost 5% makes sense.  
There is a price meets match. There is an arbitrage opportunity.  
What people can do? People can start buying cats and selling a tiger. If you buy a cat, you buy a cat.  
How much money you need to pay?  
You need to pay. If you buy this 94, you buy this, you pay 94. How much you will get in the future? You will get 100, yes and.  
And.  
If you sell a tiger, how much money are you going to get? 95, but you will need to pay in the future.  
In the future.  
-100 makes sense. So what is the idea of DRB trucks?  
Today you are receiving a 36, no 34.  
Today you are receiving $0.90.  
And in the future, you don't need to pay anything. Make sense.  
Giving this price, Miss Max.  
Given this prize mismatch, what?  
A lot of people will start doing what I'm doing. A lot of people will start selling cats.  
No, sorry, we'll start buying gas and we'll start selling tigers. Yes, if a lot of people start buying this, what will happen with this price? Price will go up. And what will happen with this price?  
I won't go down. Make sense.  
This this first exercise is simple, but let me refresh you what is a zero combo.  
Yep, then if there are transaction costs.  
It is more difficult to make arbitrage profits, yes.  
What is a transaction cost?  
Someone that tells me I'm gonna, I'm gonna charge you a commission.  
I'm going to charge you are Commission and if you want to buy or to sell, you need to pay me a fee. Yes, let me see one example. Suppose there are yes, cats and tiger both paying 100 within a year.  
And the cost of shorting is $1.00.  
If the cost of shorting is $1.00, will it make sense to pay car returns?  
Now do you understand why, Perla? Will it make sense to pay $1.00 in order to get $0.90?  
No.  
The cost of shorting is $1.00, so is arbitrage is still possible? No. Then what are the highest and lowest possible prices of tigers relative to cats that prevent arbitrage?  
Cost of shorting of shorting where of $1.00?  
Cost of serving worth of $1.00 price this match should be higher than $1.00 makes sense.  
What if the cost of shorting is $0.50 and the cost of buying is $0.50?  
The same.  
One idea. I'm not going to ask this in the final, but I want you to understand what I'm going to say, what I'm going to explain.  
If you put that transaction.  
To trace, when are you busy?  
You are getting.  
Less arbitrage. There were there will be people that will make less arbitrage. Make sense.  
So Puri, Puri introducing.  
Introducing.  
Oh, sorry.  
So introduce, introduce, introduce.  
What do you say?  
Introducing transaction costs.  
Makes the market less efficient. We understand it.  
If you want to charge taxes instead of thinking about transaction cost, what you should think about taxes to gains.  
Access to games are much, much more efficient in terms of market efficiency.  
You understand it? OK, now for me, this one is the exercise.  
Today we are going to do this exercise, then we will do the next one, but I will dedicate to this exercise all time you need.  
Please, this exercise is absolutely important.  
What is the idea? You have 1230 coupons with different prices, yes, and then you have a bond with coupons. You are asked to calculate the price of the bond.  
Yes.  
Let me start with the zero coupon mode 9896 and 93.  
9896 and 93.  
This is the price of three zero bond bonds. If price is 98, one year, two years and three years. How much money if I buy this bond I will receive in one year?  
100 make sense?  
Regarding this one, how much I will receive in one year? Nothing. And in two years I will receive 100, yes.  
And regarding this one maturity of three years, I will receive 100.  
Make sense? I have three zero comments, 3 zeros, yes.  
First idea, I'm going to calculate the HPR. I'm going to calculate, let me call it the rate. Yes, I'm going to calculate the yield. I'm going to calculate the HPR. I'm going to calculate the IRR. Why?  
I'm saying HPR rate, I I I and deal because I have 0 compounds. They are 0 compounds and is the same makes sense.  
Tiffany, are you with me? Perfect.  
Let me start by the beginning. How do you calculate the rate? By doing future value over present value rise to 1 / 1 -, 1 make sense.  
How do you? How do I complete the rate of this one by doing?  
Future value over present value price to 1/2 the square root -1 yes.  
And how do I calculate the rate of this third one? Same thing 100 / 93 price to 1/3 because these are three years.  
-1 got it.  
Let me guess right here, right?  
Yep. Any questions?  
Kesia? Cody? Perla?  
You got this what I have done. There are three zero coupon bonds and knowing the price, I have calculated the rate. I have applied present value formula, yes.  
Now what I'm talking, what must be the price of a three-year annual coupon with a 10% coupon rate and a face value of 100? Yes.  
Coupon rate 10%, face value of 100. Let me write cash close, yes.  
First cast flow will be.  
What is the price? I don't know the price. Yes, I need to calculate.  
But yeah.  
I don't know what I'm looking for. I want to move these to the.  
Right. But I don't see it, OK.  
This is price and.  
I don't know the price, yes. Why are future gas flows?  
Vera Castro will be on also.  
Let me come back here. What must be the price of a three-year annual coupon bond with a 10% coupon rate and a face value of 100?  
Bala the prices.  
What are the what are the cash flows? I'm going to what are the payments I'm going to receive if I buy this phone?  
What are the payments? If I buy this phone, what are the payments I will receive?  
Yeah, all of you see.  
1010 and 100 of 10 and 100 of 10, yes.  
Now I'm going to solve this exercise through two ways.  
1st way is the more intuitive for you. Now second way is a little bit longer, but it's the way we we use the most.  
1010 and 110, yes. If no arbitrage is possible, what can I do? I can construct A portfolio combining these three zero compounds.  
Once.  
And I will look for a portfolio that will have same payments and same same payments means same price.  
Yes.  
How much of this will I need in order to have 10 in one year?  
How much of this should I buy?  
If I buy 100, I will get 100. No, I need 10. How much should I buy?  
10 over 100% Yes, all of you see that if I by.  
At 10% of this one I will have in one year.  
Oh, you see? He's here. Yep.  
How much of this one I will I need in order to get 10 in year 2? Another 10%? No.  
And how much of this one will I need in order to get 110?  
I don't know. Let me do the number. I need to buy 110 / 100%.  
And this is going to be.  
110%  
OK, how much should I pay today if I buy a 10% of 989.8? How much should I pay today 9.6? And how much should I pay?  
In order to get 90 in order to get 110 percent 93 + 9.3.  
Let me do these numbers. Let me do these numbers.  
98 + 10 that is 9.8 + 96.  
Times 10 percent 9.6 plus.  
93 110% this would be.  
93 + 9.3 that is 102.3.  
Total sum is 121.7. Makes sense.  
All of you have all of you have understood how did they do it.  
I'm going to use a different method and I want you to understand what I'm going to do now. Yes, all of you have followed this. What I have done, I have created a portfolio, yes.  
OK, now I'm going to make a spoiler. I'm going to make a spoiler of. I'm going to spoil next two classes.  
Year one, year 2 and year three. First one is 2.041. Let me exaggerate, yes, two point.  
2%.  
2.01 I am exaggerating yes 2.06.  
2.0406 and 2.4.  
Are you following me? I'm exaggerating this, yes.  
2.5 let me is.  
This is the point. The rate in year one, the rate in year two and the rate in year three, yes.  
What I have done, I have written, I have serum compounds and I have written the gills, yes.  
What is the name of this group? Have you ever seen this group? Have you ever heard about a group that shows hills?  
You will see and this is called the new proof and not only it's called the new proof, it has several names, temporary structure of interest rates.  
The.  
Right, right. So like this in Spanish, right, right. It's in Spanish, but we will talk about the new group, yes.  
And knowing that you prove, that you prove with me.  
The spot in year one, the spot in year two and the spot in year three. What is the spot? The rate of a zero component in year one. The spot in year two and the spot in year three, yes.  
If I have a bond with couples, how can I calculate the price of the bond with couples? Luke, please, all of you.  
Then over one plus the spot.  
Year 1.  
Plus second coupon.  
One plus the spot in year 2 price 2.  
The second plus.  
Face value plus last coupon over 1 plus the spot in year 3 raised to the third. Make sense.  
What are we going to do now? We are going to calculate this price.  
By saying 10 over this plus 10 over this plus 110 over that.  
10 / 1 2.041 We are not going to have any surprise. What is how much is 10 / 1 2.041?  
19.8.  
At 10%.  
At 10% of 98, yes.  
Let me go and calculate the second one, then over.  
One plus the rate.  
Price today. Second, no. How much this is going to be 9.6, yes.  
And and return over.  
One plus the rate price to the third. How much is this going to be?  
102.3102.3 Yes, and if I calculate the sum of these three numbers.  
I will get this makes sense.  
Fully understanding this exercise is absolutely important. Why? Because next day we will start with fixing cup. What is this exercise about? Calculating the price of a zero combo. Sorry, a zero combo.  
Calculating the price of a bond with coupons, yes.  
In this case there are three different rates. If you know the deal, there is just one. You remember in the midterm I in the exercise it was said that the rate was 4%. What do you calculate the price? If there is a constant yield then over 1.  
Plus 410 / 1 4 raised to the second and 110 / 1 4 raised to the third makes sense.  
Any questions?  
What are you doing?  
Oh, sorry.  
F.  
Let me.  
Let me and Mark by Sir, yes.  
Yes.  
OK.  
What I have thought.  
When I say thank you because it was so rude, but I have thought.  
I was thinking about interest rates.  
What is gonna happen this Wednesday?  
You know what is going to happen, Paula? OK, the phrase. And what is the only thing that matters in this class regarding things that could happen?  
Deron Powell, what Deron Powell is going to say.  
I don't know. I don't know what Jerome Powell is going to say.  
But what he probably said, we will say, we will say a cut of 25 basic codes.  
He will say a cut of 25 basic points. Careful.  
Because there is a shutdown and the the shutdown has to do with fiscal policy.  
Discal policy has to do with taxes and public expenditure.  
Jerome Powell talks about.  
Monetary policy. There are two different things. Monetary policy. Who we who runs monetary policy? Fed and Fed running monetary policy has to do with race.  
Next Wednesday at 7, Jerome Powell will talk and I will go to the radio in order to talk about this life. So next Wednesday I will finish class and I I wish having this class on but whatever I will finish up.  
25, six and I will not nothing. And I'm going to see Pauli Margaret. Do you remember Pauli Margaret?  
Do you remember Poly Market? Do you know what is Poly Market?  
OK, I'm gonna see Poly market.  
Oh, yes.  
Sorry for this one, but.  
50% of people are saying that it will continue.  
Will will the government set down and by January 31, 95% of people consider that yes.  
Will federal government be sat down for 30 or more years?  
Will be another U.S. government shutdown by December 31st.  
No, but why not? Because there is still one. It's going to be the same.  
OK, sat down has to do with.  
Fiscal policy and we care about monetary policy, but do we care about fiscal policy? Yes, because at the end everything is connected, yes.  
Do you know?  
Mandami, do you know him?  
Yeah, yeah.  
I I did nothing.  
OK, look federal decision in October.  
What did I tell you that it was going to be 25 days in polls? I didn't see. I have came in order to see and what that what does polling market tells me?  
That they agree with me. Not only this, there will be another decision in November.  
And in November.  
I said I I I said that police. I want to see next decision.  
Another 25 basic points I will bet.  
Oh, it's the 10th of December. Next one, Yes. What Jerome Powell will say in December? Another 2525 basic polls. Make sense.  
Another 25 basic points.  
I don't have a crystal ball, but let me also.  
I'm looking for Powell. What Powell will say, the mask tweets Bitcoin above of 106.  
This is crazy. It going is crazy.  
This night. What has happened this night?  
Argentina license.  
Argentina elections. Which party win wins most seats? The Milay. Milay has won again. It's going up. OK. Oh, oh, oh, oh.  
Oh.  
Oh.  
Format.  
Yeah, TVD.  
That is.  
There is not too much people training. Why I care about this one.  
Because this is the Spanish soccer and for me it's absolutely strange.  
This is strange looking at finding Atletico de Madrid in polling market.  
I I don't fully understand it.  
Look.  
Pelicans have his basketball.  
Basketball elegans. Yeah. Penguins. San Blues. These are OK. OK. San Sanjez. Basketball. Yeah. Yeah.  
Blue ins and senators.  
And you can and and then and I'll let you go. Madrid is Spanish. OK, OK, let me just in order before finishing.  
What will Powell say?  
What will Powell say?  
What is the point of this? There is inflation. There is still inflation. And if there is inflation, what power should do? There is inflation.  
You should increase interest rates. Why power is dropping interest rates not just because of labour market, because labour market has no problems. You know Paul should just think about two things, inflation and labour market.  
But also he is thinking about how to finance federal government and in order to finance federal government.  
The rate should be low. If you decrease interest rates, what can you cause inflation?  
Let's see what is gonna happen, because now the situation is not personally.  
Have you had all the 2008 crisis?  
Now I feel as if I were in 2007.  
I didn't have the crystal. Do you know what is a repo?  
Repo. Repo is a repo. Repo. I don't know how to say in English. Repo. Repo agreement. Repo.  
People agreement, repurchase agreement. What is agreement? If you own, you own a bank, yes, and you have both public debt, you need liquidity in a short term.  
What can you do with your bonds? You own a bond. What you can do is to close a repurchase agreement. What is a repo? What is a repurchase agreement is I own a bond. Yes, selling the bond.  
And buying back in one in one week and I have got liquidity for just one week, yes.  
If you see rebus, there is no liquidity in order to buy rebus, there is no liquidity and also if you see SP500 price prices.  
Is on maximum. You see a media capitalization. We have talked about the media, no?  
That is not a bubble regarding a billion is the mother of all bubbles. You see what I mean?  
Let me just go quick and monetary base, monetary base.  
Put it, let me put it.  
We will talk about this, not about monetary base, about monetary base. We will not talk too much. What is monetary base? The money printed by central bank by Fed. If you see the 2008 crisis, they print a lot of money then after.  
With the Greek crisis, they bring more money and with the Italian and Spanish crisis, they bring more money. They start taking money out of the system. This is called quantitative, easy, quantitative, easy, quantitative, easy, quantitative and this is called quantitative title. Yes, they start taking out money till.  
The pandemic and within the pandemic they start printing money and because of inflation they start taking out money from the system. Make sense what Federal Reserve wants to do now?  
Wants to take money from the system. They want to take money out.  
But what probably will happen if there are no rebus? If there are bubbles, that if a bubble bars, there is fine and Federal Reserve should bring more money. And this is an absolute disaster. What does the federal government needs now?  
1.  
Why the Why there is the shutdown? Because there is no money. Federal Reserve has run out of money and need the approval from the Democrats in order to start paying their debt.  
Make sense?  
I don't have a crystal. I don't know what is gonna happen.  
But personally I feel as if there were not bubbles, big, big bubbles and there were markets, there were assets that holds a lot of money inside and at the same time there is a need of liquidity.  
OK, sorry for all these things. Just this is in order to tell you that this made me thought about Jerome Paul. We are going to talk about the deal proof in two weeks time, sorry in two sessions time.  
What is the yield curve? What is the yield curve?  
It's like a thermometer. It's a reference, a reference that tells me how markets are going. We will see it later. What is it? What are interest rates from central banks? Another reference? It's important to have. Is it important to have references?  
It's important to have a thermometer in order to see if it is cold or hot outside. It's about to rain.  
What I'm feeling is about to rain.  
But we will see this in two sessions, yes.  
OK, coming back here, what must be the price of a three-year annual coupon bond with a 10% coupon rate and a face value of 100?  
All of you see that the price would be 121.7.  
File Saifas documents session.  
Do I need one second?  
Yes, all of you see.  
Now.  
How could you make an arbitrage profit if the coupon bond were trading at 100?  
So, so simple. If this bond will be trading at 100, what you should do? Buy the bond and short 10% of this, 10% of this and 110% of this.  
Let me say it in another way.  
Sell.  
So mean with with.  
By 11 units.  
1100 pounds of this one. Yes, if you buy 1100 pounds of this one you will get you should buy.  
11,000, yes, I'm selling.  
Selling 110.  
Selling 110.  
Telling 110 oh, sorry, minus 110.  
Times this 193, sorry 100. This number is incorrect. You should not buy you you will buy yes 100 decimals.  
110 of this one.  
To buy 100 of this one, 110 of this one.  
You should said also said a said.  
So 110.  
Of this one, yes, 110 of this one would be these times 93.  
And you soon.  
710 of these, ten of these.  
You should sell 10 of the. You should sell 10 of these. And what is the business you will do?  
So simple. Oh, I forgot. Sorry, I forgot. I missed the third one.  
If you do this.  
You will get 2170 for free.  
You buy this, you sell this and you will get 2100 excels.  
Always you should buy the cheaper and sell the more expensive one.  
Make sense?  
How could you make an arbitrage profit if the coupon bond were trading at 100 by buying the bond and shorting the zero coupons?  
Now a dynamic strategy. This one is a little bit more complicated.  
But I don't care too much about this today at one year. Siro Bon Bon cost 98, yes.  
Today, today 01/2 Today you pay 98.  
And you will receive 100, yes. And then today you can enter a contract to buy a one year 0 coupon bond one year from today 498.  
So today you can close a contract that will force you. This contract will force you to pay 98 within a year and you will get 100 in a year. Make sense?  
The question is.  
What must be the price today of a zero combo as a two year zero combo? Yes. What should be the price today? I don't know. The price today of what? Of something that will pay nothing in one year.  
And will give me 100 within a year. Make sense.  
Same I did with the other one. First I'm going to calculate the rate 100 over.  
98 -, 1, yes. And I'm going to calculate exactly the same 198 -, 1, yes.  
It's a casuality that these two rates are the same because these two prices are the same, but the two prices not necessary should be the same, yes.  
No.  
Let me calculate this the portfolio way. How much do I need?  
How much do I need of this one in order to get 100?  
I will leave.  
900 over.  
100 I will leave 100%.  
Yes, and now this change a little bit in order to get.  
Zero here. What should I do?  
I should receive, I should buy.  
Enough of this in order to have.  
98 in year one, yes.  
I need to have 98 in year one because if I have 98 I sell it, I receive 98, I buy a hundred of these and I will receive. Make sense.  
How much of this one should die by in order to have 98?  
I should buy a 98%, yes.  
So I have bought 100 of these, but I have bought it in year one. Today the price is 0 and I have bought 98 and today's price is 98. Makes sense. How much should I buy 98 times?  
98 So the price is 96.64. This is the price I'm looking for. Another way in order to calculate the price is to in.  
100 over.  
One plus.  
The rate in year 1 * 1 plus the rate in year two that are the same but it could be different and if I do this what I will get.  
And this is 0.04.  
Have you understood what I'm looking for? What I'm looking for is just.  
If there is arbitrage, if there is arbitrage, same cash flows, same price. So what I have done is I have just calculated A portfolio that combines the two ones in order to get this one. Make sense.  
This exercise for me is not as important as this one. Yes, this is the absolutely real important exercise from today.  
OK. How would you make an arbitrage if the two-year zero were trading at 95? All of you should know.  
If this trade at 95 and the price is 96, again I buy this at 95 and I short these two ones, yeah.  
OK, in real world there are tones, different tones in order to wait to make arbitrage. Index arbitrage is you have SP500 and on one hand and on the other one. On the other hand you have the stocks that.  
Or you can have ETS of SP500 that quotes and you have. You can have on the other hand, future with SP500 make sense. You see the price of one, the price of the other one, and if there is a price mismatch, you start buying the cheaper and selling the more expensive.  
We fix income securities. We have seen examples and or and also when there is a merits for an acquisition or when there is a takeover on an acquisition, you can start playing with games, but careful with playing with fire.  
Do you? Do you say the same in the states? No, don't play with fire.  
At the end conclusion of today's class.  
Same payoffs, same price, and if not, arbitrage. Make sense.  
OK, we are done. Let me serve today's class. I don't like this exercise today too too much. I mean, I like this one, but I like this much more. So what I'm going to do, I'm going to say the excel in this seat.  
And also let me take.  
Let me Nicolas and.  
Thank you so much.  
Welcome. See you.