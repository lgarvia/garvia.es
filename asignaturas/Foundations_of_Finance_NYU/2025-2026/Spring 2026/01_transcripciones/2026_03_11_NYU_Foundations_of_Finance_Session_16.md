# Foundations of Finance (FoF) – Session 16  
**NYU | March 11, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 18min  

---

# 1. Course Structure After the Midterm

The structure of the course changes after the midterm.

### Before the Midterm
The course focused on two difficult pillars:

1. **Time Value of Money**
2. **Portfolio Theory**

Portfolio theory was conceptually demanding and required significant mathematical intuition.

---

### After the Midterm

The complexity changes:

- Topics become **conceptually simpler**
- But the course introduces **many small ideas quickly**

Upcoming topics:

1. Finish **Equity Valuation**
2. Start **Fixed Income Valuation**
3. Study **Arbitrage**
4. Introduce **Derivatives**
5. Briefly cover **Options (Black-Scholes)**

The key idea:

> Instead of a few difficult concepts, the second half contains **many small interconnected ideas**.

---

# 2. Equity Valuation Overview

The goal of equity valuation is to determine the **intrinsic value of a stock**.

Key principle:

$$
Price = PV(\text{Future Dividends})
$$

A stock is worth the **present value of all dividends that will be paid in the future**.

---

# 3. Market Data Example: Intel vs Cisco

Two companies are compared.

| Company | Ticker | Price | Shares Outstanding |
|-------|-------|-------|-------|
| Intel | INTC | 24.03 | 5.25 billion |
| Cisco | CSCO | 18.79 | 5.38 billion |

Multiplying price by number of shares gives:

$$
\text{Market Capitalization}
$$

Market capitalization represents:

> The total value of the company according to the stock market.

---

# 4. Earnings and Price-Earnings Ratio

Each company also reports **earnings per share (EPS)**.

Example values:

| Company | Earnings |
|-------|-------|
| Intel | 1.17 |
| Cisco | 0.86 |

The **Price-Earnings Ratio (P/E)** is:

$$
P/E = \frac{\text{Price}}{\text{Earnings}}
$$

This ratio indicates:

> How much investors are paying for each unit of earnings.

Interpretation:

- High P/E → expensive stock
- Low P/E → cheaper stock

However, the ratio must always be interpreted **relative to growth expectations**.

---

# 5. Dividends, Earnings, and the Plowback Ratio

Companies generate **earnings**.

These earnings can be:

1. Paid as **dividends**
2. Reinvested in the company

---

### Plowback Ratio

The **plowback ratio (b)** measures the fraction of earnings reinvested.

$$
b = 1 - \frac{Dividends}{Earnings}
$$

Interpretation:

| b | Meaning |
|---|---|
| 0 | All earnings distributed |
| 1 | No dividends paid |

Higher plowback means:

> The company keeps more money to finance growth.

---

# 6. Dividend Discount Model (DDM)

If dividends grow at a constant rate:

$$
P_0 = \frac{D_1}{k - g}
$$

Where:

- \(D_1\) = dividend next year
- \(k\) = required return
- \(g\) = growth rate

---

# 7. Required Return from CAPM

The required return is determined using CAPM:

$$
k = R_f + \beta (E(R_M) - R_f)
$$

Example:

Risk-free rate = **3%**  
Market premium = **6%**

Betas:

| Company | Beta |
|------|------|
| Intel | 0.97 |
| Cisco | 1.12 |

Required returns:

$$
k_{Intel} = 3\% + 0.97 \times 6\% = 8.82\%
$$

$$
k_{Cisco} = 3\% + 1.12 \times 6\% = 9.72\%
$$

---

# 8. Zero-Growth Valuation

If the company does **not grow**, earnings equal dividends.

Price becomes:

$$
P = \frac{Earnings}{k}
$$

Example:

Intel:

$$
P = \frac{1.17}{0.0882} \approx 13.27
$$

This is the **value of the company without growth**.

---

# 9. Value of Growth Opportunities (PVGO)

Actual stock price may differ from the zero-growth price.

The difference represents the **value of growth opportunities**.

$$
PVGO = Price - Price_{NoGrowth}
$$

Interpretation:

- **Positive PVGO** → growth opportunities are valuable
- **Negative PVGO** → reinvestment destroys value

---

# 10. Growth from Retained Earnings

Growth arises from reinvesting profits.

The relationship is:

$$
g = b \times ROE
$$

Where:

- \(b\) = plowback ratio
- \(ROE\) = return on equity

---

# 11. Return on Equity (ROE)

Return on equity measures:

> How efficiently managers invest retained earnings.

$$
ROE = \frac{g}{b}
$$

Interpretation:

| Case | Meaning |
|----|----|
| ROE > k | Growth creates value |
| ROE < k | Growth destroys value |

---

### Important Insight

If a company reinvests profits but earns **less than the required return**, it should:

> Pay dividends instead of reinvesting.

---

# 12. Interpretation: Intel vs Cisco

Example conclusion:

Cisco:

- Higher plowback ratio
- Higher growth
- Higher ROE

Therefore:

> Cisco has a higher **P/E ratio** because the market expects stronger growth.

Intel:

- Lower ROE relative to required return
- Growth opportunities create less value

---

# 13. Stock Price Decomposition

The stock price can be decomposed into two components:

$$
Price = \text{Value of existing earnings} + PVGO
$$

This highlights the role of **growth expectations** in valuation.

---

# 14. Two-Stage Dividend Discount Model

Some companies initially grow quickly and later stabilize.

Example: Starbucks (2005).

Characteristics:

- No dividends for several years
- High growth phase
- Later stable dividend growth

---

### Dividend Timeline

| Year | Dividend |
|----|----|
| 0–4 | 0 |
| 5 | 0.50 |
| After | grow at 9% |

Required return:

$$
k = 10\%
$$

---

# 15. Step 1: Price at the Start of the Stable Phase

Using the Gordon growth model:

$$
P_4 = \frac{D_5}{k - g}
$$

$$
P_4 = \frac{0.5}{0.10 - 0.09}
$$

$$
P_4 = 50
$$

---

# 16. Step 2: Discount Back to Today

$$
P_0 = \frac{P_4}{(1.10)^4}
$$

$$
P_0 \approx 34.15
$$

This represents the **current stock price**.

---

# 17. Interpretation of the Two-Stage Model

The valuation process involves:

1. Estimating future dividends
2. Determining the required return
3. Discounting all future dividends to today

This is simply an application of:

> **Time Value of Money**

---

# 18. Key Takeaways from Session 16

1. Stock prices equal the **present value of future dividends**.
2. Growth comes from **reinvested earnings**.
3. Growth is valuable only when **ROE exceeds the required return**.
4. The stock price can be decomposed into:
   - value without growth
   - value of growth opportunities.
5. The **two-stage dividend discount model** is used when companies have an early growth phase followed by stable growth.

---

# 19. What Comes Next

The next topic will be:

**Fixed Income Valuation**

Students must understand:

- Bond pricing
- Yield relationships
- Present value of cash flows

These concepts will be essential for later topics such as **arbitrage and derivatives**.

# Transcription
11 de marzo de 2026, 5:16p.m.
1 h 18 min 3 s
I'm big. Yeah, it's fine.  
There was actually somewhere and I will see it in one or two hours and I told her. I will tell her that you don't need to work.  
And.  
OK, equity evaluation. OK, careful because the difficulty for the final is slightly different than the difficulty for the middle, yes.  
For the leader, if you could be was made into two parts. First part has to do with the value of money, fully understanding. For me it was important and it was hard and also fully understanding portfolio theory.  
We understand portfolio clearing. We are not going to live anymore with one complexity equivalent to portfolio clearing.  
Do you understand what I'm saying? All things that we are going to see from now till the end are more simple.  
Then why is it difficult?  
We could see that for example today we will finish with equity evaluation.  
We are not going to work anymore. The review classes before the meter.  
If you have any questions next day, today I will answer all questions, but we are not going to work anymore in the end.  
And we will immediately start next week to fix income valuation. We will dedicate to fix income, six plus seven plus. I will know exactly how much we will start working with arbitats.  
I think that there will be I I don't remember four or five classes regarding ******* go, yes, and once we finish with ******* go.  
We will start with the relatives from zero and we will quickly see in a short time options, you know the model that can source and.  
Teachers and trucks.  
What do you say in Spanish? We say.  
It's, it's. But you can feel you're going to start working from now is the day.  
Do you understand what I'm trying to say? I mean something small. It doesn't. It hurts, but it won't. It won't kill you. And I need a lot of small, small things. Do you understand what I'm saying? Today we will finish with the different ratio.  
This class you can understand, you can fully understand it. The next day we will change into fixing code. And I have already told you that the most important thing for me is fixing code. You know in how to calculate it.  
Any questions?  
So.  
I don't understand this charity way. So let me start with fixing with sorry equity valuation.  
They we are gonna pass the business. They're gonna do true exercises.  
Regarding these two exercises, I will show you one of closing theory I will introduce.  
Value of growth opportunities and also I will introduce return on equity, yes.  
But we will see two exercises.  
OK, equity evaluation. Here you've got two stocks, Intel and Cisco. Yes, all of this information is public. Do you have any?  
I gave you 10, so there should be one. There are two.  
There are two anyone.  
Oh.  
Bye, bye.  
Like you need a message.  
So I will leave it there for next day and next day I will, I will give it to.  
OK.  
Equity valuation. I have two stocks. Yes, Intel.  
Oh.  
Price is 24.03, yes.  
Of interval here is all of you know what is the ticker ticker so.  
Ticker. Ticker. Ticker. Then you write it. Ticker.  
Have you ever heard? No. OK, from one stock is this symbol. I mean the ticker is the ticker. For example, Banco Santander. Have you heard of Banco Santander?  
Yes.  
Yeah, it's a Spanish company. The ticker for Banco Santander is San. SAN is what you will put in a in Bloomberg. Bloomberg, for example, is a place in order to see what is the quote of a stock or in Yahoo Finance. The ticker stands for the stock.  
The ticker for Intel is INTC and the ticker for Cisco is CSCO. What is Intel and what is Cisco? 2 microchip companies, yes.  
This call I I don't know horribly sorry because I know that linkering is linkering, but in Spanish linkering linkering.  
The what? The LinkedIn. How do you say LinkedIn? LinkedIn, LinkedIn. In Spanish we say linkering.  
Eh, Eva.  
Your name Muriteni Saba, but I know that you are Evala, the Spanish Eva that is with E instead of a.  
Normally I I will have problems, language problem with companies that I am used to call these companies in Spanish.  
You understand what I'm saying? No, Panco Santander and he's a Spanish company.  
I don't know. How will you call Garth? How will you call Banco Santander?  
Yes, I am. But bank of Santander, you will not call it. You will call it SASIM. Oh yeah, whatever price, number of shares.  
5.25 billion and 5.38.  
Billion. Yes. What do I have got there? The price of the stock and the total number of shares. What number will I get in case I multiply the price of each stock times the number of stocks of the stocks?  
It's not really like it.  
Which number will I get?  
What is market capital?  
The amount of money that I should pay in order to buy the whole company. But carefully, because if I want to buy the whole company, probably the price will go up.  
OK.  
But .25 market cap is I don't care about market cap, but I want you to know what is market cap because.  
OK.  
I have yes, Eva. I have just multiplied the two numbers there then.  
Earnings. Earnings came from accounting, yes.  
Earnings came from accounting 1.17.  
What else? Earnings and OK, but eyes over earnings ratio.  
Please look at the screen. So simple. I'm going to take the price of the stock, the earnings per share, and I divide the two numbers.  
I divide the two numbers price over earning. Yes, it's a ratio. It's a ratio something that helps me.  
Helps me.  
Thinking about what? Price and in ratio? What does anyone knows what does price and in ratio?  
Tell me about.  
Oh.  
OK.  
Grows, growth in particular, no growth in particular, no, because growth, we are not about growth and we'll introduce growth.  
A for example.  
10 thou $10,000 for a car.  
$10,000 for a car is expensive or not?  
You get this information, you can say not expensive, but you need more information. Second-hand second-hand car that is almost destroyed, shown also expensive.  
But he's not expected.  
$100,000 worker, but can you tell me?  
It's expensive, but I am talking about the Lambo. Also you can say you can consider that it's 100,000 is expensive, yes.  
With price earnings over the earnings ratio, it tells me more or less the same. It tells me price over earnings.  
How much I am paying per unit of earnings?  
So this is that probably more probably after all these things, growth matters, but not at the beginning. But I saw there's how expensive the companies and in this case.  
If I just see these two things.  
What is my first conclusion?  
That Cisco is more expensive. I mean more or less both companies dedicated to the same thing.  
It's more expensive. The question is why? Why is it more expensive? This class will be dedicated. Half of the class will be dedicated. Let's see if they go. Yes, all to time. Samir.  
Rice Governor, what are we going to dedicate today today?  
You see what does this mean? That's all good. Yes. OK, let me go. Let me finish my eyes.  
Yes, yes, yes. Moving to this blackboard, don't know why because there are things that I think that this is too much distance.  
OK, let me start by the reading.  
What does this stands for?  
What?  
Sofia is my son.  
What does this stand for?  
All of you.  
OK, I will forget. I don't care. I will not care. Taxes exist. Taxes are an important part of our lives.  
Hello.  
When I forget about taxes, I will consider be certain after taxes, yes.  
And what can we do with Ernest?  
We can keep earnings inside the company.  
Or we can distribute earnings as difficult. Make sense.  
So let me introduce.  
I.  
The flow back ratio. What is the flow back ratio? A percentage and this percentage tells me.  
Home Max earnings will be distributed as dividends. The flow back ratio is 100%.  
All earnings will be gained. No dividend will be paid. You don't like the pressure. You see, all earnings will be this dividend. Make sense.  
OK now.  
It's no bad racer. It's still.  
Yes.  
Ernest, yes.  
Please.  
Please.  
You don't keep money with yourself.  
You cannot grow. You cannot grow with your with the money that you are giving.  
So there is no money that we are taking. So no will be see. Make sense.  
We grow.  
Dividends and earnings are going to be constant. How will you calculate?  
The price of the company we throw.  
How will you calculate the price of the company without considering growth? Then it's going to be cost, no? So price will be equal to.  
Isn't over.  
You did over what you stay.  
Great class beta times market premium.  
What is this formula?  
Yes, yes, yes. You don't need to remember and because you don't. This is the only thing you need to remember for portfolio here. You don't need to know anything else.  
OK.  
We know growth is a perpetuity or we will calculate present value of a perpetuity by agreeing the perpetuity over K.  
It is the dividend and there we don't have dividends yet, we just have earnings.  
We will introduce this step by step.  
OK. This is what shareholders get or are we going to calculate the price of a company by calculating percent value of mutual dividends?  
Because I mean, why a person wouldn't buy a spoke?  
Because of there are two things because of dividend and in case you don't, but you are going to sell it, but the new buyer will think about dividend. So why someone will buy a stock? Because of dividend.  
OK.  
Now how are we going to calculate the price of a stock that pay off dividends that will grow at a constant rate? Dividend P is going to be equal dividend 0 * 1 plus.  
Don't break.  
The reason? How are we going to calculate the price of a stock that will grow at a constant rate?  
By doing dividend one over.  
OK, this is a.  
But because it's rowing minus D, yes.  
So what's dividend T again and dividend one? The price today is going to be equal to dividend one over KIK minus T So what's dividend T dividend one is the dividend in year one on the top.  
Is dividing B and you are 357 equal to make sense all you are with me.  
All of you have understood this.  
Please, I'm going to say several things.  
I'm going to change several things and I will repeat this not today, but I will repeat this two or more or three more times in class. And if I were you, I would repeat this several times when study.  
Hidden one is hidden 0 * 1 + D make sense.  
Yes.  
0.  
Yes.  
Aaron Seal.  
Times online used to be.  
That's dividend 0. That was the dividend 0 or dividend one?  
I'm going to repeat this on that block.  
Mhm.  
Is Mary, Yes.  
May, yeah.  
No.  
That is over earnings ratio to be equal to 1 -, B.  
1 D / K minus DS.  
By that the formula which wins with which we will play today.  
Make sense.  
OK.  
OK. Why are these price over earnings ratio so different, so different? Why? We will see, we will see. First idea is that Cisco.  
Pisco is more expensive, yes.  
Make sense? Disco is more expensive. Why?  
We don't know it yet.  
We are going to go deep.  
Here first idea.  
Beta. Each company has a different beta, so each company has a different.  
Requirement from the market? Yes, what is better?  
What is better? All of you know it, the regression coefficient with the market.  
Here, let me calculate K Here we've got a.  
Risk free rate is 3% and equity risk premium market risk premium is 6%. So with this knowing this here let me write better 0.97.  
And 1.12, yes.  
Considering these betas, I can calculate the required return by the market. Yes, what the market expect from us and the market expect a 3% plus beta times market premium. Market premium is 6%, yes.  
So market expect in case of.  
In case of inter.  
Market expected 8.82% of return, yes.  
And in case of Cisco market expect 9.72. What is this number?  
This rate plus beta times marketing. OK, 3 percent, 3% plus beta times. I think it's 5% or you got it.  
Tell me.  
Oh.  
Is the same formula.  
Because.  
No, I mean this is.  
Expected return for this company having this better.  
And this is expected return for this company having this better.  
Oh, regarding this one.  
This is the price of the company.  
The price of the company, the price of, the price of the stock, the price of the, I mean a.  
Good. It could be both.  
In this case, the price of the stock, but careful.  
If this is the dividend of desktop.  
This is the dividend per stock. This will be the price of the company, so the price of the stock. And if this will be total dividend, this will be the price of the total company and this is the price of the stock.  
Price of the stock and price of the stock because it's equal, equal, equal and then here.  
This is the price of the stock.  
This is a question.  
And what I'm taking is taking earnings here and that formula tells me this is the formula for the price over earnings ratio.  
Yes.  
and so  
What are we? Sorry, what are we doing today? In this part we are thinking we are talking about price earnings ratio. We are trying to understand why there is a difference of between what is a difference between the two price over earnings ratios.  
Make sense?  
Yep.  
OK. Earnings, OK.  
I have this beta and this beta and with these two betas I have calculate this expected return and this expected return. Make sense.  
What I'm going to calculate?  
Look here, I'm gonna calculate what should be the price of the company in case we were not considering growth. If there were no growth, if there were no growth, all earnings.  
Will be given. I can calculate the price by doing earnings over K.  
Because early Tanzanian services.  
Yes.  
So I have made. I forgot.  
In order to avoid misunderstandings, I'm going to write here.  
Yes.  
Absolutely you didn't earn, but if there is no role, earnings and mediums will be the same. Make sense.  
What should be the price of the company without growth?  
Price without.  
Grow. Yes, right. Without grow is going to be earnings over. OK, make sense and this would be 24.  
And these would be 12.  
Yeah.  
OK. And let me calculate price over earnings ratio without growth. Yes, what I want to do is to compare.  
This price with this one and this number.  
With this one, yes, what is price over earnings ratio without growth price over?  
Ernst, yes.  
OK, if I think about the company.  
OK.  
The company should be cheaper, should have a lower price, but it has a higher price. So a first quick idea where could, where could, sorry, yellow and yellow. Where could this difference in play in price?  
Came from.  
Jessica, where this where could this difference in price came from? Yes.  
Yes.  
But if I am sponsoring, we don't grow. Let me continue.  
Oh, OK. What price awareness ratio does the zero growth dividend discount model predict? The ones that I have already calculated, Sophia.  
Yes. What is the difference between this and this? We will. You are asking me to do a spoiler.  
The difference is the value of growth opportunities. We will calculate it. The difference if we subtract one from another, you can see in the slides.  
It's like.  
The slide with the title growth opportunities.  
You will see that present value of growing opportunity is the difference you are asking for and it could be a positive or negative difference. It could be positive or negative.  
Make sense?  
OK, what is this? OK, we voted. Let me continue.  
We can go, we can go. This information is public, yes, we can go to to the books of this company and here we've got the dividends 0.73 and 0.18.  
I'm going to go here, here. Dividends, yes. And dividends are off. Dividends are off 0.73 and 0.18, yes.  
No win earnings. No win earnings. No win dividends.  
I can calculate global price. Oh oh I can do it P is equal to.  
1 -, 3 over earnings.  
I'm going to play robot ratio by doing 1 minus dividend over earnings.  
This is the formula, but I'm going to just plug with hex, yes.  
B blow up ratio, yes.  
One minus.  
Dividends over.  
Earnings, yes, 1 minus dividend over earning.  
Make sense?  
So here global race is going to be.  
66.51 and here global ratio is going to be 84, yes. What does this number tells me?  
That Fisco both companies.  
Jennifer. Yes. No.  
Yes, sorry.  
Jessica, sorry, I'm Jessica. What does these two numbers tells me?  
1.  
That both companies, both companies are working hard for growth.  
Both companies are working for growing.  
But who is keeping more money in themselves? Pisco.  
Yes.  
OK, the earnings, dividends and now.  
I need to know growth. Where can I get growth from? I cannot get growth from anywhere anywhere else apart from estimating. I could estimate growth. Yes, where should where I have getting these numbers?  
In this case in particular, I have got these numbers in order to match the whole number makes sense, but how will you get these growth rates?  
Don't know. You understand what I'm saying. Where you can get dividends, I know where you can get earnings. I know from the accountancy.  
But where can you get growth? We should estimate it. There is not a place where you can find. There is not a crystal ball where you can get the growth the company is going to, is going to have. Make sense.  
OK, and I have this group 5.61 and 8.68.60. Let me plug here group, yes.  
5.61% sorry 5.61% and 8.6%.  
This.  
OK, now show it.  
I'm gonna because I have me.  
He.  
The global ratio, I have G the growth rate and I have K the expected return from the SML I'm going to use, I'm going to apply.  
This formula in order to see if the price over earning ratio match.  
Yes.  
OK.  
I'm.  
The formula is 1 minus sorry. Yeah, place over earns. Yes, the formula is.  
1 -, B.  
Thanks.  
One plus.  
D.  
Over.  
Let me look for K.  
Minus. Let me look for.  
Yeah.  
Yep.  
Well, I'm I have happy, happy, happy and happy.  
Make sense?  
What I'm doing there? One minus B times one plus D over K minus G.  
Yeah.  
I wanna cry.  
Oh, no, no, no. I don't want to cry. Sorry.  
No need to cry.  
You are you. You understand my point, no?  
And let me put it more beautiful 11.02 yes.  
And now if you see this number, this number maths and let me see this number and this number also maths, yes.  
But careful, I don't care too much about this much. Why I don't care about this much too much.  
Because I have get G from the price over at least I made it in order what I hear is about you to understand what is coming up.  
Can I like this?  
Earnings are equal million * 1 minus.  
Let's say I can.  
Even is equal to earnings times 1 min minus min.  
Then we don't the market expect for me.  
And now what the company do?  
The company.  
Keeps money that is not going to be paid to their shareholders. They keep money to themselves. Yes, what is big? The amount of money that stay in the company.  
And what the company is going to do?  
We got money. We're gonna get that return with the money they are gonna get with this money.  
Are you following me?  
And the money they keep, thanks, their return.  
On equity, David, maybe give you close money that should be in the shareholder's pocket at least in themselves, yes.  
Yes, I want all of you to understand what I'm doing now.  
The money they did, thanks the return they get from this, this is going to be equal to.  
Yes and that.  
Making money with themselves. And what what do they do with this money they get? They have an electro.  
8 represent.  
Risk rate plus beta times return on the market minus whiskey.  
This the specter return. This is this came from the SNL. This is what the market expect from me. We are going to see it in more detail now. We are going to see the relationship. But let me before thinking about this, continue here.  
We use it from this formula that will turn on ethnicity.  
Is D / B yes.  
I'm sorry, why escape?  
But people expect from outside the company.  
The return they expect from outside, yes.  
And what is return on equity? What the managers?  
I sense.  
Managers inside can't overperform in the market, but also when the opposite will overperform, don't overperform.  
Under, under, under.  
Do you understand what I mean? The relationship between a American on equity is going to be absolutely, absolutely, absolutely important, yeah.  
Let me calculate.  
Return on equity, Yes. Let me calculate return on equity. What is return on equity?  
B.  
Sorry, GG over B, yes.  
OK, sorry for this.  
And please here.  
What is game? What the market expect from us?  
What is return on equity? What the managers of the company are doing?  
What is the problem with Fisco? What is the problem with Fisco? I could expect an 8.8 and they are getting an 8.4. What should they do instead of keeping money?  
Instead of investing more in themselves, this money will be better in the shareholders program. On the other hand, why disco? Why disco is more expensive?  
I think because the market is expected and I'm going to be true, but the managers are doing are overperforming what the market expect from them. Make sense.  
Yes.  
If you are, if you have understood this.  
I feel satisfied because we are on the, on the, on the, on the correct way now.  
Where does growth came from? From what the managers are doing, yes. And in this sense, what are the implied return on equities? We have already calculated. Let me I'm going to save this because I want to once immediately I finish.  
This I want to send this to you and session.  
2.  
OK, Section 16. Return on equity.  
OK, what are the implied return on equities?  
I have already calculated. Yes, I have calculated in the formula set.  
Bottom line, Cisco has much higher price over earning ratio than Intel because.  
Their managers are performing better because it's return on equity and rotation rate are higher. Not just they do better, but also they keep more money.  
Make sense?  
Sophia.  
Oh, no, Sophia, you can hear, but let me just one quick. You can forget about this. You can forget about this. Let me go quick through this. This is the.  
Or less, this is exactly the same I hope I have in the.  
The first time that this has happened in my life and this is the same more or less. Here you substitute P times return on equity and the question is when, when should I, when should I increase B?  
What are we going to do? We are going to calculate how much the price changes, how much the price changes when we change the we do the derivative, yes, and by doing the derivative.  
We got this number and if you see the nominator, the denominator will always be positive.  
When this derivative will be positive, when this derivative will be positive, you will make sense to increase the when this will be positive just in case return on equity is higher than that.  
We don't want it with this higher arcade. It will make sense to keep money inside. We don't want it with this lower arcade. Keep the money.  
It is now the question Sophia was asking me before.  
What is? What are growth opportunities?  
We had good.  
Two prices. I have the price of the company that is listed and the price without considering growth, yes.  
What is the difference between the two prices?  
What is the difference between the two prices?  
Present value of growing opportunities. What is PVO?  
Present value of growing opportunity is the price the company has minus the price without considering growth. Make sense.  
And let's calculate this number.  
Let's calculate these numbers, this number and what can we see?  
But in the case of interest, PDO negative. Why PDO is negative? Because return on equity is lower than gate because the managers are underperforming market expectations. What does the market expect?  
A line called whatever. What are they doing? What are we waiting? What are what is their return equity lower?  
Let me let me go there.  
Yeah.  
Rice. Rice of a cup pie.  
Peace. It is sent by you the whole future periods.  
We are going to see just right now with another example. How are we going to calculate the price of a company by calculating present value or future events?  
Here, over here, I have her. I have a resume. Maria, Maria, that company has a constant, a constant dividend forever depending.  
How do we calculate the price by dividend over pay?  
There's another picture.  
Make sense? So.  
This is the price of the company today and the price is present value of all the units and what we are doing here is dividing.  
Present value in two parts, one part that is without growth.  
And the other part is present value of growing opportunities that could be positive or narrow. Or are we going to calculate present value of growing opportunities by doing the difference between price minus the price we do consider it low?  
Make sense?  
Yes.  
OK.  
So I'm gonna finish with another exercise.  
Another exercise.  
The two two states dividend discount model.  
I'm gonna do one exercise and by doing this exercise you will fully understand the two states dividend discount model, yes.  
Starbucks year 2005.  
Starbucks in year 2005 was growing, yes.  
Let me go here. Yes, put this here.  
And.  
Start.  
OK.  
We are in year 2005, yes. Starbucks in 2005 was small and Starbucks dedicated several years to grow and during these years Starbucks.  
Dividend pay dividend.  
Let me read. Starbucks did not pay dividends between year 2006, 2007, 2000 and 2009. Yep.  
1009 Yep.  
During these years, Starbucks didn't pay.  
Dividend.  
3.  
And now in year 2010.  
Starbucks was gonna pay a living of 0.5, Yep.  
Let me take this.  
Here, let me just say here 012345678.  
And so, yes.  
What is going to happen from year 0.5? That the Starbucks stock will grow at a constant rate of 9 percent, 9%. So the dividend will be this times 1 + 9%.  
Make sense?  
And the dividend will grow at this rate.  
Whatever.  
What is the dividend in year 1000 and zero? Yes.  
Good. What do I have here?  
What do I have here? Future events.  
Hello.  
Can I calculate the price of Starbucks today?  
Oh, I'm going to calculate the price of Starbucks today by calculating present value or future dividends.  
Except this, I complete present value of in short minutes.  
And which is going to be great.  
At which discounting rate Starbucks required return is 10%.  
Is 10%.  
Are you with me?  
I'm gonna do it first.  
Year 5 is 0.5 lessons.  
If we get in year five and grow, it's going to be 9%. OK, the discounting rate is going to be 10%. Make sense.  
What is going to be the price in the airport?  
Starbucks right year 4 is going to be bigger than 5 / K -, J.  
So price year 4 is going to be 0.5 over.  
10% -, 9% and this is 0.5 / 1% and this is.  
Because I don't have diligence before and I know that in year five a decent will be paid and this decent will grow from year 5.  
What is this? What is the name of this thing I'm doing? This is called the two states. What is this in the first states?  
I'm calculating the price of the.  
What should be?  
What should be price today?  
As today, look, I'm going to do this the long way. It's bigger than the year 1 / 1 K.  
Plus in year 2 / 1 K rise to the second.  
Plus even in year 3 / 1 K rise to the three.  
Plus period in year 4 plus price in year four over 1 + a rise to four. Make sense.  
So I can say that this price is P4P4 over.  
One plus 10% rise to the whole.  
This is the second steps and I'll bring in present back. So what should be?  
What should be?  
The price.  
I'm not gonna use the numbers I've got there. I'm gonna just calculate that formula.  
Sorry, let me do it better, but ice.  
In year or place in year 4.  
It's gonna be.  
This is over.  
OK, minus.  
90%, yes, that is 50.  
And price today.  
Is present value.  
One plus.  
10% price today for yep.  
34.15.  
What happened? Have you asked a great present value? What is this exercise? The one that I have there though? Time value of press and value of.  
You don't ask.  
Please now you can do you need regarding problem set.  
Sit.  
Regarding program support, I mean probably anything else. There is one exercise regarding America that you don't know how to do it, but there is one exercise regarding another exercise regarding PDO that you can do.  
And next Monday you can ask me and I don't have any problem in giving you the solutions and I'm doing whatever you tell me to do it just because we are not going to talk about equity anymore.  
The week before the time.  
And we have Easter in the middle, so we have a lot of time. I have office hours and I have your service.  
Oh, what was the name of?  
Yeah, let me one SEC. Let me turn this off.  
This is off. Perfect. I'm in love with A I A I is growing at an incredible. It's crazy. I'm working with swamps of bots.  
How does that work? You know, Antrophic. Antrophic is sorry. Antrophic. No, Antigravity. Antigravity is an orchestrator. What is an orchestrator? Like like an orchestra. There is a director and the director coordinates all the boats, OK?  
As one, there is no director. There are a lot of agents, a lot of bots working one with each other and they have life. It's like open cloud, but in a smaller way, more simple than open cloud and it's crazy and I love it.  
What? I don't remember the name of the student.  
Don't go. Yeah, I know, I know. Let me share this.  
Oh.  
No, that's like what happened. Yeah, me too, but I've been like.  
The so that was not, I think I I got myself too hung up on one or two of the multiple choice and then I was like a lot of time. Wait, yeah, I started my first half doing the first model. I knew we didn't do well 'cause there was like, sorry, one of them where I can't get free answer.  
I was looking for the in the WhatsApp for your name. Hey, Katara. OK, nice to meet you, Katara. Yes, one second that I have these two, first the two people. Please. Yes, Jessica.  
Call Jessica. I'm calling Jennifer, Jessica, all the and the band.  
Your your grades where you are in in the top three. Yeah, yeah, because of that, yeah, yeah, yeah. Because of that, I at the beginning of the class, I insult you, harass you.  
Because no, no, I don't. No, no, no, no, no. There is one point also. I want you, for example, you should work a little bit more and he just came to class a little bit more.  
No, no, no, no. Yes. At the end, I don't worry about. I'm not worried regarding your performance. The rest of the class was a disaster. Yeah, I'm not saying this. I put all the. I put all the. I was transparent. I put all the numbers on the blackboard without pointing names.  
But I put all the and I told you that there is a curve. The class is curve. Why? Because if it were not curve, I should have everyone's failing. Yes, we're all failing now, but you understand what I'm saying.  
And no, not only that. Look, look, this one, this, this, this one, the one that you asked me about doing at the end. I I don't want to show names. I don't want to show names.  
The point is, what I want is just doing because she's perfect. Correlated was just two lines. But look what people I don't want to show you next. Oh, this one did it perfect. This is what I was looking for. This is, this is.  
I just do. Yeah, I also do that. This is perfect. I I took that. I'm not showing names, but look this one. What I mean is that what you did or or this one forget about what is in green. Yeah, I also, yeah. No, but but what I mean is that no, at least you try better. You know how to grab.  
Points in a graph. Yeah. You know how to count. You know how to sound. Yeah. Sorry for what I'm saying. I'm not, but I have, yeah.  
Thank you. No, no, no, no, no. You don't need to or yes, welcome. I'm trying my best, but also you need. But regarding both of you, I was not worried about both of you. I was worried about the rest.  
And I don't want anyone to get depressed. Yeah. Do you know why this is closed? No. I haven't say that. I didn't say that. I only asked my my my duty. Oh, sorry.  
OK.  
Is this not my my my job is asking question and I I'm asking question I and also I love the moment. I am giving them the.  
And I'm, I'm trying to, yeah, with this question. Yeah, we're dying. We don't see the answer.  
Oh.  
Oh, I have two perfect negative work. What do you see? Oh, oh, oh, OK, yeah, yeah, I understand. That one. That one was was tricky.  
And I love you to say this.  
What you were thinking is about this, no? Yeah. I don't want you to get angry with me. Yeah. If correlation is perfect, then go this. No. Yeah.  
I shopping. Yeah, I shopping this. I can get a risk free. But is it not also risk free if it's like perfectly negative correlated? So you know if one goes up by 50% other one will go down. No, I I mean if there are perfect correlated, there are perfect correlated.  
If there are perfectly correlated, sorry, did I be perfect? You will be here. If not, if there are perfectly correlated, you are there. So you can sort. Let me do it there because I want to you are there. No.  
So you can have these three.  
I kind of understand. I understand why I I I understand.  
You understand this one? Yeah, OK at the end.  
It's the same.  
Buying this and buying this with perfect negative correlated correlation or buying this.  
I'm selling this with with perfect. It's like the same. Yeah. So I mean for me, for me it would be sorry for talking about people. For me it would be safe buying you, not buying you, but buying a stock.  
That moves in what way or sorting one that moves? Yes, the opposite, OK.  
OK, I mean, it's the same. It's the same -1. It's the same -1 that minus positive one. OK, yeah, OK, makes sense.  
Why is it wrong? Sorry. Nah, I mean it's wrong because the correct question was the other, but certainly but one thing I don't have any problem in giving you with this an extra point. I don't have any problem, but trust me.  
You don't need more extra points. Yeah, yeah, OK. I just wanted to understand. No, no, I'm I'm understanding that is what I have told you is this and and if you need to understand that.  
Do you need to understand that?  
I'm absolutely happy because the midterm is there just in order to push you better. So if you if you're concerned is understanding that.  
I'm happy because it means that you have understood all the other things that are much more important. Trust me, there are people that has not got that understanding. Yeah, wait. And one more question, Professor. So for this question, I thought we were supposed to like plug in the formulas.  
I mean normally I I we went through this in class the other day. OK here it's just plugging the formulas but also you should calculate sub phrase. Oh OK, so so the formula was right in this way but that's in this. Yeah, but also you should calculate sub phrase. OK, that makes sense.  
But again, yeah, yeah, this is not the one acre. OK, more even for me, the important one that we went in class.  
This one is absolutely important and we did the same in class. This one. Oh, yeah, Oh yeah, we did it in class. We did the same exercise in class the day before and for me, you knowing how to do this.  
I last day I went through this and I told them that I was going to go at least two or three more times because it's true. Next day when talking about arbitrage, I will go not not this exercise, but understanding how to calculate the price of a home, yeah.  
Welcome. Thanks to you. Because thanks to you, I was there was correcting these exercises. There was one moment that I was close to lose my faith in humanity. No, no. And thanks to you, I recovered.