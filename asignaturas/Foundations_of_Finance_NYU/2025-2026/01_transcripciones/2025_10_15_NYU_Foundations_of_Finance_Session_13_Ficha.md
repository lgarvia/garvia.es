# 🎓 **Student Notes – Session 13: Midterm Review**

## 1️⃣ Context

- **Date:** October 15, 2025
    
- **Goal:** Full review of **Sample Midterm 1 & 2** + key formula refresh.
    
- **Next step:** Midterm exam on **Friday**.
    
- **Reminder:** After midterm → begin _Arbitrage Pricing Theory (APT)_ and deeper work on **bonds** and **valuation**.
    

---

## 2️⃣ Administrative Notes

- 📜 **Cheat Sheet Rules**
    
    - One **double-sided A4 page**.
        
    - ✅ Formulas allowed.
        
    - ❌ No worked examples or copied slides.
        
    - Graphs are OK if **hand-drawn** or used to illustrate formulas.
        
    - You can type your sheet, but **take a picture** and send via WhatsApp for pre-check.
        
- 🧾 **Format**
    
    - Closed book.
        
    - Focus on understanding, not memorization.
        
    - Sample Midterm 2 is harder than Sample 1.
        
    - PS1–PS3 cover almost everything you need.
        

---

## 3️⃣ Key Topics Reviewed

### 🔹 A. Portfolio Variance and Beta

- **Markowitz formula (total variance):**  
    [  
    \sigma_P^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B,\text{Cov}(A,B)  
    ]
    
- **Covariance:**  
    ( \text{Cov}(A,B) = \rho_{A,B}\sigma_A\sigma_B )
    
- **Portfolio beta:**  
    ( \beta_P = w_A\beta_A + w_B\beta_B )
    
- **Systematic risk portion:**  
    ( \text{Systematic Var} = \beta^2\sigma_M^2 )
    
- **Idiosyncratic risk:**  
    ( \sigma_{\text{idiosyncratic}}^2 = \sigma_{\text{total}}^2 - \beta^2\sigma_M^2 )
    

👉 _Interpretation:_ Total risk = Systematic + Idiosyncratic.  
Know how to compute the fraction of total risk that is systematic.

---

### 🔹 B. Correlation Between Stock and Market

- **Given:** ( \sigma_i, \sigma_M, \beta_i )
    
- **Formula:**  
    [  
    \beta_i = \frac{\text{Cov}(i,M)}{\sigma_M^2}  
    \Rightarrow \text{Cov}(i,M) = \beta_i\sigma_M^2  
    ]  
    [  
    \rho_{i,M} = \frac{\text{Cov}(i,M)}{\sigma_i\sigma_M} = \frac{\beta_i\sigma_M}{\sigma_i}  
    ]
    
- **Example:**  
    ( \sigma_i = 40%, \beta_i = 1.2, \sigma_M = 20% )  
    → ( \rho_{i,M} = (1.2×0.20)/0.40 = 0.6 )
    

---

### 🔹 C. Bond Pricing and Interest Rate Movements

#### Formula Recap:

[  
PV = \frac{C}{(1+r)} + \frac{C}{(1+r)^2} + ... + \frac{C+FV}{(1+r)^n}  
]

- **If yield ↑ → price ↓**
    
- **If yield ↓ → price ↑**
    

#### Example:

- 4% coupon bond, 3 years, FV = 1,000
    
- If yield = 4% → price ≈ 1,000 (par)
    
- If yield = 5% → price < 1,000
    
- If yield = 3% → price > 1,000
    

---

### 🔹 D. Holding Period Return (HPR)

[  
HPR = \frac{P_1 + D_1 - P_0}{P_0}  
]

- Includes **price change + dividend/coupon income**.
    
- If return is for less than a year → annualize:  
    [  
    EAR = (1 + HPR)^{\frac{12}{\text{months}}} - 1  
    ]
    
- Example:
    
    - Buy at 60, dividend = 2, sell at 64 → (HPR = (64+2-60)/60 = 10%)
        
    - In 6 months → annualized ≈ 21%.
        

---

### 🔹 E. Reinvestment and Bond Sales

- Reinvesting coupons increases total return.
    
- If coupons **not reinvested**, HPR ↓.
    
- If market yield **drops**, bond price ↑ → capital gain.
    
- If market yield **rises**, bond price ↓ → capital loss.
    

---

### 🔹 F. Correlation & Diversification

[  
\sigma_P^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\rho_{AB}\sigma_A\sigma_B  
]

- If ( \rho = 1 ): no diversification.
    
- If ( \rho < 1 ): portfolio variance ↓.
    
- If ( \rho = -1 ): perfect hedge possible.
    

> Diversification works whenever ( \rho < 1 ).

---

### 🔹 G. Efficient Portfolios & CML

- Capital Market Line (CML): efficient portfolios only.
    
    - Combines Risk-Free + Market Portfolio.
        
- If you **short the market**, or hold inefficient combos → **below CML**.  
    → Not efficient.
    

---

### 🔹 H. Random-Walk and EMH Connection

- EMH implies **prices already reflect all information** → price changes are **random**.
    
- Technical analysis fails if markets are efficient in weak/semi-strong form.
    

---

## 4️⃣ Typical Exam Questions

|Concept|Example Question|Key Answer|
|---|---|---|
|Portfolio Variance|“When correlation < 1, what happens?”|Total risk ↓|
|Bond Price vs. Yield|“If yield rises from 4% → 5%?”|Price ↓|
|Systematic Risk|“Compute β²σM² / σ²total”|Fraction of systematic risk|
|HPR|“Bought at 60, sold at 64, div = 2”|10% (21% annualized)|
|CAPM Relation|“Stock overpriced relative to SML”|Lies **below** SML|
|EMH|“When technical analysis doesn’t work?”|When market efficient (weak+)|

---

## 5️⃣ Review Strategy

1. ✅ Re-do Problem Sets 1–3.
    
2. ✅ Work through Sample Midterm 1 fully, then 2.
    
3. ⚙️ Build your cheat sheet with:
    
    - TVM formulas
        
    - Portfolio & CAPM formulas
        
    - HPR and compounding rules
        
    - EMH levels table
        
    - Bond pricing template
        
4. 🧩 Focus on **logic**, not memorization.
    

---

## 6️⃣ Next Steps

- **Friday:** Midterm Exam
    
- **Next week:** start _Arbitrage Pricing Theory (APT)_ and _bonds deep dive_.
    
- Bring your **cheat sheet** photo before the exam.
    
- “Understanding > memorizing”: if you get the relationships, you’re safe.
    

---

# 🧾 **Class Report – Session 13: Midterm Review**

## 1️⃣ Flow & Structure

- **Intro:** Administrative clarifications (Denmark course, Nobel updates).
    
- **Core:** Walkthrough of Sample Midterm 1 & 2, discussing bond pricing, portfolio variance, beta, correlation, and efficiency.
    
- **Exercises:**
    
    - Time Value of Money (cruise example, annuity corrections).
        
    - Bond price/yield dynamics.
        
    - Correlation and diversification.
        
    - CAPM consistency checks.
        
    - Conceptual EMH links.
        

## 2️⃣ Key Emphases

- Relationship between **variance decomposition** and **systematic risk**.
    
- **Beta as regression coefficient**: ( \beta = \frac{\text{Cov}(i,M)}{\text{Var}(M)} ).
    
- **HPR intuition**: link between reinvestment, yield changes, and realized return.
    
- **Diversification logic**: correlation < 1 = benefit.
    
- **CML efficiency**: portfolios on the line only efficient.
    

## 3️⃣ Teaching Observations

✅ Strong session — well-paced and pragmatic.  
✅ Clear transition from abstract (CAPM, EMH) to numerical logic (bond, HPR).  
✅ Humor and real-life tone kept the class relaxed pre-midterm.  
⚠️ Some confusion remained about rate conversions (annual ↔ 2-year) and coupon reinvestment.

## 4️⃣ Student Readiness

- Most students familiar with formulas.
    
- Need to revisit the **logic behind signs** (price-yield inverse relation).
    
- Practice correlation and diversification problems.
    

## 5️⃣ Recommendations

- Begin Friday with a **5-min warm-up** exercise (beta or bond price).
    
- Encourage confidence: “Understanding > memorizing.”
    
- After midterm, pivot immediately to **Arbitrage & APT** with reference to EMH closure.
    

# Transcript
15 de octubre de 2025, 3:09p.m.
Everything. Yeah, this is so quiet. Whatever you are studying corporate finance.
I'm sorry, corporate. Yes. What is the continuation of this course? Corporate finance. Corporate finance. Denmark this semester. Denmark. Wow. Denmark with Denny's people. OK, no questions then.
OK, perfect. There has been life. Perfect. I got out. So I this semester I am recording all my classes, not recording, not because of, I mean, I guess.
Recording what I'm saying and not because of recording, because of the transcript. And once I think I upload them, I have the transcripts for this course. You have the slides. That's not that is crazy. I have all this.
A bunch of information. I'm going to any questions regarding I have given you. Have you tried at least problem set one? Have you worked with problem set? Let me sample meet. Sorry problem set one. No sample midterm one.
There are any questions? Any specific questions you want me to go through whatever?
Denmark is crazy. I have never been. It's so, so close to Sweden, Sweden. They have given Nobel Prize, but today we are not going to talk. I would like to talk about Nobel Prize.
Has been given the economic Nobel Prize has been given. I love some Peter. So Peter has to look at today's not a day and not even Friday, bro.
Will be here this Friday, OK, but as we talk.
Yep.
I.
Here we are.
Where are you going? Where?
I didn't know that there were a place called.
So, yeah.
Thanks for your visit, Harrison. Of course. Can I take a picture with you? Of course. Yeah. Yeah, please. Of course. OK. Good luck, everyone. Thank you. They have already had luck being in NYU's turn.
There I'm going here. Here is here is sample meter one. Let me start with the first one.
Any questions in particular?
Oh, yes. Are you gonna solutions? OK, immediately.
Immediately. Immediately. Let me I have not.
Whatever before thinking about solutions, I'm I'm gonna do this immediately, but before thinking any any any particular question regarding.
I'm not a robot.
Tractors. Is he a tractor or no?
The factor.
I feel as if I work, but trust me that this much more quickly.
Going to a sub web.
Done.
Then logging into light space.
Don't. I don't know if you agree with me.
Or not.
OK.
OK, here you are.
And were you?
Oh, Jeffrey, thanks. Yeah, thanks a lot.
Thanks a lot. Because it's crazy. I mean, it's it's crazy now. Tell me.
Bro, let me guess one second, bro. And it's crazy. Today is not the day to talk about what is going on in Egypt.
But it's the answer. The answer. The answer. The answer. How do you say theatro?
Sit. Sit. Can you sit there? Peter. I'm not sorry. Sit there. I I need to show respect for teacher, but Trump is doing whatever now.
And when you these are you guys, I'm going.
Going midterm.
And.
Solutions one and.
Solution is because I want you to have these solutions immediately.
And I don't want you to. I don't want to make you wait in a second. OK, Rob.
The cheat sheet. I will give you a cheat sheet and also you can make your own and your own. I will recommend you before coming here to send me a WhatsApp with a picture in order to review.
If you just put formulas and nothing more than formulas, there won't be any problem. But if you start copying exercises, there won't be any problem also because I will not let you at this easy, but I I can imagine that between why?
And black that are scale of grace. So in order to avoid any kind of misunderstanding, we just make a picture. Oh, this is great or take out whatever. Can you type it out or do you have to write your notes? It can be typed.
But you cannot copy slides because I've been ditching this for a long time and like all the slides. So you can't have examples or you cannot have examples, you can not.
I think some of he goes.
Because if you have example, what I don't want you is to memorize, what I want you is to understand. But there are times that memorize can help if you have not done exercise in this moment. Now I'm worried, a little bit worried because you're asking me things regarding.
Formal issues they're not asking me regarding.
Can I use like a graph from one of the slides? A graph, yeah.
Yes, I mean do your, is it show me?
If you make an example, I will not. You can, for example, don't know. I'm not going to discuss.
About grace, you can, you can have all formulas you want. You cannot put examples.
You can draw graphs, yes, but as far as these graphs are medical examples and you have that but but also it makes no sense to be discussing about this.
It's like it's one page, right? One page and one page. Well, in the cities, we can oversight, but making sense. I mean you.
One piece of paper, one piece of paper, two sides.
All weeks.
Want me to go through any exercises or any particular?
Perfect.
Sample midterm.
Which one?
OK, uh.
Oh, anything. Yeah, two stocks and the market and the market portfolio or quantities. Sample meter 2 is more complicated than sample meter one.
And the exercises. These exercises are the most complicated ones starting the start the review with this one for at least.
Trying to construct the house by the room, but let me go with.
Rate is 4% one fraction, OK.
What fraction of the variance of our portfolio that is invested 50 is systematic? OK.
I'm not going to do this exercise in particular completely, but let me show you what fraction of the variance of a portfolio that is invested 50% in Google and 50% is systematic. The question should be making about one exercise that we.
See the last day coming to one exercise that has to do with I have total risk of the stock or of the portfolio. Total risk would be divided into two parts, one part that corresponds.
2.
Remember the LB square?
Alliance of the market plus the idiosyncratic. Yes, when you see this this, this formula, the formula that this has to do with Markovic, Markovic, Markovic, Markovic has to do with.
I'm summarizing. All of you should know variance of my portfolio is weight A raised to the square. A square plus weight B raised to the square variance B + 2 times weight A weight B.
Covariance between A&B. Yes, this is the variance in Markovic war.
Let me just write here P because.
This is this one, yes, and now.
In Capen, whole beta of the portfolio is being calculated. Much more simple weight A, beta A plus weight B beta B, yes.
OK, this is one more. We have been working for five. You have problem set two regarding this and this has to do with problem set three and not just problem set 3.
If you have properly done problems and three problems and three, you have exercises that should be solved with this equation. Yes, whatever.
So you just calculate data square, what fraction of the variance of the portfolio that is invested 50% is systematic, you are being asked.
About what home mats these represent?
Of this talk, yes.
How much is this over this now?
The portfolio is 50% Google and 50% ways.
Wait A and wait B is 50% Google and 50% Yahoo yes and.
I have all the time I can calculate it this I can calculate better.
And it's immediately. I mean, there are lots of numbers, not lots. I mean, you have better.
You don't need expected return for nothing. You don't need expected return.
You will need a spectrum return. You just need standard deviations beta.
And the correlation between returns, correlation between returns is covariance. All of you should know that covariance is equal to correlation times deviation A deviation B.
More questions or more exercises or?
Let me.
I mean that's because now let me let me talk about that is one exercise. I don't want to go through this exercise because it will take a little bit of time.
There is this progressive one, yes.
What about the crew's exercise?
Have you tried?
If you have tried, no problem. This exercise is a little bit crazy. Let let me just show you the the ideas regarding this exercise.
Have you seen that these has ? Yeah, they have become whatever.
The gurus exercise.
If you have not started studying yet, yeah.
This exercise is not the exercise. I will start with but.
You plan to take a cruise. I'm gonna do this exercise because this has to do with time value of money.
41.
41 Yes.
And 3000.
It is starting when you're.
3K3K3K and 3K and 3K, yes.
What are you asking?
If you have, if you have excel, doing this is so simple.
Future value over 1 + R rise to T makes sense.
You have excelled in solving this exercise. It's so simple. You calculate present value of its future and flow. You get the sun and you're going, yes.
What is the problem with this exercise? If you want to solve this exercise with the annuity formula because you have, how many payments are you going to have?
How many payments are you going to have?
How many payments are you gonna have?
123 this.
No, no, you're right, 21 pages. So 42, you just take 42 / 2, that is 21. Yeah.
You are not going to be asked to make this kind of calculations of calculations. You are not going to be asked to make this kind of calculations, but in order to prepare this, so there there will be 21.
Thanks, isn't it? And the annuity formula is present value of an annuity is being given by.
Y uh C.
Over see, let me write the numbers 3000.
Over. It's going to be great. Let me call it up, yes.
And super permit is 1 minus.
1 + R raised to T Yes, this is a nuity formula.
Why is T?
What is the the number of payments?
What is the problem we have in this exercise that payments happen in a two year basis?
Not only that, also first payment will happen not in two years then.
Perspective would happen if it had a period of time, and that's not what I'm saying.
Yes. So these exercise have two complications. One complication is so simple to solve two year basis. If interest rate is 10%, yes, if interest rate is 10%.
All months, 10% will be in two years.
10% in a two year basis would be 21%, yes.
But you should know how to do this. Let me come here.
1 + 10% rise to the 2nd is equal to 1 plus.
In a two year basis.
Regarding these, there are several exercises in sample meter 1-2 and in problem set one regarding how to move from the disease effective and already.
Yeah, you remember.
And if you solve this, 10% in two years is 21%.
So the rate should be 21% and what happens with this first period of time at this first period of time will happen in half a period of time. So you should do one of two.
Calculate present value in year -1 and then take it.
Forward or calculate this here and calculate the present value of the value here one. Make sense.
Yeah.
On one hand then there is on one hand you have the formula, but also you should know how to work with rates and change rate for.
OK, let me go quick question by question, yes.
I'm not going to solve all the exercises, I'm just going to talk with you about them. And if I see something that should be whatever, a stock has a beta of 1.5, a volatility standard deviation of 50%.
And the volatility?
OK, all of.
Oh, you will do this exercise.
First picture size.
All of you should know that is what I have told you before is the Leah. The exercise that you have asked me is the same. I mean this is maths, maths more simple. You don't need to make the numbers.
But a stock has a bit of 1.5 and a volatility of 50%.
And the standard deviation of the market is 20%.
What fraction of the stock variance is idiosyncratic?
Exams.
Is the formula that I wrote at the beginning.
Next one, a stock has a volatility standard deviation of 40% and a beta of 1.2 and the volatility standard deviation of the market portfolio is 20%. What is the correlation?
Of the stock with market portfolio. I'm going to do this exercise. I'm going to do it quickly.
Because I cannot explain rewards and if I cannot explain rewards, I prefer to do it. I mean, I cannot explain rewards because there are a lot of information, not too much, but a stock has a volatility standard deviation of 40% and beta of.
1.2.
OK, desktop has a standard deviation of 40% standard deviation.
Of 40%, yes, and a beta of 1.2.
One point, yeah.
And the volatility of the market?
Standard deviation of volatility.
Of the market is 20%. Standard deviation of the market is 20%, yes.
What is the correlation of the stock with the market?
Portfolio.
OK.
This question probably will never be asked in a bit. Why? Because.
It's complicated. Once I'm telling you how to solve it, you are going to see that it's so simple. But this question is there in order to make you think and to work a little. You work a little, you will get the answer because it's not complicated and also you have to.
That can help. I'm not telling you to use ChatGPT, but ChatGPT can answer questions. So like with ChatGPT should be more simple. I'm going to pass the whole glass.
Darren Miss has won.
What I'm asked, what is the correlation of the stock with the market portfolio?
The correlation with the stock with the market. We have never talked about the correlation.
Correlation variance, correlation coefficient, yes. Correlation coefficient is the covariance over deviation A, deviation B, yes.
Do we have the reasoning?
Volatility A, yes, we have. Do we have volatility of the market?
Yes, we've got it, yes. What do we need? We need to calculate the covariance between the stock and the market, yes.
We need to calculate the covariance between the stock and the market.
Where we can get covariance between the stock and the market.
OK.
What is Vinda?
Beta is the comarians between the stock and the market, yes.
Over audience over the market. Make sense.
Sense.
So from here, from here we can say that covariance between A&B is beta A over.
That is for the market, yes.
And once we've got this, we can come here and say.
B.A.
Thanks.
Really finished? Yeah.
So simple once I'm telling you how to solve it, but the point is not in me telling you how to solve it. What is the objective of this exercise? You to think about that beta is.
Beta is the covariance between the stock and the market over the values. This is just refreshing that beta is a regression.
Let me move to the next one.
If a stock is overpriced relative to its value.
Under the capital, where does it look relative to the security market line?
We need this in glass. Yes, you buy. Oh, I like this one. I like because.
Because this has to do.
And I would like to see one that has couples.
Let me come here.
Let me start with you. You buy a risk free 10 year zero bonus I given you, yes.
You buy a risk-free 10 years bonus are given to you. However, after one year the you know the risk free nine years. So it's now higher than the OK.
You buy? Could you calculate the price of Asian Combon?
What do you calculate the creation as in Hong Kong?
I.
It's a unique thing.
I see a payment that will happen in the future or do you calculate the price?
Yes.
Present value is equal to future value over 1 + R raised to T.
How many times do I have written this formula on the number? You buy a risk 310 years, zero on hold at a given yield.
What is the new? The red?
Imagine that the deal is 10%, yes.
After one year, the deal on the risk free nine years is now higher than the original deal.
After one year, this has moved to.
20% yes.
2.
If interest rates go up, what happened with the price?
OK.
If you have not done anything, what I'm saying now will make no too much sense, but.
HPR for one year is.
Price future future value over present value -1. Price in year 9 over price in year 10 -, 1, yes.
If interest rates would have stayed and changed.
If interest rates would have stayed and changed.
HPR will be.
HPR will be interest rates would not have moved. HPR will be 110%.
If I wait in the end, I will get the 10%. If I wait in maturity, I will get the 10%. Interest rates remain at same and I sell it before maturity, I will get the 10%. Make sense.
If.
If interest rates goes up.
Rice will go down.
So I am getting less money unexpected because the new buyer is getting a higher tube.
So.
Because I am getting less return than expected. HPR will go down.
Make sense?
If I explain this.
We will understand it, but the point today is not me explaining this. I'm going to show you one exercise. Any questions regarding this? Fully understanding this is absolutely important and fully understanding the exercise that I'm going to show you.
And then I'm gonna say.
Let me open DX, yes.
Don't tell it. Don't tell it.
Sure.
Sorry.
I would like to leave things.
And I'm going to try to move off. Yes, if it takes less than one minute. If not, I won't. Where is mouse? Here it is.
OK, let me open Excel.
Excel.
OK.
You have a bone.
With 4%.
Coupons.
Four year off.
Surety, you have a loan with 4% coupons, yes.
Four years, three years, four years. OK, one.
One year.
Three of maturity.
And uh.
For person.
Yes.
Trace value equals to 100 or 1000.
OK.
What do you prefer? One first, yes.
OK, what does this mean?
What does this mean?
This means that you are going to receive the years of maturity, couples being paid in an annual basis. You're going to receive three payments of 440 and at the end one payment of 1,000, yes.
You have all with three coupons you will receive 40.
And 1040 make sense.
First two and third year.
You are given the deal of four person or did you calculate the price?
Or do you calculate the price?
By doing price is 40 / 1 4% 40 / 1 4% price to the 2nd plus.
1040 / 1 4% rise to the third. Make sense what I'm doing? I am calculating present value of the first.
Cash flow of the first coupon, present value of the second and present value of the third cash flow that is last coupon plus paid value.
Are you with me?
Because I have asked better, 1000 is a value.
I mean, it could be 100 or 100 for years to be 1004, oh, because this face value.
Last day last football is.
1000.
First coupon, second coupon and last coupon. There are three coupons in bed.
Exits.
So first idea, how do I can play the price?
Or do I calculate the price?
What? How do I calculate the price by doing 1040?
By doing.
The rate is 4.
Person.
How do you calculate the price 40 / 1 4%?
Fix this.
Rise to the first.
This what I'm doing. I'm doing that those numbers.
And the sum of these anyone can imagine can tell me what the price would be.
I have a 4% coupon ball.
I'm completing the price at the deal of 4%.
How much should I invest in order to get a 4% of return if I am buying this?
No one.
OK, 1000 by less 1000, I will get 4040 and 1040. I am getting a four percentage here.
If interest rates goes up to five, price will go down if interest rates goes.
Up to to six.
Price. If interest rates goes up, price will go down. If interest rates goes down, price will go up. Make sense.
OK.
All of you are with me.
3.
In order to buy this.
I have invested 1000, yes.
Look all things that I'm gonna say.
After two years.
You.
So they born at.
Yield off after two years you sell the bonetta yield off.
Two person.
And.
You have.
Brain best.
Rate of.
5%, yes.
Calculate. Calculate.
HBR.
Make sense?
Any questions?
Are you understanding what is written there?
If you buy the coupon, if you pay 1000.
And you go soon.
The bond. If you buy the bond, I pay 1000, you will receive.
Four payments, three payments of 40 at the end of each year and together with the last 40 with the last coupon, you will receive also a payment of 1000.
Are you following me? What does to buy upon me with coupons to buy the right of resilient 4040 and 1040?
Yes.
What I am? What am I going to do?
But it's been said there after two years, after two years.
I'm gonna sell this.
And yes, right after two years.
I'm immediately, I don't know how to write immediately, sure, immediately after. I'm nothing without Jahidi.
Ready. We see.
Yes.
After two years, what has happened? What would have happened in the two years? What would have happened after one year?
And you have received their coupon.
You have for it. What are you going to do with this for it?
Reinvested. Reinvested for one year. Why? Because you need to wait for one year.
You have one exercise like this in problem set one. You remember the stoke exercise that you have a stoke with fumbles. You break the fumbles. Yes, this is the same exercise, but with a ball.
Exams. Any questions?
What is the point after two years?
After June years.
You said please.
What do I have?
Let me calculate HBR, yes.
How do I calculate Hakespeare?
Let me future value over present value. Present value is investment, the investment money, the 1000. Yes, all of you agree.
And now here I need to know.
How much money do I have in year 2?
And because these are two years over 1/2.
Yes.
What do I need to know? How much money I will have in here too?
How much money is going to happen year two? There are three payments.
Immediately after receiving this coupon. So where this coupon is going to be in my pocket. So on this I know that I have.
40.
Yes, before you will be in my pocket.
Also I will have these 40.
We missed it, so 40 times.
At which rate I am reinvesting at that 2%? No. How do you calculate this 41 + 2%? I am reinvesting this for one year instead of one year. There would be two years, yes.
Plus.
One last thing, let me change course.
Let me text, let me.
How much money I'm gonna have here? Let me say A + B + C this.
What is AB and CB is 40? Yes.
A.
Is 40 reinvested at that supercent rate?
1 + 2% makes sense.
Yes, yes, yes.
The 5%, you bring this in the 5% makes sense.
ABLC, Omat CC.
Oh.
After two years and immediately after receiving second coupon, second coupon is B.
You send the ball at a year of supercent.
What is this T?
I am selling the bonet that you love. What is the bonet after receiving the second payment? What is the bonet? What am I buying? What am I buying? I'm buying the right of receiving one unit cash flow of 1040.
How do I calculate the price at which?
I am selling the boat with present value formula 1040 / 1 2%. That is the deal at which I am selling. Make sense. So how do I calculate C?
It.
1040 / 1 2% Make sense?
So let me.
A.
B.
See.
Be is we are for.
Hey, are.
40 reinvested at a deal of 1 + 5% one plus one plus.
5% be right here, 5%.
Yes.
And she's I'm selling these at the 2% rate, yes.
That is 1040.
Over 1 + 2% makes sense.
How much money I will have?
Over these pigments, yeah.
And now let me calculate HPR. HPR is.
Future value over.
Resin value.
Rise to 1/2.
-1.
OK, what I want you to see.
This is present value.
This is future value and this is the rate I am receiving after two years. Make sense.
Let me play with these numbers.
I am buying this at a 4% rate, yes. Imagine that I reinvest this at a 4% rate.
And I am selling this at a 4% rate.
I am buying this thinking about getting a 4%. I reinvest 4% rate and I am selling this at the 4%. What my HPR will be?
No way. What was the question? Then repeat if I buy this at the 4% rate, that is the rate at which I am buying.
I reinvest first coupon at a 4% rate.
And then I saw.
The bone at the 4% rate. What would be my HPR?
4%, four percent. My HPR will be 4%.
All of you understand me?
Why? Because I have bought this thinking about getting a 4%. After one year I'm reinvesting the coupon at a 4% rate and I'm selling this and the new buyer will get a 4%.
The new buyer will not get more than what I was expecting to it. What if?
The buyer is getting up.
10%.
The buyer getting another person instead the buyer is getting money that I would have like that was mine.
So or instead of half of 10% increments, 5%, yes, I am selling this. If interest rates increases, the price will go down. New buyer is getting a 5%, so my HPR will be lower than a 4%.
So let me this 3.5 on the other hand.
And 4%, 4% on the other hand.
If the new buyer is getting a 3%, it's because the price has gone up. It's because I am taking from the new buyer something that I was not expected to take. So instead of a 4%, the return I will get is.
Would be if the new buyer is getting less is because I am getting more than expected. So instead of a 4%, I will receive more than a 4%. Make sense.
OK, the new buyer will get a 4%.
What about the reinvestment rate? Reinvestment rate? That has to do with the new value. Investment rate has to do with what I am getting, what I'm doing with the coupon that I have already received.
May that instead of reinvesting this coupon, I don't reinvest it. I keep it in my pocket.
They keep it in my pocket. What would happen with HPR?
Will be lower 3.9, not too much.
Not too much, because I am talking about just a 4%. I'm talking about a percentage of a 4%.
Make sense? And if I reinvest this at a higher rate than a 4%.
I will get more than a 4%, but not too much.
You see what I mean? Have you understood this exercise?
Please go through this.
Or try to understand these combined with sample midterm. Let me what was this is a 5% and this was 2% no.
Well, I have, yes, 5.
Say fast documents.
Is there OK?
Uh.
Why I have done this exercise?
Because this is with a zero. If you understand the exercise that I have done, you can easily understand this one. Make sense.
Let me continue.
Oh.
OK, this is also important. All the not all. Yes, all are equal.
Help me.
If you purchase a stock six months ago for 60, you have received a dividend of 2% and then sold the stock for 64. What is your advice and holding period return?
I'm gonna go quick.
I have both 460 yes and I I served 464 and I'm getting 2.
So I have, I have all been for 60 and I am receiving 66. All of you see that I am making a 10% of return in six months.
If I am getting 6% in six months, how I will? If I am getting a 10% in six months, how much I will do in one year?
21%.
He's me. But please, I don't want you to actually be legal. I want you to think about what we are doing with race, how to play with race, yes.
It's calculating the HPR. These exercises are so simple. Let me continue. So simple, but you should know how to do that. The standard deviation of a portfolio of two risky securities.
Will be less than the weighted average of the components security standardization as long as the correlation of returns is less than one. What has been there? What has been said there?
This is explaining this makes no sense. You trying to work on this as.
Motions last two times weight A weight B.
Let me write this in the form of aviation A, aviation B times correlation between A&B, yes.
Wendy's.
Do you remember that if correlation coefficient? If correlation coefficient is 1?
Knowing this is absolutely important for the meter. Absolutely important is correlation and I'm summarizing.
The correlation is one.
This is a Newton polynomy and I can say I have demonstrate this in class. Yes, I can say that this is equivalent to weight A deviation A plus weight B deviation B. Got it.
The correlation coefficient is one.
All of you are with me if correlation coefficient is lower than one.
This number will always be lower than this because positive, positive, positive, positive, positive, positive, positive. So if this is lower than one, this will be lower than this, yes.
What is the question that is being made? The standard deviation of a portfolio to risky securities will be less than the weighted average of the two components. This is the weighted average of the two components. Well, this will be lower than this in all cases when the correlation is not perfect.
This question A so the answer is A, but fully understanding this I will. I strongly recommend you to go through.
When we were talking about US and Japan and the Excel file where we were playing with correlation, hope we construct that perfect correlated. Yep, you understand, you know what I'm talking about.
OK, considering consider the following three risky assets.
This one.
This is absolutely complicated. This is there in order to you're not going to find something like this, but in some point we have one you are supposed to work with this has.
This same exercise you found it in problem set two and problem set three and normally.
You should have a for a B, but if you see the weights.
It's the same portfolio, but the only thing that changes is the risk. So you are combining the risk reason with a stock and a stock combined with the risk reason is combining the stock itself. So the correlation is perfect.
But this one I don't care too much about this exercise, thinking that just 3 minutes left.
OK, more things.
Consider a portfolio that has a sore position negative in the market with the residual investment.
You'll be waiting a portfolio that has a short position.
OK. So you have the CML, the market, the risk free you have if you are short the risk free or you are?
A portfolio that has a short position, no in the market portfolio with the residual invested in the refills.
You are here, yes.
You are there.
It lies on the CMM, Rathika Nadal line.
This is the capital margin line. Is this the capital margin line?
I don't know.
It's efficient. No, it's not efficient. Yes, it's not efficient. So the current transfer is C. So that's not live on the CML. CML is just efficient from here, not the inefficient part. Yep.
Make sense?
And his potential are not in my portfolio for a minute now.
Considering the two following risky assets, one is respected return a portfolio which is the this is just calculating.
This is just calculating the.
You cannot say in this, it's just applying the formulas.
OK, a portfolio consisting of positive pitemonies invested in two risky securities that has a correlation 0.
A portfolio consisting of positive amounts invested in two risky securities that pass a correlation.
you know
Oration 0 means that there is a minimum balance portfolio, but we don't know anything has the weighted average of the standard deviation of the two securities.
Is your security.
In order to be a correct population coefficient should be one. So A is not correct less than the standard deviation of the less risky security.
I will let that be is the correct. You're not going to find something like this, something like this. Probably you won't find something like this, but you can find something similar and you should understand what we are doing. Why? Why this is correct?
Let's understand the relation of the legislation security why it is correct.
Because we are diversifying as as correlation coefficient is 0, we can diversify and diversify means constructing a portfolio.
OK.
I didn't have time in order to continue, but we have to make a quick review of almost everything. Time value of money is far from now, but working on time, I mean it's far because we saw it at the beginning of the course.
After the midterm, time alumni is going to be absolutely important working with. We will work a lot with bonds, we will work a lot with the stocks, that's also.
Knowing what happened if correlation is perfect and negative is important also. So if I were you, I would.
First, I will dominate for on set one, two and three, then I will try to end at least we don't have too much time.
Or what do you review? Any questions? See you on Friday. Yep.
Thank you. Welcome.
Thank you. Welcome. Bye.
OK. And I just come to this one. Oh, yes, I don't know where I will be, but yes, this room will be perfect. Welcome.
Please.
