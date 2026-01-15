# 📘 **Teaching Log – Session 14 (20 Oct 2025)**

**Course:** Financial Markets (NYU Madrid)  
**Professor:** Luis Garvía  
**Topic:** From Midterm Review → Introduction to Equity Valuation

---

## 🧭 **Session Overview**

**Objective:**

- Close the **midterm review** by consolidating the bond pricing and HPR exercises.
    
- Introduce the **Dividend Discount Model (DDM)** as foundation for **equity valuation**.
    
- Connect valuation logic (PV of future cash flows) with previous topics: _time value of money_, _CAPM_, and _market efficiency_.
    

---

## 🧩 **Structure of the Session**

### 1️⃣ Midterm Review (First Half)

- Discussion of **grades distribution** (range 22–41 / 47).
    
- Clarification that **portfolio theory** questions can be omitted for next stage.
    
- Focus on **Exercise 2 (Bond Pricing + HPR)** — the “core” of the exam.
    

#### 🧮 Bond Pricing Recap:

- Coupon rate = Yield → bond priced at par (≈1000).
    
- Formula:  
    [  
    P = \frac{C}{(1+r)} + \frac{C}{(1+r)^2} + \frac{C+FV}{(1+r)^3}  
    ]
    
- **HPR in year 2:**  
    [  
    HPR = \frac{40(1+0.01)+40+\frac{1040}{1.02}}{1000} - 1  
    ]  
    → Emphasis on reinvesting coupons and the effect of selling yield (2%).
    
- Message: _“Fully understanding this exercise is essential for fixed income.”_
    

---

### 2️⃣ Transition to **Equity Valuation**

#### 🔹 Definition:

> “Owning a stock means owning a part of the company — and its future cash flows.”

#### 🔹 Valuation principle:

[  
P_0 = PV(\text{future dividends}) = \frac{D_1}{(1+k)} + \frac{D_2}{(1+k)^2} + ...  
]

- If **dividends are constant** → perpetuity:  
    [  
    P_0 = \frac{D}{k}  
    ]
    
- If **dividends grow at constant rate g** → Gordon Growth Model (GGM):  
    [  
    P_0 = \frac{D_1}{k-g}  
    ]
    
- Required return ( k ) from **CAPM**:  
    [  
    k = R_f + \beta (R_m - R_f)  
    ]
    

#### 🔹 Worked Example:

Given:

- $( D_1 = 4 ), ( R_f = 6% ), ( \beta = 1.2 ), ( R_m - R_f = 5% ), ( g = 4% )$  
    → ( k = 12% )  
    → ( P_0 = \frac{4}{0.12 - 0.04} = 50 )$
    
- **Sensitivity analysis:**
    
    - +50% in dividends → ( P = 75 )
        
    - +50% in growth → small price rise → dividends matter more than growth.
        

---

### 3️⃣ **Conceptual Link: CAPM + Valuation**

- Stock price = _present value of expected future dividends discounted at required return (CAPM)_.
    
- If CAPM return < actual return → stock undervalued → buy signal.
    
- Introduced **alpha (α)** as the gap between realized and expected return.
    

---

### 4️⃣ **Intrinsic Value vs Market Value**

- _Intrinsic value_ = PV of expected future cash flows.
    
- _Book value_, _replacement cost_, _liquidation value_ used as comparative metrics.
    
- Example with a company:
    
    - Assets = 52.39, Liabilities = 12.03, Equity = 40.36.
        
    - Shares = 5.6B → BV/share = 7.2 USD.
        
    - Market price = 21.48 USD → Book-to-Market = 0.33.
        

**Interpretation:**  
Low B/M → high market optimism (Apple today).  
High B/M → undervalued or mature firm (Apple 20 years ago).

---

### 5️⃣ **Tobin’s q and Bubbles**

- ( q = \frac{\text{Market Value}}{\text{Replacement Cost}} )
    
    - If ( q > 1 ): market overvaluation / potential bubble.
        
    - Example: S&P 500, Bitcoin → all-time highs → potential overvaluation.
        

---

### 6️⃣ **Dividend Discount Model Recap**

| Case            | Formula                 | Interpretation                  |
| --------------- | ----------------------- | ------------------------------- |
| No growth       | ( P = \frac{D}{k} )     | Constant perpetuity             |
| Constant growth | ( P = \frac{D_1}{k-g} ) | Gordon Growth Model             |
| Variable growth | Multi-stage DDM         | Used in corporate finance later |

---

### 7️⃣ **Earnings, Retention & Growth**

- ( \text{Earnings} = \text{Dividends} + \text{Retained Earnings} )
    
- **Retention ratio (b)** = proportion of earnings reinvested.
    
- **Growth rate (g)** = ( b \times \text{ROE} )
    
- Revised DDM:  
    
    $P_0 = \frac{(1-b)E_1}{k - b \times ROE}$  
    
    
- Leads to **P/E ratio**:  
   
	$\frac{P_0}{E_0} = \frac{(1-b)(1+g)}{k-g}$
    
    (Introduced conceptually; to be developed next class.)
    

---

## 📈 **Key Formulas Summary**

| Concepto         | Fórmula (Renderizada)            | Meaning               |
| ---------------- | -------------------------------- | --------------------- |
| Bond price       | $PV = \sum \frac{CF_t}{(1+r)^t}$ | Time value of money   |
| HPR              | $\frac{FV}{PV} - 1$              | Holding Period Return |
| CAPM             | $E[R] = R_f + \beta (R_m - R_f)$ | Required return       |
| Constant DDM     | $P_0 = \frac{D}{k}$              | Perpetuity            |
| Gordon Growth    | $P_0 = \frac{D_1}{k-g}$          | With constant growth  |
| Retention growth | $g = b \times ROE$               | Sustainable growth    |

---

## 🧠 **Learning Objectives**

After this class, students should be able to:

1. Compute bond price and HPR under changing yields.
    
2. Understand how to derive **intrinsic value** of a stock using DDM.
    
3. Relate **CAPM** output (expected return) to **stock valuation** decisions.
    
4. Explain the meaning of **book value, market value, and intrinsic value**.
    
5. Recognize that **valuation = time value of money + expectations + information**.
    

---

## 💬 **Instructor Notes**

- Great energy after midterm; students relieved and curious.
    
- Key conceptual bridge built: from _efficiency and pricing_ → _valuation and fundamentals_.
    
- Humor (the “cow” example) effectively illustrated liquidation vs going concern.
    
- Next session: deeper into **retention ratio, ROE, and P/E multiples**.
    

---

## 📚 **Next Steps**

- Review **Exercise 2** (bond HPR) and share Excel solution.
    
- Start **Problem Set 4** (Equity Valuation).
    
- Read on **Dividend Discount Models** and **Price–Earnings Ratios**.
    
- Preview next class: _“Earnings, Growth, and the PE Ratio”_.
    

---

¿Quieres que te genere ahora también la **versión para los alumnos en inglés (Student Notes + PDF)** como las sesiones anteriores? Puedo hacerlo con tono divulgativo, breve y limpio para enviar por WhatsApp o subir a Brightspace.



# Transcripción
20 de octubre de 2025, 5:10p.m.

  
Well.  
No, not seeing. We are not.  
And yes, we are going to review the exam together, but you cannot take with you the exam. The grades I have served with you in the WASA group.  
Then numerical. How many questions? This questions are worth 19 questions 19, so 2 * 90 is 28.  
Twenty-eight, 30th, 2019, 30th, 30th, 19th questions. Sorry, sorry, 603232 + 15.  
32 plus 1547. So the grade is over 47 over 447. So the one that has one in this grade of the class was 41.  
I'm from between 41 and 22, yeah.  
No more or less I can.  
Works great would have to do probably if I mean a work great. Now it's a little disaster, but.  
It's difficult, difficult anyone to get less than a bit at the end, but you should know how to work with a hyper plan. You should know how to work with bond pricing, yes.  
This is the I have, Sir. All great. You can take. You cannot take with you your deleted. I want to go.  
2.  
Now let me start with the second exercise with the exercises. The second one. The second one is by far the most important exercise.  
You have in the midterm and you review.  
If you review, I am downloading this from the Excel I have shared with you. Did you see the exercise that we did last day?  
Before the weekend, I don't know how to solve this.  
No.  
I don't know. I'm going to be happy.  
If you if you review the exercise we did before, anything is the same exercise, yes.  
I mean, I don't know if it is the same exactly or not, but first idea.  
You have about 123 years of maturity with couple rate of 4%.  
4% is a congrade, so you will have three coupons, 4040 and one 1040, yes.  
The rate, the rate is 4% when you buy the yield is 4%. You are buying this at the yield of 4%. Make sense?  
How do you calculate the price? How do you calculate the price by doing present value of future cash flows?  
First cash flow 40 / 1 4% 40 / 1 4% rise to the 2nd 1040 / 1 4% rise to the 3rd.  
Make sense?  
Please, I want all of you to fully understand this exercise and you will do it because in three classes time we will go into fixed income and fixed income will have to do with bonds, yes.  
Understanding fully understanding this exercise.  
It's really important. You have a loan with 4% coupons, three years of maturity and a year of 4%, yes.  
What is the price of this bond?  
One family.  
Because cooperate is equal to the yield. How do you calculate the price by doing present value of future cash flows? Make sense?  
Yes, now you are asked to complete HPR in year 2.  
You should calculate HPL in year 2. How much money are you going to have in year two? We can distinguish between three different cash flows.  
On 1/2 first coupon in reinvested 40 * 1 1%, yes.  
This is the first coupon being reinvested plus the second coupon 40.  
Yes, that's the money that I'm going to proceed by selling this ball.  
1040 / 1 plus at which rate do you sell this ball?  
Two person.  
Over present value that is investment value 1000.  
1/2 -1 yes.  
We did this exercise the day we prepared the meeting. We did it in class together, yes.  
If you have any question you can ask now, but also I have office hours.  
Understanding fully understanding this exercise is absolutely important for where it comes.  
Regarding portfolio theory, you can omit portfolio theory.  
Yes, let me have you understood this.  
Please review it. I have said I have served with you the excel where he said how to solve it. OK, we will do more exercises like this, but fully understanding this is important.  
OK, let me go to exercise. First exercise. Yes, first exercise. First exercise is really simple. Really, really simple. It's just.  
Calculating. What is the SNL calculating? What is the expected return?  
And there is one alpha. What you should do with alpha? Add alpha to the spectrum return. The spectrum return is the risk free rate plus beta times market premium. Careful because what was given is market premium.  
If you have, yes, consider return of the market market premium. I have not considered this exercise at all, yes, and I have.  
I have did it extra great. You have written something.  
Plus alpha. Yes, yes, take the numbers and I think that expected return is 12.5.  
12.5 It's just taking the numbers, which rate is whatever, beta is whatever, market premium is whatever. And that's that's it, yes.  
Make sense?  
Let me go to last exercise.  
Best exercise?  
You were given a portfolio, yes, you were given a portfolio.  
And first thing you were asked to calculate was correlation coefficient. How do you calculate correlation coefficient?  
It.  
By doing covariance between A&B over deviation A, deviation B, yes.  
Is.  
If you just calculate this correlation coefficient, you will get that the correlation coefficient is -1. These two stops are perfect negative correlated.  
No, not yours. I mean, I'm looking for.  
Looking for.  
Yes.  
I don't know if there was at least with you, but there was a negative.  
There there's something similar. It was like a positive one. Yes, there was, for example, question 9. How can I construct a risk free portfolio in a whole world that are only risky assets?  
Only if I have two assets with perfect negative correlation. This is not the correct one. We won't see, but here in the test we can find answers that can help. We are going to go through this now.  
What I'm saying is that if correlation coefficient is -1, yes.  
There will be, I don't know how the assets you have to stops. The investment opportunity set is aligned.  
These are like we saw this.  
When we made the review the day before, I told you that then yes, investment opportunity service.  
Yes, I like it. So you can create a portfolio with 0 risk. So what is the what is the variation? What is volatility of the minimum variance portfolio?  
See. Yeah.  
Because of that, when you were asking me how do you want, how precise do you want it to? Because of that, I couldn't answer. Yes, drawing this is enough. I mean drawing this. I don't remember the data that you put here a.  
You right here, B. You're going.  
Yes.  
This one, once you know how to go from here to there, is so, so, so simple, but you know it.  
Just knowing that this -1 that you can create a risk free perform. Make sense now.  
Let me go to the test questions. Any questions do you want me to go through in particular?  
Please, yes. Can you let me? Thanks.  
Oh, yes.  
You have stored Google. You have the risk reasset, yes.  
And you are combining, for example, this is talk with this one, yes.  
Hey.  
The quickly waiting. What is the correlation?  
It with Google and itself.  
What is the correlation between Google and itself? It's what? At the end, if you correlate the risk free asset is like doing nothing. We are just doing the correlation between Google and our risk.  
I'm not done with.  
And Google with a reasset, the reasset. That's not saying anything and at the end what you are doing is correlating Google with itself.  
Yes.  
More questions. OK, so the answer is one 100%, 100%, 100%, Yes, you said it was wrong. I mean, I don't know what is the thing if they return on Google have a volatility of 20%.  
What is the correlation between Google and the?  
We turn on a portfolio that has 50%.  
For reason should be 100% fees 10%.  
Oh, this is I mean, this see all of you have, yeah.  
The answer, correct answer is C Yeah, send me a a WhatsApp and I will correct and send you and write in your back. So but send me the WhatsApp. Now I don't care back instead of 12.  
You will go there.  
30 that it will be 26, yeah.  
I'm sorry. No more questions. 51 fact, no?  
Assume Google has an expected return of 12 and a volatility of 40, Walmart has an expected return of 8% and a volatility of 30 and the correlation between the return.  
OK.  
Because I want you to read, because I want you to read the question 50, no.  
I want because what is the problem with this exercise that I am giving you too much data?  
You have much more data than what you need. The question is simple, but you should know what data is what you need. Assume what is the portfolio weight in Google for a portfolio that has unexpected return of.  
40%, yes.  
40%  
Google. Thanks. Expected return on Google is 12%.  
Plus.  
Take the return on Walmart is 8%.  
Take the return on Walmart is.  
8% yes.  
Are you with me? You're asked what is the portfolio weight in Google? No.  
In order to calculate portfolio weight out and this 40 percent, 40% is weight. I'm looking 4 * 12% + 1 minus the weight times 8%, yes.  
And from here you can calculate away.  
Yes.  
This is 14, this is 12, this is 8, yes, 1412 and 8 so.  
You need to put short on this and long on Google.  
What are the numbers you've got on the answers?  
What are the possibilities? 1.5? The only one is one. The only possible one is 1.5. Let me just write 1.5.  
OK.  
14 is equal to 1.5 times 12 plus  
Minus 0.5 * 8, yes.  
This would be you understand what I mean.  
You can yes answer or more questions.  
Thank you.  
Let let me see the let me see all the questions as you have brought a copy. Sorry.  
OK, question 2.  
Question question two. Do you know why you have to get you have made this question incorrect? Do you know why?  
Perpetuity 100.  
Present value is 100, no.  
This company rate is 5% * 5%. This is a cash flow loss of five, yes.  
The investor decides to show the perpetuity after one year just after receiving first payment. The market value at that point is calculated using a discounted rate of 10%.  
Yes.  
So I have 5, so future value after one year is going to be 5 over 10% that this will be 50, yes.  
So HPR to be 50 / 100 -, 1 that this is -50%.  
Something I'm missing shopping. I'm missing shopping.  
After one year you have just 50, you have you have forward first coupon that is been paid. You should add 50 plus.  
Bye.  
The first cash flow that has already been paid. If you read this, the perpendicity is being sold after having received their statement. So because this is minus minus 45% and now -15%.  
Yes.  
More questions?  
Yes.  
OK.  
I'm going to use, I'm going to close this one. I'm going to open. I'm going to do, I'm going to do this the long way and the short way, yes.  
Don't wait.  
50464450 no no.  
The long way is.  
The long way is 42 / 49 one at 5%.  
Yes, and I need to calculate.  
One plus. I'm going to calculate the HPR, yes.  
Yes, sorry, the HP. I'm gonna complete the average, the geometric average, yes, yeah.  
That is gonna be.  
These times, these times, these times, these times.  
These times.  
Yes, yes, 1.25 and then.  
This rise to how many periods of time there are 123456.  
1 / 6.  
-1 and this is 3 point.  
79 Yes, this is the wrong way. How this should be done? The geometric average return we saw in class that is the same as calculating the HPR and the HPR is.  
3.  
Yates Pieris.  
4.  
Over 40 rise to 1 / 6, probably because here there could be people that has done 1 / 7.  
Don't if you have make a mistake in this exercise don't work or because it's normal -1 and this is the same result, yeah.  
No questions. And again, let me repeat, you can't forget about portfolio theory and about this exercise, you can also forget. Well, this has to, Yep.  
Four weeks on time. Will you let me? Thanks.  
OK.  
OK.  
OK.  
Let me move here.  
And there the cap, which of the following assets would exist in equilibrium given risk rate?  
3%.  
And market premium of 5%.  
Are the premium off?  
5%.  
And.  
Volatility of the market.  
Viation.  
Of the market.  
Volatility of the market is.  
Yes.  
OK, and let me write here the assets beta.  
One beta -1 and beta of two. What else?  
Expect a return.  
Off 8%.  
-5% and 30.  
Person.  
Volatility of 3040 and 3530.  
5.  
And 35, yes.  
What we should comprove?  
Two things and then return Max.  
And they that SAP ratio is lower than SAP ratio of the market.  
Let me here see what is the specter return giving this beta and this risk rate.  
Plus beta times market premium.  
Yes. So this is 8%.  
2 at 30, yes, so this one.  
That's simple.  
Now search ratio.  
Charge ratio. What is charge ratio of the market?  
What is the market? What is the market? Here is the market, yes.  
Yeah.  
Search ratio of the market is.  
Charge ratio of the market is with market premium over deviation, no.  
That 25% then we calculate such ratio of each.  
Uh, return minus.  
3%.  
Over. Sorry. Yeah.  
60%.  
The no and.  
This is lower and we have already seen that and in this 33.33 is higher than the market.  
But again, you have done this great personally, so this.  
Doesn't match, so correct question should be.  
Under the cabin is B only as a one. Yeah, this is yours. No more questions.  
No more questions.  
Let me see.  
Yes.  
Question 9.  
Question 9 is taking if you would have answered B.  
Is not correct because what I'm gonna say.  
But let me tell you why.  
I am. I have taken your seat and I'm with question. Do you know why?  
Question nine. You know the number of transfer? No, I got it wrong. Let's see that. Let me show you if two assets are perfect, negatively correlated, what we have seen in last exercise you can get.  
A free risk portfolio that will be this one, yes.  
But what does question C says, Councillor C?  
Two perfectly cool. If these true stocks, if true stocks are perfect, negative, sorry, perfect, positive, correlated, the investment opportunities said said place on a line, no.  
And you can serve this one.  
We can create a risk free portfolio.  
But again, if it is answered, you have answered BI will not be worried if I were you.  
Make sense?  
If I were you, I would just worry about knowing how to do exercise.  
True.  
Exercise true. I won't forget about portfolio theory.  
And I will start working.  
From now from today's class, then I'm going to start with equity valuation. Equity valuation is so simple. You start from today equity valuation. Let me.  
The slides and also I'm giving you problem set 4.  
Problem set forth in order to what you should know when talking about ethnic immigration.  
Yes, time value of money and the most simple part of time value of money, perpetuities and calculating present value of future value. Yes. Do you care to give me back the meter?  
Yeah.  
Thank you. Thank you.  
OK.  
OK, everyone is here, no?  
No one is listening. We are. Yeah. Thank you.  
OK, let me.  
Oh, this. What is this? This is Christina's.  
What is this? This is what?  
Hey.  
OK.  
Go directly to the the phone. What are we going to see today?  
I'm going to do a super summary. Yes, you have a stock. What is a stock? A Bishop owners. It's a document that you own a stock, you own part of a company. Makes sense.  
In terms of finance, owing a stock means in terms of money, you own a stock. What can you receive?  
Did you all messed up? You will receive money in the future. Why?  
Because of two things.  
If you own the the stock and you don't sell the stock, which money will you receive? You will receive dividends.  
Yes, OK. And if you sell the stock, you will receive the money that you will receive by selling. Remain that you will never sell the stock. How can you get the value of the stock by calculating present value of future dividends?  
Yes, imagine that a stock is going to receive a constant dividend call key. OK, what do you call this later in this? So this is BBBB. Sorry, B.  
You are going to receive a constant dividend. What you should do? How do you calculate the price? By doing price is equal to the dividend. This is a perpetuity.  
I mean dividends one dividend 21 plus the discounting rate, one plus the discounting rate right to the second and so and because this is a perpetuity you know that.  
It's going to rate. How are you going to get this discounting rate with CAPE? But you don't need to know more than what you are going to see today regarding CAPE.  
What do you call this letter KKK is going to be equal to the risk rate plus beta market premium, yes.  
What is this expected return from the stock? How do you calculate this price?  
Yes.  
With this.  
What is the dividend?  
Will grow at a constant rate.  
So dividend one is dividend 0 and dividend T is going to be dividend 0 * 1 + E rise to T makes sense. What if the stock price is going to grow at a constant rate?  
Price today is going to be dividend 1 / K -, G.  
Yes.  
We are going to see this in today's class, but what are the mass you need to take from today? Perpetuity and calculating present value of future money? Yes, so equity valuation.  
Demands are as simple as this. We will see two or more things next day.  
But the most important thing you should understand in order to understand what we are going to talk about during today's class and next day's class is time management. Careful because.  
After working on time value on equity evaluation, we will dedicate just two classes to talk about equity evaluation. Yes, after these two classes we will forget it and then we will start talking about fixing con.  
And then.  
Second part of the term you will see to match different ideas. First part has to do with portfolio theory. It's not portfolio theory is understanding something that is a little bit complex.  
Now what we will see are three different parts. It's part by itself. It's simple, but if you wait in the end, it will be a big snowball.  
You see what I mean? So please start walking from today because the snowball can drop, yes.  
OK, let me start with today's class equity evaluation.  
The dividend discount model. I have already spoiled the dividend discount model. Yes, what is the dividend discount model? 0 dividend growth. 0 dividend growth is and if we consider.  
Constant dividend growth. We will see that.  
He's asked that a question. The one you've got in the room. OK.  
Have you studied accountant, accounting?  
What is the balance seat?  
A piece? Sorry, a piece. A picture of what you have on the moment. What do you have? Assets and how do you finance? Where do you get the money from? You can get the money from two different places.  
The abilities, the abilities are money being asked to a third party or from your own pocket that this is calling with.  
Balancing valuation.  
Book value, liquidation value and replacement cost.  
Why is?  
Think about Accra.  
Yes.  
What is the book value from the car? The amount of money that you pay for the car?  
Vincent, who are you? How much did you pay for regarding?  
Replacement cost.  
How much will it cost to buy a new car? Yes.  
And liquidation value. Therefore, with liquidation value, what is the liquidation value of the cap?  
Anyone?  
Liquidation value.  
You understand what I'm saying?  
What is the liquidation value of?  
If you sell the car, if you sell the car, how much money will you receive?  
One 188 cylinder car.  
How would you calculate the value at which you will sell the car?  
Probably depends on the age of the cow. It will have to do with the replacement cost, no?  
Make sense?  
But there are also two other estimates.  
With all, with all respect to animals, yes, I know before there are cows and I'm not thinking if anyone get offended because what I'm going to say, I ask, please forgive you, you can kill the cow in order to get meat.  
Make sense? But also the cow can die because of a disease.  
If the cow dies because of her disease, liquidation value 0.  
And if you sell the meat, you can calculate how much the meat.  
Will not cost. What is the price of the lead? Make sense? Thinking about companies is not the same selling a company.  
That's going into a rushing, yes. And one important thing, how are we going today? How are we going to calculate the price of the car?  
By calculating we will see next slide or the slide after next one by calculating.  
Present value of future cash flows that how will you calculate present value of future cash flows? Discounting the milk the cow is supposed to generate.  
And regarding liquidation value, imagine that I have a business and the business happens into a building. Yes, you have a business that happens into a building and you want to calculate how much does the business worth.  
I get as close, but also the building has a price. I'm careful on one hand I am selling things in the building, but also the building has a price.  
You will will to add the price of the building plus the plus the how much you are getting because of the business. You will add these two values.  
If you do this, it would be correct. Why? Think about the cow. You can just do one or you kill the cow and sell the meat, or you get the cow alive and sell.  
And sell the meat.  
Meat or meat, but what you cannot do is selling the meat and also the meat.  
You understand what I mean. If you are doing, if you are running a business in a building, the building is part of the business.  
You cannot sell the building and continue with the business. You understand what I mean.  
Yeah, what I'm talking about, I'm talking about corporate finance. I'm talking about how to calculate the price. I will have to continue with this course. You will have corporate finance next year.  
We are not going to go into this detail, but you should know all these things. Make sense. OK, book to market ratio, assets 52.39, liabilities 12 and equity 40, yes.  
Let me, yes, go with.  
Or with these numbers.  
OK.  
Quickly 52.39.  
12.03 and 40.36 of equity. There are 5.6 billion shares.  
Billion shares.  
Cheers.  
So.  
So if there are, this is the number of service, yes.  
5.6.  
This is the number of shares. Let me I need the price of the.  
OK, book value. Yes, first thing I need to calculate 5.6. So book value is equity 40 / 5.6 billion that it will be 7.2.  
Dollars per serve. This is book value, yes.  
And this company quotes in the market the value per share is 21.48. Yes, you go to the market and the value is 21.48. Make sense?  
What is book to market ratio? Book to market ratio is book over market ratio 0.33, yes.  
What does this mean?  
What I'm doing is comparing not price, not price with.  
Book value and if we compare market price with book value.  
What can we consider that the investors have paid?  
Yours have babe.  
And they are the investors, the ones that has bought long time ago, a part of the ownership of this company.  
Now they should be happy.  
If book to market is high.  
We are talking about Apple today. If book to market ratio is low, we are talking about Apple 20 years ago. Make sense.  
And Tom in skew, if we compare market value over replacement value, this is an indicator of balance. If the market is staying much, much, much more than book value, this means that probably we are facing about.  
These are all the problems. What is the problem with balance now? SP500 EC maximum, Paul EC maximum, Bitcoin EC maximum.  
What is the problem with what? That Fed is printing too much money, but this is not going to be as in the final.  
So in skew is above L indicator. Any questions?  
I need to know how to turn on the light in this room. Anyone knows?  
I I feel stupid when pressing all that buttons. It should be simple, but I don't know how to do it. You can try if you want.  
OK.  
Market value, book value. Do you remember marriage efficiency?  
If we compare in the semi strong form, what did we do in order to see if a market is efficient or not? We compare book value with market value, yes, and Warren Buffett.  
Used to buy see companies.  
Considering there.  
There book, not book. Sorry, intrinsic value. What is intrinsic value? You take in short cash flows and you get a value. You compare this intrinsic value with the market value and it's cheap, you will buy. So what are we going to focus now?  
On calculating intrinsic value, what is intrinsic value? The value you will get by calculating present value of future cash flows. Makes sense.  
OK, what is a stock? A stock is a claim to future dividends. It's a claim to future dividends. If you own a stock, you will receive future dividends. How do we calculate the increasing value of a stock?  
By calculating present value of future or future dividends, yes.  
So we will need to know what are future dividends and also we will need to know the discounting rate, where we will get the discounting rate from CAPEM.  
So here suppose current stock price is 48.  
Hooray stock price is 48.  
Good day, yes.  
We expect in one year.  
The price we expect the price to be 52 and.  
A dividend of four, yes.  
And also I am told that better is.  
Beta is 1.2.  
Race through rate.  
East.  
6%.  
And the expected market excel return is 5%.  
Market premium.  
Market premium is 5%, yes.  
And you should calculate.  
Gays to be.  
And HBR, yeah.  
I'm going to fill this with water. I let you 2 minutes to play with the numbers, try to do things by yourself and then I will go back and see with you.  
Did say.  
Right. It definitely works. I have another class in here. My Spanish teacher knows how to do it, but I don't know. I don't know how to do it. I did it once. Yeah, you did do it.  
I did it the first day. This makes this weather. Let me.  
Let me calculate the expected return, what the market expect. Yes, expected return is risk rate plus.  
Data times, Margaret Premium, yes.  
And this is 12%.  
And now what is the HPR? HPR is future value. Future value would be 52 plus the diesel.  
Over.  
48 -, 1, yeah.  
This is going to be a 60 percent, 60%, yes.  
What is the point that there is a positive alpha of 4%?  
Why? Because Kapem does not, does not fulfill.  
What is 60% as part to do?  
4891 half of this return comes.  
Wrong. They increase your price and.  
Part of this return.  
The other half came from the dividend.  
Makes sense.  
So the market thinks this stock is going to get a 12% return and you know that this stock will get a 16.67%.  
So what you should do with this stuff?  
It's bad. Why? Because it's underplaced. Makes sense.  
OK, computer work, yes. Any questions?  
Let me move to the dividend is common.  
Assume that the mark. So regarding this, just this picture. Yeah, I'm going to share with you not now. Yes, once the glass finished, say fast documents session.  
5015 OK.  
Dividend is common. How do you calculate the price of a stock by doing present value of what we have already done?  
Oh, let me come here. Let me come here.  
What should be given the spectrum return? What should be the price today considering that what is the price?  
In case supposed.  
Price. Yes. What is the price this company should have? It's our value.  
52 plus the dividend, yes, over.  
1 + 12% Yes, the price should be 50.  
You should buy this stock because considering the expected return, the market is better. The risk we are assuming the price instead of being 48 should be 50. Please cents.  
Make sense?  
OK. So how do you calculate the price of the stock by doing present value of future dividend plus the price in one year time and you can consider instead of one year?  
So years 3 and so you can calculate the price of one stock by considering present value of future dividends. Make sense.  
What if dividends are constant? This is a perpetuity. You can calculate the price by doing dividend over KPK.  
What do you get from company? Make sense?  
OK, what if there is growth? If there is growth, the formula will change and you can calculate the price by doing dividend 1 / K -, G or dividend 0 * 1 E.  
Over K -, X.  
Let me just one quick example.  
One quick example.  
Idea is dividend is 4%.  
Dividend is 4% dividend, yes, risk rate.  
Risk free rate is 6%.  
Beta 1.2.  
Margaret, bring you.  
Is five.  
Person.  
Grow E 4.  
For person, yes.  
This is dividend one. How do you calculate price today? In order to calculate price today, first thing you need to calculate is KK is refru rate plus beta times.  
Market premium, Yes, this is the discount rate that is 12%. And how do you calculate the price today by doing dividend one over?  
K minus, yes.  
And this is going to be.  
50 And now what we can do? What can we do? We can do a sensitive analysis. We can increase in 50%. If we increase dividend in 50% dividend, new dividend will be 6, yes, the price would move into 75.  
If we increase grow in in one in 50%, the price will increase, but not too much. Yes, we do this and we see how each one of the factors.  
Affect to the price, yes. This is here just to say that dividend is the thing that will affect the most. Grow is important, but not as not as dividend, yes.  
So we are almost done. Yes, let me add one thing in order to.  
Next class.  
Next class.  
We will see one more thing.  
Earnings.  
A company has earnings, yes. What can a company do with these earnings?  
The company can serve these earnings with their shareholders or can reinvest the earnings in themselves. Make sense? Earnings. There are earnings. What can you do with these earnings? You can give these earnings.  
To the shareholders, you can give these earnings to the shareholders and you can repest this money yourself. Are you following me? Can you hear? Yeah.  
So with the earnings.  
1 -, B What is B? You will see that B is flow back ratio. Next day we will talk about flow back ratio.  
Dividends.  
Bandings, for example, 0 dividend 0, yes.  
If I decide not to pay dividends, global ratio will be 100%, yes.  
If B is 1, if global ratio is 100%, no dividend will be dividend. What will the company do if they don't pay dividend? They keep money with themselves and they will grow.  
Make sense? If you retain money, you bring less money. If you don't need money to your shareholders, what are you going to do with this money?  
Bro make sense?  
Next day we will talk price today is dividend 1 / K -, G yes.  
Dividend one is dividend 0 * 1 g / K -, g, yes.  
Price 0 is.  
1 -, b times in than 0 * 1 g / K -, g times earning 0, yes.  
Are you following me? What can I say? Next day we will work over this price 0 over earnings 0. What is price over earnings? It's our ratio that is called price over earnings ratio there.  
And you have a beer, a ratio, BEEBE. In Spanish we say a ratio. That is BER ratio.  
Next day we will start with this and we will see one example talking about beverage. Yes, please.  
Review today's class and also if you want, or if you feel you want to work a little bit, try to fully understand exercise 2 from the meter.  
All of you have exercise too in WhatsApp in Excel, yeah.  
So at the end, what are we going to do? We are going to continue working with 10 value of money.  
Thank you, Professor. Thank you.  
OK.  
Thank you.  
Welcome.  
OK.  
OK.  
That's enough.  
OK.  
Give me a second.  
D, D  
OK.  
Um.