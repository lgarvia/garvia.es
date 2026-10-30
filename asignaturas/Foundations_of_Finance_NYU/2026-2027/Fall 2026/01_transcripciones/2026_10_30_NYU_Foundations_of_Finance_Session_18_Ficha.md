---
titulo: "Foundations of Finance – Session 18: Diversification, Systematic Risk and Introduction to CAPM"
fecha: 2026-10-30
curso: "Foundations of Finance (Fall 2026)"
sesion: 18
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---

# Foundations of Finance – Session 18

## Diversification, Systematic Risk and Introduction to CAPM

**Date:** October 30, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 18 completed the main Portfolio Theory block and opened the door to **CAPM**.

The class moved from two-asset portfolios to portfolios with many assets and addressed a crucial question:

> **Can diversification eliminate all risk?**

The answer is no.

Diversification can eliminate part of the risk, but a component remains because assets are exposed to common economic forces.

The main topics were:

- Portfolios with $N$ assets.
- Covariance and correlation matrices.
- Portfolio variance with many securities.
- Portfolio optimization.
- Tangency Portfolio.
- Two-Fund Separation.
- Diversification with many assets.
- Idiosyncratic versus systematic risk.
- Why systematic risk cannot be diversified away.
- Transition from Markowitz Portfolio Theory to CAPM.
- Introduction to beta.
- Capital Market Line and Security Market Line.

---

## 2. From Two Assets to Many Assets

For two assets:

$$
E(R_P)=w_1E(R_1)+w_2E(R_2)
$$

With $N$ assets, the logic is unchanged:

$$
\boxed{
E(R_P)=\sum_{i=1}^{N}w_iE(R_i)
}
$$

and:

$$
\boxed{
\sum_{i=1}^{N}w_i=1
}
$$

Expected portfolio return remains a weighted average.

The difficult part continues to be risk.

---

## 3. The Covariance Matrix

With several assets, we must consider not only the variance of every asset but also how every pair of assets moves together.

This information can be organized in a **covariance matrix**.

For three assets:

$$
\begin{pmatrix}
\sigma_1^2 & \text{Cov}_{12} & \text{Cov}_{13}\\
\text{Cov}_{21} & \sigma_2^2 & \text{Cov}_{23}\\
\text{Cov}_{31} & \text{Cov}_{32} & \sigma_3^2
\end{pmatrix}
$$

The diagonal contains:

$$
\boxed{
\text{Variances}
}
$$

The off-diagonal elements contain:

$$
\boxed{
\text{\text{Cov}ariances}
}
$$

Because:

$$
\text{Cov}_{ij}=\text{Cov}_{ji}
$$

the matrix is symmetric.

---

## 4. How Many Covariances?

With $N$ assets, the matrix contains:

$$
N^2
$$

elements.

There are:

$$
N
$$

variances.

The remaining elements correspond to covariances.

Because the matrix is symmetric, the number of unique pairwise covariances is:

$$
\boxed{
\frac{N(N-1)}{2}
}
$$

This illustrates why Portfolio Theory becomes computationally demanding as the number of assets increases.

---

## 5. Portfolio Variance With Several Assets

For two assets:

$$
\sigma_P^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\text{Cov}_{12}
$$

For three assets:

$$
\begin{aligned}
\sigma_P^2
=&\,
w_1^2\sigma_1^2
+w_2^2\sigma_2^2
+w_3^2\sigma_3^2\\
&+2w_1w_2\text{Cov}_{12}\\
&+2w_1w_3\text{Cov}_{13}\\
&+2w_2w_3\text{Cov}_{23}
\end{aligned}
$$

The same logic continues with more assets.

The formula becomes longer, but the concept does not change:

> **Portfolio risk depends on individual variances and all the relevant covariances between assets.**

---

## 6. From a Curve to a Cloud of Portfolios

With two risky assets, changing the weights creates a curve in risk-return space.

With three or more assets, there are many more possible combinations.

Using different portfolio weights creates a large set of possible portfolios.

The class illustrated this using random weights generated in Excel.

The resulting points represent different combinations of:

$$
(\sigma_P,E(R_P))
$$

Together they form the broader:

$$
\boxed{
\text{Investment Opportunity Set}
}
$$

Its upper boundary remains the:

$$
\boxed{
\text{Efficient Frontier}
}
$$

---

## 7. Portfolio Optimizer

The class then used a Portfolio Optimizer to identify several important portfolios.

Among the possible combinations we can identify:

### Global Minimum Variance Portfolio

The portfolio with the smallest possible:

$$
\sigma_P
$$

### Tangency Portfolio

The portfolio with the highest:

$$
\boxed{
\text{Sharpe} =  \frac{E(R_P)-R_f}{\sigma_P}
}
$$

The Tangency Portfolio is not necessarily the portfolio with:

- the highest return;
- the lowest risk;
- the highest weight in the individually “best” stock.

Instead, it is the portfolio offering the best **risk-adjusted expected return**.

---

## 8. Why Even a Bad-Looking Asset Can Enter the Portfolio

A key intuition from the optimizer was that an asset can have:

- relatively low expected return;
- relatively high individual risk;

and still receive a positive portfolio weight.

Why?

Because its value inside the portfolio depends on more than its individual return and volatility.

Its correlation with the other assets matters.

Therefore:

> **An asset can improve a portfolio even if it does not look particularly attractive on its own.**

This is one of the deepest lessons of diversification.

---

## 9. Correlation Changes Optimal Weights

The class experimented with changing the correlation between two assets.

As two assets become more highly correlated:

$$
\rho_{ij}\uparrow
$$

they become increasingly similar from a diversification perspective.

If two assets eventually become perfectly correlated:

$$
\rho_{ij}=1
$$

and one dominates the other in risk-return terms, there is little reason to hold the inferior asset.

Portfolio weights can therefore move strongly as correlations change.

The relevant question is not simply:

> Which asset has the highest return?

It is:

> **How does each asset contribute to the complete portfolio?**

---

## 10. Two-Fund Separation Revisited

Session 17 introduced the Two-Fund Separation principle.

Once all risky assets have been combined efficiently, investors need only two building blocks:

1. The risk-free asset.
2. The Tangency Portfolio.

Thus:

$$
\boxed{
\text{Investor Portfolio} = \text{Risk-Free Asset} + \text{Tangency Portfolio}
}
$$

The Tangency Portfolio itself can contain many risky securities.

Investor preferences determine only how much is allocated between the two funds.

---

## 11. Equal-Weighted Portfolio Intuition

The second major part of the session examined what happens as we add more and more securities to a portfolio.

Suppose all assets receive equal weights:

$$
w_i=\frac{1}{N}
$$

The variance contribution from individual asset variances becomes smaller as $N$ grows.

Conceptually, this component behaves like:

$$
\boxed{
\frac{\text{Average Variance}}{N}
}
$$

Therefore:

$$
N\rightarrow\infty
$$

implies:

$$
\frac{\text{Average Variance}}{N}\rightarrow0
$$

This is the mathematical foundation of diversification.

---

## 12. The Limit of Diversification

But covariance terms do not disappear in the same way.

For a large equal-weighted portfolio, portfolio variance can be understood schematically as:

$$
\boxed{
\sigma_P^2
\approx
\frac{1}{N}\overline{\sigma^2}
+
\left(1-\frac{1}{N}\right)\overline{\text{Cov}}
}
$$

As:

$$
N\rightarrow\infty
$$

the first term tends to:

$$
0
$$

while the second tends toward:

$$
\boxed{
\overline{\text{Cov}}
}
$$

Therefore:

$$
\boxed{
\lim_{N\rightarrow\infty}\sigma_P^2
=
\overline{\text{Cov}}
}
$$

under the simplifying assumptions used in the class demonstration.

This produces a crucial result:

> **Diversification reduces risk, but it cannot eliminate the risk generated by common movements across assets.**

---

## 13. Idiosyncratic Risk

The component of risk associated with the unique characteristics of an individual company can be diversified away.

This is called:

$$
\boxed{
\text{Idiosyncratic Risk}
}
$$

It is also commonly described as:

- firm-specific risk;
- unique risk;
- nonsystematic risk;
- diversifiable risk.

Examples might include events affecting one particular firm rather than the entire market.

As more independent or imperfectly correlated assets are added:

$$
\boxed{
\text{Idiosyncratic Risk} \downarrow
}
$$

---

## 14. Systematic Risk

The remaining component is generated by common factors affecting many assets simultaneously.

This is:

$$
\boxed{
\text{Systematic Risk}
}
$$

also called:

$$
\boxed{
\text{Non-diversifiable Risk}
}
$$

Examples of common shocks could include changes in:

- economic growth;
- interest rates;
- financial conditions;
- broad market expectations.

Because these factors affect many securities at the same time, diversification cannot eliminate their effect.

Thus:

$$
\boxed{
\text{Total Risk} = \text{Systematic Risk} + \text{Idiosyncratic Risk}
}
$$

---

## 15. Why Investors Should Not Be Paid for Idiosyncratic Risk

This distinction creates the bridge toward CAPM.

If investors can eliminate idiosyncratic risk simply by holding diversified portfolios, markets should not need to compensate investors for bearing that avoidable risk.

Therefore, the relevant risk for expected return becomes:

$$
\boxed{
\text{Systematic Risk}
}
$$

This is the key conceptual transition:

> **Investors should be compensated for risk they cannot diversify away, not for risk they voluntarily keep by holding undiversified portfolios.**

---

## 16. From Markowitz to CAPM

Markowitz Portfolio Theory is powerful, but it requires:

- expected returns for many assets;
- variances for every asset;
- covariances between every pair of assets.

With hundreds of securities, the number of inputs becomes enormous.

The class therefore introduced CAPM as a simplification.

The conceptual move is:

$$
\boxed{
\text{Total Volatility} \longrightarrow \text{Systematic Risk}
}
$$

Instead of describing an asset's risk only through:

$$
\sigma
$$

CAPM will describe relevant risk through:

$$
\boxed{
\beta
}
$$

---

## 17. Beta

Beta measures how an asset moves relative to the market.

The definition introduced was:

$$
\boxed{
\beta_i =  \frac{\text{Cov}(R_i, R_M)} {\text{Var}(R_M)}
}
$$

where:

- $R_i$ = return on asset $i$;
- $R_M$ = market return.

For the market itself:

$$
\boxed{
\beta_M=1
}
$$

Interpretation:

### If

$$
\beta_i \gt 1
$$

the asset has greater systematic sensitivity than the market.

### If

$$
\beta_i \lt 1
$$

the asset has lower systematic sensitivity than the market.

Beta will become the central measure of risk in CAPM.

---

## 18. The Market Portfolio, CML and SML

Once the universe of risky assets is considered, the Tangency Portfolio becomes the:

$$
\boxed{
\text{Market Portfolio}
}
$$

Combining the risk-free asset with the Market Portfolio generates the:

$$
\boxed{
\text{Capital Market Line (CML)}
}
$$

The session then previewed a second relationship:

$$
\boxed{
\text{Security Market Line (SML)}
}
$$

The important change is the horizontal axis.

### Capital Market Line

Uses:

$$
\sigma
$$

as the measure of risk.

### Security Market Line

Uses:

$$
\beta
$$

as the measure of systematic risk.

The next session will develop this distinction in more detail.

---

## 19. Introduction to CAPM

The session finished by introducing the central CAPM equation:

$$
\boxed{
E(R_i) = R_f + \beta_i[E(R_M)-R_f]
}
$$

The expression:

$$
E(R_M)-R_f
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
\text{Expected Return} = \text{Risk-Free Rate} + \beta \times \text{Market Risk Premium}
}
$$

The intuition is straightforward:

> **The more systematic risk an asset carries, the higher the expected return investors require.**

---

## 20. Five Ideas to Remember

1. **With many assets, portfolio risk depends on all individual variances and the covariances between securities.**

2. **Diversification can eliminate idiosyncratic risk but cannot eliminate systematic risk.**

3. **As the number of securities increases, the individual-variance component becomes less important, while common covariance remains.**

4. **The Tangency Portfolio is the risky portfolio with the highest Sharpe Ratio and becomes the Market Portfolio in the CAPM framework.**

5. **CAPM replaces total volatility as the relevant risk measure with beta — exposure to systematic market risk.**

---

## 21. Before the Next Session

Students should be able to:

- Extend expected portfolio return from two assets to $N$ assets.
- Explain the structure of a covariance matrix.
- Distinguish variances from covariances.
- Explain why the number of covariance inputs grows rapidly with the number of assets.
- Interpret an Investment Opportunity Set with several risky assets.
- Distinguish the Global Minimum Variance Portfolio from the Tangency Portfolio.
- Explain why an individually unattractive asset can improve a diversified portfolio.
- Distinguish systematic and idiosyncratic risk.
- Explain why only part of total risk can be diversified away.
- Define beta conceptually.
- Interpret:

$$
\beta \gt 1, \qquad \beta = 1, \qquad \beta \lt 1
$$

- Recognize the CAPM equation:

$$
\boxed{
E(R_i) = R_f + \beta_i[E(R_M)-R_f]
}
$$

The key transition is:

$$
\boxed{
\text{Diversification} \longrightarrow \text{Systematic Risk} \longrightarrow \text{Beta} \longrightarrow \text{CAPM}
}
$$

The next session will continue directly from this point.

---

# Transcription
30 de octubre de 2026, 5:00p.m.
1 h 27 min 0 s
And recording the class.
Wait the man for two minutes.
I am getting a normal school club.
Is right.
But.
Okay.
Want me to open the window? Ohh, that's OK.
I'm gonna wait for one minute or more, yeah.
I have a funny story, Professor. Oh, please. Yesterday, I met up with, and back in high school.
behind an exchange student from Madrid.
We had an exchange student from Madrid, like my junior year of high school. And yesterday, me and one of my other friends who was in my high school, also studying abroad, we met up with him. And oh, maybe. No, he goes to Duke, my friend. Oh, but this kid, now he studies here at the engineering school. He is at the college also.
You got it? The engineering school. His friend came over to the table and we were talking to him and he goes to the business school and he said he knows you. Hey, Alex Rodriguez.
Oh, photos. Yeah. Alejandro photos. Yeah. Yeah. Let me guess. This is your group.
Then let me, yes, I have.
Sáez.
I am here in
So you go in Bachelor and selling grade, you should have, you should make a famous grade work.
like an informal report, a little bit more elaborated work than just a report. And I am his.
I am the director of this book.
Estoy Aggie on.
Red is a Y SHRAY is HRA.
But.
Sorry. Yeah, right. They're going to break. And is NYU.
And.
Yeah, yeah, yeah, awesome.
At least they no access the program.
Yes, Estepa.
Hey.
Hey, begin your S.F.
Boris Vidal.
Yesterday was Thursday. I was with him yesterday also in the April. Yeah. I thought you were going to also I think to lay students and for careful this Halloween.
Her from this Halloween in Madrid. You know what I'm talking about?
Nobody has told you anything.
OK, there is.
I mean, probably nothing will happen, but...
Nothing will happen, but there has been.
There have been things happening. First, there were in Paris.
Then they were in Barcelona, and these same people are saying...
At the very first.
When is eh of October?
They are saying that...
the first of October, there will be, there are in social media saying that because if it's going to be Halloween, people will dress, people will hide, and there will be race.
Right, right, yes, right, right. Yeah, people breaking things, falling, yeah, throwing, so it could be done new. Yes, take care. You think it will be dangerous here too, because I know people going to Barcelona.
I mean, we don't know. This is, this has appeared in media, from dress, from, yes, I'm not going to let my kids go out, this happen.
Even in the, yeah, because there is no.
I think nothing will happen, but I will take her. Why? Because it's Halloween.
Yes, once you hear these.
Okay, nice that you hear a lot of noise. Yes, a lot of noise. You can think that there's a party, you go there and you find policemen and yes, take this in total. Yes, I think Madrid is not dangerous.
But people are not happy.
People are not happy with government, people are not happy with, there is a lot of noise. There is a lot of confrontation. Yes?
In that similar to what had happened, please.
It.
OK, I'm gonna.
I'm gonna start with the class, and then also I think of the...
Other 100 people always.
Everyone.
Because I don't know how to...
But.
Thanks.
Oh.
So, tomorrow night could be the news.
I'm gonna share with you these two eggs.
Yeah.
Yeah.
Give me about that.
Yeah.
Let me just start with.
Something.
And we will use later, but I want to start with this thing right now: Manuel, you have an address? Yes, you got an address.
Wave.
Eight 1182833.
A.
And, and yes.
We have a Madrid, where Madrid.
A12.
One, three.
In 3 asymmetric values, yes?
One, two.
One, three.
And.
One, two, three.
Here, one N.
And...
Three then.
I'm here.
A...
And...
Hey.
Makes sense.
It.
How many?
How many numbers?
Do we have you inside?
How many numbers do we have inside?
In case this work.
Yeah, 60, in case it were four, we will have 60, that is 4 * 4, in case.
These work, right?
We will have N square. Makes sense.
Knop.
How many numbers?
Do we have in it?
And.
We see.
Saya Ana.
It.
Anne.
You read.
With the red and.
In one minus in one, no?
And square minus.
Yeah.
We will use that later, but I want you.
I want you to understand.
This simple idea.
Because if I explain you this later.
Would be a little bit more for you.
Why I want you to defend that, because then we will.
It was great.
This is gonna be.
The covariance matrix, the correlation matrix, yes?
The correlation.
Formats.
These are the correlation matrix, yes? The covariance matrix, these are variances, these are covariances, yes?
How much variances do we have?
And.
How much covariance do we have?
N square minus N.
And because it's symmetrical, I will divide this by two, and we will see.
Yeah.
Okay. Ah.
Let me.
Then, we would talk about Petragnani.
Review.
Hi, Marín.
Running.
And wait, faithful.
Hello, there.
I want to know.
That was closed already.
What?
Let me show my eyes what we have seen last class.
Not last class, class before last class, yes?
We have this, we have a portfolio that combines, yeah, and we got that.
Expected return on the portfolio.
If the return on the portfolio is what it what?
Thanks, Hector Redondo. What? Yes.
Plus, point to expect the return on store 2. Make sense?
But I have more.
No, if I have, if I will have more than just two.
The spectrum return of all will be the sun.
From I = 1 to N.
Yes.
Ohh.
Each weight.
Fine.
It's Redondo.
Yeah.
People.
This could be a big, big chorizo, but simple and easy chorizo, yes.
Now.
I am from the performer.
For 2 assets.
Point one squared variance one.
Plus weight 2 squared variance 2.
Plus 2 times weight one, weight 2, for variance between one and two.
What if we have?
A third asset.
43 square.
Variant 6, variant 3.
Plus.
Do that, wait.
Weight one, weight 3 for variance degree one and three.
Yeah.
Plus 2 times weight.
Two, way three, go variance between two and three, yes?
Are you following me?
Two and then three come here.
Diana.
True, please look at me.
I have yet to.
Variants.
What?
Onions, too.
Plus 2 times.
For one and two, make sense.
If I have three assets.
Balance one, balance two, balance 3.
Variance between one and two.
Thanks, go variant between one and two.
Two times covariance between one and three, and two times covariance between two and three.
Make sense?
I'm sorry.
No.
If I have.
In assets, yes.
Two.
I'm going to go here. I'm going to move from here.
Here, yes.
Variance on the portfolio.
It's gonna be equal to.
The sum from E equal to 1.
Glen, yes?
Wait, one.
Where by ends I?
Bless.
The bags.
Two.
Two models, one that will go from why it was to one.
When?
And another one that will be Gay from Gay equals.
Why?
Yes.
In case this is.
In case N.
Would be one.
It will be just one number, in case N.
N.
Will be two, it will be one and two.
And this would be one and two for the first one, and just two for the second one.
Make sense?
And this comes two times weight, Y, weight, Y, and covariance between I and Y. Make sense?
What do you mean?
Ohh.
Yeah.
Okay.
Eh.
What did we do?
First day of portfolio theory, we have two assets, yes.
And then we combine the two assets, the two, and there's going to go to this, yeah.
Are they?
The West are we?
This one, then, then we will forget about the risk.
For this?
But I'm gonna show you now.
Well, will happen if I have instead of two.
That, instead of get to.
Really, for example, yes.
But they don't need to be denied here for us.
I have, really?
Right. I have three. I can great.
They never talk to you, sir.
I'm going to show you this right now after this with Excel.
Battery.
Great, it works.
Yes, then I can take this portfolio, for example.
Combine this portfolio with this one, no?
For this and this.
Or this and this, yeah?
Let me take the first Excel file that I have shared with you.
Let me take first exercise 5.
The one that is called Portfolio Victoria, yes?
I'm opening it.
And tell me, I believe, Miguel.
Please let me.
Yes, then say.
Zero.
I'm sick. Yeah.
I put in here a zero and a zero, what do I have?
What do I have? Yes, what was it?
If I have that one asset, asset asleep.
All portfolios has a weight on asset state of wealth.
I have that one for you.
Let me put that one here, yeah?
Oh, you see that I have two assets. I have the investment opportunity. We said that combines asset one with asset two.
Knop.
Another, yeah.
What do I have here? One asset, a second, and a third. If I combine 3 asset, let me, what are these numbers?
These are random weights that sum one.
This is a Monte Carlo. Monte Carlo is going to Monte Carlo. What can you find in Monte Carlo?
A grips.
Throwing numbers from this for Montagut.
Here.
You have random weights, and then here you go.
A big chorito.
Play.
One rise to the square times variance SQRP of weight 1 square variance plus weight 2 square plus 2 times weight one weight 2 plus 2 times weight one weight 3. Make sense?
And then also...
We have the statement before.
Yeah.
You understand this?
This is a portfolio that combines 3 assets.
Topi.
In finance portfolio.
I mean, you manage properly here.
Here, we have the investment here, all these points, and we have that easier from here.
In case we would have.
At Ruiz, yes it.
We will combine with, we will with.
But we will combine the risk, I said we did.
But which problem will we look for?
The portfolio that has the highest, no, the highest.
Perhaps raising.
Make sense.
We will combine the risk-free with the highest ratio portfolio.
We will have it.
Would have been.
That was at 9.
Or would we have some somewhere?
A...
Who will have the happy personal life?
Or we will have the capital market line, we will see that.
Will be sex out?
Let us move to next text.
Second, second excel is called Portfolio Optimizer.
This looks complicated, but it's so simple.
What can you find here?
Please, all of you.
You tell me.
What do we have here?
Paris.
At least free us, yes.
Redondo, 4 percent standard deviation, zero.
Then you have a portfolio that combines one to five.
Are you for the first class?
And standard radiation of safety.
Bye, and see, all of you see that this is first stop.
Second one, the highest expected return and the lowest standard deviation.
Yeah.
Third and four, third and four has same return. Third and four has same return, but four has the highest risk.
Yeah, if we compare four, the four underneath.
Same risk and the team at highest we go, yes.
Imagine that you can only choose.
What I said, you would only choose what I said, which I said, will you choose, you choose?
If you would only choose one of it, which one will you choose?
With no discussion.
Four. Four.
What?
The.
I will choose it. I really remember. Ohh, ohh, yes, all right. The second one, yes.
Because it's the one that has less risk, less risky.
And has the highest.
Yeah.
For this?
Everybody.
What does this black line represent?
This black line represent.
The Frontier.
This black portfolio, this black portfolio represent the minimum values portfolio.
This is a big, yes?
And then...
This we portfolio.
Is the portfolio with highest start racing?
What are these numbers?
What are these numbers?
These numbers are, these numbers are the way.
These numbers are the weight of each one of these assets inside the time portfolio and inside the global minimum portfolio. Yes?
What do you mean?
If I didn't see, I mean.
This portfolio.
This is what I like.
And what does these numbers mean?
Then wait.
The weight of these assets inside this portfolio. This portfolio, the black one, combines all these stores.
same as the tangency portfolio. I will just look at the tangency portfolio. That is the most efficient portfolio.
Do you remember?
Do you remember the two phone separation hearing? Two phone separation hearing tells me that.
No matter how much assets there are in the world, we will always choose a combination between two holes.
The Ruiz P asset and the tangency problem.
And what does it show you?
This shows you that the tangency portfolio includes all the assets. It includes a weight on all the assets.
For example, words: acid or cold? First one, no?
Third one is the asset with less return and is risky. It is risky and has a low return.
And no matter how bad this is, it waits.
It weighs small, but it weights. Why? Because of diversification. Make sense?
Which one was the best?
Is it true, no?
But if you see as a true.
No matter how good it is, it just weighs going to be more than half. It's really good, but it needs the other assets. Yes, for example, if you compare asset 4,
With 3, with five.
Because I said, Paul is worse.
And the 5th and the third.
That no matter, this is worse at this big weight compared with the 3rd and the 5th. You understand what I'm saying?
Now.
I'm going to start this here correlation for zero and the variance is 1. This is the correlation matrix, yes?
I am going to start changing correlation between asset three and four. I'm going to start changing correlation between asset three and four. Asset three and four. I'm going to start changing correlation between asset three and four.
I said, we.
Wait.
Uncle, we uncle.
The other one, I mean.
You see what I'm doing? I am increasing the correlation, yes?
No way.
Look the ways, as these two will look the same in terms of correlation.
I would prefer to buy more asset free than asset four. Why? Because as they behave the same, I would not like to hold asset four at all.
So, the more I think this correlation, the higher this number become, and the lower this number become, yes?
Luke, please attention, yes.
Body with me.
Sixty, 70, 80, you see that this is becoming small, no?
Blue.
Two 100.
Who, what had happened?
What is it?
What happened?
That the correlation is perfect.
Then I will arbitrage.
And I will start sorting this.
In order to buy this.
And correlation is perfect. I can sort a lot of this in order to buy a lot of this. And if you see how much the tendency portfolio has moved.
The face, the face, ohh.
Ohh, sorry.
Hey.
Yeah.
Where are the Gutiérrez? Yes.
The effects of...
Are we practiced? Great. Yep.
For this, but everyone is really sure every one of that.
Yeah, surely means that once both assets are perfectly correlated.
Instead of buying a part on one and a part on the other one, if they behave the same and one is better than the other one,
You will start telling.
The worst one.
In order to buy the wood one.
Why? Because they behave the same.
And I will get same return to that risk, so I will make more money.
If you go there, one move the negative weight.
Yeah, well, that's...
This is as a pro, the one that is worse. I have teach to one. At the beginning, there were no co-violence.
At once, correlation is perfect.
And this one is better than this. It's better because it has less risk.
We say, the one the last time, yes, so let me short for that was a correlation.
The correlation is 100. Once correlation is perfect.
How close is it?
I mean, you have to ask.
One is better than the other one.
One pay you more results than the other one, and both behave the same way.
You will have a bad one.
In order to buy the wood one, OK, so it's four is like a one and a must.
Yes, 4 compared with three are same, we don't, but higher risk.
Yeah, OK. He just playing correlation.
Make sense?
Odio.
This is.
Today, have you understood these two exercises?
These 2 accepts.
These 2 exams were done in order to fully understand portfolio theory.
First day of class, first day with portfolio theory, I was worried about Anastasia.
Today, I am not too much worried regarding Anastasia and Alejandro.
Because this thing that I have just told you is in order to fully understand.
It's not just to start understanding. I care much more about having the eggs than having the, how do you call this little fruit that you put over the cake?
The material, yes. I know Ger, who knows about the terrible.
It, like, your Morales.
But you got this.
Now.
I'm gonna clean this.
And I will have this.
The.
Now, let me move through the slides.
Portfolio balance.
It is a portfolio under the Asian.
Yes, honey.
Two stops and having N securities, just having two securities and N security, yes.
His formula.
Easy one, in that one, yeah.
What are we going to do now?
We are going to consider.
We are gonna consider, we are gonna imagine that this.
Please represent.
And stops, we have a big wall, and we are gonna get set up.
I call this.
Bears.
We are gonna consider that.
But here, I can write this.
What?
Two and a.
I'm going to consider.
First.
at all correlation coefficient, all variances.
Oh, where is this?
RCU.
And I'm going to consider also.
Let me write this here.
Please.
Yes.
I'm going to consider that also that.
Or, please.
All weights are going to be set.
Always are gonna be the same.
I want you to understand.
Sorry.
Always from the first to the last.
There's not value for which.
Will be equal to?
How much we work material for weights?
Play some more weeks, I will get one.
Yeah.
If all weights are the same, how many weights do I have?
And wait, Knop.
No.
N times the weight is equal to what?
So, if all ways are the same.
Each way will work.
One over.
Make sense?
Yeah.
Yep.
Now, I'm gonna take this.
I'm considering.
That all these terms, all these terms, two weight one, weight 2 covariance, plus two weight one, weight 3 covariance, plus two weight one, weight 4 covariance, and so all these weights would be.
Zero, sorry, they wait now, the coherence. Yes, will be 0.
So, here I will have...
For variance on the portfolio, it's going to be equal to...
Ways are insane.
What are you saying? I can take out.
I can take out the weights from this matter.
I can say all these weights are the same.
One over N for one weight.
One over N square for all the weights, yes?
Time testumatory from I was one when or.
Yeah.
Right, right, yeah.
People, yeah.
I'm gonna take you from these two ends.
I'm gonna take one.
One of them.
I'm gonna put it here. What do I have there?
You have it?
You have an AIDS?
Of the balance.
So, let me say...
Balance on the portfolio is gonna be equal to.
B.
Abed.
Of all values.
Over and.
Makes sense.
Yeah.
For this?
You go, you understand what is on the level.
Understanding this is important for.
This to us, what does this mean? This means that...
Equal variance.
Covariance where zero.
Covariances.
Where, zero?
If you have a big, big, big.
Odio.
In terms of with a lot of assets.
Remind that M tense will fill you.
And then, the variance of the portfolio will then.
If then he comes.
What I want you to see, to understand, if covariance would be 0.
We can diversify away always.
We can get the portfolio with.
Zeros.
It were simple.
Yep.
Okay.
In Carabias, no, I mean, what do we have to say?
What we have to say in order to get this number is that this part is 0.
We have said that this is zero. If this would be 0, we can be by our way or risk, yeah.
What I'm gonna do?
I'm gonna see what happened with this bar.
I'm gonna work with this part, yes?
I'm going to see what happens with this part. This part we already know. Makes sense.
And then when you're not concerned.
Two times.
Weight one, weight two, this weight would be equal to 1 / n, yes, so again.
Two times over and over, yeah.
And what, what are we going to have here?
This is my journey.
Of all provinces, yes?
Are you with me?
What I would like to do?
Please, I need your attention. What I would like to do?
I would like to be buying this.
Over.
Divide this into the total number of covariates in Raquel.
No, but maybe the other.
Paul Matt.
Homats.
Do I have?
How much covariance do I have?
N square minus 10.
No.
So.
N squared times N.
So, I will be back.
Peace over.
And where?
Minus N, yes.
Anne.
Careful.
Careful, because.
This should be inside.
Because...
They don't.
Yeah, that's how I mean.
Any word, name said.
And I should multiply this.
Times N through minus L, yes?
Hi, I'm defying order to have the same.
Are you moving?
So, please.
You may use.
What is this?
What is this?
Is he dead?
I bet it's.
Of that.
Yeah.
Yes.
Ana.
What am I gonna do?
This.
Here.
Yes.
One over N square times.
And square lines like this.
What is this?
One over N square times N square minus N, yeah?
Please?
Call to.
N.
That's one third and that's and I understand what.
Over.
And, yeah.
This, with this, yeah.
And what?
I wrote N of minus 1 over N.
Yes.
Going to be equal to 1 - 1 / f.
Yeah.
So here, all right.
1 minus 1 over 10.
What do you want?
If I make N, N to infinity, one over N will then to zero, and one will then to one.
Of 1 - 1 / n, with N to one.
A good summary of this demonstration. This demonstration.
It's just to say one thing.
If N tends to infinity.
And then we meet you.
The variance from the portfolio will tend to date.
Average of the covariance.
Let me say this into other words.
No matter how big.
A portfolio is.
As there is covariance, as there is covariance.
You cannot diversify away or.
No matter how big a portfolio is.
You cannot diversify away all risk. Why? Because of violence.
The covariance would be zero, you can diversify away over risk, but as covariance.
R no zero. You cannot diversify away over it. Next.
Is there covariance?
Black.
Always.
What is going to happen the 13th, sorry, the 3rd of November?
Peter, what happened last Wednesday?
Everyone.
Happened for the war for allies.
But having in Spain that window.
Bring that.
Perfect all this thing, right?
No matter how well you are doing.
Brain accident, as well as far as you are in Spain, has.
Because now I am great, I am so strong.
There is one part, there is always also one part that is idiosyncratic, that belongs to you.
The more you study, the better the grade. The more effort you put in something, the better the performance will be.
But, no matter how you are, if the exam is really, really, really difficult.
Your brain will not be as good as if it were anything.
There is one part.
In your graphic that belongs to you.
And there is another part that is.
Make sense?
Have you understood this?
You are almost done with this.
Home of them.
The.
Lopez.
Thank you.
So, let me go back in order just to explain the slides. Yes, but we have already seen the slides.
Hey.
Hey.
Covariance is 0 somewhere, somewhere in covariance. We have an equal weighted portfolio of an independent source, 0 correlation.
***.
For relation is 0, we can say that the variance is 1 / m average values, yes?
Then.
If we have, if we would have...
Box.
None.
Independent, so dependent stuff with correlation one with each other.
as they are independent, is 0. So if they depend one on each other, in our case, for example,
Directions make your resting depend on mine through directions.
Dependent, careful because I don't want you to misunderstood.
Correlation with casual.
What does causality mean?
that what I do has an impact on what you do. I'm not talking about that. What I'm talking is that something from outside has impacted at the same time in your performance and my performance. We are not correlated because I push you.
We are correlated because something affects both of us at the same time.
This is not, this is not.
Yeah.
The idea, simple.
What happens to the two sources of portfolio variance and then to infinity?
This one will tend to 0, but this one will tend to N, as N goes to infinity.
there would be part of the risk of the portfolio that we will not be able to diversify away.
Betancourt.
How are we going to call this source of risk that cannot be diversified away in the bank?
Because it belongs to the system.
Yep.
Okay. Yeah. No matter how well, how big the portfolio, we would not be able to diversify away always.
So we will divide risk into two types. One part that cannot be diversified away, and we will call it systematic, non-diversificable, non-diversifiable risk, or also covariance. The risk.
that belongs to covariance. On the other hand, we will call the part of the risk that can be diversified away, we will call it the variance risk, non-systematic risk.
Somebody call you, I need to grab a Greek.
Or the Ruiz that belongs to your performance.
The Ruiz that you can control.
Or unique risk. The risk that has to do with your unique.
Yep.
So, at the end, next day we will continue working over this, right at the end.
The total risk in Estepa.
will be divided into two parts. One part of the wrist.
Will.
be diversify or cut or could be diversify away and another part of the risk, one part, the idiosyncratic, could be diversify away and the other part.
And the beepers that.
We need this is about. Yep.
So, if there is part of the risk that can be diversified, investors need to be compensated for holding.
Something you regret, this is the map, yes?
I don't care about your performance. I want to follow the market.
I want to go to get say, yeah.
Makes sense.
So, this is a graph. Yes, in order, I don't like this graph. I don't like this graph. Why? Because this graph, in this graph, it looks as if there were zero. Yes, let me shoot it. 34 will be one here.
Thank you.
Mm.
Yes, we might work on that.
This one, this one is.
But in Ruiz.
What is?
Sorry, let me hold this.
Yeah.
You have.
Here you go, the number of stocks. Yes, if I have a portfolio with one stock, with just one stock.
Do you have a portfolio with two stops?
You got to be diversified away, Mark, but the reason you got to be diversified.
Two months, you have the.
As more stops you got, as more stops you got.
You can diversify away more.
But diversification has one need.
No matter how big is the portfolio at the end, your education has one year, but because of the average of the providers.
Because of that, OK.
Make sense?
Yeah.
And one more.
One.
Because, at the end, one, right, N, yeah, N, this is it, this is it, the bigger you make M.
Beast, Barb.
Regarding the variance, this part regarding the variance tends to zero.
At this part, regarding the covariance, then...
To be average.
It feels like a Vidal.
I will be like...
One.
Oh, I mean, covariance will always be.
The Vega, the number of spoke.
The more of you will, he better to fly away.
This part, and then hope you will diversify this part, but diversify in a way the part of the covariance has.
Yeah.
Like, as you.
Diversify the covariance.
Is this?
Is that 1 - 1?
Yeah, I mean this becomes smaller, but this in one. So, this is the overall.
It was for what? Yeah, so the Carlos.
No, that is the one, no, no, it increases.
One, the higher, yes, you need one. So, this says this, the systematic test is 0 and the effect of this, it's not extreme.
The systematic. Yeah.
Yeah, and personally, I have never, I didn't, I didn't book this thing now.
So, thanks to your question, my idea is wider.
Yeah, thanks.
Yeah, the de.
Yeah, for example, in case...
And will be what?
And is what?
There is no systematic risk because there is no covariance, there won't be diversification.
In Chinese 2, you will need the help.
Yeah, yeah, thank you.
And that's.
Because of that, I don't like these restaurants, but whatever.
I begin.
Hey.
I don't know if this is happening in that class. All these buildings, the building that is next to work towards, but I don't think they are sitting now. What is the point of this?
That as a right, for example, SP500.
SP 500 has 500 stocks. If N would be 500, we would need 100 twenty-five 1000.
And as the number of parameters get bigger, is the idea, we are going to move into a new model. We are going to move into a new model where we will get rid of all the idiosyncratic part and we will just focus on the system.
We are moving to Cafe.
Yep.
We are moving into capital. What is the capital?
The gap is a simplification.
Of Markovic Model.
This is this is.
Isn't that quick? I'm gonna...
Tell you.
I'm gonna start with a spoiler, yes, and I will.
upon this.
Take the return portfolio.
This weight one, that is weight one, that's weight two.
Regards, yeah.
Violence.
On the portfolio is having a little bit more of it.
Yep.
What is this?
Ruiz, yes.
We are gonna go into a more soon, almost.
In this model, Ruiz will not be biased anymore.
I'm gonna make a business quarter. I want you to understand first, and then I will get to it.
In this new model, we will still be talking about risk, and we are going to call risk.
Vega.
I will tell you what is better now, not now, in 2 minutes. But how are we going to talk about better on the portfolio? Beta on the portfolio will be great. Beta on the portfolio will be weight one times beta plus weight 2 times.
Say that message, yep.
Life is going to be much most important in the real world, yeah.
Let me come here.
Tell me.
Please, I want to have this.
We were here.
We will, we were here.
We work, I work, work.
Here we've got aviation.
Here, we got deviation.
And here we go.
Take the Redondo, this.
In this world, we have one asset, another asset, the investment opportunity said, yes.
Arise.
Really? That's it? Yes.
In case we have all the assets in the world.
In case we have all the assets in the world.
Italian portfolio will be called Italian portfolio.
Will we go?
The Italian portfolio will be called the market portfolio. Yes? And we will have the values on the market and we are going to have here the return on the market. Are you following me?
Yes.
Where are all the assets? There is one asset here, there is another asset here, there is another asset here.
There is another asset here.
Yes, here we go.
They will work.
The market portfolio, the Italian C portfolio, and this line is called...
TML Capital Market Line, yes.
We are.
We are here.
And we are gonna move into.
There are like this.
We have a money in another world.
Where we are gonna still have here, we free.
And we don't own the Marín, yes?
I need new work.
Here, instead of having deviation, we are going to have beta.
Beta of the market is gonna be one.
Vega, the market is going to be one.
And.
If the cabin holds, if the cabin holds, all the assets should lay on the SML. What is the SML security market line? What is it? What is the security market line?
Are you the security model line?
Goodbye.
All lessons should rely on this.
Please, next day we will continue working on this. Next day we will continue working on Cafe. What is Cafe? A really simple equation.
Expect the return.
For example.
Yes.
Take the return on asset A.
Is equal to the Ruiz free rate.
Knop.
Beta 8 times return the market minus the we screw rate, yes?
Vega.
Is lower than what the price are regression with me?
Beta is a regression coefficient. Beta is a return on A and the return on the market over the variance on the return on the market. Yes, it's a regression coefficient. But what I want you to understand is.
It may times what?
is the return of the market. The return of the stock should be the return of the market. Yes. If beta is higher than one,
The beta is higher than one, the stock.
This this year than the market.
So, the Redondo should be higher.
Beta is lower than one.
The return should be lower than the market return, as the stock is.
Best risk need on the market. Make sense?
And.
Let me go through the slides quickly and next day we will complete, yes?
Capital market, sorry, capital asset pricing mode.
Capital asset price model.
Let me.
Oh, we have class after everyone.
Just 5 minutes or one minute, 2 minutes. I'm gonna go quick, yeah.
Belén.
What it is?
A woman, no?
Then.
Don't care.
And.
This is.
Here, I can have a younger woman, and having this, I can say a man.
This is, yeah, yeah, man, a woman, yeah, this is.
This, what I'm saying is...
This is before, yes, I'm going to simply find more life, and instead of talking about this.
And they're gonna say...
For this, a person.
In this model.
Here, you got this thing between man, woman, trans, and whatever.
In this model that I am simplifying, max more, there are no gender, there are no age, there are no...
This model is closer to reality.
The harder the assumptions, the stronger the assumptions we make, the harder the simplification we get, the farther we are from describing reality.
With this model, I can get closer to reality. I cannot just get a model who tells me exactly who is will. But I can make a model, you are from the States, 19, I can put you into a model, you go to a university.
In this model?
I am just saying.
Here, ohh, here there could be an exam adaptation.
Here, what are we looking? Yes, we looking further.
The more hours of study, the higher the result. But please, I was going to marry or I have been here. The more hours, the more study. Do you understand what I mean? But we are doing, we got them, is simplifying that. Thanks to simplifying that or like this.
are going to be more simple. But you should be aware that the more we simplify life, the farther we will be to reality.
It just a quick way in your summarize life: you are born, you have tires, you eat, and you die because of this is not simplification.
That maybe set hard certification, yes?
For me, what was more important to understand what was before than is the demonstration from today, because next day we will continue working over, you will understand, because it's so simple to understand.
So, we start from marketing and the idea is, yeah, the question is, how much return I expect? And the answer will be, you will get us return us the risk you are bearing. The more the risk,
The more the return make sense.
Then the assumptions, these are the assumptions that are harder than previous ones. Yes? No gender, same age, same nationality, same...
Everyone will be the same, same expectation, same ******.
And this is the capital.
Ana, this is the one you got on the left, yes?
Market portfolio, this is where we came from. This is the capital market line. This is what we have seen in previous classes. Yes? And we are moving from this work. We take the capital market line, we make a quick summary, and we get the
We get the from the from the CML, this is the capital market line, the equation of the capital market line, and we are going to move from here to...
Here, forget about, you can forget about this supply, you can forget about this supply, and we are going to arrive to this equation. What is this equation? The expected return is going to be equal to the risk free asset plus beta times market premium. That is the return on the market minus the risk free asset. Yes.
In beta, the covariance over the variance. What is beta? A variation coefficient. Next day we will talk about it.
Next day, we will talk about this, and here is there, here is there.
Security Market Lab. What is the security market like? The one that I have written on the right.
The security market line is captain itself. And then we will continue talking about this. The security market line, this is captain itself in better. If you are, I mean, if you can take a picture of this slide and make a tattoo.
Atu.
Just kidding. But this is at the end summary of today's class is this is life.
On one hand, you have the stability market line, and then you have the definition of beta. But in beta, the covariance over the values. Make sense?
Any with us?
Where?
Enjoy the weekend. I prefer.
I would prefer to say, enjoy the weekend on Wednesday than on Friday. That's like, so like.
Read it.
How is it?
