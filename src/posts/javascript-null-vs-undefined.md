---
id: "javascript-null-vs-undefined"
title: "JavaScript null vs undefined"
description: "In the world of JavaScript there been always the confusions when to use null vs undefined"
date: "May 26 2023"
tags: ["JavaScript"]
seoImage: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433"
---

# JavaScript undefined vs null

In the world of JavaScript, there been always the confusions of using **undefined** vs **null**. when i started programming in JavaScript, i've always been keep asking myself WTH is different between them ? why can we just use **null** instead of **undefined** or using **undefined** instead of **null**. Understand the meaning and using them the right way will be help you write the reliable code.

### Definition

Before we get started let deep dive to the meaning of each of thems in JavaScript context:

1. **undefined** is represent the absence of the _value_, or _properties_ (class, object)
    - **[value]**: when you declare the variables in JavaScript it will automatically assign value **undefined** to variables by default.
      ```js
      var foo;
      
      console.log(foo) // output: undefined
      
      ```
    - **[properties]**: when you try to access the properties of object / class that is not exists JavaScript will return undefined.
      ```js
      var student = { name: "sochetra" }

      console.log(student.id) // output: undefined

      ```
    - **[variables]**: this part it just my personal preference that i will never create the variables and assign it value to undefined. then you will ask my **_why_** ?. Because if we break down the word **undefined** it mean **not defined** or **not yet created/exists**. then if we create the variable and assign its value to **undefined** it will make other developer confuse that the _variable_ or that _properties_ of object doesn't declare or exists yet. 
      
      if this don't convince you yet, let me ask you an question: if you access the properties of object and get the **undefined** value, what idea in your mind that come first:
        - is that **properties** is **exists with value of undefined** ?  or that properties **not exists**
     
2. **null** is represent the **intentional** of  absence value. it indicate that the value / variables / properties (object, class) has no value.
    ```js
    var foo = null
    
    var student = { name: "sochetra", dob: null }
    ```
    if you take a look at that above code you will see that if you access `student.dob` you will get result `null`. this give you enough information that the object has **properties** name **dob** but it just doesn't has value yet. this should be apply to variable also
    
    
### Conclusion
In JavaScript **undefined**, **null** is serve distinct purpose and should be used appropriately based on their meanings. **undefined** is use for absence of the value, while **null** is indicate **intentional** absence of value. Using it in the correct context will make your code is more readable to other developer and make sense to them why you used undefined or null.

 ### Reference:
 
 - [my-vimrc](https://github.com/Novsochetra/nvim)
 ***
🎉 Thanks you for reading. 🎉 
 
 love you all from Phnom Penh, Cambodia

 **Sochetra NOV**

