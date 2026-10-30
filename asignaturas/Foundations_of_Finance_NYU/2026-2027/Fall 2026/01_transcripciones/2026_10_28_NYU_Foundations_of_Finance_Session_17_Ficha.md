---
titulo: "Foundations of Finance – Session 17: Risk-Free Asset, Capital Allocation Line and Sharpe Ratio"  
fecha: 2026-10-28  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 17  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---

# Foundations of Finance – Session 17

## Risk-Free Asset, Capital Allocation Line and Sharpe Ratio

**Date:** October 28, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

## 1. Session Overview

Session 17 continued Portfolio Theory and introduced a major new element:

> **The risk-free asset.**

The previous session combined two risky assets and showed how correlation creates diversification benefits.

This session asked:

> **What happens if we combine a risky asset or risky portfolio with a risk-free asset?**

The main topics were:

- Review of two-asset portfolios.
    
- Portfolio return and variance.
    
- Diversification.
    
- Risk-free asset.
    
- Covariance with the risk-free asset.
    
- Combining a risky asset with the risk-free asset.
    
- Capital Allocation Line.
    
- Sharpe Ratio.
    
- Tangency Portfolio.
    
- Introduction to the Two-Fund Separation principle.
    
- Transition toward the Capital Market Line and CAPM.
    

The key idea is:

> **Once a risk-free asset exists, portfolio choice becomes a question of finding the risky portfolio with the best return per unit of risk and then combining it with the risk-free asset.**

---

## 2. Review: Portfolio Theory

Suppose we combine two risky assets $A$ and $B$.

Their weights satisfy:

$$
\boxed{
w_A+w_B=1
}
$$
Expected portfolio return is:

$$
\boxed{
E(R_P)=w_AE(R_A)+w_BE(R_B)
}
$$
Portfolio variance is:

$$
\boxed{
\sigma_P^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\text{Cov}(A,B)
}
$$
Using correlation:

$$
\text{Cov}(A,B)=\rho_{A,B}\sigma_A\sigma_B
$$
Therefore:

$$
\boxed{
\sigma_P^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\rho_{A,B}\sigma_A\sigma_B
}
$$
The critical difference remains:

> **Portfolio return is a weighted average. Portfolio risk is not, because covariance matters.**

---

## 3. Investment Opportunity Set

Changing the weights of two risky assets generates different combinations of:

$$
(\sigma_P,E(R_P))
$$
Plotting those combinations produces the:

$$
\boxed{
\text{Investment Opportunity Set}
}
$$
The set contains all portfolios that can be constructed from the available risky assets.

Within it we identified:

- the Minimum Variance Portfolio;
    
- inefficient portfolios;
    
- efficient portfolios;
    
- the Efficient Frontier.
    

---

## 4. Minimum Variance Portfolio and Efficient Frontier

The **Minimum Variance Portfolio (MVP)** is:

$$
\boxed{
\text{The portfolio with the lowest possible variance}
}
$$
Above the MVP lies the efficient part of the opportunity set.

The **Efficient Frontier** contains portfolios for which no alternative offers:

- more return for the same risk; or
    
- less risk for the same return.
    

Therefore rational investors should choose from the efficient portion of the set.

But which efficient portfolio should they choose?

That still depends on their attitude toward risk.

---

## 5. Introducing the Risk-Free Asset

The new element in Session 17 was the **risk-free asset**.

Conceptually, a risk-free asset provides a known return:

$$
\boxed{
R_f
}
$$
with:

$$
\boxed{
\sigma_f=0
}
$$
If its return is known with certainty, there is no dispersion of possible returns.

Therefore its variance is also zero:

$$
\boxed{
\sigma_f^2=0
}
$$
---

## 6. Covariance With the Risk-Free Asset

Suppose asset $A$ is risky and asset $f$ is risk-free.

Covariance measures how the deviations of two assets from their expected returns move together.

But the risk-free asset has no deviation from its expected return:

$$
R_f-E(R_f)=0
$$
Therefore:

$$
\boxed{
\text{Cov}(A,f)=0
}
$$
This dramatically simplifies the portfolio variance formula.

---

## 7. Combining One Risky Asset and the Risk-Free Asset

Let:

$$
w
$$
be the weight invested in the risky asset.

Then:

$$
1-w
$$
is invested in the risk-free asset.

Expected portfolio return is:

$$
E(R_P)=wE(R_A)+(1-w)R_f
$$
Rearranging:

$$
\boxed{
E(R_P) = R_f + w [E(R_A) - R_f]
}
$$

This formula has a simple interpretation.

The investor receives:

1. The risk-free return.
    
2. Plus a risk premium proportional to the amount invested in the risky asset.
    

---

## 8. Risk of the Portfolio

The general two-asset variance formula is:

$$
\sigma_P^2 = w^2\sigma_A^2 + (1-w)^2\sigma_f^2 + 2w(1-w)\text{Cov}(A,f)
$$
But:

$$
\sigma_f^2=0
$$
and:

$$
\text{Cov}(A,f)=0
$$
Therefore:

$$
\sigma_P^2=w^2\sigma_A^2
$$
and:

$$
\boxed{
\sigma_P=|w|\sigma_A
}
$$
For ordinary positive weights:

$$
\boxed{
\sigma_P=w\sigma_A
}
$$
This relationship is linear.

---

## 9. Why a Straight Line Appears

For the risky asset:

$$
(\sigma_A,E(R_A))
$$
For the risk-free asset:

$$
(0,R_f)
$$
Every portfolio combining them lies on a straight line between these two points.

If:

$$
w=0
$$
then:

$$
E(R_P)=R_f
$$
and:

$$
\sigma_P=0
$$
The investor holds only the risk-free asset.

If:

$$
w=1
$$
the investor holds only the risky asset.

If:

$$
0 \lt w \lt 1
$$
the investor holds both.

---

## 10. Borrowing and Leverage

The line does not necessarily stop at the risky asset.

If:

$$
w \gt 1
$$
then:

$$
1 - w \lt 0
$$
The investor is effectively borrowing at the risk-free rate and investing more than 100% of their wealth in the risky asset.

For example:

$$
w=1.2
$$
means:

- 120% invested in the risky asset.
    
- -20% invested in the risk-free asset.
    

The negative risk-free weight represents borrowing.

This produces:

- greater expected return;
    
- greater risk.
    

---

## 11. Capital Allocation Line

The line connecting the risk-free asset with a risky asset or risky portfolio is called the:

$$
\boxed{
\text{Capital Allocation Line (CAL)}
}
$$
It describes all combinations between:

- the risk-free asset;
    
- a particular risky portfolio.
    

Using:

$$
\sigma_P=w\sigma_A
$$
we can write:

$$
w=\frac{\sigma_P}{\sigma_A}
$$
Substituting into the expected-return equation:

$$
E(R_P) = R_f + \frac{E(R_A) - R_f}{\sigma_A} \sigma_P
$$

Therefore:

$$
\boxed{
E(R_P) = R_f + \left(\frac{E(R_A) - R_f}{\sigma_A}\right) \sigma_P
}
$$

This is the equation of a straight line.

---

## 12. Sharpe Ratio

The slope of the Capital Allocation Line is:

$$
\boxed{
\frac{E(R_A)-R_f}{\sigma_A}
}
$$
This is the:

$$
\boxed{
\text{Sharpe Ratio}
}
$$
Therefore:

$$
\boxed{
\text{Sharpe} =   
\frac{E(R)-R_f}{\sigma}
}
$$
The numerator is the **excess return** over the risk-free rate.

The denominator is the amount of risk taken.

So the Sharpe Ratio measures:

> **Expected excess return per unit of risk.**

---

## 13. Interpreting the Sharpe Ratio

The intuition is simple:

$$
\boxed{\text{Higher Sharpe Ratio} \implies \text{Better Risk-Return Tradeoff}}
$$

Investors want:

- more expected return;
    
- less risk.
    

Therefore, among different risky portfolios, the one with the highest Sharpe Ratio provides the steepest Capital Allocation Line.

Graphically:

$$
\boxed{
\text{Sharpe Ratio} = \text{Slope}
}
$$
This is one of the central results of the session.

---

## 14. From One Risky Asset to Many Risky Assets

Suppose instead of one risky asset we have an entire opportunity set of risky portfolios.

We can draw a Capital Allocation Line from the risk-free asset to any portfolio on the risky opportunity set.

Each risky portfolio produces a different slope.

The investor would prefer the line with the:

$$
\boxed{
\text{Highest Sharpe Ratio}
}
$$
This line touches the efficient frontier at one particular point.

That point is the:

$$
\boxed{
\text{Tangency Portfolio}
}
$$
---

## 15. Tangency Portfolio

The Tangency Portfolio is the risky portfolio that maximizes:

$$
\boxed{
\frac{E(R_P)-R_f}{\sigma_P}
}
$$
In other words:

$$
\boxed{\text{Tangency Portfolio} = \text{Maximum Sharpe Ratio Portfolio}}
$$

It is different from the Minimum Variance Portfolio.

### Minimum Variance Portfolio

Minimizes:

$$
\sigma_P
$$
### Tangency Portfolio

Maximizes:

$$
\frac{E(R_P)-R_f}{\sigma_P}
$$
These are different objectives and generally produce different portfolios.

---

## 16. Why the Tangency Portfolio Dominates

Suppose we connect the risk-free asset with several different risky portfolios.

Each one creates a different Capital Allocation Line.

The line through the Tangency Portfolio has the greatest slope.

Therefore, for any given level of risk, it offers the highest expected return.

Equivalently, for a given expected return, it requires the least risk.

Thus:

> **Once the risk-free asset is available, inefficient risky portfolios become even less attractive.**

The relevant risky portfolio becomes the Tangency Portfolio.

---

## 17. Two-Fund Separation

The session introduced one of the most important conclusions of Portfolio Theory:

$$
\boxed{
\text{Two-Fund Separation}
}
$$
Once the optimal risky portfolio has been identified, investors do not need to construct completely different risky portfolios according to their individual risk preferences.

Instead, everyone can combine two elements:

1. The risk-free asset.
    
2. The Tangency Portfolio.
    

Therefore:

$$
\boxed{\text{Optimal Portfolio} = \text{Risk-Free Asset} + \text{Tangency Portfolio}}
$$

What changes from one investor to another is simply the **weight assigned to each**.

---

## 18. Risk Preferences Still Matter

Two investors may agree completely on:

- expected returns;
    
- variances;
    
- covariances;
    
- the Tangency Portfolio.
    

But they can still choose different final portfolios.

A conservative investor may choose:

$$
w_{\text{Tangency}} \lt 1
$$
and hold part of their wealth in the risk-free asset.

A more aggressive investor may choose:

$$
w_{\text{Tangency}} = 1
$$
and invest fully in the Tangency Portfolio.

A still more aggressive investor may choose:

$$
w_{\text{Tangency}} \gt 1
$$
borrowing at the risk-free rate to leverage their risky investment.

Thus investor preferences determine:

> **How far along the line the investor chooses to move.**

---

## 19. From the CAL to the Capital Market Line

The class briefly anticipated the next step.

With one particular risky portfolio, the line is called the:

$$
\boxed{
\text{Capital Allocation Line}
}
$$
Once Portfolio Theory is extended to the optimal market portfolio, the corresponding relationship becomes the:

$$
\boxed{
\text{Capital Market Line}
}
$$
This will connect Portfolio Theory with the CAPM framework.

The important point for now is not to confuse the terminology.

The underlying economic logic remains the same:

> **Combine a risk-free asset with the best available risky portfolio.**

---

## 20. From Risk to the Discount Rate

This entire block connects back to the question introduced at the beginning of the second half of the course:

> **Where does the discount rate come from?**

The first half of the course used:

$$
PV=\frac{FV}{(1+r)^t}
$$
and treated $r$ largely as given.

Portfolio Theory now begins to explain $r$.

The path is:

$$
\text{Risk} \longrightarrow \text{Expected  Return} \longrightarrow \text{Portfolio  Theory} \longrightarrow \text{Sharpe  Ratio} \longrightarrow \text{Tangency  Portfolio} \longrightarrow \text{CAPM} \longrightarrow \text{Required  Return}
$$
Ultimately:

$$
\boxed{
More\ Relevant\ Risk \Rightarrow Higher\ Required\ Return
}
$$
---

## 21. Five Ideas to Remember

1. **A risk-free asset has zero variance and zero covariance with a risky asset.**
    

$$
\sigma_f^2=0
$$
$$
\text{Cov}(A,f)=0
$$
2. **Combining a risky asset with the risk-free asset generates a straight line in risk-return space.**
    
3. **The slope of that line is the Sharpe Ratio.**
    

$$
\text{Sharpe} =   
\frac{E(R)-R_f}{\sigma}
$$
4. **The Tangency Portfolio is the risky portfolio with the maximum Sharpe Ratio.**
    
5. **Under Two-Fund Separation, investors can choose between only two building blocks: the risk-free asset and the Tangency Portfolio.**
    

---

## 22. Before the Next Session

Students should be able to:

- Explain why the risk-free asset has zero variance.
    
- Explain why its covariance with a risky asset is zero.
    
- Calculate expected return for a portfolio containing a risky and a risk-free asset.
    
- Calculate portfolio standard deviation in that case.
    
- Explain why the resulting relationship is linear.
    
- Define the Capital Allocation Line.
    
- Calculate and interpret the Sharpe Ratio.
    
- Explain why a higher Sharpe Ratio is preferable.
    
- Distinguish the Minimum Variance Portfolio from the Tangency Portfolio.
    
- Explain the intuition behind Two-Fund Separation.
    

The key formulas are:

$$
\boxed{
E(R_P) = R_f + w [E(R_A) - R_f]
}
$$

$$
\boxed{
\sigma_P=w\sigma_A
}
$$
and:

$$
\boxed{
\text{Sharpe} =   
\frac{E(R_A)-R_f}{\sigma_A}
}
$$
The most important conceptual transition is:

$$
\boxed{
\text{Many  Risky  Assets} \longrightarrow \text{Tangency  Portfolio} \longrightarrow \text{Combine  With  Risk text{-}Free  Asset}
}
$$
This is the bridge from **Portfolio Theory** toward **CAPM**.

---

# Transcription
28 de octubre de 2026, 5:06p.m.
1 h 10 min 35 s
Okay.  
I am recording. Let me see. Oh.  
Because I have changed, I have, I am recording.  
All right, the first thing I have said, very important disaster. We are aware that.  
When you sense.  
Yes, great, those of you that.  
Great.  
Hey.  
great, everyone from no matter which culture, which religion, everyone great.  
Or, did you know me?  
Think in a good way about people that are suffering, yeah.  
Think about them. Think about them.  
Windows, OK.  
This, what is the laptop? Ohh, there is the laptop. Perfect, then.  
I have to talk also with Benito.  
Daisy is going to be.  
The story in a film, but I would say in Spanish, protagonista. Oh, I don't want you to sit there.  
Hey.  
May.  
Yeah, it's starring, I think.  
No protagonist.  
No, sorry for that, but no, because she missed last class and last class was so important in order to understand this one.  
Next, this Friday, we will continue giving that apart from one second.  
You ask me.  
Consume my rice, it's course.  
Finance has to do with risk, has to do with money in an unpredictable future.  
Of you, I would make any sense.  
Personally.  
I will.  
Personally, I will.  
I will use if you tell me, Luis, summarize.  
The course with...  
Number.  
I'm nervous, I don't know if I am recording properly.  
Want to record, no matter what you have, yeah, OK, now I'm using the other option.  
Did you tell me to summarize this course?  
With just one mathematical thing.  
Please, to marry with your walking.  
I would say, great.  
Right, yeah.  
Return Greece. Today, we will continue talking about trade when calculating interest in value of something yet.  
Once say this, when is gonna happen?  
Mm.  
One hour and 15 minutes.  
Yeah.  
OK.  
What will worse say?  
What we can you say?  
What we will talk about?  
We said it was.  
Yeah, but you would say.  
You think so? Very clear.  
We could know now, because the meeting start. Yes, sir. We don't know, Bill.  
To be A, but this weekend we have changed here.  
Any worse, probably. I'm gonna go to Polly Market.  
I'm gonna go to Poly Market.  
Poly, you know all of you know polymarket. We have talked about polymarket, no? It's not the first time I use polymarket. And I am nervous here.  
How would they know?  
Each other?  
Almost for sure.  
You want change, yep.  
I'm preparing a piece. I'm preparing a post for LinkedIn. LinkedIn. I'm an. I'm an with AI. I am an with LinkedIn. In Spanish we say LinkedIn.  
Yeah, it's one of the most difficult things once you are used to say something in your own language, for example, Angelina.  
Olivia.  
Anastasia.  
Right.  
William.  
And a man.  
I'm pronouncing your names in Spanish.  
There are like Antonio, yeah.  
Okay.  
So, what from so what words will say?  
You will give it, and I am preparing.  
I don't like it yet this way.  
Do you get the message?  
Do you like it?  
Okay.  
What's happening?  
OK, great.  
He's like you. Oh, we're both being. Yeah. You have some innocence?  
Yes, one second.  
Estabian pero me gustaria que enfima de la gran losa. Pusieras algunas palabras. Pusieras.  
Deficit.  
En concreto quiro que ponga se logo de Claudia.  
Sorry for that. Do you understand what I have asked?  
I have asked, I want you to put.  
Over.  
I want you to put over the rock.  
AI.  
What is gonna happen after the 3rd of November?  
We don't know; I don't have a crystal board.  
But...  
What can we?  
What can I see? What I'm gonna say?  
It's an opinion, yes? It's an opinion, it's a personal opinion.  
And I'm not talking about politics.  
But politics are important.  
My opinion is that before the 3rd of November, nobody wants.  
Especially drunk, bad news.  
So, before the 3rd of November, they are.  
They are forcing.  
Had things not to happen.  
Forcing and forcing bad things have to happen. I'm talking about plans.  
There is a big issue now with air.  
If you read piece of news, Nvidia is incredible big. I have read this. Nvidia is financing meta, and meta is one of their buy or the most principal buyers from Nvidia.  
I don't care about met, I don't care about the media, I care about systematic risk. Yeah, probably there will be a correction. I don't know if the correction will be systematic.  
Bad things are about to happen regarding time. Make sense?  
No, I don't like.  
You like it?  
Better.  
Later.  
That one, and I promise not to contain.  
No me gusta, quiero que se a must be in una gran roca, eating from que represento una cafa, medentro de la cafa que sobres alganto assistas palabras. Alfina les una cafa getting worse, FEMA e que paraca que se levacaya.  
La Pieta Fundamental del Post.  
And OK.  
Sorry, you understand what I'm saying? It is important.  
Absolutely.  
Interest rates are important for our class. Yes, and private interest rate. Let me go back.  
Here you can see important things that are elections in Israel. Do you remember last Monday that I told you about Brazil?  
Where are the last news from?  
Went to the US. This had happened, I think, this night or night before.  
What does Bolsonaro going to the US mean? He was close to win, let's see.  
Careful with Brazil.  
This does not mean I express it going out for a country.  
Means not peace.  
You understand what I mean?  
But are we living East? So, Israel, there are elections in Israel, yes?  
And Netanyahu, whoa.  
This is just there. It changed. Netanyahu was not there, whatever. There are elections, the midterm elections.  
Going on, it is going gold.  
But look regarding worse, worse appointment.  
What will Kevin Wars say?  
Today, price more than 30 times, inflation more than 20 times, AI more than three times, super intelligence, good day, buenas tardes.  
Nomina supervision.  
Yeah, what I want to show you with this, that the fair meeting is important.  
Is more than important for our cost, yeah?  
It.  
Let us start with today's class.  
This here on 17, and then we open.  
Exit.  
Excel is going there.  
And also, let me share with you, listen.  
Please say.  
But, and when you...  
Finance.  
My computer is work is on the work, yep.  
Let me.  
Let me start with today's class. I'm going to share one second computer, but I don't need computer for this.  
What I have said regarding getting worse, but...  
Are you nice even for asking?  
Important.  
TP Portal.  
Absolutely. It has to do with finance. Absolutely. But also regarding finance, it's important.  
I need to.  
I want to share with you today's class.  
Or, I'm gonna say it later, I'm gonna close, ohh, I'm gonna close it.  
Will we start with this class?  
In Knop.  
It's not, but let me share it.  
Is not because I have not uploaded.  
But please, Amanda.  
Once you look something in great space and you can find it.  
There.  
Writing, what's up?  
Write the message in.  
And a...  
The point is that my this computer has only.  
Eight, but I want to share with you.  
Here it is, and where you finance.  
Is are you?  
Here, I got the glass.  
Finance.  
Document.  
16, 17, no?  
Here, you've got the glass and then me.  
close everything.  
Open this, and...  
And before, let me, everything is on level.  
What do we let say?  
I'm in a different way, what we need.  
The same week.  
In this ***.  
Thanks.  
But is risk risk is volatility.  
Please keep the deviation.  
How far the expected return from the stock is from the average?  
And.  
But we grow here.  
But we grow in these axis, Vega.  
Base and window, yeah.  
We have.  
And we there, you have one stop.  
And we call it U.S.  
Whatever is going is the Ruiz, yeah.  
You mean this?  
We know yet, and we call this, so hey.  
Hey.  
Aviation.  
So, 8.  
And we turn on the A, yeah.  
Then.  
We have the same one, so...  
Good morning.  
B.  
Don't be good.  
All of you are only.  
We have two stops. It's a stop we also we know, yes, we turn on the issue also we know.  
Provariance between stop A&B.  
Ovalion between A and B.  
What are we going to do with these systems? What if we...  
So, what did we wear? We need to stop.  
Yeah.  
Okay.  
Yes, combine it. It talks into four points. One way to another way. Make sense?  
For example.  
Wait on stop A was.  
Thirty percent. If weight on the portfolio from on stock A is 30%, weight B is.  
Seventy percent, I have yes to choose books.  
Part of the portfolio will be of A, and part of the portfolio will be of B.  
And having this, but we did this calculate, calculate, we calculate.  
The return on the portfolio giving wage, weight A times return A plus weight B times return B this.  
So, in terms of return, imagine I'm gonna look a portfolio that is 50 and 50.  
50% or 50%? Finish, 50% or 50%?  
And where will we be? Expect everything on gas in the house, yes?  
Is it the Redondo or what?  
We have.  
We are black.  
Is for we have to get that the return is there. Make sense?  
A spoiler, Anastasia, I need America.  
Because I am going to do a spoiler for those that work with that.  
Imagine that both stokes were perfect or related.  
We both were perfect or related.  
Then.  
Ruiz of the portfolio.  
Be perfect correlated will be wave B, sorry, wave A.  
Thanks, deviation A plus weight B times deviation B. Yes, if both strokes were perfectly considering that the way it will be.  
Fifty percent.  
Aviation of the property will be, yes, we have also.  
Yeah, I'm...  
All possible, this is percent, this is 50 of B, 100 of B, you understand what I mean?  
If both stocks were perfect or related.  
The investment opportunities will lay on a line.  
Let me repeat the correlation is perfect.  
All clothes will lie on a lie. Make sense?  
Correlation. Normally there is correlation lower than one. So what we see is that because you do correlation.  
Take the return the portfolio.  
What is the number of mistakes you can make in life?  
10 mistake. Yeah. Number of mistakes you can make mistake. 10. 10. Will. Number of mistakes. 20. No, no. Yes. No. What I mean is 10 and 10.  
Both together.  
If they were perfect correlated, if they were.  
Same, keep thinking number of mistakes there will be, they will do it same, will be well.  
But, because they are people.  
Probably, there are times that you are close to make a mistake, and Anastasia will tell you everything.  
This is a mistake. There will be times that you will not see what he's doing back. He will not see what you are doing back, but...  
If you are alone.  
All has 10, and then you together probably will go.  
I don't know, 15 or even 6 or 7.  
Yeah, yeah, I mean, it's magic. I mean, you're speaking, definitely love it.  
You understand the point?  
Two people together works better, and each one in a separated way.  
You see the problem in case both of you are the same.  
Of people are the same unity, diversification, no, make sense.  
Okay, maths. So this will work this way just in case the relation is perfect. Yep.  
How we how did we calculate variance on the portfolio? Then the radiation is the square root. How did we calculate variance on the portfolio by doing weight A right to the second, variance on asset A plus weight B right to the second.  
Balance, what must it be, yes?  
Plus 2 times.  
Waiting day.  
Weight B, covariance between A&B.  
Yes.  
I wrote that formula as they.  
Hold on, 79.  
I don't care writing all the times, but if I write a formula more than seven times in class, it's because...  
It's important, because I want you to get familiarized with it, yes?  
Excellence, providence, we saw also that providence.  
Has to do with correlation.  
We knew that correlation coefficient between A&B is covariance over variation A times variation B, yes?  
Ana.  
We can calculate from here, we can say that covariance between A&B is equal to correlation coefficient between A&B times variation A times variation B. Excellence.  
Good.  
Okay.  
No.  
What did we do next?  
Updates.  
This is those.  
And we calculate.  
We calculate.  
I miss this, yeah.  
Right, we calculate.  
The investment opportunity set. What is the investment opportunity set? I have to very calculate what investment opportunity. I probably.  
What do you think? The collection. All possible. The line where lines all possible.  
And we did it with excel. I strongly recommend you, all of you, to repeat this excel for big problem set three. You should repeat one excel like this, but just let me draw something like this.  
Can I reach this point, Anastasia?  
Yes, by sorting, by sorting.  
The less risky as it.  
One of the things I ask, but they is.  
But be prepared, so A or B regarding A&B.  
I, I don't know, it's on my wish profile.  
But what do you prefer? Book A.  
Or peaceful.  
We would always prefer portfolio, because we say.  
Risk pays more return.  
Who went also his portfolio? His portfolio is called the M.P.P. Transport in Diane's portfolio.  
And.  
Hey, here.  
A portfolio, let me call this portfolio B.  
the portfolio.  
Under reasonable, make sense.  
It.  
Okay, what are we going to do today?  
They we we introduce.  
Babe, this big ***.  
If you have understood this.  
Today's class will go smoothly.  
But I know that you have not this properly yet, so please play. I don't have any problems in the feeling.  
And this class will help you understanding that better, and next day we will continue understanding all these things, and we do exercises.  
For one set three, when is when you should deliver for one set three?  
Two minutes, but please turn on.  
Because.  
Trying to solve problems and tree will help you understand this. Yes, today's class is so simple.  
Once you have this done.  
Yep.  
OK, let me change to for another caller.  
What is?  
Please have Ruiz.  
What is going to be the return? Want some water? OK. Thank you.  
What is the risk? What is the return of the risk?  
Correct. What will be the return of the Ruiz? What is now the return on? For example, I prefer a year.  
The return will be 3% - no, you wait the match, you will get that 3%.  
No.  
You are going to get a 3% for soup.  
What is going to be the ball at the?  
Are we?  
Hey, let me.  
Yes, this man, how did you call?  
How do you calculate the expected return?  
How do you calculate the expected return by doing the sum of all expected returns, yes?  
Over the number of the return to quote, make sense.  
Yep.  
Now, how do you calculate the variance?  
I agree, the sum of all.  
Check the returns.  
Thanks.  
Yeah, it is, yes.  
Right, the square.  
Over.  
And I need one, because you have.  
You have one. This should be whatever. OK.  
Go ahead.  
Right.  
The point is, you have prices.  
You have to face it.  
Calculating, yeah, you need two prices in order to calculate one.  
So if you have N prices, you will have N minus 1 because by this A, you have N.  
You got the FMRT.  
Alright.  
For this?  
You understand the variance?  
This is how you calculate the values, no?  
If all expected returns, if all expected returns is the same, are the same.  
This will be 0 for all the numbers. Make sense?  
Yep, correct.  
Bikes.  
I would like to be a student.  
Because I want to be in a class and, at the same time, running low.  
It's a person of.  
Yes.  
If, if for any, you are allowed to do it.  
My class, you know what I'm talking about with?  
Play to, I, I don't want to be no, no, very good. Now, what I mean is that I would like to be a student.  
Because, if you are a student...  
You should be listening, but at the same time you can press enter, or you can just write the prompt and wait till things are done.  
I have connected 3 weeks ago. I have connected my e-mail with all my system.  
I don't see Thunderbird or I don't see Outlook anymore. I just ask anti-gravity, take it. And while anti-gravity is working, I do push-ups, I do exercise, I talk with my kids, I...  
Well, sorry for this, but hey.  
Brick. How do I?  
You are, all of you, you are allowed to do it.  
Miguel, one say this, I said, no, please, you cannot, no, this is, I want.  
How do you calculate covariance?  
How do you calculate covariance? There is no need to look at me. There is no need to. What I want is...  
Nobody is between two assets, yes?  
Ohh.  
I said, A, Y, minus. Each one of. I said, A, yes, minus, but the other is, yeah. Thanks.  
BY minus.  
B, yeah, yeah.  
Over, and do you agree with me?  
What I want you to see, that if one of the assets is the risk-free asset,  
What is going to be the covariance between one asset and the risk-free asset?  
Zero. Zero.  
I said.  
If this asset, yes, if you are calculating the variance, is the risk-free asset, this would be 0, yes? And if asset B, for example,  
Is the risky asset? This would be 0, so the covariance for all the terms is 0.  
Make sense?  
What are we gonna do today?  
We are gonna combine.  
Are we experiencing?  
I don't want to.  
What is it? First of all, let me write here. The reach the asset is lower than. Where should I write the reach the asset?  
Riskies.  
Ana.  
Ana.  
Let me start with the Redondo, yes?  
Let me say that.  
SLP is going to be there, please.  
Where you at?  
Yes?  
And.  
Let me say, also, that wait on a selfie.  
Is one.  
Manuel, wait, when I said hey, yeah.  
No.  
Let me take this, the return on the portfolio.  
The return on the portfolio is...  
The return on the portfolio is...  
Wait, thanks. Return on it. Yep.  
Plus 1 minus the weight times return.  
Oh, there is PS it.  
Yeah.  
No.  
Return.  
On the portfolio.  
Gonna be equal to.  
One time is going to be equal to the Ruiz P asset. Yes.  
Plus.  
Less.  
Less.  
Return or name minus the risk free.  
times the weight. Make sense?  
People.  
I'm not gonna rest.  
I.  
This is the return, the return on the portfolio.  
Peace.  
Return on asset A times the weight on asset A.  
Bless.  
One minus the weight, and I said eight times the return on the risk, I said.  
And what I have done here is...  
I have with it, with free asset.  
Yes.  
Plus.  
The way times we donate my nutrition. What I have done is this.  
Madrid that.  
Hey.  
This has a, yes.  
Please be.  
That we don't need.  
The return on the portfolio, and that this is a return on the portfolio.  
When do we? Please speak.  
Last.  
The way it is, you know, the way it is 100 is the way it is.  
Is this first time the way?  
Yeah.  
Ohh.  
That's the word, please. This is not, I know that this is not the most amazing thing in life, but...  
Makes sense, yeah.  
What I'm doing is...  
I am combining.  
I'm creating a portfolio that combines what I said.  
In the wish.  
W. is available here, no? W. is the way or not?  
They no restrict, so if the weight is 100%, the return of my asset will be.  
Imagine the wave, this wave is what?  
Free free cancel with free free and I will have we don't make. This way be 0 free free. And in the meanwhile, make sense.  
What do we need?  
So, like, normally we'll just be calculating the average.  
Not the problem.  
I mean, let me continue and you will see why.  
Because it's a very CC, but again, today you will understand me.  
And next day, this Friday, we will do it for you, unless you work with it.  
Are you with me?  
Let's move.  
To give an answer.  
Short.  
Thank you. What is there?  
I have said that, as it be.  
Is that reach for us?  
Do I have your attention, all of you?  
All of you?  
Variance on the Ruiz US and this.  
Yeah.  
Covariance between asset A and the which the asset is.  
So.  
Variance on the portfolio is equal to...  
Want to move here?  
variance on the portfolio is equal to...  
Weight A, right? In the square variance, so that is A, yes?  
And nothing more. What can I do?  
Careful, because this could be negative; this weight could be negative, so...  
Absolutely.  
can get rid of the absolute value. Now I want you to see and understand. Make sense?  
How summarizing.  
What do I have?  
I'm going to change into blue because I think that you can see better with blue.  
Return on the portfolio is the risk-free plus.  
We turn on a minus the restrict times the weight, yes.  
Ambarias.  
Of the portfolio is.  
Weigh 8 times, then each and another day makes sense.  
Yep.  
No.  
Yeah.  
Now, what do I have? I have a...  
Greece, P. Ask, yes.  
And I have...  
That's it.  
Return on me.  
Sure, I have.  
Deviation A and return on A Yep.  
I want all of you to see.  
Feel and understand this, come on.  
I want all of you to see, feel, and understand this.  
If wait.  
He wait on us at 8.  
Is 101, yes?  
All of you see that I'm here.  
The way this zero, all of you see that I'm here, Olivia.  
Now, if weight is 50%...  
If weight is 50%, I will be half here.  
And I will be half here, isn't it?  
If weight is twenty-five percent, I will be twenty-five percent from here.  
and 25% from here.  
Thirty-five.  
Thirty-five.  
What I want you to see.  
But this is a straight line.  
It's a lie.  
And then...  
Could I have negative weight? Could I have a negative weight from the risk-free asset? Sorry, from asset A? Could I show asset A? Yes.  
Do you remember that I told you that this is the absolute value of weight? Would weight be negative? Weight would be negative.  
And what do, what do, what do we have with this? Make sense?  
Are you with me?  
Two more things.  
What is the slope?  
What is the slow?  
How do you calculate this load of a car?  
Hey.  
This side, over this side.  
The snow.  
The snow, yes.  
Is going to be beside?  
Over, this side, no.  
All of you are with me?  
Let me call this instead of slope, let me call it...  
Sharp.  
Race.  
February.  
Play suckers.  
It is sharp ratio just for risk.  
What is Raquel?  
But I understand, yeah.  
But wait, because I prefer first to explain, yeah, harsh phrases somewhere.  
You have some crazy.  
Yeah, yeah.  
Yeah, let's keep that. Start raising things.  
But I want you to understand, all of you are with me.  
What do I have here?  
One-stop.  
One stop, and the rest, yes? Have you understood that?  
You have understood that you are done with this. Yes. And then we go here.  
Yeah, it got one stop.  
Can you go to a second store?  
This portfolio, for example.  
The portfolio that has part of the piece and part of that.  
How many portfolios there are there?  
No.  
Will.  
Do you like this portfolio, for example? I know you won't prepare this one, yes?  
Let me start with this one. Do you like this one?  
Yes, say yes, I like it from me, from me, but I mean this one in particular.  
Because I want to do great, I'm taking this, yes?  
I'm gonna take, I want you to see, I need to take one.  
That is not in the from here. And especially all the portfolio that lay over the MPP lays only same from here.  
Yeah.  
Okay.  
Ruiz me?  
And this problem.  
I'm going to grade the investment of our community sector combines.  
with this one. Sorry. Every screen will be proper. Are you following me?  
Yeah.  
You understand what I'm trying to do?  
This is one, and then...  
Okay.  
You can tell another one. Yes.  
I'm gonna be.  
Get people on this one. I could get another line. Are you following me?  
Now, I'm going to compare. It's like with this one.  
Which one would you prefer?  
For you, all this, you will prefer this than this, and you will prefer this than this, yeah?  
Are you following me?  
What are you looking for? I'm looking forward there.  
Tanjil.  
I'm looking for Italian purpose.  
and combining the risk free with the planning portfolio.  
Looking for the tangent portfolio, combined with every speech. So, what are you looking for?  
What I'm looking for.  
All portfolios.  
Among all portfolios.  
I would prefer.  
This, this, this.  
Now, my money, Luis, I am looking for...  
This exact amount of risk, yes? I will go up. You can choose this, this, this, this. You can choose this one that applies on the easier frontier. But you will get me, Ruiz. I will get this.  
So...  
I have two portfolios, three. I have two stocks.  
I have two stuff at the end, I don't care about having two stuff.  
I would look for one portfolio.  
That maximize, I will look for the portfolio that will maximize that ratio, and at the end.  
I won't have two steps; I won't have.  
The risk-free asset combined with the maximum charge ratio profile.  
This is a spoiler from next class, and I don't want to make a big spoiler, but I'm gonna get it.  
They say what we see is, yes, make that instead of. I have two and I can get independent opportunities, yes. I have a third, I have a third asset, yes.  
They can come back with this, with this, with this, with this.  
Please, please, tell us what happened.  
I'm ready here. I have just two. I can get this.  
I have up there, I said.  
I can compare, I can combine it with an opportunity. Here, I got one portfolio, other one. I can combine this with B1, B1, the other is what I'm doing.  
I have a four asset here, yes, we will see next later combining several assets.  
Give you a cloud of points, and you will always have investment opportunities.  
And the feature from here, yes, by the feature from here is called from here and not lying, but normally you won't have yet to stop, we have more than two.  
The combination of all of those cool stores, etc.  
What I mean is that you have a wish.  
I don't know how much as it is.  
I look for the highest heart rate you, and I will wait a lot.  
Have you understood this?  
Then let me start with two days.  
Knop.  
Have.  
I'm going to start with today. What are we going to do today? Portfolio Theory 2.  
What are we going to do today? The many risks, the portfolio optimizers, the portfolio optimizer, we are going to leave portfolio optimizer to next day.  
I don't want to talk today about portfolio optimizer, because I think it would be better.  
Talking about this next day, yes, but today we will talk about the risk-free asset.  
We will see that the minimum, sorry, we will see that when talking about the risk free asset, we will see that the variant.  
And the covariance between one asset, which will be.  
Variance of the will be, yeah, and the covariance between an asset and the will be.  
Zero.  
N.  
We will a risky and a risk-free asset. We will combine a risky asset with a risky asset. How are we going to call the line that we will discover? We will call it capital allocation line. I don't want to talk about capital allocation line because next day we will see.  
When talking about a lot, a lot, a lot of assets, instead of being talking about the capital allocation line, we will talk about the capital market line.  
And then we will see next day when talking about capping.  
We will see the security market lines, so there will be lots of lots of lines, and I don't want you to be to become crazy because of the number of lines that are.  
Then we will see two risky assets and the risk-free asset. We will look for the tangency portfolio, portfolio that has the maximum sharp ratio. And then I will introduce you the two phone separation. What is the two phone separation? For me, this is the most important.  
Idea.  
of the class in terms of if you understand that idea, fully understand you have you are done with this one.  
The true home separation tells you, no matter how many assets you have in the world, at the end you can.  
In my life, like...  
in a portfolio that combines 2 assets, the risky asset and the maximum charge ratio portfolio.  
Of non risk of of risk, yes.  
Makes sense.  
Okay, let's start with this. What we are going to do.  
A partial review of last class in Portland, Angelina, also Angelina, Anastasia.  
Or, I think we never done it last yet.  
What is the efficient, the investment opportunity, the combination of all possible properties?  
Then, efficient portfolio, a portfolio that lies above, yes?  
Efficient Frontier.  
all portfolios combined with the minimum variance portfolio and an optimal portfolio.  
depending on your profile, the one that you will like.  
Well, yeah, we have work with two, and we will work with more lunch.  
Regarding the properties of our.  
Vector return is the expected return variance and covariance is 0.  
What does this mean?  
Ohh, this is, I mean, this is just to say that one thing is theory, and in real life, which we have it could be considered, which we have it, but we should wait in the tree, but forget about these graphs.  
Forget about more and we be, this is risky.  
These are stocks.  
And this is the resource, whatever, forget all, yep.  
This one.  
Absolutely important.  
I'm combining the Ruiz, the acid.  
And combining the Ruiz P asset with an asset, yes, and I get.  
This, this premium and whatever, all of you are with me.  
Please review today's class. Try to do today's class by yourself. Try to work in the equation, try to get here, because I think that now you understand me.  
But probably you will forget on Fridays, yeah.  
Now, consider self ratio is the slope, self ratio is the slope, and that line is the capital location line, yeah?  
Now, sharp ratio is the slope.  
And now, now we have that, what is that ratio?  
What do we want to be like?  
The more return the possible. What else do we want in life? The less risk the possible. Yes, that ratio is return over risk. What everyone wants in life, getting more money with less.  
risk. So at the end, sharp ratio is something that if you work in a farm or if you go work close to finance, you will have heard about sharp ratio. And sharp ratio is something I don't know anything regarding finance. What should I know? What is beta? We will talk about beta next class. And what is sharp ratio? Shap ratio, the greatest, the sharp ratio, the better.  
Yep.  
Now, here is 1 exercise. We last day exercise. You just write in the number. Please do it by yourself.  
Then, this is the graph that I have written there, yeah.  
And now.  
Here, you can get the numbers, read it and get it.  
Ana.  
What if I have more than...  
One stock. If I have two stocks from the other day, we saw this. Yes, if we have two stocks, we have that line.  
That is the one that I have told you, Ray, if you like that, then we have several lines, and at the end we can have the tangent.  
Portfolio careful, because I don't like...  
I don't like this one.  
Because if you look this one, you can misunderstood the minimum variance portfolio with the targets.  
I like this one, because these are two different things. One thing is the minimum values portfolio, another thing is the challenges. Make sense?  
Yep.  
Now, the true foam separation.  
At the end, all investors.  
A combination of the two mutual, they call it mutual forms of two assets.  
One asset will be the risky asset, and the other asset will be the highest startup ratio. Make sense?  
So, at the end...  
Portfolio choice at the end.  
Do you remember that we choose dogs? Angelina, I asked you, but in your risk profile?  
Today I will continue asking this question. What is your, how much risk you will learn? And instead of me moving here, we will be moving the line, the capita.  
Capital allocation line for one asset, capital market line for all the assets.  
The spoiler of next class. Next class, we will start with this. We will make sense.  
Big questions?  
I'm gonna go running to the radio because I still like the it works and like it works soccer.  
I will, if you have any problems regarding sleeping, I will serve you the interview. You can read it, you can hear it and you will fall asleep.  
No, it's a torch. You have, I have other things and let me look for.  
Let me look for, let me look for...  
Last. Oh, I close it. I close it. You know what I mean before?  
I'm looking for...  
That's at the Vidal.  
Sáez.  
Oof.  
Do you like this?  
Estamos Circa.  
Menos auto, let's go.  
"Quero que severe en la imagine del tres de noviempre la piedra me para de stupendo la ca de la ca tambien. Pero menos soro menos brillo e por el resto vamos bien.  
Motion.