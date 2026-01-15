---
Título: Foundations of Finance – Session 4 - Performance measurment
Fecha: 2025-09-10
Curso: Foundations of Finance (Fall 2025)
Sesión: 4
---
# Sesión 4 – Resumen esquemático

**Tema central:** Medición de retornos (performance)

---

## 0) Recordatorio inicial

- Repasar ejercicios de la sesión 3.
    
- Empezar con **Problem Set 1** cuanto antes.
    
- Todo gira en torno al **valor temporal del dinero (TVM)**, ahora aplicado a **rendimientos**.
    

---

## 1) Definiciones clave de retorno

- **Fórmula general del rendimiento:**
    
    R=(FVPV)1/t−1R = \left(\frac{FV}{PV}\right)^{1/t} - 1
- **Performance:** mide la eficacia de la inversión.
    
- Problema de **lenguaje**: un mismo término puede significar cosas distintas según el contexto.
    

---

## 2) Compounding y tasas equivalentes

### 2.1. De periodos cortos a anuales

- 1% mensual ≠ 12% anual simple.
    
- Con capitalización mensual:
    
    (1+0,01)12−1=12,68%(1+0,01)^{12} - 1 = 12,68\%

### 2.2. APR vs EAR

- **APR (Annual Percentage Rate):** tasa anual nominal, sin considerar el efecto de la capitalización.
    
- **EAR (Effective Annual Rate):** tasa efectiva anual, incorpora compounding.
    
- Fórmula:
    
    EAR=(1+APRm)m−1EAR = \left(1 + \frac{APR}{m}\right)^m - 1
    
    (m = nº de periodos en un año).
    
- Ejemplo: APR 12% con pagos mensuales → EAR ≈ 12,68%.
    

### 2.3. Capitalización continua

- Límite al reducir infinitamente los periodos.
    
- Fórmula:
    
    FV=PV⋅ertFV = PV \cdot e^{rt}
- En práctica financiera se usa poco, pero importante conceptualmente.
    

---

## 3) Holding Period Return (HPR)

- **Definición:**
    
    HPR=FVPV−1HPR = \frac{FV}{PV} - 1
- Problema: no distingue duración de la inversión.
    

### 3.1. Annualized HPR

- Ajusta por tiempo:
    
    HPRannual=(FVPV)1/t−1HPR_{annual} = \left(\frac{FV}{PV}\right)^{1/t} - 1
- Ejemplo Coca-Cola:
    
    - Comprar a 42,39 → vender 6 meses después a 44,30.
        
    - HPR simple ≈ 4,5%, HPR anualizado ≈ 9,2%.
        

### 3.2. Con dividendos

- FV = precio de venta + dividendos cobrados.
    
- Importante: **siempre comparar inversiones con HPR anualizado** (evita comparar manzanas con peras).
    

---

## 4) Zero-Coupon Bonds y sensibilidad a tipos

- Ejemplo: comprar por 435$ un bono que paga 1.000$ en 10 años.
    
    - Rentabilidad anual (YTM) ≈ 8,68%.
        
- Si se vende antes del vencimiento, la rentabilidad depende del **precio de mercado**.
    
- Relación fundamental (repetida):
    
    - **Si suben tipos → baja el precio de los bonos.**
        
    - **Si bajan tipos → sube el precio de los bonos.**
        

---

## 5) Internal Rate of Return (IRR)

- Definición: tasa que hace que el **valor presente neto (NPV)** de los flujos sea 0.
    
- Útil cuando hay **múltiples pagos en distintos momentos** (ej. dividendos).
    
- Con Excel: función `=IRR(...)`.
    
- **Nota:** en este curso importa más **HPR anualizado** que IRR, pero IRR es clave en finanzas reales.
    

---

## 6) Conclusiones de la sesión

- Retornos clave: **EAR, HPR anualizado, IRR.**
    
- Comparar inversiones **siempre en base anualizada**.
    
- Entender más que memorizar: fórmulas se derivan de PV y FV.
    
- Focus para la práctica: **Problem Set 1** → aplicar fórmulas y acostumbrarse a Excel.
    

---

# Transcripción
Were you?  
For 2025, yes, please have you.  
I think so.  
So it's somewhere.  
OK, today's class sees a continuation of of last day's class. They will continue working on time.  
This goes from one side.  
Yeah.  
Yeah, is missing. Yeah. No, it's because I was going to take attendance. I was thinking about Leah's pain. I thought that she was.  
OK.  
Jeffrey. I didn't remember it. Your name. Jeffrey. Sorry.  
Casey. Casey.  
Can you see it?  
Yeah.  
Bro decent Nicholas Perla.  
And yes.  
Any questions regarding last last day?  
I strongly recommend you to go through all the exercises we did in class last day and to start looking at problem set one. The sooner you start the better because.  
I think that we can do almost at almost everything that we are close to do have a problems in one. Now you will have all the information. Yep.  
OK.  
Present value is equal to future value over 1 + r rise to D Yes, present value. How much 110 euros will work today at a 10% rate?  
They're 100, sorry, 100% rate at 100 in one year, 101 in two years. Makes sense.  
What is performance? What is performance? What would I be looking for?  
What is performance yet?  
Revenue.  
And where can you see revenue from?  
We're going to see how well are you doing things in that form.  
But in order to in order to know future value, you need present value. OK, present value is 1000.  
You sure my name is bugging you.  
You will get performance in the relationship between present and future, right?  
Hello.  
Then we don't. Then we don't. If you do a 10%, you are doing better than if you get a 5%. By the end, where are you going to look at the performance? Then we don't. What are we going to do today?  
Total return. Careful, careful because one of the difficulties we are going to find in this class has to do with language. Language. We will use different words to talk about same thing.  
Or depending on the context, one thing could mean one thing or another one language.  
It's called at the beginning. Language is hard. Once you practice language, the more you practice, the more you you are going to get to language and they sure will be. Make sense. You understand what I'm saying?  
Performance today's class.  
This class.  
He's calculating.  
Ah What is R? The relationship between.  
It's your value over present value 1 / t - 1 make sense.  
Today, the name of the game will be calculating returns. Returns.  
Let's complicate things a little bit.  
OK, first idea.  
Travels of Willy Bear. Do you know Willy Bear?  
Have you seen this story?  
There are two travels. In one travel he was with little people, he was a Yaya and in another travel he was.  
A little one and he was among. Yeah, yeah, you understand what I mean. Universe size was always the same, but depending on who you are with, you are small or yeah, yeah, with this it will happen the same.  
What I will look always what what I will always try and always is an applicable. What I will try to do always for me the important thing is one year basis.  
One year basis.  
If I told you at 2%, normally I would think about one year and in this in this search in this quest.  
01 year this.  
First part of the class when talking about compounding, what are we going to do? We are going to work.  
In a one month base, how many months that are within a year?  
What?  
How many quarters that are in one year or we will go from one month to the year, from quarter to the year. You see the point, no?  
We will move from this size to a year basis, yes, and when talking about multi periods.  
What are what are we going to do? We are going to go from a multiple time to a year basis. At the end we are looking for one year base. Make sense?  
So.  
Now in this we are going to start with the compounding, then we will talk about multi video and what is the APR annual percentage rate? What is the effective annual rate? What is the holding period?  
Return and what is the internal rate of return? What are all these things? We don't rates and as you can imagine, each one is different from the other one.  
Among all that race, among all that race.  
I've got. I don't have that.  
I want a tattoo. I don't have this tattoo. The first thing is the heart. Yes, the heart. The first thing is written is the name of my wife. Yeah.  
OK, a  
Then the name of my three kids, Luis, Paolo and Alico. Instead of Luis, we said that because I'm Luis also and we said it's like little. Yes, this is almost taller than me.  
All things that are written inside the tattoo are important for me and then.  
We can also.  
I in both in Spanish and in English here that is in in Spanish and slash IRR.  
I have a internal great operator.  
There are a lot of women in the world, but Diana, there is just one that is my wife.  
There are a lot of returns in the world. We can talk about returns, but you understand what I'm trying to transmit. You know, there are a lot of EEAR, if I'm already so important.  
Per person, not too much. Holding period return for this course is going to be absolutely, absolutely, absolutely important. But normally if you work in finance, IRR, anyone have heard about IRR?  
That's how they are before.  
Jeremy, have you heard about IR? No, no. If you work in finance, normally you heard about IR. IRR matters, yes. But what I want you to understand is that there could there are a lot of rates, but we should be significant what is important and what is not.  
That's important. OK, let's start with the compounding part. So with a month base, yeah, this is what I have for you. APR and AF hepiton array has to do with an HPR and IAR has to do with multiple figures.  
Yep, let me APR. OK.  
So you before looking there.  
Yes, I have one year divided into 12 months. Make sense.  
I am going to receive a return of 1% monthly.  
1% monthly. How much I will get within a year?  
I have a 1% monthly return. How much I will have within a year?  
Careful because when percentage 12 * 1% but.  
This class almost everything will be compound. Make sense I put my money at 1% yearly. How much I will get after 12 months. Let me show you that is relatively simple.  
With this formula, yes.  
I put.  
100 yes.  
How much I would have after one year?  
One class.  
1% No, this is what I will have after one month. Makes sense. How much will I have after 12 months?  
These rise to 12. Make sense?  
Don't you agree with me, Jake? Yeah, I did.  
And what I what I have asked asked you how much will I have have after one year so in order to know how much this will be in one year time.  
One plus.  
They're raising a year basis. You see the point, no? What are you looking for?  
Can I take a take out this and this?  
Yeah. Awesome. So at the end.  
This equation.  
This idea one plus.  
1 + 1% rise to the 12th.  
1 + 1% raised to the 12th is equal to 1 plus the equivalent rate in an annual base. Make sense?  
This equation is going to be important, not just for today. We will talk about this equation several times.  
I want you to understand things. I don't want you to memorize. And after this we will see an equation that but you understand this point, no?  
Yes.  
Let me make a spoiler, small spoiler of something that we will see the next day.  
Did you tell me?  
12%.  
You tell me one person what you are doing, 1% + 1% + 1% + 1% plus. You understand the point, no? You are some if you do things in this way.  
You are not. If you do some, you're doing arithmetic. But if you do things this way, what you are doing is.  
Me, the geometric average.  
What I want you to see is that what are we doing here? Summing but in a compounding way. We are summing 1% + 1% + 1%, but not summing in a traditional way. We are summing in a geometric way. Make sense or not?  
OK, this is something we will see.  
OK. Have you understood that?  
OK, if you have understood that, it's simple. How are we going to go be free?  
Effective annual rate, yes.  
This one person has a name. No, this 1% is 1% in a monthly basis. It doesn't have a name. What has how do we work in a year basis?  
What is? Again, here you're right. What is the APR?  
OK.  
ABR over B.  
APR over T is 1%, so how much is the APR and one person takes rate 12%?  
Makes sense.  
Effective annual rate is 1 plus APR over T rise to.  
T -, 1. Now in the APR, what is the APR? This example 12%. You divide the APR over the periods of time and you will get the effective amount. Sorry, you will get the monthly basis.  
Then you do this and before it makes sense.  
So with this in your head.  
Lenders are, yes, APR rate per period. For example, a loan that charge 1% monthly, the APR would be 12%, yes.  
Is 12% per year the real cost?  
No. Why? Because at the end you are not going to pay a 12%. Interest rates gets compound.  
So you should calculate the effective annual rate.  
What is the effective annual rate? This is the formula that you have there. Yes, this is the same formula that you have on the on the blackboard and let me calculate.  
I have a PR, please.  
Yes.  
12%, yes, and by knowing APR is 12%, I can calculate the effective annual rate.  
Right.  
I can calculate the hectic annual rate by doing the formula again.  
I want these. I don't know why they think whatever.  
One plus.  
The APR over 12.  
Rice to 12 periods of time, yes.  
-1 and this is going to be.  
Almost 13.  
We love to work in a year basis and we love to work with compounding. I don't like this 12%. Why? Because in this 12% I don't know what is going on if I want to talk about real cost.  
I will look at the effective annual rate. Make sense.  
Which loan is cheaper, a 12% compound annually or a 12% compound monthly?  
Which one is cheaper?  
The annual, the annual, because in the annual you will pay at 12%, but in the in the one monthly at the end you will pay, you will pay.  
The effective annual rate that would be 12.6% make sense.  
OK, now uh.  
Continuous component. What is the point here?  
The point please, Sir, time.  
That one, the one before, the one that we have seen is something a monthly basis. Can we do it in a daily basis? Absolutely, yes. And can we reduce time more? Yes.  
The shorter the time, the shorter the time.  
The closer we will be to.  
This is the.  
It's smaller writing.  
Writing T sandwich will be the same, yes, as T gets shorter. I don't care to write one thing or another one. What is the point with?  
What is the point with this formula?  
That if you are working with continuous time, what is the derivative from this?  
What is the developing of this, Sir?  
The relative is itself. If you are working with continuous time, it would be easier, simpler and work with this one.  
That we are not going to work with. We are not going to find difficulty with this, yes, just information.  
For me, the important things are the ones that we saw the other day. The example that we have just done and example that we will compute compute, yes.  
What is this is like noise in terms of understanding?  
Makes sense.  
OK, recount effective. How did you make a loan seem cheaper by dividing it into small periods of time and just working with the APR?  
So if you want to prepare scams, no.  
Oh, but careful because whatever.  
OK, personally.  
Working with small periods of time is important, more even if you are working in consumer loans, with consumer loans or with clients, but normally in finance we will move into multiple periods of time.  
Yep, holding period return. What is the holding period return?  
What is the holding period return?  
So simple I have 100.  
I have.  
Present value my investment 100, yes, the money that I received back 110.  
What is the holding period return 10%?  
How long? That's not when thinking about the holding period return, it does not matter how long you have present value, future value, 10% is the holding period return, yes. And we will see later today that instead of talking about the holding period return, we will talk about the.  
Annualized holding period return. What is the formula of the annualized holding period return? Instead of writing R, we will write HPR. What is the formula for the annualized HPR? That one, yes.  
I want you to understand because it can sound confused. I mean it's confused. It's confused.  
HPR without considering time. If we consider time, we will talk about annualized HPR, yes.  
But we will not talk with it. We will not work with each year. We will always work with annualized 8 year.  
And because we will always work with annualized HPR or we will call annualized HPR.  
You understand what I'm saying. Today is the only day where when I will distinguish between analyzed X year and X year. Normally all X years we will be talking about will be analyzed X years. Make sense.  
OK, let let's see examples and with examples this is much more simple. And when I said HPR is the formula that you have in the blog on the blog, yes.  
And normally all HPRS will be annualized at HPRS. Yep.  
Now for a stock, for a stock, same future value over present value, future value over present value. But if you put a stock.  
You own a stock. What is going to be future value of the stock? Your value, but together with the dividend, the dividend are the stock goes up. I have in my pocket a stock. Yes, how much I will have in my in my pocket in one year.  
The stock has a dividend, dividend split from the stock that is part of future value. So future value of the stock is.  
The price one year plus the dividend makes sense.  
All the ideas by itself are simple, but is a problem that I am introducing or words, stocks, dividends because of these things would sound complicated.  
Any questions?  
OK, uh.  
This example you both Coca-cola serves. Let me do first the first Coca-cola serves for 42.39.  
42 point.  
42.39 and sold them six months later for 44.30. Suppose there was no dividend payment in these six months, Yep.  
Let me come here and a new one.  
Hey.  
Coca-Cola search for 42 you vote.  
Let me call it present value, yes.  
Six months later.  
I am selling them for 44.  
Let me call this future value 44.  
.39 yes no yes no 44.30.  
What is the?  
HPR and what is the?  
Annualize HPR. Yes, the HPR simple future value.  
Over present value -1 make sense.  
We will never work with the eight. All the HPRS we will work with will be annualized at HPRS. Make sense.  
What is the annualized XPR? Here we should take into account time.  
It's your value.  
Over.  
Present value, yes.  
Rice too.  
1 / T 1 / T yes.  
D is to be F.  
He he's here.  
All my sis, all my year, OK.  
This 4.51 / 2 and 1 / 1 / 2 E two.  
Rise to the 2nd if.  
minus one. Make sense?  
So I am having annualized the HPR 9.21 make sense.  
Yes.  
And me.  
Please, Yep.  
Now let me do the second one. I vote KO search for 39.6339.  
39.63 This is present value.  
And I'm going to sell them two years later for for 45.3742. I have here the 42.37.  
And there is just one dividend that will pay will be paid at the end of the second year of 1.12. So I am adding the dividend here. I am doing 42.37 plus.  
Blas the Indian. Make sense?  
So I will have feature value will be 43.49 got it.  
Let me calculate the HPR. The HPR is going to be.  
Future value over present value -1. Yes, how much?  
9 points and 74%, yes.  
The name of this class is performance measurement. No, I'm going to ask.  
Where where I am? Where am I making more money?  
4.51% or 9.74%?  
I am making more money here, no?  
Careful.  
Because here I am comparing apples with oranges.  
I cannot compare something that is been paid in a six month base with something that is paid in a two year base.  
This is why we never use normal HPR and we call annualized HPRHPR because if you want to compare this investment with this one, don't look about.  
This number look about the annualized HPR. You should calculate the annualized HPR and what is the annualized HPR is future value over present value.  
Rice too.  
One overtime, 32 years, yes.  
-1 and if we got this number where we can see that in annualized terms.  
What is going on here? What is going on here?  
That the perform performance is half. Here if you compare this with this one, it looks as if performance were double, but reality tells me that performance is half.  
Why? Because here I'm I'm having more money in the second, but I am having more money back in four times compared with the first one. Make sense.  
Let me save these, save us, save us.  
Rose.  
Sesumo.  
Got it.  
OK, let's go. This is analyzer HP.  
That's good to you. Any questions?  
OK.  
4 zero group of bones. What is a zero group of bone?  
A bond without couples. What is a zero coupon bond? The most simple thing you are going to find in finance. You pay something and how much you will get in one year time, two years, how much you will get at maturity.  
Face value.  
Please value.  
No, this is not a zero coupon bond. This is a bond with coupons. This is a zero coupon bond. Face value of those is 1000 instead of 100. Make sense. How much you are paying? You are paying $435 today you are paying.  
$435 today in order to get.  
1000 within 10 years, yes.  
1000 within 10 years.  
What is the return? The HPR. Last day we saw how to get this return. Yes, let me write this here. Price is 435.  
And.  
Face value. This is present value.  
Future value 1000 and what is the return HPR is?  
Future value over present value rise to.  
1 / 10.  
-1 I have forward one parenthesis.  
Yeah.  
What is the ring?  
No.  
It's about you now. Thanks now, Rice.  
It's a point.  
Do you understand this? Careful because.  
I am going to start increasing the heat of the temperature of the water. Yes, careful.  
After one year, after one year, I have bought it thinking that 10 years are going to pass and after 10 years I'm going to get 1000, yes. In the meanwhile I'm going to get an 8.68%, yes.  
I'm going to change the plane, the plan. I'm going to change the plan, yes.  
And I'm going to sell this bone after one year. What is the question that I'm going to ask if I sell the bone after one year?  
What is the performance of my investment? How much money I have got? Make sense?  
After.  
One year, yes, after one year.  
What should I know? What should I? What? What should? What is the data? What is the what? What I need? If I am told that I am selling the bond, I need to know the price, the price. I need to know the price and I have.  
Four different scenarios 460460.  
400 472 point.  
758758 and 480.  
Make sense?  
What is the HPR?  
How do I calculate a spear?  
Rise 2 because it's one year -1 yes.  
And here same thing, no.  
For a 472.  
Future value over or 135 -, 1 makes sense.  
And.  
Year 480 / 435 -, 1. Got it.  
This is a person page.  
And this is a.  
You understand the point.  
I have bought it at one price willing to get.  
An 8.68% of return, but instead waiting to maturity what I have done, I have sold it before.  
Make sense?  
If I am saying it's because someone is buying and the new buyer, what the new buyer is going to do? He's going to keep this and wait till maturity, no?  
What I'm going to calculate gates here from the new value.  
So I'm going to calculate this HCR 1000 over the price at which it has got it price to 1/9, 1/9 make sense.  
Let's do this quickly.  
For the new buyer for the new.  
By yes for the new by.  
1000, yes.  
Over 460.  
Price two 1 / 9 - 1 yes.  
8.01.  
What I want you to see, what I want you to understand.  
How much I was thinking in getting 10 years time.  
8.68% year make sense?  
What if I buy this cheaper than the price at which I should buy? I will be losing money. Excels.  
And because of that, instead of getting an 8 point, I am in 460. Yes, instead of getting an 8.68%, I am getting a 5.75%.  
I am losing money. I'm not getting an 8.68. I am getting less than expected. Yes, if I am getting less than expected, this because the new buyer is getting.  
More and because the new buyer is getting 9 point or what? So if you so if you sold, if you sold it at 480, it would be the right decision instead of waiting for the I mean and if I said it.  
If I am the seller, if I sell it at 490, I would be more happy. And it's a negotiation between two parties, but for the for the seller.  
480 is great. If it is 500, it would be better. The point is you are selling something, the higher the price the better.  
And what can you see here?  
But I am losing this because the new buyer, but I am selling. What I am earning getting is because.  
Anybody here? Yeah. Make sense?  
Where does this price came from?  
Where does this space come from, Javier?  
Trying to sell, I will be more here than here. If someone needs to buy, we'll be you understand the point, no? And normally we're looking at these prices. What matters is not the price, what matters is.  
The rain. What is going to happen next Wednesday?  
And it's going to happen next Wednesday.  
This Wednesday, Jerome Powell is going to talk. Why Jerome Powell is going to say next Wednesday. We don't know yet, but let's let me go to Polymarket. Who knows Polymarket?  
I asked this question and in my head is like doing a survey. There is always one or two people that knows Polymarket. Let me go to Polymarket. I love to see Oliver there Polymarket.  
Here is Polymarket.  
Where is Polly Market? Please have a look saying.  
Bed house, the blockchain is decentralized. There are people bed or for example, New York City. Are you aware that? Are you aware that there are elections in New York City?  
We wrote. We wrote.  
If we are talking about ethics.  
There is something to say regarding this. You understand what I mean, betting with human lives.  
How many times are gonna die? How many children are?  
Yeah, and in this moment, this is not how many children are going to die in Palestine today.  
You you see what I'm saying? You see how disgusting, how the right I I don't want to leave ethics outside the class.  
That that this exists.  
Super Bowl Who Will Win?  
Any cadence has to do in New York?  
Book.  
Please write and on mass number of fluids in September. Yeah, I mean.  
Look the first one.  
Look which one is the first one.  
Red decision in September.  
Now we are going to comment this one and let me look for it. Oh well, September.  
September.  
2.  
Oh, I'm looking for.  
A bad speech.  
Sorry, I want to see it. Oh well.  
Well.  
Said them better. I'm looking.  
Yes, this is what I was looking for. Let me start by this one, yes.  
Let me start with this one. Here you are.  
Bad decision. Let me start with the one. Yes, bad decision in September. What Trump is going to say? What? Sorry Trump, what Powell is going to say.  
Trump is gonna say with 80 percent, 82% of of not probability. Careful, it's not probability. Let me.  
But 8088% of it says that he will decrease drop interest rates in 25 basic points, yes.  
25 basic points.  
This is not probability. Why? Because it's based on people sentiments, but also there are people that.  
You know, we're thinking that 50% of time. So there are people that are not betting anymore in 50 basic points. You understand what I mean? Anything say what is the probability of, you know, Paul would say 25 basic points.  
Personally, I think that is more than 90 will be 95, but there are people that has left long time ago and these beds, they cannot change what they said. You understand the point, no?  
Make sense?  
That does that mean that there's $91 million in bets on this?  
Yeah.  
Yes, you get it right.  
In this case, there is if if you bet.  
You can pay for yes or no. Careful, you cannot base with dollars. You should pay with.  
Victor. And in order for a 50 guests. I don't know. I have never been. I probably if you bet now.  
You will get for 50 basic points, yes, it's hard and they are paying. If you get $1.00 probably you will get 14.7 wait for no because now I'm like sorry, sorry, sorry, sorry, sorry.  
Q Sam 40.7 and 85, it sums 100, but the end is a zero sum game.  
Oh, you will get paid? No, no.  
How much you will, but 5% is now at 14.7 inches.  
Find this.  
Great. Can you buy this?  
Oh, so happy.  
And you can buy or sell. Sells has to do with shorting.  
It's the first time I touched this button. I have been following Polymarket for a long time, but it's the first time I touched this button.  
Now, what will Powell say during September?  
Will power say inflation more than 40 times?  
50 * 60 times.  
Will will Powell start saying good afternoon?  
There, if you Google it, Jerome Powell saying good afternoon means good news. Jerome Powell saying something else. I mean today, no, but there has been bets regarding the color of his tie. What I want you to see is his speech.  
Who? Who follows his speech? Everyone. Goldman Sachs has people analyzing the markets react to each word, he said. This is the most important speech in finance.  
I will talks each month.  
Do you understand that this is important?  
If you are Catholic, you will follow Pope's speech if you believe in dollar.  
You follow this speech.  
Look recession will power say from.  
I am sure, absolutely sure that he won't say why.  
Because Powell is independent and being independent says having distance with political, fiscal, with fiscal policy, sorry, with political, with fiscal policy and you see regarding these things.  
And.  
Look.  
That is not will power say tariffs. Now that is will power say tariffs more than 50 times.  
He won't say Trump, but he will say it. It's because Paul is looking and I think that's part of it with Trump, with Trump, with Trump, with power, say Trump.  
I would, I still don't know, but by saying that is.  
Why I'm saying this?  
Because.  
Important thing is not here. Important thing is here. All these tries will change because interfaith changes and depending on powers, see the interest rates will increase or grow. And what if what happens if interest rate grow? What will happen when we place your votes?  
3.  
Interest rates drops.  
What happens to better rates? No, this is the rate.  
No, no. What happened when you place a bond?  
Four weeks, you see what I'm saying?  
If the race drops, we go up, we wear it, we make one.  
In the drinks, increases.  
Make sense?  
Wait, if interest rates fall, the price of bonds go up?  
I don't want to explain it here. I want you to understand it here.  
I'm going to do this more than 100, not 100. You done it. You done it.  
If interest rate drop, that is a bond will go up. This is something that will go in an automatic way, yes.  
OK, save this and let's continue here after one year after one. Yeah, perfect IRR average. What is the point in order to calculate the HPR?  
I need to have my money one time and the money another time.  
What's going on with IRR that, for example, in the moment I can have pupils and have pupils that are being paid in different time?  
Let's see one example and you will fully understand this. Make sense.  
Let's see.  
One example.  
IRR for a zero coupon bond is simple. IRR for a zero coupon bond is the same as the HPR. IRR and annualized HPR for a zero coupon bond is the same. Why? Because there are no coupons.  
Make sense?  
Yes, I'm a.  
And.  
Yes, Coca-cola, Sir.  
What is it? What is it? No, I said. If you I don't like like.  
Coca-cola, you go to answer two years ago for 39.663 and dividend one point at the end of each year. Tell the Sir for 40. OK, yeah.  
Yeah.  
1/2.  
This exercise will help you with one of the exercises regarding problem set one that is a little bit more complicated, the one with the dividends, yes.  
You bought one Sir two years ago. Two years ago is today and two years time it will be whatever 39.6339.63, yes.  
This is the price at which I have voted. When talking about internal rate of return, the money that go out from my pocket is negative, yes.  
I'm going to have 1.12 of dividend 1.12 and not only I will have 1.12 of dividend at the end of each year, but also I will sell the serve for 44.3 makes sense.  
I'm going to calculate total cash flow that is just summing this and nothing and dragging. I mean all these things make sense.  
What is the internal rate of return? How do I calculate the internal rate of return? In order to calculate the internal rate of return, I should solve one equation that is a little bit complicated because I should calculate what is the rate at which.  
Press and value features close match meet. Make sense? No, let me look.  
I'm gonna calculate it.  
Let me show you.  
Hey.  
Jake, tell me a percentage, 5 percent, 5%, yes, I'm going to calculate present value.  
One plus at the 5% rate right to the first make sense.  
And I'm going to calculate present value 45.  
1 + 5% rise to the second, yes.  
41 And then I'm going to calculate present value of 39 is 39, yes.  
I'm going to calculate the present value by summing this. The sum of this, yes?  
I have calculate present value, present value and present value and I have done this also. Another way in order to do it is net present value.  
At which rate? The rate is 5% of what? Of this? And the number is the same. Oh no. Oh no, no, no, no, no, no, no, no, no. Sorry. I don't want to make misunderstanding.  
So very interview. Sorry for let me stay last this one. Yes, because net present value formula.  
Starting year one does not start in year 0. How much is 3939? You understand what I'm saying? You calculate this.  
I.  
I want to cry. I want to cry.  
Uh.  
Why do why do I complicate my life too much? Sorry, the same value of this one.  
Plus.  
This number and this one should be the same.  
I don't know why they don't match.  
I I'm stop.  
5% of this and this.  
Great value value.  
This is correct. What I'm doing is correct. I don't know why I'm doing something wrong.  
This is one.  
Yeah, I know also.  
I I'm not. I am. I should calculate net present value of these values.  
You see what?  
Sorry, I'm getting nervous. No, it's this professor. I was going to throw him something. You see the point what I'm doing. This is net present value at a 5% rate, yes.  
What I'm looking, I'm looking for this number be equal to these numbers. Yes, I'm looking for the rate that will make this net present value 0. If it is, if I increase 6%, let me see 5% six.  
Devin, tell me.  
Eight, nine. You see what I'm doing?  
088 point tell me tell me.  
What I have done in order to get in order to get this number and this number and these two numbers is the this is the same number, yes.  
In order to get this number, I made the sum this plus this plus this. And what is this? Present value of this one and present value of this one, yes.  
All of you are with me and this is the same as doing calculating the present value. So what I'm doing there, so simple.  
And present value is equal to.  
The price at which I am buying this, yes, plus first cash flow over one plus the rate rise to the first plus second payment, one plus the rate rise to the second, yes.  
Why this is negative? Because this money is going out from my pocket. What is this first dividend? What is this second dividend plus the amount of money that I'm receiving because I'm selling the stock? Got it? Yes.  
Now 8.58.6 no 8.58.4 yes 8.418 .428.45.  
8.47 Yes, you know what I'm doing.  
What is the quickly way in order to calculate IRR? So simple I equal to IR.  
And the people has changed.  
Uh.  
OK.  
Equal to IRR, yes.  
That is a point.  
You see what I mean? Several things, several ideas.  
You don't need to work with IRR in this course.  
You don't need to work with IRR in this course. Probably in the problem set you will be asked to calculate IRR, but IRR is not important for me. Yes, for life is important, but from today's class.  
HPR Yes. Why IRR matters? Because normally you will receive money different times. Calculating IRR is so simple with Excel, but whatever, yes, what is IRR is the rate that makes net present value 0?  
Coming back here, what is the analysis at HPR? If you can reinvest the dividend at the internal rate of return, let me reinvest the dividend. IRR is this one. Yes, make sense. I am going to reinvest the dividend. How do you reinvest the dividend? This is important for the exercise.  
For invested in this.  
Getting from this dividend in one year, 1 plus the rate, yes.  
If I reinvest the dividend, future money I'm going to have is this. This is total amount of money that I will have. And what is the annualized HPR? I'm going to have 46 over.  
I am regretting of putting these side negatives over the amount of money that I have invested, yes.  
4.  
I have had the dividend. I reinvest it at the internal rate of return. What is going to be my annualized at HPR? The internal rate of return? Because if I get the RI reinvest at R, how much I'm going to have R make sense?  
Yeah.  
8.4775 What is?  
What is the annualized SPR if you can reinvest the dividend at the internal rate of return? Yeah, IRR.  
So annualized HPR and IRR are returns, but because time is different, because time effects are different, we should distinguish between 1:00 and another one. Make sense?  
And then?  
Then.  
OK.  
You have this, you solve this and you will get the answer and we are running out of time. Conclusion. Effective annual rate is important and annualized HPR is important. IRR is also important, but don't get to don't complicate your life too much today with IRR. Yes, focus on HPR.  
What is?  
Next day we will have more. Enjoy the weekend. I love to say this on Wednesday.  
Let me share this. Would you tell me things? Yeah, I'm going to Portugal to see my mom this weekend and I know that we had the travel thing mapping Madrid and I know it's from five. So is there something else I can do?  
Enjoy with your mom and Sintra. I'm going to give a bit. My family's from a small village in northern Portugal. Then the small village, take pictures from that small village so you can submit the I mean there.  
And also I can say that you were with me in whatever. Oh yeah, Ethan, I have really like how fast you have gone to death.  
Yes, he was in the flea market. I know I can remember. Yeah, we enjoyed. Yeah, it was. It was fun.  
See you. Thank you.

![](file:///C:/Users/lgarv/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif)**Luis Garvía Vega** ha detenido la transcripción