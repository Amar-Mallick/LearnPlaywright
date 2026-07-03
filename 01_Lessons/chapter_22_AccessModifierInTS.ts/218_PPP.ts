/**
 * In TS 3types access modifier available-(1)Public(2)Private(3)Protected
 * Public- Can access everywhere.
 * Private-Only access inside the class.
 * Protected- Access inside the class and child class.
 */
class APIClient {
    public baseUrl: string;
    private apiKey: string;
    protected timeDuration: number;
    constructor(url: string, key: string, time: number) {
        this.baseUrl = url;
        this.apiKey = key;
        this.timeDuration = time;
    }

    getKeyValue(): string {
        return this.apiKey;
    }

}
class User extends APIClient {
    getUsers(): void {
        console.log("Base Url value : " + this.baseUrl);
        console.log("Duration of time : " + this.timeDuration + "ms");
        console.log(this.getKeyValue());
    }
}
const str = new User("https://www.Vwo.com", "Api Key-3056", 3000);
str.getUsers();//Output : Base Url value : https://www.Vwo.com
// Duration of time : 3000ms
// Api Key-3056