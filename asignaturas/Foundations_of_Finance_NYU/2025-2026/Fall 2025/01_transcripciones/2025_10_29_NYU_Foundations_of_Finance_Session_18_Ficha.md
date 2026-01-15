# Teaching Log — Session 17

## Objetivos de la sesión
- Repasar **precio de bonos** vía valor presente de flujos (cupones + principal).
- Diferenciar **coupon rate vs current yield vs YTM (IRR) vs EAY**.
- Entender **HPR** con **reinv. de cupones** y su relación con YTM.
- Visualizar la **relación negativa y convexa** Precio–Yield como base para **Duración/Convexidad** en la próxima clase.
- Mantener fresco **PS4** (PVGO, ROE vs K) y lanzar **PS5** (escenarios de bonos y HPR).

## Resumen de contenidos impartidos
- **Mapa de bonos**: emisores (público/privado), madurez (bills/notes/bonds), tipos de cupón (fijo, flotante, IL), liquidez y estandarización.
- **Precio del bono**:
  - Zero: \(P=\frac{FV}{(1+r)^T}\).
  - Con cupón (anual): \(P=\sum \frac{C}{(1+r)^t}+\frac{FV}{(1+r)^T}\).
  - Intuiciones: par/prime/discount; si \(r=coupon\ rate\) → precio ≈ par.
- **Rendimientos**:
  - *Coupon rate* (sobre FV), *current yield* \(=C/Precio\), **YTM (IRR)**, **EAY** \((1+y/2)^2-1\) para semestral.
- **HPR**:
  - Definición con reinversión de cupones; dependencia del **tipo de reinversión** y del **precio de venta** (yield al horizonte).
  - Si reinviertes a YTM y mantienes a vencimiento → HPR ≈ YTM.
- **Curva Precio–Yield**:
  - Construida en Excel; **pendiente negativa** y **convexidad**.
  - Preparación conceptual para **Duración = sensibilidad a tipos** (no es “tiempo”) y **Convexidad**.

## Actividades y demostraciones
- **Excel demo**:
  - Tabla de flujos (anual y semestral), NPV/IRR para YTM.
  - Gráfica **Precio vs Yield** mostrando convexidad.
  - Conversión de YTM nominal semestral a **EAY**.
- **Mini-ejercicios guiados**:
  - Zero a 3 años: compra a 5% y revalorización a 1 año con yield 7% → impacto en HPR.
  - Bono 3 años con cupones semestrales: comparación YTM nominal vs **EAY** y efecto de reinvertir cupones al 6% vs al YTM.

## Tareas y entregables
- **PS4**: repasar (PVGO y relación **ROE vs K**).  
- **PS5**: comenzar hoy.  
  - Pricing de bonos 3/5/10 años a varios yields.
  - Cálculo de **HPR** con reinversión a tasas distintas del YTM.
  - Comparativa de %ΔPrecio ante shocks ±50 pb.

## Próxima sesión
- **Duración (Macaulay/Mod.)** como **sensibilidad a tipos** y **Convexidad** (aprox. de ΔP con término lineal + cuadrático).
- Aplicación inmediata sobre casos del **PS5**.

## Asistencia / notas de aula
- Se tomaron **quizzes** y pase de lista.  
- Menciones de alumnos: *Rosa* llega tarde; faltan *Andro* y *Roy*; seguimiento a *Nicholas* y *Kim*.  
- Recordatorio: compartir **transcripciones** y sugerencia de usar **NotebookLM** para consultas.

## Materiales usados
- Slides de **Fixed Income — Bond Pricing**.
- **Excel** (NPV/IRR, tabla de flujos, gráfico Precio–Yield).
- Transcripción de la clase (27–29 oct) para resúmenes.
- Referencias previas: notas de **Equity Valuation** (PVGO, ROE vs K).

## Incidencias / riesgos
- Riesgo típico: confundir **current yield** con **YTM**; olvidar reinversión en **HPR**.
- Atención a convención **semestral** (per-period rate y paso a **EAY**).
- Mantener viva la intuición de **par/discount/premium** y la forma **convexa**.

## Evaluación / alineamiento con el examen
- En el final habrá **cálculo mecánico** de precio (zero y cupón), **YTM/EAY**, **HPR** con reinversión, y **intuiciones** Precio–Yield.
- **Duración/Convexidad** entrarán tras esta base.

## Acción para el profesor (checklist)
- [x] Subir soluciones **PS4** (con recordatorio PVGO).
- [x] Publicar en campus la **plantilla Excel** usada (pricing + gráfico).
- [x] Preparar ejemplo puente para próxima clase: estimar ΔP con **Duración** y ajustar con **Convexidad**.
- [x] Enviar *Student Notes S17* (EN) + este *Teaching Log* a la carpeta del curso.
- [x] Cargar transcripción en NotebookLM y crear *topic highlights* (YTM/EAY/HPR).



# **Financial Markets — Student Notes (Session 17)**

**Date:** October 29, 2025  
**Topic:** Fixed Income Review — Bond Pricing, YTM & Returns

---

## 1) What we’re doing today

- Full **review of bonds**: pricing, yields, and returns.
    
- No new theory—foundation for next classes on **Duration & Convexity** and then **Derivatives**.
    
- Keep working on **Problem Set 4** (don’t forget PVGO logic) and start **Problem Set 5**.
    

---

## 2) Bond basics (quick map)

- **Issuers:** public vs. private.
    
- **Maturity:** short bills (often zero-coupon), notes, bonds.
    
- **Coupon type:** fixed, floating, inflation-linked.
    
- **Price types:**
    
    - **Discount** (Price < Face), **Par** (Price = Face), **Premium** (Price > Face).
        
- **Embedded features:** callable / putable / convertible (bond + option).
    
- **Risk buckets:**
    
    - **Credit risk** (default) and **Interest-rate risk** (price sensitivity to rates).
        
- **Liquidity & standardization:** simpler/standardized bonds → **more liquid**.
    

---

## 3) Pricing: present value of future cash flows

- **Zero-coupon:**  
    [  
    P_0=\frac{FV}{(1+r)^T}  
    ]
    
- **Coupon bond (annual):**  
    [  
    P_0=\sum_{t=1}^{T}\frac{C}{(1+r)^t}+\frac{FV}{(1+r)^T}  
    ]
    
- **Par intuition:** if (r=) coupon rate → price ≈ par.
    
- **Price–Yield relation:** **negative and convex** (as yield ↑, price ↓ at a decreasing rate).
    
    - Today: we plotted this curve in Excel.
        
    - Next: we’ll measure the slope (**Duration**) and curvature (**Convexity**).
        

---

## 4) Yields: definitions you must separate

- **Coupon rate:** ( C/FV ). Fixed by contract.
    
- **Coupon yield (current yield):** ( C/Price ). Snapshot ratio (ignores FV redemption).
    
- **Yield to Maturity (YTM):** **IRR** of all cash flows (coupons + principal) = rate that makes PV = Price.
    
- **Compounding conventions:**
    
    - If semiannual coupons and quoted YTM is nominal (y):
        
        - **Per-period rate** (= y/2).
            
        - **Effective Annual Yield (EAY):** ((1+y/2)^2-1).
            
    - EAY > nominal because of **compounding**.
        

---

## 5) Holding-Period Return (HPR) vs YTM

- **HPR over T years (with reinvested coupons):**  
    [  
    \text{HPR}=\left(\frac{\text{Future Value of all cash flows at horizon}}{\text{Purchase Price}}\right)^{!1/T}-1  
    ]
    
- **Key idea:** HPR depends on **reinvestment rate** for coupons and the **selling price** (new yield at horizon).
    
    - If coupons are reinvested at **YTM** and you hold to maturity → HPR ≈ YTM.
        
    - Reinvest at **lower** rate → HPR **below** YTM.
        
    - Reinvest at **higher** rate → HPR **above** YTM.
        

---

## 6) Worked patterns from class

- **Zero-coupon shift example:**
    
    - Buy a 3-yr zero at 5%; after 1 year, market yield → 7% (2-yr left).
        
    - New price falls; your **1-yr HPR** < 5% (rates ↑ → bond price ↓ for you; the new buyer earns 7%).
        
- **Coupon bond with semiannual payments:**
    
    - Keep cash-flow grid in periods (6 months), discount with per-period rate.
        
    - To compare annual returns, convert to **EAY**: ((1+y/2)^2-1).
        

---

## 7) Intuitions to remember (fast checks)

- If **rates = 0%**, price = sum of all nominal cash flows (maximal).
    
- If **r = coupon rate**, price ≈ par.
    
- As **maturity increases**, price becomes **more sensitive** to rate changes (duration effect).
    
- **Current yield** is **not** a total-return measure (ignores redemption and reinvestment).
    

---

## 8) Why today matters (for next classes)

- Next session: **Duration = interest-rate sensitivity** (not “time”), plus **Convexity**.
    
- These let us **approximate price changes** for small rate moves:
    
    - ΔPrice ≈ (-)Duration × Price × Δy (plus Convexity term).
        

---

## 9) Exam & Problem-set checklist

- Compute **PV** for zeros and coupon bonds (clean mechanics).
    
- Distinguish **coupon rate vs current yield vs YTM vs EAY**.
    
- Compute **HPR** with explicit **reinvestment** of coupons.
    
- Explain **price–yield** curve: **negative slope, convex shape**.
    
- Interpret impact of a **yield change** on price and on HPR.
    
- Keep fresh: **PVGO**, **ROE vs K** (from equity valuation) for the final.
    

---

## 10) Tools & workflow

- Use your **transcripts** + **NotebookLM** to query “how many times did we…?”, find formulas, and build quick summaries.
    
- In Excel: fix discount rates, lay out cash-flow timelines, and check with **NPV/IRR**; graph **Price vs Yield** to visualize convexity.
    

---

## 11) What to do now

- Re-work **Problem Set 4** (PVGO, ROE vs K) so you don’t lose it.
    
- Start **Problem Set 5** with bond pricing and HPR scenarios.
    
- Practice: price a 3-yr, 5-yr, and 10-yr bond at several yields and compare the % price change for a ±50 bps shock.
    




# Transcription
29 de octubre de 2025, 5:08p.m.

OK.  
Yeah.  
OK.  
Yes, thank you.  
And.  
Excel.  
OK, today, what about problems at 4?  
Did you try? Did you work over it? Did you try? This is problem set five and these are the basis like. Did you have any problem with problem set 4?  
I think it's not complicated. Have you tried Mia? I think it's the more the more difficult thing is working with family of money.  
Working with that money last exercise, the one with Excel, just calculating present value and with Excel is immediately. Yes, one of the the principal difficulty you are not find in the final is remember what PVDO was.  
What the relationship between return and equity and K was? Yes, so please I have not uploaded solutions yet because I have a body and.  
Work over for in order not to forget it. Yes, today's class, we are not going to see anything new.  
Brace class.  
They says we are not going to see anything new. It will be a review, a review of bonds.  
How many times do I have said that knowing how to calculate the price of a bond is important? Probably. Oh, transcripts work fantastic. I'm going to share all transcriptions with you. You don't need transcription too much because the exercise the final has to do with numbers with making.  
exercises but  
Once you've got transcription, you can upload transcription into Google Notebook LM. All of you know Google Notebook LM. Notebook LM is an AI that allows you to upload.  
Lot of documents to Google.  
And you can talk with all these documents, yes. And the point is that you can ask how many times has the teachers has said whatever and we will not look at them. We will answer with the.  
Good idea. OK, says here.  
Bye.  
Vikas Gow.  
Perfect.  
What are we gonna do today? We are gonna start with.  
I promise I know how to manage.  
We are going to start with fixed income. Fixed income has to do with where who is.  
Nicholas and Nicholas and Kim the other day last class.  
Last last we didn't see anything new.  
But we go, we went through how to calculate the price of the of a bone and also I introduced the concept of the yield curve and calculating the price of a bone is absolutely important. Yes, I'm going to take quizzes. Yes, it's an Angel, you know.  
Andro and Roy is also missing.  
Rosa, she was late. Also, he's gonna be late. I need some probably.  
I will wait. I will leave attendance there. Whatever. Do you need something from last class?  
Do you need something in order to get that today?  
I hope it's hours and yes, ask. OK, also where are they? Let me take one of this.  
All of you had one.  
OK, what are we going to do today? We are going to today we are not going to see anything new but for next class and the class after we will construct over this class. So you should fully master.  
How to calculate the price of a bond in order to continue working? Yes.  
We are not going to see hard things, but understanding things require understanding previous things. Yep. OK, what is a bone?  
What is your bone?  
Let me show you my bone.  
She's not for my class. This is a bond and how can you classify bonds depending on the issuer? You can talk about public bonds, private bonds depending on the term, normally short term bonds.  
Are you us?  
At least you ask 0 coupon bonds. The bills are 0 coupon bonds. How do you calculate the price of a 0 coupon bond? Just by doing present value future cash flows. How do you make money by buying a 0 coupon bond because you buy?  
With discount, yes, you buy with discount. Then this is the bond with face value and coupons, no. But then if you compare the price you pay.  
With face value, you can talk about three different types of bonds. If the price is lower, if the price is lower than face value, we are talking about bonds with discount. The price is higher, we are talking about premium bonds and if the price is same.  
As face value, we will be talking about a par bond, yes.  
Coupon bonds will always be discount bonds. Why? Because they don't have coupons. Make sense then.  
Depending on the coupon, there could be floating coupons, there could be coupons index to inflation. But one important idea, really, really important, the more complex, the more complex a bond is the less liquid.  
The more explanation if this is complex.  
In order to buy or to sell it, a lot of people will not. I will need to give a lot of information and giving information. It will take time. Oh, I want to buy this. Yes, but tell me about how the coupons. I will send you the document. Please read the document. I will put the document into ChatGPT. Yep, the more time.  
It needs to be by or sell, the more complex it becomes. Make sense? What else? What else? Yes, hold all coupons, all public bonds. Sorry, hold.  
Who all public bonds are?  
Same standard. Why? Because the more standard standardized, the more liquid. And think about international airports. All of you have been in several international airports, at least in two. If you are in Spain, all of you have been in at least in two, but I will bet that.  
You have been in much more than just two. All international airports are the same, not the same. All are standardized. Why? Because you just go straight, you just see your ticket, you you know where to go, you just go in a straight way. Whole class are.  
Standardized. Why things are standardized. I came here with my, with my.  
What do you call this?  
No, the charger, yes, no, the plaque. I can, yes, with my plaque, yes. And how in Europe all plaques are standardized. How are all plaques in the States standardized? But the standard in the US is different than Europe and normally we have problems once.  
The standard is different. We have problems. Yes, the more standardized, the more liquid. I just plug and play.  
Makes sense. OK, then currency, depending on currency, credit risk.  
When you buy a bond, there will always be two different types of risks. On one hand, credit risk. What is credit risk about? The risk of the issuer going into a bankruptcy, the issuer not paying.  
But he what it's that, yes. Then also there is interest rate risk. If interest rates go up, the price will go down. We will dedicate to interest rate risk next class and class after. Yeah, interest rate risk is important.  
Also, regarding all the priority of getting paid in case of bankruptcy, we can distinguish between tenure debt and junior debt, junior, mezzanine, subordinate. There could be several names, yes.  
What is this about? A queue and who is in front and who is the last of the queue? Yep, also can have securized by properties. A lot of guarantees. What is a covenant?  
Is for example you can issue bonds.  
And if I can write a covenant in the bond and no dividends are going to be distribute till I get paid.  
This is a covenant. You can put all covenants you want, but the more covenants you write, the more explanation, the less standard, the less liquid. Make sense.  
OK, options, provisions, callability, putability and convertibility. What is what is callability or putability is mixing the bond together with a derivative. In this case the derivative is a call the issuer can buy.  
Or the derivative can be a put, yes. What is a call? The right to buy. What is a put? The right to sell, yes. And convertibility. What is a convertible, convertible? How do you say it?  
Convertible, convertible bond, convertible bond. What is a convertible bond?  
What is a convertible bone?  
Imagine I want to finance a project that has to do with a start. Yes, I am financing a start. What if they start approaching to a bankrupt? You're not going to receive money back, so.  
I'm going to buy bonds, but in case the company that's it, these bonds will transform into.  
Why? Because the bond cannot be bought, bought or sold. But once the company goes well, instead of having only a bond, they prefer to own a stock. This is a convertible bond. We are not going to talk about convertible bonds, but.  
General culture, Yep. When financing start-ups, these kind of bonds normally why? Why you finance with a bond? Because I don't want to be a shareholder and I want to receive my money back.  
I want to be, I want to have priority, but in case the company succeeds, I prefer to be a shareholder. Yep. OK, how do you call? We are never when I talk about.  
Yield to maturity in this way, but I have this slide here and I want to play a little bit with what is yield to maturity, internal rate of return. They will calculate several, but in this slide I I don't have any problem with this slide. What is yield to maturity?  
The rate at which you discount future cash flows in order to get the price, yes.  
Here you have suppose a three-year bond has a face value of 1000 and annual coupon payments of 80. Yes, if the bond sells at 1000, sells at 900 or sells at.  
A bond has a face value of 1000, coupon payments of eight. Yes, 123.  
8080 and 1080 All of you know how to calculate the price of a bond.  
Yes. How do we calculate it if the rate is for example?  
The rate is no, sorry, the price is 1000 and I'm told.  
Price is 1000.  
OK, if the OR the price could be.  
1000.  
Thousand.  
900 or 1000, sorry, 1100, one thousand and 100 yes.  
1001.  
This is the price. Let me in order to calculate.  
The yield to maturity, I'm going to calculate the IRR internal rate of return. Yes, this is yes with negative sign.  
And here I yes, copy and paste this and in order to calculate high row in order to calculate the yield is calculating the IRR. Yes, make sense.  
I just use Excel formula with.  
I have.  
If I calculate present value using this rate I will get 900. If I calculate present value of this using this rate I will get a par bond. I will get 1000 because coupon rate is 80 and if I use this rate I would get.  
Simply shot. Make sense.  
Yes, then what is written here into maturity? I have already calculate, but what about coupon rate and coupon yield?  
Let me this is yield to maturity. Let me write here coupon rate and hear what they say coupon.  
You. How do you say coupon? Coupon. No. Do I pronounce it? I have improved. Thanks thinking about.  
Robin. Robin is the teacher that came here and was she told me that I didn't that I should say coupon in Spanish instead of in my English. It's been said the same coupon rate. What is coupon rate is 8%. Coupon rate is 8% and remain unchanged.  
Coupons never change, yes. And then what is coupon yield? I have never heard about coupon yield, but here in this example coupon yield is just a coupon over.  
Open over.  
The price coupon over the price and coupon will coupon over the price if you see.  
Is closer.  
Is closer.  
To coupon rate. Why? Because if price changes. Personally, I don't care too much about coupon rate. If price changes, I care about face value price if interest rate changes.  
Coupons will have an impact, but what will impact the most in price is face value. Make sense? I'm going to receive coupons, but at the end what really matter, you tell me you should say no to something.  
Coupons or face value? I will say no to coupons. What matters is face value when thinking about how to calculate the price and because of that this coupon yield is much lower than the year to maturity because in the year to maturity what matters.  
Is face value.  
The more maturity the bond has, the less face value will matter because the more maturity, the less present value will be, the less it will affect price. Make sense. This way of thinking is important when in order to talk about.  
Interest rate sensitivity. Please all of you just look at me just one second. Today we are not going to talk about it, but we will talk about something called duration. If something if I ask what is duration?  
And you say time, I will kill you. Duration is not time. Duration is interest rate sensitivity. How much my price will change when interest rate changes and we will use.  
Years in order to talk about duration, but when thinking about years, we will think about how much my price will change compared with a 0 coupon bond with same duration.  
In a 0 compilation will be the maturity, but when talking about interest rate sensitivity, the name we will give to interest rate sensitivity will be duration, yes.  
Today's soon. Today we are not going to talk about duration, but the sooner you know that duration exists, the better. And I don't know why something happened there, but it's OK. Make sense.  
So what is it to maturity? The internal rate of return for a semi-annual pay coupon. You are never going to see one exercise like this apart from this is like yes, and I don't want you to get confused.  
But they distinguish between two things.  
They yield to maturity.  
And what they call the effective annual yield. What is Jeffrey? What is the effective annual yield?  
Effective annual yield is like the effective annual rate. Yes. Do you remember effective annual rate? Let's do the yield to maturity is like the IPR. But let's do one exercise and we will see, yes.  
You have.  
You have a three-year but with a three-year bond but with semi annual payments, yes.  
Prices.  
100 and I have.  
In years this time, but in quarter, not in quarters in.  
Semesters. Yeah, in six months. In a six month basis, 123456, Yep.  
And this would be 40.  
And last payment is 1040. The amount of money that I'm going to receive is the same amount of money that I have received with this. What is the difference between this and this one that instead of receiving 80 once a year, I'm going to receive 42 payments?  
OK.  
Eh, what is? What is?  
What is the deal?  
The deal is the Ayara, yes.  
Let me see because I'm not sure.  
What is the year to maturity?  
Is correct these numbers.  
If the price is 900, what is the yield to maturity? This is the IRR, yes, and the yield to maturity in a year basis is these times two. Make sense.  
To be.  
Well, yes.  
And what they say, what they, what they call, what is the effective annual deal. This is like the APR, yes. And I told you that the APR, I hate APR. Nobody should like APR and not don't think about APR.  
Important thing is not the APR. The important thing was the effective annual rate and in order to put this number effective.  
If maturity in order to put this in the correct number, what we should do?  
We should do.  
We should stay.  
Into maturity, put it in a quarter basis, so is 1 plus this over 2, yes.  
The six month basis, yes, rise to the 2nd -1. Why? Because this is going to happen two times.  
No, no.  
2 * - 1 yes. And what is this? The effective hand? There is one hand there. There is no more hand hand again. Hello.  
Hi. Oh, it's Anisha.  
And and and whatever. I I don't have glasses, so it could be whatever. And if I am, if I have made a gender.  
Mistake.  
I don't see. I I see Rod with difficulties. I know that you are Rod. I know that he's Jack and Jeffrey, but whatever. Do you see what I mean?  
Why the effective annual yield is higher? Because of the effect of compounding. You just do two times the IRR, the money you are receive the you're saying are 12 points.  
07 is lower. Why is lower? Because you are not compounding. You are going to receive the money in six months and what happens with the two other months you can reinvest. Make sense.  
OK. And suppose, suppose that the three-year bond has a face value of 1000 and pays the annual.  
Oh yeah, this is the one that I have just done. The rate is 6.04 and this one and this one. Yep, we have gone through this.  
Now compare the effective annual yield of the previous example, the three-year and the three-year bond with which one is higher. So I am asked to calculate effective annual yield. This one, yes.  
Is.  
We.  
This one, Yep.  
Which one is higher? This one is higher. Why? Because I prefer to receive the money sooner. The sooner I will receive the money, the more the return.  
Order.  
In one year I have 100 and in one year I will have 110. What is the rate? 10%. If instead of receiving this in one year I will receive it in two years, what will be the rate?  
Around 5%.  
How much money I should receive in order to still receiving a 10% yearly 121 that is the result of compounding. Make sense?  
All of you should understand what I'm saying and you should be so familiarized with all the things I'm saying, but not because of how much do I say the same because of you have work on this and feel this as yours.  
For example, 2 * 10/20/100 at the 10% in one year 110 two years because of compounding 121 make sense. OK, which which has a higher effective animal yield and what?  
Yesterday I think I sent you one LinkedIn video with teachers saying I hate such GPT.  
It is fake. No, this video is fake.  
Allah.  
My students this morning have told me, Luis, this is fake. I feel myself. I say no, I am a boomer.  
All of you knew that was fake.  
No.  
I thought it was true. I mean, I don't see other pictures. I don't know if they get red when getting angry.  
OK.  
Which has a higher effective analogy and why?  
I want to pay 80.  
Coupons of 80. Yes, one. Which has a higher now the other one? Yep.  
Perfect.  
I suppose that a three-year bond has face value of 1000 and pays. OK, reverse question.  
I I'm gonna do it quickly because I think that.  
Three-year bond has a pay semi annual coupons 12345644.  
They.  
1002.  
OK.  
And the question is, if the yield to maturity is 10%, then what is the price?  
They say 10% the price is this over, sorry the price no the that is counting rate is the year to maturity over 2 that is going to be 5%.  
We are never going to do this this year. Never. I'm going to ask you about semi annual. Yes, I want you to care about.  
I want you to care about how to calculate the price of a bond. That is what I'm going to do. How do you calculate the price of a bond? By doing present value of future cash flows.  
Function fix.  
Rise to the first. Yep, 38.  
I calculate present value of all future cash flows and what do I have here?  
The price. So what is the price? 950? Make sense?  
900-4449 Yep.  
Make sense?  
OK, please, I want your attention.  
I'm gonna use. I'm gonna take.  
Discuss, discuss, flows, these future cash flows copy.  
And paste it, yes.  
Imagine that the yield would be.  
5%.  
Or 8%. Let me start with an 8%, yes.  
Here I'm going to say price. If the yield is 8%, how do I? How do I calculate the price? Again, I don't care to repeat this thousand of times. Yes, 8%.  
Fix it, but I want your attention.  
Rise to the first.  
Sorry, I'm good.  
For Enlui One Plus IMG.  
Yes.  
What is the price? The sum of?  
Peace.  
If coupon rate is 8% and the discounting rate is 8%, what should be the price?  
If the yield is 8% and coupon rate is 8%, what will be the price?  
The price will be.  
We will be scored. We feel no English. No. Yeah, English is fine. It's OK. The price would be.  
1000 No, all of you see it. I'm going to write here a 7% because I don't like 1000. I prefer this number. I'm going to calculate the price with a different formula that will be the same net present value, yes.  
10% value at which rate at 7%?  
Comma and these three, yes, and let me fix it.  
Same number, no. OK.  
What should be the price if the yearly 0% would be 0%? What should be the price?  
No one.  
I think that Ethan is not going to come. This is not you. Where are you?  
What should be the price?  
No one?  
Hello.  
The rate is single percent. I have 100 euros today. I will have in one year.  
So if that is going to be great, this is your percent, what would be the best?  
No thousand means in case in safe person.  
What will be the place?  
Hello.  
Hello.  
Can you repeat?  
If interest rates would be 0, I have 100 euros today. How much will I have within a year?  
100 No. What is present value of 100 within a year today? The rate is 0.  
100 no. So what is going to be the price of a bone?  
Interest rates would be 0. What would be the price?  
880 * 3 + 100.  
One one 1200.  
I don't know that it should be 2240.  
Exams. What you see is not complicated. Please is not complicated, but you should do exercises and you should get familiarised with this. If it's going to rate is 8%.  
1000 if this counting rate is zero 1240.  
By increasing the rate, what will happen with the price? It will go down, no?  
So if the deal is 0, what would be the price?  
1240 and what I'm going to do, I'm going to add to this 1%, yes, and I will go.  
I will go down till 100 for example, just Y100.  
Because it's a round number, yes.  
What I'm going to do, I'm going to calculate the price if it's 8%.  
1000 No.  
And let me.  
Yes.  
OK.  
What I'm gonna do, I'm gonna grab this insert.  
A third.  
So.  
Oh, I don't know. Yes, I want this to happen. Yes, sorry.  
I wanna cry.  
I'm looking forward the time.  
We will start talking with computers.  
Not so far.  
Oh.  
Sorry.  
There are times that I teach also Excel.  
So.  
OK, what is this graph?  
The relationship between.  
The relationship should be free.  
The relationship between price.  
And return, yes, price and yield. If interest rates increases, what will happen with the price? It will go down. So the relationship is negative, the slow is negative.  
The slope of this graph is so, so, so important. What does the slope tell me? How much the price changes? What interest rate changes? How are we going to call this slope?  
Are we going to talk about duration today? No. And we will approximate that flow next day with a line. I will calculate the derivative. You don't need to know derivative, but I will calculate the flow.  
And I will approximate the change with a line. But as you can see the relationship is not like linear relationship is not aligned, relationship is convex and next day we will talk also about convexity.  
Yes.  
Make sense? OK, so let me come back here. What is using steps one and two to go from price to to maturity and vice versa? We find a negative and course.  
Relationship between you to maturity and price, yes.  
This is what I have just done with the excel.  
You can write year to maturity and price or price and year to maturity. The same just a change in axis. But for me what is important is how much price we change when interest rate changes.  
Why? Because.  
What? Oh, you know, Powell, what he's going to say, a drop in 25 basic points. What is going to happen today? The market has already discounted. The market has taken into account that what he's going to say, what Powell is going to say today.  
That's already happened. So the market, there won't be changes in the market, but because market expect Jerome Powell to drop interest rates, what is going to happen in December? Probably another drop. What is going to happen in January?  
Probably. I don't know. Once one of two, another drop that I think that is not happening. Probably it won't happen and stop. Why stop? Because.  
Because there is uncertainty and there is a stop because continuing dropping or continue stopping, yes.  
But what I'm talking about, I'm talking about interest rates that can change and will change.  
And what happened if interest rate changes? That price of bonds changes.  
Yeah.  
All of you should know what is a bond and how to calculate the price of a bond. Do I have work hard in order you to know how to calculate the price of a bond? Yes.  
It's not so complicated. It's not so complicated, but you should know how to work with time value of money before and then how to calculate the price of a bond. Next day we will talk about duration. What happen if interest rate changes?  
In quantitative terms, make sense.  
OK, Alexa, yes, into maturity and price. So now realize return versus into maturity HPR.  
What is the point with HPR that we don't know at which rate we are going to reinvest coupons?  
I'm going to have coupons, but in order to calculate HPRI should reinvest coupons.  
Yes.  
If I reinvest coupons at the yield to maturity, what will be the internal DHPR?  
If I reinvest coupons at the year to maturity.  
HPR will be the deal to maturity. Let me do one exercise in order you to see yes. Oh, before talking about bonds with coupons. If I am talking about a bond without coupon, HPR and ARR will be the same. How do you calculate price of bonds? Just by.  
Do in present value. Here is one example. Suppose a three-year zero upon bond.  
OK, let me do this example before.  
Three-year zero combo has a maturity of 5%.  
The year.  
Three years, Yes, three years.  
As a yield to maturity of 5%. What is the price? Sorry, what is face value? I don't care 100 or 1000, yes.  
Perfect. 1000, yes. What is the price today? 1000 / 1 plus the yield.  
1003.  
Rise to the third. Make sense, please. I want all of you to fully understand this and next exercise, yes.  
Oh, yes.  
It should be.  
Yeah, it.  
Where is the bond? What is the bond's current price?  
OK. Within a year into maturity changes to 7%, yes.  
After.  
One year, yes, after one year, maturity would be two years.  
After one year, New Year is going to be 7%, yes.  
Face value will still be 1000 and.  
1000 / 1 10% rise to the second. No, this is going to be the new price. Make sense.  
Yeah.  
What I'm ask calculate the HPR. I'm going to buy this bond with three years of maturity at a 5% rate and I'm going to sell this bond after one year at a 7% rate. Make sense?  
What is going to be the HPR?  
Yes. Oh, sorry.  
Present value is equal future value over 1 + R rise to T Yes and in order to calculate the XPR is 1 + R rise to T equal to future value over present value.  
Yeah.  
So HPR is future value over present value -1.  
All of you should know this formula because all of you should have done this formula more than 10 times, yeah.  
So HPR is.  
Future value over present value -1, yes.  
And HPR is.  
1.1%.  
I have bought it thinking I was going to get a 5%. New buyer is getting a 7%. Why the new buyer is going to get a 7%? Because me instead of.  
Instead of performing at a 5%, we have performed at a 1.1%. What should be the HPR if the new buyer is getting a 5%?  
Please, all of you, what should be the HPR if the new buyer will get a 5%?  
A 5%. If the new buyer is getting more than what I was thinking I was going to get, I will get less. And if the new buyer gets a 4%, my HPR would be higher.  
Make sense?  
Nothing new, but please, absolutely important. Fully understand this for the final, yes.  
Next year, OK. What is the digital maturity in one year has remained at 5%? All of you agree with me?  
OK, let's move to a bond with coupons.  
A three-year coupon bond has face value of 1000 coupons of 80. This bond. Does this bond looks familiar to you?  
What is the bond yield to maturity of 8%? Coupons of 80. What is the bond current price? 1000? It's a part bond, yes.  
But let me here.  
And.  
1004.  
I've been told that into maturity is 8% into maturity is.  
8% and I'm going to calculate the price one more time. The more times you calculate prices, the more familiar. This is like mechanography, like riding bikes, like driving cars, like riding, the more you do it.  
The more familiarized you will become.  
What is the price at which I am buying this?  
1005.  
Yes.  
Let me put this in green.  
What is the bond's current price 1000? What is the future value of the bond cash flows if you reinvest at the yield to maturity?  
Before reinvesting at the gift to maturity, I'm going to reinvest this data.  
6%, yes.  
How do I reinvest this?  
1006.  
Times.  
One plus reinvesting the rate make sense.  
Rise today.  
I'm waiting till maturity rice rice today.  
To the two. Why? Because this is going to stay for two years, rise to the two. Yep, and this is going to be 89.  
AD.  
Times 1 + 6%.  
Rice too.  
Rise to the one.  
And can I reinvest this now because I am receiving in year 3?  
So how much money will I have at the end?  
The sum of these three ones that would be.  
Future value. Now I'm asked to calculate.  
HBR.  
I mean.  
Scholars here, yellow.  
Yellow and yellow and let me call this.  
You'll.  
Rainbestment.  
And the HPR is.  
Mutual value over present value price to 1/3.  
Yes.  
One third -1.  
And this is.  
Almost 8%. What if I reinvest at the yield to maturity?  
What if I reinvest at the year's maturity?  
I'm thinking I'm when I get an 8%, I reinvest at an 8%, how much I will receive an 8%?  
Make sense?  
Oh, bro.  
Let me start again.  
Price is 1000 because the is 1000, yes.  
I am reinvesting these bonds. I am reinvesting these coupon, the coupons I am reinvesting at a 6%. So I get a final value of 1254, yes.  
And I have the HPR by doing future value over present value price to 1/3 because I'm waiting for three years, yes.  
The question is why did I reinvest this at an 8% rate?  
What would be the HPR if I reinvest this at an 8% rate first first?  
It is 8%. So I'm thinking I'm going to get an 8% if I just think about the bond with Coupers and if I reinvest at an 8%, how much I am getting?  
Make sense?  
Imagine that the release 7% price would be higher than 1000, no?  
But if I reinvest at a 7%, what is going to be?  
My HPR as a percent. So price has nothing to do. I don't care if it is 1100, if it is a par bond or not. What really matter? The rate at which I have bought it and reinvestment rate.  
And then same thing that I have say regarding the bone, the zero coupon bone.  
Oh no, same thing now. Sorry if I get more return by reinvesting.  
The HPR will be higher. Why? Because I'm getting this value.  
If the reinvestment rate is higher, I'm gonna get more money. If reinvestment rate is lower, I'm gonna get less money. Make sense?  
It's a logical thing.  
Today we have not seen anything new. Today all things we have done is reviewing. We have gone again through how to calculate the price of a ball. We have gone again over.  
HPR and IRR, yes.  
But but all of you should fully understand this in order to understand next class, yes.  
What is the bond's annual HPR? 8% because we are reinvesting at the year to maturity.  
If coupon payments are reinvested at the percent.  
Future value will be 1264 and the HPR will be of 8.50%. But I recommend you to do this by yourself, yes, and also I recommend you to go through.  
Problem set for again in order not to forget.  
What if the coupon is reinvested at a 6% rate? Oh no, 96%, the HPR will be lower. Make sense?  
So at the end.  
What we have done today with new concepts that we have already seen make sense.  
So I have given you problems at 5 for today's class.  
We are done. Any questions?  
Everything is here. OK.  
Let me search this.  
Would you? I think I already done this.  
Oh no, I need to get it.  
Sorry.  
Documents.  
I don't know if now download no documents.