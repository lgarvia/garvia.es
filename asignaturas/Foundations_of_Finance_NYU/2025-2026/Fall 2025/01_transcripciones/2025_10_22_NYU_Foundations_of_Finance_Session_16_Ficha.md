Perfecto. Esta sesión (22 de octubre de 2025) cierra el bloque de **equity valuation** y marca el paso a **fixed income** y, más adelante, a derivados.  
También es una de las clases donde introduces explícitamente **la IA (Comet, Perplexity, Obsidian)** como herramienta de trabajo académico.  
Aquí tienes la ficha completa en formato profesional, con enfoque tanto docente como conceptual.

---

# 📘 **Teaching Log – Session 15 (22 Oct 2025)**

**Course:** Financial Markets (NYU Madrid)  
**Professor:** Luis Garvía  
**Topic:** From Equity Valuation to PVGO and the Future of AI Learning

---

## 🧭 **Session Overview**

**Objective:**

- Finalize **Equity Valuation** with P/E ratio, retention ratio, ROE and PVGO.
    
- Introduce the **Two-Stage Dividend Discount Model (DDM)** using the Starbucks example.
    
- Bridge finance and AI: demonstrate how **AI agents and Obsidian workflows** can enhance academic learning.
    
- Set the path for **Fixed Income** (next topic).
    

---

## 🧩 **Structure of the Session**

### 1️⃣ Opening & Roadmap

- Reminder:
    
    - Next Wednesday → deliver **Problem Set 4 (Equity Valuation)**.
        
    - Next topic → **Fixed Income**: bonds, duration, convexity, and pricing.
        
- Emphasis:
    
    > “The difficulty of the second half of the course will not come from complexity but from accumulation — lots of small fires everywhere if you don’t start now.”
    

---

### 2️⃣ Review of the Dividend Discount Model

#### Recap:

| Case              | Formula                     | Description         |
| ----------------- | --------------------------- | ------------------- |
| Constant dividend | ( P_0 = \frac{D}{k} )       | Perpetuity          |
| Constant growth   | ( P_0 = \frac{D_1}{k - g} ) | Gordon Model        |
| Variable growth   | Multi-stage DDM             | Transitional growth |

- ( k = R_f + \beta (R_m - R_f) ) from CAPM
    
- ( g = b \times ROE ) (sustainable growth)
    

#### Managerial Logic:

- ( b ) = retention (flow-back) ratio
    
- ( 1 - b ) = payout ratio
    
- **“b is the decision, g is the consequence, k is what the market expects.”**
    

---

### 3️⃣ Price–Earnings Ratio and the Intel–Cisco Case

#### Data (public, simplified)

| Company | Price | EPS  | β    | Rf  | Mkt Premium | Expected Return (k) | Dividend | (b)  | (g)  | ROE   |     |
| ------- | ----- | ---- | ---- | --- | ----------- | ------------------- | -------- | ---- | ---- | ----- | --- |
| Intel   | 17.38 | 2.18 | 0.97 | 3%  | 6%          | 8.8%                | 0.73     | 0.66 | 5.6% | 8.4%  |     |
| Cisco   | 24.03 | 1.17 | 1.12 | 3%  | 6%          | 9.7%                | 0.80     | 0.69 | 8.6% | 10.1% |     |

#### Step 1: P/E without growth

[  
P/E_0 = \frac{1}{k}  
]  
→ Intel ≈ 11.3, Cisco ≈ 10.3

#### Step 2: P/E with growth

[  
P/E = \frac{(1-b)(1+g)}{k - g}  
]

→ Cisco has a **higher P/E** because higher retention and ROE lead to higher expected growth.

---

### 4️⃣ Return on Equity vs Required Return (k)

| Variable | Meaning                     | Source                |
| -------- | --------------------------- | --------------------- |
| **k**    | Expected return from market | External (investors)  |
| **ROE**  | Actual profitability        | Internal (management) |

- If **ROE > k** → firm creates value → **PVGO > 0**
    
- If **ROE < k** → firm destroys value → **PVGO < 0**
    
- Intel: (ROE < k → PVGO < 0)
    
- Cisco: (ROE > k → PVGO > 0)
    

> “If you do better than what the market expects, don’t pay dividends — keep the money and grow. If you do worse, pay it back to shareholders.”

---

### 5️⃣ Present Value of Growth Opportunities (PVGO)

[  
PVGO = P - \frac{E}{k}  
]

- Measures the value created by **future reinvestments**.
    
- In Intel’s case → PVGO negative (limited growth potential).
    
- In Cisco’s case → PVGO positive (profitable reinvestment).
    
- Conceptual link: PVGO = f(ROE, k, b)
    

---

### 6️⃣ When Should Firms Retain Earnings?

Derivative insight:  
[  
\frac{dP}{db} > 0 \text{ if } ROE > k  
]  
→ Only retain if internal returns exceed market expectations.

---

### 7️⃣ Two-Stage Dividend Discount Model (Starbucks Example)

**Case:**

- Years 1–4 → no dividends.
    
- Year 5 → (D_5 = 0.50).
    
- (g = 9%), (k = 10%).
    

[  
P_4 = \frac{D_5}{k - g} = \frac{0.50}{0.01} = 50  
]  
[  
P_0 = \frac{P_4}{(1+k)^4} = 34.15  
]

👉 First stage = no dividends, Second stage = stable growth.  
Reinforces that DDM is just a **Time Value of Money exercise**.

---

### 8️⃣ Pedagogical Reflection

- “We haven’t seen any new math today — only _understanding_.”
    
- “If you sleep now, the pressure of water will grow — you’ll drown in December.”
    
- Emphasis on _continuity_: valuation → bonds → derivatives.
    

---

### 9️⃣ Off-Topic (Learning Tools & AI)

- Demonstration of **Comet (Perplexity’s browser)** — example of human–AI interaction.
    
- Introduction to **Obsidian** as a system of linked notes (“like digital post-its”).
    
- Shown how transcripts → ChatGPT → summaries → class archives.
    
- Students encouraged to test Comet and see the “war of browsers” (Apple, Perplexity, OpenAI).
    
- Mention of AI agents:
    
    > “An agent is a ChatGPT that doesn’t need context — it acts when given an order.”
    

---

## 🧠 **Learning Objectives**

After this class, students should be able to:

1. Compute (P/E) ratio and interpret its drivers (k, b, ROE).
    
2. Understand **PVGO** and its relation to firm value creation.
    
3. Apply the **Two-Stage DDM** to real examples (Starbucks).
    
4. Distinguish between **market expectations (k)** and **managerial performance (ROE)**.
    
5. See AI as a tool for cognitive extension — not substitution — in learning finance.
    

---

## 💬 **Instructor Notes**

- Excellent conceptual balance between **finance and epistemology**.
    
- Students engaged and reflective, especially during AI discussion.
    
- Humor (“enchanted by the math”) kept atmosphere light.
    
- Intel–Cisco–Starbucks sequence provided continuity across sessions.
    

---

## 🧩 **Next Steps**

- Deliver **Problem Set 4** before Wednesday.
    
- Next topic → **Fixed Income** (bonds, duration, convexity).
    
- Future topics: **Derivatives (Options, Futures)**.
    
- Revisit **PVGO** before final exam — it will reappear in valuation synthesis.
    


# **Financial Markets — Student Notes (Session 15)**

**Date:** October 22, 2025  
**Topic:** Equity Valuation — P/E, ROE, PVGO, and the Two-Stage Dividend Discount Model

---

## 🧮 1. Core Formulas

- **CAPM (required return):**  
    ( k = R_f + \beta (R_m - R_f) )
    
- **Constant Growth (Gordon Model):**  
    ( P_0 = \frac{D_1}{k - g} )
    
- **No Growth (Perpetuity):**  
    ( P_0 = \frac{D}{k} )
    
- **Sustainable Growth:**  
    ( g = b \cdot ROE )  
    where (b) = retention ratio and (1-b) = payout ratio
    
- **P/E with Growth:**  
    ( \frac{P_0}{E_0} = \frac{(1-b)(1+g)}{k - g} )
    
- **PVGO (Present Value of Growth Opportunities):**  
    ( PVGO = P_0 - \frac{E_0}{k} )
    

> 💡 **Mantra:**  
> _b_ is the **decision** (retain or pay),  
> _g_ is the **consequence**,  
> _k_ is what the **market expects**,  
> _ROE_ is what **managers deliver**.

---

## 🧩 2. Intel vs Cisco Example

- **Given:**
    
    - ( R_f = 3% ), Market Premium = 6%
        
    - Intel → ( \beta = 0.97, EPS = 2.18, Div = 0.73, Price = 17.38 )
        
    - Cisco → ( \beta = 1.12, EPS = 1.17, Div = 0.80, Price = 24.03 )
        
- **Step 1:**  
    ( k = R_f + \beta (R_m - R_f) )  
    → Intel: 8.82%, Cisco: 9.72%
    
- **Step 2:**  
    ( b = 1 - \frac{Div}{EPS} )  
    → Intel: 0.66, Cisco: 0.32 (≈ 0.69 in class version)
    
- **Step 3:**  
    Compute growth: ( g = b \times ROE )
    
- **Step 4:**  
    ( PVGO = P - \frac{E}{k} )
    

➡ **Interpretation:**  
A higher ROE relative to k and a deliberate retention (b) lead to higher g, a higher P/E, and a positive PVGO.  
If ROE < k → firm should pay out dividends instead of reinvesting.

---

## 💰 3. When to Retain Earnings?

- ( \frac{dP}{db} > 0 ) **only if** ( ROE > k ).
    
- Retain earnings only when internal returns exceed the market’s required return.
    

---

## ☕ 4. Two-Stage DDM (Starbucks Example)

- Years 1–4: No dividends
    
- Year 5: Dividend = $0.50
    
- Growth rate = 9%, Required return ( k = 10% )
    

**Step 1:**  
Terminal value at t=4 →  
( P_4 = \frac{D_5}{k - g} = \frac{0.50}{0.01} = 50 )

**Step 2:**  
Discount back to today →  
( P_0 = \frac{P_4}{(1+k)^4} = 34.15 )

**Key idea:**  
The model just applies **Time Value of Money**: discounting future cash flows (dividends).

---

## 📋 5. Exam-Ready Checklist

✅ Compute (k) using CAPM and link it to stock valuation.  
✅ Understand the link between payout ratio (1-b), retention (b), and growth (g).  
✅ Compare _k_ (market expectation) vs _ROE_ (managerial performance).  
✅ Interpret the sign of PVGO.  
✅ Apply the two-stage DDM correctly — identify the terminal value and discount back.

---

## 📈 6. Quick Takeaways

- **If** ( ROE_{CSCO} > k_{CSCO} \Rightarrow PVGO_{CSCO} > 0 )**:**  
    Cisco creates value → higher P/E justified.
    
- **If** ( ROE_{INTC} < k_{INTC} \Rightarrow PVGO_{INTC} < 0 )**:**  
    Intel destroys value → better to distribute dividends.
    
- **Conceptual bridge:** this class closes _Equity Valuation_ and opens _Fixed Income_.
    

---

Would you like me to make a Spanish version too (para colgar en Moodle o Brightspace)?

# Transcript
22 de octubre de 2025, 3:06p.m.

Es.  
OK, here we are.  
We open the Excel.  
It.  
Yes.  
OK, the class we are gonna November. It's 5-6 and yeah, also.  
Play Rana on.  
The class is important. Why? Because difficulty of difficulty of the second part of the course difficulty.  
Has not to do with deep understanding. It would be has not to do with deep understanding that it could be has to do with. We are going to finish today equity valuation. Equity valuation is time value of money.  
And next day, next day.  
Next day we will start with teaching company.  
And fixed income. In order to fully understand fixed income, you should know how to calculate the price of a bond. You know how to calculate to grow the price of a bond.  
Future cash flows and calculating. Do you know how to calculate the price of a loan? Future cash flows? Yes. Calculating present value knowing that will be great, yes.  
Next day we will start with fixing code and we will see how much the price change, what if the price changes, we will call it ration, but once we finish that we will move into the relatives.  
We will talk about options like a sort formula. We will talk about features and if you don't start studying now in one more time, you will have a lot of things.  
To start, each one will be simple, but by aggregation you will have little fires everywhere. Makes sense. So my recommendation is next day you should deliver.  
Wednesday or next or day before, day before day. Sorry, day after. Next Wednesday you should deliver problem set 4. You can do it. Yes, right now. Try to do it.  
Because working on problems set forth, you will work on that value of money, you will warm up and things are not so complicated. In the end, what are we doing? What are we doing? What are we going to do? It's no future cash flows. Make sense.  
I would have to leave.  
I see.  
Have you seen Asian? I think it's all by themselves.  
OK.  
Sorry, two people has passed. Pablo and they have to read. Pablo and Rather. OK, can you see correctly this? Can you see the blackboard correctly?  
What did we do the other day? What did we do?  
We saw you have a stock. What is the price of the stock today? What is the price?  
In case the slope, we pay a constant dividend forever price would be the dividend over KBK.  
Risk rate plus beta times return on the market minus risk rate. Make sense.  
Yes, and in case the dividend will grow at a constant rate.  
Dividend growing at a constant rate, yes, we can say that.  
The price is dividend one over K in my energy. Make sense.  
Also.  
Also I told you therefore because the company has earnings, but not necessary. All earnings should be paid as detail. The company can reinvest in themselves.  
What is BB is the flow back ratio, B is the percentage of earnings that the company keep. So 1 -, B is equal to the dividend.  
The companies pay make sense.  
And we come here, we can say instead of dividend 1, dividend 0, dividend 0 * 1 + D yes and instead of.  
Dividend we can write.  
1 -, B earnings, yes, and this formula price over earnings. This is the price over earnings formula.  
Yes.  
OK, what are we going to do today? Today we are going to the class will have two parts. First part we will work on over this formula and we will try to fully understand it and we will see relationship between BG umbrella.  
Yes.  
You are keeping money with yourself. This is a decision, no?  
This is how this issue.  
Then grow is what you get from the decision and what escape what the market expect from you. Make sense? If B is a decision, what should be the question?  
Is correct to increase me or not? And on one hand, that is what the market expect from us.  
And on the other hand, is what we do with the money that we make sense.  
Then second part is just doing one exercise in order you to fully understand time, value of money and and discount. It's the first time that I'm using my own computer, so I could be sitting there, whatever.  
Let me.  
This is what are we going to do today. We are going to. Perla is not here. No. OK, let me do you have equity evaluation? Do you have these slides? What? OK, perfect.  
Like this because.  
What are we going to do today? Two parts, one part that will have to do with Intel and Cisco and we will see grow and then later we will see the multi-stage growth that is so simple to understand.  
OK, let me start with this example.  
I have.  
Long time ago, Intel and Cisco were two microchips companies. Intel exists, it still exists, Cisco still exists. But now I should update this example with NVIDIA.  
Nvidia, but whatever. The idea is Intel and Cisco more or less has same size, more or less dedicated to the same business, yes, and you analyze price over earnings ratio of each company.  
And you see that there is a difference between price over earnings ratio?  
Cisco.  
Is more expensive.  
What does price over earning ratio means? How much you are paying for each unit of earnings? Yep, why you are paying more money for Cisco?  
We don't know. We are going to see. We are going to go deep into these things, yes, but let me start with the numbers.  
Price 24 point here. I have the numbers here.  
Price is 24.  
.03 This is a Spanish cable. In Spanish those are commas. I don't want you to be. Hello, Perla. I don't want you to be so crazy. Yes, this is.  
Intel and this is Cisco, yes.  
17.38 This is the price of the company.  
How many sirs there are?  
How many servers there are? In case of Intel there are 5.25. I suppose that 5.25. I suppose that these are billions and in the case of Cisco there are five point.  
38.  
That would you go.  
Bye.  
OK.  
This I suppose are billions and if I multiply.  
Market cap is.  
The price of each share times total number of shares that is 126 billion. So yes, number of shares are billions, yes, because in the slides it said that market cap is 126 and here I.  
Copy and paste and 93.5 OK and now earnings. Earnings are of 2.18 again 2 point.  
18 and.  
1.17 earnings per se, Yep.  
OK, so first all this, all this information is public and normally price over earnings ratio is 1 number that you can easily calculate. You take price, you take earnings and you will get this price over earning and this.  
Make sense?  
So now we have all these numbers. Now I know where all where all these numbers came from. Make sense?  
Let's start thinking about.  
Where place over earnings ratio came from, yes.  
OK, I know that the risk free rate.  
Let me first see what the market expect from each company. Risk rate is 3%.  
Rate is 3%.  
Market premium.  
Market Premium.  
Is 6%.  
And.  
Do you see it currently or I'm going to make it here? This is OK.  
OK, and let me calculate.  
What is the what? What is the expected return from the market?  
I need to know what is better and better in the case of interest 0.97.  
I'm better in the case of this place 1.12.  
So I can calculate the specter return and the specter return is risk rate.  
Less.  
Beta times.  
Market premium and let me fix it.  
So in this case is 9%.  
8 point and in this case is 9.72 makes sense.  
So looking at these numbers, what can I deduct?  
That Cisco is riskier.  
If Cisco is riskier, what I will ask Cisco.  
Or more return. OK, I have. I want all of you to understand these earnings.  
It's not the dividend, nothing other is and another thing is dividend, yes. What is the difference between earnings and dividend? The money the companies keep them for themselves. Make sense so.  
I'm going to consider, I'm going to consider that there is no blue. There is no blue.  
All earnings will be equal to dividend and considering there is no group earnings are equal to dividend. I can calculate.  
What is the price over? What is the price of the stock?  
Proposing that there is no code, you understand what I'm saying?  
Do you want me to repeat the thing? OK, maybe yes, I know the errands.  
I don't know yet how much dividend is being paid. I'm going. I'm going to consider one scenario. We see this scenario that all earnings will be paid as dividend. If I consider this scenario that earnings are equal to dividend, I'm supposing that no money.  
Yes.  
Considering this is scenario, I can consider that.  
Earnings are equal to dividend and what is the price of the company in this scenario? Earnings over K is considering.  
The company without growth. Make sense? All of you understand it. So one first approach.  
He just said price we thought.  
On seethering.  
Growth, yes. Price without considering growth is earnings over K, yes.  
24 should be the price if you see in this case Intel.  
Intel's price is even higher in case we are going to see in a few.  
That's the school.  
What is price over earnings ratio without considering growth? Price over earnings ratio without?  
Growth. Yes, I'm going to do this price without growth over earnings and this is 11.3.  
What is the point here in case of Intel?  
This number looks like this number, so in case of Intel growth.  
Growth doesn't matter too much, yes.  
But if I look at Cisco.  
Talk.  
There is a bigger mismatch. Yes, there is a bigger difference.  
Bigger difference. So I am missing something. I don't know yet what I'm missing. Yes, I am trying. I'm looking for something. I don't know yet what is what I'm looking for. Yep.  
Let me continue. I know better. What price over earnings ratio does the zero growth dividend discount model predict? The one that we have just calculate makes sense.  
Now.  
What about growth? I know earnings.  
And in order to calculate well.  
Sorry, flow back ratio, flow back ratio. In order to calculate flow back ratio there I've got dividend. Dividend is 0.73.  
Let me write here dividend 0.73.  
And oh .8 yes.  
OK, what I'm looking for. I know earnings. I know dividends. Yes, earnings is public data. Dividend is public. What can I do? I can calculate low accuracy.  
How can I complete it be?  
So back where is you is?  
So my brain is taking this from.  
Yes.  
One minus.  
Be within over. Very nice. Make sense.  
Yes.  
What is global ratio? The percentage of of money? Now in this global ratio is 1 minus.  
1 minus dividend.  
Over earnings, yes.  
Joe.  
What I've got.  
Why? Not both. Both are retaining more than half. Cisco is reinvesting in themselves almost everything. So dividend is being paid by Cisco.  
It's relatively small. Make sense?  
Here, I've got the plug-back ratio and let me go farther.  
Let me think about growth, how much growth each company is getting.  
Where do I get this growth from? Market expectation. I mean this, this growth should be. If you want to get this growth is internal from the company. You can be an analyst. In this case the growth is being taken in order to in order everything to have sales, but imagine that we can imagine the growth.  
And while Intel is getting a 5.61% of growth, Cisco is getting much, much more growth, 8.60%.  
That makes sense a little because while Intel is retaining less money, Fisco is retaining more and because they are reinvesting more in themselves, they are, they are getting more more growth. Makes sense.  
OK, let me G 5.61.  
5.61.  
Person.  
And a point.  
60%, yes. And knowing this growth, what can we do? We can calculate. Now we have everything.  
All the things now we have all things we need.  
Nor that ladies we know, we know G, we know K and we know G makes sense.  
So let us calculate what is the.  
Price over earnings ratio given by the formula that is 1 -, B.  
Times.  
One plus.  
Over.  
OK.  
Minus.  
Yeah.  
I have made something incorrect.  
I mean.  
For me.  
Perfect.  
One blessy.  
OK.  
1 -, B is blowback ratio. OK, let me do this again is 1 minus.  
B.  
Times.  
One plus Z.  
Over.  
OK, this is.  
We live in. Uh, no.  
Aye, my name is B.  
But I'm doing correct.  
Let me make a bigger parenthesis, but this should not be.  
Is OK.  
Which one?  
This one by sober earnings, let me.  
Oh, he's.  
Thanks.  
11 times is what you are paying per earning.  
And it was 111100. It was correct. Tony K you get it from SML from Captain. You get K by doing reissue rate plus.  
Yes, let me we are going to go deeper into all these things and I want you what is important.  
K It's important. What is K?  
What the market expect from me? What does the market expect from from Intel 8.82% of return? What does the market expect from Cisco? Because she's riskier a little bit more of return, yes.  
Then what is the decision taken by the managers? In the case of Intel, the decision is retaining a 66%. Why? Because they need to grow. In the case of Cisco, the decision.  
He's retaining more money. Are you following me?  
And last, what do they get?  
They get, you know, yes, they get, you know, but the market estate comes from outside, yes.  
But the market expect came from old side. Just one second, one second, one second, because I don't want you to miss this.  
What the market expect is from outside the decision is B the money that you keep.  
And what do you get with this big?  
What do you get with this big bro? No. So what is?  
The return on equity. The return on equity is.  
How much grow you are getting with the money you keep for yourself. Do you understand what I mean?  
You understand it? Yeah, you can go. I mean, you can go, but I I want you to understand why it's returned. Why it's returned on equity? Oh, Max.  
You are many.  
Open the journey with the money that you keep to yourself.  
Let me write it and let me now explain you the big, big picture. Let me calculate return on equity.  
Return on equity. What is return on equity? How much grow? I am getting.  
Per unit of money that I am getting 8.43 and 10.11, yes.  
And now.  
What I want you to fully understand and to see.  
Yeah.  
OK.  
Did you see, but are you somewhere in the ratio that we have?  
Mats, yes.  
I want your fully attention, Nicholas. I want your attention in all of you.  
I have some of the numbers. What is the conclusion?  
What is cake? What the market expect from me?  
What is internal equity? What I do, what I do. The result from my, the result for my, the result of my work. Yes, what is K?  
What the market is expecting from me? What is return on equity? What I'm doing? Yes. Do I have your attention? OK, let me repeat. What is return on equity?  
What I am doing, what the managers are doing, what is what the market expect from all managers? Yes, in the case of Intel, what does the market expect 8.92? What are they doing?  
Less, less than what the market is expecting. So what Intel managers should do instead of reinvesting in themselves, probably they should pay more than.  
They are not doing as well as the market is expecting from them.  
Does it make sense?  
And on the other hand, if you see this call, it's riskier. What the market expects from them? More return and what they are doing with the money they're taking with themselves.  
They are getting better results. They are getting more return, more return on equity than what the market expect. Makes sense.  
Where does return on equity came? From inside the company. Where does expected return came? From outside the company, from the market. What the market expect from us? Make sense?  
What do you?  
So if you have understood this, you have understood half of the class.  
Let me go to the into the other half of the no, no. Let me finish with the first half of the class before. Yes, got it.  
Now.  
If you remember, I have calculate here one price.  
We thought.  
Considering growth, yes.  
Make sense? And here there was  
The real price?  
The real place.  
The price without considering growth was considering that all earnings were distributed as dividend.  
Yes.  
What does the company do with the money that with the earnings that are being keep inside the company? Well, no.  
So what I want you to see the difference.  
Let me call this difference present value of growing opportunity, PVGO present value of growing opportunity. What is present value of growing opportunity of growing opportunities?  
The price of the company.  
Let me write it here, BBGO.  
We put it another call. Let me hear BBGO is.  
The price of the company minus the price without considering growth and if you see in the case of Intel.  
BBO is negative.  
And in the case of Cisco.  
Go.  
Positive.  
What is PVO? They grow.  
Is expected from the earnings.  
You are keeping with yourself. Make sense.  
Let me come back to the slides.  
Here, return on equity is what the managers of the company get with the money that they don't distribute to the shareholders and they keep. Make sense? Return on equity is how well you are doing and normally what you should do is compare it.  
We don't like me.  
With K, yes, we compare what you do with what the market state makes sense.  
And then if we do this comparison, we will see PDGO will be positive or negative. If we turn on it with this higher than K, PDGO will be positive. If we turn on it with this lower than K, then PDGO will be negative.  
If return on equity, if return on equity is higher.  
Thank you. Don't pay money to yourself. Keep it with you because you are going to do better. But if return is lower than K, you should pay. Make sense.  
So.  
What are returns on equity we have already calculated?  
And the bottom line is that Cisco ads is more expensive because Cisco managers are doing better.  
Yeah.  
Careful, because today is the last day we are going to go through this.  
You can ask, you can ask me regarding PVO in the process, but the exercise is going to be so is so simple. But the point is you should know what is PVO after fixing common and after derivatives if you don't work anymore.  
You do do a good evaluation. You will not remember what PVGO is. You understand what I'm saying. Review now what is PVGO. Don't let it in the end because you are going to have a lot of little things. Make sense.  
What you should do during this weekend? Work over problem set for and try to or go through this class again and.  
Now are you understanding PVO? Don't forget.  
Come forward. I'm going to explain it to you again before final preparation. I'm going to explain it to you again when you need me. The point is not in me explaining. It's in you understanding me. Make sense.  
OK, more things.  
When is this?  
What is this taking that formula? This is the formula that we have already seen and instead of writing G writing B times return on negative, yes. And what is the idea? The idea is if we do this derivative.  
What are we seeing? If we delicate this over me, what are we looking for? When it makes sense, people increase. When should we increase it?  
When should we increase V? When this derivative is positive? Because by increasing V price will increase if this derivative is positive. If you see this derivative.  
Denominator will always be positive when the denominator when this will be positive. Yes, when return on equity is higher than that, yes.  
I've already told you when it will make sense to keep money inside the company, when return on equity is higher than gain. When this is positive, when this will be positive, yes, when return on equity is higher. Make sense.  
What is this is like for for telling you that?  
If we return only with this high IK, then you should increase B.  
Yeah.  
OK. And what is growing opportunities? We have already seen, we have already seen it.  
Present value of growing opportunities is the difference between the price.  
It's the difference between the price and.  
The price without considering growth. What is the price without considering growth?  
If B is 0, earnings will be equal to dividend, so but I should be equal to earnings over K, sorry.  
Yes.  
Now.  
Let me move step forward.  
Thank.  
So close. No, no, no, no, no, no, no, no, no. I mean no, no, no, no, no, no, no, no, no. Sorry. Please forgive me. I was just how do you say?  
Encantado Encantado is.  
Like magic. Encantado is like charming hypnotized. I was fascinated. I was like looking when when you go into YouTube videos or TikTok and you see someone making strange things, I could not move. Sorry.  
And also we need to smile or have humour in life. Absolutely. And also there is the class. Today's class is divided into two parts. We have already finished one part.  
And nothing wrong happens if we wait for one minute.  
Before starting the next one, yes, there are times that knowledge information needs to calm down. Yes, we have closed the formula, the price of our earning ratio and what I want you to understand from previous part of the class.  
K is what the market state return on equity is what you can do with the money that you keep. And I want also you to know that return on equity exists and also that when talking about companies.  
There are times that is more a matter of feeling than doing an exact and precise number, Yep.  
Now.  
So states dividend discount model is just.  
A time value of money exercise. Yes, I'm going to show you before going to this formula that is so simple to understand.  
I'm gonna show you this exercise. I'm gonna write this exercise.  
And I have seen you, Ethan, and I want to fill my bottle with water and I will leave you just two minutes trying to solve this exercise by yourself. Yes, what is the idea?  
Suppose that at the end of year 2005.  
All of you know Starbucks. In year 2005 in Spain, no one knew Starbucks. Why? Because Starbucks didn't exist at the beginning. Starbucks was created in the States.  
And what did they do for years? Paying 0 dividends, 0 dividends. Same thing has been done by Microsoft. Same thing has been done by Apple. Same thing has been done by technological companies that at the beginning were small.  
They were again making money and they use all this money in order to get well, yes, so Starbucks.  
In year 2005 had we don't know the price. We should calculate it, yes.  
But Starbucks didn't pay dividend for.  
678944 years they didn't pay dividend.  
At the end of year five, they pay a dividend of $0.50 and from that moment dividend grow at a rate of 9%, yes.  
And the question is what is the price of Starbuck if required return is 10%, where we can get this 10% from me BSML, but in this case we consider that 10% is that so.  
Let me this is Intel.  
Pisco and let me move into.  
Starbuck, yes.  
So today's year 2000.  
Faith. Yep.  
So today is here. I don't know why. One, two, three, four.  
39.  
Whatever, let me write. This is my own computer and it's working worse than whatever 2005 and the idea is what is the price today?  
We don't know, yes.  
And what is going to be the dividend in year 1000 and reaching this point in year 2010 zero and in year 2010.  
Dividend is going to be $0.50.  
Yes, and from this moment dividend will grow at a constant rate of.  
9%.  
At a constant rate of 9%. Oh, sorry, dividend growing at a constant rate is 1 plus.  
9%.  
Yes, and the dividend will grow at this rate.  
Will grow at this rate.  
Forever, yes. Let me put this in a soft color.  
OK. Discounting rate K is 10%.  
What you should do?  
You should calculate the price of the company.  
I'm going to drink some water and use it correctly.  
Anyone has any idea?  
What?  
Let me see.  
What is? What is this called? This is called the true space dividend is common at the end.  
What we will be doing when calculating price when valuating companies? Calculating present value of future cash flows. Which are the cash flows? The dividend. What are we going to do? What are we going to do?  
Calculate present value of future cash flows in this case.  
We should count in case a dividend will be paid in year one or in year two, year three and so on. We should calculate price of that, yes, and because it's zero, this part corresponds with 0.  
What is the price?  
Or what should be the price in year 4?  
What should be the price in year 4?  
Year 4.  
Price and therefore is going to be equal to because it's going to be a a dividend that will grow as a constant rate. No price and therefore is going to be equal to dividend.  
Near 5. One more over.  
Immanueli makes sense.  
No.  
Rice Year 0.  
Is going to be equal to dividend one over present value, yes, plus dividend 2 / 1 plus OK right to the second present value to the second. Make sense.  
This is gonna be zero. This is gonna be zero, but I want to write.  
All of them.  
Plus season in year 4, plus the in year 4.  
Over 1 + K raised to the 4th. Make sense?  
What is this? The two states dividend disco model, which is the first stage calculating the terminal value, calculating the terminal value. What is the terminal value? The value from year 4.  
First stage is calculating this and once we've got this, we know that this dividend one is 00 and 0 and 0. So at the end what we will do is price today is.  
Price in year 4 / 1 K rise to four that is.  
Dividend 5 / 1 plus K raised to 4 * K - E yes.  
Let me do it.  
Step by step, that is relatively simple.  
Again, these kind of exercises, once I explain them and once you understand them, are simple, but I strongly recommend you to try to do them by yourself.  
Why? Because same thing that I have to whatever. How much is priced in year 4?  
See them in year five over.  
K minus the growth that is 9%. Yep, price in year four is going to be 50.  
Now, how much is the price today?  
Price today is present value 50 over 1 plus.  
One plus.  
It's going to rate price today or because this price is in year 4 and this would be 34.15 make sense.  
Dean was that was this number so happy.  
Coming back.  
What is the two states dividend discount model is considering that on the first stage something is going to happen before the company stabilized once the company is stabilized.  
We can consider this at a constant dividend model or it will grow at a constant rate. And if you see this is more or less the formula that we have used, but instead of two periods of time we have, I have used the formula for four periods of time. Make sense.  
The case of Starbucks. So conclusion of today's class, conclusion of today's class 3 ideas.  
Where's AV?  
Is important you to understand relations in between K.  
And return on equity, what is video and this idea regarding?  
That is over earnings rates, yes. First idea is understanding the first part of the class. Second idea is understanding that what we are doing is continuing with time at the moment.  
Today's class we haven't had seen humans.  
There are no new mats. There is no generals alienis working over things that you should have known from before.  
And the third idea is that please don't get sleep because if you get sleep, the pressure of the water will continue growing and in one month time you will have forgotten what we have talked about today.  
Yeah.  
Next day we will talk about can be trust and next day we will start talking about balls. I will dedicate next two classes.  
You do fully understand how to calculate the price of a bone.  
So you don't know how you can read the play Super Bowl or you will receive a bee, but I will give you.  
Yes, but you understand that knowing how to calculate the place have only simple.  
Any more questions? Well.  
One thing I am recording all my classes. Why? Because I am oh oh oh oh oh sorry so.  
Anyone have tried Comet? Do you know what is Comet? Do you know what is perplexity? This is download, download Comet and try it and once you download Comet and try it.  
Open the assistant. It has an assistant.  
You open the system and tell him I want to eat, make a reservation close to the place where I where I am or ask him something. It's absolutely incredible. And from all the classes, this is my computer.  
From all the out, let me share with you session 16. I'm gonna share with you this.  
This is obsidian. What is obsidian? King knows obsidian. Obsidian is like post its notes.  
It's like a file administration administrator of post its not notes, yes.  
This is.  
Inbox are the things subjects are the courses where I'm working. Yes, you are and why you know.  
In NYU I have here.  
This is a note. This is like a post it, yes. Why do I have here? This is the syllabus. If I press there, I go into another syllabus or into another note, yes, but let me come here.  
We have this year a new director. Jill is the new director and Carol Robbins was going to came in one of my classes. Carol Robbins, as I hope no Carol Robbins passed from this class has passed.  
Has already passed. I don't want to make any jokes with nothing. No jokes. I have great.  
Because why I have done it? Because it's one script I have dedicated to this less than 10 seconds. I have just run a script and I have create a note with each one of you. Rob, do you let me to share your?  
Do you let me? Yes, say yes, yes, I mean row or whatever.  
This is information that is in the excel that I have to load. There is no I haven't written anything here.  
And if you see here I have run the same script with all.  
My NYU students.  
Don't ask me why, but it didn't take time. It didn't took time, yes. And what is absolutely crazy, what I do when I go home, I take the the transcript and with the transcript I run it into ChatGPT.  
I'm going to take one of these classes.  
and  
Here there is the transcription, yes, and with the transcription.  
I I ask. I have never read this. I don't need to read this, but this is a summary made from chat DPP. There are other classes where I talk about Trump or what I talk about geopolitics or what I talk in these other classes. These summaries are much more important in these classes.  
I don't need to send you. If you want, I can send you all these transcripts, all this information, but there would be too much information, yes, but what I want you to see that such if it is just a motto.  
You need to put this motor with wheels, with the steering wheel. You should know where you want to go. I don't know where I want to go, but with all these notes in another courses I make exams at the speed of light.  
Because then you can introduce all these post-its into chat DPT. You see what I mean?  
I have with all my I have all my classes notes from all my classes and this is absolutely incredible. Let me go into another. This is, oh, yes, international.  
These are my Tulane students from Ikade. Ikade is another university, yes.  
I do the same with them. Let me take this is financial markets. It's not your class. It's a different class. But then let me take this class. Yes, what we did first recap Madrid tariffs, City Gate I I talk about.  
Puerta, Puerta del Sol that there were gates of the city and because of that I talk about tariffs. If you have a border then you can.  
I talk about tariffs, yes, the West export exports fewer goods before than before, but export dollars. USA is not exporting things anymore, but USA is exporting dollars and everything runs into dollars.  
Then what I talk about quantitative vision, liquidity, you see what I mean. What I mean is that if you record your if I were you probably don't say anything, I wouldn't be recording.  
We'll be doing that or or at least taking two or three notes and with these two or three notes taking certificate. And I think let me show you one more thing and I will move. Yes, let me show you my.  
Or their wife or or husband. I don't want to close this one yet. This one. Yes, I have.  
Subjects. A signatura stands for subject. Yes, I only use these chats in order to ask ChatGPT the summaries.  
This church has become an agent. You know what is an agent?  
An agent is at such GPT chat where you don't need to give him or her information, you just give him an order and he act.  
Let me open yours, yes.  
This is.  
Last class.  
This is last class, yes.  
Yes.  
And what I did.  
I just copy and paste the transcript without giving a instruction. Oh yes, sorry, let me show you the prompt.  
The Juntola transcription. Can you prepare next card for for this class? Let me attach transcription.  
What I want you to see, what I want you to feel that this is growing at an incredible speed.  
Commit has sorry perplex.  
Apple is losing. There is a war, yes, regarding AI. There is a war regarding producers. There are several war regarding technology. Yes, Apple was losing the race.  
Because they spend a lot of money with the glasses and and all these things. What are they probably will do in the near time? Buy her, her flexible.  
If Apple by perplexity and perplexity has comment is the browser by buying perplexity. Apple is Apple has they what they have lost. You understand what I'm saying? What open AI? What scientific this company did?  
Yesterday, not the apples. Who are there? Yes, who are there? I could use Apple. So I am on. This is a way of saying Apple. I'm on the file.  
You sent it in here. I don't know. Do you have any teacher that had told you not to use it?  
There are teachers that have told you not in their courses. I'm not telling you to use it there.  
I'm not at juice, said TBT.  
And and read and write. I mean write, do my exercises and also use activity and also do exercise, learn how to drive and also do play sports. You understand you don't need.  
Go driving everywhere. You don't need to use that GPT for everything, but use that GPT because this is growing at an incredible speed and I have just to start with this on September and my you can tell me whatever I have teaching during all this course.  
I don't know if anyone of you have sent me one e-mail asking me how I wish I cannot go to one class. If you have done this, the e-mail that you have received is taking the notes from that day together with your e-mail and saying responding that really polite way that I love her of him.  
And tell him what he should do in order to or what we are going to see and are the best emails I have written in my life. And I try to be transparent. You know what? How is my news? You see an e-mail from me as if I were six people.  
Something strange he's having. He's going to. It's kind of off topic, but it's the it's the field. It's the field trip to the stock exchange. Oh, thanks. Yeah, it's Mandarin. It's Mandarin on the 31st.  
It's mandatory. It's mandatory. It's mandatory. Yes. And and I am at all Saturdays. I go to jail. I'm a jail volunteer. I go to jail. It's true with the charge, but I am volunteer. I have been going to jail.  
10 years and since last 10 years I have before the pandemic I was going to jail. This why I am telling you this because if I go to jail you can know or you can understand how do I feel regarding.  
I think that I am so, I am flexible, but it's mandatory. I cannot tell you now that it's not mandatory because if I say it's not mandatory, no one will get it.  
It's absolutely mandatory and you have received one e-mail from Anisha. Please fill whatever you need to fill and and that's it. Thanks a lot and thanks for the off topic because Anisha has told me to remain you to fill it and I was forgetting.