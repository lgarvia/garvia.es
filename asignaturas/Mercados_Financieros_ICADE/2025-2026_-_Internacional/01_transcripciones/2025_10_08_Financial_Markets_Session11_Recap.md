# Student Recap — Session (Oct 8)

## What we did

- Quick **housekeeping**: solutions for Exercise Blocks 1 & 2 will be posted; midterm **study guide + sample questions** coming; **no class Wed 15th** (you’ll get a single calendar post with all dates).
    
- Refreshed **time value** tools:
    
    - (PV=\dfrac{FV}{(1+r)^t}), **NPV** decision rule, **IRR** = rate with NPV = 0.
        
- **Bond pricing**:
    
    - Coupon bond: (P=\sum_{t=1}^{T}\dfrac{CF_t}{(1+y)^t})
        
    - Zero-coupon: (P=\dfrac{FV}{(1+y)^T})
        
- **Holding-Period Return (HPR)** over one year:  
    (\displaystyle HPR=\dfrac{P_{sell}+CF-P_{buy}}{P_{buy}})
    
    - If yield doesn’t change, a par bond’s **HPR ≈ coupon rate**.
        
- **Duration (core topic)**:
    
    - **Macaulay duration** ((D_{Mac})): weighted-average **time** of PV cash flows  
        (\displaystyle D_{Mac}=\frac{\sum t\cdot \frac{CF_t}{(1+y)^t}}{P})
        
    - **Modified duration** ((D_{mod})): ( \displaystyle D_{mod}=\frac{D_{Mac}}{1+y} )
        
        - Sensitivity rule: **%ΔPrice ≈ –(D_{mod}) × Δy** (for small Δy).
            
    - Key properties:
        
        - **Zero-coupon**: (D_{Mac}=T).
            
        - With coupons: (D_{Mac}<T) (coupons pull cash flows earlier).
            
        - Higher duration ⇒ **more** price movement for the same rate change.
            
- **Examples** (10-yr, FV=1,000, c=2%):
    
    - At (y=2%): price ≈ 1,000; sell after 1 year with (y) unchanged → **HPR ≈ 2%**.
        
    - If (y) drops to **1%** → big **capital gain**, HPR ≈ **10.57%**.
        
    - If (y) rises to **3%** → **capital loss**, HPR ≈ **–5.79%**.
        
- **Why it matters**: Rapid hikes (hundreds of bps) can create large MTM losses on long-duration assets (SVB-type risk). “Hold to maturity” removes price risk **at maturity**, not before.
    

## Midterm (heads-up)

- Format (tentative): short definitions, a few short answers, **1–2 easy calculations**, and a brief **news-based** rates question.
    
- You’ll get the **study guide + sample items** shortly.
    

## What to be able to do (checklist)

- Compute **PV/NPV/IRR** and interpret accept/reject.
    
- Price **coupon** and **zero-coupon** bonds.
    
- Compute **Macaulay** and **Modified** duration; use **%ΔP ≈ –Dmod·Δy**.
    
- Explain why **higher duration = higher interest-rate risk**.
    
- Calculate **1-year HPR** under different yield scenarios.
    

## Next class

- Finish duration applications; introduce **convexity** and **DV01**.
    
- Practice: price/yield/duration under ±25–100 bps shocks.
    
- Bridge to the **yield curve** (intuition + basics of bootstrapping).
    

If you want, I can turn this into a one-page formula sheet for you.

# Transcript

8 de octubre de 2025, 8:35a.m.
Question this you now and the promove.
¿You have you have got no? ¿Ver de crisis no? You got nover the crisis is over.
Perfecto. Ay, I don't want to nadie, yo se.
Telling me that this was going on. More things. There was one hand there.
Do you have any specific I have? I'm going to share with you to the solutions, solutions for both and also what I'm going to do is now I'm going to do the type of exercise.
That you will find the meter, yes, and what I want you to know. So midterm is going to be 20 seconds.
Let me see here. OK, Wednesday the 15th, there won't be class 13th. There will be 20 will be. We have two days before, so no problem with that. I'm going to show you the questions and the study guide.
Almost immediately.
Regarding the question, what I want you to know, what I want you to know.
Present value is equal to future value over 1 + R right? This is present value formula and.
What I want you to know is.
OK.
I am. I need to make one investing of 1000. No, I need to put 1000 and I will get. Tell me no, no, but I'm using Excel because it's easier to explain, but let me put the numbers here.
And I will tell you first 1000 and 1000, yes and the point is.
With you too.
For example, I am maybe not these numbers.
Will you choose to make this investing or not? It will depend depends. It will depends on what on the rate you are looking for and first idea. If the discounting rate is 10% you can calculate net present value.
How do you calculate the percent value? I do it 1000 / 1 10 percent rise to the first plus 1000 / 1 10 percent rise to the second plus.
Sorry, plus -1000, yes, what I'm doing here, I'm calculating present value. All of you know how to do this in case anyone of you don't know how to do this.
Tell me and we will see. Yes, if if if rate is 10%, I don't know. I suppose this number would be positive, would be positive, the present value would be positive and in case this number is 30%, I don't know, but probably this number would be.
Percent value would be lower than 0. If the rate you are looking for is 10% or higher, this case will shoot in the in case the rate you are looking for is 30% or higher. In this case you will not will you will reject.
Yes, these numbers can be easily can easily be done by with a calculator. Yes, I'm not going to ask you for hard numbers.
And first idea, let me take, let me calculate these numbers. So the rate is 10%.
And this is 1000 / 1 10%.
Right to the 1st 909.
And 1000, so net present value in this case is the sum of this that it will be 735, yes.
Which is the rate that makes the present value changing, moving from positive to negative?
This rate is the IRR. Yes, that in Spanish he's he of this is 62. Well, sorry, it should have been done.
70% but and if look this number this is net present value and if here I write 70.
This would be negative. Make sense.
All of you know how to work with net present value.
How are we doing the IRR without
You will not be asked to do IRR without Excel, but I want you to know what is IRR.
I what I mean today, the other day we calculate the price of a boat. Today we are going to go a step forward and we are going to talk about duration and we will calculate duration and interest rate.
Sensitivity if for me.
Knowing how to calculate the price of a bond is something all of you should know. And knowing how to work with duration and knowing what is duration is something all of you should know. Yes, not only that, let me also.
I'm here, I don't know if I have the solutions here to all the exercises, but if not, I don't have the solutions here with me. I happy.
Where are you? Where are you? I don't know who is Victor.
And you are for 2025.
And share documents.
USB.
Perfect solutions of the first block of exercise. Probably the solutions are written in Spanish. Numbers are in English, but comments are being made in Spanish. Sorry for that, but.
And solutions for the.
Second block of exercises, yes, and also.
This is the second launch here. Yeah, it's what I'm gonna do.
Is what I'm gonna do. I'm gonna open.
I don't have it. I mean, I don't remember what are my in my computer. I will upload the task and I will let you upload it. Yep, and I'm going to show Abre.
There are now see your now violence. This is a message to myself in the future. Make sense and not only that also.
Upload the guide of stems. Upload the the things you should know.
The structure, the structure about the the structure about the midterm, I will confirm you next week, but the the structure will have. I don't know how many parts, but there will be.
First, short questions, general concepts, questions and you should write what is the concept? Yes. I will ask what is monetary policy? What is fiscal policy? What is a central bank? What is 2-3 concepts? Yes.
Then 2-3 short but longer questions.
One exercise.
Or 1-2 exercises, really simple exercises to solve and one piece of new.
Probably regarding interest rates and I will ask you to comment. I don't know if, I mean I don't know it yet, but.
Well, Monday we don't. We didn't talk. Sorry, what we didn't talk about last Monday.
I was sleepy. Monday is 8:00 in the morning. I was sleepy. What I what Monami be going to What happened last Monday at 12?
At 11.
Yeah, but it was after my class. It happened after this class. But what should I have talked about last Monday?
What is going on now in the States? Sorry, all of you that are European citizens or Korean citizens. Where am I? Sorry for talking so much about the States. I have just spoke about France.
Your Prime Minister, I think he resigned one year ago, Korea. I also care about Korea. I care about everyone. But what is going on now in the States?
No one. I'm going to take the least and give positive to people that price it's hand. I I want not only you to to ask things regarding meter.
I want you also to raise hands regarding finance. Why? Because if you don't do this, I will think that you want me just because of my body. I'm looking for something more in our relationship.
Athens, I thank you for this night. What is going on? You were going to say the same? Yeah.
Gatto is going to have a yeah, I'm going to take the pencil and you are going to get a positive and all these things the government sat down.
Why the French Prime Minister has resigned? Because he couldn't form government.
But why Beirut? I mean, in less than one month, we have talked about this. In less than one month, France, two prime ministers in France has resigned.
You said it.
Less than one month, super. Why? Why by you has resigned? Because he need to make.
Cash in expenses in expenses or 40,000, yes, or 40,000. Why there is a shutdown in the States, Frederick, you know when it is a shutdown.
No, I got my. I don't know your name still. Do you know where is the the state?
Alfredo. Alfonso. Oh, Alfonso or Waltres? Alfonso. Alfredo.
Hey, nice to meet you. I was missing you during weeks, but nice to have you.
I don't think so. I don't. What is this about? Why or why? What is going on? What is going to happen? What is happening now?
You don't know. Oh, there's a little person who moves the and so everything is.
The idea is relatively simple. This this thing regarding the shutdown normally in October is a history that for last four or five years has been repeated again and again. It has happened with Biden, not the shutdown.
What has happened with Biden is that they were close to the set now. They were close to the set now. What is the point that?
U.S. government cannot extend more than what is in their national budget, and in order to extend more, they need to have the approval from the Congress or less.
They said what I'm saying.
They have not got the approval from the government and they cannot, U.S. government cannot expend more. So what they have done.
Stop paying. And if they stop paying, there are two kind of things that happen with public agencies. There are public agencies that will not continue working and there are other public agencies.
That need have to continue working as we hope being taken or less. Yep.
What I'm talking about, I'm talking about fiscal policy and what is going on now in France? What is going on now in the States? What is happening also in Spain that governments are extending?
Much more than what they can get from taxes.
And this is a big, big, big disaster.
All government finances. All government finances.
With that, with that by issuing public debt and there is a big elephant, a big elephant in this room and the name of this elephant is there.
What is the rate ratio that over GDP in the states more or less?
I don't know. Anyone can look for it. I would bet at least 160 or 150. I don't know. Debt over, debt over GDP. What is the ratio?
Noah.
OK, it could be 12025 is a lot more than 100.
To be Japan. Anyone knows what is the rate here in Japan?
You know it. You are noticing.
250 is the highest in the world. 250 Who owns this debt? 90% of this debt is owned by Japanese.
I mean is you in that?
It's a disaster. I mean, having a little bit of it is healthy, but more than 100% of it is not healthy. And what is going to happen?
Don't know, but they sat down is something that all of you should know. Let me take over EDP.
Oh.
Great, but why I'm thinking about this?
And I will cut quickly with this.
But this is important.
Talking about about date.
Talking about that is absolutely important.
OK, there is a relatively small problem there. Spain.
We have a problem that has to do with pensions, pension funds, retirement, the baby boom people, baby boom people and retire retirement and there is a problem with that. Let me look for.
Where's Japan? Because I I know population pyramid.
Um.
Here in Japan they have a problem, but personally.
This problem regarding AG.
Regarding AG.
Sorry for for my 51 million.
No, this is the rebut personally this pyramid that is the coreas pyramid.
Is the one the state is not as bad. States one is not as bad as Spanish and Spanish is not as bad as Koreas, but Koreas culture is much better than Spanish because in Spain.
We are more individualized in the individualism than in Korea. But what is the problem? Anyone see any problem by looking this graph?
Yep.
I look in demographs, we can have lot of information, tell me.
Yeah, at the end, all these people that are 606468 start needing, they need.
They they need.
All these people need care, need medical care, need attention. The point is that who is going to take care of all these people? These ones probably. And there will be one point that this will require. Yes, let me show you.
Another I love demographs. I know I I know today I cannot go deeper into this, but demographs is great in order to understand what is going on and let me show you.
Two other.
One hub.
Israel.
And on the other hand, Palestine, these both of these looks like pyramids, you know, this is Palestine and this is Israel.
How many?
How many inhabitants that are here? 5.5 million. How many inhabitants? 9.5 How many inhabitants there were in Israel four or five years ago? 11.
What is this pyramid is healthy, but what is one of the issues Israel have that a lot of people from Israel are leaving their house, their houses? Yes, sorry, leaving their houses, leaving their country and going abroad.
Make sense?
On the other hand.
I haven't said anything. I'm talking about that on the.
Now what? What is one of the thoughts you can see here? More than 50% of the population is younger than 20 years. More than what is playing against me right now. Yes, Kevin, sorry for mentioning mixing or whatever I'm going to.
But a lot of kids there and what I want to show you that thinking about demographic you can you combine these two.
Groups of people into one unique state, one person, one vote.
Here this number is going down. Here this number is growing at an incredible high speed. You see what I mean? I'm talking about demographics. I'm talking that here probably.
These people will do population, yes. And on the other hand, these people, the population from here will be will go down, but because of natality, because people are travelling abroad and all this stuff, yes.
Demographic has to do also with the conflict. This is how it's another perspective. Yes, there are two things that I absolutely love.
When thinking about economics, when thinking about finance, one is demography. I look in demographic, you can see, you can foresee the future and the other one is geography. Yes, geography.
Why I am talking also why I'm talking also.
About this.
Because.
Because.
Cannot go. Let me let me focus. Yes, let me forget about this piece of plan. Just focus about this.
There is.
The West, all days disconnected with the West. Here is this is not as big as it is. This is not as big. This has to do with the maps, yes. But here is Russia and here there are trains, yes.
How do you connect? Portugal used to go this way.
What can you find here? You all, all of you know. What can you find here? Oil. The Marco Polo. Do you remember the Belt Rd. The the Silk Road? Yes. What is going on here?
Not just.
Oil, not just movement. Also you can have you have countries. Saudi is wealthy. Yemen is absolutely poor. You have also in meters, in kilometers.
Places where people are absolutely rich, just next to places where people are absolutely poor.
OK, geography is absolutely important and.
Knowing and me from here.
Hong Kong. What is Hong Kong? Here is Macau. Same thing. Oh, here is I was. I was here. Sorry, thinking that I was here.
Please, all of you. Please, all of you.
Sentin. Who knows Sentin from here? What? How about Sentin?
523-410-10, no.
No, since then, since then, who said this? Have you heard or not?
OK, OK. Yes, Nero. No, no. OK. How will you feel if someone will have not heard about the company?
How would you feel? Is it possible one human being without knowing where where where Silicon Valley is?
There are people, but is Silicon Valley important?
What is something?
Chinese Silicon Valley and trust me.
Two years ago, three years ago, I would not have said this.
Two years ago I would have said that I have doubts regarding who have more power, China or the states. I would have said this three years ago. Now after after knowing what BYD is doing, after knowing what is going on in center 10.
After knowing what is going on in Hong Kong, in Korea, in Taiwan.
After having Trump as president, I didn't have as doubts as I used to have. Make sense. Sorry for saying this thing. It's what I think if anyone disagree with me.
You can say it or not, but this is what I think and my thoughts has to do with data. I'm not saying that I love sea or that I love the East. What I'm saying is that if you are talking about football, I am from Aletico de Madrid.
I'm from Atletico Madrid, but if you are talking about football, soccer, Spain, we call soccer football. Real Madrid is the best. I'm Atletico Madrid. I hate to say that, but Real Madrid wins almost everything.
And China is doing things so this part of the world.
It's a mess being aware of what is going on here. Here you've got a phone. Also that if you think with all respect and I say this is because you are here.
If you think about Hong Kong, Cassamira, India, who has created all these problems? Palestine UK. No, no, it's not the case that I work before the States. There was the UK with a problem.
After the first and the Second World War, power has moved from UK to the States and in this movement a lot of things have changed.
I hope history of Hong Kong is amazing.
OK, yeah, yeah, whatever. So I will close this. I could be talking about this for years.
Any questions?
Uh.
Let me the last day.
Last day I told you what a bone was. Yes, here I've got the bone. Remember my bone? Bone with coupons? Yep.
On with coupons.
OK.
Coupons of 5%, yes, 550 and face value of 1000.
No.
What is the rate at which I'm going to trade this, for example 4%? If I know the rate, how can I calculate the price by doing present value of these future payments 50 / 1 plus?
4%.
Rise to the first make sense. This is present value of first payment.
And what is the the price at which this bond is being trade?
The price at which this bond is been is been traded is 1052 hundred. Make sense? OK, let me move. Where are the slides?
Here let me open the slides.
I have already served this is like with you. Also you can find this is like see model.
OK, the other day I did a summary. I'm going to share you all this concerns. Tina was a message, yes, and all the things you should know. Then value of money. Yep. What are we going to do during this?
Week and next week we are going to talk about interest rate risk. What is interest rate risk? What happened with the price of a ball if interest rate changes? All of you should know what happened if I increase interest rates.
What will happen with the price drop?
A question we will answer. There is how much?
How much? Yes, and the answer will be duration.
What is duration? If anyone answers time, the answer will be incorrect. What is duration? Interest rate sensitivity? How much the price will change when interest rate changes? Make sense?
OK. What are we going to talk about now? We are going to talk about the bond concept, what is a bond, maturity, price and duration. I have already calculated the price of the bond and I'm going to show you how to calculate the duration, yes.
And next week we will talk about banks.
Next Monday it will be really, really, really hard for me to talk about anything.
That won't be the next Monday.
Why? Because next Monday at 12, the Risk banking will announce who is the economics Nobel Prize.
And I really love to teach.
True Nobel Prizes eyes, yes.
I know also that I need to talk, I have to talk about the meter. I don't really care too much the meter, but you care and I care that because we won't have problems regarding things. But next Monday Nobel Prize will be announced. Who will receive this Nobel Prize has already been given.
Who? Erica. I'm looking to. Well, I'm looking to you. No, you are. You are. Victor. Victor. Victor. I really.
If I am talking about Nobel Prize, why do I look at Victor?
Anyone knows? No one Marco. Why do I? Why do I do Victor if I talk about double price? Victor is this person. Sorry for.
Holding the focus. This is Victor. Why do I talk about Victor? But it's my sweet friend, yes.
What was your name? Noah. Noah. Noah.
English. They talk Spanish better than me. I like it.
For Kemiro a Victor when talking about why do I do Victor when talking about Nobel Prizes?
But it happens in Sweden because we have a issue.
Because it happened.
And while I have thought about Frederica, we're thinking about peace, Nobel Prize.
It's correct what I'm thinking, what I'm saying. I think that yes, it's the only Nobel Prize that is not given by Sweden. Peace Nobel Prize has been given by Norway.
I'm thinking about Nobel Prize. I don't know if it has because of Trump, because of Trump. He was saying that he wants to see the Nobel Prize.
Is Nobel Prize.
October 15, that is going to be oh, this Wednesday personally.
Oh, here you've got. I don't. I want to talk about other things. I mean, I I love.
This What are all the? Where is the list? What is the list of?
Um.
Looking for the list of.
Cloud Nobel, all Nobel Prizes, categories, please.
Yes, so more. I'm looking for Mohammed Yunus that I think he received the Peace Prize in 2001. Anyone knows Mohammed Yunus?
Oh, 2001 now.
You know Andela.
No.
2006 2006 Thank you so much. Do you know him?
Muhammad. Muhammad Yunus. Who knows Muhammad Yunus?
No one. He created Grameen Bank.
And he received peace no price.
But he should have received the economics Nobel Prize. But in year 2006, economic people were not thinking about poorness and all these things. Economic people were were more thinking about making money without finish. Yes.
Whatever. Mohammad Yunus used to give micro credits, small credits to people. Yep, he received Nobel Prize. He take out from poverty tons of families, I think in Thailand.
I think in Thailand. I don't know if in Thailand. Sorry for not knowing where he used to give short amounts of money to families. To whom? In their families? To women. Why he used to give money to women?
Because men used to drink the money. I'm talking with not too much respect to men, but this, I mean, I mean, not all men were alcoholics, but women managing money in that culture were much better than men.
Make sense? Mohammed, you should have one. Sorry for doing this, but for me it's important you to know him. For me, it's important you to go farther than making money.
And thinking about poverty and all these things. But today we are talking about bond. What is a bond? All of you know all Americans, USA citizens knows what is an IOU note IOU.
All of you from in the States, Ariel, you know what is an AOU?
That's what you write in the in Finland. Do you know what is an IOU?
So simple, so simple. All not I owe you.
You do.
U2 is a musical group and U2 means also you too. Also you.
IOU also stands for IO.
You. Yes, I owe you is a note. What is written? This is an IOU. I promise to pay Captain Hilbert $379. Yes, what is an IOU is a is a paper. What is written? I want the money.
And you give me 100 and I owe you 100. Make sense in the Spanish we call I owe you notes in Spain. Sorry, not in Spanish. I don't know how it's called in all countries where Spanish is being talk.
But in Spain we call I owe you pagare. That pagare stands for I will pay you.
Pagare. Pagare is a paper. Yes. Each country has its own name for that, yes.
What is an IOU? I have already said there are thinking about bonds. Is an IOU note a bond? No, but does a bond looks like an IOU?
Absolutely, yes. The issuer of the bond, the borrower should pay the investor, the lender.
Then there is a face value that is the amount that is shown. Then there is maturity. Maturity is the term and there could be coupons or not. In case there are no coupons, we will be talking about 0 coupon bonds.
What is this? This is a bone. This is a bone with coupons and if you see one of these coupons, this bone.
This one has to do with railroad construction.
Why I'm talking about railroad construction? Because bombs were used with railroad construction and in in order to construct a train, a railroad, yes, what do you need? A big amount of money, but once you have construct.
The railroad, you will get a lot of money by using railroad. Make sense and an important other important thing today's today I'm so but railroad, all of you understand thing, know railroad.
There were nothing before, no, there were nothing. There were no railroad before railroad was construct, yes. And what was construct together with railroad?
In order to give service to railroad.
I love this kind of things. Railroad was constructed, yes. What else was construct together with the railroad? Something unexpected.
Telegraph. The Telegraph was a wire, a wire between two stations and with Morse, Morse, Morse code. What do you call Morse code with Morse code.
Two stations used to communicate now.
What was after telegraph? Once you have two stations connected, what can you transmit at an incredible high speed information? No.
What you should be thinking about in this class? If I say information, you should think about efficient market hypothesis. You should think about. As soon as you get the information, the better the information you can have.
What? Once you got information, there were there were people taking tons of money thanks to the Telegraph in the markets.
Telegraph, Telegraph and financial market development.
Those at the same time, people, people used to think, oh, we are going to make a lot of money with with railroad, yes.
That money was being made with the telephone, not just with, not just with goods, with goods. You understand what I'm saying?
You create a railroad. Why do you think you are going to make money by moving things from one place to another one? And at the same time that you were collecting physically things, yes.
Without no trees in it, you have the Telegraph and the Telegraph makes you win a lot of money. Sorry for talking about the Telegraph. Sorry for my head today is not. I'm looking. I don't know.
Any questions? Bonds. What is a bond?
There is now coupons. How do you maturity price? Yes, and before.
Um.
Let me show you how first. Let me show you how to calculate duration and then let me show you where duration came from. But it's better to 1st now show you how to calculate duration. What is duration? Interest rate sensitivity?
Donation look.
What is duration? What is it? What is called normal duration or McCauley duration? Yes, there are then you will see later modified duration.
Your How tall are you, Victor? How tall are you?
Yes, 195 and 6.2. No, no, don't worry. Don't worry. No, no. I I may you understand what I have asked that he's 6 and something 77 or 6.2? No, seven. Yeah, 6.2.
I'm 183 eighty-five 183, 6.2183, 6.2183 and 6.2.
More or less 600 six point 183 and 6.2 more or less the same.
It's safe.
I think these are units, no?
Modified duration and my calling duration is the same but in different units. You understand what I mean.
Who is taller? If you tell me 185 and you told me 6.2, yes, I don't know who is taller. I mean, I don't know unless I know it's unique.
But I can compare one thing into another one and I knew that this was going to happen once I asked you, oh dollar, you and oh dollar and also I know that more or less.
Both of you have same same height. OK, let me show you how to calculate first is duration that is so simple.
What is this, this, this? What is this present value of each cash flow? No, I have the coupons. From the coupons I calculate present value of fixed cash flow. No. And then I sum all these and I will get.
I sum all of these and I will get the price, yes.
Anyone make sense?
Just let me one second, one second, one second.
Anila, Anila, can you talk a little bit? No, no, you can continue, but low, low.
Present value of each cash flow, yes. How do we calculate duration by doing the weighted?
Time considering present value of its cash flow make sense.
I'm going to do it with one example and you will see the weighted average of time. In order to calculate the weighted average of time, what I'm doing is multiply its present value by.
First coupon is been paid in year one, so times one. Second coupon is been paid in year 2 * 2 and so over the sum of all this present value. That is the price. Make sense.
Let me calculate the duration of the example that I have already said with you. What is this?
Let me use same.
Same color green. What is this?
Oh, sorry, yes.
What is this present value of coupons? No, I'm going to follow that formula. I'm going to multiply this present value times one.
48 second one and 3rd.
1 * 2 * 3 * 4 * 5 * 6, yes. And now what I'm going to do is to sum all these. And what do I have by summing this if I sum?
T1 times present value. I have the numerator, yes.
The Sammies.
This sum is the numerator. Let me just this is spread and this is the numerator. What is duration?
5000 / 1000 that is 5.35.3.
Makes sense.
Let me do the same. I'm gonna get same number but from a different way.
Home maths this is of.
All in order to see the weight, this weight, in order to see this weight 48 over the price, yes, and this would be.
4.57 Yes. What is this 4.57? This means that price of the bond would be 1052, Yes. How much of this price corresponds to the first coupon?
A 4.557 makes sense.
How much correspond to next coupon? A little bit less. Why? Because money paid in the future will work less.
And last payment weights a lot, 78%. Make sense?
If I sum all these weights, how much I'm gonna get?
Who have said that? Thanks. So 100, yes. If I sum all these weights, I will get 100. And how do I calculate the duration?
Of one do I have in the price at 4.57%? How much of 2 I've got and how much of 6 do I have 4.73? So if I.
Calculate this time I will get the duration.
Yes, this is Macaulay duration. I don't know how to write Macaulay, Macaulay. I will bet, but I don't know how to write it. Sorry. So I will call it normal duration.
So let me have Internet.
Sorry, yes.
My collegration is what I have just told you. Let me show.
You have the Internet full of examples where my colleague duration is being explained. This is the formula that I have just showed you, yes.
My calling duration.
5.35 One important thing I've already told you, duration is not time. Duration is interest rate sensitivity. Yes, duration is not time.
Once I have told you that duration is no time, Macaulay duration is 5.35.
Yes.
5.35 years duration is not time, it's interest rate sensitivity, yes, and let me tell you an answer.
How much, how much the price of this bond will change if interest rate changes?
How much the price of this bond will change if interest rate changes? The answer.
Will be same as.
Price will change same as a 0 coupon bond with 5.35 years. Make sense? How much my price will change? Same as a zero.
On with this maturity make sense.
OK, one question that can perfectly been asked in the middle. What is the duration of a zero combo?
What is the duration of a 0 coupon bond?
What is the duration of a zero coupon bond? Anyone?
Yeah.
If you answer this after pressing more than 20 keys.
I will not accept the answer.
Just giving, but not too much. Let me take out this.
Is this Hashiro Pomon? Yes. What is its relation?
The maturity.
Think about it. What I'm doing weighted average of coupons. If I have just one coupon, 100% of price will correspond with this coupon. So duration will be equal to maturity. Make sense?
Yep.
What is the point? What are we talking about? Duration? Because coupons matter. Coupons matter. What must be true?
When talking about the duration of a bond with coupons, what must be true when talking about the duration of a bond with coupons? What must be true that the duration will always be?
Now we're done. It's maturity. Why? Because coupons will make the duration shorter. Think about interest rates sensitivity.
The higher the coupons, the lower the maturity. Yes. Anyone has a ruler? Let me see. It's a ruler. What do you call in the states rulers? I mean.
I mean UK.
I can hear you more than if you're saving both.
Torch and holding for flashlight. OK, thanks a lot, but this is more.
No, this is more than. Can you imagine a big ruler? Can I? I'm not going to break this. I'm not going to be.
Could you see that the bigger the ruler, the more I can move it?
That is, that is the ratio.
By forces, interest rate changes. The bigger the ruler, the bigger the duration, the more the price will change or a given or a given interest rate change. Make sense.
Yep.
I've never done this.
OK.
Sorry, I'm sorry. I am Anadik. I'm Anadik.
I cannot control myself.
OK.
And you are lucky that this is not my computer, because if this were my computer, I would have asked ChatGPT to create a video.
Duration is a measure of how sensitivity a bond's price is to change in interest rates. It tell us how much a bond will move when rate change. Let's imagine a short duration bond is like a short ruler, 10 centimeters. A long duration bond is like a long ruler, 1 meter.
Now hold and one ruler on a table and try to bend the other end. Yes, the short ruler moves very little. The long ruler bends a lot more with same force. This is exactly how duration works. Longer duration, more sensitive.
To interest rate changes, shorter duration, less sensitivity, more price stability, gain takeaways.
Wow.
So sorry for this. I don't know why I'm saying sorry.
I don't know why I'm saying so, but can you feel what I'm trying to transmit? This was in my head. Now it's written much better than what I can. I could have. I could never imagine.
I heard it with you one important thing.
Why Cortana?
You are growing so fast.
You are growing so fast.
I'm not telling you now to say because I know that you are in one class. You are boring probably. I don't know what why Cavalieri, Mario Cavalieri has gone during this weekend. I don't want to know it. I I'm not telling you now to feel or to say wow Luis what you are no.
What I'm saying is that.
Don't grow so fast and think about all these things as if you were a kid playing with new things.
Knowing what? Because the motor of this GPTI think is 4, it's 4.5. But what ChatGPT 3.5 can do is absolutely amazing and we have the five and also we have cloud and also we have the.
You see what I mean? That we are having so much tools that probably there are people, all people saying and thinking, oh, one new more, one new more tool, oh, more AI.
Oh, I'm tired of all these incredible things and you are in a ******* amusement park.
He's the part I.
Yeah.
You see what I'm trying to transmit you? Don't grow so fast. Think that you are in an amusement park. Enjoy, play, touch, play things.
Go deeper. I was thinking about. I have asked all the ruler. I was feeling that look.
And this is the best explanation I have ever gave regarding duration that that I have been explaining this for years. But you understand the point. No, this is crazy. And another thing, you are in an amusement park.
And those of you who will play the more will have no problems with money.
Do you want to make money? Learn AI.
Because this is absolutely incredible. Learn how to program using chat DPT lakers.
Lakers, the trainer of Lakers. What did he say yesterday? That Chadi PT was one of his closest friends. He spent hours talking with him.
Will he ask the DPT how to train Lakers? Absolutely, yes. Same as I have asked the DPT how to help me teaching my students how to explain duration in a better way. Yep. Sorry for this parenthesis. Let me go.
Good clear. Make sense.
Yep. Now. Oh, sorry. Here.
Calculate duration. Here you've got several examples in order to calculate duration, yes.
More examples, tons of examples and now.
Interest rate risk. Before talking about interest rate risk, let me introduce. Let me show you.
The other duration, modified duration. Let me come here. Duration in the duration in years, yes.
A modified duration is the result of making duration divided it included.
And that's it. You just take the ratio, you divide it into one plus the yield and you will get what is called modified ratio. And what is modified ratio?
The units are years modified duration. The units are percentage. Yes, one modified duration tell us.
How much in percentage the price of my bond will change? How much in percentage the price of my bond will change when interest rate?
Increases in 1%.
Makes sense and relationship whole match.
The price of the bond will change.
Present page.
Well, you get afraid changes.
When rate changes, 1%, yes, and modified relation is an approximation. It's not something exact, but how much?
Oh my, sorry, the price will change or if I do interest rate changes 1% if this increase in 1%.
My price will decrease modified ratio percent. This minus means that if interest rates increases, what will happen with the price of the bond?
If interest rates increases, what will happen with the present level? All of you should answer this immediately without thinking. If interest rates increases, what is the capital of USA? Washington, no.
All of you can answer this without thinking. If interest rates increases or what happened with pressure bombs.
You should answer this without if.
If interest rate increases, what will happen with pressure bonds? They will go down because of that negative relationship, yes.
What is modified duration? Let me calculate here. Modified duration, yes. What is modified duration 5.35 over?
One plus the deal that the deal is 4%.
5.14.
14% If interest rate increases in 1%, the price of my bond will decrease at 5.40%. Make sense?
Yep. And let me show you another quick example and we are done. Yes, here.
A government bond is issue without discount with a maturity of 10 years facial of 1010 coupons of 20 euros to be paid yearly. Yes, interest rate is 2%.
A government on this issue 10 years of maturity. OK, 10 years of maturity 121278910, yes.
Coupons of 20.
Face value is 1000 makes sense.
Here the interest rate is 2%. So if the interest rate is 2 percent, 2%, I'm going to calculate the price and price is going to be.
Present value of future cash flow flow 1 + 2% fix this.
One and so.
What is going to be the price if it if this bond pays coupons of 20 so pays coupons of 2%?
And the discounting rate I am using is 2%. What is going to be the price of this bond?
The price is 1000, yes.
No.
This is the price.
Oh, I have calculated internal little return. Sorry for this, but 1000 because he sees you without this code 10002020 and 2%. Yes, you can go one way or another way. The way I have taken is.
This other way I have here put 1000, yes, here I've got.
Cash flows and what I have done is calculate.
The IRR of this until will be super.
Yep.
I don't care. You go one way or another, but.
Here all of you are with me.
The bond is sold after one year time and the interest rate remain unchanged. Yes, after one year. What is going to be the return if I sell this bond after one year and interest rates remain unchanged? Yes.
After one year.
After one year, after one year, one year left. So after one year.
Yes, nine years left of maturity.
102020.
If interest rates remain unchanged, I'm going to calculate interest rates remain unchanged. Yes, 2% got it.
I'm going to calculate present value.
Of future cash flow, sorry, 1 + 2%. Let me fix this right to the first, yes.
After one year, if interest rates remain unchanged, what is going to be the price of this book? Anyone?
No one.
1000 It's still 1000 because the rates remain unchanged. It's paying a dividend, yes.
And let me calculate the holding period return. Let me calculate the return I'm going to get, yes, and the return I'm going to get this.
Future value in order to calculate the return from this formula, the return is future value over present value times one.
Any chance?
Teacher value over present value.
Minus what? No. Make sense.
Is there a return 0%?
I have bought these for 1000 and I am selling these for 1000. Is there return 0%?
I am missing something, but I'm missing.
I'm I'm missing I have received first coupon. So future value is not just 1000. Future value is 1000 plus the coupon that I have received, isn't it?
Yeah, I should also include this coupon.
So is 1000 20 / 1000 make sense?
And this is going to be a 2%. All of you understand what I'm saying.
So simple. I have bought this for 1000 and I have sold it after one year for 1000 and in the meanwhile I have got 20 euros.
So my return is 2%. Make sense.
What I'm showing you is value 1000, the return is 1000 29, 1000 / 1000. That is 2%. Yep, you can do this this way and also you can do this.
I say future value minus present value over present value this and you will get the same number here.
What I have done is future value minus present value minus present value over present value. Make sense all of you are with me.
OK. What if the interest rates rise to 3% or fall to 1%?
If interest rates fall to 1%, what is going to happen with the price at which I'm going to sell the boat?
It will go up, no. And look, instead of being winning 1%, I will be getting at 10.57%. Why? Because the price has raised from 1000 to 1085.
And it's a big, big amount of money. Make sense.
And what if the price? If the price is 2%, it's still the same. If rate is 2%, yes. What if the price? I'm talking about rate and price same using them as synonyms. At which price have you bought this bond?
I have voted at a 3% rate price and rate when talking about fixed income stands for the same lot of times. Make sense.
If interest rates goes up, careful because the price goes down and I will be losing money 5.79%. What if?
Where?
Zero 0.5% year 2000, I'm talking about Silicon Valley Bank, yes, price were 0.5 and in less than a year interest rates increases in more than 400 basic points, yes.
All of you are with me.
What happened with the bonds Silicon Valley Bank had in their balance sheet? This case maturity is 10%, so this fees in less than one year interest rates increases for more than 400 basic points.
And the bank lose more than 26%.
Fixed income is secure. If you wait till maturity, yes, but before maturity, careful with careful with interest rate risk.
What is interest rate risk? This is interest rate risk. We will continue be talking about interest rate risk. Today we have seen duration and modified duration and we will continue working on this next day. Make sense.
And let me share this Excel with you.
I should get one.
Today we haven't taken attendance. Maybe only Donny saying that Gato has has me something. They has extra.
Tell me something next day. You don't need to. Both of you don't need and you tell me something next day. And then the she is either. Have a nice weekend. You too.
I like your amusement park weapons. I like your amusement park weapons. My what? Your amusement park weapons. It's absolutely amazing. People are. I understand that the more power you go.
The more you feel like God and the more you rest saying no, but if you need to work hard for the money.
Nowadays, compared with 10 years ago, students.
The worst student today. Sorry, the worst student 10 years ago used to work more than the better student today.
And the best a student 10 years ago that works.
Work more than the best today.
Work a little, just a little. Enjoy. I'm recording. I haven't said this year is the first year I am recording all my classes. At the beginning I didn't record all of them because I was used. I get used to this, but now I'm recording everything.
It's amazing. I have all the transcript. If you want the transcript, just ask me and I will share it with you immediately. But it's amazing because now I don't want to stop the recording.
Because all things that you are saying and keeps record, you can use them, but you can use them at at the speed of light. So for me it's gonna give me 100 questions or give me the main topics we have gone but in the.
