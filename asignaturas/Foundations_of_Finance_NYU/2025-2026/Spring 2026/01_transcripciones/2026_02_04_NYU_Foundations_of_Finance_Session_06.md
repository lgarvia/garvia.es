# Foundations of Finance (FoF) – Session 6  
**NYU | February 4, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 17min  

---

## 1. Position of This Session in the Course

Session 6 is explicitly presented as **the most important session so far**.

- Sessions 1–5: tools (time value of money, HPR, IRR, averages)
- Session 6: **architecture**
- Everything that follows (efficient frontier, CAPM, asset pricing) builds on this session

> If this class is not understood, the next ones will not make sense.

---

## 2. How to Study This Course (Meta-Guidance)

Clear instructions were given:

1. **Master Problem Set 1** (Time Value of Money)
2. Do not rush formulas
3. Reach the same results:
   - by hand
   - with Excel
   - with intuition
4. Change numbers, not procedures

> Understanding beats memorization.

---

## 3. Transition to Portfolio Theory

Up to now:
- One asset
- One return
- One risk

From now on:
> Risk is not absolute — **risk is relational**

Portfolio theory starts when:
- Assets are combined
- Weights matter
- Correlation matters

---

## 4. Portfolio Weights

- Let:
  - $$ w_1 $$ = weight of asset 1
  - $$ w_2 $$ = weight of asset 2

Constraint:
$$
w_1 + w_2 = 1
$$

Weights can be:
- Positive (long positions)
- Negative (short positions — introduced conceptually)

---

## 5. Expected Return of a Portfolio

The expected return of a portfolio is a **weighted average**:

$$
E(R_p) = w_1 E(R_1) + w_2 E(R_2)
$$

This part is:
- Linear
- Intuitive
- Not where diversification happens

---

## 6. Risk of a Portfolio (Core Formula)

Risk is measured by **variance** (or standard deviation).

### 6.1 Portfolio Variance (Two Assets)

$$
\sigma_p^2 =
w_1^2 \sigma_1^2
+ w_2^2 \sigma_2^2
+ 2 w_1 w_2 \text{Cov}(1,2)
$$

This is **the key equation** of this part of the course.

---

### 6.2 From Covariance to Correlation

Recall:
$$
\text{Cov}(1,2) = \rho_{12} \sigma_1 \sigma_2
$$

So portfolio variance can be written as:

$$
\sigma_p^2 =
(w_1 \sigma_1)^2
+ (w_2 \sigma_2)^2
+ 2 w_1 w_2 \sigma_1 \sigma_2 \rho_{12}
$$

---

## 7. Intuition via Algebra

Using identities:

- $$ (a+b)^2 = a^2 + b^2 + 2ab $$
- $$ (a-b)^2 = a^2 + b^2 - 2ab $$

This allows us to interpret **extreme correlation cases**.

---

## 8. Worked Example: US & Japan

### Given:

- Expected returns:
  - US: 15%
  - Japan: 50%
- Volatility (σ):
  - US: 30.6%
  - Japan: 23%
- Correlation:
  - $$ \rho = 0.27 $$

Portfolio:
- 60% US
- 40% Japan

---

### 8.1 Expected Return

$$
E(R_p) = 0.6 \cdot 15\% + 0.4 \cdot 50\% = 14.6\%
$$

---

### 8.2 Portfolio Volatility

Computed using the full variance formula and taking square root.

Key result:
> The portfolio has **lower risk than US alone**, while delivering **higher return**.

This is the **first concrete proof of diversification gains**.

---

## 9. Investment Opportunity Set

By varying weights from 0% to 100%:

- Each combination gives one point
- Plot:
  - X-axis: Risk (σ)
  - Y-axis: Return

The set of all combinations forms the **investment opportunity set**.

---

## 10. Minimum Variance Portfolio (MVP)

Among all portfolios:
- One has the **lowest possible risk**
- This is the **Minimum Variance Portfolio**

Properties:
- Risk-minimizing
- Independent of investor preferences

---

## 11. Efficient Frontier

- Portfolios **above** the MVP
- For a given risk → highest return
- For a given return → lowest risk

> Rational investors only choose portfolios on the efficient frontier.

---

## 12. Role of Correlation (Key Insight)

### 12.1 High Positive Correlation

- Assets move together
- Little or no diversification benefit
- Opportunity set collapses toward a line

---

### 12.2 Zero Correlation

- Some diversification
- Opportunity set bends left
- Risk reduction possible

---

### 12.3 Negative Correlation

- Strong diversification
- Opportunity set shifts further left
- Risk drops sharply

---

### 12.4 Perfect Negative Correlation (ρ = −1)

- Risk can be fully eliminated
- A **risk-free portfolio** can be constructed

This exists **theoretically**, not empirically.

---

## 13. Zero-Risk Portfolio with Perfect Negative Correlation

If $$ \rho = -1 $$:

$$
\sigma_p = | w_1 \sigma_1 - w_2 \sigma_2 |
$$

Setting $$ \sigma_p = 0 $$:

$$
w_1 = \frac{\sigma_2}{\sigma_1 + \sigma_2}, \quad
w_2 = \frac{\sigma_1}{\sigma_1 + \sigma_2}
$$

Weights depend **only on volatilities**, not returns.

---

## 14. Conceptual Takeaways

1. Diversification comes from **correlation**, not number of assets
2. Risk is **not additive**
3. Combining risky assets can reduce total risk
4. Perfect diversification is theoretical
5. Portfolio construction dominates individual asset selection

---

## 15. Philosophical Closing (Implicit)

> The more diverse the system, the more stable it becomes.

This applies to:
- Portfolios
- Markets
- Teams
- Societies

---

## 16. What Comes Next

- Continue Portfolio Theory
- Extend to more assets
- Formalize efficient frontier
- Prepare ground for CAPM

---



# Transcription
4 de febrero de 2026, 5:05p.m.
1 h 17 min 5 s
I expected the.  
Mhm.  
Mhm.  
OK, you have. I have thank you to the men in the campaign. We have 1234567.  
Personal. I say that. I say that because I say that I'm happy because I have my my daughter. She's 12 and she has.  
Ask me don't do anything less. It means nothing. I discovered 67 in December the 15th.  
They have been playing. I don't get one in the middle. They have been playing with me all Christmas.  
That is great and 123456771 is missing.  
Hey, is Matt Mary.  
Oh, don't don't get too confused. Miss Marie has asked me how to study this course, how to study this course and I told her.  
I was not going to say anything 5 minutes. You told me this 5 minutes from now. OK, several ideas regarding this.  
We were talking.  
Next this Monday. Yes, next Monday we were talking. Next day I will have told you that the most important class is today's.  
We are talking today and saying that most important class is today's. Let me explain you why and you will see. Today we will start talking about portfolio theory. We we talk about last class.  
But last class was not so important for me. Why? Because last class was in order to close the value of money and was an introduction to today's class.  
What's not so important for me because fully understanding 10 balance money is much more your duty than mine.  
Almost everything regarding my, regarding my part, what you should do regarding that value of money, fully mastered problem set one and fully understanding.  
HPR as the geometric calculates all this stuff we have seen the the last exercise we did in class like session four, yes as exercise with the bone.  
But if we reinvest internal return, return, you understand what I'm saying? And also compare that exercise with the one that you should do with Excel with the one with the store, yes, and all these things.  
There is no point in me doing the exercises here. There is a point because I have gone to the exercise and I have, oh, do this, do that, do this, make sense.  
One of the difficulties we are going to find, let me tell me that we are not going to review and that your money feel that we will go. Yep, so on one hand.  
You can't review from set one. The more you work over from set one, the better 100. Then what are we going to see days, next day, the day after next day?  
Portfolio theory, we will talk about Markovic. We will combine two stocks in the portfolio. We will see what is going on and next day we will construct over today's class and the day after next day we will construct over.  
Today's class. So if you don't fully understand today's class, next class.  
That you need more of me. So personally, if I work on Monday, next Monday, you're talking about this. I don't understand anything.  
I would like to have a time at Sina come back to this class. Makes sense. So how you can study this course? Try to understand from set one in one hand, but not this night.  
It's nice try to fully understand today's class and during this weekend you can go through problems and then you can go to the booth or whatever. Tell me and the problems I want when we were solving problems we used a lot of Excel.  
And not really the formulas right now. Should we, when we're practicing for future problems, should we follow the solutions that you gave or should we practice by itself? For example, let me explain with one.  
What I will do?  
You have an annuity and the annuity is.  
So you have a ball and you want to calculate the the price of a ball and the goal is for example 50 a coupon of 5 percent 50.  
50 and time value and face value of 1000 and last coupon 1050 yes.  
Rate is 4%, yes, rate is 4%.  
What I'm gonna do?  
I'm gonna practice. I'm gonna calculate the price of the ball.  
Place of the bond at the 4% rate is calculating present value of future cash, yes, and in this case what I have.  
I have in order to calculate this with just one formula. I have on one hand face value. Face value is 1000 over 1 + 4%.  
Price to the price to the feet, yes.  
Last  
An annuity 1000, No, sorry, 1000, no 50. Yes, the annuity is of 50. All of you see these five payments of 50.  
50 over.  
4% * 1 -, 1 + 4% rise to five and that's it, yes.  
What I'm looking for? I'm looking for present value of this coupon. Yes, without formula. How can I do it?  
Yes.  
Present value of face value plus present value of then we make sense so.  
I'm doing this. I'm doing this.  
Just applying one formula and I'm going to calculate this 1000 / 1.04 right to the right to the 5th, yes.  
Please, Marie, could you share the picture you have already done in the WASA group? Why? Because I have just made it up and I want you to have also the OK, I am just calculating that formula that you can do this with the calculator, yes.  
Glass.  
So now I am using XLS a calculator. Yep, 4% * 1 -, 1 / 1.04.  
4.  
Rice to the feet.  
And let me close.  
This.  
What I have done now I'm using XLS a calculator. I just think about the formula.  
And I have made something wrong. This is present value. Let me get this is correct. Oh yeah, no, this is a this would be.  
Yes, and this one should be a point instead of a point. Yep.  
And this is 821, yes. Is this correct? Oh, I'm going to check.  
1050 now I am using.  
Now I'm using perfect. Now I'm using Excel.  
Now I'm using XLS Excel, yes. How I'm going to and the rate is 4%, yes.  
Short, sorry, long way. I'm going to calculate present value of each of future values.  
50 / 1 4%.  
Let me fix this 4%. Yes, rise to the first.  
Are you following me?  
I calculate this.  
I'm.  
This is not the same number.  
1231050 Yes, this is not the same number.  
Why? I have made a mistake. I don't know where is my mistake, but I'm going to look for it. Yes, 4%.  
If this will be a 5%, this will be a 5%, this will be, this will be a bad bond. Face value should be equal to price because if I drop interest rate, price should go up.  
So the price should be over 1000 feet. Yes. Where is the mistake? I don't know yet.  
Is this correct present value of this?  
Yes, it is. And then.  
50 / 4% 1 -, 1 / 1 4% rise to five. Personally, I think that this equation is also correct.  
So where is the mistake?  
Where is the mistake?  
50 / 4%.  
Online news.  
OK, I know where is the mistake. The mistake is here.  
I was doing.  
Let me stay.  
Is here. This parenthesis is not good.  
Yes.  
What do I have done? What do I have done? I have you said. You are not going to find the meter something as long as this in this sense. You can find balls, you break that, but it's not going to be.  
Using XLS a calculator or implying a lot of numbers. If you could be understanding what we are, but with this now everything should be and and then one the problem because I know a little bit of Excel.  
There's one formula that is net present value. What I'm going to do, I'm going to use net present value formula.  
Net present value of first thing is said 4% rate. Yes, comma of this number. What should I get?  
Same, same.  
So answering to your question, Sam.  
Answering to your question, what is better, use Excel or doing by hand?  
Personally, I will suggest you.  
All.  
Reaching same number through different ways. I'm trying to understand it everything.  
And one important thing, we will repeat this a lot because once we go into the second part of the course, we will talk a lot. We will talk a lot about.  
Calculating the price level. So one recommendation.  
Try to do by yourself what I have already done, change the numbers, try to calculate the price of the vote and then we can go through, go through.  
Lesson three and four, that is said see you know Cucumon calculated. You understand what I mean. Get familiarized with language.  
It's because in Puerto Rico, there are times that settas are saying yes. What do you say? How do you call yourself? So, so, so we.  
Show me.  
So we Sam is in.  
Thank you.  
OK.  
I've called you, Sam. I have already done it. Sorry, Sam. I'm sorry. It's OK.  
OK, great. No, no, I'm so sorry for that. I know he's at more speeding against me to someone. Sorry. Sorry. It's like turning on the light. I didn't.  
Jessica. Oh, oh, so you are guessing.  
Seven women. Seven women. Yeah, I hope you worry. I don't know how to come. Sorry. Please, today's class is absolutely important. Last day we we went through a lot of notions, a lot of concepts. Today is not going to be as complicated.  
Uh, I'm.  
I want to fully understand what we are going to do today. This is class example.  
And let me hear.  
OK, what are we going to do today? So quick.  
So quick, do you remember last day? Last day I I introduce.  
Or one stock and the return and the values.  
For two stops, one has its expected return and variance and also both stop has provided this.  
Thinking about the variance, the square wound of the variance is the BA.  
We will start today. We are going to start today when we finish. What are we going to do today? We are going to combine. I mean I have 1000.  
And I can spend for example 500 in Apple, 500 in media. So I will have 50% on Apple and 50% on the media. Yes, or I can spend 300%.  
30% in Google or sorry in alphabet that is Google, 30% in another one, 30% in a third and a 10% in a whole.  
So I have amount of money and I would buy a percentage for stock A, a percentage for stock B, a percentage for stock C, but you have to do now, yes.  
The sum of always will be equal to one. Then we will just work with two stops, weight A, weight B and weight A. That's weight B is going to be one.  
These are the weights, OK.  
How are we going to calculate the expected return of the portfolio as the weighted average of each expected return? Return on Google is 2%, return on Apple is 4%, weight on Google is 50 percent, 50%.  
So I'll find half of 2 + 3 or 2 + 4%. So 3%. Yeah, I'm not in. We are going to see one example and this is this part is absolutely makes sense.  
OK, let me see.  
And then what about the variance? How are we going to complete the variance?  
We are going to complete the variance.  
This is Sigma. No more or less. You have a Sigma there.  
Sorry for me, this is Sigma, yes.  
Sigma stands for deviation, Sigma squared by.  
And this is a peak variance of the portfolio, it's going to be equal to sorry before thinking about the variance of the portfolio, the return on the portfolio, yes, previous slide the return on the portfolio of the portfolio is going to be.  
Wait one. Oh, wait on. Let me this one. Wait. Yes, wait one.  
Thanks return one plus weight two times return two. Make sense.  
This is how we are gonna get the. So simple.  
We want to know the return and we want to know the values. Why do we need to know this? Because at the end with the variance is with the deviation is how we are going to measure risk. Yeah, stop.  
Second spoken 99 in 10 in the portfolio we will see how this risk of the deviation will be here. Make sense.  
And variance is equal to weight 1 square variance 1.  
That's way through square.  
Yeah.  
Plus.  
Two times weight one, weight 2 covariance between 1:00 and 2:00.  
For variance between 1:00 and 2:00, yes. Do you remember from last class that?  
You should understand everything in this spot. Not understand, sorry. All things that are written here are the same that are written there except this.  
Let me clarify this part. Do you remember the definition of?  
Correlation coefficient.  
Correlation. Last day we went through this correlation coefficient this.  
Covariance. We calculate Walmart and demand is covariance over.  
Deviation one times deviation 2.  
So I can say that.  
Covariance. It's equal to correlation coefficient times deviation one and deviation two. Make sense.  
Are you following me? No.  
Instead of these covariance, I can write.  
Please.  
So instead of these covariance, I'm going to write.  
Deviation one, deviation 2 and correlation coefficient between 1:00 and 2:00.  
Make sense? Yeah, and that's all part of the top equation. That's all part of the first equation. This is. This is the equation that gives you variance on a portfolio.  
How are we going to calculate the the variance on a portfolio?  
You got the equation that at the end we are going to go deep into this equation today.  
I wrote this equation last day. You remember at the end of the day that I wrote this because I told you we are going to write this a lot of times and I want you to see this yet.  
OK, any questions? Yeah, this B, this is the correlation coefficient. This is a number that variates from 1:00.  
2 -, 1 from 100 to -100% and the 12 is just like no 1212 correlation between 1:00.  
I'm true.  
In case there will be 3 stones, I can have a relation 131223.  
Yeah.  
And again.  
So thanks.  
Thanks. Thanks. Thanks. Make sense.  
OK, let me show you one example and this example is so, so, so important.  
I have two stocks. Let me call one stock US and another stock Japan is the worst name possible for a stock, but.  
US.  
And yeah, but and I have expected returns.  
And I have.  
Deviation, yes.  
Volatility and deviation stands for the same. Volatility, deviation and risk stands for the same in this case, yes. Careful with language. You can start with exercise problem set 2.  
And you will say that there are times that there is written deviation, there are times that is written volatility. In order to calculate variance, what we should do rise to the square. Make sense.  
30.6 percent, 30.6% for US, 50% for Japan and variation is.  
50.4% for US and 23% for Japan, yes, and correlation coefficient is 27%.  
Oh, Relatium is 27%, yes.  
And because I know correlation coefficient, I'm going to calculate covariance. Oh, I'm going to calculate covariance by doing correlation coefficient times.  
Deviation one times deviation 2 makes sense.  
What is this covariance?  
This is a coalesce. Let me.  
I think I have. Oh, I have. I have luck.  
Variance.  
When I have calculate this covariance between one and two.  
Yeah.  
OK.  
Can you see correctly blackboard? Oh.  
I don't like this number.  
Wait, OK, can you see correctly the blackboard I have?  
Wait from US and wait from Japan. Yep, I am told if an investor hold 60% on US and 40% in Japan.  
What are the mean and volatility of the portfolio return? Yes.  
60 and 4060% and if weight on US is 60%, weight on Japan is going to be 1 -, 60 that is 40. Make sense.  
OK, I'm going to start.  
I'm gonna put 15 here.  
And I'm going to start.  
When I write here, I'm going to start with the return. Yes, the return is so, so simple. 60 times return on US makes sense.  
I'm going to fix this one because later we will drop, but this means nothing. I have just fixed this number, yes.  
60 times the return plus 40 times.  
This return makes sense.  
And let me fix also this number.  
So what is the expected return on the portfolio? I'm looking for 14.6014.60%, Yep.  
Any questions?  
Here now what I'm going to calculate what I'm told.  
What is the volatility?  
What is deviation? We call deviation on the portfolio, yes.  
Please before starting.  
This formula.  
Is for the variance. Make sense? So the volatility is the square root of that.  
Yep.  
Don't let me start with them.  
Equal SQRT parenthesis.  
Do you know in Spanish what is a chorizo?  
Torito Torito Torito is not sauces. Torito is pepperoni, but it's not pepperoni. It's Spanish, but in Spanish.  
Oh, let me. Thanks. Let me put silence.  
You say here, let me show you.  
Games in strings, yes.  
If I were German, instead of me talking about sorry, I would be talking. I would have been oh, if anyone.  
If anyone loves animals, I love animals too. And if anyone is vegan or vegetarian, please forgive me. But this has to do with the Spanish culture, yes. If I were German, I would be talking about sojuces.  
But you see that sorry first games in streets, no?  
When talking about portfolio theory, I will call what I'm going to write a big choice.  
Like so set up, we are in space, so Tolifo. This case the Tolifo has three streets, yeah.  
Cholito. Cholito is also someone at Ross. If I take your computer, I will become a Cholito. I'm going to write a picture.  
So this is just to say that I was gonna.  
SQRTSQRT of.  
60% times deviation. I'm going to fix deviation.  
Rise to the square what I have just written.  
This one these times this raised to the square. Make sense.  
Let me go for the second part of the chorizo second stream.  
40% times.  
23%.  
Fix it rise to the square. Make sense.  
Yes.  
Very.  
What I'm doing there is.  
The first one, I mean these and this is the same.  
It's the same. For example, 3 ^2 * 2 square, sorry square, square, 3 ^2 * 2 ^2 is the same as same 3 * 2.  
Square.  
9 * 4 is 36.  
3.2 9 * 4.  
It's 36, 3 * 2 is 6 is 3 * 2 is 6 square 36.  
OK.  
Don't worry, it's worse worse than this mobile. It mean not knowing that 6 square is 36.  
So don't worry, OK, last last look this two times times with one, two, with one, with two, go by it.  
Plus two times.  
Weight one, weight two times covariance and I'm going to fix covariance, yes.  
Are you women?  
So.  
So does this make sense?  
You see US 30 and 15, Japan is 15 and 23.  
Portfolio is around half and half, more or less, yes.  
And where is the specter return?  
40%.  
And risk.  
If you see deviation, what can you tell me regarding deviation in this portfolio?  
Deviation is just what can you tell me this bit regarding return? That is the average, no?  
It's just the evidence.  
But what can you tell me regarding deviation?  
This portfolio, this is a big spoiler of today's class. Don't worry, you don't need to see it now, you are going to see at the end. But if you see this deviation is lower than both.  
So in terms of risk, in terms of risk, this portfolio give me more return than US.  
It has more return than US and a lower risk than US. So this portfolio is better.  
Than US itself, yes.  
You see what I mean?  
OK, let me continue. Please, I want your attention.  
If I write, if I take weight from US 0%.  
Weight from US 0% Weight of Japan is going to be.  
100 And what is the deviation of a of the portfolio? What is going to be the deviation on the on the portfolio?  
It should be 23%.  
And what should be returned on the portfolio 50%? Let me put it.  
Does this make sense on the other hand?  
If weight of US is 100%.  
What is going to be weight on Japan 0%? Yep.  
OK, please. I'm going to start with zero. Yes, I'm here. I'm going to say that this number is going to be.  
0% plus.  
1%.  
And I'm going to copy and paste this here.  
And I'm gonna take this and draw.  
You see what I'm doing?  
What I have just done instead of taking one portfolio I have draw, I have calculate 101.  
Starting zero, it finish in 100 and there are steps of 1% in between.  
Make sense?  
What I'm gonna do?  
I'm gonna take.  
This.  
I'm going to take this and I'm going to draw.  
Cutter. I'm gonna draw.  
I'm going to make this smaller.  
Make sense?  
I would like.  
I would like this to be.  
I want to do it say.  
Oh.  
He was talking. No. Oh, he was calling in a call, probably. He thought nobody was here.  
Hey, I.  
I would like to do this dinner in my computer. I didn't know how to do it here. Sorry, but I don't know how to do it, whatever.  
Why? Why this is because it's point.  
Because I want to do it, but let me just start design.  
Colour. Not a matter of colour, a matter of its point. It's I should see how its point is being represented.  
That's.  
Here, there is not a point in this.  
Sorry.  
Whatever all of you see that this is a point.  
What does each one of sorry here? What does this axis represent?  
What does this axis represent? Deviation.  
And what does this axis represent? Return. So simple to understand which one is this point? This point has 50% on deviation and a return of 30.6.  
This point is US. Make sense.  
Which one is this point?  
Japan.  
And the portfolio, the portfolio I was.  
60% on US and 40%. The return on this portfolio is 14.1, yes, so this portfolio 14.114.1 this portfolio is around here.  
Yes.  
These portfolios are around here.  
Over is around here, yes. What is the return on this 50%?  
Can you draw American line?  
Here, if you consider a vertical line, if you make a row a vertical line, you can see that there are a lot of points that are on the leg.  
What is the point with all these boys that we need?  
Adding more return on these portfolios, all these portfolios need you.  
Less risk. You have a portfolio with more return and less risk than US itself. Except once you are on these points.  
Why? Because I am having more, more risk, more return, but I am paying more risk.  
On all these, all these points, there is no play. Personally, I would prefer all these points. Personally, I would prefer all these points than US itself. Why? Because they give me.  
More return having less risk. Make sense.  
Let me draw this.  
On the block.  
Here is return.  
Here it is.  
Risk deviation. Yes, I have no US. I have no Japan. No the line that that is that there is the line that I have written is this no what I'm telling you.  
I'm telling you that giving this risk for you guys, I have this riptor.  
What do I prefer? The higher the return, assuming the less risk possible, so.  
So if I can choose between this point and this portfolio having same risk, which one I would choose?  
This one this perform is better.  
If you told me choose between this one and this one, then I would tell you it depends on my risk profile. But if you tell me to choose between this and this, I will always choose this one.  
Among all portfolios, there is one portfolio here that we are going to call it MBPMBPMBP stands for.  
Awesome.  
And BMVP minimum variance. Minimum variance for both. I did it. Sorry for sorry for Luis. Minimum variance for both.  
The minimum variance portfolio and then all portfolios that are above both in prepositions. I am Marisa, no all portfolios that lie about.  
Are going to be told that lay on the ETCM frontier. What is the ETCM frontier or portfolios?  
That are over the MVP. How are we gonna, how are we gonna call that line?  
How are we going to call that line? Investment opportunity set. Investment opportunity set pays all possible performance.  
This is this portfolio is 100 US 0 Japan no.  
Can I buy 150% of US?  
About the question, weight plus weight by by 150% on US.  
How much would I buy of Japan -50%? Can I buy -50%?  
I have your attention. All of you understand what I'm asking. Can I buy -50% of something?  
Yes, but we will not be buying. We will be selling and this is all short.  
Instead of buy, you sell and you are selling something because you are going to buy in the future. But let me call it short. Make sense. Sorting is instead of buying. Sorry, sorry, instead of buying.  
Second, sorry, time is being in a long position. Long sorry is in a short position thinking about time.  
This is just to say that this point is Japan, this point is US. Can I go shorting? Yes, and this will go this way. Will it make sense to sort Japan?  
Absolutely no. Why? Because Japan. But we make sense is shorting US in order to buy more Japan. If we short US in order to to buy Japan, what we will be doing?  
A very, very team. A very team. A very team is assuming that focus, but they know that I want you to hear before the first time. Make sense, OK?  
OK, let me.  
Move here what I have done. First thing I have done is get these numbers and then second thing I have done is change the weights and get this graph.  
Make sense and considering this graph I have told you.  
That what is the investment opportunity set, minimum variance portfolio and efficient frontier and efficient frontier. Make sense.  
In the graph, short, short minimum variance portfolio and the efficient frontier make sense.  
Yes.  
OK, all of you are with me.  
I want you to be concentrated.  
I want you to be conscious. I'm going to change this.  
Variance on the portfolio is equal to weight 1 deviation one raised to the square. Make sense.  
Plus .2 radiation 2.  
Right to the square.  
Plus this.  
Two times.  
Or let me just read right here. Correlation coefficient, yes.  
Correlation coefficient in one or two times. Two times, yes.  
Weight one, deviation one, yes.  
Times way through variation.  
Are you following me?  
It's a question and that equation is the same.  
It's exactly the same.  
And now I want you to remember.  
Sure.  
And that's not what I'm saying.  
You understand the way I'm going?  
A + B square is.  
A ^2 + B ^2 + 2 * A D Yep.  
Then a -, b square is a square plus B square -2 times AB.  
Make sense?  
All of you are with me.  
No.  
Let me call.  
He's me.  
This is A again and this is B again.  
Yeah.  
The question is.  
What is?  
I have a seat over there. I'm happy of being dressed in blue, but I don't this makes everything there. Sorry, sorry for this.  
Do you see the question?  
Maybe say what if?  
Correlation coefficient between 1:00 and 2:00 where one? What if both stocks were perfect correlated?  
5.  
The correlation coefficient where one?  
This would be +1, yes.  
But what I can say, I can say that variance on the portfolio is equal to.  
Weight one deviation 1 plus weight 2 deviation 2 rise to the square. Make sense.  
Yep. So I can say that.  
I can't say that.  
The variation on the portfolio is the weighted database.  
What is the return on the portfolio? The weighted balance? Weight one? Sorry, return one.  
Last way to return.  
Are you following me?  
In both, in both stokes, in both stokes were perfect correlated.  
I can transform the variance on the portfolio on on.  
The weighted average of each deviation.  
Make sense?  
And let me go.  
To perfect negative correlation, yes, expect the return on the portfolio would be the same. I'm going through same way. I can say that the variance on the portfolio is weight 1 deviation 1 minus weight 2.  
Variation, yes.  
Dude.  
Let me go. Let me move into the excel.  
Let me move into the exit, yes.  
Here I've got correlation. First thing I'm going to say, what if correlation were of 0?  
If correlation were of zero.  
If correlation were of 0.  
If correlation were of 0, see what happened. Do you see what has happened? If correlation were of 0, the the line US and Japan stay in the same point. US and Japan are not going to move, but if correlation.  
Where 0 look what is going to happen.  
It moves to the left. There is. Let me say one word that I will repeat again and again and again. There is more diversification.  
Yeah.  
Correlation was 27%, yes, as I increase correlation as both stocks looks the same, behave the same, less diversification is possible.  
6070 and look if correlation is perfect.  
What is this equation? Correlation is perfect. What is this equation? The question is a line.  
Or listen is perfect.  
Correlation is is perfect.  
We cannot diversify away the risk. We cannot create a portfolio that is no efficient frontier. We cannot create a portfolio that we need more return than US having less risk.  
Makes sense.  
Yeah.  
Do you see this in maps and in actual?  
Today, let me repeat, I told you at the beginning, face important. Why? Because and they will warm you over this.  
Understanding fully understanding this class. It's important and you are not going to fully understand this class now. You should take it, review it and try to do the number five years old. I don't have any problem repeating, repeating and repeating. I will write.  
I will write this formula more than four or five times in order to keep. Today we don't need present value formula.  
Then we don't need person value formula. Oh, I have. I have used it when calculating the ball. I want to tell you at the end of the course all the days. I all the for this part of the course, for this part of the course, this formula, the variance of the profile is so, so important and we are.  
Use it again and again and again, several times from different perspectives. Make sense.  
OK now.  
What I'm going to do, I'm going to change correlation 60%, 20 zero, yes.  
Could have two stocks negative correlation. Yes, they can. Minus 10%, yes, -20% -, 50%. Do you see it? -60% -, 70.  
-8 -, 90 Don't you see it? -95 -, 96 -, 99.  
I lose 99.999. Don't you see it?  
It's always emotion, you see it.  
What has happened? What has happened?  
What is this?  
This is a portfolio.  
That is a portfolio, yes.  
And what is the?  
Risk from that portfolio. What's the risk?  
Perfect. With a big correlation, I can combine these two spokes in a corporate that has.  
That is risk free. One idea and this idea goes farther. The more diverse, the better. The more diverse, the better. The more different we are, the better. We are the same, not only boring.  
Is Greece.  
If all of us looks the same, we are not only Puerto Rico Pedro Campo.  
Don't know if maybe are people here. Garth is for me. I don't know if anyone else is for me. The more the better, the better.  
The more diverse, the better. And if there were anyone from Africa, better. I'm from Rwandan, better. I'm from China, better. Make sense.  
We will see this thicker with more. Now we have true stocks and in case these true stocks work, that's the opposition, you can create that zero risk or point. Make sense.  
We are almost. We are almost done. We are almost done.  
The investment opportunity set and what if there is perfect correlation? If there were perfect correlation, if correlation is perfect?  
There are no gains from diversification and I can create a portfolio.  
Not sorry, there there are no gains from diversification and the variance on and and the investment opportunity set will lay on a line. Make sense.  
And if correlation were negative and perfect negative correlation.  
Not only I can get gains from diversification, but also I can look for a portfolio that had that is risk free. Makes sense. Perfect negative correlation. Perfection only exists.  
Only existing theory. We are not going to find an asset and another one that has perfect negative correlate that is perfect negative correlation correlated. Oh we we can have calls and puts. A call with one asset is perfect negative correlated with a put.  
But we will talk about this later.  
Any questions? Let me oh, here you have the graph that I have done with Excel.  
And let me.  
Do this exercise quickly, yes. Assume that the correlation between the US and Japan is perfect negative. These two stocks are perfect negative correlated. Determine the weights, the portfolio weights in Japan and the US that create a 0 risk, yes.  
Makes sense.  
So quickly if they choose those are perfect negative correlated, yes.  
Variance on the portfolio. Variance on the portfolio is.  
Just the difference weight one times variation minus weight 2 times variation 2 makes sense.  
And I am told to find the portfolio that is perfect negative. What are the weights? Yes.  
So what is the variation of the portfolio I'm looking for?  
You don't know any agent on the portfolio I'm looking for.  
Easy. And what do I know about the weights?  
Weight one plus weight 2 is equal to 1, Yep.  
Do I know variations? Yes.  
This is a system of two equations. What I'm going to do in order to solve this system, I'm going to multiply. I'm going to multiply.  
In order to solve this system, I have wave one deviation, one plus W2. Sorry, sorry, one is Wave 1 plus W 2. Make sense.  
These are the questions. I have not touched anything yet. So if he is negative or not negative.  
6.  
Uh, like this is the F negative.  
This is the variance on the portfolio and the weights, no matter what is the variance, will always weight one. The sum of the weights will always be one. Yep.  
These match for all portfolios, but I'm looking for one in particular and the one I'm looking for is the one that has.  
Deviation of Ceo.  
But just because we're in one service.  
The issue is here because I'm looking for terrorism, terrorism among all portfolios. I'm looking for the one what I'm looking for.  
I'm looking for this portfolio.  
I'm looking for this portfolio for the one that is there.  
Is what I'm told. Assuming that all the stocks are perfect negative correlated, yes, calculate the portfolio weights in Japan and in the US that create a zero risk portfolio.  
Make sense and.  
Let me so I need to solve this system. I am looking for the weights, yes, and in order to solve this system I'm going to.  
From here I'm going to take this one. Yes, I'm going to say weight 2 is equal to.  
The mediation one over the mediation two times with one makes sense.  
And I'm going to come here and I'm going to say.  
One is equal to Y1 plus Y two that is.  
Deviation one over, deviation two times way two. Are you following me? I'm just solving the equation system.  
There are several ways in order to solve this equation system. Wait, sorry, wait, what? Yes.  
And now one it's equal to.  
Thanks. Well, you won, yes.  
And I can say that weight one is equal to.  
Yep.  
And.  
Weight 2 Weight 1 plus weight 2 = 1. So this is sigma 1 sigma 1 plus sigma 2, yes.  
Here you have the weights knowing the issues.  
Here you've got the weights, knowing the issues, and once you know the weights, you can calculate the state that we don't know the portfolio. Let me calculate the weights.  
Let me calculate the weights wave one.  
Wave 2. Wave one is.  
The variation weight one is variation 2.  
Over.  
Yes, what you want is these numbers.  
The other way is 1 minus this one, yes.  
And let me take an advantage. Correlation is -1. Let me check if I have done the well, the numbers. I'm going to plug this here. Yes, look at these two numbers. Yes, yes, look at these two numbers.  
And this is almost zero. It should be 0. This variation should be 0. I don't know why it's not zero, yes, but the number is so close.  
Make sense.  
Yeah, I don't want to change anything and let me put this.  
That's so great. Yes.  
Excerpt size last exercise.  
So.  
Conclusion. Today's the first day. Seriously is the first day we have talked about portfolio theory in a serious way. Last day we talk about it, but exercises like the one we have done today, we will do several.  
Exercises in problem set two. You can find exercise. You can start trying to solve problem set two. What do you need to know? Fully understand today's class.  
Next day we will continue working over all things we have seen today, yes.  
What is at the end diversification of freelance?  
A freelance. The more diverse, the better. What is being with different people? Freelance. You learn at the same time that you teach. The more diverse, the better. If you can combine in one portfolio different types of assets, the result.  
Will be better than having each one of the assets by itself, yes.  
Everything in this part of the course, everything will be about correlation.  
Out correlation.  
Any questions? Next day we will continue.