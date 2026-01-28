# Foundations of Finance (FoF) – Session 8  
**NYU | February 11, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 29min  

---

# 1. Context

Session 6 → Portfolio mechanics  
Session 7 → Preferences and indifference curves  
Session 8 → Risk-free asset + Capital Allocation Line + Sharpe Ratio  

> If Session 6 builds the geometry,  
> Session 8 introduces the lever.

---

# 2. The Risk-Free Asset

## Definition

A risk-free asset has:

- Certain return
- Zero variance
- Zero covariance with any risky asset

Mathematically:

$$
\sigma_{rf}^2 = 0
$$
$$
Cov(rf, X) = 0
$$

---

## Important Conceptual Clarification

In reality:
- No asset is perfectly risk-free
- Risk-free is a theoretical construct

But:

> The entire financial system is built on the assumption that sovereign debt defines a baseline of certainty.

If sovereign debt collapses → pricing collapses.

---

# 3. Combining Risk-Free and One Risky Asset

Let:
- Risk-free rate = \( r_f \)
- Risky asset return = \( E(R_A) \)
- Weight in risky asset = \( w \)

---

## 3.1 Expected Return

$$
E(R_p) = r_f + w(E(R_A) - r_f)
$$

Interpretation:

- \(E(R_A) - r_f\) = risk premium
- \(w\) scales exposure

If:
- w = 0 → portfolio = risk-free
- w = 1 → portfolio = risky asset
- w > 1 → leverage (borrow at rf)

---

## 3.2 Portfolio Risk

Since:

- Variance of rf = 0
- Covariance with rf = 0

We get:

$$
\sigma_p = w \sigma_A
$$

Risk scales linearly.

---

# 4. Capital Allocation Line (CAL)

Substitute:

$$
w = \frac{\sigma_p}{\sigma_A}
$$

Into expected return equation:

$$
E(R_p) = r_f + \frac{E(R_A) - r_f}{\sigma_A} \sigma_p
$$

---

## Interpretation

This is the equation of a line:

$$
E(R_p) = r_f + Sharpe \cdot \sigma_p
$$

Where:

$$
Sharpe = \frac{E(R_A) - r_f}{\sigma_A}
$$

---

# 5. Sharpe Ratio

Definition:

$$
Sharpe = \frac{Excess\ Return}{Risk}
$$

Interpretation:

- Return per unit of risk
- Slope of the Capital Allocation Line
- Price of risk

---

## Economic Meaning

What do investors want?

- Numerator → as high as possible
- Denominator → as low as possible

Therefore:

> The higher the Sharpe ratio, the better.

---

# 6. Extending to Two Risky Assets

Recall:

Without risk-free → curved efficient frontier.

Now introduce risk-free:

- For every risky portfolio
- We can draw a line from rf through it

Each line has a slope (Sharpe).

---

# 7. Tangency Portfolio

Among all risky portfolios:

We select the one with the **highest Sharpe ratio**.

That portfolio:

- Is tangent to the efficient frontier
- Maximizes return per unit of risk

This is the:

> Tangency Portfolio

---

# 8. The New Efficient Frontier

Once risk-free exists:

The efficient set is no longer curved.

It becomes:

A straight line starting at rf and tangent to the risky frontier.

This line is the:

> Capital Allocation Line (CAL)

---

# 9. Two-Fund Separation Theorem

Crucial result:

All rational investors:

- Hold the same risky portfolio (tangency portfolio)
- Adjust risk via the risk-free asset

Thus:

$$
Final\ Portfolio = \alpha (Tangency) + (1-\alpha) (Risk\ Free)
$$

Risk aversion only determines α.

---

# 10. Example from Class

Tangency portfolio C:
- 60% US
- 40% Japan

Investor chooses:
- 40% risk-free
- 60% tangency

Final weights:

US: 0.6 × 0.6 = 36%  
Japan: 0.6 × 0.4 = 24%  
Risk-free: 40%

Total = 100%

---

# 11. Leverage

If expected return > risky asset return:

Weight > 1

Meaning:
- Borrow at risk-free
- Invest more in tangency portfolio

This extends the CAL beyond the tangency point.

---

# 12. Key Conceptual Shift

Without risk-free:
- Investors choose different efficient portfolios

With risk-free:
- Everyone holds the same risky portfolio
- Differences come only from leverage

This is powerful.

It simplifies the entire system.

---

# 13. Big Idea of Session 8

Finance becomes:

1. Find efficient frontier
2. Find tangency portfolio
3. Combine with risk-free

Everything from now on builds on this.

---

# 14. Philosophical Insight

Risk-free asset:

- Is theoretical
- But systemically foundational

If sovereign credibility breaks:
- Pricing models collapse
- Risk premia lose anchor
- Markets lose structure

> Finance rests on confidence.

---

# 15. What Comes Next

Next logical step:

- Generalize to many assets
- Introduce market portfolio
- Move toward CAPM

---

# 16. Final Message

From now until the end of the course:

The game is:

- Maximize Sharpe ratio
- Then scale risk via risk-free asset

Everything else is implementation.



# Transcripción
11 de febrero de 2026, 5:09p.m.
1 h 28 min 58 s
Sui, Sam, Garf, Lekia's on the way. No, Lekia's on the way. Liz, Marie, Sophia.  
Jessica Vivan and OK.  
I like this one. One announcement you.  
You don't have class on Monday before I class. I think you have free time Monday, Monday at three. You don't have class Monday at sorry, 3:15, 3:00 PM.  
Yeah, no. OK, next Monday is 20. No, no, whatever. Forget about Monday 23.  
2nd of March, Monday, 2nd of March, we are going to have a three. I'm going to send you a WhatsApp. I'm going to make an announcement also in great space. I'm going to give you I will share it in WhatsApp.  
Also in the transit it will appear, but let me tell you that we will go Monday the 2nd before our class if I Monday the 2nd.  
Which time does this class start? 5:00 PM? No. At 3:00 PM we will see each other at the Spanish stop state. It's close to here. It's in London.  
Do you remember? Do you know where to get this?  
Tibeles is Marco Espana. Tibeles. I mean Tibeles is 1 mountain that is there, just 1200 meters walking. We can go there. We will visit the stock exchange and then we will come back here and we will take class normally.  
To be a visit that will take an hour, an hour. We start at 3 or we will be finished. We will go back here and I will start at we will have time.  
The third, I think. Sorry, no, the second Monday, Monday the 2nd of May.  
No class. There's no classic.  
At three, at three, there is there is and then we will have class of five of not only there is class, we'll have more class than you. Sorry, sorry. Thank you. I have class of three for two.  
OK, I will tell Natalia because Natalia told me that you didn't have class before. I'm not comfortable.  
And I will tell them to arrange to start at 3:30 or you can come and then you can go with yourself. It's a busy. I mean it's a palace, it's a lovely building and it help us feeling.  
All things used to be done before the Internet stock exchange. You will see all trades were were made. I think it's something is worthy in case in case in any place you cannot go because.  
What time does it end at? I don't exactly know. It will stay one hour and we will not. We will start class at 5.  
So nothing changed apart from that or there will be. I'm going to talk with Natalia in order because I'm going to be on Friday, Friday.  
OK, once I have shared with you, yeah, I have said it in the WhatsApp.  
And portfolio theory 4.  
Do you remember the class we have two days ago, two classes ago, two sessions ago?  
Today is a continuation of that.  
And if you have go through last class, not last, sorry, the class before last class, this session 6, you have gone through session six class.  
This class will move forward. This class is not going to be complicated. A lot of it will start, will start.  
On the other hand, you have not understood. It's your seats class.  
This class would be a little bit more complicated than the other one. Please go to session six class approval before going to this test.  
This class is to have a temptation of growing on that land.  
There is a room.  
OK.  
Let me start variance on a portfolio. Yes, how do you calculate variance on a portfolio?  
I do it weight as a A right square deviation as a A rise to square plus weight B rise square deviation B square plus 2 times weight A weight B covariance between A&B.  
Makes sense.  
Return on the portfolio. I'm going to do this smaller weight A times return A plus weight B times return B.  
What are we going to do today? We are going to combine first. First we are going to talk about a risk free asset.  
Where is I wish we pass it?  
A risk whose return is certain.  
As it has risk, it can get expect the return and a balance. Make sense? What are risk free? What is going to be the return for our risk free 3%? What is going to be the DH of the risk free asset?  
See.  
Yeah.  
OK, let me do things step by step.  
OK.  
Alcohol. OK, let me go step by step.  
Thank you.  
Orban Reese, Yes it.  
Expected return for the risk free asset.  
Expected Rico is not expected.  
Is the term makes sense?  
Now thinking about the variance, how did you calculate the variance on an asset?  
Variance of X. How do you calculate this?  
What do you calculate the variance?  
By doing the total sum.  
Oh.  
Which one of the assets?  
Minus the average rise to the square. Make sense.  
Over. I'm talking about returns. I'm talking about returns.  
The number of returns we have or.  
The number of dates we have. Yep.  
How much Steve Woolworth?  
Or do we speak as it?  
No one.  
What is the variance of the on the refill set?  
This person will always be said, will not say.  
Bye name this number.  
Now that this is 3%, yes, 3% for all the points, yes.  
I will do 3% -, 3%.  
Plus 3% -, 3% + 3% -, 3%.  
Make sense?  
And then.  
For the Risbia set, this is 0 and what about the covariance?  
Between a stock and the risk free asset, let me call this Y. Yes, how do you calculate covariance?  
Are you doing X?  
I use.  
You have it? Yes. Sorry, I'm going to times y -, here over.  
Yeah.  
This is a number big Y, the registry asset.  
This would be 0 for all the assets. Again, same question. Any sense?  
So what is going to be variance, providing for that risk?  
Yeah.  
Does it make sense?  
Great.  
Let me start with the slides. Yeah, let me before that.  
Yes.  
Yeah, what are we going to do today?  
They will will first start talking about the risk free asset. We have already done it. Then we will see what happens when we combine the risk free asset with one asset.  
And then we will combine the risk free asset with two assets, Yep.  
This is today's class.  
First idea and then we will talk about asset allocation. Yes, at the end, if you work in wealth management, what is the question you should answer for your clients?  
Where to invest at weather?  
OK, properties of the risk free asset.  
Expected return of the risk-free asset is a number itself. Variance of the risk-free asset will always be 0 and covariance of the risk-free asset will always be also zero.  
These covariance, you can say that it's contrintuitive.  
But.  
Not too much. Any questions? No. OK, let me move forward.  
Imagine anything bread.  
Don't have work. I agree. Imagine that I said.  
Excellent. And you see it? No.  
Imagine that as a piece, the restrict, yes.  
You know, return returned on.  
The portfolio, what I'm going to do, I'm going to combine one stop. We can reach Rios. Make sense.  
When I come back one, let's talk with its variance and deviation.  
First.  
We turn on the portfolio this.  
Wait. Hey, thanks. Return when I said hey.  
Less.  
Wait three times the release make sense.  
Let me move a little bit forward because I can write.  
Weight B as one minus weight A, yes.  
Yes.  
And I can rewrite this, say return on the portfolio is.  
Depend on the portfolio is equal to.  
Please replace.  
With a times from a minus.  
Yes.  
Make sense?  
What do I have done? I've just rewrite the return in terms of weight A. So simple to see weight A.  
Equate A would be 0 and return on the portfolio would be.  
If weight A would be one return on the portfolio would be one times return A and the risk free will be cancelled with risk free.  
Do you understand this equation? Yeah.  
Oh, no, there is. I mean, do you understand this equation?  
So.  
I'm a little confused what you mean with the like bar ODR expected expected. OK, so that's the expected return. Yeah, this is the question for the expected return on the portfolio.  
Do you understand that equation?  
Go ahead. Yes. And then when you wrote it in terms of a, what do you mean by that expected return? But do you understand this equation? Yes, that's the expected. Yes, explain.  
That and that's the. No, no, I mean, what does disturb me?  
Yeah, but how do I calculate the spectrum return?  
But how will you use this equation? I mean, what does this equation mean?  
No, but you I know you understand it. I want to see to explain. I'm a little. I'm a little confused there. What is the weight? Is it one weight?  
What is this weight? I don't know, but it could be 50% for example.  
This is a percentage.  
This weight is a perceptance. This other weight is another perceptance.  
And for example, if this is 4% and this is 1%, four, 150 percent, 50%, you are doing an average.  
You are calculating there the expected return on the portfolio.  
By doing the events.  
I calculate how much of this do I have 30%? How much of this do I have 70%?  
So.  
In order to fully understand this, they did not take class class. In order to fully understand this was session 6, the one where where I did the Excel calculating inspector return on the portfolios.  
Go through that excel and try to understand it and also from incentive it would be worthy to start with that.  
This equation, this equation, this equation is by far the most simple equation you are going to find.  
It's 1 minus weight a.  
Wait B is one night waiting. Where does this came from?  
6.  
Where does this came from? Weight B is equal to 19 weight A.  
Where does this came from?  
When I say weight B is equal to 1 minus weight A.  
At the end, one is, one is 100%, one is all.  
I know the way it sees 50%, so one is the same as same one person, 100%.  
Weight B is 100% minus.  
I move.  
Waiting.  
Are you following me?  
And what I have done here, I have rewrite rewrite this equation but instead of having weight A and weight BI just have weight A.  
I only have this equation in terms of where we take.  
And in case wait day would be 0%, the return on the portfolio would be the risk rate. In case wait day would be 100%, return on the portfolio would be return made.  
Yes.  
Alright.  
Please go through the other day class and try to do the other day class by yourself.  
Please all of you try to do this exercise by yourself because there is no sense me explaining things you understanding and doing nothing and then not understanding what is coming next.  
OK.  
Now I'm going to go for the variance on the portfolio.  
Yeah.  
If you don't understand how to calculate the return on the portfolio, calculating the variance of the portfolio is more complicated.  
More complicated, at least try to do it, yes.  
In this case.  
What is the variance on the risk free asset? What is the variance on the risk free asset? What is the covariance between asset A and the risk free asset? So in this case this formula becomes.  
So, so, so simple.  
Peace the restrict it.  
Is 0 know so at the end.  
What is the variance on the portfolio? Variance on the portfolio is weight A.  
Square times variance A square.  
Square square. I can calculate the square root.  
Exit that.  
Deviation on the portfolio, yes.  
Square root of the variance is.  
Deviation, yes.  
Can a dog have a negative weight?  
Yes, yes, it can.  
So -2 rise to the square is 4. So here instead of just writing weight a absolute value of weight A because weight A would be.  
Both positive or negative, yes.  
In order to make things more understandable.  
Forget about negative values. Just think about positive, yes.  
And I'm going to take that for return, return on the portfolio is equal to with rate plus weight.  
A times return a minus risk. Make sense.  
Yep.  
This line, the line that is written in it, represents spec, a number that is not true.  
I'm talking about the risk rate because it's risk free issue because of that they take out.  
OK.  
What do I have?  
The equation not the return, the weight and the equation not on the variance the relation.  
Right. No. OK.  
OK.  
And inspector Rico.  
Before thinking about an asset and the risk rate, let me think about last class and class before last class. Yes, I have last class. I have one asset.  
Hey.  
I had another another asset B.  
And by calculating those equations for two assets having variance, radiation and covariance, I got this equation. Yeah, what is the name of that equation? Investment opportunity set among all possible portfolios then I can.  
Sort asset A or I can sort asset B. Yeah, this is the investment opportunity set. Yeah, I've got minimum variance portfolio MVP and then I've got the efficient frontier that are all portfolios that they over.  
Makes sense.  
Please is not new.  
This is not new. This is what we did on last class and what we did last before last class. Make sense.  
What I told you in session 6, if you have any questions today, I answer to be I would like to go back in time to class 6 because class six is the class where you start understanding things.  
Whatever. I can review things without any problem. OK, now I will forget for this for a while. I will forget about this for a while, yes.  
What do I have? I have an answer A.  
Return when I said A.  
I'm the agent on that today. Make sense.  
Yes.  
All of you, please join.  
Do you see this point? Yep.  
Yes.  
All of you right, draw.  
7.  
Think about.  
Return on the risk free is lower. It's lower than return A. Return A is.  
Chris here and he will pay you more. We don't make sense. Go there.  
First thing you should draw here. First thing you should draw here is the risk free set. Then calculate a portfolio that has 50%.  
The risk free at 50%.  
On the, on, on the, on a, yes.  
Throw it. I'm going to fill this with work you to me, yes.  
BJP Juan Taksi, Juan Taksi.  
Did you wrote something?  
No.  
Where should I draw the risk break?  
What is deviation on the risk rate? What is the deviation 0?  
Joe.  
This grade should be here. Make sense.  
Because this year.  
No.  
And now a -, 3.  
Return a minus risk free. Please all of you look at me.  
Do you see we turn A33?  
Is this distance?  
Yep.  
Is this distance?  
This is this distance.  
And risk free rate plus weight aid and this is risk free rate plus.  
A percentage of this distance. If the weight is 0, I will be here. If the weight is 50%, I will be in the half, 75 percent, 100%. Make sense?  
Are you understanding? Are you following what I'm saying, Roy?  
OK, here, so simple. Risk freely, risk free.  
This equation tells me return on the portfolio is risk free plus.  
Away times return a minus risk free. Return a minus risk free is this distance. So risk free plus a percentage of this distance. If the percentage is 0, I will be here.  
If the percentage is 100%, that will be here. If the percentage is percentage is 50%, that will be here.  
Lessons coming here. Look this a question.  
Variance. Sorry, deviation is weight times the deviation.  
This distance and the percentage.  
Imagine that the percentage is 25%, yes.  
From this case, I would take 25%. From here I would take 25%.  
I would be in a point here. This is 50% I would have the half and the half that same percentage I'm taking here is the same percentage I'm taking from here, so.  
What I will have the question of online.  
I would have the equation of a line, same percentage on one side, same percentage on our other side. What I have is a triangle that is low and the equation of a line.  
Yeah.  
What is?  
What is the line represent that you can do it? Is that just like the the trend? No, I mean this line gives me the return on the portfolio.  
No deviation on the portfolio. This line represents the investment opportunity set, all possible combinations between.  
The Breeze parade, I don't ask it. Hey.  
Can I have a negative weight? Yes, this line goes this way also. This is the negative weight return here. This point is considering. This point is considering weight A zero and risk weight of the risk free 100%.  
And if weight A becomes negative, I would start going this way, yeah.  
But what does this line represent? The investment opportunity set, investment opportunity set of all possible combinations, all possible portfolios.  
Combines the risk rate and cost cost the risk rate has zero variance, 0 covariance, all possible portfolios they all align.  
Make sense?  
Ivan, I have to draw the investment opportunity set that combines the risk free with us a day. I have this line if I am here, I'm here.  
We're gonna say A will be 100.  
If I short the risk free, I would go this way. If I I have 50% of 50%, I would be just in the middle, 75 percent, 75% there. Make sense?  
Now, yes, because I want all of you.  
to understand or to follow or to track like this.  
OK.  
Yeah.  
And Rigo, if I have one, I said.  
Hey.  
And another asset B.  
I have this, yes. Do you remember? Do you remember this from the last class?  
This represented saying.  
And this but considering that instead of having asset B as asset BI have asset B as the risk free asset.  
Yep.  
Or less.  
When I erase the questions, I don't. I try not to erase it quickly, but when I erase a question and it can look as if I am doing this quickly is because you have same equations.  
On this flights.  
So there is not. You don't need to worry because of my speed by erasing things, yes.  
What do you have on that slide? What are we going to do today? Today, first thing I'm going to do is to explain. First thing I have already done is explaining.  
What is the risk reasset? Yes.  
They.  
I have already explained you how to select a portfolio combining the risk free asset and one risky security.  
And then we will move there.  
Portfolio selection is not so completed. Portfolio selection is just.  
Among you will never, you will never choose a portfolio here.  
Make sense?  
You will never choose a portfolio here. You will never sort the risk, yes. Why you will never sort and why you will never choose a portfolio here? Because you will always have a portfolio that leaves that pays more return for the same risk.  
Yeah.  
And then, if you are a risk blogger, your efficient frontier will lie there. If you don't like Greece so much, your efficient frontier will be closer to the risk. Make sense.  
OK.  
What is the risk free asset or what is the respect to return fixed? Then variance is 0 deviation is also zero and covariance between.  
Any asset in the world and the risk free asset is 0 and so correlation coefficient is 0.  
Correlation coefficient is here. Yep.  
OK.  
What if I combine a risk free asset and a risky asset?  
For the expected return, for the expected return.  
You have this equation. This equation is the one that you have on the blackboard. Yes, risk rate plus.  
Weight times the expected return. You can forget about this expected is expected return of the risky asset minus the risk through risk through rate, yes.  
For me, for me is the same same. You subtract the risk free asset, you can just say.  
You can just say same same this expected return of the return of the asset. Let me call it a minus the risk free, yes.  
Saying this because the risk free is something fixed.  
It's the same as same expected. We donate minus risk free. Yes, I can take risk free out, yes.  
Hi.  
They expected return and this notation is the same. This and expected is the same.  
Minus risk. What does this mean? This mean that this number is not true. This number is not true and this number is not true. Expected return, expected return and expected return.  
Anees.  
I don't know what I'm going to have. I should start five. I don't know what I'm going to have. I still don't know what I'm going to have, but I will know that I will have five less for food.  
So that's not matter if which screens inside or outside the parenthesis. Yep.  
Hey.  
Expected return. Perfect risk premium.  
Yeah, what is this?  
What is this resistance weight times the difference and this difference?  
We tell me, oh, Max, we tell me the way, the slope. Oh, Max, Chris, I'm getting prepared. You need to wait. I'm assuming this because this call says return.  
Or also it says return is how much return I'm getting over the risk free, but also expected it says return is because it's expected and risk premium is because tells you how much you are paying in terms of return for unit of risk.  
Yep.  
OK, variance of the portfolio is the other formula that we have already done. This is the general equation for the variance on a portfolio, yes. And we take out variance of the risk free and the covariance. If we take this, we get that the that the.  
Deviation on the portfolio is weight times deviation on asset A for example.  
So the weight is aviation over.  
Please read aviation. Yep.  
Any questions?  
I am rewriting, not rewriting, reviewing the equations that I have already wrote in the written on the blackboard.  
OK. Investment opportunity set.  
What is this is the equation of a line, no?  
This is the question of a life.  
Let me.  
We write. Let me set look from here. Let me say that weight A is weight A is deviation on the portfolio over deviation. Make sense.  
And what I'm going to do, I'm going to take this way day, plug it here.  
No.  
We turn on the portfolio, yes, return on the portfolio is the risk through rate plus.  
Last, I'm going to last. Please hold you instead of waiting.  
I'm going to write this.  
The region of the portfolio over the region so last.  
Are you following me?  
Don't you see this? All of you. So I am right. Way day is the variation of the portfolio over the variation.  
In this equation I'm going to substitute weight A. I'm going to substitute weight A with this weight A.  
And I'm writing that equation return on the portfolio is risk to rate.  
That's what they what they deviation. They should be, yes.  
And.  
We don't. Hey, I know there is 3 make sense.  
What is that? What does this equation represent?  
What does this equation represent?  
Same that that these two equations, but these two equations were parametric. The parameter were weight A. This is the equation.  
These two equations in a parametric work in a parametric parametric way. These two equations in a parametric way are the equations of a line.  
It's a question is also the question on a line of a line, but the return on the portfolio will be risk rate plus something times the variation of the portfolio.  
What is this?  
This term, what is return a minus risk rate over deviation as low?  
The slope, the slope of the line. The higher the slope, the higher this, yeah.  
It.  
Let me clean this a little bit.  
In this a little bit.  
Let me clean this a little bit.  
I have one angle called Alpha yes.  
One angle called alpha.  
What is?  
What is this slope? This slope is a tangent.  
Side over this side, no.  
Tangent of Alpha. Yes, tangent of Alpha is this side over that. What is the dimension of this side? Return name minus restrict.  
Return a minus risk three, yes.  
What is this site?  
That is your name make sense.  
Why is this a tangent? Why is this a tangent? Yes.  
But also what is also the tangent? We don't minus risk free, we don't over deviation, we don't over risk.  
This I want your attention.  
What is the tangent return over variation? What do I like? What I like to have to return the more the possible?  
What a risk.  
No, the lowest, the better. So what I want the numerator of the tangent, what I want the numerator to be the highest possible. What about the denominator?  
The lowest possible. So what I would like regarding the Italian be the highest, the highest Italian is the better.  
Because I want more return and I want less risk, yes.  
What is the name of the tangent?  
What is the name of the of the Italian? We don't know. It's a ratio.  
It's a sharp ratio, sharp ratio. Have you heard about sharp ratio? Have you ever heard about sharp ratio? Don't say no because I have already met you last class. No, just kidding.  
Especially exact ratio is really used on the English. You have stocks and normally a lot of people will tell you if it is our ratio and what people will want the highest exact ratio the left.  
What are we doing when calculating sub ratio? We don't over risk the highest, the sub ratio. You have a lot of stuff to calculate sub ratio all and which one would you prefer?  
The one with the highest up ratio. This is not so difficult once you understand it. What are we looking for? The higher sub ratio, the better. What is that ratio? The tangent that also is we turn over risk.  
One highest return possible and the lowest to risk. Make sense.  
OK.  
This is the separation.  
And you can consider it as price of risk. How much this is the slope, how much return you are getting in terms of risk?  
OK. At the end, capital allocation line, the question is risk free plus our ratio times standard deviation.  
Here with the same example from last day.  
The expected return of on US is 13.6%, standard deviation is 15.4%.  
You can calculate given the risk free rate, you can calculate the SAP ratio. If you've got the SAP ratio, how do you calculate it? By doing 30.6% -, 5% over.  
15.4% and this gives you 0.56, Yep.  
What is our ratio? The slope. The slope of what of the investment of opportunity set that combines the risk rate with the asset?  
I'm.  
This is what I have already drawn. Make sense.  
And you can also short the risk free asset. I will never recommend anyone to do this, but if you short the risk free asset you will have this part of the line. Make sense.  
Yep.  
OK then.  
Oh, how can I get a 17.9% better return by investing? Let me come back here.  
Let me come back here. I'm going to erase this one.  
I've raised you so .56% I have expected return on the portfolio. Yes is risk rate is 5%.  
Plus.  
Oh, .56 times, Yep.  
The question is how can I get a 70.9% of expected return?  
Who can I get that 70?  
.9% of return, yes.  
There are several ways in order to solve this exercise. Having the spectrum return, you can calculate the weights, but what I'm going to do is quickly.  
First, I'm going to calculate the standard deviation, yes. Standard deviation on the portfolio is 70.9% -, 5% over 0.56, yes.  
And you go to the Excel.  
This is Spanish and here standard deviation is.  
7.9% -, 5%.  
Over 0.56, yes.  
This is.  
The standard deviation on the portfolio.  
And before and now how can I calculate the weight?  
How can I calculate the weight?  
How can I calculate the weight?  
Here you've got once you know the weight.  
The way it is, the standard deviation on the portfolio over the deviation of the Yep.  
Standard deviation the way you can calculate the weight.  
You can calculate the weight. I do it standard deviation.  
The portfolio over under the national US, yes.  
Once I go to the standard, the standard deviation.  
So the way I press I have press something.  
This does not work properly. Standardization on US was.  
15.4 person 15 point.  
4% and this would be 1.5 more or less. Yes, the weight is 1.5 and 50%. So how can I get this portfolio by sorting?  
How can I get a highest return? Look what I'm what I'm asking. Take the return of US is 13.6%, yes? How can I get more return than 30.6%? How can I get the 17.9%?  
By sorting the risk-free asset. What I'm doing if I sort the risk-free asset instead of 13 points, I will be going this way.  
This is 100 hundred 150 would be around here.  
Makes sense.  
OK, what is the standard deviation of for this portfolio? I have already calculated. Can you do this in the real world? Yes, you can. You can short instead of asking for money. Sorry, instead of buying, instead of giving money, you can ask for money.  
What is the point on certain that in the future you should pay back the loan you have asked for? Yep.  
OK.  
If you have understood this, we are almost done. There is one little thing more to understand that is more simple, yes.  
Instead of Buenas it.  
I have two assets, yes.  
And also I have.  
They're risk free. Please. I want all of your attention. Yes, please.  
What can I do? I can combine the risk free asset with this one or also for example with this portfolio I'm going to draw this.  
Yes, Yep.  
I can combine the risk free with this one for example.  
Make sense?  
And here I put one portfolio and here I've got another one or also I can combine this.  
Yes.  
You can choose.  
Because you can choose what are we talking about today? Capital location, you can choose.  
Let's choose between all these investment opportunities set or this one. Which one would you choose? The one with the highest SARS raised, the one with the highest is low. Make sense?  
So at the end you have investment opportunities set that combines asset A with asset B.  
What are we going to look for among all of these portfolios? Which one is the portfolio that has the highest SARP ratio?  
Yeah, all portfolios. We will calculate the ratio of all portfolios and we will take the one with the height.  
What should we find the one with the highest?  
We can forget about all these portfolios, yes, and we can draw the investment. Let me, yes.  
The talent, the talent portfolio will be the portfolio with the highest ratio we can grow. It has been opportunity set.  
And at the end, I am an impressed, yes.  
Which portfolio would you prefer?  
Which portfolio will you prepare? There are two assets.  
Which portfolio would you prefer? You will always prefer the portfolio with the highest ratio, and you will then combine this portfolio with the which we asked.  
I have two assets. I have infinity for for I would prepare the portfolio and then I will combine this portfolio with it.  
Just like you will see that this is called a two bonds theory, yes.  
That you already understand, so.  
Next class, next class we will see that this idea not only apply with two assets and have two 300 and have lots, no matter how much you will draw, we will go with 3/5.  
We will grow the investment opportunity set or a cloud of points, the efficient frontier. We will grow the efficient frontier and if you have 50 stocks we will look for, we will simulate all possible portfolios.  
And we will look among all these portfolios for the portfolio that has the highest rate. But today we are just working with you. Let me continue. Sorry quickly at the end.  
I'm looking for.  
The portfolio that I like, we have already talked about this and if I have two risky assets.  
I don't like this draw too much. Why? Because if you look this one, this doesn't look as the tangent portfolio. This looks more like the minimum variance portfolio. But please, this is not the minimum variance portfolio, it's the tangent.  
The tangency portfolio, yes, the highest ratio and at the end.  
What is the name we will be playing when talking about portfolio theory from now till the end? This is the game. We will create the investment opportunity set, then we will find the highest sharp ratio, yes.  
And once you find find the highest ratio portfolio, we will, we will combine the highest ratio portfolio with the risk we asset.  
We will choose a combination of the tangency portfolio and the risk tree asset. Make sense.  
OK, what are the names of the portfolios corresponding to the following points?  
A minimum variance portfolio.  
B.  
Risk free asset.  
The efficient highest charge ratio, C highest charge ratio and D the portfolio that I will choose depending on my risk profile considering that efficient curve, yes.  
Now one example. Imagine that one quick example.  
Oh, this has moved. I have pressed Lopez. OK, perfect.  
I have.  
Portfolio C consists portfolio. Highest SAP ratio, yes, highest.  
Raise to your.  
Portfolio as.  
Weight on US 60% and weight on Japan. Weight on US.  
60% and wait on Japan 40 percent, 1 -, 60%. Make sense?  
The idea is portfolio D portfolio D has a 40% portfolio D has portfolio D has a 40%.  
Risk free. Yes, I have a portfolio with a 40% on the risk free.  
How much I will have on US and Japan? How much I will have on this portfolio? I will have a 60% on this portfolio, yes.  
Yep.  
And the weights I would have on US would be, oh sorry, 60%.  
And how much I will have on US 60% + 60% 6 * 636% yes and 60% * 46 * 424%.  
Time for 24%.  
And also I would still have a 40% on the risk free and what are total rates?  
Sam.  
Look away, Sir.  
Oh, sorry, Total weights are the sum of these three that is 100%.  
Make sense? So I have solved this at the end. What I have already told you, two phone separation, all investors hold combinations of the same two.  
Pounds, a combination of the risk-free and the highest sharp ratio, the tangency portfolio, yes, and depending on your risk conversion, you will choose one combination or another one.  
And finally, at the end, all investors should have the rest of their or their weight invested in the tangency profile. At the end you will have.  
But all investors should have the rest of the wealth at the end. If you are a rational investor, you will always choose a combination between.  
Risk free and the highest average.  
This class will continue.  
In order to understand next class, you should fully understand today's class.  
And things are going to become a little bit more complicated in the near future for those of you that don't understand what we have already done. Makes sense. One quickly thing before we you can go, you can go, but let me just.  
Here show you one quickly thing NYU. Yes, this is the WhatsApp group. In the description of the WhatsApp group you have one link.  
This link here you've got all the transcripts.  
If you choose.  
I'm going to choose S6 transcript.  
Not only you have the transcription, but also you have a quick summary of what I have said during the course during the class.  
Transition to portfolio theory. Portfolio ways. Wait on a set one. Oh, sorry for this format. This is not the most beautiful thing. I expect a return on the portfolio. Whiskey of a portfolio. Here you've got a summary of the transcription. Also you can take this into ChatGPT and ask.  
Here and and also please, I have office hours. I have WhatsApp. You can contact me. There is no need to ask that GPT for nothing. You have myself. But what I want you to what I want you to see that you are full of resources in order to track what we are doing to go back in time.  
But no matter how much resources you have in the gym, no matter how good the machines of the gym there are.  
You know what you should do with the machines of the gym, no?  
Workout. OK, I'm done.  
Thank you. Enjoy the weekend. Are you travelling?  
Where are you going? Oh, yeah, Valencia is lovely. Please. One question. Homework. Start with the homework. The homework question. There's a question on the homework that's in the first question gives us the standard.  
So it gives us the expected return and asks us to find the weight of the two countries. We can do that in two ways. We can use like the like the table that we made, remember last class and we can and we can check it until we get the standard until we get the return.  
Or we can do it through a formula where we can uh use like for example the weight of spin is equal to 1 -, 2. If you're associating the formula, which one would you like us to?  
Or the humble without any doubt.  
No, no for the homework both you can go because there's another question in the same part where it has in the in the midterm you will not have excel but I will not ask you things as complicated as the one you have for the.  
But if you go through this in two ways.  
Yeah, yeah, because also like the thing, the other question, I mean, Brian, there is another question.  
That you cannot get the answer if you don't try to do it with Excel and trial and error or do it or at least trial and error or using the solvent. Yeah, I I use the solvent for it but but.  
If you don't know how to use solver in Excel, personally I will not invest time trying to work out how to get it. The point is understanding how to manage, what are the weights, how to calculate returns, how to calculate the variance of the portfolio.  
Jessica, are you understanding things? Most most of them.  
Help me a little. Help. Help me a little. Do you live in same? Do you live close or near? So unfortunately not. No, she's like my best friend. We'll study together. I think she no, I think she gets it. But you understand the point.  
Help me a little bit. Yeah, yeah, yeah. Perfect. Thanks. Thanks a lot.  
Oh, I'm on the way. I need.  
And yes, yeah, and then interviews. Don't move. Don't like, like here. Sorry.  
I feel as if you are understanding everything.  
Yeah, but I I feel comfortable.  
I correct me if I'm wrong, please. Perfect. Welcome.  
Yeah. So the risk free, like the risk free asset is where the standard deviation is 0, yeah. So that I understand there is a risk free asset, but about this line, the whole line itself is not the line of the risk free asset, right? Because.  
No, no, it's not. It's not the line. It's not the line of the rich reasset. It's the investment opportunity set that combines in this case and that combines this. So like, are you trying to connect this point at this point? No, I mean at this point.  
The highest ratio. Yeah, the highest. Yeah, this is the risk free. Yeah. And in this point, in this point you have a portfolio that is 50%.  
On this and 50% on the room street. OK, here you have a property that is.  
This is also portfolio. This portfolio. This portfolio has a percentage of this and on this. Look, look, look. And I'm going to share it. Look this example. Yeah, yeah, yeah.  
I have 40% and 60% here in this case 40.  
And 60 and then this one consists all.  
36% on this and 24% on this. Sorry, no, this one consists on 60 and 40 on this. And in this portfolio, what do I have? I have 3 assets, 40% on this and 36% on this and 24% on that.  
So this is a list guess, but like what is this? Like what is the like 0 if a is this 10 year, 10 year, 10 year, US, OK, the return on at 10 year USDUSD and that's like.  
Like for sure it is like it gives a guarantee. If you wait for 10 years, you will get. But that's anyone. Anyone will give you this. Yes. Except if it's like a D rated point or a seeded. No, I mean you you should. No, no, no, no.  
I mean, anyone will give you this, but you should tell me to account the credit rate, the rate, the rate. That's what that's your point. The rating, right? The A AA, AAA. The rating has to do with credit risk, but we will talk about rating.  
Yeah. No, we're talking about, we're talking about fixed income. Yeah, but do we want A AAAWAB? Yeah, depend on the Standard and Poor, smoothies or fees are rating agencies, but rating, rating has to do with credit risk.  
The risk free rate is risk free. Yes, bond with rating is not risk free. Oh, OK, good. I understand even if it's like a AAA bond.  
Even if it's like the highest rated one, I mean, I like your question and let me answer.  
For a US citizen.  
US bombs are risk free.  
But careful because they have missed the the the US bond is not free play anymore. Oh.  
What I mean for me, Spanish balls I think has a 9A9 degree are are far from being to play, but for me that I am Spanish, my risk rate is the Spanish.  
Yeah, what does this mean? But again, this isn't just theory, right? It's not in practice. Like in practice, no asset can be fully explained.  
Yeah. And this is what I was going to what I want to tell you and I will tell you in class later. No, no. But please listen. Listen, because it's important. Imagine that you have a cancer. Cancer. The doctor will tell you just the answers you will ask for and because.  
You are asking proper questions. I want, I desire to answer. I don't care if we will see this later or not, but once you are asking the question is the moment when you are prepared to listen to the to the answer.  
And and this question is absolutely important, the question that you have say in theory and in practice because if you read a lot of the like if you read a lot of finance literature like literature that's written on like investors and stuff, I think it's it's pretty much stable like.  
There is like no asset that is like putting this. I mean you cannot DPP things, but this is theoretical, right? It's like I want to answer, I want to answer and I want first before answering. I want to serve this.  
I don't want to take too long of your time. No, don't worry. Don't worry. Don't worry. I don't if you know.  
Does your weekend also start today? Does your weekend also start today? No, no. Yours. Even my weekend does not start today. Yours also mine, mine does.  
Back. Whatever. Don't tell me. OK, no, but come, come, Garth, because the question is important.  
And let me answer you properly.  
And and I I would like, I would like to be recording this answer because are important things that should stay should be keeping.  
I'm still recording.  
I am still recording, so happy. I don't know if I am still recording, but in case I am still recording, I will. I am still recording. The question you have asked is if in real life.  
Does something really risk-free exist in real life? And the answer is no. There are no risk-free assets in life. But what I want you to to understand.  
Is that the whole system is based on the existence of a risk free asset. What I want you to see is that life is a fantasy. Let me explain better. What I'm saying is that.  
If a Gobermann.  
Will not pay in debt. All things I'm saying in my class are ********. Nothing will work.  
Thinking about the Greek crisis, thinking about Argentina, thinking about Venezuela, countries with high hyperinflection, or thinking about US and public expenditure, thinking about Japan that has.  
250% over GDP of debt, debt over GDP, 250%. What I'm saying is that.  
All governments pay their debt.  
I'm not saying that all governments pay their debt. What I'm saying is that in case a government will not pay their debt, all things that I am explaining in this case, in this class, will mean nothing.  
Thinking an extreme case, war, war. I will take what is yours and I will take it for me. Nothing of what I'm saying. So what I'm saying is that the risk free idea is a notion.  
That constitute a foundation of finance. So this idea that there is a risk-free asset and that this risk-free and that the US government will pay their debt for all US citizens.  
Not only is important, is the base of the whole system, of the whole markets. For a Spanish citizen, I don't care that my grade is lower than Germany or than the yours for my country, for my system.  
Spanish public debt is everything because if Spanish government will not pay their debt, I cannot trust in anything else from the financial system is based on confidence.  
And if the government breaks this confident.  
You cannot trust. I mean, I can't trust people, but in terms of what I'm explaining in my class.