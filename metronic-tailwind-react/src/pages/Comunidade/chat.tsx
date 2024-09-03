
import { Html } from "../../components/Content.tsx";


export function Chat() {
    return (
        <Html>
            <div className=" light:border-gray-300 w-full card pb-2.5">
                <div className="">
                    <div className="shadow-card border-b border-gray-200 py-2.5">
                        <div className="flex items-center justify-between flex-wrap gap-2 px-5">
                            <div className="flex items-center flex-wrap gap-2">
                                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-11">
                                    <img alt="" className="size-7" src="././media/brand-logos/gitlab.svg" />
                                </div>
                                <div className="flex flex-col">
                                    <a className="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                                        Agatha Emanuelly de Souza
                                    </a>
                                    <span className="text-2xs font-medium italic text-gray-500">
                                        12 anos | Autismo II
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="flex items-center gap-1">
                                    <a href="comunidade" className="btn btn-info">
                                        <i className="ki-outline ki-arrow-left">
                                        </i>
                                        Voltar
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="scrollable-y-auto" data-scrollable="true" data-scrollable-dependencies="#header" data-scrollable-max-height="auto" data-scrollable-offset="280px">
                    <div className="flex flex-col gap-5 py-5">
                        <div className="flex items-end gap-3.5 px-5">
                            <img alt="" className="rounded-full size-9" src="././media/avatars/300-5.png" />
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                                    <p className="text-2sm font-medium text-gray-700">
                                        Hello!
                                        <br />
                                        Next week we are closing the project. Do You have questions?
                                    </p>
                                </div>
                                <span className="text-2xs font-medium text-gray-500">
                                    14:04
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end justify-end gap-3.5 px-5">
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                                    <p className="text-2sm font-medium text-light">
                                        This is excellent news!
                                    </p>
                                </div>
                                <div className="flex items-center justify-end relative">
                                    <span className="text-2xs font-medium text-gray-600 mr-6">
                                        14:08
                                    </span>
                                    <i className="ki-filled ki-double-check text-lg absolute text-success">
                                    </i>
                                </div>
                            </div>
                            <div className="relative shrink-0">
                                <img alt="" className="rounded-full size-9" src="././media/avatars/300-2.png" />
                                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2">
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end gap-3.5 px-5">
                            <img alt="" className="rounded-full size-9" src="././media/avatars/300-4.png" />
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                                    <p className="text-2sm font-medium text-gray-700">
                                        I have checked the features, can not wait to demo them!
                                    </p>
                                </div>
                                <span className="text-2xs font-medium text-gray-500">
                                    14:26
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end gap-3.5 px-5">
                            <img alt="" className="rounded-full size-9" src="././media/avatars/300-1.png" />
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                                    <p className="text-2sm font-medium text-gray-700">
                                        I have looked over the rollout plan, and everything seems spot on. I am ready on my end and can not wait for the user feedback.
                                    </p>
                                </div>
                                <span className="text-2xs font-medium text-gray-500">
                                    15:09
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end justify-end gap-3.5 px-5">
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                                    <p className="text-2sm font-medium text-light">
                                        Haven't seen the build yet, I'll look now.
                                    </p>
                                </div>
                                <div className="flex items-center justify-end relative">
                                    <span className="text-2xs font-medium text-gray-600 mr-6">
                                        15:52
                                    </span>
                                    <i className="ki-filled ki-double-check text-lg absolute text-gray-400">
                                    </i>
                                </div>
                            </div>
                            <div className="relative shrink-0">
                                <img alt="" className="rounded-full size-9" src="././media/avatars/300-2.png" />
                                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2">
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end justify-end gap-3.5 px-5">
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                                    <p className="text-2sm font-medium text-light">
                                        Checking the build now
                                    </p>
                                </div>
                                <div className="flex items-center justify-end relative">
                                    <span className="text-2xs font-medium text-gray-600 mr-6">
                                        15:52
                                    </span>
                                    <i className="ki-filled ki-double-check text-lg absolute text-gray-400">
                                    </i>
                                </div>
                            </div>
                            <div className="relative shrink-0">
                                <img alt="" className="rounded-full size-9" src="././media/avatars/300-2.png" />
                                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2">
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end gap-3.5 px-5">
                            <img alt="" className="rounded-full size-9" src="././media/avatars/300-4.png" />
                            <div className="flex flex-col gap-1.5">
                                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                                    <p className="text-2sm font-medium text-gray-700">
                                        Tomorrow, I will send the link for the meeting
                                    </p>
                                </div>
                                <span className="text-2xs font-medium text-gray-500">
                                    17:40
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-2.5">       
                    <div className="relative grow mx-5">
                        <img alt="" className="rounded-full size-[30px] absolute left-0 top-2/4 -translate-y-2/4 ms-2.5" src="././media/avatars/300-2.png" />
                        <input className="input h-auto py-4 ps-12 bg-transparent" placeholder="Escreva uma mensagem..." type="text" value="" />
                        <div className="flex items-center gap-2.5 absolute right-3 top-1/2 -translate-y-1/2">
                          
                            <a className="btn btn-primary btn-sm" href="#">
                                ENVIAR
                            </a>
                        </div>                       
                    </div>
                    <div className="relative grow mx-5">
                    <span className="text-2xs font-medium text-gray-500">Faça a discussão do seu atendimento, para que outro profissional envolvido possa acessar.</span>
                    </div>
                </div>
            </div>

        </Html>
    )
}