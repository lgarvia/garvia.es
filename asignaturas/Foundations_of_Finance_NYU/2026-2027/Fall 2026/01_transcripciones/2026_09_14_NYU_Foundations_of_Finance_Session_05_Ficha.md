---
titulo: "Foundations of Finance – Session 5: Bond Pricing and the Time Value of Money"
fecha: 2026-09-14
curso: "Foundations of Finance (Fall 2026)"
sesion: 5
asignatura: Foundations of Finance
institucion: NYU Madrid
tipo: sesion
estado: preparado
---
# Foundations of Finance – Session 5

## Bond Pricing and the Time Value of Money

**Date:** September 14, 2026
**Course:** Foundations of Finance – Fall 2026
**Institution:** NYU Madrid

---

# 1. Session Overview

Session 5 connected the Time Value of Money framework from Session 4 with one of its first major financial applications:

# Bond Pricing

The main topics were:

* review of perpetuities and annuities;
* APR versus Effective Annual Rate;
* bond structure;
* zero-coupon bonds;
* coupon bonds;
* bond pricing using present value;
* interest rates and bond prices;
* maturity and bond prices;
* premium, par and discount bonds;
* credit risk and sovereign spreads;
* liquidity and standardization.

The central message was:

> **A bond is simply a collection of future cash flows, and its price is the present value of those cash flows.**

---

# 2. Review: Perpetuities and Annuities

A perpetuity pays a constant amount forever:

$$C,C,C,C,\ldots$$

Its present value is:

$$\boxed{PV=\frac{C}{r}}$$

An annuity pays a constant amount for a finite number of periods.

Its present value can be understood as:

> **one perpetuity minus another deferred perpetuity.**

Therefore:

$$\boxed{PV_{\text{annuity}} = \frac{C}{r} \left[ 1 - \frac{1}{(1+r)^T} \right]}$$

The emphasis remained on understanding the structure rather than memorizing formulas.

---

# 3. APR and Effective Annual Rate

The session briefly reviewed the difference between:

## APR

A quoted annual rate that does not fully incorporate intra-year compounding.

## Effective Annual Rate

The actual annual rate after compounding.

For example, with a monthly rate of 1%:

$$APR=12\%$$

while:

$$EAR=(1.01)^{12}-1$$

Therefore:

$$\boxed{EAR>APR}$$

when there is positive compounding within the year.

---

# 4. What Is a Bond?

A bond is a financial instrument through which an investor lends money to an issuer.

The issuer promises future cash flows.

A standard coupon bond normally includes:

* periodic coupon payments;
* repayment of face value at maturity.

If the face value is:

$$F$$

and the annual coupon is:

$$C$$

the investor receives $C$ periodically and eventually receives:

$$C+F$$

at maturity.

---

# 5. Zero-Coupon Bond

A:

## Zero-Coupon Bond

makes only one payment at maturity.

There are no intermediate coupons.

If a zero-coupon bond pays:

$$F$$

after $T$ years, then:

$$\boxed{ P=\frac{F}{(1+r)^T} }$$

This is simply the standard present-value formula.

---

# 6. Zero-Coupon Example

Suppose a bond pays:

$$\$1,000$$

in ten years.

If the required return is:

$\$5\%$$

then:

$$P= \frac{1000}{(1.05)^{10}}$$

The investor pays less than \$1,000 today and receives \$1,000 at maturity.

The difference represents the investor's return.

---

# 7. Interest Rates and Bond Prices

The most important relationship was repeated again:

$$\boxed{r\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow}$$

and:

$$\boxed{r\downarrow \;\Rightarrow\; P_{\text{bond}}\uparrow}$$

Why?

Because bond cash flows are discounted using the market-required return.

If the discount rate increases:

$$\frac{CF}{(1+r)^t}$$

becomes smaller.

Therefore the bond price falls.

---

# 8. Time to Maturity

For a zero-coupon bond:

$$P=\frac{F}{(1+r)^T}$$

As maturity approaches:

$$T\rightarrow0$$

the bond price approaches:

$$F$$

Therefore:

> **A zero-coupon bond converges toward its face value as maturity approaches.**

---

# 9. Maturity and Interest-Rate Sensitivity

Longer-maturity bonds are generally more sensitive to changes in interest rates.

Why?

Because their cash flows occur further in the future and are therefore affected more by discounting.

This introduces the intuition behind:

## Interest Rate Risk

which will be studied more formally in later sessions.

---

# 10. Coupon Bonds

A coupon bond contains several cash flows.

Suppose a 3-year bond has:

$$F=\$1,000$$

and a coupon rate of:

$\$6\%$$

The annual coupon is:

$$C=0.06(1000)=60$$

Therefore the cash flows are:

| Year | Cash Flow |
| ---: | --------: |
|    1 |       \$60 |
|    2 |       \$60 |
|    3 |    \$1,060 |

---

# 11. Pricing a Coupon Bond

If the required return is:

$\$5\%$$

the price is:

$$P= \frac{60}{1.05} + \frac{60}{1.05^2} + \frac{1060}{1.05^3}$$

This is the direct method.

The principle is always:

$$\boxed{ P=\sum PV(\text{Future Cash Flows}) }$$

---

# 12. Bond as Annuity Plus Zero-Coupon Bond

A coupon bond can also be decomposed into:

1. an annuity of coupon payments;
2. a zero-coupon bond representing repayment of face value.

Therefore:

$$\boxed{ P = PV(\text{Coupons}) + PV(\text{Face Value}) }$$

Using the annuity formula:

$$P= \frac{C}{r} \left[ 1-\frac{1}{(1+r)^T} \right] + \frac{F}{(1+r)^T}$$

This is not a new financial idea.

It is simply another application of the formulas from Session 4.

---

# 13. Two Ways, Same Answer

The class emphasized calculating bond prices in different ways.

### Method 1

Discount every cash flow individually.

### Method 2

Treat the coupons as an annuity and the face value as a zero-coupon bond.

Both methods must give the same result.

This is a useful way to check calculations and deepen understanding.

---

# 14. Excel

Excel was again used to price bonds.

One possible approach is to discount each cash flow separately.

Another is to use the annuity formula.

Students were also shown that spreadsheet functions can calculate present values automatically.

However:

> **Excel should confirm understanding, not replace it.**

The priority remains knowing why the number is correct.

---

# 15. Coupon Rate Versus Required Return

An important comparison is between:

* the bond's coupon rate;
* the market-required return.

Suppose the bond has:

$$Coupon\ Rate=6\%$$

---

## Case 1: Required Return = 6%

Then:

$$\boxed{P=F}$$

The bond trades at:

## Par

---

## Case 2: Required Return < Coupon Rate

Suppose:

$$r=5\%$$

while the coupon rate is 6%.

The bond is paying more than the market currently requires.

Therefore investors are willing to pay more than face value:

$$\boxed{P>F}$$

This is a:

## Premium Bond

---

## Case 3: Required Return > Coupon Rate

Suppose:

$$r=7\%$$

while the coupon rate is 6%.

The bond is paying less than the market requires.

Its price must fall:

$$\boxed{P<F}$$

This is a:

## Discount Bond

---

# 16. Premium, Par and Discount Bonds

The relationship can be summarized as:

| Coupon Rate vs. Required Return | Bond Price |
| ------------------------------- | ---------- |
| Coupon Rate > Required Return   | Premium    |
| Coupon Rate = Required Return   | Par        |
| Coupon Rate < Required Return   | Discount   |

This relationship is fundamental.

---

# 17. Why Price Adjusts

A bond's coupon is normally fixed when the bond is issued.

If market interest rates later change, the coupon does not automatically change.

Therefore:

> **The bond price must adjust.**

This is why existing bonds respond to changes in market interest rates.

---

# 18. Treasury Bills and Treasury Bonds

The class briefly reviewed the distinction between U.S. government instruments.

## Treasury Bills

Generally shorter-term instruments and typically zero-coupon in structure.

## Treasury Bonds

Longer-term securities that usually pay coupons.

For this course, the most important conceptual difference is:

$$\boxed{\text{T-Bill} \approx \text{Zero-Coupon Structure}}$$

versus:

$$\boxed{\text{T-Bond} = \text{Coupon-Paying Bond}}$$

---

# 19. Credit Risk

Bond valuation is not only about time.

It is also about risk.

If investors believe that an issuer is less likely to repay:

$$Risk\uparrow$$

then they will normally demand:

$$Required\ Return\uparrow$$

And if required return rises:

$$Bond\ Price\downarrow$$

Therefore:

$$\boxed{\text{Credit Risk}\uparrow \;\Rightarrow\; \text{Required Return}\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow}$$

---

# 20. Sovereign Spreads

The session returned to the comparison between government-bond yields.

For example:

$$\boxed{\text{Spanish Spread} = Y_{\text{Spain}} - Y_{\text{Germany}}}$$

If investors become more worried about Spanish sovereign risk, the required return on Spanish debt may rise relative to German debt.

The spread therefore increases.

This illustrates how perceived risk affects required returns and bond prices.

---

# 21. Seniority and Convertibility

The class briefly mentioned that bonds can include many contractual features.

Examples include:

* seniority;
* callability;
* putability;
* convertibility.

A:

## Convertible Bond

may give the investor the possibility of converting debt into equity under specified conditions.

This can allow an investor to begin with a debt claim while retaining some potential upside if the company performs well.

---

# 22. Debt Versus Equity Again

The session returned to the difference between lenders and shareholders.

If a company fails:

> **Lenders are generally paid before shareholders.**

If the company performs extremely well:

> **Shareholders may capture much more upside.**

Therefore:

$$\boxed{\text{Debt} = \text{Lower Priority Risk, More Limited Upside}}$$

$$\boxed{\text{Equity} = \text{Higher Risk, Greater Potential Upside}}$$

---

# 23. Standardization and Liquidity

An important market insight was:

> **The more standardized a financial instrument is, the easier it usually is to trade.**

Therefore:

$$\boxed{\text{Standardization}\uparrow \;\Rightarrow\; \text{Liquidity}\uparrow}$$

Highly customized bonds may be harder to value and trade.

Standardized instruments can normally attract more buyers and sellers.

---

# 24. The Main Bond-Pricing Formula

For a coupon-paying bond:

$$\boxed{ P = \sum_{t=1}^{T} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^T} }$$

Equivalent form:

$$\boxed{ P = \frac{C}{r} \left[ 1-\frac{1}{(1+r)^T} \right] + \frac{F}{(1+r)^T} }$$

Again, these are not two different economic models.

They are two ways of expressing the same valuation process.

---

# 25. Core Relationships

## Interest Rates and Bond Prices

$$\boxed{r\uparrow \;\Rightarrow\; P\downarrow}$$

## Credit Risk and Required Return

$$\boxed{\text{Risk}\uparrow \;\Rightarrow\; r\uparrow}$$

## Maturity and Sensitivity

$$\boxed{\text{Maturity}\uparrow \;\Rightarrow\; \text{Interest Rate Sensitivity}\uparrow}$$

## Coupon Rate = Required Return

$$\boxed{ P=F }$$

## Coupon Rate > Required Return

$$\boxed{ P>F }$$

## Coupon Rate < Required Return

$$\boxed{ P<F }$$

---

# 26. What You Should Retain from Session 5

If you remember only six ideas, remember these:

> **1. A bond is simply a sequence of future cash flows.**

> **2. Its price is the present value of those cash flows.**

$$P=\sum PV(CF_t)$$

> **3. A coupon bond can be understood as an annuity plus a zero-coupon bond.**

> **4. Interest rates up means bond prices down.**

> **5. Coupon rate above market return means premium; equal means par; below means discount.**

> **6. Riskier issuers must normally offer higher returns, which lowers bond prices.**

---

# 27. Questions You Should Be Able to Answer

After reviewing Session 5, you should be able to answer:

1. What is a zero-coupon bond?
2. How do you price a zero-coupon bond?
3. What happens to a zero-coupon bond's price as maturity approaches?
4. Why do bond prices fall when interest rates rise?
5. What is a coupon?
6. What is face value?
7. How do you price a coupon bond?
8. Why can a coupon bond be decomposed into an annuity plus a zero-coupon bond?
9. What is a par bond?
10. What is a premium bond?
11. What is a discount bond?
12. What happens if the coupon rate is greater than the required return?
13. What happens if the required return rises?
14. Why does credit risk affect bond prices?
15. What is a sovereign spread?
16. Why are standardized bonds generally more liquid?
17. What is a convertible bond?
18. Why are lenders generally paid before shareholders?

---

# 28. Before the Next Session

Students should:

* [ ] Review present value and future value.
* [ ] Review annuities.
* [ ] Understand zero-coupon bond pricing.
* [ ] Understand coupon bond pricing.
* [ ] Practice pricing the same bond in two different ways.
* [ ] Memorize the direction, not merely the formula:

$$\boxed{\text{Rates}\uparrow \;\Rightarrow\; P_{\text{bond}}\downarrow}$$

* [ ] Understand premium, par and discount bonds.
* [ ] Continue working on Problem Set 1.

The next sessions will continue building on:

> **Time Value of Money applied to fixed income.**

---

# 29. Session 5 in Five Ideas

> **1. Bonds are just future cash flows.**

> **2. Bond pricing is present-value calculation.**

> **3. A coupon bond is an annuity plus repayment of principal.**

> **4. Market rates determine whether a bond trades at a premium, par or discount.**

> **5. Interest-rate risk is fundamentally the sensitivity of bond prices to changes in required returns.**


# Transcription
14 de septiembre de 2026, 5:05p.m.
1 h 15 min 56 s
He was like the real best one.
Finance for 2026.
And.
Please.
Ohh.
Yeah.
Possibly.
No.
Yeah, it's operated, like, let me take attendance there and just write.
Because I am asked to be, I am asked to share each week that. How are you doing?
What are you doing? Have you start with the problem set? What? What did you find?
Did you start? No, yes, or did you find it?
It's not difficult, no? Not too much. Have you arrived to the parallel boats? Not yet. Phones sticks in common.
No.
This is places many.
The right, you can.
Go through today, through, through.
These questions?
Perfect.
Whatever.
The.
Regarding maths, today's class is going to be a review.
We are not going to see anything new regarding maths. Today's class is not going to be hard, but it's important. Why? Because today I will properly present, introduce you.
What is about? I have already done that today, you will see what is about, and also...
This week.
This week is important.
She is visiting the US. It will happen. I mean, it's not confirmed yet. It's not confirmed yet, but it will happen next week.
I don't know if it is this will happen, that's good.
What is going to happen in this week? Wednesday? No, the third of November.
Is the confusion and some other man?
Open air. I said during this weekend, at probably open air will not become public. I feel it will not happen during this year.
We will talk a little bit about that, because this is important also.
What is going to happen in Wednesday?
Wow.
Hey.
Getting worse.
Can it work? We talk about friends.
What you will probably say?
Play sir.
Ohh.
Game.
If I...
I would say things.
But now, I will show you, calling market. Do you know what calling market? Did I say, for the market, we do first week of class? What was first week of class? Fifty-fifty percent, no?
And I told you that my belief was that...
And then it breaks, we're gonna stay inside.
Let me show you polling market.
And he showed you quality market.
Because I didn't follow the market.
I didn't know that there were addictions.
It should be, I mean.
It should be more recent now.
Body.
Yes, you.
You understand what I have, no? They were listed by the recent, the last.
and I was missing the city of 30 September. He's the one with more traffic.
What?
What we probably said.
In Greece.
If the rates increase, what will happen with price of votes?
It will increase present value. If R increases present value.
But this is...
This is.
This is when we become, when we start 50 or 50%, yes?
After nobody believed that personally I didn't expect interest rates. I didn't expect this. Yes.
And there are several pieces of news.
But all of them of any ideal.
Canal man, Jaime.
AI Safety Concerts.
No.
Why OpenAI won't go public?
They need a lot, a lot.
Money, a lot of cash, a markets now.
Markets now don't have forecasts they need in order to become public.
And they have announced a slow down. Yes, this is from this weekend. Let me show you another one.
And trophy.
I'm looking for a...
Yeah, I was, this is a Spanish word.
Are you up already?
Ask, ask, Sina, China, to slow down.
Yeah.
I'm saying I have to say no.
I'm not going to slow down. What does to slow down AI means?
Is different to slow down AI is different for China than for and traffic and open air.
A trophy can borrow money or borrowing gas.
China is in the other level. They are thinking of robotics. You understand what I'm saying?
Why, why am trophy?
is asking to slow down because the race and trophy and open AI are having is a rat race. Have you ever heard what is a rat race?
Grace.
Can be.
Things.
A rat race is a race where the loser loses.
You lose, you lose, and the winner will also lose, why?
Because if you will, because you will have so many users, and all these users will cost you to consume a lot of energy, yes?
Let me show you one thing else in order to finish with this, Google.
Google Labs.
Google.
This one is new, green beans.
Google Flow, I know it, that is amazing.
Google, that is Google Flow Music and Google Flow Video. Yes, if you want to spend experience, yes.
Did you want to spend?
Here, you can find.
Wish.
Google has that are incredible tools.
Alphabet, Google is alphabet, yes. Why? Anthropy, anthropy, an open AI, are running a race, a race, a race, yes.
Google.
Has low profile, low key.
Why? Because they don't want to race. Here you've got incredible tools. You can use it. But Google is not announcing all these tools. Why? Because if all, if any one of these tools will become viral,
A lot of energy will be expected, yes? Let me show you, yes, please, yes?
Trainer.
Yeah, I'm gonna show you also.
English, US English specs.
Yes.
Where are you here now?
Google Estévez.
Yes.
Draw.
commands, emails.
Tell me, Angelina, something you like.
Porters.
Amazing.
With horses.
Regarding horses.
Where are you?
Horses.
One.
Juan.
Are full.
Bits.
Yep.
I know there, but for...
Racing.
And...
Call.
Other things that will transform it into an incredible.
Business, yep.
I...
is going to create. Nokia!
they own the images regarding that. Then you can take this to Anthropy, that is another Google ecosystem tool.
And from atrophic, you can you can tell atrophic to put it into life, yes?
Hey.
Too great.
It's working.
It's frowning.
Not working.
Start, please.
Okay, this goes on one side. Now I will go back. Let me see, generating the design system. Now,
Google.
Notebook, do you know we are not Google it?
No, this is the last one, and I'm gonna let me.
Is one copy?
Here, and why you?
This is Google Notebook.
Here.
This is all these are mine, let me just find last there.
Here, and while you fall, fall, there should be one from the spring.
There is no string where you from.
Let me insert this one.
Copying.
This is.
Last 4.
One and then me now.
Copy, and let me create.
One new for this time. First, what I'm gonna do is download.
Transcriptions, yes.
I want to download transcriptions.
Three transcriptions I have already served with you.
And one was missing. Number 2 is missing. I think it should be somewhere.
Are you gonna stay with you in the second?
Yes, the second one.
Ana.
I'm going to create a new one. Yes, I close this.
Fall 2006.
Yeah, he returns all sources.
You can, let me show you another one quickly.
I, I want to stop. Sorry.
Let me create a new, quickly one.
Horses.
You have your own horse.
No, you just like horses.
Horses.
I've written horses. You could have written I love Madrid, I want to see whatever or regarding I like formula. You can write whatever. Yes, I have written horses and I import.
And here you can find a lot of information regarding horses that Google has sent to you later. And Ana.
Take these horses one.
I'm gonna eliminate.
And let me just show you.
This new that is gonna be yours, yeah?
from sources.
And from downloads, let me include these two ones, yeah.
What are the sources or classes, yeah?
Oh, this is Spanish because it's Spanish, but if you...
I will upload to this also the transcript. Yes, I will upload there. And here you go. For example, let me just open one.
The summary is being given by Google. You can read the summary, but here my transcript all have same structure. Here you have got...
That it takes the summary, yes?
And then the data, the let me call it data lake. What is the data lake?
Where you can find the full transcription, yes?
Ohh, too long, sorry.
Sorry.
Wow, 100 feet. Sorry for the breathing. I think that the next one I have asked to be sure to not talk too much. This is another one. I think this is short.
Again, here you got all the formulas we have seen, and here it starts. Yes, this one is shorter. Yes, that is before. This is the one from the previous lesson, and here you got all this transcription, all the transcription, yes.
Sources, then I'm gonna press here.
One button, and I'm gonna, because this takes a little bit of time, and also...
Video generate, and also map generate, and also targets generate, infography generate, yep, as desperate on one hand sources, yes, here you can ask these, for example.
Give me the craziest things the teacher has say in.
Yes. Why I'm asking for the graziest things? Because I don't want you to look for the normal things. The normal things you can have, the normal things in there.
In the in the summit, yes?
What he's doing?
What, what, what the AI is doing? Looking into the for the information. Make sense?
Here are some of the most memorable guitar and various statements and moments for Professor Ruiz across the class.
I'm making his addiction on day one. I'm an addict. An addict, sorry. I'm an addict to ChatGPT and AI.
Interacting live with this custom AI extra purpose in class.
Ledging loyalty class of an AI authorizon.
Yeah, this is true.
Using AI to filter angry emails.
Why analogies for finance and study habits? The morning pro course design.
Do you remember how the boy grows?
Ray, he got it now, just kidding, you have not start with a problem set, just kidding, but not too much. So, if so, versus mark down files.
Liberate trading logic, summarizing how borrowing money works between you and your bank broker. If things goes well, you will be more happy, and I will be happy if things goes bad. I will still be happy, but you will be less happy, considering I am a man.
The closest metaphor reflecting the pandemic.
Tattooing productive, tattooing productivity rules, self-messaging advice. I strongly recommend you to have a WhatsApp group with yourself. Poly market and beer.
Self the break glass showing all recordings, sharing spreadsets.
You see what I mean?
AI thanks to the data, thanks to having all transcriptions has gone.
The de.
Who is?
Who is Taylor Swift?
Yes.
Does everyone know Taylor Swift?
Everyone in the world?
You see the point?
Is an LLM is Gemini.
Gemini is more advanced Gemini, but working in a close format.
There could be a utilization that it can make mistakes, but all mistakes the AI will make will be based on my sources.
He can make mistakes with my shorts. He can read, for example. Let me make him a listener, yes?
How many students?
There are in class.
Right here, yeah, I will make mistakes.
Ohh.
There are, there are whatever, I'm not gonna make sense.
Then.
Let me show you the map.
From the institution finance, core principle.
Managing uncertainty investors, financial assets, real asset financial assets, market structure, primary market, secondary market, OPC, regulation, trading mechanics.
Ohh, sorry, I don't know what I need.
Training mechanics, buying a Marín fixed income analysis. We are here.
Risk factors.
Great Ruiz.
Maturity risk.
Maturity, I would call it, price interest rate increase, but you see how powerful this is.
What is crazy risk? You press here.
You will get a definition from Peregris. Make sense?
Is this powerful? Is this useful?
Let me show you two more things quickly, and then I will start.
Here, he's looking for...
What is?
Great Greece, yes.
And then, flask cars.
What is the what is the central message in lesson one?
Finance has to do with, you cannot predict the future, but you can manage an unpredictable future. I don't know what is finance is exactly what I have just said, what is written there. In finance, acronym OTC means over,
How do, how will you decide that on this market? Here you go, if I...
If I ask...
Again, 4.
Okay.
The answer will be a different one. Each time you ask a request, you will get a different answer. It's another word. Make sense?
And the video is still being generated. Let me see an infographic.
Cool.
I remember you.
This is an infography, yes.
And at the end of today's class, I will show you the video and what for me is the best thing this school has, the podcast.
Focus, not for my class. For my class, what you should do is problem set one. AI will not help you too much in order to review a review. Yes?
No, in this tool, I think it's...
Useful. Also, let me come back to Google Speeds.
Take we care.
I mean, it was a crazy, I mean, I had that with the beds and whatever. You can do this in a much more proper way.
This is the design for me.
Don't you find this incredible?
Absolutely incredible.
What if Open AI could have could done this? What if cloud could done this? Hope cloud, hope traffic or hope Open AI will announce this?
They will create a big party, they will hire the New York Times, Press, and they will announce.
who has incredible tools and with low profile. Why? If they, if this become buyer, a lot of people will start doing this and a lot of energy and a lot of teams will be working, a lot of data centers will be working in order to give service to everyone.
Make sense?
This tool is absolutely incredible, but if you go here...
This one is hosting all of the, I mean, I don't know all.
I don't know all, but you have tones.
Yeah.
You see what I mean?
So.
Oh, oh.
Oh no, it's not finished yet. Okay.
So, I said something.
On my hand, I have so use a little AI tools from Google, a lot more.
is out of the scope of this course. Personally, I think I must. This is a must.
Is Wednesday?
These ones they won't happen.
Good English.
What getting worse probably wouldn't say.
An increase of 35 by supports.
For me, strips. Why strings? Because increasingly deliberates means...
Stop the economy.
Trump was saying, was asking for a drop in deliveries. Let's see what Trump would say is getting worse, increases in bill rates. Careful, because there are elections. I wouldn't bet that Trump would say no, and nobody will.
You won't see this piece of news in a lot of places, but let's see, we will talk about this in one week. We will see what Maria's reaction has been in one week and hopeless and what Trump has said in one week time, we will talk again. Yes?
And then, regarding Open AI, regarding a trophy, they look for they need a lot of liquid, a lot of topics in order to finance all their.
Energy consumption, all their power, a computing power capacity, yes, and they need a lot of money and let's see what is going on. Don't forget about China.
Don't forget about China. Do you speak Chinese?
And yeah, I would like to speak Chinese. Do you speak Chinese a little bit? What do you say a little bit in Chinese?
Where's raising?
Oh, yes, yes.
And let me start with today's class. Today's class we will talk about fixing code. Today we won't see anything new.
Today, we will see how we will calculate the price of a home. Next day, we will continue over today's knowledge. So, if I have been working during four days in order to prepare this session, today's session is...
Both.
But that I don't want.
Let me go quick.
Hey, before starting.
What is after?
How can you get the price of a Petragnani?
See you, Cortana. Price. They is C over BBC, a constant payment that will happen forever. Yes.
Second question for me is that it's absolutely important.
All of you understand why, and I know it is the difference between disabilities.
Hello?
Where is Apple?
What is a number? Is this finishing? Yes, this is a number.
I want to calculate present value of this Caslows duty.
And I know that if this will...
Ohh, the end of times.
Listen, you will miss your weather.
So, present value of the MVP is C over R minus.
Another.
There, baby.
Is on this zero?
You consider one per per 50 minus another per per 50.
But we will start in the last one.
How do you calculate present value of this?
By calculating, present value.
One plus.
Price will be.
Times see over up.
The price of the MIT?
is the difference between 2 competencies. One that we will start in year one and a second one that we will start.
In year 3 + 1.
And, because of that, I calculated.
There's a value in the P. Make sense?
We saw this last day.
We can, I can go through this all the time to me, but today we are not talking about this, but understanding this for me is like a PP.
Yeah, it's like a EBA, because if you understand this, in order to understand this, you should have understood 7 all of the things, and since.
What is the difference between APR and effective harm rate? Effective harm rate is compound, APR is without compound.
An investment based you a fixed amount every year for 10 years, and then return your calendar.
I thank you for it.
I like this one.
I like a lot this one. A fixed amount, see?
And then?
It returns back.
You're coming, yes?
Make sense?
How will you calculate?
How will you calculate the present value of that?
How will you calculate Present Tiger Black?
I'm gonna go to greet someone. I let you.
Let's see if you can get the phone.
Yeah, the program I will need, yeah.
Yeah.
Is it work?
More.
So, I can.
Let me show you.
Let me start with, yes.
How will you calculate the present value of F?
How will you calculate the present value of F? Present value formula.
Person values.
Then, yes.
Present value is F.
Over.
One plus, ladies come to break.
Rise to be, make sense.
This.
Right, yeah, and then...
How would you come play?
All this as well.
Asana Miguel.
Yep.
I mean, right?
C over R, the difference between superpatities.
One minus.
1 + R price 20.
Makes sense.
Do you understand how to get this formula?
What, what is this the person that I love?
This is the present value of these payments, and these payments.
I'm sure this question is an investment.
I don't know how much money I have invested.
Or, yes, I have invested it, yes.
But this investment pays you a fixed amount every year, every call it.
A fix amon, let me call it. See, the fix amon, I will receive.
You see?
One, two, three, 4, 5, 6, 7.
And at the end.
S is being returned.
What is the?
What is present value at the remembering of this?
How many customers there are? One, two, three, 4, 5, 10, and 11? No?
I can do this following two different methods. I can calculate present value of its cash flow, or I can do it thus.
This one, and then we are meeting.
If you were to do like the, would you put an I over R or because your drink has an I plus?
Would it be 9 cash flow would be here? Cortana is then because the payment will be starting the the negative.
Yeah.
It will start in people as well.
So, you need to start at 11.
How do you do this?
If you have understood this, you are done with today's class. In today's class, what I'm going to do is to repeat this.
I'm gonna do this with numbers. I'm from different ways, yep.
What are we gonna talk about today?
Bone, bone, bones, bones, bones, and bones, yes?
I will try to go as fast as I can to see your compounds pricing, and then...
I will calculate the price of a pound by this composition. That is what I have on there.
Yep, what I have done there is what I'm gonna do.
Okay, a bone is an annuity plus a zero.
Did you see this formula?
Can you see this formula?
These formulas?
Exactly, exactly the same.
Here, this is at the beginning.
Your F is at me.
Zero over R, 1 minus is exactly the same formula. Yeah? And you don't need to know the formulas. You don't need to memorize formulas.
If you could, is not going to be fat. If you could be of this course, is not memorizing from us. He's understanding what we are talking about.
U.S. bond market is incredible.
Big and it's growing here, corporate the bones, when are the bones blue?
Mortgage-based securities are not proper bonds, are packages of...
Morales, but it pays up and almost almost picks up. I will. I haven't done this stuff. If I would have done it, I would take out mortgage.
Why? Because it's not proper books. Commercial paper is okay. What? For markets, yes. This is regarding the Spanish and...
Oh no, it was Ana, the one who asked me about another girl.
Here, why is that pre-malaria school?
The spread between the 10 year near Montagut, the Italian, the Spanish, the French, yeah.
I'm not gonna ask.
Ohh, bring another view.
I don't know, probably. I haven't done the exam yet.
But I don't want you to.
Calculating one spread is what the difficulty is not going to be here. Same as Sam, I'm not gonna ask.
About this flight, does not come. What is the difference between a big boat and a big build?
Have you heard of T bond is one year, 10 to 30 years, T bill is short term.
So close.
You can find bills for, you can find T bills with 18 months, but the term of bills are shorter, much shorter. But the main difference between a T bill and a T-bone is that a bone is a bone with coupons.
Why a TV is just a zero combo.
All of you understand know what is happening.
All of you know understand what is about the couples, Angelina?
No, don't worry. Today is the day.
Bing.
I have already showed you, but I don't care.
What is this?
Do you remember? This is about with two horse.
You can buy this for whatever, and if you own this, you have the right in one year, for example, you get 5 EUR, and in two years you get 105 EUR.
One year.
Who wants and face value? Make sense?
How do you calculate the price of a loan with present value form?
You can have a bowl with coupons.
Or do you guys have a suitable?
What is that? A bond without couples, just one payment, one unique payment.
If you consider...
Along with coupons, you can speak.
Siri, you can speak and you can serve.
This, as I see your common, and each one of the coupons, as I see your common itself.
Make sense?
How will you calculate the price no matter if there are coupons or not? I calculating the present value of each other.
This one, this question, I can bring you the reasonable items. What happens? I know you said your concern. No, no, yeah, but let me go.
Where it is.
Yeah.
Why, what does why they mean?
The chance that the Spanish bank didn't pay back those off, right?
Yeah. For example, if the Spanish government, imagine that corruption is being discovered in Spain.
Yep, and this corruption makes don't throw us too much in the Spanish.
What would happen with?
With the spread, the spread will increase.
So this will be as the interest rate increases. And if interest rate increases, what will happen with price of bonds?
The price will pay same coupon, so in order to pay more return, the price should go down.
Yeah.
The name of the game we are playing is calculating present value of future customers.
Makes sense.
Okay, who holds bonds and why? Banks or reality is long asset or yes. In session 6, we will talk about interest rate risk. Not today. Interest rate risk is what happening interest rate change.
And what's happening in the rate changes? We will talk deeper in lesson in session 7, yes?
Okay, main characteristics of bonds, depending on the issuer, depending on the term, yes, it is, short term, long term, T bonds, corporate bonds, and whatever. Seniority, you can read it slowly, call ability, pull ability, you can send.
A ball together with a call option, yes?
You can, for example, convertibility.
I want to, do you remember Credit Ruiz?
If I have a bone, my dentist send you that having a stop.
The company goes to bankrupt.
The company goes into who gets paid before, shareholders or lenders.
If a company goes into Rangrazi.
who will receive their money back soon.
You know of a bone or a circle?
Do you understand the question I have asked?
Company who will receive their money before?
Yes.
Later. Thanks.
And if the company goes well, who will receive more money? Shareholders, shareholders. So I want to finance a startup.
And I don't want to.
Assuming too much risk, so I will finance, I will buy boats.
But the bone has one clause. It's really in case the company goes well.
Your bone will transform me too.
Stops.
You have bought a bone and it will become a stock if the company goes well. Make sense?
You can make with bonds, you can make with contracts, all you want. You can sign whatever. And what is the problem with these things?
The more complex a bone is, the harder it will be to trade.
the less liquid the instrument will be. How are all so many bombs all over the world, the same. Standard. They are absolutely standard. Why? Because the more standard, the more liquidity.
Fixing call me solely, make sense.
We understand the idea: the more standardized, the more liquid.
Let me go quick. How do you calculate the price of a home by calculating present value of future customs? Yes, let's see. Let me start with a CO compound and here. Let us compare 2 CO compounds. Both have a face value of 1000 and interest rate of.
Five percent and 2% respect, yes.
The year, 5, two, and one.
Let me come here.
That mean 8% to. I'm going to change the numbers. I'm not going to change the number. I'm going to change the order. Yes.
Five percent and 8%, and time to maturity, 10, 5, two, and one, yeah.
Eh, zero.
How will you calculate the price on a slop combo?
Yes.
Zero combo, present value equal to future value over 1 plus that is compute rate price, yes?
So, I'm gonna start with this one.
One Sanz.
One plus 5%.
Let me fix it.
Rise to them.
Exits?
So, if I pay today 633 and interest rates are of 10%, store are of 5%, how much money will I have after 10 years?
I thought so.
Makes sense.
What if internet rates?
Rise to 8% - what will happen with pressure ball?
If you can raise rice, what will happen with the price of the world?
You will drop.
On the other hand, if interest rates drop, what will happen in the price of the ball?
It will rise. Make sense?
And let me continue. As time to maturity gets shorter,
What will happen with the price of the ball? It will turn to back. It will approach to...
Hey, buddy.
Again, if it rephrase full price.
Will increase if interest rates drop, price will.
Price will decrease. Make sense?
Ask, time maturity get shorter.
As maturity approach.
But I is full then.
But I put them to Fabra.
Make sense?
Play.
Lower interest rates, higher bond prices, higher maturity, lower bond prices. The higher the maturity, the more the bank in maturity, the less the price will be.
The high, the higher interest rates, lower rates. Make sense?
Yeah.
what we have done in this slide.
Play with press and button. Let me see these numbers, 925. Yes, 10 numbers. Make sense?
OK, at the end, what is this? No matter if the yield is 2%, no matter if the yield is 5%, if it is 2% or if it is 5%, there is the pool to pack assigned maturity.
At the end, you will receive.
100 exists.
And you think there is race?
If it the rates rice from two.
To 5, the price will fall.
Makes sense.
A three-year bond face value 1000 and a coupon of 6%, required return 5%.
A three-year bond face value, three-year.
One, two, three.
Coupon of 6% and face value of 1000, so 6060 and 1060.
Yeah.
How do you see that?
I'm gonna...
The discounting rate.
Is going to raise this 5%, yes?
Five percent.
One, two, three, different things.
Yeah.
What is the price?
60 / 1 plus.
Five percent rise to the first, plus 60 / 1 5% rise to the second, yes?
Plus 1060 / 1 5% rise to the third.
Let me calculate this price.
Sixty over.
One plus 5%.
Rise to the Thirst.
All of you are with me.
All help me.
Why am I going to do that?
Instead of calculating this number in this way, I'm going to go the longer way. The longer way, yes, for three payments probably is more complicated than the shorter.
But I want you to fully understand everything from all perspectives.
I wanna go play.
Face value: 1000.
One thousand over there.
One plus 5% price to the.
Yes.
And now, I'm going to go play a three-year and with you.
As the different now, 2 perspectives.
Plus 60 over.
Five percent.
Times 1 minus.
One plus 5% rise to the.
Make sense?
Yep.
Face.
But...
Thanks, buddy.
One 1000 / 1 plus.
Five percent.
Rise to the Sir.
And now...
Coopers.
Let me take this one, 60. Let me open a parentheses, sorry.
Sixty over.
Five percent.
Yes, what is that?
I said, did you know?
A perpetrator will live forever.
One minus another perpetuity that will start.
One plus will start in year four. If it start in year four, I will calculate present value in year three.
Makes sense.
One 100 sixty-three.
And let me calculate it.
The price.
This one plus this one.
And the two numbers.
Here, one, two, 4, 5.
It is exactly the same number.
One thing I strongly recommend you.
is to calculate things through different ways. Also, I'm going to show you.
Net present value formula in Excel.
MPB.
At which rate? Five percent.
Of which numbers?
These numbers.
What is going to be the number?
Same.
No, if you see this in Excel, it's because you don't have enough size enough, yeah.
Make sense?
Any questions?
Please, I want all of you to fully understand how to get, how to calculate the price of a model.
Is it important?
I have explained it several times.
I don't care to, and I will continue. I will repeat it again, and I don't care to repeat, but I want to.
Hey, ohh, hey, now why do internet rates rise to 6%?
If you penetrate, rice, and chase them in.
Probably some time. If interest rates rise to 6%, what will happen with price of gold?
You do draw, but in this case, marinade.
Coupons price value is 1000, 60, 60, 60.
Six percent? What will be the price?
If I receive coupons of 6% and pay value of 1000.
Is it a Carmen? Yeah.
What does this mean? Face value equals to the price. is 1000. Why? Because if I get 1000, I get 6, 6%, 6%, 6%, yeah.
If it is 5%...
This would be a premium bond because you are paying or you are receiving, in case you say, more money than the than the three-back.
If it is 7%, it will be a discount ball, yes, and if it is 5%, sorry, 6%.
It would be a Palomo.
Make sense?
Yeah, please.
When it says require return, is that just another, like, they're just trying to say it was great.
Yes, yes, we would see that the required return.
Has to do more with the future.
And has to do with...
what the buyer requires. But we will talk more deeper about this. We're talking about cabin. Yeah, cabin. We will talk after the midterm about cabin. What is return required return?
It's at the top. Requirements are equals 5%. Oh, yes. Sometimes it says why is there yield to market? What is yield to market mean versus interest? OK.
What they give to market is that why return from the market is what everyone is expecting to get.
Makes sense. So what was the difference? What we learned about that later, the difference? Next day, we will talk about HPR, about Jill, but one of the hardest things from this course has to do with language. We will use...
Similar words to talk about race.
The Holocaust has to do with race.
I showed you the other day the difference between APR and EffectiveR. You can follow it because we are not going to work too much about that. Until we will see next day IRR, but step by step.
Today, what I want you is to know how to calculate the price model.
And in order to calculate the price, you will need to know a Vidal.
Also, what is the price of this book?
The price of this bone is 1000 percent, yes? And normally the price of the bone also would be 5 percent.
Can you call me a three-year home? Okay, five person.
Is this all I need?
I mean, is that that we don't do it will also be called Prats.
Access.
Okay.
Here you go, the numbers.
The bones price is not a new form.
Is we are continue working with what we have we have seen in last class? Is that me? I thought you were OK.
Makes sense.
So, somebody.
We are working with time, value of money, hope.
What we have been doing today is practicing overtime value of money for.
Makes sense. What are we going to do next class? You can find the slides in red space. What are we going to do in the next class? Continue working with Pamela of them.
that value of money forward with present value forward. Make sense?
Yes, anyone lives close to a man?
No, or what next day? I have all these hours and I'm not going yet for a man. Any questions?