# Foundations of Finance (FoF) – Session 21  
**Date:** April 6, 2026  
**Topic:** Immunization, Interest Rate Risk (Price vs Reinvestment), and Portfolio Construction  

---

# 1. Administrative Information (Final Exam)

- **Date:** May 6  
- **Time:** 4:00 PM (earlier than usual class time)  
- **Format:** Same structure as Midterm  
- You will receive:
  - 2 sample exams  
  - Formula sheet (you can bring your own)  

---

## What matters for the final

### 1. Equity
- Time Value of Money  
- CAPM vs ROE  
- PVGO (Present Value of Growth Opportunities)  

### 2. Fixed Income (CRITICAL)
- Bond pricing  
- Duration  
- Yield curve & forward rates  
- **Immunization (today’s topic)**  

### 3. Derivatives (starting next class)

---

# 2. Where We Are

We now close Fixed Income.

So far:
- Pricing → mechanics  
- Duration → sensitivity  
- **Today → applying duration in practice**

---

# 3. The Core Problem

> Interest rates change.  
> How do we protect ourselves?

---

## Two Effects of Interest Rate Changes

### 1. Price Risk
- Rates ↑ → Price ↓  
- Bad if you hold bonds  

---

### 2. Reinvestment Risk
- Rates ↑ → Better reinvestment opportunities  
- Good if you receive cash flows  

---

## 🔥 Key Insight

> Interest rate changes create **two opposite effects**

| Effect            | Rates ↑ | Rates ↓ |
|------------------|--------|--------|
| Price Risk       | Bad    | Good   |
| Reinvestment Risk| Good   | Bad    |

---

# 4. Objective of Today

> Build a portfolio such that:

👉 **No matter what happens to interest rates**  
👉 **We can meet a future obligation**

---

This is called:

# **IMMUNIZATION**

---

# 5. Setup of the Problem

We have:

- Liability:  
  - Pay **100 in 15 years**  
- Interest rate:  
  - **6%**

---

## Present Value of Liability

$$
PV = \frac{100}{(1.06)^{15}} = 41.72
$$

👉 Today we need **41.72**

---

# 6. Ideal Case (Benchmark)

If we could:

> Buy a **15-year zero-coupon bond**

Then:
- No risk  
- Perfect match  

---

## But in reality:

We only have:
- 1-year zero-coupon  
- 30-year zero-coupon  

---

# 7. The Problem

### If we invest in 1-year bond:

👉 Reinvestment risk  
- Must reinvest many times  
- Future rates uncertain  

---

### If we invest in 30-year bond:

👉 Price risk  
- Need to sell before maturity  
- Price depends on rates  

---

# 8. Key Idea of Immunization

> Combine both bonds to eliminate risk

---

# 9. The Principle

We match:

> **Duration of assets = Duration of liabilities**

---

## Liability Duration

- Single payment in 15 years  
👉 Duration = **15**

---

## Asset Portfolio

We combine:

- 1-year bond → Duration = 1  
- 30-year bond → Duration = 30  

---

# 10. Solve the Portfolio

We want:

$$
w_1 \cdot 1 + w_2 \cdot 30 = 15
$$

And:

$$
w_1 + w_2 = 1
$$

---

## Solution

$$
w_2 = \frac{14}{29}, \quad w_1 = \frac{15}{29}
$$

---

## Interpretation

- ~52% in long bond  
- ~48% in long bond  

---

# 11. What Happens Now?

## Case 1: Rates Stay at 6%

- Everything works perfectly  
- Final value = 100  

---

## Case 2: Rates Increase (e.g. 7%)

- Short bond → reinvestment benefit  
- Long bond → price loss  

👉 Effects cancel  

---

## Case 3: Rates Decrease (e.g. 5%)

- Short bond → reinvestment loss  
- Long bond → price gain  

👉 Effects cancel  

---

## 🔥 Result

> Portfolio is **immunized**

---

# 12. Why This Works

Because:

> Duration captures sensitivity

And:

> Matching durations balances:
- Price risk  
- Reinvestment risk  

---

# 13. Real World Example – Silicon Valley Bank

- Assets duration ≈ 10 years  
- Liabilities duration ≈ very short  

---

## What happened?

- Rates ↑ sharply  
- Bond prices ↓  
- Depositors withdrew money  

👉 **Duration mismatch → collapse**

---

# 14. Interpretation of Immunization

## Passive Strategy

- Goal: **secure return (e.g. 6%)**  
- Not trying to beat the market  

---

## Active Strategy

- Try to outperform  
- Take risk  

---

## 🔑 Key Distinction

| Strategy   | Goal              |
|------------|------------------|
| Passive    | Hedge / protect  |
| Active     | Beat the market  |

---

# 15. Limitations of Immunization

In reality:

- Multiple cash flows (not one)  
- Cannot buy exact bonds  
- Yield curve is not flat  
- Need continuous rebalancing  

---

## Therefore:

> Immunization is **dynamic**, not static

---

# 16. Big Picture of Fixed Income

You now have the full framework:

---

## 1. Pricing
- Present value  

## 2. Yield Curve
- Market expectations  

## 3. Duration
- Sensitivity  

## 4. Immunization
- Risk control  

---

# 17. Final Insight

> Fixed income is NOT about predicting rates  
> It is about managing exposure to them  

---

# 18. What You Must Understand

- Duration = interest rate sensitivity  
- Modified duration = % change  
- Immunization = duration matching  
- Two risks:
  - Price risk  
  - Reinvestment risk  

---

# 19. Closing Thought

> If you understand this session, you understand how banks, pension funds, and institutions survive (or fail).

---

# 20. Next Step

→ Start **Derivatives**

- New block  
- Conceptually simple individually  
- Complex when combined  

---

## Final Message

> Immunization is not magic.  
> It is discipline, structure, and understanding duration.

# Transcripción
6 de abril de 2026, 5:08p.m.
1 h 10 min 52 s
OK, the exam will take place. The final exam will take place.  
This.  
On.  
The 6th of May.  
6th of May. Yes, it will start at four. No, it would. Sorry, no, it's not during our usual. It will start at at 4 at 4, one hour before.  
And regarding final structure, regarding final information.  
Regarding final procedures, we will follow same as the midterm two weeks.  
Next week I will, I will give you 2 sample finals with all the information. Then also I will give you the formula seed. You can bring your own formula seed and same ideas. I'm thinking about the final.  
It is absolutely, absolutely important to ideas. Let's say this is a good evaluation. Do you remember about PDGO present value of growing opportunities? Welcome.  
Video How to?  
Are we going to see Sophia? Are we going to see Sophia? Oh, no, I will meet her later. Just in case. Three ideas. We're learning the time.  
First idea is equity valuation. Equity valuation has to do with time value of money has to do with comparing K.  
Expect a return given by Kapen with return on equity and has to do with PVGO the global ratio I am giving you this this is of information.  
Because these should sound familiar to you. These words that's not these words don't sound familiar to you. You should study a little. I am full of office hours. You can ask me.  
Whatever you need, I am here to give you all the information, but I cannot work for you. So first idea is a political issue. Second idea.  
It's not today's class. It's last day's class that today we will continue talking about fixed income, but today's class will be hard to understand.  
If you have not understand understood previous less.  
I'm talking about duration. All of you should know what is duration. Duration is interest rate sensitivity. In order to understand duration, first you should know how to complete the crisis award.  
Validation or much the guys will tend to an integrate change. What are we going to do today? Then we will close fixed income. Fix income. Fix income.  
Blow.  
But by using duration in practice, today I will show you what is immunization. What is immunization? Immunization is going one step forward. Dulation, yes.  
And last important thing 4.  
The final is not just one, there are several. Next day, this Wednesday, this Wednesday we will start talking about derivatives.  
I'm fully understanding derivatives. Derivatives is something new. Each one by serving is easy to understand that all together will become completed. So I strongly recommend you to come next class.  
I think next class and again you will need office hours. Yes class, yes.  
Hey.  
OK.  
That's for today's class are so, so, so simple.  
And they're spelling this class.  
It's absolutely crucial, crucial. Yes, the man's hairs simple.  
What are we going to do today? As I told you, today we will talk about humanization. Today I'm going to do just one exercise. I will show you how to do this exercise and for me it would be really important.  
You to fully understand these exercises.  
But the problem is that in order to fully understand this exercise, you need to have base. You need to understand what we have seen, whatever I will try.  
OK.  
Uh.  
Grab a ball with two balls. What is at the end of all?  
Coupons plus a value plus plus coupon, yes.  
To my rising, imagine that instead of having a ball, instead of having just a ball with coupons, I have a zero coupon. What is a zero coupon?  
It's about that instead of being or of paying. Who wants it? Yes, if you have fixed amount of money, yes.  
A zero compo is the promise of receiving one payment in the future.  
Happy.  
Yes. How do you calculate? How do you calculate the price?  
In face value, so equal. We present value for 1 plus. We give, right?  
If in the yield the rain goes up, what is going to happen with the price? It will go down.  
What we were talking about next day, last day, sorry, last day, how much the price changes when interest rate changes, how much the price changes?  
When interest rate changes. And what is the answer to that question? How much the interest rate changes when price? Sorry, how much the rate changes when the rate changes? The answer is today's.  
OK.  
The points.  
Interest rates increasing an increase in interest rates is good or bad.  
Yes, and the answer is less. You said you see that your first answer is good. No. Why? Why did you say it's good at increasing interest rates?  
Race storm zone is that.  
No, I mean if if I am a homeholder and interest rates goes up, that is for me also if I have a mortgage.  
I have a mortgage with floating rate. If interest rates goes up, this means bad news for me. Make sense.  
I have no mortgage with loading rate. What I would like the rates go down because the lower, the lower in the rates, the less money I should pay. Make sense.  
So if I hold level, when we talk about price.  
Risk. What is price risk?  
Internet rates going up, price will go down, yes.  
Because of that, I asked you if you can refreeze goes up.  
And I am on the other side, for example, I have pass.  
And I want to invest my gas the higher the interest rates.  
The more return I will get for my investment. Make sense.  
So if I have, I need to invest or to reinvest, reinvest. I'm talking about reinvest because I will receive this money or I will receive coupons and I can reinvest the money that I will receive, yes.  
Hi, need to read this. Interest rates goes up.  
For me, it will be good.  
So interest rates going up or going down, that's not necessarily means.  
That's not necessarily mean good news or bad news. It will depend on my position, yes.  
Today we will dedicate in their class to.  
To talk about these two ideas like risk and investment rules, make sense.  
So several areas, quick areas, internet rates matters because you can have a mortgage, you have savings and also thinking about pension funds, interest rates matters.  
Because it matters, interest rates matters and it matters a lot. Then a change in the interest rate results in both price risk and rate different risk. That is what I have already.  
What is today's objective? Construct a portfolio?  
Construct A portfolio that no matter what interest rates will do, I will have a fixed amount of money at a given time. Make sense.  
The goal of today class of today's class is to construct a portfolio where no matter what interest rates will do, I will have a fixed amount of money but I didn't die.  
Yes.  
Examples. OK, this is a summary of what we saw.  
This is a summary of what we saw.  
What is duration interest rate sensitivity? Did you remember from last class?  
I use the example of talking about.  
You see that or it was your head. Your head. And I asked you how how tall were you? How tall are you? How tall are you? Yeah, you answer for me that and and I understand what you are saying.  
I prefer an answer that I won't understand. You told me I hate and I don't know what you're doing at.  
I think I'm I'm 183. I I thought you were higher than me, taller than me. You were taller. I I thought you were taller than me. I am. I'm six, more or less 183.  
At the end when I'm talking about this, because Malaysia is intelligence accessibility and we use two ways, two technical units, two ways of measure, one time.  
Please don't answer. If I ask you what is duration, don't tell me back. That is time.  
What is time, duration and how do you calculate this duration in time? How do you calculate this duration in time? Let me go.  
We go to the water group. Let me go to the water group and here.  
What is the C the cell? My colleague, Steve.  
How do you calculate relation in that by doing the weighted average we put here we coupon in order to see this better and us.  
We calculate racing time by doing the weighted average of each cash flow.  
We calculate this is this formula stands for the weighted average time of each cash flow this formula but we we dedicate last class we talked about this and if you don't understand this is like this.  
This picture I have office hours and I don't have any problem in going through this and I know that I can explain this well, but what does this represent in blue present value of future disclosures?  
What is the duration? What is the motion? You can throw this into this. What is duration? This is English. This is Spanish. This is Spanish, but it should be with the duration, yes.  
Why is that ratio?  
The weighted evidence of mass it's football matters regarding the timing purposes.  
And I we're talking about this last class. What does racial in years represent? How much my prize wins since regarding us, you know?  
And then also we have the modified ratio. That modified ratio is a percentage. If the rate increases 1%, my price will decrease modified ratio percent.  
OK, what are we going to do today?  
Today we are gonna this less if you understand all previous no excuse is so simple.  
Then we will construct a portfolio with two zero compounds and the duration of this portfolio will be the same as the duration of the payment I will need to accomplish.  
Duration we will construct a portfolio where duration of the assets will be the same as the duration of the liabilities duration of the money that I will receive.  
Duration of the money that I will receive will be the same as the duration of the money I will need to pay, OK.  
Once I do this, once I do, I do this, the portfolio will be immunized. Do you? Do you know what does immunized mean? Immunized.  
Right then, you are nice, you think about.  
Yeah, vaccines, no. For example, thanks to vaccines, we get immunized.  
Immunize regarding interest rate changes. Important for a given time, for a given time. You are not immunized no matter what it for a given time always, yes.  
OK.  
Uh.  
Interest rates, interest rates are important and here you've got the example of Silicon Valley Bank prices. What was the problem with Silicon Valley Bank that the ratio of their liabilities?  
For of their assets, Silicon Valley Bank has assets with a duration of 10 years.  
The rate suddenly increases. So if interest rates increases, what happened with the price of bonds they hold on their balance sheet price decrease in less than one year interest rates increased more than 400 basic bonds.  
More than 4%, it was almost 5% and increase our interest. So their liabilities fall in 30%. They used to have in their balancing 250 billions.  
And they lose in days a 30% of.  
For work, yes, 30%. And at the same time, a lot of people start asking their money back because after the pandemic there were technological companies that need their money.  
Because they need to fire people. Yes, but Silicon Valley Bank crisis was due to a generation is mess. Silicon Valley Bank have a money bond.  
And public bonds are secured, but what can have benefited rates increases? But the price of all these bonds fall down and they didn't have time in order to wait for 10 years in order to recover their money. They were asking for their money.  
Now whatever, forget about this example if you want. Imagine that you own. This is the example we are going to see today.  
General Motors pension phone had the abilities with ablation of about 15 years.  
Assets with a ratio of about five year, so they have a problem. Why? Because they are going to get their money in five years.  
And the abilities as a reason of 15 years, so in case.  
Interest rates, Rob.  
They have a problem by investing these assets. Make sense.  
Let me show you these with numbers.  
And here you will understand it and I'm gonna go step by step.  
On one hand, please, I need your question. Call your.  
Interest rates are up 6%, yes, interest rate is 6%.  
For both the abilities and assets, yes.  
You can rate this expression and.  
General Motors needs to pay 100 million. Let me call it 100. Yes, 100 within 15 years.  
Make sense?  
You can rate 6% and General Motors needs to pay 100 in 15 years.  
Are you following me, Mary?  
Joy, Jessica. OK.  
So I need 15 years.  
15 years I need.  
Happy. Yes, he better rates 6%.  
How much money will I need today?  
How much money will I need today?  
How much money we need today? Present value.  
100 / 1 plus.  
6% price to make sense.  
Today I will hit 41.72.  
Medias.  
OK, what if I can? What if I could buy? What if I could buy?  
With 15 years of maturity.  
In case I could buy a single pombo with 15 years of maturity.  
I would buy this year combo and all of us will go home and there won't be anything else to say.  
Make sense?  
In case I can find a zero, we can go home.  
What is the problem? The problem is that I can only choose.  
2.  
3.  
Iman, I have a temptation. You know what temptation I have? No. OK.  
Uh.  
41 a hundred, yes.  
What is the problem I've got? The problem I've got is that I can only choose between 2 instruments, one a one year and a 30 year.  
Yes, I can only choose between a one year zero compound and a 30 year zero compound. What problem will I have in case I choose the one year zero compound that if interest rates drop?  
I will face replacement risk.  
And since if interest rates drops.  
I will have a problem because I cannot reinvest at the same rate. On the other hand, if I buy the 30 years, zero coupon bond, if I buy the three, the 30 years, zero coupon bond interest rates goes up.  
The price of my boat will go down and 15 years I need to sell it and I will sell it at a lower price. Make sense.  
Let me tell you again these two ideas, but with numbers.  
I have.  
One year and I have a 30 year, yes, year one and 30 years.  
Let me talk about 0 coupon votes here 0 coupon one.  
0 yes.  
Let me use a software because here I'm gonna write this.  
here  
I'm going to write this in nominal terms. This is 100 million and this is just face value. Let me use a face value 100 or so.  
Want to do this?  
Andrew.  
And yes, this is no me now.  
Yep, sorry, 100 in one year. Make sense.  
Is born.  
We mean 100. I will have if I buy, if I buy one unit of this one, I will have 100 in one year.  
If I buy one unit.  
OK, terms and.  
Bye bye one unit of this. I will have 100. Make sense.  
Yep. What is the price of one unit? What is the price of one unit? Because this has your per month is 100 over.  
1 + 6% price to letters.  
94 make sense and how much one unit of this work?  
How much a unit of this worth say 100 / 1 plus?  
6%.  
Price too.  
Good.  
I sense.  
All of you are with me.  
All of you are with me.  
What can I do?  
I come back this.  
And wait for one year, sell it and repest.  
Oh, I can buy this.  
Wait in year 15, tell it year 15 and with the amount of money that I will receive.  
Pay the 150, the sorry, the 100 million, 100 million. Make sense.  
I'm going to, I'm going to start by buying 100 percent, 100% of this silver combo. Yes, make sense.  
If I buy 100% of this year, come on.  
Let me here.  
We call here number oppose, yes.  
Number of books.  
Oh, much bones.  
Should I buy? I should buy.  
Please, I need for 1,000,000 yes.  
I will buy 100% to this.  
And the number of bombs I should buy is this number over 94. Make sense.  
And.  
This is not that person.  
The number of votes as this number is a million. The number of votes I will need to buy.  
You see millions also, yes.  
Make sense? I will need to buy 4442.  
442,000.  
301 votes.  
Good.  
I'm.  
Oh, Matt's money.  
I am expanding in this.  
The number of bones.  
Times the price of its work.  
Yep.  
You see this number, this number is exactly.  
Yes.  
How much money in my interest rates remain unchanged? How much money I will have in year 50?  
So so simple 41 times.  
One plus.  
6% price today make sense.  
4.  
So simple to understand what I have done.  
I have those units of this vote that has this price and if I wait for 15 years, I will have 100 in 15 years. Make sense.  
Yes.  
What is the problem we need to face? The problem we need to face is that.  
You better rates. That's it. Yes.  
I'm gonna integrate.  
Yes, let me use a call roll.  
I don't want to use green or red. I'm going to use or yes.  
Which price?  
Will not change, yes, because this is the price at which I have bought.  
I think if you feel afraid, take this.  
You can get a drink, say this.  
The unitary praise changes.  
Let me be happy at the beginning. Let me be happy at the beginning. Let me say that interest rates increases to 7%. Yes, I have both these books. I have this amount of money. Yes, I have both this and I have.  
Go this amount of money, yes.  
If interest rate changes, the new price of the unified bond is.  
5.  
The new price of the unitary bond is 1 + 7%.  
Right to the first, yes.  
Make sense?  
We use single or this one. Yes, this is the new uni value price.  
And the amount of money that I will have so simple, the number of votes that I have vote times this, yes.  
Oh, do you see what I'm doing?  
The number of votes because.  
Interest rates increases the amount of money that I will have.  
This year, yes.  
And how much money I will have in the future?  
How much money I will have in the future 41.34 times.  
One plus.  
7% price to the 50, yes.  
Yeah.  
Now you can understand what I told you that if the rates goes up, I will be happy, but I will be happy because instead of having 100 million, I will have 100 for 40.  
Yes.  
We understand what I have done.  
Do you understand what I have done? I have.  
Oh, 100 units.  
Of this new como after I have both interest rates has increased.  
And because interest rate has increased, the initial price of my investing has gone up, but in perspective because I reinvest.  
I will be happy. Make sense.  
Let me call this brain best.  
Amen. Yes.  
For investment.  
Risk.  
Makes sense.  
So if interest rates goes up, but what if interest rates drops to 5%?  
In the reference row, this has moved from 41 to 42, but if you see instead of having 100 I have.  
87 So I have a problem and the name of my problem would be 13. Makes sense. All of you understand what is reinvestment risk.  
All of you see, all of you understand what I have done. If he celebrates, remain and change. If he celebrate, remain and change.  
I will not be worried, yes.  
So next step, you still go back 100%.  
Of this I will buy single percent.  
Yes, and I will buy 100%.  
Of this one, yes.  
Let me.  
Do all ideas again. I'm going to repeat same steps. First step, what is the number of bones that I will be buying?  
The number of homes that I will be buying is so, so simple. I will need to buy 100% * 41.  
But the number of bonds is this divided over the price of each bond. Yes, in this case.  
The number of bonds that I would be buying is 2 million.  
Both. Each bond has a price of seven.  
All of you are with me.  
Now.  
Interest rates are still of 6%.  
How much money will I have bought? Will I have spent this number times the number the price of each vote? Number of votes times the price of each vote? Yes, I would have spent 41 point.  
72 times whatever 41.773 makes sense.  
Jessica, I am just doing the same thing again. I have not changed anything, but instead of been working with 0 compound one, the one that had one year opportunity, I'm working with 0 compound 2.  
The one that has 30 years of maturity.  
Make sense?  
OK.  
Why are you thinking of the free tickets?  
If you take a break, change it to 6%.  
6% the price, the new price will be 100 / 1 6%.  
So if he's gonna drink.  
Increases to 7%, the price will drop. Interest rate drop to 5%, the price will both. In this case the increase, the increase in price will be much, much higher relatively because the relation is much, much, much higher.  
Hi. What is the duration of Hacer-uppon? It's maturity. The duration of Hacer-uppon is it's maturity. Make sense?  
Let me use for this.  
What?  
Yeah, so you think there is phrase. Let me start with a happy you think there is phrase.  
The happiest scenario is decrease, did the race draw.  
In the phrase drop the price.  
Increases, yes, the amount of money that I will have today is the price of its own times the number of votes.  
The amount of money.  
Sorry, sorry, the price of sorry, sorry, sorry, the price of each bond times the number of bonds that will be 55. So if interest rates drops.  
I will be really happy today. I will be really happy. Why? Because today my money has increased 4.125.  
And careful with this number, I'm gonna.  
I'm thinking about waiting for some.  
This number is slightly different. I can do this number in two ways.  
I can write this, this. I'm going to do this the same way and then once I come back, I will do it in another way. Yes, I'm going to this amount of money that I have today.  
1 + 5%.  
Make sense?  
Someone is walking outside.  
What is news?  
OK. Do you see that if interest rates drop?  
Let's draw. What I will have here is instead of talking about reinvestment risk is.  
Price.  
Price risk, Yes. Why we call it price risk? Because it's interest rates rise to 7%. What happened with the price of bonds? Interest rates rise. What happened with price of bonds?  
Drop. I will be having problems. Make sense.  
I want to. I don't want you to be distracted.  
OK.  
Let me sum. What I have done is exactly the same that I did with previous bond, but I want to do another thing in order to calculate this price yearly.  
Because reality is not me reinvesting.  
I am not properly reinvesting this amount of money for 15 years. In order to calculate the formula sum, I have just reinvest this amount of money. But what are we going to do in reality?  
We will sell.  
We will sell these bulbs that has a maturity of 30 years. So what I'm going to do is please, what is the price 100 over how long 1 plus?  
7% price to the 50, yes. What I'm doing, I'm calculating the price at which I'm going to sell.  
One of these votes 100.  
This is the unitary price in year 15 of one of its votes, and in order to calculate this price, what I'm going to do, I'm going to multiply the unitary price in year 15 times.  
The number of boats that I have bought.  
Time multiplied the number of phones and above times the price this phone has when selling.  
I will get same result, yes. What I want you to see or you to see that is the same to reinvest this amount of money for 15 years than to sell.  
These number of bones in year, yes.  
I don't want to create confusion, but I want you to see that we can get same way from different paths.  
What I'm doing? What I'm doing? I'm working with the malleable. I'm working with the malleable, nothing you.  
Oh, let me take this out.  
So.  
You may. You keep better rates.  
Both have, yes, if he that is right, right.  
Hi, the CEO of Pompon too.  
I won't be happy, but on the other hand, by the zero compound one, I will be happy. Make sense. On the other hand, if the rates drop by the zero compound one.  
I won't be happy. Why? Bye 100.  
I'm 100, yes.  
Interest rates drop. Interest rates drop.  
I am facing reinvestment risk on the other hand if interest rates.  
Greases.  
What I what I'm facing is price risk, right? Yes.  
If you have understood this, trust me, you have understood 90% of today's class.  
Yeah.  
I have in order in order to understand this, you don't need to know.  
Do not things extend a million more.  
What I have done is I have talk again with Amalio.  
And what I'm going to talk about now, the maths are so, so, so simple. The maths are so, so simple.  
Not only demands, the idea understanding this is simple.  
What is the duration of 01?  
One year. Well, you see that the ratio of one is one year.  
What is the today's you know? CEO of Bombal Chu.  
Zero coupon ball one to raise your knees one year. Make sense.  
Zero to boom, boom to and raise your knees.  
Makes sense that the ratio is it's maturity.  
When I will need to make this payments, this payment, when I will need to make this payment.  
Year 15 What is the duration of my diabilities? 15 years. The duration of my diabilities? No.  
All of you are with me, but I'm going to construct with these two CEO comments. I'm going to construct that before you.  
I.  
Weight one plus weight 2 would be equal to 1 because.  
I'm going to buy a percentage of this, a percentage of this, instead of being 100 and 100 at the end, I will have a percentage of this and a percentage of this. Make sense.  
And what is the duration of this portfolio? What should be the duration of this portfolio?  
The duration of the portfolio to be 50. Let me calculate the duration of a portfolio of both.  
Weight one. Thanks, then racial.  
Last, what is the duration of the second one? 30 times weight.  
Wait and wait over weight one plus weight two. Do you see that this is the formula of the ratio?  
One times the weight, 30 times the weight over. Some of two ways at least one, no.  
This is the formula of the reason, so this is 1.  
One times one weight 1 plus 30 times weight two. This is equal to. It should be equal to.  
It was like 18.5 or something.  
Ali is 50 because the payment will happen in 50.  
If the payment will happen in 15 years and a half, it would be 50.5.  
We are done. We are done. Let me solve the equation. Let me solve the equation. The most simple way in order to solve this equation is to subtract.  
From this one, this, yes.  
1 -, 102922 is equal to 4 yes.  
Yes.  
Weight 2 is equal to  
14 / 29 this.  
Wave one is.  
15 over 2914 plus 15 equals 29 with one plus .2 equals 100. Make sense?  
So.  
What are the weights?  
Let me right here, one minus this way.  
And let me write here with one is 50 / 202129.  
Yeah, yeah.  
These are the weights.  
These are the way it sounded me.  
This happened.  
Yeah.  
here  
I have both 4151% of this, 48% of this.  
That if interest rates remain unchanged. If interest rates remain unchanged, how much money I will have in year 5000 if interest rates remain unchanged.  
Nothing happens, but because I have got a percentage, a percentage, but as we have seen, if I would have got 100% of this, I would have 100. If I would have got 100% of this, I would have 100.  
The race remain at it.  
Makes sense. If you got a rate to remain unchanged, everything will remain unchanged.  
But my interest rates increases.  
If interest rates increases, price comes up.  
This 48 will go down and this one will go up. Make sense.  
Before doing that, let me just copy and paste.  
It's numbers because it's numbers. Let me copy this.  
Want to have them so yes.  
You think that afraid?  
Increases to 7%. What I have told you is this.  
Here, if the rate increases, this 48 should decrease, this number should decrease, but this number should increase. Make sense.  
As I told you, if increased rates increases, this number drops.  
This number goes up because I am reinvesting at a higher rate.  
And what happened with the total amount of money that I will have raised in year 50?  
The big increases.  
It increases.  
So I will be happy. I am not making this. I am not making this in order to make money. I am making this in order not to lose. This is called.  
Passive investment. I'm looking. No, I'm looking for passive investment. The market tells me I can have a 6% and I am doing my best in order to have a 6%.  
If there is rate, saying yes, mathematics tells me that I will be more happy, but I am not stipulating. I am hedging.  
I am not speculating, I am heading passive strategy. In case I would be speculating, this would be called active.  
Investment. But here I'm not trying to beat the market. I am just trying.  
Heads and heads in my position. Make sense.  
And because I'm hitting, I'm making more.  
Normally like there are no freelancers, but whatever.  
If interest rates increases, I will be happy. But what if interest rates?  
Drop if interest rates drop.  
Interest rate drop, that's the opposite. This 51 would be less than 51 and this 48.  
Interest rates draw.  
I can sell this at a higher price, so this 48 should be higher.  
Let's see the number.  
The rates grow to 5%.  
From 51 we fall to 45, but on the other hand, from 48 we increase to 55.  
At the end, again, I'm with you.  
This can look like magic.  
This can look like mine.  
And.  
And you do things properly. It's like that. You do things properly. If Silicon Valley Bank would have done things properly, they would not have broken.  
They will have more money because you can rate any means a little a big, big opportunity, but they didn't talk, they didn't attend in this class.  
Bus.  
Because the school we have anything in this class.  
Four decades, 4 decades. Citicom Valley Bank is not the first case.  
But probably silicon there are times that we don't remember things we used to forget, and that crisis is a good moment in order to remember things. Make sense.  
Have you understood this example?  
If you have done it, you are done with incident. If you have not done it, please.  
Ask me for office hours for next day. You should deliver problem set 5. Problem set five. If you have understood this exercise, it's so simple. What are thinking about physical? Yes, let me go with you.  
A quick review of fixed income. It's absolutely important to know how to calculate the price of award. Then it comes to Nation and today you have seen immunization. What is the other important thing regarding fixed income you should know?  
Forward rates and the and the you move. Forward rates and the you move. If you are done with this, you are done with any.  
Regarding Dixico, then we evaluate soon and next day we will start with the.  
OK, let me come back to the class.  
The idea is now you can understand better this idea of immunizing A portfolio and what we have done is solving this exercise. Let me ask these questions quickly. What should be the weights in the asset portfolio we have already done?  
What are the bond prices? We have already calculated. How many bonds should General Motors buy? We have already calculated. And what happens if interest rates increases immediately to 7%?  
That the phone is immunized. Here you've got same numbers. I've got it same. I wish there are same numbers, 6% and 7%. Let me do this for a 7%.  
6.  
With me.  
7%.  
Listen value that is.  
Numbers. Here are the numbers by 9330.  
I'm three very.  
Three ready. This is the number of calls.  
211520  
21/15/20 and future value of this is present value. They have not calculate future value in this example, yes, but what I have said, what I'm going to say with you in what service.  
The next example they just calculate from 6 to 7% they the slides.  
Please, this one. Yes, whatever. We're going about the slides and yes, understand.  
Rise with immunization.  
There are a lot of problems within immunization and one of the problems is the case. The question that you were asking, you are not going, you cannot buy a piece of seed of hormone. You cannot find seed of hormones. Normally you will not have just one unique payment. You will have tons of payments in your balances and tons of the abilities.  
Tons of realities and tons of assets, total payments and total of tons of money coming into your company. And at the end, nice balance sheet becomes a dynamic exercise. It should change depending on your institution.  
You can change each week. Each week you need to rebalance the full portfolio. Then in our example we have assumed that the yield group is flat. You know that the yield group is not flat and also convexity and whatever makes sense.  
What is immunization? I have already told you passive management. Market tells me I can get a 6%. I will try to get a 6% and if things go back I will get more than 6% because I am immunization but I'm not trying to beat the market.  
On the other hand, what is active management regarding its income trying to beat the market?  
And if you try it with the market, what is the name of the game? You are assuming the more return you will get, the more people, yes.  
Conclusion.  
Immunization is absolutely important. Conclusion. Please do problem set 5 for next for this Wednesday, because this Wednesday we will start with something that is absolutely new.  
And what will happen in two weeks time that you will have a lot of things to review for the for the final. Each one of the things you will find in the final is simple by itself and there will be a lot of them.  
Any questions?  
Enjoy the moment for Catholics. Today starts what is called past one.  
Password is I leave passport. I leave password is Issue price is here. I mean Issue price.  
I don't remember if it is yesterday or today, but he has. He has reborn and he's going to spend 40 days. With these 40 days is the days that Len passed one. Annie, you have been.  
In Semana Santa in Spain. Have you seen? Let me call. Let me show you one second, Semana.  
Santa.  
This happens in all state don't get.  
This has not to do with this is Spanish tradition.  
Nothing to do with KKK.  
You're our work, no? Have you? Have you ever seen these guys?  
In the streets of Spain, regarding the Catholic tradition, people dressed in this way, they they are called penitentes and you can find in all cities in Madrid there has been this is for example this one is in Madrid.  
There are people that goes dressed this way.  
We said there is a very, you know, Jesus Christ and they they try, they take them from one church to another one, yes.  
Semana Santa means Holy Week and it's holy because of all these things.  
It's the the way that Jesus is great to spend in Jerusalem, whatever. I am not talking about, I'm talking about religion, but I try to talk about culture. Yeah, so Feliz Pasco.  
Also Ram Ramadan was Ramadan Ramadan Mubarak the way in order to say happy Ramadan Ramadan is over or in.  
Sabat salon is what you can say on Friday before this sabat, sabat, sabat or sabat salon. And I would like to say something that I don't know. I know about that man, but I don't know how to say happy whatever.  
Thanks a lot.  
I don't know if this if this happens somewhere all over the world, but.