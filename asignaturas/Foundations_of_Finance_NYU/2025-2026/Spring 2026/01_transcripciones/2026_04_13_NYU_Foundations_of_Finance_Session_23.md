# Foundations of Finance – Session 23  
**Date:** April 13, 2026  
**Topic:** Derivatives II – Option Value Before Expiration, Put-Call Parity, and the Binomial Model

---

## 1. Why this class matters

This session is one of the most important in the derivatives block because it answers the key question that naturally follows the previous class:

> Last class we studied the **payoff of an option at expiration**.  
> Today we move to the harder and more realistic question: **how much is an option worth before expiration?**

That is the real challenge in derivatives.

At expiration, valuation is easy:
- a call is worth either **0** or **\( S_T - K \)**
- a put is worth either **0** or **\( K - S_T \)**

Before expiration, however, there is still time left, uncertainty remains, and therefore the option has additional value.

That is the central idea of today’s session.

---

## 2. Quick recap from the previous class

Before moving into valuation, we reviewed the foundation:

### What is a derivative?
A derivative is a financial instrument whose value depends on the value of another asset.

That other asset is called the **underlying asset**.

Examples of underlyings:
- a stock
- a bond
- a commodity
- an exchange rate
- an interest rate

The point is simple:

> To value the derivative, you must understand the underlying.

---

### Options introduced last class
We already saw that an option is a contract that gives a **right**, not an obligation.

There are two main types:

- **Call option**: right to **buy**
- **Put option**: right to **sell**

And we distinguished between:

- **Strike price \( K \)**: the contractual price
- **Underlying price \( S \)**: the market price of the asset
- **Premium**: what you pay today to buy the option

---

### Payoff at expiration

For a **call option**:

**$$
\text{Call payoff at expiration} = \max(S_T - K, 0)
$$

For a **put option**:

$$
\text{Put payoff at expiration} = \max(K - S_T, 0)
$$

This was the key language from the previous class.

---

## 3. Today’s central question: what is an option worth before expiration?

At expiration, the value is mechanical.

Before expiration, the option value is more subtle because:

- there is still time left
- the underlying price can still move
- the option might still end up in the money even if it is currently out of the money

This is why the professor insisted on the key intuition:

> Before expiration, an option is not just “0 or something”.  
> Before expiration, there is always **a chance**.

That chance has value.

This is the origin of **time value**.

---

## 4. The deep intuition: “Russian roulette” logic

The professor used a very strong metaphor to make the intuition memorable:

> Buying an option is like facing two very different scenarios:
- one scenario where you lose everything you paid
- another scenario where the contract becomes valuable

This does **not** mean options are random gambling instruments by nature.  
It means that their payoff structure is **highly asymmetric**.

That is the key.

### If you buy an option:
- your downside is limited to the premium
- your upside can be significant

So the structure is:

- **bad outcome**: lose the premium
- **good outcome**: gain from favorable price movement

That asymmetry is what makes options special.

---

## 5. Intrinsic value vs time value

This was one of the most important conceptual distinctions of the session.

### Intrinsic value
Intrinsic value answers the question:

> If I exercised the option **right now**, how much would it be worth?

For a **call**:

$$
\text{Intrinsic value of a call} = \max(S - K, 0)
$$

For a **put**:

$$
\text{Intrinsic value of a put} = \max(K - S, 0)
$$

---

### Examples

If a call has:
- underlying price \( S = 110 \)
- strike \( K = 100 \)

then intrinsic value is:

$$
110 - 100 = 10
$$

If the same call has:
- underlying price \( S = 90 \)
- strike \( K = 100 \)

then intrinsic value is:

$$
0
$$

because you would never exercise the right to buy at 100 something you can buy in the market for 90.

---

### Important distinction

The professor stressed that:

- **payoff** is the value at **expiration**
- **intrinsic value** is the value **today if exercised immediately**

These are not exactly the same concept, although they look similar.

---

### Time value

The total option premium is generally greater than intrinsic value.

Why?

Because before expiration there is still uncertainty and therefore still opportunity.

So:

$$
\text{Option price} = \text{Intrinsic value} + \text{Time value}
$$

This means:

> Even an out-of-the-money option may still be worth something today, because there is still time for the market to move.

This is one of the key ideas of derivatives valuation.

---

## 6. Why an option can be worth more than its intrinsic value

Suppose a call is currently out of the money.

Example:
- stock price = 95
- strike = 100

Intrinsic value is 0.

But if there are six months left until expiration, would you pay absolutely nothing for it?

Not necessarily.

Why?

Because there is still a chance that the stock may rise above 100 before expiration.

So even with intrinsic value equal to zero, the option can still have positive market value.

That extra value is **time value**.

The closer expiration gets, the smaller this chance becomes, and therefore the smaller the time value tends to be.

---

## 7. Put-call parity: the key identity of the session

This was the conceptual heart of the class.

The professor returned to the payoff diagrams from last session and used them to derive one of the most important equalities in derivatives:

$$
P + S = C + PV(K)
$$

Where:

- \( P \) = put price
- \( S \) = stock price
- \( C \) = call price
- \( PV(K) \) = present value of the strike

This is called **put-call parity**.

---

## 8. How the parity is built intuitively

The professor did not start with formulas.  
He started with payoff diagrams.

### Left-hand side: stock + put
If you hold:
- one stock
- one put with strike \( K \)

then at expiration:

- if stock price is below \( K \), the put protects you
- if stock price is above \( K \), the stock appreciates and the put expires worthless

The resulting payoff is:
- flat below the strike
- upward sloping above the strike

---

### Right-hand side: call + bond
If you hold:
- one call with strike \( K \)
- one bond that pays \( K \) at maturity

then at expiration:

- the bond guarantees the strike amount
- the call gives upside above the strike

The resulting payoff is exactly the same as the previous portfolio.

So:

$$
\text{Stock + Put} \equiv \text{Call + Bond}
$$

And because the future payoffs are identical, today’s prices must also be identical.

That is the **law of one price**.

---

## 9. Why put-call parity matters

Put-call parity is not just a formula to memorize.  
It is a structural relationship that lets us do several things:

### It lets us:
- infer the price of a put if we know the price of the call
- infer the price of a call if we know the price of the put
- detect arbitrage if prices violate the relationship
- understand that options can be replicated using other instruments

This last point is fundamental.

> Derivatives pricing is based on replication.

That is why arbitrage and replication are so central to finance.

---

## 10. A practical version of put-call parity

The professor emphasized a very exam-relevant idea:

If you are given:
- the price of a call
- the stock price
- the strike
- the interest rate

then you should immediately think:

> This is a put-call parity problem.

Because from:

$$
P + S = C + PV(K)
$$

you can solve for any missing variable.

For example, solving for the put:

$$
P = C + PV(K) - S
$$

This is exactly the sort of question that appears in professional certifications and exams.

---

## 11. American vs European options

Another conceptual point from the session.

### European option
Can only be exercised **at expiration**

### American option
Can be exercised **at any time up to expiration**

So American options give more flexibility.

This suggests a basic principle:

> An American option should never be worth less than the equivalent European option.

Because it gives at least the same rights, and possibly more.

---

### Important subtlety for calls
The professor emphasized an important result:

For a call on a non-dividend-paying stock:

> Early exercise is generally **not optimal**

Why?

Because if you exercise early, you give up the remaining time value.

So in practice, selling the option is usually better than exercising it early.

For puts, early exercise may sometimes make sense depending on the situation.

---

## 12. The binomial model: first serious valuation model

This was the second big pillar of the session.

After intuition and parity, the professor introduced the **binomial model**.

This is the first formal mechanism to compute the value of an option before expiration.

---

## 13. The logic of the binomial tree

The idea is to simplify the future into two possible paths over one period:

- **up state**
- **down state**

So if today the stock price is \( S_0 \), then in one period it can become:

- \( S_u \) in the up state
- \( S_d \) in the down state

---

### Example used in class
The professor worked with a one-period binomial setup where:

- current stock price = 100
- strike = 105
- risk-free rate = 2%
- possible future stock prices = 137 or 73

Then he computed the call payoff at maturity:

- if stock finishes at 137:

$$
C_u = 137 - 105 = 32
$$

- if stock finishes at 73:

$$
C_d = 0
$$

So now we know the future option values at the two terminal states.

The question becomes:

> What must the option be worth today?

---

## 14. Replicating portfolio in the binomial model

The professor then constructed a portfolio using:

- \( \Delta \) units of stock
- \( B \) units of the risk-free bond

The goal is to replicate the option payoff in both future states.

So we solve:

$$
137\Delta - 102B = 32
$$

$$
73\Delta - 102B = 0
$$

These two equations let us solve for:
- the number of stock units needed
- the number of bond units needed

Once that replicating portfolio is identified, the current option price must equal the current cost of that portfolio.

This is again the law of one price.

---

## 15. The deep meaning of the binomial model

This is the most important conceptual takeaway from the binomial section:

> A derivative can be valued by building another portfolio that behaves exactly like it.

That is the essence of derivative pricing.

You are not trying to predict the future perfectly.

You are constructing a portfolio such that:
- in every relevant future state
- it matches the derivative payoff

And then:

> same payoff ⇒ same price

---

## 16. Why the binomial model matters so much

The binomial model matters because:

1. It is intuitive  
2. It is based on no-arbitrage logic  
3. It is the bridge to Black-Scholes  
4. It teaches the replication logic explicitly

The professor stressed that once you understand the one-step binomial model, you are already very close to understanding the logic of Black-Scholes.

---

## 17. From one-step tree to many-step tree

The professor also showed the dynamic version in Excel:

- one period
- then two subperiods
- then more and more branches

As the number of steps increases, the valuation becomes more accurate.

This is a crucial idea:

> Black-Scholes can be seen as the continuous-time limit of the binomial model.

So Black-Scholes is not disconnected magic.  
It is the refined, continuous version of a no-arbitrage binomial logic.

---

## 18. Black-Scholes as “binomial to infinity”

The professor did not derive Black-Scholes in detail today, but he clearly positioned it:

- today: intuition + binomial logic
- next class: Black-Scholes formula

This sequencing matters.

You should not approach Black-Scholes as a formula to memorize first.

You should approach it as:

> the final compressed form of a replication-and-no-arbitrage idea

---

## 19. Main conceptual flow of the session

This is the clean intellectual map of the class:

### Step 1
Understand payoff at expiration

### Step 2
Distinguish intrinsic value from total option value

### Step 3
Understand that before expiration, time value exists

### Step 4
Use payoff diagrams to build put-call parity

### Step 5
Use no-arbitrage logic to connect prices

### Step 6
Use a binomial tree to price an option before expiration

### Step 7
See Black-Scholes as the limit of this process

---

## 20. What you must know from this class

You should leave this session with the ability to explain the following ideas clearly:

### A. Intrinsic value
- what it is
- how to compute it for calls and puts

### B. Time value
- why option price is above intrinsic value
- why out-of-the-money options can still be worth something

### C. Put-call parity
$$
P + S = C + PV(K)
$$

- what each term means
- why the identity holds
- how to use it to solve for missing prices

### D. American vs European options
- difference in exercise rights
- why American options are at least as valuable

### E. Binomial model
- up and down states
- option payoff in each state
- replicating portfolio
- same payoff implies same price

---

## 21. Big-picture lesson

This class shows the true logic of derivatives:

> Option pricing is not guesswork.  
> It is not astrology.  
> It is not “I think volatility will do X.”

It is, at its core:

- payoff analysis
- no-arbitrage logic
- replication
- discounting

That is why derivatives, despite their intimidating reputation, are conceptually elegant.

---

## 22. Final message for students

This class introduced a new language.

You are now expected to become comfortable with terms like:

- intrinsic value  
- time value  
- call  
- put  
- strike  
- premium  
- underlying  
- put-call parity  
- binomial model  
- replication  

At first this can feel artificial. That is normal.

But this is exactly how fluency begins.

> The sooner you practice this language, the sooner derivatives stop looking like chaos.

---

## 23. Final takeaway

If you remember only one sentence from this session, let it be this:

> The value of an option before expiration is not just about current payoff.  
> It is about the value of **future possibilities**.

That is the essence of derivatives valuation.


# Transcription
13 de abril de 2026, 5:05p.m.
1 h 12 min 21 s
One more thing: today's class.  
Oxygen Two.  
Play.  
Sing, Singh.  
Yeah.  
I love you.  
I don't know who else is listening, but there is one more person.  
Sam is busy, and also paper.  
I need. I didn't have it. Sorry. But it should be there. I understand. Understand your concern.  
Not too much, really.  
Not yet, at least.  
Play the song.  
Hello, Mom.  
Mmh.  
Right.  
I.  
Play music.  
You.  
I think.  
Okay.  
No.  
Yeah.  
Oh.  
Play.  
I mean.  
Restart.  
Start the.  
Back around last class. Do you remember introduced last class? What is a Ricardo?  
It's a financial instrument whose price whose price derives from another financial instrument. How are we going to call this second financial instrument?  
They're lying to us, yes, so in order to price, in order to price.  
The derivative, we need to know what is the price of that, yes?  
What is going to be the price of the underlying asset in the future? We're talking about...  
An option.  
You can know, we can know, and because of that, we grow alive.  
You grow a life, and we don't know what the price is going to be in the future of the underlying.  
But we know at which price.  
We got five or seven. We know that Friday.  
The strike is peace. Make sense?  
Depending.  
What is the relationship?  
Between, describe, and underline, yes.  
We saw that with the derivative.  
You got a maturity, win or lose. Make sense?  
We introduce features, we introduce features, and we didn't talk too much about features, because we will talk about features next Monday, yes?  
We introduce pictures.  
And also, we were talking about objects.  
When buying an option.  
Gonna buy it, and I'm sure you don't buy it.  
I think in the future, you just buy the right.  
You just buy the right to buy.  
427. Make sense?  
Bye, right, bye.  
We call it, buy a call, buy right is a call option, yes.  
Buy, right? So, same as saying, buy a food. Make sense?  
We can buy calls, but also we can sell calls. Same with books. When you buy a call, you say you are buying something because you are paying. How much are you paying? The premium.  
Okay.  
Thinking about that call.  
I'm gonna take this.  
Speaking about at all.  
The.  
****.  
You buy the right?  
What the payoff is going to be?  
Question is, when will you exercise your right? When will you exercise your right? I will exercise my right.  
Yes, when?  
When I will buy at the strength.  
I will buy it as when the underlying price is higher than this price. Make sense?  
Ana.  
Mind that this is 100 and this is the underlying worth 110. What I will do, I will buy for 100 and immediately after sale for 110, so my profit will be of 10. Make sense?  
What is this?  
This is the graph.  
Trophy or losses. This is the graph.  
Or the payoff.  
At maturity, make sense, pay off at maturity.  
Are you at the end? Make sense?  
What is?  
An option. It's a contract. It's a contract that I pay in order to get the contract. How much this contract worth at the end? The underlying asset.  
Worth less than the strike, I can take the contract and throw it to the trust.  
Yes.  
Hi.  
Can the lioness think is worth more than the strength?  
More than the strike.  
Yes, the underlying asset is worth worth more than the strike. I will get the contract will worth the asset difference. Make sense?  
Okay.  
What we will? What did we? What did we saw? What did we see?  
Function.  
What did we see?  
All last class.  
How much this word and naturally, yes?  
What are we gonna?  
What are we gonna see today and this Wednesday?  
How much a contract worth?  
Before, make sense.  
Okay, this one first idea, that this idea will be with us for today and next class. I introduce this idea.  
Yeah.  
Last Wednesday, the idea is when buying an option.  
We are playing.  
Do you know what is Russian bullet?  
We are playing Russian roulette.  
What does this mean?  
Sorry for the.  
For example, is probably not the most appropriate.  
But when playing Brazil bullet.  
There are two possible scenarios. Make sense?  
One scenario.  
Is really, really, really good.  
And another scenario that is.  
A real, real, real disaster. I sense just one of two.  
Do you buy Estepa?  
There is one price, yes, but when talking about options.  
This big zero or what? Zero or what? You understand what I'm saying? We will repeat it. I will repeat it again. But this we will keep this idea in your head. But the price is going to be.  
Zero.  
Or something.  
That's true. You lose everything or you win. Make sense?  
Zero.  
Or?  
One.  
Nieta.  
Think about this one.  
Yes.  
The probability of...  
Out of the money, or the probability of anything in the money, I sense.  
Imagine.  
Imagine six months left till maturity.  
Six months late till naturally.  
Will you pay something?  
Would you pay something if the underlying lease out of the money?  
Would you pay something?  
Six months left in Naturi. What I'm asking, would you pay something?  
Nothing.  
Will you pay something? Yeah, I mean, there's always. That is always. This is what I was looking for. That is always a success. So.  
So, when you pay something, it is always a chance. Make sense? Because there is always a chance.  
Because there is always a chance.  
That's not what I mean, the more I get closer.  
Two.  
The more dunderline acid, get closer to the strength.  
The more chances.  
I sense.  
And what are we gonna see today?  
What are we gonna say today?  
That.  
Once.  
Black.  
In the morning.  
Will it make sense to pay a little bit? Yes, it will make sense.  
And always, you will receive more than the difference, why? Because...  
There is always a chance.  
Going up, and when going down, there is a flow.  
Make sense?  
OK, with this idea.  
Is that the idea? No.  
And where is this?  
What is this?  
But does this graph got to say?  
That graph represent.  
the price of the gold, how much you will pay, how much you will pay in order to buy. This graph represent.  
The premium at a given time. Make sense?  
Are you with me?  
Okay.  
Then we will work, then we will work with the intuition.  
with the intuition. Next day, this Wednesday, we will work with Black and Souls Formula. Black and Souls Formula.  
I'm gonna stare.  
No, I'm gonna know. I have already, sir, but I'm looking for them. What is the mouse? Here it is.  
Back.  
Michael, I'm gonna come.  
Hey.  
Yeah.  
Next day, I will give you an extra 5.  
Because.  
With AI, you can have the temptation of never again using Excel, using Word, using PowerPoint.  
I don't know yet how the new world.  
With AI.  
Is going to be...  
But...  
I recommend you to continue playing sports, continue writing, continue using Excel, continue using...  
I can play, but yes, let me, let me.  
So, you?  
Last class, I am, I am so far from the table.  
Yeah.  
Last class, I showed you most of these ones we just showed you today.  
Thank you.  
OK, what do you have here? Like and source formula for a call.  
Next day, we will be...  
Next day, we will be playing with time, the more than time in maturity.  
The more the price, the less the time.  
The lesser ones make sense.  
Next day, we will walk with the call.  
Formula, the next day I will show you the food. Why this is below because of the time value money. Let me just...  
Here, I take this.  
Zero.  
You will see that this does not go, you know, but whatever.  
Call.  
Make sense?  
Take the call.  
Delhi.  
It's.  
I have gone so far, sorry.  
with rate of 3% or 2%?  
Perfect.  
Makes sense.  
Is this?  
Okay.  
Then, let me start with...  
No.  
This is.  
What are we gonna talk about today?  
How to get the value of an option before experience?  
I will introduce first the notion of intrinsic value, then the minimum value, and then put for value.  
We talk about the last class. I don't know if you remember the end of last class, at the end of last class with the protective code.  
I talk about this, then we will finish today's class.  
Talking about...  
The binomial model and approaching the intuition of how to get the value of a goal, and we will see that.  
At the end.  
A call or a boot?  
can be considered as a portfolio that combines a bond and a store. We will talk about this at the end of today's class. Yes?  
Let me start.  
If you have understood.  
You have understood what I have said.  
You have all intuition for today's class. You have understood these things. We are almost done. What is the intrinsic value?  
What is the intrinsic value?  
People, instead of waiting.  
Instead of waiting in maturity.  
Imagine that I can exercise the stock just right now. If I can exercise the stock just right now, increasing value will be...  
For the call, I don't know why did I erase it.  
Intrinsic value for the call.  
Will be the payoff.  
What is the difference between the payoff and intrinsic value?  
And they pay off.  
Please, MP.  
The payoff is in T, yes, of time T, and increasing value.  
happens with today's products. Make sense?  
Okay.  
Knop.  
Quick questions.  
Why is the intrinsic value often out of the money call?  
Yeah, what is the intrinsic value for a Vega? What is the intrinsic value for an out of the money call? What do you see?  
Thanks.  
What is increasing value of an in the money call?  
Difference between the strike and the price.  
The difference between the price of the underline and describe makes sense.  
Which is great there.  
The increasing value, or or the option price, which is greater.  
It will always be greater the polls price. Why? Because there are always tasks.  
There are always tests, or strike will be, or will always be great.  
And the difference between the ocean price and the intrinsic value is called time value of the ocean. What is time value of the ocean? Just considering the time value of money effect is just...  
These difference, yes?  
What is this difference and value of money? Make sense?  
Is it an interesting value?  
This is the value.  
Okay.  
What is that value? So, so see.  
Yes.  
Yes.  
Let me look for, let me show you. Yes, this one, and I'm going to go back to the other one.  
This is, is it value?  
This is that, yes.  
a non-continuous line that yes for increasing value is considering 10 value of money and then with both.  
You have some money.  
Yep.  
Okay, let me go back to previous slide.  
But I don't want you.  
I don't want you to see previous slide, and I want first to explain previous slide. Make sense?  
From last class, the protective boot. What was the protective boot?  
The protective foot was binding together.  
Because that people was tying together.  
Bind together.  
I put on, yes.  
Who does you?  
With it, stop.  
Makes sense.  
Sofia, did you get that?  
Do you understand these two graphs?  
You know?  
Don't listen.  
Do you understand?  
What does this represent?  
Intrinsic Valley. Intrinsic Valley. No, no, no, no.  
I have forget about this graph. Yes. What does this graph represent?  
This graph represents the payoff of Abu.  
This is the payoff of a pool.  
Look here.  
His number?  
Is a strike.  
What is I put the right to sell at a given price? I can sell, for example.  
Yes.  
Sophia, which you sell for 120, something that can be sold for 100?  
Sorry, sorry, will you sell, will you sell for 100?  
Something that can be sold for 120.  
No. So if the underlying worth more, you won't exercise your right.  
Makes sense.  
Now, what if it is 90?  
What if the price is 19?  
Would you sell for 100 something that you can buy for 90? Not only you will sell it, but also you will get 10.  
The slope of this, the slope of this is what?  
Two, negative one, two will get.  
One dollar?  
For its owner.  
Of difference with the strike makes sense.  
This is the day of Fort Apul.  
Now, Sofia.  
What does this represent?  
This is the payoff.  
The underlying is a stop.  
And their line is a scope, yes?  
If they stop, worth.  
100, you buy the stock, you will get 100. The stock worth 10, you will get 10. This is the payoff.  
Or they stock, bye bye the stock, I will get this payoff.  
What are you?  
What am I going to do? I'm going to combine the food and the stocking up in one portfolio.  
I'm going to send their fails. Yes? Let me start with the strike.  
Have you?  
Yes.  
Andre, because this is straight, makes sense.  
With me?  
Would be.  
100 makes sense.  
Knop.  
This is 0.  
Is the other lady zero?  
I will get.  
I have you.  
If this is how 50.  
It will be also hard. I will get 100.  
So, this will be...  
No.  
This plus this, you say?  
is flat and will work 100. From this point in advance, the food will be 0, and I will just have.  
Another line.  
Makes sense.  
Let me draw this in breath.  
What?  
What does this represent?  
These represent.  
A food, the payoff of a food plus the stock.  
Makes sense.  
Okay.  
I wanted to combine.  
Now.  
I call Osium.  
Is that even?  
With the same strike.  
Yes.  
I'm going to combine this with a ball.  
With a bone that will have as face value, the strike.  
What will be the payoff of this bond no matter what the underlying asset price is?  
Face value of the bone at this.  
That's right.  
Makes sense.  
Yep.  
What is this?  
Yo.  
But that's this 100%.  
You buy a bone with face value of 100 at maturity.  
No matter how much underline us and worth, you will get a fixed amount of money. You will get 100.  
Make sense?  
What I'm gonna do with these two graphs?  
I'm gonna...  
Something.  
Again, zero plus 100, 100.  
And.  
In the fry.  
Deal, plus 100, 100. Make sense?  
And now I should add 100, the return that I will get.  
Is my call?  
So...  
Sam.  
Is this one, and what does this represent?  
This is a call.  
This is a strike.  
And these groupings in.  
I call last.  
Right, make sense.  
Make sense?  
You understand it?  
Okay.  
Then, what do we have on the left and what do we have on the right?  
Same field.  
Then pay off, so at maturity.  
Maturity, I can say that I'm good.  
With one strike, yes, the poop with one strike.  
Less.  
The stock.  
Yes.  
Two people.  
Two, the food, sorry, two, the gold.  
You work less?  
Makes sense.  
This is. Do you remember from Arbitrat, same pay us, same price today?  
If these two things, a maturity will have same payoff.  
Play the price of the call.  
Plus, the snow today, I have changed three.  
For today, yes, the price of the food.  
Glass stop.  
It's gonna equal to the whole.  
Class.  
Excellence.  
I'm going to rewrite this.  
And it's the same. I can write present value in this way, but also I can write present value.  
On this way, you don't need to know anything regarding E raised to minus r * t. You just need to know that it means the same, that this works. This works better for continuous time.  
Yes, this works better, more continuous then. Make sense?  
What does this formula mean? This formula means that if I know the price of the coal is a given strike, I should know the price of the coal in the same strike. And if not, arbitrage. Yes?  
day and next day, we will get how to get, we will see how to get the price of the coal. And once we know the price of the coal, what we will do in order to get the price of the food. We will pay the price of the coal, we will add.  
We will add the bone and we will subtract the stock in order to get the food with same strategy. Make sense?  
All of you are with me.  
Okay.  
Oh, I'm going back. I'm going...  
Okay.  
I'm going to previous la.  
I'm going back. Yes?  
Sure.  
These are just increasing value, so was.  
That demonstration, yes.  
I prefer to show it in a graph way than with numbers.  
Okay, now.  
Food called Ali.  
Put what I have already done, yes.  
If I know.  
But it is.  
Uncle.  
The price of the gold minus the price of the cook plus the strike is the stock.  
What they are doing is just taking this food to this side that this is the same formula from one perspective or another perspective. Make sense?  
Okay.  
Do you know what is CFA?  
Have you heard of CFA?  
C certificate, financial advisor, CFA, that is CFA, one, two and three. CFA are three certifications.  
Give 3 certifications that I have a lot of tests. One of the typical questions when you.  
Ruiz.  
This can apply also to the final. You read, you have the price of a gold.  
We wanna strike.  
What should be the size?  
What should be the price of a pool?  
The same is correct.  
Did you read something regarding a call and a food boat with same slide? You should always know.  
That you are in front of her old school party program.  
Once you know that you are in front of a false good quality problem, and the solution is so, so simple. Why? Because at the end.  
You will have three or four, and you should calculate the four.  
For example.  
Bing.  
Bing.  
All right, zero. Let me see if I have loop.  
Yes, I have blue.  
Beam the rate 0.  
That value of the stripe will be the same.  
If they call call strike system.  
Let me ask first, 105.  
One 105.  
On the strike, please.  
Hundred, yes.  
It calls price.  
His strength, yes, how much is going to be full surprise?  
Five.  
All of you see?  
On the other hand...  
Good price.  
You say?  
All months is going to be first price 30.  
What is?  
Understood.  
Okay.  
Thank you.  
Thanks.  
Okay.  
Thanks.  
What is the difference?  
Between and America.  
And then European, and European helps you.  
What is the difference?  
Yes, I'm thinking about price.  
Who should have?  
For which one will you pay more?  
This is the intuitive way. Why? Because if you think that American options are better, you should pay more for them.  
But what is the point? We will see this through three directs. But I want you to have the intuition now.  
Ask, please.  
Be with me and understand what I'm gonna say.  
Hey.  
Value of the auction.  
Will always be higher.  
And that, yes, increasing value.  
You can choose between.  
Executive.  
For sale in Tiburcio.  
You will always have or return by selling.  
So, when will you exercise your American option?  
Yes, not much.  
Before much anything.  
You executing?  
You will get less than what you will get for selling.  
Yes.  
Makes sense.  
Vega.  
Jessica, sorry.  
You executed early.  
You will get less than the amount of money that you will get by selling.  
Well, you can tell something like this, no?  
or have no digital pain. Is it ever optimal to exercise before expiration? Yeah.  
I can call option on a given is several optimal exercise before expiration. What is the going with the dividend? The price of the call can change a lot because of the dividend. So in this case, you should take not only as the dividend, but you should stamp the dividend and you are in the same case.  
But we cannot predict what the dividend is going to be.  
You can predict it, you will be inside, you will be playing inside information.  
I would make sense.  
Okay, for calls.  
Yeah.  
Take the last sentence. In the absence of diligence, it is never optimal to exercise sports early.  
Thinking about goods, it could be optimal because of time value one. Make sense?  
Ana.  
Gimeno.  
Let me start with one example, yes?  
But he's moved up here.  
When thinking about the binomial model, I have to stop and I have to vote, yes?  
Ana.  
If I can construct.  
The goal, as the portfolio, as a portfolio that combines the goal, the goal set payoffs to have same price, makes sense.  
Okay.  
I want to get the price of what I'm looking for is the price of 1 year.  
Call option.  
with a strike of 105. Make sense?  
I want to calculate the price of a call option with the strike of 105. Make sense?  
And I know.  
That the risk rate is 2 percent.  
So...  
This is today and this is in one year time. Yes, today and in one year time.  
Today, and when you're trying.  
And today, and one year back.  
In the rate is 2%  
Why is the price of a ball?  
Wait.  
Five 100, thanks.  
Binomial model consider each period of time. Yes, two possible scenarios. One scenario where the stock is going to go up and another scenario where the stock is going to go down. Make sense?  
No matter.  
What is the scenario we will have in the future? The bonds price will be the same. Make sense? Bond price is going to be...  
Hundred true and 100 true, sorry.  
Yes.  
Knop.  
Today.  
The stock price is 100.  
and in one period of time. Because we know the volatility, we can calculate how much, what could be the upper value or the down value. So it would be 137.  
Four.  
Then anything. Make sense?  
Why do I have? I have just draw possible future scenarios for this token portable.  
We know this. Why do we know this?  
Why do we know this?  
Because of this has to do always to be part of the problem.  
All this is that.  
And we know this talk, and we know the hope, yes?  
Do we know?  
The price of the call today.  
We don't know the pressure of the call today, but do we know?  
Payoffs of the goal in the future.  
Do we know payoff of the call in the future? Yes. What are payoffs?  
This is a scenario when the store will work.  
If the stock finish work in 73.  
We lie by for 105.  
Something that can be called for 73? I want exercise.  
I write, and this will work, zero.  
Make sense?  
And here, in this scenario.  
We like ball for 105, we like buy, we like buy for 105 something.  
The price is 100 and thirty-seven.  
Absolutely, yes.  
And how much I will get?  
Very true. Make sense?  
Yes.  
The.  
Okay.  
I know bails.  
The future.  
Don't receive a call. Oh, please use it. I thought if you receive a call, you can take. I can be quiet for two seconds. No, no, no. Perfect. I thought that.  
Play.  
Yeah.  
Hey.  
No.  
Oh.  
Hundred.  
What I'm gonna do?  
I'm gonna calculate.  
But is that portfolio?  
I mean, this future is another thinking about the portfolio.  
What I will do in my profile?  
I will combine.  
The stock and the boat, yes?  
Let me start with 137.  
One 100 and 70 is the price of the call in this scenario, yes, I mean.  
Usu.  
Hundred and thirty-seven, yes?  
Times 8.  
Why I am using H? Because I will call H next class H ratio, H ratio.  
I mean, if you see AIDS, what is AIDS?  
The amount of the spoke.  
that I will have in the portfolio. Do I know how much it takes? I don't know it. Yes?  
Minus.  
One 102 times.  
B. What is B?  
The amount of bone.  
And I'm gonna get...  
Yes.  
I am using a negative sign. I don't care. I don't care because I'm using this because I know this is going to be negative.  
because the relationship between the stock and the bond is the difference. And you can keep this positive and you will get this be better.  
And this is gonna equal to...  
Very true.  
How much H. I'm gonna buy, but no, how much B. I'm gonna buy, I don't know.  
And, in order to complete eggs, a big.  
Here I will have second equation, 73 times 8 times 102 times B.  
Is equal to.  
Zero makes sense.  
Yep.  
Don't you see that I can now calculate H&B? Before calculating H&B, I want you to, I want to show you.  
Paul is going to be.  
The call is.  
Price times H minus price times V, sorry.  
You are with me.  
So, the goal is gonna be equal to 100.  
Times 8 minus.  
Hundred times B.  
But I want you to sing with this.  
No matter, no matter.  
What the sign will be is, as you keep same sign, same sign, same letter, and same sign.  
Makes sense, and the slides.  
The slides, instead of 100, you have 1.02, 1.02, and one, I think.  
S.  
As you have saying that that.  
And you have SIM numbers, you will matter. Make sense?  
I.  
Let me.  
Let me solve it, yeah?  
I have 100 thirty-seven 8 -, 102 * b.  
This is equal to 32. This is the same equation. I'm going to write this equation back with negative sum.  
Minus.  
Seventy-three times 8.  
Plus 102 * B equal H, yes.  
Wanna stop?  
Beach your pleasure.  
And I will get it.  
Hundred thirty-seven, minus seventy-three.  
Thanks, please.  
Yes.  
This.  
is equal to 32. So 8 is equal to 32 over 137 minus 73. Make sense?  
And once you get 8.  
You can go here, for example.  
I'm saying that.  
B is equal to.  
Be it simple to.  
Tell any three.  
Over 102 times 8.  
And once you have eight and B.  
You can come there and calculate.  
What is the price of the gold?  
What?  
What is this?  
Lisa.  
The numbers that I have both.  
Eight East.  
Of these verified, careful because careful because.  
Careful, because what are the questions?  
Okay, sorry. Because they are using 1.02.  
Instead of me, in order to get my same number.  
Does not matter, because you will get the same number, 14 point.  
What is the idea of this?  
That we are really.  
We are considering that the price of the call can be calculated.  
Ask A portfolio that combines the stock.  
We have got.  
Eight times the stock minus the bomb, yes, what else?  
Next day, we will see that black and short formula combines the stock.  
Is a ball in a portfolio, and we will need to calculate the weights, yes?  
Let me.  
This is one of the exams that I have shared with you.  
One of the XLs.  
The expiration one year.  
I'm gonna draw these numbers there, yes?  
Hey.  
One for your friend, yes?  
428.  
This rate is 2%.  
And let me calculate.  
Deviation.  
What I'm doing, what I'm gonna do is to have...  
I'm going to calculate what is the deviation in order to have here 100 thirty-seven. You understand what I mean?  
One 100 thirty-seven.  
Oh, oh.  
4.34, 4.35.  
I'm close. Three, 6.  
4.355.  
4.354 and so close. 4.3.  
Four, 9.  
4.351. Here we are, yes.  
429.  
Two percent.  
Seventy-three.  
No, sorry.  
No, I was looking for this 137, no, 137, yeah.  
Sorry, I need all this. I need 0.3. Let me start again quickly. 0.35, 0.32, 0.31.  
Oh.315 this Morales.  
Hey.  
This is around 137, this is around 73. Everything matches and the price is 14.234.  
14.3. It's around. Yes. What I want to, what I want you to show?  
I have to pay.  
The binomial.  
with just one branch. One year of time, one branch, yes? What can I do? I can global, instead of just one branch.  
Still one year's time, but instead one.  
Two branches, half a year and half a year. Make sense?  
Experience is still one, but the hate instead of 1.  
Two.  
What I'm doing, I am making boom.  
I'm making a home in the picture, yes?  
I am getting more.  
Three, 4.  
Hi, you see what I'm doing?  
Here, one year is here, 5, then he has six.  
When year is here, yes.  
But I want you to, let me just take this tonight.  
Hi.  
What I want you to see?  
What I'm doing with the binomial tree is first constructing from here, then they going backwards is.  
Do you see all these cells that are grown in red?  
Ohh, you are there.  
Out of the money.  
At the beginning, you are in the money or out of the money. You are at the money. Here.  
Here, during the morning.  
Here, you are out of the money, yes, here.  
Here you have half of chances of finishing in the money, half of chances of finishing out of the money. So this number is at the money.  
His number is at the money, his number is at the money, at the money, at the money, yes.  
All these numbers here.  
All these numbers here are in the morning.  
Ready?  
So.  
I do.  
that you make the food bigger. Let me show you this one. One, look, look the result, please. 14.2.34. Yes, look the result.  
Two, 10, three, 12.  
Four, 11, 5.  
Six, 7.  
A.  
What do I what I want to show you? At the beginning, the first two times it went up the price, down, up, down, and as I make.  
The binomial tree higher more than this number from one step to another one becomes more accurate.  
Yes.  
I can take this to infinity.  
What I will get if I take this to infinity?  
That can solve for me.  
Next day, next day, we will see Black and South formula. Black and South formula is just taking this to infinity, and we will not see the demonstration, but we will see how the formula works. And understanding this, we like it.  
Makes sense.  
He questions, why do you suit?  
Fully no for the final.  
Yes, knowing how to solve this with the information that you got now.  
You got, please, with the information that you got now, you got first.  
Accomplice, fully accomplished, accomplished problem set tips.  
With all the information you want, you can fully accomplish problem set 6. Probably there is something you need to know regarding that as well formula. Wait till next class. Thinking about the final.  
Going to Diez.  
You already know everything for the fine.  
We are going to see one, two more things, but all these things will be small. Next class, I will give you, I will give you sample final one, sample same thing I did with the reader. I'm going to do this, I'm going to do this.  
This one.  
So, you have two weeks in order to fully study everything and to fully understand everything, yes?  
That can solve formula is a complicated formula, but you will not have too much difficulties of important things we have already seen.  
So, if I were you...  
I will only.  
Understand this next day I will ask you can ask me question and from next day.  
Hey, Miss Marín, what I have said is that I have finished with all the complicated things, thinking about the final.  
Next, this Wednesday, I will give you sample final one, sample final two.  
You will have two weeks in order to fully understand and work.  
or define. Make sense?  
I know.  
Thank you for your bank.  
Ana and Sam are missing that.  
I.  
Thank you. Welcome.  
Bharat, S.C.A.  
Yeah.  
Play, play, play.  
What is it? Yeah, it's all for me. It's all for me.  
Yes.  
Welcome.  
Run, Dali.  
Yeah.  
Just a minute.  
Yeah, yeah.  
Ohh, no, you, I mean, like, no, I, I, I, I, it's like whatever.  
Okay.  
Yeah.  
No.  
No, it didn't.  
No, no, no.