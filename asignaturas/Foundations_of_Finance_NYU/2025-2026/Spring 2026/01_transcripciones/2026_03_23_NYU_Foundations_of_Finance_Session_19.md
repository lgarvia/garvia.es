# Foundations of Finance (FoF) – Session 19  
**Date:** March 23, 2026  
**Topic:** Yield Curve, Spot Rates, Forward Rates & Market Interpretation  

---

# 1. Course Context

We are now in the **second block of the course: Fixed Income**  

- Part 1 → Equity (Time Value of Money, PVGO)  
- Part 2 → Fixed Income (**core of the course**)  
- Part 3 → Derivatives (after Easter)  

⚠️ Important:
> Last session + today’s session = **one single conceptual block**  
If you don’t understand bond pricing → today becomes difficult  

---

# 2. Bond Pricing (Core Review)

## Fundamental Formula

$$
P = \sum \frac{CF_t}{(1+r)^t}
$$

- Price = Present Value of future cash flows  
- Each cash flow contributes differently  

---

## 🔑 Key Insight (VERY IMPORTANT)

> The price of a bond is NOT homogeneous  
> It is composed of **weighted contributions of each cash flow**

Example intuition:

- Early coupons → small weight  
- Final payment (face value) → **dominant weight**

---

# 3. Decomposition of Bond Price

We can rewrite the bond price as:

$$
P = PV(CF_1) + PV(CF_2) + ... + PV(CF_T)
$$

Then compute:

$$
Weight_t = \frac{PV(CF_t)}{P}
$$

---

## 🔥 Key Insight

> A bond is a **weighted structure of cash flows across time**

This is the foundation for **duration (next class)**

---

# 4. Bridge to Duration (Preview)

If we compute:

$$
\sum t \cdot Weight_t
$$

We obtain a number in years (e.g., 2.91)

---

⚠️ Important clarification:

> This looks like time… but it is NOT time  
> It is **interest rate sensitivity (duration)**  

We will formalize this next session.

---

# 5. What Are We Studying Today?

Today = **Interest Rates**

Two key concepts:

1. Forward Rates  
2. Yield Curve  

---

# 6. Spot Rates

- Spot rate = rate from today to maturity \(T\)  
- Observed from market bond prices  

Example:

- 1-year spot → 2%  
- 2-year spot → 3%  

---

# 7. Forward Rates

## Definition

> A forward rate is the **implied interest rate between two future periods**

---

## Core Equation

$$
(1+r_2)^2 = (1+r_1)(1+f_{1,2})
$$

$$
f_{1,2} = \frac{(1+r_2)^2}{(1+r_1)} - 1
$$

---

## 🧠 Intuition (CRITICAL)

If:
- 1-year = 2%  
- 2-year = 3%  

Then:

- Total 2-year return ≈ 6%  
- First year gives 2%  
→ Second year must give ≈ **4%**

---

## 🔑 Key Insight

> Forward rates = **market expectations embedded in prices**

---

## Arbitrage Logic

If forward rates are inconsistent:

→ You can construct strategies using bonds  
→ Lock in risk-free profits  

---

# 8. General Forward Rate Formula

For any maturity:

$$
f_{n-1,n} = \frac{(1+r_n)^n}{(1+r_{n-1})^{n-1}} - 1
$$

---

## 🔑 Interpretation

> The entire yield curve contains **implied future rates**

---

# 9. Yield Curve

## Definition

The yield curve represents:

- X-axis → maturity  
- Y-axis → interest rate  

---

## Important

- Changes **every day**  
- Built from traded bonds  
- Available in platforms (e.g., Bloomberg)

---

# 10. Why the Yield Curve Matters

- Mortgages  
- Investment decisions  
- Bank balance sheets  
- Macroeconomic signals  

---

# 11. Historical Perspective

The yield curve + rates explain:

- Dot-com crisis (2000)  
- Lehman collapse (2008)  
- COVID shock  
- Current environment  

---

## 🔥 Key Insight

> The yield curve is a **real-time map of the economy**

---

# 12. Shapes of the Yield Curve

### 1. Upward Sloping
- Normal situation  

### 2. Flat
- Transition  

### 3. Inverted
- Warning signal  

---

# 13. How to Interpret the Yield Curve

There are **TWO forces**:

---

## 1. Expectations Hypothesis

- Positive slope → rates expected to rise  
- Negative slope → rates expected to fall  

---

## 2. Liquidity Preference

- Investors prefer short-term assets  
- Longer maturities require higher yield  

→ This creates a **natural upward slope**

---

# 14. The Key Problem

Both effects operate **simultaneously**

---

## 🔥 Critical Conclusion

### Case 1: Positive Slope

👉 Cannot conclude anything  

Because:
- Could be rising expectations  
- Or falling expectations + liquidity premium  

---

### Case 2: Flat or Inverted Curve

👉 Strong signal  

> Expectations must be **negative (rates will fall)**  

---

# 15. Big Insight (Exam-Level)

> The yield curve is only informative when it is **flat or inverted**

---

# 16. Current Context (Important)

- Yield curve has been:
  - Inverted recently  
  - Changing rapidly  

---

## Interpretation

- Previously → strong expectation of rate cuts  
- Now → uncertainty increasing  

---

## 🔑 Key Insight

> The yield curve is not static  
> It reflects **changing expectations in real time**

---

# 17. Final Takeaways

### 1. Bond Pricing
- PV of cash flows  
- Weighted structure  

### 2. Forward Rates
- Extract expectations  
- Derived from spot rates  

### 3. Yield Curve
- Combination of:
  - Expectations  
  - Liquidity preference  

---

## 🧠 Core Idea

> Markets are constantly pricing the future  
> The yield curve is where that information becomes visible  

---

# 18. What You Must Master

- Forward rate calculation  
- Spot vs forward intuition  
- Yield curve interpretation  

---

# 19. Next Session

→ **Duration (Interest Rate Sensitivity)**  

This will connect EVERYTHING:
- Bond pricing  
- Yield curve  
- Risk measurement  

# Transcripción
23 de marzo de 2026, 4:58p.m.
1 h 16 min 47 s
Hello.  
Rodrigo Vishal Kashmir is in a good place.  
Mhm.  
Let me let me start.  
I.  
We are close to Spring Bay. We want the Spring Bay.  
Welcome.  
We are.  
Second part.  
Second part of the course is divided into three blocks. First block is equity.  
Equity is time value of money and this idea regarding by video PVO present value of growing opportunities. Do you remember it?  
Please go back in order to review.  
Equity valuation, yes. Then second part, the biggest, the most important is fixed income and then after after Easter we will see derivatives.  
Time flies.  
Time goes so, so, so quick.  
Last class was absolutely important and we didn't see anything new in last class. Last class we reviewed how to calculate the price of a bone.  
And also I told you last class, what if interest rates changes?  
Today is the class where we will see what if interest rates say yes, yes.  
Today's class combined with last class is so important.  
If you don't know last class, today's class will be a little bit more difficult. Yep, let me say this documents.  
Excel. This is Session.  
Thank you.  
OK, Lata.  
For you.  
2.  
I have another student that is who is Jessica, and this makes me so circuit. OK, before starting, I have shared with you 3 links.  
I'm gonna, I'm gonna close this. I'm gonna open the first link, yes.  
What is this about?  
Everything is in Spanish, but if you press this button.  
Here you will find English. Yep. What is this? So simple.  
You have a bone.  
100 or 1000.  
You can choose face value and then you have coupon rate.  
Upon great time years to maturity and the deal. Yep.  
What does this shows?  
This shows two things in one same graph on one hand the bond with its coupons and then in blue in darker blue you have present value of the bond of the coupons bond if you do some.  
Present value of coupon bonds. You will have the price here. How will you calculate the price of a bond?  
With present value formula, present value of each coupon makes sense.  
Let me see.  
Right. I mean, I I did all.  
The years 1/2.  
Plus coupon plus. Oh, do you see that there is a mistake? No.  
I did this by myself with anthropic with AI.  
You see that that's football is added in the formula two times.  
This formula that has some mistake.  
This is here also I am sabing 2 * 10.  
Let me see.  
If this is yes for this number, yes.  
Here you see why this happens, no? Because it will always pay till year.  
On one hand it throws these ones and then it draw the last one. So we tie up here 9 years in year three and then but whatever forget, I mean not forget.  
You understand this first one.  
OK now.  
The second one.  
The second one I'm gonna.  
So you what is this about before using the graph? Yep, before using the the web page.  
I have I need.  
OK.  
Tell me, Sophia, I'm already.  
Perfect. Yeah. Ivan, nice to see you. And face value, face value 1000. So I maturity is Marie.  
Perfect, baby.  
Really.  
And 1030? Yes. First coupon, second coupon and third coupon, yes.  
2%.  
Jessica 2% for example now, so 1 + 2%.  
1 + 2% rise to the second.  
1 + 2% rise to the third make sense.  
What is this? President Manu of its coupons?  
Present value of each coupon.  
What will I get if I add these three terms? What I will get?  
What I will get? I add.  
I will get the price. I will get present value of the ball. Make sense so.  
So.  
I can say, I can say that.  
I can say that.  
Price is divided into, in this case, three terms, one term corresponding with one period of time. Make sense.  
I'm going to draw same thing with Excel one year, two year and three years, yes.  
3030 one 1030 got it.  
The yield is 2%.  
I'm gonna calculate present value of it.  
Present value of each 1 + 2%.  
Right to the first, yes, present value of the first one.  
Present value of the second and present value of the third make sense.  
And if I add these three numbers.  
If I add these three numbers, I will get the price. Make sense.  
All of you are with me.  
What do I have there, Eva? That and this is the same.  
Per cell, second, third and then the sum body.  
This is the price.  
OK, this is the price what I'm going to calculate now.  
How much of this price correspond with this first coupon? How much of this price corresponds with this one? And how much of this corresponds with this?  
Oh, I'm going to do this.  
I calculated the percentage.  
She.  
Yep.  
And this would be in this case.  
2.86%.  
This would be 2.80% and this would be 94.34%. If I sum all these three numbers, the number I will get it will be.  
If I sum this as the sum of these three numbers is the price.  
I have yet written this in percentage, yes.  
All of you are with me.  
Please, this is one of the most important things we are going to see today.  
Then we will come back to this idea, but I want you to fully understand what we are doing now.  
So this price has 2.86% of this coupon, 2.80% of this and 94.34% of last coupon, yes.  
What I'm going to do now?  
The weighted average of each time, yes.  
The weighted average of time, I'm going to say 2.86.  
Times 1.  
2.80 * 2.  
And 94% * 3.  
And if I sum these three numbers.  
I will get 2.91 make sense.  
Yes.  
Yeah, what is 2.91%?  
Of time the weighted average of time 1-2 and three one matters 2.86%, two matters 2.80% and three matters 94.34%.  
What I have done is multiply one times this percentage +2 times this percentage plus three times this percentage. Make sense.  
All of you are with me.  
These coupons.  
Is equivalent, is equivalent.  
Two a bond with 2.91 years.  
Of Duracia, yes.  
3.  
I have not said you anything yet. The only thing I have told you is how to calculate, yes.  
2.91 years, one is 2.91 years. How are we going to call it?  
Please, I want your attention. How are we going to call it?  
And please, today sure is no time.  
Which at least not time.  
That is written to point 91 years, but duration is not the time. What is duration? Interest. Great sensitivity. I have not explained anything yet. Yes, I have not explained anything yet. What I'm telling you is.  
What are we going to talk about today? They will talk about duration.  
By isolation, you can spread sensitivity.  
What is? What does interest rate sensitivity means? Hope not my price will change when interest rate changes. Are you following me?  
Go ahead. What are we going to talk about today?  
And what is ratio? Interest rate sensitivity. What is interest rate sensitivity? Oh, nuts. The price will change when interest rate changes.  
But I have showed you how to calculate duration. But careful because duration no matter the units I'm using are time units. Duration is not time. Make sense.  
What is duration, Eva?  
Yes.  
OK.  
How did I? How do I have calculate present value of?  
I have completed the weighted average of that, yes.  
Let me start with today's class.  
Today's class there would be maths, yes, fixed income too.  
Oh.  
Sorry, please forgive me.  
I have start today.  
With this Wednesday class.  
This Wednesday I will repeat the same things I have been talking today. This Wednesday we will talk about duration. Yes, sorry.  
Sorry, what are we going to talk about today? Today we will. We won't talk about duration yet. Next day we will talk about interest rate sensitivity. Today we will talk about the yield curve. Today we will talk about forward rates, yes.  
Don't get too much angry with me.  
No matter what I have told you about what I have talked about today, we match with next day class and I don't care to repeat because duration is one of the most important topics we will talk.  
About during discourse.  
You have more time to go through today's class. Sorry to go through last day's class and review it. Make sense.  
OK, today we will talk about.  
Rights, rights.  
Today we will see two.  
This class is going to be a little bit different, Yep, than expected.  
OK.  
Let me come here. What is duration? Interest rate sensitivity? Keep this in your head for next day. Today's class.  
We will talk about forward raise the new curve and we will learn how to read the new curve.  
Keep this for next day.  
Let me put this into silence. Mute side, OK?  
OK.  
What are we going to talk today? Then we will talk about rates.  
Rates. Sorry. Today we will talk about rates. Next day we will talk about interest rate sensitivity.  
Um.  
I have my head program to do Asia, so I program my head.  
It happened on on another hand.  
It's saying everyone can buy public bonus pressures.  
Public bonds, public pressure with bonds, pressure with bills, the bonds, the bills, yes, it's they everyone come by bonds. It's it's they thousands of public bills and bonds are being.  
Great. It's like make sense.  
Each day bombs are in trade will be premature.  
What are we going to see today?  
What is the yield curve? What is the yield curve? It's one curve that represent. We talk about the yield curve when talking about the army tracks. Do you remember when we were talking about the army tracks? I told you about the spot rate.  
And I grow different brains and I don't know this. We will talk about this and it will be the new pool. Yes, where is the new pool?  
Please, everyone, each day, each day there is a different deal.  
It's day. It's day. There is a different deal proof. It's day that the a little proof changes.  
Why? Because it's the the rates at which balls have been traded.  
What are we going to do? We take all the bonds that are trade within a year, we take maturities, we take the the rates and we will represent all of these in a graph. This graph will be.  
That you make sense.  
Does the yield proof tell us something? Thanks to the yield proof, we can see a lot of things, but we will talk about the yield proof at the end. So what can we see through the yield proof at the end of digital? Make sense?  
OK. Why manage rates is important because of.  
Mortgages because of investing, because of banks, banking balance it, yes.  
I am here. Let me show you the yield curve. This exercise is so simple, yes.  
Suppose that you have.  
Propose that.  
You have one year.  
And two year, one year. So you come on with a rate of.  
2%, yes.  
And another one with a rate of 3%.  
Yes.  
This is a an absolutely simplified view and you will with just two balls. Yes, what should be the view curve in this case? Make sense.  
First question, what are the prices of these two boats? How can we calculate the prices of these boats?  
How can we calculate the prices of these bonds? We present value formula, yeah.  
I will calculate the price of this bond. Price of bond one is gonna be 100.  
Over 1 2% and price of the second bond is going to be 100 / 1 3% price to the second. Make sense.  
And the second question, what is the implied implicit interest rate in the second year?  
Here, I want you to look baby.  
Please look at here today. We are not gonna see any new mass, yes.  
In this year, the spot rate, the spot rate is.  
2%, yes.  
From year 0 to year 2.  
The spot rate is 3% make sense.  
Make sense?  
What should be? Please listen to my vocabulary. What's the spot rate in year one is 2%. The spot rate in year two is 3%. What should be?  
The forward rate between year one and year 2.  
Make sense?  
What should be the forward rate? How are we gonna calculate the forward rate?  
This look here all of you. So simple. This is going to be equal to this plus this, but in an arithmetic way.  
One plus.  
2% * 1 plus 412 should be equal to 1 + 3% rise to the second.  
Does this make sense?  
What I'm doing here 2% plus the forward rate should be equal to 3%.  
1 + 2% * 1 plus forward rate is equal to 1 + 3% raise to the second.  
Make sense?  
This is the APR formula, the effective and already formula. This is the HPR formula. This is the annualized HPR formula. We have seen this formula through several.  
Yes.  
Make sense?  
So.  
I don't know who has bring this here, but I'm so happy with that. So forward between year one and two.  
It's going to equal to 1 + 3%.  
Prior to the second over 1 + 2%.  
Plus 2%.  
-1 yes.  
From here.  
I can have this.  
Help.  
Let me calculate.  
These numbers.  
First idea, prize one.  
Price to be 2 percent, 3%.  
Rise one would be 100 over.  
One plus.  
2%.  
And price 2 it's gonna be equal to.  
100 / 1 3% rise to the second make sense.  
And what should be the forward rate between year one and two?  
Forward rate between year one and two, it's going to be equal to 1 + 3%.  
1 + 2%.  
-1 got it.  
Imagine in two years I am getting a 3%, yes.  
How much I should get the second year if the first year I'm getting at 2%, yes.  
I am. I am not going to compound. Yes, I'm not gonna compound.  
If without compounding, yes, first year I get a 3%, second year I get a second 3%. So it should be approximately a 6%. Make sense?  
I get a 6% in two years.  
If the first year I get a 2% in order to get a 6%, how much will I make?  
Four makes sense.  
So what should be the forward rate approximately?  
Approximately to be a 4% make sense.  
Because if in two years I'm getting a 6% and year first I get 2%, how much should I get the second year in order to be to get in total a 6% around the 4%? No.  
And if not, if the forward rates would be not of 4%, what can we make arbitrage?  
Make sense?  
Any questions?  
Is Maddie.  
What is the implicit interest rate?  
4%, what are we?  
Now, how can you trade these bonds to replicate a loan between year one and year 2? How can you trade these bonds? It's the same exercise that we need that we did with the arbitrage. You don't need to know this exercise, but let me just write.  
4. Sorry, 100. Let me write.  
This price.  
And this price, yes, and I will get year one.  
100 I will get in year 2A 100, yes. And what I'm told is how can you trade these bonds to replicate a loan between year one and year two? A loan between year one and year two is paying something this year, yes.  
I'm getting 100 this year.  
How can we solve this?  
I don't want you to feel confused. So in this case, this is the exercise we did when talking about arbitrage.  
In order to how can we trade this? I need 100 year true so.  
So in order to get 100 in year two, I will need to sell.  
I need to buy 100% of this, yes, in order to get this payment.  
And.  
Because I would not need money today in order to get this money, I am.  
Buying this, yes, so I need to sell.  
How much of this?  
And four over 98 in order to get.  
The price.  
How much will be the price 100 times?  
96 this is this should be the price that I am looking for. That is the same as doing 100 / 1 4%.  
Yes.  
The two numbers in theory should be the same number, but.  
You can forget about this example. Yes, you can forget about the synthetic load.  
What I want you to understand, I want you to understand how to calculate a forward rate. How we will calculate forward rates. One plus the rate times one plus the forward should be equal to 1 plus the rate raised to the total number of years. Make sense.  
OK, now what is this?  
The formula that we have already calculate and what is this the generic formula for no matter?  
For one year, sorry for three years.  
What I want you to understand for today's class are two things. This is the first one and last class. Last thing is one idea that come that will come later. Let me show you.  
And you were right year 19 and 20, yes.  
19 and 12.  
I know how much is the spot rate in year 90. Yes, I know it. Why do I know it? Because I know what is the rate of a bond with this maturity.  
Also, I know year 20, the rate in year 20. Why do I know these rates? Because I know the yield curve, because I can see in Bloomberg the yield curve. Make sense.  
Please all of you look here. So simple 1 plus.  
The rate in ER 20 price to the 20.  
Yes.  
It's going to be one too.  
Juan plus this vote year 19 right?  
Times 1 plus the forward rate between year 19 and year 20.  
Buddy.  
Yes.  
How you will calculate the forward rate in year 19?  
How will you? I want to use that same program. How will you complete the forward rate in your year 20?  
So simple.  
One plus the spot in year 20 rise to the 20 / 1 plus the spot in year 19 rise to the 19 -, 1.  
Yeah.  
Which one is that formula, the one that I have just written?  
5.  
Make sense?  
OK.  
When talking about derivatives.  
We will continue talking about forward rates and forward contracts. You will see there what is a FRA, what is a FRA, a forward rate agreement.  
It's a contract between two parties where interest rate is closed. Accord make sense.  
We will come back to this in our class on futures when talking about derivatives. Any questions?  
OK.  
Let me talk about the yield curve. The yield curve is known with different names. Also we can talk about the temporary term, temporary term.  
The temporary interest rates, temporary term. Oh, in Spanish would be temporary term structure of interest rates, temporary term structure.  
Of interest rates, yes.  
And let me show you this with one example.  
Yeah.  
Copy this one.  
What is this?  
And he's there. Oh, I yeah.  
What can you see here?  
What can you see here?  
Anyone not recognize what is written on the right?  
What does this graph represents?  
This graph represents DSP 500.  
SP500, yes.  
Anis SP500.  
Is so close 7000 incredible, yes.  
Ivan, when is your birthday? June. June of which is? Yeah, 2nd of June. And which year were you born? 2005, 2005. I'm looking for 2005.  
For 2005 OK, July.  
14th of June, May.  
3rd of July.  
May water and close, yes.  
This red line show us the data that is indicated there, yes, and on the left. What can you see on the left?  
The yield curve corresponding with that day makes sense.  
What is the Jilkoof?  
You see here is written time. Three months, two years, five years, seven years, 10 years, 20 years. It is written time. Yep.  
And here is written.  
Brains, buddy.  
Any questions?  
Do you understand what you have there?  
What I'm gonna do now?  
I'm gonna press.  
This bottom that this in this bottom is written animate. Look at the blackboard. What is going to happen? Look at the screen please.  
At this screen.  
Once I move it the red line.  
Start moving to the right and here you can see.  
The Yukov makes sense. I'm gonna go later in time, year 2000.  
Do you see the yield curve?  
Look, look, there you go.  
Anyone need with me?  
No one, OK.  
What is this? We are the 2nd of January. Look this you could.  
This is a flat in curve in these terms. If you see this goes down, yes.  
The slope of the yield curve is here flat and here is inverted. Yep.  
Look the yield curve. What this yield curve is telling us when you see that this is inverted, that is like this. This yield curve is telling us that a crisis is about to happen. Look this yield curve, yes.  
Don't you see this in curve?  
Look, look, look. Oh, it hurts.  
Yeah.  
This is, this is your curve. This is inverted. We will see that what this mean. We are close. We are close to the.com prices, yes.  
dot com crisis, not just that. Let me look for interest rates.  
Play interest rate. Let me just take dotcom crisis here.  
4th of January.  
January. OK, what does this graph show me?  
What? Here is Bernanke and here is power. Yes. And here is Janet Yellen. What the president of the Fed says regarding interest rates. These changes 99 times each year, yes.  
But it is the rate of the Federal Reserve. If you see, for example, let me come here. This is the 26th of July year 2000, yes.  
July, September, October, July year 2000, the rate should be around 6%. I come back here and see years are around 6%. Make sense.  
Look, what is going to happen with interest rates? They are being they are going to cut interest rates. Yes, the 11th of September is here. Looks 11th of September.  
What happens after the 11th of September? A cut in interest rates. Look how interest rates are going to fall.  
Look the short term.  
Look the short term. I'm going to play this and if you see short term, short term is going to drop. Yes, you are going to see how this line moves from here to here in less than in less than.  
Months. Yes, we are gonna see this drop.  
Let me play this animate. Look this drop.  
You see how interest rates are gonna drop?  
Do you see how interest rates have been dropped?  
The short term, yes.  
2% and the drop to 11 of September, got it.  
What it?  
Now this Jilkurf.  
Do we have there year 2002? We are here. Make sense. We are here. What are we going to see once we arrive to year 2004? Hope that increases in interest rates. Make sense.  
Interest rates are gonna increase. Have you heard about Lehman Brothers Crash?  
Have you heard about Lehman Brothers crash? Lehman Brothers crash will happen here September year 2008 and after Lehman Brothers crash, interest rates will drop. Yes. Then which one is this drop? This is the COVID.  
Yes. And then after the COVID, because of inflation, Fed increased interest rates. These graphs, this graph tell us the recent history of monetary policy. Here you've got the 11th of September.  
Yes. Then Federal Reserve increases interest rates and then Lehman's collapse happens. Yes, interest rates were zero for a long, long period of time. Then Federal Reserve increased interest rates and with the COVID interest rates will be dropped again.  
Make sense?  
Yeah.  
What is about to happen?  
What is about to happen? We don't really know what is about to happen. If you ask me now, there is a war in Iran.  
And due to the war in Iran, there should be inflation.  
And because of inflation, interest rates should be rise.  
And also what happened the 11 of September?  
A crisis after the 11th of September. Interest rates should be dropped. What happened the 11th, the 14th of September with Lehman Brothers? A crisis? What happened with the pandemic? A crisis? Make sense?  
So what can happen?  
I don't know.  
Is a crisis about to explode?  
I don't have a crystal ball, but if you see these graphs.  
Here is the 11th of September. Interest rates are being dropped and then after this drop, a crisis arrived and interest rate has been dropped more. Yes, and the same happened with the 11th of September. Nobody expected Lehman's collapse.  
And then if you see this graph with the COVID again the drop makes sense.  
Interest rate has been cut.  
What is about to happen?  
We don't know.  
Let me come back here.  
11 of September is are about to happen.  
The rates drops and what is going to happen now? The Fed is going to think in year 2004 that everything is recovered and interest rates are going to increase, yes.  
Look the short term. Once we arrive to year 2004, I have the Asian look how interest rates are going to increase.  
Look how interest rates. Do you see how interest rates increases step by step? Don't you see it? This is like a roller caster. Have you been in a roller caster truck, truck, truck, truck, truck. Do you hear?  
And look the year curve. The year curve starts inverting.  
Then look Daniel Kurf. We are in the year 2006, years before Lehman's collapse. Look the inverted. Now the new curve is inverted. What this inverted deal curve is telling me.  
This is not inverted, this is flat. But do you see that this little inverted?  
But the yield proof is telling me look.  
Interest rate has been dropped before. We are in this first drop. Yes, interest rate has dropped and Lehman's collapse is about to happen.  
Iman's collapse is about to happen September October. We are in December 2007, December 2007.  
We are December 2007. We are here, yes.  
Beman's collapse will happen in September 2008, Yep.  
Look, March, April, look, September. You look. Please look all of you. Look, look, look there.  
Whom? Did you see Lehman's collapse? Interest rates drop?  
And after Linden's collapse, look interest rates for a long time, interest rates were dropped to 0 and here year 2005 interest rates increase, start increasing and we are close to the pandemic and here is the pandemic interest rates are dropped again.  
And then is this is Silicon Valley and look the yield curve, how the yield curve is.  
Look the new curve there. What is this?  
How the year curve is now? Yesterday it was inverted. One week ago it was inverted. Now we don't really know. Make sense? No. Now we don't really know. No.  
Now is not an inverted.  
What the market expect now?  
Interest rates to increase, but let me show you how to read the yield curve. Make sense.  
What do I have told you? Nothing yet. I have gone through the story looking different your course, yes.  
From this, this is the yield curve and we have gone through this dynamic yield curve and here you can see.  
Four different and there are in fact there are three that upward or don't work. Yes, that positive is low or negative is low. Make sense.  
Yes.  
OK, now the question.  
We are going to dedicate this question.  
Last 20 minutes. That probably will be just 10 minutes.  
Question is not so complicated question, but it has two steps.  
The question is, when I look at the gym hoof, what can I see? Make sense?  
What can I see?  
And the question will have two different letters. Make sense.  
What is the first thing I can see? There are two things when you look at the new move.  
But please, all of you, I want you to understand this. When you look at the yield curve, there are two different effects and we should distinguish between these two effects, yes.  
First idea when you look at the little book.  
There are, you can see expectations, but people expect.  
It's gonna happen with you, yes.  
If people expect interest rates to work.  
The year group will have will be will have negative slope. If people expect interest rates to rise, the year groups should have a positive slope. Make sense?  
If I just consider expectations, if I just consider expectations by looking the slope, I should be able to see what is going to happen with interest rates in the near future.  
I sense.  
But this is not the only effect you can find in the new book. There is a second thing we should have in our head when looking at the new book, yes.  
Which one is the second thing? We need the preference.  
Preference, yes.  
What people prefer? Take care. When do you? When do you prefer? Where do you prefer your money to be? Your pocket?  
Or into U.S. government spoken.  
Your call.  
So would you prefer your money to be in your pocket?  
Not in that you ask for a loan for one year.  
Or you ask for a loan for two years, yes. Or you ask for. No, the government has you for money and you can choose between. You can choose between lending money for one year or lending money for two years.  
As you prefer the money to be in your pocket, you will prefer to lending money for one year than for two years. Make sense?  
Do you understand what I'm saying? You prefer the money to be in your pocket, so you will prefer a one year lending, a one year loan than sorry lending. You will prefer lending for one year than lending for two years. Make sense.  
No.  
If you are asked for lending for two years instead of lending for one year, the rate of a two years loan will be higher than the rate for just one year.  
License.  
We are different what I'm saying. They longer.  
The loan, the higher the rate, yes.  
So if I just think about liquidity preference.  
How the slope of the yield move should be?  
Positive. Do you understand what I'm saying? There's more now.  
No.  
Because of liquidity preference, because people prefer to have their money in their pocket, by just thinking about liquidity preference, the slope should be positive.  
What I'm asking about, what I'm thinking about, I'm thinking about what do I see when looking at the view. There are I can put, I can bring two different glasses.  
There is one class regarding expectations and there is another class regarding liquidity preference. If I just think about liquidity preference, how the slope should be?  
By asking about liquidity preference, yes.  
Hope the folks agree. Positive. No.  
So if I just think about liquidity preference, the slope should be possible, yes, but careful because there is a second effect and this second effect has to do with expectation.  
If I just look, if I just see about expectations.  
The expectations are is are positive. The growth should be positive and expectation of is negative. The growth should be negative, yes.  
What we will do when looking at the deal group? What? What are we doing? We put together these two effects.  
Examples.  
Let me go to the slides and let me show you later the conclusion. What I want you to understand, yes.  
Let me go through the slides, the yield curve.  
First idea, expectations, hypothesis, yes.  
If I think about the expectations hypothesis, then the thing that I have seen regarding forward rates still applies.  
And.  
An upward sloping term structure tells me that interest rates are about.  
To increase and downward sloping term structure tells me that interest rates are about to fall thinking about expectations. Make sense.  
If so.  
This is what we have seen regarding forwards. Make sense.  
All of you understand expectations what the year could tell me.  
Expectations.  
And did you see historical? Thanks to the slope, I can say I can see things. I have told you for example that here, not here where it was, sorry, here the slope is negative.  
Yep, makes sense.  
Is the is the expectations hypothesis adequate? We are missing something. What are we missing?  
Liquidity preference, yes.  
The slow should always be upward slowing.  
So let me back to previous slide.  
What I'm trying to do here, I'm trying to see if thanks to the deal group.  
By looking the yield curve, I can predict what is going to happen with interest rates, yes.  
By looking the yield curve, can I predict what what is going to happen with interest rates?  
And what is written there is that there are a lot of times that the year curve is positive.  
But there are expectations because there are expectations of interest rates to drop. Why? Because liquidity preference effect is higher.  
Make sense?  
So liquidity preference tells me that.  
The positives should always be based on liquidity preference. What should be the typical shape of the term structure? Always positive. Got it.  
At the end, at the end, I want you to understand this is like.  
And in order to explain this life, this is so simple, wonderful, yes.  
Uh, I'm pushing it slow.  
If the yield pool has a positive slope, what can we predict regarding expectations?  
The input has a positive flow. We cannot predict anything.  
Why? Because it would be possible.  
On the left we have positive expect, the slope is positive and it's due to the sum of liquidity preference and expectation, yes.  
And on the right we have negative expectations, but because of liquidity preference.  
As low peak possibility. Make sense.  
So if the slope is positive, what can we predict?  
Because independent events will always be possible.  
But what if the slow is flat or negative?  
With deep reference is always with deep reference is always positive. So if the slope is flat or negative, what can I say regarding expectations without any kind of cloud?  
The expectations are negative.  
Do you understand what I'm saying?  
What I'm saying is that there are two errors, expectations and different.  
It will always be positive. So if the general slope is positive, what can we see? OK, but if the slope is flat or negative, what can we see? There is there are expectations of interest rates.  
Trades.  
Make sense now with this in your head with if I would have teach this class.  
Yes.  
Few weeks ago I would have finished the class just right now.  
What had happening within these three weeks?  
The Powell, as talked last week and there is a war in Iran. Yes, I want you to see one thing regarding the EU.  
20th of March, yes.  
23rd of October.  
Don't you see?  
This is negative, yes.  
But what is going to happen?  
Oh, no, here.  
Don't you see always the yield curve, please, all of you?  
And what happened? I'm talking about weeks. Yes, look.  
Look.  
Look.  
What happened with the jerk?  
Within days, don't you see it?  
Before I am what were three weeks ago, if you have, if you would have told me three weeks ago, but what are going to happen within the rates within this year, I would have told you that there are.  
Two drugs in interference, 2 drugs in interference. After the Iran war, I am still thinking that there are two drugs expected, but not. I'm not as confident as if I was.  
It's absolutely important how long, how big it's gonna take.  
It's absolutely important. How long the conflict is what we run it.  
Whatever forget about Iran.  
Forget about.  
Everything and focus here what we have to talk about today on one hand forward rates. I want all of you to understand forward rates and then I have talk about the yield curve. I'm talking about the yield curve, two ideas talking about the yield curve.  
First idea, expectation hypothesis. Second idea, liquidity preference.  
If the slope is positive, what can I say? Nothing. If the slope is flat or negative, what can I say? That the expectations are negative. Makes sense.  
Conclusion. Why does the term structure looks look like it does? Because of expectations and liquidity preference.  
And this that you could matters, or at least it used to matter in the war.  
We were living till today. Make sense.  
We are done.  
Any questions?  
Next day we will talk about liberation.