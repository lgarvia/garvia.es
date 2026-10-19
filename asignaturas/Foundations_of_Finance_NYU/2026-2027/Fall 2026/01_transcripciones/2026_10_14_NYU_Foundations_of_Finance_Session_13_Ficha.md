---
titulo: "Foundations of Finance – Session 13: Midterm Review and Integrated Valuation"  
fecha: 2026-10-14  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 13  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---

# Foundations of Finance – Session 13

## Midterm Review and Integrated Valuation

**Date:** October 14, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 13 was the **midterm review session**.

Rather than introducing a new topic, the class connected the main ideas studied during the first half of the course and worked through representative problems from the sample midterms.

The main topics reviewed were:

- Time Value of Money.
    
- Present Value and Future Value.
    
- Holding Period Return.
    
- Effective annual rates.
    
- Bond valuation.
    
- Yield to Maturity.
    
- Yield curves and liquidity preference.
    
- Equity valuation.
    
- Gordon Growth Model.
    
- Present Value of Growth Opportunities.
    
- Multistage Dividend Discount Models.
    
- Net Present Value and IRR.
    
- Free Cash Flow.
    
- Incremental cash flows.
    

The central message was:

> **The difficulty of finance is not learning many isolated formulas. It is understanding how the different concepts connect.**

---

## 2. The Entire Course in One Formula

The course can be summarized through:

$$
\boxed{  
PV=\frac{FV}{(1+r)^t}  
}
$$
Everything studied so far is an application of this basic relationship.

We have used present value to study:

- Bonds.
    
- Annuities.
    
- Perpetuities.
    
- Stocks.
    
- Growth opportunities.
    
- Investment projects.
    
- Free Cash Flows.
    

The general principle remains:

$$
\boxed{  
Value=Present\ Value\ of\ Future\ Cash\ Flows  
}
$$
---

## 3. Earnings and Cash Flow

The session briefly reviewed one of the main conclusions from Sessions 11 and 12:

$$
\boxed{\text{Earnings} \neq \text{Cash Flow}}
$$
Accounting earnings help organize economic activity and determine taxes, but financial valuation ultimately depends on cash flows.

Important differences include:

- depreciation and amortization;
    
- capital expenditures;
    
- working capital;
    
- financing cash flows;
    
- timing differences between revenues and cash collections.
    

When valuing a project or company:

> **We need cash flows, not simply accounting earnings.**

---

## 4. Equity Valuation Without Growth

Suppose a company distributes all its earnings as dividends and does not grow.

Then:

$$
D = \text{Earnings}
$$
and:

$$
g=0
$$
The stock behaves like a perpetuity:

$$
\boxed{  
P_0=\frac{D}{k}  
}
$$
or equivalently:

$$
\boxed{  
P_0=\frac{EPS}{k}  
}
$$
This represents the value of the company assuming no future growth opportunities.

---

## 5. Equity Valuation With Growth

If dividends grow forever at a constant rate:

$$
\boxed{  
P_0=\frac{D_1}{k-g}  
}
$$
This is the Gordon Growth Model.

The model connects:

- dividends;
    
- growth;
    
- required return;
    
- stock value.
    

Therefore:

$$
g \uparrow \; \Rightarrow \; P_0 \uparrow
$$
and:

$$
k \uparrow \; \Rightarrow \; P_0 \downarrow
$$
provided all other assumptions remain unchanged.

---

## 6. Present Value of Growth Opportunities

Once we understand the value of a company with and without growth, we can define:

$$
\boxed{  
PVGO=P_0-\frac{EPS_1}{k}  
}
$$
PVGO represents the part of the company's value attributable to future investment opportunities.

The sign of PVGO depends on whether reinvesting shareholders' money creates value.

The key comparison is:

$$
ROE  
\quad\text{versus}\quad  
k
$$
If retained earnings are invested at:

$$
\text{ROE} \gt k
$$
growth can create value.

If:

$$
\text{ROE} \lt k
$$
growth can destroy value.

An important qualification reviewed in class is that if the firm retains nothing:

$$
b=0
$$
then there is no growth generated through reinvestment, and the relationship between $\text{ROE}$ and $k$ is irrelevant for PVGO through that channel.

---

## 7. Growth and the Plowback Ratio

The sustainable growth relationship reviewed was:

$$
\boxed{  
g=b\times ROE  
}
$$
where:

- $b$ = plowback or retention ratio;
    
- $\text{ROE}$ = Return on Equity.
    

The payout ratio is:

$$
1-b
$$
Therefore:

$$
D_t=EPS_t(1-b)
$$
This connects accounting earnings with dividend valuation.

---

## 8. Multistage Dividend Discount Models

Companies do not necessarily grow at the same rate forever.

A two-stage or multistage model separates:

1. An initial period with one growth rate.
    
2. A stable-growth period thereafter.
    

The procedure remains:

1. Forecast the explicit dividends.
    
2. Calculate terminal value.
    
3. Discount everything back to the desired valuation date.
    

Terminal value at time $T$:

$$
\boxed{  
P_T=\frac{D_{T+1}}{k-g}  
}
$$
Then:

$$
\boxed{  
P_0=  
\sum_{t=1}^{T}  
\frac{D_t}{(1+k)^t}  
+  
\frac{P_T}{(1+k)^T}  
}
$$
Again:

> **The stock price is simply the present value of future cash flows.**

---

## 9. Holding Period Return

A sample midterm exercise reviewed Holding Period Return.

Suppose:

- Purchase price: \$80.
    
- Holding period: six months.
    
- Dividend received: \$3.
    
- Sale price: \$84.
    

The six-month wealth ratio is:

$$
\frac{84+3}{80}
$$
But the question asks for an **annualized HPR**.

Because six months is:

$$
t = 0.5
$$

we use:

$$
\boxed{
\text{Annualized HPR} = \left(\frac{FV}{PV}\right)^{1/t} - 1
}
$$

Therefore:

$$
\boxed{
\text{Annualized HPR} = \left(\frac{87}{80}\right)^2 - 1 = (1.0875)^2 - 1 = 18.27\%
}
$$

The key issue is not memorizing the exponent.

It is understanding that two six-month periods fit into one year.

---

## 10. Effective Annual Rates

The class also reviewed how to compare investments with different compounding conventions.

If a quoted annual rate is compounded $m$ times per year:

$$
\boxed{  
EAR=  
\left(1+\frac{APR}{m}\right)^m-1  
}
$$
Two rates can only be properly compared when they are expressed using the same time basis.

Again:

> **Careful with time.**

---

## 11. Yield Curves and Expectations

The review returned to the term structure of interest rates.

The shape of the yield curve reflects at least two forces discussed in class:

1. Expectations about future short-term interest rates.
    
2. Liquidity preference / term premium.
    

Liquidity preference normally contributes positively to the slope.

Therefore:

- A positive yield curve does not necessarily mean expected future rates are rising.
    
- A flat curve requires sufficiently negative rate expectations to offset the positive liquidity premium.
    
- An inverted curve implies even stronger expectations of falling future short-term rates under this framework.
    

The important point is to understand the interaction between the two forces rather than memorize a mechanical rule.

---

## 12. Forward Rates

Forward rates also follow directly from Time Value of Money.

For example:

$$
(1+s_2)^2=(1+s_1)(1+f_{1,1})
$$
Therefore:

$$
\boxed{
f_{1,1} = \frac{(1+s_2)^2}{1+s_1} - 1
}
$$

The forward rate is the rate implied today by spot rates for a future period.

---

## 13. NPV and IRR

The review also returned to capital budgeting.

Net Present Value:

$$
\boxed{  
NPV=  
\sum_{t=0}^{T}  
\frac{CF_t}{(1+r)^t}  
}
$$
Decision rule:

$$
\boxed{\text{NPV} \gt 0 \Rightarrow \text{Accept}}
$$
Internal Rate of Return:

$$
\boxed{  
NPV(IRR)=0  
}
$$
For a normal investment project:

$$
\boxed{  
IRR>Required\ Return\Rightarrow Accept  
}
$$
However, students should understand that IRR can become problematic with:

- non-conventional cash flows;
    
- multiple IRRs;
    
- mutually exclusive projects;
    
- projects of different scale.
    

When projects are mutually exclusive, NPV is generally the appropriate ranking criterion.

---

## 14. Free Cash Flow and Financing

One sample question reviewed why interest payments are not subtracted when calculating the operating Free Cash Flow used for project valuation.

The logic is:

> **The cost of financing is already incorporated through the discount rate.**

Therefore, project cash flows should normally be calculated before financing costs.

Otherwise, financing would effectively be counted twice:

1. Through interest expense in cash flow.
    
2. Through the required return used for discounting.
    

This distinction is particularly important when moving from accounting statements to financial valuation.

---

## 15. Annuities With Unusual Timing

One review exercise involved payments occurring every two years rather than every year.

The key lesson was not a new formula.

It was to make the units consistent.

If the cash flows occur every two years, the relevant two-year return is:

$$
\boxed{  
r_{2y}=(1+r_{annual})^2-1  
}
$$
The number of periods must also be expressed in two-year units.

After applying the annuity formula, the resulting value must be moved to the correct date if the first payment does not occur exactly one period after the valuation date.

This is another application of the same rule:

> **Match cash-flow timing, discount-rate timing and valuation date.**

---

## 16. Integrated Bond HPR Example

A particularly important review exercise combined several fixed-income concepts.

Suppose a three-year bond has:

- Face value: \$1,000.
    
- Annual coupon: \$40.
    
- Initial YTM: 4%.
    
- Coupons reinvested at 5%.
    
- Bond sold after two years.
    
- YTM at sale: 3%.
    

### Step 1: Calculate the purchase price

Cash flows are:

$$
40,\quad40,\quad1040
$$
Discounted at 4%:

$$
P_0=  
\frac{40}{1.04}  
+  
\frac{40}{1.04^2}  
+  
\frac{1040}{1.04^3}
$$
Because coupon rate and YTM are both 4%:

$$
\boxed{P_0 = \$1{,}000}
$$
---

## 17. Reinvesting the First Coupon

The first coupon is received after one year.

Because the bond is sold in year 2, that coupon can be reinvested for one year:

$$
FV(C_1)=40(1.05)
$$
The second coupon is received at the sale date:

$$
C_2=40
$$
---

## 18. Sale Price After Two Years

At the end of year 2, one year remains until maturity.

The bond will then pay:

$$
1040
$$
If the new YTM is 3%:

$$
P_2=\frac{1040}{1.03}
$$
Since yields have fallen from 4% to 3%:

$$
\boxed{\text{Bond Price} \uparrow}
$$
This creates a capital gain for the investor.

---

## 19. Realized HPR on the Bond

Total wealth at year 2 is:

$$
FV=  
40(1.05)  
+  
40  
+  
P_2
$$
The investment lasted two years.

Therefore the annualized HPR is:

$$
\boxed{  
HPR=  
\left(  
\frac{FV}{P_0}  
\right)^{1/2}-1  
}
$$
This exercise combines:

- bond pricing;
    
- reinvestment risk;
    
- interest-rate risk;
    
- holding-period return;
    
- Time Value of Money.
    

Two important relationships emerge:

$$
Reinvestment\ Rate\uparrow  
\Rightarrow HPR\uparrow
$$
and:

$$
Yield\ at\ Sale\downarrow  
\Rightarrow Bond\ Price\uparrow  
\Rightarrow HPR\uparrow
$$
---

## 20. What the Midterm Is Testing

The emphasis of the midterm is not advanced mathematics.

The important skills are:

- understanding the concepts;
    
- identifying the correct cash flows;
    
- identifying the relevant point in time;
    
- knowing which rate to use;
    
- understanding the relationships between variables;
    
- applying the basic formulas correctly.
    

Students should particularly avoid simply memorizing procedures without understanding why they work.

> **Do not eat the formula and spit it out. Understand what you are doing.**

---

## 21. Core Connections to Remember

The course can be viewed as a network of connected ideas.

### Bonds

$$
\text{Price} = \text{PV}(\text{Coupons} + \text{Face Value})
$$
### Stocks

$$
\text{Price} = \text{PV}(\text{Future Dividends})
$$
### Projects

$$
\text{NPV} = \text{PV}(\text{Future Incremental Cash Flows}) - \text{Investment}
$$
### Companies

$$
\text{Value} = \text{PV}(\text{Future Free Cash Flows})
$$
Different assets.

Same principle.

$$
\boxed{  
Present\ Value  
}
$$
---

## 22. Five Ideas to Remember

1. **Almost everything studied so far is an application of Time Value of Money.**
    
2. **The most important skill is identifying the correct cash flows, rates and dates.**
    
3. **Bonds, stocks, projects and companies are valued by discounting future cash flows.**
    
4. **Growth creates value only when retained capital earns more than investors require.**
    
5. **The midterm tests understanding and connections more than mathematical complexity.**
    

---

## 23. Midterm Preparation

Students should review:

- Present Value and Future Value.
    
- Annualization.
    
- APR and EAR.
    
- Annuities and perpetuities.
    
- Bond prices and YTM.
    
- Holding Period Return.
    
- Reinvestment risk.
    
- Yield curves.
    
- Forward rates.
    
- Gordon Growth Model.
    
- Plowback ratio and growth.
    
- PVGO.
    
- Multistage Dividend Discount Models.
    
- NPV and IRR.
    
- Free Cash Flow.
    
- Incremental cash flows.
    

Students should especially work through **Sample Midterm 1 and Sample Midterm 2** independently and use the solutions afterwards to identify mistakes.

The format of the midterm questions will be similar to the sample exams discussed in class.

The main objective is not to memorize many formulas.

It is to understand the structure behind them:

$$
\boxed{  
Future\ Cash\ Flows  
\rightarrow  
Discounting  
\rightarrow  
Present\ Value  
\rightarrow  
Financial\ Decision  
}
$$

---

# Transcription
14 de octubre de 2026, 5:03p.m.
1 h 45 min 47 s
Several things, yeah. I'm gonna share, I'm gonna share with you.  
Solutions from sample midterm 1 and sample midterm 2, yep.  
I mean, will you fall?  
Are you scared of it?  
He was at.  
I'm going to say both solutions, and again, I'm going to show you some the example, the sample, yes. OK, Bali, Bali, Bali, Bali, Bali is perfect Spanish.  
Now, what else? Oh, Christine Lagarde. Do you know who is Christine Lagarde?  
This is not her best picture.  
OK, ¿Quién es? ¿Quién es? ¿Quién es Christine Lagarde. You know who getting worse?  
Getting worse.  
Write to me, say this. Ohh, Kevin was in Spain. Ohh, no, no, she like, she like same job in Spain.  
Is it Spain? No, she's Spanish. Oh, no, no, getting worse. It's American. Oh, okay. Oh, no, Christine Lagarde is French. Getting worse, who is very getting worse. The head chair. Christine Lagarde is European Central Bank. Chair.  
Yeah. Same than there are as many central bank as currencies there are. Yeah, then.  
I have upload all transcripts you have.  
Let me see, everyone, copy link. I have uploaded all transcripts into Google Notebook.  
Belén.  
And before class I have tried, there is one new feature that is called Reports.  
I have to prepare one report.  
And it's the first time I'm looking at this feature introduction.  
Well, this boils down to a single core idea. The master intuition is simple. Finance is about managing an unpredictable future. Yeah, I recognize myself.  
The universal blueprint, time value of money.  
Great future.  
Future value, yeah, discounting, yeah.  
I...  
Recommended presentation. Well, this is the first time. Do you know Google?  
Have you tried?  
This is new. This is...  
This is called, this is called.  
Report, yes.  
Is there any feature called Report? I was.  
I'm here, and I am told to add.  
Recommended.  
As like.  
I like this is funny. They are telling me to add more features to this report. Yes? Fixing code.  
Oh, and leverage some sorting.  
An infographic, yes, generate.  
Then, price enough a bone, great.  
Into maturity, convaluation, generate. I'm enjoying.  
Price value.  
Always still on multiple periods.  
The landscape of equity.  
Yeah, and summary: a comprehensive finance principles quiz.  
Okay.  
How do market bond price react when required interest rate rise?  
Please, a man.  
Is this?  
Yes.  
Ohh.  
It's OK. What is the general pricing formula? I am, I'm just trying this one, yes?  
This one is new.  
You can, if you press the link, you can have access here.  
But I hope I wish all of you already know all these notions, yes?  
Then, a week.  
summary of all things we have seen during the course.  
Financial valuation mind map.  
Accounting metrics. I don't know what this has to do with earnings, cash flow, depreciation. Yeah, we start with accounting. Yes, we dedicate to accounting. Let me start summarizing everything.  
We have to talk about accounting.  
From 2 perspectives, yes, one perspective.  
We talk about the company when talking about equity, yes.  
And we talk about about people talking about.  
Yes, yes.  
When talking about just close.  
Main idea, you should take main idea, you should take is that.  
Earnings.  
is different from cash flow. One thing are earnings and another different thing are cash flows. This knowledge, this intuition has to do more in corporate finance in the future.  
Have we?  
Foundations of finance today. Why? Because.  
Let me summarize the whole course with just one formula: present value is equal to future value over.  
This is what we have been doing during the Holocaust. Here.  
We have calculated cash flows and we have used cash flows in order to calculate the present value. And then once we know the present value, we start working with capital value. Yes, we compare to investment, we calculate the internal rate of return and so on.  
I get.  
More about this.  
Imagine that you've got a company that will pay off a constant cash flow.  
A constant, yes?  
If you have a company that will pay a constant dividend forever.  
How do you calculate the price of this company?  
By doing?  
Dividend over is complete. Make sense? It's a perfect.  
Yep.  
Knop.  
This scenario is a scenario where there would not be growth.  
Bro, you see, yes?  
And it grow is zero.  
Oh, earnings.  
All earnings are distributed as dividends. Make sense?  
But...  
Not necessary. All earnings should be distributed. Make sense?  
Yep.  
So.  
Row is 0 when it's equal to 1, yeah?  
And if they is grow.  
How will you calculate?  
Price of the company.  
How will you calculate the price of the company?  
By doing.  
If it is 1 / r - g.  
Make sense?  
And now...  
Knowing this.  
No.  
The difficulty of discourse is not just one isolated feeling.  
The difficulty of this course has to do with lot connections, yes?  
You know how to calculate the price?  
Without growth.  
You know how to calculate the price of the company that grows, yes?  
Once you know these two numbers, you can complete present value of growing opportunities.  
What is the present value of growing opportunities?  
The price of the company?  
Yes?  
Minus.  
The price without considering broke, that is.  
Earnings over R.  
Earnings.  
are the same as dividend because I am not considering low. Here also I can write.  
Yes, yes.  
What is BBU?  
The difference between the price of the company.  
Minus that I is considering that that is low.  
All of you should know this connection, yes?  
All of you should know this connection.  
What else?  
Baby, yo.  
Is positive.  
Zero or negative?  
Moving events.  
On one, it will depends.  
On how good managers are with the money they keep inside the company?  
On one hand, the market...  
The market.  
Expect from me, the market expect from the company won Redondo, yes?  
And, on the other hand, managers.  
Get a return on the equity they give with themselves.  
I compared what managers do with what market state.  
We can figure out if present value growing opportunities is positive or negative, yes.  
Are you following me?  
One thing is how to get the price. Another thing is relationship between return on equity and what the market expects. Another thing is present value of growing opportunities.  
And if you are following me and happy, you will be happy on Monday and everyone will be happy with that.  
Because small things, let me finish with it with you.  
This has to do with the dynamics, understanding relationships. Yes, I have to start talking, I have to start talking about accounting metrics, yes, earnings and dividends. But I want you to understand the mechanics, yes?  
What else can you find?  
I'm a good morning, and I agree with you. So, it states, the Vidal is gone.  
What are we doing when calculating a true state dividend discount model? Working with that model, calculating present value of future cash stocks. If we are talking about golds, we will calculate the price of the gold by calculating present value of coupons plus face value. If we are talking about that stock,  
We will calculate present value. We will calculate the value by calculating present value of future dignments.  
At the end, no matter what are we looking about, we are always talking about...  
Some value of money, both gaining present value of future best growth. Make sense?  
****.  
I want to go through.  
Two, 3 exercises, yeah.  
Inverse you return in this.  
Before going through anything, do you have any questions regarding meter one, meter 2? Any questions regarding meter one, meter 2?  
Some condition one, some condition two.  
Is it gonna be like the same, like, mostly multiple choice? Yeah, and does it matter, like, show work or just that?  
If you show work, I will take into doubt. There is no need to show work. But personally, I prefer not just you to show work. I prefer you to work.  
Yeah.  
Now, now what I mean?  
Is there going to be any other questions? No. Because like that would be like the problems of two five. I mean, you should know what is IRR. I will never ask to calculate an IRR.  
I mean, I will never ask HPR, you should calculate, you will need to calculate the HPRs, but there won't be any problem regarding maths.  
Maths is not going to be anything. Understanding things? Yes. Let me go through sample, because what you will find is similar to what you have in sample final one and sample final two. Yes?  
Let me.  
Open.  
Can you open?  
Some call me term A.  
Okay, let me let me go by order, yes?  
Did you buy a stock six months ago for 80, just received a dividend of \$3 per share and then sold the stock for 84? What is your annualized HPR? Yes?  
important thing regarding time and value and money. Careful with time. Careful with time. Yes. In this case, first question.  
Six months ago is half a year.  
Here, dividend of \$3 per share.  
Let me go quick. Future value, then solve for 84. Future value is 84 and plus the dividend 3 share, \$3 per share, and I have got it for.  
Hey.  
I'm doing a PR is future value over present value raised to 1 / p minus what this.  
So, in this case, it's PR.  
Is this 1 - 1, but?  
The boy is.  
But I want you to understand and to know and to notice.  
Price to one half. I don't mind you. I mean you can be more expert. Personally, I would prefer you to understand things. The bottom is a couple.  
Yeah, but the point is...  
Well, in this case...  
Time is half my year.  
So, 0.5, 1 / 2, that 1 / 1 / 2 will be two.  
But I don't want you to just eat and spit it out.  
What I want is to understand that.  
If I have my money working.  
For six months, and I want to calculate how much it would have been, in case it would have been working for two for two periods of time.  
As you priced in the circle.  
So, at the end.  
In order to calculate equivalent within a year.  
I should surprise these to the second. You understand what I mean?  
I want you to understand what are we doing.  
I don't know, I don't know if solutions are correct or not.  
Sorry for that.  
Sorry for that.  
And if you have any questions regarding any one of the solutions, yeah, send me, I will recalculate and I will tell you if there is a mistake or not. Yeah?  
I am sure that most of them are correct. Yes, but there will be a point where you...  
Consider consider 3 investment. A pay an annual rate of 6.10% compound monthly. B pays an annual rate of 6.2 compounded annually and C pays.  
You should calculate effective number rates and compare, yeah?  
You invest 10,000 in a portfolio, whatever. If you buy a 25 year, 1000, whatever. Let me read. You have any questions? You have tried these exercises by yourself?  
You have had any difficulty in any one of them?  
Do you want me to go through anyone in particular?  
Then I will go weak.  
Oh, yeah, I want to...  
Under the liquidity preference theory, yes?  
If the term is structure, do you remember the ear proof?  
Do you remember the support?  
There were three possible things to have.  
I work slowly.  
Black.  
Or, yes, and when trying to understand the flow, there were two hypothesis working at the same time on one hand with the preference that makes.  
Slow positive, and then...  
Expectation, that expectation would be positive or negative, yeah?  
It was love, peace, positive.  
What can I say regarding expectations?  
What?  
Because liquidity preference would be higher than expectations, expectations would be negative.  
And while there are negative expectations, because of stability preference, slope is possible.  
If the slope is flat.  
Negative expectation, what? Because we need prevalence is always possible.  
I mean, the slow, the expectations is like, yeah.  
Yes, not only there are negative expectations, but also. Yeah, it's funny. Yeah.  
Make sense?  
If the one-year risk-free deal is 3%.  
And the one year forward, we have done several exercises as toxins.  
460, yes, okay, if the ohh, 11.  
Is what I have previously explained, yes?  
If the earnings rotation blowback rate is positive.  
So, Moni Arvind Kitchen.  
is positive and return on equity is less than the required return on equity on the equity.  
With I will never try to steal a bank with you.  
Yeah.  
I'm concerned. I cannot imagine both of you is trying to cheat in the exam. No, these two ones. I cheat on them. Do you understand what I mean? What I mean is that they are the worst criminals I have ever seen. You have not made anything wrong.  
You have not made anything wrong, but you are getting nervous and you are making a, it's it's faster. I, I do this.  
I will.  
Yeah.  
Ms.  
Return on equity is lower than the expected return. Yes, return on equity is lower than the expected return.  
Present value growing opportunities will be.  
Is the problem rate like 1 - c or B? B.  
The go back, the money that is kept.  
So if B is 0, oh.  
Previously, I told you in the incorrect way, that is.  
He will, he sealed.  
E?  
Isn't it also? Let me, let me write it, let me write it, let me write it. I think, yeah. Isn't it also, because I have ROE less than K means that the positive value of PV is like negative. Dividends is 1 - 3 times.  
Earnings, yeah.  
Olivia, no, no, but where should be? Just be. Is be. Now.  
If there is no growth.  
Miguel, yes?  
The girl is zero.  
Dividend is going to be equal to earnings.  
So?  
It then is equal to words, so...  
We should be seen.  
Did you seal?  
P.C. one to zero.  
Anne.  
Okay.  
So the rest of things, the rest of the scenarios, if B is different, there would be, if B is higher than one, there would be no. Nothing can both cannot be negative, right? No. It can only be G is less than, or no, wait, K is less than.  
Return on equity will always be positive. And required return is always so it will be positive. OK. So it's just because K is less. K is the same as R.  
Do you remember that we have this question a long time ago? K&R is the same. R is the dysphonian rate we are using.  
We have been using it during the Holocaust, and we're talking about that we did. They call it K because it's the cost of capital that came from capital.  
K less than ROE means that it's negative, right? The pin of TVG is negative, right? If return on everything is always higher than zero.  
I mean, the other way return on it would be less than K, less than K, and then it's negative. PBGO would be negative. OK, yeah, but you don't need the first part, like you don't need to know the.  
You don't need to know the flowback rate, right? You know, like the RE invested. Now, once I have said this, you can understand it well. If the earnings rotation flowback rate.  
Zero.  
OK, it will mean if this is 0.  
Well, it means that a return activity is less than. The company will not be wrong. You don't care about how we turn on it with this. Does that mean you know anything? It's like it was just that, or do you know the answer or no?  
You can know the answer without this part. Yeah. But this part can make tricky questions. One thing is, it is other way, you want to know the first part. The idea is, the idea is so simple. If B is 0,  
There is no problem. So, if B is 0, you don't care about relationship between return on equity and this country credit. But can you answer the question? In this case, the answer would be, so imagine 11, yes?  
If the earnings rotation blowback rate is 0.  
Then the answer would be not enough information to talk, yeah, yeah.  
Let me go.  
Hey.  
Angelina.  
Careful with this one, yes?  
Because I'm not gonna ask you.  
To calculate IRR.  
But you should know what is IRR and you should understand how to work with IRR.  
I have not read this question yet. Too mutually full, too mutually exclusive projects, it's cost 100 today.  
Project Sáez.  
The pace 80.  
I'm forty-five at the end of years one and two.  
Hey.  
close, close.  
Yes, year one, year.  
Eighty, forty-five, 20.  
Forty-five.  
Twenty.  
Which project should the firm take? Yes?  
I have not completed the numbers.  
But what can you tell me by reading this question?  
Or, like, um, Alba was...  
I am not making numbers. I don't know if L has higher than me, but I I reading these numbers.  
I am tall.  
I am told that the cost of Calvo.  
This is a person.  
I should calculate based on that cost of capital the present value.  
And that's how I'm saying you are told that your reference is a person.  
It will not make any sense to compare projects by using IR.  
OK, in computing the free cash flow of a project, the interest paid on the debt used to finance it is.  
The into the space of the dead.  
It is.  
Interest paid on the debt. It's not a genuine cash flow.  
not subtract because the cost of financing is already discounting the rate.  
subtract, but only on an after tax basis, no added because she's not an operating cost.  
It will be.  
Yeah, no, I mean, because flow the interest paid on the debt used to finance it in computing the free cash flow of a project.  
Not subtract, but not subtract this.  
I did not.  
Because it is not an operating cost.  
Yep.  
In the consider operating.  
So, once you go to the free gas flow.  
Regarding this one, if you find this one in particular, no, we built, we so sorry. Personally, I don't like this question too much, because there is, this is just to study.  
and understanding where does it go. Financing in the slides is not considered operational.  
You've got the free cash flow and all operational things.  
Not be.  
Too struck.  
Should be ones who have already subtracted, should be a whatever.  
This is the first, okay.  
Okay.  
I want to do question first. I want to go through question first. Yep.  
Have you tried exercise one?  
Knop.  
Read it.  
Because if you have not tried, will not, it makes no sense, try to solve it.  
You haven't tried?  
Back.  
Try to draw the numbers.  
Try to read it and try to understand it. Try to do it by yourself.  
When I go to the bathroom.  
Back in one minute.  
Because it makes no sense to me trying to solve it. We hope you have tried first.  
No.  
Okay.  
Still working. Still working on it.  
What is this?  
And then with you know.  
What is that for? Ohh, let me go.  
Dear to the formula, yes, and with this formula is...  
T over R is the difference between 2 perpendicular, no?  
One minus.  
One plus R right to B.  
Yes.  
This is the.  
We have, if I want to apply this formula, we have several problems, yes?  
We have set up rules.  
How many payments there are?  
Hello.  
Will you?  
For 21?  
Yeah.  
Because.  
You might need that.  
Payments will start year two and will finish in year forty-two, yes.  
Two and forty-two, we divided over 2.  
So it would be.  
We will have one family in year one.  
And it will finish in year 21. Yep, there will be.  
B.  
Twenty-one, yes.  
Now, payments happens each two years, and that first payment will happen within a year.  
You see this point?  
What is the discounting rate?  
Brian works in a two-year basis, yes?  
So, there are twenty-one payments each two years, yeah?  
When you want payments, it's two years, so...  
The rate I should use, 1 + 8%, this will be in one year.  
Back in two years.  
Minus one. What is this? The rate I should use in order to calculate present value. Yep.  
Of the perfect.  
But if I black.  
Directly this formula: 0, one, two.  
Three.  
Yes.  
What happens in reality?  
Zero.  
Year one, two, year three. Make sense?  
You understand what I'm what I'm saying?  
What I'm saying is that the first payment...  
If I calculate this formula straightforward.  
I will calculate one year ago, this is one year ago, and I should take later forward in that.  
So, whatever.  
I get from this formula.  
I should take that work in time.  
What will you look like?  
Yep.  
I'm not going to go through this. I prefer you try to understand this because understanding this is having perfectly, working perfectly with time value.  
Also, you can do this with Excel, yeah?  
I want, I want also to, how do you understand this, Morales?  
Okay, I want all of you to pay attention.  
I want all of you, I want your attention.  
I'm gonna do a...  
I want to do an exercise, a full exercise. Imagine.  
A beautiful.  
Abon.  
But I want you to copy what I'm going to say, and then I will. You have.  
A gold.  
We face value.  
Of 1000.  
Maturity of...  
For years.  
Face value 1000, maturity of four years.  
And couples of 40.  
Books.  
You buy this volume with a deal of 4%.  
You.  
Ring this footballs.  
At the 5% rate.  
And after two years.  
After 2 years.  
You said the ball?  
At a price of two with a rate of with a deal of 2%.  
You are asked to calculate HBR.  
Yes? Can you say the last part again? Buy a bond with yield of 4%? Yeah. You have a bond?  
With coupons.  
Face value of 1000 and four coupons of 40, yes.  
Yes.  
You have bought this ball at Hidalgo for person.  
You have both.  
The yield of 4%.  
Yep.  
Then.  
You?  
Read best.  
Bones.  
Add up 5%, yes.  
Another.  
After.  
Hey.  
Two years.  
You.  
Sáez.  
Ana.  
Three percent rate, yes.  
Let me change one thing. Instead of talking about that four year, let me make this easier.  
By saying a trivia 1000.  
Oh, a figure, 04, yes?  
Is it 0 coupon, but it's here, not a call, a call with coupon, OK?  
You have bought into the 4% rate. You'll invest coupons at the 5% rate.  
I'm after.  
Two years, in year two, you saw the data, 3% rate.  
You sell it a year of 3%.  
And you are asked to calculate.  
HPR. Yeah, through the entire three-year period. No, for your investment, you are selling this in year two with first coupon reinvestment.  
All of you are following me.  
In order to calculate the HPR.  
After 2 years, yes? HPR.  
Future value over present value.  
One over 2 - 1, 1 / 2 because I am selling this after two years. Make sense?  
What is the person that?  
How much did I pay for this ball?  
How much did I pay for this one?  
First thing we should do is to calculate.  
First thing.  
Can we try it first? Can we try it first, or yes?  
Of course.  
What is the price of the ball?  
I agree to Hidalgo.  
Andy.  
First, one, two, three.  
Three, how do you calculate the present level?  
Yeah, and future cash flows are 40, 40 and 1040. Yes.  
The yield at which I have voted is 4.  
Person, yes.  
Four percent the yield at which I have voted, yes?  
Then.  
Body.  
Over 1 + 4%.  
Rise to the first.  
Yep.  
Plus the second, plus the third.  
I send this.  
And what is this song?  
Open rate is 4%, the deal is 4%.  
So, this one should be a...  
Yeah, this one should be a parable.  
So, first idea.  
How much money do I have paid?  
Yep.  
Make sense?  
Okay.  
Hey.  
Listen, man.  
I'm not, I have invested.  
Ana.  
In one year, I have to see 40.  
Lopez.  
Then, this second year I will receive \$40.  
And, in case I would wait in maturity, I will receive at the end 1000 + 40.  
But.  
Is 1040.  
Yeah.  
Would be not made here, because I would sell the ball, yes?  
I buy this, I pay 1000 here.  
I paid 1000 here, and I have the right of receiving 3 cash flows in the future.  
Now, I want to calculate all the money that I will have.  
Yeah, yes.  
Future money.  
Which about you?  
Would be.  
This first test flow for investing.  
One year.  
Odio.  
Times reinvested at the 5% rate, 1 + 5%. Make sense?  
Bless.  
Odio.  
That is 40?  
Are you my pocket in here, too?  
There is no point being very missing.  
And also...  
I do receive.  
One 1040.  
I am selling this at a few percent rate over 1 + 3 percent, yeah.  
Let me.  
Calculate.  
present value and in order to calculate future value.  
Thirst.  
Coupon.  
Second.  
Unless, yeah, first coupon.  
Is 40.  
Brain bested.  
At which rate?  
At which rate I am reinvesting this at the 5% rate? No.  
The second is in my pocket.  
Or, and at the end, I am selling this.  
For at that, I'm selling this at, I don't remember which rate did I say at that 3% rate.  
Three percent. Yep.  
So, feature value.  
Is the sun?  
Of these three numbers.  
Yeah, is it for you too?  
Because he's...  
What I'm doing.  
Yes. Is this first coupon or investment for what? Yeah, yeah.  
So, at the end...  
HBR.  
HPR will be.  
Glass.  
Let's.  
40 plus 42, this is future value.  
Go where?  
Present value.  
But I have forgot price to.  
This happens.  
This happens in...  
Two years, yes?  
Minus one, yep.  
So...  
This would be the answer, yeah.  
What I want you to see? Several things.  
What do you?  
I would have.  
Reinvest at the 4% rate.  
and sold at a 4% rate.  
HPR would be 4%. The higher the reinvesting grade,  
The higher my HPR will be.  
at reinvestment rate will not change to max because I am reinvesting a small coupon. Yes. Is the issue going down? In the formula, the share is going down.  
Ohh.  
And.  
So, was there 4.48 at the end though?  
I mean, if this is at 4%, this is 4. If I increase...  
It's bigger.  
The higher reinvestment rate, the bigger it would be. Yep, then.  
They lower the rate.  
I am selling.  
The higher the price it would be, the more happy I will be when selling.  
The lower the rate, the higher the place, the higher the HPL.  
Make sense?  
The formula sheet, the formula is like HP or not HP.  
So is this annualized HPL? All HPRs will be annualized. This is annualized and all HPRs, I will never ask you to calculate.  
an HPR that will not be analyzed.  
Yep.  
So if you have a question that says the HPR to be assumed as the annual? Yes, and also.  
You can ask me. I don't have regarding these kind of questions. I will be in the exam.  
No, don't worry. I will be here and I don't have any problem in...  
Asking all the questions you have regard like this, like this.  
I mean, I will not tell you what are the answers.  
Make sense?  
What is?  
Let me save this.  
This is.  
Hey.  
Mid-term review.  
Good.  
Here.  
You did very good, yeah.  
Morales.  
Fully understanding this exercise is important.  
Well, here, a project is expected to generate revenue of 800 and operating costs of 500, corporate tax, a stock. Dividend discount model, the two states dividend discount model.  
Let me see if there is this one, for example, yeah.  
Earnings.  
Okay, I'm gonna do this is not a true states division this code model.  
But...  
This has to do with calculating the price so far.  
with calculating the price of a stock. Yes, I'm going to do this one.  
Okay, a stock had earnings over the last year of three.  
The.  
Donors.  
Sir, is this?  
Then, the earnings rotation flowback rate is 50%.  
And is expected to continue like this forever.  
Return on equity over the next year is expected to be only 8%. Return on equity is 8%. Yes.  
From time one onwards.  
Redondo network over the next year is expected to be only 8 percent. Redondo equity is expected to return to its normal level of 40 percent later.  
40%.  
What is the current value of the stock?  
OK, this is a true state. Yeah, what should we do?  
We should calculate.  
Present value of all future buildings, yes?  
Better than zero.  
Did you then see Ruiz?  
1.5, yeah.  
Ten.  
Do I know something regarding growing rate?  
How can I calculate Robin Bread?  
It's gonna be T times return E is equal to return E times, so.  
For first year, Roman Reading will be.  
Four percent, and then probably grade would be.  
Seven person, yes.  
Good.  
No, the is 1.5.  
Even one.  
1.5.  
Thanks, 1.04.  
Yep.  
And dividend two.  
1.5 * 1.04 * 1.07.  
Yep.  
De Vega de.  
1.5 times.  
1.04 times.  
Rice, too.  
Steve Manuel.  
Hey, my name is Juan.  
Yeah.  
What should we do?  
We should calculate.  
What is in Manuel?  
The company, I will trade, given this is a value of future.  
No.  
Price.  
It's going to be equal to two.  
Dividend one over.  
Oh, bless her, yes.  
Yeah.  
Less.  
Price in year one over one plus.  
Do I know price in year one?  
Yes.  
French.  
You're what?  
You gonna need one, too?  
Be then two over.  
R minus.  
Seven percent, yeah.  
I am writing this, in this sense, because I don't want to put all the numbers and I don't want to create confusion. But what I'm doing, two states. First, the states.  
Is bigger than one?  
Central states is calculating price in year one.  
I think that we are going to finish now because there is a presentation you should prepare.  
Do you have any questions?  
Enjoy the long weekend, and see you on Monday.  
Yes, please. Can we confirm the date? Oh, wait, I was going to ask about the date. I can't move the other ones.  
The original knife, right? The knife. Yeah.  
I can move the other one, so then I won't like it.  
Yeah, so I can take it now, right? You can take that. You prefer, or do you care to take it Friday before? No, I wouldn't want to take that. You don't want that? OK. Anyone will take it before?  
All of you. I don't have any problem in taking you. OK. Yep. So December 4th. December 4th.  
Yeah.  
Cheap.  
But please send me, Olivia, send me an e-mail or I will send myself. I know. So, if you have questions about the exam. Should we expect the format to be exactly the same as like the practice exam or something like that?  
The format of questions. Of questions. Same. Same. OK. I mean, not the same exactly. Yeah, yeah, but the format is the same, like this. All right, sweet. And we're allowed a calculator.  
I mean, you can bring a simple calculator and if you bring a scientific or a mathematical or an economical calculator, I won't have any problem. But probably if you have never used it, you will have more problem with calculator than with studying the fact.  
Alright, thank you so much. Welcome. Have a good day.