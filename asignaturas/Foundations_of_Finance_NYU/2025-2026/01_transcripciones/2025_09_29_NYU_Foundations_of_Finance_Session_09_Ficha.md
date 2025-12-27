# Class Report — Session on Diversification & Risk Decomposition

**Date:** 29/09/2025  
**Course:** Financial Markets (NYU Madrid)  
**Professor:** Luis Garvía Vega

---

## 1. Structure & Flow of the Class

1. **Warm-up / Recap**
    
    - Reviewed previous class on two risky assets + risk-free asset.
        
    - Recalled CAL, tangency portfolio, and Sharpe ratio.
        
    - Engaged students with questions about what was understood from last session.
        
2. **Extending Portfolio Theory**
    
    - Introduced **three risky assets** and generalization to NNN.
        
    - Demonstrated formulas expanding variance with multiple covariances.
        
    - Transitioned naturally to matrix notation and covariance matrix.
        
3. **Excel Demonstrations**
    
    - Showed pre-prepared Excel sheets.
        
    - Highlighted “yellow cells” editable convention.
        
    - Used random weights (Monte Carlo) to illustrate the **efficient frontier cloud**.
        
    - Students followed the intuition: efficient frontier vs. minimum variance portfolio.
        
4. **Conceptual Deepening**
    
    - Focus on **correlation**:
        
        - ρ = 1 → no diversification.
            
        - ρ = –1 → risk-free portfolio possible.
            
        - Intermediate correlations → diversification benefits.
            
    - Illustrated with live changes in Excel (correlation slider).
        
5. **Systematic vs. Idiosyncratic Risk**
    
    - Built narrative through an analogy with **students missing class and exams**.
        
    - Clear definition:
        
        - Idiosyncratic = diversifiable, specific to firm.
            
        - Systematic = non-diversifiable, affects all.
            
    - Showed how portfolio variance decomposes into these two parts.
        
6. **Indexes & Market Portfolio**
    
    - Connected to **real-world practice**: S&P 500, IBEX 35, FTSE 100, CAC 40.
        
    - Introduced the idea of the **market portfolio** (preview of CAPM).
        

---

## 2. Pedagogical Notes

- **Style:** Alternated between formulas (“big chorizos”), Excel visualization, and analogies (exams, missing students, Trump, generational gaps).
    
- **Humor & Cultural References:** Maintained engagement with “choritos,” Swifty joke, Trump anecdote → students reacted with smiles and informal comments.
    
- **Interaction:**
    
    - Asked students repeatedly if concepts made sense.
        
    - Directly involved individuals (e.g., Perla, Ethan) to anchor examples.
        
    - Encouraged students to “teach each other” when someone missed class.
        

---

## 3. Student Engagement

- Students were **responsive and participatory**.
    
- Some struggled with formulas but followed well via Excel illustrations.
    
- The analogy with exam grades + idiosyncratic vs. systematic risk was particularly effective → clear recognition in faces and comments.
    
- They appreciated explicit links to real markets (indexes, BlackRock, Nvidia–OpenAI).
    

---

## 4. Key Outcomes

- Students now understand:
    
    - How diversification reduces risk, but cannot eliminate **systematic risk**.
        
    - Why correlation matters.
        
    - How multiple assets generate the efficient frontier.
        
    - That **two-fund separation** simplifies the whole problem to Risk-free + Tangency Portfolio.
        
- Prepared ground for next step: **CAPM**.
    

---

## 5. Next Steps

- Problem Set 2 is the focus: encourages independent practice.
    
- Next class: transition to CAPM, linking systematic risk to expected returns.
    
- Suggested students review today’s Excel examples and replicate calculations.



# Student Notes — Diversification, Systematic vs. Idiosyncratic Risk

## 1) Review of Last Class

- With **2 risky assets** + risk-free asset:
    
    - Portfolio return: (E[R_p] = w_AE[R_A] + w_BE[R_B]).
        
    - Portfolio variance: (w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\text{Cov}(A,B)).
        
- If one asset is risk-free: (\sigma^2=0), covariance=0 → line (CAL) from (R_f) through the risky asset.
    
- Among risky portfolios, the **tangency portfolio** (max Sharpe) dominates all others.
    

## 2) Extending to More Assets

- With 3+ risky assets, the formula expands: variances + all pairwise covariances.
    
- Becomes easier to handle with a **covariance matrix**:
    
    - Diagonal = variances.
        
    - Off-diagonal = covariances (symmetric).
        
- Efficient frontier emerges from all possible combinations.
    
- Even with many assets, at the end we only care about:
    
    1. The **risk-free asset**.
        
    2. The **tangency portfolio**.  
        → This is the **Two-Fund Separation Theorem**.
        

## 3) Diversification & Correlation

- If assets are **independent** ((\rho=0)): portfolio variance falls with (1/N).
    
- As (N \to \infty), **idiosyncratic risk → 0**.
    
- If assets are **correlated**: variance never fully disappears.
    
- The lower the correlation, the greater the diversification benefit.
    
- If correlation = 1 (perfect), no diversification possible.
    
- If correlation = -1 (perfect negative), can even construct a **risk-free portfolio**.
    

## 4) Systematic vs. Idiosyncratic Risk

- **Idiosyncratic (diversifiable) risk**: specific to one company or asset; vanishes in large portfolios.
    
    - Example: one student missing class; others can share notes → risk disappears when you combine.
        
- **Systematic (non-diversifiable) risk**: affects all assets at once (market crashes, policy shocks, global events).
    
    - Cannot be eliminated by diversification.
        
- Total risk = Systematic risk + Idiosyncratic risk.
    
- Even with very large (N), systematic risk remains.
    

## 5) Why Indexes Matter

- Instead of holding “all stocks in the world,” indexes approximate the **market portfolio**.
    
    - US: S&P 500.
        
    - Spain: IBEX 35.
        
    - UK: FTSE 100.
        
    - France: CAC 40.
        
- Index funds/ETFs allow easy exposure to the **market portfolio**.
    

## 6) Key Takeaways

- **Diversification works**, but only up to systematic risk.
    
- Efficient frontier + risk-free asset → CAL.
    
- The **tangency portfolio** is the single risky fund that matters.
    
- Everyone should hold a mix of:
    
    1. Risk-free asset.
        
    2. Tangency (max-Sharpe) portfolio.
        
- Next step: CAPM (Capital Asset Pricing Model).
    


# Transcription
A ver.  
Mhm.  
OK.  
Yes.  
Yeah.  
I'm sorry. And today's class is today's class.  
Last day's class was important. This class is a little bit more difficult than last day's class, and the important class was last day. Yeah, let me share with you session session about this.  
Say and I'm gonna. Hi, Hi. What about last class? I mean, did you recap? Oh, you talk.  
I'm not like good at explaining. Perfect. But I have office hour. I I mean for me attendance is not is not something important, but for me you understanding proper things is absolutely important. So last day plus.  
We will review things. Pat, do you have any questions regarding last day class? Jeffrey, I'm still listening to the lecture today. No, not yet. Oh, OK.  
Then it's going to be hard for you to understand today's class. We thought the last day's class, but let's try say.  
Let me serve this with you and let me also.  
So this. OK, let me go there.  
9.  
OK.  
I see. Oh, yeah, Nick, is there? No, no, no, you can do anything. I was thinking about someone is missing.  
And I think that everyone is 123456 and then whatever. Let me.  
This one.  
I can take.  
Maybe this one.  
Case here, please.  
Green is, Lake is, Brooke is, Nathan is, Nicholas is, and.  
And year three scope from one side.  
Call.  
They were going to see a lot of things and a little bit not quickly, but.  
They.  
You have all the information. You already have all the information you need in order to prepare program set to. So you try.  
The questions now.  
Next, there is some, there are some questions or two questions regarding covariance, calculating covariance that are good. Next day we will go to that, but what is?  
10.  
I cannot summarize go through last day class full, but the idea of last day class is.  
What is the variance of a portfolio? Well, it's one right the square. Let me call it a a plus.  
Weight B variance B + 2 times weight A weight B for variance between A&B. Make sense.  
Yeah, yes, me. What if asset B is a risk free asset?  
It hasn't be a risk reacid values of the reacid is 0.  
And covariance of the risk free asset is 0, yes. So at the end variance if B is a risk free asset, you can say that the deviation of the portfolio is equal to weight a times.  
Please be in the rest zero weight base combined with the recycle. This is what we saw the other day, yes.  
The other day we saw that.  
If you have a risk free asset and you combine this asset with an asset A.  
The investment opportunity set will be.  
Investment opportunity set would be aligned of course, yes, and if you've got.  
Deviation. Yes and deviation on the portfolio. Yes is weight on a times deviation a yes. If weight is 0% you will be here. If weight is one you will be just here and this makes sense.  
And on this side we turn the portfolio is going to be weight A times return A plus weight B times return B. All here will be.  
The other day we saw this with just one asset and what if instead of having one asset?  
If instead of having one asset, I have two assets, I said A.  
And I said me, yes, if I have two assets, what can I do?  
First, I can draw the investment opportunity set.  
And once I have investment opportunities, I can combine them with free asset with any of these, yes.  
At the end, among all these possible portfolios, there will be one that will be the best for me. Which one is this?  
The tangent portfolio, yes, the tangent portfolio is.  
The portfolio I would prefer among all portfolios, yes, and here I define charge ratio being this variance deviation of the portfolio and return on the portfolio, yes.  
What is SARS ratio? The ratio is the tangent, the tangent defined by this distance.  
Return on the portfolio and risk free this distance over the risk over this. What is that? The risk over the relation? Sorry, return over the relation, yes.  
Return over deviation. And what is that tax rates? What I'm looking for? I'm looking for a portfolio that will maximize, will give me the maximum return, assuming the less risk possible.  
This is what we showed the other day.  
What are we going to do today?  
We will.  
Consider what? What if? What if instead of having?  
Two stocks.  
I have three. What if instead of having 3454?  
20 this.  
Yeah, she's black. Perfect.  
This is right. OK, what if I have one more stop this?  
What if I have one more to stop?  
Wait, C times returns, yes.  
People and I know that one is equal to weight A plus weight B and if I have one stop.  
Also.  
3030 and 40 for example. Make sense.  
And now here, do you remember Choritos?  
The territory becomes bigger.  
Here plus weight C rise to the square variance C yes.  
And here.  
Plus two day, two times, wait day, wait see covariance between A and C + 2 times.  
Weight B, Weight C covariance between B&C. Make sense?  
Any questions?  
OK, what I'm going to do in Excel? No, I'm not going to do it. I'm going to show you the Excel. I have already served with you the Excel and let me show you one Excel that combines.  
Three stocks.  
And.  
I need this excel. Yes, this excel has been has been done by me.  
And normally in the excels that has been done by me, there is in yellow what you can touch. You will see more excels like not like this when talking about derivatives and.  
What do you have here?  
Return on asset AB and C and deviation on asset AB and C, yes.  
I can turn this off if I turn this off.  
If I turn this off.  
What I've got? Yes, the combination between two assets. If I turn this off, what I've got?  
Yes, one asset makes sense. Let me combine two assets and I have the investment opportunity set between asset B and asset C.  
Oh, this a little bit here.  
Before look in the graph, yes.  
All the return is being calculated. The formula that you put in the plan, yes.  
Wait A return, wait B return and wait C return make sense.  
And how do you calculate deviation?  
Look, the chorizo is big, and the chorizo is the formula you've got on the blackboard.  
Square root of.  
This times I mean I did it this times this times this deviation times the deviation. Yes, instead of rising this to the square and multiply two times times two times.  
Makes sense.  
OK, and what do we have here?  
Two stocks and let me put a third lock.  
What do you have here? Look, I want.  
When I saw you.  
Let me find this phone. Sorry, Perla, do you see that he's not gone? OK.  
What do I have? One stroke, another and a third. Yes, AB and C Why? What can I do?  
I can create, I can draw the investment opportunity set between A&B, no. Also I can draw investment opportunity set between B&C, no. And also between A&C, yeah.  
And also between this portfolio and this one, no.  
Or this one and this one, or this one and this one and at the end if I draw.  
All this is been done here. Random weights. Random weights is this is called Monte Carlo method. What is Monte Carlo method? I play in roulette. You start throwing numbers and the more numbers you've got.  
The more close you will be to the result. Yeah, these are random numbers, but at the end, what can you see?  
That among all these numbers.  
Among all these numbers.  
There is a minimum variance portfolio now.  
And I can draw an efficient frontier. If there is a minimum variance portfolio and I can draw an efficient frontier, what what can I look for?  
No matter I have two, I'm sorry, in this case I have three, but I can have four no matter what number of stocks do I have.  
I have a risk, Priya said. What can I do?  
In the tangent and at the end I can reduce everything to just two points, the risk free and the tangent make sense.  
Today we are not going to see anything new. What we will do is play with big chorifus. Yes, you don't need to know how to play with big chorifus for the meter. You should full masterize in.  
Working with two stops, but today's class we will they will be to make sense.  
What if? Let me look for black. Here it is. What if we have a fourth?  
Weighty. We don't need. Weighty. Yes, I'm here.  
Wave D square, Wave D square, yes.  
Plus.  
To weight A weight B weight sorry AD covariance A and D + 2 times weight weight B weight B covariance between B&D.  
Plus two times weight C weight D.  
Provided you doing C and B makes sense.  
You understand what I'm doing?  
OK.  
If I am working with just two two stops, it makes sense to draw the equation, but if I am working with more than two stops, we can draw this in a matrix matricial matricial way.  
Yes.  
What can you find here? What is called a?  
Covariance Matrix. In order to draw covariance matrix, let me come here.  
Covariance matrix times the weights. What is the covariance matrix in the diagonal of the covariance matrix?  
What can you find in the diagonal of the covariance matrix?  
11 The variances on the Yes, these are the variances.  
So.  
33 Yes, I'm here 1/2.  
one three  
2/3.  
Oh, sorry, rest before long. This is the covariance, yes.  
And the covariance between 1:00 and 2:00 is the same as the covariance between 2:00 and 1:00. So let me write in a symmetric way.  
Yes, are you following me?  
And here a.  
End.  
Sorry, no, one N.  
Two and three and.  
Points and the variance of the last stop. Yes, Variance 123 and I Yep.  
All of you, are you with me?  
Let me move here. I'm here. I'm going to write one end covariance between two and N covariance between three and N Yep.  
Exit.  
OK, I'm going to do this number now because later we will need, but now we are fresh. Later probably we won't be as fresh as we are now.  
First question, how many? How many variances?  
What is the number of variances you can find here?  
What is the number of variances that are N isn't it?  
Number of variances is equal to N Don't you agree?  
And now, what is the number of covariances there are?  
How many numbers that are in total N times NN squared?  
What is the number of covariances we have? All the numbers we predict over minus the variances.  
How many numbers? Number of covariances?  
Of cobarian says yes. How many cobarian says there are?  
N square is the total number of items we have and we should take out.  
My music, no.  
All of you agree with me and I can write this as NN -1 no.  
Are you?  
We will keep this in our head and we will come back later.  
OK. Any questions?  
Here I've got three assets. You have this in the blackboard and let me go to.  
Next excel. This excel is called portfolio with three stocks, yes.  
Let me open.  
The other excel that I have share with you.  
This excel has been created by Craig Holden, a professor from I didn't met him and I think he passed away two years ago.  
OK, what do you have here?  
So, so simple and let me I'm here this because.  
Explaining this is so simple. We go step by step. You just look at this and do and do not know nothing. Look the sky, sky. It's not scary.  
First I have.  
Five and a risk free asset. I have 6 stocks, 6 assets, yes.  
OK. Let me start with the risk free, 4% and risk free, yes.  
This is their history. Excellent. And now I have. I said why?  
5% of return and 60% of standardization.  
Which one is has it won?  
I said two 60.6 and 40.2, yes.  
60 and 40 makes sense.  
Now asset 3 and asset 4 both has same return but asset 4 is risky.  
Both have same return but asset 4 is riskier. Make sense.  
And between 4:00 and 5:00 both has same risk, but as in five pays more rhythm.  
Yeah, make sense.  
Let me ask you questions. You can only choose one. You can only choose one. Which asset would you choose?  
You can only choose one.  
Which test will you choose in case you can just choose one?  
It depends on what on your risk risk averse.  
I'm talking about you. You need to choose between I said 1234 and five.  
Please.  
That's to the less risk, the highest risk, yeah.  
All of you agree with me? Yeah. I mean, we think I'm sorry. Not with me. Yeah. Yeah.  
Which is the one you will.  
Almost Mia choose. You will never choose or you or the less probably you will choose. There are several candidates.  
11.  
What?  
Or or four. Yeah, aye. In order to pay for this one, probably I will prefer the risk reaction. This one is just paying me a little bit for almost nothing.  
Yes.  
I'm assuming a lot of risk. I'm getting just 1% of return and regarding stock 4.  
I have this one that pays same return but less risk or makes sense.  
Yes, then.  
What do I have here? Correlates. This is this 100. This is a correlation matrix, not covariance matrix because these are correlations. I mean covariance matrix are covariances. Here you've got numbers between minus 100% and 100%, yes.  
And the correlation between one asset and itself is what? Yep.  
Okay. What do I have here?  
Here I've got one portfolio and these are the weights of 1 portfolio. And here you've got another portfolio and these are the weights of the other portfolio. Yes, let me start with the black one. Which one is this one?  
The minimum balance portfolio, yes, the portfolio with.  
Less risk. Did you see the weights on the minimum variance portfolio?  
Asset 2 is the one that has a bigger weight and the rest of the assets weight. Make sense?  
What I'm looking for here, the minimum risk possible.  
But we are not looking for the minimum. I mean I have a risky asset personally I would prefer.  
To combine that I'm looking for. If I'm looking for zero risk, if I am absolutely alert risk averse investor, yes, I will choose that risk free.  
Makes sense. And if you told me, OK, I want this risk, what I would prefer one combination of the highest separation, this that you need, this risk. Make sense, make sense. All of you are with me.  
OK, what do I have here? The tangency portfolio. If you look in the tangency portfolio.  
Thinking about the tangency portfolio, your preferences match a lot with this one. Yes, which one is the best? Two. What is the weight? More than 550% more than the half?  
Will consist on this one, yes.  
But.  
Why it is 11% on stock for?  
Bye.  
Why there is still wait?  
Yes, it's full.  
You understand what I mean? Why did you wait?  
What?  
Or what is the still weight? I mean, I don't for I don't like as it one. Yes, I don't like it, but there is a 3.3%. Why there is still weight of this?  
No one. I'm looking for one word. Let's start with me.  
It's off.  
What this weight means?  
What does this weight means?  
No one. What are what is this weight? This 3%? What is this 3%?  
Is it diversification? Yes, the word I'm looking for is diversification. And this is the way on stop one.  
This portfolio.  
The weight on this, on this, on this, on this. Why there is still weight when I said four?  
Because of diversification, because the covariance is 0 because thanks to us at 4, we diversify away risk. Make sense.  
Yes, let me play a little bit. All of you know what what is there.  
What I'm gonna do, I'm gonna change.  
Choose between 3:00 and 4:00 or five, 3-4 or 4-5.  
3-4 or 4-5?  
OK, three.  
3-4 Yes, I'm going to play with this one. Yes, not sure with this way with this correlation coefficient.  
3-4, yes, 3-4 as I will increase correlation coefficient between this one and this one, yes, both assets will look the same.  
Will behave the same.  
As I in Greece.  
As I increase correlation coefficient.  
Diversification ahead will be lower. The more they look the same, the less diversification I would have. Make sense.  
All of you are, are you with me? Let me increase.  
This one, yes, this is 34 and if I increase this, what is going to happen?  
With this weight, this weight will become bigger and this weight will become smaller.  
OK, let me do it, you see.  
I'm going to oh, let me make this way bigger 10%. You see it.  
You see how this weight is getting smaller. This weight has not get so big, but this fat has get bigger, yes.  
That four is getting really, really small. The more the two assets looks the same, the less sense will have to have this in the portfolio. Look, you see.  
See what I mean? 50%. This is becoming smaller 570. Look, please, I want your. I want you to look there because something strange is about to happen 1.25.  
Yes, you see this weight is almost nothing and these two weights has increased a lot. Why? Because I don't the higher the correlation, I don't need a set for at all, yes.  
But look what is going to happen.  
But that happened, Luke.  
1st is core if correlation is 90.  
If weight is negative and if correlation is almost perfect, look what has happened.  
What is going on there?  
12.  
What has come there? What has happened?  
Look the jump. Look how both the minimum variance.  
Look, oh, sorry, let me go the other side.  
Look what what is going on. Look the green portfolio and the black. Yes, look these two ones as correlation increase.  
The green portfolio is moving slowly to the right, no? And look what is going to happen there. This is moving to the right and suddenly moves to the left.  
What is going on there?  
Can you watch it?  
What if both assets are perfectly correlated? What can I do?  
If both assets are perfectly correlated.  
There is one asset that is better and another asset that is worse. What can I do?  
I can start shorting the bad one, selling the bad one in order to buy more than 100 of the good one. Make sense what I'm doing? I'm doing arbitrage.  
And if there were just two assets, negative correlated or perfect correlated, yes, a perfect correlated, I can construct by combining these assets a risk free asset. So if.  
The correlation would be perfect. I can diversify a lot by doing arbitrage. Make sense.  
I'm not going to ask this, but understanding this helps you master it. We will go with perfect correlation a lot. Probably in the midterm you will find things regarding perfect correlation.  
Any questions? OK, let me start with today's class, yes.  
What are we going to do in today's class?  
Today class we will review what we saw last class and we will work with portfolio selection with a risk free and many risky securities, yes.  
Then I will introduce the concept of systematic and idiosyncratic risk and finally we will work with a single index model with.  
OK.  
In case I have many risky assets, if I have two assets, drawing the investment opportunity set was done 4 lessons ago or three lessons ago. Yes, I'm working with US and Japan and for problem set two you should have done this, yes.  
OK.  
Investment opportunity set for two stocks.  
What if I have a fair stop?  
Here is a third one. Yes, I can combine this and also I can combine the 1st with the 2nd. At the end I have a cloud of boats, yes.  
This is the efficient frontier and from the minimum variance portfolio down from the minimum variance portfolio, I have the inefficient frontier. Nobody said. I mean, I don't know if inefficient inefficient frontier exists or there is a frontier, but nobody cares about the inefficient frontier. Make sense?  
All of you understand understand this.  
OK. And the global minimum variance portfolio, what we how do we, how did we feel this last class?  
How did we finish last class? We finished saying that.  
If I have two stocks, if I have the the two phones theory, yes, if I have, first thing I'm going to do is to create the investment opportunity set to draw all possible portfolios.  
Look for the efficient frontier. Yes, once I go the investment opportunity set, what I will do, I will look for the tangency portfolio that is the portfolio with highest ratio.  
And then once I've got the risk free asset and the tangency portfolio, I will look for that. I will ask you Perla, what is your profile and depending on your profile I will choose. Make sense.  
OK, two form separation. What is the idea of the two form theory? So, so, so simple, no matter how assets that are in the world.  
At the end we will combine just two of them.  
The risk we asset and the highest tariffs ratio.  
Excels.  
No matter how many assets do we have in the world, at the end always we will combine, we will just pick two assets, the risk free asset.  
And the highest chart risk, the the portfolio, the phone with the highest of ratio makes sense.  
Yep, I'm gonna make a spoiler. I'm gonna spoil the class. Yes, of this class. Next day's class.  
How many stocks there are in the world? No matter. I can take all the stocks. What is the name I'm going to give to the highest charge ratio when combining all the stocks in the world?  
What is the name? I'm going to who I'm going to call the highest charge ratio when combining all the stocks in the world. Let me call it the market.  
The market market portfolio. What is the market portfolio? It's a portfolio that includes all stocks in the world. Make sense?  
Do you remember the Excel we have just seen with the light as a one too much, but it still has a 3%.  
Market portfolio will have a weight on all, yes.  
All stocks will have.  
Presence in my market profile all stocks.  
Will it be necessary to have all the stocks in the world? Many that I'm thinking about this, I'm working in the States.  
How many stocks can I choose in order to have the market?  
In the case of the space.  
I can choose, for example, 500 stocks.  
500 stops. Why 500? What I'm thinking about?  
What have 500 stocks in the States? At the end these 500 stocks represents the market. Have you heard in Spain about the IBEX index 35?  
How many stoves that are in the EX3535 stoves?  
In UK Footsie 100, Ministers there are 100 Cat 40, France Cat 40.  
What I'm talking about in Spain, yes, 35 stocks represents the market. What I'm talking about, I'm talking about the let me come back. I'm talking about the single index model.  
This single index model. Why do indexes exist?  
Why do indexes exist?  
Because of today's class, because we don't need to take, we don't need to take all the stocks in the world. In the case of Spain, just with 75 stocks is enough.  
Hey, Chris.  
OK, now this is ladies here.  
In order to talk about the portfolio optimizer, the Excel file that I have submitted through the was a group. You also have this file, this Excel file in bright space, yes.  
We have gone through this and I think everyone has understood this.  
Calculates optimal portfolio with five risky assets and one risk free asset. This is what the portfolio optimizers do, yes.  
Why does optimal portfolio overload on stock two or on asset two? Because he's the best.  
Why whole lasted for at all? Because of diversification.  
And then what if we increase the correlation between 4:00 to 5:00 from zero to low to 70% and from 4.5 to 1 here?  
From zero to 70%, yes.  
As a thought will worth less.  
That once we increase, we have this effect from diversity from.  
Arbitrage that I have previously described. Make sense.  
Any questions? OK.  
How are you doing?  
We are moving into the.  
Hardest part of today's class, yes.  
OK.  
If I have just two stocks, I have this equation. Does this equation looks familiar to you?  
Does this first equation looks familiar to you?  
If not, if this doesn't look familiar to you, lie to me and say yes, it does.  
OK, if instead of having just two, I have N securities.  
Let me.  
They mean.  
Right again.  
Let me write again first this one. Summatory for all eyes of all weights, yes.  
From I = 1 N of all whites, yes.  
What I'm doing weight one, weight 2, weight 3, weight 4, till weight N and summing all of them. Yes, the summatory should be equal to.  
One makes sense.  
I am just rewriting this equation in a more simple way.  
No.  
Return on the portfolio is going to be equal to.  
Materi of its return times.  
It's white. Make sense.  
Yeah, I let me move. We go step forward.  
Variance on the portfolio, please.  
One when of by one raised to the square.  
Variance. Make sense?  
Dipol, is it correct? It's correct? Let me, yeah, this one, yes?  
Glass.  
Two times.  
And let me open sousumatoris from I equals to one when this.  
And because there is a true.  
What I'm doing is.  
Yes, taking half of the matrix, yes.  
So from I equal to 1 to N, yes.  
And there are two ways in order to write this from G.  
Equal to 1 to N -1.  
And and -1, sorry, or I don't know who is written there. Yes, it is written. Yes, the opposite from for all.  
Yay. I hear none aye.  
Yes.  
Perfect. What I'm doing here, you can do what I'm doing is.  
Thinker about comatis 11. Sorry 1/2.  
1/3.  
One and no, this is the first material. Let me go to the second one.  
One too is already there, yes, so I should go to.  
This is the first one true. Yes, one true is there.  
So I should go to.  
G higher than one that is 2-3 and then from 3 to N what I'm doing is from J higher than I.  
Till the end make sense.  
OK, let me take this out and what I'm doing here 2 times weight I, weight G covariance between I and D yes and instead of doing this with covariance.  
I'm doing this with correlation position. Make sense.  
Yeah.  
Any questions, Nicholas? What I have done is rewrite this formula there. OK, what is this formula?  
The the chorizo, the big chorizo we we already have, but in a longer way. Sorry, in a shorter way, yes, with Matores.  
Is this?  
OK, what are we going to do now? We are going to take several subscriptions and see what is happening.  
versus Samson.  
I'm gonna consider first approach, yes.  
I'm going to consider all conveniences.  
See.  
If all covariances are 0, if all.  
Correlation coefficients is 0.  
This will be here or no?  
Make sense?  
Design approach and then in order to play with these numbers.  
Also, I'm gonna, I'm gonna consider.  
That always.  
Are the same.  
I'm gonna take same percentage of all stocks.  
Why I'm doing this? Why I'm doing this? Because I want to see what is going on, yes.  
If all weights are the same.  
See.  
13.  
If all weights are the same, how many weights there are and no.  
No.  
If all weights are the same, do you see that this is equal to N times the weight?  
And this is equal to 1, so if all weights are the same.  
Always R equal to 1 over N.  
Make sense?  
Yeah, so.  
Here when it is going to be in 1 / N or or once, yes.  
All of you, are you with me? Let me.  
One to end this.  
All weights are the same, so this is going to be one over and square, yes.  
Thanks.  
Each values make sense.  
At least the variance on the portfolio.  
No.  
Let me take out one of these.  
Let me take out one of these ends. Yes.  
And let me say that this is equal to 1 / N yes.  
I open parentheses from 1 to N variance over N yes.  
All of you are with me.  
What is this?  
What is this?  
The average variance. I can calculate the average variance of all the stops.  
Are you with me?  
I have taken values on the portfolio. What I'm trying to do, what I'm trying to understand. I want to understand what is going on, yes, and in order to understand to feel what is going on.  
What I have no means consider first idea. I I want to get rid of this. I consider covariance is 0. There is no covariance this and then all weights are equal and if all if all weights are equal.  
This is equal to this, yes. Think about the balance on the portfolio.  
What if N tends to Infinity? The bigger and it is the bigger and it is.  
This average will be. No, this average will be whatever it is. It's the average. I mean, you can calculate the average and the average will be whatever it is.  
But what will happen with the variance on the big portfolio? The bigger this is the average over N will tend to zero. Make sense?  
Yes.  
So first approach.  
Let me move to next slide, yes.  
This is the covariance, but first idea. Suppose we have an equally weighted portfolio, yes.  
Of and independent stocks.  
If we have an equally weighted portfolio of N independent stocks.  
We can conclude that the variance on the portfolio is equal to.  
1 / N times the average values, so as the number of assets increase.  
The risk will tend to 0.  
I take all the stocks in the world and I can have a risk free as.  
Yes.  
Makes sense.  
Any questions? Okay.  
Have you understood this? OK, now let me consider that there is correlation. Let's see what's happening, what's happening with correlation, yes.  
There is correlation.  
Let me write that balance on the portfolio list. We already know what's going on with this.  
This is 1 / N.  
Avidates violence, no.  
Yes.  
And now.  
Let me play with this other one. Yes, all weights are the same and 1 / N yes.  
Two dies.  
Two types.  
One to N to N, yes.  
Weight and weight is 1 / n ^2.  
Thanks. Let me write covalence between I and Jeff.  
Are you with me?  
Wait.  
Yeah.  
This way it's equal to 1 / n ^2 and this is the same yes.  
What I'm looking for, what I will be looking for, what I'm looking for, I'm looking for.  
I'm going to break this in the average covariance way.  
In order to look for this average covariance.  
How many covariances there are?  
How many covariants? Let me there are super, yes, let me take out the two.  
And consider that I'm talking about all of them.  
All of you are with me. I've taken no these two and I need to know how my how many covariances there are, yes, and how many covariances there are.  
Row row How many covariance is there are N times N -1?  
So what I'm going to do here?  
I'm going to multiply.  
N thanks N -1.  
Over N * N - 1, yes.  
Ready.  
And let me change something for one second.  
And.  
91, yes.  
And thanks and by everyone.  
I'm here this.  
But I have only just move.  
What is this combined with this the average covariance?  
And I can take this out.  
Yes.  
I'm gonna.  
I would like to have a computer and take this here and this there. You understand what I mean.  
Let me guess with this n * n - 1 / n square this and this is equal to.  
This structure I'm gonna do it N -1 over N yes.  
And I can say here.  
N / N is 1 -, 1 / N yes.  
All of you are following me. OK, if you are following me.  
We will see that this is.  
This is this one what we have from here.  
And on the other hand, we have.  
1 -, 1 / M times the average quality. Why did you take out the two of them? Why did I took out? Yes.  
Because these two is here because there are.  
Two of them. There is thinking about this matrix. What did these two represent?  
That this and this is the same is symmetrical, so I took the two out.  
Because I have count the number, the total number.  
And inside these two.  
What this? What this did you represent?  
Yes.  
If if I don't consider the two, what I should have done if if I if you want me to.  
Keep these two there. You want me to keep these two there? Yes, what I should do here is how many?  
Of these.  
I mean if you just put there, the two goes with the two. Yeah, I try to do this more simple, but there you don't need to know this. This is just make sense.  
What I've got here that the variance on the portfolio if we consider covariance.  
Is 1 / N the average and 1 -, 1 / N the average covariates. What I want you to see that if N tends to infinity, if N becomes bigger.  
This will go. This will go to Syria, no?  
But what will happen with this? This part will go to 0, but I cannot diversify away the whole risk.  
I cannot diversify away the whole risk, so I will still have risk no matter how big the portfolio is.  
Make sense? Why I'm going to still have risk? Because of correlation, because of the market, yes.  
Yep.  
OK, this is Amy. What happens when N goes to Infinity?  
As the number of assets grow, grows.  
There is one part of the risk that cannot be diversified away. Make sense.  
What does this mean?  
It means that.  
Yes.  
There is one number that is 3. In order to pass the course, you need to know the number. The number is.  
What is the number you need to know in order to pass the course?  
Three. No. If you know the number or if you pass, it's simple or difficult to pass the course.  
People know and the number is 3. OK, I'm waiting for Ethan.  
And I'm going to ask Ethan, what is the number?  
He needs to note.  
You understand that what I'm what I'm saying?  
What I'm saying?  
What I'm saying is that normally if all of you are here.  
All of you have same information.  
Ethan is supposed to be here now. What is the number you need to know in order to pass the course? What? Yeah, I was just. Yeah, I already been called.  
No, no, I didn't call you. I I am using you as an example of idiosyncratic risk.  
I have given one number to your to your peers in order to pass the course.  
And you don't know the number.  
So.  
You have very important problems. You are in trouble, but yes, because.  
Of you in this case.  
What I'm saying and at the same time all of you should know I'm.  
Thinking I'm thinking about the exam. Yes, all of you are great. All of you are great, but there is a mistake in the exam or the exam is harder than it's supposed to be. The exam is harder no matter how good you are.  
Your grades will be worse, or imagine that you will find a more simple exam in the world.  
No matter how bad you are, your grade will be higher. Make sense.  
What I'm saying is that correlation.  
Has to do with something that is out of you.  
Let me let me move harder. The idea is classification of risk.  
There is one part that cannot be diversified away.  
The part that can be diversified away is the idiosyncratic, for example, the other day you weren't here.  
And you can diversify. Why? Because you can talk with him.  
You can talk with his hand or with whatever with you can talk with other one and diversify away. I was not here, but someone can give me the information, yes, but no matter how well you are informed.  
The exam, the midterm is out of your scope. And what if the midterm is hard? All of you will have a low grade. Why is the midterm is so, so simple? All of you will have a good grade.  
But at the end, the more hours you study, the better the result you got. You understand what I mean.  
The less hours you study, the worse the result. There will be one part of the grade that will depend on the hours you will study, and there will be another part of the exam that will depend so.  
The market on how easy or difficult it is.  
For example.  
If there is a market collapse, no matter how well your company perform, your company will have low returns as the market. Make sense.  
Yep, let me go quick. What is the idea at the end and we will work on this on next class. Total risk on Astro could be could be classified in two parts.  
Systematic risk and idiosyncratic risk.  
I'm not a teacher. No one will understand. This has to do with systematic. I'm a really good teacher. Everyone will understand. This has to do with systematic, yes, but if that is out of class.  
No matter how well or bad I am, this part will correspond to idiocratic. What can you do with all the idiocratic?  
You can diversify what you cannot do with systematic. You cannot diversify away systematic. Why? Because it depends on the market. It depends on weather condition. It depends on something that will affect all of us.  
Make sense? OK, this is the same. This is total risk and as the number of stocks increases, no matter how big is your portfolio, you cannot diversify away all risk. What I'm talking about here, I'm talking about SP500.  
You can use instead of 535, yes, because if you see, yes, we 30 stocks.  
Is as having 1000 make sense and diversification in a crisis makes not too much sense. And then the bigger, the bigger this is, the less the more maths you need, the more computer power you will need.  
So at the end, next class we will move from here to Capel. Yes, what is Capel? We will see you next class.  
Today's class is not as important as working hard in problem set two. Today's class, if you have not understood something, I have office hours, but I would prefer to dedicate office hours to problem set two.  
Makes sense. Thanks, Philip.  
Thank you.  
Yeah, and well, all the same. But it's like really good names. Yeah, it's like all the communications. Thank you.  
He's here. Thank you. Welcome.  
Thank you. Welcome. Bye. Hasta. Hasta la vista. Yeah. Yeah. Sorry. Yeah.