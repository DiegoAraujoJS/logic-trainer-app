import Formula from "../Formula";
import * as sample from './testsInjection'
describe('formula properties and methods tests', ()=>{
    it('should generate constituents', ()=>{
        const p = sample.p_and_q.inmediate_constituents![0]
        const p2 = sample.p_and_q_basic.inmediate_constituents![0]
        const p_and_q_and_p_and_q_basic = sample.p_and_q_and_p_and_q_basic
        expect(p).toBeInstanceOf(Formula)
        expect(p.formula).toBe('P')
        expect(sample.not_p.inmediate_constituents![0]).toBe(p)
        expect(sample.not_p.inmediate_constituents![1]).toBe(null)
        expect(p2.formula).toBe('P')
        expect(sample.p.inmediate_constituents).toBe(null)
        expect(p_and_q_and_p_and_q_basic.inmediate_constituents![0]).toBe(sample.p_and_q)
        expect(p_and_q_and_p_and_q_basic.inmediate_constituents![1]).toBe(sample.p_and_q_basic)
        
    })
    it ('should ')
})