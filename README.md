Method 1: Division till n/2
Sab se pehlay user se prompt() ki madad se aik number liya gaya aur usay Number() ke through integer mein convert kiya gaya.
isPrime() naam ka function banaya gaya jo user ke number ko Prime ya Non-Prime check karta hai.
Agar number 1 ya us se chhota ho to function false return karta hai kyun ke Prime Number hamesha 1 se bara hota hai.
Agar number even ho aur 2 na ho to function false return kar deta hai kyun ke 2 ke ilawa koi bhi even number Prime nahi hota.
Us ke baad loop 3 se start hota hai aur input_number / 2 tak sirf odd numbers ko check karta hai.
Agar kisi bhi number par remainder 0 aa jaye to function false return kar deta hai.
Agar poora loop complete ho jaye aur koi divisor na mile to function true return karta hai.
Function ki help se user ka number Prime ya Not Prime display kiya jata hai.
Isi function ko dobara use karte hue 1 se 1000 tak tamam Prime Numbers print kiye jate hain aur unki total counting bhi ki jati hai.

Method 2: Division till √n (Optimized Method)
Is method mein bhi user se input liya gaya.
isPrime() function use kiya gaya.
Initial checks bilkul pehle method ki tarah kiye gaye.
Is dafa loop input_number / 2 ki bajaye Math.sqrt(input_number) tak chalaya gaya.
Mathematical rule ke mutabiq agar kisi number ka factor square root tak nahi milta to uske baad bhi factor nahi milega.
Is wajah se kam iterations chalti hain aur program zyada fast execute hota hai.
Function ko use karke user ke number ka result show kiya gaya.
Isi function ki help se 1 se 1000 tak tamam Prime Numbers aur unki total quantity print ki gayi.


Method 3: Sieve of Eratosthenes
User se input liya gaya.
generatePrime(limit) naam ka function banaya gaya.
Ek array isPrime[] create ki gayi aur sab indexes ko true assign kiya gaya.
0 aur 1 ko manually false kiya gaya kyun ke ye Prime Numbers nahi hote.
Loop 2 se Math.sqrt(limit) tak chalaya gaya.
Agar current number Prime ho to uske tamam multiples ko false mark kar diya gaya.
Inner loop i * i se start kiya gaya kyun ke us se pehle wale multiples pehle hi remove ho chuke hote hain.
Jab algorithm complete hua to array mein sirf Prime Numbers true aur baqi tamam numbers false rahe.
User ke entered number ko isi array ki help se Prime ya Non-Prime check kiya gaya.
Phir generatePrime(1000) call kiya gaya aur 1 se 1000 tak tamam Prime Numbers display kiye gaye.
Har Prime Number ko print karte hue total Prime Numbers ki counting bhi ki gayi.


Comparison

Method 1 
Simple logic
Samajhna easy
Slow performance
Loop n/2 tak chalta hai
Time Complexity O(n) hoti h , kyuu k n/2 number check krta h apnay worst case mei b.

Method 2
Optimized solution
Faster than Method 1
Loop sirf √n tak chalta hai
Time Complexity O(√n) h , pehlay method k muqablay mei fast h kyuu k iteration km hoti hein iss ki .

Method 3 
Sab se efficient method
Ek hi baar mein limit tak tamam Prime Numbers generate karta hai
Large ranges ke liye best approach hai
Time Complexity approximately O(nlog(log(n))
