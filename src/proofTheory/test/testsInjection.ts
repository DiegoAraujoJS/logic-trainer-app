import Formula from "../Formula"
export const p = new Formula('P')
export const q = new Formula('Q')
export const not_p = p.negation()
export const p_and_q = p.conjunction(q)
export const p_and_q_basic = new Formula([new Formula('P'), '&', new Formula('Q')])
export const p_and_q_and_p_and_q_basic = p_and_q.conjunction(p_and_q_basic)
