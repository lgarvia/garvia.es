---
titulo: "Foundations of Finance – Session 22: Capital Structure, Modigliani–Miller and Payout Policy"
fecha: 2026-11-16
curso: "Foundations of Finance (Fall 2026)"
sesion: 22
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: impartida
---

# Foundations of Finance – Session 22

## Capital Structure, Modigliani–Miller and Payout Policy

**Date:** November 16, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid  
**Professor:** Luis Garvía Vega  

---

## 1. Executive Summary: The Core Message in One Sentence

> **Capital structure (the mix of debt and equity) does not create economic value on its own. In the real world, debt matters solely due to two offsetting market frictions: corporate taxes (which favor debt through the interest tax shield) and financial distress costs (which penalize excessive debt).**

Every theoretical model, empirical observation, and valuation debate covered in this session is an application of this fundamental principle.

---

## 2. The Analytical Framework: The Pie Theory (Pizza Analogy)

Before diving into algebraic formulations, the intuition was established through the **Pizza Analogy**:
- A firm's assets generate a stream of operating cash flows (the "pie").
- Financing decisions simply dictate how that pie is sliced between shareholders (equity) and creditors (debt).
- In a frictionless market, slicing a pizza into 4, 8, or 16 slices does not alter the size, nutritional value, or market price of the pizza itself.

$$
\boxed{
V = D + E
}
$$

The value of the firm ($V$) is determined entirely by the profitability, asset productivity, and risk of its real investment decisions (the left-hand side of the balance sheet), never by the financial packaging (the right-hand side of the balance sheet).

---

## 3. Modigliani–Miller Proposition I (Without Taxes: Capital Structure Irrelevance)

Under the baseline assumptions of perfect capital markets:
1. No transaction costs or issuance fees.
2. No taxes (corporate or personal).
3. Equal borrowing costs for individuals and corporations.
4. Symmetric information and no bankruptcy costs.

$$
\boxed{
V_L = V_U
}
$$

*Where:*
- $V_L$: Total market value of the levered firm ($D + E$).
- $V_U$: Total market value of the unlevered firm ($E_U$).

### 3.1. The Proof: Homemade Leverage
If a levered firm were valued more highly than an unlevered twin firm ($V_L > V_U$), investors would immediately execute an arbitrage strategy:
- Sell their overvalued shares in the levered firm.
- Borrow on their personal account at the market rate ($r_D$).
- Buy shares in the cheaper unlevered firm, replicating the exact risk-return payoff of the levered equity.
This process of **homemade leverage** drives prices back until $V_L = V_U$.

---

## 4. Modigliani–Miller Proposition II (Without Taxes: The Cost of Equity)

A common fallacy in corporate boardrooms is that borrowing money is "cheap" compared to equity ($R_D < R_E$), and therefore borrowing more must lower the overall cost of capital.

Modigliani and Miller proved that as the firm takes on more debt:
1. Debtholders have seniority over cash flows.
2. Shareholders absorb greater residual volatility and higher financial risk.
3. Consequently, the required return on equity ($R_E$) increases in exact proportion to the debt-to-equity ratio ($D/E$):

$$
\boxed{
R_E = R_A + \frac{D}{E} (R_A - R_D)
}
$$

*Where:*
- $R_E$: Expected return on equity.
- $R_A$: Return on unlevered assets (the fundamental business risk).
- $R_D$: Cost of debt.
- $\frac{D}{E}$: Leverage ratio.

### 4.1. Invariance of the Weighted Average Cost of Capital (WACC)
Because the rising cost of equity perfectly offsets the benefit of using cheaper debt, the overall cost of capital remains strictly invariant:

$$
\boxed{
\text{WACC} = \frac{E}{V} R_E + \frac{D}{V} R_D = R_A
}
$$

---

## 5. Adding Real-World Frictions: Corporate Taxes and the Interest Tax Shield

In reality, corporate tax systems treat interest and dividends asymmetrically:
- **Interest payments** on debt are tax-deductible expenses before calculating taxable income.
- **Dividends and retained earnings** are distributed from after-tax net income.

This tax asymmetry creates an **Interest Tax Shield (ITS)** that reduces total corporate tax liability:

$$
\boxed{
\text{Annual Tax Shield} = \tau_C \times (r_D \cdot D)
}
$$

Assuming permanent debt, the present value of the interest tax shield discounted at the debt rate is:

$$
\boxed{
PV(\text{Tax Shield}) = \frac{\tau_C \cdot r_D \cdot D}{r_D} = \tau_C \cdot D
}
$$

### 5.1. Modigliani–Miller Proposition I with Taxes
The value of the levered firm increases directly with every dollar of debt issued:

$$
\boxed{
V_L = V_U + \tau_C \cdot D
}
$$

And the after-tax WACC declines as leverage increases:

$$
\boxed{
\text{WACC}_{\text{after-tax}} = \frac{E}{V} R_E + \frac{D}{V} R_D (1 - \tau_C)
}
$$

---

## 6. The Trade-Off Theory: Bankruptcy and Financial Distress Costs

If taxes were the only friction, firms would maximize value by borrowing nearly 100% debt. In practice, debt brings the risk of financial distress.

### 6.1. Categories of Financial Distress Costs
1. **Direct Costs**: Legal fees, court proceedings, restructuring accountants, and administrative reorganization expenses (typically 3–5% of firm value).
2. **Indirect Costs**: Substantially larger (10–20% of firm value), including:
   - Loss of customers who fear lack of future support or warranties.
   - Key employee defections (brain drain).
   - Suppliers demanding upfront cash and refusing credit terms.
   - Agency conflicts: **Debt overhang / underinvestment** (shareholders reject positive NPV projects if gains go to debtholders) and **risk-shifting / asset substitution** (excessive gambling with creditor funds).

### 6.2. The Trade-Off Equation
The optimal capital structure balances the marginal tax benefits against the marginal expected costs of financial distress:

$$
\boxed{
V_L = V_U + PV(\text{Tax Shield}) - PV(\text{Financial Distress})
}
$$

---

## 7. Real-World Case Study: Nvidia Valuation, Circular Financing & Customer Concentration

During the session, the theoretical framework of capital structure and earnings sustainability was grounded in a live analysis of **Nvidia**:
1. **Valuation Multiples vs. Fundamentals**:
   - Market capitalization reaching historic milestones ($\> \$3.5\text{T}–\$5\text{T}$) driven by extreme earnings expansion.
   - The critical distinction between **market price** and **intrinsic economic value**.
2. **Customer Concentration Risk**:
   - Analysis of SEC 10-Q filings revealing that over 40% of revenue originates from just 3 hyperscaler clients (Microsoft, Amazon, Google).
3. **Circular Financing / Vendor Financing**:
   - Tech ecosystems where hardware providers invest in AI start-ups (e.g., Anthropic, OpenAI, CoreWeave) who in turn contractually spend that capital purchasing chips from the investor.
   - Why debt covenants, liquidity lines, and circular revenue recognition create systemic fragility when infrastructure build-out pauses.

---

## 8. Payout Policy: Dividends vs. Share Repurchases

The final block addressed how firms return capital to investors:

### 8.1. Dividend Irrelevance (Modigliani–Miller)
In a frictionless world, whether a firm pays dividends or repurchases shares does not alter shareholder wealth:
- Paying a dividend reduces the ex-dividend share price by the exact amount of the cash paid per share.
- Repurchasing shares reduces the share count, keeping the remaining share price intact while increasing earnings per share (EPS).

### 8.2. Growth vs. Mature Firms
- **High-Growth Firms**: Have abundant positive-NPV projects ($r > \text{WACC}$). Reinvesting free cash flow maximizes shareholder value; paying dividends would force costly external financing.
- **Mature Cash Cows**: Slower growth, limited reinvestment opportunities. Returning cash prevents managerial empire-building and negative-NPV investments.

---

## 9. Looking Ahead: Next Session Roadmap

With Corporate Finance (Capital Budgeting, Valuation, Capital Structure, and Payout Policy) fully completed, the final module of the course begins next session:
- **Derivative Instruments**: Options, Futures, Forwards, and Risk Hedging.
- **Preparation for the Comprehensive Final Exam** (scheduled for December 9, 2026).

---

# Transcription
16 de noviembre de 2026, 5:05p.m.
1 h 18 min 36 s
Okay, I'm recording.  
Aman.  
Game running.  
And let me start with today's class.  
Today, we will finish these things regarding corporate.  
Corporate fine, not corporate, yeah, corporate fine, yeah, some steps, some things you need to know in order to work with corporate finance, yes, then we are gonna finish with this, and really simple.  
This class is not going to be, is not difficult.  
And next day, we will start with derivatives, last part of the course, yep.  
It will also be simple.  
Almost everything is done.  
Ascriptions going.  
Bye.  
Okay.  
Welcome.  
But.  
Vega.  
Oh.  
And also, we deliver.  
Hey.  
Yeah, I mean.  
Is it the 13th of December? December? Well, 12 or 13th? This is 30th.  
30. What do you say that number? 38? 30. 30.  
31.  
I heard you.  
Thanks.  
Any questions regarding anything?  
Five, 10, 3, 4, 38.  
Will be Monday.  
Pretty nice.  
Sunday.  
Hey, are you over here?  
I care, we will be.  
29th place.  
The movie elections.  
Can they come understand the victims?  
A smoothie.  
And it will talk about.  
People vote on.  
From your history.  
I'm not going to tell you anything that you don't know. Another important idea.  
As greatly as it was.  
Hey there, see what? Ohh, yeah, so I'm gonna...  
There were things then.  
Play Sanyoga.  
We are going to Phoenix.  
Yeah, yeah.  
All this idea regarding with on Ruiz.  
Companies, yeah.  
With me.  
Or, for your fear?  
To combine several stores, and we see, we saw, ohh, Greece.  
And we don't work for later, OK?  
We spoke about.  
Beat in my race, please.  
Right, then we move in.  
We get rid of the idiosyncratic part. We just focus on the systematic.  
Are the risk, and we move Rome.  
Talking about.  
Variance of the portfolio is way right, where we move from there, from that, from variance to beta.  
Later was, yes.  
And.  
We close.  
And listen, same.  
You want me to pay?  
You want me to bear more risk? You should pay me if we go.  
Then we moved into.  
Then we move into.  
We talk a little bit about the, and we need to.  
When talking about corporate finance.  
Introduce what the what?  
We had assets and we were talking about the capital structure.  
You can go to the bank and ask for a local.  
Is long, will you be dead?  
That's OK.  
Babe, we are going close.  
Capital.  
We will also talk about.  
Payout policy.  
And what will you know? Yes, I'm going to summarize what I was going to do today.  
First Lady.  
Capital. In a perfect world, yes. In a perfect world, capital is structure.  
That doesn't matter.  
My perfect work.  
Imagine that I am a student.  
Come, Miguel.  
A perfect war.  
It won't matter if...  
The course is defined by myself.  
Hi, my dad or man.  
Or buy a grab.  
Hold on, yes.  
Capital is not sure, that's not perfect.  
Hey.  
We will review this idea that bed is cheaper and they say it will be riskier. Yes, we will review this the most important.  
You got it, yes?  
And then...  
First, we will see that times two.  
Those facts.  
Because there are taxes.  
Big man.  
Thinking just about Texas.  
The more you can finance with it, the less taxes you will pay.  
But then...  
What do we move?  
OK, then.  
Practice.  
Even more dead, the better. Then last question, next question is then why I don't?  
Yes.  
for everything.  
Then we go into the 4th idea, that is because...  
You just have it, you can go into a bankruptcy.  
I, I, also.  
Yeah.  
Um...  
Then.  
We will finish.  
Talking a little bit.  
About, yes, we will be talking about what we do.  
Okay.  
Before that, personal review of the last class.  
Let me ask that question. First one. What is the difference between total risk and systematic risk?  
Right.  
Full risk is systematic.  
How much?  
We are taking risk that's associated with the other.  
That's systematic.  
Yeah.  
And you are.  
Even.  
What is it? How will you call? What is the difference between total risk and systematic risk differences? Yes, you got it. The one that belongs to you.  
Which one are investors paid for?  
Then, appearance asset earned 10%.  
I need finance. I hope then we did at 5%.  
But we told that since their holders heard.  
OK.  
Sussex, Erin, Temper.  
We told, let me ask more questions, yeah? A fear, assets and per person, yes?  
Imagine that.  
I don't go to the bank. I finance everything with my own money. That will be my equity return.  
Yes.  
I have data for a person.  
If I would have, yes, 90% of equity.  
And 10% of that?  
I, I, I should make the numbers with the way that this.  
I would be paying the bank a little bit for a 5%, so my withdraw will be 11%, yes?  
I don't consider that. I have finance.  
Fifty percent.  
I am paid to a week.  
Quick, quick number.  
Assets, 100, assets, 10%.  
So, it's gonna be 100, yes?  
Have.  
About 5%.  
Yeah.  
Yeah.  
Fifty?  
And I will get.  
I will let it be 7 only bye.  
Make sense?  
So, what is...  
Vega.  
You understand what I'm doing?  
Why is it 57? Why is it 55?  
But maybe 10% return on 15. You want this? Yeah. Yes, abstract. Why does it happen?  
Why is why does it have to equal?  
One 100, 10%, 100.  
Why is this equal to 150? Why does why does like when you calculate 53.5?  
Why do you have to make the 57.5 to equal one time? Why can't it? Because these are assets.  
This is what I get from...  
Yeah, really, please?  
And this is Edwin, yes, maybe else.  
Without financing, I put 100 into the project.  
And I will get, yeah.  
Half of the money came from the bank.  
So, if half of the money came from the bank, I don't need to put 100. I would just need to put the half. And then, thinking about the bank.  
They give me today 50, I should pay them back. I'm superizing, I'm super fine, but I should pay them back.  
52.5.  
I probably would be 110.  
But 52.5 will go to the bank.  
No.  
But wouldn't be my pocket is fifty-seven.5, so the shareholders return goes up, yeah.  
Is this?  
The most important idea I want you to have with you.  
And today we are going to talk about this. We will review it again and again, the ideas.  
This is.  
They return on the asset.  
This is the cost of death, return on death.  
Yeah, and because I am leveraging.  
I am getting return on equity.  
Let me write this with another formula.  
Let me write this with another program.  
Yes, right. We don't understand.  
Join me welcome.  
We go on the times, over every, plus, plus.  
No, honestly, thanks.  
That's it.  
If they would be CEO.  
If there would be zero.  
If there would be 0, if there would be 0, I would just have everything.  
If there will be zero, we turn on, yes, it will be we turn on everything.  
This is 50% or 50%.  
Return on.  
This is the example you got.  
Here, make sense.  
Now.  
Next question.  
Why is the equity beta?  
Of a liberate firm higher than its acid beta.  
Okay.  
Yeah, I like that.  
It will be Vega.  
It's higher than this bed.  
Because I'm getting more return, the higher the return, the higher the risk. Makes sense.  
And then, I want you to...  
Think about this weeks and strong, and strong form why information that one.  
which form would make water methods value investing users. I'm going to fill it with water. I want you to answer back that.  
We should be stronger and stronger.  
Week is historical.  
Semi-strong is historical plus like publicly available information and strong is that plus instant.  
Absolutely.  
And which form would make Warren Buffett value investing business?  
No, because Chrome has to do it.  
This don't have to do with exciting for me.  
What I'm having, normally.  
Carmen.  
praying with inside the information.  
But another normally takes to make this style results.  
Oh, oh, what about it, May?  
By investing in undervalued.  
How did he get that this company were undervalued?  
Understanding the model, examining the company.  
Which type of information?  
At which type of information? Where about if they?  
Alright, tell me.  
If, if I work with, ohh yeah, it took book value.  
He can analyze, but not from exciting information from what you can find in SCC public report. Yes, do you remember last question has to do with that? Do you remember what I did on class last day with Nvidia?  
With the media public information.  
Thanks to AI, I took SEC Bally records from NVIDIA.  
And what did I tell you regarding this family recall?  
That they were they were a client concentration.  
Forty percent of their business has to do with just green light. I was using public information.  
By taking that public information, what could be my conclusion?  
That the media is over-body.  
I'm not playing with inside information; I am just using public records.  
**.  
I made family records and my conclusion was...  
First thing I did.  
First thing I did, I do.  
And it records, and I asked that.  
Is this it or not?  
And celebrity told me, I look in the earrings.  
EC.  
With public information, then I analyzed earnings. I saw clients concentration and my.  
My conclusion was that there was risk.  
So, if there is risk, as we go.  
So, my conclusion was that video was...  
Overvalue.  
What time for finally CCP value investing?  
This is the semi strong call.  
Makes sense.  
Did I look at historical data?  
No, no, I didn't do charts. If we look at historical, let me go with that.  
Let me go quick with the BDS chat. Yep.  
I'm gonna take historical data.  
Nvidia.  
What are these?  
Now, if I do technical analysis, yes, what can I say?  
By looking at historical prices, yes?  
What can I say? I can call you that here is a racist, racist, yes?  
Here is a racism and engage.  
His point, if he take it, he can't rebound, or if he breaks his persistence, he can continue drop, he can continue going down, yes?  
What I'm doing here, I don't think this is going up. There is a trend and the price, there is a resistance.  
Yep.  
You understand what I'm saying? By looking historical prices and trends?  
What would be my conclusion?  
Oh, you did a game last class.  
Analyze videos.  
Do you remember that the day of the leaders? You asked me about when the grass was going to happen? I told you. It's immediately, yeah.  
I was joking.  
The baby.  
Yeah.  
That's.  
That's valid. We were analyzing the media and the conclusion. Sorry, I forgot that you didn't get it. And my conclusion was that there was client concentration. It was nice. They transcript. I don't know if I have served last class. I want to do it in video. The conclusion was that.  
It went over by.  
And.  
Continue falling.  
Whatever.  
Now, it seems that...  
You asked me about when the crash was going to happen, and I was right.  
Me being right, trying to predict the future is something absolutely exceptional.  
You understand what I mean? That there are times that you are right, but most of the times you are wrong. So  
Whatever, why do customer concentrate? Let me.  
Last Friday, what I did was so quick, not quick. I dedicated the whole, almost the whole class. But I started asking ChatGPT. I don't remember if you do a ChatGPT or Gemini, and I don't care.  
What about the media's price? And ChatGPT told me it's cheap.  
And then I start an Ana an analysis.  
I start analyzing the company.  
And my conclusion?  
Was that after analyzing the competitors, customer concentration and circular financing matter?  
Why?  
because valuation, Nvidia valuation was being done because of their earnings.  
But earnings.  
Nvidia earnings.  
Mind that my earnings are harder. Yes, Shray, you are my client.  
Give me a hard head.  
Do you have a market? Sure.  
Finance you. How do you grow the market? Please give me a market and these are all my yard.  
Circular height.  
They have just three big clients. They used to have four, they still have four, but they have to say in their record. 40% three previous records, they used to say 61% for clients. But Nvidia's clients are being financed by Nvidia.  
White and Vega clients.  
Buy things from Nvidia because they are buying chips for their CBBs.  
But who is finding these financing or where are these guys finding these finance?  
What is going to happen this Thursday? Oh, earnings on on a media, and also on profit. IPO.  
I am going to be whatever makes sense.  
Let me start with today's class.  
So weak.  
We are going to start talking about...  
a perfect market where there are no taxes, no bankruptcy costs, no agency problems. Investors can borrow or lend, investors can buy or sell, markets are efficient.  
No information of symmetry. Do you know what is asymmetric information?  
Someone not having all the information, or you having more?  
No transaction costs, yeah.  
Ohh, I'm pleased.  
I want all of your attention, please.  
Talking about information. Last day we talked about it. I don't care to repeat. At least it's talking of the regarding finance.  
is one of the most important things.  
I personally know what is talking about today.  
How do traders make decisions nowadays?  
Based on.  
AI.  
Does AI introduce a bias?  
Everyone, this is your.  
Everyone is taking decisions based on AI, and you ask AI.  
He said, Vega, a good company.  
But AI is gonna work.  
Yes.  
May.  
We are an I.A. model.  
First question I would ask.  
Who is the prettiest? If you are open-air, your answer will not be your guide. Your answer probably will be Samana.  
I am pretty. You will always say yes, because I have your life. All of you are aware of these bias of you. And what is the problem?  
I'm talking with an AI model, yes?  
Do you want to kill yourself?  
But the AI, we're not sure.  
Never, never. I won't kill myself.  
Asking an AI model about the media valuation.  
If the AI model will actually come back, OK, NBA is forcing.  
What is going to happen with AI business?  
You will have problems, and AI never is going to hit itself.  
Do you see these bias?  
Also, if traders are just using AI, once they all get the same answer.  
From my point of view, we are with that.  
There is, you are talking about the semi-strong form.  
Yeah.  
On my point, OK, everyone pays same decision based on same information.  
This is before the information, yes?  
Good news or bad news? Good. Good news.  
Normally, there are good news what will happen with the price.  
It will go up, no? Now imagine that everyone is...  
Using same models, asking same questions, and same models, once the piece of information is there, what is going to happen?  
That everyone will take same decision at the same time.  
There is an overreaction.  
And once they, so is there what is going to happen?  
I will.  
Or, probably, we can have some delays.  
Everyone is taking decision at the same time. Let me show you another thing that will happen.  
You early, we have, ohh, we have one month, we have three weeks, and this Thursday is...  
Is this Thursday is in traffic? Let me just...  
And for big IBO, I think it's the survey.  
This Wednesday.  
Is Wednesday, that is Thursday afternoon, yeah?  
What is going to happen with some traffic IPO?  
There are, for each stock, there are six people asking for stocks, yeah?  
What is going to happen? Let me show you what is going to happen.  
I don't have a crystal ball, but thinking about that, that I have written.  
What is going to happen? The initial price was 160.  
In the short term, we are going to see.  
A robot.  
And the pan, what car what car is normally after a pan?  
Hello!  
Do you see this pattern?  
This pattern is the same pattern that we are going to see. We can probably.  
And I'm talking about historical tests. I'm talking about technical. So, is the market efficient in the week four? If there are others, market is not efficient.  
Let me show you another one in order to finish with this. Do you see this part, this pattern?  
You will continue plumbing, but let me show you.  
Going base IPO.  
Were you based at the beginning?  
Is.  
It's year 2021, the beginning, then one year later, or less one year later.  
All people that made this IPO were.  
Holding.  
Where holding the stock now, SpaceX stock is being hold by people, yes, and after one year.  
Vidal.  
Vidal and with the Bitcoin price, the pattern in media was sorry, the pattern coin base was following was similar to Bitcoin.  
This pattern is similar to the coin, and nowadays it's...  
close to 100.  
What is going to happen this Thursday, this Wednesday, with some traffic? I don't know. But what I am sure will happen at the beginning in APAM,  
Then, down.  
And if a lot of people think there is gonna be a Pamela.  
Then, we won't see it.  
Because if a lot of people think something is going to happen, probably it will happen the reverse.  
But I think that with AI, we are.  
New, so not too much people is speaking.  
A lot of people are using AI in order to invest, but not too much people is thinking about the effects of AI in the markets. Make sense?  
Yep.  
Okay, let me go back.  
I don't want to run out of time. So what are we going to do today? First, we are going to talk about an idealized, perfect financial market.  
Without all these things, and then later we will talk a little about taxes.  
And then later we will talk about.  
Back up.  
And then we'll talk about...  
Evidence policy, but these are the yeah.  
Make sense?  
Okay.  
This idea is important.  
In a perfect market with no taxes or costs.  
The value of the company.  
does not depend on how much the combined whole.  
Makes sense.  
The beginning.  
This is something that was stated by Modigliani and Miller, who authors who received Nobel Prize.  
Before Modi, Viviania Miller said that.  
What was the prevalent grief?  
Most of people say that banks add value. They used to add value. Yes, but this is not true.  
In other words, capital structure is irrelevant.  
How can this be true?  
This is simple.  
This is simple.  
We use some.  
Which circle is bigger?  
The one on the left or the one on the right?  
Sorry for what I'm going to ask. This is day. Sorry for what I'm going to ask. You have one pizza. Yes?  
How you are going to eat more with the pizza divided into four slice or divided into eight slice?  
Hey.  
Personally, I prefer if I didn't play. I feel as if I were eating more.  
Yes.  
This is the first number. Make sense?  
But then we see that in liabilities being more changes like the test return.  
Yes, yes.  
Let me think.  
Yes, Pat.  
In this case...  
We are there.  
And we don't, I made.  
Is a 10% for everything. There we go. I'm getting is a 10% for everything. Yes.  
Here, imagine that this would be hot instead of being yes, that work, yes?  
This is getting a 5% return.  
This is getting a 15% return, but the whole average will pay off.  
At 10%, if there are no taxes, if there were no taxes.  
Bali will not say it.  
But, because the overall.  
You over now?  
In terms of pizza.  
in terms of pizza.  
You are eating by yourself, everything, yes?  
Or, in this case...  
Right.  
Base case.  
You are eating.  
It's the same pizza, but in this case...  
You go with your girlfriend?  
I think there is no normally then I eat more than my wife.  
You go with your girlfriend and your girlfriend eat less.  
You are eating same things.  
Why the bank is going to lend you money?  
Why are you not employing when you want?  
Make money.  
What? I'm going to let him out.  
Okay.  
Because...  
If this goes well, it will work.  
It means goes back.  
These people will be paying people.  
They are so different, and if it is, if it goes well.  
Moving.  
Everything, and she will need everything.  
If I slide.  
For pizza.  
close the floor.  
So, why would be your daughter, your girlfriend, will still be safe?  
Thanks. Open the floor.  
You can you leave this.  
Makes sense.  
The bank will always receive back this money. But I'm talking about finance. All due finance.  
How many people are going to eat the pizza? We not affect.  
The size of the bits.  
Another way in order to understand it.  
In terms of arbitrage.  
Imagine that you want to buy the company for me.  
And the company has that.  
Yep.  
You will buy me, mind that the company has 50% of debt and 50% of equity. Yep.  
You will buy from me.  
The company.  
And keep the debt and pay.  
Or you can buy from me, the company, and pay the debt to the bank.  
At the end, you will receive the same thing. You understand what I mean?  
Also, I can go to the bank, ask for a loan, send you the company, and you can pay back the loan. Yeah.  
Now.  
Why?  
Banks are going to lend you money.  
Why banks are going to lend you money? Because their money...  
It's cheaper, and it's cheaper because it bears less risk. Make sense?  
Does it make sense?  
Okay.  
Yes, one thing, everyone, please, quickly, quickly.  
What I'm saying is...  
I get finance.  
And getting finance means super money, but need to bear more risk.  
Yep.  
Sorry, I have got your Olivia, the idea.  
I am looking for...  
Save money, if the money is cheaper, I will get more return.  
Understood.  
It has another side. It has another face.  
If I am getting more return is because I am bearing more risk.  
Make sense? Okay, you can continue. So, second, proposition, in a perfect market with no taxes or cost of final distress or other market imperfections,  
The cost of equity is the cost of assets.  
plus the debt equity ratio times the spread between the cost of assets and cost of debt.  
Where is, where is that?  
You can fast, you can move.  
From this formula.  
With this formula is, yes, return on equity is.  
There we go on the outside.  
Plus this, yeah.  
OK.  
If payback would be ratio is 0.  
If this is here, we turn like it is equal to this.  
If this is half person.  
It would be half person.  
How?  
of the spread the bank is not getting, will be back, will be back.  
Yeah.  
Let's apply this formula here.  
Yes.  
Why do you really make with me?  
I don't know. Let's calculate. What is return on asset? 10%? Yes?  
And the spread, the spread is of 5%.  
And this is 5% more, 50%, so.  
A wrong, yes.  
Thanks, we spread that over everything, that over everything. What?  
Five percent plus sorry, 10% plus 5% will be 15%.  
Makes sense.  
The idea is so simple: this is zero.  
This would be the same, and then more of it.  
Elmo Odio.  
Yeah.  
Did you see that?  
Same formula, almost same formula will apply to risk.  
If that is you, thank you, Ruiz.  
The more it will be ratio.  
And more.  
Risk equity will be better. Make sense?  
It moved to.  
This one.  
Yeah.  
Please.  
Big one.  
And see.  
All this is the same as talking.  
About risk, yes.  
Good. Do you understand leverage Vega?  
Important thing.  
Important thing.  
I want you to be sure of this.  
How is it?  
This one formula is without taxes.  
I am not considering the taxi.  
When are you going to find the final? That's all, without tax.  
We saw we have previously shown one that includes taxes.  
But you are not going to see taxes. Make sense?  
So, here, careful because this has the pay of taxes, we are not, we are going to now the pay of taxes.  
What?  
Is it the one?  
Yes, it affects the one move world.  
So what is the idea? Two ideas. First idea is that...  
Thanks to the bank.  
We can get more return from our money leverage.  
But more return means...  
More return means.  
More return means more risk.  
Yep.  
Any questions?  
This is the same.  
With a graph, considering.  
Work is constant.  
Work is constant and as return on debt.  
work is constant and as you increase the leverage ratio, return on equity increases. If debt to equity is 0,  
This is the same with a graph. If that work with is 0.  
Yep.  
If that's working.  
You see them, brother.  
Why is the problem on this point?  
Oh, Max did.  
Can you ask the bank?  
Come at it and rest the back.  
And I have, I said, so 100, yes, I said, so 100, how much can I ask the bank?  
20 person.  
Twenty percent makes sense.  
Is it all?  
Twenty percent makes sense of it, 50% makes sense.  
Sixty.  
Hundred percent.  
What about with them? I ask all the money.  
Can you tell me?  
What is the point that reaching one point, reaching one point?  
Yes.  
They are going to charge me more window.  
So there would be one point that I would not.  
This would be cheap in one point, reaching this point, the cost of that will increase.  
But that's the story, that there is one point where the man starts saying, okay, I have free money, bill one point. Make sense?  
OK, understood this.  
Dread.  
Anastasia.  
Simple, Olivia.  
And will.  
Okay.  
Now.  
Ohh, this is an example.  
What will be its work? A firm has a return on assets of 10%. Its debt is risk-free and its cost of debt is 6%. Assume a perfect market. If the firm has no debt, what is its cost of equity?  
Equal to the asset, 10%, then if the firm rises.  
that equal to 50%.  
Of its equity, what will be cost of equity?  
The work will be 10%, and cost of equity will be...  
If it is 50%, debt to equity ratio would be one.  
So it would be 40%, one, 4%, yep.  
EC numbers.  
So, a summary of what I have said.  
No matter in which, in how many slides you divide the pizza, the pizza will have same size.  
Make sense? Now, what if I have taxes?  
What if there are taxes?  
What if I go tax?  
I bought taxes.  
Then more.  
Big.  
The mortgage may the label have taxes, yes?  
Miguel, I go.  
I have taxes.  
Yes.  
I have taxes, but I even have it.  
Everything he said, yes?  
I receive money, and with this money I should first pay taxes.  
And then give this morning to the support.  
Understood.  
I wish this money. With this money, I should pay taxes.  
Thirty percent. I wish you money and 30% of my earnings.  
To be paid off on tax.  
And then I give the rest to my circle, understood.  
Now, imagine that I have 50% of debt and 50% on it. I will proceed to save money.  
I will receive.  
Same one.  
I will pay back.  
I will pay back.  
Hey, Bang!  
Before calculating both earnings and taxes.  
Made sense.  
So total amount of taxes that I will pay will be lower.  
Exit.  
So if there are taxes, the more the debt, the more the company will work.  
Because.  
Ask Mon.  
To the back, we provoked his cup.  
Saving will provoke fiscal savings.  
I will have a piece of access, if it's so it's just the interest.  
Ohh.  
So, wouldn't you attack still on like the amount that you?  
Received as.  
Like A lot.  
Since it's just the interest, let me use this example, you know, yes.  
Let me just focus.  
On the index, yeah.  
Ben.  
Without taxes.  
Let me, yes.  
It should be between 20 to 30%, but let me use 50%, yes, in order to make numbers clear, yes.  
We go in Bensis.  
Sorry, without taxes, without a bit.  
I'll cook this.  
Out of this, we will be paid us.  
But imagine, I have these earnings, I distribute all my earnings as dividends, yes?  
The Vidal will be here.  
For 5.  
Yes.  
Makes sense.  
Are you following me? Yeah. Okay. Now.  
If I have 50% of that.  
My earnings will be of 7.5 instead of 10.  
No.  
I will pay the taxes. I will pay 50% of 7.5.  
Texas here, Texas is 5 here. Texas will be.  
3.75 and at the end the dividend will be 3.75.  
No.  
Bye. Think about it.  
It would be fun.  
You're doing great, hi.  
Over 100.  
That is at 5% and this will be 3.75 over 50. That will be.  
That's more.  
So, Texas.  
For 3.75%, and this is half of taxes, yes, and this nine of this is.  
3.75%, yeah.  
Let me do the number.  
Excel.  
Hundred.  
I'm great.  
Hey.  
You.  
It would be.  
One, the to equity ratio.  
Yes, sir. Assets. Yep.  
Assets of 100.  
Bed.  
And right first, it would be.  
That.  
Hey.  
Now.  
Raise your...  
Two percent or...  
It's right, 50%.  
And.  
Yes, that is going to be percent times this number.  
And then with this one, my 100 minus this one makes sense.  
Ana.  
Vidal.  
Return is 10%.  
On.  
Cost of debt is 5%.  
The ratio.  
Um...  
Ratio, having the ratio.  
That ratio is equity.  
Is that over? Yes, yes, this is the duration.  
And debt to equity ratio, in terms of...  
It over equity.  
Hey.  
Is.  
The number would be.  
I have.  
Then, over.  
I said, yeah.  
Unknowing this debt over asset.  
Hey.  
Asset is equal to every plus.  
And let me divide everything by...  
No.  
over that's it no I'm looking for sorry I'm looking for that over  
I'm looking for it with the.  
Yes.  
That over equity is equal to asset.  
Over everything.  
Minus one.  
And now, in this...  
It over, I have.  
Then.  
One.  
Yep.  
Bent over.  
I see.  
It over, I said, please.  
One minus over here, yep.  
Yeah.  
I see.  
Yes.  
One minus.  
Make sense?  
But how?  
Looking for...  
OK.  
And over.  
That's it.  
I'm complicated. Sorry for that.  
Are you there?  
That our equity is.  
Mine.  
Good.  
You should see one, two.  
I said minus, I said minus.  
My, for this.  
This is one set over everything.  
I got crazy, sorry for that.  
I don't know how to calculate the relationship between one and the other one. Now, I have collapsed. Sorry. Return assets, 10%, debt, 5%. What I want, if this is 0, this works, this is 50. Equity is.  
Equity is 50%.  
Equity is.  
Ten percent.  
Plus.  
That.  
Times, I'm going to use the formula that I have given gave you before, minus 10%.  
And this being 100%.  
Yeah, and this works.  
This is the...  
over it. Yes, these are the numbers you've got on the blackboard.  
The more, if this is 0.  
Sorry, this is you, if that to equity ratio.  
Would be zero.  
assets and equity will be the same, yes? As I increase, leverage.  
Return on equity. Let me just make these numbers.  
As I make this number bigger.  
This is becoming bigger, makes sense. And once it's 50%,  
This becomes... Oh, I'm running out of time, sorry.  
Let me go with.  
Deviates.  
The idea is, if I include taxes, if I include taxes,  
The company will work more due to the fiscal seal, due to the taxes seal. Excellence?  
Yep.  
Another step, taxes. The more the debt, the better, because thanks to taxes, we don't pay as much money.  
Then also we should include bankruptcy costs.  
What has to do with bankruptcy? The more debt we have.  
the more probability of going into a bankruptcy. Make sense?  
The more dead.  
The list.  
The bank will trust us.  
The more the debt, the less the bank will trust us, and if the bank...  
Does not trust us.  
What is going to happen with financing?  
The cost of financing will increase. Make sense?  
So.  
So, if there are bankruptcy...  
At the beginning, the more dead, the better, yes?  
The more dead, the better.  
But there is one point where you to bankruptcy cost.  
The bank will stop trusting us and will tell us, I'm not going to finance you.  
Makes sense.  
Yep.  
So what is the idea? Three levels. First level.  
That does not matter.  
Second letter.  
Thanks to taxes, it matters in a good way.  
Third level. There is one point where no matter how good you are, banks won't trust you. There is a risk of going into bankruptcy and I will not lend you everything. Make sense?  
That's it. Just in order to finish, one more thing.  
Payout policy.  
Dividends policy, yes? So quick, so easy to understand. Yes, oh, one minute.  
Imagine that you are a growth company, a company that is going to grow. What are you going to do with your dividends?  
You won't pay dividend because you will keep all dividends with yourself. Make sense?  
Once you have grown, you will pay dividends.  
And then in order to finish, do you know what are aristocrats of dividend? Have you heard of them?  
Aristocrats or dividend? Dividends are aristocrats. Let me look for it. Yes.  
Dividend Aristocrats.  
Are you have a dividend as aristocrats?  
A dividend.  
Have you heard about Coca-Cola?  
Colgate, Colgate.  
Forget it.  
What is a dividend aristocrat? It is a company that has been paying dividend.  
a growing, a dividend that has been grown in a constant way for last 25 year, an aristocrat and a game for more than 50 years.  
Here, you've got...  
The dividends, and also you can Google.  
King dividends, yes.  
Let me look for NYU Finance. Today's class, it was simple class.  
Today's class is just understanding that the more.  
The more the dead, the more return.  
Capital structure does not really matter, except for taxes and except for trust.  
Make sense?  
Next day, we will start with options.  
We are done.  
I'm sorry for these three minutes. I've tried to make some numbers and I collapsed a little. So, sorry, I owe you 3 minutes. Yep.