import Formula from "../Formula"
import Tableaux from "../Tableaux"

const p = new Formula('P', "Atomic")
const q = new Formula('Q', "Atomic")
const not_p = p.negation()
const p_and_q = p.conjunction(q)
const p_and_q_basic = new Formula([new Formula('P', "Atomic"), '&', new Formula('Q', "Atomic")], "Conjunction")
const p_and_q_and_p_and_q_basic = p_and_q.conjunction(p_and_q_basic)
export const formula_tests = {
    p, q, not_p, p_and_q, p_and_q_basic, p_and_q_and_p_and_q_basic
}



const P = new Formula('P', "Atomic")
const not_P = P.negation()
const Q = new Formula('Q', "Atomic")
const R = new Formula ('R', "Atomic")
const not_Q = Q.negation()
const P_or_Q = P.disyunction(Q)
const T_P_or_Q = new Tableaux(P_or_Q)
const T_P_and_P_or_Q = new Tableaux(P.conjunction(P_or_Q))
const T_P_and_not_P = new Tableaux(P.conjunction(not_P))
const T_P_and_Q_and_P_conditional_not_Q = new Tableaux(P.conjunction(Q).conjunction(P.conditional(not_Q)))

export const tableaux_tests = {
    P,
not_P,
Q,
R,
not_Q,
P_or_Q,
T_P_or_Q,
T_P_and_P_or_Q,
T_P_and_not_P,
T_P_and_Q_and_P_conditional_not_Q

}



