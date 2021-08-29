import {tableaux_tests as sample} from './testsInjection'

describe('Tableaux and validity tests', () => {

    it ('should verify correctly closed Tableaux', () => {
        expect(sample.T_P_or_Q.isClosed).toBe(false)
        // T_P_and_P_or_Q --> open Tableaux
        //      P & (P v Q)
        //      P
        //      (P v Q)
        //          /\
        //         /  \
        //        P    Q
        expect (sample.T_P_and_P_or_Q.isClosed).toBe(false)

        expect(sample.T_P_and_not_P.isClosed).toBe(true)
        // T_P_and_Q_and_P_conditional_not_Q --> closed Tableaux
        //  P & Q & (P --> ¬Q) 
        //      P
        //      Q & (P --> ¬Q) 
        //      Q
        //      P --> ¬Q
        //      /\
        //     /  \
        //  ¬P     ¬Q 

        expect(sample.T_P_and_Q_and_P_conditional_not_Q.isClosed).toBe(true)
    })
})