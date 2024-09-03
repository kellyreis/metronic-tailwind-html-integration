export function Comunidade() {
    return (
        <>
            <div className="mb-5 lg:mb-10">
                <div className=" flex items-center justify-between flex-wrap gap-5">
                    <div className="gap-1 lg:gap-5">
                        <h1 className="font-medium text-lg text-gray-900">
                            Comunidades
                        </h1>
                        <span className="text-gray-900">
                            Listagem de seus pacientes para discussão de caso, com outro terapeuta envolvido com seu paciente.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mb-5 lg:mb-10">
                <div className="card">
                    <div className="card-body min-w-full">
                        <div className="flex justify-between gap-6">
                            <div className="w-3/4">
                                <div className="input-group">
                                    <input className="input" placeholder="Buscar nome" type="text" value="" />
                                    <span className="btn btn-secondary">
                                        Procurar
                                    </span>
                                </div>
                            </div>
                            <div className="w-80">
                                <select className="select" name="select" title="Ordenar por: de A a Z">
                                    <option value="ASC">
                                        Ordenar por: de A a Z
                                    </option>
                                    <option value="DESC">
                                        Ordenar por: de Z a A
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="card card-grid min-w-full">
                    <div className="card-body">
                        <div data-datatable="true" data-datatable-page-size="10" className="datatable-initialized">
                            <div className="scrollable-x-auto">
                                <table className="table table-border" data-datatable-table="true" id="members_table">
                                    <thead>
                                        <tr>
                                            <th className="w-[60px] text-center">
                                                <input className="checkbox checkbox-sm" data-datatable-check="true" type="checkbox" title="Checkbox" />
                                            </th>
                                            <th className="min-w-[300px]">
                                                <span className="sort asc">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                        Nome
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                        Idade
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>
                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                        Terapia
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>

                                            <th className="min-w-[165px]">
                                                <span className="sort">
                                                    <span className="sort-label text-gray-700 font-bold">
                                                        Mensagem
                                                    </span>
                                                    <span className="sort-icon"></span>
                                                </span>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center">
                                                <input className="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="1" title="Checkbox" />
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2.5">
                                                    <div>
                                                        <img alt="" className="h-9 rounded-full" src="././media/avatars/300-3.png" />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="badge badge-sm badge-light badge-outline">
                                                            Tyler Hero
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <span className="leading-none text-gray-800 font-normal">
                                                    10 anos
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex flex-wrap gap-1.5">
                                                <span className="badge badge-sm">
                                                    PSCIOLOGO
                                                </span>
                                                <span className="badge badge-sm">
                                                    TO
                                                </span>
                                                </div>
                                             
                                            </td>

                                            <td>
                                                <div className="flex items-center gap-1.5">
                                                    <a title="mensagem" className="leading-none font-medium text-sm text-gray-900 hover:text-primary" href="/chat">
                                                        <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                                            <i className="ki-filled ki-message-text-2 text-lg"></i>
                                                        </span>
                                                    </a>
                                                </div>

                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                <div className="flex items-center gap-2 order-2 md:order-1">
                                    Show
                                    <select className="select select-sm w-16" data-datatable-size="true" name="perpage" title="Select number of items per page">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="50">50</option>
                                    </select>
                                    per page
                                </div>
                                <div className="flex items-center gap-4 order-1 md:order-2">
                                    <span data-datatable-info="true">1-10 of 33</span>
                                    <div className="pagination" data-datatable-pagination="true">
                                        <div className="pagination">
                                            <button className="btn disabled" title="Disabled Button">
                                                <i className="ki-outline ki-black-left"></i>
                                            </button>
                                            <button className="btn active disabled ">1</button>
                                            <button className="btn">2</button>
                                            <button className="btn">3</button>
                                            <button className="btn">...</button>
                                            <button className="btn" title="Cadastrar novo paciente">
                                                <i className="ki-outline ki-black-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}