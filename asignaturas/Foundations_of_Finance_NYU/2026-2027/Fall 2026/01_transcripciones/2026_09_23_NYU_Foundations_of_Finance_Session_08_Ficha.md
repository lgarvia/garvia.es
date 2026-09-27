---
titulo: "Foundations of Finance – Session 8: Equity Valuation"
fecha: 2026-09-23
curso: "Foundations of Finance (Fall 2026)"
sesion: 8
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---
# Transition to Equity Valuation

September 23, 2026 · NYU Madrid

## 1. Session overview

Session 8 marked the transition from fixed income to equity valuation. We began by reviewing returns, dividends and the yield curve, then applied the familiar present-value framework to stocks.

The main topics were:

- Holding Period Return, arithmetic and geometric averages, and dividend reinvestment.
    
- Differences between stocks and bonds.
    
- Book value, market value, liquidation value and replacement value.
    
- Intrinsic valuation and the Dividend Discount Model.
    
- Constant dividends and the Gordon Growth Model.
    

The central message is that the valuation principle has not changed: an asset is worth the present value of the future cash flows it is expected to generate.

## 2. Review: stock returns and dividends

Unlike a zero-coupon bond, a stock may generate two sources of return: dividends received during the holding period and a change in its market price.

For a one-year investment:

$$\text{HPR} = \frac{P_1 + D_1 - P_0}{P_0}$$

where $P_0$ is the purchase price, $P_1$ the selling price and $D_1$ the dividend.

The class revisited a four-year investment and calculated its annual returns in Excel.

## Three different measures of return

The geometric average is especially important because investment returns compound:

$$\boxed{r_g = \left[\prod_{t=1}^T (1+r_t)\right]^{1/T} - 1}$$

Remember: we compound $(1+r)\$, not the individual returns themselves.

## 3. Dividend reinvestment

The class worked through a more challenging variation: what happens if an investor uses each dividend to purchase additional shares instead of taking it as cash?

The process is:

1. Start with one share.
    
2. Receive a dividend.
    
3. Purchase additional shares, including fractional shares where the exercise permits.
    
4. Receive future dividends on the larger number of shares.
    
5. Repeat until the final selling date.
    

For example, if one share pays a \$3 dividend and its price is \$72, reinvesting the dividend purchases:

$$\frac{3}{72} = 0.04167$$

additional shares.

The investor now owns:

1.04167 shares

This is the equity equivalent of reinvesting a bond's coupons. When calculating the final return, the reinvested dividends are already reflected in the increased number of shares; they must not be counted a second time.

## 4. Stocks versus bonds

The main new topic began with a comparison of the two financial instruments.

| Bonds | Stocks |
| --- | --- |
| Represent debt | Represent ownership |
| Promise contractual payments | Dividends are not guaranteed |
| Normally have a maturity date | Normally have no maturity |
| Have a specified face value | Have no contractual face value |
| Creditors generally rank before shareholders | Shareholders are residual claimants |

The main difficulty in valuing stocks is uncertainty: future dividends, earnings, growth and the required return must be estimated.

Nevertheless, the valuation method is familiar.

$$\boxed{P_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1+k)^t}}$$

Here, $D_t$ represents the expected future dividend and $k$ the required return on equity.

## 5. Different ways to value a company

The class introduced several approaches to valuation.

### Accounting or book value

Based on the value of assets and liabilities reported on the balance sheet.

### Market and comparable valuation

Uses observed market prices or comparisons with similar publicly traded companies.

### Intrinsic valuation

Calculates the present value of expected future cash flows. This is the principal approach developed in this session.

### Option-based valuation

Considers the value of future opportunities and managerial flexibility, such as the option to undertake an expansion.

The distinction from Session 1 remains fundamental:

Price is not necessarily the same as value.

### Market capitalization

For a publicly traded company:

$$\boxed{\text{Market Cap} = \text{Share Price} \times \text{Shares Outstanding}}$$

Market capitalization measures the market value of the company's equity, not necessarily the total value of the business.

## 6. Book value, market value and liquidation value

Book value and market value can differ substantially, especially when a company has valuable intangible assets, intellectual property or future growth opportunities that are not fully reflected on its balance sheet.

The class used technology companies and more mature businesses to illustrate these differences.

Another distinction is between a business operating normally and a business being liquidated.

The memorable analogy from class was the animal that can either generate continuing income or be sold for its meat. These are two alternative uses of the same asset.

Avoid double counting

If a building is necessary to generate a company's projected cash flows, its value generally cannot simply be added again to the present value of those same cash flows.

The session also briefly introduced replacement value and Tobin's Q. Tobin's Q compares the market value of a firm's assets with their replacement cost; market-to-book ratios are sometimes used as an approximation. A high ratio can reflect growth expectations or valuable intangible assets, not necessarily overvaluation.

## 7. The Dividend Discount Model

The first equity valuation exercise applied present value to a stock expected to pay a dividend and have a future selling price.

The relationship is:

$$\boxed{P_0 = \frac{D_1 + P_1}{1+k}}$$

The corresponding expected return is:

$$\boxed{R = \frac{D_1 + P_1}{P_0} - 1}$$

### Example from class

ONE-YEAR STOCK INVESTMENT

Current price

# \$48

Expected selling price

# \$52

Expected dividend

# \$4

Required return

# 8%

The expected Holding Period Return at the quoted price is:

$$R = \frac{52 + 4}{48} - 1 = 16.67\%$$

The value implied by the assumed 8% required return is:

$$P_0 = \frac{56}{1.08} \approx \$51.85$$

Expected return: 16.67%

The exercise illustrates a difference between the quoted price and the value implied by the assumed forecasts and required return. Such a difference may suggest mispricing under those assumptions, but it is not necessarily a risk-free arbitrage opportunity: the future selling price and dividend are uncertain.

## 8. Constant-dividend valuation

If a stock pays the same dividend forever, the valuation is exactly the perpetuity formula from Session 4:

$$\boxed{P_0 = \frac{D}{k}}$$

The class used a preferred-stock example with a perpetual annual dividend of \$1.20 and a required return of 6%.

$$P_0 = \frac{1.20}{0.06} = \$20$$

If the stock instead trades at \$15, its dividend yield is:

$$\frac{1.20}{15} = 8\%$$

This demonstrates that the same formula can be used either to estimate value from a required return or to infer a yield from the observed price.

## 9. Growing dividends: the Gordon Growth Model

What if dividends grow at a constant rate forever?

The formula becomes:

$$\boxed{P_0 = \frac{D_1}{k-g}}$$

where $D_1$ is next year's dividend, $k$ is the required return and $g$ is the perpetual dividend growth rate.

For this model to give a finite positive value, the required return must exceed the growth rate:

$$k > g$$

Using the closing example's implied next-year dividend of \$2:

> [!example] Gordon Growth Model — Sensitivity Analysis
> **Base parameters:** $D_1 = \$2.00$, Required return $k = 8.0\%$, Growth rate $g = 2.0\%$
> 
> $$\boxed{P_0 = \frac{D_1}{k - g} = \frac{\$2.00}{0.08 - 0.02} = \$33.33}$$
> 
> ### Sensitivity Matrix ($P_0$ for varying $k$ and $g$)
> | Required Return ($k$) \ Growth ($g$) | $g = 1.0\%$ | $g = 2.0\%$ (Base) | $g = 3.0\%$ | $g = 4.0\%$ |
> | :--- | :---: | :---: | :---: | :---: |
> | **$k = 7.0\%$** | \$33.33 | \$40.00 | \$50.00 | \$66.67 |
> | **$k = 8.0\%$ (Base)** | \$28.57 | **\$33.33** | \$40.00 | \$50.00 |
> | **$k = 9.0\%$** | \$25.00 | \$28.57 | \$33.33 | \$40.00 |
> | **$k = 10.0\%$** | \$22.22 | \$25.00 | \$28.57 | \$33.33 |

The sensitivity analysis illustrates the relationships discussed at the end of class: lower expected growth reduces fundamental value, while a higher required return also reduces value.

These relationships make the Gordon model useful, but also sensitive to its assumptions, particularly when $k$ and $g$ are close.

## 10. Connection with the previous sessions

The transition from bonds to stocks is simpler when we recognize the structure shared by both.

| Fixed income | Equity |
| --- | --- |
| Coupons | Dividends |
| Repayment of principal | Potential future selling price |
| Contractual maturity | Generally no maturity |
| Bond YTM | Required return on equity |
| Present value of promised cash flows | Present value of expected cash flows |

The mathematics remains based on discounting, but equity valuation requires greater assumptions about uncertain future cash flows.

## 11. What you should retain

## Session 8 in Five Ideas

1. Stock returns come from dividends and capital gains.
    
2. Arithmetic averages, geometric averages and IRR answer different questions about investment performance.
    
3. Market price, accounting value and intrinsic value are not the same.
    
4. Equity valuation uses the same present-value principle as bond pricing, but with uncertain cash flows.
    
5. Constant dividends are valued as a perpetuity; constantly growing dividends are valued using the Gordon Growth Model.
    

## 12. Before the next session

## Study checklist

- [ ] Reproduce the four-year return exercise in Excel.
- [ ] Calculate arithmetic and geometric average returns.
- [ ] Understand dividend reinvestment without double counting.
- [ ] Explain book value versus market value.
- [ ] Practice the one-year Dividend Discount Model.
- [ ] Practice constant-dividend and Gordon Growth valuations.
- [ ] Complete Problem Set 2 before October 7.

Course logistics: Problem Set 1 solutions were made available, and Problem Set 2 is due on October 7, 2026. The class also discussed the September 28 visit to the stock exchange and an optional Banco de España visit on September 24.

Students were reminded that Excel is highly recommended for practice, although it is not required for the written examinations.

Source: Session 8 class transcript, September 23, 2026.

# Transcription
23 de septiembre de 2026, 5:04p.m.
1 h 18 min 4 s
Hey, hello me.  
Start with today's class.  
Before.  
Play it on the web.  
I can call her.  
Yeah.  
Word.  
Hey.  
Okay, I'm going to share with you problem set two, sorry, problem set one, solution.  
And were you?  
Finance.  
Call 2000.  
Then I'm gonna answer also. I'm gonna do it from here that is faster.  
Here, I'm gonna download.  
Four point.  
Then I'm gonna promise at one also here, great.  
Pronouns at one, and...  
And I'm gonna share with you also in the Wasa group from Set Two.  
That is to be delivered.  
Problem is, too.  
Is to be delivered October the 7th.  
And also, I'm gonna share today's slides.  
From set to.  
And, since you on it.  
Let me, let me, let me, and when you fall, and here we are.  
OK, then are there in?  
Then, more things.  
More things before it started.  
This is Monday.  
This Monday, we'll see each other at three.  
I work there past week. I'll go with that. Amanda, if you came a little bit late because of the exam or whatever, you don't need to work. I will have the WhatsApp, I can go and we can see.  
And close.  
Cool.  
Then, also.  
Hey.  
Thursday.  
Thursday, yay.  
I cannot go there because I have class in another university. Thursday, BA at 4. There is another visit to Banco de Spain.  
All of you know what is Banco Espana? There is another visit in Banco de Spana that this visit will be whole like. There were there are two other students that would came with us from business in Spain.  
Christina, that is, is the one that will carry this.  
I strongly recommend you to go for this visit. It's free. She has, I think you will receive one e-mail. And also if you want to attend, send me a WhatsApp and I will put you in contact. And probably you will receive an e-mail from Manisa.  
Thursday, Thursday, Thursday, Thursday. Yeah. Use require. No. I mean, it's not required. It's not required. I'm not.  
We are.  
We are here, somewhere here. Yes, you know, if you take this street, you will reach, yes.  
If you continue to this state, you here is the Venice. All of you know Venice?  
This is 3 piece.  
And this is voice.  
Yeah.  
And me, sir.  
The link of Balsa.  
I am saying you.  
The address of the place.  
Where?  
We will meet at Montagut. I will be there at three. You are at three great. We will start at quarter past three.  
But if five of us are there, or if all of us are at the street, it's there.  
I'm losing you, Amanda. You are going. I don't worry, let's see, because, yes, I'm sorry for I don't want to create a.  
Micromat, say, and I want to open this one in a defense. OK, now let me come here again, so quick, so quick, so quick, what is?  
Ohh.  
Sorry, I'm trying.  
Okay, you know where I'm at?  
And where you?  
Is here. This is Miguel. Yes, this is back in your St.  
I'm gonna, yes, go to.  
Bango de Espana, you see Bango de Espana.  
I'm going to Sáez. Yeah, this is the town hall town hall of the city.  
He is here where Madrid went.  
When Real Madrid win something.  
Everyone goes there in order to celebrate, yes.  
And from here, you take this street, this car, you can go walk, you can go walking through.  
You take this straight.  
OK, this is great, and here we are. This is another fountain. This fountain is called Nectuno. That is the one. Benito Madrid is like medicine and New York.  
And.  
We will see each other.  
It's closer. I mean, here it is.  
This is a Padatya Rahul.  
At Tiburcio, and we will see each other at visitors.  
What?  
OK, next thing, next thing, let me open an Excel file.  
You don't need to know Excel.  
Or the midterm, or even the final.  
But, but I strongly recommend you to use it and to know how to use it. If you have 5.  
You have never used Excel.  
After solving problems at one, you tell me that Excel is hard.  
Because you are learning.  
I'm not disappointed; I'm happy.  
Of you to be learning first times, do you bike?  
First time is hard, after you can remember how hard that it was. Do you drive? Say, do you die?  
You type without fingers.  
Like that. Oh, so embarrassing. Thanks for your, let me, let me.  
This is with AI.  
Start today. Start now with it. I am not planning. You can. You can start now if you want. 20 minutes each day. 20 minutes each day. It's great. And one year ago I am 47.  
Two years ago, I was 45.  
Two years ago, I used to type like that, and that would be that I was old.  
So?  
It is right now.  
What are you, William?  
Uh.  
Today, oh, uh, 3444, 3444.  
First one here. This one, yes.  
This.  
Thank you.  
Makes sense.  
Mm.  
First time you start typing, it's a little bit hard to do it. But once you do it, it's one of the best things you can do because it saves time. Not only that, also we spend, oh, I'm going to start with the classic promise. Open.  
This is open code, open source.  
This is another of the things that have changed my life. Do you have open Englishman?  
The first thought.  
Whisper flow, you need to pay open, whisper is like whisper flow at three.  
I don't know.  
I use grill.  
with you.  
Okay.  
OK, so this is yes, talking with the computer, not even if you have AI, it changes everything.  
Because you, you.  
Hey, okay.  
I want to start with this. No, I'm on. Oh, and the OK. What?  
I see any difficult, these are the solutions. I don't want to find, I want, I don't want solutions. I want...  
How about this?  
Okay, first one, no arbitrage. Marín and short selling, we will talk about it. Time value of the money, I think this exercise is relatively simple. And maybe some perpetuities, I think this exercise also is relatively simple. Yes? I think the only exercise  
Can have time, if you could, this is this one.  
I really need this. I'm going to go to it. You done that.  
I mean...  
OK, paste this.  
Yeah.  
Oh.  
Yeah.  
Okay.  
First, but first I'm gonna...  
The numbers.  
100, 7268, 8896.  
And 3, three, 4, 5. Yeah, you know, I can think of this.  
Sorry about like.  
Oh, ****. I'll make this work.  
No, sorry, sorry.  
A great, I mean.  
As far as you smile, I will, I am happy.  
And if you the man, William, I will ask the future. How are you doing? I'll be like, nothing changed. Nothing changed.  
You can get this star, right?  
Move.  
Okay, first question, compute the amount holding period for each of the four years, yes?  
Complete the annual holding period return. At the end, annual holding period return is future value over present value minus one, no? And future value is not the asset price of the stock, but also is the dividend include, yeah? It includes dividend. So let me, yeah, say.  
This plus this number.  
Over 100 minus one.  
Minus twenty-five percent.  
Control Anastasia and copy and paste.  
Once I do it, it seems simple, no? It's a matter of practice. By the end of the semester, I'll have it. If I can do it, William, you can do it.  
Question B: What is the arithmetic average of those readers?  
First idea. I don't know how to use formulas next. So what I will do, I will sum. I will sum these numbers, yes?  
I will send these numbers and I will divide it by 4. This is the arithmetic address. Also,  
Also, I can calculate this with the...  
No.  
Orange.  
If I calculate this with the average, yeah.  
I will get the same number. Make sense?  
Which one? Yeah, 11.  
Yes, please.  
Before.  
And it will be 1100 percent.  
In Excel.  
Volumet.  
For example, 0.5, yes?  
You don't need to know this, and I don't want to make your life more complicated. I want your life to be more simple, but look, open file, yes.  
If I change in 0.5 format.  
And now you get...  
What is that?  
What do you think?  
Are they?  
And you see how diamond bed, sorry, long bed, for example, yes, or sorry.  
If you see the date.  
And let me put this in that, yes?  
Done.  
what I want you to say. This is the same format. Yes, I'm going to write.  
Look, open file. I'm going to write 0, zero, and zero. Yes?  
There is no month. Let me write one, one, and one, yes.  
Here, I've got same number, but in a different form.  
Let me.  
Put 360 fat.  
Three 100 and sixty-five.  
365.  
days after. You see what I mean? Number one is the 1st of January of 900, which days today? I'm going to write here.  
Play music there.  
of September 2026, yes?  
If I put this into no into number.  
This is not the date.  
I have made something correct, short.  
Oh yes, I was thinking as a European citizen.  
But.  
Oh, 929.  
2026, yes?  
This is year, this is day 40, forty-six 1200 and ninety-four. Look, I'm saying you have dates and you have dates what you are doing is.  
You have one day and another day, and you calculate the difference, you are calculating the difference in this.  
If you subtract one date from another one, you are subtracting dates. Make sense? Now, let me come here.  
0.512 PM. 0.256 PM.  
Oh.1.  
Is 1/10 of a day in ours.  
So, today...  
Today is 46. I don't know. I'm going to, I don't remember which day is today, but I'm going to say 46,000, yes. 46,000 is, 46,000.  
Point 5 is this day admin, admin for admin.  
Yep. Yep.  
Are you following me?  
You need to know anything from this. But what I want you to see, that in Excel we have numbers, we have also text, then there is format, and you can do things with formats.  
It's very simple, and there are tons of programs, and then you should practice, practice and practice. OK, I'm just giving tips.  
Okay, what is this? The arithmetic arithmetic. Next question.  
This is question B, perfect. See, what is the geometric cabinets? Okay.  
Yeah.  
What is the problem with geometric average? I'm gonna calculate the your mean of the numbers, yep.  
Ohh, missing.  
I want second idea with Excel.  
Careful with it, sir, because garbage garments in Garvía.  
When you got the bullet, when doing geometric gatherings, we don't do geometric gatherings for one way.  
Do you remember one plus we saw it from last day? Yes, one plus the rain and looking for price to the Toro.  
It should be equal to 1 plus the first, one plus the second.  
One plus the third, one plus the 4th. Make sense?  
We are not doing the geometric average of the rates. We are doing the geometric average of 1 plus the rate.  
Are you following me?  
Why am I the regular?  
So, in order to use that formula...  
In order to use the formula, first I will need to calculate one plus.  
Sorry.  
One plus the rate.  
One plus the rate, yes.  
Huh?  
I'm going to calculate first the long way and then with a home. Yes, the long ways.  
One plus the rate. Thanks.  
One plus the rate.  
times 1 plus the rate times 1 plus the rate, all of this.  
Today, rise to the one-fourth.  
Minus what? Holy.  
And this is it again.  
3.55, yes.  
What I'm going to calculate here, I'm going to calculate the geometric.  
Your.  
Me.  
Both these ones, if I calculate the Eugenia of these ones, how much I will get.  
Triple budget.  
So close.  
Awesome.  
I should, I should respect one.  
Very subscriber.  
One, one plus, one plus. Make sense?  
OK, what is the internal rate of return of buying 100? OK, let me calculate what is the internal rate of return?  
This is, I see.  
This is the, what is the internal rate of return? I invest 100, yes, and I will get three.  
Three, 4, and five. Yes, what is the internal rate of return?  
Simple, simple. Oh, sure. I forgot.  
At the end, I will receive it.  
96 plus 5. All of you understand what I'm doing. This is a stock that will pay a dividend. The dividend will be in my pocket and at the end.  
I sell this.  
So in the meanwhile, I'm receiving dividends and at the end I will receive.  
Have you ever received?  
Let's go, price, class.  
I wanted that, yes.  
Play the internal rate of return is 2.767.  
Oh.  
Stop.  
Sorry.  
Are you?  
Show, play.  
Song.  
What is?  
Rohit.  
William, OK.  
ABCD and E. Now, this is a tricky one. What annual return would you have earned if you had to reinvest its dividend in the stock? Yes?  
What I'm gonna do, I'm gonna buy new stocks, OK?  
I'm gonna buy you stocks.  
Let me rewrite everything. At the beginning, how much stock some?  
At the beginning, how much stokes I'm gonna have?  
This is the number of I have one.  
If I have one store.  
At the beginning.  
I will receive 100.  
The best of the scope would be 100 times the number of more than the number of 100 * 1, yeah?  
I'm not gonna do this. Ohh, yes.  
No, I have the prices I have. Let me invest, I have.  
After one year.  
The price of the stock, importantly, I am doing this. You can understand what I'm doing, but you should understand how to do it by yourself. Make sense?  
As of the stock is gonna be seventy-two.  
And the dividend is going to be three.  
Yeah.  
What are you gonna do with this here?  
I'm gonna buy new stuffs.  
All mats.  
Stoves, I'm gonna pack, I'm gonna have one.  
One is the number of stocks I used to have.  
Plus.  
Three.  
Over 32.  
Are you following me?  
With $3 I'm going to buy a percentage. I cannot buy with $3 one full stock, so I will buy a 4.1 percent.  
What do you?  
Price is seventy-eight, yeah.  
How much money will I have? 1.041 times 78, yes?  
Now.  
Did you get?  
Is 3, yes?  
But I don't have just one stop.  
I'm going to have 1.04. So this is the money that I will receive in order to buy new stores. Are you following me?  
3.125 at 4.1% at normal.  
What am I going to do with this?  
What I'm going to do with this $3.1? Again, I'm going to buy new stores.  
and the number of stops will go.  
What I want to do now, I'm going to copy this.  
Andra.  
So, this is a total that I will sit up here.  
And this is the total number of storms that I will have at the end, including Lazcano. Yes?  
Sure, yes.  
Yep.  
I start with one stop, I start with 100, and I finish with...  
1.1962 times 96, yes?  
All of you see that in these numbers include the dividend, because the dividend with the dividend, I have all the results. So let me calculate the HPR. In order to calculate the HPR, I have a future value, then annualize the HPR.  
How that is, and what is the HPR is?  
Future value.  
Alba.  
Hundred, yes.  
Rice too.  
One over 4.  
Minus one, yeah.  
I made something incorrect.  
I, I think that, I, I think, sorry, I did just the other. Let me start again.  
Let me start that, yes?  
Future value over.  
Present value, I need the office, yes.  
Price to 1 / 4.  
I am well.  
Sorry, sorry. No, no, sorry, I mean.  
Thanks, I missed you.  
Because I am using this number.  
I should be juicy.  
This one.  
I mean, I have to invest 100.  
and I'm getting 140.  
Makes sense. At the end, what I want you to see, several things. I want you to see that.  
Sixty-four percent cannot be. I was mistaken.  
And because I know that I am mistaken, I try to do what I have done incorrect. Yes? Now, with the proper number, I get that 4%. 4% makes sense.  
Yes, because it's around 5.92, 3.52, 2.67. Make sense?  
366.  
And let me look here.  
What can you tell me regarding this number?  
That is the same.  
The number that I have voted is the annualized HPR.  
It took me a long way.  
It took me a long way. I have calculated the number of stocks. I have invested dividends into the stock. You understand what I'm saying?  
What I have done is exactly the same that I did when having a ball with coupons and I used to play best.  
The coupon of the deal.  
Make sense?  
What is?  
Mummy.  
No, 114 is not the Redondo.  
So, shall I pay 100?  
These dividends, the dividend of the stock is being reinvested, the dividend is being reinvested by the stock. And at the end, how much money I will have when I sell everything at the end?  
Hundred, 104.  
And my HPR is 114 / 100, rise to 1/4 -1.  
Injure value, but it's a value. I was like the fee at the end, yeah.  
Yeah, but what I have told you, please. No, it's simple. It's simple. You do it.  
Present value, future value, and you calculate the HPR by doing future value over present value.  
We are doing.  
It's like Excel. Excel at the end is simple. At the beginning, it can be mistaken because there are new words, new language, new numbers. Get used to that. I have certainly do the solutions. I have office hours. I can do a class whatever you need. But please try to do things by yourself. Yeah?  
I guess with the exercises, because when you got the solutions.  
If you just read the solutions, it's easy to understand the exercise by the solutions, but try to do the exercises before we need solutions.  
Because it's the moment where now you are suffering. Come on, you are suffering. It's because you are learning. If you were not suffering, I wouldn't be worried because when will you suffer? In the winter.  
And I don't want you to suffer, I want you to suffer before suffering.  
Yo, I do understand the point, no?  
Okay.  
This exercise is important. Why? Because today we are gonna start with one new topic. The new topic will be...  
Equity valuation.  
A quick evaluation. So what do you think? No. I didn't answer anything. Sorry.  
I want.  
Great. Ron, sorry, Ron, the slides, and from the other side.  
Run essential.  
So, what are we keeping? Did you upload it to the space? No, you have the assignment in the space. So, take pictures of it. Yeah, it opens it up for you.  
We all. Sorry. You don't want it? Yeah. I mean, you are the best people. How do you make church? No. Or you? I mean, yes.  
I mean, I want you to review if things are correct, incorrect. I'm not going to give it back. I'm just going to take that you have done. I'm not going to correct that. Yes, I want you to speak.  
The breakfast and.  
And, as far as you have done it straight, make a few places. Perfect. As far as all of you have done it, I mean.  
Today, I have not taken attendance. Last Monday, I didn't take attendance, but I know how to go till six.  
You see that point? I even travel.  
I don't have any problem in giving. I don't have any problem. I don't have any problem in mandate to each one.  
But I want you to understand the exercises to show you to do it just yet.  
It's not easy to get an A. Why? Because you should understand these things. Otherwise you understand them.  
We'll take the pictures of the face. They use brightly snacks on the screenshot. Yes, please do it in order to have the right space school.  
But, but all of you have learned.  
What I want to do is...  
I have shared with you an in great place, also.  
United States also is the problem set one solution. I want to read the solutions. I want to try to do.  
Please do the exercises again, yes, and check with the solutions.  
Yep.  
OK, what do I want to talk about today?  
What are we doing now today? What? I have to start with one.  
We have been talking about boats in today, also.  
How did you calculate the price of the home?  
Well, you got to make the price, my mum.  
Hi, Kat. Where is the value you took as well? You ready?  
Where are you gonna help with the price of the stuff?  
Well, we're going to go to the address.  
A stop.  
I can play the present value of each of it.  
You will have.  
Future dividends.  
At the end.  
We can sell the store. We will calculate present value of all future events. Make sense?  
Today's class masks are much more than the masks we have used for going through Google. Why? Because we don't have, we are not going to have today and meetings.  
Lord, we've had patrons.  
What I want you to see, you are up to date.  
If you are up to date, today's class is really, really, really simple.  
If, if you have like a knowledge, snowball.  
The *********** will continue growing because you will not know what I'm talking about.  
What are we going to do? Carabias Calvo. And now show me.  
Oh, will be of the last class, one year's deal, and not two years yield is 5%.  
What does the curve imply about the one year rate next year? If one year, zero yields are 4% and a two year yields 5%, what does the curve imply about the one year? Oh, I'm going to go to fill my bottle with water.  
Read them.  
And then...  
What was it?  
Wait up.  
Play.  
Hi, Mark.  
Ohh.  
I am recording.  
But this was not the correct place.  
I don't know.  
Definitely, we're going over. I don't know.  
I was sitting here, shouting.  
So probably the request has been recorded.  
I didn't plug it to Corable. OK.  
Next question.  
A one-year seal gains, 4%, and a two-year gains.  
Five percent. What does the curve imply about the one-year rate next year?  
And what?  
No one, please.  
You need 6%?  
Yeah, I need to work slowly.  
This will be.  
Then, under the expectations hypothesis, what is an inverted curve saying?  
That Fed is about to drop immigrants.  
Winter is coming.  
Bank funds, 10 year bonds with overnight deposits.  
And yields rise 300 basis points. What happened to its equity?  
A bank funds 10 year bonds with overnight deposits.  
If the rate increases, what happened with Pizarroso loans?  
So what will happen with this bank? Let me make up a name for that bank. Let me just create, let me call it Silicon Valley Bank.  
And why is interest rate risk not a property of the bond?  
I don't like that last question, yes, but...  
But why is the freight risk not the property of the world?  
It is. I thought interest rate risk is important. Is it already in the price? It's important, but why is not that proper?  
Because he's upset.  
Game from website.  
What's the relevance of the overnight deposits? I don't understand why ten-year bonds, they're very sensitive to price or to interest rate conditions. Overnight deposits is getting worse this Wednesday. Yes, getting worse than one week ago. Rice.  
interest rates. When rising interest rates, he's talking about overnight deposits. What are overnight deposits? The deposits that banks can place into Federal Reserve.  
So, this question is saying, on one hand, overnight deposits is today's Fed interest rate. The term is for today. And on the other hand, they have 10-year bonds that are sensitive to interest rate risk, to interest rate change.  
Yeah.  
If you read problem set 2, I think that the second exercise has to do with the inter-referring groups.  
A program section. Yep. Makes sense.  
Okay, let me go quick. What are we going to talk about today?  
We are going to talk about service. What is a service?  
Where is the store?  
Yeah, and what is it? What are differences between stocks and modes regarding accounting?  
Bond is like, yeah, no, actually. Yeah, I mean, both could be assets if you hold, you hold those, if you hold bones, those are assets, but for the age where you issue bones and bones are.  
But let me make difference. If you own a boat, what are you?  
One moment.  
Where are they?  
You are a director of the compartment.  
If you all messed up, what are you?  
What is your natural? Is you all messed up?  
Oh, no, yeah, so, no, no, that, sir, yeah, circle.  
But you are ill.  
Stop.  
Yep, if you own the stuffs, you own the company.  
If you own about, you have a right, a right to receive your money when it's back.  
Hey.  
Let's go for six sessions. What is the difference? Yeah, loans uncertainty here.  
How we have been calculating price of votes by calculating present value of future cash flows? How future cash flows are when talking about votes?  
Fix something secure. If we wait, we will receive coupons and then payback. We will receive a fixed amount of money.  
Regarding dividends.  
Do you know how much season my company is going to pay?  
We don't know, and it will depend on...  
We will talk about it next day. The company will grow, probably. First on earnings. First, it will depend on earnings. And what if the company has earnings that wants to grow? It can keep.  
Early with themselves, not drink and bring themselves and put out, yes.  
What is the difference about to serve? The cash flows are not promised, are not promised. There is no maturity and no face value.  
Careful, there is no maturity and no place value, but you can sell the stocks.  
The discount rate is not quote anywhere.  
And we cannot work it out until session 19, when we will go session 19, we will talk about traffic.  
But we will use rates in order to get this home rates, and we will not get how to get this rate in session. Thank you. Make sense?  
About an answer.  
Okay, four ways. How would you, how can you get, how would you value a company?  
Or will you better have a pen?  
Oh, you call your mobile.  
All of you know what does Malay means? The price of their shares.  
But the price of the, in case the company is public, the company is public, the price of the share, you can get the quote. But careful because getting the price is not getting the value.  
You can have future cash flow, and by discounting future cash flow.  
You can get a notion, an idea of body. Yeah, this year this is called in future.  
Then also, how can you get the value of her company?  
You can compare with other comments, and if you tell me how to get the value of that, or so you can.  
is the value by the investment, for example.  
All next task.  
You can go to the...  
Value of the assets. You can go to the balancing and see, oh, the company work, what?  
It's written in their balances regarding how much they pay for the service or from whatever.  
Makes sense, and also you can think about the invitation, but let me see what is written there, because I don't know what is written there.  
Accounting alone, the accounting next to market prices.  
Intrinsic valuation.  
Increasing valuation is what we are going to do in this class. Today, next day, increasing valuation is calculating the value by discounting future cash growth.  
And then auction-based valuation is working with options, and for example, imagine that you own a company and you have the option to invest in China, or you have the option of investing in India. Each one of the options works.  
You can exercise here soon or not?  
You can, this is important, but not to us, yeah.  
Today is the 1st and the third, accounting alone and intrinsic valuation.  
They disagree, and the disagreement is the interesting part.  
How much does and what you worth if you just worth and what you buy the cost of the church?  
You will get that law why there is a difference between.  
Balancing and...  
not only market value or increase the value, because people with their asset can do incredible things. Because of that, people worth. Yeah.  
OK, book value versus market value.  
What is book value?  
What is written in books, if you see?  
Most of European banks.  
Have you seen most of European banks?  
Book value.  
is true. Market value is around 30% of Bupa.  
Did you see with your penance?  
There is a low, low rate between book value and...  
Montagut, normally.  
Normally, a company should have...  
A market value higher than group value, is it?  
Is the company worthy?  
How can we evaluate a company by just looking at its balancing?  
This is booked by.  
Use the balance sheet and depending what is written on the balance sheet, you can get the work of the company.  
Market value of equity and surprise times cost of client.  
Yeah, you have one component.  
It's stops Lister.  
In NASA, for example, yes.  
What is market cut?  
Yeah, you have to imagine you have 100 stocks, you will have more. If you multiply the number of stocks times the price of each stock, you will get the market.  
is a way in order to estimate wealth.  
What is the market cap of the media?  
around 43.  
I will bet that I will say that higher.  
I will be.  
Okay, how are things?  
Liquidation value.  
If anyone gets offended for this example, please forgive me.  
I love animals.  
But for me, the example of the cow.  
Is great.  
And I'm going to talk about feeding a cow.  
Because the cow needs, I, I go.  
You can kill a gold. I think you can kill a gold. Sorry for cleaning out.  
You have a goat, a meaty goat, yes?  
Or can you get how much does the meat goat?  
What?  
Yes.  
What can you do with the goat?  
You got it?  
Get the worth of the world by the meat.  
It will produce, and you see that this is you took as close.  
Then, also, you can work.  
The goat, by the weight of his or her or its.  
Meet.  
Yeah.  
This is...  
Careful, this is...  
Mobile.  
How much meat you get by the price of the meat you will get, yes?  
Can you say that the value of the gold is?  
Meet last meat.  
Now, you cannot add to values. There are a lot of times I have been working, I work as an analyst also. I'm not just a teacher, I work as an analyst. You are being contracted by people that tell you, Luis, I want to get the work of my business.  
And I look, and you get, you just come to check as close and you say, oh, this business work, whatever.  
And then they told me, oh, but this BB and the BB is inside the company.  
I want to add the value of the building today.  
To the company's value, yes, to what you have guessed in the cash flows, and then I told them.  
You can in the in the ego.  
Or sell the meat, but you cannot sell the meat and kill the cow.  
You understand what I'm saying?  
You cannot sell housing and, at the same time, rent the house.  
If your business is being performed inside the building.  
And cash flow depends on the building, you cannot get the value by cash flows and then at the building.  
You understand what I mean?  
And then it is liquidation, but...  
Imagine that the goat dies as a way.  
Can you sell the meat?  
Drug, no.  
you know, the equation value in case you go into a bankruptcy.  
You will get max, max, more, less.  
than Google. Why? Because who will want to buy an animal that has been...  
As a as a way you to a disease.  
For example.  
Excellent.  
Okay.  
In Spain, I am a bankruptcy trustee. The yards in Spain, I've been working for years as a bankruptcy trustee. I gave up. I stopped working three years ago.  
Oh, my last perhaps it was two, three years ago. I think it's because I have your media and you cannot be at the same time managing.  
and have an appearing. Do you understand what I mean? Yeah. Whatever. Liquidation value, replacement value, replacement value is buying a new gold.  
And replacement values.  
If you compare, you will taste your value with replacement value, replacement value should always be higher.  
Tobin's Q. What is Tobin's Q? Tobin's Q is a GPA GP formal indicator is a ratio, a ratio between.  
Market buying over book to buy.  
Robbins Q.  
Tell us about Box. Box. Home market. Consider.  
the price market value over book to market. If there is a bubble, service Q will be high, whereas service Q are at the end an indicator of...  
Rice.  
Yep, one to look here.  
It is.com crisis 2008 crisis.  
Yep, it's an indicator of crisis.  
Now, intangible capital, high tech, all at the end, depending on what you are talking about.  
Value, I mean, healthcare, high tech.  
At Span over Google.  
Yep.  
On the other hand, manufacturer,  
At the end, manufacture things and you sell a manufacturer company who buy you a market value will be closer.  
Excellence.  
Okay.  
Hey, who come back?  
Here, you've got several stocks, apple.  
Craft and media assets, liabilities.  
and book it. Here you can have from these numbers, here you can have the book to market ratio. Market price is 278.  
Move to market up at 5.96, 35, 4.88. Market value of equity.  
Market value of equity, this is what I have told you before. Market value, the same for firms now and with markets, we actually pay for that.  
Calculate, I was looking for this one. Go to market ratio, yes.  
Book to market ratio.  
And media and Apple book to market ratio is really, really, really, really low.  
Why? Because...  
Because of the black.  
Because of.  
Why Nvidia and Apple book-to-market ratio?  
Book-to-market ratio depends on two things: books and a market in books.  
The higher the book, the higher the ratio will be.  
And the bigger the market value cover would go, the lower book-to-market ratio will be.  
I'm not saying, I don't want to say, and I'm not saying that is over by.  
I'm not saying that it's overvalued, but that the market value compared with book value is at an incredible distance. Make sense?  
Then.  
AT&T.  
are what are called value companies. What is a value company? A company that has already grown and is paid.  
Also, these kind of companies, instead of being called value, also are called gas couch.  
Gasco, have you heard Gasco?  
And Apple and Nvidia growth compacts. Personally, personally, I don't think Apple is yours.  
Personally, I don't think Apple is yours.  
And for me, for me, it's really, really hard to say that a company that has a market cap of 4 trillion is a growth company.  
I don't know how much can it grows. It will continue grow, yes?  
Oh, running out of time and I want to show you one medium. Intrinsic value or fundamental value? Intrinsic value is discounting.  
Hey, today's class.  
how we will calculate the price of a stock, how we will calculate the value of a stock by the stock in future. And let me show you the dividend discount model. Let me move here. Suppose that the current price of a stock is 48  
The expectation zone of next year is fifty-two and four. Yes, the stop required return is a person. I'm going to do this exercise quick.  
I don't like that exercise too much now because today's price is 48 and in one year expectations 52 the stock and for the dividend and the required return is 8%. Yes.  
Careful with this, because...  
How much will be future value?  
Fifty-six makes sense.  
Giving this specter window, giving this specter window.  
48 times 1 + 8% will be 51. So, given this expected return, the stock  
is expected to grow more than expected. Make sense?  
What is the HPR of this store?  
Sixteen percent, so the market is expecting an 8%.  
Understood.  
is going to pay us 16.767%. Of this group, how much come from the dividend? Four over 48. And how much came from here? 52 times 48 minus 1.  
You see what I'm doing?  
You see what I'm doing?  
This is stuff will worth fifty-two, and will pay a deal in the four.  
Half of the return will came from the increase of price, half of the return will came from the dividend.  
But if we compare this with what the market is expecting, the stock is paying more than what the market is expecting.  
So, in this case, market is not in equilibrium, and there is an inefficiency.  
There is an arbitrage opportunity. Make sense?  
Let me show you the numbers. This is what I have just said. Yeah. And let me show you the dividend discount model. So, so simple. So, so simple. Do this exercise. JP Morgan Chase perpetual preferred stock pays out one.  
Point 2 Vidal.  
Yep, J.P. Morgan will pay a 1.2 dividend, yes?  
Is the requirement only 6%?  
If require return is 6%.  
What will be the price of the company?  
EP Morgan will pay.  
1.2 degree, yes?  
Is the discounted rate is 6%?  
What will be the price of GP Montagut?  
No one.  
Separately.  
How will you calculate the price? Yeah, 1.2 over 6%, but I will be up to.  
Then, if the stock trades for 15.  
What is the expected return? If the stock trades for 15, what is the expected return?  
1.2 over.  
Kissing.  
I need a person.  
Makes sense.  
It's just a perfect.  
Which of these two numbers is the correct? We will see it in the future. Yep, I just want you to see that we will calculate the price of the stock, value of the stock by discounting future. Make sense? And also, we can have same, but with grow. Do you remember how we...  
Tell me the price of a perpetuity that will grow.  
In short, instead of being C over R.  
See, over that is the normal, the seed will grow at a constant rate.  
My music.  
So, a stock is expected to pay a dividend of June next year. Its long-term growth rate is 4% and its required return is 8%.  
Let me.  
One minute left. We will see the video next day. Sorry. Two video next year. Yes.  
Its long-term growth rate is G.  
Is for person, no?  
And the return is a person.  
She's right there.  
So, first question, what is the stock fundamental value? So simple. So over.  
K minus.  
I need to write K instead of.  
Fifty, 50 the price works. How will the value change if the growth slows to 3% if it grows less?  
If you grow less, value will grow, will decrease. Could you grow less unexpected, Olivia?  
You will work today, less than sick.  
Yep.  
How it will change if requires return increases to 9%?  
If required, return rate decreases, price will.  
Decree.  
Are you following me?  
So simple. What we have done, we have calculated present value of a perpetuity, and we have calculated present value of a perpetuity with growth.  
This is what is called the Gordon Model, and for today's we are.  
Any questions?  
I think it's relatively simple.  
If you have any questions, please ask. OK.  
It's OK.