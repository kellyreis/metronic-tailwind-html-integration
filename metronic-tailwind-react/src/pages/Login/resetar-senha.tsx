export function ResetarSenha() {

    return (
        <>
            <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg" style={{ backgroundImage: 'url(././media/images/2600x1200/bg-10-dark.png)' }}>
                <div className="card max-w-[370px] w-full">
                    <form action="#" className="card-body flex flex-col gap-5 p-10" id="reset_password_change_password_form" method="post">
                    <div className="text-center m-auto mb-2.5">
                            <a  href="/" title="Home">
                                <img
                                alt="logo"
                                    className="default-logo text-center  min-h-[22px] max-w-none"
                                    src="/media/app/default-logo.svg"
                                />

                            </a>
                        </div>
                        <div className="text-center">
                                                     <span className="text-2sm font-medium text-gray-600">
                              Entre com sua nova senha
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="form-label text-gray-900">
                              Informe o código enviado para o seu e-mail:
                            </label>
                            <input className="input" placeholder="Insira o codigo" type="text" value="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="form-label text-gray-900">
                                Nova Senha
                            </label>                          
                            <div className="relative w-full max-w-72" data-toggle-password="true" id="my_toggle_password">
                                <input className="input pr-10" placeholder="Informe nova senha" type="password" />
                                <div className="btn btn-icon btn-icon-lg absolute top-1/2 right-0 -translate-y-1/2 mr-1.5" data-toggle-password-trigger="true">
                                    <i className="ki-outline ki-eye text-gray-500 toggle-password-active:hidden">
                                    </i>
                                    <i className="ki-outline ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="form-label text-gray-900">
                                Confirme a nova senha
                            </label>                          
                            <div className="relative w-full max-w-72" data-toggle-password="true" id="my_toggle_password">
                                <input className="input pr-10" placeholder="Confirme sua nova senha" type="password" />
                                <div className="btn btn-icon btn-icon-lg absolute top-1/2 right-0 -translate-y-1/2 mr-1.5" data-toggle-password-trigger="true">
                                    <i className="ki-outline ki-eye text-gray-500 toggle-password-active:hidden">
                                    </i>
                                    <i className="ki-outline ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary flex justify-center grow">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}