---
titulo: "Foundations of Finance – Session 11: Free Cash Flow, Financial Statements and Depreciation"  
fecha: 2026-10-05  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 11  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---
# Foundations of Finance – Session 11

## Free Cash Flow, Financial Statements and Depreciation

**Date:** October 5, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 11 connected **accounting information with financial valuation**.

The class began with a brief review of capital budgeting and then introduced the main topic:

> **How do we move from accounting statements to the cash flows we actually need in finance?**

The main topics were:

- Review of NPV and IRR.
    
- Financial statements.
    
- Earnings versus cash flow.
    
- Free Cash Flow.
    
- Revenue recognition and timing.
    
- Capital expenditures.
    
- Depreciation and amortization.
    
- Taxes and the depreciation tax shield.
    
- Debt service.
    
- Working capital.
    
- The connection between accounting statements and valuation.
    

The central idea of the session was:

> **Accounting earnings and cash flows are not the same thing. Finance ultimately cares about cash.**

---

## 2. Quick Review: NPV and IRR

The session began by reviewing the capital-budgeting example from Session 10.

Suppose a project has the following cash flows:

|Year|Cash Flow|
|---|---|
|0|-20|
|1|-20|
|2|+30|
|3|+30|

With a required return of:

$$

r=8%  
$$

the Net Present Value is:

$$

NPV=  
-20  
-\frac{20}{1.08}  
+\frac{30}{1.08^2}  
+\frac{30}{1.08^3}  
$$

which gives approximately:

$$

\boxed{\text{NPV} \approx 11.01}  
$$

Therefore:

$$

\boxed{\text{NPV} > 0 \Rightarrow \text{Accept}}  
$$

The project IRR is approximately:

$$

\boxed{\text{IRR} \approx 22.47\%}  
$$

The class also reviewed the main situations where IRR can become misleading:

- borrowing-type cash flows;
    
- mutually exclusive projects;
    
- projects with more than one change in the sign of cash flows.
    

---

## 3. Excel Reminder: NPV and Time Zero

An important Excel issue was reviewed again.

Excel's standard `NPV` function assumes that the first cash flow occurs at:

$$

t = 1  
$$

Therefore, if there is an initial cash flow at:

$$

t = 0  
$$

it should normally be added separately.

Conceptually:

```
NPV = CF0 + NPV(rate, CF1:CFn)
```

The general lesson is:

> **Always understand the timing of the cash flows before using a formula.**

---

## 4. Financial Statements

The session then moved into accounting.

Two basic financial statements were introduced.

### Balance Sheet

The balance sheet is a **snapshot at one particular moment**.

It tells us:

- what the company owns;
    
- what the company owes;
    
- how its assets are financed.
    

In simplified form:

$$

\boxed{\text{Assets} = \text{Liabilities} + \text{Equity}}  
$$

### Income Statement

The income statement describes what happens **during a period of time**.

Its basic structure is:

$$

\text{Revenues} - \text{Expenses} = \text{Earnings}  
$$

Unlike the balance sheet, it is not a photograph at one specific instant. It summarizes activity between two dates.

---

## 5. Accounting Versus Finance

The most important distinction of the class was:

$$

\boxed{\text{Earnings} \neq \text{Cash Flow}}  
$$

Accounting tries to measure economic performance during a particular period.

Finance asks a simpler question:

> **How much money actually enters and leaves the company?**

This is why financial valuation ultimately focuses on cash flows.

---

## 6. What Is Free Cash Flow?

The intuitive definition used in class was:

$$

\boxed{\text{Free Cash Flow} = \text{Cash Inflows} - \text{Cash Outflows}}
$$

In simple terms:

> **Money coming into the company's pocket minus money leaving the company's pocket.**

Once future Free Cash Flows are estimated, they can be discounted to obtain value.

Therefore:

$$

\boxed{\text{Value} = \text{Present Value of Future Free Cash Flows}}
$$

This connects the session directly with everything studied previously.

---

## 7. Why Earnings Are Not Cash Flow

Several accounting rules create differences between earnings and actual cash movements.

Two of the most important are:

1. The timing of revenues and expenses.
    
2. Depreciation and amortization.
    

For example, a company may record revenue when it issues an invoice even if the customer has not yet paid.

Suppose the company invoices a customer:

$$

\$100
$$

Accounting may recognize:

$$

\text{Revenue} = \$100  
$$

but the company may still have received:

$$

\text{Cash} = \$0  
$$

Instead, the company records an account receivable.

Therefore:

> **Revenue does not necessarily mean that cash has already entered the company.**

---

## 8. CAPEX Versus OPEX

The session distinguished between two types of expenditure.

### OPEX — Operating Expenditure

Expenses required for normal operations.

Examples:

- salaries;
    
- rent;
    
- utilities;
    
- supplies.
    

These usually appear relatively directly in the income statement.

### CAPEX — Capital Expenditure

Money invested in long-term assets.

Examples:

- machinery;
    
- factories;
    
- equipment;
    
- data centers.
    

The important difference is that CAPEX normally involves a cash payment today, while accounting recognizes its cost gradually through depreciation or amortization.

---

## 9. Depreciation and Amortization

Suppose a company buys an asset for:

$$

\$100
$$

and depreciates it over four years using straight-line depreciation.

Annual depreciation is:

$$

\frac{100}{4}=25  
$$

Therefore accounting records:

$$

\boxed{\text{Depreciation} = \$25\text{ per year}}  
$$

But this does **not** mean that \$25 leaves the company's bank account every year.

The cash left when the asset was originally purchased.

Depreciation is therefore:

$$

\boxed{\text{A non-cash expense}}  
$$

This is one of the central differences between accounting earnings and cash flow.

---

## 10. The Tax Effect of Depreciation

Although depreciation is not a cash payment, it affects cash flow because it reduces taxable earnings.

Suppose:

$$

\text{Revenue} = 200  
$$

and:

$$

\text{Operating Costs} = 100  
$$

Without depreciation:

$$

\text{EBT} = 100  
$$

With a 20% tax rate:

$$

\text{Taxes} = 20  
$$

Cash after operating costs and taxes would be:

$$

200-100-20=80  
$$

Now suppose depreciation is:

$$

25  
$$

Taxable earnings become:

$$

200-100-25=75  
$$

Taxes become:

$$

75(0.20)=15  
$$

Actual cash flow becomes:

$$

200-100-15=85  
$$

Therefore depreciation increased cash flow by:

$$

85-80=5  
$$

This is the:

$$

\boxed{\text{Depreciation Tax Shield}}  
$$

and:

$$

\boxed{  
Tax\ Shield=  
Depreciation\times Tax\ Rate  
}  
$$

In this example:

$$

25(0.20)=5  
$$

---

## 11. From Earnings Back to Cash Flow

This leads to an important adjustment.

Because depreciation reduces accounting earnings but is not itself a cash payment, it must be added back when moving from earnings to cash flow.

Conceptually:

$$

\boxed{\text{Cash Flow} = \text{Earnings} + \text{Depreciation} + \text{Other Adjustments}}
$$

This does not mean depreciation creates money.

It means depreciation was previously subtracted from earnings even though no cash left the company at that moment.

---

## 12. Worked Example: Investment and Depreciation

The class considered an investment in an assembly line.

Suppose:

- Initial investment: \$100.
    
- Useful life: 10 years.
    
- Straight-line depreciation.
    
- Annual revenues: \$40.
    
- Annual operating costs: \$25.
    
- Tax rate: 20%.
    

Annual depreciation is:

$$

\frac{100}{10}=10  
$$

Accounting earnings before taxes are:

$$

40-25-10=5  
$$

Taxes are:

$$

5(0.20)=1  
$$

Accounting earnings after taxes are:

$$

5-1=4  
$$

But cash flow is different.

Depreciation does not represent a cash payment, so it must be added back:

$$

FCF=4+10  
$$

$$
\boxed{\text{FCF} = 14}  
$$

The important result is:

$$

\boxed{\text{Earnings} = 4, \qquad \text{Cash Flow} = 14}  
$$

Same company. Same year.

Different concepts.

---

## 13. Evaluating the Project

Suppose the project requires:

$$

CF_0 = -100  
$$

and generates approximately:

$$

CF_t = 14  
$$

per year for 10 years.

Whether the project creates value depends on the required return.

We would calculate:

$$

NPV=  
-100+  
\sum_{t = 1}^{10}\frac{14}{(1+r)^t}  
$$

or equivalently value the ten cash flows as an annuity.

The project should be accepted if:

$$

\boxed{\text{NPV} > 0}  
$$

Again, the valuation technique has not changed.

The new challenge is obtaining the correct cash flows from the accounting information.

---

## 14. Debt Service Versus Interest Expense

Another difference between accounting and finance appears with debt.

The income statement includes:

$$

\text{Interest Expense}  
$$

But when the company repays a loan, it must also return the principal.

Therefore the actual money paid to lenders includes:

$$

\boxed{\text{Total Debt Service} = \text{Interest} + \text{Principal Repayment}}
$$

Principal repayment does not normally appear as an expense in the income statement.

But it is still a cash outflow.

This is another reason why:

$$

\boxed{\text{Earnings} \neq \text{Cash Flow}}  
$$

---

## 15. Working Capital

The session also introduced **Working Capital**.

A growing company often needs cash before that cash appears as an accounting expense.

Examples include:

- inventory;
    
- accounts receivable;
    
- accounts payable.
    

Suppose a retailer buys inventory before selling it.

Cash leaves the company immediately:

$$

\boxed{\text{Inventory Purchase} \Rightarrow \text{Cash Outflow}}  
$$

But the accounting effect may occur at a different time.

Similarly, if the firm sells goods on credit:

- revenue may be recognized;
    
- cash may not yet have been collected.
    

Working capital therefore creates another difference between accounting results and cash flows.

---

## 16. The Logic Behind Free Cash Flow

The objective is not to memorize a formula mechanically.

The process is more important:

1. Start from accounting information.
    
2. Identify which items actually involve cash.
    
3. Add back non-cash expenses.
    
4. Subtract investments that require cash but are not immediately expensed.
    
5. Adjust for working capital.
    
6. Obtain Free Cash Flow.
    
7. Discount future Free Cash Flows.
    

The complete valuation logic is therefore:

$$

Accounting  
\rightarrow  
Cash\ Flow  
\rightarrow  
Present\ Value  
\rightarrow  
Value  
$$

---

## 17. EBITDA

The class also briefly introduced:

# EBITDA

which stands for:

$$

\boxed{\text{EBITDA} = \text{Earnings Before Interest, Taxes, Depreciation, and Amortization}}
$$

EBITDA attempts to look at operating performance before several accounting and financing effects.

It can be useful for comparison, but it is **not Free Cash Flow**.

For example, EBITDA does not directly account for:

- capital expenditures;
    
- working capital requirements;
    
- taxes;
    
- other cash needs.
    

Therefore:

$$

\boxed{\text{EBITDA} \neq \text{Free Cash Flow}}  
$$

---

## 18. Five Ideas to Remember

1. **Accounting earnings and cash flows are not the same thing.**
    
2. **Finance ultimately values future cash flows, not accounting earnings.**
    
3. **Depreciation reduces earnings but is not itself a cash outflow.**
    
4. **Depreciation can increase cash flow by reducing taxes.**
    
5. **To value a company or project, we must move from financial statements to Free Cash Flow and then discount those cash flows.**
    

---

## 19. Before the Next Session

Students should be able to:

- Explain the difference between a balance sheet and an income statement.
    
- Explain why earnings and cash flow differ.
    
- Define Free Cash Flow intuitively.
    
- Distinguish CAPEX from OPEX.
    
- Explain why depreciation is a non-cash expense.
    
- Calculate a simple depreciation tax shield.
    
- Move from accounting earnings to cash flow in a basic example.
    
- Explain why principal repayment does not appear as an operating expense.
    
- Understand why working capital consumes cash.
    
- Distinguish EBITDA from Free Cash Flow.
    

The next session will continue this process and use Free Cash Flow more directly in valuation.

The general framework remains:

$$

\boxed{\text{Value} = \text{Present Value of Future Cash Flows}}
$$

# Transcripción
5 de octubre de 2026, 17:13p.m.
1 h 8 min 58 s
I can call someone from the web, but here.  
This goes on one hand.  
Sorry.  
Okay.  
Oh, yeah.  
Big one, big one.  
Ruiz.  
For 2 minutes.  
or for one minute and we will talk about it. And Anastasia.  
I have each for you, J.  
Yeah.  
Very important information.  
For the winter, this winter, it will take place this Friday 16th, but no.  
So, would you have a sample or a sample question? Yeah, I have both two of them.  
Bless you. Thank you. It's Monday. Monday, yeah. All of you is OK with Monday. Next Friday, we don't have class.  
Then you can ring.  
Your own city.  
But also, you will have that.  
And sample A and sample B. Thank you so much. Yeah, you can find all this information in Red Space, but yeah.  
Hello.  
A project goes...  
In the in the you have two sample or you have two sample?  
Have you tried at least, or have you gone through this a little bit?  
Yeah, how did you find them?  
There are not today, today, by looking this.  
This one didn't help midterm preparation, but this helps understanding last class. And understanding the last class helps understanding midterm preparation. Yes? Why are you talking about this? Because in these exercises,  
You need Excel.  
And, in the midterm, if you have gone through the midterm exercises, you don't need exercise. Yes, with a normal, you are gone.  
The other day, we were talking, Anastasia, about capital budgeting.  
And what is capital budgeting about? Calculating net present value and ILR. We take decisions and if you see in the final, in the meter, how can you take decisions regarding capital budgeting?  
Net present value is the answer. What is net present value? Giving a discounting rate calculating present value of future cash flows. Yep.  
I mean, this is life we are going to use normally, except because...  
When talking about the capital, but I think one more with...  
A large number of caslos.  
Yeah, let me start with the first exercises.  
Zero, one.  
Two and three.  
A project cost.  
Twenty today.  
Twenty, within a year, yes.  
And it will return 30 and 30.  
One thing, yes.  
Yes, Ruiz.  
Making sense to overtake this project or not?  
We know that the rate is 3%.  
And it's as simple as calculating net present value equal to...  
Negative 20 -, 20 / 1.08 in a, that is, yes.  
plus 30 over 1 plus 0.8 raised to the second, plus 30 of 108 raised to the third. Yep.  
You calculate this number.  
And you will see if it is possible, if it is positive or not.  
I'm gonna take Excel.  
I'm gonna take Excel.  
Quickly, quickly.  
Minus 20, minus 20, 30, and 30, yes, zero, one, two, three.  
And this code the rate I have says 8%, yep.  
Let me calculate.  
One plus the person.  
Function, fix it.  
Price 20, that is 20.  
This is a little bit less than the sum of this.  
Is 11.01, yes? Does it make sense to overtake the project?  
Yes. Yes. And now, net present value, I'm going to calculate with net present value formula these numbers. Net present value. This is a review of a 8% rate, yeah?  
Of these numbers.  
Anise.  
10.20.  
10.20.  
Why these two numbers are not set?  
You don't know.  
Anyone?  
Why these two numbers are not the same?  
I'm calculating the present value.  
This play.  
These are being paid today. What is the problem with this tent?  
What is the problem when calculating this? That if I use net present value Excel formula?  
This 20.  
Won't be paid today, will be paid in year one.  
So, how can so how should I I should calculate net present value of these cash flows that we will start in year one?  
Yeah.  
And...  
Therefore, with this, because we saw this in class, you introduce garabets thrust in the formula, you will get thrust.  
Same happened with AI.  
And this gives me same number.  
Yep.  
So why does the present value give 10.20 instead of 11?  
Because C0 will take place year zero.  
Dear Zero.  
There is no point to discount it.  
Project IRR is 22.47.  
What is the ion of a bone called?  
Yes, let me calculate the.  
calculating IRR. I'm going to calculate IRR in two ways, two different ways, yes?  
I'm gonna...  
Rise this to 20. This is still positive. 25 is negative. 21 is still positive. 22. 23. So it's around 22. Yes. 22.5 negative.  
22.4, yes, so.  
Ana.  
IRR is around 24, 22.4. Yes. Then how can I calculate also IRR with the Excel formula?  
That is IRR of these numbers that is.  
22.47, yeah.  
What is the Arroyo of a bone called?  
Yeah.  
One 2.47.  
Name 2 cases in which the IRR rule can mislead.  
Do you remember when the sign changes? Yeah, instead of buying, we are selling and when projects are.  
Dependent. Yeah, when they are dependent. When 2 projects are dependent. And also the third case could be when you have an important investment and at the end.  
You have to pay in one project where you invest at the beginning, for example, a nuclear plant. Yes, it has a big investment at the beginning, and at the end, once the project is finished, you have to put money also, because there are...  
You should close the facilities and all these things. When you have a big cash flow at the beginning and a big cash flow negative at the end, you can have is what we saw in class, yeah?  
What does the payback rule ignore?  
What does the payback rule ignore?  
Yeah, I mean, I would say.  
The amount of, yeah, this happened, I would say.  
For example, if the payback happens in three years.  
not the same having returns the beginning or at the end of these three years.  
Make sense?  
Okay, what are we going to do? What are we going to talk about today? Today we will talk about free cash flow.  
and financial statements.  
Do you know something regarding accountancy?  
assets, liabilities.  
What are the books? You have the balance sheet? No? What is the balance sheet? What do you owe?  
what you owe and how you pay what you owe.  
Yep, what is the balance sheet? A picture.  
Picture in one moment of what you have and how you are financing what you have, but is a picture it tells you.  
A man, now a picture. What can you see in a picture that you are wearing things and that you owe in terms of balance? Yeah. What is the other statement?  
Yeah, yeah, no, profit downloads, it's a statement.  
No, thinking about...  
Financial statements, balance sheet, balance sheet, and profit and losses statement. Why the balance sheet is a picture of what you have got and how are you financing?  
The balance sheet, give me the balance sheet. One question would be, when, which state? Balance sheet today, one week ago, one year ago. Yes?  
Profit and losses statement.  
Yellow.  
is a picture between two moments and tells you what the company is doing. What the company is doing.  
What the company normally do?  
I'm talking about the picture, what the company normally do.  
Hey, don't worry.  
What the company name? Sorry, hey, uh, Rodriguez.  
Yeah, but what revenues? What are revenues?  
Yeah, sales. I mean, a company normally sells.  
In order to sell, in order to create revenues, in order to create incomes.  
A company should sell, should send invoices and get paid, yeah? And on the other hand, a company has expenses.  
an incomes minus expenses. Then we are going to see today we can talk about a Vega.  
We can talk about.  
Hernández.  
And we can talk about taxes.  
And we can talk about earnings after taxes.  
All of you are with me?  
Yep.  
OK, this idea is that this has to do with accountancy.  
And these are the financial statements.  
What is free cash flow?  
Have you ever had a drink a slow?  
Okay, this is the spoiler of today's class.  
File speed as well.  
The money, money that came in minus the money that goes out.  
Finance people.  
Are simple guys.  
Women complete life too much.  
In terms of finance, what do we want to know?  
Call Matt Muszynski.  
And homeless goes out.  
in monetary terms. How much money is coming in minus how much money is going out. The difference between what comes and what goes is free cash flow.  
Yeah.  
The finance.  
We like.  
People, please.  
What is one of the key points of today's class?  
That final financial statements.  
Don't connect 100% with free cascos.  
Regarding accountancy, we should take care about two or three things. But what are we looking for? We are looking, we will be looking for...  
Free gas flow, and once we've got...  
Future cash flows - what we will do with future cash flows?  
What are we gonna do with future Carlos?  
Let me, let me call a future Castro.  
Future value.  
What are we gonna do with future value?  
We will.  
Company. Present, ma'am.  
Have you ever heard about?  
BCF.  
Is he a successful?  
Please come to Castro. So, what is the idea?  
Providing us in the statements.  
We will kind of play.  
And once we know.  
As close, we will.  
He's got me.  
The rest of the company.  
Yep, simple.  
What are we looking for? The money that goes in minus the money that goes out. Hope we will call this free gas flow.  
And all of this is today, we are not going to this conflict. Next day, we will be consulting.  
All things we have been working with, 10 Marín Money, not only work for bonds, not only work for equity, but also work for already companies.  
Make sense?  
I think this we are almost done with today's class. We will see two or three things, but today's class is not. Do you have any questions regarding problem set 2?  
Have you tried for next Wednesday's program section? Do you feel OK, comfortable with programs? This Wednesday. This Wednesday. Yeah, today's time. This Wednesday. I'll say next.  
This one, yep.  
Eh.  
Let me read this.  
not really, to our shareholders or ultimate financial measure and the one we must want to drive over the long term is free cash flow per share. Why not focus first and foremost, as many do, on earnings, earnings per share or earnings growth?  
The simple answer is that earnings don't directly translate into cash flows. And serves are worthy only the present value of their future cash flows, not the present value of their future earnings. Future earnings are a component, but not the only important component of future cash flows. I completely agree.  
Yeah, definitely.  
What is?  
What are earnings?  
Finite earnings. How much money are you making?  
Earnings.  
earnings before taxes, earnings after taxes, you understand what I mean? Why does earnings exist?  
Why does earnings exist? Why do people corporate earnings?  
Why, why do people come with her?  
Raquel.  
I installed price.  
Right, and you know whether it's like buy share or not. Yeah, because thanks to earnings you can calculate dividends and you can calculate present value of future cash flows, no? Careful.  
No, I mean, we have been working with that, but earnings only have two users.  
Parents help us calculating.  
Thanks.  
Earnings exist because we need to know earnings in order to calculate taxes.  
And the second use of earnings is making people be misunderstood.  
misunderstanding. There are no more uses for earning some taxes.  
How much money a company is making? Don't look at earnings where you should look.  
Why? Because if you look at earnings today, when we talk about it, not all the money that goes out of the company appear in earnings.  
And not all money that.  
Things inside appear in Hernández. We are going to see it today, yeah?  
Any questions?  
Important idea from today's class.  
One thing is accounting, and another thing are cash flows. Careful, because this does not match perfectly, yeah.  
Okay, today we will talk about cash flows, then we will talk a little bit about accounting statements, and then we will talk about depreciation working capital, and we will see a quick example with Apple. Yeah?  
Okay.  
What is Castro?  
The money you receive.  
Minus the money you pay.  
Imagine you have just your own pocket. What is free cash flow? All things that came into your pocket, minus all things that go out from your pocket.  
It's a flow.  
In finance, no one, no one ever used earnings. We always use free cash flows. Earnings do not reflect the true timing of cash flows. Not only the true timing. We are going to see when talking about depreciation that earnings  
You can have.  
No earnings.  
And you can be winning money.  
I will tell you why.  
You can have no earnings. If you don't have earnings, what does this mean?  
That you won't pay taxes.  
But you can be winning money. Why? Because you have to invest in something that is ousive. Yes, you can have previous periods of time.  
With more expenses than incomes, you can have.  
Negative results, not distributed, that you are distributing in your, we will see, yeah.  
Cash flows should only reflect operating activities.  
Not necessary. Not necessary.  
This flow should only reflect operating activities. What is the point in this? Imagine that you want to forecast your own life, yes?  
You are contracted to work in a place. Thanks to these weights, you can calculate your own cash flow. Yes? But imagine that.  
There is 1 special payment that you are going to receive.  
These special things normally won't count on Castros, but we will see that we are not going to see it today, but...  
There are times that non-operating activities could be considered, because at the end it's worse, yeah.  
Oh, oh.  
So, cash flow is total cash flow inflows minus total outflows.  
Then.  
What are we going to do?  
We will try to connect.  
As flows.  
Please.  
Of.  
Why? Because we are not going to have data from all the money that comes in, minus all the money that goes out.  
Which stuff are we gonna have?  
Oh, bless.  
Is this not what I mean?  
Don't work with earnings, but we need earnings in order to work.  
So, from accountancy, we will go to the store.  
We will start with accountancy, and from accountancy we will we discuss, yeah.  
When talking about operating revenues.  
We're talking about operating revenues.  
There won't be problems when thinking about cash flows and accountants.  
Did you look in the profit and losses statement for operating revenues?  
More or less, we will see that there will be problems, but...  
Which problems can you find with operating revenues?  
When connecting accountancy with the slows.  
Which problem could you have with operating revenues?  
We're trying to connect. Do you understand the question? We are trying to connect accountancy.  
With Caslow.  
When do you do an accountancy?  
When do you generate?  
An income. When the income appear in your profit and losses statement.  
Please, believe me.  
When you issue.  
When you issue the invoice.  
Do you remember? If you issue an invoice, you have an invoice.  
And use in the balancing, it will appear in clients.  
You issue an invoice, and then you will have an ego.  
I have a client.  
You owe me, Will.  
You owe me $100.  
Is $100 a beer? This is an asset for me.  
It's an asset, and it has been created against a revenue. So, in my profit and losses statement, there is a revenue.  
But the money has not entered the company yet.  
I need two.  
I need you to pay me, yes?  
You see this difference?  
But this is not the biggest difference we are going to find today. Normally operating revenues, operating revenues, max. Normally max with cash flow. Yes, we are going to see that not necessary, but whatever.  
And then operating revenues and operating costs, the same. Capital expenditure.  
What is the point with capital expenditure? What is a CapEx? What is CapEx?  
Have you ever heard about Capex? Money spent on.  
Growth or assets, yeah, or in a fact in a factory that exists, the money you spend.  
On your equipment? Yeah, on equipment. Then you've got OPEX, operating expenditure. That OPEX could match with operating costs. What is the problem with CAPEX? That you invest money, you invest a lot of money. Today, you invest a big amount of money.  
Today.  
And how will this investment apply to your income and losses statement with the decision?  
Amortization. Yes, all these investments should be a mortgage site. Do you know about amortizations?  
Amortizations.  
Is not money that goes out of your bank.  
But what is the effect of amortizations in the cash flow?  
What?  
Your assets are becoming cheaper.  
No, I mean...  
No, no, no, let me explain this because, and we are going to see this.  
And we are going to see this with one example. I don't care to repeat this, yes, but the idea.  
Year one, two, and three, yes.  
Vega.  
They are.  
100, yes.  
I invest 100 without financing. I put the money, yes.  
I'm gonna get.  
In 3 years, I'm gonna get it.  
Eh, 200.  
I mean, yes, four years. Yes, four years.  
Two 100.  
Two 100 and 200. Yes, what is this? Incomes each year. Then expenses. Expenses are going to be...  
I have it.  
So...  
Incomes minus expenses will be off.  
100, yes.  
Now, taxes are off, for example, 20%, yes?  
You understand what I mean? I have investment, I have.  
I am getting 100 within four years.  
These are earnings, earnings before taxes.  
So...  
In Texas.  
20, 20.  
Twenty-twenty, these are taxes, Mason.  
You call me?  
So, at the end, I will get it.  
AD, AD, AD, and AD. Yes.  
Are you following me? Where is it going?  
That not only I have these expenses, also I have invested 100.  
What can I do with this hundredth?  
Spread on the, yes, and this is an amortization, I can amortize, yes.  
So...  
I'm going to divide this 100 into four.  
Oh, here.  
25.  
Twenty-five.  
Twenty-five.  
But, in fact, makes sense.  
This is a compass.  
This is a complex. Are you following me?  
No.  
So, earnings.  
Oh, 75, 75.  
Thirty-five, I'm seventy-five, yes.  
Cost, I bought this earnings.  
I love, I got less earnings, yes.  
Instead of 20.  
I will pay.  
It's Texas.  
So, instead of 80...  
I will get 85.  
Yes.  
This is accountants.  
I'm talking about a compass.  
What is this? The effect of depreciation of harmonization, yes?  
Ana.  
Do you understand the teacher?  
Knop.  
I want to calculate that.  
Is the earnings of 75?  
This is.  
No, the earnings is seventy-five in the tax. The 75 I mean expenses are.  
One 100.  
Over 4, yeah, yeah, 25, 25, 25, 25, 25. But then when you subtract the tax, 75 minus 15 is 60.  
Earnings are 75.  
Instead of 100. Yeah. And now, how do I calculate taxes?  
By doing 20% of earnings.  
Lady.  
is a 20% of 100.  
And 15 is a 20% of 75. But 75 minus 15 is 60, not 85. 75. For the minus 50, yes, you have.  
This earns seventy-five minus 50s.  
Big.  
Big, big.  
But let me think, 25, minus 50, this is OK.  
Personally, I don't care about that.  
I don't care about their names, but you are absolutely right, Olivier.  
And now, this second, this.  
This is what I will have.  
From the Odio, yes?  
And now, what I want to calculate?  
I want to come play, that's all.  
I want to have a little customer.  
And in order to calculate the flow.  
Minus 100.  
Minus 100, yes, post out, yeah.  
And now, I'm gonna do this just for one unique period of time, but it will apply to all this.  
Earnings, sorry, in.  
Yes.  
What goes out from the company?  
100 or 125?  
26.  
As we go out of the company, make sense.  
Yep.  
Earnings goes out from the company.  
No, Hernández is not like a stroke.  
Taxes goes out from the company.  
Access goes home.  
And here is the point. How much money goes out from the company due to taxes? 25 or 50?  
These are the taxes you are paying.  
Those 50.  
Yes.  
So, total cash flow.  
Total cash flow will be 200 - 100, 100 - 15.  
27.  
This.  
Total cash flow will be this money came into my pocket.  
This money goes out from my pocket, and taxes goes out from my pocket.  
So, at the end, cash flow will be eighty-five, yes?  
What is the effect?  
What is the effect of an organization in the cash flow?  
Thanks to our mortisations.  
You are paying, you are paying, thanks to amortisations, you are paying less taxes.  
So.  
So, your cash flow will be bigger than yours.  
What?  
Yeah.  
You have understood this?  
Yeah, don't do this because.  
Let me reorder our life, but I have made a spoiler of next slides, yeah.  
So, what are we trying? We are trying to connect accounting statements.  
With finance, we will start with accounting statements.  
And from accounting statements.  
We will need to compute gas flows.  
No, you can take a picture.  
But what do you want the picture of that?  
We have one slide that would be same, and we will repeat. Yeah, you can take a pizza. Hey, have you done it yet? OK.  
Hey.  
Accounting principle governing accounting statements at the end.  
When talking about accountancy, this is not an accountancy class. This has to do with finance, yes? But when talking about accountancy,  
to take accountancy each year. So you care more about what is happening within a year than about the money coming in and going out. Yes?  
And then you think more on operations than on CapEx. You don't care too much about CapEx and returns. You care about how much money, about what is being done, what is being done during a period of time.  
What are we going to talk about today? We are going to talk about translating accounting earnings into cash flow. And in order to do that, we will need to add back non-cash expenses, depreciation, yes, what we have done on the blackboard.  
and then subtract cash flows, owes that are not expended. For example, capital expenditures.  
Yeah.  
Okay.  
What is this? A stylized income statement, normally.  
What the company do?  
Revenues.  
Yeah, talking about that process is a payment. We're talking about the, yeah.  
You will hear about first line and other line. Which one is the first line?  
Which one is the first line?  
Ruiz.  
Which one is, what is in the bottom line?  
Earnings after taxes, yes?  
Brilliant, minus the cost of good source and general cost.  
East.  
Normally, this is also called from this perspective, this is called also a...  
Operational result.  
Resolved from operations, yes?  
Are also.  
It's called, this is the result from operations, yes?  
And also, this is...  
These are earnings, earnings before success.  
Bent.  
The precision optimization makes sense.  
Depends on how you read it.  
And one important regarding finance, where are, when is a Vega?  
What is it?  
Have you ever heard of the Vega?  
The first time in that you hear me, no?  
This person, you hear me that.  
It's the first time. Vega, have you ever heard of Vega? Yeah. Vega is something that sounds a lot. Vega, I mean, you ask a person that has a study finance, what is a beta for all this person will tell you, oh, every day is earnings before interest, taxes, depreciation, and amortization.  
What reads person?  
who does not know anything regarding finance or if you talk with someone working in Goldman Sachs or DP Morgan. What is a Vega?  
They won't say, probably, before interest or they know it, but why is it that?  
All maths, money, the company's naked.  
Before thinking about that whole much, think about that car.  
Example in the.  
Thinking about the cow on me.  
How much milk the cow can generate?  
And what about...  
It, or what about taxes, or what about no home business?  
For example, thinking about NYU, home as students came.  
But then we have a problem now, how much business you are making?  
Thinking about that hotel.  
How much people are from, you understand what I'm saying?  
Then you can have that, but then came later.  
Makes sense.  
José.  
From here.  
We want to go to the Castro.  
Does this came into my company?  
Is this a positive cash flow?  
Yes.  
Is this a negative cash flow? Yes. Is this a negative cash flow? Yes.  
Is this something? No, this is just a result, yes?  
You know what I'm doing? I'm looking for customers.  
The conversation on amortization, does this goes out from my company? No.  
This is not money that goes out.  
Make sense?  
Earnings before interest, forward it. Interest expense, interest expense. Is this interest money that goes out from a company?  
Yes.  
Texas.  
Texas goes out for my company.  
Or, yes, you pay taxes.  
Yes.  
And there is one.  
Third thing that is money going out of the company that does not appear here, careful with that.  
I need your attention, yes? And this is key. What is this? Accountancy. What are we looking for? Gas flows.  
There are two important things, or at least three. One thing regarding things that we will see at the end, but two more, two important things.  
This money?  
This money?  
I don't go out from the command.  
I have told you here, yes?  
This money does not go out.  
You look here.  
Interest expense goes out.  
Yes, but you are missing something that goes out from the company and is not there.  
Do you only pay interest expense, or do you pay something else?  
You also pay back to it.  
Not only expensive, you also pay back a bit.  
Then, then.  
Does not appear in the P&L statement, and paying back debt is something.  
But they discuss it.  
Careful with earnings, earnings.  
are not your friend. That's who are your friend. Why earnings are not your friend? Basically, because of this depreciation and amortization. That does not, that don't go out from the company. These don't go out from the company.  
And here you have debt that goes out from your company, but do not appear there. Make sense?  
Summary of today's class. Summary of today's class. One thing are earnings and another thing are cash flow. They can look the same, but they are not the same.  
Which one, which is the difference? Basically, this one and then and that one, yep.  
Say it again, say you said.  
One thing are earnings. A different thing are cash flows. What are cash flows, money that came in minus money that goes out. What are earnings, the result from the piano. Why cash flows are not the same than earnings? Because.  
Depreciation and amortization are subtracted in order to calculate earnings, but depreciation and amortization is not money that goes out from your company.  
And also here, talking about debt, you only have interest expense, but you don't have the debt that you paid back to your debt.  
Yep.  
Okay, stylized balance sheet. I'm going to go quick. This is a balance sheet. Yes, I'm here. Marketable securities.  
Operation, operating assets and liabilities minus that.  
Minus equity. Yes, this is the balance sheet. All these things, if you add all these things, should be the same than these ones. Yeah.  
Depreciation. Amanda, this is the example that you wrote on the blackboard. Yes, accounting earnings do not the debt capital. Let us go directly to the, let us go directly to the exercise. Every year is minus 20.  
Hey.  
Corporate taxes up. I have not used the same numbers. I'm going to do it again with the numbers. I don't have. I have not memorized and this hard.  
I'm gonna calculate this. Let me come here.  
You are purchasing assembling line for 100 generates 4 million per year for 10 year and cost.  
Forty.  
Cost twenty-five per year, this hour.  
Incomes.  
Expenses.  
And...  
Hernández.  
Yep.  
Sorry.  
What is the idea?  
You are considering purchasing for 100? Yes, for 100.  
Hundred is how much the assembling line will cost, yeah?  
And what is the idea of this? That you are going to, this will depreciate over 10 years using straight line depreciation. Make sense?  
So.  
Yeah, Brett.  
The conversation, yes.  
Would be a 10% of 100.  
So, this would be...  
I'm gonna put...  
Positive numbers, yes.  
So what are my incomes? Incomes minus expenses minus the depreciation? My earnings would be 5, earnings before taxes. I would have.  
Taxes.  
Off.  
That's so 20%.  
And earnings after taxes.  
5 minus 1. Makes sense.  
Let me come here.  
What is this?  
This is...  
I prefer you first to understand, and then we will try to understand it like.  
All of you understand this?  
This is an accountant.  
What I'm going to calculate now?  
I'm gonna calculate.  
Cash flow, yes. How are we going to calculate cash flow?  
Income gaming, yes.  
Expenses.  
Goes out, twenty-five.  
Makes sense.  
Ana.  
Depreciation does not go out. Earnings does not go out. And taxes.  
Go out, yes?  
So, what is going to be?  
That's flow.  
The total sum of this.  
That would, that would be.  
Ford.  
Earnings are of four, but cash flow is 40.  
Make sense?  
This 14 will happen during 10 years. Will it be worth it to take the project or not?  
Will it be worthy?  
Minus 100, yes, and I will get forty-four.  
Next.  
Ten years, yep.  
How can I know if this will be worthy or not?  
How can I know it?  
In this case, why? Because...  
In order to calculate the MPV, I would need to know a discounting rate.  
6.64  
If you tell me, Luis, that is going to rate this 4 percent.  
If this country rate is 6%, I will tell you. Oh, it's okay. I'm looking for a 4% of Redondo.  
This fits. Now, nice. I'm looking for a 10% return. Don't overtake this project.  
Yep.  
And now, here.  
Operating profits.  
Five.  
Each year, operating has to do with 40 operating are these ones, yes?  
Then, after taxes, poor. Make sense?  
Before Texas.  
After taxes, yeah, and at the end, in terms of cash flow.  
But do we have 40?  
Make sense?  
Do you understand what I'm talking about? What is the important thing of today's class? On one hand, understanding what I'm talking about, and on the other one,  
Knowing that what we are looking at then is taking cash flows and calculating net present value of 6 or IRR of 6.  
No, no, it didn't pass away.  
OK, depreciation, project earnings, and then...  
And then you can calculate in this case, IRR in order to see if this makes sense or not. Yes?  
Take an idea.  
I've already told you, accountants consider interest payments as an operating expenses.  
These are not related to operations, yes?  
And also, it's not written here. Careful, because...  
Also, you should pay back the debt.  
Accountants only consider interest payments. Make sense?  
Normally, when talking about corporate finance, but this is out of the syllabs, yes? Normally, we talk about the debt service.  
What is the debt service, the sum of?  
Interest expenses plus debt payback.  
The service is the total amount of money that you pay back to the bank.  
How much money you pay to the bank? You don't only pay, you not only pay expenses, you also pay back the debt. And this is called debt service. Make sense?  
For me, that service.  
is the finance thing, is the finance idea. Interest expenses has to do more with accountants.  
You see what I mean?  
Finance, in finance, what do we need? Simple things, big numbers, simple things. Yep.  
Okay. And then the second adjustment, I'm going to go quickly over this, is just also working capital. What is the problem with working capital? There are two problems with working capital. One is that the company can be growing and while growing.  
You will need more money.  
And the money that appears on your PML? Yes, why? Because you have...  
Inventors.  
Did you buy things for the inventory?  
This money will not appear, and this money you need to put. You understand what I'm saying?  
It.  
Mind that you want to create a project, you will need, if you want to buy, if you want to have a storage, yes?  
You will need money in order to buy the things before someone will buy. Yes? You will need money for the inventory and also you will need money in order to finance your clients that have not paid yet.  
And also, you are finance yourself with your suppliers, because you don't pay your suppliers immediately.  
But I want you to see the distinguish between.  
what appears on accountancy and what you will find in the company when investing. Make sense?  
Here, imagine you run a retail shoe chain. This quarter, you buy 2 million pairs of shoes for $30 each, yes?  
This money will go out from your pocket.  
This money will be a negative cash flow. Make sense?  
Yep, I'm gonna go quickly.  
At the end, what are we looking for? We are looking for a magic formula. I don't believe in formulas. I don't like formulas. Yes. But this formula is you start with operating profit and you get to cash flows. Yes.  
My recommendation, don't think too much about this formula and think about the process. Try to understand each part of the process. Make sense?  
How to handle gas?  
Okay.  
Personally, my recommendation would be to be rich.  
And if you are rich, there won't be any problem of cash. Careful because you can have more cash than what you need.  
and it has a cost. And normally you will need cash because you don't know what could happen. Also regarding finance, we could be talking for hours about this slide, so I won't talk anymore. You want to talk more about these kind of things, we can talk. Yes, business, entrepreneurship, you have a business plan, I can work with you over this.  
It won't be the first time yet.  
Hey, and then Alba.  
What can you find here? Apple, Apple, P&L, Apple, profit and losses statement. Apple, how do you call this? Income and, I would call it P&L, profit and losses statement. But you can call this with different names.  
Revenues minus expenses, yeah?  
Then the balance it and knowing.  
The accountancy, no, in finance statements, you can calculate cash flows, capital expenditures, working capital, and at the end, EBITDA and finally cash flows. Excellence.  
Any questions from today's class? Next day, we will continue over to this class, but discounting Castros.  
Next day, we will discount Kaslow.  
that what is to discount cash flows at the end, continue working with Pamela Palomo.  
At the cash flow summary, we can compute free cash flows from accounting statements, but need to adjust measures for accounting time.  
Yeah.  
I owe you 2 minutes. Sorry for that.