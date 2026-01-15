---
Título: Foundations of Finance – Session 3 - Time value of money
Fecha: 2025-09-08
Curso: Foundations of Finance (Fall 2025)
Sesión: 3
---
# Sesión 3 — Resumen esquemático

## 0) Logística y formato
- Se compartirá el **archivo Excel** usado en clase.
- Recomendación: **practicar** ejercicios desde hoy (aunque algunos conceptos se vean el miércoles).
    
## 1) Núcleo: Time Value of Money (TVM)

**Idea central:** el dinero **tiene valor en el tiempo** (hoy > mañana).

### 1.1. Interés compuesto y valor futuro

- Ejemplo: 100€ al **10% anual** → 1 año: 110; 2 años: 121.
    
- **Fórmula clave (FV):**  
    **FV = PV · (1 + r)^t**
    
    - PV: valor presente
        
    - r: tipo de interés por periodo
        
    - t: nº de periodos
        

### 1.2. Descuento y valor presente

- “¿Cuánto invertir hoy para tener 1.000€ en 1 o 2 años al 5%?”
    
- **Fórmula clave (PV):**  
    **PV = FV / (1 + r)^t**
    

### 1.3. Perpetuidad (pagos iguales para siempre)

- Si deposito PV y retiro cada año C, con rendimiento r: **C = PV·r**
    
- **Fórmula clave:**  
    **PV_perpetuidad = C / r**  
    (p. ej., mantener una tumba: C=100€/año, r=5% → PV=2.000€)
    

### 1.4. Anualidad (pagos iguales por T años)

- Idea: **anualidad = perpetuidad – perpetuidad diferida**
    
- **Fórmula clave (PV de una anualidad, pagos al final de cada periodo):**  
    **PV_anualidad = C · [1 – 1/(1 + r)^T] / r**
    

### 1.5. Tiempo para duplicar (logaritmos)

- Duplicar: PV=1 → FV=2, resolver t:  
    **(1 + r)^t = 2 → t = ln(2) / ln(1 + r)**
    
- Nota: **da igual** la base del logaritmo si se usa la **misma** en numerador y denominador.
    

### 1.6. Observaciones útiles

- **Compounding “mágico”**: pequeñas mejoras sostenidas → grandes efectos.
    
- **Logaritmos**: “amigos” para linealizar exponentes y simplificar cálculos/ gráficas.
    

---

## 2) Aplicaciones en Excel (y mentalidad de práctica)

- Usar **fijación con $** en referencias para copiar fórmulas sin cambiar parámetros.
    
- Practicar hasta que la mecánica sea automática (memoria procedimental).
    

---

## 3) Bonos: 0-cupón, cupones y “stripping”

### 3.1. Bono cero cupón

- Paga **solo el principal al vencimiento**.
    
- **Precio hoy:** **P = FV / (1 + r)^T**
    
    - Ej.: FV=100, r=5%, T=10 → P≈61,39.
        

### 3.2. Convergencia a la par

- A medida que **se acorta el vencimiento**, el **precio → valor facial (par)** si el tipo no cambia.
    

### 3.3. Sensibilidad a tipos (relación inversa)

- Si **bajan** tipos (5%→4%), el **precio SUBE**.
    
- Si **suben** tipos, el **precio BAJA**. (Repetido y enfatizado en clase).
    

### 3.4. Strip de cupones

- Un bono con cupones puede “**desensamblarse**” en varios **0-cupón**: cada cupón y el principal se descuentan **por separado**.
    

### 3.5. Precio de bono con cupones (ej. 2 años)

- **Precio = Σ cupones descontados + principal descontado**
    
    - Ej.: Cupón 5% sobre FV=1.000 → pagos: 50 (año 1) y 1.050 (año 2).
        
    - Al 6%:  
        P=50/(1+0,06)1+1050/(1+0,06)2≈981P = 50/(1{+}0{,}06)^1 + 1050/(1{+}0{,}06)^2 \approx 981
        
    - Al 5%: **P = 1.000** (**bono a la par**, cupón=yield).
        

---

## 4) Ejemplos ilustrativos trabajados

- **Manhattan 1626 (24$) a 5%** durante ~399 años:  
    – Simple interés: irrisorio; **compuesto**: crece **enorme**.
    
- **Doble al 5%:** t = ln(2)/ln(1,05).
    
- **Coche que puedes permitirte:** uso de **PV de anualidad** con cuota mensual (C), r mensual y T meses:
    
    PV=C⋅1−1(1+r)Tr PV = C \cdot \frac{1 - \frac{1}{(1+r)^T}}{r}
    
    (Ejemplo numérico: C=632, r=1% mensual, T=48 → ~24.000)
    

---

## 5) Consejos de estudio

- **No memorizar sin entender**: las fórmulas son pocas y derivables.
    
- **Repetición deliberada** (Excel/calculadora) hasta automatizar.
    
- Empezar **Problem Set 1** ya; traer dudas a clase.
    

---

## 6) Ideas clave para llevarse

- **Solo 2 fórmulas generan todo TVM:**
    
    1. **FV = PV(1+r)^t** y su inversa **PV = FV/(1+r)^t**
        
    2. **PV_perpetuidad = C/r** → de aquí sale la **anualidad**
        
- **Bonos:** precio = suma de **flujos descontados**; **precio ↑** cuando **tipo ↓**.
    
- **Compounding** y **logaritmos** son herramientas esenciales.
    
- La **práctica** es el puente entre entender y **resolver rápido**.



# Transcripción
Oh, that's cool.  
Do you want to say?  
It's here.  
In.  
Even.  
I don't know yet, but I will, Jake.  
All weekend.  
I know Ethan and Ethan know about my weekend. Nicolas Perez. Carlos Espanol. Oh, Portuguese. Yeah, this is the third time we repeat the same thing. Yeah, so.  
Our Perla is somewhere, but she will.  
Leah.  
And Jeffrey.  
No.  
OK, let me open the Excel. How? How do you feel, Roe? Better in case, I mean today is not the worst day in order not to come.  
Is I prefer you to come, I'm Perla.  
Today's a nice class. Not bad, but it's not the most important class. There will be classes much, much more important and also there will be. I'm thinking about one in particular one class that if you don't come, nothing bad happen.  
I'm not going to tell you which class is this in advance, but.  
But again, do you remember about the flow, how to boil a flow?  
Today we will start hitting the water, but today you will feel the water absolutely.  
Great. No, you will understand all things. I think you will understand all things and.  
And were you?  
Finance for yes, let me say with you this also.  
Today is the first class where we will work with Excel. At the end of the class I will share with you the Excel file that I will be working with.  
At the end of the class I will share it. Also there is no need in transcripting the class. There is no need because we are going to work with Excel and I will explain you have the slides, but personally I like continue transcripting the class because I want to get used.  
To this way of work makes sense.  
Hey, what else?  
Where is the the they're not simifying.  
OK, so I have here.  
Oh, sorry, no, this is for Anna.  
What did I share with you? It was correct what I say would share with you or not?  
I said Sir.  
No, it was not correct. I have served with you.  
This is for two main students, not yours.  
OK, let me, Sir, did you?  
Enable meeting.  
Mm.  
It's.  
Thanks.  
Oh, glass. Yeah. And I know the last one on the list. Sorry, Jeffrey.  
OK.  
Time value of money. Have you all, all the not all, almost all, all the classes. Oh, great.  
Have several colors. All this is 9.  
I mean, I don't care. I I can give it to NYU, but these ones are too dirty. I'm not use three 10 colours in one moment of the class.  
Finance has to do with.  
Time. What is finance? Do you remember finances to the future? Can we play the future? No. Can we manage an unpredictable future? Yes.  
We're gonna see just right now, but imagine you have 100 euros.  
Play. Yes, you put this 100 euros in the bank at a rate of 10%. How much are you going to have in one year time? 110 you need this for two years.  
After the first year you're going to have 110 and at 10% of 110 is going to be 10 + 111, no. So in two years then you're going to have 121.  
Yes.  
100, 110 and 10 + 121 because of compounding, no.  
And we call 101 plus 10% rise to the second is 121 make sense.  
Let me call this instead of 100. Let me call this present value, yes.  
Instead of 10% one plus the rate are yes.  
Uh.  
Instead of true see.  
And instead of 121, future value, yeah.  
2.  
All of you understand this formula, so I can rewrite this as future value is equal to present value over 1 + r rise to P.  
Make sense?  
Finance.  
Time value of money has to do with just two formulas. This is one. Let me show you the other one. I'm making a big spoiler, yeah.  
I am making a big spoiler.  
Look, mine is much better.  
You see the point? No. You see where I'm trying, where I'm doing my own. Can you see this correctly? OK.  
Second formula easier than that one.  
Easier than than that one. I have 100 euros today, yes.  
I'm going to put this 100 euros in the bank and the bank is going to give me a 5% return, yes.  
What I'm going to do each year, I'm going to take the 5% of 100 here. I'm going to take it and I will run.  
I will extend, yes.  
I can take how much I can take each year. All of you agree with me that each year I can take.  
5555 forever. No, I have 100.  
So I can say that.  
5 It's equal to.  
100 * 5% no.  
Let me call this.  
Because five is constant. Let me call 5, see, yes.  
100 let me call 100 present value.  
And again, 5% with Nicoli, great, yes.  
So what is the second formula? What is it?  
Present value of a perpetuity. Present value of a perpetuity is going to be.  
Deep over up, yes.  
The over up.  
What is this?  
This is insured value of a single payment, yes.  
This is.  
Single payment in B.  
What is this? A lot of payments? Make sense?  
All of you understand this with these two formulas.  
You can deduct all formulas from time value money.  
OK.  
So once I have said this.  
What do you say? In Spanish we say we say talk. I want to see the platform.  
That's the mental illness. Illness you want to see. You don't want to touch lines. You open the door three times. What is it stands for?  
I want to see the black work.  
No, I don't have. I'm sorry for. I'm not joking.  
Whatever. I'm trying not to. OK, Perla.  
Today the class is going to be simple. It's going to be easy, but I'm going to start with Excel, I'm going to start with numbers, and it's an easy way in order to start. I strongly recommend you after this class to start working by yourself the.  
Exercises. Try to do it. You will need information that we will see next day, next Wednesday, but don't get sleep. Yes, what is the value of 1000 invested for one year at an annual rate of?  
5%.  
There is no need to do it, but I'm gonna do it, yes, because.  
This. Uh, yes, no, so happy.  
It is from Spain. Wow, so happy. The first one future value of 1000 is 1000 dot name 1000 times.  
1 + 5% make sense?  
Let me see.  
OK.  
What is this? The principal plus simple interest rate? Instead of taking the money out in one year time, we will wait for two years, yes? Or the opposite? What is yes? How much I will have after two years?  
How much I'm gonna have after two years? After two years, I'm gonna have 1000 times.  
1 + 5%.  
Rise to the second.  
Yes.  
1000, yes.  
I not only have simple interest rate, but also it compounds what I have told you regarding 110 and 121 makes sense.  
Yep.  
I like this one. The Dutch W India Company, these parts Manhatta Island.  
In 1624, in 1626, the fleeting town of Vernor Peter Boat, Manhattan from the NRC 3424. How much this is today at a 5%.  
Interest rate, yes.  
Maybe yes, someone bought.  
This 424.  
Dollars, yes.  
When in year 6026, yes, today we are in year two 2025.  
How long this is?  
Almost 400 years, yeah.  
And the rate is 5%.  
Imagine I'm going to calculate first simple interest rate, yes. So how do you calculate how much this is in simple interest rate by doing?  
By doing 24, yes, plus.  
24 * 5% * 399. All of you understand what I'm doing.  
I'm calculating simple interest rate. How much this would be? 502 dollars. You understand the point if I just calculate.  
Oh, it's small, no?  
For 5%, it's a small 399. That's the principal, yes.  
Yep, but the point is not that not only I'm going to have interest from the principal, also the principal.  
Generates interest that generates interest that generates interest. Make sense. Let's calculate this the proper way that is 24 times.  
1 + 5%.  
Price to 399 make sense.  
How much do you estimate this is going to be?  
Their number, Ethan.  
Oh.  
Thousand and thousand, yes.  
3.  
Is because of compounding.  
How much is 1%?  
How much is 1%? Let me just make two really interesting numbers. Yes, one price to 365. If you do nothing during the whole year, how much are you going to have at the end of the year?  
Nothing same, but if you just do 1% one point.  
Oh, one 1%.  
Each year, you mean a whole year? How much are you gonna have have again?  
37 You understand what I mean?  
Because of compounding a little and then a little, a little, a little will mean a lot.  
Compounding is like magic, Yep.  
But I don't care too much about this. This hard. These are the numbers how this is being constructed. Look here. This is first, first 100 years. Yes, you see this graph.  
But this is the whole chat.  
Can't you see something here? No.  
If I want to have, I don't like this graph because I don't see anything. What you should be thinking about in order to see this graph properly. You should be thinking about logs, logarithms, logarithms, yes.  
If you take logarithms, you will transform this into a line.  
Just to mention that logarithms are our friends. We are not going to work too much with logarithms. We will just talk a little bit of logarithms. But yes, I first talked about logarithms. Logarithms are here to help and logarithms are our friends, yes.  
Logarithms transform exponentials into multiplications and logarithms transform multiplications into sums.  
Doggering is just taking something to the easier level. Make sense?  
OK.  
Now I don't care too much about future value. This is.  
Future value I prefer to talk about.  
Present value of this, yeah, five.  
5 They pass.  
Documents session.  
Three, you know, yes.  
OK, let me talk about at the end. I will share this file, this Excel file with you at at the end 1001 year. How much should I invest today at a 5% rate present value formula? Yep.  
How much should I invest today in order to get 1000 within a year is 1000 / 1 5%?  
952 Yes, this formula should look very familiar. It's that formula. Make sense.  
Now.  
How much should I invest in order to have 1000 in two years?  
Let me guess.  
I'm gonna.  
1000 I'm gonna do the same, but instead of.  
Racing.  
Who the first?  
I'm going to raise it to the second. Make sense? And this would be 907. If I put 907 in the bank at a 5% rate, how much will I have in one year time?  
If I put 907 in the bank at the 5% rate, how much I'm going to have in one year time?  
Anyone?  
Did you understand my question?  
If I put 907.0295 in the bank at the 5% rate, how much money I'm going to have in one year time?  
4.  
Oh.  
I made something incorrect.  
Of five, yes, not 5555%, yes.  
I have 952. Why? Because in one year time it's going to be 952 and in two years time it's going to be 1000. If I go backwards, I'm going to have 952 and then 907 makes sense.  
Yes.  
I am playing first time. This is like mechanography. First time you work with mechanography, you are focusing. Do you all of you drive?  
Did you know when you start driving, when driving, when you start driving, all your attention is focusing on what you are doing once you get used to driving, once you get used to mechanography, once you get used to this.  
You will not need to think. You will be working with time value of money in an automatic way. So what you should do? Exercises, exercises and exercises, yes.  
In I promise that in one more time, if I ask you this question, you will answer me back. Luis, are you stupid?  
That is getting used to this. Make sense. Working, working and playing and playing. Yep.  
1000 OK 907.2.  
Now if you invest 100 and receive 110 in one year, what rate are years?  
I have this formula now what I'm looking for.  
I'm going to do this day long way.  
Make sense?  
Make sense?  
You will you will get so familiarized with this formula that you will not need to write it. But again, I strongly recommend you not to memorize to understand and after 2-3 four times you will not need to memorize that you will.  
You know all this word that is.  
Absolutely, yes. I mean no.  
Normally you are right. Normally you are right, but in this case.  
OK.  
Not always wrong.  
Pressing value feature value.  
I'm on the way. I'm.  
I'm dyslexical, but the problem has not to do with my dyslexic dyslexic. The problem has to do that thinking in terms.  
This is a number higher than one. Yes, it should be a number higher than one. What is bigger, present value or future value?  
If your body is bigger.  
Because of the bonding, yes. No future value, yes.  
5.  
Make sense? And now present value, present value. This is present value of just one only payment and this is present value of a lot of payments.  
Now my life happens.  
There was something I didn't know what was that.  
OK, so.  
In order to have 100 10 within a year.  
great I have 100 within a year  
Today in one year time, today I have 100 and the 10, yes. What is the rate? The rate is future value over present value -1, yes.  
Aliyah, normally I do these kind of things. I mean it in order to see if your attention is.  
No, I always like work. It's something that makes me happy knowing that you are much better than me.  
10% what it?  
10% multiple periods, but if there are multiple periods instead of being 12345, Yep.  
Oh, if it is in five years.  
Then.  
R45 years.  
Peace.  
110 100.  
1 / 5 - 1 yes.  
One idea, same amount of money, but I need more time.  
You will work more or less.  
You are getting the same money five years.  
This means that you are putting same effort in one year than in five, so in five years you will work less per year. Make sense?  
The rate will be lower.  
Olivier, are you with me also?  
Also.  
I want you to start tasting this. That return has to do with how happy I will be, how much work I should give.  
The more return, the better. No, you are getting the same instead of in one year. In five years you will get less return.  
Makes absolutely sense, no?  
OK.  
Now time at a rate of 5%, how long will it take to double your money?  
Your money.  
At the rate of 5%.  
A burrito.  
No.  
5% What does Dobel, Dobeling, Dobeling, Dobeling, Dobeling. So much. How can we write? What does?  
To make dough with me.  
That the present value is 1, future value would be 2.  
Oh.  
And I am asked about time. No. Let me continue with that with this formula. Let me continue with this formula and just write present value one. This is true.  
OK, so 1 + 5% rise to tea.  
Gonna be equal to two, yes.  
How can we calculate B?  
Lowering 1 + 5% and this makes be committed, yes.  
All of you are ready with me.  
And this is going to be equal to logarithm of two.  
So P is going to be equal to logarithm of two over logarithm of 1.05 makes sense.  
Yes, let me go to exit.  
I.  
Is going to be equal to.  
These going to be equal to log of.  
Nobody. Oh, or nobody. Which nobody should I choose?  
You see the question. There are different types of logarithms in base E or in base T Which one should I choose?  
Nobody. There won't be questions regarding logarithms in the midterm, but all these questions help us warming up. Which logarithm should I choose?  
Neparian or decimal or base 10.  
Who votes decimal?  
How about Snebryan?  
I'm gonna.  
Both. I'm going to use both and see what's going on, yes.  
Two over all right now 1.05 make sense.  
As the logarithm that goes in the numerator is the same as the logarithm that goes in the denominator, it won't matter which units I'm taking.  
I want to compare your high with your high in percentage. If I want to compare how high are you regarding you in percentage, at the end I will get, for example, imagine that you are half of his head.  
We are yes at 50%.  
In feet or in centimeters, as I compare your height and yours both in the same units, it won't matter the units I will be using. Make sense.  
So no matter the local items I'm taking, the result would be the same.  
What is?  
This yes 40.21 make sense.  
Even three, you can always find the form. This is the name of the game. We will be playing not at the beginning, but when talking about fixed income, we will be working with this. We will complicate things a little bit, but at the end always we will be working with that formulas, Yep.  
Jeffrey.  
And now, of course, and.  
Yes, yeah, yes, yeah. I I need to make an effort and I'm doing that and.  
OK.  
But this point, let me continue. What is a 0 coupon bond? The other day we were talking about 0 coupon bonds. What is a 0 coupon bond?  
What is a? What is a?  
I need 100 EUR. What I'm going to do, I'm going to sell you this. And what is this? This is the promise of having 100 EUR in two years time and in the meanwhile in one year time you are going to have this coupon of five.  
And at the end you will have 100 plus plus coupon.  
Make sense?  
What is that?  
Is a bond without coupons.  
What is this also or what this could be? Or what can you think about when looking at this? You can think about an IOU.  
All of you know what is an IO you note.  
What I have done with this bond this bond used to have two coupons, the bond face value plus 2 coupons. No what I have just done. I have transformed 1 bond with two coupons into three different bonds and each one is has zero coupon bond.  
Don't you see that what I have done is a stripping. This is called stripping.  
And what is this by itself? A zero coupon bond also. And this is a zero coupon bond. How much I will receive in one year time? 5 EUR. How much will I receive in two years time? 5 EUR plus face value. Make sense?  
So what is a zero coupon bond? A bond that pays no interest coupon, only the face value at maturity? Yes. How can someone make money by buying a zero coupon bond?  
Oh, how can you make money?  
How will you make? How will you buy this ball? It's a promise of really 100 with tenure.  
You will buy this in order to make money. Or you should buy this if you want to make money.  
No word for item 100. You see me? You should try this with that. It's gone.  
Or will you calculate the price by knowing face value, by knowing the money you will receive at the end? Makes sense.  
A bond that pays no interest. OK, where do cereal coupon bonds came from?  
In the primary market also you can have you have all the the bills.  
Public debt consistent two different types of debt, long term or medium term and long term debt that are bond with coupons and short term debt. Short term debt normally are 0 coupon bonds, T bills.  
There are T bonds, Treasury bonds and Treasury bills. Bills are zero bond bonds. Make sense.  
OK, I have a zero bonbon of 100, face value 100. The rate is 5% and this will be pay in maturities 10 years. What is the price? Let me calculate it.  
Face value 100, maturity 10.  
years and the rate  
Is 5% something has been broken?  
Yeah, the rate. What is the price?  
What is the price? Future value over 1 plus?  
5%.  
Rise to 10 makes sense.  
What is the price today? 61.39? Yes.  
Now.  
This is 61.39, Yep, 61.39 now.  
What if five years pass? What would be the new price considering interest rates remain unchanged? And what if one year left in maturity? You understand what I'm saying?  
Are you understanding all things that I'm saying? OK, if one year pass, if it is 10 years, five years, one year.  
At maturity, how much would be will be 100, no?  
100 I'm going to fix with Excel. I'm going to fix function with dollar fixing. All of you know how dollar works with Excel.  
Yep.  
OK.  
This one plus 5%.  
We fix it.  
And this will be price to.  
OK, yes, this is 61.39 we have already calculated. This would be 78 and this would be 95.  
How much money I am making each year? 5%.  
So each year it increases in a 5%, 1 + 5%, 1 + 5%, 1 + 5% each year. Make sense? And in 10 years time I will have 100. Got it.  
What if oh, before going to the 4%?  
As maturity, as maturity decreases.  
The price will be full to par. Make sense. The price will be full to par. As maturity increases, the price will will then will converge to price to par.  
To par value. What is par value? Face value. Make sense?  
OK now.  
No.  
Five years remain, yes. Five years remain. The price is 100 / 1 5% price to five, yes.  
6078 makes sense.  
This is with 5%.  
What if interest rate changes to 4%?  
100 plus.  
1 + 4% price to five, yes.  
What happens if interest rates drops from 5% to 4?  
If interest rates drops, if this becomes smaller, what's going to happen with the price?  
This is something that I promised that I will repeat more than 50 times by all times. What happens with bones if you can a break through? What will happen with place of bones if you can a break through?  
Price will go up. What will happen with price of bonds? Interest rates go up? Price will fall. Yes, negative relationship. I will repeat this lots of times until a moment that I will ask you and you will.  
I'm sure back immediately will help me, yes.  
Yes.  
This Thursday, Christine Lara will talk this Thursday.  
OK.  
Ragan is the chair of the European Central Bank.  
This Thursday he will talk about interest rate.  
Next Wednesday, not this Wednesday. Next Wednesday, who is going to talk about interest rates?  
You don't follow. You don't follow.  
More than one week left, but I promise that this Monday, next Monday, we will talk about Jerome Powell a little bit. We will talk about interest rate is something that matters. What Jerome Powell is going to say, what Jerome Powell is going to say.  
If you say a cut, no. It's going to cut interest rates. How much? 25 basic points. Don't worry, we will see. But this is something that someone that works in finance, you tell me what Jerome Paul is going to do, he's going to say.  
Everyone would say probably. We don't know yet, but.  
That is, yes. Makes sense. Three questions. So if interest rates drops.  
4% what if interest rate drop price will?  
Cool. Make sense.  
So there are two factors, time on one hand and interest rate changes changing in the other on the other hand. Make sense.  
No.  
What if there are multiple payments?  
What if there are multiple payments?  
With Excel, it's so simple and without Excel it's also simple, but you should do it one by one. Make sense. There are multiple payments I have. What is present value of 100 EUR today? 100 EUR C0 is C zero, yes.  
What is present value of an amount of money that will be paid in one year time? Present value of this amount of money in two years time and so makes sense.  
OK. What is the present value of a 1000 back two year?  
5% so happy.  
Almost this one.  
What change between that and that and this? What changes between this and this and that one?  
What is the only difference?  
No one, please.  
What is the difference between bees born?  
And this one.  
Is this a true year?  
5% coupon ball.  
Face value of 1001 hundred. The only difference is that face value is 100 instead of 1000. Then what is the deal of this bond? What is the price at which you are buying this bond?  
I don't know. We don't know. Make sense.  
Now oh.  
There is there is a mistake with this exercise.  
This is not a 1000 per bond. 1000 should be face value, yes.  
In case it's a par bond, price should be the same as face value, but this is not a par bond. What is the price of this bond? We don't know. We should calculate it. Make sense.  
1000 is face value.  
A parabone is when price match with make sense.  
Coupon is 5%.  
But if interest rate is 6%, the price would be different. Make sense?  
Yep, let me calculate present value of.  
This is a bone.  
And let me calculate it 1000 face value, so one and two.  
5% this is 50 and 1050. Don't you agree with me that this is first coupon and this is?  
Second coupon plus principal plus face value.  
OK, what is the present value at a 6% rate? How can I calculate this?  
By doing present value of future payments.  
50 / 1 6% rise to the first make sense.  
And 1050 / 1 plus.  
6%.  
Prize today. Second, make sense.  
And the present value is the sum of these two present values.  
Some of these two ones 981 make sense.  
Do you understand what I have done? I have just calculate present value of 50 one year time and present value of 1050 two years time, yes.  
What is going to be present value if interest rates is 5%? What should be?  
Anyone?  
Upon rate is 5%.  
Who can rate this 5%? What should be the price or net present value if I discount 15 one year time?  
And 1050 in two years time.  
Anyone.  
Nicholas.  
Understand the question. Hey, I don't understand the question. OK, the question is.  
I'm going to have 50 in one, I'm going to have 1050 in two years and I'm calculating present value.  
One calculating present value by discounting this at the 5% and this at the 5% in two years time.  
The question is how much if I calculate this?  
At the 6% rate, 981.  
And the question is, instead of calculating this at a 6% rate, how much this present value is?  
If I if I calculate this at a 5% rate.  
I think that you have understood it.  
Perfect. The number is higher than 981.  
I think that you have understand the question, but you don't know the answer.  
Yes.  
OK, what happens when I ask you a question? What do you do? Think now you are thinking about what the answer could be, and after so many questions you I'm sure you are thinking that the question has a trick.  
Let me write a 5% and see the answer.  
Is 1000. Why? Because if I put 1000 and I get 5% in one year and 1000 at 5% in two years, it makes sense.  
That 5% is a discounted rate. Make sense.  
Formulas are simple.  
IU he see it. U2L.  
You understand that formulas are simple, but what you should do with these formulas?  
Practice, practice, practice and practice. The more you practice, the more you will get used to all these things and the more you will interiorize all these things. Make sense.  
5%.  
51050 and 1000 makes sense.  
What is the present value at the 5%?  
6. In case interest rate will be of 5%, I am having a par bond base value match with the price. Make sense.  
If interest rate is higher than 5%, for example 6%, price will be lower than 1000 if interest rates.  
Drops from 5 to 4%. If interest rates drops to 4%, what the price will be higher than 1080? Make sense?  
Yeah.  
OK, now what is a perpetuity? We have already talked about perpetuities. It's a fixed payment that will happen forever. How do you calculate?  
How do you calculate?  
Present value of a perpetuity.  
Are you doing C / R? Yep, let's do one example. Suppose the highlight this example. The maintenance of your grave cost 100 every year forever. Interest rate is 5%.  
How much money should you leave your trustee?  
How much money should you leave your trustee?  
Suppose the maintenance of your grave cost 100 every year. Interest rate is 5% year.  
How much money?  
See, over 5%, yes, that would be 2000. If I put 2000 in the bank at a 5% rate, how much money can I take each year?  
7.  
We are so close, dear.  
Now I know it.  
And.  
Let me.  
And.  
What is?  
Where is Heather Patrick?  
An infinitive number.  
Of payments make sense.  
Yes.  
Yep, all of you see that this is a perpetuity. How do you calculate?  
Present value of availability.  
By doing see over. Uh, make sense.  
What is?  
Analu repeat.  
This has three. It's a fixed number of payments that we'll start in one year time and we'll finish in P Any sense?  
Give me the two formulas. Give me the two formulas. How can we calculate?  
Present value of amenability.  
I think I have have read. Oh yes, I have read.  
How can we calculate?  
You see what I'm talking about?  
I can calculate this.  
I can calculate this.  
This is a Bedrick, you know.  
Present value of perpetuity C / R yes.  
What should I take out in order to have?  
What should I take out in order to have?  
They are meeting. I should take out.  
These ones, no? Oh, I'm going to take out these ones with another negative.  
that will start in P plus one. Yes.  
Why is press in value?  
What is present value?  
In T What is present value in T of this perpetuity that will start in T plus one?  
Ethan, what I have said is I want to calculate the annuity. I know how to calculate the perpetuity.  
And what I'm going to do is calculate present value of the perpetuity and then subtract a second perpetuity that will start in year T + 1.  
And discusses with this, discusses with this and discusses with this make sense.  
Yes.  
What is present value in P of that perpetuity?  
We over, yes, indeed.  
And what is present value today?  
Of this one.  
Present value T over 1 + R rise to T.  
Make sense?  
All of you see so.  
What is?  
Present value of the perpetuity.  
There's a value of the perpetuity is the difference between so.  
Sorry, present value of the annuity. Present value of the annuity is the difference between 2 perpetuities. One first perfectly think that this.  
T / R Yes and the second one.  
Is minus.  
1 + R raised to T Yes, a second perpetuity that will starting T + 11 plus RT over R Yes.  
Do you understand this?  
And this is the last idea of the class and if you don't have understand understood this or if you need to review this.  
Let me look.  
In this video we are going to tell you where the present value annuity formula came from and annuity represents a series of equal payments. This is spam.  
Um.  
I mean, this is myself talking. This is a video where you can find and if you want. No, I'm just kidding. No, it's Spanish. You don't need to to subscribe. All I'm going to say is this. Press like and subscribe. No.  
But I'm you have also this in bright space. Yes, I have this in bright space. This is just now how much is 3.35 seconds and here you've got the same thing.  
This is the formula that we have just look. You can write this formula in two different ways, yes, but one important thing in both the midterm and the final you will be allowed to bring with yourself a formula chip sheet.  
You don't need to memorize anything. Careful, not memorizing means.  
Less work in order to memorize, but I strongly recommend to work and work and work. What I have showed you how to demonstrate that formula. You can write the formula and not think anymore about that, but I strongly recommend you to think, to think, to think, because the more you think about all these things, the more.  
Or you will make yours all this knowledge make sense.  
What I will do in case I were you, I will go through this class and all things that I have made. I will try to do it. I will. If I were you, I would. I would try to do all these things by myself.  
Make sense?  
And then start. I will try to start doing the problem set one, the one that I gave you last week. Make sense? Let me.  
What car can you afford? This is just you have no large you can afford 632 per month. Let me go quick.  
So here, uh, 603 two per month.  
632 I'm going to make this bigger in one minute.  
Uh, 601% per month and 48 months.  
1% and 48.  
Gray and C Yes, I don't know that formula, but I know what I have told you C / R.  
See over.  
Uh, let me make a parenthesis here, yes.  
And now the difference of two annuities, one annuity C / R is annuity. Yes, first annuity 1 minus the second annuity that is going to be 1 / 1 plus.  
The rate price to the.  
8.  
Make sense?  
And this is going to be 24,00024.  
Mhm.  
24,000 and you know 24,000 is.  
54 cents.  
That makes sense.  
Any questions?  
Interest rates and price inverse relationship. What happened if interest rates increases with price of bonds? They will decrease for per per mix.  
If interest rates increases, if interest rates double, the price will be half.  
And for the stocks, we haven't talked about the stocks yet, yet, but there is an inverse relationship. But careful because bond markets, if interest rates increases, price of bonds will decrease and there will be money that will jump from bond markets to stock markets.  
I forget about this today, yeah.  
Make sense? So at the end conclusion.  
There is only one formula or or or perhaps those or perhaps two. What is the idea? We have a perpetuity. With this perpetuity we can calculate present value in this time and once we.  
We know this, we can go backwards or forward.  
Yep.  
Today is the first day and we will work with time value of money a lot, a lot and a lot. First problem set is dedicated to time value of money. Yep.  
Everything is OK. Perfect. We are done. Enjoy the rest of Monday. Any one of you have class after this?  
No, then I'm more happy about you. Me neither. Today there will be Mondays that I will have class, but I don't care too much.

![](file:///C:/Users/lgarv/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif)**Luis Garvía Vega** ha detenido la transcripción