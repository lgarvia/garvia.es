---
Título: Foundations of Finance – Session 6 - Portfolio theory II
Fecha: 2025-09-17
Curso: Foundations of Finance (Fall 2025)
Sesión: 5
---
# Schematic Summary — Session on Two-Asset Portfolios (Return, Risk & Diversification)

## 1) Framing

- Continuation from last class: move from single assets to **two-asset portfolios**.
    
- Next class will add a **risk-free asset**; today is **risky A & B only**.
    

## 2) Notation & building blocks

- Asset A and B each have:
    
    - Expected return: E[RA],E[RB]E[R_A], E[R_B]
        
    - Variance / Std. dev.: σA2,σB2\sigma_A^2, \sigma_B^2 and σA,σB\sigma_A, \sigma_B
        
- Portfolio weights: wAw_A and wB=1−wAw_B=1-w_A.
    
    - Positive weight = **long** (buy). Negative weight = **short** (sell borrowed).
        

## 3) Portfolio formulas (two assets)

- **Expected return:**
    
    E[Rp]=wA E[RA]+wB E[RB]E[R_p] = w_A\,E[R_A] + w_B\,E[R_B]
- **Variance (risk):**
    
    σp2=wA2σA2+wB2σB2+2 wAwB Cov(A,B)\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2\,w_A w_B\,\mathrm{Cov}(A,B)
- **Linking covariance & correlation:**
    
    Cov(A,B)=ρAB σA σB\mathrm{Cov}(A,B)=\rho_{AB}\,\sigma_A\,\sigma_B
    
    so
    
    σp2=wA2σA2+wB2σB2+2 wAwB ρABσAσB\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2\,w_A w_B\,\rho_{AB}\sigma_A\sigma_B

## 4) Correlation intuition (why diversification works)

- ρAB=+1\rho_{AB}=+1: no diversification. σp=wAσA+wBσB\sigma_p = w_A\sigma_A + w_B\sigma_B (a straight line).
    
- ρAB=−1\rho_{AB}=-1: **perfect hedge** possible; can reach **zero risk** for a specific weight mix.
    
- −1<ρAB<+1-1<\rho_{AB}<+1: partial diversification; portfolio risk curve is **bowed inward**.
    

## 5) Opportunity set & efficient frontier

- Vary wAw_A from 0→1 to trace all **feasible portfolios** (risk on x-axis, expected return on y-axis).
    
- The curve forms the **investment opportunity set**.
    
- The **Minimum-Variance Portfolio (MVP)** = lowest σp\sigma_p point.
    
- **Efficient Frontier** = set of portfolios **above** the MVP (highest expected return for each level of risk).
    
    - Any portfolio **below** MVP is dominated (same risk, lower return).
        

## 6) Practical Excel workflow (class tips)

- Fix cells for parameters (expected returns, std. devs, ρ\rho); compute Cov via ρσAσB\rho\sigma_A\sigma_B.
    
- Generate a column of weights wAw_A (e.g., 0%, 1%, …, 100%), set wB=1−wAw_B=1-w_A.
    
- Compute E[Rp]E[R_p], σp\sigma_p row-by-row; chart **σp\sigma_p vs E[Rp]E[R_p]** to visualize the curve.
    
- Use shortcuts and anchoring ($) to avoid mistakes; sanity-check endpoints:
    
    - wA=1⇒(σp,  E[Rp])=(σA,  E[RA])w_A=1\Rightarrow (\sigma_p,\;E[R_p])=(\sigma_A,\;E[R_A])
        
    - wA=0⇒(σp,  E[Rp])=(σB,  E[RB])w_A=0\Rightarrow (\sigma_p,\;E[R_p])=(\sigma_B,\;E[R_B])
        

## 7) Language reminders

- **Volatility**, **standard deviation**, and (in this context) **risk** are used interchangeably.
    
- “Return” variants from earlier units still apply; today’s focus is **expected** (mean) return and **variance**.
    

## 8) Concept checks the instructor emphasized

- Weights must sum to 1. Shorting allowed ⇒ negative weight possible.
    
- Diversification benefit is entirely about **covariance/correlation**.
    
- For same risk, pick the portfolio with **higher expected return**; for same return, pick **lower risk**.
    
- You can’t “choose” correlation; it’s an empirical property of the assets.
    


# Transcripción
You have.  
Your production, it's higher.  
On the other hand, you have more time and also when you automatize things, you feel things that, oh, I'm happy of doing that, I didn't.  
Start with the transcript. I don't like to do this after.  
OK.  
And today I need the I need the link getting group because we are going to work with Excel.  
I I was looking for the other.  
This is I want to work with.  
And you are.  
Yeah.  
Right.  
Bye.  
Yes.  
Oh.  
Yes.  
OK.  
I'm.  
It's Excel. I don't like it. It says.  
So the other day I like.  
You didn't came, Isan, but the other class, the other day, the class was not one of the classes I felt more comfortable with. You. You know what? Oh, you don't know it. They know it.  
Because there was one person from the stand. She was lovely, Carol. Oh, she was watching you. Yes. And at the end it makes you be more confident what she could be thinking about what I'm and it makes things a little bit flowing.  
But whatever, normally, usually I should have written one formula. I didn't do it. Why I should have written this one formula in there? There is one formula that I have written on this that is or is invaluable. See what future value over one plus.  
We are not going to work with this formula. This formula will have an impact during the whole course when talking about portfolio theory.  
Not that much. Not that much much. I have already worked working, yes. What are we going to do today?  
Today, the other day we were talking about portfolio. What is a portfolio? At least two stocks. Today we will work with a portfolio for my shoe stocks.  
Next next day we will include our grease free asset.  
What we'll see next day what is a rich bee asset. We make a spoiler. A rich bee asset is and I said that no matter.  
What will happen? Go ahead. It will give you a fixed return. So the variance of the risk recipes will always have same return of the risk recipes 2%.  
What does it 100% make sense?  
And the covariance between the and all of the arsets in the war is here because makes sense to me. At least for what are we going to do today? What with two stars?  
The other day, we were talking about one stock, another stock. We can read the other days.  
Today, instead of talking about the average, we will talk about the expected return.  
Then variance variation. Well, I mean you have to not only have variance variation and inspect the return for each asset. Not only you have variance of each asset, but also you got.  
All should be put.  
And.  
I have.  
Let me this is.  
Specter return a message. Hey, yes.  
Take the return, nothing 8.  
Stigma, stigma, variance when I said hey, yes.  
And I said hey.  
This is deviation, the square root of variance deviation. Make sense.  
On the other hand, I'm going to have expect the return when I said P.  
Valiance, deviation, all of you are with me.  
Yeah.  
And also I'm gonna have.  
Covariance between A and this.  
OK.  
Now what we are going to do today?  
Today we are going to combine. Today we are going to combine asset A and asset B in a portfolio.  
I have 1000 euros.  
How much do you want me to buy or I said pay?  
Big weather.  
Of 10,000, so one person.  
If I buy 1% on asset A, how much I will have on asset B, be raised 99. Make sense.  
Let me call.  
Wait a the person dates I went by and I said hey.  
And we go way B.  
Oh, the backpack was touching, but then Nicole will be the person. Make sense.  
OK, considering this.  
They combine weight date and will be in a portfolio is.  
The question is what is first?  
Expected return on this portfolio and 2nd what is the variance on this portfolio?  
The specter returned.  
On the preference.  
Inspect the return on the portfolio.  
If the waves were 50% at 50%.  
The person.  
Expected return would be 50% of this and 50% of this.  
Yes.  
Yes.  
Are you following me?  
93% on one and 4% on the other one. I am taking one and one. I will be here. I just add expect to return on one and expect to return on the other one and I will get the result.  
And if instead of having 100%, I have have, yeah, I just move it back like the ice.  
Wait a thanks. Expect the return on a plus. Wait B times expect the return on B. Make sense.  
This.  
Another it. Away there, yes.  
OK.  
Because I have more walls, more black walls, I'm going to move here. All of you.  
Sorry.  
OK, regarding this vector return on the portfolio, no problems.  
This it's a little bit more complicated when talking about the variance of the profile. Why? Because.  
When considering variance of the portfolio.  
Not only have the variance, but also covariance. The covariance has an impact in the variance on the portfolio. OK.  
How do I calculate the variance on the portfolio?  
The variance of the portfolio is variance. The first one that's variance on the second that sometimes covariance. I'm careful because careful because I have ways. Yes, let me write it here.  
Variance on the portfolio, yes.  
It's going to be equal to weight a raised to the square. Variance a raised to the variance. Sorry.  
You gonna follow me?  
Plus.  
Weight B rise to the square covariance, yes.  
Plus.  
Two times weight A, weight B.  
Go by and between A and B. Make sense.  
I'm here with me.  
You're going to see this formula in the next classes. I'm going to write it more than 1020 times and in Excel today more than more than 20 times that formula. Yes, don't worry because you will get used to that formula.  
I'm going to make a spoiler. Yes, in order to do that's up of and then we'll come back. We'll we'll go later. Covariance, covariance.  
What can covariance tell me about the relationship between this true stuff? Do you remember from the other class the Monday's class? What covariance tell me?  
But that's when it's good.  
Yes, I'm.  
Yes, and the sign sign. If it is positive or negative, it will be something. Yeah, they go together. Yes, if it is positive, they move together. If it is negative, yours.  
Hello.  
And if covariance is 100, does it tell me something? Now what should I do? Correlation coefficient? Do you remember correlation coefficient? Correlation coefficient? What is the relationship between covariance and correlation coefficient?  
Correlation coefficient between A&B is equal to correlation coefficient is equal to covariance between A&B over deviation A deviation B. Yes, do you remember?  
Let me.  
From here let me covariance between A&B. It's equal to correlation coefficient times.  
Where do we meet?  
So knowing this.  
Let me rewrite this equation.  
Let me.  
We write it's a question and instead of writing here.  
Mobile audience.  
I'm going to write deviation A times deviation B times.  
Correlation between me and me makes sense.  
Correlation coefficient is a number that could range from -1 to 1.  
OK, I'm gonna clean this up.  
All of you will be noticed. It is the variance on.  
Me.  
Write this into another way.  
Yes.  
Saying no.  
Same.  
Grade A.  
Variation A times weight B. Variation B, yes.  
Are you following me? Imagine that correlation.  
Coefficient is correlation coefficient would be one.  
The correlation coefficient will be one.  
Don't you see that piece?  
Is the same than this and this is the same than this, yes.  
If correlation coefficient, let me one.  
Do you let me just for one second call this A and call this B?  
Job.  
This is a.  
And this is me, yes.  
Correlation coefficient is 1.  
I have.  
No.  
Variance on the portfolio is a square.  
Isn't it?  
Plus b ^2 + 2 * a * b * 1.  
Does that formula look familiar to you?  
We go here, just one second. A plus B squared. A plus B squared is equal to.  
That's B and this is equal to.  
A square B square plus AAA times BB times a. So 2 * a yeah, yeah.  
Yeah.  
Sorry for having done this.  
So correlation coefficient is what variance on the portfolio is weight a times variation a.  
A+ weight B times deviation B makes sense.  
This is equal to a + b square, so the square root of this is equal to this. Make sense?  
And then?  
If correlation is negative, yes, negative one. Perfect and negative I have.  
The same but instead of plus minus no. So I have the other one that is exactly the same but minus minus -2 times AD that is exactly the same. So I will have here.  
That the variant deviation deviation on the portfolio is weight A times deviation A minus weight B times deviation B. Make sense.  
Yep, OK.  
Have you understood these these numbers?  
You have understood this. You are done with today's class. I'm going to review everything. Yes, the weight. Yeah, weight is a percentage. OK, and and thanks for that question.  
Because I have forgot writing one more equation, weight A plus weight B is equal to.  
1% and 99%, 100%, yes, it's weight.  
OK. And glasses somewhere here.  
I don't know where I have thoughts enable anything but.  
I don't need to add anything portfolio theory. What are we going to do today?  
We are going to go work with.  
We are going to introduce the concept of portfolio, then portfolio expected return and the variance on the portfolio.  
And once we have, we've got this, we are going to work with one sample profile, OK.  
What is a portfolio?  
A portfolio is a combination of a number of assets.  
And what is the weight? What is the weight? The percentage of the asset that you have?  
Then.  
The sum of all the weights is equal to.  
But i'm saying  
Where it is, you have 100 euros, 1000, yes.  
Would you have a negative weight of buenosit?  
Jake is saying no.  
Common sense tell us that no, but.  
Imagine that I have asked Perla and Perla has told me 1% of 1000. What if Perla would have told me?  
-20%.  
What does to have a 20% on one message? It means that I am buying with my 1000 a percentage. I'm I'm dedicating 1000 to buy.  
If a positive weight means buying.  
A negative weight will mean.  
If you buy, you can wait for how long you buy, you can wait for a long time.  
Can you sell something without having it?  
Can you sell something without having it?  
Yes, you can. You can sell something without having it.  
But if you sell something.  
And when I save you.  
Amazon stocks.  
I will gave you the stuff this night.  
What should I do?  
When I give you the stuff, that's what I do. I've already sold it.  
What should I do?  
Proceed I don't buy them. I will go to jail.  
You see what I mean? A positive way means buying. A negative way means selling shortly.  
Short because of short time. Have you ever have a long and short, long and short? Long is buying the buyer's position and short is the seller's position.  
We will talk a lot about this. We will talk a lot. And not only we will talk when talking about the theory, but also when talking about them.  
OK.  
Hey, hey, hey.  
What is the return on our portfolio? We have already gone through this, yeah, wait times return, wait times return and so.  
If I have what? What about the variance on a properly? If I have two? If I have two, this is a form graph that I have already showed you. What is this? This is the covariance, isn't it?  
This is the covariance and if I have more than two two classes, we will go with more than two what we will have here.  
Looking this way, looking you look in this way, probably you cannot compare that what we have is.  
One we have two big covariance between 1:00.  
And two covenant between one and three covenant between two and three.  
One that is the covariance between one and two and the covariance between one and two is the same. That's not what I mean.  
Is 1 is a symmetric matrix 2-3 this we have the regarding this you don't need to. We are not going to work a lot. Now we will move just a little bit in the interim. We are not going to ask. I'm not going to ask you about the covariance matrix.  
This has to do more with the statistics, but if you are working with big amount of data, this will be. But this has more with the statistics. Make sense? What is this? The covariance matrix at the end. If you look at this formula, it's the multiplication of amatrics. Get it.  
But today we are working with just two stops. You don't need to worry about more than two stops.  
OK, and here I've got one example.  
Let me.  
I've been teaching this class before. OK, I have.  
Two stops.  
USA.  
And to us, one from US and another one from Japan, yeah.  
Expected.  
The expected return on US is 13.6% and the expected return on Japan is 15.0% for it.  
OK.  
Now volatility. Careful again. Careful with language. Do you remember when talking about the value of money? HCRERAER. First time you look these things.  
It looks completely. It can make you feel misunderstood.  
But after you get used to these things, we know that volatility, variation and risk, volatility, variation and risk stands for the same and then valiances.  
Volatility, variation or risk rise to this work. Careful with risk because later we will see that we can call risk other things.  
But language is important, yes.  
Thanks.  
Sorry, no.  
The sooner I have told you that volat volatility.  
Volatility is deviation, yes.  
50.4%.  
And 23% and then what else do I have here?  
I have the corporation coefficient that is 27%.  
And that's it.  
OK, now in the correlation coefficient I can calculate the covariance.  
What is covariance correlation coefficient times?  
Deviation one times deviation 2 makes sense.  
OK, now I'm told that I have a portfolio with weight A and weight B.  
Well, A is 60%.  
Makes sense.  
With bees.  
1 minus weight day that will be 40%.  
OK, now I'm going to calculate the return on the portfolio.  
The return on the portfolio.  
Simple. The return on the portfolio is going to be way day. Thanks.  
Return it.  
I'm going to fix.  
This. Yes. Why? Because later I will drop. You understand what I'm doing by thinking. Have you used Excel?  
And do you know how to fix yourself?  
Yes, Perla. Perla. No, don't worry. No, don't worry because you will not need to use Excel. But understanding this is important and in order to understand this Excel would be really interesting.  
Weight A plus weight B times.  
Yeah.  
Fix this.  
Function a four that is dollar.  
14 point and the USA all in those asset 8.  
And Japan, let me call it asset B. I'm also I don't want to a nervous say fast. I like to do this at the beginning or at least. Oh, this is a new class session.  
Sorry, anyone that I have reconsession with this.  
One of the bin and two in the middle. OK, thanks. And session 6.  
Makes sense.  
What is the return?  
Wait times return plus wait times return. The formula that you've got there now.  
Let me calculate.  
They.  
Yes, yes.  
Variation on the portfolio is that formula. Yes, I don't like how I have is that formula.  
Two times weight a aviation. Two times weight a will be provided, yeah.  
This formula, first thing I should write, I want to calculate the deviation that is the square root of the variance. No. So let me start by saying SQRT square root.  
And now inside.  
Do you know what what is chorizo in Spanish?  
But with a different taste. Chorizo is sauces, but with a point of pepperoni.  
Let me look for cholizos.  
Have you ever heard the word chorizo? Yeah. Chorizo also means bad. Who do you call? Lather. Lather. Lather. Yeah, Robert. Yeah. Chorizo. Also, if you call someone chorizo, he would see you are calling him Robert.  
And this is actually, yes, yeah.  
Also I call we are we are going to see formulas bigger than this. I used to call them choritos also.  
It's a victory, yes. Yeah.  
OK, sorry for this culinary, if anyone of you is better.  
I am. Please forgive me for putting sorry. If you are not beggar, anyone is not. No, not you is beggar. So you those are wonderful. Don't begun this because they could be.  
I I know that I cannot and I will never ask you about religion, about gender, about sexuality, or about ideology. Yes, ideology.  
I don't know if big Megan has to do with ideology. Is there any shifters in the class? Shifter. Yes. Swifty. Swifty. Swifty. Sorry. Yeah.  
Are you 50? I I respect her a lot though, but I just don't listen to her music. OK, now it's because I cannot ask about politics. I mean, I would never ask, but asking about 50, I don't know if it goes inside politics. What do you think? Sorry for this parenthesis.  
I'm trying to talk with. I mean, if anyone is a Swifty, I don't want to go over there.  
OK, let's start with the Toledo. Yes, SQRT and now.  
Look, wait A.  
Thanks.  
Polativity A and I'm gonna fix it, yes.  
Rise to this word plus.  
Wave B.  
Thanks for the TV. Let me fix it, yes.  
Price to the square plus two times times.  
We they times, we we times.  
Covariance that covariance is variation times variation times correlation. And let me fix this one also. I close the parenthesis of the area of the square root.  
And let's see what happens.  
Perfect 14.60.  
All of you are with me.  
What is this? A portfolio that has a 60% of US and a 40% of Japan. And I have this variation and this is Pedro Rico first thing.  
I'm going to do it and check my numbers are correct or not. Oh, I'm going to check this.  
When I write here, see the person.  
If I have a 0% on US, how much I will have on Japan? Yes. And what should be the deviation on the return on my portfolio?  
13.  
If I have 0% of US.  
Yes, yes, yes.  
We don't should be.  
Yeah, I'm still down 50%.  
Let me see.  
Perfect. If it is 100, but I will have.  
It makes sense.  
OK, right here, 0% on one hand.  
What I'm going to do? I know just because I have Excel instead of calculating 1 portfolio when I calculate.  
Let me here have this plus 1%.  
That is going to be 1%.  
And.  
Up here 1%.  
And then me.  
Yeah, what I'm going to do with this one.  
And this.  
Are you seeing that I have here?  
I press control at the same time that I press arrow. I maintain control there and if I press control again, where I'm going to go?  
Yeah, on the right.  
I'm at the end of Excel.  
Reaching this point and this is almost impossible, but I press control.  
I go to there, yeah, it jumps in the next. If it is empty, the next with information, if it is full, the last with information makes sense.  
Short cats.  
Are as powerful as automatization. If you repeat something so often, there should be a shortcut in order to automatize the process, yes.  
Why shortcuts are important? Because it saves time. It gives you oh, it gives you life.  
Give you time in order to do whatever you want to do instead of being doing and repeating and repeating the same activity. Yes, automatizing is one of the most important things you can do in life, but if you just automatize, you will become automatized, automatized.  
Automatize. Automatize. Not only you should automatize things, you also should stop. I think what you are doing and enjoy it. So until because life has to do with that. Make sense. Oh, sorry.  
Have this one.  
And what do I have here? All possible propolutes.  
And I'm going to.  
Sorry.  
It.  
Let me.  
What? What is this?  
Did you start it up? Yes.  
That represents on this axis, on the X axis.  
Is represents.  
Aviation, volatility, and we call it risk.  
And on the Y axis we represent we go. Which one is this point? Let me let me come here. Which one is this point?  
That's all money. Absolutely. I was thinking about your 50%. The 50% that you have told me before is this point. Yeah, which one is this point?  
The US.  
OK.  
Understanding this graph is really, really, really important for today and for what are what is this? What are all these points?  
Where are all these points?  
All careful because does this finish here? I put short here, here in this point they have 100% of Japan.  
I can start sorting on in order to buy for Japan and this will continue this way. On the other hand, from here, from here I could sort.  
Japan in order to buy more.  
Will it make? Will this make sense?  
No. Why? Because if you short Japan, that will have a higher return.  
In order to buy US that will have a lower return, you see what a disaster business it is.  
Thanks for that smart. You see the disaster of it, no?  
But what is this line? Considering that this line will continue this from here and from left, what does this line represent?  
All possible combinations of portfolios. This called the investment opportunities.  
This line is the investment of our communities. Okay? Thank you.  
Another idea you can.  
Yes.  
Or much of Japan.  
What do you prefer? What do you prefer, Japan or US?  
What do you prefer? Yeah, if I don't do this.  
And what?  
Yeah.  
Regarding if you compare Japan with US, it will depend. It will depend on what? On your risk profile.  
You want Japan? You are probably more Rico, but there is more risk. You don't want want something chill, more chill.  
Yeah, make sense.  
Let me make another let me ask another question.  
Yes, yes.  
Dave, which portfolio or which? What do you prefer US?  
For this portfolio, that one, but.  
Why? Um.  
The return higher, Yeah, we.  
Are you return with same risk?  
In Greece, there we go.  
Yeah.  
Solve.  
This is one question that I will ask in the video. Imagine that you are you only you can only choose. You should choose, you should choose and you can only choose.  
Between a combination of US or Japan, if you are absolutely risk alert, you want the lowest risk possible. You cannot answer. I won't buy anything.  
You should buy, yes. Which portfolio will you choose?  
They're looking for the less risk possible.  
Which portfolio will you choose?  
One portfolio that is the one with the minimum variance. What are we going to call that portfolio with the minimum variance?  
We are going to call it MBB. That is thanks for.  
And it is transfer.  
I know what you're thinking. Can you be stand for?  
Most valuable player. Now MEP stands for minimum values portfolio. Well, we're going to call the minimum values portfolio.  
OK, sorry for this.  
They're talking about three. I just talk about maths or if this whatever MVP, meaning variance portfolio.  
If you have a portfolio under the MVP, you will always have a portfolio that will give you the same risk, more return so.  
If you are rational, you are rational. You will never take a portfolio under EMEP.  
Makes sense.  
What we call, what do we call all portfolios that are over the MVP, we will call them.  
We will call it the efficient frontier. The efficient frontier. Why a frontier? Because this is a line. Because in two classes time we will talk about more than two stops and we will see that there is a cloud of points. Make sense.  
Yes.  
OK.  
Make sense?  
Hello.  
Yeah, Carol. Carol told me that I say it makes sense a lot of times and that it could make sense in my head, but not in yours.  
No, she's wrong. It makes sense to me. No, no, no, no. She's not wrong. She's absolutely right. And she's lovely. Absolutely lovely. And also she told me.  
Do you know how old you see?  
Cucon in Spanish.  
Coupon and don't ask me why I used to say call home or call home. I don't remember who they what did they say? No, I prefer not to, but it's coupon coupon.  
Yeah, whatever. Doesn't make sense. So all the times I'm going to whatever. I really enjoy because at the end.  
Feedback is always great and she knows a lot about about looking at teachers working and she knows.  
I don't know it more, but she knows a lot about feedback because she gave me feedback and I feel like, oh, and also she did me a little bit, but but I really like it. So giving feedback and not putting people in yes.  
Make them recite is good. You see that one, no? Yeah.  
Makes sense. Yes. OK, let me come here.  
What is this? This is an example and these are the numbers of that example. We did it in Excel and also then we can not only do this for one example, we can start changing.  
The weights, that is what we have done and if we start changing the weights, we will do this graph that we have already got. OK, you have this graph.  
What is the investment opportunity set?  
All possible performance.  
Then what is the NDP?  
Then an efficient portfolio is a portfolio that has the highest possible expected return for that given some.  
And then the fishing frontier is the set of fishing poholes.  
Another thing regarding the other takers for me.  
I thought before the class because in the morning. In the morning I have forwarded. Oh, OK, sure, you understand this. OK, so yes, another thought. I want to be transparent and this is in my head and I.  
I started class last Monday in the morning saying oh what has happened during the weekend? Nothing has happened because Frank didn't leave you and with the main students all of them. I feel, I thought, oh, nothing has happened, I said.  
I felt as if something had to happen. I'm talking about Charlie here. Yes, Charlie here because the other day we talked about it.  
I would do maybe.  
I I once I realized about Charlie how to have saved his name.  
Once my students knew, I was thinking about him.  
I am not sure why it happened.  
I think that probably they want to hear what I was going to say. Also, it was Monday at 8:00 in the morning. Everyone was asleep. But when they realized that I was thinking about Charlie, no one talked.  
I felt as if someone has died and I and they one minute of cycles. Why? Because someone has died.  
And it was OK. I went up out of that class. I called my wife.  
I told her what had happened and then my thoughts. I go like, oh, and this afternoon I have class with NYU students. In my head, sorry, it has to do more with MAGA. I don't know if two lady students could support more Trump than others.  
This is NYU. And then I don't care about you guys, but also I was going to have Carol in my house in my class. So someone from yesterday is going to call probably start talking about Charlie.  
Intelligent way. I don't want to change and I'll try. There is freedom of speech. Yeah, yeah, but sorry.  
I don't want no, it is really not a speech, but I don't want to.  
Be something. Sorry.  
Sorry, I know I cannot say that, but I cannot. I have already whatever.  
Carol didn't know Charlie before the class.  
Carol did it and she was surprised. You have had as if they all of them knew I have and I told her.  
Because all of them knew him before. Yeah, all of you knew him now.  
You give him all of them notes and today I have had a class with the Spanish students.  
As students.  
Sure.  
All of them. I have seen him in Victor. I have seen small videos. I know him. I asked him.  
What about what he used to say? They have, as we back, simple thoughts for the most whatever. I don't know if you support him or not, but it was like tweets, tweets, tweets, tweets, provocatives, tweets, tweets, tweets. But the point is not on what he said.  
The point is that I in the know him, Carol, in the know him, all people in the States or in Spain, in the know him and all young people in Spain, in the States, know him. I'm talking about a generational.  
I'm talking that Trump used to talk about one wall between countries, but the wall is not between.  
Countries, the world, the God, sorry, has to do with there is a generation of God.  
And and for me, one stern professor that is expert in education.  
She didn't see. She didn't see on class. That's what I'm saying. Yeah, it's a thought. I'm saying it's not. Would you? But for me, it's important.  
I was surprised that she didn't know who that was, to be honest with you. Like even like like my parents back home in the States, like they knew who it was. I don't think to be honest, I probably knew of him. Like they knew of him because he was a very controversial figure. So I just it was surprising for me. I understand why I ended up with the.  
A little bit different, but I don't think at least in the US it has to do with something generational. I was very surprised that she had never heard of him anytime.  
In my opinion, honestly, I think it's like I'm honestly not surprised that she hasn't been there. And because the one I've seen is like on TikTok. Yeah, that's true. And I don't like TikTok and I don't like to talk to people on the news.  
That's fair. Yeah, it's a good point. Thanks for this because this compliment my surprise.  
And at the end we are used to what sounds familiar was and.  
For and and I will continue. Guess what? One of the things that probably will surprise you personally that day is a Thursday, Wednesday before. I will do my best in order to tell you that. Happy Thanksgiving.  
You will be surprised that no one in Spain cares. There is no transgiving in Spain. Nothing happens and there is that.  
Also has to do with if you are looking TikTok, probably you have not seen him.  
And also there are controversial figures, but there is one point with I'm thinking about Spain.  
And I'm going to say I want to talk. I'm thinking about Spain, but I'm going to talk about travel.  
Probably if you are American citizens and thinking about politics in Spain, you will be tired of controversial figures and you will be tired of migrants.  
I said it's fair to say that. Yeah, it's true. I'm not saying I don't. I'm tired of so much. Last semester I did some way students and they they took a plane.  
Go back to the in the in the airport. There was chocolate with Trump's face chocolate.  
And translates.  
I have never seen chocolate with the face of Ambari. We will see in the near future of chocolate with Pedro Sante face.  
Thinking about politics, I want to hear speeches. I want to hear opinions. I don't want to see the face of the candidate on a soccer in car. But things are whatever. OK, thanks a lot. He said and everyone and everyone. Thanks a lot for.  
So at this point.  
Thanks also for the figure of being a surprise speaker. Yeah, I will. OK, for this.  
Now.  
Japan, US, you can short US. We will go, we will go deeper. Not today, we will go deeper in the notion of shorting in the future and you can short Japan. It would make sense.  
It could make make sense to serve US.  
Does not make any sense to sort Japan. Why? Because the sorter you will be calling Japan.  
The more expensive piece, that's what I mean, buddy.  
Yes, one more thing, one more thing.  
Now.  
I am representing the square root of this and also.  
I'm representing the communities. I am 10 and I am representing.  
Risk and return. Make sense.  
You can. You can change. You have two stops. You can change weights.  
You can change weight and it's what I have done. You can never change correlation. You can never change the correlation because correlation is what it is. What I'm going to do, I'm going to start changing correlation.  
OK.  
In order you to see what is the theft. So what I'm going to do is there is no more Japan and US anymore and what I'm going to do is and then returns and deviation. I'm going to start changing.  
The assets. Why the assets? Because I'm going to start changing the correlation.  
OK.  
I'm going to start writing. Sorry, correlation, correlation. Yes, I'm going to start with.  
Perfect correlation.  
Perfect correlation.  
If correlation is perfect, yes.  
This correlation is perfect.  
Expect the return. Expect the return. Is this one? Yes.  
Our nation is perfect, the deviation on the portfolio.  
It's going to be weight A deviation A plus weight B deviation B, yes.  
Make sense?  
What is that? They represent that.  
This is proportional. Everything is proportional to everything. If I increase a percentage, we increase a percentage in all what I will get because it's proportional. What is this?  
This is the equation of alignment.  
Let me this is a question or why me just write 100%.  
And what I did? All right.  
Jake.  
Same question that I have that I have as you before, yes.  
Here you cannot find. Let me come back. I forgot to tell you one word.  
When I ask you between to choose between this one and this one and you choose this one.  
What are you doing with you with part of US risk?  
This part of the risk. Have you ever heard that word? Universified? Yeah.  
If correlation is perfect, you cannot diversify.  
You cannot be versatile.  
What is a perfect correlation means that both assets behave the same, looks the same, are almost the same.  
What does not being able to diversify means something bad, because you cannot get that position where by buying part of the other stock you are in a better position.  
Make sense? Not only.  
Not only think in terms, not only things in terms of risk, also think in terms of return. If you cannot diversify, you will be somewhere there. So the portfolio, Jake, what you see.  
Not only give you a higher, we don't also have less risk than the one in case you cannot diversify. Make sense.  
OK.  
Yes, OK, I'm gonna start 90.  
7020, yes.  
Sido, Sido, yes.  
A moral different stops.  
And more different people, huh?  
Vivek.  
Talking about people, I don't know if this is correct or not. Personally, not only I think it is correct, I like it. I like to think that the more different we are, the better.  
10% Yes. Oh, oh, no. Oh, sorry. No again. Why? Why?  
Hi, I am Tulsi.  
I'm touching. I was touching. Sorry.  
14.  
10% -, 50% Yes, we are. Oh, that part is wrong.  
Sorry, let me let me go quick. Let me go quick, quick.  
Carol, over there. Sorry, look, please. So yes, one second.  
I I normally I do this with more emotion, yes.  
Yeah.  
If correlation is perfect negative, look this is also a line that is that the equation the one you have on the on the on the bottom. Yes and what? Which one? What about the minimum variance portfolio?  
There is perfect negative correlation.  
Is this zero risk? It's a zero risk. Not only you can diversify, but if there is negative correlation, you can construct a risk free portfolio. Yes, call me back here.  
Perfect correlation. I have already told you this. Then you can change correlations and you can create a zero risk portfolio and here you are to calculate this, but we are done. I'm sorry for the time.  
No, I I thought I was looking at this for next day, I know.  
And I'm going to share this. I I will recommend you try to do this by yourself. Please excellent. But I'm going to share it.  
Thank you.  
Definitely. Um, probably.  
Are you ready?  
Can I tell you? Yeah, of course. Oh, I I have not. Yes, one second, because I have forgot to say, Jake. Yeah, yes.  
I have. I have been. I have not say a word. Let me write it because I want to tell you I for go to.  
Say, you know, oh, today.  
Today, but today is the day. Yes, sorry, I have forwarded to say, but this is good. Yes, you can go if you want.  
Welcome. Have a good one. You too. This term. I'm not because once I close this, I can be perfect. Oh, Professor, I just want to say I do appreciate when you talk about that stuff because I think it's super interesting. So I just didn't know.  
I I just want to say I have an appreciation for it when you bring up like you like it. I really enjoy it. I think discourse is important. I think sometimes people are afraid to say what they want to say. So I like appreciate when someone isn't.  
Thanks. Thanks a lot. Because for me this is important because you don't know if you are doing. I mean, I do what I think is correct. And the more I teach, I realise that. I don't know if what I'm doing is teaching or not. The more I say, I realise that.

![](file:///C:/Users/lgarv/AppData/Local/Temp/msohtmlclip1/01/clip_image002.gif)**Luis Garvía Vega** ha detenido la transcripción