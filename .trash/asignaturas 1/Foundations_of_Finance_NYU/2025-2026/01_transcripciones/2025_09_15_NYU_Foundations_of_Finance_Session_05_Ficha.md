---
Título: Foundations of Finance – Session 5 - Portfolio theory
Fecha: 2025-09-15
Curso: Foundations of Finance (Fall 2025)
Sesión: 5
---
# Sesión 5 – Resumen esquemático

**Tema central:** Aplicaciones prácticas del _time value of money_ + uso de Excel (ejercicios prácticos), preparación para portfolio theory.

---

## 0) Mensaje general

- La sesión es muy práctica: **resolver ejercicios paso a paso** para dominar PV / FV, anualidades y series de pagos.
    
- **Excel** es herramienta clave: mejor calcular una vez por fórmulas y comprobar por una segunda vía (dos métodos) para verificar resultados.
    
- Recomendación repetida: **hacer muchos ejercicios** (Problem Set 1 / soluciones ya subidas).
    

---

## 1) Fórmulas esenciales (recordatorio)

- **FV (single payment):** FV=PV (1+r)tFV = PV\,(1+r)^t
    
- **PV (single payment):** PV=FV(1+r)tPV = \dfrac{FV}{(1+r)^t}
    
- **EAR (cuando r periódica):** EAR=(1+rper)m−1EAR=(1+r_{per})^{m}-1 (m = nº periodos/año)
    
- **HPR (holding-period return):** HPR=FVPV−1HPR=\dfrac{FV}{PV}-1
    

---

## 2) Ejercicios clave vistos y lecciones prácticas

1. **De periodicidad a anual (compounding):**
    
    - Ej.: 2% por trimestre ⇒ EAR = (1+0.02)4−1≈8.24%(1+0.02)^4 - 1 \approx 8.24\%.
        
    - Aplicación: si necesitas $1,000,000 en 4 años, calculas PV=1,000,000(1+EAR)4PV=\dfrac{1{,}000{,}000}{(1+EAR)^4} o directamente con r trimestral y t en trimestres.
        
2. **Pagos periódicos (annuity) — pago inmediato (first payment at t=0):**
    
    - Si pagas 10.000 cada trimestre durante 16 trimestres **empezando hoy**, hay que tener cuidado: el primer pago no se descuenta.
        
    - Estrategia práctica:
        
        - (a) calcular PV de la serie que empieza en t=1 (perpetuity/annuity formula) y sumar el pago de t=0; o
            
        - (b) calcular FV sumando cada pago capitalizado el tiempo correspondiente (Excel: arrastrar / sumproduct).
            
    - Importante: entender **qué periodo** usa la tasa (trimestral vs anual).
        
3. **Chequeos con dos métodos:**
    
    - Siempre verificar con (i) fórmula algebraica y (ii) sumatorio/Excel. Si coinciden, resultado correcto.
        
4. **Zero-coupon & venta anticipada:**
    
    - Ej.: comprar bono cero por 435$ que paga 1.000$ en 10 años → YTM ≈ 8.68%.
        
    - Si vendes antes, HPR depende del **precio de mercado** en el momento de venta (precio ↔ tipos inversa).
        
    - Repetición clave: **si suben tipos → bajan precios de bonos; si bajan tipos → suben precios**.
        

---

## 3) Excel — buenas prácticas y alertas

- Orden y limpieza: nombra celdas, usa referencias ($), separa inputs / cálculos / outputs.
    
- Para series de pagos, puedes (i) usar fórmulas financieras (PV, FV, PMT) o (ii) calcular con sumproduct/columna de flujos y funciones financieras.
    
- _Cuidado con NPV en Excel:_ la función `NPV(rate, values...)` asume que el primer flujo está en t=1. Si tienes flujo en t=0, súmalo manualmente antes/ después según convenga.
    
- Verifica resultados con dos métodos (por ejemplo: fórmula matemática + función Excel).
    

---

## 4) Conceptos puente hacia _portfolio theory_ (fotograma final)

- La clase introduce el **cambio de foco**: de TVM a medidas de retorno y riesgo de activos.
    
- Para una acción / serie de escenarios:
    
    - **Return esperado** = suma(probabilidad × retorno en cada escenario).
        
    - **Varianza** = esperanza de (retorno − media)².
        
    - **Desviación estándar** = √varianza (unidad: %).
        
    - **Covarianza / correlación** entre dos activos → esencial para diversificación.
        
        - Covarianza positiva: activos se mueven juntos.
            
        - Correlación = cov /(σ₁·σ₂) — escala de −1 a +1; más interpretable que la covarianza cruda.
            
- Ejemplo conceptual mostrado: arithmetic vs geometric mean → **geom. mean** refleja el rendimiento compuesto real (importante: aritmética puede sobreestimar en escenarios volátiles).
    

---

## 5) Errores frecuentes y advertencias

- Aplicar fórmulas sin pensar en **t=0 vs t=1** (pagos inmediatos).
    
- Confundir APR con EAR (no tener en cuenta capitalización).
    
- Usar `NPV` en Excel sin ajustar por el flujo en t=0.
    
- Comparar HPR simple de periodos distintos sin anualizar → engaños visuales.
    

---

## 6) Tareas / recomendaciones para el alumno

- Repasar **Problem Set 1** y comprobar soluciones subidas en Brightspace.
    
- Practicar: (a) PV/FV con r periódica; (b) anualidades con pago inmediato; (c) venta anticipada de bonos y cálculo de HPR; (d) replicar ejercicios por dos métodos (fórmulas y Excel).
    
- Prepararse para la siguiente clase: **portfolio theory** (esperanza, varianza, covarianza, correlación).
    

---

¿Quieres que transforme este resumen a **una sola página PDF** y también te lo entregue en **.md** (lista/estructura idéntica)? Te lo preparo ahora mismo en el formato que prefieras.



# Transcripción
  
OK, I was gonna say.  
I.  
Are you going to be talking about foreign set? Yes. Do you want me to go through any specific exercise?  
I can imagine which one could be all and then we will focus. Let me go with you.  
I have to save you in the WhatsApp group. Also you can find it in Bright Space. I have I have served you the solutions.  
Before the class, I have uploaded also to GreatSpace.  
Let me go through.  
First exercise. First exercise is so simple. I want because I like traditions. I like to follow traditions.  
I want to write the present value formula on the backward because all days I have written at the end everything has to do with that. Yes, this exercise. Yes. Hey, Carol. Sorry.  
Look.  
I'm proud of.  
Oh,  
Is that zero? I mean, this is about multiple calls.  
And this is a 0 coupon, 0 coupon, a bowl with two coupons. This is a coupon and this is another coupon. A bowl is value 102 coupons, 5 and 5.  
I feel like having super tech. So sorry, I get them. I like it. The first one has to do with zero common and it's just a great price of zero common. All of you should know how to do that without any problem. Make sense.  
Now A.  
I think years you know who come bond with a face amount of 1000.  
What is the price? What is the annual holding period return if you hold the bond in maturity?  
What will be? What the price of the bone? OK, this is a little bit more difficult. The temperature of the water increases, but I think that if you don't know how to do it, just send me an e-mail. We can go through office hours, yes.  
But I think that this one is Oh yes, and the heads, yes, this is the one you want to.  
In the meantime, you are not going to find difficulties.  
We.  
The complexity. This exercise is more complex than normal because I want you to exercise. This is what I mean, but let me start. What is suppose a headstone hurts super quarter every quarter?  
2% per quarter, what is effective annual return on an investment in this whole?  
2% quarter effective and already this one is this first one.  
I am getting this in a quarter basis, yes.  
I get this in a water.  
How many quarters there are within a year? Four. So compounding price to the 4 -, 1. Yes, this is the effective annual rate. Make sense? This one is simple.  
If you need $1 million in four years, how much do you have to invest in the phone today?  
OK, at the end, everything has to do with this formula somehow, yes.  
It.  
If you need $1 million in four years, how much do you have to invest in the phone today?  
If I need 1,000,000 in four years, I am thinking that everything will be compound, will be compounding, yes, so at the end is.  
Let me move here to the Excel quickly 1 + 2.  
1 + 2% rise to the 4th my oh they are laughing. They are laughing because all days it happened the same. This is a Spanish skateboard, but here is.  
OK, let me yes, 1 + 2% price today.  
4 -, 1. This is defective final rate.  
Nap.  
8.24% in a year basis.  
I am asked to. I need 1,000,000 in four years. Yes, the name of the game in this exercise is.  
1 + 2% or 1 + 8 point.  
24%, you see what I mean?  
And the point is.  
Which one do you want me to choose?  
Great. Um.  
50 to 8% Perfect. Right too.  
Four years. This is in a yearly basis, so rise to the form, but I can choose this one row.  
Yes, four times four quarters. At the end I was to the same way. Makes sense. This is warming up. This is just working with present value formula, one important thing.  
Me doing this makes any sense, does not makes any sense. The point is in you doing this makes sense.  
It will come back. I have.  
I have more. If you need 1,000,000, if you invest 1,000,000 today, how much money will you have in four years? This is playing with present value and future value. This is not complicated. Let me move to the more completely. Do you invest 10,000 every quarter for 16 quarters?  
Start immediately. I thank you.  
How much will you have at the end at the end of four years? Yes.  
Absolutely important. Reading, growing and thinking.  
I mean of this is her in this order.  
Reading to invest 10,000 every quarter or 16 quarters.  
Rowing.  
15 and 16, yes.  
10,000 every quarter, but careful starting immediately. So first investment happens here.  
10,000, yes, and then.  
10,000, 10,000, 10,000.  
At last investment.  
Happens here.  
Make sense?  
What is the point here?  
We said we are going to do it. I have and then later we take.  
But the point here is understanding what we are doing. By hand, I am going to use the annuity formula.  
Do you remember the unity formula? Unity formula is in the technique. You are allowed to have in the midterm a cheat sheet. Yes, you don't need to memorize formulas, but I recommend you not to memorize. I recommend you to understand.  
The annuity formula is present value of all these payments.  
Please the difference between.  
To perpetuities right this out to because which rate I'm going to use.  
2% because I am working in a in a quarter basis. Make sense, OK.  
The over way price, yes.  
Thanks.  
The difference between 2 perpetuities 1 minus another perpetuity that will start.  
That will start in P, yes.  
Make sense?  
This is the formula. What does this formula mean? I'm calculating present value of a perpetuity. No when the perpetuity when the perpetuity finished up.  
When the perpet will be minister.  
I want to apply this formula when this perpetuity should start.  
Careful.  
0123 and P This formula is for a perfectity like this.  
But in that exercise you are told that first payment is going to be made in year 0.  
So careful, I know this is statistics at least a 10% of the class. So you are 9, so you can be lucky and none of you could be one of them, but at least a 10% are formula addicts.  
You need formulas in order to just apply the formula and without thinking. Yes, we you understand what I'm saying, no?  
If you are a formula be careful before apply applying the formula, stop and think.  
What is present value of 10,000 euros being paid today?  
10,000 So how can you apply this formula year 16 now look year 15 and what is going to happen with this one? This is being paid today.  
You see the point? Let me change the color.  
A.  
So I'm going to apply the formula, but thinking yes.  
Uh.  
Present value is.  
I'm going to play the formula 10,000.  
Over 2%.  
Times 1 minus.  
1 + 2%.  
Rise 215, No, all of you see.  
No, no. I am calculating present value of 123415 minutes.  
Why I'm not counting people? Because it's today, because these 10,000 are already made popular.  
So this is rice to the 15.  
But there is something missing there.  
First payment until.  
Plus.  
Yes.  
What is this present value? What they were asking?  
Yeah.  
How much will you have at the end of whole year? The year once I know this, what I should do?  
What is this? Listen value. How much all these payments will worth pay at once? I have base value when I calculate.  
Yes, because what I'm doing is at the end, what I'm doing is Sammy.  
10,000 + 10,000 + 10,000 + 10,000 + 10,000 no with that formula with annuity formula.  
I am signing this plus this plus this plus this and I'm missing this one. I'm missing the payment that is being made today. Make sense.  
Let me let me go do the same thing. Let me first thing, let me calculate this percent value.  
I'm gonna serve this excel once I finish in the in the room.  
2%.  
Thanks 1 -, 1 over.  
1.02.  
Price to the 15.  
Yes.  
Let's see not here 100. Let me see.  
10,000 percent 1 -, 150 thousand. Yes, this is present value.  
Is this correct?  
No.  
I don't know. I don't know what I'm what I really, really recommend you to do. More even if you are doing this kind of exercises, try to get the result through different ways. I'm going to use Excel.  
In order to see.  
And I'm getting nervous because this is not correct.  
OK.  
Composing.  
Here this is last payment.  
The rate is 2%. I've said no. What I'm going to do, I'm just going to calculate present value. This is present value, yes.  
I'm going to calculate present value 10,000 / 1 plus.  
2%. Let me fix this one.  
2% Let me fix. Let me fix function before this one, yes.  
Rise to the, rise to zero.  
Rough, rough this one.  
And calculating present value of 10,000 being paid today.  
10,010 thousand today are 10,000 rise to 0 is 1.  
The most, the bigger, the biggest difficulties.  
Are in the most simple things and it has to do with understanding. Yes, I'm calculating present value of all these future payments. What I'm doing, I am applying that formula present value formula. Yes, I'm applying this present value formula and what I'm going to do now.  
Yes, some. And now I'm nervous because, oh, sorry, but once you get the result, it makes me feel happy.  
You see that this number match with this number.  
This number is the same, no? So through two different ways I have get same result. Now what I'm asked, I'm asked to calculate future value, yes.  
Demi.  
This is present value.  
There are a lot of forms personally.  
I only know this one. So in order to make things easier, what I normally do is calculate the present value and from present value then I go backwards. But with Excel I'm going to calculate future value in a different way. What I want you to see don't.  
Yes, get high on focus. Try to.  
Go through different ways. Make sense, yeah.  
This is present value. Let me calculate.  
How much this will be as future value and is apply future value formula. Future value is present value times 1 plus. Let me use 2% and rise to the along 16 that is 4 sorry 16 no.  
I mean, I'm doing something wrong. I have done something wrong, I think. That's right. Perfect. And why are you going to do this?  
Let me do this in to a different way also.  
As the way the the bank will give us the money, yes, the idea is I'm going to invest today 10,000, yes.  
These 10,000 are going to be in the headphone for for how long?  
16 quarters, no 1 + 2%.  
Rise today. This is going to be for 16 quarters, yes. Next payment is going to be for 15, next one for 14.  
Let me yes, right here, 616.  
Minus in this case zero and as I drag this it will be 151413. All of you are with me.  
And these last 10,000 are going to be in the bank for just one quarter. You see that the formula is correct. No what I'm doing constantly taking, taking, taking, taking, taking, I am taking it.  
Does this make sense? Yes, 10,000 is going to be for 1/4 at 2%. So this mean 200 and let me drag this control.  
And so and let me make the sum of this.  
And be Sammis.  
Oh, I strongly recommend you.  
Happiness.  
Happiness.  
I'm happy. I have gone through one way, then I have gone through another one. It match and what I'm feeling.  
Absolutely happy. I mean, it's it. That's a little, but now I'm happy. Make sense.  
Several things. I have used the formula and I have used Excel in order to go one way to one way and to another one. Excels.  
Try to do by yourself the rest of the exercises of that one or tell me, ask me.  
And.  
You are not gonna find something like this in the middle.  
Why? Because this is too much work. Why I'm doing this now? Because I want you to understand how time value of money works, but you are going to find in the midterm if you fully understand all ideas.  
You're not going to have any problem in the meantime while you have been working on all these exercises. But what is the problem some of you could have now that you are understanding what I'm saying without working and this means that you are not properly.  
Taking all these what you should do. Exercise, exercise and exercise, yes.  
But this is.  
If you work, if you try to do this exercise, if you try to solve all these exercises by one hand, by the other one, you will be absolutely prepared for the midterm. In the midterm you are going to find simple questions.  
One question that I have made you that for me it would be a perfect question for the midterm. Not as easy, but how much is 10,000? What is the present value of 10,000 being paid today?  
10,000 or the question that I have to ask you what is the difference between quarter and yearly or hope to calculate this in a in a four year basis rising it to the 60s. This way of thinking is what I want you to to develop.  
OK, let me come here. Did you understand this?  
This the rest of the exercises is just playing with this idea. Let me do you mind to take a picture of this one and say it in the water group because I want to erase the thanks a lot.  
Jeffrey, where is? Where is Ethan?  
But he was here, no? Oh, today he. Oh, no, I am misunderstanding. But he was not in Iceland. No, he was not in Iceland. He was.  
Yeah, I just like back to home.  
OK, no, sorry. What I'm gonna do is.  
Oh, yes, sorry.  
I have there this with the glass.  
Sorry, I didn't know if it was one from too late. I have not done anything. No, I I thought it was so one from too late and he has sent me some pictures and it was lovely. Do you know where I got this?  
There was a Mukano in England that closed all the bad weather. Today is not the day for the Mukano. Sorry.  
Hey.  
You OK? Thank you.  
Perfect. Hey and.  
OK, I'm here.  
Hack. Hack is correct. No. Hack. Yeah, but I mean, this is correct, no? Yeah.  
And yeah, OK, let me phone.  
Go through this one, yes, and think about this one. Like if I have never gone, I have never stepped on a gym, but I don't know if in the gym you do you, you repeat hard things. This is like this kind of things, yes, for me.  
I want to go through.  
2.  
This one, this one has to do with Excel. I mean answering to your question, Rob, you are not going to find something like this that has to be done with Excel, but this one.  
And this one helps me explain two things and I'm going to go quickly through through them, yes, and this will match with one of the things we are going to see in today's class.  
Have you had any difficulties with this one? No.  
No.  
And you do you know how to calculate the your mean with excel?  
And if you use the function, just using the function, you are not going to get the correct result. Let me go through this. This is.  
Exercise three. No, this is the three. Exercise three when using Excel.  
I am doing these excels in order to share with you. You should be order, order, order.  
Or the in Spanish. Oh, Perla. Oh, Perla is not here. I'm missing people. Who?  
Oh, OK, being tidy, tidy. Do things in an ordered way. Why? Because probably someone could use your excel in order to work. Make things simple to.  
OK, exercise. I don't know the name. Exercise 5, Exercise 5.  
OK, I'm gonna go. This exercise is important for me 2020.  
2020, 2021.  
That's it, yes.  
Last payment happened last year and 170 seventy 90100.  
I did.  
100 and this is 234523.  
Or five. Make sense? Let me do all this exercise step by step. First idea, what are the annual holding period returns of the stock? What are the annual? So, so, so simple.  
Future value over present value -1 the HPR formula, Yep.  
And me for this first year is there I have a computer present value over sorry future value over present value.  
Please, please show value over present value minus what? Yes.  
9 News 1.  
I have not to start with the class today. These are the slides for today's class and let me calculate this regarding this.  
What are these? The annual annual returns?  
First year, second, third and 4th. What I'm going to be asked now, what is the arithmetic average and what is the geometric average? Yes.  
Why I am sharing now the slides from today class? Because one of the things, probably the most difficult things regarding concept is understanding what I'm going to explain now the difference between the difference between the arithmetic and the geometric average, yes.  
How is an arithmetic average?  
Is the sum of this over 4, isn't it?  
What I strongly recommend you try to get all solutions at least by two ways. In Excel you can do it also. I have take, I have some over 4 and I'm going to use the average formula. Yes, average.  
Of this.  
Is the same number.  
Is the same number copy format paste it and yes, Yep.  
This is the.  
Average and let me calculate.  
The geometric coverage, Yep.  
One plus the return I'm looking for.  
Rise to the 4th.  
Because these are for four years, yes.  
This is the average, the one I'm looking for, one plus the return I'm looking for, price to the four to big one.  
Oh.  
This is the average return. This is the one that I'm looking for, yes.  
And this should be equal to 1 plus R11 plus R21 plus R3 and one plus R4.  
First time this would look complicated, but trust me, what we are doing is just summing, but summing in a multiplication way.  
I am 1234 times.  
And because I have not, I have raised it to the whole. I'm not raised, I am just multiplying. Are you following me?  
Then I'm going to do this right to 1/4, yes.  
So I can take this out.  
And 1/4 what is that?  
The formula of the geometric average. Yes, the formula of the geomin. Let me go quick.  
I need one plus one plus no. So let me use.  
One plus this one tell me.  
These are not right once. No, you are right. No, let me.  
You are absolutely right.  
I I I used to do these things in order to see if you are attending or not.  
And and Leah was attending.  
Future value over present value, yes.  
And I have calculate the average, nothing change. I have sum all over 4 and what I'm going to do is this number is 1 + -28.  
Let me move this.  
Copy paste.  
How do you say in English?  
Be organized. Be organized. When working with Excel, you should be organized. I have one lack in my hand.  
I have add I am doing the average one plus one plus one plus and one plus and this is what I have just calculated and what I'm going to do now is.  
Three, I'm gonna multiply.  
These thanks, these thanks, these.  
Times this. Also there is a formula in Excel that is the product. You can do this directly with one formula like that is like summing. But I don't want to do this in that way because I want you to see what we are doing. Makes sense what I'm doing there 1 + 1 + 1 plus all.  
Oh, and this is I don't like that number this way and just copy and paste this format.  
And what I'm going to do is this number is not what I'm going to do in order to calculate the average is to this. Sorry here.  
One plus third this that number is this one. Yes, all of you are with me. That number is this one and I'm going to rise this to 1/4.  
Rise to 1/4 -, 1 body.  
And what is this there? You mean a geometric average?  
Yes.  
Make sense?  
And now I'm gonna, I want to calculate. Let me put this one in red because this interest, this is interesting for me. You can see the blackboard, the screen if I put it like this, perfect.  
I'm gonna calculate. I'm gonna use the Yeoming.  
Yummy.  
If I calculate the you mean, do you remember that I did the average of that if I do this in the same way?  
I don't get anything.  
What I should do?  
I should calculate the numin not of these ones. I should calculate the numin of one plus.  
If I calculate that you mean.  
You mean?  
Of these ones, look what I'm going to do, what I'm going to get.  
I'm getting the correct number. There is one more thing I should do. I got one plus the number I'm looking for. Make sense, yes.  
Hey.  
Let me do this completely. That is 91 again. Sorry.  
Sorry, sorry.  
For it, let me continue a.  
I'm writing B. What is the internal rate of return on an investment?  
Have you done this and the other? If you have done it, I'm going to jump over. Yes, I want yes to see.  
That's which one so quick.  
Because this is simple, but I want to show you one trick, not trick 11 point.  
Exercises, yes, and 01234.  
01234 yes.  
And.  
-100 zero 4040 -, 100 zero 404040, yes.  
What is the internal rate of return of district?  
People working Ayana of this. What does this mean?  
This means that this investment is equivalent to a 6.31% investment or this investment is a 6.13. The return of this investment is that one, yes, but I don't care about this point. I care about next one.  
Where is?  
10% value at that by using a discount of 5%, yes, the discounting rate is 5%.  
I'm going to use net present value, yes, at which rate 5%.  
Of which values of all these things? No, don't you agree with me?  
And net present value is 3.56.  
Careful with Excel and with formulas  
I always recommend you try to do things by with two different methods, two different approach. I'm going to calculate net present value in the old way, yes.  
Let me take this 140 over 1 plus.  
5% let me fix it.  
Rice to the two, no.  
How much is present value of 100 today? 100 today, 100 euros, no.  
And present value is the sum, no?  
3.74 is the correct number.  
What I'm doing incorrect here? What? What mistake I have made?  
One mistake I have made anyone.  
3.  
OK.  
No one.  
I'm calculating it present value.  
Is same thing that I have explained you at the beginning with it.  
We can meet in formula. Do you remember that instead of being 16 payments, I like this space.  
But I like that face instead of. Do you remember that instead of being 60 payments, there were just 50 + 1?  
You are making it here.  
What is the present value of 100 today 100 and if you put this?  
It's really thinking that.  
100 will happen within a year. So what should we do? A gallon is 100 and 10 -, 100. You see the point what I want careful with formulas. Careful with using formulas.  
Without thinking.  
It looks more like what I was looking for. Sorry, plus 100 -, 100. Yes, and now it is OK, it is correct.  
If you just apply formulas, carbage, carbage, carbage, to produce carbage into a formula, what are you going to get? Carbage.  
Careful with that. Make sense.  
I have uploaded the solutions. I have shared with you also the solutions of problem set one. Now we are going to start with portfolio theory. If you forget about these exercises till the midterm.  
You will not remember all things we have done today, but I strongly recommend you for Wednesday. Go through these exercises again and I can repeat all things. I don't care to repeat. I have office hours also.  
At the point is not in me repeating. Thank you. The point is in you working going to this makes sense.  
OK, let me start with today's class a little bit. I think that today is the record.  
Today is the day that I am starting.  
Now.  
Any questions?  
That's on page. That's on page.  
Mm.  
OK, who is? Oh, Roy Smith. Whatever.  
OK.  
What is important from today's class?  
Time value of money. We are going to start with portfolio theory, but what I'm going to show you is a preparation for next class.  
Giving one stock, we can calculate the return, the variance, the return and the variance. And if we know the variance, the square root of the variance is deviation. All of you are with me.  
I have one stock and I can I can calculate it's return and it's deviation.  
If I have, if I would have just one stock, my life would be easy in order to have a portfolio, but I will need at least.  
Jake, I have read. I have read your lips at least two stocks and if I have two stocks.  
I have variance and deviation. On the other hand, I have variance and deviation and what do I have?  
What else do I have if I have two stocks?  
Variance deviation.  
Let me need the a bit. Let me need the a bit. I have one stop with the variance, yes.  
I didn't understand you. I I am myself moving. Yes, I have my back. You are moving yourself and for example now he's up and at the same time you and me move together.  
You were absolutely rightly. I want you to talk about this. What is Provariance?  
Oh, two weeks.  
Move together. There will be. It could be positive covariance or negative covariance. We are going to dedicate covariance next.  
And regarding, oh, I'm sorry, Carol is here. And when is I have said no, I don't know if we know, but this is one of the most important things they should go with.  
And has to do with finance and has to do with covariance. The more invest, the better, the more people and who we are, the better.  
If we are all the same, this will mean systematic risk in all of us and also will mean more bordon, bordon, the more the definite, yeah.  
Makes sense.  
OK, let's. If you have understood this, we can go. But let me go through the slides. I have one. I'm going to go quick, quick. Yes, let me move here.  
Here and you will you have the slides and you can go through these exercises. Yes, the expected return we are not going to follow.  
In all exercises we are going to see from now in the midterm, expected return will be given. I'm going to calculate it, but just because I have 4 scenarios.  
I have 4 scenarios, 25 percent, 25 percent, 50% and 25%. What is?  
The sum of all these four scenarios 101, yes, and the return is -6%. The return is 10% and the return is 22%. Yes, what I'm going to calculate, I'm going to calculate the expected return.  
How do I calculate the expected return?  
I'm multiplying its return times the probability of each scenario.  
Let's do it. Expect the return is this times this. Yes, let me drag it.  
And let me jump this 9%, yes. What is this? The expected return of one stock, 9% you are, you have seen the slides, all the numbers. And again, please go through these numbers by yourself.  
Variance and standard deviation. Oh, there are. I'm running whatever. Variance. How do I calculate the variance? What is the variance? How far I am from the average? Yes, if I sum more distances, negative distances are going to go out with positive.  
Distances. So I should rise to the square the distance.  
Are you following me? OK, so let me do this quickly. This is the average is 9%. No, the average 6%, nine 9%.  
Rise to the square.  
And.  
And these times.  
Please make sense.  
And I should fix.  
Please.  
Function. I should fix this, yes.  
And now let me copy paste this.  
And I, Sandy.  
And I got.  
0.099 I've got the variance. What about the units of the variance? The units of the variance are raised to the square. I don't like variances because I don't understand their units. I would like to make the square root and take the deviation.  
I'm SQRT of this and what is this? The deviation? What are the units of this deviation percent?  
Tell me.  
10%, yes. What does this deviation means?  
What does this deviation mean?  
Anyone do you remember this is not going to be as raw?  
This is not going to be asked in. This is not going to be asked in the winter because it has to do with the statistics. Do you know the average? What the deviation tells me?  
Within one standard deviation, you can find 66% of the population. We think this is 1 standard 2 standard deviation.  
Yes.  
Yes, true standard. So this is 9%. This is 90%. Yes, true standardization you can find.  
95% of the population, 3 standard deviation you can find 99% make sense.  
Let me come here standard deviation and this is what I have just told you 2/3 of chance that returns will be Yep and 95%.  
OK, covariance. What is covariance? Covariance tells me how one stop will move considering the other how one important word correlated.  
One stock is with the other one. One thing, one thing is the covariance and another thing is the correlation coefficient. Let's let's see what do I need in order to calculate the covariance?  
What do I need? Another stock?  
Another stock covariance. Let us calculate all the Yes, we have.  
We have Walmart and we have Kmart, yes.  
This is Walmart and let me.  
Oh, sorry, let me copy this.  
Yes.  
And let me do so quickly change Kmart -1010 and 34.  
-1010 and 3434.  
Yes, and now.  
Let me see if this is correct. This is correct. Let me see if this is correct. This is correct. I'm here. Oh, oh, I don't know what I have touched. Sorry, come through.  
I'm let me. Oh, I'm running out of time. I'm getting nervous.  
Sorry, don't get nervous and who thinks.  
Yeah.  
What I have done exactly the same that I have done for Walmart for Kmart. Make sense.  
And let me see.  
They mark, they mark 15.59. Yes. And now what I'm going to do, I'm going to calculate covariance. Do you remember variance?  
Minus the the number, minus the average rise to the square.  
The covariance. In order to calculate the covariance, what are we going to do?  
So simple.  
Probability of the scenario, yes, times. Probability of the scenario times.  
6% minus.  
The evidence, yes.  
Thanks.  
Probability. Uh, no, probability of the scenario. No, I have already done times. Sorry.  
4.  
And let me fix it. You see what I'm doing? What I'm doing? Thank you. The number minus the average times the number minus the average, yes.  
OK.  
OK.  
And now...  
I got this.  
Everything is correct, yes, and.  
I found this.  
And I get the covariance. That's this number tells me something.  
Does this number tells me something?  
It's positive. It positive means that they move in the same way. If this number would be negative, this means that once go up and the other one would go down. Make sense at this number by itself, the covariance, the great covariance because.  
Gobadians.  
Covariance don't tell me, doesn't tell me anything by itself. What will tell me something? Look at the at the back. Please look here.  
The correlation coefficient. How do I calculate the correlation coefficient? By doing covariance over each standard deviation. Let's me take covariance over each standard deviation. This one's the first.  
And this was the second makes sense.  
And and.  
Does this number tells me anything? 98.6% correlation coefficient is a number that could range from 100 to -100. If it is so close to 100 means that Walmart and Walmart are so, so, so, so correlated.  
OK.  
The variation is the square root of variance, variance, covariances are always. Variances are positive. Variances are positive. Deviations are positive. So the same sign.  
Same sign the covariance have going to be hold by the correlation coefficient. So if you see a positive covariance, correlation coefficient is going to be positive if you see a negative.  
Covariance correlation coefficient is going to be negative.  
But if you want to fully understand something, don't just start with the go to correlation.  
Makes sense. One thing else. Sorry. I I oh, so I sorry. I'm going to steal you. Do you lend me 3 minutes or five? No. You have class after this one? No. But I'm going to go so fast. Yes.  
Hey.  
Sorry, correlation understood.  
And this is what we have calculate. We will go back to this slide. Not only we will go back to this, let me.  
This is like this. I have to make a picture and what I'm going to do with this picture.  
Oh, yes. Thanks.  
I we will come back to this slide. This slide is so, so important, yes, but I don't care about this slide now.  
Let me yeah, we only have the past in order to know about the future. We don't have a crystal ball. We have just the past, but whatever with this is like I am moving here. I want you to see this example.  
We will go to the back.  
Sorry.  
Uh, he's not moving.  
I wanna cry. Do you have a slide?  
One of I have three more than all all of them has moved and the computer wants to finish also.  
Now let me just show you this example, yes.  
How are we? Please, I want your attention quickly. How are we going to calculate the expected returns? Do you remember the exercise we have done with the dividends?  
We will calculate the average, but also the arithmetic average. Make sense. This is what we have done in the in previous exercise in problem set one, the one with the dividend. Do you remember? And I want you to see this example. This is the geometric average. This is what we have already done.  
Yes. And I want you to see this example because he's so powerful and we are done. Yes.  
Suppose for an emerging market, for an emerging markets phone, the return in one year is 100 and in the in the second year is 50%, yes.  
Let me move here.  
012 I am told that the return is 100%, yes.  
I'm 50%, yes, I'm going to calculate the average.  
The average, yes. What is the average return 100? Oh, sorry, and -50%, yes.  
-50%, yes. I'm going to calculate the average, yes.  
Oh, and.  
100 + 50.  
Over 2. Yes. What is the average at 25%? If you invest in this phone, you are going to get that 25%. Are you following me?  
If you invest in this phone, you are going to get a 25% return. Do you understand what I'm saying?  
Let me calculate the. Let me calculate the arithmetic.  
I'm dyslexical, the geometric. Oh, I'm let me calculate the geometric.  
The geometric is SQRT the square root. Yes, rise to 1/2 of.  
Off.  
1 + 100 times one plus this return, yes.  
And this -1, this is the geometric average, yes.  
Before looking at the result, if you invest in this phone, you are going to get a 25% return. Yes, Nicolas.  
OK, let me just press this.  
Can you make me be 0%?  
Common sense. Air food with numbers. We are going so fast. There are times that much important to stop and think what we are doing.  
Let me stop. I'm gonna invest.  
Do you see that I have got a 25% by doing the average and by doing the geometric I have got a 0%?  
Let me do big numbers 1000. Yes, I invest $1000.  
How much I'm going to go? I'm going to get in one year, 1000 * 1 + 100%. No, I'm going to double my money.  
That is 2000.  
Make sense?  
And after the second year, how much I'm gonna get 2000 times?  
One plus.  
-50% so.  
I'm gonna lose.  
Half that half is 1000.  
OK.  
What is my HPR? You calculate HPR future value over present value is 1 -, 1 zero percent.  
Careful with the arithmetic average. Careful with the arithmetic average, yes.  
Arithmetic average. Careful with the average. Next Wednesday we have class before power speech. We will talk a little bit more about power speech and we will talk about monetary policy.  
For today's class. Today's class is important because we have made the transition from time value of money to portfolio theory. We are not going to talk any more about time value of money until before the meeter. I'm going to give you 2 sample meeters.  
And permission one and two and they will you won't see it. But please go through problem set one, go through problem set one and also review what we have done today regarding portfolio theory. Today we have seen a lot.  
Of information. Do you remember about how to boil a clock? Sorry for this example. Don't take me to a confer. How to boil a clock. The water goes up slowly. Now they feel they are understanding things, but if they get sleep, probably the water will be boiling and it will be too late.  
Yes, I owe you. I I think I don't like 7 minutes. I owe you 7 minutes. Sorry for that. Yes, thanks to you. And I'm going to share the excel with you.  
I won't come here next Monday. I'll be here this week. Just next Monday. Yeah, portfolio. Next. Next class. Next class. This Wednesday class is important. I'll be here, yes.  
And the other one also, but ask me for office hours and Wednesday afternoon I I I need to go to the radio in order to talk about power speech. But we can make a room or office hours before Wednesday. OK, that sounds good. Thank you. Welcome.  
Thanks. You were supposed to submit the yes. OK, I brought it in person. Is it OK if I turn in? No problem. And if you see you, you can upload it and it will count as if you have deliver it on time. OK, perfect. Don't worry. Thank you. I just care about.  
I mean, you can upload a picture. You can upload now for. I care about you working on it. OK. Thank you. Welcome.  
I'm done. Yes, ask Leah. Leah has sent me an e-mail asking me to and I have to those files and I'm going to share it with you without any problem. You like it? Yeah, I use it too.  
Oh, you have. Yeah, I am.  
It's incredible. Yeah, not only that.  
I all my linked in post. I have one script that take them into Obsidia, but also I'm doing a diary, weekly diary. I just say this I have class and I take all my logs from the class into you are using Obsidia.  
Well, how how are you feeling? How long have you been using it? Like a year. Yeah, it's a second brain. Yeah, it's great. It's it's. I mean, GPT itself is like a motto, but.  
Yeah, I can remember anything that I've written down so I can search and it's absolutely important. Once we finish one class, they got a record. I have. I'm going to send me a WhatsApp and please send me all the logs you have from NYU.  
I have. I have to start recording classes discourse, but I'm going to send you all the MD files and and you will just put it. You will play you. I mean, it's it's amazing. It's so happy, so happy because.  
There are so many things going on and and I don't know. I mean, we will talk a lot about scripts, about obsidian, about recording, about transcripts, because it's amazing.
