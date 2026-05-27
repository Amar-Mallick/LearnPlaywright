function classifyJsBasicsScore(score) {
    switch (true) {
        case score >= 90: return 'EXCELLENT.';
        case score >= 75 && score < 90: return 'GOOD.';
        case score >= 50 && score < 75: return 'NEEDS_PRACTICE. ';
        case score < 50: return 'REVISIT.';
        default: return 'Invalid data';
    }
}
//Tc-01:
console.log(classifyJsBasicsScore(75));