
function MenuJS({ menuUser, menuForm, menuFormUser }) {

    return (
        <div>
            <header className="flex justify-center bg-[#50d71e]">
                <br />
                <a href="/">HOME</a>
                -|-
                <a href="/logado/usuarios">{menuUser}</a>
                -|-
                <a href="/logado/formularios">{menuForm}</a>
                -|-
                <a href="//logado/formularios/usuarios">{menuFormUser}</a>
                <br />
            </header>
        </div>
    )
}

export { MenuJS }