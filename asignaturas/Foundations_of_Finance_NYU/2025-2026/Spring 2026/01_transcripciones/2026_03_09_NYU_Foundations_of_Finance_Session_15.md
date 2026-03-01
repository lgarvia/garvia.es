# Foundations of Finance (FoF) – Session 15  
**NYU | March 9, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 10min  

---

# 1. Midterm Review and Grading Policy

The session begins with a review of the midterm results.

### Important remarks

- The class **is curved**.
- Because the class is small (<25 students), the instructor adjusts grades to allow more students to receive high grades.

However:

> A grade **below 25** indicates that something important was not understood.

Students with low grades are encouraged to improve in the **final exam**, which is **cumulative**. Flexibility will be applied, but effort is required.

---

# 2. Portfolio Theory: What Remains Relevant

From now until the final exam, **portfolio theory is largely finished**.

The **only formula you must remember** is the **Security Market Line (CAPM)**:

$$
E(R_i) = R_f + \beta_i \big(E(R_M) - R_f\big)
$$

Where:

- $$R_f$$ = risk-free rate  
- $$E(R_M) - R_f$$ = market risk premium  
- $$\beta_i$$ = asset systematic risk  

No further portfolio theory questions will appear in the final beyond this concept.

---

# 3. Exercise 17 – CAPM with Alpha

The problem gives:

- Risk-free rate = **2%**
- Market premium = **4%**
- Beta = **2**
- Alpha = **2.5%**

### Step 1: Expected Return (CAPM)

$$
E(R_i) = 2\% + 2 \times 4\%
$$

$$
E(R_i) = 10\%
$$

### Step 2: Add Alpha

$$
E(R_i) = 10\% + 2.5\%
$$

$$
E(R_i) = 12.5\%
$$

---

### Step 3: Future Value

If the investor invests **1,000,000**:

$$
FV = 1{,}000{,}000 \times (1 + 0.125)
$$

$$
FV = 1{,}125{,}000
$$

This exercise simply requires **substituting into the formula**.

---

# 4. Exercise 18 – The Most Important Exercise

The instructor emphasizes:

> **Exercise 18 is the most important problem in the midterm.**

It connects:

- Time Value of Money
- Fixed Income
- Holding Period Return (HPR)

This problem will appear again in future classes.

---

# 5. Fixed Income Exercise (Bond Pricing + HPR)

Bond characteristics:

- Maturity: **3 years**
- Coupon rate: **4%**
- Yield at purchase: **4%**
- Face value: **1000**

---

## 5.1 Price of the Bond

Bond price equals the present value of future cash flows:

$$
P = \frac{40}{1.04} + \frac{40}{1.04^2} + \frac{1040}{1.04^3}
$$

Since coupon rate = yield:

> The bond is a **par bond**

$$
P = 1000
$$

---

# 6. Holding Period Return Calculation

After purchase:

- First coupon reinvested at **1%**
- Second coupon received
- Bond sold with **2% yield**

### Future Value at Year 2

$$
FV = 40(1.01) + 40 + \frac{1040}{1.02}
$$

---

### HPR Formula

$$
HPR = \left(\frac{FV}{1000}\right)^{1/2} - 1
$$

Key insight:

- HPR depends on
  - reinvestment rate
  - sale yield
  - coupon payments

---

# 7. Portfolio Diversification Exercise (Review Only)

Two assets:

| Asset | Return | Std. Dev. |
|------|------|------|
| A | 10% | 20% |
| B | 15% | 30% |

Covariance leads to:

$$
\rho_{AB} = -1
$$

This means:

> Perfect **negative correlation**

The **minimum variance portfolio has zero risk**.

Weight formula:

$$
w_A = \frac{\sigma_B}{\sigma_A + \sigma_B}
$$

Example:

$$
w_A = \frac{30}{20 + 30} = 0.60
$$

$$
w_B = 0.40
$$

Portfolio return:

$$
E(R_p) = 0.60(10\%) + 0.40(15\%)
$$

$$
E(R_p) = 12\%
$$

However:

> Portfolio theory will **not appear again** in the final.

---

# 8. Monthly Holding Period Return Example

Investor:

- Buys stock for **50**
- Receives dividend **2**
- Sells at **51**

### Total Return

$$
FV = 51 + 2 = 53
$$

$$
HPR = \frac{53}{50} - 1 = 6\%
$$

Monthly return = **6%**

---

### Annualized Return

$$
(1.06)^{12} - 1
$$

$$
\approx 101\%
$$

Small monthly returns can compound dramatically.

---

# 9. Perpetuity Example

Investor buys a perpetuity paying **100 annually**.

Initial yield = **5%**

$$
Price = \frac{100}{0.05} = 2000
$$

After one year:

- Yield increases to **10%**

New price:

$$
Price = \frac{100}{0.10} = 1000
$$

---

### HPR Calculation

$$
HPR = \frac{1000 + 100}{2000} - 1
$$

$$
HPR = -45\%
$$

Key principle:

> **When interest rates increase → bond prices fall.**

---

# 10. Transition to the Second Part of the Course

The course now shifts focus to:

> **Equity Valuation**

The tools learned so far will now be applied to stocks.

Key concepts required:

- Time Value of Money
- Discounting
- CAPM

---

# 11. What is a Stock?

A stock represents:

> **Ownership in a company**

Investors buy stocks to obtain **returns** from two sources:

### 1. Capital Gains
Increase in stock price.

### 2. Dividends
Cash payments distributed to shareholders.

---

# 12. Price vs Value

Important distinction:

- **Price** → objective (market price)
- **Value** → subjective (investor estimate)

If markets are efficient:

$$
Price \approx Value
$$

If markets are inefficient:

$$
Price \neq Value
$$

This creates investment opportunities.

---

# 13. Intrinsic Value

Intrinsic value is calculated by:

> Discounting expected future cash flows.

For stocks:

Future cash flows = **dividends**

---

# 14. Required Return (Discount Rate)

The discount rate comes from CAPM:

$$
k = R_f + \beta (E(R_M) - R_f)
$$

---

# 15. Example – Detecting Alpha

Given:

- Current price $$P_0 = 48$$
- Price next year $$P_1 = 52$$
- Dividend $$D_1 = 4$$

### HPR

$$
HPR = \frac{52 + 4}{48} - 1
$$

$$
HPR = 16\%
$$

---

### CAPM Required Return

Given:

- $$R_f = 6\%$$
- $$\beta = 1.2$$
- Market premium = 5%

$$
k = 6\% + 1.2 \times 5\%
$$

$$
k = 12\%
$$

---

### Interpretation

Actual return = **16%**  
Required return = **12%**

$$
\alpha = +4\%
$$

This means:

> The stock is **undervalued**.

---

# 16. Dividend Discount Model (DDM)

Stock price equals the present value of future dividends.

---

## Case 1: Constant Dividend (Perpetuity)

$$
P_0 = \frac{D}{k}
$$

Example:

- Dividend = 10
- Required return = 10%

$$
P_0 = \frac{10}{0.10} = 100
$$

---

## Case 2: Constant Growth Model

If dividends grow at rate $$g$$:

$$
P_0 = \frac{D_1}{k - g}
$$

Where:

- $$D_1 = D_0 (1+g)$$

This is the **Gordon Growth Model**.

---

# 17. Earnings and the Plowback Ratio

Companies generate **earnings**.

These earnings can be:

1. Distributed as dividends  
2. Reinvested in the company

---

### Plowback Ratio

$$
b = \text{fraction of earnings reinvested}
$$

Dividend payout:

$$
D = (1-b) \times Earnings
$$

Examples:

- $$b = 1$$ → no dividends  
- $$b = 0$$ → all earnings paid as dividends  

Reinvested earnings generate **future growth**.

---

# 18. What Comes Next

Next sessions will focus on:

- Equity valuation
- Dividend discount models
- Growth models
- Relationship between reinvestment and growth

These topics rely heavily on:

- Time value of money
- Discounting cash flows

---

# 19. Key Takeaways

1. The **CAPM formula** is the only remaining portfolio concept required.
2. Understanding **bond pricing and HPR** is crucial.
3. Time value of money remains central.
4. The course now moves into **equity valuation**.
5. Stock value ultimately depends on **future dividends discounted to today**.


# Transcription
9 de marzo de 2026, 5:11p.m.
1 h 10 min 56 s
OK, let me start by the beginning.  
Thank you.  
I'm going to go through the through the whole final, sorry, through the whole meeter, yes, regarding.  
Rates regarding rates.  
These are all the grades of the class, yes.  
These are all the rates, several ideas.  
The class is cool. What does this mean?  
But for me, I agree lower than 25.  
It's so it's something that worry me because I have not made something correct, yes.  
A grade lower than 25 once I have said this.  
You can forget about portfolio theory. You can forget about portfolio theory.  
I'm not gonna ask.  
I'm not going to ask. I'm not going to talk anything more regarding portfolio theory, the only thing.  
I'm going to go through the through all the exercises, yes, I'm going to go through all the exercises, but the only thing regarding portfolio theory that you should keep in mind is the expected return on RSA.  
Prison rate last better than return on the market minus.  
Please, yes.  
This is the only thing you should remember for portfolio theory. Yes and no.  
You don't need to know anything else from now in the final regarding portfolio 3, yes. And also if you have got a bad grade, final is cumulative.  
I'm not showmans.  
You understand what I'm saying that I will be absolutely flexible.  
But please, I need an effort from you. I wonder if I misread. Did you say the class is curved or no? The class is curved. There is a curve. Why? Because if there were not a curve.  
Grade would be a. I mean if I take this, will it be done? Yes, and I prefer the class would be gone in order to have.  
With all these, with all that breaks, probably I want to give Ace. If the class were not carved with that, with those breaks, probably I would just give one A or two. I want to give more.  
You are less on the call, no?  
So it's not avoiding the score against you. Imagine that. Imagine that the exam would have been great for everyone. Yes, then I would have said that the class is not wrong.  
There is no problem because you are less than 25 students and I can do whatever I want.  
You understand the problem, no? I don't have any or whatever. Yeah.  
OK.  
I'm going to go through not. I don't know if all because I don't have time, but I will go through all numerical exercises, all numerical exercises.  
The only thing I want you to remain.  
Regarding portfolio theory is this formula, yes.  
Exercise 17, the first numerical exercise is just applying this formula, but also considering that there is an alpha, yes.  
If you apply this formula, respirate this.  
2%, yes.  
Then market premium.  
Is 4%.  
Is true 2 * 4% and alpha you are told that is 2.5%.  
So expected return considering all these things should be 12.5%, yes.  
ah  
If you have written something, have given points.  
Why isn't the you put 2% + 2 * 4? Why not -2%? Because market.  
Market premium is just the difference. Market market risk premium is the difference. But in case you have made a mistake there, not considering just writing.  
Show minor show.  
Depending on what you have done me after, probably I have given you all the. I mean for me this is not a mistake or a big mistake, but for me it's important once you know the rate, but for me it's important is you know it.  
How to calculate future value? No win investment I have invest.  
1,000,000 and 1,000,000 times.  
1 + 12.5% would be the number we are looking for. Which one is this number? 1,000,000 or 12?  
Sure.  
Yep.  
This is the first exercise. Yes, substituting the formula. I'm getting the result, yes.  
Exercise 18 for me this exercise.  
This exercise.  
Is the most important exercise in the meter and this exercise we are going to see this exercise at least two or three more times.  
18 We're talking about fixed income. We will review.  
And probably you read this exercise.  
It should have some. It should sound familiar to you.  
Have you ever done this exercise? Have you ever seen this exercise before? Your case, Sam is the only one. Your case, you are the only one that has not seen this before.  
Because you didn't came the class before. Let me tell you. And I sent you.  
Transcription. The excel was there and I told you that we have gone through an exercise that was really, really cool.  
We did this exercise in class the day before, you remember.  
We did it and and whatever. Let me go quick.  
Where's the idea?  
I.  
Sophia, 100 or 1001 thousand same quit, yeah.  
441040 face value plus the coupon.  
You buy a three-year 4% coupon vote annual coupon payments.  
Yeah.  
Is this? This is what you are buying?  
You're buying a three-year 4% coupon ball with a yield of 4%.  
With a yield of 4%.  
With a yield of 4%.  
You asked me to write the formula. It was you. No, someone asked me. Please can you write the formula? I wrote it here and the formula is present value first one plus.  
4% and calculating the price price, first coupon presentario the second.  
No, sorry, first.  
4% rise to the second and 1040 / 1 4% rise to the third. Yes, I am receiving a coupon of 4% and the expected return is 4%.  
So how much is going to be face value? 1000 is a par bond. Yes, what I'm doing here, I'm calculating the price of a bond. All of you should know how to calculate the price now.  
We will do this next week. We will repeat it and before this comes, we will repeat it again. So knowing how to calculate the price of a bond is absolutely important, super important.  
Yes, this is the price of the gold.  
You receive the first coupon in one year and reinvest it or at the rate of 1%. Then you receive the second coupon payment and then immediately sell the bond at at at the year maturity of 2%.  
What is the total rates here? Yes.  
In order to calculate HPRHPR future value over present value, future value over present value, future value in year 2.  
I'm going to reinvest this coupon. I will have this coupon in my pocket and then I will show this vote. HPR will be.  
40 first football reinvested plus second football plus.  
1041 + 4% Sorry 1 + 2% because 2% is the price at which absolute.  
Over one and over half -1.  
Yes.  
First idea, calculating the price.  
It's a medium. It's a medium because 4% of the 4% is face value a thousand and second idea is just doing this number.  
40 * 1 + 1% + 40 + 1040. This is the first coupon, the second coupon and face value plus last coupon, yes.  
If you need any help, ask me. I have office hours. I'm here before, depending the day I can be after.  
Yes.  
Regarding these exercise.  
No.  
I'm not gonna.  
I'm not gonna do again with this exercise because I did it and I said it with you. The only need, the only thing.  
I need to change here in order to get that that result.  
Is that this 3% instead of being a 3% is at 2%.  
Yes.  
We are both at three-year of maturity only with coupons of four person. For me, this exercise is absolutely important. Why? Because of fixed income. We will work with fixed income.  
Because of time by the money.  
And because.  
This exercise will connect the first part of the course with the second. Regarding portfolio theory, you can follow.  
I'm not going to ask anything else regarding portfolio here, but regarding fixed income, regarding time alimony, this exercise is super important. Why? Because this exercise for them.  
What we have done with what we are going to see.  
Or that understanding this exercise is the base. We wouldn't work over these days. So please, you should fully understand how to solve this exercise. Make sense.  
You should know what is a ball, what are coupons, how to calculate the price of a ball, and once you know how to calculate the price of a ball.  
Understanding what is being said in that exercise, I'm going to sell the bond one year before maturity and then I will reinvest 1 coupon and this idea regarding HPR. Yes, we will continue working with HPR.  
And at the end, what are we doing? We are calculating present value, then we are calculating future value and just applying one formula. Make sense.  
OK, let me go.  
Let me go to last exercise.  
We also did.  
We did last day in class this exercise.  
We just did two exercises glass and then we went through the meter and you remember we did two exercises on the line.  
The one with the ball and then this one. There are two assets.  
Standard deviation is.  
30%.  
And standard relation on these 30%.  
Inspector returnees.  
Per person.  
And inspector returnees 50%. Yes, I have an asset A and an asset B, yes.  
Is it just work?  
First question, calculate the correlation coefficient. Calculate correlation coefficient.  
Correlation coefficient between A and B.  
Deviation A, deviation B over.  
No.  
Sorry.  
Correlation coefficiencies.  
Covariance between A&B and yes.  
This is correlation coefficient and if you calculate them.  
Negative 0.06 / 0.2 * 0.3 and this is negative what?  
All these two stocks are. These two stocks are negative, perfect, correlated, yes.  
Sesium. Do you remember Sesium 6?  
Session 8, session 8.  
We in session 6 now, sorry session 8 now session 6 session 6 withdrawal investment opportunities between Japan and Spain.  
And hold or Japan and the States. Sure, Japan and the States.  
The investment opportunity set was something like this, yes, if correlation were perfect.  
It was something like this, isn't it? And if correlation was perfect, negative correlated.  
The investment of Portunity said.  
It's something like this.  
So what is the reason? What is the deviation of the?  
Minimum variance portfolio is 0.  
Is 0 and you have in the formula CI don't remember it, but you have the possibility what is the deviation and the variance for a perfect negative correlate in the formula C you have this case.  
How do you calculate the weights?  
The variation on the portfolio. In case the two stops, I'm not going to write the big formula, I'm just going to go quick. The variation on the portfolio is weight A times variation A minus.  
Wait B time deviation B.  
It freeze. It's zero. Yes, you can calculate.  
Zero is weight a variation a -, 1 minus.  
Weight A deviation B and you can calculate from here that weight A is.  
Variation B over variation A plus variation B.  
Yep.  
This is weighted. You have this into. You have this in the formula C.  
20 plus 30 is five, 50%.  
2.  
For two for waiting, waiting, this is equal to.  
She speak person.  
But.  
If you just have written this -1 and then making a draw like this, probably I will have given you full score on this question.  
You can forget about this from now till the end. This has to do with diversification.  
And this exercise, once you know how to do it, is so, so, so simple. We have done it before.  
Whatever this is, this has passed. This has passed. What I want you, what I want you to to do, try to fully understand exercise 1818.  
The one with the ball. Next week we will continue working over that exercise from a different perspective, but we will continue working on price and both, yes.  
OK, regarding this question, do you want me to go through any through a question in particular?  
Yes, because I I did the math a bunch of times because I had the wrong equation and I kept getting negative. I'm not positive. OK, maybe.  
Let me do question 30, yes.  
OK, this question is similar to the exercise that we have at home.  
Instead of having positive.  
Instead of having a negative correlation, we have positive, yes.  
Hey.  
I have. Thank you. We don't. We don't AB.  
And volatility of 20% volatility.  
5015 person and 10% yes.  
And we are looking for is close to that equation that I have already with and you have the formula simply that both stocks are perfect correlated.  
How do you calculate variance on the portfolio by doing weight A times variation A plus weight B times variation B. Make sense.  
Because oration is perfect, this is plus not there.  
Yeah. What are we looking for?  
Yes.  
What else and and ask?  
What is the weight in asset B? Yes, I'm looking for weight in asset B.  
So let me write this.  
1 minus weight B deviation A plus weight B variation B, yes.  
No.  
I.  
The agent A becomes positive here, will not be equal to wave B.  
Hey, minus, yes.  
So when B when B is equal to deviation A over deviation A minus deviation B.  
Two over.  
I have an equation, but it was. I had it wrong. That's why I got. I don't get too much. I mean, I don't get.  
You have in the formula C you have all these numbers also.  
That that I don't care regarding this is understanding something that I explained and I don't want to go through this explanation again because it will be it will not have to at work, yes.  
More questions?  
There is one thing. Let me number one.  
We may invite you this platform more, OK?  
I don't want to bring anyone this.  
Question one. I will do question one or question two.  
An investor buys a stock for 50, receive two in dividends over a month and sell the stock for 51 at the end of the month.  
OK.  
By 450 and then over a month.  
51 + 2 makes sense.  
So teach your body, Luis, take to three.  
Homats this investor has made in a monthly base.  
A three person in up.  
Well.  
Oh, sorry.  
See this person.  
Yeah, make sense.  
What is the annualized only period return? So in order to calculate this in a year basis?  
We should do HPR is going to be equal to 1 + 6% rise to the 12th -1.  
And this will be 101 person.  
3% modeling, Sorry, 6% modeling. We need much more within a year.  
If you have done in an incorrect way this one, I will not be worried also. You are understanding now the difference between a month and a year and I don't care too much because.  
I will not be worried regarding this. I am not thinking about the fix in Bombwa, yes.  
Question two this question.  
It's also tricky, but tricky because I want this is a little. I cannot let you relax.  
But one thing is letting you relax and another thing is making you feel impressed. I don't want you to be impressed. So I want you to smile.  
Thanks. Thanks.  
Thanks, Sarah.  
OK, thanks.  
An investor acquisition prepare me that pays 100 annual.  
Andre I'm on this.  
It's going to be great this by that's it.  
The investor decides to sell the perfumity after one year, just after receiving the first payment.  
Um.  
He said we're selling for 10%. So prepared to this 100, he bought it at a 5% rate and after one year he's selling this at a 10% rate. Make sense?  
What is the price?  
Price at which he has vote or she has voting is 100 / 5%. Price at which we are sorry is 100 / 10%.  
I'll hand it over by person.  
100 / 5% 2000.  
Yes, and hand it over and present this.  
One question, yes.  
HPR future value over present value -1. Future value is 1000 over present value 2000 -, 1 and what is missing there?  
First payment. The investor has sold it immediately after receiving the first payment and the first payment is.  
3. So question is.  
P negative 45%. It should be negative. Why? Because if interest rates goes up, price will go down.  
And then it's not 50% because there is.  
Make sense?  
Any more questions?  
I don't have any problem in going through whatever you need. I don't have any problem repeating. I have office hours, but please.  
Ride me, come back me, yes.  
Any more questions?  
What's the like? What's the out of the exam? What is over over 47?  
What he said that is.  
16 * 216 * 2 that is 32 + 1547 but 3 * 5.  
Oh, question 6. OK, this question we did in class and the point there are two ways in order to solve this.  
The long way and the storm way. At the end, calculating the geometrical range is the same as calculating canalizing the sphere. So.  
In this case, the short way in order to solve this is.  
Calculating age here that is future value that is 50 over present value that is 40.  
Well over.  
OK.  
There are seven places and there are 6 rhythms.  
Wine overseas.  
-1 but again this this question is here just in order you to make this question and you to see that instead of 76.  
License.  
At the end, is this question complicated? Once you know, sorry, it's so simple.  
Do you need a financial calculator in order to solve this question? No, but if you have not too much practice, try to solve this.  
And again, I'm not worried regarding this question. I'm worried regarding the HPR questions and the PCCOM questions. Make sense?  
Do you have any more questions?  
So the questions are 18 and 19 or 17 and 19.  
I know it's 88, eighteen, 90.  
Forget about, I mean, no.  
Question 17, I mean there is not too much to think I missed that question. If he isn't a problem, yes.  
But the most important question is question 18. So in the final we see stuff like the 18 or the last one. No for the final, the final. I don't know what I mean, I know what you are going to see in the final.  
First thing you will see is equity evaluation. We are going to start with equity evaluation. Yes, right now an equity evaluation. We will see two days. We will talk two days about equity evaluation. An equity evaluation is important.  
And you don't know anything yet. You know how to work with the value money and if evaluation is working with the value money and a little working.  
So for the final, we're going to the final and think about equity evaluation and we are going to start just right now regarding a mutuality. Make sense.  
OK, do you mind to give me back?  
Let me close this. Let me leave this open to leave me back your items.  
Kittens.  
Thank you.  
Mhm.  
Um, wait.  
Is is room is critical big or that many people?  
OK.  
What I'm saying is, Marie, is that you need.  
Now how to calculate the price of a.  
It's an absolutely important topic and also.  
In the same way, in the same way.  
You should know how to work with time value of money properly and we will work today with time value of money and next day we will continue working with time value time value of money. Yep.  
OK, OK. Equity valuation.  
Of course.  
First step regarding equity evaluation is what is the stop?  
Where is the stock? And that's something you hold. Why someone will hold a stock?  
In a financial perspective, why someone will hold a stock? Why someone will buy a stock?  
By someone will buy. Where is the store? You make money. Who are you going to make money?  
Why did you have already vote? So careful because if you are selling.  
Yeah, and the the word. I'm looking for one word. Which word is the word I'm looking for?  
Tillions, what you said, returns, returns. Yeah, but when we are talking about bonds, bonds pay off who bonds then you will receive face value that received this value is as if you were selling.  
When talking about the stocks, you will receive the.  
And normally we don't think too much about selling it or we can think about selling it, but in my in the stock, first of, in the stock as if it were a perfect.  
In the division, I think stay.  
Yeah.  
So how will you calculate the price of a capacity by doing the dividend over the expected return, the return where we will get the expected return from S&M?  
Yeah.  
OK, now balancing valuation. What is a stock is a piece of ownership. If you own a stock, you have you you own part of a company, yes.  
It's a piece of ownership. And then how do you calculate the value? How do you get the value of a stock? There are several ways you can go to book value and from books you can get.  
What is written on books? You can also go to the market and you can see what is the price of the stock in the market. Therefore because price and value is not the same.  
Value is.  
Value is subjective. Price is objective.  
If market is efficient, value and price should be the same. If market, if there is an inefficiency, there is a mismatch. Yes, next week we will continue to we will talk about arbitrage, but today.  
You can have a cow and the cow can make milk.  
Then you can have meat from the cow and also the cow can.  
Can die because of a disease. Make sense.  
Sense.  
Liquid, liquidation, liquidation value. What is liquidation value? What you will get from the cow because of her disease. Can you get something? Oh, so sorry, sorry for being talking about cows.  
No.  
A goat. A goat also has milk.  
You understand that?  
Is not the same liquidation value that replacement car replacement cost.  
And then if you want to serve the cow because of its milk.  
You will think about the Bida, how much milk the cow can make, but we are not going to talk too much about this is in case you take later corporate finance. This is here in order to have to know how corporate finance.  
Start working.  
Book to market ratio. What is the book to market ratio? What do you have in books amount of money that you have in this?  
Margit tells me about bubbles.  
How much the market is overpricing what is in books? But again, we are not going to talk too much about accounting, yes.  
What is the book to market ratio? And then there are growth firms and value firms. Growth. A growth firm is Apple 10 years ago. A value firm is Apple today.  
Apple 15 years ago, Apple 20 years ago used to pay 0 dividend. Why? Because they were growing. We will talk about this next day.  
About what a company that is young, what a growth firm do, the company will not pay dividend and will reinvest all the money in themselves.  
WQ is the inverse of the book to market ratio and is an indicator of rate of balance, yes.  
Now Tom is Q. Let me see. I can see Tom is Q.  
OK.  
Sorry, I will look it and I will say it with you, but what is 7 cues? An indicator, but probably now nowadays.  
We have it close. I don't know if close to these numbers, but I will look and I will give you. OK, what are we going to work with? What we call intrinsic value. What is intrinsic value?  
Getting the value from what we expect the company is going to do, knowing his public accountants, yes.  
We have all accountancy and from the accountancy we will get future cash flows and from those future cash flows we will get value. This is what we are going to do today and next day. Make sense.  
OK, fundamental intrinsic value. This is just to say.  
I have a stock today with this price, yes.  
The store will have one price in one year.  
And then also you got here.  
There will be a dividend that will be paid. Make sense.  
How can we calculate the price today or how how can we calculate the HPR? The price can be calculate price one, dividend one, one plus.  
OK, yes.  
Make sense where we will get K from the SNL which rate plus beta times market three.  
In the example that we are going to see.  
In this example.  
We don't have equilibrium. Let me do this example step by step, because this is an example. Once you understand it is so so simple, but before understanding it can become a little bit complicated.  
Here.  
Here, I'm here, where the price is 48.  
And price in one year would be 52 and I would have a dividend of four. Make sense the beta is.  
1.2.  
1.2.  
Then reassure it.  
6%.  
And then the start expected market excess return is 5%.  
Oh.  
My name's Luis Fred. This is.  
4.  
Person makes sense.  
OK, first idea. First thing I'm going to get is K That is country rate. This country rate is.  
Respirate plus beta times market premium, Yep.  
And this is going to be at 12% and then?  
What I'm going to do, I'm going to calculate.  
Total HPR and total HPR would be future value that is 52 4 / 48 -, 1. Make sense.  
And this is gonna be a 16%.  
What is the problem with what?  
The market is not efficient.  
This.  
There is a positive alpha. Why there is a positive alpha? Because there is a difference between this price and what the stock is doing, yes.  
So.  
This stock is. If there is a positive alpha, this stock is undervalued.  
The price of this stock will increase, but whatever the idea is I have.  
I return that case from this part 52 / 548 -, 1. I have part of the return.  
That came from here and part of the return is the dividend, yes.  
What I want you to see, Sofia.  
Why someone will buy a stock? Because of two things. On one hand, there are capital gains because you are selling the stock at a higher price.  
That the price at which you have bought it, but also there are.  
Dividend games, yes.  
Make sense?  
What are we going to do? We are going to dedicate 2 days in order to talk about equity valuation. You can think, what about portfolio theory? It is past. Tell me, can you see that outlook is?  
No, what I mean is why I'm talking about a positive alpha because this is what the market.  
What the problem tells me the market is expecting and with the numbers that I wrote.  
This is what I'm getting. If it were less than 12, you would have a negative alpha. Yes, yes, yes, yes. If these two numbers were the same, market would be in equilibrium. But because these numbers are not the same, there is a positive alpha Eva.  
You do it on the board. This one. Yes, I can do it. But is HPR is.  
52 + 4 over 48 -, 1 future value over present value. Yep.  
But please, when talking about Mexico, there will be a lot of numbers that I can, I will not be able to do on the board. So please get used a little bit to work with Excel.  
Well, will we do a second to like know the problem that you're doing on paper?  
The same idea of the meter. It was hard to understand the Excel version and then have us apply to the on the paper when we were in use. We don't speak like I can't use formulas on paper.  
We won't be using Excel, but again.  
What is the part you don't understand from this formula?  
I understand it. It's just easier to see the numbers and see how you could versus F3F43F. But at the end the point is not you fully understanding all things in glass.  
The point is once you see these things in class going home and try to do it by yourself and then you can ask me back and tell me please that exercise. I didn't understand it how to do it the the problem with this.  
Is that the HPR? I have with any I have both with the HPR formula. Stones of that at the end one that we're working with HPR formula, future value and present value and then we don't, then we don't be with future and present.  
The relationship between future and this and.  
Here in Excel.  
you next up  
I have the best 48 euros. Bye bye in the stocks.  
And you want a period of time. I vote a return of 60 person, one six person, yes.  
I don't know if I'm explaining myself, but I'm made-up instead of it 16%, it will be 10%.  
I have invested 50 and in one year time I have got back. It's a 5% return, yes.  
Numbers are just numbers and formula are just not problems. The point is understanding what are we doing with those numbers and what are we doing here? Yes.  
Working with.  
Let me come back here.  
These lights.  
This is the price today. This is the price in one year time.  
And what we are doing is just comparing the return that we are getting on one side with the return that we are getting with the SML.  
Makes sense.  
What the SMS tell us?  
The SML tell us 12%. What is the return that we are getting by knowing present value and future value?  
6%.  
Makes sense.  
If we were to have a negative alpha, would it be capital? No, in this case alpha is positive. Yeah, yeah. But if it were not, if we had another number and it made it a negative, would we have capital loss and dividend loss or that just doesn't matter?  
No, no, no, careful because imagine that alpha is negative. For example, in order alpha to become negative, tell me up if this could be a 5%.  
Or this could be a 3%.  
The return will still be positive.  
What does alpha means? That I am getting less than expected, less than expected, but please all of you.  
Forget about Alpha.  
You will not need alpha for the final, yes, focus on.  
Understanding.  
Today the fix income exercise 1/8 exercise, yes.  
OK. Compute the required rate of return, unexpected holding period return and today focus on trying to understand this one. OK, what are we going to see today at the end, the dividend discount model? What is the dividend discount model?  
So, so simple calculating present value of future dividends and if we consider the future dividend is going to be a constant, how will you calculate?  
Present value of future dividends.  
With a perpetuity formula.  
What is a perpetuity?  
What is anyone? What is a perpetuity?  
What is our perpetuity?  
Sorry.  
Perpetuity.  
Is Marie a fixed payment that will happen forever?  
A fixed payment that will happen forever. The exercise that we have yet though. What is a perpetuity? A fixed payment that will happen forever? How we will calculate present value of a perpetuity?  
Imagine that you have.  
A stock, please, all of you, imagine that you are going to have a stock that will pay a fix.  
Dividend of 10 euros forever.  
Or we will calculate the price of the store.  
This going to be great this.  
The sector return is 10%.  
Considering the dividend discount model, if there is going to be a constant dividend of 10 and a discounting rate of 10%, what should be the price of the stock?  
Thank you. What should be the price of this book?  
I'm gonna have.  
A dividend of 10 euros for error discounting rate is 10%.  
What should be the price of the stock?  
10 over 10%.  
But it will be 100.  
Price would be 10 / 10% and it would be 100 euros.  
What is a 10% of 100? 10. So the dividend will be 10. So the price is 10 over 10%. Make sense?  
Yes.  
So at the end, if there is a constant dividend, how we will calculate the price by doing dividend over K? Make sense?  
Next day we will continue with all these ideas, but please, these formulas are so, so, so simple.  
Over K This is the price today, yes.  
And why the region is going to grow at a constant rate?  
If the dividend is gonna grow at the constant rate price would be bid in year 1 / K -, J -, J BJ the constant growth.  
Dividend 0 * 1 + E is dividend one. Dividend 2 is dividend 11 plus E equals dividend 0 times.  
1 + E rise to the second and so make sense if the dividend is going to grow at a constant rate or are we going to calculate the price?  
I doing dividend over carry minus. I have forgot sorry to giving you today's slides.  
After all intercept 4, yeah.  
OK, before finishing.  
Before finish, let me just tell you one more thing.  
Next day we will continue working over at the same, yes, and before finishing, let me tell you one more thing.  
Errands, yes.  
A company. Please only look here. A company has earnings.  
What can I do with these earnings? I can say earnings or I can keep earnings inside the company.  
Yes.  
1 -, B What is going to be B? It is the blowback ratio. It's a number that can range from 0% to 100%, yes.  
Not all earnings will be distributed. If B is 1, dividend will be 0 next sense.  
If B is one... If B is one, no worries will be distributed. No dividend will be paid.  
AB BCO, the deal will be equal to words. Make sense.  
Next day, next day we will work with the global ratio. We will work with earnings and we will work with dividends and we will see the relationship between.  
Keeping money and growing, they will see how much money the company is keeping themselves and how much growth the company is getting. Make sense.  
It.  
In order to finish, you can you have all the numbers for that example. Yes, you have all the numbers for that example. You have a company that have a dividend and you can change the things. What is sensitivity analysis, increasing or decreasing?  
In these numbers.  
And you can see how sensitive.  
The price is to a change in one of at the end. What are we doing there? We are calculating the price knowing dividend knowing K and knowing E.  
Hey, how are we going to get K with rate plus beta times market three. Make sense? How are we going to get there from there?  
Here you got all these numbers and at the end next day we will continue working over this with the flow back ratio. That is what I have introduced. Make sense.  
Any questions?  
OK.  
I finished 2 minutes late. Sorry Paul.