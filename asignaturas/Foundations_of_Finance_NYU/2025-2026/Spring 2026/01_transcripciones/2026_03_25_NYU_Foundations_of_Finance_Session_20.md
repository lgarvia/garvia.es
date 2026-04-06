# Foundations of Finance (FoF) – Session 20  
**Date:** March 25, 2026  
**Topic:** Duration, Interest Rate Sensitivity, Convexity & Bond Risk  

---

# 1. Where We Are

We are fully inside **Fixed Income**, the core block of the course.

Connection across sessions:

- Session 18–19 → Bond pricing, yield curve, forward rates  
- **Session 20 → Interest rate sensitivity (DURATION)**  
- Next → Risk decomposition and deeper intuition  

---

# 2. The Big Question

> **If interest rates change… how much does the bond price change?**

We already know:

- ↑ Interest rates → ↓ Bond price  
- ↓ Interest rates → ↑ Bond price  

But:

> **By how much?**

👉 The answer is: **Duration**

---

# 3. What is Duration?

## Definition

> Duration = **Interest Rate Sensitivity**

⚠️ Important:
- Measured in **years**
- But **it is NOT time**
- It is a **weighted measure of price sensitivity**

---

# 4. How to Calculate Duration (Macaulay Duration)

## Step-by-step

1. Calculate PV of each cash flow:

$$
PV(CF_t) = \frac{CF_t}{(1+r)^t}
$$

2. Compute weights:

$$
w_t = \frac{PV(CF_t)}{Price}
$$

3. Multiply by time:

$$
Duration = \sum t \cdot w_t
$$

---

## 🔑 Interpretation

> Duration is the **weighted average time of cash flows**

But more importantly:

> It is a **measure of sensitivity to interest rates**

---

# 5. Key Insight (VERY IMPORTANT)

> A bond behaves like a **zero-coupon bond with maturity = duration**

Example:

- Bond maturity = 5 years  
- Duration = 4.55  

👉 The bond reacts to rates as if it were a **4.55-year zero coupon**

---

# 6. From Duration to Price Sensitivity

## Approximation Formula

$$
\frac{\Delta P}{P} \approx - \frac{Duration}{1+r} \cdot \Delta r
$$

---

## Modified Duration

$$
D_{mod} = \frac{D}{1+r}
$$

Then:

$$
\frac{\Delta P}{P} \approx - D_{mod} \cdot \Delta r
$$

---

## 🔥 Key Interpretation

> Modified duration tells you:

👉 **% price change for a 1% change in interest rates**

---

## Example

If:
- Modified duration = 2.5  

Then:

- +1% in rates → price ≈ **–2.5%**
- +0.1% in rates → price ≈ **–0.25%**

---

# 7. Important Properties of Duration

---

## 1. Interest Rate Relationship

- ↑ Rates → ↓ Prices  
- Relationship is **negative**

---

## 2. Maturity Effect

> The longer the maturity → the higher the duration  

👉 Long-term bonds are **more sensitive**

---

## 3. Coupon Effect

> Higher coupon → lower duration  

Why?

- You receive cash earlier  
- Less exposure to future rates  

---

## 4. Yield Effect

> Higher yield → lower duration  

---

## 🔑 Summary

| Factor     | Effect on Duration |
| ---------- | ------------------ |
| Maturity ↑ | Duration ↑         |
| Coupon ↑   | Duration ↓         |
| Yield ↑    | Duration ↓         |

---

# 8. Convexity (Second Order Effect)

## Definition

> Convexity = **curvature of price–yield relationship**

---

## Key Idea

- Price–yield relationship is **NOT linear**
- Duration = linear approximation  
- Convexity = correction  

---

## 🔥 Insight

> Duration works well for small changes  
> Convexity matters for large changes  

---

## Visual Intuition

- Price curve is **curved**, not a straight line  
- Duration = tangent (approximation)  

---

# 9. Zero-Coupon Bonds

## Key Result

> Duration of a zero-coupon bond = its maturity  

---

## Implication

> Coupon bonds always have:

$$
Duration < Maturity
$$

---

# 10. Duration of a Portfolio

> Portfolio duration = weighted average of individual durations

---

# 11. Perpetuity Result (Advanced)

For a perpetuity:

$$
D = \frac{1+r}{r}
$$

---

# 12. What Duration Really Means

Let’s make it simple:

> Duration transforms a complex bond into a **single sensitivity number**

---

## 🔑 Final Interpretation

> “My bond behaves like a zero-coupon bond with maturity = duration”

---

# 13. Bond Risks (CRITICAL)

## 1. Interest Rate Risk

### a) Price Risk

- Rates ↑ → Price ↓  

---

### b) Reinvestment Risk

- Rates ↑ → better reinvestment opportunities  

---

## 🔥 Key Insight

> Interest rate changes are **not purely bad or good**  
They depend on:

- Price effect  
- Reinvestment effect  

---

## 2. Credit Risk (Default Risk)

- Risk of issuer not paying  
- Measured by rating agencies:
  - Moody’s  
  - S&P  
  - Fitch  

---

## Important Concept

> Crossing into “junk” territory changes everything  

- Investment grade → widely held  
- Junk → restricted investors, higher yield  

---

# 14. Big Picture

This session connects everything:

- Bond pricing  
- Yield curve  
- Sensitivity  
- Risk  

---

## 🧠 Core Idea

> Fixed income is about understanding how **value reacts to rates**

---

# 15. Final Takeaways

### Duration
- Measures sensitivity  
- Not time (even if expressed in years)  

### Modified Duration
- Direct price impact  

### Convexity
- Corrects duration  

### Risk
- Interest rate risk  
- Reinvestment risk  
- Credit risk  

---

# 16. What You Must Be Able to Do

- Calculate duration  
- Interpret duration  
- Use modified duration  
- Understand risk implications  

---

# 17. Looking Ahead

Next session:

→ Deeper into:
- Reinvestment risk  
- Immunization  
- Duration strategies  

---

## Final Message

> If you don’t master duration, you don’t understand fixed income.  
> If you do master it, everything else becomes much easier.


# Transcription
25 de marzo de 2026, 5:04p.m.
1 h 36 min 40 s
It's another mask. I strongly strong. Oh, I have opened this without that.  
Uh, let me.  
Let me do things, this you should visit the suit of Spain, yeah, and Cadif, Cadif is.  
sevilla has a lot of tourist things about thinking about culture.  
Personally, Cádiz is the one that I love the most.  
Cádiz is the let me college the best.  
Will you boring daughter?  
Yeah, I was born and brought up in Madrid.  
And.  
Yeah.  
And now, but the North, I'm gonna show, let me just turn this on, and I'm gonna show you a map of one say, yes, this goes. There are people outside. I'm gonna go.  
Yeah, one space is moving.  
Probably.  
Okay.  
Sorry, sorry, sorry.  
I was to start saying no, I was going to start. And thanks God, God has told me, many of the people are outside. Sorry.  
Sorry, sorry. Hello, everyone. I'm gonna see this here because I don't have.  
Okay.  
So, sorry for, and let me, yes, it goes.  
Bueno.  
I need.  
Normal que hay consultado, I configurador and I didn't thought about the other. So session nine twenty once.  
No.  
That manadic tu linkedin.  
But are you gonna go in Easter in the street week? Are you gonna travel in the street week? Where? Portugal. Portugal.  
Which part of Portugal? Bisbon and? Cordo and Lagos. Perfect. Cordo. You should go to Singdra. Indra. Are you be there? I think it's lovely. Where are you going? So lovely.  
Is he cut? It'll leaves like all around. Would that cut? For like three of the days? Yeah, the rest of the like train. Rome and Sorento. Rome and Sorento. Yeah, yeah.  
I'm gonna stay in Madrid because my son has his university exams, but I really love the problems you are gonna, I will be with there, with you there. Enjoy, enjoy it because it's an excel, an excel, an excel.  
What is it?  
Thank you.  
Still on Money.  
Time lies. It's correct to same time today.  
It's crazy.  
Okay.  
It's crazy. OK, last day.  
Garth.  
Last day, we talk about forward rates.  
It's just a nice class for not to go.  
No. Just give it, but not to that. If we go with last class, we didn't go through something new. Something new. Also, last day, and I'm gonna bring this back. No, anyway here.  
As they I serve, oh, OK, let me take my phone, as they I share with you.  
Total.  
I don't know if I have told you that I am an addict, an AI addict.  
And.  
Here.  
I love.  
Absurry.  
I have served you these resources. These three resources, these three links.  
Let me just open the first one.  
That is the only one that I want to open here. You can choose in all of them. Here is within Spanish and you can turn this into this. Yeah.  
Just here in this instead of Spanish. And what is this? So, so simple. Let me just years to maturity. I'm on our five years in maturity. Yes, what do I have? I have about with one, two, three, four, five.  
Coupons of 5% page value.  
Sophia is Nofia, here is the one that I normally ask. You can change the value, and everything will be the same. And which is the yield, if the couple rate is 5%, and the yield is 5%, but I should be.  
¿Cuántos?  
Yeah.  
I don't know why this is writing this. Oh, perfect. It's within okay. And if it is higher, trading at discount, a par or trading at trading. Make sense?  
This one and here you've got present value formula in order to calculate the price of the board. And then here you've got price versus interest rates relationship, correct?  
Okey.  
What are we?  
What are we, what are we gonna do today?  
We are going to talk about interest.  
How much the price we change when internet rate change? Today, we will talk about how are we gonna call internet rate sensitivity? How are we gonna call it?  
Duration, duration. What is duration? Don't tell me the duration is tight. We will measure duration.  
With time units, that is no time. Excellence, what is the edition?  
Interest rate sensitivity. Okay, before I'm gonna tell you how first thing I'm gonna do.  
I'm gonna tell you how to calculate the duration.  
Why? Because I first I want you to understand how to do it. I want you to see that it's simple.  
And then I will demonstrate how to get that formula and we will work a little with that. Make sense? So, I have a mom, I'm gonna use.  
I'm gonna use the bone.  
No.  
I'm gonna use the same, yes.  
And let me play this to like a discount.  
I have.  
Coupons of Fifty en mi take a better.  
A.  
Bones.  
Moments go ahead, 1, 2, 3, 4, 5.  
One.  
More.  
But make sense.  
What I'm gonna do, I'm gonna calculate the tracks.  
One plus the rate is 4%.  
One plus for percent right to the second.  
One plus 4 percent raise to the third.  
One plus 4% rise to the four.  
One plus four percent rise to the piece.  
Make sense.  
How will you come with the price?  
By doing class, class.  
Plus, plus all of you, you will need that this is the price.  
How do you calculate the price of above with coupons by?  
Alculating presentario isla es.  
Okay.  
How are we gonna go play?  
I'm going to show you through two different ways. Yes, I will get the same number, same, same, same.  
This is the plus. If I divide this over the price, I will get one. Make sense?  
Yeah.  
If I be by, this will be I will get that percentage. Make sense?  
Yep.  
So, so, so, so simple.  
One, two.  
Read.  
Cool.  
un facto es what are in doing what are in doing  
But I'm calculating this, how much this matter?  
over the price. How much is too matter over the price, how much is matter over the price and how much is matter? Makes sense?  
What is this?  
No.  
What is this? This is duration.  
This is today.  
And what is the ratio, interest ratio? How much step project will change? I'm just showing you how to calculate. I have not explained you yet how to get this number. Next sense?  
Es mecánico.  
Exits.  
Yep, don't let me take Excel.  
Permite Excel.  
And with me.  
These all these numbers, but with this.  
One, two, three, 4, 5.  
What's what it?  
Did he release four person?  
And I'm gonna go play presently.  
I've always, this is singing.  
Y.  
I can.  
Excel.  
Cuando vivas.  
What?  
But last four percent.  
Por.  
Yes, this is presentary fórmula.  
Por yeah.  
And calculating just present value of all the numbers.  
Which one is the price?  
The same of.  
These numbers, 1044.50.  
Going to make sense.  
Now, this is the class. In order to calculate the duration, I'm going to do this through two different ways. The first way is the one you've got in the block. Yes, I'm going to say this number times the one.  
There are number times two.  
Answer.  
And now what I'm going to do is sum these numbers. The sum is what you have to over, yes?  
I'm doing this up.  
over 1,044 will be meet 4.55 years that this is the duration.  
Yeah.  
This number is the same number that you've got in the blackboard. This is first present value, the second, sorry. First present value, the second, the third, the four, the fifth. This is what you have got. In blue, the blackboard. And if I multiply what you've got in blue times one times two times three times four times five.  
I get the numerator by divide numerator over the price I will get 4.66.  
Also.  
Also, I can calculate how match each presendarium, how match each presendarium word over.  
Yes.  
And this is Buenavilla por hoy.  
from 5 percent blog. Yes.  
Make sense.  
We start percentages, reply some.  
This percentages are good.  
Ajá, no.  
Let me ya say this percentage times one.  
And two times 3 and four by five.  
Some of these numbers.  
To be.  
If you see it up there, this amount.  
Yeah, I mean.  
What are you?  
¿A qué son?  
Have you understood mechanics?  
Yep.  
Okay, let me before start before.  
Tylent music here. Before start, let me show you the second one.  
Thank you, yes.  
I will come back here. I'm gonna.  
One, two, one thousand cupon break.  
Cuponano of 5%.  
But here's the same example that I have sold, yes, and...  
Four person, yep, if I see the same.  
And do you see what it is, you know?  
Duration is like the place.  
You should, the place you should put a level, a level in order to have balance, in order to have it given. Makes sense?  
I'm gonna come back here.  
You want to see this better, let me make coupons diga yeah.  
Y me dijo contigo.  
I'm.  
Exit.  
Okay.  
Let me start, let me start with today's stuff, after financing this, yeah.  
What are we gonna do today?  
They will talk about.  
He tell it right sensitivity.  
That is to ratio. Let me talk a little bit. OK, intel sensitive.  
What happens if I increase in data rates?  
The race increases with price.  
Then a great score, what have a good place?  
Insulto en el automático.  
I think I have repeat it more than 20 times for sure.  
And if interest rates increases, price goes down.  
Homax, the answer is duration. Homax, the answer will be duration. Yes.  
Okay, then.  
Person, order if it integrates.  
Rice goes down. Second idea is maturity matters, yes.  
The longer, the longer the naturality, the more the price will change when interest rate sales. Yeah.  
The longer the maturity, the more the price we change. But careful, because not just maturity, because there are coupons. What will coupons provoke?  
It seems to be lower because I'm receiving money sooner. Make sense?  
And then.  
Converse.  
An increase in bonds into maturity.  
The higher we will see the convexity with just the illustration, the more interest rates increases.  
And more interest rates increases.  
The more the price will decrease, but as interest rate increases, the speedback of the change will be smaller.  
K.  
Let me show you with this. It's the first time I'm using these graphs in order to explain these ideas, but I think that they are so powerful.  
I'm going to make a cool congrate. Yes. What is duration? Integrate sensitivity. The higher duration, the more the integrate sensitivity. Yes. Let me show you convexity, but regarding maturity in this case. Yes.  
Look, 3.92 years, 3.9 oh, this is in sorry, 3.92 years, yes.  
I'm gonna increase, do you see that the more I increase?  
The bigger, yes, the more increase, the bigger, yes.  
De more, de more, de diga.  
Bad Airful because there is a C con C.  
The higher this number, the higher the maturity, the higher the duration.  
What the higher, the maturity to the higher to the base, yes?  
That.  
Look now, look now, the distance between duration.  
I'm actually.  
Zona also become vida.  
If you see, and this is what we are going to see with the first example.  
The first example we are going to see, you have a bond with a duration of one year, yes?  
If I do over, actually looks duration.  
Actually be.  
almost this 1.85 almost gets double yes and now I'm gonna have  
on with 21 years of maturity. Yes, duration is 11.12. If I increase maturity for one year,  
Duration is almost the same. Duration increases.  
At least so far from Bill door, next sense?  
What I'm saying, that duration is not linear. Duration is not linear. It does not behave in a linear basis. Yet? Let me just work with this example that has to do with zero compounds, five, six, seven percent, five, six, seven percent.  
If this person.  
Parcer.  
In percent.  
and one year and three years. Yes. This example has to do with zero commons with one and two years. How do you calculate the price of a zero common? No simple. Yes.  
One plus 5%.  
Price to the first fix.  
This is the price and inglés.  
Two years, with the maturity.  
Yes.  
100% over.  
One glass percent.  
I snow.  
Sí.  
Thank you.  
Patas this.  
95, 90, 94, 89, 93, 87, yes?  
Please, if I just use two vecinals.  
I will get the numbers, yes, and what is the idea of this? The idea is the first idea.  
If you tell rate, the higher tell rates there are, there is the lower the blast, yes?  
The longer maturity, the more price will change. But as time becomes bigger, the change will be smaller.  
Hiciste secondary de convexity, de second derivative para long world world.  
Okay, duration. McGolley duration is the sensitivity of the price of a goal to change in the yield. Yes, this is the one that we have already seen.  
Ay.  
Do you remember how to deliver how to derivate?  
Okay.  
The derivative square.  
Over.  
It's.  
Yes, makes sense.  
Okay, then derivative off.  
Xbox.  
And even people is rise with his.  
All of you know how to do this.  
The derivative of this.  
Yes.  
Five eggs rise the phone.  
Yep.  
Also.  
Cook.  
No.  
No.  
The negative of this.  
de la indica. Yes.  
What do you? Yes, media. T times one plus R.  
E - 1, yes.  
I followed me.  
Ah, let me complicate this a little bit more.  
Y instead of ti.  
Minus B.  
Are you speak?  
I must be.  
Minus one is.  
And all of you see that one over one plus R wise to T, yes, is equal to.  
One plus a wise to minus.  
It.  
Depot.  
What are you don't need to know the demonstration that what I'm gonna do, I'm gonna ta enterprise.  
Of this.  
Oh, you didn't came at the beginning of the class. Oh.  
Don't worry, but there there is one whatever.  
Don't worry, no don't worry, it's just my.  
Y price is equal to.  
Thirst coupon over 1 plus R wise to the first plus.  
C over 1 plus R wise to the circle.  
Plus, no los sins, t, t plus, el Nicole F, 6 value, yes, one plus R  
Yeah.  
I sense.  
¿O K, ¿cuánto con la captura?  
O Max de Price.  
We think when he better great thing, yes?  
I'm a divertir please.  
And this is going to be equal to.  
El mister Luis One.  
R, R raise to minus one.  
No.  
Minus one.  
T over one plus up rise to minus one minus one that is minus two, right? A second.  
What are you?  
Minus 2 times.  
T over one plus R raise to the third.  
Yep.  
Any day.  
Minus 3 times C over 1 plus R by U the 4.  
Minus T times T plus F over one plus R raised to T plus one.  
Eso es.  
Yeah.  
I'm just calculating the derivative.  
Simple is not simple as simple, but I'm just calculating the delivery. OK, I'm going to make some little changes, yes?  
I'm gonna.  
Manuel.  
This one, yes.  
And what I'm gonna do is to the left side and the right side is I'm gonna multiply.  
Minus, yes, minus.  
Alonso, algo la multiplayer.  
Lift and right side times 1 plus up. List.  
No.  
This is gonna be equal to.  
Mister los negative.  
Positive, yes.  
one times C over 1 plus R instead of price to the second because C is multiplied times 1 plus R  
Rise to the first. Yes.  
Last.  
That's.  
Yes.  
Two times C over one plus R.  
Three times C over.  
Juan, claro.  
Points.  
T times C plus F over one plus R.  
And this.  
Three becomes a true, this becomes a three, and this becomes three. Makes sense?  
I follow me.  
There is just one little more thing to do.  
In order to finish with this means the me.  
El municipal.  
Let me multiply this times 1 plus P and also let me divide this over P. Yes.  
Buenos días.  
Everyone except this Maria.  
What do I have on the right?  
What do I happen to write?  
Para have calculated el himno de paz.  
I have one plans, one plus.  
present vary of first coupon, two times, two times present vary of the second coupon, three times present vary of the third coupon plus three times present vary of faith value plus plus coupon. Excelse?  
And over one over B. What do I have on the right?  
Relation.  
But it's called Makolay duration, normal duration, the duration in years, yes.  
What have you only, Maris?  
Here, what do you have?  
If this is right.  
What do you have for this slide, that demonstration? This is demonstration, I am just derivative, calculating the derivative, yes, and I multiply.  
All of you are with me.  
Okay, let me, I'm just gonna clean this everything.  
At.  
Do you see that for this class?  
It's absolutely important.  
No, no, no, no.  
Coming to this class.  
Hizo un día understanding, calculate the press, favor.  
is not understanding anything about who we are doing. This class is dedicated to derivate, to derivate the plans.  
O.  
What is this that I have on the right?  
Rachel, yes.  
Fres.  
This is the mission and I'm gonna rewrite.  
What is on the rail? Nice.  
VP over VR.  
Thanks.  
OnePlus Car.  
Google Pi, eso es.  
I have not, I have not changed. This is what you have on one side and this is what you have on the other side.  
Okay.  
No.  
Oh, Max, now I want you to look at, look at me and understand.  
Para conocer home maps.  
Omax the price.  
How much the price with things?  
Is this?  
Attence in price.  
How much the price will change?  
Good.  
In person, yes.  
How max the price with change in person?  
What I'm gonna show you is an approximation, an approach.  
Approx.  
The time in price, yes.  
Retains.  
What is this?  
The taking into the trip, no?  
You think the rates increases, press will decrease, so the relationship is negative.  
Magus.  
El.  
Are you following me?  
Hay luz.  
I think you miper.  
Yes.  
No.  
How much the price would change?  
I'd say this in the rate times this.  
What is this?  
Duration over.  
One plus the rate.  
What I have just done. P's over P, yes, is equal to dilation over 1 plus R times P1. I have just rewrite the question.  
What is this? What is this? This is being called modified duration.  
And what does modified creation tell us? Modified creation is a number that tell us who much the price would change in percentage once the interest rates increases one percent.  
It's an approximation. This number would be a person.  
This number to Rachel is years.  
When talking about, when talking about duration, normal duration, normal duration.  
I'm talking about the same thing, same thing, yes.  
Jessica.  
Call Don Arguing.  
107.  
Por ese mi falso.  
I was not expecting this also.  
I was expecting something that I cannot understand.  
I was thinking something that I cannot understand. How tall are you?  
Back then, you were? Five six, 5 six, 5 six, 5 ten.  
that is bigger than six, so I don't know what you are talking about, but I know that you are taller than you at the numbers you have to. You tell me one point three, one meter, 73 centimeters. I am around one hundred eighty three centimeters, one meter point  
So I understand your levels. What I'm trying to explain.  
And no matter you are talking in fixed or in centimeters, they're talking about high. What is the only difference between using one unit or using another unit? The units itself. So, what is modified duration or what is duration? It's too different.  
two different ways in order to talk about the same thing. We are just changing, not the units, but we are just changing the units. Why? Because we are changing the units. Then the higher the duration, the higher the duration, the higher the, the higher MACD duration, the higher modified duration.  
Yeah.  
We are close to beer.  
Y vos.  
I mean, to the end, regarding understand there are more things to me. But what is the point?  
Me.  
How much my prize will change in percentage, once in the rate increases one percent?  
This is the percentage change. Yes? So if this is 4.5%, this means that if it rates increases 1%, my prime will decrease approximately 4.5%. Correct?  
No.  
This one is in years.  
I've already told you 20 years.  
How can you miss interested sensibility in years? At the end, the one that we will use the most.  
Is this one the one that market, people working in market, use the most?  
Is this one, yes?  
Years. Please listen to me and I will rewrite it and I will write it several times. I will say several times more.  
This is a born with coupons, yes?  
And the duration is whatever in years.  
What does this duration tells me?  
Distribución transmitted interferentes.  
My price will change the same as a zero compon.  
With the maturity was to my duration.  
Did this all I'm saying?  
What does this relation have been years?  
That my bone will behave the same as a zero coupon bone with this maturity, changing duration into maturity. For it?  
Make sense?  
I, I don't want this to do confusion, so I'm gonna do this.  
So.  
Yes, I've called regulation of this board, actually these five years, yes.  
The duration was 4.555 years, right?  
What does this number tells me? This number tells me that if integrate changes, this bond will take as a zero combound with 4.55 years of maturity.  
What?  
Okay, let let us see.  
King.  
OK, the duration and modify duration.  
Let's see one example. Yes, what is the duration of a three-year coupon bone with a face value of 1000 a coupon rate of 8% and a year to maturity of 10%.  
Juanchu.  
Andre.  
What is the duration?  
Open rate of eight person.  
Causen.  
¿Qué?  
A de allí to maturity off.  
Depers.  
Let's see Namwanadoo.  
I'm on acá, pues.  
Say.  
Gracias función.  
Yes, when I go play?  
De verdad, es.  
The price of this bond.  
He's gonna be 950.60.  
Okay.  
No.  
The price now, the duration.  
A collaboration is this time one.  
This second one of times two, thank you.  
I need it.  
Done, these numbers I will get.  
Un mérito.  
Numerator obra de price is 2.77.  
O machine duration.  
Two boy.  
Tú pues muy bien.  
Yes.  
No.  
Es igual.  
Perfect.  
What are you?  
Hey, Marie, have you seen how did I calculate this?  
Okay, I started with the players explaining this calcus. It's the most complex thing you're going to find today's class, except from derivative, but you don't need to know how to get the formula.  
Okay. Now, this is the first question. We did it. What is the duration? Okay. If they need to naturity changes to 10.1%, what would be the relative change in price? Okay, I have just calculated duration. I'm going to calculate modify duration.  
This is.  
Yeah, sir, this is.  
Duration and distabilidad.  
If interest race.  
Danges.  
Ándale con.  
Right.  
Mhm.  
A SRC.  
Come on.  
Please.  
Y.  
It was 2 to boy.  
Is there any eight?  
Next sense.  
If it really changes, my bond's prize will behave as same as, as it will compound with a maturity equals to point seventy-eight years.  
Rachel.  
Modified duration is.  
So 52.78 over one plus.  
Juan Blas de Gildaris, 10%  
Yes.  
First, this.  
When I'm using percent page.  
When I'm using the percentage at the end, the percentage will be in the same.  
But what I have told you is I'm gonna worry what I have to.  
Finder.  
Hi, Bob.  
No.  
Rice wood.  
Luis approach.  
A tu boy.  
You do a person.  
No.  
Make sense?  
Yep.  
So.  
The price was 950.26 yes.  
Press, please.  
9.3. This is a number that you should do by yourself. It's so simple to do it, but after all these numbers, probably  
To be a little bit what I'm gonna do, change, change in.  
Interés.  
Thank you.  
If you absolutely include changes, it increases to, I'm gonna do, should not, yes, integrate increases in 1% and integrates increases in.  
Yes.  
Is an increase, no?  
It rates increases. What is going to happen with price?  
Price will decrease.  
So.  
This is the price.  
What is going to be the decreasing price?  
One percent thanks.  
2.52 percent. Yes, I'm following wondering.  
You better great, save this.  
One person, this would be the increasing price, and the new price is going to be 950 minus.  
de la.  
Ann.  
If it can rate, instead of 1%, if it rate changes, one-tenth of 1%, the drive would change which over time. Excellent?  
2.399. So, can you price?  
Will be 960 minus before, yeah?  
What is this? This is a modified duration.  
This is the number I'm looking.  
In the two members.  
Is this?  
A pocos.  
What is that we are?  
Es.  
The real price would be right here in the rate in the percent.  
And point one, yes.  
What is the real plants? Met present value.  
A week's rate, a week rate this.  
What?  
We are old.  
Obdiscutos.  
What are calculating now? I'm calculating the real price, real price.  
You send Toma Mini.  
Whatever, this is OK, that is realized.  
Do you think that there is a difference between big guys and distress?  
In this case, there is still the difference.  
But the smaller the things, then better the approximation because.  
It sets.  
That's the reason I played that long boats are more risky, bigger play changes than sort them boats.  
That's the generation formula in climate that long-term bones are more risky.  
Absolutely, yes, the longer the terms. And also, let me come here and let me use the third exercise that I have.  
And 1000 many use, I'm gonna use same numbers. Yes, I go here, 1000 operate this.  
8%.  
The ponis a present, top again.  
St.  
Three years.  
Yes, I need to maturity.  
Is yo de personal?  
Evers.  
Yep.  
Modified duration is the one that we have already called. My call duration is the one that we have already called, yes?  
And if you think the race.  
Increases.  
In 0.1% these are the numbers.  
10.96, yes.  
These are numbers.  
And if this raise too.  
It rise through.  
What person?  
These are the same number that I have already. Yes.  
This is the same exercise that I have already done, but with this, but I want to see, I want you to show you this.  
What is this?  
Okay.  
What is this?  
This is Paul's Price.  
So, you, yes, this is Bonstrice at the new leave.  
Pues sí.  
What is this? I'm looking for the point. The point shows me.  
In person, yes.  
Let me do, let me show you a math.  
It's nice, we did this graph.  
two days ago two sessions ago did we did this graph while this graph showed me how much the price changes when it the rate changes yes what we have done in today's class we have calculated slow we have calculated what are we doing when we use the duration as an approximation  
We are approximating approximating the price by the slow.  
No.  
Four.  
Small changes.  
The approximation is really well, as I say, as I may say this, bigger.  
You can see.  
The approximation de produce was.  
Why? Because, as you can see, this line is not a line. Sorry, this curve is not a line.  
Discord is homes.  
What are you?  
****.  
What is this duration unmodifiable?  
Okay, we are almost. Now with these things.  
What is the duration of Asia Como?  
What is the duration of common?  
What should be the duration of a year woman?  
It's naturally.  
The creation of your company is naturally makes sense.  
Then, what must be true for the duration of a cupon bond?  
Let me show you here where is this one.  
What is the door is in a facility of common?  
Naturi, make sense? Why not be true regarding the duration of a bond with coupons? Look here.  
What not be true?  
What must be true? That the duration is always smaller than its natural.  
The duration is always smaller than its maturity. Makes sense? What I'm talking when I talk about duration, interest rate sensitivity. Yes? It's the first time in my life that I am answering these questions without graph. And I am so happy.  
because you can see things better. Appearfully because seeing things better means that you should make at home a little bit of Apple in order to make all this idea joke.  
What happens to the duration of a coupon bond if all else equal coupon rate increases?  
What happened with the duration if all else equals? Coupon rate increases. As coupon rate increases, the duration becomes shorter. What is the duration of a bond coupon? The highest possible. As coupon rate increases, duration becomes shorter. Makes sense?  
What happens to the duration of the bond if all else equals? The deep to maturity increases. If deep to maturity increases.  
It give to maturity increases.  
What will happen?  
that all feature has lost will work less. But short term zero compounds will work more compared with the long term. So as I increase this, this will become  
smaller at a higher speed than this. So the duration has into maturity increases.  
Education.  
Makes more, well, I have a surgerate with this one, but normally.  
Into maturity, the yield, in the rate, power appears and power is the, and when I increase in the rate, not just the price increases, but also in the rate sensitive to grate.  
Factors affecting duration, the higher than acturity, the higher the duration.  
The higher the coupon rate, the lower the maturity. So the lower the duration. And the higher the maturity, the lower the duration.  
The duration of a portfolio is the weighted average of the duration of their constituents, yes, and regarding the duration of a perpetuity.  
I'm gonna go quick, but today you don't need to remember this. This is a good demonstration, yes.  
Going this.  
Knowing this, yes, knowing this what I'm gonna do.  
How do you calculate the price of a computing?  
Be over, are no?  
This is the creation of perfect. Let me do a quick derivative.  
Yeah.  
Press this, very good this.  
Marios.  
Be over half square, yeah.  
No.  
I'm a permiso.  
Daiser.  
Reasons.  
Positive P over out square.  
France.  
One plus R over the price that the price is.  
We thanks are, hey.  
So what is the ration of perfectivity?  
What is the raising of perfectivity?  
Mhm.  
One plus R over R.  
Vale.  
Exacto.  
This is yes.  
Ok, conversity what is conversity the second derivative?  
De según derivados.  
The relationship is not linear, and where are in complexity there are tons of papers with them, but not too that.  
Okay, in order to fill it today's class.  
What is the action?  
Interest rate necessity when talking about bonds.  
What is risk?  
Normally, what is risk regarding post ratio?  
Interest great risk, but.  
Looking about ones, normally there are two different types of whiskey, two different types of whiskey.  
And I'm gonna draw this next day, we will talk.  
And they will leave the last day.  
My face after hope after.  
Lista para este will still talk about relational, literal in ingresation, vale.  
In coma.  
Reese.  
To be divided into two parts, yes?  
Hi, in better drink. Risk, I are not for.  
Ready.  
Please, yes.  
And important thing, regarding great risk, if it teletrates goes up, it's good or bad.  
Careful, because it's not good or bad, it depends. Great risk would be divided into two things. One thing is price, risk.  
And regarding price risk, if interest rates goes up, this would be negative. If interest rate goes up, the price will go down. But also, we will talk next day about rainvestment.  
Chris.  
Reinvestment risk is, and if interest rates goes up and I have cas, I will be happy because I can invest my cas. If interest rate goes up and my bond will pay off coupons, I will be happy because I can reinvest the coupons at a higher rate. So regarding reinvestment rate, interest rates  
Goes up, but that new gra investment is possible. Makes sense?  
And also, there is another important shows of risk regarding fixed income that we are not going to talk anything apart from what I'm going to say now, that is credit.  
Luis.  
What is great risk about default? How do you miserve this? You call Moody's, you call Standard and Poor's, or you call Fitz, you call a rating agency, and a rating agency will put you a grade, yes?  
You take the yield proof, last day we talk about the yield proof, you take the yield proof and depending on your break.  
you will need to pay a higher spread. Yes, so today's class, we have not just talked about interest rate risk. We have not just talked about rate, we have talked about  
It income and risk general, and in order to finish.  
Devote Greece.  
This is one I have told, yet there's two different, there is one.  
Thinking about, for example, thinking about grades, yes?  
I don't know about, I don't know to well, how well.  
Who will the U.S. system works?  
But if you got a fail, you should repeat the course.  
I mean, you get an A, a B or a C is bad, a B or a C is bad, but not that's bad.  
You gotta F afuera?  
Because I don't know how the US system works in Spanish system.  
Great top from Tito Upin. Yes.  
If I put a five, you pass.  
You were a 4.99, you don't pass.  
So, there are people, I got a fight and becomes really, really happy.  
Because they have passed.  
But if you get a 4.99 or 4.5 or a three took it the same, because you should repeat the course. You understand what I'm saying?  
Talking about the investing, that is the same.  
There is one grade till the one people normally will not buy your bone. Your bone, for example, will become a junk bone. Have you heard about junk bones? Are risky bones. Are people, are bones that normally investment firms will not buy.  
They are much, much more risk.  
And it is said different between failure and no fail. Makes sense.  
Uh, if always, you take the deal, the deal both and you have been.  
Regarding both, there are two types of risk, interpret risk and default risk, also called credit risk, yeah?  
Absolutely important.  
Please.  
EVI regarding fixing come and equity.  
I'm not telling you to pass the whole holiday thinking about me, or me, because.  
Let's work on it.  
All of you should know how to calculate the price of Japón, and also all of you should understand duration property, and also go through and with it again. Thinking about the fire.  
We are not gonna see difficult things. We have already seen most difficult things probably another. We won't talk about.  
derivatives, but understanding derivatives is a matter of just sitting down and understanding. What is the problem you are going to have in the final? If you don't do anything now, once you go over, once you go through derivatives, you will have a lot of different things to start.  
And this could be profusion, yeah.  
Enjoy.  
Sí.  
Yep.  
Oh, I didn't get, I didn't get you. It's nice, sorry.  
Three.  
Hello.  
Bueno, descansa, ¿dónde vas a ir?  
Y bueno.  
Malta, I've never reading Malta, but Croacia also has. I will ask you about Croatia speeches. Okay. Because I have heard that they are great.  
You came from Abu Dhabi? Yes. Always think all things are coming in Abu Dhabi. I think that they are having all classes online, no?  
All online and and your your friends in Abu Dhabi. Some of them are in Abu Dhabi, some of them back home, but the campus is close to the university.  
So, the campus is close. Well, I before like essential workers that like that.  
But I'm happy you to be here, or even for your family. There has been bombs or they have stopped all bombs. Welcome. No, they like stop most of them. It's just that it is a bit scarier campus because our campus is.  
Thirty minutes away from the U.S. base, very it's like right there, so like in Abu Dhabi there is something for candidate weekend, do you know what it is? What? In Abu Dhabi there is something for candidate weekend, where all the candidates come to Abu Dhabi for a weekend, like they like Abu Dhabi flies them out.  
And they do interviews on campus. They all expenses paid.  
Well, when of this happens? This happens like for every every application side, like in Abu Dhabi. So this so this time when the candidates were there giving interviews, that's what the missile is like went off for the first time. So the candidates were like stuck there for like the whole week until the people. So now I feel back down what the anyone was going to come this year.  
With all the space space.  
It's incredible. They pay they pay a lot because they're trying to get yeah, like I like I am also like they pay for me also like they pay like financial aid for me, but some of my friends they're not doing anything like they it's free for them and also they get money from the university. The university gives them $4000 every semester.  
to spend for themselves.  
Including like expenses that we get for like our food and everything space. I mean, I should have to pay fees because I was not that lucky, but my friends are my friends.  
It's incredible. So you should have with it. Yeah, yes. There's a there's a really good uh finite cycle. What do you think about you?  
Ohh, also, professor going to ask you a thing.  
Have you ever been to that?  
But I have one meeting then I.  
Have you been to Casa Pinko? A restaurant called Casa Pinko.  
Yes, is it? I think Kasamigo. Okay, because I have to go meet something they want my friends, their parents, they want my friends is from Meredith.  
I think I mean, it's not bad.  
Even back.  
Thank you so much. Welcome to you. I enjoy it when you travel. I'm going on. Monday I'm going back Friday. Thank you. You deserved it. Thank you so much.  
There's three.  
Yeah, for what else?  
Yes.  
How is it in the file?  
I'm doing it.  
Yeah.  
Right.  
No.  
Is this a stuck in the world?  
¿Qué pasa, tío? De **** madre, agotado, pero de **** madre, ya se está acabando esto de la Semana Santa como.  
Pero para hacer el para hacer el subnormal con la guía.  
No.  
Que una cosa.  
Porque podríamos hablar para la segura.  
Sí, a ver, de momento, se ha ido el Wi-Fi.  
A ver si Javi no puedo arreglarlo.  
¿Vale, y los arrupe, no?  
Es profesor.  
Sí, iros a tiros a Rupe y donde sea, a Rupe. Javier hasta que hora está.  
Okey.  
Stop!  
Estaba ahí.  
Are you?  
No.  
A ver, es que son las 6:20 y acabo de acabar en, o sea, él se va a las 7:00, es que no me da tiempo a llegar, estoy en martillo.  
Porque dice que.  
Que no, que no, que se pide, que le veo mañana.  
El permite te pide.  
¿No, a ver, os salís con qué profesor estáis?  
Google.  
Ahí Monica tiene todo el día, pues hacer una cosa, ir a Javi que me espere, que voy para allá, iros a Rupia.  
Good.  
En la primera sala que hay, no creo que vaya a llegar nadie a dar una clase a las 7:00 de la tarde si el aula está vacía.  
Vale, pues se lo digo.  
Dile a Javi que me espere que voy para allá cagándole.  
Ahora digo.  
No.  
A.  
Open Google.  
No.  
They just view it, but I don't.  
No.  
Google.  
Hola.  
Oh.  
No.  
Sí.  
Es.  
No.  
Hola.  
Me voy ya semanas, feliz Semana Santa.  
Burras, bueno, la semana que viene es del 31.  
Ánimo, ya tengo unas ganas.  
Estupendo.  
Saludos.  
Y más tarde.  
Hola.  
Note.  
No.  
¿Y vale?  
No.  
Ya.  
Bueno, es posible.  
Puedes hacerme un resumen.  
In.  
Good.  
No.  
Google.  
Sí.  
Sí.  
Sing it.  
Gracias.  
¿Cómo llevas?  
Work.  
No me enteró que me ha llamado a veces que está en la clase.  
No.  
Hola.  
Y lo he visto.  
Yeah.  
Sí.  
Hola.  
Google.  
No.  
No.  
Good.  
No.  
O.  
No.  
Sí.  
Sí.  
¿Qué?  
Atención, por favor.  
No.  
Pero no.  
Give me the opening.  
Es una cosa estoy en el tele.  
Ya me solo today.  
No.  
Gracias por paciencia y por hablar.  
O sea, tienes un grupo con todos menos conmigo.  
Mhm.  
Yo pensé que metía en un grupo ya.  
Pre crisis.  
Y.  
El vídeo.  
Vale.  
No.  
Sí.  
Two.  
Yeah.  
A.  
Sí.  
El.  
No.  
I.  
Es.  
Yep.  
Perdón.  
No.  
Five.  
K.  
No.  
Okay.  
Aparece.  
A.  
Open.  
Yes.  
Good.  
Good.