---
titulo: "Foundations of Finance – Session 19: CAPM, Beta, Leverage and WACC"
fecha: 2026-11-04
curso: "Foundations of Finance (Fall 2026)"
sesion: 19
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: impartida
rectificado: 2026-11-09
---

# Foundations of Finance – Session 19

## CAPM, Beta, Leverage and WACC

**Date:** November 4, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 19 connected **Portfolio Theory with Corporate Finance**.

The previous sessions developed:

- Expected return.
- Variance and standard deviation.
- Covariance and correlation.
- Diversification.
- Efficient Frontier.
- Tangency Portfolio.
- Systematic and idiosyncratic risk.

The central question now becomes:

> **How much return should investors require for bearing systematic risk?**

The answer leads to:

- Beta.
- CAPM.
- Security Market Line.
- Cost of equity.
- Leverage.
- Cost of debt.
- Weighted Average Cost of Capital.

The main conceptual chain is:

$$
\boxed{
Diversification \rightarrow Systematic\ Risk \rightarrow Beta \rightarrow CAPM \rightarrow \text{Cost of Equity} \rightarrow WACC
}
$$

---

## 2. Finance and Uncertainty

The session began by returning to the core definition of the course:

> **Finance is about managing an unpredictable future.**

We cannot know future prices, rates, economic conditions or political events with certainty.

That lack of knowledge is:

$$
\boxed{
\text{Uncertainty}
}
$$

Finance exists because the future is uncertain.

If the future were perfectly known, much of what we study in finance would no longer be necessary.

---

## 3. Review: Diversification Does Not Eliminate All Risk

Suppose a portfolio contains more and more securities.

If all covariances were zero, individual firm-specific risk could theoretically be diversified almost completely away.

But in reality:

$$
\text{Cov}(R_i,R_j)\neq0
$$

for many securities.

Companies are exposed to common economic forces.

Therefore:

$$
\boxed{
Total\ Risk
=
Idiosyncratic\ Risk
+
Systematic\ Risk
}
$$

### Idiosyncratic Risk

Firm-specific risk.

It can be diversified away.

### Systematic Risk

Risk related to common market forces.

It cannot be diversified away.

This distinction is the foundation of CAPM.

---

## 4. Which Risk Should Investors Be Paid For?

If idiosyncratic risk can be eliminated through diversification, investors should not receive additional expected return merely for choosing to remain poorly diversified.

Therefore:

$$
\boxed{
Expected\ Return
\text{ compensates investors for }
Systematic\ Risk
}
$$

This changes the way risk is measured.

In Markowitz Portfolio Theory, we focused heavily on:

$$
\sigma
$$

In CAPM, the relevant measure becomes:

$$
\boxed{
\beta
}
$$

---

## 5. Beta

Beta measures the sensitivity of an asset's return to movements in the market.

It is defined as:

$$
\boxed{
\beta_i=
\frac{\text{Cov}(R_i,R_M)}
{\text{Var}(R_M)}
}
$$

where:

- $R_i$ = return on asset $i$;
- $R_M$ = market return.

Beta is therefore closely related to a regression coefficient.

It measures how much market-related risk an asset contains.

---

## 6. Interpreting Beta

For the market portfolio:

$$
\boxed{
\beta_M=1
}
$$

because:

$$
\beta_M=
\frac{\text{Cov}(R_M,R_M)}
{\text{Var}(R_M)}
=
1
$$

For the risk-free asset:

$$
\boxed{
\beta_f=0
}
$$

because its return does not vary with the market.

For an individual security:

### If

$$
\beta_i \gt 1
$$

the security is more sensitive to market movements than the market itself.

### If

$$
\beta_i \lt 1
$$

the security has lower systematic sensitivity.

### If

$$
\beta_i=1
$$

it has the same systematic sensitivity as the market.

The higher beta is, the greater the relevant risk under CAPM.

---

## 7. CAPM

The Capital Asset Pricing Model connects systematic risk with required return:

$$
\boxed{
E(R_i)
=
R_f+
\beta_i[E(R_M)-R_f]
}
$$

where:

- $R_f$ = risk-free rate;
- $E(R_M)$ = expected market return;
- $\beta_i$ = systematic risk of asset $i$.

The expression:

$$
\boxed{
E(R_M)-R_f
}
$$

is the:

$$
\boxed{
\text{Market Risk Premium}
}
$$

Therefore:

$$
\boxed{
Required\ Return
=
Risk\text{-}Free\ Rate
+
Beta\times Market\ Risk\ Premium
}
$$

---

## 8. The Intuition Behind CAPM

CAPM expresses a very simple principle:

> **The more systematic risk you bear, the more return you should require.**

If:

$$
\beta=0
$$

then:

$$
E(R)=R_f
$$

If:

$$
\beta=1
$$

then:

$$
E(R)=E(R_M)
$$

If:

$$
\beta \gt 1
$$

then required return is higher than the market return, assuming a positive market risk premium.

Thus:

$$
\boxed{
Beta\uparrow
\Rightarrow
Required\ Return\uparrow
}
$$

---

## 9. Security Market Line

The CAPM equation produces the:

$$
\boxed{
\text{Security Market Line — SML}
}
$$

Its horizontal axis is:

$$
\beta
$$

Its vertical axis is:

$$
E(R)
$$

The intercept is:

$$
R_f
$$

and the slope is:

$$
\boxed{
E(R_M)-R_f
}
$$

Therefore:

$$
\boxed{
Slope_{SML}=Market\ Risk\ Premium
}
$$

If CAPM holds, correctly priced securities should lie on this line.

---

## 10. CML Versus SML

The session connected the new Security Market Line with the Capital Market Line studied previously.

### Capital Market Line

Risk measure:

$$
\sigma
$$

It concerns efficient portfolios.

### Security Market Line

Risk measure:

$$
\beta
$$

It can be used to describe the required return on individual securities and portfolios.

This distinction is important:

$$
\boxed{
CML\rightarrow Total\ Volatility
}
$$

$$
\boxed{
SML\rightarrow Systematic\ Risk
}
$$

---

## 11. Beta of a Portfolio

Beta is particularly convenient because portfolio beta is linear.

For a portfolio:

$$
\boxed{
\beta_P=
\sum_{i=1}^{N}w_i\beta_i
}
$$

For two securities:

$$
\boxed{
\beta_P=
w_A\beta_A+w_B\beta_B
}
$$

Unlike portfolio variance, we do not need a long covariance formula to calculate portfolio beta.

This is one reason why CAPM dramatically simplifies the analysis.

---

## 12. From Portfolio Theory to Corporate Finance

The class then changed perspective.

Until now, we had mainly discussed investors choosing securities.

Now consider a company.

A company owns assets:

$$
\boxed{
Assets
}
$$

and those assets must be financed through:

$$
\boxed{
Debt+Equity
}
$$

Therefore:

$$
\boxed{
Assets=Debt+Equity
}
$$

The company generates a return from its assets, but that return must ultimately compensate the investors who finance those assets.

Those investors are:

- lenders;
- shareholders.

---

## 13. A Simple Leverage Example

Suppose a company owns assets worth:

$$
100
$$

financed with:

$$
50\ Equity
$$

and:

$$
50\ Debt
$$

Suppose the assets generate:

$$
10\%
$$

Therefore the company generates:

$$
10
$$

from its assets.

Suppose debt costs:

$$
5\%
$$

Interest on the 50 of debt is:

$$
50(0.05)=2.5
$$

The residual return belongs to shareholders:

$$
10-2.5=7.5
$$

Relative to their 50 of equity:

$$
\frac{7.5}{50}=15\%
$$

Thus:

$$
\boxed{
ROE=15\%
}
$$

even though the assets earn only:

$$
10\%
$$

This is the leverage effect.

---

## 14. Leverage Amplifies Equity Return

When the return generated by assets is greater than the cost of debt:

$$
R_A \gt R_D
$$

borrowing can increase the return earned by shareholders.

In the example:

$$
10\% \gt 5\%
$$

Therefore debt creates positive leverage.

But this does not create free money.

Higher expected equity return comes with higher equity risk.

Thus:

$$
\boxed{
Leverage\uparrow
\Rightarrow
Expected\ Equity\ Return\uparrow
}
$$

but also:

$$
\boxed{
Leverage\uparrow
\Rightarrow
Equity\ Risk\uparrow
}
$$

---

## 15. Cost of Debt and Cost of Equity

Debt and equity have very different economic characteristics.

### Debt

Lenders normally have contractual payments.

The firm has an obligation to pay:

- interest;
- principal.

Failure to pay may lead to default or bankruptcy.

### Equity

Shareholders do not normally receive a contractually guaranteed return.

Their return is an expectation rather than a fixed promise.

Therefore:

> **Cost of debt and cost of equity represent different types of claims on the company.**

---

## 16. Cost of Equity From CAPM

Once beta is known, CAPM provides the required return demanded by shareholders:

$$
\boxed{
R_E=
R_f+
\beta_E(R_M-R_f)
}
$$

This is the:

$$
\boxed{
\text{Cost of Equity}
}
$$

Therefore CAPM answers one of the major questions of corporate finance:

> **What return should shareholders require from the company?**

---

## 17. Cost of Debt

The cost of debt reflects the return required by lenders.

Conceptually it can be understood as:

$$
\boxed{
R_D
=
Risk\text{-}Free\ Rate
+
Credit\ Spread
}
$$

For example:

$$
R_f=4\%
$$

and a credit spread of:

$$
1\%
$$

give:

$$
\boxed{
R_D=5\%
}
$$

The spread compensates the lender for the additional credit risk of the borrower.

---

## 18. Weighted Average Cost of Capital

A company financed with both debt and equity has to compensate both groups of capital providers.

The overall required return on its assets is therefore a weighted average.

This is the:

$$
\boxed{
\text{Weighted Average Cost of Capital — WACC}
}
$$

The standard expression is:

$$
\boxed{
WACC= \frac{E}{D+E}R_E + \frac{D}{D+E}R_D(1-T)
}
$$

where:

- $E$ = market value of equity;
- $D$ = market value of debt;
- $R_E$ = cost of equity;
- $R_D$ = cost of debt;
- $T$ = corporate tax rate.

---

## 19. Why Debt Is Adjusted for Taxes

Interest payments reduce taxable income.

Therefore debt creates a tax benefit.

This is why the debt component in WACC appears as:

$$
\boxed{
R_D(1-T)
}
$$

The after-tax cost of debt is lower than the pre-tax cost of debt.

This reflects the:

$$
\boxed{
\text{Interest Tax Shield}
}
$$

Equity does not receive the same adjustment because dividends are paid after corporate taxes.

---

## 20. The Economic Meaning of WACC

WACC represents the return required by the investors financing the firm's assets.

Conceptually:

$$
\boxed{
Return\ Required\ on\ Assets
=
Weighted\ Return\ Required\ by
Debt\ and\ Equity
}
$$

This connects directly with capital budgeting.

If a project has risk comparable to the company's existing assets, WACC can serve as the discount rate used to calculate NPV.

Thus:

$$
\boxed{
\text{Project Return} \gt \text{WACC}
}
$$

suggests that the project can create value.

Again, we return to the same framework used throughout the course:

$$
\boxed{
Value
=
PV(Future\ Cash\ Flows)
}
$$

The new question is how to determine the appropriate $r$.

---

## 21. Asset Beta and Equity Beta

Once companies use debt, we must distinguish between:

- the risk of the underlying assets;
- the risk borne by shareholders.

The class introduced:

$$
\boxed{
\beta_A
}
$$

for the risk of the assets, and:

$$
\boxed{
\beta_E
}
$$

for the risk borne by equity holders.

Because lenders absorb part of the financing but shareholders receive the residual outcome, leverage increases equity risk.

Therefore:

$$
\boxed{
Debt\uparrow
\Rightarrow
\beta_E\uparrow
}
$$

assuming the underlying operating risk remains unchanged.

---

## 22. Levered and Unlevered Beta

The asset beta can also be interpreted as an **unlevered beta**:

$$
\boxed{
\beta_U
}
$$

Equity beta is the **levered beta**:

$$
\boxed{
\beta_L
}
$$

Under the simplifying assumption used in class that debt beta is approximately zero, the relationship can be expressed as:

$$
\boxed{
\beta_E
=
\beta_U
\left[
1+(1-T)\frac{D}{E}
\right]
}
$$

The intuition is more important than memorizing the formula:

> **Financial leverage transfers more of the company's business risk onto shareholders.**

Therefore leverage increases equity beta.

---

## 23. Business Risk Versus Financial Risk

This distinction allows us to separate two sources of equity risk.

### Business Risk

Risk generated by the firm's underlying assets and operations.

Captured by the unlevered or asset beta.

### Financial Risk

Additional risk created by the use of debt.

Thus:

$$
\boxed{
Equity\ Risk = \text{Business Risk} + Financial\ Leverage\ Effect
}
$$

A company with exactly the same operations can therefore have different equity risk depending on its capital structure.

---

## 24. The Architecture of the Course

The session connected several ideas that initially appeared independent.

### Portfolio Theory

Which risks can be diversified?

### Systematic Risk

Which risk remains?

### Beta

How much systematic risk does an asset have?

### CAPM

What return should investors require for that beta?

### Cost of Equity

What return do shareholders require?

### Cost of Debt

What return do lenders require?

### WACC

What is the overall required return on the company's assets?

Therefore:

$$
\boxed{
Portfolio\ Theory
\rightarrow
Beta
\rightarrow
CAPM
\rightarrow
Cost\ of\ Capital
\rightarrow
Valuation
}
$$

---

## 25. Five Ideas to Remember

1. **Only systematic risk should command a risk premium because idiosyncratic risk can be diversified away.**

2. **Beta measures systematic risk relative to the market.**

$$
\beta_i=
\frac{\text{Cov}(R_i,R_M)}
{\text{Var}(R_M)}
$$

3. **CAPM converts beta into required return.**

$$
E(R_i)=R_f+\beta_i[E(R_M)-R_f]
$$

4. **Leverage increases both the expected return and the risk borne by shareholders.**

5. **WACC combines the required returns of debt and equity and links CAPM back to project valuation.**

$$
WACC= \frac{E}{D+E}R_E+ \frac{D}{D+E}R_D(1-T)
$$

---

## 26. Before the Next Session

Students should be able to:

- Distinguish systematic and idiosyncratic risk.
- Explain why investors are compensated only for systematic risk.
- Calculate and interpret beta.
- Explain why:

$$
\beta_M=1
$$

and:

$$
\beta_f=0
$$

- Apply CAPM.
- Identify the market risk premium.
- Explain the Security Market Line.
- Distinguish the CML from the SML.
- Calculate portfolio beta.
- Explain how leverage changes equity return and equity risk.
- Distinguish asset beta from equity beta.
- Explain cost of debt and cost of equity.
- Calculate WACC.
- Explain the tax adjustment to the cost of debt.

The essential connection is:

$$
\boxed{
Risk \rightarrow Beta \rightarrow Required\ Return \rightarrow WACC \rightarrow Present\ Value
}
$$

The course has therefore returned to the same valuation principle from which it began — but we are now explaining where the discount rate comes from.

---

# Transcription
4 de noviembre de 2026, 5:04p.m.
1 h 20 min 3 s
Thank you.
Okay, what can you say?
regarding the mid-term selection sometimes. What can you think about mid-term selection sometimes? What is finance about?
Finance has to do with.
Please sign in as well.
Right.
But that's fine.
So, what is the means?
I mean.
Yeah, this is right.
But then.
Super news.
So, you're fine.
Well.
They at least that, in order to answer this question.
What is finance about?
How many times, then?
Do you, sir?
Of.
Yes.
Okay.
You know what I'm doing?
You know what is Google, not Google?
All of you have this link and get this link in the WhatsApp group.
Here, as they sleep, you will get.
Yeah.
What is 5 minutes about? How many times?
Finance has to do with the future.
Finance, can we predict the future?
No, but can we manage an unpredictable future?
Absolutely, this.
What do we call when you don't know what is gonna happen?
What do you call this lack of knowledge?
Uncertainty.
is part of the business. Pricing, uncertainty is part of what we do in finance. But finance business has to do with uncertainty, has to do with managing an unpredictable future.
All things we have seen in class depends on or lack of knowledge regarding the future, in case we would have a crystal ball.
I need works.
We would not need 5 minutes.
Anymore, yeah.
So, what is finance about? According to this finance is about managing an unpredictable future. The sources break into three key principles. Yeah, I like that. How many times?
Three separate classes: the 1st, the 2nd, and the 5th.
Also, whatever, today I have the videos.
So regarding finance, what can we say about what happened yesterday in the States or last night in Spain?
What can we say?
What is going to happen? Do we know?
I don't know. I don't have a crystal. We don't know that. What I can say, I'm not going to spend time. I'm not going to invest time in this because I have a lot of things to talk about.
I don't know what is gonna happen.
But my view is that...
volatility will increase, uncertainty will increase, and just focusing on volatility. I am just focusing on uncertainty.
What Trump will do? I don't know. Trump is unpredictable.
But my view, this is my view, is that he will go over the net.
We thought that what had happened is that Trump has lost.
At first, put a power.
In the two chambers, yes, lost power, but he's gonna do.
Greece is better. You will make more friends, declaration, more tariffs, more noise. Yes? You understand the point? I don't care about politics. I'm not talking about politics from my finance.
Beach a view.
But probably we will find is an increase of volatility.
And volatility increasing means.
What with increasing means more work for finance, more work for risk managers, more work for so.
So, what I'm gonna say would...
If everything would be flat, we would not need finance, too much finance professionals. Yep. And also at the same time, the rates are increasing. That means financing is more expensive. Who needs financing nowadays? Everyone needs financing, but especially.
Especially, we have not just one elephant in the room. We have two elephants in the room and we don't have.
We cannot fit both of them with the amount of money we have, the amount of liquidity we have. What is the name of these two elephants? One of them is public expenditure.
U.S. expenditure, yes.
The name of the other elephant is...
Yeah, yeah.
AI needs incredible huge amount of liquidity.
Government needs an incredible public administration, not just the government, not the government itself. All public administration, in the case of the states, the states and the case of Europe also need a lot of money.
And.
Two years ago, two years ago, a lot of financing came from current trade. We will talk about current trade, money from Japan that used to have low interest rates, not anymore, and also money from that.
Due to Iran war, this morning that was expected to come, we will get there in order to reconstruct.
Makes sense. What I'm talking about? I'm talking about my view. On one hand, more volatility.
And also, the midterms mean that, till today.
During the last three weeks, Frank was out of, Frank didn't say a word.
Also, all AI, all markets was artificial.
He.
In order, we don't need problems before meetups.
What is gonna happen after meetings? I don't know, I don't have a crystal ball, but probably we'll see, we'll probably a lot of things will happen, yeah.
The.
OK, you think a crash will happen? Yes, immediately after the term, or they...
The.
Yes, something is.
Hello.
My deal was that they have markets.
open two hours ago, three hours ago, because of the time change. My, if you will have, I think it was the first day of class, I told you, after the meeting, immediately after the meeting, we will see how.
Yes, I was saying midterms are over. Once we know what is going on in Mississippi, everything will come up.
There are several ideas, but I'm gonna go with you.
Markets expect.
The Democrats.
Because.
It was something that the markets expected.
Then, Antrophic needs time. Antrophic Club, they have announced their IPO. It has announced global total capitalization. I think it's over to three.
They have unknowns, my personal views that they are desperate, desperate. You do violence.
This lab has a fair price over earnings ratio of 400.
What am I going to do? This is incredible.
Done.
They are paying 400. If you buy Tesla stocks today, you are paying \$400.
Very unique.
Both parents.
BYD varies 20.
I'm not saying that I'm comparing just 20 with 400.
All these valuations are incredible hard. They need liquidity. They were maintaining these status before meters.
I don't know if this will happen just right now. I don't know, but personally my view is that everything is...
Everything is, I mean, of SP 500.
I don't have the number, but 30% probably would be would consist on the magnificent segment. Yes, so there should be a correction.
when the correction is going to happen, how big decoration is going to be, what faith is going to do, because there could be the correction and faith.
get money and they could transform the correction of the break into something softer.
I don't know, but something should happen. If you're like, let's say you're a stockholder, you're going to prepare for a big crash. Besides shorting it, how can you prepare to like make it through without losing? I like that question because I am not the one that will answer this question. You know what about it?
Water buffet is liquid since in October, one year ago, one year and a half. Let me, yes.
For how long?
So, um.
Okay.
Yeah, I mean, all of you know who is one about it, and...
Let me look for AI mode here.
Oh, it's not, yeah. Late 2026.
That way has 300.
It's entire video.
First quarter, at the end of the first quarter, I would bet, I would say that this from October 2026 and he starts out.
So, sorting is risky.
In liquid, not that much. If you sort at the end, you should buy it.
Why, if you are liquid, you are you get you suggest what?
What about the people waiting?
Bye.
One more question. Yeah. Do you think, I know there's a big like crash today, do you think there's any chance of it rebounding before it like crashes even more or even just straight? I mean, always you are thinking in, are you thinking about buying the deep? No, I like.
You know what is by the de?
Yeah. Buy the deep is something that all people that trade, now it's about buy the deep. Do you think that a stock is, so for example, last week in a...
In the fall, I think it was 30% within a day. If a stock falls a lot, buying the de means that there is time for a rebound.
It's like trying to catch knives when they are in the air. Can you catch it? Yes. What is the, what is the probability of you to cut yourself? Half.
There could be, there could start falling and then there could be rebounds. Yes. But my view is that it will fall, it will be, it will have small rebounds, but it will continue fall.
No, not from now on. I mean, it it should do it. It has passed in the it has happened in the past.
Let me show you also, is the 100.
Yeah.
Here, if you see here, year 2000, it goes down, up, down, backs this year, 2000.
This is the pandemic, but we are in an incredible rally.
This is not, this makes no sense. Just if 100 going up without falling. On one hand, there are cycles. Yes, cycles that last that things goes up, then goes down, goes up and goes up. But also, there are saying this. AI,
will make a deep change in the whole world productivity. But personally, I think we are far from that point.
Do you understand what I'm saying? AI will make a big change in productivity. In China, they are closer to big change. But in Europe, at least, we are far from this change. And before this change, there should happen crisis. Because nowadays, I think that we are living as if...
A I work.
We were making our life.
Perfect, at our life, thinking about public administration, thinking about factories, thinking about university class.
Are far from perfect.
Personally, I've got agents. Personally, I am changing my life in AI terms.
But then I see you have my glasses, like a glass was.
three, four years ago. I am talking, you are listening, I don't have too much exercises regarding with agents, I don't work too much with AI.
You understand what I'm saying?
There will be changes in the woodside.
Thanks to AI and productivity, but before that, there should be changes in the bad side, because there are a lot of people living.
For free.
And if they were just giving for free, it would not make two months.
The point is that not only they are in the appropriate, they have also...
They also are.
Doing things that make other people have suffer. A lot of people suffer. Let me start with the class, because before finishing, I should start. If I don't start, I would never finish.
OK, so there are this class.
These classes.
Simple, today, we are not going to see.
This is yours.
Today, we are not going to see anything.
Hard to understand. Last day class, mathematics.
Last week, classes, portfolio theory, mathematics were big.
Today, what we are going to talk about today is...
Simple to understand. I think there is complexity because we are going to connect.
Lot of dots, yes?
Let me start with the most complex thing.
But the most complex thing is to review last class.
Sorry, last week classes, yes.
This is Wednesdays. Yes, we have tons of facets, not just two. We have tons.
This is volatility.
We have, I said A, I said B, yes.
With great investment opportunities.
Then, instead of just having asset A and asset B, we have tons of assets. Yes, this is the minimum value portfolio. Here, we've got a risk-free asset, and we connect these risk-free assets with the tangent portfolio. Yes?
We have here loads of assets, yes.
The tiny portfolio can be called the market.
and this line can be called capital market flat. Make sense?
What did we do on Friday?
Ohh.
Do you think you came on Friday?
The stress.
In Friday, was a good choice, not to go.
This classic bodyboard.
In terms of comprehension, this, if you would have miss, you have miss, that's why they class.
You, we are gonna go back.
Because there is no. Today's class work. I'm going to review everything and I'm going to collect what we saw last class with.
And Diana, do you understand this?
This is from last Wednesday class.
This is Redondo.
This is the market. Last class, we talk about huge portfolios.
And then mark it at the end, now I'm gonna summarize.
And this is...
Volatility of the market, deviation of the market, the volatility of the market. Make sense?
For you.
Okay.
This is one second. What did we do last Friday? Instead of having just two stocks, we create a portfolio first with three stocks, then with five stocks, and then I make the number of stocks.
Ten to infinity, yes, when doing this thing.
When doing this?
We were playing the movie from here.
We calculate variance on. I'm gonna do it with just two stops. You will just be asked to play with two stops, thinking about the midterm, the final, and so on.
The 2 stops.
Weight one raised to the square times volatility variance plus weight 2 square variance 2 + 2 times weight one, weight 2 covariance between one and two of this.
We did this with two, with three, with four, with 10, with infinity, yes.
And what is the point? We get this class. This is absolutely important. This is the most important point regarding regarding last day's class, last Friday, Anastasia and Yelina. Two ideas. We introduced one new system.
where instead of talk about variation, we are talking about beta.
I will talk later about better. Today we will dedicate the whole class to talk about better. Yes?
And the idea that you should understand before that is, we thought that portfolio with infinitive assets. Yes, we did create that portfolio and we made it incredible huge.
Make sense?
We try to diversify away all risk.
Anne, did you just focus in variances?
If there will be yes variances, if all covariances were zero.
We.
Will be in a place where we can diversify away the whole risk.
But as far as there are covariances, no matter how big the portfolio is, you cannot diversify away the whole risk.
What does this mean? This means that, please, Anastasia and Angelina, this means that here we were talking about risk in general, and this risk includes 2 parts. One part,
That can be the very high away.
that belongs to the slope, that is idiosyncratic, and another part that cannot be diversified away, another part that is systematic.
As we get rid of the idiosyncratic part.
And we just focus on the systematic part, we move from this work to this work.
An English word?
Investors will be just paid for holding the systematic part of risk.
I want you to understand this, that it gets here, here.
We're talking about Greece.
I am with this, what I'm doing is simplifying reality. I am simplifying reality here.
Here, what do I have?
Can I use, can I use you?
This point is Angelina. This point is Anastasia. Yes. What happens with this part with this point? This point has one partner because of whatever last day.
This point is an end to class.
This is serious.
What does this line represent?
If I represent, I don't care about each one level of comprehension, level of English. This point represent the point of...
If I would have came to all classes, I would be on that point, yes.
Moving here, we are going to simplify life a lot. We will, we will continue talking about.
We don't like this, but instead of talking about volatility.
We are gonna talk a little bit.
What is?
Beta is a regression coefficient. It is the covariance between beta on asset A is the covariance between asset A and the market over the variance on the market. This is a regression coefficient. What is a regression coefficient?
Is a number that values from one?
The trunk, sorry, that is around one and it ranges, it ranges between minus infinity.
And infinity, that is around one is hard to say beta under zero, and beta normally is a number that is lower than one or higher than one, yes?
Is Vega.
Anastasia.
Is one.
What is beta of the market?
For values between asset A, market being asset A, the market is the valuation of the market.
variance on the market over variance on the market.
Without the market before.
We don't.
This is return on the market. Yes, this is return in general sale and return on the market. This is one, yes.
Risk-free Benito on the risk-free provided between the risk and the market is see over the values of the market is see. This is still the risk-free, yes.
And, once we move...
Do this work?
When talking about risk, I would not care about the.
I will consider all of you have attended all classes. I don't care about the number of classes you have attended. And the question I'm going to ask is so simple. The question is, how many hours have you studied?
The more time you have to study, the more there we go.
What is return on asset A in this new world? Return on asset A is going to be the risk-free asset plus beta on asset A times market premium, that is return on the market minus the risk-free rate. Yes.
OK, alright, this is still flat.
This is a line, and what does this line represent? If this is beta A,
It will be, it will be done.
SNL security marker line is the equation of this line that is this equation.
And when talking about...
If you tell me the number of hours you have studied, I will give you exactly the grade you will get. The more hours,
and more. Yes. What is the idea? We have moved into a much more simple work. Yes. What is better?
Risk, and once I know better.
I can calculate.
Once I know better, I can calculate.
The window, OK, respect the window, make sense.
This is from the other day's class. Today I have not talked about anything new yet.
And I'm going to start with an excerpt.
And then I start.
We can exercise.
Okay.
And for company, yes.
With assets.
Equal to 100 million, OK?
It would be.
Of 50 million, and...
The abilities that we got in bed of. Make sense?
Hundred.
Yeah.
Okay.
It was my mobile.
What are my assets?
My assets could be itinerary. I have a factory that's worth 100. Yes, who am I paying?
These assets have.
Equity.
Half with it, I've called the bank and the bank has financed me a loan yet.
Okay.
My assets, my assets will pay me.
Are we turned off?
My assets will pay me a withdrawal of 10%. Yep, let me.
Make sense?
I go to the Betancourt.
And the bank tells me.
Okay, you want my money?
How much I'm going to pay you?
How much am I gonna attack you?
How much the bank is going to charge me for this 50 million?
Great.
Hello.
Um...
How much are they going to charge for the debt? Yeah, I mean, you want 50 million. What the bank is... Okay, I lend you 50 million.
How expensive?
What is the market rate?
Then is what I expect to get the return. If I invest 100, I will expect to get 10%, yes?
Yeah.
Ohh, do you do 7? Yeah, about 4%? OK, yeah.
Nowadays, 4% is hard to work, because 4% is what fail.
I mean, 5%, because I really trust you, plus a spread of 100 basic.
Four percent plus 1% is 5%. Make sense?
I'm gonna turn tap 5%, yep.
I'm going to simplify this a lot. Yes, I'm going to simplify this a lot, but I want you to understand what I'm going to do.
My assets, please, my assets, give me a return off.
Ten percent, no, so if I invest 100, I will get.
One 100.
Yes.
Then I am financing this at a 5% rate, so if I...
Yeah, 50, how much I should pay back?
10%, sorry, 5, 5%, 2.5.
52.5, yes?
How much should I invest?
Yes.
What is going to be my return?
I'm gonna get...
Then.
Minus 2.5.
So, I will get...
Ohh, you see?
I am summarizing a lot of things.
And summarizing a lot of the things that let me move.
The ideas.
Oh, Max, I'm gonna get please, I want, I need your attention. Yes, then later I will do it with, I will show you how to.
The idea is.
There he is.
From this, then.
I'm getting.
One plus.
I am getting this, yes.
Under it.
And I assume.
Take out.
I should take Calvo.
Peace.
Thanks.
One plus.
A person.
And I should take out.
Is it me?
And we are doing this in and intuitive work, yes?
The bike step because I wanted to sleep and...
Yes, I'm getting 7.5.
And I have to miss if no.
Over.
No.
And this is gonna be...
At 50%, 15.5%, yes.
What is?
I'm gonna wait here; this is gonna be...
Hundred minus.
Yep.
What if this would be sent?
Ohh, you fifty-stay the same, yes?
If this would be 100%.
You see what I mean?
As I increase the rate.
You see, you see that?
As I increased it.
Books.
I am leveraging, I am increasing my return. I leverage on the bank. Make sense?
I mean the lower this is the higher the higher the rhythm. Make sense?
Okay.
So...
What is the return I will get from my assets?
There we come. I will get for my assist. Let me call you.
What? Waited Avenue's Coast of Cabral. Will, will, will.
What you are, what you were doing, but I don't want you to do the paper yet, because let me call it weighted average cost of capital. Yes, what is what?
Ten percent.
Yes.
What is what? Ten percent.
And what is going to be? What stands for? Weighted average. What does weighted average means?
Tell me, because 50% of 50%.
makes the numbers.
Let me call this 50%.
Cause on equity and let me call.
The 5% cost on that, yes?
Wait, that is?
It would be plus the more.
Equity over equity plus debt.
And here I put bed over equity plus.
You understand what I'm doing?
The more this way, the more this.
The more the late.
The more they de.
The more peace will impact.
Yeah.
Careful, careful, because there is something missing.
I'm going step by step, but you know that, let me summarize that formula.
I have a project that will pay me at the person.
If I go to the bank and the bank charges me a 5%.
Yeah.
The more the money, the more I invest money from the bank.
The more money I invest from the bank.
The more we come in, we get.
Because.
This 10% will go to the bank in the form of 5% that I am getting.
You guys make sense?
Is he just?
Please, this is that makes sense.
There is one thing missing.
Are you studying only?
It would be.
Equity is being paid in the form of dividends.
Why are you there?
is being paid in the form of financial expenses.
Financial expenses are paid before taxes, while dividends are paid after taxes. So when talking about debt,
We should consider that one minus taxes.
This is an effect from buses.
Make sense?
Now, you can look in the slides and you will find this work formula somewhere.
But I want, really, to explain, because I don't want you to see that formula get frozen.
And then I want you to understand first that I want to understand, getting into the formalize, much more simple.
Makes sense.
Did it?
The idea is so simple and plain with readers.
The bank will give me a 5%. How did I get?
It's 5% from the free risk rate, and I have put over a split.
And, on the other hand...
It's gonna hold this.
Oh, a spoiler. Oh, I will get...
Spoiler of today's class. How I will get this state that we don't? Where will I get it?
Yep.
Makes sense.
Okay.
Let me explain you one more thing, and then we will be done with the class. And then I should go over the slides in order to tell you this is that, this is that. I want to first you to understand this.
Okay.
Fifty percent, for example, in your example, this.
I am.
Five percent, yes.
I'm not 10%.
These are different windows, isn't it?
They don't do that. They used to wait less suspect.
One child, another one, another three different people.
So, it becomes means...
Three.
Will be done there, sir.
And this makes sense among all of these returns.
Which will?
He paid for soup.
Goodbye.
Yeah.
which will be paid for sure, the bank.
Beta is slower, the project beta compared with this, because this one is assuming part of the risk that the bank is not assuming.
Have you understood that? If you have understood that, we are going to discuss. I'm going to put this into that.
And I'm going to do a little demonstration. You don't need to understand, to fully understand this demonstration. Yes?
I'm going to distinguish between value.
Of the company, is there anything?
And value, value of the company and leverage, yes?
And we want to start here. Value.
Of the company, where it is?
is going to be one, two, the value of the company, our evidence.
Plus.
Babe.
Times it does.
I'm not the one that who says that he smoked. The point is, death is good. But
Because, thanks today, thanks today, you can.
Going to bigger projects and accepting part of the risk.
Of the project.
Why you will bear this risk? Why will you bear this risk? Because you trust yourself. You know that you are going to do things well. How do you quantify this? Because part of the debt will not be paid off. Yes. And also, we know that the value
Leverage.
The value of the company leverage is equal to equity.
Last day, no?
Make sense?
No, no, no, we are going to reach this much.
This is the value of the company leverage, is the value of the company. We thought
Then.
plus the part of the debt that times to taxes we save because of that is the part of debt we save came to the value of the government together. But this is just a quick demonstration. If I make these two things,
The 2 values equal, yeah, I will get that.
Value U + v * P.
This is equal to this is equal to a + b, yes.
So, I can get that, and this is the value of the company.
Is equal to.
Lee.
Plus.
Three times 19, yeah.
Are you with me?
If we have.
We have.
Hey, Cortana, another is.
We called it.
Yes, we have the company.
We sold it.
The return on the assets, we have the company, we hope that the return on assets will be required.
So, we don't know anything without that.
Make sense?
Yep.
So...
I'm gonna say...
From here.
You come, Ana.
This is for you.
This corresponds with the movement, yes.
And in terms of beta of risk.
If I consider that.
The company we sold.
Ruiz.
Vega.
You would respond, Luis.
Beta de.
Times.
You done?
From the company, yes.
Excess.
Less.
Plan up for people.
People.
Meet that from Vega movie.
Times P.
Plus.
The counting times 3 * 1 minus, yes.
In order to simplify, in order to simplify, we are going to consider beta of the debt. Yes, in order to simplify, we are going to consider that beta of the debt.
James Muszynski.
And here we've got.
Vidal.
Many times we turn on you.
Did you?
And from there, we got eight times.
E + B.
One minus, yes.
Vega rice.
You?
And this is equal to BE times T.
Make sense?
What do I have here?
I have the relationship between.
Vega.
We throw lemonade.
And Peter of the shareholders considering.
Yes.
This is cold, normally.
You will find this, this is all.
Vega without leverage and leverage Vega.
Yep.
And I'm gonna write.
Give me the formula that you've got in the slides.
That can be hit from there, but I didn't want to make mistakes. I have not been more. It's just...
Thank you, you see.
Down on the ABS.
Liberate speaker.
And the value.
Look here, I'm dividing this times E, this times E, yes.
Vega.
Is beta is.
When?
Plus B / B.
One minus.
Thanks, Vega, yep.
Makes sense.
From here.
Why I want you to see?
What is that?
This is the relationship between...
Vega.
Of the project.
Without the problem.
With no assuming reason.
From there, from there.
Remind that I'm going to finance.
I'm going to finance.
This project, we told it.
I will look for a 10%, no mind that this will be at the percent.
If I go to the bank.
If I go to the bank.
In order, if I go to the bank, in order for the finance, and the bank would review something similar to our wage to rate, yes?
I am assuming Morales.
I am assuming Morales.
The bigger this ratio.
The more the better.
I can't rewrite this.
Like this.
It will be plus then over everything.
I'm considering this one, I'm considering Texas, yes, but what do we have here?
The ratio.
How much, how much that I am considering over my.
I forget about this area.
What I wanted to understand?
From last class, we introduced the concept of Petra.
What is better? Risk. It's a number that tells me directly how much return dwell.
Yes, the higher Vega, the higher the Redondo.
And today, we have introduced 2 new concepts.
One concert is the concert of.
It's better.
And another concept is the concept of what weighted average cost of capital. Both new contexts depend on.
Corporate finance, events on debt.
If there were no beds.
He there were no bit.
There were no that.
Cost of agreement.
Would be the same as what?
Yes.
Ana.
Leverage Vega.
Leverage Vega will be the same as...
Normal better. Normal better. Yes, yes, yes.
If there were no death.
If that will be zero, I will be working in a company without it.
Cost of equity.
Will be the same as what?
And?
The risk.
Play a movie.
Will be the risk of my assets or will be the risk without that, because I am not considering considering them, yes?
Us.
Three, as I am going to the bank.
In order to buy that, Vega, sorry, in order to buy that.
As I go to the bank.
I am getting more return than expected.
I am getting more return than expected.
But how I should pay this return?
In terms of...
I am getting.
More return, but I am very, my equity will have a higher beta than the beta that I would have in case I will not be financing myself. Makes sense.
Yes.
You have understood these two things you are doing with today's class, and let me go quickly through the slides, yeah?
But I think you are.
But today I did this.
Equity, better son, as in better.
The pool play approach. I like this pool play approach, but I prefer mine.
Then, the weighted average cost of capital, and then the cost of bed and the cost of bed, so we...
Partial review of the last class. What is the security market line? What is its slope?
What is the security factor line? The security factor line is this line, yes?
The slope of decline is a matter preview.
If we return on the market, I think that we should rate this whole max.
Risk you want me to bear in terms of meta unit.
The automatic is 1, the beta would be two, and the premium would be two, the beta would be three. Make sense?
What does beta measure? What is the beta of the market portfolio? What? Beta of the market portfolio? What? Yep.
Now.
Play.
Fundamental business, Ruiz.
If we were just talking about portfolio theory.
We will just be talking about our level vectors, but because today we will be working.
Within companies.
Not only the assets will have a better, but also equity has a better. Yep.
That is it.
What is equity beta? Beta on equity, level X beta is the beta without level X.
Thanks.
This is, ohh, yes, this is without considering that beta of the I have considered that beta of the yep.
This is the one that...
Exactly.
Now, project specific betas. The point is, let me go how to calculate the set betas. I'm going here.
I want you to see this.
These are our movements, yes?
The assets these companies are investing.
Are relatively risky assets depending on the market, yes?
But.
The risk of these companies of the serves is a riskier.
These companies are riskier than the assets these companies are investing. Why? Because all these companies?
But it's their confusion.
Yeah.
This is just in order to say that, because they, these companies gets finance, the risk on these companies is hard.
If these companies were not...
If this ratio would be a one.
This number, this number would be the same.
but as these companies has a large part of their assets on debt, financed by debt.
Other ingredients, the risk to rate. The risk to rate matters. Yes, the risk to rate matters. I have considered the risk to rate 0, and now what we see in two slides, how to calculate the cost of debt. Yes.
Hey, and then the market premium market premiums also matters.
This is the most important slide from today's class.
The what?
When talking about corporate finance, when talking about corporate finance, normally we don't talk in terms of risk or better. Normally we talk in terms of return. Yes?
And what is the work? The work, tell me, the weighted average cost of capital.
The return I am expecting from my assets.
Is a weighted average between what?
Between what?
The banks charge me and what my shareholders say.
The higher.
The higher this way, the more this return will impact on the water.
The more the debt, the more fees we going back from debt and the higher return on equity would be.
Yep.
But we have seen that. Make sense?
Let me go. Market value of debt and equity.
This is much more interesting. And we have gone through the class. We have gone in the class through this.
What is Victoria?
Most update.
How are we going to determine determine cost of this? Correct.
What I told you, yeah, risk rate, now it's on 4%.
And I have told you that the spread of 100 basic points.
Yep, in our example, it was a pipe.
Now, promise versus expected deals.
case should be. Let me come here now. What is this idea is important, not for today, not for today. For today, what is important is understanding.
But the idea is, what is the cost of it?
Something the bank will charge you.
Yes, the bank is going to ask me 4 or 5 percent. I cannot stay.
But when talking about what my shareholders expect.
What if I don't pay a 20% or a 50% to my shareholders?
It does not matter as much as not paying the bank. Paying the bank is an obligation.
Pay a bank is a no obligation.
and return to our shareholders in cyber responsibility.
Do you understand the difference between an obligation and our responsibility?
The day, the time that will happen, most of you will get here. This is an obligation. Attending to class is more responsibility.
If you have not.
Attend to last class has something had happened.
No, you are up to date.
But if you don't attend, you are to the meter.
Not paying the bank means going into a bankruptcy process.
That's a way that.
Painting holders is as looking a whole shareholders.
You will pay them in one year time. What can you tell them in one year time? This year is better. Look at these numbers.
You understand what I mean? The natural of these two things is different, so in this sense...
It's not the same to promise than to expect and what you give. Yeah. One say this, how are we going to promise expected, we will stress, no, how are we going to determine the cost of equity?
We wake up.
We will come back to Cafe.
Later, not later today, later in that, yes?
Makes sense? Any questions?
Here you put one example where you just have the numbers, you plug the numbers, and you will get this one example similar to this one. But personally, in this case, I have preferred first to show you the example.
And understand.
And then go through the theory, then what they are doing in the slide that is at the opposite.
I think that you will understand things better. First, we get the idea in practice, and then we go through the theory. Make sense?
Yes, you can go to the numbers and you will learn. And then beta, if you are financing.
In order to get a higher return.
Beta is higher.
Makes sense.
So let me, I should have one slide here at the end with a sample. Let me summarize today's class.
Regarding maths, important things has already been seen last week, so we're thinking about problem set.
That should be delivered next Wednesday.
Next Wednesday, we will have class online. I will share with you the room before. Yes, so.
We will see each other through whom. I will serve the WhatsApp, the through whom link through WhatsApp. Yes, but in order to summarize today's class, we will get ideas. First idea, what we have seen last week.
CML, SML, betas, and portfolio field.
Going through this is important, knowing how to calculate.
The balance on a portfolio is important. Knowing how to calculate beta on a portfolio is important, yes?
And from today's class.
We have used beta concept in order to go through combines, in order to go through corporate finance.
We have seen two ideas. On one hand, return, we can finance at a lower rate going to the bank.
And if you finance a lower rate, what are you assuming?
Which?
A highly, a highly. Make sense?
Enjoy the long weekend.
No plus, Brad.
No class.
Friday and Monday. Next Wednesday we have class and next Friday we have class.
I think it's in the syllabus in the sense.
Any questions?
Now, go to problem set three and whatever you have, if you need questions, if you have questions, please ask.
