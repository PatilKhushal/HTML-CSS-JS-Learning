/* 
    abb dekh bhai NodeJs ek aaisa javascript runtime environment hai jo hum windows ya kisi bhi OS mein run kr sakte hai
    browser ka kya scene hai woh security ke chalte file system ko access nahi deta kisi bhi js script ko
    parantu node ki js hidden hoti hai aur usse hum system access kr sakte par sirf locally yane ke jab woh humare isme install ho ga tab
    agar humari website online hai toh woh aaise script joh system access karna chahe usse silent kar degi 
*/

/* 

    * node ke sahayta se hume npm milta hai yaane ki node-package-manager
    * yeh package manager humare project ke ssare dependencies ka khayal rakhta hai
    * toh kisi bhi project ko node project karne hetu bass npm init kar do jo package.json banaygi
    * abb agar hum koi module npm se install bhi karte hai toh woh automatically dependencies mein chala jayega
    * aur ha jab hum koi module install karte hai na Node ki madat se tab node_module naam ka folder banta hai
    * uss folder ko humne agar delete bhi kar dia tabb bhi humara project bindass chalega bass hume npm install command ko run karna hota hai
    * abb npm install package.json ke andar jo bhi dependencies hai usse install kar deta hai
*/