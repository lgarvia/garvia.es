---
Título: "Student Notes — Fixed Income III: Duration, Sensitivity & Convexity"
Curso: Financial Markets (NYU Madrid)
Fecha: 2025-11-05
Tags:
  - NYU
---
Sesión realizada antes de la siguiente en el máster de Riesgos: [[2025_11_05_Sesión_03_MUGRF_Riesgo_de_tipo_de_interés]]. Aquí volví a explicar la duración valiéndome de lo que ya había explicado antes.

# 🧭 Class Summary — Duration: Sensitivity, Not Time

## 1️⃣ Where we are
- We continue with **Fixed Income**: today’s class introduces **Duration** — a core concept in bond valuation and risk.  
- You already know how to compute the **price of a bond** from its cash flows and yield.  
- Now we ask: *How sensitive is that price to changes in yield?*

---

## 2️⃣ What Duration Really Means
> **Duration is *not time*.** It measures **interest-rate sensitivity**.

### 🔹 Step 1 — From pricing to “weighted average time”
1. Each coupon payment has a **present value (PV)**.  
2. Each PV contributes a **weight** to the total price:
   \[
   w_t = \frac{PV_t}{Price}
   \]
3. Multiply each weight by its time \(t\), and sum:
   \[
   D = \sum_t w_t \, t
   \]
   → **Macaulay Duration** (in years).

Example:
- 5-year bond, coupon 5%, yield 4%.  
- Weighted average time of payments = **4.55 years**.  
  → The bond behaves *as if* it were a zero-coupon maturing in 4.55 years.

> Even though expressed “in years,” Duration ≠ Maturity → it is a **weighted average of timing**, not the final payoff date.

---

## 3️⃣ From Derivatives to Intuition
Mathematically, Duration comes from differentiating the price with respect to the yield \(r\):

\[
D = -\frac{1}{P}\frac{dP}{dr}(1+r)
\]

This connects to the slope of the price-yield curve.  
- **Negative slope:** when yields ↑, prices ↓.  
- **Steeper slope:** higher interest-rate sensitivity.  
- **Flatter slope:** lower sensitivity (short maturities, high coupons).

---

## 4️⃣ Modified Duration — Changing the Units
Think of the comparison between **centimeters** and **feet** — different units, same meaning.

To turn Duration into a **percentage price change**, divide by \(1+y\):

\[
D_{mod} = \frac{D}{1+y}
\]

Then, for small yield changes:

\[
\frac{\Delta P}{P} \approx - D_{mod}\,\Delta y
\]

👉 **Rule of thumb:**  
+1% in yield ⇒ price ↓ by approximately \(D_{mod}\) %.

---

## 5️⃣ Numerical Example (worked in class)
Bond: FV = 1 000, coupon = 8%, maturity = 3 years, YTM = 10%.

| Year | Cash Flow | PV | PV×t |
|------|------------|----|------|
| 1 | 80 | 72.7 | 72.7 |
| 2 | 80 | 66.1 | 132.2 |
| 3 | 1 080 | 811.5 | 2 434.5 |

- **Price** ≈ 950.  
- **Macaulay Duration** \(D\) ≈ 2.77 years.  
- **Modified Duration** \(D_{mod} = 2.77 / (1+0.10) ≈ 2.52\).  
- If yield rises by +0.1% (10 bp):  
  \[
  \frac{\Delta P}{P} ≈ -2.52×0.001 = -0.25\%
  \]
  ⇒ Price ≈ 950 × (1 – 0.0025) ≈ 947.6.  
  Real recalculation gives ≈ 947 — the difference comes from **convexity** (see below).

---

## 6️⃣ Duration Properties (memorize these)
| Variable | Effect on Duration | Reason |
|-----------|--------------------|---------|
| Higher coupon | ↓ | more early cash flows |
| Longer maturity | ↑ | more distant cash flows |
| Higher yield | ↓ | distant flows discounted more |
| Zero-coupon bond | D = maturity | only one payment at the end |
| Coupon bond | D < maturity | earlier payments reduce sensitivity |

---

## 7️⃣ Convexity — Why Duration Is Only an Approximation
The **price–yield curve** is **convex**, not a straight line.

- **Duration** gives the *first-order (linear)* change.  
- **Convexity** adds a *second-order* correction:
  - When yields **fall**, price **rises more** than duration predicts.  
  - When yields **rise**, price **falls less** than duration predicts.  
- The longer the maturity, the greater the convexity.

So: Duration = slope; Convexity = curvature.

---

## 8️⃣ Risk Map for Fixed-Income Investors
1. **Interest-Rate Risk**  
   - **Price Risk:** yields ↑ → bond prices ↓.  
   - **Reinvestment Risk:** yields ↓ → coupons reinvested at lower rates.  
2. **Credit Risk (Default Risk)**  
   - Issuer might fail to pay.  
   - Rated by agencies: **Moody’s**, **S&P**, **Fitch**.  
   - Lower rating ⇒ higher required yield (**spread**).

---

## 9️⃣ Portfolio Duration & Extensions
- Portfolio duration = weighted average of component durations.  
- Long maturities, low coupons, low yields → highest duration.  
- Duration of a **perpetuity** exists and can be derived analytically (to be done before the final).

---

## 🔟 Quick Practice
1. 5-year bond, FV = 100, coupon = 5%, YTM = 4%.  
   Compute **price**, **Macaulay Duration**, and **Modified Duration**.  
2. Estimate \(\%\Delta P\) for Δy = +25 bp and −25 bp.  
   Compare both directions → notice convexity.  
3. Explain briefly why **higher coupon ⇒ lower duration**.  
4. Which bond is riskier to interest-rate moves — 1Y, 2Y, 30Y, 40Y?

---

## 🧩 Key Takeaways
- **Duration measures sensitivity**, not maturity.  
- **Modified Duration** converts that sensitivity into a *% price change*.  
- **Convexity** refines the estimate for large Δy.  
- **Two major risks:** *interest-rate* and *credit*.  
- Practice calculating \(D\) and \(D_{mod}\) — this topic is **central for the final exam**.

> **Mantra:**  
> “Duration is *not* time — it’s how much your bond *feels* the rate change.”



# Transcription
5 de noviembre de 2025, 4:05p.m.

1 h 4 min 42 s

To Days class is this is missing and robis missing.  
Deis clases absoluta.  
Absoluto importante.  
I don't there you should be punto up you should be un time in class and out this things.  
¿But to the clase de will way de as One Second all of you know how to get the value of?  
Yes what I wanna do Today, introduce One concept, there is absolute importan is duration.  
¿What is duration?  
Por induration.  
Don and short time, yes, don't and sword time White because duration is not time duration is interest rate time interest great sensitivity, let me just open di Excel.  
¿En mi open de Excel en mi open de Excel, where is Excel?  
Sexo.  
Puede ser.  
Is a with you.  
¿With you?  
Oh 6 en Twenty está en Flais.  
O K.  
Start with the class.  
Disclass.  
Julian versan en discrash is import.  
Bien Dios también disco de sí sin potas.  
Youtube.  
¿Porque le digo usted país?  
Presentario y si cuan to ficha, Mario over One plus, AR rais cutie es.  
Muy bien.  
Presenta de bici cuatro over One Last a.  
De de de.  
¿De digo disprice yes de vive o Pi?  
Cuántas lista de mi o más de Prais Chelles cuando rave chelles in and in decimalway.  
O K.  
¿De mí con quién?  
¿Cuál is the derivatives of this?  
Y no 40, te digo a ti.  
Y nos vemos.  
Yes su ex.  
Deriva el tipo dis.  
¿Cero es to d six EH? Perdón, continuidad.  
Sabes mal es posible.  
No.  
Luis.  
De mi.  
Mail un Server.  
No, bueno.  
¿Hola señor, algún día?  
Emillas, we are so close 10, yes.  
Seven.  
Times One Plus, x, Rise two.  
Ya.  
O K Venga.  
¿Cuál es derivatriz y ópera?  
¿Ah, es?  
Pero a ti sí.  
Te traes Centro, Mario, Obra Juan, las a las cuatro.  
¿Voy a ver una is pis of the Pastor?  
Bien, they, we are they is an important class, and today going to acabado duration. ¿Why is duration interested concept of duration?  
You don't need to know to to derivate, you know to pass is course that is will help. ¿Y Norberto understand how We will get the fórmula i wants you see the fórmula you with now? ¿How to you she with to know de?  
Exas o K es mi to another place.  
¿De mismo en tú?  
OK.  
Excellent, yes.  
Yes.  
Bella, say one maturity.  
Maturity of.  
200 OK, no five. Let me say 5 because I don't want to go too far in time. 200 would be maturities the time where you will when you will receive last payment, yes.  
Coupon rate of five, yes, 105 make sense and the deal of.  
4% I'm going to calculate the price. How do you calculate the price? By calculating present value of each cash flow at this rate? Yes, rise to the first. This is first present value.  
And I'm going to sum this and this is going to be the price.  
Yep.  
All of you fully understand this.  
OK.  
Surprise.  
Is the sum of present value, present value, all present values. Yes, so I can say that.  
This has a weight over the price. This has a weight. This has a weight and so makes sense. How much this coupon weighs on this price calculating this one.  
Over that and when I calculate the weight, how much these weight over this make sense?  
So how much this week?  
Over under four and I fix this number I get that this.  
First coupon.  
Corresponds with a 4.6% of the price.  
All of you are following me. OK, let me continue. I can take this.  
OK.  
Home match these weights should some.  
100 No 100 Yep.  
OK.  
Now.  
This is a 4% total price. This is a 4% of total price. This is a total percentage, yes.  
What I would like to know?  
But what I mean, there is going to be complete.  
If there were no coupons, I know that all coupons, if there were no coupons, all payments will be made in year 5.  
I I want to know.  
What is the average time? Average time?  
Where these payments happen. So in order to calculate the average time, what I will do, I will multiply this times one this times 2.  
And I'm looking for the average staff. Make sense.  
We need upgrade you.  
Yeah.  
These times one, yeah.  
These numbers.  
These numbers means nothing, but if I sum these numbers I will get the average stand 4.55 years. Make sense?  
What does this mean? This mean that I can consider that this bond if I consider all coupons?  
Will be equivalent to one unit payment in 4.5 years. Make sense.  
Yes.  
I have already told you, if I hear someone saying that duration is time, I will kill you.  
Make sense? Once I have said this.  
4.55 years will be the duration of this one.  
You see what I mean? Is this time? Is this time that you need sign in years? What are we talking about? Interest rate sensitivity? Make sense?  
Four point this is let me call this duration.  
And years. I mean, you can. You can call in time if you want, but you will be mistaken.  
But the problem is that if I don't tell you that I will kill someone, probably you will forget that. I want you to be aware that.  
Although he's written in tears.  
He's not bad.  
Makes sense.  
OK, so I have two pieces of the basket, yeah.  
Have you understood this?  
Have you understood that the derivative?  
We are so proud, yes.  
You have understood the truth inside and.  
But we should do this. Many that you are on a mountain, on a hill. Yes, you have passed the the peak. You how would you say when you have passed the peak?  
How do you say this in English?  
You know what I'm saying? Yeah. Yes. So in Spanish, in Spanish, can you taste for a picas? Yeah.  
Doing the croqueta is rolling over. I mean, you'll have it in put an echo in order that's. OK, there are.  
Is this?  
We don't have, we don't have Spanish on it also there. Let me taste it in Spanish.  
There you go. Yeah, it is. I have it.  
I haven't even heard of that. What's the difference between a Spanish omelette and a regular omelette? What's in a regular one? Like a regular omelette? A regular one in Spanish will go in French.  
OK, but only have sex.  
But the Spanish one has for the. Oh, OK, and it's like a brick, but not a brick because it's not so.  
When you taste the Spanish on it, you will never taste French on it again. Really. Yeah. OK, sorry for this. What is how do you calculate the price of?  
That's close.  
First cash flow 1 + R rise to one, isn't it?  
Plus second cash flow 1 + R rise to the second plus the third one plus R rise to the third plus.  
The last one that is being paid together with face value over 1 + R rise to the T raise to T.  
In Nicolas, do you see it currently? Perfect.  
What are you gonna do?  
I'm gonna derivate B.  
Over up, yes.  
I.  
If you've got what I'm gonna do.  
minus one times C over time one plus R.  
Price to the second, no.  
Main.  
C / 1 R raised to the third.  
-2 Yeah, I did it. I made it in order to see your work C over 1 + R there. Yes.  
-3 * C 1 + R raised to the 4th.  
Yes.  
And let me go to the last one minus.  
Minus P * C + F * 1 + R rise to P + 1. Yep.  
2.  
All of you are with me.  
I'm gonna make some adjustments, yes.  
There's one.  
First one is I'm gonna multiply.  
Negative here. So if this is negative, all these would be positive, yes. And I'm going to multiply these times one plus up, yeah.  
Make sense?  
Stop.  
If I multiply -1 + r.  
It will be positive instead of negative. Yes, all signs will be positive and this is 1 * C / 1 R if I multiply these times 1 R.  
Instead of being raised to the second, it's raised to the one. Make sense.  
Plus 2 * C / 1 R raised to the second no.  
Plus 3 * C / C / 1 R rise to the third P * C F.  
Over 1 + r raised to T makes sense.  
All of you are with me.  
Let me make one more thing.  
I'm going to divide this, sorry this over price.  
Yeah.  
And let me make a big parenthesis.  
Yep.  
What do I have on the right?  
Juan thanks present value first.  
+2 times present value of the second coupon.  
Plus 3 + T present value of plus coupon plus face value.  
What if I divide this present value over price?  
But I will get the weight, no?  
Weight over price, weight of the first one, weight of the second, weight of the third.  
And what if I multiply the weight times one, the weight times two, the weight times three? What do I get? The average time.  
Is music sounds familiar to you?  
Don't you see that this is that?  
Hey, let me move here, yes.  
Yeah, -1 + R.  
Over B.  
Thanks. P Yes, this is.  
What I have done, I have just copy and paste right there.  
Make sense?  
So let me start with the class.  
I should be careful because that claw.  
It's not correct and I don't want to be talking for more time than it corresponds, whatever.  
Any questions?  
Sorry, sorry, I have problem. We will do this.  
I should have done it before. Please in a minute.  
Fix income free. What are we going to do today? Today we will talk about interest rate sensitivity.  
And then in order to talk about the interest rate sensitivity, we will talk about race duration, yes.  
Oh, and there is also complexity. I don't care too much about complexity. OK, what is interest rate sensitivity? How much the price of the bond will change when interest rate changes, yes.  
Do you remember from the last class? Not the last class. Last class we talked about in the great Greece started the.  
Last class we talked about the roof and the class before last class.  
We have that class here.  
Oh, let me see. There was a group so quick.  
So quick, what are you?  
This is last class and this is the class before. Let me see if I can download this.  
Save. OK, perfect.  
What did we do? 2 classes ago, 2 classes ago, we get this graph. Do you remember? What is this graph? Here you've got the deal, here you've got the price and we represent.  
The relationship between the price and the yield. If the yield is zero, we are summing. If the yield is the coupon rate, face value. And so yes, what I told you that this relationship.  
This interest rate is low, this interest rate sensitivity and we are going to two questions ago I told you two questions time. So today we are going to approximate this by the slow we will approximate the change.  
How much the price will change? How much price will change? We will approximate this with the flow. Yes, let me move into today's.  
I'm gonna close.  
I'm gonna close. I'm just gonna.  
Here 1st order effect bond prices and interest rate are negatively related. If I increase interest rate we will have a new price of bonds then we will go down. Then maturity matter prices of long term bonds are more sensitive to interest rate than short term bonds. Yes, maturity matter bad labor.  
Because there are coupons, we should think about what is the effect of coupons, yeah.  
And then complexity, convexity.  
If you see this, it's convex. This is not a lie. What is complexity? The second derivative? We are not going to calculate complexity. We are not going to calculate the second derivative, but you should know that.  
The longer the term, the longer the term.  
Then more price will change when interest rate changes.  
The amount of change will be lower the long. The longer the term, the more a change in interest rate, the more impact in a change in interest rate that will have on the price. Make sense? The longer the rate, the more the change.  
But for example, if interest rate changes, how much will the the change price if we compare our one?  
A one-year bond with a two-year bond, the change of price will be bigger. But if I compare a 30 year with a 40 year, the longer the more the change, but the change will not be as high as.  
A one year compared with a two year. You understand what I mean? What I mean is that if I have a one year compared with a two year, I will be really worried if I have a two compared with one, but if I have a 30 or 40, I don't care.  
I mean, I will be suffering, but having a 20 year or a 21 year will be the same. Make sense. This has to do with complexity. I will not care too much about complexity, but I want you to know what is complexity because there are a lot of people trading with fixing.  
And convexity and increase in that year bonds result in a smaller price decline and the price when associated with a decrease of equal magnitude.  
OK, let me go to this example so quick. 5 percent, 6% and 7%. What is the?  
This is the Excel. This is today's, yes.  
This is 2 days I'm gonna yes.  
Because I don't want to get crazy. I want to close. I'm gonna close this. Don't say.  
No, and this is today's. Yes, OK, 5-6 and seven percent, 5%, six percent 6.  
Percent and seven percent, yes, 5-6 and 7% and this is a one.  
Year and this is a two year, yes. Let me calculate the price of all this bond bonds 1 + 5%. This is the price of one year six and seven, yes. And let me calculate this for two years.  
These are zero bonbons.  
1 + 5% rise to the 2nd Yep 90.  
OK, what is come first order? The longer the longer the duration, the more the change, the change is bigger, but the second order benefit is that as I increase.  
Thank you. As I increase you, this does not change us.  
Maths. It's been saying, but not the maths.  
Yeah.  
OK, you can calculate the change in price.  
And you can see also that maturity matters, but personally I will not expect too much time with discipline.  
With this one I will spend all the time that time that I have dedicated three of the slides has to do with this slide. What is duration?  
Or also called Nakoli Razer.  
How much the price will change when interest rate change but duration?  
To Asia.  
I will repeat this out of that. This is going to be the first time this one.  
This ball has a duration of 4.55 years, yes.  
What does this mean? This mean that please this mean that 4.55 years. This mean that if interest rate changes this bond, the price of this bond will change.  
The same as a zero in combined with a maturity of 4.55 years. What is the ratio interrace sensitivity? Interrace. Say this.  
The size of this bond will change the same. This bond will be behave as if this bond were a silicon bond with 4.55 years of maturity.  
Make sense?  
So coming back here, A is a zero coupon bond, B is a bond with coupons in case interest rate changes.  
Which price? Which price we've sent more?  
If in case interest rate changes, which price? Which bonds price will change more?  
What is the what is the duration of this ball?  
What is the reason of this bond? Lower than four is because coupons which price will change more.  
The one with longer, bigger duration.  
Morning, morning. That's right, sensitivity. Make sense.  
Can often be interpreted as the average time you have to wait for your payments.  
And always please think about the internet rate sensitivity.  
OK, hope we will get the formula. The price sensitivity is linked to the average time we have price, we calculate the derivative and at the end we will get.  
This what is this please?  
Why is this?  
But is this the way that what we have already calculated? Make sense?  
OK, can you come up for a second?  
I don't want you to throw anything more or less. How tall are you? You can see. How tall are you? I don't know. 510510.  
3.  
I am 183.  
You know that price them for me, like if you tell me two stones.  
And if I tell you 183.  
Does this mean something for you? I have no idea. But you know in which language I'm talking. No, you are talking in the heat language and I'm talking in the centimeter language.  
Makes sense.  
Oh, I mean, probably I'm taller, but at the end both of us have same same goal, same height, no.  
And what I want you to see or to understand that no matter which units we are using.  
You can say who is taller or not and you can compare. You say that one is, I don't know about feet. Sorry. You say one person could be 6 feet. Yeah. Pardon, yeah.  
Five. Yeah, six of people. Yeah, this is higher than five.  
And also 180 is higher than 150.  
The units you can compare with duration. I have shown you duration in years, but let me show you.  
Another duration that is this one. I'm going to take this formula, yes, and I'm going to and I have. I'm taking this formula, yes, and I'm going to take derivative P / P.  
The price.  
What is this thing mean? The change in a decimal way. What does this triangle mean? A bigger change, a discrete change, yes.  
It.  
How much price will change over price, yes.  
How much price will change over price?  
Approximately, approximately. It's not an exact change. And do you remember that it was 4? It was complex. I'm going to approximate this by a by, yes. How much this price would change?  
When interest rate changes, first idea hold this relationship is interest rate increases. What will happen with price? They will decrease so.  
Negative. No and not.  
Duration feet or centimeters and in order to make the adjustment, what should I do? I should divide duration over 1 plus the yield.  
What is that?  
What is this?  
This is called modified duration, modified duration and what is modified duration is duration but in other fields.  
I call it iteration. There has been iteration in years and modified iteration. What does modified iteration tell me?  
How much my price will change approximately when interest rates?  
If this increase 1%, if this increase 1%, my price in percentage will increase modified duration percent. Make sense.  
Do you want me to repeat that? Yeah, perfect. The idea is what is modified duration? Again, how much price changes? What interest rate changes? And the idea of this duration is if rate increasing 1%.  
My price will decrease or if I raise your percent.  
All of you know this to review and we will review. At least today's class is a class that you should recap.  
Yes.  
Play Wednesday. I will bet that Yeti is with Nico next room.  
Everyone has information. No, no, no, no, I don't care. I don't care. I mean what I'm thinking about Jesse Anita because they are not here and understanding this is important.  
I I don't. I don't care about you see the point, no. OK, the price response to a dual change is modified. This is modified. Make sense.  
Let us see one example. What is the duration of a three-year coupon bond with a face value of 1000 and coupon rate of 8% and an equality of 10%? Yes.  
Hey.  
4.  
What is the duration of a three-year coupon bond with a face value of 1001 thousand coupon rate of 8% and a yield to maturity of 10%? What is yield to maturity?  
10%, yes.  
First thing I need to calculate price no one plus the deal the 4th price to the first to the 2nd and to the 3rd and the price is the sum.  
Places 950, yeah.  
Let me check if this number is correct. It's correct, Yep.  
OK, now I'm going to calculate duration. I'm going to calculate. I'm going to calculate through a different way. I have calculated before. First I calculate the weights and then I multiply weights by time. Now what I'm going to do?  
I'm going to multiply times 1 * 2 * 3 and then once I've got all this number I will divide into the plus.  
I'm going to say this present value times one, yes.  
5.  
132 and I'm gonna sum.  
This number and what is the ratio? This number over price makes sense.  
Reason should be around.  
To I had to get.  
2.7 Does it make sense? Yeah, so here I've got.  
Let me write here years and let me call this duration. Yep.  
What does this say? What does this tell me?  
If interest rates increases.  
My bone will behave as a zero bone bone.  
With the maturity makes sense.  
If interest rates increases or changes, my bond will behave same as a zero bond bond with 2.77 years of maturity.  
Make sense? OK.  
What is the duration 2.77 years? I'm going to calculate also. I'm going to calculate also.  
Modify.  
Duration, yes, a modified duration is.  
2.77 / 1 plus.  
Thank you. Yep.  
And this is percent, Yep.  
2.5652%.  
What does this mean that if in the rest?  
Rates increases in 1% my bond bonds.  
Price will be decrease.  
Uh, Brooks.  
2.52.  
If the true percent makes sense.  
The duration is just like on average it would be 2.17.  
It's like, would it matter how much they increase? Eurasium would be the question. Is it like on average that amount of time? I mean in this case.  
This is the average time that this will behave the same as a city of Bongo, yes.  
And in this definition, this is not the average time, this is a percentage. And the definition is that this will behave, no, sorry, this will behave price will change approach because now we are going to see how approximately this is, yes.  
Any questions?  
And this is.  
Well, the title is, yeah, OK.  
If the year to maturity changes to 10.1%, what would be the relative change in price? Yeah.  
Is there due to maturity changes?  
This is.  
Yield to maturity changes to 10.110.1%, yes.  
Approxy made new.  
Price, yes.  
OK.  
OK.  
If interest rates increases, the price will decrease, no. So the new price is.  
Here the old price. Yeah, I'm taking the old price and I'm going to subtract from the new price.  
From the new price, I'm going to choose to start.  
100 is that 2.52%? Yes.  
Thanks.  
The price, yes, one thing. This would be the approximate change in case in case interest rates will increasing 1%, but instead of increasing in 1%, this is increasing.  
110th, 110th of 1%. Make sense?  
Yeah, OK. And I should multiply instead of increasing in 1%, just wanted because of that I'm going to multiply this number times.  
10%, yeah, and new price approximately 947.  
What I'm going to calculate now the real price. How can you calculate the real price by doing net present value? Yes, net present value at this rate.  
Of which has closed.  
Of this councillor, yes, this is the real price. The real price would be.  
Let me same.  
And me.  
What if instead of at 10% this will rise to 11%?  
This is still an approximation, but the longer the change, the less accurate the estimation would be if instead of 11%, let me say 30%, yes.  
I should write here.  
It's been it is still an approximation, but it's not that accurate.  
Why? Because of convincing.  
What are we doing? Let me come back. Let me just right here, 10%.  
And let me just write here 10.1.  
Why this? What are we doing?  
If interest rates increases, price will decrease. What are we doing? We are doing the approximation of the new price by considering that there is a lot.  
What is the slow modified duration? But because this is not a line using modified duration in order to estimate new price is just an approx. Make sense?  
Yeah.  
OK.  
Does the generation formula imply that long-term bonds are more risky, bigger price changes than short-term bonds?  
Yes, yes, yes.  
Now please.  
I want all of you to read and think.  
What is the duration of a zero combo?  
What is the duration of a cucumbo? You are saying it and what must be true for the duration of a cucumbo?  
It will always be lower than its maturity.  
What happens to the duration of a coupon bond? If all else equal, coupon rate increases, coupon rate increases. What will happen with the weight of coupons? It will increase, so duration will decrease. Make sense?  
What happens to the duration of the bond? If all else equal, the deep naturally decreases.  
I will not write the answer if I were. I will think about the answer later and try to get the answer by yourself. You can ask Satydi or you can ask myself or you can. The point is now you have all the information.  
I will review today's class and once you have the slides also in the bread space in the WhatsApp. So these questions help us. Now it helps me because I'm the one that is thinking about this, but the point is.  
What happens to the duration of the bond if all else equals? Yield to maturity increases. If yield to maturity increases, the weight of next coming coupons will weigh more.  
Monetized in the future, we will work less. If coupons wait more, duration will decrease. Make sense.  
More things.  
Factors affecting match duration. I have already talked about match. If the higher the maturity, the lower the coupon, the higher the maturity, sorry, the lower the coupon rate, the higher the duration, the lower the yield to maturity, the higher the duration we have already seen.  
The duration of a portfolio is the weighted average of durations. Yes, next day we'll talk about this. And what is the duration of a perpetuity? We will see it later. Today you have too much information in your head.  
But calculating the duration of a perpetuity is something that I challenge you to do and.  
Before the final, I will do it with you and I will show you how to do it. You just take calculating other. Any questions?  
OK.  
What is convexity? The second area? We are not going to use it so much, but convexity.  
Why the duration? Why? Why? Why this number is an approximation?  
But this number is an approximation.  
I'm not the real number because of.  
Because.  
Because this curve is not alive, because this curve is complex.  
This is an approximation, yeah, because of.  
The sensitive price would respond to the deal is approximate by a linear function when using the ratio. Yes, the ratio is not linear convex when deals decline, price increase in the bonds. OK, makes sense. Any questions?  
Yes, one more thing so quick.  
If I buy a boat, I buy a boat.  
I will be worried. Why is that risk? Yes, I will be worried about two different types of risk. One is interest rate risk. We have dedicated days for class to talk about interest rate risk. What is interest rate risk?  
Who matched the brain? Any particular reasons? Make sense?  
But also there is a second risk I will be worried about. That should be I'm giving you money.  
Well, I will be thinking about.  
Great risk. What is great risk? The risk of not receiving back the money that I gave you. The risk in this case, sorry Pearl of Pearl going into a bankruptcy.  
I'm the one that I'm the risk of myself going into a bankrupt. Make sense. So there are next day we will continue talking about this. There are two types of risk, interest rate risk and price risk.  
Credit risk. What is credit risk?  
The risk of not receiving the make sense.  
Yeah. Oh, do you need some?  
Do you have rating agencies? Rating agencies? What is a rating agency? Or do you? There are there are three important movies. Therefore, this is not. This is a standard approach, but this is not.  
This is the name of Moody's Standard and Bush. And what is the name of the third? Fitz, Fitz, Moody's and Standard Bush. What does this? What do these agencies do?  
Great. They give hurry. You give the books, you pay their money and they told you.  
That is great. You have this grade or do you have this grade? Yes. Once you know this grade, hopefully you can pay the price by going to the group. You take the group and this this grade is a spread the worst.  
The grade, the bigger the spread, the more return you should pay. The cheaper your stock will be, the less money an investor will need to pay in order to let's say return. I return that because it's risky. Make sense.  
Hey.  
At the end, this is what I have just told you. So conclusion regarding bonds, there are two types of risks, two types of risk, interest rate risk and default risk, credit risk, yes.  
Next class we will talk about interest, we will continue talking about interest rate risk and I will tell you that interest rate risk is divided itself into two different types of risk.  
Reinvestment and prices. Reinvestment and prices. Why is reinvestment risk? Next day we will talk about it. Yes, but reinvestment has to do with I have money in case the price go down.  
I cannot invest this money at a higher rate. Yes, I will be using money in case interest rates go down and if I have to go price risk, if interest rates go down, price will go up. So I will be happy. Next day we'll be talking about interest rate risk today.  
We are done. Please review today's class because next day we will continue working over this and in two classes time I will start talking about derivatives and we will forget about switching code.  
Makes sense.  
Today is Wednesday. Have a good weekend.  
I love to say this on Wednesday. Let's move in.  
We don't have class. Next Wednesday we have class and next Friday we have class.  
I mean, if you cannot come, today's class is much, much more important than next Friday. Today I will tell you that I will give you back saying you have. I don't want to go deeper.  
You know what I'm talking about, yeah.  
OK.  
No, I mean attend. Attending is absolutely important.  
But not because of because if you are in this class by yourself, it's harder to prepare and I think I wish that now you understand things a little better.  
You too.