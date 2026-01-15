# **📘 Session 26 — Swaps, AI Market Dynamics & Systemic Risk**

**Date:** November 26th, 2025  
**Duration:** 1h 14min  
**Instructor:** Prof. Luis Garvía Vega

---

# **1. Big Question of the Day: Is There an AI Bubble?**

### **1.1. Scale of the AI market**

- **Nvidia market cap:** ~$5 trillion.
    
- **S&P 500 total market cap:** ~$57 trillion.
    
- **U.S. GDP:** ~$30 trillion.
    

### **1.2. Key clarifications**

- **Market cap = stock (wealth)**.
    
- **GDP = flow (income over one year).**
    
- You _should not_ compare market cap to GDP directly; better compare:
    
    - **Market cap ↔ total wealth**
        
    - **GDP ↔ annual income**
        

### **1.3. Why people fear a bubble**

- Nvidia alone already represents **~10% of the S&P 500**.
    
- The pace of price growth is extraordinary.
    
- Investors, companies and governments are pouring money into AI at unprecedented scale.
    
- When expectations run faster than fundamentals → **bubbles form**.
    

---

# **2. Historical Analogy: The Coinbase IPO**

### **2.1. How companies grow**

A classical financing lifecycle:

1. **FFF (Family, Friends & Fools)**
    
2. **Business Angels / Seed Capital**
    
3. **Venture Capital**
    
4. **Private Equity**
    
5. **IPO — Initial Public Offering**
    

At each stage, investors buy **cheap** and hope to exit **expensive**.

### **2.2. Coinbase’s IPO as a cautionary tale**

- Coinbase IPO price: **~$342**.
    
- Within a year: drops to **~$50**.
    
- Classic “**pump & dump**–like dynamic”:
    
    - Massive media attention pre-IPO.
        
    - Price collapses once insiders and early investors exit.
        
    - Almost nobody follows the stock after the initial hype.
        

### **2.3. Purpose of the analogy**

- To understand why extremely high valuations (including in AI) demand caution.
    
- To recognize how _narrative_ often dominates _analysis_ in financial markets.
    

---

# **3. Nvidia, OpenAI, Alphabet (Gemini) & AI Market Structure**

### **3.1. Interconnected ecosystem**

AI is not one market — it is:

- **Hardware:** Nvidia, AMD.
    
- **Models:** OpenAI/ChatGPT, Google Gemini, Anthropic, Meta.
    
- **Cloud:** Azure, AWS, Google Cloud.
    
- **Applications/platforms:** countless startups + incumbents.
    

### **3.2. Why this matters**

- A disruption in one key node (e.g., Nvidia’s chips or a major regulatory event) affects the entire system.
    
- **When the correction happens**, it will not be isolated — it will ripple across the system.
    

### **3.3. Hypothesis from class**

- The market could correct **after the major OpenAI financial event** (IPO, strategic sale, or regulatory shift).
    
- Reason:
    
    - The OpenAI narrative currently _fuels_ the entire ecosystem.
        
    - Once the hype stabilizes, valuations may deflate.
        

---

# **4. The Swaps Market: The Largest Derivatives Market in the World**

### **4.1. Heuristic (rule of thumb) introduced in class**

The more you hear about something, the bigger or more relevant it often is — though biases may distort it.

### **4.2. Actual data**

Notional outstanding (approximate):

- **Interest Rate Swaps (IRS):** $450–500 trillion
    
- **Total Swaps Market (IRS + CDS + FX + Equity/Commodity):** $600 trillion or more
    
- For comparison:
    
    - **U.S. GDP:** $30 trillion
        
    - **World GDP:** ~$105 trillion
        

### **4.3. What is “notional amount”?**

- It is **not** the amount exchanged.
    
- It is the **reference amount** used to compute interest or payments.
    
- But large notional = **large systemic exposure**.
    

---

# **5. What Is a Swap? (Core Definition)**

### **5.1. General definition**

A **swap** is a financial contract in which two parties agree to exchange **streams of cash flows** over time.

### **5.2. Key features**

- Typically OTC (over-the-counter).
    
- Has **two legs**:
    
    - A **fixed leg**
        
    - A **floating leg**, or a foreign currency leg, or another asset.
        
- **No initial exchange of cash** when entering the swap.
    
- By construction:  
    [  
    PV(\text{Fixed Leg}) = PV(\text{Floating Leg})  
    ]  
    at inception.
    

### **5.3. Why swaps exist**

- To transform exposures:
    
    - Floating → fixed
        
    - Fixed → floating
        
    - USD → EUR
        
    - EUR → USD
        
- To hedge interest rate risk, currency risk, or commodity exposures.
    

---

# **6. Interest Rate Swaps (IRS)**

### **6.1. Standard IRS example**

You have a floating-rate mortgage based on the market short-term rate.

You want to turn it into **fixed**.

You enter an IRS:

- You **pay fixed** (e.g., 4.5%)
    
- You **receive floating** (whatever the reference rate is)
    

### **6.2. Scenarios**

- **Market rate rises to 6%** → you still effectively pay 4.5% → great deal.
    
- **Market rate falls to 3%** → you still pay 4.5% → you “overpay” the protection.
    

### **6.3. Key learning**

A swap is like purchasing **insurance** against adverse rate movements.

---

# **7. Currency Swaps**

### **7.1. Why they matter**

They allow firms to:

- Borrow in one currency,
    
- Swap obligations,
    
- Repay in another currency  
    without bearing exchange rate risk.
    

### **7.2. Example**

- A U.S. company earns USD but needs EUR.
    
- A Spanish company earns EUR but needs USD.
    
- They swap obligations at a pre-agreed FX rate.
    
- Both eliminate exchange rate uncertainty.
    

---

# **8. Forward Rates & Yield Curve (Revisited)**

### **8.1. Relationship between spot and forward rates**

[  
(1 + i_4)^4 = (1 + i_3)^3 (1 + f_{3,4})  
]

Where:

- (i_3): 3-year spot rate
    
- (i_4): 4-year spot rate
    
- (f_{3,4}): 1-year forward rate beginning at year 3
    

### **8.2. Importance for swaps**

- The fixed rate in a swap is essentially the **geometric average** of the relevant forward rates.
    
- A swap can be decomposed into a **portfolio of forward rate agreements (FRAs)**.
    

### **8.3. Exam relevance**

Students must:

- Compute forward rates.
    
- Understand yield curve structure.
    
- Know how swaps relate to forward rates.
    

---

# **9. Credit Default Swaps (CDS) & Systemic Risk**

### **9.1. What is a CDS?**

A CDS is an **insurance contract** against default of a company or a country.

- You pay a premium →
    
    - If default occurs → you receive a payout.
        

### **9.2. Ethical & systemic problems**

- CDS can be bought **without owning the underlying bond** → speculative.
    
- Investors can have **incentives for a country to fail**:
    
    - Example: CDS on Greek debt during the Eurozone crisis.
        

### **9.3. Metaphor from class**

“Buying CDS on a building you do not own and hoping it burns.”

### **9.4. Lessons from 2008**

- Complex products (ABS, MBS, CDOs, synthetic CDOs) can appear similar but differ radically inside.
    
- Many investors bought securities they did **not** understand.
    
- Some were effectively **time bombs**.
    

---

# **10. End-of-Course Derivatives Map**

### **What you must absolutely master:**

#### **10.1. Options**

- Calls / puts
    
- Long / short payoffs
    
- Put–call parity
    
- Exercise vs. expiration value
    
- Basic Black–Scholes intuition
    

#### **10.2. Futures & Forwards**

- Futures: standardized, exchange-traded
    
- Forwards: OTC, customizable
    
- Futures–spot parity
    
- Hedging logic
    
- Payoff structures
    

#### **10.3. Swaps**

- IRS: fixed vs. floating
    
- Currency swaps
    
- Notional meaning
    
- Zero-value at inception
    
- Present value logic and forward rates
    

#### **10.4. Risk & Bubbles**

- Understand how narratives (AI, crypto, etc.) move markets
    
- Recognize when valuations lose contact with fundamentals
    
- Remember systemic exposures (e.g., $600 trillion in swaps)
    

---

# **11. Final Message from Class**

- Next week: **full review of the entire derivatives block**.
    
- Focus on:
    
    - Problem Set 6
        
    - Pricing logic
        
    - Forward rates
        
    - Binomial + B&S intuition
        
- Enjoy Thanksgiving and remember:
    
    - “These days, you miss your family more than ever — don’t forget it.”
        



# Transcription
26 de noviembre de 2025, 5:09p.m.

1 h 14 min 9 s

Let me ask you one question. Let me ask you one question. Is there a Babel? Is there a Babel regarding a I?  
Is that above it regarding the eye?  
How much is in media market cut? But three over 5 trillion bacteria.  
It's incredible huge. You cannot compare market cap with GDPs because GDPs.  
I did cut. I did cut.  
It's a phone, it's something that is there and GDP is like a flow. It's something that goes or comes in, yes, in order to compare market cap with something we should compare market cap with wealth.  
Or the GDP with income, but whatever, 5 trillion is incredible huge. Yes, OK.  
When the battle will burst.  
When the mother will burst.  
Let me explain. I mean, I don't know. I don't have a crystal ball, but let me explain this with two more examples that will help us to understand what I think that is coming, yes.  
What I think that is, do you remember going base?  
We have Coinbase. Now normally I ask questions. Not if all of you will know all things that I am asking, I will not have.  
I will not have your yes so.  
So I know how to do two things at the same time new so.  
I.  
What is Coinbase?  
It's an exchange crypto exchange. What is an exchange coinbase in your PC work? Yes, NYU is a university.  
In YouTube you can you can learn things. Imagine that YouTube were dedicated just to learning. Would I say that YouTube is a university? Absolutely no. And it's a place where you can learn once I have made this.  
What is coinbase is an exchange that we can think that is something I I have already compared YouTube with YouTube with with a way, yes.  
Coinbase, I can say that it's like comparing.  
What is it like?  
And why New York stock exchange or like NASCAR? It's a market itself. It's a place where you can trade, where buyers and sellers go, yeah.  
It's an exchange and a grid to exchange. Yes, all of you have heard all of you about you know what is an APOAPO.  
IPO No. OK, IPO is stands for initial public offering. I have a company. My company is private and if I want this company to become public, there is something called an IPO.  
The IPO is you talk to New Europe Stock Exchange to the company and you tell them I am surprised. I am simplified. But you tell me I want to become public. You need an investment, an investment banking, then you need auditors and you need to pay 1,000,000 and wait $1 million and wait for a loan back.  
But this is becoming public. You don't have this. Your store does not work in a market. An idea is becoming public. Make sense.  
Coinbase have all of you have not all, but do you remember Coinbase IPO?  
Have you heard of Co, Co, ASAPO? Have you heard of it? Yeah.  
Because I am sure everyone has heard about Coinbase IPO, but nobody knows what has happened after. This is a a mental coin, yes.  
Normal. You have a smile. You have a small business.  
And you need finance. You have an idea. You don't have even a business. You have an idea who will give you money.  
No, I'm in my house. No, if if fears.  
Thanks for smiling. Yes, it stands for.  
Have you had all three years? No family, friends and foods.  
Whatever at the beginning, at the beginning, small money, you can look for a business engine. You can look for seed capital. That seed capital could have a form of a venture capital.  
Venture capital coming finance. Seed capital makes sense. You become here and why are venture capital is going to give you money? Venture capital is.  
What is the first thing someone thinks when giving you money? Thinking about private equity or venture capital? What are they thinking about? The exit. They think about buying your equity because they have an exit, yes.  
They are buying cheap in order to serve more responses. Make sense.  
In terms of boom, then it comes venture capital, venture capital, yes, and then your company grows, for example.  
You do you know pinks? The Smashburger? Do you know pinks? Pinks or Vitio? Smashburger is in Spain. It's Vitio. They were small. They create 5 restaurants then.  
I don't know if a venture capital is has gone there, but they have received money, they become bigger, the franchise smaller becomes bigger, then they become once they are big enough for a venture capital, then comes a private equity firm and take them to the next level. Makes sense.  
And you become international and then you start seeing probably you can do this. We have private equity firm or you can do it alone. Starbucks did it, I think alone or I don't know if there were private equity firms together with Starbucks, with Facebook, there were private equity firms with.  
Lot of companies there were private equity firms that helps you grow. Make sense. Are you understanding the process? Then private equity, private equity, yes. And why the private equity firm will buy this because.  
He wants to sell. They are buying ship in order to sell more expensive. And why do they sell more expensive? Because of growth. Make sense?  
Yes.  
What is next step?  
Private equity will What is the next step?  
Only home, home and they continue growing, I feel, yeah.  
The idea, everything can go public in an ideal process and then you sell to the market, you will see your money. This is, but also you can be added to capital.  
Capitalism. Sorry, you can be an entrepreneur and do this by yourself. Politcoinbase.  
Coinbase the the stream with crypto. The stream with crypto, yes.  
They were REITs before the APO. Yes, they were, but they were REITs. Normally, AP OS are there in order to continue growing, yes.  
They were rich in Quinto, but having.  
100 bitcoins is being reached.  
Yes, but yes, but what? Can you buy a house with Bitcoin?  
Yes, but what happens if now I say I I show you that I have 100 bitcoins, one of two?  
I should be able to demonstrate it that I've got the I've got them since year 2014 that is simple with blockchain or then someone will think that I am an article.  
You understand what I'm saying?  
What is the problem with you are rich, but just with crypto? What is the problem you got?  
That you need dollars in order to buy normal fees. With crypto you you can buy special things, but you need dollars, yes.  
Did Coinbase become public in the IPO in order to grow? No. Coinbase become public just in order to capitalize, to to convert, to transform all these crypto.  
$2.00  
Yes, do you remember that there was? Do you remember all the information regarding Coinbase IPO?  
Information for you. All of you know that convey there was an IPO. It was in media, but there's after the IPO who talk again about this IPO. Don't worry, let me show you.  
Let me show you.  
Tell me so.  
Let me show you Yahoo Finance.  
Yahoo Finance. I'm here. Let me write.  
Oh, yes.  
All five years, let me see.  
This is the same, no 2022. Perfect. This is the same graph.  
Yes, one second. Let me try to.  
Open this.  
Back.  
and everything  
OK.  
Please, I want all of you to see the IPO Coinbase become public there this.  
The price at which is the company.  
Where?  
342  
Look, please.  
The Compellica 300, yes.  
In less than a year, the price touched $50.  
You understand what I'm saying?  
Bitcoin base become public in order to continue growing.  
Did you grow? What is this?  
Is this? I'm asking a question. I'm not sure. Is this a scam?  
Is this a scan?  
Why all of you have heard before?  
Do you do you know what is a pump and dump scheme? Pump and dump? I pump lot of information and then dump. Who cares about when dumping? Nobody. And if nobody talks.  
Lot of people has bought here at 300.  
It go down. Why it go up? Because all the investment banking that is there selling, they cannot say I have done a spam and it you see it goes up then the market itself for red and continue working.  
But please, it went public at 300.  
And one year after, because the compromise of investment banking and also in this IPO with their clients is in six months, it will in six months. And did you see, do you see this peak? This is artificial.  
And this is reality. This is reality. And then later something would have happened. But I want you to see here, yes.  
Yes, what had happened here?  
What has happened here, 20th of of January, Trump, Trump. But what I want you to see, I'm not talking about crypto. This is a public company.  
I'm talking about about phone base and.  
You understand what I'm saying?  
OK, what I have explained how to finance technology, then what is an IBO process? Then I have told you about Coinbase with all this information. Now you can understand or I can explain on one hand what is Nvidia?  
Media is an absolutely big company. Inside the media there are tons of different things. There is also inside the media, think about year 2027.  
Year 2027.  
Year 2000 Twenty-seven 100 year, 100 years. The army. I don't know how to say it even in Spanish. Ejercito libera. Ejercito Popularcino.  
Anyone knows how to read Chinese?  
Is there no one? Do you know how to retake? No, no one. Sorry, so I'll go there.  
Why? Why I'm showing you this? Because it was founded. Sorry for this. It was founded the 1st of August year 1927. In two years we are going to have the century of the.  
Not seeing alarm me. Why I'm talking. I'm talking about Nvidia. Why I'm showing you this.  
I'm talking about Nvidia. Why I'm talking about this.  
A little island. I'm talking about Taiwan. I'm talking about Taiwan. I don't know what is going to happen about Taiwan.  
But probably something will happen about Taiwan.  
And why I'm talking about Taiwan? Because 90 percent, 90% of high technology chips. I'm talking about general chips. I'm talking about high technology chips are being manufactured in Taiwan.  
By TSMC, Emilia does not manufacture TSMC, yes.  
But.  
NVIDIA has a lot of things and NVIDIA has also Microsoft has also Google has also I think NVIDIA, NVIDIA bought Nokia or I I no not both.  
I don't know what company. I have to get whatever I can. No, I have sure.  
Have I tried this AGPT with you? No. What's up? This is great. Tell me about last biggest ball of.  
MB.  
And also let me go in quick. This is your class. Let me share this with NYU.  
Finance, yes, and also.  
I mean, if you sit there.  
And also and also, yes, let me come here and share with you this contact that is GPT. I don't have any Commission, yes.  
And you don't link your search GPT account. I mean, I have not introduced my personal data there, I think.  
And this is this helps me because I can use CGPT without logging in my WhatsApp.  
In my WhatsApp.  
And Vidya, here is most recent acquisitions, the C300 million from AI and Fabrica, who find be a complete 700 million acquisition, yes.  
NVIDIA is buying a lot of companies.  
But.  
And this is my personal view.  
Is there about that in AI?  
Yes, my personal view is that this when the bubble will burst or when the bubble will correct.  
I want your attention because I think that this is a big.  
Just after open AI comes back.  
Before open AI because in public, nothing will happen.  
I mean it will, it will continue growing, growing, growing. And why do I have told you about Coinbase IPO before talking about Open A I IPO? Because have you heard about Open A I IPO?  
Have you heard already what he what has been said?  
Is that biggest idea in life in the world? It's incredible being what what people are doing.  
OK. Um, yeah, that's so I just want to understand something is like, do you know Michael Bury is the guy that put like $200 million and put options and things in video? Yeah, like do you think what happened?  
Like kind of with Coinbase is kind of what's happening that like getting into extremely overvalued for what it is. I mean, careful because what I have, what I have so many there. Yeah, I don't know. I have a garden. Yeah.  
And Michael Barry soon and and personally I think that this ballot should have should burst. But also and also I know that these people are much clever than me, has much better information than me.  
And the only thing that I have in order to explain you things is the past. And what I'm hearing now is open AI, open AI, open AI and I love Sativity. I am the first one that is here saying how much I love Sativity.  
I am sending you the transcriptions. What I have sent you, what I have showed you last Monday is not just GPT. It's Gemini. It's alphabet. Personally, I think that the Gemini thing is much, much, much powerful.  
That's saltivity. And after this transcription, don't get angry with me saltivity because this transcription will run saltivity. But Alphabet has better numbers, has better, and Alphabet has the power to borrow steady. Imagine that Google starts saying, oh, I give all my.  
But that is a system. It's a system and Nvidia is part of the system and also Google has interest in Nvidia.  
And there is about it and it will need to be correct. But after open AI I deal, it's it's my fault.  
Why? Because.  
Because what I'm saying is logical. It makes sense. Oh yeah.  
Let's expand it and there are what is the difference between what we are reading now and what we need in year 2000, the.com crisis bubble. We think the.com crisis bubble. There was, there was Google, there was an app at the end.  
Grow. But there were a lot of companies that were nothing. They were absolutely overvaluated. Now I'm not saying that there is nothing, but what I'm saying is that there are a lot of things. I'm crazy. I'm crazy with the transcriptions with.  
With how much knowledge I'm getting, I'm crazy on how fast you deliver work homework. I I have no there are there are teachers that get angry because they ask for homework and homework that that group like a prompt.  
Does it make sense to give a prompt to your students and then tell your students not to not to introduce the prompt?  
What I'm saying is first idea. This idea is important. I don't have any idea. I don't know what I'm talking about. Second idea I have talked about important things that has to do with finance and corporate finance, idea process financing.  
The financing growth, yes, things that happens so quick. Then also I have shown you tons of tools.  
The power that I have when teaching or when explaining things is incredible. I have just gone there. I have shown you. I I have not shared this with you because I don't want to give you. You can Google this and here is.  
That's the media acquisitions, yes. And these these acquisitions, why I'm showing you this because the media has paid money for these acquisitions and probably these acquisitions are worthy. I mean something and probably we will have glasses we we will have.  
Something like this that will be with me always and something in my ear because now now all things I am saying are there. Now I take all transcriptions, I put it into Google, not Google M and I can have immediate summaries.  
But what I'm missing, what I want real time. I want this to happen in just right now and to manage it real time. And what what are we going to have? What do we have now? The same thing I'm talking with the area.  
Have you tried the Gemini talk voice mode?  
I have my computer. I have my telephone. I am using my telephone there with a.  
Do you have, do you have anyone have Chaddipi? Yeah, I'm on right now. Yes. Can you open Chaddipi? I mean, yeah, I'm using it right now. OK, let me. Yes, Chaddy.  
I'll turn that. Yeah, Jimmy, because Jimmy, Jimmy has more.  
Chat with Gemini and then.  
And.  
No, this is using. This is not using the microphone. I want to see if I have. There is one mode that is the talking mode talking that is the microphone.  
No, no. The microphone is just in order to tell him things. It's a mode that where you can start all over and you talk to me like, hey, is it like a blue circle? Let me see. No, I don't have.  
Whatever I have been both in Gemini and in once I finish, I will show you without any problem because once the the is recording, I cannot open the recording mode, but you can talk in a real time mode.  
Things are happening so fast. Things are happening so fast and we cannot grow forever.  
If I were you, I would not go to open AI. I knew. I would not go there. So we need a lot of people that will go, probably not going there will mean missing your life opportunity in order to invest in something that will make you.  
Gradable reads, but personally I would not vote.  
Make sense?  
Any questions regarding these things?  
Where are we going? We are moving into a correction, into a market correction and market is going to correct without any kind of doubt because 5 trillion.  
It's incredible big and you cannot have. What is the point that SP500500 stocks total worth of SP500 is 50 trillion.  
56 trillion, 56 trillion. But let me I love doing this. I love doing this.  
OB is.  
OB he's a SP500 market cap.  
Oh, I haven't.  
Have you seen this mistake? Instead of two zeros, I put 2 hyphens.  
No, he's there is some.  
Oh, match this SB500.  
ESB 500.  
Market cap, it's about 55 trillion, yes, I would say 55 trillion. I don't know what is the number.  
He's gonna give me 55 trillion and Nvidia is around 10%.  
57 so happy 57 trillion and NBDA is around 10%.  
500 Biggest U.S. companies Bolgate, Standard and Poor, IBM.  
OK, now.  
How much is USGDP?  
No one. This is a number you should know. How much does a ticket to NY to New York cost? I don't know. I don't want to know it. I don't want you to tell me. But it's a number that all of you know because you are familiarize it with this, no?  
You should become also. You should make an effort in order to familiarize yourself with these big numbers. I would say 2727 trillion, yes.  
How much is US GDP?  
ADP.  
I would say 27.  
And let me move. What are we going to talk about today? I haven't given you this. Sorry, I haven't this. What are we going to talk about today?  
OK, 30 trillion, 30 trillion.  
30 trillion. How much is SP556? No capital. I'm talking about market cap when talking about SP500.  
What are we going to talk about today? Pops.  
OB is swaps market small, no. We have heard of swaps. Have you ever heard of swaps?  
Little not too much, no.  
Obi, Isra Market, I'm going to ask.  
Heuristics. Do you know what is an heuristic? A rule of thumb? Rule of thumb?  
Pool of thumb and every stick is a non accurate way in order to know about something. Yes, for example.  
Who I have never been. I've been in the States, but I am not a professional regarding the States. What city is bigger? Tell where are you from? From the from the States, Seattle, Seattle.  
Florida. Florida. I don't know who is which city speaker. Chair of Florida is in the state. Miami. I don't know which one has more population.  
I don't know which one has more population, but one heuristic rule of thumb is Syria, China or Florida.  
Who have you heard more about? There is a bias because we are in Madrid and probably in Madrid we have heard more about Miami than about CRL because of Spanish.  
But the because regarding Florida and Seattle, I would say that Florida Miami, because I have heard more Miami than Seattle, but I don't know which one has more population probably.  
EJ, where are you from? I'm from Connecticut. Connecticut. I have traveled Connecticut. That's for social. I am a bigger. You see what I mean? The more you have heard about something, which country has more population?  
Something similar, but careful because with countries there are bias and there are countries that has to has to other factors. Yeah, because probably the country everyone has heard more about this face.  
India and China, which is the country with more population in the world.  
No, I asked this question in order to hear China, but last year India becomes bigger population terms 1.5 billion. OK, why I'm talking about this?  
Because careful we have these things and once I have all this data.  
Once I have all this data, I am absolutely on fire. How big is Schwab's market?  
Oh, the all the days, all the days the same.  
Sorry.  
Chinese.  
Obesity swaps market.  
OB he swaps market.  
Interest all global notional amount. Careful because notional amount is I'm going to talk. I'm going to show you what is notional amount, but please look this number.  
Just IRS interest rate swaps between 4450 and 500 trillions.  
10 times USDP, not ten, but seven times USDP, yes. And if I include other types of swaps as trading for swaps or currency swaps.  
600 trillion.  
Is notional amount. That notional amount is more than.  
Notion of Montes bigger.  
Interest rate swaps, credit default swaps, currency swaps, equity commodity swaps. Yeah, here you've got some numbers.  
Why so big? Because a lot of people wants to hedge, Yep.  
What are we going to talk about today? Swaps. What are swaps? This is the last lesson of the course.  
With the lesson, we are going to dedicate next week. Review, review already, yes.  
To review and have you feel I've been asked, forget about what happened at the beginning of the class. Have you feel the surprise regarding your great satisfaction with this course?  
Do you have the link?  
Oh.  
There was a link set to do or no?  
It's just for like all of us. It's for all of us. Well, like it's a full like and then and you go there and think about, oh, don't think about something.  
No, I'm not going to see. If you can go there and visit because then later I'm told that whatever next week I will ask you the same.  
Hey.  
Yeah, in my head. Next week we will dedicate a whole week to review this. I was thinking that the course is short because of that. I connect with the service that is something that is being asked, but next week we will review.  
Then today we finish with derivatives. Derivatives. What do we have talked about derivatives?  
Let me make it graphic. We have talked about the relatives. What I say, I say options, options, options.  
These are the traps.  
This options, options, options, feature options. So gloves are important.  
I'm going through them, so that's important because they are huge, but for the thinking about the final.  
Not too much, almost nothing. Thinking about the final and it goes so quick because today is not the day. I will strongly, strongly recommend you this weekend to go through a week knowledge.  
But because you know.  
Equity values in order to replace what is video, what are all these things? Yep.  
Then.  
Also, I strongly recommend you to know how to calculate the price of a home.  
To deliver problem set 6 and to do it. Problem set 6 is not is not going to get problem set 6. In problem set six you have one exercise that has to do with understanding.  
That is relatively simple. Once you understand it, it's just knowing what are how to upgrade the expiration value of different things.  
Then one binomial exercise that is also so simple. Personally, I will not spend too much time in anybody's standard time you will spend doing problem set. At least try to fully understand problem set. Yes.  
And then mastering duration.  
What has been said?  
There are things that we will talk about next week, the yield curve, forward rates, but today I will talk a little bit about forward rates, yes.  
Any questions? We are almost done.  
What are you gonna do? Night night? Tomorrow night?  
Exactly. Oh, tomorrow night. All the things good. Yeah. Oh, OK.  
Yeah, that's the idea about a lot. You haven't. You haven't missed each other. We had a lot of today, though.  
Cannot do this. Our expectations. You are playing with our expectations. What? Sorry.  
What is that swap?  
It's a delivery. What is a delivery? A financial instrument. What is a financial instrument? An asset that derives value because of a contractual place. It's an asset for the owner, a liability for the insurer, yes.  
And then there are there is a special kind of financial instrument whose price derives value from another financial instrument.  
This second financial instrument will be called underlying asset and the asset itself will be called derivative. What is a derivative? It's a financial instrument whose price derives from another financial instrument called derivative, yes.  
Then we have talked about options. We have talked about futures. What is a swap?  
That's what you don't have. You don't just have one underlying us normally in a swap.  
Will have.  
Two underlying assets, but because you are all you will always be swapping two things.  
When talking about swaps.  
One of the financial instruments will be one leg of the swab and the other one will be the other leg. Swabs have two legs. Why legs? Because they keep something longer.  
And when talking or when thinking about legs, how you will calculate the swap? How do you calculate the value of the swap to date?  
Present value of one day.  
Will be equal to present value of the other. Make sense.  
You take one leg, you take the other, you make the present value equal and you close the deal. So, so, so.  
When closing a future contract, you are not buying or you are not selling anything, although you are buying or selling a future, you are not paying for nothing. You are just in the short position or you are in the long position and it's because you have closed a contract.  
When you will pay in the future.  
Talking about swaps is exactly the same. When closing a swap, you don't pay anything. You don't receive any money. You are just closing that position. Make sense.  
Good.  
You can see how old are this is this is like.  
Huge market over 200 trillion. It's over 600 trillion. I've already sold, yes, but careful because.  
Notion. Notion. What does notional mean? For example, we are going to talk about. Let me let me make a spoiler, yes, in order to to explain this notion, yes.  
Interest rates are  
But now he's at 4%.  
What percentage?  
4%.  
Rates are 4%. I want to to.  
Get the mortgage and I get the mortgage with floating rate. Yes, this floating rate, this floating rate.  
Interest rates goes up. I will be unhappy. If interest rates go down, I will be happy. Make sense.  
Yes, I have both the mortgage. Now the rates are 4%. I have more both the mortgage with floating rate, yes.  
And imagine that I want to transform this mortgage into a fixed rate mortgage. How can I do this? Normally if you contract a fixed rate mortgage, you are not just contracting.  
Fixed rate models you are contracting a floating grow a floating rain markets together with combined with a swap.  
But let me explain. I have all the floating. Yes, I'm going to buy a swap.  
I'm going to buy a swap in order to get rid of interest rate risk. I don't want to bear interest rate risk, so.  
I want yes to have a 4% because of that I have bought the swap. Yes, I close the swap and first thing give me a price for the swap. And the price for the swap will have to do with the new cof. Yes, you take the new cof and the price for the swap.  
It's going to be for example 4.5%. I don't want to use 4%, but now in the gym group that we have like inverted now it's be around 4% but imagine that the fix.  
Is the fixed rate is 4.5% make sense?  
I close the contract.  
Imagine that interest rate remains at 4%.  
What I will need to do with this contract? I will need to pay because I want fixed rate. Yes, interest rates remain at 4%. I will need to pay. Make sense, yes.  
And here comes the difficulty, not the difficulty, the thing I want you to understand.  
Allmats, I will pay.  
Oh man, I would be.  
We need to get a notional number. We need to. This is not just a 4%, a 4.5%, also a 4.5% over.  
That the mortgage is 100 million. Yes, how much will be the notion of this contract 100 million?  
But if interest rates remain at 4%, I have closed the contract with you, Jeffrey. Yes, if interest rates remain at 4.5%, I will pay you 4.5%.  
50 basis points of 100. Imagine that interest rates goes up and goes up to 6%. Then I will still pay 4.5% so.  
You will pay me. You will pay me the difference between 4.5 and six 1.5% of 100 interest rates drops to 3%. I will pay you much more.  
And imagine that there's race.  
Increases to 4.5%, yes, interest rates, race prices.  
This.  
I will not pay you. You will not pay me. Make sense.  
Have you understood this?  
You have understood this. You are done with today's class. Let me go. Yeah.  
There is one numerical example there. I don't remember the number, but you will find the same.  
OK, what is written there? A swap is a contract where two counterparts counterparties agree to exchange one stream of of cash flow led.  
Again, another stream of customers in the example that I have shown you.  
The example that I have shown you, the notional value is not just 100 million.  
The notional value has to do with all interest that should be paid there. Do you understand what I mean? It's not just one unique payment. If there were just one unique payment, instead of being talking about a swap, we will be talking about a forward rate agreement.  
But because we are talking about the whole mortgage, there is not just one payment, there are a complete saying.  
Of customers, yes.  
Exchange rate swap. Interest rate swap. Oh, OK, OK. A swap is perfect.  
There are commodities swaps. There are interest rate swaps. That is the one that I have already explained you and imagine Perla that you are.  
From the States, I am spanked. There is nothing to imagine there.  
You are working in Spain and I'm working in the States.  
So you are gonna have incomes in euros?  
But you are from the States, so you want to come back to the States and you want dollars. I am in Spain. I'm in the States. I'm going to have incomes in dollars, but I would like euros, yes.  
We can close a currency swap. What is a currency swap? We agree today a rate, but in one year time you will give me. We agree that in one year time you are going to give me a fixed amount.  
Of euros, and I'm going to give you back a fixed amount of dollars.  
It's just a contract, an OTC contract, an over the counter contract, a contract that does not happen into a regulated market. It's outside the market between two parties.  
We get disagreement and in one year time you will have done your business no matter what the euro dollar price is and you will have your dollars and I will have my euros.  
Make sense?  
So this is the exchange rate swap. OK, so and then let me come back here 1.541 million. Yes, perfect. This is what I have explained. Yes, the numbers but same area.  
Use of swaps, tons of uses, firm use, fixed rate then and believes interest rates will fall, for example, or I have more than belief interest rates will fall then.  
Fixed income portfolio manager has long term bonds with fixed rate and believes interest rates are about to rise.  
OK, US firm has euro denominated values, but no offsetting offsetting for costs. Perfect. The #3 is the one that I have showed you and personally number one and two, I don't really like them.  
I don't really like these two examples. What?  
And something will happen. Happy to to see good things happening. Why I don't like these two examples? Because if you see these two examples, people are speculating.  
People are speculating and normally I don't know. I don't believe interest rates will fall or are about to rise. I don't know what is going to happen in the future, but I want to hedge.  
I want to hex. I don't want bad things to happen. You understand what I mean. So interest believes interest rates will fall. I will take it are my slides, but I have not read. I have not read it just before and I cannot.  
We did instantly, but after this I will pass the slide through the transcription and probably you will tell me what to correct for next session.  
Here what I will have is.  
It's filming is a fixed rate and.  
Once two heads against, once two heads against a falling interference.  
Because the business is not, the business of the company is not.  
And it's not speculating with markets. The business has to do with whatever. And if you think something that is going to happen, you will pay in order to edge and who will pay for that? Your client, because your client, once your clients normally don't care to pay a little bit more.  
And they don't like show prices, meaning them. OK, what is this? This is the example that I have already given. Firm has 100 million par value of long term bonds.  
With 6% on rate and believes interest rates are about to fall. What should we do? Don't think too much about the position because there are two parties in the contract, yes.  
Here if interest rate remain at 6% 00 and zero, yes 00 and zero and interest cost of bond, no matter what will happen with interest rate, it would be.  
6 million, six million, six million, yes. And regarding this cash flow, one part of the contract here 0 and 0, yes and here one part of the contract you would have would need to pay.  
Half a million to the other part and here just the opposite side. Do you understand what I'm saying? Don't think too much because there is nothing to think. There are two parties and one part is hedging against a four interest rates.  
And if someone is hitting against a fall, if the race fall.  
The one that is heavy too.  
Yes. Now if you want to head, interest rates for the one that is heading will receive money interest rates. Make sense.  
Swap pricing. How do you calculate the price of a swap?  
It depends. It depends on what on the thing you are calculating the price of a mortgage.  
The idea how do you calculate the swap, the price of the swap you are calculating how to price a mortgage. You should take the yield curve. In the yield curve you will find all data, all data regarding.  
Regarding what?  
Yields should you buy in order to hedge. You have there all the information and you consider that present value of this improve should be equal to the floating rate.  
And you calculate the sorry equal to the teacher and you are done in order you to explain here how do you calculate the rates of as well.  
The rates of ASUA are forward rates. Do you remember how to calculate forward rates? Let me do it one more time. This is something all of you should know for the final. All of you should know I have the new proof, yes.  
Year 123 and let me four years. Yes. Year 1234 years, yes.  
The new proof. Thanks to the new proof I can calculate.  
Thanks to the new proof, I can calculate the spots, but I can calculate arguing the spots. Yes, when thinking about when thinking about any financial instrument, but only there is a new proof because the new proof is for the risk free asset.  
Then you should call Standard Pools, Moody's or Fitch and regarding the credit rate, you will have a spread. You should consider this spread and regarding your default risk. Make sense.  
Coming back, you have IS3 and you have.  
IS4, yes.  
Or the you can break forward between 3:00 and 4:00.  
1 + I is 4 rise to the four is going to be 1 to 1 + I is 3 rise to the third time one plus forward between 3:00 and 4:00. Make sense?  
Yeah.  
Any questions?  
What is this?  
This is the rate at which I should hedge if I want to close my position when you in three years time to 4th.  
And if you take all four rates, you can easily calculate the rate of the spot.  
Nothing. This will be asked in the I mean forward rates, yes. Schwabs no.  
OK.  
So.  
You have all four words.  
And what are, what are, what are we doing here when calculating this rate?  
What is this?  
OK.  
What is this?  
Geometrical range. It's like calculating the HDR. Yeah, yeah, yeah. Do you remember when talking about it? So, but I mean this is in order to calculate the price of what is called.  
Playing vanilla. Have you ever had a play vanilla?  
Like Manila? What is that playing Manila program?  
Ice cream.  
Screen.  
Or is it Le Manila ice cream?  
This is important because this is the plain vanilla swap. There are times when explaining the plain vanilla swap people think about the most complicated thing.  
Plain vanilla ice cream or is it plain vanilla ice cream?  
The most simple with all toppings. Maybe just the plain vanilla is the most simple. What is a plain vanilla swap? It's a swap with a bone with coupons and that, yes.  
Don't, don't, don't get crazy with this, but it's a swap. Yes, a change between two parts. And what I want you to see here, what are we doing? What we have been doing constantly during this class?  
What do we have between again and again and again? Everything has to do with present value, formula, future value over 1 + r rise to D Everything has to do with summing. At the end, this formula is the sum of all future desk clause.  
But considering that as time pass because of rain.  
Which one?  
I am investing more, I am calculating present value less. The farther the less the present value for equal values. Make sense.  
OK, ure Si sua. This is this example is exactly the same example we did. We saw the other day with the Australia at the end. What is the difference between?  
A forward rate agreement, regulatory rate, a forward exchange agreement and a swap of interest rate. There is no limits the same problem.  
But in the case here there are several payments or there could be just one unique payment and create default swaps.  
We have time. Yes. Any any questions at this point?  
Any questions regarding this point? No. Now I want to tell you one quick story, quick story regarding the 2008 crisis. We have talked a little bit about 2008 crisis. There were more taxes that were before were given.  
When you said a phrase, word low, word low.  
Interest rates increase, price of this mortgage, financial expenses of this mortgage becomes more expensive, yes. And also not only there were mortgages, there were people has to start putting introducing these mortgages into packages.  
What were the names of these packages? Asset baked securities. Asset baked securities, a security with assets that are baked with what? With hoses? Yes, then there were also.  
Mortgage based securities, yes. And there were also collateralized, collateralized debts obligation, yes.  
Also, you can put several MBS inside another packet inside an MBS or you can find CDOS over MBS and over MBS, yes.  
What are all these things? What are all these things? Financial instruments that if you buy, they give you a return, like buying a stock.  
For buying a home. You buy a home, you receive returns and you are happy. Make sense?  
Imagine a school full of kids and you put a lot of candies, a lot of candies, blue, yellow. The school is open. What the kids are going to do?  
It all in demo. No investors and companies make sense.  
I have your something is about to happen with all these four kids.  
ABS. Do all of them look the same?  
DBS weather with this.  
There were people that start commercializing CDs. Why is a CDs is a credit default swap?  
Where is that when if also?  
It's a short regarding credit risk. You go into a bankruptcy, it's risk instead of being yours, it's mine.  
But is that really the form shot?  
OK, before swap is not a candy.  
It's an insurance. It's not something you pay and you will get money. It's an insurance. You win it because I'm losing.  
You understand what I'm saying?  
The example of the hills is like colors with the same.  
Look but with with LSD.  
Is that you? You understand what I'm saying? It looks the same, but it's not the same. And why we are using all these names? Because I want to sell my products and I don't care who is going to buy them. So one important idea is.  
Please always know what you're buying. Understand what you're buying. Don't buy something that you don't understand, and if you don't understand something, please ask someone to explain. I am sure that if I try to understand.  
Why Nvidia has paid $100 million in order to buy one AI company? Probably there will be several that will be worth, but probably there will be some companies that I will not be able to understand why they are doing. You understand what I'm saying?  
A I is a black box. You don't understand what is inside, but careful because one thing is A I as a black box box and another thing is a financial instrument as a black box that can explode in your face.  
That is not what I'm saying. So this is one idea and a second idea is that this is an insurance. Imagine.  
That I get a contract and insurance regarding this building. I will be paid $1.00 if the building is being burned.  
$1.00 I will get. We happened something. Something happened.  
$100.  
100,000.  
A million starting. Thank everyone. Is something to stay there? Stay inside.  
You understand what I'm saying, of course.  
Of course, just thinking about this is legal or should be legal. Yes, thinking about this should be legal. But there were CVS issuing issued against Greek price Greek government.  
So there were people that in case it went into a bankruptcy.  
Have a position that will make them win opinions in case Greek government went into a bankruptcy.  
People lie in grief. People lie in grief.  
Why? Because they lose their whole. So at the end I'm talking about that economy.  
When we are talking about micro, you understand that barring something is bad. But if I'm talking about macro, there is someone sitting NYU, sorry, NYU know in New York with a lot of CBS, then there is, there is someone sitting in the White House and it's just one call, call this one, call this one, then call this one.  
But you see that first idea, careful with investors, never buy what you are saying. And second idea has to do with ethics.  
This is bad and this has been done.  
The only thing I can do is go backwards in time, take it back, take it here and share it with you. Yes. So take care regarding all these things because there are times that we are playing with something different than yes.  
Buying or selling things at the end. There are countries, there are companies. Companies has employees and there are a lot of things. Any questions?  
City, city swabs, the financial crisis of 2008 Eurozone crisis. This is the one that I have talked to you about Greek. Swabs are portfolios of forward contracts. Forwards are priced by no arbitrage.  
So what rates are average of those forward rates. Last day we talk about future forwards and what we have done today. Let's calculate the average, the HDR, the geometric average. Yep, we are done.  
We are happy Thanksgiving. Enjoy and think about how much, how how much are you going to enjoy one more time.  
I never, never forget how how much you are missing your family these days. Don't forget it. Bye.  
Mhm.