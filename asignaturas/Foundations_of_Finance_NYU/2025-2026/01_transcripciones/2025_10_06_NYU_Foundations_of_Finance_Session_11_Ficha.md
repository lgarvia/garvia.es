## 🧭 **Student Notes – Session 11: From CAPM to Applications**

### 1️⃣ Review of the Whole Course (Pre-Midterm Summary)

#### 🔹 _Time Value of Money_

- Key formula: ( PV = \dfrac{FV}{(1+r)^t} )
    
- Variants:
    
    - **Perpetuity:** ( PV = \dfrac{C}{r} )
        
    - **Annuity:** difference between two perpetuities.
        
- Instruments:
    
    - **Zero-coupon bonds:** no coupons, one payment at maturity.
        
    - **Coupon bonds:** reinvest coupons; same logic as stock dividends.
        
- **HPR**, **EAR**, **Annualized returns** reviewed for both bonds and stocks.
    

---

#### 🔹 _Portfolio Theory_

- Expected portfolio return:  
    ( E[R_p] = w_A E[R_A] + w_B E[R_B] )
    
- Portfolio variance:  
    ( \sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B \text{Cov}(A,B) )
    
- If correlation ↓ → diversification ↑  
    Perfect correlation → no benefit.  
    Perfect negative → possible risk-free portfolio.
    
- Adding a **risk-free asset**: variance = 0; covariances = 0.  
    → Creates **Capital Market Line (CML)**.
    
- **Sharpe Ratio:** slope of the CML → investors seek highest Sharpe.
    

---

#### 🔹 _Systematic vs Idiosyncratic Risk_

- Total risk = **systematic (non-diversifiable)** + **idiosyncratic (diversifiable)**.
    
- Increasing the number of assets ( N ) → idiosyncratic risk ↓ → systematic risk remains.
    
- Systematic = market-wide events (inflation, crises, policy).
    
- Idiosyncratic = firm-specific; can be diversified away.
    

---

### 2️⃣ Capital Asset Pricing Model (CAPM)

#### 🔹 _Key Idea_

- Replace **σ (total risk)** with **β (systematic risk)**.
    
- ( \beta_i = \dfrac{\text{Cov}(R_i,R_M)}{\text{Var}(R_M)} )
    
- ( E[R_i] = R_f + \beta_i (E[R_M] - R_f) )
    
- Line relating return and beta → **Security Market Line (SML)**.
    

#### 🔹 _Interpretation_

|β|Meaning|Expected Return|
|---|---|---|
|0|Risk-free|( R_f )|
|1|Same as market|( E[R_M] )|
|>1|Riskier than market|Higher return|
|<1|Less risky|Lower return|

---

### 3️⃣ Example (In-Class Exercise)

Given:

- ( \sigma_i = 90% ), ( \beta_i = 3 )
    
- ( E[R_M] = 40% ), ( \sigma_M = 50% ), ( R_f = 7% )
    

1. ( E[R_i] = 7% + 3(40-7) = 28% )
    
2. Total variance = ( 0.9^2 = 0.81 )  
    Systematic variance = ( 3^2 × 0.5^2 = 0.225 )  
    ⇒ 75% systematic, 25% diversifiable.
    

---

### 4️⃣ CAPM Applications

- Used to **compute discount rates** → determine fair present value.
    
- Compare expected vs required return:
    
    - If actual > CAPM → **undervalued** (positive alpha).
        
    - If actual < CAPM → **overvalued** (negative alpha).
        

#### 📈 Example:

- Stock price = 100, should yield 10%, actually yields 20% ⇒ **undervalued**.
    
- Fair price = ( C/R = 20/0.10 = 200 ) ⇒ Buy signal.
    

---

### 5️⃣ CAPM Assumptions (Simplifying World)

- Perfect markets (no taxes or frictions).
    
- Rational, mean-variance investors.
    
- Homogeneous expectations.
    
- All assets tradable.
    
- Single-period horizon.
    

> More assumptions → simpler model → less accuracy, but clearer insight.

---

### 6️⃣ Links between Lines

|Line|Axes|Risk Measure|Description|
|---|---|---|---|
|**CML**|σ vs ( E[R] )|Total Risk|Market + Risk-Free|
|**SML**|β vs ( E[R] )|Systematic Risk|CAPM itself|
|**SCL**|( R_i ) vs ( R_M )|Regression|Used to _estimate_ β only|

---

### 7️⃣ Integration with Valuation

- Use ( E[R_i] ) from CAPM as the **discount rate** in NPV models:  
    [  
    PV = \sum \frac{CF_t}{(1+E[R_i])^t}  
    ]
    
- Compare to **IRR** → if IRR > required return → Accept project.
    

---

### 8️⃣ Midterm Logistics

- 📅 **Friday, Oct 17**
    
- **Closed book**, one **double-sided cheat sheet** (no full exercises).
    
- Covers Sessions 1–13:
    
    - TVM, Bonds, Returns, Portfolio Theory, CAPM, Market Efficiency.
        
- Sequence: Problem Set 3 → Sample Midterm 1 → Sample Midterm 2.
    
- Send cheat-sheet photo via WhatsApp for approval.
    

---

## 💬 **Instructor Report – Session 11: CAPM Consolidation & Applications**

### Flow & Dynamics

1. **Warm-up:** Connected macro events (Powell rate cuts, BRICS, ETFs, stablecoins) to course themes → gave context on **monetary policy** vs **fiscal policy**.
    
2. **Bridge:** Quick revision from TVM → Portfolio Theory → CAPM logic.
    
3. **Concept Core:**
    
    - Clarified β definition, SML equation, and meaning.
        
    - Reinforced that **CAPM = simplified world** (model analogy with “human drawing”).
        
4. **Worked Example:** β = 3 exercise + variance decomposition; students grasped risk split clearly.
    
5. **Practical Application:** Valuation via NPV and IRR using CAPM rate; connected to corporate finance logic.
    

### Engagement

- Students attentive; several “aha” moments when connecting CML–SML distinction.
    
- Humor and analogies (e.g., model simplification, gender example, ethics of beta manipulation) kept class lively.
    
- Most confusion came from the regression vs risk-pricing distinction (SCL vs SML).
    

### Teaching Observations

- Great bridge between macro policy, market structure, and valuation models.
    
- You managed to **close the pre-midterm arc**: from risk measurement to pricing and investment decisions.
    
- Repetition of the SML formula in several contexts was essential—students wrote it down visibly.
    

### Recommendations

- Next class: open with a visual comparison (CML ↔ SML ↔ SCL) on the board.
    
- Quick 10-min quiz: compute expected return & classify undervalued/overvalued stock.
    
- Encourage cheat-sheet construction as active learning (force them to select essentials).
    


# Transcription
Before starting with the class, let me say two course, two will be way worse regarding the interest rates. I've talked a lot, not much yet, but I will talk the whole course dedicated somehow to interest rates. I talk about Jerome Powell.  
You know power. You know power has cut 25 basic points in their rates.  
I think 2, three, no, three weeks ago. Bradley, not Bradley. He's going to have another monetary meeting, monetary policy meeting. I don't know if next week, I think we have to next week. I'm not sure that you can ask.  
About the data and he for almost for almost for sure we don't know that he will get again interest rates. This thing regarding interest rates, example if there is a crisis, you cut interest rates in order to have movement. There is unemployed you cut interest rates because you.  
You want to activate employment, yes. And on the other hand, if there is inflation, you rise in health rates in order to calm down the economy. This has to do with monetary policy and for your course monetary policy is so, so, so important.  
We are talking about financial instruments, valuation. We'll talk about bonds, we'll talk about that we'll be bad at the end. The framework has to do with monetary policy. Make sense.  
Monetary policy is one part of public policy. Which one is the other important policy thinking about economics? Fiscal policy. What is going on?  
With what is going on with the shutdown has to do with fiscal policy. Fiscal policy has to do with.  
Access.  
Incomes. Taxes are public incomes and expenses, yes.  
If you have more expenses than.  
The incomes you have definitely. How do you finance definitely by issuing public debt? Fiscal policy is important and careful public definitely.  
Something different than the commercial thing. So I'm talking about fiscal policy, yes, in order to have everything also we should take into account not just GDP, but also the relationship with other countries.  
And then there they are, there is the commercial, yes, then we talk about tariffs. But what I want from the government, there's two policies, monetary policy and fiscal policy and not only we consider GDP, but also we consider.  
The relationship with outside makes sense.  
Coming from this will be asked in the meeting or in the final. You have two sample meeting and by looking at that you can see what are the types of questions that will be made will be asked but.  
It's important to be aware of all these things, just because at the end it's how the world works. Make sense? Not for today. There are more things to talk about.  
Brits, Brazil, Russia, India, South Africa and also there are Brits. Have you heard of Brits?  
The importance of China, of India, of Russia in the new war is an important thing to talk about. We are not going to talk in this class directly, but we will talk. Why? Because it's important and it has to do with finance.  
Another absolutely important thing that I would like to talk about that is our ideas.  
All of you know what is an ETF exchange trade phone. It's a phone that can be bought or sold as if it were a stock. It's a phone that works in the market and ETFs.  
Are important. Who is your peers? Black Row, and also.  
Stable coins are important, but because of several reasons, stable coins has to do with because stable coins also has to do with international payments and also how most of the stable coins are back with dollar.  
And USA is losing power in the world as the dollar is still there and dollar is one of the most powerful.  
We once USA still have, yes.  
I don't know if anything of the things that I'm saying is is all I all I correctness. I don't know even how to say it correct. I don't know if anything of the things I'm saying is, but this is what I'm thinking and this is what is going on.  
And I think that also it's important.  
In 2020 of January, I think the teller must still thought that Tesla would be would still be the first electrical vehicle company. I don't know if you have seen videos regarding Beyond your Beyond your greens, BYD.  
You have seen videos regarding Xiaomi's car.  
Tesla are really good cars, but personally I think that they they cannot compete against science ones. Also there is another point with microchips. Yes, microchips is another point where a lot of things are being said.  
What I'm talking about, I'm talking about their politics and also I'm talking about science and also I'm talking about interconnection.  
All these things matters for this course, for the course in that it term or final way, not to matter, but for the course regarding you be prepared to work in that. Absolutely, I'm certain.  
Work. I mean, I work at least in computer change. I hate matter. So have any questions? Do you have anything you want to comment about? I mean, it doesn't have to be necessary now, but I'm open to talk about whatever you need, yeah.  
Of course, A I it's another big who use a I more than two times each day.  
I I think that if you don't use AI more than 2-3, then we'll need that now. I strongly recommend you all of you to do exercises.  
Also, I strongly recommend all of you to write. Also, I recommend you to do sports, to play, to write, to read and also you say that.  
You understand what I mean? Using A I that's not me. Also I recommend you to know how to drive and you drive on one hand and on the other run one hour in stay. Personally, I love reading.  
Read books, but also reading books is not against or writing is not against AI. Make sense.  
It's incredible. AI is something absolutely incredible, OK?  
Let me let me OK, forget about these your political things and let me just.  
We are almost done thinking about the meter. Yes, we are almost done. We are almost done, but there are a lot of things to do and most of the things.  
We still need to do have to do more with what we have already done than with what we are going to see in the near future. Make sense.  
Most important things already has been done. Let me start. I'm going to summarize all things we have done till now.  
Let me start with time.  
Are you?  
Off.  
Money. Yes, we're talking about grand value of money.  
Most important formula was present value equal to future value over 1 + R rise to T make sense.  
And also.  
We say we saw we can calculate present value C / R of a perpetuity and also we have present value of and week present value of and week is.  
C / R is the difference between two particularities.  
Yes.  
This has to do with calculating present value of things. And Please remember when talking about time value of money, also we introduce the concept of a stock.  
With dividends.  
And also we talk about bonds.  
0 coupon bonds and bonds.  
We.  
Regarding bonds and bonds with coupons, we talk about reinvesting the coupon and we talk about reinvesting the dividend if we are talking about stocks. Make sense? Do you remember?  
Also.  
We talk about HPR.  
Effective annual rate annualized AIDS PR, yes.  
And HPR with bones, HPR with stones, all these things missed.  
What I really strong, what I strongly recommend you to do, but through this I'm start reviewing all these things. The sooner the better. Why? Because one of the difficulties this course has has two examples. The more you practice.  
Hablango en Espanol que escuchanto Espanol tin nagos well, without noticing your Spanish has improved.  
The sooner the better and then.  
This is not as complicated as portfolio theory.  
Mathematics from portfolio theory.  
Portfolio theory.  
Mathematics for for portfolio theory here. What did we do? We take a portfolio weight a return a plus weight B times return B. Yes, we took a portfolio combining 2 stops.  
And we calculate the variance of the portfolio by doing.  
P + 2 times.  
With they, with me, yes.  
Portfolio theory is combining 2 stocks.  
This equation if we have two stocks as three terms, but as the number of stocks increase.  
The long the length of the cholito becomes bigger and bigger. Make sense.  
Before moving forward with portfolio theory.  
First, we talk about correlation coefficient. What if correlation coefficient is 100? Or what if it is perfect negative correlated? Yes.  
We talk about correlation coefficient, then we talk.  
We don't know.  
The risk free aspect.  
The risk free asset.  
Regarding the risk-free asset, you have for variance between an asset A and a risk-free asset is 0 and variance on the risk-free asset is also zero. Make sense.  
And then we talk also about combining more than two stops. Oh, and we talk about the sharps.  
Brace. Yep.  
We talk about this hard breath, this war.  
Wes.  
Little bit complicated and then last class let's dedicate not just last class class before last class we use big big portfolios and we introduce the concept of.  
Idiosyncratic and systematic risk, we saw, we said if you have a lot, a lot, a lot of stocks.  
You can diversify away. The correlation coefficient is 0 among all the stocks. You can diversify away everything, but in real life there is correlation, yes, so you will.  
Never been able to diversify all the roots. You should. You can diversify all the part that is idiosyncratic, but you cannot diversify the systematic part. Do you remember that?  
OK.  
OK. And with this idea of there is one part of the risk that can be diversified, but there is one part that cannot be diversified, we move into capital, yeah.  
What is capable? A new way in order to talk about risk and when talking about capable instead of talking.  
About volatility or variance, we introduce the concept of beta.  
And data on a portfolio is so simple to calculate knowing beta of its constituents. S is weight A times beta A plus weight B times.  
Yes.  
I'm.  
What is better?  
Beta is the covariance between return A and the return on the market over variance on the market. Beta on asset A is covariance over variance on the market. Make sense.  
So we can calculate portfolios.  
By using the traditional way or we can simplify our life and go into and use this way. Make sense.  
With me.  
Yes.  
Oh, I'm gonna take this at that time.  
Eh, here I used to have deviation.  
And I know in deviation I have deviation on asset A, deviation on asset B, yes, I have two stocks. I can create the investment opportunity set, yes.  
Instead of two stocks, I can have all the stocks in the world. If I have all the stocks in the world and I have the risk free asset.  
I can look for the highest self ratio, yes. And if I have all the stocks in the world, how will I call the highest self ratio portfolio? The market, yes.  
This is the market and what is this like?  
The capital market line, yes.  
Capital market line and last class we saw that we can move.  
From this world to another world that is better.  
Risk free as beta of 0, yes, the risk rate as beta of 0.  
I.  
Return on the market market.  
Market is going to have better of one, yes.  
This line is security market line.  
And if I have, I said a.  
We it's return.  
This would be better, honey, yes, and if I have.  
As it be.  
With it's written.  
You have got better, yes.  
All of you are with me? Okay.  
Why does this work?  
Captain.  
Absolutely important idea, yes.  
I have and I said hey.  
With it's, for example, buddies, yes.  
Variance on asset A.  
We'll have two parts.  
One part that is idiosyncratic.  
Yep.  
Another part that is going to be systematic. Why I am writing the systematic part in this way?  
Because.  
I want you to see the relationship between variance when I said A and the.  
Systematic part we are going to work with better.  
We are going to work with beta.  
But I want you to see here, here.  
All the assets are going to be under.  
All the assets are going to be under the CMM, all assets, all portfolios, please.  
There, the only asset that will be on the CNN would be the market or a portfolio that combines the market with the retrias. All of you understand me.  
The rest of the assets, all the assets in that world will have a sarp ratio lower than the market. Market portfolio will give us the highest sarp ratio. Make sense?  
Yes, if we get rid of the neosyncratic part.  
We will be there and when talking about caffe.  
All all assets should lay on, not under or above on BSML. Make sense?  
Here, here, because of idiosyncratic assets are under.  
And if we get green of the idiosyncratic part, all the assets are on. Make sense.  
Yeah.  
OK.  
And we will see today what happens if an asset is not on the SML. What will happen if an asset is not on the SML that asset that happened?  
Does not hold for this particular, but we will see what are the consequences. Make sense.  
Any questions?  
Yeah, no, it's just because the other day. I'm not seeing.  
OK, what are we going to do today? We are going to talk about systematic and ideation credit risk. Then we will talk so quick about implementation and I don't care too much about implementation.  
And then we will talk about implement applications of CAPM. That applications of the CAPM will be going back to time other morning. What we will get with CAPM? Oh, sorry, I forgot. Let me look for another call.  
Here the return on asset A is equal to the risk-free plus beta A times return on the market minus the risk-free rate, yes.  
What is that? This is the equation of a line. What is the name of that line? SML. Yes, that equation is the capping itself.  
And after the midterm, what I will tell you after adapter, after forget what I'm going to say. Yes, after the midterm, here, let me say, let me wait, we've got a free three plus.  
Better. Thanks. We'll turn on the market. Manager is free, yes, after the meter.  
I will tell you, you can forget.  
Almost everything from this except this equation.  
What we will get from this equation?  
Are we done?  
Please return.  
We will use this return in order to calculate present value of things, but this afternoon.  
For the midterm, you should study all these things. OK, make sense.  
OK, systematic and idiosyncratic implementation and application of the cabin. Applications of the cabin will have to do with calculating the value of money, more or less. I'm summarizing a lot. OK.  
Systematic risk. The price risk of an individual stock is the systematic risk, not idiosyncratic risk. Yes, when talking about the SNF.  
We are forgetting about the years we are just focusing on the systematic and better measures hold that stock covariates with all the other assets in the economy or securities.  
Our security is contribution to the total risk of the market portfolio better measures the systematic risk of the stock.  
The higher beta, the higher perspective we know. Always we're talking about beta. We should know what is the market. Yeah, beta is 1 respective return of the stock should be equal to the market.  
If beta is higher than one, expect the return to be higher and if beta is lower, lower.  
OK, and this is the equation you go there.  
Any questions?  
Not a first equation.  
On one hand, expect the return is going to be this and once you have this, you can calculate. We are going to use this equation, yes, in order to see the relationship between.  
Valiance.  
I'm.  
Semantic risk, yes, you are, I mean.  
I don't know if in the final or in the midterm is going to be one exercise like this, but if you find one exercise like this one, the exercise will be something like this. Let me solve this exercise and all of you.  
Don't see that this is not going to be going to be here. Excel.  
There's a stock with a volatility of.  
Oh.  
90%, yes, volatility stands for deviation. So if volatility is 90%.  
Variance is gonna be.  
Always happens the same.  
Variance is going to be peace.  
Yep.  
OK.  
A store has a volatility of 90% and beta of three. OK, let me come here.  
Made that T3.  
Market portfolio has expected return of 40% and a volatility of 50%.  
Return of the market is 40%.  
And.  
Volatility.  
Of the market of.  
50% makes sense. Are you doing?  
OK.  
No, don't worry and the risk free rate is.  
Risk free is.  
7%, yeah.  
Now we know these things.  
I want you first to calculate the equilibrium expected return and then to answer to the question what proportion of in terms of the companies XYZ.  
Variance is diversified away in the market portfolio, Yep.  
Oh, for this for two minutes and I will go back.  
What is the equilibrium expected?  
How do I calculate the lead? You may expect the return?  
With the SML bread form, yes. What ingredients? Plainly I need the risk rate.  
I need better.  
And I need also what is called market premium, that is the difference between the return on the market and the refor rate. Make sense?  
So let me calculate the expected return on the stock. This is risk rate plus.  
Better times.  
Market premium. Market premium means a difference. It is return on the market and risk rate. Careful because there are times that you would see the market premium. So you don't need to take from market premium the risk rate. Yep.  
And this is 28%, OK. Second question is?  
What percentage?  
What proportion of its variance is diversify away in the market portfolio? Yes.  
So on one hand, I have the values, yes.  
Total.  
Variance is gonna be.  
81 Yep. And then these total variance would be divided into two parts. One is the ideal syntagratic.  
And the other part these day sees this dramatic, yes.  
Here you've got the formula, but the formula is yes, this one. Total variance is going to be equal to the systematic plus radiation graph, yes.  
The only way in order to calculate idiosyncratic is by doing by making the difference between.  
Total risk minus the market risk. So I have total variance. Let me calculate the systematic that is.  
Beta square times. I mean beta times volatility. This rise to the square. Make sense?  
And I have 2025. How much is going to be the issue credit this minus?  
This one, yeah, and the ADA's, the aviation gratic parties.  
This part no.  
And the rest is going to be 1 minus.  
Sorry, one minus.  
0.75%, but one minus 0.75% would be 25%. Let me put this in percentages, yes.  
75 and 25, Yep.  
The question is.  
What proportion of this variance is diversified away in the market portfolio?  
Systematic can not be diversified, which proportion will be diversified away in the market portfolio mediation credit. So the answer should be 75%.  
Make sense?  
Yeah.  
Once you have done one of these exercises, not done all. It is not too much difficulty in this kind of exercises. OK, any questions?  
No.  
At the end, Catherine is that formula. Yes, this formula, yes and.  
Captain and DSML are the same.  
What do I need in order to implement?  
What do I need to implement?  
I will need the risk rate. I will need better.  
And I will need Margaret. We got on the mark, yes.  
In order to get better, what do I need?  
Margaret. So at the end, what do I need in order to implement CAPEB? The risk, the risk rate and a Margaret reference.  
That where will I get the market? For example, if I am in the States, it's 500 could be a good reference. If you are in Spain, you can choose I, I we call it EX35. ID EX35. If you are in London, good city 200 makes sense.  
That according for France and whatever. OK, so you need beta where you will get beta.  
Making a regression between the stock and the market. Yeah, in problem three, I think you should calculate 1 regression.  
But I do not care how you calculate in this regression. It's just asking Excel to calculate the regression and I'm not going to ask anything regarding regulations in the meter.  
Yes.  
Then where will you get the whiskey ring?  
In the case of Europe, normally we we choose the German 10 years public bond rate.  
In the states, you can choose the treasury from having the 10 years. Also, what is there? Or is a month treasury? Yes, I mean the payments would be done in two years. Instead of taking the 10 years, you can take the two years. Make sense.  
And in order to take to calculate the market, in order to know what is the market and it makes make sense.  
OK.  
This is.  
I please.  
Forget about business life, OK? Why?  
1.  
Because I don't want to create confusion. Yes, what do I have to talk about?  
I have to talk about the capital market line, the capital market line.  
Sorry, it sounds thirsty. No, no, don't worry, don't worry. I was thinking about you exploding. If you need to go to the bathroom also, you can go. It's very thirsty. No, it's perfect.  
Capital market line.  
Capital market line has in one X risk.  
And risk is deviation, no. And then you've got return before the capital market line.  
When I have just an investment opportunity set, I talk about the capital allocation line, capital allocation line and capital market line stands almost for the same. You can't forget about the capital allocation line.  
And you can focus on the capital market line. Capital market line is important. Why is it important? Because it's the market combined with the rich and in this world, if you are a rational investor thinking about the two forms theory.  
What you will choose a portfolio that will lay on the capital market life. Make sense.  
Another important line is the SML. The SML is absolutely important and when thinking about the SML, we have in one axis better and in the other return. Yes, SML.  
Represents Captain itself.  
Yes.  
What is the problem I have with this slide?  
But in this is like this is a relation like here you have the return on the asset and here you've got.  
The return from the market. This regression line is being used to calculate beta. We are never gonna you will do it just once in the province set, but we are never gonna calculate beta by calculating regressions.  
You should know that beta. You should know that beta is a regression coefficient, yes.  
Bad.  
Please don't listen to what I'm going to say.  
SCL stands for Security Characteristic Line that if you try to under you can understand, but immediately after understanding you can forget why.  
Because here I put return on the asset, here I've got return on the market and.  
The risk, the risk is that someone can oh can come here CMLSML. You see that this can create confusion.  
What do I have here? An S?  
From these and.  
I see from back hurry.  
If you are used to memorize things, eat and spiritual, this can break your head.  
You understand why I'm saying what I'm saying? Perfect.  
Uh, can then implies that?  
Alpha is 0 and we will talk about that in one minute, yes.  
And then estimating better.  
Uh.  
It's basically like this.  
Why is the problem covance us that it depends on time?  
Which better? Which time will I choose? Which better will I? Which time will I choose?  
And I want you, I want your attention and I want you to understand what I'm going to say, yes.  
It will depend if I am a buyer or a server if I am a buyer.  
What I would want to do with the price? What I would like the price to be? If I am a buyer, it's cheaper, no?  
All here with me. If I am a buyer, I will want the price to be the lower possible, so.  
In order to have the lower price possible.  
I will like get the return that is counted rate to be the highest possible, yes.  
And if I were.  
This rate to be the higher possible or I will want better to be the higher possible, the riskier. So if I am buying what I will say, oh this is the.  
Riskier asset I have never seen and I would like a high beta. So which time I will choose the time that will give me a higher beta?  
On the other hand, if I am selling, what I would choose the lowest better possible?  
You understand what I'm talking about? Anyone could be thinking about ethics.  
It's ethical. What I'm saying, what will be unethical will be too late to like happen depends on beta and beta depends on time.  
You should know not only how to calculate a covariance, you should also know if this is useful or not.  
And personally, I have never talked. I mean, I I have talked in M and A processes when buying or selling, people normally knows what is better and they don't argue too much, but.  
We look for the specter return. The specter return is 12%. OK, we agree on that, but if someone start talking about data.  
Probably he's not to show experience and you will try to force better to be. You are buying the highest possible. Make sense.  
I want to get rid of this part quick, yes, and here you've got one example. You can calculate it and you will get a better. Make sense.  
For me, it's more important this part.  
Applications of the capital, yes.  
At the end.  
We will use capital in order to calculate the expected return at which we will discount future customers, OK.  
OK, one possible benchmark for stock solution is to find assets that are cheap relatively to the capital.  
Let me show you this. I'm fine.  
But itself and let me move here.  
I want your attention. Yes, this is better and this is the spectator report.  
It's great. Juan, Margaret, Peter, this.  
I have one stop.  
Sector return is.  
I'm going to saturate this, but I want you to see.  
Who suspected returnees?  
10%, yes.  
Catherine Holt, yes.  
And instead of a 10%.  
Yeah, what do you prefer? We over or under?  
OK. Instead of 10%, I'm going to sensate it, yes, because I want you to see the numbers, this 20%, yes.  
So I have a positive alpha of 10%.  
Don't you agree with me? You agree? Yep, I have a question.  
The best store.  
Will have stock price is 100, yes.  
The stock price is 100, yes. Price is 100. I'm going to consider this as a perpetuity, yes.  
Did they stop?  
If come in good, yes, if come in good, what should be the dividend?  
OK.  
What should be the dividend of the stock?  
At 10%, no. 10 years, no.  
Is what I mean or no?  
But Calvin and I got home and I got instead of.  
Instead of 10%, I have 20%. Are you following me?  
Why is it possible?  
Price.  
Price is 1100 because price won't change, yes.  
And because it's 20%.  
You still still 20? No.  
So fair place, fair price should be.  
I fair price should right fair. The fair price should be.  
Rainy.  
C over R.  
20 over 10%, no?  
So that fair price should be 200, no?  
Price will be 200, but price is 100.  
So the stop is.  
If the price is 100, you will buy this stock or not?  
The stock should be 200, the price is 100, you will buy. So the stock is under value. Make sense.  
Are you understood mechanics?  
Let me explain you. Let me quit.  
Price would be 10%, but it really pays at 20%, yes.  
So price should be because the price is 100, the revenue should be 10 and instead of having 10 I'm going and getting 20.  
So, the stockies.  
And then public makes sense.  
What is alpha? What is alpha? The difference between what it is and what it should be?  
Make sense?  
And in this case, if there is a positive alpha, the stock is under price.  
Is what I have. Yes, I explained you. Make sense.  
Have you understood this? OK, at the end when talking about stock selection, what we are really doing, we are using CAPM as that is something great.  
Of future cash flow. Yeah, let me continue. I think I'm passing the strategies.  
At the end, an active strategy tries to beat the market by stock price, picking market time, yes.  
What normally people if you want to invest your money? Anyone of you have any investments?  
Did.  
Crypto, Tom. OK, forget about crypto. Crypto is out of this business, but whatever, forget about crypto. I will bet that at least 50% of you that has investment has CPS.  
Yeah, we're having beers.  
Yes, single stocks. What is an ETF? It's phone. You can buy the phone that replicates an index. You can find an index or ball. There are ETFs that replicate balls, but when buying an ETF that replicates.  
If I had you, what you are doing with this here?  
You once you want to get at least the market you are looking for. If you buy any here, you are buying a product that has the highest average.  
As a beta of what? Make sense.  
OK. And capital budgeting, this is what we will do. You have this business, no business that come here and let me save this, save us.  
Documents day session is session. We have thinking on the first slide session 11. Thanks so much.  
OK, five years, 300.  
2.  
Yes.  
3.  
003 hundred 600 and 900. Yep, you have two.  
You have this investment project, you know that you will invest 1000 and you will get no money for two years and year three you will get 306 hundred and 800. Makes sense.  
OK. Should you undertake this project or not? It will depend. It will depend on what on your this profile on let's see.  
Let's use capping the IDX if beta is 1.75.  
Beta 1.75 yes.  
B.  
Rate 4% and market return on the market.  
12% yes. What is the expected return?  
What is the return? How will you calculate?  
With the SML, it's simple to calculate. Again, it's risk free plus beta times market premium. You don't want the market minus risk free, yes, and this is going to be 80%.  
Will I undertake this project? Let me calculate present value of future cash flows 1 + 80%.  
OK.  
Rise to the first. Make sense.  
This is zero, of course.  
4.  
And that's a matter of one of the delays, 1000. If I sum all these, I will get.  
I will get net present value.  
Also I can do I can get this same number by saying net present value. Yes, at which rate? At this rate? Careful when? Oh Thomas, yes, careful when calculating net present value.  
Why? Because you cannot put when calculating net present value of this net present value of 1000 is 1000. You should always start in year one. Yes, net present value at this rate.  
Last.  
Huh.  
OK.  
Sorry, something inquiry happens and present value.  
At the ready comma.  
Oh, sorry, my president value.  
472 I have to calculate net present value of all and I have already told oh sorry, I know what I'm doing incorrect.  
This is what I have told you you cannot do because 1000 today is 1000. You should calculate.  
The present value of these ones and then you should subtract 1000, yes.  
And you will get 140. Yep. So here I want to have similar. Any questions?  
So for this amount of risk, will it make sense to undertake this project?  
No, because net present value is net.  
Is negative. But what if beta is 0.5? What if beta is 0.5? If beta is 0.5, yes, net present value is positive, yes.  
So in beta is 0.5, the specter return is 8%.  
Yeah, let me do a different thing. I want to look for the rate that will.  
Pass from not taking to taking. What is this rate?  
Let me look for the IRR.  
Of these numbers, yes, and the IRR will be 14.68. So if the rate is 50.  
It will be negative. If the rate is 40, it would be positive. Make sense.  
What I want you to see, what I want you to, I am using.  
SML and using cap N in order to calculate expected return and once I know expected return, I use this rate in order to calculate net present value of future cash rules.  
Makes sense.  
And then giving the same I can calculate internal rate of return and internal rate of return compared with the expected rate. I'm looking forward with the leaf. I will take it or not. Make sense.  
So.  
Summary CATM helped us a lot. What we will do using CATM in order to calculate the expected return and once we know the expected return, we can calculate the personalities.  
Make sense?  
We are going. Any questions?  
For next Wednesday.  
For now, for next now for this Wednesday, for all unsaid.  
In problem set three, you shouldn't have any difficulties.  
You shouldn't have any hypothesis. Do you remember the exercise that we did in class last day? If you have any, are we going to do the next one for the term or or the little thing that has to do with efficient margin hypothesis?  
But this thing regarding a fishing market hypothesis is not a medical exercise. If you go through the sample meet, you will easily identify which type of exercise will have to do with the fishing market.  
Oh.