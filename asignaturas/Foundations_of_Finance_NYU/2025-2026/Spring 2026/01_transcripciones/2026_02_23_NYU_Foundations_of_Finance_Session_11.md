# Foundations of Finance (FoF) – Session 11  
**NYU | February 23, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 25min  

---

# 1. Announcements & what to focus on (very important)

## Upcoming schedule
- **Next Monday:** Stock Exchange visit + review session  
- **Wednesday:** **Midterm exam**  
- **Problem Set 3:** due **this Wednesday**

## Two blocks you must work on (now)
### A) Time Value of Money (TVM)
Start as soon as possible. TVM is not about memorizing — **it is about thinking**.

### B) Portfolio Theory (Markowitz → CAPM bridge)
- Re-do **Problem Set 2** (all exercises).
- Revisit:
  - **Session 6:** investment opportunity set (2 risky assets)  
  - **Session 8:** adding the risk-free asset (CAL / CML)

**Key advice:**  
Use Excel and **play with correlation**. Try:
- high positive correlation  
- zero correlation  
- **perfect negative correlation**  

If you truly understand Sessions **6 & 8**, you have **~80% of the course**.

---

# 2. From Markowitz to CAPM (why CAPM becomes “easy”)

## 2.1 Markowitz world (Portfolio Theory)
With two risky assets \(A\) and \(B\):

### Expected return of the portfolio
$$
E(R_p)=w_AE(R_A)+w_BE(R_B)
$$

### Variance of the portfolio
$$
Var(R_p)=w_A^2Var(A)+w_B^2Var(B)+2w_Aw_BCov(A,B)
$$

This variance formula is the **hard part** of the course: it requires structure and attention.

---

# 3. Risk decomposition: idiosyncratic vs systematic

Risk has two parts:
- **Idiosyncratic risk** (asset-specific): can be diversified away
- **Systematic risk** (market-related): cannot be diversified away

As the number of assets grows, idiosyncratic risk tends to disappear, but systematic risk remains.

That is why we move to CAPM: we focus on what cannot be diversified away.

---

# 4. CAPM: the “simplified world” (beta replaces variance)

In CAPM we keep returns the same way, but we redefine the relevant risk:

- In Portfolio Theory: risk = **variance**
- In CAPM: risk = **systematic risk**, measured by **beta**

---

# 5. Beta: what it is (and what it is NOT)

## Definition
$$
\beta_A=\frac{Cov(R_A,R_M)}{Var(R_M)}
$$

### Important clarification
- **Correlation** is between \([-1,1]\)
- **Beta** is a **regression slope**, and can range from \(-\infty\) to \(+\infty\)

Interpretation:
- \(\beta=1\): moves like the market  
- \(\beta>1\): more sensitive than the market (more systematic risk)  
- \(\beta<1\): less sensitive than the market  
- \(\beta=0\): behaves like the risk-free asset in CAPM terms  

## Why beta of the market is 1
$$
\beta_M=\frac{Cov(R_M,R_M)}{Var(R_M)}=\frac{Var(R_M)}{Var(R_M)}=1
$$

---

# 6. Security Market Line (SML) — must know for the midterm

**Core equation (CAPM):**
$$
E(R_A)=R_f+\beta_A\left(E(R_M)-R_f\right)
$$

Where:
- \(R_f\) = risk-free rate  
- \(E(R_M)-R_f\) = market risk premium  
- \(\beta_A\) = systematic risk of asset \(A\)

Special cases:
- \(\beta=0 \Rightarrow E(R)=R_f\)
- \(\beta=1 \Rightarrow E(R)=E(R_M)\)

---

# 7. Variance split in CAPM language

Standard decomposition:
$$
Var(R_i)=\beta_i^2Var(R_M)+Var(\varepsilon_i)
$$

- \(\beta_i^2Var(R_M)\): systematic component  
- \(Var(\varepsilon_i)\): idiosyncratic component  

We can diversify away the idiosyncratic part, not the systematic part.

---

# 8. Worked example (class example)

A stock **XYC** has:
- Volatility: \(\sigma_{XYC}=90\% = 0.90\)
- Beta: \(\beta_{XYC}=3\)

Market portfolio:
- Expected return: \(E(R_M)=14\% = 0.14\)
- Volatility: \(\sigma_M=15\% = 0.15\)

Risk-free rate:
- \(R_f=7\%=0.07\)

---

## 8.1 Equilibrium expected return (CAPM)
$$
E(R_{XYC})=0.07+3(0.14-0.07)
=0.07+3(0.07)
=0.28
\Rightarrow 28\%
$$

---

## 8.2 What proportion of variance is diversified away?

### Total variance of the stock
$$
Var(R_{XYC})=\sigma^2=0.90^2=0.81
$$

### Systematic variance (explained by the market)
$$
\beta^2\sigma_M^2=3^2\cdot 0.15^2
=9\cdot 0.0225
=0.2025
$$

### Idiosyncratic variance
$$
0.81-0.2025=0.6075
$$

### Proportions
Systematic share:
$$
\frac{0.2025}{0.81}=0.25 \Rightarrow 25\%
$$

Idiosyncratic share:
$$
\frac{0.6075}{0.81}=0.75 \Rightarrow 75\%
$$

**Conclusion:**  
About **75%** of the variance is diversifiable (idiosyncratic), while about **25%** is systematic and cannot be diversified away.

---

# 9. “Implementation” notes (conceptual, not exam-heavy)

To apply CAPM in practice you need:
- A proxy for the **risk-free rate** (depends on horizon, country)
- A proxy for the **market** (an index)
- A time window to estimate beta (depends on context and your position)

Key practical message:
- When estimating beta, the “right” window depends on your purpose.
- Do not overthink extra lines (like Security Characteristic Line) now — focus on **SML**.

---

# 10. Applications of CAPM

## 10.1 Stock selection & alpha
Alpha is the gap between:
- what CAPM implies (required/expected return given beta)
- what you actually observe or expect

Positive alpha suggests the stock may be **undervalued** relative to the CAPM benchmark (conceptually).

---

## 10.2 CAPM as a discount rate (bridge to TVM)
We use CAPM to estimate a **required return** (discount rate), then apply TVM tools:
- Present Value
- Net Present Value (NPV)
- Internal Rate of Return (IRR)

Key intuition:
- High beta → high discount rate → PV falls → NPV can turn negative
- Lower beta → lower discount rate → PV rises → NPV can turn positive

Excel warning:
- Excel NPV discounts future cash flows only; the initial investment at \(t=0\) must be added separately.

---

# 11. Final takeaway

1) The hardest part is **Portfolio Theory variance mechanics** (Sessions 6–8).  
2) CAPM simplifies the world by focusing on **systematic risk** (beta).  
3) For the midterm: you must master the **SML equation** and the intuition behind beta.  
4) CAPM becomes a tool to produce discount rates for **TVM (NPV/IRR)**.  

---

# Transcription
23 de febrero de 2026, 5:08p.m.
1 h 25 min 4 s
OK, understanding Kapemi is so simple. Once you have understood a portfolio theory, most difficult thing from.  
I will bet, I will say that the most difficult thing from the whole course is portfolio zero, yes. And this thing regarding the weights, you can have one asset itself, you can combine two assets in a portfolio.  
And then you should calculate the expected return on the portfolio and then the variance on the portfolio. How the variance behave?  
Is complicated, yes. And because it is complicated, we have moved into, we have moved into.  
Capem in order to make things simple, yes.  
And so we.  
Is not here and also Sophia is not here.  
Yeah. Thank you. Yeah.  
Next Monday.  
Next Monday we have the.  
Stock exchange, yes. And then we have them review their review session. Wednesday we have the meet.  
What you should know for the new two blocks of things on one hand time value of money. The sooner you start working with time value of money, the better because at the end time value of money has to do with thinking.  
And on the other hand, portfolio theory. Please take problem set two, try to do all the exercises and then I will also recommend you to go to session 6.  
Session 6 and repeat it with the excel and play with the correlation. Try to see what is going on when correlation is what. Try to see what is going on when correlation is perfect negative.  
I'll play, yes, and see all the lines.  
If you know how to do this, you have 80% of the. Yeah, what class is going to make you go up to? Like I know you said you focus a lot on.  
I'm not in my period, but like if you go up to this, I mean this what we are going to see today is the continuation of what we introduced last class.  
And this glass closes.  
We've probably set three. Problem sets, scroll set three should be delivered this Wednesday. I'm probably set three. I don't know if you have tried. Yeah, it's a bit complicated.  
Process 3. The part that corresponding with the most complicated part of Process 3 is a correlation part that belongs to Process 2.  
What I mean is that if you have tried and you fully understand problems in the future and there will be some little things regarding the PC market hypothesis that this this will not be.  
Exercises. This would be the question and understanding question that we will go through this always.  
If I were you, I would just focus on what I have said time value of money and a portfolio here.  
Especially lessons 6 and eight, the one where we introduce 2 assets and the one where we introduce the risk free asset. Did you understand that jumping?  
Cappell is simple. Then today we will talk about. We will talk about efficiency. We will talk about charge ratio. Not today before the what is efficiency? What is efficiency? What are?  
At all these things.  
We came after understanding this and we will be just putting things together.  
OK, so one hand then value of money.  
On one hand, that malimony and on the other hand, portfolio few.  
Whistle.  
Deviation and expected return. Yes, withdrawal. I have one asset A, another asset B.  
***** is better.  
The investment opportunity said, yes, instead of just two assets, we can have the whole market.  
I read, read as it.  
ISR ratio was called the market, yes.  
And this line that connect this line that connect market with the risk reasset we call it last class capital market line CML.  
Yes.  
What is what we were saying? What? What is the point?  
This is Markovic war for your theory war. Yes, I can have one of it here. Let me draw this.  
Like this. I can have one asset there, yes, and you call it AI can have another asset B, yes.  
There cannot be assets.  
Over efficient frontier. Why? Because if there will be one asset there, efficient frontier will move there. Make sense.  
So all I said start under.  
And capital market line is where you are a rational investor should be.  
No matter how much assets that are in the world, at the end you will always choose a combination between the risk free and the highest sharp rate. Makes sense.  
In this world, when considering risk, we say.  
Risk has buyers has two parts.  
One part that is idiocratic and another part that is systematic. We can diversify away all the part that is idiocratic, but we cannot diversify the part that is systematic.  
And considering this, we move into cabin, yes.  
Here for example we have a portfolio and here variance on the portfolio comes from this formula weight a square times.  
Variance plus weight B square. Variance plus two times weight A weight B.  
All violence make sense.  
And we move into a maths, maths, more simple war.  
Where?  
We we had dream of the ideal she graphic.  
And we just focus on this systematic, yes.  
In busy world.  
Sh.  
There is still a risk reaction. I'm talking about returns.  
We will calculate returns the same way as the weighted of initial term returns, yeah.  
Market.  
It has a return on the market.  
And the point is that in this new world, instead of me talking about violence.  
Yes.  
We are talking about the.  
You are talking all day.  
Instead of talking, please.  
Instead of talk about variance, we are talking about the covariance between the stock and the market.  
The covariance, the stock on the market, the covariance, sugar, the value of sugar. That is the relational police.  
You see what I'm saying? You understand what I'm saying? What I'm saying is that.  
We used to have volatility and instead of looking at volatility, instead of looking at volatility, what are we going to do? How do I behave regarding the market? This is the covariance between my stock.  
Of the ground and in order to normalize this number, we divide by the balance and we have the regression for this and we call it beta so.  
What is beta? Beta is a regression coefficient variance beta on asset A is variance. Sorry, covariance between asset and the market, yes.  
over  
The balance of the market makes sense. It looks like a regression coefficient and it's not a. Sorry, it looks like a correlation coefficient and it's not a correlation coefficient. Why is that correlation coefficient?  
A number that range from 100% to -100%. If it is one, it's perfect correlation. If it is -1, perfect correlation, yes.  
What is a regression coefficient? A regression coefficient is the slow of the regression curve. What is the regression curve at the market I have?  
Yes, and the regression is that I need that to be whole coordinated.  
These two assets are this is low and this low.  
Can variate from minus infinity to infinity, and if the slope is 1, it means that there are they behave the same way. Make sense?  
Yes.  
So beta.  
Is this one beta of the market is 1? Yes. And here we go in this new world, the SMF, the security market line.  
What is the security market line? The security market line is the capital itself.  
Where all the assets should lay on, all assets should lay on the SNL if the market is a reason, if all assets are well priced.  
And the equation of the security market line. The equation of the security market line is.  
Speaking rhetoric, yes.  
Is there with 3 plus beta? We don't have a beta 8 times we don't on the market minus the risk.  
Makes sense.  
This is the equation of on a line of. This is the equation of a line. For example, I said A will have return on A and will be here as a B return on B.  
And we'll we'll be there as it be.  
Expects more return than the market, so beta on asset B should be higher than the market. On the other hand, asset A expects less return, so beta should be lower than one.  
Lower than in that of the line. Make sense. Absolutely. I I don't know if I can repeat, but maybe not.  
I said in the example.  
As it be as higher, we don't on the market.  
And so Theta is higher than Theta of the mark. Theta is higher than what?  
On the other hand, I said hey.  
So is less we don't than the market so.  
So beta on as if A is lower than beta on the market is lower than one. It's always moderated, right? So that is just going to be beta beta of the market.  
We always be one. Why, Jessica?  
Jessica, because if you calculate data on the market, you will be calculating the covariance between the market and itself. That covariance between the market and itself is the variance of the market.  
And finance of the market over finance of the market.  
In other words, how the markets moves regarding itself.  
With slope of one.  
OK.  
What are we gonna do today?  
We will see some applications of the government. We will go quick through systematic and idiosocratic risk.  
I will just say 2 words regarding implementation that I would say 2 words. I don't want to spoil the two words but these two two words at the end. I don't want to do things but always I do it. I I would say that these things regarding implementation you don't need to know for the for the.  
The midterm because it.  
Some for the midterm you don't need to think too much in these classes and what I will do is explain the. I will explain you things that will help you understanding more things.  
If something includes more difficulty, I will tell you you can forget about this. That is what I'm going to do with the implementation, yes, and then application. That is what we are going to be looking for.  
OK.  
Systematic risk. This is a a summary of what I have already said. What you should know. You should know for the midterm the equation of the ESML. It's a lie. What is ESML?  
Rispoon rate plus beta times market premium. Rispoon rate plus beta times the difference between the return on the market and the risk rate. Yes, if beta is 0 risk.  
If beta is one, we don't do the math. So it's a really, really simple equation. It's the position of a line and it's a simple equation. What you have done when you have complete two or three exercises with this, you don't need to memorize it because you already know.  
Yeah.  
Beta Beta measures systematic risk.  
How do I behave regarding the market? Yep.  
OK.  
Beta is the covariance. Beta is the covariance between.  
And I said so.  
So.  
So.  
I want you to understand, yes.  
I have variance.  
Oh, I said. Hey, yes.  
Barry and soon I said 8.  
Can be divided into two parts, yes, one part.  
That is systematic and another part that is idiosyncratic. The only part we can calculate is the systematic.  
Because of Kappa, yes. So variance and I said a.  
Has two buttons.  
beta squared.  
Thanks. Thanks on the market, yes.  
Last.  
Lady of.  
Make sense?  
If you substitute.  
Did you substitute?  
Better. It uses the you better.  
Here.  
Did you substitute beta?  
Here.  
You will see that that the equation is the variance has two parts, the covariance part and the ocean graph. Make sense.  
We are going to use this equation only when someone asks us about the Hesigadi Park. How much is the Hesigadi Park? We cannot know the Hesigadi Park, so we should go.  
When someone asked on mediocrity, we should take the variance on one hand, we should take beta on the other hand, and so on. Yep.  
OK, let's do this example.  
There is one stock XYC Internet stock has a volatility of 90% and a beta of three market portfolio has an expected return of.  
40 percent, 14% and a volatility of 15%. The risk rate is 7%. Yes, first question is what is the equilibrium expected return on the stock?  
And then what proportion of the variance is diversified away in the market portfolio. So we should calculate which proportion is diversified away idiosyncratic.  
So let's calculate first what is the equilibrium spectral return.  
One of the most one of the difficulties you can find on the on the midterm or on the final is that you have more data than what you need.  
That you have a lot of data. What I'm asking is just for something simple, but this happens in normal life. You don't need to use all data normally. In this case, let me see.  
Volatility.  
Of 90%.  
Meta.  
Of three.  
Market portfolio.  
40 percent, 14%.  
Volatility of.  
Of the market of safekeepers.  
And there is Ray.  
Is 7%.  
First thing I am asked, what is the equilibrium expected return? How can I calculate the expected return on equilibrium?  
No one.  
How can I get it?  
We are in company. I know better.  
And also I know the risk rate and I know the return of the market.  
So I have all the ingredients. How can I calculate?  
The specter return on my stock by applying the cap M by applying the SML by calculating the specter return giving the SML equation, yes.  
So question a expected return.  
Would be.  
Risk rate plus.  
Beta times market premium. The market premium is return on the market minus.  
Restorate.  
And this will be 28%. What was the volume of that they expect to return?  
Sure.  
Yes, ma'am.  
Yes, and the formula was.  
Rescore 7% less.  
Beta times market premium. What is the difference between the registry and the market? 40 percent, 40% minus 7 percent, 7%. So at the end it's 7% and if there is rate plus beta times the market premium, that is another 7%.  
Totally. Make sense.  
B What proportion of the variance is diversified away?  
OK, let me calculate first.  
The variance, yes, the variance of the stock is.  
Volatility price to the square and this is.  
100%.  
This is all the variance.  
Yeah.  
What we should do? We can we should calculate which part of this variance is systematic.  
How do we calculate the systematic part?  
By doing.  
Systematic is the.  
Systematic part by doing.  
Beta square times volatility of the market.  
Squared times the balance.  
Yeah.  
Are you follow me?  
You done? Yep.  
20.25% and.  
Which part will be idiosyncratic?  
Oh, total minus the systematic.  
60.75% We can calculate this in percentage in percentages.  
If the variance is 100%, this is going to be 25% and if the variance is 100%, this is going to be 75%. Make sense?  
So which part of the risk?  
Can we diversify away? We can get rid of the 25% of the risk.  
Can we get rid of everything?  
Now because there is a systematic part if there is a crisis.  
We will be. We will be in, yes.  
Who can?  
How can if there is a crisis, how can we be safe?  
Post about watermath. Do you know watermath?  
Nope. Guard is an investor. He's a really known investor. He's from Oklahoma.  
He's called also the Oracle from Oklahoma.  
There's a head away. He sees his phone.  
This might be bad, I think.  
And Walter Buffett thinks, yeah, he thinks that a crisis, there is a correlation about to happen regarding AI, regarding some companies.  
That are highly over by. How is he edging? Not sure he's he has sold. Is he liquid? I mean.  
Did you have gas?  
The stops can go down that that will remain.  
If you are in and there is a crisis, it's really hard not to go with the, not to go with the, with the, with the floor, yes.  
There is a form. All companies should publish all the stocks they have in their balance sheet.  
It's worker. Water method has families. One week ago he's.  
Portfolio on last quarter, yes, and he has sold more than 75% of.  
What I'm saying, what I'm saying are facts. Warren Buffett has sold 75% of his holdings on Amazon and he has more than 300 billion.  
Only his portfolio is around 250.  
270 million and he's yes.  
Treasuries and casts more than 300 B.  
It's an incredible big amount of money in cash.  
Makes sense. I have. I was working. I was looking at these numbers half an hour ago.  
Any questions?  
OK, let me.  
Document session.  
Yeah.  
OK.  
Now regarding implementation, how can we or what do we need in order to work with Capel? What do we need? We need at risk we ask.  
Where are we going to get out of the risk rehearsal?  
Why is there mysterious?  
Do you ask me about please, what is the risk reasset or what? Or if you are asking an interview about the risk reasset, what is the risk reasset?  
If you ask me about the risk, I will tell you that the 10 year treasury, because I'm in Europe. If you're in the States, I would say that the year.  
The pressure will both the 10 year. Why? Because there is the new movement, the new movement. Also you can talk about pressures if you are thinking about a two year or sometime investment.  
Catches go to the we will talk about the.  
4-5 weeks at the point is where do you? Where would you take the risk rate on both treasuries? Yep.  
Also, you need the market.  
What is the market? Where do you will get the market? Again, if you're in the States, you will take an index, a speaker for example.  
Also when talking about beta.  
In order to calculate covariance, you will need.  
A time laps.  
How much time are you going to take? One month? Two months? Three months? A month? One year?  
Let me.  
I want you to understand this.  
Please this part I want you to understand what I'm gonna say, yes.  
Risk rate plus beta times return on the market minus the risk.  
Yes.  
At the end, what are we calculating?  
All right. What are we going?  
What are we going to do with this rape?  
Why are we going this? What are we going to do in this way?  
What are we going to do with Israel?  
With this rate, with rates, with this course, we are just going to do one thing.  
A making person man of this, so at the end.  
I will need this rate in order to plug this rate here, yes.  
What is the question that I'm asking you?  
How? How many? How long?  
Are you gonna be calculating covariance?  
For how long? Yeah  
It was the pair.  
And please, I want you to understand what is your position with money? You are buying or selling?  
Just.  
You buy, you buy, you buy the price you will want to pay. You are buying this the lower.  
In order to be this price, the lower the return, the risk should be the higher. So better if you are buying, if you are buying.  
Better should be the highest the possible.  
The highest possible. Make sense. So how long are you going to take?  
You're going to take the time that we make better if you are buying the higher.  
Let me put it in other words.  
Bye.  
A piece of land. Yes, I am buying a piece of land. What I would say that because of the weather, because of whatever this piece of land.  
We have lot of risk. I mean I can farm, I can get outing, I can make weddings on the on the place, but because of the weather probably last year roughly too.  
True, that is because you were lucky, because there is a lot of uncertainty. The risk is so high.  
On the other side, if I were saying what I would say, future cash flows are absolutely secure.  
Why? Because I don't want to get the highest price. Makes sense.  
So at the end, at the end.  
When talking about beta, we are talking about risk and we are talking about return and at the end we are talking about the discount rate that we will apply in overall.  
Futures.  
So.  
Two months, three months. It would depend on your position. It would depend also on common sense.  
OK, you have.  
You have historical data from SP500, yes, and you have historical data from Google.  
How will you calculate better by doing the regression line? Yes.  
One absolutely important thing.  
Don't think about this slide too much. Don't overthink. Why? Because in this slide I will never ask anything regarding this slide. In this slide you have another life, security characteristic life.  
How many lines do we have? We have the capital of each line, we have the capital market line, and we have the security market line. Yes, in all these lines, what do we have? Return and risk.  
Yes, forget about this line. I don't want even to mention, I don't want to talk about security characteristic lines here. Why? Because in this line we are not going to use it and we are in front of the market and I don't want you to get confused.  
Yes, so forget about this is life. How will you get better? If you have the market, you will come with the relational life and the slope will be better and alpha will be the length.  
We're going to talk about that fact just right now, but please don't get confused and don't get. Don't try to memorize what you should know regarding lines, yes.  
Two, the most important one is security market line, and security market line is the campaign itself. And then you should know that we are right to captain from Marco B theory or portfolio theory.  
But from your feeling, you have the market. How would you come to how would you call the line that anyone would want to capital market right? And if you don't have the market, you have that's two assets capital location line.  
I can't tell what this reminder and I'll have the ladies and for the second.  
Yeah.  
I don't want you to spend too much time in this life, this kind.  
okay  
They say 16 months of data, but you understand what I have said.  
If you are buying, if you are selling, it will depend.  
One example, forget about this example. Also if I don't remember in problem set 3.  
I think that you have one exercise like this.  
If you don't do it, nothing, nothing wrong happens. Yes, you don't need even to do it.  
OK, SEL applications of copy.  
With summary, what are we gonna do with Kapem?  
Calculating, we will calculate a discounted rate, so we will take.  
That is called to rape.  
And we will move into then by little money, so simple.  
First idea, stock selection, yes.  
What is Alpha?  
What is alpha? The difference between what is expected?  
And what I get, yes, I expect from the company and I get from reality. An alpha tells me if a company has a good alpha, positive alpha.  
This means good news for the managers.  
But.  
Please let me explain this.  
What is?  
I have say that a positive alpha, positive alpha.  
And their price. I want you to understand.  
Imagine that.  
10%.  
Sure, half that is counting rate should be 10%, yes, I may have another file from your pay.  
Real is 20% make sense.  
Are you following?  
Please, all of you, I want your attention.  
I have a stop. I have a stop.  
Is 100 euros.  
The pressure of this talk, yes.  
This stock will be well priced.  
No.  
The dividend considering a perpetuity, the dividend should be of.  
10 euros, yes.  
Make sense?  
But what is happening?  
What is happening?  
That because.  
There is a positive alpha of 10%, yes, the dividend instead of being 10 euros, the dividend is.  
Play.  
Yes.  
The dividend should be 10% at least 20%. The dividend is 20 euros, yes.  
The resident is 20 euros, but.  
This should give this were well price an alpha, sorry an alpha expected return of 10%.  
So this price, this price instead of being 100 should be.  
20 over 10%.  
I said.  
This price, this is a perpetuity, yes, this price should be of 200.  
Sohadre.  
Urist.  
So the price is 100 and because this company has a positive alpha of 10%.  
The price is 100, but it should be 200, so because it's 100 and it should be 200 is under price.  
Makes sense.  
Why I have go through this slide through this way? Because what I want you to fully understand from today's class what I want you to understand is that.  
We will use caffeine in order to calculate this code to break for the other one.  
Where are we going? 10 value of one. Cafe needs more, 10 value of one. And what about portfolio theory? After the meantime, I will tell you over and afternoon.  
Any questions?  
OK, uh.  
Active and passive strategies.  
OK, an active strategist trying to beat the market.  
In theory, in theory is not possible to beat the market.  
Why? Because if you can beat the market, your return will place the market over your return. But in practice there are managers that get positive alphas that whatever you can forget about this slide, yes. And on the other hand, this one is.  
Absolutely, absolutely, absolutely important. This is like.  
Doesn't shows you anything new. What are we going to do? We are going to take from CAPM the discounting rate and we will use CAPM in order to calculate 10 value money. Can you close the door please? Thanks Garth.  
So.  
The.  
I have.  
I have this business plan.  
Yeah.  
I missed.  
1000 and I will get in three years 300.  
In four years, 600 and in year 5900, yes.  
I have this business plan.  
It's a business plan, but if I invest 1000 today in one year time, I will not get anything. In two years nothing, but in three years I will get 300, 300 and 900 in year 5.  
So if I sum all cash flows.  
I will get a positive amount of.  
To have 800, yes. If I sum all cash flows, I will get 800, yes.  
OK.  
Should you undertake the project, it will depend. It will depend on what on the expected return. I will require on the risk the project has with Kapem talking about expected return and risk is talking about the same.  
So.  
Discounting rate. For example, imagine that the trade has a beta of 1.75.  
Beta 1.75.  
Being the restrain for person.  
And the expect the return on the market.  
12%, yes. No, there is great now in the market and now in beta we can calculate the required return.  
Sam, how can we calculate the required return?  
The same, yes.  
We see rate plus beta times the difference between market minus risk rate. We will use this formula a lot, a lot, a lot. After using the formula 2-3 four times, you will get used to that, yes.  
So.  
80% is the discounted rate. How are we going to calculate?  
How are we going to see if we want to invest or not in the project? By calculating net present value, I'm going to use two quickly ways. I'm going to calculate. The first is I'm going to calculate.  
Present value of each, yes.  
One plus this rate.  
Rise to the first makes sense.  
And calculating present value.  
And also present value and net present value is.  
The sum of all these numbers.  
Yeah.  
OK.  
Also, I'm gonna calculate this by using.  
Make present value formula in Excel, yes.  
Net press and value.  
I'd be free, yes.  
Pause.  
Of these values, no.  
Do you agree with me?  
If I can play.  
Oh, last fantasy saying them away.  
Oh, it was Spanish 2 minutes ago. Sorry.  
OK.  
Let me copy and paste format.  
This is not the same number.  
Why?  
Important thing with Excel garbage in if you introduce garbage garbage in a formula what you will get.  
No.  
Importancy.  
What are we calculating by calculating the present value, present value of future values?  
Careful because this 1000.  
It's not. It's been paid today. What is present value of 1000 today? 1000. That means you want to use this formula properly.  
You should take this calculate net present value of future values and.  
Substract this one.  
And you do this.  
OK.  
Make sense?  
You understand what I'm saying, what I'm doing, what I've done is so quick. I have just calculated a discounted rate and once I know the discounted rate, I have calculated the present value.  
And if I calculate net present value with this rate is negative, so this 1000 will be.  
B.  
Better.  
Somewhere that will pay me an 80%.  
I would prefer to invest this in an 80% rate than anything else. Make sense? Let me continue.  
Oh.  
Yes, this is what I have to agree. And what is beta? What is the project where less risky? It's instead of 1.7, it's 0.5 beta.  
That is going to rate would be 8%.  
And net present value will be positive.  
Yes.  
What else can I do?  
This is 8%.  
This is positive. On the other hand, if this is 1.5, for example, this is negative. Yes, what all? What else can I do?  
I can look for the rate at which net present value times from zero, sorry from negative to positive. Yes. How can I look for this rate?  
What is this rate?  
The internal rate of of return. I can calculate the IR. Let me calculate the IR.  
Ayada of.  
This number and I.  
40.77 looks 40.67. Yes, what if I plug they are are here net present value should be.  
See. Make sense.  
This is correct and let me this let me leave leave base with 1.751.75 makes 80% and is higher than the other makes net present value negative, yes.  
Expected return higher than the IRR will same as saying that the present value is negative.  
Yeah. Any questions?  
So mid present value.  
And also we can work with the IRR. That is what I have already told you.  
Summary at the end.  
Think and review all portfolio theory, CMLSML and we have what we have done reaching this point is simplify our life. How getting rid of all the idiosyncratic.  
Part. We have just focused on the covariance. We have just focused on beta.  
Second idea, what we have done is just getting a reference for discounting rates for working later with time value of money.  
Any questions?  
We are gone. Problem set 3-4 this Wednesday.  
And yes, save this.  
I'm so happy of having voice. My voice was.  
I'm gonna run. I'm gonna run to my house and start sleeping. Do the same as Marie.  
Yes.  
And to everyone, but to you in particular, thanks a lot for having come with this.  
What I say in Spanish is that Sophie is also ill. I will take into account to Miss Marie, but I will not take into account to Sophie.  
Is yes, Tendre Cuenta, not Tendre Cuenta. Take into account.  
On Saturday I sleep 16.  
Hours. I wake up at 8:00. I take breakfast. I went into bed. I was sleeping until two. I wake up with my wife. My wife was also ill. We wake up together.  
We had lunch with the kids. We went back to bed till 8:00 in the afternoon.  
I start on Wednesday. We were. I don't know who bring it here, but we have had the same. That's what I'm saying.  
Yeah, I'm evil.  
I'm going to close this. How are you doing, Garth? Please.  
In the start. So uh, when you're talking about in the start of the class, when you talk about beta, um, you were saying beta like when beta is higher than one, then your returns are more in the market versus that much in that as well. But isn't data about volatility and?  
Not return like beta is more about if the stock is volatile, right? Yeah, it's volatility. Yes. Volatility is risk, yes.  
But not volatility as variance, volatility as covariance.  
Oh, OK, OK, OK. I didn't change. No. But then The thing is that if it's called quality like as covariance, covariance with the market, right? Like then.  
Then this, how is it about returns? Risk. We're talking about stocks will always be volatility. The more volatile, the riskier.  
Yeah, but what does what does that mean here? Is it like variance or is it? I mean if you if you are talking about portfolio theory, yeah, it's variance if you are talking about.  
Kapem OK is beta. Beta is covariance. So variance with the market. Oh, because volatility that means two different things in this. So it will just be. Thank you so much. No, no, I mean.  
If they are not asking themselves this question, it's because they are not properly understanding. We are calling volatility two different things and during this course I will use the word.  
Risk to talk about so many different things and this is one of the most.  
Important, complicated things regarding finance. What is finance? Uncertainty. Try managing an uncertain feature. How do how we will call uncertainty risk and then?  
You should.  
Market risk, credit risk, interest rate risk, reputational risk, volatility, beta. But we're talking about the stocks risk will be.  
Yes, yes, movement, yes, in in portfolio theory, in portfolio theory is variance. But you can say, oh, variance regarding variance or variance regarding the market. Yeah, yeah, and then that is capital, the balance.  
But let me call it also variance.  
I know that we are distinguishing between variance and covariance, yeah.  
But if we are talking about the stocks balance, yes, because later you will see that we are talking about credit risk.  
Great risk would be default and default is something bad. But variance itself is not bad. Variance is if things go well, I'm going to be really happy. If things go bad, I would be more.  
Very, very unhappy, yes. But this is the the point, the click. Yeah, the highest high reward. Remember we spoke about like the higher the risk and the higher the reward and the higher the down risk. Yeah, but we're talking about the stocks.  
It has to do with variance. We're talking about getting risk.  
Is default and if and when we will be talking about derivatives if I break my leg.  
Nothing good. There is no upside. There is no upside. We're talking about the stocks. There is always upside. Yes. If I break my leg, there is upside to you. Like if you break your leg, then don't you get a paid leave paid medical.  
But this is because of finance, because of insurance. But but if someone pass away, yes, and same happen with the if someone pass away. I mean when you talk about derivatives we are looking for heads.  
Yes, I'm hating. You do hates.  
Best scenario would be every no nobody dies insurance company. I just I one of the things I decide I desire you is.  
Making insurance companies earn a lot of money.  
Contract. A lot of insurance, having a lot of cars, a lot of houses.  
And healthcare also and never believe, never have any problem with your houses, never have any problem with your car.  
In healthy. So one of the things I decided to do is you to to make a lot of money to insurance companies. We're talking about the stocks.  
If you want, we don't.  
You should pay in risk terms, yeah.  
OK, that was my question. Thank you so much. Well, you're on the way. And are you feeling better now? You sound really sick. I was really, really sick on Saturday. Saturday was a nice sleep.  
Is it like I think, I mean, I have been talking with, I have one friend that is a doctor and he told me he's in, I mean he's far from here, but he was telling me this morning that this is.  
Uh.  
A COVID, a mutation of COVID, but softer, softer. Nobody is dying. Everyone has it. Everyone has it in Spain right now. Everyone is sick. Everyone in university is together. I was also sick last weekend.  
That's everyone's. What makes COVID different from flu?  
Coby was so.  
What do you call it? So contagious. Yes, COVID was so, so contagious. Yes, I'm sure, sure, I'm sure.  
That Liz, Marie, Sophia and me, we have the same time. There are just two scenarios. They contact me or I contact you Sophia.  
And I feel so, so sorry.  
But this life, I mean, we have the we have been with a.  
With everything open, but this is continuous, not like a flu. Yeah, thanks a lot. And you. But you you passed this last week. No, you you you were in. I was. Yeah, I finished last last week. Yes, last.  
Personally, I understand that if you came from abroad that is.  
Tagodia and Toledo hear me. They will hear me. Tagodia and Toledo are the same. They are the same. You have. On one hand, Segodia has only throw my things.  
But the most, the most interesting thing from my point of view is that you go through the city of Toledo, Chegovia and you you have the Catholic Park.  
Then the Jew part and then the Islamic part, all living together in Armory without any problem. And this happened 4 centers.  
You have all the Islamic culture, you have all the youth culture, the Catholic, the church, you have synagogue.  
They were. I mean, I don't know. They have different places. Probably they can argue, but I'm sure they were not fighting all of them.  
Welcome. They got. I don't have glasses. Oh, sorry. You're good.  
I don't have glasses and the room we have. It's incredible. It's so everything is big in this. So and you are not like I can see. See you. Bye.  
OK, OK, OK.