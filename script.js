const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit); 

function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue("gender");
    const activityLevel = getSelectedValue("activity-level");
    const age = getInputNumberValue("age");
    const weight = getInputNumberValue("weight");
    const height = getInputNumberValue("height");

    const result = calculateResult(gender, activityLevel, age, weight, height);
    const resultLayout = document.getElementById("result");
    resultLayout.innerHTML = renderResult(result);
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function calculateResult(gender, activityLevel, age, weight, height) {

    const tmb = (
        gender === 'female'
        ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );

    const maintenance = Math.round(tmb * Number(activityLevel));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    return result = { tmb, maintenance, loseWeight, gainWeight};
}

function renderResult(result) {
    const layout = `
        <h2>Aqui está o resultado:</h2>

        <div class = "result-content">
            <ul>
                <li> 
                    Seu metabolismo atual é de <strong>${result.tmb}
                    calorias</strong>.
                </li>
                <li>
                    Para manter seu peso você precisa consumir em média <strong>
                    ${result.maintenance} calorias</strong>.
                </li>
                <li>
                    Para perder peso voçê deve consumir em média
                     <strong>${result.loseWeight} calorias</strong>.
                </li>
                <li>
                    Para ganhar peso você deve consumir em média
                     <strong>${result.gainWeight} calorias</strong>.
                </li>
            </ul>
    `;

    return layout;
}