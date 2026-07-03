class APIClient {
    public baseUrl: string;
    private apiKey: string;
    protected timeDuration: number;
    constructor(url: string, key: string, time: number) {
        this.baseUrl = url;
        this.apiKey = key;
        this.timeDuration = time;
    }

    private getValue(): string {
        return this.apiKey;
    }
    setUsers(): void {
        console.log("Base Url value : " + this.baseUrl);
        console.log("Duration of time : " + this.timeDuration + "ms");
        console.log(this.getValue());
    }

}
class User extends APIClient {
    callUsers(): void {
        console.log("URL-> ", this.baseUrl);
        console.log("Time Duration -> ", this.timeDuration, "ms");

    }

}
const str = new User("https://www.TTACART.com", "Api Key-4536", 3000);
str.callUsers();//Output : URL->  https://www.TTACART.com
//Time Duration ->  3000 ms
