---
titulo: "Foundations of Finance – Session 4: Time Value of Money, Perpetuities and Annuities"  
fecha: 2026-09-09  
curso: "Foundations of Finance (Fall 2026)"  
sesion: 4  
asignatura: Foundations of Finance  
institucion: NYU Madrid  
tipo: sesion  
estado: preparado
---
# Foundations of Finance – Session 4

## Time Value of Money, Perpetuities and Annuities

**Date:** September 9, 2026  
**Course:** Foundations of Finance – Fall 2026  
**Institution:** NYU Madrid

---

# 1. Session Overview

Session 4 marked the beginning of one of the most important quantitative blocks of the course:

# Time Value of Money

The main topics were:

- future value;
    
- present value;
    
- compound interest;
    
- solving for the interest rate;
    
- solving for time;
    
- multiple cash flows;
    
- reinvestment of intermediate cash flows;
    
- perpetuities;
    
- growing perpetuities;
    
- deferred perpetuities;
    
- annuities;
    
- APR versus Effective Annual Rate.
    

The central idea of the session was:

> **There is essentially one valuation framework: move cash flows through time using an interest rate.**

---

# 2. The Basic Time Value of Money Formula

If we invest an amount today:

$$PV$$

at interest rate:

$$r$$

for:

$$t$$

periods, the future value is:

$$\boxed{FV=PV(1+r)^t}$$

The reverse operation gives present value:

$$\boxed{PV=\frac{FV}{(1+r)^t}}$$

These two expressions are not really different formulas.

They are simply two ways of rearranging the same relationship.

---

# 3. Simple Example

Suppose:

$$PV = 1,000$$

and:

$$r = 5\%$$

After one year:

$$FV = 1000(1.05) = 1,050$$

After two years:

$$FV = 1000(1.05)^2$$

The important point is that in the second year we earn interest not only on the original investment but also on the previous interest.

This is:

## Compound Interest

---

# 4. The Power of Compounding

Compounding becomes increasingly powerful as:

- the interest rate increases;
    
- the investment horizon increases.
    

Therefore:

$$\boxed{r\uparrow \;\Rightarrow\; FV\uparrow}$$

and:

$$\boxed{t\uparrow \;\Rightarrow\; FV\uparrow}$$

The growth is not linear.

It is exponential:

$$FV = PV(1+r)^t$$

This was illustrated with the long-term example of an investment made hundreds of years ago.

Even small differences in rates become enormous over very long periods.

---

# 5. Compounding as a Learning Analogy

The same principle was used as an analogy for studying.

Knowledge acquired today can be used in later classes.

Therefore:

> **Learning also compounds.**

If students begin working now, today's knowledge makes tomorrow's material easier.

If everything is postponed until the end, this compounding effect is lost.

---

# 6. Calculating Present Value

Suppose you want:

\$1,000

one year from now and the interest rate is:

5%5\%

How much must you invest today?

$$PV = \frac{1000}{1.05}$$

The same logic applies to any future cash flow.

For several periods:

$$\boxed{PV=\frac{FV}{(1+r)^t}}$$

---

# 7. Solving for the Interest Rate

Sometimes we know:

- present value;
    
- future value;
    
- time;
    

and want to find the return.

Starting from:

$$FV = PV(1+r)^t$$

we obtain:

$$\frac{FV}{PV} = (1+r)^t$$

Therefore:

$$\boxed{r = \left(\frac{FV}{PV}\right)^{1/t} - 1}$$

---

# 8. Example: Finding the Return

Suppose:

$$PV = 1,000$$

and after three years:

$$FV = 1,108$$

Then:

$$r = \left(\frac{1108}{1000}\right)^{1/3} - 1$$

This gives the annual compound return.

The point is not to memorize a separate formula.

It is to understand how to rearrange:

$$FV = PV(1+r)^t$$

---

# 9. Solving for Time

Sometimes we know:

- $PV$;
    
- $FV$;
    
- $r$;
    

but need to know how long the investment must remain invested.

Starting again from:

$$FV = PV(1+r)^t$$

we obtain:

$$(1+r)^t = \frac{FV}{PV}$$

Taking logarithms:

$$\boxed{t = \frac{\ln(FV/PV)}{\ln(1+r)}}$$

The base of the logarithm does not matter as long as the same base is used in numerator and denominator.

---

# 10. The Main Principle

Students should avoid thinking that there are many unrelated formulas.

There is one basic relationship:

$$\boxed{FV=PV(1+r)^t}$$

Depending on the problem, we solve for:

- $FV$;
    
- $PV$;
    
- $r$;
    
- $t$.
    

The important skill is identifying:

> **What do I know, and what am I looking for?**

---

# 11. Multiple Cash Flows

Finance rarely involves only one cash flow.

Suppose a project produces:

CF1,CF2,CF3,…,CFTCF_1, CF_2, CF_3,\ldots,CF_T

The present value is obtained by discounting every cash flow individually:

$$\boxed{PV = \sum_{t=1}^{T} \frac{CF_t}{(1+r)^t}}$$

This is exactly the same principle used to price bonds.

---

# 12. Building Example

The session considered an office building that generates:

\$40,000

per year for five years.

At the end of year 5, the building is sold for:

\$500,000

Therefore the cash flows are:

|Year|Cash Flow|
|--:|--:|
|1|40,000|
|2|40,000|
|3|40,000|
|4|40,000|
|5|540,000|

If the required return is:

6%6\%

then:

$$PV = \frac{40,000}{1.06} + \frac{40,000}{1.06^2} + \cdots + \frac{540,000}{1.06^5}$$

The class obtained a value of approximately:

$$\boxed{\$542,000}$$

The exact number is less important than the method.

---

# 13. Moving Cash Flows Forward in Time

Cash flows can also be moved forward rather than discounted backward.

Suppose we receive:

\$40,000

in year 1 but want to know its value in year 5.

We compound it for four years:

$$FV_5 = 40,000(1.06)^4$$

The year-2 cash flow compounds for three years:

$\$40,000(1.06)^3$$

and so on.

The key idea is:

> **All cash flows must be placed at the same point in time before they can be added meaningfully.**

---

# 14. Present Value and Future Value Are Consistent

We can:

1. discount all cash flows back to today;
    
2. compound all cash flows forward to a future date.
    

If we use consistent assumptions, both approaches describe the same investment.

This gives a central principle:

$$\boxed{\text{Finance is moving cash flows through time}}$$

---

# 15. Reinvestment

An important subtlety appeared in the building example.

If an investor receives a cash flow before the final date, that money does not simply disappear.

It can be:

$$\boxed{\text{Reinvested}}$$

Therefore the future value of an investment depends partly on the rate at which intermediate cash flows can be reinvested.

Later in the course, reinvestment assumptions will become important.

---

# 16. Perpetuity

A:

## Perpetuity

is a constant sequence of cash flows that continues forever.

For example:

$$C, C, C, C, \ldots$$

The present value is:

$$\boxed{PV = \frac{C}{r}}$$

where:

- $C$ = constant cash flow;
    
- $r$ = discount rate.
    

---

# 17. Intuition Behind a Perpetuity

Suppose you have:

\$1,000

invested permanently at:

5%5\%

Each year the investment generates:

$\$1000(0.05) = 50$$

If you withdraw only the:

\$50

interest each year and leave the principal untouched, the \$1,000 can remain invested indefinitely.

Therefore:

$\$1000 = \frac{50}{0.05}$$

which confirms:

$$\boxed{PV = \frac{C}{r}}$$

---

# 18. Preferred Stock Example

Suppose a preferred stock pays:

\$10

every year forever.

If the required return is:

8%8\%

then:

$$PV = \frac{10}{0.08}$$

Therefore:

$$\boxed{PV = 125}$$

This is a direct application of the perpetuity formula.

---

# 19. Why an Infinite Stream Has a Finite Value

At first, it may seem strange that an infinite sequence of payments has a finite value.

But future payments are discounted more heavily the further away they are.

For example:

$$\frac{C}{(1+r)^{50}}$$

has a very small present value.

Therefore distant payments contribute progressively less to today's value.

This explains why:

C+C+C+⋯C+C+C+\cdots

can have a finite present value once discounted.

---

# 20. Growing Perpetuity

Suppose the cash flow does not remain constant.

Instead it grows every year at:

$$g$$

The sequence becomes:

$$C_1 \qquad C_1(1+g) \qquad C_1(1+g)^2$$

and so on.

For a perpetually growing cash flow:

$$\boxed{PV = \frac{C_1}{r-g}}$$

assuming:

$$r > g$$

This is one of the most important formulas that will later appear in equity valuation.

---

# 21. Constant Perpetuity Versus Growing Perpetuity

## Constant Perpetuity

$$C, C, C, C, \ldots \qquad \boxed{PV = \frac{C}{r}}$$

## Growing Perpetuity

$$C_1,\ C_1(1+g),\ C_1(1+g)^2,\ldots \qquad \boxed{PV = \frac{C_1}{r-g}}$$

Students should understand the difference conceptually before trying to memorize formulas.

---

# 22. Deferred Perpetuity

The class introduced an important variation.

Suppose a perpetuity pays:

\$1,000

per year forever, but does not begin until year 10.

The first step is **not** to discount every payment separately.

Instead:

### Step 1

Move to year 9.

At year 9, the first payment is one year away.

The value there is:

$$P_9 = \frac{1000}{r}$$

If:

$$r = 5\%$$

then:

$$P_9 = \frac{1000}{0.05} = 20,000$$

### Step 2

Discount that value back nine years:

$$\boxed{P_0 = \frac{20,000}{(1.05)^9}}$$

This illustrates a powerful technique:

> **Value the cash-flow structure at the easiest point in time, then move that value to today.**

---

# 23. Annuity

An:

## Annuity

is a finite sequence of equal payments.

For example:

$$C, C, C, C, C$$

for five years.

The key difference is:

### Perpetuity

continues forever.

### Annuity

ends at a specific date.

---

# 24. Annuity as Two Perpetuities

The class introduced an intuitive way to understand the annuity formula.

An annuity can be considered:

> **One perpetuity minus another deferred perpetuity.**

Start with an infinite stream:

$$C, C, C, C, C, \ldots$$

Then subtract the payments that occur after year $T$.

This leaves only the payments from:

$\$1\text{ to }T$$

---

# 25. Present Value of an Annuity

Using this reasoning:

$$PV_{\text{annuity}} = \frac{C}{r} - \frac{C/r}{(1+r)^T}$$

which can be written as:

$$\boxed{PV_{\text{annuity}} = \frac{C}{r} \left[ 1 - \frac{1}{(1+r)^T} \right]}$$

The instructor emphasized that understanding where this formula comes from is more important than memorizing it.

---

# 26. A Useful Hierarchy

Students can now organize cash-flow problems into three structures:

### One Cash Flow

$$PV = \frac{FV}{(1+r)^t}$$

### Constant Cash Flows Forever

$$PV = \frac{C}{r}$$

### Constant Cash Flows for $T$ Periods

$$PV = \frac{C}{r} \left[ 1 - \frac{1}{(1+r)^T} \right]$$

The purpose is not to memorize three unrelated formulas.

They are all applications of:

$$\boxed{\text{Present Value}}$$

---

# 27. APR and Effective Annual Rate

The session briefly introduced the distinction between:

## APR

and:

## Effective Annual Rate

Suppose the monthly rate is:

1%1\%

A simple annualized rate would be:

$\$12 \times 1\% = 12\%$$

But if interest compounds monthly, the effective annual rate is:

$$\boxed{EAR = (1.01)^{12} - 1}$$

which is greater than 12%.

Therefore:

> **Quoted annual rates and effective annual returns are not always the same.**

This will be revisited later.

---

# 28. Excel

Excel was used throughout the class to reinforce the Time Value of Money.

Students should become comfortable calculating:

- powers;
    
- present values;
    
- future values;
    
- logarithms;
    
- multiple cash-flow present values;
    
- perpetuity approximations.
    

The purpose of Excel is not to replace understanding.

It should help students see the financial logic more clearly.

---

# 29. Do Not Memorize Without Understanding

One of the strongest messages of the session was:

> **Do not memorize formulas you do not understand.**

Students may use a formula sheet.

The priority is understanding:

- where the cash flows occur;
    
- whether we are moving forward or backward in time;
    
- what the discount rate represents;
    
- which variable we are solving for.
    

Once the logic is understood, the formulas become much easier.

---

# 30. Key Formulas

## Future Value

$$\boxed{FV=PV(1+r)^t}$$

## Present Value

$$\boxed{PV=\frac{FV}{(1+r)^t}}$$

## Interest Rate

$$\boxed{r = \left(\frac{FV}{PV}\right)^{1/t} - 1}$$

## Time

$$\boxed{t = \frac{\ln(FV/PV)}{\ln(1+r)}}$$

## Multiple Cash Flows

$$\boxed{PV = \sum_{t=1}^{T} \frac{CF_t}{(1+r)^t}}$$

## Perpetuity

$$\boxed{PV = \frac{C}{r}}$$

## Growing Perpetuity

$$\boxed{PV = \frac{C_1}{r-g}}$$

## Annuity

$$\boxed{PV = \frac{C}{r} \left[ 1 - \frac{1}{(1+r)^T} \right]}$$

---

# 31. What You Should Retain from Session 4

If you remember only seven ideas, remember these:

> **1. Money can be moved forward or backward in time.**

> **2. Compounding moves money forward.**

$$FV = PV(1+r)^t$$

> **3. Discounting moves money backward.**

$$PV = \frac{FV}{(1+r)^t}$$

> **4. Every cash flow must be placed at the same point in time before values can be added.**

> **5. A perpetuity is worth:**

$$PV = \frac{C}{r}$$

> **6. A growing perpetuity is worth:**

$$PV = \frac{C_1}{r-g}$$

> **7. An annuity is simply a finite stream of equal payments and can be understood as the difference between two perpetuities.**

---

# 32. Questions You Should Be Able to Answer

After reviewing Session 4, you should be able to answer:

1. What is the difference between present value and future value?
    
2. What is compound interest?
    
3. Why does compounding become more powerful over time?
    
4. How do you calculate future value?
    
5. How do you calculate present value?
    
6. How do you solve for an interest rate?
    
7. How do you solve for time?
    
8. Why must multiple cash flows be discounted separately?
    
9. Why must intermediate cash flows be reinvested when calculating a final future value?
    
10. What is a perpetuity?
    
11. Why does a perpetuity have a finite present value?
    
12. What is the present-value formula for a perpetuity?
    
13. What is a growing perpetuity?
    
14. What is the difference between $r$ and $g$?
    
15. How do you value a deferred perpetuity?
    
16. What is an annuity?
    
17. Why can an annuity be interpreted as the difference between two perpetuities?
    
18. What is the difference between APR and Effective Annual Rate?
    

---

# 33. Before the Next Session

Students should:

-  Review the present-value formula.
    
-  Review the future-value formula.
    
-  Practice solving for $r$.
    
-  Practice solving for $t$.
    
-  Practice discounting several cash flows.
    
-  Understand the perpetuity formula.
    
-  Understand the growing-perpetuity formula.
    
-  Understand the intuition behind an annuity.
    
-  Review APR versus Effective Annual Rate.
    
-  Continue working on Problem Set 1.
    

The most important priority is:

> **Fully understand the logic of present value before trying to memorize formulas.**

---

# 34. Session 4 in Five Ideas

> **1. Time changes the value of money.**

> **2. Compounding moves money forward; discounting moves money backward.**

> **3. Multiple cash flows are valued by discounting each one to the same date.**

> **4. Perpetuities and annuities are shortcuts for valuing repeated cash flows.**

> **5. There are not many separate valuation formulas — there is one basic idea: move cash flows through time consistently.**


# Transcription
9 de septiembre de 2026, 5:05p.m.
1 h 25 min 6 s
Look, you can see.  
Ajushi is.  
There are three letters.  
Translator is memory.  
If something is not recorded.  
It doesn't exist.  
If you don't record something, it does not exist. I'm talking about memory. If you don't write, it does not exist. I'm talking about AI. I'm talking about life. I'm talking about a lot of things. Yes, if you don't record something, it does not exist. This is the part of memory. And careful because if you record everything, you have a problem with noise. You should order your life.  
Somewhere.  
Will have to know their life, yeah.  
Next Estepa.  
Actually.  
Action, thanks to AI, says everything. You can just have a conversation. In this conversation, you can just think about what you need and then you tell the AI to do it and the AI will do it.  
All of your memory, action, and the third level has to do with the CC.  
You cannot delegate decision making. Decision making is something you should do.  
Default AI.  
We spend a lot of time.  
We didn't plan too much. We have needs and we do it in order to cover our needs. Now, with AI, we should spend time planning. I think, why? Because doing it is so quick. And therefore, we do it because doing it in a proper way is not easy.  
Make sense?  
So, one of the first things we need to realise.  
More even you that are José is that we have time.  
We have time. And with AI, we can have more time.  
So, we should be very careful with what we desire.  
And, and, oh, I know, even if you look inside, you are inside.  
You open TikTok and you start looking at one video. Hey, this, I think this is not your class, but I wouldn't mind you.  
Thank you. Bye guys. Yeah, I think I was wrong. No worries. Welcome. Nice group. Nice to meet you.  
Hey, hey, he was whatever.  
You can, yeah.  
You can choose, you are never gonna see just one minute.  
William, do you have TikTok? I love TikTok, yes. Yeah. Have you ever just tried to see that one video? And that?  
Have you ever tried, I open, I would see just one video?  
Hell no, like hours. It's not possible. You think I'm going to see just one video, it's going to be just one trial, and at the end you realise that you have spent two, three, 4 hours. It's true, no? In this way, we can choose.  
We can choose anything we can choose.  
And in this sense, I call them obsessions. Obsession is thanks to AI, obsession in a good way. That and I have it, you repeat something, I have it, it is positive, it is a new true, and if it is negative, it is a bias. Yes? Obsession is something that I get obsessed with.  
With an I repeat, repeat, repeat.  
The question, William, is why the President of the US?  
Before answering this question, let me let me take a look at all the obsessions that I put now.  
And, in this sense, AI is not one of the AI, and I am an AI, yes.  
Hi, I am with my NYU students, sir. Please, can you tell them about my obsession system and then also show them I am just now in class. A brief, quick, quick summary of last class. Also, what are we going to do today and present yourself, also present yourself. But I am talking about the obsession system.  
Please be brief and don't expand yourself too much. I'm sure in English and in a schematic way. I just think that I'm going to just press and you will talk. OK?  
This is a...  
It's working. This is the GPD band we have. See, I will show you one talk. Today is not the day to talk about this, but all the information that I get with transcription, with several calls, with meetings is in one Obsidian file in one computer. Cost me $200.00. It's in 200 EUR. It's in my house.  
He's a small one. I'm here.  
Hey.  
Good afternoon, everyone. I'm Luis's exocortex, his AI system connected to his personal knowledge system. The obsession system. Luis chooses an obsession. He studies it intensely. He connects apparently unrelated facts. He tests himself until the knowledge becomes automatic. The point is not memorization itself. The point is training curiosity, attention.  
connections. Yes, the famous US president's obsession is one example. Last class.  
Very quickly, we continue building the foundations of finance, but equally, we worked on how to think, not just what to memorize.  
It's understandable.  
Right now, it is Wednesday, September 9th, 2026, just after 510 P.m. in Madrid. According to Luis's system, he is scheduled to be with you at NYU in Marquillo from 5 to 620 P.m. So yes, I can see from his system that this is class time right now. Today, we continue foundations of finance, but keep the obsession system in mind.  
Don't just wear finance clients. I'm the exocortex. Luis teaches the class. I remember the crazy amount of stuff around it. Sorry for that. I asked him. I asked him to be brave. Tell me what are the obsessions.  
just list the obsessions and also list in a summarized way the topics we cover on last class. I don't want you to seem to generalize. I want you to go to the the test that is slowly going.  
I have asked him.  
complicated things, and he's digging. Then also I have open cloud that is faster, depending on how you want to dig. I mean, whatever. I don't care about the technology. I care about the use of the technology. You understand what I'm saying? And regarding your question, I have also four or five.  
I'm obsessed with US. I will ask, I will tell you why. Also, I am obsessed with, I am an electrical engineer with quantum physics. I love quantum physics. Really? Yeah. Yeah, with quantum physics because actually quantum things are changing a lot. Also with  
the architectural cathedrals. Cathedrals, the both big Renaissance cathedrals and philosophy, but the proper ones are these three ones. Also, I have another one with language, but the point is that if you learn US president, for example, the 30 is  
Call me Coolitz. Call me Coolitz is before Hoover, and Hoover was the one that was in the 1929 crisis. Before Calvin Coolitz, it was one.  
What I'm having before water cutting, Woodrow Wilson, Woodrow Wilson, that was the one, the president that created the Federal Reserve. What I mean is that it's not because of the president in an isolated way. It's because the presidents are like  
When you look at Tahira.  
You can see it, I think.  
a lot of stones together. Or you can look at the cathedral as something unique, something a unity. And there are stones that, for example, if you have an arc, the stone that is just in the middle is one stone that  
takes all the people. You understand what I'm saying? What I'm saying is that US president connects history with I love, with finance, with crisis. Also, I'm teaching at NYU, so it's something in order to get closer to the states. You can connect from them to all your political, makes sense more or less.  
And, in this case, I'm not I'm not going to press it. We succession US President Robert Space. No, this is he has not gone properly, whatever. And then last class, the US, no, he has not looked for it.  
After having, he has not, he has continued the conversations.  
Now I can press, I have changed the, I have changed the way, yes, how are you doing?  
I'm doing great, and I'm glad to hear that. It sounds like you've got the. Yeah, I'm showing my students different ways in order to interact with and now this is so quick, but you can make hallucinations.  
Exactly, it's super quick and conversational, but you're right, we always need to double check facts. Yeah, I mean, I can interrupt you, and you are hearing your answer in these ways, but if I would have done this properly, first I should have given you context and then talk, and I haven't given you any context, so this conversation is okay, but...  
Go too much.  
It's totally fine. Sometimes these spontaneous moments are great examples of themselves. But you're right, clear context makes everything sterder. So if you've got... I am going to read the time of the morning. This class for me is absolutely important. How would you start with time of the morning?  
I'd start with a simple question. Would you rather have 100 today or 100 in a year? Yeah, I think that was your amazing 3 plus to go.  
No, you're ahead of me. No, don't worry. No, never. I will never be ahead of you in case of an invasion due to AI. I will be on your side. Don't get angry.  
I'm glad we're on the same side. Let's keep making classified insightful. Now, we will talk about this, but why the US President I have asked? There is a I have a system that works, but there is not the day to talk too much about that.  
Yes, today is the day, OK. And marking code, marking code.  
Martin Cole will be on the program set. I will explain it currently, but not today. Martin Cole, I am going to ask in two days times, I will be, I will have a nightmare of Martin Cole coming to me. I trust it is not really important for this course.  
My before starting, before starting, or not before starting, I'm going to make a big spoiler. It's just one thing. I'm going to make a big spoiler of today's class. I have talked to Max. Sorry.  
For talking too much.  
Where are you and where are you?  
And when you...  
Finance for I have a load among the problem set 2 together with the.  
And what you finance for this area, no?  
I don't know why this close this works, also.  
Whatever.  
Yeah, and...  
The slides, where are they and X? Let me open the Excel.  
Until 5.  
Yeah.  
Okay.  
Before, I'm gonna spoil the glass.  
A personal problem.  
Then.  
I want your attention.  
Imagine that I have in the bank.  
One 1000 euros.  
And the rate is 5%.  
Rate is 5%. How much money I'm going to have in one year?  
1000, if the rate is 5%, I'm gonna have 1000. Make sense?  
I'm gonna take out.  
I'm going to take out this 50 and 1000 will continue. 1000 will continue.  
And again, I will take out this thing, yes?  
Are you following me?  
Let me call this 1000 present value.  
They will be there forever.  
I'm taking out 50, 50, 50 forever. Yes. And let me call this the rate and let me call this C. Yeah.  
So, I can say, I can say that.  
Press symbolic.  
Thanks, the rate, yes.  
It's equal to C. Make sense?  
So, I can say that if I have a constant and perpetual amount of money.  
Present value of integrity will be C over R.  
But this.  
Knop.  
Imagine that. Imagine that.  
Sea is going to grow at a constant rate, de.  
Yeah.  
I'm gonna have present value today.  
Let me call it price today, present value today, yes?  
How much is going to be?  
Pizarroso.  
Is he the one?  
Rice in year one.  
is going to be. On one hand,  
B 0 * 1 plus.  
Do you make sense?  
And also.  
And also.  
P0 is gonna be P1 is gonna be equal to.  
I need to start my name.  
Alexia, I was going.  
On one hand.  
P1 is gonna be P0 * 1 + r.  
The sectors we know, I am looking for, yes.  
And then, also...  
Juan.  
The one.  
Is going to be equal to...  
See, that is the amount of money that I'm going to have to see. Make sense?  
Bisido.  
Times 1 + d makes sense.  
Because he is, we are not a constant break.  
What is it G? Yeah, G is take on the right at wins, C will grow.  
See, he's going to, first thing I have to say, we are going to repeat it now. We are going to repeat it, but I want you to have this clear.  
Fetch it up.  
This, there is first example: see, see, see, see, whatever.  
And the price of this is price of this is c / r.  
Second example.  
See?  
Syntax 1 + d, C 1 + d rise to the second, and so on.  
This is the second example.  
And I want, yes, to demonstrate that is equal to c / r - t.  
We are in their own energy as well.  
Or at least not much, but we are going to go through this, but see is constant, right?  
C is constant, and if C is constant.  
C Yeah. R is rate. R is the rate at which we will discover, but don't worry too much about R today. G is the growth. G is the rate at which C will grow.  
How do you find? Yeah, this is gonna be done.  
Don't worry, yes, understand? Present value today is C over R in this case, and present value of this amount of monies is C over R minus G. Make sense?  
But I will see you grow.  
No, I mean, C is growing at a constant rate that is G. In this case, C is constant, and in this case, the cash flow you are going to proceed will grow at a constant rate.  
Don't worry, have you understood what I'm saying?  
Coming here, you make this equal to this, you will get that B0 is equal to C over R minus J.  
Are you with me? No, no, no.  
No, no, no, no, no, because we are going to have, we are going to see two, three, four example. I want you to think about this before the class, because if I do this thing in the middle of the class, you will be in an automatic way and you will think. Let me start with the class, yes?  
Makes sense.  
Okay, today's class.  
How do remind market differ from secondary market? You know what are primary markets, you know what are secondary markets, you know.  
need to review. What is the process for selling sort? What is the Bidas spread? How does a market maker use it to control inventory?  
I'm not going to talk now about these questions, because I want to move forward to Tai Marín. Today, we are going to work with Tai Marín.  
First example.  
You invest 1000 today, you will wait 1050 in one year if the rate is ever simple.  
Knop.  
And if it is rice, in the second, on one hand.  
So, on one, what is?  
I want to deal.  
Sorry, 5.  
Yes, if you raise it to the second, there is one part that has to do with simple interest rate and then the interest composed. Make sense?  
The same way.  
The same way, I can calculate future value, I can calculate present value. Let me here, a future value is present value times 1 + r, right?  
Okay, now.  
Here.  
The Power of Common.  
The power of compounding.  
What is this about? Have you start or have you tried problem set one? A little bit? Not yet? Yes. After today's class, please try to do it and try to review today's class. Today's class is absolutely important. And the point is, if you start studying today,  
Next class, please, we are going to see on next class, we will start over the ones we are seeing today. If you leave everything to the last night,  
It's going to be really, really hard to understand and go backwards in time. Do you understand what I mean? The sooner you start...  
The more return you will get, because...  
Money works for money. The knowledge you get now, next class, will continue working. If you let everything in the end, do you understand what I'm talking about? I'm talking about the power of compounding. Make sense?  
Here, future value present by 1 + r at a different rate, and the idea is the higher the rate, the more, the higher the rate, the more the money you are going to get. But  
The more the time, the more the money. It grows in an exponential way. Make sense?  
Yes.  
New York, real estate barrel. The point is, I'm going to do this so quick, more thinking about Excel than thinking about something else.  
And 6026 New York was been both for $24.00, yes.  
About 24.  
Dollars, and I'm told how good was this if it is invested at a 5%?  
This is the year it was been booked, and the rate is.  
Fat person, yeah.  
So, simple.  
How long?  
Spanish.  
How long did it took? We are in year 2026 minus.  
This one, 402 years, so $24 times 1 plus 5% price today.  
2141402, yes.  
What is, what is here?  
Yep.  
Seven 8, almost 8 billions, yes? What if instead of invest this at a 5%, we might we invest this at a 6% rate?  
Let me copy and paste this one here, but with format. Yeah, I want to give the number here instead of 5%.  
She expression.  
Is the weather.  
Yes, I am from 5 to 6. This is an incredible beginner. This is the power of component, yeah?  
And if we increase this to a 7%, we get...  
Fifty trillion, but whatever.  
How much, how much do you need to invest today with an interest present value, present value formula that is something you have to do?  
OK, to receive 1000 in one year, how much?  
Should I invest today at the right at the rate of 5%?  
Sit.  
To receive 1000 in two years, price in several.  
No.  
Knop.  
present value equal to future value over 1 + r rise to T, yes? I want to know what is the rate 1 + r rise to T is equal to future value over present value, yes? 1 + r.  
Rice to de.  
Future value one over P.  
And I can say that our is this manual. We saw this the other day, and this is the whole. Make sense?  
Ignition.  
seems to rise 1.3 billion from investor from investors in exchange for promising to repay to 2.5 on 25 years. What deal is Microsoft offering?  
If I were you, I will try not to memorize anything. For the meantime, you can have your own seed sheet. And I'm going to give you also a seed sheet before. There is no need to memorize it. I want you to understand. What is the problem I have last class with the Marty Call?  
I didn't understand.  
I don't know how to apply something without understanding. Make sense?  
So, please try to understand, not do memories in this way.  
1.3 videos.  
1.3 billion is what they are looking for, yes.  
And Microsoft team is going to invest this for twenty-five years.  
In order to get.  
2.5. Make sense?  
So.  
Ready future value, 2.5 over 1.3, 1 over 25 minus 1. Makes sense.  
Let me see how much is it.  
I'm gonna sell the Excel.  
Microsoft. I'm going to share the Excel once I fix the rate.  
Sáez.  
Oh, I don't want to, I want to go, but whatever the rate is.  
2.5 over 1.3.  
Because I don't have classes, walk with trees, yeah.  
Ruiz 2.  
One over twenty-five -1, and this is that.  
2.65%.  
Is he shout?  
What?  
Mr. Max.  
Shallot what?  
Why do you think he's smart?  
Current interest rates are higher.  
But I would like to, yeah, if you invest like 1.3 for like anything on the index for twenty-five, much more than two. Anything else would be risky, not like an index, that's something you see. An index is risky. We have more than like 2.5 or 25.  
But I need to see Chris.  
I'm talking about twenty-five years.  
Yeah, I'm going to again. I'm preparing bomb class that will be home next week.  
Did you see?  
U.S. I said this with you last day: U.S. Treasury, 10 years, for example.  
The payoff I think is true.  
I said the Treasury US is 4.839. The 10 years is around 5%.  
You see what I mean? In buying treasuries.  
You can get a 4.8%; this is risky if you're waiting matching.  
It won't make any sense to invest at Microsoft at this rate.  
Knop.  
Your round is 40 years old and has 500,000 say for retirement. Let me go to this one. What are we doing? We are playing with...  
Present value formula. Your aunt is 40 years old and has 500,000 saved for retirement.  
Five 100,000.  
Five 100.  
Yes.  
She wants to receive, she, she wants to retire with 4 million.  
Okay.  
Percent value, oh.5, yeah.  
Press in early times.  
All right.  
One plus.  
Eight percent, yes.  
Price to T is gonna be equal to.  
Four. Make sense?  
What are we looking for? We are looking forward to that.  
Forty, so we are looking for X that is running 40 + B.  
Makes sense.  
Yeah, because my aunt is going to invest 40 years.  
On my own is now 40.  
Makes sense.  
4.5.  
Come here.  
Then, bye bye, open 5.  
Is.  
Eight.  
Yep.  
And how can I calculate it?  
William, what did you say? This is...  
Look.  
1 + 8% raise to T is equal to. One important question.  
Two important questions, two questions for one. Do you remember those?  
Second question: I am spinning straight.  
I don't know if it's a Netflix series or... No, no, no, no, no, no.  
Now, please, for me, with space, with space.  
Do you remember 10th?  
E, E, E would be natural. Whatever. I'm not going to write anything. I'm moving to Excel. Yes, D.  
Comes here, yes.  
And T is going to be equal to log of 8 over log of 1.08. Make sense?  
Just.  
Let me go to Excel, I'm here.  
I'm going to calculate no natural logarithms at the beginning over.  
1.08.  
Make sense. Twenty-seven. And now I'm going to calculate. A over log 1.08. What do what will I find?  
That is the same. Why? Because at the end, the base, I would use it as a matter of escape.  
It's just a matter of scale. No matter what the scale I choose, because what I want to calculate is the relationship between one and the other one. Make sense?  
Yeah.  
You can throw it out with all those magnets.  
We're not gonna use robots.  
Knop.  
No, no, there is no.  
Yep, here you've got the numbers. Makes sense, Morales. Let me continue.  
In general, at the end, I have present value formula.  
We will use this formula, this value formula, and there are no four formulas. There is just one value formula we can run from one place to another. The name of the game we will be playing during the whole course is you will have a few shortest flows, you will have the two courses of the ball, and you will need to calculate one of them.  
One of two: rate or rest, listen value or rate.  
I will never ask about time.  
Rather, to be strange, need to ask about future money. I can ask about future money, but what we have probably present value and then go there. Yes, so at the end we will be paying with present value and Redondo, present value and Redondo.  
Makes sense.  
If you invest 1000 and receive 1008 after three years, three years.  
You have the answers, these answers there.  
A.  
Wanna drink some water with them? You have the solutions in this slide? Yes, after. If I were you, I would not see.  
Yes.  
Try.  
I want to fill this with water and let me call me.  
There is no need to go to get the solutions in just thinking about the right questions and seeing one minute, yeah?  
Show.  
Okay.  
If you invest 1000 and receive 1108 after three years.  
What is the interest rate?  
Future value: 1108.  
Over one, 1000.  
Rise to one-third minus one; make sense?  
Second one.  
One 1000 at a 6% rate and proceed 1000.  
Seven 100 and ninety-one.  
How long did you invest? 60%?  
In this case, this is one of like the lower one. Yes, P is equal to the lower of whatever. We just do it and get it.  
You want to have 1000 in four years' time, interest rate are 2%. How much do you need to invest today?  
You know how to do this one.  
One 1000, 1000, 200.  
Yeah, personal value, yeah.  
For me, the most important thing is this: fully understanding present by your wish. I don't want you to get...  
confused by algorithms. And for me, the most important thing, William is giving you examples of that. But I prefer to wait a little. Make sense?  
OK, these are the answers to the question we have seen, and let me go to multiple customers.  
Instead of having just one castle, I will have several.  
What is the name of the game? What will we play if you still have it?  
One, I got several. I will calculate present value of it.  
The same would apply to calculating.  
Future value, yes?  
Let me show you.  
Here, one example. Your company is considering buying an office building that it plans to rent out 40,000 per year, net expenses for five years, then sell for 500,000.  
How much should your company willing to pay for the million if the appropriate discount rate is 6%? Yeah.  
I'm going to have a cash flow of 45 years.  
And at the end, not only I will receive last cash flow, but also I will receive 500,000.  
So, let me...  
I'm gonna still use this one; it's I'm gonna share with you the worst Excel file you have ever received.  
Four.  
Five years.  
Castro is 40.  
Forty, 40, 40, and last year I will receive.  
Five 140, yeah.  
What I'm going to do is the same that I did last week.  
We have one.  
One thing I want you to see that I am repeating, when something is important, I try to repeat at least two, three times before I explain it.  
And I love, I don't remember who, which one of you were. Yesterday you asked me about Primada.  
When talking about drinking next week, I will go again to Pima direction.  
Remind me at Ruiz.  
Personally, you don't need to think too much about pre Madrid because he's European. But if I were you, I would think not this class about, I have already talked about it, I don't care to repeat, but we need KPIs.  
Yay.  
We need to be sure.  
On my inside.  
Weight myself, or would you say? I weight myself.  
So, it's terrific, but it's an API.  
What is 1 API I have in my head?  
comparing the 10-year US Treasury with the Japan 10-year Treasury that touched 3% September.  
I have to, at the end, I have right now, Microsoft, and I ask is a lot, no, we need to compare in order to say we need data in order to serve, yeah.  
So I have this and I'm told how much should your company pay in order to get a 6% return?  
What I'm going to do, I'm going to calculate present value at which rate? At 6% rate. Present value of all future cash flows.  
One plus, 6%.  
Rise to the first. Make sense?  
All of you understand what I'm doing?  
Fully understanding this is something important for me.  
Five 100 and forty-two, you pay 500 and forty-two.  
And in case you receive 40, 40, 40, 40, or 540, your return will be of 6%.  
How much cash will your company have from collecting rent and...  
Selling the building after five years.  
What is the problem with this question?  
This is one problem with this question.  
Let me show you, yes?  
How much money I will have at the end?  
I'm gonna have the sum off.  
All of this, no? Are you following me? Again, I will have 700 now.  
America play teacher value.  
One plus 6%.  
Price to the fifth, yeah.  
You wanna say?  
Even the same.  
Why these members are not sick?  
Because one is discounting it once. Yeah, absolutely. Because these 40 that I have added there have been paid in year one.  
What happens with the other four years that left India fight? The money is not working. We should reinvest.  
this 40 at a 6% rate for four more years. Make sense?  
I'm going to reinvest them. I'm going to reinvest these future cash flows. 40. I'm going to reinvest.  
Add that, ohh, hello.  
Once this song at a 6% rate, let me fix this.  
You see what I'm doing? For how long?  
Four, five years, -1, four, four years.  
Yep.  
I'm gonna invest this one for four years.  
Second one, four, three years.  
For 2, and yes, for one, and I can't really invest this that they will be the same number, yes?  
What I will get if I send these numbers?  
Add the 540 as well, the like final payment, like the selling, yes.  
Yes.  
Plus.  
Yes.  
Yeah.  
Make sense?  
So, how did you get the when you did 725 the first time? Did you choose 700? No, I just choose present value and calculate future value of that present value.  
That I can go backwards or forward, and I will get the same result.  
Did it?  
But the point is not, it means only do this. The point is new work with this, getting used to all these things. Make sense? So no matter what, like, let's say in the first year instead, we got 540 in the last year, we just like, let's say we reverse the order, but the future value still be the same.  
Fifty interest rate, because here I am applying two different rates.  
One is this 6% rate. That is the rate that I will get from my investing. And then there is a second rate. That is the rate at which I am reinvesting this point.  
Both are 6%. We will play a lot with this. There will be a lot of classes when we will talk about this. Yes? So the future value of like...  
546 out of 25. Yeah.  
Future values, this one. Ohh, so you pay like 700.  
You will receive at the end, you will receive if you sum all these cash flows and you take all cash flows to the year five, you will get this. Here you got the numbers and it's simple. So you pay 542 cash for the. Today you buy 542 and if you can rate that of 6% in the end.  
At the end, you will have 725.  
But try to see, try to calculate present value and future value. Makes sense.  
Any questions?  
Now, now, William.  
You only start understanding things.  
What is our perpetuity?  
A call something.  
What is the present value for Petragnani?  
I want you to know now, now, how is your head?  
A little bit more tired than at the beginning.  
Now, your head is a little bit more tired.  
Now you are not as stressed as you were in the beginning.  
What is a perpetuity? I have already talked about the perpetuity. Yes.  
And what is present value of a perpetuity C / R?  
Do you go back one slide? Yeah.  
Really simple.  
one fixed payment, another fixed payment, another fixed payment. How do you calculate present value of all these infinity payments? So that's assuming that you invest them, right? Because it's using like the...  
Ohh, it's using the is that link the discount rate? The one plus R is calculating present value of all future payments.  
That is C over up. Now you have a problem.  
Is that you understand it?  
And the slides in these services are a little more. If you try to understand it through the slides, it will be a little bit more confusing.  
C over, present value of the perpetuity is C over. Make sense?  
The debt from 1720, this is one example. How much is here? You read this, you will get that. I don't want to read it. How much is a preferred stock worth if it pays 10 dividend and if the discount rate is 8%?  
If a stock will pay a constant dividend of 10 EUR and the discount rate is 8%, yes?  
Forever, yes.  
And the discount rate.  
Yes.  
Eight percent, yes. What is present value?  
Ten over 8% is 125.  
Also, I can calculate this by doing...  
Eight percent.  
Rice today, let me write down their affairs, and...  
Fixing.  
One, two.  
Ohh, no.  
No, sorry.  
You know, you swear to me.  
What I'm doing is calculating present value as the sum of future cash flows.  
Why 82 is not 125?  
Because I am just calculating this for the first 14 years, let me move there.  
Let me extend this.  
One 100 twenty-two, we are getting closer. Yes, let me take.  
This to the end of times.  
Olivia is what?  
and I will get something closer. Make sense?  
Anyone else? This is on the Facebook page perpetuity. No, I mean.  
Ohh.  
We will talk about this at the end; most of the world is under.  
30 years.  
Home man sees infinity with 50 years, you will get 95% of the bet.  
More than 99, sure. Makes sense. So you'll never fully get to 125? No. This is the definition of continuing.  
It's a yeah, but at the end, it's a perpetuity. Perpetuity would be at the end, 100 and twenty-five, but if let me take.  
First.  
Fifteen years, yes?  
15, 50 years.  
One 100 twenty-two, yes, if you take this year's.  
You have in first, in first 50 years, you have almost 98% of value.  
How much worth last?  
Infinity years before, after.  
Two percent.  
Makes sense.  
Yes.  
Are you ready, William?  
My favorite is constant growth.  
If the perpetuity is going to grow at a constant rate, what does this mean?  
It means that third year, second, third, fourth.  
How will you calculate present value by doing?  
First, Castro, year one over R9G. Feel better, Olivia? Yeah, thank you.  
Olivia, we have seen the perpetuity, and we have moved to William Paints that is a constant payment that will grow at a constant rate. Yes?  
This is not going to be really, really, really important, but if you know that you calculate, you can calculate this by doing CS constant value over R minus Z, you will be done.  
Here, considering a perpetuity that pays 1000 forever. However, only starting 10 years from now, interest rates are 5%. What is the present value? I like this example. Yes?  
And I want you to think about it before me trying to solve it.  
Starting 10 years from now.  
How will you do it straight?  
PB equals CF over R.  
Yes.  
Only after 10 minutes.  
It will start.  
Ten years from now.  
This is price today, no? I don't know price today.  
The will start.  
This is 0, this is price today, I don't know. The perpetuity will start in year 10.  
See, I'm from here in Bull, no, at a tough number. Make sense?  
First thing, we need to calculate this price in year 9.  
What is price in Juan?  
But I, your name is...  
C over R, make sense?  
is growing at a constant rate. But I want you to understand this. Do you see that this is this?  
Well, do you understand that price in year 9?  
Yes.  
This will, yeah, it's like piece 9 is like the new PC.  
It's serious today. Well, it's like P9 is like the new one. It's like it's like you're starting from P9. I have moved into time to P9. How much will this work in nine years? In nine years, it will work C over R minus G. Make sense?  
But why is it? It's not growing. It's not growing. Sorry. If it is not growing, it's not growing. I prefer this. I prefer not to grow. I'm much more happy if it don't grow.  
Sorry, thanks.  
Are you following me?  
I'm much more happy because I can write a thread. I can write CC photographs, yeah.  
And what is the price today?  
How will you cut me the price today?  
No one.  
No.  
Over one plus.  
15.  
Yes.  
So, price today?  
Ohh.  
is going to be the perfect pity.  
I don't understand why for the price today you do over 1 + R to the 9th, but then for the price of nine years you just do C over R. No, because year 9, what I'm calculating is the present value for the value.  
You have just one single payment.  
Of all these payments.  
But I have got here.  
Take you all these payments and put it inside here.  
And I am considering this perpetuity as one single payment in year life. Once I got this number I calculate present value.  
Make sense?  
Yes, I thought present value was CRR as well.  
Really, it could be, like, before you wrote P.P. will see over, I'm so happy.  
Present values, present value formula.  
Is of imagine one payment, one unique payment in year 5.  
C5 over 1 + r raised to the 5th.  
Yes, if instead of having one payment in year 5.  
Infinity payments, not just what? Infinity.  
Present value of all these payments is going to be C over R.  
You.  
So, the one on the left is just for one point, and the one on the right is for everybody in perpetuity. I mean, this is the price of all future cash flows today. Present value of all future cash flows today.  
In order to calculate this today, I have moved into year 9.  
Makes sense? Yeah.  
So, here.  
Okay.  
Yeah.  
It's something more. I want you to be concentrated.  
If you don't have fully understand this, next step is a little bit more complicated.  
But if you have understood this, you are, I'm going to clean this.  
I mean.  
Come here.  
Let me first solve these numbers.  
Consider A perpetuity that pay 1000 forever starting 10 years from now. Interest rates are 5%. Interest rates are 5%. Yes, perpetuity. In year 9, the price is going to be a perpetuity of 1000.  
One 1000 / 5%.  
Yeah, and the price today.  
Present value.  
It's gonna be benign over.  
One plus.  
Five percent.  
Rise to the night, yeah.  
And this is gonna be.  
Make sentences.  
Yeah, go ahead.  
Ana with.  
What is Ana? What is?  
Play.  
You are gonna have...  
A constant set of payments that will finish at a given date.  
All payments till year of the tax. What is an annuity? A constant set of payments.  
I don't want you to memorize anything.  
Open Wii.  
Calculate.  
Class one is gonna be zero.  
T plus two is 0, yes? How can we calculate the price of...  
Anna Nick.  
This is one question that involves Sanz, people ask for interviews. This is something that if you understand this, you have understood most of things.  
What is happening?  
Look, sorry, what is Ana?  
Have you seen that this is a perpetuity?  
What should I write here in order to make this?  
Negative city.  
And I'm ready.  
Is the difference between 2?  
Well, starting now.  
And a second one, defer and starting the year after. Negative. Make sense?  
How when you can play?  
Present value.  
Of her and me, so, so, so simple.  
C over R.  
This is happened with me.  
Miguel.  
One perpetuity that will be starting t + 1, so present value of that perpetuity and T is.  
One plus R raised to t * c / r makes sense.  
Say that again, yes.  
But I have help late.  
Resident value of her and me.  
and present value, you should have clear previous results. That is whole public present value.  
I have calculated present value.  
This entity as the difference between 2 perpetuities. One perpetuity that will start to take forever.  
and a second perpetuity, the difference with a second perpetuity with same cash flow, but that will be starting t + 1.  
So, present value of the two thing is C over R, C over R is this perpetuity.  
And what is present value of the cycle one?  
Sexy over that, over one plus hour, I see.  
Makes sense. Tell me. So the T is the time of the. Yes. So that's the like.  
Number, like, that's a time for them, so it's like a three-year. P is the time at which last payment will happen. Yes. OK.  
You will have one payment in year one, another payment in year two, another payment in year three, 4-5 in T. Make sense? Then Y multiplied by C over R.  
See over there, because...  
This is the value of the perpetuity. This is the value of the perpetuity value here.  
Three.  
Of this particular of the second particular.  
Yeah, let me.  
Let me.  
Let me.  
Ohh, sorry for the noise.  
Okay.  
My English is not the best English in the world, no?  
There are points of, I'm showing you this video because of two reasons, because I want you to, I want you to see that my English could be worse.  
And also...  
In this video, we are going to work the present value. Anonymity represents a series of equal payments paid to someone each year in less 3 minutes. Yes, and this is worse.  
And today, because that English was my English five years ago.  
I don't know, probably now it's worse, or whatever. Coming back.  
Coming back.  
What I'm talking about this formula?  
This formula.  
Don't get crazy with that formula. What is what is this formula?  
Present value is equal to C over R. This is 1 perpetuity, but I don't need the whole perpetuity. I just need the whole perpetuity.  
All payments.  
That will start.  
From the plus one.  
This formula is the same as this, is the same formula. Yes, I have written the same formula in two, three different ways. This is the same.  
As this, and it's the same than this.  
I don't want you to become crazy with progress; I want you to understand, please.  
First trip.  
First strip.  
If you understand this example.  
Understanding this.  
Is not.  
And, once you understand both...  
You can, I have office hours, I can repeat the next day, but there is a point that has to do with you. Make sense?  
I don't do one example with a growing rate. They're they're worth, but you understand what I'm talking about. Morales, no? Any questions? That is here. These are, this is what I have just said.  
An annuity as a difference of two, and then you've got the formula. Yes, the demonstration that I have already shown you, and an annuity example. You can go through this also.  
There is a written, please read it. APR.  
Effective annual rate is not the same. IPR, because you can pay in different payments. There is a difference between 1% and 12% as 12 times 1% monthly.  
This is the APR, but you will compound 1% price to the 12th. That is the effective handle rate. Are you following me? What I mean is that read these slides, APR, the relationship between APR and effective handle rate, and forget about continuous compounding.  
You can forget about it. And please focus on trying to understand the annuity code. Focus on trying to understand how to work with the value one and try to explore policy.  
And, in two days' time or three, I will.  
Tell you, I will explain you the Marín.  
Everything's okay. I love to say this one Wednesday.  
Enjoy the week.  
No, do you have a passage center tomorrow? Yes.  
You know, you know, don't don't smash, don't show us so satisfied, we are so happy. So now, please.  
I have classes tomorrow, but enjoy the weekend class in another university here now, but I have told you there is one, there is one new course that is going to be shown.  
that is going to happen next semester. That is a information system, a little bit of AI. And I have to tell you that I want to teach that. Let's see.  
We will talk about that.  
I, I don't need, do you mind if I talk about that?  
Do you like me to talk about the AI? Then we will talk about the AI. Do you understand what I mean? I don't want to go out of the syllabus too much, but I don't want to leave things that are important that I think are important for you without thoughts.  
Do you have other two things today?  
Ohh.  
Yeah.  
Mute site.  
Mixed.  
Thank you. I was going to say.  
That one is what you are for, and Sadiq is my friend, and then Sadiq, my friend, at the end, means my friend, Sadiq, and Sadiq is my friend in my friend.  
In with female. I was going to say my girlfriend, but no, or whatever. I don't know how to say that. Do you speak? Yeah. No more. I'm Spanish.  
That is, please, please try to practice Spanish. I think that Spanish people, if you try to work in Spanish, they are not good for whatever, because Alfonso has class now, you have class with Alfonso now.  
Google.  
I'm going to share with you the Excel file is the worst Excel file.  
Probably, let me look for OK, this is this loose.  
You know that Excel, this has to do with people working with finance and modeling. Excel, open, you send an Excel file to someone, the Excel file will open just on the place where you have said it.  
Let me call this session.  
Oh.  
So, if you open this Excel file, it will open here.  
This is not that. This is what session three.  
Play song, play song.  
And Fred, try to understand properly the perpetuity formula. So C over R is the current the present value of all of the. Of all of them. So then the. C over R is the maximum. So then if you're going to calculate the.  
Present value of any of any perpetuity, C / r / 1 r. C / R is all future payments from today. If you the fair.  
That is when you should calculate present value of that the third payments. OK. Once you make something over 1 + over 1 + r, raise to whatever, you are doing the number lower.  
So at the end, C over R is the higher is everything. And in C over R, there are includes 1 R right to the first, 1 / 1 R right to the second, and all these things. Make sense? Yeah.  
Call Luis.