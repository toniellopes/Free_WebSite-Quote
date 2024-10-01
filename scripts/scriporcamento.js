document.addEventListener('DOMContentLoaded', () => {
    const tipoPagina = document.getElementById('tipoPagina');
    const prazo = document.getElementById('prazo');
    const separadores = document.querySelectorAll('input[name="separadores"]');
    const orcamentoFinal = document.getElementById('orcamentoFinal');

    function calcularOrcamento() {
        let precoBase = parseInt(tipoPagina.value);
        let desconto = 0;
        if (prazo.value) {
            desconto = Math.min(prazo.value * 0.05, 0.20);
        }
        let precoSeparadores = 0;
        separadores.forEach(separador => {
            if (separador.checked) {
                precoSeparadores += parseInt(separador.value);
            }
        });
        let total = precoBase + precoSeparadores;
        total = total - (total * desconto);
        orcamentoFinal.value = `€${total.toFixed(2)}`;
    }

    tipoPagina.addEventListener('change', calcularOrcamento);
    prazo.addEventListener('input', calcularOrcamento);
    separadores.forEach(separador => {
        separador.addEventListener('change', calcularOrcamento);
    });
});
