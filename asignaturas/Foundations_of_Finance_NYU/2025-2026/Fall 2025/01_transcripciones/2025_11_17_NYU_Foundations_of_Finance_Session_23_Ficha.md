---
Title: Student Notes — Options III - Put–Call Parity & Binomial Pricing
Course: Financial Markets (NYU Madrid)
Date: 2025-11-17
Tags:
  - NYU
---
# 🎯 Today’s Focus
Understand **how to price options *before expiration*** using:
1. The logic of **Put–Call Parity** (arbitrage relationship).
2. The **Binomial Model** (step-by-step option valuation).
3. The difference between **intrinsic value** and **option price**.

---

## 1️⃣ Recap — Protective Put
From the last class:
- A **protective put** = **buying a stock + buying a put option** (same underlying, same strike).  
- The **put payoff**:  
  - If $$ S_T < K $$: you sell at $$ K $$ → gain = $$ K - S_T $$  
  - If $$ S_T \ge K $$: payoff = 0.  
- The **stock payoff** = $$ S_T $$.  
- Combined payoff = **flat floor at K** → downside protected, unlimited upside.

> Buying a protective put = “insurance” for your stock position.

---

## 2️⃣ Put–Call Parity (Concept)
If two portfolios have **the same payoff at maturity**,  
by **the law of arbitrage**, they must have **the same price today**.

### 🔹 Two Equivalent Portfolios:
| Portfolio A | Portfolio B |
|--------------|--------------|
| **Long Stock + Long Put** | **Long Call + Bond (Face Value = K)** |

Therefore:
$$
C + PV(K) = P + S_0
$$
or equivalently:
$$
C - P = S_0 - PV(K)
$$

where:
- $$ C $$ = call price  
- $$ P $$ = put price  
- $$ S_0 $$ = current stock price  
- $$ PV(K) = \frac{K}{(1+r)^t} $$ = present value of the strike (bond component)

### 🔹 Interpretation
- If $$ C + PV(K) > P + S_0 $$: **arbitrage** → sell expensive portfolio, buy cheap one.  
- If both sides equal → **market in equilibrium**.

---

## 3️⃣ Example
Assume:
- $$ S_0 = 105 $$
- $$ K = 100 $$
- $$ r = 0 $$
- $$ C = 10 $$

Then:
$$
P = C + K - S_0 = 10 + 100 - 105 = 5
$$

✅ **Put price = 5**

If $$ P = 8 $$, then:
$$
C = P + S_0 - K = 8 + 105 - 100 = 13
$$

---

## 4️⃣ American vs. European Options
| Feature | European Option | American Option |
|----------|------------------|-----------------|
| Execution | Only at maturity | Anytime before or at maturity |
| Intrinsic value | Same | Same |
| Optimal early exercise? | N/A | ❌ Never optimal (for calls without dividends) |
| Price difference | ≈ none | ≈ same |

**Why not exercise early?**
- You’d only get the **intrinsic value**, but selling the option gives you the **market price** (which includes *time value*).
- Therefore, the price of an American call = price of the European call (if no dividends).

---

## 5️⃣ Intrinsic Value vs. Option Price
- **Intrinsic value** = payoff *if exercised now*  
  - For a call: $$ \max(0, S_0 - K) $$
  - For a put: $$ \max(0, K - S_0) $$
- **Option price (premium)** = intrinsic value + time value.

**Option price ≥ intrinsic value**  
(because of the probability of finishing *in the money*).

> 💡 The *time value* of an option reflects how much you pay to keep “playing the game.”

---

## 6️⃣ Binomial Model — One-Period Example
We move from **theory (put–call parity)** to **valuation (binomial pricing)**.

### Given:
- Current stock price $$ S_0 = 100 $$
- Strike $$ K = 105 $$
- Risk-free rate $$ r = 2\% $$
- Possible future stock prices:
  - $$ S_u = 137 $$
  - $$ S_d = 73 $$

### Step 1 — Payoffs at Expiration
| Scenario | Stock Price | Call Payoff    |
| -------- | ----------- | -------------- |
| Up       | 137         | 137 − 105 = 32 |
| Down     | 73          | 0              |

### Step 2 — Replicating Portfolio
We find $$ h $$ (stock weight) and $$ B $$ (bond position) such that:
$$
\begin{cases}
137h - 1.02B = 32 \\
73h - 1.02B = 0
\end{cases}
$$

Subtract equations:
$$
64h = 32 \Rightarrow h = 0.5
$$

Then:
$$
B = \frac{73h}{1.02} = \frac{73×0.5}{1.02} = 35.78
$$

### Step 3 — Option Price Today
$$
C = hS_0 - B = 0.5×100 - 35.78 = 14.22
$$

✅ **Call price today ≈ 14.2**

---

## 7️⃣ Multi-Step Binomial Trees
- More periods = finer resolution = smoother convergence to the **Black–Scholes** result.
- Each step applies the same logic: backward induction using **expected risk-neutral probabilities**.

$$
p = \frac{(1+r) - d}{u - d}
$$
$$
C_0 = \frac{pC_u + (1-p)C_d}{1+r}
$$

---

## 8️⃣ Key Insights
- **Put–Call Parity** links calls, puts, bonds, and stocks.
- **American ≈ European** (no early exercise without dividends).
- **Option price = intrinsic + time value**.
- **Binomial model**: step-by-step pricing based on replication and arbitrage.
- **Black–Scholes** will generalize this using continuous time.

---

## 🧩 Practice & Homework
1. Complete **Problem Set 6** — start with **Exercise 1** (Binomial Model).  
2. Review **Protective Put**, **Put–Call Parity**, and **Intrinsic vs. Time Value**.  
3. Prepare for **Black–Scholes Formula** (next class).  
4. Revise **PVO**, **bond pricing**, and **immunization** for final preparation.

> “Options are like playing chess with probabilities —  
> once you understand the rules, you can start playing the strategy.”



# Transcription
17 de noviembre de 2025, 4:08p.m.

1 h 1 min 13 s

A problem set.  
Problem set three, sorry, 4, 5 and six is not as difficult as, for example, problem set two.  
It's a matter of just understanding and working a lot with time value of money.  
Yes.  
Language is English.  
And regarding options program said.  
Six you can just now do exercise one. The sooner you try to do it, the better. It's so simple to understand, but you should do it in order to understand it.  
Do you remember from last class? Oh, did we finish?  
That's less.  
We finish saying that we vote.  
Together we finished with the protective foot. We remember it protective foot. The protective foot was buying together at the same time.  
Boot and stop. Yeah, Nicholas. Yeah, the protective. This is the payoff.  
For a put, this is the payer for the put. What is this the underlying asset?  
Are you understanding something? OK, this is the stripe and if the underlying asset price, if the underlying asset price is less than the stripe, for example, you may that this is 100 and this is 80, yes.  
If the underlying asset is 80, this is the payoff for a pool.  
Will it make sense to have the right to buy?  
Sorry, if it is a good, you have the right to sell at 100, yes. Will it make sense to sell at 100 when you can buy 480?  
Yes. Yeah. So you will buy correctly, sell at 100 and get the profit of a pay off of 12. Make sense?  
This is the payoff for a good and last day we bought a good combined with.  
Desktop. Yes, sorry, this one.  
Combined with the stock, yes.  
If you are these two payoffs, if you are these two payoffs, what you will get?  
For example, if you if this is 0 payoff from the stock, if the stock worth 00, the payoff you will receive from the store will be 0. Make sense.  
Hello.  
If the stock worth the strike, the pay of you will receive is the strike, yes.  
If the stock is 50, the payoff you will receive from the stock is 50 and the payoff you will receive from the put is also 50 because you can buy for 50 sell for 100 and the difference is 50. So the sum of these two pay.  
The son of these two players.  
Is this line and once you reach this point, this line. Oh, hi, this is you, Ethan.  
Did you went through the slides? Oh yeah, I did. Did you? Yes, because we have to start with derivatives, we have to start with options and options.  
It's not difficult when you know the language, but it's a complete new language, yes, and in order to get used to a language, what you should do is practice.  
Can you take attendance week? Is anyone know something regarding you?  
Oh, because he is best place and he's visiting also today. He has told me.  
2.  
OK.  
What I have, what I'm doing is I I am reviewing from last week the the exercise regarding the protective put that is buying a put.  
This is the payoff for a book. Yes, this one.  
I put together with the stock. This is the pay of the stock. Yes, I am adding.  
I am adding both payoffs and if I add both payoffs, I have the graph in black, yes.  
What is this? This is a good plus the stock, yes.  
I put for.  
I give him a strike. Make sense.  
Yep. OK, now what did I? What did we show last day? What did we see last day?  
But if we compare this pay off with the pay off given by a call.  
This is a call, yes, the payoff given by a call and a bond with face value equals to the stripe a bond.  
With face value equals to the strike, yes.  
If we add these payoffs, these two payoffs.  
If we have these two payers.  
What is the sun we will get?  
Yes, me, I have this payoff that is the result of combining a put and the stock. I have a put and the stock. Yes, I'm here, Ethan, here I got.  
The payoff of combining a call with a hidden strike, yes.  
and a bone.  
A bond that has face value equals to the strike. What can you say regarding the two payouts?  
What can you say if you compare this payoff and this?  
Very cool. Very cool. This payoff is the same and if these payoffs are the same.  
The law of arbitrage, same payoffs means same price. So.  
They see these are the payoffs that you will receive at maturity at the end. If you will receive same payoffs, what can you say that the price?  
The price should be the same, yes.  
OK. Well, when are we talking about last day we introduce derivatives concept last day we introduce.  
Options, yes.  
Last day we were talking about what is the payoff on expiration.  
What are we going to do today? Today we won't talk anymore about the expiration and we will see what is the price before expiration.  
So how much would you pay today in order to get?  
The right to buy or the right to serve at the human price, yes.  
So.  
Let me start with a call. Yes, this is the stripe.  
This is the underlining, yes, the underlining and.  
This graph, this line tells me how much money I will receive at the expiration depending on the line, yeah.  
What are we going to see today? Then we will justify why the price, the premium, the price we will pay before expiration.  
Follows.  
Something like the curve you have there in blue, yes.  
It.  
Follows this line. Today we will not see the questions of this line. Next day, this Wednesday, this Wednesday we will see how to get this equation and this equation will be.  
Even by Black and Souls formula, Black and Souls formula, but we will talk about Black and Souls.  
This Wednesday, yes.  
Before starting with the class.  
I want you to see.  
Bears.  
The line that we will get on expiration.  
This line.  
What is the slope of this line when you are here?  
What is the slope of this line when you are out of the money? 0 No.  
Makes sense.  
What is the slope of this line once you are in the money?  
No, the slow, the slow, the slow piece. Imagine that the underlying asset growth.  
In what? Your profit will grow thin.  
In one if you get $1.00 you will get $1.00 more. So this is low will be.  
This is love will be.  
This angle is 45 degrees. The tangent of 45 is 1.  
As low will be.  
One what it means the slope to be one that if you increase by one you will get one more one per one. Make sense.  
Are you mean? If you buy an option, you buy a gold, it's like.  
Playing a bit or begging? What do you do with this? You play lottery?  
You how do you? How would you say it? Yeah, you can't, but what is the verb you would use for?  
Lottery. You will play lottery, no? Yeah, then you you play lot lottery, no. By an option is like gambling, like playing, playing lottery. What can happen if you play lottery? What can happen?  
One or one or two. You can win or you can lose. You lose.  
If you lose, how much you will get 0.  
If you win, how much you will get the slow, not the slow, sorry, how much you will get. You will get the underlying minus the strike. Make sense.  
You will get the difference minus the underlying and the stripe.  
Right.  
Did you see the light in blue?  
The slope of the lane.  
In blue moves from zero.  
Do one and for example here.  
Is 0.5.  
What does the slope of this line? I'm doing a spoiler of next day class, but I want you to understand this. What does this slope means?  
The probability probability of finishing in the money.  
If the slope is 0, chances to finishing in the money are really low. If the slope is 0.220%, chances are low, but they're they're still exist.  
If probably is 0.95, there would be a disaster.  
But the chances of finishing in the money are high, yes.  
What is the slope?  
The derivative, the derivative, the slope we will see that is the heads ratio and is the slow bar, the chances of finishing in the morning. Make sense? What is the slope? The slope we saw so.  
The derivative of the price considering underliners, yes.  
Pin see the call stress.  
What is this? Calls price? Make sense?  
Are you with me? OK, what are we going to do today?  
We will approach the understanding of the plan.  
Yeah.  
We are prepared. What are we going to talk about today? We will talk about how to evaluate an ocean prior to expiration and we will see one model later.  
That is binomial valuation, binomial model and before binomial model we will talk about good call parity. What is good call parity? That is good call parity.  
So today I have not talked about valuation binomial model. I have not talked about binomial model yet, but we are almost done with more than 50% of the class.  
Today's class is not difficult. Last day class was not difficult. Next day class.  
Black source formula is almost impossible to understand, but.  
You don't need to worry because if you have understood that, you have understood almost everything.  
So the point is the difficulties more in getting used to all this language, getting used to this way of thinking.  
And also think that we are almost done with fix income, not only we are done with fix income, we are done with the equity valuation. So there are a lot of things together. OK, any questions?  
Oh, sorry, absolutely.  
OK.  
First idea.  
What is the intrinsic value?  
You don't need to. OK, this is just an introduction. What is the intrinsic value? So simple. You have an option. Intrinsic value will be how much you will get in case you execute the option just right now.  
So in order to calculate the intrinsic value, you need to get to know. You need to know how much is the underlying asset now.  
Yes.  
OK.  
OK, what is the intrinsic value of and out of the money call?  
What is the intrinsic value of an out of the money call?  
What is the intrinsic value of hand in the Monaco?  
And they're laying mine with astra.  
OK. Which is greater the intrinsic value of or the option price?  
The option price will always be bigger if we are out of the money.  
Makes sense because if we are out of the money, there are chances of finishing in the money and because of that you will pay something, but once you are.  
In the morning there are chances to go down, but in case you go down, you have a floor and there are chances to go up. And in case you go up, you don't have a floor, you don't have a a stop. Yep.  
3.  
So which is greater, the intrinsic value or the option price? Option price will always be higher. What is the intrinsic value?  
The black line. What is the auction price? The blue, blue line? What I'm asking, what I'm saying is that.  
Option price will always be higher than intrinsic value. Why? Because we we we are always.  
We are always.  
Pay for play the game.  
And also.  
You come here, yes, thinking about payoffs, for example, for the call.  
For the goal, you can say that the goal is thinking about payers. Yes, the goal is equal in the food.  
Last stop.  
Minus strike, yes.  
At the end, what is this? The call is the boot plus the stove minus the strike if you throw this.  
You see that the goal is equal to. This is equal to the boot.  
Last the stoke.  
This moves with this. I use the stripe at the end. What I'm saying is doing this, you can see that.  
Force price should always be higher than this, because if it is equal, you can do arbitrage if it is lower.  
But the difference between the option price and the intrinsic value is called the time value of the option.  
Yes, what is there? Any questions?  
Minimum value of the gold. Here you have that the gold price.  
This is the call price should always be higher than 0 or this and you can buy a call, sell the stock, lend money and what you see is that all these things buying a call, sell the stock and lending money.  
Should be higher than 0 in order not to have arbitrage.  
But.  
Don't worry regarding this. This is what I want you to understand this detail.  
Oh, adjust intrinsic value is considering that also time value of money affect, yes.  
Time value of money regarding the price of the book.  
But this is just in order to explain that you have the strike.  
This is the intrinsic value.  
And the price of the coal should always be higher. Make sense?  
Price of the gold should always be higher.  
Any questions?  
OK, this is just to introduce that calls have price. Next step called put parity. What is put call parity?  
Let me explain these better.  
Let me explain this better called good parity.  
Call to parity is say pay off from a put and the stock pay off from the put and the stock is the same as the pay off from a call with sales price.  
I'm not alone with the striker's face value. Make sense.  
Yes.  
What does called good parity means? This means that if I know the price of the good.  
I should know the place of the call. It is same stripe.  
Do you know what is CFA? Have you heard of CFA? Yes, it's the test and there is CFA one, sub 1/3. There are tons of questions regarding CFA.  
You see it in case you see in CFA one question where it is asked.  
You have a call given one strike and you have a put with the same strike. You see a question where there is us something regarding a call given one strike and you know the price of the put with the same strike or you just the opposite.  
You should always know that this is a cold food parity question and not only is a cold food parity question, but also is really really simple to answer because.  
You should know the price of the underlying, you should know the strike, and once you know the price of the call, you can calculate the put or the other the opposite. Make sense.  
Paul put parity. He just said that the price of a call.  
Mines.  
Let me come here, I'm sorry.  
There are several ways in order to grow this, yes, but.  
Intrinsic value of account, yes.  
Please.  
Look up here, just one second.  
This is a call. Now what I'm going to do is next one.  
I'm going to sort a put. If I were loan a put, I will have this way. If I sort the put, what will be increase the value?  
That's all I will be doing.  
The slope of this is what if this length is a strike.  
This would be negative strike. Make sense.  
In order to have the stuff, what should I do?  
In order to have the stock I should add here.  
Strap. That is the bottom. Make sense. You can do this in two different ways and the idea is that.  
Short a put plus the call plus the strike is equal to the stock.  
I did it here. I did the same back with the other people saying that if I have, if I have in one pocket a put plus the stock.  
It means that in case I have in the other pocket a ball with same strike and a ball with face value reverse to the strike I would have in my both pockets the same.  
Peace for having peace is the second. Make sense?  
So you buy a put or if you sell a put, how can you hates?  
By buying the rest, you will have a neutral position.  
If you see cold put parity, a cold put parity exercise, this is so simple to solve and in this case.  
In this case.  
Rate is 0, so present value of the bond will be equal to future value of the bond.  
So any big numbers?  
And the line ask for this under 5.  
OK.  
The strike is 100.  
And I'm almost done with that with those that yes.  
If coal is 10, how much will be the put? Put will be the coal plus the strike that is 100 -, 105.  
Make sense?  
So if the call is 10, who should be back?  
Make sense?  
On the other hand, if the put he said how much the call should be, the put plus the stock.  
If they put this A.  
How much? 8 plus the stock that is 105 minus the strike that is 100. This is 8 + 530.  
Makes sense.  
If these kind of features exist are so, so simple.  
Any questions?  
Oh.  
OK.  
I'm not.  
Oh.  
What is the difference between an American Ocean and a European Ocean? You remember?  
How do you know differences between Americans and European options?  
American you can exercise it whatever, right before the yes, I will be there only at the end thinking about the price.  
If you execute.  
If you execute an American ocean, what you will get?  
Intrinsic value.  
Makes sense.  
You execute, you execute the American option you will get.  
Increase it value, but you will get if instead of executing it, you sell it.  
The price? No. Is the price always higher than the intrusive value?  
Yes. So always it will be worthy not to execute American options.  
So thinking about price, what is the difference between a European and an American option? There are no differences.  
It will always be worthy to mandate to keep American issues. Make sense.  
Think about an American option. Yes, if I am out of the money, it will not make sense to execute it.  
And if I sell it, I can get something. And if I am in the money, if I execute the American option, I will get this amount of money, but if I sell it instead of executing it.  
I will get this so it will be worthy instead of executing it to sell it.  
So at the end, what is going to be the price of an American option compared with a European?  
The same.  
Makes sense.  
Is it ever optimal to exercise before expiration? No, it is.  
American option reasons not to exercise early for calls the time value of money of the payments for calls and puts option value reasons to exercise earlier for puts the time value of money on the receipt of the exercise price for calls.  
OK, with dividends, forget about dividends. What is the point with dividends that in case you will receive dividends?  
It can make sense. There could be a time mismatch, but if options are well priced, forget about dividends and in the absence of dividends, it is never optimal to exercise culture if with this idea you have, yes.  
Because at the end, thinking about puts and time value of money, you should have high, high rates in order to think about this, yes.  
So summary of this what I want you to understand is the difference. Sorry the relationship between relationship between intrinsic value.  
And the price of the ocean.  
OK, and now what is an option worth?  
Let's see binomial and let me see. Let me see where is the data here.  
OK, I have. Let me show you that IOM mode.  
I have one stop today.  
And I can because I know variance of the stock is I can grow 2 scenarios, one scenario where I have what I will have some price that it will be.  
137 and another scenario where I will have a price of 73 makes sense. Then also I know that the risk rate.  
Please please rate this.  
2%, yes.  
And then I am asked what is the price of a coal with a strike equal to 100? Make sense?  
This I need to calculate the price of a coal which has strike equals to 100.  
What is the price of that?  
Let me see. I have made something incorporate. I think I have dropped no. Let's try this 105. Yep.  
Are you with me? What is the problem? If the strike is this is today and this is in one period of that, yes, if the strike is 105.  
Always there soon now.  
All is the option if the strike is 105 and underlying is 100.  
Your show is.  
At the money or relatively out of the money. That is not in the money.  
Make sense? Maybe a is that.  
We are somewhere here. The price is 105, the price is 100. Make sense.  
All matches the intrinsic value.  
4.  
What are we going to do? We have these.  
What I'm going to do is please, I want your attention with these steps. This is the hardest thing you are going to find in the highlight regarding options if you have and you have one exercise in the problem set.  
Thanks. And if you are less than this, you are almost done with this. The the X. This is the stop today. I'm interested in that.  
Rate is 2%. This is a bond. If I pay 100 today, no matter what the stock will do, the bond will worth 100 two and 100 two. Make sense.  
And.  
This is the stone. Let me call it H This is. This is the bone, yes.  
5.  
And what do I have here? I have the gold. I don't know what the price is, but what can I do with the gold?  
I can calculate what the payoffs will be in each scenario.  
If the stock worth 73, what the payoff of the call will be?  
It's the strong board 73. What is going to be the payoff of the call?  
00 I need the store worth 137.  
What is going to be the payoff of the call?  
137 -, 5.  
What can I do? What can I do? I can construct 10 days, same price. I have two scenarios. I can construct a portfolio.  
Combining the stock and the ball, I can calculate what are the components, the weights in the future, and once I know the weights in the future of this, I can calculate price today.  
This is what I'm gonna do.  
What I'm going to do is call call is going to be equal to 8 times.  
Magnus. Magnus.  
B times face value of the bond. Let me call it face value of the bond. Let me call it.  
X Oh no, no. It's because I don't want you to be misunderstood. Let me call it Y. Yes.  
What I'm doing? Why this is positive and this is negative because at the end.  
Ways will have this. I don't worry regarding signs because at the end this will correct in case.  
So what I'm going to do is.  
Very true, yes.  
That is true. It's equal to.  
137 thanks is.  
-1.02.  
Times.  
B.  
Or 137 * H That is what I was saying, yeah.  
This is the value of the store.  
And let me throw second scenario.  
0 is.  
73 times 8.  
Mangos.  
1.02 * B.  
are you with me?  
Once I solve that system.  
How can I calculate price of the call today?  
By doing 100 * 8.  
Big questions.  
Let me calculate first dates. How can I calculate dates? Let me come here even that.  
I'm gonna substrate.  
This minus this, yes, so 32.  
So I think we'll be able to be here games.  
It's equal to 32 over.  
137 -, 37, yes.  
No 137 minus.  
73, yes.  
And.  
Once I got eight, I can say that B is equal to. I'm gonna.  
OK, here 73.  
Times 8.  
Over 1.02, yes.  
T.  
Makes sense.  
Let me oh, I have here one excel open.  
Year.  
6.  
Is going to be very true.  
Over 137 -, 73.  
4.5 and.  
B is going to be 4.5 * 73.  
Over 1.02 that is 35. Makes sense. Once I know the two numbers, what is the price of the call today? Price of the call today is going to be 100 times.  
4.5 -, B that's 4.21 makes sense.  
What I have done, I have great. I have considered that the goal is equal to a portfolio that combines the stock and above.  
But how how we will write black and short formula next class?  
Considering that the call is the combination of a portfolio or is a portfolio that combines the stock with a bond. Make sense.  
OK. So coming here, 100 hundred, thirty-seven, seventy-three, 102 hundred, 200, yes, this is future for the stock, future for the bond and I don't know what the price of the call is, but I know payoffs.  
And because I know payoffs, I can combine the stock and the bond and I'm earning a portfolio. That is what I have done. That is true. Oh, I draw, I look, I calculate.  
How much is?  
The weight on the stock, how much is the weight on the bone and with this I got.  
Today's price of the.  
Once you know how to do this exercise, it's simple to do. It's just calculating weights.  
Any questions?  
OK, here are the questions. Yes, the two questions that I have already written. It is how to get H, how to get B and how to get price of the gold.  
OK, what is binomial pricing?  
Here I have just show you one simple example.  
One simple example.  
But what can what can we do?  
I have this talk.  
And I can what I have done is just calculating 2 scenarios for a given time, yes.  
And what can I do instead of just considering?  
One scenario for a given time. I can consider 2 scenarios for a given time. So the time between 1:00 and the other one will be the half. So what I'm saying is that instead of considering.  
One scenario.  
I can consider two scenarios.  
Yes, instead of considering two steps I can consider.  
Consider.  
Three steps. Are you following me?  
What will I have here?  
Several scenarios. The more I increase resolution of the model, the more I will approach.  
To this slide, yes, let me show you with one excellent example. I will not ask binomial model with more than one. This is just.  
In order you to understand what are we doing.  
These are 9 scenarios, but here Francis, let me write one in all these Excel files.  
In all these excel files you can you will you can write, you can touch whatever you want.  
But you can free touch all cells that are in yellow. You touch something that is not in yellow. Probably you can break it.  
And you break it. Nothing happens, but that you do know how this binomial model is construct. Let me show you.  
You have expiration time, you have the stock price, the strike, the haze, yes, the reasium and the reissue rate.  
All this excel works with that data. Firstly it does. It calculates value of the call at expiration and once you know value of the call at expiration, it goes backwards calculating present value, present value, present value.  
Make sense?  
If the payoff is 0, it will be great. If it is in the money, it will be great.  
Let me start with the.  
Let me start with the exercise that we have. Jesse, yes, price is 100, strike price is 105.  
And let me risk free.  
Race rate is 0, yes.  
And let me adjust.  
Let me adjust.  
137 and 73137 and 73. I am close but let me adjust. Let me increase this to 0.5 a lot 0.30.33.  
370.3237 and 73.  
Yes, I'm close. Make sense.  
So here.  
Price is 13.  
Here value of the option is 14.22.  
Variation, let me.  
Three 0.32 OK, somewhere there. The price would be 30.76. This look like no.  
Look, expiration time will be the same. Let me just put a out out. I have forgot the rate was 2%.  
Oh, I was missing something on 4.484.4822 makes sense.  
OK, what I'm going to do, I'm going to increase this hate into.  
Time will be the same. If I increase this in two, its period of time will be half. Make sense.  
So this is 1/2 if I increase this in two.  
And I maintain this in one, the two will become one and this one will become 1/2.  
This two is 1 and this one is 1/2 and if you see the risk rate instead of being 2% is the half.  
That is not. It should not be the house. Yes, the house, because it's.  
It's compounded, Yep, but whatever. And you see how this increases.  
If I rise this to three or to four, this will become 0.250.575 and one.  
This and what can you see here?  
This is at the morning.  
Depending on the scenarios, these both are still at the money, but if you see these scenarios.  
All these three scenarios are out of the money and here chances of finishing 0 and 0 is 0 and if you see here 32 and 0 so around the half.  
Make sense? What are we doing? We are looking. We are forsaking the scenarios and giving these scenarios we can calculate by this time value of money combined with the probability and get.  
Today, once we know how to calculate the price of a call, we can get the price of a put with call put parity for example. But in this case what we have done is just exactly the same. We have used the same method, we have to calculate first.  
Or match this worth at expiration and then we have gone back. Make sense.  
Have you understood binomial model? You have one exercise in problem set six that is applying this.  
Did you have understood this?  
Next day we will talk about Black and Souls formula, but you don't need to understand almost anything regarding Black and Souls formula. Do you have understood this exercise?  
You are done with all the knowledge you should take for the final.  
There are small things, but regarding hard things, you already know everything.  
Careful, because there are a lot of things. PVO. Do you remember PVO present value growing opportunities and the price of where is formula? Then you should know how to calculate the price of a ball and also you should know how to calculate, how to use, how to work with.  
For what rates?  
And how to immunize our portfolio? That is the last exercise we did. We're talking about fixing code.  
And regarding options, you should know what is black and so formula that we will see next day, but most difficult thing is to calculate in the binomial mode.  
Here is how to solve this binomial process. The probabilities. This is what we have done. So conclusion.  
Oh, good call party. You should also know it and understand it.  
Eh, and we are done.  
Problem set six for December 1st.  
That's the one.  
OK.  
Well, Oh yeah, futures and and swaps. But regarding futures and swaps, there is not too much things to know. If I were you, I would start reviewing things and preparing the final.  
Next day, next this Wednesday I will give you sample final one and sample final two as same as I give you with meter.  
Enjoy Monday, the rest of Monday.  
Bye, Kasia.  
Bye, Kasia.  
OK.