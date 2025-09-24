
export const employmentGap = (value: number) => {
    if (value === 0 || value <= 3) {
        return 25
    }
    else if (value === 4) {
        return 0;
    }
    else if (value === 5 || value === 6) {
        return -10
    } else if (value > 6) {
        return -25
    } else {
        return 0
    }
}