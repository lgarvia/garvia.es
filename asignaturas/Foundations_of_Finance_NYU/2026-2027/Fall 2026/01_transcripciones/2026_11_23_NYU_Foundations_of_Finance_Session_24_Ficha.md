---
titulo: "Foundations of Finance – Session 24: Put-Call Parity, Intrinsic Value and Binomial Option Pricing"
fecha: 2026-11-23
curso: "Foundations of Finance (Fall 2026)"
sesion: 24
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: impartida
task_estado: TASK_394
---

---
# Foundations of Finance – Session 24

## Put-Call Parity, Intrinsic Value and Binomial Option Pricing

**Date:** November 23, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 24 continued the derivatives block and connected options directly with one of the most important principles developed throughout the course:

$$
\boxed{\text{No Arbitrage}}
$$

The class reviewed option payoffs and then developed three major ideas:

1. **Put-Call Parity**
    
2. **Intrinsic Value and Option Value Before Expiration**
    
3. **The Binomial Option Pricing Model**
    

The central logic was:

$$
\boxed{  
Same\ Future\ Payoffs  
\Rightarrow  
Same\ Price\ Today  
}
$$

That principle allowed us to price combinations of options, stocks and bonds without needing to forecast the future.

---

## 2. Review: Future Versus Option

The class began with the distinction introduced in Session 23.

### Future

A futures contract creates obligations for both parties.

$$
\boxed{  
Future = Obligation  
}
$$

### Option

The buyer of an option acquires a right.

$$
\boxed{  
Option = Right,\ Not\ Obligation  
}
$$

The option seller receives the premium and accepts the corresponding obligation if the buyer exercises.

---

## 3. Payoff Versus Profit

The difference between payoff and profit was reviewed again.

### Payoff

The amount received from exercising the option.

For a call:

$$
\boxed{\max(S_T-K,0)}
$$

For a put:

$$
\boxed{\max(K-S_T,0)}
$$

### Profit

Profit also includes the initial premium paid.

For a call:

$$
\boxed{\max(S_T-K,0)-C_0}
$$

For a put:

$$
\boxed{\max(K-S_T,0)-P_0}
$$

Therefore:

$$
\boxed{  
Payoff\neq Profit  
}
$$

---

## 4. Options and Extreme Returns

The class used a call-option example to illustrate the leverage embedded in options.

Suppose an investor buys a deeply out-of-the-money call for a very small premium.

If the underlying asset then rises strongly and the option moves deep into the money, a very small initial investment can generate a very large percentage return.

For example, if an investor pays:

$$
0.05
$$

for an option and later receives approximately:

$$
20
$$

the percentage return can be enormous.

But the opposite is equally important.

If the option remains out of the money:

$$
\boxed{  
HPR=-100\%  
}
$$

because the investor loses the entire premium.

Therefore:

$$
\boxed{  
Leverage  
\Rightarrow  
Large\ Potential\ Gains  
+  
Large\ Probability\ of\ Losing\ the\ Premium  
}
$$

---

## 5. Put Example

Suppose:

$$
K=60
$$

and the put premium is:

$$
5
$$

### If

$$
S_T=70
$$

the put is not exercised.

Payoff:

$$
0
$$

Profit:

$$
0-5=-5
$$

### If

$$
S_T=52
$$

the payoff is:

$$
60-52=8
$$

Profit:

$$
8-5=3
$$

Again:

$$
\boxed{\text{Profit} = \text{Payoff} - \text{Premium}}
$$

---

## 6. Why Buy a Put?

A put can be used for speculation.

But one of its most important applications is:

$$
\boxed{\text{Hedging}}
$$

If an investor owns a stock and wants to protect against a fall in its price, the investor can buy a put.

This produces:

$$
\boxed{  
Stock+Put  
}
$$

which is known as a:

$$
\boxed{\text{Protective Put}}
$$

---

## 7. Protective Put

Suppose the investor owns one stock and buys a put with strike:

$$
K
$$

At expiration:

### If

$$
S_T\gt K
$$

the put expires worthless and the investor keeps the stock.

Total payoff:

$$
S_T
$$

### If

$$
S_T\lt K
$$

the put allows the investor to sell at:

$$
K
$$

so the total payoff cannot fall below:

$$
K
$$

Therefore:

$$
\boxed{\max(S_T,K)}
$$

The put creates a floor.

That is why the put can be interpreted as financial insurance.

---

## 8. Building the Same Payoff in Another Way

The key step in the session was to compare the protective put with a second portfolio.

### Portfolio A

$$
\boxed{  
Stock+Put  
}
$$

### Portfolio B

$$
\boxed{  
Call+Risk\text{-}Free\ Bond  
}
$$

where the bond pays:

$$
K
$$

at expiration.

The class then compared the future payoffs of both portfolios.

---

## 9. Payoff of Call Plus Bond

Suppose the bond pays:

$$
K
$$

at expiration.

### If

$$
S_T\lt K
$$

the call expires worthless.

The bond pays:

$$
K
$$

Total payoff:

$$
K
$$

### If

$$
S_T\gt K
$$

the call pays:

$$
S_T-K
$$

and the bond pays:

$$
K
$$

Total:

$$
(S_T-K)+K
$$

$$
=S_T
$$

Therefore:

$$
\boxed{\max(S_T,K)}
$$

which is exactly the same payoff as the protective put.

---

## 10. Put-Call Parity

Because:

$$
Stock+Put
$$

and:

$$
Call+Bond
$$

have the same payoff at expiration, the Law of One Price tells us that both portfolios must have the same value today.

Thus:

$$
\boxed{S_0 + P_0 = C_0 + PV(K)}
$$

This is the:

$$
\boxed{\text{Put-Call Parity}}
$$

where:

- (S_0) = current stock price;
    
- (P_0) = put price;
    
- (C_0) = call price;
    
- (PV(K)) = present value of the strike price.
    

---

## 11. Simplification Used in Class

For the exercises discussed in class, the interest rate was simplified to:

$$
\boxed{r=0}
$$

Therefore:

$$
PV(K)=K
$$

and put-call parity becomes:

$$
\boxed{  
S_0+P_0=C_0+K  
}
$$

or equivalently:

$$
\boxed{  
C_0-P_0=S_0-K  
}
$$

This is the version emphasized for the exercises.

---

## 12. Put-Call Parity as an Arbitrage Condition

Suppose:

$$
S_0=110
$$

and:

$$
K=100
$$

Then:

$$
S_0-K=10
$$

Therefore:

$$
\boxed{  
C_0-P_0=10  
}
$$

The call must be worth exactly (10) more than the put.

If this relationship does not hold:

$$
\boxed{\text{Arbitrage Opportunity}}
$$

The investor could buy the cheap side of the parity relationship and sell the expensive side.

Thus:

No\text{-}Arbitrage\ Condition  
}  
]

---

## 13. Why Put-Call Parity Matters

Put-call parity is not simply another formula to memorize.

It is a direct application of ideas developed earlier in the course:

### Law of One Price

$$
Same\ Payoff  
\Rightarrow  
Same\ Price
$$

### Replicating Portfolios

Different portfolios can produce the same future cash flows.

### Arbitrage

If equivalent portfolios have different prices, traders can exploit the difference.

Therefore:

$$
\boxed{\text{Price} \Leftarrow \text{Replication} + \text{No Arbitrage}}
$$

---

## 14. Synthetic Positions

Put-call parity can be rearranged to construct different synthetic positions.

From:

$$
S_0+P_0=C_0+PV(K)
$$

we can write:

$$
\boxed{C_0 = S_0 + P_0 - PV(K)}
$$

or:

$$
\boxed{P_0 = C_0 + PV(K) - S_0}
$$

These equations show that one financial position can be replicated using other securities.

This is one of the central ideas behind derivative pricing.

---

## 15. Intrinsic Value

The next topic was the value of an option **before expiration**.

The intrinsic value of a call is:

$$
\boxed{\max(S_0-K,0)}
$$

For a put:

$$
\boxed{\max(K-S_0,0)}
$$

Intrinsic value answers the question:

> **How much would the option be worth if it were exercised immediately?**

---

## 16. Intrinsic Value Is Not the Same as Option Price

Before expiration:

$$
\boxed{  
Option\ Price  
\neq  
Intrinsic\ Value  
}
$$

Why?

Because there is still time remaining.

If a call is currently out of the money, its intrinsic value may be:

$$
0
$$

but there is still a possibility that the underlying price rises before expiration.

Therefore the option can still have a positive price.

This additional value is related to:

$$
\boxed{\text{Time Value}}
$$

---

## 17. Option Value Before Expiration

Conceptually:

$$
\boxed{\text{Option Value} = \text{Intrinsic Value} + \text{Time Value}}
$$

As long as there is time before expiration, uncertainty remains.

That uncertainty can have value.

Therefore:

$$
\boxed{  
Option\ Price  
\geq  
Intrinsic\ Value  
}
$$

for the standard framework discussed in class.

---

## 18. Why Time Has Value

Suppose a call is currently out of the money.

Its intrinsic value is:

$$
0
$$

But the stock price may rise before expiration.

The buyer has:

- upside potential;
    
- limited downside.
    

The maximum loss remains the premium.

Therefore time itself creates value for the option holder.

As expiration approaches, this additional time component becomes smaller.

Conceptually:

$$
\boxed{  
Time\ to\ Expiration\downarrow  
\Rightarrow  
Time\ Value\downarrow  
}
$$

---

## 19. At Expiration

At expiration, there is no future uncertainty left.

Therefore:

$$
\boxed{  
Time\ Value=0  
}
$$

and:

$$
\boxed{\text{Option Value} = \text{Intrinsic Value} = \text{Payoff}}
$$

This explains why the option-price curve approaches the payoff curve as maturity approaches.

---

## 20. From Put-Call Parity to Option Pricing

The final major part of the session introduced the **Binomial Model**.

The key idea is again replication.

An option can be valued by constructing a portfolio containing:

- the underlying stock;
    
- a risk-free bond.
    

If the portfolio produces the same future payoffs as the option, then:

$$
\boxed{\text{Option Value} = \text{Value of Replicating Portfolio}}
$$

---

## 21. Binomial Model: Basic Setup

Suppose the current stock price is:

$$
S_0=100
$$

In one period, only two outcomes are possible:

### Up State

$$
S_u=120
$$

### Down State

$$
S_d=90
$$

Suppose we want to price a call option with strike:

$$
K=110
$$

---

## 22. Future Call Payoffs

In the up state:

$$
\boxed{C_u = \max(120-110,0) = 10}
$$

In the down state:

$$
\boxed{C_d = \max(90-110,0) = 0}
$$

The challenge is to determine:

$$
\boxed{C_0}
$$

the call price today.

---

## 23. Replicating the Call

The class constructed a portfolio using:

- (h) units of stock;
    
- a position in a risk-free bond.
    

The objective is to choose the portfolio weights so that its future payoffs equal the call payoffs in both scenarios.

Conceptually:

$$
\boxed{hS+B}
$$

or, depending on the sign convention:

$$
\boxed{  
hS-B  
}
$$

The important point is not the notation.

The important point is:

> **The portfolio must reproduce exactly the option payoff in every possible future state.**

---

## 24. Solving for the Hedge Ratio

The stock position must satisfy:

$$
h(120)-h(90)=10-0
$$

Therefore:

$$
30h=10
$$

and:

$$
\boxed{  
h=\frac{1}{3}  
}
$$

This (h) is the number of stock units required in the replicating portfolio.

It is also the simplest introduction to the concept later known as:

$$
\boxed{\Delta}
$$

the sensitivity of the option price to changes in the underlying stock price.

---

## 25. Completing the Replicating Portfolio

Once:

$$
h=\frac{1}{3}
$$

is known, the bond position can be chosen so that the portfolio produces:

$$
10
$$

in the up state and:

$$
0
$$

in the down state.

The exact arithmetic is less important than the mechanism:

1. Match the up-state payoff.
    
2. Match the down-state payoff.
    
3. Find the stock and bond positions.
    
4. Calculate the cost of that portfolio today.
    
5. That cost must equal the option price.
    

Thus:

$$
\boxed{\text{Call Price} = \text{Cost of Replicating Portfolio}}
$$

---

## 26. Why We Do Not Need Probabilities

One of the most important conceptual conclusions is that the no-arbitrage valuation does not require us to predict which future state will actually occur.

We do not need to know:

> What is the probability that the stock goes to 120?

Instead, we construct a portfolio that works in **both** states.

Therefore:

$$
\boxed{  
Option\ Pricing  
\neq  
Forecasting  
}
$$

The logic is:

$$
\boxed{  
Replication  
\rightarrow  
Same\ Payoffs  
\rightarrow  
Same\ Price  
}
$$

---

## 27. The Binomial Model and No-Arbitrage

The Binomial Model may initially look like a new mathematical technique.

Conceptually, however, it is another application of the same principle used throughout the course:

$$
\boxed{\text{No Arbitrage}}
$$

We previously used no-arbitrage to price:

- identical bonds;
    
- replicating bond portfolios;
    
- put-call parity.
    

Now we use the same logic to price an option.

---

## 28. The Architecture of the Derivatives Block

The derivatives block now follows this progression:

### Futures

$$
\boxed{\text{Obligation}}
$$

### Options

$$
\boxed{\text{Right}}
$$

### Call and Put Payoffs

$$
\boxed{  
C_T=\max(S_T-K,0)  
}
$$

$$
\boxed{  
P_T=\max(K-S_T,0)  
}
$$

### Protective Put

$$
\boxed{  
Stock+Put  
}
$$

### Put-Call Parity

$$
\boxed{  
Stock+Put=Call+Bond  
}
$$

### Binomial Model

$$
\boxed{  
Option=Replicating\ Portfolio  
}
$$

All these ideas are linked through:

$$
\boxed{\text{No Arbitrage}}
$$

---

## 29. Connection With the Entire Course

Session 24 connects almost every major concept studied during the semester.

### Time Value of Money

The strike price occurs in the future and must be discounted.

### Risk

The future stock price is uncertain.

### No-Arbitrage

Equivalent future payoffs must have equivalent prices.

### Market Efficiency

Arbitrage opportunities should be exploited and reduced.

### Replication

A complex security can be reproduced with simpler securities.

### Valuation

Once future cash flows are replicated, their present value determines price.

Thus:

$$
\boxed{\text{Valuation} = \text{Future Cash Flows} + \text{Uncertainty} + \text{No Arbitrage} + \text{Present Value}}
$$

---

## 30. Five Ideas to Remember

1. **Payoff is not profit: profit includes the premium paid for the option.**
    
2. **A protective put combines a stock and a put to create downside protection.**
    
3. **Put-call parity follows directly from the Law of One Price:**

$$
\boxed{  
S_0+P_0=C_0+PV(K)  
}
$$

4. **Before expiration, an option can be worth more than its intrinsic value because time and uncertainty still have value.**
    
5. **The Binomial Model prices an option by constructing a stock-and-bond portfolio with identical future payoffs.**
    

---

## 31. Before the Next Session

Students should be able to:

- Distinguish payoff from profit.
    
- Calculate call and put payoff.
    
- Calculate call and put profit.
    
- Explain why options can generate very large percentage returns.
    
- Explain why a protective put creates a floor.
    
- State and apply:

$$
\boxed{  
S_0+P_0=C_0+PV(K)  
}
$$

- Identify an arbitrage opportunity when put-call parity does not hold.
    
- Calculate one missing value from the other variables in put-call parity.
    
- Define intrinsic value.
    
- Explain why option value before expiration can exceed intrinsic value.
    
- Understand the basic structure of a one-period binomial tree.
    
- Calculate future call payoffs.
    
- Understand how a replicating portfolio is constructed.
    
- Explain why identical payoffs imply identical prices.
    

The central message of the session is:

$$
\boxed{  
Same\ Future\ Payoffs  
\Rightarrow  
Same\ Price\ Today  
}
$$

and the key progression is:

$$
\boxed{  
Protective\ Put  
\rightarrow  
Put\text{-}Call\ Parity  
\rightarrow  
Replication  
\rightarrow  
Binomial\ Pricing  
}
$$

---

# Transcription
23 de noviembre de 2026, 5:06 p.m.
1 h 17 min 50 s
OK, let's start.  
First, that's.  
Then, go to a lot of information for you.  
And later.  
Hey, do you remember from last class? How did we finish?  
Before that.  
Ohh.  
Before that.  
A week.  
What should be?  
I really agree with the first line, that first line.  
A future is an obligation, an option is a right.  
Picture is an obligation, I'm not sure it's a right picture.  
As both rights and obligations for both parts of the company.  
When you close, it has come back.  
When you close a feature contract.  
Both parts, the contract has both obligations and rights.  
So, in this sense...  
You can say that future is an obligation.  
An option is buying right at closing futures contract.  
Don't buy a future, buying a future, you don't buy a future. You understand why you close the contract, but you don't pay.  
Okay.  
Ben.  
What is the difference between payoff and profit?  
We're talking about a call or a food up.  
What is the difference between?  
Are you off?  
I'm perfect.  
But readless.  
Do you need a property?  
What?  
You can have repeat in your property.  
I like what we have before that.  
Fail.  
No.  
I hate.  
Bad you guys.  
In order to buy, let's play with Nvidia.  
let's play with Nvidia.  
This morning.  
What is?  
Now the person can be here. Oh, 170. 170. This morning was? One 30. Yes, this morning.  
I have, but I have both.  
I have book and videos.  
Calls with a stripe of one, this.  
Frago 150.  
This is the payoff.  
This is the amount of money that I will receive last day, yes, this morning.  
Nvidia's price was 150, no?  
No.  
This call option.  
This morning was out of the morning.  
Let's speak out of them.  
Homes.  
How much this call option?  
What was the price this morning? Let me use. I'm going to do a spoiler not of today's class. I'm going to do a spoiler of this Wednesday class. Yes? Or do you calculate the price? There is one formula.  
That is blacks, black and soul formula. Next day we will see black and soul formula and black and soul formula tell us that the price will be discovered. Yes.  
So, this morning, the Nvidia stock was really out of the money, yeah?  
No.  
I mean, it's better because it is really out of the money.  
The price would be of cents, but no, I'm going to, I'm going to say, hey, you said price me the price of like how much you pay in order to buy the home. OK, the premium.  
The premium is this morning at 120. I paid for this call.  
I don't know. I mean, I am. I pay.  
Fifty cents, yes?  
It's out of the money. I'm going to pay 10 cents. It's really out of the money. Yep. More than $20. So I pay a few. Make sense?  
This same goal. This afternoon, today, we have seen how the price of a video.  
We think in it.  
Pass Jan to 170.  
One 100, yes.  
Imagine.  
There are calls with different maturity, yes? Imagine that this call option.  
This call option will expire within five days. Yes? If this call option would have expired within five days.  
This line would be much, much more, but yes, this will be much more closer.  
Yes, the less time, the more closer this will be. So it was this morning, out of the money.  
Ohh boy, yes, 5 cents.  
What? This is true, I mean.  
Probably there has been people that has done this. This morning it was out of the money. Would you spend that in five days?  
The Nvidia price is going to be higher than 150. Nobody expecting, nobody will pay, so five cents.  
It's a price for something that would that probably will work nothing. Yeah.  
So, I am paying five cents.  
This morning?  
Have both auctions, have both auctions paid $0.05 there.  
All of you, yeah.  
Now!  
The price is 170, yeah.  
If the price is 170.  
Now.  
If it closes, if it expires, yes, right now you will be winning $20.  
Fair option.  
The price will be slightly higher than 20.  
But I'm going to consider that it expires today, so it's...  
Twenty units, yeah.  
What is the payoff?  
What is the payoff?  
They pay your fees, what you receive.  
After executing, yes?  
Why is there?  
What is the profit?  
The prophet is.  
The pay you minus.  
The price I have paid.  
Buddy.  
And in this case, what would be the age here?  
This is program.  
Photography.  
***********.  
Yeah, yeah.  
You have invest.  
Thanks.  
Are you already?  
Twenty dollars for you have invested cents, yes? You are getting 200 EUR per euro, so you are getting a withdrawal if it is 200 EUR per euro, 20,000 each PR person.  
Why wouldn't you use the 150 for APR? Because even though you're not putting it down, it's like a secure obligation.  
I will use.  
One 150? Yeah, no, because 150 is what is within the contract, because I get you don't have to ask.  
You have to execute that contract, but you will get 20.  
And you will have invest.  
Five cents, but if it's below it, you don't.  
You will lose everything.  
It is below 150.  
Your HPR will be negative 100%. You will have lost all your money. Make sense? But why is the line flat?  
At 0, yeah, because it tends to zero.  
We are when buying a when buying an option.  
We are playing two different games depending on if you are in the money or out of, sorry, in the money or out of the money. If you are out of the money, you are paying something.  
That probably would work nothing.  
This morning, why are you paying five cents?  
Because the probability of the stock finishing in the money is absolutely.  
No.  
It's so easy to play poker once you have seen everyone's cards.  
But if you would have asked me this morning.  
What do I think is the probability of NVIDIA to increase 30% in one day within a day? I call you that.  
Grace.  
I got one thing.  
One important, Nvidia has grown.  
Forty percent.  
Nvidia has grown 40 percent. Yes. Now it has increased 30 percent.  
I would consider that has been percent.  
No.  
Let me let me show you the other number.  
50%, then it increased.  
Fifty percent.  
From 50% is from 100 to 50.  
An increase of 50% is from 50 to 75.  
Twenty.  
dropping at 50%, going up 50%.  
This, in total, having lost twenty-five percent, so when Nvidia is still...  
The price is still.  
That makes sense.  
No.  
You buy a boot with with a strike of sixty-four flat.  
What is your profit? What is your profit?  
Read some water.  
Try to do this number by yourself, yeah?  
Try to do these numbers, the number of the book, yeah.  
OK.  
You can buy 460, yeah?  
You can buy for six.  
Alright, you, you can sell.  
You can sell home safety, yes?  
I'm asking about profits.  
Really makes sense.  
To sell at 60, when you can sell at 70.  
So, with the privacy 70, your profit will be negative 5.  
Yeah.  
What is your profit?  
If the price is fifty-two.  
You can buy fifty-two.  
Sell at 60, you will get 8, you should take 5, so your profit will be...  
Payoff, pay profit 3. Make sense?  
Yeah.  
Okay.  
Why would anyone buy calls instead of the stock?  
Because you are limited.  
Regarding, you would have bought.  
Yes, and Nvidia stocks. In this case, if you would have both, and Nvidia stock, in this case, your HPR will be up 30%.  
On the other hand, you would have both poles.  
In this scenario, your HPR is higher than 100 or 1000 person.  
Yeah, thanks for calling you. Thanks for your question. Yes.  
And also, why buy a food on a stock? Anyone can answer that question. Why buy?  
Buy, buy a food and on the stock you own.  
Against.  
I guess so.  
Like buying an insurance, like having a problem.  
And let me finish the class.  
Then, sure, let me start the class.  
Oh, I fixed it.  
Yeah.  
How would it be hedging? Because if you buy a foot on a certain stock, isn't the downside unlimited?  
Did you buy? Yeah.  
I'm gonna draw it. Yep.  
If the stock increases, the put would have no value.  
Yeah.  
The boot, a diving is dry, yes.  
I'm talking about payoff, yeah, if the underlying asset worth more.  
They all will miss you.  
If you underline, that's it.  
Warm.  
Plus, you will get $1.00 per dollar.  
The prices.  
Slower than the expected. And for the last question, you said profit, what your profit is if SC equals 52?  
But why would it be, you said five, right? I said no, I said three, by three.  
Rocky.  
Because payoff, payoff for $5 is 8, and you should subtract.  
Five. I thought the five meant that you bought 5 books. No, no, no, no. You buy a book, one book. Yeah, for $5. For $5. This is the premium.  
If you, if you know how to work with the numbers, you are good.  
Yeah.  
One more, sorry, one more quick one. Please. For the other one, for the 70, you said -5, right?  
Yes, but why would it be negative 15?  
No, what? Because did you pay a premium to buy the, like, did you pay negative or you're already 5 down?  
Let me.  
Let me take that number, sir.  
The strike is 60.  
If it is fifty-two.  
Ohh, sorry, I, I forgot.  
That makes sense, negative 5 makes sense.  
This line is for the payoff. This line is for the payoff.  
These lines for the pay.  
When thinking about that line, I am not considering cost.  
In that example.  
Payoff would be 0 for the 17.  
And you should subtract the cost. Yeah.  
Okay, all of you understand that?  
All of you understand that payoff?  
Okay, I'm gonna buy better the food.  
Ahh.  
Desktop, yeah.  
All of you see.  
All of you see the payoff of the stock?  
Yeah.  
OK, I'm going to calculate.  
The payoff of having both together make pocket.  
I'm gonna send these two pairs.  
Yeah.  
What I have done, I have some to pay you.  
That this is.  
Why buy a food on a stock?  
Because.  
I have a clue.  
I have a floor, no matter how the price will plump.  
Will be done, no matter how much the pride will be done, but I will have a floor.  
What benefits? We benefits.  
When buying a food, I am buying the right, so, yeah.  
What if the company goes into a handcraft?  
Why did the company close into a bank?  
The price would be 0.  
So, you will make a lot, a lot of money now.  
Yeah.  
For me, the company goes into a bankruptcy.  
The price of the government will be here, so you will you have a full talk here.  
You will make a lot, a lot of money, you know.  
Yeah.  
Are you understanding me?  
The company goes to the bank party, there are now.  
Okay.  
Over one.  
What we need?  
One.  
You can exercise your foot before, the day before.  
It worth $1.00.  
And if it goes into the company disappear, there are no options. You cannot buy your third reaction, you cannot exercise your right.  
I have the right to serve.  
Have the right to someone, a company that does not exist.  
Makes sense.  
Therefore, we put some background and background and background.  
Well, this...  
What is this? The payoff? Oh.  
A food.  
Last.  
Yes, yes.  
The payoff of a book plus a stock.  
Yep.  
But I'm gonna grow here.  
This is how I finished last class. Did you understand that?  
You can consider that you understand.  
The rest of the book.  
You understand what I'm doing in the Blackboard? You can consider that you have understood everything in the course.  
I'm feeling worried for man and with.  
Like, then, yeah.  
Okay.  
I'm gonna buy together with same stripe, yes, with same stripe.  
I'm going to calculate the payoff of having a call with same strike, a call together with a bond that will have face value equal to the strike.  
Call, let me draw first the call. Yes, this is the payoff of the call. Make sense?  
And what is going to be the payoff?  
What is going to be the payoff of a home?  
with face value equals the strike.  
What does it represent? The payoff? The payoff of the bone, of a bone?  
To be constant.  
Yep.  
And now I'm gonna sand both tails.  
I'm gonna snap.  
Zero plus the strike, and once I reach this point.  
This goes up, yes.  
What is this?  
Or, here, what is this? This is a call plus.  
A ball with face value.  
It was to describe. Make sense?  
Yep.  
What can you tell me, giving these payoffs?  
Red line and red line.  
But can you tell me?  
And both fails are the same.  
Consider considering the arbitrage law.  
Considering the arbitrage law.  
Same, same, payoffs, bin, same.  
Anybody else?  
Best.  
Two assets, 2 portfolios have the payoff, and they the price of both should be the same.  
Makes sense. Why is the bond price like? Why is it flat at X?  
Why is why did it start to fail?  
What does this represent? Yeah, video.  
Considering the underlying.  
What is going to be?  
The payoff.  
Of the bomb, no matter what the underlying asset do.  
I'm going to receive face value. Yeah, and face value is going to be constant.  
This payo.  
Is the stock? If the stock worth one, payoff will be one. If the stock worth forty-five, sorry, 30 in this case, payoff will be 30.  
If the stock worth 60, payoff will be 60, yes?  
In this case...  
I'm going to receive $60.00 no matter what is the value of that or line.  
I will receive $60. How much I will receive?  
$60.  
If it worth one, 60, if it worth 60, 60, if it worth 120, 60.  
Make sense?  
So, what's their guideline?  
The red line is the sum of both players.  
The red line is the sum of both payers. The red line is the sum of both payers.  
What do I have in one pocket?  
In one pocket, I have what is called a protective poop. In one pocket.  
Fred, I have a book.  
With one strike, yes, I have the put with one strike, and together with the put, I have the stove, yes.  
What do I have in my other pocket?  
Are you there? I have a call with an event this.  
And also, I have a ball.  
Because we have all, let me have play.  
And let me write this same thing, but...  
That.  
This is the same.  
This is not exactly the same, but it tends to be the same when time then be small. Yes, you can write this in this sense or in this.  
Make sense?  
But what does this mean? Present value of this future value, this face value of a zero.  
Makes sense.  
Here.  
Here, I have payoffs. Here, what I have written is the price of the assets that payoffs will happen in the future.  
Payoff will happen in the future. Payoff happens in the future. Price today, price of what I have in one pocket should be the same as the price of what I have on the other pocket. Make sense?  
Yeah.  
This is called Cold Food Party.  
All good, fine.  
Have you ever heard about CFA?  
DFA.  
No.  
No.  
FA is a is a finance exam.  
CFA stands for Charter Fine Anomalies. That is CFA one, two and three. These are three exams.  
that you can take exams and once you get the certificate.  
Who are CFA?  
I have you are you become a CFA.  
UPA.  
No, give me a note for if you remember.  
Do you know about Nima?  
You might be an exam, you should say, in order to go for business.  
This is schools.  
You take the exam, depending on your e-mail.  
can access one school or another one. Yes? CFA is an exam that you can take. And there are a lot of people all over the world preparing CFA. Yes?  
One of the typical questions.  
When you are preparing CFA, one question that says something like...  
You have a call option with a strike of whatever, and you have a put option with same strike. You see an exercise where is written to have both a call and a put both with same strike.  
It will always be a...  
All good parity question. Yes, it's a simple question that should be answered with that. We are going to see two or three examples today.  
But...  
I mean.  
So, you this from another perspective, yes?  
I'm going to buy.  
I have.  
I'm gonna buy.  
I'm gonna buy.  
I call.  
And I'm gonna sell, I'm gonna sell, I'm gonna sell a food.  
If I sell a hood.  
Makes sense.  
And you're with me.  
This is the payoff.  
Or selling a put.  
Olivia, which one is the calendar?  
The payoff for Selena Poop? Let me ask, this is the payoff.  
For the buyer of that book, yes, and if I sell the book, the payoff will be negative.  
It.  
Did we miss you, no?  
This is the other line, and this number is 0. No.  
This line.  
Would represent this is the stock.  
What is the difference?  
What is the difference between the stop and zero?  
The difference is the strike.  
Yep.  
The difference is the strike. What I'm doing, I am playing.  
I am playing with that formula.  
I'm playing that with that formula. Please look here. I'm going to take that formula, yes? I'm going to draw what I have already drawn. I'm going to say, I'm going to move the foot to the right, yes? On the right side, I have.  
A call positive minus a Bluetooth sales track, yes?  
And this is going to be what?  
This is going to be equal to.  
The spoke.  
Minus.  
Good.  
You know what I have? We've been in love.  
No, I want short, I put this.  
Is the same as a, the sto?  
I would.  
The stock.  
This is the stock, this is the payoff of the stock, and what I am subtracting in order to get this payoff, strike price.  
Yeah.  
Yep.  
At the end.  
What are we going to talk? What are we going to talk about today?  
At the end today, what we are going to talk about is what about the price of the coal before expiration? Yes? What about the price before expiration?  
Option prices prior to expiration, yes?  
We have seen.  
Thinking about that, yes, thinking about a call.  
Thinking about a call?  
We have seen that in red, I have written.  
Pay off on expiration. Make sense?  
Pay off on expiration.  
What if I can exercise?  
This.  
One month.  
Sorry, if I can exercise. What if I cannot exercise this till one month?  
I am out of the money, there are chances of finishing in the morning, yep.  
The price?  
The price would be something like this, yep.  
What is written in Greek?  
The price of the call.  
Before expiration, yes?  
Today, we are going to talk first about food called parity.  
Then I will show you what is the increasing value, and then we will go to the I will show you one example with the binomial model. What is the binomial model?  
Is consider is consider.  
That's the call for the poop.  
Binomial model is considered that the goal or the book is a portfolio that consists on the stock and above. We will calculate the price of the goal by considering a portfolio that combines  
Hello, can I go, yes?  
And with this, we will go.  
Call Wood Perry.  
Call put parity.  
Consider 2 portfolios.  
One portfolio that is long, one call and invest in the present value of a bond.  
And another portfolio that is loan, one put and loan one stock.  
Consider 2 portfolios.  
This is 1 portfolio.  
This is the first portfolio.  
And this is the second portfolio.  
If we consider...  
These 2 portfolios.  
We can conclude that.  
We can conclude that.  
payoff of both portfolios are the same, so these two portfolios should have today same price.  
Because, if not, arbitrage, yes.  
And this is a...  
Here, this is present value of, oh, here, present value of X. Yeah.  
Using continuous compounding instead of writing present value as we have been using present value in the whole course, you can write this in this search. I am never going to ask you  
We will always consider when doing these kind of exercises, we will always consider.  
Rate 0, yes, so we will always consider this term equal to 0.  
So, the exercises that we will be doing is just the pool plus the stove.  
To be equal to the call plus.  
The ball.  
Yep.  
Both of them should have same.  
Both of them should have same scrap, they put on the call, yes?  
Here, let us.  
So, set it up, yeah.  
Yeah.  
Which of the following represents an arbitrage opportunity where you would do the following by the call said the put?  
Sell the stock by risk-free security, the return, as I have told you.  
Regardless you.  
So, equation we have the stock price.  
The menu.  
Yeah.  
Hey.  
The food plus the stove.  
It's equal to...  
The goal plus the strike, yeah?  
Makes sense.  
One 110.  
One 110, let's talk.  
And let's try this.  
100. Yep.  
So, the goal minus the put should be equal to 10, yep.  
Make sense?  
T is what again? T is time. T is time, but I don't care about time because the rate is 0.  
Yeah.  
Correct.  
What I speak, ask, are easy.  
Call put parity tell us that the difference between the call and the put should be of 10. Call price should be $10 higher. Call price should be $10 higher than the put. Yes.  
No.  
Here, can you make all the drugs?  
If cold food parity works, you cannot make a difference. Here, cold food parity works.  
Yes, because the difference is there.  
Here, does it work?  
Yes.  
Here, does it work? No. And here, does it work? Neither. So see Andy.  
You see, and the arbitrage can be done. Exit.  
Assume options are of the European type on a stock that pays no dividends.  
Being European or America, that's not really bad.  
He is.  
What is it you get in this case?  
See, is the price of the call?  
is the price of the food.  
If I need an strip.  
Yeah.  
And what I have done is I have calculate.  
But I so.  
The food, the price of the coal given.  
Both of them having same strike and given the stock price and the strike.  
It's Aaron.  
I mean, which of the following represents an arbitrage or Portuguese?  
If cold food quality works.  
You cannot arbitrate.  
All food parity, in order to work, tell us that the difference between call and the call and the food should be of 10.  
Then the.  
Andi.  
There is arbitrage in C.  
Anindi.  
Nick.  
Makes sense.  
People.  
Please, yes.  
An equation where you have 4 variables, and all times you will know three of them, and you should calculate the four.  
Are.  
R discounting rate will always be what is where is yes. R will always be zero.  
OK, intrinsic value of a call option.  
You cannot exercise a call option today that will mature 6 months.  
Or you can execute it now, but in case you will execute it now, you will be losing money, yeah?  
What is intrinsic value? Intrinsic value is how much you will get, what should be the payoff in case you have security now, yeah?  
Careful, because increasing value is not the same as the payoff.  
At the end, why? Because...  
The graph is the same. The graph is the same. The graph is the same, but this value is not the same as the fail.  
Why? Because the underlying asset. At the end, it will not work the same as it was today. The price of the underlying asset will change.  
Okay.  
Then, they work 100, and in the future, we work 100, then it will be the same. They all have the value.  
But payoff, the payoff at the end, and increasing value will not match because the underlying asset price will change. Make sense?  
But, exactly the same.  
You have finger.  
Makes sense.  
No, hey, that's...  
This is the idea.  
Increasing value.  
Intrinsic value, the graph of intrinsic value is the payoff graph.  
This graph increasing value is this graph.  
This graph is the same as the payoff.  
And why do we calculate that gas increase value, that gas increase value?  
Because of time value one.  
Because of time value of money, because the strike.  
We can play in six months time, we consider time value point.  
If that value of money will be 0, sorry, in the rate, the rate will be 0.  
That just intrinsic value and intrinsic value will be the same, yeah?  
But at the end, why this is here? In order to represent that, in order to tell you that the option value will always be higher than  
In music by.  
And will always be higher than that gas increasing power, yeah, just because of the...  
Just because of, in case you are out of the money, in case you are out of the money.  
Increasing value will be 0.  
And there are chances of the stove to come.  
And, in case you are in the morning.  
There are chances to go out of the money, but if you go out of the money, you have a floor, but if you go deep into the money, you will always have.  
You will always have no talk.  
You don't have a dog, you don't have a seat, yes?  
And, yes, inclusive values because of the right.  
That, yes, intrinsic value.  
Yes.  
And yes, increasing values, the difference at the end, talking about that.  
Talking about a call, yes?  
How do you calculate the price?  
How do you calculate the payoff of the code?  
The Beer.  
Imagine that the underlying asset is here. How do you calculate this payoff?  
By the way.  
This payoff is the stock minus the strike, no?  
Yep.  
But their situation value is...  
Considering that this price is affected by time value money.  
And in order to make everything, let me come here.  
Okay.  
Is that?  
Makes sense.  
Because.  
Right, they go this, what do I have here? The store, my new strip.  
What is the point in this formula?  
That is 0.  
The payoff will be 0 or this, find you, you think about the food.  
You think about the food? What is going to be the food? That's the opposite.  
What is going to be the book? Payoff.  
This right minus the stop, if you do it, if you short, you will have higher. Yes, what I'm doing is playing with the numbers.  
Notions are simple, and life becomes a little bit complicated because I'm sorry.  
Defense.  
I'm gonna kill Will and Amanda.  
So.  
I'm gonna talk a little bit something.  
Then next day I will talk out again. So this Wednesday, I'm going to talk again about time. Yep.  
Makes sense.  
Now.  
This is an example of suppose that whatever, let me arbitrage. These are examples regarding arbitrage, American options. I'm going to go directly to here, the binomial model. Yes?  
Let me see if there is another some.  
And you?  
This is, yeah.  
I want to...  
Talk about the time now, and did you understand this?  
OK, one thing else, one more thing.  
We are going to consider.  
Here, we are going to come see there.  
that the goal is going to behave as a portfolio that consists on a slope and a vote. Yes?  
We are going to go see there, but...  
Let me do the example, and by doing the example, you will easily understand, you will easily understand that, yes?  
We have.  
The stop, the underlying, I'm talking about the underlying, yes?  
We have them the right message.  
Underline A surprise is.  
Can the rain as the prices?  
100, yes?  
I'm talking about the binomial mode.  
And in the future, there are only two possible scenarios. Yes.  
That is, yes, one scenario.  
That is one scenario.  
That will make the price of the stock.  
Boy, 120, yes.  
And there is another scenario that will make the price of the stock to all night. Make sense?  
What is this underlying us?  
And also...  
What I'm going to consider? I'm going to consider a portfolio that combines the stock.  
And I'm home, yes?  
And I'm all.  
Abone.  
With face values, 100.  
A bone, we pay value 100, yes?  
With war.  
It's a bone.  
This goal is compounding great.  
Is 10%, if the rate is 10%, yes, this bond will work.  
Andre Ten.  
One 100.  
Yeah.  
This is.  
I still.  
The underlying.  
This is the one, and this is the one.  
And because, right this.  
Break this.  
Ten percent, you can work 110.  
In both the center, you can know if we work 110, no matter what the underlineers will do.  
Make sense?  
Okay.  
So.  
I have, I still...  
And.  
The Aviates.  
We are going to consider.  
We are going to calculate what is going to be the price of a call with a strike.  
What is the price?  
What is the price?  
Today.  
Are you following me?  
What is the price today of a call?  
With the strike equals 210.  
Yeah.  
Are you following me?  
I have the stroke and the bone.  
This is day, this is in one period of time, day and in one period of time.  
I want to calculate the price of the call today, yes?  
I want to calculate the price of the call today.  
And I know these payoffs in the future.  
Okay, now.  
And me?  
What is the price of the call today?  
I don't know. Yes?  
I don't know what is the price of the call today.  
Can I calculate?  
Can I calculate what is going to be the price of the coal in the future?  
Yes, I can complete and pay you for the call.  
Because I have the underlying pricing, both the scenarios, yes.  
Are you following me?  
What is going to be?  
I'm gonna say it's into black, yes? What is going to be?  
The strike is 110.  
If the amoregas at worth 120, what is going to be my payoff?  
Okay.  
And here, the strike is 110, then the line is worth 90. What is going to be my payoff?  
Yeah, right.  
I'm happy.  
What I'm gonna do?  
This is relatively simple.  
I know they have seen the futures. I'm going to consider that the call.  
Consist on two things.  
A portfolio that combines, let me call this age time the stroke.  
Yes.  
Minus.  
I have called this B. I would like to call it B. I want to follow same.  
Numbers.  
Wait and wait.  
Thanks, and I'm gonna call you.  
I'm not gonna use same numbers, weight times B, yeah.  
AIDS.  
Is the weight on the stove?  
Bubble B.  
Is the weight on the bone, yes?  
Yep.  
I'm going to date.  
I'm gonna take this one, this one, this one, yes.  
Call Rice.  
I know of time, let me go.  
I'm gonna, yes, I'm gonna follow that equation.  
Ben.  
It sequence to.  
AIDS.  
Times 120.  
Minus double B * 100, make sense.  
Are you following me?  
I want to complete the weights.  
Then, zero piece.  
Eight times 90 minus.  
Weight times 100.  
Make sense?  
These are payoffs in the future.  
What is going to be?  
For price today.  
I don't know the way it's good, but let me write the question.  
Eight.  
Minus.  
One 100 times B.  
Are you following me?  
Please stop.  
Equations in the future, I'm gonna calculate H and WB, and once I know H and WB, I will calculate the price of the call today.  
Yeah.  
Okay, let's move.  
I'm gonna subscribe.  
This, this one, yes?  
When you subtract this, this is 10, is 120 minus 90, 30.  
Thanks, AIDS.  
Minus 0, yes?  
So, 8, it's one, two, three.  
Eight is equal to three.  
And if H is equal to three...  
For example, here.  
Wanna take that?  
Where is?  
Nine times 8 / 100.  
Oh, 9.3.  
Over.  
Yeah, yes.  
Now, in this, I'm going to calculate the price of the call.  
price of the call is going to be 1 to 300.  
Yes.  
Three times, 100.  
Miles.  
Nine times 3 / 11 times.  
Why not?  
Make sense?  
And you do these numbers?  
Amazing.  
I'm not, they are not going to serve the Excel because I'm going to use the Excel in order to get that numbers.  
Three 100 miles.  
Twenty-seven times.  
101.  
Over.  
You never know.  
And then we finish it. Yes.  
The price of the 54? I think it's too high. Whatever. Let me see.  
Oh, I have made something incorrect, sorry.  
Take.  
Baby A story, yes?  
We're playing.  
90, 110, 110.  
Under 20, 90, under 10, 100, yes.  
10.0.  
Zero.  
29 9.  
Ready?  
Ohh.  
Sorry.  
Is there anyone on there?  
Play this.  
Hi.  
Yes.  
3 over 11.  
Is it?  
All right.  
Andre.  
Andre.  
1/3 - 3 over.  
Hey.  
102.  
Hey.  
Hundred times.  
103.  
And then.  
I most.  
And then, 99 is.  
Numbers.  
I'm nervous because we are on time.  
Do over.  
104. Yep.  
6.06  
6.06  
One-third over 100, yes, one-third over 100.  
Binus.  
Twenty-seven.  
Trust me, my numbers are better.  
It looks like this at present, so now for real, Matt.  
Forget about maths, think about the portfolio. Yes, what I have done.  
Same payoffs in the future, same price, yeah.  
Next day, next day, I will heal a man and will.  
Let me eat you. I'm gonna let me eat you.  
Sample final.  
B.  
Sam Paul Fainer.  
Hey.  
Formula C, the example of formula C that I will give you.  
And some more, some information regarding, I want to take two of these.  
Some information, some information regarding the title I'm going to read.  
This next day, I'm gonna read this. I'm gonna share this next day. I will give you more explanations regarding this next day. Yep, thanks.  
And next day, we will continue talking about the file will have information from.  
But try to do sample final one and sample final two. I will have you to calculate the for the price of above.  
I want the final to be.  
As difficult.  
The return.  
Simple than this. And regarding this, I will not ask you to calculate regarding this next week regarding binomial model. Next week we will do one or two exercises. A simple exercise that in case you understand it, it will be in the final and that's  
That's it.  
What time are we taking these in one?  
In the afternoon. In the afternoon. In this room. Yeah, the same room in the afternoon. Because in the morning I need to go. I need to go to the school of my kids. Yeah, 2 o'clock would be OK. Two, three.  
Is this Friday or no? Next Friday. Is it OK if I take it on the regular day? Yes.  
And one thing else, let me, I'm gonna stop the recording.

![](file:///C:/Users/lgarv/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)**Luis Garvía Vega** ha detenido la transcripción