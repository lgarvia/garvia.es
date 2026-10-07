---
titulo: "Foundations of Finance – Session 12: Incremental Cash Flows and Project Valuation"  
fecha: 2026-10-07  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 12  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---
# Foundations of Finance – Session 12

## Incremental Cash Flows and Project Valuation

**Date:** October 7, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 12 was the **last class with new content before the midterm**.

The session connected the previous two blocks:

- Capital budgeting: how to decide whether a project creates value.
    
- Free Cash Flow: how to identify the cash flows that should be valued.
    

The main topics were:

- Review of multistage equity valuation.
    
- Terminal value and valuation dates.
    
- Review of Free Cash Flow.
    
- Earnings versus cash flow.
    
- Incremental cash flows.
    
- Sunk costs.
    
- Opportunity costs.
    
- Working capital.
    
- Depreciation and tax effects.
    
- Project-specific cash flows.
    
- Net Present Value as the final decision rule.
    

The central idea was:

> **A project should be valued using only the cash flows that change because the project is undertaken.**

---

## 2. Review: Multistage Equity Valuation

The class began with a review exercise involving a stock that:

- Pays no dividends for the first five years.
    
- Pays a dividend of \$1.20 in year 6.
    
- Grows dividends at 10% for nine years.
    
- Then grows at 3% forever.
    
- Has a required return of 11%.
    

This is a multistage Dividend Discount Model.

The basic principle remains:

$$

\boxed{  
P_0=PV(\text{All Future Dividends})  
}  
$$

The first step is to forecast dividends during the explicit growth period.

For example:

$$

D_6=1.20  
$$

$$
D_7=1.20(1.10)  
$$

and so on until year 15.

After year 15, growth becomes constant at 3%.

---

## 3. Terminal Value

Once stable growth begins, the Gordon Growth Model can be used.

The terminal value at year 15 is:

$$

\boxed{  
P_{15}=\frac{D_{16}}{k-g}  
}  
$$

where:

$$

k=11%  
$$

and:

$$

g=3%  
$$

The important timing rule is:

> **The Gordon value is calculated one period before the first dividend included in the perpetuity.**

Therefore, if stable growth begins with (D_{16}), the terminal value is calculated at (t=15).

---

## 4. Valuation Depends on the Date

The exercise reinforced another important idea.

If we want the value at year 5, then year 6 is only one period away.

Therefore:

$$

P_5=  
\frac{D_6}{1+k}  
+  
\frac{D_7}{(1+k)^2}  
+\cdots+  
\frac{D_{15}+P_{15}}{(1+k)^{10}}  
$$

If we then want today's value:

$$

\boxed{  
P_0=\frac{P_5}{(1+k)^5}  
}  
$$

The formula itself is secondary.

The important question is always:

> **From which date am I calculating present value?**

---

## 5. Terminal Value Can Represent a Large Part of Value

The class calculated how much of today's stock value came from the terminal value.

This was approximately:

$$

55%  
$$

The lesson is important.

A large part of a company's value can come from cash flows expected far into the future.

Therefore, valuation can be very sensitive to assumptions about:

- long-term growth;
    
- required return;
    
- terminal value.
    

This is why relatively small changes in $k$ or $g$ can produce large changes in estimated equity value.

---

## 6. Review: Earnings Versus Cash Flow

The class then returned to Session 11.

The central distinction was:

$$

\boxed{\text{Earnings} \neq \text{Cash Flow}}  
$$

Suppose an asset generates accounting earnings of:

$$

5  
$$

after depreciation of:

$$

10  
$$

and the tax rate is:

$$

20%  
$$

Taxes are:

$$

5(0.20)=1  
$$

Accounting earnings after taxes are:

$$

5-1=4  
$$

But depreciation is not a cash payment.

Therefore:

$$

\text{Cash Flow} = 4 + 10  
$$

$$
\boxed{\text{Cash Flow} = \$14}  
$$

The difference is the non-cash depreciation charge.

---

## 7. Why Depreciation Matters

Depreciation itself is not a cash outflow.

However, it reduces taxable income.

Therefore:

$$

\boxed{\text{Tax Shield} = \text{Depreciation} \times \text{Tax Rate}}
$$

This means depreciation affects cash flow indirectly through taxes.

The key distinction is:

> **Depreciation is not cash, but the tax savings produced by depreciation are cash.**

---

## 8. From Company Valuation to Project Valuation

A company contains many different projects.

Its total cash flow is the result of all those activities combined.

If the firm undertakes a new project, that project changes the company's future cash flows.

Therefore:

$$

\boxed{CF_{\text{Company with Project}} = CF_{\text{Company without Project}} + \text{Incremental } CF_{\text{Project}}}
$$

Capital budgeting therefore focuses on:

$$

\boxed{\text{Incremental Cash Flows}}  
$$

These are the cash flows that exist **because the project exists**.

---

## 9. The Incremental Cash Flow Principle

The key question is:

> **What changes if we undertake the project?**

If a cash flow occurs whether or not the project is undertaken, it is not incremental.

If the cash flow appears only because the project is undertaken, it is incremental.

This gives the basic rule:

$$

\boxed{\text{Incremental Cash Flow} = CF_{\text{With Project}} - CF_{\text{Without Project}}}
$$

Only these incremental cash flows belong in the project's NPV calculation.

---

## 10. Sunk Costs

A **sunk cost** is a cost that has already occurred.

Suppose the company paid for a feasibility study last year.

That payment cannot now be reversed.

Whether the firm undertakes the project or rejects it, the money has already been spent.

Therefore:

$$

\boxed{\text{Sunk Costs are not Incremental Cash Flows}}  
$$

They should not be included in the NPV calculation.

The past cannot be changed.

Capital budgeting is about how today's decision changes **future** cash flows.

---

## 11. Opportunity Costs

An asset that the company already owns can still have an economic cost.

Suppose the company owns a warehouse purchased years ago.

The purchase price is a sunk cost.

But suppose the warehouse could currently be rented to someone else for:

$$

$5,000\text{ per month}  
$$

If the warehouse is used for the new project, the company loses this rental income.

That lost income is an:

$$

\boxed{\text{Opportunity Cost}}  
$$

and must be included in the project analysis.

Therefore:

> **Owning an asset does not mean using it is free.**

Its relevant cost is what the company gives up by using it for the project.

---

## 12. Working Capital

New projects frequently require additional working capital.

Examples include:

- inventories;
    
- accounts receivable;
    
- cash needed to support operations.
    

Suppose a company must buy inventory before it can sell products.

Cash leaves the company immediately.

Therefore an increase in working capital is generally:

$$

\boxed{\text{A Cash Outflow}}  
$$

This is particularly important for fast-growing companies.

A company can have:

- increasing sales;
    
- positive accounting earnings;
    
- rapid growth;
    

and still run out of cash because growth consumes working capital.

> **Growth requires financing.**

---

## 13. Which Cash Flows Are Incremental?

The class considered several examples.

### Existing land or buildings

The historical purchase price is generally sunk.

But their current alternative use or market value may represent an opportunity cost.

### Demolition and site-clearance costs

If they occur only because the new project is undertaken:

$$

\boxed{\text{Incremental}}  
$$

### A study paid for last year

Already paid:

$$

\boxed{\text{Sunk Cost — Exclude}}  
$$

### Management time diverted from other activities

If undertaking the project causes lost value elsewhere:

$$

\boxed{\text{Incremental Opportunity Cost}}  
$$

### Depreciation

Depreciation itself:

$$

\boxed{\text{Not a Cash Flow}}  
$$

but its tax effect is relevant.

### Initial inventories

Cash must be invested in working capital:

$$

\boxed{\text{Incremental Cash Outflow}}  
$$

The most useful question remains:

> **Would this cash flow change if we did not undertake the project?**

---

## 14. A Complete Project Valuation

The final exercise combined the different concepts.

The project involved:

- An initial fixed-asset investment.
    
- Startup costs.
    
- Sales.
    
- Cost of goods sold.
    
- SG&A expenses.
    
- Straight-line depreciation.
    
- Working-capital requirements.
    
- Corporate taxes.
    
- A terminal salvage value.
    
- A required return.
    

The process was:

### Step 1: Forecast revenues and operating costs

Estimate the project's future operating activity.

### Step 2: Calculate accounting earnings

Conceptually:

$$

\text{EBIT} = \text{Revenues} - \text{Operating Costs} - \text{Depreciation}
$$

### Step 3: Calculate taxes

$$

\text{Taxes} = \text{EBIT} \times \text{Tax Rate}  
$$

subject to the tax assumptions of the exercise.

### Step 4: Convert earnings into cash flow

Depreciation is added back because it is non-cash.

Capital expenditures and investments in working capital are cash outflows.

### Step 5: Include terminal cash flows

For example:

- salvage value;
    
- recovery of working capital, where applicable.
    

### Step 6: Discount all incremental Free Cash Flows

$$

\boxed{  
NPV=  
\sum_{t=0}^{T}  
\frac{Incremental\ FCF_t}{(1+r)^t}  
}  
$$

---

## 15. Negative Earnings and Taxes

The final exercise also raised an important tax issue.

If a project generates accounting losses:

$$

\text{Earnings} < 0  
$$

multiplying those losses mechanically by the tax rate may generate a negative tax number.

But this does not automatically mean that the government immediately pays the firm cash.

The actual treatment depends on the tax assumptions of the problem, such as whether losses can offset other taxable income or be carried forward.

For the purposes of valuation:

> **Follow the tax assumptions explicitly given in the exercise.**

---

## 16. The Final Decision Rule

Once all incremental project cash flows have been identified:

$$

CF_0,CF_1,\ldots,CF_T  
$$

the project is evaluated using Net Present Value.

$$

\boxed{  
NPV=  
CF_0+  
\frac{CF_1}{1+r}  
+\cdots+  
\frac{CF_T}{(1+r)^T}  
}  
$$

Then:

$$

\boxed{\text{NPV} > 0 \Rightarrow \text{Accept}}  
$$

$$
\boxed{\text{NPV} < 0 \Rightarrow \text{Reject}}  
$$

Everything studied in Sessions 10, 11 and 12 therefore fits together:

$$

Accounting  
\rightarrow  
Cash\ Flows  
\rightarrow  
Incremental\ Cash\ Flows  
\rightarrow  
NPV  
\rightarrow  
Decision  
$$

---

## 17. Connection with PVGO

The class connected this idea with the **Present Value of Growth Opportunities** introduced during equity valuation.

If managers retain money and invest it in valuable projects, those projects increase the value of the firm.

Similarly:

$$

\text{NPV}_{\text{Project}} > 0  
$$

means that investing in the project creates value.

Both ideas express the same principle:

> **Keep and invest shareholders' money only when the investment creates more value than the shareholders' required return.**

---

## 18. Five Ideas to Remember

1. **Project valuation must use incremental cash flows, not total company cash flows.**
    
2. **Sunk costs are irrelevant because they cannot be changed by today's decision.**
    
3. **Opportunity costs are relevant even when no explicit payment is made.**
    
4. **Working capital and capital expenditures consume cash even when accounting treatment differs.**
    
5. **Once the correct incremental cash flows have been identified, the final decision is still based on NPV.**
    

---

## 19. Before the Midterm

This was the final session with new content before the midterm review.

Students should prioritize:

- Time Value of Money.
    
- Bond valuation.
    
- Yield to Maturity.
    
- Holding Period Return.
    
- Yield curves and forward rates.
    
- Equity valuation.
    
- Gordon Growth Model.
    
- Multistage Dividend Discount Models.
    
- PVGO.
    
- Net Present Value.
    
- Internal Rate of Return.
    
- Free Cash Flow.
    
- Incremental cash flows.
    
- Sunk costs and opportunity costs.
    

The recommendation from class was clear:

> **Work through Sample Midterm 1 and Sample Midterm 2 yourself before asking for the solutions.**

The detailed project-accounting exercise was mainly intended to connect accounting with finance. The essential financial idea is much simpler:

$$

\boxed{  
Value=  
Present\ Value\ of\ Incremental\ Future\ Cash\ Flows  
}  
$$

Understand the cash flows first.

Then discount them.

# Transcription
7 de octubre de 2026, 3:07p.m.
1 h 17 min 39 s
Everything is.  
Yeah.  
First idea.  
This class among these.  
Money's in the way, right?  
Today is the class.  
Place the last class with content before the meter, yes?  
What can we ask in the midterm? Everything we see till today, but what are we going to do today? Wait, today is the last class before the mentor. No, the last lesson with content.  
There will be one more class we will go through.  
or some form meters. I would prefer to go through things you tell me to go through. If you don't tell me anything, I will go through things in particular. And today is the last class we've got.  
That.  
Cast flows for project evaluation. What are we going to do today? We are going to connect.  
Last class with previous class. Previous class, I don't remember exactly the name, but the name of previous class was Adjective decisions for looking at projects net present value. Last class has to do with accounting and finance, connecting accounting with finance and taking cash close.  
And, today, we will start with customers.  
And we will evaluate things.  
What are we going to do today? Calculating the present value.  
And I have yours.  
We will calculate the present value. What we will take in order to calculate the present value?  
Customers and cash flows in Portland thing.  
Up earnings, can you use earnings as as well?  
Earnings, your news of the company.  
And this has to do with access.  
From earnings, we can calculate cash flow.  
But one thing are as close, and another different thing is...  
Art Hernández.  
What is the difference, summarizing a lot?  
In earnings, you think about earnings, there are things inside the earnings that is no money that goes out. For example, the precision, yes. And there is money that goes out from the company that all that year in earnings. I'm talking about the evolution of the...  
Yeah, Carlos.  
OK, having this thing, this idea in my before that, do you want me to go through?  
Any one of the problems and two exercises?  
You have to take it out of it. I mean, you should upload it into brace space. OK, pictures. Take a picture and load it in brace space.  
Do you have any questions?  
Knop.  
OK.  
I will, I will.  
I see.  
I don't have here.  
This.  
I don't have the exercises, I just have solutions.  
And question 6, no?  
This is what it is.  
A company is expected to pay no business for the next five years.  
At the end of the sixth year, at times 6 is expected to pay a dividend of 1.2 dollars per serve. Dividends are then expected to grow at a 10% year for the following nine years.  
So that the last season of the fast-growth phase is pay of time.  
Then after dividends are expected to grow at 3% per year forever. You require return on equities, 11%. Yep.  
This is not a true face dividend. This is a.  
Reface.  
I don't care about how many faces there are. Just two or three. Yeah. But here I should calculate.  
This exercise should be done with X.  
I'm not, I don't care too much.  
Let me, yes.  
Today, yes.  
One, two, three.  
Laura.  
Five years without business.  
Ana.  
At the end of the sixth year.  
It is expected to pay a dividend of 1.2.  
Year 6.  
One.2, yes.  
Enough.  
are then expected to grow at the 10% per year for following nine years. So we have seven.  
The following nine years, so will your fitting.  
14.  
Fifteen.  
This window.  
This would grow.  
Yeah.  
I thought they understand.  
Right. Yes.  
And from here...  
From here, 60 minutes past.  
Dividend will grow at that rate of.  
Three person.  
Yeah.  
I should calculate price, yeah.  
I'm going, I'm not going to, I'm not, I don't want to read the questions, because by reading the questions, I will look solutions.  
That's really.  
What is the expected value of the stock at time 50? Yes? I can figure out what they want me to do. They want me to calculate price today. Value of the company today. Yes?  
How may I can bring price today?  
I calculate the present value of all future customers.  
And this is for Vega.  
Dividend 6 / 1 K R from the rate.  
Arc is.  
11 person, yes.  
Even in six.  
Plus give me the 1 + R rise to the six, yeah.  
given 7, 1 + r tries to be 7 plus.  
Maybe then.  
One plus R raised to the 15, yeah.  
Plus.  
Rise in year 15 / 1 R rise to the 15th. Make sense?  
Inside.  
This price, you can find the rest of the divas.  
Are you following me?  
This place is.  
The question is being asked in question one.  
How can I calculate?  
Price in year 50.  
By Luis.  
Maybe then.  
Your system.  
See?  
Over.  
I lose.  
Three person.  
Hello, Gabby.  
Now, how do I calculate?  
Vidal 16 is going to be equal to.  
In year 6, that is 1.2.  
times 1 plus the rate.  
Ten percent.  
Why would you use 10%, not 3%?  
Between years, 6.  
15.  
It will grow at a 10% rate.  
So, then in 16 will be...  
At 10% rate, if they calculate dividend 16, you have to.  
For 9 years.  
And present them for one year.  
For 9 years, 10%?  
for one year more.  
University.  
Did you understand this?  
You are done with exercise.  
I calculate.  
16, then I can break price in year 15, then let me look the solution now.  
I don't or do you want to go to the exam?  
Yes, no.  
Okay, then I will just go quickly through the solutions.  
These are in year 50.  
So, it's exactly what is there?  
Can you see this?  
They have calculated before dividend 15, and then they have calculated dividend 16 by doing dividend 15 * 1 plus, sorry, times 1, 1 plus 3%.  
And then what is the expected value of the stock at time 15? Then you calculate the present value of year 15 and so on.  
Hey.  
Interesting.  
Now, partial review of...  
Lazcano.  
Yeah, could you do B on number six confusing? Perfect. B in number six. Yeah, same question. What is the expected value of the stock at time path?  
Let me, let me do evaluation. Thank you.  
I'm trying.  
Oh.  
Take a little try.  
I'm calculating, I'm writing here down, yes, in year 5, zero.  
1.2, 1.2.  
Then, this is...  
One.2 times.  
One plus one point.  
One, we close at the 10% rate, yeah.  
Sorry, because I'm used to us, but...  
What will you?  
Thanks.  
One. One.  
Yeah.  
1.32 is the year 50.  
And from year 60 in advance.  
Please.  
Times one point, not 1.03. Yep.  
He's going to break this.  
Eleven percent.  
First question.  
How much is price near 50?  
Yeah.  
How much is price in your 50?  
events, event 16.  
I'm gonna calculate with the formula I have there, you can 16, yes.  
I have there dividend 16, but I want to calculate it with the formula. What I have told you, dividend 16 is going to be 1.2, 1.2.  
1.2.  
Thanks.  
One boy.  
What?  
Price.  
Price to the night.  
Times 1.03.  
Make sense?  
This is 2.91, but we match with the other one. Then.  
How much is price in year 15?  
Price.  
Maybe then 16.  
Even 16.  
Over.  
Eleven percent minus 3%, 11%.  
Minus 3%.  
36  
Yeah.  
Is Excel is there. Is Excel has that.  
How is he?  
Okay.  
This computer works sometimes.  
Mouse.  
The mouse works, but...  
Yeah, so next.  
Next question.  
Next, what his problem said.  
Ruiz.  
Any questions?  
What is the expected value of the stock at time 5? Yes?  
In order to calculate the state that I'm gonna rewrite.  
These numbers?  
I'm going to complete all cash flows.  
This looks the same, but it's not going to be the same. Why? Because what I'm going to write here.  
I know, yes, get close.  
At all, because here.  
I'm going to put the price in year 50.  
What I'm doing is in year 15, not only I will receive dividend in year 15, but also I will receive the price of the stock because I will send it. That is what I have written.  
Makes sense.  
So, this is total cash flow.  
I am asked, what is the price in year 5? No, in order to calculate price in year 5.  
One, two, three, 4, 5, 6, 7, 8, 9. Do you understand what I'm doing?  
What I'm doing is, if I want to know what is the price in year 5?  
Year 6 will be in one year time.  
You understand what I'm saying?  
I am asked to calculate the price in year 5.  
So, I should calculate present value from year 5.  
Yeah.  
Yeah, 6.  
If I am in year five, year six will be.  
Year one from year 5.  
Yep.  
Play with me.  
So, in order to calculate price, year five.  
I should do.  
1.2  
Alba.  
One.  
Plus.  
Eleven percent.  
And completing present value.  
Price too late, thirst.  
Correct? Yeah.  
Am I?  
These are the kind of things you should understand for the meeting.  
I, I don't want you to, I don't want you to know how to use Excel properly.  
But understand what we are doing, it's important.  
And I'm calculating present value from year 5, and this the sum.  
Of these numbers, 23.21. Let me see if this number is correct.  
23.21.  
But I have them.  
First, in the solution, they have calculated the present value of dividends before, and then they have had...  
The price in year 50, I have put all these things together with the Excel.  
Why is pricing year 15 on the Excel sheet? Why is it 39 instead of 36?  
Didn't we get 30 cents in the last question? Yeah, but I have had.  
The 50, ohh OK, just if you wouldn't like a bomb, you have the face value, absolutely exactly the same face value plus plus coupon.  
What is the value of the stock today? Having this number, value of the stock today, so is today. Is 23 is present value.  
Twenty-three over.  
One.  
Eleven.  
Price to death, because it happens in Japan.  
And this is going to be...  
Thirteen points, yeah.  
In one sentence, what fraction of today's value comes from the terminal value and why does that matter?  
The mean value is the price of the stock in year 50.  
This is terminal one.  
In order to calculate which fraction of this price comes from this 36, I should calculate present value today of price in year 15.  
So, I can play, there's somebody today.  
Sáez.  
Over one point.  
Eleven.  
Price today.  
Yes.  
This is 7.761 and how much is 7.61 matters from this 30 important number.  
A fifty-five percent, why a fifty-five percent?  
What does this mean? Not just because of the price just in year 50, because after the price in year 15, we've got a lot of dividends. We will have dividends for them.  
55 percent.  
Makes sense.  
fully understanding. This exercise is important.  
Let me say, fast this, this PC.  
So, zero, which is anything what?  
Wells.  
Okay.  
Now, let's review lessons.  
An assembly line earns 5 million a year after 10 million of depreciation.  
Tax it at 20%.  
Why?  
East East Castro.  
40 million and not 4 million.  
My assembly line earns 5 million a year.  
Yes, it earns 5 million a year. Earnings are off.  
Five.  
And gas flow is so 40 million.  
What is the difference?  
What is the difference? Why this gas flow is 4 million and not 4 million?  
Earnings.  
Nick.  
You add the depreciation bar, yeah, that's.  
Earnings are fast.  
earnings before taxes. Five. If we stay taxes, earnings after taxes is formed.  
But the point is that...  
After 10 million of depreciation.  
Earnings.  
Can match with operating?  
Yes, Laura.  
We should have.  
Here.  
We should add here.  
The million, yes, in this fact, we should add the depreciation that we have taken out from earnings.  
And, in order to calculate the gas flow.  
Taxes goes out, so we should subtract taxes, makes sense.  
The presentation is not a cash flow. Why does it still change the cash flow?  
Because, thanks to the presentation.  
We pay less access.  
So, thanks in the conversation, cash flow is higher than the state.  
Imagine there were not be the translation.  
Earnings, if there will not be the precision, earnings will be of 50.  
One pie.  
A 20% of 15 would be much higher than just one, yeah.  
Why do we leave interest payment out of the figure slows? Because interest payments have to do with financial expenses that are not considered operating operations.  
A firms inventory rises by 30 million this year.  
What happened? What happens to it?  
What? Because the networking. Yeah, I mean, in inventory prices.  
Because I have, I have pay things in order to be in the inventory, money has gone out of my pocket.  
I had more goods because money has gone out of my pocket, because slow is down.  
Yeah.  
Oppen's previous stories above.  
It's not Google.  
Why?  
I bet we didn't see this the other day.  
Happens with a slow is above its net level.  
What?  
Because of the process.  
Because of the person, they have a high capex.  
They have an incredible high capex, and this may figure slow higher than this.  
Any questions?  
Let me go, introduction.  
We were talking.  
About.  
We're talking about products.  
Glass as I go.  
Last day.  
We were talking about.  
Who are talking about?  
Calculating cash flows from a company.  
They will talk about evaluating a company.  
But validating a company.  
is different from evaluating a project.  
Within a company, within a company, you have...  
Multiple projects.  
Within a company, you have multiple projects. And when getting the value of a company, there are projects that will work in one sense, other projects in another sense, and putting it all together will make things a little bit more difficult.  
They.  
Today we will evaluate a project that will be within a company. The project will be different from the company. Make sense?  
You have the company.  
And we see the company you have.  
Yes.  
The company will have its own cash flows.  
If you put a project inside the company, a future project.  
Cash flows from the project will increment company's cash flows.  
Makes sense.  
So, at the end.  
We will consider the company without the project, and then we will get the value from the company by increasing future cash flows of the company within the project.  
The expected return for the company will be...  
expected return we will use in order to calculate present value of future cash flows from the program.  
Hold your with me.  
Okay.  
No.  
A company to proceed in the project is at present value.  
Of the company with the project is higher than net present value.  
As well, without the project.  
What this, what does this make you think about? We have singing us.  
But this may to make you think about.  
Do you remember like with the valuation?  
You remember with evaluation when talking about with evaluation, we talk about...  
Present value of growing opportunities.  
Should a company keep their money with themselves?  
Yes, Steve, return on equity is higher than expected Redondo.  
Yes, if we make money with this money, we get more money than what our shareholders are expecting.  
This is the same idea.  
Don't worry, because we are gonna see, but the idea is...  
We will calculate the present value of the project, and if net present value is positive.  
It will make sense to accomplish the project. If present value of growing opportunities are positive, it will make the sense to keep the money themselves. Yes?  
At the end, it's the same.  
What is present value of growing opportunities? The result from not paying off dividends and keeping this money inside the company.  
If we accomplish one project, what are we going to do?  
We accomplish a project, what we are going to do, invest in the project.  
At the end, it's the same as, instead of paying dividend to my shareholders, I keep the money inside the company, and with this money I will pay.  
David.  
So, what are these incremental cash flows?  
Companies cash flows plus incremental cash flows are the plus.  
The project is cash flows that will increment companies cash flows.  
Okay.  
So.  
What are we talking about these things? Because getting the cash flows from the company is a little bit harder and we are just focusing on the project as one thing in an isolated way. Once we see one example, things would be working capital requirements, effect of closure on cash flows.  
In the midterm.  
Oh, you have to sample meter one and sample meter two. Are you going through this?  
Are you going a little bit through sample meter one and sample meter two?  
Go through them and see how much of these questions are being asked.  
You will find Vigil.  
Yeah.  
but was an expenditure that has already. The point is that once we compare the company's cash flows with the project cash flows due to accounting, we can find  
Several issues.  
Let me, yes, say benefits and course.  
The idea, what is the what is the sun cost?  
For example.  
I evaluate, I need to evaluate one problem.  
And, in order to evaluate this project, I need to make a...  
A report.  
The report has one question.  
Once I pay the cost of the report.  
This cost has already been paid.  
So, no matter if I accomplish the project or not, this cost has already been paid. So, when evaluating the project,  
I cannot reverse the cost, I cannot go back to the past and not taking the cost. So, once...  
Coast has been done.  
Once you have...  
In cost, you cannot include these costs in net present value, because you have already paid them.  
You understand what I mean? I want to get that 3% return. But I have done in the past cost. You cannot include this cost because this cost has already been done.  
Yes.  
I'm looking for projects, opportunities.  
Let me see this example: A firm wants to use a warehouse.  
He bought years ago for 1 million for a new project.  
Similar warehouses currently read for 5000 per month.  
What, if any, is the opportunity cost? I like this example. Yeah.  
I want you to do the warehouse, yes?  
How much I pay for that?  
One minute.  
One medium has some really need paid.  
The 1 million.  
It's not an investment. I am going to a office. Yes?  
Similar warehouses currently rent 5000 per month. Yes.  
In the project?  
I need to invest.  
Any 5000, no?  
What is the opportunity cost?  
1000 per month.  
Why? Because that's what you could imagine.  
If I don't accomplish, if I don't accomplish the project.  
What can I do with our house?  
I come ready.  
I got ready for...  
Buffals.  
No.  
The opportunity cost of not doing the project will be powerful.  
You got me, I don't know, 1 million.  
I haven't really been.  
One million dollars, Miguel.  
And.  
I'm going to go one step away.  
What is the return I'm getting for this one year? Or what is the return I would be getting?  
A 1000 * 12, I'm doing that.  
Rule of thumb, yes, 5000 * 12 months.  
Over, I mean.  
It will give me that window.  
Approximately, we don't need for this one year, but I'm agreeing to this question.  
I feel super well.  
A project may require an increase in working capital, working capital and closure.  
Please discuss flow cycle.  
If you accomplish one project or if a company is growing,  
Working capital should grow at the same speed the project is growing. So at the beginning, you can have a project, an interesting project,  
But careful, because if you grow so fast.  
Working capital.  
Can make you can produce?  
Making a company that is working so fast, yes, is growing so fast.  
You can have earnings.  
But you are growing so fast due to working capital.  
You can get without money, you can die, you can pass away.  
You see the idea, no?  
I need money. Yes. I am having earnings. Yes. I am growing so fast. Yes. Then what do you need? More money.  
More money, because you should finance your growth.  
Be careful with blow.  
Yeah.  
Which of the following should be treated as an incremental cash flows when deciding whether to invest in a new manufacturing plant?  
Which of the following should be treated as an incremental cost?  
Market value of the site and existing buildings.  
No, because you are already late.  
Demolition costs and site clearance.  
Yes or no?  
The site is already owned by the company, but existing buildings would need to be demolished.  
So, market value of the site and existing buildings.  
It's not that incremental.  
But demolition costs and site clearance.  
Is incremental.  
The cost of a new access Rd. only last year.  
is not incremental because it has food. Last year,  
Lost earnings on other projects from executive, time spent on new plans.  
This incremental.  
Yes.  
What is the question we should ask also in order to identify this incremental cash flow?  
Do this change something when I complete the project?  
If I accomplish the project, market value of the site, if I don't accomplish the project, the market value of the site would be saved.  
If I don't accomplish the project, the molition cost, I should not incur in them.  
Are you following me?  
A fraction of the cost of leasing the president's jet airplane. Now, future representation of the new plan. Future, the presentation of the new plan. Is this incremental?  
Yes, because I will have this depreciation.  
I will have this presentation.  
just in case that careful because the presentation will not affect the gas flow.  
So the depreciation is not an incremental cash flow, the taxes impact, yes. Are you following me?  
Oh, yeah, question 6 and 7. Six, no, 7, yes.  
Six.  
is not going to be incremental because depreciation is not a cash flow, but the reduction in corporate taxes from depreciation, yes.  
And the initial investment in inventories of raw materials.  
is their working capital is incremental. Makes sense.  
Ana.  
A new garden fertilizer.  
Following projections were made on numbers are just four in place.  
The project requires an investment of 12 million.  
Fixed assets will be fully depreciated over six years using straight line depreciation. The plant and machinery can be dismantled and sold at pre-tax salvage value of 1.9 in year 7.  
The project sales are in 1000, these numbers.  
Do you have Excel?  
Think about these numbers. I'm going to go through these numbers also.  
And we can do these numbers together.  
We can paste these numbers.  
OK, I'm happy.  
Here, one, two, three, 4, 5, 6. Yep.  
Now, what are these?  
I'm going to take all numbers and thousands. Yes.  
These mental.  
Year 7.  
is mental. The factory in year 7 will cost 1 million.  
Juan.  
16.  
Yeah.  
This is what is mental.  
We.  
Be.  
And then the project requires 12 million.  
The project requires.  
A million, how old is a million to be? No.  
The.  
Enough.  
The fixed asset will be fully depreciated over six years using the straight line depreciation.  
These are cells, yes?  
Nothing is being said regarding expenses. So I'm going just to consider that I can sell everything without cost.  
Operating cash flow are equal to earnings, and I will just consider depreciation.  
I'm going to go taxes out of.  
20% taxes.  
But, here it is, he would want more information, yeah.  
Follow me, Morales. Let me continue.  
Hey.  
I am missing. I am. Everything is there, no?  
From this space.  
By machine, I'm gonna, I'm gonna just calculate the precision.  
OK.  
The presentation is.  
Please.  
Over 6.  
Go.  
Hey.  
So I have all this information inside. Let me come here. Project cost of goods sold is 837 in year one and 60% of sales in year two to six. So year one.  
Yeah, what?  
Negative 800.  
And he said.  
837 and 60% of sales in years two.  
Equal.  
I use.  
Please be person.  
Thanks.  
Is up.  
He comes, and these are.  
Expenses. Yep.  
Project.  
Service SGA. What does SG&A stand for?  
You can Google, I will appreciate it. As the expenses are 1.1 in year one and grow that to 10%.  
in years 2 to 6.  
But.  
New one, 1.1.  
Thanks, 1.1.  
And...  
Okay.  
1.1.  
at 10% in years 2 to 6.  
These times.  
Nick.  
This is SD. Anyone knows what is SD and a transfer?  
Yeah, and then our costs that our recovery.  
The firming course.  
Tata costs of 4 million in year zero and 1.1 in year one.  
This is becoming complicated.  
Communion.  
And.  
17.  
New one.  
And now, project operations require operating net working capital of 550 year one and 10% of sales in years two to six.  
No.  
This one, this.  
18.  
Juan and 10% of sales.  
Okay.  
The relevant cost of capital is 20 percent. Should I should the company over undertake the new project?  
OK, but we should calculate before.  
I'm looking for taxes. Let me see if here in the answer there are taxes, no taxes.  
That is twenty-one percent.  
Taxes 21 percent.  
First thing I need to calculate.  
Yes.  
I'm gonna go play Hernández.  
Unearings are.  
Five 100 and twenty-three.  
Things are the sun.  
Of all these numbers, yep.  
Negative, positive, positive, positive, positive, and yes.  
No.  
I'm gonna go play Texas.  
Here.  
If you have negative earnings.  
You can use these negative earnings in order to avoid paying taxes following years.  
You understand what I mean?  
If you have negative earnings, you can keep these negative earnings. I'm not, let me see how.  
This is Vidal.  
Okay.  
If you have negative earnings.  
If you have negative earnings.  
You should not pay taxes.  
You have negative, you should not pay taxes. Do you understand what I mean?  
Here in the solutions.  
You have negative taxes.  
This does not mean that you are going to receive money from the from the treasury. You understand what I mean? In order to do these numbers correctly,  
We should take this negative to this year and think that this year, instead of being paying 656.  
We should deduct.  
This, yeah.  
Understand what I'm saying.  
Let me see.  
Negative.  
Negative access.  
These 4000 should be considered here, but whatever. What I'm what I'm going to say, I'm going to do the same that is being done there.  
earnings times 21% and when I multiply negative taxes are not possible yet, never.  
I'm gonna do this.  
Yeah.  
I know, so.  
Yeah.  
If 0 times.  
19.  
No, let me check.  
Which name have it for you?  
This representation is taken out.  
Sales 523 expenses.  
Eight 100 thirty-seven, they said is he pay 1100.  
Order 1100.  
And they are not considering, they are not considering.  
And oh, and working capital.  
Yeah, and working.  
This is my mistake. Sorry for this. And working capital are out of earnings.  
and working capital are out of earnings. In order to calculate earnings,  
We should take, we should consider this plus the presentation, yep.  
And...  
947, 948, 408.  
Are you following me?  
Networking capital is not money that is negative cash flow.  
That.  
That would appear in Hernández.  
not an income or is not an expense. It's inventory. It goes to the assets. Yep.  
So, we have 30 things.  
Do we care about earnings too much?  
No, I care about cash flow, and I'm going to calculate cash flow, and cash flow is...  
Negative 12.  
The amount of money that I should pay to the machine, yes?  
Plus.  
These expensive regarding startups.  
And also, taxes should be paid. But in this case, because if negative is money that will come into my pocket.  
Never, taxes will be negative. It will be what I have told you before. Yep.  
And now, I want your attention. It goes...  
Income came into my pocket, yes?  
Expenses goes out from my pocket.  
SDMA goes out from my pocket.  
This morning?  
Goes out from my pocket.  
Also.  
Working capital goes out from my pocket.  
And the precision.  
The presentation does not go out from my.  
I am missing something.  
Absolutely, taxes go out for me.  
And I know.  
Yeah.  
Yep.  
I love something.  
Incorrect.  
I cannot have this is I have done something in Korean.  
No, let me.  
Look forward, it cannot be so big.  
As well, let's start by credit balance sheet, so I have I have not gone through the balance sheet.  
Record that.  
Hey.  
Inkos.  
I'm pretty slow, it's 15.  
The.  
Forty.  
Yeah.  
Four 1000, 12, 4000, 12.  
4,840 plus.  
Access is yes.  
I got this.  
Sorry, sorry, sorry.  
Access this.  
Access. I have right taxes.  
These taxes.  
Peace.  
Positive.  
And these are negative. Taxes normally are negative. Yes?  
And this number is recorded.  
Yep.  
Yes, negative 15.  
And these are the gas flows from.  
Yeah, 2.2, and at the end I should pay.  
3.5 year 7.  
Oh, I mean, you have said.  
At the end.  
Here, the plant and machinery can be dismantled and sold at the tax salvage of 1.19 for 9. I don't need to pay this money at the end.  
This money that I received from Self, yes?  
Right now, let me just pull it in the more time. This is positive.  
And 1.539.  
And, also, the same thing.  
You can slow.  
Yes.  
Summit.  
Somebody having all free cash flows.  
Having all free cash flows, how would you evaluate this project?  
By calculating net present value of future cash flow.  
I don't want you to spend too much time reviewing this exercise.  
If you don't review it, nothing bad is going to happen.  
Where I want you to spend time?  
Working with time value money.  
Going through sample meter one and sample meter 2.  
Yes.  
Please, for next.  
Wednesday?  
This Monday, we don't have class or next Wednesday.  
Try to do the exercise, the cruise exercise from the meter, and once you want the solutions from meter one and from meter 2.  
Tell me a WhatsApp.  
in the group and I will upload the solutions.  
Yeah.  
The idea, conclusion.  
Net present value is the way we will evaluate this. Yes, net present value, and you are not going to find something like this in the middle.  
This is just here in order to match. Today, yes, because of net present value, you should know what is an incremental cash flow. But this exercise, you are not going to find one exercise like this in the midterm. All things you will find in the midterm are like the exercises.  
The new world.  
Yes, we just need a regular coffee.  
Absolutely fine. Absolutely fine. And there is no means to use Excel.  
Yeah.  
Right.  
I don't like this exercise, yeah.  
because it has to do more with accounting than with finance. These for corporate finance, those of you who will study corporate finance, next course, this exercise with maths, but personally, I prefer you to know what is a bond equity.  
in terms of equity evaluation and all these things, yes?  
Any questions?  
They are coming.  
I'm gonna go quick.  
For.  
Thank you, Professor. Welcome. I hope you feel better soon as well. Yeah, I know that they look like that.  
I have a blue, literally. I don't know if it's blue or COVID, but there is now a lot. Oh, did you say at the beginning of the class or that?  
At the beginning of class, and you can, it's a the meeting will take place Monday, yeah.  
This Wednesday, we have class, we will review.  
On Fridays, we won't have class. OK, now you think about the final? Oh yeah, what then? The final will take place? Oh, the final? Oh yeah. Oh, we need a talk. How are you? The 4th is Saturday. Whatever the Friday is.  
Yeah, whatever the friend is. I don't care. What word depending on you, Amanda? Oh. I'll ask her. Are you going to be proud of it? I should be fine.  
Friday, Friday, December 4th.  
It will be perfect. But tell me next Wednesday and we will close. I want just to talk with Anastasia also and tell her, ask her, it's okay for you. I think it will be okay for her.  
Sorry, Manuel. Thank you. Welcome.  
No problem, Sir. Don't worry. Yes, I've loaded and it's fine. I've had better days than today.  
Amir.