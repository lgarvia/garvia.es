---
Title: Student Notes — Derivatives I - Introduction to Options
Course: Financial Markets (NYU Madrid)
Date: 2025-11-14
Tags:
  - NYU
---
# 🎯 Class Focus
Today we begin **Derivatives**, starting with **Options** — new terminology, but familiar logic: contracts, payoffs, rights, and obligations.

---

## 1. Recap — Closing Fixed Income
- We have finished **Bonds** and **Fixed Income** topics.
- Remember: **interest-rate risk** splits into **price risk** and **reinvestment risk**.
- We studied **immunization** and saw how SVB failed because assets and liabilities had **different durations**.
- From next week onward, we move into **Derivatives**:  
  - Options → 3 sessions  
  - Futures → 1 session  
  - Swaps → 1 session  

---

## 2. First Principles — What is a Derivative?
- A **derivative** is a **financial instrument whose value depends on another asset** (the *underlying*).
- It’s a **contract** between two parties: one gains what the other loses → **zero-sum game**.
- The derivative itself is a **security**, but its price derives from another **security** (e.g., stock, bond, commodity, index).

Examples:
- **Options**
- **Futures**
- **Swaps**

---

## 3. Futures — Basic Idea
> “A future is like buying or selling something today but agreeing to deliver and pay later.”

- Example: you sell me a **chair** for €100, but delivery and payment happen **in 6 months**.  
- We agree on **the price today**, but actual exchange happens in the **future**.
- Depending on the future market price:
  - If the price goes **up**, the **buyer wins** (he buys cheaper than market).
  - If the price goes **down**, the **seller wins** (he sells above market).

Thus, in a **future**, both parties have **obligations** — to deliver or to pay — but no one pays anything **today**.

---

## 4. Options — Basic Idea
Options introduce **rights** instead of **obligations**.

| Role                | Obligation | Right | Payment Today    |
| ------------------- | ---------- | ----- | ---------------- |
| **Buyer of Option** | No         | Yes   | Pays Premium     |
| **Seller (Writer)** | Yes        | No    | Receives Premium |

Two main types:
1. **Call Option** → Right to **buy** the underlying.
2. **Put Option** → Right to **sell** the underlying.

---

## 5. Key Terms to Remember
| Term                        | Meaning                                       |
| --------------------------- | --------------------------------------------- |
| **Underlying**              | The asset (e.g., Apple stock).                |
| **Strike (Exercise) Price** | The price agreed in the contract.             |
| **Premium**                 | The amount paid today for the right.          |
| **Expiration**              | The date the option can be exercised.         |
| **European Option**         | Can only be exercised **at maturity**.        |
| **American Option**         | Can be exercised **anytime before maturity**. |

---

## 6. Call Option — Payoff Logic
Imagine buying a **call option on Apple**:
- Strike = \$100  
- Premium = \$5

### 🔹 Buyer (long call)
| Apple price | Action         | Payoff | Profit           |
| ----------- | -------------- | ------ | ---------------- |
| 90          | Don’t exercise | 0      | -5               |
| 100         | Don’t exercise | 0      | -5               |
| 105         | Exercise       | 5      | 0 *(break-even)* |
| 110         | Exercise       | 10     | +5               |

> **Payoff formula:** $max(S_T - K, 0)$  
> **Profit formula:** $max(S_T - K, 0) - \text{premium}$

- Break-even = Strike + Premium = 105  
- For each $1 increase above 105 → +$1 profit.

### 🔹 Seller (short call)
- The mirror image: receives +5 initially, loses when price rises.
- **Zero-sum:** Buyer’s gain = Seller’s loss.

---

## 7. Put Option — Payoff Logic
Now you **buy the right to sell** the asset at 100 (paying a \$5 premium).

### 🔹 Buyer (long put)
| Asset price | Action      | Payoff | Profit           |
| ----------- | ----------- | ------ | ---------------- |
| 90          | Sell at 100 | 10     | +5               |
| 95          | Sell at 100 | 5      | 0 *(break-even)* |
| 100         | No exercise | 0      | -5               |
| 110         | No exercise | 0      | -5               |

> **Payoff formula:** $max(K - S_T, 0)$  
> **Profit formula:** $max(K - S_T, 0) - \text{premium}$

### 🔹 Seller (short put)
- Receives premium; loses when prices fall.

---

## 8. Understanding Long vs. Short Positions
- **“Long”** = you **own** something (you buy the option or the asset).
- **“Short”** = you **owe** something (you sell or write the option).

| Position       | View on Price | Profit Driver |
| -------------- | ------------- | ------------- |
| **Long stock** | Bullish       | Price ↑       |
| **Long call**  | Bullish       | Price ↑       |
| **Long put**   | Bearish       | Price ↓       |
| **Short call** | Bearish       | Price ↓       |
| **Short put**  | Bullish       | Price ↑       |

> Buying a **put** is economically similar to **shorting the stock**.

---

## 9. Practical Graphs
- The **payoff** graphs (in red) show money at expiration.  
- The **profit/loss** graphs (in blue) include the **premium**.

### Long Call
Flat until strike → slope +1  
(Break-even = K + premium)

### Long Put
Slope -1 until strike → flat at 0  
(Break-even = K - premium)

### Short Call / Short Put
Mirror images of the above (seller’s position).

---

## 10. Option Value at Expiration
| Option Type | Out of the Money (OTM) | At the Money (ATM) | In the Money (ITM) |
| ----------- | ---------------------- | ------------------ | ------------------ |
| **Call**    | S < K                  | S ≈ K              | S > K              |
| **Put**     | S > K                  | S ≈ K              | S < K              |

> **At expiration**, the value is entirely **intrinsic** (no time value left).

---

## 11. Option Strategies — Building with “Lego Pieces”
### 1. **Speculation (Leverage)**
Compare:
- Buy 100 shares of Microsoft at \$70 → \$7,000.
- Or buy **100 call options** (strike 70, premium \$1) → \$7,000 / \$1 = 7,000 contracts.

If stock rises to \$90:
- Shares → +28% return.
- Calls → huge % return (≈ +200%), because of **leverage**.

If stock stays flat or drops → lose premium entirely.

---

### 2. **Protective Put (Hedging)**
Buy **stock + put option** on same asset and strike.

| Stock Payoff | Put Payoff | Total |
| ------------ | ---------- | ----- |
| 40           | +30        | 70    |
| 50           | +20        | 70    |
| 60           | +10        | 70    |
| 70           | 0          | 70    |
| 80           | 0          | 80    |

→ This creates a **floor**: never get less than 70.  
Buying a put is like **buying insurance**.

---

### 3. **Put–Call Parity**
> A cornerstone identity connecting calls, puts, and bonds.

$$
S + P = C + PV(K)
$$

- “Stock + Put” has the **same payoff** as “Call + Bond” (face value = strike).
- Both strategies lead to identical outcomes at expiration.

---

### 4. **Straddle**
Buy a **call and a put with the same strike** → bet on **volatility**.

- Low volatility → you lose both premiums.  
- High volatility → one side wins big.

A **short straddle** earns small profits most of the time… until an earthquake (Nick Leeson, Barings Bank) wipes you out.

---

### 5. **Bull & Bear Spreads**
- Combine long/short calls (or puts) at **different strikes**.  
- **Bull spread** → limited gain if price rises.  
- **Bear spread** → limited gain if price falls.  
- Useful for **targeted bets** on direction.

---

## 12. Takeaways
1. **Options = Rights, not Obligations.**  
2. **Call = right to buy**, **Put = right to sell**.  
3. **Premium** = insurance cost.  
4. **At expiration** → payoff = intrinsic value.  
5. **Leverage cuts both ways**: large potential gains but total loss possible.  
6. **Hedging = protection**, **speculation = risk**, **arbitrage = equilibrium**.  
7. **Put–Call Parity** links the entire options market mathematically.  
8. Derivatives are **financial Lego**: combine them to manage or exploit risk.

---

## 13. Logistics & Next Steps
- **Next class (Nov 19)**: option valuation **before expiration** — time value and the **Black-Scholes** model.  
- **Slides & Excel**: available on Brightspace.  
- **Office hours** open — review HPR, Duration, and Immunization exercises if needed.  
- **Final exam** is **not cumulative**, but all concepts build sequentially.  
- Practice: draw payoff diagrams for **long call**, **short put**, **protective put**, and **straddle**.

> “An option is a right you pay for today to decide later — like buying time.”



# Transcription
14 de noviembre de 2025, 5:08p.m.

1 h 18 min 17 s

Let me do it complete. These exercises should be done with Excel. Yep, it's written there at 10 year risk rebond with a coupon rate of five and face value of 1000.  
123.  
1 to 5 to 10.  
OK and.  
124.  
And one of those in.  
50, yeah.  
Now what is being said? What is the yield to maturity of the bond if the price is?  
100 one is.  
It's the sudden species.  
Hello.  
And this is for 3.7%. OK, now what is the annual HPR if you buy the bond for once 1100 hold the bond for years?  
But you sell it immediately after the payment.  
OK, this exercise is just the same exercise that that was being asked in the meter.  
This is the exercise from the middle. It's the same and more numbers, but fully understanding this exercise is what is the annual HPR if you buy the boil, you buy this for.  
You buy this for 1100, yes, this is present value when calculating IRR and then we are told that.  
You sell it in immediately after the payment of the coupon in time 5. You sell it here.  
At the price corresponding to a yield maturity of 4%. Yep, I'm going to calculate this the quickly way net present value by using the present value formula. But all of you should know how to calculate the price of a bonus at a given rate. Yes, 4%.  
Go back.  
This and this would be a price of 1044. Make sense. We have bought this for one hundred 1100 and we need to reinvest coupons.  
These coupons at the gym of.  
3%, yes.  
I'm going to reinvest this first 150 * 1 plus reinvestment rate is 3%.  
Price two, I'm going to receive this in year one and I'm going to reinvest this for 1234 years, so 5 minus.  
What? Yes.  
And calculating these rights, the first one rise to the 4th, the second to the 3rd and so on.  
Perfect. These one.  
This one I'm so at the end I will receive 51.5 that is half of three and 50. So what is going to be future value? Future value is the sum of.  
These cash flows plus the amount of money that I will receive by salary. Yes, fully understanding, not excel. Don't worry regarding excel, but the mechanic of this exercise is exactly the same mechanics that.  
You remember the exercise from the from the meter. You have one point, you request first coupon, you sell it waiting to receive last coupon. So this is future value. And what is it's PR? It's PR is.  
Future value over present value price to.  
1 / 5 - 1 OK.  
And this HPR is going to be the copy format of this one where this 3.56.  
Makes sense.  
Um.  
Last exercise, I have upload solutions. You can find in that space the solutions. Yes, last exercise is 1 regarding mutation. You have payments, future payments. You need to calculate the portfolio and that's.  
You're gonna have to do less.  
OK, I'm gonna take attendance. I'm gonna take attendance and.  
Can you follow me up with? Thank you so much.  
Thanks for having me. I really appreciate it. And today I insist this is an important day because we are done with bonds, we are done with fix income. If you have any question regarding fix income, ask. I don't have any problems interviewing.  
But today we are going to find, we are going to go through something absolutely new. Once you understand mechanics, it's so simple, but understanding mechanics is a really difficult because new terminology, new names.  
And at the beginning we saw a little bit confusing, but once you get used to the names, this is so regarding this file.  
Say fast.  
Session today, session 22.  
Let me share slides with you.  
And also.  
OK.  
Today we will start talking about deliveries.  
Let me then we will talk about options, but I want to to start explaining features because understanding features is not simple but understanding options.  
May that Asia you sell chairs, you sell me this chair. What are my obligations have the obligation of?  
Paying you the money. What are your obligation? Your obligation is giving me the serve and my right is to receive the serve and your right is to receive the money both parts.  
Path obligations and products maintenance.  
And if I if you sell me the chair, I say you tell me what is the price of the chair. I pay you the price and we are going. All of you understand that I am who chasing contractor.  
OK, where is that feature?  
It's exactly the same thing, this thing that I have said. Then we agree the price. Today we close the agreement. But when am I going to pay you? When are you going to give me the chair?  
In one year time, in six months time in the future. Any sense?  
In case you want to sell chairs and I want to buy chairs, we don't need to worry about finance.  
But the point is that today the price has one price. What is going to be the price the chair will have in the future?  
We don't know. We don't know. And depending on the place, the serve will have in the future.  
This contract, the contract that we have signed today will be worth it for you all for me. Make sense? Yeah.  
We close the contract today. Absolutely important. Today we agree the price. Today we agree the price.  
Today you are not going to pay me. I'm not you are. I'm not going to pay you. You are not going to be with the chair. We will close the contract. The deal today we closed it. Sorry. And in the future I will pay, I will, I will pay and you will be with the chair. Make sense.  
Maybe instead of talking about shares, let me talk about Apple, yes.  
I prefer to bring melon.  
What is going to be? I use S for me and their level. I don't know what S has to do with under root. That is what we would like. What is gonna be?  
Price of Apple stock in the future, I don't know.  
I don't know what it's going to be and because of that they have draw a line.  
At which price am I going to buy Apple stock? Let me say 100, yes.  
100, yes, 100.  
Will be the strike price.  
100 is the price that is within the contract, the price at which I can buy in the future. Make sense.  
And now what I'm going to draw in this axis.  
Perfect time things or fences.  
I profits or losses, I claims or losses. And let me say for features there won't be any problem, but let me talk, let me pay off the money that I will receive or I should pay. Make sense.  
What is?  
I am buying Apple stocks for 100 and the price is 100.  
Nothing will happen for me or for the seller. Makes sense. What if Apple stock will worth?  
125.  
I can buy Apple stock for 100. Sorry, I can't. I should buy Apple stock for 100 and Apple stock won't work. I will be happy or happy.  
I will be happy how much 10 because I can buy 400.  
Next up if it is 120.  
My game will be of 20, yes.  
And what is the problem if?  
Apple stock worth 90.  
I should buy at 100. I should buy at 100, but I can't buy at 90, but I cannot buy at 90 because I should buy at 100 so I will be losing.  
I will be losing.  
Make sense?  
This is the payoff.  
For the make sense.  
What about the center?  
We will see when talking about derivatives that these are called zero-sum games, but that's to be a zero-sum game mean that if you win then it's because.  
I'm losing the the total sum between you and me. Your game will be equal to my losses or my losses will be or my gains will be equal to losses. Make sense? So what about the seller?  
What about the cell?  
The seller is selling at 100, no. So if the price is 110.  
No matter that the senator can settle at 100, so he will be losing day.  
Make sense?  
100, sorry, 100 -, 10. I need the seller. What everyone will always want buy cheap and sell more expensive. Price is 90 seller can buy.  
490, something that is going to sell 400, so he will be getting that. Make sense.  
Are you with me? What are these two contracts? It's the same contract, but there you've got one part of the contract and there you've got the other part of the contract.  
This is futures and this is sorry, both are futures complaint. This is the position of the buyer and this is the position of the sell.  
Makes sense.  
OK.  
Today we are not going to talk about futures. We will talk about futures in three classes time. Today we will talk about options, but if you have understood that, you have understood half of today's class.  
Let me take another color.  
OK now.  
Why this?  
An option in a future contract, both of us have both obligations and rights.  
And I don't pay you, you don't pay me when closing the contract. So I have not buy future. I have not sold a future. A lot of people say you buy a future or sell a future, but you don't buy or sell anything because you don't pay anything.  
You just close the contract. Makes sense. When talking about options, the buyer of the option is going to buy and if you buy something, you should pay. I'm going to pay today the buyer.  
We pay. And if you pay, you will receive something immediately. What you will receive immediately? The right, the right. You will have the right, but not the limits.  
Make sense? And you can buy one of two. You can buy the right buy.  
Or you can buy the right to sell. Make sense.  
Let me start buying the right.  
Buy. What do we call when you buy the right to right? When you buy the right to buy, how do we call this contract? You will be buying a call option, so buying the right to buy.  
He's buying a car.  
But it's a call.  
This is a screen, but you cannot see it.  
It is blue.  
What is a call option? Buy the right to buy.  
Find the right to back.  
And if you buy it, you should pay money. How do you call? How do we call? How we will call the money you will pay the premium?  
And how much the premium will be? Don't know. I'm gonna make that. Yes, premium will be 5.  
Dollars. Yes. What are $5? The amount of money that I have paid in order to have the right?  
Makes sense.  
OK, I'm gonna. I have got it. Yes, once I have got it.  
I don't care about how much I have paid because I have the contract. What I have paid was in the past and I'm just going to think about the payoff that I will receive. I'm just going to focus on the payoff. I don't care about the amount of money that I have paid. Make sense.  
I'm guessing about the table. I can buy if I want.  
If the price is 110, will I execute the contract? Will I buy for 110?  
Right to buy.  
Is 100 10.  
Right.  
Someone is calling nothing.  
Police to buy the right to buy. This I can buy just in case I want.  
Yeah.  
I can die for.  
If the price is 110, will I buy for 100?  
Yes, what I will do, I will buy it and I got immediately sale for 100. So my profit would be make sense.  
If it is 120 the same.  
You see that this part is the same.  
Yeah.  
If the place is ready, will I buy 490 or 4100? I can choose because I have the right but not the obligation, but I will do.  
By 490, so I will not execute the contract and the contract will work still. Make sense.  
What is this? The payoff? The payoff of a call option?  
And what you should be thinking about?  
What about the five euros? No. What about the 50? Is it the payoff? But let me calculate profit or losses?  
Depressing Nike.  
Pay all will be 0 but I have lost.  
126.  
Make sense?  
If the price is 100.  
I will still have lost 100. Yes, then from this point.  
What will be my gains? $1.00 per dollar. The slope will be of $1.00 per dollar.  
What will be the break even 105? If the price of the underlying asset, the price of Apple is 105, I will have a payoff of five, but because I have paid 5.  
My profits will be zero. I will be a breaker.  
Makes sense.  
Any questions?  
This is the diagram the chart for Apple.  
What about?  
The seller of the gold.  
The sale of the call.  
100 If the price is higher than 100, we'll receive the premium. Yes, we'll receive the premium.  
And the seller will not be to pay anything. But what if the price is higher than 100? His break even will be at 5 and he will be losing one euro or $1.00 per dollar. Make sense?  
Again.  
Tear some game if he's winning. If the buyer is winning, it's because the loser, because the seller is losing.  
Except.  
Now there we were buying the right to buy what I'm going to buy now.  
Right.  
And where I'm going to look, I'm going to buy the right to sell.  
What does to buy the right to serve?  
This is called to buy a put a put of.  
This is a call that is a good but is a good option to buy the right.  
So.  
How much I'm going to pay for buying the put? Let me just use again.  
$5.  
This is the price. This is the premium premium price, yes.  
Now.  
Will I execute my right? Will I execute my right if the underlying asset price is 90? Will I sell for 100 something that can be bought for 90?  
Absolutely, yes. So my payoff will be 10 and I have this graph talking about the payoff, yes.  
And what about the premium I should take?  
Five from here and this is a pay off. Sorry, the the losses for profit statement, yes.  
And what about the seller?  
Yes, the opposite, the seller.  
We'll have this graph being this the payoff and this profit or losses. Make sense.  
Did you understood this?  
These understood this. If you have understood this, we are good. I can start with the class.  
Let me start with a class. What are we going to talk about today?  
We will talk about options, what we would see, we will see what is an option contract. Then we will talk about option valuation on expiration date. That is what we have already seen on the blackboard.  
And then we will see three option strategies.  
That also will help me explaining what is the use of oxygen, what using oxygen is, why oxygen are useful.  
OK, what is an option? An option is a derivative.  
What is her derivative?  
A financial instrument.  
What is a security? We have already talked about securities. We have already talked about financial instrument. And what is a financial instrument? It's an asset for yoga, a liability for the insurer and as an and as.  
A financial asset is an intangible asset because of a contract.  
So what is a security? A contractual claim? A contract between two parties? A security? What are derivatives? Securities.  
But careful because when talking about derivatives.  
There won't be just one security, there will be two securities. The derivative itself, yes, for example, the call option.  
The right to buy Apple options, yes, there will be two securities, the derivative itself and a second security.  
Push price will the option the derivative derives from.  
So a derivative is a security with a payoff that depends on the price of another security. How are we going to call this second security and the right asset?  
And they're light.  
Yeah, what is a negative is.  
A derivative is a financial instrument whose price derives from a second or another another.  
Example of options, future swaps. Today we will talk about options in three-week classes in three-week in three.  
In three sessions time we will talk about futures and then later we will talk about traps.  
Derivatives are used for risk management, executive. Oh yes, we are not going to talk about executive compensation today, but there are times that executives are in case you get, in case the price of the ocean rocket you will you can buy, you have the right to buy.  
Fine options at a given price, but program about executive compensation, yes, they will talk about risk management and they will talk about heading and about the speculator adapter, yeah.  
Any questions? More things when talking about options.  
There are two different types of options.  
First type of option will be called. Call a call option. What is a call option? The right buying the right. The call option will be the right to buy underlying.  
What is, on the other hand, a good option is buying a right.  
By the right to serve the underlying. Make sense.  
When talking about options, talking about options, there will always be three different prices at the same time.  
They will need three different prices.  
That I What are the places?  
That you should know or you can know what is right, right?  
There are three home bases.  
It.  
There is one price that is fixed that will never changes, which is this price, the strike price. The strike price is the price at which you can buy yourself.  
Then there is also as a comprise there is.  
How much you are paying, that kind of things.  
And it will change the premium price will change depending on the third price. That is the the line asset price. Make sense. So there will be 3 prices, three different prices that the line asset.  
the premium this project.  
I'm careful because the strike price. There are times that is called exercise price or also that is called the contract price. Careful with terminology because it can make you become crazy at the beginning.  
Buying the right to buy, buying a coal, selling a coal makes sense, but I don't want to complicate too much today. I think today what I want you is to get used to these things.  
I feel sorry for those that are not here because today there is a lot of new information and next day we will construct over this information.  
Hey, OK then.  
What is the difference between European and American options as it has to do with nationality?  
It does not have. What are American options? Sorry, what are European options? European option is an option that can only be exercised as maturity.  
On the other hand, an American option can be exercised as an activity, but also maintained at church in 100 years. Sorry, 100 days.  
You can execute tomorrow in one month. In two months. Make sense.  
Text expressive strike. Perfect. And oh, OK, this.  
This is not for today, but I want to talk about it today.  
If I buy an option, it's like playing Russian bullet.  
Have you have a brush in a minute?  
Sorry for the example, but if you play russian bullet, there are just two results, one that is good or another that is a disaster. Make sense?  
What I'm saying that if the underlying us and you buy and when you buy a home, what are you thinking about? You think what are your expectations? The price to go up? No.  
If the price goes up, you are alive. If the price goes down, the contract for which you have paid worth not.  
So depending on.  
The relationship between the underlying and the strike.  
We will talk about out of the money options.  
Out of the money options, in the money options or at the money?  
In the case of a call, when a call will be out of the money, when the the line is lower than the strike, when talking about a put, when the put will be out of the money.  
When the underlying is underlying the price is higher than the strike, make sense.  
And you see this point that if it finish out of the money, it's a disaster. If it finish in the money, I will be really happy. We are playing like.  
Like roulette, you can just gain or lose.  
It's a risky game, yeah.  
OK. What is this the value of the option at expiration? If you see here, you look at the television, what you will see?  
You will see that the payoff of the call, the payoff of the call, you have that graph.  
If if the underlying asset price is lower or equal to the strike, you will receive 0.  
If the underlying asset price is equal or higher than the strike, you will receive.  
The underlying minus the strike what they say equal because underlying being the strike minus the strike is 0.  
Make sense?  
What is there? What does this represent? The graph that you have that I have already drawn?  
Oraput.  
Or a put. Yes, you opposite.  
The underlying is higher 0, the underlying is lower. The difference between the stripe and the underlying makes sense.  
OK. What do you have here? The profit on the profit in yellow and the payoff in red of a call option with a strike?  
Equals to 100 and a premium of 10.  
Make sense?  
Then what do you have here? The same for I would.  
Any questions?  
Now what are we asking?  
We are asked to get the value.  
The pay of of.  
Of short I call.  
I will repeat this next day.  
Bye.  
Time is to be long. Selling is to be short, yes.  
Careful with this thing. I need your attention. If we think about buying a gold, there won't be any problems regarding long or short because you buy.  
A call and you are thinking about you want the price of the asset to go up. Make sense. So if you buy a call, you are loan to the call and you are in a long position. What does to be long mean? To be in a long position mean that you are.  
are thinking that the price will go up.  
Careful with puts. Careful with puts, because if you buy a put.  
Please, I want. Please listen to me. You buy a put. You are long with a put, with a put because you have buy it. You have bought it. You are long with the put at that short.  
We never like it. That's it. Because you want the price to go down. Buy a book is like selling, yes.  
You want me to repeat?  
You buy a coal, nothing to worry about because if you buy a coal, you are long with the coal in both the scenarios. Buying the asset, buying the asset or buying the coal will put you in a position when that you what you will wait is the asset to go out.  
There won't be any problem.  
When there will be problem, when we will be talking about buying a put. Because if you buy a put, you are buying a put, you are in, you are long with a put. But normally people will say that you are in a short position.  
Why buying a put puts you in a short position? Because you are losing the price of the line to go down. It's like shorting. It's like selling the stock.  
Did you remember when talking about portfolio theory that you can be long or short and short means to sell? Buying a hood is like selling the stock.  
And it puts you in this in a short position.  
Makes sense.  
But don't worry about it today. Let me guess 8090100. Let me this in Excel here and 8090.  
I think.  
This is the price of the underlying asset.  
The price of the underlying asset and.  
OK.  
And.  
The payoff of a short call with a strike of 100 and a premium of at that. Let me just strike.  
100 and a premium of 10.  
I am. I will be.  
Short. So if I am short.  
The buyer will buy the right to buy.  
So.  
If price is if the underlying price is 110.  
Will the buyer? Will the buyer buy?  
Yes, the buyer will buy and if the buyer buy, the buyer will get 10. So I will be losing 10. So my situation will be 10, yes.  
If the buyer buys at 120, the buyer will be receiving 20, so I will be losing 20 and so with 30 makes sense.  
Here.  
I will not have to pay anything. I will not need to pay anything. I know. Make sense.  
This is the pay off and what about the?  
Closes or.  
Profits. Losses or profits are as simple as adding the pay off 10. I add the pay off 10.  
And they will have these one. Makes sense.  
Yeah.  
This is so simple once you understand it. If you don't understand this, it will be impossible because you don't know what we are talking about. But once you understand it, this is so, so simple. But please.  
Work over it because first time it will show the strengths and the more you practice the more you will make this choice.  
Make sense? OK, let me move forward.  
What I have done to this moment, I have introduced the concept of derivatives, the concept of options, and then I talk about how to get at expiration the value, the payoff of a call, the payoff of a put.  
For the buyer and for the center.  
Now what are we going to see from now till the end option strategies? That's what we will see is how to use a goal for leverage for speculating we will compare.  
Buying a coal with buying the stock, we will see what are the differences.  
Then we will go through the protective put that is using options for heading, heading.  
And finally, I will show you one straddle that is the perfect example of why options are dangerous.  
Why options can make you lose a lot of money? Yeah, and then there are more different strategies that you can Google them and it's funny or easy or simple to to get it and to draw it one we have seen. OK, let me start with this example.  
We are going to compare. We are going to compare 2 investments. I'm going to invest 77000.  
In search of Microsoft or I will invest 7000 by call options of Microsoft and I will see what is going on. Yes, Microsoft price.  
Microsoft.  
Microsoft prices 70, yes.  
And a call option with a strike of 70 and six months of maturity cost.  
Call with a strike of 70.  
Ghost.  
Remove.  
Yes.  
So we are going to compare.  
One investment for this A with this.  
OK.  
I'm going to invest 7000.  
And I'm going to invest 7000, yes. What is the number of stocks that I will buy?  
Under the stones, what is the number of?  
Derivatives of course I will buy 700 make sense.  
OK, what I'm gonna do I have invested.  
127.  
And what I'm gonna calculate, I'm gonna calculate my payoff.  
Considering this.  
Underlying as a price in the future 6065. So let me here.  
606570 in like, yes.  
And in the case of a.  
Calculate. I'm calculating the payoff, yes, the money that I'm going to receive.  
In the case of A is so simple to calculate the payoff. Why? Because if the if the stock worth.  
60 What would be my payoff?  
60 times the number of stocks that I have bought makes sense.  
Let me fix, let me fix this number. So my pay will be 6070 thousand and 90. Make sense.  
Now I'm going to calculate the payoff.  
For the call, yes.  
Here they pay you for the call.  
Will it make sense to buy 470 when I can buy 460? No. So I will be losing all the money and my pay off will be 0.  
Then.  
65 I will be continue losing zero. I will be continue losing if it is 670. Yes. And if it is 75, what is the payoff? The payoff is 75.  
9 The strike that is 70.  
Times the number of.  
Options of calls that I have bought very.  
I will have this pay off.  
And this make sense what I'm going to calculate now I'm going to calculate.  
The HPR.  
How will I calculate the XPR? Really simple 6000 / 7000 -, 1.  
Pay you off over amount of money that I have, I have invested.  
And this would be here.  
I will be. I will be losing for the person.  
Yep, and here I will calculate the payoff exactly the same.  
And I will be losing all the money.  
I will be losing all the money here. I will be losing just the half of the money here. I will be break even.  
Break even.  
And here I will get a 50% of return and here I will be making my money double.  
You see the point?  
What is the point?  
The point is that if things goes good.  
I will have much more than 30%. I will have three times what I will get by buying.  
The underlying, but if the price goes to 95, this will become much higher, much, much higher. But on the other side, careful because you can lose when buying, you can lose.  
Heavy.  
Therefore, because we will see in two slides that if you said you can lose much more than the premium you have got.  
You can lose money that you didn't know that you were gonna lose. Make sense.  
Any questions?  
OK.  
I feel sorry for those that are not here because what comes is important. It's really simple. You are going to understand it for next class is so simple to follow up, but it whatever, it's not my problem and I think sorry.  
OK, OK. What is this? This is a protective put. What is a protective put is buying the stock together with a put option and let's see what is going on. We are going to buy a share of Microsoft for 70.  
And I'm going to buy a put with this strike and let me calculate what is the payoff. Let me call this protective.  
Put yes and the payer 4050 to have 4050.  
OK, what is the pay off of the stock?  
The payoff of the stock is let me write with maximum, yes, maximum between the difference between the strike minus tender line.  
And C this.  
Oh, no, the stock. And this is the put. This is not the payoff of the stock. This is the payoff of the put. Sorry, sorry. So what is the payoff of the stock? The stock itself?  
The year of the stock will be 405060. Yes, the stock itself. Make sense.  
And now.  
What is the payoff of the book?  
The payoff of the Buddhists strike is a.  
If the underlying is 40, will I buy? Will I sell for 70? Yes, I will buy for 40, I will sell for 70 and I will get 30.  
So what I have written before is maximum between 70.  
Strike -40 and 0.  
This is 30.  
2010 zero and zero. Make sense and let me write total. What is the total? The sum of these plus?  
This one 70.  
What is this? Like having a floor insect? Have heads?  
I have pets.  
Why we will? Why won't do this always when buying stocks?  
You buy a stock, you buy the the stock together with the boot.  
What?  
Because the food has a price, but you need to pay for it. But this is like buying, buying a derivative, buying a food is like buying an insurance.  
What is an issue that you pay a premium?  
And you are his.  
OK, I want your attention for next class, for next class.  
I have.  
This is under my this.  
And this is the base I'm going to draw.  
What is this line? This line is the payoff of the underlying considering the underlying make sense.  
Yeah.  
Yes.  
And I'm gonna draw.  
I'm going to draw the payoff of a put option. Make sense.  
Yeah.  
And what I'm going to do now, what I have already looked at, I'm going to sum these two things. This is the stripe.  
This is a boat and here I'm going to sign.  
The stop plus the put stop plus the put is equal to.  
Let me.  
Start with the strike, yes.  
If I start with the strike, the put will have a payoff of 0, so I will have something like this. Make sense.  
Yes, and from this point, all money that I will be losing because of the stock, I will be receiving a pay off from the put. So I will have this graph.  
Make sense?  
Do you understand that graphs? What it is? The put plus the stock, yes.  
Do you understand the graph?  
That is, please.  
OK, now comes the important part.  
It becomes important that.  
Can you see it? No.  
You cannot see, please.  
Better.  
I'm gonna throw up.  
This is a call, the payoff of a call, no?  
Yes.  
Now I'm going to draw.  
This is underlined. Underlined, yes.  
The payoff of a ball with face value equals to the strike.  
Yes, what is going to be the payoff of a bond with face value equals to the strike?  
The payoff will be.  
The strike. All of you, please, Rob, the payoff will be the strike.  
No matter what the underlying asset will do, I will receive because it's a bond. I will receive a payoff, a constant payoff. Make sense.  
And when I'm going, this is well, yes.  
Are you following me?  
What I'm gonna do?  
I'm gonna send this and this.  
I'm gonna send this and this. Let me start.  
Stop.  
If the value of the underlying is lower than the strike.  
The payoff from the call will be 0, so I will receive a strike as this money, so I will receive.  
I will receive.  
This.  
Makes sense.  
And now I should add to the strike the payoff of the call.  
Make sense? What is this? A call plus a bond with fixed value. Let me call this a bond or let me call this cash, an amount of money that you will receive.  
Make sense? Do you see this graph?  
I like that, yeah.  
Do you see this graph where you should be looking also?  
Do you see this graph? What can you tell me between this graph?  
And this one.  
What day? They're the same, same page.  
They be off in place.  
Next day we will talk about this, but.  
A put plus the stock has same payoff.  
Same pay off as the as a call plus a board which face value equals strike.  
Next day we will talk about that and this is called cold food ***** for a for a.  
Or a given strike. Yes, both the call and the put should have same strike.  
Make sense?  
We are near you.  
So what is the idea here? We have to agree the project we put and what is being written here? This payoff is the same as that of a long call with strike of 70.  
Plus a ball with face value of seven. This is what you have on the ground.  
Make sense?  
OK, and in order to finish, let me show you a straddle. What is a straddle? Buy a coat and buy a coat both with same strike.  
Yes, you buy a foot and you buy a car, but with same stripe. Let me use.  
Please one.  
You buy a call when you strike, you have this payoff. You buy a pool with this strike, you will have this payoff and calculate.  
Those you have will have something like this.  
If you buy this together, you are buying a straw. You are long with a straw. Yes. What does this do?  
You pay in case there is no uncertainty.  
You lose money if there is low uncertainty. In case there is high uncertainty, you will get your money. Make sense.  
This is long struggle.  
You can also.  
Short and strong, yes.  
What is? What does to short a straddle means for a broker? For example, you sell it and in case there is low uncertainty, it's money that you are receiving.  
And if you buy a short straddle for a market where there is low uncertainty most of the times.  
You will get money in an easy way. Make sense.  
Let me show you the case of Nick Leson. Yes, who is Nick Leson? Nick Leson is a trader that a lot of days was playing against.  
Was short struggle against Japan market?  
One night struggled thinking that there was going to be low volatility. Most of the times there were low volatility, but one night there was an earthquake.  
And at the end, what happens with the shortest drug that you are getting?  
Again, and if there is high volatility.  
You can lose a lot, a lot, a lot, a lot of money. What happened with inclusion? He he took his bank into a bank. He lost there is written more than 1.4 million.  
Because of the struggle, because of the high, high risk. I am certainly so weak. What are the three main uses for options?  
You can stick with, you can hate, or you can have.  
Different strategies in order to get advantage of uncertainty or or get rid of uncertainty or play with that. Yes, derivatives are like Lego pieces. You can combine them.  
This is another one. There are more. There are bull spread, bear spreads. There are tons of different strategies. A bull spread is combining a long call with a short call or a long put with a short put.  
Let me show you so quick, so quick.  
All spread.  
Oh, cool. And there.  
Woods and bears while I'm talking about animals.  
Have you heard that the market is bullish and the market is very bullish?  
When the market goes up, there is when the market goes down, what is a bull spread?  
There is Internet, but there is no Internet. I don't care. I will draw because it's so OK.  
Please combine.  
They cannot be. I would spread this combined.  
A goal, long goal with.  
With a short call, with a different, with a different. I have just brought a bear.  
Uh, short call and here at the premium this we buying.  
This one, yes, if I get the payoff of the sun.  
I need to extract one with another one. I will get this then this one this point yes and once this goes in.  
Is there and then I will have this.  
Why is that? If the price goes down, I will receive a fixed amount of money. If the price goes up, I will receive. I will need to pay a fixed amount of money and it's just a spread. This is a very spread.  
Because I am think I am waiting the market to go down, but if I take this call on this, I swap.  
In two places I will get it. Makes sense. There are a lot of combinations. Internet does not work. I don't know. I don't know why I still have WhatsApp. Oh no, I don't have WhatsApp yet. So oh.  
Internet.  
There is no Internet.  
Do you know Internet?  
Available.  
There is no Internet, so I'm thinking about sending you the DX, but whatever.  
Let me just finish bull spread, very spread. There are butterfly spread that is combining a call with two short calls and a call. Yes, you can do a lot of figures, but we are not going to go through them in order to summarize what we have seen.  
What are options? A call and a put, sort a call and a sort a put. And then we have seen several examples. Options are right, not an obligation and.  
Next day we will talk about what happens before experience, how to calculate via the premium. Enjoy the weekend.  
And let me see if I have Internet.  
No, they listen.  
I will send you the excel next day. I think that in bright space you have one excel.  
We do days less, but if you need whatever, yes, ready and I will, yeah.  
Thanks. Thank you. Bye, bye. Enjoy the weekend.  
I'm doing it like where I can change. So I just have to.  
You are fastening because of culture or religion? Come on, too much. But I'll try. You can do it. Welcome.  
You too. Bye, bye, bye.  
I.