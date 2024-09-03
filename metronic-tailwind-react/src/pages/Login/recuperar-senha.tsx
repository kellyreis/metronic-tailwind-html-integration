export function RecuperarSenha() {

    return (
        <>
            <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg" style={{ backgroundImage: 'url(././media/images/2600x1200/bg-10-dark.png)' }}>
                <div className="card max-w-[370px] w-full">
                    <form action="#" className="card-body flex flex-col gap-5 p-10" id="reset_password_enter_email_form" method="post">
                        
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
                            <h3 className="text-lg font-semibold text-gray-900">
                                Seu E-mail
                            </h3>
                            <span className="text-2sm text-gray-600 font-medium">
                               Entre com seu e-mail para recuperar sua senha
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="form-label text-gray-900">
                              E-mail
                            </label>
                            <input className="input" placeholder="email@email.com" type="text" value="" />
                        </div>
                        <a className="btn btn-primary flex justify-center grow" href="check-email">
                            Continue
                            <i className="ki-filled ki-black-right">
                            </i>
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}