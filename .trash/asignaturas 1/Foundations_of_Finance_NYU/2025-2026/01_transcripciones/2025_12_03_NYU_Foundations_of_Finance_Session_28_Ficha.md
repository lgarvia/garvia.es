# 📘 Session 29 – Equity Valuation, Immunization & Forward Rates  
**Course:** Foundations of Finance – NYU in Madrid  
**Date:** December 3rd, 2025  
**Duration:** 1h 02min  
**Instructor:** Prof. Luis Garvía Vega  

---

## 0. Big Picture of Today

Today’s class was a **second deep review** before the final, focused on:

- Connecting **equity valuation** (ROE, plowback, PVGO) with actual pricing.
- Understanding **immunization** with duration (using a deferred perpetuity and zero-coupon bonds).
- Working with **spot rates and forward rates** derived from zero-coupon bond prices.
- Clarifying **what really matters for the final** and how to study.

The emphasis was not on memorizing formulas, but on:
> “Connecting the dots: time value of money + basic identities + intuition.”

---

## 1. Equity Valuation with Changing ROE & Plowback

We worked through an exercise similar to Sample Final 1, Q20–21:

- Earnings per share last year: $$E_0 = 2$$
- **Plowback (retention) ratio:** $$b = 40\% = 0.4$$
- This plowback is expected to **continue forever**.
- **ROE in the next year (from $$t=0$$ to $$t=1$$** $$ROE_1 = 10\%$$
- **From $$t=1$$ onwards:** $$ROE_2 = 15\%$$
- Required return (discount rate): $$k = 10\%$$

### 1.1. Warm-up: PVGO intuition

If **ROE = k forever** and $$b > 0$$:

- Managers reinvest at exactly the rate investors require.
- **PVGO = 0** → reinvesting **neither creates nor destroys value**.
- You don’t really care about the plowback; price can be written as:
  $$
  P_0 = \frac{E_1}{k}
  $$
  because growth doesn’t add extra value.

This is the benchmark intuition:  
- If **ROE > k** → PVGO **positive** (growth creates value).  
- If **ROE < k** → PVGO **negative** (growth destroys value).

### 1.2. Step 1 – Growth rates from ROE and plowback

General relationship:

$$
g = b \cdot ROE
$$

In this exercise we have two phases:

- Phase 1 (next year):
  $$
  g_1 = b \cdot ROE_1 = 0.4 \cdot 0.10 = 4\%
  $$
- Phase 2 (from $$t=1$$ onwards):
  $$
  g_2 = b \cdot ROE_2 = 0.4 \cdot 0.15 = 6\%
  $$

### 1.3. Step 2 – Earnings and dividends timeline

1. **Earnings at $$t=1$$**:
   $$
   E_1 = E_0 (1 + g_1) = 2 \cdot 1.04 = 2.08
   $$

2. **Dividend at $$t=1$$**:
   $$
   D_1 = E_1 (1 - b) = 2.08 \cdot 0.6 = 1.248
   $$

3. **Earnings at $$t=2$$** (now growth is $$g_2 = 6\%$$):
   $$
   E_2 = E_1 (1 + g_2) = 2.08 \cdot 1.06 = 2.2048
   $$

4. **Dividend at $$t=2$$**:
   $$
   D_2 = E_2 (1 - b) = 2.2048 \cdot 0.6 \approx 1.32288
   $$

### 1.4. Step 3 – Price at $$t=1$$ using Gordon model (second phase)

From $$t=1$$ onwards, the firm grows at constant rate $$g_2 = 6\%$$ and pays dividends starting with $$D_2$$.

Gordon growth formula at **time 1**:

$$
P_1 = \frac{D_2}{k - g_2}
     = \frac{1.32288}{0.10 - 0.06}
     \approx \frac{1.32288}{0.04}
     \approx 33.07
$$

### 1.5. Step 4 – Price today $$P_0$$

Now discount cash flows back to today:

$$
P_0 = \frac{D_1 + P_1}{1 + k}
     = \frac{1.248 + 33.07}{1.10}
     \approx \frac{34.318}{1.10}
     \approx 31.2
$$

**Final result (in class):**  
> The computed stock value was around **\$31.2**.

### 1.6. Why this exercise matters

Concepts tested all at once:

- Relationship between **ROE, plowback, and growth**.
- **Two-stage growth**: one ROE in the first year, a different one afterwards.
- Using **dividends (not earnings)** in the Gordon model.
- Discounting back correctly: first compute $$P_1$$, then discount to $$P_0$$.

---

## 2. Immunization with a Deferred Perpetuity (Pension Liabilities)

We studied an immunization problem:

- General Motors has **pension liabilities** of **10 million per year**.
- Payments start in **two years** and last **forever**:
  - $$C = 10$$ million per year, starting at $$t = 2$$.
- Flat interest rate: $$r = 5\%$$.
- Available assets:
  - **10-year zero-coupon bond**
  - **30-year zero-coupon bond**
- Goal: **immunize** the liabilities using a combination of these two zeros.

### 2.1. Present value of the liabilities

A standard perpetuity starting at $$t=1$$ with payment $$C$$ has:

$$
PV_{t=0}^{\text{standard}} = \frac{C}{r}
$$

In our case, the first payment is at **$$t=2$$**, not at $$t=1$$.

1. Compute the value of the perpetuity **at $$t=1$$**:
   $$
   PV_{t=1} = \frac{C}{r} = \frac{10}{0.05} = 200 \ \text{million}
   $$

2. Discount one year back to today:
   $$
   PV_{t=0} = \frac{200}{1.05} \approx 190.48 \ \text{million}
   $$

This is the **present value of the pension liabilities**.

> Even though we don’t strictly need this number to find the weights, we computed it to practice time-value-of-money logic.

### 2.2. Duration of the liabilities

Duration of a standard perpetuity (first payment at $$t=1$$):

$$
D_{\text{perp}} = \frac{1 + r}{r}
$$

With $$r = 5\%$$:

$$
D_{\text{perp}} = \frac{1.05}{0.05} = 21 \ \text{years}
$$

But our perpetuity is **deferred by one year** (starts at $$t=2$$), so:

$$
D_{\text{liabilities}} = 21 + 1 = 22 \ \text{years}
$$

### 2.3. Immunizing with 10-year and 30-year zero-coupon bonds

For zero-coupon bonds, **duration = maturity**, so:

- 10-year zero: $$D_1 = 10$$
- 30-year zero: $$D_2 = 30$$

Let:
- $$w_1$$ = weight (fraction of portfolio) in the 10-year zero
- $$w_2$$ = weight in the 30-year zero

We need:

1. **Weights sum to 1**:
   $$
   w_1 + w_2 = 1
   $$

2. **Portfolio duration equals liability duration (22 years)**:
   $$
   10 w_1 + 30 w_2 = 22
   $$

Solve the system:

From $$w_1 = 1 - w_2$$:

$$
10(1 - w_2) + 30 w_2 = 22 \\
10 + 20 w_2 = 22 \\
20 w_2 = 12 \Rightarrow w_2 = \frac{12}{20} = 0.6
$$

Then:

$$
w_1 = 1 - 0.6 = 0.4
$$

**Result:**

- **40%** of the asset portfolio in the **10-year zero**
- **60%** in the **30-year zero**

This matches the answer discussed in class (40% in the 10-year bond).

We also noted how to compute the **number of bonds**:

- Price of one zero with face 1,000 at 5% for 10 years:
  $$
  P_{10} = \frac{1000}{1.05^{10}}
  $$
- Total amount to invest in 10-year bond = $$0.4 \times PV_{\text{liabilities}}$$.
- Number of 10-year bonds = $$\dfrac{0.4 \cdot PV_{\text{liabilities}}}{P_{10}}$$.

But the key exam idea is:  
> **Match PV and match duration** using simple linear equations.

---

## 3. Forward Rates from Zero-Coupon Bond Prices

We revisited a forward-rate exercise:

- You own a **3-year risk-free zero-coupon bond**:
  - Face value = 1,000
  - Current price = 928.60
- You are also given the **current yield on a 1-year zero**:
  - $$s_1 = 2\%$$

### 3.1. Compute the 3-year spot rate

Use the standard zero-coupon formula:

$$
(1 + s_3)^3 = \frac{1000}{928.60}
$$

So:

$$
s_3 = \left(\frac{1000}{928.60}\right)^{1/3} - 1
$$

(Numerically this is around 2.5–2.6%, depending on rounding.)

### 3.2. Compute the forward rate from year 1 to year 3

We want the **2-year forward rate starting at $$t=1$$**, often written $$f_{1,3}$$.

Identity linking spot and forward rates:

$$
(1 + s_3)^3 = (1 + s_1)(1 + f_{1,3})^2
$$

Solve for $$f_{1,3}$$:

$$
1 + f_{1,3} = \sqrt{\frac{(1 + s_3)^3}{1 + s_1}}
$$

$$
f_{1,3} = \sqrt{\frac{(1 + s_3)^3}{1 + s_1}} - 1
$$

This structure is what you must remember:

- **Left side:** compounded 3-year spot.
- **Right side:** 1-year spot × 2-year forward.
- Same idea generalizes to other maturities.

### 3.3. Using these rates to price a coupon bond (extension)

If you also knew $$s_2$$, you could price a **3-year coupon bond** with coupons 40, 40, and 1,040:

$$
P_0 = \frac{40}{1 + s_1} + \frac{40}{(1 + s_2)^2} + \frac{1040}{(1 + s_3)^3}
$$

Even if the exam does not ask for this explicitly, this is how **spot rates** connect to **bond prices**.

---

## 4. Duration vs. Modified Duration (Perpetuity Demo)

In the immunization part we briefly reconstructed the formula for the **duration of a perpetuity** using:

- Price of perpetuity: $$P = \dfrac{C}{r}$$
- Sensitivity of price to rate changes (first derivative).
- Definition of **Macaulay duration** and **modified duration**.

Key identities:

- **Modified duration (approximate % change in price)**:
  $$
  \frac{\Delta P}{P} \approx - D_{\text{mod}} \cdot \Delta r
  $$
- Relationship:
  $$
  D_{\text{mod}} = \frac{D_{\text{Mac}}}{1 + r}
  $$
- For a **standard perpetuity** (first payment at $$t=1$$):
  $$
  D_{\text{Mac, perp}} = \frac{1 + r}{r}
  $$

You don’t need to re-derive this in the exam, but you should:

- Understand the **economic meaning** of duration: how sensitive the bond price is to interest-rate changes.
- Know the difference between **Macaulay duration** and **modified duration**.

---

## 5. What You Must Master for the Final

Prof. Garvía summarised the **three big blocks**:

### 5.1. Equity Valuation

- Time value of money (TVM) as always.
- **Dividend Discount Models**:
  - Constant-growth (Gordon).
  - Two-stage growth (like today’s exercise).
- **PVGO** and its relationship with:
  - ROE
  - Plowback ratio $$b$$
  - Required return $$k$$
- CAPM link:
  - Using beta to derive $$k$$, then using $$k$$ in equity valuation.

### 5.2. Fixed Income

- **Yield curve and forward rates**:
  - How to extract spot rates from zero prices.
  - How to derive forward rates from spot rates (and vice versa).
  - Interpretation of yield-curve slope:
    - Positive slope: “normal”.
    - Inverted slope: strong **negative expectations** (recession fears), once you consider liquidity premium.
- **Duration & immunization**:
  - Macaulay vs. modified duration.
  - Duration of perpetuities.
  - Immunizing a liability stream with a portfolio of bonds by:
    - Matching **present value**.
    - Matching **duration**.

### 5.3. Derivatives (Quick Recap)

For completeness (from previous sessions):

- **Options**:
  - Payoff diagrams.
  - Intrinsic value vs. time value.
  - Basic delta intuition (slope between 0 and 1 for calls, between −1 and 0 for puts).
- **Binomial model**:
  - Replicating portfolio idea.
- **Black–Scholes**:
  - Interpretation of delta as hedge ratio (no need to derive formula itself).
- **Futures**:
  - Pricing with present value (cost of carry logic).
- **Swaps**:
  - Conceptually: portfolios of forwards.
  - No deep swap theory needed; forward-rate logic is enough.

---

## 6. Study Recommendations Before the Final

Prof. Garvía’s advice:

1. **Do the exercises yourself first**:
   - Sample Final 1 and 2.
   - Problem Set 6.
   - Then Problem Sets 5 and 4.

2. When you check solutions:
   - Don’t just look at the final number.
   - Rebuild the **logic**:
     - What was known?
     - What was the sequence of steps?
     - Where is TVM used?

3. Make TVM **automatic**:
   - You should be very comfortable with:
     - Discounting and compounding.
     - Moving between present and future values.
     - Using spot and forward rates in bond pricing.

4. Use tools (AI, spreadsheets) **as practice**, but remember:
   - In the exam, it’s **you** who must connect the dots.

> The course is mainly about:  
> **“Speaking the language of finance + mastering time value of money + connecting concepts.”**



# Transcripción
3 de diciembre de 2025, 5:06p.m.

1 h 2 min 47 s

Right. Problem set one. Sorry, problem set one sample final one and let me put that in here.  
The other one also.  
OK. What's question 2021, OK.  
OK.  
Then you have the next suit.  
OK.  
So happy because we can go to wait for a quick evaluation, fix income and then derivatives.  
That is almost very I still have earnings over the last year.  
Well to today.  
2.  
The back ratio is 40%. The back ratio is 40%.  
Expected to continue at this rate forever rate due to the financial crisis, return on equity over the next year is expected to be 10%.  
OK, subsequently from time one, what return on equity it's.  
So this two with our number is going to be 50.  
Person, if the appropriate.  
Discount rate is.  
10% What is the value of the stock? OK, the is.  
Sorry, OK, it's going to be ready this.  
10%.  
OK.  
OK, before before starting, yes, thoughts.  
If return on equity will be 10% forever. Yeah, if return on equity will be 10% forever. What can you tell me regarding?  
What can you tell me regarding?  
PPU.  
I mean, forget about this one. The mind that return on equity will be 10% forever, but can you tell me about PDU?  
It's invaluable. Any other questions?  
Yes.  
My managers are doing the same.  
As the market expect for me, BBO will be 0. So BBO would be 0.  
I would not care too much about blowback ratio.  
And at the end because PDOVCO.  
Price will grow and price will so grow will be the same. So I can I could calculate, I could calculate.  
Price has to win earning sodder cake.  
Makes sense.  
This is a first one. I mean, I am just warming. I don't. I I don't want just to do numbers. I want you to to have the the whole view.  
I forgot about this.  
PVO will be 0, so I will not care if there is grow or not. So I will just think about earnings over. Make sense then then I don't like formulas too much.  
Oh, I have whatever. OK, perfect. I mean, I have not wrote my own page, but I have not wrote also. I don't have producing this one. I don't like this one because it's there, but whatever.  
Hey, whatever earnings.  
Today is true.  
In order to calculate the price. In order to calculate the price.  
Because of this.  
We'll see that because of the of this, I should think about the two states of the living in this home mode, yes. So I should calculate one price at the end and then calculate present value for these prices, yes.  
Then.  
Today it's 2%.  
Earnings in one year is earning zero. Thanks.  
One plus grow rate, yes.  
And also I know that dividends.  
Is earnings times 1 minus global price.  
What I'm doing with this?  
On one hand, I have earnings. Four earnings are growing. On the other hand, assign our earnings. I can calculate dividend, yes.  
And what is missing?  
The growth rate is busy. How can I calculate the growth rate? Because I know I have global ratio and I know return on equity. What is growth?  
Growth is what I get from the money that I will keep with myself. So growth is.  
It's equal growth is equal to the program ratio times return on equity. Yes, so.  
First.  
It's return on equity P is 40%, no.  
So if return equity is.  
Is if we don't, if we don't own everything is 10% I hate this.  
I don't like these markets, sorry. If we turn only with this 10%, then row would be 10% * 40 percent, 4%, yes.  
And if we don't on equity is 50% then you know would be.  
6%.  
Yes.  
OK, with this I think we can play. We have all the.  
So let me go to the the numbers.  
Is too.  
Early in year one is.  
2 * 1 plus.  
4% no.  
And the rest of earnings.  
Earnings in year 2 or let me say instead of year 2, yes, earnings in year P yes earnings in year P is going to be equal to.  
Earnings one time 1 plus.  
6% times.  
Times.  
6%.  
Times E.  
Name of one, yeah.  
Because of this.  
Again, me doing this is simple for me, but the point is not in you doing this as I'm doing this. The point is you understand how to do it and do it by your phone. Yes, what I'm trying is to think about everything.  
And I'm I'm sharing with you my thoughts and there is no formula. I mean there are a lot of formulas you will you can bring your own formula see. But what I'm doing is now price in year 0 is dividend in year one over K minus.  
We make sense.  
But because of this.  
What I'm going to do, I'm going to say.  
Price in year one is dividend in year two over minus three.  
Make sense?  
And then?  
Once I know this, what I will do?  
Price today.  
That today is going to be equal to.  
What is in value of?  
Dividend year one plus.  
Price in year one over one plus. OK, makes sense.  
We understand what I'm doing and graduating, but as today.  
Price today as the present value of price in year one, price plus dinner in year one.  
OK, now let me do the numbers.  
First idea I have earnest.  
Earning 0 in order to calculate.  
Even in year two, I need to know first. I'm going to go through this way, earning 0, earning one, earning year 2 and dividend in year 2, yes.  
Earn zero is 2%, then earning in year one is to purple and then also.  
Let me calculate here corresponding this this times this and this times this 6%.  
OK, earning one is earning 0 times.  
One plus.  
4%.  
Earning 2 is this 1 * 1 + 6%.  
No.  
This earnings time.  
1 minus.  
The libraries, yeah.  
This is good. Once I know, even two, what can I go with right in year one?  
Play is in year one.  
Right in your one is.  
Because this expression will be forever.  
Now I need to calculate also dividend in year one. How can I calculate dividend in year one? Two ways in this time 1 minus the back ratio.  
Or also.  
And the way is doing this two over 1 plus probably rate would be the same. Make sense.  
Good. OK, now once I know the two things, I can calculate price today. How by doing this price plus this dividend?  
Over 1 plus.  
Period.  
This is the place I'm moving to 31.2.  
Is there a quickly way in order to solve this?  
I don't know.  
But personally.  
What I have done is by understanding things I know.  
I know what are earnings. I know knowing earnings. What are the earnings? I know how to calculate the price by knowing.  
Big then, yes. And also I know the relationship between growth and return equity.  
Thanks.  
I like this exercise because that again, I like this exercise for you, for me.  
For me, that is.  
There is nothing.  
That are not the real things. There are no nothing here to explain. It's just connecting the dots that we have seen in class. Yeah, more questions.  
For these racers with with that, with that money, I don't feel like, OK, let me move here.  
Uh.  
Did we do #23 class last day?  
I think there's no. I don't remember exactly which ones we did and which ones we don't. I I know that we did a few of this. I don't know if I did 22.  
Okay.  
Binomial model. We did it. Why we did it? Because last week you should read a program set 6 and together with program set six. There are several exercises like this on tracking the binomial tree.  
And what else? I would like to do today an immunization exercise. Do you remember immunization? We did the last class of fixing. Let me see if there is an immunization exercise somewhere.  
I think that here we can pack.  
OK, this is another binomial one.  
Who is expected to have earnings? Yeah, that's three-year. Oh, yes. So this one, I'm going to do this. Yeah, there you go.  
We want one and one.  
This is going to be.  
One not, sorry, two, 24.  
OK, General Motors has liabilities, has General Motors has pension liabilities of 10 million year starting in two years. I like me so much.  
I like it so much.  
I want to. I want you to calculate present value of the hearing. I'm going to do it, but after you do it, yes.  
I want you to calculate present value and and also regarding the ratio regarding I have to talk about the education faculty.  
I will do it later. First thing I want you to do is to calculate present value of Mr. value, yes.  
We try publicate now.  
OK, before starting.  
Thinking about that.  
How do you calculate the price of a?  
By doing C over R, yes.  
Let me calculate the derivative, the derivative from the perpetuity.  
Considering R Yes, but anybody from the perpet with the over R yes.  
Ease.  
T / r ^2, isn't it?  
Now do you remember the formula of the modified duration?  
Modify duration. No duration. Modify duration. No duration is how much the price will change.  
Percentage, yes.  
And this is equal to minus.  
Malaysian Times.  
The rate would change. Make sense.  
What I want to calculate? I want to calculate the duration of the perpetuity. Yes. How can I calculate the duration of the perpetuity?  
Let me from here, from here.  
From here, raise you.  
Is going to be equal.  
3.  
I'm sorry, I forgot one plus the red. Yes, I forgot English formula this. Yep.  
Do they?  
Coming back. You don't need to know this demonstration, but I want you to understand what I'm doing. Yes, what I'm doing this is.  
This is modified duration formula modified duration.  
Modify duration is.  
Modified duration tells me how much the price will change in percentage. This is modified duration. Yes, modified duration is minus relation over one plus the year times.  
The the changing place, yes.  
Knowing this, I can say that duration is equal to. I duration is equal to.  
Duration is equal to.  
Minus how much the price will take over the rate, yes.  
When match the price will change over the rate.  
Thanks one plus the rate.  
OK.  
Over the best, no.  
Are you following me? What I have done is just abstract and what is please this. So thinking about a perpetuity duration of a perpetuity, yes, it's going to be minus times minus.  
C / R square, yes.  
Thanks 1 + R.  
Yeah, over the price. How much is the price over that? So over the price is over C times, yes.  
All matches duration of a perpetuity. Duration of a perpetuity is one of these goes with this C goes with this duration of a perpetuity is 1 R / R yes.  
But.  
You don't need to know this formula. You have this formula in the formulas. What it is? The duration of a perpetuity.  
Good.  
OK, I can take this out, but the difficulty of the final has will not have to do with this. Why I have done this? Why I have done this? Because I want you to distinguish between modified ratio and normal ratio.  
I I want you to understand that duration is the change price giving a change in interest rates.  
And also I want you to warm up, yeah.  
OK, General Motor has pensionabilities of 10 million year starting.  
In two years, I thank you and lasting forever.  
So it's a perpetuity that will start at time equals 2.  
And I have a 10 year and 30 year zero bond bond. What fraction assume that an interest rate of 5%? Perfect. OK, let's go this XSH once you know the numbers.  
Are so simple regarding mass, but understanding them are not as simple, yes.  
And.  
OK.  
How do you calculate present value? Present value for perpetuities C over R? Yes.  
But because this the facility will start in year 2.  
Present value will be C / R Yes, and I should make present value of that.  
One plus R right today.  
The second because it happens in year two, no.  
Have you tried?  
Have you tried? Have you calculate present value of the perpetuity? I've gone and I have told you to calculate present value of the perpetuity.  
Are you understanding what I'm saying?  
Can you calculate present value of the?  
I think it's better if you're doing this than me. I know how to do that.  
Try to put this.  
Anyone know or is right?  
You try to roll. How can I do it?  
Let's see trend.  
See over. Rise two, the second.  
Yeah, what is is, you know.  
You know.  
No, because of that I'm doing this. Because of that I want you to do this because I if I explain it, it will mean nothing. But if you try to do it, a perpetuity normally starts in year one.  
And you receive this payment, yes.  
What is present value of this perpetuity? C / R is that perpetuity starts in year 2.  
This does not mean two years of delay. It's just one because a normal prepared will be started in year one. This prepared will be started year two. We have just one year of delay. So because of this, I want you to do this. I mean, I I don't have any problem with all the exercises.  
I want some clicks to happen in your head, yes.  
So in this sense I calculate present value. Do I need to know the present value?  
I don't need to know present value of the perfect in order to solve this exercise. I don't. I don't need to know present value of the perfect, but I have this complete because because I will go deeper.  
I want to go a little bit deeper. So first idea, present value of this of the liabilities is just.  
C over R that is 5%.  
And present value of this one we're open 105.  
Yep.  
I don't know if I have done something great.  
And this is OK.  
Now this is a mode of money that I need to immunize. What do I need to know now?  
What do I need to know now? What is the duration of the perpetuity and the duration of the perpetuity?  
In case this duration would not be the third one year, the duration would be.  
1 + 5%.  
Over.  
1.5% over 4.5 yes and this will be 21, but because this is the third one year I should add.  
One, so plus one, yes, 22 and now.  
I need to choose between a 10 year and a 30 year circle mode. I should immunize this port, yes.  
Questions are so simple. If you understand how to solve these exercises, maths are simple. There is not too much difficulties. Yes, what are the maths?  
What are the marks? I have a seal of bone, a 10 year seal of bone.  
Before that, first I need to calculate the portfolio weight one plus weight 2 is going to be equal to what? No.  
And now the ratio equations.  
10 times weight 1 + 30 times weight 2 it should be equal to 22 yes.  
Yes, perfect. How nice of the system.  
Let me multiply by 10. There's the question and subscribe, yes.  
-10 with 1 -, 10 with 2 = 2 -, 10 yes.  
020 weight 2 is equal to 12, yeah.  
Yep, so Y2 is equal to 2 * 2 * 3.  
Over 2 times.  
2 * 5  
So this is 3 / 5.  
3 / 5 and with one to be 3 / 5 should be 2 / 5 makes sense.  
Yep, again, me solving this.  
I mean, I I like doing maths. It's good for my brain, but this is not the point yet. Wait one.  
Weight one is 2 / 5. Sorry, not two of 2 / 5.  
OK, once you do that things already and by two is 1 minus this one, yes.  
But I'm asked what fraction of this asset portfolio should be invested in 10 year both.  
So a 40% would be the correct answer.  
Homelands. Homelands.  
40 times this price.  
Time of this one times this. How much bonds? What is the number of bonds I should buy considering face value?  
Of 1000, face value would be 1000. Each bond would have a price today of 1000 / 1 5%.  
Price to the depth, yeah. And this will be the price of one zero combo, then the amount of bonds will be this over this, so this will be.  
If the million per year is a millions, yes, it's a million, so I I should buy 100.  
24,000 votes.  
This is the number of volt, the price of its volt.  
The weight, the the total money I should invest in bond one. Yep.  
What I want you to feel to understand by doing this exercise.  
Again, go to work with time value of money. Do you see that that working with time value of money is crucial? It's absolutely important. You should make your time working with time value of money to be thinking something easy that you go.  
Because it's asking like what?  
I.  
Mhm.  
No, no, I I don't need person value. Yeah, but why have to look for person value? Because I want to work with you calculating person value of the perpetuity and I want you to think about, oh, this.  
Happening year 2 is deferred and working with them at the moment. What we have done with previous exercise? Calculating present value of something that will happen in year one. What we have done here? Calculating present value of something that will happen in year one.  
And do same thing.  
Two times and personally I don't care too much about the matters and you see again and again and again present value formula.  
But the point is you understand what I'm doing. Probably there are a lot of notions, different notions.  
And yes, maybe with them that it would be one of the.  
If you don't have, if you have not worked too much, the exercises and you are a little bit formula addicts.  
The problem you can find is or I don't know how to apply this formula.  
And I am trying hard in order to avoid this happening. Why? Because you should understand what we are doing. But at the end, what are we doing?  
Going forward in time, looking for how much this will be. I don't care if these are dividends, these are coupons. This is a payment, yes. And once we know money in time, we calculate person money.  
If you choose one spot in New York, corporate finance, what you will be doing in corporate finance? Again, calculating present value of future cash flow. What is the BCF calculating present value of future cash flow? Yep.  
These scores.  
On one hand, it has names, labels, labels, HDRIR, names. Getting used to this language is important. What is about?  
I dedicate a lot of time in order to to fully understand what it's about. Once you know what it's about, it's simple, but this thing regarding language is important.  
Then there is another point of mastering time value of money.  
But mastering in time by the money is something that it's important for the rest of your financial life.  
And once you know the language and understand the concepts, once you know how to work with time value money.  
That thing has to do with connecting the dots.  
Just connecting the dots. What I'm doing there, trying to connect dots. What I have done with previous exercise, yeah, the one you have asked me connecting the dots and instead of going same I have done here instead of.  
Taking the short way, I make a short. I have made the way in order just to go try to go over early, yes.  
OK, this exercise. Understanding this exercise is important.  
All very important things you should know working, understanding forward rates.  
Spot rates, forward rates, auto correct, spots with forwards and once you know spot rates, calculating present value of future cash flow.  
Let me look for one of these exercise that.  
Perfect. But I I mean, I don't know this this one, but 23.  
OK.  
OK.  
You own a three-year risk free zero bonbon with a face amount of 1000 and a current price of 928.60, yes.  
So what can you calculate?  
This was raining here today, yeah.  
And then the current deal on a one year C of Bomboni is 2%.  
On a one year see of bonbon is super perfect.  
Let me think. Let me see. I know.  
the.  
I was.  
I I would.  
Whatever. I'm going to do this. I was thinking what is the point? I was thinking also I was thinking adding to this exercise. What is the price of a born with a maturity of three years?  
I was going to tell you tell me the price of this book, for example 40 or 20 of the 4040 and 1000.  
For yes.  
After all everything I was going to ask you give me the price of people, but what is the problem? Why I cannot ask you this?  
Why cannot I I cannot ask you this?  
Because I am not going to have the spot in here.  
I have a spot in year one. I have a spot in year 3.  
And I am asked to calculate the forward between year one and year three.  
If I know the spot in year one, I know the spot in year three, and I would know the spot in year three, I'm not doing the presence. I will present value of this one, present value of this one and present value of yes.  
No, don't forget. OK, you own a three-year 0 coupon bond with a fixed value of 1000. I can complete the spot, then I know this spot.  
Yes, but I'm asked.  
To calculate for one rate between year one and year three. This is simple.  
This is simple. Let me take first. This is the let me call it your mean geometric average. It's not that you mean, but it's just doing I'm asked.  
One plus the spot in year one times one plus the power between year two term between year.  
One and year 3 rise to the 2nd.  
This is going to be equal to 1 plus the spot in year 3 rise to the third, yeah.  
So how can I calculate forward between 1:00 and 3:00?  
Power between one and three is going to be equal to sqrt of 1 plus the spot in year 3 right to the third / 1 plus the spot in year 1 -, 1 yes.  
First year one, year two and year three-year two is 2% and let me calculate the spot in year.  
How much is spot in year three? How much is spot in year three? HPR formula?  
That is.  
Future value 2.5 number 28.6.  
Rise to one there.  
By one I'm super glad.  
Perfect. So what is forward? The forward we are looking for simple to calculate is SQRT.  
4th one bless and 5th rise to the third.  
Over 1 plus.  
Percent so.  
This and one and.  
Is the number forwarding on.  
Now imagine that.  
Spot year two were 2.5 or 2.3%, yes. What should be the price of about 44104?  
404040 yes, how do you calculate the price of the ball? Are you impressed by the future?  
1 + 2%.  
Price to the first.  
OK.  
Make sense while you should know walking, going, travelling from sports to forwards and from forwards to sports.  
And once you know this, you should know how to calculate the price level.  
Hey.  
What with this?  
Let me continue like this.  
OK.  
Do you have any questions? OK, tell me what is the finals like final going to be like?  
The same structure, the structure would be the same also. The difference is that you will have more or less, probably a little bit more.  
Test questions, Test question.  
And one exercise more than the meter. But I think that here you have more exercises than for the meter.  
For the midterm you had, I think there were three or the final you are going to have four.  
And.  
Add review some exercises.  
Go through all because this will help.  
And also review problem set 6.  
Then review Pro and set 5. Then review Pro and set 4.  
But the exercises did our celebrate.  
The better letter 3.  
Three parts equity evaluation regarding equity evaluation, what you should know.  
Working with that value of money, of course, what we have done today is the two stakes of dividend is home mode.  
I like this because it's you know how to go with that money. It's simple.  
And it's not so formula demand. It's just understanding how to calculate present value of things. Make sense.  
Then understanding BVO, the relationship between.  
We don't net with the OK is important.  
Did you had pain less, less?  
OK.  
I don't remember, but I think that no. Oh, yeah, he came with a word. Perfect. Yeah. I'm going to take attendance. Yes, because I am requested to do it. Yeah.  
I don't care about.  
I don't care about the tenants, you know, I don't care about the tenants, but I care about the funding.  
OK.  
And last week.  
That was our last week. Last Monday, then come here.  
I'm a yeah was here.  
was here. Nicola was here.  
Steven was here, Paul was here. Steven. I guess, yeah, I guess.  
So regarding equity evaluation.  
We have gone through that, yes. Last day we covered some exercises and some of the questions. Equity evaluation is understanding what is PDGO and how to work with federal money and the two states, the district model and the Gordon Road model, yes.  
Then fixing code.  
First idea. They love it. They love it.  
Once we understand duration, fully understanding what it is and modified duration, we learn the relationship between duration and modified duration.  
And forward rates. The forward rates connect with the yield curve. What you should know regarding the yield curve that the that the slope is positive.  
You you don't know anything regarding this, but if the slope is negative, you cut or flood.  
You can be sure that there are negative expectations because there is something called liquidity preference that will try to make the slope always possible.  
So we know totally there are there are deep expectations, but also expectations are lower or higher in absolute value than it will be perfect. Make sense? Yes. And then finally.  
Finally.  
Did you got these?  
You should fully understand.  
How to calculate? Do you remember problems at six?  
First exercise. First exercise has to do with.  
Calculating payoffs. Payoff for Pasto payoff for Pavon, yes.  
Then once you know how to calculate payouts, you should know what is the intrinsic value and what is the price of the color of the book.  
This way absolutely important because it's so simple.  
And then binomial model, really, really, really important and black and sole formula understanding that the slope of black and sole formula is a hedge race.  
And it's a number that should be to branch between zero and one. It has to do with the probability of finishing out of the money or in the money, yeah.  
Futures a great in future value. Yes, using present value formula again and regarding swabs.  
At the end, swap is a portfolio future and I'm not going to ask anything regarding clubs.  
I'm not sure. I don't remember. But if I asked something regarding swabs, you don't need to study what is a swab. It's a collection of future. What is a future? We have gone through this, but regarding swabs, if you remember when we went through swabs, what did we do?  
Reviewing Forex, reviewing how to calculate future value of currency and we did one forward exercise. So there were nothing new to programming that yes.  
If you have any questions, I can answer the exam is on Wednesday, but probably Wednesday morning I will be out of order Tuesday and Wednesday. I mean, I know that as we get closer to the final.  
You will work more, but the opportunity of answering all questions was today. I can continue answering questions, but but at the end my responsibility will be lower because Wednesday, Tuesday and Wednesday there are a lot of things to do, yes.  
See you on Wednesday.  
You have any questions? No. See you on Wednesday and it has been a question.

