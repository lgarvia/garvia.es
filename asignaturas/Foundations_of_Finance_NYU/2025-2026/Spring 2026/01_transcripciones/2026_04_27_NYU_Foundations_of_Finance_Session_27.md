# 📘 **Session 27 – Class Report**

**Course:** Foundations of Finance  
**Date:** April 27, 2026  
**Duration:** 1h 21min  
**Type:** Final Exam Preparation (Sample Final 1)  
**Instructor:** Luis Garvía

---

## 🎯 **Session Objective**

This session is a **full integration and consolidation session** focused on preparing students for the final exam.

There is **no new theoretical content**.

Instead, the session is built around:

- Solving **Sample Final 1 exercises**
    
- Reinforcing **core concepts across the entire course**
    
- Training **problem-solving methodology**
    
- Clarifying **what is important vs what is not for the exam**
    

---

## 🧠 **Core Concept of the Entire Session**

> “The whole course is one idea: present value of future cash flows.”

Every topic revisited during the session (equity, bonds, forwards, options) is framed as a variation of this principle.

---

# 🧩 **Detailed Content Covered**

---

## 1. 📊 **Equity Valuation – Two-Stage Growth Model**

### 🔹 Problem Setup

Students are given:

- Earnings (E₀)
    
- Plowback ratio (b)
    
- Return on Equity (ROE)
    
- Required return (k)
    
- Different growth regimes:
    
    - Year 1 affected by crisis
        
    - Long-term stable growth afterward
        

---

### 🔹 Step 1: From Earnings to Dividends

$$  
D_0 = E_0 (1 - b)  
$$

Example:

- Earnings = 2
    
- Plowback = 40%
    

$$  
D_0 = 2 \times 0.6 = 1.2  
$$

---

### 🔹 Step 2: Growth Rate

$$  
g = b \cdot ROE  
$$

- Short-term growth (year 1): different (10%)
    
- Long-term growth:  
    $$  
    g = 0.4 \times 0.15 = 6%  
    $$
    

---

### 🔹 Step 3: Dividend Projection

- Year 1:  
    $$  
    D_1 = D_0 \times (1 + g_{short})  
    $$
    
- Year 2 onward:  
    $$  
    D_2 = D_1 \times (1 + g_{long})  
    $$
    

---

### 🔹 Step 4: Price Calculation

$$  
P_0 = \frac{D_1}{1+k} + \frac{P_1}{1+k}  
$$

$$  
P_1 = \frac{D_2}{k - g}  
$$

---

### 🔹 Key Insight

Students are encouraged to:

- Avoid memorization
    
- Build the solution step-by-step
    
- Think in terms of **cash flow timelines**
    

---

## 2. 🧮 **Methodology: Step-by-Step vs Formula**

Instructor emphasizes:

- Use Excel or structured thinking
    
- Build:
    
    - Dividend 0
        
    - Dividend 1
        
    - Dividend 2
        
- Then discount
    

> “You don’t need the formula if you understand the process.”

---

## 3. 📉 **Term Structure: Spot Rates and Forward Rates**

### 🔹 Key Relationship

$$  
(1+s_2)^2 = (1+s_1)(1+f_1)  
$$

Where:

- ( s_1 ): 1-year spot rate
    
- ( s_2 ): 2-year spot rate
    
- ( f_1 ): forward rate between year 1 and 2
    

---

### 🔹 Application

1. Compute missing rate (spot or forward)
    
2. Use it to price bonds
    

---

## 4. 💵 **Bond Pricing**

### 🔹 Formula

$$  
P = \frac{CF_1}{1+s_1} + \frac{CF_2}{(1+s_2)^2}  
$$

Example:

- Coupon = 40
    
- Face value = 1000
    

$$  
P = \frac{40}{1+s_1} + \frac{1040}{(1+s_2)^2}  
$$

---

### 🔹 Key Insight

> First build the curve → then discount cash flows.

---

## 5. 📈 **CAPM and Gordon Growth Model**

### 🔹 Required Return

$$  
k = r_f + \beta (r_m - r_f)  
$$

---

### 🔹 Price Formula

$$  
P_0 = \frac{D_1}{k - g}  
$$

---

### 🔹 Price Evolution

$$  
P_1 = P_0 (1 + g)  
$$

---

### 🔹 Key Insight

Everything grows at the same rate in steady state:

- Dividends
    
- Price
    
- Earnings
    

---

## 6. 🔁 **Forward Rates (Exam-Critical Topic)**

Students must be able to:

- Move between:
    
    - Spot rates
        
    - Forward rates
        
- Identify what the question asks
    

---

### 🔹 Instructor Emphasis

> “Understanding what is being asked is more important than solving it.”

---

## 7. 🧩 **Binomial Model (Replication)**

### 🔹 Setup

- Current stock price: 25
    
- Future outcomes:
    
    - 30 → payoff = 900
        
    - 20 → payoff = 400
        

---

### 🔹 System of Equations

$$  
30H + 100B = 900  
$$

$$  
20H + 100B = 400  
$$

---

### 🔹 Solve for H and B → then:

$$  
P_0 = 25H + 100B  
$$

---

### 🔹 Key Insight

> “Go to the future → build the portfolio → come back to the present.”

---

# 📊 **Review of Sample Final 1 – Importance Ranking**

---

## 🔴 **High Priority (Must Master)**

- Duration
    
- Forward rates
    
- Equity valuation
    
- Bond pricing
    
- Binomial model
    
- Immunization
    

---

## 🟠 **Medium Priority**

- Liquidity preference theory
    
- HPR (Holding Period Return)
    
- Option slope (delta intuition)
    

---

## ⚪ **Low Priority / Not Exam-Relevant**

- Convexity (explicitly excluded)
    
- Advanced option technicalities not covered
    
- Secondary theoretical details
    

---

# ⚠️ **Critical Warnings from Instructor**

---

### ❌ Do NOT waste time on:

- Topics explicitly excluded
    
- Overly complex derivations
    
- Memorization without understanding
    

---

### ✅ Focus on:

- Building solutions step-by-step
    
- Understanding relationships
    
- Practicing exercises
    

---

# 🧭 **Final Messages from the Instructor**

---

### 🔑 Message 1

> “The whole course is one formula: present value of future cash flows.”

---

### 🔑 Message 2

> “Don’t memorize. Build.”

---

### 🔑 Message 3

> “Forget what I’m not going to ask.”

---

### 🔑 Message 4

> “Go one step further than the example.”

---

# 📌 **Pending Topics (Next Session)**

- Duration (Macaulay & modified)
    
- Immunization strategies
    

These are identified as the **last critical missing pieces before the final exam**.

---

# 📝 **Full Clean Transcript (English Version)**

---

## Opening

“Have you started working on the exercises?  
Any questions? Any specific exercise you want to begin with?”

---

## Equity Valuation

“If we are given earnings, this is an equity valuation problem.

Earnings represent what the company generates. From earnings, we can distribute dividends or retain them.

Dividend = Earnings × (1 − plowback ratio)”

---

## Growth

“Growth comes from reinvestment:

g = b × ROE

We have:

- A short-term growth (crisis)
    
- A long-term stable growth”
    

---

## Price Construction

“The price today is:

P₀ = D₁ / (1+k) + P₁ / (1+k)

Where:  
P₁ = D₂ / (k − g)

We are discounting future cash flows.”

---

## Methodology

“You don’t need formulas.  
You can build everything step by step.”

---

## Bonds and Rates

“You first construct the term structure.

Then discount cash flows.”

---

## CAPM

“Required return:

k = rf + beta × (market premium)”

---

## Forward Rates

“Understand what is being asked:

- Spot?
    
- Forward?”
    

---

## Binomial

“You go to the future, build the portfolio, and come back.”

---

## Exam Guidance

“Focus on:

- Duration
    
- Forward rates
    
- Equity valuation
    

Forget what I’m not going to ask.”

---

## Closing

“The whole course is one idea:

Present value of future cash flows.”

---


# Transcripción
27 de abril de 2026, 5:01p.m.
1 h 21 min 3 s
Okay.  
I will.  
Have you, have you started with the exercises?  
OK, any questions? Do you have any particular exercise that you want to start with?  
Yeah.  
Let me open here.  
Do you like the last ones in New America ones?  
As once, yeah, no ones, very.  
You, if you don't mind, today we will go through sample final one and they say through sample final two. I didn't have any problem. I mean, I can go also to sample final two now, everyone.  
A.  
You are going out this question, no?  
Great.  
Let me do all.  
A stoke.  
At earnings over the last year of...  
Two.  
You rush to the last person.  
OK, earnings.  
Play.  
Dollars to.  
Person, yes.  
I'm gonna do all these exercises.  
Let me call it the long way.  
When I go through anything, yes?  
And let me talk without reading. Let me think about all these things, yes?  
So, if earnings are being told.  
Then, this has to do with equity valuation, yes?  
A good evaluation.  
Um, earnings.  
Has to do.  
We did dance.  
And.  
Yeah.  
Earnings is what the company gets, is what what the company.  
Babe.  
The company makes our earnings, yes.  
And.  
You remember B, the flowback ratio? What can I do with earnings? I can distribute these earnings to my shareholders, or I can keep earnings inside the company. Make sense?  
Okay, I'm going to earnings. Earnings today, yes?  
Blowback ratio.  
Was 40%.  
So, knowing earnings.  
I can calculate.  
Defense, no.  
So, if I know earnings, I can calculate it.  
For example, I can say that.  
Digital 0, zero, yes, is equal to.  
60%, 1 minus 40% times.  
Two, and this is 1.2.  
It is.  
Yes, I am playing with the numbers.  
That's gone.  
In opportunity.  
For final one.  
Okay.  
And this is expected to...  
But then you have these rings for it.  
Then.  
You too, the financial crisis.  
Return on EC.  
over the next year is expected to be 10%.  
No.  
You been today, and year one, we don't connect with you, yes?  
Because on equity is expected to be 10%.  
Okay.  
But is.  
I just got, we don't let you be.  
Has to do with performance mission, performance mission. There were two pieces of data important when talking about returns.  
K.  
Okay.  
Pay has to do with something, and pay is what the market expect from me. Yes, pay is.  
Resume rate plus beta times return on the market minus resume rate.  
Getting paid from outside is what the market expects from it. And on the other hand, there is return on equity. What is return on equity?  
You remember?  
EB.  
is the amount of money that will be paid in the company.  
What are you going to do with me?  
You will get a return and will be you will get no, yes, with the money that you keep inside.  
You will get bro. Make sense?  
No.  
I know.  
If I know.  
Big, and I know we turn it with big. I got it, I know, bro.  
Ohh.  
Well, in this case, it's going to be...  
One more person.  
Make sense?  
Over the next year is expected to be 10 person. So say one week from time one onwards, return on equity is expected.  
Return to its normal level of 50%.  
And also.  
A is.  
Is going to rate this 10%, yes?  
Ace temper.  
Okay.  
And also, I am.  
Do you understand all the formulas that are on the blackboard, all the ideas that are on the blackboard?  
Yes, OK, now.  
I should have written this in a more ordered way. I ran out of space.  
I whatever B.  
Please.  
Forty percent.  
One man used to be.  
Primes T.  
If you want to be.  
Hi.  
Learning 0 is 2 words, yes.  
Okay.  
What is the current price of the stock? Yes.  
How are we going to calculate the current price of the stock?  
By calculating present value of future limits.  
I sense.  
So, let me write here.  
Price today?  
It's going to be equal to this than 1 / 1.  
Plus, OK.  
Plus, division two.  
One plus a right into second plus.  
You get three.  
One plus K, right there, and so make sense.  
Are you with me?  
What I'm gonna do, I'm gonna calculate the price of the stock, calculating by calculating present value of future cash flow, future dividends, yes.  
Who I need?  
Bigger than zero? No, because bigger than 0 will be in my pocket.  
But I know earnings here, yes?  
There are several ways in order to solve this exercise. What I'm going to do is...  
I know it early 0, I'm going to calculate dividend zero, and then once I know dividend zero, I will calculate dividend one, dividend two, dividend three, and so on.  
Listens.  
Okay.  
Hey.  
Ernie.  
Zero is early, 0 * 1 plus.  
Sorry, one.  
Lines B.  
Yes, the global operation formula makes sense.  
How do I say it? How do you know you only did only do that? No, not three. All the negligence.  
I will last be there for.  
1 + k, right, the four, and so on. I need all of the dividends, but dividends will grow at a constant rate.  
So, I can't simplify that.  
This is the two states dividend is combo.  
But I want you first to get the intuition. And once you put the intuition, things are going to be simple. Yes, dividend 0 is equal to earnings 0 * 1 minus B.  
And this is...  
So.  
Brian's.  
One minus 40%, that is 60 and this is 1.2. I sense.  
No.  
Even what?  
Okay.  
Is going to be equal to zero times.  
One plus the roadway.  
The road ladies, 4%.  
This is 1.2 times.  
1.04.  
Yes.  
Except.  
And what is the problem with what with this exercise?  
That, because of the crisis.  
Between year zero and year one, there is a growth rate.  
But, from year one.  
Onwards, there is a different growth rate.  
Because I am told that.  
With the first year is 10%.  
Hi, we turn on Equity, here is gonna be.  
The only liquidity is going to be the normal level of 50%.  
Fifty percent.  
Yes.  
So, in return with this 50%?  
Grow.  
Please be that we don't want it with you.  
That is 40% times 50%.  
Please?  
The expression, any sense?  
Good.  
Make sense?  
Okay.  
Even too.  
Ms.  
Like.  
Dividend one is even still times one plus over are we?  
Open up.  
I mean, we use, we turn on equity in order to complete the growth rate.  
Yes.  
Why is the game true?  
Even one times.  
One plus.  
Make sense?  
I will need a calculator. In order to solve this, I will need a calculator.  
Careful, because.  
This is 1 road break and this is a different road break. Make sense?  
Yes.  
If there were, if there were just one low rate.  
I would be much more simple: if there were gas, one rd rate.  
How will you calculate?  
Nice today.  
There were just one growth rate that today would be calculated by doing even in one year, year one over.  
Yes.  
If there were, yes, by growing rate, you will have great. The price of the snow, I considering that is such a everything that will grow at a constant rate. Make sense?  
But what is the problem with what? At the constant, we will start in year two.  
No.  
Please.  
Prance.  
Yeah, what?  
Is going to be equal to.  
Even so.  
Over car K. Nine G.  
Excellence.  
And how are we going to calculate?  
Price today.  
I do it.  
Even one over.  
One plus K.  
Yes.  
Yes.  
Nice, you're one.  
Over K minus.  
Yeah.  
Makes sense.  
If you do, the solution is so simple.  
to play, to plug this formula. But in order to plug this formula, you should understand all these things we have done. Yes?  
The number is so simple, but...  
I mean...  
Price you, I'm gonna run. Price you.  
Is.  
Even one.  
Did you miss?  
1.2 times 1.04  
Over 1.1, one plus, yes.  
This is present value, perfect.  
Less.  
He didn't to.  
1.2 times 1.04.  
OnePlus.  
One.  
One plus one point.  
Oh, 6, yes.  
I.  
Is he?  
How is it?  
No, EC.  
One plus three-season mode.  
Six months.  
I mean.  
Price zero.  
The 0 is 1 / 1 plus K, yes?  
What are we? What are we doing here?  
The price today is present value of next year dividends plus present value of the price next year. Make sense?  
Oh.  
Thanks, Lady.  
Please.  
I.  
The dividend that will be paid in present value, the dividend that will be paid in year one, over one plus K.  
Plus the price you won.  
Over 1 + 10. Make sense?  
Yes.  
Ana.  
Price, year one.  
Nice, your one is.  
Even so.  
Over.  
Hey, now you sleep.  
And then you can choose from this one.  
Even one times 1 + g.  
So, I can write this.  
I can write this in terms of even one, even one over.  
One plus, OK.  
Thanks.  
One plus.  
Speak over.  
Yes.  
But the mathematical resolution is not the important thing. Why? Because you can construct this step by step. You don't need to get me the formula. You can do the numbers itself. You can first.  
Calculate dividend 0, then dividend one, then dividend two. Yes, I'm gonna do this.  
With Excel.  
With Excel, as if I were, as if I got a calculator.  
Increase it, bringing justice.  
I have. Yeah, D2. Here is D2 is D1 times. So that would be 1.2 times.  
Ms.  
Team.  
6% is the growing rate from year two.  
Let me dig that one 1.2% times 1 + 4%.  
Yes.  
And bigger than two is bigger than one.  
Which is in the world?  
Thanks.  
But, what I will do...  
But I will do if I were you, exam.  
You will have one calculator, no?  
Thank you.  
Bernice.  
Seal, all Maxis, all Max are earning seal.  
Two.  
No.  
Maybe then, Steve.  
All nights are bigger than zero.  
zero, this times the blowback ratio, 1 minus blowback ratio, that is 60%, 40%, no?  
Makes sense.  
1.2.  
Then I know that G is.  
Or percent and from this year he becomes.  
First.  
Yes.  
Once I know how much is bigger than one going to be.  
Then, zero times.  
One plus.  
Four percent.  
Yes, now.  
We need to calculate dividend 2.  
Oh, are we gonna go make it then, too?  
Are you doing?  
By doing?  
Even one times.  
One plus.  
Six percent.  
Makes sense.  
Ana.  
It's going to be great.  
Yes.  
I'm gonna calculate now.  
Price of the stock in year one.  
How do you calculate the price of the stove in year one?  
I believe he didn't sue over a ninety.  
The two over.  
A minus.  
E.  
This is a constant rate that we will go for.  
And I have 33.072. And once I know price, year one, I can calculate price today by doing.  
Present value of what?  
Even in your what?  
Plus the price year one.  
Present value of peace.  
I'm calculating.  
Present value of the price in year one and the delivery in year one, yes?  
It's over.  
List value: 1 + 10%.  
Exam.  
And the price will be 31.2.  
So, if you want to calculate like the value of the stock for like year one, you would also need the deputation of year two.  
Yes. And so, for example, if you had to do like two years and then they would have different growth, like they could go for two years and 30 years, you would need like 3 dividends and then calculate. Yeah, I mean, if there are three growth rates or four growth rates, you will need one dividend, another dividend, another one.  
And then, once you have a constant growth, it will be there. OK, and then, and then that's where we use the formula of the P equals P by the PMX from where it is constant. Yes, and then this we discount it back at the end.  
You will need lasting, yeah?  
And by knowing give them in year, so you can calculate price in year six.  
Right, and then you need dividend one, dividend two, dividend three, dividend four, dividend 5, until the year six plus price in year six. One exercise much more simple than this is the Starbucks exercise. Starbucks exercise that you got.  
On this lights.  
The one that we saw when talking about that with evaluation too.  
Yes.  
Okay.  
But I mean, if I go, this one is so we did it in class. I mean, okay, I'm going to, I don't have any problem in going through this one, but we have, we need this time.  
E, where is...  
Yes, say this somewhat.  
Yeah.  
Okay.  
E.  
And.  
Silence.  
Anyone remember when is when was?  
Equivaluation is 16, 17.  
Oh, sorry. Oh, I have one fast.  
EC.  
Perfect.  
What I have just done is the two states in this como. Yes, this is this is what you were asking me: bigger than one and bigger than two plus.  
And then Starbucks exercise.  
What is the idea of this exercise?  
Year 2006.  
Today's 5.  
8789 Yes.  
No dividends.  
Ana.  
One year, 2010.  
That would be one of 0.5.  
Yes.  
And from year five onwards.  
It will grow at a constant rate of.  
Nine percent, yes.  
It's going to be great, K.  
Please, yes.  
All of these dividends are zero, but we need to calculate present value in case there were dividends. We would need to calculate present value in case there were dividends.  
What is the price of Starbucks?  
Year 4.  
That will be.  
The reason over 39 G.  
Ten percent minus 9%, yes.  
This will be 0.5 over.  
One percent, and this is 50, yes?  
This is the price in year 4, by calculating the perpetuity that will start in year 5. I sense.  
And now, once I know price in year four, how do I calculate price today?  
By doing price year 4 / 1 plus the discounted rate A price to the 4th.  
Myself.  
That's.  
Right now, we're just doing this because there are no dividends, right? But there are no dividends, then you have to... Mind that, mind that there will be...  
One, one, three.  
Three, yes? Yeah.  
We should.  
Yes.  
Let me call this one seven this plus 3 / 1 10 percent.  
Right, Mister, last.  
Say then.  
One plus.  
Ten percent, right? Stupid.  
What do you?  
Good.  
This is not a problem.  
It's 6 questions.  
Find Sadhvi.  
Oh.  
In.  
Listens.  
So, if we calculate the price price for the year four, um, and we don't really use the like last.  
Who is it?  
I mean, in year 4? Yeah, that's all. In year 4?  
This dividend in year 4 will be in your pocket. Yes. Not inside the company. Yes. And we don't know anything about the year 5. Yes. And so, I mean, here there is one dividend in year 5, and this dividend will grow at a good standard rate. Yeah, so, and that's taken care of in the price. Yes.  
But I want to go quick because there are more, much more things I would like.  
There are five more exercises.  
It.  
I mean, this exercise you have all the exercise solving the.  
Here, here there is one extra, and I don't know why I don't want five.  
And then you can try, but...  
Double final, what?  
No, no, no.  
What?  
Bruce.  
Ohh no, sorry.  
Big.  
Okay.  
When I cry, I have to load, I have to load some over 5.  
Whatever, let me go.  
Where you?  
We just take the sources, but I don't like to go through this to read the sources.  
Whatever, as though has some, this is the one that we have already done.  
I'm 31.2, I got the correct answer, yes?  
Let me move to the next one, yes?  
Current one year risk-free deal is 2%.  
The one year forward rate is 3%. These type of exercises are also really, really important, yes?  
The sport?  
The current deal for these two person.  
This call is true person.  
Then, one year forward rate is...  
Three percent.  
Three person, OK.  
What is the price of a two-year annual pay 4% to combine with a face amount of 1000?  
Yes.  
This is...  
One way in order to get the deal proof, yes?  
I have.  
For one year is 2%?  
And the sport.  
For year two, I don't know, but I know that for what year is.  
Two percent, and between year one and year two, the forward rate is...  
Three percent, so I can calculate the spot in year three or the spot in year two.  
How can I calculate the sport in year two?  
One plus the sport in year two.  
Price with the second, yes?  
Is going to be equal to 1 + 2% * 1 plus.  
Regressing.  
Except.  
You know what I'm doing?  
From here, I can help me.  
And then what I'm told, what is the price today of a two year annual pay for person to combine with face amount of 1000? I am told to calculate the price of what?  
Please try to think by yourself what I'm told to calculate.  
I'm going to drink some water and I will come in 2 minutes. Try to think about this exercise, because there is no point in me doing this exercise. There is no point, because this exercise is so, so, so simple.  
And probably what you will find in the final will be a little bit more complicated than this one.  
And I don't want just to do the simple thing here. What you should do in the final is going one step further.  
Bing.  
I'm trying to get a lot.  
Sing a song.  
I.  
Bing.  
What do you need to calculate?  
The price of the home.  
What are the gas flows of this ball?  
That 4% coupon bond with a value of 1000. So I need to calculate 40 + 1000 40, yes.  
40 over.  
One plus.  
Two percent.  
One 1040 over.  
One plus.  
Raise to the square.  
Oh, again.  
One plus percent times 1 plus.  
Make sense?  
Once you see the solution, all these exercises are so simple.  
Once you see the solutions, tell me these exercises are so simple.  
This exercise has two levels. First thing you should understand.  
Adding spoke rates and power rates to calculate the other power or spoke rates. Once you know all the spoke rates.  
What you should do?  
Oblique pressing.  
Yes.  
What are you gonna find in the final?  
Riley, one home win.  
People.  
Instead of one, one would get to Google, as well.  
Make sense?  
Yes.  
Understood.  
Okay.  
And the price will be 1,029.1.  
Exercise twenty-three, yes.  
Assume.  
That the risk rate is 4%.  
A market premium is 4%.  
A stock with a beta of 1.5 and an expected perpetual growth rate of 5% has a current dividend of 1.  
If cabin holds.  
And the stock is priority price. What is the expected stock price in one year?  
I think that this exercise is so, so simple.  
Nope.  
I'm gonna go through this, but quickly, just because I have told you I was gonna do all, yes?  
Let me.  
First thing I need to know.  
OK, OK, I need to know, Kate, the spected reader.  
Beta of 1.5.  
Yeah.  
Respiration rate is 4% plus beta.  
1.5.  
Yeah.  
Thanks, Marcus.  
Yes.  
Four plus 4 1/2 of four.  
Eight.  
And suit that person.  
And the store will have an expected perpetual growth rate of.  
A person.  
You can see Ruiz.  
What's going on there?  
Thanks.  
And there is a perpetual growth rate of 5%.  
Yes.  
And what I'm asked to calculate, what is...  
That's in year one.  
I only know one formula. The formula that I know is that price 2 days given in year one over.  
A.  
Yeah.  
What is bigger than in year one?  
Yeah, in your way, you didn't see your times.  
1 + 3.  
License. Let me do this then. So.  
Even 0 * 1 + E.  
Yep.  
Then.  
Price today is.  
Here, 1 / k - g.  
Make sense?  
Alright.  
Price 01 is price 0 * 1 + 8.  
So, now we know all these things, I can say that.  
Rising your wife.  
Yes.  
0 times 1 + d is bigger than one.  
Over.  
Yeah.  
OK, this is price zero times.  
This is the formula for the price in year one.  
Yep.  
Make sense?  
There are now 3 equivalent approaches.  
Yeah.  
This.  
They are on, they are sitting on this. You're the the.  
Anybody else preventing this one? The second equation for people.  
Singh.  
India's Gurgaon.  
But you have two equations here before.  
****.  
I have the means.  
Rice.  
In case the dividend will grow at a constant rate.  
Price, they will be the different year one over high 90?  
Yes.  
This from?  
Let's even in here in even next year with the price today. Make sense?  
Big.  
I'm going to complicate things. I'm going to make things more complicated. Mind that instead of knowing dividends, you will get earnings.  
You will have good eyes.  
They is equal to be the one.  
Over K minus E, yes.  
And also, you will have...  
You will have...  
That needed it.  
For example, year one is going to be equal to earnings, year one, 1 - b. Make sense?  
This is the formula that relates price with dividend, and this is the formula that relates dividend with targets.  
Then, we'll go. Price today.  
Price in year one.  
Rise and gear.  
By 0 * 1 plus alone.  
price 0 times 1 plus the growing rate price to the second. And instead of price, I can have.  
Dividends, dividends, dividends.  
Or I can have earnings. What I mean is all. Everything will grow at a constant rate. Price, earnings and details.  
What I'm saying is, what are the three different ways?  
Calculating price or going backwards, you can calculate dividend and then price, or you can calculate price and then price soon. There are different ways. And what we are doing is now in dividend next year, we can calculate price today.  
And then move backwards or forward in that.  
Makes sense.  
Yep.  
What is this money?  
OK, there is an important day in order to come to class.  
But.  
I won, and of course.  
Take the money.  
I don't know why I'm pointing at you, probably because of gender.  
Sofia, we're talking now about these.  
Do you?  
OK, makes sense.  
Play.  
Okay, a one year risk-free 0 coupon bond with a face amount of 1000.  
Sales for 970.87.  
At 2 year annual pay, 4% coupon, risk free on sales at par.  
Under the expectation hypothesis, what is the expected one year ride rate at time one?  
These exercises.  
Is the same exercise that we have gone?  
But from a different perspective, I'm going to go through this. Do you remember the one that the one with the bond with face value of for rate? One that I have to leave you thinking about when going to water, the water?  
Exercise is the same from another perspective.  
What I need to calculate is conference.  
I have a zero.  
Wait, the price is 970.87.  
I mean, what year time I will get?  
One country, yes?  
What can I get from there?  
Sporting year one.  
Ohh.  
Present value is equal until short value over 1 plus.  
You spoke to your wife.  
So...  
I, if your experience, your wife is future value.  
Over 970, oh, 87 minus what?  
The whole course is about one formula. This is valuable from one perspective and another one. Make sense?  
Okay, I know this code right.  
Then, at 2 year.  
I'm not 4%, 4% coupon, this remote sales at 5 if it if it is being sold.  
Alba, Alba.  
For the prices.  
Sold, big sold at far means that the price is equal to phase value.  
101,000.  
Price is 1000 and the idea is.  
One 1000.  
One, two.  
A 2 year is equal to.  
Body.  
Hold on.  
OnePlus.  
The new one is called in year one, yes.  
That's.  
One 1040.  
Over one class, then you, you, you are true.  
Rise to the same. Make sense?  
Well, you know this one.  
Do I know this one?  
This is called great, yes, because I have calculated here.  
So.  
The only one that I don't know is this one.  
Important thing to know what?  
The question is asking for.  
Is the question asking for the spot in here soon?  
No EC.  
Thank you. Welcome. I didn't answer you back, but I think it's OK.  
Great.  
I am not asking for the spot in year two. I am not asking for the spot in year two. I'm asking for the forward.  
So, once you calculate the school in year two?  
You can come late and go already with previous for me.  
Once you calculate this.  
Well, we are looking for...  
This, this one, yes?  
And you know, this one and this one, you can EC calculate that one. Make sense?  
This exercise.  
G.  
Oh.  
This exercise is...  
It's working, but I will be more complicated.  
Instead of going from here to here.  
is going from here to there, but the formulas and the path is the same. Make sense?  
So, where it is?  
OK, there are.  
Do you understand that exercise?  
Let me move to exercise 25. Oh, yes.  
This type of exercises are so, so simple once you know how to do it.  
In problem set 6, all of you have the legal problem set 6?  
You have one binomial exercise.  
Yeah.  
I want to go quickly, quickly.  
Consider a stock with a current price of twenty-five.  
This price is 25 and it will worth the scenarios 20 or. Make sense?  
Recent rabies.  
So, the ball will work.  
Hundred, no matter what will happen with.  
Stock price.  
And they pay you off.  
Is the stock price square?  
The prices work, so pay you.  
I don't know what.  
Sorry, who am you refer?  
No, no, I'm gonna call it.  
Yes, yes.  
Are you?  
Will it be this square, so 900?  
Four.  
400. Make sense?  
One.  
How did you get that?  
Because this.  
The payoff, the payoff would be the price of the store.  
Rest of this work.  
It's not the real.  
The price of the stove is steady or play or play.  
Three.  
30 and 20 square.  
30 square is 900.  
One 100.  
What is 100 a week?  
This is the one.  
One, look, please, some. This is the stock.  
This is the stop. Yes, this is the vote. This is our vote. And because Ray is a single person,  
The price will remain as same.  
And then...  
This is the derivative.  
At the very end, in this case, it is.  
The maturity is T right in the square. This is the page.  
So, price is 30, so the payout would be 900.  
20, 400. Make sense? I have a question. We get 100 from 30 minus 20 squared. The number you got 90 to 400.  
Can you repeat, please? Sorry, can you get 100 from like 39 to the square? I mean, 100 is because this is the face value of the ball. Oh, okay.  
Ideas. Assume risk rate is 0% when talking, when working with any tactics. Also, you can write here instead of 100, one, one and one.  
What are we? I don't know the price today. I don't know the price today, but I know.  
As close in the future, but I'm gonna agree, I'm gonna combine the stroke and the bone.  
In our portfolio.  
In the future.  
Eight times, stop failing.  
Plus 100 times B.  
It's gonna be.  
401. Yes.  
Then.  
20 times the stock plus 100 times B is going to be 400. Yes?  
Once you know AIDS and B, you will go back and you will say,  
X payoff would be equal to 45 * 8.  
Plus 100 * b.  
Yes, what I want you to see.  
I want you to see that I'm going to the future in order to calculate the weights.  
And once I know the ways, I will go back.  
And I will complete the prize today. I don't care.  
This is that Sam. Are you aware about this 100?  
Did you use 100 and 100 here? Mindful instead of 100, do one, one, one and one.  
You put here 11, and the result you will get will be the same.  
It's the same, right? Because it's 100, 100, 100. Yeah. And let me solve this.  
Gonna take out here from this.  
Please go.  
Then, H is equal to...  
Saturday.  
So, AIDS.  
Sequel to flat, yes?  
EC.  
EB, yes.  
Okay.  
I really, I, you know, since you work by then.  
Then, right now that age is 50.  
And become.  
Here, let me say that.  
A thousand.  
Plus 100 is equal to 400, yes?  
Oh.  
B is negative 6, no?  
I don't know.  
Yep.  
I don't know if these numbers are correct.  
I don't remember the exceptions.  
Here, X will be equal to.  
At 1050.  
Mindful.  
Pizza.  
This would be...  
Yes.  
I need numbers for it.  
I don't know how.  
This has been so...  
Okay.  
You don't need to get much about how this is solved, once you have understood how I needed at least how we needed in class.  
Exence.  
With this.  
We are gone. Let me go quick through all.  
Let me see if I have...  
Base.  
Because I prefer.  
There you go.  
Sample final one solutions.  
Okay, I'm going to go question by question quickly, I guess. I'm not going to go through the answers. I'm just going to tell you how important I see this question is.  
Absolutely important, duration. Duration is an asset, understanding duration. We have not talked today about fixed income.  
aggression oriented. Next day, I will do one exercise regarding immunization aggression.  
First exercise, breathing forward.  
The second exercise is also important and it has to do with the first exercise we did.  
holding duration constant as the convexity of a bond increases. You don't forget about convexity.  
What is complexity, the second derivative of the price over return? But I'm not going to ask anything regarding complexity.  
You don't need to know.  
Then, for an add the money put option.  
This one is absolutely important to understand it.  
I'm not going to go through this because I am running out of time and this is the last thing we talk about.  
for an add the money put option. Oh, I'm going to go through this.  
There were three other series.  
At the money in the money of out of the money, yes?  
If the is out of the money.  
This rd will tend to be 0.  
If there is a call in the money, the slope will be one. And if it is between out of the money and in the money, if it is at the money, for a call option, the slope will be between zero and one.  
For a put option, the idea is the same, but with the slope negative. If the put is in the money, deep in the money, the slope would be negative one.  
It is out of the money, so it will be 0.  
And, in this case...  
For an add the money, yes.  
The book price.  
Once the stock price increases, we will decrease in less than one, if it were.  
In the money, it will decrease if it were. The same question, yes?  
For in the morning.  
For an in the morning, the slow wind.  
Decreases.  
Five one.  
That one.  
So the correct answer will be no, no, no, sorry. For an in the morning food option, the correct answer is not there. It will be equal, it will be increasing exactly what. Make sense?  
Okay, more things.  
under the liquidity preference theory. If the term structure of interest rates is upward, sloping, this one is important and if the slope is positive, you cannot say anything. If the slope is negative, you can be sure that there are negative expectations.  
Understanding this one is also important.  
If the volatility of the stock increases, holding all other factors.  
Which person?  
I would not spend too much time with this person, yes?  
I'm running fast.  
If interest rates are positive for futures contract,  
OK, we talk about this one last day.  
Okay, these exercises regarding HPR, we saw them in the kitchen. These type of exercises are so, so, so important.  
A stock sells for 50 Ruiz.  
Okay, this one is also important and this one, like the one we have already solved in the exercises.  
Regarding Macaulay duration, it's also important. This one is not so complicated. It's just apply and modify duration form.  
Exercise 11, you don't forget.  
Yes.  
You can't forget it. Exercise 12, power rates again. Exercise 30, price over earnings ratio important. Liquidity preference theory important also.  
Dividend 2, dividend one. Again, this is important.  
If I put up, should be certain to finish. In the money, its head ratio would be 31. This is the one I was telling you before. Yes? Is it all?  
Which one? Sorry, all 13.  
No, let me repeat, yes, with.  
Wealth is important, absolutely important.  
402.  
It's also important, as to do with the...  
Or B.  
is also important. It has to do with the slope of the liver.  
EC.  
This is also important, because it has to do with equity valuation.  
Well, then.  
Sixty.  
Not only is it important, we have already thought about it, it has to do with the slope of like a source formula.  
Thirty.  
We were talking last day, trying to solve it. Try to solve exercise 17, because she's really, really, really simple. And if you have any questions, you can answer. You can ask me next Wednesday.  
And 18 of 18.  
EB.  
It's important, and we will work over 18 next day.  
because it has to do with immunization. Let's say the only exercise I want to go through is immunization exercise, and then all questions you got.  
10, 90, again, it's important. It has to do with evaluation, yes?  
And exercise plenty, you can't forget it.  
No, no, no, no, sorry. Exercise money. You don't need to provide it. This again, the same thing that I have told you when talking about goods or an out of the money food option.  
Are they going to give you a crystal, the absolute value?  
I mean, it's ratio that you got for me, yes.  
I can explain you. Like, forget it, like you already covered it, or forget it like it's something. No, for it means that I am not going to ask something regarding that in the file. Forget it means don't think anything anymore about it. Got it.  
I want you to think about his ratios and this law.  
But because it's written uncertainty.  
I can explain to you who does yours again, but I don't want you to spend time in this when you should spend your time in calculating call price and evaluation and all the things that I have told you that are important.  
The only important thing that we have not covered, sorry, the only difficult thing that we have not covered, already covered today is RD immunization exercises and all things regarding duration. Today I have not talked about duration. Next day on.  
Oh.  
Make sense? Any questions?  
Yeah.  
East for next day.  
Bring me, bring to me all the questions you got.  
Welcome.  
Well...  
Play.  
It.  
When?  
I.  
Oh.  
If.  
Yeah.  
Welcome, tell me.  
Hey, Excel sheets. No, no, no.  
Prioritise. Si. There won't be incompletes. I mean, although you have not delivered anything. Yeah. You have delivered it on time. Welcome. You don't need to work.  
You don't need to worry.