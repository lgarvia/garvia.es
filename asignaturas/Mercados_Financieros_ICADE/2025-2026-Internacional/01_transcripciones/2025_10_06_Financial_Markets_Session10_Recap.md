# Student Recap — Bonds 101 + Market Context

## Admin

- **Final exam:** Tue **Dec 3**, 08:00.
    
- **Midterm:** Mon **Oct 22** (to be reconfirmed on Moodle/WhatsApp).
    
- **HW (Problem Set 1):** submit on **Moodle** (late OK due to instructor delay).
    
- One **Wednesday** will be free (date TBC).
    

## From Monetary Policy → Today

- Pre-2008: policy = **interest rates**.
    
- Post-2008: **rates + QE/QT**; **monetary base ↑**, **money multiplier ↓**.
    
- 2020 checks → **M2 jump → inflation** (US demand-led).
    
- Europe’s inflation skewed by **energy supply shock** (war).
    

## ETFs & Stablecoins (context)

- **ETFs:** listed funds tracking indices/commodities/Bitcoin; high liquidity; major issuers **BlackRock**/**Vanguard**.
    
- **Stablecoins:** on-chain dollars used for **parking**, **cross-border payments/remittances**, and in high-inflation countries; very liquid in large caps (USDT/USDC).
    
- Crypto liquidity is asset-dependent (BTC/ETH deep; long tail thin).
    

## Market Architecture

- **Market supervisors** (e.g., SEC, AMF, CNMV, FSA/FIN-FSA, FSC): licensing, surveillance, enforcement.
    
- **Banking supervision & monetary policy:** **central banks** (Fed, ECB/Eurosystem, BoE, SNB, etc.).
    

## Efficient Market Hypothesis (refresh)

- **Weak:** prices reflect past prices.
    
- **Semi-strong:** all **public** info.
    
- **Strong:** even **private** info (idealized).
    
- **Arbitrage** transmits information and fixes mispricing.
    

## Bonds 101 (core of the session)

- **Terms:** Face value (FV), **coupon**, **maturity**, **yield to maturity (YTM/IRR)**, **zero-coupon** (e.g., **T-bills**).
    
- **Primary vs Secondary:** issuer sells first (primary); investors trade later (secondary).
    
- **Pricing:**
    
    - Zero-coupon: ( P=\frac{FV}{(1+r)^T} )
        
    - Coupon bond: ( P=\sum_{t=1}^{T}\frac{CF_t}{(1+r)^t} )
        
- **YTM:** the **IRR** that sets NPV = 0 (no closed-form for coupon bonds).
    
- **Key intuition:** **If yields ↓, prices ↑** (and vice versa). Higher purchase price ⇒ lower realized yield.
    

## What to do before next class

1. Re-price the 2-yr, 5% annual coupon, FV=100 at market yields **3.5%**, **4.5%**, **5.5%** (compute prices & note the direction).
    
2. Read 1 page on **duration** (Macaulay/Modified: “price sensitivity to yield changes”).
    
3. Skim **yield curve** shapes (normal/flat/inverted) and typical macro signals.
    

## Next class

- **Interest-rate risk:** Duration, convexity, DV01.
    
- **Yield curve:** intuition + simple bootstrapping.
    
- Link back to **SVB** (duration + HTM/AFS mechanics).

# Transcript
Last week we finished talking about monetary policy. Do you remember? We talk about central banks.  
S.  
Central banks, we talk about interest rates.  
Coreno.  
We talk about central banks, we talk about interest rates before going deeper into interest rate risk. Then we will talk about interest rate risk. But let me first have of an hour. Let me talk about two two things.  
That are out of the scope of the course. There is not the syllabus. There is not one point where it's written.  
But it's written. It is, yeah. And that is not another point. What is written?  
Stable, yes.  
Have you heard about ETS?  
Do you have our DPS? Where is the DPS? For one?  
Exchange Traded Phone ETF stands for Exchange Traded Phone and this is.  
It's a phone, but it's a phone. We'll talk about phones later. A phone is an investment vehicle that which doesn't need a company associated. I mean, it's a vehicle you buy units.  
And you are there, yes. So on one hand, cell phone.  
But yeah, you are the guy. You are the person. If I ask you something, what is the answer you to say? John, if I ask you a question, what is liquidity? Yes.  
It's a phone and it is a phone with.  
We what? What is the problems phones used to have? What is the problems phones used to have? They don't. They don't. I mean, I have money. I want to invest this money. I am. I am not master in finance and I need to contract someone in order to manage this money, yes.  
This is normally what a phone do, what a phone does. Yes, I should contract managing of my money and a lot of people put their money together into a phone and the manager does this business.  
This is a traditional phone. What is the problem phones used to have that once you are into a phone to sell the unit, it's a little bit complicated. Why? Because phones normally are not being traded, market are not listed, yes.  
What is an ETF? It's a phone that is listed.  
And you can buy the phone as if it were a sock.  
Listed you can buy, but not only this point regarding liquidity makes EPS.  
Dubai is the market.  
You got the ETF and what is inside the ETF?  
Beside 80 there are tons of computer, tons of computers.  
Getting orders, buying, selling, looking with making numbers. Yes, inside it there are tons of computers and thanks to this.  
You can buy an ETF that is. Let me see if this word is correct.  
What do you say? That is fake.  
The ETF value is paid to an index, to gold, Bitcoin, to whatever, yes, and thanks to these there are ETFs.  
OK.  
Regarding ball.  
Regarding Bitcoin, regarding SP500, yes, you don't need to buy Bitcoin. You don't need to buy gold. You don't need to buy SP500. You can just buy ETF.  
Is it possible to buy gold?  
Yes, but what is the problem when buying gold? You need to start it. You need buying gold personally, unless you are.  
Swiss, you have a a ball. Yes, a ball. If you are Swiss, you have a ball in order to bind all this boring. It's better because by buying an idea, you don't need to students, yes.  
Be going on SP500, let me.  
Let me just in these three things here.  
There are no ETS regarding houses, housing, housing, but in Spain I have the temptation to write here housing. Yes, let me put this ETS.  
Then it is 10 years ago where it used to be something new. Now it is.  
It's not new. There are more ETFs in number than stocks in the States.  
Stocks listed public stocks. I think there are. I publish linked in the number, yes, but there are more ETFs listed than stocks.  
A piece of that, yes.  
PTSI mean in my syllabus. In my syllabus I am not supposed to talk about PTS.  
And talking about finance and not talking about ETFs is like talking about politics and not talking about Trump.  
Yep.  
Is Trump important?  
Absolutely. You can agree, you can disagree. But this like an elephant in the room. Yes, ETFs are absolutely important. Who is you ETFs? You need a lot of computer power inside. Who is the biggest ETFs issuer in the world?  
I'm looking for two names. First name is.  
Black Rock. Second one is absolutely Black Rock, Bangor and I will come back later to Black. Not today, but Black Rock and Bangor is one name. But why? Because we have already talked about this.  
But for since Bretton was still the 70s to 73, there was the government of of international public companies, yes, monetary phone, World Bank and all this stuff governments.  
Bans since the 70 with the national companies.  
Has become more popular. So on one hand we have idiors and.  
To SP500 back to Bitcoin or back to whatever makes sense.  
And on the other hand, we have table coins.  
Have you have out the stable coins?  
Again, I'm not supposed to talk about the stable coins.  
Where is the stable coin?  
New one.  
Where is the stable coin?  
Where is the stable going?  
That's like, hey.  
And that is tracked to and see.  
A some amount like reserve currency so it stays.  
Absolutely. Let let me approach. I have written before the blank or ETF, yes.  
Why? Why ETFS are listed in public official markets? Stable coins are not listed in official markets are listed in.  
Public markets, but crypto markets, yes.  
Are crypto markets official? Absolutely no. But what has more liquidity? Crypto markets or traditional markets?  
What have more liquidity? Let me.  
Yes.  
Who is 9149531566?  
Thanks.  
Hello.  
Yes, need to press all of them.  
Yes.  
But everyone crypto.  
Oh, OK, no.  
Oh, who is this boat alone?  
He has run away or he has run away. No one with traditional. I'm going to have you.  
Have you seen this Tornino is the name in Spanish?  
Have you seen these birds?  
Are you using these words?  
These are birds that go all together. If one decide to go to one place, all of them here, you are like these birds. If I go into this, what's up into this group in order to see who has vote here, all the birds will go to the other group.  
In order to avoid answer the question, you see what I mean.  
Why are more liquid? Careful. Careful because.  
Why crypto markets are more liquid?  
One quick There are several reasons, but why crypto markets are more liquid?  
Are crypto markets liquid?  
Let me show you one thing.  
Let me see if I can see it.  
Me started with you.  
Yeah.  
I have just sorry silence.  
What is this? This is a real time.  
This is real time, yes.  
Let me see this ball. This is a transaction that has happened, has happened.  
Seconds ago and 65 Bitcoins were traded. Yes, you see this point 0.11. This is more than one Bitcoin, I think. No, almost almost one Bitcoin, yes.  
These are the transactions that are happening regarding Bitcoin.  
Yes, right now. Yep.  
Regarding Bitcoin, I have asked about liquidity and crypto, yes.  
First idea when talking about crypto is a global market. So being a global market makes you more liquid. Make sense?  
Being global means that you are more liquid, then thinking about Bitcoin.  
It's transparent. Everyone can see real time what is going on without any kind of license.  
And now.  
I've been so in this in class for more than.  
Almost 10 years. Yes, I've been so in this almost 10 years.  
And the number of balls have gone down year 2007 we put this and it was like raining. Yes, now this is like someone.  
There are, there are more big transactions, yes, and the small transactions is.  
The number of small transactions.  
It's not as big. The number of big transactions stay the same, yes.  
Careful with liquidity and crypto because it will depend on the kind of asset we are talking about. There are no market makers. Everything will depend on the market and regarding one asset.  
You can see the the asset on the media and the day the piece of new appeared on the media. This day there could be liquidity, but if you get stuck, you will die. Yes, therefore with liquidity and.  
I will not if I were you.  
If I were you, yes, good people. It's OK if I were you.  
Probably I would have both to traditional markets in general. Why? Because is there liquidity in crypto markets depends on the asset. If we are talking about Bitcoin, absolutely yes.  
There is high liquidity. We are talking about Ethereum FF. There is much more. We are talking about the stable coins. There is a lot, a lot, a lot of liquidity, but we don't really care.  
Because the stable coins and liquidity are the same, you can consider synonyms. Stable coins are there to provide liquidity. Make sense.  
But.  
Well.  
At least just to say that.  
Crypto exists and ETF exists. Yes, crypto exists, ETF exists and when talking about stable coins.  
Why people will buy stable coins?  
Why people will buy stablecoins? Why? Why someone will buy a stablecoin?  
Why people will use stable coins?  
Oh.  
8.  
Whatever. I was looking for a piece of new where it says that there were more transactions with stable coins than with Visa.  
A MasterCard Visa has more transactions than MasterCard.  
You know all of you know Visa and MasterCard. There are more transactions with the stable coins. Why people use stable coins?  
Several reasons.  
First, first, I'm pretty simple use is that.  
You can invest in Bitcoin and if you want to go out of Bitcoin without.  
Going out of the system, you will buy stable coins. I mean Bitcoin. I want to convert my investment in dollars. Instead of buying dollars, what I will do is buying USDT.  
And better USD, yes. So first idea is like a red food G4 crypto.  
Yep, you can disinvest in Bitcoin. You don't want to go out of the system and you go into you buy stable coins. Make sense.  
Why people will use also stable coins?  
Another reason.  
Big companies are using stable coins or international.  
Payments, yes.  
It's cheaper. It's cheaper to perform. It's cheaper and quickly to perform an international payment through.  
Table points, yes. What else?  
If you are working in Spain and you have family in Ecuador, for example, you can send money to your family.  
I don't know how to say remesas in English. Remittance. Remittance. Remittance. Remittance. Remittance. Make sense. Remittance in English. Also you have you are working here. How do you say?  
Your money back to your country with remittance.  
And also with all respect to Venezuela and to Argentina.  
What is harder in Venezuela or Argentina? Buying dollar or buying stable coins?  
Again, see pleasure.  
Again, inflation. You can also use stable coins. Make sense.  
But I have said that there are more payments with stable coins than with Visa and what Visa is doing Visa.  
Visa is also using stable coins.  
Blackrobe has also start using stable coins. You see what I mean.  
And what else we can use stable coins for as individuals, as citizens? Why won't use stable coins in order to pay a coffee? Will it make sense to use stable coins as a as a?  
Amen method.  
No, why not?  
A coffee? Yes, buying a coffee with a stable coin.  
This is not complete.  
But it's a matter of time nowadays today.  
Today there are cards, payment cards that you have are back with the stable coins and make a conversion instantly.  
Nowadays it will be you will pay more for the fee than for the coffee.  
At the more stable coins are used.  
As a global payment system, the more that there will be one person thinking about business and we'd say, oh, I'm going to make.  
These kind of payments for free and I will take advantage of having, I don't know, but there will be a business model where it will make sense to make people pay in their own work, in their own system.  
And imagine, imagine Amazon think Amazon is not going to do this. Google is not going to do this. Why? Because their business has to do with other things and this requires a lot of regulation if Google goes into this market.  
Next day, Google will die. Will die. Why? Because all governments will will jump over Google. Are you talking about monetary policy? Are you talking about payments method? We'll have enough with Google Pay.  
Apple has enough with Apple Pay, Apple, Apple or Google.  
Apple and Google don't need stable coin because they own their own and it's called Apple Pay or Google Pay. Make sense.  
But.  
Using stable coins as a normal payment method is a matter of time.  
It's a matter of time. Everyone will use it.  
Probably we will still use in euros in euro dollars in the US.  
And I don't know if we will start in the near future using gems.  
You answer. Sorry. Yes. No, you answer. Yes.  
But stable coins are there. Make sense? I'm saying that in the future everyone will use stable coins.  
No, I'm not saying that. I'm saying that I don't know what is gonna happen in the future.  
But what I'm trying to tell you is that.  
Payable coins.  
Are the tip of an iceberg. Tip of an iceberg makes sense in the US.  
What I'm showing here.  
What I'm talking about, I mean half of half my class, the time of my class is divided into two parts. One part of the class is what I'm supposed to teach, what is a bond, interest rates, monetary policy, what happened in the past?  
The other half of the time is dedicated to to tell you. I don't know what is going to happen. I don't have any idea. But trust me, nobody knows. And the world is changing so, so fast that half of the change.  
Has already been done. If we invest, who has savings here invested in the markets? Anyone has savings?  
What?  
Have you bought ETFs? I will bet that more than half of the money that is being invested by you in this class is being invested in ETFs around half.  
Why? Because it's simple. It gives you return. It's much, much powerful than it's also thinking about you pay a fee. But personally, I don't care to pay a fee to BlackRock in order to get return, or I don't care to pay a fee to Bangwar because they are professionals, yes.  
I will never play a fee.  
To Trump. I'm talking about Trump because you are from the States mostly, yes, but in case of Spain to Pedro Sanchez. And because of I will never pay a fee to a politic, but they enforce me to pay fees and they call it taxes.  
But you see that Black Row has or could have my money get a fee because they are going to give me much more return. What is the vehicle these people are using it years, yes.  
ETS has to do with BlackRock and Bankwap, yes. And on the other hand, that is the Internet. In the Internet you can find stable coins.  
You can find the stable coins that are pegged to gold. You can find the stable coins that are pegged to Bitcoin. You can find the stable coins that are pegged to SP500, yes.  
Am I saying that ETFs and stable coins are the same? No, no, I'm not saying that these are the same, but.  
What?  
But.  
What?  
ETF exists. Fable coins exist, yes.  
Any questions?  
Any questions? Who do you trust more? Any government, public expenses, expenses or Spanish pension phone system or ETFs or stable coins?  
We have problems with the Spanish pension phone system.  
With the sustainability makes sense.  
Are ETFs important?  
Absolutely, yes. Are stable coins important?  
Personally, I don't know regarding ETFs. I can tell you that it's not the future, it's the present and in the future there will be more and ETFs is something that is there in order to stay.  
Personally, my personal view regarding crypto.  
Is that Bitcoin is the present?  
But in the near future, I don't know if there will be another technology. I don't know. I mean, blockchain is relatively small market cap.  
You will continue to grow.  
But personally, no, I don't know that is.  
OK.  
Perfect. This is interesting.  
I like this idea. I've been. I've been tracking these four years.  
The number of small bonds, small transaction has gone down. The number of big transactions has stayed the same. What does this mean?  
I don't know. I don't know what does this mean, but my sense is like if there were two words, we're talking about crypto, we're talking about Bitcoin. There is one word that has to do with more users.  
And this word regarding with small uses is going down.  
And then there is a big word regarding big users and the word regarding big user stays the same.  
Here this ball represents.  
There is not this number in in dollars. Yes, 200 forty, 23 billion, yes. For this one, 255 billion, yes.  
Imagine you need.  
Mine that you are anarcho.  
Now go.  
And you need to move money.  
How easy it would be to move money through regulated banks would be really hard to move. Yes, imagine that you call Deutsche Bank or you call Citi or you call whatever, yes.  
But all these banks are going to tell you. You call this bank and you talk. Oh, I want to move. Well.  
I want to move 4 trillion, 4 trillion.  
I think this is these are 98 Bitcoin.  
10 three 10 billion. Yes, I want to move 10 billion.  
Yes, and a traditional bank will tell you.  
Probably no. Or give me your ID. This is a quicker way in order to do things under the water. Yeah, OK.  
Considering this done.  
What we have seen today, we dedicate one class to talk about the efficient market hypothesis. Yep, you remember the efficient market hypothesis from Fama, Eugene Fama from Chicago.  
This is a market hypothesis.  
All of you remember the fishing market hypothesis. I will bet that not not everyone.  
Those who who remember the Fishy Market hypothesis.  
Have better information and imagine that I ask.  
Who remember that and those who remember that?  
Tell me what is the efficient market hypothesis about? Yes, what will happen to someone that will remember what the efficient market hypothesis is about? He will receive extra grade and at the same time he's telling.  
The rest of the class correct information. So at the same time the person that has the information is taking an advantage and it's making the class information better. Yep.  
How do we call this process arbitrage?  
Eh, my friends, student, are we drugs? How do you say it in French?  
Arbitrage. Arbitrage. It's a it's. It came from a French war. Arbitrage. Yep, we say it in English, but it's a French war. An arbitrage is making a game without assuming risk.  
Yes, because you have better information. You have better information. You make a game and while making a game.  
You are letting the whole market.  
Same information makes sense.  
There were three levels. Efficient market hypothesis has three levels. Each level has to do with information. First level is the weak form.  
When talking about market efficiency in the week 4.  
We are talking about historical public prices.  
Public historical prices. What is information? Yes, public information, but not all public information. Just historical prices, yes.  
Second level is the semi strong form. What is information for this level? Not only historical places, but also all public available information.  
Particular accountancy, for example, yes.  
Weak form, semi strong form and the third level is not just public information. The third level, the strong form also include not just public information but also private information. The strong form of market efficiency assumes that there are no insiders.  
Are there insiders? Yes, there are. And because of market efficiency, SEC can detect when there is an insider, yes.  
Yeah.  
OK, we talk about this and we saw this on class also.  
First lesson, we say that financial markets has to do with connecting savings with financial needs directly through the markets. Here is written in Spanish comi se ne me hue comission nacinos de Mercado de Valores.  
When reading this, you should think about SEC.  
Who is ACC market supervisor? Yes. In Finland, instead of talking about ACC, you can think or you can talk about your own market supervisor, yes.  
I I would like to know what is its name in in Finland, but I don't know. Probably its names would have something like.  
Commission in the name is Commission or something like this, yes, but it's that if it.  
What is the name of markets?  
Bay, Brown's.  
Oh dear.  
Three. I don't know who to write through there. I'm sorry. US, Spain, France, Finland, Korea, Norway.  
Wait.  
I'm missing Nikon. I'm missing a lot of countries. Sorry for those.  
Like.  
Oh, supervision or supervisor?  
SEC. Perfect. Fenimilve. Perfect. A AM F France Financial Supervisory Authority. The Finance Finance.  
To Korea.  
Financial Service Commission, Financial Super. I don't know why there are two in Korea.  
Or not. Norway. Fina. Federica. Oh, Federica. Frederica. Bonso. Any Italians?  
Are you have out console?  
How do you call this?  
Console. Oh, console.  
Oh, FIMA. I know a lot. FIMA. Why? Why do I know FIMA? Because FIMA is one. No, FIMA was the first supervisor.  
That care about crypto. FEMA were the first supervisor, market supervisor that say a word regarding crypto. And personally, all things FEMA has said regarding crypto, I really like all the things.  
Then after that, in Europe, we have.  
In Europe, we have a market, supervisor. In Europe we have asthma. Asthma has said things that I don't like as much, much more words and less knowledge.  
OK, who are these ones?  
Market supervisors. Market supervisors are not regulators. They don't regulate. They do not regulate, yes.  
What do they do? Police, men, police, women activity. They just.  
If licenses sick behaviors.  
And if you behave bad, they are going to charge you a fee. Yep. Also, they investigate. I talk about this when talking about efficient market hypothesis. Yep.  
And regarding banking system, who supervise banking system?  
Who supervise banking system?  
Acemismo articio in Spanish is make same do same exercise but exercising do same thing.  
The last in the service there.  
Repeat same exercise with banking supervisor, yes.  
Look with the flags. It's so beautiful. OK, Federal Reserve Banco de Espana coordinated with European Central Bank.  
Bank de France coordinated with European Central Bank.  
I I will not. I don't know about Finland, but I will bet that you have your own central bank. No, whatever, Korea.  
Bank Italia, Finance Supervisor Authority of Norway, FINMA. No, FINMA does not supervise banks.  
FIMA does not supervise banks. You have your own in Swiss. You have your own central bank. Why? Previous list was correct. This list is not correct. Careful with AI.  
Yes, I am using AI as if I were Moses and these were the law written in stone. No, I'm just using AI knowing what I'm using. Do I know that this is the USA flag?  
Absolutely, yes. Spanish, France, Finland, Korea, Norway, Italy, Thrace, Soethia. Yes. Do I know all these flags? Yes. How long will it have taken for me to put to to look for these flags?  
I mean, it's.  
With AI, I have done it without thinking. I haven't asked for the flags, but I've got the flags. Yes. But careful, I know what I'm talking about and I know that this is correct. Sorry, this one. No, I know that this one is correct, but this one is not correct. Yes.  
What is the mistake that I made? I asked, but I did it intentionally. I asked for.  
Banking, banking supervisors and one of the questions that I was going to ask you is.  
Only banking supervisors supervise banks. Also banking supervisor performs monetary policy and who performs monetary policy? Central banks.  
Who supervise banking system? Central banks.  
Yeah.  
If I would like to have this in the correct way, the correct question, the correct prompt would have been.  
I've made una lisave lost.  
Pancos Centrales anteriores y los que me destoy. If I would have asked about central banks, I know that central bank supervise banking systems.  
Yep. Why do central banks supervise banking system? Because of monetary policy, monetary policies like the circulatory, the circulatory system.  
Central bank is the heart and banks has to do with all veins, yes.  
Personally, this is the one I was looking forward when thinking about Finland, to a more suomin panki, suomin panki, Banca de Italia that is part of the euro system, European Central Bank.  
El Bundesbank, that is part European Central Bank, Bank of England, Swiss National Bank, that the Swiss National Bank. We have already talked about this Swiss National Bank.  
As the risk banking and I will bet that this woman banking looks the same. They look more more like a sovereign phone than like an investment.  
Like any central bank, yes. Why? Because you use you issue coronas with these coronas that you issue by dollars and euros and once you've got dollars and euros, what are you going to do with these dollars or euros?  
You are going to start buying Apple, Amazon, NVIDIA, IX 35, CAC 40, Make sense? And you have your assets full of investment instruments. Make sense?  
OK, what is this picture about? How the financial system work? What I want you to see from this picture that there are two supervisors.  
Banking system supervisor that also is in charge of monetary policy and.  
Market supervisor.  
OK. And when talking about monetary policy?  
We have talked about central banks, we have talked about monetary base, we have talked about money supply, we have talked about interest rates.  
We talk about German hyperinflation, Breton goods, Soros and also we talk about.  
And also we talk about.  
We talk about.  
Lehman Brothers, Lehman Bros crisis and all things that happen after Lehman Bros crisis. Make sense?  
Any questions? This is a summary of all things that we have seen till this moment.  
Hey, Ariel. Hello. No, no, don't worry. I was. I have called Gato Gato also.  
Hello, Ariel. I know some names. Olivia for sure. Olivia and and I'm your. I know your name, but I have forgotten. I didn't knew it. Sorry. Eva Inoeva and I know that you are the Swiss, the Sweden.  
And she's the Swiss and.  
Rodney Alfonso, that you are from UK. In my head you are you are the English one. With all respect that it's.  
I'm John, of course. I'm on the way step by step. OK, what is this? This is a summary of the class.  
And I also I have two Alice.  
Please whatever the 11th of September and the bank collapse. Yeah, this is just to say so we the 11th of September interest rates were dropped.  
After that a lot of mortgage were done, were given and once Federal Reserve consider.  
There was a repo very Federal Reserve.  
Pump interest rates and work with this pumping the system collapse with Lima, yes.  
OK. Also you have the lever problem set one. Do you have any question regarding problem set one?  
Let me let me do two or three things, not regarding problem set one, regarding what you should know from problem set one.  
Yeah, gas flows.  
How to calculate present value of things. But I prefer to talk about this with one example. What are we going to do today? Today, not today. What are we going to do during this week and part of next week? Yes.  
We will talk about, we will continue talking about interest rates. We talk about interest rates from monetary policy side.  
Now we are going to talk about interest rates from the bonds side and from bonds we will move to the yield curve. Have you heard about the yield curve? We will talk about the yield curve, but after having talked about bonds.  
And with this, we will close the part dedicated, the part of the of the course dedicated to the framework. What is this framework about? About everything, but in particular about interest rates.  
Interest rates and inflation. On one hand, there is the big picture. The big picture are interest rates, Jerome Powell, but also we should go deeper. Why? Because there is also fiscal policy, there is also.  
Trade. And there are also politics, yes. On one hand, there are interest rates, long term and something more secure. We're talking about interest rates. We are talking about something secure, but we're talking about politics.  
Or trade or trading. We're talking about markets, we are talking about things today.  
Five years ago, there were Amazon, Apple, Microsoft, Meta and.  
Microsoft five years ago, yes, and Facebook Meta was called Facebook. Nowadays there is one new company that is NVIDIA that is bigger. What is what? What are the name of the principal companies we are going to see?  
In five years time, we don't know, but we know that interest rates will prevail. I'm saying that in 100 years interest rates would be the same. Not exactly. What I'm saying is that.  
My class works as well as interest rates works. Make sense.  
I have talked about crypto. I have talked about the stable coins. I have talked about ETFs. Is there a new war? Yes. How does this new war works? I can know it, but there is not financial theory regarding ETFs.  
I don't. I don't know and I'm quite sure.  
Please correct me if I am wrong, yes, but I'm quite sure that there is no Nobel Prize given to anyone that has a study ETFs or crypto.  
I think that no, there are no economic, no, there is no Nobel Prize even to someone that has. There are Nobel Prizes to people that has a study markets for a long time. There are Nobel Prizes to people. Sharp Markovic that has a study.  
Stocks fixed income. Yes, there are Nobel Prizes given to people that has a study traditional finance, but there are no Nobel Prizes to people that has talk about all these things, yes.  
What I'm saying is that I cannot predict the future. I don't know what is going to happen in the future, but for this class.  
Fix public fixed income interest rates will be forever. Make sense. We will talk about interest rates. We will talk about the bond concept. We will talk about the yield curve.  
And we will talk a little bit about what happened after Lehman, but we have already talked, yes, but I will repeat it. Why? Because Silicon Valley bank crisis had to do with interest rates. Silicon Valley bank crisis. Make sense.  
Any questions? Let me.  
With all respect to animals, yes, let me kill several birds with the same stone.  
It's something that makes sense in the States, no killing birds with the stones. In Spain we would have say with just one shot killing several birds. This is aspersion. I don't want anyone to get offended.  
Because of bear bear's protection or all these things. Yep, let me.  
Tell you, explain you, let me.  
OK, let me just go quick. Please go from one hand.  
Did I show you this? Never. What is this?  
This is a bomb. I need finance. I need finance.  
And I will use. I will issue this you'll.  
That. Do you trust me? Yes, yes.  
Will you give me 100 euros for this paper? Yes, in two years time he will give me 100 euros today. Yes, he will have this paper.  
And in one year time he will take this coupon and he will tell me, Luis, you owe me 5 euros and what I will do, I will pay him 5 euros and after.  
Another year what John will do, he will tell me, Luis, you owe me five more euros, yes, and you also owe me 100. Make sense?  
What is the return that John will have gotten?  
What is the return that John has got will have gotten when buying these for 105%?  
Yep.  
Make sense?  
Interest rates are around.  
Therefore, because this is a tricky question, if you just look at Federal Reserve interest rates at around 4%.  
Yep.  
So I am paying a 5% return, no?  
I am paying more than the market. If interest rates are 4%, if interest rates are 4% and I am paying 5%.  
This is better than the market, no? So John, if I make an auction, if I just say who gives me more for this because the market is paying 4%.  
While I am offering 5%, you can say, Luis, I'm going to buy this for 100, but Olivia can say, oh, I will pay ninety-nine. Why? Because the market is paying 4% and ninety-nine.  
Is little bit more, little little bit lower than 5%, but more than 4%. So instead of going to the market with your savings, Olivia, you will pay me 99 and you will get a five point at 4.5% return. Make sense?  
And oh, sorry, I no.  
You are asking for 100. She will pay me. She will tell me, Louise. I will pay you 100 what?  
And instead of you getting a 5%, you will get less because you are paying more and you will get a 4.5% return. Make sense? The higher the price, the lower the return that you will get. Make sense?  
All of you understand what it's about also.  
Imagine that I I need this money in the short term. What can I do? Also, I can issue this bond without coupons. How do you call a bond issue without coupons? A zero coupon bond?  
Are 0 coupon bonds being issued, for example by governments? Yes. And these are called T bonds, T bills. Yes, sorry, T bonds. No T bills, T bills. Does the Treasury, US Treasury issue T bills?  
Yes. What is the mature typically of the bills between three months and 18 months? Yep, if you want to make money by buying one T bill, if the face value is 100, how much money will you offer in order to get return?  
Less than 100. Make sense? Yep. OK, let me.  
Let me drive the gas flows.  
Anyone can borrow me a pencil?  
OK.  
That's all. Thank you. Thank you. Quickly, quickly, Adam.  
Abigail. Hello.  
Alfonso, Alice Connors.  
Alice Dalia.  
Amy Claire, Arianne Corin.  
Audrey Grace.  
Charles Ghetto, Yes, Claire Dugan.  
Conor, it's Conor. Oh.  
June, yes.  
OK.  
Dylan Dylan Abagorman is the one that has. Oh, you're Dylan. Oh, there is someone that has had problems with her door.  
No, that's not me. Who is this one? Oh, Daniel. OK.  
Daniel, do I have her in the list? Yes, for sure. No. Oh, yeah, Daniel. Yeah. Oh, Daniel. I know that. I know Daniela. Last day was sitting.  
I don't want to know what had happened in her house this morning, but I can imagine herself just throwing whatever. No, sorry.  
Don't tell her, I'm afraid. Yeah, just give me Elena here.  
No. OK, Elena.  
A bit.  
Eva Castillo, Yes.  
Francisco Seracino.  
Fredrique No Gabriella Mayer.  
Gordon Stewart, Gordon Grace Morgan.  
Page grace. Oh, OK.  
You know, Massey Harris.  
You mean?  
You mean you sound the same? It's Monday. You sound sleepy. Me too. And.  
Lisette. Yeah. Lawrence. Here. Austin here.  
Logan, Ariel, Luke Mastrain, Marco Cavalieri. I lost him.  
Tell him that I miss him, Natalia de la plaza.  
Ria. Yes, really, Kendall.  
Robbie Stein.  
Seung Kim.  
Simon Beatrice Paradise.  
Sophie Brown.  
Victor?  
Yes, I'm super Daniela. I have already considered that she's here because she wrote me and any any question anyone?  
Everything. Everyone is happy.  
OK.  
OK, let me come back.  
I have introduced you.  
There comes what is a bone.  
What is a bond? What is face value of the bond? What are coupons? It's coupon. You can consider its coupon as an 0 coupon bond by itself, yes.  
Make sense? I have bones. I have bones.  
With coupons, with face value. What else we?  
The price I can bought, I can buy them at a given price and I can calculate.  
The rate at which these bonds have been traded, the yield of the bond, the internal rate of return, the interest rates, the interest rate that correspond with the price of the bond. Make sense?  
OK, what is the game we will be playing with bonds? What is the game we will be playing with bonds? A really simple game. The game is what is the price of the bond? Let me call it present value.  
The price of the comb of the bond will be equal to face value. Let me call it future value over 1 plus the yield the rate rise to T yes.  
This formula works for a zero group combo, but if instead of having, if instead of having.  
If instead of having one.  
Amen, I have several price is going to be equal to sumatory from 1:00 to T yes.  
Who?  
Let me call cash flow Y over 1 + R rise.  
Who I yes, and for for the bond that I have showed you.  
This is going to be equal to 5 / 1 R raised to 1 plus base value plus second coupon.  
1 + r rise to the second make sense.  
All of you are with me. What is this formula? The formula that will give me the formula that will give me the price of the gold?  
For an event, great. What is the name of the game we will be playing?  
Future cash flows, future cash flows, face value and couples will never change. Why? Because these payments are fixed and because of that this has been called fixed income.  
These payments, future payments are fixed, yes.  
What is the name of the game? I will know the price so I can calculate the return. I will know the return so I can calculate the price. Yes, knowing one of them I can calculate the other.  
So.  
One thing else.  
I am issuing this no. How much did you pay me? 100 no.  
Who owns this bond after I have issue? John. What can John do once he needs money? You can sell it.  
I have issued this bond in what is called the primary market and in the primary market I get finance and John has sold this in what is called the secondary market. Make sense what is the primary market?  
When the financial instrument is being sold for the first time, make sense? What is the secondary market where the financial instrument is trade between investors? How do you call the primary market for stocks?  
What do you call the primary market for stocks? The IPO process, IPO in nature public offering is the name that the primary market received for stocks. But I'm not talking about stocks yet. I'm talking about bots. Make sense.  
How do you calculate the pressure of a bomb?  
Let's go.  
Here this is let me call this time, day, one year time, three years time, yes.  
How much money will I receive in one year time?  
But how much money will I receive in two years time? 105, yes.  
At which price did I bought this?  
Don't know. Let me say that example that I was showing you. Interest rates are 4%, yes. If interest rates are 4%, what can I do? I can calculate present value.  
1 + 4% price today first.  
And 105 one plus 4% price today. Second, all of you should know how to do this.  
What I'm doing? I'm calculating the price of a home.  
And now if I sum, this is a Spanish keyboard, so sum instead of being SUM is SUMA, but in English it would be sum. The price is 101.88, yes.  
Make sense? Now you told me, Olivia, that you have you wanted to buy these four.  
And then one.  
What is that rate?  
What is the rate for 101? I have two ways in order to calculate this. Let me look. The longest way is.  
Let me say 4.14.2 it's bigger.  
4.3 You see this number is getting closer to 1014.44.5 oh 4.4 yes.  
4.5 is 4.454.464.474.46.  
4.47.  
This is the wrong way. Yes, you see what I'm doing. I am just looking for the rate that fits.  
There is a quicker way to do this. Look that here I have changed the sign. Why do I have changed the sign? Because 101 will out will go out of my pocket.  
While this five and this 105 will come into my pocket, I am investing 101 in order to get 5 and 105. What is the formula? How can I calculate the rate that makes?  
Future payments equals to the price and in case this is negative, how can I calculate the rate that will make net present value 0?  
How do you call the rate that makes net present value 0? This question, this answer is absolutely important for my life in finance. How do we call the rate that makes net present value 0?  
Interest rate of return IRR, yes.  
I if I write here IRR.  
Of these cash flows I will get the rate I'm looking for in case this would be a an English cable, but because my computer is Spanish instead of writing IRR.  
I should write Tasa interna de returno TIR, but forget about TIR and think about IRR. Yes, IRR of.  
This number would be around 4.47, around 4.4. Yep. What if I write here 4.46626?  
This will get closer to the number I'm looking for. Closer. Closer means closer and not the exact number. If I just put here this, this would be this would be the exact number.  
Let me write here 4% and let me look here, right here, IR, yes.  
Makes sense.  
What I have done from one side.  
By knowing the the interest rate, by knowing the rate of the market, I have calculated the price and later once I know the price, I have calculated the rate. Is it possible? Is there a simple formula in order to calculate the IRR?  
No, because if you see, raise this rise to the square, to the 3rd, to the 4th, the quickliest way would be just doing.  
In the heuristic way, the rule of thumb, but the more quickly is just writing IRR and you get it. Make sense.  
Any questions? What I have done today? I have reviewed all things that we have seen in class before. Also I have talked about stable coins and ETS and also I have introduced the concept of a bond.  
Next day we will continue talking about bonds. We will continue talking about how to get the price of the bond. But also we will talk about what happens when the interest rate change and what happened when the interest rate change that the price will change. If interest rates goes up, the price will go down.  
Down and the question we will answer is how much and the answer we will get is duration. What is duration? Price sensitivity to interest rate changes that we will talk about this next day. Yes, we're done.  
Tell the organization that you are there because of Chris has told me. OK, I like you are in my class.  
This class? Yes. Who are you? Luke. Luke. OK, I will. He's. I like him. OK, that's good. Yeah, me. Yeah. How are you doing? I'm good. And you? I'm also tired. Today's the hardest day.  
It could. It could go just better. There is no other chance. Tell me things. How would you like me to submit the homework? Oh, last last seat. Did you submit the first one?  
No, then yes, upload it. I mean, no matter all of you will submit it in the Moodle, but all of you, no matter everyone is submitting it with delay, but not because of you, because of me, because I have.