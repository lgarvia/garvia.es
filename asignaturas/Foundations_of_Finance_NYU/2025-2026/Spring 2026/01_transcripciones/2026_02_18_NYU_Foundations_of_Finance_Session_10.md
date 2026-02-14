# Foundations of Finance (FoF) – Session 10  
**NYU | February 18, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 14min  

---

# 1. Context Before CAPM

You insist (correctly):

- Session 6 → Investment Opportunity Set
- Session 8 → Risk-free asset + CAL
- Session 9 → Systematic vs Idiosyncratic risk

If those are not clear, CAPM becomes memorization.

If they are clear, CAPM becomes obvious.

---

# 2. From Markowitz to CAPM

Markowitz world:
- Risk measured as variance
- Efficient frontier
- Tangency portfolio
- Two-fund separation

Problem:
Variance is complicated.

CAPM solution:
Replace variance with Beta.

---

# 3. Big Simplification

Instead of:

$$
\sigma_p^2 =
w_1^2 \sigma_1^2 +
w_2^2 \sigma_2^2 +
2 w_1 w_2 Cov_{12}
$$

We move to:

$$
\beta_p = w_1 \beta_1 + w_2 \beta_2
$$

Linear.
Clean.
Simple.

---

# 4. The Market Portfolio

Key idea:

If everyone:
- Has same expectations
- Faces same information
- No taxes
- No transaction costs

Then:

The tangency portfolio = the market portfolio.

The market contains:
All risky assets.

---

# 5. CAPM Assumptions

Strong assumptions:

- Perfect competition
- Divisible assets
- No taxes
- No transaction costs
- Same expectations
- Same information

You explicitly warn students:

> Simplification helps understanding.  
> But simplification can be dangerous in real markets.

---

# 6. Beta Definition

$$
\beta_i =
\frac{Cov(R_i, R_M)}{Var(R_M)}
$$

Important:

This is NOT correlation.

It is a regression coefficient.

---

## Interpretation

- β = 1 → moves like market
- β > 1 → more volatile than market
- β < 1 → less volatile than market
- β = 0 → risk-free asset

---

# 7. The Security Market Line (SML)

This is the core equation:

$$
E(R_i) =
R_f +
\beta_i
\left(E(R_M) - R_f\right)
$$

This is CAPM.

---

# 8. Interpretation of the Equation

Return =

Risk-free +
Beta × Market Risk Premium

Where:

$$
Market\ Risk\ Premium =
E(R_M) - R_f
$$

Only systematic risk is priced.

Idiosyncratic risk is not rewarded.

---

# 9. Capital Market Line vs Security Market Line

## Capital Market Line (CML)

- Risk measured by standard deviation
- Applies only to efficient portfolios

## Security Market Line (SML)

- Risk measured by beta
- Applies to all assets

This is a critical distinction.

---

# 10. Conceptual Shift

Markowitz:
Risk = total variance.

CAPM:
Risk = covariance with market.

This is the intellectual leap.

---

# 11. Why CAPM Simplifies Life

In Markowitz:
Need full covariance matrix.
Huge parameter explosion.

In CAPM:
Need only beta.

From:

N(N−1)/2 parameters

To:

1 number per asset.

Massive simplification.

---

# 12. What Students Must Understand

You emphasize:

- Do not memorize blindly.
- Understand logic.
- Understand how investment opportunity set works.
- Understand risk-free combination.
- Understand systematic risk.

CAPM becomes natural after that.

---

# 13. Core Message of Session 10

We no longer ask:

“How volatile is this asset?”

We now ask:

“How does this asset move relative to the market?”

That is beta.

---

# 14. Philosophical Note (Your Warning)

Models simplify.

If people:
Use model without understanding assumptions,
Markets break.

CAPM is powerful.
But it is built on fragile assumptions.

---

# 15. Transition to Next Session

Next step:

- Deeper into beta
- Derive SML graphically
- Pricing implications
- Mispricing detection

---

# Final Summary

Session 10 is the birth of CAPM.

Everything now reduces to:

$$
E(R_i) =
R_f +
\beta_i
(E(R_M) - R_f)
$$

If a student truly understands this equation:

He understands 50% of modern asset pricing.



# Transcription
18 de febrero de 2026, 5:11p.m.
1 h 14 min 17 s
I'm sending transcripts because I think it helps if you want to go, if you need to go quick, what would have done? For example, if I'm talking with you and I say session 6 is important, session 8 is important.  
That way way in order to go, understand, review at the front streets.  
We never should be here working and understanding. Yeah, at the end. This is 1 important idea. Then today we have a lot of things to do, several.  
Here. What is? Oh, okay.  
I have lot of things to do and I prefer yes to go.  
Step by step.  
To see on.  
OK, exit is here and then.  
Problem set two. We are gonna go through problem set two and also session 10.  
OK. Today we will start talking about CAPM.  
But but.  
You don't really need to worry too much about Kapem.  
You should worry about session 6.  
Then session 8.  
You can for.  
Last class.  
Was important in order to understanding was import, but but you don't need to worry regarding last class. Regarding last class. You don't need last class in order to fully understand problem set 2.  
But it's one big more on the wall.  
But personally, I am not worried about someone missing last class. I'm worried about someone not understanding session 6 and session 8. Session 6, we introduce the investment opportunity set.  
Session 7, sorry eight, session eight, we start talking about the risk free asset and combining the risk free asset with an with a with a with an asset. Yes, then.  
This is a piece. This is important for everyone. Today is Wednesday, yes.  
Next week.  
We will have happen to.  
Next week you should deliver on Wednesday from set three, problem set 3.  
With what we are going to see in today's class, you have almost everything problem set three. Most difficult things you are going to find problem set three are the same difficult things that you should find. Problem set two. Kapem summarize. Kapem is more simple.  
Nothing.  
You're not really difficult.  
Simplifies all right and then.  
March the same one.  
March the 2nd plus will start at 3:30.  
In Palacio de la Bolsa, that is close to here. I'm going to send you the the direction, the location. The location is Palacio de la Bolsa. I'm going to send you the location. Yes, I don't remember that this day we have the VC.  
This topic change and we will review things.  
And the midterm things regarding the midterm information regarding the midterm, yes.  
The midterm exam will be on Wednesday, March the 4th will be closed book and closed notes except for the attached formula C I'm going to give you a formula C.  
And one sip to try with your own notes. You can bring your own notes, but please this you cannot write in your notes exercises. You cannot make photocopies of all the problem sets, solutions and.  
With small and good notes are notes formulas things. I suggest to send me a a photo with a note before the exam and tell me please is this correct? It is correct. I will say it's correct but if I see formulas or exercises.  
I will consider it incorrect and during the exam I will review. At the beginning of the exam I will review your notes and in case it's not correct, I will not let you take the exam with that. I will let you take the exam and I will take the essay. Yep.  
Where's the lottery cheap a?  
Worse, for example, if you read what is what is not allowed, what is not allowed exercises numbers.  
No, I mean it's what? Sorry, what means an example like if we give a formula and then we have like a like a random example of like how to find the sharp ratio of the numbers.  
I mean, you have. There is no need to go with a formula team with. You understand what I'm saying? What I'm saying is just formulas, your own formulas.  
But you should before the meet them do enough exercises in order. I mean, I am not asking to memorize formulas, I'm asking to understand it that if you need an explanation with numbers regarding your formulas.  
It's I'm I'm letting having I will give you a formulacy also you can take your own.  
Bye.  
And writing with words.  
But whether here is everything explained.  
No, no, no. Maybe that that one. We're going to go to this one. Yes, this one. Yes, we need to go on that one.  
This one in particular, yes, and I will tell you how the investment opportunity set. All of you should understand how the investment opportunity set is contract with a risk free asset.  
Again, go through rolling set six, sorry, rolling set, session six. What was asked in session 6 to draw the investment opportunity set.  
Then go to Cecil.  
678 What was asking session 8?  
And what if there is a? What if the correlation is perfect? What if the correlation is not perfect?  
Then.  
Meet the formula see you. You can take this one and also you are allowed to bring another one of your own without exercise, without numbers. Is it yours?  
Please, in order to avoid an important problem, once you have prepared your own tea, send me a picture.  
What else? If I were you, I will not leave all these things regarding using the formula seat or the calculator or whatever in the end, yes.  
Yeah, for me this is the most worthy thing. I have not uploaded the solutions yet. This is sample meter one.  
Who is going to be?  
Not the same because it will have different exercises, different questions, but it will be same format than this one and.  
I will be 21.  
And sample meter too.  
Regarding sample meter one and sample meter 2.  
If you do everything by yourself, if you do everything by yourself.  
The return is going to be much more simple, much more simple than sample return one and sample return 2.  
But you look sample meter one and sample meter two by looking at the solutions and understanding first the solutions and then the exercise.  
The bitter is going to be complicated, very complicated. Why? Because the point is not the reading the answer, reading the question and then understanding the question after reading the answer.  
What I strongly recommend you start the sooner you have. This week I don't have any wrong in solving questions. We are going to dedicate one whole day.  
To review all wisdom you got, but please do.  
Work before Monday, the 2nd of March.  
If I come here Monday the 2nd of March, you have not called to anything I would ask. Have you any questions? I would love you to have questions.  
I will not upload solutions, sample meter one and sample meter two. Will you tell me to upload it? I think that it will not make sense to upload it just right now, yeah.  
Make sense?  
So.  
All of you, all of you should have.  
Four documents, one stanation note, a note with all instructions. Thank you.  
The TC, the or whatever it's called. OK, two sample, sample meter one and sample meter 2.  
So happy because everyone is here.  
For me, you having all this information, it's simple then.  
Any questions regarding meet them?  
OK, with the format, it's similar to the still like multiple choice.  
No, same format and the format is I think. I don't remember and I think it's written on the structure 60 multiple choice questions where there is only one correct question.  
And 1616, what do you say? 16 and then four short excess.  
So exercises. Thank you soon.  
Short exercises the same thing. The exercises that you put there are more complicated than what you are going to find, but try to do it by yourself.  
But like up to one class is the.  
Hey.  
There will be you have, yes, you have all the information in sample, Mr. One and sample, Mr. Chu that if you go to this you will see questions today.  
For example, you you will be asked about beta.  
You will know what is better.  
Late and next Monday, all things regarding beta.  
For example, next Monday you will have all the information regarding.  
Exercises regarding numerical exercises.  
Session Session 12 February 25.  
On session code, you will have everything that what we will see regarding market efficiency will just be asked in the test questions and I will tell you what can be asked and how.  
And you can now see questions regarding market conditions. I am not really, really, really worried regarding content and exercises because the most difficult thing.  
Is what we have already seen. There are two big difficulties for the middle.  
One has to do with problem set two. We are going to review it and the other one is refreshing time value of money regarding time value of money that would be.  
Hard you will find there there is a clues exercise. You will find hard exercises. Some call me term one and two the long exercises regarding time value of money. Personally I will start with time value of money because at the end time value of money has to do with thinking.  
And portfolio theory has to do with understanding.  
For next Wednesday.  
And today's slides.  
Today I have forgotten to bring the the material before I had. I don't know where I have my head.  
Make sense?  
Hey.  
This is for the 100, I think, or whatever.  
OK.  
You got to know my intention.  
And also I'm gonna.  
No, you said that too. Let me put this in silence.  
You're here.  
Let me see here. I was looking for this one.  
OK, regarding these formulas.  
Running these formulas.  
You can need to.  
Understand each one or to work or to memorize any of these formulas. For example regarding these formulas I think.  
I don't know. I don't remember the formula seat I have already made you, but this one's probably will not appear.  
The only one that probably you will see.  
Is this one?  
Objective of problem set to misunderstanding, misunderstanding, not too much making music.  
What I mean is that what I mean is that.  
Did you understand things?  
You understand the weights. You understand how things work.  
You won't have any problem with these two ones. With these two ones, yes, with these two formulas, if expected, this helps you.  
Which is the formula that all of you should.  
Understand what I'm going to write on the blackboard, expect the return on the portfolio is way one, return one plus way two, return two, yes.  
And variance on the portfolio is weight one price square variance one plus weight 2 price square variance 2 + 2 times weight one weight 2 covariance between 1:00 and 2:00.  
And all of you should know that the covariance between 1:00 and 2:00 will be within in terms of deviation and correlation. Makes sense.  
OK, how can we get? How can we get those formulas?  
By combining this and this one, each one we will get the first one and by combining this, this and this.  
We will get the second next step. I'm sorry.  
Play.  
For Olivia.  
For the variance between an asset and itself is equal to the variance. For variance between the asset and itself is equal to the variance and last formula.  
The covariance of R1 and R3R2 and the the covariance.  
Nicolaeus, this portfolio for example.  
And another portfolio, if you need to calculate that covariance, then we should use that formula. That is one of the the trickiest question you can find in problem set two. Regarding problem set two, I'm not going to correct that I'm I'm not going to.  
See if you have done it correct or not. I think you make mistakes because we are learning. So I have already served with you the most approved solutions. I'm going to blow solutions also in the United States.  
Anybody. I have already. No, sorry, but I have. The point is you have done the exercises. Now I review the exercises with you and then if you have more questions you can come back and we can continue. Yes.  
Relatively weak, yes.  
And I'm not gonna. I'm gonna give this here.  
Mute.  
Consider portfolios with US and and Spanish.  
The correlation between the returns is 0.3%.  
Calculate expected.  
OK, I'm going to go. I'm going to do this quickly. Why quickly? Because I have done it in class several times. I'm going to do this first exercise really quickly.  
I can do.  
Anyone have a promise? No, no, because I have a new video. Let me go 10/20/15 third.  
Wendy.  
14 No 15 there.  
And let me go with correlation between both of them is 0.3.  
So I can calculate covariance.  
Covariance as correlation times.  
From the aviation times.  
And the race.  
And now I'm told calculate the spectrum returns and standard deviation of the following scopes.  
Wait, wait, wait.  
Hey, and the weights are 80, 50%.  
Very close.  
By names is 1.  
Perfect. And then return on the portfolio, the return on the portfolio.  
Times if we don't, we fix this plus 20 times different. Let me fix. Yeah, yeah.  
Deviation on the portfolio is SQRP.  
Off.  
This way times.  
Wait, thanks.  
That's a.  
This way times this is another vision.  
Right from the square plus two times now.  
Yes, but no, that's two times.  
Thanks.  
Thanks. Makes sense.  
There should not be too much difficulties. It's this point apart from practicing, practicing and practicing.  
Yeah.  
Now, let me put here a third one.  
And.  
First question I have already done find the weights for a portfolio with an expected return of 25%.  
With an expected return of 25%. What is the standard deviation of this portfolio?  
You should take the question answer.  
And I'm not what I'm going to do is not correct because you have the return equation, but what I'm going to do is not correct.  
25% How can I get that portfolio with 25%?  
Without thinking before thinking about planning the home block.  
Who can I get because?  
I'm going to make that. I'm going to cheat. I'm going to cheat. I'm going to take the weights. I'm going to take the weight. I'm going to start playing with these weights till I get here at 25%.  
I'm gonna, yes.  
And which way should I start? Because I don't want to spend all the afternoon just.  
Idea is if the return on one as at least 10% and the return on the other as at least 50% and the result is the weight, the weight there.  
The result I'm looking for is over. It's over. So necessary, necessary. I should sort USI should sort US.  
So I'm gonna start.  
With 200%, I don't know. Oh, sorry, I'm going to start with 150%.  
150% is big, but it's not big enough if I make this bigger.  
Oh.  
I make this bigger mine 200%, I will get 25%. You understand what I'm saying? Issica, before thinking about plugging the formula, what I'm looking for, I'm looking for 25% at this riskier than the risk.  
And there is here.  
So I should so make sense at whatever I find the weights for our portfolio with the same standard deviation and the US market and higher respect the result. Here again I can start I'm looking for.  
I expect the return of 10%, no. I'm looking for if I 100 US, sorry 100 US then if I say 20% is.  
Higher than US 2430. Again, it's small. You see what I'm doing. I'm just going the budget step. This is bigger. Higher we don't know.  
If I continue what I'm doing mentally, what I'm doing mentally, I'm running the investment opportunities.  
I'm running the 2030 start 3040.  
50 or 50.  
90.  
Oh, sorry, I'm going the the opposite way. Sorry, 100 in the US.  
90 this gets bigger, higher return.  
876%.  
Oh, Saint Reese.  
And the way it's for a portfolio with the same standard deviation. Sorry, standard deviation and the report standard deviation and the report is 20%, yes.  
The reason is 20%. This portfolio has a standardization of 21. I do 100 is 20.  
Maybe. It's 80, let me go down.  
It's over.  
Yes, it's our own country.  
What I'm doing, I'm not explaining you how to solve it. What I'm doing is.  
Playing with the numbers because I understand what I'm looking for.  
Yeah.  
I don't want you to think. I want you to understand and in order to understand you, yes.  
OK, let me move on.  
OK, I don't care about question me and questions.  
I care about question B and then with this one is relatively the same and question C can be solved the same way, yes.  
What is the correlation between the returns on the portfolios in part one?  
I'm doing, yes.  
Why is there I mean?  
Taking sound.  
What is the correlation between?  
This portfolio and this portfolio, yes. What is the correlation between the portfolio and the portfolio?  
OK.  
OK, how do you calculate correlation?  
Correlation between portfolio, let me A&B yes.  
Is going to be equal to covariance between portfolio A&B, yes.  
Over variation of portfolio A and variation of portfolio B. Make sense.  
Do we know? Do we know deviation of portfolio A and deviation of portfolio B? Yes, we know. So what we need, what we need to calculate is covariance between portfolio.  
A and portfolio B, yes.  
How are we gonna calculate this?  
Or are we going to calculate that?  
Uh, nobody else.  
Peace.  
The covariance, yes.  
Way a US way B.  
Oh, sure.  
Wait a US times we don't want US plus wait a Spain times we don't a Spain make sense.  
All of you are with me. Why this?  
Portfolio one.  
What I have done is rewrite what I have already calculate on the yes and.  
Anyway, be US return be.  
No return US, sorry, return US plus way B Spain times return Spain.  
Yeah.  
Are you with me?  
Let me, I'm not going to complicate it.  
OK.  
What formula will apply this one? What I'm going to do is calculate this and also considering this this.  
Two words. I'm going to use the three last problems.  
Let me start with the last formula, yes.  
I'm going to divide this into. This is equal to.  
The cobardians between.  
Wait a U.S. tanks return on US.  
Wave be US with journal US make sense.  
Are you with me?  
This is one, this is 2, this is 3, this is 4 covariance between 1314 covariance between 2324.  
Plus plus, what I'm gonna do? Covariance between one.  
And four, yes, but please, what I'm going to do is take outside the weights, but I'm going to take the weights outside.  
Because of this one, yes, I'm going to take outside the weights.  
One and four.  
Weight. Hey, US times weight.  
Times.  
Between the return on one country on US and the return on Spain. Make sense?  
Are you following me? I'm going to continue the same week.  
2324, yes.  
Yes.  
Plus 2-3 weight A Spain times to three weight BUS times.  
Covariance between return on Spain and return on.  
Yes, make sense.  
Last day last one.  
First 113142324 Wait Spain times way B.  
When they Spain, when big Spain times covariance between the return on US.  
I have to say, sorry, true.  
Are you going on Spain?  
And the return on make sense.  
Are you following me? OK, what do I have here?  
Covariance between return on US and return on Spain. The covariance between US and Spain. We have already know this number, sorry.  
And then covariance between return on Spain and return on Spain or covariance between return on US and return on US. What is the covariance between an asset and itself?  
Thanks.  
So.  
So at the end, what do we have?  
Wait.  
AUS times weight, BUS times balance.  
On US, yes.  
Makes sense.  
We have already seen this last day last.  
Wade AUS, Wade B, Spain, Wade AUS, Wade BUS.  
Weight A covariance. That's weight A Spain. Weight BUS.  
Thanks for variance return on US and return on Spain.  
Stay times weight a stay times variance of stay.  
Yeah.  
What is the difficulty of this exercise? Understanding an order, order, putting in order, putting in places, putting in place, yeah.  
Oh.  
You have the solutions, but I'm gonna.  
Hey, wait pay US, wait BUS.  
When the US.  
Why you be US?  
These times.  
These thanks.  
Audience on US.  
Variance. Variance on US is that there is violence.  
Congress make sense plus.  
I'm going to start with the last one. Yes, with the other one. Please wait to stay. Thanks. Wait to stay.  
Thanks.  
Yes.  
Plus now to reply in gross by the US times.  
Weight on spade plus.  
We're going to spend dance. We're going to do this.  
Thanks for . Yeah.  
But is this picture you thought?  
The covariance on the portfolio and we are asked for the correlation.  
Yes, by this correlation, Povisia over.  
Clients over.  
Please.  
Standard. Makes sense.  
Yes.  
What if instead of two assets in the portfolio, we have three? The solution becomes as bigger. Instead of having just three terms, we will have three instead of having four terms.  
Potents we will have.  
May 3 and three. Yes, we will have 1313 and these three terms and three terms is 123456. So we will have 141516.  
T A T  
Next row 242526 row 343536. At the end we will have nine girls, yes.  
Are you following me?  
But if one of the assets is the risk free asset?  
Covariance between the acet and the Rishi acet or the variance of the Rishi acet. So at the end we will get rid of.  
From here, right? Yes.  
Magin that I have.  
Yes.  
12345 that's the weight on there and you hold this 123456 yes.  
I will have one.  
1/4 plus one.  
That's 343536343536, yes, 5-3 and six is how we express it.  
All places where three or six appear will become zero. This will be 0.  
And then only have to say.  
Be here at the end and we have to say make sense.  
You will not type something like this. Maybe he just woke up.  
A.  
A.  
Important. Would you mind to wait for a second?  
Have you understood this?  
Have you understood this? There is no need to understand this part. I want to tell you what is better so quickly.  
And this is good for everyone.  
The return on the portfolio is weight one times return one plus weight two times return two. This is not going to change. This is going to become the same.  
Yes.  
What are we gonna say instead of?  
Talking about variance instead of talking about variance that let me rewrite the formula again. Sorry, it's Maria. I'm going to quickly wait through.  
Last two times, weight one, weight 2 provided between 1:00 and 2:00, yes.  
This is complicated and because of this I should write picture results and personally I don't like to write those things that are complicated and it makes things complicated. Yes, we are going to move.  
To a new war.  
A simple and easy work.  
And in this world, instead of being talking about variance and deviation, we will talk about better.  
And beta on the portfolio, beta on the portfolio, it's equal to wave one.  
Times beta on I said one plus weight two times beta on I said two.  
And also return the portfolio will still be.  
Same. Yes, we are with Captain simplifying our life a lot, a lot, a lot. I have made a big spoiler, but I think that this help us helps everyone.  
Beta is this in order to get better. It's important you to know that we should consider something a market. There is one market and what is?  
What is better? A regression coefficient with the market?  
If beta is 1, expected return of the market, then expected return on the market. If beta is 1, expected return on the market.  
To be that they want the the return of the asset will be the market. Beta is higher than one, so will be risk here. But yes, look at this, look at this.  
I don't want you to leave yes with in your in your memory, with the victory. I don't want to leave you there. I prefer you to meet with a simple life that is close, yes.  
Sorry for this place, but I think that I think that this help everyone, yes, and we don't have too much time.  
So, So what I'm gonna do?  
I want to start with the class.  
And Brian out also.  
Hey, I need honey.  
Well, what are we going to do? Last class, last class. What we what we did is instead of working with assets, we incorporate a third, a fourth.  
A lot of assets in our portfolio, yes. And we conclude last class you've seen understanding that no matter how we make the portfolio, we cannot diversify away the whole week. So we divide it with into two parts.  
One part that was systematic, systematic and another part that was idiosyncratic. There was one part that belongs to the asset itself and another part that has to do with correlation.  
Yes, we saw that regarding idiosynthetic part. We can get rid of everything, yes.  
And regarding systematic, we cannot get with. What are we going to do? We are going to consider an incredible huge portfolio that we use everything in the world. We will call the market.  
And it's and instead of looking for individual and isolated assets.  
We will see how these assets behaves regarding the market.  
Makes sense.  
So we will get rid of all videos and getting back.  
Congression.  
The more we talk, the more we not linear, right? With SML will be much more simple at the end. What we have seen in last class was Markovic.  
Markovic. Markovic. I don't know how to spell it in Markovic perspective that has variance portfolio theory. This is modern portfolio theory, but modern portfolio theory is video from the systems.  
And then Sarp is the one that is more known for Riccaten.  
Start introduce the capital AX, which portfolios investors should hold in equity?  
Why is the medium a stick that we go?  
Once we get a bit of this thing.  
As I'm sure this is really open.  
Where is the mother? Did you see this? You understand what I'm with?  
OK.  
Now woman, men and this is younger, long hair, short hair, the more complicated I need the more data.  
Is a really, really, really, if I simplify.  
Human being model. There are no age, no race, no gender, no.  
No facts, no. You understand any. I am simplifying a lot, a lot, a lot. Simplifying because of understanding that careful will simplify because you cannot just go in life with just a hammer.  
You just have a hammer. You just seen it. Yes, next class. No, next week on Wednesday. Next week on Wednesday, I will tell you that.  
After understanding what is conditional good is just a simplification. Make sense. Careful with finance and simplification because people at the end with all respect. Why are you here? Because you want an A.  
I'm simplifying it. What people work in finance because they want money. So if there is a formula that makes you make money, people will forget about understanding and this is tangible.  
Because there is systematic risk, life changes and then people lost because of simplifying things, a lot of money. OK, these are the assumptions if in that model of human being.  
No hair, no age, no, no, no elbows, no. Yes, we are eyes. We are simplifying. The market is competitive and just one single figure. All assets are credible. You can.  
Maybe you can take a percentage of an asset. There are no taxes. There are no transaction costs. Everyone has same expectations. Everyone has same expectations.  
Do everyone has same information? So these are hard assumptions. Make sense.  
OK, from portfolio theory, the tangency portfolio. Do you remember the tangency portfolio?  
How did we finish Daniel? How did we finish portfolio theory? Hey, no matter how much stocks there are, you like, no matter how much stocks there are, you like at the end we will get to.  
We will just choose between 2 assets. We will construct the portfolio between 2 assets, the highest sub ratio and the risk.  
We're going to call it. We're going to call the highest of British in portfolio.  
The market. What is the market? Considering all the assets in the world together.  
So at the end up here there will be the market portfolio is the highest up ratio, yes, and the capital market line. What is the capital market line? I'm not going to move from here because you can understand.  
What is the capital market like?  
The line that connect the rich Viacet with the highest are fresh. Make sense.  
In this world, we are in this world at work. We are still in marketing world. Hope you recognize that we are still in marketing world because it is written standard, yes.  
I.  
And.  
Here we put standardization, yes.  
I'm going to go quickly. Oh, what? Oh, this Marie asked me how to write. You don't need to write all numbers with it, but you are giving one stop.  
And another one, you should write two points and then depending on the correlation you should know if this is a straight line or if this is something like this. I'm not going to ask you to write the meter more or if it is perfect correlated. If the two assets are negative, perfect correlated this.  
Yes.  
Are you following what I'm asking? What I'm saying? And whatever.  
What do we have? Two assets, a risk free asset, yes.  
The highest of ratio on this line.  
This is what is written there. We are going to move to company.  
This is the market, yes. And this is return on the market, yes. I'm going to move to Cabin, please. I need all of your attention now.  
Return will be the same. The risk free is going to be the risk free and the return on the market is going to still be the return on the market. Make sense.  
For the risk free asset, beta is going to be 0, yes, beta another spoiler. How we are going to calculate the data correlation coefficient or correlation?  
Pregnacio coefficient. A correlation coefficient. You already know what it is. A regression coefficient is it looks like, but it's not a correlation, a regression coefficient, but a correlation coefficient is covariance between.  
Asset A and the market beta on A is the covariance between asset A and the market, yes.  
This looks like a.  
Correlation coefficient. It looks like a correlation coefficient, but it's not. It's a relation coefficient. If these were a correlation coefficient, I should divide it into deviation A, deviation B. No, but because it's a relation coefficient, I should divide this.  
We do the values in the market instead of variation.  
Yes.  
We are not going to be asked to work with us.  
You should not like this.  
OK, let me go quick. Return on the market.  
If beta is the market, the variance between the market and the market is the variance of the market. Variance of the market over variance of the market beta will be one.  
If that would be one, yes, so.  
This line is the capital market line. I don't care too much about the capital market line. I care, but I I care about the capital market line, but not too much.  
In this new war.  
This line is absolutely important and it's going to be called the SML security market line. Yes, what is the question of the SML?  
The equation of BSNL is.  
The return on an asset A that is what I don't want to make a spoiler. The return on asset A, the equation of decline. The return on asset A is the risk free plus Theta on asset A times.  
We turn on the market minus the risk free. Yes, this is the question of.  
The SNL. Let me just what about here? What about asset A and asset B?  
Return on asset A and return on asset B will be the same. Yes, please. I want your attention, all of you. What is going to be better when I said A and better on asset?  
Me.  
Better on on. I'm going to finish with this on.  
And send mail is a.  
All assets should lay on the SMM. So we're talking about coming the question that you will see a lot, a lot, a lot is is this one. What is this equation?  
What is this equation? The SNL? But what is this equation? Also the capital? What is the capital? This is the capital. That is the SNL. Make sense.  
Make sense?  
Proceed, proceed. Next day we will continue working over this. Let me go through the slides so quick in order you to know what you will see when talking about this. This slide, you can forget about it. Yes, regarding this slide, you can forget it.  
And if you have any questions, I can make that demonstration. But now also this is like you can these two slides, you can forget about them and there is this what is I have the restrict, I have the mark, yes.  
Are the premium is the difference is 5% and asset. What is the return of the market?  
Yes, Sir. Imagine that with 360 percent, 5%.  
B plus 5% times beta.  
Now this is a regression coefficient that looks like a correlation coefficient. If beta is lower than one, the asset is less risky than the market. If beta is higher than one, it's more risky than the market. And in this new world, there is the security market life.  
I have already sold. Yes, the security and the risk premium is the difference between the stake the return on the market and the risk free and the increasing, but I have already if that higher than one is risk care than the market got CML and SML. We have already gone through this, yes.  
Conclusion. Next day we will continue. Captain simplifies or life. Captain is maths, maths, maths, maths, maths. More simple than what we have previously.  
Any questions?  
I need honey something for anyone is ill also.  
I don't know if that will be true or whatever. I want to start this one.  
Good morning. These are you.  
I'm very close, please. Oh, I think I have closing too fast.  
Everybody. Oh, so happy because they have. Yes, every Rosie.  
The current concept is different, is different.  
Puerto Rico.