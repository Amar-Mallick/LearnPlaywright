let responsecode: number[] = [200, 201, 305, 403, 500];
function getFailedCode(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    })
}
console.log("Allcodes", responsecode);//Allcodes [ 200, 201, 305, 403, 500 ]
console.log("Failcode", getFailedCode(responsecode));//Failcode [ 403, 500 ]

