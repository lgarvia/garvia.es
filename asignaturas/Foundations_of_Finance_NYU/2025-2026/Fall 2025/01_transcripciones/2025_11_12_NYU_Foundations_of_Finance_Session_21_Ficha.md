---
Title: Student Notes — Fixed Income IV Immunization (Duration Matching)
Course: Financial Markets (NYU Madrid)
Date: 2025-11-07
Tags:
  - NYU
---
# 🎯 Today’s Goal
Build a bond **portfolio that is (locally) insensitive to interest-rate changes** at a target horizon — i.e., **immunize** a liability by **matching durations**.

---

## 1) Recap — What you already know
- **Bond pricing**: present value of all cash flows discounted at the yield.
- **Macaulay Duration (D)**: weighted average time of cash flows → **measures interest-rate sensitivity**, not “time-to-maturity”.
- **Modified Duration (D_mod)**: \( D/(1+y) \) → first-order % price change:
  $$
  \frac{\Delta P}{P} \approx -D_{\text{mod}}\,\Delta y
  $$
- **Convexity** explains why duration is an approximation (curvature of the price–yield curve).

---

## 2) Two faces of interest-rate risk
When you own bonds, rate moves cut two ways:

1. **Price Risk**  
   - Yields ↑ ⇒ prices ↓ (you *lose* on existing holdings).  
   - Dominates for **long-duration** assets (e.g., long zeroes).

2. **Reinvestment Risk**  
   - Yields ↑ ⇒ future coupons reinvested at **higher** rates (you *win* on reinvestment).  
   - Dominates for **short-duration** assets (e.g., rolling short bills).

> SVB-style intuition: large **long-duration** holdings + **fast rate hikes** + **liquidity needs** ⇒ forced selling at big losses.

---

## 3) The setup — A single liability to immunize
- Current term structure (simplified): **flat 6%**.  
- **Liability**: pay **100** in **15 years**.  
- **PV of liability** at 6%:  
$$
  PV_L = \frac{100}{(1.06)^{15}} \approx 41.7
  
$$
If a **15Y zero** existed at 6%, we’d just buy \(PV_L\) of it and be done.  
Assume instead we only have two zero-coupon bonds available:

- **Bond A (short)**: 1-year zero → $D_A = 1$  
- **Bond B (long)**: 30-year zero → $D_B = 30$

We must **combine A and B** to immunize the 15-year liability.

---

## 4) Duration matching (immunization) — Core conditions
Let portfolio weights (by market value) be $w_A, w_B$ with $w_A + w_B = 1$.

We need:
1. **Present-value match** (funding): invest \(PV_L\) today.
2. **Duration match** (sensitivity):  
  $$
   D_P = w_A D_A + w_B D_B = D_L \quad (\text{target }15)
   $$

Solve:
$$
\begin{aligned}
w_A + w_B &= 1 \\
w_A(1) + w_B(30) &= 15
\end{aligned}
\Rightarrow
\begin{cases}
w_B = \dfrac{15 - 1}{30 - 1} = \dfrac{14}{29} \\
w_A = 1 - w_B = \dfrac{15}{29}
\end{cases}
$$

**Interpretation**
- About **51.7%** of PV in the **1Y zero**, **48.3%** in the **30Y zero**.
- The **portfolio duration equals 15**, the liability’s duration.

---

## 5) What this buys you (and what it doesn’t)
- For **small** yield changes around 6%:
  - Losses from **price risk** (long zero) are offset by gains from **reinvestment** (rolling the short zero) → **net PV intact** at the 15Y horizon.
- If rates **rise**:
  - Long zero price ↓ (bad), but reinvesting proceeds from the short zero at **higher** rates (good) offsets it.
- If rates **fall**:
  - Long zero price ↑ (good), but reinvestment happens at **lower** rates (bad).
- **Local** (first-order) protection only:
  - Works at the **target horizon** (15Y), and **for small Δy** (duration-based).
  - **Convexity** and **non-parallel shifts** reduce exactness.
  - In reality: term structures are not flat; **rebalancing** is needed as time and yields move.

---

## 6) Numerical anatomy (quick checks)
- **Price today** (per 100 FV):
  - 1Y zero at 6%: $P_1 = \frac{100}{1.06} = 94.34$
  - 30Y zero at 6%: $P_{30} = \frac{100}{(1.06)^{30}} \approx 17.41$

- **Invest** total PV \(= 41.7\)**:  
$$
  \begin{aligned}
  \text{Into A (1Y): } & 41.7 \times \frac{15}{29} \approx 21.55 \\
  \text{Into B (30Y): } & 41.7 \times \frac{14}{29} \approx 20.15
  \end{aligned}
  $$
  Convert these amounts to **number of bonds** by dividing by \(P_1\) and \(P_{30}\) respectively.

- **Horizon behavior** (intuition):
  - If **y → 7%**: B’s price drops, but A matures earlier and gets reinvested at **7%** → net effect **~0** at year 15 (first-order).
  - If **y → 5%**: opposite signs, still **~0** at year 15 (first-order).

---

## 7) Practical caveats (exam-quality bullets)
- **Rebalancing**: as time passes, durations change; to stay immunized you must **roll** the strategy.  
- **Integral holdings**: in practice you can’t buy “half a bond” — use nearest integers or liquid proxies (bill/bond futures).  
- **Curve risk**: duration match protects mainly against **parallel** shifts.  
- **Transaction costs & liquidity** matter.  
- Real-world asset-liability sets are **many-to-many**; computers help, but **the idea is the same**.

---

## 8) What to memorize (fast lane)
1. **Immunization conditions**: PV match + Duration match.  
2. **Weights with two zeroes**:
   \[
   w_{\text{long}}=\frac{D_L-D_{\text{short}}}{D_{\text{long}}-D_{\text{short}}},\quad
   w_{\text{short}}=1-w_{\text{long}}
   \]
3. **Risk split**:  
   - Long maturities → **price risk**.  
   - Short maturities → **reinvestment risk**.  
4. **SVB intuition**: long-duration exposure + fast hikes + withdrawals = forced selling → losses.

---

## 9) Micro-drills (do these!)
1. Target \(D_L=8\) years with 2Y and 20Y zeroes. Compute \(w_{2Y}, w_{20Y}\).  
2. Now target 12 years; repeat. Interpret how **weights shift**.  
3. With coupons: explain why **higher coupons** generally **reduce duration** and **increase reinvestment risk**.  
4. Explain in two sentences why **duration matching is local** and why **convexity** matters.

---

## 10) Logistics & what’s next
- **Today**: We **closed Fixed Income** with **immunization**.  
- **Next Friday**: We **start Derivatives** (new material).  
- Sequence: **Options** (≈3 sessions) → **Futures** → **Swaps**.  
- **Final is not cumulative**: focus on each block’s toolkit (equity valuation, forward rates, fixed income, derivatives).  
- I’m recording classes and keeping **transcripts**. If you miss a class, ask and I’ll share the **summary + exercises**.  
- **Office hours**: open — bring questions and problem sets.  
- **Do the exercises** — repetition makes duration/immunization *easy*.

> **One-liner to remember**: *Match PV and Duration, and small rate shocks at the target horizon won’t move your goal.*


# Transcription
20251112_170720
12 de noviembre de 2025, 5:07p.m.
1 h 8 min 48 s

Next day we will start with and will start seeing new things. So all things we are going to see today next day will be

and derivatives will be lessons and in lesson we will see something new. If you think about evaluation now things and then derivatives we have lot of things to study for the final is not cumulative so you don't need to study to go through portfolio the all these things that we have seen in this part important so today been aware in your that you didn't last This class is important in order to rec and understanding today's class is important and next day we will next Friday we will start with derivatives if you don't come next Friday and you come on Monday you will feel like we have gone through things new trying to make up on Monday will be a little bit complicated so I'm full of office hours. You you need something you can ask me and also I am recording all classes and I have the transcriptions also I have whatever you need help just ask

and please do the exercises. Eh,

then the miser

faller

today's class.

Today session 21.

21 open and exel also

M.

Okay. Eh,

okay.

I

like the was like two days. So is the final

yes

it's not earlier.

it will be I think in this class same as ok

bonds fix income has to do with bonds yes what you buy a bone and what you should worry about you buy a bone about

why you will

because you want to get return you buy at one price you will be paying coupons plus face value no you need liquidity you need to sell the ball before maturity what can interest rate changes and change interest rate c you interest rates go up go down you can be this is interest risk and what else is there something else you should be worry about risk risk and credit risk what is credit risk

Credit risk. What is credit risk about?

credit risk is the risk of the is going into a contract not paying me so I will be worried you understand risk I have the B and in case the don't pay me value or don't pay me coupons I will not I will not have anything or do you create risk you should go to a rating agency rating agency will give you a grade. should be could be triple triple A this has to do with great risk and the higher credit risk the more return you will demand sense if we are talking about BS and risks we should divide into credit

risk and

risk yes sense.

regarding interest rate if interest rate goes up is good or

why

los price falls no careful because if interest rate goes up you think about the price of B is if you have rates go up you will have a higher rate in order to invest make sense you have a b that is going to pay off coupons and interest rate goes up you will reinvest the coupons at a higher rate exel so when talking about interest rate risk

price

price risk yes and the other one will be called reinvestment risment

Best

risk

talking about price risk interest rates goes up I will be losing

then talking about reinvestment interest rate goes up I will be happy because I can reinvest coupons at a higher rate. So what will be platform interest rates next sense.

Okay. idea

with this idea.

en mi slides.

idea.

Let me start with the class. Today we will close fixing. C

I have tried hard you to understand how to calculate the price of a last class we introduce duration concept. What is duration? ratio is interest rate sensitivity the price will change when interest rate changes sense and today we will see how to immunize a portfoli

ok so interest rate risk management eh people regarding interest rate risk best and example silicon bank silicon bank

let me show you

interest rates

let me show

This is 2000. Let me show you. Oh, I miss

you. Okay. A quick summary of recent history. Yes. 11 of September attack. Here is the 11 of September attack. Interest rates because there was a crisis drop. Interest rates. Drop. to the lowest to the lowest rate history. Yes, later we have had zero interest rates but reaching this point interest rates were the lowest we have had in a lot of time. Yes. What did everyone start doing here? Interest rates start increasing. Yes, interest rates start increasing. And what happen with all these mortgages that becomes supreme becomes a disaster. Yes. Here interest rate drop the rates. Federal reserve drop rate and here is here is the lim. Bank RS once bank RS came interest rate drop to zero here ising and then here is the pandemic yes here is the pandemic if you see there are always two drugs here is the 11 of September here is L drop and here is before the pandemic and when the lockdown yes

During the pandemic what everyone start what everyone do what everyone what did everyone do during the pandemic

at house looking Netflix series asking things to Amazon what happen with the with Amazon with Google with all tech companies price in what happen with Netflix it's rocket No, after the pandemic, after the pandemic, all these companies that rob during the pandemic

fir people. You remember just after the pandemic all these companies fire people. If you fire someone from your company, what do you mean? Equidity. Yes, two thing two things happen at the time. On one hand all these technological companies start firing people and in order to fire people they need liquidity. Yes, but also on the other hand there was inflation and if you see here because of inflation federal reserve increas interest rates in more than 400 basic points less less than a year yes you increase the rate what happen with of bon

silicon bank to have bonds public bonds with 10 year of maturity and drop more than 30% of the price and at the same time silicon val bank clients with liquidity why because they wereing people

on one hand need liquidity they went there they asked for their money and they were forced to sell bonds losing more 13% of their body makes sense. You see that this is a disaster why this happen because they didn't have their portfolio because they have liabilities bonds with one maturity and on their asset the mat the duration was different. They have liability with one duration and their assets have duration with has duration. The asset has a different duration and a change in interest rate made them lose money to their sense. Are you following me? What is the idea of this managing interest rate risk management important

in interest rate results in on one hand price risk and on the other hand reinvestment risk

so interest rates to increase or to draw

or bad depending on your position. If Silicon Valley Bank If Silicon Valley Bank would have sold all their B here, they wouldn't have had any but because they wait for one year without doing nothing, without doing anything. Yes, they wait for one year they lose 30% of their balancing. Careful because you buy bond public bond how do you calculate the risk free asset with the with public US bond? No. So if you are buying bonds, you are buying a secure asset. I have told you that you buy a secure asset and you are losing 30% of your balancy. All of you understand why do you lose at 30% because you you cannot wait till maturity you need to sell it right now. And you do rate increase if you need to sell it. Yes. right now you have

ok what is the goal what are we going to do today to construct a portfolio which is insensitive to interest rate changes let's see this is a summary of previous clas last class we saw first how to calculate duration how do you calculate duration by doing the weighted average of time doing the weighted average of time considering coupons and face value yes

and then later we calculate modified duration today we are not going to work with modified duration today will we will just work with normal duration with the duration that is length that is miser in Ok

and what is duration matching what is immunization you haveil you have asset what you will try to have same duration in your liability same duration that you have in your assets makes sense

ok this is one example of why eh interest rate management is important but I I should have substitute this slide with silicon bank crisis yes I will send you a source summary of silicon bank crisis let me let me let me send me a message to myself send to you a

of silicon body bank prices

ok now we are see we are see one example

you are the financial manager of tiene las motos.

You are the financial manager of general.

The idea is simple. You have liabilities with one duration and you have assets with another duration.

If interest rate fall, price risk will cause that the value of bonds increases. And if interest rate if interest rate increases the value of the bond if interest rate fall value of bonds will increase yes but on the other hand if interest rates increases investment risk let me show you with one example and we will see. Yes. General motor. Now interest rate is 6%. Yes, interest rates are 6%. And you have you need to pay 100 million in 15 years. So sorry here please I want all of you to fully understand this exercise. simple

but I want all of you to understand I need to pay in 15 years yes if interest rate are 6%

how much money will I need today I need to 100 in 15 years. If you don't know how to calculate this, play to me. Don't tell me that you don't know how to calculate this. Please, I prefer to live in a you don't know how to calculate this. Just tell me. But how do you calculate? How much money would you need today? present value 100 over 1 plus 6%

rise to 50

so

I need 41 million 41.7 million in order to pay in years

okay imagine that I can buy a zero with 15 years of maturity if I could buy a zero couon b with 15 years of maturity

we will not be talking this class won't have any sets you can buy a compon 15 years of maturity what will you do you will just buy and run you wait for 15 years you sell it you have 100 and you

ok what is the problem we have the problem we have is that we have only two assets we can just buy one of This is a simplification in real life. You have more than two but I have a zero coupon bond with one year of maturity and I have another zero coupon b with 30 years of maturity. Makes sense let me see let me analy one by one and yes let me call this zero cupón. Yes. Tiro unbón.

Bueno.

Bom, B one will be in one year. I will have 100 value.

What is the price of zero bice of this?

I know that interest rate

price of

what is the price of the 100 over one plus 6%

to the

Price of one of is 94.33.

Now

I will buy

100% of this.

Makes sense.

I'm going to buy 100% of this.

And if I buy 100% of this,

I will just have 100% plus this. Let me calculate first how much B. Yes. If I buy 100% I will buy 100% times this over price of each. Yes, I will back. Let me show you what I'm doing here. Here is the weight. Here is the number of makes sense. Are you follow me? So if I have by this number of of bonds

I have b this number of bonds

the total amount of bonds that I will have is for yes

41 of this how much will I have after one year how much will I have after one year

this here this is the price of one this is what you will receive after one year and this is how much you are buying today and this is what you will receive after one year how much you will receive after one year 41 times 1 plus

6% rise to the first

All of you are following me. Ok. So after one year you will have 44. And what you should do after one year with this money? You should reinvest this money. Imagine that you can buy 40 years.

What will have happen? What would have happen after one year? I will have a different imagine that interest rate will be the same. Yes. Interest rate remain and sales.

All of you are following me. If interest rates remain uns,

if interest rates remain uns, after one year I will have this times one plus

6%. Yes. Rise to the 40. Mak sense.

So I will have

any questions?

No.

Okay.

combo what if interest rates increases to 7%

interest rates increases

I will be

Makes sense all of you see my happiness?

No, let me write it here. If interest rates increases, I will be happy. Why? Because of reinvestment risk. But if interest rates, if interest rates remain uns, I will not be happy or unhappy. But if interest rates falls to 5%

yes to 5% I will have a problem. What is the name of problem?

13 millions. Makes sense.

So this is let me keep this in six person. Any questions?

Have you understood this first zero cupon bomb? Ok

let me write here a% I don't care about this now let me move into the other one zero cupon bond two zero cupon bou

cupon b two have a maturity of

30 years. Yes. What is the price today of this?

100 over one plus 6%. Yes.

Price to sense.

The price will be

7.4 17.41.

Same thing. What is the how much I'm going to buy of this one? 100%. Yes. If I buy 100% of this, how many bonds should I buy? 100% of these over the number of bonds. Yes, I should buy this number of bones. Excel.

Now let me just calculate here the new price. So quick so quick. Let me calculate this in red. I don't like red. Let me calculate this. Let me calculate this in a softer color and make this same. So let me calculate the price by using let me calculate the price. Let me calculate 100 over 1 plus 6%. Yes, this is the price at with this rate and let me do the same here. Let me calculate

100 over one plus 6% price to. Yes. Why I have done this? because I'm going to change this and I want you to see the old price and the new price. Yep. But let me interest rate to remain and are you following me? In this case I have bought 100% of

yes what I will need to do with this B number of BS. Yes.

In this case what I will do is to sell this B year 50. Yes. If interest rate remain and I'm going to sell this in year 50. What price of each B will be? What the price of B will be

100 over one plus one plus sorry one plus 6%

price to the 50 are you follow me

to the Este,

this is the price of one.

This is the price of one. instead of selling one I

all

how much bs will have got I will have sense.

Are you following me? Ok

now if interest rate remain I have I have 41.72 Yes. Let me also calculate the amount of money that this times

this yes or also eh

or also sorry or also let me see which is this number. number is want to make same number of bonds times the price of each b number of bonds times the price of yes

this is total

price

and this

If interest rate remain

I have 100 but if interest rates drop if interest rate drop what will happen with price of bonds when I'm selling it will go up so if interest rate draw to 5%

I will be happy why because I will more than what I need. I will have more than makes sense. If interest rates right here if interest

if interest rates

drops drop I will be happy because price of the B

this is price risk yes if interest rate drop I will be happy if interest rates go

in this case I will be unhappy Makes sense.

Are you with me?

All of you understand all things that are on the platform

is so simple. I need to pay need to pay in 15 years in order to pay in 15 years I need 41 million today and I can only choose between two alternatives. Alternative one is comp with one year of maturity second alternative is con with years of

by the first one by the first one I will be facing reinvestment risk if I buy this with one year maturity

I will be worried because in case in one year rate I will have on the other hand if I just buy this I just buy this

I will be facing price I rates I would have Ok

now in this point I haven say anything new we hav talk about something new is durations yes all things we have seen

Now it comes the new part. Yes. What are we going to do?

What do we buy?

We are not going to buy one or the other. What are we going to buy?

And if we buy both we will have a portfolio. We have a portfolio. What should we calculate from the portfolio?

We are gna calculate the solder for yes one thing that is amazing. Sorry for the parenthesis. Because I have thought about this. I am recording the classes and the transcription. Just after the class I send it to CHPT and I told to give me a summar I don't to chat GPT the slides. I just upload I just give him her or it the transcription. It's amazing because DPP in the summary with me. I don't have any problem. I think I have most of them with you. If you want them ask me and I will share it and upload it to Google and it's amazing. But once I tell to make a summary, show me all the exercises that I have.

I writing I say the numbers but he understand and he show me the exercises. It's amazing. If you see the summari I don't have any problem I think to you I have said most of them and if someone has not come to one class I can sell. I mean there is no point in sharing the transcript. not anything new because you have the slides but but I will if you the minor if you if you

sorry for this coming back sorry for this what I'm going to create what I'm going to do I'm going to construct combining one and bond two I'm going to combine these two portfoli bonds in portfoli

I'm calculate the weight and let's see weight of cupon yes plus the weight of cupon b a and b a plus b

Yes.

And in terms of duration, how do you calculate duration?

A a plus b+

c are with me over the price that is a plus b plus c how much is this i mean say yes three because of three but i can do it with yes How much is this?

What are what is the sum of all of the portfolio? one. So at the end the duration of a portfolio,

this is the duration of mak sense of first stop or first b

this first equation. So let me write the second one. What is the duration of the first coupon bond? What is the duration of bond?

It's so let me write 1 weight 8. What is the duration of the second component?

and in order to have payment I would like the duration of this portfolio to be equ duration of the payment duration of the payment is

15 years duration this is equ

15 makes sense.

Have you have you understood this? You have understood this. You have understood all mathematics of today's class. We can grab we are not going to see anything new. You have understood this we just calculate the and we have the immuniz.

Let me calculate the ways.

In order to solve this in a quick way, I'm going to substract

this

to this. I'm going to substract this to this. Yes.

Positive minus negative zero

29 wa B

it's equal to 40.

Please if I do this this could look simple. But once you need to do it by yourself, first time you will find it a little bit more difficult. Second, third, it will be simple. Yourself a little. Yes. So, D is 14 over 29. Yes.

A weight A is 1 minus weight B that is 1- 14 29 that is equ 29- 14 29 that this is 15 over 29 makes sense

we

So interest rate remain and yes

interest rate remain

How much I'm gna

mat I'm going to buy of this one?

How much I'm going to buy of this one?

15 over 29. Makes sense. I will buy of this at 52%. How much I will buy of this one? 1 minus this one. Makes sense.

How much money will I have after How much money will I have after 15 years?

this and this and this will be

ex

let me same thing that made here let me copy

this here let me copy Place

this here and let me take this same format and put it here and let me put it here. Why I have done this? Because I want you to see this is a fixed value. Yes. I want I want you to see what was the money that I will receive. What was the money that I will receive if interest rates were of 6%? Makes sense now. And this is let me put this

white.

Yes.

This one

and this one and let me write this ones

without

sense.

Put this one in yellow.

Any questions?

I have bought a 52% of this one. I have bought a 48% of this one. So I have bought this number of bonds and I have bought this number of bonds that 52% of 41 is 21 and 48% of 41 is 20.

If interest rates remain and change I will sell this compound after one year. And I will reinvested for at a 6% rate and I will get 51.

What is the point?

What if interest rates

rises to 7%

ris

what will happen? I have interest. Yes. Look here. If interest rate increases, here I will be happy. But here I will be losing money. I would have 41 when I used to have 48 but what I losing from here I am winning what I'm losing from here and a little bit more. So at the end I will have 100 373.

sense.

Let me rise more interest rates. E 8 N 100 yes

50 yes the more I rise interest rate the more money I will be losing this one the more money I will be I will more the higher the internet rate the better one important

What does two heads mean here? The game the name of the game is I don't want to lose. I am not looking for free money. I am just looking for avoiding what had happened with silicon vol. Here I'm not doing active management. Here what I'm doing is passive management.

not

ok

but let me come back if is 6% 100 if it is 7% I will be happy because I am getting money because I reinvested with one year now let me go to the other side let me drop interest rat if I drop interest rate

of maturity will make me lose money to investment on the other hand I will be getting money because of prices let see how much I drop

and what happen

the same here I'm losing but here and makes sense. What do I have? I have an immunized portfolio. Important thing immunized portfolio is not for all maturities is an immunized portfolio for 15 years of maturity. portfolio for.

The more I drop, the more money that I will be getting. And again let me repeat it. I am not looking for making money. I just looking for hing for not losing money. Makes sense.

Let me move this to 6%.

Let me save this save us. Rose. This is session

21. Perfect.

I'm going to this ex you can also find a similar exel in space but please do this by yourself this is not just looking the trying to look how I did it is

this afternoon try to rec up this because tomorrow you could easy forget this exercise is complicated. The hardest part of today's class is to explain that. Understanding is not so difficult. explaining it is much more difficult because you should understand this makes sense. So at the end coming back what is the problem General Motor used to have that he has the abilities with one duration assets with another duration and there is a exposure to interest rate ris I have explained this with this example if I just have the one year zero bond I have reinvestment risk if I have the 30ye I have price risk and what I have done is twin moon what should be the

the be theet portfolio we have calcul what are the b prices already calcul them how many bonds should general motor buy we have already calculated and what happen if interest rates increases immediately to 7% that i won't have any problem i will not be losing money not only i won't be losing money but also i will

These are the numbers.

Careful with this with this table because this table is correct but not the same table I've got here. Why? Because in this table what I have done is calculate future value in this example instead of calculating directly future value what I have done is solve this in one year time so there is a time is but you have any questions please ask me and I don't have any problem in reviewing in answering or whatever problems with immunization what I have in theory. What happens in practice? But in practice I cannot buy a half of a B I should buy a complete B. In practice I cannot be immunizing portfolios all days. Practice interest rate changes every day. So in practice there are problems also a flat term structure of interest rate does not exist. How is every day and it's not flat. change in the level of there are real life there are problems and what we have seen is passive management have you ever heard about passing management

if you want to if you have money what would it be my investment recommendation and I don't give pieces of advice regarding investment I don't give it because I am not authorized byc in case of US to give pieces of advice but what advice if you have money and you want to invest this money what I will recommend you to do I will recommend you to buy an ETF that replicates SP500 what is the market it's hard to be the market you remember can you get the market and just following the market is well With this, what does a passive strategy means? Trying to replicate the market not to Yes. The market me at 6% what I have done a portfolio that will give me a six%. Why you think rate changes? I will sell and rebalance my and after 15 years what I will

rates increases 7% I will get 6% I can sell and rebalance and my new rate will be a%

rates drop I will

15 years on the other hand what is active management trying to be the market

is it possible to be the market yes Is it is it simple? No. Normally people that practice active management

because getting the return of the market is good enough. Is it possible to get more return than the market? Yes, it is. But this is called active management. But you should do if you you should start trying to forecast what interest rates are about to do because markets also have markets has their own expectations and personally I trust more market expectations in an individual expectation but whatever conclusion interest rate is absolutely important solving if you have underst this solving exercises is so so so so simple in real life you will not have just one payment you won have just one liability oneability one asset you won have just one asset or you just won have just one you will have hundreds So doing immunization in real life is mat because you will have lot of numbers. Thanks to programming this has become easier but the point is that people forget about immunization as happen with silicon body. For next five years we are immunized regarding duration. Why? after silicon b crisis nobody's going to forget this but what will happen after five years that people will have forgot this lesson and probably there are people that won immunize their portfolios and they will again lose a lot of money any questions with this we have close fix incom next friday we will start with derivatives next friday will be relatively simple but we will see lot of new ideas class after next Friday will be a little bit more complicated and we will just talk about options for three days then later we will talk about futur then later we will talk about swaps and we are in four classes in four session I will give sample final I don't know if in two or in two or in four but I will give you in one week with time I will give you sample final one and sample final two and

two weeks time I will tell you happy Thanksgiving and in in less than one month or in one month time you will be traveling back your house Any questions? We

exercises are simple but also you should know about

also you should review equity evaluation also you should review forward rates the and then comes derivatives

Bye.

I

hasta luego.

If you know way

anyone is going to come this Friday

Sorry. Sorry.

And are you going to travel this weekend or

are you going this? Are you going to weck?

Yeah, we're going to I'm buying tickets before