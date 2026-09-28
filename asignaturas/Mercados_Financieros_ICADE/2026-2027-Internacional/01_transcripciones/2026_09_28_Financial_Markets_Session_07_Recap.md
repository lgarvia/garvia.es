---
titulo: "Financial Markets – Session 7: Fixed Income, Duration & the Yield Curve"
fecha: 2026-09-28
curso: "Mercados Financieros Internacionales (Fall 2026)"
sesion: 7
asignatura: Mercados Financieros Internacionales
institucion: ICADE
tipo: sesion
estado: preparado
---

# Financial Markets – Session 7: Fixed Income, Duration & the Yield Curve

## 1. Session Overview

Session 7 marked the beginning of a more detailed examination of fixed-income markets. After reviewing the monetary-policy concepts introduced in previous classes, we concentrated on three questions:

1. Why are bonds so important to the financial system?
2. How can we measure their sensitivity to interest rates?
3. What can the yield curve tell us about expectations and the economy?

The class combined numerical exercises with a historical analysis of the U.S. yield curve, revisiting the dot-com crisis, the global financial crisis, the COVID-19 pandemic and Silicon Valley Bank.

The central lesson was that **bonds do not only provide financing: their prices and yields also transmit information about the entire economy.**

---

## 2. Current Financial Context

We began by reviewing several developments affecting international financial markets.

### Energy, inflation and interest rates

Geopolitical disruptions can affect energy supplies and raise production and transportation costs.

An energy supply shock can generate inflation even when it does not originate in excessive consumer demand.

This creates a difficult situation for central banks:

- Inflation may require tighter monetary policy.
- Higher interest rates can slow economic activity.
- Higher financing costs can also increase pressure on governments and companies.

The distinction between demand-driven and supply-driven inflation is therefore important when interpreting monetary-policy decisions.

### Sovereign debt and financing costs

We also discussed the increase in long-term government bond yields and the financing pressures faced by several major economies.

A particularly important reference is the yield on the U.S. 10-year Treasury.

In Europe, investors frequently monitor sovereign risk premiums relative to Germany.

The risk premium of another euro-area sovereign can be expressed as:

$$
\text{Spread} = Y_{\text{country}} - Y_{\text{Germany}}
$$

For example, if a country's 10-year bond yields 4.5% while Germany's yields 3.5%, the spread is:

$$
\text{Spread} = 1\% = 100\text{ bps}
$$

These spreads reflect differences in market pricing, which can be influenced by credit risk, liquidity, fiscal conditions and other factors.

The main lesson was to interpret financial indicators together rather than drawing conclusions from a single yield or market movement.

---

## 3. A Brief Reflection on AI and Information

The session opened with a discussion of increasingly capable AI agents, including OpenClaw and Instinct.

Unlike conventional chatbots, some agentic systems can interact directly with applications, files and other services.

Their usefulness comes from their ability to operate across an individual's information and digital tools.

However, the more access an agent receives, the greater the potential security and privacy implications.

The professor emphasized a principle introduced in previous sessions:

**The essential question is not which AI tool to use, but how your information is organized.**

Students were encouraged to develop efficient information-management habits while remaining careful about granting external systems access to personal accounts.

A practical precaution is to use official authorization mechanisms, grant only necessary permissions and avoid sharing account passwords directly.

---

# PART I — FIXED-INCOME MARKETS

## 4. Why Are Bonds So Important?

We began the fixed-income chapter by comparing bonds with traditional bank loans.

Both instruments provide financing, but bonds are generally more standardized and easier to trade in organized secondary markets.

A government can issue securities with predefined characteristics:

- Face value.
- Coupon.
- Maturity.
- Payment frequency.
- Currency.

Investors can subsequently trade those securities without requiring the issuer to negotiate a completely new borrowing agreement.

Bank loans can also be transferred or securitized, but ordinary loans are generally less standardized and less readily traded.

### Standardization creates liquidity

The central relationship is:

$$
\text{Standardization} \rightarrow \text{Tradability} \rightarrow \text{Liquidity}
$$

Liquidity makes bonds more attractive to investors because they do not necessarily have to hold the security until maturity.

It also allows bond prices and yields to become observable reference points for the broader financial system.

---

## 5. Government Bonds as Market Benchmarks

Government bond markets provide reference yields for many other financial transactions.

For example, U.S. Treasury yields are widely used when pricing:

- Corporate bonds.
- Mortgages.
- Investment projects.
- Other fixed-income instruments.

An investor evaluating a corporate bond can compare its yield against a government security with a similar maturity.

The difference may compensate for additional credit risk, liquidity differences and other characteristics.

This is one reason government bond markets are so important: **they help establish the reference price of money across different maturities.**

---

## 6. Review: Bond Pricing

The fundamental principle remains unchanged:

$$
\boxed{\text{Price} = \text{Present Value of Future Cash Flows}}
$$

For a bond with annual coupons:

$$
P=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{FV}{(1+y)^n}
$$

Where:

- $P$: current bond price.
- $C$: annual coupon.
- $FV$: face value.
- $y$: yield to maturity.
- $n$: number of years remaining.

### Classroom example

Consider a four-year bond with:

| Characteristic | Value |
|---|---:|
| Face value | €1,000 |
| Annual coupon | €40 |
| Coupon rate | 4% |
| Market yield | 5% |
| Maturity | 4 years |

Its cash flows are:

| Year | Cash flow |
|---|---:|
| 1 | €40 |
| 2 | €40 |
| 3 | €40 |
| 4 | €1,040 |

The price is:

$$
P=\frac{40}{1.05}+\frac{40}{1.05^2}
+\frac{40}{1.05^3}+\frac{1040}{1.05^4}
$$

$$
\boxed{P \approx \text{€}964.54}
$$

The bond trades below face value because its 4% coupon rate is lower than the 5% market yield.

If the market yield were also 4%, the bond would trade at par:

$$
P = \text{€}1,000
$$

---

# PART II — DURATION AND INTEREST-RATE RISK

## 7. Maturity Is Not the Same as Duration

The class introduced one of the most important concepts in fixed-income portfolio management: **duration**.

Maturity tells us when the final contractual payment will occur.

Duration measures the timing of a bond's cash flows and is closely related to its sensitivity to interest rates.

Two bonds can have the same maturity but different durations if they have different coupon structures.

The fundamental intuition is:

**The higher a bond's duration, the greater its sensitivity to changes in interest rates.**

This is particularly important for investors who may need to sell their bonds before maturity.

---

## 8. Calculating Macaulay Duration

Macaulay duration is the weighted average time until the investor receives the bond's cash flows.

Each cash flow is weighted according to its contribution to the bond's present value.

The formula is:

$$
\boxed{
D_M=\frac{\displaystyle\sum_{t=1}^{n}t\frac{CF_t}{(1+y)^t}}{P}
}
$$

Where:

- $D_M$: Macaulay duration.
- $CF_t$: cash flow in period $t$.
- $y$: yield to maturity.
- $P$: bond price.

For the four-year bond introduced earlier:

| Year | Cash flow | Present value | Weight |
|---|---:|---:|---:|
| 1 | €40 | €38.10 | 3.95% |
| 2 | €40 | €36.28 | 3.76% |
| 3 | €40 | €34.55 | 3.58% |
| 4 | €1,040 | €855.61 | 88.71% |
| **Total** | | **€964.54** | **100%** |

Duration is calculated by multiplying each payment's timing by its weight:

$$
D_M=1w_1+2w_2+3w_3+4w_4
$$

$$
\boxed{D_M\approx3.77\text{ years}}
$$

Although the bond matures in four years, its duration is slightly shorter because the investor receives some money before maturity.

This was the main numerical result of the duration exercise.

---

## 9. Duration as Interest-Rate Sensitivity

Macaulay duration is expressed in years.

To approximate the percentage change in a bond's price following a change in yield, we use **modified duration**.

For annual compounding:

$$
\boxed{
D_{\text{mod}}=\frac{D_M}{1+y}
}
$$

The approximate price change is:

$$
\boxed{
\frac{\Delta P}{P}\approx-D_{\text{mod}}\Delta y
}
$$

For the four-year bond:

$$
D_{\text{mod}}=\frac{3.77}{1.05}\approx3.59
$$

If yields increase by one percentage point:

$$
\frac{\Delta P}{P}\approx-3.59\%
$$

This is a first-order approximation. The actual price change will differ slightly because the price–yield relationship is convex rather than linear.

We will develop the concept of interest-rate sensitivity further during the fixed-income chapter.

---

## 10. Interest-Rate Risk: A Ten-Year Bond

The next exercise illustrated what happens when an investor sells a bond before maturity.

Consider a bond with:

| Characteristic | Value |
|---|---:|
| Face value | €1,000 |
| Annual coupon | €20 |
| Coupon rate | 2% |
| Initial market yield | 2% |
| Original maturity | 10 years |

Because the coupon rate equals the market yield, the initial price is:

$$
P_0 = \text{€}1,000
$$

Suppose the investor sells the bond after one year.

At that point, the bond has nine years remaining until maturity.

### Scenario A: Interest rates remain at 2%

The bond continues to trade at par:

$$
P_1 = \text{€}1,000
$$

The investor receives a coupon of €20.

The Holding Period Return is:

$$
HPR=\frac{P_1-P_0+C}{P_0}
$$

$$
HPR=\frac{1000-1000+20}{1000}
$$

$$
\boxed{HPR=2\%}
$$

The coupon must be included when calculating the return.

### Scenario B: Interest rates increase to 3%

The remaining cash flows must now be discounted at 3%.

$$
P_1=\sum_{t=1}^{9}\frac{20}{1.03^t}
+\frac{1000}{1.03^9}
$$

$$
P_1 \approx \text{€}922.14
$$

The Holding Period Return becomes:

$$
HPR=\frac{922.14-1000+20}{1000}
$$

$$
\boxed{HPR\approx-5.79\%}
$$

The investor has received a positive coupon but still experienced a negative total return.

### Scenario C: Interest rates fall to 1%

If the market yield falls, the bond becomes more valuable.

$$
P_1=\sum_{t=1}^{9}\frac{20}{1.01^t}
+\frac{1000}{1.01^9}
$$

$$
P_1 \approx \text{€}1,085.66
$$

$$
HPR=\frac{1085.66-1000+20}{1000}
$$

$$
\boxed{HPR\approx10.57\%}
$$

### Comparison

| Yield after one year | Sale price | Holding Period Return |
|---|---:|---:|
| 1% | €1,085.66 | 10.57% |
| 2% | €1,000.00 | 2.00% |
| 3% | €922.14 | −5.79% |

These calculations demonstrate the central rule of fixed-income investing:

**If interest rates rise, bond prices fall. If interest rates fall, bond prices rise.**

---

## 11. Two Dimensions of Interest-Rate Risk

Interest-rate changes can affect an investor in two different ways.

**Price risk:** An increase in yields reduces the market price of an existing bond.

**Reinvestment risk:** An increase in yields allows future coupons to be reinvested at higher rates, while a decrease reduces their reinvestment return.

These two effects move in opposite directions.

The impact of an interest-rate change therefore depends on the investor's holding period, reinvestment opportunities and the duration of the bond portfolio.

Silicon Valley Bank was mentioned again as an example of what can happen when a financial institution faces large unrealized bond losses and customers simultaneously demand their deposits.

---

# PART III — THE TERM STRUCTURE OF INTEREST RATES

## 12. What Is the Yield Curve?

The **yield curve** represents the relationship between interest rates and maturity.

Typically, it plots yields on government securities with different maturities at a given point in time.

For example:

- 3 months.
- 1 year.
- 2 years.
- 5 years.
- 10 years.
- 30 years.

The horizontal axis represents maturity.

The vertical axis represents yield.

To make a meaningful comparison, securities should have broadly comparable credit risk and other relevant characteristics.

The class used U.S. Treasury securities as its primary example.

---

## 13. Three Basic Yield-Curve Shapes

### Normal or upward-sloping

Long-term yields exceed short-term yields.

This can reflect compensation for holding longer maturities and expectations about future interest rates.

### Flat

Short-term and long-term yields are relatively similar.

A flat yield curve can occur when expectations about future interest rates offset the compensation investors ordinarily require for holding longer maturities.

### Inverted

Short-term yields exceed long-term yields.

An inverted yield curve can reflect expectations that future short-term interest rates will fall.

Historically, yield-curve inversions have often appeared before U.S. recessions, although they are not infallible predictors.

---

## 14. What Determines the Shape of the Yield Curve?

The class introduced two principal factors.

### 14.1 Liquidity preference

Investors generally prefer having access to their money sooner rather than later, other things being equal.

If two otherwise comparable investments offer the same return, an investor may prefer the shorter maturity.

Consequently, investors can demand additional compensation for committing funds over longer periods.

This contributes to an upward-sloping yield curve.

### 14.2 Expectations about future interest rates

The yield curve also reflects expectations about future monetary policy.

If investors expect short-term interest rates to increase, longer-term yields may incorporate those expectations.

If they expect rates to decrease significantly, longer-term yields may be lower than current short-term yields.

The observed yield curve reflects the interaction between these effects and other factors, including term premiums, supply and demand.

---

## 15. What Can We Infer from the Yield Curve?

An important classroom conclusion was that a positively sloped yield curve does not necessarily imply expectations of rising interest rates.

For example, the curve could be positively sloped because:

1. Investors expect rates to rise.
2. Investors expect rates to fall slightly, but the positive term premium more than compensates for that expectation.

Under the simplified model used in class, a flat or inverted yield curve suggests that expectations of declining future rates are sufficiently strong to offset investors' preference for shorter maturities.

However, this interpretation depends on assumptions about the term premium and other market influences.

**The yield curve contains valuable information, but its shape is not a perfect forecast.**

---

# PART IV — FINANCIAL HISTORY THROUGH THE YIELD CURVE

## 16. The Dot-Com Crisis

The professor used an animated historical yield curve to revisit the monetary history introduced in Session 6.

The first major episode was the dot-com crisis.

During the late 1990s, technology companies attracted substantial investment and valuations increased rapidly.

As the technology bubble approached its collapse, the U.S. yield curve flattened and inverted.

The Federal Reserve subsequently reduced interest rates during the economic slowdown.

The terrorist attacks of September 11, 2001, contributed to further uncertainty and additional monetary easing.

The exercise illustrated how changes in the yield curve can precede significant changes in monetary policy.

---

## 17. The 2004–2008 Cycle

The second historical example was the period leading up to the global financial crisis.

The Federal Reserve began increasing interest rates in June 2004.

As monetary policy tightened, the yield curve progressively flattened.

By 2006, parts of the U.S. yield curve had become inverted.

The class followed the subsequent developments:

- The Federal Reserve's tightening cycle.
- Yield-curve inversion.
- Emerging financial difficulties in 2007.
- Interest-rate reductions.
- The global financial crisis and Lehman Brothers' bankruptcy in September 2008.

The important point was the timing.

Yield-curve inversion appeared well before the most dramatic phase of the crisis.

This is why the yield curve is closely monitored as an indicator of economic and financial expectations.

---

## 18. The 2019 Inversion and the Pandemic

The class then examined the inversion of parts of the U.S. yield curve in 2019.

This occurred before the COVID-19 pandemic.

An important distinction was made:

**The yield curve did not predict the pandemic.**

Rather, the inversion indicated that financial markets were already pricing expectations of weaker economic conditions and future monetary easing.

The pandemic was an unexpected external shock.

This illustrates why financial indicators must be interpreted carefully. A signal of economic vulnerability does not identify the specific event that may subsequently trigger a crisis.

---

## 19. Inflation, the 2022 Tightening Cycle and Silicon Valley Bank

The pandemic was followed by extraordinary monetary and fiscal support.

As inflation increased, the Federal Reserve began raising interest rates in 2022.

The class emphasized the speed and magnitude of this tightening cycle.

Higher short-term rates contributed to a deeply inverted yield curve.

At the same time, rising yields reduced the market value of existing long-term bonds.

Silicon Valley Bank demonstrated how this interest-rate risk could interact with liquidity risk.

The bank experienced deposit withdrawals while holding securities that had lost substantial market value.

Its failure in March 2023 led to emergency measures intended to protect depositors and prevent broader financial contagion.

---

## 20. Why Didn't the Federal Reserve Simply Cut Rates?

The class used Silicon Valley Bank to distinguish between two different monetary-policy responses.

A central bank can change its policy interest rate.

But it can also provide emergency liquidity to financial institutions.

These tools are not interchangeable.

During the SVB crisis, the Federal Reserve faced financial-stability concerns while inflation remained elevated.

Emergency liquidity facilities helped address funding pressures without requiring an immediate reversal of the broader interest-rate policy.

This reinforced the lesson from Session 6:

**To understand monetary policy, we must examine interest rates and central-bank balance sheets together.**

The interest-rate chart alone cannot reveal every important central-bank intervention.

---

# 21. Key Formulas

| Concept | Formula |
|---|---|
| Bond price | $P=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{FV}{(1+y)^n}$ |
| Holding Period Return | $HPR=\frac{P_1-P_0+C}{P_0}$ |
| Macaulay duration | $D_M=\frac{\sum t\,PV(CF_t)}{P}$ |
| Modified duration | $D_{\text{mod}}=\frac{D_M}{1+y}$ |
| Approximate price sensitivity | $\frac{\Delta P}{P}\approx-D_{\text{mod}}\Delta y$ |
| Sovereign spread | $\text{Spread} = Y_{\text{country}} - Y_{\text{benchmark}}$ |

---

## 22. Five Ideas to Leave the Room With

1. **Standardization creates liquidity.** Government bonds are important not only as financing instruments but also as benchmarks for pricing other financial assets.

2. **Duration measures interest-rate sensitivity.** Maturity tells us when a bond expires; duration helps us understand how its value reacts to changes in yields.

3. **Fixed income is not risk-free.** An investor can lose money on a bond when selling before maturity, even while receiving the promised coupon payments.

4. **The yield curve combines liquidity preference and expectations.** An upward-sloping curve does not necessarily mean that investors expect interest rates to rise.

5. **The yield curve is a useful historical indicator, not a crystal ball.** It can reveal expectations and financial vulnerabilities without identifying exactly when or why a crisis will occur.

---

## 23. Exercises and Assessment

Problem Set 2 has been distributed and is due on **14 October 2026**.

The midterm examination is scheduled for **26 October 2026**.

Students should prioritize understanding how to calculate a bond's price and Holding Period Return. Duration and the interpretation of interest-rate sensitivity will receive greater attention as the course progresses.

Before the next session, review the numerical examples and become comfortable explaining the three main yield-curve shapes and their economic interpretation.

---

## Final Takeaway

Session 7 connected the mathematics of bond valuation with the information contained in fixed-income markets.

Duration tells us how exposed an investment is to interest-rate changes.

The yield curve tells us how different maturities are priced and provides clues about market expectations.

Together, these tools help us move from a simple rule—

**Interest rates up → bond prices down**

—to a deeper understanding of fixed-income portfolio management and the relationship between financial markets, monetary policy and the economic cycle.

# Transcription
28 de septiembre de 2026, 8:11a.m.
1 h 17 min 37 s
You can only access instinct through by invitation. I don't know how to get invitations, and I think it wouldn't be so, so difficult. The point is...  
Hey.  
Anyone of you know Open Claw?  
No one knows, so open clock.  
Open Clow.  
Do you know OpenClo?  
Oh, it has changed, whatever.  
A...  
All of you know, ChatGPT, of course.  
First time I discovered ChatGPT.  
I felt things. Yes, you start talking. I start working with it 3.5 long time ago. And once you start interact, you feel things. Then first time I discovered OpenClaw again, I felt things. I felt things because OpenClaw is something you stall.  
in your computer, I will never recommend Open Cloud. You install Open Cloud in your computer. It's an AI agent that takes control of your whole computer. You can interact with your computer from whatever. Yes?  
Start with instinct, think last Friday, last Friday, last Friday, Friday.  
It's Friday.  
Bye.  
That's Friday.  
Hey, hey, Luke, hi, Luis, and an instant, he asked me for my e-mail from all my Google.  
All my Google users, I introduce them.  
With all passwords, I give them.  
And he over to control everything it was so fast and so smooth, yes.  
I will never recommend instinct. Why? Because you are giving all your personal data or you are giving access to all your personal data to someone who you don't know in San Francisco, whatever.  
It was moving. What I strongly recommend you to do.  
To think too much about technology to think about your data. How do you have organized your data one week ago? I don't know what we will have in six months time, but probably in six months since six months time.  
We will have.  
More, more.  
No.  
What?  
Orange.  
Laura.  
More friendly.  
I was...  
I think I connected to my. I didn't pass through wires.  
And information, let me.  
English.  
No, I am.  
With my finance students in.  
You got it.  
I don't know how well he will interact or it will interact with all my information. I feel that it's fast.  
Did you start?  
How do I feel?  
Speak, for example, twice, yes.  
Road lies there. This makes me feel this is going fast, but one thing is what you feel and another thing is what will happen. OK, I'm not. Let's see what. What happened?  
Next.  
Hey.  
Yeah.  
Personally.  
For me?  
How do you say a movie, a movie?  
We don't move that.  
I love.  
Ohh.  
What is it?  
RPG. You know what is an RPG?  
And.  
If you, I think that you are a seven, you are living there. One drone has destroyed all your family and you have an RPG. What I mean is that or move this.  
Ah, so coins, yes, it's a so coins.  
The sector is so easy, so a phone, a drone, and with \$3,000, so for not all, but 20% of oil traveling to the world. You understand the problem again? Ten years ago, 40 years ago, one was a little bit more expensive.  
Why is electricity?  
Happy, you are desperate, you have an RPG, you can stop the world for thousands.  
Big.  
The rewards has increased interest rates. In order to fight again, the inflation that is coming from normal.  
Have to do it.  
Has to do with the offer with the supplies. Can you find?  
I mean.  
The second effect secondary effect is.  
I do care.  
Don't you think that now things are a little bit gone?  
Where is that?  
Waiting today.  
There is like a crowd about the meters, and they are thinking about the meters, and on the other hand, the rest of the war has not stopped.  
Also, careful with, today we will talk about fixed income markets. Yes, careful with fixed income markets. Why is because then?  
Yeah.  
Freshly.  
U.S. Treasury.  
I've been showing you.  
I've been 30 days.  
23rd, not 25th.  
This is one month.  
You know, one month.  
Yeah.  
Thank you.  
Why? Because in the States.  
Personally.  
The 10 year Treasury over 5%.  
Makes me feel nervous.  
This is something that may makes me feel nervous. I don't think they told 100, yes, the speed 100 is still in maximums.  
Spain, the highest return in decades, yes. And on the other hand, we have this is something that I am not, I don't really, really understand.  
Also.  
Yes, one quick glance over this.  
Also, careful with...  
YouTube.  
In Europe, we have been working.  
With what is called Prima de Riesgo. Have you ever heard about Prima de Riesgo?  
The difference between the spread between German bone.  
and all other national buffer having not only fiscal policy is suffering, but also we...  
Have elections.  
In France, in Italy, in Spain.  
Next month, yes.  
We have elections.  
And personally, I don't see. What is the problem with the collections? Something similar with what is happening.  
What do we need that in order to contain technicality? We need that for that at least don't extend too much. What do we have on?  
On your hand, you have to talk to me.  
We have hope of these people that are perfect. I will carry you for me.  
No policies, fiscal policy meets now console, and the map that I have shown you, or if you see the five year Treasury, what does this mean? That the state are not going to find money in order for the finance?  
USA, we will find this in the short term, and with your term, we will find money.  
You know where to find that, that's what they call it.  
What I have to do with the financial expense, because the financing it has.  
Hi, and this means that there is a lot.  
More than 20%, so you need to.  
This time, my dear.  
The meeting is out of financial analysis, yes.  
Okay.  
What we have done till now?  
What we have been doing?  
A news concept of talking about monetary policy.  
All of you know what is the difference between monetary base and money supply?  
Monetary space has to do with the central bank balance sheet, yes?  
Money supply has to do with all the money that is...  
In circulation in the system, yes? Only base.  
Let me.  
Hello!  
Look, your last class was actually Wednesday. I didn't know if it was gonna find my last class so smooth or not. Wednesday, September 23, session 6.  
Not the 21st. Probably there is a mistake. I don't know why he's saying not the 21st. It is the recap. We work through problem set one, annual stocks. Then we use internet rates, the monetary base and the money supply to trace how monetary policy chains have  
3rd 2008 through the .com crisis, Lehman, COVID stimulus and Silicon Valley.  
Review exercise 7, internal rate of return.  
From your last club, notes full recession rate.  
426 that will take place December the 2nd.  
I mean, I have my own ideas, yes?  
This is not mine.  
Is Juan is on my?  
Coming back here.  
What we did in during last class, we saw we closed the monetary policy chapter.  
11 of September, Lehman, Recover, and then what has happened before? Yes.  
What are we going to talk about today? We are going to talk today about the G course.  
Here, we have talked about bonds, talking about fixing.  
Hey, when talking about value of money, talk about the money or half, so we...  
Also, I have shared with you problem set 2 that should be delivered day 14th. I have shared with you problem set 2 that...  
To see the team birthday, the 14th.  
Fourteenth of October.  
One week before the one week before the meeting.  
Okay.  
Is a bone, at the end, a bone is like an... I love you, no? Why your bones is my own expression in the world?  
Why all the freshman in the world?  
So many boys in the world of the same.  
By they are so standard.  
The words, and then I understand that.  
What?  
Bye.  
Italian phones looks like Japanese phones.  
What?  
Bio looks the same with Google. Bio has more or less same maturity than 30 years, 50 years.  
Because foreign countries treat each other about training others.  
Great.  
Well, you can go.  
Yes.  
And you that I suppose you are American. Can you reply UK different Ruiz.  
What do you prefer? What do you prefer? Spanish, French, Italian.  
Easy.  
I mean, is that right now?  
Are you in the return?  
Most of them are friends, and are the ones that need more results.  
Normally, you don't have to, not you, I mean, you know, a trader at that is in New York.  
Does not have to not too much knowledge in order to see our friends, she compared with Hidalgo.  
Play.  
They will choose Europe, or if you are an expert in Europe, you speak again, for example, the problem.  
Neither.  
Italian bones would be more complicated.  
You should study. I like this.  
The more simple, the better. What you have been in an international airport?  
All international airports are all over the world.  
Same, same, absolutely standardized.  
Why? Because moving on one is like...  
It has to do, it has to do with this conversation.  
And I'm just gonna go out.  
Do you want a like?  
Without Pedro.  
So we approach with AI, we can probably.  
But I have told you regarding this. I am in love with this thing because he's so smoothie.  
Careful with that, because if we stop thinking and we are just looking for all the smoothies.  
Google Transfer.  
For certain to Benito.  
I'm telling you that.  
Not being exact, but this is not something, yes, for example, are you taking notes?  
Yeah, they both.  
There are things that we're getting to address.  
Regarding, you should go into Google. You should fulfill this. You should. Do you have your password? Do you have your? Do you understand what I mean? There is access coming here. I would like you to go walking.  
For my home, the place I live in, yes, there are airports, there are wood, let me call it, yes, is good or bad?  
Please don't summarize things. Fiction exists, and there is good fiction, and there is when all that fiction we have left.  
I'd like to meet with those all these batteries. Yes?  
I was talking about I was talking about liquidity and I have to stop.  
Stop.  
Let's start talking about this. Probably I will come back to this point four times during the course.  
Why? Because thanks to technology.  
Thank you.  
I got this.  
With path, they they make a push with Vega.  
Do you remember of CM?  
I spell that.  
Can you find and programming your serial in the serial?  
Cortana, I need knowledge.  
Yes.  
Do we know everything?  
Okay.  
Can we choose what to learn? And if we can choose what to learn, can we choose those things that are more worthy?  
Absolutely, yes.  
OK. What is about?  
Oh, let me continue with this idea.  
This.  
Yeah, really, we are gonna talk about.  
In the whole course, we are going to talk about bones now.  
You are open, you need time.  
This type of financing, because it is the most popular.  
Hope people get guidance.  
Which instrument? No.  
The question is, why loans is the most common way of financing? Why is the most common way of financing? We are talking about bonds.  
So, stopping them, why we don't stop talking about dogs?  
You understand the question?  
Why do we talk about so much?  
Careful, because they are not bones are common, bones are common, bones are not so common.  
I mean, there are people that, not as many people as.  
Enders.  
That is another question.  
Why?  
Has.  
And.  
You alright? You alright?  
But I have to.  
I go, I will talk to Max about.  
I do it up.  
I am.  
No.  
No, I mean, once the bank, if you are alone.  
Will the bank will we sell this loan in a secondary market? They could, they could, but once you buy a treasury, can you?  
We sell it in a secondary market.  
Absolutely.  
You, too, these secondary market.  
We talked so much about balls, yes?  
There is a second and market regarding both.  
Why? You are swallowed the long way.  
On the other hand, on the other hand.  
You own.  
Call, we are selling in the secondary market.  
You can see all this, and you can see the rate, and with all these rates, you can calculate, for example, if these are U.S. traders, you can calculate it.  
The will be a reference. Make sense? Reference show what he or what things we do. What I mean is that.  
Due to the secondary market, due to the liquidity bonds have.  
Do you stay as refidences?  
Reference, this operates, this is for market, he goes times to.  
We have references.  
That's ABS, ABS, oh.  
I told you, and firstly, is my point to...  
I start feeling nervous.  
Makes sense.  
These are references.  
Okay.  
So, here you've got some information regarding bonds.  
Bonds, maturity.  
I'm gonna complete the price of all. I'm gonna complete this in the midterm. I will just.  
Ask you to calculate the price of a ball.  
But for the final, I would like you to know, not just.  
maturity, but also duration. Yes, imagine that I've got a bond with four years. If the other side tells me, you have said to...  
Twenty-three times makes sense.  
And he has compared all times I have said make sense in all classes. It's around 24, 25 times.  
I feel myself saying, oh, probably he will, it will be right. Whatever. One, two, three, 4.  
Yes, opportunity.  
Yeah.  
Give me a couple, right?  
Okay.  
Face value.  
Ohh.  
Thousand, so 40, 40, 40, 1,040, yep.  
The right.  
Ohh, who will you calculate the price of the bone?  
By calculating present value of future cash flows, yes?  
OnePlus.  
Percent.  
Right, right, right.  
the 3rd and to the 4th. Make sense?  
Yep, another time.  
On the sun.  
Some some in Spanish, some in English, but some of these will be.  
900.  
64, 54.  
Now, let me check if this is correct. If rate is, if rate would be 4%.  
One 1000, yep.  
Okay.  
Knop.  
Today we won't talk about the ratio to much. Today we won't talk about interest rate sensitivity to much.  
But what is duration?  
Duration can sound like time, but duration is not time. Duration is interest rate sensitivity. The higher the duration, the more the price will change when interest rate changes.  
How much price will change when interest rate changes? Duration will be the answer. Yep.  
Let me show you how we will calculate duration.  
Normal duration, I call it duration, yes.  
All of you see that this price.  
All of you see that this price.  
is the sum of all future cash flows. So I'm going to calculate how much this will weight over this. How much this will weight over this.  
The weight, thirty-eight over the price.  
This would be around now.  
Three points around the 4%.  
A little bit less, a little bit less, and...  
Face value plus last coupon is eighty-eight percent of worth, yes?  
Let me add this, Sam.  
Suma.  
December worth.  
Hundred percent.  
Yep.  
Ladies, how much this coupon?  
Wars over this.  
How much is the maturity of the first coupon worth? One times 3.95.  
I'm gonna do this with all.  
And duration is just this average. The average of all future maturities times the weight. So...  
This one, with a maturity of four years, has a duration of 3.77 years.  
What is duration?  
Interest rate sensitivity.  
What is duration? If interest rate changes? If interest rate changes?  
The price of this bond will change.  
Ask.  
If this would be a zero compound with 3.77 years of maturity.  
Like, yep.  
Understood?  
Okay.  
So, here you've got several examples, and you can calculate them.  
Let me now talk about the interest rate risk quickly.  
About this issue without discount with maturity of 10 years, facial of 1000 and 10 coupons of 20 EUR to be paid yearly. Interest rate is 2%, 10 years, 20 EUR, 1000.  
So, we have 10 years of maturity.  
We've got 10 years of maturity.  
Coupons of 20.  
And face value of 1000, yes?  
The interest rate is 2%.  
Interest rate is 2%, yep.  
I'm going to calculate the price.  
If coupons are 2% and interest rate is 2%, what would be the price?  
What would be the price?  
If coupons are 2% and rate is 2%,  
If I will get that 2%, and rate it 2%.  
It would be a par bond. Yes, a par bond. If interest rate rises, price will fall. It would be a bond with discount. If interest rate falls, for example, to 1%, price would be higher than face value. This would be a premium bond. So  
Let me two person, yep.  
Two percent, 1000.  
We've got this, the rate is 2%, yep.  
If the bond is sold after one year time and the interest rate remains at the same, let me calculate the return.  
I'm going to sell. I'm going to sell this bond one year after.  
After one year.  
I will be here.  
After one year.  
Yes, nine years left till maturity, yep.  
All of you are with me?  
I'm gonna calculate after one year I'm gonna sell this bone.  
I'm gonna consider that rates remain unchanged.  
Rates where 2% rate remain unchanged, yes?  
And I'm going to sell this bomb. What is going to be the price at which I'm selling this bomb?  
At which price am I gonna sell this bomb?  
What will be the price if interest rates remain unchanged?  
Price will be 1000, yes?  
So what is my HPR?  
I would get 1000. I have paid 1000, yes. José, future value.  
A 1000 over 1000.  
Minus one.  
All of you are with me.  
It's zero.  
Is it up?  
Then, why someone will invest?  
In these worlds, now something is missing there.  
What is missing there?  
One 1000 - do I have both after one year, just 1000?  
The coupon.  
This coupon is in my pocket also.  
What do you see?  
I was missing the first coupon. Let me just here.  
This coupon, and now, yes, the return will be at 2%.  
I bought it at 1000, I get 20 EUR of coupons and I'm selling this at 1000. So my return has been 2%.  
Simple.  
Is fixed income secure?  
If you wait in maturity, you will get a fixed amount of money. But what if you sell it before?  
Rates contains.  
Imagine that getting worse appears after one year on television.  
And he says that he's going to raise interest rates from 2 to 3%.  
What will happen with rates?  
What will happen with the price?  
If someone increases interest rates, the price will drop. I am getting 20 EUR of coupon. I'm getting the coupon. But the point is that the price at which I will sell it will drop. So no matter I got the coupon of \$20,  
I am losing money.  
My return is not just negative, but also is...  
I've lost a 5.75% of my investment. Make sense?  
Do you see, do you feel interest rate risk?  
Yep.  
On the other hand, if interest rates drop, price will increase and instead of getting a 2% return,  
I will get more than a 10% return.  
What is this about?  
This is interest rate risk.  
If interest rate rise to 3% or fall to 1%,  
The rate would drop if interest rates increases.  
Or the HPR will rise if interest rates drop, but it.  
What is this interest rate risk?  
Which one is one of the best samples you can find from interest rate consequences? Silicon Valley Bank crisis.  
Silicon Valley Bank crisis, we talk about it last class.  
Okay, the interest rate risk can affect investment in two ways.  
On one hand.  
OK, you better great say this, yes.  
What will it mean at the interim intelligence?  
You own bones, that will fall.  
Be careful because you can have money. In case you get money, you can get more from your money.  
So, internet rates in Greece is good or bad.  
Depends on your position if you are in the market.  
It will be bad because you will be, you will lose return from your investment, but...  
If you are sickly.  
Yeah, oh, Water Buffet is in September. All of you know Water Buffet?  
Yeah, he did.  
So, that increasing the rates.  
He's not looking for interest rates. He's not a fixed income investor. But Fed, increasing interest rates and having the Treasury at 5 point...  
Two percent means that probably we will see markets going down.  
I don't have a grease double yet.  
I don't have a crystal ball, but the abilities.  
Whatever, fixed income, we will talk.  
I would like to talk about the term structure of interest rates. Yes?  
What is the idea? A government?  
This is, this is in the Spanish market.  
A government.  
The government has.  
Its primary market, that is when the government get finance. I'm looking for, I'm looking for.  
This one.  
I was looking for this one and let me share with you.  
Okay.  
Let me talk about...  
It is great.  
References.  
Because great reference, yep.  
Why is it rain?  
What is the weather in the streets now?  
Is this another question?  
What is four person? I would not say four person. What is four person?  
Thank you, first week I have already shown you is 5.2%.  
Yes.  
Hey, and 4% is 4% or 3.75%.  
What did you say about it?  
Is between both. Careful.  
Because of that, I guess. There is not just one. Normally, when you say 4%, you are talking about the...  
Tilly, about that song.  
But always, when anywhere stops.  
That is not just one, there are two.  
The lending facility and then the coaching facility.  
A bank can lend or can borrow.  
If you borrow, you will apply.  
Four percent, if you deposit, you will get that 3.75 percent.  
Yep.  
So...  
They did a reserve.  
Is an indicator.  
Federal Reserve is an indicator that match with it.  
Sure, there.  
Jordan.  
Then, have you had a legal?  
Miguel.  
Calvo.  
In Europe, we go.  
Hey, how do you say? No, labor market, no.  
Let me.  
Bing.  
London in, yeah, I don't want to read what is legal.  
Libor.  
Have you ever had a liver?  
Let me in the States.  
So, fair.  
Not just software, also the repo, the repo software.  
Have you had all suffer?  
In Europe, in Europe, we have a river. There is also a river.  
What is suffered? Another references, another reference suffered in this case came from the interbankari markets.  
Software came from the interbankary market, yep.  
And today we will talk also about the yield curve.  
Where is the real cool?  
On the left, you've got the new coup.  
And then you were the eagle.  
Where were you born?  
When, when will you, when will you?  
2005 this month.  
September 2005.  
September 2005.  
26th of September, 2005. Yep.  
What can you find here?  
On the left, you have the yield curve corresponding with.  
The yield curve corresponding with September 2005.  
This short-term one will match with.  
Federal Reserve, short term. Let me look for Fred. Federal Reserve. Short term. I shared it with you here. You've got it here. I'm going to Google it.  
Fred, that is right.  
September 2005.  
95, 9, 2000 more or less here.  
What do I have here?  
Here, I've got the short term of this, for example, September 2005.  
Short term rate is around.  
Three percent.  
Let me come here.  
September 2005.  
3.5%, yes. Don't you see that this match with this? I'm going to go, for example, to year 2003.  
I'm going to go to year 2003 and you will see this here.  
Year 2003, the rate is down.  
I'm going to go, for example, to 2012, and the rate should be 0. Yep.  
2012 and the rate is in zero, yep.  
And I'm gonna go to 1999.  
And it's around 5%.  
Any questions?  
Let me animate.  
And, ohh, sorry, what do you have on the right?  
But it is a.  
Rafi says speaker.  
But careful, because there is another idea: Is this Estepa 100 the same?  
And this.  
This is if I had it.  
Was.  
Eighty price.  
Fifty percent of that is be 100 for compost.  
For your companies.  
Thirty percent of this SP 500 is composed just by.  
Six 5 compacts.  
Does it matter?  
Absolutely.  
Have you understand what I have said?  
Just be handled 20 years ago.  
Consistor.  
And their company, but the way it was more.  
Good.  
Nowadays, 300 is mostly.  
Vega.  
Avail, Microsoft.  
I'm sorry.  
And that's it, more or less.  
Why do you think your proof has this shape?  
Why did they say poop?  
What does, what is the view? Is 1 graph, each state there is a different view. And what can you find in this graph? In this graph, you can see the difference.  
Different yields corresponding to different maturities of pressures.  
You take all U.S. Treasuries, you put them into a graph, and what can you see?  
relationship between different maturities.  
Thank you, yep.  
Um...  
What can you see by the city?  
Normally.  
There are.  
Three different shapes.  
It can have.  
The slope could be positive.  
Slow, EU curve could be flat.  
Or there could be a negative flow, yes?  
There are two effects.  
Two effects that tells the slow, yes?  
There is one first.  
The first effect is called liquidity.  
Reference.  
Liquidity preference.  
They last that.  
What do you prefer?  
100 years.  
What do you prefer, the money to be in your pocket or into Federal Reserve pocket?  
You're on for me, so...  
If you can choose with same return a two-year investment or a 30-year investment, which one would you choose with same return?  
Probably the one that will make the money to be in your pocket before.  
So liquidity preference, the last to think that the longer the maturity,  
The longer the maturity.  
The more Barrigüete.  
So, if we will just be thinking about with the preference, how the slope of the yield curve should be.  
Positive.  
Yeah.  
All of you get liquidity preference.  
Like, what is this?  
What are all the things? What is the second thing?  
You can find when looking at the new course.  
You can see also expectations.  
You can talk, you can see also expectations, what people expect them to do.  
What people expect Fed to do.  
And, in this case...  
Thinking about expectations that your curve could be.  
If you think Federal Reserve will increase interest rates?  
You will have a positive slope.  
Can have a flat slow.  
Hello.  
I think so, yeah.  
If someone thinks, if someone believes Fed is dropping the rate, what could be the cost?  
Maraji Nagar.  
If there is high inflation, you should say if there is no inflation.  
Why people think Fed would drop interest rates? Because that's a crisis.  
Because they.  
Yep, if there is a crisis.  
I'm putting on the best way basis.  
Why people would think internet rates to grow?  
I think this first normally hope so the idea is.  
We're looking at the new proof.  
When looking at the new course?  
You have both things working at the same time.  
So, if the slope is positive...  
If the slope is positive, you cannot say that we have positive expectations.  
positive expectations and liquidity preference or negative expectations and a higher liquidity preference than expectations. Do you understand what I'm saying? If there's low peace positive, we cannot say anything.  
We cannot say anything. We don't know. Liquidity preference will always be positive. But we don't know if expectations are positive or negative because of liquidity preference. Yes?  
But if the slope is flat, if the slope is flat or negative, what can we say?  
If the slope is flat or negative, what can we say?  
Not only that there are negative expectations, but also that expectations are negative and higher than liquidity preference.  
Okay, I am in June 1999.  
The other day, we talked about history. Do you remember the 11th of September attack?  
Interest rate drop, then Fed consider. We have recovered.  
Then here start the financial crisis.  
And here was the Lehman's collapse.  
Let's review the other day's story from a different perspective.  
From the yield curve perspective, yes?  
We are in 1999.  
We are just in the middle of the.com crisis.  
dot com crisis. Internet was a bubble. Oh, internet is something that the bubble is about to explode.  
Now we are living something similar to the.com crisis in some aspects. Yep.  
In other aspects, we cannot say this is the same.  
I have, yes, press the play.  
October.  
This is.  
Look.  
Oh, did you cook fish?  
You can, you can consider this an inverse, if you see the 10 year.  
The year is higher than the 30 year.  
So, depending how you consider an inverted yield curve, this could be an inverted yield curve.  
And May year 2000. May year 2000.  
We are here. Federal Reserve is about to drop interest rates. Why? Due to the dot-com crisis.  
Federal Reserve is about to drop interest rates and look how Federal Reserve is. Look this yield curve.  
Is this flat?  
Is this inverted?  
I don't care. You can consider this also inverted.  
Look this one, this one is inverted.  
This one is negative. Yes. And a drop in interest rate is around is about to happen. Look, look this one.  
And Fed has increased dropping interest rates, yes?  
And 11th of September.  
We are in August 2001. Next month will be the 11th of September. Once the attack happened, you will see how the close rate would be dropped from this side to here. It will happen in seconds.  
Look.  
Have you seen?  
Interest rate has dropped.  
The crisis.  
We are just in the valley, yeah. And once Federal Reserve considers the economy has recovered, we are in year 2003. Look, SP 500, what is doing? We are in year 2003. Let me come back. 2003.  
We are there, yes?  
When Fed will start recover increasing interest rates in July 2004?  
July 2004.  
May 2003.  
August, September, July 2004 is when Federal Reserve will increase interest rates.  
March, May.  
June, look, reaching this point, Federal Reserve has considered the economy has recovered.  
Reaching this point, Federal Reserve is gonna increase rate 2004.  
And what Federal Reserve is doing, increasing rates.  
And look in year 2000.  
Seven, 2008, yep.  
901. Look the new curve in year 2005.  
902.  
2006, look.  
Is this flat?  
What the yield curve start saying in year 2006?  
We are there, yes?  
Did you goofy a predictor?  
Your curve has start saying, "Careful!"  
Something is around to happen, yes?  
We are in year 2006.  
Can you hear it?  
Can you hear the screaming?  
2006  
Ah, does it hurt?  
903.  
Have you seen these movements?  
Look this, look these movements, yeah.  
We are in year 2006.  
904.  
Does it hurt?  
905.  
30th of August. Yes, Federal Reserve will start dropping interest rates.  
And we are close to year 2008. Lehman collapse is about to happen, yes?  
Don't you see how the yield curve start acting as a predictor? One, two years before the crisis to happen?  
Animate.  
Look, March, April, September is about to happen, yes? June, August, look, look rates.  
Have you seen how interest rates drop?  
Okay, I'm gonna move quickly.  
Through these years.  
Two 1015, 2017, yes, Federal Reserve is increasing interest rates. Look, the year look.  
June 2019.  
Is this an inverted deal curve?  
I would bet that I would say that, yes, this no, this no, this one, yes.  
This one, yes.  
What is about to happen?  
the pandemic. I'm not saying that the yield curve predict the pandemic. No. What I'm saying is that before the pandemic,  
There were things that wasn't going properly in the financial system. And the pandemic was an excuse in order to recover, to transform all these things.  
You lie, I was look.  
Is this inverted?  
Look, this is good.  
Look, this one.  
Yep.  
August 2009.  
December, look the pandemic.  
That is, yes?  
And during the pandemic, now we are going to find...  
Inflation.  
Now we are gonna move once we are approach year 2022.  
Look what is going to happen with rates. Let me move. We are in year 2020.  
The stimulus checks.  
Two 1000, twenty-two, 2000, look.  
Look how Fed is going to increase interest rates, yes?  
Please look. Did you look it? Look, look how interest rates are going to increase. How fast?  
Have you seen it?  
Why Federal Reserve increase interest rates so fast?  
Because there was inflation.  
Because there was inflation.  
Look, look, Daddy, look, Daddy report.  
And just this, all these.  
Oh, is this your groove absolutely inverted?  
What is about to happen? What happened?  
Two months after this Silicon Valley Bank crisis.  
Silicon Valley Bank crisis. But important thing, during Silicon Valley Bank crisis,  
Here it is, here it is. Federal Reserve didn't drop interest rates. Why Federal Reserve didn't drop interest rates during Silicon Valley Bank crisis?  
Why?  
Why Federal Reserve didn't drop interest rates during Silicon Valley Bank crisis?  
No one.  
Mm.  
And not, not due to inflation.  
Did Silicon Valley Bank crisis become a systematic crisis?  
No, why?  
Did they, they?  
They did another thing.  
They did another thing.  
They inject money.  
They bail out Silicon Valley Bank prices. Instead of dropping interest rates,  
They put a lot of money into Silicon Valley.  
They act quickly.  
And instead of dropping rates, and there was inflation, instead of dropping rates.  
Federal Reserve at you cannot see in this graph.  
what Federal Reserve did. You should look in order to see what Federal Reserve did. You should go to this graph.  
The M. Zero monetary, the monetary base graph, yes.  
And if you see, I share it with you, if you see the monetary base graph.  
You will see that in March 2023.  
Monetary base increase.  
They print money and put this money inside Silicon Valley.  
Look, look at your cough.  
Look that, look that, look that.  
Is this an inverted deal curve?  
Absolutely, yes.  
Absolutely, yes, 2024.  
Federal Reserve drop interest rates and now they are increasing rates.  
What do we have now? A normal.  
Any questions?  
Any questions?  
So...  
Next day, we will continue. OK.  
You.