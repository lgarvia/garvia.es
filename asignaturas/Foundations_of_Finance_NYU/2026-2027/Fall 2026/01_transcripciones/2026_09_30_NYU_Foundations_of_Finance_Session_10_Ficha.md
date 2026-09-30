---
titulo: "Foundations of Finance – Session 10: Capital Budgeting, NPV and IRR"
fecha: 2026-09-30
curso: "Foundations of Finance (Fall 2026)"
sesion: 10
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---
# Foundations of Finance – Session 10

## Capital Budgeting, NPV and IRR

**Date:** September 30, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 10 moved from valuing stocks to valuing **investment projects**.

The mathematical framework remains exactly the same:

> **Value is the present value of future cash flows.**

The main topics were:

- Review of the Gordon Growth Model and retained earnings.
    
- Capital budgeting.
    
- Net Present Value (NPV).
    
- Internal Rate of Return (IRR).
    
- The relationship between NPV and shareholder value.
    
- NPV versus IRR.
    
- Multiple IRRs and unusual cash-flow patterns.
    
- Mutually exclusive projects.
    
- The payback rule.
    

The central question of the session was:

> **Should the firm undertake the investment or not?**

---

## 2. Quick Review: Growth and Retained Earnings

The session began by reviewing several concepts from equity valuation.

For a constant-growth stock:

$$
P_0=\frac{D_1}{k-g}  
$$
Therefore:

$$
\boxed{k=\frac{D_1}{P_0}+g}  
$$
If a stock trades at \$60, pays a next-year dividend of \$3 and dividends grow at 4%:

$$
k=\frac{3}{60}+0.04  
$$
$$
\boxed{k = 9\%}  
$$
The expected return therefore combines:

$$
\boxed{k = \text{Dividend Yield} + \text{Growth}}  
$$
We also reviewed the relationship between retained earnings and growth.

If:

$$
b=\text{Plowback Ratio}  
$$
then:

$$
\boxed{g = b \times \text{ROE}}  
$$
For example, if a company distributes 40% of earnings, it retains 60%. If its ROE is 10%:

$$
g = 0.60(0.10) = 6\%  
$$
---

## 3. Should the Firm Retain Earnings?

An important economic idea was reinforced.

Suppose shareholders require:

$$
k = 10\%  
$$
but management can reinvest retained earnings at only:

$$
\text{ROE} = 8\%  
$$
Keeping the money inside the company would generate less than shareholders require.

The intuition is:

$$
\text{ROE} > k  
$$
can create value through reinvestment, while:

$$
\text{ROE} < k  
$$
can destroy value.

This connects with the **Present Value of Growth Opportunities (PVGO)** studied in Session 9.

Growth itself is not enough.

> **Growth creates value only when the return earned on new investment is high enough.**

---

## 4. Review: Terminal Value in a Two-Stage Model

The class also revisited the multistage Dividend Discount Model.

Suppose stable growth begins with dividend $D_{T+1}$.

The terminal value is calculated at time $T$:

$$
\boxed{P_T=\frac{D_{T+1}}{k-g}}  
$$
For example:

$$
P_2=\frac{D_3}{k-g}  
$$
Why is this price calculated in year 2 if the first stable-growth dividend arrives in year 3?

Because a perpetuity is always valued **one period before its first cash flow**.

The total stock value is therefore:

$$
P_0=  
\frac{D_1}{1+k}  
+  
\frac{D_2+P_2}{(1+k)^2}  
$$
Again, the entire calculation is simply present value.

---

## 5. From Stocks to Projects

Capital budgeting applies the same framework to real investment decisions.

Examples include:

- Building a new factory.
    
- Upgrading a data center.
    
- Entering a new market.
    
- Launching a new product.
    
- Buying new equipment.
    
- Acquiring another company.
    

The process is:

1. Estimate the initial investment.
    
2. Estimate future incremental cash flows.
    
3. Determine the appropriate required return.
    
4. Discount the future cash flows.
    
5. Decide whether the project creates value.
    

The object being valued changes.

The financial logic does not.

---

## 6. Net Present Value

The fundamental capital-budgeting criterion is:

# Net Present Value — NPV

$$
\boxed{  
NPV=  
\sum_{t=0}^{T}  
\frac{CF_t}{(1+r)^t}  
}  
$$
Normally:

$$
CF_0 < 0  
$$
because the first cash flow is the initial investment.

Therefore:

$$
NPV=  
CF_0+  
\frac{CF_1}{1+r}  
+  
\frac{CF_2}{(1+r)^2}  
+\cdots+  
\frac{CF_T}{(1+r)^T}  
$$
The decision rule is:

$$
\boxed{\text{NPV} > 0 \Rightarrow \text{Accept}}  
$$
$$
\boxed{\text{NPV} < 0 \Rightarrow \text{Reject}}  
$$
If:

$$
\text{NPV} = 0  
$$
the project earns exactly the required return.

NPV tells us directly:

> **How much value does this project create today?**

---

## 7. Capital-Budgeting Example

The class considered a data-center investment with approximately the following cash flows:

|Year|Cash Flow|
|---|---|
|0|-20|
|1|-20|
|2|+30|
|3|+30|

The required return was:

$$
r = 8\%  
$$
Therefore:

$$
NPV=  
-20  
-\frac{20}{1.08}  
+  
\frac{30}{1.08^2}  
+  
\frac{30}{1.08^3}  
$$
The result is approximately:

$$
\boxed{\text{NPV} \approx \$11\text{ million}}  
$$
Therefore the project creates value and should be undertaken under these assumptions.

The relationship between the discount rate and NPV is:

$$
\boxed{r\uparrow \, \Rightarrow \text{NPV}\downarrow}  
$$
This should already look familiar:

$$
\text{Rates}\uparrow \, \Rightarrow \text{Bond Prices}\downarrow  
$$
It is the same Time Value of Money mechanism.

---

## 8. NPV and Excel

The session highlighted an important Excel detail.

Excel's standard `NPV` function assumes that the first cash flow inside the function occurs **one period from today**.

Therefore a cash flow occurring today must normally be treated separately.

Conceptually:

```
NPV = CF0 + NPV(rate, CF1:CFn)
```

This is not merely an Excel issue.

The broader lesson is:

> **Before applying any formula, identify exactly when every cash flow occurs.**

If the timing is wrong, the valuation is wrong.

---

## 9. NPV and Shareholder Value

Suppose a company has:

- 2 million shares.
    
- Share price of \$100.
    

Its current equity value is:

$$
\text{Equity Value} = 2\text{ million} \times \$100 = \$200\text{ million}
$$

Suppose it then undertakes a project with:

$$
\text{NPV} = \$11\text{ million}  
$$
Under the assumptions of the model, firm value becomes:

$$
200+11=211  
$$
The value created per share is:

$$
\frac{11}{2}=5.5  
$$
Therefore the implied share price becomes approximately:

$$
\boxed{\$105.50}  
$$
This gives the economic meaning of NPV:

$$
\boxed{\text{Positive NPV increases shareholder wealth}}  
$$
---

## 10. Internal Rate of Return

The second major concept was:

# Internal Rate of Return — IRR

IRR is the discount rate that makes:

$$
\boxed{\text{NPV} = 0}  
$$
Therefore:

$$
0=  
CF_0+  
\frac{CF_1}{1+IRR}  
+  
\frac{CF_2}{(1+IRR)^2}  
+\cdots  
$$
For the project studied in class, the IRR was approximately:

$$
\boxed{\text{IRR} \approx 22.5\%}  
$$
The standard decision rule for a conventional investment is:

$$
\boxed{\text{IRR} > \text{Required Return} \Rightarrow \text{Accept}}  
$$
If the project has:

$$
\text{IRR} = 22.5\%  
$$
and the firm requires:

$$
8%  
$$
the project should be undertaken.

---

## 11. IRR, HPR and Yield to Maturity

IRR connects directly with concepts studied earlier.

For a bond:

- Price = initial investment.
    
- Coupons and principal = future cash flows.
    
- YTM = discount rate that equates the price with those future cash flows.
    

For a project:

- Initial expenditure = initial investment.
    
- Project cash flows = future cash flows.
    
- IRR = discount rate that makes NPV equal zero.
    

Therefore:

$$
\boxed{\text{IRR is conceptually similar to the YTM of a project}}  
$$
For a single initial investment and a single future payment, the same logic also reduces to the Holding Period Return framework.

The course keeps returning to the same mathematical structure.

---

## 12. When NPV and IRR Can Disagree

For normal projects, NPV and IRR usually produce the same accept/reject decision.

But there are important exceptions.

### Borrowing instead of investing

A conventional investment has cash flows such as:

$$
-, +, +, +, \ldots  
$$
You invest first and receive money later.

In this case:

> **Higher IRR is better.**

But if the cash flows are reversed:

$$
+, -, -, -, \ldots  
$$
the transaction behaves more like borrowing.

For a borrower:

> **Lower IRR is better.**

The economic meaning of the cash flows must therefore be understood before applying the rule.

### Multiple IRRs

Some projects have more than one change of sign:

$$
-, +, +, +, -  
$$
For example, a project may require:

- an initial investment;
    
- several positive operating cash flows;
    
- a large cleanup or decommissioning cost at the end.
    

In such cases the NPV profile may cross zero more than once.

Therefore:

$$
\boxed{\text{One project can have multiple IRRs}}  
$$
This makes IRR ambiguous.

---

## 13. Mutually Exclusive Projects

Another problem occurs when the firm must choose between projects.

Suppose:

### Project A

- Small initial investment.
    
- Very high percentage return.
    

### Project B

- Much larger initial investment.
    
- Lower percentage return.
    
- Much larger absolute value creation.
    

IRR may prefer Project A.

NPV may prefer Project B.

For example:

$$
\text{Investment}_A = \$100, \qquad \text{IRR}_A = 30\%  
$$
while:

$$
\text{Investment}_B = \$1,000,000, \qquad \text{IRR}_B = 20\%  
$$
The first project has the higher percentage return.

But the second may create much more wealth.

Therefore:

$$
\boxed{\text{Higher IRR} \neq \text{Higher Value}}  
$$
For mutually exclusive projects:

> **NPV is generally the correct ranking criterion.**

---

## 14. NPV Versus IRR

The two methods answer different questions.

### NPV

asks:

> **How much value does the project create?**

### IRR

asks:

> **What percentage return is embedded in the project's cash flows?**

NPV is generally the superior capital-budgeting criterion because it:

- Measures value creation directly.
    
- Handles scale properly.
    
- Can be added across independent projects.
    
- Avoids problems with multiple IRRs.
    
- Links directly to shareholder wealth.
    

IRR remains extremely useful because percentages are intuitive and easy to compare.

---

## 15. Payback Period

The final method introduced was the:

# Payback Rule

Payback asks:

> **How long does it take to recover the initial investment?**

For example, a company may require:

> Recover the investment within two years.

A project taking three years would therefore be rejected.

The advantage is simplicity.

But the method has important weaknesses.

It may:

- Ignore Time Value of Money.
    
- Ignore cash flows occurring after the cutoff.
    
- Use an arbitrary cutoff date.
    
- Reject projects with positive NPV.
    

For example, a project may have the highest NPV but a longer payback period and therefore be rejected under the payback rule.

---

## 16. Comparing the Main Decision Rules

|Method|Main Question|Decision Rule|
|---|---|---|
|NPV|How much value is created?|Accept if $\text{NPV} > 0$|
|IRR|What percentage return does the project generate?|Normally accept if $\text{IRR} > k$|
|Payback|How quickly is the investment recovered?|Accept if $\text{Payback} \le \text{Cutoff}$|

The key distinction is:

> **NPV measures value, IRR measures return, and payback measures time.**

---

## 17. Connection with the Entire Course

Capital budgeting may appear to be a completely new topic.

It is not.

We began the course with:

$$
PV=\frac{FV}{(1+r)^t}  
$$
We then applied present value to:

- Bonds.
    
- Annuities.
    
- Perpetuities.
    
- Yield to Maturity.
    
- Stocks.
    
- Dividend Discount Models.
    
- Gordon Growth.
    
- Multistage equity valuation.
    

Now we apply it to investment projects.

The common framework is:

$$
\boxed{\text{Value} = \text{Present Value of Future Cash Flows}}  
$$
The entire first part of the course can therefore be understood as different applications of the **Time Value of Money**.

---

## 18. Five Ideas to Remember

1. **Capital budgeting applies Time Value of Money to investment projects.**
    
2. **NPV tells us how much value a project creates today.**
    

$$
\text{NPV} > 0 \Rightarrow \text{Value Creation}  
$$
3. **IRR is the discount rate that makes NPV equal zero.**
    

$$
\text{NPV}(\text{IRR}) = 0  
$$
4. **NPV and IRR usually agree, but IRR can fail with unusual cash flows or mutually exclusive projects.**
    
5. **From bonds to stocks to investment projects, the underlying principle remains the same: discount future cash flows to today.**
    

---

## 19. Before the Midterm

Students should now be comfortable with:

- Time Value of Money.
    
- Present Value and Future Value.
    
- Annuities and perpetuities.
    
- Bond pricing.
    
- Yield to Maturity.
    
- Holding Period Return.
    
- Yield curves and forward rates.
    
- Equity valuation.
    
- Gordon Growth Model.
    
- Multistage Dividend Discount Models.
    
- PVGO.
    
- Net Present Value.
    
- Internal Rate of Return.
    
- Payback Period.
    

The session also discussed the midterm preparation materials available in Brightspace, including formula sheets and sample exams.

The recommendation remains:

> **Try the exercises yourself before looking at the solutions.**

The difficult part is rarely the formula itself. The important part is understanding the timing, signs and economic meaning of the cash flows.


# Transcription
30 de septiembre de 2026, 5:03p.m.
1 h 20 min 31 s
I.  
This testament work.  
Let me.  
They can ask about your men now.  
I call someone.  
Oh no, I'm not sure.  
And I'm still trying to discuss it.  
University. The other day, we need a good evaluation and let me.  
Following.  
Oh.  
Let me see my boy.  
Cortana.  
Listen, what about?  
I will be bye bye.  
I'm also an expert.  
Open Excel.  
The.  
Today we will talk about, today we are going to talk about capital budgeting. And today what we will do is continue working with Pamela Money.  
And we will answer the question.  
Do we invest or not?  
And the answer normally is not that yes or our direct yes or no. Is normally we would need to have a reference. How much money do you want? The answer would be a percentage. I want that three percent. I want that 5% of the riddle. I want a 7% of riddle.  
And depending on your answer.  
We will see if the investment is worth it or not.  
Today, we will talk about capital budgeting, but before starting a month, especially for you, we have an answer. These questions regarding the other day also.  
I'm gonna share with you today's slide through WhatsApp.  
I'm gonna share slides, session 10.  
And were you?  
Finance for 2000, here we are.  
Here.  
The slides and try to follow them, try to read them, and see you soon in one minute.  
Okay.  
Okay.  
First, on these slides.  
Thank you.  
And then...  
I've got more slides, but I will, sorry, more things back later. I want to start.  
Hey, that task was there.  
Last class. This is last class. Last class was a critical evaluation. Last before we introduced this whole model.  
Yeah, last class, we were, we went deeper in the GP at least for mobile.  
A third place.  
Three dollars of dividend that trades at 60 and its dividend growth 4%. What return does the market expect?  
Then you got my third one.  
I think simple price and 60 price is equal to be the one over. OK, 90 yep.  
We know price, we know the dividend, we know the wrong rate, yes. So let me say K minus G is equal to dividend one over price.  
So...  
It's going to rate this.  
Even one is 3.  
Over 60.  
Three over 60.  
Glass.  
Four percent, yes.  
Three over 60, please.  
One over 20.  
One over 20 is 5%.  
So, 9%. Yep.  
A firm pays out 40% of its earnings and earns some return on equity.  
Of the person.  
I recommend you.  
I recommend you to try these exercises by yourself. There is no point in me telling you how to talk.  
A fair place of 40% of its earnings.  
So, low bank ratio, low bank ratio is the percentage of earnings that the company will keep with themselves.  
Somehow, dividend year T is gonna be equal to earnings year T times.  
One times lower numbers.  
And D., and in this case, I don't care about that. I don't know if there is unearned return on equity of 10%.  
This is much more simple, and the other day we get that this is the percentage of earnings that will stay in the that will stay in the company.  
These times, we turn on equity, that is what the managers are doing with their money. It's equal to, so.  
If a company pays out 40%.  
If the company pays out 40%, low average is 60%.  
Sixty percent times return connectivity is equal to.  
Perfect. Thanks. In person.  
Yeah, it's equal to a row of six percent.  
Okay.  
Return on it to be 3%, then.  
And the expected return from the market is 10%.  
This one is absolutely important for me, you to understand me.  
Is this key?  
R is what the market expect from me.  
R.  
is what the market is expecting from me, is what my self-holders expect from me.  
The holders.  
to get a 10% of Redondo.  
And managers, if they keep their money, if they keep your money, because you are a supportive.  
They keep it inside the company, are they just a main person?  
What do you prefer? A 10% in your pocket?  
Or?  
me investing in your money and getting an A person.  
Did you expect a 10%?  
You should not let.  
The managers will repay their money.  
Manager should not, you know someone to say.  
That percent is what the market is expecting.  
Eight percent is return on everything, what the managers from his side can do.  
So, should the firm keep its earnings or pay them or pay them out, companies should pay out the earnings. Make sense?  
In case they will be, you are not going to understand this amount, but review last class and once you review it.  
This will make it. You will not understand me because you don't know what that's what I'm gonna say me.  
In case.  
Return on equity.  
is higher than expected return.  
In case this company has a flowback ratio higher than one, yes?  
PBGO present value growing opportunities would be negative.  
What is the present value of growing opportunities? We saw it last night.  
the difference between the price of the company and what we call the price of the company in case there won't be a growth. So if return on equity is lower than expected return, PBO will be narrow.  
There's some kind of problem opportunity would be there.  
And then, in actual states, in the disco model, why is the gold run price at year T?  
It's called...  
Let me understand.  
In this home model, why is the Gordon price a year T?  
Is called T periods and not T + 1.  
Yeah, let me start.  
It was gonna.  
In the two states.  
This is bad, yes?  
Two states, because that is the one.  
Do you then, too?  
Do you have free?  
and dividend in year 3, for example, is going to be constant.  
Let me call it.  
Me, yes, yeah.  
The 2 states is, there are two states. This is 1, two, and three. Yeah.  
Thirty steps, price is.  
Prices.  
than 1 over 1 plus R.  
Plus 2 1 + r right to the second. Are you following me? I'm just calculating present value less.  
So, I'm just calculating price as present value of future pressure.  
Be the 1st and the 2nd, yes? And now, from year three in advance.  
We are going to have a constant reading, for example, yeah?  
I need to have here.  
Price one over R, right? The second, the price of the company that will be present value of all these different. Make sense? So, that's P2, yeah, this is P2, and what is P2?  
What is the price in year 2 in this case is?  
Maybe then, three.  
Over, OK, because we separate energy, makes sense.  
In case there won't be growth, given three over K over, yeah, given three over, in case there were, what I'm saying is why this is called the two states, because there is one first states.  
That is calculating.  
the dividends, that present value of the dividends that came in first states, and then I will calculate future value as considering the price in year two or in year two. The question they are asking is,  
Why? Why we are calculating price in year 2?  
when the dividend will be paid in year three.  
When we are calculating price in B.  
When the dividend happened in t + 1.  
And the answer is because when calculating a perpetuity.  
for calculating the price of my perpetuity. I always consider the dividend that is going to be paid next year. I don't calculate the perpetuity starting from today.  
Yeah.  
Then P2 is D3 over, you said R minus G, right? P2 is D3 over R. Watching that D3 is going to be constant. In case there will be growth, P2 will be D3 over R minus G. Like the example we did the other day, there was growth, right?  
Yeah, so then you do this. Yes, and then D3 is P2 * 1 + g. P3? Sorry, D3. How about you calculate D3? Depending on the example, but you will be told. For example, I'm going to create a new one, yes?  
You learn India one, please.  
Yes. And then someone should tell you what will happen between year one and year three. The example we did the other day, I don't exactly remember, but I think that during the first two years, there was a low rate of 25% total.  
Yeah.  
Dividend 2 is gonna be.  
Two times 1.25.  
PV then three.  
2.1 point 25, right to the second? Yeah, that is 1 plus 25%, yeah.  
And imagine that from year three in advance, road rate will be, instead of 1.25, will be a 5%.  
Yeah.  
So, in this case, in this case...  
Did we then in year 6?  
He's gonna be.  
Two times 1.25, at least even year three.  
Yeah.  
Times.  
1.05.  
Price 2, this is the entry. Price 2, 4, 5, 6, rise to the.  
But you don't need to complain this.  
I think.  
Yes, yes.  
Actually.  
I make all these things in order to see.  
You are.  
Why is why is it?  
Why is? Oh, because of the... yeah, okay.  
Versus Ana, how would you calculate the price?  
If you then one over one plus the rate that is 5%, for some, I'm sorry, is going to rate should be higher than 5%. So, imagine that is going to rate this, the rate the return is 6, 10%. You plan here, if you then one over one plus whatever.  
Begin to over one last hour and raise to the second, and now hold when you can play, praise two.  
By true.  
Will we be then?  
Read.  
Over, that is come to break.  
Magnus.  
Five person.  
Yeah. And you add all of them together. Yeah.  
What are we doing? Summing future customers. At the end, we are considering that the price of the stock is the sum of all future customers.  
If you remember bonds, hopefully we calculate the price of a loan by calculating present value of future bonds. Make sense?  
Okay.  
Any questions?  
Hey, great.  
What are we going to do today? Then we will continue working with present value. Today I introduce the concept of net present value and we will see what is the internal rate of Redondo.  
Okay.  
From sales to project.  
Last week, no, last day, and whatever, same formula.  
To inputs, we make the gas flows. The project is worth more than it covers the firm and its share price is worth more. I prefer how are the decisions made.  
These are examples of decisions, the ideas.  
I need to invest an amount of money.  
From this investment, I will get future cash flow.  
Should I take the project or not?  
And in these cases, here you got examples of Tesla announced the construction of a new plant. Yes, for filter car. What are the numbers Tesla has done in order to overtake the project?  
They should have.  
But yet, if you talk as close, they are waiting in order to get one return.  
And we will see today how these decisions are invented, yeah.  
Examples of decisions. Should we launch a new project? Should we have a new market? There are tons of decisions.  
Investment decisions. Should I buy a bridge? Would be an investment decision.  
Do they buy athletes? The problem with athletes is that you are not going to have future cash flow.  
You will need to have incomes, but yes, incomes will you to take out expenses and because flow is something that you will see when talking about corporate time.  
This is just an introduction for when you see corporate finance, and this is here, yes, in order to understand relationship between time and value, time and money.  
Okay. Capital budgeting process, a time investment, estimate expected future cash flows. I prefer just to see one example. Here, here is one example. Yes.  
A cloud computer.  
A cloud computer field considers upgrading its data center in Texas with the latest chips.  
What is the name of this cloud computer computing?  
computer. There was one investment in Texas from DSMC, but they were not a cloud computer. They were manufactured chips. That rate will cost 20 million.  
Is here, I'm next, so...  
Today, yeah, one, two, three, 4, and so, yes.  
They are going this negative 20 and negative 20, yes?  
Once up and running, it will generate incremental free cash flows of 30 million or 30 million in two years and another 30 million in three years.  
After which, the new teams will pull it everything, yep.  
So, the idea is, once up and running, it will generate an incremental free cash flows of 30 in two years and another 30 in three years.  
Say it, I'm sorry.  
The firm has determined that the aggregate is concrete is 8%. They want a return of 8% or high.  
What is?  
Met present value.  
Then present value.  
is the sum of all cash flows, present and future. What is the problem when shamming money from different time?  
that money pay in the future worthless. What do we need at this country rate? Which rate will we use at 8% rate?  
So, the present value is, how much worth 20 EUR today?  
20, sorry, 20 million EUR, \$20 million today, how much less more?  
Waiting.  
Because he goes out of my pocket, and I think, yes.  
Minus 20 / 1.08 30 / 1.08 raised to the second plus another 30 / 1.08 raised to the third. Yep.  
Let me come here.  
Day one, two, three.  
Nine is 20, 9 is 20, 30, and 30, yes.  
It's going to rate this a percent. I can calculate this directly with the net present value. I want to 1 + 8 percent fix it.  
Right, through the zero, yes.  
Play.  
And.  
I send this.  
I will bet that net present value is negative 6.25%.  
So, if the discount rate is 8%, should I overpay this project or not?  
If net present value.  
Will be 0, I should not cover the integral.  
Why this country rate will be 4%?  
Ohh, careful.  
That too, because I have forwarded it.  
This is.  
It looks ready.  
Yeah, if this is an 8%,  
Yes.  
Can you follow me?  
If there is going to rate the same percent, I calculate present value of future cash flows and I get that present value is the present value is select. That is possible. So would it make sense to overpay the project?  
Yes. If the firm was looking for instead of an 8% return, 10%,  
Still, 50%, imagine that they are looking for more Redondo.  
Twenty percent.  
Twenty-one percent.  
25%, oh, 25% is negative, 24% is negative, 23, 22.  
22.5.  
Do you understand? Do you see what I'm doing?  
I'm looking for 22.4.  
22.45, 22.46.  
The 2.47.  
In 2.48, oh yes, 22.47. What are you doing? I am increasing the higher the return, the lower the price, net present value, no? And there is one point where net present value change from positive to negative.  
It's a big spoiler of today's class. This point when internal rate of return change from positive to negative is called...  
IRR, internal rate of window. Yes, let me here calculate IRR.  
And I love this.  
22.47. Yep.  
Are you with me?  
Let me do one more thing.  
Instead of this is IRR, I'm going to write here an 8%, yes. I have calculated net present value at an 8% rate and I get an 11.01, yes.  
I'm gonna use my present value formula.  
At that 8% grade? Yeah.  
Of this.  
Oh.  
Is it the same number?  
What is going on?  
I told you that this is the present value. I have used net present value Excel formula and I don't get the same number.  
What is going on?  
Careful with formulas, because if you introducing a formula garments.  
What are you going to take from the formula? Average, average, trash, you need to introduce trash, crasi, crasi.  
Yeah.  
The problem is here.  
When you yesterday work, when you yesterday, when you use this homework.  
Excel is thinking that this granulos will happen in year one.  
at least is happening today. In order to calculate this properly, I should calculate net present value of this and then subtract 12.  
Let me do it.  
Here, I wanna come play next present party.  
Of this.  
And then?  
I will add.  
I used to it.  
Marín.  
What is the problem?  
Yeah, I mean, the number is for it.  
The number is...  
Yes.  
Understood.  
We are not seeing anything new.  
We are just working, we have been working with Pamela.  
Direction to finance.  
It's a course that we can change the name of the course, at least the first term, the first before the meeting, we can call it mastering in time value model.  
We are working with Pamela money formula from one. Also, you should know what is a bond, what is equity. At the end, what are we doing? Working with Pamela money.  
So, let me, if the firm has two million shares trading at 100.  
What will be the new surprise when the project is announced?  
If the firm has 2 million shares.  
Three 100.  
Yeah.  
Two million serves training at 100. What can we get?  
Okay, yeah.  
I'm gonna go.  
And.  
2 million sets.  
Two million at 100. Company worth 200 million. Yes.  
Once they announce the project.  
If the expected return of their shares is 8%.  
Company's price should increase, should rise from 200 to.  
Two 111.  
Yep, new price is going to be 211 over the number of serves.  
It.  
11.02.  
The same number, yes, is the same number, but...  
Yeah.  
OK.  
Now.  
Hey.  
The present value mesh resource, how much value a project creates to the firm, shareholders?  
And present value is the right capital budgeting technique.  
And personally, I'm a finance guy.  
I'm not.  
I'm not.  
M&A. I'm not a project manager. I'm a fighter. I like my present budget. I'm not too much. Why? Because I prefer. We are going to see through today's capital budgeting at the end.  
I need money. The answer is, how much money do you need?  
And that percent value tells you to understand in terms of value. If you invest, how much you would invest. But in my finance head, if you tell me how much.  
Yes.  
How work is the project?  
I will never look at this person value. I will always ask you for ayara.  
I would love you. How much is the project worth?  
Personally, I would prefer to know to hear that person.  
But you understand what I'm saying? For capital budgeting, that person value is the best thing. But because I am finance, I will always ask you, what is the Redondo?  
How much money are you going to get? And don't tell me 100 million.  
Tell me, Ana percent.  
Today, we will talk about that. The present value is adding that a project that give you 100, another project give you 150, you do your company's both, you will get 250.  
Careful, you will get it. We are talking about the future. What is going to happen in the future?  
We don't know, we can guess estimate, yep.  
Hey, now.  
What is the internal rate of return?  
The internal rate of return is the rate that makes net present value equals to zero.  
Among all different rates, the internal rate of return is the rate that makes the present value 0.  
We have that project, yes?  
That project, the project that we have seen before.  
If the rate is 8%,  
Everything that is possible.  
If the rate is 50%, the present value is negative.  
What is the rate that makes the present value 0? We have calculated that means.  
Around twenty-two percent, yeah.  
IRR is not a cost of capital. No, it's just the rate that makes the present value equals to zero. It's the rate if you tell me how much does this project cost?  
What is the return of that for it? I will have transferred you back for the two person.  
Investing in that project would be the same as buying a bond with a 22% of Redondo. Therefore, because the bond is less risky.  
If it is a public vote, why you will receive future cash close for sure.  
In this project, we don't know you're gonna get more money or less.  
But without considering Greece.  
This project.  
Promise me a 22% return is like buying a bond that will have a 22% of return.  
Okay, how to solve it?  
How to sorry in case  
In case you have just one period of time, or in case you have...  
Do you remember the HPI?  
Do you remember it? Yeah.  
present value equals to future value over 1 + r price to be.  
Pizza.  
How do you calculate R from this formula? R is equal to user value over present value.  
One over 3, my work this.  
This is the HPR.  
And if you have more in the future, money today, HPR is future value or present value, if you have.  
One investment and a payment paid in the future. This is also the.  
for just one payment. What is the problem with flow? Instead of having just one payment, normally we will have multiple payments.  
Knop.  
If you have multiple periods, how can you calculate?  
PRR.  
I have already calculated this INR by using two methods, two different methods.  
Where is Miguel? I just made it.  
You remember, I have gone up, gone down.  
I have 50, Mrs. Miguel.  
Hold on, I went up, then down, and rule of thumb, rule of thumb.  
Yes, approximate that.  
And also you can use the IRR. So here IRR formula. I will never ask you to calculate an IRR.  
In that example,  
Yeah, if you use, you will get that twenty-two.5 percent.  
Yeah.  
Ayahar is a project due to maturity.  
Absolutely, yes.  
La Palomo with its price.  
You remember, you have a bond with its price, the bond will pay its cost, and you will have at the end face value present back. How did we calculate the yield to maturity of the loan? I calculated with the IRR formula.  
The price is how much you are investing and future cash flows are future cash flows. And the present value is getting the difference between what I'm paying and the money that I will receive.  
And the same that it has the. It is a summary of the cash flows, not the market rate.  
Yes.  
What is market rate?  
We should ask, who? What is Mirete Ray?  
Did you ask who? Where can you find markets rates?  
You can ask.  
You can ask also the deal both.  
And from the deep proof, you can get the discounting rate and you can calculate the price.  
Bye.  
What does?  
What does in this project, 22.5% tells me about the market?  
Awesome.  
It's from inside the project, yep.  
Mind that the project is paying at 8%, the market is paying at 8%, I can say that this world may present value.  
Yep.  
Okay.  
Yeah, make them a recovery door.  
Why we're talking about?  
At present value.  
We were taking projects with.  
Net present value, and we will not underpay a project with a negative net present value, yes.  
When talking about?  
What is the rule?  
we will pay, we will undertake projects whose internal rate of return is higher than the rate the company deserves. In this case, how much the company wants? An 8%.  
Why is the IR under the project? 22. Should we undertake the project?  
Yes.  
Make sense?  
Okay.  
Thank you.  
I don't like this is like the ones that came up too too much, but...  
Normally, I have a and the person value needs say.  
Wait. Wait.  
When we will have discussions.  
Is there any exercise, is there any example, or can you think about one example when we think about IRR and net present value, we can have a project that by using net present value, we will get  
For example, we will you should take the project and when you see IRR, you will get just the opposite decision.  
There are special cases. We are going to go through these special cases. And normally, most of times,  
You will get the same result, so it met present value tells you to undertake one project.  
Normally, the IRR rule will tell you to undertake the code.  
Yes.  
These are, and we are going to see these three examples. Let me not borrow.  
Nobody.  
This project is, I buy.  
I buy, and I get the future of Calvo.  
Instead of buying.  
You will be selling.  
The IRR will change the time. Instead of buying, I am selling, I will look for a negative net present value and I will prefer a lower IRR.  
That mistake, yes.  
Instead of lending.  
I am more growing. If you are lending, what you would prefer? The higher the result.  
If you are borrowing, what do we prefer? The lower, there we go.  
You are lending, you would prefer to receive the much, the more money you got.  
If you are borrowing, do we prefer to pay the less money?  
Hey.  
All the ball INRs.  
We are going to see now, and then multiple mutually exclusive projects in this case.  
And you should choose between one project and another one. Imagine that you invest 100. That's 100 EUR.  
And you will get an IRR of same person.  
And on the other hand, if you do this investment, you cannot do a second one. But the second investment has to do with investing. One million and receiving just a 1%. You don't have any other choice. You should choose between investing 100 EUR and getting a 30% or 1000%.  
or invest in 1 million EUR and getting at 2%?  
I would prefer the second one, because I will get more money at the end.  
But normally, this is hard to find. Yes, let's see this thing with three examples.  
First idea.  
If instead of...  
Play me my money.  
I will be borrowing.  
That's the sign in this. Make sense?  
Everything, instead of me.  
When it was positive, it becomes negative, and when it was negative, it becomes positive.  
OK, so is that the hardware like?  
Normally, when you will undertake the project.  
If you are going to invest your money.  
You will undertake the project when IRR is hired.  
That the return you are looking for.  
Yes.  
It's easy if you aren't in your body.  
But if you are following.  
Where will you?  
Receive your money.  
When you are asked to pay back less than the maximum you are able to pay.  
I need it, I, I will, I will pay more than at 10%.  
Would you pay me another person? No, because my billing is the person. Just the opposite. Make sense?  
Yep.  
Knop.  
This is the one that.  
I'm gonna do these numbers.  
Ten 1000, 7000, 10,000, 12,000, and...  
I got me.  
Yes, 107.  
We come here.  
Then.  
Ten 1000.  
Maybe.  
I.  
Enthulging.  
Yeah.  
Seven.  
Then.  
Well...  
Again.  
And what?  
What is?  
But I'm gonna have...  
I'm gonna do your person.  
Zero plus 1%, yep.  
And what I'm going to do is to calculate the present value.  
Four.  
Different windows, yes?  
I'm gonna use net present value forward.  
My baby.  
Of look how I'm gonna do the present value of these future cash flows.  
Plus minus construction, yeah.  
All of you know, all of you know.  
I use this, all of you know why I'm doing this.  
In this way, why am I not using the present value of everything? Because first 10,000 will be paid in years ago.  
No, please, minus no, plus this one, yep. close that value is negative.  
Ohh.  
Whatever, I'm going to repeat the formula here, because probably you can calculate these numbers.  
Seven, then this is higher than this; I cannot get that present value.  
Yeah.  
I'm going to calculate the present value.  
No, see your person, I'm gonna go do.  
May they send value?  
Oh, I was missing the rate, I think.  
I was missing it right. Sorry.  
At present, this I was missing the rate.  
Yes.  
And again, the full function.  
Plus, we want function. Yep, I was missing the ring.  
I got these.  
What is 490? If the discount rate is 0%, 490 is the sum, yes?  
Yes, Sir. Hello.  
I am increasing this.  
Start with 490, it goes up, then it goes down, it goes down. But why is why this is negative going down? Because at the beginning, this 10,000 were a lot.  
As the rate starts decreasing.  
as the rate start throwing. At the beginning, all cash flows were the same. If this country rate is 0, it's just something, no?  
And, at the beginning, this is negative because this works a lot. Yes, as I start increasing this, as I start increasing this, this is worthless.  
And these cash flows work more, yes? And when I increase a lot the rate, future cash flows will work much more or less, and these 10,000 will work more. Make sense? Do you understand what I'm saying?  
Amanda, let me repeat.  
As I increase the rate, come on, as I increase the rate at the beginning.  
If rate is 0, this 19,000 that will be paid in year 4, and we need this work a lot.  
A sign you can be celebrated.  
These 7, 10 and 12,000 start working more than the money that will be paid in the future.  
No one.  
Money paid in the future, as I increase the rate, worthless.  
At the beginning, if rate is 0, this is negative because it works out.  
It does sound like a million.  
Let me do it in a different way. Right, please, let me ask that. Yep, the rate is 10% is over 1 + 10%. Let me fix this function.  
Price one, this one, 10,000.  
And completely president.  
Right, by these things.  
Ohh, it takes because I have no documents.  
movie.  
Yeah, net present value.  
I don't want to create confusion. I want to explain things in a clear way. I don't want to make things more confused than...  
What I'm doing, I'm calculating.  
The present value of this, yes, at the 10% rate if I come here.  
Ten percent.  
I would see that this is not the same number, so I am making one mistake.  
I'm very nervous.  
This is 12. This is OK. This is 12. Let me see if this is.  
This is also correct.  
I want to go there.  
Let's put one percent.  
Why this is not the same?  
This number, and this number should be the same, this number, and this.  
Good Max.  
I am calculating the present value.  
Here, I'm calculating.  
In Belén.  
Oh, yes.  
I know why this number is not the same. Do you see that installer is not there?  
I want it right.  
You.  
What is going on?  
Let me copy it out.  
Put on some of these.  
These are, this number is important.  
His number is important. Can you see why?  
I'm using the present value formula.  
See what I'm gonna do.  
When I present value.  
be great.  
Okay.  
This.  
Please.  
Yes.  
Yeah.  
OK, now this max.  
What I was doing, I don't know what I was doing incorrect, but I was doing something incorrectly. This is 1% big max, this is 2% big max, yeah.  
Now things work, I'm gonna go here, place this, and...  
Would, why is not?  
Yeah.  
The point is, if this is 0%,  
This is negative, why?  
because of this one. I'm going to calculate the weights. I'm going to calculate how much this weight, yes, over the price function.  
Therefore, yeah.  
I'm gonna use that person. It's careful with weights because there are weights positives.  
And, yes.  
It waits two seconds, yeah.  
And this way, Susan.  
By some all these weights, it should some 100%, yeah?  
Maybe yes. If he is 0%, look what weighs the most. That's one. Yes.  
As I start increasing the rate, yes.  
The money that the negative money that will be paid in the future will be worthless.  
And this is 4%?  
Five percent, 4%. Do you see that here it passed from positive to negative?  
I don't know.  
I don't know why these numbers have taken. These numbers should not be taken.  
No.  
Now, so now these numbers, settings, life is great, and everything is OK.  
If it is a 0%,  
Why this number is changing? Remember, change is like a border race.  
I wanna cry.  
Why?  
Ohh.  
Sing.  
Please.  
Now, these numbers, sorry.  
Three percent, 4 percent. Don't you see that this 4% is twenty-four, and here is between 4:00 and five is an internal Redondo Redondo. Why this happens? Because.  
Peace.  
I mean, this is almost zero, net present value is almost zero, so...  
This worth a lot and this also worth a lot. And now this is 0 because the money paid in the future matters. Now, if I continue making the rate,  
Ten percent.  
Twenty percent.  
Twenty-five percent.  
Thirty percent, you see that? Oh, it's negative again, 20%.  
Twenty-one.  
Twenty-two.  
Three, twenty-five percent.  
Forty percent.  
Let me look for the second.  
Here, it's around twenty-eight percent list.  
Here now, in 28 percent.  
Again, it's negative, but it's not because it's money paid in the future. That worth a lot, but if you see money paid in the investment worth much more. Yes? And for example, if I make this,  
Right, yes.  
Forty percent, yes, 50%.  
The money that is being paid in the future worth less than the amount of money that will be paid today.  
This is just here to illustrate the graph. If I, because I have this here, if I take this graph,  
Right, hey, Vega.  
Right, they, these graphs.  
I will get.  
The same time, the screen is important.  
In order to have sync it out.  
Here.  
Um...  
We'll have something like that.  
Knop.  
Yeah.  
Please, I don't want you to delegate.  
Two months time.  
For understanding this exercise, yes?  
If you have understood it, you have understood.  
Oh, careful, because this is a different exercise than the previous one. Yes.  
If you have understood this now, it's okay. But if you need to choose, for me it's much better due to understand the present value of growing opportunities.  
Yep.  
Makes sense.  
More things, more projects. IRR per dollar. This is what I have told you. We are talking about mutual, mutually exclusive projects.  
You can have a project that will give you has a low invest high return, but if you perform this project, you can they are mutually exclusive.  
There are times that doing one project in.  
Don't let you make another one, and yeah, buddy.  
Now.  
In my head.  
Probably one person from corporate finance will tell you the oppos, yes?  
HBR.  
Effective time already, APR. Yeah, I don't have it yet, but I probably I will make a tattoo. Tattoos have been made or done? Are we made or done? Tattoos make. I will make a tattoo. I will do a tattoo.  
Heart.  
Inside the name of my wife, Diana, my techniques.  
And then I.R.R. is last and in Spanish. Period.  
You understand what I'm saying? How many women there are in the war?  
I don't know. We are 8,000 people, so half.  
I would tattoo how many Diana there are in the world, but I am that, but just one.  
How many?  
yields, APR, effective annual rate. That's what I'm saying.  
But I like Arroyo.  
Because I had a...  
It's just, they, you pay the data, ohh, the HPR is telling me the IRR.  
Yeah, I already said 5%, yeah, so I don't want to read this supply.  
Because probably my wife, there are times that is not the best because of whatever, but I in my tattoo is written, "I are, yes."  
Look, is often and relabeling ranking projects of different length and scale.  
My wife high is 150, I don't know, in feet, 150. This is small, but it's better.  
Do I like Diana?  
Yes. Is IRR important? Yes. And if you find someone in corporate finance saying that IRR is worse than net present value, what do you tell him or her? Yes, it's better. But at the end of your heart, you know that there is someone in Madrid saying that IRR works.  
Make sense?  
Yeah, whatever.  
Payback rule.  
We are talking about analyzing investment. Today I want to finish on time, 15 minutes, 5 minutes left, but I will go, the forecasting will have already. That is net present value and IRL. Yes, but also you have an investment, you have invest 100 and the payback is the time.  
When you will get your money back.  
And the number of years and in the community discuss flow exceed the initial investment.  
Only asset projects that they are the initial investment within a certain time frame.  
I want to get my money back in two years back.  
He's away three years.  
I will not underpay the code. Make sense?  
Example of the payback rule. Considering consider the following three projects.  
One 1000, you have, yes, in this case, you have two years paid up, two years and 10 years.  
If you consider this discounted rate, net present value of the project, you will choose C. If you are choosing by net present value, you will choose project C. But the payback of years three, of project three, of project C will happen in year three.  
So if you consider the payback rule, you will not undertake this project.  
But if you consider the present value rule, you will underpay this word, yeah?  
Ohh, I need time. What do managers do in project in practice?  
What do managers do in practice?  
If you see at this question in the middle, that is us, what is better?  
The answer would be IRR. Yes, no, just give me more. Just give me whatever. You understand what I'm saying, no? What do managers do in practice?  
Managers normally think in terms of money. And I have told you at the beginning that I have to do more with finance. If you are analysing money bones, getting worse, if you are not analyzing things, you thinking because, yep, I want to, yes, my present value here always work, we sell this, whatever.  
We will talk about that yes present value. We will see this. And at the end, most of them, we are options we will see later, most of them.  
This may present value formula, present value formula in somehow or another, yep.  
Before the midterm, yes, this is the flyer. Sorry for that. Two minutes.  
Ohh, another thing in the syllabus.  
The term in the syllabus is set to take place Friday, the 16th of October.  
Would you have any problem I need to talk with Natalia, if midterm instead of having Friday 16th?  
Friday, 16th, there is no class and we take the midterm Monday. The next Monday? Yes, 16th is Friday, 19th.  
for me too. And regarding what you, anyone would like to take the final exam before they release?  
You have been, yeah, they told us it was the 9th, but the last week of classes were the third group with, and I don't have any other finals.  
Yeah, last week.  
I have a phone number.  
If anyone wants to take it early, if one person takes that, one has to do the phone. I mean, if anyone wants to take it early.  
I'm having a problem. Thinking about you that you passed me, and if anyone else is in your case, I'm not sure yet. I think, like, don't worry. Don't make too much noise.  
What I mean is not to start testing, because if anyone asks me, Luis, have you changed? Ohh, because I have another type of that.  
When should we? Yes, this is. What should we tell you guys if we want to take these in?  
Before just anytime, because Fred has asked me and I want to give you an answer back. This is reader and this has these are instructions regarding the regarding the meter. You are allowed to pay.  
to have two seats, this one and one made by yourself. This is, I will give you another one in the meter, yes? But this is, yes, this is a formula seat. You can bring your own, yes? And then here you go, some for meter A,  
And sample meter B.  
All this information is uploaded to Blackspace. Yes? I will upload solutions. Oh, please. You have. Oh, for Anastasia. I will take all this for Anastasia. If you have, there is one more. Oh, yeah, please.  
So, I will upload, I will upload solutions. Yes, when you ask me to do it, but I don't want to upload it now, because I prefer you to work without looking at the solutions.  
And we will delete Friday the 16th. Probably we won't have class because I have a trouble and.  
University, and I should go, but the day before the 16th, that will be Wednesday, we will review everything.  
Yeah.  
Any questions? No?  
Go through this. I think these are not so complete. What you will find in the midterm will be more simple than the second one.  
But you should do it by yourself.  
What I mean is that you just copy the sample meters without thinking.  
We thought it would be a little bit more difficult. You have to see three-point you are coming.  
But.  
To, because I know the office.  
I think so. I think so. Yes, and yeah, what's up? I have the first one, I have the first one, the first one is just regarding exercise. A program set that is not going to be Redondo, but I have shared with you the solutions, so just check.  
Yeah, welcome.  
go to the Excel sheet and the go to the Excel, go to the transcript, through the slides, and I will answer all questions before. There's not much if I did this for you and I understand. Yeah, it's not much. Oh, thanks.  
Hey, I think a lot of questions. Ohh, hey, I have for all my class.  
But normally, are you racing or not? Sometimes, but like sometimes when it's not gonna work it's like...  
Oh, sorry.