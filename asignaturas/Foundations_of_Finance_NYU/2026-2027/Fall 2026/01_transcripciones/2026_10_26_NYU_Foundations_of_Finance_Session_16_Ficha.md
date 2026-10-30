---
titulo: "Foundations of Finance – Session 16: Portfolio Theory, Diversification and the Efficient Frontier"  
fecha: 2026-10-26  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 16  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: impartida_documentada
rectificado: 2026-10-27
rectificacion_task: TASK_261_AUDITORIA_SECUENCIAL_VAULT
---

# Foundations of Finance – Session 16

## Portfolio Theory, Diversification and the Efficient Frontier

**Date:** October 26, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 16 developed the foundations of **Portfolio Theory**.

Session 15 introduced the statistical building blocks:

- Expected return.
    
- Variance.
    
- Standard deviation.
    
- Covariance.
    
- Correlation.
    

Session 16 asked the next question:

> **What happens when we combine two risky assets in the same portfolio?**

The main topics were:

- Portfolio weights.
    
- Long and short positions.
    
- Expected portfolio return.
    
- Portfolio variance and standard deviation.
    
- The role of covariance and correlation.
    
- Diversification.
    
- Investment Opportunity Set.
    
- Minimum Variance Portfolio.
    
- Efficient Frontier.
    
- Perfect positive and negative correlation.
    

The essential result of the session is:

> **Portfolio risk depends not only on the risk of the individual assets, but also on how those assets move together.**

---

## 2. From Individual Assets to Portfolios

Suppose a portfolio contains two assets:

- Asset (A).
    
- Asset (B).
    

Let their portfolio weights be:

$$
w_A
$$
and:

$$
w_B
$$
If the portfolio is fully invested:

$$
\boxed{w_A + w_B = 1}
$$
For example, if:

$$
w_A = 20\%
$$
then:

$$
w_B = 80\%
$$
Portfolio Theory studies what happens to **expected return and risk** as these weights change.

---

## 3. Portfolio Weights

A portfolio weight represents the proportion of the investor's wealth allocated to an asset.

Conceptually:

$$
\boxed{  
w_i=  
\frac{\text{Amount invested in asset }i}  
{\text{Total portfolio value}}  
}
$$
With two ordinary long positions:

$$
0 \leq w_A \leq 1
$$
$$
0 \leq w_B \leq 1
$$
and:

$$
w_A + w_B = 1
$$
But Portfolio Theory can also allow weights outside this range.

---

## 4. Borrowing and Short Selling

Weights do not necessarily have to remain between 0% and 100%.

If an investor borrows money, the investor can hold more than 100% of their own wealth in risky assets.

Similarly, a **short position** has a negative weight.

For example:

$$
w_A = 110\%
$$
and:

$$
w_B = -10\%
$$
still satisfy:

$$
w_A + w_B = 100\%
$$
The interpretation is:

- Long 110% in asset $A$.
    
- Short 10% in asset $B$.
    

Therefore:

> **A weight above 100% can be financed by borrowing or by taking a negative position elsewhere.**

---

## 5. Expected Return of a Portfolio

The expected return of a portfolio is straightforward.

For two assets:

$$
\boxed{  
E(R_P)=w_AE(R_A)+w_BE(R_B)  
}
$$
Portfolio expected return is simply the weighted average of the expected returns of the assets.

This part is linear.

If:

$$
w_A = 100\%
$$
then:

$$
E(R_P) = E(R_A)
$$
If:

$$
w_A = 0
$$
then:

$$
E(R_P) = E(R_B)
$$
Nothing surprising happens with expected return.

Risk is where Portfolio Theory becomes interesting.

---

## 6. The U.S.–Japan Example

The main exercise of the session combined two risky assets representing U.S. and Japanese equities.

The figures used in class were approximately:

|Variable|U.S.|Japan|
|---|---|---|
|Expected Return|30.6%|50%|
|Standard Deviation|50.4%|23%|

The correlation between the two assets was:

$$
\boxed{\rho_{US,\text{Japan}} = 27\%}
$$
The example portfolio initially used:

$$
w_{US} = 60\%
$$
$$
w_{\text{Japan}} = 40\%
$$
The expected portfolio return is obtained from:

$$
E(R_P) = 0.60 \, E(R_{US}) + 0.40 \, E(R_{\text{Japan}})
$$

The important point is the method:

$$
\boxed{\text{Portfolio return is a weighted average}}
$$
---

## 7. Portfolio Risk Is Different

It would be tempting to calculate portfolio risk in the same way:

$$
w_A \sigma_A + w_B \sigma_B
$$
But in general this is incorrect.

Why?

Because the two assets do not move independently.

We must consider:

$$
\boxed{\text{Covariance}}
$$
This is the key conceptual jump in Portfolio Theory.

> **Returns can be averaged directly. Risk cannot, because the relationship between the assets matters.**

---

## 8. Variance of a Two-Asset Portfolio

For two risky assets:

$$
\boxed{
\sigma_P^2 = w_A^2 \sigma_A^2 + w_B^2 \sigma_B^2 + 2 w_A w_B \text{Cov}(A,B)
}
$$

There are three components:

1. Risk contributed by asset $A$.
    
2. Risk contributed by asset $B$.
    
3. The way $A$ and $B$ move together.
    

The third term is what creates the diversification effect.

---

## 9. Covariance and Correlation

Recall from Session 15:

$$
\boxed{
\rho_{A,B} = \frac{\text{Cov}(A,B)}{\sigma_A \sigma_B}
}
$$

Therefore:

$$
\boxed{
\text{Cov}(A,B) = \rho_{A,B} \sigma_A \sigma_B
}
$$

Substituting this into the portfolio variance formula:

$$
\boxed{
\sigma_P^2 = w_A^2 \sigma_A^2 + w_B^2 \sigma_B^2 + 2 w_A w_B \rho_{A,B} \sigma_A \sigma_B
}
$$

And portfolio standard deviation is:

$$
\boxed{  
\sigma_P=  
\sqrt{\sigma_P^2}  
}
$$
This is the central formula of the session.

---

## 10. Why Correlation Matters

Correlation satisfies:

$$
-1 \leq \rho_{A,B} \leq 1
$$
The lower the correlation between two assets, the more potential there is to reduce portfolio risk.

### Perfect positive correlation

$$
\rho = 1
$$
The two assets move perfectly together.

There is no meaningful diversification benefit.

### Correlation below one

$$
\rho \lt 1
$$
Combining the assets can reduce risk.

### Negative correlation

$$
\rho \lt 0
$$
Diversification becomes even more powerful.

Therefore:

$$
\boxed{  
Lower\ Correlation  
\Rightarrow  
Greater\ Diversification\ Benefit  
}
$$
---

## 11. Diversification

Diversification is not simply:

> Buy many different assets.

The deeper idea is:

> **Combine assets that do not move perfectly together.**

If:

$$
\rho \lt 1
$$
portfolio volatility can be lower than the weighted average volatility of its individual components.

This is the fundamental benefit of diversification:

$$
\boxed{\text{Risk Reduction Through Imperfect Correlation}}
$$

The assets do not need to be individually safe.

The important point is how their returns interact.

---

## 12. Changing Portfolio Weights

The class used Excel to vary the U.S. portfolio weight from:

$$
0%
$$
toward:

$$
100%
$$
while:

$$
w_{\text{Japan}} = 1 - w_{US}
$$
For every possible pair of weights, two numbers were calculated:

$$
E(R_P)
$$
and:

$$
\sigma_P
$$
Each combination therefore generates a point:

$$
(\sigma_P, \; E(R_P))
$$
where:

- Horizontal axis = risk.
    
- Vertical axis = expected return.
    

---

## 13. Investment Opportunity Set

Plotting all possible combinations of the two assets produces the:

$$
\boxed{\text{Investment Opportunity Set}}
$$
It represents:

> **All portfolios that can be constructed from the available assets by changing their weights.**

The individual assets themselves appear as particular points on this set:

- 100% U.S.
    
- 100% Japan.
    

All intermediate portfolios appear between them.

If short selling is allowed, the opportunity set can extend beyond the two individual asset points.

---

## 14. Dominated Portfolios

Suppose two portfolios have the same level of risk.

If one offers a higher expected return:

$$
E(R_A) \gt E(R_B)
$$
then a rational investor would prefer portfolio $A$.

Similarly, if two portfolios have the same expected return but one has lower risk, the lower-risk portfolio dominates.

Therefore:

> **Some portfolios in the Investment Opportunity Set are inefficient.**

An investor should not choose a portfolio when another available portfolio offers:

- more return for the same risk; or
    
- less risk for the same return.
    

---

## 15. Minimum Variance Portfolio

Among all possible combinations there is one portfolio with the lowest possible variance.

This is the:

$$
\boxed{\text{Minimum Variance Portfolio — MVP}}
$$
The MVP is the point furthest to the left on the Investment Opportunity Set.

It satisfies:

$$
\boxed{\min \sigma_P}
$$

This does not necessarily mean that every investor should choose the MVP.

It simply represents the portfolio with the **lowest attainable risk** from those assets.

---

## 16. Efficient Frontier

From the Minimum Variance Portfolio upward, the portfolios that provide the highest expected return for each level of risk form the:

$$
\boxed{\text{Efficient Frontier}}
$$
These portfolios are efficient because no other available portfolio provides:

- higher return for the same risk; or
    
- lower risk for the same return.
    

The lower part of the Investment Opportunity Set is inefficient.

Thus:

$$
\boxed{  
Investment\ Opportunity\ Set  
\supset  
Efficient\ Frontier  
}
$$
The investor should choose from the efficient part of the opportunity set.

---

## 17. Which Efficient Portfolio Should an Investor Choose?

There is no single answer yet.

Different investors have different attitudes toward risk.

One investor may prefer:

- lower volatility;
    
- lower expected return.
    

Another may accept:

- higher volatility;
    
- higher expected return.
    

Therefore:

> **The preferred portfolio depends on the investor's risk profile.**

Portfolio Theory first identifies the efficient alternatives.

Investor preferences determine which efficient portfolio is ultimately selected.

---

## 18. Perfect Positive Correlation

Suppose:

$$
\rho_{A,B} = 1
$$
Then:

$$
\sigma_P = w_A \sigma_A + w_B \sigma_B
$$

for ordinary positive weights.

In this special case, portfolio risk becomes a weighted average of the individual standard deviations.

Graphically, the Investment Opportunity Set becomes a straight line between the two assets.

There is no diversification gain.

This gives an important benchmark:

$$
\boxed{  
\rho=1  
\Rightarrow  
No\ Diversification\ Benefit  
}
$$
---

## 19. Correlation Below One

Once:

$$
\rho \lt 1
$$
the opportunity set bends to the left.

Why?

Because portfolio risk falls relative to the perfect-correlation case.

Expected returns do not change:

$$
E(R_P) = w_A E(R_A) + w_B E(R_B)
$$
But risk does.

This produces the fundamental Portfolio Theory result:

> **We can sometimes reduce risk without proportionally reducing expected return.**

The lower the correlation, the greater the curvature and the stronger the diversification benefit.

---

## 20. Perfect Negative Correlation

The extreme case is:

$$
\boxed{\rho = -1}
$$
Then the two assets move perfectly in opposite directions.

Portfolio standard deviation becomes:

$$
\sigma_P = |w_A \sigma_A - w_B \sigma_B|
$$

It may therefore be possible to choose weights such that:

$$
\sigma_P = 0
$$
The condition is:

$$
w_A \sigma_A = w_B \sigma_B
$$
together with:

$$
w_A + w_B = 1
$$
Solving gives:

$$
\boxed{  
w_A=  
\frac{\sigma_B}  
{\sigma_A+\sigma_B}  
}
$$
and:

$$
\boxed{  
w_B=  
\frac{\sigma_A}  
{\sigma_A+\sigma_B}  
}
$$
Thus two individually risky assets can theoretically be combined into a **zero-risk portfolio** when correlation is perfectly negative.

---

## 21. The Core Diversification Result

Portfolio Theory therefore gives a powerful result:

> **The risk of a portfolio is not simply the sum or average of the risks of its components.**

Risk depends on:

$$
\sigma_A
$$
$$
\sigma_B
$$
and crucially:

$$
\rho_{A,B}
$$
The covariance term changes everything.

This can be summarized as:

$$
\boxed{\text{Portfolio Risk} = \text{Individual Risk} + \text{Interaction Between Assets}}
$$

That interaction is the mathematical foundation of diversification.

---

## 22. Five Ideas to Remember

1. **Portfolio expected return is a weighted average of individual expected returns.**
    

$$
E(R_P) = w_A E(R_A) + w_B E(R_B)
$$
2. **Portfolio risk is not a weighted average because covariance matters.**

$$
\sigma_P^2 = w_A^2 \sigma_A^2 + w_B^2 \sigma_B^2 + 2 w_A w_B \text{Cov}(A,B)
$$

3. **The lower the correlation between assets, the greater the potential diversification benefit.**
    
4. **The Investment Opportunity Set contains all possible portfolios; the Minimum Variance Portfolio has the lowest risk; the upper efficient portion is the Efficient Frontier.**
    
5. **With perfect negative correlation, two risky assets can theoretically be combined to create a zero-risk portfolio.**
    

---

## 23. Before the Next Session

This session is particularly important because the next class builds directly on it.

Students should be able to:

- Calculate portfolio weights.
    
- Explain how negative weights represent short positions.
    
- Calculate expected portfolio return.
    
- Calculate covariance from correlation and standard deviations.
    
- Apply the two-asset portfolio variance formula.
    
- Calculate portfolio standard deviation.
    
- Explain why portfolio risk is not a weighted average.
    
- Explain diversification using correlation.
    
- Define the Investment Opportunity Set.
    
- Identify the Minimum Variance Portfolio.
    
- Explain the Efficient Frontier.
    
- Understand what happens when correlation is $1$, $0$, negative and $-1$.
    

The most important exercise to reproduce independently is the **U.S.–Japan two-asset portfolio example**.

The central intuition is:

$$
\boxed{  
Correlation<1  
\Rightarrow  
Diversification\ Can\ Reduce\ Risk  
}
$$
Understand this session well. The next step in Portfolio Theory is built directly on it.

---

> **Rectificación 27-oct-2026 · TASK_261, lote 3 autorizado por Luis:** El estado anterior era «preparado». La ficha incorpora desarrollo y transcripción fechada de la clase del 26-oct, contrastados con la crónica del día; se registra como impartida/documentada. Se conservan la transcripción y las tareas de estudio futuras.

# Transcription
26 de octubre de 2026, 5:06p.m.
1 h 16 min 8 s
Today's class is important.  
Base class is.  
Where are you?  
You're here.  
You finance for?  
So this.  
OK, is there?  
The burbies.  
The next so.  
Open an Excel file, and let me open also.  
Ohh.  
You are not a man.  
Or, Anastasia.  
Let me look through the stairs.  
Okay, today's class is important. Yes. Why is it important? Because we are going to start talking about the portfolio theory.  
And we will, we are going to see just two classes regarding portfolio theory.  
And if you have not understood.  
Based to us.  
This Wednesday class is going to be impossible.  
On the last this Friday, class this Friday we have class. We think I don't have. Sorry. I don't know. We'll be here. This Friday. OK.  
I'll be here every day. No, no. William, we're hurting you and the board.  
Regarding Ana.  
Anastasia, little bit.  
What is the point?  
Portfolio Theory.  
Did you understand me? I mean, did you understand this class?  
And review today's class.  
On this class, it's easy.  
If you don't understand this class, next class will be like being taught in a different language.  
Okay.  
What are we gonna talk about today, or for your theory? Yes.  
There is just one exercise I would like you to fully understand today, and my recommendation is for this Wednesday, review the exercise by yourself. Also, you have program set three. You can start doing program set three, and a lot of exercises for program set three will have to do with this, yeah?  
Before starting.  
From last class.  
From last class.  
Do you remember the Walmart and Target example?  
Walmart and Target.  
We have Walmart stocks, Barrigüete stocks. And what was the idea? We have.  
Return expected return on Walmart.  
Let me call Walmart Stop A expected return on Stop B.  
Volatility.  
That is variance on stock A, this volatility on stock A.  
Volatility.  
On stroke B, yeah.  
And covariance.  
Between stock A and stock B.  
Yep.  
Return.  
Variance, the square root of variance, deviation.  
Gomarians.  
We have two clothes.  
What are we going to do today? We are going to combine these two stocks.  
In that portfolio, in that portfolio.  
And the portfolio will have.  
a specific weight on stop A and a specific weight on stop B.  
For example, if stock A's weight is 20%, we have 20% on stock A. How much are we going to have in stock B?  
Eighty percent, because I would have 100 from the portfolio.  
Yep, we will change weights during the class and we will see how does the.  
We turn, and how does the variance of the portfolio behave as we change the weights?  
Yep.  
Have you understood this idea?  
This idea is the idea, and we are gonna dedicate the whole class.  
If I have.  
Wait on stock, K, 100%.  
We don't start B, will be C, we turn on the portfolio, will be we turn on A.  
Today, today, we will just work with two assets.  
Today, we will get forward with two assets. Next day, and the day, yes, yes.  
Yes.  
Next day.  
One, three, 4, 5. This will be on Friday. Friday, I will not. If you understand how to work with two assets, you are done.  
Almost done. Yeah. Today, we will see the sensors. Amanda, portfolio theory. So happy you to be here. We will combine. The other day, we finished the class talking about stop A and stop B. The name was Walmart.  
I mean target, yes. We calculate, we terminate, variance on A and covariance between asset A and asset B. From this point, what are we going to do today? We are going to combine 2 stocks into a portfolio. And the only thing that I have said  
that I have called you today is that the portfolio will have 100% of both stocks.  
And it will have a way, don't stop A, and a way, don't stop B.  
Then later, moon, not today, but we will go with N.  
Those or any assets within the portfolio.  
And we will just work with two today. Weight one plus weight 2 will be equal to 1. Yep.  
So.  
Yeah.  
Calculate.  
I'm going to drink some water. I will leave you this exercise for yourself here now. You can throw this in one minute.  
I will fill this with water, and then I will come back.  
Okay.  
Ohh.  
Play.  
Are you gonna try?  
Yes, yes.  
Okay.  
Portfolio A.  
Two 1000.  
Body.  
Six 1000.  
Good.  
So, total amount is...  
They found, oh, oh.  
Copy-paste the sum of these two values is 2000, so weight A would be.  
What day will be?  
Forty percent.  
And what it would be would be 60%. Make sense?  
OK, second one.  
This is the first, this is the second.  
Okay.  
Same exercise.  
But I'm told that...  
One 1000.  
Of own phones.  
And 1000 of borrowing, yes?  
If I...  
Shortly.  
If I borrow...  
I should know at which rate I am borrowing.  
And the idea is, how much money?  
I will be investing.  
I'm gonna divide this by two.  
Yes.  
I will be by this by two.  
A photo.  
The point is that in this case, I will divide this by two now, sorry. Sorry. 2000 is the total amount I am buying. Yes?  
And if I am borrowing...  
The total amount.  
Is 1000.  
And.  
I would have.  
We will not work in this sense.  
The point is, total weight would be some.  
If I am borrowing, I am investing 200% of my money.  
You understand what I mean?  
The way it would be 200.  
One 100 of this amount of money should be paid back.  
I am investing 100 and another 100 came from a third party.  
And this is here just to say that #3.  
Number 3.  
This.  
And, Knop.  
What does short mean?  
in this context.  
Send.  
If I buy, the price is positive.  
If I sell the prices.  
Negative, yes.  
So, in this case...  
Hey, Sam.  
The 2 numbers I am investing.  
Forty 1000, and the weights this weight will be.  
Negative.  
And.  
I am financing from.  
This way, I am buying with 40,000. I am investing 40,000, yes? I am putting 40,000. But how can I buy 120,000 stocks?  
Because I am sorting, I am selling 80,000 of the other, yeah.  
What I want you to see, much more simple than this, much more simple. If I am investing 100 with my own money,  
I can invest 110% with my own money.  
Just in case, I am shorting at 10% on the other stock.  
Can I invest more than 100 within one stock? Yes, while sorting in the other.  
Yep.  
Okay, forget about this. Don't think too much about this. Think later. For me, it's much more important. You to focus on this stuff, on this, on this slide, the exercise, the exercise that will come later.  
And on the variants, yeah.  
What is the pole?  
How are we going? Let me show you this exercise.  
This exercise.  
Is today's class if you fully understand this exercise?  
You will understand not only today's class, you will understand today's class, next day class, and most of classes from portfolio theory. Yes?  
You have.  
Two stocks, U.S.  
And Japan.  
I don't know that why there is this black.  
Yeah.  
Two stocks, US and Japan. What is the expected return on US?  
30.6%, yes?  
What is the expected return on Japan? 50%.  
Then I have deviation. What is deviation? The square root of variance. Deviation on US is 50.4% and deviation on Japan is 23%. Makes sense?  
Correlation.  
Between.  
Correlation between U.S. and Japan is twenty-seven percent, yeah.  
Okay.  
Bing.  
Wait, on US?  
Is 60%?  
Wait!  
On Japanese, 40%, yeah.  
The question is...  
Why is this expected we don't?  
And what is the variance?  
On A portfolio that consists of 40%.  
of Japan and 60% of US.  
Understood the question.  
Let me start by then we go, and we don't need so simple.  
How much do I have on US? 60 percent.  
So, there we go. My portfolio will be 60%, Redondo on US.  
Plus 40%, we turn on Yatali.  
Understood.  
Zip.  
Let me write it.  
We don't on the portfolio, yes.  
It's going to be.  
Wave A return on A plus wave B.  
We turn on me.  
It.  
Ana.  
What about the variance on the portfolio?  
I'm talking about...  
Careful, because I'm talking about the variance, no, you're you bought the VS.  
But what about the variance on the portfolio?  
Play.  
Oh, audience, this is Sigma, Sigma in Greek, yes.  
Sigma, the portfolio, the variance of the portfolio.  
It is.  
What is the problem with variances? This is the most tricky thing of today's class.  
As many insist.  
Cannot be weakened as an average.  
Bye.  
Because of covariance, because of covariance, you cannot say that the values on the portfolio cannot say the values on the portfolio is where they times.  
Last way to be time to speak, variation on variation.  
You cannot say this, why? Because there is coarse.  
And covariance makes we are going to see all these things with numbers, but covariance.  
Because of covariance, the values of the portfolio will be lower than this.  
What is the formula? I'm going to write first the formula, and then I will explain the formula. Yes, what is the values of the portfolio? This weight A raised to the square times values on asset A.  
Yes.  
Weigh B raised to the square times variance C2 variance of acid B.  
Do you follow me?  
Yes.  
Two times weight A, weight B, covariance between A&B.  
Let me.  
Do you see this formula?  
I want you to understand this before.  
What do I have here? Here I got correlation coefficient.  
What, what do you have there?  
Boys.  
Do you remember?  
For reason, coefficient.  
Is covariance over?  
Susana.  
Correlation coefficient, correlation coefficient, the correlation coefficient.  
is the covariance over its deviation.  
So, covariance would be written.  
Covariance will be written as the correlation coefficient between A&B times variation A times variation B, this.  
So what is the covariance between US and Japan?  
Correlation coefficient.  
Thanks, the nation name, the nation name.  
Are you following me? Correct? Yeah.  
So, here...  
What do you think?  
Later, call.  
Here.  
I can write items on the portfolio where they work.  
A + y B square. This is the first time you see this formula. I'm going to write this formula as many times as present value formula.  
So, the sooner you make yours.  
Way big.  
Wave Vega.  
And deviation A, deviation B times correlation coefficient between A and U.  
I have done this instead of covariance.  
For instance.  
Are you with me?  
I'm going to rewrite this week. I'm going to, I'm going to write this. What is the difference between this and this? This is the same and covariance instead of covariance.  
I have written deviation A, deviation B, coefficient.  
Well, that's just a good Yes, I have taken this from here.  
Instead of covariance, I have written this. Yep, the only difference.  
Physics, yeah?  
Yep.  
And let me make a third.  
Peace.  
Is the same than this, and then when I write this in a third way.  
Finance of the portfolio, yes, please.  
What day, deviation A, price is worth?  
You see that they said, no?  
Bless.  
What AB, Aviation B, rise to the square.  
That's 2 times.  
Knop.  
I'm going to reorganize this. I'm going to put weight A combined with the VSUA.  
Way day deviation A.  
Yeah.  
Where you be? There you should be.  
Correlation.  
Yeah.  
Are you following me?  
And this is what I'm going to write is a big spoiler of today's class.  
I'm going to call this ABA&B.  
I'm gonna wait.  
Is a square plus B square plus 2 * a B correlation.  
Or, yeah, yeah, or is.  
Make sense?  
Do you remember, correlation coefficient is a number that varies from -1 to one, no? The correlation coefficient is 1.  
Already superficial.  
Is what?  
You can say that by mix is.  
A less B square is any.  
A + B square is a square plus b ^2 + 2 * a B.  
relation coefficient report.  
Is.  
Go with this, I will have this.  
If...  
Correlation between 2 stops is perfect.  
I will have.  
The other things.  
If correlation coefficient is lower than one.  
Correlation coefficient is lower than what?  
Variation will always be lower than the average.  
Makes sense.  
Are you with me?  
Okay, if you have understood that, we would have understood today's entire class. But I'm going to do again.  
That formula first, the returns formula first, and then that one.  
With numbers, yep.  
Let me go.  
Wait!  
U.S. Why U.S. is...  
Sixty percent.  
Let me call this, wait.  
Japan, and with Japanese, 1 minus...  
Wait, Luis.  
Forty percent, yep.  
Knop.  
Return.  
Portfolio.  
Return on portfolio. How much is the return on portfolio?  
Return on portfolio would be weight on US.  
Return on US, I'm gonna fix this, yes?  
Bless.  
Wait, on Japan, 10 times.  
Return on Japan.  
And I'm going to fix this.  
Buddy.  
Among.  
So.  
Return is 40.16%.  
I'm going to check if I have done this correct. I'm going to change weight on US for 100. What will be the return on the portfolio if weight on US is 100? How much will be the return on the portfolio?  
Okay.  
If the coherence of 100. If weight on US is 100, weight on Japan will be.  
Zero, and the return on the portfolio would be.  
Yes.  
If this is zero, weight on Japan would be 100%.  
And return on the portfolio would be 50%.  
50.  
Yep.  
OK, now I'm going to calculate.  
Deviation. Deviation is the square root of the variance. Make sense?  
Before calculating deviation, I'm going to calculate.  
Carabias.  
Covariance a month is twenty-seven percent correlation coefficient times.  
Deviation times variation.  
All of you are with me?  
Olivia, wait, can you say that again? Yes, is what, because of that, is what you have on the blackboard.  
Okay.  
Call variance is correlation coefficient times.  
Let me go to the Sáez.  
Let me go to the slides. Here it is.  
Look here, Olivia, covariance between stock one and two.  
And if you compare this with that...  
Don't consider 2 times weight one times weight 2.  
Did you see covariance? Covariance is the same as correlation coefficient times deviation one, deviation 2. Yep.  
And now, coming back here, what I'm going to calculate, I'm going to calculate.  
The variance as doing weight one rise to the square times variance on portfolio on stop A on stop one plus weight 2 rise to the square times.  
Variance on stock 2 + 2 times weight one weight 2 covariance.  
And I'm not going to calculate.  
I'm going to calculate deviation, so I'm going to calculate square root.  
In Spanish, square root is called.  
Right. In Excel, in an American Excel, it will be a SQRT formula, yes?  
And now, do you know what is actually in Spanish?  
Have you ever heard Tiburcio?  
Red Tiburcio.  
Let me open Google and show you chorizo.  
William, you know what is Tiburcio?  
Ohh yeah, all of you know a man.  
Sorry, first of.  
It was true.  
My God.  
I'm thinking when thinking about chorizo.  
I'm thinking about these ones in particular.  
That 33rd normally.  
This is not a sausage. It looks like a sausage, but in Spanish, chorizo are chorizos. Yes, chorizos one goes once after another one.  
It's not technical. I'm going to use the word chorizo when talking about big chorizos, a formula that has...  
You see that this is a Toro?  
That formulas are actually true.  
I mean, don't look in Google for chorizos for this kind of formulas; it's just in my head.  
This is not proper. A chorizo is a chorizo. You can go into a bag and ask for a chorizo.  
No sandwich, how do you say?  
But sandwiches specific type of.  
This is avocadillo.  
And a sandwich is normal with sandwich bread with other type of whatever. You can ask for a bocadillo de chorizo.  
You can have.  
I have not eaten yet. I'm gonna stop. Sorry, whatever.  
Write the square root of, and I'm going to start with the chorizo.  
Wait on US.  
Thanks.  
Deviation.  
Deviation.  
On U.S. Are you following me?  
Rise to the square. Yep, first part of the Toro, second and third.  
Bless.  
Waiton, Japan.  
Times, deviation on Japan. I'm going to fix this.  
Rise to the square. Are you following me?  
Plus 2 times.  
Wait on U.S. times, wait on Japan.  
Thanks.  
Covariance and let me close the square root.  
Yep.  
And what is this? This is the deviation.  
What I have done there, sure, I have applied, yes, this formula, variance.  
On the portfolio.  
Is weight one times deviation one raise all to the square?  
Plus weight 2 times deviation 2, rise all of that to the square.  
Plus 2 times, weight one, weight 2 covariance.  
Makes sense.  
Next day, we will see how this works with more than just two assets. Let me, for next day, make a spoiler, and the spoiler is that the chorizo will be bigger.  
This is for two assets. Yes, I'm going to introduce asset three.  
If, instead of two assets, we have three assets.  
Wait, C, right through the square.  
Times variance on SSC.  
Plus 2 times.  
Wait, hey!  
Why is C covariance between A&C covariance? Sure, covariance between A&C.  
Plus, sometimes.  
Weight B, weight C, covariance between.  
The answer.  
See.  
Victoria becomes bigger.  
If instead of three, we would have four.  
One more game.  
Regarding.  
And 3 more terms regarding cobalances.  
A and B and B and C and B.  
Exits.  
You see?  
What are we doing?  
One term of this for each one of the balances.  
And wait one, wait whatever times for Barrigüete.  
One and whatever, or two and whatever, yeah.  
But we are not gonna go with more than soup.  
All exercises, you will see, will have to do more or less week two, and we will interview next day. I wish because this will be next day. Today's class, I said this at the beginning, and because of that, I became so happy once I saw you. Today's class is important.  
I don't want anyone to lose today's class because next class we work over this one. Do you have to look up for example ones from the beginning? Which one? The Japan and US.  
Stop.  
Which one? This top AB. Yeah. No, this is on the spreadsheets, right? Yeah. OK, let's check on that. You can find it right space.  
The all the Excel files.  
I have not a clue this yet, but yes, send me a WhatsApp and I will send you, and once I, you will have them. I want another. Yeah. But for today's class, the important exercise is the one.  
And.  
What do I have calculated? The expected return on the portfolio and the variation.  
on the portfolio. Yes. Again, let me see. If weight on US is 100, the return and deviation should be US.  
Thirty and 50 is correct, yeah.  
Let me move to 0%.  
The 2 numbers are Japan.  
And I'm happy. Yep.  
Let me see, let me take this out.  
What is this?  
These are the numbers that I have, yes, done with X, yep.  
But...  
What I'm gonna do?  
What I'm gonna do, I'm going to go, I'm gonna move to this slide, but forget about the slides.  
Forget about the slides. I want you to be with me and understand what I'm going to do. Okay?  
This is deviation.  
Deviation on the portfolio and return on the portfolio. Yep.  
I'm going to start with...  
Zero.  
One US.  
And I'm going to increase this on 1%.  
And if I drag this...  
Two, three.  
This is what I'm doing.  
And if wait on US.  
Is 0 and wait on Japan.  
If weight on US is 0, weight on Japan would be 100. If it is 1, it would be 99 and so. Yep.  
With Excel, shortcuts are important. How can I jump? With control. Control, I jump, and I am at the end. Yes?  
And you repeat with control. I maintain control. Look, I'm going to move to the end of the split set.  
Control, I mark this, I move here, Control V.  
And all this, yeah.  
I'm going to calculate.  
I'm gonna draft this.  
And I'm going to calculate deviation. This is US 100% and zero. Yep.  
And these are all portfolios that combines US and Japan, not all. This is a portfolio that has zero and 100, 199 two, yeah.  
What I'm gonna do?  
I'm gonna draw.  
I'm gonna draw.  
Is true. What is the scatter? Yeah.  
Here, I like this one with dots, dots are too big.  
What do you have here?  
What do you have there?  
What does this represent?  
What do we have here?  
That is.  
Variation, yes, it's for root or polo.  
Let me call Fred, let me call this.  
Risk.  
Yes.  
And what do you have there?  
We do.  
How can I call this point?  
US.  
What is the name of this point?  
US. What is the name of this phone?  
Yeah, fine. And what can you find there? What about this point?  
All possible portfolios that combines.  
US and Japan.  
Make sense?  
All possible portfolios that combines US with Japan.  
What is the name of this golf?  
The name of this curve is the Investment Opportunity Set.  
The investment opportunity service a little bit bigger.  
This point is not the end. You can.  
In this point, you have 100% on Japan, no?  
You can buy more than 100% on Japan. Oh.  
LP.  
US. If you sort US, you can continue this way. And you could continue this way by sorting Japan.  
Make sense?  
So, the investor opportunity said not finish, does not finish in this point on this point. He finished, he does not finish.  
What are you?  
More questions or more ideas.  
You can choose.  
William, you can choose between someone is something distracted. I mean, there was someone shouting outside the glass.  
William.  
is still there. William, you can choose between this portfolio, sorry, this stock between US.  
One is what?  
Which one would you choose?  
Both has.  
Same risk.  
But this portfolio base will return, so, so.  
No one of you being Garcia, man.  
We never choose this.  
Why you can have this portfolio?  
What do we choose, US or Japan?  
Between U.S. and Japan, it will be best.  
It depends on your risk profile. You can only choose between US and Japan.  
I don't know, but between U.S.  
And this portfolio that consists on a percentage on US and a percentage on Japan, you will always choose this one. Yep.  
And I can do the same talking about comparing this point with this or this one with this, yeah?  
Here, there is a specific portfolio.  
That is the portfolio that has the minimum values.  
What I'm going to call the portfolio that has minimum variance.  
When I break.  
The minimum values for.  
Thank you.  
MVP, yes, and from the MVP.  
At work, yes?  
All portfolios that play about the MBP, I will call all that portfolios the easiest for here.  
That he's in from here.  
Angelina. Okay.  
So.  
This is what I have yes on.  
We fix, yeah.  
I want you to understand what comes next.  
You cannot change the correlation between two assets.  
You cannot change.  
But what I'm gonna do...  
You cannot change it, but what I'm gonna do...  
I'm going to Cheddi.  
You understand what I mean? The correlation between two stops is the correlation that you have calculated.  
It does not change, but I'm going to change it in order you to see the effect on that part of changing.  
Correlation. Do you remember that when correlation was perfect?  
When correlation was perfect, instead of the big chorizo.  
Because correlation coefficient was one, we can move and say that.  
The variance is also the average of variances of the deviation is the average of the deviation, as return is the.  
You remember?  
Let's see how does this behave here.  
I have the condition of writing again the phone.  
So, no matter how much slides I write this formula, because I wanted to get used to the formula.  
I answer the portfolio, yes, please.  
Weight 1 square minus 1 plus weight 2.  
Square plus two times.1.2 times correlation between one correlation, sorry.  
variation one, variation 2, correlation with one, yep.  
The correlation coefficient.  
Is what?  
Correlation coefficient, correlation coefficient between one and two.  
One.  
I told you that I can write, but variation in the portfolio as.  
Wait, what?  
Relation one plus 42 relation, yeah.  
If cooperation with Fisher is negative Y.  
Think I'm right, please.  
Ask for what? So, what is my question?  
Yeah, the rest of the cases, what happens? I think correlation position is one. I can move here, being expected return in the portfolio.  
For Juan.  
We don't want, that's why we don't make sense.  
What is in this?  
Let's see what's happening now.  
I'm gonna increase correlation coefficient.  
Thirty.  
Body.  
Fifty.  
Seventy.  
This is not moving.  
Sure.  
Oh, I wanna cry.  
Why my computer is not moving?  
And it's my computer.  
The numbers are moving, but the formula is not.  
Something have done something.  
I know what is going on. I have not fixed this function before.  
Wow, yeah, sorry. Which was the number with the one I start, 20%?  
Twenty-seven percent. Yes, this is twenty-seven.  
I'm gonna move to 30.  
For it, look the look the screen.  
Fifty.  
Sixty, you see what is going on?  
A.T.  
51.  
And 100.  
It.  
Correlation is perfect.  
The investment opportunity is alive.  
Let me move to zero, for example. Yes, let me move to zero.  
In zero.  
If it is zero.  
What can you do? If correlation is 0, thanks to correlation, but I have told you before, I can choose all these portfolios instead of this.  
This portfolio is better than this. What is the name of this effect?  
Universification.  
I can diversify away part of the risk, not only of US, of both, of US and Japan.  
You understand what I mean?  
Why there is correlation, why there is no?  
While correlation is lower than one, while correlation is lower than one.  
You can diversify away part of the risk. Make sense?  
And tell me, I can have negative correlation, no?  
Minus 40.  
Then more.  
The bears.  
This is something actually important: Amman, Trey, Claudia, William, Angelina.  
The more the better, the better.  
The more diverse, the better. And this not only happens in finance.  
Is this?  
Universal, the more diverse, the better. Have you ever think about this?  
These are much, the more diverse, the better. Can you imagine how boring this would be in case all of us?  
Will be equal.  
Can you imagine having? Yes, 6 Williams. No, no, but what is the point in all of us being the same? You cannot diversify.  
The more reverse, the better. Let me go to zero, let me go to -70, -80. Look, please, all of you, 90.  
95, look.  
Yeah, 96, 98.  
52.  
I'm going to move to 9. Perfect. Negative.  
What is that?  
Correlation is perfect.  
I got the correlation.  
Oh.  
Where I will be.  
I can combine these two books in a portfolio that we have.  
Zero.  
I could combine these two stocks in a portfolio that will be risk-free.  
These are pillars.  
But it's only happening here.  
But are you understanding what I mean? For your theory, I'm combining 2 stops. What I recommend you to do for next class, to review today's class, to start doing problem set, to fully understand what are we doing with these numbers. And to move from here,  
Look here several times. You get familiar with this. Yes, today's class is important. If for next class you must have in today's class.  
You will be.  
close to 27 percent.  
What?  
Here, really, here there are some words regarding diversification, yes?  
But I'm gonna move forward.  
Portfolio theory terminology.  
Alejandro.  
MVP, the minimum variance portfolio, is the portfolio that provides the lowest variance. Yep. The investment opportunity set is the combination of all possible portfolios. Yeah.  
And then, all.  
Portfolios that are about the minimum variance portfolio.  
Our call or our situation are located into the on to the efficient frontier.  
And the fishing frontier is a portfolio that is being located at the fishing frontier.  
You remember when I told you, which one, William, you prefer, US or that portfolio? That portfolio was a PCM portfolio compared with US.  
Excellence.  
So this terminology apply, then Japan and US. And I told you that you can sort on US and you can sort on Japan.  
Questions?  
Ana.  
What if there is positive perfect correlation or negative perfect correlation?  
If there is positive, perfect.  
There will be a line if there is negative.  
Correlation, we can calculate that.  
Yep.  
So, under perfect correlation.  
Then the variance on the portfolio.  
Get reduced to what you have there, what you have on that platform, yeah?  
Assume that the correlation between the US and Japan is -1.  
Let their mind.  
The portfolio weights in Japan and that and the US that create a 0 risk portfolio, yes?  
If correlation is negative one.  
The correlation is negative one. I guess of the portfolio could be with the mass weight one. There is 1 minus weight 2 the region.  
Who can we determine?  
Release free portfolio.  
Are you looking forward for you?  
Looking for the portfolio that makes this worse, you know.  
Zero, this point one, the relation one, 9.2, relation two, yeah.  
And also, we know that one is equal to weight one plus weight three.  
Exist.  
Insult.  
These are all things.  
Indeed.  
I'm going to go here. Do you have to ask me the telephone for later?  
I was going to read that formula there, and look at that form, so...  
This.  
These went there.  
Okay.  
Hey.  
One is equal to weight one plus weight two, yeah?  
Sam of two weights is equal to 100.  
And then...  
variance on the portfolio.  
It's equal to weight 1 times deviation 1 minus weight 2 times deviation 2. Yes.  
From here.  
I'm going to say that.  
When 2, when 2 is equal to.  
Weight 2 is equal to.  
Deviation one over deviation 2 times weight one. Make sense?  
Yep.  
There are different ways in order to solve this equation.  
And then I move from here to there, and I say, one is C1.  
Weight one plus deviation one over deviation 2 times weight one, no?  
I can say that one is equal.  
One plus, variation one, variation 2. Thanks. Wait one.  
And.  
I can say, I'm moving here, yep.  
One is equal to.  
Variation 2 plus variation one or variation 2 times weight one.  
I can say that where one is equal to deviation 2 over deviation 1 plus deviation 2.  
Exempts.  
This is with Juan.  
Wait, two.  
Because weight one plus weight 2 should sum one weight 2 would be deviation one over deviation one plus deviation 2. Yep.  
Play.  
Oh, this, okay.  
I'm going to, I'm gonna take this.  
Move into a new.  
But, and say that.  
Wait one.  
For you, too.  
Which one is?  
The VH, wait on ya, wait on.  
US, wait on Japan.  
Wait on US will be deviation on Japan over.  
This plus this, because this will be almost 60%.  
And each other will be 1 minus. This one that is 4.  
More or less, let me, yes, put this a little bit more beautiful.  
I prefer beauty in this way. Yep.  
Make sense?  
What is this? The graph that I have shown you before.  
So, optimal portfolio choice with two risky assets.  
Which asset will you prefer? Depends on your risk profile.  
Depends on your risk profile. Among all these portfolios, which one would you prefer?  
Someone that lays about the minimum variance portfolio. Make sense?  
Please review today's class. Please review today's class. Next day, we will continue over this.  
I am a little bit worried about Anastasia.  
I will write her and I will tell her that I have office hours, because if she has not come today to class, next day will be impossible to understand.  
Yep.  
Thanks A lot. Oh, this Wednesday?  
This Wednesday.  
At 7, I will go from today's class, no from this Wednesday class, running. Because this Wednesday getting worse, talk. We have failed.  
Any words will talk about incident rates.  
This one, I know that this could mean nothing for you, but for me in my life, and how do you say, no, how do you say those that love Marvel?  
Spider-Man, those that love Marvel, Otakus. Super fan. Like a super fan. Yeah, but how do you call Geek? Yeah. Geek. Yeah, I'm a geek with fair.  
No, these ones they we will have more.  
Bing.  
So we have class on Friday.  
We have class on Friday.  
Because we have class on Fri.