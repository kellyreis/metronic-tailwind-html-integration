

export function CheckEmail() {

    return (
        <>
            <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg" style={{ backgroundImage: 'url(././media/images/2600x1200/bg-10-dark.png)' }}>
                <div className="card max-w-[440px] w-full">
                    <div className="card-body p-10">
                    <div className="text-center m-auto mb-2.5">
                            <a  href="/" title="Home">
                                <img
                                alt="logo"
                                    className="default-logo text-center  min-h-[22px] max-w-none"
                                    src="/media/app/default-logo.svg"
                                />

                            </a>
                        </div>
                        <div className="flex justify-center py-10">
                            <img alt="image" className="dark:hidden max-h-[130px]" src="././media/illustrations/30.svg" />
                            <img alt="image" className="light:hidden max-h-[130px]" src="././/media/illustrations/30-dark.svg" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
                           Verifique seu e-mail
                        </h3>
                          <div className="text-2sm font-medium text-center text-gray-600 mb-7.5">
                        Click no link enviado no e-mail: 
                            
                            <a className="text-2sm text-gray-800 font-medium hover:text-primary-active" href="#">
                                bob@reui.io
                            </a>
                            <br />
                        para resetar sua senha.
                        </div>
                        <div className="flex justify-center mb-5">
                            <a className="btn btn-primary flex justify-center" href="/">
                                Login
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-xs font-medium text-gray-600">
                               Não recebeu e-mail?
                            </span>
                            <a className="text-xs font-medium link" href="recuperar-senha">
                                Envie novamente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}