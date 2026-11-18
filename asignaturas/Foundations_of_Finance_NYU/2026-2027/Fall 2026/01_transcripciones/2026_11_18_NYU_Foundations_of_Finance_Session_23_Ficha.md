---
titulo: "Foundations of Finance – Session 23: Derivatives, Futures and Options"
fecha: 2026-11-18
curso: "Foundations of Finance (Fall 2026)"
sesion: 23
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---

# Foundations of Finance – Session 23

## Derivatives, Futures and Options

**Date:** November 18, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 23 opened the final block of the course:

$$
\boxed{\text{Derivatives}}
$$

The class introduced derivatives through three steps:

1. What a derivative is.
2. How a futures contract works.
3. How options differ from futures.

The main topics were:

- Derivatives and underlying assets.
- Futures contracts.
- Long and short positions.
- Calls and puts.
- Strike price.
- Premium.
- Underlying price.
- Payoff versus profit.
- American and European options.
- In-the-money, at-the-money and out-of-the-money options.
- Option leverage.
- Basic option strategies.
- Hedging with a protective put.
- Introduction to put-call parity.

The essential distinction is:

$$
\boxed{
Future = Obligation
}
$$

while:

$$
\boxed{
Option = Right,\ Not\ Obligation
}
$$

---

## 2. What Is a Derivative?

A derivative is a financial instrument whose value depends on another asset.

That second asset is called the:

$$
\boxed{\text{Underlying Asset}}
$$

Therefore:

$$
\boxed{
Derivative\ Value
=
f(Underlying\ Asset)
}
$$

To understand the value of an option, for example, we must first know the value of the underlying asset.

Examples of derivatives include:

- Futures.
- Options.
- Swaps.

This session focused mainly on futures and options.

---

## 3. Futures Contracts

A futures contract establishes today the terms of a transaction that will occur in the future.

Suppose two parties agree that in one year:

- one party will buy an asset;
- the other will sell it;
- the agreed price is $100$.

At maturity, both parties have an obligation to perform the contract.

The buyer must buy.

The seller must sell.

Therefore:

$$
\boxed{
Future = Contractual\ Obligation
}
$$

---

## 4. Futures Payoff

Suppose the agreed futures price is:

$$
K=100
$$

At maturity, let the underlying asset price be:

$$
S_T
$$

The long futures position has payoff:

$$
\boxed{
S_T-K
}
$$

If:

$$
S_T=110
$$

the buyer gains:

$$
110-100=10
$$

If:

$$
S_T=90
$$

the buyer loses:

$$
90-100=-10
$$

The seller obtains exactly the opposite payoff:

$$
\boxed{
K-S_T
}
$$

Thus the two positions are mirror images.

---

## 5. Long and Short

The terminology introduced was:

### Long

A position benefiting from an increase in the relevant price.

### Short

A position benefiting from a decrease.

For a futures contract:

$$
\boxed{
Long\ Future
\Rightarrow
Benefits\ if\ S_T\uparrow
}
$$

$$
\boxed{
Short\ Future
\Rightarrow
Benefits\ if\ S_T\downarrow
}
$$

This terminology becomes slightly more subtle when options are introduced.

---

## 6. Futures Versus Options

One important language distinction was emphasized.

With a futures contract, normally no option premium is paid simply to acquire a right.

The parties enter a contract containing future obligations.

With an option:

> **The buyer pays today to acquire a right.**

Therefore:

$$
\boxed{
Option\ Buyer
\rightarrow
Pays\ Premium
\rightarrow
Receives\ Right
}
$$

The seller receives the premium but accepts an obligation if the option holder decides to exercise.

---

## 7. Calls and Puts

There are two basic types of options.

### Call Option

A call gives the holder:

$$
\boxed{
\text{The right, but not the obligation, to buy}
}
$$

the underlying asset at a predetermined price.

### Put Option

A put gives the holder:

$$
\boxed{
\text{The right, but not the obligation, to sell}
}
$$

the underlying asset at a predetermined price.

The distinction between **right** and **obligation** is fundamental.

---

## 8. The Three Prices of an Option

The class emphasized three different prices.

### 1. Strike Price

The price specified in the contract at which the holder can buy or sell the underlying.

$$
\boxed{K}
$$

It is also called the:

- Exercise price.
- Contract price.

### 2. Premium

The price paid today to acquire the option.

$$
\boxed{C_0 \text{ or } P_0}
$$

### 3. Underlying Asset Price

The market price of the asset itself.

$$
\boxed{S}
$$

These three prices must not be confused.

---

## 9. Buying a Call

Suppose an investor pays:

$$
5
$$

for a call option with:

$$
K=100
$$

At maturity:

### If

$$
S_T=90
$$

the investor will not exercise.

Why buy something for $100$ when it can be bought in the market for $90$?

The payoff is:

$$
0
$$

### If

$$
S_T=110
$$

the investor exercises and obtains:

$$
110-100=10
$$

### If

$$
S_T=120
$$

the payoff is:

$$
120-100=20
$$

Therefore:

$$
\boxed{
Payoff_{Call}
=
\max(S_T-K,0)
}
$$

---

## 10. Payoff Versus Profit

A central distinction is:

$$
\boxed{
Payoff \neq Profit
}
$$

The option holder had to pay a premium.

If the call costs:

$$
5
$$

then:

$$
\boxed{
Profit_{Call}
=
\max(S_T-K,0)-5
}
$$

For:

$$
K=100
$$

and premium:

$$
5
$$

the break-even price is:

$$
\boxed{105}
$$

At:

$$
S_T=105
$$

the payoff is $5$, exactly compensating the premium.

Profit is zero.

---

## 11. Limited Loss for the Call Buyer

One of the major attractions of buying an option is the asymmetry of the payoff.

For a call buyer:

$$
\boxed{
Maximum\ Loss
=
Premium
}
$$

If the option expires worthless, the investor loses the amount originally paid.

But if the underlying price rises significantly, the potential upside can be very large.

This asymmetric structure is one of the defining characteristics of options.

---

## 12. Buying a Put

Now suppose an investor buys a put with:

$$
K=100
$$

The investor has the right to sell the underlying for $100$.

### If

$$
S_T=110
$$

there is no reason to exercise the right to sell for $100$.

The payoff is:

$$
0
$$

### If

$$
S_T=90
$$

the investor can effectively sell for $100$ something worth only $90$.

The payoff is:

$$
100-90=10
$$

Therefore:

$$
\boxed{
Payoff_{Put}
=
\max(K-S_T,0)
}
$$

---

## 13. Put Break-Even

Suppose the put premium is:

$$
5
$$

Then profit is:

$$
\boxed{
Profit_{Put}
=
\max(K-S_T,0)-5
}
$$

For:

$$
K=100
$$

the break-even price is:

$$
\boxed{95}
$$

because:

$$
100-95=5
$$

which exactly compensates the premium.

---

## 14. Options Are a Zero-Sum Game

The session emphasized that derivative contracts are a:

$$
\boxed{\text{Zero-Sum Game}}
$$

Ignoring transaction costs, what one party gains is what the other party loses.

For example, if the call buyer receives:

$$
+10
$$

the call seller has:

$$
-10
$$

on the payoff side.

Therefore:

$$
\boxed{
Payoff_{Buyer}
+
Payoff_{Seller}
=
0
}
$$

This differs conceptually from holding productive assets such as stocks or bonds, where companies can generate new economic cash flows.

---

## 15. Option Seller

The seller or writer of an option receives the premium.

But in exchange, the seller accepts an obligation.

For a call seller:

$$
\boxed{
Payoff_{Short\ Call}
=
-\max(S_T-K,0)
}
$$

For a put seller:

$$
\boxed{
Payoff_{Short\ Put}
=
-\max(K-S_T,0)
}
$$

The seller's payoff is the mirror image of the buyer's payoff.

---

## 16. Long and Short Options

An important distinction was clarified.

### Buying an option

You are:

$$
\boxed{\text{Long the option}}
$$

### Selling an option

You are:

$$
\boxed{\text{Short the option}}
$$

But the expected direction of the **underlying asset** depends on whether the option is a call or a put.

| Position | Typical View on Underlying |
|---|---|
| Long Call | Bullish |
| Short Call | Bearish / not strongly bullish |
| Long Put | Bearish |
| Short Put | Bullish / not strongly bearish |

Therefore:

> **Buying an option does not automatically mean expecting the underlying price to rise.**

Buying a put is a long option position but expresses a bearish view on the underlying.

---

## 17. American and European Options

Options can also differ according to when they may be exercised.

### American Option

Can be exercised:

$$
\boxed{\text{At any time up to and including expiration}}
$$

### European Option

Can be exercised:

$$
\boxed{\text{Only at expiration}}
$$

This terminology does **not** refer to the nationality of the company or the market.

An American-style option could exist on a European stock and vice versa.

---

## 18. Moneyness

Options can be classified according to the relationship between:

$$
S
$$

and:

$$
K
$$

### Call Option

A call is **in the money** when:

$$
\boxed{S\gt K}
$$

It is **at the money** when approximately:

$$
\boxed{S=K}
$$

It is **out of the money** when:

$$
\boxed{S\lt K}
$$

### Put Option

The relationship is reversed.

A put is in the money when:

$$
\boxed{S\lt K}
$$

---

## 19. Why Buy an Out-of-the-Money Option?

An out-of-the-money option currently has no intrinsic payoff.

But it may still have value because there is time before expiration.

The underlying price can move.

Out-of-the-money options can therefore be relatively inexpensive while still providing exposure to a large potential future movement.

This introduces one of the central ideas that will be developed later:

$$
\boxed{
Option\ Value
=
Intrinsic\ Component
+
Time\ Component
}
$$

---

## 20. Options as Leverage

One practical use of options is leverage.

The class compared:

- investing directly in Microsoft shares;
- investing the same amount of money in Microsoft call options.

Suppose:

$$
S_0=70
$$

A call has:

$$
K=70
$$

and costs:

$$
10
$$

With $7{,}000$, an investor could buy:

- 100 shares;
- or 700 call options.

Both strategies initially require:

$$
7{,}000
$$

---

## 21. Stock Versus Call Exposure

If Microsoft rises significantly, the percentage return on the call position can be dramatically larger.

The option investor controls much greater exposure to movements in the underlying asset with the same initial capital.

Therefore:

$$
\boxed{
Options
\Rightarrow
Financial\ Leverage
}
$$

But again:

$$
\boxed{
More\ Potential\ Return
\Rightarrow
More\ Risk
}
$$

If the stock finishes below the strike, the call holder can lose:

$$
\boxed{100\%}
$$

of the premium invested.

---

## 22. Speculation Versus Hedging

Options are not used only to speculate.

They can also reduce risk.

This is:

$$
\boxed{\text{Hedging}}
$$

The session introduced one of the most intuitive hedging strategies:

$$
\boxed{\text{Protective Put}}
$$

---

## 23. Protective Put

Suppose an investor owns Microsoft stock with current price:

$$
70
$$

The investor wants exposure to future gains but wants to limit downside risk.

The investor can combine:

$$
\boxed{
Stock + Put
}
$$

with a put strike of:

$$
K=70
$$

If the stock rises, the investor benefits from the stock.

If the stock falls below $70$, the put gives the investor the right to sell at $70$.

Therefore the payoff has a floor.

Ignoring the premium for the moment:

$$
\boxed{
Payoff
=
\max(S_T,K)
}
$$

The put works economically like insurance.

---

## 24. Options as Insurance

The insurance analogy is important.

When buying insurance:

- you pay a premium;
- you hope you never need to use it.

Similarly, buying a protective put costs money.

But the premium purchases protection against an adverse event.

Therefore:

$$
\boxed{
Put\ Option
\approx
Financial\ Insurance
}
$$

This explains why losing the premium does not necessarily mean the strategy failed.

The investor paid for protection.

---

## 25. Put-Call Parity: Preview

The class ended with a first look at a fundamental no-arbitrage relationship.

Compare:

$$
\boxed{
Stock + Put
}
$$

with:

$$
\boxed{
Call + Risk\text{-}Free\ Bond
}
$$

where the bond pays the strike price $K$ at expiration.

At maturity, both portfolios generate the same payoff.

Therefore, using the Law of One Price developed earlier:

$$
\boxed{
Same\ Future\ Payoffs
\Rightarrow
Same\ Value\ Today
}
$$

This is the intuition behind:

$$
\boxed{\text{Put-Call Parity}}
$$

which will be developed in the next session.

---

## 26. Option Strategies: First Look

The class briefly introduced combinations of options.

### Bull Spread

Designed to benefit from a rise in the underlying while limiting both gains and losses.

One possible construction uses:

- long call at a lower strike;
- short call at a higher strike.

### Bear Spread

Designed to benefit from a fall in the underlying.

### Straddle

Combines a call and a put with the same strike.

It can benefit from a large movement in either direction.

### Strangle

Similar concept, but generally uses different strikes.

### Iron Condor

Combines several calls and puts to create a bounded payoff over different price ranges.

These strategies were introduced only briefly; the objective was to see that simple options can be combined to construct new payoff structures.

---

## 27. Bullish and Bearish

Two important market terms were introduced.

### Bullish

An investor expects prices to:

$$
\boxed{\text{Rise}}
$$

### Bearish

An investor expects prices to:

$$
\boxed{\text{Fall}}
$$

A call can be used to create bullish exposure.

A put can be used to create bearish exposure or to hedge an existing long position.

---

## 28. The Danger of Selling Options

The session closed with an important risk warning.

When an investor **buys** an option, maximum loss is generally limited to the premium paid.

When an investor **sells** certain options, potential losses can be much larger than the premium received.

For example, a naked short call can expose the seller to potentially very large losses if the underlying price rises dramatically.

Therefore:

$$
\boxed{
Buying\ Option:
Loss\ Limited\ to\ Premium
}
$$

but:

$$
\boxed{
Selling\ Option:
Potential\ Loss\ Can\ Be\ Much\ Larger
}
$$

Leverage works in both directions.

---

## 29. Connecting Derivatives With the Rest of the Course

Derivatives may look like a completely new subject, but the same ideas appear again.

### Uncertainty

We do not know:

$$
S_T
$$

### Risk and Return

More potential return generally involves greater risk.

### Time Value of Money

Future contractual payments must be valued today.

### No-Arbitrage

Equivalent future payoffs must have equivalent prices.

### Replication

Complex securities can be reproduced by combinations of simpler securities.

Therefore:

$$
\boxed{
Options
=
Uncertainty
+
TVM
+
Risk
+
No\ Arbitrage
+
Replication
}
$$

The course is returning to the same principles from a new angle.

---

## 30. Five Ideas to Remember

1. **A derivative derives its value from an underlying asset.**

2. **A future creates an obligation; an option gives its buyer a right but not an obligation.**

3. **Call and put payoffs at expiration are:**

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

4. **Payoff and profit are different because the option buyer pays a premium.**

5. **Options can be used either to increase exposure through leverage or to reduce risk through hedging.**

---

## 31. Before the Next Session

Students should be able to:

- Define a derivative.
- Identify the underlying asset.
- Explain a futures contract.
- Distinguish an obligation from a right.
- Define call and put options.
- Distinguish strike, premium and underlying price.
- Calculate call payoff.
- Calculate put payoff.
- Distinguish payoff from profit.
- Calculate break-even prices.
- Explain long and short option positions.
- Distinguish American and European options.
- Define in-the-money, at-the-money and out-of-the-money.
- Explain why options create leverage.
- Explain a protective put.
- Understand why:

$$
Stock+Put
$$

and:

$$
Call+Bond
$$

can generate identical future payoffs.

This will lead directly to:

$$
\boxed{\text{Put-Call Parity}}
$$

in the next session.

---

# Transcription
18 de noviembre de 2026, 5:05p.m.
1 h 18 min 3 s
OK, and recording two week meetings before start or three? No, two week meetings, not three. First thing.
This night, last night, we saw Nvidia results.
Have you had something about them?
Gracie also.
Crazy, awesome. Let me say unbelievable. The results were awesome, and let me share with you that.
What?
The.
Sure.
What is my field?
My team regarding this, is that?
People have made their homework.
People have analyzed.
What I what I analyzed with you, yeah? Results were awesome. I'm talking about results, awesome. What I'm talking about, I'm talking about expected in goals, yes?
and spec are true, but with all things that I have told you regarding circular financing and all these things. Yep. Second thing.
What is gonna happen?
This Wednesday will be this night, but what is going to happen today in the States?
If today or tomorrow, I think it's...
What is going to happen?
Okay, we have to talk about the stocks a lot. Yes. What is different between primary market and secondary market?
Okay, bye.
But, you also hope.
Where is the spellings?
What is going to happen today? Okay.
Perfect IDO.
And he's small, no?
Okay. Thank you. Bye.
He's not yet.
Go for it.
What's today? Yeah, no. Oh, ice. The pricing date is today in the evening. That's time. Rating start date.
Laura.
Paul is going to be a dropping IPO.
What is going to happen? We don't know. We have to be trouble.
But if you see news, what a lot of people are hearing.
It's incredible good because NBA results are awesome. There are a lot of people that want to buy.
What is this? My personal view?
Nice.
No, they need money. A profit needs money. It's a casuality. Casuality, casual.
Tropic IPO test tomorrow, test after MBBS results.
No, never discuss when you are playing for videos.
Nothing is casual. Yes, in order to finish, I share with you. I'm gonna share with you today's class. I want to start with today's class now.
Let me first, don't know.
Yeah, let me download this.
And me, sir, today's class.
No, just you on twenty-three, not four.
Are you?
Okay, yesterday I served these two graphs with you.
And these two graphs has to do with Nvidia's, yes. I'm not going to talk any more about Nvidia because I have already talked, but we are just in the middle of the storm regarding Nvidia. Yeah. One thing is,
Regarding anthropic IPO, there is noise, no?
Have you heard about...
What is it, all of them? Do you know what is something? Do you know what is something?
And then, ohh, yes, the city, yeah.
Since then, Medina.
What is going on in something?
What is going in San Fernando now? No, not tomorrow.
What is going to happen in something?
Okay.
Fran is going to sit in the same table, then cooking and singing.
This meeting is going to is going to happen tomorrow, and it makes me think about another meeting that happens in Yalta.
Oh, I like Delta 2.0 in my head. What is happening in Celta 2 1945?
Yalta, 9:45, three people sitting a table, three people, do you recognize these guys?
And.
Or, um...
Yeah, Roosevelt.
Roosevelt.
Roosevelt. Yes, Franklin Delano Roosevelt, Churchill and Stall, Garcia.
This is still sitting in the table.
And what happened in 1945? In that meeting, not in that meeting, sorry. Two years after that meeting, this is 1945, two years after, Bethel Bush happened, 1947, Israel state was created, yes.
These people were talking about how to divide the new world. Yes. Second World War, who ruled, who used to rule the world? The British Empire with the pound. Yes. After the Second World War, the pound pays to the dollar.
Yes.
Understand what I'm saying? Probably what we are going to see.
Tomorrow, in September, looks similar to what had happened in the Alba.
Make sense?
This is not a, this is not a history class. I am not supposed to talk about this kind of things, but those who don't know their history are doomed to.
You ever heard that phrase? Those who don't know their history are going to repeat it.
The only thing we have is our past. There are times that by looking in the past, we can think about the future. When everyone, what everyone wants us to look at, everyone wants...
Ask Luca, drop it now.
to air. A lot of things are happening also. Yeah. Also in Spain, we are on elections and you are on elections. You have been in elections till the 3rd of November, yes?
Lot of pieces, new lot of news has to do with, ohh, look at their, look at their, they, we look at where they want us to look. Make sense? OK, let's just start with this class. Then we are going to start a new.
Where I've got the slides.
Here.
Here.
Okay, today we are going to talk, we are going to start talking. Today we start the last blog of the course.
I like.
Yeah, those two.
Okay, we are going to start talking about...
Option. Do you know what is an option?
Have you heard? Have you heard about the change?
What is an upship?
The opportunity to...
By yourself stock, right?
Yeah.
Yeah.
Instead of in talking about opportunities.
I will talk about...
Right.
Right.
And...
I would say that an option.
Is that by now?
With our finances.
What is your name?
Is Ana in podium?
Financial, yes, you own a financial, you own an asset. If you issue a financial, if you issue bonds or stocks, normally it's because you are looking for money. If you issue a bond, you totally agree. You have issue agree. Make sense? I issue a bond, you got the bond in my balance.
The phone appears on my.
My.
Right side of the balancing.
And in your balance, if you own the asset, it appears on the left side of the balance. Make sense?
And, among all financial instruments, options are a specific part of financial instruments that are holding them.
What is a?
A financial instrument that derives from another financial.
What is the name of this type of which the value derivative underlying as?
So, in order to know the price of the option, you need to know first the price of the line.
Why is the price from the auction?
At your turn, bye.
Face X.
At the 16.
Is it cheap or expensive?
I, I don't know the price yet, so I don't know, I cannot say I don't know which price I'm talking about.
So, first, I will need to know the price of the option, but in order to complete the price of the option, also, I need to know what is the price of basic.
Except.
In order to know the price of the delivery, I need to know first the price of the underline.
Make sense?
OK, hey, let me.
Let me with this.
Before talking, then we will talk about options, and before talking about options.
Before.
Yours.
Before talking about concepts.
I'm gonna explain you.
Another different type of contract of that is future.
What's the future?
Are they leaving?
Instead of buying.
Something today.
Hey, Olivia, hey, we closed each surprise.
Hey, we close future friends.
But, man, that I will buy you the future. If I buy you the future, you are selling me the future.
I buy it because you are sorry, yeah? Hey, we agree with the price.
But I won't pay you, and you won't be the same thing.
One year, make sense.
Odio.
Okay, now, what is going to be? Please, I need your attention on any symbol. What is going to be?
The price.
of the pig you are buying in the future. The future, what is going to be the price?
I don't know that I'm writing a line at which price I am buying, for example, 100. Yes, the strike is going to be.
100. Makes sense.
I'm not talking about future, I'm not talking about options. Yes, I agree with you to buy at 100.
No matter what will happen with the price, I will pay you 100 and you will deliver it to me. Yes?
How much money?
I am getting, I am gaining, or I am losing.
It depends on the other line, I think that makes sense.
Why?
Wait.
These are my games or my losses, yeah?
My gains or my losses?
Imagine that the things price and the line as a price is.
100, yeah.
I have the obligation of buying at 100, yes?
If it is 110, sorry, I said 100. If it is 110, yeah.
I will be happy or not?
I can buy for 100 something, this price is 100, so not only I will be happy, I will be happy 10 units.
I have been as we were.
10 units. I mean, instead of 110, it would be under 20.
20 units. So for this is what? Yes, how much I will be getting? I will be getting 10. It is 120, sorry, 120. I will get 20 and so. Excellent.
I'm talking about a futures contract. I have the obligation to buy.
Why do you?
The price is.
The price is 19. I have the obligation to buy at 100 something price is 19. So, Odio, you will be happy.
Because you can sell 100 something that has a price of 9, you will need 10 units happy, I will need 10 units unhappy, yes.
And Vega only.
This, yeah, what is this graph about?
Grab his the graph of the budget.
A future.
I can, this is.
Ahh.
Makes sense.
This is mine, my girl. Now I'm gonna work, I'm gonna throw Olivia's girl.
Sorry, I'm going to continue using bread for features, but I'm not going to talk today about you. I'm going to talk about that. I'm going to change the market and move it into option. Yes.
For the seller.
It just makes sense.
When I was getting the price is 110, I was the Euros happy because Olivia was the Euros.
I'm happy.
This is 110, this is 100, yep.
I follow me.
This is the price for selling.
It makes sense.
So, the seller in the future is kind of like shorting, right?
Hey, love that question.
We are going to have to decay.
Out of time.
We are gonna indicate a lot of time.
This idea.
Shorting stands for...
Well, that is on.
Hey, close.
Short.
Sure, normally, because this will create a lot of confusion. Come down.
Normally, short is 7, long is 5.
But we're talking about very bad things.
We will see that.
If you are long.
Respect the price to go up.
For short, you stay the stock price to go down.
Normally, when we used to talk about the stocks to buy a stock, because we are a state in the price for a while.
You said it because we are expecting the price to go down, yes?
When you buy a call.
We are in a long position, and we are going to see, by a call, you spend the price to go up.
You sell a call if you are short with a call, you stay the right to go down.
Not running.
When there will be problems, you are following me, you won't have any problems I'm talking about.
Plus, you buy a good.
To buy a food, you expect the price to go down.
To buy a food.
You will be in a short position regarding the underlying asset that I not put this in long with the.
Is that how to say?
Don't worry, because I have not talked about long and short yet. I'm just talking about profits, profits or losses. Excellence.
Tell me.
Did you understand that?
Did you understand that? I'm gonna mute.
You.
So, Brent.
Long song.
Knop.
Let me follow the slides a little.
What are we going to do today? We are going to talk about derivatives, yes?
I'm not going to go through the review of the other place class, because I am focused on options now. I don't want to go from here. And Niklis, I will talk later about Niklis. Yes.
What is salary?
A derivative is a security which payoff depends on the price of another security. The name of the second security is underlying asset.
Oh yeah, the other security is called and...
Be and underlying security, yeah, underlying.
Options, futures, traps, we will talk about translating.
I don't want, I want you to understand this later, derivatives are used for a lot of things. OK, now we're looking for business.
You got mine.
Picture, or you can send a picture. Yes, fine. Ohh, whatever.
I mean, right?
Buying a picture or selling a picture.
That's not really mean by orb.
Yes, closing a contract.
Why that's not used to buy your because you won't pay anything.
Look there. Normally a lot of people say, and buying a picture.
You have closer, you look better.
You would be the teacher.
When talking about dog shoes.
We buy an option today. Why? Because we pay.
You buy an option, you will pay a price.
In order to get what? The right.
Is this all I'm saying?
When you close a future contract, you can be in the buyer position or in the seller position.
And you are not really buying or selling, because...
You will buy yourself in the future. It will depend on what is written in the contract, because, Ron, you are the seller and you will be paid.
Sense.
So, when talking about, we pay in order to get the rep, yeah?
Fred, yeah, something important, and I will repeat it next day and the day after next day.
When talking about pictures.
A lot of people say, I'm going to buy a future. I'm going to sell a future. I have to buy a future. I have to sell a future. You don't really buy anything today. Because you don't pay anything or you don't receive money.
On the other hand...
The other hand, when talking about options, buy the option because you pay in order to get the right. Make sense?
And there are two friends.
For example, Odio, you have.
You have certainly a spoke in one year time. Yes, in one year time.
We agree the conference. Yes, we agree. In one year time.
Which right?
I have both.
I have a few church culture, yes?
What is my drive in one year? I have it.
And the right to buy this is to buy this.
Hey.
Pay your pay, pay me the obligation of the right, but the right of receiving the thing at the given price.
Makes sense.
Too high, they're right.
To receive the thing at negative price.
You don't have the obligation to pay unless you want it.
Make sense?
You don't have the obligation of paying, unless you want, but you have the right of receiving the fee.
On the other hand, if you are the seller, which is your right?
In this case, Angelina, but this is there.
You have the writer in bed.
Excellence.
So, reaching to this point, there are two different types.
Of course.
You come back.
The right, but...
Or you can also buy the right, sir.
But I even friends, yes.
Yeah.
So, when talking about options.
There will always be 3 prizes.
When talking about an option, there will be always three different sizes.
First, I mean, third, second, and third. There is not an order, yes?
First price, the price at which you can exercise the right.
The price that is within the contract.
This case?
One 100. I have the right of buying or selling at 100. Yes.
Let me write 100 in group.
One 100 is going to be called.
Best right.
can also be called the exercise price or the contract price. Careful, the contract price is not set as the price of the contract.
Where's the right?
The price that that is, a price that cannot move.
The comprise.
The premium. What is the premium? The price you are paying in order to get the contract.
Agreement, yes.
At their price, that is important, the price of the underlying asset.
With this third, you read.
You read, you have one extra point.
I love, I love both. You really have melted underground. I was going to go and just say, it's a perfect day or, but no.
I'm not going to do it. Sure, sure. Let me continue. Man, please, you can late and also you distract me.
Three prices.
That is my, I have been talking about a lot of things, that is my, quickly.
We are gonna talk today about delivery.
What is a delivery financial instrument that the right value goes so far and other financial instruments followed underlying that. So, in order to know the price of delivery, I need to know the price of.
Then, among all very good things, we are going to talk today about options. In order to understand options, first, I have introduced future. I'm not going to repeat future. I'm going to explain directly options.
That is easy to understand.
Let me start with...
The goal option, I'm going to pay, for example, I'm going to pay $5.
I paid $5 and I have bought the right of buying.
The right of buying space X stops in one year time at 100. Make sense?
How much did they pay? Fabulous, no?
What is going to be the price in the future of SpaceX?
I don't know.
I don't know.
Yes?
Have the right to buy at a given price of 100, if.
What is the price? The future is 110.
Will I exercise my right?
Yes, of course.
In the price, 110, when you buy at 100? Yes, you will get 10.
Yeah.
This is the payoff. Because probably you can be thinking, what about the $5 that I pay? We are going to talk about this payoff. I'm just talking about the payoff.
If it is 100, I won't receive any money. If it is 110, I will receive 10. If it is 120, I will receive 20. So, yes.
What is the price is? Thank you.
What do you prefer, to buy for 100 or to buy for 90?
Yeah, so you won't exercise your right. You will take the contract and you will throw the contract to the customer.
The contract will work, nothing.
Make sense?
Belén.
Your loss, right? You can only lose only the price of your contract, the how much you bought for.
Careful with that, and you hear only.
Only stands for everything.
You have lost everything.
Not only, only because this is the next day, but this is the same as this buying a goal to pay a premium, paying an option the same as contracting an insurance.
Pay up from a premium.
And the best thing that can happen to you, I wish all of you.
We'll go back, Laura, and students come back.
And we will make those companies to win a lot of money.
Better to use, I mean, I want all of you to contract a power insurance contract, a house business contract, a life business contract.
Never received money from insula.
Whatever. Understood, please. Hey.
This is improved the payoff, yes?
Let me write.
Profits or losses? I should take all five, yes?
I have lost five. Then from zero I start making money and break even will happen.
In 105.
If they like us in price, it's.
One 105, this will be my break even, but I'm getting is the same as what I have paid.
And if the price hits 120, I payoff would be of 20, and my profit would be of 50.
Make sense?
Any questions?
Okay.
Zero sum game. Do you understand what is a zero sum game? Olivia and me, we have close.
Yeah.
Hey.
It means that I am.
And you are so happy is because maybe I will be, and you are so happy.
What I win is just because you.
A zero sum game. All these contracts, derivatives, are zero sum game.
You talk about these steps, but if you talk about bones.
For example, I issue both, yes, I get finance with this money, I make work, and I win your win.
The stocks, bonds are not zero-sum gain. Why? Because something, the coupon is being generated, dividends are regenerated, and dividends came from other places. Yes?
Up here?
We are buying, we are, we are closing Sáez and Ben. If you are willing, just because I am losing.
And only, only I want to sleep well, I don't pay, I don't care to pay a premium.
I sleep well, I hate.
And time to leave now, we are going to actually use it for boxing, yes?
We are gonna need you, we are gonna use software for things, but the idea is I, and I sleep well, I don't care and lose what I have paid because I am paying for sleeping well. Make sense?
Okay, this is blue.
Ahh.
Ohh.
This?
If I am making money
Oh.
I am making money.
Of course, I am buying a call.
Because there is a seller making money because the seller is losing money. Make sense?
Let me hear.
Describe.
Things, right?
Hundred, yes, and if the value is getting 10.
Because the seller.
Is Bruce in 10?
I am.
The contract, the trust can, I'm talking about payoffs, yes?
And you can think, and you should think, what about the premium? Let me do the premium here. This is getting 5.
Thank you, for only this.
The contract I have brought in the blackboard ever.
Then, thank you then.
dot 905? Yep, for a break.
Like, even.
Topics at 105, so make sense?
If you add this to this, the result will be 0, makes sense.
OK, any questions?
Now, here I thought we have to get regarding selling a future.
I'm gonna, that's it.
There.
Talking about finance, talking about corporate finance, talking about markets.
The name?
Of the game, always is fine, de.
And selling more at a more expensive price, yes?
Thinking about.
Selling a book with a strike of 100. I have the right to sell at 100. Make sense?
I have the right to turn at.
One 100.
Imagine that.
And the right message is...
Hundred 10, yes.
Will you buy?
At 100.
But what you said?
When you receive 100, when you can receive 110.
Pretty perfect.
Be prepared to receive 100. So, the rice is 100. Who won the exercising, right?
Make sense?
And what if the price of the rain is? Thank you.
Will you?
Bed for 100.
When you can buy a Nike.
Not only you can, you will do it. You will buy it overnightly, then you will sell it for 100 and you will get.
Google.
Google.
Makes sense.
What about the premium?
I should take out the premium. Imagine that I have paid 5. So break even in this case would be 95.
What about?
Fine, they are both right, but makes sense.
Bye.
Well, the seller of the book.
What about the center?
In case, in case the price is higher, I'm gonna just talk about the problem.
In case the time is higher than this time.
The other part will not exercise the right, and I will see I will have to receive the premium and premium will be my copy. Make sense?
Thank you, then still be at ninety-five.
Understander.
Will pay what the buyer is getting.
Makes sense.
That's good.
Oh, looking smart.
Babe.
This is a blue, blue here.
Payoff, in green, profit, and here I have with them, profit.
Yep.
Several things.
A full option gives the holder the right and not the obligation to buy. A full option gives the holder the right but not the obligation to sell. Excellence.
Knop.
Auction payoffs are by exercise price, right price? Yes, your time. OK, your time is...
It will never be called much.
Do you remember Madrid?
I'm talking about both.
Is it?
Then there is having.
For today, this is an important thing: there are American options, American options.
And European option.
Cortana.
Spanish back.
You repair?
You can buy both American Bank of Santander stock options or European Bank of Santander.
It does not has to do with nationality.
has to do it when you can exercise.
In my head, Americans are better.
When can you do exercise an American option?
Today, tomorrow, and whatever you want before expiration or even at expiration. Excellent.
When can you use European options? When can you exercise European options? Just add expiration. You cannot exercise European options before experience.
Except.
We will see when evaluating options, we will see when evaluating options that at the end does not matter. Both will work the same.
Because you will never exercise an option before explanation, because there are always chances.
of the price to go up. If the price goes down, there is a floor. If the price goes down, there is a floor.
But if the price goes up, thinking about call options, it's not similar. Make sense? And whatever rules in this.
Be for next class.
What else?
Ohh, yeah.
In the money, out of the money, or at the money?
Take up the deals, but when bye.
You speak Russian?
They're progressive.
Thanks.
Oh!
I mean, when buying options, when buying options.
When buying options.
Please not laugh of what I'm gonna say.
When buying options is like playing Russian roulette.
I don't know if this is polite or not.
Russian, do you know Russian Rodriguez?
Why am I talking about Brazil? Because Brazil only has two results.
Good news or bad news?
Goodbye, you too.
You don't know what the price of the other line will be.
And may that you have both. And there is a crack. Yes, the underlying message goes here.
This call option will be out of the money.
But this put Odio will be in the money.
If there is a pump in the market.
It will be.
In the in the money, in the money, yes, add the money or out of the money? Depending on where is the underlying, you have both an option in one year time, and in one year time, lot of things can happen, and the option that you can you have all will be in the money, in the money, add the money.
or out of the money. I sense, would you ever buy, would you ever buy an out of the money corruption?
Depends on the price, depends on the price. The price of the of and out of the money, out of the money, call auction would be pretty small.
Like, play, go to.
If you pay a little, there are chances for the price to go up. And in case the price go up, you can get a lot of money.
OK, make sense.
Let me go quickly.
Value of a call option at expiration, yes?
Look here, look that, look the formula, and look here.
Down the line, that's it.
On P.
On inspiration, yes?
What if this S?
Denderland, nothing. Wait.
On expiration, make sense?
Where is the payoff, the amount of money that I will receive?
We want to distinguish between.
Underlying asset being higher than X is, we will distinguish between the underlying asset.
higher than the strike and lower. What if the underlying asset price is lower than the strike? I will receive zero.
If it is higher, I will proceed the difference. Except.
Okay, let's see one example.
Ohh, and this example is exactly the same example that you that you got on the make sense.
Pay off, I'm pro.
Any questions?
If there is a buyer, is because there is a seller, but because before, sorry, before looking, what is going on with the seller? Let us see the put ups here. Yes.
Put option, yes.
Let me say your question.
A view of the option is that they grab you up from the left.
And we have this structure, make sense.
Okay.
This is.
Is the graph for the buyer?
And if there is someone that is winning, it's because another person is losing. Or if someone is losing it because another person is winning. Remember, it's that zero-sum game. So this is a long call. Let us look at the short.
Core, what is this graph about the graph for the?
Teller of the court make sense.
Okay.
Careful with this.
Careful with this, the graph is the one you got on the lap.
Do you want me to make this graph? It's simple. Do you want me to make the numbers?
These numbers are, yes, these numbers, but with the opposite sign. Yes, you take these numbers and...
Yes, you make. Pay off.
Negative 20, negative 10, and profits.
Negative 10, zero, and 10, 10, 10, positive. Yes, you just making these numbers negative, but careful with one thing, because...
Hey, drip.
Great, this is the question you make me, you ask me these people.
Is all it?
How long was it?
That's all I'm saying.
Delhi.
You buy a call?
You state the price of the to go up.
You buy a call, you are not.
You sell the gold, you are short because you are selling the gold, but you are also short because you are expecting the price of the drain asset to go down. What does to be short mean? To stay and then go down, yes?
With calls, there are no problems, but when talking about boots, when talking about boots observers, careful.
I'm talking about food, because if you sell the food, you are short in the food, because you are selling the food.
I need you.
Sir, the book, what do you expect the price of the underwriter?
Right, so.
Oh, you're welcome. You're welcome.
Probably one question that you can find in the time, yes?
One question that you can play in the final. I don't know how.
But the question is...
How can you expect the price of the stock to go down?
How can you get?
For me, we are expectations.
The question would be.
B.
Long with yes.
Hey, be in love with the other.
Long with a call.
Four.
Long with Abu.
You expect the price to go down, you will be what you will do is.
So the spell, so the call for by.
I am.
Yeah.
When you say logs, but does that mean you're holding?
Not, not for a long time.
Long answer has to do with five or seven.
Options, no matter if you buy or sell them, are the whole deal expiration bank.
Options? You buy or you sell an option?
You buy? No, no, you said you are so regarding the option. Did you buy an option?
You will hold the option, you can set it there, and the option will work with experience.
Ana, I see.
So, being short or long has nothing to do with that. It has to do with your position. If you are a buyer, you are long, if you are a seller, you are short, but careful because if you expect the stock price to go up, you buy, you are long, and if you buy goods,
Bye, you are in a sort of posing.
Have you heard that OMG is not that or Gay I Bobbin is going to explode?
Have you heard about short positions?
All people get short positions by value.
Fine, which is what for people that wants that things that that makes sense? Yeah, so if you think that's why would you?
You either short the asset or buy a foot.
You can sort it normal, right?
What's the why would you do this?
Tell me.
Options, I can let me, did I share with you?
Let me, yes, I'm gonna share with you a man.
Here.
I'm not gonna dedicate, I'm gonna jump. The one.
****.
Regarding.
Regarding options and strategies, I'm going to jump. I'm going to jump in. Yes. Why? Because this is yes.
Enough, peace.
I'm going to share with you. I did this.
Garvía dot S.
This is mine.
So in AI, and what are the derivatives?
Everybody is.
Options of strategies is one.
Quickly. Copy.
Okay.
Here.
Here you've got a first thing, instead of Spanish, English, yes?
And, for example, what is a bull spread? You can construct a bull spread with...
Bones or with boots, yes?
Look here, here you've got.
A call with a strike of 90? You are buying a call with a strike of 90? Do you see it?
And you are selling a call with a strike of 110. If I just bought, if I would have just bought the call, yes?
If I would have just go.
I just go, the goal, it will go. If I buy together, the goal.
And then I sell another call with 110. Once I hit 110, it will go back that way. Make sense?
Yep.
Do you see first call, second call, it goes up, 15, and then continue. I sense.
This is the result of fine.
This is the result of buying.
One call and sorting another call. You can construct same figure.
With boots, yes, and whatever.
Pull spread and bear spread. Pull when the market goes up.
What do you call American going up?
The market is...
Police, have you ever heard this?
When the market is bullish, is when people think that the market is going to go up.
And if the market is bear berries, is when people expect the market is going to go down. Yes. What is a bull spread is 1 combination that will make you more make and I think some of the money in case the stock goes up.
If the stock goes up, you will make a fixed number one.
This is a trick. If you want to make a fixed amount of money, no matter how much, how high you buy this, you will get it. Then.
Regarding volatility, you can buy and buy, you can buy a put and buy a call with the same strike.
If you buy together a call and a put with same strike, you will have this figure. This is called a struggle. What is a struggle with a different strike and yet? Are you following me?
Also, iron condor. What is an iron condor? In this case, you buy a food, you sell a food, you buy a call, and you sell a call. Yes, you buy different things.
I don't want to be to spend now.
Too much time with this, this is a struggle.
This is a bear and bull spread, yes?
Then I call out.
What is a collar? Let me show you the collar.
Oh, there are no callers.
What is a collar?
He just buy here, you got a color is.
Combining the call.
Let me, instead of the collar, let me explain you and the butterfly spread is here. Let me explain you.
Let me explain you this answer to your question: why somebody will buy?
Why somebody will buy?
The option, instead of buying Microsoft, in this case, stocks, yes?
Are you following me?
I'm going to compare buying Microsoft stocks.
With buying a call option with a strike of seven, make sense.
Let me just take Excel quickly for this Excel here.
Here.
I'm gonna hear what is Excel.
Yeah.
Stock prices.
Stock price is 70.
And I'm going to compare buying 100 shares of Microsoft with buying 700 call option with a strike of 70. The price of the call options is 10.
The price is 10, this is.
So, today...
Paul, today the price is 10, yes?
And I'm gonna compare buying 100 serves, we buy 700 caller ships, yep.
I'm not going to change again till I finish the exercises. I'm going to compare.
Fine, how many stocks?
Hundred stocks, how many call options?
Seven 100. Yep. So, the amount of money that I'm going to pay is, in both cases, 7000.
Make sense now.
What is going to be the price of the stock in the future?
I don't know. I mean, yes, 50, 60.
And we draw different scenarios.
Yep.
They stop, yes?
If I buy the stock, what I'm gonna do is...
To sell.
To sell.
Under the stocks, sorry, say ah.
What I'm going to do is to sell 100 stocks at this given price. Make sense?
And I will get...
A thousand.
This is the amount of money that I will get by selling. Make sense?
I'm going to calculate here HPR. Yep, HPR is going to be.
Five 1000 over.
David Felton.
Minus one, yeah.
My HPI, yes.
This is my HPR.
Make sense?
Now.
With a call.
Strict.
If it is 50, I would have lost all my money.
So, my payoff would be...
Zero, no?
And it would be 0 to 70, yes.
And if they, if this is...
If the underlying is higher, how much money I will be making?
80.
Minus.
The strike, the strike, yes, the strike that is 70 makes sense.
Times.
The number of stocks of the number, sorry, of call options that I have bought. Make sense?
I would get 7000. Tell me, would you subtract?
No, this is the payoff.
Here, when talking about the stock, I'm talking about the payoff. When talking about the call, I'm talking about the payoff. And now I'm going to calculate HPR.
And when calculating HPR.
Is future value over present value that is 7000?
Yep.
Minus one, and this would be -1 that in percentage would be 100. I would have lost all my money. Make sense?
What is the point? Why someone will use, why if you think the stock Microsoft stock is going to rise?
If you buy...
Stop.
Did you buy this stuff?
You can get, imagine that the price of the stock.
Price to 100, yes? You are buying the stock, you will get a profit of forty-three percent.
What did you buy?
Options, you will make your money double. You will double your money. You will have 200% return.
Yeah.
What is the idea? You are liberating.
You are making much, much more money; you are getting much, much more return, but getting much, much return means...
More, please.
You can lose everything, make sense?
Have you understood this use of options?
You are liberating.
And let me...
So, you...
This is, these are the numbers that I have made. Yep.
Or less?
You buy one under certain Microsoft, yes?
Buy 100 call option and invest 6000 at the risk rate. I have not considered this SNI. Yes, you can do it by yourself.
Any questions?
Let me move, move, because not only you can use options in order to speculate.
You can also buy options.
Sorry, yes, buy options in order to heads, yes.
You own shares of Microsoft and current price is 70.
How do you limit your possible losses by trading options?
What I'm going to do is, I'm going to buy...
Together, I'm going to buy.
Microsoft, so yes.
I'm going to buy Microsoft stock.
And combined with Microsoft Store, I'm going to buy.
A put option with a strike of 70.
This is what I do. Let me drop here. Next day we will talk about this with more detail, but please.
I'm going to buy Microsoft, yes?
I'm going to draw the tail.
Please, this is really, really simple, but you need to see it.
Great. Anastasia.
I'm going to draw the payoff of my stock. What will be the payoff of the stock?
It will stop work.
7P.
The payoff of the store will be 17. All of you understand the line.
Yes.
I'm going to buy together with the stock.
Aku.
What is going to be the graph of the book?
I'm talking about payoff, yes?
Who is going to make this, yes?
You follow me?
Now, I'm going to draw, I'm going to draw.
I'm gonna sub for you, yes?
Let me start with this thread, yes?
Seventy, 70 + 0.
Good, Benito.
Seven.
Seventy plus zero, 70, yes.
Now, if the stock price is forty-five, what is going to be the stock? What is going to be the payoff of the stock forty-five?
And you can or let me just let me go to 60, yes?
If the stock is 60, what is going to be the payoff of the book then?
And what is going to be the payoff of the stop? 60 plus 10, 70.
What is going to be my payoff?
A piece amount of...
Makes sense.
And then, once I reach this point...
Where is this school?
This is called a protective book.
Protecting food, they buying an insurance.
What is the price of this? The price of the loan. You pay the premium. Excellence.
Are you with me? Have you understood this? One more thing, quickly, quickly, quickly.
We.
Ohh, sorry, but this is important. Next day, we will continue with this.
I'm gonna buy it together.
A call option? Do you see this is a call option?
Yes.
And I'm going to buy, together with the call option, please, together with the call option, I'm going to buy a bond with a face value of 7.
About with paid value of 70, I will receive 70 for sure. Make sense?
This is a call, this was a food, this was the stock, yes?
I'm gonna buy a bone with face value equals to the strike, with face value equals to seven, yes?
What I'm going to do, I'm gonna sum again, I'm gonna sum these payoffs.
Zero plus 70, zero forty-five, 0 + 70.
Seventy, I'm reaching this point.
Yeah.
What do I have wrong? What is this? This is a boot plus a stop, yes?
What is this? A goal plus a bond with face value equals to the strike. Make sense?
No.
Brain and breath. These payoffs, these payoffs, you see what is written up, what is written down. These payoffs are.
The same, no?
This same price. We will talk about this next day. This has to do with the whole food party. Next day, I will start with that. I will review that. I will repeat that. But I want you to have the dates for whole food party.
Makes sense.
Let me just finish with the slides. This is the protective food and more things, but you can forget about that. One last thing, one last thing, one last thing, one last thing.
Careful with ignition, ignition, you can Google ignition.
Short, Australia, yes, in Japan market.
One day there was an earthquake and he made his bank lose all his money. He made the bankruptcy of his bank. Careful with anybody, careful with shortage, because if you buy an option, you can lose everything. You can only lose everything. All your, no, everything.
The amount, the amount of money that you have paid. But if you sold options, you can you can lose much more than the money you have received are so busy. Make sense?
No, sorry for I owe you time.
Yes, I'm I have stopped there.
