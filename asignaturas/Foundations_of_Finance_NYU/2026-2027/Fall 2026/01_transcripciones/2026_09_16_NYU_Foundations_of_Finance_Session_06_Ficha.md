---
## titulo: "Foundations of Finance – Session 6: Yield to Maturity, Bond Returns and Interest Rate Risk"  
fecha: 2026-09-16  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 6  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---

# Foundations of Finance – Session 6

## Yield to Maturity, Bond Returns and Interest Rate Risk

**Date:** September 16, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

# 1. Session Overview

Session 6 continued applying the **Time Value of Money** to bonds.

No fundamentally new valuation principle was introduced. Instead, the session developed several important consequences of the framework already studied:

- bond pricing;
    
- Yield to Maturity;
    
- premium, par and discount bonds;
    
- current yield;
    
- semiannual coupons;
    
- price sensitivity to interest rates;
    
- Holding Period Return;
    
- selling a bond before maturity;
    
- reinvestment of coupons.
    

The central idea remains:

> **A bond is a sequence of future cash flows, and its price is their present value.**

$$\boxed{P = \sum PV(CF_t)}$$

---

# 2. The One Formula Behind the Course

The class began by returning to the fundamental equation:

$$\boxed{PV = \frac{FV}{(1+r)^t}}$$

Much of what we have done during the first six sessions is simply a different application of this formula.

Bond pricing follows exactly the same logic:

$$\boxed{P_{\text{bond}} = PV(\text{Coupons}) + PV(\text{Face Value})}$$

---

# 3. Review: Zero-Coupon Bond

For a zero-coupon bond:

$$\boxed{P = \frac{F}{(1+r)^T}}$$

where:

- FF = face value;
    
- $r$ = required return;
    
- $T$ = time to maturity.
    

Again:

$$\boxed{r\uparrow \;\Rightarrow\; P\downarrow}$$

and:

$$\boxed{r\downarrow \;\Rightarrow\; P\uparrow}$$

---

# 4. Review: Coupon Bond

A coupon bond can be understood as:

> **an annuity plus a zero-coupon bond.**

Therefore:

$$\boxed{P = \frac{C}{r} \left[ 1 - \frac{1}{(1+r)^T} \right] + \frac{F}{(1+r)^T}}$$

Alternatively, every cash flow can simply be discounted individually.

Both methods give exactly the same result.

Students were encouraged to calculate answers in more than one way whenever possible.

---

# 5. Yield to Maturity

A major concept introduced formally in this session was:

# Yield to Maturity — YTM

Yield to Maturity is the discount rate that makes the present value of a bond's future cash flows equal to its current market price.

Conceptually:

$$\boxed{P = \sum_{t=1}^{T} \frac{CF_t}{(1+\text{YTM})^t}}$$

If the market price is known, YTM is the rate we solve for.

---

# 6. YTM Example

Suppose a 3-year bond has:

- face value: \$1,000;
    
- annual coupon: 8%;
    
- coupon payment: \$80.
    

Cash flows:

|Year|Cash Flow|
|--:|--:|
|1|80|
|2|80|
|3|1,080|

If the market price is:

\$900

we solve:

$\$900 = \frac{80}{1+r} + \frac{80}{(1+r)^2} + \frac{1080}{(1+r)^3}$$

The unknown $r$ is the:

$$\boxed{\text{YTM}}$$

---

# 7. How to Find YTM

For a multi-period coupon bond, solving the equation analytically may be cumbersome.

The session discussed three approaches:

### 1. Analytical

Solve the equation mathematically.

### 2. Trial and Error

Change the discount rate until the calculated price approaches the observed market price.

### 3. Excel

Use:

```excel
=IRR(cash_flows)
```

with the initial bond price entered as a negative cash flow.

Excel then calculates the implied rate.

---

# 8. Price and YTM Move in Opposite Directions

The fundamental relationship is:

$$\boxed{\text{YTM}\uparrow \;\Rightarrow\; P\downarrow}$$

and:

$$\boxed{\text{YTM}\downarrow \;\Rightarrow\; P\uparrow}$$

Why?

Because YTM is the rate used to discount future payments.

A higher discount rate reduces their present value.

---

# 9. Par, Premium and Discount Bonds

The relationship between coupon rate and YTM is essential.

## Par Bond

$$\text{Coupon Rate} = \text{YTM}$$

then:

$$\boxed{P = F}$$

---

## Premium Bond

$$\text{Coupon Rate} > \text{YTM}$$

then:

$$\boxed{P > F}$$

---

## Discount Bond

$$\text{Coupon Rate} < \text{YTM}$$

then:

$$\boxed{P < F}$$

This should become automatic.

---

# 10. Current Yield

The session also introduced:

## Current Yield

$$\boxed{\text{Current Yield} = \frac{\text{Annual Coupon}}{\text{Bond Price}}}$$

For example, if the annual coupon is:

\$80

and the bond price is:

\$900

then:

$$\text{Current Yield} = \frac{80}{900} \approx 8.89\%$$

---

# 11. Current Yield Is Not YTM

Current Yield looks only at the coupon relative to the current price.

YTM also incorporates:

- coupons;
    
- the purchase price;
    
- repayment of face value;
    
- time to maturity.
    

Therefore:

$$\boxed{\text{Current Yield} \neq \text{YTM}}$$

except under special circumstances.

The movement from current price toward face value is part of the investor's total return.

---

# 12. Bond Price–Yield Curve

The class used Excel to examine the relationship between:

- bond price;
    
- Yield to Maturity.
    

The relationship is inverse:

$$\text{YTM}\uparrow \;\Rightarrow\; P\downarrow$$

but it is not a straight line.

Bond prices change **non-linearly** as yields change.

This prepares the ground for later discussions of:

- interest-rate risk;
    
- duration;
    
- convexity.
    

---

# 13. Coupon Size and Interest-Rate Sensitivity

An important intuition appeared when comparing bonds with different coupons.

All else equal:

> **Higher-coupon bonds are less sensitive to interest-rate changes than lower-coupon bonds.**

Why?

Because higher coupons return a larger proportion of the investor's money earlier.

Cash flows received sooner are less exposed to changes in discount rates.

Therefore:

$$\boxed{\text{Coupon}\uparrow \;\Rightarrow\; \text{Interest Rate Sensitivity}\downarrow}$$

all else equal.

---

# 14. Maturity and Interest-Rate Risk

Likewise:

> **Longer-maturity bonds are generally more sensitive to interest-rate changes.**

Therefore:

$$\boxed{\text{Maturity}\uparrow \;\Rightarrow\; \text{Interest Rate Risk}\uparrow}$$

This will be developed further in the next sessions.

---

# 15. Every Bond Has Interest-Rate Risk

Even if there is no default risk, bond prices can change because interest rates change.

Therefore:

$$\boxed{\text{No Credit Risk} \neq \text{No Risk}}$$

A government bond may have very little credit risk but still have substantial:

## Interest Rate Risk

---

# 16. Semiannual Coupons

Many real-world bonds pay coupons twice per year.

Suppose a bond has:

- annual coupon = 8%;
    
- face value = \$1,000.
    

The annual coupon is:

\$80

With semiannual payments:

$$\boxed{\$40}$$

is paid every six months.

---

# 17. Matching Rate and Time

This is one of the most important practical rules.

If cash flows occur every six months:

> **Time must be measured in six-month periods and the discount rate must also be expressed per six-month period.**

For a 3-year bond:

$\$3 \times 2 = 6$$

periods.

If the quoted annual YTM is:

6%6\%

the semiannual rate used in the calculation is:

$$\frac{6\%}{2} = 3\%$$

Therefore:

$$\boxed{r_{\text{period}} = 3\%}$$

and:

$$\boxed{T = 6}$$

---

# 18. Semiannual Bond Pricing

For a 3-year bond with:

- face value = \$1,000;
    
- semiannual coupon = \$40;
    
- quoted annual YTM = 6%;
    

the price is:

$$P = \sum_{t=1}^{6} \frac{40}{(1.03)^t} + \frac{1000}{(1.03)^6}$$

or using the annuity:

$$\boxed{P = \frac{40}{0.03} \left[ 1 - \frac{1}{(1.03)^6} \right] + \frac{1000}{(1.03)^6}}$$

---

# 19. Effective Annual Rate

If the semiannual rate is:

3%3\%

the effective annual return is not exactly 6%.

Because of compounding:

$$EAR = (1.03)^2 - 1$$

Therefore:

$$\boxed{\text{EAR} = 6.09\%}$$

The general rule is:

$$\boxed{\text{EAR} = \left(1 + \frac{\text{APR}}{m}\right)^m - 1}$$

where mm is the number of compounding periods per year.

---

# 20. Earlier Cash Flows Are More Valuable

The comparison between annual and semiannual coupon bonds reinforced another Time Value of Money principle:

> **Receiving money earlier is better than receiving the same money later.**

Therefore, all else equal, shifting cash flows earlier increases their present value.

---

# 21. Holding Period Return

The second major new concept was:

# Holding Period Return — HPR

HPR measures the return actually earned over the period during which an investor owns an asset.

For a simple investment:

$$\boxed{\text{HPR} = \frac{FV}{PV} - 1}$$

However, throughout the course, returns will normally be expressed on an annualized, compounded basis.

---

# 22. Annualized HPR

If an investment grows from $PV$ to $FV$ over $T$ years:

$$\boxed{\text{Annualized HPR} = \left( \frac{FV}{PV} \right)^{1/T} - 1}$$

This allows returns over different investment horizons to be compared properly.

---

# 23. Holding a Zero-Coupon Bond to Maturity

Suppose you buy a 3-year zero-coupon bond:

F=100F=100

with:

$$\text{YTM} = 5\%$$

Its price is:

$$P_0 = \frac{100}{(1.05)^3}$$

If you hold it all the way to maturity, the annualized HPR is:

$$\boxed{5\%}$$

Therefore, for a zero-coupon bond held to maturity:

$$\boxed{\text{Annualized HPR} = \text{YTM}}$$

assuming the bond pays as promised.

---

# 24. Selling Before Maturity

Things change if the bond is sold before maturity.

Suppose:

- the bond was purchased when YTM = 5%;
    
- one year later the market YTM rises to 7%;
    
- two years remain until maturity.
    

The new price becomes:

$$P_1 = \frac{1000}{(1.07)^2}$$

Since rates have risen:

$$P_1\downarrow$$

The investor may therefore earn less than the original 5% expected return.

---

# 25. The Key Lesson About HPR

The return actually earned depends on what happens while the bond is held.

If interest rates:

### Stay unchanged

Return behaves as originally expected.

### Rise

Bond prices fall, reducing HPR if the investor sells.

### Fall

Bond prices rise, increasing HPR if the investor sells.

Therefore:

$$\boxed{\text{YTM at purchase} \neq \text{Guaranteed HPR if sold early}}$$

---

# 26. Coupon Reinvestment

Coupon-paying bonds introduce another issue.

Coupons are received before maturity.

What happens to those coupons?

They can be:

$$\boxed{\text{Reinvested}}$$

Therefore the investor's realized return depends partly on the rate at which coupons can be reinvested.

---

# 27. Reinvestment Example

Suppose a bond pays:

\$80

annually.

A coupon received early can be invested until the end of the holding period.

For example, an \$80 coupon received two years before the final date becomes:

80(1+r)280(1+r)^2

at the final date.

The next coupon may compound for one year:

80(1+r)80(1+r)

The final coupon requires no reinvestment.

All cash flows are then placed at the same point in time before calculating return.

---

# 28. Reinvestment Risk

This introduces:

## Reinvestment Risk

If coupons must be reinvested at a rate lower than originally expected:

$$\boxed{\text{Realized Return}\downarrow}$$

If they can be reinvested at a higher rate:

$$\boxed{\text{Realized Return}\uparrow}$$

Thus, YTM implicitly involves assumptions about reinvestment.

---

# 29. YTM Versus Realized Return

An important distinction is:

### YTM

A rate implied by the bond's current:

- price;
    
- cash flows;
    
- maturity.
    

### Realized HPR

The return the investor actually obtains.

Realized return may differ because of:

- selling before maturity;
    
- changes in market yields;
    
- coupon reinvestment rates.
    

---

# 30. Key Relationships

## Price and YTM

$$\boxed{\text{YTM}\uparrow \;\Rightarrow\; P\downarrow}$$

## Premium Bond

$$\boxed{\text{Coupon Rate} > \text{YTM} \;\Rightarrow\; P > F}$$

## Discount Bond

$$\boxed{\text{Coupon Rate} < \text{YTM} \;\Rightarrow\; P < F}$$

## Par Bond

$$\boxed{\text{Coupon Rate} = \text{YTM} \;\Rightarrow\; P = F}$$

## Maturity

$$\boxed{\text{Maturity}\uparrow \;\Rightarrow\; \text{Interest Rate Risk}\uparrow}$$

## Coupon

$$\boxed{\text{Coupon}\uparrow \;\Rightarrow\; \text{Interest Rate Sensitivity}\downarrow}$$

---

# 31. What You Should Retain from Session 6

If you remember only seven ideas, remember these:

> **1. Yield to Maturity is the discount rate that makes the bond's cash flows equal its market price.**

> **2. Bond price and YTM move in opposite directions.**

> **3. Coupon rate = YTM means par; coupon rate > YTM means premium; coupon rate < YTM means discount.**

> **4. For semiannual bonds, both the rate and the number of periods must be adjusted consistently.**

> **5. Longer-maturity bonds are more sensitive to interest-rate changes.**

> **6. Holding Period Return is the return actually earned during the investment period.**

> **7. Coupon reinvestment and selling before maturity can make realized return different from YTM.**

---

# 32. Questions You Should Be Able to Answer

After reviewing Session 6, you should be able to answer:

1. What is Yield to Maturity?
    
2. How do you calculate YTM when a bond price is given?
    
3. Why does YTM rise when bond price falls?
    
4. What is the difference between coupon rate and YTM?
    
5. What is Current Yield?
    
6. Why is Current Yield not the same as YTM?
    
7. What makes a bond trade at par?
    
8. What makes a bond trade at a premium?
    
9. What makes a bond trade at a discount?
    
10. Why are longer bonds more sensitive to interest rates?
    
11. Why are high-coupon bonds generally less sensitive?
    
12. How do you price a semiannual coupon bond?
    
13. Why must time and rates use the same periodicity?
    
14. What is Effective Annual Rate?
    
15. What is Holding Period Return?
    
16. When does a zero-coupon bond's annualized HPR equal its YTM?
    
17. What happens to HPR if rates rise before the investor sells?
    
18. What is reinvestment risk?
    
19. Why may realized return differ from YTM?
    

---

# 33. Before the Next Session

Students should:

-  Practice bond pricing again.
    
-  Understand YTM conceptually.
    
-  Review premium, par and discount bonds.
    
-  Practice semiannual coupon calculations.
    
-  Understand the difference between APR and effective rates.
    
-  Review annualized HPR.
    
-  Reproduce the zero-coupon bond example in which rates change after one year.
    
-  Understand why coupon reinvestment matters.
    
-  Continue working on Problem Set 1.
    

Most importantly:

> **Do not memorize isolated formulas. Understand where the money is, when it is paid, and which rate moves it through time.**

---

# 34. Session 6 in Five Ideas

> **1. Bond pricing and bond returns are still just Time Value of Money.**

> **2. YTM is the rate embedded in the bond's current price.**

> **3. Rates up means prices down.**

> **4. Buying a bond at one YTM does not guarantee that return if you sell before maturity.**

> **5. Realized return depends on both price changes and the reinvestment of intermediate cash flows.**


# Transcription
16 de septiembre de 2026, 5:04p.m.
1 h 22 min 22 s
This is yours.  
Ana.  
Three.  
Then, also, then you go here, session.  
Six days, you have, sir.  
New York, 2026.  
And then you open the Excel.  
Let me open.  
I don't know what this thing, why this thing appears there.  
Can you open the Excel?  
Play.  
And.  
But it's written safe. I think this is safe.  
Is he safe? Yeah. OK, so download.  
Okay, say, because...  
Okay, everything's prepared.  
On what hand?  
What is the only thing we have been doing during these six classes?  
The only thing we have been really working with this formula: present value is equal to future value over 1 + r right to T. Yes, we have been working with that formula in one sentence or another one.  
What are we doing?  
Yes, Sammy.  
How do you calculate the price of a home?  
by calculating present value of future value or present value of future cash flow. Imagine it celebrates work zero.  
How will you calculate if you can rate worth zero?  
You think they're afraid?  
Zero present value is equal to feature value, so how will you calculate the price of above?  
Like some, what will be the price of a perpetuity?  
The price would be 0.  
You see.  
As there is, you feel free?  
As there is, you can complete present value of liberty, right? You are going to, and you will receive an infinite, some exits.  
So.  
At the end, today, what are we doing? Is this a summer with something special that as time passes, money worth little you bless.  
But what we are doing is just some, just some.  
How do you calculate the present value? How do you calculate the present value?  
Sam, how will you calculate everything? Sam, Sam.  
You took us first.  
Agents.  
Okay.  
Personal review.  
What is that? Three years, zero?  
With face value, 1000.  
What is the price of a three years ago with a value of 1000?  
At the, you know, fantasy.  
Please read it, think about it, and if you don't know how to calculate it,  
Lie to me and tell me that you know me.  
Thank you. Bye.  
How will you calculate the price with 1000 of free value?  
One 1000.  
Over 1 -, 5%, price to the yeah, makes sense.  
Which 4 things behind the Castro's of a vote?  
Which 3 things define?  
I like this question because it makes me, makes us think.  
Good interest rate.  
Yeah, for sure.  
Facebook.  
Yes.  
How many years of time?  
Right, absolutely. I just want, sir, that if you don't get it, I like it.  
Which one would be the 34th?  
Let me be here.  
OK.  
The Google Rate, the Google Rate, one is 6, like face value. You have face value, you have the Google Rate, you have time, and you have the value.  
What is the rate of?  
Why is a coupon bond?  
Why is a coupon bond an annuity plus a zero? An annuity plus a zero.  
It's like consistent capitalism and one big sum. Yeah, I'm not sure, but just an annuity, we will see later, but not just an annuity and a zero.  
Of.  
A sum of seros. I mean, there are as seros as Pizarroso.  
You can consider an annuity as a collection of 01 boys. We say that we say, yeah.  
Interest rates rise tomorrow. Sorry, sorry, I love that one.  
You gonna race rice?  
When the rates are gonna rise a week's time.  
Yeah, OK.  
He did his race.  
One hour and three quarters.  
It's going to happen. I mean, I don't know, more than 90%, I mean. If the rates rise, what happened to the price of the bone you already own? You get a rate of price, price of bones.  
Yes, yes, in its way, in the red surprise.  
Yeah.  
Make sense?  
Today.  
They will talk.  
Then, we will continue talking about things we talked last class. Last class, we talked about we introduce fixing concept and we get how to calculate the price of Palomo and the price of the. We didn't significant. Please take slides and repeat. Yeah, and also I have.  
office hours and whatever, but I think that if you catch today's class, you don't need to worry about last class.  
This Monday, sorry for this question, but I want to ask before we continue. This Monday, I don't know if it's exactly Monday, he's young people.  
Okay.  
Happy Christmas. I know. I mean, it's because of the young people, and I don't know if someone who has not gone back home because of the young people.  
Today.  
Yeah.  
Due to maturity, this called parent premiums and the annuals, we will go through all these things, but at the end, whether we're going to do today, we are going to continue working with...  
The other day, we saw how to calculate the price. Then we will see how to calculate returns in special. We will sell the bond before maturity. We will buy it and we will sell it. We will calculate the return between the both.  
And the same rule to these kind of things, OK?  
Okay, so I'm not going to go through this exercise.  
I'm not going to go because it's what we have seen. That is it. We have that goal. How do you calculate the price of that goal?  
Maybe 1050.  
Brady, so 5%?  
Price 50 rate rate of 5% 1.05 plus 1050.  
1.05 price to the second. No, because it's a bond at least a 5% rate coupon and we are calculating present value at a 5% rate. We know, we should know that it's a 5 bond. Yes, price would be equal to face value.  
Yes.  
Would you have guessed this outcome? Yes, it's a carbon. It's a carbon.  
These are purple and the rate is 5%.  
Make sense.  
Thank you.  
What is?  
Interest rates rise to 6%.  
The first one that tells me the price, I don't know what I can do with the first one, but I won't do anything.  
But I will need to do it fifty-fifty.  
I'm gonna, I'm gonna live through different ways.  
But if you click, one person.  
In the excel I have served from last class, I got the result through three different ways, calculating the annuity and face value, then calculating present value of each future cash flow, and also with the present value from excel.  
I strongly recommend you to do this by yourself in order to, in all exercises we will work with, you can get same result from different perspectives. I encourage you not just to get the result through one way. Once you get the result, try to accomplish the result by using  
Different paths, yes.  
If interest rate is 6%, it means that interest rate has increased.  
Face value, and it means that interest rate has increased. If interest rate has increased, the price should be lower than...  
Lower than 1000.  
the sum, the two numbers, and...  
the two numbers, and I will get an 181. Yep.  
There's no point to me as doing and doing exercises. You are the one.  
Okay.  
What is it?  
Kill to actually.  
The Raquel.  
In this case...  
What is the price of a 1000 bar 5 bar in here, I think 5% coupon?  
If the rate is 5% or if the rate is 6%, yes?  
What is the yield to maturity?  
If the price of this phone were 981.66, yes.  
If too much unity would be...  
Please, Kirsten.  
These person.  
One of the difficulties we have in this course, I told you earlier, one of the difficulties is that we all different things with the same name.  
We should get useful language. We should get useful language. At the end, it's not complicated, but there are different names with a bit of difficulty and all this stuff.  
Okay, more things.  
Is the present value that perfect due to maturity?  
Now that the coupon is paid in the last period of two, perfect. Thinking about this formula, yes, in the summatory between first coupon and the last.  
Any questions?  
Okay.  
No, I accept.  
Three annual pay coupon bond with a coupon rate of 8%.  
Draw the cash flow line in the bond. If the bond sells at 1000, what is the yield to maturity?  
If the loan sells at 1000, why is they need to?  
Yes.  
Papers.  
And how can we solve this equation?  
Is a question you, I'm never gonna ask you to solve that equation. Yes, never. We fix it.  
It's so, so simple, but I want you to see.  
One, two, three, yep.  
80, 80, 1,080.  
If you want to solve that equation with Excel, I'm going to, before with that, I'm going to, yes, rate this 8%.  
I want to play a little bit with this formula. Yes.  
One plus 8%, let me fix this function before.  
Price to the first.  
This equivalent. Yep. What is the price?  
Some of, imagine that.  
The price would be...  
800. Yep.  
If the price were 900.  
How can I get this maturity?  
If price were.  
The price worth 100? How can I calculate this?  
Nine 100 is equal to.  
It's equal to 80 / 1 plus. Let me call X 80, 1 X raised to the second plus 1080.  
1 plus X raised to the third. Make sense?  
Imagine that instead of being a three-year, it would be a five year or a 10 year. You see that?  
This is a polynome.  
That is hard.  
With normal mathematics, it's hard to get the solution. Yeah.  
What is hard? Because there is rise to the 4th, to the 5th, you have to study mathematics and this is hard. Make sense?  
First approach.  
First approach: A heuristic way, heuristic.  
All you know is heuristic rule of thumb.  
I want to know the wind and I see the wind where the wind is. A rule of thumb is.  
And approach something.  
OK, I'm gonna calculate the price. Yes, let me before starting with...  
Is that makes sense?  
In order to get 900.  
What should I do with the rate?  
In order to the 900.  
Nine.  
And...  
11, 12.  
OK, this is nice.  
12.4.  
True.  
Okay.  
Is where I have them?  
Exits.  
Next day, I will repeat the setting, but with prices, and I will draw.  
Oh.  
that in order. So when they revalue bonds, like let's say interest rates go up, they're using that as like the new yield that they would want on the bond rate. That's why the price goes down.  
I mean...  
Let me.  
I don't know if you have these in English, the E or the ticket, who is first? Have you heard that? Yeah.  
Because of, yeah, you have chickens and chickens, yes.  
And today's problem is going to talk over here, here it works.  
What was is going to say? He's going to increase rates. So due to this increasing rates.  
Everything is gonna happen, so all bonds are gonna rebalance.  
And the market is called. The market already has been called wars to increase rates. Yes.  
Normally, if worse.  
Because each day there are new prices. So I need money. If I need money and I own bones, I should sell them. If there is a lot of people selling, the price will fall.  
If the price fall, rates will increase, the yields will increase. You see what I mean? At the end, it's a game between Fed and the market.  
And we will see next week the.  
The new group is not just for interest rates for today, is from today in advance for each day.  
Except.  
Okay, you have seen how did I get that number?  
Now, I'm going to show you how to get this number in Excel.  
When rating negative 900.  
Because the money goes out from my pocket.  
How to get the deal so, so simple?  
The formula is IRR, internal rate of record. You just calculate IRR of the discuss flow.  
Excel will give me.  
The exact number, yes, this number is an approximation.  
is the way we will get the deal. Please. So, so you is 12.17 and just got that until you like changing until you're 900, right? Yes. And then this is like in the other way. Yeah, three methods, three different methods.  
First one, analytic. You can take this and try to solve the question. Personally, I don't know how to solve it. You can do the math. You will get the number.  
Second step, the risky way. If you have changed things, you get there enough. A third method is just validation, ILR forward.  
But, like, on a task.  
On a test, like when you don't have that, so in the test, you won't be before the test, I will give you sample test, and you can go with it.  
Sample tests are going to be more difficult than the meter, but...  
But...  
Work over the sample, those.  
Why don't you see the solution of an exercise? It's simple to answer to the exercise. You see one more time. But I want you to know things before looking at the solution. Because of that, I insist so much in exercising problems.  
What? I'm bronze it to yep.  
Make sense?  
OK, a person, but price is a Palomo, yes.  
If the bond sells at 1000, what is the yield to maturity? If the bond sells at 900, what is the yield to maturity? If the bond sells at 1100, what is the yield to maturity?  
This.  
I have already calculated due to maturity for 900.  
And I'm gonna, yes, copy.  
Based this here, and I'm going to calculate the maturity for 100.  
Makes sense.  
If they need to, it is higher than the coupon rate.  
Then, what must be true about the price?  
Yeah.  
You tell me school.  
If yield to maturity is higher than the coupon grade.  
Then you will have this combo.  
I'm saying it's lower than previous.  
If he is lower, give to maturity, he is lower, he is very.  
Yep.  
Yes, year to maturity 4.35, 8% and 12.7. Yes, I'm going to.  
I'm gonna put this, I'm gonna calculate.  
What they call, you don't need to even have. I don't want you to become crazy. What is?  
I have never heard Randy; nobody had ever heard Randy, but this, this is just in order to show you one thing.  
Review is being calculated by doing.  
Eighty is being calculated.  
Is.  
AD.  
Over face value.  
Sorry.  
You have the Google.  
And if you just calculate 80.  
Over.  
The price?  
You will be, you will get what is written there as correctly, yes?  
I'm just calculating.  
The coupon rate over the price.  
What I want you to see.  
But did you compare this number?  
With the deal or this number, with the deal.  
The deal is much higher.  
Not because of the Google, because of the pay value, because face value has a bigger weight. Make sense? So, 8.9 is the coupon rate?  
Now, Google rate is 8%. Google rate remains unsense. Well, here you've got the numbers clearly. Google rate.  
Eight percent.  
Then, here is something written, as currently we are never gonna calculate this again.  
And what is the current deal? Is the coupon not over the price?  
If, if there is rate, change this.  
In our Claudia, the change should not be as high.  
But if it already changes, at the end of the change, the fact is bigger due to face value.  
And this is what I want you to see, a big change.  
is higher. The impact of a change in the rate is higher than expected because of phase bank. Make sense?  
As maturity becomes bigger, as maturity increases.  
These defense gets smaller.  
So, this is on the first period, right? Currently, that's on the first period for each coupon.  
What do you do? We don't need to know car in the house. No.  
But you should understand this.  
Understand the idea. It looks like the 80 over the price. Yeah, yeah, but not knowing 80 over the price, understanding that you better rate in this, and it has a double value on one hand.  
Present value, and the biggest impact has to do with space value.  
The year to maturity will go. Yes. I mean, year to maturity is there.  
Is the cooperation of Cooper Rate and Vidal?  
No. Not interest rate. Not interest rate.  
At the end.  
This is an interest rate, this is an interest rate, and this is an interest rate. This interest rate is fixed.  
These internet freight only affect the coupon.  
And yield to maturity includes everything. OK, so that can change. Yes.  
But if you forget about this slide, you can forget about it. I mean, this slide is not lasting. I mean, I have been working with the same ideas from different perspectives. What I want is to get familiarization with all these ideas.  
Because in the exercises, in the mid-term, you are going to find not these exact questions, but the term one, but the same file.  
Okay, semi-annual coupons.  
Let's see one example and then I will come back.  
You have a three-year with coupons, yes? For let me show you this example, semi-annual coupons, yes? And semi-annual coupons here. Let me show you first the numbers. You have same coupon, sorry, table.  
But yeah.  
One, two.  
Dream is the same, yes.  
The year lease say 6%.  
The expression, yes.  
A three-year bond, face value coupon, paid semi-annual coupons, yes.  
Instead of having this one, we are going to have.  
Almost the same, but with...  
Semi-annual coupons, yes.  
Makes sense? Instead of 1 payment each year, 2 payments. What is the point here? Or then if it would be here? You have to calculate more.  
We should change both the rate and the time.  
What I mean is, what here is written: one, two, and three.  
We should change, and instead of be thinking about years, we should think in half a year.  
One, two, three, 4, 5, and six. Make sense?  
It's not complicated, but you should understand how to how time changes. For today, I know I will not focus on this exercise too much, but in problems that you will see several exercises, and this is Amanda. This is one of the difficulties you are going to find in the river.  
Knowing how to translate between years and knowing how to work. Yes, but not this exercise in particular, knowing.  
If we are talking years, the rate should be years. If we are talking half a year, the rate should be in 1/2 a year basis.  
not going into an automatic way, not being, not going into a mechanical way. Yes, understanding what we are doing. Yes.  
And, in this case...  
The deal is 6%, yes? Careful with this and not too much.  
The deal, when when you will hear, this is not going to be one of the differences, but when you hear deal.  
It's not going to be compounded.  
is not going to be compounded. So in the year is 6%, how much will be the rate in a six-month basis?  
Three.  
Three.  
Why? Because these three personally.  
Personally, I don't like.  
I don't like...  
This.  
Six percent. Yes, I don't like it. Why?  
Because, personally...  
This is you talk maturity, yes?  
Why? Because, personally, what I would like is the effective amount rate, the compounded one, and this is the one I want you to think about, and the important one is the component. How do you calculate the compounded one? I'm going to do it quickly.  
OnePlus.  
Three percent price to the second minus what? Yes, this will be 6.4, yes, the component 6 point something else, yes.  
Let me put this in green.  
I mean, we know, so maybe right here.  
This is the one that I like.  
Let me call it effective. Yes.  
What if there's like more than stuff I had? You change, you change. If it is Semiama. Like more, like there's like one. So, so, so simple if.  
Quarters, quarters, quarters, there are four quarters.  
I want to use it to maturity over 4.  
Are you with me?  
Keep Madrid over 4.  
Rise to the 4th or minus one, baby.  
Normally, 360 normal. Don't worry, all day. It's 200 and sixty-five. Yes, I do 365. In this case, yes, but we show this the second day of class, the third or the fourth.  
And we do, we did say we be.  
ABR here, ABR.  
I'm here, effective. I'm up for this.  
Why I'm showing you this, because this is...  
Language getting used to this A.P.R. or due to maturity that term makes you be misunderstanding properly everything already should be compounded.  
And once we've got this is easy to calculate the price of the price of the bottle.  
This 3% is in a six-month basis. So hope we will calculate the pressure for the bond.  
Sorry.  
801.  
Here, 1000.  
Follow me, this.  
I'm gonna, yes, do it with net present value.  
The present value formula, 3%.  
What, man?  
Yes, 1054.  
Ana, also.  
I know so.  
I'm so.  
I'm going to calculate the price by doing...  
Face value is 1000.  
Over.  
One point, all three, price to the six, yes.  
That's.  
Body.  
Over 0.3 times.  
One minute.  
You follow me?  
1 - 1 / 103.  
Rise to that.  
Would the person be 1040 over 1.03?  
I know the on the top 1040.  
No, on the left, because this is present value of face value.  
OK, and this is present value of value.  
That we are looking for.  
So, CBV formula.  
This is the one. This is the annuity formula for the coupons.  
And this is present value of this value, and this together is how to get the price of all.  
It is racist sex matters.  
Two years, and over to like 3 years, I'm just, I'm just...  
That is 26, that is 6, because there are six periods of time.  
And 3% is not in a year basis. It's in a six-month basis. And let me just...  
Do the number 1000 over.  
Over 1.03.  
Rise to the 6th.  
Plus.  
40 over 0.03.  
Times.  
1 - 1 / 1.0.  
Oh, three.  
Price to the six.  
And then we saw these three members.  
And these numbers are the same. Makes sense.  
Hey.  
Semi-annual, almost every real bonds, twice a year, US Treasuries, yes, the conventional, great, effective IPR, have been the coupon and forgetting to have the deal.  
Yeah.  
Okay, semi-annual coupons example. This is the one that we have already done. Effective annual deal is 6.09, not 6%. Effective annual deal is 6.09.  
Makes sense.  
The same bond quote at 6% annual bond will worth 1,053. The same bond.  
Six percent, yes, at the six percent.  
One plus.  
Six percent.  
Rise to the first.  
The same bomb will have a price.  
Both.  
Which one will have a higher price?  
Then.  
The second you are promising.  
The morning before.  
The sooner you pay the money.  
The more it will work.  
Later, you will receive the money, the less work.  
So you will prefer to receive the money, your money earlier. So the second one, the one in the bottom.  
You have a higher price, but you received your money before.  
Exence.  
What do you prefer?  
One 100 year in one year or 100 year in two years? One 100 years in one year or in two years? So, you are receiving half of your money six months before.  
Brand Girls, 2001 Thousand.  
Both of the face value is 1000, but the price is going to be higher.  
If that is 1000, you will receive 1000 at the end. And over the price of the car, this is going to be higher.  
Yes.  
Yeah, this is the price of one, and this is the price of the it makes sense. Again, I don't want to memorize all these things. I want you to understand and start feeling comfortable. The sooner you receive the money, the two formulas you have to work.  
Then, you can, on the left, whiteboard on the right, you can create the same outcome, right, for those two.  
And both of them factor in like the if you do in six theories versus three.  
Well, I mean, instead, if you do it in 10 videos, you should. What is the idea of this exercise?  
The same thing you do to the time.  
The same thing you should do to the right.  
You can factoring in 10 years of time. So, at yes, not yes, the coupon are also the rate.  
Base value and computer are the same.  
I mean, for present value formula.  
Future value, future value. If you are talking about the coupon, the coupon will be future value.  
Careful here, because future value.  
Will be one person, 80.  
Why?  
Because of coupon. Yeah, each of that is the whole amount of money that we will be paying in the future. Oh, so the app is...  
Is like a B is what you put in order to calculate present value, so that's one value.  
No, I mean.  
Careful.  
Yes, because here.  
And being relates with this one.  
Here, in this problem.  
FB is future value, because I have separate the impact of coupons, but...  
Here, face value.  
Last Google is what I use as future value.  
But don't try to understand what I'm doing. Try to do things by yourself.  
Because, once we use it is simple, we are adding money.  
What movie Arroyo?  
Let me call it this instead of future body.  
Record it, talk up.  
Okay, what is that? Maybe.  
And what if I separate coupons with coupons from Fabra? Total will be yes. If I am separating them, the total will be yes. If I include both, total will be total.  
Yeah, depending what I have done here. I have repeat what I did last day. I have reached same point from different ways.  
And I, I don't want you to get confused because different ways. I want you to try to reach the goal through different ways and make sure all these things.  
Makes sense.  
OK, at the end.  
Value are three-year annual coupon pay with face value and different yield to matrix. Perfect. I'm going to do it a little bit more.  
Big.  
Four 8, then 4% coupon, ohh.  
three-year, I know composed with face value of 1000 and different.  
Coupons and yield maturities before doing this one.  
I'm gonna think.  
The one we have seen.  
Yes.  
Eighty.  
AP.  
This is the one I should get. This is...  
This one in the middle, yes.  
Okay.  
What I'm gonna do?  
We will repeat this next day, yes?  
What am I gonna do?  
Oh, sure, if you believe that.  
is plus 1%.  
And what I'm going to do is net present value.  
And present value.  
Both.  
At these rates.  
Are you following me?  
What I'm doing?  
I'm making the price at a 0% rate.  
What is the price at a 0% rate?  
One 176.  
Careful, 8 * 3.  
Because there are three.  
One 1240.  
One 1200 for you see overall.  
No, that's the sum. R is here 1000 + 80 * 3, so we're only having the future value.  
Yeah, rate is here. Future value rate is here is 1 to 100. Then if the rate is 8%.  
Ohh.  
I forgot one thing.  
I forgot one thing that is to fix this function.  
If the rate is 8%...  
Yes, what I'm gonna do.  
I'm not just drawing one, yes?  
I want to run because this is important, but not as important as what I want to tell you. Insert.  
I should, I should have without lenses. Sorry for not having lenses. What are the graphs? This one is the one I'm looking for.  
Yeah.  
But I'm showing you here.  
the relationship between price and the rate. Make sense?  
As this is 1240, this is 1000, and it will continue dropping.  
I'm gonna share.  
This excel to you at the end of the class, but what I want you to see.  
I want you to see how rate and price are related. Yes? It's coupon. Is that coupon rate on the wall or that's yield?  
This is the new? Oh, that's good. This is yield to maturity, yes.  
And this is the price.  
relationship between due to maturity and price. If these would be a zero coupon bond, here I would have just written present value formula.  
Make sense?  
Okay, now, what do we have here?  
Just in the middle.  
We have 1103, 12, 8.  
Here, with what?  
At an 8% rate.  
Sorry, he was good.  
At an 8% rate, three different.  
Bones, yes.  
We have one bone with 4% coupon, another bone with 8% coupon, and a third bone with 12% coupon. Yes?  
And here we have got yield to maturity, tell me, yes?  
This one.  
Please, one.  
This one and this one.  
What is this?  
One 1100, what is this?  
Is.  
This one.  
The one and the one.  
Are you with me? How do you calculate? Which one? Or by calculating net present value of future cash flows. I mean, I have this one.  
And I have to escalate that.  
I calculate the first one.  
Third one is considering grade 0.  
He's using that formula, but instead is a bone stronger, yeah?  
I'm here.  
If interest rates increases.  
If interest rates increases, the price will decrease. Make sense?  
And what you should see here?  
That the bigger the coupons.  
The bigger the coupons.  
The bigger the coupons, the less.  
The price will change. Why? Because coupons matter. The more the coupons...  
The bigger the coupons, the less the price will change when centimeter is right. I sense.  
But I'm talking out, I'm talking out.  
But we will work in this later.  
So money, if interest rates increases, the price will decrease, will drop. Make sense?  
It can be changed. Bond values are inversion related. If the rate increases, the compress even the absence of default risk, every bond has integrated risk. If the rate changes, the value changes.  
and the rate risk of a vote can be measured by who is strongly measured. We will continue working on this.  
I want to.  
Or, with holding period return, what is holding period return?  
So, see.  
Are you with me?  
No.  
Present value.  
Future value.  
One plus R raised to D, yes?  
Again, Ana.  
Present value is the amount of money that I'm going to get. Future value, future value is the amount of money that I'm going to get.  
At HPR.  
HPR is the relationship between future value.  
Present value.  
Anyone? Yes.  
What are we going to do? We are going to have to break the window of my bedroom.  
Makes sense.  
You can forget about holding, you can forget about this is like all.  
For play, don't forget. At all HPRs we will use during the course will be annualized.  
All HPR will be analyzed, yes?  
Are you with me? Let's see. One example with zero compounds, you buy a three-year serial compound with a face value of 1000 and three-year with a face value of 100 and 5% due to maturity.  
Let me go to this example.  
You buy it at three years, you know, with a face value of 100. Yes.  
three-year, 100, this is.  
Face.  
But.  
Yep, 100.  
In this case, face value and future value is the same.  
And 5% due to maturity, due to maturity.  
Five percent.  
And maturity of three.  
Yes, yep, what is the price?  
The price is 100 over.  
One plus 5%.  
Nice to the.  
So, I have paid 86.38. Make sense?  
No.  
If you hold the bone to maturity, while you're holding period reader.  
I'm gonna hold this the maturity.  
and holding period return and annualize holding period return. Yes, my holding period return will be.  
It's your buddy.  
Over.  
Is 1 - 1, yes, I will never ask you to calculate this one.  
15.76.  
You want that, because it's not annual? I don't like things that are not annualized, but I that are not component.  
I only like things that are compounded and analyze, analyze, yes.  
Why? Because you tell me I have get, I have got a 50 points, 76 percent.  
And I would like to know in one year, in 10 years, in 11 years.  
And then, and now, what is there and what lies it each year?  
No, no, no, and while I said the SPR is.  
Is 100.  
Over 86.  
Rise to 1 / 3.  
Minus what? What is going to be?  
It's A 5% because they lived maturity is a 5%.  
I've gone forward and backward.  
Knowing the need to maturity, I have calculated the price.  
And give to maturity, if I wait, the maturity will be equal to a normalization, yeah.  
So, if there's no coupons, it will always be the same as the other thing.  
If careful, because you can set it before Madrid.  
And if you said it before maturity.  
This is what I handle, yes?  
If you sell it before maturity, next day we will see what is going on.  
For today, we just need to know what is HPR. Make sense?  
And now, Amanda.  
Now, Aman, let's work with...  
A bone with footballs.  
Before that, thinking about the CEO combo, hold a CEO to maturity and the yield to maturity is what you are, is the only case in which that is gathered.  
Is the only case in the rest of the cases, if you said it before, you should calculate it.  
Now.  
If you invest a loan.  
You, what is the problem with coupons that coupons?  
When thinking about HPR, you need one moment and you should take forward, sorry, backwards coupons.  
Because you mean test.  
One moment and a second moment. What are you going to do with the coupons? You are going to reinvest the coupons. At which rate? We don't know. Make sense?  
Yep, so let's me go with...  
This example.  
A three-year rental to maturity is 5%.  
No.  
Uh, sorry.  
Let's continue with the 0.1, sorry.  
And then.  
Let's continue with this.  
On your meeting, yeah.  
So happy. Suppose to you buy a 30 compound 1000 with that you have bought.  
three-year, 1000, and currently is 5%, yes, open anyone.  
One 1000.  
Three years.  
Value.  
Time rate is 5%, no.  
Five percent.  
Five percent. What is the one current price? Simple to calculate 1000 over.  
One plus the rate rise to the third. Yes, what is this?  
The price I have paid. All of you are with me.  
I want your attention, because this is...  
I want all of you to understand what I'm gonna do.  
Now, after one year,  
After one year, two years left in Madrid, yes?  
And the new year to maturity is going to be 7%.  
Yes.  
After one.  
Yeah.  
After one year.  
The bond has two years. Make sense?  
And the rate.  
I'm going to keep the rate and sales. Or no, I'm going to rate increases to 7%. What is with the debt? But then later I would say, make sense?  
Rate is 7%. What is the price? 1000 over...  
OnePlus.  
Seven percent.  
Rise to the cycle. Makes sense.  
800 seventy-three percent.  
When I'm going...  
Imagine that someone buys this bomb here, and after one year he sell it, he sell it for 8.73.  
Have you with me?  
What is the HPR?  
The HPR is future value over present value minus 1. Future value is the price I have received over the price I paid. Make sense?  
This is what all of you are with me.  
What is the HPR?  
In this case, he's 1.11. Why is 1.11? Because I am still, I'm getting money, but rate has increased. The rate increases, the price of volume decreases. Make sense?  
All of you know where MB?  
Please, this example is really, really important. Review it at home. Review it for next day. This and next. Yeah. So if the rate stayed the same, the HPR would be higher. If the rate stayed the same, what will be the HPR? Be higher.  
You are voting, thinking you are gonna get a 5%, you said it getting a 5%, so the HPR will be.  
Five percent. Ah, I like this work. I like it. No, because this is what I want.  
You buy it at the 5% rate, you save it at the 5% rate, and in the meanwhile...  
And what if...  
You are both thinking you were when I get a 5% if you waiting next week.  
But the new buyer is gonna get a 7%, is gonna get more than.  
The new value is gonna get the 7%, so...  
You are losing money, and if the new buyer instead of...  
Any more is getting less is because you will get more. Your HPR will be higher.  
Make sense?  
Please try to do this by yourself. Yeah, you have their their numbers, I will serve the Excel and let me and...  
Zero coupon pons.  
depending on race, can over perform.  
OK, or you can lose money this afternoon.  
In one hour, in one hour time, at 8:00 PM Spanish time, you don't power, so you're going to make people that has make more everyone, all bond holders in the world, not in the world in the States.  
Will increase, will be unhappy.  
But depending on the price at which you bought it, you will be more happy or low, because there are cycles. Make sense?  
But forget about this is that I want you to understand this.  
What is this?  
A bond with Kubo is the same bond we have been working with during the whole class.  
Yep, the same bone we have been working with.  
80, 81,080, yes.  
What is the price if they lead to maturities?  
Eight percent.  
What is the price?  
A 1000 is a problem, yep.  
Okay.  
Ana.  
I'm going to reinvest.  
The coupons.  
I'm going to reinvest coupons at an 8% rate. Yes? What does this mean? I will receive this coupon in year one, this one in year two and this one in year three. Make sense?  
Reinvesting this.  
Eighty percent? Let me calculate 8%.  
Please, 8%.  
We percent.  
Yes, and rate is a person.  
Red in this, yes, but red in this.  
Are you lonely?  
What does to reinvest first coupon at an 8% rate means? You are gonna, you will receive in year one, so you will be reinvesting folks.  
Two years.  
Yeah, sure, 40 years, sorry.  
Two, three, 4.  
OK, on me.  
Eight percent means...  
Eighty times.  
One plus.  
Eight percent.  
Rise 4, raise 2, 4 minus 1. Rise to the third.  
I'm going to reinvest this second for two years, this for just one year, 86, and I am not going to reinvest this one. Yes? How much money will I have at the end?  
Yes.  
At the end, I will have...  
Oh.  
Yep.  
Now, I'm going to tell you, this is compound interest, right? This is like an example of compound interest. All internet rates we will work with are going to be compound.  
And the point is that in order to calculate the HPR, I should take this 18 that will be paid in your web banking time.  
Forward.  
Now, I'm going to calculate HP, analyze it HPR. That is the HPR we will be working with always. Analyze it. HPR is...  
Future value over.  
Present value.  
Rice, too.  
One over 4 - 1, what is?  
I have bought it at an 8% rate. Coupon rate is 8%.  
I am reinvesting at the next person rate. What is going to be my generalization here?  
I'm interested.  
Makes sense.  
What is the point? What is the annualized HPR? The return that I will get? What if reinvestment rate?  
Is an over.  
The return that I will get.  
Would be lower.  
What if it is higher than 10%?  
It will be hard on the other hand.  
What if I have bought it?  
at a 6% rate.  
If I have bought it at a six person rate.  
I am going to get less return, so my annualized HPR will be lower. Make sense?  
And if instead of reinvesting at an 8% rate, I reinvest at a 6% rate, I vote it thinking I was going to get a 6%, I reinvest at a 6% rate, so my HPR will be.  
Six percent.  
Beast.  
Please.  
We have seen a lot of things today.  
And we have not seen anything new. We have just worked with exercise. Please review these slides. And next day, ask me all questions you got.  
Make sense?  
Asana.  
Don't see too much about.  
Letters.  
Don't think about a APREAR give too much unity. Try to understand things.  
Yeah.  
Enjoy it in words of speech. I would never recommend anyone to see it. I will see it live, but just one second. We are done. You got it.  
Yeah.  
Yeah.  
Are you understanding things?  
Yep.  
Please, if you don't understand something...  
What are you and why you?  
I'm gonna share.  
I'm gonna share.  
Then, you read the six.  
Vicky.  
Ohh yeah, systems.  
We have one second. Yes, one just one question.  
If anyone can open the door, I will feel more comfortable because I am feeling a Gonzalo just there.  
Thinking about me.  
The.  
The last class in Ruiz.  
I mean, yeah, I see a lot of the same.  
Today, this class has been a continuation of classes.  
Spin, but I mean.  
Did you got it, Doctor? No, you got it or not. I mean, regarding my class, absent and you should go to class, but I'm more worried about comprehension than about the. So.  
No, I...  
You don't need to wait, doctor.  
You don't need it.  
It's about the e-mail, correct? Which one? You have sent me one or more. Yeah. OK. The idea is. I should just remind you before the exam is what you said. And also you said it is an absence you will wait here before, but.  
Personally, I think that you are understanding things. We have many problems so far. Any questions I have? I usually respond to the transcript and the AI doesn't really buy stuff.  
So, we're gonna rob that.  
No, no, which is an hour away, so you, but no, no, but I know what I need is that this is the first time I have received one, because we have most of the things, like this one. We're gonna, I think, like this one. I'm just, I don't care.  
But I don't care because why not? As long as you understand. I understand. I mean, as long as I understand the subject. Yes, as long as I'm progressing. No, and in case you don't progress, I have a problem. What I mean is that it's taking care of the, I have already told you regarding taking care and one paper means nothing.  
Because, I mean, it means a lot, because, but if it won't change anything, I just to ask him, do you know something from me? As of right now, no, everything's been really nice. I got started on the problem set, not the problems there. It is my first time ever using Excel.  
So, do you have any recommendations for me to do? This is gonna take me a while to figure things out.