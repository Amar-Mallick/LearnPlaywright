/**Abstraction (The Concept):->1)Abstraction means hiding complex internal details and showing only the essential features to the user. 
It answers the question: "What does it do?" rather than "How does it do it?"
2)In Ts we can achieve it using (1) Interface (2)Enum (3)Abstract class */
//Ex->Achieve Abstractions  using Interface ......->>>>>>>>
interface Browser {
    closeBrowser(): void; // Just a headline! No actual code allowed here.
}

class Chrome implements Browser {
    closeBrowser() {
        console.log("Closing Chrome window via DevTools protocols..."); // Must write logic from scratch
    }
}
const c = new Chrome();
c.closeBrowser();//Closing Chrome window via DevTools protocols...