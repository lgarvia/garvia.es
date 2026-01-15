Perfecto, Luis. Aquí tienes **las students notes de la sesión (futures + AI demo + forwards + commodities)** en **formato Markdown**, limpias, ordenadas y listas para copiar/pegar en tu Obsidian o donde quieras.

---

# **📘 Session 25 – Student Notes (Markdown Version)**

**Date:** November 24th, 2025  
**Length:** 1h 50min  
**Topic:** _Futures, Forwards, Commodities & AI Tools (Gemini + NotebookLM)_  
**Instructor:** Prof. Luis Garvía Vega

---

# **1. Opening Remarks**

- First session fully recorded with the new setup.
    
- Prof. Garvía shares all teaching materials with students under an open-source philosophy:  
    **“My content is yours — use it, improve it, make money with it if you want.”**
    
- Core message: _We are entering a technological “heat phase”; the smarter strategy is to slow down, think, and master the tools before the world overheats._
    

---

# **2. How to Study the Derivatives Block**

Professor recommends:

1. **Use the transcripts** (already shared) as study source.
    
2. Focus on sessions **22–24** (Options, Payoffs, Black-Scholes).
    
3. Use Google tools to turn transcripts into:
    
    - Mental maps
        
    - Study guides
        
    - Infographics
        
    - Podcasts
        
    - Videos
        
    - Problem reviews
        

---

# **3. AI Tools Demonstrated in Class**

## **3.1. Google Notebook LM**

NotebookLM generated:

- A **full mental map** of the options block.
    
- Summaries: definitions, strategies, payoff diagrams.
    
- Study guides based exclusively on class transcripts.
    

## **3.2. Google AI Studio – “Gemini Apps”**

Live demonstration in class:

- Professor asks Gemini to **build a full webpage** showing:
    
    - Binomial tree model
        
    - Inputs: ( S_0 ), strike, maturity, volatility
        
    - Options pricing (binomial + Black–Scholes)
        
    - Interactive charts
        
- Gemini generates ALL code:
    
    - HTML
        
    - CSS
        
    - JavaScript
        
    - Reactive UI
        
    - Real-time computation
        
- The class sees the code live, running correctly.
    

**Key idea for students:**

> “You can now build in 2 minutes what used to take me 2 hours. The skill is knowing _what_ to ask and _how_ the model works mechanically.”

## **3.3. Example: Interactive Markowitz App**

- Gemini produces a working Markowitz frontier generator from tickers in seconds.
    
- Allows risk/return charts, Sharpe ratios, Jensen’s alpha.
    
- Demonstrated live with Santander (SAN).
    

**Core message:**  
AI drastically accelerates financial computation and visualization.

---

# **4. Futures – Core Theory**

Today’s core content begins here.

## **4.1. What is a Futures Contract?**

A **futures contract** is:

- A _standardized_ agreement
    
- Traded on a _regulated exchange_
    
- To **buy or sell an asset in the future**
    
- At a price **agreed today**
    

**Important comparison:**

- **Futures:** standardized, exchange-traded, cleared every day
    
- **Forwards:** tailor-made, OTC (over the counter)
    

⚠️ _Language warning:_  
The word **“forward”** is used for:

1. **OTC forward contracts** (today’s topic)
    
2. **Interest rate forward rates** (term-structure topic)
    

The professor warns not to mix the two.

---

# **5. Pricing Futures**

Key formula (no arbitrage):

[  
F_0 = S_0 (1 + r)^T  
]

Where:

- ( F_0 ): futures price today
    
- ( S_0 ): spot price today
    
- ( r ): risk-free rate
    
- ( T ): time to maturity
    

**Important remark:**

> _“Futures prices do NOT predict the future. They simply tell you the price at which you can hedge today.”_

---

# **6. Futures vs. Options Risk**

- **With options:** maximum loss is premium paid.
    
- **With futures:** _you pay nothing upfront_, so:
    
    - Exposure is _linear_
        
    - Losses can be large
        
    - Brokers require margin
        

**Example payoff (long):**

If contract is for 5,000 oz silver at $14:

|Underlying Price|P/L|
|---|---|
|14|0|
|16|+10,000|
|12|–10,000|

---

# **7. Market Participants**

- **Hedgers:** reduce risk using futures.
    
- **Speculators:** take directional views (high risk/high reward).
    
- **Arbitrageurs:** exploit mispricings.
    

Prof. warns that “speculator” is often misused as an insult; in reality, they provide liquidity and make hedging possible.

---

# **8. Origins & Geography**

- First futures markets: **Japan (rice)**.
    
- Largest modern futures market: **Chicago Mercantile Exchange (CME)**.
    
- Why Chicago?
    
    - Surrounded by corn, wheat, soybeans
        
    - Highly weather-sensitive commodities → need for hedging
        

---

# **9. Futures–Spot Parity**

Different from put–call parity.

[  
F_0 = (S_0 - PV(\text{dividends})) (1 + r)^T  
]

---

# **10. Currency Futures & Carry Trade**

Example:

- US rate 0.5%
    
- Australia rate 3.5%
    
- Spot AUD/USD = 1.00
    

Forward rate:

[  
F = S_0 \frac{1+r_{US}}{1+r_{AUS}}  
]

Carry trade idea:

1. Borrow in low-interest currency
    
2. Convert
    
3. Invest in high-interest currency
    
4. Hedge with forward
    

**Prof warns:** carry trade can explode if exchange rates move quickly.

---

# **11. Commodity Futures & Storage**

Key new topic.

In commodities, futures pricing adjusts for:

- Storage cost
    
- Insurance
    
- Convenience yield
    

**Pandemic case: 2020 oil crash**

- Storage filled up worldwide
    
- Futures holders were forced to take delivery
    
- Some were paid to take barrels
    
- Futures prices went _negative_
    

Students must understand:

- Backwardation
    
- Contango
    
- Roll-over risk
    

---

# **12. Closing Messages**

- Most important idea today is **AI mastery**.
    
- You now have tools that:
    
    - Code
        
    - Analyze markets
        
    - Simulate derivatives
        
    - Generate complete applications
        
- But **understanding mechanics** is still essential.
    

> “The most important word in your career from now on is _Gemini_.  
> If you learn how to use it, you are 100× more powerful than any student of the last 30 years.”

---

# **13. Next Class**

- **Swaps**
    
- **Forward rates**
    
- **Review for final exam**
    

---

If quieres también la **versión para Obsidian con YAML**, dímelo y te la preparo con tu formato habitual `YYYY_MM_DD_Título.md`.


# Transcription
24 de noviembre de 2025, 5:08p.m.

1 h 50 min 38 s

**Luis Garvía Vega**   0:11  
Anyone knows about Vibe coding?  
Vibe coding.  
Vibe coding  
Have you tried?  
It's let me go with the best. First time this is being recorded.  
2.  
And be sure. OK, Jake, all the materials that I have shared with you is my own, my own, my be is my property.  
3.  
Once I I mean it's my property because I am the only one that is that is recorded because it's my classes and I have not steal this content from anyone. Once I have said this, it's all yours. You can do with us whatever you want.  
And the same applies to your friends. This class is free. I mean, I'm going to teach whatever, whatever, whatever I have to teach. But also this is personal. This is so personal that this open source.  
Philosophy from my point of view is fantastic, but it's personal. I'm not telling you to give me all your IP. No, I'm telling you that mine is yours, that you can do with yours whatever you want. And if you make money with all this content, I will be happy.  
Why? Because I'm telling how and we can. You understand the point, no? At the end, what we are living now is absolutely amazing. Once things, once they settle.  
The fact they.  
The quicker, the faster everything goes, the more important is to relax and take it easy and to stop and to think. There is a risk. There are a lot of risks and one of the risks is just.  
I call our people.  
Get difference that after the maniac phase and when people make things grow in the maniac phase. Once you have overheated, you start doing things and it's when you go into trouble. Now we are in the heat.  
We have AI, we have a lot of things. So I I said I'm gonna.  
Makes sense. This is today's class. Today we will talk about future, futures, futures, contract. We have already talked about futures and I will talk about futures, but before talking about futures.  
I want to talk about.  
Three things. Quickly things, yes.  
Tickets.  
And several of these things will be linked.  
1st and 2nd things I want to talk about.  
I have shared with you all the transcripts from last classes. Yes, you can download them all.  
You can do with them whatever you need. How do you have to study this course? You don't need the graduates. You don't need the graduates, but I'm going to take.  
Last three classes that are the ones we will talk about options, yes.  
Save.  
They.  
And safe. Yes, I will try to do this with all the cast. I don't. I would like to bring.  
This Wednesday or next week, all classes, but I have download these three, yes.  
Then I'll serve with you AI Studio Studio and I have served with you Google Notebook. Yes.  
Have you tried Google Now Googling?  
Have you tried Google Notebook LM?  
Is.  
Yemi night. I don't know how to write Yemi night. Sorry, which ones?  
I mean, I think we're done with twins.  
No.  
Then maybe.  
Diseminar and and there are now LLL.  
No, I'm.  
Working as an Internet.  
Yes.  
All of you know what does LLM stands for, or at least what is an LLM?  
Perfect. Gemini. All of you know what is Gemini is Google's one. Gemini has released last Wednesday Gemini 3.3, the version 3. Gemini.  
And they have not made a big announcement, but you can find this almost everywhere, everywhere thinking about Google ecosystem and it's so powerful.  
So I'm going to first thing I want to talk about. I'm going to create. I have open Google Notebook LM. I have create a Google Notebook LM file. Yes. And I'm going to pick and I'm going to take three transcripts, yes.  
Once you have the transcripts here you can find.  
Derivatives 1 Introduction to options, yes.  
Then.  
Let me take the last class. What did we talk about last class? This summary is been made from.  
This. Oh, this is in Spanish. Sorry.  
This is in Spanish but if you put this yourself, all the texts are in it. Yes, you put this.  
Let me just uh.  
Let me.  
Create a yes.  
It's the first time you are looking this tool. You have never seen it before.  
I have just made a mental map, yes.  
Derivatives, fundamental concepts, and here you've got. I want all the information in English. It's.  
Yeah, you have a mental map derivatives.  
Fundamental this all this is everything regarding options. If I would have so upload all things regarding this course, you can find all the all the things, yes, contractors, fundamentalist types, contract, options, contract, yes.  
Uh, Tipol. Uh, Valeratio only payoffs.  
For put parity and then black and source model.  
Binomial model and then yes, also you can ask.  
For example, you can ask to generate.  
A video to generate the podcast with the contents.  
You can generate a podcast. I'm going to create an infographic, yes.  
I'm creating a infography with all things that I have upload. ELM is just working with these sources. Yes, it's not going everywhere. So all this this infography is been made with.  
That you can raise reports.  
You can create targets in order to to review the class, yes.  
Enough while this is cooking.  
I'm gonna move. I'm gonna put a video.  
I'm going to create a video, but I'm going to tell the video to create the video.  
What is a video? What are videos?  
Yeah.  
Yes.  
Generating the video? Yes, let's see what the video will be.  
OK, I have opened one different tool. This is Google AI Studio. Google AI Studio. You can work almost with all tools from Google, but in app.  
In a way that is not public, yes, this is almost.  
Google AI Studio. All these things are free. I have just. I have just logged in with. I have just logged in with Google with my Google account, yes.  
Here there is written by Code Gen. AI apps. I'm going to press this, yes.  
I called in a apps.  
And now.  
Do you want me to review something regarding options regarding binomial model regarding?  
Regarding my nominal model, yes. Do you remember how to construct the portfolio? Do you? I'm going to tell.  
Hi, I'm going to tell you this is a normal problem, yes, but in this problem I'm going to ask Jeremina to deliver software.  
Hi. Hi.  
Want to create for my NYU finance?  
Students web page are completed.  
Webbates.  
Explaining them binomial model in action.  
Give in.  
The risk free asset.  
And we free I said.  
Great and taking all that from of the stock.  
Stop from the web. I want to show them also of powerful.  
Is by.  
Probably.  
And if you can connect binomial model with life.  
And so.  
Formula in a comprehensive.  
Way it will be great. Also I love church.  
You see what I'm asking for? Do you see how I'm asking for?  
Oh.  
Allow students to input parameter like stock price, strike price, time to expiration and volatility to see the binomial model in action. Display the calculated option price. Yes, he's thinking that impress and show you hope.  
The model is thinking.  
Prompting requirements, developing the the architecture, designing visuals, clarifying that acquisition, integrating that and design.  
Implementation strategy.  
Look, he's doing the complete web page with all the files.  
I have done this this weekend for in order. I can show you later in order to construct the the marketing portfolio set. Yes, I've done it and I have done it and it works perfectly.  
Construct a consulting real time data. Yes, this is the first time I'm asking something complex.  
But I don't have any doubt that he's going to perform well.  
Look components, stock search, parameter control results.  
OK, while this is working, let me come back here.  
I don't know but let me break this.  
OK.  
What can I open full screen here?  
It's good then and video, no?  
Oh.  
Failing to call them in.  
OK, model parameters 100.  
European goal steps 50 not do.  
OK, models parameter and you have binomial model price with 20 steps and black and shorts formula.  
OK, this is black and so's formula and this is the result you get from the binomial model. Yes, and here there is an explanation and key formulas.  
Or American and both Europeans or American should have same price.  
OK, I like this, but not too much. Why? Because guys, let me close this.  
OK.  
I like it, but I am.  
Missing the binomial trig graph.  
It is great.  
Makes sense, but have you seen that this is a complete webpage that also the one that I have created?  
4.  
Can ask directly. Can use Gemini without any problem. In this case it doesn't, but I don't know why it is not generating infographics now, but you can ask.  
A piece here.  
OK.  
Tell me how?  
Go to study this.  
I'm asking questions to the three transcripts that I answered with you.  
OK.  
I Juan the answer in.  
English.  
This is still working.  
OK, here.  
How to the the prompt was? Please tell me how to study this, yes.  
And the answer is studying the material. Specific options require a step-by-step approach, moving from basic terminology and mechanical understanding of contracts to advanced valuation theories and models. Here is a structural guide or how to study Mastering Basic Terminology and Mechanics session 22.  
The foundation of studying option is understanding the new terminology and the fundamental distinction between different derivatives types.  
Options versus futures, futures, options, key terms, stripe, premium, underlying, European. You see what I have asked. Give me a study guide. What? What is he doing? Give me guide, yes.  
Now here with this one, I guess so about one idea.  
The problem was not accurate. The problem was not detailed, but what I have.  
But here I give the parameters and he has made a calculator.  
Did you remember the Excel files that I shared with you?  
Each one of these files probably took took me more than one hour, 2 hours creating them. I enjoy working with Excel, but now I can work this. I can make all this work.  
Minutes. I can do it right in class with all of you, yes.  
Great. This is going. I have passed the binomial tree.  
And he's he's working with that. Any thoughts regarding this?  
Any thoughts regarding this?  
It's absolutely grace.  
It's crazy. I mean, here you got.  
Let me see if I can fix data. It does not allow me, but here I've got the data.  
OK.  
Oh, it's too large to let me do it smaller for the screen.  
Please disappear.  
That means something.  
Yeah.  
5.  
I think this is incredible.  
And in this life, Prasmi is incredible. I I have sent you one excerpt with all this content on important thing.  
I have done this.  
And the one that has on this words.  
Well, but careful.  
Because.  
You should know how to do it also next, or at least you should understand what are the mechanics that are there, yes.  
This is the same exercise that we did in class with the exer. Do you remember the exer that I shared with you?  
Is it the same?  
And what I have here, yes, looking how?  
Binomial model converts. Let me just 10 steps. Oh, sorry. Again, once you put zero, it disappears.  
Let me just do this with them.  
With them.  
You can come here. These are in the money. These are out of the money.  
And here you can see how these converts, yes.  
Linking binomial and black of the binomial model is a discrete time model. It construct a tree of possible future stock prices by heading at every step. Black and source formula is a continuous as the number of steps tend to Infinity.  
The difference between 1:00 and 1:00 and the other one tend to 0.  
Do you want me to share this with you in the WASA group?  
Yes.  
OK, any thoughts?  
This is incredible.  
Imagine that you got you want to transform this into an a commercial art.  
I haven't tried, but you just tell him or tell him to put a visa in their face. For example, thinking about the documentary for doing for two steps and if you want to do it with more steps, you ask for a lot this.  
Who are they?  
And you asked $0.50.  
I'm not going to ask for money for my material, but if you are thinking about pets, you can create something really quick regarding whatever when I'm going to do this winter.  
Create a full web page in order to put there all these books. I have learned how to do this.  
This weekend, this weekend, I'm gonna show you.  
I'm gonna show you the first one that I did.  
I'm going to show you the first one that I did.  
Oh, and then were you using the colors?  
Let me like to start. Oh, and with your finance. Sorry, let me come back here and I want to.  
Say this I know me and.  
Um.  
So.  
NYU Fundamental of Finance, 2025.  
Private. Great.  
This is absolutely incredible.  
This is crazy.  
OK, now let me go back.  
Our week portfolio. This is the one I did yesterday.  
And for the screen.  
How to use this Markovic portfolio? Here you choose. Do you have any ticker? Tesla. Tesla is there. Apple, Google, Microsoft, MSF, MSF, Microsoft ticker. Let me Google it.  
Oh, I'm going to use Spanish Banco Santander, yes.  
Sam.  
You put the ticker, you run the model.  
Processing the model, yes.  
And what do you have here? PCM market hypothesis and DSM. Sorry, PC market, the Markovic model and look.  
Which is this stock market, market. Don't know why that is with the market, but here you've got the color. Google is probably this one.  
Charge ratio analysis and Jensenalp analysis.  
I did this in my class this morning.  
Let's have 5 minutes in this.  
What I'm going to have prepared for next course.  
These that in a proper way better with color with all the same format.  
Is this amazing? Great.  
OK, let me start with today's class.  
Futures. We are almost done with the course.  
And.  
We are almost done. How do you think we are going to calculate the price of the future?  
With a relatively complex formula.  
Yeah.  
Future value present value over 1 + R rise to T yes.  
Present value is equal to future value over 1 + r.  
What do we know from? Do we know future value? We don't know future value because we don't have a crystal ball and we can calculate the value at which we can buy future value today, yes.  
So we will have the spot, we will have the price of future of the thing we want to buy in the future today. So knowing the spot, future value is going to be equal to the spot.  
Is present value times 1 + R rise to T makes sense.  
Yes.  
One absolutely important idea.  
In shows, but I says.  
Futures prices don't predict the future.  
Understand it. What can we do? We can hex. If I need gold, if I need fuel, if I need whatever in six months.  
What can we do? We can close today the price at which I will buy.  
Futures value tell tells me something about the future. Nothing. So it tells me the price at which I can head today. Make sense.  
Yes, so second area.  
If we know this boat, if we know this boat.  
We can calculate future value, yes, so there will always be.  
There will always be.  
A something called please Jake, please everyone. Future spot parity and future spot parity has nothing to do with gold.  
For to parity we have already seen it and it has anything to do with this one. Make sense.  
Yeah. Yeah. Can I ask you one personal question? Yeah. You just drink in my class or you drinking more time? You drink more time? Well, no, I I just drink the water.  
So and when I'm tired, like I have to go to the restroom, but it keeps me awake. So I pay attention. So if I if I have to use the restroom, then I won't fall asleep.  
So it like, keeps me awake. That's a lot of my tired eyes. Great. No, no. It's absolutely healthy. Yeah. Anna's healthy. Yeah. But so personally, I was thinking, I was thinking that in my in my glass, big one, one liter on how.  
25 hours. Break room. Sorry, I was thinking of my friend. No, no, no. It's just like a like my strategy to try to stay away from me and and it's great.  
There is something I I read. Indians used to do it. Indians, Indians, Indians, the American Indians. When they have a battle or they didn't get sleep, they drink a lot of water because this made them.  
Wake up. But once you are asleep, because of me, yeah.  
Makes sense. There are times that you're trying to wake up early in the morning and you go up at night. Oh, really? Yeah. But I like your food because drinking water makes you. It makes you makes you more awake. Yeah. So, sorry, coming back.  
Trade years, we are going to calculate futures price with one formula that you already know. Second idea that is something called futures parity that we are not going to talk too much about this.  
But please, it doesn't has anything to do with coal pool parity. Coal pool parity is for a coal and a food. We say strike and once you know one, you should know the other because you've got arbitrage and this has to do with the futures.  
And the spot price, what if there is a mismatch regarding the two prices arbitrage and it's these arbitrage is really simple to to understand if future prices are higher.  
And spot prices, what you will do today?  
By in order to solve the kitchen. If there is the opposite, you will do just the opposite. Make sense.  
OK. What are we going to do today? We are going to talk about control agreements, payoffs, then participants, some financial futures pricing and commodity future pricing, yes, today's last.  
All important things you already know. Next day we'll talk about swaps. Regarding swaps, what we will really do this Wednesday is to review.  
Prices, yes.  
OK, oh, this is a a second idea, an important idea also that important ideas.  
Something really important. One of the difficulties we have in this class has to do with languages. I've already said no.  
And teachers.  
Pictures.  
As a derivative, all of you know what is the future. We agreed to pay the price and we close the deal in one year time. Sorry, we close the deal today and you will give me the thing and I will pay you in one year time, for example.  
Yes, futures contract are divided into two types, two different types of contracts. Yes, one type is futures contracts, futures.  
Teachers and another type are bowlers.  
Yes, and also I have told you that next day we will talk about forwards, but.  
Next day we will talk about four words that has to do with brains. Yes, I'm careful because these four words has to do with futures that are in future, but are future.  
You understand what I'm saying? Does it sound confusing because it is we use.  
Same word, same word to talk about two different things and we use same word to talk about two different because these forwards are futures contract regarding grades.  
But careful because forward here has to do with commodities and with everything.  
So when I have told you 5 minutes ago, next day we will practice forward raise.  
What I'm talking about is about 1 plus the spot in year 3 rise to the third. Yes, it's equal for example to 1 plus the spot in year 2 right to the second times.  
One plus the power between two and three.  
This is how to get this forward rate and this forward rate.  
Can we close us as a forward contract regarding rates?  
But forget about race now.  
Focus, focus on futures contract that can be divided into futures and forward, yes.  
Have you understood what is that? Have you understood what is a futures contract?  
We close today the price and you will deliver the team. You will deliver me in one year and I will pay in one year time. This is a teacher contract, a teacher's contract, are they going to that.  
Futures and forwards. What is the difference between futures and forward? Anyone? The difference is just one forwards are being trade OPC.  
Powers are betrayed out easy. Why teachers are trade unregulated.  
Markets, yes, and because these are.  
Trading regulated markets. There is something called clearing house or the clearing. That is, imagine that I am the regulated market. Yes, Leah, you want to buy future. Yeah, you want to sell it.  
Rob wants to buy. You want to buy, yes. You go to the market and during the day you close all contracts with myself that I'm in the market. I close positions with each one of you.  
And at the end of the day, what I do in the market, I do the clearing. What is the clearing? Some rest, some difference, some making all the difference and I just close the position with the different. Do you understand what I mean?  
When the clearing is you are buying, you are selling. So you're you're you are going to buy what he's selling. You are selling, you are buying. So I connect your contract with you at the end of the day. I will not buy and sell everything.  
I will just take all your positions and at the at the end of the day I will clear all the positions and I will just buy yourself the difference. Make sense. This clearing has can happen with future.  
That are regulated, that are trading regulated market, but with forwards it cannot, it cannot work because it's obviously so.  
Futures are much more standardized. They have to be standardized. Futures, because they are standardized, are more legal.  
And on the other hand, powers are tailor made solutions for special situations. What is better?  
Depends. Imagine that I have.  
For example, I broke my arm and I need to wear a suit. I need a suit, but special suit. Then I should go to a tailor party. I want to buy a seat suit. I will buy.  
In a row related market where there are 20 dogs in a row, yes, 20 shoots are done in a row and because of the scale economies, I buy just one. Make sense? What is better? It depends. It depends on what on your needs.  
Yeah. Make sense?  
OPC for me, what is the most important thing we have seen today or we are going to or what is the most important thing we have seen in class or we are going to see in class today?  
You can have your luck.  
Jemi 9 Most important thing is Jemi 9. You can agree or not with me, but the power.  
When I have done in class today, you had you told me three years ago. No, you tell me one week ago.  
One week ago that I was going to be able in one class to do flag and solve formula combined with binomial model and show all the three.  
I will tell you that it's impossible and I have done it at the beginning of this class in in 2 minutes. I did that first.  
Her's request was we told the tree. I told him or her or it. I want the tree and what I received the tree.  
Most important thing I've shown you. I know I like it happy that the computer is you can always admit. No, no, don't worry, don't worry, don't worry, not worry.  
Most important thing we have seen if I were sitting there, I cannot stand one hour and a half just hearing to someone what I what what I have a computer in front of me.  
You can do two things, three things at the same time. What I strongly recommend you to do it. If you hear one word that is interested from you, just to listen.  
Then always be prepared to write something interesting that I'm saying, especially if it has to do with it. In the final I will ask then write.  
Then I will program all things that the teacher would have say in this class, or I will review all information. For example, if this class has to do with history and I talk about Jefferson, I will Google live.  
Different why because in order to learn more.  
And also if I were there, I will.  
Do whatever I would, I would need to do, but yes, attending.  
This is incredible. So coming back, most important thing of today's class I think has been Gemini and it's written something in the syllabus regarding Gemini.  
Do I have the obligation of talk about Gemini?  
Then why do I talk about Jerry guy?  
Because I think it's useful for blue.  
Because also I enjoy what I'm doing. And do I have the obligation of showing you binomial model and that can source the best I can? Yes. So there goes. But but what I'm saying is that the most important thing from my point of view of today's class.  
It's all this.  
If you don't understand something, who will you ask to do?  
Who has in your life? What sold you more questions?  
Who you do or teacher?  
And he's not bad. Also, I wish Peter's helped somewhere, some hope.  
Do I help something? OK, thanks. Lie to me. Oh, you have also the survive. The survives. They have told me you keep the minutes in order to fulfill survive. You can do that at the same time.  
But I I want my country with you and.  
Whatever. Makes sense. OTC. Oh, Grito. Grito is OTC.  
I mean, all important things happen so busy.  
All important things happen, so to see.  
OK. What is the pay off long and short?  
One important, one other important thing, please, if I tell you, if I tell you, you don't buy a future when buying a future, you understand what I'm saying.  
When buying a future, you don't buy a future. You don't buy because you don't pay. You put in the loan position. Yes, close the contract loan. A lot of people say I have buy futures, but you have not buy because you have not paid.  
I just close a contract and the same happened for sure. What is the payoff long and short of a forward contract for 5000 ounce of silver $40?  
$14.00 to be delivered in six months. What is the payoff?  
Long.  
The strike is 4P.  
Dollars. This is the underlying asset.  
How many units do I have bought 5 assumptions?  
$14.00 yes.  
If the underlying asset is gold, no.  
Silver. If silver worth at the end $14.00, my payoff will be 0.  
60 If I am loan, if I am loan, if I am buying, if I am buying at 40 and the price is 60, my payoff will be positive and two 2 * 5000, 10,000.  
I'm.  
6.  
7.  
So, this side is like a hole.  
But careful because when buying the future, I am not to just buy the right to buy, I'm buying also the obligation. But so if the silver close at 13.  
$13 I will be losing 5000.  
Negative 10,000 and so make sense.  
There's like more risk even in the future than options. No, no, well, she's here.  
It depends what do you what?  
If you are, you want to heads, there is no risk because you are headed. If you need gold, sorry, you need silver in the future.  
But you are really disclosing the price, but if you are speculating.  
You are absolutely right. Why? Because you are not paying anything. And if you buy futures, you can lose.  
Not infinitive because you have not invest anything. Normally if you are a professional investor, your broker will ask you for that, will charge you something as a guarantee.  
Normally they will ask you for a deposit, so you can consider this deposit as something that is being invested.  
But in these terms, he's much riskier, but in terms of returns.  
What you will win or lose will look the payoff will look like an option.  
Careful, because there is one side that is zero and you are not paying me.  
This is the room.  
If I am buying and I have the loan, it's because the seller has not received any money as just the opposite charge.  
Do you really need to grow to grow it? Exactly. You take worries with the positive, you do it negative and you grow it.  
Who are the people who buy XF futures?  
Sculpers and architectures, LHS on specific.  
Take too late is bad.  
In Spain, there are a lot of people saying that outline speculator and user speculate that's an insult.  
Speculating is bad.  
How do you say this can look like an eagle, but it's we pray in Spanish. We would call it we pray is one animal that when you imagine that you're walking in the desert.  
Boncher, Boncher, Boncher, Boncher are bad guys.  
Yeah, yeah, yeah. They're right, right. Poacher. They're like tiny leaves, like tiny. They also eat like dead animals. Yeah.  
Bions are bad animals. No, no, no. But also are bad. It's part of the life cycle. What I'm saying is that, yeah, I mean, they don't kill anyone. Yeah, but in the lions, they're bad. Yeah, in movies they're bad. They're connotated as bad.  
Careful with this name. Careful with this name. And no, no, I don't want to go into politics. I am. Oh, whoa. I am. It has a lot of messages. Who will message? No Fortune.  
I would like to open in Fortune. There is something worse than Fortune. There is something worse than Fortune.  
Reddit. Reddit. Now what is that? What is 4 Chan? It's not that popular. OK Oh, 4 Chan is something for boomers, no? Yeah, that's like old. It's like old. OK, what do you?  
Whatever. Speculators. Thanks to speculators. Thanks. Thanks to speculators, people can heads. On one hand, there are people that is worried where futures contract came from.  
Where is the biggest features market in the States?  
Transfers, two different answers and idea.  
Where futures contract came from? Where have been a lot of futures contract? Japan. Japan was, I mean in the States first place was I was going to say oil. No before oil.  
There are big futures contracts regarding oil, but before oil there is what is the biggest US futures market?  
And where the first boy, sorry, the first features contract was created a sister as he's written somebody has written. I'm not sure, but first features contract was created in Gaba.  
Regarding which commodity, something really difficult, yeah.  
Yes.  
With this you can have this problem, right? Right. Where is the biggest futures contract in the in the States?  
No, not meat, but but you can find meat, beans. It's a bean, a big bean.  
What is that mean?  
You don't know what he's doing, Mr. Bean. Bean. That's what he's doing.  
And he asked Google, you don't know.  
With the bean. Oh, that's not Mr. Bean. Do you know who Mr. Bean is? I know who. Look, I know. Bing. Mr. Bing. Yeah, you are like or like Bing.  
Bean Oh, look, there is Mr. Bean is fighting hard. Let me ask, where is the bean?  
Yeah.  
What is the mean?  
What is it? What can you find in Chicago apart from the bean?  
Anyone is from Chicago?  
No one. My name that Leah is from Chicago. What can you find in Chicago?  
I mean, yes, giving nothing apart from beans, meat and agriculture. Chicago is just in the middle and is surrounded by surrounded by fields with corn, with rice.  
White features. OK there.  
Because of the weather, I don't want to.  
Because of the weather, I can lose all my bills, all my rides. The price can change a lot because of the weather. What I'm going to do?  
I'm going to serve everything today. I don't care about the weather. I have a fixed amount and somebody will take the risk. I want to sleep well. My business has to do with the farm, with the with the field. Yes, I want to sleep well. I serve everything in the future.  
You will pay me no matter what the price will be, and depending on the price you will receive, I don't care about the price, you will receive a fixed amount. And what can you find in Chicago? The Chicago Auto Exchange, the biggest commodities market in the US.  
And why is it in Chicago? Because of the field, because of the Yep, because of the corn, because of oh, you have in the States, you have more.  
Corn. More corn than arena. How do you call arena in club? In Spain we have more trigo, trigo, wheat. In Europe we have more wheat. You have more corn in the States.  
I will let no somehow no. OK. Any questions?  
But.  
I love the bean. The bean is also beans. Yes. OK, hedge ratio, hedge ratio. What is the hedge ratio? We saw we were talking about derivatives.  
And we won't care about this one. It's ratio is that the whole Max this whole Max. The price of the future will change when the underlying asset changes. If you think about futures, that ratio will be around 1:00.  
Always the ratio will be around what if you think?  
About stock, about options, this ratio is absolutely important and we will talk about this ratio next week a lot because we have already seen we're talking about black and short formula like head ratio is ND1 and head ratio is also the slope and it's also the probability of finishing in the morning.  
So the money depends, yes, but regarding futures, that ratio is not as important. Let me come quick because there are two more things. How do you call, how do you calculate the price of the future?  
And.  
Before EES existed.  
Before ETFS exist, you could buy futures regarding an index. You can buy futures of SP500, but you cannot buy SP500 itself.  
You understand what I'm saying. Once CPS exists, you can buy SP500 buying a SP500 a year. Then all you can play futures within the spot.  
Yeah.  
I'm.  
The risk rate and spot futures parity has nothing to do with coal to fight.  
Then here is one number you take out the dividend, yes.  
One plus the risk minus the dividend, yes.  
You have all the numbers there and then also futures regarding currency.  
So, so simple. So, so simple.  
So, so simple. I don't know why I have. I'm going to take you one hour.  
No, no.  
Let me take this one, yes.  
These are dollars. These are dollars and this is the dollar rate.  
James.  
Spot games.  
Yes, and then make sense.  
What is the the rate at which you can change the spot of dollars even the all of you have dollars in the States and now you are trading with you are trading with euros.  
You know what is, what is the rate that change? You can calculate the future, a future exchange, detention, the rates, the risk rate is being paid by the Fed or in case you're in Europe by the Europeans and come back. Make sense.  
I'm not good.  
This is one example US.  
4.5 Australia 3.5 today exchange rate is 1 Australia over U.S. dollar.  
Australia over U.S. dollar. So this is the spot that is one, no? What is the US rate of .5?  
0.51 plus 0.5 yes and the other one is 1.1 + 3.5% percent yes do this.  
And you can calculate the forward rate.  
How would you profit from the interest rate difference?  
Dollars. Fed is paying less. Australian Central Bank is paying more, so I will lend dollars.  
I'm sorry, I will. I will borrow dollars. I will convert them into Australian dollars. Yes. Are you following me? I will invest there. I will trade them back and then I will pay the dollars.  
At a lower rate.  
Have you understood what I said? This is called the carry trade.  
This is called the current trade. Therefore because current trade can explode to your face because currency prices can change due to interest rates. Make sense.  
Can we trade something?  
That can can be dangerous because normally there is forward, power, sorry, spot forward parity.  
And if a lot of people start doing the car replay, both will increase, four will increase. At the end you can have a big explosion in your face to the car replay, but this is called car replay. Makes sense.  
I don't care too much about current trade. I care. I want to come here commodities and why I want to come here because of a.  
Because of the pandemic, because of the lockdown, what I'm going to talk about, if I'm talking about the pandemic for the lockdown.  
You have given this answer before. I'm going to talk about the pandemic, the lockdown and one commodity. Let me explain you so quickly. Yes.  
When talking about commodities, you should also take into account the storage price, the storage cost, yes, and the storage cost you you put it there and just to say.  
Mon generally.  
In terms of commodity, this is a convenience deal that has to do with the cost it can have of money.  
Today the price of the oil is 100, yes. Futures prices in three months is 200. Yes, I'm exaggerating. Today it's 100. Future price is 200.  
What you will do by today in order to say in the future, no?  
But if you need to buy or if you want to buy oil today, what is the problem you will have in a normal person by buying the future today that you will need a place to start? Make sense?  
Yes, what happened given the minute?  
There were there is something called rollover. Rollover is that there is a called a future, a called group parity, you know there is a spot future parity.  
This and we are.  
Futures spot value, yes. And what is the rollover? Once future time arrive, I do the rollover. I instead of giving you the oil, I buy another futures company.  
And I continue make sense with same price and at the end I am just trading with futures regarding oil without having.  
To store it or to buy future. Make sense.  
What happened with oil market during the pandemic? It stopped.  
It stopped, yes.  
And imagine that everything is stopped. All gas line, all gas line, gas stations are.  
Full with oil. All seek containers are full with oil.  
And what happened with all these people that has bought futures contract than or not in 2020?  
They were going to receive. They have bought, they have paid in order to receive oil. Make sense.  
What would they need to do? They can have a place in order to start it.  
Pay people in order to help people these cultures that they have. Make sense there were people.  
That not only receive oil.  
But also receive money in order to get this oil.  
You understand what I'm saying? There were negative futures prices.  
They were. There were people.  
A for bad, sorry A for seven.  
I need to sell this thing that I have bought. I'm going to sell you the thing. I'm going to pay you.  
So they were, they were buying oil and also they were receiving money.  
But I'm saying that careful with the futures, futures and spot parity because if a lot of people start buying futures, there is one moment where all these futures contracts should be realized and once this happens there will be a lot of hole in the market and price can.  
Suddenly there is a lot of oil and suddenly low down.  
Today a lot of people is buying because there is a lot they avoid. A lot of people is buying in the future and when the future right, all these people that has gone are selling and the price fall. Yes, these are price pattern.  
These are two price patterns that are contained 1 backwardation, yes. And when people start thinking about I expect the price to go down or to go up at the end, what you can find is something what happened during the pandemic was so yes, yes, yes, yes.  
But it happened and with future you can find movements like this. If you own a gas station, you don't need to work. If you are buying because you know that you will sell and for example if there is a pandemic trial, you will have to reserves in order to keep them.  
And if there is a pandemic, you can also, oh, you want me to keep paying and I would buy it. So you can do at least a good business. But if you are just a speculator, careful because your speculation could be really, really.  
Expensive. Like Sir. Do I have certain slides with you? Yes. Yeah. So we are going to see you this Wednesday.  
From our conclusions, futures are we are as with most derivatives are price of than the rain by no arbitrage whatever we have done the hardest part of it. Yes, this is just futures and trapses.  
Pressing things that we have already started.  
Bye.  
Thank you. Welcome.  
Well done.  
Oh, thanks.  
Thank you. Yes, thank you.  
Use these tools are incredible. Yeah. Have you seen the Sora AI videos? Yeah, that's crazy. Sora. I can't even tell him. Sora, but also Nana Banana. Yeah.  
The Google One has improved a lot last last week, so Sora is impressive and I am feeling that there are and what you have said regarding you have said that AI in the States is weak.  
Because of China, China are we are releasing all things China are releasing, releasing are open source. So what I was talking about before was that I think because the US is a thing of like state laws which is federal laws and I think so Trump is going after.  
State laws in the US. So the states can't have like the state. Yeah, state laws. State laws. Yeah, I I want because after all things you tell me, I I probably seen things in Lickety.  
OK, tell me what I want to understand. No, I'm going to say because I don't know about it myself, but if you look up Trump AI state laws, I see something. Oh, they didn't use that. No, this has to do with crypto from.  
State law. Yeah, yeah, yeah. Just the big thing that I got. So I think federal government has more power than.  
Let me.  
I want a summario.  
No, don't worry. Thanks a lot. Investigating. Now I don't want you to investigate.  
Yeah.  
Whatever, I don't want to investigate.  
So now disconnected.  
It has to spin.  
Oh, federal government was trying to put a common law regarding A I and they have.  
Yeah, they have to spend that. So they went, they wanted to have a common law and they have time late.  
It looks.  
Yeah. And personally, I mean, I didn't have all the information here, but.  
You can meet on this page.  
If you ask Google or you have a lot of companies, so for example and they are trying to.  
Make all the same sequence.  
And all AA people says I want to continue in the the wood light. I think that this goes on on this also do with fighting regarding because at the end everything has to do with money and power.  
Thank you. See you.  
Hello.