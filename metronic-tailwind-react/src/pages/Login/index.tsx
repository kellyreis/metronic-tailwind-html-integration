

export function Login() {

    return (
        <>
            <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg" style={{ backgroundImage: 'url(././media/images/2600x1200/bg-10-dark.png)' }} >
                <div className="card max-w-[370px] w-full">
                    <form action="#" className="card-body flex flex-col gap-5 p-10" id="sign_in_form" method="get">
                        <div className="text-center m-auto mb-2.5">
                            <a  href="/" title="Home">
                                <img
                                alt="logo"
                                    className="default-logo text-center  min-h-[22px] max-w-none"
                                    src="/media/app/default-logo.svg"
                                />

                            </a>
                        </div>
                        <div className="flex items-center justify-center font-medium">
                            <span className="text-2sm text-gray-600 me-1.5 text-center">
                                Gerenciamento de pacientes de forma simples e eficiente!
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="form-label text-gray-900">
                                Email
                            </label>
                            <input className="input" placeholder="email@email.com" type="text" value="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between gap-1">
                                <label className="form-label text-gray-900">
                                    Password
                                </label>
                                <a className="text-2sm link shrink-0" href="recuperar-senha">
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <div className="relative w-full max-w-72" data-toggle-password="true" id="my_toggle_password">
                                <input className="input pr-10" placeholder="Password" type="password" />
                                <div className="btn btn-icon btn-icon-lg absolute top-1/2 right-0 -translate-y-1/2 mr-1.5" data-toggle-password-trigger="true">
                                    <i className="ki-outline ki-eye text-gray-500 toggle-password-active:hidden">
                                    </i>
                                    <i className="ki-outline ki-eye-slash text-gray-500 hidden toggle-password-active:block">
                                    </i>
                                </div>
                            </div>
                        </div>
                        <label className="checkbox-group">
                            <input className="checkbox checkbox-sm" name="check" type="checkbox" value="1" />
                            <span className="checkbox-label">
                                Lembrar-me
                            </span>
                        </label>
                        <button className="btn btn-primary flex justify-center grow">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}