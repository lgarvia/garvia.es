# Class Report (Instructor Facing)

## What we covered

1. **PS2 walkthrough**
    

- Clarified Part A/B: computing σ for specific weights; solving for weights given a target (E[R_P]) or ( \sigma_P).
    
- Deep dive on **correlation between two portfolios** using the double sum ( \sum_i\sum_j a_ib_j,\text{Cov}(R_i,R_j) ).
    
- Extension with a **risk-free leg**: demonstrated that 4 of 9 terms in the 3×3 covariance expansion survive; all RF covariances vanish.
    

2. **Announcements / structure**
    

- Midterm logistics, cheat-sheet constraints, sample midterms plan, and sequencing (PS3 → SM1 → SM2).
    

3. **Conceptual shift to CAPM**
    

- Motivated moving from **σ** to **β** (strip idiosyncratic noise; focus on systematic risk).
    
- Defined ( \beta ), SML, and showed how expected return is pinned by **market premium** and **β**.
    
- Framed CAPM as a **simplifying model** with explicit assumptions; used the “human model” analogy to highlight accuracy vs usability.
    

## Student engagement & friction points

- **Strong engagement** during the portfolio–portfolio correlation derivation; this was the main difficulty.
    
- Students tracked well once we wrote **every term** and then zeroed RF covariances.
    
- CAPM intro landed: learners repeated back SML verbally; a few asked about realism → good moment to stress assumptions and model limits.
    

## What worked

- Step-wise algebra on the board (weights first, then covariances, then normalize).
    
- Explicit templates (80/20 vs 20/80) and the “RF kills covariance” checks.
    
- Clear separation of **Sharpe/CAL/CML** (σ-world) vs **SML** (β-world).
    

## Risks / misconceptions to watch

- Equating high Sharpe in one setting with high **β** in another (different concepts).
    
- Forgetting that **portfolio β is linear in weights**, while **σ is not**.
    
- Using correlation directly when covariance is needed (and units mismatch).
    

## Recommendations before next class

- Ask them to **re-derive** ( \rho_{P_1,P_2} ) for a different weight pair (e.g., 60/40 vs 30/70) and turn in a one-page working.
    
- Quick in-class quiz: identify which terms survive in ( \text{Cov}(P_1,P_2) ) when one leg includes (R_f).
    
- Begin next session by mapping **CML vs SML** (two axes, two slopes) with one numeric example (plug (R_f), (E[R_M]), (\sigma_M), and a stock’s ( \beta )).
    

## Action items (for students)

- Complete **PS3** now; mark any items needing market-efficiency content.
    
- Start **Sample Midterm 1** early; send **cheat-sheet** photo for approval.
    

If you want, I can bundle these notes into a clean PDF for students and a separate PDF for your records.






# Student Notes (Session: PS2 Review → SML & β)

## 1) Quick Recap: Two-Asset Portfolio

- **Expected return:**  
    ( E[R_P]=w_AE[R_A]+w_BE[R_B] )
    
- **Variance / st.dev.:**  
    ( \sigma_P^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B,\text{Cov}(R_A,R_B) )  
    (or with correlation ( \rho ): ( \text{Cov}=\rho\sigma_A\sigma_B ))
    

## 2) Correlation **between two portfolios**

You can’t “read it off”—compute it from covariances:

- ( \rho_{P_1,P_2}=\dfrac{\text{Cov}(R_{P_1},R_{P_2})}{\sigma_{P_1}\sigma_{P_2}} )
    
- If ( R_{P_1}=\sum_i a_iR_i ) and ( R_{P_2}=\sum_j b_jR_j ), then  
    ( \text{Cov}(R_{P_1},R_{P_2})=\sum_i\sum_j a_i b_j,\text{Cov}(R_i,R_j) )
    
- Special cases used in class:
    
    - ( \text{Cov}(R_X,R_X)=\sigma_X^2 )
        
    - ( \text{Cov}(R_{RF},\cdot)=0 ) and ( \sigma_{RF}=0 )
        

> **Worked template (80/20 vs 20/80 in US/Spain):**  
> Let (P_1=0.8,US+0.2,ES), (P_2=0.2,US+0.8,ES).  
> (\text{Cov}(P_1,P_2)=0.8\cdot0.2,\sigma_{US}^2+(0.8\cdot0.8+0.2\cdot0.2)\text{Cov}(US,ES)+0.2\cdot0.2,\sigma_{ES}^2).  
> Then divide by (\sigma_{P_1}\sigma_{P_2}).

## 3) Portfolios that include a risk-free asset

- **Return:** (E[R_P]=w,E[R_{Risky}]+(1-w)R_f).
    
- **Risk:** ( \sigma_P=|w|,\sigma_{Risky}) (because ( \sigma_{RF}=0) and ( \text{Cov}(RF, \cdot)=0)).
    
- **Sharpe ratio (slope of CAL):** ( S=\dfrac{E[R_{Risky}]-R_f}{\sigma_{Risky}} ).
    

## 4) Diversification & risk types

- **Idiosyncratic (diversifiable):** firm-/asset-specific—can be diversified away.
    
- **Systematic (non-diversifiable):** market-wide—remains even in large portfolios.
    

## 5) Transition to CAPM (from σ to β)

- We keep “more risk → more expected return,” but **measure risk with β** (systematic risk), not σ.
    
- **Definition:** ( \beta_i=\dfrac{\text{Cov}(R_i,R_M)}{\text{Var}(R_M)} ).
    
- **Portfolio beta:** ( \beta_P=\sum_i w_i\beta_i ).
    
- **Security Market Line (SML):**  
    ( \boxed{E[R_i]=R_f+\beta_i\big(E[R_M]-R_f\big)} )
    
    - If ( \beta_i=1 \Rightarrow E[R_i]=E[R_M])
        
    - ( \beta_i>1 \Rightarrow ) riskier than market → higher required return.
        
    - ( \beta_i<1 \Rightarrow ) less risky than market → lower required return.
        

## 6) Conceptual model & assumptions (why CAPM is “simple but strong”)

- Uses a simplified world (no tx costs/taxes, single period, rational mean-variance investors, homogeneous expectations, all assets tradable).
    
- **Trade-off:** easier to use & interpret ↔ less realistic—remember it’s a model.
    

## 7) Logistics & study plan

- **Problem Set 2:** solutions reviewed; tricky part = correlation **between portfolios**.
    
- **Problem Set 3:** start now; you have almost all ingredients; skip pure market-efficiency items until covered.
    
- **Midterm:** date announced in class (Oct 17). Closed book, **one two-sided cheat sheet** (no full worked exercises; formulas/steps OK). Send a photo for pre-check.
    
- **Practice flow:** PS3 → Sample Midterm 1 → Sample Midterm 2.
    

**Common pitfalls to avoid**

- Mixing up **ρ(asset, asset)** vs **ρ(portfolio, portfolio)**.
    
- Forgetting that ( \text{Cov}(RF,\cdot)=0).
    
- Using σ (total risk) where β (systematic risk) is required (and vice versa).
    


# Transcription
No.  
No.  
I can't see. Yes, right. OK. So it was perfect. Yeah, I love. I do too. So.  
OK.  
Hi Jeffrey, how are you doing the problem set? I said that it was due to start a class. Don't worry. Yeah, I still have 2:00 PM. Don't worry.  
We don't have enough chairs in our class or something.  
She still.  
Jeffrey, don't worry. There's no point in Perla. Perla has class. Yes, I think.  
Did I know your names or and Leah and Asia, but also.  
There's a barn. Thanks. Yeah, there's a barn to clear out all the tents and there's a zeros to there.  
So it was.  
Some of that is, yeah. Who is the actual part? Ethan. Nicholas. Yeah. How? How?  
What about the promises too?  
I I I read that you have had difficulties with let me problem set two solutions. I'm going to let me go step by step first.  
Minu folks.  
Like San Francisco. Oh, I didn't share with you. Anyone have problems that you can say in there was a group or no I have. Sorry, forget about it. I have open.  
The songs.  
Session 5. OK, from set two. Here we are. OK.  
OK. Have you gone through permanency too? Yeah.  
What about?  
This question question D What is the correlation between there? OK, let me go through problems. Let me go first a general view of all questions and then let me go deeper into.  
Consider portfolios with positions in US and Spain and you are giving expected return on US, Spain standardization and also you know correlation between both, no here.  
We are told several portfolios, yes.  
And you are asked to do things with the portfolios, find the weights, find the weights. So personally, I think that calculate, take the return and standardization of the portfolio, just applying the formula, no?  
Then find the weights of a portfolio with respect to return of 25% is solving an equation that I think is simple, no?  
And find a way to a portfolio with same standard deviation. This is also relatively simple because you have standard deviation, you find a way or you have a weight and you find regardless standard deviation. Make sense?  
OK. I think that question B is the tricky one. What is the correlation between 1 portfolio or another one? Yes, OK.  
Thanks.  
Here.  
Is a continuation of this exercise, but assuming that there is a risk, no?  
Again, A A is relatively simple.  
Is any B miscalculating charge ratios that is simple no.  
Yes.  
And find the ways for a portfolio with the same inspector.  
Again, what is the correlation of this portfolio? What is the correlation of a portfolio that combines one people and another one? Yes, I'm going to answer question three. I'm saying intuition can be applied here to see, yes.  
I'm going to let me see how can I answer probably I'm going to do all exercise all on exercise one then.  
Then fifth here.  
US and Spain, yes, expected return and standard deviation.  
1020 10%.  
20%.  
And 50% and 30% makes sense and now correlation is 0.3.  
For a place patient is 30% yes, so I can complete the.  
Covariance covariances. Oh, this is Spanish. It should be Spanish in this Spanish covariances correlation.  
Variances correlation times.  
Standard deviation times.  
Standard deviation makes sense.  
I don't like these units. Let me change it.  
Covariance is Yep.  
OK, calculate expected returns. I'm going to there first. I need to know standard deviation of all portfolios before calculate core correlation. Yes, portfolio one.  
There are three portfolios that are portfolio 1-2 and three wait on US, wait on Spain.  
And it's 8050 and 2080.  
50 and 20, yes, in this 1 -, 80.  
OK.  
Wait.  
OK.  
1st I'm gonna complete return on the portfolio. That return on the portfolio is.  
This way times we don't know the portfolio is this way times.  
If return class is weight times.  
This return makes sense and then.  
Standard deviation of the portfolio is SQRT.  
Both.  
This times this weight.  
Let me do this in order. Please wait.  
US times this is standard deviation.  
It's it.  
Rise to the square less.  
OK, this weight times this is standard deviation.  
Price to the square, yes, plus two times times weight times weight times.  
Call audience.  
OK.  
This is correlation. Let me see if the numbers are correct or not by saying this is US and.  
This is Spain, yes. I don't know if the names are the numbers are correct or not, but it makes sense.  
OK, now I can draw.  
I'm.  
Here, I've got this. Any questions? No, no, not I'm done.  
What is the correlation between the returns on the portfolio in part A1 and A2?  
What is the correlation between the returns on the portfolios? The correlation between?  
A1 sorry and A3 I'm asked what is the correlation between this?  
And this no.  
What is the question? The question is.  
What is the correlation between portfolio one and portfolio 2? He said.  
The correlation is itself is not possible. We cannot calculate correlation that let me show you.  
What is being said here?  
Recall the correlation is the covariance divided by the product of the standard, and let me also go.  
Is this nothing?  
Let me come here.  
And in particular, let me, I would like, let me see this one, the last one, the last equation, yes.  
What does the last equation say that the covariance between?  
True portfolios.  
The covariance between 2 portfolios is the covariance.  
We are not playing with this equation, yes, with this equation combined with also this one. We can take the weights out, yes, and let me.  
Come here. Yes, I'm asked what is the correlation between portfolio one and portfolio 2? Yes, the correlation between portfolio one and portfolio 2 is the covariance between the return on portfolio one.  
And then we turn on portfolio, isn't it?  
Over deviation portfolio one and deviation portfolio 2. Make sense? Do we know this is standard deviation and this is standard deviation? Is this one and this one? No. So what do we need to know?  
Mobile yes.  
Between portfolio one and portfolio 2.  
Covalence between portfolio one and portfolio 2. When is portfolio 1?  
Let me write these room numbers.  
Let me, yes, right. Oh, 80, yes.  
Thanks. We don't know.  
We don't know US plus.  
20 time return on stay. Make sense?  
I'm asked why is I need to calculate the covariance between this portfolio.  
I.  
This portfolio that is just the opposite 0.2 times return on US plus 0.8 times returning on Spain. Makes sense.  
All of you are following me.  
1314 Yes, I can take the weights outside.  
Let me take blue or black.  
1314.  
324 Yes 13142324 Make sense.  
OK, one three 0.8 times 0.2.  
Covariance between return on US and return on US makes sense.  
Plus 13140.8 times 0.8.  
Covariance between return on US.  
And return on Spain, return on US and return on Spain. Make sense.  
Yeah.  
Bless.  
230.2 * 0.2 covariance between return on Spain 2/3 and return on US.  
Make sense plus 2 four plus 0.2 * 0.8 covariance between return on Spain and return on Spain. Return on Spain.  
I'm going to turn on this paper. Make sense.  
Are you with me? OK.  
The covariance between return on US and return on US. What? What is it?  
Maybe right here. The covariance is the summatory of.  
This is the covariance between X&Y, yes.  
When's you are with me?  
So what is the covariance between X and X?  
This value by N this is X minus X and instead of YX no.  
Is that it? So this is equal to?  
What is this?  
Audience.  
The covariance between one number and itself the values. Make sense?  
So.  
What is this number? The valiance on the returned US?  
The covariance between US and Spain. We already know it. The variance between Spain and Spain is.  
Variance on their return on Spain. Make sense.  
Yeah, so let me finish.  
Here the number I'm looking for is.  
0.8 times 0.2.  
Variance. Sorry, variance. Let me write the variance as the variance.  
Yes, yes.  
Glass.  
0.2 times 0.8.  
Times bargain, so yes.  
Plus.  
4.8.  
Times 0.8 + 0.2 * 0.2.  
Times covariance between US and make sense.  
Yep.  
Let me complete.  
1315.  
Let me tell to play.  
Gladdings.  
The goadings is.  
0.8 times 0.2 times.  
Audience.  
Variance on US.  
Yeah, less.  
Oh .0 plus oh sorry, 0.2 * 0.8 times.  
Why I'm so misbeh?  
Bless.  
Oh .8 + oh, no, plus no, sorry, 0.8 * 0.8 + 0.2 * 0.2.  
Times the covariance. Make sense.  
This number is this one and the correlation coefficient is covariance over.  
Over first standardization times.  
Second standard, yeah.  
And this is the number I'm looking for.  
Then this exercise is complicated.  
Absolutely complicated.  
But it's here because you work, you go different to the concepts. Now I have shared with you the solutions. Where are the solutions?  
Problem set solutions and in these solutions.  
In these solutions, in these solutions we see in these solutions you can see how this has been made, yes. And I think this number and the number that we have got is the same, yes.  
You can go through this. You can ask for office hours. You can do whatever you need. Yeah, let me go. I'm not gonna.  
Exercise 2.  
In exercise 2.  
Exercise 2.  
Let me see, you are combining with a risk. Oh, no correlation is asked, no correlation. But let me just tell you one thing. Let me just save this.  
Which is today's session.  
To assume that OK, let me just show you.  
In problem set three you are going to find something like this at the instead of 2.  
A portfolio that has two assets. You are going to have two portfolios that have two assets plus a risk free asset, yes.  
Anyone needs to take a picture of this?  
You want? I'm going to raise.  
OK.  
Imagine that I have the same exercise, but.  
Portfolio one. Portfolio 2 is weight one.  
We don't a we don't wait a we don't wait a less no.  
Weight one return A plus weight 2 return B plus weight 3 are risky. Yes, then I have.  
Weight 4, we don't a plus weight 5, we don't B plus weight 6 are recipient this.  
Make sense?  
Do you mean to sit there? Because probably I will use this platform. I don't know if I will do it, but just in case. Wait one, return A, wait two, return B, all of you on the link.  
OK, imagine that we have to make this same thing. We should calculate covariance between the two performance. How we will calculate covariance?  
Covariance between portfolio one and portfolio 2.  
We've come Sabi Chorito.  
And sorry, so that will be.  
141516 yes.  
.1.4 for variance.  
We we return A and return A. Make sense plus 1/5.  
Wave one, wave 5, the covariance between A and.  
B makes sense plus 1/6.  
Weight one, weight 6 covariance between return A and the risk-free asset. Make sense?  
I'm going to take plus I'm going to wait 1/4 one way two times weight 4.  
Go by has been doing RB.  
R plus weight 2, weight 2, weight 5, weight 2, weight 5 covariance between 2 and five is RBRB.  
Last.  
Weight 2. Weight 6 covariance between 2 and six is RP and the risk free. Make sense.  
Plus, let me just go with the last one.  
34 covariance between there is be a second and a wait three, wait four, no wait three, wait five, wait 3.  
Way five, Way three-way five.  
Variance.  
We're doing the race reassent and verbi, yes.  
And finally, wait three, wait six, yes, wait three, wait six covariance between the risk free asset and itself.  
Makes sense. Can you turn on the lights? The lights? Yes.  
Yeah, perfect.  
What I have here, a big 34 with 9 terms. Big 34, yes, what I have done this because I want to show you. I want to think about what is the covariance between the risk free asset.  
And that's it.  
Zero.  
This is zero.  
This is 0, no 00 and 0.  
At the end, what do I have? Variance when I said A.  
Variance. Sure. Variance from I said A.  
Barriers when I said P.  
Again, covariance between AB and B, yes, but I want to show you that if I combine 2 portfolios with the risk free asset, you can forget how the risk free at the end.  
We will have nine at six.  
Out of nine will be 0, not 64455 out of nine of nine will be 0.  
OK, this is problem set two. Today we have several things to talk about and a lot of information to.  
Good.  
A.  
OK.  
Take on India. Take on India. There is Wednesday.  
It's Friday.  
There is no class. Next week, Monday we have normal class. Wednesday we have normal class.  
Week after next week. We didn't have class on Monday.  
Oh yeah, yeah, we have a class on Monday. No, we didn't have class on Monday. It's Monday. He's don't know what is the name, but we didn't have class this Monday.  
I didn't know. I didn't know. Ladies last on Wednesday.  
And midterm will be home the 17th.  
Yeah. Do you know what the midterm consists of? Yes.  
I know all this information is being uploaded. The midterm will the midterm exam will be on Friday, October 17th. It will be close at book and close.  
No, except for the test formulas, you can bring your own cheat sheet. Yes, the exam will cover all the topics. The exam will cover all material through session 13. Major topics are the time value of money, performance measure, portfolio theory, decaffeine and market efficiency.  
Here you have instructions. Anyone leaves we.  
Anyone lives or near him?  
No one. I would like to hand this to him.  
I mean, I want to take one here. Tell me how long or how many pages for the cheat sheet or just one page? I mean you can have it's described one seat seat with two sides. Yes, one.  
I think it's written too. Can it be printed? Can it be? It can be printed, but you cannot have exercises on it. I should review before you cannot have exercises. You cannot make copies of the slides.  
What I mean is that what is the point? You are allowed to have the cheat sheet and I also I will give you one formula like this one.  
And I can I understand that these formulas could could make could be confusing for you. If you are not used to this, I mean because I want you to get used to this but.  
Probably these would lose confusion and you can bring your own. So this because this is like provided for me to teach you like steps to solve, but not like exercises, but like steps to solve.  
Before the midterm, once you have your chipsy, what I recommend is to send me a picture at WhatsApp and tell me please, it's OK, I would then yes.  
OK, more things.  
I'm going to give you 2 sample meter sample.  
Item one and this I think Ria answers the question.  
You don't have all the information yet in order to solve this. All this information is also available in Bright Space at Bright Space. At Bright Space you can find all this.  
Thanks. The format of the meter is what I'm going to say. When do you recommend to start? When? Yeah, let me just one minute and I will tell you what.  
Regiment.  
Sample meter 2.  
OK.  
OK.  
Now all of you should have.  
One information sheet, one formula sheet and two sample meters. Yep.  
Morphy's.  
Oh, next Wednesday.  
You should deliver for rolling set three. Let me give you for rolling set 3.  
Hold on, you said 3.  
Problem set three. My recommendation is.  
Now.  
Review problem set two with the solutions. Yes. Also I will do. I will go through problem set one again. I will review problem set one again. Yes also.  
From today's class, once we finish today's class, you can go through problem set three. So first thing I will do is problem set three. Once you do problem set three, that is simply is much more easier, the more difficult thing.  
On problem set three is this thing that I have already tell you about and the most difficult thing regarding cabin is knowing when we are talking about cabin and when we are talking about the old things, yeah.  
So my recommendation is to start with problem set three and when to finish problem set three start with a sample meter and then.  
Wednesday you should deliver program set 3. Probably during this weekend you can have program set 3 almost done and.  
You need information regarding market efficiency or there, but you will identify quickly which question has to do with market efficiency. You can skip them.  
If you want to start now with by looking, if I were you, I will problem set. Sorry, sample meter two is harder than sample meter one. If I were you, I will not try to do both at the same time. First I will work with sample.  
Meter one, try to identify which question you know, which question you don't know and give sample Meter 2 for a second round.  
But again, same thing if you wait.  
If you don't touch sample meter one or two this day and you wait till I explain how to solve the exercises, you will understand how to solve the exercises and you will not know how to do exercises.  
The point is final, sorry, final is going to be easier than sample meter two and even one. But the point is that you should answer the questions of sample.  
Sorry, underneath there by yourself.  
I'm going to explain you not today, of course, and I'm going to explain you how to solve all sample meter one and sample meter. The point is not understand me how to solve the the the point is questions.  
OK, so let me give you the same thing. This is today's class.  
Agree.  
OK.  
I have good news.  
I'm gonna start with. I'm gonna start spoiling.  
I have a portfolio that is the return on a portfolio is being calculated.  
Plus what is V times we don't make sense. This is everything in my portfolio. All of you should know then the variance on the portfolio.  
Is calculated by saying weight A square or plus weight B.  
Work plus two times weight A, weight B.  
Ovariance between A&B this.  
All of you agree with me? What are we going to do?  
What we are going to do is, do you remember from last class?  
That we divided risks. We divided risks into two parts. One part that can be diversified away, that is the idiosyncratic part. Another part that cannot be diversified away and we call it systematic, yes.  
We are gonna get rid of the idiosyncratic.  
And we will just focus on the systematic. Let me explain in terms of his students. He is not here today. I don't care. This is the other thing. I don't care because he will make up or he will whatever.  
OK, you can or I don't know. I don't know if you have gone or not, but I will not. I don't care about this part, yes.  
And if I get rid of the idiosyncratic farm.  
I can say yes one thing.  
The more hours you study, the more great you will get. I am simplifying reality, but once I get rid of the idiosyncratic, yes, what I will say.  
More return, more risk, and I will be so, so simple. And instead of me talking about deviation, I will introduce one new concept.  
That will be.  
Bender.  
What is beta?  
Let me write it here and I will use the.  
What is the correlation coefficient between A&B? Correlation coefficient is covariance between return an A and return.  
The collide between return A&B, yes, over deviation A times variation B. Make sense?  
All of you, are you agree with that? This is a correlation of the meeting.  
What is beta on a? It's a number that will like the correlation coefficient.  
In a statistic way, it will look a correlation coefficient, correlation coefficient.  
A correlation coefficient is a number that goes from.  
9121 and you could say no.  
When is better? The stage is gonna be out.  
Regression coefficient. Regression coefficient. The regression is a line between two variables. Yes, it's a regression coefficient. And how do you write the regression coefficient? You will never, almost never been asked this formula. Yes, but I want you to know what is.  
That is the covariance between return A. We will talk the other day. I introduced the concept of the market, the correlation between return A and the market.  
But instead of its deviation.  
Barriers on the market this you see that this looks similar.  
But this is a regression that is between 100 and -100% when talking about. Sorry, this is a correlation coefficient when talking about.  
When talking about regression coefficient, it can vary from minus Infinity to infinity, and normally these numbers should be around.  
One, the number should be around 1:00 and it could be higher than one or lower than one. Why about around one? What is the covariance between the return on the market and the return on the market?  
The variance of the market, no. The variance of the market, lower the variance of the market will be one. So if beta is one, we will be talking about the market. If beta is lower than one.  
The stock or gas will be less risky than the market. If beta is higher than one, it will be more risky than the market. Make sense?  
Yes, better is 1 same risk as the market.  
If they take one, what is the return my asset should have? They met the market.  
Same risk, same result. If there is higher than one, we will see. If there is lower than one, we will see. But this will be so simple because it will be a lot, yes.  
Wanna be on with me? Okay.  
Capping transform these.  
Captain, instead of talking about deviation, we're going to talk about better.  
Beta on the portfolio, yes. And when talking about better on the portfolio, better on the portfolio will be.  
Wait a times better a.  
Plus weight B times beta B.  
You understand what I what I have just done. I have transformed portfolio theory.  
Not me, Sarbs. Sarbs is the one that has started this long time ago. I have transformed that formula that investment opportunity set and all these things into something.  
Raise maths, maths, maths. More simple.  
Big questions.  
OK.  
Yes.  
Let me move here.  
We came from.  
I want to make this to me.  
But.  
We came.  
Yeah.  
Yeah.  
Deviation volatility, yes.  
1316.  
And here he goes. We go.  
Sorry.  
Deviation and return. No. Here there was one as an A1 as a B.  
One asset A, one asset B, we can draw the investment opportunity set. Yes, we can have also all the assets in the world.  
Yes, and by having all the assets in the world.  
We can draw the decent frontier for all, yes.  
We can look. There is a risk.  
And we can, we can look for.  
The maximum charge ratio portfolio. All of you are you with me?  
If we have all the assets in the world, we saw last day two ideas. Last class we saw two ideas. First idea we don't need to have all the assets from the world. We have just enough with thirty-five with 500 with Yep.  
The index model, but we have all the assets. How are we going to call that portfolio with the highest ratio that includes all the assets market?  
I'm going to call it market. And how are we going to call this line? We're going to call it the capital market line. Yes, we used to call it capital allocation line, but instead of a normal portfolio, we have all the portfolios. We will call this line capital market line.  
Right exams.  
I'm talking about the market.  
what I will have here.  
The deviation on the market, yes, and what I will have here.  
The return expected return from the market makes sense.  
This war, the one that discovered this or that work with DC was called Markovic. Markovic. Let me call this war Markovic war, yes.  
Today's class we are moving from this world to a.  
New war, Yes, in this new war, instead of deviation, we will still call call risk, but instead of deviation, we will call risk better.  
Yep.  
Send.  
Then.  
What is better?  
Of the.  
What is the convenience between the registry asset and the market?  
Didn't answer. So beta of the original would be, did you know?  
This is their respri, yes.  
And now.  
This is the return on the market, yes.  
What is better?  
Of the market, the variance or where the values. So each one, no.  
This is 1 yes.  
All of you are with me, OK?  
I have two points. I have already told you that the relationship between all portfolios will lay on the same line, no?  
This new world, this is.  
Capital asset pricing model, yes, this new world when moving from here to there.  
We get rid of the nations credit impact. Yes, no more nations credit impact and in this new world.  
All assets.  
If the market is efficient, if carpet works, all yeses should lay on that line.  
What is the name of this line? Security market line. But what is the name of that line? Cape. And let me look for example here.  
Here I have one lesson. Let me look for another here and no.  
I have here when I said B makes sense.  
What is that?  
Return. This is return.  
Yes.  
If this asset gives the return, yes.  
I'm going to have this beta on asset B, yes.  
What is?  
They return on as it be.  
The question of the line. If I know better, I can calculate the return and if I know the return, I can calculate better. Knowing better the return is going to be.  
The risk free plus.  
Reach free glass.  
Better on big times.  
What is called market premium? We turn on the market.  
Return on the market minus the risk free return on the over one at one, yes.  
What is this equation happening? What is this equation? The equation of the SMF? What is that equation? The equation that tell me? You tell me how much risk you want or you want. You tell me better and the higher better.  
The more better, the more we go. Make sense.  
Any questions?  
What is this? This is the question of a line. All this line is being called SML. What is that equation? The equation of having itself? And what does this equation tell me?  
More risk, more rigor and.  
Where all the assets should be like, all the assets should lay on on the same line.  
Over or other the line here.  
Here as a day, as a B always should be under TMM.  
Why? Because of idiosyncratic.  
Because of the idiosyncratic at once we get rid of the idiosyncratic part.  
The more risk, the more return. Make sense.  
Hope life should be thanks to Kapem is here.  
Easier, yes.  
Any questions? Tell me.  
OK, there's another question.  
The meter you will find before thinking about the meter, try to solve problems century because I have just introduced, I have just introduced Kabel and you we have no, we have not calculated any portfolio. We have done enough.  
But the meter next week or next day we will talk because for example.  
For example.  
There are questions regarding efficiency. There are questions regarding portfolio theory. There are when talking about CAPE, we will still be working with volatility in order to work with CAPE. There are several things to say this. Let me wait till next class at least.  
Before talking about the meter and cavell. I mean problem in the meter in sample meter you will find request for example. Let me see the third one.  
No, sorry, sample midterm one. Here it is. First question, a stock has a data of 1.5, a volatility standardization of 50 and the volatility standardization of the market is 50%. What fraction of the stock variance is in order to assure what you need next class?  
But it's relatively simple because I will tell you how to calculate one and the other. Yeah, OK.  
What are we going to do today? First, we will talk about the assumptions, then we will talk about the tangency portfolio that matters. And finally we will introduce Cathay before.  
All these things.  
Let me think about.  
What is a mother? What is a mother? What are you doing here?  
Tell me.  
From here, skip here and it's sorry for what I have to go here.  
Long hair, breasts and a skirt.  
You see that this is a model of a human being, no? And in this case, she's a woman.  
I was. I have. I was questioning myself in drawing a woman or a man. I think drawing a woman was polite, more correct politeness than drawing * ****. Sorry for this.  
But what is this? A model? A model of a human person? They also.  
Yeah.  
What is this compared with this? A baby? No. And let me draw here again. And this is a an old.  
Woman. Yes, what I'm trying to transmit you that here I got a model of a human being and I am trying to show you a lot of details, a lot of details I have.  
Yes, gender. I have a gender that it could be in the assumption that I have. Look, I have taken one assumption that is there are just two genders.  
But there could be more here.  
There is no race, but there will be race. Then here there is age. Yes. What is a model? Something that help us each human being is unique, but there are parameters that.  
Help us understanding how human beings are. For example, I'm talking in terms of marketing. Then also I can talk about dollars worth. Also I can talk a lot about nationality.  
You are all of you I think are from the States, yes, and I'm from Spain. What I'm doing segmenting, I have considered a model.  
And I am using this model, yes.  
What is the problem I've got with this model that if I want to see this is too complex, I draw back and let me simplify this model.  
But it is a human. Also, if you go to the bathroom or restroom, you can see that there is.  
Two genders and a third, not a third. Sorry, two genders and a gender that is not determined, a gender that goes out of traditional, but what I'm doing.  
I am simplifying my model. Once my model is being simplified, I want you to understand two things.  
This model is much, much, much, much more easy to use, but the more easy to use the model is, the easier the model is.  
The less accurate. I cannot talk about AIDS by looking this model. I don't know if you understand what I'm saying. What I'm saying is that in order to get.  
Yes.  
Imagine that what I want to simulate this.  
Sorry for the example. It's a disaster of example, but I think that nobody will get offend with this example. Yes, I want to simulate 20 feet or not 20 feet. I don't know about feet. I know about meters, but 20 floors, yes.  
I want to simulate this in order to get the simulation with this model. It's enough. And I don't care about nationalities, I don't care about age, I don't care about almost any. Make sense.  
One feet you can survive, 20 feet you cannot. And if I'm talking thinking about this, no, this is not the best example, but or how much people are going somewhere, yes.  
With finance, we are doing the same. We're moving.  
From here to here, what do we have done? Taking the idiosyncratic part away. What does this mean? Don't care about nationalities, don't care about age, don't care about gender, don't care about, don't care, don't care, don't care. And I'm just considering.  
That there is just one thing that matters for me or two. Sorry, risk and return. I don't care about HABT.  
It's it is or there is definitely of attention. I don't care about handicaps. I don't care about you have same. I don't care about dates. You have same knowledge, same idea. And what I'm saying is the more hours you work, the more great you will get.  
Is this accurate? This is a model, yes. So first idea.  
Before when when we were here, here, here, there were assumptions.  
When moving there, all assumptions we consider before we maintain, but there will be harder assumptions and the more assumptions we are getting, the more.  
Tight the model will be the more, the less accurate it will be, the more simple, easier, the easier to handle. It will be more. It will be easier to handle, but at the same time careful because.  
We are considered considering that everyone is equal and.  
Many having a baby sitting here, none of the things that I'm saying will have any sense for him or for her or there. Yep.  
Any questions? Yeah, please. So you're saying that the cap and model is it's it's more accurate, less, less accurate because it takes into account less factors. OK, I just want to make sure, yes.  
And what I'm saying also is that.  
This the idea is so, so, so powerful, yeah.  
That also we will say not next class in two classes time that it's also a big, big seat.  
She disaster. Why? Because she's so powerful that people think that you only have a hammer. Yes. Can I do a hammer? Yes. But it means that I try to clean.  
The glass with a hugger.  
Yeah, same happen with scientific. With scientific you can do lots of things, but if you have spaghetti and you want to hit spaghettis, hit no, sorry.  
Cook experience. Yeah, you would not use anything.  
Same happens here. Careful because there are, yes, there are people in the market that oh, give me the sub ratio, give me, give me the better. Now there is much more life than that. But again what I have told Rob today.  
Today we have just introduced them. We are not gonna go so.  
But the idea is I'm sorry, cap M what is is an equilibrium model. Then I would be also talking about equilibrium for hours and I'm not going to be talking about equilibrium today. What is equilibrium? Death when we will get equilibrium once we will be there.  
There is life, there is no equilibrium, but now a Markovic has to do with that and we are moving into sharps. All these people received Nobel Prize, yes, in four year 2000. Which portfolio should investors hold in equilibrium?  
This is the question happen tries to answer. Then what is the equilibrium, the equilibrium required return or the equilibrium price of an individual stock? You've got it there. This is the formula we will be looking for. Make sense.  
And now cap in assumptions. Market is in a competitive equilibrium. Demand is equal to supply. This is OK, I admit this one, but common single period investment origin. We have just one single period investment.  
And people use CAPM for almost everything. All assets are tradable, yes. No transaction cost, no taxes.  
Investors are rational. For me, admitting this is insane. It's a joke, but not too much. All investors are rational.  
For people that vote, vote, voting. Yeah, it's rational.  
We are rational.  
We just moving an automatic waiver of times, but we are assuming that investors are rational and also we assume that all investors are mean variance of devices.  
Ask go to the market and ask anyone you know or if you can remember what was the value, but you know what I'm saying no more risk and there are homogeneous expectations.  
They are there homogeneous expectations. Are there bias? Absolutely, yes. Depends. Well, whatever. But these are certain assumptions. I'm not going to go deeper into this. I prefer what I have done with the human being model, yes.  
What I'm doing and considering that everyone thinks the same, everyone is rational, everyone has same expectations, everyone, all assets are tradable. Yeah, make sense. So once we have harder assumptions.  
Assumptions are required for simplification over insights. Basically amount to the fact, yes, some assumptions can be relaxed and CAPM still holds. Yes, if many assumptions are relaxed, generalized versions of the CAPM apply. This makes sense. Make sense.  
OK. What is the tangency portfolio, the portfolio with the highest charge rates? What are we saying? What is the market portfolio? We consider all the assets in the world and we put all these assets.  
Into just one portfolio. How are we going to call this portfolio? The market, yes. And with the cap end, what are we doing?  
Capital market line is the line that everyone will want to be in the capital market line. Look that I am on the left. The capital market line exists in the left how all assets should be.  
On the left, under the CML, all assets should be under the CML in the marketing world. Make sense? And by doing so much, we can move from the capital market line. This is the capital market line, yes.  
Today, demonstration, you can't forget about this demonstration. We are going to move from the capital.  
From the capital market line, we are going to move from this to.  
To to the to the. Sorry, let me go back to the assembly. Yes, we are going to move from that side to that side. Yes, coming back here.  
What is better? I have explained it there, but you can forget about this slide. What I want you is to understand the government is so, so simple. I have a risk, yes.  
The Rishi asset is 3%. I have the market 8%. The question is, oh sorry, the difference between the market and the Rishi asset is 5%. This is the market premium. Yes, the question is I have an asset.  
And what is the return on my asset in order to calculate the return on my asset?  
I need to know the risk. Once I know the risk, knowing the return on my asset is just multiply adding the risk free plus these times beta in beta is 1.  
The return on my asset will be market's return. If beta is higher than one, my asset is riskier and the return will be higher because it's riskier. If beta is lower than one.  
I guess it is less risky than the market and.  
Yep, makes sense.  
Let me go quicker. So, oh, sure, sorry, 3 + 5% times beta. If beta is one, 8%. If beta is lower, lower. If beta is higher, higher. Here you've got a quick summary. Beta is the covariance over the variance, yes. And if beta is lower than one, the stock.  
Price is less risky than the market. If better is higher than one, the stock price is more risky than the market. Make sense.  
And then there is the security market line that is this one, beta one, the line you've got there and what is the risk premium?  
The slow of that line.  
And beta intuition is what I have already told you. If beta is lower than one, that's risky. Beta is higher than one. Riskier. Sorry, SML and the SML are two lines, yes, and this is what you have on the blackboard.  
I have already explained you this one and conclusion. We have gone into a more simple world. We have been talking about deviation during this class. From this class in advance we will still talking about deviation, but also we will talk about better.  
And when talking about beta, we will continue talking about Greece, but our lives will be more simple. Makes sense. Any questions?  
Try to solve problem set three. You have all the information in order to solve or almost solve problem set three. Make sense?  
Out.  
OK.  
Today was.  
I'd say it's big, especially. Yeah, they actually don't like to launch a good machine. It's 100. Not bad at all. We don't know.