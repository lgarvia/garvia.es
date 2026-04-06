# Foundations of Finance – Session 26  
**Date:** April 22, 2026  
**Topic:** Swaps, Forward Rates, and Final Course Integration

---

## 1. Context: this class is a synthesis, not a new block

This session is not really about introducing something radically new.  
It is a **compression of the entire course into a single logic**:

> Finance = present value of future cash flows.

The professor starts exactly there, deliberately:

- bonds → fixed cash flows → discount them  
- equity → uncertain dividends → estimate and discount  
- derivatives → derive value from underlying cash flows  

Everything reduces to:

$$
\text{Price} = \text{Present Value of future payments}
$$

This is the backbone. Swaps are just another expression of it.

---

## 2. Equity valuation reminder (because everything connects)

Before entering swaps, he reinforces a key idea:

- Bonds → cash flows known  
- Equity → cash flows uncertain (dividends)

But the structure is identical:
- estimate future cash flows  
- discount them  

He even revisits **two-stage valuation**:
- early irregular payments  
- then a perpetuity

The key message is not the formula itself, but this:

> There is no magic formula. There is only structure and understanding.

If you understand cash flows and discounting, you can solve any variation.

---

## 3. The real bridge to swaps: forward rates

Before touching swaps, the professor goes to what actually matters:

> **Forward rates**

This is crucial.

Because swaps, in practice, are just:
- a **collection of forward contracts**

---

### 3.1 Spot vs forward rates

You are given:

- Spot 1Y = 1%  
- Spot 2Y = 1.5%  
- Spot 3Y = 2%

Question:
👉 What is the **forward rate between year 2 and 3**?

Core idea:

$$
(1 + S_3)^3 = (1 + S_2)^2 \cdot (1 + f_{2,3})
$$

This is **pure arbitrage logic**:
- investing 3 years directly  
= investing 2 years + rolling 1 year forward

---

### 3.2 What you must know for the exam

He is very explicit:

> This WILL be asked.

You must be able to:
- go from **spot → forward**
- go from **forward → spot**

And understand:
- forward rates = implied future short rates

---

## 4. Discounting with a yield curve (term structure)

Once you have spot rates, you can price anything.

Example: Bond with coupons

Cash flows:
- 50 at t=1  
- 50 at t=2  
- 1050 at t=3  

Price:

$$
P = \frac{50}{(1+S_1)} + \frac{50}{(1+S_2)^2} + \frac{1050}{(1+S_3)^3}
$$

Key insight:

> Each cash flow is discounted with its own rate.

This is **term structure pricing**.

---

## 5. Now: what is a swap (clean definition)

After all that preparation, swaps become trivial.

> A swap is a contract where two parties exchange cash flow streams.

That’s it.

---

### 5.1 Structure

A swap has:
- **two legs**
  - fixed leg
  - floating leg (or another variable leg)

At initiation:
- **no money is exchanged**

Later:
- only **net differences** are paid

---

## 6. Types of swaps (three main ones)

### 6.1 Commodity swap

- Exchange price exposure between commodities (e.g., oil vs gold)
- Value = PV of one leg = PV of the other

---

### 6.2 Currency swap

- Exchange cash flows in different currencies

Example:
- You pay EUR
- I pay USD

Used for:
- hedging exchange rate risk

---

### 6.3 Interest Rate Swap (IRS) → the key one

> The most important type

Structure:
- one party pays **fixed rate**
- the other pays **floating rate**

---

## 7. Scale of swaps (this matters)

Professor emphasizes:

- Global swaps notional ≈ **400+ trillion**
- World GDP ≈ 100 trillion

This is not about actual money moving.

Important clarification:

> Notional ≠ cash exchanged

Only differences are exchanged.

---

## 8. Interest Rate Swap intuition (core example)

You have:

- Notional: 100M  
- Fixed rate: 6%  
- Floating rate: market rate  

### Case 1: rates = 6%
→ no payments

### Case 2: rates = 6.5%
→ floating pays fixed  
→ difference = 0.5% × 100M

### Case 3: rates = 5.5%
→ fixed pays floating  
→ difference = 0.5% × 100M

---

### Key idea:

> Swaps transfer **interest rate risk**, not principal.

---

## 9. Why swaps exist (deep logic)

This is one of the most important conceptual parts.

Swaps are NOT for:
- making money per se

Swaps are for:
- **hedging risk**

He uses a powerful analogy:

> The best insurance is the one you never use.

Same with swaps:
- ideal outcome = no payments
- meaning risk was neutralized

---

## 10. Pricing a swap (conceptual, not required)

He explicitly says:

> This will NOT be asked in the exam.

But conceptually:

$$
PV(\text{fixed leg}) = PV(\text{floating leg})
$$

At initiation:
- swap value = 0

So you solve for the **fixed rate** that equalizes both sides.

---

### What is that fixed rate?

> The swap rate = geometric average of forward rates

This is the key connection.

---

## 11. The real takeaway about swaps

You don’t need pricing formulas.

You need to understand:

- swaps = bundle of forward contracts  
- swap rate = function of forward rates  
- forward rates = derived from spot curve  

So the hierarchy is:




# Transcription
22 de abril de 2026, 5:09p.m.
1 h 3 min 17 s
Welcome, bye.  
Thanks.  
Yeah.  
Yeah.  
Before starting, have any questions regarding the whole course regarding the final? I mean, I mean regarding equity, regarding loans.  
I don't know. Okay, no, let me go. Overwhelmed. Yeah, let me go quick.  
Little ideas.  
Because, yes, being alone, I think we can, we need make, we got quick, quick, yes, all course.  
Imagine that I have a financial instrument.  
One financial instrument.  
Okay.  
You promise? Hey, two years.  
A 100, yes.  
I'm not selling from in that.  
Did you hear that?  
Will pay me 100.  
How can I get the price?  
Please.  
And you present that?  
I need to take is that this 100 to present value.  
100 / 1 R rise to the second.  
Yeah.  
The whole course.  
Do we need to do?  
This probability by some value of things that will be made in the future.  
If we are talking about its go.  
We know for sure what future payments are going are going to be.  
Same income, yeah.  
On the other hand, we are talking about equity valuation.  
We don't know for sure what these payments are going to be, but we can estimate it.  
Take me future payments.  
Are we going to be called the events?  
But it's an evening that I will proceed because of holding.  
So, so I will receive.  
Yes, it's here.  
Homans.  
No, no.  
I see the amount of money that I will receive because of only a stock.  
No.  
How are we going to?  
How are we gonna calculate?  
Because I so must.  
I can read in person, Mario future minutes, yep.  
The most simple thing.  
I'm gonna have a constant dig there.  
That is going to be paid.  
For it. A constantly didn't know, for example, K.  
And.  
This is a perfectly.  
Or are we going to calculate the present value?  
Then, open up.  
For one payment.  
One plus R, right? Do you want to say the true value for all?  
Then, you went up.  
In order to understand this in an implicit way.  
I have the price, and each payment will represent the percentage of the price.  
Okay.  
This is the most simple.  
Yeah.  
This one.  
This is the most simple method.  
In Alba.  
Okay.  
I can, I can also, OK, you need them to know.  
That seems, you can go at that all some break. Yeah.  
You.  
It was actually.  
****.  
Okay.  
That would be like different, like 10, 12.  
And then repeat our conference, but in an indirect code.  
Well...  
Eleven.  
I have these payments.  
We are going to calculate the price.  
With true strength, yes?  
I think this, I think this, we have this.  
From year three.  
On year three, the begin constant payment of 10, yes, third year two at 12, and second year 11.  
In case we have this.  
You can use, you can go.  
Good.  
Take two ways, every way.  
You were gonna.  
It's under perfect in class.  
True.  
One plus R + 1.  
One plus R rise to the second. Make sense?  
What?  
Because here you got 10 + 2, 10 + 1, so I continue with the perpetuity and also add this two and this one. Make sense?  
On the final.  
This one like this? No. Like this one? No.  
But I'm gonna tell you just right now, yes, but I want you to think and to play with numbers.  
What can be in the China?  
This exercise can be the fat. This, this what? I mean, this same exercise.  
This exercise like this can be defined out, but the way in order to solve it.  
Is.  
Here, this is on Tuesdays.  
Here, we can play prize in here to us then over our.  
Yes.  
Once we got.  
Nice in here, too.  
Okay, I wanna complete.  
Nice today, as we.  
When?  
One plus.  
Yes.  
One plus R raised to the second.  
Last.  
You too, and you stand up over one plus R, right? Yes.  
Please number.  
This number.  
Look at me.  
Same result.  
What I'm doing, I'm calculating present value of future values.  
I have to stop the movie, Alibi.  
How are you going to bring the place of the store?  
I can play the present by you off in 20 minutes.  
This time, everyone.  
Not only you can find something similar to this.  
Probably, you will find something similar to this, because it's what you can find it, it's easy to calculate. Is there a question like this on the practices, so I can practice with it?  
Right, right. I mean, this is working with that other one.  
You are looking for a formula, Troy. It is not a formula, it is just understanding. What I'm doing is, what I'm doing here, calculating present value of this, calculating present value of this, calculating present value of this.  
Okay.  
Calculating present value of all feature test flows all together.  
Why did you stop at the current one? Should you also go to the open?  
Why do I stop? Why do you stop at 11? I mean, this, I have 9. I mean, you want to receive 12 euros, you want to receive 11 and then 10 forever, so once we do that.  
Like, we don't need to, it doesn't stop at your file, yeah, no, no, so, like, something that goes on.  
Okay.  
And something that would be paid forever is called perfect. Perfect. Yes.  
I thought it stopped at year 5, but if it so, if the question like stop at year 5, then you would have to continue finding for year 4 and year 5 by doing like 1 by R, three, one, yeah, yeah.  
What we are doing is just calculating present value, and...  
The exercise that is just like this is the one that you have a one of the second class. There was one exercise that was the Starbucks exercise.  
Mhm.  
Even one of the winter of girls, it's a big no.  
Pizza.  
Good morning.  
You have gone through these kind of exercises.  
Oh, thanks. I mean, here is the mouse.  
I love you.  
Ohh.  
I think.  
So good. Personally, I have just one or two. Four now. Yeah, absolutely. Sam, the exercise, there are several exercises like this.  
The one that we got, the one that we got on for the class is just.  
If we evaluation 2, if we evaluation 2, I don't remember.  
And.  
Where are you?  
Trying to see anything because it was 15, what, what exam 15 years after 15, 16 is it would be one and 17 is it would be two. I don't know. Yeah, I mean this is.  
This is called two states.  
First state, first state is calculating this one and this one. The second state, the second state is calculating the rest, yes.  
Okay.  
I am told to tell you this in class. I think you have received the evaluations. You can fill them up.  
Oh, I see the map.  
Yes, pudding, good place, me, and the peace and...  
OK.  
And Sam, if you feel it, I will also give you a grade because you are just thinking about maths. OK, plus.  
I was looking at the beginning, I had just some, so I have start reviewing them with evaluation.  
Regarding equity evaluation, what I was telling Sami is that you are going to have.  
Future payments.  
Please coach the whole course.  
Hello?  
I believe present value of future payments.  
What we have been doing when talking about the multi-valuation calculating present value of future payments. What we have been doing when talking about fixed income value ratio, calculating present value of future payments. In the case of fixed income, future payments are fixed, are certain. In the case of  
Equity evaluation, future payments are being called dividends, and we don't know what the dividends are going to be.  
Yep. Also, I have shared with you in the WhatsApp group, problem set, sorry, for example, final one and sample final two solution.  
And has has me and people.  
I strongly recommend you to start reading from the final examples without looking at the source.  
Because, not looking at the solutions for distance and extract, yeah, and where?  
Any questions regarding?  
Every evaluation or...  
Can you, or?  
Is it both?  
Now, next week, we are going to dedicate both days of class to review everything.  
Time now will be this Wednesday, no, the week after.  
So we have the whole week in order to review. We will talk about technique, we will talk about physical, and we will talk about data. Are we going to go over the practice exams next week or just like general review? We are going to go over some more final one.  
And, depending on time, sample final two, but I will start asking you.  
Do you have any questions? Do you want me to go through anything in particular?  
You don't have any questions, and if you don't want, I will pay for a few seconds, and then I will do the exercises. Yep.  
Okay.  
Fixing long, equity valuation.  
This week, we can review it, yes?  
Then we have been talking about derivatives.  
We've been talking about the river.  
Options.  
Now, to understand, first time you see them.  
After working with them for two or three days, options are so simple.  
Yeah, you should know how to calculate the day of my call, my boot.  
Then knowing the binomial model is absolutely important, binomial model, and if we did one exercise in class, you have another exercise in problem set 6.  
And you guys might need one or two exercises in sample files.  
I know the exercise. Listen, calculating a portfolio. A portfolio that combines a stock.  
Come on, in order to regulate your surprise. Make sense?  
Then, also, you have what are the fixing code in the station exercises, but again, it's calculating one portfolio.  
Do you remember exercises?  
Wish you.  
The one we did the day after.  
That one fixed payment that will happen in year 50, you have one with higher maturity with lower maturity, and you have a with lower.  
Absolutely important to know how to calculate the ratio. This is OK.  
Now, today, we are going to talk about Schwabs.  
What's?  
Hey.  
And why I'm talking about Schwartz?  
We will review.  
For what?  
We will review this, the new proof.  
It's all great, and we will review also.  
Campus.  
Let me start, instead of talking about swaps, let me start with the most important thing we are going to review from today. Yes?  
Do you remember reading Wolf?  
Yep, great.  
I'm talking about the deep proof.  
Ohh.  
Now, I'm going to do an exercise, because we are a few. I'm going to do one exercise that will combine your move forwards and spot rates.  
Also.  
Phone Always.  
An exercise like this can be asked in the pipe.  
These same exercises can be asked.  
You have.  
Yeah, one, two, three.  
One person.  
1.5%  
And 2%, yes.  
This is the new book.  
Pizza Campus.  
What is?  
For one rate, we be here to agree.  
Going the spot in year one, the spot in year two, and the spot in year three. Make sense, Vega?  
Why is we so worried? No way.  
How much is this knowing that this is 1.5% and that this is 2%, yes?  
How will you calculate this for what?  
I do it.  
What plus the support?  
Year 2, one class, year 2 raised with the second.  
Thanks, one plus the forward I'm looking for.  
Yes.  
What was this? Thanks. This one?  
It's going to be one, two.  
One plus 2% rise to the third. Make sense?  
1 + 1.5.  
And one plus one.  
Power between year two and three, if between two and three.  
What I'm doing at the end is like, Ana, this is a geometric average.  
I want to break this one.  
In order to calculate this one, how I want to calculate this one?  
And this plus this is equal to this.  
One plus 1.5% times this one.  
Yep.  
What kind of exercise can you find in the final?  
Once one where, for example, I give you the power rate, I give you the spot.  
You are asked to calculate the other conference.  
Or, you are asked to calculate for work.  
Makes sense.  
And now, with this data.  
Once you know this, I told you.  
Please, go play.  
Fifty, 50, 1000. Yes, once you know this is for rates.  
Please help me.  
The price of people.  
What? Sorry, I don't know. This is the spot rate in your one.  
The spot rape in year two, and the spot rape in year three.  
Did you?  
And that was a bit easier for you.  
One 1015 is here. No, no, no, no, please, please.  
There are two things to them.  
First thing.  
You.  
Deal.  
Cool.  
What is the new proof?  
What is the deal proof?  
Yes, I have.  
Leaving the time.  
Will give me their name?  
I am great. Yes.  
You are one, you are two, you are three.  
Wait, how much return I will get if I wait for wedding?  
One person. How much return I will get if I wait for two years, 1.5%. How much return I will get if I wait for three years, 2%.  
This is great.  
I have been called Scott Prince.  
Thanks.  
But we know this for grades.  
You got a great, what rates?  
rate is between spot rates, spot rates are between zero and year one, zero and year two, zero and year three.  
Race.  
What rates are rates between year one and year three, year two and year three?  
First thing you need to know is...  
Giving forward rates, how to calculate the spot rates, or giving the spot rates, how to calculate forward rates.  
Is this?  
Last terms of exercises in sample final one and sample final two regarding power and spot rates.  
Yeah, I mean, in order to calculate over rate, you need to know to spot rates, and if you...  
Have one for water rate, you need to know another spot rate in order to public for water.  
Next week, we are gonna do two, three, 4 exercises like this.  
Are careful because there is one thing more that will complicate things.  
These are rates, even the game.  
Do you remember the exercise regarding RV drugs?  
The Army cuts, we did several exercises with balls and rings.  
Once we know the race.  
We can calculate price of things that will happen in the future. I have future payments.  
I have your payments, I can calculate the price.  
For example, on a boat, yes.  
This is the school in year one, year two, and year two.  
Once we know this, and we take another color.  
The.  
No.  
Let me take another color and let me give you one of these.  
Okay.  
Once, I know this is for grace.  
What can I ask you?  
Please calculate.  
The Price of Avon.  
With 5% coupons and 1000 face value.  
Google.  
Who come payments is gonna be 50?  
50 and 1000.  
Hello!  
I have this group of payments.  
And I am asking you to calculate this price.  
How will you calculate this price?  
Price is going to be equal to.  
Is it not your first payment, 50 over?  
One plus 1%, rise to one.  
Yes.  
Class.  
Fifty over one plus.  
1.5% rise to the second.  
That's Australian.  
One 1050 / 1 2%.  
Right, do the same.  
Yep.  
Yeah.  
You should fully understand this, why? Because...  
I can give you the price, and if I give you the price, you should translate the rates. You can, we can go from one in one way or into another way. You have in the exercises, you have several examples of this. Tell me, but like, how can you calculate like?  
Call Nepal.  
No, no, I mean, again.  
But, several things, you are not going to find this with more than two years.  
And no money.  
Do we know the rate in year 2?  
You will be asked to regulate the way to India one.  
Try to do the exercises, and then we will try to do the exercises, sample final one and sample final two, because in these exercises you have examples of all of these, and those exercises are there in order to make you think.  
Excess.  
Okay.  
Most important thing we are going to see today is to review this idea regarding polls.  
Where is that swap?  
I never have trips.  
In which context have you had all the clubs?  
Which type of jobs?  
There are three principal uses for swaps.  
I want, let me start with the...  
Less, we call you.  
This.  
Please come on juice.  
Regarding commodities, we're talking about swaps.  
You will always have, I mean.  
Skype.  
You will have shoe legs, yes?  
You have two commodities, oil and gold, for example, this.  
How will you get the price of this one?  
How will you making the present value of both plays the same? Yes.  
You have one leg and another leg.  
Today, when you close the contract, today nobody pays anyone.  
Like, bye in the future.  
If you buy a picture, you don't pay. Just assume one position in the contract. Makes sense?  
When you buy a picture, don't pay anything; you just close a company.  
OK, goodbye, future. Sorry, you.  
You get the price. What does to get the price mean? You calculate present value on one side and present value on another side. We're talking about commodities.  
We're talking about commodities.  
You assume that present value of one part of the contract would be the same as present value of the other side of the table. Make sense?  
Okay.  
Second type of swaps.  
Wait.  
You will have donuts.  
Be paid in the future, you will have EUR to be paid in the future.  
And you assume that the amount of dollars that you will receive in the future will be equal to the amount of dollars that I will receive in the future. And wish what you will give me.  
A fixed number of EUR in the future, and I will give you a fixed number of dollars in the future. Yes? Do you remember from last class how was regarding currency?  
Forward regarding courage, one exercise that we did last class. We will repeat. I will show you and we will see.  
is the same. Calculating a total for currency is the same as calculating a swap for currency.  
And...  
The most important use for swaps, most important use for swaps.  
Interest rate risk.  
It is great, Ruiz.  
I cannot believe, Viva, that you are enjoying my class so much.  
You are smiling a lot.  
But please, not for I mean, I don't care much, but I think that you are not enjoying it because of my explanation regarding shops.  
Probably because that's something.  
Be careful with this. When you look into something different than what you are seeing in the class, don't smile much. Because the teacher can think that you are somewhere else.  
Personally.  
Vega.  
IRS interest rate swap. I want all of you some.  
It is great. I want all of you to hear at least one in your life, please.  
4003.  
Four 100 trillion is a liter is a lot. How much 400 trillion is?  
How much is US EB?  
No.  
Isn't that the?  
How much is US debt?  
No.  
It was that this 39 trivia.  
You guys calling them the government.  
US GDP is around 27 trillion.  
Please try to remember these numbers, because...  
You should know this number in order to put things in size.  
Four 100 trillion.  
Four 100 trillion, all global EB.  
The world is around 100 trillion.  
Five 100 trillion.  
No.  
All swaps that are betrayed in the war.  
Wait around all times.  
More EB.  
Right.  
Or an EB.  
Four 100 trillion has no need, 400 trillion.  
Cash is being paid from one to another.  
This is the amount of the notion of value. Yes, we will see, even need, for example, interest rate track. Yes, thinking about an interest rate track.  
You have a mortgage of 100 million. You have a mortgage of 100 million. One 100 is the notional amount, but the rate.  
to be actually percent. If you are a key is floating rate for fixed rate. So if interest rate remains the same, no point will pay the other one. If interest rates are about 3%, one part will pay the other one, and if interest rates are below 3%, the other part will pay the person.  
Makes sense.  
So, not 400 trillion arbitrary. 400 trillion is the notion of a moment. That is a big, big number.  
Don't forget that derivatives are zero-sum gains. When you contract an liberty, no money is being frayed from one part of the contract to another one. That's zero something. Make sense? What is the best thing that can happen to you in life?  
One of the best things that can happen is doing life.  
Contract a lot, a lot of insurances.  
Never received any money from an insurance company.  
Bail open news.  
and never receiving money from insurance companies. You understand what I'm saying, no? But at the end, the Liberty's contract are here not to move money, are here to heads.  
I need you to avoid who we want to make sense.  
OK, contract details, users of swaps, raising of swaps, and we will be done.  
What is a swap? A swap is a contract between two banks. A swap is a specific type of deliver. A swap involves two sides.  
Each side is going to be cold, like better one day.  
A swap is a contract where two counter parties agree to exchange one stream of cash flows against another stream. Next sense?  
1.5 million for 1 million for each of the next exchange rate trap, yes?  
$1.5 million, or one point million, sorry, 1 million pounds.  
This is.  
I say spray truck.  
Careful because, not careful, at an exchange rate truck also can be considered as a power exchange. Last day we see futures and powers, and last day we had New York.  
You can, you will calculate this one as we did before, and then.  
200 trillion is an old number. Now I will bet that is over 400, and I will bet that is over 600, whatever.  
And then, in turn, straight, float in frame for this way. Make sense?  
OK, you subscribe.  
And the most difficult uses you were.  
No.  
You are from India and you are working in Spain. I am from Spain and I am working in India.  
We can enter into an agreement, because...  
You are working in Spain, but what do you call national currency? India's currency. So you are receiving Euros, but at the end you want Ruiz.  
I am receiving Ruiz there, but at the end I want you, so we enter.  
A contract is a not physical, is a contract between you and me now.  
No stock exchange, no design, no this contract and one year time or two year times, I will pay you with Ruiz and you will pay me with yours.  
Thinking about floating rates, Morales.  
You want to heads? I mean, say this in different, so...  
Contact A SWAT in order to hedge this risk.  
Nick.  
Yeah.  
Okay.  
This exercise is so simple.  
At the end.  
There is one part of the contract.  
You have 100 million bonds with 6% open rate. Yes, so.  
Interest ghosts or bone?  
Interest cost of both, no matter, no matter what the interest rate will do.  
Six percent, 6, 6, and six.  
The cost of the bombing speaks, yes?  
What are we going to do with the truck?  
Too far to the.  
You are one part, and I am the other part.  
We are not, we don't care about the bomb, but we need to put a number and say, oh,  
You will pay, or I will pay you. We need to know a notion of home. One 100 will be written in the contract, but you will not pay me 100, and I want to pay you 100. One 100 will be written in the contract because we need to calculate.  
The percentage of what? The percentage of what? Makes sense.  
Floating or fix, which? What do you want, floating or fix?  
Look, so you...  
Hey, the bloating part, so...  
Fingers race go down, you will be happy. Fingers race go up, you will be unhappy.  
No.  
Different rates remain at 6%.  
You won't pay me, I will not pay.  
Be third rates.  
Nice!  
Ohh.  
6.5 percent.  
You are floating, yes. You will need to pay me.  
Open, right?  
Fifty basic points, 50 basic points of 100, so you will pay me.  
I...  
I'll tell you, yeah.  
Peter, afraid, prices, you will pay me half a year.  
We better race, drop.  
5.5, I will pay you half a minute.  
Excess.  
Then, when saying that all notion among these 400 video.  
This 100 million will be part of 400 trillion, but at the end.  
This 100 million is not in trade. At the end, you pay me, or I will pay you.  
A small amount of this one makes sense.  
What do you?  
This is the most difficult thing we are gonna see today.  
Price.  
How will you get the price of a swap?  
Like me, it is.  
Where is?  
I think.  
and there is a floating leg by calculating present value of the fixed leg and making this equal to the floating leg.  
Or are we gonna agree?  
It blows me great.  
Good day.  
No.  
Do you know the song?  
Yes, not forget.  
I mean, I'm not going to ask peace in the fight.  
I know, but I want you to understand how drugs are big price.  
Thanks.  
Yes, but will be us. I am just talking about this particular explanation regarding how to get the price of a swap.  
And you will get the price of this one with the with the.  
A whole class, yes, you should understand and know what's a swap. But in this case, in particular, regarding swap pricing,  
You are pricing. How will you get the price of a swap?  
by calculating present value of both legs.  
These particular things, being some, would not be asked.  
Get the price.  
Hey, what?  
He goes at the end.  
What slides have been?  
AB.  
You don't need to know how to calculate the price as well.  
Because.  
Because, at the end.  
How are you going? How are we gonna calculate prices? What you should know for the final?  
Two.  
is in order to calculate. I need a red chart at the end what we will be doing is calculating.  
Forward race.  
Oh.  
Do you need to know how to calculate the forward rate for the final? Absolutely, yes. It is what I have told you at the beginning of the class that it is absolutely important and that probably will be asked for sure.  
At the end.  
Swaps, this part of swaps is a breakout regarding forward rates. Yes? How will you calculate price of the price of a swap?  
In all terms, you should vote the new proof by particular with their forwardings.  
Exactly.  
No.  
Right.  
Want to know all former rights?  
What is the swap break?  
The geometric average of Albright.  
We did this, we're talking about that. We have done this kind of exercises several times during the course. When you ask, imagine that you are working.  
in Deutsche Bank. And you ask for the derivatives, this, to get the price of a swap. When you ask for the price of the swap,  
What the desk will tell you?  
All right, the big spring.  
How will you calculate the heat rate by calculating power rates, and then the geometric calculation or power rates?  
Makes sense.  
Then, who is?  
All right, who is who is C Schwabs?  
What is that?  
Same formula, the one we saw in the last class. Let me go through the system.  
Toky.  
You have.  
Federal Reserve, Jaden Powell.  
This.  
0.5.  
Ana.  
Australia, Central Bank, Australia, Central Bank.  
3.5%.  
What is the spot exchange rate between Australian dollars and US dollars?  
But go over, go over.  
It's all great.  
This $1.00 per dollar. Yes, we saw, we saw this exercise last night. For already this.  
This phone.  
Thanks, one plus the return on US over, one plus the return on outer track, makes sense.  
You just have one payment.  
You will calculate the whole quarter rate. You have more than one payment for the first one, this one. For the second one, rise to the second. Rise to T.  
And at the end.  
This one?  
This one will be.  
It says...  
I wish to.  
The average.  
The average of the forward, the forward, and the forward. We will go again, beside geometric average.  
But the same thing that I have told you before, IRS, you don't need to know how to price as well.  
I want you to understand what is a truck, but for me, what is absolutely important?  
Jessica.  
Second evaluation, and then regarding derivatives, false and false. Talking about absolutely, absolutely, absolutely important that you go move forward.  
I'm not going to ask anything, anything regarding owners.  
I have to go.  
I want you to know basically.  
And then, have you understood all things?  
Yes.  
And then we can review it. I have no sound. You can ask me all the questions to me.  
Regarding swaps, we are done. Let me just tell you 2 words regarding something that is called CBS. Have you ever heard about CBS?  
Okay, 2008 prices.  
I'm gonna go quick.  
We are done with today's class, just one more thing and we can go, but in 2008 crisis.  
2008 crisis.  
There were several brothers that were being trained.  
MBS. MBS stands for Mortgage State Securities.  
CBO's collateralised death obligation.  
ABS, asset paid securities, mortgage paid securities, asset paid securities, collateralised debt obligation. What are all these kind of instruments?  
Instruments that we pay are fixed, that we pay.  
Assets that we pay a cash flow.  
I.  
Yes, what does to be called at the rice mean?  
The degrees.  
You look, baby, I have, I got an I can take you a house or something. Make sense?  
All these instruments.  
We're in training year 2008.  
And together with these instruments, there were also a different type of instruments that were created, that were C, D, S, yes.  
What is a CBS? A credit before swap.  
Why? Why these instruments?  
This is the rest.  
These instruments, where an investment product you put money and you will receive a cash flow, and true of this instrument is absolutely different. This instrument, I will authorize it to take, I sorry, I am ready.  
He's having sugar.  
Send you to it.  
Just use something.  
The word CTS against Greek. What does this mean? It means that I will get money just in case the Greek government, Greece.  
Why is that CBS? I will get money. Sorry for what I'm going to say, God. I get money if you die.  
Do you understand what I'm saying? One thing, if you work...  
I give you money. I give you money. And if you make money with my money, you will pay me back and I will be happy and you will be happy. You understand this game? The other hand, what is a CBS?  
I will give you a baby.  
And you will receive money just in case I die.  
What I want to say with this example?  
What is the idea of this example?  
A lot of people not in school, yes, school.  
I made a packet, a bowl full, a bowl full of candies, blue, orange candies, yes.  
And I introduce you, candies, school, you put the candies in front of the school and what is going to happen with our candies.  
Yes.  
Nine that I put together with the candies.  
Little things that looks like candies.  
Taste like candies, but have LSD.  
You understand what I'm saying?  
What is going to happen with the kids?  
Most of kids will eat candies, and some of the kids will have.  
I'm trying.  
I don't say.  
But I want to tell you with this. This is the last thing I'm going to say officially in this course. What is the idea of finishing with this?  
You?  
Sue, always.  
Understand.  
Where are you investing your money?  
Never, never buy something that you don't understand. In this case, there were a lot of investors that were buying CBS, as if they were CBOs, ABS, or MBS.  
Five minutes.  
Because the more complicated something looks, the more expensive, the more, oh, this is something really sophisticated. Why are you here in order to learn sophisticated things? Make sense?  
Okay, we are done. Next day, we will start by reviewing problem sample final one. Please, for next day, try at least sample final one. Yes? Enjoy and rest.  
Any questions?  
You.  
Hindi.  
Cool.  
Welcome all. Thanks. Hey, forwarding. A pleasure.  
Okay.  
God bless her, how was the interview? You have an interview before the class? You have?  
Oh, no, I was just running late. Sorry. Ah, don't worry. Yeah. And because you came with Vivant, we can think that it was Vivant's fault. Yeah, I'll wait for you to vote. We can welcome together. Thank you, Professor. Welcome. See you.  
You too.