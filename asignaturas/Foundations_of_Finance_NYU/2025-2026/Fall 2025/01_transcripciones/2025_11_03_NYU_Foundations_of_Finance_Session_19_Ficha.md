---
Título: Teaching Log — Financial Markets (Session 18)
Fecha: 2025-11-03
curso: NYU Madrid — Financial Markets
sesión: 18
hora_inicio: 17:06
duración: ~80 min
tema: Estructura temporal de tipos, forwards y lectura de la yield curve
Tags:
  - NYU
---

# Teaching Log — Session 18

## Objetivos
- Entender la **term structure** (spots de bonos cero) y construir la **yield curve**.
- Dominar **forwards \(f_{n,n+1}\)** por **no-arbitraje** y su uso como **cobertura** (no predicción).
- Interpretar la **pendiente** de la curva combinando **expectativas** y **prima de liquidez**.
- Preparar terreno para **Duración y Convexidad** (cuánto varía el precio ante Δbp).

## Contenidos impartidos (mapa)
- Repaso contexto Fed (recorte **25 pb**), mandato dual y “data-dependence”.
- **Spots** desde ceros y **yield curve** (normal / invertida / plana).  
- **Forwards**:
  - Fórmulas: \((1+S_n)^n(1+f_{n,n+1})=(1+S_{n+1})^{n+1}\).
  - Ejemplo numérico: \(S_1=2\%\), \(S_2=3\%\) ⇒ \(f_{1,2}\approx4\%\).
  - Idea de **réplica** con ceros (préstamo sintético).
- **Lectura de la curva**:
  - **Expectations Hypothesis** vs **Liquidity Preference** (prima siempre **+**).
  - Regla práctica: curva **negativa** ⇒ expectativas **bajistas**; curva **positiva** ⇒ no concluyente sobre expectativas.

## Actividades/demos
- Derivación en pizarra de la **fórmula de forwards** y caso general \(n \to n+1\).
- Discusión guiada sobre cómo **replicar** un forward loan con dos ceros (compra 2Y / venta 1Y).
- Debate rápido sobre formas de la curva y ciclos (ejemplos históricos mostrados en clase).

## Mensajes pedagógicos clave
- **Forwards = cobertura**, no bola de cristal.  
- La **prima de plazo** sesga la curva al alza: cuidado al inferir expectativas.  
- Próxima sesión usará esta base para cuantificar **ΔP** con **Duración/Convexidad**.

## Tareas / seguimiento
- Rehacer 2–3 ejercicios de **forwards** (del 1→2, 2→3, general \(n→n+1\)).  
- Repasar pricing de bonos con **spots** (descuento por tramos).  
- Traer calculadora/Excel listo para práctica de **Duration/Convexity**.

## Notas de aula
- Aviso de próximos **sample finals** (2–3 semanas antes del examen).  
- Recordatorio de hábitos de estudio y uso responsable de herramientas de IA.

## Riesgos/errores comunes a vigilar
- Confundir **predicción** con **cotización a plazo**.  
- Olvidar el **promedio geométrico** al validar forwards.  
- Inferir expectativas solo por pendiente **positiva** (ignorar prima).

## Alineamiento con evaluación
- Cálculo de **forwards** y lectura de la **yield curve** entran de forma directa.
- La próxima clase (Duración/Convexidad) **sí** tendrá ejercicios numéricos tipo examen.

## Acciones para el profesor
- [ ] Subir una **hoja de ejercicios de forwards** con soluciones paso a paso.
- [ ] Preparar Excel de **descuento por spots** + plantilla de **Duration/Convexity**.
- [ ] Publicar *Student Notes S18* y este *Teaching Log* en la carpeta del curso.
- [ ] Cargar transcripción en NotebookLM y crear highlights (forwards, term premium, interpretaciones).




# Resumen para alumnos — Yield Curve & Forward Rates

## 1) Dónde estamos
- Seguimos con **renta fija**. Hoy: **tipos de interés**, **curva de rendimientos (yield curve)** y **tipos a plazo (forwards)**.
- La Fed recortó **25 pb** la semana pasada. Recuerda: la Fed es **data-dependent** (inflación + empleo).

## 2) Curva de tipos (spots)
- **Spot \(S_t\)**: tipo de un **bono cero** que vence en \(t\) años.
- Con \(S_1, S_2, \dots\) construimos la **yield curve**:
  - **Normal** (pendiente +), **Invertida** (pendiente −), **Plana**.

## 3) Forwards (no predicen: sirven para cubrir)
- Pregunta que responden: “¿A qué tipo **puedo fijar hoy** el tramo entre \(n\) y \(n+1\) años?”
- Fórmula general (no arbitraje):
  \[
  (1+S_n)^{n}\,(1+f_{n,n+1})=(1+S_{n+1})^{n+1}
  \quad\Rightarrow\quad
  f_{n,n+1}=\frac{(1+S_{n+1})^{n+1}}{(1+S_n)^{n}}-1
  \]
- Ejemplo rápido: si \(S_1=2\%\) y \(S_2=3\%\) ⇒ \(f_{1,2}\approx 4\%\) (para que el promedio **geométrico** a 2 años sea ~3%).

> **Idea de réplica:** comprar el cero a 2 años y vender el de 1 año sintetiza un **préstamo** entre años 1 y 2 (misma lógica de no arbitraje).

## 4) Cómo leer la pendiente (idea clave de examen)
- En la yield curve conviven **dos fuerzas**:
  1) **Expectativas** sobre tipos futuros.
  2) **Prima de liquidez/plazo** (los inversores prefieren cobrar antes ⇒ empuja la curva **hacia arriba**).
- Consecuencias:
  - Curva **positiva** → **no** puedes inferir expectativas con seguridad (la prima puede ocultarlas).
  - Curva **negativa** → sí implica **expectativas bajistas** (ni la prima positiva logra compensar).

## 5) Qué viene ahora
- Próxima clase: **Duración** (sensibilidad de precio a cambios de tipos; NO es “tiempo”) y **Convexidad**.
- Objetivo: cuantificar “¿**cuánto** cambia el precio si el tipo se mueve Δbp?”

## 6) Checklist mínimo
- Construir spots y la **yield curve** con bonos cero.
- Calcular **forwards \(f_{n,n+1}\)** y validarlos con **promedio geométrico**.
- Explicar por qué la pendiente positiva **no asegura** expectativas alcistas, pero la negativa **sí** sugiere bajistas.

## 7) Práctica recomendada (5–10 min)
1. Con \(S_1=2\%\), \(S_2=3\%\), \(S_3=3.5\%\): calcula \(f_{1,2}\) y \(f_{2,3}\).
2. Verifica que \((1+S_3)^3=(1+S_1)\,(1+f_{1,2})\,(1+f_{2,3})\).
3. Explica en 3 líneas cuándo la curva **invertida** es señal de **bajadas** de tipos esperadas.

> **Tip:** para forwards, piensa siempre en **no arbitraje** y **promedio geométrico** (no aritmético).



# Transcription
3 de noviembre de 2025, 5:06p.m.

Yeah, yeah.  
I honestly like, I'm all kind of old, but it's like, I'm sorry, it's so fun. I was like 3 quarters of who to get dropped, in case we're attempting. Yeah, yeah.  
That was always weird. He was like, we're just in the middle of the streets at 11:00.  
I don't think it was worth what we spent. Yeah, it really made it. I was in that for sure.  
We have.  
No, never. OK, we are going to. Yes, definitely. You know, this is probably will come quick. It's income too. It's income has to do with balls.  
Yep, last day we will use the concept of gold and next day we will continue talking with how to get the price of a gold and next day we will answer the question what happens if interest rate changes?  
Interfaced increasing what happened in the place level, go down. Then next question is how much price will change and we will take all's pricing formula and we will derivate this next day. So next day we will talk about.  
How much the price will change when the rate changes and we will call, we will call this duration if anyone answer me to the question what is duration?  
If anyone answered me time, I will be her. Yeah, I'm done. Vation is interest rates and how much price changes what interest rates. Yes, we will talk about this next day.  
What are we gonna talk about today?  
Today we will talk about interest rates.  
But we will talk about interest rates in particular and we will talk about what happened last Wednesday. Deron Powell dropped interest rates 25 basic points.  
And yes, I had a disease.  
Drop Federal Reserve to that decision without.  
What? What was what is going on now in the States?  
What is the call? Federal Reserve took the decision without data. There is a shutdown and all the places where you can get data from are closed because there is still the shutdown.  
Yes, but this is a parenthesis. Normally how Federal Reserve take decisions with data. You know, Paul, one of the things he said a lot, he didn't say this last word. One of the things he always says we are data dependent.  
We are not understanding. We go meeting by meeting. We don't know what is going to happen and because things can happen, we depend on data and regarding depending on data, we will take decisions. Yes. Now there is a issue regarding data. There is an issue.  
Public spending, public spending and there is an issue regarding also public debt.  
And nowadays, now this is not our problem. OK, I continue different places. There is there are not just one elephant in the room. There are several. There are a whole family of elephant. Let me call another elephant China.  
If I were you, I will. I will have one eye in the States or one eye in Europe and another eye in China.  
And another of the elephants we have the room is.  
That let me call it a media, but I'm not talking just about the media, I'm also talking about Apple. What is markets market cap of the media?  
I don't know if it has stocks 5 trillions or not. I think that yes, but five trillion. How much is Spain?  
You see what I mean? We are talking about something new. So there are several elephants in the room. This is out of the scope of this course, but I want you to be aware of that we are living strange days.  
Trains, moms, trains, years.  
And if I were you, I would be use. I will be reading a lot. I will be writing a lot. I will be exercising a lot. I will be drinking a lot of water, sleeping a lot.  
So sorry, I will drink a lot of water. I will sleep a lot. I will have good augmentation, yes. And also I will just check DPP a lot.  
And not because of that, because of how powerful is.  
Are all these people make sense? OK, coming back.  
What is Federal Reserve Fed objective? I'm still a little bit out, but I'm just trying to connect with my class. What is the mandate? Federal Reserve mandate?  
The balance, inflation and labor market. Yeah. And this come to us with ECB Euroban program. What is ECB mandate? It's just one.  
Why is CCB Monday?  
Control inflation, inflation, same as federal preserve, but we thought labour market. Year on power mandate is dual dual mandate, labour market and inflation. But what is this about?  
What is this regarding inflation about? What are we talking about?  
What are we talking about?  
Why that exists? What is? Let me summarize a lot. Summarize a lot. Yes, there is.  
Letting people just focus on their own business instead of thinking about money, inflation, give me, give me my money now because if I wait till tomorrow, this will work less. Can you imagine how a school day is in Argentina or is in Venezuela?  
They talk probably more about inflation than about maths than about grammar. What I mean is yes, what everyone needs is could you imagine how could we be leading?  
In a place where there is war.  
Impossible to live. I mean impossible to live. Not because you live.  
This is important.  
Absolutely. This is the first thing we did.  
I'm so happy with this class with all my classes. Could you imagine trying? Please, Jeffrey, Ethan, look at me, look at me and Rojo. Could you imagine be be teaching?  
This is not teaching. This is happening as a policeman and you understand what I'm trying to say. First thing we need is peace. And once we have peace, we can do the rest of the things. There are two policies, monetary policy.  
On fiscal policy, federal reserve interest rates has to do with peace, has to do with controlling inflation, has to do with.  
Let people work in peace. And on the other hand, there is fiscal policy. Fiscal policy has to do with redistributing wealth. OK, in monetary policy, the best monetary policy is when you don't realize that monetary policy exists.  
And when talking about fiscal policy, you should touch things. Why? Because we not everyone is born with same opportunities. You should touch. Why? Because you are not that you're.  
Family is worth no problem. But if you are unlucky, all kids should have same opportunities and there goes fiscal policy. You understand the point, but we are not talking about fiscal policy today. We are not talking fiscal policy has to do with taxes.  
Has to do with public expendage, has to do with the government, on the other hand.  
Monetary policy has to do with Federal Reserve.  
And I'm sorry, I'm going to start, but another important thing, fiscal policy and monetary policy should be developed. What is Crown trying to do?  
Intertwine them, he's gonna. He's trying to fake. He's putting people. All politics try to be everyone. So it's not a point on front to be in the yes.  
OK, a.  
Can we predict the future? What is finance about? Finance. Can we predict the future? No. Can we manage? Yes. And in this sense, what must be through my class?  
Regarding the future that governments always pay their debt, governments always pay their debt, and if not, all things that I'm saying means nothing. Make sense. So in this sense.  
I don't know what is going to happen in the future, but if I know, if I know what is going to happen in the future regarding public debt, fixed income, I know what is the payments public debt are going to have.  
I can't figure out what the year, what the interest rates structure will be today for next 5030 years. This is the year. I'm going to explain it with more detail, yeah.  
OK, forward rates. What is a forward rate? Today we are not going to see anything new. All things we are going to go through today. You already know them. Oh, you know, we are going to see three things new. Once we are there, I will call you. This is new, this is new and this is new. Yeah.  
Forward rate. What is forward? What is a forward rate? It's not that I want to lend someone money in one year for 44 next year, yes.  
I want to lend someone money in one year or one year in the past.  
The question forward rate, forward rate will answer is at which rate should I lend money in order to hedge interest rate risk?  
I'm not saying that I know what the rate is going to be. I am saying that I know at which rate I can hedge today. Make sense? We will talk about futures in three weeks. Futures.  
Futures don't predict the future. Why? Because nobody can do. But with futures, we can hit. We can't hit. Make sense?  
Thinking about insurance, this is an important area. With an insurance contract, I cannot predict the future. For example, I buy a life insurance. I'm not saying that I know that I will be alive. I'm saying that in case I die.  
My family will have money. Make sense.  
So same happened with forward rates and same happened with future. We cannot predict the future and we can heads.  
And interest rate is important, suppose a one year.  
At one year zero has a new to maturity of 2%. A true year has a new to maturity of 3%.  
What are we going to do today that we saw this two days ago? Here I'm going to write time one year, two years, three years, for example. Yes, what is the rate of a two?  
Of our one year's year compound, the rate is 2%.  
Yes.  
What is the rate of that?  
So here, City of Bombon, the rate is 3%, yes.  
How are we going to call from today to year one, from today to year two? How are we going to call this rate spot rate? Yes.  
It's they spot great changes as the price of zero compound changes. Make sense.  
What is the spot rate? I have zero. I can calculate the spot rate. Not only this, I can connect this in the line. How are we going to call this line the gear? Once we know the spot rate, what can we calculate?  
For Walgreens.  
And in this case, what is the implicit interest rate in the second year?  
So.  
What is for example?  
I give you money in one year time and you are going to pay me back this money in two years. What is the rate between year one and year 2? I should check in order not to have a returns, yes.  
This is forward great forward between year one and year 2.  
So simple or we're going to calculate our rate with the geometric average.  
So, so simple. Look here, please.  
One plus the forward this plus this is equal to.  
This one, no.  
One plus this is a sorry.  
One plus the spot one that is 2%, yes.  
Times 1 plus forward between one and two, yes, it's going to be equal to 1 plus the spot in year 2.  
Rise to the signal.  
Make sense? What are we doing there? And you may think of it. Let me.  
Tell me one number between 1:00 and 7:00. Perfect.  
7:00 and 9:00, Yes, normally it's ceremony, but I want to do.  
I have this spot in year seven. I should have this spot in year nine, yes.  
How can I wait for work between 7-9?  
OK, same thing, yes.  
One plus the spot in year 7 rise 2.  
The 7th * 1 plus the forward 79 raise to the second, yes.  
This should be equal to 1 plus the spot in year 9 rise to the 9th.  
Make sense?  
7 + 2 should be equal to 97 + 2 should be equal to 9. We are doing the average but in the genetic way.  
Coming back here, forward rate between year one and two is equal to 1 plus the spot in year 2, right to the second over 1 plus the spot in year 1 minus.  
One, yes.  
Let me calculate, calculate it.  
412 is.  
One plus.  
1 + 3%.  
Rise to the second over 1.02.  
-1 Yeah, and this is a forward.  
This is a 4%. What is the format of the percentage?  
Yeah.  
Yep. And does this make sense?  
In one year I'm getting a 2%. In two years I'm getting a 3%.  
If in one year I get a 2%, how much should I get between year one and two in order to get a 3% in total?  
4%. Do you see that I'm doing the average 2 4 / 2 is 3.  
Makes sense.  
OK, how can you trade these bonds to replicate a loan between year one and year 2, the synthetic loan? This is what we did. This is what we did.  
Two days ago, do you remember when talking about army threats?  
The idea is here I've got one ball on one. Here I've got another ball. Bone two, yes.  
The synthetic law means I will have here money and I will have here the bond I'm looking for, yes.  
So in order to have money here, I will buy this, I will buy this and I will sell this. But buying this and selling this will means nothing today. If I buy this, I will receive money here.  
In order to buy the synthetic loan, yes, and I should pay back this money there. Make sense? You don't need to know this. How does this work? But this is just to remain arbitrage. Sorry.  
OK.  
The forward rate is determinated by no arbitrage. What is this?  
This equation, this and that is the second forward.  
Forward instead of two years is just one year. Yes, let me write here.  
One plus the spot in year end.  
Rise to N1 plus forward.  
Year N rise to 1 should be equal to.  
One plus the spot in year N + 1 raise to M + 1 this.  
Make sense?  
You see what I'm doing there?  
Let me call this N and this N plus 12. Let me call this N, yes.  
One plus this stop, this spot, one plus this spot rise to N * 1 plus this forward will be equal to 1 plus the spot in here N + 1 rise to N + 1, yes.  
I don't want to make your life more complicated. That is the same. But the point is that instead of reading N and N + 1, what is written on the blackboard is N and N -1. Yes.  
Bye.  
In the example, this is what we have got, yes, and you are not going to see numbers bigger than this one.  
Any questions?  
Let me see, you are copying. You are copying this. I want to do this better. I'm going to rewrite this because.  
Play D.  
You have N and N - 1. You have the you group. Yes, what is?  
How do you calculate the forward?  
Yeah, and closing.  
One plus EU and -1 right and -1 is times one plus the forward I'm looking for.  
This should be equal to 1 plus radial N raise to N yes and from here you can get that there forward near N is.  
One plus the spot in year and price went over the one plus the spot in year before price went -1, -1 yes.  
And this is.  
That formula makes sense.  
Any questions?  
Now.  
This is not complicated, but the point is not in you understanding what I'm doing. The point is in you knowing how to manage these forward rates.  
Simple. First time you see this kind of exercises, it could be difficult and you do 2-3 exercises like these ones. It's so so so simple. Yes, there is not too much difficulty there.  
And this is one of the most important things you should know fully understand because this connect your bonds with price of bonds, with the deal proof and this kind of exercises you will find in the midterm, sorry in the final, yeah.  
OK. And again regarding the final, I will give you 3 weeks or two weeks, three weeks before sample final one, sample final two and we will go through all of them and we will review but this kind of exercises.  
Not just these kind of exercises by itself, these kind of exercises, but connecting with bonds, we're going with coupons and with obviously.  
OK. How can you trade forward rates? There are several ways. We will talk about forward rates itself as sad intervals. Today we will talk about derivatives. We will start talking about derivatives in two weeks time.  
Also, we will talk about swaps. Have you ever heard of the swap?  
Have you ever heard of swaps? Options. Future. What is a swap? A swap is a financial derivative and a swap is a trade. You give me, I give you. You give me something and I give you something. For example, a swap.  
Regarding commodities, you give me gold and I give you silver. We agree today how much gold you will give me and how much silver will I give you back? And today we close the agreement and in one year time you won't give me money, I won't give you money. You will give me gold and I will give you silver. For example, this is a commodity swap.  
There are swaps regarding currency. You give me dollars and you all euros and there are interest rate swaps. You have a fixed rate, I have a floating rate and depending what interest rates will do, you pay me or I pay you and we will talk about this in two weeks.  
Make sense?  
We will come back to this in our classroom future. Yes, we will come back now the deal coof, the collection of all cereal compounds construct.  
They deal good and it has several names. Term structure of zero coupon bonds, term structure of interest rates, also TSIR.  
In Spanish, somebody call it lightning. That is the acronym. Yes. What do you call NASA? NASA or NASA? NASA. NASA. You call it NASA also NASA or NASA?  
That's OK. Then there are times that this also could be called TSI.  
Yes, I yes, that you go. Let me.  
Google.  
OK.  
No, this is not a little goof and this is not that these actually those looks like.  
Rates. Let me.  
This, yes, thermal structure.  
TSIR but the proper name or the name of you Koof.  
We are going to talk about the.  
The yield proof, this is a normal yield proof interest rate year 1234 and we construct it. Yes, let me take this one.  
Let me take this one and let me search.  
This one.  
with you.  
OK, this goes on one hand.  
And let me give you more information. Let me go to the.  
Fred, you know what is Fred? Have you ever heard of Fred?  
Definitely is.  
Is Fred is from Federal Reserve.  
The ones that give that this is great.  
And me.  
This is these are in the Fed Federal Reserve in the rest.  
Breaks. Yep. OK.  
And OK, let me close this one. What do you have here? Here you've got SP500. What is SP500? An index that give me the market. Do you remember CAPM?  
And how it says FIFA 100 maximum.  
This is crazy, but whatever, I mean having this maximum.  
It's crazy. Normally speed 100 goes up, goes down, goes up, goes down. And now personally, I don't know where we are going.  
There is a point with dollar. There is a point with dollar.  
OK, I don't want to do this, but Fred M0. This is the monetary base, yes.  
This is the monetary base. Copy.  
Monetary base. The monetary base is the money being printed by central bank, by federal.  
In year 2008, here in the year 2008, everything was normal. This was growing at a constant speed, yes, but after Lehman Brothers collapse, Federal Reserve.  
Made double a lot of money in order to protect the financial system. Yes. And have you ever go to the kitchen and think I'm just going to eat one potato one?  
One cookie. Have you ever done this? Is it possible to eat just one potato, one cookie, one fried potato once you take the first one?  
Once this looks a lot, no, this looks a lot. Looks what happens after.  
These that used to look a lot. It's just a little. Then this is the Greek crisis. Then this is the European. This is the Greek crisis. This is the Spanish and the Italian crisis. And then this should sound familiar to you.  
This is the copy. At the beginning, this money was printed to the financial system and then this money were the checks that have been given to all US citizens that earned less than 80,000.  
But at the end, what does this show us? Dollars imprinted by Federal Reserve.  
I'm not criticizing, I'm just showing you a fact. What is this that the Federal Reserve has multiplied by 2 by 4 and by 8. Yes, here there were 0.8.  
Predium and now.  
We move into 0.6 trillion and now 0.5, sorry, now 5 trillion.  
Make sense? OK, forget about this when I'm showing you this because a lot of money has been created since year 2008.  
And what this has caused? What this has caused? This has caused that year 2008. Is it 2008? Yes.  
Year 2008 interest rates were set to 0 and how did how could the US Federal Reserve continue?  
Hitting the economy. If interest rates are 0, you cannot drop interest rates at a lower rate than 0, yes. So if I can.  
If I cannot put interest rates lower than 0, what can I do or what should I do?  
Big money to the banks to the debt and this is what happened.  
Hey, OK.  
This is I'm going to take. Look, sorry, I have. Let me come back here. This is SP500, yes. This is SP500 in year 1999. Yes, SP500 in year 1999.  
1999. So I'm going to take year 1999, 1999 around here. OK. And what does this show us? What Federal Reserve interest rates? The short Federal Reserve interest rate, yes, the short term.  
What is this pointer?  
You know, last Wednesday, not last Wednesday, because let me make a food.  
OK, you see what I mean? October is busy.  
This is not last Wednesday. This is the first of the two drops that we have seen and we move here to here.  
1999 and.  
OK, what is this? What did Paul have said?  
Any questions?  
Let me summarize life so quick.  
You cannot stop myself.  
I'm Analis.  
Let me see if I can show you.  
This is me in green.  
Let me, I want, yeah, here it is.  
this.  
Copy emails and.  
OK.  
What? What does this work so much?  
This is year 2000. Yes, this is today in year 2000. These are the this is SP500 and among no sorry SP500 no these are in year 2000.  
The 10 biggest stores total market cap of the 10 biggest stores stores, yes. And this is the same nothing but yesterday, not yesterday, I mean 10th of October, yes.  
Have you heard about the.com crisis, the.com public?  
Coming back here.  
What had happened? I want to get rid of this one.  
What has happened in year 2000? dot-com crisis. This is the.com crisis. Yes, and here is the 11th of September.com crisis. What happens when? Oh, forget about this one.  
This one.com crisis. Yes. What happens when there is a crisis? Federal Reserve drop interest rates, Federal Reserve drop interest rate. And here is the 11th of September. And what has happened the 11th of September?  
Again, interest rate drop interest rates. Why? Because there is a crisis. One day once they thought they have recovered from the crisis, they increase interest rates again and once the crisis is coming, there are reserve drop again interest rate and this is Lehman's crush.  
Demands from Rust, September 2008, 14th of September.  
Makes sense.  
So when there is a crisis, then on reserve drop interest rates.  
I'm going to animate this once I animate this. Oh, what can you see on the left? The year curve, the 4th of January 1999. Let me animate this. This is the year curve and.  
Time is moving. How is this your curve? Little inverted. What does inverted mean? Normal. How you could We are going to see this in families. How you could should be you could normally should have positive slope.  
Why? We will see. But what makes sense is oh, here. Oh, oh, oh, it hurts. It hurts. Did you see it?  
Did you see this?  
This makes me sad.  
Do you see the? Do you see it? Oh.  
Look, 11th of September is about to happen. May, May, July. Look interest rates in the short term. September, October. Have you seen how interest rates drop?  
Drop from three to two. And now how does this look? This is a healthy. Yes, we are in year 2002. When were you born? Yay. Well, to be forbidden to be so young, 2003.  
2000.  
You weren't even a project. Nobody has asked Amazon yet to deliver the day June 2004. We are close to the moment.  
Do you see the new curve? Look one thing. Look one thing. Look one thing. 2005, February 2005. OK, let me. Yeah, it is about to happen. May, June, 15th of June. OK, this is this is open.  
You are the first one. You are the only one because once is the second or the third is not the same for the mom. Now your mom was absolutely nervous and probably sad it was.  
OK, sure. No, sorry for this. And and if you are, if you came, if you came in, if you have not born in a normal way, please forgive me. Yeah, no normal. Everyone has. If you are here, everyone is normal.  
You understand what I mean? No, in vitro. If you are, don't get offended. Perfect. OK.  
Why? Why did I stop this? Now I know. Why did I do that? Why did I do this? Because we are here. Federal Reserve, if you see long term, June, April, June is.  
Here, here. Oh, did you see? Did you see that there is there like a small? Yeah. What is this?  
There are the computers. What is this look?  
April, this is May. Now this is June.  
What is this? Ronnie Jake birth? No, I I don't know what it is. So it is the first time that I have seen this. Now what I want you to see that the so I'm going to move to 2004, yes.  
If you see the short term, you are going to see how this grow at the same speed as this grow, yes.  
Animate you see how and this starts only like a roller gaster. Have you ever been in a roller gaster?  
In Federal Reserve, we are going to talk about this next day and with Silicon Valley Bank. Don't you see, don't you see, don't you see 2005 September.  
Look.  
Look at your curve, the your curve. How the your curve is there? Flat and it's flat and can you feel the pain?  
Can you feel it? It starts out in 2006, two years before Lehman Scholars. The little group tell us what is about to happen or just to tell us. Yes, look it, look it.  
This helps a lot.  
2006 and May 2007, June 2007 Federal. We are on the Federal Reserve start decreasing and look what is coming. Look January. I'm thinking about September, March, April, look May.  
June, July, September, August. Look, look, look, boom.  
Did you hear it? How it sound? Yeah.  
May this is Lima collapse after Lima in one more time. Iceland, a whole country go into a bankruptcy. Then comes Europe, the Greek crisis. Yeah.  
What I want you to see and we are going to move through this. Yes, let me move this. This is 2006. Sorry, the 2016, 2016.  
2001.  
Look the yield curve how it is. We are June, July with all respect to China. Someone is about to snore in Wuhan December to the look, look the yield curve is in there and look again. This is the lockdown, yes.  
Do you see? And I'm going to move into this is the lockdown and I'm going to move into year 2000. I'm going to move here because do you remember Silicon Valley crisis?  
Have you ever heard of Silicon Valley Bank?  
Year 2023, two years ago it was a big big crisis that length, just one week happened in about one week. We will talk about this next week, but after this, this start happening year 2002.  
This is because of inflation due to the tax, yes, and here 2023, this is a crisis, Silicon Valley Bank crisis. And here Federal Reserve need to inject money to give money to Silicon Valley Bank in order to avoid the.  
Animate look, federal research is going to increase. Look how far, how fast this is going to be. Yes, look, look, look.  
Look and what is this 2000 January? What this tell us?  
That there are banks that are suffering a lot. Let me put a name to one of these banks and it's Silicon Valley Bank. But how Federal Reserve is now solving all crises by printing dollars.  
Two weeks ago, one week ago, it was Milay said midterm elections, Milay, Argentina midterm election. One week before Milay asked for a bailout. What Trump has told Trump and Powell, what do they has give?  
To mulate one swap with 40 million, a $40 million swap. What they have done print money.  
What Federal Reserve is doing, they are bringing money and what could happen, frankly, I don't know.  
I don't know what could happen, but I want you to be aware or to know, or at least to have heard from me that there are elephants in the room.  
OK, animate. Do you see this in curve that is inverted?  
Do you see this is much worse that the the new group that we have had before and nowadays this is oh.  
I pose, pose.  
And this is 31st of October, yes.  
One week before.  
This is before you know Paul drop interest rates and this is after it's drop and what is going to happen on December next meeting. I'm quite sure that you know Paul will drop again interest rates, yes. So how do you prove is now?  
How would your group is now?  
No matter. Any questions? What do I have showed you? I have given you a lot of information, but please.  
Important one is this one. This is the one you.  
Sure.  
No.  
Yes, they do. Why do I have given you this and this? Because this is also important that to know and why I have given you this is there about it regarding a I.  
If if this is not above it, I don't know what what to call above it, yes. And this means that AI has no sense. Absolutely no AI is transforming everything, but at the same time.  
Open AI that EPT. It's important, yes, but why did see could do the same?  
That's all of us will move into deep.  
Do you see that equilibrium balance is complicated?  
What could happen? I don't have any idea. I don't know what is about to happen.  
Uh, what is my recommendation?  
Sleep well to play sports.  
And read, write and also do the exercises, do my exercises and also use chatted because it did change the world. Yep.  
OK.  
What is this? The yield curve. So we can say that there are three different types of yield curves. Here there is the normal yield curve with upward sloping.  
Positive slow then there is downward sloping inverted you curve and flat this hand shaped.  
East Black.  
Yeah.  
OK. The question is what we are going to see from now till the end is what does?  
What does this mean? What does this mean?  
And when looking at the yield curve, when when looking at the yield curve you can find inside.  
Load, load, load, load, load of information fears. There are tons of information inside of that. So what I'm going to do is just a simplification. I'm going to simplify.  
In work analysis, but not a little. I'm going to simplify a lot.  
Hello.  
So, first idea.  
First idea.  
I don't want to erase this.  
First I whether.  
What is my?  
here. Sorry. First idea.  
If the slope is positive.  
What do you think Federal Reserve is about to do with interest rates, increasing them or dropping them?  
If the slope is positive, you can think that Federal Reserve is is about to increase in the reserve. No if the slope is negative.  
What can you say?  
That Federal Reserve is about to drop interest rates. Why drop? Why Federal Reserve will drop interest rates? Because Federal Reserve thinks that there is a crisis coming.  
So first idea is.  
That by looking the new proof, you can think about the statistics. Make sense.  
If there are no expectations to increase or to drop, all the yield groups should be flat. If there are expectations of increasing interest rates, the yield groups should have award sloping and effects there are negative expectations.  
It should go down. Make sense. So by thinking about its patience.  
We can have positive.  
Normal or negative expectation? Make sense? Yep.  
So considering expectations, there are no there are hypotheses regarding expectations. We assume all these hypotheses. There are no transaction costs. The versus are risk neutral. And what does this mean?  
It means that you can by looking that you prove, just think about expectations and if you just focus on expectations.  
Thank you.  
This forward rate or the spot rates, we can calculate forward rates and forward rates told us about what Federal Reserve is about to do and what are expectations regarding growth. Make sense.  
If there were just expectations, this will be as simple as I have told you. Things are going to be simple, but you should consider one more thing, yes.  
And here's the second idea. What do you prefer to have the money in your pocket or into Federal Reserve pocket or into the Treasury pocket or into the government pocket?  
Yes.  
Make sense? Everyone preferred to have their own money into their own pocket than into some others pocket.  
Make sense? So if you lend me money and you should choose between having your money back in one year or having your money back in two years.  
What you will prefer in one year. So at the end there is also something called something called the we the.  
Speak preference.  
What does liquidity preference tell us?  
That people prefer to have their money in their pocket, and people prefer to have their money the sooner the better. So if you ask me.  
Good morning in the future. So if we might imagine you issue polls.  
And so if we think about liquidity preference.  
30 year goal should have a higher team and a 20 year and a 10 year.  
Yeah, because I prefer to have the my money. The sooner the better. So thinking about liquidity preference, how the slope of the yield curve should be.  
Always, always upward.  
Always posted it.  
Always posting.  
All of you are with me. We are near. We are so close to the end.  
When looking at the year curve, we will always have these two.  
Effects. On one hand, we can look expectations, but also there is the second effect of liquidity preference.  
So.  
It's our expectation and this is the perfect. Now let me write here. Let me draw.  
Three you what is going to be?  
Possible, yes.  
Another one is going to be also positive, yes.  
Always pick this future.  
Another one is going to be negative. Yes, what I want you to see, I'll let you take another.  
Imagine expectations be great.  
Here expectations are positive, yes.  
Would it be possible to have?  
Negative expectations.  
And because of this is liquidity preference and this is liquidity preference, you see what I mean?  
If they're slow.  
If the slope is positive.  
What can we say regarding expectations?  
Nothing. Why? Because I don't know if there are positive expectations or negative expectations. What I know is that there is negative prevalence that could be higher or not that expectation. Make sense.  
There will always be people who prefer always to have their money in their pocket than to some other pockets, yes.  
So if the slow of the gym group is positive, what can I say regarding expectations?  
OK.  
But what if the slope is negative? How expectations should always be? Sorry, how liquidity preference should always be positive. So if the slope is negative, what must be true?  
That expectations.  
Are never make sense.  
The new group is flat.  
That this is something that I can argue in the final. If the year proof is flat, there is always degree dependence. So always, always how are expectations? If the year proof is flat, expectations should be negative.  
Make sense?  
So we are. We are almost done.  
Regarding expectations, you can calculate the forward rate as we have done. I mean you can always calculate forward rates no matter if we are talking about expectations or not, but I want to know what does a positive or negative deal prove?  
Me, yes. And in this case, if we are just talking about expectations by looking, by looking expectations, we can know if interest rates are about to grow or to decrease, yes. But what is the problem that there is not just expectation?  
Why?  
Problem with efficient with expectation hypothesis, you could thunder efficient is flat on average, while in the data it's upward sloping 90% of the time. A patient normally.  
Are flat and 90% of the time if you look at the new move, it's upward slowing. Why? Because of not just expectations matter, also liquidity preference.  
Yes.  
When the investors are risk averse, they care not to only about the spec short rate, but also about its volatility. Investors in long term bonds want to be competitive. Yes, this is the premium you were talking here. Does this make sense?  
Well, you should understand. Oh, so at the end this is expectations and also there is a the liquidity premium, liquidity preference, yeah.  
And in this sense, if the yield group is positive, I cannot say anything regarding expectations, because in this first case, this is what I have wrote there, you have positive expectations.  
But in this case you have never negative expectations, but because of liquidity preference it makes positive the slow. Make sense.  
And if the yield curve is negative, what can you say that expectations are negative?  
So why does the term structure look like it does? Because of expectations plus the liquidity preference, yes, and this can help us understanding.  
Is recourse and how does the economy react? I'm not going to ask this careful because since year 2008, Federal Reserve is printing money as if there were no future and this also.  
Is something if you bring money.  
Because now now SP500 is maximum, Bitcoin is maximum, gold is maximum. Housing, housing market is also maximum.  
There is a lot, a lot, a lot of equity. There is people buying the deep. What does to buy the deep means? You have your private banker and you got your banker. In case Nvidia goes down by 5%, buy.  
In case Nvidia goes down at 2% by these people with who is what a buffet now more than 300 billions in liquidity. What I what I want you to see that on one hand we have balance.  
But also there is a lot, a lot, a lot of liquidity. Personally, I wouldn't deny having said this in public in an American university, but what is the biggest father, father of all?  
I don't want to say the dollar. Probably I'm thinking about the dollar itself.  
Because if you bring too much dollar, what are you doing? Imagine that. Why the SP500 has this price? Why Bitcoin has this price? Because you measure Bitcoin. Why gold has this price? Because you measure gold, gold, gold, Bitcoin.  
You see both makes sense.  
A conclusion, this phenomenal. Next day we will talk about, yes, with any questions.