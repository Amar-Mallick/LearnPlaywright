// 'T' stands for the dynamic Data Type the API will return
interface ApiResponse<T> {
    status: "success" | "error";
    statusCode: number;
    data: T | null;            // Dynamic payload
    errorMessage?: string;     // Optional error message
}
interface UserProfile {
    id: number;
    username: string;
    email: string;
}

interface TestReport {
    testId: string;
    passed: boolean;
}

// Scenario A: Handling a User Profile response
const userResponse: ApiResponse<UserProfile> = {
    status: "success",
    statusCode: 200,
    data: {
        id: 101,
        username: "qa_tester",
        email: "tester@company.com"
    }
};

// Scenario B: Handling a Test Report response
const reportResponse: ApiResponse<TestReport> = {
    status: "success",
    statusCode: 200,
    data: {
        testId: "TC-404",
        passed: false
    }
};

// Scenario C: Handling an Error response
const errorResponse: ApiResponse<any> = {
    status: "error",
    statusCode: 404,
    data: null,
    errorMessage: "User profile not found."
};
