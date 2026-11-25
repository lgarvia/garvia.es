---
titulo: "Foundations of Finance – Session 25: Multi-Period Binomial Trees, the Black-Scholes-Merton Model, Greeks & Implied Volatility (VIX)"
fecha: 2026-11-25
curso: "Foundations of Finance (Fall 2026)"
sesion: 25
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: impartida
---

# Foundations of Finance – Session 25

## Multi-Period Binomial Trees, the Black-Scholes-Merton Model, Greeks & Implied Volatility (VIX)

**Date:** November 25, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid  
**Professor:** Luis Garvía Vega  
**Session:** 25 of 28

---

## 1. Session Overview & Human Context

Session 25 bridged financial theory with an important personal and pedagogical reflection on Thanksgiving, family, and intellectual humility. 

Because the course takes place at NYU Madrid with American undergraduate students studying abroad, Thanksgiving represents for many the first holiday spent away from their families. The session opened with an interactive discussion contrasting cultural traditions:
- The American tradition of Thanksgiving.
- The Spanish tradition of the **Three Kings Night** (*Noche de Reyes*, January 5–6).

Connecting the moment to classical philosophy and AI, the class used Gemini to review **Aristotle's *Nicomachean Ethics***:
- Virtue is not an abstract theory, but a practical habit aimed at human flourishing (*eudaimonia*).
- Virtue lies in the **golden mean** (*mesotēs*): *"not too much, not too little"*.
- In life, as in finance, technical knowledge is secondary to emotional maturity and prioritizing what truly matters: family, gratitude, and moral character.

```
+-------------------------------------------------------------+
|             ARISTOTLE'S ETHICAL LESSON IN FINANCE           |
|                                                             |
|   Excess: Greed / Blind Speculation (Gambling on 0-DTE)     |
|   Deficiency: Complete Paralysis / Inability to Take Risk   |
|   Virtue: Measured, Prudent Risk Management (The Mean)      |
+-------------------------------------------------------------+
```

---

## 2. Final Exam Logistics & Course Roadmap

The professor reviewed the organizational timeline for the conclusion of the semester:

### 2.1. Exam Sittings & Schedule
1. **Early Sitting (*Convocatoria Adelantada*)**:
   - **Date**: **Friday, December 4, 2026 at 16:00 (4:00 PM)**.
   - **Location**: NYU Madrid (Calle del Barquillo, 13).
   - Specifically arranged for students with authorized travel schedules.
2. **Regular Sitting (*Convocatoria Ordinaria*)**:
   - **Date**: **Wednesday, December 9, 2026 at 17:00 (5:00 PM)**.
   - **Location**: NYU Madrid (Regular classroom).

### 2.2. Materials & Scope
- **Materials**: A comprehensive official **Formula Sheet** and scratch paper will be provided. Students must bring their financial or scientific calculator and pens/pencils.
- **Scope**: Cumulative exam covering the entire course (45% of final grade).
  - Heavy emphasis on material after the midterm: **Portfolio Theory, Minimum Variance Portfolio, CAPM, Capital Structure, Payout Policy, and Options**.
  - From the first half: Time Value of Money, Bond Valuation, and Equity Valuation (DDM). Students can deprioritize complex term-structure curve shifts.
  - The coupon reinvestment problem from the midterm will be reviewed in detail in next week's review session.

---

## 3. Review: Put-Call Parity and Option Payoffs

The class reviewed the foundational no-arbitrage relationship established in Session 24:

$$
\boxed{\text{Put}_0 + S_0 = \text{Call}_0 + \text{PV}(K)}
$$

where:
- $\text{Put}_0$ is the European put option premium today.
- $S_0$ is the current stock price.
- $\text{Call}_0$ is the European call option premium today.
- $\text{PV}(K) = K \, e^{-rT} = \frac{K}{(1+r)^T}$ is the present value of a zero-coupon bond with face value equal to strike $K$.

### Key Insight: Payoff at Expiration vs. Price Before Expiration
- At expiration ($T$), option value is purely determined by the piecewise linear payoff function:
  $$
  C_T = \max(S_T - K, 0), \quad P_T = \max(K - S_T, 0)
  $$
- Before expiration ($t < T$), the option price curve sits strictly above the intrinsic value due to **time value**:

$$
\boxed{\text{Option Value} = \text{Intrinsic Value} + \text{Time Value}}
$$

As time to expiration diminishes ($T \to 0$), the option curve collapses onto the payoff hockey-stick.

---

## 4. Multi-Period Binomial Option Pricing Model

Building on the 1-period binomial model from Session 24, the class explored multi-period binomial trees using interactive Excel models ($n = 1, 2, 5, 9, 250$ steps).

### 4.1. The One-Period Tree (Risk-Neutral Valuation)
In each interval $\Delta t$, the underlying stock either moves up by factor $u$ or down by factor $d$:

$$
S_u = S_0 \cdot u, \quad S_d = S_0 \cdot d
$$

By constructing a replicating portfolio composed of $\Delta$ shares of stock and $B$ dollars of risk-free lending/borrowing:

$$
\Delta = \frac{C_u - C_d}{S_u - S_d}
$$

Alternatively, under risk-neutral pricing, the expected future payoff is discounted at the risk-free rate:

$$
C_0 = e^{-r \Delta t} \left[ q \cdot C_u + (1-q) \cdot C_d \right]
$$

where the risk-neutral probability $q$ is:

$$
q = \frac{e^{r \Delta t} - d}{u - d}
$$

### 4.2. Convergence to Continuous Time
By increasing the tree height from 1 period to multiple sub-periods ($n \to \infty$ and $\Delta t \to 0$):
- The discrete binomial distribution of terminal stock prices approaches a **continuous lognormal distribution** via the Central Limit Theorem.
- In the limit, the binomial tree converges exactly to the **Black-Scholes-Merton formula**.

---

## 5. The Black-Scholes-Merton (BSM) Model

The Black-Scholes-Merton model provides the closed-form analytical solution for European options on non-dividend-paying stocks.

### 5.1. Model Assumptions
1. **Risk-free rate $r$** is constant and continuously compounded (flat yield curve).
2. **Stock price $S_t$** follows geometric Brownian motion with constant drift and constant volatility $\sigma$ (no price jumps).
3. **No transaction costs, taxes, or short-selling constraints**; trading is continuous.
4. **No arbitrage opportunities exist**.

### 5.2. The Analytical Formula
For a European call:

$$
\boxed{C_0 = S_0 \, N(d_1) - K \, e^{-rT} \, N(d_2)}
$$

For a European put (via Put-Call Parity):

$$
\boxed{P_0 = K \, e^{-rT} \, N(-d_2) - S_0 \, N(-d_1)}
$$

where:

$$
d_1 = \frac{\ln(S_0 / K) + \left(r + \frac{\sigma^2}{2}\right) T}{\sigma \sqrt{T}}
$$

$$
d_2 = d_1 - \sigma \sqrt{T}
$$

and $N(x)$ represents the cumulative standard normal distribution function:

$$
N(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{x} e^{-\frac{z^2}{2}} \, dz
$$

### 5.3. Economic Intuition & The "Instant Pot" Analogy
Professor Garvía explained the formula using the analogy of a modern cooking robot (**Instant Pot / Thermomix**):
- You insert five visible market ingredients:
  1. Current stock price ($S_0$)
  2. Strike price ($K$)
  3. Time to expiration ($T$)
  4. Risk-free interest rate ($r$)
  5. Asset volatility ($\sigma$)
- The formula processes these inputs through the replication mechanics.
- **Economic meaning of terms**:
  - $S_0 \, N(d_1)$: Present value of receiving the stock if the option finishes in the money, scaled by the delta hedge ratio $\Delta = N(d_1)$.
  - $K \, e^{-rT} \, N(d_2)$: Present value of paying the strike price, where $N(d_2)$ is the risk-neutral probability that the call expires in the money ($S_T > K$).

---

## 6. Comparative Statics and Option Sensitivity (The Greeks)

The class analyzed how changes in each parameter alter option values:

| Parameter | Notation | Effect on Call ($C$) | Effect on Put ($P$) | Intuition |
| :--- | :---: | :---: | :---: | :--- |
| **Stock Price** | $S_0$ | $\mathbf{\uparrow}$ | $\mathbf{\downarrow}$ | Higher underlying price increases intrinsic call value. |
| **Strike Price** | $K$ | $\mathbf{\downarrow}$ | $\mathbf{\uparrow}$ | Higher strike makes purchasing the asset less attractive. |
| **Time to Maturity** | $T$ | $\mathbf{\uparrow}$ | $\mathbf{\uparrow}$ | More time gives more room for favorable volatility movements. |
| **Volatility** | $\sigma$ | $\mathbf{\uparrow}$ | $\mathbf{\uparrow}$ | Options have truncated downside ($0$) and unlimited upside. |
| **Risk-Free Rate** | $r$ | $\mathbf{\uparrow}$ | $\mathbf{\downarrow}$ | Discounts future strike payment, reducing PV($K$). |

### 6.1. Options as Games on Uncertainty
Unlike standard investments where volatility is penalized, option holders benefit directly from higher volatility:
- The maximum loss is limited to the initial premium paid ($HPR = -100\%$).
- The upside potential is virtually convex and uncapped.
- Therefore, **volatility ($\sigma$) and time ($T$) behave identically as drivers of uncertainty**: as $T \to 0$, the time premium vanishes rapidly (Theta decay).

---

## 7. Implied Volatility and the CBOE VIX Index

Because $S_0, K, T,$ and $r$ are directly observable in financial markets, the Black-Scholes formula can be inverted:
- By observing traded market prices of options ($C_{\text{market}}$), we solve backward for the single unknown variable: **implied volatility** ($\sigma_{\text{implied}}$).

$$
\text{Traded Option Price } C \quad \xrightarrow{\text{Invert BSM}} \quad \sigma_{\text{implied}}
$$

### 7.1. The VIX Index ("The Fear Gauge")
- Calculated by the Chicago Board Options Exchange (**CBOE**).
- Measures the 30-day forward-looking expected volatility of the S&P 500 implied by a broad range of put and call options.
- Historical benchmarks:
  - Typical quiet markets: $12 - 18\%$.
  - 2008 Lehman Brothers crash: spiked above $80\%$.
  - March 2020 COVID panic: spiked to nearly $85\%$.

### 7.2. Case Study: Nvidia and the AI Valuation Debate
The professor examined recent market events involving **Nvidia**:
- Dramatic options activity around earnings releases and political/export announcements.
- Comparing market bubbles: the difference between an outright sudden crash (*bursting bubble*) versus an orderly decompression (*deflating bubble*).
- Option pricing demonstrates how sentiment, leverage, and uncertainty interact in real-world technology valuations.

---

# Transcription
25 de noviembre de 2026, 5:09 p.m.  
1 h 12 min 21 s

Google.  
Hey, I am recording.  
Things said that, oh, oh, Brian is real.  
I know, I haven't received any feedback from them, but whatever, NYU in your university.  
Here you are, ongoing Session 25th.  
Here.  
Ohh, she look okay.  
Yeah.  
Okay, things before starting.  
Is the first time...  
Is the first time you are gonna be out of your house in Thanksgiving?  
No.  
Yep.  
Understand.  
I'm not here. I'm not sure.  
First time, as we, as we can.  
You celebrate some Thanksgiving normally?  
Not too much. It's more of like a, if we're available. Oh, okay. No, it depends. Because 11 years ago, I started seeing people from NYU.  
And I didn't, I just knew about Black Friday.  
Yeah, I mean, I knew in Spain, we know about Black Friday since fifteen years ago.  
Black Friday is international.  
Friday, this Friday is going to be Black Friday all over the world. It has to do with selling.  
Everyone share the same view.  
And in Spain, for me, the most important day of the year is the night between the 5th and the 6th of January. Christmas is really important, 24th and 25th of December. But for me in Spain is the night between the 5th and the 6th of January.  
Do you know something regarding that? No? Is it like... Yes, I mean, I am happy you not knowing what I'm talking about because it's something I can teach you.  
The meaning of life is when the Three Magic Kings come to our house with their camels.  
Yeah, they come to each house.  
Depending on the house, in our house we leave the windows open in order to let the Three Magic Kings with their camels come in.  
We leave them a little bit of water, a little bit of food for their camels, water for the camels, and milk for the kings.  
Normally, kings drink all the milk, camels drink all the water, and they leave presents.  
I like, I really like the night.  
Once you open the presents, the game is over. At that night, you are with the kids, they leave everything open...  
My daughter is 13.  
Now I can say that she's gonna believe in magic the rest of her life. She has never told me anything regarding...  
Yeah, I never questioned how a camel can enter through the window.  
He has never entered, and she knows.  
I mean, I'm talking about her because she's the youngest, yes?  
Her brothers have her sister, so they keep the soul, but the smallest has no smaller brothers.  
Betsy.  
Believe in magic.  
Same way I believe in magic.  
The same way. I mean, the magic has not to do with presents. The magic has not to do also with a flying camel.  
Magic has to do with... let me.  
If you cry tomorrow morning, because you are missing your family...  
And I don't care if it is tomorrow or if it is in the Chinese New Year. There is especially a moment that if you cry tomorrow, I will be really, really, really happy of you to suffer and cry of that. Do you know Aristotle? Aristotle?  
Do you know Plato? Plato? Platón? Platón? Aristotle? Do you know Aristotle?  
Platón, Plato, and Socrates. Socrates, Plato, and Aristotle. Aristotle, I mean, three of them, they were the gold. I mean, it should be one, but three of them. Aristotle used to talk about virtue.  
YouTube, YouTube. Mute too, mute too. Let me... Oh, it's my computer. I'm so happy.  
Let me, yeah, I love this.  
"Hi, Gemini. I am with my NYU students, and I want to tell them about Plato, Aristotle, and Socrates, and I'm talking and explaining to them that Aristotle talked about virtue. They are English, so you will read this in Spanish, but I want you to explain all these things in English, and I don't want you to tell me too many things because they will get bored and sleep. I want just to tell them that virtue has to do with it." I have to say it in Spanish. Yep.  
I love it because I have said it handy.  
And at the beginning, I would have spent five minutes trying to tell the computer in English or in Spanish, because now I am talking in English, the translation is being made into Spanish, and then the answer will be made into English again. Yeah? What I'm saying is that... with this, I am expanding a little bit more targets.  
Option from Socrates, Plato, the idealist, Aristotle, Plato's student... Aristotle argued that virtue is not abstract knowledge, but a practical habit aimed at achieving human flourishing.  
Yep, virtue.  
What do you say? Virtue. Virtue. Virtue has to do with "not too much, not too little". Yes.  
Do you like food? Oh, of course. Salt? Not too much, not too little. Yes. So, in this case, in case from any one of you having lost someone or having a big problem, I would never tell you to cry.  
I will tell you, if you need something I will absolutely respect it, and if you want me to do whatever you need to do, I will be here.  
In this case, you have not lost anyone, and you are missing your family. That is one of the most important things you can take back to the States. One of the most important things you should learn here is how important they are.  
This is personal, that family is the most important thing to have in life. This is my opinion. I am not telling you to follow what I'm saying, but family is the most important thing. And in this case, thinking about them is the most important thing. I'm going to talk about finance, but this is much more important. And Thanksgiving is a spirit in order to think about that, yeah.  
So, if you send them a message telling them how much you miss them, I am sure they will appreciate it. Yep, this goes on one hand.  
Then...  
I hear the door: Aman, Aman, Aman!  
I'm going to give you information:  
The formula sheet.  
Sample Final 1.  
And Sample Final 2.  
You can find all these things also...  
This class and this class. Several things. I have sent you a WhatsApp with information. Do you have problems with Friday at 4:00 PM?  
OK, Friday at 4:00 PM.  
NYU is open, there is room.  
In the worst scenario, we will find a place. Friday normally is open. So this Friday, December 4th, at 4:00 PM, we will see each other for the early exam.  
You said December 4th in your message. Yeah, no, no, no, but I am sure. I am sure.  
Not only next Friday, also next week's classes are important.  
I am absolutely relaxed, yeah?  
I'm relaxed because I'm not the one who has to do the exam! No, no, no, but...  
The slides of this course: I have to say a lot of things are new, I have received them from Stern. New slides.  
There are things that I like, there are things that I should get used to.  
But thinking about the exam, I'm not worried about the things. You can go through Sample Midterm 1, Sample Final 1, Sample Final 2. And next week, I will repeat again the exercise. Do you remember the exercise from the midterm? The exercise with a bond where you reinvest the coupons, yeah?  
I will repeat it next week.  
And this is one of the most important things you should know how to solve.  
You understand what I'm saying, no?  
Next week? Yeah, next week, not today.  
During this weekend, review all things, put everything up to date. You will find in the final... I gave this information, but let me read this:  
"The exam is cumulative and will cover all the material in the course. However, the emphasis will be on the material covered after the midterm: Risk and Return, Portfolio Theory (know how to calculate the variance of a portfolio, know what is the Minimum Variance Portfolio), Cost of Capital, Market Efficiency, Arbitrage, the Law of One Price, Capital Structure and Payout Policy, and Options (what we saw last day and two or three exercises we will do next week)."  
From the first half of the course, you should be comfortable with the Time Value of Money, bond pricing, and equity valuation. You can forget about the yield curve.  
Regarding equity valuation, we will go through this again next week: How do you calculate the price of a stock?  
By calculating the present value of future dividends!  
As simple as that, yeah.  
Okay. Same structure, same ideas, same calculator.  
Yep.  
Okay.  
More things. Today's class:  
I am not really concerned either about today's class. Let me share with you three Excel files.  
New York, here it is.  
Okay. I have shared with you three Excel files.  
I'm gonna start with the binomial model.  
Last day, we were talking about put-call parity. Put-call parity has simple ideas, and I'm going to explain it in a different way. Do you remember that for a call option, the payoff of a call is the maximum between zero and $S_T - K$?  
On the other hand, a put is the maximum between zero and $K - S_T$.  
If I represent a call, with strike $K$, the payoff is this hockey stick.  
For a put, with strike $K$, the payoff is this.  
What is the stock? The value of the stock is a 45-degree line.  
What should I do in order to replicate this?  
The equation of put-call parity: normally the equation you will find is:  
$$
\text{Put} + \text{Stock} = \text{Call} + \text{PV}(\text{Bond})
$$  
where the bond has a face value equal to the strike. Here I was talking about payoff: same payoff means same price before expiration.  
First class, we talked about options and payoffs.  
Last class, I connected payoffs with today's class, which has to do with how to calculate the price before expiration.  
The payoff is the price at expiration. The price before expiration follows a smooth curve above the payoff line.  
Does that make sense? Understandable. Virtue, virtue.  
Now, one more thing we saw: you can calculate the price of a call as a portfolio that combines stock and borrowing (a bond).  
The price of the call will be calculated as a portfolio that combines the stock and the bond:  
$$
C = \Delta \cdot S - B
$$  
Instead of normal weights, let's call it $N(d_1)$ and $N(d_2)$. $N(d_1)$ is the weight of the stock, minus the present value of the bond weighted by $N(d_2)$.  
What does this formula tell me? That the call is a combination of stock and bond.  
Before reaching this point, last day we worked over the binomial model. What is the binomial model? So simple to understand.  
I'm going to repeat the example: I have the stock, today's price is 100. In one period of time, it can go up to 120 or down to 80.  
I have the risk-free bond: today 100, at an interest rate of 10%, it pays 110 in both scenarios because it's risk-free.  
What is the price of a call with strike 110?  
If the stock is 120, the payoff is 10. If the stock is 80, the payoff is 0.  
Knowing these two payoffs, I can create a portfolio that combines the stock and the bond, and calculate the price of the call today.  
Let me make things even simpler: if the rate were 0%, 50% of the time you get 10, 50% of the time you get 0. What is the expected value? 5.  
Do you see what I'm doing? I am pricing the option.  
Now, the binomial model can be calculated in Excel. I am opening the Excel file.  
Expiration time: 1 year. Stock price: 100. Strike price: 110. Risk-free rate: 0. Volatility: 0.20. The price is around 5.  
What can I do instead of just one branch? I can increase the height of the tree: 2 steps, 5 steps, 9 steps, 250 steps.  
First, you calculate terminal payoffs, and once you know the payoffs, you discount backward step-by-step to get the present value today.  
Once you have the price of the call, how can you calculate the price of the put? With put-call parity!  
$\text{Put} = \text{Call} + \text{PV}(K) - \text{Stock}$.  
Or you can calculate the put directly with the tree.  
What is the idea? The deeper the tree, the greater the number of branches, the more accurate the price becomes.  
If you take infinity steps, this discrete valuation method transforms into the Black-Scholes-Merton formula! That is what we are seeing today.  
Do you understand this? The call is a portfolio combining stock and bond.  
Do you remember why I say that buying options is like playing Russian roulette?  
With all respect, what I want to say is: do you know why buying options is an extreme game?  
Russian roulette is a lethal game of chance with a revolver. In finance, buying options is like that because you pay a premium, and the trade can only have two main outcomes:  
You finish in the money, or you finish out of the money.  
If you finish in the money, you can make substantial gains. But if you finish out of the money, you lose 100% of the premium paid.  
If you finish out of the money, you receive zero. If you finish in the money, you exercise and receive the stock minus the strike.  
What are $N(d_1)$ and $N(d_2)$? They are weights in the replicating portfolio, and $N(d_2)$ represents the risk-neutral probability of finishing in the money!  
Do you remember the difference between a probability density function and a cumulative probability function?  
A probability density function is the bell curve (normal distribution). The cumulative distribution function $N(x)$ is the integral: the area under the curve between $-\infty$ and $x$, which ranges from 0 to 1.  
If you finish completely out of the money, it is 0. If you finish deep in the money, it approaches 1.  
If you understood this, you understand the Black-Scholes formula!  
Let me show you the Excel file called Charts.  
A call with strike 10, time to maturity 8 periods.  
Depending on the underlying asset price, you have the option price curve in red.  
As time to maturity gets shorter: 7, 6, 5, 4, 3, 2, 1, 0.5, 0.2...  
What happens with the price?  
As time to maturity gets shorter, if you are out of the money, the option value drops rapidly toward zero.  
The closer you get to maturity, the less time value remains.  
Last Monday, we looked at Nvidia options around Trump's announcements and earnings.  
Options provide massive leverage. Someone can make enormous percentage gains, or lose their entire investment.  
Now, let's look at the Black-Scholes-Merton formula assumptions:  
1. Constant risk-free interest rate, continuously compounded (flat yield curve).  
2. Stock price follows a lognormal distribution with constant volatility $\sigma$, no jumps.  
3. Continuous trading, no friction.  
What is the intuition? Replicating portfolio combining stock and bond.  
$N(d_1)$ is the hedge ratio (delta $\Delta$).  
What happens to the price of a call if the stock price increases? The call price increases.  
What happens to the put price? The put price decreases.  
What happens if the strike price increases? The call price decreases, the put price increases.  
And what happens with time to expiration ($T$) and volatility ($\sigma$)?  
When we buy options, we are buying uncertainty. The more uncertainty (more time, or higher volatility), the more valuable both calls and puts become!  
Because downside is capped at zero, while upside is unlimited.  
Think of the formula like an Instant Pot (or Thermomix in Europe): you put in the 5 ingredients (stock price, strike, interest rate, time, volatility), press the button, and out comes the option price.  
Now, one crucial concept: Implied Volatility and the VIX Index.  
In the market, we already observe the stock price and the option market prices.  
If we know all the ingredients and the output price, what can we calculate backward?  
The implied volatility! The volatility that the market is pricing into options.  
The Chicago Board Options Exchange (CBOE) calculates this for the S&P 500: it is called the VIX Index.  
What is the VIX? Commonly known as the "Fear Index" because it reflects market expectations of forward volatility.  
In 2008 (Lehman collapse), the VIX spiked above 80. In March 2020 (COVID panic), it spiked again to historic highs.  
Today, volatility around AI and tech stocks like Nvidia is high. Nvidia has lost 30% from its recent highs, yet trading activity in options remains intense.  
Is the AI bubble bursting or deflating? A gradual adjustment versus a violent crash.  
Implied volatility gives us a lens to observe market fear and expectations in real time.  
Any questions?  
Happy Thanksgiving to all of you, enjoy time with your friends and families, and see you next week!
