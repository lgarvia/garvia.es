# Foundations of Finance (FoF) – Session 5  
**NYU | February 2, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 22min  

---

## 1. Objectives of the Session

Session 5 had two clear and connected objectives:

1. **Consolidate Time Value of Money** through Problem Set 1  
2. **Introduce Portfolio Theory**, focusing on:
   - Risk
   - Expected return
   - Variance
   - Covariance
   - Correlation

This session marks the **transition from valuing single assets** to **thinking in portfolios**.

---

## 2. Review of Problem Set 1 (Core Skills)

### 2.1 General Message

- Problem Set 1 is intentionally **the hardest problem set conceptually**
- The difficulty is **not formulas**
- The difficulty is:
  - Understanding timing
  - Drawing timelines
  - Knowing *where* to discount and *when*

> There is no “magic formula”.  
> There is **logic + timelines + present value**.

---

### 2.2 Key Mistakes Addressed

1. **Confusing APR with periodic rates**
2. **Forgetting when the first payment occurs**
3. **Discounting cash flows that occur today**
4. **Blindly applying annuity formulas**
5. **Not identifying the correct present-value date**

---

## 3. Annuities with Different Starting Dates

### 3.1 Payments Starting Today (Annuity Due)

- First payment at **time 0**
- That payment **is already present value**
- Remaining payments form a standard annuity

Strategy:
1. Compute PV of remaining payments
2. Add the immediate payment
3. Compound forward if needed

---

### 3.2 Payments Starting in the Future (Deferred Annuity)

- First payment occurs **after some delay**
- Steps:
  1. Compute PV at the start of the annuity
  2. Discount back to today

This logic was applied repeatedly in class.

---

## 4. Perpetuities vs Long Annuities

### 4.1 Key Insight

At reasonable discount rates (e.g. 5–8%):

- Cash flows beyond ~30–40 years contribute **almost nothing** to present value

Implication:
> A 50-year annuity can look almost identical to a perpetuity in PV terms.

---

## 5. Arithmetic vs Geometric Average (Critical Concept)

### 5.1 Example

Returns:
- Year 1: +100%
- Year 2: −50%

Arithmetic average:
$$
(100\% - 50\%) / 2 = 25\%
$$

Geometric average:
$$
\sqrt{(1+1)(1-0.5)} - 1 = 0\%
$$

### 5.2 Interpretation

- Arithmetic average **looks attractive**
- Geometric average reflects **actual wealth evolution**

> If you start with 1000 and end with 1000, your return is **0%**, not 25%.

---

## 6. Dividends and Reinvestment (Advanced HPR)

### 6.1 Key Idea

Total return depends on:
- Price appreciation
- Dividends
- **Reinvestment rate of dividends**

Three cases:
1. Reinvest at lower rate → lower realized HPR
2. Reinvest at higher rate → higher realized HPR
3. Reinvest at IRR → realized HPR = IRR

This explains **why IRR embeds a reinvestment assumption**.

---

## 7. Transition to Portfolio Theory

### 7.1 Why Portfolio Theory?

So far:
- One asset at a time
- One stream of cash flows

From now on:
> Risk is not about one asset  
> Risk is about **how assets move together**

---

## 8. Expected Return

### 8.1 Definition

Expected return:
$$
E(R) = \sum p_i R_i
$$

This is a **probability-weighted average**.

---

### 8.2 Interpretation

- Not a guarantee
- A statistical center of outcomes
- Foundation for portfolio construction

---

## 9. Variance and Standard Deviation

### 9.1 Variance

Variance measures:
> How far returns deviate from the expected return

Formula:
$$
\sigma^2 = \sum p_i (R_i - E(R))^2
$$

Squared units → difficult to interpret directly.

---

### 9.2 Standard Deviation

Standard deviation:
$$
\sigma = \sqrt{\sigma^2}
$$

- Same units as returns
- Interpretable as **risk**

---

## 10. Normal Distribution (Intuition)

- ~68% of outcomes within ±1σ
- ~95% within ±2σ
- ~99% within ±3σ

Used to **interpret risk**, not to predict exact outcomes.

---

## 11. Covariance and Correlation

### 11.1 Covariance

Covariance measures:
> Whether two assets move together

- Positive → move in same direction
- Negative → move in opposite directions
- Near zero → weak relationship

---

### 11.2 Correlation

Correlation coefficient:
$$
\rho = \frac{Cov(A,B)}{\sigma_A \sigma_B}
$$

- Bounded between −1 and +1
- Easier to interpret than covariance

---

### 11.3 Economic Intuition

Assets in the same industry:
- Tend to be **highly correlated**

Diversification requires:
> Assets that do **not** move together

---

## 12. First Portfolio Formulas (Preview)

### 12.1 Expected Return of a Portfolio

$$
E(R_p) = w_A E(R_A) + w_B E(R_B)
$$

---

### 12.2 Variance of a Portfolio

$$
\sigma_p^2 =
w_A^2 \sigma_A^2
+ w_B^2 \sigma_B^2
+ 2 w_A w_B Cov(A,B)
$$

This formula will be:
- Repeated
- Applied
- Internalized
over the next sessions.

---

## 13. Key Takeaways

1. Time value logic is now **mandatory**
2. Arithmetic averages can be misleading
3. Geometric averages track wealth
4. Risk requires variance, not intuition
5. Diversification depends on covariance
6. Portfolio risk ≠ sum of individual risks

---

## 14. What to Do Next

- Review Problem Set 1 again
- Focus on:
  - Timing
  - Reinvestment
  - Annualization
- Be ready for **Portfolio Theory I**

---

## 15. Next Session

- Portfolio construction
- Risk reduction through diversification
- Efficient combinations of assets

---



# Transcription
2 de febrero de 2026, 5:06p.m.

1 h 22 min 53 s

But I search in internet and I have a mortal illness. I'm gonna pass away.  
And I don't want people crying for me; I prefer a party.  
El prefer aparte.  
I'm gonna die.  
Yes, I prefer a party, and if you look in YouTube, the comments.  
At the same time, you are happy and crying. I have been detected a cancer and this song has given me the power of.  
It's.  
I mean, at the end, everyone goes to the same place.  
Yep.  
All of us goes and I have discovered this guy this weekend. I didn't know he did. I, with Peppa's from Farruko, I passed one whole year. I was one of the first Spanish that heard that song. Here I come late, I know. Also, Bad Bunny's from Puerto Rico.  
Let me show you, I have a cloud is a agent, not a cloud is an agent. I have discovered one week ago. I'm sure that I told you about cloud. Now I have Marry with cloud. Cloud is inside. I have dedicated one computer, one server just to cloud because of.  
Whatever. Let me show you, show you, show you, show you, show you where is myself? I'm looking for myself talking with myself.  
Yeah.  
Y si es clavo, yes.  
This is cloud and.  
Yes, make.  
Make a new inbox and make a new note.  
I have Discover Singers from Puerto Rico.  
Carruko, Pedro Capo, and disconnect with my student from NYU, and I have two other students from Puerto Rico also in another course. I have asked Cloud to make a note regarding Puerto Rico.  
Also.  
Añade a la nota de.  
Puerto rico a Bad Bunny, no.  
Y el nombre de mi estudiante de NYU is.  
Is Sofía.  
Sofia, and what else do I need to know from for Puerto Rico? I know that you have American passport, sorry, American passport from the States, that America is bigger. What else can I write from Puerto Rico? I'm gonna study all the things you told me.  
Sí.  
Rabo, rau, rau, rau.  
¿Qué hago?  
Happen on bothers.  
Yeah.  
You don't worry.  
Did you see?  
Ah, ok, ok, ok.  
Whatever, yeah, I, oh, I'm not gonna talk about, oh, Minneapolis have come to my mind with all respect.  
With a story, absolutely, whatever, OK.  
I am sending this to WhatsApp. This is WhatsApp, but this is connected with CloudBot.  
And whatever, sorry for this. Let me go. I have everything is there. Portfolio theory one and before portfolio theory one. Here is Excel and and and and and and here problem set one.  
Did you went through problems at life?  
Any questions regarding problems at one? I think there are problems at let me goes one by one. Yes?  
Wiki.  
The first one to be first exercise to be. I have been what's happening with someone in survey. Bueno, bien, second question.  
Consider a 10 years zero. I have a blow to bright space the solutions, and also I have shared in the WhatsApp group with you the solutions. Yes, I have shared today three things in the WhatsApp group. First thing I have shared.  
Are the solutions?  
They confirm it's slides five.  
A ver.  
Problem set to problem set two should be the leader they think of the run.  
In two weeks now, in two weeks. Okay. What is the price? What will problem to? I think it's also not busy, but once you know how to do it, there's not need to match the input. Yes?  
And.  
I'm gonna go through.  
Front 3.  
I'm five, yes, and I'm also problem set for it.  
A la.  
Oh.  
Here.  
Sorry, OK, let me start with this one.  
Call the Queen.  
Yeah.  
It's.  
Be this.  
Whatever.  
No.  
Okay.  
To both at his home, earns two person, then quarter in the year, yes?  
Third one, first question.  
Oh, it's great.  
Nothing.  
Hey.  
One plus.  
One plus two percent.  
Each quarter right through the fourth, 9 is what?  
This should be the technical rate. Yes. If you need $1 million in four years now, in four years, how much do you have to invest in the phone today?  
If you need 1 million dollars in four years, you'll best pay sourcing. Is calculating this is let me.  
Here, saying at least. Hey.  
B.  
I have a 2% quarterly eight boy, so.  
I invest one million today.  
Juan Million.  
One plus.  
How long four years, no?  
If I invest one million today, I will get for years, 1.3, yes, or I will get.  
I will get one class.  
Two person.  
Percent, they super look in that water.  
Rise to four thanks for.  
I have to six that we should be in Sena.  
Yo soy valiendo.  
I can.  
Close between.  
For years, or six mil months, if I talk, sorry, six work.  
If I talk in a year basis, I should use the effective handle brain. If I talk in a quarter basis, I should use the other.  
OK, me, see, if I invest one million today.  
Do you need what? Oh, sorry, this is Western C, yes.  
This is cuestión, sí.  
En cuestión de ellas, calculating presentario.  
One, two, three, one, two, three, over.  
Juan Plus.  
Percent.  
Right, 2, 6, yes.  
Is there any back?  
Pues.  
I.  
Okay.  
O.  
I want you to do the might advise for it too.  
Okay, question A, yeah, pretty good.  
Yeah, because it plus two person, I could divide divide four because the form that I have is like APR over T. Yeah, that. Superson is not APR. APR is in a gear basis.  
So, in this case, APR will be 8%.  
And again, careful with applying formulas with opting.  
Bien.  
Bill.  
B, OK, things are getting a little bit.  
more of the. If you invest 10,000 every quarter for 16 quarters, starting immediately,  
First investment at time zero, last investment, eat in quarters from now, home max.  
When you have at the end of four years, yes, careful with this one.  
Because again, if you are, I'm talking with all respect, yes, I'm talking with all respect, but if you are a formula.  
With this exercise, you are having problems, but.  
Because what I'm told is, I start today.  
Yeah, what?  
Sorry, water one, two, and...  
15.  
And then, yes.  
I, I only know one formula that is the new in the formula.  
Y.  
And how much I am investing 10,000, no?  
Del Thuser.  
Y 2, I just know the Nuity Fórmula.  
There are several ways in order to manage this. Yes, and I'm gonna do the one with the annuity formula present and teacher back.  
Para engonadoo.  
I'm gonna calculate.  
Once I know present value, I will calculate future value.  
Essence.  
Yep.  
And now I'm gonna make me, I'm gonna make you're gonna make person value that person value then we deform.  
Present value of diagnuity formulais.  
Then thousand over super save.  
Superson, because I am working in quarters, yes?  
One minus.  
One plus supercent.  
Price to something.  
Price 2.  
How many payments there are?  
Sixteen payments, no.  
Price to 16.  
Careful.  
I want your attention.  
I got making present value. First payment happens today.  
What is the present value of 10,000 today?  
Thousand from the first payment.  
Is not out of the police or is not right to the 60?  
So I'm not calculating presentario sixty payments. I am yes calculating presentario 15 payments.  
Juan Luis, ¿de dónde está?  
Yep.  
So, present Mario.  
Ice to the fifty, yes.  
And then.  
I am missing one more payment.  
Last 10,000, because 10,000 is percent varios, 10,000 how much worth 10,000 today, if I have 10,000 in my pocket now, how much monedas in my pocket now, 10,000.  
Yep.  
No.  
I wondy, and we go quick.  
E.  
10 thousand over.  
Percent.  
Thanks.  
Juan Railus.  
I'm nowhere.  
Ocho.  
Price to 15.  
Glass.  
Yes, this is the formula that I got, and this is present value. Future value, that is what I'm looking for, is this one plus.  
Is one, for example?  
Yeah.  
Pensants.  
So, this back is from the 16th, so, even though it's 16 quarters, you don't come personally.  
And complete third one.  
Comes.  
It goes, and there's payment.  
Is this one?  
What I'm doing is calculating present value today of all future payments.  
I'm present, because first statement happens today, so I don't need future value of something that happens today, because I am.  
Then I hate.  
Forward all payments together.  
Yep, so that is definitely.  
The universal rule is.  
Tenth of the today, work.  
If you want to calculate in your value that doesn't play, what are we doing?  
Yeah.  
Just plug in 10,000 and then once I calculate future value, I calculate future value of this one. There are several ways in order to look for the final result. I can do the easy to.  
Different ways, if you see the solutions, they algún día another way.  
What I want you to see that, there is not a universal formula that applies to have. I want you to struggle, there is a universal formulas formula for.  
I'm with me.  
At the universal formula for the delay and the meeting will start in one year. Let me go to question I, the close question I next.  
I know there.  
It's a mother.  
Hey.  
Another Josef Same formula.  
What is the point? You do see the question I need $1,000,000 in three years, yes?  
Juan.  
Do this.  
Nomadie.  
The problem with meter and the final will never be to come. Yes?  
One, two.  
Yes.  
Stop worth, David.  
One million 15 years.  
Here I need.  
Juan Bill.  
And you are going to invest same amount every quarter for 8 quarters.  
Starting in one year.  
Starting in one year. Let's see what does this mean. First, investment is at the end of year one.  
So, at the end of year one here, first this investment, is it going to happen? Yes.  
And we are gonna have.  
Eight more payments. One, two, three, 4, 5, 6, 7,  
Okay, yes.  
No.  
The last investment is at the end of the third quarter, beginning of the fourth, yes.  
He cannot the 4th quarter. Yes, this is correct.  
And I'm asked, what is the amount of money that I will need to invest?  
Parishi, Kumar Sisi, yes?  
I really know to form, which are personally is one, and the other one is that may be for.  
I have all these payments.  
And if I apply to these payments...  
Fórmula.  
I will calculate. I'm going to consider. I'm sorry for.  
Calculate impression value.  
I will complete present value in quarter, first, second, third, fourth.  
Yes, I'm gonna calculate present value on the third quarter. What is this the quarter before o natural?  
No.  
Again, see over 2% times 1 minus 1.02 price to the eight. Yes.  
This is.  
Present value here, makes sense?  
This is present in year 8.  
And now, what do I need? I need 1 million.  
One million wine.  
One Million.  
One million.  
One million is going to be what two?  
Present value in year eight.  
Thanks, One Plus.  
2%.  
Invested for one, two, three, 4, 5, 6, 7, 8, 9.  
Waters.  
I have this present value here, and I will have this amount of money invested for one, two, three, 4, 5, 6, 7, 8, 9 quarters.  
It.  
No.  
No windis.  
How can you calculate C?  
I'm gonna take this out.  
How can you calculate C?  
See is.  
¿Qué es?  
One Million.  
Over.  
One Plus.  
2%.  
Right for the 9th, yes.  
And.  
Thanks.  
Two percent.  
This.  
Thanks.  
One over one minus.  
1.02 price to the eight. Make sense?  
You can do this on one shot, all step by step. Yes, there is no need to do this in this sense. You can just say present value A.  
Is equal to C times K Bing K this?  
And once you know this, you can say that K, once you know present that you see, then K.  
Let me go. Quick, yes.  
¿Qué?  
Tell me to please.  
Y.  
This is Valley, your eight.  
It's Singhwar, too.  
The times.  
Sí.  
Times this.  
I'm Francis.  
Hello!  
Thanks.  
One Mike.  
One.  
Oh.  
Oh, too.  
Price today.  
Over.  
Yes.  
7.32. This is equivalent to one a half weaken on the blackboard with K.  
Is the one?  
Although on the last on the right side, is that a power?  
Ohh, no, it's a beer from the blue. I mean, it was before. OK, in the first, yeah.  
It was people.  
7.32, this is K. Yes.  
Present value is nice.  
Esental.  
Sequal 2.  
Same times 7.32, yes, now.  
Sí.  
It's equal to.  
One Minion.  
One million.  
Over.  
Open.  
Paréntesis.  
A what?  
The parenthesis 1.02.  
Price to mine.  
Thanks.  
Sí.  
Algo this.  
It is the amount of money that with 1014,000. One important thing regarding this exercise.  
There's no going to meet with me.  
Papi, Cross, I am Twin, 166 Mawen.  
The point is in you trying to do this exercise by yourself.  
What are we doing? Playing with present make sense?  
No, please exercise, please.  
Exercise 3.  
Yes, etcetera. Now.  
Considering the following securities, and I'm going to interface thousand, I like this one and I'm going to go quick to this one.  
Oh, right.  
That's time.  
MB far.  
De mí.  
Yeah.  
Exceptional score.  
Securities and annuity that face 1 million a year at the end of its for the next 10 years and a perpetuity that face 1000 a year forever started okay.  
I like this exercise because of one.  
They've not my day with computers.  
Okay, this here that are.  
One, I'm with you, let me call it, hey.  
I mean, yes.  
A 1000.  
Personally, we face a thousand a year at the end of each year for next 10, yes?  
For next.  
And either, and with me, yes.  
Face a thousand is a perpetuity.  
And we start there.  
I sense.  
I'm here, I'm gonna put the discompling rate. Now, the first exercise is 3%.  
And I'm going to do this net present value with net present value formula.  
Formula ya es muy diexo net personal formula.  
Oh, oh, this is coma instead of.  
Yes, and then I'm gonna calculate the same.  
Me presentario.  
I've had three persons. Makes sense.  
How do I happen on this?  
How do I have done this?  
With Excel, with Excel for me. Yes, I'm gonna get same numbers.  
With the first, with the Nuity formula.  
I'm gonna run is with a newty formula one million.  
One million over.  
One million over.  
Three percent.  
Yes.  
One million over, 3%.  
Juan, One thousand One Minus.  
Van over.  
Juantas.  
Three percent.  
Price today, where payments are.  
Ten payments, no?  
Yeah, I have to me.  
I made so the rock issue.  
One 1000 / 3%.  
Thanks, oh.  
Yes, sorry.  
There's no payment in year still.  
And this is OK. Yes, you see that the number and this is the same.  
And then, what is this second thing?  
What is this second payment?  
And that will start a perpetuity that will start in year. So, what is present value for perpetuity?  
Presentario for perpetuity is a thousand over five percent.  
Yes, over 3%.  
Thanks.  
Present valgo, y con se tepe que se starting year y so present valio vis near te.  
One last.  
The percent.  
Okay.  
And this number is...  
Forty-four.  
Pause.  
What is wrong?  
Nothing is wrong.  
Nothing is bro.  
Looking, please.  
Have some way the perfect with me.  
Y si se ha perpetido.  
No, we no te pretend because.  
Yes, finishing here 48.  
That's one, yes.  
Yeah.  
Juan and.  
Here, I mean.  
It's Indian now, I have to.  
Yes, I have to our team. Yes.  
Por ejemplo.  
I see, how can I?  
Open it.  
This goes higher. The more I take it, the higher it will go. You think there's rate this low? I did.  
This and this, I guess forty-three, fifty-three, yes? What is fifty-three? It's a quick number, fifty-three is 1000 over.  
Three percent, yes.  
No.  
Agree.  
Sí.  
Great, yes.  
Deplease.  
I'm so said.  
Uber 5 percent.  
I wanna grade.  
Bueno.  
Probably then this and this stay with this one. And it's what is important.  
Let me see why this number is incorrect, 1000.  
Oh, he's present value. Sorry, I have very invested.  
Es en Valley.  
E, this espera.  
Thirty-three, thirty-four, these groups more like, yes?  
Are you following me?  
What I want you to see.  
That the higher I make this number, the more it will look. The higher 8% instead of 3%, I'm going to change it to 8%. Instead of 3, 8, yes?  
The more.  
It will look like, yes?  
Let me show you one other thing that I want to show.  
Y recursos.  
So let me please.  
And this is what I want to show.  
The rate is 3% I said.  
3% now.  
They have, if still, if look, this is 200 years, yes, in soft green, you have what really matter.  
I increase this 3% to 8%.  
You see what I'm trying to say? I'm trying to say that.  
For me, if interest rate is 8%, for me it will be the same, or almost the same, having a cripty here.  
Peine.  
But we'll work the same. Why? Because once we move farther than 50.  
Statements? That's not really much.  
To prima makes sense.  
Okay.  
One other could you think I'm running.  
Es exorcis.  
Oh, yes.  
One other could you see?  
Let me move to where are the exercises here.  
I want to do this one.  
Después.  
Yep.  
Okay, I have this statement here.  
Yes.  
Yes.  
I have 170, 70, 90 and 100. Yes, two, three, four, five. For today's class, this exercise is important. This exercise is connected with today's class. Today, we will start talking about portfolio here.  
And first question, I am asked, what is the annual holding period return on the stock for each of the four years? Yes.  
Aquí está with question.  
A HPR for each of the year is...  
This for the first year is 70 plus two.  
Feature value over present value minus one, yes.  
For the first makes sense.  
Now, question me.  
What is the arithmetic?  
Abre.  
Sam.  
Of this over 4. Make sense?  
Arithmetic average is.  
6.81 person. Yes, now.  
See, what is the geometry cabinet?  
Careful with the geometric average.  
Dicos.  
In order to probably human counties.  
We are not doing the geometric average of the return.  
What we are doing is one plus effective annual rate price to the 4th, yes?  
For one's two, the rate we are looking for, this is one plus rate one times one plus rate two times one plus rate three times one plus rate three makes sense? We are not doing the geometric average of each return.  
We are making the geometric average of one plus the return. Make sense?  
Send me.  
First, here, say.  
Juan Plus, Luis One.  
This and when I got those numbers.  
En mi calcula.  
Please, thanks, please, thanks, please, thanks.  
This.  
Price 2, 1 #4.  
Ailus Juan.  
Makes sense.  
Is the diometric average?  
Now B.  
What is the internal rate of return on an investment in this stock? OK, I invest.  
I hungry.  
I think, and he find this 100.  
And I just get dividends; I will get two, three, four, and I will get.  
I would sell the stop.  
After having lasting.  
Finding the internal rate of return off on this.  
Internal rate of return on this would be this one, yes.  
And.  
Es cuestión.  
For me, is the most difficult question of the whole problem set.  
Because you are done, and this question is the same exercise that we did, that we bond last day or class. But are we told that we are going to reinvest the dividend buying the stock.  
Let me do this.  
Any propia places?  
Let me from here.  
I want to copy and place this. Yes. How many stocks do I have at the beginning? Let me call this number of.  
Those are the even they have one stuff, yes?  
What I'm gonna do?  
I have forgotten the limit.  
Let's copy and paste this without the deal.  
I need to have.  
There are two, three, 4, and five, yes.  
After one year, what am I, what am I going to do? What am I going to do?  
With this individual of two...  
On one hat, I have one stuff, yes?  
I have one stuff and I will buy.  
Would be see there?  
I'm going to buy first idea.  
Perthday.  
Y bien.  
So the number of stops is gonna change, the bigger than gonna rush if is one times the number of stops that I have times the bigger.  
Yes.  
I'll pedir.  
And what I'm going to do with this dividend? I'm going to reinvest the dividend in the stock.  
With this video.  
Number of stocks is gonna be one plus.  
how much stocks I'm going to buy to over the price of each stock. So I will have slightly more than one.  
Now, here too, because I have more stocks, I will have more BDM than three.  
I will have number of stocks I called France the deal.  
Are you following me?  
And home maths stocks I'm gonna buy.  
3.05 times.  
Over 7.  
Here, I will continue.  
And this is...  
A bien.  
Last dividend is here inside. So how much amount of stocks will I have after the last dividend is been paid? I will have this times 100. This is total amount of money that I will have in my copy.  
And this is total amount of money that I have invested. So in order to calculate eight here.  
HPR is.  
Future by you, over.  
Present value.  
Price 2.  
One, two, three, 4, raise two, one over 4.  
Minus one, yes.  
Mora.  
And what is this?  
PHPR.  
I have received.  
A Luis Invel.  
This last exercise was complicated. Why? Because we have to reinvest the dividend.  
But what I want you to see.  
That it would bring best the legend.  
I said total it's yeah, that's with hot.  
Look, please, I need your attention. Total HBR I got this 4.144. Let me.  
Be here.  
4.014321. Yes.  
Look the HPR, we have calculated the one you have on the black.  
He's exactly, but again there is no need to go the long way. When I'm just trying to show you is that once I got it's HPR, I calculate.  
ya veréis geométrica de  
I turn off investing and getting on my money. Because annualised exercises in.  
What I want you also to see.  
But everything should max; we should we are going one point through different paths.  
And the only everything makes sense. This is the first problem set.  
The this problem set is probably the most difficult one you are going to find. In problem set two, you are going to find more difficulty as the difficult PSSA being problem two has to do with understanding.  
This has to do not yes with understanding but also thinking now.  
Yeah.  
Don't get the press and work over.  
Okay, any questions?  
I'm gonna start with today's class because I am running out of time. No, I'm not running out of time. What I'm doing is...  
Today's class has two objects. One objective is reviewing problem. That is what we have already done. And the second object is introduceing profoly ocio.  
Portfolio theory, let me open the Excel. Let me continue with Excel here. This is Exercise Hat, no?  
You safe, bye.  
And.  
Portfolio Fury One.  
What are we going on today?  
A quick statistic to review what you should know for today.  
For next day.  
You should know what is the average? What is the variance? And what is the covariance? We will work a lot, a lot, a lot with covariance. Yes, today we will introduce, and also today we will talk about the alifective versus geometric average. That is the exercise that we have.  
and then we will talk a little bit about risk and we talk. Okay, expected value. I'm going to do the examples and with examples we would see congress. Yes, examples are relatively simple. Here we've got.  
Walmart.  
He would work Walmart.  
You what Walmart.  
Oh, will you go Walmart in Spain?  
Mercadona, soy Mercadona.  
Yeah.  
And I'm going to calculate.  
I wanna calculate.  
25, 50% and 25%.  
I am sex.  
Person, thing.  
Percent and 22.  
Person, yes.  
So quick.  
Yeah.  
How do we calculate the expected return? So, so simple.  
These times it's probably.  
And the sun is expected me to 9%, yes.  
What we have already done, it's probably good time. It's with the spectrometer times it's probably.  
OK, now this is what we have done. Now how are we going to calculate the variance? What is the variance? This is.  
Return. Yes. What is the values? How far?  
It's number is from the other. What is the problem with the distance that if I am far, if I am far from one side is negative, from the other side is positive and in order to know proper distances, I'm going to rise to the square.  
In order to avoid negative canceling photos.  
There you go.  
OK, what I'm gonna do is.  
Peace return.  
The average and we fix this one function F4.  
Rice, do they work?  
This is the distance, no?  
And I'm gonna do everything together. Yes, I'm going to try these times and probably.  
probability times the distance.  
If I make this sum.  
By me.  
I'm getting this number, yes, probability times this distance.  
And what is this number? This number is called thanks.  
This member is called.  
What is the problem this number has?  
But he's the units are right to the score. I don't like units raised to the score because I don't know what that would be. In order to have everything in my own language, I should make the scope of the viance. Scope of the viance is called.  
He's called deviation. Deviation is SQRT.  
Of this and this number is in person and calling 95 it makes sense.  
Yeah, this is the number that I have already done. And what does the deviation represents? I'm going to go back. I want to share this one with you. This is in Spanish, but if you press this button.  
Any listenings yet?  
I did it with Google Studio. Where are you? Where are you?  
Here you are, tell me no.  
This exam.  
This sure example no example.  
I don't like type of.  
Thanks.  
And here let me come here and normal distribution.  
Copy.  
It's written there normal distribution and this is a normal distribution.  
You side here, the best here and you've got it in this.  
What is this?  
The normal. Oh, and this is the humid, but with this is enough. This is a normal distribution fusion. What is the total area?  
The total area. The total area is 1. Total area is 1 and one deviation.  
Tells me that.  
One deviation is outside 16.6 percent, 16.6% * 2 take 231 here. I take one interval, one deviation on one side and another variation on the other side I have inside.  
1/3 if I took if I take 2 variations, 2 variations.  
2.3 on one side, 2.3 on the other one around 5%. I'm taking inside 95% if I take 3 deviation.  
I'm taking for us me 99%. I'm talking about intervals which should be you should have to study this statistics. We are not going to go to this and you don't need this for my gosh. But I want you to understand how the normal distribution function works.  
If I take 2 variations, I have 95% of all respected Rigo. Make sense.  
Why I'm talking about this? I don't know, but it's written here. 2/3 is inside one standard deviation, 95% to standard deviation. If I take 3 standard deviation, 99%, yes.  
Confidence intervals. We are not going to talk in this course about confidence intervals, but no.  
OK, covariance. What is the covariance? If I have one stop, the variance told me, oh much the stop can move if I have two stops.  
Covariance tells me two stops, all coordinated, both stops will move if covariance is.  
close to 100% both will move the same way if it is 0.  
One person, more or less, walks the same way. If it is single.  
There is no correlation, but if it is negative, when one go up, the other one will go down and the opposite makes sense.  
Let us calculate.  
Covariance. Let us calculate it to be positive or negative and the correlation coefficient. Let me first calculate introducing one more stop. I'm going to introduce Kmart.  
I'm gonna introduce.  
By copy and paste, please.  
I should change here.  
It should change here. It's 9% is 1, yes.  
All these things are the same. I'm going to just. Oh, no, sorry. I'm going to just change this 10% 34.  
Person.  
OK, what I have done, I have just replicated what I have constructed with Walmart with FEMA. Nothing new yet. And what I'm going to calculate now the covariance between 1:00 and the other.  
This probability is the same for both, yes. How do I calculate covariance? By doing this probability times.  
Peace. Heinus. Please return.  
Is this?  
Thanks.  
Please.  
Yes.  
Hi, loose.  
This expected return and let me fix this one also.  
Here it goes this number.  
And if I make the sound.  
Of all these numbers, what do I have here?  
What is this number? This number is the.  
1.53% let me come here. The covariance is 1.53 and what I'm going to do now I'm going to calculate the correlation coefficient. Correlation coefficient is.  
Covariance over.  
These are the Asian times.  
Is that is, yeah, yeah.  
And this number is 9 has become a little bit crazy. Sorry.  
98%.  
What is a 98% means? It's almost 100%, so it's a high correlation. Does it make sense? Walmart and Kmart have almost 100% correlation? Why not?  
But they dedicate for me that I'm Spanish, for me it's the same and these numbers are they dedicate same business, they are almost the same, so they are highly correlated.  
That is just an example. Yep. What is correlation? The relationship between 1:00 and the other and correlation coefficient is calculated by doing.  
I am sober, the variation of the dish.  
With this correlation coefficient, we will work a lot. Next class, that's after. Yes, we are not going to work too much with probabilities and with deviations and variances. We will work a lot, but we will see.  
Make sense?  
OK, this.  
This seat is really, really, really important. Not for today. I'm going to take a picture.  
I'm going to serve the picture here and we will come back later, but let me just write one formula quickly because I want you to.  
Have here this formula at least one time. This is not for today's class. This is not for today's class. Imagine that I have.  
One stock.  
Hey, another stock P of the stock AI know that the expected return is A and expected return on B is B. Yes, then I have also valiance.  
That variance of stop A is the variation rise to the square and also I have variance on stop B and also I have covariance between A&B. Yes, what are we going to do next day today?  
A percentage on stop A and a percentage on stop B. Let me call this percentage weight, weight A and weight B.  
Weight A, weight B. So weight A plus weight B, it's going to some one because at the end I will have 100 euros and I will take a percentage and a percentage. Make sense.  
This is a portfolio. I'm going to take part of my portfolio from stock A and the other one on stock B. Make sense? Yeah.  
OK, what are we going to do next day with these formulas? Let me use quickly 1st and the 2nd.  
The portfolio that I'm going to take, the return on the portfolio, the return on the portfolio is going to be weight A times return A plus weight B times return B.  
If you take the first one and the second one, you can be like this one, yeah.  
And let me make focus on the third formula. I'm going to calculate the variance on the portfolio.  
And today I just want you to hear what I'm going to do. Variance on a portfolio. Yes, variance on the portfolio. Look the third formula. Yes, it's going to be weight A square times.  
Variance 8.  
Plus.  
Weight B square times variance B.  
Last.  
Two times weight A, weight B covariance between A&B.  
How can you get that formula? By looking formula one, then the variance you get it from formula two and with the covariance you can get the other one, yes.  
I promise that the next three classes I will repeat that formula more than 20 times, but I want today you to start hearing about this because it's working.  
Let me go quick because I want to finish on time and a lot of things left. OK, how are we going to get future value? For me, this is almost enough. I just want to show you one little example and we're good.  
How are we going to take expected returns by looking at the past and I want you to see the difference between the arithmetic average is the one that we have calculated in exercise 5.  
Yeah, arithmetic average and then geometric average. That is the one that we have already calculated. Yes, normally we will use arithmetic.  
But you're political geometry will always be better. It's a little bit more difficult to calculate.  
And I want you to see this example. So this example is so powerful in order to show that geometric and arithmetic is not the same. Yes, suppose that for an American market phone that we don't in one year is 100 and in year 2 is.  
-50%. So first year I get a return of 100 and second year I get a return of -50%.  
Let me guess, this is last.  
Sorry, last exercise and.  
Yeah.  
So quick, so quick. One 100 minus three.  
Year one, year two, I get 100% of return and then -50% of return. Yes, let me first calculate.  
Gary.  
Let me first calculate I may. Yes, arithmetic is so simple this plus this over 2.  
And make me please.  
Let me cut it for a second. Yes, now I'm going to complete your meeting.  
SQRP.  
Right. Q 1 / 2, yes, SQRB.  
1 + 100.  
Times one, 1 -, 50.  
Makes sense.  
I guess that's your question.  
Yes, yes, I'm going to repeat and I'm going to repeat it slow. Just get very fast. Sorry, 1 + 100%.  
Thanks.  
One plus.  
-50% yes. And I'm going to make this rise to one over half.  
I am one. What I'm doing is calculating the geometric average.  
And this is a CEO person.  
What I want you to to understand, I have give you 2 percentages.  
What is their return, 25% or 0%?  
In presentations, there are times that life becomes difficult. Let me give you, let me show you real numbers. Imagine that I start with 1000, yes, after one year.  
I get 100% of return.  
I get and then after.  
I'll be here, I get 50% of losses.  
I have started with 1000 and at the end I got 1000. Is my return 25% yearly? Obviously no. I'm with only 0%. I have given you 1000 and in two years back you give me back 1000. Don't tell me that you have given me a.  
They're not 25%. I will get angry.  
Is it yes or?  
For fun, not for fun, but this is just if you do these with short percentages, arithmetic and geometry will always be simple. We are not going to have problems here, but careful it's not the same.  
And you should know and understand. You make me make sense.  
The only thing I need to say this is the exercise that we have already done. The only guess thing I want to say is that the higher the risk, the higher the return that we will dedicate to this.  
Problem set you for two weeks now. Thanks and I owe you. Sorry, I owe you 4 minutes.  
Do you have class after this one? I am going to try never to speak to you more than nothing.  
I will be respected. I will be here and I can answer all questions after the.  
Let me Sir, would you?  
If you work with Excel, once you open the Excel, I'm going to send you first thing you are going to see. So in this, this is the first thing you are going to say. You are going to see if you are working with venture capitalists and you're saying an Excel with a model.  
Who will like the person who open the ESM group? The person likes to be deleted to what you want me for her. That's what I'm saying.  
Yeah, there's not or or I'd assume to the internal rate operator. I mean I get 23 or 30%.  
Don't worry. I mean, whatever you will upload will be OK. Don't worry. Don't worry. I don't care too much.  
I just want to say that you have to meet at the end. If you have done these exercises by yourself, today's class has been worth. If you have not done these exercises by yourself.  
We base class at.  
And then I'm not trying to explain some things again and I'm going to just going harder running the exercises.  
I have two things that I have more than I have done the exercises, but yes, talking about the exercises and sharing thoughts.  
So I want the response from the dialogue. So it's you've got the response. Perfect. There is no need. Yeah, no need.  
Puerto Rico.