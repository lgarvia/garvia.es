# Foundations of Finance (FoF) – Session 4  
**NYU | January 28, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 12min  

---

## 1. Objective of the Session

Session 4 completes the **Time Value of Money block** by focusing on:

1. **Measuring performance (returns)**
2. **Understanding different types of rates**
3. **Comparing investments across time**
4. **Linking HPR, APR, EAR and IRR**
5. **Understanding how interest rate changes affect realized returns**

This session is about **how we measure “how well we did”**.

---

## 2. Performance: The Core Question

Finance ultimately asks:

> You invest money today.  
> How well did you do?

Performance is always measured using **rates of return**.

Example:
- Invest 100
- Receive 110  
→ Performance = **10%**

---

## 3. One Course, Many Names for Rates

One difficulty of finance is terminology.  
We often use **different names for very similar ideas**.

In this course, you will encounter:

- **HPR** – Holding Period Return  
- **APR** – Annual Percentage Rate  
- **EAR / EFF** – Effective Annual Rate  
- **IRR** – Internal Rate of Return  

Key idea:
> If time = 1 year, **all rates coincide**.  
> Differences appear when time ≠ 1 year.

---

## 4. Two Big Blocks in Today’s Class

### Block A – Multiple Years
- Investments with **cash flows at different dates**
- Focus: **HPR and IRR**

### Block B – One Year, Many Subperiods
- Monthly, quarterly, daily rates
- Focus: **APR vs Effective Annual Rate**

---

## 5. Effective Annual Rate (EAR)

### 5.1 Why EAR Matters

If you earn **1% per month**, what is your real annual return?

Not 12%.

Because of compounding:

$$
EAR = (1 + 0.01)^{12} - 1 = 12.68\%
$$

Key message:
> **EAR is the only rate that allows fair annual comparison**

---

### 5.2 APR vs EAR

- **APR** = nominal annual rate (ignores compounding)
- **EAR** = true annual cost or return (includes compounding)

Formula:
$$
EAR = \left(1 + \frac{APR}{m}\right)^m - 1
$$

APR exists mainly for **legal disclosure**.  
EAR is what matters economically.

---

### 5.3 Why This Matters (Financial Literacy)

Rates can be used to **mislead**:
- “1% daily” sounds small
- APR looks manageable
- EAR explodes due to compounding

This is why regulation requires APR disclosure.

---

## 6. Continuous Compounding (Conceptual)

When compounding becomes very frequent:

$$
PV = FV \cdot e^{-rT}
$$

Why this appears:
- High-frequency trading
- Derivatives pricing
- Continuous-time models

You don’t need to master it now, but:
> This is where modern finance comes from.

---

## 7. Holding Period Return (HPR)

### 7.1 Basic Definition

$$
HPR = \frac{FV}{PV} - 1
$$

This is the **total return over the holding period**, regardless of time length.

---

### 7.2 Annualized HPR

To compare investments of different lengths:

$$
Annualized\ HPR = (1 + HPR)^{1/T} - 1
$$

Where:
- \(T\) = number of years

---

## 8. Comparing Investments with Different Horizons

### Example 1 – Coca-Cola (6 months)

- Buy at 42.39  
- Sell at 44.30 after 6 months  

HPR:
$$
HPR = \frac{44.30}{42.39} - 1 = 4.51\%
$$

Annualized:
$$
(1.0451)^2 - 1 = 9.21\%
$$

---

### Example 2 – Coca-Cola (2 years + dividend)

- Buy at 39.63  
- Receive dividend: 1.12  
- Sell at 42.37  

Total future value:
$$
42.37 + 1.12 = 43.49
$$

HPR (2 years):
$$
\frac{43.49}{39.63} - 1 = 9.74\%
$$

Annualized:
$$
(1.0974)^{1/2} - 1 = 4.7\%
$$

### Key Lesson:
> **Always compare annualized returns**, not raw HPRs.

---

## 9. Bonds and HPR

### 9.1 Zero-Coupon Bonds

For zero-coupon bonds:
- **Yield = HPR if held to maturity**

Formula:
$$
HPR = \left(\frac{FV}{Price}\right)^{1/T} - 1
$$

---

### 9.2 Selling Before Maturity

If interest rates change:
- Bond prices change
- Realized HPR differs from expected yield

Cases:
- Rates ↑ → Prices ↓ → Lower realized HPR
- Rates ↓ → Prices ↑ → Higher realized HPR
- Rates unchanged → Realized HPR = YTM

---

## 10. Interest Rates and Bond Prices (Reinforced)

This relationship is **absolute**:

- Rates ↑ → Bond prices ↓  
- Rates ↓ → Bond prices ↑  

This explains:
- Why bondholders suffer when rates rise
- Why bond prices jump when rates fall

---

## 11. Internal Rate of Return (IRR)

### 11.1 What Is IRR?

IRR is the rate that makes:

$$
PV = \text{Present Value of all future cash flows}
$$

In words:
> IRR is the discount rate that makes NPV = 0

---

### 11.2 IRR and Reinvestment Assumption

IRR **assumes interim cash flows are reinvested at the IRR itself**.

- Reinvest at higher rate → Higher realized HPR
- Reinvest at lower rate → Lower realized HPR
- Reinvest at IRR → Realized HPR = IRR

This is critical for **Problem Set 1**.

---

## 12. IRR vs HPR

- **HPR**: what you actually earned
- **IRR**: implied return assuming reinvestment at IRR

They coincide **only under specific conditions**.

---

## 13. Investment Projects (Preview)

IRR allows comparison between:
- Projects
- Bonds
- Stocks
- Bank deposits

If IRR > alternative return → project is attractive.

---

## 14. Key Takeaways

1. Returns must be **time-adjusted**
2. Compounding dominates intuition
3. EAR is the correct annual comparison rate
4. HPR measures realized performance
5. IRR embeds a reinvestment assumption
6. Interest rates drive bond prices
7. Rates and time always matter

---

## 15. What to Do Next

- Start **Problem Set 1**
- Focus on:
  - HPR vs Annualized HPR
  - EAR vs APR
  - IRR intuition
- Ask questions early

---

## 16. Next Session

- Exercises and applications
- Deepening bond return mechanics
- Preparing the transition to Portfolio Theory

---



# Transcript
28 de enero de 2026, 5:09p.m.

1 h 12 min 49 s

  
No way.  
OK, good.  
Yes.  
They were saying.  
They will finish with the Mary one.  
With less new contract over customs and.  
I have given you a lot of information and this first thing.  
Important you do start working there right now and then after portfolio theory is a new different area of study that also will have its own complications so.  
Please work on time alimony and welcome for portfolio team. Today's class is going to be similar as last day class. It's one class where if you are understanding, if you are, if you have your attention.  
For me, you will probably understand everything without too much problems, but the point is not in understanding just right now. The point is in taking all this understanding and practicing.  
And make yours all these things. Yep.  
Any questions regarding last day? Next day we will go through exercises because probably next day you will have questions regarding exit problem set one and we will start doing things. Let me.  
Turn this on performance OK.  
What are we going to talk about today? Performance. Performance. We will miss your performance. How do you miss your performance?  
They talking about money.  
You invest 100, you get 110, your performance is 10%. We will use rates. So a quick summary of today's classes.  
Again, same formula.  
What are we going to do today? Talk about with us? Talk about art.  
Yes, and we will give.  
Different names, ones of the difficulties this course has is that we will be using.  
Different names in order to talk about almost same thing. In this case, what is the APR, the effective annual rate? What is the HPR and the IRR rates? Rates.  
And somehow.  
All these race.  
Has to do with that part, yes. Imagine that.  
Time will be one. OK, time will be one.  
All these different rates will be the same.  
What is the problem that time not going to be always one and let me distinguish between.  
First part of the class and the second part on one hand 01 year, two years, yes.  
Having this imagine that I have, I invest. Yes, I get here one cash flow and here another cash flow, yes.  
What is?  
HPR HPR is taking this future cash flow.  
The future, yes, and calculating total return between present and future as well.  
Queries.  
Considering that this will be paid in year one, this will be paid in year 2.  
And calculating, I don't want to say the other because it's not the other, but calculating the equivalent return that these payments that are paid in a different time will happen.  
So HPR and Ayana is going.  
In multiple periods and playing with returns, yes.  
On the other half, the first part of the glass.  
We forget about multi states. We just focus in one year. We can divide one year into two semesters, no?  
Semester. OK, then we can divide a year into four.  
1212121212 months or 365 days.  
What is the annual percentage rate?  
For example, the molds will be great. I'm moving like this and it's good.  
I have a monthly rate in case I'm talking about months or the quarter rate or the semester rate. Yes, we will divide.  
The annual percentage rate. Well, yes, then we will upgrade the one that is important for me the year, the technique annual rate, technique annual rate is the result of on this.  
One with this quarter or this quarter.  
At the end, what are we doing today? We are continue playing with Pambalumon, with Rex. At the end we will continue. We will be applying that form. We will construct, we will play with Rex. Make sense.  
One quickly thing that will be with us for the whole course.  
Imagine that I have 1%.  
1% monthly.  
Each month I received 1%. How can I calculate the effective annual rate equivalent rate in a year basis?  
Always from home.  
1 + 1%.  
Right to the 12th, yes.  
This should be equal to 1 plus the effective annual rate, yes.  
You understand what I'm saying? Tell me.  
Imagine I go to the bank and the bank tells me you are going to get that 1% mostly. So I have 100 and in one more time I will have 110.  
And the question is, OK, I put 100, you give me the rating among the basis at how much I will have after one year, that's 12 months because it's 12 months.  
But I'm just giving you one example and after 12 months, how much I will have because of compounding, you are not going to have 12%, you are going to have more. If you are having 1% in a month, you need more than 2% because of bonding.  
At the end you are going to have the number.  
You are gonna have let me go into Excel quick.  
If you do the number.  
You are going to have I am.  
I don't know why this all this is changed, but whatever you are going to have 1 + 1%.  
Rise to the 12 -, 1 that is going to be 12.63% or 68.  
What is this number? The effective annual rate? Effective annual rate for me is the important one. Why? Because I don't want you to think too much about names. How are we going to call 1%?  
In a monthly base, it will not have any name. We are not going to call it, but if we multiply 1% * 12, we are going to get 12%. What is the name of 12%?  
APR and I don't even remember what is the name of APR. Here it is annual percentage rate and I don't want to remember it too much and I don't want you to remember it also. I tell me.  
Plus an AE EAR, what would that be?  
Which formula is that I have 1%. That's the industry. This is the interest rate in a monthly base.  
And if I do this, I will get the effect. I like, I like your question.  
Why is then? Why is this wrong?  
I want you to focus on the name of the contact. I'm going to once I press the bottom, I will show you that.  
than me.  
1% is.  
Well, they're equal to each other in a sense.  
Once I press the button you will see this and I don't want you to memorize this.  
I don't want you to think of thinking.  
But I want you just to understand that APR means no.  
But because it's in a year basis and it's a 12%. Then effective annual rate is important for me because if I put in a daily or in a monthly basis, I would like to know the real rate I will receive in a year basis in order to compare.  
Make sense? And then knowing knowing APR, how can I get effective annual rate? I will get effective annual rate.  
Knowing APRI will get effective annual rate.  
By doing 1 plus APR over T.  
All these rice to be minus one, yes.  
For any term, you will be allowed to pay both. I will give you one formula seat and you can bring your own formula seat. You're achieve seat. No exercises can be shown in this formula. I'm telling you this because I don't want you to memorize formulas.  
There's no need in memorizing formulas. The point is fighting against memorizing formulas, trying to understand what we are doing. Make sense.  
OK, so.  
I am introduction. I'm in introduction. What are we going to do today? We work with multiple periods. We will talk about HPR and internal rate of return. If we work within a period, we will work with a PR and effective panel rate, yeah.  
So oh, and this is for me, you understanding this?  
Oh, here is 1 + 1 plus. This is for me. What is important is you do to understand that.  
One plus the interest rate we are looking for is equivalent to one plus the interest rate in period price through for example.  
We will work a lot with this idea and I don't want to call it geometric average.  
But we will calculate grades as if we were with the geometric events. If I talk about geometric events, you hear me, probably you will be afraid. But if I just show you.  
Please things will be Morris at today's early. Let me start.  
APR lenders are required by law to report the annual percentage rate. Yes. Why? Because if I told you, I'm going to charge you.  
1% daily.  
You can think oh one person daily, one person this small.  
81% daily home match is enough.  
What would be the APR of one person only 365, no?  
This is an exact what I'm I'm going to saturate that 1% APR would be this times 365, isn't it 60? Sorry 65.  
Hey.  
We have a this is APR, yes, but what is going to be?  
What is going to be the effective annual rate?  
365 and the 50 camera rate is going to be.  
Do you see the? Do you see the point? This is APR that is big, but careful because effective annual rate with this example is much, much, much bigger. I don't want you to see too much APR. I don't want you to think too much about APR.  
Because APR forgets about compounding.  
I want you to think about compounding, compounding, compounding. Yep, 3668. It's a lot. That's more than more than 10 times.  
But whatever, lenders are required by law to report annual percentage rate and for example along that charge 1% per month, 12%, yes.  
The question is 12% per year the real cost?  
No, because of compounding, yes.  
How do we calculate the real cost with the effective annual rate? Once we have a PR, how we will calculate effective annual rate with this formula?  
This formula is exactly the same that you have on the blackboard. Instead of calling time T, there is M but you see that is the same formula, no?  
Which loan is cheaper, 12% compounded annually or 12% compound more?  
Effective annual rate of the 12% on home monthly is 12.8, one that we have already covered. Make sense.  
OK.  
Yeah.  
I don't want you to think too much about this slide. The idea is once we use infinitesimal time, yes.  
Once we use intestinal time.  
Yes.  
If P tends to 0 then 1 + R rise to P.  
With them to.  
E raise to minus R * T this for short term.  
Please, Wilton, please. Why? Tell me, we are taking.  
I mean, no, I'm not saying P = 0.  
And he said be becoming becoming small, really small.  
Is you what I mean? One thing is 0, another thing is 0.10001.  
When he is small, really, really small.  
It would be the same.  
This formula producing this formula for small amount of time.  
E.  
1 over 1 plus R raised to T.  
Will behave, will leave same result as.  
Using E raise to minus R times T.  
Why this matters for my course? Not too much. We're talking about black and salts formula we will use. I will show you this. You should understand that it came from here.  
But I want you to know and to understand that in finance.  
There are times that people.  
One trade computers trade and computers can trade in milliseconds so fast, so fast, so fast and time. If we were talking about humans, just humans, I will not be written that.  
But if we are talking about computers, there are times that we want. We need to know what happens in a short time and derivative. The derivative of this is much, much more simple than the derivative of this.  
The derivative of this is minus R * 7.  
So B is equal to FX. Yes, the derivative of this function is minus R times.  
The function, yes.  
And when talking about computing, it makes our life much more simple.  
But you can absolutely OK, this is.  
Yes.  
Exactly.  
OK, let me continue.  
Any questions?  
Recap I have just introduced effective annual rate and APR. How do you make a loan seem cheaper here? I I think that this does not work anymore. No, they have taken this. It was.  
Now it's illegal. The example that I have in that link now is illegal because law changes is it was alone that.  
You need 100 euros now.  
Three months for free, zero rate and after three months.  
You should read the small letter and in the small letter there were big numbers.  
The shorter you, for example, if you say 1% daily, 3000 in a year basis.  
What I'm talking about now is financial education, financial financial education that is so simple to lie scam people based on these things. Yep, but in this class, all rates we will work with.  
Will be in a year basis. We are not going to see too much exercises regarding this, but this is like a warm up, Yep.  
Ivan, how was life?  
Nekia I say it correctly. Nekia. OK, holding period return since holding period return.  
Holding period. What is the formula of holding period return?  
I'm going to show you the forming of holding the video window and I'm going to write it directly.  
And holding the return HPR is future value over present value.  
Over 1P minus what? Yes.  
If you think a little, this formula should look familiar to you.  
Last day I wrote this formula two or three times. Today I don't know if I have already wrote written it or not, but I wrote it writing R instead. Yes. It's just taking R from here. From here, yes.  
Do you understand? Do you have this formula? This is one of the most important things you should get from today's class.  
Careful, because today we will distinguish between annualized inspir.  
And what I what is called in these slides normal HPR. We will call HPR normal to analyze HPR. You understand what I'm saying?  
What is?  
This is the HPR formula and today.  
You will find this in the slides as the annualized HPR and if you look for the H real HPR formula in the slides, HPR will be future value over present value -1.  
Yep.  
This is what you will find on today's slides, but you should remember what I have told you at the beginning. HPR is just in a annualized way, but today we will use HPR in a total in a global base. Why? Because.  
2.  
I want you to see two little things. Yeah, make sense.  
Any questions so?  
HPR.  
Future value present value 1 / t - 1.  
Yep.  
At time zero, you buy an invest. Well, present value, future value. Make sense.  
Now.  
What is being called here as holding period return?  
How much money I'm going to have at the end? How much money I am investing today and just the the return between the end and today without thinking about time. But in this class we will always be considering time.  
This class never 2 euros paid in one year will be the same as two year to euros paid in 320 or 30 exams. Time matters.  
But here and also all the amount of money here, let me show you this example and because of that you bought Coca-cola sales for 42.39 dollars and after six months.  
You sell it for 44.3, yes.  
We do this in a in. We do this in six months here.  
It were APR like the panel rate.  
I.  
This is it's PR stocks, yes.  
OK, so I'm told 42.39.  
And 44.5, yes, today and six.  
No.  
Today and in six months. Make sense.  
OK, what is the HPR? Careful, the HPR is so simple. Future value over present value -1 and the HPR is.  
And the HPR is.  
4.51% make sense.  
How much is this?  
In years. How much is this in years? Yes, I'm going to give you the same number in two directions. First direction is how I will do it without thinking about formulas.  
My consideration would be if in.  
Six months I get a 4.51.  
In one year I will get.  
In one year I will get.  
Year in one year I will get one plus this price to the second -1 no.  
And this will be.  
9.215 Yes, I have not applied the formula.  
Why? Don't know why? Because I don't remember the formula. I'm going to make an effort.  
I don't want to make an effort because making efforts.  
Was me having here it is.  
How much is the annualized HPR 1 plus HPR rise to 1 overtime -1 makes sense.  
So I'm gonna the formula is 1 plus HPR, yes.  
Rise 2.  
One overtime time is here, so time is 0.5.  
One over time that is half a year.  
3.  
Make sense?  
Half a year represent the amount of time since I invest and I receive my payback.  
Six months. Half a year represents 6 months.  
Yeah, yeah, time to maturity. You can call it time to maturity and maturity is a real.  
Proper work, proper work. Maturity will use time to maturity.  
But I want you to understand what we are doing. We are applying one simple formula. Yes, then this.  
Is this investment? Yes. And I'm going to compare this this with second example I buy KO shares for.  
39.63 two years ago and solve them for 42.37.  
And also I'm gonna get one dividend at the end of year 2.  
One means having a dividend that to get that the stock is going to pay out. You want to have a pay off of.  
The dividend so so simple today in two.  
Years time, yes. Today I have both them for 39.6339.63, yes.  
And in one year time I'm going to receive 42.3742.37.  
Plus the dividend of 1.12, yes.  
Oh, much money 39.63.  
And this plus this is 43.49. Make sense present value, future value.  
Now, bless you.  
Jesus, we say in Spanish.  
Yeah.  
What is the?  
8:00 PM.  
The HPR is future value over present value -1, yes.  
That is going to be a 9.7.  
Almost there, yes.  
So yes, looking at this, which one is the best?  
Imbest.  
The one that will pay me a nine point 9.74%.  
Is this true?  
No, it's not true. But you understand the trick. The trick is that I'm looking for the big number that is 9.74, but careful, I am getting this 9.74.  
In two years.  
In six months I can get a 4.51. That means 9.2 in one year. So probably you understand what I'm saying comparing these two things.  
I look.  
HPR it will look like if this investment will give me double of money like this one, but this is not true. Why? Because this takes two years, this takes half a year and at the end what I should look is annualized it.  
HPR How do I calculate analyze analyze HPR?  
One plus HPR, yes.  
One over time that is 2.  
-1 Yes, and I have missed. I have missed. Yes, I have missed. I I know what I have missed.  
I have missed this parenthesis, yes.  
And this is 4.7%.  
So at the end.  
Which one is better than me? I just have a question.  
Send me to New York.  
How much you know the ending price?  
I get the ending price by summing all total amounts of money that I have at the end and in this case the ending price that is 48.484843.49, yes.  
Yes, I mean the amount of how much I get, how much I receive and how do I get the amount of money that I receive by getting all the numbers.  
I mean, yes.  
In this case you are told to calculate HPR and analyze at HPR. The rest of the numbers are data.  
Nobody. We talked about peace the other day. Nobody.  
You will know this, this and and time, so you should complete return or you know return future value and time. So you should complete price. I've called present value price but at the end we will do pricing models and when doing pricing models we will.  
Forecast future cash flows.  
And once we know future cash flows, we can calculate present value.  
Is funny or future?  
In this case, in this case, future value.  
In case you have.  
A bond with one coupon that is going to be paid at the same time.  
Face value will be 100 and future value will be 105.  
Careful in this case, talking about bonds, don't call it dividend, call it coupon.  
But that I don't care too much about words.  
With all respect, I don't care too much about.  
Like, yeah.  
Probably Lekia is the hardest name in the class.  
I care more about on one hand I have. I mean, I don't see really well far, but I promise I have seen you smile.  
I care more about understanding that about a now for example if in today class.  
In today's class, you call dividend coupons and you call coupons dividends. I will be absolutely happy because you can also call them future cash flows.  
Future cash flow will be the proper way that.  
We'll consider both of them and also I want you to start hearing about gas flows.  
And the BCF or BFCF?  
Discounted.  
This year, what is this year? You will have money in the future and you calculate present value of all this money in the future. If we are talking about the stocks, this future cash flows will be dividends and the amount of money that you will receive by selling the stock.  
And if we are talking about bonds, future cash flows will be coupons and the face value.  
Yes, you will find lot of different kind of questions, lots, but don't get first understand the concept and then try to apply this concept in problem set one. There you will find exercises that will make you struggle.  
With this thing and next day we will continue working with these ideas, but after you have worked a little bit with exercise from set one. Why? Because at the end concepts are not so complicated.  
Making your making yours all these concepts is it requires a little bit of effort. Why? Because now I understand all things and not all that these things I I already understand, but I'm not the one that should understand these things.  
You are the one and in this quest, in this sense, so.  
If you continue asking questions at this.  
Right?  
I will not correct your exercise and you will get directly 1A.  
It's a joke, but it's not a joke. I am encouraging everyone to don't stop asking questions. So yep.  
Eh.  
Do you understand what I'm talking about, Norma? Tell me.  
OK.  
No, the yeah, I mean which one is better without any kind of question you will look at annualized at HPR and.  
And this will give you 9.2% yearly, while this one will give you half.  
At the end, you are getting more money. You are getting more money, less time.  
It's because of both. Sorry, you are getting more money in less time. No, it's because the time is shorter. You are getting less money in shorter time, but in a yearly basis you are getting more money. It's yeah, so so.  
Speaking about HPR, the two years that when you are getting more money, I think longer for you. Make sense.  
Stopping here HPR.  
Eh.  
For me this part of the class.  
I mean understanding bonds and the stocks and dividend is important, but for me fixed income will always be much, much more important that equity, that is that that equity markets, yes.  
Fix income markets will and let me bolts. Let me call this bolts.  
Here I have a sale coupon bond that matures 10 year 435 is the price 435.  
435 is the price price.  
Today, yes, maturity.  
Then yes, I can calculate.  
The yield at which I have bought it. This is a 0 coupon bond and the yield and the HPR is the same for a 0 coupon bond. Yes, I can calculate the yield. I can calculate the HPR at which I have bought it and.  
Face value is 1000.  
Over future value over the price at which I have bought it. I am missing one bracket at the beginning 1 / 10 -, 1 / 10 -, 1. Yes, all of you understand what I'm doing. What I'm doing is calculating.  
The HPR at which I have bought it.  
OK, I have calculate this, yes.  
What is this? The yield to maturity? The HPR?  
What I'm going to do?  
After one year.  
After one year, how what is the maturity? After one year, maturity is 9 years.  
I have bought this one year ago.  
I'm gonna sell it now.  
The new buyer will get depending on the price.  
A new HPR will buy it at 1G, but I don't care about the new buyer G. I care about  
How much return I'm getting now? I care about what is my HPR in this investment. Make sense.  
What I'm gonna do first here 3 prices, yes, 400 heaven.  
Here.  
There are going to be room and there are three prizes. Let me reorganize this.  
472.758 and 408 no.  
80 I'm going to calculate first.  
For the new buyer, the HPR for the new buyer. Why?  
Then now.  
I don't know what I'm doing because I just know how to calculate HPRS and I I can calculate all HPRS in the world and I see one price and I want to calculate HPR. Yes, let me.  
Future value 1000 over price. Yes, rise to 1 / 9 -, 1 makes sense.  
So.  
Oh.  
This HPR is 9%.  
This HPR is 8.5 and this HPR is 8.68. Make sense?  
Are you with me?  
What I want you to see.  
Several things. If interest rates increases, what happens with price of gold?  
If interest rates increases, what happens with price of bonds?  
Interest rate increases. What happened with pressure bond? They go down. Yes, power. What is power going to say today? Interest rate will remain at change, but in case power.  
Who said? Who said?  
The rate is increasing. What will happen with bondholders? They will get unhappy because price will be coming. Excels and you the rate goes down price of bonds. You are a bondholder price of the bond will go up.  
If I am a holder, I cannot buy. I already have bought. I'm not a holder.  
And interest rates goes down, you would have like to buy before interest rates before. Yes, this is exactly this example.  
We have bought a bond with a yield of 8.68%.  
And what happened with penetrates?  
We can a great attent.  
First example, interest rate has increased from 8.6 to 9 if interest rates goes up.  
What happened with the price of gold? Go down. So you are interested in selling one bond. Why interest rate has has so the price has gone down. So you are.  
Let me calculate now. Once you've got this idea, once you've got this idea, I'm going to calculate the HPR. What is HPR?  
This one, this one and this one. I have different prices.  
And what I have calculate this HPR for each one of the prices.  
Here what is the annualized XPR if you sell early?  
After one year for this price, after one year for this price, and after one year for this price.  
What I have done is calculate the yield of the new buyer because I see price, face value and I calculate all. But this is the yield of the new buyer. This is the rate at the moment I have made the trade.  
4.  
But I'm not. I don't care about the new buyer. I just care about me because I'm selfish.  
So in one year, how do I calculate XPR?  
By doing future value over.  
Present value or past value -1.  
Because interest rate has increased.  
What is my HPR 5.6747? What is the idea? I bought this thinking that I was gonna get an 8.6% and I would have got this in case I wait in Madrid.  
But because I am selling this after one year when interest rate has increased, the price has gone down and instead of getting an 8.6 return, I am getting less return because the price has gone down.  
Make sense?  
Next step.  
While interest rates goes up.  
A future value for future value over.  
The same value -1 in this case because interest rates has fallen.  
Instead of getting a return of five 8.6, I'm getting a return of 10% higher. Make sense?  
I am.  
What would be the return if I leave interest rates without any change?  
Anyone can imagine.  
No one.  
No one.  
The return would be the same. At the end you were thinking about this. I have bought this thinking I was going to get 8.6% of return. Interest rates remain unchanged and if I sell it after one year, how much return I have gotten in this year?  
8.68%.  
Make sense?  
What happen if interest rates goes up?  
Price of bonds will go down and in this case the new buyer is getting more return because he's paying more.  
Interest rates post down.  
The new buyer is getting.  
Sorry, if interest rates goes down.  
Interest rates go down.  
Yes.  
Rice goes.  
Up and because you are going to receive the same amount of money.  
Because of that, Mark, you dip.  
Make sense?  
Please don't think too much about this and instead of thinking, try to solve exercises. The more exercises you can because if you read the exercise.  
It's simple to understand what we are doing. Calculate HPR.  
You calculate HPR and you see the returns and you compare the return with the return that you were getting. You compare these returns and then you say, oh, I am getting more, more, less money than expected.  
I'm getting more or I'm getting the same. Make sense?  
OK.  
Any questions? I are. Let me go here and let me move to next step. Immediately after the class is finished, I'm going to share with you.  
The excel and bones, bones. Also, I don't know if you have seen the transcripts, but in the transcript things are really well explained. I like how transcripts are regarding finance zero bonbons.  
Zero Bombon.  
I'm.  
What is that problem?  
The problem is that there are times that.  
Oh, if I am talking about 0 coupon bonds, if I am talking about 0 coupon bonds, IRAHPR is the same. So in this case for this zero coupon bond is what we have already done.  
How do you calculate the era with this? Make sense?  
And now let me go quick dividend paying stocks. I don't want.  
I prefer, I prefer following. I prefer this exercise, but no, let me go here. I vote Coca one serve for 39.63.  
012, yes.  
I 39.6339.63 yes.  
I got one dividend of 1.12, another dividend of 1.12 and at the end I said it for 44.744.7 yes.  
So I'm going to forget about this line and I'm just going to focus on total cash flows that for year, the first year and the second year it's the same and in this case because I have the dividend plus the amount of money that I have received because I have sold it.  
Is different so.  
Several ideas. What is the IRR? Yes.  
OK, the quickly way with Excel. How do you calculate IRR look?  
We take so I.  
Of this.  
Just calculate IRR of this parenthesis and you will get a return. Why this number is incorrect? Because when money goes out of your pocket, the amount of money is not positive. It should be negative.  
Yes.  
Yeah, let me go step by step. This is the first approach. How do you calculate this?  
Quickly. Yep, now.  
Without Excel, how can you calculate IRR?  
I saw me.  
39.63 is present value is the price of which of 1.12.  
Over 1 plus IR.  
Yes.  
Glass.  
45 point.  
5.  
One plus IRR raised to the second. Yes, what is one point?  
This is that number and if you read the exercise is the reason that is being played in the award and.  
The second number, 45.42 is the price I received by selling it and the second video.  
How we will calculate in this case IRR by solving this equation?  
Equation.  
By solving this equation you will never be accepted to calculate an ILR in this sense. But I want you to understand what is IR is the return that we make present value of future cash flows equal in this in this case to price or to the present value.  
A sense.  
Hey.  
Yep. Now I must one thing else. What is the annualized set HPR if you can reinvest the dividend at the internal rate of return? This is an important question for problem set one.  
What means reinvesting the dividend?  
Forward the dividend at the reinvestment rate. How am I going to? How much money I have in year two? I would have 45.  
And first dividend is been paid in year one, so I should reinvest it, yes.  
Let me reinvest this at a 5% rate. Yes, reinvestment rate.  
On one hand, I'm going to have 45.42. What is 45.42? Second payment. Are you with me?  
Second payment is 45.42. And what about first payment? I'm going to reinvest this at which rate? At the 5% rate, for example, yes.  
Why? Because 5%.  
If I reinvest this at a 5% rate, how much money I'm going to have 1.12 times?  
1 + 5% just for one year. Make sense?  
So I would have 1.176. What is this? The total amount of money that I will have after two years? If I sum this here I can calculate.  
The HPR How will I calculate the HPR by doing total amount of money? What is 46.596?  
The amount of money that I have received because I have sold the stock plus the second dividend plus the first dividend reinvested.  
Altogether, it is amount of money.  
So.  
So HPR is.  
Future value over.  
39 point let me here put a negative side because I don't want everything to become crazy.  
Yes.  
Rise to.  
Another parenthesis. What is the rise? Oh, I'm running out of time and I'm getting nervous. Rise to 1 / 2 -, 1. This is the HPR formula, yeah.  
A boy.  
OK, what I'm doing, let me let me just here put 25%, yes.  
Internal rate of return was 8.48% because I am reinvesting this coupon at a higher rate. At the end my HPR will be higher. Makes sense. Why if I reinvest this? Because I am a disaster at a 1% rate.  
The HPR will be lower.  
You see what I mean?  
And what if I reinvest at the HP and at the what? What if I reinvest the dividend at the internal rate of return rate?  
If I reinvest the dividend at the internal rate of return.  
I will get.  
I will get back.  
The HPR and internal return return is exactly the same. Rain investment rate, yes, exactly.  
Same.  
The point is.  
If I don't do anything, I get the internal return return because I'm going to have one cash flow before in time. I should reinvest it. If I reinvested at a higher rate, I would get more. If I reinvest it at a lower rate, I will get less.  
If I reinvested at the internal rate of return, I will get the internal rate of return as the HPR. Make sense?  
As you can see.  
This is an excuse in order to talk about bonds, in order to talk about fixed income, in order to talk about the stocks, and in order to talk about dividends in order to finish.  
Pfizer wants to compete to compute an intern business project.  
You have this investment project 1505030.  
What the internal rate of return tells you?  
This project is equivalent to putting my money in the bank and getting a 50% of return. Make sense.  
Conclusion rates, rates, rates and rates and times matter.  
For next day, problem set one tell me.  
Which ones? Yes, these problems are in the textbook, but but I I recommend you to start with problem set one and once you finish or full or the problems in the textbook are simple.  
More simple.  
And if you have any questions, you can find me in WhatsApp. We can arrange a submitting and the sooner you start asking all questions the better.  
Thanks a lot. I'm running. I'm going to go running in order to see Powell in at the radio, I will say.  
OK.  
I haven't already read. Sorry, I don't want to read.  
No, no. Like, I know, I know, I know. Please. There's a question here. So I was getting these numbers. They submit for IR like isn't it just IR? No.  
Let me just one second. I mean, I mean, I I said no without.