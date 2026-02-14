# Foundations of Finance (FoF) – Session 9  
**NYU | February 16, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 16min  

---

# 1. Context

Session 6 → Portfolio mechanics (2 assets)  
Session 7 → Preferences  
Session 8 → Risk-free asset + Sharpe + Two-Fund Separation  
Session 9 → Many assets + Diversification limits + Systematic risk  

> If Session 8 simplifies the geometry,  
> Session 9 explains what risk actually remains.

---

# 2. From Two Assets to Many Assets

## 2.1 Return with N Assets

$$
E(R_p) = \sum_{i=1}^{N} w_i E(R_i)
$$

Simple weighted average.

---

## 2.2 Variance with N Assets

General formula:

$$
\sigma_p^2 =
\sum_{i=1}^{N} w_i^2 \sigma_i^2
+
\sum_{i \neq j} w_i w_j Cov_{ij}
$$

Two parts:

1. Weighted variances  
2. Weighted covariances  

---

# 3. Covariance Matrix

We organize everything in a covariance matrix:

$$
\Sigma =
\begin{pmatrix}
\sigma_1^2 & Cov_{12} & \dots \\
Cov_{21} & \sigma_2^2 & \dots \\
\vdots & \vdots & \ddots
\end{pmatrix}
$$

Properties:

- Diagonal = variances
- Symmetric
- Total elements = \(N^2\)
- Covariances = \(N(N-1)\)

This is where complexity explodes.

---

# 4. Monte Carlo Portfolio Simulation

Instead of solving analytically:

- Generate random weights
- Enforce ∑w = 1
- Compute return and risk
- Plot cloud of portfolios

From the cloud:

- Identify efficient frontier
- Identify highest Sharpe ratio

Same logic as before.
Just more dimensions.

---

# 5. Two-Fund Separation Still Holds

Even with 5, 50, or 500 assets:

1. Find tangency portfolio
2. Combine with risk-free

No change in principle.

---

# 6. Equal-Weight Thought Experiment

Now comes the key theoretical step.

Assume:

- N assets
- Equal weights: \( w = 1/N \)
- Initially: Covariances = 0

Then:

$$
\sigma_p^2 = \frac{1}{N} \overline{\sigma^2}
$$

As:

$$
N \to \infty
$$

$$
\sigma_p^2 \to 0
$$

---

## Interpretation

If covariances were zero:

> All risk could be diversified away.

But this is false in reality.

---

# 7. When Covariance ≠ 0

Full result:

$$
\sigma_p^2 =
\frac{1}{N} \overline{\sigma^2}
+
\left(1 - \frac{1}{N}\right) \overline{Cov}
$$

Two components:

1. Diversifiable part → disappears as N grows
2. Covariance part → remains

As:

$$
N \to \infty
$$

$$
\sigma_p^2 \to \overline{Cov}
$$

---

# 8. Core Concept of the Session

Risk has two components:

## 8.1 Idiosyncratic Risk
- Firm-specific
- Diversifiable
- Vanishes with large N

## 8.2 Systematic Risk
- Market-wide
- Non-diversifiable
- Remains even if N → ∞

---

# 9. Intuition Example

- Student fails because didn’t study → idiosyncratic
- Exam canceled for everyone → systematic

- Company mismanagement → idiosyncratic
- Financial crisis → systematic

---

# 10. Real Market Example

Index examples:

- IBEX 35
- DAX 40
- FTSE 100
- S&P 500

With 35–500 stocks:

- Idiosyncratic risk largely eliminated
- Systematic risk remains

Even Warren Buffett cannot diversify away market crashes.

The only way to eliminate systematic risk:

> Exit the market.

---

# 11. Important Implementation Insight

Full covariance matrix requires:

$$
\frac{N(N-1)}{2}
$$

parameters.

For N = 500:

125,000+ parameters.

This becomes impractical.

We need simplification.

---

# 12. Why This Session Matters

Session 9 delivers the key insight that makes CAPM possible:

> Only systematic risk should be priced.

Idiosyncratic risk:
- Can be diversified
- Therefore should not command a premium

---

# 13. Transition to Next Session

Next step:

- Formalize systematic risk
- Introduce beta
- Derive Security Market Line
- CAPM

---

# 14. Final Conceptual Takeaway

Diversification eliminates:

- Noise

Diversification does not eliminate:

- Exposure to the system itself

Markets reward only the risk you cannot escape.


# Transcription
16 de febrero de 2026, 5:06p.m.
1 h 16 min 47 s
Yes.  
Oh.  
OK.  
Yes.  
Yes.  
No.  
OK, let me know ideas before starting.  
Let me.  
3456, yeah, which?  
Is Marie.  
Done.  
If you got out of.  
So so we so is missing and also but whatever I will wait for.  
For two or two minutes.  
Mm.  
I mean, I'm not.  
It is.  
So this is things. So it's easy to insert that half past three. So there is no.  
In further 15 minutes I think you can go work there and it will take one hour and we will come back here and it's the day before the meeting. We will dedicate that class to review all things regarding the meeting.  
Yeah, next this Wednesday. This Wednesday I'm going to give you 2 sample meeter, sample meeter one, sample meeter two. Also all the information regarding the meeter. I will give you this Wednesday, yes.  
So a.  
So, so, so.  
Here.  
OK.  
Sure.  
OK, this is first idea.  
Not.  
Next, sorry, this Wednesday, this Wednesday we will start talking about capping.  
Kathleen, why do you fully understand what we have seen?  
That's Wednesday. Catholics is simple, simplify our life, but reaching Cathel is complicated. You will not be asked to reach Cathel.  
Yes.  
What we are going to do today makes things more complicated, yes, like that.  
Yes, I have two balls or one ball. I play with one ball. I play with two balls.  
Things are more complicated. Instead of playing with two balls, I play with 345. I don't know the world record. 6 balls, yes.  
In the.  
In the meantime, you will not be asked to know how to work with more than two assets. Yes, in sample meeting we will see one specification with three assets, but working with three assets.  
We will not. I mean to ask to ask what we saw last day. Yes, risk free and true risk. The most complicated thing we are going to see regarding portfolio here. So you have.  
Poorly understand as class.  
Today you can just relax and make it easy. Yes, if you have not understood that's the class, today class will be more complicated. OK, don't worry regarding today's class, you should worry a little bit more about.  
Last class and in order to fully understand last class, you should go back to section 6. Yep.  
Any questions? OK, before starting.  
Let me go on. This number later will be a little bit more difficult, but I want because of that I want to start now. You are first and I want to.  
Imagine that.  
This is variance on asset one. This variance. Sorry, let me write it correctly. Variance on asset one is the same as same for variance between asset one and itself.  
Makes sense.  
This I'm going to draw the covariance matrix. What is the covariance matrix? It's a matrix that has its diagonal variances and then.  
What is he doing?  
One variance. The covariance between one and itself. That is variance, yes.  
Well, Maria between one and two.  
One and three.  
And why I said it make sense?  
It's a symmetric. It's a symmetric matrix. So here it should go.  
2121 is 1/2.  
Yeah, the covariance between God and myself, the same as the covariance between myself and God. Yeah.  
Guardians. Is it true?  
2/3.  
Audience to to.  
What are you doing?  
And to show.  
Great. Yeah, make sense.  
And then also.  
Read.  
Ambaliance.  
OK.  
Yes.  
But this this is a matrix that includes all covariance, all covalences and all variances.  
OK.  
Oh, many items.  
Yes.  
Does these madrids have?  
Total number of items.  
N square no.  
How many times it has N square? Yeah, because.  
I'm just counting how much intense, but.  
Oh, oh many.  
How many barriers is there?  
Number of my address N.  
Please.  
It's so it's asset has its size. There are N thoughts, so there are N make sense.  
I'm fine now.  
How many covariances there are? How many covariances there are? Number, total number of items.  
I'm losing.  
It.  
I'm just from me.  
And I can say.  
This is 10 times.  
And manage one this.  
Make sense?  
OK.  
Bye. I'm talking about that. I'm talking about that.  
Because we will use it later. Why I have to start talking about that? Because I want you.  
To clearly see this number because now you are fresh and later probably you are a little bit more sleepy. This is not going to be.  
One of the most amazing car classes of the coach. Yes, there will be times that we work with my.  
Yes.  
OK, that goes on one side.  
I have a portfolio with two assets. Yes, let me call asset A and asset B. First idea idea return on A is weight A times return A plus weight B times.  
Return me. What is the variance on the portfolio?  
With a square, thanks.  
Variance A plus weight B square times variance B.  
Plus two times weight A, weight B covariance between A&B.  
Does this formula?  
Looks sounds familiar for you, I wish this.  
Let me.  
Add one more. Yes, I include one more. That's it.  
In terms of return is simple, yes. In terms of return is simple. Wait three times returns.  
Let me calculate variance on the portfolio.  
By Nancy, yes.  
This is simple and regarding covariances, I should add two more terms.  
A or C AC and BC.  
Yeah, AC, I'm busy.  
Two times.  
Wait a wait C covariance between AC.  
B weight C covariance between BC.  
With two S's.  
I can call this A.  
Me.  
And I can say here.  
Baby, baby. Yes, I have two. I have two.  
All audiences fair.  
Yeah.  
OK. All of you see understand what I have done there. I'm going to take, I have share with you today. Oh, sorry, these are basic slides.  
And I have served with you today.  
Two Excel files, yes.  
I have shared with you two Excel files.  
I'm gonna open first excel file, the one that has stylist.  
Portfolio with three assets.  
Portfolio with three actions is this one, yes.  
OK, I'm gonna here. You can touch. I mean, you can touch whatever you want, but.  
If you touch something that is not in yellow, you can break it, yes.  
I'm gonna here write zero and zero. And if I write zero and zero, I will just have a set.  
C.  
I will just have one, I said. Yep.  
Then I can activate this one.  
Or I can activate this one, yes.  
OK.  
Alright.  
What do I have?  
That's it.  
Hey.  
B Yes.  
First, what can I do between asset A and B? Same thing I can draw BR and C or the same A and C, yes.  
These are three different investment opportunities and also for example, we had good one portfolio.  
I can combine these two portfolios into another.  
I can do this all times.  
I won. Are you following me?  
What does this represent?  
Monte Carlo analysis.  
Have you ever heard Monte Carlo? And what is this?  
Monte Carlo games from the roulette, the casino casino from the casino. What is an Monte Carlo analysis instead of growing 123 investment opportunity set I take.  
I think.  
I take 400 little bit more than 400 random numbers.  
Yep, I take 400 random numbers and this is the investment opportunity set that I get by taking 400 random weights.  
What is the total sum of all weights?  
Always is 1.  
What do I have here?  
400 different portfolios. For example, let me show you one this is.  
Weight A is a random number between zero and one. Weight B is a second random number between A.  
Between zero and weight A and C is 1 minus weight A with B with C.  
Makes sense.  
And once I know the weights, I came here and I calculate deviation. How do we, how do we get deviation by doing the square root of that big and long chorizo?  
Yep.  
We remember chorizos, pepperoni, a mixture between pepperoni and sausages.  
OK, uh.  
If you see the return.  
The return is a shorter territo is simple. Yes, OK, once we got this.  
What can we do? What can we do? We can grow.  
Take efficient from here.  
Why is efficient from here?  
But is there any frontier all these points? Yes.  
Would you choose this point, this portfolio or or this point? You will only choose what portfolio that same.  
The increase you will choose the highest, which is possible. Make sense.  
OK, I'm not here. The minimum management portfolio, the efficient frontier, yes.  
To me, girl, please.  
It's one step go if we see it from here.  
I have I read read essay.  
What can I do?  
What can I do?  
I can look for the highest search rates. Among all these portfolios, I can look for the highest search ratio.  
Or something like this.  
I didn't like this.  
So at the end.  
We are exactly at the same point.  
that we were only last class. We are.  
You know, you have. You love risk. You don't like. You are risk colors. You will choose one. No matter how much points do we have.  
We will look for a combination between the mid screen portfolio and the highest Sr. ratio portfolio.  
OK.  
Let me start with.  
The flights and then in 2 minutes I will come back.  
OK.  
What are we gonna do today?  
First we will work.  
With many risky securities, I've already started talking about working with many risky securities, yes.  
And then we will see.  
What happens if instead of three stocks?  
We take Infinite stocks, yes, we make, we create a.  
Incredible, huge portfolio.  
Makes sense.  
OK, portfolio selection with a risk free and many risky securities. Then I will introduce single systematic and idiosyncratic risk. OK.  
If we have two stocks, this is the investment opportunity set. Yes. Oh, let me, I have create and I'm going to share it with you.  
I'm I'm an AI addict, AI addict.  
I don't know what has happened.  
I'm here.  
Or this is, but whatever I'm gonna serve the resource and you you have the resource in English. Yes, it is written.  
Rental area means equity, yes, inside equity.  
First one, Marco.  
Open in new window, yes.  
Tell me copy.  
To security.  
To security this.  
Here you've got a button.  
Treats doing this.  
What is this? You yes, you can just change these numbers.  
And it changes, yes. And then you can also change the weights.  
You will get portfolio and white diversification. Makes sense.  
This is just again, I mean there is no point in showing this or it is. I don't know if it is or not. Then Markovic power of diversification, then second one.  
GML just combining 2 assets, asset A and asset B with a risk free asset, yes.  
And you can calculate the highest ratio.  
Second one makes sense.  
To security is plus risk free.  
OK, here these two securities also you can choose.  
Here, second that is.  
Classes. Oh no, there is no way in order just to put one asset.  
Oh, yes.  
City Greenlees, the Securities and the wishes.  
OK, I I want to show you.  
Yeah.  
Yeah, this one is slightly different. Here you can write the ticket of a company. For example, here you've got Apple, Google, Tesla.  
Which one is this one? Exxon. Exxon. Exxon. Exxon Mobil. Exxon has is a gas.  
Speaker.  
No, John.  
Whatever. So I think it's excellent.  
I think it's.  
Exxon Mobil. That is energy. But yes, excellent. And whatever. Let me just think about Marco Santander. Yes, Sam.  
You just ran Markovic model.  
And what can you find here? The stocks and the investment opportunities make sense.  
What is this thing on the right we will discover?  
Next week, yes.  
OK.  
Here, let me come back. What do we have here? The investment opportunity is set for two stocks. Then you can include a third one, yes.  
And.  
I have. We have the investment opportunity set for all. Any questions?  
Fishing frontier, inefficient minimum variance portfolio and that's it.  
Next step.  
We have 3 stocks. We have 5 stocks.  
First thing we can do is to draw the investment opportunity set, all possible combinations. Then once we have all possible portfolios, we can look for the efficient frontier. And finally, once we have the efficient frontier, we can look for the highest.  
And then draw they.  
Capital asset line, all the line were all assets. Once we have the investment opportunities set, there is no need to look for the efficient frontier. We can look directly for the highest up rates. Make sense.  
OK, at the end we finished last class talking about the two phone separation.  
What does this mean? That no matter how many assets do we have in the world, at the end everyone will look for just a combination of two assets, the highest ratio combined with the risk rate.  
Yep.  
OK, now before going further.  
Let me show you.  
The other exit.  
It's Excel.  
These excel.  
Has been created by a Professor Gray Holden that passed away two years ago, yes.  
Simple to understand, but please follow me and follow me.  
How many assets do we have?  
Now, we squeeze it plus five more. Yes, we squeeze it has a standard deviation of zero.  
And delegation of CEO.  
We can.  
We can increase for person. We can make this point, red point going.  
Going up or down, yes.  
Then being apart, every spray to have five more assets.  
That you have these five assets in blue.  
I said one.  
Take that return 5% and Greece of 60%.  
I said.  
You can only just choose. You can just choose what I said. When you ever choose, I said what?  
No, because.  
I said true.  
Better, better than. I said one and I said two is the lesson is better than all the other assets.  
Because she has said true has the highest return and then low waste risk compared with the others, yes.  
Now.  
1/2.  
Now.  
Three and four, then return.  
And three is less risky before report same return 10% and three is.  
Less risk and four and five, same risk, four and five, same risk, but I said five will have more return, has more return, more respect the return.  
Make sense?  
Make sense?  
OK, now all of us understand what is this? What is this?  
Espiration for incest, yes then.  
What is this?  
Disease.  
A covariance matrix, but with co-relations instead of covariance and co-relations, yes.  
It says.  
This is.  
The covariance matrix or the correlation matrix, but the correlation matrix correlation instead of covariance.  
Here you can see here that we can increase correlation between as a one or we can increase all of it.  
Any question of reach at this point, but what we will have the deviation return, please and the correlation matters.  
Uh.  
What is this portfolio? These are the weights. I said one, I said two, I said three, four, five. These are the weights for the P-Mu Maya's portfolio.  
We don't care too much about the minimum variance. Is there? Yeah, because.  
And which one is the portfolio that we care a lot?  
I guess in Greek.  
well you are with me  
Before start talking.  
This is the highest average. Which one was the best asset?  
True. So wait on as a true is more than the half, more than the half of the portfolio.  
Consist on as it should, yes.  
We have said that this has it in the world.  
All the words because she has less.  
He's less busy than this day, but he's had no desirable or full.  
We don't like it. No matter how much we dislike. Mr. Pampleio.  
The big way. It has a way.  
Makes sense.  
No matter how glad you are.  
Matter. That's how we make sense.  
Why this has has a way? Why it matter? Because of diversification. The more diversify yes now if you see.  
Three, four, five, three, four, five. Three and five are better than four.  
Because of that three and five, wait more this.  
We compare three with five. Personally I would not say I prefer three or five because you are paying in order to get in order to get more return. You are paying more risk.  
as it's the same, and you see, as a thought, that is worth.  
Wait, make sense?  
Yes, all of you understand this area.  
What I'm gonna do?  
I'm going to.  
3-4 or 4-5? What do you prefer? 3-4 or 4-5?  
No, but I mean, I'm going to start those two things. What do you want me to touch? Correlation between 3:00 and 4:00 or four or five? OK, I'm going to 4.  
I'm going to start increasing the work. I'm going to start making.  
Four and five more correlated. Yes, I'm going to start increasing correlation and let's see and we will see what happens with these waves as I increase this correlation.  
What common sense steps? The more correlated there are, the less I can deserve I I can.  
Be better. So because five is better, this weight will increase and this weight will decrease. Patience.  
Let me.  
From here you see the weights.  
4-5, yes.  
OK.  
Look angry for a reason.  
Are you seeing that when both weights has become shorter?  
This has decreased. We know what, but this has also decreased. Why? Because they look the same and the one that is winning is one that is more diverse than the two ones. You understand what I mean?  
And you don't need to your personal last. This is going to increase. This is going to increase. Also my personal would have been this one, yes.  
You see what is going on?  
Please, I need your attention.  
4% 40.  
Raise 7070%, yes.  
1.7 and looked away, yes, 19.  
What is going on?  
What happened?  
Huh.  
If both assets as perfect correlation, what I'm going to do? I'm going to show that one and I will start by the.  
The old one. This is called arbitrags. We will see after the meter. We will talk about arbitrags after the meter. And I want you to see this effect that this is.  
OK, but this has become crazy.  
If both behaves the same by saying one, neither this instead of be 99% will be 100.  
I can't break our whisk.  
I can combine a rich person by combining each ones, yes.  
Today's class, you don't need to fully understand today's class, but today's class helps understanding previous class. Yes? In order to fully understand today's class, you should fully understand previous class. Yes?  
And for the meeting, you don't need one.  
What you should do for remittance is problem set to.  
Do you have any questions? Do you have any? Do you have any question regarding promise and show?  
You mean you go to any room existed where I'm from?  
OK.  
Let me continue.  
All investors at the end will will hold a combination of the risk free asset and the tangency performance.  
OK, this is regarding the excel that we have just seen.  
Calculates optimal portfolio. The Excel calculates optimal portfolio with five risky assets and one risk free asset, yes.  
Why does optimal portfolio overload on asset two? Because it's much better than the rest.  
Then why hold asset four at all being worse than three and five because of diversification? Same question apply to asset one, yes.  
And the importance of correlation. As we increase correlation, we don't need.  
I said for at all at once correlation becomes so, so, so strong we start sorting asset for make sense.  
OK, this is here just to close.  
Understanding and excel, yes.  
Any questions?  
I'm going to come here and I'm going to add, I'm going to add a third, a four, a four. Let me add a four.  
Wave B.  
Yeah.  
And here plus YD square variance D Yes, I'm going to write it with you plus two times weight A YD weight AD.  
Last two times. Wait day, wait D, wait D.  
B&D + 2 times weight C weight D covariance between C&D yes.  
I'm making this big.  
I'm making this big.  
With two securities, I want that.  
To security.  
I have this. If I have more than two securities, what do I have here?  
From first to security and yes.  
From the first to security N weight X or weight Y right to the square variance distance.  
Last two times.  
Thanks.  
I'm between.  
For the first one between 1st and the 2nd.  
better than the second, better than the third, yes?  
From J that is higher than one to the last one. Make sense.  
What I'm doing here? Hearing this term?  
I am considering this times wait, this times wait, this time wait till N yes and then what I'm doing is this one.  
Class did you want time way class? Yes.  
Why? Where does this shoe came from? Because they are.  
Two covariances where it was yes.  
I'm doing this way today.  
So on one hand I'm taking into account these ones and two times because also I'm taking the others. Make sense.  
OK now.  
What is that?  
Variance on the portfolio, yes.  
Hold the sound. I am repeating the same equation, yes.  
Wait way where? Yes.  
Plus.  
Two times. Let me do just one with my with a.  
Thanks covariance between Y&J.  
Yes.  
But I have here soon rewrite equation in a shorter way.  
Now what we are going to do, we are going to take some assumptions.  
Some assumptions. First approach the assumptions we are going to take are strong.  
Where's the assumption?  
Always are equal.  
Always are equal. You guys always are equal. How many stocks do we have? N no.  
The sum of all weights is going to be equal to.  
Well, I know.  
How many weights there are in? So if all weights are equal.  
We have in.  
Thanks their wait.  
Equals to what? No. So if all weights are equal, I can say that weight is equal to 1 / N.  
Makes sense.  
All ways are people, its way.  
We wait.  
One over N.  
Yes.  
This assumption will prevent second assumption because I want to understand what is going on first as a second assumption that the first packets will be that all governance will be.  
Yes.  
So if all covariances are zero, I will not care about this term.  
Yes, please.  
Let me calculate the variance.  
On the portfolio, yes, finance on the portfolio always and same.  
Unequal, no. So I can say one over N square.  
Thanks.  
The sum of all lights.  
Yeah.  
Now because here I have.  
Two ends. I'm going to take one, put it here.  
And what is this? The other days?  
Of all balances, I've taken all balances. I have completed the average, yes, so at the end.  
What is the variance from? What is the variance from the portfolio people?  
Is the average of all variances? Yes. Now how to write this the average of all variances over 10, yes.  
If covariance is zero.  
The valiance on the portfolio.  
Us.  
And increases will decrease.  
This is 1 law in statistics. It's so common that is the law of big numbers. The higher you make the average, the less the values.  
On the performance and N then infinity.  
Alliance on the portfolio with them.  
What does this mean? This means that if covariance would be 0.  
I can take a portfolio you know that will diversify away all risk.  
Just considering that covariance is.  
Excels.  
Let me move one.  
Like further. Oh, this is the matrix, the covariance matrix, and this is the first approach that I have already done, yes.  
Suppose we have an equal weighted portfolio of N independent stocks, dependent because of variance is 0, yes the variance. We can calculate the variance of the portfolio as 1 / N.  
You have it.  
So as the number of facets increase, the reach completely diversify away. Make sense.  
OK, what is the point?  
What is the point that covariance?  
Normally covariance that is covariance that is correlation between assets. Correlation normally is not zero.  
OK, let's see.  
Let's see what is going on here, yes.  
I am from the portfolio. This part we already go.  
This is the.  
Over this.  
I.  
Let me think about the other term again. Wait times, wait two times.  
Are you follow me?  
Thanks.  
The sound of board of this, yes.  
It.  
Yeah.  
No.  
I want to write this in terms of.  
Yeah, it's.  
The average of the covariance, yes.  
In order to write this in terms of the average of the covariances.  
What should I write?  
I should multiply and divide this times the number of.  
My number of people, yes.  
OK, let me multiply.  
Make sense?  
No, never. Is this just like you guys understand today after this class in 5 minutes?  
I will ask you, have you understood all these things? You can say yes or not. If no, I will try you to understand it. I will try my best in order you to understand it, yes.  
And just immediately after you have understood all these formulas, I will tell you you can forget about it.  
Or the risk of your life.  
But this is a demonstration and this demonstration will take us mere closer to happen, yes.  
And what is the problem with these two?  
That this two is because we are taking two times this in order to calculate this average.  
Instead of two, this should be one, yes.  
Maybe I guess.  
N times N minus what? Yes.  
What is this? The evidence. And then.  
Let me.  
I need print here little bit small N times N -1.  
Over and square, yes.  
And this is equal to.  
Peace open with this.  
This is 1 -, 1 / X, yes.  
What is the idea?  
This is that.  
Variance on the portfolio.  
Is this formula that we have already seen that is the one that I have written in the blackboard on one side, on the other one, yes. And if we calculate, if we substitute and the number that we have say we get on one hand what we already know.  
1 / N times average variance, yes.  
And then plus.  
1 minus 1 over N times average covariance.  
Important thing conceptually the notion you should take from today's class. What happens if N tends to infinity? If N becomes big?  
We can diversify away all risk from the variants.  
But no matter how big he said.  
We cannot diversify away the part of the risk corresponding with the covariance, yes.  
If any here is what is.  
N tends to Infinity when N goes to Infinity.  
It.  
The part of the variance diversify away.  
No matter how big is N, we will have one times average covariance, so we cannot diversify away this part, yes.  
So as the number of assets grows large, you cannot get, you can get rid of a lot of the risk, the risk that came from the variance, but you cannot diversify away the risk that came from covariance, yes.  
There is one part that can that can be diversified. Which part can be diversified? But it's called the neosynchronic part. For example, regarding students, there are two students that has not a right.  
This has to do with them.  
Yes.  
You can diversify away the risk because you can serve the you can serve the the notes. I can send them the transcripts. I can diversify this part that is the issue graphic, yes, and there is one part that is systematic.  
For example that I have, let's take one part and I ask this part. No matter how well you have to study, you cannot pay this part, this or unexisted.  
You cannot diversify away or I am. I think this is a disaster. No matter how good you are, you cannot. You understand the point. There is one part of the risk that belongs. Which one? You can diversify this part.  
For example.  
If the light goes down, no matter how well you are, if we are there, if you don't have a pen, if we don't have a pen, there is a pandemic. If there is SP 100 goes down.  
No matter how well you are, there is one part of your risk that cannot be diversified away. For example, in mind that you don't respect Trump starts or or Biden starts, it says to all Americans.  
People has more money, people gets happy and people starve back. There is inflation. Are you under family? So there is part of the risk.  
That can't be diversified. There is one part that belongs to the market. Market is one word that we will say next step. Mark makes sense that cannot be diversified away.  
So at the end, when talking about the risk, what is risk? Variance, yes. From next class we will divide risk into into two different parts.  
One part that will be idiosyncratic, this part that will can be diversified away, and another part, a second part that will be systematic, no matter how well you are.  
You cannot diversify the systematic and we will just focus on the systematic. We will consider that we are excellent students that attend all day to class and once we consider that you are not excellent, sorry that everyone attends all day.  
And then we will say back, we will say this next day, then all hours you study.  
The better the results, the more the return, the more the risk, but in a linear way this this will be the SML, but we will talk about SML next day, so.  
It's not here and be well.  
He's not here.  
OK. Any questions? OK. What is this variance on the portfolio, no matter how many stocks you include in the portfolio?  
For example here.  
Perry and Foley will behave almost the same.  
So at the end, one idea in the case of space.  
Have you have a I I DEX 35 events technical?  
That's 40, AX 40, that's 40 for German. Boopsy FX FPS 100.  
FTS 104 UK.  
Have you heard of SP500? No, no SP500? You should have. You have already heard because I have already done. SP500 is one number, but it's no SP500 are the biggest stocks in the States.  
We have another 500 stops. In Spain we have, it is 35. We just 35 stops.  
100 stokes. You have 450 more stokes than what you need, but with 35 stokes, that's a good.  
A good sample. If you have a good sample or sample would be enough in order to consider that you have the whole.  
With 500 stocks, you have an example moving up in order to take these 500 stocks represent the whole market. Careful with SP500.  
We have to only just be 500 because there are no yes, this 500.  
Yes, but there are 7 stops.  
Represents more than 30%. I'm talking about the magnetic concern. How do you have a magnetic concern?  
I need a concern.  
There are seven stops that all of you have heard about.  
That's enough. I'm going to start by sides. Media. Have you heard about the media? It's the biggest company in the world. Cafex over 4 million for Cafex.  
The capitalization over 4 trillion Apple, Microsoft.  
Then alphabet. Alphabet is good.  
Amazon is bigger than this, but these are magnificent. But it's the point that among all SP500 there are seven companies that more match match more than the other. Therefore because SP500 is representative at magnificent 7.  
That's an important way. We don't need to know all these things for the meter, but this is general culture that at the end what we have done that instead of what is the idea?  
The idea is instead of having two stops, instead of having 10 stops, yes, by having 35, we have the whole market, yes.  
And.  
Diversification in crisis, no matter how well you are diversified if they if there is a crisis.  
and you are in the market, you will suffer.  
Do you know Warren Buffett?  
Versat Hathaway. This is portfolio. Warren Buffett is one of the best investors ever, only overperformed by Nancy Pelosi.  
That this is a joke, but Nancy Pelosi, do you know who is Nancy Pelosi? He's a congressman that invest.  
Because he has information and there are people that has been tracking what is the performance of Nancy Pelosi investments and she over perform everyone. Probably this has to do with inside information, but forget about Nancy Pelosi.  
Water buffet.  
Now is liquid. Warren Buffett has more than 80% of his portfolio liquid. He has dollars. Why? Because if there is a crisis, the only way you have to get rid away of systematic risk is not playing the game.  
And implementation at the end. What is the problem with implementation issues that?  
If you want to consider SP500, you will need at least 125,000 parameters. We need to simplify this idea a little bit, but not for today's class. For next class index models on one hand.  
Replicate the index and we will see next day the capping, yes.  
Conclusion. We will only work with the systematic risk. See you next day with problem set two. Any questions? Today's class.  
Right.  
I will not dedicate too much time to today's class. I will dedicate. If I were you, I will work hard on problem set two and before problem set two even understanding session 6 and then session 8.