function landing() {

    alert('Para se cadastrar, basta clicar no botão "assinar" do plano desejado')
    const links = document.querySelectorAll('.link');
    const planos = document.querySelectorAll('.plano');
    const areaCadastro = document.querySelector('#area-cadastro');
    const linkCadastro = document.querySelector('#link-cadastro');
    const dropdown = document.querySelector('#dropdown');
    const cadastrar = document.querySelector('#btn-cadastro');

    links.forEach(link => {
        link.addEventListener('click', function(e) {

            removerSelectedClass();
            link.classList.add('selected');

            el = e.target;
            if (el === linkCadastro) {
                abrirCadastro();
            }
        })
    }) 

    function removerSelectedClass() {
        links.forEach(link => {
            link.classList.remove('selected');
        })
    }

    planos.forEach(plano => {
        plano.addEventListener('click', function(e) {
            const el = e.target;

            if (el.classList.contains('plano-assinar')) {
                const planoEscolhido = el.getAttribute('id');
                
                mudarDropdown(planoEscolhido);
                abrirCadastro();
            }
        })
    })

    function mudarDropdown(plano) {
        switch (plano) {
            case 'basico':
                dropdown.value = 'basico';
                break;
             case 'anual':
                dropdown.value = 'anual';
                break;
             case 'simples':
                dropdown.value = 'simples';
                break;
        }
    }

    function abrirCadastro() {
        areaCadastro.classList.add('open')
        console.log('abriu');
    }

    areaCadastro.addEventListener('click', function(e) {
        e.preventDefault();
        el = e.target;
        
        if (el === cadastrar) {
            alert('Cadastro feito com sucesso');
            areaCadastro.classList.remove('open');
        }
    })
}

landing();