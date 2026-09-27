---
titulo: "Foundations of Finance – Session 7: Yield Curves, Forward Rates and Interest Rate Risk"
fecha: 2026-09-21
curso: "Foundations of Finance (Fall 2026)"
sesion: 7
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---

# Foundations of Finance – Session 7

## Yield Curves, Forward Rates and Interest Rate Risk

**Date:** September 21, 2026
**Course:** Foundations of Finance – Fall 2026
**Institution:** NYU Madrid

---

# 1. Session Overview

Session 7 closed the main fixed-income block before moving to **equity**.

The session focused on:

* review of Holding Period Return;
* semiannual rates;
* spot rates;
* forward rates;
* the yield curve;
* expectations about future interest rates;
* liquidity preference;
* yield-curve shapes;
* interest-rate risk;
* the Silicon Valley Bank case;
* Asset–Liability Management.

The central idea was:

> **Interest rates are not one single number. They depend on maturity, expectations, liquidity and risk.**

---

# 2. Review: Holding Period Return

The class began by revisiting the previous session.

Suppose an investor buys a 3-year zero-coupon bond yielding 5%.

Its initial price is:

$$P_0 = \frac{1000}{(1.05)^3}$$

One year later, two years remain until maturity.

If the new market yield rises to 7%, the new price is:

$$P_1 = \frac{1000}{(1.07)^2}$$

The investor's Holding Period Return is:

$$\boxed{\text{HPR} = \frac{P_1}{P_0} - 1}$$

Because rates increased, the bond price fell relative to what it would have been if rates had remained unchanged.

Therefore:

$$\boxed{\text{Rates}\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow \;\Rightarrow\; \text{HPR}\downarrow}$$

---

# 3. Yield at Purchase Is Not Guaranteed Return

An important distinction was repeated:

> **The YTM at which you buy a bond is not necessarily the return you will realize if you sell before maturity.**

If market rates change, the selling price changes.

Therefore:

$$\boxed{\text{YTM at Purchase} \neq \text{Realized HPR}}$$

when the bond is sold before maturity.

---

# 4. Semiannual Rates

The session briefly reviewed bonds paying coupons twice per year.

If a bond has a quoted annual yield of:

$\$6\%$$

and coupons are semiannual, the rate per six-month period is:

$$\boxed{3\%}$$

The key principle remains:

> **The unit of time and the unit of the interest rate must be consistent.**

If we work in half-years, both:

* number of periods;
* discount rate;

must be expressed in half-year terms.

---

# 5. From One Interest Rate to Many Interest Rates

Until now, many examples used a single interest rate.

In reality, financial markets contain rates for many different maturities.

For example:

* overnight;
* 3 months;
* 1 year;
* 2 years;
* 5 years;
* 10 years;
* 30 years.

Plotting these rates against maturity gives us the:

# Yield Curve

---

# 6. Yield Curve

The yield curve shows:

$$\boxed{\text{Yield} \quad\text{versus}\quad \text{Maturity}}$$

It is also called:

* term structure of interest rates;
* term structure of yields.

Each day, market prices change.

Therefore the yield curve can also change every day.

---

# 7. Who Determines the Yield Curve?

The class distinguished between two forces.

## Central Bank

The central bank has a strong influence on:

$$\boxed{\text{Short-Term Rates}}$$

## Financial Markets

Market trading determines yields across longer maturities.

Therefore:

> **The central bank strongly influences the short end of the curve, while markets determine much of the rest.**

---

# 8. Spot Rates

A:

## Spot Rate

is the rate applicable from today to a particular future date.

Examples:

* 1-year spot rate;
* 2-year spot rate;
* 5-year spot rate.

Conceptually:

$$s_1$$

is the rate from today to year 1.

$$s_2$$

is the annualized rate from today to year 2.

---

# 9. Different Rates Across Time

Suppose:

### First year

$\$3\%$$

### Second year

$\$5\%$$

A simple arithmetic average would be:

$$\frac{3\% + 5\%}{2} = 4\%$$

But finance uses compound returns.

Therefore the correct equivalent two-year annual rate satisfies:

$$(1+r)^2 = (1.03)(1.05)$$

so:

$$\boxed{r = \sqrt{(1.03)(1.05)} - 1}$$

This is a geometric average.

---

# 10. Why We Use the Geometric Average

Returns compound through time.

Therefore:

$$\boxed{1 + R_{\text{total}} = (1+r_1)(1+r_2)\cdots(1+r_T)}$$

The equivalent annual return is obtained from the compounded product, not simply from the arithmetic average.

This is the same logic used throughout Time Value of Money.

---

# 11. Forward Rates

A:

## Forward Rate

is a rate implied today for an investment that will begin in the future.

For example:

> What one-year interest rate does today's market imply for the period between year 1 and year 2?

Suppose:

$$s_1=2\%$$

and:

$$s_2=3\%$$

Then:

$$(1+s_2)^2 = (1+s_1)(1+f_{1,1})$$

Therefore:

$$\boxed{1 + f_{1,1} = \frac{(1+s_2)^2}{1+s_1}}$$

and:

$$\boxed{f_{1,1} = \frac{(1+s_2)^2}{1+s_1} - 1}$$

---

# 12. Intuition Behind the Forward Rate

If:

$$s_1=2\%$$

and the two-year spot rate is:

$$s_2=3\%$$

then the implied second-year rate must be higher than 3%.

Why?

Because the first year earns only 2%.

The second year must compensate so that the compounded two-year return equals 3% per year overall.

The implied forward rate is therefore approximately:

$\$4\%$$

---

# 13. Expectations Hypothesis

The class introduced the:

## Expectations Hypothesis

The intuition is:

> **Long-term interest rates reflect expectations about future short-term interest rates.**

Therefore, if investors expect future short-term rates to rise, longer-term yields should tend to be higher.

An upward-sloping curve may therefore reflect expectations of:

$$\boxed{\text{Higher Future Short-Term Rates}}$$

---

# 14. But Expectations Are Not Enough

The yield curve cannot be understood using expectations alone.

The session introduced a second component:

# Liquidity Preference

Investors generally prefer receiving their money sooner rather than later.

Therefore, all else equal, they require additional compensation for committing money for longer periods.

This creates a tendency toward:

$$\boxed{\text{Positive Yield-Curve Slope}}$$

---

# 15. Two Forces Behind the Yield Curve

The slope of the yield curve can therefore be viewed as the combination of:

1. **Expectations**
2. **Liquidity Preference**

Conceptually:

$$\boxed{\text{Yield-Curve Slope} = \text{Expectations Effect} + \text{Liquidity Premium}}$$

The liquidity component tends to push longer-term rates upward.

---

# 16. Upward-Sloping Yield Curve

If the yield curve slopes upward, we cannot automatically conclude that markets expect higher future rates.

Why?

Because part or all of the positive slope may simply reflect liquidity preference.

Therefore:

> **A positive slope alone does not clearly reveal expectations.**

---

# 17. Flat Yield Curve

If the curve is flat even though liquidity preference normally pushes it upward, then expectations must be exerting downward pressure.

Therefore a flat curve may indicate:

$$\boxed{\text{Expectations of Falling Future Rates}}$$

strong enough to offset the liquidity premium.

---

# 18. Inverted Yield Curve

An:

## Inverted Yield Curve

occurs when short-term rates are above long-term rates.

If liquidity preference normally creates a positive effect, then a negative slope requires sufficiently negative expectations.

Therefore:

$$\boxed{\text{Inverted Curve} \;\Rightarrow\; \text{Strong Expectations of Lower Future Rates}}$$

within the framework discussed in class.

---

# 19. Yield Curves and Economic Expectations

Why might investors expect interest rates to fall?

Often because they expect:

* slower economic growth;
* lower inflation;
* monetary easing;
* recession or financial stress.

For this reason, yield-curve inversions have historically received substantial attention as economic indicators.

The class used historical episodes to illustrate this relationship.

---

# 20. Central Banks and Crises

The session connected interest-rate movements with several historical crises.

The broad pattern discussed was:

### Crisis / Economic Weakness

Central banks may:

$$\boxed{\text{Cut Rates}}$$

to support activity and financial stability.

### Stronger Economy / Inflation

Central banks may:

$$\boxed{\text{Raise Rates}}$$

to restrain inflation and financial conditions.

The detailed historical examples were used primarily to show how monetary policy interacts with financial markets.

---

# 21. Monetary Policy After 2008

The class also emphasized that after the Global Financial Crisis, looking only at policy interest rates can miss part of the picture.

Central banks increasingly used their balance sheets and the monetary base as policy tools.

This means financial conditions may be affected through:

* interest rates;
* central-bank liquidity;
* asset purchases;
* balance-sheet expansion.

---

# 22. Sovereign Spreads

The concept of sovereign spread was reviewed again.

Within the euro area:

$$\boxed{\text{Spread} = Y_{\text{Country}} - Y_{\text{Germany}}}$$

This provides an indicator of how markets price one government's risk relative to the benchmark.

The spread can therefore be viewed as a market measure of:

$$\boxed{\text{Relative Credit Risk}}$$

---

# 23. Interest-Rate Risk

A major theme of the session was:

# Interest-Rate Risk

Bond values change when interest rates change.

Therefore:

$$\boxed{\text{Rates}\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow}$$

The longer the maturity:

$$\boxed{\text{Maturity}\uparrow \;\Rightarrow\; \text{Price Sensitivity}\uparrow}$$

Long-term bonds are therefore particularly exposed to interest-rate movements.

---

# 24. Interest-Rate Risk Depends on the Investor

A very important distinction was made:

> **Interest-rate risk is not only a property of a bond. It depends on the relationship between the asset and the investor's needs.**

For example:

### Bondholder

If rates rise:

$$P_{\text{bond}}\downarrow$$

### Investor Holding Cash

If rates rise:

$$\text{Future Investment Opportunities}\uparrow$$

The same movement in interest rates can therefore hurt one investor and benefit another.

---

# 25. Silicon Valley Bank

The session used **Silicon Valley Bank** as a real-world example of interest-rate risk.

The simplified mechanism discussed was:

1. the bank held substantial amounts of longer-term bonds;
2. interest rates increased rapidly;
3. the market value of those bonds fell;
4. depositors demanded liquidity;
5. the bank needed to convert assets into cash;
6. losses that could previously remain unrealized became economically important.

The lesson was:

> **A safe bond can still create serious risk if its maturity does not match the investor's liquidity needs.**

---

# 26. Asset–Liability Management

This introduces:

# ALM — Asset–Liability Management

Financial institutions must manage the relationship between:

* assets;
* liabilities;
* maturities;
* liquidity needs;
* interest-rate sensitivity.

The key problem at Silicon Valley Bank was described as a:

$$\boxed{\text{Duration / Maturity Mismatch}}$$

between assets and liabilities.

---

# 27. Safe Asset Does Not Mean Safe Strategy

This is a fundamental lesson.

Government bonds may have very low default risk.

But:

$$\boxed{\text{Low Credit Risk} \neq \text{Low Interest-Rate Risk}}$$

If an investor is forced to sell long-duration bonds after interest rates rise sharply, substantial losses can occur.

---

# 28. Rollover Risk

The class also discussed the idea of refinancing short-term debt repeatedly.

Suppose a company borrows for one year at 5%.

After one year it must issue new debt.

If the new rate is:

$\$3\%$$

the total borrowing cost differs from the case in which the new rate becomes:

$\$7\%$$

This uncertainty is:

## Rollover Risk

Longer-term borrowing can avoid some refinancing uncertainty by locking in a rate for longer.

---

# 29. Short-Term Versus Long-Term Financing

Suppose a company expects rates to rise.

Then issuing short-term debt now may look cheap, but refinancing later could become more expensive.

Long-term debt may cost more initially but lock in the rate.

Therefore financing decisions involve a trade-off between:

* current cost;
* expected future rates;
* rollover risk;
* flexibility.

---

# 30. Key Relationships

## Compounded Returns

$$\boxed{(1+r)^T = \prod_{t=1}^{T}(1+r_t)}$$

## Forward Rate

$$\boxed{(1+s_2)^2 = (1+s_1)(1+f_{1,1})}$$

## Interest Rates and Bond Prices

$$\boxed{\text{Rates}\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow}$$

## Maturity and Interest-Rate Risk

$$\boxed{\text{Maturity}\uparrow \;\Rightarrow\; \text{Interest-Rate Sensitivity}\uparrow}$$

## Inverted Yield Curve

$$\boxed{\text{Short Rates} > \text{Long Rates}}$$

---

# 31. What You Should Retain from Session 7

If you remember only seven ideas, remember these:

> **1. The yield curve shows interest rates across maturities.**

> **2. Spot rates refer to investments beginning today; forward rates refer to future periods.**

> **3. Long-term rates are linked to expected future short-term rates.**

> **4. Liquidity preference normally pushes longer-term rates upward.**

> **5. A flat or inverted yield curve may indicate expectations of lower future rates.**

> **6. Longer-maturity bonds are more sensitive to interest-rate changes.**

> **7. Silicon Valley Bank illustrates that even low-credit-risk bonds can create major losses when interest-rate risk and liquidity needs are badly matched.**

---

# 32. Questions You Should Be Able to Answer

After reviewing Session 7, you should be able to answer:

1. Why can realized HPR differ from YTM?
2. What is a spot rate?
3. What is a forward rate?
4. Why do we use geometric rather than arithmetic averages for compounded returns?
5. What is the yield curve?
6. What is another name for the yield curve?
7. Who mainly influences short-term interest rates?
8. What does the expectations hypothesis say?
9. What is liquidity preference?
10. Why does liquidity preference tend to create a positive slope?
11. Why does a positive yield curve not necessarily imply rising expected rates?
12. What may a flat yield curve indicate?
13. What may an inverted yield curve indicate?
14. Why are long-term bonds more sensitive to rates?
15. What is rollover risk?
16. What is Asset–Liability Management?
17. What went wrong in the Silicon Valley Bank example?
18. Why can a low-default-risk bond still be risky?
19. What is a sovereign spread?

---

# 33. Before the Next Session

Students should:

* [ ] Review Holding Period Return.
* [ ] Understand spot rates.
* [ ] Practice the forward-rate equation.
* [ ] Understand the yield curve.
* [ ] Distinguish expectations from liquidity preference.
* [ ] Understand why an inverted curve matters.
* [ ] Review interest-rate risk.
* [ ] Understand the Silicon Valley Bank example.
* [ ] Review rollover risk.
* [ ] Continue working on Problem Set 1.

The next class will move from fixed income toward:

# Equity

---

# 34. Session 7 in Five Ideas

> **1. Interest rates depend on maturity, so we need a yield curve rather than one single rate.**

> **2. Forward rates connect today's yield curve with future implied rates.**

> **3. Yield-curve shape reflects both expectations and liquidity preference.**

> **4. Long-term bonds carry greater interest-rate risk.**

> **5. Risk is not only about whether an asset pays — it is also about whether its timing matches your liabilities and liquidity needs.**


# Transcription
21 de septiembre de 2026, 5:08p.m.
1 h 16 min 32 s
Year later, let me start by the first one.
We'll do first with.
I will hand it, and then we'll just...
Price of which I have both please: 863.
Boy 84, yes.
We have both a zero, a three-year zero yielding 5%. We are both at the price of 863.84. One year later, the yield is 7% and you said it.
What did you earn?
So, this is the price.
At the deal of...
Five percent? Yes.
One year after, we sell it at Hidalgo.
Seven percent. Make sense?
What is the new the price at which I am selling this?
A thousand.
Over 1.07, yes, 1 + 7 percent.
Price today.
The second one.
The beginning three years left in maturity, after one year, there's one year left.
Make sense?
Price to the cycle.
Ana, let me call this P1, this P2, yes.
HPR is.
Destrice.
One 1000 over 1.07 right to the second over.
63.84 minus 1. Make sense? What I'm doing? What I'm doing is HPR is equal to P2 over P1 minus 1. Make sense?
Yeah.
Now, before doing the numbers.
I have got this thinking to thinking and getting a seven person. No. If I would have weight in maturity, I would have got a seven person.
Makes sense.
One year later.
Really, 7% and isolate, so the new barrier is gonna get that 7%.
I was thinking of getting a 5% that the new buyer is going to get the 7%.
So I will get my HPR will be lower than 5%. Makes sense.
No.
Why is that not a 5%? Because the new buyer is getting a 7%. The new buyer will get.
Let me make these numbers.
Yeah.
I don't know why I don't go near me to 863.
863 point.
Point 84, yes.
Then this is P1.
Be true.
Seven percent.
And if that is 1000 over.
One plus 7%.
Price today.
Yes.
And the yield is future value over present value rise to 1 / d, that in this case is 1.
My new one.
Now. Yes, please. Why do you have to do the 1.05 squared?
The what? The 1.05 square.
One boy.
This? No, like 5%, you have to do that. Sorry, 5.
Five percent, yeah.
I mean...
Please start person.
Is inside the price.
What I mean is...
What I mean is...
One 1000 over.
One plus by person.
Prize to the third.
To me?
Yeah.
One third, which is like, three or three-year.
Third to third because three years. Yes. Okay. This is to the third because three years, one year after is right to the second because two years left in the tree. Okay, makes sense. Yep.
Now.
Why is that not a 5%?
Because the new buyer is getting a 7%, if the new buyer would get a 5%.
How much would be HPR?
Five percent.
If the new buyer will get it, if this money, if I would have been selling this at a higher price.
If I drop interest rates, price will increase. If instead of a 5%, this would be a 4%, P2 will be higher and the HPR will be higher. Make sense?
Please, understanding and feeling this kind of movement is what is important.
Yeah.
Okay.
To the person.
Seven percent, this is exercise, the first exercise.
Right.
A long pays semi annual coupons and is quoted at a deal of 6%.
What rate do you discount with?
And over how many periods?
How do we know that the semi-annual coupons over how much time?
No, in this case.
How many appeals each year?
Two annual coupons, two periods per year. And the rate that we choose to discount this, I don't like this. I deal of 6%.
The discount rate would be 3%.
Hey.
I don't like anything that is not composed.
I, I guess, like things that are composed.
I realize there are things that are not good. Yes. Are you following me, Olivia?
William.
Okay, today, what are we going to do today? Today we will close Mixing Co. Next day we will talk about stocks, equity.
Today, we will close fixing code, talking about the yield group.
What is the real proof?
If it is Ruiz.
It's saying there is a different view.
Yes, we will see. Then we will dedicate a whole class to talk about the each day.
You can find it, I think, and you go.
It say there is a different new proof, and the new proof tell us.
About race in time for today.
What is it?
Before starting, any questions regarding what we have seen now?
Morales.
What we have been doing?
What do we have been doing during these days?
Somehow.
We have been working with...
We have been working with present value formula. Yes.
From that formula?
From that formula.
Future value is equal to present value times 1 + r price to be.
If you want to work with race.
You may, I'm gonna make a big spoiler for the business.
I'm gonna make a big spoiler for today's class, yes?
You have here.
Two years, zero, one, two, yeah.
Within the first year, rates are 3%.
Between year one and two, I write this.
Five percent. Make sense?
It.
Oh, man.
Rate will be between year zero to two.
If things were not compounded.
We will calculate the average.
How much I will get in two years? If in year one I will get, how much I will get yearly? How much I will get in two years? If in one year I get 3% and in second year I get a 5%?
I will get it: 3% plus 5% / 2.
This is the first year, this is the second, over 2 years. Makes sense? And this would be a...
Four percent.
This is the average, right? No compound.
What I want you to say is the intuition.
We are not gonna do things in this way.
Google Go.
in a geometric way, in an average way. Hope we will properly calculate this. So, so simple.
One plus.
Spare rain in two years, yes?
Right, the signal.
It's going to be one, too.
One plus 3% * 1 + 5%.
Are you following me?
I am calculating the geometric average.
This times this times this. This is equal. How much I will get in two years? One plus this rest of the second. I will be equal to the first return, one plus the third return times 1 + 5%. Yeah, tell me.
Who? That number?
Let me do that number.
Let me do the number: 3 person, 5 person.
And the number I am looking for is SQRT.
One plus 3%.
Thanks.
One plus, 5%.
How much this will be, approximately?
For purpose, for purpose, approximately.
Sorry, minus one.
Are you calling 91?
This is approximately 4%.
So, in this case...
Man, in this case, if you would have told me that is a poor person.
I will have to say that is correct.
But we will not work with abilities. We will work with your needs. Why? Because of component.
Did you understood that mechanic?
So, today you have all mathematics you need for today's class. If you understand that, learn on with mathematics today.
As I want you to understand.
Morales, not just maths.
Anything.
Done.
I think I have this folder. Yeah. Now it does. You see that I have solved the problem I was having.
Yes, once I have things.
Ohh.
They pass.
Documents.
Is he special?
Time flies.
Okay.
So, what are we gonna do today?
Then we will work with threats, with their threats, and.
When you...
When I write here, a 3%, or when I write here, a 5%?
Inside that 5%?
Everything is simple.
And by everything, I mean inflatable.
Replace.
We are not gonna talk about you, please.
But I have this slide because it's the only time probably we will talk about inflation. inflation, this is a normally when you talk about Greece.
Think about session, I think it was session two. When you talk about risk, there is the risk to rate and over the risk to rate, depending on what Fitz or Moody's say, you will have a spread. You will
I trust more in a man than in myself, so if you ask for financing.
Your rate would be a 3%, and because I don't trust as much in myself, your rate is 3%, my rate would be 4%, and this 1% is called in Spanish prima.
The preview, the the spirit.
And this one person?
Tell everyone information regarding my rating risk compared with José.
Yeah, I'm gonna talk too much about that.
What I will care is about race.
Yeah.
Three words.
What Kevin Ward said last Wednesday? Twenty-five, twenty-five basic books.
From, I'm talking about the maximum from 3.75 to 4%.
it worse, increases, is it rates, what will happen with price of bonds? Yes.
Okay.
Every year we have compound so far is an up in Arroyo. Yes, there.
Who sets?
The short rate.
Getting worse in as one. Till next meeting, till next meeting, the rates will be between 3.75 and 4%, then the minimum is, but it depends if you are the Fed, it depends if you are a bank, if you are lending or borrowing.
Because of that, the rate is 2 rates. There is not just a single rate, like the bid ask. Yep, it's not bid ask properly, our lending and deposit facilities, but you can think about it in the lending, sorry, in the bid ask difference. Yep.
A central bank sets the short end of the quarter. So we are going to see live, not live, yes, we are going to see today's yield group or yesterday, we will see several yield groups.
José.
Nowadays, 4%. And what about the...
The rate in one year time, the rate in three years time, the rate from today.
where you can find the grades from today, one year, time, two years.
Where do we look?
10-year bond market. Yeah, I mean, not just that.
All questions, because...
You can have now active in the market, you have bonds with eight years, with 10, with 12, with 24 years, yes. You see each day the rates at which bonds are in trade, you draw.
Your book.
Instead.
You draw one graph that will be like this. Here.
Here, that.
Short term, 4%. Why? Because of Kevin Wars.
One year Treasury.
It will be 4.25, for example, here.
Ten years, or seven years, here, here, here, here, you connect all these dots, and what you will get there is the deal. Each day there is a new and different deal. Why? Because each day bonds are we trade a different trade.
A central bank says the short end of the course, the market says sets the duration.
Ohh.
When talking about central banks.
Talking about central banks in general, what is the objective of a central bank?
I just having it.
The main objective of a central bank is stability, peace. But if you think about Fed, Fed has a dual mandate, not just price stability, but also
Labor market.
While Federal Reserve has a dual mandate, the European Central Bank only thinks only look at price stability. European Central Bank does not care about labor market. Make sense?
This is what is written here and there.
Benito, yes.
What is the new proof? The collections of all into maturity of...
Fresh ribbons, zero, and it has several names.
The term structure of yields, the term structure of interest rates, and the yield, yes?
Forget about this is live now, and let me share with you this link.
Let me say, would you listen to me?
Okay.
Okay.
Yeah.
Where are you?
Barrigüete.
Yes, here we are.
How can I take this out?
Can I take this out?
OK, not bad, no?
What do you got here? Here you've got two graphs on the right.
What is this? Anyone recognize this?
But it was on the right.
Which index? Yeah, this is the evolution of SP 500. Angelina.
When, not when is your birthday, when were you born?
Two 1000.
Oh, 2006, sorry.
Everybody.
Hey.
Almost.
Personal.
Yeah, Madrid.
I.
2006.
2006, February, November, January.
The 1st of January, I don't. This is 11. 11, whatever. close.
What do you have here?
This red line shows you speak 100 that they.
That they close at this price, yes? And what do you have on the left?
For responding, you go to Sunday.
Did you see this in court? This in court, please.
Black. What does this mean?
We will see what the flat in group means.
Yes.
I, I want to.
I'm gonna make a spoiler, another spoiler.
Because you have the improved mask in front.
On the group, you can see two things at the same time, and you can see a lot of things: is the market, is the system, but you can see two things.
On one hand, on the new curve, you can see expectations, but people expect race to do.
And, basically, there are two types of expectations: expectations regarding whom?
Either power is going to drop interest rates or is going to increase. Make sense?
If, if getting worse, drop interest rates, if you do.
No.
Jobs, even employment. Is because if growth is because he wants to create growth, is because of a crisis. Normally when Fed drops interest rates, is because of a crisis. Yeah.
So, and...
There are two things, different things, or three.
Black.
That is not going to change rates, then increases.
Four degrees. Make sense?
We are talking about inflation.
Sorry, we are talking about expectations. If we are just talking about expectations, you can have these three sales, yeah?
And the problem is that we not only have expectations, also there is something called liquidity preference. What is liquidity preference about? Simple to understand. What do you prefer, Angelina, the money in your pocket or in Federal Reserve pocket?
Yeah, so the longer the rate, the time, the longer the maturity, the more the ride you will last.
A Lombia.
The rate, sorry, the longer the maturity, you.
Come by.
with a 3% rate. A two year or a 10 year, you will prefer to buy a two year at the same rate. Why? Because you will receive your money before. You prefer the money to be in your pocket than the Federal Reserve pocket. So the longer the term, the more we go. There are two effects.
One is.
I expect issues, yes.
And the second effect in liquidity preference, and liquidity preference will always make this low positive, yes?
If there were just liquidity, the slope will be positive. Make sense?
Are you following me?
If there were only vacations, the slope would be positive or negative. But if there were only liquidity preference, the slope will always be positive.
So, when looking at the yield proof, there are two effects: expectations on one hand and equally different.
So...
So, I, I don't know why this happened. I, I was happy in Mia and giving us his birthday. Yeah, don't worry about it.
If the deal curve is flat.
There is always liquidity preference.
So if the deep curve is flat, what can you say regarding expectations?
Yeah, expectations are negative, but because liquidity preference is positive and if the is flat, is because expectations are as negative as liquidity preference.
OK, buddy, did your group is positive?
The little coof is positive.
What can you say regarding expectations? You cannot say anything because you don't know if this positive has to do with because of liquidity preference.
Or just because of expectations, but if the yield curve is negative.
Yeah, here is negative. If the yield curve is negative.
The new curve here, the new curve is negative. What can you say regarding expectations? Yes.
because not only is negative, but also is negative and higher than liquidity. Make sense?
So, if the slope is positive, what can you say? Nothing. If the slope is flat or negative, what can you say? Negative expectation.
The head is going to draw interface. Make sense?
So, I mean the year 2019 ninety-nine. Do you remember the.com crisis.com bubble?
dot com.com crisis. It's a crisis that happened in the 1999.
And after the dot com prices that it came the 11th of September 2001.
You were not alive the days, but trust me that there were panic, there was panic. But Federal Reserve here, you see here, this is the Federal Reserve rate, the shorter. Let me just show you something else with me.
Where is.
Here, what is this?
What is this?
What is this evolution of internet rates through that? Yes, you see this is.
This is 11th of September attack, yes?
After the loan drop interest rates for a long time, then interest rates increases, yes?
Then, this is before Limas collapsed, and this point is Limas bankruption. After Limas interest rates were dropped, and then we have here an increase of interest rates, and what happened in this point? Pandemic, yes, and then after the coming...
Probably, there was inflation, the rates were increases a lot, yes, and here we have.
Silicon Valley Bank prices.
At.
It then become a systematic, a systemic crisis. Yeah.
Before 2008, before 2008, if you want to see crisis, its maximum is a big crisis. After the maximum, there comes a big drop. Yes, this is demand crisis, the finance crisis, this is.
on the 11th of September. Yes, this has to do with energy crisis. Yes. Each one of these points is a crisis. After 2008, if you want a crisis, which one? That's like ausage crisis.
In the 80s. Yeah, the hostage. No, hostage, no. Finance, I mean, the hostage crisis, personal, I think, no. Let me make this quickly.
Right.
Oh yeah, let me see.
I don't know if I need to load, yes, but you are, you see, you understand the problem I have with you draw different crisis.
I don't know if it will work, but you can do it with your own.
Each one of these points is a financial crisis and then after 2008
If you want to look prices, you should look not into rates, you should look into the monetary base. MC, monetary base is the money printed by central bank.
Yeah, 20, 30 days? Ohh, no.
So, so.
Yeah.
No, this is not M0, this is M2.
Zero.
M. Zero.
Yes, go. Sorry for this.
Sir.
Hang on.
I think it's...
Yeah.
This is it.
Yes, you see in 2008, what did the head did? A green point.
After 2018, you want to see financial crisis?
You cannot see the crisis in the interface curve. You can see the crisis.
This is still working. Let me close this. I will share it with you from home. Yes.
negating all crisis. The idea, if you want to see crisis, you can see in the charts. Yes, this is Nieman's collapse. This one is Iceland, Iceland crisis, and this is the Greek crisis, and this is the Italian-Spanish debt crisis.
This is the COVID.
And then, here you can find.
Here, you can find a...
Silicon Valley bank crisis that was all due to bringing money yet, and several more. Any questions?
Let me come back to the new. I'm talking about several things that all these things are related, one with another one. What are we looking here? And yes, and make.
We are approaching interest rates at once the dot-com crisis. Federal Reserve is going to drop interest rates. See, look how drop interest rates are going to be drop slowly at the beginning.
Two, December 2008, January - do you see how interest rates are being dropped?
April, be careful with September, June, like look at September, what is gonna happen? August, look.
Did you see how they gonna drink worker?
Did you see Sir? Yeah. OK, this is the 11th of September.
Once Federal Reserve consider the economy has recovered, Federal Reserve is going to increase interest rates. 2003, looking the rates to look, look how it's going to increase. When you see interest rates increasing.
This would pay.
Look, I looked at you, as Federal Reserve is increasing the rates. Oh, yes.
Do you feel that you put something?
It hurts. Careful with these images, it can hurt sensitive people.
Look, look, yeah, this hats.
Oh, yeah.
Look, this is 2 years before, one year before, inland collapse. It hurts.
You cannot, you cannot look where it is going to go. You can close your eyes. If you look, if the trade has been dropped, January 2000, February, look.
May, September, things happen always in July, look.
You see how we did the traits were grouped?
OK, Linux collapse.
And we are going to be from 2008, interest rates are going to be 0 for a long time till year 2040. Yes?
Look, you see how internet rates increases?
And we are close to.
November, December, 2019, yes.
What is gonna happen? What has happened, and then?
And, again, your curves.
Is positive, this is the...
This is a video of people. This one is sad.
May.
July, August.
Speak 100, decreases a little bit, look.
October.
Yes, what is about to happen there? Look, please.
Look, this is cool.
March 2023. We are, yes, before.
Silicon Valley Bank crisis.
Pay didn't drop interest rates. And the expectations were dropping. You understand what I'm saying? Pay didn't drop. I'm not talking about what is going to happen.
It happened something. It happened. Silicon Valley Bank crisis. Yeah.
But Fed didn't drop interest rates. Why? Because they get money.
Look here. What happened with Silicon Valley? Imagine this is a person.
Yeah.
What happens in the what happens in the 1929 crisis? 1929 crisis? Yes, Hoover was the president, James Sharfield left, sorry, James Sharfield was, no, sorry.
Call me, call me colleagues, call me colleagues was the one who prepared that, but Hoover was the president, 1921. This happened with the financial system, yes?
Hi, who bit?
The laissez fairies met the economic debt and 1929 the financial crisis.
Transforming to the Great Depression, yes.
Bernanke, that was the chair fair in year 2008, has studied the crisis of 1929. What happens in the 1929 crisis, sorry, in the 2008 crisis?
You have in this.
And quickly be safe.
And, because Bernanke react quickly.
Because Bernanke, we act quickly, the financial crisis didn't transform into a Great Depression or into an economical crisis. It was just a financial crisis. Make sense?
And what happened in year 2023 with Silicon Valley Bank?
Before, Federal Reserve act quickly.
And before it touched the floor, they took it.
And there were no need to drop internet rates.
There was no need to stimulate the economy. Why? Because they closed the crisis before it contagious. Federal Reserve acted quickly and carefully because it was falling. All of us remember Silicon Valley Bank on tradition.
They asked quickly, but it was falling. What had happened one year after with New York Community Land Court? Anyone have heard about New York Community Land Court?
Because Federal Reserve Act before.
They rescue, they perform the bailout before it fall.
And because of that, nobody had heard about New York Community Bank.
You understand what I'm saying? I'm talking about financial crisis.
That's whatever. And I'm talking about big groups. And whatever. I'm talking about history of finance. And I'm talking about the history of humanity, present history. Yeah. So coming back, what can we find here? One, two, three.
For different sakes of the.
Makes sense.
More better to see.
Thousand and four.
What we have seen here, Rob? Make sense?
OK, now.
Hey, Amanda.
Probably, you will find one question that is, what is prima? Why? Because I have repeated so much. What is the prima? The difference between the 10 years Spanish and the... Sorry for...
I have touched anything in my phone, and I don't want to touch it until cook inside. If it sounds, I will touch here, and yeah.
Please hold me. In Europe, we have the European Central Bank. Each country has its own debt.
And by comparing the rates of Germany and Spanish, you can get a...
API perform an indicator of how Spain or Italy or Portugal looks compared with each one and compare with them.
Makes sense.
Okay.
Rolling over short-term boats.
And regarding rollovers.
In this month.
lot of treasuries to be both trans reinvest. Make sense?
Same money that, I mean, at the end, government is being fined, fined by dollars, same dollars.
From finance AI.
Now, I'm giving too much information, and this is something that I have already said in almost all classes. I'm not going to...
Spend too much time here. AI needs a lot of money in order to finance their topics.
Also, US government now needs a lot of debt in order to finance the rollover of Treasuries.
Capex needs are around 1 trillion.
US definitive in year 2025 is around 2 trillion.
A lot of money for two elephants, and there is just room for one elephant.
Have you heard during this weekend, during last weekend, that all AI feel?
Google, Alphabet, OpenAI, Trophy has said that we must slow down AI growth.
It's not because AI is because there is not enough money in order to finance the growth and at the same time financing midterm selection.
I'm summarizing, look, but trust me, Trump needs not Trump. US government needs now a lot of money and he's expending much more than he was expected to spend.
I'm talking about politics.
I think no. I think I'm talking about facts. Yes. How much is US debt, public debt, over 40 trillion. It touched 40 trillion 2-3 weeks ago. 40 trillion. Make sense?
So.
Your company is used a one year serum combined with 100 face value at, you know, 5%. Yes.
Next year, the debt over into a new one year, so your component at 03%.
What is the annualized cost of borrowing over the two years?
Right here.
A 3%?
I'm sorry, first year, 5%?
Next year, this.
And then, what if the new bond will turn out to be 7% instead? What would be the annualized cost if the company had issued a three-year zero coupon bond at a 5% in the 1st place? Yes?
Baby, yes, we.
And go quick.
One year or 5%?
Second year.
At 3%, so again, 5 and 3%, it would be the average around 4%. Make sense?
Now, why did the new ball gear turn out to be 7% instead?
The rate would be around 6%. Make sense?
And what would the annualized cost have been if the company had issued a two years ago from going at a 5%?
Right, makes sense.
Let me do these numbers quickly.
numbers I'm going to do, I'm going to get are slightly different and these ones were because first is 5%.
then it comes 3% and will be the same numbers.
These are going to be the same numbers. Make sense?
So, having these numbers, 5% and a 3%.
Four percent.
Then, if the second would be a 7% instead.
If the second will be 3% instead of a 3%, a 7%.
Makes sense.
The 2 year, whatever. Any questions?
Are you following me?
Hey.
Okay.
Expectation hypothesis.
is just what I have just seen, but instead of talking about past, talking about the future. But numbers are the same.
Why do you expect interest rate to happen in one year time? We can calculate this with it.
Forward rates.
I'm not going to use in this class the work forward too much, but let me show you here the yearbook.
Here, I'm going to continue with previous example. Yes, the main this is a 3%, yes.
Between year one and two.
We have seen that. We can have here a 5%.
And the spot in year two, the spot in year two.
It's A 4% with previous numbers.
What is the spot rate? The rate between today and one year, today and two years, today and three years, today and five years. What is the forward rate between year one and year two?
In this case, look here.
This is a spot, this is a spot, and this is there for one.
A long rate is a geometric average of expected short rates. Yeah, you have all the rates.
Yes, calculate the other, then.
In the Urendi.
On A one-year bond is 2%.
And the current deal on two-year bonds is 3%.
What do investors expect the deal on one-year bonds to be next year?
You understand what I'm saying?
Try to put the numbers by yourself.
Right.
Then.
No.
One year, 2%.
And they give me knife.
Two years, Sáez.
Three percent.
This book in one year.
Is.
Two person, sorry, one year.
Two person, yeah.
The sport for two years is a...
Three person, and I am asked.
Calculate what the rate should be of half one year, so your problem that will start in one year time.
I mask her out.
Please pray, yes.
Or are we going to calculate this rate?
One plus 3% price to the second.
Is gonna be equal to 1 + 2% * 1 + X.
Yep.
And from there, I can.
Say that.
1 + X is going to be equal to 1 + 3% over price to the second over 1 + 2%.
So, let's calculate that.
Let's go crazy.
One plus.
Three percent.
Right, to the two, over.
One plus two.
percent. Let me see if the numbers are correct. The 2 year 60% and 2%. Yeah.
Minus one, yeah.
What is the rate I will get approximately?
If in one year, I'm getting a 2%, and in two, I will get the 3%.
Do you know if you have AIDS?
I will need that 4% in two year in order to get an average of three.
And we need that four person.
Are you following me?
Of course.
Careful, because...
It's not an average, it's not geometrical, yes? But it's not exactly a 4%. If investors come to expect that the deal on a one-year bond next year will be 5%,
What will happen to the current deal on?
To the airbox, please.
If investors come to expect that the deal on one year bond next year will be 5%, what will happen to the deal to the current deal of two year bonds?
Nobody.
For the second one, yeah, yeah, the first one is 3.5. The first one is 4%, yeah, it would increase.
If instead of getting a 4%...
I will get a 5%.
The rate would be higher.
Yep.
OK, the right will be.
Make sense?
Okay.
No.
Implications of the expectation hypothesis.
What is the implication of the...
Expectations hypothesis.
That the people think.
The Fed will drop interest rates, expectations will be negative.
And this means...
Assume you upward slope. If we consider that the slope is upward, a positive slope, yes, but does that imply about the future path of short-term interest rates with Greece?
Will investors earn more on long-term bonds than on short-term bonds? Yes.
Will a company pay more?
No, we're investors.
Yes.
I want to think with you. Assume the expectations hypothesis and suppose the curve slopes upward. Yes?
Remind that the improve has a positive slope.
And I'm just talking about expectations right for me, yes?
First question, what does this imply about the future path of short-term interest rates? Yes, interest rates are expected to increase.
Then, will investors earn more on long-term bonds than on short-term bonds?
If the first increases, what happened with pressure was? So, the longer the term.
Yeah. So interest rates are respect to Greece. Interest rates are respect to Greece bonds.
R.E.S.
Decrease makes sense. Why are long-term bonds more sensitive?
because the longer the maturity, the more sensitive you are to integrate. Think about the person by the formula.
The more the time, the more the price will change when the rate change.
Do you remember the pull to pack? Yeah. As time gets shorter, the price gets close to pack.
Yes, the opposite. As time gets longer, the more the price can change.
Make sense?
Will investors earn more on long-term bonds than on short-term bonds?
Investors, if interest rates are expected to increase, investors will prepare for term votes.
Finally, will a company pay more if it issues long-term rather than short-term debt?
If people think the rates are about to increase, yes.
Because of my expectations.
That you could fix positive, and you will pay the rate showing that you could.
Let me get the company better. Like, are they talking about corporate bonds? We love, yeah, corporate bonds. The rate at which you will get titles.
If I'm talking about expectations and the yield proof is positive, the longer the maturity, the more rate you should pay.
So, it's the third question is yes, right?
Will the company pay more if it? Yes.
Make sense?
If the yield group is positive, in one year at 3%, in two years at 4%, in 10 years at 6%. The longer the maturity, the more the rate you should pay.
Make sense?
Don't worry, because I'm gonna share with you the trusty.
You can ask, you can review. Also, next day I have class, we can review, yeah.
Okay.
Does the expectations hypothesis hold?
No, yes, alone.
Not just alone. Expectations hypothesis implies that your curve is a war, downward, or flat.
Yes, but there is also here.
Then we should also take into account liquidity preference hypothesis.
If there were no liquidity preference, then the expectations hypothesis will hold. But do you do liquidity preference?
We can only say that if the slope is negative.
The patients are negative.
Make sense?
This.
Any questions?
Okay.
The year cough and recessions.
If the slope is negative, this is another way.
What does this graph show us? What does this graph show us?
The difference between the ten-year treasury minus the three-month yield, yes?
Normally, so this graph tells me about the slope during time.
When you see a negative slope, yes, you see these negative slopes.
I, I don't see my view. This is not come crisis.
Is it 2008?
This is just before the pandemic.
And this is before, hey, sorry.
Now, but now this is before. Now, it's not negative, it has stabilized, but things are about to happen. We will see you in this course.
Any questions?
Okay, now, who is exposed to integrated rates? Anyone.
everyone, but in particular, those who have mortgages with floating rate, those that has debt with floating rate and all these things.
And yes, in order to finish, let me tell you what.
Silicon Valley Bank. Yes. What did Silicon Valley Bank has in their balance sheet?
They have bones.
Public bonds in their balance with 10 year of maturity.
Is secure public bed is risk-free.
If he's free, I mean that.
Yes, it is. They had.
And yes, bomb bombs in their policy. What happened with integrates? Look, look what happened with integrates. Let me just come here.
This increase, this increase cost collapse. Look this one. In less than one year, interest rates increase more than 400 basic points. Yes, almost 500, not more than 500 basic points. Make sense?
In one year, Federal Reserve increases interest rates in more than 500 basic points in less than one year.
It increases what happened with pressure bonus.
Bro. Silicon Valley Bank has all his, most of his balancing full of bonds. The assets.
When interest rates increases, the price of all these bonds drop more than 30%.
So they have a hole in their balancing of around 30%. And at the same time, the pandemic was down and a lot of Silicon Valley Bank companies need cash in order to give the book to employment. During the pandemic, what did you do? Netflix series, no?
Netflix Prize, Netflix Prize went up. After the pandemic, all these companies fired people.
And because they hire people, they need liquidity, they go to Silicon Valley Bank crisis asking for liquidity and they find the balance if they need to sell bonds. And these bonds has lost 30% of their value. Do you understand what I mean? It's not a problem of fixed income be secured or not. It's a problem that
you sell this income before maturity, you can lose a lot of money in case the rates goes up.
Access.
So here, interest rate mismatch, interest rate risk is not a property of the bond. It's a relationship between the bond and you. If you own a bond and interest rates increases, you will
lose money. But if you have cash and interest rates increases, you can reinvest at a higher rate. Make sense?
The problem of Silicon Valley was not holding balls, was a duration mismatch, was a mismatch regarding their liabilities and their assets. This is called AALM, assets liabilities management. They didn't manage well the relationship between the assets and their liabilities. Make sense?
And here you've got, oh, this is an oil crisis in the 1979s. And here you've got Silicon Valley bank crisis. Yes?
Why did Silicon Valley Bank collapse? Because they hold a lot of gold, interest rates increases, and they didn't cover their interest rate rates. Make sense?
This is Silicon Valley bank crisis. They have a lot of bonds in their balances and whatever. And in a balances assets liabilities matter.
Somebody, somebody.
Two ideas: interest rates matter.
Three ideas: Madrid, matter.
It's important, the new proof is important, and the third idea is this equation, yes?
This equation is the one that we have used in order to calculate power values.
Is that just like the other one rearranged? I like the other one rearranged, like the.
I think it was one of those wires. That one, sorry. What happened now?
Let's say the other one we arrange, right? This is the same. Yeah. This is the same. F is the forward I mean.
From year zero, Y2? Yes, Y2? From year zero to year two, this is the spot in year two, Y1 from year zero to year one, and this is the F has to do with forward rate and has to do with the rate of a ball.
that will start in one year time and we will be maturity of one year. We will start in one year time for one year.
Makes sense.
We are, and I owe you that to me, but not really doing that. All of you have answered that answer.
I'll do that today. I'll do that today. OK. Thanks everyone. See, I send an e-mail and great.
I'm sorry for the mobile.
I thought I have whatever.
Bristol Chapter, tomorrow.
Ohh.
Did you?
Hello.
Buena noches.
Vega.
This amount.
I love you.
