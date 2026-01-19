# Foundations of Finance (FoF) – Session 3  
**NYU | January 26, 2026**  
**Instructor:** Luis Garvía Vega  
**Duration:** 1h 21min  

---

## 1. Purpose of the Session

Session 3 marked a **clear transition** from conceptual foundations to **operational finance**.

The objectives were:

1. **Introduce Excel as a working tool for finance**
2. **Formalize the Time Value of Money**
3. **Develop compounding, discounting, and rates**
4. **Introduce perpetuities, annuities, and bond pricing**
5. **Reinforce the interest rate–bond price relationship**

This session is the **mathematical backbone** of the course.

---

## 2. Excel as a Financial Tool (Practical Introduction)

Excel was introduced as the **main computational environment** for the course.

### 2.1 What You Need to Know for This Course
- You **do not need Excel for the midterm or final**
- Excel will be used to:
  - Understand mechanics
  - Run scenarios
  - Visualize time value problems

The focus is **logic**, not formatting.

---

### 2.2 Essential Excel Concepts Covered

#### a) Cell References
- Relative references: `A1`
- Absolute references: `$A$1`
- Mixed references: `$A1` or `A$1`
- Shortcut: **F4** toggles reference locking

#### b) Copy & Paste Logic
- Excel adjusts formulas automatically
- Understanding references prevents mistakes

#### c) Numbers vs Text
- Numbers can be used in calculations
- Text cannot
- Concatenation (`&`) turns numbers into text

#### d) Dates in Excel
- Dates are stored as **numbers**
- Time is stored as **fractions of a day**
- Example:
  - `0.5` = 12 hours
  - `1/24` = 1 hour

> You do not need to master formats.  
> You need to understand **what Excel is doing**.

---

## 3. Time Value of Money (Formal Development)

### 3.1 Future Value

If you invest **€1,000 at 5%**:

- After 1 year:  
  `FV = 1,000 × (1 + 0.05) = 1,050`

- After 2 years:  
  `FV = 1,000 × (1 + 0.05)^2 = 1,102.50`

Key idea:
> Interest earns interest → **compounding**

---

### 3.2 Present Value

To receive **€1,000 in the future**, how much do you need today?

- 1 year at 5%:  
  `PV = 1,000 / (1 + 0.05) = 952.38`

- 2 years at 5%:  
  `PV = 1,000 / (1 + 0.05)^2 = 907.03`

---

### 3.3 Compounding Matters

Compounding explains why:
- Small, consistent effort beats last-minute effort
- Long horizons dominate outcomes
- Exponential growth is **hard to intuit**

To correctly visualize exponential growth:
- **Logarithmic scales** are often needed

---

## 4. Solving for the Rate (Returns)

### 4.1 Holding Period Return (HPR)

If:
- PV = 100
- FV = 110
- T = 1

Then:
`HPR = (110 / 100) − 1 = 10%`

---

### 4.2 Solving for the Rate Over Multiple Periods

If an investment **doubles in 5 years**:

`(1 + r)^5 = 2`

Solving:
`r = 2^(1/5) − 1 ≈ 14.87%`

---

### 4.3 Solving for Time (Logarithms)

At **5%**, how long to double your money?

`(1.05)^T = 2`

Taking logs:
`T = ln(2) / ln(1.05) ≈ 14.2 years`

> Logs will be used **sparingly**  
> Understanding > memorizing formulas

---

## 5. Perpetuities

### 5.1 What Is a Perpetuity?
A perpetuity is:
> A constant payment **forever**

Example:
- €50 per year forever
- Discount rate = 5%

Present Value:
`PV = C / r = 50 / 0.05 = 1,000`

Key intuition:
> Most of the value comes from the **first decades**, not infinity.

---

## 6. Annuities

### 6.1 What Is an Annuity?
- Fixed payments
- Finite number of periods

Example:
- €C for T years

Present Value:
`PV = (C / r) × [1 − (1 + r)^(-T)]`

### 6.2 Conceptual Understanding
An annuity can be understood as:
- Buying a perpetuity today
- Selling a perpetuity that starts later

No memorization required—**logic matters more**.

---

## 7. Bonds (Formal Pricing)

### 7.1 What Is a Bond?
A bond is an **IOU**:
- Face value
- Coupon payments
- Maturity

---

### 7.2 Coupon Bonds

Price =  
Present value of:
- Coupons
- Face value

Example:
- Face value = 100
- Coupon = 5%
- Maturity = 2 years
- Discount rate = 6%

Price ≈ **98.1**

---

### 7.3 Zero-Coupon Bonds

- No coupons
- Single payment at maturity

Example:
- Face value = 100
- Maturity = 10 years
- Yield = 5%

Price:
`100 / (1.05)^10 ≈ 61`

---

### 7.4 Creating Zero-Coupon Bonds
- Treasury bills (short-term)
- **Stripping** coupon bonds

---

## 8. Interest Rates and Bond Prices

**Core rule (will be repeated many times):**

- Interest rates ↑ → Bond prices ↓  
- Interest rates ↓ → Bond prices ↑  

This relationship is **non-negotiable** in finance.


---

## 9. Big Picture Takeaway

Across bonds, annuities, perpetuities, and stocks:

> **Everything reduces to present value of future cash flows**

There is effectively:
- One core formula
- Applied in different structures

---

## 10. Methodological Warning

- Do not “formula hunt”
- Do not memorize blindly
- Always ask:
  - What is given?
  - What is unknown?
  - What is time?
  - What is the rate?

Finance rewards **understanding**, not speed.

---

## 11. What to Do Before Next Class

- Review today’s examples
- Replicate calculations in Excel
- Make sure:
  - You understand compounding
  - You can move between PV, FV, r, and T

The “temperature of the water” is rising.

---

## 12. Next Session

- Continue Time Value of Money
- More bond pricing
- Yield vs coupon rate
- Begin systematic problem solving

---


# Transcription
26 de enero de 2026, 5:05p.m.

1 h 21 min 6 s

**Luis Garvía Vega**   0:04  
No.  
Twenty-five.  
Play for Krahian Tun Stova, Kindi.  
Where is? OK, I don't know. Probably he won't. I I don't know.  
Whatever. If he arrived, he's not here, so let me go quick.  
Oh.  
List Mary.  
Sophia and Jessica. Perfect. OK.  
All.  
All classes will start the same way. I will give a seat, a program seat, then then we will start with Excel. Also also let me share with you. Let me.  
NYU session three. This is for me.  
Hey, and this is for you.  
All of you know how to use Excel? No. OK, I mean nothing.  
Or other, OK, because.  
First contact, first contact with Excel. It's like being in a different world.  
Second contact is once you get used to Excel is not as bad. New York NYU is are you?  
Great. And then also I have download this set things before starting with today's class.  
Would be well, we fix it, I mean for the.  
For the midterm, be gone.  
For the midterm or for the final, you don't need to use Excel.  
I'm.  
So you don't. There will be several exercises where I will ask you to to use excel. Yep, ideas. Let me move here because I don't want to break my my knee right here.  
What if maybe I'm a little?  
Let me take a quick, quick introduction course to accept and now we will, yes.  
Here control you can make zoom and Excel has no limits regarding cells.  
I'm gonna. If you don't know how to do this, I will recommend you to do it. Now that you are, you know, 10 years old, 8 years old and you want to learn duplication, duplication.  
Yes, 1-2 you can drive.  
Then zoom zoom out and pressing control in order to make control and in order to make zoom out. Then normally with Excel I strongly recommend you.  
Try to do everything we showed using the mouse.  
In this case, because there is nothing here, I'm gonna use mouse, but I will stop using mouse and I will tell you and.  
For my course you can use mouse, the mouse and there won't be any problem. But when working there are times that you need to work with big amounts of data and trying to manage with the mouse with that eyes.  
It will be the.  
In this case, short cuts at or free.  
It depends on what you are working with. But think that if you do something perfectly or you repeat something a lot, or if you think, oh, I'm going to go, I want to go to the end of Excel, yes.  
One spoiler. If I continue this way, probably we can beat the whole class looking the end. But anyone knows how can I get the end?  
Oh.  
Like this?  
No, I mean, I could.  
You arrows on one hand you. Yes, please see.  
You start marking server. Yes, this is it. And if you just press control, you jump. Control. You jump. You get there. You get there.  
With control, it's easy to get to the end. Then here with control I go, you see.  
And this works great for large amount of data.  
I want to multiply 3 * 3.  
Nine. No. Now what I'm going to do, I'm going to copy and paste.  
This is.  
You know what I'm looking for, no? I'm looking for. I want in this cell. I want to have 5 * 5 for example, or in this 154 * 4, yeah.  
What is the problem? I don't know. Let me mark here.  
And it shows me G3 times G6. Yep, then if I move here.  
What is the point that if I grab, takes these cells, if you don't write anything, consider that what you are looking for. In this case it's two apps from me reference and two on the left from me.  
How can you change this?  
Yeah, with the dollar sign here you can say before this one or before I'm going to do, I'm going to use shortcuts, shortcuts, yes, I'm going to say equal.  
D7 and in order to put the dollar sign, I'm going to press F4.  
And for function and for yes.  
You see that one?  
Thanks this one.  
F4 Yes.  
I'm going to get the same result 9 * 9. But look now what is going to happen?  
And copy pasting, yes.  
I'm going to pay attention.  
What has happened?  
That I have blocked. There are two, there are $4.00 signs in total. For the first cell I have blocked both the column and the row.  
And send them yes. How can I do this properly?  
Here, I would like to blow.  
They uh.  
Yeah, the X axis that column the row. Yes. How can I do it? The row, the row is #2 what I'm what I'm going to do if function if.  
Oh.  
You see how this is start moving.  
And I want to block A2. Yes, thanks in this case again.  
In this case I want to route to fix the call and with this control CI can come here.  
I can go here based.  
Based.  
And again, I can clear paste it.  
Paste it and.  
Yep.  
Control. You can jump with control. Imagine that this is empty. Yes, in case this is empty, you can jump here. Yep.  
For my for my class, knowing this is part, you will not need to know to work with formats. We will work with functions, but today we will not talk anymore about functions.  
I just want to say one more thing regarding for yes.  
1.5 Sorry, in Spanish. In Spain we use commas.  
1.5 yes 1.5 is 1 1/2.  
Here control 1.51.5 if I add 1.5 + 1.5 I will get.  
38 cents. Then second idea. Here I've got A and B.  
If I add A + BI will get a mistake.  
An error.  
Yep.  
Why? Because these are this is number format and this is text format. Yes, there are just two kind of content, numbers and letters.  
But a number could be considered a letter. Why a letter? Never a text will never be considered a number. Let me show you one example what I'm talking about. I'm going to concatenate.  
Hey.  
Yes.  
Please will you hear me? Hey.  
And I'm going to do the same here with 1.5 and 1.5. What I will get 1.51.5. This is not a number anymore. This is a text.  
Are you following me? And in order to finish with this, you don't need to know this for my course, but we are talking next. I want you to see numbers and texts and also I'm going to change.  
This format 1.5.  
These are numbers.  
Let me use.  
Hey.  
Yep.  
And tell me.  
Copy paste this format here.  
And today's.  
There is.  
Hey, I like. I'm going to tell you why this is 1st of January 19th up to at midnight at midday, but before that.  
Days 26, no.  
On the 1st of 2026 make sense. This is today.  
Oh, I've made something incorrect because this will be the date the time.  
In Spanish, probably.  
Yes, this is the correct format in the states. Are you following?  
What I'm going to do with this? I'm going to change this into.  
Number.  
46,000 for a year.  
Let me ask you one question in order you to understand this.  
How many days have passed since the 1st of January?  
How long ago was the first of January of 19?  
In base.  
46,040 you understand what I mean? What I mean is that and if you want to talk, if you want, I mean -365, yes.  
Which day is this one the 1st of January of 1899. So you.  
I don't know if he's I have not thought too much.  
So.  
They.  
OK, I didn't knew that there are no days before. You cannot go back in time. Sorry, I didn't. You don't need to go back in time in my class.  
And then second thing is 1.5 with one piece a day .5.  
At 12 hours.  
Yep, let me write this.  
In in in time 12 hours. How many hours are within a day? 34. So one hour is one over.  
24.  
Let me copy and paste format.  
This is one hour. Make sense.  
You don't need to know about formats for my course, you just need to know about maths and we will continue working with maths. Trying to do this exercise by yourself as quickly as you can or it would be worth.  
Let me call this introduction.  
And at the end of this class I will serve.  
They pass documents.  
It's your.  
Good.  
At the end of the class, I will serve with you visas. You can also find these are right things, but I will say it was a group because there are times that you need to go through or any sense. Any questions?  
A.  
I have talked about format. I have talked about sales, text and numbers.  
And next day we will talk a little bit about formulas.  
For example, financial formulas.  
We will see future value, future value we won't use it at net present value. Yes, IRR we will use it a lot.  
And net present value we will use, but I will leave this for next day. Again, you don't need to know Excel formats.  
We can add.  
Yes, let me start with today's class. What are we going to do today? We will start with time value of money. Next day we will finish with time value of money.  
No.  
There will be 5 lessons regarding 10 value money. So pay 10 value money.  
Next day I don't remember if there are four or five.  
Please call me.  
OK, time value of money. We will work with future value, present value and yield and then I will introduce multiple plan payments and unities and preparements.  
What is the value of 1000 invested for one year at an annual rate of 5%?  
How much I will get?  
Makes sense. Let me here.  
Here, take one I have President Mali.  
25.  
Great. I percent.  
And it's so value so so simple 1000 * 1 plus.  
Yep.  
Let's not move.  
This should move.  
He does not.  
Oh, Excel has.  
Yeah, I have moved OK 1050. This is simple interest rate and in case I have this investment made for two years.  
I have that future value is equal to present value times 1 plus the rate rise to P make sense and this is the formula that I have already written. I have written this formula all the days present value is equal to future value.  
2 / 1 R raised to D.  
Makes sense. So in this case.  
After one year I have 50, I keep this 50 in the bank and not only I will have 50 for 1000, I will have also.  
5% of 50 that will be 2.5 make sense.  
Let me come back.  
Pair #2 a week same numbers but.  
Time is 2 years, so time is 2 years.  
It's a value.  
Sonavi.  
26.  
Year 2000 * 1 + 5% price today makes sense.  
OK, 1100, so I have 50 + 50 + 2.5 make sense.  
What I have, what I have just done, it's a.  
1000 * 1.1 + 5% rise to the second.  
And future value is equal to present value times 1 + R over price. Yes, let me introduce one thing that we will see later, but I want you to understand this because it's so so.  
So see.  
Imagine that I have 1000, yes.  
I'm gonna get a 5%.  
After one year, I'm going to take the interest rate. Yes, I'm going to take it and I will extend. So at the 5% rate after one year.  
I'm going to still have 1000 + 50, yes, and this 50 will be cash flow that will go directly to my pocket.  
And I will repeat same thing again and again and again. Are you following me?  
So that's now saying.  
1000 and I will get 50.  
It.  
I will get 50 and I will get 50. Make sense.  
Sense.  
So what do I have here?  
What I have here is I have put in the bank 1000.  
And each year I am receiving a cash flow of 50 forever.  
How we are, how are we going to call this? We're going to call it El Petri.  
What is happened?  
A constant payment forever. How are we going to imagine that you have 50505050 forever?  
What will be present value of 50, 50, 50, whatever at a 5% rate?  
How are you? How are we gonna calculate present value of the perfectly PC doing?  
See over.  
How much is she? She is 1000 * 5% no.  
So present value is C / R So with this example present value is going to be 50 over.  
5% and this would be make sense.  
Yes.  
We will see this later. This is a perpetuity, but I want you to understand now what is a perpetuity, how to get it because at the end.  
We will work with today with just two formulas, the PPT formula present value for the PPT and present value. And with these two formulas you can get everything. Yep.  
OK, now oh, I like this story. In 6024, Antaran Island was bought for $24.  
At a 5% rate, how much it will be today?  
$24.00 at the 5% rate. How much do you think it will? It will work. Don't look.  
No, I mean that one before.  
In thousand.  
100,000.  
Inclusion equation tells me that's something that I can miss. Let me show you. Let me do this number. Let me click this number and value.  
The value I want to come back here.  
I said $24.00 and this was in year 6024. Now they we are in year 2026. So how many years?  
This -402 years, yeah.  
If anything, first about simple interest rate, yes, simple interest rate would be I have $24.00 * 5% yes.  
So I will get 1.2.  
1.2 times or 102 + 24 yeah.  
This is simple interest rate.  
Right. Yep, simple even is great.  
Now importing the reference. Now let me calculate same but component.  
27.  
Times.  
One plus.  
5%.  
And instead of.  
Times 400 true rise to 400 true.  
Five. Oh, sorry, I'm looking for the point dot on the scripts.  
No, these ones, sorry.  
Why this happens? Because the power of compounding. The beginning you have the principle and after 123 years what you get from interest.  
Grow a time is financial way. Why? Because you not only work over your principle, you work also over your work. Make sense?  
How many weeks are we going to be together?  
The weeks.  
Anyways, yeah.  
Demanding that you work the day before the meet there, you don't work anymore and you work the day before.  
You can work a lot. It's a work 5%, yeah.  
Everyone starts with 100, yes, if you work.  
For one day. For one day.  
Do it.  
A5 for one day and A5 for a second day. Yes, but what if you work a little bit all the days?  
You work a little bit all the days. Let me say yes, 1%.  
You will get 100.  
Thanks.  
One plus for one percentage will be small, yes, for 12.  
And you will get 1.12. The more you compound, the more days you work a little bit. Now in that instead of.  
Maybe a 7%.  
7% quickly or 1%.  
Thank you. Yes, thanks. The other sound I want to make what I mean, no?  
It's compared 7 you more than double. But I'm saying that the more you work, the little you work, the more you work, the more your work will compound over the previous work. You work today a little bit and you came this Wednesday.  
With all this little work, this will compound over all things you have previously done.  
Make sense?  
It's much better work little by little by little than before the week before the meeting, trying to understand everything in a row.  
OK, this is just to say that compounding matters. What is the problem with this graph? Look this graph. This graph is for first 100 years. This graph is for 1st 400 years. What is the problem that if you look this graph, you look this graph.  
They look the same.  
For a magnitude that works in an exponential way, we cannot try to look.  
I I look in this graph. How can you properly look this graph? What is the tool you should use in order to properly look exponential growth?  
Look at it. It should pass it moving into local because local help us understand it.  
Makes sense.  
We want to work to match with government. Yes, I will be done next day. OK, to receive 1000 in one year, how much should I invest today at the rate of 5%?  
Person.  
So let me come back here.  
I'm going to calculate present back. We will see.  
28.  
In a year at the 5% rate, how can I calculate present value by doing 1 + 5%?  
And 150 makes sense.  
These formulas will look very familiar, yes, and this formula we will use it present value for excellence.  
OK, to receive 1000 in two years.  
One year I will get this, so in two years I will get.  
In order to get these 953 in one year in order to get 1000 in two years, 1 + 5.  
Percent.  
Yeah.  
That's 5%.  
Or also I can say 1000 / 1 plus a percent price to the second. Make sense.  
OK, 907.  
Uh, now.  
If I invest 100 in order to get 110.  
What is the rate? Let me.  
1 + R rise to T is equal to future value over present value. All of you are with me.  
So that is going to be great. It's going to be future value over present value 1 / 3 -, 1, yes.  
In case one, in case T is 1 future value of represent value 91.  
I need.  
well  
1000 and mass sorry 100100 and 10.  
And.  
HPR is 110 / 100 -, 1. HPR is holding period return. We are not going to talk about HPR. We talk about holding period return.  
And I want the music to that's only for you. HPIs on the field return 0.1, all of you know that is at 10%.  
OK, if in case there are multiple periods, if an investment offers to double your money in five years, what rate are you earning?  
Try to do it by yourself and I'm going to do it in one minute.  
If I'm investment offers to global, I have.  
1-2 I will have two in five.  
Yes. So he's just taking and then ask about the rate.  
One plus R rise to five is equal to.  
Future value is equal to two, so I take this one that is to say R.  
Is.  
29.  
45 -, 1.  
1 / 5 minus.  
I ready to be.  
Almost 50%, 14.87. Yep.  
Let me continue. At a rate of 5%, how long will it take to double your money? At a rate of 5%, how long will it take to double your money?  
Can we come here?  
And I don't know it. Let me go back here.  
One point, all five.  
Rise to T is equal to two. Yes, I need to solve.  
Is a question. How can I do it?  
We lower it. I can take local items on one side on the other.  
This is the only time in this course that you will not know the.  
He always will be.  
We won't because we know when payments are gonna happen. But yes, I'm gonna take look at things.  
05 / P is equal to of two, yes.  
So these three from here.  
And T is equal to logarithm of two over logarithm of 1.05, yes.  
Tell me.  
Do it with Excel.  
Hey.  
Nobody or oh, there are two different types of. I mean there are tons of different types of logins, base 10 or base T 2.720.  
Which one should I use?  
You understand that question?  
Let let me just use this one.  
Longer in base 10.  
Over.  
1.05 yes.  
It does not matter as far as far I as I use same base.  
Up and down everything will fit. If I use base 10 I will get 14.2 and if I use at the end, logarithms are like multiplication but in another language.  
So you multiply up and down times 3 * 4 * 5 as far as you multiply up and down.  
You know that and you use of two.  
Over, over. Today is not the day, but one of the things I will repeat. Not only you should apply formulas, you should understand what you are doing by applying for more probably.  
I mean, I'm talking about the statistics. There will be in this class at least 20% of people that are adults.  
At least two formulas. At least two, give me the formula, I will eat it, and without thinking, I will spit it out.  
I will try my best to fight against this addiction. I want you to understand what we're doing. Oh, Luis, what is the formula I should apply, right?  
I will answer, but I will try with you to understand.  
Today's class review today's class before next class. It's important in order to make you yours Excel formulas, the knowledge, because next day you will understand next class as easy as this one.  
But the temperature of the water will increase. Make sense.  
OK. Uh, low variance.  
At the end, giving three of these formulas, you can always find a fourth giving three of sorry giving and normally we will forget about the time.  
And nobody.  
Future payments, as we will be talking about fixed income, future payments will be fixed.  
So the name of the game that we will be playing during this course is.  
You have future value, I can calculate present value or if I have present value I can calculate future value. Sorry, no, no, sorry.  
No, what I have said, the name of the game future value will be that will be given.  
The name of the game is do you have person value? You have person value. I will calculate the return. You have the return. I can calculate. Make sense so at the end.  
The name of the game will be degree formula two and the third, two and third and this formula, the one that I have drawn the blackboard future value over present value.  
Rice to 1 / t - 1. This formula we will see next day as the HPR formula or the period return form.  
Makes sense.  
Any questions? OK.  
Now what is that zero bonbon? Anyone knows what is a ball? A ball?  
What is that one?  
Yeah, I want.  
I mean.  
I've lost one whatever. This is a two years bond with yearly coupons of 5%. This a bond with two coupons.  
Oh, well, we're going to calculate the price of this.  
I agree present value all future customs. What is the CEO como?  
This is a zero common, a bond without couples. Hope someone can make money buying this. This is a promise. All of you know and I owe you no.  
No.  
I owe you from America. I owe you. I owe you. You too. The music group. Have you heard you too?  
You too. Let me see group.  
Without, without you on the songs.  
Because I'm not here.  
I will bet that you have here.  
We so.  
Who saw with you?  
You too. Sorry.  
OK, OK. Now, I'm sorry for this. I I know how did I finish there? Let me silence here. Your side. OK.  
Hey.  
U2 is the name of the group and U2 means.  
Thank you.  
OK, forget about you too. I owe you.  
I owe you. I owe you is. I know where.  
This is a bomb. A bomb is not an IOU. In Spanish we call it pagare. I will pay you in the future pagare. What is an IOU now? It's a paper where it's written someone will receive this money.  
How do you get money by buying a zero coupon bond? Because you buy with this code base value is 100. For example, you will receive in one year 100 and you will buy the promise of getting 100 for 990.  
44900 make sense.  
How can you calculate even the rate, the price with present value? Makes sense. How can you create in real life? How can you create zero bonds? There are two ways, short term public bonds. It deals are zero bonds.  
And also you can have a bone with coupons and name what is called stripping. Stripping is selling zero compounds as if they were selling the coupons of a normal bone as if.  
They were.  
Makes sense.  
We will talk a lot about fixing. What is a cereal coupon bond upon that page? Yeah, where do cereal coupon bonds came from? Treasury bills or stripping of coupon bonds. Good.  
OK, I have a zero coupon of 100 that will be paid at year 10 and the rate is 5%. The yield is 5%. What is the price?  
Let me open a new one here. I'm calling it.  
I'm great.  
Great, 5% and a year certain.  
Maturity.  
Maturity will happen in.  
Yeah. What is the price? So simple, 100 over.  
Divine is missing, but I need divine because this is so simple. All of you are with me.  
The price is 61. You pay 61 today and if you are buying this at a 5% rate, you will get in 10 years. Make sense? I have bought it. What can I do once I have?  
You know, I was missing you. I have bought one zero bond bond with 10 years of maturity. A zero bond is a bond without two bonds. Yeah, a a promise of receiving 100. Yes, at a 5% rate, maturity 10 years.  
What can I do immediately after or after one year? What can I do with this one? I can sell it. What can happen with rates? They can sell this.  
This is the price that I have calculate and what can happen? Oh, imagine first idea. Interest rates remain and change if interest rates remain and change.  
Interest rates remain unchanged. Next day we will continue working on with this action. Yes, as time.  
Get shorter price tends to back, make sense.  
As time gets shorter, the price will tend to part and the thing I want to be demand to hear is not in that today, for example interest rates drop from 5:00.  
For.  
Interest rates drop. What will happen with rise of a bond interest rate drop?  
Interest rates drop. What will happen with the price of the bond?  
I will ask this question in two ways. If there is race in four ways.  
If prices goes down is because interest rate has gone up. If interest rates goes up, price will fall. If interest rates falls, price will go up.  
You understand this? I will ask, just be a question.  
I will ask this question. I promise more than 40 times.  
50 times, right? Which class there will be classes that I will ask the three or 10 times.  
What is gonna happen this Wednesday?  
Who is going to talk? Joe Powell will talk this Wednesday. This Wednesday we will go to Polymarket. We will see and then later I will go to the radio and I will as if I were looking the Super Bowl.  
The speech in empower speech and what power will say sorry for talking.  
What Powell will say?  
No, no things. I mean, all right, only Margaret.  
You know polymarket?  
Anyone you know? All of you know Poly market? Poly market is a decentralized bet. Oh, and here is our bad decision.  
Yes.  
By this decision in January.  
No change. Almost 100.  
Of the day, let me do January, since you're not something change. Marks.  
No change, no change. And there should be bets regarding about who will be next year because our will be on May this.  
Is what? I mean, he's not fired because of May since going out and he will be there in the in the phone, in the phone, Sir, for I think year 2009.  
What power will talk about interest rates? If power will say I'm going to drop interest rate, what will happen with prices of bonds? It will go on. Make sense.  
OK. Lower interest rate, higher bond prices, OK.  
Now uh, let me.  
And this is I have already showed you Barriadotes. This is the worst page ever, yes.  
Worst web page header and here I have done this thinking about you guys.  
OK, let me here.  
Oh, you can put here in this.  
And this is a present value formula.  
You can change future value and present value which takes.  
Make sense then after pet week.  
105 two thousand make sense. Why is this presenting this way?  
Because the perpetuity will live forever. What is in soft green?  
The weight of future cash flows of present value of future cash flows. What I want you to see.  
I don't care if we need 200 years or 400, but really matter at the 5% rate is what will happen in.  
1st, 1st, 30 years, yes, as time pass.  
For me, it will be almost the same as a home with 30 years of maturity and having a prepayment in terms of present value in terms of price. Makes sense. We will continue working talking about this next days.  
An annuity, the annuity form. What is the annuity? All of you see the perpendicity?  
What is an annuity?  
Fixed payments, the perpetuity does not change. This is present value of future payments. Yes, what is up? What is done with the formula?  
Payments for payments, yes. How do you calculate present value of this by doing present value of first payment, second, third and 4th? Make sense?  
All of you are with me.  
This is.  
The formula for the annuity, but I don't want you to memorize any.  
How can you understand this? So see.  
Ananviti.  
An annuity. This is annuity, yes.  
I mean time for.  
Yes. How can I calculate present value of these four payments?  
Are you doing the difference?  
One that will start today.  
And another one that will start one year after. Oh, the annuity formula is buying at the today and selling after four years.  
Are you understanding what I'm saying?  
For example.  
I'm going to have four payments. First idea. I'm going to do this the long way. How I'm going to calculate the present value of the perpendity. The long way T / 1 R C / 1 R rise to the second plus C over.  
1 + R raised to the third plus C over 1 + R raised to the 4th. Make sense?  
For payments, present value for payments.  
And now I'm gonna do this.  
For four payments.  
I will do it not this way. I will do it just with a big form. Normally you can do it with Excel, but the idea what is the idea is.  
Present value is I'm going to buy one perpetuity at least C / R yes.  
And I'm gonna sell a second perpetuity.  
But this second person will start.  
Year 5, so present value year 4 is going to be.  
C over R This is present value in year four, but what should I calculate? Present value today of this perpetuity that will be paid in four years.  
Excels.  
The over here 1 + R rise to the 4th. Make sense.  
Let me write in a different way this C / R perpendicity.  
1 -, 1 + R raised putting yes.  
What is this formula? The formula of that meeting?  
T over R.  
1 -, 1 + R rice cookie makes sense.  
Here you have the same demonstration and also.  
I know it.  
You think that my English is bad? You should hear my English five years.  
In this video we are going to today the work the present value amenity formula came from and annuity represents assumies of equal payments.  
The year of the third year and the other one is the same that I have done. I'm going to you have this in bright spaces.  
I'm gonna.  
I was explaining this last week and I do it with Google Studio AI.  
No, I mean it's 50 minutes and.  
and I really like  
And this is order little bit more that.  
WPT.  
What I'm gonna show you.  
What I'm gonna show you.  
Just one second. What I'm going to show you a lot of people here and this I want to share with you.  
I cannot explain what is this. This has less than one week NYU finance spring. These are you know.  
I mean, because I'm running out of time. This is one person that has some cloud code, cloud code, and this person has said, oh, I'm going to do this.  
Has developed cloud code open stores and now for example.  
I I I start with that yesterday.  
Where is myself? Life is a disaster.  
I'm looking myself.  
Looking for myself?  
Yeah, I opened it yesterday in my computer. If you need your computer open.  
Here you can say.  
I am please. I I you should talk in Spanish.  
Whatever you can.  
Start giving instructions to it and it start working with all Wasser groups. It start talking with your computer. You can order him to work inside your your computer doing things. Why? Because it connect with the the bot connect.  
With WhatsApp, do WhatsApp web. Same thing that I'm doing here in this computer. This is doing in my home computer and the bot is open. Also it works with DPT and it looks if I just look something into the computer.  
I have just two hours ago I connected to my.  
The man tell me.  
Tell me information from my obsidiary, all regarding my NYU course.  
It's the first time I'm gonna obsidian vote piece the information that I've got in my computer and I have to give.  
Let me see what is going to happen.  
I'm nervous.  
But I'm going to come back here in one minute. Yes, those.  
If there are multiple payments, how I can calculate present value of each one of the payments by calculating present value of each one of the payments? Yes. And in case multiple payments, yes, what is present value of 1000 per?  
To year 5% coupon bond at a 6% rate, yes.  
Let me inform me, let me the 1002 year 50.  
Oh no. Face value of this one is 100. It's almost mine.  
I admit it. It's almost the one that I have shown. Let me right here.  
Hey.  
One to year 1250.  
1050, yes. And I am told if the rate is 6%, the rate is 6%. I am told to calculate present value 50 / 1 6%. I'm going to fix.  
This this 6% because I'm gonna cry, yes.  
Rise to the first and then.  
What is the price? What is the value? You're in English or some, not Spanish or 981. Any sense what I have done? I have just calculate the price at the 6% interest rate.  
Imagine that rate falls from 6 to 5%. What is going to happen with the price of the bond?  
The price is gonna go up. Anyone knows what is the new price? What is the price?  
It's going to be higher, but how much?  
Think that the bond is paying at 5% coupon rate.  
And the discount rate is 5%.  
When you press.  
It's a powerball like I am this coming at a 5% rate, something that is paying a coupon of 5%.  
If interest rate is 6%, price goes down. If interest rate is 4%, price goes over face value.  
Yes.  
For not for today, no.  
No, yes.  
Uh.  
I can see my. I can see all the.  
I can see all the transcriptions.  
So I can see all things we have talked. Sorry for this. I'm getting on fire.  
Oh, oh, sorry. I'm going out of time. Sorry, I'm looking for another resource. Next day we will talk about the second resource. Yes, this is called Bomb Master.  
With AI, I am becoming race.  
Now next day we will talk with this. Next day we will talk about this one, yes.  
Listen value is 981 and then what is our perpetuity?  
We have already seen. Suppose that the maintenance of your grave cost 100 every year forever. How much money should you leave your trustee 100 / 5%? That would be 2000.  
And calculating present value of the perfect. Make sense and the annuity. We have already talked about the annuity. I have already showed you the formula and if you make these numbers with the formula that I have given you, you will get.  
34,000 Yep at the end for bonds, present value, for prepare, present value and for stocks you will calculate price of a stock by doing present value of future payments.  
At the end there is just one formula, present value formula that there could be two thinking about the perpetual. At the end you have payments, you can calculate the annuity, present value of the annuity and then you can go backward or forward.  
Next day we will continue working. Please try for next Wednesday to go through these exercises and make yours. Yep.  
Sorry, I owe you one minute.  
And.  
Next day we will. Oh, sorry, one thing. What I want you to see is.  
The Google rate is 5%, yes.  
Five. Oh, I don't. 5%. It is within five. Yes. What if? What if the rate increases? What if the rate?  
This is the rate. Sorry, if the rate goes over, well with this code, if the rate is the same and with premium, sorry, it was in Spanish, but you can press this.  
I have started doing these kind of things and like Google Studio area and you have.  
That's great. Let me serve this also with you.  
S.  
This one.  
I.  
Today was lesson 3. So give me a summary of lesson 2 and also I'm going to share with you and why you I'm going to share this excel, the excel of the thing we have done today.  
And a pleasure. Welcome documents.  
Documents says there's three. This is incredible. I have started using this yesterday and then.  
I'm waiting for the summary. I'm going to receive the summary because you have see what I have to decide.  
Hi, what's up? You told me last Wednesday today I was going to be able to do this. I will have answered you back to our evening. It's not possible.  
We're trying to. We should also ask the.  
OK.  
I yeah. And they were you. Yeah. I don't. Yeah. I'm gonna try to see. There is a number. No, there is not. But we should. But we should invest them. So we can like see these things. OK. I will ask one. I will ask. It's very expensive. Yeah. Yeah. But like, but like if you can get a like, uh, when you set up on our library or something.  
I know, I know. I know. I know. I know. I know. Send me an e-mail asking for that.  
I don't think so, but we're doing this here in Madrid.  
I have one terminal in a in a close to another university. OK, OK, OK. But I think you can come with me and just like if you're ever doing something like related to it, for example later when we're talking about.  
Derivatives and all that stuff like it is. I I know. I mean, you don't need you don't pay for a number terminal, but I fully understand what you are thinking. I really hope.