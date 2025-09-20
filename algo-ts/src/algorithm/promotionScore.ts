
export const promotionScore = (value:number) => {
    const pts = 8.3;
    let finalPts = 0;
    if(value <= 2){
         finalPts = value*pts;
    }else{
         finalPts = 25;
    }
    return finalPts
}