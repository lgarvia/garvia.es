# Foundations of Finance – Session 22

**Date:** April 8, 2026  
**Topic:** Derivatives I – Language, Logic, and Payoff Structures

---

# 1. Why this session matters (non-negotiable)

This is not just another class.  
This is a **paradigm shift**.

> Derivatives are not difficult because of math.  
> They are difficult because they require a new way of thinking.

From this point onward, the course stops being about:

- valuing assets
    
- understanding returns
    
- measuring risk
    

And becomes about:

> **Designing payoffs under uncertainty**

---

## Core warning

If you do not internalize this session:

→ Derivatives will feel abstract and disconnected  
→ Everything that follows will require memorization

If you do internalize it:

→ Everything becomes mechanical  
→ You start “seeing” financial structures

---

# 2. The intellectual path of the course

This session sits at the end of a very deliberate progression:

### Step 1 — Time Value of Money

You learned:

- how to move value across time
    
- discounting and compounding
    

→ **Value is time-dependent**

---

### Step 2 — Portfolio Theory & CAPM

You learned:

- risk-return trade-off
    
- required return (SML)
    

→ **Value depends on risk**

---

### Step 3 — Financial Instruments

You learned:

- assets vs liabilities
    
- contracts as value carriers
    

→ **Value is contractual**

---

### Step 4 — Fixed Income

You learned:

- sensitivity (duration)
    
- risk decomposition (price vs reinvestment)
    
- immunization
    

→ **Value reacts to interest rates**

---

### Step 5 — Derivatives (today)

Now:

> **Value depends on another value**

---

# 3. What is a derivative (deep definition)

A derivative is not just:

> “An asset derived from another asset”

That definition is correct but shallow.

A more precise interpretation:

> A derivative is a **function** of another asset.

$$  
Derivative = f(Underlying)  
$$

---

## Key implication

You are no longer valuing objects.

You are valuing:

- relationships
    
- contingencies
    
- scenarios
    

---

# 4. The underlying (critical concept)

Everything in derivatives depends on:

> **The underlying asset (S)**

Examples:

- stock
    
- interest rate
    
- commodity
    
- currency
    

---

## Mental model

If you don’t understand the underlying:

→ You cannot understand the derivative

---

# 5. Futures: symmetry and zero-sum logic

## Structure

A futures contract:

- fixes a price today
    
- settles in the future
    
- creates **mutual obligation**
    

---

## Payoff intuition

At maturity:

$$  
Payof_{buyer} = S_T - K  
$$

$$  
Payof_{seller} = K - S_T  
$$

---

## Fundamental property

> Futures are a **zero-sum game**

- One party’s gain = other party’s loss
    

---

## Deep insight

Futures do not create value.

They **redistribute risk**.

---

# 6. Options: asymmetry begins

Options change everything.

---

## Definition

An option gives:

> **The right, but not the obligation**

---

## Types

### Call

Right to **buy**

### Put

Right to **sell**

---

## Key distinction vs futures

| Feature         | Futures   | Options       |
| --------------- | --------- | ------------- |
| Obligation      | Yes       | No            |
| Upfront payment | No        | Yes (premium) |
| Payoff symmetry | Symmetric | Asymmetric    |

---

## Conceptual leap

> Options introduce **convexity**

---

# 7. The price of flexibility: premium

When you buy an option:

→ You pay for optionality

---

## Analogy

> An option is economically equivalent to insurance

- You pay a premium
    
- You gain protection or upside
    

---

# 8. The three prices (must be clear)

Every option involves three variables:

1. **S** → Underlying price
    
2. **K** → Strike price (fixed)
    
3. **Premium** → price of the option
    

---

## Important distinction

- S → uncertain
    
- K → fixed
    
- Premium → negotiated
    

---

# 9. Payoff functions (core mechanics)

## Call option

$$  
Payof = max(S_T - K, 0)  
$$

---

### Interpretation

- If S > K → exercise
    
- If S ≤ K → walk away
    

---

## Put option

$$  
Payof = max(K - S_T, 0)  
$$

---

### Interpretation

- If S < K → exercise
    
- If S ≥ K → walk away
    

---

# 10. Payoff vs profit (critical distinction)

## Payoff

What you receive at maturity

## Profit

$$  
Profit = Payof - Premium  
$$

---

## Consequence

> You can have a positive payoff and still lose money

---

# 11. Long vs short asymmetry

## Long option (buyer)

- Maximum loss: premium
    
- Upside: potentially unlimited
    

---

## Short option (seller)

- Maximum gain: premium
    
- Losses: potentially very large
    

---

## Deep insight

> Selling options is fundamentally different from buying them

---

# 12. Leverage: stock vs option

The Microsoft example illustrates:

- Buying stock → linear exposure
    
- Buying calls → leveraged exposure
    

---

## Result

- Options amplify returns
    
- Options concentrate risk
    

---

## Key idea

> Options are **non-linear bets**

---

# 13. Protective put (insurance structure)

## Strategy

- Buy stock
    
- Buy put
    

---

## Outcome

- Downside limited
    
- Upside preserved
    

---

## Interpretation

> You transform an uncertain payoff into a **floor + upside**

---

# 14. Synthetic replication (very important)

Key identity introduced:

$$  
Stock + Put = Call + Bond  
$$

---

## Meaning

Two different portfolios → same payoff

---

## Implication

> Same payoff ⇒ same price

(Law of One Price)

---

## This is the foundation of:

- arbitrage
    
- option pricing
    
- Black-Scholes
    

---

# 15. Option classification

## By exercise style

### European

- Exercise only at maturity
    

### American

- Exercise anytime
    

---

## Important insight

> American ≥ European (never less valuable)

---

# 16. Moneyness (state of the option)

## Call

- ITM → S > K
    
- ATM → S ≈ K
    
- OTM → S < K
    

---

## Put (inverse)

- ITM → S < K
    
- ATM → S ≈ K
    
- OTM → S > K
    

---

# 17. Strategies: shaping risk

Options allow building structures:

---

## Straddle

- Buy call + put
    
- Bet on volatility
    

---

## Spreads

- Combine options with different strikes
    
- Control risk/reward
    

---

## Advanced (not required now)

- Strangle
    
- Butterfly
    
- Iron condor
    

---

## Meta-idea

> Options are tools to **engineer payoff distributions**

---

# 18. Real-world risk (critical lesson)

Case discussed:

- Trader selling straddles
    
- Assumption: low volatility
    
- Event: earthquake
    

---

## Result

Massive loss (~$1.4B)

---

## Lesson

> Selling volatility is profitable… until it is not

---

## Structural truth

- Buying options → bounded loss
    
- Selling options → tail risk
    

---

# 19. Uses of derivatives

## 1. Hedging

Reduce risk

## 2. Speculation

Amplify returns

## 3. Incentives

Align management (stock options)

---

# 20. Final conceptual synthesis

Before derivatives:

> You valued assets

With derivatives:

> You design outcomes

---

## The real shift

You are no longer asking:

- What is this worth?
    

You are asking:

- What happens if X occurs?
    

---

# 21. Closing message

Derivatives are not about formulas.

They are about:

- conditional thinking
    
- scenario construction
    
- risk transformation
    

---

## Final sentence

> This is where finance stops being descriptive and becomes creative.

# Transcription
8 de abril de 2026, 5:12p.m.
1 h 5 min 53 s
OK.  
OK, today's class.  
Yes.  
Is absolutely, absolutely important. Absolutely important. Why?  
Because today we will start.  
With very bad news, this.  
But only we are going to start with the regards. Today is the most important class regarding the regards. Why? Because you don't understand this class.  
It's we bless this would be.  
Really, really important today's class also.  
This last.  
It's the most important class of from the religion because today we will start with language.  
Next day we will continue talking. We will continue be talking the same language.  
And the sooner you start practicing, the better, the more comfortable you will be, yes.  
OK, I'm going to go directly to the main idea.  
So quick, so quick, the whole course, the work.  
The beginning of the course, we start talking about time value of money, yes.  
Time value money is absolutely important. And then we talk about portfolio theory. Yes, portfolio theory. Here there is CAPM with the SML.  
You should remember SML formula, whatever from this point.  
We start talking about financial instrument. What is a financial instrument? An asset for the holder, a liability for the insurer.  
It's a finance instrument. It's tangible asset and the right style.  
Because of that, that is value from a contract one play.  
What is the financial instrument?  
We have been talking about first thing here.  
Money. We are not talking about money too much. We are not talking about money too much here. But we have talked about monetary policy, we have talked about interest rates and all these things has to do with money. I have not talked about inflation.  
I have not talked about this because it's out of my soul, but.  
I've told you that the power or getting words is only one important for my class.  
Money first I'm talking about financial.  
Yes.  
Yeah, .0, risk, zero. Infinity, liquidity. Yes, money. If you have 5 euros, how much are you going to have in one year? If you have a bill of 5 euros, how much are you going to have in one year?  
5 years. See your return, see your risk, and you can trade. Make sense.  
All of you are with me. Next step, I need finance. I need finance. First thing I will do go to the bank and ask for a loan. Yes, I will go to the bank and ask for a loan.  
Are we talking about loans? No. Why? Because loans are not solely for the bank to sell a loan to a third party will cost. There are no, but there are. There is not that. There is a fix in Comor.  
For equity market, yes, there is. There are no loans market supervised by ACC. It says a loans, then are loans. Yes, then I'm talking about the aliens.  
Long sand boats.  
All this is one of the most fixed income is one of the most important parts of this course and then also.  
Why all these things exist? Why there are bonds? Why there are loans? Why there are there is equity? Why? Because companies projects needs finance and with this money you ask for money.  
If you receive your money, you will grow and you will pay back the money that you will receive. And also you you will need money for yourself and everyone will be happy. All these instruments play.  
A game that is called up some game.  
Everyone wins. You win because I win. EG again, that sounds, yes.  
I can hear. I am talking. You are listening, but you know and I make sense.  
OK.  
Then we will talk about the deliver. Why is the deliver?  
What is a very good thing? It's a financial instrument. It's a very good thing.  
I'd like to call you from another financial issue.  
Makes sense? Where does the value of the financial instrument that you actually pay from? From another financial instrument.  
Yes.  
Juan, Sophia is missing.  
And I think all of you will have.  
Why is the derivative a financial instrument that derives value from another financial instrument? Yes, so in order.  
Oh, that sound.  
Yeah.  
But I would take a.  
Sam, yes.  
But in order to know the price, what is the this course? This course is dedicated to know the price of it.  
Kapem capitalizing pricing model is something that help us. We are really paying value money in order to get price of things this in order to know the price of a derivative what I will need.  
Now what is the price of the other financial instrument? The delivery price derives from measures.  
How are we going to call this other financial instrument underlying us, underlying us? Yes, you have all these things. I will go to the slides, but I just derivatives, derivatives that I instructed from another financial instrument or from underlying us. Make sense.  
OK, types of negatives.  
Options.  
I am Schwartz.  
I'm going to go quick through pictures. I'm going to go quick through pictures.  
Future. What is a future? We will talk about features in four classes. I want to start with features because features are so simple to others.  
Today, car sales and I am a chair buyer. If we agree today to buy the chair.  
You have an obligation. I have an obligation. Which is my obligation to pay? Which one is your obligation? Give me the term. Which one is my right to receive the term? Which one is your right to be paid?  
I sense.  
How do we make this purchase? How do we know this contract?  
Hey, I tell you what price and if you tell me, oh, today you tell me the price and if I agree with the price, we give hands to each other or sign or whatever or I pay you and I pay the check. All of you understand that you close today the price.  
And you take again the two days.  
But it's a future contract. Instead, they will close the contract. They will close the contract.  
Today we close the contract, including the price. Today we set the price at which the chair will be bought. When? When your time, for example.  
In one year time, at which price I will buy the chair, the future of the price that is with the who are we going to call this price strike? We will see only that. Do you understand the idea?  
Today we close the price. When will I pay you?  
What year back? When you will be in the chair? In one year back. Make sense?  
What about?  
What about?  
The price of the chair in the future.  
What is the price of the chair in the future?  
What is the measure of the time in the future?  
Right.  
Do you have a crystal ball? No. We don't know what is the president and because we don't know.  
Let me use S or the like I said yes.  
This is CEO. What is the price of of the chair in the future? I don't know. What is the strike?  
We know the stripe. We know the price at which the chair will be both. All you are with me.  
This I need your attention. What I'm going to explain now you understand this. You will understand today's class. Almost everything. Make sense.  
Price of the contract, the price that is written on the contract, the price at which I will buy the chair, yes.  
What if the price of the chair is?  
The picture which price I will buy so.  
So, so.  
I am buying 100 something. It's price is 100.  
I will be happy or not.  
How much can you can you remember my happiness?  
OK.  
Make sense?  
I have the obligation to buy what is the price is 90.  
You should you are.  
The the seller can buy for 97 to you for 100 and get 10 for free.  
The risk of not knowing what is going to happen in the future makes sense.  
All of you understand this?  
Yes.  
I mean right here. What happens to the center? What happens to the center?  
If the buyer is happy.  
Is because the seller is unhappy and if the buyer is unhappy is because the seller is happy patience.  
Are you understanding?  
No, no.  
Use on this graph on this graph, you will get zero when talking about derivatives, derivatives.  
Be a 0 sum game, a 0 sum game. If you are winning that it's because I am losing the exact amount you are winning. Make sense.  
This has to do with teachers. We will talk about teachers in the future, but you should understand this now. But because you understand these options are simple. One more thing not simple. Options are complicated, but let me explain it and you will get used.  
Good.  
OK, another thing.  
What is an option?  
Or let me before say.  
I need your attention. I love your attention. We have closed the contract. I have now a future and you have sell me a future, but please.  
I'm not bored. I'll go. I'm bored. I'm not home.  
And I have closed the contract to buy it, but I have not paid anything in order to get the contract. I've not bought the contract. You understand what I'm saying? Thanks.  
One is an option. We're talking about options. You buy options. You buy options. What does this mean? You buy today is because today you are paying.  
In order to get what? All right, combine just the right. You can exercise once you have both it. Once you have both the option, you can exercise the option.  
Yes, engage in one. You don't want it. You don't have the obligation. Make sense.  
Yep.  
And we will distinguish between two types of rights, the right to buy and the right to sell.  
The right. If you buy the right to buy what we're going to call it, call a call. We are going to repeat this again. A buy the right. Buy is a call. How much are you going to pay for a call?  
The bee.  
It's what you pay. It looks like an insurance company. You see what happens. You need to buy an insurance company.  
The right back. What did they call it? What other thing can I buy? Can I buy the right to step? What are we going to call these types of options?  
Put options, put. There will be two types of options, course and puts.  
A long position and a short position later because I'm just giving you ideas. I'm giving you all these ideas with care. Now you have heard about the voice, you have heard about the polls, you know that.  
You buy to pay a premium in order to get a call or in order to get a call.  
And yes, I am fired. Let me go fast. Let me go back there because I have these two grants. You buy a coal, you know payoffs. I have already buy. I have already bought. Yes, I'm not thinking about how much money I pay.  
I've already made. What is my payoff? How much money I will receive?  
I have a call.  
Value the underlying price and maturity we will see would that is the underlying.  
Is the underlying worth more than the strike?  
I will exercise my right. Make sense.  
I will exercise my right. Why? Because I'm having money, but for a call option, will I buy?  
At 90, sorry, sorry, sorry, we live by at 100.  
Will I buy at 100? I can buy at 90.  
No, so I won't exercise my right.  
I won't make sense like that, right? Make sense?  
When I will exercise my right.  
And I will be happy when I can buy at a lower price.  
When I can buy at the lower price than the right I have to sell.  
When I will sell, when I can buy at a local price and the price of underlying asset is low, is lower than the start. Make sense.  
So for the food I want exercise my right.  
If I can sell at a higher price on this day, what you'd prefer is Marie to sell at 100 or to sell at 100?  
100 and you won't.  
Press.  
Make sense?  
Oh, you don't say that.  
You have bought a food option. What does this mean? This means that you have what you have bought, you have the right to sell at 100.  
Imagine that the underliner surprise is 100. Yes, we need to sell. What do you prefer to sell at 100 or to sell at 100?  
So if you can sell at 110, you won't sell at 100, so you won't get to sell, you're right.  
Make sense?  
I'm sure an absolutely important thing. I'm explaining these things. I hope you understand them, but but if you don't work a leader over the things that I am explaining.  
Next day you will for what? You will forget all of them. Next day I will walk over to base six. So if you don't work a little.  
You will not get, I mean, they are nice with all these.  
Access.  
So I'm worried about Sophia and Sam.  
For all of you and for Sophia and Sam also, I have full of office hours. You can write me. We can arrange a meeting before the class, after the class, day after day after the class. It's not possible because I have I have to move to another place.  
But next week I think I this and also I have to whom whom I can we can arrange.  
One thing in order to finish with this finished and I will start with the next.  
What about the premium? What about the morning that I have bed?  
In this case I will have paid half.  
Why this is the payoff? This is the profit or losses. This is the the loss. Yes, here at 5 at 105 will be the rate given as the price is high and you hope this makes sense.  
I'm here. Make sense.  
OK.  
What are we gonna do today?  
We are going to talk about the option contract. Then we will see option valuation on expiration date. I have already told you about option valuation for the buyer.  
I will tell you also about option valuation for the set.  
If the buyer is getting them, it's because the seller is using them.  
So in order to talk about the seller, what I will do, I will draw the flaps. I guess the opposite where where where the number is positive in the graph or the seller will be negative. Makes sense.  
Then and then finally we will talk about the options strategies, just a way, a quick way in order to have general culture in order to work with all these concepts and also know what are the uses and a spoiler.  
Options helps.  
Speculating and playing with uncertain. Yes, two options you can hit.  
You can also speculate that is getting much more money than the money you will get by investing. And also careful because if you speculate and you get more money, also you are assuming more. Makes sense.  
Yes.  
OK, what is a derivative? A derivative is a security which with a payoff that depends on the price of another security. Or are we going to call this other security and the like?  
Then examples of data, Observes, pictures and SWAT. I have already explained pictures. What is the SWAT? You give me an amount of something in the future and I will give you another amount of something. For example, you are a bananas producer and I produce ornaments.  
We agree we are going to a contract that in one year time you are going to give me a certain amount of bananas. I will give you a certain amount of oranges to close the contract. Nobody pays the other person anything today. In the future you will give me bananas. I will give you oranges. This is a commodity.  
Or you will give me euros because you are working in Spain and you are American and I will give you dollars because I'm working in the States and you are American and you will be foreign.  
But also regarding the bridge, but we will talk about swaps later and examples of the event teams, future swaps and options. They will talk about options. Make sense?  
The initiatives are used for risk management as an insurance, also for speculate and executive compensation is OK, you are like you are the CEO of my company. I am as a holder, you are the CEO.  
I want you to be happy, so I will give you call options. Case the treatments or when in case the company company's price will grow.  
You have call off, so you will be happy. In case the company goes out, you will get off.  
In this case, giving calls to your to the CEO is a win win game. They're good because options is options are a 0 short game.  
contracting, contracting insurance that we . Why? Because you pay,  
Excel.  
OK, option types, both options and and put options. What is a call? The right to buy and the right. What is a put? The right to sell.  
What is the difference between a European and an American option? That's not to do. It does not have to do with nationality.  
For example, there.  
Can have options from Banco Santa Terda can be bought, can have options.  
When you got no more, your bed, yes.  
What is an American option?  
OK, because Americans and Europeans will work the same idea, but this is a spoiler from next week. But what does to be better? Americans are better than you can execute.  
Medical options. We the whole life, not just in that field.  
And you're an option and only be executed.  
Make sense?  
Depends on when options can be expected. OK, I'm going to talk about the price. Then we won't talk about the price today. Yes, we just talk about explanation, but I'm going to talk about the price, yes.  
Next day we will calculate the price and the day after we will calculate the price, but the price denying that before once.  
We get once we are execution, the price of the line is fixed. Make sense.  
Before that day, the pressure that the rain can change makes sense.  
And depending depending on the prices on the rail.  
The option will have one price or another one. Yes, thinking about like all options. If the underlying is here, the underlying is here. The option is called to be out of the money. The underlying is here. The option is in the money. If the underlying is here, the option is at the money.  
For a pool closure, giving the same stripe, the call is in the money, the pool will be out of the money. Makes sense.  
Any questions?  
OK.  
Oh, what is the price of the or what is the price or the premium price you pay in order to buy?  
Price, premium or also can be the price of yours.  
There are three prices. There are three prices.  
The price of the option, the premium you are paying. Second, the strike, the contract price and also the underlying asset price. Except the strike is fixed.  
Underlying as it is the question to underlying and the premium is what you pay. So there are three prices.  
OK, what is? What does this formula represent?  
What does this formula represent?  
What does this formula represent?  
The grass that you have in the blackboard thinking about pay off if they call, please, please, I need your attention if they call is out of the money.  
What will be the day?  
The money is out of the money. If the underlying asset is lower than the state, the underlying asset price is lower than the state price.  
If the underlying asset price is higher than the strike, then the call will be in the money. If the call is in the money, how much you will receive or how much you will win, you can buy.  
Oh, describe something whose price is.  
and the lines different between and the lines of the display is that makes sense.  
Aborted food option you have.  
Let me just go through how much you will get.  
This Jessica, what I have already told you, this is the same problem. What does this mean? It means that I have the right cell and the slide.  
If the underlying asset price is lower than the strike, I will exercise my right. I will sell it for the strike and I will buy for the underlying asset price.  
I said this.  
OK, what is it he said?  
Let me go to the excel and say and they're like 8091 hundred 110.  
Yes.  
Pay over profit, the strike is 100 and the premium is there. So in terms of.  
Hello.  
I'm gonna write this with the form with Excel formula Max between AE.  
Acts between zero this.  
Actually between 0 and.  
I.  
80 minus yes.  
It will be 0. It will be 0. You will not exercise your right. You will exercise. You will die at 100 and you will not get. And here you will get. You will get 10.  
We will get 20 and we will get 30 and we take this formula and we get here now fail. What is the profit?  
Profit or.  
Is from the payoff taking what you have paid, but it was dead, no.  
OK, it was. I take them.  
I get nothing, but I have already paid them. It is 110. I am unbreaking them. Then I'm good. Make sense.  
Now this is for the value for the book option.  
But you have the platform. Make sense and now what about?  
The city, it sees home the buyer.  
What about the self?  
Oh, the center.  
So what I'm gonna do?  
For the center, look what I'm going to do.  
But we get the profit. What we get as profit, the seller, you can align asset worth less than the stripe. You will get or she will get the premium.  
And in case the value received, the value of the call received money to pay for it makes sense.  
They seem to be true.  
OK.  
Understood. OK, now what are we going to do? We are going to see several options that they need. You don't need to memorize any. You don't need to know none of these names. Oh, and also I'm so proud of this.  
Yes.  
Oh, so happy.  
Hey.  
I'm in love with AI. I have already told you now derivatives.  
Here open.  
This one will be for next day and this is for today, yes.  
This one.  
Basics. Yes, first thing has to do with the basics and the second one option.  
I'm so proud of this work.  
And then here you know all these things.  
You can switch ingredients.  
And you can switch it with.  
Yeah.  
OK, let me start.  
With you see a call or go first, sorry, before starting with this in the basics, what do you have? You can change the strike, you can change the right, yes. And here what you have a call.  
With the same Mr. Agan, the report, yes.  
Let me make the premium.  
Yes.  
I call and I hope yes, and you have the graph, the buyer and the seller.  
And.  
It's the first time in my life that I have duties in order to.  
I don't know it whatever. I'm thinking about K-pop demon hunters. I don't know if I have program this one or the fixing one.  
Make sense?  
OK, this one is so so simple to understand. If you have understood this, you are done with today's class. I am going to compare two things. On one hand I am going to buy 100 shares.  
Of Microsoft at 70, yes.  
Eight will be 7.  
Stop 70 stops.  
I no 100 sets.  
At 70, yes. How much money I pay? 30 times 100.  
Exit and the other thing I'm going to do, I'm going to buy.  
700 700 calls with a strike of.  
The strike of.  
Careful with the strike of 70.  
And the price is 10.  
Make sense?  
The price is 10 and I have got 700. How much money can I pay?  
And thanks. Yes.  
So I'm going to compare Nesti 7000 inserts. I'm going to break with speculating 7000 with polls.  
OK, what is going to happen if you go the Crista ball?  
Oh, because I don't know what is going to happen. I'm going to grow the scenarios, yes.  
OK, I'm gonna start here. I'm gonna roll. I'm gonna roll just the payoff.  
I'm going to forget about how much I pay. I'm going to draw just the pay. Make sense. So if that the right finish at 60.  
In the stores, how much money I will receive in case I sell dessert desserts, I will receive 100 * this.  
Makes sense.  
Yeah.  
I sense I have multiplied 100 times and up.  
Listen.  
I'm gonna do same thing with the option.  
What will be my payoff?  
My payoff will be zero. I would have lost everything.  
0 zero make sense.  
And look, I'm talking about fail.  
In the underlying word 75, what will be my payoff?  
I can exercise it for 7070 and I will get 75 -, 7. Makes sense. How much? How much stops?  
Sorry, how much options? How much calls is that call?  
Make sense?  
So I will get 3500.  
Yeah, yeah, I will get.  
10 per call, 10 per call. Yes, 10 per call times 700 will be 7000.  
Yep, I will continue with all these numbers.  
I won't get this. Make sense.  
Now.  
I'm going to calculate the HPR. It's the only time in our lives.  
We need that we are on a tree. It's we are. We are not going to talk about analyzing this year, but within six months and that is one year.  
In this case, I'm going to just calculate the view HDM.  
And what is the HPR? Future value minus present value minus what? Oh, sorry, future value over present value -1.  
So what is HPR?  
Future value over 7000.  
My name is one. All of you are with me.  
What is my return?  
Your person, baby.  
Make sense?  
I'm going to get the same number for all match I have lost.  
Everything, everything. I'm here. I have not lost everything. I have just lost 50%. Why? Because I invest 7000 and I'm getting the half.  
Here is the break even for my return will be 0%. I'm from the break even is where my start happening.  
While here I was getting 21%, here I'm getting a 50% agreement that is more than global and if it is 90, it over my money and if it is 95 I get.  
More than global. Make sense.  
What I'm doing? I'm liberating.  
OK.  
Yes.  
OK, that understood this one. Let me move into the other one. What is this one about? Is a protective food?  
Cool.  
Exercise one.  
I'm going to write it here.  
It's website, yes.  
To buy a star in Microsoft 4/7.  
Well, there.  
47 Yes 1747.  
How much I have paid, I don't know. And together with the Sir, together with the Sir, I'm going to buy a food with and also a half.  
I have.  
Please have a strike of.  
Yes.  
I want you to under. Let me just worry.  
I want you to understand this, please. We understand this and this at the beginning looks simple. It's simple, but I need your understanding. I'm going to buy it.  
Combine with the book. No. What is the pay of of the stock? 4050 The pay of the stock is the price of the stock. Make sense?  
All of you are with me now.  
What is going to be the payer of the court?  
Will I buy at 70 something whose price is 40? Yes, how much money will I get?  
I will get 17 minus. I will get. Make sense.  
And as the price gets higher, my payoff will get smaller, yes. And from 70, I won't exercise my right, yes.  
If I have a portfolio that combines the two things, what will be the payoff of my portfolio?  
The pay off of my portfolio will be 40 + 30 in this case 7.  
Yes.  
What do I have?  
It's like it's like I have home and insurance.  
It like having an insurance.  
The price would be fixed at 70 and because I have pay up in, yes, like having both and insurance. Do you understand this?  
Please, I want your attention because this will connect with next day class. Yes, this will connect with next day class and this is absolutely important in order to understand next day class, yes.  
I'm going to go quick because next day I will repeat this on one hand, the protective food, the protective food combined.  
This is the stock.  
And this is.  
This is the Mayor of the pool, yes, and me some these two things.  
Buy some things. Buy some. This is a strike. Yes, this is a strike.  
This is the slide. If I examine these two things, what I will get? We have already calculated 7 pages.  
And from here make sense.  
Yeah.  
Please, all of you, this money.  
We have to do this. I'm going to go here.  
Yes.  
Yeah.  
You see that this is a call.  
And I'm going to combine with the coal. I'm going to combine with the coal.  
I'm going to buy, please, a home, a home.  
With base value, it wants to describe.  
A bond with face value equals to the strike. What will be out then? What will be the payoff of a bond with face value equals to the strike each time of the money?  
Do you understand the graph?  
OK, I'm going to stop the two payers.  
By exam, the two payers 0 plus the ball.  
Will be this time. Make sense.  
And then?  
The goal last the goal will be like this.  
This is absolutely important for today's class. This is absolutely important for today's class.  
The store plus Jessica, the store plus the food.  
Stop plus the book is equal to this.  
A strike.  
Last the goal is equal to this.  
This on this.  
This and this is.  
This and this is.  
You see this that you see this back, all these two wraps up.  
Same, same. This graph is the same as this one. Same payos, same payos, same price. This is the law of one price that we saw in arbitrage.  
Why? Why I'm saying that if you have a stock and a put with a given stripe, the price of the stock and the put should be equal to the price of the gold than the gold with the same stripe.  
We will talk about this next day. This is a coal, food, pipe, coal, food, pipe.  
Next day I will go back to this, but you don't understand this today. Next day it will be difficult to understand. And if you understand this next day, thanks to this understanding, you will remember today's class.  
So please take your all these changes, yes, and in order to finish this, here you've got the information. You can tell Sajiki TV.  
That he will do it better than you. Protect people. Make sense. And let me finish. Who is Estrade? What is Estrade? What is Estrade? Estrade combines.  
I put with a call both would say.  
Let me come here and let me show you. Option strategies. Let me show you.  
I call and I call with different stuff. This is called.  
Look, if the market goes up, it's a bull. The market goes down. It's a bear. This is a bull spread. But it's a bear, bear spread. You change the price of the cost. Here you've got.  
Two calls with a given strike. Here you call the strikes. Yes, a call and a good, yes. And you can construct the bull spread or the bear spread with both calls and boots, yes.  
You see our folks?  
This is our point. Careful because you are long with one call and strong with you and you can go to this and because.  
This is because.  
A bull spread and another spread is a a a a bull. The one that I have already showed you. This is a strade. Yes. Oh, there should be one button in order to show you not just.  
The this is you have bought a hole combined with a foot. It's a long straddle. Also the short straddle is deserved. I would like I would have love to show you also a short slot.  
If you change, this is a call and a put. What would change like you change the price of the call on the group instead of a straddle, you will have a strand.  
Yes, and also a third level. Oh, there are more levels. Iron condom is a combination of a put plus, minus, minus, plus. Yes, is a combination of a put with a strike of 80, a short put with a strike of 90.  
A short call with a strike of 110 and a long call with a strike of 120. Long stands for buying, short for sale. Next day we will not be. Make sense and also you have a butterfly.  
That in this case both are the same. Today I have just shown you in the slide you will have you. You don't need to know all these things. You don't need to know why is the what is the use of this to play with volatility. You can mention you can get a lot of money or you can assume risk, yes.  
And in order to finish with today's class, let me show you big lesson, big lesson in the 95.  
Was a trader that got really, really good target. Nobody knew what? Why until there was a day, there was an earthquake in Japan. What did this guy, what this guy was doing?  
He was placing short straddles.  
Considering that there was not going to be volatility in Japan, there was one data, there was an earthquake, it was incredible high volatility and he made lost that 1.4 billion.  
Why is this here? Because, because, because I need come back here.  
When you buy, when you buy a call, a call or a put, you can lose.  
Everything on your investment and you and with you.  
Then you are receiving money from and you can use as much, much, much more money than the money that you have received. But I'm trying to tell you that these are whisky. This is a whisky, really whisky.  
Islam made.  
Please.  
Go through today's class. If you have not understood something next Monday, tell me. I will be so happy to explain whatever you can understand. That made yours always knowledge is important. Make sense.  
Also, you have made the picture. I love it, but not bad, sorry.  
I have also this one that I'm gonna carry.  
Yep.  
Have a wonderful weekend.  
Well, see.