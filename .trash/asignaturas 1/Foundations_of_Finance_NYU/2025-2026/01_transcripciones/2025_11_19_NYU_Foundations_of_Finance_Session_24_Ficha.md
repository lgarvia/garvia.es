---
Title: Student Notes — Session 24  The Black–Scholes Formula
Course: Foundations of Finance (NYU Madrid)
Date: 2025-11-19
Tags:
  - NYU
---
# 🎯 Today’s Focus
Understand the **Black–Scholes–Merton model** for option pricing —  
how it extends the **binomial model** and links **volatility**, **time**, and **risk**.

---

## 1️⃣ Administrative Notes
- **Final Exam:** 🗓 **Wednesday, December 10th** from **4:00 to 6:00 p.m.**
- You may bring **1 or 2 self-prepared slides** (formula sheet allowed).
- **Emphasis:** material from **Session 15 to 28** (mainly options, derivatives, valuation).
- **Documents uploaded in Brightspace:**
  1. Instructions for the final  
  2. Formula sheet  
  3. Sample Final 1  
  4. Sample Final 2

---

## 2️⃣ Quick Review — Options Basics

| Concept  | Buyer’s Position | Seller’s Position  |
| -------- | ---------------- | ------------------ |
| **Call** | Right to buy     | Obligation to sell |
| **Put**  | Right to sell    | Obligation to buy  |

- Both sides in a **futures contract** have *rights and obligations* → no payment today.  
- In **options**, the buyer pays a **premium** for the *right* (not the obligation).  
- **Call:** you expect the price to **go up**.  
- **Put:** you expect the price to **go down**.  
- **Long = Buy**, **Short = Sell.**

> Michael Burry’s “short on NVIDIA” probably means buying puts — a bet that prices will fall.

---

## 3️⃣ Protective Strategies & Put–Call Parity (Recap)
- Buying a **stock + put option** → downside protection (“protective put”).  
- Equivalent payoff: **Call + Bond (Face Value = Strike)**.

$$
C + PV(K) = P + S_0
$$
→ If you know the price of a call, you can compute the price of a put (same strike).

This parity ensures **no arbitrage** between calls, puts, and underlying assets.

---

## 4️⃣ From the Binomial Model to Black–Scholes

### Binomial Logic
We found option prices by **replicating a portfolio** combining:
- \( h \) shares of stock
- \( B \) units of a risk-free bond

Then we moved **backward** in time (one or more steps) to get today’s price.

$$
C = hS_0 - B
$$

As the number of steps → ∞, the binomial tree converges to the **Black–Scholes model**.

---

## 5️⃣ 🧩 Black–Scholes Model — Core Assumptions
1. **Risk-free rate (r)** is constant and continuously compounded.  
2. **Stock price** follows a **lognormal distribution** with constant volatility (σ).  
3. **No transaction costs** or arbitrage opportunities.  
4. **Continuous trading** of stock and risk-free bonds.  
5. **European options only** (exercise at maturity).  

---

## 6️⃣ The Black–Scholes Formula

### For a Call:
$$
C = S_0 N(d_1) - Ke^{-rT}N(d_2)
$$

### For a Put:
$$
P = Ke^{-rT}N(-d_2) - S_0 N(-d_1)
$$

where  
$$
d_1 = \frac{\ln(S_0/K) + (r + 0.5\sigma^2)T}{\sigma\sqrt{T}}, \quad
d_2 = d_1 - \sigma\sqrt{T}
$$

and \( N(x) \) = cumulative normal distribution.

### Interpretation:
- \( N(d_1) \): Probability (under risk-neutral measure) that the option will finish *in the money*.  
- \( N(d_2) \): Adjusted probability of exercise (discounted for risk).  

> The **slope (delta)** of the call = \( N(d_1) \).  
> It measures the **hedge ratio** — how many shares you need to replicate one option.

---

## 7️⃣ 📈 Intuition Behind the Formula
- If volatility = 0 → no uncertainty → option price = 0.  
- The higher the **volatility**, the **higher the option price** (for both calls and puts).  
- **Time and volatility** play the same role:  
  - More time → more uncertainty → higher option value.  
- As time → 0 → the option’s price → its **intrinsic value**.

> Options are a “bet on uncertainty.”  
> If nothing can change, there is nothing to bet on.

---

## 8️⃣ Implied Volatility & the VIX Index
- All elements in the Black–Scholes formula are observable *except* volatility (σ).  
- By **inverting** the formula, we can estimate **implied volatility** → what the market expects for future uncertainty.  
- **VIX** = the market’s implied volatility index (Chicago Board Options Exchange).  
  - Peaks during crises:  
    - 2008 Global Financial Crisis  
    - COVID-19 pandemic (2020)  
    - Silicon Valley Bank crisis (2023)  
  - The VIX doesn’t predict crises — it *spikes once the panic begins*.

---

## 9️⃣ Relationships in Black–Scholes
| Variable | If it Increases… | Effect on Call | Effect on Put |
|-----------|------------------|----------------|----------------|
| Stock Price (S₀) | ↑ | ↑ | ↓ |
| Strike Price (K) | ↑ | ↓ | ↑ |
| Volatility (σ) | ↑ | ↑ | ↑ |
| Time to Maturity (T) | ↑ | ↑ | ↑ |
| Risk-Free Rate (r) | ↑ | ↑ | ↓ |

---

## 🔟 Key Takeaways
- **Black–Scholes** = continuous version of the **binomial model**.  
- \( N(d_1) \) = probability-weighted hedge ratio.  
- Volatility drives option prices → more uncertainty = more value.  
- The **VIX index** is the “fear gauge” of markets.  
- **Systemic risk** can arise when too many algorithms use the same model (e.g., *Black Monday 1987*).  
- **You won’t be asked to compute** the full Black–Scholes formula in the final — just to understand **its logic and implications**.

---

## 🧠 Practice & Reflection
- Review **Problem Set 6** and the **Excel file** for binomial pricing.  
- Understand:
  - What is *implied volatility*?
  - How does *hedge ratio* (Δ = N(d₁)) work?
  - Why are options valuable even when *out of the money*?
- Optional: explore how volatility spikes (VIX) correlate with financial crises.

---

> “The Black–Scholes model is not about predicting the market —  
> it’s about understanding how uncertainty itself has a price.”



# Transcriptions
19 de noviembre de 2025, 5:07p.m.

1 h 10 min 41 s

Hey, hey, hey, are you good? Good, man. Better.  
Es.  
Perfect. Everyone is here, no?  
I have food house.  
No.  
Ver.  
So happy. If I can choose, if I could choose, I would prefer you to have came two sessions ago or last session. Yeah. Because today is like I have already said, I'm going to review things.  
But we are going to see Black and Source Formula.  
Espanol. Perfect. Not Espanol, no English. Great things, things, things before I have. I'm happy to have full house.  
Because of this.  
Before we knew the slides.  
Have several things give you first idea information for final exam. Final exam will be will be on Wednesday, December the 10th, a normal hour from 4:00 to 6:00.  
Four to six, so before it will start at four, it will finish at six.  
I think that nobody from this class.  
Has done anything regarding Moses. You know what I'm talking about, Yeah.  
I don't really care. I mean, I care a lot about, I I care a lot, a lot about that, whatever. There there won't be any problem regarding that. We are just nine people, so you understand the point, no?  
Eh.  
You are allowed to have.  
But it's written 1C2 slides with your own know. Same thing, same mechanism, same idea that you can create your own one. You can same thing that we have done for the meeting. Yes. Also I will give you one formula C.  
That I'm giving you is like the one you have already, but with performance, yeah.  
And here there is sample final one and sample final two. I don't remember if I have upload sample if you can you have if I have upload all this information to.  
Francis, I don't remember. I think that yes, but I don't know too.  
Everyone, everyone should have.  
Four different documents.  
Four different governments.  
Instructions for the final formula C and sample final one and sample final two.  
We have. I don't know what is going on with my voice, but I'm starting losing it.  
We are. We have a lot of time. Yes, we have a lot of time.  
And several days to review things. So we have time. We have time to review.  
it, it  
Today I'm going to go through options and I will review several things, but I cannot go backwards to classes at work. Yeah, I will try my best and this is session 24.  
Any questions regarding final portfolio theory is on the formula C but if you read.  
The here let me let me take one second because I think we are staying the exam is cumulative and will cover all material in the course.  
No, no. However, however, the emphasis will be on material covered during the second-half of the class session 15 to 28. So you should know that then.  
And formula, yes, and nothing more regarding portfolio 3. There is no need. You can forget about portfolio of variance of a portfolio and all this stuff, yeah.  
OK.  
Let me let me think for one second. Yeah, thanks out.  
Let me see.  
Any questions regarding the plan out? OK, next day.  
Next day we will talk about futures.  
What is a future roadblock?  
What is a future contract?  
What is I think you can hear me? I know that you are a thing, Jeffrey. Sorry. And I'm so happy because can I share information with the rest of the people? Personal information from you. You are going to work in a real estate investment trust.  
Once you are back, you are happy with that and the interview process, the process you were asked about the IRR. That makes me happy because an IRR is a person since price.  
How much are you going to pay for this investment? A 2%, a 4% or a 4%, right? What is the future? So at the current date there's a contract with two firms or?  
Two entities exchange wherever commodity or asset at this first date and the contract says that at a future date is going to be done with a new exchange with a set price. Perfect.  
Absolutely. It could be like, for example, you change right now and you say that maybe it's like gold and silver and then one purpose the other firm would you like?  
One to one right now and then like a year would be back like 1.2 times. OK, the idea is what you have said. Silver and gold is a commodity. A future. A future is like a pool chase.  
If you purchase something today, you pay today and you receive the thing. And of course if you purchase something, something today, today you agree the price.  
You have already said the price is set today in the future, in the future, in the future contract, you agree the price today and when the thing will be delivered, when you will pay in the future.  
Make sense? Yeah.  
Say we agree the price and I think we enjoy in the future.  
Why I'm coming back, why moving forward to futures? Because this is the same thing that I said the first class we're talking about options.  
In a futures contract, both parts of the contract has both rights and obligations. Both parts of the contract has both rights and obligations, and today nobody pays nobody. So you don't buy a future while you are assuming the position of the bank.  
And you don't sell to the future because you are not the same. You close the teacher's contract as buyer or seller. And a lot of people say I have buy future, but you have not buy anything because you have not paid for me. Make sense?  
When talking about options, you buy an option. And why do you buy an option? Because you pay a price for it.  
You pay a price because buying an option means not buy.  
The thing in the future, buying an option means buying the right to buy or buying the right to sell. In case we are talking about buying the right to buy, we are talking about the call option in case we were talking.  
About the right to sell, we will be talking about the put or sell, yes. So you can both buy or sell calls or puts. Make sense.  
Thursday I'm not. I'm just gonna go quick, but.  
Thursday.  
We talk about what happened on expiration, yes, and on expiration.  
Last day, this is the strike. This is pay off.  
What I call.  
Depending on the underlying asset, what is going to be the price of the underlying asset in the future? We don't know. We don't know. And because of that, we have a lot. Depending on the price, if I have got a goal, my payoff will be.  
Zero if the underlying assets finish worthy less than the strike or it will be the difference, the difference between underlying minus the strike. Yes, but is this the payoff on expiration?  
To pay for the buyer, buyer, you buyer, yes.  
If I am making sure if I am making money by buying a coal, it's because someone has sold me the coal as lose this money that I'm moving, yes.  
So they pay off for the seller. This is a serious again, the seller.  
If this fee is worthy less than the stripe, we'll not need to pay anything, but the buyer, sorry, the seller will pay.  
And probably you are asking yourself and here is bad, this this money is loose. Why someone will sell the option like an insurance contract because you have previously received an amount of money.  
So this is payoff, but thinking about profits services, you should take out the premium and this one is selling this because he has already received the premium, yes.  
These are two different graphs if you review, if you review lesson.  
When you review lesson 22.  
You will see that we're talking about course and talking about about foods.  
There is the payoff and then there is profit. The losses make sense.  
Yeah, this is all this is happened here.  
This is the same.  
For output and this is the same for the cellular output. Make sense.  
Are you with me? If I buy a home, what I will like regarding the price of the underlying asset? The higher the better. Make sense?  
If I buy a put, if I buy a put, what I win one regarding the price of the underlying, the lowest the better. Make sense.  
When you buy something you remember from portfolio theory that you can.  
Buy an asset or you can also sell the asset. How did we call when we used to sell to sell assets instead of buying them shortly? Do you remember it?  
If you buy, you sell, you are sold, yes.  
My Nicole is being long with the call. Yes, I'm selling a call is being short. What does to be long and short means?  
To buy and sell and also to wanting the price to go up. If in case I am long and if I am short, I want the price to go down for it.  
With calls there are no problems. The final you are not going to have any problems with this. I want you to understand. Yes, I want you to understand. Understand what that when talking about foods, careful.  
If you want, imagine that forget about derivatives, forget about the distance.  
A lot of people in the in the news, there are people that say there are people so regarding the media. Michael Barry is so regarding the media. Have you heard it?  
Yes. Well, how is short? We don't know. But what does to mean to how can you put yourself short? You can put yourself short.  
A call that nobody will do this or a lot few people will do this, but if you are short you can sell the stock and be the stock without having it and normally hold people short.  
Buying books. Be careful because if you buy a book, you are going with a book. I don't want you to become crazy. How can you solve buying books? Make sense? But Michael Barry has probably done. I don't know. I don't know what he has done.  
The party has both oops. We are in Nvidia thinking that the price will go down on Nancy's Nvidia capitalization market cut.  
Over factory.  
Over 5 three. How much is this?  
Incredible Homazis US public debt 883.  
And this is an incredible big number, more than 38. I think that that's 38 and 100,000 million more. In the last 70 days, more than 1 billion has been made, has been great. What I'm talking about, I'm talking about liquidity, I'm talking about.  
That probably in 2026 we will see things regarding finance, but there are cycles, yes, SK500 is maximums, there is a lot of liquidity, but I don't know what is going to happen, but there are a lot of signals, yes.  
That makes me think that something is about to happen. Make sense? This is out of the scope of the course, but yeah.  
Let me come back here. Have you understood this, Dave? OK, let me move forward so quick. I am.  
You should see the example of the protective foot. You should see the example of the protective foot and.  
I'm gonna buy at all, yes.  
And I'm going to sort.  
To sell a boat in same strike, yes.  
Look, this is the goal and this is the put.  
Yes.  
Can you see this payoff?  
I'm gonna this pay off.  
The slope of this is 1, yes.  
He sees the strength, yeah.  
Making the stripe. I'm going to add, I'm going to add the stripe here.  
Yes.  
I have add this track.  
That's with the stripe. And what do I have here? What does this line represent?  
The pay your focus on the line, yes.  
This is another way in order to show you called put parity. What is called put parity about? It tells me that a call with one strike minus a put with one strike, yes.  
A goal. We want to strike minus the foot. It's equal to.  
The stock minus a bond with face value. Yes, equals because this is a bond I can.  
On expiration, I have this before expiration. I have that, yes. What is that? Call good parity formula. If I know the price of a coal giving one strike, I can know the price of the gold, same strike.  
What it the other day?  
And I cannot go through the binomial exercise. The other day we show the binomial exercise. We create a portfolio combined with a simple exercise next day, not next day, but before the final I will make one exercise.  
In problem set six you have another one. It's a simple exercise, but what is the binomial model about? Binomial model is about knowing, calculating the price before experience. Yes, first day of class.  
We talk about what happens on expiration, yes.  
Last day we talked about.  
I'm going to do it for a call. Yes, I see the stripe.  
This is a strike.  
Disease.  
What I will get?  
In case I execute an explanation, yes, and we talked last day about one concept that is the intrinsic value. What is the intrinsic value?  
How much I will get in case I would exercise my option right now?  
And increasing value is also this graph.  
What is the difference between?  
The intrinsic value and the amount of money that I will get on expiration. It depends on time. Here I have S0 today.  
I'm probably on expiration I can have SP.  
Today I am out of the money.  
In one month time, probably I can finish in the money, but also the opposite. Today I can be in the money on expiration. I can be out of the money for today I can be in the money.  
And one more time I could be deeper into the money. Make sense.  
Yes.  
OK.  
Now let me move into.  
This is called good parity.  
And let me move this and say the price of a poop. We want to try this.  
The price of the call.  
Minus the stop plus.  
Yes.  
Oh, it was looking for the network because of that I I made the transcripts opening at things with myself and recording the meeting. I was looking for the. I thought that someone was calling me, but nobody was calling. It's just the network.  
Hey.  
What is it? What is this formula? What is how do you get the value of a call on inspiration? Please, please, please, please. I want you to understand what I'm going to say. Call price on inspiration is is the maximum.  
Between 2 numbers 0.  
This to be 0 if I think it's out of the money or the difference.  
Between the stop and the strike. Make sense if I came here.  
What do I have the call?  
The goal is the difference between the stroke and the strike. Make sense?  
We're talking about the. We're talking about the.  
I said that the price of the call, yes.  
What's a portfolio that combines?  
Weight on stock times the stock minus weight on the bond times.  
We won't make sense. Do you remember from last class?  
You don't remember from last class as you understand what I'm writing at the end.  
I can say somehow, please, I want to get all of your attention for two seconds. Yes, two ideas, two ideas. Yes, first idea.  
I can construct the goal.  
OK, I can go. It was from the radio. I can I mean glass. You can construct, sorry, two ideas.  
Two ideas, two important ideas. First idea, you can construct the whole support for that combines.  
It's no, no call. Make sense.  
Yes.  
Say good idea.  
At the end, the call will just have two possible values.  
00 or stop minus the strike one of two and since.  
Have you understood this?  
Will you see this?  
OK. Let me say that the goal is going to be a portfolio that combines the stock.  
And the one, yes.  
Please go in last class and see how did I calculate the portfolio because it's a different thinking about the immunization. It's not weight one plus weight 2 equal to one. This is not the the way we use to calculate portfolio. We're talking about portfolio here.  
We're talking about the immunization. Yes, what you want plus way through is what you want. Yes, you understand what I'm saying here.  
What are going to be the weights of the stock and the weight of the stripe? I'm sorry of the bomb. What are going to be the weights?  
A probability function. What is a probability function?  
Have you heard with probability function? Do you remember probability function? Give me the chance. Give me the probability of something to happen. If the thing that is about to happen is almost certain to happen, probability function tells.  
One the thing that is about to happens.  
Is.  
Probably will not happen. That is to see that. Make sense.  
So what are these ways? Let me call NP1 and NP2? What is NB1 and then what is NB2?  
A priority function. The priority function of finishing in the morning. I am about to finish in the morning. I'm finishing all the all of the money. Anyone.  
And the one and then the two is a number that will be between 0 to one and it tells me about the quality of finishing out of the money.  
Or the priority of finishing in the.  
Morning. Make sense?  
One is only one and only two, the weights on the store, the weights on the, but also it's a priority function.  
Make sense?  
Are you with me? OK, something else.  
This is the price at the end. Let me write here.  
What is this? The price?  
At which I can buy the coal today, the price at which I can buy the the coal today.  
Let me talk. Let me see.  
Let me see.  
The intrinsic value.  
What is? What is the slow of the intrinsic value if I finish out of the money? What is the slow?  
Imagine that in order to calculate the slope, this could be 9, this could be 10, yes. If I increase the underlying asset in one, this will increase a rate of 0. So the slope if I finish out of the money will be.  
OK, now let me finish in the money. If I finish in the money, for example, if I move from 10 to 11.  
This will increase the difference between.  
Yes.  
Zero and it's one is the second time they call. I'm going to answer, but just one second.  
Sorry, this is National Radio. It's the second time they call and they want me to talk about crypto.  
No.  
I will talk about crypto at 2020 past 6.  
And I don't know anything yet about crypto, but I don't. I don't really care.  
OK, sorry for the interruption. Normally I don't.  
Are you offended? OK.  
What is the point that if I don't answer, they will call someone else?  
And personally, I prefer they to call me that to call someone else. It's a matter of opportunity. And also they have told me at 6:10. I cannot. I'm not 20. I can. I was thinking about saying I can leave you 5 minutes earlier or 4 minutes earlier and you don't have any problem also, no?  
Or I can prepare it. We don't have class in this room after. No, I will stay here. I will prepare here. So if you can stay, you can enjoy. It will be in Spanish. Enjoy.  
If I move from 10 to 11, if I move from 10 to 11.  
S 0 S 1.  
S 0 minus the strike, S 1 minus the strike, yes. Do you see that the difference will be one? This will increase also one. So the slope here will be one, yes.  
What I'm saying, at this growth?  
Thinking about that, yes, sorry that yes, the intrinsic value. Thinking about that just intrinsic value is taking time value of money. It's moving this handily, but forget about that just intrinsic value. The idea is the slope of this is 0 or one, zero or one. But if you see this graph.  
Yes, this is low here to 10 to 0, here it could 10 to one and in the meanwhile for example here it will be 0.5 for example. Make sense?  
I want you to have them to each other. What does 01? What does this law tell me?  
The chances of finishing in the morning or out of the morning. You understand what I'm saying if this low be 0.  
I'm about to finish out of the money. If the slope is 1, I am about to finish in the money. Let me go back here. If I say what is the derivative of the price?  
Considering the underlying, yes, what I will get is derivative and the one no.  
NB1 What is NB1 this row? Yes.  
Are you?  
Maybe you have understood black and social.  
If you have understood these things, you have already understood plan and source formula, yes.  
Now let me tell you that black and so formula is by far, by far the most complicated formula that exists in finance. In finance, talking about traditional finance, a black source of Merton received Nobel Prize. I don't remembering which year, but before year 2000.  
And this formula is one of the formulas. If you ask someone about Blackhanson's formula, they will say, oh, Blackhanson's formula. It's really simple to compute this formula, but because of the quality functions, it's relatively difficult to understand because nobody.  
Tries to understand. They just see the formula is if you have you there are rabbits. If you put lights to a rabbit, what the rabbit will do, they get otherwise. Same, same sense, same.  
Same move. Any sense? Let me start with today's class.  
Let me start with today's class.  
That insurance call option put options, yes.  
Oh, regarding book, let me before starting with today's class, let me finish with today's class.  
For starting, let me fix.  
Here we will talk about black and source formula for a call. How we will calculate there before starting the class. I want to finish the class. Yes, I haven't already started but.  
Yeah, what I have already explained has to do with the how to get the price of a call. Yes, you already know how to get the price of a call, more or less.  
Once you know how to get the price of a call, how will you calculate the price of a put?  
With same strike. Once you know how to calculate the price of a call, how will you calculate the price of a call with same strike?  
Once you know the price of a call with one stripe, how can you calculate the price of a foot with same stripe?  
We saw it last day and you see a CFA exercise when it said you have a call with one stripe or would you get the price of the put with same stripe? How can you get it?  
No way.  
Call good parity. Call good parity formula. Let me before starting, let me, yes, this is the price of the coal. How will I get the price of the coal?  
Save that.  
Food price, Yes, it's called price ND one times the store minus ND2.  
Times the ball is minus the stop plus the ball.  
Present value of the bond makes sense. This should also be present value of the bond. So I'm going to same thing in one second, yes. So what we what is going to be the price of the put?  
For the put, it's just the opposite. Make sense? For the put, I'm not going to touch anything. I'm going to follow. But what I'm going to do is put the strike before the strike is 1 minus 72.  
1 -, N the two times the strike. Make sense.  
And now let me think about this stuff. I'm going to put minus.  
1 -, -, -, this is positive.  
Minute, minute. This is positive, yes.  
And the one times.  
Yes, what you should think, what you should see.  
For a call, if I am in the money for the call, this will be one and one. No, if the call is in the money, how the put with same straight will be?  
Out of the money, no. Are you following me? We understanding a world, right? Are you absolutely those?  
Are you absolutely not? Anyone is understanding something?  
Are you understanding something? Yes. Yeah. OK, true. Yes. If I am in the morning, this should be one and this should be one. Because if I am in the morning, this is the stock, minus the strike.  
If the call is in the money, the same strike, the put necessary should be out of the money. If the call is in the money, the put should be out of the money, so.  
If this is one, same magnitude for the book should be 0. So it is 1 minus and the two and 1 minus and the one. So if the call is in the money, the put should be out of the money and just the opposite. The put is in the money, the call should be.  
Open.  
Makes sense.  
OK, with this I have already finished with the class before starting and let me now start with the class, yes.  
OK, Black and Stone's formula.  
Last day we talked about the binomial tree and we saw that we can increase.  
The form of the binomial tree, whatever we want instead of just one branch. That was the example we did in class. You can submit, submit out, submit in to 23510 steps, yes.  
Yes, we need an example. I mean the example there was.  
The answer I said with you, there were nine steps, yes.  
What if you take these two to Infinity 9900 thousand binomial model will convert into black and source, yes.  
Now assumptions. What are Black and Soul's assumptions? The risk free interest rate is constant.  
Then continuously component, the stock price is log normal and has constant volatility. Oh, there is something else that I haven't told you all the class yet. There is some. There are one or two more things, two new things that I'm going to do, yes.  
The stock and risk free security can be traded continuously at no cost. Make sense. These are the assumptions and what I'm going to do, I'm going to put all the assumptions in black and so formula.  
Black and source formula X times. What is this?  
What is this? The value of money continues that E price to minus RT is the same as writing X / 1 r price to T.  
Yes, this is a present value of the price of the ball, but in continuous time.  
What do we have here? All these ingredients inside and what is the one and the two?  
What you put inside that you don't need to know this, but in the one and the two is what you introduce in the probability function in order to get the the chance of finishing in the money or out of the money.  
What I want you to see from this formula that D1 and D2 includes includes the deviation of the stock, volatility of the stock, the variance of the stock. Make sense.  
This is this is an important area.  
Hey.  
I'm going to spoil all the class, yes. Do you see that here there is the volatility?  
Anyone knows what I'm pointing this volatility or can you imagine or not? Have you heard about Vix index VIX? Have you heard it?  
Yeah, OK.  
Let me.  
Now the right asset works in a market. Yes, it's traces time.  
Please rate this public. Yes.  
And also all some goods. Can you find the price of a call and the price of a book? Is that in a market?  
It also can be trade. Make sense.  
What I'm saying please, I want your attention. All these numbers are public and the only thing that I can figure out that I don't know is the volatility of the stock. So if I know this, I know this, what can I calculate?  
I can calculate the implied volatility that the market is considering for the stocks.  
What is a mix index? This implied volatility.  
What is the volatility that I can figure out by comparing options prices with their with their underlying asset prices? I can get the implied volatility and big side index. There is one slide regarding mixed index.  
I'd prefer.  
To explain all things, you to understand all things and then go through the slides, please.  
And and I want to see what is it speaks index and let me just sorry for what I'm gonna do.  
Yes, now I know what why why they are calling me.  
I know why carefully, then that's all I'm saying.  
I know why they are calling me.  
Well, let me see.  
OK.  
Yes, it has broken the $90,000.  
Do you invest in crypto? No. I mean, I have crypto, but just in order to say that I got it, I have three bits. Three bits makes me I I, yeah, three bits are expensive. That is not an excuse. Don't ask me why. I don't know.  
So.  
I I am following. I am talking in media about crypto since year 2017.  
And I have always been saying the same that crypto is powerful.  
And we're going to. It's a matter of whatever. I don't know what I'm going to say and I don't really care. Let me just do a quick check.  
OK.  
Um, let me do another check.  
I can't even like these ones. Yahoo Finance. Let me go to Yahoo Finance with.  
OK.  
Look this also.  
There should be. There should be a reason. Yesterday in the White House, someone talk about the stable coins, but whatever. Let me come back. Oh, I am in Yahoo Finance, so it's.  
Peaks is the volatility index is what I have already told you and it's shown. It's been listed in Chicago. Chicago is one of the biggest. I think that there is in Japan one. I don't know if bigger. Chicago is the biggest future derivative is the same in the States, yes.  
And this is the index.  
I have to press this.  
Legs.  
Okay.  
This is the mixing. Yes, it does. This does not. This is my class, not people.  
What can you see from Big's index? Whoa, no.  
A year.  
Six year or OK, what can you see from mix index.com crisis is here, yes.  
Then 2008 crisis, yes.  
Fixed index shows volatility not before. It's not a predictor of crisis. It always tells you when the crisis has already happened or is happened. You see what I mean? Fixed index is not a good a good predictor. If you are looking for a predictor, the yield proof is much better.  
We're also coming to you, a cue of story we have, we have seen this in class. I mean comparing market value with sorry, book value with market value or market value with book value.  
And now all that after that, we are about to explode. Sorry, the explosion is probably hard, but something is about to happen. Yeah, this is the con crisis. This is Corona and.  
This has to do with Trump's. This is. I don't know if this is Trump's. No, Trump's is closer. Trump is year 2000. Oh, this is Ukraine war, probably. Yes. And inflation. Silicon Valley bank crisis. Yeah.  
One one thing you can do is make a picture of this one or and ask ChatGPT show me you can make films and ask ChatGPT about the glass. It's really bad. GPT gives you a lot of information. Careful with ChatGPT because.  
You already know how to use that if he doesn't know something. He will maybe that will be great, but whatever makes sense.  
Make sense?  
Normal teacher. The teacher doesn't know something. OK, let me call back. Come back. Have you understood what I'm saying from this formula? Considering all these assumptions, the risk free, we know it. The stock price, we know it. Also we know the price of the gold, so we can.  
And this is the implied volatility. What is the intuition that is after flag and short formula? What I have already told you and the one is the parality of the option finishing in the money, the goal finishing in the money.  
And the one will tend to 0 to one if the option is almost certain to be in the money, and then the one will tend to 0 if the option is almost certain to be out of the money. Makes sense.  
Now what is ND1? The probability function of the risk neutral probability of the underlying asset indeed being higher than the strike.  
And you can see for you can forward out this. Let me go here. This one is a little bit more important in order to understand inclusion. But you don't need to know all important things we have already. All important things we have already seen in class. There is something we are in future something we are in.  
Regarding shops, we are not going to see anything new. Regarding shops, we will review forward rates. Forward rates are is important. The new proof is important and I have given you sample final one and sample final two.  
Eh, OK.  
OK.  
What if the stock price the underlying as a price? Yes, increases. What will happen with the price of the coal? Even all things equal, the rest of the things equals. What will happen if the?  
Price of the underlying goes up for the call. The price of the underlying goes up.  
In face increase, what will happen with the for the call? The place will increase. I like the idea is like being so so things in an auction that they have.  
I have a a picture. Yes. And who give me? Who? Who gives something? I I really like this. OK, one, a two and a three.  
Sure. If the price goes up, what will happen? The price will go up. Yes. If the stock price goes up, what will happen with the price of the put? It will go down.  
I am not. I am sorry.  
Regarding the exercise price, the exercise price cannot change. But what if I compare one hole with one strike, comparing compare with another hole with a lower strike? The lower strike, that's the opposite than the than the stop. You underline as it goes up.  
Comparing this drive will go down. Make sense.  
Yep.  
Now.  
For me, this is the I mean these two ones.  
Are logical in order to understand the inclusion.  
This one volatility of the stock.  
I want you to fully understand this and hope this is later with that.  
What are we doing when buying an option? We are betting.  
We are very. Imagine that. Will you buy an option for the risk free asset?  
Yeah, that's all I mean. I know.  
That the price will be this one forever. Will it make sense to buy the option?  
Now if I know that this price will be this price forever.  
How much will I pay the difference but I will not pay more or less?  
So if there is no uncertainty, who much will be auction worth?  
Nothing. I think because there is no point in betting for something that is not for betting for betting in something that is certain.  
Yes. So the highest the volatility, the highest the price for both the gold and the gold. Make sense.  
OK. Have you noticed this more than certainty, the better thinking about the price of the gold and the gold, yes.  
Have you got this idea? Let me go to the next idea. Bye.  
Time is the same as as uncertain because you if there is just what is the chance of this falling from your table, the more time we pass in class.  
And more chances.  
There is just five seconds. There are no chances. The more the time, the more the chances. Do you see that when talking about this time and uncertainty place a similar game?  
The more the time, the more the chances. The more the uncertainty, the more the chances. Yeah, OK. And regarding internet rates.  
You should look at at the strike. The higher the industry, the lower the strike. So, so I'm this expert, yes, so not because these things kill me.  
If this increase, this will decrease. If this decrease for this is just the. I mean if this increases, this increase, this increase, this increases.  
Are you following me?  
I'm not following myself. What I want you to see is that the higher the rate, the lower the strike, the lower the strike, the lower the strike because this is negative, the highest the price of the call.  
Come for the food. That's your question. Make sense.  
Any questions?  
OK, eh.  
This is an example. This is just taking you have an excel. Oh, I have. I have another excel. I have one excel that I want to show. I have already served this with you.  
Let me say safe open it.  
OK, what is this excel about?  
This is a good let me write call now.  
What is this about? The stock price T if this I don't remember if it is 7 or it's written there. Let me I think it's 9/9.  
It's eight. Yes, it's eight. Blue and red are reset. Yes, let me just write one. Blue line shows me the price. Red line is a reference for when P is equal to 9.  
Yes.  
They.  
The more the time, the higher the time we have already seen, yes, the higher the time, the more the price.  
As we are running out of time, as we are running out of time, less things we can do. And at the end, if we are running out of time at the end, this sends to the just sorry to the interesting value.  
Yeah.  
OK, what is? This is the price by applying black and short formula. This is the stock price and for each stock price this calculates. This calculates.  
The strike and the one. Sorry, X is now careful. X is not the strike. X is this, Y is this and then the one is the probability. This is the one and this is the two. Yes and the one.  
And the two time left, the price for the call and the price for the yeah.  
This is a calculator if you want.  
I I don't remember to have done this. I don't remember to have ever done this in class. I I think it's the first step, but I'm sure I'm I'm going to find something like souls.  
Formula.  
You see what I mean? You put here that.  
You just press calculate, you will get yes. What is the problem with black and sole formula?  
That is really simple to compute. Yes, it's really simple to compute. Let me see if there is one slide regarding the black. I don't know if it was Black Monday or Black Friday. I think it's Black Monday. Let me see implied volatility. I have already talked about implied volatility, yes.  
Grad volatility has to do with big simplex. Yeah, we have already seen it. And what is the hedge ratio? Next day we will talk a little bit more about hedge ratio and hedge ratio is slow. Hedge ratio is ND1.  
And hedge ratio for a call is ND one, yes. If I know the price of a call, how can I get the price of a put with black and soles? Sorry, with call put panning. Yes, this is what I have done before.  
X1 minus and T2 minus and what is hedge ratio? What I put the slope and the slope is just negative because the the right answer pricing increase. My the right answer will decrease, yes.  
And Oh yeah, perfect Black Monday. What is Black Monday? I didn't remember if I have this slide or not. What is Black Monday?  
Black Monday was one day that there was a slightly correction. It happened. I I was born in 1979, so I was.  
77 almost 7 October. I was 8 years old. Yes, I remember, of course, and there was no there.  
Lot of computers using same form. What if there is a little change in all calculus and at the end one small one small change for one computer means nothing.  
But the same small change for all computers using same formula can become systematic risk.  
And this is what happens in just one day.  
Dow Jones Industrial dropped 22.6%. Why? Because of Black Monday and because of because of black and so from a lot of computers using at the same time. Have you ever heard about flash crashes?  
What is a flash grass?  
I like to have this slide there because that Monday was something flash class is a lot of computers, homemade flash class.  
I mean this is just one, but there are tons of last of last classes, last classes because a lot of computers have for example same stop loss. They start selling, selling, selling, selling and when you realize in just microseconds the market has lost a lot of percentage.  
Black Monday with black and source formula is something that happened in games. But nowadays, have you heard of black swans? What is a black swan? Something unpredictable. Year 2008 in my brother's crisis was a black swan.  
Nowadays we have black swans. Everything there. No, it's a joke, but there are more black swans than white swans.  
No, you understand what I'm saying that because of technology, Black Monday happens because of because of technology, because before Internet, because all computers were using same phone. But I want you to see from here.  
That if we make same mistake and we don't think this little mistake can become incredible big because of systematic things. Make sense? Conclusion that can source is a hard formula, but you don't need to know it for the final.  
Any questions? No. I'm going to ask ChatGPT. Oh, I have no, but ChatGPT. I'm going to ask Google.  
I'm gonna ask you this. Why crypto is crashing?  
One day ago, OK, this.  
I can oh.  
Of volatility and investors say turbulence could be in store using stock closes. There is a lot of volatility, Russell, Dow Jones, SP500 close lower for the four day in a row.  
Yes, six weeks after knocking a record high above 126 Bitcoin.  
Yeah, six weeks after. So it's not a matter of crypto going down, it's a matter of high volatility.  
No. Any thoughts? Jake, I need your help.  
Yeah, six weeks after Bitcoin that Monday died below 90,000 and today we are it has been it has run out again.  
I want to know the name of this is Stephen Miran. Stephen Miran is the one that has talk about stable goings, I think Stephen.  
Mira, the class is over. I mean, I'm not. What I mean is that I am just preparing the Stephen Miran wrote the border and you can stay for of course.  
OK.  
First good listen is stable.  
November the 7th.  
Let me turn this off.  
Yeah.