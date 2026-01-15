# Schematic Summary — Risk-Free Asset, CAL & Tangency Portfolio

## 1) Framing

- Builds on last class (two risky assets).
    
- Today adds a **risk-free asset** and introduces the **Capital Allocation Line (CAL)** and the **tangency (max-Sharpe) portfolio**.
    
- Next: mix risk-free with the _best_ risky portfolio only.
    

## 2) Estimating inputs from data (historical)

- **Mean (expected return estimate)** over TT periods:  
    Rˉ=1T∑t=1TRt\displaystyle \bar R=\frac{1}{T}\sum_{t=1}^T R_t.
    
- **Variance**: σ2=1T∑t=1T(Rt−Rˉ)2\displaystyle \sigma^2=\frac{1}{T}\sum_{t=1}^T (R_t-\bar R)^2 (class used population form).
    
- **Covariance (A,B)**: CovAB=1T∑t=1T(RA,t−RˉA)(RB,t−RˉB)\displaystyle \mathrm{Cov}_{AB}=\frac{1}{T}\sum_{t=1}^T (R_{A,t}-\bar R_A)(R_{B,t}-\bar R_B).
    
- **Correlation**: ρAB=CovAB/(σAσB)\rho_{AB}=\mathrm{Cov}_{AB}/(\sigma_A\sigma_B).
    

## 3) Properties of the risk-free asset

- Return: constant RfR_f (e.g., 3%).
    
- Variance: σf2=0\sigma_f^2=0.
    
- Covariance with any risky asset: Cov(f,X)=0\mathrm{Cov}(f, X)=0.
    
- Correlation with any risky asset: 00.
    

## 4) Mixing one risky asset AA with the risk-free asset

- Weights: wAw_A in AA; wf=1−wAw_f=1-w_A in risk-free (allow wA<0w_A<0 → short AA; wA>1w_A>1 → leverage).
    
- **Expected return**: E[Rp]=Rf+wA (E[RA]−Rf).\displaystyle E[R_p]=R_f + w_A\,(E[R_A]-R_f).
    
- **Volatility**: σp=∣wA∣σA\displaystyle \sigma_p=|w_A|\sigma_A (because σf=0\sigma_f=0, Cov=0\mathrm{Cov}=0).
    
- As wAw_A varies, (σp,E[Rp])(\sigma_p,E[R_p]) trace a **straight line** from (0,Rf)(0,R_f) through asset AA. That line is a **CAL**.
    

## 5) Dominance of the best line (CAL vs CAL)

- For a _given_ risky portfolio PP, CAL slope is its **Sharpe ratio**:  
    Slope=E[RP]−RfσP=Sharpe(P).\displaystyle \text{Slope}=\frac{E[R_P]-R_f}{\sigma_P}=\text{Sharpe}(P).
    
- Among all possible risky portfolios, the **tangency portfolio TT** maximizes the slope → its CAL **dominates** all others (higher expected return for the same risk, or less risk for same return).
    

## 6) Tangency portfolio intuition

- Geometrically: CAL from (0,Rf)(0,R_f) that is **tangent** to the efficient frontier of risky assets.
    
- Economically: the unique risky portfolio with **maximum Sharpe ratio**.
    
- Investor choice then reduces to **how much** to put in TT vs RfR_f (risk profile), not _which_ risky assets individually.
    

## 7) Leverage & shorting

- wA>1w_A>1: **borrow at RfR_f** (lever up) to hold more of AA/TT. Risk and expected return both scale up along the same CAL.
    
- wA<0w_A<0: short the risky asset and park proceeds at RfR_f; moves along the CAL below/left of RfR_f.
    
- Practical note: borrowing cost may exceed RfR_f; leverage magnifies losses as well as gains.
    

## 8) From “two risky assets” to “many risky assets”

- First, build **risky efficient frontier** using means/vols/covariances.
    
- Then find **tangency TT** (max-Sharpe).
    
- Finally, investor picks a point on the **CAL through TT** based on risk tolerance (utility curves).
    
- Conclusion: in equilibrium, everyone holds some mix of **risk-free** and the **same tangency portfolio** (two-fund separation).
    

## 9) Excel workflow (as shown in class)

1. Estimate E[R]E[R], σ\sigma, ρ\rho (then Cov=ρσAσB\mathrm{Cov}=\rho\sigma_A\sigma_B).
    
2. Generate weights; compute portfolio E[R]E[R] and σ\sigma to plot the risky frontier.
    
3. Compute Sharpe for candidate risky portfolios; identify the **max**.
    
4. Draw the CAL from RfR_f through the tangency point; use weights to read off any target return/risk (including leveraged w>1w>1).
    

## 10) Vocabulary check

- **Volatility / standard deviation / “risk”** used interchangeably here.
    
- **Excess return** = E[R]−RfE[R]-R_f.
    
- **CAL** = set of combinations of RfR_f and a chosen risky portfolio.
    
- **Sharpe ratio** = slope of CAL.
    

---

# Student Notes (concise)

**Goal:** Add a risk-free asset RfR_f, build the **Capital Allocation Line**, and choose the **tangency (max-Sharpe) portfolio**.

**Key facts**

- RfR_f: σf=0\sigma_f=0, Cov(f, ⋅)=0\mathrm{Cov}(f,\,\cdot)=0.
    
- With risky AA:
    
    - E[Rp]=Rf+wA(E[RA]−Rf)E[R_p]=R_f+w_A(E[R_A]-R_f)
        
    - σp=∣wA∣σA\sigma_p=|w_A|\sigma_A
        
    - Points lie on a **straight line** from (0,Rf)(0,R_f) through AA (CAL).
        

**Sharpe & Tangency**

- Sharpe(P)=E[RP]−RfσP\text{Sharpe}(P)=\dfrac{E[R_P]-R_f}{\sigma_P} (slope of CAL through PP).
    
- The **best** risky portfolio TT **maximizes Sharpe** and its CAL **dominates** all others.
    
- Investors differ only in wTw_T vs wfw_f: risk-averse → more RfR_f; risk-tolerant → lever up TT.
    

**Leverage**

- wT>1w_T>1: borrow at/above RfR_f to hold >100% in TT. Moves up along CAL (higher risk & return).
    
- wT<0w_T<0: short risky; return drops below RfR_f.
    

**Data to inputs**

- Rˉ=1T∑Rt\bar R=\frac1T\sum R_t, σ2=1T∑(Rt−Rˉ)2\sigma^2=\frac1T\sum (R_t-\bar R)^2, Cov=1T∑(RA,t−RˉA)(RB,t−RˉB)\mathrm{Cov}=\frac1T\sum (R_{A,t}-\bar R_A)(R_{B,t}-\bar R_B).
    

**Procedure (exam/PS ready)**

1. Build risky frontier (means/vols/covariances).
    
2. Find TT = arg max Sharpe.
    
3. Draw CAL through TT; choose wTw_T from risk preference to hit target E[R]E[R] or σ\sigma.
    
4. If mixing TT & RfR_f:
    
    - E[Rp]=Rf+wT(E[RT]−Rf)E[R_p]=R_f+w_T(E[R_T]-R_f)
        
    - σp=∣wT∣σT\sigma_p=|w_T|\sigma_T.
        

**Bottom line:** Once RfR_f is available, the only risky portfolio that matters is the **tangency portfolio**. Everyone optimally holds a mix of **RfR_f** and **TT** (two-fund separation).


# Trancripción
It's

people

I'm I'm going to start slowly.

minut

Today's class more important than the other day class and this goes so Don't worry you are not the last. You have class before? No, I got my the soccer jersey soccer jersey.

Yeah.

I don't want to start. I want whatever. Later I will repeat.

Do you remember how to calculate theates the variance and the covariance in order to calculate?

the spect the average spect yes what are we going to do we are going to take all historical data and we will sum all historical data over number of

number of points we have then how do you calculate the vari on the historical returns

the varias

yes minus

r to the square over

Because we are talking about returns.

This should be Yes. Makes

and covariance covariance between asset A and asset B. Yes. The covariance between asset A and B is

R A minus R times the same

min over number. ¿Qué tal, Perla? Jeffre is missing. Yeah. You know something about Jeffre.

Oh ok. Yeah.

Here.

Miss anything but today anyonees with Jeff? I'm think

I don't care but I care about you to talk with him and review this class with him. Today's class is important. Why? Because what we are doing is constructing one today's class goes over the other day class knowledge and next class we will continue over this one. Yes. But today's class for me is really important because others

what we have seen is return how to calculate like doing the average the variance and the covari you are never going to use formul never use formul but I want you to understand one thing what

I have a free asset. Yes. But if I have a free asset, what does free asset mean? For example, if expect 2% 3% min 1% 4 can have free asset the return is going to be for example the 3% no matter what will happen the return will be 3% sense. So, so

always 3% yes and now what is the variance? What is the variance of a risk 3 asset?

All of you see you see that this is zero

and what is the covari between one and the asset

and also because this will be zero for all the numbers

It's simple to understand but you should understand once you once you see is simple. Ok let me move forward let me take this out out now. You have all these things in the slides and we are going to go through this. But I want you to understand this step by step. Now you remember first day we were talking about sorry second day we were talking about portfolio theory spect return una portfolio is weight A spect return on A plus weight B spector return on asset B

and variance of the portfolio.

A to the square variance on a

plus weight B square variance B

plus

two times weight Aight

B times covariance between A and B.

If we take that, we saw that we can construct we have asset A with volatility. on asset A asset B with volatility asset B and return B return A we have a B and we can draw we can construct

from

exercise has to do with construc

opportunities. Ok

what we are see today we are talk first about the asset then we will combine the risky asset with one non risky asset then we will combine risky asset with a portfolio that consist on two mak sense

Let me start here. I say that as B instead of being as B return on B is a B is next

B is a risk free asset.

Let me change the colum.

B is

free asset. Yes.

W is 1 minus A. Yep. Let me start with the spect return. Nothing going to change in B. not change anything but this p is

a plus 1-

the

so we turn on p we move just a little bit the asset plus asset plus eh asset plus return a min

p is plus

and let me come here. So, so simple on the please.

So, what do we have here?

portfolio

squation squari

squari

portfolio is vari

Can the weight be negative? Can a weight be negative? Yes. So me just put absolute value.

Me that this is min one to the square is 1. Yep.

Negative and can the volatility be negative?

Let's see what's going to happen. Next.

Okay. What do we have here?

I'm gna take this out. Yes.

What do we have here?

return. Yes.

A y zero a zero what have vari on the portfolio ang portfolio is

the portfolio is zero no and we

Yes.

A is one. A is one. What do we have? A is one. What do we have? 1- 1 is 0 returning. Yes. If weight is one, what do we have?

If weight A is one, which point we have a mak sense?

Yes.

Now simple.

What do I have here? return the portfolio

equ plus a percentage of distance you see plus a percentage of this distance

on the other hand percentage of distance if the percentage is for example 50%

I will be half here and half here all of you see the percentage is 25% 25 and 25

I have a

and this thing that I was Could I short asset A? Will it make sense to short asset A? Never. But could I do it? I can do it. And if I said A, let me just say negative negative 50%. Yes. Where I will be? I will be here in the half this 50% rise to the square and square root of min 50% rise to the square is 50%. Yes, I would hear the point is that this

what do I have here? The investment opportunity set. Do you remember?

constructment opportun for a perfect negative

perfect negative correlation something like that

if correlation is perfect we will have a line but we will have there is not because correlation is perfect asset not correlate and this mean that it's still alive makes sense any questions

have you understood this

what is this the investment opportunity set combining the asset

and yes one

ok let me move here if instead of one stock I

What can I do?

I have

a risk free asset. Yes,

I have the investment opportunity. What can I do? Let me make this a little bit more exaggerate. Let me exaggerate this.

Yes.

What can I do? I can combine the

one of the portfolios

form of the investment opportunity set.

like this one for example

this

do you see what I'm doing

one hand I have this portfoli

On one hand I have this portfolio and this line from here but instead of having a what do I have portfolio no

which portfolio will you prefer? This one or this one?

Instead of this, you will always prefer this one. No, let me just take another random. Yes.

Yep.

This one

there are two lines, four points. No.

Which one will you prefer? You see that I can take this point and then red line is the investment opportunity set combines portfolio with

I can be let me call this line a and yes

would you ever choose a portfolio that lays on line B when you can get a portfolio that lays on line A. You understand what I mean? Will you choose this portfolio? Why you can choose this one?

I will always choose a portfolio that on line A. No.

Let me just for example let me talk with this one. Yes. And let me call this portfolio P. Don't you agree with me that this portfolio P has

volatility P and here

we turn P. Yes.

Makes sense.

Let me just right here.

P the risk free

alpha. Yes. Alpha. What is the tangent

of alpha? The tangent of alpha. Do you remember trigonometry a little bit? The tangent is the opposite. The tangent is this side. over the tangent is return P min over deviation

distance over that distance that the would beer if the would beer I'm talking over volatility sorry over volatility

are you

do you see that this angle alpha is this one

looking for I'm looking for the better for the best portfoli I'm looking for this portfolio

and all of you agree with me that line A is better than line B

and line C is better than line. Yeah. Are you follow me? Which line I'm looking for?

Tangent. No,

this

so so simple. So simple. What I'm looking for for the line that has the highest slope, the highest tangent, the highest relationship between return over whisk. I'm looking for the highest the highest return possible even the lowest. risk looking for the

portfolio that will pay more return assuming this relative risk makes sense

have you understood this

we can't go we are going with today's class. No, no, no. Yes, but no. example and I have not with the class. Oh, let me let me start with the class. If you have understood this I'm so happy but we are going to review everything and we will examples and not where is this where are the slides

where are the slides and of not only we will see

ok let me start today's classes. What are we going to do today? Today we will talk about first about the risk assets then we will combine the risky asset with one risky security and once we know how to combine the risk asset with one risky security then we will talk we will combine the risky asset with two risky securities Ex.

CL

conusion

spoilers

spoilers made or

let me make spoiler spoiler

spoiler.

Do you make spoiler or say that is a spoiler. I'm going to spoil spoil

because in Spanish we use spoiler and we say a spoiler. But no, I'm going to spoil the I'm going to spoil the glass. On one hand I have the asset. I have one stock and I have another stock. Yes, at the end of today's class, I will tell you that I will only care

how many portfolios there are a lot. No, I will just care about two points. The R asset and the highest SAR ratio portfolio. This is SAR ratio. I will just take the R asset and this portfolio and and I will not care about asset A, asset B. I will not care about anything else. Why? Because you have one profile one rise. You are risks. If you are risk you will be somewhere here on the other hand is a risk lover will be here

capital at the end.

just look at two points or or two sorry two points the feed the highestation portfolio one investment one line yes I will tell you that line is called capital allocation line ex

okay

eh fundamental decision

How much should you own stock? How much should you own bones? How much should you own in cash reserve? We will talk about this. Yes. Do you know?

No. Do you know black rock? Black Rock is the first. B is the second. asset managers and black rock holds more than 12.4 I think 12 more than 12 trillion in assets under management. 12 trillion is credible.

I think that they all let me just Google it quick.

Black rock assets under management AUM. This is 2023 now hold 12.1. Yes.

12.5. Yes. And let me look for

Wow. They have I

Yes.

Let me see if I have written post.

with one graph that if I can

no these are ETFs one month ago the number of do you know what is ETF

the number of ETF has to there are more ETFs more number of ETFs than

it's an incredible I mean like saying that there are more I don't know metaphors but being more than stocks is lot of layers of complexity if I can if I cannot th it black I will it this night I'm looking

for

yeah this was I was looking for this image are you guys here you are

look

they own the world and if you add to several s you will see that now more than 50% of all assets in the world are managed by less than 20 companies less than 20 companies man more than 50% of the assets in the world I'm not what does this mean

you know who the of power

Trump did once not first second or third thing Trump did when he was elected the not when he was elected when he reached to the to be the president was telling to one company in the of Panama and what yes sir yes sir what think is to tr yes sir you

at who rules the you see that this is power in the no

these numbers are incredible. What is Nvidia market cap?

trillion what has said what whatia what is the of new from the day before yesterday

you

this is one week ago that thatvidia was taking

nothing regarding China the announcement has been that Nvidia has reached an agreement with open AI in order to invest 100 billion Nvidia was invest 100 billion y no

Microsoft investion in open AI in 2023. This means that Microsoft has given the billion this means that Nvidia is going to give 100 billion. Careful. I want you to understand what I want you to understand this movement. Saying that I'm going to invest 100 billion does not mean that I'm going to give one I'm gna sign a check with 100 million. Envidia, howia is gna make this investment with data centers with services. Microsoft did his investment in open AI with services with cloud computing services. Microsoft gave money. Microsoft services. You understand what I'm saying?

This is not going to be asking the but what I want you to understand is that Nvidia has announced to invest in open AI. And what these two guys these two companies are doing they continue cycling. What happens if you stop cycling? What happens if you stop cycling? in order to continue cycling continue cycling.

incredible

un lower if you include to this and if you include the magnific will get market cap over trillion SP 100 SP00 total market 56 trillion.

What I want you to show you what I want you to realize is a bubble with AI

this valuations are valuations that has to do with trillions is incredible high and what NBA is doing with open AI making the bigger

Yes.

Have you heard about Ber? I mean I'm not missing this with Ber but one of the things Ber said when he was arrested Bern made 55 billion. One of the thing he said is I was expecting you to me earlier. I I didn't thought I didn't think I was going to stay for so long. I thought I was going to be earlier. Inertia. Inertia. Inertia. What I'm talking about, what I'm talking about is that now the is absolutely crazy in several. We talk about last class. My point of view from my point of view no matter which point of view this is crazy

someone that and then we talk about

we didn't talk.

What is the last piece of you have about

anything?

Trump reingedom

of speeed

of spe

if you don't you have freedom Is the crazy regarding politics?

in the same now united

the Brazilian one has talk about Palestina and Israel is the war Trump and I'm trying to I'm talking about politics. I try not to have bias. I don't know if I'm explaining myself

from yesterday say that in in United Nations in New York know what I have heard I mean I haven't read I haven't had time I haven't gone and I haven't even seen what said yesterday but Trump has said that United Nations makes no sense nowads

United was created con

are

crazy times I don't know if you agree with this definition crazy times polariz times of anger You have seen in this summer in California there were in the states in California and in several states and what I'm saying is that on one hand the war is regarding all these things talking about finance

the valuation of the magnificent s I don't want or the asset Rock andas. I don't want to compare one type of craziness with another one. But on one hand there is craziness regarding politics on the other hand there is crisiness regarding how assets these guys manage and on the other hand there is cris regarding valuations of AI companies of technological companies. One quick question. SP500 is going up or 500 up or

can go down is in historical maximum. So this means that it has gone up. But if you take out the impact of magnific has gone down imagine this class formed by 500 people and just seven people approved with really good rates and the rest fail. It would be fair saying that the class has passed.

What I mean is that if you see if you look at SP500 there are supposed to be 500 companies but we are only looking at

what I'm trying to transmit you is that the is crazy00

yes right

is

ok

properties of the return return on The asset is the variance and the covari between covariance between the and y is equal to zer this sign this

signbard means for all for all eyes in the world. Yes. So the the correlation coefficient between asset and all assets is equal to zer so if we have this on one hand no matter we can say this for all the assets. Yes. in the riset or any other asset as the weight weight A plus weight B it's equal one the spect return on a portfolio that consist on the asset and aight w

the weight of the spect return on that combines the W on risky asset can be written in this form and then can be also written as plus the times a min. Yes. What we did in the black before

and what is this that distance that I call this excess return or also expected exess return at the end what is that the idea is simple

idea is simple I am taking risk the I tak will

return you tell me you will take 50% of risk you will give me 50% of a trade

we will see you in finance at the end things tend to be simple Ratio. What is he ratio? Market premium the risk premium market we have not talk about the market yet. Risk premium over risk and ratio is something that everyone in finance that work in markets knows about. What is ratio? Divided respected return over risk. What people always look for?

relation

and the vari on the portfolio is

deviation of the portfolio is

so at the end the weight is going to be the relationship you can write this also in the the relations the weight on the I don't this

what is the investment opportunity set oh yeah we have done we have I know why we have calculate the weight in why the weight why we have calculate the weight in the sense in order to substitute it here and having the relationship between expect return on the portfolio and the risk on the portfolio.

this is another way in order to draw the equation return is plus the weight the is deviation on the portfolioation of theet on the stock

And what is this rati ratio market premium over premium over

deviation on the whis que

exocation

line

eh one quick example we have the example we saw in previous class we return from US quick spect return return from us and standard deviation from

US return from US is 13.6%

and the standard deviation is 15.4% per

numbers

the 5%

we can grow this in the blackbard but what I'm going to do is calculate instead of drawing I'm going

right

plus

50%

these are different ways

portfolio

on

the refers to

the deviation. No, the SR. Oh. SP

ratio. SP ratio that is RP- 33 over.

Yep.

Let me I'm going to do this in this in the way of

what we are doing

is solving this equation

and let me write

from here you can say that weight is

this yes and knowing this weight I can put it here and I can say that the return on the portfolio is the rate plus

a minus yes

and now what I'm going to do

I'm going to put here deviation volatility ok and I'm going to take this. Yes.

What is this? SR ratio and that is the slope of the line. This is the slope of the line.

The slope of the line is subra is return on US. En mi open paréntesis returno us

over

and I don't like

I I like percentages but not for slow make sense. And now once I got this

eh

if I know the weight I cannot use sub raio in order to calculate the return or whatever I'm going to use formula if I know the weight I'm going to calculate the spect of the portfolio by doing

premium numbers times the weight. Yes.

Which one is the formula? I'm calculating the return between plus

premium times the weight.

And in order to do things properly, let me fix this. Let me fix this one. And let me fix this one. Yes.

And thinking about

deviation.

absolute value of the weight times standard on US and exit. Yes. What is ABS absolute value? I'm doing this weight times are you following me?

Why absolute value because negative and I want the positive sign

so in terms of 7.7

documents and session.

Ok. So

which one will be this one? The 0%

5% and zero the risk and let me continue numbers.

Ok. Which one is this one? This is my

and

these are the numbers

the numbers that I have calculated with Excel these numbers let me pull it here in this if the weight is zer I have

If the weight is one I will have US 13.6% of return 15.4% deviation. Yes. If the is 50% 9.3 7.7 theight is 9.3.7 Yes. And I've got this line. And what if there is a negative way? There is a negative way. I will be somewhere here. If there is a negative way, standard deviation will be 7.7% % but the return because I am sorting in the the asset that will pay me a return return will be almost zero. I have a negative return of course. Yes. I lost money

how can I get a 17.9 expected return by invested by investing in US stocks on the riset? Can I get a 7.9%

return free is 5%

the return on US is 15.9% %

because I remember 15.4

how can I make off take this question how can I make 17.9% %

how can I do it let me just write this equation 5% plus min is 104% times weight yes

sense

is going to be equal

7.9%-

5% over 10.4

doing something

doing something incorrect.

This is going to be 12.9% over 10.4%. Yes. Follow me. What is the idea? 12 is higher than one. Can I get higher than one by

what I will do?

Any question?

And what is the standard deviation on this portfolio for this portfolio?

Higher than the standard deviation for me. Here the portfolio I'm looking for is this one. Yes, this has 17.9% and 23%. What is the idea on this? I am I have more than 100% a can get more than 100% a having less than 0% on the risk we and the point that the risk on this portfolio is higher than US looking for more return so I should pay increased

Can you do this in the real world? Yes. Can you go to the bank and ask for money? Yes. What is the point in lever aging? Lever aging using. What is the point? You are going to ask for the bank in order to you pay back to the you ask for a to the bank. Yes, the bank charge you a 6%. If you can get more than a 6% with this money, you will be making a good business. Makes sense. But if you are getting less than a 6%, careful because probably you will lose money. I'm not talking about getting a lower. I'm talking about losing money that you should you should pay careful with leverating because there are times that you can lose more than what you have. Makes sense

any questions?

Now

do you remember this thing regarding independence scores? You don't need to know anything regarding indence schools but the point is once I have this line depending on my risk profile if I am that I love risk I will be here or Jake that he hates ris I will be here and Lea that loves risk will be here depend on your risk profile. Okay. What if I have two risky assets? But you have instead of having this you can connect this with this one. Personally I don't like this graph. Why mean I don't like I have not changed it in order to say that I don't like it. Why? Because here

it looks like I taking the minimum variance portfolio. I'm not looking for the minimum varifo. All of you say I'm not looking for the minimum val I'm looking for the highest sub raing

for the tangency ok at the end we areing the what we will

First we will create the investment opportunity set. Next class we will see that I will not care to have two f or because I will draw five risky risky asset and I will always be able to draw the efficient frontier the efficient frontier will be a and I I will be able to look in the fis frontier

Rolio no.

So what I will always do first idea is create investment opportunity set.

I will look in the investment for one special portfolio portfolio that the highest rac and then I will ask what is your risk profile prefer more risk or

And let me just see this example in order we are not going to make lot of numbers with this. Please go to problem set two. You can do problem with all the information you got completely. You will have questions for sure but now you all have the information in order to go to do. Yes. Now let me give names. What is the name of portfolio A?

What is the name of this line? Opportunity. No. What is portfolio A?

Yes. Minimum vari

stock B.

portfolio C is ratio portfolio amortunio

with the highest ratio. Yes. Finally, what is the the answer to the question? What is your risk profile? I take the utility curve. This is the one tangent to the utility curve. It depends for utility curve and just think that is the question the answer to the question how much risk do you want?

And just let me do a quick example. Suppose portfolio Consist of 60% US 40% Japan

portfolio C 60% here

US Japan 60% and 40% Yes. Portfolio. Consolo.

Risk

and portfolio has 40%.

I have a 40% on the asset and I will have a 60%

of portfolio.

I have a 40% on the rest on portfolio C and as portfolio CIS on 60% on US I will have at 36% on this and I will have 6 times 4 24% on this and if you weights at the end I will have 100% so I have 36% on US 24% on Japan and 40% on the sense

have you underst today's class your commitment is a little bit more complicated than the rest of commitment. Yeah, you should go to Jeffre then I have hours I have hours but you tell him Jeff would be good for you and for him. I'll try to talk tell him that I will kill you engage will not knowing that you see the no have you underst this please go through problem two because next week I going to give you next in one week time I'm gna give you sample meter one and sample meter two. We are dealing with lot of things. Makes sense. So at the end conclusion of today's class next day we will start with this conclusion all investor hold combination of the two mutual funds. I have already spoiled this top the free asset and the tangency portfolio. No matter how assets are in the world, you will always look for the highest ratio portfolio and then you will combine this highest sub portfolio with the depending on your profile and investor conversion will determine the fraction of wealth invested in the asset.

We are going

on the syus it says two different things like October 15 and October 17

today I think it's Friday Friday I think it's on Friday

there is one special day that is a makeup Friday. Ok. There's like two different days on the next day on Friday for next

if you don't mind. If you can wait for one second, I can do better things here.

Yes. One second. One second.

Okay. Ah. This one explorer

um

no I mean one second only this

Friday 15

a small

with this computer don't want to open.

I could show you. So right here just says October 15 exam. Then when you go now it says October 17. Yeah.

¿Qué tal?

Perfect. Five. It's a