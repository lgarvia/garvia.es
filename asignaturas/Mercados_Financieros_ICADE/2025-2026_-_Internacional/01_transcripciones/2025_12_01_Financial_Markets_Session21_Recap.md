# **Student Recap – Last Session (Dec 1, 2025)**

---

## 1. Logistics & Exam

* **Final exam**

  * **Date:** Wednesday, **December 3rd**
  * **Time:** *Normal class hour* (10:30–12:00 approx.)
  * **Duration:** **90 minutes**
  * **Room:** A **bigger room** than usual (you’ll get the exact room by WhatsApp).
* **Adaptations / extra time**

  * I’ll be in the room from around **10:30**.
  * Students needing extra time or adaptations will **start earlier**, not finish later.
* **Format**

  * Same **structure and spirit as the midterm**:

    * Part with **calculations** (time value of money, bond pricing, duration).
    * Part with **theory / concepts / multiple choice / short answers**.
  * In the multiple-choice part, **wrong answers do not subtract points** (no negative marking).

---

## 2. The Tools: How We Used AI in Class

### 2.1. Google NotebookLM as a *course brain*

We worked with **Google NotebookLM** using:

* Your **class transcripts**
* Slides and course materials

We used it to:

* Generate a **structured summary of the whole course**
* Extract **key topics** and **likely exam concepts**
* See how the AI “understands”:

  * Efficient Market Hypothesis
  * Basel Accords
  * Risks in banking
  * Financial instruments
  * Monetary policy tools

**Important distinctions:**

* **NotebookLM:**

  * Only “knows” what we upload (transcripts, slides, docs).
  * If I never mentioned “Pakistan”, NotebookLM will not invent anything about Pakistan in this course.
  * It’s like a *search + reasoning* engine over **our** material.
* **ChatGPT (or general LLMs):**

  * Can answer about almost anything from its own training data.
  * But that also means it can **hallucinate** or go beyond what we’ve done in class.

So for this course:

* **NotebookLM = best tool to review what *we actually did***
* **ChatGPT/etc. = helpful, but not “the official map” of the course**

### 2.2. AI Studio + “By-coding”: dynamic teaching tools

We used **Google AI Studio** again, this time to:

* Build a **complete web page** to teach:

  * Bond pricing
  * Duration
  * Modified duration
  * The impact of **interest rate changes** on bond prices

The prompt you saw included:

* “I want a web page to show my students duration, bond valuation, and how interest rate changes impact bond prices.”
* Use **charts**, **sliders**, and **scenarios** to visualize the effect.
* Add an **AI agent** that explains the result in natural language.

Result:
We got a **fully functional web app** where you can:

* Set **face value, coupon, maturity, yield**
* See the **bond price**
* See **duration** and **modified duration**
* Compare the **exact price change** with the **duration-based approximation** when yields move.

---

## 3. Big-Picture Concepts Reviewed for the Final

Using NotebookLM, we extracted and reviewed the **core conceptual blocks** of the course:

### 3.1. The “Holy Trinity” of Finance

* **Risk**
* **Return**
* **Liquidity**

You should be able to:

* Explain each of the three.
* Explain the **trade-off**: you rarely get high return with low risk and perfect liquidity.
* Understand **why liquidity is often the “forgotten” dimension**, but crucial (the “Holy Spirit” of finance).

---

### 3.2. Trust, Money & Inflation

Key ideas:

* Money is based on **trust**.
* **Inflation** is, at its core, a **loss of purchasing power** and, deeper, a **loss of trust** in the currency.
* Central banks exist to **stabilize that trust** via:

  * Interest rates
  * Open market operations
  * Quantitative easing / tightening

---

### 3.3. Efficient Market Hypothesis (EMH)

You should know:

**Three forms:**

1. **Weak form**

   * Prices reflect **all past price and volume information**.
   * Implication: **technical analysis** *cannot* systematically beat the market.
2. **Semi-strong form**

   * Prices reflect **all publicly available information** (not just past prices).
   * Implication: **fundamental analysis** *cannot* systematically beat the market.
3. **Strong form**

   * Prices reflect **all information, public and private**.
   * This is not realistic in practice.
   * **Insider trading is illegal** precisely because insiders *do* have information advantages that markets do **not** instantly incorporate.

You don’t need to write an essay, but you should be able to:

* Define each form in **one or two sentences**.
* Explain **which kind of analysis** (technical / fundamental / none) can still make sense in each case.
* Understand why **arbitrage** is the mechanism that pushes markets toward efficiency.

---

### 3.4. System Architecture: Who Does What?

You must clearly distinguish:

1. **Three main blocks of the financial system**

   * **Banks / banking system**
   * **Markets** (equity, fixed income, derivatives)
   * **Insurance**

2. **Supervisors & regulators**

   * **Central banks** (Fed, ECB, etc.)

     * Monetary policy
     * Supervision of the **banking system**
     * Supervision of **interbank markets** and **public debt markets** (because of their role in monetary policy: rates and yield curve)
   * **Market supervisors** (e.g. SEC)

     * Supervise **securities markets** and **investment firms** when they act as brokers, dealers, etc.

3. **Fed vs ECB mandates**

   * **Fed:** dual mandate

     * Price stability
     * Employment / labor market
   * **ECB:** single primary mandate

     * Price stability

---

### 3.5. Basel Accords & Bank Risks

You should know the **logic**, not obscure technicalities:

* **Main risks in a bank:**

  * **Credit risk** – borrowers don’t pay.
  * **Liquidity risk** – the bank cannot meet withdrawals, even if assets are “good” in the long run.
  * **Market risk** – losses due to movements in interest rates, FX, etc.
  * (Plus **operational risk**, introduced more clearly in Basel II.)

* **Basel I**

  * Focused mainly on **credit risk** and **risk-weighted assets**.

* **Basel II**

  * After **9/11**, central banks understood more clearly **operational risk**.
  * Three pillars, including capital for **credit, market, and operational risk**.

* **Basel III**

  * Response to the **2008 crisis**.
  * More focus on **liquidity** and **systemic risk**.
  * Defines **systemically important institutions** (“too big to fail”) that require:

    * Extra capital
    * Extra supervision

We discussed how many regional banks in the US try to stay **just below** certain size thresholds to avoid tighter regulation.

---

### 3.6. Silicon Valley Bank (SVB)

We used SVB as a case study to connect:

* **Duration**
* **Interest rate risk**
* **Liquidity risk**
* **Bank runs**

You should be able to explain, in a short paragraph:

* SVB held a lot of **long-term bonds** with high duration.
* When interest rates rose sharply:

  * **Bond prices fell** (high duration → big price drop).
  * Latent losses became **visible** when assets had to be sold.
* **Depositors lost confidence**, withdrew money.
* Liquidity problem + unrealized losses → crisis.

---

### 3.7. Financial Instruments – the “Lego bricks”

Definition you should know:

> A **financial instrument** is an **intangible asset** for the holder and a **liability** for the issuer, whose value comes from a **contractual claim**.

Key categories:

1. **Money**

   * Store of value
   * Unit of account
   * Medium of exchange / means of payment

2. **Financing instruments** (second level)

   * **Bonds**
   * **Loans**
   * **Stocks**
   * **Mortgages**

3. **Derivatives**

   * **Options**, **futures**, **swaps**, etc.
   * Zero-sum (ignoring costs).
   * Used to **hedge** or **speculate**, but not to raise new funding.

Also:

* **Standardization → liquidity**:
  More standardized = easier to trade = deeper, more liquid markets.

---

## 4. Bond Pricing, Duration & Modified Duration

This was the **technical heart** of the day with AI Studio.

### 4.1. Mantra you *must* know

> **If interest rates go up, bond prices go down.**
> **If interest rates go down, bond prices go up.**

We’ve repeated this more than 20 times for a reason.

### 4.2. Bond price = Present value of cash flows

Given:

* Face value
* Coupon rate
* Maturity
* Yield to maturity

The price is:

* The **present value** of all future coupon payments + principal at maturity.

You will not be asked to derive formulas from scratch, but you should:

* Recognize the structure
* Be able to compute price if I give you the numbers (or at least understand how it’s done).

### 4.3. Duration & modified duration

* **Duration** (Macauley duration):

  * A **time-weighted average** of when you receive the cash flows.
  * Measures how sensitive the price is to interest rate changes.
* **Modified duration**:

  * Approximate **percentage change in price** for a **1% change in yield**.
  * If modified duration is 5, a 1% increase in yield → ~5% drop in price (other things constant).

We used the AI-generated web app to:

* Move yields from 5% to 6% and see:

  * Exact price change (green curve).
  * Duration approximation (yellow tangent line).
* Observe:

  * The approximation is good for **small changes** in yield.
  * For larger moves, the error grows (because the true price curve is **convex**, not a straight line).

You should be able to:

* Explain **what duration is, in words**.
* Interpret: “This bond has a modified duration of 4.3.”
* Connect this to:

  * Central bank rate cuts/hikes
  * Why bank balance sheets are vulnerable to rate shocks

---

## 5. AI as a Tool (Not a Crutch)

I started the session with a **disclaimer**:

* AI is **just one more tool**.
* You don’t go to the gym and put the dumbbells on the treadmill — **you** have to lift them.
* Likewise, AI can:

  * Summarize
  * Generate exercises
  * Build visualizations
  * Help you explore “what if” questions

But **it cannot replace your own understanding**.

What you saw:

* Is not “magic.”
* It is the combination of:

  * Your professor’s understanding of the concepts.
  * A clear prompt.
  * A powerful model that connects the dots.

The real value for your career:

* Knowing how to **ask the right questions**.
* Knowing enough finance to **judge** whether the AI output makes sense.

---

## 6. What You Should Focus on for the Final

If you use the transcripts + NotebookLM or any other tool, aim to be able to do the following:

### Concepts you should explain in short sentences

* Holy Trinity: **risk, return, liquidity**
* EMH: **weak / semi-strong / strong** form and their implications
* Central bank roles, Fed vs ECB **mandates**
* Difference between:

  * **Bank** vs **investment firm**
  * **Primary** vs **secondary** market
  * **Interbank** vs **public debt** market
* Main **risks in a bank** (credit, liquidity, market, operational)
* Basel I / II / III **logic**
* Why **insider trading** is illegal
* What a **financial instrument** is, and the main categories
* SVB as an example of **interest rate risk + liquidity risk**

### Calculations / quantitative skills

Be comfortable with:

* Simple **time value of money** (present value / future value logic).
* **Bond pricing** given yield, coupon rate, maturity and face value.
* **Direction** of duration effect:

  * Higher duration → more sensitive to rate changes.
* Interpret **modified duration** as an approximate % change in price when yields change by 1%.

I will not ask you to do crazy, multi-page calculus.
I will ask things that **connect directly** to:

* Monetary policy
* Bond pricing
* Risk management

---

## 7. A Few Self-Check Questions

You can test yourself with these (good exam preparation):

1. **Holy Trinity**

   * Explain in your own words what **risk**, **return**, and **liquidity** are.
   * Give one example of an asset with:

     * high return, high risk, low liquidity
     * low return, low risk, high liquidity

2. **EMH**

   * Define weak, semi-strong and strong forms.
   * Why does the strong form not hold in reality?

3. **Central banks & markets**

   * Who supervises the banking system?
   * Which markets do central banks supervise directly? Why?

4. **Basel & SVB**

   * What changed from Basel I → Basel II → Basel III?
   * How does SVB illustrate the importance of **duration** and **liquidity**?

5. **Bonds & duration**

   * If interest rates go from 3% to 4%, what happens to the price of an existing bond?
   * If a bond has modified duration 6, what approximate % price change do you expect from a +1% move in yields?

If you can answer these clearly (with or without AI assist), you’re in very good shape.

---

If you want, next step I can prepare a **one-page “Exam Survival Sheet”** in English: just formulas, key definitions and 10 ultra-targeted questions to practice before Wednesday.


# Transcription
1 de diciembre de 2025, 8:12a.m.
1 h 19 min 9 s

Yes, we have class today.
Y.
It's close once.
And because I'm a teacher, I have also same.
Spanish no English.
OK, this is amazing.
Amazing.
That's not gonna be there. A notebook.
LM notebook LM.
Now Google in and where are you?
Here you are.
OK.
We will tell map.
What is this? We have already talked about this.
Let me what are this me with me?
With the then with them questions in the panel.
Yep.
And also I like these tapetas, tapetas. Sorry, because this is in Spanish.
Finding yours generating.
Oh, sorry, this is.
Hero like please that.
Reading details.
OK.
Perfect. I ask for. I like this to happen, yes, because I want to start with a disclaimer.
I want to start with a disclaimer.
A I is just one more tool. Never use a I in order to hit the food.
For this you have the microwave or and also for example, never use it as a or never use it as.
Something you should do. If you need to run, you want to go to the gym.
Don't put the How do you call these things? Don't put the weights in the meat.
Because you take the weights by yourself. What I mean is that.
Saying you apply in the dean, it should be applied here. I have asked Google Notebook LM to give me a list of them, list of them for maths.
Well, no, Gubeni, yes.
Yep, what else? I I am using Google Notebook LM and I have it Google Notebook LM transcripts. Careful because if I were you see.
That GPT, that GPT will look for other things. We look for other things in the way, in the way in his memory. Yes, for example, do I have?
Mention in my classes Pakistan.
I think that no. I think that I have not mentioned Pakistan. If I ask, who will know who get in about Pakistan? If I ask, who will know who get in about Pakistan?
He will not give me any answer, yes, but if I made the same through chativity.
He will tell me things that he will create by himself. Yes, Google knows Google. Just take the just take the links, the information, the files I have sent him, yes.
This is important also to know to understand what is the tool that you are that we are using.
Dave.
OK.
Yes, go pick.
Final exam, another thing. Final exam will be held on Wednesday, December the 3rd at 8:00.
This is incorrect. Final exam will be held on Wednesday, December the 3rd.
Normal hour to finish. Well, at 12 we will finish. We will start at 10 at 10:30, so it will length one hour and a half and if anyone needs an adaptation.
I will be not here. I don't know yet the room. I have asked for a bigger room. Yes, I will send you the WhatsApp room number and I will be in the room number since the now 9:30. Probably I will start for people that needs adaptation at.
They are dead, yes.
Make sense?
At 12 I will finish because I need to go running. I'm sorry for this inconvenience. So this is another idea. Why this mistake is being made? Because I have said one class will know has read.
And is there essential topics for the final exam?
Core financial fundamentals, Holy Trinity, for each return on liquidity.
Define the trade-off among the three. Nothing that liquidity is the crucial. John, where are you?
Often overlooked element, the Holy Spirit of finance. I like the way.
Trust and money understand that inflation is fundamental. Fundamentally a loss of trust, lack of confidence in the currency and the system.
Are we drugs and efficiency?
Find arbitrage and explain how exploitive is pricing. Perfect. Any questions? What is arbitrage? A lack of efficiency.
If anyone.
Does not know if anyone does not know anything what this person can do us and at the same time this person is asking he or she is getting two things at once.
He's getting information for himself and also he's making the class to share to have much more information. This is the idea of arbitrage. Arbitrage always starts with a lack of information somewhere.
There is a lot of information and thanks to Army drugs.
Thanks to Arbitrage.
The person that the take this, let me call it opportunity, will make a business for himself at the same time, at the same time will work for the whole market, yes.
Is there an inefficiency? Yes, there is. OK, then efficient market hypothesis.
Now the three forms weak semi strong and explain why insider trading is illegal.
Tell me more regard the three levels of efficient market of the efficient market hypothesis.
Then bond pricing and time value of money. Be able to calculate the bond price, present value, given yields and coupons. Understand the intuition of time value of money. Noting that this year not not noting sorry that earlier cash flows lead to.
A higher internal rate of return. Duration is a measure of interest rate sensitivity, no time, and it's critical for understanding market risk. Banking risks identify and describe the three main risk a bank manages.
Ready liquidity and market risk.
The Silicon Valley bank crisis. Let me, let me, let me hear that is, that is.
The Silicon Valley bank crisis.
Playing the crisis by connecting duration, risk and liquidity.
OK, this finish with .2 that has to do with valuation, fixed income and risk. First group is core financial fundamentals.
And then system architecture, supervision and regulatory system structure. Now the three principal divisions of the financial system, markets, banking and insurance. Then regarding supervision, distinguish between market supervisor like SCC and central.
Banks who supervise banking and set monetary policy.
And.
Central Bank mandates compare the federal reserves dual mandate with the ECB primary focus.
Monetary tools.
Define MO and M2 and explain the intent effects of quantitative vision and quantitative tightening.
Lasse La Cordes.
Context of Basel One through OK.
Tell me about the relationship.
Between Vassar Accords and Risk management.
For a wood, basil accords, market types, different differentiate between primary market and secondary market and then institutional distinction. Now the key difference between a bank that is deposits requires public license, deposit and insurance, investment and an investment form.
This investor money issues a prospectus of variable returns with no guarantees.
OK.
OK.
I am missing.
I am missing things regarding.
Financial instruments. Yes, financial instruments. I'm missing something regarding stocks, equity valuation, fixed income valuation. I haven't talked about derivatives, but I have given a definition for financial instrument. Let me let me.
Express and see what I'm finding.
Ah, sorry.
I want all the answers in English.
Please leave last one.
OK.
OK, let us solve the efficient market hypothesis.
I don't know if I can have this bigger. Sorry levels of the efficient market hypothesis. The efficient market hypothesis is a fundamental concept. We form.
I mean the core mechanics driving markets towards efficiency C is arbitrage.
Technical analysis cannot outperform the market. OK, here I am missing the definition of technical analysis. Technical analysis. You have also all the slides.
You have also all the slides. I don't respond about all the information that Google Notebook Ellen is giving me now. Yes, I don't respond about that because it's time you ask, you will find things new. I'm just going through this.
In order to review, but also you have the slides, yes, and in the slides are all the concepts and all the numbers or whatever prices reflect all past market. So giving the weak form of technical analysis.
If a market would out is written here, sorry technical analysis. I was looking for technical analysis. If a market is efficient in the weak form, this will imply that technical analysis will not.
Work, yes. Then let me move to the semi strong form.
Fundamental analysis will not work, yes, and the strong form.
Markets are not efficient in the strong form. Regulators that like the SSCC prosecute insider trade. Insider trading is illegal because it exploits a better information position than the than the rest. These are the three levels.
Then efficient market hypothesis, absolutely important. Then relationship between Bassel Accords and risk management, absolutely important.
The accords focus on the three main risk about must manage credit risk, liquidity risk and market risk. Then Basel one primary focus on credit.
Risk. Why? Because at the beginning things were simple and banks business has to do with risks and bank business has to do with just.
Knowing that if you lend money to someone.
You have to calculate well your business has to do with. Be sure that you are going to receive back this payment then person 2.
After the 2001 the 11th September attack.
Includes talks about the three, three pillars include requirements for market risk and operational risk and also market operational, yes and great risk in pillar one and there are two more pillars and that.
Embassador 3 introduced significance reforms to address the 2008 financial crisis. It's it's focused in liquidity risk and also systematic Embassador 3.
Facel 3 defines the systematical systematic institutions, the institutions that are to be to fail, and all these institutions requires extra require extra regulation, yes.
What was?
What was the what was the asset of Silicon Valley Bank? I don't remember if it was it was 249, around 249.
9999000 Why? Because 250,000 is the frontier between becoming systematically systematic institution and not. Do you understand what I'm saying? What I'm saying is that passer 3 introduce one limit.
If you.
If you go over this limit, you become institutional and you become systematic, you become too big to fail and more regulation would apply to your bank. And because of that, there are a lot of regional banks in the US that are just.
Under, yes, beneath this limit, yes, because and if you are under this limit, you have less regulation. OK, financial instrument, a financial instrument or financial asset is an intangible asset whose values derive from a contractual claim.
It represents an asset for the owner, holder, but a liability for the insurer. Financial instruments, surface tools or Lego bricks OK for the financial system used to finance needs or heads against risk.
They must balance the Holy Trinity, risk, return and liquidity, key categories of instruments, money.
Money, yes. Then for me, this is a second level #2, three and four is a second level that has to do with financing and the second level includes bonds, stocks.
Loans and mortgages and then comes derivatives, options, futures and swaps and the higher the standardization, the liquidity, one important thing.
Yeah, not for you, for myself. What would happen with my class if I go through this?
What will happen with my class if I just go through these summaries? I sort of explain it to you.
That this somebody has a big bias. That is myself.
When reviewing, I go through this summary, I see my bias, I start logging myself and I will say, oh, this is great because I have already said and I go deeper in what I have said, yes.
It's the first time I'm using this. I don't know how next semester things will work, but for the first time is the most complete review I have made into a course.
And I have your sis. Let me go deeper.
Oh.
Let me go. Please, I can.
Sorry, because this is this is in Spanish. All the course, we talk in English all the course but.
There is one.
There should be here.
2.
I can do this with all. Let me no summary video on reports. Reports also cannot be.
Here I can select English.
Here I have to select English. OK, you're in Spain, so I will go quick. Rally in your Google Note. Google. Let me if you have to configure the Italian, you will see the Italian because the whole text is in English, everything is in English.
And if you have English, you will read it in English, but whatever, this is the whole course. If you press here or if you press here, you will see information regarding all these things. Tylers only Trinity.
Stability, trust and stability. Money, inflation, stability, debt, risk, return, liquidity.
These are the pilots. Then system architecture, divisions of the financial system, banks, markets and insurance, supervisors and regulators, banks, SCC.
And global institutions, central banks, let me regarding central banks here, F, the Fed, BC and Bassel. I wish there would be something regarding Bassel later.
Markets dynamic and efficiency.
Asymmetric information, efficient market hypothesis and here the three levels.
The monetary policy and history. Monetary policy tools.
Interest rates and quantitative division, different types of inflation and.
History regarding monetary policy.
Risk management and study cases.
Bank risk regarding banks here, credit, liquidity and market and operational. They learned of September as an example.
It is in compilation.
And it's a crisis.
Regarding your Soros, German hyperinflation, Silicon Valley Bank, modern tools and contacts.
AI technology, Jaime, Jaime night, Obsidian geopolitics.
Studies prompting time management.
If I repeat, if I repeat this same thing, I will get a different result.
If I repeat this, I will get a different result. Tell me. All right, I have two questions. Please.
OK, second question.
Um, second question is the test. There's a lot of.
OK. Do you still have any questions on that? And if so, can you clarify, you talked a lot about how like which ones include people who are working versus that? Yeah, all questions that refers.
The only question, the only question that will refer European Central Bank that will not apply directly to Fed. Yes, if you read European Central Bank.
All questions and answers are the same as if you were reading Fed.
European Central Bank, I'm fed both.
Supervise monetary policy and both supervise banking system.
The only question that will be different is regarding the objective, the mandate, why European Central Bank has one unique mandate.
That is price stability. Fed has a dual mandate has to do with labor market, labor market and labor market and.
I'm prices WT.
Then I talk a lot and you have slides regarding.
Not just European Central Bank competences, but also SEC and European Central Bank competences and the question is.
Does European Central Bank, does Fed supervise any market? And the answer is yes. They both supervise 2 markets that has to do with monetary policy.
They supervise the interbankary market and the public debt market. Why? Because of the interbankary market. We have LIBO or the URIBO that is a reference for interest rates and due to the public market we have the due.
Yep.
Regarding if I have already written the test, the test will happen this Wednesday and normally I do things with one week of advance because if not now we have classes or it's not just writing the test and it is I need to make all.
Copies and I need to make things with that.
But I don't know why it will matter for you. I think the question I should have worded it a little differently. How that leads to the format of it like you know the amount of questions. Absolutely. I've got it and it's same structure as the meter. OK, same format, same structure.
Same thing, I mean same thing regarding written and in the test nega incorrect questions will not take down, will not take.
It will not. You can answer all if you want answering in blank or answering incorrect will work the same.
Yep.
I'm sorry. No, don't worry. I mean, this class is looking for your questions. Are you a teacher who tends to review these questions in the first final?
You have a question that was hiring.
Truly, I don't remember, but the day after the midterm I went through all questions.
And names and you have the throw skills.
I went through all questions. Let me.
Let me, let me.
This young When was the? When was the?
When was the meter or less?
I will 27. It was in October, I think probably it will be, yeah.
I'm gonna.
Is it 20?
26th. Oh, 22, 22nd. OK, OK, the 20th, 27th. I'm going to take the class immediately after, yes.
Have your steak one sauce.
I have just taken one source and.
Would you make a short summary of all questions?
That were told in this source.
I want the and swear in.
Yes, let me take this. Let me take this here.
Could you make a? I have just selected. I have just selected the class after the meeting, yes.
Based on the source material.
A wide range of questions and said check prompts related to the core course concepts were so reviewed or discussed during the session. Here is a short summary of the principal questions that were solved for review.
Financial system division supervise supervision map who supervise the banking system and who supervise the market. I'm sure central bank supervise banks and monetary policy while market authorities like SEC supervise markets. Central bank market oversight.
Which choose specific secondary market as the central bank supervised and why as well the interbank market and the secondary market of public debt because this market generates the indicators like the this is the river for short term.
And the new group necessary for monetary policy, SEC oversight of banks. When does a market authority authority supervise banks answer when banks act as financial intermediaries for providing investment services?
Monetary policy and economic fundamentals.
And here valuation, risk and efficiency.
Yeah, I don't remember. I don't remember which questions were incorrect in the midterm, but I remember that I went through all of them.
And that day we have lot of peace also also.
Also other thing you can do is just taking this.
Student Rica, no class remaining.
For our logistics, what we cover, Supervisor, Mac, Central Bank, Grants, Monetary Market, Authority, Monetary Base, Castle Public, plus Bank Reserves, Money Supply, Report, Reports, Purchase Agreement.
Banks 101 new block. What? What makes we start talking about banks? Quick self test, quick self check. It's the first time I am reading this. You have this inside the file.
And inside the file also you have the transcripts, the transcription write one paragraph. I mean quick self check. OK you have done this. Oh two projects have identically totals but project a page earlier which has higher IRR.
Why? This is one of the questions that you have in the meter, yes.
No questions.
It is in a week.
Yesterday.
I send you all the translators.
Yesterday I sent you all the transcripts. Also you have all the slides.
That.
I cannot say. I mean, I can start saying all these things that I'm writing, but this will imply noise.
Um, I just shared.
OK.
Yeah, I mean perfect. Also, I can share here. OK, I can share.
They're not complete.
Today is the day before the final. I have been working with you in this sense during the whole course. I'm not.
Saying anything wrong. What I'm saying is that.
That I'm trying to try. Let me please.
Oh.
Hey, sorry, here, copy link.
Oh, this is yours, no? Yeah.
And.
This one is he said.
But.
When I'm trying, I mean.
This is like a bike. Is it like a bike?
You can. I don't know if you can. You can know how to bike from here to Wednesday. Personally, if I were you, I will not just. I will not just be biking for two days. I will practice, practice and practice because this is absolutely powerful, not just for my class.
This can apply. I mean I am doing this with my transcripts, but you can just Google SCC or you can take SCC webpage, you can take the regulation, you can upload this to Google Note, Google M and do the same thing instead of.
But will change are the sources. Now I'm using a sources this.
But one thing I can say is to try this new this button. I have. I've never tried to search for new.
Ourselves in the web, yeah.
What I am showing you, what I'm showing you is absolutely disruptive.
It's absolutely disruptive. OK, let me.
You know, last time.
Hit us and.
Six.
I've created this presentation. This presentation I have already created with financial markets navigating the territory with the best available map.
Finance is a constant dialogue between the system with design and the world itself. Math, the architecture of the system, the territory, the arena of motion and risk. What is a financial asset? Equity, fixed income, derivatives.
What I have told you that I miss when asking for 10 questions. I told you that I asked I miss this view. Now I have not asked the only the problem that I have used in order to get this summary was just I want the presentation in English.
I have not tell him how to do it.
What is a financial asset?
Risk, return, liquidity. Liquidity is of the Trinity, but it is Russia. It's what makes things happen. If you have heard this class, probably what you are looking there is one more thing said.
Whatever, let me run. System is governance, central banks, role key players, supervisors, role key players, financial market standardization. OK, efficient market hypothesis.
Strong, semi strong and weak.
This is awesome.
This draw has been generated for this. A fixed map cannot hold when the territory answers give way.
Territory. Oh, I think this is between Bretton Goods and the Nixon shop.
Call Lancer when Bretton Woods start when the map was designed, then it got broken in year to 1971 after you after Vietnam War.
And then once this was broken, there was a lot of uncertainty.
Black Wednesday.
OK, careful because us careful because.
Because as this picture is great, I like it.
This is not real. I mean this is this looks like real here it go up, but this is not the real graph.
We are graph looks like this one. It looks like this one, but I have not upload any grass so.
I'm proud of this. I'm proud of this because sorry, Gemini has created this based on what I have said.
Let me show you.
Let me show you.
This is the real one.
For the year 2000.
Yeah.
Year 2000 compared.
Compare. Please compare.
Deal with this.
It looks same, but it's not the same. Make sense.
Therefore, because, but cost me a wall.
Here makes me think that careful because this is dangerous, yes.
The map, the strategy, it works. The idea is the map, the territory. This presentation tells a story and it's a story regarding the map, the territory and the collision.
Theory, practice and the collision has to do with.
Equity, BAA bubble, global fiscal stress.
Using the map, reading the territory. We cannot play the future. We can, however, manage it.
OK, in order to finish with this also I have asked finance features features.
Hey, what is the name of the all the central bank located in Sweden? This probably will be a test question.
Risk bank.
I'm joking. This is not going to be one test question. Yes, the three core dimensions that all investment decisions, much balance of often called the only three are risk, return and John.
Yeah. And in the what does liquidity refers to? Yes, to convert and ask.
What is that? This is just by pressing the car.
Please help us also understand.
Any thoughts? Sorry to keep asking questions, but sorry to keep asking questions. No, we haven't done any calculation.
We have done calculations in class.
After we have the own set it up more than three days. I mean like worksheet sits and yes, we had calculations, but yeah.
When going looking at it, what do you think? Is it going to be similar question, different from the easiest level? Do you have any thought on that? Not only I have, I have said a lot of times that what you need to know is the value of money, how to calculate the price of a bond and knowing how to get duration from a bond and what that duration means.
And duration has to do with interest rate sensitivity.
And if interest rate changes, price will change. The problem? No problem. I don't have any problem. But the issue with this class is that I have people from different levels. I have people that knows a lot about finance.
And I have people that this is its first time regarding finance, yes.
I have gone through equity evaluation last day. I went through equity evaluation, no deeper, but I went through that through that.
Also portfolio theory, it's important, but if you don't know anything regarding finance, working over portfolio theory is not as important.
In order to understand monetary policy, interest rates, time value of money, it's perfect. Yes. What happens with bonds if interest rates increases? Are you?
What's happened with the price of a bomb?
What's that?
If interest rates increases, something all of you should say as if it were a mantra. If interest rates increases, price of bonds goes down.
Let me guess, Don.
Here is.
Select.
Oh, many.
Times the teacher has said that if interest rates increases price of bonds.
Well, that.
Or some.
Bout.
I live on SD nation.
The resources analyzing.
Oh, this is.
I went on more than 20 times. I think that there are more.
Dearly, Dearly more than 20 times. Same fact.
It.
Give me the answer in.
English and be more.
OK.
OK.
OK.
Following is a precision area of the main question of concept Tanahers. Oh no, whatever, more than 20 times. Why this is important? Because at the end.
At the end, finance has to do with managing, managing an unpredictable future. Yes, how can we manage an unpredictable future? We need to, we need to have references.
What must be true regarding the future? What should be certain? Public debt. Countries pay back their debt and central bank business has to do with assure.
The future.
So everything has to do with rates. Rates is absolutely important.
At which rate I will pay back my debt in one year, two years.
Me as an individual, I am unpredictable, but society should be predictable because we need peace. And in this sense, central banks place with interest rates. Powell will talk in December.
And almost, not almost for sure, but what he will probably say he will drop next week. I think it's next week. I don't know if it is next week or or week after, but he will drop interest rates for more for other twenty-five basic points, yes.
And if Jerome Powell drop interest rates, what happens with price of bonds? They go down, they go up. If interest rates are dropped, price of bonds will go up. And this has to do with time value of money. This has to do with monetary policy.
And it's simple to make the click between interest rates, time value of money and fixed income valuation. And doing this click, we can understand how a lot of things work. Why now SP500 is in maximus?
My goal now is Maximus.
Why there is so much liquidity?
All this let me look for in two.
And two.
Why this is in maximum?
Why this is the maximum? All these questions has not a single or simple answer. In order to understand this, we should take into account technology, geopolitics, inflation.
War tariffs, Democrats, Republicans, UK, Europe, Africa. Yes, trade.
An.
I cannot ask you things regarding Korea, C or Japan in class, in the exam, in the final, but I can ask you questions regarding interest rates and monetary policy, yes.
More things, more things.
More things.
2.
You have, Paul. I mean, I don't know if I have been giving you. No, I know that I haven't given you this like these transcriptions in a daily basis.
I haven't. I haven't not given you in a daily basis, but if anyone has asked me about a transcript, I have immediately sent him or her. And also I have tried before the midterm I gave you all and after I give you all again.
And I have been trying and I have given you this again.
There is one point where I I cannot do more. If you gave all what you have, you are not forced to give more. But please, please.
Use this amazing technology. Use it because this is an absolutely game changer, yes.
This is an absolutely game changer. Let me move because any questions, any more questions regarding this? I can come back when you need, but I want to continue playing with by coding. I want to continue playing with this.
I want.
I I well face in order to.
So my students today is your concept regarding.
Phone.
I want to show that we are dynamic.
This is AI Studio and.
I am yes I have press what is written by a colleague. Yes AIE studio and last week the last Friday I put my my my professor e-mail and I have got a free one year subscription. So this is the premium but last week.
I think I did it without the premium subscription, the proper subscription and I get same, not same. I don't know if the same result or not, but an amazing result. Yes, I want a web page in order to show my students duration concept regarding bond valuation.
I want to show them in a dynamic way first.
How to calculate the price of a boat and?
Which is the impact of interest rates on it then on to.
Calculate duration and modify duration.
I'm.
Find out how to use duration in order to approximate.
The price when?
In this way.
Yes.
Or mulas.
Use charts and so the salts in and the.
What I would like to play with?
Solved by changing.
Please do this, right? Yes.
Anyone has any one of you has tried this since last week? I tried but I couldn't see because I need to.
No, last week I did it without the pro. I thought maybe you were doing the the three of them. I didn't use the three. OK, no, no, I mean last week, Monday, Monday I use.
Everything. But Wednesday I feel as if Google has made cuts because a lot of people were using. If you asking Google News about how much, how many people were has been using this during this last week.
This week they have start cutting things because the use has been massive and this is an absolutely game changer. He's doing that. What was your name? Charlie. Charlie. Sorry, Charlie.
Yeah, so this is creating a web page, the complete web page and not only it's creating the web page, but also you can export it to GitHub, GitHub and.
You can put it live enable users. Last week in class I used this in order to show you how to portfolio theory and equity valuation. Markovic model, yes.
Today.
Full screen, I call it duration, modify duration.
OK, face value coupon rate years to maturity, five years due to maturity 5% so.
What happen if interest rates? Oh, I would like to introduce this number also in a numerical way. But what happens if interest rates goes up? Price goes down, yes.
Day.
Now call it duration 4.5 years, bond pricing formula, modified duration and.
If you see.
In this point, actual price is in green, how the price changes and duration approximation is slow, yes.
Done.
New interest rate, so if interest rate is 5%.
If interest rate is 5%, interest rate is sorry, the price will be 1000. What I'm doing with duration I am approximating. I am approximating the green line by the yellow, yes.
I'm approximating the green line by the yellow. I am approximating price of the bond, so by the green line by its slope, so by the yellow line, yes.
So.
Scenario analysis for in the future new interest rate if interest rate remain unchanged.
Nothing changes. If interest rates increases, price will decrease and if you see the approximation will be 5, yes, euro would be $5, sorry $0.05 if I move these two.
6%.
The approximation will be less accurate.
And.
Between 1000 and this new price, the change would be around.
4.3295% that is modified duration. What is modified duration?
How much the price will change for 1% into maturity shift, yes.
And look, please, Charlie.
I'm gonna press this.
Not only develop the webpage, it also introduce you introduce one AI agent explain.
Here is an analysis of your bond scenario. Why prices below part when the new to maturity rises to 6%.
Its market price falls below its par value 1000. Investors demand a higher return 6%, so they will only buy this bond that is going to achieve that deal, yes.
It's incredible. Several important things.
Is prompting important?
Is prompting important? Absolutely, yes. But at the end, what is prompting? Prompting is fully understanding what you want and in order to fully understand what you want.
I am. I'm the professor, but do I know duration well? Do I know bond valuation well?
And does this completely match with my class?
Yes, so here the point.
I mean there could be mistakes, but if there were mistakes, modify duration. If there were mistakes I would all things I have never explained duration.
In a short term with so much power, but I have always explained duration. Same way is the slope modify duration. Please understand first this then and.
OK, let me show you.
It would.
This is great. I want to.
Or or they add new lawyer, new lawyer.
Explaining all this for all this match match with.
Monetary police M0M2 and all.
Public that regarding.
And now public data.
I.
But.
Also I want to connect.
All these graphs.
We we are fine you.
And I want to be able to change the app daily.
Basis.
Change that.
The time of the.
And do it in the right, please.
One that will need to be explained. So what I'm doing, I am asking everything. I don't know what I will get, but typing.
Is free. I have. I mean, this is perfect, yes.
And what I am, what I have asked is to put to introduce one more like. I don't know what I want. I don't know what I want because I don't know what is the relationship between MOM 2 and the yield curve, yes.
I don't know what I'm going to find. I know that I have the Google where is, where is.
And all public data published by Fred. I have asked Google to go and look Fred web services. Yes, but let's see what I'm going to get.
What I want you to see.
I want you to see myself playing, playing with this and once I get something I like, I move next, yes.
What I told you the first day of class during this term, we are going to see new things. I don't know what is going to happen, but something amazing will happen.
I was thinking when saying all these things about, I don't remember exactly what I was thinking, but I was thinking more about geopolitics. Why? Because of Trump? Because of last semester, yes. Also, I was thinking about Nvidia.
Nvidia. I have passed the whole term thinking about Nvidia. Also I'm thinking about Taiwan. Also I'm thinking about chips.
About chips.
I didn't mistake this black swan. Yes, let me. I want to read the refining.
This is where I've been drilling down. The users need to understand how the foundation masters to relation relates to monetary policy and the and money supplies.
And within I'm considering using interactive to make this play standing data sources.
I'm now integrating live Gilkur data source primary due to.
For me refining data.
What I can tell you after having seen this power.
Is that at the beginning of the semester? I thought we were closer to the end of something. Yes, I thought that, oh, we are almost done. A I is here. We have a lot of incredible tools and we are, I don't know, 506070% done.
After seeing this, I can tell you that we have. I don't know yet if we have start the change or not.
But we are at the early, early beginning. What is the impact of all these things in the educational system in the?
I'm doing life all these things. I'm doing life. Who will this impact?
I don't know.
And then he's done.
OK.
We have done beautiful.
This is today's circle, yes.
This is last year.
30 years, 6% 5.69 OK.
Digital proof is not real, yes, and also you cannot find here the data or whatever.
Then.
These ink penetrates.
These interest rates.
Now I know this where is in the red. Yeah, this is in green and true.
OK, I will simulate. Yeah, 2024.
Mhm.
It's still.
It's still.
Let me go to year 2000. Here it was an inverted year 2000.
But whatever I mean, I can ask at the end I have the user interface.
I can start asking.
Oh, and use the right look.
You choose one and you use you go you got this. If you press this button goes here in order to calculate giving that deal curve this one.
Analyze this economy.
Weather.
I mean, this is perfect. This one is perfect.
This one is an absolute disaster, but.
I have asked to integrate a lot of things together. I have asked to integrate the a real time deal curve and I've got it here. I have asked to integrate this with M2 that is here and M2 together with interest rates.
Now it's correct, but it was it weren't 6 trillion. I have intruder. It has never been 6 trillion. I will bet if.
Thank you. Oh yeah, here.
Always.
It's not bad and true, yes.
This is.
Yeah. Oh, any more questions?
It has been an absolute pleasure and see you next Wednesday. Group day was a group in order to see where the room of the exam will take place place. Yes.
