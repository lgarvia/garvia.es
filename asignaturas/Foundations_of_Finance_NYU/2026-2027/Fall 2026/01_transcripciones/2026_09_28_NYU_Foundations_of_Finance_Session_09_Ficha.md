---
titulo: "Foundations of Finance – Session 9: Equity Valuation, Growth Opportunities and Multistage Models"
fecha: 2026-09-28
curso: "Foundations of Finance (Fall 2026)"
sesion: 9
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---

# Foundations of Finance – Session 9
## Equity Valuation, Growth Opportunities and Multistage Models

**Date:** September 28, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

This session completed the introductory equity valuation block. We continued using the Time Value of Money framework introduced in previous classes.

The main topics were:

- Review of the Gordon Growth Model.
- The relationship between earnings, dividends and retained earnings.
- Price-to-dividend and price-to-earnings ratios.
- Growth opportunities and the required return on equity.
- The Present Value of Growth Opportunities (PVGO).
- Multistage Dividend Discount Models.
- Practical valuation exercises using Excel.

**The central idea: a company's value depends not only on its current earnings, but also on how effectively it reinvests those earnings to generate future growth.**

---

## 2. The Madrid Stock Exchange: Markets, Records and Trust

Following our visit to the Madrid Stock Exchange, we briefly discussed how securities markets operated before electronic trading.

Traditionally, brokers gathered physically to execute transactions, communicate orders and register trades. Modern exchanges perform these functions electronically.

We also discussed the analogy between traditional transaction registers and blockchain, a technology that maintains shared digital records.

The broader idea connects with our first classes:

- Financial markets facilitate transactions.
- Reliable records support market functioning.
- Trust is fundamental to money and financial contracts.

---

## 3. Review: The Gordon Growth Model

A stock that pays dividends growing at a constant rate can be valued using:

$$
\boxed{P_0=\frac{D_1}{k-g}}
$$

Where:

- $P_0$: Fundamental value today.
- $D_1$: Expected dividend next year.
- $k$: Required return on equity.
- $g$: Constant dividend growth rate.

The model requires:

$$
k>g
$$

If we know the current dividend rather than next year's dividend:

$$
D_1=D_0(1+g)
$$

Therefore:

$$
\boxed{P_0=\frac{D_0(1+g)}{k-g}}
$$

### Understanding the required return

The Gordon model can also be rearranged:

$$
\boxed{k=\frac{D_1}{P_0}+g}
$$

The expected return has two components:

1. Dividend yield.
2. Expected dividend growth, which corresponds to expected capital appreciation under the model's assumptions.

### Why are stocks harder to value than bonds?

The mathematical framework is similar, but stock dividends are not contractual payments.

We must estimate future earnings, dividend policies, growth and the appropriate required return.

**The main difficulty is not the formula; it is forecasting the inputs.**

---

## 4. Earnings, Dividends and the Plowback Ratio

Companies have two principal uses for their earnings:

1. Distribute them to shareholders as dividends.
2. Retain them to finance future investments.

The percentage of earnings retained is called the **plowback ratio**, also known as the retention ratio.

Let:

$$
b = \text{Plowback Ratio}
$$

The dividend payout ratio is:

$$
\boxed{1-b}
$$

Therefore:

$$
\boxed{D_1 = \text{EPS}_1(1-b)}
$$

Where $\text{EPS}_1$ represents expected earnings per share next year.

For example, if a company distributes 60% of its earnings:

$$
1-b=60\%
$$

Then:

$$
b=40\%
$$

The company retains 40% of its earnings.

Retaining earnings can finance growth, but growth only creates economic value when the company invests that money productively.

---

## 5. Price-to-Dividend and Price-to-Earnings Ratios

Substituting earnings into the Gordon model:

$$
P_0 = \frac{\text{EPS}_1(1-b)}{k-g}
$$

We can derive two valuation ratios.

### Forward Price-to-Dividend

$$
\boxed{\frac{P_0}{D_1}=\frac{1}{k-g}}
$$

### Forward Price-to-Earnings

$$
\boxed{\frac{P_0}{\text{EPS}_1} = \frac{1-b}{k-g}}
$$

These expressions show that valuation multiples depend on:

- The required return.
- Expected growth.
- Dividend policy.

The Price-to-Earnings ratio (P/E) indicates how much investors pay for each unit of earnings.

However, **a high P/E does not automatically mean that a stock is overvalued**. It may reflect expectations of higher future growth, lower required returns or differences in business models.

This is why comparing companies requires understanding what those companies actually do.

---

## 6. Valuation Multiples: Worked Example

Suppose a firm has:

- Expected earnings per share next year: \$4.
- Dividend payout ratio: 60%.
- Expected perpetual growth: 4%.
- Required return: 9%.

### Step 1: Calculate next year's dividend

$$
D_1=4(0.60)=2.40
$$

### Step 2: Calculate fundamental value

$$
P_0=\frac{2.40}{0.09-0.04}
$$

$$
\boxed{P_0=\$48}
$$

### Step 3: Calculate the forward P/E ratio

$$
\frac{P_0}{\text{EPS}_1} = \frac{48}{4}
$$

$$
\boxed{\text{P/E} = 12}
$$

### Step 4: Calculate the forward P/D ratio

$$
\frac{P_0}{D_1}=\frac{48}{2.40}
$$

$$
\boxed{\text{P/D} = 20}
$$

What happens if expected growth rises from 4% to 5%, while all other assumptions remain unchanged?

$$
P_0=\frac{2.40}{0.09-0.05}
$$

$$
\boxed{P_0=\$60}
$$

The forward P/E ratio increases to:

$$
\frac{60}{4}=15
$$

This illustrates the sensitivity of valuation multiples to growth expectations.

---

## 7. Retained Earnings and Sustainable Growth

What happens to the earnings that companies do not distribute?

They can be reinvested in the business.

Under a simplified model, the sustainable growth rate is:

$$
\boxed{g = b \times \text{ROE}}
$$

Where:

- $b$: Plowback ratio.
- $\text{ROE}$: Return on Equity.

This relationship assumes a constant retention ratio and a stable return on reinvested equity.

The class emphasized an important distinction: knowing a company's total assets and its ROE is not necessarily sufficient to calculate earnings.

ROE is calculated using equity, not total assets:

$$
\boxed{\text{ROE} = \frac{\text{Net Income}}{\text{Equity}}}
$$

We must understand the accounting information available before applying a formula.

**Understanding the problem is more important than mechanically substituting numbers.**

---

## 8. Present Value of Growth Opportunities

One of the main concepts introduced in this session was the **Present Value of Growth Opportunities (PVGO)**.

Imagine a company that distributes all its earnings as dividends and undertakes no new growth investments.

Its value would be:

$$
P_{\text{no growth}} = \frac{\text{EPS}_1}{k}
$$

If the company also has opportunities to undertake profitable new investments, its fundamental value can be expressed as:

$$
\boxed{P_0 = \frac{\text{EPS}_1}{k} + \text{PVGO}}
$$

Therefore:

$$
\boxed{\text{PVGO} = P_0 - \frac{\text{EPS}_1}{k}}
$$

PVGO measures the value attributable to future growth opportunities.

It can be:

- Positive: new investments are expected to create value.
- Zero: new investments do not add value beyond the required return.
- Negative: expected investments destroy value.

The important lesson is that **growth and value creation are not the same thing**.

Retaining earnings is beneficial only when the resulting investments justify the capital committed.

---

## 9. Multistage Dividend Discount Models

The Gordon model assumes that dividends grow at the same rate forever.

But companies rarely grow at a constant rate throughout their entire lives.

A young company might experience rapid growth for several years before transitioning to a stable, long-term growth rate.

This leads to a **multistage Dividend Discount Model**.

The valuation process has three steps:

1. Forecast dividends during the initial high-growth period.
2. Calculate the stock's terminal value when stable growth begins.
3. Discount all dividends and the terminal value back to today.

The terminal value is calculated using the Gordon Growth Model:

$$
\boxed{P_T=\frac{D_{T+1}}{k-g}}
$$

Then:

$$
\boxed{
P_0=
\sum_{t=1}^{T}\frac{D_t}{(1+k)^t}
+
\frac{P_T}{(1+k)^T}
}
$$

The terminal value is not an additional dividend. It represents the value, at year $T$, of all dividends that will be paid after that date.

---

## 10. Two-Stage Growth: Worked Example

The class considered a stock with the following characteristics:

- Current dividend: \$4.
- Dividend growth for the next two years: 25%.
- Long-term growth thereafter: 5%.
- Required return: 15%.

### Step 1: Forecast the first two dividends

$$
D_1=4(1.25)=5
$$

$$
D_2=4(1.25)^2=6.25
$$

### Step 2: Calculate the dividend in year 3

From year 3 onward, dividends grow at 5%:

$$
D_3=6.25(1.05)=6.5625
$$

### Step 3: Calculate terminal value in year 2

$$
P_2=\frac{D_3}{k-g}
$$

$$
P_2=\frac{6.5625}{0.15-0.05}
$$

$$
\boxed{P_2=65.625}
$$

### Step 4: Discount everything to today

The year-2 cash flow includes both the dividend and the terminal value.

$$
P_0=
\frac{5}{1.15}
+
\frac{6.25+65.625}{1.15^2}
$$

$$
\boxed{P_0\approx \$58.70}
$$

The stock's value is the present value of its first two dividends plus the present value of all subsequent dividends, summarized by the terminal value.

---

## 11. A More Advanced Multistage Example

The final exercise considered a company with explicitly forecast dividends over four years:

| Year | Expected Dividend |
|---|---:|
| 1 | \$2.92 |
| 2 | \$3.21 |
| 3 | \$3.53 |
| 4 | \$3.80 |

Additional assumptions:

- Required return: 8.2%.
- Perpetual growth after year 4: 6.4%.

First, forecast year 5:

$$
D_5=D_4(1+g)
$$

Then calculate terminal value at year 4:

$$
P_4=\frac{D_5}{k-g}
$$

Finally, discount the four explicit dividends and the terminal value:

$$
P_0=
\frac{D_1}{1+k}
+
\frac{D_2}{(1+k)^2}
+
\frac{D_3}{(1+k)^3}
+
\frac{D_4+P_4}{(1+k)^4}
$$

Notice that the year-4 dividend and terminal value occur at the same date.

They must therefore be discounted by the same number of periods.

The exercise reinforces the central principle of the entire course:

**All future cash flows must be moved consistently to the same valuation date.**

---

## 12. Five Ideas to Remember

1. **Dividends come from earnings.** Companies decide how much to distribute and how much to retain.

2. **P/E ratios depend on growth, payout policy and required returns.** They cannot be interpreted in isolation.

3. **Retained earnings can generate growth, but growth does not automatically create value.**

4. **PVGO separates the value of existing earnings from the value of future investment opportunities.**

5. **Multistage valuation is simply present-value calculation applied to different periods of dividend growth.**

---

## 13. Before the Next Session

Students should be able to:

- Calculate value using the Gordon Growth Model.
- Derive the relationship between earnings, dividends and the plowback ratio.
- Calculate forward P/E and P/D ratios.
- Explain how retained earnings can finance growth.
- Understand the concept of PVGO.
- Solve a two-stage Dividend Discount Model.
- Calculate terminal value at the correct date.
- Discount dividends and terminal value consistently.

**Recommended preparation:** Reproduce both multistage valuation exercises independently before consulting the solutions. Review the slides and Excel examples available in Brightspace.

The mathematics is the same Time Value of Money framework we have used throughout the course. The challenge is organizing the cash flows, understanding the assumptions and identifying the correct valuation date.


# Transcription
28 de septiembre de 2026, 5:04p.m.
1 h 27 min 43 s
A man has written me, but whatever. Today we will finish.  
God, the work today, we would be a week.  
Today, we will finish with everything, and I, yeah, today's maths are not going to be difficult.  
Today, regarding maths, we are not going to see too much things, but again, we will work with Time Value of money. What is the most important thing we have been working over during the whole course? Time Value of money. And today we will continue working over Time Value of money from a different perspective. Yes?  
Where is where is let me survey with you guys and where you?  
One.  
Okay.  
Session.  
No.  
Sing, open.  
OK.  
Before that.  
Hey.  
Call Seth.  
stands for back in Spanish, and also I think in the Netherlands, is the surname of the person that has one house where all sailor men, and I don't know the story really well.  
And this is the origin of.  
What?  
Please take over the engine of.  
More search plus stroke.  
Boos, like boos originates from a 20th 15th century public school includes, but you outside influence.  
The Van de Ruiz family was a major European trade hub. It was a place where merchanters, brokers, a lot of people went together in order to trade.  
I think that boots.  
Let me.  
Bush was up.  
Right.  
What's an inn and tavern in the ring, yes?  
It was an ink, a worship. Can you imagine?  
A restaurant where traders used to go, merchants were to go, not a restaurant, a tablet, yes? You went there in order to drink beer and you start trading one with each other.  
Can you give me? I will give you. Yes. And it become a stock at Sáez.  
Let me think also, it's not behind me here.  
There is a fine story regarding a pizzeria and  
So, there's a, yeah.  
Mino Arroyo.  
Who grows from that?  
Yeah, there was one pizza, one pizzeria.  
One pizzeria.  
close to it was the pizzeria was called by Minor Riola Riola, yes, and it was a pizzeria where a lot of soccer players used to go.  
This person was spread of soccer players and start working as their items. I know them, you want to play this team. You see what I'm trying to explain. What I'm trying to explain is that at the beginning,  
There was language. At the beginning, there were two, three people, just sick.  
And they start training in a natural way. Yes, today we have been visiting.  
For some of it is the Madrid stock exchange, and I'm looking for, we've been there, we've been there, but I'm looking this pool of people.  
Full of people.  
Full of people, and there are not much.  
More people, white and black pictures, white and black pictures.  
Sorry.  
Okay.  
Yeah.  
Play.  
I saw a picture of that.  
Yeah.  
I.  
Hills.  
Do you see how this used to be?  
They are two floors, yes, the bosses.  
didn't go down. Yes, the buses used to be here. Then here there was a fence. Yes. Inside the fence, there were people working for the buses that were upstairs.  
And in 5 minutes, 15 minutes, trading start and finish. The bell used to announce word trading start and finish, yes? And during these 15 minutes, the trade work.  
A lot of traders start doing signals, shopping, I want to buy four, I want to sell three. And all this building, we are seeing it today, all this building was dedicated to register operations. Registers,  
Her to greatest and traits.  
There were books, the operation book, this meeting, this whole meeting was just for the book, for the records of all trades that has been holding a day.  
At the end of the day, the bosses went together into a room. We have seen they in the room, they went into a room, and they were singing all the operations that had been hold in order to register and keep the books in the proper way.  
Yes, there's one building in order to have a public register.  
Have you had a group change?  
Blockchain. Blockchain is a public registered blockchain.  
Blockchain is Bitcoin. Blockchain is the technology that Bitcoin appears at the same time that blockchain and blockchain is a decentralized public register. You have tons of computers, all of them connected into a POA that is not a central center.  
Setup computers connected.  
And it's like a public, not black, it's a public register, a public decentralized and secure register. What I mean is that a lot of things we have been talking about during one small.  
What is money?  
Only is something you trust.  
Money is just trust. Money has three uses. Storage of value, account unit of account, and also money.  
And also, money is helps in trade, yes, but at the end, money is trust.  
Money is trapped. You cannot eat money. You cannot burn money. You cannot build a house just with money.  
Only is digital, you cannot touch more, but thanks to money this happens.  
But it has to do with trust. That baby has to do with trust. You buy, you sell, and they register all these sets.  
We have seen this, we have seen the whole building, but without people.  
Okay, once say this, let me...  
Let me.  
Start talking about equity value ratio, second one, yeah.  
Before the start.  
A sell trades at forty-eight, you expect a four billion and fifty-two price next year.  
Andre and return is a person.  
Is it cheap or expensive?  
A sale trades at forty-eight, yes?  
Is cheap or expensive?  
She? What?  
Because.  
Because the actual price is at fifty-one fifty-five.  
And it's really, really thin.  
Really, really cheap. Yep.  
Then, GP Morgan's perpetual preferred base 1.2 a year and trades at 50. One return does it offer.  
1.2 over 50. It's a perpetuity now? Yeah.  
1.2 over 15.  
A personal.  
Then, maybe then one is true.  
Return 8%.  
Hello, in great.  
Four percent. What is the set worth and what happens if G force to 3%? Let's calculate first what is the set worth.  
Anyone?  
Juan.  
over r - g or no.  
Yes, yes, yes.  
You what?  
Is Time Value of.  
Ohh, sure, I may give you, I gave you.  
Okay.  
I'm gonna take one of these.  
Division one over.  
Over.  
Ohh.  
Minus.  
even 1 over r - g.  
Four.  
Person this.  
Dividend one, this is a stock whose dividend is going to grow at a constant rate.  
Yeah.  
So.  
What if G falls from four to three? If the stock will blow less, what will happen with the price?  
Hey.  
And then, if the formula is the same, why is there so much harder to value than a whole?  
Is the form, I mean, the same, almost the same. If we are calculating present value, why are there so much harder to value than alone?  
Because you don't know the dividends, yeah.  
Regarding Google, you know, but you know who match you will get. And regarding these, when calculating, when estimating these, what we are doing, we are having, we are doing our creativity work.  
Yeah. Okay. Today we will continue, we will finish with boredom model, then we will talk a little bit about  
Price over dividends, and especially price over earnings.  
Ratio.  
Then I will introduce the concept of present value of growing opportunities. And then we will do 3 exercises, two or three exercises.  
With it, while it's called the two states, it is called model, OK?  
Let me first start with some quick maps.  
Let me at the same time review.  
Yeah.  
No problem. I don't. It's written.  
What is today?  
Is equal to...  
Bin Benito.  
Over.  
And it's going to be great.  
Minus Roman.  
Okay.  
Divide 0 * 1 plus below.  
And then one is zero, 1 * 1 plus.  
Leave me then.  
Beep.  
is dividend 0 1 plus G rice pudding. Make sense? Yeah.  
OK, let me move here.  
Knop.  
Baby there.  
is what the company pays to their shareholders. But before dividend, there is another concept.  
That are earnings. Do you remember from from?  
Ohh, I don't think.  
Hernández.  
What can you do with your earnings? You can pay dividends or you can keep the earnings inside the company in order to grow. Let me say, let me say that.  
Earnings, for example, year zero, yes.  
Times 1 - b, the name of this global ratio, global ratio, 1 - b.  
It's going to be equal to the delay today, and since...  
What I'm saying with this phone?  
That you have earnings?  
And a percentage of the earnings, yes?  
Will be this review?  
Ask him, yeah.  
Yes, 2 numbers, B could be 0, B could be one, yes.  
If we...  
Is one?  
If B is what?  
Vidal will be 0, yes?  
What the company will be doing?  
The company will dedicate all the money to growth.  
And on the other hand...  
BCO.  
Earnings will be equal to the, yeah.  
So, we can consider that growth.  
Easy.  
We will see who did that, but I want first to do the three numbers of today's class.  
All of here with me?  
OK, let me.  
Start with that formula.  
Where is today?  
It's simple to.  
This is in one year in year 1 / k - g.  
Instead of dividend one, I want to see dividend zero. Yes, I'm going to substitute dividend one.  
We give them, yes?  
Instead of being in one.  
Even 01.  
Less, yeah.  
And now?  
Enough.  
I want to see, instead of living, earnest.  
Instead of leaving, I want to share this. Yeah. So what I'm going to do here.  
Earnings, thanks.  
1 - b.  
This is Steven Antonio. Yep.  
One minus V.  
That 1 + d.  
Over K minus yep.  
What is K? K is the discounting red. K is.  
It is.  
what the shareholders stay together. The statement return from more shareholders. OK, is a discountable.  
You are really, you are thinking you are gonna get that.  
Three percent.  
Imagine that this would be, Olivia, this would be a country.  
If this would be a person to me.  
OK. It's like C overall. Yeah. K, you can write R instead of K. It would be the same. And why I'm using K is because K stands for the cost of capital.  
And we will use it later, but not today.  
Makes sense.  
What do I want you to see from here?  
Bad.  
Thank you, Miss Juan.  
Price over, live event zero.  
It's equal to 1 g / k - g. And the second one is that.  
Price over earnings.  
It's equal to 1 -, B1 plus growth over K minus G, yeah.  
What is this? A race? What is this? Another race? Price over, yeah.  
What I have done, I have done the maths for this ball, yes?  
Any questions?  
So, let me start with today's class.  
Now.  
Stay based.  
How we will calculate the price of 1 stock?  
With that home, the price would be...  
Expect the earnings over.  
That is going to rate R here and Olivia. Here I'm using R. In the blackboard I have used K.  
But the idiots.  
How will you calculate the price of the stock? By doing next year dividend over R minus growth.  
What is up?  
is what we what the shareholders expect to get.  
and one of the shareholders came from two parts. One part belongs to the media that he will receive, and another part belongs to the grow the company will have.  
Make sense?  
What is R? Is the return? The return we expect. You buy a company.  
And you said to get that 10% Redondo.  
Part of the return, we came, we came from next year.  
and another part we get from Roberto.  
This.  
Makes sense.  
Okay.  
Now, if the stock is undervalued.  
Price will be lower than value. What you have said before.  
Any questions?  
Okay.  
What is the I Evex Evex? Anyone of you have heard of Evex?  
Have you heard about Phoenix?  
Hello?  
Have you heard of SP 500? What is SP 500?  
Five 100.  
is a market. You can get the expected return from ESP.  
What is EBEX? The same done SP 500, but with 35 companies. EBEX 35 is the Spanish national, not national, sorry, RDEX 35 biggest stocks from Spain. EBEX is like SP 500, but in Spanish.  
When we come here.  
Let me come here and speak.  
Fine.  
I see 100.  
This is SP 100, yeah? We saw this same graph when talking about the new pools two classes ago, yes? SP 100.  
Story.  
We don't.  
is around 9.8 to 10. Yes, depending on the year, SP 100 return will be higher or lower. Yes?  
Instead of speak 100, I'm going to write here.  
UX 25.  
And in a 35 historical return is a little bit higher, yeah?  
Fourteen percent, less companies, less companies, and also one point regarding US, et cetera.  
That is the Spanish coin we used to have before Europe.  
Forty percent in and has been undervalued time and time.  
Why is it going here?  
If X 35 is another way in order to talk about the expected return, yes? Or SP 500? What is the historical return of from SP 500? 10%, no? So how much return will you require to one company?  
Ten percent.  
I am simplified. We will talk about this, the return. We will talk about R, we will talk about the expected return. We're talking about the capital, capital asset pricing model. We will talk after the meter. So regarding this slide,  
You can forget about it till after the meeting, yeah?  
Ana.  
What I want you to see from this slide.  
Ruiz.  
Forget about the blackboard, forget about these formulas.  
And personally, I like more. Not I like more. Normally, the ratio.  
that people use is price over earnings. Have you ever heard of Pet?  
Pair of one store.  
Or one.  
Oh.  
Berries pear from Apple is 39.  
Now we are going to see some more numbers, but 39. Let me Google from Pedro.  
This.  
Bed of Tesla.  
I have, I have not calculated.  
I don't know if 390 inch, 300 per Pesla is 390 inch, yes.  
After was 39.  
Call Raquel.  
I don't know.  
Well, I don't know how to.  
Okay, careful that.  
I don't know the ticker. You know what is the ticker?  
Have you ever had a ticket for which company?  
When is the bigger?  
The four letter. Yeah. I don't know, but this as simple.  
T.  
Kongate the ticket of Kongate is CL. Yes, CL.  
And...  
Per from Calvo de East, yeah?  
Was there price over earnings raise?  
Fair is this ratio, but I want you to see to understand what is fair.  
I want you to see that there are a lot of companies.  
First, I want you to see that corgates.  
Colgate is 34, but before Colgate and before what is there? Well, Colgate, Coca-Cola.  
PepsiCo.  
Lazcano, Proctor and Gamble.  
Have you ever heard about dividends, aristocrats?  
At least, I uh, just throw.  
The evidence that is programs.  
Have you ever have all given an instagram? No?  
Companies.  
that has an increase that had that had increased their dividends, have been paid, have been paid dividends, and their dividend has increased for 25 straight years.  
What is a dividend aristocrat? A company that has been paying dividends in a constant and growing rate for at least 25 years, yes?  
Let me look for Alice.  
Here, you got a list.  
Dover, Procter & Gamble, Ferrer, Emerson Electricity, Johnson & Johnson, Coca-Cola, Volgante.  
They are not too much.  
Vidal, yes.  
Is the end, yes, and among the aristocratic dividends, there are the kings.  
Of the men.  
The dividend, Kings, has paid a constant dividend for more than 50.  
For more than 50 years, yes.  
And this list is sorted.  
If he stops.  
I would bet that they were this.  
****.  
So, we have, on one hand, the price of 1 stock.  
And then, for example,  
For example.  
Where we?  
Call Garvía.  
Cola Price.  
A lot.  
Yeah, Coca-Cola, the one price, the price of the stock is eighty-seven.  
And here you can see several numbers regarding Coca-Cola.  
The opening price of today's session, closing price, sorry, opening, we don't have yet opening the closing price because it's still open.  
Maximum, minimum, yes.  
What is Montagut?  
Where are we racing? Where is the market cap?  
For one company.  
Market cap. The total value of all their shares. Yeah. The price of each serve times the total number of serves. Yep.  
Patrika.  
Dividend, this 2.44 is the dividend over the price, yeah?  
The dividend is this dividend is of 153.  
It's 3 mes three.  
I don't know what does this mean?  
I don't know what. This should be our percentage is high is a high price and a low price.  
And now, price over earnings ratio. Coca-Cola price over earnings ratio is 26.22.  
What does a 26.2 be?  
What is the price over earning ratio?  
Ruiz.  
Alba.  
the earnings of the company. It tells you how much you are paying per unit of earnings.  
Ita Juan.  
How expensive the company is?  
Why a company can be expensive?  
Because of a lot of factors.  
A car for 50,000 is cheap or expensive?  
This is a stupid question.  
Fifty 1000, depending on the car, it means, for example, a first-hand Lambo.  
It.  
If it is a second hand disaster car is really expensive. It depends on what we are talking about. The highest the price over earning ratio, the more you are paying per unit of earnings.  
Yep.  
So, in case of Coca-Cola.  
This is Coca-Cola, no, but I so early 626.  
Did you remember what I over earnings ratio from Tesla?  
Coca-Cola is, how much did they say? Twenty-three, twenty-three?  
Arroyo Fed, yes?  
Blue Desert.  
Price over earning ratio is 334.  
But can you tell me regarding this number?  
I don't.  
A lot. You are paying 334 pounds. Yes, let me look for another company, BYB.  
BY this 25.  
Is that overvalued?  
Let me look for Unit 3. Unit 3, I have told you about Unit 3.  
Why, why am I comparing with three Paris 380?  
Only 3 Paris, 380. Why am complaining Tesla with Chinese companies?  
because I cannot compare Tesla with companies from the States. Tesla manufacture electric cars. If I compare Tesla with BYD,  
BYB is cheaper.  
BYB manufacturer.  
Electric cars.  
These ideas manufacture electric cars or they try also to produce roads.  
Tesla are trying to produce also robots. Look, Unit 3, Unit 3 produced robots, and they are also scientists.  
How much is you need to repair? Three 180.  
Did you tell me about Petra?  
My first hope would be that they manufacture cars.  
But then, if I use the numbers...  
This one looks more like.  
A robot compact.  
Or also can you also like about it?  
Exactly. You understand the point? Let me look for Miguel.  
Pair 29.  
Price over earning fruits, 29. Yes.  
Let me look for SpaceX.  
I would bet that is her.  
Not yet.  
Because.  
Wait.  
Why it has no pair?  
What can be a ghost?  
Now, it has the ideal has been.  
Not much spam about, right? We don't have earnings.  
Programming, but let me.  
Yes, you may.  
Around July. Yep.  
Do you know the company Oura? Like the rail company? Rail. Oura. O-U-R-A. I don't know it, but I'm...  
OURI.  
Yeah. I don't know. What is it about? Like tracks your help, but they had the IPO this Wednesday. Oh, maybe come public. Yeah, you think it's a good? I don't know, because I didn't knew it. The IPO was? It's on Wednesday.  
Oh, this was it. Yeah. We've been in stock change and we have seen that we're preparing for an IPO that will be hold on Friday.  
I, I don't, I don't know it.  
They are preparing for the IPO.  
I don't know, but personally...  
He's like in my head, hold up.  
Yeah, sleep health, sleep health has demanding aura.  
In my head, she has an order. I haven't heard about all that yet. Yes, I just Google all that better with see and they dedicate themselves to the same business. And personally, I think that it's absolutely worth it.  
Why? Because all data that came from humans.  
Or life is in that.  
So, and they manufacture rings, no? Yeah.  
They vote one? No.  
This guy is because of finance, not Europe, yeah.  
I feel how much money they are raising.  
The.  
Four.  
They are racing.  
Two billion.  
Yes, one second, 2.2 billions for.  
Serve of this.  
I mean, they are not capitalizing the whole company.  
And.  
Yes, that's 15.6%, yes. So total cap is 2.2 over 0.56. That would be the number 2.2.  
for India.  
On four people. I mean.  
Compared with SpaceX, compared with Anthropy, compared with OpenAI, it's not too much.  
is huge. I mean, 2.2 billion is big. And personally now, I think, and probably has, and probably they don't know, but SpaceX, sorry, SpaceX, OpenAI has stopped their idea. They were going to become public before the end of the year, and they have stopped.  
They have announced that they stopped two weeks ago. I don't know if a tropical thing, but...  
Good luck.  
Okay, makes sense more or less. What are we talking about? We are talking about price over earnings rates. Yes?  
You can calculate price over different, and if you calculate price over different, you should take into account to fix.  
Knop.  
Well, and then the relationship between the return and grow.  
If you consider not just price over bid, you consider price over earnings, you should take also in account the flowback ratio. What is flowback ratio? The amount of money that the company keeps with themselves.  
Yes.  
And now, valuation races. A firm spec learns 4% next year and phase out 60% of VITAS dividends. Yes?  
It's negident broke, let me, I'm going to put this number. Says you have the slides before in front of you, let me.  
Bing.  
Please, in order to play with the Excel.  
Hernández.  
Year one are expected to be \$4.00, yes?  
And blow back where is your be?  
Is a...  
No, careful, low battery, Sáez.  
Holy, yes.  
Because, if you pay 60%, that's it again, global prices 1 - b.  
One minus 30. Make sense?  
Is Nicholan grow?  
At the 4%  
And required return is...  
Nine percent.  
Why is this sir? Why are it's forward?  
price over earnings and its forward price over dividend. While price over earnings in the market pay it grow worth 5% instead of 4%. So let us, what is this, sir?  
Price today? Yes, what is the price of the stock?  
How do you calculate the price of the store?  
dividend in Juan over K minus J  
Vidal, your wife is.  
4% times.  
60%.  
All of you see that PC figure in your one?  
In my head, it's always K, so R minus.  
Yeah.  
Next.  
So the price is 48.  
Next question.  
Its dividend, what are its forward price over earnings and forward price over...  
And it's for what price over there. Why it's for what?  
Why is it for work?  
This is not the forward, this is the spot.  
is forward because I am asked to use instead of today's one year. Make sense? If I calculate with one year instead of saying the spot, I will call it forward.  
Today, it's over.  
That means one and.  
But it's over.  
Her name is Torkova.  
Price over dividend is 48 over the dividend. The dividend is earning one time.  
One minus.  
The block. Make sense?  
And what about...  
Price over earnings 48 over 4.  
Yeah.  
Is it?  
Why is the cloud back 40%? Why is it being 40%?  
Because...  
They retain it. They say that.  
The company pays so 60% of it.  
The company pays at 60% of its earnings as we do. So the rest is provides product. Yeah.  
Now, what price over earnings would the market pay if grow were 5%?  
The glow would be higher, just changing this one.  
But I so earnings will be 50. Yes.  
Make sense?  
Hidalgo.  
But go through this in order to understand and review, yeah?  
One more time, how is P060?  
No, careful, I have to change this. This here is 48.  
Wait, so is 4 / 9 percent minus 4 percent? BCO. I'm going to do it slow. Yes, I have earnings one. Yes, I'm going to calculate dividend one and dividend one is earnings times 1 minus.  
Four.  
Yeah, 2.4.  
And price today is one over.  
R minus G.  
Good.  
Makes sense.  
Here, you got the numbers.  
And the idea is that price over earnings.  
I mean, I don't know if this will work. Yeah.  
Okay.  
Any thoughts?  
What was this?  
dot com prices.  
About it, what is this?  
A class from 1929.  
What is this, or this is just before?  
Metal Woods agreement was broken. This was before the oil crisis, yeah?  
Any thoughts regarding interrupt?  
Any folks? What is this graph again? But I sold their earnings.  
Around Easter, for all companies, for all companies, as an indicator.  
This is 1929 crisis before.  
This is the.com battle.  
Any thoughts? When there's a bubble. When there's the prices don't match expectation. I don't have to.  
But, by looking this...  
What can we see? That we're in a bubble. Yeah, in the past.  
I don't know. But personally, I will bet that in 10 years' time, people will look at the past and will say, oh, Nvidia, 5 trillion.  
Sadly, that'd be...  
But haven't don't they beat their expected earnings? Haven't they been beating their expected earnings?  
Yes, in the past.  
But type trivial.  
Five trillion. AI is big. AI change. It's a game changer. But here internet was big and it was also a game changer.  
It's already on.  
Yeah, I don't know what is gonna happen. Let me serve you in the WhatsApp group.  
Let me hear this.  
News.  
Okay, now.  
Rose.  
The point is...  
That is part of their lives.  
That will be distributed, yeah.  
But I will take inside the company.  
part of the money that I am not disclosing. Instead of giving, what is B?  
What is P? P is the percentage of the money that will be kept inside the compound.  
What shareholders are going, sorry, shareholders, what managers of the company are going to do with?  
with the percentage of money they get.  
What are they going to do?  
They are gonna invest in themselves and get broke.  
Yes.  
What is return on Equip?  
What is Redondo on Equip?  
Redondo connect with it is.  
Oh, Max, good old.  
You will get.  
Where do you need to be?  
Makes sense.  
B will stay in the compact. What are you gonna do with B?  
No.  
How much?  
What our shareholders expect? We don't.  
For shareholders, suspect return. Instead of giving this return today,  
Hey, which gay? Good old.  
What is it the pop-back ratio determined by just like specific company?  
No back, Ruiz.  
And this decision is basically three things.  
I want to know.  
I want to pay my shareholders.  
Or I am desperate and I need this money in order to survive.  
You can keep money inside the company. So, in order to survive, and in this case, the decision will be a bad decision. And then the flow rate should be high, right? Yeah. If you need the money, imagine, I'm going to die. You are going to die for it. It's better to die and give the money to your shareholders now.  
And that's a way, and that's that there are people that keeps money with it. Why? Because they want to survive, managers want to survive.  
OK, let us try to understand this idea: we want a company has 100 million in assets.  
Return liquidity is 50% and growth average is 60%, yeah?  
What is the idea?  
Let me open any one.  
Play me.  
Open anyone?  
Yes, I'm going.  
My company has 100 million in essence, yes?  
And let me hear in us. Return on equity.  
Is.  
DJ.  
Person.  
Roberto is.  
Sixty percent, yes.  
What is it?  
close rate.  
Calculating growth rate is simple: 0.6 times 50%.  
Translating V.  
At 9%, yeah.  
What is the growth rate? 9%?  
If R is 12.5.  
12.5 percent is.  
If this country rate is 12.5%,  
What is the value of the compact?  
What is the value of the company?  
100 million.  
What if so much successor has in us or equifiers?  
So.  
We don't have earnings, no?  
Do we have earnings?  
60%  
I mean.  
A company has 100 million in assets, yes?  
Redondo with this 50%.  
Let me look the solution, because...  
OK, we're all 9%, yes?  
Then, the film keeps 60% off.  
No, but we don't have, we don't have the earnings. Sorry, but...  
You said 50%.  
If that 50%, but we don't know the earnings, yes?  
For investing ads, whatever.  
With this other?  
When he said that.  
We cannot calculate.  
What is the price of the company? Yes?  
Will you there, please?  
Can you calculate earnings by the, like, how many assets they have and the return on equity? By these three term on equity, not three term on assets.  
But isn't all the...  
In this case, Hidalgo.  
I don't know. We don't know how much debt the company has. Yes? Yeah.  
Belén.  
Why, why am pointing out this?  
Because I want you to understand what we are doing.  
I want you to understand, not just to plug the numbers and get solutions. Yes?  
I let me advance from policy, yes, and then same firm, three different recursion.  
OK, we will talk about this.  
Later, I want to advance because I want to see the exercises regarding dividend discount model, the two steps, yes? And these exercises are much more powerful because I want you to work over this. But the idea is, before, let me talk, let me introduce the concept of present value of growing opportunity.  
Yes.  
I have one home bank.  
Earnings.  
Time 1 - b is given, yes?  
earnings. I can grab out zero or one. I want you to understand what I'm going to solve.  
Earnings.  
Andy, yes?  
Imagine that.  
Row is 0, if row is 0, if row would be 0.  
B. would be one or sorry, B. would be.  
Zero. Yes, B will be zero. All earnings will be distributed as dividends. Yes.  
I can say that the price of a company.  
The price of that of a company has two components. Two components. One that will be...  
The result of a PPD.  
What is this, Hernández?  
Over up.  
What is earnings over up?  
The value the company will have without considering growth.  
Yeah.  
If row will be 0, we will be 0. Hope will I calculate the price of the company. We have seen it.  
We have seen it, yes, and what I'm saying is that the price of the company...  
Ask 2 parents.  
The price without considering growth, but plus.  
What is called present value of growing opportunities?  
What is the present value of growth opportunities? The difference between the price of the company minus the price without considering growth.  
Yeah.  
What is the formula of present value of grown opportunities? What is the formula of video?  
is video is the price minus earnings over R, yeah?  
A video could be positive or negative.  
What you think of an ordinary make sense?  
I'm going to go a little bit faster, because...  
Barrigüete.  
Yeah.  
There is one exercise. You can see it, you can review it, and we can do it. I'm going to jump over this exercise because I want to go to the multi-stage growth.  
This is so simple to understand, so simple to do, but I want to do it. Yes, I'm going to make two states with the disco model I want to do.  
This exercise? No, I don't.  
I want you to do this exercise.  
I'm gonna go to this with water.  
Please try to do it.  
I would like to do the three exercises.  
But try to do this by yourself. At least try to solve the number.  
No.  
Ohh.  
But we are gonna solve these six of places.  
So simple, we will project minutes.  
We will take Excel, yes, or Excel or by hand. I'm going to do it by hand.  
A stock trading dividend is 4. Dividends are expected to grow by 25% per year for next two years. The growth rate after that will be 5%. Required return is 50%. Yes?  
Require return is 50%, yeah.  
Stop training, did you get this?  
Four.  
Here, one, two, three. Yep.  
For the next two years, the living today is full.  
Let me see if the call is this year or next year.  
Ohh.  
Okay.  
One, two, three - how much is going to be the end in your work?  
Four times one point. Make sense?  
How much is going to be there in year two?  
Four times 1.25 rise to the second, yeah?  
And from here.  
From year three in advance, what is going to be the reason?  
And.  
4.125 rest of the second, yes.  
Times.  
Let me write, I don't want this is.  
Or V, yes, in advance.  
Rise to the T, you understand what I mean?  
First year, right? So the first, second, third, yeah?  
Are you following me?  
Okay.  
These are linear, well, these are linear, too.  
Maybe then in year three. Yeah?  
G is 5%, break is 15%, yes?  
Oh, Max, what is going to be?  
Price near true.  
Rice on your soup.  
Is going to be.  
Disign them, yes.  
Four times 1.25 rise to rise to 1.05, yes.  
I.  
Over.  
Fifty percent minus 5%.  
Are you calling me?  
Ask away, give me another one.  
Be than true.  
And the rest of the news.  
Oh, I'm going to calculate the price in year two.  
Let me go to the numbers that I have.  
Miller.  
Here, one, two.  
Three.  
This is 4 * 1.25. Yes, then four times one point.  
Twenty-five.  
Rise to the second, yeah.  
Six point.  
and leave the tree in advance, it's going to be.  
This event times 1.05.  
Makes sense.  
And this will grow at a constant ranging.  
How do you calculate the price in year 2?  
By doing the citizen, citizen in year, next year over.  
Hey, my new G.  
Base 50%.  
Minus 5%, yes.  
And now I have the price in year two, and also I have the dividend. I'm going to calculate total cash flows. Total cash flow in year one is 5, the dividend, total cash flow in year two is this one plus the dividend.  
What should be the price of the stock?  
A present value of 50, sorry, over 1 plus 50%.  
And 71 over 1 plus.  
Fifty percent rise to the second, because we've been waiting years, yes?  
What is the price? How much is the price today?  
the sum of these two numbers, yeah? 58. Let me see, this is correct, 58, 70. That's what I wanted to see.  
What is his number?  
The price of the stock.  
What is inside this number?  
Present value of all future limits.  
This citizen come here, dear.  
This dividend comes here dearly, yes, and all future dividends are included in the price.  
You got it.  
Luis.  
Try to do.  
By yourself, this exercise.  
Did you got the solutions?  
Oh, I'm going to do it quickly. Do you want me to do it quickly or you can do it by yourself?  
What do you prefer?  
is calculating present value and final value. Are you preferred? We are aware of that.  
What do you discount the 65.65? Do you do buy three or two? Which one? The 65.65? What do you discount that by? One over? Yes, this is the event next year.  
What I have on there? Yeah, the the the sixty-five.  
Oh, this 65, I have 6.25 plus 65, and then the result, this plus this is 71.  
And then I do present my year, so 71.875 over 1 plus 50%, 1 plus 50% price to the second. Why does that become 30? No, because.  
This is the present year, too.  
But why do you 65 plus wouldn't it be plus 6.25 and 5?  
This is so simple. One, two, three. Yes? Yeah.  
Here the dividend is, let me call dividend three. I have calculated price in year two.  
As billion year 3 / K minus. Yeah, sorry.  
Yep, yeah.  
Knop.  
How much is price you?  
Be 2 / 1 r raised to the second.  
Because.  
Trey, look.  
I have calculated pricing year two, considering event three.  
And I have to add to this price.  
Understanding this exercise has to do more with you trying to do it than with me doing that.  
I'm going to go to May about final. Yeah, wait, so what was your final answer? Is it was 5870? This is the final.  
I'm going to start with you now. Yep.  
I have suppose you estimate this year.  
I'm gonna sorry for the time I am out with you.  
I omit it, but I want to do you estimate these numbers, yes?  
One, two, three, 4. And the numbers are two point 92, three-point 21, three-point 53.  
And 3.8 day. Yep.  
The required return is constant at 8.2.  
Wait a second. Yes.  
After even hope.  
after the year for the dividend growth rate will be 6.4%, yes? So after this year, probably be 6.4%.  
Person.  
Knop.  
I, I don't want to complicate this.  
How much will it be given in your pipe?  
Is what times?  
OnePlus.  
6.4 makes sense.  
4.1.  
Now.  
What will be the price?  
from DR4 in advance.  
Have music. Is identified over.  
And he's going to break.  
Minus the group, yes.  
This is the price, therefore, yeah.  
And also...  
I have all this number, all these dividends.  
that I sent this plus this and I got total future customers. Yeah, one, two, three, 4.  
How do I calculate?  
the price of this by calculating net present value of this in short cash flow. I'm not going to use net present value for that. I'm just going to calculate this by 1 plus.  
The 4.  
Rise to the 1st and the 2nd and the 3rd and the 4th, yep.  
And what is the price of the stock?  
178. Yep.  
What I have done, I have just calculate present value of future business.  
My recommendation, you have the slides in Brightspace.  
Play with lights.  
Go to.  
This is life before. Go to this is life. Try to read it by yourself. Try to do it by yourself.  
And then look the solutions. Don't look the solutions before trying to solve them. Why? Because if you do it...  
You can be a little bit misunderstood.  
Then 100 seventy-eight.4, 100 seventy-eight.4. I'm going to share also the excerpt, but please don't try to understand this by looking this also.  
Try to do it by yourself.  
Because, at the end, what are we doing? Calculating present value, future cash flow. It is just applying the present value formula.  
Sorry for I owe you 10 minutes. Please talk with me. Olivia. Sorry, I have a meeting. Yeah, I could imagine. Sorry for that. And Olivia, you can run before the class is set. It's OK. It's not better. Thanks. I'm sorry.  
I love you, Sáez.  
Welcome.  
Oh, thanks. No, I was running.  
Six-one.  
Adios. Adios. Which session is this? ** special. Yeah, I don't know which session is. Thank you. Welcome.  
Ohh, here he is, says your name.  
Oh, I'm going to turn off. Thank you, Professor. Welcome. Bye. You think Auro is a good investment or no, based on that?  
Personally.  
One buffet is liquid.  
Personally, I see that there are...  
If the investor, the investment by itself, I think it's good.  
But we are in a moment.  
Where if where I don't see any wood, we are just.  
The slide that I have, the graph that I have put you is that I feel as if we were just in front of the Avison.  
I don't know if I'm explaining myself. No, it makes sense. Like the crash.

![](file:///C:/Users/lgarv/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)**Luis Garvía Vega** ha detenido la transcripción