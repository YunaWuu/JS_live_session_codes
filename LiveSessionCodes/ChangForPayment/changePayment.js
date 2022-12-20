function change(paidAmount, totalAmount) {
    // step 1 calculate the changeAmount = paidAmount - totalAmount
    // paidAmount = 100, totalAmount = 56
    // changeAmount = 44
   
    var changeAmount = paidAmount - totalAmount;
    console.log(changeAmount);
    var changeNotes = {
        20: 0,
        1: 0
    };
    // step 2 creating a loop and starting form the largest note
    var currentChange = changeNotes[20] * 20 + changeNotes[1] * 1;
    while (currentChange < changeAmount) {
        currentChange = changeNotes[20] * 20 + changeNotes[1] * 1;

        if(currentChange + 20 == changeAmount) {
            // use one more 20 note and break the loop
            changeNotes[20]++;
            break;
        } else if(currentChange + 20 < changeAmount) {
            // use one more 20 note and continue with the loop
            changeNotes[20]++;
        } else { // currentChange + 20 > changeAmount
            // use smaller notes
            while (currentChange < changeAmount) {
                currentChange = changeNotes[20] * 20 + changeNotes[1] * 1;
                if(currentChange + 1 == changeAmount) {
                    // use one more 1 note and break
                    changeNotes[1]++;
                    break;
                } else if(currentChange + 1 < changeAmount) {
                    // use one more 1 note and continue with the loop
                    changeNotes[1]++;
                } else { // currentChange + 1 > changeAmount
                    // this should not happen
                    console.log("should not be here");
                }
            }
        }

    }
    return changeNotes;
}

/*
challenge 1
add 10, 5 dollar notes into the system

challenge 2
return all possible solutions

challenge 3
consider the available notes for making changes, and return the doable solution only.
*/