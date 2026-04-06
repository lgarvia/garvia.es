# Foundations of Finance – Session 24  
**Date:** April 15, 2026  
**Topic:** Derivatives III – Black-Scholes, Put-Call Parity Review, Greeks, and Implied Volatility

---

## 1. Administrative reminders

- The **final exam** will take place on **May 6**, starting at **4:00 pm**.
- The exam will follow the same general logic as the midterm:
  - it will be **closed Google / closed internet**
  - you will be allowed to bring **formula sheets**
- You will have access to:
  - class slides
  - an official formula sheet
  - **sample final 1**
  - **sample final 2**
  - solutions to the sample finals

The professor’s message was very clear:  
the earlier you begin reviewing, the better.

---

## 2. Where we are in the course

This class closes the core logic of **options**.

The progression has been:

1. **Time value of money**
2. **Portfolio theory / CAPM**
3. **Equity valuation**
4. **Fixed income**
5. **Derivatives**
   - last class: option basics, payoff at expiration, put-call parity intuition, binomial logic
   - this class: **Black-Scholes**, deeper valuation logic, Greeks, and implied volatility

Next steps in the course:
- next Monday: **futures**
- then: **swaps**
- then: review sessions before the final

---

## 3. The central message of today’s class

Today’s class was about one big question:

> Once we understand what an option pays at expiration, how do we value it **before** expiration?

The professor emphasized that this is the real challenge in derivatives.

At expiration, valuation is easy:
- the option is either worth **zero**
- or it is worth the difference between the underlying price and the strike

Before expiration, the problem is harder because:
- there is still time left
- the underlying price can still move
- uncertainty still has value

That is the role of **Black-Scholes**.

---

## 4. Quick recap from last class

Before introducing Black-Scholes, the professor reviewed the key ideas from the previous session.

## 4.1 What is a derivative?

A derivative is a financial instrument whose value is derived from another financial instrument or asset, called the **underlying**.

Examples of underlyings:
- stock
- bond
- commodity
- exchange rate
- interest rate

So the price of the derivative depends on the price of something else.

---

## 4.2 What is an option?

An option is a contract that gives a **right**, not an obligation.

There are two basic rights:

- **Call option**: right to **buy**
- **Put option**: right to **sell**

When you **buy** an option, you pay a **premium** today in order to obtain that right.

That is different from a futures contract, where both sides commit to transact in the future.

---

## 4.3 Payoff at expiration

For a **call**:

$$
\text{Call payoff at expiration} = \max(S_T - K, 0)
$$

For a **put**:

$$
\text{Put payoff at expiration} = \max(K - S_T, 0)
$$

Where:
- \( S_T \) is the underlying price at expiration
- \( K \) is the strike price

These are the payoff formulas you must know.

---

## 5. Intrinsic value review

The class started by revisiting **intrinsic value**.

Intrinsic value is the value of the option **if exercised immediately**.

### For a call:
$$
\text{Intrinsic value} = \max(S - K, 0)
$$

### For a put:
$$
\text{Intrinsic value} = \max(K - S, 0)
$$

This is not exactly the same as payoff at expiration, because intrinsic value is evaluated **today**, while payoff is evaluated **at maturity**.

The key distinction from last class remains:

- **payoff**: value at expiration
- **intrinsic value**: immediate exercise value today

---

## 6. Why Black-Scholes is needed

The professor’s intuition was the following:

At expiration, the option ends in only one of two broad situations:
- either it finishes **worth zero**
- or it finishes **worth something positive**

Before expiration, however, we do not know which scenario will happen.

So the option price today must reflect the **chance** of ending in the money.

This is why option valuation before expiration is not just intrinsic value.

It includes the value of uncertainty.

---

## 7. Intuition behind Black-Scholes

The professor gave a highly intuitive way to think about Black-Scholes.

He connected three ideas:

### 1. At expiration, the option behaves like:
- **0**, or
- **the payoff difference**

### 2. Before expiration, there is a probability of each scenario

So the option price is linked to the probability that the option finishes in the money.

### 3. As time gets shorter
the option’s value increasingly approaches either:
- zero
- or intrinsic value

This is why, near expiration, the option price tends to collapse toward its expiration payoff.

---

## 8. Put-call parity review

Before going into Black-Scholes, the professor reviewed again one of the most important relationships in the whole derivatives block:

$$
P + S = C + PV(K)
$$

Where:
- \( P \) = put price
- \( S \) = stock price
- \( C \) = call price
- \( PV(K) \) = present value of the strike

This is **put-call parity**.

The point is simple:

> A stock plus a put has the same payoff as a call plus a bond with face value equal to the strike.

If the payoff is the same, the price must also be the same.

That is just the **law of one price** applied to options.

---

## 9. Why put-call parity matters for pricing

This is extremely important in practice and for exams.

If you know:
- the stock price
- the strike
- the risk-free rate
- the price of the call

then you can compute the price of the put.

And vice versa.

For example:

$$
P = C + PV(K) - S
$$

This is not a separate topic. It is directly connected to valuation logic and arbitrage.

The professor stressed that whenever you see:
- call price known
- put price unknown
- same strike
- same maturity

you should immediately think:

> **Put-call parity**

---

## 10. Black-Scholes formula for a call

The professor introduced the Black-Scholes formula formally, but he emphasized that the exam focus is not on reproducing the full mathematical derivation.

The goal is to understand the logic and the ingredients.

For a European call, the formula is:

$$
C = S_0 N(d_1) - K e^{-rT} N(d_2)
$$

Where:
- \( S_0 \) = current stock price
- \( K \) = strike
- \( r \) = risk-free rate
- \( T \) = time to maturity
- \( N(d_1), N(d_2) \) = probability-related terms from the normal distribution

---

## 11. The main intuition of the formula

The professor’s intuitive reading of the formula was:

$$
\text{Call price} = \text{weight on stock} - \text{weight on bond}
$$

That is the crucial idea.

Black-Scholes expresses the call as a combination of:
- the stock
- a bond

This is exactly the same replication logic introduced with the binomial model.

So Black-Scholes is not magic.  
It is the continuous-time version of:

> a call can be replicated by a portfolio of stock and bond

---

## 12. What are \( N(d_1) \) and \( N(d_2) \)?

The professor did not want students to get trapped in the intimidating notation.

The key message was:

- \( N(d_1) \) and \( N(d_2) \) are **probability-related functions**
- they reflect how likely the option is to end up in the money
- they depend on:
  - stock price
  - strike
  - volatility
  - time to maturity
  - risk-free rate

The exact algebra matters less than the economic meaning:

> These terms capture how uncertainty translates into current option value.

---

## 13. The ingredients of Black-Scholes

The professor compared the model to a cooking machine:  
if you put in the right ingredients, you get the option price.

The required inputs are:

- current stock price \( S_0 \)
- strike price \( K \)
- risk-free rate \( r \)
- time to maturity \( T \)
- volatility \( \sigma \)

These are the ingredients of the model.

---

## 14. Put price from Black-Scholes

Once the call is priced, the put can be priced using put-call parity.

The professor emphasized that, conceptually, once you know the call:

- you do **not** need to re-derive everything from scratch for the put
- you can get the put from parity

This is important because it shows again how pricing relationships connect across instruments.

---

## 15. Greeks introduced: Delta / hedge ratio

One of the most important ideas of the class was **Delta**.

Delta is the slope of the option price with respect to the stock price.

In words:

> Delta tells us how much the option price changes when the stock price changes by one unit.

### For a call:
- Delta is between **0 and 1**

### For a put:
- Delta is between **-1 and 0**

---

## 16. Economic meaning of Delta

The professor linked Delta directly to the earlier intuition:

- if a call is **deep out of the money**, Delta is close to **0**
- if a call is **deep in the money**, Delta is close to **1**
- if it is around the money, Delta is between the two

Why?

Because:
- an out-of-the-money call behaves like “almost nothing”
- an in-the-money call behaves more and more like the stock itself

So Delta is not just a derivative in the mathematical sense.

It is also a measure of:
- sensitivity
- exposure
- hedge ratio

That is why Delta is so central in practice.

---

## 17. Why Delta is called hedge ratio

The professor explicitly connected Delta to **hedging**.

If an option position has exposure to movements in the stock price, Delta tells us how much stock we need in order to hedge that exposure.

So:

> Delta is the hedge ratio.

That is why the replication portfolio in binomial pricing and the Delta in Black-Scholes are conceptually connected.

---

## 18. How option price changes with key variables

The professor then summarized the comparative statics of the Black-Scholes formula.

These are extremely important.

## 18.1 Stock price

If the stock price increases:
- **call price increases**
- **put price decreases**

This is intuitive:
- a higher stock price makes the right to buy more valuable
- it makes the right to sell less valuable

---

## 18.2 Volatility

If volatility increases:
- **call price increases**
- **put price increases**

This is a key derivatives idea.

Why?

Because options have limited downside for the buyer but potentially large upside.

So greater uncertainty benefits the option buyer.

Volatility increases the chance of a favorable extreme outcome.

---

## 18.3 Time to maturity

If time to maturity increases:
- option value generally increases

Because more time means more opportunity for the underlying to move into a favorable region.

Time is uncertainty, and uncertainty is valuable for option buyers.

---

## 18.4 Interest rates

If interest rates increase:
- call value tends to increase
- put value tends to decrease

This is connected to the present value of the strike.

The strike is effectively a future payment.  
Higher rates reduce its present value, which affects calls and puts differently.

---

## 19. Implied volatility

The professor then introduced one of the most important practical concepts in options markets:

> **Implied volatility**

This is the volatility that makes the Black-Scholes formula match the market price of the option.

In practice, the market gives us:
- stock price
- strike
- time to maturity
- interest rate
- option premium

So the missing ingredient is volatility.

By solving backwards, we can infer the volatility that the market is implying.

That is called **implied volatility**.

---

## 20. Why implied volatility matters

Implied volatility is extremely important because it reflects how much uncertainty the market is pricing in.

So instead of saying:
- “I think volatility is X”

we can ask:

> “What volatility is the market already assuming?”

This makes implied volatility one of the most useful real-world outputs of options pricing.

---

## 21. The VIX index

The professor connected implied volatility to the **VIX**.

The VIX is often called:
- the **fear index**
- the market’s measure of expected volatility

It is built from option prices and therefore from implied volatility.

When markets are calm:
- VIX tends to be lower

When markets are fearful:
- VIX rises sharply

So VIX is not some abstract indicator.  
It is directly linked to the pricing of options.

---

## 22. Important warning on using AI

At the end of the class, the professor made a broader methodological point.

AI can help with:
- Excel
- formulas
- graphs
- calculations
- summaries

But there is a real danger:

> If you outsource all the fundamentals to AI, you stop building your own foundations.

The course is called **Foundations of Finance** for a reason.

You still need to know how to:
- think
- calculate
- interpret
- understand the logic of formulas

Using AI without fundamentals is like asking AI to do push-ups for you instead of training yourself.

You may get an answer, but you do not build capacity.

---

## 23. What you should know after this session

By the end of this class, you should be able to explain clearly:

### A. Black-Scholes
- what problem it solves
- what inputs it needs
- why it prices a call as a stock-bond combination

### B. Put-call parity
- the formula
- what each term means
- how to use it to infer missing prices

### C. Delta
- what it measures
- why it is between 0 and 1 for calls
- why it is between -1 and 0 for puts
- why it is a hedge ratio

### D. Comparative statics
You should know how option prices react to:
- stock price
- volatility
- time to maturity
- interest rates

### E. Implied volatility
- what it is
- how it is backed out from observed option prices
- why it matters for markets

---

## 24. Exam-oriented takeaway

The professor was explicit:

- the most difficult part conceptually is already behind us
- Black-Scholes looks intimidating, but the hardest issue is the **intuition**, not the algebra
- if you understand:
  - payoff logic
  - put-call parity
  - binomial intuition
  - stock-bond replication
  - Delta and implied volatility

then Black-Scholes becomes much more manageable

He also made it clear that:
- **problem set 6** is very important
- sample finals will be provided
- now is the right moment to start consolidating everything

---

## 25. Final conceptual summary

This class brings together the full logic of options:

### Step 1
At expiration, option value is mechanical

### Step 2
Before expiration, time and uncertainty matter

### Step 3
A call can be replicated with stock and bond

### Step 4
That replication leads to Black-Scholes

### Step 5
Once you know the call price, parity lets you infer the put

### Step 6
Delta tells you the sensitivity and hedge ratio

### Step 7
Implied volatility tells you what volatility the market is pricing

---

## 26. Final takeaway

If you remember one sentence from today, let it be this:

> Black-Scholes is not just a formula. It is the continuous-time expression of replication, no-arbitrage, and uncertainty.

That is the real meaning of the model.

And that is why this class matters so much.

# Transcripción
15 de abril de 2026, 5:14p.m.
1 h 10 min 18 s
They are not difficult, are impossible. And, yes, is not here, no.  
Oh.  
Eva, Eva didn't came last day, also.  
Miss Marie.  
Sofia.  
Jessica.  
Are you in?  
Hey.  
Did you start?  
The first, what is that?  
Juan.  
Okay.  
Yes.  
Three.  
Then we are closing options.  
Um...  
Next week, next month, next Monday, we will talk about teachers.  
Then we will talk about swaps.  
Talking about us.  
Will blow everybody this.  
And we will have two days.  
Diez.  
The order to review.  
Under time.  
Go.  
Fine, Alexa.  
Will will behold on the 6th of May.  
6th of May, from 4th, we will start the final four, one hour before, yep.  
Oh.  
Yeah.  
Exam will be closed, Google closed. No, you have all the, you can have.  
One, 4 message.  
Two sets.  
Yes.  
Also.  
Yeah.  
Also, I'm gonna give you one formula seat.  
I like the one that I bring you now. This formula is like a little formula, but with more information.  
Make sense?  
And same ID for the.  
For the meet them, let me give you some more final one.  
And sample final two.  
Uncle, so all of you should have.  
All of you should have five different.  
Beds of seeds.  
Hi, see you feeling?  
Formula 6.  
Next, final instructions, final information, then formula C, then sample final one, sample final two, and finally, place, place slides. Make sense?  
You have, you can find also all this information at Brightspace.  
And again, I will upload sample final one and sample final two solutions.  
Yes, when you burn.  
At least.  
Start working on this, the sooner you start, the better.  
Okay.  
Audience.  
They will close the river.  
Pause the last thing you should learn was told last class.  
Last class, I'm talking about the binomial model.  
And now, when you have any problems at six, you have one exercise, like the binomial mode. Yes, once you know how to do this exercise, it's simple. Same happens with immunization. Once you know how to solve immunization exercises, it's simple.  
What do you need to solve in order to solve, sorry, binomial exercise or...  
Or, you can take an exercise, a simple and handy place your system.  
Two equations with who are known variables, yes?  
Regarding maths.  
Regarding.  
Understanding.  
We are done.  
We are done.  
Today's class, we will introduce Black and Souls model, understanding Black and Souls model.  
In the formal way.  
Diez.  
The formal way is really, really, really difficult. Now, the way is just a configuration of the binomial. Do you remember binomial exercises?  
Do you remember from last class?  
Let me start with what we are going to see today.  
We have got the strike, yes.  
Ha, number like you said.  
And for a colossal.  
This is increasing value.  
And for the call option.  
This is a price, yes?  
Talking about the increasing value, or will you calculate the increasing value?  
value is the value of the option being executed just right now.  
Is it value or will you call it?  
How would you calculate is the maximum? Yes, maximum value between.  
Zero.  
And.  
The stock minus.  
It's right.  
Yes.  
Makes sense.  
On the other hand.  
How will you calculate the price of the food?  
The light of the boot would be.  
Maximum Bipuri.  
Right.  
In this talk?  
Yes.  
When talking about the binomial.  
I'm talking about the binomia. What did we get? I'm talking about the binomia. We get that the current option.  
CASAS.  
Let me call Juan. Thanks.  
Stop minus weight 2 times.  
Yes.  
I love you.  
Wait, what?  
Richard, what did we discover last class?  
that you can create a home, sorry, you can create a home, or you can create a book.  
As a combination, as a portfolio that combines.  
The stock and the one.  
Sense.  
This door and the moment.  
Do you understand this idea?  
Hello, I can see you, sorry.  
Yes.  
Hey.  
A.  
Last class, we produced the Linomian boulder. Half office hours.  
Big stress.  
We don't really, really, really understand it. I know your mother can be hard.  
I mean, from the things that worry me, that can source formula is probably the last thing that worry me. You understanding that can source formula, the mathematics is complicated regarding that. What I mean is that I'm going to.  
I'm gonna play this in an intuitive way.  
From the from last class, yes?  
One of the conclusions, last class we talked about two really, really important things.  
A hole, a hole, or a hole can be formed as a combination of a stock and a bone, yes?  
The second important thing we went through as class was.  
Whole food, bye.  
Regarding of, I'm going to go. I'm going to explain for comparity later. Yes, again.  
But let me just continue at all.  
Is the combination between the stock?  
Ana bone. Here, let me write present value.  
One plus R, right? Yes, present value, and we're talking about options. We're right, we're right, present value.  
In this sense, this is present value. This is present value for continuous time. And what is this present value of a ball?  
That has face value.  
Right. Make sense?  
Two aliens.  
In order to fully understand black and source, in 1920s, in an intuitive way, first idea.  
This is a portfolio, yes?  
The good idea.  
when thinking about or when thinking about.  
Bernard, yes, you can just finish in one of two ways.  
Zero.  
Do you know?  
Or the difference.  
And, on the other hand, zero order difference makes sense.  
You gotta lose everything.  
So, you can get the difference, yes, so...  
So.  
As time to maturity.  
As, as we approach time to maturity, as we approach time to maturity.  
And wait.  
It waits.  
With them.  
Zero.  
Four, two, one.  
Makes sense.  
Yes, I stand.  
As time to my trip.  
Rose.  
Wait within zero or one. Make sense?  
Do you know about probability?  
Something is certain to happen.  
Probably, people then do one.  
Something needs certainly not to happen, probably do then.  
Yes.  
So...  
What are the weights?  
It waits.  
The weights are two probability functions.  
Within what?  
The approach.  
Phoenix.  
In the money or within zero as.  
Right, we tend to be.  
Both of them on.  
Like in the lights.  
Well, yes.  
Makes sense.  
And we are, we'd like a job for them.  
The gold price is gonna be...  
Instead of just calling, calling it.  
Wait one, and we call this NP1, yes.  
What is any one? A probability function.  
And.  
Let me call the second one.  
And beat you.  
Yes.  
What is the one and the two?  
A probability function that will inform me of hope.  
Home.  
Probably, probably all this is the money are out of them.  
Is the quality of finishing the money over? Make sense?  
Yes?  
I understand this.  
Then.  
You have understood this, if you have understood this.  
We are almost done.  
Twenty-one, away, away, yes.  
Okay, I'm going to go through today's class. I'm going to spoil. I'm going to make a big spoil, yes?  
I know the price of the car.  
Can I calculate the price of the book?  
Oh.  
Oh, how can I calculate the pressure of it?  
Read.  
I know the price of the call, how can I calculate the price of up with savings strike?  
No, it's nothing work, I mean.  
There is an equation, but this equation came from...  
Yes, I was looking for that.  
All times, please. All times you here.  
All times you hear that you know the price of that gold with a given straight, and you need to calculate the price of the gold. It seems right what you should think about.  
Call good fight, call good fight, call good fight, do you help me?  
To calculate the price.  
The code wants I know the price of the code, yes?  
Eva, come.  
Let me go through for a good fight. What is the problem with today?  
I'm talking about all samples.  
No.  
I didn't explain what is a coron or a good day. You know what is an option?  
You know, you don't know what is not. Today's class means not. Let me go back.  
All this means is.  
Yeah.  
Andy.  
What's up, Bonnie?  
Dogs and balls.  
Or financial issues.  
What is the management instrument?  
I guess we're doing so.  
Yes, how can you get?  
The value of money.  
The more simple, then you get the value of money.  
Because.  
Jesus.  
How can you get the value of a gun?  
The issue of that of a loan is also written, and the and the money that you will receive.  
You will receive the gas flow from above when you are done.  
So how can you get the value of at all by calculating the present value of what is written on the boss? Make sense?  
Estepa.  
A stock gets more complicated.  
I, because...  
It goes to Estepa.  
confirm that gives you the right group receipt.  
You all messed up, but then you will not receive.  
This phone has stopped.  
What are you going to receive? I have a store. I will get, I will wait for, I will, I will want to get.  
How will you call the money that you will receive if you own Estepa?  
Start with de.  
Diez.  
Yes.  
You all messed up?  
You will receive dividends, and how will you calculate the price of the stock?  
How will you calculate the price of the stock? By calculating present value of future dividends. At the end, all the things that we have done during this course has to do with that value of money.  
Make sense?  
Fully understanding how to calculate the price of a boat, and knowing how to calculate the price of a stock is...  
Absolutely important.  
Absolutely important. We have dedicated several classes to talk about equity. We have dedicated much more classes to talk about fixing bones, talk about bones.  
It says...  
Now, some.  
Where is Halina?  
In order to know the price of derivative.  
You cannot know the price of the relative by looking just at the contracts.  
Do you need to know the price of a second financial instrument?  
The price of the derivatives of the derivative derives from.  
But, how are we going to call this second underlying asset?  
Is this?  
They're lying after.  
Hey.  
Futures, next day I will go through futures. I have already said futures, and how will you calculate the price of a future week?  
There's a value problem; it's so simple, and by the future understanding features is important in order to understand options.  
Yeah.  
I can calculate if I want to buy a stock today, I need that you own the store.  
You tell me the price or I see the price in the market. I pay you and you give me the stock, for example. Make sense? I pay you and you give me the stock. What is a futures contract?  
Instead of buying, Estepa, they.  
Then we will agree, then we will agree the price.  
They both of us will agree the price and I will pay you and you will give me the stock one year now.  
Instead of me.  
Fine, they win.  
We will buy the future, and when we agree the price, today we agree the price.  
This is a future program.  
What?  
Futures, let me continue with futures. I am buying a futures contract and you are selling a futures contract, yes?  
I have.  
Right.  
Is right. Do I have Sonia?  
I have both a picture of them.  
But right, what will I have in the future?  
I will have the right of receiving the thing that I have. Which right will you have?  
Yes, believe her, believe me. You have the right to proceed by going.  
No, they're right.  
Pursue with my money, I have the right.  
Right.  
Receive the thing, and you have an obligation. Which obligation do we have?  
Yes, please.  
Obligation, do I have?  
Wait, it says.  
Once you enter into a future contract, both parts of the contract has both obligations.  
Makes sense.  
When do we have a touch?  
When you buy an option, you really buy. I will pay you.  
If I pay you, I am mine. I am mine. Yes, you're right.  
And buying death, the right, the right.  
There are two types, two different types of rights. You can have the right to buy, or you can have the right to sell. Make sense?  
So, if you buy the right, you will just exercise your right, just in case you will get money.  
Yep.  
You will exercise your right, just in case you will win by exercising your right.  
So, in this case...  
What is this, Sam?  
This is the profit or losses are there.  
Here is the price of the.  
Display.  
Andre is right.  
Is a price.  
that we have agreed. The price of which you can exercise. I'm talking about a call option. A call option is the right to buy. Yes, the right to buy.  
I can buy them. I can buy at 100.  
Buy one.  
What will be the price of the underlying asset in the future?  
What will be the pressure to underline us in the future? I don't know.  
I don't know.  
Sam, will you buy something?  
At 100, the price of the queen is 100.  
And how much will be winning?  
If you buy for 100, something whose price is 100, how much money will you get?  
You are buying for 100, and you can sell for 100. How much are you getting?  
One 110 - 100, you are getting 10.  
So, you are getting 10, and if instead of 100 pen is 11, 111, you will get 11. You will get one euro per euro.  
Is this?  
And.  
You don't exercise your right.  
You will not get anything. What means is not to exercise your right. Imagine that the price is magic.  
When you buy for 100, when you can buy for 90, you won't exercise your right, and this will be it.  
So, how much is the amount of money that you will receive at that?  
All man sees the amount of money that you received on the TV, it's up.  
You wanna receive?  
Zero or the difference, yes?  
What is this?  
This is a whole option.  
Then you can do the same for whose options.  
What is the problem of these three classes that we construct one class over previous class?  
This class, we are things. This class, I am talking about Black and Souls formula.  
And today's class also is an excuse in order to review all things that we have for you to be done. Yes?  
Yay!  
I'm going to explain again. I'm going to. I'm going to explain again the protective food.  
Protecting food, but I am going to explain again the protecting food.  
Because, thanks to the protective group, we will get close to the control formula.  
Sam, instead of at all, they pay you for a poop.  
Is like this.  
This is the payoff and this is the underlying. What does this mean? The good is the right to sell.  
To buy a book with a strike of 100, you have to buy.  
You have these are what is that?  
This is.  
Esther, the strike.  
Of the putis.  
The strike of the goodies, I have.  
Right, instead of 100, make sense.  
When will I buy or when will I sell at 100? The price of the underlying is lower than 100.  
I will sell, just in case I can buy the cheaper price.  
Is this?  
Okay, I'm gonna buy with it.  
About of Sion.  
With it.  
The line.  
Yes.  
This is underlying.  
I would like to throw this better.  
Yes, this is underlying.  
I'm gonna roll them in the same.  
Yes.  
Nerd woke up.  
Third one.  
The stove and the water, yes?  
Yes.  
If I bite.  
We got there.  
The color, sorry, the stove with the hook and the sun pay off of all these things.  
They off 0 plus this is this. I'm losing one euro per euro and I'm start winning one euro per euro.  
So I will have this mayor. Yes.  
I will have this favor.  
Stop at the pool, and then I'm gonna drop the same strike.  
I bought.  
Ana Bone.  
It was right, it wasn't distracted with about with his value, it wasn't distracted.  
Zero plus 100.  
Hi.  
Yes.  
This is not the best laugh I have done in my life.  
At what you should see.  
What you should see.  
Do this well.  
What can't you see?  
That both graphs in red are the same.  
Are the same.  
No.  
A good.  
Give him one strike, plus.  
The stock price should be one to.  
I call Edith.  
On strike, that's.  
Yes.  
This is called good parity problem.  
A good and a goal is equal.  
What I strongly recommend you to do.  
Not just going through the slides, but also problem set 6, and also...  
And also.  
Thinking about these kids.  
I have said that a good maturity is maximum between.  
Action in between, describe, minus, restore.  
Or see. Also, I have said that the call is maximum between zero.  
I need to stop my little strip, yes.  
You should see you, you think, and you play with this.  
You play with these two things.  
What can you do?  
A good names, Vidal.  
Who, 9 is the call is?  
What is the payoff?  
When the poop is positive.  
When the put is in the money, the call will be out of the money. When the call is in the money, the put will be out of the money.  
You make this difference.  
Did you subscribe the boot minus the goal?  
What you will get? What pay off?  
Remove it.  
What are you doing?  
But, say you will do it. You should start these two things.  
It's anvies or.  
Or negative this X -, yes, yes.  
Did you buy?  
A good.  
And you saw a goal, but pay off when you receive.  
Let me draw this.  
In a different way.  
I'm gonna...  
Hi, Abu.  
Yes.  
And I'm gonna sort a ball.  
I saw this would be a long call, a short call, if this work.  
What is this payoff?  
In this strike, what is he saying?  
Right, my system, this.  
What I'm doing?  
I am playing.  
and playing in order to get the numbers from one side or from another one. But in order to fully understand this, we call it game.  
You should fully understand all concepts, or at least you should try to pay off and play.  
I can explain this one time or two, and you can understand.  
For this, and if you do this by yourself, you will not fully understand this, yes?  
Okay.  
So, these all these things?  
What's to say?  
Let me summarize this formula: put class stock is equal to the whole.  
That is correct, yes?  
This is just to summarize that. If I know the price of the call, how can I calculate?  
Because of the food.  
By having the gold strike.  
Did you?  
Yes.  
I am.  
Now, baby.  
Yes.  
No.  
I know the place of the call.  
I can calculate the price of the hoop. Both the price, the gold, and the hoop has same strike.  
Makes sense.  
Then you got great.  
The price of the food?  
No, we.  
Diez.  
This is the book, OK, and the one.  
Thanks, yes.  
Nine, and you too.  
Right.  
The one.  
This is the Formula Four.  
What should I do?  
I see that.  
Vidal.  
And I said, I should subscribe.  
Knop.  
Okay, I want to write.  
Once from that.  
Absolutely.  
I want to write.  
In this sense, I want to have positive destroy, negative to stop, because this is the natural way.  
No, let me start.  
If the stock price of the food is going to be...  
This and this is the same, this is negative, this is what?  
One minus N.  
We want times the ball.  
Makes sense.  
Yep.  
And now.  
Vega, please.  
This is 71 and negative, negative, please.  
One minus and the one.  
Thanks.  
Except.  
What is this? Tacon's formula for the food.  
So, so simple to understand it, you have understood.  
You have understood the code.  
Four.  
Can you work?  
Diez.  
The call is about to finish the morning.  
If the goal is about to finish the money, the boot will certain finish out of the money, so if anyone.  
Can you what? Thanks to what?  
Priority function of the book will tend to see. Make sense?  
And same happens with the picture.  
Yep.  
Okay.  
In order to finish with today's class.  
There is one thing else you should know.  
That is, what is the derivative of the core?  
We need to stop.  
Is that you like me?  
The slow.  
The slow of the curve. Do you remember last day?  
I told you that the slope could be 0 or put 10 to one.  
The slope will turn to one as the goal is about to finish in the morning. The slope will turn to zero. The slope is about to finish out in the morning. How are we going to call this slope? It's racing. It's racing.  
Hedge, Hedge, OK, Hedge, OK, Hedge, OK, Charge, ratio.  
OK, there are more razors. There are more razors.  
Price earnings ratio. I think we have we haven't seen any more ratio.  
Hold your bone ratio, Vega.  
X-rate, X-rate.  
It's.  
Ace.  
It's it's.  
This is a really important work.  
Why would you use Melendez?  
Why, why do you use have it?  
Yo, Ruiz.  
Against what? Against?  
If you buy a protective food, we are hedging against the price of the stock to hold.  
Bye, everyone, then.  
We have to the flow, find out everyone is buying.  
To grab egg.  
A full option, but a full option at the end is like an insurance home. They have review.  
And, just in case, you will get something back.  
What is heads ratio? It is low. What is heads ratio? Then there you go.  
And this race you win.  
There is not the day for talking about heads ratio. Next day, we will talk about heads ratio and when.  
When reviewing for the final, we will talk about hedge tracing. But what I want you to see.  
It's ratio to the anybody. Always going to, what is going to be the heads ratio of the call between zero and one?  
Affordable.  
Look for lipple.  
Oh, hedge ratio for the pool will always be.  
Do you have this?  
Muszynski.  
It will range from zero to -1.  
Makes sense.  
Okay.  
We are going with this. Let me start, but we have done the most.  
Oh, also I have shared with you one XL.  
I have said, would you want Excel file?  
It is the Excel file that I have, sir.  
This is for a food.  
I mean.  
This is for a call, yes? What do you have?  
Let me see.  
Time 3.  
Let me say 100.  
Look, what do you have in red?  
Why do you, how do you agree?  
Perfect. There is red line is called price for.  
For a period of time, maturity.  
As time to maturity, get shorter: 7, 6, 5, two.  
0.1, yes. As time, look what happens. As time to maturity gets shorter,  
Price of the call will tend to.  
intrinsic value. Price of the coal will tend to intrinsic value. If you see you are out of the money, you are out of the money, hedge ratio will tend to zero. You are in the money, hedge ratio will tend to  
One. And if you are at the money, hedge ratio will range from zero to 1. Yes? Here, it will be around 50%.  
If I go.  
Take the boot.  
The slope is negative. The higher the underlying surprise, the less the price. Make sense?  
Please, one important thing also, thinking about...  
Corporate finance.  
AI helps you with almost everything.  
But you should know how to learn Excel.  
Don't trust, just in AI.  
AI is with us for a short time, but the most I use AI, the more I the more I use AI, the more I see students just using AI for everything.  
And this is a problem.  
Why? Because if you use AI for everything, you forget about fundamentals.  
What is the name of this course?  
Foundations, if you just use AI for everything.  
You will forget about foundations.  
This is a problem. Think about your future's kids in case you will have, or maybe think about kids now.  
It's important to know how to write.  
To know how to read, it's important to know how to multiply.  
There are students that with AI, they are not going to multiply, they are not going to read, they are just going to copy and paste in ChatGPT and copy and paste the answer.  
Do you go to the gym?  
But can you imagine paying a gym and just telling ChatGPT to make push-ups for you?  
It will not make any sense.  
OK, let me.  
In order to finish with today's class, I should start at least.  
Now, we have seen the most complicated things, not the most. You know all the intuition. What are we going to do today? We are going to talk about Black and Sons formula.  
We will start from the binomial tree. Last day we closed with the binomial tree and we did a boom with the binomial tree. And I told you that.  
The more accurate the binomial is, the more...  
The formula will tend to black and soul formula.  
Okay, assumptions. Do you do you know Thermo Mix? Thermo Mix?  
Thermomix is a cooking robot, a European cooking robot.  
Do you know a cooking robot? In mind that you want to make, you want to make.  
Rapacho.  
You take the ingredients, you put all the ingredients in the machine, inside the machine, and you will get the gazpacho. You understand what I mean?  
One trying to explain that black and source formula is like a cookie bro. You have all the ingredients, which are the ingredients, these are the ingredients. You need to know the risk rate, you need to know the price of course, the price of course, but also you need to know.  
Volatility, yes.  
And then?  
OK, this is black and short formula.  
This is the one that I have written on the blackboard. What is MB1 and MB2? A probability function.  
And here is how you can construct this probability function, but you don't need to know.  
What is the inclusion that anyone will get to work if the call is about to finish in the money and will get to 0 if the call is about to finish out of the money?  
Hey.  
Here, forgot about this slide, and now this one is really important in order to fully understand things.  
What will happen with the price of the coal if everything, everything, every everything else is equal?  
What will happen with the price of the gold or the food if everything is equal if the stock price increases? What will happen if the stock price increases with the price of the gold?  
Did you go up?  
Think about is positive slow. This is positive. This means that as the price of the stock increases, call price will increase. What will happen with the price of the put as the stock price?  
increases, I said the food will decrease. The higher the price on the line, the less I will get by selling something whose price is bigger.  
Makes sense.  
Okay.  
Volatility of this term.  
As the volatility of the stock increases, there are more chances to increase the money if you are out of the money or increase the price if you are in the money. Make sense? So as the volatility of the stock increases, price of the whole wheel.  
Ruiz.  
Then, time to expedite.  
Time works as uncertain.  
In more design.  
The more chances there are, it was time to increases, but price will increase.  
Yes.  
Then, regarding infiltrates, yes, you, you think that infiltrates in A.  
They are.  
Yep, you increase the trace.  
Please break this menu for surprise.  
So is this.  
Okay, now this is an example, but this example is just plugging the numbers into a formula.  
You can Google plan and solve formula online. You will see this. You can put this data and you will get these results. In the Excel that I have shared with you, you can also do same numbers.  
OK, oh, oh, oh, oh, I was near.  
I was close to forget.  
I am not gonna do.  
Is.  
Yeah.  
Did you have all the markets, yes?  
Thinking about the markets.  
Do you know the stock price?  
Yes.  
Will you know this right? Absolutely, yes.  
You, Leo.  
There is rape.  
Yes.  
Do you know time to maturity? Yes.  
Forget about the vulnerability for a second.  
But can you calculate the relatability? You can calculate it more from the given person, but careful because...  
Do you know the price of the gold?  
Just because of course.  
are trading matches. You can get the price of the book.  
You understand what I'm saying?  
I'm saying that.  
You know the stock, you know the strike, you know the risk rate, and you know time too much with you. And also, you know the price of the call.  
But you can get the price of the call. We know at which price the call is betrayed.  
So, if you know.  
All these things, what can you calculate?  
The volatility that the market is considering for a given price on the coup.  
As readers.  
Are we both as the leaders of this crisis are public?  
You can just bring entire policy.  
And that's not what I'm saying.  
Yes.  
We can get the volatility. We can calculate the volatility that the market is giving to the puts that are being traded or to the calls that are being traded. Make sense?  
Or, shampoo straight every leg.  
You can, can make this wall of it.  
And what can you do with all these dies?  
That way can index.  
What is the name of this index? It's this index.  
You went off, so I'm so far bored from the computer.  
This index.  
is one of my favorites, which is the bigger market in the States.  
Vega.  
Change.  
It's English.  
Dixie next.  
Index is Chicago Bot of Exchange.  
What does this mean, the mix index?  
How? What is the implied volatility of the? Yes?  
Have you ever had a beast?  
Hello.  
This index is relatively famous. It's also called.  
The fact here, here.  
Year Index.  
PR Index. I mean, it's a trend. PR Index. Let me show you.  
Xbox.  
OK, sorry for this. I didn't mean it.  
Is it market?  
What happened the 20th of November?  
Trump was selected.  
I didn't mean.  
The market.  
What happened?  
I'm looking forward to 20. Oh, no, 20th of April. No, sorry. This is 20th of November.  
Trump started the 5th. Oh, the 20th. No, sorry. Trump was elected, not the 20th. The 5th.  
Sorry, sorry, sorry, I didn't mean.  
That was listed here.  
The 5th of November, from start the 20th.  
From started with me.  
20th. And the Liberation Day was happening the 20th. Do you remember Liberation Day? The tariffs with drugs start with tariffs. 20th have happening.  
Yes, and which is this day?  
28th of February, I'm looking forward to 28th of February.  
Start of the Iran Iran War. Yes, let me make us a bigger food.  
Five years.  
Ohh.  
OK, let me make a maximum, yes.  
Which one is this one?  
Dmax.  
Is it VMax? Which one is this one?  
Pathetic.  
Iceland, big crisis.  
Do you see that the index is a good indicator of fear?  
But careful, because the new proof is great. The new proof tell us, tell us things in advance.  
In this.  
Doesn't he just tell us these ones they have happened?  
I don't want, I don't, I mean, I don't need to know when I'm gonna die two days after.  
I would like to know where something is going to happen upfront.  
Yes, it is.  
It's important.  
Easy.  
I mean, it's easy fix, yeah.  
And head ratio, is the area a kid who will talk about head ratio, and once you know the price of the book, how can you calculate the price of the book? The plan and source for me.  
And Black Monday was one day that everyone of Black and Social Formula was called for a day, Midas Formula. Have you heard the day of the Midas scheme?  
Your scheme used to.  
Touch things and transform things into gold. What was one of the last things he does in touch? He does in touch, touch his daughter.  
Mam.  
Donor becomes home.  
That can solve problem made a lot of people make money because it was used to.  
It was used to arbitrage, arbitrage, and arbitrage. But one day, when this year came, suddenly, I'm talking about this happening here, 87.  
87 for the internet before a lot of things, and this was this is one of the first example of systematic.  
We are done with deliveries. We are done with Black and Source Formula. Please do try to understand Black and Source Formula if you have not under previously understood or good planning. For these maths, maths more important the exercises you have in problem set 6.  
If there is an exercise regarding black and short for blind problems, 6PP.  
Meiqi.  
Is this?  
Enjoy the weekend and in olives.  
You do now?  
That's two weeks.  
The questions?  
No.  
Of the.  
Hey.  
****.  
Before reaching the final, let complete problem set 6. I don't want to talk today about what is going to be on the final. Yes, but for you, thanks.  
Or, like actual formula is not going to be defined.  
But please review. Yes.  
The.  
Hi.  
What is wrong? Are we understanding things, Jessica? Like, mostly now. Perfect. We can review it. Yeah. The contest makes some of the numbers are mixed. Perfect. Everywhere, but all over. Thank you, Professor. Welcome, bye.  
Okay.  
Right.  
Yeah.  
The.  
Yeah.  
Get done.  
Si es pasado.  
I don't know. Yo.  
CC.  
Yeah, come in.  
Compressilla.  
Something went about.  
OK.  
No, no.  
Oi, buddy.  
Oh no.  
With.  
Togar Mehar Nal Chhapati is in EC show.  
Vidal.  
She's got it.