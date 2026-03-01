# Foundations of Finance (FoF) – Session 13  
**NYU | March 2, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 24min  

---

# 1. Administrative (Midterm Preparation)

Before starting exercises:

- Slides 11 and 12 uploaded to Brightspace  
- Problem Set 1, 2 and 3 (with solutions) uploaded  
- Sample Midterm 1 & 2 available  

Today’s class objective:

> **Pure problem-solving session.**
> Connect formulas with intuition.

---

# 2. Bond Exercise – Yield Changes and HPR

## 2.1 Zero-Coupon Bond Intuition

You buy a 10-year zero-coupon bond.

- If yield increases after one year → price falls.
- If yield decreases → price rises.

### Key Idea:

If:
- You bought expecting 10%,
- One year later market yield becomes 20%,

Then:

- New buyers earn 20%.
- You will earn **less than 10%** over your holding period.

Because:

> When rates go up → bond prices go down.

---

## 2.2 Coupon Bond – Full HPR Calculation

3-year bond:
- Coupon = 4%
- Yield at purchase = 4%
- Sold after 2 years
- Reinvestment rate = 1%
- Yield at sale = 3%

### Step 1: Purchase Price

Because coupon rate = yield:

$$
\text{Price} = 100
$$

(Par bond)

---

### Step 2: Cash Flows Received

Year 1:
- Coupon = 4
- Reinvested at 1%

Year 2:
- Coupon = 4
- Sell bond (1 year remaining maturity)

Sale price:

$$
P = \frac{104}{1.03}
$$

---

### Step 3: Future Value at Year 2

$$
FV = 4(1.01) + 4 + \frac{104}{1.03}
$$

---

### Step 4: Holding Period Return

Two-year holding:

$$
(1+HPR)^2 = \frac{FV}{100}
$$

$$
HPR = \left(\frac{FV}{100}\right)^{1/2} - 1
$$

---

## 2.3 Intuition

Two forces:

1. Reinvestment rate ↓ → lowers return  
2. Yield at sale ↓ → increases bond price → increases return  

Final HPR depends on which effect dominates.

---

# 3. Stock HPR – Annualization

Buy:
- Price = 60
- Dividend = 2
- Sell price = 64
- Holding period = 6 months

Future value:

$$
FV = 66
$$

Six-month return:

$$
\frac{66}{60} - 1 = 10\%
$$

Annualized:

$$
(1.10)^2 - 1 = 21\%
$$

or equivalently:

$$
\left(\frac{66}{60}\right)^2 - 1
$$

---

# 4. Portfolio Standard Deviation – Critical Concept

Two risky assets:

Variance formula:

$$
\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\sigma_A\sigma_B\rho_{AB}
$$

Standard deviation:

$$
\sigma_p = \sqrt{\sigma_p^2}
$$

---

## 4.1 Perfect Positive Correlation (ρ = 1)

Portfolio risk becomes:

$$
\sigma_p = w_A\sigma_A + w_B\sigma_B
$$

→ Straight line  
→ No diversification benefit  

---

## 4.2 Perfect Negative Correlation (ρ = -1)

Portfolio risk:

$$
\sigma_p = |w_A\sigma_A - w_B\sigma_B|
$$

Possible to obtain:

$$
\sigma_p = 0
$$

Risk-free portfolio from risky assets.

---

### Example

Asset A:
- Return = 10%
- Std = 60%

Asset B:
- Return = 12%
- Std = 40%
- ρ = -1

Set risk to zero:

$$
w_A \sigma_A = w_B \sigma_B
$$

$$
w_A 60 = w_B 40
$$

Since \(w_A + w_B = 1\):

$$
w_A = 0.60, \quad w_B = 0.40
$$

Portfolio return:

$$
0.60(10\%) + 0.40(12\%) = 10.8\%
$$

---

**Understanding this fully = mastering Portfolio Theory.**

---

# 5. Time Value – Cruise Problem (Annuity Adjustment)

Cruise every 2 years  
First payment in year 1  
Total until year 41  
Discount rate = 10%

Key insight:

If payments occur every 2 years:

1. Convert rate to 2-year basis:

$$
(1.10)^2 - 1 = 21\%
$$

2. Count correct number of payments.
3. Use annuity formula in 2-year periods.
4. Adjust back one year if needed.

---

# 6. Market Efficiency – Hardest Conceptual Question

Critical logic:

If stock price moves **before** public information:

→ Evidence against **strong form efficiency**  
→ Indicates insider trading  

If trend persists after information:

→ Evidence against **weak form** (technical predictability)

---

### Core Rule for Exam

- Weak form → past prices only  
- Semi-strong → public information  
- Strong → public + private information  

Movement BEFORE public news:

→ Against strong form  

Trend patterns:

→ Against weak form  

---

# 7. What Matters Most for Midterm

Focus on:

### 1️⃣ Time Value of Money
- PV
- FV
- Annuities
- Yield changes
- HPR annualization

### 2️⃣ Portfolio Theory
- Variance formula
- Correlation cases
- Diversification intuition
- Minimum variance portfolio

### 3️⃣ CAPM
- SML
- Beta
- Alpha
- Overpriced vs underpriced relative to SML

### 4️⃣ Market Efficiency
- Three forms
- Link with information timing
- Arbitrage logic

---

# 8. Final Message Before Midterm

If you understand:

- Correlation effects  
- Yield vs price relationship  
- HPR mechanics  
- Information timing  

Then the midterm will feel simple.

If you only memorize formulas, it will feel hard.

---

Next step:

Review:
- Sessions 6 and 8 carefully  
- Bond HPR exercises  
- Weak / semi-strong / strong logic  

Good luck.


# Transcription
Grabación de la reunión de Nueva reunión-20260302_170015
2 de marzo de 2026, 5:00p.m.
1 h 24 min 48 s
OK, I'm gonna start the recording. I have start recording and here I have got.
I have open NBC.
Here.
Sample meter one and sample meter 2.
I'm gonna do lots of exercises today.
But before starting, do you have any questions?
I've said I have said with you the solutions, yes.
Tell me.
They are.
11 to 13, Yeah, because on the the term that it says that.
If if I have not uploaded, please forgive me. I'm going to once I finish this class, I will go into Brightspace and I will show you.
These two sessions 13 and 1112.
Neither 11 both Kapem or not. I think, I think, yes, I think both. Well, I'm going to do it immediately.
But before I'm going to do it, just right. Oh, did I close? What's up?
I tried to open it, sorry.
Oh.
Because I want to share with you in WhatsApp and what you write.
Raise.
English. No. Spanish. No. Yeah. English. Spanish.
Add.
Why you don't pay you?
No.
Oh.
OK.
These are you guys.
Lessons.
11.
Well.
And 12 now you have all the slides in bright space also.
Problem set three. You can find it also problem set three solutions. You can find them in right space.
And let me see if problem set one, portfolio theory one and problem set two solutions. You can also find them at bread space. Let me check for problem set one.
Yes.
OK, now you have everything in bread space, Yep.
Any questions regarding midterm, midterm sample midterm one, sample midterm 2?
No questions.
Let me open sample meter one.
Have you tried?
OK. Hey, Eva, you write me. You wrote me telling me, do you want me to go through the exercises?
OK, let let me go quick first. Let me start. I want to start one by one quickly.
A stock has a beta of 1.45 volatility standard deviation and all these things. Yes, what fraction of the OK, you know this exercise. This exercise is like the one we did second day of capping. You have all that in order to calculate variance, all that in order to calculate.
The systematic risk and you you can use the formula corresponding formula. A stock has a volatility.
Standard deviation of 40 This is just applying SML, Yep.
If a stock is over price.
OK, I'm going to do exercise 4. Yes, I'm going to treat it. I'm going to treat exercise 4 as if it were, as if it were an exercise. Yes, that is the question.
You buy a risk free 10 year single combo.
However, after one year, the deal on risk free nine years is now higher than the original deal.
Good.
OK.
1098, yes.
I buy this.
Other price face value.
100 for example, yes.
Face value is 100.
I have bought this. I mean 10 years left in maturity. Imagine that I have bought this for five or 50. I paid 50. Make sense.
Can I calculate the yield? Can I calculate the yield? OK, imagine that instead of buying this for 50 above this pay a yield of 10%, yes.
What is that price?
100 / 1 plus and person rise to the third. Make sense.
Are you out there?
The yield is higher.
One year after.
Price 9, price 10. Yes, one year after the deal is higher, so the price is going to be 100 over one plus.
For example, 20%.
Makes sense.
I'm not next.
What is the one year HP up? Make sense?
One year HPR. What is the one year HPR is taking?
It's your value over present value.
Price 9 over price 10 -, 1 Price 9 over price 10 price to 1 / 1 make sense.
All of you understand that?
So what is your question?
One year HPR will be.
Be lower than 10%.
For the counter.
What I want you to see the new buyer, new buyer is getting at 20%. I bought this thinking getting at the percent. So if the new buyer is getting more than then I will get.
Play something.
So the HPR will be no word of interest.
That you can also calculate. You can also calculate it within these numbers at what I'm telling you.
I bought this, I bought this thinking to get a 10% of return in maturity. After one year I'm selling, I'm selling this at a 20% rate so the new buyer will get that 20%.
This year I thought I was going to get the percent and the new buyer is going to get more.
So if the new buyer will get more because I'm getting less another way in order to see, yes, another way in order to see.
What happened with price if interest rates goes up?
So instead of getting the 10%, I will get less because I am getting less money than what I was suspecting.
Or 1000? I'm there or 1000?
Yeah, let me let me do one exercise.
Do you remember?
1.
One exercise with a stock dividends that were reinvested.
Yes.
I'm going to do that exercise, but instead of working with stocks, I will work with one bond as we'll pay coupons.
It's going to be a similar exercise like this. I'm going to repeat the same thing, but instead of in talking about bonds, 0 coupon bonds, I will talk about bonds that pay off coupons for it.
Let me open.
Meet them.
OK.
OK.
You have both.
Uh.
3.
Year of.
Born.
Calculate.
OK.
3D exceptions. Try to do it by yourself. I'm going to have to be with water. I will go.
Any questions?
Is this this exercise? Instead of having a division, you are having a people.
Now we invest in them, yes.
What else? What else works?
This exercise is like the one we have already done with 0 combos, but here I have a vote with yes.
Let me come here.
First idea.
Did you buy this phone? What are the cash flows?
Fire our gas growth that you will get.
If you buy this one, how many coupons you will receive if you wait in a treaty?
You will receive one coupon at the end of each year, yes, and at the end.
You will receive feedback.
Because of these.
But yeah, because of this, because of this, I am doing this exercise. I have not written.
There is no freeze back.
I will get the same age here for $100 for one option, $100 or one option. What do you prefer?
So first payment.
First payment after one year.
Good years.
First payment is going to be 40, no 100 sorry 4.
Second payment for and last payment is going to be 100.
Last four, last last 104 make sense.
OK.
Understand here.
What do I need to know?
You have bought a three-year of maturity bond with coupons of 4% at a year of 4%, no. In order to calculate HPR, what do I need?
In order to calculate HPR, what do I need? Present value and future value?
So first thing I need to know is the price at which I have bought this.
Yeah.
What is the price at which I have bought this 4041040? Yes.
What is the yield 4% the the yield at which I have voted?
4% how I'm going to calculate the price by calculating present value of future cash flows.
40.
1 + 4%.
40.
Over Ava.
Yes, I will do it also on the board.
1040 / 1 4% rise to third, yes.
I'm waiting price formula I'm using is present value is equal to future value over 1 + R rise to P I've created that formula almost all days.
Apprise, Pixcaslow and calculating price and value of Pixcaslow.
First one 40 over 1 + 4%.
Plus 40 / 1 4% right to the second.
Plus 1040 / 1 4% raise to the third.
I'm applying presented formula to each one of the of the cash flows. This cash flow will be paid in year one, this in year two and this in year three. So I'm calculating price. Why are this rate? Because I have both thinking I'm going to get a 4% rate.
I'm worried also 4%. Sorry.
Mhm.
Yeah, because each year I'm receiving one coupon.
One coupon of four, another coupon of four, and the last coupon of four together with face value.
Oh.
Oh.
I have. I have left the the attendance list. I left at home.
Oh.
I have one seat where it was written 100 euros and we posted the equals.
What happened in face value and each year you received one coupon and last year you received this value plus last coupon.
But please, please.
Please.
I am calculating.
The price, something that will have a return of 4% because cooperate is 4% at that yield of 4%. What is going to be the price?
We have done this in class. You have one exercise exactly like this. We need two or three.
What's the price?
And it's counting at a 4% rate, something that will pay. Let me simplify.
Let me simplify, yes.
Is there enough having this? Please look at look at here. Is there enough having this?
I have 100 and within a year I get 100. What is the rate?
OK, I have 100 in one year. I get 4. In two years I get 104. What is the rate?
We got more because and there is more. So face value, face value is going to be 100. Make sense.
100. Why? Because I am discounting at a 4%, something that will have a return of 4%.
Make sense?
OK.
We are here a deal of 4% now.
Continue reading, please. After two years, you sell the bond at a yield of 3%.
Also you have reinvest first coupon at a 1% rate.
Calculate HPR OK.
When I'm gonna sell this.
Here too now.
There will be 3 There are three different passwords.
There are pretty bad gas floors, no?
1-2 and three.
I am asked about HPR at HP are between.
Here 20 and two make sense.
I think we are between 0 and 2.
Oh, two years. Calculating the SPR formula 1 / 2, 1 / 3 makes sense. What do I need to know?
I need to know how much 4/4 and 104 will worth year 2.
Take on coupon will work in year 2.
How much we work for euros in year two? In year two, this one we don't need to make any number. Make sense.
What about this for?
This first gas flow is first open.
Is going to be reinvested at a 1% rate.
If I will invest, this is 4 * 1 plus.
1 + 1%.
Yes, for Europe reinvested at a 1% rate will meet in year two 4.01.
Yes.
And then?
I am saving.
The bond about 3%, it's.
The rates fall. What's going to happen with price? It runs. HPR will be higher or lower than 4%. We don't know because reinvesting is at a 1% rate. We are losing money because of reinvesting and we are getting more than a 4% because we are selling at a 3% rate. Make sense?
OK.
104 How do I calculate the price at which I have sold it by doing present value 104 / 1 3% rise to 1.
3% one plus 3%.
Rise to one. I am in year 2.
I am in year two. I'm in year two. The bond that I'm selling is a bond that I choose one year.
But I am here. I am here to here. So it's one you make sense.
These kind of things are the tricky ones in use, very used to work with time and money. You are not going to find difficulties with square rules or not. You are going to find difficulties with all these things.
Two years left, one year left. Make sense.
After two years, you have one year, but.
OK, so I'm going to calculate HPRHPR is future value. The future value is first coupon 4 * 1.
That's 1% make sense.
Plus second coupon 4 plus the price at which I actually 104 / 1 3%. This rise to 1 / 2 -, 1.
What's with it right here?
Present value 100.
Make sense?
So let me calculate.
HPR.
Let me calculate. I'm going to calculate here future values. Yes, I'm going to reinvest this at a.
1% rate.
One person, yes.
Then this one will not be reinvested for, yes, and this one is being sold. So this is 104 / 1 plus.
The price at which I have sold it, that this price is going to be 3%. Price and is the same. Make sense.
And what I'm gonna go with here?
Future value.
Future value is the sum of. I don't want. I'm going to calculate this in year 2. Number will be the same, but I don't want to take it.
I don't know why these things have sorry equal.
In year two, first coupon is being reinvested.
See this coupon worth 4 unless and the price at which I am selling this is 100.971 Yep.
This is future value and HPR.
HPR will be.
Future by.
Yeah.
Future value over.
100.
It.
Raised to 1 / 2 -, 1 makes sense.
OK, HPR is.
HPR is.
100.
Future value over present value in year 2 because of that this is rise to 1 / half. Yep, now things.
What if reinvestment rate would be 4%?
The selling rate is 4%. What would be HPR? If I am getting a if I have bought this thinking about getting a 4%, I reinvest a 4% and I sell it at a 4%, my HPR will be 4%.
What if reinvestment rate becomes lower? Reinvestment rate? If reinvestment rate becomes lower, instead of getting a 4%, I will get less.
Yep, what if? What if selling rate becomes lower? Here it change. New buyer is going to get less, so I will get more. So if new buyer gets 3%, my HPR would be.
Higher 4.47.
And let me write here 1% because this match.
With the numbers.
Any questions? Why we're doing it to 1/2 when it's 2%? It's like 1 / R.
Is one over the in order to calculate present value.
Any computer.
I rise to be what I'm doing when calculating HPR.
I am isolating.
OK, it is.
It show value over present value. So 1 + R is equal to it show value over present value value over P.
Yeah.
Yes.
It.
Please go to problem set one and try to do all the exercises. Yes, I'm going to share this and the rest of exercises that we are going to do in today's class after the end of the class also.
OK, uh.
If a stock is over price relative to the SML, I explained this last day.
If you want me to stop somewhere, tell me yes.
You buy. I have already explained #4.
If you purchase a stock six months ago for 60, just receive a dividend of super of $2.00 per share and then sold for sixty-four, what is the annualized HPR? Yes.
This exercise, Jessica.
Comes back again with same idea.
Let me let me do it quickly, yes.
Let me do it quick.
This six months.
That is 0.5 years. That is 1 / 2.
Yes, make sense.
You will be 460.
You said it 464.
That's to the two euro, $2.00 per bill. So future value is going to be 66. Excellent.
No.
So which one is correct question or it answer the percent?
Mm.
Is 10% no? Why? Because 10% is is 6 months.
How can we move? How can we transform this to be APR technical way forward? APR should be 20%.
APR not the technical number. So I'm thinking in case you want to apply, I don't know. I don't remember which one is the home. I'm going to do this quickly one plus 10%.
I do the second equal to 1 plus and I said the is PR technical, yes.
But also I can directly calculate the HPR.
Is equal to 66 / 60.
Rice to 1 / P 1 / P 1 / 1 / 2 is 2.
Find one.
Exams and 10% in three years.
But you're one person. Make sense?
Make sense?
OK, the standard deviation of a portfolio of two risky securities.
Please read question 6.
Hello.
Yeah, one.
What does it mean? What?
Of a portfolio of two recent securities, two components, securities.
So A and so B. It's so one of the components.
OK, let me solve you.
No.
Of that portfolio, not just the weighted average.
How do you calculate the standard deviation of a portfolio?
Oh, all you can make return on a property.
Return on the portfolio.
Please, I am start worry.
All you can play with me, turn off the portfolio.
In the case, yes, the other return, you calculate the return on a portfolio by doing.
The average of.
Yes.
In the case on the return on the portfolio.
To do the average by calculating the weighted average of the two component security expected returns.
Yes, of the return. Yes, you could have made the return.
What is being asked?
Let me ask this question from a different perspective.
Volatility on the portfolio. Sorry, deviation on the portfolio. How do you calculate deviation on the portfolio?
The question is.
Do you calculate deviation on the portfolio as weight A standard deviation A plus weight B standard deviation B?
Now is there any case where the deviation of the portfolio follows that formula? I think it was three.
That's just a compete with others. So close. Please, please, careful because please, three will be zero. Let me let me show you and I want you to understand this, yes.
How do you calculate variance on the portfolio?
I doing weight A square variance A weight B square variance B + 2 times weight A.
With B times deviation A, deviation B correlation between A&B.
Makes sense.
Yes.
How do you calculate?
The standard deviation on the portfolio I doing the square root of the variance.
By doing the score of the guidance, yes.
Are you with me?
Let me grow. Let me write.
Unstop it.
***.
And you agree with me that giving that equation?
given that the questions I get the investment opportunity set.
Yes.
That's where questions they return and volatility.
I get this. Let me write this into another form, yes.
Make sense?
And then yes, right.
Correlation between A&B, yes.
Why did the two stocks are perfect correlated?
The two stops are perfectly correlated.
If correlation coefficient is 1.
Then I can come from here. The correlation coefficient is 1.
OK.
The variation of the portfolio will be the weighted average. The correlation coefficient is one look please here.
This would be a straight line.
This will be a straight line. What does this to be a straight line means that now diversification is possible?
This.
And if relation coefficient is lower than one.
The risk will always be lower than the weighted average.
There is one other specific case that is 5th correlation is correlation provision is 01.
Organization for this is one all the investment opportunities set is going to be.
I did you remember?
And we can really, really easy calculate.
We can really, really easy calculate the minimum values portfolio. What is going to be the risk of the minimum values portfolio?
What is going to be the return? No, we will be 0 the average. We can translate the weight and then we can. Makes sense.
Understanding, fully understanding this idea is absolutely important for the leader.
Absolutely. Why? Because if you understand this, you have all portfolio view the part that doesn't correspond with copy. Make sense.
OK, I'm running out of time. Here you've got if you want me to stop in a particular exercise.
Yes, tell me I'm moving into the.
Numerical problems.
This first exercise.
Cruise exercise is just a time value of money exercise with the annuity formula.
Do you want me to do this exercise?
Yes. Have you tried?
If you have not tried, it will not make any sense me to do it.
But I'm gonna do it.
OK, the cruise exercise.
You plan on taking a cruise every two years, starting one year from now.
Please, this exercise is here not for me to do anything else. It's there for you to do it while studying or believe.
Two years.
It's two years and first payment will happen within a year.
and payments will finish in year 41.
4041 Yes.
Payments will happen in two years. It's two years and we're starting one year from now.
3000.
Yes.
And discounting rate in a year basis is 10%, yes, discounting rate is 10%.
OK.
I don't know it, you know?
And when is the point of that that will be that is there instead of starting?
It's an annuity that will be paid in two years, no?
So in order to complete that a meeting, unit of time would be two years.
So if you need the time, it's two years.
Rate that is 10% would be taking into a three-year basis.
So 10%, if I get 10% in one year, how much I will get in two years? 21% make sense.
When I eat sugar, tell me.
How many payments the annuity is going to have?
21.
Pretty well.
We will finish in 39 because it's starting one year from now it will be 28.
But because.
That is 41 instead of 2021 finance. Make sense?
Now why did I calculate present value?
OK, annuity.
When one payments using a discounting break off.
Of 21% on a two years basis.
I apply the formula, I will not be calculating days. I would have calculate how much money would I need one year ago.
So I use them with the form of London. What should I do once I get the number? I should take the number I get over one year of time.
Make sense?
I get this to work.
Numbers and without texture, yes.
And again, careful because I'm not the one that who should go through the numbers. You are the ones, but you are going to find the midterm is going to be more simple than this, more simple than this considering that you have tried to do it.
You have. You have not tried to do this. Everything was OK.
I can repeat it. Let me, yes, let me please.
First one plus.
10% right to the 2nd -1 is the rate in a two years basis. Yes, this would be.
31% What is 21% that is going to be raised for a two years period of that? No. And what I'm going to do?
2000 nowhere.
21% What is this? This is a permit, but I will calculate the permit as the difference of.
But I will agree. I will be a reasonable super payments, one that will start day and a second one.
9 is the second one that will start one year after.
One plus 1%.
How many payments did we say 21?
Yes.
What is this?
Is the value but in B -, 1.
One year ago, I want to calculate who much this party is today. What I should do is make.
For one time or one year or one year? What is the rate for one year?
And this is the number.
What is this? An annuity 21 payments natural year basis?
Yes, this will happen one year ago, but if I want to take four away 10, I should multiply times 1 + 10%. Make sense.
OK, considering consider, sorry, the following two risky assets.
Two risky assets.
Expected return and standard deviation.
I I like to have cream.
Once I go, I want to leave all with our course team so that I raise everything for you.
I'm gonna do this, yes.
Considering the following, consider following to risky asset we turn on A is.
10%.
We throw on B East.
12% standard deviation.
A standard deviation B.
40%.
I'm 16%, yes.
If the acids are perfect, negative or related, where is the spectator we go?
Of the portfolio of this asset that is risk free.
How do I calculate variance on the portfolio?
Balance on the portfolio is weight A square, variation A square plus weight B square, yes.
Make sense?
Because they are perfect negative correlated.
I can say that the agent on the portfolio is.
Weight A, deviation A minus weight B deviation B.
All of you are with me.
Yes.
How do I calculate the risk? How do I calculate the spectrum return on the portfolio?
Of these assets that is risk free or like a great.
Change that this is equal to 0. From here I can calculate the weights and I know also that weight A plus weight B is equal to 1, no.
From here I can say that.
Wait day. The age you may.
Thanks.
I.
Deviation B is equal to 0. Make sense.
So I can say weight A deviation A plus deviation B.
Is equal to variation B, so weight A.
Portfolio.
Exercise 2.
Problem set.
One, yes.
I can say that.
The person.
12%.
Return.
Aviation.
Hey.
10% or percent 40.
Percent 60% makes sense.
How much is way day?
Over 40 + 60%. Make sense?
Weight A is going to be 60% and weight B, it's going to be 1 -, 60%. That would be 40%. And what is the return on the portfolio?
The return on the portfolio is gonna be wait a times.
Return plus weight B times.
We don't.
10.8%.
Yep.
Oh, I have not seen anyone.
Let me go to problem set 2.
Roland said, yes.
Exit here. No, Captain Holtz.
What is the alpha?
OK, I want you to read question 1313.
What is this question about? This is the only type of question you will find for every marketer business. I'm going to go here because it's the only that you can. It's the only thing that you can tell me. Already we have not reviewed these kind of questions.
Yes.
And you are all right because of that I want to read with you and think about it with you, yes.
The fact that stock prices are an abnormal.
Upwards 33 confirms that subsequent report and expected good earnings is evidence.
Abnormal.
What is the string form about?
Insider information.
If the abnormal upwards breathe happens after the information is given.
We are not thinking out inside any problems.
Reform has to do with historical crisis and this is family information.
Funny information. So this one is.
Maybe strong, but they say that like the prices have risen before. Yeah, before it's been, they said like like subsequently, like subsequently, like next, like after the crisis risen the information.
And they're unexpected. So, OK, then, then, then he said, it's a, it's a. It will be against the report. That's right. I think the question is asking that it is evidence against.
Which form like? So it's like so if it is strong form, then this is evidence that is OK, OK, yeah.
No, OK, the fact that the stock prices have an abnormal.
A quarter three. It's before the good, not expected. That subsequently report and a statement.
It should be after at DST for Ruiz.
And especially who earnest.
After, Yeah. So against the stroke? No. Yeah, against the.
Because this is proof of both the strong and this will be strong because it happens once.
I mean there are who there is.
Then it's normal, subsequently to go up, so the strong police working.
I don't know. I don't know why this is evidence against a weapon.
I wanted to say this is the upward trip happens to the.
Yeah, insider involved. Yeah, it's a train. It's a train. If there is a train against the report, it's a train.
Whatever I want, did you put in with me about this?
This is a trend. This is the hardest question is because there is a trend and because there is a trend, a trend is an evidence regarding the week.
But if the unknowns or the movement and the abnormal movement would be before the release of public information, this would be against the storm.
If the movement is before, before, there is no new, no public new and the market moves moves before.
This is evidence against the strong, but only evidence for the strong. Yeah, the movement is before information becomes public.
Yes, yes. So why is it holding against this? I mean in this case.
Abnormal after after because he's after. Because he's after. I I don't know what is written in the solutions. I don't know what is written in the solutions. I forgot about the question.
Take some moment, right, yes.
If there is movement because of information. If there is movement because of information before, yes, there is movement before.
This movement that happens before the information is public is evidence against the strong.
Yes, the answer is no against. Against means like it is not evidence for strong. Yeah, like it is against means like contrary is evidence for the strong. Like it means that strong is there. No, no, no. It means if the movement is before.
It means that the market is not efficient in very strong way.
The market were efficient. There should not be movement in that day. Yeah, if there is movement before, the movement that happens before is an evidence against this.
So, so we should just like know that like the more like information asymmetry, the weaker the market efficiency. That's what this is saying the the less everyone has the information.
Markets are. So basically the idea here is that since there's some people that have access to the information that I can start with the PC.
Yeah, because I I feel like we all were on like the slides to the opposite. Yeah, there's something and that's like what I wrote down. I I understand what I'm saying. Yeah, that makes sense. What does mean? What does?
A market being efficient with more information. A market efficient is where everyone has same information. There are no people taking advantage or that can't take advantage. Therefore because we are talking about the strong form.
The point is not there are people that can can take advantage that the market is efficient when people that can take advantage.
Take a.
Because of that, it does not overreact before.
If the reaction is after.
After and the reaction has to do with a trend as evidence against the weak. If there is a trend, the market were efficient in the weak form, there could not be trends.
There will not be bothers. There will not be. Oh, the train of or this technical analysis will not work.
Make sense?
If you see, I don't remember. I don't remember. There is one question like this.
I won't have any problem in telling you correct quest, correct actuaries.
OK.
During after.
Before.
If there were regarding this question, I mean I don't remember if there is one question or not. I what I want you to do.
Understand. I don't care.
We have gone through all questions. I think we have gone through almost.
What we are going to be others.
Slides of session six and eight matters a lot. Also time value of money. Also time value of money. What else? Let's not go to much exercises regarding government.
Absolutely. You have the solutions. Any more questions? Good luck. Welcome.
OK.
