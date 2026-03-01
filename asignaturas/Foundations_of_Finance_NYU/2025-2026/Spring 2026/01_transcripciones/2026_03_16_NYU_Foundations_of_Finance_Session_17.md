# Foundations of Finance (FoF) – Session 17  
**NYU | March 16, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 12min  

---

# 1. Efficient Market Hypothesis (EMH)

The class begins revisiting **market efficiency**.

Key idea:

> Markets react to **new information**.

When information appears:

- investors react
- prices adjust
- the advantage disappears

Therefore:

$$
\text{Efficient Market} \Rightarrow \text{Prices reflect information}
$$

However:

In reality there is **constant new information**, so markets are **never perfectly efficient**.

---

# 2. Market Inefficiency and Arbitrage

If prices do not fully reflect information:

Two concepts appear:

- **Market inefficiency**
- **Arbitrage**

---

### Arbitrage Definition (Theory)

Arbitrage is:

- **Zero investment**
- **No risk**
- **Positive future payoff**

Formally:

> A trading strategy with **no initial cost**, **no risk**, and **positive profit**.

This is sometimes called:

**“Free lunch.”**

---

### Arbitrage in Practice

In reality:

- pure arbitrage is rare
- most strategies involve **some risk**

Therefore:

> In practice, arbitrage often means exploiting **temporary price differences**.

---

# 3. Example: Long-Term Capital Management

The class briefly discusses **LTCM (Long-Term Capital Management)**.

Important points:

- Hedge fund using **fixed-income arbitrage**
- Managed by extremely sophisticated economists
- Included **Nobel Prize winners**

They generated extraordinary returns for several years.

But:

- The **Russian financial crisis (1998)** caused massive losses
- The fund almost collapsed

Lesson:

> Even sophisticated arbitrage strategies can fail.

---

# 4. The Icarus Warning

The professor introduces the **myth of Icarus**.

Story:

- Icarus and his father escape using wings made of wax.
- His father warns him not to fly too close to the sun.
- Icarus ignores the warning.
- The wax melts and he falls.

Interpretation:

> Good ideas become dangerous when taken too far.

In finance:

- excessive confidence
- excessive leverage
- belief in “perfect models”

can lead to collapse.

---

# 5. A Message About AI and Learning

The professor gives a warning about **AI in education**.

Analogy:

If someone asks you to **run 10 kilometers**,  
but you **take a car instead**,  
you did not train.

Similarly:

Using AI to solve exercises without thinking means:

> you skip the intellectual training.

University learning is like **mental exercise**:

- repetition
- small routines
- personal effort

---

# 6. Arbitrage and Market Efficiency

There is a key relationship:

$$
\text{Market Efficiency} \Leftrightarrow \text{No Arbitrage}
$$

If arbitrage opportunities exist:

1. investors exploit them
2. prices adjust
3. arbitrage disappears

Therefore:

> Arbitrage activity **makes markets efficient**.

---

# 7. The Law of One Price

A fundamental principle in finance:

> Two assets with the **same future payoff** must have the **same price today**.

If not:

$$
\text{Arbitrage Opportunity}
$$

This principle is called:

**Law of One Price**

---

# 8. Example 1 – Zero Coupon Bonds (CATs vs TIGRs)

Two securities:

| Security | Price | Future Payoff |
|------|------|------|
| CAT | 94.34 | 100 |
| TIGR | 95.24 | 100 |

Both pay **100 in one year**.

But prices differ.

---

### Arbitrage Strategy

1️⃣ Buy the **cheaper security**  
2️⃣ Short sell the **more expensive one**

Cash flows:

Today:

$$
+95.24 - 94.34 = 0.90
$$

Future:

$$
-100 + 100 = 0
$$

Result:

> Immediate profit of **0.90 with no risk**.

---

### Market Adjustment

If many investors exploit this:

- demand for the cheaper bond increases
- supply of the expensive bond increases

Prices converge.

Arbitrage disappears.

---

# 9. Transaction Costs

If transaction costs exist:

Arbitrage may disappear.

Example:

- profit = 0.90
- transaction cost = 1.00

Then:

$$
\text{Arbitrage not profitable}
$$

Therefore:

> transaction costs create a **range of prices where arbitrage does not occur**.

---

# 10. Example 2 – Pricing a Coupon Bond (Core Example)

Given:

Zero-coupon bonds:

| Maturity | Price | Payoff |
|------|------|------|
| 1 year | 98 | 100 |
| 2 years | 96 | 100 |
| 3 years | 93 | 100 |

We want to price:

- 3-year bond
- Face value = 100
- Coupon = 10%

---

### Bond Cash Flows

| Year | Cash Flow |
|----|----|
| 1 | 10 |
| 2 | 10 |
| 3 | 110 |

---

# 11. Replicating Portfolio

We replicate each cash flow using zero-coupon bonds.

To get:

Year 1 → 10  
Year 2 → 10  
Year 3 → 110

We buy:

- 10% of the 1-year bond
- 10% of the 2-year bond
- 110% of the 3-year bond

---

### Cost of Replicating Portfolio

$$
Price =
0.10(98) + 0.10(96) + 1.10(93)
$$

$$
Price = 121.7
$$

Therefore:

$$
\boxed{Bond\ Price = 121.7}
$$

---

# 12. Spot Rates

Using zero-coupon bonds we can calculate **spot interest rates**.

Formula:

$$
r = \left(\frac{FV}{Price}\right)^{1/T} - 1
$$

Approximate rates:

| Maturity | Spot Rate |
|------|------|
| 1 year | ~2.0% |
| 2 years | ~2.06% |
| 3 years | ~2.45% |

Plotting these rates creates the **yield curve**.

---

# 13. Yield Curve

The yield curve shows:

$$
Interest\ Rate \quad vs \quad Maturity
$$

It represents the **term structure of interest rates**.

The curve changes every day based on bond market prices.

---

# 14. Alternative Pricing Method

The bond price can also be calculated using **present value**:

$$
Price =
\frac{10}{(1+r_1)}
+
\frac{10}{(1+r_2)^2}
+
\frac{110}{(1+r_3)^3}
$$

Using the spot rates produces the same price:

$$
121.7
$$

---

# 15. Arbitrage Opportunity Example

If the bond were trading at **100 instead of 121.7**:

Arbitrage strategy:

1️⃣ Buy the underpriced bond  
2️⃣ Short the replicating portfolio  

Result:

> Risk-free profit.

---

# 16. Forward Rate Example (Intro)

Example:

- 1-year zero bond price = 98
- Forward contract today to buy another 1-year bond next year for 98

Using arbitrage we can derive the **price of a 2-year zero-coupon bond**.

Result:

$$
Price = 96.04
$$

This uses:

$$
PV = \frac{100}{(1+r_1)(1+f_{1,2})}
$$

where \(f_{1,2}\) is the **forward rate**.

---

# 17. Key Takeaways

1. Arbitrage exploits **market inefficiencies**.
2. In efficient markets **arbitrage opportunities disappear quickly**.
3. The **Law of One Price** states that identical payoffs must have identical prices.
4. Replicating portfolios allow pricing of securities.
5. Zero-coupon bonds reveal **spot rates and the yield curve**.
6. Arbitrage arguments are fundamental for **pricing bonds and derivatives**.

---

# 18. Next Session

Next class will focus on:

- Bond pricing
- Yield curves
- Term structure of interest rates
- Fixed income valuation.

# Transcription
16 de marzo de 2026, 5:05p.m.
1 h 12 min 43 s
Yeah.  
You're gonna start with arbitrage. Do you?  
Do you remember about the PCM market hypothesis?  
Efficient market hypothesis. Do you remember a little?  
What if it's a market? I thought that it has to do with what?  
When a market, what is a fee? What does efficient mean?  
What are we talking about when we talk about the market efficiency?  
Absolutely. Information is the word I was looking for. Information is the word I was looking for here.  
Here I know, so let me take.  
Number 8.  
This one, it has to do with information, yes.  
We show market efficient technologies. We are not going to talk, not going to ask.  
That I know anything regarding my the pieces, so I can tell you.  
But the deal market efficient has to do with new information.  
There is new information, the one that respect this.  
Will use the information and once.  
See use information. The advantage will disappear. Market will be efficient. Make sense. So market is efficient.  
Any new information?  
And market moves in order to take this information. So why there is new information market is inefficient while there is new information?  
The world we are living on.  
There are tons of new information everything. So at the end point is not always efficient. It's not efficient. The point we see play with the information. Make sense.  
U The I  
So on one hand.  
What happened?  
If there is new information, if there is a lack of information.  
How are we going to call it? 2 names, 2 names we are going to give to the lack of information, yes.  
One name will be inefficiency, a market inefficiency.  
And another name will be an arbitrage.  
Are we drugs? What is arbitrage?  
Is taking advantage of market inefficiency is taking advantage of new information.  
But that we're going to today.  
What is the name of today's class?  
Are being tracked, yes.  
RV drugs.  
So.  
Today's class we will deal with three things at the same time, yes.  
We will deal with three things at the same time.  
First idea, first idea we are.  
Do you it with not efficiency?  
We are continuing with market efficiency, yes.  
Take one idea when we talk about arbitrage itself.  
But their idea and the most important idea.  
Next class, next class. The name of next class will be fixing on one day we will.  
Talk of bonds. They will will see again how to get the price of a bond. So their idea is go back the winter, think about the bond exercise.  
And again, we will review today is how to calculate the price of a bond, how to deal with bond with coupons and all this stuff make sense.  
No.  
Let me start. No problem.  
OK, Arabi trucks. What is Arabi trucks?  
We are going to see today's 3 examples how to apply your methods and what is the idea?  
RV drugs. These are free drugs.  
These are free lunch in here.  
Here is a prelats practice.  
Practice.  
Careful, careful when talking about permittance in theory.  
In theory, arbitrage is getting again, getting again without assuming risk.  
It's again due to a market mismatch, so it's again without risk.  
Practice. Is it possible? Is it possible? Yes, it is. And also there will always be, so in theory.  
It's a game without risk. In practice, careful with miracles. Those miracles exist, but there will always be risk. But because we cannot foresee all things because life is great, because life is a miracle because.  
Jerry, I can say things, but in practice let me let me start with one example that is out of the scope of this course, but I want to show you this example.  
Did I talk about the long term Capital Management Fund when talking about market efficiency? I don't remember if I am saying this, this is the second time.  
I am saying this with you.  
Please forgive me.  
Southern capital in Mexico.  
What is the idea of this? Oh, this is sorry, whatever this is in Spanish, but you can you can Google for English version of of this.  
Who is souls?  
Don't have you heard about it, the back end source formula?  
One formula that rules is a formula in order to calculate the price of of options, yes.  
And both. Mr. Black is not here, but Black Source American were the creators of the Black and Source formula. And because of that, they received Nobel Prize. Yes. What is the idea of this phone?  
They put freely intelligent people in order to manage money in order to do fixed income arbitrage, yes.  
In order to do fixed income arbitrage.  
And look the phone, yes.  
They spend 1234 year, four years doing things. Incredible. Well, yes, incredible. Incredible. Well.  
Well, and after four years, there was a big collapse in Russian markets. They didn't expect this collapse.  
And they were close to.  
Oh, they use everything. Make sense.  
What I'm talking here about, I'm talking about Icarus. Have you? Do you know Icarus Leyen?  
Oh, this is again. Yes, this is again, yes.  
Do you know the story of Icarus? Minotau.  
There were two people, one father and one son, who went out of the.  
Who is out of there?  
Of the maze. They were inside the maze and they got a lot and Icarus went of the maze by putting.  
Robe and follow in the room. Yeah, once they went out, they put.  
They make wings with with wings, with wax, with wax, and what they do as Icarus is don't get too close to the sun because if you get close to the sun, all the wings will melt.  
went close to the sun.  
Hi.  
All the wings, yes. What is the idea? Careful with good ideas and trying to approach humans to the sun or to ghost or to try to go.  
Do we now have something to make us fly?  
And we use this match. We can feel warm. The sun is there and we can think, oh, we are like goats.  
Is there AI there? Careful with approaching to match the side because arbitrage happens and you cannot have free branches for them.  
You can have a free lunch one day, a free lunch two days, but.  
You use AI without thinking, your wings will match. Make sense. What I'm saying is absolutely important. Absolutely important. Why? Because.  
Because you are now in the university.  
And what we are living nowadays with AI is crazy.  
Did you connect? Love? You think so?  
Come from all the exercises I am praying you to do.  
I'm sure that most of the exercises I tell you to do or other teachers tell you to do can be immediately solved with a problem, yes.  
Imagine that I tell you to run 10 kilometers. You know the exercise. You take a car instead of running by yourself.  
You understand what I'm saying? No, I don't want.  
What is the point? What I want to tell you and this is absolutely important to understand.  
The quarantine bean at university. The quarantine bean at university is not doing a lot of things.  
Great. The point is doing small little things, routinely and making all these little things up.  
The point is not be doing oh, I have prepared things, then then works. Oh, I have prepared 100 slides. With AI you can do it in seconds. The point is just doing things by yourself.  
I repeat, I repeat, I repeat, I repeat same as push ups, same same as going to the gym at the end is mental exercise and also and also juicy a lot AR.  
I will do. I will be using AI.  
All the day.  
Do you know why I why I am not using more AI? Because I don't have time.  
Like being the whole day using a day.  
So, so arbitrage in finance theory and arbitrage is.  
Define NASA 0 investment trading strategy that generates generates as soon profit.  
No initial investment, no negative cash flows, a positive cash flow at some point, lower 3 lakhs without risk.  
A certain game without risk and without investment.  
Yeah.  
OK, on Wall Street, arbitrage also often means.  
What I have told you taking advantage of new information. If you take advantage of new information, you are assuming risk at.  
Whatever. And so this at the end, careful because you can lose a lot of money with every tax.  
And this is.  
The name of the game that I have played with you when talking about market additions.  
If there is an arbitrage opportunity.  
The one that detective will get again will make market efficient efficient. So if there is an arbitral opportunity, someone will detect it will make market efficient, will make the arbitral opportunity disappear.  
And MAR and arbitrage opportunities will not exist.  
Makes sense.  
I told you we're talking about market efficiency with technical analysis and fundamental analysis and value investment.  
Does it work or not? And what I told you is because it works, because technical analysis works, it doesn't work.  
Because it works. Because you can make money. Thanks to all these people making money, markets tend to efficiency in the week. Make sense.  
So at the end, at the end.  
This one one second. Talking about market efficiency, talking about a market that is efficient is the same as saying that no arbitrage is possible. Market efficient hypothesis is the same as.  
No Rd. grads.  
Congrats.  
Condition. Yes, are the efficient hypothesis is equivalent to no arbitrage condition.  
What are we going to do today? We are going to use the no arbitrage condition in order to calculate price of securities in order to calculate price of homes.  
OK.  
Tater 3 letters and at the end there is just one.  
So important and so simple, two different securities will have same payoffs in the future.  
These two securities should have same price.  
So talking about.  
The no work in France condition is same as talking about the law or of law of one price, same payoffs, same payoffs, same price and if not.  
I mean drugs.  
There are different we are going to see with three examples. Also due to the law of one price, we will be able to calculate the replicant portfolio, replicant portfolio and also then.  
We will see that because of the low of what price, we can also calculate price of deliver. We are not going to use this deal.  
This last statement in the end of the course when talking about the regards.  
Now what we will do is now what we will do is just a quick sound, yes.  
We are going to do 3 examples, one regarding the law of one price. This first example will be a warm up and we will see.  
The example, the one that I want you to fully, fully understand and to repeat. And finally we will see one example.  
We will proceed quickly, but I will not care too much about the last example, yes.  
No.  
So let me start with the highlights. Yes, cats and tigers.  
Please.  
These securities, these two securities.  
This to exist.  
CADS stands for a Certificate of Accurate Dressery is A and Tigers. I don't know what Tiger.  
I think I mean especially something regarding Christmas.  
Where where are we straying you?  
Treasury investment growth receipts. This is the planning for that. But what I want you to understand, what is a cat or what is a tiger? A zero upon bond.  
Just a serum combo, yes, and the price of cats.  
Is 94 going.  
34 and the price of tigers is 95.24.  
Make sense?  
How much I'm going to get within a year by buying one or the other, I will get 100 yes.  
I will get 100. I pay today. How will you calculate the deal of these two goals?  
The yield is written there, 6%.  
5% and present value is equal to future value over 1 + R rise to one yes.  
So the yield is 5% games by with HBR.  
Mutual value over present value. Hi, Jessica.  
So 94.3495.24 makes sense.  
Tell me yes.  
Right here, each numbers are 4.24 and 5.24.  
And take I'm going to get 100 a year, yes, take that.  
This is.  
It's two separators. Make sense.  
OK.  
Here there is an arbitrage opportunity. How can we take advantage of this arbitrage opportunity?  
How can we take advantage?  
But talking about arbitrage, always we will buy the cheapest and we will send, we will sell the most expensive one. Yes, so.  
So what I'm gonna do?  
I'm gonna buy.  
Want to buy one of these? Yes. So if I buy one of these, money goes out of my pocket. Yeah.  
It.  
I please.  
Hello.  
Yes, I'm gonna buy one of these.  
So if I pay 94, I will get 100 within a year. Make sense?  
And on the other hand, what I will do, I will sell one of these. If I sell this, this 95 comes into my pocket, yes.  
95 comes out of my pocket. How much should I pay in a year? Negative 100 I can receive today. 95 in one year I will get the 100, yes.  
What I will do?  
What I will do, I will just send these cash flows. Yes, I send these cash flows.  
And what I get today, I will get $0.90.  
4/3.  
Yep, to supply and demand law.  
You remember the supply in the Mongo?  
Well, the man look, you remember it.  
What will happen with this price?  
If a lot of people start buying it.  
They will go up. What will happen with this price if a lot of people start selling it?  
Rise will go down. Make sense what I'm proposing you to do by this to serve this. So a lot of people start doing this thing. What is going to happen with the arbitrage opportunity?  
That it will disappear. Make sense? Those who will take this quickly will get the beginning $0.90 and then later this will tend to 0.  
Make sense?  
Or will you pay money? Bye.  
Finding this.  
I'm shorting this.  
OK, suppose there are two that was paying 100 in one year. Yes, the price. How do arbitragers exploit the price difference? I've already.  
Next step. Next step.  
What about what if there are transaction costs?  
But if there are transaction costs, there will be there are transaction costs for buying or selling. I need to pay a fee.  
There will be one point that the fee will be higher than the gain I will get, so it will not make any sense to play arbitrage. Make sense.  
Make our reference 2 our reference. Make sense.  
For example, in this same example, both better, we still have a tiger. The cost of shorting is $1.00.  
If the cost of shorting is $1.00, will it make sense?  
To do to Will it make sense to pay $1.00 in order to to get $0.90? So this will make the arbitration opportunities appear.  
What are the highest and lowest possible prices of tiger product to catch that prevent arbitrage? The difference is $1.00 Yep. And then what is the cost of shorting is $0.50 and the cost of buying is $0.50?  
Save.  
Make sense?  
Stop.  
First example.  
What did I tell you regarding the first example? But I don't care too much about the first example and he's working with zero compound one time, so it's simple.  
Why did I call you regarding the second example?  
That is the most important example exercise we are going to, we are going to see, we are going to do today. Makes sense.  
So what do I need?  
I have 3 serum compounds with.  
Three different materials.  
Thank you for what year?  
If I pay 98 in one year.  
I will get 100 if I pay.  
96 three years I will get 100.  
I'm good.  
Make sense?  
E.  
One year, two years, and three. Any sense?  
If I pay 98, I will get 100. If I pay 96, I will get 100. If I pay 93, I will get 100. Make sense.  
What can I complete?  
I can calculate the yields, the HPR of this year composed, yes, and analyze the HPR. What is the return that I will get? The yearly return that I will get?  
For one year, for two and for three. Make sense.  
And then.  
Knowing this, I'm considering the arbitrage condition.  
What must be the price?  
What must be the price of a three-year annual cucumber?  
These are 10% coupon rate and a free value of 100. Make sense.  
Let me look for blue.  
What is the price?  
Yes, when they try so a born with.  
10% of.  
I am going to let you 3 minutes in order to write the cash flows of this ball. Yes, to write the cash flows, future cash flows, yes.  
3.  
How many coupons there are?  
How many Googles there are? Big Googles, no?  
First coupon will be paying year one. Second coupon will be paying year two. At the end I will you see last coupon of.  
Then glass, they like, yes.  
These are the customers.  
I'm going to solve this exercise through two different methods, two ways. The first way is not going to be so intuitive.  
But it will help me to introduce the concept of the replica portfolio. I'm going to construct a portfolio that replicates this, yes.  
Then later I will calculate the price. I will calculate the price by final the year, the year and the year. I will calculate the price by doing present value of future cash flow.  
Makes sense.  
OK, what is her replica portfolio?  
I'm going to buy percentages of these instruments in order to have in order to have same payoff.  
How much? How much of these three should I buy in order to get 10 euros?  
Year one, 0% of this one, 0% of this one and.  
10% of them.  
Make sense?  
You know you have the single payment.  
Make sense?  
And in order to have 110 instead of 100, how much should I buy?  
What I have got if I buy a 10% of this, a 10% of that and 110% of this?  
I will get this payoffs, no. So same payoffs, same price, but we find multiply.  
9.8 + 9.6 + 93 + 9.3 I will read the price exams.  
With the new price, the new price, the price I'm looking for will be that will be.  
9.8 + 9.6 + 9.3 + 93 oh this.  
No, no, no.  
Forget about the night. Let me start like everything. Yes.  
One must be the place of a three-year annual coupon bond with a 10% coupon rate.  
I'm looking for the price.  
The price must be the price of.  
A three-year annual coupon.  
We have 10% to cover, yes.  
When I left, when I went to the bathroom, I told you calculate. Please calculate cash flows of this.  
What are the cash flows, future cash flows of that instrument?  
3 coupons, 3 coupons, sorry, 3 coupons of 10%.  
Both face value.  
It's coupon is. It's coupon worth and huge.  
Yeah.  
Jesus.  
Great.  
Disease.  
About two years of maturity with pupils of 5% rate. They value is 100 and there are two pupils. Yes. What are the conscriptions of this instrument? In one year I will receive 5.  
And second year I'm going to receive 105.  
So if I read this, if I read this.  
Because of reading that I'm writing soy this line 1010.  
Yeah, the fine last coupon plus face value.  
So forget about these percentages. Forget about these percentages. What do I have there? I have four different activities. Please see your combos.  
And one ball with coupons.  
Of the free sea of Cucombos, I have the price, I have the payout.  
But regarding the bond with coupons, regarding the bond with coupons, I have the payouts, but I don't have the price.  
I have bills, but I don't have the bread.  
I want, I need to calculate the price. How am I going to calculate the price? How I'm going to do it?  
Constructing our vertical portfolio. I'm gonna take a percentage of this, a percentage of this, and a percentage of this in order to have 10 payoffs.  
Now, how much of the first one should I buy in order to get 10 euros in one year? How much of these should I buy in order to get 10 euros in one year?  
How much of this did I buy in order to have 10 euros in one year?  
Well then.  
Already. If I pay 98, I will get 100.  
But I want them instead of 100, so in five by 1/10 of this.  
I will get 10 instead of 100 and this is what I'm looking for.  
My portfolio will have 10%, 10% and 110%.  
OK.  
She.  
Let me go into the excel and yes, I'm gonna.  
Yes, 100 hundred and.  
Yeah.  
I'm looking for this price, yes, this price.  
By by this one I will have 1010 and 110, yes.  
All this.  
And that's it.  
Yes.  
So what should be the price?  
9.8 + 9.6 plus.  
93 * 110 that is 903 + 93.  
Well, boy.  
No 100.  
102.3.  
People.  
102.3 + 9.6 + 9 point.  
I made a mistake that the mistake exists.  
This is a site near right the road. Yep.  
121.7.  
Make sense?  
Hello.  
Jessica.  
I'll find Vivan to be somewhere. Vivan is not here and he's having a problem with the other ones. I'm going to write whatever.  
Makes sense.  
Did you understood this?  
If you understood this, I'm gonna do an exercise but.  
From a different perspective, I'm going to calculate the yields. How I'm going to calculate the yields HPR is equal to in all these cases 100 over the price 1 / t -, 1. Make sense?  
4.  
I'm going to calculate it's Q. It's XPR.  
One year, two year, three years and.  
It's here with you.  
100 over.  
We're going, let me see all of this.  
2.04.  
100 / 96.  
122 -, 4 Make sense?  
2.06 and.  
100 over 93.  
Point #3.  
I need one, yeah.  
2.45 All of you are following me.  
Let me substitute this.  
What do I have?  
This is going to be done, yes, and this is going to be year one.  
Here too. And here. Yep, when I'm gonna draw here.  
I'm going to saturate, yes, this is not going to be a scale. This is not a scale, but imagine that.  
This is the rate in year one, the rate in year two and the rate in year three. Make sense.  
One grade, a second grade.  
I'm a third ring.  
Do you see the the graph, the term that I have just drawn?  
We are going to talk about this graphic.  
Next week, and the name of this graph will be the yield curve, the temporary structure of interest rates. We will see that each day there is a different yield curve. It changes its day.  
And where we, where we will get the new move from the secondary market of public balls, thresholds, the hills and the balls, yes, from the secondary market.  
5.  
When is the second time market?  
Where owns are issued right our vote second-half, second-hand votes make sense.  
But it is the yield proof.  
And this is the spot in year one, the spot in year two and the spot in year three. Why I'm talking about the spots because we will see also that there are forward rates.  
But today is not the day. They will have the asonis calculate.  
And how I am going to calculate once I know the spot, once I know the spot, who I'm going to calculate the price.  
I believe present value 1 plus.  
Is both one last.  
One plus is for two right to the second plus.  
One pass, this pottery right through the third. Make sense.  
The questions.  
What are we doing here? We are calculating the price of a volume. This is what was asked already term and this is what I'm begging you.  
No studying or.  
Next What are we going to do on the next class in the same thing? This class we will come in the price of all new Google.  
OK.  
Eva, what I'm going to do here, here and here, present value of this first one, present value of this second one and present value of this third. This a wings ray.  
This at this rate, second at this rate and the third at this rate. Make sense.  
So let me start by entering.  
This is my view.  
One plus.  
Great. Rise to the first.  
Yeah.  
9.8 Let me go to the second one.  
Again 10 / 1 2.06.  
Price today, second because it will happen here.  
9.6 and last one is 110 over.  
1 + 2.45.  
Price to the third, yes.  
This number is going to be. I need 3 + 9.3.  
93 + 9 102.3102.6 yeah.  
And if I add this.  
If I have this, are we good?  
Exit.  
Any questions?  
Oh.  
There are no all my exercise are gone.  
Which session is today's session 1317?  
The questions.  
One must be the price of a three-year annual coupon bond with a per person coupon rate of 100 121.7.  
Now how would you make an arbitrage profit if the coupon bond were trading at 100?  
If the will be trading 100 instead of 121.  
I will buy this and I will sell.  
Please.  
And we will get a freelance.  
OK.  
Have you understood this?  
For me, it's enough. For today's class, for me, it's enough.  
At ending to this last exercise, yes.  
Today, a one year see of pompom cost 98, yes.  
They are one years.  
Play 01/2.  
Pay a once one year. So come on cost 98. Yes, if I pay 98, I will get within a year 100.  
And now also today you can you can enter a contract.  
To buy a one year syrup component, one year from today or 98.  
Do you understand this? Let me repeat. They you can enter a contract, but a one year, so you combine one year from today or 98.  
The contract will be closed today, but when will I buy this new zero coupon bond? I will buy in one year and this bond will not choose one year. Make sense.  
OK.  
Yeah.  
Today I can buy this in one year time. I can buy this and the question is what must be the price today of a two years in Hong Kong? The question is what should be the price today?  
6.  
Oh, please, yes.  
OK, let me. I'm going to change this because I want you to see it's clear. If the money goes out from my pocket, it will be negative, yes.  
If the money goes out for my pocket, it will be negative. If my money, if the money comes into my pocket, it will be positive. Make sense.  
So this price should go out. I don't want equal.  
Are you with me?  
OK.  
The DX in order to have.  
And in one year I'm going to do the exercise the same as the other one, yes.  
How much of this ball will I need in order to have a handle?  
I need a hand. Make sense.  
Oh, I will need 100% of this one.  
Make sense?  
No.  
By a hundred of this one.  
How much money do I need in year one?  
I will need NBA.  
So in order to have one of these, how much of this one should I buy?  
98% make sense.  
Yes.  
Make sense?  
I need 100 of these and in order to have 100 of these I will need 98% of this one.  
Make sense?  
Yeah.  
So.  
How much is going to be the price?  
0 * 100 zero times 100 + 98 * 98%.  
So the price should be 96.04, yeah.  
Make sense?  
Or also I can calculate this.  
I can calculate this. I'm going to calculate the.  
100 over 98 -, 1. Yes, the year will be the same for both years because the greater plans.  
Both cases.  
Now in order to calculate present value of this I should calculate.  
OK.  
When I need this one, yes.  
In order to calculate present value of this because I have this rate and this rate.  
How should I calculate present value of this 100 / 1 plus?  
The rate 1 * 1 plus.  
The rain soon.  
Are you following me?  
I have this rate and I have the rate between year one and two. Who are we going to calculate this rate? I have written with an A, but it's because of power.  
And today's not the day in order to talk about forward rates, yes.  
What I'm saying, Sophia, year one and year two in previous exercise.  
I have the spot rates. What is the spot between today and year one, between today and year two? But in this exercise I'm looking for the spot.  
What I have instead of the spot is the power. I need a race between year one and year 2.  
And today you don't need to know this or today the most important thing is exercise.  
In order to finish this, let me calculate this by calculating present value.  
One plus.  
The right right to the second, which should be 9696.04.  
Four years. It was four years.  
Yeah.  
Make sense?  
Or would you make a Hermitra CBRC or were training 495? OK, you will buy the cheapest and sell the most expensive one.  
So in real world, there are a lot of ways in order to you are in France, but please.  
Forget about army trends and start thinking about bonds. So the questions that you have asked me today are so, so important and I want you to fully understand.  
The answer to the question that question match with.  
An internal exercise and match with what we are going to see on next class. Have a blow next class presentation. You can find it in Bright Space. I strongly recommend you to start practicing to go over the slides.  
Now next day's class. Yes, you can go. Also you have you have handouts. You can see these things, yeah.  
Any questions? Go at the end. Same for yours, same price.  
An arbitrage condition is a powerful tool relative super relative. It's a powerful tool for pricing, yes, for pricing we will use it. It's the most common use tool.  
Yeah, because.  
Thanks.  
Let me start with you, the excel. Next Wednesday. Sorry, next Wednesday. No, this Wednesday I will leave the class quickly because there is one hour less with the US and I'm selling.  
This Wednesday, I said it.  
The end Jerome Powell will talk about interest rates and I should be in the and it's not going to be the last one. There's one more regarding Jerome Powell and then Kelly works at this one day. You know that I'm not an addict, but.  
Therefore, where it goes. Oh, like you would say.  
No, no changes and this will affect if what will happen with the price of bonds in K Jerome Powell says interest rates are going up. I will go up. This is the name of the name. Please welcome.  
Definitely.  
Yeah, and then the second exercise, we will just do like like 100 divided by the like.  
Yeah, yeah, yeah. So when you're when you're, you know, 100 by the price, but don't we do like so for example.  
Plus plus and then like no. I mean here we are covering the HPR and 0 component of the first one, the second one and the third one.  
Yeah. And then how what you will calculate here in order to calculate the rate, this is the price and these are the cash flow, yes.  
Well, how we will talk about rates? You will complete. Yeah, yeah, yeah, yeah, yeah. This will be around 2% and because this last one matter more will be around 2.3.  
Yes.  
Like we were talking about how IR and like HDR are the same for like so for zero, yes, but for this one now because of reinvestment rate.  
OK, but oh yeah, OK, because IRRS, you will get invested. IRR, IRR.  
Careful because payments are different. I IR is like me.  
Because this happens in different times because of that when I told you this is around this coupon is small, this coupon is small and you see this return is higher than because of that I told you 2.32.41 that it should be.  
Higher than the two ones, yes, and lower than this one and more close to this one. Yeah, because that's the biggest one. It's like. Yeah, yeah, yeah, I think it was a 0, but I'm not. So that's what I was wondering. It should be the cache flows.  
Just one second that I want to.