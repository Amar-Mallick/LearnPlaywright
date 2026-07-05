// 1. Defining the Interface
interface UserProfile {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    // Optional property (indicated by ?)
    phoneNumber?: string;
    // Method signature
    displayInfo(): string;
}

// 2. Implementing the Interface
const amarProfile: UserProfile = {
    id: 101,
    username: "amar_mallick",
    email: "amar@example.com",
    isActive: true,
    displayInfo() {
        return `User ${this.username} is currently active.`;
    }
};

// 3. Using the object
console.log(amarProfile.displayInfo());