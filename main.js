
function eh_incognita(value) {
    try {
        Number(value)
        return false;
    } catch (e) {
        return true;
    }
}

function separarOperandos(value) {
    const resp = {}
    let operandos
    // caso for + 
    if (value.includes(`+`)) {
        operandos = value.split(`+`)
        resp.opA = operandos[0]
        resp.opB = operandos[1]
        resp.simb = `+`
        return resp
    }

    if (value.includes(`-`)) {
        operandos = value.split(`-`)
        resp.opA = operandos[0]
        resp.opB = operandos[1]
        resp.simb = `-`
        return resp
    }

    if (value.includes(`x`)) {
        operandos = value.split(`x`)
        resp.opA = operandos[0]
        resp.opB = operandos[1]
        resp.simb = `x`
        return resp
    }

    if (value.includes(`/`)) {
        operandos = value.split(`/`)
        resp.opA = operandos[0]
        resp.opB = operandos[1]
        resp.simb = `/`
        return resp
    }
}

function calcular ({a, op , b}){
    if (op === `+`){
        return a + b
    }
    if (op === `-`){
        return a - b
    }
    if (op === `x`){
        return a * b
    }
    else{
        return a / b
    }
}

function operar(formula) {
    const output = document.querySelector(`#resultado`)

    const eq = formula.split(`=`)
    const ladoEsq = eq[0]
    const ladoDir = eq[1]
    
    const valoresDIR = separarOperandos(ladoDir)
    let A;
    let B;
    let resp;

    
    if ((valoresDIR.opA && valoresDIR.opAB) && !eh_incognita(valoresDIR.opA) || 
    !eh_incognita(valoresDIR.opB)) {
        A = Number(valoresDIR.opA)
        B = Number(valoresDIR.opB)
        resp = calcular({a:A, op:valoresDIR.simb, b:B})
        output.textContent = `${resp}`
    }
}

const button = document.querySelector(`.button`)
const input = document.querySelector(`.input`)

button.addEventListener(`click`, ()=>{
    const formula = input.value;
    console.log(`>>>>>f: `, formula)
})
// const form = document.querySelector(`.form`)
// form.addEventListener(`onsubmit`, (e)=>{
//     e.preventDefault();
//     console.log(`>>>>>e: `);
// })

